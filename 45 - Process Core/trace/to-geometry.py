#!/usr/bin/env python
"""archetype.json -> the ED_* outline arrays in src/geometry.js, in place.

    python trace/to-geometry.py <masksdir>/archetype.json [src/geometry.js]

WHY THIS EXISTS. The arrays were pasted in by hand, and a hand-paste is
a copy that drifts: geometry.js carried outlines from an older run of
the trace while the masks beside it had moved on, and the only way to
tell was to compare several thousand numbers. It also left four
identical copies of one comment behind. Each run of the trace now ends
here, and the file either changes or it does not.

WHAT IT TOUCHES. Only the right-hand side of the eleven `const ED_*`
assignments below, found by name and replaced between their own
brackets. Every comment, every other constant and every line of code in
geometry.js is left exactly as it was -- the prose around these arrays
says what they are and why, and none of that is this script's to write.

THE ONE MAPPING DECISION, STATED. `fluid` comes back as several
separate pockets, and geometry.js wants two of them by name because the
dynamics layer treats them as inlet and outlet. They are chosen BY
POSITION -- leftmost pocket is CHAMBER_L, the pocket containing the
port centre is CHAMBER_R -- and the remainder goes to ED_VOIDS. Not by
size: the largest pocket of all straddles the axis and is not a
chamber. If a repaint changes how many pockets there are, this says so
and stops rather than silently filling one of them with another.
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
# name in geometry.js -> (part in archetype.json, how to pick its rings)
#   'rings'  every ring, as an array of rings
#   'left'   the single ring with the most negative centre
#   'right'  the single ring with the most positive centre
PLAN = [
    ('ED_BODY',      'body',          'rings'),
    ('ED_BONNET',    'bonnet',        'rings'),
    ('ED_CAGE_L',    'cage',          'left'),
    ('ED_CAGE_R',    'cage',          'right'),
    # The windowed band of the cage, which Franz paints as its own
    # colour. It is CAGE -- the same wall, with openings cut in it --
    # and it sits BELOW what the solid colour covers: on the NPS 8
    # figure the windows run y 0.42 to 4.13 in while the solid cage
    # starts at 3.95. Left out, the cage was two inches short at the
    # bottom, the plug stood mostly below its own bore, and the space
    # beside the window belonged to nothing.
    ('ED_WINDOW_L',  'cageWindow',    'left'),
    ('ED_WINDOW_R',  'cageWindow',    'right'),
    ('ED_GASKET',    'gasket',        'rings'),
    ('ED_PLUG',      'plug',          'rings'),
    ('ED_SEAT',      'seatRing',      'rings'),
    ('ED_CHAMBER_L', 'fluid:chamL',   'ring'),
    ('ED_CHAMBER_R', 'fluid:chamR',   'ring'),
    ('ED_VOIDS',     'fluid:rest',    'rings'),
]


def centre(ring):
    return sum(p[0] for p in ring) / len(ring)


def contains_origin(ring):
    """Is the port centre, [0, 0], inside this ring? Ray cast, no library."""
    inside = False
    n = len(ring)
    for i in range(n):
        x0, y0 = ring[i]
        x1, y1 = ring[(i + 1) % n]
        if (y0 > 0) != (y1 > 0):
            if x0 + (0 - y0) / (y1 - y0) * (x1 - x0) > 0:
                inside = not inside
    return inside


def fmt(rings, nest, indent='  '):
    """Rings as JS, three points to a line, so a diff stays readable."""
    def ring(r, pad):
        out, row = [], []
        for p in r:
            row.append('[%s, %s]' % (repr(p[0]), repr(p[1])))
            if len(row) == 3:
                out.append(pad + ', '.join(row))
                row = []
        if row:
            out.append(pad + ', '.join(row))
        return (',\n').join(out)
    if not nest:
        return ring(rings, indent + '  ')
    body = []
    for r in rings:
        body.append(indent + '  [\n' + ring(r, indent + '    ')
                    + '\n' + indent + '  ]')
    return (',\n').join(body)


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    arch = json.load(open(sys.argv[1]))
    target = sys.argv[2] if len(sys.argv) > 2 else os.path.join(
        HERE, '..', 'src', 'geometry.js')
    parts = arch['parts']

    fl = parts['fluid']
    chamR = [r for r in fl if contains_origin(r)]
    if len(chamR) != 1:
        raise SystemExit(
            'fluid: %d pockets contain the port centre, expected exactly 1. '
            'CHAMBER_R is the pocket the port opens into and nothing else '
            'can stand in for it -- look at _preview.png before changing '
            'this.' % len(chamR))
    chamR = chamR[0]
    rest = [r for r in fl if r is not chamR]
    if not rest:
        raise SystemExit('fluid: nothing outside the port pocket. The left '
                         'chamber is missing from the paint.')
    chamL = min(rest, key=centre)
    voids = [r for r in rest if r is not chamL]
    pick = {'fluid:chamL': [chamL], 'fluid:chamR': [chamR],
            'fluid:rest': voids}

    src = open(target, encoding='utf-8').read()
    out, log = src, []
    for name, part, how in PLAN:
        rings = pick[part] if part.startswith('fluid:') else parts[part]
        if how == 'left':
            rings = [min(rings, key=centre)]
        elif how == 'right':
            rings = [max(rings, key=centre)]
        nest = how in ('rings',)
        body = rings[0] if not nest else rings
        pat = re.compile(r'(  const ' + name + r' = \[\n).*?(\n  \];)',
                         re.S)
        m = pat.search(out)
        if not m:
            raise SystemExit('%s is not in %s as a bracketed array.'
                             % (name, target))
        was = len(re.findall(r'\[-?[\d.]', m.group(0)))
        new = m.group(1) + fmt(body, nest) + m.group(2)
        out = out[:m.start()] + new + out[m.end():]
        n = sum(len(r) for r in rings)
        log.append((name, len(rings), n, was))

    if out == src:
        print('\ngeometry.js already matches %s -- nothing to write.\n'
              % os.path.basename(sys.argv[1]))
        return 0
    with open(target, 'w', encoding='utf-8', newline='\n') as fh:
        fh.write(out)
    print('\nFROM %s, %s\n' % (arch['source'], arch['units']))
    print('  %-14s %6s %8s' % ('constant', 'rings', 'points'))
    for name, nr, n, was in log:
        print('  %-14s %6d %8d' % (name, nr, n))
    print('\n  wrote %s\n' % target)
    return 0


if __name__ == '__main__':
    sys.exit(main())
