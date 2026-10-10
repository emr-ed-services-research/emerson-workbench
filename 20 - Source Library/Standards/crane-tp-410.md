---
title: Crane TP-410 — Flow of Fluids Through Valves, Fittings and Pipe
type: standard
tags:
  - source-library
  - standards
standard-id: "Crane TP-410"
publisher: Crane Co. — a commercial technical paper, not a standards body
edition: 80th anniversary edition, 2023; earlier US and metric (410M) editions in print
holding: not-held
updated: 2026-10-10
used-by:
  - "00 - Project/Process Core — Flow Lab Plan.md"
---

# Crane TP-410 — Flow of Fluids Through Valves, Fittings and Pipe

**Publisher:** Crane Co. — a commercial technical paper, **not** a standards body
**Holding:** `not-held`

## Access

NOT AVAILABLE through Emerson. Crane appears nowhere in the Information
Center's publisher list — the Misc grouping is AGA, MSS, UL and VDMA. Searched
2026-10-10.

**And no Standards Request Form will produce it, because it is not a standard.**
It is a book. Crane announced the 80th-anniversary edition in March 2023; new
copies run about USD 144, used from about USD 77. Obtaining it is a small
purchase decision, not a sourcing problem.

## The method, which IS public

Documented in many independent places and usable without a copy of the book:

> **K = n × f_T**, where `n` is the fitting's equivalent-length ratio `L/D` and
> `f_T` the fully-turbulent Moody friction factor for clean commercial steel
> pipe of that nominal size.

For a 90° standard elbow `n = 30`; long radius `n = 16`. `f_T` is 0.027 at
NPS ½, falling to 0.019 at NPS 2.

**What is copyrighted is the book's tables and text, not the correlation.**
Recording the method and citing it is ordinary practice; reproducing its pages
is not, and this entry does neither beyond the figures above.

## Why it is NOT on the critical path

Checked numerically before assuming, 2026-10-10, at the size this vault
actually works in — NPS ½ bore, water, 2 gpm, Re ≈ 10,000:

| method | K, 90° standard elbow |
|---|---|
| Crane TP-410 | 0.810 |
| `Darby 3-K` | 0.865 |
| `Hooper 2-K` | 1.122 |

Crane and Darby agree within **7%**. Hooper is the outlier at **+39%** — not
Crane. And published fitting-loss data carries **25–30% uncertainty**
generally, so the whole spread sits inside the noise of the underlying
measurements.

Buying TP-410 would buy a cross-check, not an unblocking. `Darby 3-K` is the
primary source instead.

**This corrects an earlier claim of mine** that the flow lab was blocked on
obtaining Crane. It is not, and the error was equating "absent from Emerson's
subscription" with "not sourceable."

## What has been read

Nothing. The method above comes from secondary descriptions, which is adequate
for the use it is being put to and is recorded as such rather than implied.

## Copyright

Copyrighted commercial publication. Not held, not vendored, not reproduced.
