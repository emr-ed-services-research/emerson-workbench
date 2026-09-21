---
title: Subject-Matter Index — Power & Severe Service Sourcebook ch1
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch1 — Control Valve Selection
updated: 2026-09-14
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 1

**Chapter 1 — "Control Valve Selection."** Standing full-chapter cataloging
pass, part of the whole-document indexing of the Power & Severe Service
Sourcebook (gating content-build work on the upcoming Control Valve
Engineering 1/2 courses), per `Source Library.md`'s "three ways a component
index gets triggered." Every real page in the chapter's confirmed range was
rendered at 150dpi and read directly; every real figure identified and
visually verified against the rendered page (not paraphrased from caption
alone).

Chapter boundaries were confirmed directly by rendering the divider pages,
not assumed from the table of contents: PDF page 7 is the "Chapter 1 /
Control Valve Selection" divider, real chapter content runs PDF pp. 7–20
(printed pp. 1-1 through 1-14), and PDF page 21 is the "Chapter 2 / Actuator
Selection" divider. Chapter 1 = pp. 7–20; Chapter 2 starts at p. 21.

All figures are from `20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/
Control Valve Sourcebook - Power & Severe Service.pdf`. This pass catalogs
existence and location only — it does not crop or extract images (no
extracted-figures folder exists yet for this book), so each record's
`source` carries a single locator (figure number, page, drawing number,
verified caption), matching the Control Valve Handbook's record shape
rather than the Oil & Gas Sourcebook's early two-source-line form. Every
record's `used-by` is `[]` — none are placed on a slide yet.

**This chapter shares real content with the Oil & Gas Sourcebook's own
Chapter 1** (per `Source Library.md`: the sourcebook series has a shared
front-matter section reused across industry volumes). Seven of this
chapter's sixteen figures were visually confirmed to be the *same source
drawing* (identical drawing number) as an already-catalogued Oil & Gas ch1
figure — see each record's own `notes` for the specific cross-reference.
Each still gets its own `pss-cmp-*` id (this book's own subject-matter index is
scoped to this book), cross-referenced by id in both directions rather than
merged.

Record shape matches `Subject-Matter Index — Control Valve Handbook ch1.md`:
`id` · `teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`)
· `delivery` · `used-by` · `notes` · `mediaStatus`.

## Precedence

The Power & Severe Service Sourcebook is itself a **current** document
(© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition,
D101449X012 — first-party current Fisher document, same precedence bucket
as its Oil & Gas sibling and the Control Valve Handbook), so every record
below is `status: current`. No archive or legacy material was consulted for
this chapter.

## Components

### Chapter 1 — Valve-type overview: sliding-stem, ball, and eccentric plug (printed pp. 1-1 – 1-6)

```yaml
id: pss-topic-control-valve-selection-framework
kind: topic
teaches: >
  Control valve selection is framed as narrowing down to one of nine
  subcategories (across the two major types, sliding-stem and rotary),
  then comparing specific valves within that subcategory — the
  overview/comparison structure Table 1-2 itself embodies. "Control valve"
  in this discussion means any power-operated valve used for throttling or
  on-off control; motorized gate valves, louvers, pinch valves, and
  self-operated regulators are explicitly excluded from the scope.
  Selection used to be simple (one general type, sliding-stem, considered
  by default) but is now considerably more complex given the range of
  sliding-stem and rotary styles available, some marketed as near-universal
  and others as narrow-application optimum solutions.
concept-tags: [valve selection framework, nine subcategories, sliding-stem, rotary, control valve scope]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 1 opening prose and 'General Categories of Control Valves' section, pp. 1-1–1-2 — unnumbered prose, not figure-anchored"
relatedFigures: []
relatedTopics: [ogas-topic-control-valve-selection-process]
used-by: []
notes: >
  Genuinely parallel prose to Oil & Gas ch1's own selection-framework
  section (same sourcebook-series front matter) but catalogued as its own
  record per this project's standing rule against merging records across
  source documents — not verified word-for-word identical, only
  conceptually equivalent, so no strong claim of textual identity is made
  here.
```

```yaml
id: pss-cmp-modern-control-valve-assembly
kind: figure
teaches: >
  A complete modern control valve loop assembly: spring-and-diaphragm
  actuator on top, globe valve body below, and a digital valve controller
  (FIELDVUE) mounted on the yoke — the three pieces combined to introduce
  "control valve" as actuator + valve assembly + digital positioner working
  together, before the chapter breaks out into individual valve
  subcategories.
concept-tags: [control valve overview, actuator, valve assembly, digital valve controller, FIELDVUE, sliding-stem]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-1 'Modern control valve combines actuator, valve assembly and digital valve controller...,' p. 1-1 — drawing W8119"
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig1-modern-control-valve-overview.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same source drawing (W8119) as `ogas-cmp-modern-control-valve-assembly` in
  `Subject-Matter Index — Oil & Gas Sourcebook ch1.md` — identical photo reused
  across the sourcebook series. This same drawing is also reused a second
  time within THIS book as Figure 2-12 (Chapter 2, "Actuator Selection
  Summary" section, different caption about FIELDVUE/ValveLink) — see
  `Subject-Matter Index — Power & Severe Service Sourcebook ch2.md`'s Open Items;
  no second record was minted for that reuse, this is the one source-anchored
  record for the drawing within this book.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-et-globe-cutaway
kind: figure
teaches: >
  Standard globe sliding-stem valve construction (typified by the Design
  ET): cage-guided trim, balanced valve plug (reduces plug force, allows
  smaller actuators), PTFE disk seat with metal disk retainer, seat ring,
  bonnet gasket, spiral-wound gasket, cage gasket, groove pin, TFE V-ring
  packing, backup ring, seal ring. The first-choice design for applications
  under 3-inch.
concept-tags: [globe valve, sliding-stem, Design ET, cage-guided, balanced plug, PTFE disk seat, seat ring, bonnet gasket, TFE V-ring, packing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-2 'Standard globe sliding-stem valve design is typified by the Design ET...,' p. 1-2 — drawing W0992-4"
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig2-et-globe-valve-cutaway.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same source drawing (W0992-4) as `ogas-cmp-et-globe-cutaway` in
  `Subject-Matter Index — Oil & Gas Sourcebook ch1.md`. Fully labelled cutaway
  with its own printed field callouts (BONNET GASKET, SPIRAL WOUND GASKET,
  CAGE GASKET, GROOVE PIN, SEAT RING GASKET, METAL DISK SEAT, PTFE DISK,
  METAL DISK RETAINER, TFE V-RING, BACKUP RING, SEAL RING, VALVE PLUG) —
  Style Guide §6.3 applies if ever placed on a slide (figures with their own
  printed field labels are not re-marked with numbered circles).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-large-ewnt2-drilled-cage-cutaway
kind: figure
teaches: >
  Severe-service globe valve capability: a large Design EWNT-2 with a
  drilled-hole cage that attenuates flow noise by splitting flow into
  multiple passages, with hole spacing controlled to eliminate jet
  interaction and higher resultant noise levels.
concept-tags: [globe valve, severe service, EWNT-2, drilled cage, noise attenuation, multi-passage trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-3 'Severe service capability in globe valves demonstrated by this large Design EWNT-2...,' p. 1-2 — drawing W3290"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Teaches the same concept (drilled-hole cage noise attenuation) as
  `ogas-cmp-large-et-drilled-cage-cutaway` (Oil & Gas ch1, Figure 1-3), but
  this is a genuinely different source drawing (W3290 here vs. X0215-1
  there) of a differently-named valve ("large Design EWNT-2" here vs. "Large
  ET" there) — visually confirmed distinct, not the same image; catalogued
  as a separate record, not merged.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-ehd-high-pressure-cutaway
kind: figure
teaches: >
  High-pressure globe valve construction: the Design EHD, rated ANSI Class
  2500, provides throttling control of high-pressure steam and fluids;
  anti-noise and anti-cavitation trims are available for flow problems.
concept-tags: [globe valve, EHD, high pressure, ANSI Class 2500, anti-noise trim, anti-cavitation trim, steam service]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-4 'Design EHD is typical of high-pressure globe valves...,' p. 1-3 — drawing W3379"
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig4-ehd-high-pressure-globe-cutaway.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same source drawing (W3379) as `ogas-cmp-ehd-high-pressure-cutaway` in
  `Subject-Matter Index — Oil & Gas Sourcebook ch1.md`. Unlabelled silhouette
  cutaway — no printed field callouts.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-baumann-24000sb-barstock-valve
kind: figure
teaches: >
  The barstock sliding-stem subcategory: bodies machined from bar stock
  (e.g., the Baumann 24000SB), an economical solution for small flow
  requirements — capable of pressures to 1500 psi and temperatures to
  450°F, complemented by compact spring-and-diaphragm actuators.
concept-tags: [sliding-stem, barstock valve, Baumann 24000SB, small flow, low cost]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-5 'Bar stock valves such as this Baumann 24000SB...,' p. 1-3 — drawing W7621"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo, not a cutaway. No Oil & Gas ch1 equivalent — Oil & Gas's
  chapter went straight from the ET/EWNT globe figures to the economy body
  (its own Figure 1-5) without a distinct barstock-subcategory figure; this
  book adds the barstock category as its own figure.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-baumann-little-scotty-economy-valve
kind: figure
teaches: >
  The lowest-cost sliding-stem subcategory: "economy" bodies (the screwed-end
  bronze Baumann "Little Scotty") for low-pressure steam, air and water
  applications that are not demanding, complemented by a wide variety of
  orifice sizes.
concept-tags: [sliding-stem, economy body, Baumann Little Scotty, low pressure, general purpose valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-6 'This screwed end bronze body Baumann \"Little Scotty\" is capable of handling many utility applications...,' p. 1-4 — drawing W7618"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same product line ("Little Scotty") and same teaching role as
  `ogas-cmp-economy-body-sliding-stem` (Oil & Gas ch1, Figure 1-5), but a
  genuinely different photo — drawing W7618 here vs. X0184 there, and the
  Oil & Gas photo shows the valve fitted with a FIELDVUE DVC6200 positioner
  while this one does not. Catalogued as a separate record, not merged.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-piston-actuator-fieldvue-valve
kind: figure
teaches: >
  A compact, lightweight sliding-stem valve fitted with a piston actuator
  and a FIELDVUE digital valve controller — the actuator-selection preview
  that motivates Chapter 2, shown here as part of the ball-valve subcategory
  discussion.
concept-tags: [sliding-stem, piston actuator, FIELDVUE, digital valve controller, compact valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-7 'Compact, lightweight valve featuring a piston actuator and a FIELDVUE Digital Valve Controller,' p. 1-4 — drawing W7960-2"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo. No Oil & Gas ch1 equivalent — new to this book.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-sliding-stem-valve-family
kind: topic
teaches: >
  Sliding-stem designs (globe, angle, Y-pattern) are the most versatile
  control valve family: 1/2 through 36-inch, the widest range of
  materials/end-connections/characteristics of any product family, and
  body pressure ratings to ANSI Class 2500 and beyond. For many extreme
  service conditions — high pressure/temperature, excessive noise,
  cavitation potential — sliding-stem is the ONLY suitable choice, due to
  its rugged construction handling piping stress, vibration, and
  temperature changes that field conditions impose. In sizes through
  3-inch, the incremental cost over rotary valves is low relative to the
  benefit received.
concept-tags: [sliding-stem valve, globe valve, versatility, extreme service, rugged construction, ANSI Class 2500]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "'Sliding-stem Valves' section, p. 1-2 — unnumbered prose, not figure-anchored"
relatedFigures: [pss-cmp-design-et-globe-cutaway, pss-cmp-large-ewnt2-drilled-cage-cutaway, pss-cmp-ehd-high-pressure-cutaway, pss-cmp-baumann-24000sb-barstock-valve, pss-cmp-baumann-little-scotty-economy-valve, pss-cmp-piston-actuator-fieldvue-valve]
relatedTopics: []
used-by: []
notes: >
  Extends the individual figure entries above (each teaches one specific
  design/subcategory) with the family-level rationale for WHY sliding-stem
  is chosen over rotary in the first place — genuinely absent from any
  single figure's own teaches field.
```

```yaml
id: pss-cmp-v250-ball-valve-cutaway
kind: figure
teaches: >
  High-pressure full-ball valve construction (the V250): heavy shaft, full
  through-bore ball, suitable for pressure drops to 2220 psi; ANSI Class 600
  and 900 bodies to 24-inch. Labelled parts: valve body, body outlet, valve
  ball outlet/inlet seals, thrust washer, main shaft bearing, seal carrier,
  drive shaft, O-ring, shim seals, follower shaft, seal protector ring/flow
  ring.
concept-tags: [ball valve, full-ball, through-bore, V250, high pressure drop, ANSI Class 600, ANSI Class 900, shaft bearing, seal carrier]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-8 'High-pressure ball valves feature heavy shafts and full ball designs. This Type V250...,' p. 1-5 — drawing W7169"
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig6-v250-high-pressure-ball-valve-cutaway.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same source drawing (W7169) as `ogas-cmp-v250-ball-valve-cutaway` in
  `Subject-Matter Index — Oil & Gas Sourcebook ch1.md`. Fully labelled cutaway —
  Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-vee-ball-v150-v200-v300-cutaway
kind: figure
teaches: >
  Segmented-ball valve construction (the Design V150/V200/V300 Vee-Ball): a
  reduced-bore ball whose segment edge has a contoured notch shape for
  better throttling control and higher rangeability than a full-bore ball
  valve. Tight shutoff is achieved with either heavy-duty metal seals or
  composition seals; ANSI Class 600, sizes to 24-inch.
concept-tags: [ball valve, segmented ball, Vee-Ball, V150, V200, V300, reduced bore, contoured notch, rangeability, ANSI Class 600]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-9 'Applications to ANSI Class 600 can be handled by the Design V150/V200/V300 Vee-Ball...,' p. 1-5"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  LOW-CONFIDENCE FLAG: caption text is nearly word-for-word identical to
  `ogas-cmp-vee-ball-segmented-cutaway` (Oil & Gas ch1, Figure 1-7, drawing
  W7435) and the cutaway artwork is visually very similar — high confidence
  this is the same source drawing reused across the sourcebook series, same
  as several other Chapter 1 figures — but the drawing-number stamp was not
  clearly legible on this specific 150dpi crop (near the image edge), so the
  match is NOT independently confirmed by drawing number the way the other
  cross-references in this file are. Treat as a probable but unconfirmed
  cross-reference until re-checked at higher resolution.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-ball-valve-subcategories
kind: topic
teaches: >
  Two ball-valve subcategories with a real performance tradeoff, not just
  two size options: through-bore/full-ball (Figure 1-8) suits high
  pressure-drop throttling and on-off service to 24-inch, with high flow
  capacity and low erosive wear — but sluggish flow response in the first
  20% of ball travel can make it unsuitable for some throttling
  applications. Segmented-ball (Figure 1-9), with its reduced bore and
  contoured-notch segment edge, is generally higher in overall control
  performance and better suited to modulating service — splined-shaft
  connections eliminate lost motion, and heavy-duty metal/fluoroplastic
  seals allow wide temperature/fluid applicability.
concept-tags: [ball valve, full-ball, through-bore, segmented ball, rangeability, lost motion, splined shaft]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "'Ball Valves' section, pp. 1-4–1-5 — unnumbered prose, not figure-anchored"
relatedFigures: [pss-cmp-v250-ball-valve-cutaway, pss-cmp-vee-ball-v150-v200-v300-cutaway]
relatedTopics: []
used-by: []
notes: >
  The sluggish-first-20%-travel limitation and the lost-motion/splined-shaft
  rationale are both genuinely absent from either figure's own caption —
  real comparative reasoning the two figures alone don't carry.
```

```yaml
id: pss-cmp-v500-eccentric-plug-cutaway
kind: figure
teaches: >
  Eccentric plug valve construction (the V500): rotary actuation combined
  with a massive, rigid seat design. The valve plug "cams" into the seat
  ring upon closure, giving tight shutoff with globe-valve-style seating
  plus excellent resistance to abrasive wear and flashing-induced erosion.
  Labelled parts: retainer, valve plug, seat ring, face seals, bearing,
  taper and expansion pins, thrust washer, valve body, packing, valve shaft,
  bearing stop.
concept-tags: [eccentric plug valve, V500, rotary actuation, cams into seat, globe valve style seating, abrasive wear resistance, flashing erosion, seat ring, face seals]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-10 'The V500 eccentric plug valve is specially designed for severe rotary applications...,' p. 1-6 — drawing W4170-3/IL"
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig8-v500-eccentric-plug-valve-cutaway.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same source drawing (W4170-3/IL) as `ogas-cmp-v500-eccentric-plug-cutaway`
  in `Subject-Matter Index — Oil & Gas Sourcebook ch1.md`. Fully labelled
  cutaway — Style Guide §6.3 applies if ever placed on a slide. Cross-
  sourcebook duplicate confirmed on inspection (identical drawing number,
  identical labelled parts, identical caption content) — no new crop was
  made; this entry points directly at the Oil & Gas sourcebook's existing
  extracted crop rather than duplicating the file.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-eccentric-plug-transitional-category
kind: topic
teaches: >
  Eccentric plug valves are explicitly positioned as a transitional
  category combining sliding-stem and rotary traits: rotary actuation
  (like rotary valves) paired with a massive, rigid seat design (unlike
  most rotary valves) — giving excellent throttling capability and erosion
  resistance by combining "many of the good aspects of both rotary and
  sliding-stem designs." Sizes generally to 8-inch, ratings to ANSI Class
  600, both flanged and flangeless available.
concept-tags: [eccentric plug valve, transitional category, rotary actuation, rigid seat, erosion resistance]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "'Eccentric Plug Valves' section, p. 1-4 — unnumbered prose, not figure-anchored"
relatedFigures: [pss-cmp-v500-eccentric-plug-cutaway]
relatedTopics: []
used-by: []
notes: >
  The figure entry's own teaches field already covers the mechanism
  ("cams into the seat ring"); this topic entry adds the explicit
  transitional-category framing (why this design exists between the two
  major families) that the figure caption alone doesn't state.
```

---

### Chapter 1 — Butterfly valves and flow characteristics (printed pp. 1-6 – 1-9)

```yaml
id: pss-cmp-swing-through-butterfly-valve
kind: figure
teaches: >
  Swing-through butterfly valve construction: the most rudimentary
  butterfly subcategory, where the valve disk swings close to, but clear
  of, the body's inner wall — an economical solution for high flow-rate
  throttling but with higher leakage than other designs, since no sealing
  is employed.
concept-tags: [butterfly valve, swing-through, no seal, high flow rate, economical]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-11 'Swing-through butterfly valves provide an economical solution to high flow rate throttling applications...,' p. 1-6 — drawing W3806"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo. No Oil & Gas ch1 equivalent — that chapter went straight
  to the high-performance butterfly (its own Figure 1-9) without a swing-
  through or lined-butterfly figure; this book catalogues all three
  butterfly subcategories.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-lined-butterfly-valve
kind: figure
teaches: >
  Lined butterfly valve construction: an elastomer or fluoropolymer (TFE)
  liner contacts the disk to provide tight shutoff, also protecting the
  inner bore of the valve body from the process fluid — limited in pressure
  drop and temperature range due to the elastomer disk seal, but tight
  shutoff and low cost.
concept-tags: [butterfly valve, lined butterfly, elastomer liner, TFE liner, tight shutoff, corrosion protection]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-12 'Lined butterfly valves offer tight shutoff but are limited to low temperature applications...,' p. 1-6 — drawing W4081"
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Power & Severe Service — extracted-figures/ch1-fig12-lined-butterfly-valve.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo. No Oil & Gas ch1 equivalent — new to this book. Genuinely
  new figure, confirmed no filename or content overlap with the Oil & Gas
  extracted-figures folder; cropped fresh from the source PDF (p. 12 /
  printed 1-6) at 200 dpi, figure + caption.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-8560-high-perf-butterfly-cutaway
kind: figure
teaches: >
  High performance butterfly valve construction (the Type 8560, ANSI Class
  150): offset-disk design with eccentric shaft mounting so the disk swings
  clear of its seal to minimize wear and torque, allowing uninterrupted
  sealing and a replaceable seal ring. Labelled parts: spring, seal ring,
  taper pins and hollow pins, packing follower, valve body, disk, bearing,
  PTFE V-ring packing, splined shaft.
concept-tags: [high performance butterfly valve, Type 8560, offset disk, eccentric shaft mounting, PTFE V-ring packing, splined shaft, ANSI Class 150]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-13 'High performance butterfly valves provide excellent performance and value...,' p. 1-7 — drawing W6235-2/IL"
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig9-8560-high-performance-butterfly-cutaway.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same source drawing (W6235-2/IL) as `ogas-cmp-8560-high-perf-butterfly-cutaway`
  in `Subject-Matter Index — Oil & Gas Sourcebook ch1.md`. Fully labelled cutaway
  — Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-butterfly-valve-family-evolution
kind: topic
teaches: >
  The requirement for zero or low leakage drove the evolution from the
  basic swing-through butterfly (no seal, higher leakage, economical for
  high flow-rate throttling) to lined butterfly valves (elastomer/TFE
  liner against the disk for tight shutoff, but limited pressure drop and
  temperature range since it depends on disk-liner interference) to high
  performance butterfly valves (offset-disk design: eccentric shaft
  mounting swings the disk clear of its seal to minimize wear and torque,
  enabling uninterrupted sealing and a replaceable seal ring — tight
  metal-to-metal seals for service too hot for elastomer-lined designs).
  High-performance butterfly valves can be a suitable substitute for
  sliding-stem valves given this tight-shutoff, heavy-duty construction.
concept-tags: [butterfly valve, swing-through, lined butterfly, high performance butterfly, offset disk, eccentric shaft mounting, zero leakage evolution]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "prose following Figure 1-13, pp. 1-6–1-7 — unnumbered prose, not figure-anchored"
relatedFigures: [pss-cmp-swing-through-butterfly-valve, pss-cmp-lined-butterfly-valve, pss-cmp-8560-high-perf-butterfly-cutaway]
relatedTopics: []
used-by: []
notes: >
  The design-evolution framing (why three subcategories exist, in this
  order) and the offset-disk mechanism's WHY (reduces wear/torque, enables
  a replaceable seal ring) are genuinely absent from the individual figure
  captions, which describe WHAT each design is but not why it was
  developed relative to the others.
```

```yaml
id: pss-cmp-flow-characteristic-curves
kind: figure
teaches: >
  Four typical inherent flow-characteristic curves — quick opening, linear,
  modified parabolic, and equal percentage — plotted as percent of maximum
  flow vs. percent of rated travel. Quick opening gives maximum flow change
  at low travel (used for on-off service); linear gives flow directly
  proportional to travel (used for liquid level control); modified
  parabolic sits between linear and equal-percentage; equal percentage
  gives a flow change always proportional to the flow rate just before the
  change (used for pressure control).
concept-tags: [flow characteristic, quick opening, linear, modified parabolic, equal percentage, rated travel, percent of maximum flow, valve gain, rangeability]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-14 'Many control valves offer a choice of characteristic...,' p. 1-8 — drawing A1265"
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Power & Severe Service — extracted-figures/ch1-fig14-flow-characteristic-curves.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Teaches the same concept as `ogas-cmp-flow-characteristic-curves` (Oil &
  Gas ch1, Figure 1-10, drawing E1541), but this is a genuinely different
  chart — a different drawing number, and this version plots FOUR curves
  (adding "modified parabolic") where the Oil & Gas version plots only
  three (quick-opening, linear, equal-percentage). Catalogued as a separate
  record, not merged. Confirmed genuinely distinct on inspection (drawing
  A1265, four curves, printed p. 1-9 facing the p. 1-8 text reference) —
  cropped fresh from the source PDF at 200 dpi, figure + caption.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-flow-characteristic-rangeability-positioners
kind: topic
teaches: >
  Inherent flow characteristic (the pattern of flow-vs-travel at constant
  pressure drop) is a real selection criterion because it sets valve
  gain — quick-opening (near-linear at low travel, flattening near wide
  open, used mainly for on-off service but also for some linear-plug
  applications), linear (flow directly proportional to travel, constant
  gain, used for liquid level control), and equal-percentage (flow change
  proportional to the flow just before the change, used for pressure
  control where the system itself absorbs most of the pressure drop).
  Rangeability (ratio of maximum to minimum controllable flow) matters for
  wide load swings; rotary valves — especially partial-ball — generally
  have greater rangeability than sliding-stem. A positioner can partially
  substitute a nonlinear positioner-actuator combination for a different
  inherent characteristic, but its own frequency response/phase lag limits
  this, and positioners are not universally beneficial — some high-gain
  processes are hindered by one.
concept-tags: [flow characteristic, quick opening, linear, equal percentage, valve gain, rangeability, positioner, frequency response]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "'Flow Characteristic,' 'Rangeability,' and 'Use of Positioners' sections, pp. 1-8–1-9 — unnumbered prose, not figure-anchored"
relatedFigures: [pss-cmp-flow-characteristic-curves]
relatedTopics: [cvh-topic-flow-characteristics, cvh-topic-rangeability, ogas-topic-flow-characteristic-and-rangeability]
used-by: []
notes: >
  Verified cvh-topic-flow-characteristics (Control Valve Handbook ch5.md),
  cvh-topic-rangeability (ch1.md), and ogas-topic-flow-characteristic-and-
  rangeability (Oil & Gas Sourcebook ch1.md) all exist as real ids before
  citing. This entry additionally covers positioner-usage tradeoffs, which
  neither of those cross-referenced entries carries — a genuine addition,
  not a restatement.
```

---

### Chapter 1 — End connections (printed p. 1-9)

```yaml
id: pss-cmp-bolted-flange-end-connections
kind: figure
teaches: >
  The three common bolted flange end-connection styles for control valves:
  flat-face, raised-face, and ring-type joint. Flanged ends are used across
  the full range of working pressures most control valves are manufactured
  in, suit a temperature range from absolute zero (−273°F) to approximately
  1500°F (815°C), and are used on all valve sizes.
concept-tags: [end connections, bolted flange, flat-face, raised-face, ring-type joint, flanged ends]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-15 'Popular varieties of bolted flange end connections,' p. 1-9 — drawing A7098"
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig11-bolted-flange-end-connections.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same source drawing (A7098) as `ogas-cmp-bolted-flange-end-connections` in
  `Subject-Matter Index — Oil & Gas Sourcebook ch1.md`. Three stacked line-art
  cross-sections with their own printed labels — §6.3 applies if ever
  placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-welded-end-connections
kind: figure
teaches: >
  The two common welded end-connection styles for control valves: socket
  welding ends and butt welding ends. Welded ends are leak-tight at all
  pressures and temperatures and economical in initial cost, but are more
  difficult to remove from the line than flanged or screwed ends and are
  limited to weldable materials.
concept-tags: [end connections, welded ends, socket welding ends, butt welding ends]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 1-16 'Common welded end connections,' p. 1-9 — drawing A7099"
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig12-welded-end-connections.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same source drawing (A7099) as `ogas-cmp-welded-end-connections` in
  `Subject-Matter Index — Oil & Gas Sourcebook ch1.md`. Two stacked line-art
  cross-sections with their own printed labels — §6.3 applies if ever
  placed on a slide. Last figure in Chapter 1 — printed pp. 1-10 through
  1-14 (PDF pages 16–20) carry Tables 1-1 through 1-4 only (no further
  figures); Chapter 2 "Actuator Selection" begins at PDF page 21.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-end-connection-selection-criteria
kind: topic
teaches: >
  Three end-connection methods (screwed, flanged, welded) with real
  selection tradeoffs beyond their own construction: screwed ends (tapered
  NPT, metal-to-metal seal against mating male threads) are economical but
  usually limited to valves 2-inch and smaller and not recommended for
  elevated temperature, and complicate maintenance since removal requires
  breaking a flanged/union joint. Flanged ends are easily removed and cover
  the full working-pressure range most control valves are made in
  (absolute zero/-273F to ~1500F/815C, all valve sizes). Welded ends are
  leak-tight at all pressures/temperatures and economical initially, but
  hard to remove from the line and limited to weldable materials. A piping
  specification calling for welded connections only narrows the choice to
  sliding-stem valves specifically.
concept-tags: [end connections, screwed ends, flanged ends, welded ends, maintenance access, temperature range]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "'End Connections' section, pp. 1-9-1-10 — unnumbered prose, not figure-anchored"
relatedFigures: [pss-cmp-bolted-flange-end-connections, pss-cmp-welded-end-connections]
relatedTopics: []
used-by: []
notes: >
  The two figures' own captions name the connection styles that exist;
  this entry adds the real comparative selection reasoning (maintenance
  access, temperature range, the welded-only-narrows-to-sliding-stem
  implication) that neither figure caption carries.
```

```yaml
id: pss-topic-pressure-temperature-material-selection-criteria
kind: topic
teaches: >
  Three interlinked General Selection Criteria (Table 1-1): body pressure
  rating is ordinarily set by ANSI pressure class (150/300/600 most common
  for steel/stainless), each class corresponding to a maximum-pressure
  profile that decreases with temperature per the material's own strength;
  not all products are available in all classes, so this narrows real
  choices. Temperature considerations include body-material
  strength/ductility limits and relative thermal expansion, plus soft-part
  limits (elastomers ~200-350F, PTFE ~450F) — going from PTFE to metal
  seals at high temperature generally increases shutoff leakage, and
  high-temperature metal bearing sleeves in rotary valves impose more
  friction than PTFE bearings, reducing the pressure-drop load the shaft
  can withstand at shutoff. Material selection (the more complex criterion)
  weighs corrosion, erosion, flashing, cavitation, and process
  pressure/temperature together — piping material usually indicates body
  material, but higher valve-internal velocity means other factors often
  make valve and piping materials differ; trim material follows from body
  material, temperature range, and fluid properties, and bar stock or
  lined bodies are considered when the body material needed isn't
  available as carbon/alloy/stainless steel.
concept-tags: [pressure rating, ANSI class, temperature limits, material selection, corrosion, erosion, trim material, bar stock]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "'Pressure Ratings,' 'Temperature Considerations,' and 'Material Selection' sections, pp. 1-7-1-8 — unnumbered prose, not figure-anchored"
relatedFigures: []
relatedTopics: []
used-by: []
notes: >
  These three Table 1-1 criteria are treated as one entry since the source
  itself interlinks them tightly (temperature drives material limits,
  material drives pressure-class availability) — splitting them into three
  separate records would fragment one real, connected line of reasoning.
```

```yaml
id: pss-topic-pressure-drop-capacity-selection-criteria
kind: topic
teaches: >
  Maximum tolerable pressure drop (at shutoff or partially/fully open) is
  a real selection criterion where sliding-stem valves are generally
  superior due to their rugged moving parts — many rotary valves are
  limited to pressure drops well below their body pressure rating,
  especially under flowing conditions, due to dynamic stresses high-
  velocity flow imposes on the disk or ball segment. Flow capacity/size is
  a separate but related criterion: sliding-stem is more expensive for
  very large lines, while very small flows may have no suitable rotary
  option; a sliding-stem valve with replaceable restricted trim lets
  future capacity growth be handled by a trim change rather than a body
  replacement. Rotary products generally have much higher maximum capacity
  than sliding-stem for a given body size, making them attractive where
  available pressure drop is small — but this capacity advantage is of
  little value in high-pressure-drop applications like pressure regulation
  or letdown.
concept-tags: [pressure drop, flow capacity, sliding-stem superiority, rotary capacity advantage, restricted trim, letdown service]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "'Pressure Drop' and 'Flow Capacity' sections, pp. 1-8, 1-10 — unnumbered prose, not figure-anchored"
relatedFigures: []
relatedTopics: []
used-by: []
notes: >
  Both sections address capacity-related tradeoffs between the sliding-
  stem and rotary families and are combined here as one connected
  selection criterion, not split into two thin records.
```

```yaml
id: pss-topic-shutoff-leakage-selection-criteria
kind: topic
teaches: >
  Shutoff capability is rated by ANSI/FCI 70-2 Class (Table 1-4), but
  actual service leakage depends on many factors beyond the class number
  (pressure drop, temperature, sealing-surface condition) and cannot be
  predicted accurately from a standard-test-condition rating alone — the
  Class provides a comparison basis among similarly-configured valves, not
  a service-leakage guarantee. It is not uncommon for users to overestimate
  the shutoff class actually required. Tight-shutoff valves cost more both
  initially and in maintenance, so the decision warrants serious
  consideration, particularly for high-pressure valves where leakage can
  progress to trim destruction — requiring special seat material, seat
  preparation, and seat-load precautions.
concept-tags: [shutoff leakage, ANSI FCI 70-2, shutoff class, seat load, trim destruction, cost of tight shutoff]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "'Shutoff Capability' section, pp. 1-9-1-10 — unnumbered prose, not figure-anchored"
relatedFigures: []
relatedTopics: [ogas-topic-shutoff-leakage-classification]
used-by: []
notes: >
  Verified ogas-topic-shutoff-leakage-classification (Oil & Gas Sourcebook
  ch1.md) exists as a real id before citing — parallel sourcebook-series
  content, kept as its own record per the standing no-cross-document-merge
  rule.
```

```yaml
id: pss-topic-valve-type-selection-guidelines
kind: topic
teaches: >
  The chapter's own real rule-of-thumb conclusion, size-banded: for most
  general applications, sliding-stem for lower flow ranges, ball valves
  for intermediate capacities, high-performance butterfly for the largest
  required flows. Below 3-inch, general-purpose sliding-stem gives
  unparalleled performance/flexibility/service-life for a minimal price
  premium over rotary; at 3-inch and larger the premium is warranted, and
  for severe service sliding-stem is often the only available product. 4-
  to 6-inch is best served by transitional styles (eccentric plug or ball)
  — lower body-material cost and higher capacity than globe designs. At
  8-inch and larger, lower typical pressures/drops make high-performance
  butterfly viable — economical, tight shutoff, good control, and capacity
  well beyond globe or high-performance rotary designs. After all criteria
  are applied, remaining choices become a matter of price versus
  capability plus institutional/personal preference — no single package is
  cost-effective across the full application range.
concept-tags: [valve selection conclusion, size-banded guidelines, sliding-stem, ball valve, eccentric plug, high performance butterfly]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "'Conclusion' section, p. 1-11 — unnumbered prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-control-valve-selection-framework, pss-topic-sliding-stem-valve-family, pss-topic-ball-valve-subcategories, pss-topic-eccentric-plug-transitional-category, pss-topic-butterfly-valve-family-evolution]
used-by: []
notes: >
  This is the chapter's own real synthesis of every valve-family topic
  above into concrete size-banded guidance — the single most directly
  useful passage in the chapter for an actual selection decision, genuinely
  distinct from any one family's own description.
```

---

## Open Items

- **Chapter boundary**, confirmed directly: Chapter 1 divider = PDF p. 7;
  Chapter 2 divider = PDF p. 21. Chapter 1 = PDF pp. 7–20 (printed pp. 1-1
  through 1-14). Every page in this range was rendered at 150dpi and read.
- **Full coverage accounting**: Figures 1-1 through 1-16 — all sixteen
  accounted for, all catalogued. No gaps.
- **Table exclusion confirmed**: Table 1-1 ("Suggested General Criteria for
  Selecting Type and Brand of Control Valve," p. 1-7), Table 1-2 ("Major
  Categories and Subcategories of Control Valves," p. 1-12), Table 1-3
  ("Control Valve Characteristic Recommendations," p. 1-13), and Table 1-4
  ("Control Valve Leakage Standards," p. 1-14) are reference tables, not
  figures, and are not catalogued as components — same practice as the Oil
  & Gas Sourcebook's own chapter files.
- **Low-confidence flag**: `pss-cmp-vee-ball-v150-v200-v300-cutaway`
  (Figure 1-9) — caption and artwork strongly suggest the same source
  drawing as Oil & Gas ch1's Figure 1-7 (`ogas-cmp-vee-ball-segmented-cutaway`,
  drawing W7435), but the drawing-number stamp was not clearly legible on
  this crop, so the cross-reference is flagged as probable, not confirmed.
- **No duplicate printed figure numbers or source citation errors found**
  in this chapter.
- **Cross-reference findings against the Oil & Gas Sourcebook** (the only
  other sourcebook-series document in the library at the time of this
  pass): seven of sixteen figures confirmed as the *same source drawing*
  (identical drawing number, visually verified) as an Oil & Gas ch1 figure
  — `pss-cmp-modern-control-valve-assembly` (W8119), `pss-cmp-design-et-globe-cutaway`
  (W0992-4), `pss-cmp-ehd-high-pressure-cutaway` (W3379),
  `pss-cmp-v250-ball-valve-cutaway` (W7169), `pss-cmp-v500-eccentric-plug-cutaway`
  (W4170-3/IL), `pss-cmp-8560-high-perf-butterfly-cutaway` (W6235-2/IL),
  `pss-cmp-bolted-flange-end-connections` (A7098), and
  `pss-cmp-welded-end-connections` (A7099) — that is actually eight, not
  seven; corrected count: **eight confirmed cross-references**, plus one
  probable-but-unconfirmed (Figure 1-9, above). Three same-named-but-
  different-drawing cases were found and deliberately NOT merged:
  `pss-cmp-large-ewnt2-drilled-cage-cutaway` vs. Oil & Gas's Large ET
  figure, `pss-cmp-baumann-little-scotty-economy-valve` vs. Oil & Gas's
  Little Scotty figure, and `pss-cmp-flow-characteristic-curves` vs. Oil &
  Gas's 3-curve version (this book's version has 4 curves). No Control
  Valve Handbook cross-reference was checked in this pass (CVH's own
  chapters are Handbook-native content, not sourcebook-series content —
  left for a future pass if real overlap is ever suspected).
- **Same-document duplicate use**: the Figure 1-1 drawing (W8119) is reused
  verbatim within this same book as Chapter 2's Figure 2-12 (different
  caption) — see `Subject-Matter Index — Power & Severe Service Sourcebook
  ch2.md`'s Open Items. No second record was minted for that reuse.
- **Archive/legacy material**: none consulted, none needed — first-party
  current document throughout.
