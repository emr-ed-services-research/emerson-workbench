#!/usr/bin/env python
"""The painted image IS the geometry. One colour, one part, no inference.

    python trace/masks-from-regions.py <painted.png> <outdir>

THE DIFFERENCE FROM masks-from-paint.py. That one takes a scribble and
works out which closed cell of the engineering linework each stroke
belongs to -- the paint says WHICH part, the drawing says WHERE it
ends. It exists because filling a hatched region exactly, by hand, is
miserable work, and because the drawing's own lines are more accurate
than a traced edge.

This one is for when somebody has done that work anyway. Franz colours
each region exactly, having deleted the leader lines and callout
bubbles, and then the paint is not a vote about a cell -- it is the
mask. Where the colour changes is where the part ends. Nothing here
consults the linework, assigns a cell, grows a boundary, symmetrizes,
smooths, or decides anything at all.

WHAT IT STILL DOES, because none of it is a judgement about the valve:

  An UNDECLARED colour stops the run, naming the hex and the count. A
  neighbouring swatch picked by mistake would otherwise lose a part
  silently, and absent looks exactly like never-painted.

  A BLEND -- a colour lying on the line between two declared ones -- is
  reported but not assigned. A hard-edged tool makes none; a feathered
  brush makes a band of them along every edge, and that is worth
  knowing before it becomes geometry.

  A COLOUR MAY HAVE TO SERVE TWO PARTS. There are only so many squares
  on the palette, and a figure can come back with one grey meaning both
  the packing flange and the process void. The sidecar may then name a
  region by a point inside it -- "regions" -- and that region, bounded
  by the painting's OWN edges, moves to the named part. The boundary is
  still entirely Franz's; the sidecar only says which side of his line
  is which. A seed that does not land on the stated colour stops the
  run, because a repaint will have moved it.

  ANY PIXEL LEFT OVER is reported with its position. Black linework
  that has not been coloured over is the common case, and it leaves a
  gap between two parts that should meet. Better to say so than to
  close it with a rule.
"""
import json
import os
import sys

import cv2
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
TOL = 24          # px distance; a hard-edged tool lands on the swatch
BLEND_TOL = 40
REPORT_MIN = 150  # px of one leftover colour before it is worth naming
POCKET_MIN = 200  # px of void before it counts as its own pocket


def parts():
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        'masks_from_paint', os.path.join(HERE, 'masks-from-paint.py'))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.PARTS, getattr(mod, 'NOT_METAL', set())


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    painted, outdir = sys.argv[1], sys.argv[2]
    PARTS, NOT_METAL = parts()

    # the same per-figure map the vote-mode reader honours: a painting
    # may declare what its colours meant, and that wins for that figure
    side = os.path.splitext(painted)[0] + '.map.json'
    side_doc = {}
    if os.path.exists(side):
        doc = side_doc = json.load(open(side))
        known = {n for n, _, _ in PARTS}
        parts_l = [(n, list(c), sw) for n, c, sw in PARTS]
        for hexs, nm in (doc.get('colours') or {}).items():
            if nm not in known:
                raise SystemExit('%s names part "%s", which is not in PARTS.'
                                 % (os.path.basename(side), nm))
            rgb = tuple(int(hexs.lstrip('#')[i:i + 2], 16) for i in (0, 2, 4))
            parts_l = [(n, [x for x in c if x != rgb], sw)
                       for n, c, sw in parts_l]
            parts_l = [(n, (c + [rgb]) if n == nm else c, sw)
                       for n, c, sw in parts_l]
        PARTS = parts_l
        if doc.get('note'):
            print(chr(10) + 'map override for this figure: ' + doc['note'])

    img = np.array(Image.open(painted).convert('RGB'))
    H, W, _ = img.shape
    flat = img.reshape(-1, 3).astype(np.int32)

    swatch, owner = [], []
    for i, (_, cols, _) in enumerate(PARTS):
        for c in cols:
            swatch.append(c)
            owner.append(i)
    S = np.array(swatch, dtype=np.int32)
    owner = np.array(owner, dtype=np.int32)

    uniq, inv = np.unique(flat, axis=0, return_inverse=True)
    u = uniq.astype(np.float64)
    d = ((u[:, None, :] - S[None, :, :]) ** 2).sum(axis=2)
    j = d.argmin(axis=1)
    near = d[np.arange(len(u)), j]
    cls = np.where(near <= TOL * TOL, owner[j], -1)

    # anything not on a swatch: blend, or simply left over
    blends, leftover = [], []
    for k in np.nonzero(cls < 0)[0]:
        q = u[k]
        best = np.inf
        for a in range(len(S)):
            for b in range(a + 1, len(S)):
                p0, p1 = S[a].astype(float), S[b].astype(float)
                seg = p1 - p0
                L2 = float(seg @ seg)
                if L2 == 0:
                    continue
                t = float(np.clip(((q - p0) @ seg) / L2, 0.0, 1.0))
                best = min(best, float(((q - (p0 + t * seg)) ** 2).sum()))
        n = int((inv == k).sum())
        (blends if best <= BLEND_TOL * BLEND_TOL else leftover).append(
            (tuple(int(v) for v in q), n))

    lab = cls[inv].reshape(H, W)

    # ---- one colour, two parts ---------------------------------------
    #
    # Declared in the sidecar as a point inside the region. The region
    # is the connected run of that colour containing the point, so its
    # edges are the ones in the painting -- this reassigns, it does not
    # redraw. A seed off the stated colour is a hard stop: a repaint
    # moves pixels, and a seed that has drifted would quietly claim
    # whatever it landed in.
    if side_doc.get('regions'):
        index = {n: i for i, (n, _, _) in enumerate(PARTS)}
        print('REGIONS NAMED BY POINT' + chr(10))
        for r in side_doc['regions']:
            nm, hexs = r['part'], r['colour']
            if nm not in index:
                raise SystemExit('regions names part "%s", not in PARTS.' % nm)
            rgb = tuple(int(hexs.lstrip('#')[i:i + 2], 16) for i in (0, 2, 4))
            src = ((img[:, :, 0] == rgb[0]) & (img[:, :, 1] == rgb[1]) &
                   (img[:, :, 2] == rgb[2])).astype(np.uint8)
            n_cc, cc = cv2.connectedComponents(src, 8)
            took = 0
            for x, y in r['at']:
                if not src[y, x]:
                    raise SystemExit(
                        'regions: seed (%d,%d) for %s is #%02X%02X%02X in the '
                        'file, not %s. The painting has changed under the '
                        'sidecar -- re-read it, do not guess.'
                        % (x, y, nm, img[y, x, 0], img[y, x, 1], img[y, x, 2],
                           hexs))
                m = (cc == cc[y, x])
                took += int(m.sum())
                lab[m] = index[nm]
            print('   %-14s %8d px from %s, %d region(s)   %s'
                  % (nm, took, hexs, len(r['at']), r.get('why', '')))
        print('')

    # ---- the linework, and ONLY the linework -------------------------
    #
    # Franz colours every region and leaves the drawing's black lines
    # alone. Those lines are real -- they are the boundary between two
    # parts -- but they belong to no colour, so left as they are every
    # part ends a line-width short of its neighbour and the valve draws
    # with a crack along every joint.
    #
    # Each unclaimed pixel goes to the NEAREST painted one. That is the
    # whole of it: no cells, no voting, no absorbing a region he did not
    # paint. A line two pixels wide splits down the middle between the
    # two parts it separates, which is where the boundary is. Nothing
    # else in this file moves a pixel he placed.
    # WHITE IS BACKGROUND AND STAYS BACKGROUND. It is the one colour
    # that means "not part of the valve", so it is never grown into --
    # only the black linework and any feathered edge is.
    # A VOID'S POCKETS MUST NOT GROW INTO ONE ANOTHER, and this is the
    # one thing the growth got wrong. Franz paints each passage, bore
    # and chamber, and the drawing's own lines separate them: the body
    # chamber, the clearance round the cage, the bore above the plug and
    # the packing box are four spaces, not one. Grown naively, the two
    # pixels of ink between two of them get one pixel each and the
    # pockets touch -- and then the layers above read one connected
    # volume and the process floods the packing box. That is not a
    # drawing error, it is a flow path that does not exist.
    #
    # So the void grows POCKET BY POCKET: each of its painted regions is
    # its own claimant, two claimants meeting stop against each other,
    # and a hairline of ink is left between them rather than being split.
    # The metal is grown as before and must be -- Franz fills each hatch
    # stripe with the bucket, so one casting arrives as hundreds of
    # painted slivers that the ink is what joins back together.
    white = (img[:, :, 0] > 240) & (img[:, :, 1] > 240) & (img[:, :, 2] > 240)
    slot = lab.copy()             # as lab, but the void is split by pocket
    of_part = list(range(len(PARTS)))
    pockets = {}
    for p, (name, _, _) in enumerate(PARTS):
        if name not in NOT_METAL:
            continue
        n_cc, cc, st, _c = cv2.connectedComponentsWithStats(
            (lab == p).astype(np.uint8), 8)
        keep = [i for i in range(1, n_cc)
                if st[i, cv2.CC_STAT_AREA] >= POCKET_MIN]
        if len(keep) < 2:
            continue
        pockets[name] = len(keep)
        for i in keep:
            slot[cc == i] = len(of_part)
            of_part.append(p)
    if pockets:
        print('  the void grows pocket by pocket: %s'
              % ', '.join('%s in %d pockets' % (k, v)
                          for k, v in pockets.items()))

    unknown = (slot < 0) & ~white
    if unknown.any():
        n0 = int(unknown.sum())
        for _ in range(12):
            if not unknown.any():
                break
            grown = slot.copy()
            for q in range(len(of_part)):
                mm = cv2.dilate((slot == q).astype(np.uint8),
                                np.ones((3, 3), np.uint8), iterations=1)
                take = (mm > 0) & unknown & (grown < 0) & ~white
                grown[take] = q
            if (grown == slot).all():
                break
            slot = grown
            unknown = (slot < 0) & ~white
        print('  linework closed: %d px of %d assigned to the nearest '
              'painted colour' % (n0 - int(unknown.sum()), n0))

    # the hairline: a grown void pixel touching a DIFFERENT pocket of the
    # same void is on the boundary between two spaces, so it belongs to
    # neither. Only grown pixels are eligible -- a pixel Franz painted is
    # never taken away from him.
    lab_was, lab = lab, np.array([of_part[q] if q >= 0 else -1
                                  for q in range(len(of_part))] + [-1],
                                 np.int32)[slot]
    cut = 0
    for name in pockets:
        p = [i for i, (n, _, _) in enumerate(PARTS) if n == name][0]
        edge = np.zeros(slot.shape, bool)
        for q in range(len(of_part)):
            if of_part[q] != p:
                continue
            others = (lab == p) & (slot != q)
            near = cv2.dilate((slot == q).astype(np.uint8),
                              np.ones((3, 3), np.uint8), iterations=1) > 0
            edge |= near & others
        edge &= (lab_was < 0)
        cut = int(edge.sum())
        lab[edge] = -1
    if cut:
        print('  %d px of ink left unclaimed on a pocket-to-pocket '
              'boundary -- two spaces, not one' % cut)

    os.makedirs(outdir, exist_ok=True)
    # a part absent from this painting must not be left behind from the
    # last one -- a stale mask is a part that exists only in a folder
    for _n, _c, _s in PARTS:
        _f = os.path.join(outdir, _n + '.png')
        if os.path.exists(_f):
            os.remove(_f)
    print('\n%dx%d, %d distinct colours in the file\n' % (W, H, len(uniq)))
    print('ASSIGNED, EXACTLY AS PAINTED\n')
    found, missing, report = [], [], {}
    for p, (name, _, sw) in enumerate(PARTS):
        m = (lab == p)
        n = int(m.sum())
        if not n:
            missing.append((name, sw))
            continue
        Image.fromarray((m * 255).astype(np.uint8)).save(
            os.path.join(outdir, name + '.png'))
        found.append((name, n))
        report[name] = n
        print('   %-10s %9d px%s' % (name, n,
              '   (not metal -- the declared void)' if name in NOT_METAL else ''))

    prev = np.full((H, W, 3), 255, np.uint8)
    for p, (_, cols, _) in enumerate(PARTS):
        prev[lab == p] = cols[0]
    Image.fromarray(prev).save(os.path.join(outdir, '_preview.png'))

    if missing:
        print('\nNOT PAINTED -- no pixel of these colours is in the file:')
        for name, sw in missing:
            print('   %-10s (%s)' % (name, sw))

    if blends:
        tot = sum(n for _, n in blends)
        print('\nBLENDED EDGES -- %d px across %d colours. A hard-edged tool'
              '\nmakes none of these; a feathered one makes a band along every'
              '\nedge. Not assigned.' % (tot, len(blends)))
        for (r, g, b), n in sorted(blends, key=lambda t: -t[1])[:5]:
            if n >= REPORT_MIN:
                print('   #%02X%02X%02X %8d px' % (r, g, b, n))

    big = [(c, n) for c, n in leftover if n >= REPORT_MIN]
    if big:
        tot = sum(n for _, n in leftover)
        print('\nLEFT OVER -- %d px claimed by no part. Black linework not'
              '\ncoloured over is the usual cause, and it leaves a gap between'
              '\ntwo parts that should meet.' % tot)
        for (r, g, b), n in sorted(big, key=lambda t: -t[1])[:8]:
            ys, xs = np.nonzero((img[:, :, 0] == r) & (img[:, :, 1] == g) &
                                (img[:, :, 2] == b))
            print('   #%02X%02X%02X %8d px   around x=%d y=%d'
                  % (r, g, b, n, int(xs.mean()), int(ys.mean())))

    meta = {'painted': os.path.basename(painted), 'size': [W, H],
            'mode': 'regions -- the paint is the mask, nothing inferred',
            'parts': report, 'missing': [n for n, _ in missing],
            'blendPx': int(sum(n for _, n in blends)),
            'leftoverPx': int(sum(n for _, n in leftover))}
    with open(os.path.join(outdir, '_report.json'), 'w') as fh:
        json.dump(meta, fh, indent=1)
    print('\nwrote %s -- look at _preview.png before anything else\n' % outdir)
    return 1 if missing else 0


if __name__ == '__main__':
    sys.exit(main())
