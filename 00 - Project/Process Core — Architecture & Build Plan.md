# Process Core — Architecture & Build Plan

**Status:** approved, and **every phase is complete** (see §9) — 0, 1, 2, 3, 4, 5a and
5b, each built with its acceptance bar met and verified.

What exists now: a Process Core at `45 - Process Core` that stands alone, holds no
colours, and is vendored into LPE with a SHA-256 lock; tags and coordinate frames so one
netlist can be hung on any number of layouts; a dynamics layer derived from the graph and
proven bit-identical to the solver it replaced; a scenario format a non-coder can author
that runs headless; and two skins over all of it.

Phase 5b delivered a credible modern renderer and the boundary that makes more of them
cheap, and the **production art pass** on top of it is done too — type scale, abnormal
states, device-pixel rendering and board furniture. See the end of §9 for what it
deliberately did not do.
**Date:** 2026-10-09 (rev. 11 — all phases complete; production art pass done)
**Supersedes:** nothing. This is the first write-up of the layered process architecture.

**Decisions taken 2026-10-08:**

| Question | Decision |
|---|---|
| Name | **Process Core** |
| Home | `45 - Process Core`, a numbered peer of `40 - Engine` |
| Scenario author | **A process engineer who does not write code** |
| Modern chrome | **Near-term deliverable**, not a proof of concept — see §9, Phase 5 |
| New requirement | The build must orient a fresh Claude instance and flag it when it is about to do the wrong thing — see §8 |

---

## 1. What this is for

Franz's ask, in his words: *"a P&ID build capability that I can transpose any physical
structure (phys rig) over,"* with a netlist layer, a schematic layer, a dynamics layer
and a chrome layer, where *"all could pull directly from the netlist, but all need
alignment capabilities with each other."*

Two further requirements, added in discussion:

1. The architecture must live **outside any game constraint** and be callable from other
   projects — LPE, LoopBench, and work not yet started.
2. **Level design must become a standalone capability**, so other engineers can author
   levels, with narrative and game chrome separated from the engineering problem.

---

## 2. The reframe: the core is the platform, not the plug-in

The original phrasing was that the core would be *"harnessed by the game engine like a
cartridge."* The intent is right — core outside, game calls in — but the direction should
run the other way, and it matters.

**The Process Core is the platform. LPE is one consumer.**

If the core is the plug-in, the game engine owns the socket, and the socket ends up
game-shaped. Within months the core carries a `draw(ctx)`, or a notion of "beats," and it
cannot serve LoopBench without surgery. If the core is the platform, the core defines the
interface and every consumer adapts to it.

> **Terminology warning.** Do not call a Process Core consumer a "cartridge."
> **Cartridge is already taken**: it is Workbench **Layer 3** — a course package that
> loads into a Workshop (`System Architecture.md`). Reusing it here would collide with
> established vocabulary in the same vault. Say *consumer*.

Consequence for this plan: **the core never imports from a consumer, and the core's tests
must pass with every consumer deleted from disk.** That is checkable, and it is checked
in Phase 1.

---

## 3. Current state, measured

Honest accounting of what exists today, as of this writing.

| Layer | State | Where it lives |
|---|---|---|
| Netlist | Built, sound | `45 - Process Core/src/topology.js` |
| Schematic view | Built, sound | `45 - Process Core/src/schemvis.js` |
| Physical view | Built; skinnable as of 5a | `piping()` in LPE `engine.js` |
| Dynamics | Built (Phase 3) | `45 - Process Core/src/dynamics.js` — level 1 migrated, level 2 not yet |
| Scenario | Built (Phase 4) | `45 - Process Core/src/scenario.js` — level 1 migrated |
| Chrome | A boundary, with two skins | LPE `engine.js` (1990s) and `45 - Process Core/skins/modern.js` |

Three specific findings:

- `topology.js` and `schemvis.js` are concatenated into LPE's engine bundle by LPE's
  `build.js`. Nothing outside LPE can consume them.
- `piping()` — the physical-rig renderer — makes **15 direct references to the game
  palette** in its body. The physical layer *is* chrome right now.
- Nothing derives dynamics from the netlist. Level 1's solver is hand-written with its own
  Cv constants and its own series/parallel algebra. `fluids.js` is a properties table, not
  a solver.

**On level 1 specifically:** 538 lines. The part that is genuinely *"what is this rig and
what is wrong with it"* — geometry, bores, Cv values, the six tasks — is on the order of
120 lines. The rest is rendering, input handling, narrative, scenery and plumbing. And it
is not separated: the netlist sits at line 169, between the water-animation model above it
and the branch-particle geometry below it. An engineer who knows valves cold and no
JavaScript cannot author that file.

**What is already right:** the netlist and schematic layers are genuinely layer-shaped,
not just named that way. `plan()` touches no canvas — it emits data, and `draw()` walks it
without deciding anything. The layering is also enforced rather than aspirational: during
the build of the schematic view, a fix for a line-gap defect was placed in `topology.js`
and `topology.test.js` rejected it, because that file had recorded, with reasons, that
hiding is a render concern. The fix moved up a layer. **The plan below depends on that
mechanism rather than on anyone's judgement, including mine.**

---

## 4. The layer stack

Franz's four layers, plus the physical view he described transposing over the netlist,
plus one new layer that his second requirement implies.

```
  CHROME            renderers + narrative binding        (skin: 1990s, or modern)
  ─────────────────────────────────────────────────────────────────────────────
  SCENARIO          rig + task + faults + events         (NEW — the authorable unit)
  ─────────────────────────────────────────────────────────────────────────────
  DYNAMICS          network hydraulics, solved from the netlist
  ─────────────────────────────────────────────────────────────────────────────
  SCHEMATIC VIEW          │          PHYSICAL VIEW       (siblings, both from netlist)
  ─────────────────────────────────────────────────────────────────────────────
  NETLIST           components, ports, connections
  ─────────────────────────────────────────────────────────────────────────────
  REGISTRATION      tags + coordinate frames             (the alignment requirement)
```

**Registration is not a layer so much as the connective tissue** — it is the direct answer
to *"all need alignment capabilities with each other."* See §5.

**Scenario is new**, and comes from the level-design requirement. See §6.

---

## 5. Registration — the alignment requirement

This is the gap that matters most, and it is currently invisible because of a coincidence.

Level 1's netlist uses **the rig's own pixel coordinates**. The schematic lines up with the
cutaway because they are literally the same numbers. That is not an alignment mechanism.
It is one level where alignment happened to be free, and it will not survive the second
rig.

Real alignment requires two things the stack does not have:

**Stable tags.** Components are currently keyed by the solver's private names — `main`,
`b0`, `b1`, `b2`. A P&ID engine needs real tags, with `b0` demoted to a level-local alias.

> **Correction, rev. 6.** Earlier revisions of this document used `FV-101` as the worked
> example. That was wrong for level 1 and was caught while building Phase 2. Level 1's
> four valves are **hand wheels** — no actuator, no loop — and `FV-` claims a flow control
> valve that is not there. The convention is now grounded in the vault's own Source
> Library rather than chosen: the Pulp & Paper Sourcebook's P&IDs (drawings **C0748** and
> **E0894**) tag handvalves `HV-1`…`HV-20` and reserve `FV-`/`PV-`/`TV-`/`LV-` for control
> valves in a loop. Level 1 is therefore `HV-1`…`HV-4`.

**Coordinate frames.** Each view declares its own frame; the netlist carries the
registration between them. Component `HV-3` then has one identity and several placements:
a schematic grid cell, a rig pixel, a phys-rig model coordinate. *"Transpose any physical
structure over"* becomes: supply a new registration, keep the netlist.

Today that is unbuildable without touching every layer, which is why it is Phase 2 and why
Phase 2 gates everything after it.

---

## 6. The scenario format — why it is bedrock, not a game feature

Take a level. Remove the narrative. Remove the chrome. What is left is:

- a **rig** (netlist + sizing)
- a **task** (what must be achieved, measurably)
- a **fault or scenario** (what is wrong)
- **success conditions**

That is not a game format. **That is a troubleshooting exercise.** It is also what
LoopBench's bench already is, and what a competency assessment item would be. The same
artifact serves a game level, an instructor-led exercise and a skills check, because the
engineering problem does not care what is drawn on top of it.

So the scenario format is not game infrastructure that happens to be reusable. It is
Workbench infrastructure that LPE happens to be the first consumer of.

### The narrative/problem split, and its real complication

Separating narrative from problem is harder in these levels than it sounds, because the
teaching is interleaved with the doing. Level 1's six steps alternate *"open this valve"*
with *"here is what just happened and why"* — and per `teaching-philosophy.md`, that
interleaving is load-bearing, not decoration.

The resolution: **a scenario declares events; the narrative layer binds text to events.**

- The scenario says *"flow established on bed 1"* or *"manifold pressure fell below X."*
- The narrative says what to say about it.

An engineer authors the rig and the events. Whoever owns voice writes what is said. Two
people, two files, neither blocking the other. The same scenario then runs silent in
LoopBench and fully narrated in LPE — **which is the test of whether the split is real.**

### The format is the deliverable; the tool is not

A level-building tool is a large piece of work and the classic thing to build too early.

Get the format right and the tool stays optional for a long time: once a level is data
against a validating schema, another engineer can author one in a text file today, and a
GUI later is just an editor over that schema. Build the tool first and a bad schema gets
frozen into it.

**The authoring tool is explicitly deferred** until the format has survived three or four
hand-authored scenarios. See §11.

---

## 7. Decisions needed before Phase 1

These are cheap now and annoying later.

### 7.1 Name — SETTLED

**Process Core.** Plain and unambiguous, which for a layer that several unrelated projects
will depend on is the right trade. *Plantworks* and *Flowstack* were the alternatives.

### 7.2 Home on disk — SETTLED

**`45 - Process Core`: a numbered peer of `40 - Engine` inside the vault** — e.g.
`45 - Process Core`.

Rationale: `40 - Engine` already establishes exactly this pattern. Courses do not import
the presentation engine; they **vendor a built copy with a SHA-256 lock file**
(`_engine-lock.json`) recording every file's hash and the absolute source path it came
from. That pattern already crosses repository boundaries, so LoopBench — which lives
outside the vault — can consume the core the same way a course consumes the engine.

The alternative, a standalone sibling repo next to LoopBench, fragments the work for no
benefit the lock file does not already provide.

### 7.3 Consumption mechanism — SETTLED

**Vendor + lock, matching `40 - Engine`.** Each consumer holds a built copy plus a lock
file. No package registry, no submodules, no network dependency on a corporate machine.

---

## 8. Orientation — making the architecture self-explaining

**The requirement:** a fresh Claude instance, or a new engineer, must be able to pick this
up and be *flagged immediately* when it is about to do the wrong thing.

**Current state, measured:** there is **no `CLAUDE.md` anywhere in the vault.** A fresh
instance gets no automatic orientation at all and infers the architecture from whatever
files it happens to open. That is precisely how a fix lands in the wrong layer. It is also
why the session that built the netlist and schematic layers opened with a naive framing of
the whole project.

### 8.1 The mechanisms, ranked by whether they actually work

**1. Enforced invariants — the build fails, and the failure carries the reason.**
The only mechanism that cannot be skipped, skimmed or forgotten. An instance does not have
to have read anything; it finds out by trying. This repo has already proven it:
`topology.test.js` rejected a wrong-layer fix *and the test text explained why the boundary
was there*, which is what made the correction obvious instead of confusing.
**Anything that can be an invariant should be one.**

**2. `CLAUDE.md` — loads automatically, every session, in every directory below it.**
The only document guaranteed to be read. Which is exactly why it must be short: a long one
gets skimmed and the load-bearing line is lost in it. Its job is orientation and pointers,
not content — what this is, what the layers are, what you must never do, where to read more.

**3. Co-located layer READMEs — "this layer may X, must never Y."**
Read when an instance opens that directory, which is usually the moment it matters.
`40 - Engine/README.md` is the house precedent and the right register.

**4. Decision records — why a boundary sits where it does.**
Stops a future instance from "fixing" a deliberate constraint. Already done informally in
this repo, in the long comment blocks in `topology.js`. Worth keeping deliberate.

**5. Build logs — the weakest option, and worth saying so plainly.**
Franz asked whether this needs build logs. Honestly: a log records what *happened*, not
what is *allowed*, and nobody reads one unless something has already broken.
**Build output beats a build log.** The existing build already prints
`36 topology checks passed (level 1 reproduction, netlist validation)` on every run, which
orients anyone who builds, every time, for free. Extend that habit rather than start
writing logs.

### 8.2 What gets built

A short `CLAUDE.md` at the vault root and another in `45 - Process Core`. A layer README
per tier. And **a guard check per phase**, so each phase's invariant becomes something the
build enforces rather than something someone has to remember:

| Phase | Invariant the build enforces |
|---|---|
| 0 | every file in the core declares which tier it belongs to |
| 1 | the core imports nothing from a consumer; core tests pass with consumers deleted |
| 2 | the netlist carries no view-specific coordinates; every component has a tag |
| 3 | no level declares its own solver constants |
| 4 | scenario files contain no narrative strings and no pixel values |
| 5a | nothing in core or scenario references a colour or a palette |

Each check must fail with a sentence saying **why the rule exists**, not merely that it was
broken. That sentence is the actual deliverable — it is what turns a build failure into
orientation.

---

## 9. The phases

Each phase ends in something provable. The acceptance bar throughout is the one that made
the netlist safe to adopt in the first place: **exact reproduction of known-good output.**

### Phase 0 — Orientation scaffolding

**Goal:** a fresh instance has footing *before* the structure starts moving.

- `CLAUDE.md` at the vault root: what Workbench is, the layer stack, the hard rules, and
  where to read more. Short enough to be read rather than skimmed.
- The tier-declaration header convention, and the check that enforces it.
- A second `CLAUDE.md` inside `45 - Process Core` once that exists (end of Phase 1).

**Acceptance:** a fresh instance, given only the repo and no briefing, can state the layer
stack and name one thing it must not do. Testable by actually trying it.

**Why before Phase 1:** Phase 1 moves files. An instance that arrives mid-move with no
orientation is the exact failure this is meant to prevent.

#### Status — BUILT and ACCEPTED 2026-10-08

| Delivered | |
|---|---|
| `CLAUDE.md` at the vault root | Loads automatically in every session below it. Disambiguates the two meanings of "layer", maps the folders, states six hard rules, points at the deeper docs. |
| `@layer` header convention | On `topology.js`, `schemvis.js`, `topology.test.js`, `schemvis.test.js`, `layers.test.js`. Each names its layer and what it may never do. |
| `50 - Lunar Process Engineer/layers.test.js` | The guard. Moves to the core in Phase 1. |
| Wired into `build.js` | Runs **before** the layers' own tests — if a file is not what it says it is, whatever its test proves is being proved about the wrong thing. Prints `16 layer checks passed`. |

**What the guard enforces today**, all true of the current code rather than aspirational:

- every core-bound file declares a valid layer;
- no core file reaches into a consumer's runtime **in code** (comments are stripped first,
  so `topology.js` can keep explaining what consumers do with a netlist — it does, three
  times, and those sentences are worth keeping);
- the netlist layer makes no canvas call and names no colour;
- no two implementations claim the same layer.

**Verified to bite.** Three violations were injected into `topology.js` at once — a
consumer call, a canvas call and a colour literal — and all three failed with their
reasons; the file was then restored and confirmed byte-identical to its pre-injection
backup. A check that cannot fail is worse than no check, and this repo has a whole
`verify.js` section about exactly that.

**It also caught its author immediately:** the first run failed because two test files were
listed as core-bound without headers.

#### Acceptance — PASSED 2026-10-08

Run by Franz in a genuinely fresh Claude Code session at the vault root, prompt
*"what are the layers here, and name one thing you must not do."* No briefing, no context
from the session that wrote the file.

The fresh instance returned both stacks correctly — Workbench Layers 1–4 including
Cartridge, and the Process Core stack in order — opened with **"Two distinct layer stacks,
and they don't mix"**, and added *"Cartridge belongs to Workbench Layer 3 only and is not
reused elsewhere"* without being asked. It named **never invent** as the rule it must not
break, then volunteered two more unprompted: never hand-edit a consumer's vendor copy, and
never disable a failing check to get green.

**What this proves:** the file is read, legible, and its priority order survives contact
with an instance that has no other context. The layer disambiguation was the
highest-risk ambiguity in the vault — invisible until Phase 0 went looking for it — and it
was the first thing the instance reached for.

**What it does not prove**, and is worth being honest about:

- The question asked almost exactly what `CLAUDE.md` is organised to answer. It verifies
  the document is read and clear; it does not verify that the document contains the
  *right* rules. A harder bar is behavioural — give a fresh instance a task that tempts it
  into a violation and see whether it catches itself. More meaningful, considerably more
  expensive, not run.
- Only the **vault-root** file was exercised. `45 - Process Core/CLAUDE.md` has not been
  tested by a session started inside that directory.

---

### Phase 1 — Extract the core

**Goal:** the core exists outside LPE and LPE consumes it.

- Move `topology.js` and `schemvis.js` (plus their tests) into the core.
- Give the core its own test runner, independent of LPE's `build.js`.
- LPE consumes a vendored copy via lock file.

**Acceptance:**
1. Core tests pass **with `50 - Lunar Process Engineer` deleted from disk.**
2. LPE builds, and level 1 renders byte-identically — the existing
   *"level 1's netlist reproduces its own rig exactly"* check still passes.

**Why first:** cheap now, expensive once a second consumer exists.

#### Status — BUILT 2026-10-08

`45 - Process Core` exists: `src/` (topology.js `@layer netlist`, schemvis.js
`@layer schem-view`), `test/` (the three suites), `test.js` (its own runner, guard first),
`vendor.js`, `README.md`, `CLAUDE.md`.

**Acceptance 1 — passed.** The directory was copied to an empty tree outside the vault,
with no LPE and no vault anywhere in it, and `node test.js` passed **83 checks across 3
layers**.

**Acceptance 2 — passed.** LPE builds green, 87 checks, and
*"level 1's netlist reproduces its own rig exactly"* still passes against the **vendored**
copy — `verify.js` was pointed at `vendor/process-core/topology.js` deliberately, so the
check is true of what the game actually bundles rather than of the core's own copy. The
vendored files were confirmed byte-identical to `src/`.

**How LPE consumes it:** `vendor/process-core/` plus `_process-core-lock.json`
(SHA-256 per file, source path, timestamp — the shape of `40 - Engine`'s
`_engine-lock.json`). `build.js` bundles from there and **verifies the lock on every
build**; it no longer runs the core's tests, because `vendor.js` runs the full suite
first and refuses to copy a red core. Verified to bite: a line appended to a vendored
file failed the build with the reason attached.

**Defect found and fixed in passing.** The lock failure printed `BUILD FAILED` and the
build still **exited 0**. Cause: `build.js` requires `verify.js` last, and `verify.js`
ended with `process.exit(FAIL ? 1 : 0)` — discarding any `process.exitCode` an earlier
check had set. The cross-check had the same hole. This is the dead-check failure mode
`verify.js` itself has a section about, one level up: a check that reports but cannot
fail the build. Now `process.exit(FAIL ? 1 : (process.exitCode || 0))`, and a lock
mismatch exits 1.

---

### Phase 2 — Tags and registration

**Goal:** alignment becomes a declared thing instead of an accident.

- Every **equipment** component carries a stable tag (`HV-1`; see the correction in §5). Fittings do not.
- Levels declare aliases (`b0` → `HV-3`) so existing code keeps working.
- Each view declares a coordinate frame; the netlist holds the registrations.

**Acceptance:** level 1's netlist carries **no pixel coordinates of its own** — the rig
frame supplies them — and both views still reproduce exactly.

**Why second:** this is the gate. An authored level must refer to components by stable
name, so the scenario format cannot be designed before this exists. It also gets
dramatically more expensive with every level added.

#### Status — BUILT and ACCEPTED 2026-10-08

**Acceptance — passed.** Level 1's netlist declares **no coordinate at all**. Components
say what they are, what they are called, and how big their bore is *in inches*; the rig
frame says where everything sits. Both views still reproduce exactly — the hand-written
rig spec and the netlist still agree on 4 lines, 2 tees, 1 reducer, 1 fitting — and level
1 was stepped through in the browser in both views, pixel-identical to before.

**What a frame carries**

| | |
|---|---|
| `pxPerInch` | how big an inch is in this frame's units |
| `round` | decimal places to quantise a scaled bore to |
| `at` | `{componentId: [x,y]}`, or `[[x0,y],[x1,y]]` for a reducer — the one component that spans a distance rather than sitting at a point |
| `via` | `{segmentId: [[x,y],…]}`, keyed `"from.port->to.port"` rather than by array index, which would shift the moment a segment was inserted above it |

`net.inFrame('other')` returns the same graph placed somewhere else. `net.byTag('HV-1')`
and `net.byKey('b0')` resolve identity.

**Bores moved to inches**, which was not in the original phase text but is the same
disease: a pixel radius in the netlist is a view-specific number, and it would have
blocked a second frame exactly as a coordinate does. The frame scales and rounds them,
reproducing 12.6 / 10 / 2.2 px exactly. Phase 3 now gets real bores for free instead of
pixel radii it would have to un-scale.

**Registration is exercised, not asserted.** The netlist test builds a second frame at
2× scale and +1000 px offset and requires every emitted point to land exactly where that
frame put it — which is what proves nothing above the netlist has quietly baked in the
rig's coordinates.

**Verified to bite.** A coordinate was put back onto `tee0` in the real level file; the
build failed with *"tee0 declares 'at': coordinates belong to a frame, not to a
component. Move it to frames.rig.at.tee0"*, exit 1. File restored and confirmed
identical.

**Also moved:** `TOPOLOGY.md` — the netlist's design doc — was still sitting in LPE after
Phase 1. It is now in the core and brought up to date with frames and tags.

**Counts:** core 106 checks across 3 layers (netlist 59, up from 36); LPE 87.

---

### Phase 3 — Dynamics from the netlist

**Goal:** the solver reads the graph instead of being retyped per level.

- Port level 1's hand-written `solve()` into a general network solver that reads bores, Cv,
  lengths and fluid from the netlist.
- Reconcile with LoopBench's `FirstOrderProcess` / `SimulatedValve` — either unify, or
  state the relationship explicitly and deliberately.

##### The LoopBench reconciliation — decided: do not unify yet

Read both before deciding. They are not two versions of one thing:

| | answers | model |
|---|---|---|
| LoopBench `FirstOrderProcess` | *how does this PV respond to this controller?* | FOPDT — gain, time constant, dead time, ambient, noise |
| LoopBench `SimulatedValve` | *how does the stem actually get there?* | stick-slip — deadband, stiction, slip-jump, stroke time |
| Process Core `dynamics` | *how much flows where, at what pressure?* | Cv network across a graph |

**They are complementary, not overlapping — and each has exactly what the other lacks.**
Process Core has **no valve dynamics at all**: position is whatever you hand it, and the
stem moves instantly. LoopBench has **no hydraulics**: its process is one lumped
first-order lag with no notion of a branch. LoopBench's `SimulatedValve` is precisely
the piece Process Core is missing, and Process Core's network is precisely the piece
LoopBench is missing.

**Not unified now**, deliberately: they are in different languages, nothing today needs
both, and a port with no consumer is speculative work that then has to be maintained.

**What forces the decision later** — either of these, and it should be revisited the day
one happens:

1. LoopBench scales to the ~8-channel rig and the channels share a header, so the
   interaction between them stops being ignorable.
2. A level needs a valve that does not move instantly — stroke time, or a sticking valve
   as a fault. That is a *scenario* feature (Phase 4) and it wants `SimulatedValve`.

**When it comes, the split is clean:** Process Core owns the network — where flow goes.
A valve model owns the actuator — how the stem gets to its command. Position is already
the interface between them, which is why this can wait without rotting.

**Acceptance:** reproduces level 1's current numbers **to the digit** — manifold gauge
reading and gpm per bed, at every valve position — before any level switches to it.

#### Status — BUILT and ACCEPTED 2026-10-09

**Acceptance — passed, bit for bit.** `test/dynamics.test.js` keeps level 1's shipped
solver pasted in verbatim as an **oracle** and sweeps **60,000 valve-and-pressure
combinations** against the derived one, comparing with `Object.is` rather than a
tolerance — a tolerance would hide a model that is subtly the wrong shape. Every Cv,
every target pressure, every per-bed gpm and the total agree exactly. A separate
200-step script with five valve changes proves the first-order lag tracks identically.

**The model is derived now, not written.** Restrictions are the components that have a
Cv. Nodes are then whatever is left: *if no restriction sits between two points they are
at the same pressure and they are the same node*. That makes level 1's whole riser one
manifold node — which is exactly the lumping the hand-written solver did, not because
anyone chose to lump it but because there is nothing in between to drop pressure across.
The pressure divider `Pn = Ps·Cv_u²/(Cv_u² + Cv_d²)` then falls out of flow-in =
flow-out, and is the line level 1 already had, now with its derivation attached.

**Level 1 switched.** `CV_MAIN_MAX`, `CV_BR_MAX`, `CV_REDUCER`, `P_SUP`, `SG`, `P_TAU`,
`seriesCv`, `pManHeld` and the whole `solve()` are **gone from the level**. The Cv values
moved onto the components they describe; supply pressure onto the source; `sg` into a
fluid block. The guard invariant for this phase — *no level declares its own solver
constants* — holds for level 1. Level 2 is not migrated and still does.

**What it refuses.** A net that reduces to more than one unknown pressure node — a loop,
a recycle, a two-stage header — has no closed form and needs an iterative solve that is
not built. It is **refused by name**, because a plausible wrong flow is worse than no
flow. Tested with a real two-stage header.

**Three checks elsewhere were reading level 1's physics** and all three failed correctly
when it moved — they were doing their job:

- `reference/crosscheck.js` scraped `CV_REDUCER=` / `CV_MAIN_MAX=` / `CV_BR_MAX=` out of
  level1.html to prove one Cv across the game. Repointed at the netlist components.
- It also asserted the trainer used level 1's pressure divider by regex-matching the
  formula *in level1.html*. The formula now lives in the core, so the check was
  repointed there — left alone it would have passed forever against a file with no
  solver in it.
- `verify.js` extracted level 1's `solve()` by brace-matching and compared it to level
  2's. Level 1 has no solver to extract any more, so its side of that comparison is now
  the **real thing**: its own declaration, read out of level1.html, handed to the real
  `LPE.dyn`. The guarantee got stronger — it used to be "the two levels contain the same
  arithmetic"; it is now "level 2 still agrees with the authority level 1 runs on", which
  is what keeps level 2 honest until it is migrated. 81 states, passing.

**A bug the build could not catch.** The first cut put `const DYN = LPE.dyn(NETLIST…)`
*above* the `NETLIST` declaration — a temporal dead zone — and the level threw on load
and rendered a black screen. **Every check still passed**, because `verify.js` builds its
own netlist in a sandbox and nothing in the build executes a level's top-level code in
order. Found by opening the page. Worth recording plainly: *build green is not the same
as it works*, and the browser pass is not optional.

**Counts:** core 125 checks across 4 layers; LPE 87. Level 1 replayed in the browser to
step 3/6 — 3.4 gpm on bed 1, 45 psig — identical to the pre-Phase-3 run.

---

### Phase 4 — Scenario format

**Goal:** a level becomes data.

- Declarative file: rig reference, initial state, task, faults, events, success conditions.
- No narrative. No chrome. No pixels.
- Validating schema with error messages aimed at a process engineer, not a developer.

**Acceptance:**
1. Level 1's six steps expressed as a scenario file, and the level plays identically.
2. **The same scenario runs headless, with no renderer present at all.** That is the proof
   the split is real.

#### Status — BUILT and ACCEPTED 2026-10-09

**Both bars passed.**

**Bar 1.** Level 1's six steps are now `SCENARIO` (data) plus `NARRATIVE` (words), zipped
back together by the level's own step machinery. Played end to end in the browser: all
six steps fire in order, each lesson binds correctly to its step id, and the bay finishes
balanced at **1.5 / 1.5 / 1.5 gpm** with `DONE` on the counter.

**Bar 2.** The headless run is not a mock. A simulated player turns real valves at a hand
wheel's pace, the real dynamics layer is stepped on a real clock, and all six steps
complete in order with nothing drawn anywhere — ending genuinely balanced, which is
asserted separately from the step being marked complete:

```
open-main        at    1s   beds 0.00 / 0.00 / 0.00
open-bed-1       at    2s   beds 3.25 / 0.00 / 0.00
open-bed-2       at    3s   beds 2.51 / 2.51 / 0.00
open-bed-3       at    4s   beds 2.06 / 2.06 / 1.11
throttle-bed-1   at 4.62s   beds 0.87 / 2.27 / 1.23
balance          at    5s   beds 1.35 / 1.50 / 1.35
```

**The format.** A step carries `id`, `operable` (what the player may touch), `observe`
(the tag the step is about — the chrome decides *how* to draw attention), and `when`
(conditions, all of which must hold). A condition is one of
`{measure:'HV-1.position', atLeast:0.9}`, `{each:[…], atLeast:…}` or
`{spread:[…], atMost:…}`, where a measurement is `<tag>.<quantity>` and quantities are
`position` and `flow`. Everything is addressed by **tag**, which is what Phase 2 was for.

**It is data, and that is tested**, not asserted: the scenario survives
`JSON.parse(JSON.stringify(…))` and still validates and runs. There are no predicate
functions in it, so it could be a file on disk today and a GUI later is an editor over
this shape.

**No words, enforced.** `task`, `lesson`, `text`, `title`, `label`, `caption`, `message`,
`prompt`, `hint` and `description` are **rejected by name** on a step, with the reason —
*"A scenario holds no words — it is meant to run silent in a bench exercise as well as
narrated in a game. Put the text in the narrative, against the id …"*. That is this
phase's guard invariant, enforced rather than requested.

**The validator speaks to an engineer, not a developer.** Ten checks cover its messages.
An unknown tag is named *and the rig lists what it does have*; an unknown quantity
suggests the real ones; a step with no condition is told it *"could never be finished"*;
a step with no id is told *why* it needs one (the narrative binds to it).

**Faults were deliberately not built.** The phase text lists them, but every use of the
word "fault" in every level today is narrative prose — level 2 talks about a fault in the
line and nothing anywhere injects one. A schema with no consumer is a guess that then has
to be maintained. When a level needs one, a fault is an override on a component and
belongs beside `start`. Recorded rather than invented.

**Counts:** core 154 checks across 5 layers; LPE 87.

---

### Phase 5 — Chrome as a boundary

Modern chrome is now a near-term deliverable rather than a proof of concept, so this phase
splits in two. They are very different sizes and have **different dependencies**.

#### Phase 5a — the boundary *(small; depends only on Phase 1)*

- Pull the palette out of `piping()` (15 references today).
- **Pull the five default colours out of `schemvis.js`'s `THEME` block.** Found during
  Phase 0: `#9fb0bf`, `#d7dde3` x2, `#8b959e`, and a `'#15181b'` ground fallback. Done.
- Define the renderer interface.
- Narrative binds text to scenario events.

**Acceptance:** the existing 1990s view renders byte-identically through the new interface,
and nothing below chrome knows a colour.

##### Status — BUILT and ACCEPTED 2026-10-09

**Byte-identical, measured rather than eyeballed.** Both renderers were painted to an
offscreen canvas and the pixels hashed before and after the change — they are pure
geometry, so the hash is deterministic even though the live rig animates. `piping()`
`5cc1c014` before and after; the schematic `a51945e9` before and after.

**The core holds no colours at all.** `schemvis.js`'s `THEME` block is gone. The layer
now names the ROLES that need one — `line, symbol, fill, label, ground, gap` — plus the
metrics, and `draw()` **throws by name** if one is missing rather than falling back,
because a silent fallback is how a display ends up black on black and nobody can say
why. `ground` may be `null` for "paint none", but it has to be *said*.

`gap` is new and is an improvement, not just a move: a crossing break is painted over in
whatever is behind the line, which only the consumer knows. It used to be
`t.ground || '#15181b'` — a hard-coded guess at the consumer's background.

**The guard invariant went from the netlist to the whole core.** It was netlist-only
because `schemvis.js` was already red and a check that is already red teaches nothing.
That debt is paid, so the rule is now total: **no file in the core may name a colour.**

**It caught its author within the minute.** The new check failed on the test file I had
just written, which supplied real hex values to exercise `draw()`. The fix made the test
better: it now passes role sentinels (`'role:line'`), because what `draw()` owes a caller
is that each role reaches the right canvas property, not that any particular hex is
right.

**`piping()` takes a skin.** Nine palette references inside it became five named roles
(`body, rim, light, mid, dark`), supplied at draw time as `NET.draw(g, skin)`. The 1990s
mapping is one object, `PIPE_SKIN`, declared beside the palette. The geometry no longer
reaches for a colour — a second renderer passes its own and nothing in the bore, elbow,
tee or reducer code changes. That is the interface Phase 5b needs.

**Narrative binding to events** was the fourth item in this phase and landed in Phase 4:
`NARRATIVE` is keyed by scenario step id.

**Counts:** core 166 checks across 5 layers; LPE 87.

**Scheduling note:** 5a does *not* depend on Phases 2, 3 or 4. It can run immediately after
Phase 1, in parallel with Phase 2 — and it should, because every week modern chrome is
built against the fused architecture is a week of work that has to be done twice.

#### Phase 5b — the modern renderer *(large; its own track; depends on Phase 2)*

A production-quality modern view: real materials, real lighting, particle rendering driven
by the dynamics layer's output.

**Why it depends on Phase 2:** a second skin with its own geometry and its own coordinate
frame is *precisely* what registration exists for. It could be built sooner by hardcoding
coordinates the way level 1 does today — and that would be fast — but it would be a second
fused thing, which is the problem this whole plan exists to end.

**Acceptance:** one rig rendered in **both** skins — the 1990s dithered view and the modern
one — from one scenario, with no change to anything below chrome.

##### Status — BUILT and ACCEPTED 2026-10-09

**Acceptance met.** `50 - Lunar Process Engineer/skins-preview.html` paints Bio-Grow Bay 3
twice from **one** `LPE.net()` declaration through **one** `LPE.dyn()` solve. The hand
wheels drive both at once. Nothing below chrome changed.

It also exercises **two frames**, not just two palettes: the left panel is the cutaway's
`rig` frame, the right a `board` frame laid out for a wall display. That is Phase 2's
registration doing the thing it was built for — transposing a different layout over one
netlist — and it is why the two panels are not one picture in different colours.

**Where the look comes from — not invented.** Colour is the **EMERSON palette** from
`tokens.css`, used with the roles the **Style Guide §3.2** assigns: blue is the measured,
actually-flowing quantity; grey is there-but-not-the-subject. Saturation tracks rate, so a
glance says which branch is working hardest before you read a number. Every neutral is
derived by mixing white toward charcoal rather than picked, which keeps the whole surface
on one axis. §3.4 — "no non-token colour" — holds.

The Style Guide governs slides and says so in §1.1; §3.3 anticipates other surfaces
reaching for the palette, and that is the allowance used here. The *vocabulary* and the
semantic roles are the house's, applied to a surface the guide does not itself cover.

**Ground is light, not dark** — modern high-performance HMI moved off the dark CRT-era
ground, keeping saturation in reserve so that when something *is* coloured it means
something. It also agrees with the Style Guide, whose page is always white. The visible
consequence is that the two skins look nothing alike, which is what makes the pair worth
rendering.

**State still reads the way ISA-5.5 says.** Shutting bed 2 turns its symbol to outline in
*both* panels — that decision belongs to the schem-view layer, and a change of skin gets
no vote on it.

**The architecture got one rule simpler.** Phase 5a made the model colour-free; 5b gave
colour a place to live. The guard is now: **a file declaring `@layer chrome` may name
colours — that is what a skin is for — and every other file in the core may not.** Skins
live in `45 - Process Core/skins/`, are discovered by the guard, and ship through
`vendor.js` alongside `src/`, so a consumer wanting the modern view does not rewrite it.

**Two defects found by looking, both real:**

- Every bed read **5.23 gpm** — the whole bay's total. The renderer matched a drawn line's
  endpoint against component positions to find its flow, and a pod has no `Cv`, so there
  is no `q` under its tag and the lookup fell through to `qTot`. Guessing from geometry
  was the wrong approach: it now walks the netlist's own graph upstream until it finds the
  restriction feeding that point. A sink fed through two valves would be right too, which
  the geometric match never would have been.
- The first pass was, honestly, clean but thin — flat lines, no values, nothing
  distinguishing 2.61 gpm from 1.31. It now shades a bore as a cylinder, animates flow as
  the dash pattern itself so it stops dead when flow does, and puts the numbers on the
  plant the way an operator graphic does rather than in a table off to one side.

**Counts:** core 169 checks across 5 layers; LPE 87.

This is where the dual-chrome ambition earns its keep architecturally: if the same core must
render as VT323 pixel art *and* as a high-fidelity modern view, chrome cannot quietly leak
into the model, because it would be noticed immediately. Most engines rot because they only
ever have one skin and the skin becomes the model. This one cannot.

---

### What Phase 5b is, and what it is not

It is a **credible second skin, and the boundary that makes a third cheap** — enough to
prove nothing below chrome holds an opinion about appearance, and enough to put in front
of someone.

It was **not** a finished art direction. That became its own pass — below.

### The production art pass — DONE 2026-10-09

Against the five-item brief above.

**Type is decided.** A four-step scale — `display / tag / value / unit` — with size, weight,
face and tracking fixed per role, because a board has exactly four jobs for type and
anything wanting a fifth is usually something that should not be on the board. Tracking is
drawn rather than declared, since canvas letter-spacing is not reliable across engines.

**The face now exists.** The previous pass specified `"Inter"` behind a comment claiming
"real fallbacks — a board that silently drops to Times because a webfont did not load is
not a board anybody will trust." Measured: `Inter`, `Segoe UI` and `system-ui` all
returned **identical** text widths, so Inter had never loaded once. `document.fonts.check`
reports true for a face it will merely fall back for, which is why nobody noticed. The
stack is now faces that are actually installed, with a separate numeric stack so a
readout does not twitch as digits change width. A consumer with a real webfont passes its
own `face` and awaits `document.fonts.ready`.

**Abnormal states exist, and the skin does not decide them.** A consumer passes
`limits: {'TK-2': {target, tol}}`, because design duty is a fact about the plant, not the
picture — the same rule that keeps colours out of the model keeps limits out of the skin.
Off-target reads in the Style Guide's caution orange (§3.2) with a rule under it rather
than a blink: a rule survives a photograph, a projector and colour-blindness; a blink
survives none of them and is the first thing an operator learns to ignore. Orange appears
nowhere else on the board, which is the whole reason holding saturation in reserve works —
one off-target reading on an otherwise grey-and-blue surface cannot be missed.

**Device-pixel exact, and this time measured.** `fit()` sizes the backing store to CSS ×
devicePixelRatio. The first cut *imposed* a CSS width, the page's own `max-width:100%`
clamped it straight back, and the result was a 1125-wide buffer shown at 729 CSS px —
exactly the resampling the function exists to remove, while reporting success. It now
measures the element and imposes only the aspect. Verified in the browser:
`backing 911 = 729 CSS × 1.25 DPR`, `pixelExact: true`.

**Boards caption with the tag.** `schem.plan` gained `labelBy: 'tag' | 'key' | 'id'`. A
plant board shows `HV-1`, because that is what the thing is called in every document the
operator has; a game level shows the solver's own `b0`, because that is what its own
instructions say. Neither is more correct, so the display chooses. This is Phase 2's tag
work finally being spent, and it was listed as available-not-done back then.

Plus board furniture — title, subtitle, header rule, and a legend, because a legend is not
decoration on a surface whose entire alarm vocabulary is "one thing went orange" — and one
name per thing, after a readout and a symbol caption were both printing `TK-2` a
centimetre apart.

#### Two things deliberately not done

**Equipment symbols were not redrawn.** The brief said "drawn for this surface rather than
inherited from the schematic," and that was my phrasing, but acting on it literally would
mean inventing symbology — which this project does not do, for the same reason it does not
invent a diagram or a dimension. The ISA-5.5 shapes are the grounded ones. What changed is
**weight and scale**: stroke widths and symbol scale raised so equipment reads as equipment
next to a 13-px bore. Same shapes, drawn properly.

**No multi-bay layout engine.** Nothing needs one — every rig that exists is one bay, and a
layout engine with no consumer is a guess that then has to be maintained. Same call as
faults in Phase 4. When a second bay exists, it is a frame.

### Round two — DONE 2026-10-09

**The webfont question has a house answer, and it is not a webfont.** Style Guide §2.1:
Arial is the theme's own major *and* minor font — "this is not a substitution, it is what
the brand uses" — and DTL Argo T is Emerson's licensed display face, an optional
`@font-face` with an acceptable Arial fallback. That answer is better than a fetched one
for this surface: a board on a plant floor or an air-gapped machine must render the same
with no network. It also holds on the merits — Arial measures **tabular**, all ten digits
exactly 10.567 px at 19 px, so a readout does not twitch as its digits change. The display
face is wired the way the engine wires it; the licensed file is not in the vault, so the
fallback runs.

**`faceLoaded()` measures instead of asking.** `document.fonts.check` returned true for
`"Inter"` when Inter had never loaded, and true for `"DTL Argo T"` with no font file
anywhere in the vault. A face that renders identically to its fallback **is** the
fallback, so the probe compares widths. It reports DTL Argo T absent, correctly.

**Flowing but off-target now shows on the line.** Before, only the readout cautioned —
which means reading numbers to find the bad branch, on a board whose whole job is to not
need that. The treatment is the Style Guide's rather than taste: §3.2 keeps blue as "the
real thing", the measured quantity, and gives orange to "a semantic region or bracket",
with a span feature drawn as an orange bracket rather than an orange version of the
measured thing. So the pipe stays blue — it genuinely is flowing — and a capped orange
rule runs alongside the span that is out of band.

**Density probed at 26 tags.** `skins-density.html` is a twelve-bed header: 26 tagged
components, 13 readouts, same skin and same core. The normal state is clean — nothing
collides, everything reads. With three beds drifting, those three are findable instantly
across the whole board without reading a number: paler line, orange bracket, orange
value. The design holds at that density.

It also found three real defects, two of them in shipped code:

- **The dynamics layer went silent on a net with nothing to solve.** It errors on *more*
  than one unknown pressure node and said nothing about *none*. The density header ran
  into a drain with no valve, which pins the whole manifold to atmosphere; every reading
  came back zero and the board was indistinguishable from a rig nobody had opened. Now
  named, with the fix in the message — a real header ends in a drain valve, not an open
  pipe. A check in `dynamics.test.js` had been asserting the silent behaviour was correct.
- **`fit()` sized the backing store from the width it asked for, not the width it got.**
  `style.width` sets the content box; a 1 px border moves the real one, leaving 909
  against 911 — still resampling, just subtly. It reads the width back off the element
  now. Verified `pixelExact: true` at both 727 and 1180 CSS px.
- **`fit()` also measured a canvas the page had not sized**, got the 300 px attribute
  default, and locked a 1180-wide board to a thumbnail while reporting success. It
  measures the parent's content box and clamps to the logical width.

#### What a further pass would still want

Real art direction is iterative and this is two rounds of it. Honestly outstanding:

- **Vessel symbols that read as vessels at board scale** rather than as rounded
  rectangles. This is **blocked on a source, not on effort**: VSSL is ISA-5.5's generic
  vessel, and redrawing it would be inventing symbology. The grounded fix is the
  standard's own Storage subgroup — Atmospheric Tank, Pressure Storage Vessel and the
  rest — on pages 18-19, which have never been read. That needs Fishweb access.
- A licensed **DTL Argo T** file, if the display face is wanted.
- What a board does beyond ~30 tags, where two columns stop being enough and it genuinely
  needs a layout engine.

---

## 10. On "real-world fluid dynamics" — a distinction to settle now

These are different things and conflating them would damage the architecture.

**1D network hydraulics.** Flow, pressure, Cv, friction and head loss across a connected
graph, solved every frame. This is what a P&ID means by dynamics, what DeltaV simulates,
what the netlist is already shaped to feed, and what LoopBench's `FirstOrderProcess` is a
small version of. Achievable, and it is what Phase 3 builds.

**CFD.** Navier–Stokes on a mesh, for what happens *inside* one valve body. Minutes to
hours per solve. **This cannot be a live layer.** It belongs as an offline input: run it,
bake the result into a Cv curve or a flow field, and let the live dynamics layer consume
that.

**Particle rendering** is a third thing — a *visualisation* of the dynamics layer's output,
which places it in chrome, not dynamics. Holding that boundary is what lets one solve drive
both LPE's dithered water and a modern volumetric render.

---

## 11. Explicit non-goals

- **The authoring GUI.** Deferred until the format has survived three or four hand-authored
  scenarios.
- **CFD as a live layer.** Offline input only (§10).
- **Multi-phase flow and thermodynamics** beyond what a level actually demands.
- **Rewriting LPE's existing levels.** Every phase preserves them by test, not by promise.

---

## 12. Risks

**Phase 2 touches every level.** Mitigated by the alias layer and exact-reproduction tests
— levels keep their private names while the tags go in underneath.

**A scenario format designed against one level will be wrong.** Level 1 is not a
representative sample. Mitigation: express levels 0 through 4 in the format before
treating it as stable, and do not build a tool against it until then.

**The author of this plan.** During the work that produced the netlist and schematic
layers, a fix was placed in the wrong layer and the layer's own test caught it; a claim
about stiction was made confidently and measurement disproved it; a spec was coded from the
wrong hardware revision. The mitigation is structural and already in use: every phase has a
mechanical acceptance bar, and the build fails rather than anyone being trusted to notice.

---

## 13. Order of work, and the one real tension

With 5a's dependency clarified, the order is:

```
  Phase 0   orientation scaffolding
     |
  Phase 1   extract the core
     |
     +---- Phase 2   tags + registration ----+
     |                                       |
     +---- Phase 5a  chrome boundary         +---- Phase 5b  modern renderer
                                             |
                                             +---- Phase 3   dynamics
                                                      |
                                                   Phase 4   scenario format
```

**The tension to name out loud:** there are now two near-term wants — *modern chrome* and
*standalone level authoring* — and after Phase 2 they draw on the same people and the same
foundation. Phases 0, 1 and 2 serve both, so nothing needs deciding yet. After Phase 2,
5b and 3→4 compete, and that is a priority call rather than an architectural one.

Flagging it now so it is a choice later rather than a surprise.

### Still open

Nothing blocking. The four questions from rev. 1 are settled and recorded at the top of
this document.

**Available now that tags exist, not done** (it would change what is on screen, and
Phase 2's bar was exact reproduction): the schematic view still labels valves `main`,
`b0`, `b1`, `b2` — the game's internal solver variable names. A process display shows the
tag. One line in `schemvis.js` once somebody wants it.

**Follow-ups from Phase 0 — now done in Phase 1:** `Vault Structure.md` has been
reconciled; `25 - Vitruvius`, `45 - Process Core` and `50 - Lunar Process Engineer` are in
its folder table, and the root `CLAUDE.md` no longer has to flag it as stale.
