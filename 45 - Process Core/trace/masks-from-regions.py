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

    os.makedirs(outdir, exist_ok=True)
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
