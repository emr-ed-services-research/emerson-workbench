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
  - "45 - Process Core/catalogue/parts.json"
  - "45 - Process Core/lab/cutaway/index.html"
  - "45 - Process Core/lab/render/index.html"
  - "45 - Process Core/src/sizing.js"
  - "45 - Process Core/test/sizing.test.js"
  - "50 - Lunar Process Engineer/vendor/process-core/catalogue/parts.json"
  - "50 - Lunar Process Engineer/vendor/process-core/sizing.js"
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

## Role here: CANDIDATE, and the one that agrees with Crane where it counts

An earlier version of this entry called Hooper the cross-check and `Darby 3-K`
the primary. That ranking came from numbers run at NPS ½ on a grow bay, which
is not the domain this department serves, and it inverts at industrial size:
at NPS 2 through 24 **Hooper and Crane agree within 2% and Darby runs 23–47%
low.** See the table in the `Darby 3-K` entry.

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
