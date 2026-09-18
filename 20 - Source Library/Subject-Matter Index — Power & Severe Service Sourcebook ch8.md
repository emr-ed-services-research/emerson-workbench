---
title: Subject-Matter Index — Power & Severe Service Sourcebook ch8
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch8 — Power Plant Primer
updated: 2026-09-15
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 8

**Chapter 8 — "Power Plant Primer."** Standing library-cataloging pass, part
of resuming the whole-document indexing of the Power & Severe Service
Sourcebook (the earlier pass completed chapters 1–7, 9C, 9D, 12–14; this pass
fills the confirmed gaps: 8, 9A, 9B, 10, 11), per `Subject-Matter Index — Process &
Standards.md`'s "standing full-chapter" trigger. Every real page in the
chapter's confirmed range was rendered at 150dpi and read directly.

Chapter boundaries were confirmed directly by rendering, not assumed from a
candidate range: PDF page 85 is the "Chapter 8 / Power Plant Primer" divider,
and real content runs through PDF page 104 (printed p. 8-20, "...it should be
obvious that it is, basically, still only a primer"), with PDF page 105
immediately being the "Chapter 9A / Conventional Power" divider — zero page
offset against the chapter's own printed numbering (8-1 through 8-20), and no
trailing blank page.

**This chapter is written as a plain-language conceptual primer for readers
with no power-plant background**, told through one continuously-elaborated
narrative built around a hand-drawn boiler/turbine/generator sketch that
starts as a literal tea kettle and is progressively redrawn, one real system
at a time (stoker firing → air preheat → water-tube boiler → feedwater
control → economizer → multistage turbine → condenser/vacuum concept →
regenerative feedwater heating → draft system → superheat/reheat →
generator excitation), culminating in one fully-labeled "Complete Plant"
diagram (Figure E0191, p. 8-17). **Every diagram in this chapter is
unnumbered** — the whole chapter contains zero "Figure 8-N" captions; each
sketch instead carries only a small printed drawing-number stamp
(E0170–E0192) with no descriptive caption of its own, the body prose itself
being the caption. This matches the "unnumbered-but-real diagrams" edge case
(Control Valve Handbook ch5 p.100 precedent) at unusually large scale: roughly
20 real drawing-numbered sketches across 20 pages, several of which are
near-identical incremental redraws of their immediate predecessor rather than
freestanding distinct figures.

**Bundling judgment call, stated explicitly (extending the existing
navPath-only bundling principle to this figure-kind case):** cataloguing
every redraw as its own record would produce a long run of near-duplicate,
low-marginal-teaching-value entries (e.g., "add a candle to heat the air,"
immediately superseded two paragraphs later by "use waste heat instead of a
candle" using the same base sketch redrawn once more). Applying the same
"judge each case against the source's own structure" test the Process &
Standards doc already uses for navPath bundling: this chapter's own
structure is one continuous demonstration narrative, not a series of
separately-headed distinct figures — so two purely comparative panels that
share one teaching point (e.g., cold-air vs. preheated-air firing, shown as
two side-by-side redraws of the same base sketch) are catalogued as ONE
record citing both drawing numbers, while every sketch that introduces a
genuinely new system or component not shown in its predecessor is catalogued
as its own record. Twenty-one records resulted from twenty-three real
drawing numbers found (two pairs bundled) — see Open Items for the full
accounting.

All content is from `20 - Source Library/Industry Specific Sourcebooks/
Control Valve Sourcebook - Power & Severe Service.pdf`. No extracted-figures
crop folder exists for this book — each record's `source` carries a single
synthetic locator (`"Unnumbered diagram, p. N — <description>"`, drawing
number where legible), not a "Figure N-M" citation. Every record's `used-by`
is `[]`.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition
(D101449X012), is itself a **current** first-party Fisher/Emerson document,
so every record below is `status: current`. Two diagrams (E0170's
half-page companion text, none of the sketches themselves) carry a
third-party magazine attribution — see the first record's own `notes`. No
archive or legacy material was otherwise consulted.

## Components

### Chapter 8 — The Basic Concept (printed pp. 8-1 – 8-4)

```yaml
id: pss-cmp-primer-basic-kettle-turbine-generator
kind: figure
teaches: >
  The absolute-simplest mental model of a steam power plant, drawn as a tea
  kettle (boiler) whose steam jet spins a toy-fan "turbine" that in turn
  spins a bar-magnet-in-a-coil "generator" — the single foundational sketch
  every later, more-complete diagram in this chapter is a progressive
  elaboration of.
concept-tags: [power plant primer, boiler, turbine, generator, basic thermal cycle, conceptual overview]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-1 — tea-kettle boiler/fan-turbine/magnet-generator sketch, drawing E0170"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The source's own text credits this sketch's companion explanation as
  "Reprinted with permission from POWER ENGINEERING Magazine, PennWell
  Corporation" — a licensed third-party reprint within this current Fisher
  document, not archive material. Opens the whole-chapter cumulative
  narrative described in this file's intro; every later record in this
  chapter is a progressive redraw or extension of this base sketch.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-stoker-fired-boiler
kind: figure
teaches: >
  Mechanical solid-fuel firing added to the base sketch: a coal conveyor
  feeds a hopper onto a traveling-grate stoker under the kettle, with a
  bellows supplying combustion air — the first real "how coal actually gets
  burned" system added to the primer's growing diagram.
concept-tags: [power plant primer, stoker firing, traveling grate, coal conveyor, combustion air, boiler firing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-2 — coal conveyor/hopper/traveling-grate stoker/bellows sketch, drawing E0171"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Direct extension of `pss-cmp-primer-basic-kettle-turbine-generator`.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-air-preheat-comparison
kind: figure
teaches: >
  Why combustion-air preheating improves efficiency, shown as a genuine
  before/after comparison pair: the left panel adds a stack, a candle-heated
  air heater, and an ash conveyor to the stoker-fired sketch (and the
  surrounding text immediately points out the candle is a facetious,
  uneconomical stand-in); the right panel redraws the identical system using
  warm air recovered from the stack gases themselves instead of the candle —
  the pair's whole teaching point is the contrast between the two panels, not
  either panel alone.
concept-tags: [power plant primer, air preheat, air heater, stack, ash conveyor, combustion efficiency]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram pair, p. 8-3 — cold-air-heater sketch (drawing E0172) and preheated-air sketch (drawing E0173)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  BUNDLED RECORD (deliberate, see this file's intro): two drawing numbers,
  one teaching point (a facetious candle-heater vs. a real waste-heat-
  recovery air heater), presented by the source as a single continuous
  comparison, not two independent figures.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-water-tube-boiler-steam-drum
kind: figure
teaches: >
  Real water-tube boiler construction, replacing the tea-kettle stand-in: a
  steam drum connected by steel tubes arranged in a brick furnace so hot
  combustion gases pass across the tube bank, with a water gage to monitor
  drum level and a boiler feed pump supplying makeup water — the first
  sketch in the chapter that resembles an actual industrial boiler rather
  than a kettle.
concept-tags: [power plant primer, water tube boiler, steam drum, water gage, boiler feed pump, brick furnace]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-4 — steam drum/water-tube boiler cutaway with stoker and boiler feed pump, drawing E0174"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Retires the tea-kettle stand-in used in every prior sketch in this chapter.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-early-power-plant-context
kind: topic
teaches: >
  Why efficiency is the whole chapter's motivation, stated with real
  historical numbers: the tea-kettle sketch's efficiency is "close to
  zero," and the source frames the entire rest of the chapter as the
  story of engineers improving on it. Until the early 1920s, U.S. electric
  plants used over three pounds of coal per kilowatt-hour; by the time of
  writing, the national average was under one pound — a real threefold
  efficiency gain. In 1985, U.S. coal-fired plants alone burned 693
  million tons of coal to produce 1,401 billion kWh (64% of steam-
  generated electricity that year, vs. 5% oil, 13% gas, 18% nuclear); had
  1985 output been generated at 1920s efficiency, over two billion tons of
  coal would have been needed instead.
concept-tags: [power plant primer, efficiency history, fuel mix, coal consumption]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Body prose, pp. 8-1 – 8-2 (PDF pp. 85-86) — not anchored to any single diagram"
relatedFigures: [pss-cmp-primer-basic-kettle-turbine-generator]
relatedTopics: []
used-by: []
notes: >
  Read directly via pdftotext, PDF pp. 85-86. This is the chapter's own
  stated reason for existing — every later system added to the sketch is
  presented as one more efficiency improvement — but the specific
  historical statistics aren't captured in any figure's own `teaches`
  field.
```

```yaml
id: pss-topic-coal-combustion-chemistry
kind: topic
teaches: >
  Why complete combustion matters, at the chemistry level the stoker-
  firing figure doesn't state: burning carbon with insufficient oxygen
  produces CO (partially burned, energy still recoverable) rather than
  CO2 (fully burned); the goal is always maximizing CO2 yield. Achieving
  this requires supplying more air than the exact stoichiometric
  requirement (about 11 lb of dry air per lb of dry coal, more in
  practice given variable coal composition and moisture) — but "excess
  air" beyond that point actively hurts efficiency by absorbing heat that
  should have gone to the boiler water.
concept-tags: [combustion chemistry, excess air, CO CO2 formation, coal firing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Body prose, p. 8-2 (PDF p. 86) — not anchored to any single diagram"
relatedFigures: [pss-cmp-primer-stoker-fired-boiler]
relatedTopics: []
used-by: []
notes: Read directly via pdftotext, PDF p. 86.
```

### Chapter 8 — Feedwater Control and Heat Recovery (printed pp. 8-4 – 8-6)

```yaml
id: pss-cmp-primer-feedwater-control-valve-operator
kind: figure
teaches: >
  Manual feedwater level control as a real human task: an operator standing
  at a brick furnace wall, sighting the boiler's water-gage glass and
  reaching for the feedwater control valve to adjust it by hand — the
  chapter's motivating illustration for why automatic feedwater regulators
  were later developed (the surrounding text notes a large modern boiler
  would run dry in about 90 seconds if the water supply were suddenly cut
  off, making constant manual vigilance impractical).
concept-tags: [power plant primer, feedwater control valve, manual operation, water gage, feedwater regulator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-4 — operator adjusting feedwater control valve at a boiler wall, drawing E0176"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The one figure in this chapter's early sequence that names an actual
  control-valve function ("feedwater control valve") rather than only
  generic boiler/turbine/generator plumbing — directly grounds Chapter 9A's
  later "Boiler Feedwater Regulator Valve" application entry.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-feedwater-heater-economizer
kind: figure
teaches: >
  Two waste-heat-recovery additions shown as a continuous two-panel
  progression: the left panel adds an open feedwater heater fed by exhaust
  steam from the boiler feed pump (and other steam-driven auxiliaries); the
  right panel adds a second heat-recovery bank — the economizer — placed in
  the flue-gas path ahead of the air heater and stack, further raising
  feedwater temperature before it enters the boiler drum.
concept-tags: [power plant primer, feedwater heater, economizer, waste heat recovery, open heater, flue gas]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram pair, p. 8-5 — feedwater heater sketch and economizer sketch, both stamped drawing E0177"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  BUNDLED RECORD (see intro): both panels share one printed drawing-number
  stamp, "E0177" — LOW-CONFIDENCE FLAG: this could be a genuine shared
  drawing-family number for a two-panel figure, or a printing/typesetting
  duplication of the stamp across two distinct panels; not resolvable from
  the rendered page alone, noted honestly rather than guessed. Either way,
  the two panels are visually and conceptually distinct (different added
  component) and are bundled here on editorial-judgment grounds (continuous
  narrative), not because they're the same image.
mediaStatus: unreviewed
```

### Chapter 8 — Turbine and Condenser Fundamentals (printed pp. 8-6 – 8-9)

```yaml
id: pss-cmp-primer-multistage-turbine-fan-concept
kind: figure
teaches: >
  Why real turbines use multiple stages: three toy fans mounted on a common
  shaft, each in its own compartment, with high-pressure steam entering the
  first-stage nozzle and exhausting after giving up energy across all three
  stages — explains that a single-stage fan (the chapter's original toy-fan
  stand-in) is far less efficient than staging the pressure drop.
concept-tags: [power plant primer, turbine staging, multistage turbine, nozzle, rotor, steam expansion]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-6 — 3-stage fan-on-shaft turbine concept sketch, drawing E0178"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Retires the single toy-fan stand-in used in every prior sketch in this chapter.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-turbine-nozzle-bucket-cutaway
kind: figure
teaches: >
  Real turbine nozzle/blade construction, replacing the toy-fan stand-in
  entirely: a detailed isometric of nozzles directing steam onto curved
  buckets mounted on a wheel, with a stationary diaphragm and shroud band
  labelled — the chapter's first genuinely technical turbine-hardware
  nomenclature figure.
concept-tags: [turbine nozzle, turbine buckets, turbine wheel, diaphragm, shroud band, direction of rotation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-6 — labelled nozzle/bucket/wheel/diaphragm/shroud-band isometric, drawing E0179"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway (NOZZLE, SHROUD BAND, BUCKETS, WHEEL, DIAPHRAGM,
  DIRECTION OF ROTATION) — Style Guide §6.3 applies if ever placed on a
  slide. Pairs with `pss-cmp-primer-multistage-turbine-fan-concept` on the
  same source page as the "concept vs. real hardware" pair.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-turbine-generator-heating-diagram
kind: figure
teaches: >
  The full steam path from boiler through turbine to the electric generator
  (coil/magnet cutaway), with the exhaust steam then routed onward to a
  building-heating system of radiators — establishes both how the generator
  itself is driven and the "use exhaust steam for building heat" option
  (the surrounding text motivates industrial/utility cogeneration-style use
  of turbine exhaust before the chapter moves on to the alternative: a
  condenser).
concept-tags: [power plant primer, turbine, electric generator, exhaust steam, building heating, radiators, cogeneration]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, pp. 8-6 – 8-7 — boiler/turbine/generator with exhaust-to-radiators extension, drawing E0180"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The same drawing-number stamp (E0180) appears on both the p.8-6 turbine/
  generator cutaway and the p.8-7 radiator-heating extension of it —
  catalogued as one record (one continuous drawing spanning the page break,
  not two independent figures), consistent with this chapter's bundling
  approach.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-vacuum-cube-demonstration
kind: figure
teaches: >
  Why condensing steam creates a vacuum, taught with a worked numeric
  example: a sealed cube containing exactly one pound of steam at
  atmospheric pressure (26 cubic feet) collapses, on condensation, to one
  pound of water occupying only 1/60th of a cubic foot — 99.93% of the
  cube's volume becomes empty, i.e. a vacuum — with the resulting 15 psi
  atmospheric crushing force on the cube's surface calculated explicitly
  (7776 sq. in. × 15 psi ≈ 116,640 lb).
concept-tags: [power plant primer, vacuum formation, steam condensation, atmospheric pressure, condenser theory]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-8 — steam/water volume-collapse cube sketch, drawing E0181"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: A conceptual/quantitative illustration, not a hardware cutaway.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-gallon-can-implosion-demo
kind: figure
teaches: >
  A vivid, hands-on validation of the vacuum-cube concept: a home-experiment
  sketch showing a gallon can with a half-inch of boiling water, screw cap
  sealed while boiling, then doused with cold water — the can visibly
  crumples inward under atmospheric pressure once the trapped steam
  condenses, illustrated with a before/after pair (intact can vs. collapsed
  can) and the "15 lb per sq in atmospheric pressure balanced by steam and
  air pressure inside can" callout.
concept-tags: [power plant primer, vacuum demonstration, atmospheric pressure, steam condensation, implosion]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-8 — gallon-can-crushing before/after sketch, drawing E0182"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Companion demonstration to `pss-cmp-primer-vacuum-cube-demonstration` on
  the same source page — the cube is the calculated/theoretical version,
  this is the "try it yourself" physical version.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-condenser-cutaway-concept
kind: figure
teaches: >
  How a real condenser applies the vacuum principle continuously: steam from
  the turbine enters a vessel containing a bank of small tubes carrying cold
  water, condenses on contact with the cold tubes (maintaining a steady
  vacuum rather than a one-shot collapse), and collects as condensate in a
  hotwell at the bottom — the chapter's bridge from the vacuum-cube/can
  demonstrations to an actual piece of power-plant hardware.
concept-tags: [condenser, hotwell, cooling water tubes, vacuum, condensate, steam turbine exhaust]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-8 — turbine-to-condenser cutaway with cold-water tube bank and hotwell, drawing E0183"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled (STEAM, TURBINE, WATER OUT, COLD WATER IN, SMALL TUBES, HOTWELL).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-complete-closed-loop-diagram
kind: figure
teaches: >
  The first fully closed steam/water loop in the chapter's progression:
  boiler (with stoker, air heater, economizer) → turbine → generator →
  condenser → hotwell → condensate pump → feedwater heater → boiler feed
  pump → back to the boiler — everything the chapter has introduced so far,
  assembled into one working cycle, with makeup water and condenser air
  removal both mentioned in the surrounding text as the loop's remaining
  real-world imperfections.
concept-tags: [power plant primer, closed loop steam cycle, condensate pump, feedwater heater, boiler feed pump, makeup water]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-9 — complete closed boiler-turbine-condenser-feedwater loop, drawing E0184"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The chapter's first "everything assembled" milestone diagram — a
  precursor to the final `pss-cmp-primer-complete-plant-diagram` (p. 8-17),
  which is substantially more detailed and labelled.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-vacuum-and-turbine-work
kind: topic
teaches: >
  Why a vacuum at the turbine exhaust increases usable work, distinct
  from the vacuum-cube/gallon-can demonstrations' own physics-of-
  condensation content: steam exiting the turbine must push against
  roughly 15 psi of atmospheric resistance to escape, and doing that push
  costs work exactly the way turning the turbine blades does. Removing
  that resistance (creating a vacuum) means the same steam pressure drop
  through the turbine yields more usable shaft work — equivalent to
  raising the inlet steam pressure without actually doing so. This is the
  reasoning link between "why build a condenser at all" and the
  cube/can demonstrations that follow it.
concept-tags: [condenser rationale, turbine backpressure, vacuum, exhaust work]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Body prose, pp. 8-6 – 8-7 (PDF pp. 90-91) — not anchored to any single diagram"
relatedFigures: [pss-cmp-primer-vacuum-cube-demonstration, pss-cmp-primer-condenser-cutaway-concept]
relatedTopics: []
used-by: []
notes: Read directly via pdftotext, PDF pp. 90-91.
```

### Chapter 8 — Efficiency and Regenerative Feedwater Heating (printed pp. 8-10 – 8-13)

```yaml
id: pss-topic-steam-cycle-thermal-efficiency
kind: topic
teaches: >
  The chapter's real thermodynamics core, given as a usable formula with
  two worked numeric examples: turbine/heat-engine efficiency depends
  only on the absolute-temperature range the working fluid falls through
  (E = (T1 − T2)/T1 × 100), not on which fluid is used. A theoretical
  perfect engine taking 400°F (860°R) steam and exhausting at atmospheric
  212°F (672°R) is 21.8% efficient; adding a condenser to drop the
  exhaust to 5 psia (162°F, 622°R) raises that to 27.5% — the same
  numeric justification for why condensers, high steam pressures, and low
  exhaust temperatures all matter. The source states this ceiling is a
  consequence of the second law of thermodynamics: recovering all the
  fuel's heat would require exhausting at absolute zero, which is
  physically unreachable (ambient temperature is ~490°F above it), and
  refrigerating the exhaust would cost more power than it recovers.
  Real modern superheat/reheat/regenerative-heating cycles reach about
  32% thermal efficiency; the most efficient conventional plants of the
  source's era reach about 40%.
concept-tags: [thermal efficiency, second law of thermodynamics, Carnot-style efficiency formula, condenser rationale, superheat rationale]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Body prose, pp. 8-9 – 8-10 and 8-14 – 8-15 (PDF pp. 93-94, 98-99) — not anchored to any single diagram"
relatedFigures: [pss-cmp-primer-condenser-cutaway-concept, pss-cmp-primer-superheat-reheat-diagram]
relatedTopics: [pss-topic-vacuum-and-turbine-work]
used-by: []
notes: >
  Read directly via pdftotext, PDF pp. 93-94 and 98-99 (the source
  revisits this same formula twice, once introducing it and once
  applying it to the fully-superheated/reheated system). Both worked
  numeric examples (21.8%→27.5%; the 32%/40% real-plant figures)
  transcribed exactly, not paraphrased.
```

```yaml
id: pss-cmp-primer-pulverized-coal-firing
kind: figure
teaches: >
  Pulverized-coal firing as the modern alternative to stoker firing: coal
  passes through a pulverizer (with a magnet removing stray iron) that
  grinds it to a flour-like consistency, then is blown by an air supply
  through a mixing chamber and burner into the furnace as a controllable,
  gas-flame-like flame — explains why pulverized-coal firing allows much
  larger boilers and more flexible control than a fixed coal bed on a
  stoker grate.
concept-tags: [pulverized coal, pulverizer, burner, mixing chamber, boiler firing, combustion control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-10 — pulverizer/burner/mixing-chamber sketch, drawing E0185"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled (PULVERIZER, MAGNET REMOVES STRAY IRON, MIXING CHAMBER, BURNER, FLAME, AIR SUPPLY).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-single-extraction-feedwater-heater
kind: figure
teaches: >
  The core regenerative-feedwater-heating concept: steam is extracted from
  an intermediate turbine stage (rather than only ever reaching the
  condenser) and used to heat the boiler feedwater directly — because no
  heat in this extracted steam is wasted to the condenser cooling water, it
  raises overall cycle efficiency even though it reduces the power the
  turbine develops from that fraction of the steam.
concept-tags: [regenerative feedwater heating, extraction steam, feedwater heater, condenser, thermal efficiency]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-11 — single extraction point feeding one feedwater heater, drawing E0186"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled (MAIN STEAM, EXTRACTION LINE, CONDENSER, F.W. HEATER, HOTWELL, BOILER FEED PUMP, CONDENSATE PUMP).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-two-stage-regenerative-feedwater-heating
kind: figure
teaches: >
  Extending single-stage extraction to two stages: a low-pressure open
  heater (H1) fed from an extraction point near the condenser end of the
  turbine, and a closed heater (H2) fed from an extraction point closer to
  the throttle, raising feedwater temperature in two successive steps
  instead of one — the text explains that heating water in stages this way
  extracts more total useful work from the extraction steam than a single
  heater can.
concept-tags: [regenerative feedwater heating, two-stage extraction, open heater, closed heater, extraction line]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-12 — two-extraction-point, two-heater (H1/H2) system, drawing E0187"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Direct extension of `pss-cmp-primer-single-extraction-feedwater-heater`.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-four-stage-feedwater-heating-diagram
kind: figure
teaches: >
  A fully worked four-stage regenerative feedwater-heating system: three
  open heaters (No. 2, No. 3, No. 4) plus one closed heater (No. 1),
  extraction points spread across the turbine, feedwater pumps between
  successive open heaters (needed since each heater operates at
  successively higher pressure), and a circulating water pump serving the
  condenser — the chapter's most complete "real modern station" feedwater
  system diagram, with the text noting some modern stations use seven or
  eight such stages.
concept-tags: [regenerative feedwater heating, four-stage extraction, open heater, closed heater, feedwater pump, circulating water pump]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-13 — four-heater regenerative feedwater system, drawing E0189"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled (STACK, AIR HEATER, ECONOMIZER, STOKER/HOPPER, ASH PIT, NO.
  1–4 FEEDWATER HEATERS, B.F. PUMP, F.W. PUMPS, TURBINE, ELECTRIC GENERATOR,
  CONDENSER, HOTWELL, CONDENSATE PUMP, CIRCULATING WATER PUMP) — Style Guide
  §6.3 applies if ever placed on a slide. LOW-CONFIDENCE FLAG: no drawing
  number "E0188" was found catalogued to a figure in this chapter even
  though it exists (see `pss-cmp-primer-draft-fan-air-heater-system` below,
  p.8-14) — the numbering E0187 → E0189 skips E0188 here only because E0188
  is used two pages later; not a gap, confirmed by direct reading of the
  intervening page.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-regenerative-heating-economics
kind: topic
teaches: >
  Why extracting steam mid-turbine for feedwater heating beats letting it
  all reach the condenser: in even a modern condensing turbine,
  roughly two-thirds of the steam's heat is still present at the exhaust
  and is carried away, wasted, by the condenser cooling water. Steam
  extracted before the condenser and used to heat feedwater wastes none
  of that heat — it's absorbed directly into the feedwater, reducing
  heat unit-for-heat-unit what the boiler must supply. This is why more
  extraction stages keep improving efficiency (each stage heats the
  water through one more temperature increment with no fuel penalty) —
  but the source is explicit this has a real economic ceiling: modern
  stations commonly use four or five stages, some of the most modern use
  seven or eight, and the total steam that can usefully be extracted is
  capped by how much heat the feedwater actually needs.
concept-tags: [regenerative feedwater heating, extraction steam economics, thermal efficiency, diminishing returns]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Body prose, pp. 8-11 – 8-13 (PDF pp. 95-97) — not anchored to any single diagram"
relatedFigures: [pss-cmp-primer-single-extraction-feedwater-heater, pss-cmp-primer-two-stage-regenerative-feedwater-heating, pss-cmp-primer-four-stage-feedwater-heating-diagram]
relatedTopics: [pss-topic-steam-cycle-thermal-efficiency]
used-by: []
notes: Read directly via pdftotext, PDF pp. 95-97.
```

```yaml
id: pss-topic-pulverized-coal-control-flexibility
kind: topic
teaches: >
  Why pulverized-coal firing displaced stoker firing in most large modern
  plants: a stoker always keeps a bed of coal on the grate holding real
  reserve heat, so even a complete fuel-supply cutoff keeps the boiler
  burning for a while and limits how large a stoker-fired boiler can
  practically be built. Pulverized coal (like oil or gas) has no such
  reservoir — combustion stops essentially instantly when fuel supply
  stops — which is precisely why it gives much more flexible, responsive
  control and supports much larger boilers, at the cost of that built-in
  buffering.
concept-tags: [pulverized coal, stoker firing, combustion control flexibility, boiler sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Body prose, p. 8-10 (PDF p. 94) — not anchored to any single diagram"
relatedFigures: [pss-cmp-primer-pulverized-coal-firing, pss-cmp-primer-stoker-fired-boiler]
relatedTopics: []
used-by: []
notes: Read directly via pdftotext, PDF p. 94.
```

### Chapter 8 — Draft System, Superheat, and Reheat (printed p. 8-14)

```yaml
id: pss-cmp-primer-draft-fan-air-heater-system
kind: figure
teaches: >
  The forced-draft/induced-draft fan system: a forced draft fan pushes cold
  air through an air heater into a plenum chamber beneath the stoker (with
  some warm air also admitted above the fuel bed), while an induced draft
  fan pulls combustion gases out through the stack — explains why plants
  with air heaters (which add flow resistance) typically need an induced
  draft fan in addition to, or instead of, relying on stack draft alone.
concept-tags: [forced draft fan, induced draft fan, air heater, stoker plenum, draft system]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-14 — forced/induced draft fan and air heater cutaway, drawing E0188"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled (COLD AIR, FORCED DRAFT FAN, AIR HEATER, INDUCED DRAFT FAN, WARM AIR, STOKER).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-superheat-reheat-diagram
kind: figure
teaches: >
  Superheat and reheat as further efficiency additions: steam collected in
  the boiler drum passes through a primary superheater (raising its
  temperature above saturation before it ever reaches the turbine), then
  after passing through the turbine's early stages is routed back through a
  reheat section of the boiler before continuing to the turbine's lower
  stages — the text gives a worked example (1000 psi saturated steam at
  556°F, superheated to 756°F) and explains both efficiency and
  turbine-blade-erosion reasons for using superheated steam.
concept-tags: [superheater, reheat, saturated steam, turbine efficiency, blade erosion prevention]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-14 — boiler/primary superheater/reheat/turbine schematic, drawing E0190"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled (BOILER, BOILER TUBES, PRIMARY SUPERHEATER, REHEAT, MAIN STEAM, REHEATED STEAM).
mediaStatus: unreviewed
```

```yaml
id: pss-topic-boiler-water-chemistry-and-emissions
kind: topic
teaches: >
  Two real operating-cost pressures on a modern station beyond the core
  thermal cycle: (1) feedwater purity — oxygen in hot boiler water is
  highly corrosive and scale-forming minerals foul boiler heating
  surfaces at the tremendous throughput rates (millions of pounds/hour,
  continuous) modern high-pressure boilers run at, driving evaporator,
  ion-exchange demineralizer, or chemical-precipitation treatment systems
  plus a deaerating heater to boil off dissolved oxygen; continuous or
  periodic boiler "blowdown" is required to keep impurity concentration
  from building up as water recycles, with continuous-blowdown systems
  recovering the discarded heat via a heat exchanger rather than losing
  it outright; and (2) emissions — fine ash/dust removal (electrostatic
  precipitators charging and collecting particles, or cyclone/water-spray
  systems) and flue gas desulfurization for sulfur oxides, both described
  as expensive, high-skill systems that add real operating complexity
  beyond the thermal cycle itself.
concept-tags: [feedwater treatment, boiler blowdown, deaerating heater, electrostatic precipitator, flue gas desulfurization, emissions control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Body prose, pp. 8-15 – 8-16 and 8-18 (PDF pp. 99-100, 102) — not anchored to any single diagram"
relatedFigures: [pss-cmp-primer-complete-plant-diagram]
relatedTopics: []
used-by: []
notes: Read directly via pdftotext, PDF pp. 99-100 and 102.
```

```yaml
id: pss-topic-auxiliary-turbine-desuperheating-rationale
kind: topic
teaches: >
  Why the boiler feed pump's own drive turbine receives reduced,
  desuperheated steam rather than the main superheated header steam: an
  auxiliary turbine like this doesn't need the main turbine's thermal
  efficiency (its exhaust heat is returned to the system anyway), and the
  metals capable of handling superheated steam are expensive — so it is
  more economical to first drop the main header steam's pressure through
  a reducing valve, then desuperheat it by spraying in water, delivering
  low-pressure saturated steam to the auxiliary turbine instead.
concept-tags: [auxiliary turbine, boiler feed pump turbine, desuperheater, reducing valve, steam conditioning rationale]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Body prose, p. 8-18 (PDF p. 102) — not anchored to any single diagram"
relatedFigures: [pss-cmp-primer-complete-plant-diagram]
relatedTopics: []
used-by: []
notes: >
  Read directly via pdftotext, PDF p. 102. This is the real reasoning
  behind the "desuperheater" and "reducing valve" labels the complete-
  plant-diagram figure's own notes already flag as connecting to Chapter
  7's desuperheater content — that figure names the components, this
  topic entry is the "why" behind them.
```

### Chapter 8 — The Complete Plant (printed pp. 8-17 – 8-19)

```yaml
id: pss-cmp-primer-complete-plant-diagram
kind: figure
teaches: >
  The chapter's culminating, fully-detailed power-plant system diagram,
  drawn together as "highly complex" after every individual system covered
  earlier in the chapter has been introduced piece by piece: coal handling,
  pulverizer, boiler with superheater/economizer/reheater, combustion
  control (fuel control, air flow regulator/relay, master sender), draft
  system (I.D./F.D. fans, electrostatic precipitator), HP/LP turbines,
  condenser with circulating water pump and traveling water screen, HP/LP
  feedwater heaters, deaerating heater, boiler feed pump (with its own
  steam-turbine drive, reducing valve, and desuperheater), chemical
  feedwater treatment and evaporator (makeup water), and the electric
  generation side (alternator, exciter, field rheostat, synchronous
  rectifier, H.V. transformer) — the single most complete, most heavily
  labelled system figure in the entire chapter, and its natural "whole
  system at a glance" reference if only one figure from this chapter is
  ever cited on a slide.
concept-tags: [complete power plant, combustion control, draft system, feedwater heaters, deaerating heater, boiler feed pump turbine, desuperheater, chemical feedwater treatment, alternator, exciter, power plant primer]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-17 — full labelled power-plant system diagram, drawing E0191"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Dense, fully labelled process diagram — a strong Style Guide §5 redraw
  candidate if ever placed on a slide, given its density (the source's own
  surrounding text calls it "a highly complex affair" even while noting it
  is "still only the simplest of schematic diagrams" next to a real plant's
  actual complexity). Directly names a "desuperheater" and "reducing valve"
  in the boiler-feed-pump-turbine supply line — connects to Chapter 7's
  desuperheater content (`Subject-Matter Index — Power & Severe Service
  Sourcebook ch7.md`) at the concept level, though this is a generic system
  diagram, not the same drawing as any Chapter 7 figure.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-primer-generator-exciter-collector-rings
kind: figure
teaches: >
  How a real generator's rotating electromagnet is powered: two collector
  rings mounted on the main generator shaft, connected to the ends of the
  rotor's field winding, with stationary brushes riding on the rings to
  conduct exciting current from an external DC source — explains the
  mechanism behind the "exciter" and "field rheostat" labels seen on the
  complete-plant diagram, and how generator output voltage is controlled by
  varying the field excitation current rather than by the (very tightly
  governed) turbine speed.
concept-tags: [generator excitation, field coils, collector rings, brushes, exciter, field rheostat]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Unnumbered diagram, p. 8-19 — collector rings/brushes/field winding sketch, drawing E0192"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled (TO SOURCE OF D-C, BRUSHES, COLLECTOR RINGS, MAGNET). Last figure in the chapter; p. 8-20 is closing prose only.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-generator-excitation-and-voltage-control
kind: topic
teaches: >
  Why a real generator uses an electromagnet rather than the simple
  permanent bar magnet shown in the chapter's early sketches (a permanent
  magnet can't produce a strong enough field), and how that changes what
  can be controlled: the exciter circuit (a separate small DC generator
  on the same shaft, supplying current to the field coils via the
  collector rings) controls generator output VOLTAGE by varying field
  excitation current, while the steam-turbine governor separately
  controls generator SPEED — and that speed control is so precise that
  generator frequency serves as the time standard behind synchronous
  electric clocks. Also covers why transmission voltage is stepped up via
  transformers (modern generators produce 13,000-26,000 V directly;
  transformers, some over 99% efficient, step this up for long-distance
  transmission).
concept-tags: [generator excitation, exciter circuit, voltage control, turbine governor, speed control, transformer, synchronous clocks]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Body prose, pp. 8-17 and 8-19 – 8-20 (PDF pp. 101, 103-104) — not anchored to any single diagram"
relatedFigures: [pss-cmp-primer-generator-exciter-collector-rings]
relatedTopics: []
used-by: []
notes: >
  Read directly via pdftotext, PDF pp. 101, 103-104. Substantially extends
  the exciter/collector-rings figure's own physical-mechanism description
  with the functional voltage-vs-speed control distinction, which the
  figure's own `teaches` field already gestures at but doesn't fully
  state.
```

```yaml
id: pss-topic-turbogenerator-overspeed-protection
kind: topic
teaches: >
  Why protective instrumentation on a large turbogenerator is taken so
  seriously, with a real quantified danger: a 40-ton generator rotor
  spinning at 3600 rpm carries about 650 million foot-pounds of
  rotational energy — the source's own comparison: roughly the kinetic
  energy of a 40-ton jet airliner at 500 mph. If load suddenly drops and
  the turbine governor fails to respond, the machine can overspeed and
  explode from centrifugal force within seconds, which is why stations
  run continuous instrumentation for shaft speed, eccentricity, vibration,
  and axial expansion, plus differential relays guarding against internal
  electrical failure.
concept-tags: [overspeed protection, turbine governor failure, rotational energy, turbogenerator instrumentation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Body prose, p. 8-19 (PDF p. 103) — not anchored to any single diagram"
relatedFigures: [pss-cmp-primer-complete-plant-diagram]
relatedTopics: [pss-topic-generator-excitation-and-voltage-control]
used-by: []
notes: Read directly via pdftotext, PDF p. 103.
```

---

## Open Items

- **`kind: topic` pass, added 2026-09-17.** Ten real topic entries added
  after all 20 real pages were re-read directly (not assumed from this
  file's own existing figure descriptions) — this chapter turned out to
  carry substantially more real conceptual/thermodynamic content than its
  progressively-elaborated-sketch structure initially suggested,
  including a full worked Carnot-style efficiency derivation
  (`pss-topic-steam-cycle-thermal-efficiency`), real historical fuel-mix
  statistics, and combustion chemistry — none of it captured in the
  existing figure entries' own `teaches` fields, which describe the
  sketches themselves, not the surrounding reasoning. One candidate
  (superheat/reheat's efficiency-and-blade-erosion rationale) was
  deliberately NOT re-indexed as its own topic since the existing
  `pss-cmp-primer-superheat-reheat-diagram` figure entry already states
  both reasons directly. This chapter's real component count is
  therefore 31 (21 figures + 10 topics), not 21.
- **Chapter boundary**, confirmed directly: Chapter 8 divider = PDF p. 85;
  Chapter 9A divider = PDF p. 105. Chapter 8 = PDF pp. 85–104 (printed pp.
  8-1 through 8-20), zero page offset, no trailing blank page. Every page in
  range was rendered at 150dpi and read directly.
- **Full coverage accounting**: this chapter contains **zero** numbered
  figures — every diagram is unnumbered, carrying only a printed drawing-
  number stamp (E0170 through E0192, 23 real drawing numbers found). All 23
  were located and accounted for; 21 records were minted, two pairs bundled
  as single records on stated editorial-judgment grounds (see the file's
  intro and each bundled record's own `notes`): E0172/E0173 (air-preheat
  before/after comparison) and the two E0177-stamped panels (feedwater
  heater + economizer). No diagram was skipped or omitted.
- **Low-confidence flags**: (1) the two panels on p. 8-5 both carry the
  printed stamp "E0177" — genuine shared drawing-family number or a
  printing duplication, not resolvable from the rendered page, flagged in
  `pss-cmp-primer-feedwater-heater-economizer`'s own notes; (2) drawing
  number sequence skips from E0187 (p.8-12) to E0189 (p.8-13), with E0188
  appearing out of numeric sequence on p.8-14 — confirmed genuine by direct
  reading (not a missed figure), flagged in
  `pss-cmp-primer-four-stage-feedwater-heating-diagram`'s own notes.
- **Duplicate-figure-number / source-citation-error findings**: not
  applicable in the usual sense (no printed "Figure N-M" numbers exist
  anywhere in this chapter to duplicate or mis-cite) — see the drawing-
  number-level flags above instead.
- **Table-exclusion confirmation**: no numbered tables of any kind appear
  anywhere in this chapter (confirmed by direct reading of all 20 pages) —
  nothing to exclude.
- **Bundling judgment call, stated for completeness**: this chapter's whole
  cataloguing approach (21 records from 23 drawing numbers, two pairs
  bundled) is itself a judgment call, argued explicitly in this file's
  intro — extending the existing "bundle only when the source presents
  content as one continuous thing" navPath principle to a figure-kind
  chapter for the first time, on the grounds that the underlying reasoning
  (source's own structure decides, not a fixed per-item rule) is not
  actually navPath-specific. Flagged here for visibility in any future
  schema-drift review, since it is a novel application of that principle,
  not a mechanical rule already on record for figures.
- **Cross-reference findings**: no drawing-number or content overlap found
  against the Oil & Gas Sourcebook or the Control Valve Handbook — this
  chapter's content (basic power-plant thermodynamics/equipment education,
  authored as a generic primer, not Fisher-product-specific) is unlike
  every other chapter of this book and has no counterpart elsewhere in the
  library. One internal, forward-pointing connection noted:
  `pss-cmp-primer-feedwater-control-valve-operator` (p. 8-4) and
  `pss-cmp-primer-complete-plant-diagram` (p. 8-17, desuperheater/reducing
  valve) both ground concepts named explicitly as valve applications in
  Chapter 9A ("Boiler Feedwater Regulator Valve") and Chapter 7
  (desuperheaters) — noted in each relevant record's own `notes`, not
  treated as a duplicate.
- **Archive/legacy material**: none consulted, none needed — first-party
  current Fisher/Emerson document throughout; one licensed third-party
  magazine-reprint attribution noted (see
  `pss-cmp-primer-basic-kettle-turbine-generator`'s own `notes`), still
  `status: current`.
