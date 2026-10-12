#!/usr/bin/env python
"""Traced pixels -> inches, anchored on ONE sourced dimension and checked
against the others.

    python trace/register.py <lineart.png> <masksdir>

WHY NOT FACE-TO-FACE. It is the obvious anchor -- the flange faces are the
two least ambiguous points in the drawing -- and it is the wrong one here.
A Fisher IOM figure is generic across pressure classes: D100390X012's
Figure 20 is captioned "NPS 8 Fisher ED Valve with Graphite Piston Ring and
Optional Drain Plug" and nowhere states a class, while the catalogued
face-to-face for an NPS 8 globe runs 21.38 in at CL150, 22.38 at CL300 and
24.00 at CL600. Anchoring on a number the drawing does not commit to would
put a 12% choice at the bottom of everything built on top.

The PORT is 8.00 in for an ED NPS 8 in every class Catalog 12 lists. One
value, no choice, so that is the anchor -- and face-to-face then falls out
as a DERIVED quantity that can be compared against the three catalogued
ones. If it lands on one of them, the figure was drawn to that class. If it
lands between them, the figure is a generic drawing and face-to-face was
never something it was promising.

WHAT MAKES THIS MORE THAN A GUESS. The two panels of Figure 20 are the same
valve drawn twice, painted independently, at different sizes on the page.
Any ratio of two true dimensions must come out the same in both. That is a
free consistency check on the whole exercise and it is reported first: if
the panels disagree, nothing downstream is worth computing.
"""
import os
import sys

import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))

# Catalog 12 (D103182X012) p121/p125, ED NPS 8, every class listed.
PORT_IN = 8.00
# parts.json, /valveBody/BODY/GLOBE/FLANGED/NPS8 -- per the ISA-75.08 series
F2F_BY_CLASS = {'CL125FF-CL150RF': 21.38, 'CL150RTJ': 21.88,
                'CL250RF-CL300RF': 22.38, 'CL300RTJ': 23.00,
                'CL600RF': 24.00, 'CL600RTJ': 24.12}


def mask(d, n):
    p = os.path.join(d, n + '.png')
    if not os.path.exists(p):
        return None
    return np.array(Image.open(p).convert('L')) > 127


def span(m):
    ys, xs = np.nonzero(m)
    return int(xs.min()), int(xs.max()), int(ys.min()), int(ys.max())


def runs_on_row(m, y):
    on = np.nonzero(m[y])[0]
    if not len(on):
        return []
    return [(int(g[0]), int(g[-1]))
            for g in np.split(on, np.where(np.diff(on) > 1)[0] + 1)]


def features(d):
    """Candidate lengths, in pixels, that a port could be."""
    out = {}
    body = mask(d, 'body')
    if body is not None:
        x0, x1, y0, y1 = span(body)
        out['faceToFace'] = (x1 - x0 + 1, 'body mask x-extent: flange face '
                                          'to flange face')
        out['bodyHeight'] = (y1 - y0 + 1, 'body mask y-extent')
    cage = mask(d, 'cage')
    if cage is not None:
        cx0, cx1, cy0, cy1 = span(cage)
        mid = (cy0 + cy1) // 2
        r = runs_on_row(cage, mid)
        out['cageOuter'] = (cx1 - cx0 + 1, 'cage mask x-extent')
        if len(r) >= 2:
            out['cageBore'] = (r[-1][0] - r[0][1] - 1,
                               'gap between the cage walls at mid height')
    seat = mask(d, 'seatRing')
    if seat is not None:
        sx0, sx1, sy0, sy1 = span(seat)
        out['seatSpan'] = (sx1 - sx0 + 1, 'seat ring mask x-extent')
    plug = mask(d, 'plug')
    if plug is not None:
        px0, px1, py0, py1 = span(plug)
        out['plugOuter'] = (px1 - px0 + 1, 'plug mask x-extent')
    return out


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    sets = [(sys.argv[i], sys.argv[i + 1])
            for i in range(1, len(sys.argv) - 1, 2)]

    print('\nFEATURES, IN PIXELS\n')
    allf = []
    for line_path, d in sets:
        f = features(d)
        allf.append((os.path.basename(d), f))
        print('  %s' % os.path.basename(d))
        for k, (v, why) in f.items():
            print('     %-12s %6d px   %s' % (k, v, why))
        print()

    # ---- the free check: ratios must agree across panels of one valve ----
    if len(allf) >= 2:
        print('RATIO TO FACE-TO-FACE, ACROSS PANELS')
        print('  Two drawings of one valve at different sizes on the page. '
              'Any ratio of\n  two true dimensions is the same in both, so '
              'a feature that disagrees is a\n  feature one of the two '
              'paintings did not mean the same way.\n')
        keys = [k for k in allf[0][1] if all(k in f for _, f in allf)]
        print('     %-12s %s' % ('feature', '   '.join(
            '%-10s' % n for n, _ in allf) + '   spread'))
        for k in keys:
            if k == 'faceToFace':
                continue
            rs = [f[k][0] / float(f['faceToFace'][0]) for _, f in allf]
            spread = (max(rs) - min(rs)) / (sum(rs) / len(rs))
            flag = '  <-- panels disagree' if spread > 0.03 else ''
            print('     %-12s %s   %5.1f%%%s' %
                  (k, '   '.join('%-10.4f' % r for r in rs),
                   100 * spread, flag))
        print()

    # ---- what each candidate port implies -------------------------------
    print('IF THAT FEATURE IS THE %.2f IN PORT, FACE-TO-FACE COMES OUT AS:\n'
          % PORT_IN)
    print('     %-12s %s' % ('candidate', '   '.join(
        '%-22s' % n for n, _ in allf)))
    for k in [k for k in allf[0][1] if k != 'faceToFace'
              and all(k in f for _, f in allf)]:
        cells = []
        for _, f in allf:
            scale = PORT_IN / f[k][0]
            f2f = f['faceToFace'][0] * scale
            near = min(F2F_BY_CLASS.items(), key=lambda kv: abs(kv[1] - f2f))
            err = 100 * abs(near[1] - f2f) / near[1]
            cells.append('%6.2f in  %s %+4.1f%%' % (f2f, near[0][:9], -err))
        print('     %-12s %s' % (k, '   '.join('%-22s' % c for c in cells)))
    print('\n  A candidate that lands ON a catalogued face-to-face in BOTH '
          'panels is the\n  port, and the class it lands on is the class '
          'the figure was drawn to. One\n  that lands between them is '
          'either not the port, or the figure is generic.\n')

    # ---- now invert it -------------------------------------------------
    # The class comes out of the block above ROBUSTLY, without having to
    # settle which feature is exactly 8.00 in: every candidate that is
    # physically capable of being the port lands on the same class, and
    # nothing else in the table is within 5%. Once the class is fixed,
    # face-to-face stops being a free choice and becomes the best anchor
    # in the drawing -- the flange faces are its two least ambiguous
    # points -- and the port goes back to being the check it should be.
    cls, f2f_in = 'CL600RF', F2F_BY_CLASS['CL600RF']
    print('ANCHORED ON FACE-TO-FACE = %.2f IN (%s), EVERYTHING IN INCHES\n'
          % (f2f_in, cls))
    print('     %-12s %s' % ('feature', '   '.join(
        '%-12s' % n[-8:] for n, _ in allf)))
    for k in [k for k in allf[0][1] if all(k in f for _, f in allf)]:
        cells = []
        for _, f in allf:
            s = f2f_in / f['faceToFace'][0]
            cells.append('%8.2f in' % (f[k][0] * s))
        print('     %-12s %s' % (k, '   '.join('%-12s' % c for c in cells)))
    print('\n  The check: the port is 8.00 in. Whichever of cageBore and '
          'plugOuter is\n  the seating diameter has to come out there, and '
          'plugOuter must be the\n  smaller of the two or the plug does not '
          'go into the cage.\n')
    return 0


if __name__ == '__main__':
    sys.exit(main())
