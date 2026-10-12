#!/usr/bin/env python
"""Prove the cell-assignment step before any real paint exists.

    python trace/selftest-paint.py [lineart.png]

Scribbles a stroke well INSIDE each of the nine largest cells of the
line art, one part colour each, and runs masks-from-paint over the
result. What it checks is the mechanism, not the anatomy -- the
"parts" it paints are chambers and voids, which is nonsense as a
valve and perfect as a test, because every one of them has a boundary
the drawing itself defines and the output can be compared against it.

Passes when each colour comes back as its own part whose area is the
cell it was painted into, plus the linework around it, and nothing
else. The failure it was written to catch is the one it caught: the
"brush did not quite reach" rule applied repeatedly cascades, and six
rounds of it gave one part a third of the drawing.
"""
import os
import subprocess
import sys
import tempfile

import cv2
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
def _parts():
    """The colour table out of masks-from-paint itself, never restated.

    This file used to carry its own copy of the nine hexes, and the
    moment the real paint came back with two of them on a neighbouring
    swatch the copy was stale and the selftest went red for a reason
    that had nothing to do with the mechanism it tests. The test must
    paint with whatever the step is currently looking for.
    """
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        'masks_from_paint', os.path.join(HERE, 'masks-from-paint.py'))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.PARTS


PARTS = _parts()
COLS = [cols[0] for _, cols, _ in PARTS]   # the canonical swatch of each
NAMES = [n for n, _, _ in PARTS]


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
        HERE, 'ground-truth', 'ed-fig19-full-capacity-ED.png')
    line = np.array(Image.open(src).convert('L'))
    ink = line < 128
    n, cells = cv2.connectedComponents((~ink).astype(np.uint8),
                                       connectivity=4)
    sizes = np.bincount(cells.ravel(), minlength=n)
    border = set(np.unique(np.concatenate([
        cells[0, :], cells[-1, :], cells[:, 0], cells[:, -1]])).tolist())
    order = [l for l in np.argsort(sizes)[::-1] if l > 0 and l not in border]

    img = np.dstack([line] * 3).copy()
    want = {}
    for i, lbl in enumerate(order[:len(COLS)]):
        # eroded, so the stroke never touches the cell's own edge --
        # which is the whole premise: stay inside, ignore the boundary
        m = cv2.erode((cells == lbl).astype(np.uint8),
                      np.ones((9, 9), np.uint8), iterations=1)
        ys, xs = np.nonzero(m)
        if len(ys) < 50:
            continue
        k = len(ys) // 2
        sel = slice(max(0, k - len(ys) // 4), k + len(ys) // 4)
        img[ys[sel], xs[sel]] = COLS[i]
        want[NAMES[i]] = int(sizes[lbl])

    tmp = tempfile.mkdtemp(prefix='trace-selftest-')
    painted = os.path.join(tmp, 'painted.png')
    Image.fromarray(img).save(painted)
    r = subprocess.run(
        [sys.executable, os.path.join(HERE, 'masks-from-paint.py'),
         src, painted, os.path.join(tmp, 'masks')],
        capture_output=True, text=True)
    print(r.stdout)
    if r.stderr.strip():
        print(r.stderr)

    import json
    rep = json.load(open(os.path.join(tmp, 'masks', '_report.json')))
    bad = []
    for name, cell_px in want.items():
        got = rep['parts'].get(name)
        if got is None:
            bad.append('%s never came back' % name)
        elif got < cell_px:
            bad.append('%s came back SMALLER than the cell painted into '
                       '(%d < %d) -- the assignment lost part of it'
                       % (name, got, cell_px))
        elif got > cell_px * 1.8:
            bad.append('%s came back %.1fx the cell painted into (%d vs %d)'
                       ' -- it has eaten something it was not given'
                       % (name, got / cell_px, got, cell_px))
    if rep['ambiguous']:
        bad.append('%d ambiguous cells on a synthetic paint with one '
                   'colour per cell -- there is nothing to be ambiguous '
                   'about' % rep['ambiguous'])

    print('painted %d cells, got %d parts back' % (len(want), len(rep['parts'])))
    for b in bad:
        print('  FAIL  ' + b)
    if not bad:
        print('  ok    every part is its own cell plus the linework '
              'around it, and nothing else')
    print('  (preview: %s)' % os.path.join(tmp, 'masks', '_preview.png'))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
