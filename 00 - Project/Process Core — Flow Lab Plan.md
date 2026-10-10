---
title: Process Core — Flow Lab Plan
type: plan
status: PROPOSED — awaiting approval; nothing built. Rev 2: sources resolved, Phase 2 unblocked
tags:
  - project
  - process-core
  - flow-lab
updated: 2026-10-10
---

# Process Core — Flow Lab Plan

**Status: proposed, nothing built.** Franz asked for a flow lab where piping,
fittings, fluid dynamics, valve construction and instrumentation get hammered
out, with working loops as benchmarks. This is the phased roll-out.

---

## 0. The two facts that shape everything below

**A loop is only a benchmark if someone else published the answer.** Otherwise
it is the core agreeing with itself, which is the failure this vault has
already corrected twice this week — once when a check compared two copies of
the same bay, and once when Lunar Process Engineer's recorded pixels became
the reference for what a part is. The lab's whole value is that its answers
come from outside it.

Three legitimate sources of an answer:

| Source | What it gives | Status |
|---|---|---|
| Published worked examples | Control Valve Handbook, `ISA-75.01.01` | **held** |
| The real bench | LoopBench, a DVC6200 on real air with position feedback | **exists** |
| Hand-calculable limits | dead-head, full open, single branch | free |

**Fitting resistance has a source, and it is not Crane.** An earlier revision
of this plan said the lab was blocked on obtaining `Crane TP-410`. That was
wrong, and the error was equating *absent from Emerson's subscription* with
*not sourceable*. An exhaustive search on 2026-10-10 settled it:

| source | status | role |
|---|---|---|
| `Darby 3-K` | published, free, coefficients transcribed | **primary** |
| `Hooper 2-K` | published, free, coefficients transcribed | cross-check |
| `Crane TP-410` | a commercial book, ~USD 144, not an Emerson holding | optional third opinion |

Crane is not a standard, so no request form will produce it — it is a purchase,
and a small one. It is also **not needed**: run at the size this vault actually
works in, NPS ½ at Re ≈ 10,000, Crane and Darby agree within **7%**, and
`Hooper` is the outlier at **+39%**, not Crane.

**The number that governs the whole phase:** published fitting-loss data
carries **25–30% uncertainty**, 10% at the very best. The disagreement between
all three methods sits *inside* the noise of the underlying measurements. So
precision-hunting here is chasing precision the data does not have, and every
stored K must carry its uncertainty band with it.

---

## Phase 0 — the harness, graded on physics we already have

**Goal.** `45 - Process Core/lab/`, one directory per loop: a netlist, a
declared operating point, the published answer, and the citation for it.
`node lab.js` runs them all and reports deviation. A loop with no citation does
not get to be a benchmark.

**Why first.** It makes every later phase gradeable, and it costs almost
nothing. It also answers a question nobody has asked yet: *does the existing
dynamics layer reproduce a published sizing example?* It was built for a game.
It has never been held against a document.

**Seed loops.**
1. Three limiting cases — dead-head, full open, one branch only.
2. At least one Control Valve Handbook worked example, transcribed with its
   page reference.
3. Level 1's bay as a regression, since it is a known-good solve.

**What proves it.** The three limits are exact. The Handbook example matches
its printed result inside the tolerance the Handbook itself states.

**Expected to hurt.** The Handbook example may well fail. That is the point of
running it, and a failure here is the most valuable single output of Phase 0.

**Blocked on.** Nothing.

---

## Phase 1 — the flow path: centreline and area profile `A(s)`

**Goal.** `geometry` gains, for each part, the path a fluid takes through it
and the passage area along that path.

**Why it is the right next thing.** It is derivable from dimensions already
held, it needs no new source, and it is what *both* the renderer and the 1D
flow model want. It is also the answer to "how do we get flow high-res without
smoothing the fitting":

- the **wetted boundary** stays blocky and exact, out of `ASME B16.11`;
- the **flow field** is sampled inside it at whatever density is wanted.

Resolution comes from sampling along `s`, never from adding vertices to a part.

**The physics that falls out for free.** Two perpendicular bores intersecting
means the passage area *swells* at the junction and contracts again. That
expansion-and-contraction is the loss mechanism, and it comes from geometry
rather than from a fudge factor.

**What proves it.** `A(s)` equals the bore area in the legs; continuity holds;
the junction swell is the computed two-cylinder intersection, not a smoothed
guess. The reference sheet grows a panel showing the path and the profile.

**Deliberately not modelled.** At a sharp corner the jet detaches, so the real
flow path is not the passage centreline. Representing that properly is CFD and
would be inventing. Recorded as a known limitation, not silently smoothed.
Likewise the drill breakout radius where the bores meet: B16.11 does not
dimension it, so it is left out and said so.

**Blocked on.** Nothing.

---

## Phase 2 — the resistance interface, with absence made loud

**Goal.** Define how a part declares its loss, **without inventing a single
value** — and carry its uncertainty beside it, because a K quoted to three
decimals as though exact is a lie the arithmetic will happily tell.

- `catalogue` gains an optional `resistance: {basis, source, uncertainty}`
  — a *basis* rather than a number, since K depends on Reynolds and bore
  and is therefore computed at solve time, not stored.
- `dynamics` learns to include ΣK alongside valve Cv.
- A part with no sourced K carries `K: null`, and the solver **refuses to
  quietly ignore it** — a loop containing unsourced fittings reports exactly
  which ones and declines to publish a figure as if it were complete.

**Seeded from `Darby 3-K`**, whose coefficients are now in the register, plus
`ISA-75.01.01` and the Control Valve Handbook for the piping geometry factor
`Fp` and ΣK on reducers and expanders attached to a valve — a case Darby's
table does not cover and should not be stretched onto.

`Hooper 2-K` goes in as an alternate basis, because a second independent
correlation is how a transcription slip gets caught.

**The judgement this phase has to make in the open.** No published correlation
has a socket-weld row; the choice is `threaded` or `flanged/welded`. For
`ASME B16.11` fittings the honest mapping is **threaded** — B16.11 governs
socket-welding and threaded fittings in one document and gives them the same
body dimensions, so they are the same forging with a different end
preparation, and both are compact blocks with sharp internal corners. A
flanged or butt-welded elbow has a real radius, which is why its coefficient
is lower. Recorded in the `Darby 3-K` entry, not buried in code.

**What proves it.** A reducer-on-valve loop reproduces the Handbook's `Fp`
worked example. A loop containing a fitting with no sourced K fails loudly and
names it. And Darby against Hooper on the same loop differs by less than the
25–30% the data is worth — if it differs by more, something is transcribed
wrong.

**How much it is worth, measured before building it.** On level 1's bay the
fittings come to **0.77 psi against a 15.2 psig manifold — about 5%**, which
the dynamics layer currently ignores entirely. That is a real quantified error,
worth fixing but not urgent. It scales hard, though: the same five fittings
cost 7% at 6 gpm, **20% at 10 gpm** and 78% at 20 gpm. Any loop faster than a
grow bay needs this phase before its numbers mean anything.

**Blocked on.** Nothing.

---

## Phase 3 — the bench as a benchmark

**Goal.** LoopBench's real rig becomes a lab loop whose expected values are
**measured, not published** — which is better evidence than a worked example.

**What it needs.** The rig as a netlist; recorded runs exported from LoopBench
(travel, supply, actuator pressure, position, loop current); tolerances that
reflect real instrument error rather than floating-point.

**Why here.** It is the first loop with an instrument in it, so it is the
natural doorway to Phase 4 — and unlike every other benchmark, it can be re-run
against the hardware when something looks wrong.

**Blocked on.** LoopBench growing a run-export. Small.

---

## Phase 4 — the instrumentation layer

**Goal.** Instruments as first-class model objects that *observe* the process:
range, span, units, accuracy, failure mode. A transmitter is not a number; it
is a device with error.

**Grounding.** The DVC6200 field device specification `D103639X012` is held and
has already been read for this bench. Tagging convention follows what the vault
settled on when `ISA-5.1` proved unavailable: `ISA-5.5` plus real Emerson P&IDs
from the Source Library.

**What proves it.** The bench loop's instrument readings, against the real
device.

**Blocked on.** Phase 3.

---

## Phase 5 — valve construction

**Goal.** Trim and characteristic as model objects: linear, equal-percentage,
quick-opening; travel to Cv; seat and shutoff class.

**Grounding.** Control Valve Handbook (held) and `ISA-75.01.01` (held).
`ANSI/FCI 70-2` is already in the register for shutoff class.

**What proves it.** Published characteristic curves reproduced at their
tabulated points.

**Blocked on.** Phase 2's interface, so that a valve's resistance and a
fitting's are the same kind of thing.

---

## Later, deliberately not scheduled

Compressible and two-phase flow, choked conditions, cavitation and flashing.
`ISA-75.01.01` covers gas sizing and is held, so the door is open — but this is
a large body of work and committing to it before Phases 0–3 have taught us what
the lab is actually like would be guessing.

---

## Where the lab lives, and why

**`45 - Process Core/lab/`, run by `node lab.js`, separate from `node test.js`.**

It belongs to the core, not beside it. A lab that *consumed* the core would be
a consumer, and a consumer cannot be the reference — that is exactly the
mistake corrected on 2026-10-10 when Lunar Process Engineer had become the de
facto definition of what a part is. This is the core's own acceptance suite:
heavier than the unit tests, slower, and every expected value carries a
document reference.

`test.js` stays fast and runs on every change. `lab.js` is the one you run
before believing a number.

---

## What none of this requires

**No phase changes Lunar Process Engineer.** The game adopts the catalogue, the
geometry layer and any of this whenever it suits, or never. Its schematic is a
legitimate unscaled view and is not wrong for being one.
