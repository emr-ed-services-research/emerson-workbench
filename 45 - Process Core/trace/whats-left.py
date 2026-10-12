#!/usr/bin/env python
"""What the paint has not claimed yet, drawn so it can be painted.

    python trace/whats-left.py <lineart.png> <masksdir> [out.png]

WHY THIS EXISTS. masks-from-paint prints unassigned cells as a list of
label numbers and pixel counts, which is useless to a human holding a
paint bucket -- "cell 441, 90632 px" says nothing about WHERE. This
draws them instead: the drawing in pale grey, everything already
assigned in its part colour at low strength, and every unclaimed cell
in solid magenta.

IT SORTS THE UNCLAIMED BY SHAPE, AND THAT IS A HINT AND NOT A VERDICT.
A sliver -- a cell that fills under half its own bounding box -- is a
stripe between two hatch lines, so it is sectioned metal somebody has
to paint, and it is drawn in loud magenta. A blob is drawn pale.

But a blob is NOT the same as fluid. A flow passage is a blob, and so
is any part the figure draws in exterior view rather than in section,
because an unsectioned part carries no hatching and comes back as one
big open cell. In Figure 19 the cage and the plug are both drawn that
way. So the pale regions are "unclaimed, and shaped like a void" --
which is right for a passage and wrong for a part, and only the eye
can tell those apart. Read the picture, not the pixel counts.
"""
import json
import os
import sys

import cv2
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
INK = 128
MIN_CELL = 12


def parts():
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        'masks_from_paint', os.path.join(HERE, 'masks-from-paint.py'))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.PARTS


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    line_path, masksdir = sys.argv[1], sys.argv[2]
    out = sys.argv[3] if len(sys.argv) > 3 else os.path.join(
        masksdir, '_whats-left.png')

    PARTS = parts()
    line = np.array(Image.open(line_path).convert('L'))
    ink = line < INK
    ncells, cells = cv2.connectedComponents((~ink).astype(np.uint8),
                                            connectivity=4)
    sizes = np.bincount(cells.ravel(), minlength=ncells)

    claimed = np.zeros(line.shape, dtype=bool)
    canvas = np.full(line.shape + (3,), 255, dtype=np.uint8)
    for name, cols, _ in PARTS:
        col = cols[0]
        f = os.path.join(masksdir, name + '.png')
        if not os.path.exists(f):
            continue
        m = np.array(Image.open(f).convert('L')) > 127
        claimed |= m
        # washed out, so the magenta is the only thing that reads
        canvas[m] = (255 - (255 - np.array(col)) * 0.30).astype(np.uint8)

    border = set(np.unique(np.concatenate([
        cells[0, :], cells[-1, :], cells[:, 0], cells[:, -1]])).tolist())

    # A HATCH STRIPE IS LONG AND THIN. A passage is not. The test is the
    # cell's area against the area of its own bounding box: a stripe cut
    # between two parallel 45-degree hatch lines fills well under half
    # of the box around it, because the box is the diagonal's extent.
    # A flow passage is a blob and fills most of its box. Nothing here
    # decides anything -- it only chooses what to colour loudly.
    waiting, fluid = [], []
    for lbl in range(1, ncells):
        n = int(sizes[lbl])
        if n < MIN_CELL or lbl in border:
            continue
        m = cells == lbl
        if claimed[m].mean() > 0.5:
            continue
        ys, xs = np.nonzero(m)
        box = (ys.max() - ys.min() + 1) * (xs.max() - xs.min() + 1)
        thin = n / float(box) < 0.42
        (waiting if thin else fluid).append((lbl, n, thin))

    for lbl, n, _ in waiting:
        canvas[cells == lbl] = (255, 0, 255)
    for lbl, n, _ in fluid:
        canvas[cells == lbl] = (225, 240, 255)
    canvas[ink] = (70, 70, 70)
    Image.fromarray(canvas).save(out)

    tot_w = sum(n for _, n, _ in waiting)
    tot_f = sum(n for _, n, _ in fluid)
    print('\nUNCLAIMED, SORTED BY SHAPE -- a hint, not a verdict\n')
    print('  magenta   %4d cells  %8d px   slivers between hatch lines: '
          'sectioned metal, paint it' % (len(waiting), tot_w))
    print('  pale      %4d cells  %8d px   open blobs: a passage, OR a part '
          'the figure' % (len(fluid), tot_f))
    print('                                         draws unsectioned so it '
          'carries no hatching.')
    print('                                         Look at them before '
          'deciding either way.')
    print('\n  biggest slivers still waiting:')
    for lbl, n, _ in sorted(waiting, key=lambda t: -t[1])[:8]:
        ys, xs = np.nonzero(cells == lbl)
        print('     %7d px  around x=%d y=%d' %
              (n, int(xs.mean()), int(ys.mean())))
    print('\n  biggest blobs being left alone:')
    for lbl, n, _ in sorted(fluid, key=lambda t: -t[1])[:6]:
        ys, xs = np.nonzero(cells == lbl)
        print('     %7d px  around x=%d y=%d' %
              (n, int(xs.mean()), int(ys.mean())))
    print('\nwrote %s\n' % out)
    return 0


if __name__ == '__main__':
    sys.exit(main())
