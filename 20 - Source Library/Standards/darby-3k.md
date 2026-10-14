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
  - "45 - Process Core/catalogue/parts.json"
  - "45 - Process Core/lab/assembly/index.html"
  - "45 - Process Core/lab/cascade/index.html"
  - "45 - Process Core/lab/cutaway/index.html"
  - "45 - Process Core/lab/fic101/index.html"
  - "45 - Process Core/lab/loop-fcc.js"
  - "45 - Process Core/lab/loop/index.html"
  - "45 - Process Core/lab/physical/index.html"
  - "45 - Process Core/lab/render-loop.js"
  - "45 - Process Core/lab/render/index.html"
  - "45 - Process Core/src/sizing.js"
  - "45 - Process Core/test/dynamics.test.js"
  - "45 - Process Core/test/sizing.test.js"
  - "50 - Lunar Process Engineer/vendor/process-core/catalogue/parts.json"
  - "50 - Lunar Process Engineer/vendor/process-core/sizing.js"
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

## NOT the primary source. THE CHOICE IS OPEN.

**This entry said "THE PRIMARY SOURCE" for about an hour on 2026-10-10 and it
was wrong.** The reasoning behind it was sound and the evidence was from the
wrong place: every number was run at NPS ½ and Re ≈ 10,000, which is Lunar
Process Engineer's grow bay — a teaching toy at the shallow end of the game,
not the department's subject. The real domain is power, nuclear, refining and
severe service: NPS 2 to 24 and beyond, buttweld and flanged, Re in the
hundreds of thousands to millions.

Re-run there, **the ordering inverts.** Long-radius buttweld elbow, 10 ft/s:

| | Re | Crane | Hooper | Darby | spread |
|---|---|---|---|---|---|
| NPS ½ socket-weld, 2 gpm | 10,127 | 0.810 | **1.122** | 0.865 | 39% |
| NPS 2 buttweld, 105 gpm | 159,343 | 0.304 | 0.302 | **0.237** | 28% |
| NPS 6 buttweld, 900 gpm | 467,545 | 0.240 | 0.235 | **0.185** | 30% |
| NPS 24 buttweld, 12,530 gpm | 1,744,064 | 0.192 | 0.209 | **0.142** | 47% |

At small bore Hooper is the outlier. **At every industrial size Darby is**, low
by 23–47%, while Crane and Hooper agree within 2%. The spread is also *wider*
in the real domain than in the toy one, so the choice matters more there, not
less.

Why: at high Re the `K₁/Re` term vanishes from all three and what remains is
purely each method's size correction — and that is exactly where they disagree.
The comparison article's general recommendation of Darby rests on its handling
of size *and regime*; where regime drops out, half the argument goes with it.

**So the choice is reopened and recorded as open.** Settling it properly means
reading the primary publications rather than secondary coefficient tables, at
the sizes the department actually serves. That is work for Phase 2 of the flow
lab, not a call to make from a search.

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

Nothing. Registered as one of three candidates for Phase 2 of
`00 - Project/Process Core — Flow Lab Plan.md`.

## Copyright

The correlation and its coefficients are published scientific results, cited
here to their original publications. No text or table image reproduced.
