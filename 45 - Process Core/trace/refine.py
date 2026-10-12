#!/usr/bin/env python
"""Nothing. The paint is the geometry.

This file used to transform a mask before it became a polygon:
symmetrize about the stem axis, clear a tube's bore, square off a seat
ring's underside, level the casting's bottom, fill the drain boss,
close, open, smooth. Every one of those was me deciding what the valve
ought to look like and editing the trace to agree.

They were wrong often enough, and badly enough, that the right answer
is to stop. `_level_bottom` filled metal across the whole underside and
welded the two flanges into one slab -- it deleted the real bottom of
the valve to make its feet level. The symmetrize pass put the plug
outside its own cage bore. Four separate rules for the cage rim were
each a guess wearing a measurement's face. Franz painted the valve
correctly; I kept overwriting it.

So: Franz paints how it should be, and this takes exactly what he
paints. A mask arrives and leaves unchanged. The pipeline is
cell-assignment from the paint, then contours, and nothing in between.

If something in the drawing is wrong, it gets fixed in the paint, where
somebody who knows what a valve looks like is making the decision.
"""
import cv2  # noqa: F401  (kept so callers' imports stay valid)
import numpy as np  # noqa: F401

AXISYMMETRIC = set()
TUBE = set()
MEASURED = set()
ASYMMETRIC = set()


def axis_of(cage_mask, line=None):
    """Still measured -- it is a fact about the drawing, not a change to
    it. The archetype needs an axis to register against; nothing here
    moves a pixel because of it."""
    if line is not None:
        ink = line < 128
        H, W = ink.shape
        band = ink[int(H * 0.60):int(H * 0.78), :]
        best, bestax = -1, None
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
    if cage_mask is None:
        return None
    ys, xs = np.nonzero(cage_mask)
    return float(xs.mean()) if len(xs) else None


def refine(mask, name, axis, bore_radius=None):
    """Identity. See the module docstring."""
    return mask.astype(np.uint8)


def report(before, after, name):
    return '%-10s %8d px  (taken as painted)' % (name, int(after.sum()))
