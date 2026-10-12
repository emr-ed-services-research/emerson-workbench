#!/usr/bin/env python
"""Per-part masks -> polygons, with holes, and a proof you can look at.

    python trace/contours.py <lineart.png> <masksdir> [outdir]

Writes `<outdir>/contours.json` and `<outdir>/_contours.svg`.

WHAT A POLYGON HERE IS. One part, one or more rings, in IMAGE PIXELS
with y down. The outer ring is counter-clockwise and every hole is
clockwise, so an even-odd or non-zero fill both give the same answer
and the rings can be handed to anything without a convention argument.
A part that appears as several separate pieces -- the two halves of a
flange in section, the four pieces of `hardware` -- comes back as
several outer rings, each with its own holes, because that is what it
is. Nothing is merged and nothing is dropped for being small except
specks below MIN_RING, which are mask edge noise rather than parts.

SIMPLIFICATION IS MEASURED, NOT CHOSEN. Douglas-Peucker with a
tolerance, and then the result is CHECKED: the simplified ring is
rasterised back and compared against the mask it came from. The report
prints, per part, the worst disagreement in pixels. A tolerance that
loses a chamfer shows up there as a number instead of being discovered
later in a drawing nobody can explain.

WHAT THIS IS NOT. It is not geometry. There is no scale here, no
inches, no registration to a flange face, no coordinate system but the
figure's own. Turning pixels into dimensions is a separate step with
its own sources, and conflating the two is how a traced picture
quietly becomes a measurement.
"""
import json
import os
import sys

import cv2
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
MIN_RING = 60        # px of area; below this is mask edge noise
TOL = 1.5            # px, Douglas-Peucker
INK = 128


def parts():
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        'masks_from_paint', os.path.join(HERE, 'masks-from-paint.py'))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.PARTS, getattr(mod, 'NOT_METAL', set())


def signed_area(ring):
    x = ring[:, 0].astype(np.float64)
    y = ring[:, 1].astype(np.float64)
    return 0.5 * float(np.dot(x, np.roll(y, -1)) - np.dot(y, np.roll(x, -1)))


def orient(ring, ccw):
    """Return the ring wound the way asked. y is DOWN, so a positive
    signed area in screen coordinates is a clockwise ring on screen."""
    a = signed_area(ring)
    want_negative = ccw
    if (a < 0) != want_negative:
        return ring[::-1]
    return ring


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    line_path, masksdir = sys.argv[1], sys.argv[2]
    outdir = sys.argv[3] if len(sys.argv) > 3 else masksdir

    PARTS, NOT_METAL = parts()
    line = np.array(Image.open(line_path).convert('L'))
    H, W = line.shape

    # THE REFINEMENT STAGE, which this pipeline went without until
    # 2026-10-12 while the 657 Working Model's `refine2.py` had been
    # doing it since September. See trace/refine.py for what each step
    # answers; the short of it is that a mask traced off paint is not
    # ready to be a polygon.
    import importlib.util as _ilu
    _sp = _ilu.spec_from_file_location('refine', os.path.join(HERE, 'refine.py'))
    REF = _ilu.module_from_spec(_sp)
    _sp.loader.exec_module(REF)
    _cf = os.path.join(masksdir, 'cage.png')
    AXIS = (REF.axis_of(np.array(Image.open(_cf).convert('L')) > 127)
            if os.path.exists(_cf) else None)
    print('\nREFINED before contouring (axis x=%s)'
          % ('%.1f' % AXIS if AXIS is not None else 'unknown'))

    doc = {'source': os.path.basename(line_path),
           'size': [int(W), int(H)],
           'units': 'image pixels, y down',
           'simplifyTolPx': TOL,
           'declared': 'Traced outlines in the figure\'s own pixels. NOT '
                       'dimensions: no scale, no registration, no inches. '
                       'Converting these to real geometry is a separate '
                       'step with its own sources.',
           'parts': {}}
    rows = []

    for name, _, _ in PARTS:
        f = os.path.join(masksdir, name + '.png')
        if not os.path.exists(f):
            continue
        raw = (np.array(Image.open(f).convert('L')) > 127).astype(np.uint8)
        mask = REF.refine(raw, name, AXIS)
        print('  ' + REF.report(raw, mask, name))
        # GROWN BY ONE PIXEL, so neighbours SHARE their boundary rather
        # than each stopping short of it. Every boundary in the drawing
        # is a line of ink, and that line is assigned to exactly one of
        # the two parts it separates -- so the other one ends a pixel or
        # two early, and after simplification the pair leaves a visible
        # white seam between them. The traced valve looked like it was
        # coming apart along every joint. A one-pixel overlap is
        # invisible, because one part is simply drawn over the other; a
        # one-pixel gap is not. It is a RENDER remedy and it is applied
        # to the outline only -- `maskAreaPx` below is still the mask as
        # assigned, so the disagreement figure keeps measuring what it
        # always measured.
        grown = cv2.dilate(mask, np.ones((5, 5), np.uint8), iterations=1)
        cs, hier = cv2.findContours(grown, cv2.RETR_CCOMP,
                                    cv2.CHAIN_APPROX_SIMPLE)
        if hier is None:
            continue
        hier = hier[0]

        pieces = []
        for i, c in enumerate(cs):
            if hier[i][3] != -1:            # a hole; collected by its parent
                continue
            if cv2.contourArea(c) < MIN_RING:
                continue
            outer = cv2.approxPolyDP(c, TOL, True).reshape(-1, 2)
            if len(outer) < 3:
                continue
            holes = []
            j = hier[i][2]                  # first child
            while j != -1:
                if cv2.contourArea(cs[j]) >= MIN_RING:
                    h = cv2.approxPolyDP(cs[j], TOL, True).reshape(-1, 2)
                    if len(h) >= 3:
                        holes.append(orient(h, ccw=False).tolist())
                j = hier[j][0]              # next sibling
            pieces.append({'outer': orient(outer, ccw=True).tolist(),
                           'holes': holes})

        if not pieces:
            continue

        # ---- the check: does the polygon still cover what the mask did?
        redraw = np.zeros_like(mask)
        for p in pieces:
            cv2.fillPoly(redraw, [np.array(p['outer'], np.int32)], 1)
            for h in p['holes']:
                cv2.fillPoly(redraw, [np.array(h, np.int32)], 0)
        disagree = int(np.logical_xor(redraw > 0, mask > 0).sum())
        area = int(mask.sum())

        doc['parts'][name] = {
            'pieces': pieces,
            'isVoid': name in NOT_METAL,
            'maskAreaPx': area,
            'disagreementPx': disagree,
        }
        rows.append((name, len(pieces), sum(len(p['holes']) for p in pieces),
                     sum(len(p['outer']) + sum(len(h) for h in p['holes'])
                         for p in pieces), area, disagree))

    os.makedirs(outdir, exist_ok=True)
    with open(os.path.join(outdir, 'contours.json'), 'w') as fh:
        json.dump(doc, fh)

    # ---- the proof: outlines over the real linework, nothing filled ----
    COL = {n: '#%02X%02X%02X' % tuple(c[0]) for n, c, _ in PARTS}
    svg = ['<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" '
           'viewBox="0 0 %d %d">' % (W, H, W, H),
           '<rect width="%d" height="%d" fill="#fff"/>' % (W, H)]
    ys, xs = np.nonzero(line < INK)
    svg.append('<image href="%s" x="0" y="0" width="%d" height="%d" '
               'opacity="0.35"/>' % (os.path.relpath(
                   os.path.abspath(line_path), os.path.abspath(outdir))
                   .replace('\\', '/'), W, H))
    for name, info in doc['parts'].items():
        d = []
        for p in info['pieces']:
            for ring in [p['outer']] + p['holes']:
                d.append('M' + ' '.join('%d,%d' % (x, y) for x, y in ring)
                         + 'Z')
        svg.append('<path d="%s" fill="none" stroke="%s" stroke-width="2.5" '
                   'opacity="0.95"><title>%s</title></path>'
                   % (' '.join(d), COL[name], name))
    svg.append('</svg>')
    with open(os.path.join(outdir, '_contours.svg'), 'w') as fh:
        fh.write('\n'.join(svg))

    print('\nPOLYGONS, IN THE FIGURE\'S OWN PIXELS\n')
    print('  %-10s %7s %6s %7s %10s %12s' %
          ('part', 'pieces', 'holes', 'points', 'mask px', 'disagreement'))
    for name, np_, nh, pts, area, dis in rows:
        print('  %-10s %7d %6d %7d %10d %9d  %.2f%%'
              % (name, np_, nh, pts, area, dis, 100.0 * dis / max(area, 1)))
    worst = max((100.0 * d / max(a, 1) for *_, a, d in rows), default=0)
    print('\n  worst disagreement %.2f%% at a %.1f px tolerance. That is the '
          'cost of\n  simplification, measured rather than assumed.' %
          (worst, TOL))
    print('\n  wrote %s and _contours.svg -- open the SVG over the figure '
          'before\n  trusting any of it.\n'
          % os.path.join(outdir, 'contours.json'))
    return 0


if __name__ == '__main__':
    sys.exit(main())
