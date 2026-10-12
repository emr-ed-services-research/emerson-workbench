#!/usr/bin/env python
"""Which regions a part is claiming that are shaped like voids.

    python trace/paint-grey-here.py <lineart.png> <masksdir> [out.png]

A cell that a part has claimed but which carries no hatching, and is
blob-shaped rather than a stripe, is a suspect: metal in section is
hatched, so an unhatched blob inside the casting is usually a passage,
a bore or an open chamber that a stroke wandered into.

Usually, not always -- a part the figure draws in EXTERIOR view carries
no hatching either. So this marks suspects and does not act on them.
Each one is numbered on the picture and listed with its size, and a
grey stroke through the ones that really are void settles it, because
then the cell has paint of its own and the step stops having to guess.
"""
import os
import sys

import cv2
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
INK = 128
SLIVER_FILL = 0.42
MIN_SUSPECT = 8000      # px; below this a stray claim is not worth a trip to Paint


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
    line_path, masksdir = sys.argv[1], sys.argv[2]
    out = sys.argv[3] if len(sys.argv) > 3 else os.path.join(
        masksdir, '_paint-grey-here.png')

    PARTS, NOT_METAL = parts()
    line = np.array(Image.open(line_path).convert('L'))
    ink = line < INK
    ncells, cells = cv2.connectedComponents((~ink).astype(np.uint8),
                                            connectivity=4)
    sizes = np.bincount(cells.ravel(), minlength=ncells)

    owner = {}
    for name, _, _ in PARTS:
        f = os.path.join(masksdir, name + '.png')
        if os.path.exists(f):
            owner[name] = np.array(Image.open(f).convert('L')) > 127

    border = set(np.unique(np.concatenate([
        cells[0, :], cells[-1, :], cells[:, 0], cells[:, -1]])).tolist())

    canvas = np.dstack([np.full(line.shape, 255, np.uint8)] * 3)
    suspects = []
    for lbl in range(1, ncells):
        if sizes[lbl] < MIN_SUSPECT or lbl in border:
            continue
        m = cells == lbl
        who = None
        for name, mask in owner.items():
            if name in NOT_METAL:
                continue
            if mask[m].mean() > 0.5:
                who = name
                break
        if who is None:
            continue
        ys, xs = np.nonzero(m)
        y0, y1, x0, x1 = ys.min(), ys.max(), xs.min(), xs.max()
        box = (y1 - y0 + 1) * (x1 - x0 + 1)
        # A HATCHED REGION IS NOT ONE CELL, IT IS MANY SLIVERS, so being
        # a sliver is the whole test for "this is sectioned metal" and
        # there is nothing further to ask. The first version of this
        # also measured ink inside the cell's BOUNDING BOX, which is a
        # different thing entirely: a passage's box takes in the hatched
        # walls on both sides of it, reads as densely inked, and the
        # passage gets dismissed as metal. That filtered out the two
        # largest genuine voids in Figure 19 -- the inlet and outlet
        # bores, 59 548 and 61 324 px -- which are precisely what this
        # was written to find. A cell contains no ink by construction;
        # only its shape can be asked.
        if sizes[lbl] < SLIVER_FILL * box:
            continue                                  # a hatch stripe
        suspects.append((lbl, int(sizes[lbl]), who,
                         int(xs.mean()), int(ys.mean())))

    suspects.sort(key=lambda t: -t[1])
    for i, (lbl, n, who, cx, cy) in enumerate(suspects, 1):
        canvas[cells == lbl] = (255, 190, 60)
    canvas[ink] = (60, 60, 60)
    im = Image.fromarray(canvas)

    # number each one on the picture, big enough to read at full size
    from PIL import ImageDraw
    d = ImageDraw.Draw(im)
    for i, (lbl, n, who, cx, cy) in enumerate(suspects, 1):
        r = 34
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(200, 30, 30))
        d.text((cx - 8 * len(str(i)), cy - 14), str(i), fill=(255, 255, 255))
    im.save(out)

    print('\nCLAIMED BY A PART, BUT SHAPED AND DRAWN LIKE A VOID\n')
    if not suspects:
        print('  none -- nothing a part claims looks like a passage.\n')
        return 0
    for i, (lbl, n, who, cx, cy) in enumerate(suspects, 1):
        print('  %2d.  %8d px   claimed by %-9s  centred x=%d y=%d'
              % (i, n, who, cx, cy))
    print('\n  %d region(s), %d px. A grey stroke through each one that '
          'really is\n  void settles it. Numbered on %s\n'
          % (len(suspects), sum(t[1] for t in suspects), out))
    return 0


if __name__ == '__main__':
    sys.exit(main())
