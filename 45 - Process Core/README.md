---
title: Process Core
type: reference
tags:
  - project
  - engine
  - process-core
updated: 2026-10-08
---

# Process Core

The shared model of a **process system** — what is connected to what, how it is drawn,
and (later) how it behaves. Extracted from Lunar Process Engineer on 2026-10-08, Phase 1
of `00 - Project/Process Core — Architecture & Build Plan.md`.

Before this, the netlist and the schematic view lived inside
`50 - Lunar Process Engineer/` and were concatenated into the game's engine bundle.
Nothing outside the game could use them. They are not the game's: LoopBench and any
future training sim need the same model, so they live here once and are **vendored** into
each consumer.

This is the same relationship `40 - Engine` has with a course.

## The layer stack

```
  chrome      skins -- the only files naming a colour     skins/modern.js
  scenario    rig + what may be touched + what must become true   src/scenario.js
  dynamics    network hydraulics from the netlist    src/dynamics.js
  schem-view  ISA-5.5 process display                src/schemvis.js
  phys-view   the physical rig                       not built (still in LPE's engine.js)
  netlist     components, ports, connections         src/topology.js
  registration  tags + coordinate frames             src/topology.js (Phase 2)
```

Every `.js` here declares which layer it belongs to in an `@layer` header, and
`test/layers.test.js` proves the declaration is true by checking the code — not by
reading the comment.

## Layout

```
45 - Process Core/
  README.md       this file
  CLAUDE.md       orientation for an agent opening this directory
  test.js         the core's test runner -- runs the guard, then every layer
  vendor.js       copies src/ into a consumer and writes the lock
  src/            THE MODEL. No colour anywhere in here.
    topology.js     @layer netlist
    schemvis.js     @layer schem-view
    dynamics.js     @layer dynamics
    scenario.js     @layer scenario
  skins/          CHROME. The only files allowed to name a colour.
    modern.js       @layer chrome -- EMERSON palette, operator-graphic look
  TOPOLOGY.md     the netlist's design doc -- read this before changing src/topology.js
  test/
    layers.test.js    @layer registration -- the guard
    topology.test.js  @layer netlist
    schemvis.test.js  @layer schem-view
    dynamics.test.js  @layer dynamics
    scenario.test.js  @layer scenario
```

## Frames and tags

A component declares **no coordinate**. It says what it is, what it is called, and how big
its bore is **in inches**. Where it sits comes from a named **frame**:
`LPE.net(spec, {frame:'rig'})`. Declaring `at`/`x1` on a component, or `via` on a segment,
is a validation error that names the frame slot to move it to.

That is the answer to *"all layers need alignment with each other"*. Transposing a
different physical rig over the same netlist is one thing: another frame.
`net.inFrame('other')` does it in a call.

Every **equipment** component carries a tag — `net.byTag('HV-1')`. Fittings do not: a tee
is part of the line and carries no tag on a real P&ID, so requiring one would be inventing
a convention. The core validates the shape and never mints a tag.

`HV-` for handvalves and `FV-`/`PV-`/`TV-`/`LV-` for control valves is grounded in the
vault's Source Library, not chosen here — the Pulp & Paper Sourcebook's P&IDs, drawings
C0748 and E0894. See `TOPOLOGY.md`.

## The two rules

**1. The core never imports from a consumer.** It is the platform; consumers adapt to it.
Enforced: `test/layers.test.js` fails on any reference to a consumer's runtime in code
(comments are stripped first, so a file may still explain what consumers do with it).

The acceptance bar for this is literal — **the core must pass its tests with every
consumer deleted from disk.** Verified on 2026-10-08 by copying this directory to an
empty tree outside the vault and running `node test.js` there: 83 checks passed.

**2. Never hand-edit a vendored copy.** Edit the core, run its tests, re-vendor. A
consumer's build verifies its lock on every run, so an edit made in the wrong place fails
at the consumer rather than forking the core silently.

## Usage

```
node test.js                                  run every layer's tests
node vendor.js "../50 - Lunar Process Engineer"   test, then copy + lock
```

`vendor.js` **runs the core's full suite first and refuses to copy if it is red.**
Pushing a known-broken core into a consumer moves the failure further from its cause.

It writes `<consumer>/vendor/process-core/` plus `_process-core-lock.json` — a SHA-256
per file, the source path and the time, matching the shape of `40 - Engine`'s
`_engine-lock.json`.

## Consumers

| Consumer | How it consumes |
|---|---|
| `50 - Lunar Process Engineer` | `vendor/process-core/`, bundled into the engine by `build.js`, lock verified every build |
| LoopBench | Not yet. Python; will need its own consumption step |

## Dynamics

`LPE.dyn(net, {tau})` solves pressures and flows off the same graph the drawing reads.
Restrictions are components with a `cv`; **nodes are whatever is left** — if no
restriction sits between two points they are at the same pressure and they are one node.
Supply pressure comes off the source component, `sg` off the netlist's `fluid` block.

Pressure is **state**, not a function of the valves: shut everything and the trapped
volume holds what it had. `solve()` gives a target, `step(dt, state)` walks the held
pressure toward it on a first-order lag, and flows use the pressure that is actually
there.

A net that reduces to more than one unknown node is **refused by name** — that shape
needs an iterative solve which is not built, and a plausible wrong flow is worse than no
flow.

This is 1D network hydraulics, which is what a P&ID means by dynamics. It is not CFD;
what happens inside one valve body belongs in an offline solve whose result arrives here
as a Cv curve.

**It has no valve dynamics.** Position is whatever you hand it and the stem moves
instantly. LoopBench's `SimulatedValve` (stick-slip, stroke time) is the missing piece
and the two are deliberately not unified yet — see the build plan, Phase 3.

## Scenarios

`LPE.scenario(spec, net)` is **a level as data** — and the same artifact is a bench
exercise or an assessment item, because the engineering problem does not care what is
drawn on top of it.

A step carries `id`, `operable`, `observe` and `when`. A condition is
`{measure:'HV-1.position', atLeast:0.9}`, `{each:[…]}` or `{spread:[…]}`, addressed by
tag. There are no predicate functions: a scenario survives a JSON round trip, which is
tested, so it can be a file an engineer edits without writing any JavaScript.

**It holds no words.** `task`, `lesson`, `text` and the rest are rejected by name. The
narrative binds text to a step's id, which is what lets the same scenario run silent in
LoopBench and narrated in a game — the test of whether the split is real.

Validation answers in an engineer's vocabulary: an unknown tag is named *and the rig
lists what it has*; an unknown quantity suggests the real ones; a step with no condition
is told it could never be finished.

Faults are **not** built. Nothing injects one today, and a schema with no consumer is a
guess. When a level needs one it is an override on a component, beside `start`.

## Colour lives in `skins/`, and nowhere else

A file declaring `@layer chrome` may name colours — that is the only thing a skin is for.
Every other file in the core may not, and the layer guard enforces both halves. The core
names the **roles** a view needs — `line, symbol, fill, label, ground, gap` — and the
consumer says what each looks like. `schem.draw` throws by name if a role is missing
rather than falling back, because a silent fallback is how a display ends up black on
black. `ground` may be `null` for "paint none", but it has to be said.

That is what lets one plan render as 1990s pixel art and as a modern view. A default in
the model would quietly become the model.

`skins/modern.js` is the second skin: the EMERSON palette used with the Style Guide's own
semantic roles (§3.2 — blue is the measured quantity, grey is secondary), on a light
ground the way modern high-performance HMI does it. See
`50 - Lunar Process Engineer/skins-preview.html` for both at once, driven by one solve.

## Known debt

- `phys-view` still lives in LPE's `engine.js` rather than here. As of Phase 5a it takes
  a skin (`NET.draw(g, skin)`) instead of reaching for the game palette, so it is
  re-skinnable where it stands; moving it into the core has no consumer yet.
