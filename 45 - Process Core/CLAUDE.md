# Process Core — read this first

You are in the **Process Core**: the shared model of a process system. It is used by
Lunar Process Engineer and will be used by LoopBench. **It is not part of the game.**

Full orientation: `README.md` here, and
`00 - Project/Process Core — Architecture & Build Plan.md` for why any of it is shaped
this way.

## The two rules

**1. Never import from a consumer.** No `LPE.palette`, no `LPE.art`, no level, no game
engine. The core is the platform; consumers adapt to it. The bar is literal: this
directory must pass `node test.js` with every consumer deleted from disk.

**2. Never hand-edit a vendored copy** (`<consumer>/vendor/process-core/`). Edit `src/`
here, run the tests, re-vendor. Consumers verify their lock on every build.

## Before you change anything

```
node test.js                                      everything, guard first
node vendor.js "../50 - Lunar Process Engineer"   after a change to src/
```

A change to `src/` is not finished until it has been re-vendored. LPE's build will fail
until you do, which is intended.

## The layer you are editing matters

Every `.js` here opens with an `@layer` header naming its layer and what it may never do.
`test/layers.test.js` checks the **code** against that claim, not the comment.

```
chrome > scenario > flow-field > dynamics > schem-view | phys-view
  > netlist > assembly
  > geometry | sizing | instrument | trim > catalogue > registration
```

The **assembly** layer answers *does this bolt together* — travel, stem diameter,
yoke boss and thrust, checked against the published numbers. It exists because that
question was got wrong here, with both tables already read: a 657 size 30 was proposed
to drive an EWT NPS 10x8, which fails on all three mounting numbers at once. A model
that cannot refuse that is not modelling a control valve.

It is also where a **4-20 mA command becomes a travel** -- `travelFrom` -- because
which way a current moves a stem depends on the actuator and how it is piped. It
refuses to guess the action (on an air-to-close valve 20 mA is SHUT) and refuses to
decide where a lost command goes. Travel itself is still an input to this core,
always; what this adds is the decoding, so a bench slider, a LoopBench and a TREX are
the same four to twenty milliamps and the model never learns which it is on.

**Depth is one axis, not a pair of sibling views** -- `skins/depth.js`:
`loop > line > assembly > section > detail`. Pro Cutaway is NOT a rung; it is a way of
drawing one, the fluid turned on, available from the assembly inward. `lab/fic101` is
the whole ladder on one screen.

The dynamics layer answers *how much flows where*; anything about how that LOOKS is
above it. The netlist says *what is connected to what*. The **catalogue** sits below it
and answers *what a part actually is* — NPS 1/2 pipe is 0.622 in bore because
`ASME B36.10M` says so. It is the bottom of the stack, it depends on nothing, and its
data lives in `catalogue/*.json` rather than in JS because LoopBench is Python and must
read the same rows.

The **geometry** layer sits above it and answers *what a part looks like, at its
real size* -- polygons in INCHES, from catalogue dimensions, with no scale, no
frame and no colour. It is the layer that was missing: `phys-view` draws LPE's
schematic, whose bore is exaggerated against its length by about an order of
magnitude, so a real dimension had nowhere to land. A sourced length pushed
through a bore-to-radius factor is not a measurement.

```
node reference.js      ->  reference/index.html, every part drawn to scale
```

The **sizing** layer sits beside geometry: geometry is the shape of one part,
sizing is the flow physics of one part. `ISA-75.01.01` liquid sizing with the
piping geometry factor, pressure recovery and the choked-drop check, graded
against the Control Valve Handbook's printed worked example. The **dynamics**
layer does NOT have any of that -- it is `q = Cv*sqrt(dP/SG)`, honest at the
2 gpm it was written for and not at refinery scale.

The **instrument** layer answers *what a device reports*, which is not a number:
a reading carries a status, and `unavailable` -- the chain that would produce it
is not physically there -- is a first-class case, not a null. Grounded in
`ANSI/ISA-51.1` for range/span/accuracy and NAMUR NE43 for the 4-20 mA failure
bands.

The **trim** layer answers *what a valve does as it strokes*. Travel is not
position: a real Fisher cage curve, read from Catalog 12, plus the INSTALLED
characteristic, which is what the inherent one becomes once the rest of the
line takes its share of the drop.

**The layers compose, opt-in.** `dynamics` will use a valve's real trim
characteristic and a fitting's sourced resistance -- but only for a component
that DECLARES them (`trim` with a curve, `resistance` with a basis). Declare
nothing and the arithmetic is bit-for-bit what it was, which is why LPE's
81-state comparison is untouched. Declaring them and not loading the layer is
an error BY NAME, never a silent fall back to the simpler model.

The size of the thing: an ED equal-percentage cage passes 23% of its flow at
half travel, not 50%. The linear assumption is wrong by more than a factor of
two, in the middle of the stroke, where a loop spends its time.

Open that after changing a shape rule. The numbers can all be right and the
shape still be wrong, and no test here would say so.

**Every dimension in the catalogue carries the value as printed in its standard beside
the canonical one, and `load()` re-derives one from the other and refuses the catalogue
if they disagree.** That is "never invent" made mechanical: you cannot add a number
without saying what the document said, and a slip in the arithmetic is rejected too. How it looks — which symbol, what is
hidden, where a line breaks, what colour anything is — is decided **above** it. That
boundary has already been crossed once by accident: a line-gap caused by an undrawn
reducer was fixed in the netlist, and the netlist's own test rejected it, because hiding
a fitting is a render concern and a hidden reducer still changes the bore. The fix
belonged one layer up.

If a check here rejects your change, read the failure text before working around it. Each
one states **why** the rule exists. It is more likely right than you are.

> "Layer" means something else elsewhere in this vault — Workbench Layers 1–4, where
> **Layer 3 is "Cartridge."** Different stack. Do not call a Process Core consumer a
> cartridge. See the vault root `CLAUDE.md`.
