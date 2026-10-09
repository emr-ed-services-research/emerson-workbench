# The schematic layer

A level declares its pipework **once**, as components with named ports and
segments between those ports. The drawing, the water, the bend radii and the
tee positions are all derived from that one declaration.

Status: **built and proven, not yet adopted.** `topology.js` reproduces level
1's geometry exactly, and the build enforces that it keeps doing so. No level
uses it yet; converting one is a separate, reviewable step.

---

## The problem it removes

Level 1 declares the same bay **three times**, in three incompatible forms:

| | Form | Carries |
| --- | --- | --- |
| 1 | `LPE.Line` water segments | `ax/ay/bx/by`, arc centres hand-derived as `cx:E1.x-BEND, cy:E1.y+BEND`, sweep angles written out |
| 2 | `LPE.piping()` drawing | `lines[].pts`, `tees[]`, `reducers[]` in absolute pixels |
| 3 | `BR_SEGS` branch water | its own hand-derived tee-turn arcs, its own `TEE_R` |

Move the riser and three places must be edited into agreement, each with its
own hand-computed radii and arc centres. **Nothing checks that they still
agree.** The sharpest case: a tee declared at `{x:TRUNK_X, y:BR_Y[0]}` has to
independently coincide with a vertex in some run's `pts` array. Two numbers
that must match, with no mechanism making them.

The level files carry the scars in their own comments:

> *"drawing it as one stopped the butt-capped riser leaving bed 3 hanging off
> its end"* · *"the water narrows only where the fitting narrows it instead of
> the whole branch being drawn thin"* · *"Water turns into a branch, it does
> not appear already running sideways"*

Every one of those was a disagreement between representations that a single
source of truth cannot have.

## Where the model comes from

Not invented here. The structure is **DEXPI** — *Data Exchange in the Process
Industry*, the open specification for describing a P&ID as data (dexpi.org,
spec 1.4; vocabulary from ISO 15926). Its core is exactly this: a
`PipingNetworkSegment` records `SourceItem`/`SourceNode` →
`TargetItem`/`TargetNode`, so components connect through **named ports** and
never through coordinates.

That is the whole fix. A tee is not an `{x,y}` that must happen to agree with
a vertex somewhere else; it is a component with three ports, and a segment
attaches *to a port*. There are no two numbers left that can disagree.

**Borrowed:** the topology model and its vocabulary.
**Not borrowed:** Proteus XML, the ISO 15926 taxonomy, units machinery. This
is a canvas game, not a plant data exchange.

## What a declaration looks like

```js
LPE.net({
  bores: { main: 0.622, branch: 0.493 },        // INCHES, not pixels
  components: {
    reservoir: { kind:'vessel', tag:'TK-1', role:'source' },
    union1:    { kind:'union' },
    tee0:      { kind:'tee', axis:'v' },
    red:       { kind:'reducer', throat:0.108 },
    pod0:      { kind:'vessel', tag:'TK-2', role:'sink' },
  },
  segments: [
    { from:'reservoir.out', to:'union1.in', bore:'main' },
    { from:'union1.out',    to:'tee0.in',   bore:'main' },
  ],
  frames: {
    rig: {
      pxPerInch: PX_PER_IN, round: 1,
      at: {
        reservoir:[30, MAIN_Y],
        union1:   [wheelMainX-54, MAIN_Y],
        tee0:     [TRUNK_X, BR_Y[0]],
        red:      [[RED_X0, BR_Y[2]], [RED_X1, BR_Y[2]]],
        pod0:     [POD_X, BR_Y[0]],
      },
      via: { 'union1.out->tee0.in': [[TRUNK_X, MAIN_Y]] },
    },
  },
```

## Frames: where it sits is not what it is  *(Phase 2)*

**A component declares no coordinate.** It says what it is, what it is called,
and how big its bore is in inches. Where it sits comes from a named **frame**,
and `LPE.net(spec, {frame})` resolves one in. Declaring `at` or `x1` on a
component, or `via` on a segment, is a validation error that names the frame
slot to move it to.

This is the direct answer to *"all need alignment capabilities with each
other."* Before it, level 1's schematic lined up with its cutaway because they
were literally the same numbers — a coincidence, not a mechanism. Transposing a
different physical rig over the same netlist is now exactly one thing: another
frame.

| Frame key | Means |
|---|---|
| `pxPerInch` | how big an inch is in this frame's units |
| `round` | decimal places to quantise a scaled bore to (optional) |
| `at` | `{componentId: [x,y]}` — or `[[x0,y],[x1,y]]` for a reducer, the one component that spans a distance |
| `via` | `{segmentId: [[x,y],…]}` waypoints, keyed `"from.port->to.port"` — an array index would shift the moment a segment was inserted above it |

`net.inFrame('other')` returns the same graph placed somewhere else, and
`net.frame` reports which one is active.

**Bores are inches because a half-inch line is half an inch however you draw
it.** The frame scales them. That also means the dynamics layer gets real bores
for free rather than pixel radii it would have to un-scale.

## Tags: identity that survives the frame  *(Phase 2)*

Every **equipment** component carries a tag — `net.byTag('HV-1')`. A map key
(`v0`) is this netlist's private handle; a tag is the durable identity a
scenario, a consumer or another engineer will name it by.

**Fittings are not tagged.** A tee or a union is part of the line and carries no
tag on a real P&ID, so requiring one would be inventing a convention.

The core validates the *shape* — letters, dash, number — and never mints a tag.
Which letters a given valve deserves is a question about the real plant. The
convention is grounded in the vault's own Source Library rather than chosen
here: the Pulp & Paper Sourcebook's P&IDs (drawings C0748 and E0894) tag
handvalves `HV-1`…`HV-20` and reserve `FV-`/`PV-`/`TV-`/`LV-` for control valves
in a loop. Level 1's four hand wheels are therefore `HV-`, not `FV-` — calling
them `FV-` would claim an instrument that is not there.


Then `net.toPiping()` for the drawing and `net.toWater()` for the flow.

## Component kinds and their ports

| Kind | Ports | Draws |
| --- | --- | --- |
| `source` | `out` | — |
| `sink` | `in` | — |
| `union` | `in`, `out` | a fitting |
| `tee` | `in`, `out`, `branch` | a tee body |
| `reducer` | `in`, `out` | taper / throat / taper |
| `elbow` | `in`, `out` | — (usually implicit in a `via`) |

A tee's `axis` says which way the run goes: `'v'` for a riser (branch leaves
+x), `'h'` for a header (branch leaves +y).

### Equipment

The four kinds the levels actually contain, each mapping onto an ISA-5.5
symbol group:

| Kind | Ports | ISA-5.5 group |
| --- | --- | --- |
| `valve` | `in`, `out` (+ `branch` when `valveType:'three-way'`) | 3.3.13 Valves and Actuators |
| `vessel` | by `role`: `source` → `out`, `sink` → `in`, `inline` → both | 3.3.2 Containers and Vessels |
| `pump` | `in`, `out` | 3.3.10 Rotating Equipment |
| `mixer` | `in`, `out` | 3.3.8 Mixing (Inline Mixer) |

**A valve carries the solver's own name.** `key:'main'` means the netlist and
the solver refer to one valve by one name, instead of the netlist not knowing
valves exist. Two components claiming one key is an error — they would both
move when the player turned one of them, and nothing else would notice.

Valves, pumps and mixers are **inline**: a run passes through them the way it
passes through a union, so the polyline still merges.

**The bar equipment had to clear: adding it must not move the pipe.** The build
asserts that declaring level 1's four valves, reservoir and three pods leaves
`lines`, `tees` and `reducers` byte-identical. Equipment is a symbol, not a
pipe.

### ISA-5.5 mnemonics

Every ISA-5.5 symbol carries a four-character mnemonic *"to be used as its
reference name in a computer system"*. Each equipment component reports one, so
schem vis can key its symbol table on **the standard's identifiers rather than
ours**.

Read off the standard's own symbol pages — which are images, so `pdftotext`
does not see them and they have to be rendered:

| Component | Mnemonic | Group |
| --- | --- | --- |
| `valve` globe / gate / ball / needle | `VLVE` | 3.3.13 |
| `valve` three-way | `VLV3` | 3.3.13 |
| `valve` butterfly | `BVLV` | 3.3.13 |
| `valve` check | `CVLV` | 3.3.13 |
| `valve` relief | `RVLV` | 3.3.13 |
| `vessel` | `VSSL` | 3.3.2 |
| `pump` | `PUMP` | 3.3.10 |
| `mixer` | `IMIX` | 3.3.8 |

Three things the standard settles that are easy to get wrong:

**One symbol covers four valve types.** VLVE *"represents GLOBE, GATE, BALL,
and NEEDLE valves used to regulate fluid flow through piping systems"*. Only
butterfly, check, relief and 3-way are distinct.

**The valve symbol carries state in its fill** — outline for closed, solid for
open. That is a display convention a game can use directly, and it comes from
the standard rather than from taste.

**An inline mixer is not an agitator.** `IMIX` is *"a mixing device used to
continuously blend materials"*; `AGIT` is a blade/propeller/paddle agitator
that stirs a vessel rather than sitting in a line. Level 3's static mixer is
IMIX.

Actuators are separate symbols from the valves they drive — `ACTR` (two-state,
with optional M/S/H/A for motor, solenoid, hydraulic, air), `TACT` (throttling,
diaphragm) and `MATR` (manual). Not modelled yet; a valve currently carries no
actuator.

## The two radius rules, stated once

```js
bendRadius(r)    = 3 * r      // piping()'s long-radius elbow: centreline
                              // R = 1.5 x bore diameter, as a real one is made
teeTurnRadius(r) = 1.6 * r    // a tee turn IS tight -- nothing like an elbow
```

Both were already in the code; they were just written out at each use site.

## What the router handles that hand-writing did not

**Merging runs for the drawing.** `piping()` fillets every corner in a `pts`
array, so chains that pass straight *through* a component are merged into one
polyline — which is why level 1's riser could be drawn as a single run through
both tees. Written by hand that was a coincidence maintained by care; here it
falls out of the graph.

**Dropping collinear points.** A chain through a union or tee leaves a vertex
sitting on a straight leg. `piping()` would fillet it — wasted work at best, a
rounding artefact on a dead-straight line at worst.

**Splitting water at every tee.** Level 1's own rule: *"flow is constant
BETWEEN tees and changes AT them, and each piece owns its particles so none can
strand at a velocity boundary."* That is a topological fact. A netlist knows it;
a coordinate list cannot.

## What the build now enforces

`topology.test.js` runs on every build (36 checks). The acceptance bar is that
the router reproduces level 1's hand-written geometry **exactly** — matching the
known-good drawing is what makes the layer safe to adopt.

It also proves the validation catches the bug class: a misspelled port, a port
connected twice, a diagonal leg, an unwired component, an unknown bore class, a
dangling reference. Error messages name the valid ports when a port name is
wrong.

## Display classes, and hiding fittings

Every component carries a display class:

| Class | Kinds | On a process display |
| --- | --- | --- |
| `boundary` | source, sink | where the diagram stops |
| `fitting` | tee, reducer, union, elbow | **usually not drawn** |
| `equipment` | valve, vessel, pump, mixer | ISA-5.5's 13 groups |

ISA-5.5's first symbol group, Connectors, is **deliberately empty**: *"the
various possible connectors have been excluded. In the majority of cases, pipe
connections are not required to be detailed."* On a process display a tee is
not a symbol — it is where two lines meet.

LPE sometimes needs the opposite. Level 1's reducer *is* the point of the
level: it is worth about a third of the flow and the learner has to see it. So
fittings are classified rather than dropped, and the renderer decides:

```js
net.toPiping()                      // everything
net.toPiping({ hide: ['fitting'] }) // ISA-5.5-style: equipment only
```

A single component can opt out on its own with `show: false`.

**The rule that keeps this honest: hiding is a render concern, never a
topology one.** A hidden reducer still exists — the line still runs through it,
the bore still changes, the solver still sees it. The build asserts that
`lines` and the water come out byte-identical with fittings hidden; only the
symbols differ.

## Schem vis — tier 2

`schemvis.js`, built 2026-10-08, reads the netlist and draws it as a process
display. `schemvis-preview.html` renders level 1's bay in two valve states for
eyeballing (serve the folder over HTTP; `file://` will not load the scripts).

**Structure: `plan()` decides, `draw()` paints.** Everything that could be
wrong — which symbol, what state, where a line breaks — is decided in `plan()`,
which returns plain data and is checked in the build without a canvas.
`draw()` walks the plan and strokes it, and does no thinking.

```js
const p = LPE.schem.plan(net, { state: valves, scale: 13 });
LPE.schem.draw(ctx, p, { ground: '#15181b' });
```

`state` is the solver's own valve object, keyed by each valve's `key`. That is
the whole integration: the schematic shows what the solver thinks, with no
second copy of anything.

**The valve's fill is its state** — outline closed, solid open. That is
ISA-5.5's own convention, not a choice made here, which is why a player
opening a valve fills the bowtie.

**Crossings break the vertical line.** ISA-5.5 3.3.1 is the one thing the
otherwise-empty Connectors section specifies: *"use line breaks to indicate
that the lines do not join... a usual convention is to break the vertical
line."* `plan()` finds genuine crossings — strictly interior intersections, so
a tee or a shared corner is a joint and is left alone — and emits a break.

### Not done yet

- **Colour.** ISA-5.5 addresses colour usage, blink and orientation as symbol
  attributes. Schem vis is monochrome; those are unread and unimplemented.
- **Actuators.** `ACTR`, `TACT` and `MATR` are separate symbols from the valves
  they drive. The levels have hand-wheels, so `MATR` is probably wanted.
- **Proportions.** Vessels and the mixer read small against the valves at
  scale 13. Tune per symbol rather than globally.
- **Tags.** Labels are currently the solver key or component id. ISA-5.1-style
  tag bubbles are a different standard and a separate decision.

## What this is not

The netlist carries **no symbol geometry**. Symbols live in schem vis, keyed by
ISA-5.5 mnemonic, implemented from the standard's described shapes. The
standard itself is copyrighted: no page, figure or drawing from it is
reproduced in this repository.

**Schem vis is no longer blocked.** Emerson's Information Center does not hold
ISA-5.1, but it holds **ISA-5.5-1985, *Graphic Symbols for Process Displays***,
downloadable, 48 pages — and that is the right standard, not a substitute. Its
own preface:

> *"ISA-S5.1 and ISA-S5.3 are drafting standards which govern the depiction of
> process and instrumentation symbols for **drawings and other printed
> documents**. The ISA-S5.5 symbols were developed for use on **video devices**
> that represent both character display and **pixel addressable displays**."*

A game screen is a pixel-addressable video display presenting a process to an
operator. ISA-5.1 governs printed drawings this project does not produce.

Two things to carry into schem vis when it is built:

- **Symbol mnemonics.** Every ISA-5.5 symbol has *"a four-character name given
  to the symbol to be used as its reference name in a computer system."* That
  is the key the symbol table should use — an enumerable scheme from the
  standard rather than one invented here.
- **Copyright.** The standard states no part may be reproduced or transmitted.
  Emerson licenses it, so implementing symbols from it is ordinary use, but the
  PDF must **not** be vendored into the vault and its drawings must not be
  copied. Symbols get written in our own code, keyed by mnemonic, clause cited.

Topology first, symbols next. The two are independent.

## Next

1. **Convert level 1** and diff the rendered canvas against the current build.
   The test proves the numbers match; a pixel diff proves the drawing does.
2. Then levels 2–4, each diffed the same way.
3. Retire the hand-written `pts`/`tees` arrays once no level reads them.
4. ~~Extend the netlist to carry equipment~~ — **done**: valve, vessel, pump,
   mixer, with valves carrying the solver's key.
5. ~~Read the ISA-5.5 mnemonics~~ — **done**, see the table above.
6. ~~Schem vis~~ — **built**. See above for what is still open: colour,
   actuators, symbol proportions, tags.
7. **Put a view toggle in a level.** Both views render the same netlist, so a
   level can switch between the process display and the physical rig and they
   cannot disagree. That is the payoff the whole stack exists for, and nothing
   demonstrates it until a level does it.
