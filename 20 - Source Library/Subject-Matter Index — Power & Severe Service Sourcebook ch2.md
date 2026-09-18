---
title: Subject-Matter Index — Power & Severe Service Sourcebook ch2
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch2 — Actuator Selection
updated: 2026-09-14
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 2

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

Record shape and precedence match `Subject-Matter Index — Power & Severe Service
Sourcebook ch1.md` exactly — see that file for the full precedence
reasoning. Every record's `used-by` is `[]`.

## Precedence

Same as Chapter 1: the Power & Severe Service Sourcebook is a **current**
document (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth
Edition, D101449X012), so every record below is `status: current`. No
archive or legacy material was consulted.

## Components

### Chapter 2 — Actuator selection framework and fail-safe mechanism (printed pp. 2-1 – 2-2)

```yaml
id: pss-topic-actuator-selection-parameters
kind: topic
teaches: >
  Five parameters quickly narrow actuator choices: power source availability
  (compressed air vs. electricity vs. water/hydraulic/pipeline pressure —
  selection depends on ease/cost of supplying either at the valve location,
  reliability, and backup power for critical loops), fail-safe requirements,
  torque/thrust requirements, control functions, and economics. Control
  functions split into two-position (on-off) — the simplest, least
  restrictive selection case — and analog (throttling), which additionally
  demands compatibility with the instrument signal and better static/dynamic
  performance (low hysteresis, minimal deadband) to ensure loop stability;
  compatibility is often inherent or add-on, but the high-performance
  characteristics cannot be bolted on, they must be designed in. Economics
  is a combination of cost, maintenance, and reliability — a simple
  spring-and-diaphragm actuator has few moving parts, low initial cost, and
  familiar maintenance; an actuator made specifically for a control valve
  (rather than retrofitted) avoids a costly performance mismatch, and one
  shipped assembled by the valve vendor eliminates separate mounting charges.
concept-tags: [actuator selection, power source, fail-safe requirements, torque, thrust, control function, two-position, throttling, economics, hysteresis, deadband]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§Power Source Availability through §Economics, pp. 2-1–2-2 — prose, not figure-anchored"
relatedTopics: [ogas-topic-actuator-design-taxonomy]
used-by: []
notes: >
  Read directly via pdftotext against the real PDF pages (21-22). This is
  the chapter's opening selection framework — no figure anchors it at all.
  Cross-referenced to Oil & Gas Sourcebook's own actuator-taxonomy topic as
  a related-but-distinct treatment (different sourcebook, different real
  text), not merged.
```

```yaml
id: pss-topic-failsafe-mechanism
kind: topic
teaches: >
  Fail-safe systems store energy — mechanically in springs, pneumatically in
  volume tanks, or in hydraulic accumulators — and are triggered to drive the
  valve to a required position (and hold it there) when the power source
  fails; in many cases process pressure itself is used to ensure or enhance
  this action. Actuator designs allow a choice of failure mode: fail-open,
  fail-closed, or hold-in-last-position, and many actuator systems provide
  this at no extra cost (spring-and-diaphragm types are inherently fail-open
  or fail-closed by construction; electric operators typically hold their
  last position instead). Fail-lock is also available via a pneumatic
  switching valve (e.g. a Fisher Type 164A) piped as a lock valve.
concept-tags: [fail-safe, stored energy, spring, volume tank, hydraulic accumulator, fail-open, fail-closed, lock last position, Type 164A]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§Fail-Safe Requirements, p. 2-1, and p. 2-4 — prose, not figure-anchored"
relatedFigures: [pss-cmp-spring-diaphragm-actuator-667-657]
used-by: []
notes: >
  Read directly against the real PDF (p. 21/pp. 2-1, p. 24/pp. 2-4). The
  spring-and-diaphragm figure entry names fail-safe as a feature but doesn't
  explain the storage/trigger mechanism itself — this topic entry is that
  mechanism, applicable across all actuator types, not just spring-diaphragm.
```

```yaml
id: pss-topic-actuator-design-categories-and-linkage
kind: topic
teaches: >
  Actuators fall into four general categories — spring-and-diaphragm,
  pneumatic piston, electric motor, electro-hydraulic — available for either
  sliding-stem or rotary valve bodies; the designs differ only by linkages or
  motion translators, the basic power sources are identical. Rotary actuators
  typically use linkages, gears, or crank arms to convert linear
  diaphragm/piston motion into the 90-degree rotation a rotary valve needs
  (some newer designs use tilting pistons/diaphragms to eliminate most
  linkage points); the most important consideration is limiting lost motion
  between the internal linkage and valve coupling. Sliding-stem actuators are
  rigidly fixed to valve stems by threaded/clamped connections with no
  linkage points, so they exhibit no lost motion and have excellent inherent
  control characteristics. Actuator-to-valve-shaft coupling method matters:
  slotted connectors on milled shaft flats are generally unsatisfactory for
  real performance; pinned connections suit nominal torque; a splined
  connector rigidly clamped to a splined shaft eliminates lost motion, is
  easy to disassemble, and handles high torque.
concept-tags: [actuator categories, spring-and-diaphragm, pneumatic piston, electric motor, electro-hydraulic, rotary linkage, sliding-stem, lost motion, splined connector]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§Actuator Designs, p. 2-2 — prose, not figure-anchored"
relatedTopics: [cvh-topic-valve-balance]
used-by: []
notes: >
  Read directly against the real PDF (p. 22/pp. 2-2). The lost-motion/
  linkage reasoning here is the mechanism-level "why" behind every rotary
  vs. sliding-stem actuator figure in this chapter, none of which state it
  individually.
```

```yaml
id: pss-topic-positioner-application-guidelines
kind: topic
teaches: >
  A positioner or booster used with a spring-and-diaphragm actuator can
  improve control, but if improperly applied can result in very poor
  control — the source gives explicit guidelines: look for rugged,
  vibration-resistant construction; calibration ease; simple, positive
  feedback linkages.
concept-tags: [positioner application, booster, spring-and-diaphragm actuator, vibration resistance, calibration, feedback linkage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "p. 2-3 (PDF p. 23) — prose immediately preceding Figure 2-1, not figure-anchored"
relatedFigures: [pss-cmp-type3582-pneumatic-positioner]
used-by: []
notes: Read directly against the real PDF (p. 23/pp. 2-3).
```

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
id: pss-topic-piston-actuator-mechanism-variants
kind: topic
teaches: >
  Piston actuators are generally more compact and offer higher torque/force
  than spring-and-diaphragm actuators (Fisher styles typically work at 50-150
  psi supply). Piston actuators used for throttling must use double-acting
  positioners that simultaneously load/unload opposite sides of the piston —
  the pressure differential drives travel, the positioner senses motion and
  equalizes pressure once the target position is reached. Two distinct
  spring-return variants exist: (1) a large, high-output spring capable of
  overcoming valve fluid forces on its own, loaded by a single-acting
  positioner much like a spring-and-diaphragm; (2) a much smaller spring that
  relies on valve fluid forces to help provide fail-safe action — in normal
  operation this variant behaves like a double-acting piston, but on failure
  the spring initiates movement helped by unbalance forces on the plug. The
  main disadvantages of piston actuators generally: high supply pressures
  needed for throttling positioners, and (without a spring) no inherent
  fail-safe system — an alternative pneumatic trip system exists but is
  complex, hard to maintain, and costly, so spring-and-diaphragm should be
  considered first wherever fail-safe is a hard requirement. As linkage
  points increase, deadband increases; as sliding parts increase, hysteresis
  increases — high hysteresis/deadband can be fine for on-off service but is
  a real caution when bolting a positioner onto such a design for throttling.
concept-tags: [piston actuator, double-acting positioner, spring-return piston, fail-safe, pneumatic trip system, hysteresis, deadband]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§Piston Actuators through the hysteresis/deadband caution, pp. 2-4–2-6 — prose, not figure-anchored"
relatedFigures: [pss-cmp-double-acting-piston-actuator-comparison, pss-cmp-type585c-spring-fail-safe-piston, pss-cmp-type1061-rotary-piston-throttling]
relatedTopics: [ogas-topic-piston-actuator-design-variants]
used-by: []
notes: >
  Read directly against the real PDF (pp. 24-26/pp. 2-4–2-6). This is the
  mechanism explanation none of the three related piston figures individually
  state — why there are two spring-return subtypes and what actually
  distinguishes them.
```

```yaml
id: pss-topic-electric-actuator-characteristics
kind: topic
teaches: >
  Electric actuators (motors + gear trains) suit remote mounting with no
  other power source, applications needing specialized thrust/stiffness, or
  highly precise control. They are economical versus pneumatic only in small
  size ranges — larger electric units operate more slowly and weigh
  considerably more than pneumatic equivalents; typical fail action is lock
  in last position. A key selection consideration is duty cycle for
  continuous closed-loop control, since applications with frequent position
  changes demand a suitable duty cycle. High-performance electric actuators
  using continuous-rated DC motors and ball-screw output can achieve precise
  control at 100% duty cycle, and compared to other designs generally provide
  the highest output for a given package size while being very stiff
  (resistant to valve forces) — an excellent choice for good throttling
  control of large, high-pressure valves.
concept-tags: [electric actuator, duty cycle, closed-loop control, DC motor, ball screw, stiffness]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§Electric Actuators, pp. 2-6–2-7 — prose, not figure-anchored"
relatedTopics: [ogas-topic-electric-actuator-selection-factors]
used-by: []
notes: >
  Read directly against the real PDF (pp. 26-27/pp. 2-6–2-7). No figure in
  this chapter depicts an electric actuator at all — this concept was
  entirely invisible to the original figures-only pass.
```

```yaml
id: pss-topic-electro-hydraulic-configurations
kind: topic
teaches: >
  An electro-hydraulic actuator internally pumps oil at high pressure to a
  piston to create output force — an excellent throttling choice given high
  stiffness, analog-signal compatibility, and excellent frequency
  response/positioning accuracy, but handicapped by high initial cost,
  complexity, and difficult maintenance. Fail-safe action is achieved via a
  return spring, a hydraulic accumulator, or a shutdown system. Two basic
  configurations exist: self-contained (includes its own motor, pump, fluid
  reservoir — can be built with spring-return fail mode) and externally
  powered (separate motor, pump, reservoir, hydraulic hoses — requires an
  accumulator to achieve a fail mode). Like electric actuators, suitable for
  remote mounting with no other power source (e.g. pipelines).
concept-tags: [electro-hydraulic actuator, self-contained, externally powered, hydraulic accumulator, fail-safe]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§Electro-Hydraulic Actuators, pp. 2-6–2-7 — prose, not figure-anchored"
relatedFigures: [pss-cmp-type350-self-contained-electro-hydraulic]
relatedTopics: [ogas-topic-electro-hydraulic-actuator-configurations]
used-by: []
notes: >
  Read directly against the real PDF (pp. 26-27/pp. 2-6–2-7). Figure 2-8
  shows only the self-contained half of this contrast; the externally-powered
  configuration and the fail-safe-mechanism distinction between the two are
  prose-only, captured here.
```

```yaml
id: pss-topic-actuator-force-calculation-globe
kind: topic
teaches: >
  Total force required to operate a globe valve = A (force to overcome
  static unbalance of the valve plug) + B (force to provide seat load) + C
  (force to overcome packing friction) + D (additional forces for specific
  applications/constructions). Unbalance force = net pressure differential ×
  net unbalance area; frequent practice takes the maximum upstream gauge
  pressure as the net pressure differential unless back pressure at maximum
  inlet pressure is always ensured by process design — net unbalance area is
  the port area for a single-seated flow-up design, may need to account for
  stem area, and even balanced valves retain a small unbalance area (per
  Table 2-1). Seat load (Table 2-2) is set by the ANSI/FCI 70-2 / IEC
  534-4 leak class required, though a higher-than-recommended seat load can
  extend seat life regardless of the classification tested. Packing friction
  (Table 2-3) depends on stem size, packing type, and compressive load, and
  is not 100% repeatable — newer live-loaded designs (especially graphite)
  can carry significant friction forces. The source's own real worked
  example: 275 lbf required to close a valve; an air-to-open actuator with
  100 sq in of diaphragm area and a 6-15 psig bench set has a 3 psig
  pre-compression margin (6 psig bench-set floor minus the 3 psig operating-range
  floor) — pre-compression force = 3 psig × 100 sq in = 300 lbf, which
  exceeds the 275 lbf required and is judged "an adequate selection."
concept-tags: [actuator force calculation, unbalance force, seat load, packing friction, bench set, pre-compression, worked example]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§Actuator Spring for Globe Valves through §Actuator Force Calculations, pp. 2-7–2-8 — prose, real worked example, not figure-anchored"
relatedFigures: [pss-cmp-recommended-seat-load-graph]
relatedTopics: [cvh-topic-valve-balance, cvh-topic-seat-load, ogas-topic-actuator-force-sizing-methodology]
used-by: []
notes: >
  Read directly against the real PDF (pp. 27-28/pp. 2-7–2-8). The A+B+C+D
  shape and worked-example style parallel both CVH's ch5 topics and Oil & Gas
  Sourcebook ch2's own force-sizing entry — genuinely the same engineering
  method taught across three source documents, each with its own real
  numbers (this one: 275 lbf / 100 sq in / 6-15 psig bench set). Kept as its
  own record per the project's standing rule against merging records across
  source documents; cross-referenced instead.
```

```yaml
id: pss-topic-piston-thrust-calculation
kind: topic
teaches: >
  Thrust from piston actuators without springs = piston area × minimum
  supply pressure = minimum available thrust (units must be kept
  compatible). Piston actuators with springs are sized the same way as
  spring-and-diaphragm actuators (per the A+B+C+D method). The manufacturer
  normally takes responsibility for actuator sizing and publishes data on
  actuator thrusts, effective diaphragm areas, and spring data, including
  methods to check maximum stem loads — because an actuator supplying too
  much force can cause the stem to buckle, bend enough to leak, or damage
  valve internals.
concept-tags: [piston actuator thrust, minimum available thrust, stem load, over-force damage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "p. 2-8 (PDF p. 28), between the globe-valve force calculation and the rotary torque tables — prose, not figure-anchored"
relatedTopics: [pss-topic-actuator-force-calculation-globe]
used-by: []
notes: Read directly against the real PDF (p. 28/pp. 2-8).
```

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
id: pss-topic-rotary-actuator-torque-methodology
kind: topic
teaches: >
  Selecting the most economical rotary-valve actuator turns on the torque
  required to open/close the valve vs. the actuator's torque output — this
  method assumes the valve is already properly sized and the application
  doesn't exceed the valve's pressure limits. Rotary valve torque is the sum
  of several components, combined by the source into two practical
  equations: Breakout Torque TB = A(ΔPshutoff) + B, and Dynamic Torque
  TD = C(ΔPeff), with real A/B/C factors given per valve design/size in
  Tables 2-4 (V-notch ball) and 2-5 (high-performance butterfly). Maximum
  rotation is the angle from closed to wide-open — normally 90 degrees, but
  some pneumatic spring-return-piston and spring-and-diaphragm actuators are
  limited to 60 or 75 degrees; for spring-and-diaphragm actuators, limiting
  rotation allows higher initial spring compression (more breakout torque),
  and the effective lever length changes with rotation, which published
  torque values (especially for pneumatic piston actuators) already reflect.
concept-tags: [rotary actuator torque, breakout torque, dynamic torque, maximum rotation, V-notch ball, high-performance butterfly]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§Actuator Sizing for Rotary Valves through §Maximum Rotation, pp. 2-9–2-10 — real equations and tables, prose, not figure-anchored"
relatedTopics: [cvh-topic-rotary-actuator-torque, ogas-topic-rotary-actuator-torque-sizing]
used-by: []
notes: >
  Read directly against the real PDF (pp. 29-30/pp. 2-9–2-10). Same real
  methodology shape as CVH ch5's and Oil & Gas Sourcebook ch2's own rotary-
  torque topics, with this book's own real A/B/C factor tables — kept
  separate per the standing cross-document rule, cross-referenced instead.
```

```yaml
id: pss-topic-actuator-type-comparison-summary
kind: topic
teaches: >
  The fundamental actuator-selection requirement is knowing the application:
  control signal, operating mode, power source available, thrust/torque
  required, and fail-safe position drive most decisions, alongside
  simplicity, maintainability, and lifetime cost; enclosed linkages and
  controlled compression springs matter for safety. The source's own
  real comparison (Table 2-6): spring-and-diaphragm — lowest cost, throttles
  without a positioner, simple, inherently fail-safe, low supply pressure,
  adjustable, easy to maintain, but limited output and larger size/weight;
  pneumatic piston — high thrust, compact, lightweight, high-ambient-
  temperature-adaptable, fast stroking, relatively stiff, but higher cost,
  fail-safe needs accessories/a spring, needs a positioner for throttling,
  and needs high supply pressure; electric motor — compact, very stiff, high
  output, but high cost, no inherent fail-safe, limited duty cycle, slow
  stroking; electro-hydraulic — high output and stiffness, excellent
  throttling, fast stroking, but high cost, complex/hard to maintain, large
  size/weight, fail-safe only via accessories. The closing guidance: simple
  designs (spring-and-diaphragm) should be considered first in most
  situations; piston actuators trade some of that simplicity for thrust
  where compactness or long travel is needed; electric/electro-hydraulic
  buy performance at real maintenance cost; and using one manufacturer's
  actuators/accessories/valves together (one source, assembled and tested)
  avoids many downstream problems.
concept-tags: [actuator comparison, spring-and-diaphragm, pneumatic piston, electric motor, electro-hydraulic, selection guidance, single-source procurement]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "§The Selection Process and §Actuator Selection Summary (Table 2-6), pp. 2-10–2-12 — prose and the real comparison table, not figure-anchored"
relatedTopics: [ogas-topic-actuator-selection-process-summary]
used-by: []
notes: >
  Read directly against the real PDF (pp. 30-32/pp. 2-10–2-12). Table 2-6
  itself is a real comparative-judgment table (advantages/disadvantages per
  type), a genuinely different case from this vault's usual "reference data,
  not a topic" table exclusion — the table IS the concept here, same
  reasoning this project already applied to CVH ch5's decision-table
  precedent, not padding.
```

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
  as its own standing full-document index (`Subject-Matter Index — Fisher 646
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

- **`kind: topic` pass, added 2026-09-17.** 11 new topic entries
  (`pss-topic-*`) added, covering genuine conceptual content the
  figures-only pass structurally couldn't see: the opening
  selection-parameters framework, the fail-safe storage/trigger mechanism,
  actuator-category/linkage reasoning, positioner application guidelines,
  piston-actuator mechanism variants, electric-actuator characteristics
  (no figure depicts an electric actuator anywhere in this chapter — fully
  invisible to the original pass), electro-hydraulic configuration
  contrast, the real globe-valve force-calculation worked example
  (A+B+C+D, 275 lbf → 300 lbf pre-compression), piston thrust calculation,
  rotary actuator torque methodology (breakout/dynamic torque equations),
  and the actuator-type comparison summary (Table 2-6's real
  advantages/disadvantages — the table itself is genuinely the concept
  here, same reasoning already applied to CVH ch5's decision-table
  precedent, not a reference-data exclusion). Every entry read directly
  from the real PDF pages (21-33), not inferred from the existing figure
  captions. Several genuinely parallel CVH ch5 and Oil & Gas Sourcebook
  ch2's own force/torque-sizing topics — kept as separate records per the
  standing rule against merging records across source documents, and
  cross-referenced instead. Integrity verified: 25 total ids (14 figures +
  11 topics), all unique, zero broken `relatedFigures`/`relatedTopics`
  references checked against the whole vault's Subject-Matter Index namespace
  (1,707 ids).
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
  `Subject-Matter Index — Power & Severe Service Sourcebook ch1.md`, which now
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
  `Subject-Matter Index — Fisher 646 Electro-Pneumatic Transducer.md` (11
  components) — no id collision (different id namespaces), noted in that
  record's own `notes` for a future reader's benefit. No Oil & Gas
  Sourcebook cross-reference was checked for this chapter (out of scope for
  this pass; Oil & Gas's own Chapter 2 "Actuator Selection" was not read).
- **Archive/legacy material**: none consulted, none needed.
