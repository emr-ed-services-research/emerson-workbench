---
title: Component Index — Power & Severe Service Sourcebook ch2
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch2 — Actuator Selection
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 2

**Chapter 2 — "Actuator Selection."** Standing full-chapter cataloging pass,
continuing the whole-document indexing of the Power & Severe Service
Sourcebook begun with Chapter 1. Every real page in the chapter's confirmed
range was rendered at 150dpi and read directly.

Chapter boundaries confirmed directly: PDF page 21 is the "Chapter 2 /
Actuator Selection" divider, real chapter content runs PDF pp. 21–33
(printed pp. 2-1 through 2-13), PDF page 34 is a blank trailing page
(printed "2-14", no content), and PDF page 35 is the "Chapter 3 / Liquid
Valve Sizing" divider. Chapter 2 = pp. 21–34 (content ends at p. 33);
Chapter 3 starts at p. 35.

Record shape and precedence match `Component Index — Power & Severe Service
Sourcebook ch1.md` exactly — see that file for the full precedence
reasoning. Every record's `used-by` is `[]`.

## Precedence

Same as Chapter 1: the Power & Severe Service Sourcebook is a **current**
document (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth
Edition, D101449X012), so every record below is `status: current`. No
archive or legacy material was consulted.

## Components

### Chapter 2 — Spring-and-diaphragm and piston actuators (printed pp. 2-4 – 2-6)

```yaml
id: pss-cmp-spring-diaphragm-actuator-667-657
kind: figure
teaches: >
  Spring-and-diaphragm actuator construction, shown as two labelled
  cutaways side by side (Type 667 and Type 657): diaphragm casing,
  diaphragm, diaphragm plate, lower diaphragm casing, actuator spring,
  actuator stem, spring seat, spring adjustor, stem connector, yoke, travel
  indicator disk, indicator scale — introduces the spring-and-diaphragm
  actuator as an excellent first choice for most control valves: inexpensive,
  simple, and inherently fail-safe.
concept-tags: [spring-and-diaphragm actuator, Type 667, Type 657, diaphragm casing, actuator spring, stem connector, yoke, fail-safe, travel indicator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-1 'Spring-and-diaphragm actuators offer an excellent first choice for most control valves... cutaways of the popular Type 667 (left) and Type 657 (right) actuators,' p. 2-4 — drawings W0364-1 (667) and W0363-1 (657)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Two fully-labelled cutaways under one figure number/caption — catalogued
  as one record matching the source's own single-figure treatment. No
  Oil & Gas ch1/ch2 equivalent checked (this pass is scoped to chapters 1–2
  of Power & Severe Service only).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-spring-diaphragm-handwheel
kind: figure
teaches: >
  A spring-and-diaphragm actuator supplied with a top-mounted handwheel,
  which allows manual operation and also acts as a travel stop or means of
  emergency operation.
concept-tags: [spring-and-diaphragm actuator, handwheel, manual operation, travel stop, emergency operation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-2 'Spring-and-diaphragm actuators can be supplied with a top-mounted handwheel...,' p. 2-4 — drawing W0368-2"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway with no printed field callouts beyond the drawing number.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-type1052-rotary-spring-diaphragm
kind: figure
teaches: >
  The Type 1052 rotary spring-and-diaphragm actuator, shown as two cutaways
  side by side: many features to provide precise control, with a splined
  actuator connection featuring a clamped lever and single-joint linkage to
  help eliminate lost motion.
concept-tags: [rotary actuator, spring-and-diaphragm, Type 1052, splined connection, clamped lever, lost motion]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-3 'The Type 1052 is a spring-and-diaphragm actuator that has many features to provide precise control...,' p. 2-5 — drawings W3813 and W2291"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Two cutaways (one internal detail, one full external+internal composite)
  under one figure number/caption — catalogued as one record.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-double-acting-piston-actuator-comparison
kind: figure
teaches: >
  Double-acting piston actuator construction, illustrated with a rotary
  example (the Type 1061): a good choice when thrust requirements exceed
  the capability of spring-and-diaphragm actuators. Piston actuators
  require a higher supply pressure but offer benefits such as high
  stiffness and small size.
concept-tags: [piston actuator, double-acting, Type 1061, rotary actuator, high stiffness, compact actuator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-4 'Double-acting piston actuators such as Type 1061 rotary actuator are a good choice when thrust requirements exceed the capability of spring-and-diaphragm actuators...,' p. 2-5 — drawing W3827-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  LOW-CONFIDENCE / JUDGMENT-CALL FLAG: this cutaway is visually very similar
  to Figure 2-6 (`pss-cmp-type1061-rotary-piston-throttling`, drawing
  W3827, no "-1" suffix) two pages later — both are captioned as showing a
  Type 1061 double-acting rotary piston actuator, from what appear to be
  two closely-related engineering drawings (W3827 vs. W3827-1, a likely
  revision pair) rather than two unrelated figures. This is NOT the
  documented "duplicate printed figure number" edge case (the two figure
  numbers, captions, and drawing numbers are all genuinely distinct) — it
  is flagged here as an honest observation that the source appears to reuse
  near-identical artwork under two different figure numbers for two
  different teaching points (a general actuator-comparison figure here vs.
  a standalone Type 1061 feature figure at 2-6). Catalogued as two separate
  records since the figure numbers, captions, and drawing numbers are all
  genuinely distinct.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-type585c-spring-fail-safe-piston
kind: figure
teaches: >
  Spring fail-safe in a piston actuator design: the Type 585C is an example
  of a spring-bias piston actuator, where process pressure can aid
  fail-safe action, or the actuator can be configured for full spring-fail
  closure.
concept-tags: [piston actuator, spring-bias, Type 585C, fail-safe, spring-fail closure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-5 'Spring fail-safe is present in this piston design. The Type 585C is an example of a spring-bias piston actuator...,' p. 2-5 — drawing W7447"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway showing internal spring-return mechanism, no printed field callouts.
mediaStatus: unreviewed
```

---

### Chapter 2 — Piston, electric, and electro-hydraulic actuators; actuator sizing (printed pp. 2-6 – 2-9)

```yaml
id: pss-cmp-type1061-rotary-piston-throttling
kind: figure
teaches: >
  The Type 1061 as a double-acting rotary piston actuator specifically for
  throttling service — a standalone feature figure following the general
  double-acting/spring-fail-safe comparison figures.
concept-tags: [piston actuator, double-acting, Type 1061, rotary actuator, throttling service]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-6 'This Type 1061 actuator is a double-acting rotary piston actuator for throttling service,' p. 2-6 — drawing W3827"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  See the judgment-call flag on `pss-cmp-double-acting-piston-actuator-comparison`
  (Figure 2-4) — this figure's artwork and drawing number (W3827) are very
  close to that one's (W3827-1), likely the same base drawing at a
  different revision, but the figure number, exact drawing number, and
  caption are all distinct, so this is catalogued as its own record.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-type1066sr-spring-return-piston
kind: figure
teaches: >
  A simplified piston actuator design for on-off service: the Type 1066SR
  incorporates spring-return capability while simplifying the actuator
  design, since the accuracy and minimal lost motion required for
  throttling are unnecessary for on-off service — a cost saving over a
  full throttling-grade piston actuator.
concept-tags: [piston actuator, spring-return, Type 1066SR, on-off service, cost savings]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-7 'Since the requirements for accuracy and minimal lost motion are unnecessary for on-off service, cost savings can be achieved...,' p. 2-6 — drawing W4102"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway with visible external linkage, no printed field callouts.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-type350-self-contained-electro-hydraulic
kind: figure
teaches: >
  A "self-contained" electro-hydraulic actuator (the Type 350): a single
  unit incorporating its own hydraulic pump and reservoir, contrasted in
  the surrounding text with an externally-powered configuration that
  requires a separate motor, pump, reservoir and hoses.
concept-tags: [electro-hydraulic actuator, Type 350, self-contained, hydraulic pump, reservoir]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-8 'The Type 350 is a \"self-contained\" electro-hydraulic actuator...,' p. 2-7 — drawing W2286"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo of a globe valve fitted with the Type 350 actuator and handwheel.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-recommended-seat-load-graph
kind: figure
teaches: >
  Recommended seat load (lb per lineal inch) vs. shutoff pressure drop
  (psi), plotted as four curves for ANSI/FCI 70-2 leak Classes II, III, IV,
  and V — used to determine the seat load required to meet factory
  acceptance leak-class tests when sizing an actuator's seat-load
  contribution.
concept-tags: [seat load, shutoff pressure drop, ANSI FCI 70-2, leak class, actuator sizing, Class II, Class III, Class IV, Class V]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-9 'Recommended seat load,' p. 2-9 — drawing A2222-4/IL"
delivery: analytical graph — falls under Style Guide §5 / not yet determined
used-by: []
notes: >
  An analytical graph, not a cutaway — falls under Style Guide §5 (diagram
  & graph conventions) if ever placed on a slide. Companion to Table 2-2
  ("Recommended Seat Load Per Leak Class for Control Valves," p. 2-8, a
  reference table — not catalogued here).
mediaStatus: unreviewed
```

---

### Chapter 2 — Positioners, actuator selection summary, and accessories (printed pp. 2-10 – 2-13)

```yaml
id: pss-cmp-type3620jp-electro-pneumatic-positioner
kind: figure
teaches: >
  The Type 3620JP electro-pneumatic positioner, which combines the
  functions of transducer and positioner into one unit — generally more
  economical than separate units but potentially less flexible.
concept-tags: [positioner, electro-pneumatic positioner, Type 3620JP, transducer, rotary valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-10 'The Type 3620JP is an electro-pneumatic positioner that combines the functions of transducer and positioner into one unit...,' p. 2-12 — drawing W4920"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo, mounted on a rotary (butterfly-style) valve.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-type3582-pneumatic-positioner
kind: figure
teaches: >
  The Type 3582 standard pneumatic positioner for spring-and-diaphragm
  actuators, labelled with its functional elements: rotary shaft arm,
  nozzle, adjusting screw, bypass lever, bellows, operating cam, flapper,
  screened vent. A time-proven design featuring ease of reversal and
  calibration, with characterizing cams available to alter its input/output
  relationship.
concept-tags: [positioner, pneumatic positioner, Type 3582, nozzle, flapper, bellows, operating cam, characterizing cam]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-11 'The standard pneumatic positioner for spring-and-diaphragm actuators is Type 3582...,' p. 2-12 — drawing W6366/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway with its own printed field callouts (ROTARY SHAFT
  ARM, NOZZLE, ADJUSTING SCREW, BYPASS LEVER, BELLOWS, OPERATING CAM,
  FLAPPER, SCREENED VENT) — a nomenclature source; Style Guide §6.3 applies
  if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-type646-electro-pneumatic-transducer
kind: figure
teaches: >
  Electro-pneumatic transducers as a common actuator accessory: the Type
  646 takes a milliamp signal and produces a proportional pneumatic
  output, and is compact, accurate, and has low air consumption.
concept-tags: [electro-pneumatic transducer, Type 646, milliamp signal, actuator accessory, low air consumption]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-13 'Electro-Pneumatic transducers are a common actuator accessory... The Type 646 is compact, accurate and has low air consumption,' p. 2-13 — drawing W4908"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo. The Fisher 646 transducer is already fully catalogued
  as its own standing full-document index (`Component Index — Fisher 646
  Electro-Pneumatic Transducer.md`, 11 components, per `Source Library.md`'s
  coverage table) — this record is the sourcebook-chapter-level teaching
  photo only, not a duplicate of that manual's own detailed component
  breakdown; no cross-reference id collision since that file's ids use a
  different prefix scheme for that specific manual's own figures.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-limit-switches-actuator-accessory
kind: figure
teaches: >
  Limit switches as a common actuator accessory: this unit can accommodate
  up to six switches with trip points adjustable to any point in travel.
concept-tags: [limit switches, actuator accessory, trip points, travel indication]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-14 'Limit switches are a common actuator accessory. This unit can accommodate up to six switches...,' p. 2-13 — drawing W5940"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway/exploded view showing internal switch-bank construction.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-type2625-pneumatic-booster
kind: figure
teaches: >
  Pneumatic boosters as a fast-control-loop accessory: on fast loops a
  positioner may not react quickly enough to be of use, and performance of
  spring-and-diaphragm actuators can instead be improved by a booster such
  as the Type 2625.
concept-tags: [pneumatic booster, Type 2625, fast control loop, spring-and-diaphragm actuator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 2-15 'On fast control loops, a positioner may not be able to react quickly enough to be of use...,' p. 2-13 — drawing W4727"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo. Last figure in Chapter 2 — PDF page 34 (printed "2-14")
  is a blank trailing page with no further content; Chapter 3 "Liquid Valve
  Sizing" begins at PDF page 35.
mediaStatus: unreviewed
```

---

## Open Items

- **Chapter boundary**, confirmed directly: Chapter 2 divider = PDF p. 21;
  real content runs through PDF p. 33 (printed p. 2-13); PDF p. 34 is a
  blank trailing page (printed "2-14," no text or figures); Chapter 3
  divider = PDF p. 35. Every page 21–34 was rendered at 150dpi and read.
- **Full coverage accounting**: Figures 2-1 through 2-15 — fifteen figure
  numbers total. Fourteen new records minted (`pss-cmp-*`, above). Figure
  2-12 ("The FIELDVUE Digital Valve Controller brings increased control
  accuracy...," p. 2-12, drawing W8119) is the SAME drawing as this book's
  own Chapter 1 Figure 1-1 — visually confirmed identical photo, reused
  verbatim under a new caption. No second record was minted for it; it is
  covered by `pss-cmp-modern-control-valve-assembly` in
  `Component Index — Power & Severe Service Sourcebook ch1.md`, which now
  notes both uses. All fifteen figure numbers are therefore accounted for
  (fourteen own records + one cross-referenced reuse).
- **Table exclusion confirmed**: Table 2-1 ("Typical Unbalance Areas of
  Control Valves," p. 2-8), Table 2-2 ("Recommended Seat Load Per Leak
  Class for Control Valves," p. 2-8), Table 2-3 ("Typical Packing Friction
  Values," p. 2-9), Table 2-4 ("Typical Rotary Shaft Valve Torque
  Factors...," p. 2-10), Table 2-5 ("Typical High Performance Butterfly
  Torque Factors...," p. 2-10), and Table 2-6 ("Actuator Feature
  Comparison," p. 2-11) are reference tables, not figures, and are not
  catalogued as components.
- **Judgment call, not a strict edge case**: Figures 2-4 and 2-6
  (`pss-cmp-double-acting-piston-actuator-comparison` and
  `pss-cmp-type1061-rotary-piston-throttling`) show visually very similar
  Type 1061 cutaway artwork under closely related drawing numbers (W3827-1
  and W3827) but distinct figure numbers and captions — catalogued as two
  separate records with the relationship flagged in both records' `notes`,
  since this doesn't cleanly fit the documented "duplicate printed figure
  number" edge case (the printed figure numbers themselves are not
  duplicated).
- **No duplicate printed figure numbers or source citation errors found**
  otherwise in this chapter.
- **Cross-reference findings**: one same-document duplicate (Figure 2-12
  reusing Chapter 1's Figure 1-1 drawing, W8119 — see above). One
  incidental note: `pss-cmp-type646-electro-pneumatic-transducer` (Figure
  2-13) depicts the same product already covered in depth by the standing
  `Component Index — Fisher 646 Electro-Pneumatic Transducer.md` (11
  components) — no id collision (different id namespaces), noted in that
  record's own `notes` for a future reader's benefit. No Oil & Gas
  Sourcebook cross-reference was checked for this chapter (out of scope for
  this pass; Oil & Gas's own Chapter 2 "Actuator Selection" was not read).
- **Archive/legacy material**: none consulted, none needed.
