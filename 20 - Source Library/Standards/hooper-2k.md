---
title: Hooper 2-K — correlation for head loss in pipe fittings
type: standard
tags:
  - source-library
  - standards
standard-id: "Hooper 2-K"
publisher: W. B. Hooper, in Chemical Engineering
edition: Chemical Engineering, 24 August 1981, pp. 96-100
holding: method-and-coefficients-public
updated: 2026-10-10
used-by:
  - "00 - Project/Process Core — Flow Lab Plan.md"
---

# Hooper 2-K — head loss in pipe fittings

**Publisher:** W. B. Hooper. A published correlation, not a standard.
**Holding:** `method-and-coefficients-public`

## Access

Freely available and widely reproduced. Primary citation: Hooper, W. B.,
*The Two-K Method Predicts Head Losses in Pipe Fittings*, **Chemical
Engineering**, 24 August 1981, pp. 96–100.

## The correlation

> **K = K₁/Re + K∞ × (1 + 1/D)**, with `D` in inches.

`K₁` is the fitting's K at Re = 1; `K∞` its K for a large fitting in fully
turbulent flow. The `1/D` term is the size correction, and it is large at small
bore — 1.61 at NPS ½ — which is the whole reason the method exists.

Coefficients read 2026-10-10:

| fitting | construction | K₁ | K∞ |
|---|---|---|---|
| 90° elbow, R/D = 1 | threaded | 800 | 0.40 |
| 90° elbow, R/D = 1 | flanged / welded | 800 | 0.25 |
| 90° elbow, R/D = 1.5 | all types | 800 | 0.20 |
| tee used as elbow | screwed | 500 | 0.70 |
| tee, run-through | screwed | 200 | 0.10 |
| tee, run-through | flanged / welded | 150 | 0.05 |

## Role here: CROSS-CHECK, not primary

`Darby 3-K` is the primary source. Hooper is kept because a second independent
correlation is how a transcription slip gets caught, and because the gap
between the two is informative in itself.

At NPS ½ and Re ≈ 10,000 Hooper gives **1.122** for a 90° threaded elbow
against Darby's **0.865** and Crane's **0.810** — it runs 39% high. So Hooper
is the outlier, not Crane, which is the opposite of what was assumed before the
numbers were run.

The spread still sits inside the 25–30% uncertainty the underlying data
carries, so the disagreement is not evidence that either is faulty — it is
evidence of how much this class of data is worth to begin with.

## What rests on it

Nothing. Registered as the cross-check for Phase 2 of
`00 - Project/Process Core — Flow Lab Plan.md`.

## Copyright

Published scientific result, cited to its original publication. No text or
table image reproduced.
