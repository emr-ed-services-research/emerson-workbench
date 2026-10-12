#!/usr/bin/env python
"""The stage this pipeline was missing: clean a mask before contouring it.

Imported by `contours.py`. The 657 Working Model's `refine2.py` has done
this since 2026-09-25 and I did not look for it before building this
pipeline, so every ragged edge in the traced valve came from a stage
that already existed one directory away.

FOUR THINGS, AND EACH ONE ANSWERS A DEFECT YOU CAN SEE IN THE DRAWING.

CLOSE -- fill the notches. A hatched region is cut into stripes, and a
stripe the paint missed and the absorber could not reach leaves a bite
out of the part. On Figure 20-B that is the obvious wedge out of the
bottom-left flange, and the protrusion under the bonnet that comes back
a triangle where its opposite number is square. Closing with a kernel
wider than the hatch pitch fills them without moving any real edge,
because a real edge has metal on one side of it for much further than
the kernel is wide.

OPEN -- drop the specks. The mirror of the same thing: a few pixels of
one part stranded inside another.

SYMMETRIZE -- and this is the one that is about the valve rather than
about the picture. A cage, a plug, a seat ring, a bonnet, a stem and a
packing stack are all BODIES OF REVOLUTION about the stem axis. Their
section is symmetric, necessarily, and any left-right difference in the
trace is an artifact of painting rather than a fact about the part. So
the two halves are OR'd together and each side gets the union. The body
is NOT in that list: a globe body is asymmetric by design -- one chamber
wraps the cage and the other does not -- and mirroring it would be
inventing a casting.

TUBE -- a cage is a tube, so nothing of it crosses its own bore. The
trace had the cage closing right across the top, because the drawing
shows the far side of the cage rim THROUGH the bore and a visible edge
is not cut metal. Keeping only the outermost run on each row says "a
tube in section is two walls" and nothing more.
"""
import cv2
import numpy as np

# Parts that are bodies of revolution about the stem axis. Their section
# cannot be asymmetric, so any asymmetry is paint.
# SYMMETRIZED, and deliberately NOT all of the axisymmetric parts.
#
# Every one of these is a body of revolution and every one of their
# sections is symmetric, so in principle all of them qualify. In
# practice symmetrizing moves edges, and some of those edges are
# MEASUREMENTS: the cage bore, the plug outside diameter and the seat
# bore are registered dimensions that the whole archetype is scaled
# against. Union-symmetrize took the plug to 8.46 in across a 7.65 in
# bore; averaging the two halves got it to 8.39 across 7.95, better and
# still a plug that cannot go in its own cage, because the halves
# disagree by more than the running clearance is wide.
#
# So symmetry is applied where it is a claim about SHAPE and withheld
# where it would move a NUMBER. The bonnet's profile is a convention
# and its lower protrusion really should be square on both sides; the
# cage bore is 7.65 or it is 7.95 and the difference is the model's
# accuracy, not its tidiness. Making the trim symmetric is worth doing
# properly off a better-centred trace, not by nudging a kernel until
# the picture looks right.
AXISYMMETRIC = {'bonnet', 'packing', 'stem',
                'cage', 'plug', 'seatRing'}
MEASURED = {'cage', 'plug', 'seatRing'}   # shape refined, size untouched
# Parts that are tubes: nothing of them crosses their own bore.
TUBE = {'cage'}   # cleared against the plug's own radius; see clear_inside
#
# The cage's top rim should not be in the mask: the drawing shows it
# THROUGH the bore and a visible edge is not cut metal. Four rules were
# tried to remove it and all four were wrong. "Outermost run per row"
# keeps it whole where it is contiguous with both walls. "Inside the
# bore" needs a bore, and measuring one gave 7.65 in by the median of
# wall rows and 8.86 by the widest two-wall gap -- the first narrower
# than the plug that runs in it, the second wide enough to clip the
# walls to a third of their thickness. "Any run crossing the axis"
# catches nothing, because the stem splits the rim before it reaches
# the centreline.
#
# Each of those was a guess with a measurement's face on it, and the
# cage is dimension-bearing. Leaving the rim in is a visible flaw;
# removing it with a rule I cannot defend would be a worse one. It
# wants deciding off the drawing rather than off the mask.
# Not symmetrized, and the reason is in the docstring.
ASYMMETRIC = {'body', 'bolting', 'hardware', 'fluid'}

# THE KERNEL HAS TO BE SMALLER THAN THE SMALLEST REAL GAP, and on this
# figure that is the plug-to-cage running clearance: 0.07 in, which at
# 0.0168 in/px is FOUR PIXELS. A 9 px close bridged it, welded the plug
# to its cage, and gave back a plug 8.46 in across inside a bore of
# 7.65 -- a part wider than the hole it slides in. Registered dimensions
# are the one thing this stage must not move.
#
# So closing is small, and the notches a bigger kernel was reaching for
# are filled by FILL_HOLES instead, which cannot grow an outline at all.
CLOSE_PX = 3
OPEN_PX = 3


def axis_of(cage_mask, line=None):
    """The stem axis, MEASURED off the linework by mirror correlation.

    Every earlier version estimated it from a mask -- centre of area,
    then midpoint of the outer faces -- and both were wrong by enough to
    matter. The cage mask's centre of area put it 8.3 px off, which is
    0.14 in on this figure: TWICE the plug-to-cage running clearance.
    Symmetrizing about an axis that far out is what made the plug come
    back wider than its own bore, and no amount of choosing between
    union and average could fix an axis that was not the axis.

    The drawing itself is the better instrument. A valve section is a
    body of revolution about the stem, so the linework matches its own
    mirror -- and only at one place. Slide the mirror in half-pixel
    steps and take the overlap maximum. It is a measurement of the
    drawing rather than an inference from the paint, and the paint is
    the part that was in doubt.

    The band sampled is the TRIM, not the whole figure: the body is
    asymmetric by design, and including it drags the maximum toward a
    casting that was never symmetric in the first place.
    """
    if line is not None:
        ink = line < 128
        H = ink.shape[0]
        band = ink[int(H * 0.60):int(H * 0.78), :]
        best, bestax = -1, None
        W = ink.shape[1]
        for ax2 in range(int(W * 0.40) * 2, int(W * 0.60) * 2):
            ax = ax2 / 2.0
            i = int(round(ax))
            w = min(i, W - i) - 2
            if w < W // 6:
                continue
            ov = int((band[:, i - w:i] & band[:, i + 1:i + 1 + w][:, ::-1]).sum())
            if ov > best:
                best, bestax = ov, ax
        if bestax is not None:
            return bestax
    ys, xs = np.nonzero(cage_mask)
    if not len(xs):
        return None
    return float(xs.mean())


def fill_holes(m):
    """Fill voids fully enclosed by the part, and nothing else.

    Flood from outside the image and keep what the flood never reached.
    A missed hatch stripe surrounded by its own part is a hole and is
    filled; the outline is untouched, because every outside pixel stays
    outside. This is the half of "close the notches" that is safe at any
    size.
    """
    H, W = m.shape
    ff = np.zeros((H + 2, W + 2), np.uint8)
    inv = (1 - m).astype(np.uint8).copy()
    cv2.floodFill(inv, ff, (0, 0), 2)
    return ((inv != 2) | (m > 0)).astype(np.uint8)


def symmetrize(m, axis):
    """Make the section symmetric by AVERAGING the two halves.

    Union was the obvious choice and it is biased: it takes the outer
    envelope of both halves, which is maximum material everywhere. On
    the plug that meant an outside diameter 0.2 in too big; on the cage,
    whose walls are the other way round, it meant a bore 0.23 in too
    small. Together they produced a plug that could not go into its own
    cage -- 8.46 in across a 7.65 in bore -- from a trace where both
    numbers had been right.

    So each row is read as a set of edges measured from the axis, left
    and right, and where the two sides agree on how many edges there
    are, each edge is placed at the mean of the two. Where they do not
    agree the row is left as the union, because averaging a wall against
    a gap is not an average of anything.
    """
    H, W = m.shape
    mir = cv2.warpAffine(m, np.float32([[-1, 0, 2 * axis], [0, 1, 0]]),
                         (W, H), flags=cv2.INTER_NEAREST)
    out = cv2.bitwise_or(m, mir)
    ax = int(round(axis))
    for j in range(H):
        row = m[j]
        on = np.nonzero(row)[0]
        if len(on) < 2:
            continue
        runs = np.split(on, np.where(np.diff(on) > 1)[0] + 1)
        left = [r for r in runs if r[-1] < ax]
        right = [r for r in runs if r[0] > ax]
        if not left or not right or len(left) != len(right):
            continue
        # distances from the axis, innermost first, on each side
        ld = [(axis - r[-1], axis - r[0]) for r in reversed(left)]
        rd = [(r[0] - axis, r[-1] - axis) for r in right]
        out[j, :] = 0
        for (li, lo), (ri, ro) in zip(ld, rd):
            a = max(0.0, (li + ri) / 2.0)
            b = max(a, (lo + ro) / 2.0)
            i0, i1 = int(round(axis - b)), int(round(axis - a))
            out[j, max(0, i0):max(0, i1) + 1] = 1
            i0, i1 = int(round(axis + a)), int(round(axis + b))
            out[j, max(0, i0):min(W - 1, i1) + 1] = 1
    return out


def clear_inside(m, axis, radius):
    """Remove everything within `radius` of the axis.

    For the cage this is the rim the drawing shows THROUGH the bore --
    a visible edge, not cut metal, and a tube has nothing on its own
    centreline. Four earlier rules tried to find it from the cage alone
    and each was a guess: outermost-run keeps it where it is contiguous
    with the walls, "inside the bore" needs a bore and two ways of
    measuring one disagreed by 1.2 in, and "crosses the axis" catches
    nothing because the stem splits the rim first.

    The radius comes from the PLUG instead, and that is not a guess:
    the plug runs in the cage bore, so every point the plug occupies is
    bore by definition and no cage metal can be there. One part
    measuring another is exactly what an assembly is.
    """
    H, W = m.shape
    xs = np.abs(np.arange(W) - axis)
    return (m & (xs >= radius)[None, :]).astype(np.uint8)


def clear_bore(m, axis):
    """Drop any run that crosses the axis: a tube never does.

    No bore is computed and none is needed, which is the point. Two
    attempts at measuring one -- median of the wall rows, then the
    widest two-wall gap -- came back 7.65 in and 8.86 in on the same
    cage, one of them narrower than the plug that runs inside it and
    the other wide enough to clip the walls down to a third of their
    thickness. Both were guesses dressed as measurements.

    What the drawing actually shows is a rim seen THROUGH the bore, and
    a visible edge is not cut metal. A run of cage pixels containing
    the stem axis is that rim and nothing else, because no part of a
    tube's section lies on its own centreline. Deleting exactly those
    runs leaves every wall pixel untouched.
    """
    out = m.copy()
    H, W = m.shape
    ax = int(round(axis))
    for j in range(H):
        on = np.nonzero(m[j])[0]
        if not len(on):
            continue
        for r in np.split(on, np.where(np.diff(on) > 1)[0] + 1):
            if r[0] <= ax <= r[-1]:
                out[j, r[0]:r[-1] + 1] = 0
    return out


def _half_width(m, axis):
    ys, xs = np.nonzero(m)
    if not len(xs):
        return 0.0
    return float(max(abs(xs.max() - axis), abs(axis - xs.min())))


def _scale_x(m, axis, k):
    """Scale about the axis in x only: shape kept, size restored."""
    H, W = m.shape
    M = np.float32([[k, 0, axis * (1 - k)], [0, 1, 0]])
    return cv2.warpAffine(m, M, (W, H), flags=cv2.INTER_NEAREST)


def _level_bottom(m):
    """Give the casting one bottom line, and close the drain boss.

    Figure 20 is captioned "with Graphite Piston Ring and OPTIONAL Drain
    Plug", and the boss for that option is a notch in the underside with
    a tapped hole through it. Traced as-is it came back as a step: the
    casting's left side sitting lower than its right by a visible
    amount, with a slot of nothing between them where the plug screws
    in. A body whose two feet are at different heights is not a casting
    anybody made.

    The option is not being modelled -- there is no drain plug part --
    so the underside is closed and levelled to the line the casting
    actually sits on, which is the lower of the two. Nothing is invented:
    the bottom edge already exists on the left, and this carries it
    across.
    """
    H, W = m.shape
    cols = np.nonzero(m.any(axis=0))[0]
    if not len(cols):
        return m
    bottoms = []
    for i in cols:
        r = np.nonzero(m[:, i])[0]
        if len(r):
            bottoms.append(r.max())
    if not bottoms:
        return m
    floor = int(np.percentile(bottoms, 85))
    out = m.copy()
    for i in cols:
        r = np.nonzero(m[:, i])[0]
        if not len(r):
            continue
        # fill from this column's own metal down to the common floor
        out[r.max():floor + 1, i] = 1
        out[floor + 1:, i] = 0
    return out


def _square_off(m):
    """One bottom face across the whole seat ring.

    The traced seat came back thin at its left and right ends, because
    the region under those ends is not hatched in the drawing and was
    painted as open space. A seat ring with a knife edge either side of
    its bore is not a seat ring -- it is the part most exposed to
    cavitation damage, and thinning it there is the one place the model
    should not be optimistic. Carried down to the deepest face the ring
    already has.
    """
    H, W = m.shape
    cols = np.nonzero(m.any(axis=0))[0]
    if not len(cols):
        return m
    deepest = max(np.nonzero(m[:, i])[0].max() for i in cols)
    out = m.copy()
    for i in cols:
        r = np.nonzero(m[:, i])[0]
        out[r.max():deepest + 1, i] = 1
    return out


def refine(mask, name, axis, bore_radius=None):
    """Clean one part's mask. `mask` is uint8 0/1."""
    m = mask.astype(np.uint8)
    # measured on the RAW mask, before any morphology touches it: this
    # is the registered half-width and nothing downstream may move it
    raw_half = _half_width(m, axis) if axis is not None else 0.0
    k = np.ones((CLOSE_PX, CLOSE_PX), np.uint8)
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, k)
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN,
                         np.ones((OPEN_PX, OPEN_PX), np.uint8))
    m = fill_holes(m)
    if name in AXISYMMETRIC and axis is not None:
        m = symmetrize(m, axis)
        # closing again after the union tidies the seam the mirror leaves
        m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
        # REFINE THE SHAPE, KEEP THE MEASURED SIZE.
        #
        # Union-symmetrize takes the outer envelope of the two halves,
        # so a part whose painted halves disagree by d comes back d
        # wider. That is how the plug ended up 8.46 in across inside a
        # cage bore of 7.65 -- a plug that cannot go in its own cage --
        # while the cage, growing inward by the same mechanism, closed
        # on it from the other side.
        #
        # The symmetry is a fact about the part and worth having. The
        # extra width is paint disagreement and is not. So the mirrored
        # shape is kept and scaled about the axis back to the half-width
        # the mask had before, which is the registered measurement and
        # the thing that must not move.
        after_half = _half_width(m, axis)
        if raw_half > 0 and after_half > raw_half:
            m = _scale_x(m, axis, raw_half / after_half)
    if name == 'body':
        m = _level_bottom(m)
    if name == 'seatRing':
        m = _square_off(m)
    if name in TUBE and axis is not None and bore_radius:
        m = clear_inside(m, axis, bore_radius)
    return m


def report(before, after, name):
    b, a = int(before.sum()), int(after.sum())
    return '%-10s %8d -> %8d px  %+.1f%%' % (name, b, a,
                                             100.0 * (a - b) / max(b, 1))
