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

# MS Paint's default palette. EXACT HEXES, TAKEN OFF THE PAINTED FILE,
# because nearest-colour matching is not safe here and quietly lost a
# part the first time it was tried: light turquoise #99D9EA is nearer
# to WHITE than it is to turquoise #00A2E8, so the cage came back
# unpainted rather than wrong, which is the worse of the two. Any
# swatch in the file that no entry claims is now an error by hex and
# count -- see unknown_swatches below.
# THIS IS THE DEFAULT MAP, AND A PAINTING MAY OVERRIDE IT. Two figures
# came back painted by the same hand with yellow and green meaning
# opposite things: on Figure 20 yellow is the plug and green the seat,
# as asked for; on Figure 19 they came out the other way round. Both
# paintings are perfectly clear -- they just do not agree with each
# other, and no amount of staring at one file reveals what the other
# meant.
#
# So the map is a property of the PAINTING. A painted figure may sit
# beside a `<painted>.map.json` naming what its colours meant, and that
# wins over this table for that figure alone. Nothing is guessed: with
# no sidecar, this table is what the painter is held to, and a colour
# no row claims still stops the run.
#
# `hardware` is named for what it holds rather than for what was asked.
# Brown was requested for the drain plug and used for the drain plug,
# the yoke locknut and both gaskets -- all small sealing and fastening
# hardware, none of them on the list. They sit in different places, so
# they come back as separate pieces of one mask and can be split by
# position later if any needs to be its own part.
# A PART MAY ANSWER TO MORE THAN ONE SWATCH. Figure 19 came back with
# the body in dark red #880015 and Figure 20 with the body in red
# #ED1C24 -- the same hand, the same palette, the same part, two
# adjacent squares. Rejecting the second for that would be rejecting a
# difference that means nothing. So each row carries every swatch that
# has actually been used for it, and the FIRST is the canonical one the
# preview draws with.
PARTS = [
    ('body',      [(0xED, 0x1C, 0x24), (0x88, 0x00, 0x15)], 'red'),
    ('bonnet',    [(0xFF, 0x7F, 0x27)], 'orange'),
    ('cage',      [(0x99, 0xD9, 0xEA), (0x00, 0xA2, 0xE8)], 'turquoise'),
    ('plug',      [(0xFF, 0xF2, 0x00)], 'yellow'),
    ('stem',      [(0xA3, 0x49, 0xA4)], 'purple'),
    ('seatRing',  [(0x22, 0xB1, 0x4C)], 'green'),
    # PACKING IS OUT, 2026-10-12, at Franz's call: "you just made a
    # huge mess of it every time". It did -- the stack is nine parts in
    # a bore an inch across, and at the scale this figure is drawn they
    # landed as a smear. The BORE stays, painted as the void it is
    # until there is packing in it, and the STEM stays, so the column
    # the packing seals is still there to seal. Rose is unassigned and
    # free for it when the time comes.
    ('bolting',   [(0x3F, 0x48, 0xCC)], 'indigo'),
    # The packing flange: the part the packing studs pull down onto the
    # stack. It is kept, with packing itself out, because it MARKS THE
    # TOP OF THE PACKING BOX -- the shoulder in the bonnet bore marks
    # the bottom, and between them the packing's space is bracketed by
    # two things the draughtsman drew rather than by anything inferred.
    # Grey-50 is the last swatch on the default palette that is safely
    # clear of everything already in use.
    ('packingFlange', [(0x7F, 0x7F, 0x7F)], 'grey-50'),
    ('gasket',    [(0xB9, 0x7A, 0x57)], 'brown'),
    # Two added 2026-10-12, both because the model had been INFERRING
    # them, and inference is what this trace keeps getting wrong.
    #
    #   cageWindow -- the opening in the cage wall. `windowOf` works it
    #   out from the traced wall's faces across an assumed band.
    #   Painted, it is just a region, and the thing the whole Cv curve
    #   is about stops being a guess.
    #
    #   plugSeal -- the piston ring / U-seal in the plug head, which had
    #   been drawn from a proportion of the plug's height: a convention
    #   standing in for a part that is right there in the drawing.
    #
    # Both swatches are free on MS Paint's default palette and checked
    # against every colour already in use -- nearest neighbour 80 and
    # 90 units away, where gold, light yellow and lavender all came in
    # under 60 of the plug, the fluid and the fluid again.
    ('cageWindow', [(0x70, 0x92, 0xBE)], 'blue-grey'),
    ('plugSeal',   [(0xB5, 0xE6, 0x1D)], 'lime'),
    ('fluid',     [(0xC3, 0xC3, 0xC3)], 'grey'),
]
# `fluid` IS NOT A PART AND IT IS STILL WORTH PAINTING. Leaving the
# passages white was meant to be free -- white is "not a part" and most
# of the drawing is passage. It is not free, because white is also what
# an unpainted cell looks like, so the void had no voice and anything
# that wandered into it won by default.
#
# That is not hypothetical either. Figure 19 was painted as one long
# continuous squiggle per part, and the body's squiggle loops down
# through the open bore between the upper and lower walls on its way
# from one to the other. Nothing contradicted it, so 60 000 px of
# flowing water came back as cast iron.
#
# A grey stroke in each passage fixes it from the other side: the cell
# now has paint of its own, and MIN_SHARE decides -- grey wins, or the
# two are close and the cell is reported as ambiguous. Neither outcome
# is a silent wrong answer, which is the only outcome that matters.
# It costs one stroke per passage and it hands the flow-field layer a
# sourced fluid domain for free.
NOT_METAL = {'fluid'}
NEUTRAL = [(0xFF, 0xFF, 0xFF), (0x00, 0x00, 0x00)]   # not parts
TOL = 40           # px distance; further off is a blend or UNKNOWN
UNKNOWN_MIN = 200  # px of one undeclared colour before it is worth stopping
FRINGE = 2         # px around the linework whose colour is not trusted

# The two shades of a hue must not both be in the table for DIFFERENT
# parts, or a slip of one square silently relabels a part instead of
# stopping. Checked here rather than trusted, because the whole reason
# aliases exist is that adjacent squares get confused.
def no_swatch_serves_two_parts(parts, where):
    seen = {}
    for name, cols, _ in parts:
        for c in cols:
            if seen.setdefault(c, name) != name:
                raise SystemExit(
                    '%s: #%02X%02X%02X is listed for both %s and %s. One '
                    'colour has to mean one part.'
                    % (where, c[0], c[1], c[2], seen[c], name))
no_swatch_serves_two_parts(PARTS, 'trace/masks-from-paint.py')

INK = 128          # line art: below this is a line
MIN_VOTE = 80      # px of one colour in a cell before it counts as a stroke
MIN_SHARE = 0.70   # and that colour must hold this much of the cell's paint
MIN_CELL = 12      # px; smaller cells are noise between hatch lines
THIN_CLAIM = 0.05  # report, do not refuse, a cell won on less than this
SLIVER_FILL = 0.42 # a cell filling less of its bounding box is a hatch stripe
SMALL = 400        # px; below this a blob is not worth reporting either way
REACH = 3          # px; how far across the linework two cells count as
                   # neighbours. It was 2, and 2 cannot cross a heavy
                   # outline: a 36 168 px slab of Figure 20-B's body
                   # had NO neighbours at all at that reach, because
                   # the line bounding it is 5 to 6 px wide. Hatch
                   # lines are thin and part outlines are not, and the
                   # rule has to see across both.
SPLIT_MIN = 150    # px of EACH colour before a contested cell is split
                   # between them rather than refused -- the painter
                   # drawing a boundary the drawing does not have
CONTACT_MIN = 0.20 # a neighbour must hold this share of the longest
                   # contact to count as an answer; less is a corner

# MIN_VOTE IS ABSOLUTE AND THAT IS THE POINT. It used to be MIN_PAINT, a
# fraction: a cell had to be 25% covered before its paint counted for
# anything. That is the wrong measure and it threw away almost an entire
# painting before anyone noticed, because a brush stroke is a fixed size
# and a cell is not.
#
# It survived the first figure by luck. Figure 19 is densely hatched, so
# its cells are thin stripes and a stroke across one covers most of it.
# Figure 20 has the same parts drawn with large open cells -- one body
# cell is 255 592 px -- and the same stroke is 2% of it. Every colour in
# that figure lost 70-98% of its paint to this rule, and NOTHING was
# lost to ambiguity: the painter had been perfectly clear and the step
# refused to listen.
#
# What a painter means by a stroke does not scale with how big the
# region happens to be, so neither does the threshold. Eighty pixels is
# a deliberate mark and a handful is a slipped hand. MIN_SHARE still
# does the job MIN_PAINT was wrongly asked to help with -- two colours
# fighting over one cell is still ambiguous and still refused.


def load_map(paint_path):
    """PARTS, with any per-figure override from `<painted>.map.json`.

    The sidecar is a flat object of hex -> part name:

        {"note": "seat and plug came out swapped",
         "colours": {"#FFF200": "seatRing", "#22B14C": "plug"}}

    Only the rows it names move. Every name must already be a part --
    a sidecar cannot invent one, because a part nothing downstream
    knows about is a typo far more often than it is a new part.
    """
    side = os.path.splitext(paint_path)[0] + '.map.json'
    parts = [(n, list(c), s) for n, c, s in PARTS]
    if not os.path.exists(side):
        return parts, None
    doc = json.load(open(side))
    cols = doc.get('colours') or {}
    known = {n for n, _, _ in parts}
    for hexs, name in cols.items():
        if name not in known:
            raise SystemExit(
                '%s names part "%s", which is not in PARTS. The sidecar '
                'can move a colour between parts; it cannot invent one.'
                % (os.path.basename(side), name))
        rgb = tuple(int(hexs.lstrip('#')[i:i + 2], 16) for i in (0, 2, 4))
        for i, (n, c, sw) in enumerate(parts):          # take it off its old row
            parts[i] = (n, [x for x in c if x != rgb], sw)
        for i, (n, c, sw) in enumerate(parts):
            if n == name:
                parts[i] = (n, c + [rgb], sw)
    empty = [n for n, c, _ in parts if not c]
    if empty:
        raise SystemExit(
            '%s leaves %s with no colour at all. Every part needs one, or '
            'it cannot be painted in this figure -- if it genuinely is not '
            'in the figure, say so in "note" and give it a colour anyway.'
            % (os.path.basename(side), ', '.join(empty)))
    return parts, doc.get('note')


def nearest_part(rgb):
    """Index into PARTS, -1 for neutral or a blend, -2 for undeclared.

    NEAREST WITHIN A TOLERANCE, not nearest outright. Nearest outright
    has no way to say "I do not recognise this", so a swatch the table
    does not know goes to whichever entry happens to be least far away
    -- or to white, which is worse, because then the part is not wrong,
    it is ABSENT, and absent is indistinguishable from never painted.

    AND A BLEND IS NOT AN UNKNOWN COLOUR. An antialiased brush puts a
    halo of intermediate colours along every stroke edge: paint grey
    beside dark red and the boundary runs through #A5616B, which is no
    swatch at all. Figure 19 came back with 238 colours for nine parts
    and almost all of the extra was halo. Erroring on those would make
    an antialiased editor unusable for no reason, and widening TOL far
    enough to swallow them would start merging real swatches.

    So a colour off every swatch is asked one more question: does it
    lie on the LINE between two declared colours? If it does, it is a
    mixture of them and the honest answer is "I cannot tell which",
    which is -1 -- it votes for nobody and costs nothing, because the
    pixels either side of it are unambiguous. Only a colour that is
    near no swatch and on no blend line is -2, and -2 still stops the
    run. Computed over the image's unique colours, of which there are
    a few hundred, rather than over four million pixels.
    """
    h, w, _ = rgb.shape
    flat = rgb.reshape(-1, 3).astype(np.int32)
    swatches, owner = [], []
    for i, (_, cols, _) in enumerate(PARTS):
        for c in cols:
            swatches.append(c)
            owner.append(i)
    for c in NEUTRAL:
        swatches.append(c)
        owner.append(-1)
    owner = np.array(owner, dtype=np.int32)
    S = np.array(swatches, dtype=np.float64)

    uniq, inv = np.unique(flat, axis=0, return_inverse=True)
    u = uniq.astype(np.float64)
    d = ((u[:, None, :] - S[None, :, :]) ** 2).sum(axis=2)
    j = d.argmin(axis=1)
    out = owner[j].copy()
    far = d[np.arange(len(u)), j] > TOL * TOL

    if far.any():
        q = u[far]
        best = np.full(len(q), np.inf)
        for a in range(len(S)):
            for b in range(a + 1, len(S)):
                p0, p1 = S[a], S[b]
                seg = p1 - p0
                L2 = float(seg @ seg)
                if L2 == 0:
                    continue
                t = (((q - p0) @ seg) / L2).clip(0.0, 1.0)
                proj = p0 + t[:, None] * seg
                best = np.minimum(best, ((q - proj) ** 2).sum(axis=1))
        blend = best <= TOL * TOL
        r = np.where(blend, -1, -2).astype(np.int32)
        out[far] = r

    return out[inv].reshape(h, w)


def unknown_swatches(paint, part_of_px):
    """Every colour in the paint that no entry in PARTS accounts for."""
    ys, xs = np.nonzero(part_of_px == -2)
    if not len(ys):
        return []
    cols, cnt = np.unique(paint[ys, xs].reshape(-1, 3), axis=0,
                          return_counts=True)
    return [(tuple(int(v) for v in cols[i]), int(cnt[i]))
            for i in np.argsort(cnt)[::-1] if cnt[i] >= UNKNOWN_MIN]


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    line_path, paint_path = sys.argv[1], sys.argv[2]
    outdir = sys.argv[3] if len(sys.argv) > 3 else os.path.join(
        os.path.dirname(line_path) or '.', 'masks')

    # THE MAP IS A PROPERTY OF THE PAINTING. Rebound before anything
    # reads it, so every step below -- the swatch list, the preview, the
    # mask filenames -- works from the map this figure was painted to.
    global PARTS
    PARTS, map_note = load_map(paint_path)
    no_swatch_serves_two_parts(
        PARTS, os.path.basename(paint_path) + '.map.json')
    if map_note:
        print('\nmap override for this figure: ' + map_note)

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

    # GREY HUGGING A LINE IS NOT A VOTE FOR FLUID. The line art here is
    # clean two-colour, but the painted copy is not: saving through an
    # antialiasing editor puts a grey fringe along every black line, and
    # grey is also the colour that means FLUID. The two are not
    # distinguishable by colour at all -- a black-to-white ramp passes
    # exactly through #C3C3C3. Cells are cut from the clean art, so the
    # fringe sitting ON the ink is already out; the one- or two-pixel
    # skirt just OUTSIDE it is not, and in a hatched region, where every
    # cell is a thin stripe with line down both sides, that skirt is a
    # large share of the cell. Antialiasing would outvote the painter.
    #
    # ONLY GREY IS DISTRUSTED, AND ONLY NEXT TO A LINE. The first
    # version of this threw away EVERY colour within two pixels of ink,
    # which is a different and much more expensive claim: it erodes
    # every part by two pixels all round, and a part that is only a few
    # pixels wide is mostly edge. It took the valve stem from 51 832 px
    # to 2 564. No other colour has the ambiguity that motivated the
    # rule -- an antialiased red fringe is still obviously red, and a
    # genuine mixture of two swatches is already neutral -- so no other
    # colour needs to pay for it.
    skirt = cv2.dilate(ink.astype(np.uint8),
                       np.ones((2 * FRINGE + 1,) * 2, np.uint8),
                       iterations=1) > 0
    greyish = np.zeros(len(PARTS), dtype=bool)
    for i, (name, _, _) in enumerate(PARTS):
        greyish[i] = name in NOT_METAL
    suspect = skirt & (part_of_px >= 0) & greyish[part_of_px.clip(0)]
    part_of_px = np.where(suspect, -1, part_of_px).astype(np.int32)

    print('\nline art %dx%d   %d closed cells in it' %
          (line.shape[1], line.shape[0], ncells - 1))

    # ---- a colour nobody declared stops the run ------------------------
    undeclared = unknown_swatches(paint, part_of_px)
    if undeclared:
        print('\nUNDECLARED PAINT -- in the file, claimed by no part:')
        for (r, g, b), n in undeclared:
            print('   #%02X%02X%02X  %8d px' % (r, g, b, n))
        print('\n  Each is either a part missing from PARTS or a '
              'neighbouring\n  swatch picked by mistake. Add it or correct '
              'it. Do not let it\n  run: the part it was meant to be would '
              'come back EMPTY, which\n  reads as never painted rather '
              'than as painted wrong.\n')
        return 1

    # ---- which part owns each cell -------------------------------------
    assign = np.full(ncells, -1, dtype=np.int32)   # cell -> part index
    sizes = np.bincount(cells.ravel(), minlength=ncells)
    ambiguous, unpainted_big, thin_claims = [], [], []
    split_cells = []
    # background: the cell touching the frame is not inside the valve
    border = set(np.unique(np.concatenate([
        cells[0, :], cells[-1, :], cells[:, 0], cells[:, -1]])).tolist())

    for lbl in range(1, ncells):
        if sizes[lbl] < MIN_CELL:
            continue
        sel = cells == lbl
        votes = part_of_px[sel]
        painted = votes[votes >= 0]
        counts = (np.bincount(painted, minlength=len(PARTS))
                  if painted.size else np.zeros(len(PARTS), dtype=np.int64))
        win = int(counts.argmax())
        if counts[win] < MIN_VOTE:
            if sizes[lbl] > 400 and lbl not in border:
                unpainted_big.append((lbl, int(sizes[lbl])))
            continue
        share = counts[win] / painted.size
        if share < MIN_SHARE:
            # TWO COLOURS IN ONE CELL IS A BOUNDARY THE DRAWING DOES
            # NOT HAVE. Normally that is a slip of the brush and the
            # cell is refused. But a bucket fill cannot put an edge
            # where the draughtsman drew none, and three parts of this
            # figure need exactly that: a seat ring whose two halves
            # and bore are one closed shape, a gasket the same, and a
            # cage rim continuous with its walls. One click floods the
            # lot.
            #
            # So when a cell is genuinely contested -- both colours
            # present in real quantity, not one stray stroke -- the
            # cell is SPLIT between them rather than refused, each
            # pixel going to whichever colour is nearer. The painter
            # has said where the boundary is by putting two colours on
            # either side of it; this reads that rather than making
            # them draw a line first.
            order = counts.argsort()[::-1]
            if counts[order[0]] >= SPLIT_MIN and counts[order[1]] >= SPLIT_MIN:
                split_cells.append(lbl)
                continue
            ambiguous.append((lbl, int(sizes[lbl]),
                              PARTS[order[0]][0], int(counts[order[0]]),
                              PARTS[order[1]][0], int(counts[order[1]])))
            continue
        assign[lbl] = win
        if counts[win] < THIN_CLAIM * sizes[lbl]:
            thin_claims.append((lbl, int(sizes[lbl]), int(counts[win]),
                                PARTS[win][0]))

    # ---- cells the brush did not reach, where there is only one answer --
    adj = {}
    ys, xs = np.nonzero(ink)
    H, W = cells.shape
    for y, x in zip(ys, xs):
        y0, y1 = max(0, y - REACH), min(H, y + REACH + 1)
        x0, x1 = max(0, x - REACH), min(W, x + REACH + 1)
        near = np.unique(cells[y0:y1, x0:x1])
        near = [int(v) for v in near if v > 0]
        for a in near:
            d = adj.setdefault(a, {})
            for v in near:
                if v != a:
                    d[v] = d.get(v, 0) + 1

    # ONE PASS, AGAINST THE PAINT AND NOT AGAINST ITSELF. Iterating this
    # cascades: an unpainted cell absorbed into the bonnet makes ITS
    # neighbour touch only the bonnet, and six rounds later the bonnet
    # has eaten a third of the drawing. On the synthetic test that put
    # 171 580 px into a part whose painted cell was 61 324. "The brush
    # did not quite reach" is one cell wide by definition; anything
    # that needs two hops is not that, it is unpainted, and unpainted
    # is a thing to report rather than to infer.
    seed = assign.copy()
    absorbed = 0
    # ITERATED, BUT ONLY EVER OVER SLIVERS, and that is what makes it
    # safe where the original cascade was not. The bug that forced this
    # to one pass was an unpainted BLOB being absorbed and then acting
    # as a seed for the next one, which walked a part across the
    # drawing. A sliver is a stripe between two hatch lines; a chain of
    # them is one hatched region, and a hatched region is one part by
    # construction. The chain cannot leave it, because the first stripe
    # that touches a second part has two answers and is refused.
    #
    # One pass was not enough in practice: Figure 20-B had 36 168 px of
    # lower-left body -- a stripe chain two and three hops from the
    # nearest painted stripe -- come back unclaimed, and that is the
    # white gap that made the traced valve look like it was falling
    # apart.
    for _round in range(24):
      grew = 0
      for lbl in range(1, ncells):
        if seed[lbl] >= 0 or sizes[lbl] < MIN_CELL or lbl in border:
            continue
        # CONTACT, NOT CONTACT-OR-NOT. Two parts "touching" one cell
        # used to mean two answers and a refusal, however slight the
        # second one was -- and a 36 168 px slab of Figure 20-B's body
        # was refused because one corner of it kissed the drain plug
        # across 139 pixels while sharing 2 474 with the body. That is
        # not an ambiguity, it is a corner. A neighbour has to hold a
        # real share of the boundary to count as an answer.
        share = {}
        for nb, contact in adj.get(lbl, {}).items():
            if seed[nb] >= 0:
                share[int(seed[nb])] = share.get(int(seed[nb]), 0) + contact
        if not share:
            continue
        best = max(share.values())
        touching = {k for k, v in share.items() if v >= CONTACT_MIN * best}
        if len(touching) != 1:
            continue
        p = touching.pop()
        # AND IT HAS TO BE SHAPED LIKE A MISSED EDGE, which is a thing
        # the cell itself can be asked about.
        #
        # This guard used to be a fraction of the part's own painted
        # area, and that was measuring the wrong object. Once the
        # painter's strokes were being counted properly the body's
        # painted area went up eightfold, the guard went up with it,
        # and whole FLOW PASSAGES -- 90 632 px of water, bounded on
        # every side by body and therefore touching exactly one part --
        # were absorbed into the casting. The valve came back solid.
        # How big a part is tells you nothing about whether the cell
        # beside it is a sliver the brush skipped or a void that is
        # supposed to be empty.
        #
        # The cell's own shape does tell you. A stripe between two
        # hatch lines fills well under half the box around it, because
        # the box is the diagonal's extent. A passage is a blob and
        # fills most of its box. So: absorb a sliver of any size, or
        # anything small enough not to be worth reporting, and leave
        # every large blob alone no matter what it borders.
        ys, xs = np.nonzero(cells == lbl)
        box = ((ys.max() - ys.min() + 1) * (xs.max() - xs.min() + 1))
        sliver = sizes[lbl] < SLIVER_FILL * box
        if not sliver and sizes[lbl] > SMALL:
            unpainted_big.append((lbl, int(sizes[lbl])))
            continue
        assign[lbl] = p
        absorbed += 1
        # only a SLIVER may seed the next round; a blob absorbed on the
        # "it touches one thing" rule must stay a leaf, which is the
        # whole of the cascade guard
        if sliver:
            grew += 1
      if not grew:
        break
      seed = assign.copy()

    # ---- cells the painter split, resolved pixel by nearest paint -------
    for lbl in split_cells:
        sel = cells == lbl
        ys, xs = np.nonzero(sel)
        votes = part_of_px[sel]
        have = np.nonzero(votes >= 0)[0]
        if not len(have):
            continue
        px_, py_ = xs[have], ys[have]
        lab_ = votes[have]
        for k in range(len(xs)):
            d2 = (px_ - xs[k]) ** 2 + (py_ - ys[k]) ** 2
            part_of_px[ys[k], xs[k]] = lab_[int(d2.argmin())]

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
    for p, (_, cols, _) in enumerate(PARTS):
        prev[lab == p] = cols[0]      # the canonical swatch, not the alias
    prev[ink & (lab < 0)] = (40, 40, 40)
    Image.fromarray(prev).save(os.path.join(outdir, '_preview.png'))

    print('\nassigned:')
    for name, n in found:
        print('   %-10s %8d px%s' %
              (name, n, '   (not metal -- the declared void)'
               if name in NOT_METAL else ''))
    if not any(name in NOT_METAL for name, _ in found):
        print('\n   no fluid was declared. Everything left white is '
              'treated as unpainted,\n   so any stroke that strays into a '
              'passage claims it unopposed. One grey\n   stroke per '
              'passage removes the whole class of error.')
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
    if thin_claims:
        big = sorted(thin_claims, key=lambda t: -t[1])[:10]
        print('\nWON ON A THIN STROKE -- correct for a deliberate mark in a '
              'big open\ncell, wrong if a stroke slipped over an edge. '
              'Check these in the preview:')
        for lbl, n, got, name in big:
            print('   %-10s claims %7d px on %5d px of paint  (%.1f%%)'
                  % (name, n, got, 100.0 * got / n))
    if unpainted_big:
        print('\nUNPAINTED and large -- fluid, or a part that was missed:')
        seen = set()
        uniq = [t for t in unpainted_big
                if not (t[0] in seen or seen.add(t[0]))]
        for lbl, n in sorted(uniq, key=lambda t: -t[1])[:12]:
            print('   cell %-6d %6d px' % (lbl, n))

    meta = {'source': os.path.basename(line_path),
            'painted': os.path.basename(paint_path),
            'map': {n: ['#%02X%02X%02X' % c for c in cols]
                    for n, cols, _ in PARTS},
            'mapNote': map_note,
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
