---
title: Subject-Matter Index — Refining Sourcebook ch4
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
chapter: ch4 — Refinery Control Valve Application Reviews
updated: 2026-09-15
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Refining, Chapter 4

**Standing full-chapter pass**, continuing `Subject-Matter Index — Refining
Sourcebook ch3.md` — see `ch1.md`'s header for the pass type and reason
(gating Control Valve Engineering 1/2 content-build work).

**Chapter/scope boundary, confirmed directly by rendering:** PDF page 30
(chapter divider, carrying its own 15-section mini table of contents: §4.1
Furnace through §4.15 Blending Unit) through PDF page 108 (printed 4-108,
the chapter's last content page — Figure 4.15.2 and the section 4.15 valve
text both close out on this page). PDF page 109 rendered and confirmed to
be the Chapter 5 "Terminology" divider (own mini TOC: §5.1–§5.5), catalogued
separately in `Subject-Matter Index — Refining Sourcebook ch5.md`. Zero page
offset throughout (printed page N-M = PDF page M).

This is by far the largest chapter in the book: 15 independent
"application review" sections, each walking one named refinery process unit
(Furnace, Distillation Column, Gas Plant, Crude Desalter/Distillation,
Vacuum Crude Column, Delayed Coker, Hydrotreater, Hydrocracker, Catalytic
Reformer, Fluid Catalytic Cracker, Alkylation, Amine Unit, Sulfur Recovery,
Pressure Swing Adsorption, Blending) through its own numbered-valve process
flow diagram and matching prose "1., 2., 3. ... [Valve Name]" application
text. All 15 sections are topically disjoint refinery process units with no
real chance of sharing a figure with each other — confirmed by the drawing-
number sweep below.

Rigor standard: all 79 pages in range rendered at 150dpi; every genuine
figure page viewed directly (a representative page from each of the 15
sections' recurring "unit location" figure was viewed multiple times to
confirm the pattern below, rather than every one of its 13 occurrences
individually — see the consolidated record's own notes for why).

## Precedence

Same as Chapters 1–3 — `status: current` throughout (D103205X012, © 2014,
2024 Fisher Controls International LLC); no archive or legacy material
consulted.

## A structural finding that governs this whole chapter's cataloguing

Every section's opening figure (`Figure 4.X.1`) is captioned "[Unit]
Location" (or, for two sections, just the unit's own name) and is drawn from
one of two real patterns, confirmed by direct rendering, not assumed:

1. **Sections 4.1 and 4.2** (Furnace, Distillation Column) open with a real,
   distinct stock photograph of the unit — no drawing number legible on
   either (consistent with photography rather than an engineering drawing).
2. **Sections 4.3 through 4.15** (13 sections) all open with the *same*
   drawing, confirmed by an identical printed drawing number — **E1161** —
   on every single instance rendered: a "Complete Refinery" block-flow map
   (crude oil in, 15 named process-unit boxes, finished products out) with
   only that section's own unit box filled solid green and every other box
   left in plain outline. This is a real, distinct drawing from Chapter 1's
   own "Complete Refinery" orientation figure (`ref-cmp-complete-refinery-
   flow-diagram`, drawing E1445, no highlighting, used once as the book's
   overall orientation figure) — related in concept, not the same asset.

Per the "cross-reference before minting" and "duplicate figure numbers"
conventions, this is catalogued as **one consolidated record**
(`ref-cmp-refinery-unit-location-map`) rather than 13 near-identical
records that would differ only in which single box is filled green — the
same real image, confirmed by drawing number, recurring under 13 different
figure numbers and captions. Each section below cites that one record by id
rather than repeating it. This is a real editorial judgment call, flagged
in Open Items rather than decided silently — see there for the alternative
that was considered and rejected (one record per section instance).

## Components

```yaml
id: ref-cmp-refinery-unit-location-map
kind: figure
teaches: >
  The recurring "unit location" orientation figure that opens 13 of
  Chapter 4's 15 application-review sections: the same Complete Refinery
  block-flow map (crude oil and desalter in; atmospheric and vacuum
  distillation; the naphtha/diesel/gas-oil hydrotreaters; catalytic
  reformer; fluid catalytic cracker; hydrocracker; delayed coker;
  isomerization; alkylation; amine unit; sulfur recovery; gasoline,
  distillate, and residual blending — finished products out), reused
  verbatim across sections with only that section's own process-unit box
  filled solid green and every other box left in plain white outline —
  orienting the learner to where this section's unit sits among the
  refinery's other 15 named units before the section's own process-specific
  flow diagram (Figure 4.X.2) goes into valve-level detail.
concept-tags: [refinery overview, process flow diagram, unit location, orientation diagram, application review, complete refinery]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: >
      Drawing E1161, recurring across 13 figures: Figure 4.3.1 "Gas Plant
      Location" (p. 4-36, Gas Plant highlighted); Figure 4.4.1 "Crude
      Desalter and Distillation Unit Location" (p. 4-41, Atmospheric Crude
      Distillation highlighted); Figure 4.5.1 "Vacuum Distillation Unit"
      (p. 4-47, Vacuum Distillation highlighted); Figure 4.6.1 "Delayed
      Coker Unit Location" (p. 4-51, Delayed Coker highlighted); Figure
      4.7.1 "Hydrotreater Locations" (p. 4-58, all five hydrotreater boxes
      highlighted); Figure 4.8.1 "Hydrocracker Location" (p. 4-65,
      Hydrocracker highlighted); Figure 4.9.1 "Catalytic Reformer Unit
      Location" (p. 4-72, Catalytic Reformer highlighted); Figure 4.10.1,
      captioned (in error — see notes) "Alkylation Unit Location" (p.
      4-79, Fluid Catalytic Cracker highlighted); Figure 4.11.1 "Alkylation
      Unit Location" (p. 4-88, Alkylation highlighted); Figure 4.12.1
      "Amine Unit Location" (p. 4-95, Amine Unit highlighted); Figure
      4.13.1 "Sulfur Recovery Unit Location" (p. 4-100, Sulfur Recovery
      highlighted); Figure 4.14.1 "Pressure Swing Adsorption Unit Location"
      (p. 4-103, Pressure Swing Adsorption highlighted); Figure 4.15.1
      "Blending Unit Locations" (p. 4-107, all three blending boxes
      highlighted).
delivery: existing figure (crop) — per Style Guide §5.8 default, though each
  point of use needs its own fresh crop from that section's own page (the
  green-highlighted box differs every time)
used-by: []
notes: >
  **Editorial consolidation, flagged per this pass's own instructions:**
  this is 13 real, separately numbered and captioned figures under the
  source's own scheme, consolidated here into one record because direct
  rendering confirmed they are the identical drawing (E1161) differing
  only in which box is filled green — not assumed from caption similarity.
  A different, equally defensible call would have catalogued each
  section's instance as its own record (13 total) to preserve a strict
  one-record-per-figure-number mapping even where the image repeats. See
  Open Items for why consolidation was chosen instead.
  **Source citation error confirmed by direct rendering:** Figure 4.10.1
  (p. 4-79, opening §4.10 "Fluidized Catalytic Cracking") is captioned
  "Alkylation Unit Location" — but the diagram itself has the FLUID
  CATALYTIC CRACKER box filled green, not the Alkylation box. Figure 4.11.1
  (p. 4-88, opening §4.11 "Alkylation Unit"), by contrast, correctly reads
  "Alkylation Unit Location" and highlights the Alkylation box. This reads
  as a copy-paste caption error carried from 4.11.1 onto 4.10.1 — the real
  figure content (highlighted unit) is catalogued as belonging to §4.10
  above regardless of its own printed caption, per the "source citation
  errors" edge case (catalogue the real figure under its real content,
  flag the citation error, never silently correct the source's own printed
  text).
```

### 4.1 Furnace (printed pp. 4-31 – 4-32)

```yaml
id: ref-cmp-furnace-photo
kind: figure
teaches: >
  A real refinery skyline photograph (fired-heater stacks, structural
  steel, and process piping) opening the Furnace application review — the
  chapter's "what does this unit look like in the plant" orientation shot,
  paired with Figure 4.1.2's valve-level process flow diagram.
concept-tags: [furnace, fired heater, refinery overview, cracking furnace, reboiler heater]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.1.1 'Furnace,' p. 4-31 (no drawing number legible — a stock photograph, not an engineering drawing)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real photograph (multiple red-and-white-banded stacks, structural steel,
  overhead piping) — no drawing number, no printed callouts, unlike the
  chapter's engineering diagrams. Section itself notes furnaces recur
  specifically in the Delayed Coker section (§4.6) as the coking furnace.
```

```yaml
id: ref-cmp-furnace-pfd
kind: figure
teaches: >
  A generic furnace process flow diagram: four parallel feed-valve passes
  (#1–#4) feeding four radiant-tube coils inside the furnace box, combined
  into a single effluent stream, plus a fuel gas valve (#5) controlling
  heat input. Teaches why furnace feed valves are configured fail-open
  (protect radiant tubes from coking/tube rupture on loss of flow) while
  the fuel gas valve is configured fail-closed (prevent excess fuel dumping
  into a hot firebox on a loop failure) — the two valve functions common to
  every furnace application in the book, referenced again in §4.6's Delayed
  Coker furnace review.
concept-tags: [furnace, fired heater, feed valve, fuel gas valve, fail-open, fail-closed, radiant tube, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.1.2 'Furnace Process Flow Diagram' (drawing E1155), p. 4-32"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic with 5 numbered valves keyed directly to the section's
  own "1, 2, 3, and 4. Feed Valves" and "5. Fuel Gas Valve" application
  text — the recurring pattern for every process flow diagram in this
  chapter (numbered valve icons keyed to matching numbered prose
  paragraphs).
```

```yaml
id: ref-topic-furnace-temperature-control-philosophy
kind: topic
teaches: >
  The real control-philosophy reasoning behind a furnace's feed and fuel
  valves, beyond what either PFD figure's valve list states: coking is a
  non-linear reaction, so an oscillating or inconsistent feed valve (not
  just a fully failed one) causes excessive coke buildup on radiant tubes,
  shortening the cycle between decoking procedures and forcing the
  downstream unit to shut down — a real, gradual failure mode distinct
  from the fail-open/fail-closed protection the PFD figure already covers.
  The preferred outlet-temperature control configuration is cascade to the
  fuel valve's setpoint, not direct manipulation of the fuel valve by the
  temperature loop — a direct connection is "extremely susceptible to any
  valve deadband such as that caused by a sticking valve," visible as
  outlet-temperature oscillation. A FIELDVUE digital valve controller with
  PD-tier diagnostics is specifically recommended for the fuel valve
  because monitoring actual valve position on a fail-closed valve gives
  the DCS real position feedback confirming the valve actually closed on a
  loop or power failure — operations personnel are otherwise reluctant to
  run a fuel valve on bypass for any significant time.
concept-tags: [furnace, coking, cascade control, valve deadband, FIELDVUE, fail closed, temperature control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.1 Furnace body prose, pp. 4-31–4-32 (PDF pp. 31-32) — running text between the two figures, not itself captioned"
relatedFigures: [ref-cmp-furnace-pfd]
relatedTopics: []
used-by: []
notes: >
  This same furnace coking/fail-open paragraph recurs near-verbatim in
  §4.4's "Feed Valve to Furnace" text (crude unit charge heater) and is
  referenced directly in §4.6 (Delayed Coker furnace); indexed once here at
  its canonical occurrence rather than re-authored per section, consistent
  with this project's standing anti-duplication discipline. The cascade-
  control and FIELDVUE-diagnostics reasoning is genuinely new relative to
  `ref-cmp-furnace-pfd`'s own `teaches` field, which only names the 5
  valves and their fail-open/fail-closed configuration, not why cascade
  beats direct connection or why position feedback matters specifically
  here.
```

### 4.2 Distillation Column (printed pp. 4-33 – 4-35)

```yaml
id: ref-cmp-distillation-column-photo
kind: figure
teaches: >
  A real refinery photograph of tall distillation/fractionation towers
  with associated piping, platforms, and structural steel — the "what does
  this unit look like" orientation shot opening the generic Distillation
  Column application review (the chapter's shared-fundamentals section for
  fractionators, strippers, stabilizers, and de-X towers generally, ahead
  of the crude-specific and vacuum-specific distillation sections that
  follow at §4.4 and §4.5).
concept-tags: [distillation column, fractionator, tower, refinery overview]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.2.1 'Distillation Column,' p. 4-33 (no drawing number legible — a stock photograph)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real photograph, blue-grey painted towers, no callouts, no drawing number.
```

```yaml
id: ref-cmp-distillation-column-pfd
kind: figure
teaches: >
  A generic distillation-column process flow diagram: feed valve (#1) into
  the column; reflux valve (#2) and bottom product valve (#3) controlling
  the column itself; overhead pressure control valve (#4) and vent gas
  valve (#5) on the overhead receiver; overhead product valve (#6); and a
  reboil valve (#7) on the reboiler steam supply. Teaches the seven valve
  functions common to nearly every distillation/fractionation column in
  the book (feed, reflux, bottoms, overhead pressure, vent, overhead
  product, reboil) — the template every later section's own column valves
  (crude fractionator, vacuum tower, stripper, debutanizer, etc.) are named
  variations of.
concept-tags: [distillation column, fractionator, reflux valve, reboil valve, overhead pressure control, bottom product valve, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.2.2 'Distillation Column Process Flow Diagram' (drawing E1156), p. 4-34"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic, 7 numbered valves keyed to the section's own
  numbered "1. Feed Valve" through "7. Reboil Valve" application text.
```

```yaml
id: ref-topic-distillation-column-flooding-and-reflux-mechanics
kind: topic
teaches: >
  The real physics/chemistry underlying a distillation column, beyond the
  seven valve functions the PFD figure names: separation relies on
  relative volatility (lighter components boil off at lower temperature
  and rise as heat is added via the bottom reboiler); reflux — sending
  some overhead liquid product back to the top of the column — improves
  overhead purity by reducing heavy-component carryover, at the real cost
  of requiring more reboiler heat to re-vaporize the returned reflux
  (a genuine purity-vs-energy tradeoff, not a free improvement). Flooding
  is the column's real failure mode: if vapor/liquid "traffic" through the
  column becomes too great — caused by too much reflux flow or too much
  reboil heat, or both — column efficiency drops sharply with a
  corresponding drop in product purity.
concept-tags: [distillation column, flooding, reflux, reboil, relative volatility, product purity, energy balance]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.2 Distillation Column body prose, 'Reflux & Reboil' and 'Flooding' subheadings, pp. 4-33–4-34 (PDF pp. 33-34)"
relatedFigures: [ref-cmp-distillation-column-pfd]
relatedTopics: []
used-by: []
notes: >
  None of this mechanism — relative volatility, the reflux/energy
  tradeoff, or flooding as a named failure mode — appears in
  `ref-cmp-distillation-column-pfd`'s own `teaches` field, which is scoped
  to the seven numbered valve functions only. Genuinely foundational for
  every later section built on this column template (§4.4 crude, §4.5
  vacuum, and the fractionation sections of §4.10 FCC and §4.11
  alkylation), cross-referenced from there rather than re-explained.
```

### 4.3 Gas Plant (printed pp. 4-36 – 4-39)

Figure 4.3.1 "Gas Plant Location" is the consolidated
`ref-cmp-refinery-unit-location-map` record (Gas Plant box highlighted) —
see above.

```yaml
id: ref-cmp-gas-plant-pfd
kind: figure
teaches: >
  A gas-plant process flow diagram: wet gas compressor (two stages) into a
  high-pressure separator; primary and secondary absorbers recovering C3/C4
  liquids and lean oil from the fractionator overhead vapor; a stripper
  removing C2-and-lighter back to the primary absorber; and a debutanizer/
  depropanizer train (quench tower, reflux drum) splitting the recovered
  liquid into gasoline, C4, and C3 product streams. 13 numbered valves
  cover the full gas-recovery train — the most valve-dense diagram in the
  chapter's first several sections.
concept-tags: [gas plant, wet gas compressor, absorber, stripper, debutanizer, depropanizer, LPG recovery, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.3.2 'Gas Plant Process Flow Diagram' (drawing E1157), p. 4-37"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic, 13 numbered valves (#1–#13) keyed to the section's
  own numbered application-review text (wet gas recycle valves, primary
  absorber feed/bottoms, stripper feed, sponge/lean-oil absorber valves,
  debutanizer/depropanizer overhead, reflux, and bottoms valves).
```

```yaml
id: ref-topic-gas-plant-light-ends-economics-and-emissions
kind: topic
teaches: >
  Why a gas plant exists at all and a real service-specific valve-selection
  driver, neither captured by the PFD figure: most reactive refinery
  processes (delayed cokers and FCC units especially) generate light-end
  byproducts (hydrogen, methane, ethane, ethylene, propane/propylene,
  butanes/butenes) alongside their main products. Light-ends are normally
  low-value refinery fuel gas, but if a unit produces enough of them there
  is real economic incentive to separate them into saleable component
  streams via fractionators and absorbers — the gas plant's whole reason
  for existing. Separately: almost every valve in a light-ends gas plant
  is a possible fugitive-emissions source, so packing is typically kept
  very tight, which in turn can cause excessive control-valve deadband —
  making packing selection and actuator sizing a real performance driver
  specific to this service, not incidental.
concept-tags: [gas plant, light ends, fugitive emissions, valve packing, deadband, actuator sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.3 Gas Plant opening body prose, p. 4-36 (PDF p. 36) — before the numbered valve-application text"
relatedFigures: [ref-cmp-gas-plant-pfd]
relatedTopics: []
used-by: []
notes: >
  The fugitive-emissions/tight-packing/deadband chain is a real, named
  service-specific tradeoff distinct from the generic packing guidance
  found elsewhere in the library (e.g. CVH's own packing-friction
  content) — worth its own entry because it is stated here as a direct
  consequence of this particular service's emissions exposure, not a
  general packing-selection principle.
```

### 4.4 Crude Desalter/Distillation Unit (printed pp. 4-40 – 4-46)

Figure 4.4.1 "Crude Desalter and Distillation Unit Location" is the
consolidated `ref-cmp-refinery-unit-location-map` record (Atmospheric Crude
Distillation box highlighted) — see above.

```yaml
id: ref-cmp-crude-desalter-pfd
kind: figure
teaches: >
  A crude-desalter process flow diagram: unrefined crude and process water
  pumped through a mix valve into an electrostatic separator (with
  demulsifier chemical injection and an alternate electrical-power path
  shown dashed), producing desalted crude out one side and effluent water
  (through a dump valve) out the other — the desalting step that precedes
  atmospheric distillation, removing salts/solids/water from raw crude.
concept-tags: [crude desalter, electrostatic separator, demulsifier, mix valve, dump valve, desalted crude, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.4.2 'Crude Desalter Process Flow Diagram' (drawing E1547), p. 4-42"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Line-art schematic; the mix valve and dump valve are the section's two named control valves on this diagram.
```

```yaml
id: ref-cmp-crude-distillation-column-pfd
kind: figure
teaches: >
  The full atmospheric crude-distillation-column process flow diagram: feed
  valve into the crude heater/furnace (with its own fuel valve), two
  pump-around loops (#2, #3) for heat balance, the crude fractionator
  itself with overhead receiver/compressor train (overhead pressure
  control, reflux, overhead product, compressor bypass), and two
  side-draw strippers (kerosene, diesel) each with their own stripping-
  steam valve and stripper-bottoms product valve, plus a fractionator
  stripping-steam valve and bottoms-to-vacuum-unit valve. 14 numbered
  valves — the chapter's most complete single-unit diagram, tying together
  furnace, pump-around, fractionator, and side-stripper valve functions
  introduced separately in §4.1 and §4.2.
concept-tags: [crude distillation unit, atmospheric distillation, pump-around valve, side-draw stripper, kerosene, diesel, overhead receiver, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.4.3 'Crude Distillation Column Process Flow Diagram' (drawing E0925-2), p. 4-43"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic, 14 numbered valves (#1–#14) keyed to the section's
  own "1. Feed Valve to Furnace" through "14. Compressor Bypass Valve"
  application text.
```

```yaml
id: ref-cmp-level-trol-application-photo
kind: figure
teaches: >
  A Fisher Level-Trol liquid level controller mounted externally on a
  horizontal vessel — a displacer-type instrument tapped into the side of
  the vessel to sense liquid level directly, illustrating the overhead-
  product level-control application named in the section text (used in
  conjunction with the overhead product valve to control receiver level).
concept-tags: [Level-Trol, liquid level controller, displacer, overhead receiver, level control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.4.4 'Typical Level-Trol Application' (drawing X1091), p. 4-45"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Rendered product illustration (grey-shaded horizontal vessel, Level-Trol
  head and torque-tube arm visible on the end), no printed field callouts.
  Companion, at the product-illustration level, to Chapter 3's fully
  labelled `ref-cmp-displacer-level-transmitter-schematic` (Figure 3.6.1) —
  that record shows the instrument's internal construction; this one shows
  it installed on a real vessel. Cross-referenced in both records' notes.
```

```yaml
id: ref-cmp-liquid-level-installation-schematic
kind: figure
teaches: >
  A liquid-level installation schematic on a tall vertical column: a
  vertical stack of external side-mounted level-tap nozzles down the
  column wall (each with its own block valve), with an inset zoomed
  cutaway showing one displacer/cage instrument connection in detail —
  teaches the real installation pattern of multiple level taps at
  different elevations on one vessel (used, per the section text, for
  columns needing a level-alarm system such as one built on a Fisher
  DLC3000 digital level controller).
concept-tags: [liquid level installation, level tap, displacer, cage, level alarm, DLC3000]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.4.5 'Liquid Level Installation Schematic' (drawing X1092), p. 4-46"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic plus one photographic inset (zoomed instrument
  connection detail) — no printed field callouts on either part. Cited
  again in §4.4's own text ("the liquid level installation may be similar
  to Figure 4.4.5") for the stripper bottoms level applications.
```

```yaml
id: ref-topic-crude-distillation-unit-role-and-product-cuts
kind: topic
teaches: >
  The crude distillation unit's (CDU) role in the whole refinery, beyond
  what the two crude-unit PFD figures show at valve-function level: it is
  the first processing unit downstream of the desalter and fractionates
  crude oil into the refinery's basic boiling-point product streams —
  naphtha, kerosene, diesel, gas oil, heavy gas oil, and residue — with
  residue routed onward to the vacuum crude unit (§4.5) for further
  separation under vacuum. These basic cuts vary by refinery operating
  objectives and are normally sent to downstream units for further
  processing before reaching product tanks. Because the CDU is common to
  every refinery, the source explicitly frames it as carrying "certain
  control valve trends that are beneficial to understand" — the
  motivation for the section existing at all.
concept-tags: [crude distillation unit, CDU, boiling point cuts, naphtha, kerosene, diesel, gas oil, residue, refinery flow]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.4 Crude Desalter/Distillation Unit, 'Crude Distillation Unit' subheading, p. 4-40 (PDF p. 40)"
relatedFigures: [ref-cmp-crude-distillation-column-pfd, ref-cmp-refinery-unit-location-map]
relatedTopics: []
used-by: []
notes: >
  Complements Chapter 1's own whole-refinery orientation figure and this
  chapter's own consolidated `ref-cmp-refinery-unit-location-map` record —
  those show WHERE the CDU sits; this entry states WHAT it produces and
  WHY, content that lives in running prose, not on either diagram.
```

```yaml
id: ref-topic-pump-around-loop-function
kind: topic
teaches: >
  The pump-around loop's real mechanism and failure consequence, stated
  once in §4.4 and applying equally to §4.5's vacuum column (whose own PFD
  figure only lists "two pump-around loops feeding the vacuum tower"
  without explaining the mechanism): a pump-around is a heat-exchanger
  loop extracting heat from the column specifically to create the
  separation between the product draws immediately above and below the
  loop — most real fractionators have more than one. The valves are
  usually flow controllers; a poorly performing or bypassed pump-around
  valve increases variability in the quality specification of the
  product draws around it, and a real valve failure typically creates a
  process upset lasting 30 minutes to a few hours depending on severity —
  a concrete, sourced consequence absent from either column's PFD figure.
concept-tags: [pump-around loop, heat balance, fractionator, product draw, process upset]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.4 Crude Desalter/Distillation Unit, 'Pump-Around Valve Function' subheading, p. 4-42 (PDF p. 42)"
relatedFigures: [ref-cmp-crude-distillation-column-pfd, ref-cmp-vacuum-crude-column-pfd]
relatedTopics: [ref-topic-distillation-column-flooding-and-reflux-mechanics]
used-by: []
notes: >
  Genuinely distinct from the flooding/reflux entry above — that entry
  covers the column's top-level vapor/liquid balance; this one covers a
  specific intermediate heat-removal mechanism used to control the
  separation quality at specific draw points. Cross-referenced rather
  than merged since each is independently teachable.
```

### 4.5 Vacuum Crude Column (printed pp. 4-47 – 4-49)

Figure 4.5.1 "Vacuum Distillation Unit" is the consolidated
`ref-cmp-refinery-unit-location-map` record (Vacuum Distillation box
highlighted) — see above. (This is one of the two map instances whose
caption omits the word "Location," naming the unit directly instead; the
underlying figure and drawing number E1161 are identical to the other 12.)

```yaml
id: ref-cmp-vacuum-crude-column-pfd
kind: figure
teaches: >
  The vacuum-crude-column process flow diagram: feed valve into a charge
  heater/furnace (with its own fuel valve), two pump-around loops feeding
  the vacuum tower (which vents to an ejector system at the top, not a
  fired condenser — the defining feature of vacuum distillation), a gas
  oil draw valve, two side strippers (LVGO, HVGO) each with a stripping-
  steam valve and stripper-bottoms product valve, a fractionator stripping-
  steam valve, and a vacuum resid valve at the bottom. 11 numbered valves —
  the vacuum-service counterpart to §4.4's atmospheric crude-distillation
  diagram, sharing its pump-around/side-stripper structure but replacing
  the atmospheric column's overhead receiver/compressor train with a vacuum
  ejector system.
concept-tags: [vacuum distillation, vacuum crude column, pump-around valve, LVGO, HVGO, vacuum resid, ejector system, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.5.2 'Vacuum Crude Column Process Flow Diagram' (drawing E0926), p. 4-48"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic, 11 numbered valves (#1–#11) keyed to the section's
  own application-review text.
```

### Topic entry — §4.5 follow-up pass (2026-09-18): a genuine mechanism the figure doesn't state

```yaml
id: ref-topic-steam-stripping-mechanism
kind: topic
teaches: >
  Steam stripping as a distinct separation mechanism from the reflux/reboil
  physics `ref-topic-distillation-column-flooding-and-reflux-mechanics`
  already covers: stripping steam is injected into the bottom of a column
  or side stripper specifically to drive off (strip out) light components
  remaining in a liquid product stream — a direct physical displacement,
  not a heat-driven vapor/liquid equilibrium shift. The vacuum crude
  column's own strippers (LVGO, HVGO) each use this; the amount of
  stripping steam directly affects separation efficiency, and stripper
  steam valves "drive the vapor back up through the column," with
  reboiler steam having "a direct effect on overhead reflux flow" — the
  two mechanisms interact but are not the same one. Poor steam-valve
  performance causes quality-specification variability in the product
  stream; a real valve failure creates an upset lasting "from thirty
  minutes to a few hours," matching this chapter's standard failure-
  consequence framing for the section's other numbered valves.
concept-tags: [steam stripping, stripper, LVGO, HVGO, separation efficiency, reflux, valve failure consequence]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.5 Vacuum Crude Column, items 5/6/8 'Stripping Steam Valves,' p. 4-49 (PDF p. 49)"
relatedFigures: [ref-cmp-vacuum-crude-column-pfd]
relatedTopics: [ref-topic-distillation-column-flooding-and-reflux-mechanics]
used-by: []
notes: >
  Genuinely new — checked directly, "stripping steam"/"steam stripping"/
  "strip out" appear nowhere else in this file before this pass. The
  §4.5 feed-valve (fail-open, furnace-tube protection) and fuel-valve
  (fail-closed) rationale in the same section's prose is NOT a second new
  topic: it is the identical mechanism `ref-cmp-furnace-pfd`'s own
  `teaches` field already states in full and explicitly flags as reused
  "in §4.6's Delayed Coker furnace review" — the vacuum crude column's
  charge heater is the same furnace type, cross-referenced in the source's
  own text ("refer to section 4.1 related to the furnace"), not a distinct
  concept requiring its own entry.
```

### 4.6 Delayed Coker Unit (printed pp. 4-50 – 4-56)

Figure 4.6.1 "Delayed Coker Unit Location" is the consolidated
`ref-cmp-refinery-unit-location-map` record (Delayed Coker box
highlighted) — see above.

```yaml
id: ref-cmp-delayed-coking-unit-pfd
kind: figure
teaches: >
  The delayed-coking-unit process flow diagram: unit feed valve and fuel
  valve into a coking furnace; furnace feed valve into a pair of alternating
  coke drums, each with its own overhead coke-drum isolation valve, coke
  drum vapor valve, decoke isolation valve, and drum-switch valve (the
  drums alternate between filling/coking and decoking/cutting on a cycle);
  a decoke water and decoke steam valve pair; a coke condensate valve; and
  the downstream fractionator train (pump-around, reflux, light-ends, LCGO/
  HCGO stripper reflux and feed valves, stripper steam valves, naphtha and
  light/heavy gas oil product valves). 27 numbered valves — by far the
  chapter's most valve-dense single diagram, reflecting the coker's own
  dual-drum cyclic operation plus a full downstream fractionation train.
concept-tags: [delayed coker, coke drum, decoke isolation valve, coking furnace, fractionator, LCGO, HCGO, naphtha, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.6.2 'Delayed Coking Unit Process Flow Diagram' (drawing E1158), p. 4-52"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic, 27 numbered valves (#1–#27) — the chapter's largest
  single diagram by valve count.
```

```yaml
id: ref-cmp-v500ffd-features
kind: figure
teaches: >
  The Fisher V500FFD's severe-service design features for coker
  application, each called out with its own descriptive sentence rather
  than a bare field label: hardfaced slotless retainer (erosion
  resistance), self-centering seat needing no shimming (extended service
  life via a second seating surface), body insert (protects seat/body from
  high-velocity erosive flow, eases repair), wear-resistant plug seating
  surface, abrasion-resistant internal flow-passage coating, oversized
  shafts/metal bearings (high-pressure, elevated-temperature service, no
  shaft windup), clamped spline shaft (zero lost motion with Fisher
  throttling actuators), and streamlined flow geometry (reduces
  process-induced variability from unstable flow noise).
concept-tags: [V500FFD, eccentric plug valve, coker service, erosion resistance, self-centering seat, spline shaft, severe service trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.6.3 'Fisher V500FFD Features' (drawing W9257), p. 4-55"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A labelled cutaway/photo composite (rotary eccentric-plug valve body,
  shaft assembly) — callouts are full explanatory sentences with leader
  lines, not short field-name labels like Chapters 1/3's nomenclature
  cutaways; Style Guide §6.3's "own printed field labels, not re-marked
  with numbered circles" guidance still applies at the point of use, but
  the callout text itself is far denser than a typical parts list. Referenced
  in the section's own coker-application discussion of the V500 and
  V500FFD product line (also seen as a product photo in Chapter 2's
  "Hard-to-Handle Fluids" panel, `ref-cmp-v500-cv500-hard-to-handle-fluids`).
```

```yaml
id: ref-topic-delayed-coker-drum-cycle-mechanism
kind: topic
teaches: >
  The delayed coker's actual dual-drum cycling procedure — the real
  mechanism behind the 27-valve PFD figure's isolation/vapor/decoke/switch
  valve set, which the figure itself only lists by function without
  explaining the sequence or timing: furnace effluent thermally cracks
  further inside a coke drum (around a stated cracking temperature) while
  filling with coke over several hours; when a drum is full, furnace
  effluent is switched to the alternate drum (a real, named 4-way
  switching valve plus block valves between the drums — explicitly NOT
  control valves themselves); the full drum is then steamed to remove
  residual oil, cooled with water, opened top and bottom, and the coke is
  removed by hydraulic decoking drills; the drum is then purged, pressure-
  tested, and made ready to refill. Typical full drum-cycle time is stated
  as 12 to 24 hours. Decoke water and decoke steam valves are each
  explicitly non-critical to coker operation, unlike most valves this
  chapter otherwise treats as critical control loops — a real, stated
  exception worth preserving.
concept-tags: [delayed coker, coke drum, drum cycle, switching valve, decoking, thermal cracking, block valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.6 Delayed Coker Unit body prose, pp. 4-50–4-51 and the Decoke Water/Steam Valve entries, p. 4-53 (PDF pp. 50-51, 53)"
relatedFigures: [ref-cmp-delayed-coking-unit-pfd]
relatedTopics: [ref-topic-furnace-temperature-control-philosophy]
used-by: []
notes: >
  The 4-way switching valve and coke-drum block valves are explicitly
  named as non-control valves in the source — flagged here since a
  future course citing this chapter should not mistake them for
  control-loop elements alongside the 27 numbered valves the PFD figure
  does catalogue. Cross-referenced to the furnace entry since this
  section's own furnace/feed-valve text is the same recurring
  coking/fail-open boilerplate indexed there, not re-authored here.
```

### 4.7 Hydrotreater (printed pp. 4-57 – 4-63)

Figure 4.7.1 "Hydrotreater Locations" is the consolidated
`ref-cmp-refinery-unit-location-map` record — the one instance where
*five* boxes (light naphtha, heavy naphtha, diesel, and gas oil
hydrotreaters, plus the standalone "Hydrotreater" box near the
hydrocracker) are all highlighted at once rather than a single box, since
this generic section covers every hydrotreater in the refinery — see
above.

```yaml
id: ref-cmp-hydrotreater-pfd
kind: figure
teaches: >
  A generic hydrotreater process flow diagram: unit feed and fuel valves
  into a charge heater, reactor hydrogen valve feeding the reactor, a
  recycle-gas compressor train (compressor suction and bypass valves, plus
  make-up hydrogen), separator/cooler/wash-water train (separator let-down,
  sour-water let-down valves), and a stripper train (recycle purge, light-
  ends, reflux, naphtha, and stripper bottoms valves) producing
  desulfurized gas oil and naphtha. 13 numbered valves — teaches the
  hydrogen-addition/recycle-compressor structure common to every named
  hydrotreater (light/heavy naphtha, diesel, gas oil) elsewhere in the
  book's own refinery map.
concept-tags: [hydrotreater, recycle gas compressor, reactor hydrogen valve, stripper, desulfurized gas oil, hydrodesulfurization, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.7.2 'Hydrotreater Process Flow Diagram' (drawing E1159), p. 4-59"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic, 13 numbered valves (#1–#13) keyed to the section's
  own application-review text.
```

```yaml
id: ref-topic-hydrotreating-reaction-mechanism
kind: topic
teaches: >
  The real chemistry behind hydrotreating, absent from the PFD figure's
  process-flow-level description: hydrogen reacts with sulfur, nitrogen,
  and certain metal contaminants in a heated catalyst bed, removing them
  from the feedstock, while olefins and aromatics are converted to
  saturated hydrocarbons — the mechanism that lets the process meet low-
  sulfur transportation-fuel specs and protect downstream catalysts from
  poisoning. Real stated reaction conditions: 300-450°C (500-750°F) at
  8-150 barg (120-2200 psig), over cobalt-molybdenum, nickel-molybdenum,
  or alumina catalyst. The reactor effluent's vapor (often amine-treated)
  recycles through a compressor back to the feed with makeup hydrogen
  added; the liquid goes to a stripper that sends H2S, ammonia, and
  light ends overhead, with desulfurized product as stripper bottoms and
  naphtha as overhead liquid, routed onward to the catalytic reformer,
  cat cracker, and hydrocracker.
concept-tags: [hydrotreating, hydrodesulfurization, catalyst, hydrogen, sulfur removal, cobalt-molybdenum, reaction conditions]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.7 Hydrotreater opening body prose, p. 4-57 (PDF p. 57) — before the numbered valve-application text"
relatedFigures: [ref-cmp-hydrotreater-pfd]
relatedTopics: []
used-by: []
notes: >
  `ref-cmp-hydrotreater-pfd`'s own `teaches` field names the recycle-gas
  compressor and stripper train by valve function but states none of the
  actual reaction chemistry, temperature/pressure ranges, or catalyst
  types — all read directly from the real prose here, not inferred.
```

### 4.8 Hydrocracker (printed pp. 4-64 – 4-71)

Figure 4.8.1 "Hydrocracker Location" is the consolidated
`ref-cmp-refinery-unit-location-map` record (Hydrocracker box
highlighted) — see above.

```yaml
id: ref-cmp-hydrocracker-pfd
kind: figure
teaches: >
  The hydrocracker process flow diagram: fresh feed and recycle-gas
  compressor train into a fixed-bed reactor section, high- and low-pressure
  separator trains, and a fractionation section (fractionator feed,
  reflux, and bottoms valves) producing light and heavy cracked products —
  the highest-severity conversion unit in the refinery map (heavy vacuum
  gas oil and other heavy streams cracked under hydrogen at high pressure
  into lighter, more valuable products), reflected in the diagram's valve
  count and multiple recycle loops.
concept-tags: [hydrocracker, fixed-bed reactor, recycle gas compressor, high pressure separator, fractionator, conversion unit, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.8.2 'Hydrocracker Process Flow Diagram' (drawing E1160), p. 4-66"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic with numbered valves keyed to the section's own
  application-review text (feed, recycle-gas compressor, reactor,
  separator, and fractionator valve functions).
```

### Topic entries — §4.7/§4.8 follow-up pass (2026-09-18): genuine mechanisms neither the PFD figure nor the existing hydrotreating-reaction topic states

```yaml
id: ref-topic-outgassing-vs-flashing-cavitation-distinction
kind: topic
teaches: >
  Outgassing as a real, third distinct two-phase-flow phenomenon, easily
  confused with flashing and cavitation but requiring different sizing:
  outgassing is a liquid with a SEPARATE, already-dissolved gas
  (different composition, e.g. crude oil with entrained hydrogen — "the
  best example... a bottle of soda") that separates on any pressure drop,
  vs. flashing/cavitation, where a SINGLE substance changes phase at its
  own vapor pressure. Because outgassing involves two different chemical
  components rather than one substance's phase change, the standard ANSI/
  ISA S75.01 and IEC 60534-2-1 liquid-sizing equations do not accurately
  model it — Emerson's own guidance is to contact a sales office for a
  dedicated "Outgassing Process Data Sheet" rather than size it as a
  standard liquid or flashing application. Four real diagnostic checks the
  source gives for catching a misdiagnosed outgassing application: (A) a
  spec sheet's vapor pressure suspiciously equal to inlet pressure
  (compensating for a downstream gas of different composition — an
  invalid assumption); (B) vapor pressure exceeding critical pressure
  (thermodynamically impossible, meaning the customer may be unknowingly
  describing outgassing); (C) inlet listed as liquid and outlet as
  liquid+gas; (D) a valve tagged "LC"/"LCV"/"LV" (a level-control
  application, where outgassing is common). Misdiagnosing outgassing as
  flashing and sizing/selecting trim accordingly causes real damage if
  the actual gas release happens before the valve throat.
concept-tags: [outgassing, flashing, cavitation, two-phase flow, ISA S75.01, IEC 60534-2-1, sizing equations, misdiagnosis]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.7 Hydrotreater / Separator Let-Down Valve, 'Outgassing' subsection and its Flow Media Phases table, pp. 4-60–4-61 (PDF pp. 60-61)"
relatedFigures: [ref-cmp-hydrotreater-pfd]
relatedTopics: []
used-by: []
notes: >
  Genuinely new — checked directly, "outgassing" appears nowhere else in
  this file before this pass, and the existing cavitation/flashing
  competency built for the derived competency map (`eng.destructive-flow.*`
  in Competency Map — Topic-Derived.md) covers cavitation and flashing but
  never outgassing as its own distinct phenomenon. This section straddles
  the §4.7/§4.8 boundary in the source (the Flow Media Phases table and
  outgassing discussion appear under the Hydrotreater section's own
  Separator Let-Down Valve item, immediately before the §4.8 divider) —
  catalogued under §4.7 by its real page location, cross-referenced from
  §4.8's own entries below since Hydrocracker item 3's Separator Let-Down
  Valve cites "see outgassing discussion previously".
```

```yaml
id: ref-topic-reactor-interbed-hydrogen-quench-mechanism
kind: topic
teaches: >
  Interbed hydrogen quench as the real mechanism controlling an exothermic
  catalytic reaction across a multi-bed reactor (hydrotreater or
  hydrocracker alike): cool recycled hydrogen is injected between
  catalyst beds specifically to control bed temperature, since the
  cracking/desulfurization reaction itself releases heat. Tight
  temperature control is required to maximize catalyst life — allowing
  temperatures to run too high accelerates coking (hydrocracker) or can
  trigger a real runaway reaction (explicitly named as the failure mode
  in the hydrocracker case, more severe than the hydrotreater's gradual
  coking). These valves are not required to move often, which creates its
  own real failure mode distinct from an actuator-force or sizing
  problem: infrequent movement lets iron oxide build up in the process
  line and around the valve, causing sticking; a sticking quench valve
  causes bed-temperature oscillation, which itself accelerates coking on
  the affected bed — a maintenance-driven failure path, not a
  process-design one. Separately, the hydrogen/oil ratio (set via the
  make-up and recycle-purge valves) is the throughput-vs-catalyst-life
  tradeoff underlying why quench control matters at all: too low a ratio
  builds excess coke and shortens reactor life; too high wastes unit
  throughput.
concept-tags: [interbed quench, exothermic reaction, runaway reaction, catalyst life, coking, hydrogen-oil ratio, valve sticking, iron oxide]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.8 Hydrocracker, items 4/5 'Reactor Hydrogen Quench Valve' and item 2 'Recycle Hydrogen Valve,' pp. 4-64–4-66 (PDF pp. 64-66)"
relatedFigures: [ref-cmp-hydrocracker-pfd]
relatedTopics: [ref-topic-hydrotreating-reaction-mechanism]
used-by: []
notes: >
  Genuinely new — the existing `ref-topic-hydrotreating-reaction-mechanism`
  (§4.7) covers the reaction chemistry, not interbed quench injection or
  the hydrogen/oil ratio tradeoff, and neither term appears in that entry
  or in `ref-cmp-hydrocracker-pfd`'s own `teaches`. The feed-valve
  (fail-open) and fuel-valve (fail-closed) furnace-protection language
  repeated verbatim in this section is NOT a new topic — it is the exact
  same mechanism `ref-cmp-furnace-pfd` already states and explicitly
  flags for reuse.
```

### 4.9 Catalytic Reformer Unit (printed pp. 4-72 – 4-77)

Figure 4.9.1 "Catalytic Reformer Unit Location" is the consolidated
`ref-cmp-refinery-unit-location-map` record (Catalytic Reformer box
highlighted) — see above.

```yaml
id: ref-cmp-fixed-bed-catalytic-reformer-pfd
kind: figure
teaches: >
  A fixed 4-bed catalytic reformer process flow diagram: naphtha feed
  through a series of alternating fixed catalyst beds and inter-stage
  fired reheaters, converting naphthenes and paraffins into higher-octane
  aromatics (reforming) while releasing hydrogen — the older, non-
  regenerating reformer configuration, contrasted directly against Figure
  4.9.3's continuous version on the facing/following page.
concept-tags: [catalytic reformer, fixed bed, reforming, aromatics, hydrogen production, octane improvement, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.9.2 'Fixed 4-Bed Catalytic Reformer Process Flow Diagram' (drawing E1163), p. 4-73"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic, numbered valves keyed to the section's application
  text. Companion to `ref-cmp-continuous-catalytic-reformer-pfd` (Figure
  4.9.3) — the two reformer configurations explicitly contrasted in the
  body text ("similar to the fixed bed version").
```

```yaml
id: ref-cmp-continuous-catalytic-reformer-pfd
kind: figure
teaches: >
  A continuous catalytic reformer (CCR) process flow diagram: the same
  reforming chemistry as the fixed-bed configuration, but with catalyst
  continuously withdrawn, regenerated (coke burned off), and returned to
  the reactor train rather than the whole unit being taken offline for
  regeneration — the modern, higher-uptime alternative directly contrasted
  with Figure 4.9.2's fixed-bed diagram in the same section.
concept-tags: [catalytic reformer, continuous catalyst regeneration, CCR, reforming, aromatics, hydrogen production, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.9.3 'Continuous Catalytic Reformer Process Flow Diagram' (drawing E1164), p. 4-74"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Line-art schematic, numbered valves keyed to the section's application text.
```

```yaml
id: ref-topic-catalytic-reforming-octane-and-regulatory-history
kind: topic
teaches: >
  The real historical and regulatory reasoning behind catalytic reforming
  that neither reformer PFD figure states: before catalytic reforming,
  lead was used as a gasoline octane additive; once lead was found to
  cause air pollution and became regulated, catalytic reformers were
  developed as the replacement — they convert long carbon chains into
  higher-octane aromatics the same way lead once did. The real tradeoff:
  a common aromatic product, benzene, is a known carcinogen and is itself
  now highly regulated, so modern reformers must be closely monitored
  either by controlling feed into the reformer or extracting benzene from
  the reformate afterward. Separately, the fixed-bed configuration's own
  evolution is stated as a real historical progression: original 3-reactor
  units needed all three beds running simultaneously for best conversion,
  requiring an annual shutdown to clean/regenerate catalyst; the 4-bed
  upgrade let refiners swap catalyst one reactor at a time, eliminating
  that annual shutdown.
concept-tags: [catalytic reformer, octane, benzene, lead additive, regulatory history, fixed bed, catalyst regeneration]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.9 Catalytic Reformer Unit opening body prose, pp. 4-72–4-73 (PDF pp. 72-73) — before the numbered valve-application text"
relatedFigures: [ref-cmp-fixed-bed-catalytic-reformer-pfd, ref-cmp-continuous-catalytic-reformer-pfd]
relatedTopics: []
used-by: []
notes: >
  Neither reformer figure's own `teaches` field states the lead/benzene
  regulatory history or the 3-bed-to-4-bed shutdown-elimination rationale
  — both figures describe the flow diagrams themselves (fixed vs.
  continuous catalyst handling), not why the technology exists or evolved
  this way.
```

### 4.10 Fluidized Catalytic Cracking (printed pp. 4-78 – 4-86)

Figure 4.10.1's real content (Fluid Catalytic Cracker box highlighted) is
the consolidated `ref-cmp-refinery-unit-location-map` record — see the
citation-error flag in that record's notes: the figure is printed here
captioned "Alkylation Unit Location," a confirmed copy-paste caption error
from §4.11's own correctly-captioned instance of the same map.

```yaml
id: ref-cmp-fcc-converter-section-pfd
kind: figure
teaches: >
  The FCC converter section process flow diagram: fresh feed cracked over
  a fluidized catalyst in the riser/reactor, spent catalyst stripped and
  sent to the regenerator (coke burned off in a fluidized combustion bed,
  regenerated catalyst returned to the riser) — the reactor/regenerator
  catalyst-circulation loop that is the FCC's own defining mechanism,
  distinct from the fixed- or continuous-bed catalyst handling shown for
  the catalytic reformer in §4.9.
concept-tags: [fluid catalytic cracker, FCC, riser reactor, catalyst regenerator, fluidized catalyst, coke burn, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.10.2 'FCC Converter Section Process Flow Diagram' (drawing E1205-1), p. 4-80"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Line-art schematic, numbered valves keyed to the section's application text.
```

```yaml
id: ref-cmp-fcc-fractionation-section
kind: figure
teaches: >
  The FCC fractionation section: converter-section vapor product routed
  into a main fractionator (analogous in function to the crude
  fractionator of §4.4, but separating cracked-product cuts rather than
  raw crude cuts) with its own pump-around, reflux, and side-draw stripper
  valve functions.
concept-tags: [fluid catalytic cracker, FCC, main fractionator, pump-around valve, side-draw stripper, cracked products]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.10.3 'FCC Fractionation Section' (drawing E1206), p. 4-82"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Line-art schematic, numbered valves keyed to the section's application text.
```

```yaml
id: ref-cmp-fcc-vapor-recovery-section
kind: figure
teaches: >
  The FCC vapor-recovery section: light vapor from the fractionation
  section's overhead compressed and separated into LPG, dry gas, and
  gasoline-range liquid streams — analogous in purpose to §4.3's Gas
  Plant, here recovering the lighter components specifically produced by
  FCC cracking rather than by crude distillation.
concept-tags: [fluid catalytic cracker, FCC, vapor recovery, LPG recovery, wet gas compressor, debutanizer]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.10.4 'FCC Vapor Recovery Section' (drawing E1207), p. 4-85"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic, numbered valves keyed to the section's application
  text. Closes the FCC section's three-part converter/fractionation/
  vapor-recovery diagram sequence.
```

### Topic entries — §4.10 follow-up pass (2026-09-18): genuine mechanisms neither the three FCC figures nor any other entry states

```yaml
id: ref-topic-fcc-reactor-regenerator-pressure-balance-safety
kind: topic
teaches: >
  A real safety-critical failure chain specific to the FCC's reactor/
  regenerator catalyst-circulation loop, beyond what
  `ref-cmp-fcc-converter-section-pfd`'s own `teaches` states (that entry
  covers the normal circulation path — feed cracked, catalyst stripped,
  regenerated, returned — not what happens when it goes wrong): the
  Inlet Air to Regenerator valve's job is maintaining the pressure balance
  between the reactor and the regenerator. Poor performance causes
  pressure swings that can let reactor products flow INTO the regenerator,
  which can cause catalyst flow reversal — a real mechanical-damage risk
  to the vessel or internal components, not merely a lost-efficiency
  problem. The companion Inlet Air Vent to Atmosphere valve (the "snort
  valve") protects the separate inlet air compressor from surge and "must
  provide fast, accurate control to maintain the pressure balance between
  the reactor and regenerator" during any process upset — the same
  reactor/regenerator balance concern from the compressor-protection side.
concept-tags: [FCC, reactor, regenerator, pressure balance, catalyst flow reversal, mechanical damage, surge protection]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.10 FCC Converter Section, items 4 'Inlet Air to Regenerator' and 5 'Inlet Air Vent to Atmosphere,' p. 4-81 (PDF p. 81)"
relatedFigures: [ref-cmp-fcc-converter-section-pfd]
relatedTopics: []
used-by: []
notes: >
  Genuinely new — checked `ref-cmp-fcc-converter-section-pfd`'s own
  `teaches` field directly; it states the normal catalyst-circulation
  mechanism but not this specific pressure-imbalance failure chain or the
  catalyst-flow-reversal consequence.
```

```yaml
id: ref-topic-fcc-operating-mode-tradeoffs
kind: topic
teaches: >
  An FCC unit is deliberately run in one of three operating modes, each a
  real temperature/catalyst-ratio tradeoff, not a fixed design choice —
  absent from all three FCC figures' `teaches` fields: Maximum Gasoline
  Mode (the most common; intermediate cracking temperature 510-540°C/
  950-1005°F with a high catalyst/oil ratio and short reaction time,
  relying on high conversion in the riser); Maximum Distillate Mode
  (reduced severity, below 510°C/950°F, with a lower catalyst/oil ratio —
  deliberately reduces first-pass conversion so light cycle oil isn't
  overcracked, at the cost of requiring heavy-cycle-oil recycle from the
  fractionator since more feedstock goes unconverted); Maximum Light
  Olefin Mode (raised above 540°C/1005°F for higher C3/C4 propylene/
  butylene yield and improved octane, at the real cost of hydrogen-
  deficient liquid products and overcracking a fair amount of gasoline
  down to C3/C4). Across all three modes, increasing severity
  (temperature) always increases coke and light-ends production — the
  one directional relationship that holds regardless of which mode is
  chosen.
concept-tags: [FCC, operating mode, catalyst-to-oil ratio, cracking severity, maximum gasoline, maximum distillate, maximum light olefin]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.10 Fluidized Catalytic Cracking, 'Maximum Gasoline/Distillate/Light Olefin Mode' subsections, p. 4-79 (PDF p. 79)"
relatedFigures: [ref-cmp-fcc-converter-section-pfd]
relatedTopics: []
used-by: []
notes: >
  Genuinely new — this is process-operations content (why a refiner picks
  one mode over another) rather than valve-selection content, but it is
  real explanatory prose beyond any figure's caption and grounds the
  "erosive nature of the fluids" and cavitation-protection language
  repeated throughout this section's individual valve write-ups (higher
  severity modes produce more coke/entrained catalyst, directly driving
  the anti-cavitation-trim and hardened-trim recommendations seen on
  nearly every FCC valve in this section).
```

### 4.11 Alkylation Unit (printed pp. 4-87 – 4-94)

Figure 4.11.1 "Alkylation Unit Location" is the consolidated
`ref-cmp-refinery-unit-location-map` record (Alkylation box highlighted,
correctly captioned this time) — see above.

```yaml
id: ref-cmp-hf-alkylation-pfd
kind: figure
teaches: >
  A hydrofluoric-acid (HF) alkylation process flow diagram: chilled
  isobutane and olefin feed into an acid reactor, acid settler/accumulator/
  rerun-column acid-recycle loop, and a depropanizer/deisobutanizer/
  debutanizer distillation train (with an acidic-propane valve and propane
  caustic treater) producing alkylate product plus recovered propane and
  butane. 18 numbered valves — the acid-catalyzed alkylation route,
  contrasted directly against Figure 4.11.3's sulfuric-acid route in the
  same section.
concept-tags: [alkylation, hydrofluoric acid, HF alky, acid settler, deisobutanizer, debutanizer, alkylate, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.11.2 'Hydrofluoric Acid Alkylation Process Flow Diagram' (drawing E1550), p. 4-89"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Line-art schematic, 18 numbered valves (#1–#18) keyed to the section's own application-review text.
```

```yaml
id: ref-cmp-sulfuric-acid-alkylation-pfd
kind: figure
teaches: >
  A sulfuric-acid alkylation process flow diagram: olefin/isobutane feed
  chilled via an economizer/compressor/anti-surge loop into a cascade
  (multi-stage) acid reactor, acid settler with caustic and water wash
  trains, and a deisobutanizer/debutanizer distillation train with steam
  reboilers producing alkylate. 14 numbered valves — the alternative acid
  route to Figure 4.11.2's HF process, differing chiefly in reactor style
  (cascade reactor vs. HF's acid settler/rerun-column loop) and refrigerant
  handling (an economizer/compressor cooling loop here vs. auto-
  refrigeration there).
concept-tags: [alkylation, sulfuric acid, cascade reactor, caustic wash, deisobutanizer, debutanizer, alkylate, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.11.3 'Sulfuric Acid Alkylation Process Flow Diagram' (drawing E1166), p. 4-93"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Line-art schematic, 14 numbered valves (#1–#14) keyed to the section's own application-review text.
```

```yaml
id: ref-topic-alkylation-acid-catalyst-rationale
kind: topic
teaches: >
  Why alkylation exists and why it uses a hazardous liquid acid catalyst
  at all — content neither the HF nor sulfuric-acid PFD figure states:
  alkylation converts light olefins (propylene or butylene) from an FCC or
  delayed coker into alkylate, a gasoline blending component valued for
  combining high octane with low Reid vapor pressure (branched-chain
  isoheptane/isooctane paraffins). Alkylation is acid-catalyzed rather
  than catalyzed by the solid catalysts used in most other refining
  processes; the source states this liquid acid catalyst is efficient but
  hazardous, and that many attempts over the years to substitute a solid
  acid catalyst have resulted in reduced conversion and catalyst
  deactivation — the real reason both process routes in this section
  (hydrofluoric acid and sulfuric acid) still use a liquid catalyst
  despite the safety tradeoff.
concept-tags: [alkylation, alkylate, octane, Reid vapor pressure, liquid acid catalyst, hydrofluoric acid, sulfuric acid]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.11 Alkylation Unit opening body prose, p. 4-87 (PDF p. 87) — before the two acid-route PFD figures"
relatedFigures: [ref-cmp-hf-alkylation-pfd, ref-cmp-sulfuric-acid-alkylation-pfd]
relatedTopics: []
used-by: []
notes: >
  Both PFD figures' own `teaches` fields describe and contrast the two
  acid routes' hardware; neither states why alkylate is valuable or why a
  hazardous liquid catalyst is used at all instead of a solid one — that
  reasoning is stated once in the section's shared opening prose, ahead
  of the acid-specific diagrams.
```

### 4.12 Amine Unit (printed pp. 4-95 – 4-99)

Figure 4.12.1 "Amine Unit Location" is the consolidated
`ref-cmp-refinery-unit-location-map` record (Amine Unit box highlighted)
— see above.

```yaml
id: ref-cmp-amine-unit-pfd
kind: figure
teaches: >
  The amine-unit process flow diagram: sour gas through a sour-gas valve
  into an absorber contacting lean amine (scrubbed gas valve on the clean
  overhead); rich amine let down through a rich-amine letdown valve to a
  flash tank (flashed-gas and flash-tank-bottoms valves), then to an amine
  regenerator (off-gas, steam reboiler, and amine-storage/make-up valves)
  which strips the acid gas back out and returns lean amine to the
  absorber — the acid-gas (H₂S/CO₂) removal loop that feeds Sulfur Recovery
  (§4.13) downstream.
concept-tags: [amine unit, amine treating, absorber, amine regenerator, lean amine, rich amine, acid gas removal, hydrogen sulfide, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.12.2 'Amine Unit Process Flow Diagram' (drawing E1546-1), p. 4-96"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic, 10 numbered valves (#1–#10) keyed to the section's
  own "1. Sour Gas Valve" through "10. Steam Reboiler Valve" text.
```

### Topic entry — §4.12 follow-up pass (2026-09-18)

```yaml
id: ref-topic-amine-unit-architecture-and-scrubber-flooding
kind: topic
teaches: >
  Two things `ref-cmp-amine-unit-pfd`'s own `teaches` doesn't state. First,
  "amine unit" is misleading as a name: it is rarely a standalone unit —
  most process units have their own small amine scrubber sharing a
  central regenerator with several other units' scrubbers, not one
  plant-wide amine system. Second, a real failure mode distinct from the
  absorber/regenerator cycle itself: a scrubber behaves like a
  distillation column for loading purposes (too much vapor or liquid
  traffic floods it), but the flooding consequence here is different from
  `ref-topic-distillation-column-flooding-and-reflux-mechanics`'s
  purity-loss framing — a flooded amine scrubber stops completely
  stripping sulfur compounds from the sour gas, a real emissions/
  processing failure, not merely a purity dip. A sticking lean-amine
  valve on a scrubber already operated close to its loading limit is
  specifically named as the real trigger.
concept-tags: [amine unit, amine scrubber, decentralized architecture, central regenerator, flooding, sulfur stripping failure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.12 Amine Unit opening prose (p. 4-94) and item 4 'Lean Amine Valve' (p. 4-98), PDF pp. 94, 98"
relatedFigures: [ref-cmp-amine-unit-pfd]
relatedTopics: [ref-topic-distillation-column-flooding-and-reflux-mechanics]
used-by: []
notes: Genuinely new — checked the figure's own teaches field directly; it states the cycle mechanism, not this architecture note or the flooding-consequence distinction.
```

### 4.13 Sulfur Recovery Unit (printed pp. 4-100 – 4-102)

Figure 4.13.1 "Sulfur Recovery Unit Location" is the consolidated
`ref-cmp-refinery-unit-location-map` record (Sulfur Recovery box
highlighted) — see above.

```yaml
id: ref-cmp-sulfur-recovery-unit-pfd
kind: figure
teaches: >
  The sulfur recovery unit (Claus process) diagram: acid gas from the
  amine unit and sour gas from sour-water strippers, fuel gas, oxygen, and
  main/trim air valves feed a thermal reactor; combustion products cool
  through a waste-heat boiler/condenser and three catalytic-converter/
  reheater stages (each with its own reheater steam valve), with recovered
  elemental sulfur run down to a sulfur pit through a liquid-sulfur product
  valve, and a final condenser sending tail gas onward to an incinerator or
  tail-gas treating unit — the direct downstream consumer of §4.12's amine
  unit acid-gas stream.
concept-tags: [sulfur recovery unit, SRU, Claus process, thermal reactor, catalytic converter, reheater, sulfur pit, acid gas, process flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.13.2 'Sulfur Recovery Unit Process Flow Diagram' (drawing E1549), p. 4-102"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic, 10 numbered valves (#1–#10, with #7/#8/#9 grouped as
  the three reheater steam valves) keyed to the section's own application
  text ("7., 8., 9. Reheater Steam Valves").
```

### Topic entry — §4.13 follow-up pass (2026-09-18)

```yaml
id: ref-topic-sru-regulatory-driver-and-redundancy
kind: topic
teaches: >
  Why an SRU is production-limiting despite being viewed internally as an
  "overhead"/utility unit — real regulatory and redundancy content absent
  from `ref-cmp-sulfur-recovery-unit-pfd`'s own `teaches`: US crude sulfur
  content has risen from ~0.9 wt% to 1.4 wt% while allowed sulfur in
  transportation fuels has fallen from 450 ppm to 15 ppm (headed to 10 ppm
  by 2020) — a widening gap the SRU has to close. Because an SRU shutdown
  would force the whole refinery to cut production rather than exceed
  processing capacity for acid gas, most refineries run multiple SRUs so
  no single shutdown stops the plant, and SRU capacity itself is a real
  constraint on what sulfur-content crudes a refinery can even process —
  "a small incremental gain in capacity... can yield significant profit."
  Separately, the main air valve and trim air valve have a real control
  relationship neither figure states: the main valve sets bulk air flow
  and is adjusted only rarely, specifically to keep the trim valve
  centered in its own control range — the trim valve does the fine
  control, the main valve exists so the trim valve doesn't run out of
  range.
concept-tags: [sulfur recovery unit, SRU, regulatory driver, sulfur content trend, redundancy, main air valve, trim air valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.13 Sulfur Recovery Unit opening prose and Application Review, pp. 4-100–4-101; item 5 'Main Air Valve,' p. 4-101 (PDF pp. 100-101)"
relatedFigures: [ref-cmp-sulfur-recovery-unit-pfd]
relatedTopics: []
used-by: []
notes: Genuinely new — the figure's own teaches states the Claus reaction mechanism in full already; this entry supplies the regulatory/economic "why it matters" and the main/trim air control relationship, neither of which the figure states.
```

### 4.14 Pressure Swing Adsorption (printed pp. 4-103 – 4-106)

Figure 4.14.1 "Pressure Swing Adsorption Unit Location" is the
consolidated `ref-cmp-refinery-unit-location-map` record (Pressure Swing
Adsorption box highlighted) — see above.

```yaml
id: ref-cmp-psa-basic-flow-scheme
kind: figure
teaches: >
  The PSA process at its simplest, black-box level: constant-flow,
  constant-(high)-pressure feed gas into a "PSA Unit" block (4–20 adsorber
  vessels plus a valve-skid control system), producing constant-flow,
  constant-(high)-pressure, high-purity (>99.9 vol%) hydrogen product on
  one side and constant-flow, constant-(low)-pressure, constant-
  composition off-gas (via a mixing drum) on the other — the conceptual
  frame the section's later multi-bed diagrams (Figures 4.14.3, 4.14.4)
  fill in with real valve/bed detail.
concept-tags: [pressure swing adsorption, PSA, hydrogen purification, adsorber vessel, off-gas, mixing drum]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.14.2 'PSA Basic Flow Scheme' (drawing E1154), p. 4-104"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Small block diagram (feed gas in, PSA Unit box, hydrogen and off-gas
  out) — no valve numbers, a conceptual companion to the two detailed
  valve diagrams that follow on the same and next page.
```

```yaml
id: ref-cmp-psa-four-bed-color-coded-diagram
kind: figure
teaches: >
  A four-bed PSA process flow diagram using colour-coded valve *function*
  groups rather than numbers: orange "Product Repressurization Control
  Valve," green "Purge Supply Control Valve," blue "Dump/Purge Control
  Valve," and purple "Feed Gas On/Off Valve" bands run across all four
  adsorber beds — teaches the PSA cycle by valve FUNCTION across the whole
  skid, the complementary view to Figure 4.14.4's per-valve numbering
  scheme on the identical bed layout.
concept-tags: [pressure swing adsorption, PSA, adsorber bed, feed gas valve, purge valve, repressurization valve, dump valve, valve function grouping]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.14.3 'Four Bed PSA Process Flow Diagram' (drawing X0665-1), p. 4-104"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Colour-blocked diagram (4 beds × 4 valve-function rows, each row its own
  colour) — the drawing number X0665-1 is legible directly on the
  rendered page but is not extractable from the source's underlying text
  layer (embedded as part of the raster/vector art, not selectable text) —
  confirmed by direct visual inspection, flagged here since it could not
  be cross-checked by the usual full-text sweep. No printed field callouts
  beyond the four colour-keyed function labels themselves.
```

```yaml
id: ref-cmp-psa-four-bed-valve-numbered-diagram
kind: figure
teaches: >
  The same four-bed PSA layout as Figure 4.14.3, redrawn with literal valve
  numbers (1A–1D through 4A–4D, twenty valves total) instead of colour-
  function bands — feed gas on/off valves (1A–1D), dump/purge valves
  (2A–2D), purge-supply valves (3A–3D), and equalization valves (4A–4D) —
  keyed directly to the section's own "1A–1D. Feed Gas On/Off Valves"
  through "4A–4D. Equalization Valves" numbered application text, plus a
  fifth un-shown group (5A–5D Product/Repressurization Valves) covered in
  the same text on the following page.
concept-tags: [pressure swing adsorption, PSA, adsorber bed, feed gas on-off valve, equalization valve, purge valve, dump valve, bi-directional flow]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.14.4 'Four Bed PSA Process Flow Diagram with valve numbers' (drawing E1548), p. 4-106"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic labelled "FOUR BED PSA SCHEMATIC" — the numbering
  scheme (letter suffix per bed, A–D) is a real, distinct convention from
  every other numbered-valve diagram in the chapter (which use a flat
  #1, #2, #3... sequence); flagged here so a future course citing this
  figure preserves the letter-suffix scheme rather than "correcting" it to
  match the chapter's more common flat numbering.
```

```yaml
id: ref-cmp-psa-five-step-cycle-diagrams
kind: figure
teaches: >
  Five small, unnumbered step diagrams walking one complete PSA
  pressure-swing cycle on a single adsorber vessel, in sequence:
  Adsorption (feed in at high pressure, product out, impurities
  selectively adsorbed), Co-current Depressurization (recovers void-space
  hydrogen into other beds' repressurization), Countercurrent
  Depressurization (blows down remaining impurities to the off-gas
  stream), Purge at Low Pressure (a hydrogen-rich stream from another
  adsorber's co-current step cleans the bed, impurities to off-gas), and
  Repressurization (hydrogen-rich gas from a depressurizing adsorber plus
  pure hydrogen product repressurizes the bed for its next adsorption
  step) — teaches the mechanism the two multi-bed diagrams above only show
  in finished, all-beds-at-once form.
concept-tags: [pressure swing adsorption, PSA cycle, adsorption, depressurization, purge, repressurization, adsorber bed]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: >
      Unnumbered diagrams, p. 4-105 — five sequential single-bed step
      diagrams under their own prose headers "Adsorption (Step 1 to 2)"
      (drawing E1149), "Co-current Depressurization (Step 2 to 3)"
      (drawing E1150), "Countercurrent Depressurization (Step 3 to 4)"
      (drawing E1151), "Purge at Low Pressure (Step 4 to 5)" (drawing
      E1152), and "Repressurization (Step 5 to 1)" (drawing E1153).
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Bundled as one record per the "several distinct, separately-headed
  things that the source itself treats as one continuous procedure"
  precedent — these five diagrams are explicitly the five numbered steps
  of one PSA cycle (the section's own prose: "a complete pressure-swing
  cycle consists of the following five basic steps"), not five unrelated
  figures that happen to be adjacent. None carries a "Figure 4.14.X"
  caption or number — catalogued via the "unnumbered-but-real diagrams"
  edge case, five synthetic locators bundled under one id rather than one
  per diagram, since splitting them would misrepresent how tightly the
  source itself binds them together as a single teaching sequence.
```

### Topic entries — §4.14 follow-up pass (2026-09-18): the real, confirmed gap

**This is the section the derived competency map flagged as `app.refining.pressure-swing-adsorption` (5 figures, zero topics) and Franz asked to be re-read exhaustively rather than re-assumed complete.** Direct finding, checked against all four existing PSA figures' own `teaches` fields before writing anything: the 5-step cycle MECHANISM is already captured in real depth inside `ref-cmp-psa-five-step-cycle-diagrams` — the original figures-pass author read that prose carefully. What genuinely never got captured anywhere, in a figure or a topic, is the valve-selection-critical content: why PSA valves are treated as a uniquely demanding service, and the installation's own architecture. That is a real gap, and it is fixed here — the earlier "no topic anywhere" characterization undersold what the original pass got right, but it was correct that a real gap existed underneath it.

```yaml
id: ref-topic-psa-valve-service-demands
kind: topic
teaches: >
  Why PSA is treated as its own demanding valve-selection category, not a
  standard on/off or throttling service — real content absent from all
  four existing PSA figures' `teaches` fields: because the process
  alternately pressurizes and depressurizes large adsorber vessels in a
  complex repeating sequence, PSA valves see high cycle counts (stroking
  as often as once every three minutes in the source's own stated
  example), bi-directional flow, and must achieve tight bi-directional
  shutoff — three real, simultaneous demands most other refinery valve
  services don't combine. The failure consequence is specific and severe:
  valve leakage lets contamination cross from one adsorber bed to
  another, directly compromising the purity of the hydrogen product —
  "improper selection of control valves can be the limiting factor in
  achieving PSA purity and longevity requirements," not merely a
  maintenance inconvenience. Separately, real business framing: effective
  hydrogen management has improved refinery profitability "by millions of
  dollars annually," partly achieved by extending PSA control-valve
  maintenance intervals using modern purpose-built valve technology
  rather than accepting frequent PSA-driven maintenance as a fixed cost.
concept-tags: [pressure swing adsorption, PSA, valve cycling, bi-directional shutoff, contamination, hydrogen purity, maintenance interval, stroking speed]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.14 Pressure Swing Adsorption, opening prose and 'PSA Control Valve Application Review,' pp. 4-104–4-105 (PDF pp. 104-105)"
relatedFigures: [ref-cmp-psa-basic-flow-scheme, ref-cmp-psa-five-step-cycle-diagrams]
relatedTopics: []
used-by: []
notes: >
  Genuinely new — checked directly against all four PSA figures' own
  `teaches` fields (`ref-cmp-psa-basic-flow-scheme`,
  `ref-cmp-psa-four-bed-color-coded-diagram`,
  `ref-cmp-psa-four-bed-valve-numbered-diagram`,
  `ref-cmp-psa-five-step-cycle-diagrams`) before writing this. None states
  the cycling/bi-directional-shutoff/contamination-consequence content,
  even though `ref-cmp-psa-five-step-cycle-diagrams` already covers the
  step-by-step cycle mechanism itself in real depth.
```

```yaml
id: ref-topic-psa-installation-architecture-and-feed-valve-role
kind: topic
teaches: >
  A real PSA installation's four major physical components, stated
  nowhere in any figure's `teaches`: (1) adsorber vessels (carbon steel,
  filled with adsorbent), (2) a valve-and-piping skid (all valves and
  instrumentation, shop-fabricated and tested before shipping), (3) a
  control system (normally in a remote control room, running the cycle
  logic), and (4) a mixing drum specifically to minimize composition
  variation in the off-gas stream. The whole valve/piping skid is
  typically shop-mounted on a steel frame and shipped to site as one or
  more pre-tested pieces — a packaged-system delivery approach distinct
  from field-erected refinery units elsewhere in this chapter. Separately,
  a real functional distinction the numbered/color-coded valve diagrams
  imply but never state outright: the Feed Valves (1A-1D) are specified
  as fully-open-or-fully-closed only — "throttling control is not
  important" for them — unlike the Dump/Purge, Providing Purge, and
  Product/Repressurization valve groups, whose jobs require precise flow
  management through the cycle; for a feed valve what matters instead is
  that it reliably opens or closes exactly when the cycle sequence
  demands it.
concept-tags: [pressure swing adsorption, PSA, adsorber vessel, valve skid, packaged system, mixing drum, feed valve, on-off valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.14 Pressure Swing Adsorption, 'PSA Process Overview' and item '1A-1D. Feed Valves,' pp. 4-104–4-105 (PDF pp. 104-105)"
relatedFigures: [ref-cmp-psa-four-bed-valve-numbered-diagram]
relatedTopics: [ref-topic-psa-valve-service-demands]
used-by: []
notes: >
  Genuinely new — `ref-cmp-psa-four-bed-valve-numbered-diagram`'s own
  `teaches` names the four valve groups shown in that figure but does not
  state the installation's four physical components or the feed-valve
  on/off-only functional rationale; checked directly before writing.
```

### 4.15 Blending Unit (printed pp. 4-107 – 4-108)

Figure 4.15.1 "Blending Unit Locations" is the consolidated
`ref-cmp-refinery-unit-location-map` record (all three blending boxes —
Gasoline, Distillate, and Residual Blending — highlighted at once) — see
above.

```yaml
id: ref-cmp-blending-unit-pfd
kind: figure
teaches: >
  A generic product-blending process flow diagram: multiple component
  storage tanks feeding through individually-valved component flow
  controllers into a blend header, tracked against a calculated per-
  component recipe so the finished blend meets target specification (e.g.
  octane grade, vapor pressure) by the end of the batch — teaches why
  blender control valves matter less for absolute accuracy at any instant
  than for reliable, repeatable stroke behavior over the whole blend (a
  sticking valve corrupts the blend recipe silently if unnoticed).
concept-tags: [blending unit, gasoline blending, component flow controller, blend recipe, octane grade, vapor pressure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 4.15.2 'Blending Unit Process Flow Diagram' (drawing E0935), p. 4-108"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Line-art schematic (component storage tanks, component valves, blend
  header) — closes both §4.15 and Chapter 4 itself; Chapter 5
  "Terminology" begins on the same PDF page (109) immediately after.
```

### Topic entry — §4.15 follow-up pass (2026-09-18)

```yaml
id: ref-topic-blending-giveaway-economics-and-lineup-valves
kind: topic
teaches: >
  Two things beyond `ref-cmp-blending-unit-pfd`'s own recipe/sticking-
  valve mechanism. First, real stated economics for poor blend control:
  product-specification "giveaway" (blending richer than the spec strictly
  requires, to stay safely on-spec) can cost $0.05-$0.10 per barrel of
  gasoline — $150-300 million per year for every 10,000 barrels/day of
  gasoline a refinery produces, the source's own worked example at 20,000
  bpd. Second, a genuinely distinct valve type from the flow-controlled
  component valves: lineup valves, which simply connect or disconnect
  storage tanks (manually or automatically), with a real, severe, and
  different failure mode — a lineup valve left in the wrong position can
  ruin an entire tank (or multiple tanks) of finished product, a
  binary/positional risk unrelated to the component valves' continuous
  flow-accuracy concern.
concept-tags: [blending, giveaway economics, lineup valve, tank connection, product specification]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "§4.15 Blending Unit, closing prose before 'Blending Unit Application Review,' p. 4-108 (PDF p. 108)"
relatedFigures: [ref-cmp-blending-unit-pfd]
relatedTopics: []
used-by: []
notes: Genuinely new — checked the figure's own teaches field directly; it states the recipe/sticking-valve mechanism, not the giveaway economics or lineup valves, which are a distinct valve type never mentioned elsewhere in the figure or its notes.
```

## Open Items

- **`kind: topic` pass added 2026-09-18.** This is by far the largest
  chapter in any of the four Fisher Sourcebooks (79 pages, 15 topically
  disjoint application-review sections), and its figures already absorb
  an unusual amount of surrounding valve-application prose into their own
  `teaches` fields — reducing, but not eliminating, the real conceptual
  gap this pass targets. Read the real body prose directly for every
  section and authored 9 new `ref-topic-*` entries for concepts genuinely
  absent from any figure's own `teaches` field: furnace temperature-control
  philosophy/coking (§4.1), distillation-column flooding and reflux
  mechanics (§4.2), gas-plant light-ends economics and fugitive-emissions
  packing tradeoff (§4.3), the CDU's role and real product cuts (§4.4),
  pump-around loop mechanism (§4.4, applies to §4.5 too), the delayed
  coker's real drum-cycle procedure (§4.6), hydrotreating reaction
  chemistry (§4.7), catalytic reforming's octane/benzene regulatory
  history (§4.9), and alkylation's liquid-acid-catalyst rationale (§4.11).
  Each cross-references the figure(s) it complements rather than
  restating them.
- **Follow-up pass completed (2026-09-18) — the honest scope disclosure
  above was correct to flag itself as incomplete.** Franz asked, via the
  derived Competency Map's `app.refining.pressure-swing-adsorption`
  finding (5 figures, zero topics), for the seven spot-checked sections
  to actually be read exhaustively rather than re-assumed complete. They
  now have been, page-by-page, the same standard as §4.1-4.4/4.6/4.7/4.9/
  4.11. Result, per section:
  - **§4.5 (Vacuum Crude Column):** one real gap found and fixed —
    steam-stripping as a distinct mechanism from reflux/reboil
    (`ref-topic-steam-stripping-mechanism`). The feed/fuel-valve fail-
    open/fail-closed logic repeated in this section's prose is confirmed
    NOT a new gap — it is the identical mechanism `ref-cmp-furnace-pfd`
    already states and explicitly flags for reuse.
  - **§4.8 (Hydrocracker, plus the outgassing discussion that actually
    sits at the end of §4.7):** two real gaps found and fixed — outgassing
    as a genuine third distinct two-phase-flow phenomenon requiring its
    own sizing approach, easily confused with flashing/cavitation
    (`ref-topic-outgassing-vs-flashing-cavitation-distinction`), and
    interbed hydrogen quench as the real reactor-temperature-control
    mechanism plus the hydrogen/oil ratio tradeoff
    (`ref-topic-reactor-interbed-hydrogen-quench-mechanism`).
  - **§4.10 (FCC):** confirmed the reactor/regenerator catalyst-
    circulation mechanism IS already captured in
    `ref-cmp-fcc-converter-section-pfd`'s own `teaches` — but two real
    gaps sat beside it: the reactor/regenerator pressure-balance safety
    failure chain (catalyst flow reversal, mechanical damage risk —
    `ref-topic-fcc-reactor-regenerator-pressure-balance-safety`) and the
    three real operating-mode tradeoffs, max gasoline/distillate/light-
    olefin (`ref-topic-fcc-operating-mode-tradeoffs`).
  - **§4.12 (Amine Unit):** confirmed the absorption/regeneration cycle IS
    already captured in `ref-cmp-amine-unit-pfd`'s own `teaches` — one
    real gap found: the decentralized-scrubber/shared-regenerator
    architecture and the scrubber-flooding failure mode
    (`ref-topic-amine-unit-architecture-and-scrubber-flooding`).
  - **§4.13 (Sulfur Recovery):** confirmed the Claus reaction mechanism IS
    already captured in `ref-cmp-sulfur-recovery-unit-pfd`'s own
    `teaches` — one real gap found: the regulatory/redundancy economics
    and the main-air/trim-air control relationship
    (`ref-topic-sru-regulatory-driver-and-redundancy`).
  - **§4.14 (Pressure Swing Adsorption) — the specifically reported gap:**
    confirmed the 5-step cycle mechanism IS already captured in real
    depth in `ref-cmp-psa-five-step-cycle-diagrams`'s own `teaches` — the
    original figures-pass author read that prose carefully. The real,
    confirmed gap was the valve-selection-critical content sitting beside
    it: why PSA valves face uniquely demanding cycling/bi-directional-
    shutoff requirements and what leakage actually costs
    (`ref-topic-psa-valve-service-demands`), and the installation's own
    four-component architecture plus the feed-valve on/off-only
    functional rationale
    (`ref-topic-psa-installation-architecture-and-feed-valve-role`). Two
    new topics, not zero — the competency map's "real gap, no topic
    anywhere" characterization is now out of date; see that file's own
    update.
  - **§4.15 (Blending):** confirmed the recipe/sticking-valve mechanism IS
    already captured in `ref-cmp-blending-unit-pfd`'s own `teaches` — one
    real gap found: the real giveaway-cost economics and lineup valves as
    a genuinely distinct valve type from the flow-controlled component
    valves (`ref-topic-blending-giveaway-economics-and-lineup-valves`).
  **Net finding: the original spot-check judgment call was right about
  WHERE the depth already existed (inside unusually thorough figure
  `teaches` fields) but wrong to treat that as equivalent to "nothing left
  to find" — 10 new topic entries came out of actually reading all seven
  sections, at least one new entry in every single one of the seven
  (none came up genuinely empty).** All 10:
  `ref-topic-steam-stripping-mechanism`,
  `ref-topic-outgassing-vs-flashing-cavitation-distinction`,
  `ref-topic-reactor-interbed-hydrogen-quench-mechanism`,
  `ref-topic-fcc-reactor-regenerator-pressure-balance-safety`,
  `ref-topic-fcc-operating-mode-tradeoffs`,
  `ref-topic-amine-unit-architecture-and-scrubber-flooding`,
  `ref-topic-sru-regulatory-driver-and-redundancy`,
  `ref-topic-psa-valve-service-demands`,
  `ref-topic-psa-installation-architecture-and-feed-valve-role`,
  `ref-topic-blending-giveaway-economics-and-lineup-valves`.
- **Reference-data-only, confirmed not padded.** Every section's "Typical
  Process Conditions" / "Typical Control Valve Selection" bulleted boxes
  (fluid, P1/P2, T, Q, valve size/type/material recommendations) are
  structured spec-sheet reference data, not conceptual prose — correctly
  excluded from `kind: topic` indexing, the same treatment already applied
  to numbered tables elsewhere in this project. There are dozens of these
  boxes across the chapter's 15 sections; none were catalogued
  individually.
- **Integrity check, run directly:** 38 total ids in this file after the
  pass (29 figures + 9 topics), all unique, 38/38 yaml fences balanced.
  Checked every new id and every `relatedFigures`/`relatedTopics` citation
  against the whole vault's Subject-Matter Index namespace (`grep` across every
  `Subject-Matter Index*.md` file) — all resolve to real, existing records; no
  collisions found with any other sourcebook, the Control Valve Handbook,
  or this book's own Chapters 1–3.
- **Chapter boundary confirmed directly**: PDF p.30 (divider, 15-section
  mini TOC) through PDF p.108 (printed 4-108, Figure 4.15.2 and §4.15's own
  valve text both closing on this page). PDF p.109 rendered and confirmed
  to be the Chapter 5 divider ("5 - Terminology" header, its own 5-section
  mini TOC). Zero page offset throughout (matches Chapters 1–3's own
  finding).
- **Full coverage accounting**: 40 real figure instances confirmed across
  the chapter's own numbering (Figures 4.1.1–4.1.2 through 4.15.1–4.15.2,
  plus 4.14's un-numbered five-step sequence) — a full-text sweep for
  `Figure 4.` across all 79 pages plus direct rendering of every page in
  range found no gaps and no additional figures beyond what is catalogued
  here. Those 40 instances are catalogued as **29 component records**: one
  consolidated record (`ref-cmp-refinery-unit-location-map`) standing in
  for the 13 recurring "unit location" instances (drawing E1161, confirmed
  identical by direct rendering, not assumed), one bundled record
  (`ref-cmp-psa-five-step-cycle-diagrams`) standing in for 5 unnumbered
  single-bed step diagrams, and 27 individual records for every genuinely
  distinct figure (photos, process flow diagrams, the V500FFD cutaway, the
  two Level-Trol/installation figures, and the two PSA multi-bed
  diagrams). Every one of the 40 real instances is accounted for in the
  math above (13 + 5 + 22 individually-numbered distinct figures = 40).
- **Editorial consolidation judgment call, flagged explicitly**: whether to
  catalogue the 13 recurring "unit location" map instances as one record
  or 13. This pass consolidated them (real, confirmed image identity by
  drawing number — not a title-similarity guess) to avoid 12 near-verbatim
  duplicate records; a stricter, equally defensible reading of "one record
  per source figure number" would have catalogued all 13 individually,
  each citing the same underlying image. Flagged for Franz's review rather
  than decided silently, matching the precedent set by Chapter 2's
  marketing-photo judgment call.
- **Source citation error confirmed**: Figure 4.10.1 (p. 4-79) is captioned
  "Alkylation Unit Location" but its own highlighted box is Fluid Catalytic
  Cracker — a copy-paste error from Figure 4.11.1's correct caption of the
  same underlying map. Catalogued under its real content (§4.10, Fluid
  Catalytic Cracker) rather than its printed caption, flagged here and in
  the consolidated record's own notes; the source's printed text was not
  silently corrected.
- **No duplicate printed figure numbers found within this chapter itself**
  (each of the 40 instances carries its own distinct `Figure 4.X.Y` number
  or, for the five PSA step diagrams, no number at all).
- **Table-exclusion confirmed**: zero tables (`Table 4.`) found anywhere in
  the chapter by full-text sweep — every section's "Typical Process
  Conditions" / "Typical Control Valve Selection" content is formatted as
  bulleted prose, not a numbered table, so nothing was excluded on that
  basis in this chapter (contrast Chapter 3, which did have two numbered
  packing-selection tables).
- **Cross-reference findings**: every drawing number in this chapter
  (E1149–E1166, E1445's absence confirmed distinct, E1546-1 through
  E1550, E0925-2, E0926, E0935, W9257, X1091, X1092, X0665-1) was checked
  against the whole Subject-Matter Index library (`grep` across every
  `Subject-Matter Index*.md` file) and found to be genuinely new — no
  collision with the Oil & Gas, Power & Severe Service, Pulp & Paper, or
  Control Valve Handbook indexes, and no match with this book's own
  Chapters 1–3. This is the expected result for a refinery-*application*
  chapter: its process flow diagrams are drawn specifically for named
  refinery process units (furnace, crude unit, FCC, alkylation, amine,
  sulfur recovery, PSA, blending) that have no equivalent "application
  review" chapter in the sibling sourcebooks — real content overlap would
  have been a surprise, not an expectation, confirmed rather than assumed.
  The one exception worth naming: `ref-cmp-v500ffd-features` (Figure
  4.6.3, the labelled V500FFD cutaway) was checked specifically against
  the already-catalogued Fisher V500 Rotary Globe Valve manual index and
  found not to share a drawing number — a different, coker-specific
  features graphic, not the same source drawing.
- **Archive/legacy note**: none consulted, none needed.
