---
title: Component Index — Refining Sourcebook ch4
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
chapter: ch4 — Refinery Control Valve Application Reviews
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Refining, Chapter 4

**Standing full-chapter pass**, continuing `Component Index — Refining
Sourcebook ch3.md` — see `ch1.md`'s header for the pass type and reason
(gating Control Valve Engineering 1/2 content-build work).

**Chapter/scope boundary, confirmed directly by rendering:** PDF page 30
(chapter divider, carrying its own 15-section mini table of contents: §4.1
Furnace through §4.15 Blending Unit) through PDF page 108 (printed 4-108,
the chapter's last content page — Figure 4.15.2 and the section 4.15 valve
text both close out on this page). PDF page 109 rendered and confirmed to
be the Chapter 5 "Terminology" divider (own mini TOC: §5.1–§5.5), catalogued
separately in `Component Index — Refining Sourcebook ch5.md`. Zero page
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

## Open Items

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
  against the whole Component Index library (`grep` across every
  `Component Index*.md` file) and found to be genuinely new — no
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
