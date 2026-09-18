---
title: Component Index — Control Valve Handbook ch1
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Control Valve Handbook, Sixth Edition (Emerson / Fisher Controls International LLC, D101881X012, Aug 2023)
chapter: ch1 — Introduction to Control Valves
updated: 2026-09-11
---

# Teaching-Component Index — Control Valve Handbook, Chapter 1

**Chapter 1 — "Introduction to Control Valves."** Standing library-cataloging
pass, NOT tied to any course — built ahead of any course actually needing
these figures, per `Source Library.md`'s "two ways a component index gets
triggered." Matches the rigor of `Component Index — Oil & Gas Sourcebook
ch1.md`: every real page in the chapter's confirmed range was read, every
real figure identified and visually verified against the rendered page (not
paraphrased from caption alone).

Chapter boundaries were verified directly against the PDF, not assumed from
the printed page numbers in the table of contents: PDF page 16 is the
"Chapter 1 / Introduction to Control Valves" divider page, real section
content runs PDF/printed pages 17–33 inclusive, and PDF page 34 is the
"Chapter 2 / Control Valve Performance" divider. **PDF page number equals
printed page number exactly for this range (zero offset)** — checked by
reading pages 15–18 and 32–35 directly. Chapter 1 = pp. 16–33; Chapter 2
starts at p. 34.

All figures are from `20 - Source Library/Control Valve Handbook/Control
Valve Handbook - Sixth Edition.pdf`. This pass catalogs existence and
location only — it does not crop or extract images, so each record's
`source` carries a single locator (figure number, page, verified caption),
not a second "already extracted" entry. Every record's `used-by` is `[]` —
none are placed on a slide yet.

Record shape matches `Component Index — Oil & Gas Sourcebook ch1.md`: `id` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

The Control Valve Handbook, Sixth Edition, is itself a **current** document
(D101881X012, Aug 2023, Emerson / Fisher Controls International LLC —
confirmed against `Emerson Control Valve Handbook.md` and the precedence
table in `Component Index — 14101 ch1-ch2.md`, which already carries this
same handbook as `current`), so every record below is `status: current`. No
archive or legacy material was consulted for this chapter.

## Components

### Section 1.1 — What is a Control Valve? (printed p. 17)

```yaml
id: cvh-cmp-feedback-control-loop
teaches: >
  The feedback control loop as a block diagram: Process, Sensor,
  Transmitter, Controller, and Control Valve blocks connected by labelled
  Manipulated Variable and Controlled Variable arrows — introduces the
  control valve as the final control element in the loop, before the
  chapter breaks into sliding-stem and rotary terminology.
concept-tags: [feedback control loop, process, sensor, transmitter, controller, control valve, manipulated variable, controlled variable]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.1 'Feedback Control Loop,' p. 17"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-005.html}]
notes: >
  An analytical block diagram, not a cutaway or photo — falls under Style
  Guide §5 (diagram & graph conventions) if ever placed on a slide, not §6's
  nomenclature/callout rules.
```

```yaml
id: cvh-topic-control-loop-fundamentals
kind: topic
concept-tags: [control loop, process variable, load disturbance, final control element, control valve assembly, sensor, transmitter, controller]
status: current
teaches: >
  Why a control loop exists and what a control valve's job is inside it,
  in the source's own reasoning, not just the block-diagram figure: modern
  plants use control loops to keep a process variable (pressure, flow,
  level, temperature) inside a required range despite disturbances the
  loop both receives and internally creates. Sensors and transmitters
  collect information about the process variable relative to a desired
  set point; a controller decides what must be done to correct it; a
  final control element then implements that decision — and "the most
  common final control element in the process control industries is the
  control valve." A control valve assembly is explicitly more than the
  body: valve body, internal trim, an actuator supplying motive power, and
  accessories (transducers, supply-pressure regulators, manual operators,
  snubbers, limit switches).
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§1.1 'What is a Control Valve?', p. 17 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-feedback-control-loop]
relatedTopics: []
used-by: []
notes: >
  This is the reasoning behind Figure 1.1's block diagram, not a
  restatement of it — the figure entry above describes what the diagram
  shows; this entry describes why the loop is built that way and what
  "control valve assembly" actually bundles together. Read directly from
  p. 17's real running prose, confirmed against the PDF page footer.
```

---

### Section 1.2 — Sliding-Stem Terminology (printed pp. 18–22)

```yaml
id: cvh-cmp-sliding-stem-valve-photo
teaches: >
  A complete sliding-stem control valve assembly: a green Fisher-style globe
  body under a spring-and-diaphragm actuator — introduces "sliding-stem
  valve" as a real product before the section breaks into individual part
  callouts.
concept-tags: [sliding-stem valve, globe body, spring-and-diaphragm actuator, control valve overview]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.2 'Sliding-Stem Control Valve,' p. 18"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-006.html}]
notes: >
  Production photo, unlabelled — good as a section-opening overview image,
  not a part-callout source. Same visual family as `cvh-cmp-sliding-stem-exploded`
  (Figure 1.3) on the same page, but a distinct figure.
```

```yaml
id: cvh-cmp-sliding-stem-exploded
teaches: >
  The major-component stack-up of a sliding-stem control valve, exploded
  and numbered: stem, packing flange, actuator locknut, bonnet, bonnet
  gasket, piston ring, plug, cage, seat ring, body/bonnet bolting, body —
  the assembly-order teaching figure for "actuator on top, then bonnet,
  then body."
concept-tags: [sliding-stem valve, exploded view, stem, packing flange, bonnet, bonnet gasket, piston ring, plug, cage, seat ring, body]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.3 'Sliding-Stem Control Valve,' p. 18 — 11-part numbered exploded view (1. Stem, 2. Packing Flange, 3. Actuator Locknut, 4. Bonnet, 5. Bonnet Gasket, 6. Piston Ring, 7. Plug, 8. Cage, 9. Seat Ring, 10. Body/Bonnet Bolting, 11. Body)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-007.html}]
notes: >
  Fully labelled with its own printed numbered callouts — Style Guide §6.3
  applies if ever placed on a slide (figures with their own printed field
  labels are not re-marked with numbered circles). **Already in course use:**
  `Component Index — 14101 ch1-ch2.md` cites this same figure directly as
  `ch2-cmp-globe-components` (crop file `cvh6-fig1-3-globe-valve-components.png`,
  slide 27) and corroboratively for `ch1-cmp-valve-assembly-stackup` (slide
  14) — this record is the library-wide catalog entry for the same source
  figure, kept as a separate id per this pass's source-anchored (not
  competency-anchored) scope.
```

```yaml
id: cvh-cmp-angle-valve-photo
teaches: >
  An angle valve: a grey angle-body sliding-stem valve with inlet and outlet
  perpendicular to each other, contrasting the straight-through globe body
  shown in Figures 1.2/1.3.
concept-tags: [angle valve, angle body, sliding-stem, perpendicular flow path]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.4 'Angle Valve,' p. 18"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-008.html}]
notes: >
  Production photo, unlabelled — pairs as a body-style contrast to
  `cvh-cmp-sliding-stem-valve-photo`; both sit on the same source page.
```

```yaml
id: cvh-cmp-bellows-seal-bonnet
teaches: >
  A bellows seal bonnet: a labelled cutaway showing the bonnet, packing,
  packing box, and bellows sealing the valve stem — the zero-leakage
  alternative to conventional packing for hazardous or toxic service.
concept-tags: [bellows seal bonnet, packing, packing box, bellows, valve stem, zero-leakage]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.5 'Bellows Seal Bonnet,' p. 19 — 5-part numbered cutaway (1. Bonnet, 2. Packing, 3. Packing Box, 4. Bellows, 5. Valve Stem)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-009.html}]
notes: >
  Fully labelled with its own printed numbered callouts — Style Guide §6.3
  applies if ever placed on a slide. Direct companion/contrast to
  `cvh-cmp-bonnet-assembly` (Figure 1.6, same page) — same four shared
  callouts (Bonnet, Packing, Packing Box, Valve Stem) plus the Bellows.
```

```yaml
id: cvh-cmp-bonnet-assembly
teaches: >
  A conventional bonnet assembly: a labelled cutaway of the bonnet, packing,
  packing box (the bored recess in the bonnet, not the bonnet casting
  itself), and valve stem — the baseline packing arrangement Figure 1.5's
  bellows-seal variant is contrasted against.
concept-tags: [bonnet assembly, packing, packing box, bored recess, valve stem]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.6 'Bonnet Assembly,' p. 19 — 4-part numbered cutaway (1. Bonnet, 2. Packing, 3. Packing Box, 4. Valve Stem)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-009.html}]
notes: >
  Fully labelled with its own printed numbered callouts — Style Guide §6.3
  applies if ever placed on a slide. **Already in course use:**
  `Component Index — 14101 ch1-ch2.md` cites this same figure directly as
  `ch2-cmp-bonnet-packing-box` (crop file `cvh6-fig1-6-bonnet-packing-box.png`,
  slide 51), including the same "packing box = the bored recess, not the
  casting" terminology point (see memory `valve-packing-box-terminology`).
  This record is the library-wide catalog entry for the same source figure,
  kept as a separate id per this pass's scope.
```

```yaml
id: cvh-cmp-cage-types
teaches: >
  Three cage types side by side — linear, equal-percentage, and
  quick-opening — shown as a 3-panel photo of the physical cages with flow
  arrows overlaid on a grid background, illustrating how cage window shape
  sets the flow characteristic.
concept-tags: [cage, linear cage, equal-percentage cage, quick-opening cage, flow characteristic, cage window]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.7 'Cages (left to right): Linear, Equal-Percentage, Quick-Opening,' p. 19"
delivery: existing figure (crop) — per Style Guide §5.8 default. THREE
  INDIVIDUAL CROPS available as of 2026-09-14 (Post-Stage-4 Architecture
  Bundle item 6, per Style Guide §5.14): cvh1-fig1-7a-linear-cage.png,
  cvh1-fig1-7b-equal-percentage-cage.png, cvh1-fig1-7c-quick-opening-cage.png
  (Control Valve Basics' assets/sourced/), split from the single printed
  photo so each cage is independently clickable/enlargeable — use these
  three instead of re-cropping the whole photo as one flat image.
used-by: [{course: CVB, slide: cvb-015.html}]
notes: >
  3-panel composite photo; each panel is captioned by cage type (not a
  numbered field callout) — treat as a labelled composite for §6.3 purposes,
  since the panel identifications are printed directly on the source figure.
  Corrected 2026-09-14: the whole-photo crop was previously delivered as one
  flat image with no per-panel click-through (Style Guide §5.14 violation,
  found on Control Valve Basics' cvb-015) — split into the three individual
  crops named above; the whole-photo crop is no longer the recommended
  delivery for a slide needing per-panel enlargement.
```

```yaml
id: cvh-cmp-three-way-globe-valve-overview
teaches: >
  A three-way globe valve: a single body with three flow connections,
  combining or diverting flow rather than the simple two-port throttling
  shown in the earlier sliding-stem figures.
concept-tags: [three-way valve, globe valve, flow combining, flow diverting]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.8 'Three-Way Globe Valve,' p. 20"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-008.html}]
notes: >
  Unlabelled cutaway/rendered photo, no printed field callouts — a
  body-style overview figure, not a nomenclature source.
  **Id split, 2026-09-18:** this record's id was `cvh-cmp-three-way-globe-valve`
  until this date, a real, live collision with `Component Index — Control
  Valve Handbook ch3.md`'s own Figure 3.6 record, which used the identical
  id for a genuinely different figure. `used-by` was also wrong before this
  fix — it listed both `cvb-008.html` (this figure, confirmed) and
  `cvb-020.html` (which actually uses the ch3 cutaway, not this one).
  Corrected in both files; see `cvh-cmp-three-way-globe-valve-cutaway` in
  ch3's index for the other half of the split.
```

```yaml
id: cvh-cmp-direct-acting-actuator
teaches: >
  A direct-acting spring-and-diaphragm actuator, fully labelled: diaphragm
  casing, diaphragm, diaphragm plate, actuator spring, actuator stem, spring
  seat, spring adjuster, yoke, stem connector, valve stem, travel indicator
  disk, travel scale — the baseline actuator construction Figure 1.12's
  reverse-acting variant is built from and contrasted against.
concept-tags: [direct-acting actuator, spring-and-diaphragm, diaphragm casing, diaphragm plate, actuator spring, yoke, travel indicator, travel scale]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.9 'Direct-Acting Actuator,' p. 20 — 12-part numbered cutaway (1. Diaphragm Casing, 2. Diaphragm, 3. Diaphragm Plate, 4. Actuator Spring, 5. Actuator Stem, 6. Spring Seat, 7. Spring Adjuster, 8. Yoke, 9. Stem Connector, 10. Valve Stem, 11. Travel Indicator Disk, 12. Travel Scale)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-010.html}]
notes: >
  Fully labelled with its own printed numbered callouts — Style Guide §6.3
  applies if ever placed on a slide. Direct construction companion to
  `cvh-cmp-reverse-acting-actuator` (Figure 1.12) — same core parts, action
  reversed.
```

```yaml
id: cvh-cmp-piston-actuator
teaches: >
  A piston-type actuator, labelled: loading pressure connection, piston,
  piston seal, cylinder, cylinder closure seal, seal bushing, stem
  connector — the higher-thrust, higher-stiffness alternative to the
  spring-and-diaphragm design for high-pressure-drop or fast-stroking
  service.
concept-tags: [piston actuator, loading pressure connection, piston seal, cylinder, seal bushing, stem connector]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.10 'Piston-Type Actuator,' p. 21 — 7-part numbered cutaway (1. Loading Pressure Connection, 2. Piston, 3. Piston Seal, 4. Cylinder, 5. Cylinder Closure Seal, 6. Seal Bushing, 7. Stem Connector)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-010.html}]
notes: >
  Fully labelled with its own printed numbered callouts — Style Guide §6.3
  applies if ever placed on a slide. Contrasts with the spring-and-diaphragm
  actuators (Figures 1.9/1.12) as the third actuator-type figure in the
  chapter.
  Crop corrected 2026-09-14: the original crop cut through the start of a heading below the figure and left its "1" callout circle with almost no margin at the top edge — re-cropped with full margin on both ends; the figure and all 7 callouts are unaffected.
```

```yaml
id: cvh-cmp-stem-packing-types
teaches: >
  Two stem-packing systems side by side, each fully labelled: PTFE Packing
  (upper wiper, packing follower, female adaptor, V-ring, male adaptor,
  lantern ring, washer, spring, box ring/lower wiper) and Graphite Packing
  (filament ring, laminated ring, lantern ring, zinc washer) — the generic
  packing-type reference the chapter's terminology builds on.
concept-tags: [stem packing, PTFE packing, graphite packing, lantern ring, packing follower, V-ring, laminated ring]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.11 'Packing,' p. 21 — 2-panel composite, PTFE Packing (9-part callout: Upper Wiper, Packing Follower, Female Adaptor, V-Ring, Male Adaptor, Lantern Ring, Washer, Spring, Box Ring/Lower Wiper) and Graphite Packing (4-part callout: Filament Ring, Laminated Ring, Lantern Ring, Zinc Washer)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled with its own printed numbered callouts on both panels —
  Style Guide §6.3 applies if ever placed on a slide. Conceptually adjacent
  to `Component Index — 14101 ch1-ch2.md`'s `ch2-cmp-stem-packing-by-service`
  (packing selection by service, slide 52), but that record cites the
  Fisher easy-e/ET IM and ENVIRO-SEAL/HIGH-SEAL bulletins directly, not this
  figure — no shared source figure to cross-reference, only a shared topic.
```

```yaml
id: cvh-cmp-reverse-acting-actuator
teaches: >
  A reverse-acting spring-and-diaphragm actuator, fully labelled: diaphragm
  casing, diaphragm, diaphragm plate, seal bushing and O-rings, actuator
  spring, actuator stem, spring seat, spring adjuster, yoke, stem connector,
  travel indicator disk, valve stem, integrated handwheel mounting bosses,
  integral air passage, integral DVC6200 mounting pad, travel scale — a
  more detailed 16-part companion to the direct-acting design in Figure 1.9,
  with action reversed and digital-valve-controller mounting features
  called out.
concept-tags: [reverse-acting actuator, spring-and-diaphragm, handwheel mounting, DVC6200 mounting pad, integral air passage, travel indicator]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.12 'Reverse-Acting Actuator,' p. 22 — 16-part numbered cutaway (1. Diaphragm Casing, 2. Diaphragm, 3. Diaphragm Plate, 4. Seal Bushing and O-rings, 5. Actuator Spring, 6. Actuator Stem, 7. Spring Seat, 8. Spring Adjuster, 9. Yoke, 10. Stem Connector, 11. Travel Indicator Disk, 12. Valve Stem, 13. Integrated Handwheel Mounting Bosses, 14. Integral Air Passage, 15. Integral DVC6200 Mounting Pad, 16. Travel Scale)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-010.html}]
notes: >
  Fully labelled with its own printed numbered callouts — Style Guide §6.3
  applies if ever placed on a slide. Direct construction companion to
  `cvh-cmp-direct-acting-actuator` (Figure 1.9) — same core parts plus four
  additional features (seal bushing/O-rings, handwheel bosses, air passage,
  DVC6200 pad) not called out on the simpler direct-acting figure.
  Crop corrected 2026-09-14: the original crop included most of the surrounding printed page — header text, both green rules, the printed caption, and the page number — rather than the figure alone. Re-cropped to the figure and its printed key only.
```

---

### Section 1.3 — Rotary Terminology (printed pp. 23–25)

```yaml
id: cvh-cmp-rotary-valve-photo
teaches: >
  A complete rotary (butterfly-style) control valve assembly with actuator
  and positioner mounted — introduces "rotary control valve" as a real
  product before the section breaks into individual closure-member and
  actuator figures.
concept-tags: [rotary control valve, butterfly valve, actuator, positioner, control valve overview]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.13 'Rotary Control Valve,' p. 23"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-012.html}]
notes: >
  Production photo, unlabelled — the rotary counterpart to
  `cvh-cmp-sliding-stem-valve-photo` (Figure 1.2), opening Section 1.3
  Rotary Terminology.
```

```yaml
id: cvh-cmp-segmented-ball
teaches: >
  A segmented-ball closure member: a flanged, shaft-mounted ball segment —
  one of three rotary closure-member types the section introduces (segmented
  ball, V-notch ball, eccentric disk).
concept-tags: [segmented ball, closure member, rotary valve, ball valve]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.14 'Segmented Ball,' p. 24"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-013.html}]
notes: >
  Production photo, unlabelled — pairs with `cvh-cmp-v-notch-ball` (Figure
  1.15) and `cvh-cmp-eccentric-disk-valve` (Figure 1.16) as the section's
  three rotary closure-member types, all on the same source page.
```

```yaml
id: cvh-cmp-v-notch-ball
teaches: >
  A V-notch ball closure member: a ball with a contoured V-shaped notch cut
  into it, mounted on a shaft — the rotary closure-member type shaped for
  improved rangeability and throttling control over a plain segmented ball.
concept-tags: [V-notch ball, closure member, rotary valve, ball valve, rangeability]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.15 'V-Notch Ball,' p. 24"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-013.html}]
notes: >
  Production photo, unlabelled — pairs with `cvh-cmp-segmented-ball` (Figure
  1.14) and `cvh-cmp-eccentric-disk-valve` (Figure 1.16); all three sit on
  the same source page.
```

```yaml
id: cvh-cmp-eccentric-disk-valve
teaches: >
  An eccentric-disk (butterfly-style) rotary valve with actuator mounted —
  the disk-type closure member rounding out the section's three rotary
  closure-member types.
concept-tags: [eccentric disk valve, butterfly valve, closure member, rotary valve]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.16 'Eccentric Disk Valve,' p. 24"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-013.html}]
notes: >
  Production photo, unlabelled — pairs with `cvh-cmp-segmented-ball` (Figure
  1.14) and `cvh-cmp-v-notch-ball` (Figure 1.15); all three sit on the same
  source page.
```

```yaml
id: cvh-cmp-rotary-actuator-cutaway
teaches: >
  A rotary (spring-and-diaphragm) actuator mounted to a valve, fully
  labelled: loading pressure connection, diaphragm case, diaphragm,
  diaphragm plate, spring, actuator stem, lever, shaft, travel stop,
  packing, disk, body, seal, seal retainer — the rotary counterpart to the
  sliding-stem actuator cutaways in Figures 1.9/1.12, showing how linear
  actuator stem motion is converted to disk/ball rotation through the
  lever and shaft.
concept-tags: [rotary actuator, lever, shaft, travel stop, diaphragm case, disk, seal retainer]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.17 'Rotary Control Valve,' p. 25 — 14-part numbered cutaway (1. Loading Pressure Connection, 2. Diaphragm Case, 3. Diaphragm, 4. Diaphragm Plate, 5. Spring, 6. Actuator Stem, 7. Lever, 8. Shaft, 9. Travel Stop, 10. Packing, 11. Disk, 12. Body, 13. Seal, 14. Seal Retainer)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-014.html}]
notes: >
  Fully labelled with its own printed numbered callouts — Style Guide §6.3
  applies if ever placed on a slide. The last figure in Section 1.3; the
  same page also opens Section 1.4 (Control Valve Functions and
  Characteristics Terminology) with the chapter's own "Bench Set"
  definition — a generic definition, not the same figure as the bench-set
  work already done for the Fisher 657 elsewhere in the vault.
  Crop corrected 2026-09-14: the original crop was too tight at the bottom, cutting off several of the figure's 14 printed callouts (including "9. Travel Stop" and part of "14. Seal Retainer"). Re-cropped to show the complete drawing and all 14 callouts.
```

---

### Section 1.4 — Control Valve Functions and Characteristics Terminology (printed pp. 29–30)

```yaml
id: cvh-cmp-deadband-graph
teaches: >
  Deadband illustrated as a hysteresis-style plot of process variable vs.
  controller output: the range through which the controller output can be
  reversed without producing an observable change in the process variable —
  the visual companion to the chapter's Deadband text definition.
concept-tags: [deadband, hysteresis, process variable, controller output, dynamic behavior]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.18 'Deadband,' p. 29 — Process Variable (%) vs. Controller Output (%) plot showing the open hysteresis loop"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: [{course: CVB, slide: cvb-017.html}]
notes: >
  An analytical graph, not a cutaway — same kind as `cvh-cmp-inherent-characteristics-graph`
  (Figure 1.19). Referenced directly in the adjacent Deadband glossary
  entry ("as shown in Figure 1.18").
```

```yaml
id: cvh-cmp-inherent-characteristics-graph
teaches: >
  The three standard inherent flow characteristics plotted together: rated
  flow coefficient (%) vs. rated travel (%), showing quick-opening, linear,
  and equal-percentage curves on one set of axes — the chapter's summary
  figure for "inherent characteristic," referenced by the adjacent glossary
  definition.
concept-tags: [inherent characteristic, flow coefficient, rated travel, quick-opening, linear, equal-percentage]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 1.19 'Inherent Valve Characteristics,' p. 30 — Rated Flow Coefficient (%) vs. Rated Travel (%), three curves labelled Quick-Opening, Linear, Equal-Percentage"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  An analytical graph, not a cutaway — the source figure's three in-plot
  labels (Quick-Opening, Linear, Equal-Percentage) are printed directly on
  the curves, not a separate legend; a redraw/key decision (Style Guide
  §5.1–§5.3) would need to be made at the point of use, not assumed here.
  Conceptually related to `Component Index — 14101 ch1-ch2.md`'s
  `ch2-cmp-flow-characteristic-curve` (which cites this same chapter's
  flow-characteristic content generically as "Chapter 3" in its locator —
  that record's own source note may be worth a follow-up check, since this
  figure is in Chapter 1, not Chapter 3; flagged in Open Items below rather
  than corrected here, since that file is out of this pass's scope).
```

```yaml
id: cvh-topic-bench-set
kind: topic
concept-tags: [bench set, inherent diaphragm pressure range, actuator spring calibration, rated travel]
status: current
teaches: >
  Bench Set is "the calibration procedure of an actuator spring so that it
  can use a pressure range to fully stroke a valve to its rated travel" —
  directly cross-referenced by the source to Inherent Diaphragm Pressure
  Range: "the high and low values of pressure applied to the diaphragm to
  produce rated valve plug travel with atmospheric pressure in the valve
  body. This range is often referred to as a bench set range because it
  will be the range over which the valve will stroke when it is set on
  the work bench." Installed Diaphragm Pressure Range is the same
  procedure done with real installed process forces acting on the plug
  instead of atmospheric conditions — the source notes these two ranges
  can differ specifically because of those forces.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§1.4 'Control Valve Functions and Characteristics Terminology,' pp. 26-27 — Bench Set, Inherent Diaphragm Pressure Range, Installed Diaphragm Pressure Range glossary entries, prose not figure-anchored"
relatedFigures: [cvh-cmp-direct-acting-actuator, cvh-cmp-reverse-acting-actuator]
relatedTopics: []
used-by: []
notes: >
  Flagged as worth defining in this file's own pre-existing Open Items note
  (see below) before this pass — confirmed real and grounded directly in
  the glossary's own cross-referenced definitions, not invented. Distinct
  from the Fisher 657-specific bench-set procedure already catalogued
  elsewhere in the vault (`Component Index — bench-set-657.md`) — this
  entry is the chapter's generic definition of the concept itself.
```

```yaml
id: cvh-topic-flow-characteristic-and-valve-gain
kind: topic
concept-tags: [flow characteristic, inherent characteristic, installed characteristic, valve gain, rated flow coefficient]
status: current
teaches: >
  Flow characteristic "should always be designated as either inherent
  flow characteristic or installed flow characteristic" — inherent is
  "the relationship between the flow rate and the closure member travel
  as it is moved from the closed position to rated travel with constant
  pressure drop across the valve"; installed is the same relationship
  "as the pressure drop across the valve is influenced by the varying
  process conditions" — i.e. inherent is a lab/test-bench property at
  fixed ΔP, installed is what actually happens once the valve is in a
  real system. Valve gain (the slope of these curves — change in flow per
  change in travel) has the same inherent/installed split: "inherent
  valve gain is an inherent function of the valve design," while
  "installed valve gain is the valve gain relationship that occurs when
  the valve is installed in a specific system and the pressure drop is
  allowed to change naturally."
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§1.4/§1.5, pp. 26-27, 29-30 — Flow Characteristic, Inherent/Installed Flow Characteristic, Inherent/Installed Valve Gain glossary entries, prose not figure-anchored"
relatedFigures: [cvh-cmp-inherent-characteristics-graph]
relatedTopics: [cvh-topic-rangeability]
used-by: []
notes: >
  This is the reasoning behind why Figure 1.19 plots characteristic curves
  at constant ΔP specifically — the figure entry describes the plot
  itself; this entry explains why "inherent" requires that constant-ΔP
  condition and what changes once the valve is actually installed.
```

```yaml
id: cvh-topic-rangeability
kind: topic
concept-tags: [rangeability, turndown, flow coefficient ratio, minimum controllable flow]
status: current
teaches: >
  Rangeability is "the ratio of the largest flow coefficient (Cv or Kv)
  to the smallest flow coefficient (Cv or Kv) within which the deviation
  from the specified flow characteristic does not exceed the stated
  limits" — the source gives a real concrete example: "a control valve
  that still does a good job of controlling when flow increases to 100
  times the minimum controllable flow has a rangeability of 100 to 1."
  Rangeability can also be expressed as the ratio of maximum to minimum
  controllable flow rates, not just the coefficient ratio.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§1.4, p. 27 — Rangeability glossary entry, prose not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-flow-characteristic-and-valve-gain]
used-by: []
notes: >
  No figure anchors this concept at all in this chapter — a genuine
  prose-only concept the figures-only rule would have excluded entirely
  before `kind: topic` existed.
```

```yaml
id: cvh-topic-deadband-and-friction
kind: topic
concept-tags: [deadband, backlash, static friction, stiction, dynamic friction, hysteresis]
status: current
teaches: >
  Deadband is "the range through which an input signal can be varied,
  upon reversal of direction, without initiating an observable change in
  output signal" — for a control valve, controller output is the input
  and process variable is the output (Figure 1.18). The source names two
  real causes: Backlash ("slack, or looseness, of a mechanical
  connection") and, more directly, static friction: "Static friction
  (also known as stick/slip, or stiction) is the force that must be
  overcome before there is any relative motion between the two surfaces.
  ... Static friction is also one of the major causes of deadband in a
  valve assembly." Once moving, dynamic friction ("running friction, or
  sliding friction") is the force needed to sustain the motion. Hysteresis
  is a related but distinct measurement: "the maximum difference in
  output value for any single input value during a calibration cycle,
  excluding errors due to deadband" — the source is explicit that
  hysteresis and deadband are measured separately, not the same thing.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§1.4/§1.5, pp. 28-29 — Deadband (+ Figure 1.18), Backlash, Friction, Hysteresis glossary entries, prose not figure-anchored"
relatedFigures: [cvh-cmp-deadband-graph]
relatedTopics: []
used-by: []
notes: >
  The existing Figure 1.18 entry describes the deadband plot itself; this
  entry is the causal mechanism (friction/backlash) the plot's shape
  results from, which the figure caption alone never explains.
```

```yaml
id: cvh-topic-dynamic-response-characteristics
kind: topic
concept-tags: [dead time, time constant, T63, response time, first-order, second-order, gain]
status: current
teaches: >
  How a valve assembly's speed of response is actually measured, per the
  source's own definitions: Dead Time (Td) is "the time interval in which
  no response of the system is detected following a small... step input,"
  measured from the step to the first detectable response. Time Constant
  is measured from that first detectable response until the output
  reaches 63% of its final steady-state value. T63 is explicitly the
  combined total of dead time and time constant. Response Time is
  "usually measured by a parameter that includes both dead time and time
  constant... When applied to the valve, it includes the entire valve
  assembly." First-order systems have "only one energy storage device"
  and exponential behavior; second-order systems have two energy storage
  devices that "transfer kinetic and potential energy back and forth,"
  introducing possible oscillation and overshoot. Gain (the ratio of
  output change to the input change that caused it) has static gain
  (steady-state sensitivity) and dynamic gain (a function of the
  frequency/rate of the input) as its two components.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§1.5 'Process Control Terminology,' pp. 28-29, 31 — Dead Time, Time Constant, T63, Response Time, First-Order, Second-Order, Gain glossary entries, prose not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-deadband-and-friction]
used-by: []
notes: >
  No figure anchors any of this content — a genuine, coherent cluster of
  dynamic-response vocabulary the figures-only rule excluded entirely.
  Kept as one topic rather than six separate entries since the source
  itself defines each term by direct cross-reference to the others (T63
  = Td + time constant; response time = "includes both").
```

---

## Open items

- **Full chapter covered in one pass.** All 19 real figures in Chapter 1
  (Figures 1.1–1.19, printed/PDF pp. 17–30) were identified, and every one
  was visually verified against the rendered source page — none skipped,
  none flagged low-confidence. No figures exist on pp. 26–28 (glossary text
  only, no figures) or p. 31–33 (chapter's closing glossary entries, no
  figures) — checked directly, not assumed.
- **Chapter boundary confirmed.** PDF page 16 is the Chapter 1 divider; real
  content runs pp. 17–33; PDF page 34 is the Chapter 2 divider. PDF page
  number = printed page number exactly (zero offset) for this entire range,
  verified by reading pp. 15–18 and 32–35 directly.
- **Two real cross-references found** to `Component Index — 14101
  ch1-ch2.md`: `cvh-cmp-sliding-stem-exploded` (Figure 1.3) is the same
  source figure as that index's `ch2-cmp-globe-components`
  (crop file `cvh6-fig1-3-globe-valve-components.png`), and
  `cvh-cmp-bonnet-assembly` (Figure 1.6) is the same source figure as that
  index's `ch2-cmp-bonnet-packing-box`
  (crop file `cvh6-fig1-6-bonnet-packing-box.png`). Both are noted in this
  file's own records rather than given a duplicate competency-facing id —
  this file's ids are source-anchored (library-wide), the 14101 index's ids
  are competency-anchored (course-specific); the two schemes describe the
  same two source figures on purpose.
- **Possible citation slip flagged, not fixed.** `Component Index — 14101
  ch1-ch2.md`'s `ch2-cmp-flow-characteristic-curve` cites its flow-
  characteristic source as "Control Valve Handbook 6th ed. — flow-
  characteristic definition and the three standard curves (Chapter 3)," but
  this pass found the equivalent chart (`cvh-cmp-inherent-characteristics-graph`,
  Figure 1.19) in **Chapter 1**, not Chapter 3. This may be a genuinely
  separate, later Chapter 3 figure covering the same three curves in more
  depth (Chapter 3 is "Valve and Actuator Types," out of this fork's scope
  to check), or it may be a locator typo in the 14101 index. Flagged here
  for a human or a future Chapter 3 cataloging pass to resolve — not
  corrected in either file by this pass.
- Tables were not catalogued as components, matching the Oil & Gas
  precedent's practice — no tables were observed on any page in this
  chapter's range in any case.
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.

**`kind: topic` pass (2026-09-17), added to the existing figure-only
catalogue above:**

- **Six new `cvh-topic-*` entries added**, covering the real conceptual
  content on pp. 26-33 this pass's own earlier note flagged as
  "glossary text only, no figures" — correct that no figures exist there,
  but incorrect that nothing worth cataloguing does. See
  `cvh-topic-control-loop-fundamentals`, `cvh-topic-bench-set`,
  `cvh-topic-flow-characteristic-and-valve-gain`, `cvh-topic-rangeability`,
  `cvh-topic-deadband-and-friction`, `cvh-topic-dynamic-response-characteristics`.
- **The bulk of §1.2, §1.3, and most of §1.5 is genuine dictionary-style
  terminology, not topic-worthy.** Sections 1.2 (Sliding-Stem Terminology)
  and 1.3 (Rotary Terminology) are almost entirely one-sentence part/term
  definitions already adequately anchored by this chapter's existing
  figure entries (e.g. "Angle Valve" by `cvh-cmp-angle-valve-photo`). Most
  of §1.5's alphabetical glossary (Accessory, ANSI, API, Positioner,
  Sensor, Transmitter, Set Point, Signal, Span, Travel, Trim, and similar)
  are short single-sentence definitions with no real explanatory depth
  beyond the term itself — deliberately NOT given individual topic entries,
  the same "don't pad thin content" discipline `Component Index — Control
  Valve Handbook ch13.md` already applied to pure reference-data tables.
- **Two glossary entries duplicate concepts already topic-indexed in
  Chapter 5 — not re-indexed here, cross-referenced instead.** "High-
  Recovery Valve" / "Low-Recovery Valve" (p. 26-27) is the same mechanism
  as `cvh-topic-flow-recovery` (ch5); "Vena Contracta" (p. 27) is the same
  concept as `cvh-topic-vena-contracta` (ch5). Both ch1 glossary entries
  are shorter restatements of the same underlying mechanism ch5 explains
  more fully — creating a second `cvh-topic-*` id for the identical
  concept would fragment one idea across two ids. If a future course needs
  to cite this concept from a Chapter-1-only context, cite ch5's existing
  topic id directly rather than minting a duplicate.
- **The chapter's own earlier flag ("Bench Set" needing definition, in the
  Figure 1.17 record's notes) is now resolved** — see `cvh-topic-bench-set`
  above.
- **File integrity verified.** 25 total ids in this file (19 figures + 6
  new topics), all unique; every `relatedFigures`/`relatedTopics` reference
  across all 6 new topic entries resolves to a real existing id in this
  same file — checked with the same node one-liner integrity check used
  for the ch5 pass, zero bad references found.
