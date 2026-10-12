#!/usr/bin/env python
"""Registered ED outlines, in the geometry layer's own convention.

    python trace/archetype.py <lineart.png> <masksdir> <faceToFaceIn> [out.js]

Emits each part as rings of [u, v] where

    u = (x - axis)        / faceToFacePx        x along the line
    v = (portY - y)       / faceToFacePx        y UP toward the bonnet

so one multiply by the face-to-face puts every part in inches at its real
size, which is exactly what `geometry.js`'s `place()` already does to the
EWT outlines it is replacing.

THE DATUM IS DERIVED, NOT CHOSEN BY EYE.

  axis    the cage's own centre of area. The CAGE and not the body,
          because a globe body is asymmetric by design -- one chamber
          wraps the cage and the other does not -- so its bounding box
          does not straddle the stem. The cage is a cylinder about the
          stem axis and in section it is two walls either side of it.

  portY   the mid-height of the seat ring, which is the centre of the
          port, which is the origin geometry.js already declares.

WHY THE WHOLE SET AND NOT JUST ONE PART. The plug, the cage and the seat
ring are a matched set: the plug slides in the cage bore with a running
clearance measured in thousandths and lands on the seat. An ED plug
dropped into an EWT cage is not a better object than either -- it is a
valve that cannot be assembled, with two families' proportions arguing
inside one drawing. Either all of them are registered together off one
figure, or none of them is.
"""
import json
import os
import sys

import numpy as np
from PIL import Image

PARTS = ['body', 'bonnet', 'cage', 'plug', 'seatRing', 'fluid', 'packing', 'bolting',
         'hardware']


def mask(d, n):
    p = os.path.join(d, n + '.png')
    if not os.path.exists(p):
        return None
    return np.array(Image.open(p).convert('L')) > 127


def main():
    if len(sys.argv) < 4:
        print(__doc__)
        return 2
    line_path, masksdir, f2f_in = sys.argv[1], sys.argv[2], float(sys.argv[3])
    out = sys.argv[4] if len(sys.argv) > 4 else os.path.join(
        masksdir, 'archetype.json')

    doc = json.load(open(os.path.join(masksdir, 'contours.json')))

    body = mask(masksdir, 'body')
    cage = mask(masksdir, 'cage')
    seat = mask(masksdir, 'seatRing')
    if body is None or cage is None or seat is None:
        raise SystemExit('need body, cage and seatRing masks to register.')

    cy, cx = np.nonzero(cage)
    axis = float(cx.mean())
    sy, sx = np.nonzero(seat)
    portY = float((sy.min() + sy.max()) / 2.0)
    by, bx = np.nonzero(body)
    f2f_px = float(bx.max() - bx.min() + 1)
    scale_in = f2f_in / f2f_px

    print('\nDATUM, DERIVED\n')
    print('  axis        x = %.1f px   (cage centre of area; the body is '
          'asymmetric\n                             and cannot give it)'
          % axis)
    print('  port centre y = %.1f px   (seat ring mid-height)' % portY)
    print('  face to face  %.0f px = %.2f in   ->  %.6f in/px'
          % (f2f_px, f2f_in, scale_in))

    emitted, report = {}, []
    for name in PARTS:
        info = doc['parts'].get(name)
        if not info:
            continue
        rings = []
        for pc in info['pieces']:
            for ring in [pc['outer']] + pc['holes']:
                rings.append([[round((q[0] - axis) / f2f_px, 5),
                               round((portY - q[1]) / f2f_px, 5)]
                              for q in ring])
        emitted[name] = rings
        allx = [q[0] for r in rings for q in r]
        ally = [q[1] for r in rings for q in r]
        report.append((name, len(rings), sum(len(r) for r in rings),
                       (max(allx) - min(allx)) * f2f_in,
                       (max(ally) - min(ally)) * f2f_in,
                       min(ally) * f2f_in, max(ally) * f2f_in))

    print('\nPARTS, AT THEIR REAL SIZE\n')
    print('  %-10s %6s %7s %9s %9s %9s %9s' %
          ('part', 'rings', 'points', 'width', 'height', 'y bottom', 'y top'))
    for n, nr, np_, w, h, y0, y1 in report:
        print('  %-10s %6d %7d %8.2f\" %8.2f\" %8.2f\" %8.2f\"'
              % (n, nr, np_, w, h, y0, y1))

    payload = {
        'source': os.path.basename(line_path),
        'faceToFaceIn': f2f_in,
        'units': 'fractions of face-to-face; multiply by faceToFaceIn',
        'datum': {'axisPx': axis, 'portYPx': portY, 'faceToFacePx': f2f_px,
                  'axis': 'cage centre of area',
                  'portY': 'seat ring mid-height'},
        'declared':
            'Outlines traced from a registered drawing, not dimensioned by '
            'it. The scale comes from one sourced length and is checked '
            'against a second (see trace/register.py); the SHAPES are the '
            'draughtsman\'s and carry his simplifications. Cast contours '
            'are as drawn. Nothing here is a proportion of the port.',
        'parts': emitted,
    }
    with open(out, 'w') as fh:
        json.dump(payload, fh)
    print('\n  wrote %s\n' % out)
    return 0


if __name__ == '__main__':
    sys.exit(main())
