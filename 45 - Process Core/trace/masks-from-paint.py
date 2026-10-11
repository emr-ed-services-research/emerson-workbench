#!/usr/bin/env python
"""Painted scribbles + engineering linework -> per-part masks.

    python trace/masks-from-paint.py <lineart.png> <painted.png> [outdir]

WHY THIS IS NOT THE 657'S VERSION
---------------------------------
That one was painted over shaded illustration art, where each part is a
single contiguous region and a flood fill is the whole job. These are
HATCHED engineering sections. A part in section is not one region -- it
is forty thin parallelograms between forty hatch lines -- and a flood
fill catches one of them.

So the roles are split. THE PAINT SAYS WHICH PART A REGION IS. THE
LINEWORK SAYS WHERE THAT PART ENDS. The drawing is cut into every
closed cell it contains, each hatch stripe included, and each cell is
assigned to whichever part colour covers most of it. The boundary then
comes off the engineering drawing pixel-exact rather than off a brush
stroke, and the painter only has to stay inside a part instead of
following its edge.

WHAT IT REFUSES TO GUESS
------------------------
A cell with two colours fighting over it, a part colour that never
appears, a painted pixel outside every cell: each is reported and none
is resolved by picking the larger number. An unassigned cell that
touches exactly ONE part and no other is absorbed into it -- that is
the "brush did not quite reach the edge" case and it has only one
answer. An unassigned cell touching two parts is left alone and
listed, because that one has two.
"""
import json
import os
import sys

import cv2
import numpy as np
from PIL import Image

# MS Paint's default palette, which is what the painter was asked for.
# Matched by nearest colour, so drift between editors does not matter;
# the names are what the report prints.
PARTS = [
    ('body',      (0xED, 0x1C, 0x24), 'red'),
    ('bonnet',    (0xFF, 0x7F, 0x27), 'orange'),
    ('cage',      (0x00, 0xA2, 0xE8), 'turquoise'),
    ('plug',      (0xFF, 0xF2, 0x00), 'yellow'),
    ('stem',      (0xA3, 0x49, 0xA4), 'purple'),
    ('seatRing',  (0x22, 0xB1, 0x4C), 'green'),
    ('packing',   (0xFF, 0xAE, 0xC9), 'rose'),
    ('bolting',   (0x3F, 0x48, 0xCC), 'indigo'),
    ('drainPlug', (0xB9, 0x7A, 0x57), 'brown'),
]
NEUTRAL = [(0xFF, 0xFF, 0xFF), (0x00, 0x00, 0x00)]   # not parts

INK = 128          # line art: below this is a line
MIN_PAINT = 0.25   # a cell must be at least this painted to vote at all
MIN_SHARE = 0.70   # and its winner must hold this much of the paint
MIN_CELL = 12      # px; smaller cells are noise between hatch lines


def nearest_part(rgb):
    """Index into PARTS, or -1 for neutral/unknown. Whole-image, vectorised."""
    h, w, _ = rgb.shape
    flat = rgb.reshape(-1, 3).astype(np.int32)
    swatches = np.array([c for _, c, _ in PARTS] + NEUTRAL, dtype=np.int32)
    d = ((flat[:, None, :] - swatches[None, :, :]) ** 2).sum(axis=2)
    idx = d.argmin(axis=1)
    idx[idx >= len(PARTS)] = -1          # white and black are not parts
    return idx.reshape(h, w)


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    line_path, paint_path = sys.argv[1], sys.argv[2]
    outdir = sys.argv[3] if len(sys.argv) > 3 else os.path.join(
        os.path.dirname(line_path) or '.', 'masks')

    line = np.array(Image.open(line_path).convert('L'))
    paint = np.array(Image.open(paint_path).convert('RGB'))
    if line.shape != paint.shape[:2]:
        raise SystemExit(
            'the painted file is %dx%d and the line art is %dx%d. They have '
            'to be the same picture -- paint ON the file in ground-truth, do '
            'not resize or re-crop it, or every cell lands somewhere else.'
            % (paint.shape[1], paint.shape[0], line.shape[1], line.shape[0]))

    ink = line < INK
    open_px = (~ink).astype(np.uint8)
    ncells, cells = cv2.connectedComponents(open_px, connectivity=4)
    part_of_px = nearest_part(paint)

    print('\nline art %dx%d   %d closed cells in it' %
          (line.shape[1], line.shape[0], ncells - 1))

    # ---- which part owns each cell -------------------------------------
    assign = np.full(ncells, -1, dtype=np.int32)   # cell -> part index
    sizes = np.bincount(cells.ravel(), minlength=ncells)
    ambiguous, unpainted_big = [], []
    # background: the cell touching the frame is not inside the valve
    border = set(np.unique(np.concatenate([
        cells[0, :], cells[-1, :], cells[:, 0], cells[:, -1]])).tolist())

    for lbl in range(1, ncells):
        if sizes[lbl] < MIN_CELL:
            continue
        sel = cells == lbl
        votes = part_of_px[sel]
        painted = votes[votes >= 0]
        if painted.size < MIN_PAINT * sizes[lbl]:
            if sizes[lbl] > 400 and lbl not in border:
                unpainted_big.append((lbl, int(sizes[lbl])))
            continue
        counts = np.bincount(painted, minlength=len(PARTS))
        win = int(counts.argmax())
        share = counts[win] / painted.size
        if share < MIN_SHARE:
            order = counts.argsort()[::-1]
            ambiguous.append((lbl, int(sizes[lbl]),
                              PARTS[order[0]][0], int(counts[order[0]]),
                              PARTS[order[1]][0], int(counts[order[1]])))
            continue
        assign[lbl] = win

    # ---- cells the brush did not reach, where there is only one answer --
    adj = {}
    ys, xs = np.nonzero(ink)
    H, W = cells.shape
    for y, x in zip(ys, xs):
        y0, y1 = max(0, y - 2), min(H, y + 3)
        x0, x1 = max(0, x - 2), min(W, x + 3)
        near = np.unique(cells[y0:y1, x0:x1])
        near = [int(v) for v in near if v > 0]
        for a in near:
            adj.setdefault(a, set()).update(v for v in near if v != a)

    # ONE PASS, AGAINST THE PAINT AND NOT AGAINST ITSELF. Iterating this
    # cascades: an unpainted cell absorbed into the bonnet makes ITS
    # neighbour touch only the bonnet, and six rounds later the bonnet
    # has eaten a third of the drawing. On the synthetic test that put
    # 171 580 px into a part whose painted cell was 61 324. "The brush
    # did not quite reach" is one cell wide by definition; anything
    # that needs two hops is not that, it is unpainted, and unpainted
    # is a thing to report rather than to infer.
    seed = assign.copy()
    painted_area = np.zeros(len(PARTS), dtype=np.int64)
    for lbl in range(1, ncells):
        if seed[lbl] >= 0:
            painted_area[seed[lbl]] += sizes[lbl]
    absorbed = 0
    for lbl in range(1, ncells):
        if seed[lbl] >= 0 or sizes[lbl] < MIN_CELL or lbl in border:
            continue
        touching = {int(seed[n]) for n in adj.get(lbl, ()) if seed[n] >= 0}
        if len(touching) != 1:
            continue
        p = touching.pop()
        # AND IT HAS TO BE A SLIVER. A cell half the size of everything
        # that WAS painted for that part is not an edge the brush
        # missed, it is a region nobody painted -- which is a thing to
        # report, not to hand to whatever happens to border it.
        if sizes[lbl] > 0.5 * painted_area[p]:
            if sizes[lbl] > 400:
                unpainted_big.append((lbl, int(sizes[lbl])))
            continue
        assign[lbl] = p
        absorbed += 1

    # ---- the linework itself belongs to what it bounds -----------------
    lab = np.zeros(cells.shape, dtype=np.int16)
    lab[:] = -1
    for lbl in range(1, ncells):
        if assign[lbl] >= 0:
            lab[cells == lbl] = assign[lbl]
    for _ in range(4):
        unknown = (lab < 0) & ink
        if not unknown.any():
            break
        grown = lab.copy()
        for p in range(len(PARTS)):
            m = cv2.dilate((lab == p).astype(np.uint8),
                           np.ones((3, 3), np.uint8), iterations=1)
            take = (m > 0) & unknown & (grown < 0)
            grown[take] = p
        if (grown == lab).all():
            break
        lab = grown

    # ---- out -----------------------------------------------------------
    os.makedirs(outdir, exist_ok=True)
    found, missing = [], []
    for p, (name, _, swatch) in enumerate(PARTS):
        m = (lab == p)
        if not m.any():
            missing.append((name, swatch))
            continue
        found.append((name, int(m.sum())))
        Image.fromarray((m * 255).astype(np.uint8)).save(
            os.path.join(outdir, name + '.png'))

    prev = np.zeros(paint.shape, dtype=np.uint8)
    prev[:] = 255
    for p, (_, col, _) in enumerate(PARTS):
        prev[lab == p] = col
    prev[ink & (lab < 0)] = (40, 40, 40)
    Image.fromarray(prev).save(os.path.join(outdir, '_preview.png'))

    print('\nassigned:')
    for name, n in found:
        print('   %-10s %8d px' % (name, n))
    if absorbed:
        print('\n%d cell(s) the brush did not reach were absorbed into the '
              'one part they touch' % absorbed)
    if missing:
        print('\nNOT PAINTED -- no pixel of these colours was found:')
        for name, swatch in missing:
            print('   %-10s (%s)' % (name, swatch))
    if ambiguous:
        print('\nAMBIGUOUS -- two colours fighting over one cell. Not '
              'resolved by taking the larger; fix the paint:')
        for lbl, n, a, na, b, nb in ambiguous[:20]:
            print('   cell %-6d %6d px   %s %d vs %s %d' %
                  (lbl, n, a, na, b, nb))
        if len(ambiguous) > 20:
            print('   ... and %d more' % (len(ambiguous) - 20))
    if unpainted_big:
        print('\nUNPAINTED and large -- fluid, or a part that was missed:')
        for lbl, n in sorted(unpainted_big, key=lambda t: -t[1])[:12]:
            print('   cell %-6d %6d px' % (lbl, n))

    meta = {'source': os.path.basename(line_path),
            'painted': os.path.basename(paint_path),
            'size': [int(line.shape[1]), int(line.shape[0])],
            'cells': int(ncells - 1), 'absorbed': int(absorbed),
            'parts': {n: px for n, px in found},
            'missing': [n for n, _ in missing],
            'ambiguous': len(ambiguous)}
    with open(os.path.join(outdir, '_report.json'), 'w') as f:
        json.dump(meta, f, indent=1)
    print('\nwrote %s  --  look at _preview.png before anything else\n'
          % outdir)
    return 1 if (missing or ambiguous) else 0


if __name__ == '__main__':
    sys.exit(main())
