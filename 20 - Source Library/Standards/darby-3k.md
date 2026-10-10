---
title: Darby 3-K — correlation for pressure drop through pipe fittings
type: standard
tags:
  - source-library
  - standards
standard-id: "Darby 3-K"
publisher: Ron Darby, in Chemical Engineering; coefficients in Darby & Chhabra
edition: Chemical Engineering 108(4), April 2001, pp. 127, 129-130; coefficients as Table 7.3 in Darby & Chhabra, Chemical Engineering Fluid Mechanics, 3rd ed., CRC Press
holding: method-and-coefficients-public
updated: 2026-10-10
used-by:
  - "00 - Project/Process Core — Flow Lab Plan.md"
---

# Darby 3-K — pressure drop through pipe fittings

**Publisher:** Ron Darby. A published correlation, not a standard.
**Holding:** `method-and-coefficients-public`

## Access

Freely available, and reproduced in many independent engineering references.
Primary citations:

- Darby, R., *Correlate Pressure Drops Through Fittings*, **Chemical
  Engineering** 108(4), April 2001, pp. 127, 129–130.
- Earlier version: *Correlate pressure drops through pipe fittings*, Chemical
  Engineering 106, 1999, pp. 101–104.
- Coefficients as **Table 7.3**, Darby & Chhabra, *Chemical Engineering Fluid
  Mechanics*, 3rd ed., CRC Press.

## THE PRIMARY SOURCE for fitting resistance in this vault

Chosen 2026-10-10 over `Crane TP-410` and `Hooper 2-K`, on three grounds:

1. **It is the only one of the three that handles both size and flow regime.**
   Crane assumes fully-turbulent flow; at the bores and flows this vault works
   in, Re is about 10,000, which is where that assumption is weakest.
2. **It agrees with Crane where Crane is valid** — 0.865 against 0.810 for an
   NPS ½ 90° elbow, inside 7%.
3. **It is obtainable**, which Crane is not without a purchase.

An independent comparison of the four common methods (Equivalent Length,
Crane K, Hooper 2-K, Darby 3-K) recommends this one for the same reasons.

## The correlation

> **K = K₁/Re + Kᵢ × (1 + K_d / D^0.3)**, with `D` the internal diameter in
> inches and `Re` the pipe Reynolds number.

Coefficients read 2026-10-10, for the fittings this vault uses:

| fitting | construction | K₁ | Kᵢ | K_d |
|---|---|---|---|---|
| 90° elbow, R/D = 1 | threaded | 800 | 0.14 | 4.0 |
| 90° elbow, R/D = 1 | flanged / welded | 800 | 0.091 | 4.0 |
| 90° elbow, R/D = 1.5 | threaded | 800 | 0.071 | 4.2 |
| tee, through-branch (as elbow) | threaded | 500 | 0.274 | 4.0 |
| tee, run-through | threaded | 200 | 0.091 | 4.0 |
| tee, run-through | flanged | 150 | 0.050 | 4.0 |

**No reducers or expanders in this table.** For a reducer on a valve the vault
already holds a source — `ISA-75.01.01` gives the piping geometry factor `Fp`
and its ΣK — and that should be used rather than stretching this correlation
onto a fitting it does not cover.

## THE JUDGEMENT THIS FORCES, stated rather than buried

**No published correlation has a socket-weld row.** The choice is between
`threaded` and `flanged/welded`, and for `ASME B16.11` fittings the honest
mapping is **threaded**:

- B16.11 governs socket-welding *and* threaded fittings in one document and
  gives them the same body dimensions — Table 1 and Table 5 carry the same
  centre-to-bottom-of-socket `A` at a given size and class. They are the same
  forging with a different end preparation.
- Both are compact blocks with sharp internal corners. A flanged or
  butt-welded elbow is a different shape with a real radius, which is exactly
  why its `Kᵢ` is lower.

If anything this under-states the loss: a socket-weld joint leaves a small
annular step at the socket bottom that a threaded joint does not. No source
quantifies it, so it is not modelled — recorded rather than guessed.

## Uncertainty, which must travel with every value

Published fitting-loss data carries **25–30% uncertainty** in general, 10% at
the very best, and proprietary items can run −50% to +100% against generic
data. Any K this vault stores must carry that band with it. A K quoted to three
decimals as though it were exact is a lie the arithmetic will happily tell.

## What rests on it

Nothing yet. Registered ahead of Phase 2 of
`00 - Project/Process Core — Flow Lab Plan.md`.

## Copyright

The correlation and its coefficients are published scientific results, cited
here to their original publications. No text or table image reproduced.
