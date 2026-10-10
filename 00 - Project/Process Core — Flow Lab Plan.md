---
title: Process Core — Flow Lab Plan
type: plan
status: PROPOSED — awaiting approval; nothing built
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

**And there is no fitting-resistance source in this vault.** Not one. We can
size a valve; we cannot say what an elbow costs. `Crane TP-410` is the
canonical reference and Emerson carries no Crane at all — its Misc grouping is
AGA, MSS, UL and VDMA. That is a Standards Request Form, not a search, and it
has a lead time nobody here controls.

So the plan is sequenced so that **nothing is blocked waiting on it**, and the
machinery that will consume K values is built in a way that reports their
absence instead of papering over it.

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
value.**

- `catalogue` gains an optional `resistance: {K, basis, source}`.
- `dynamics` learns to include ΣK alongside valve Cv.
- A part with no sourced K carries `K: null`, and the solver **refuses to
  quietly ignore it** — a loop containing unsourced fittings reports exactly
  which ones and declines to publish a figure as if it were complete.

**Seeded with what is actually held.** `ISA-75.01.01` and the Control Valve
Handbook give the piping geometry factor `Fp` and ΣK for reducers and expanders
attached to a valve. That is real, citable, and enough for one real loop — and
that loop is the bench.

**In parallel, not blocking.** File the Standards Request for `Crane TP-410`,
plus `ISA-5.1` while the form is open (34 citations rest on it). Elbow and tee
K values land whenever they land; the interface does not wait.

**What proves it.** A loop with an unsourced elbow in it fails loudly and names
the elbow. A reducer-on-valve loop reproduces the Handbook's `Fp` worked
example.

**Blocked on.** Nothing to build. The *values* are blocked, which is the point
of designing it this way.

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
