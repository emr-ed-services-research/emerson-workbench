---
title: Curriculum — CVE1
type: reference
tags:
  - curriculum
  - pipeline
course: Control Valve Engineering 1
updated: 2026-09-19
---

# Curriculum Registry — CVE1

> [!note] Rebuilt 2026-09-19 from `Competency Hierarchy — CVE1, CVE2, CVE3 v3.md`
> Everything before this date (attempts 1-4, the four-competency map, the
> productive-failure "modules as scheduling seams only" architecture) is
> retired — kept in git history, not reproduced here. `v3` is the
> authoritative competency design; this file exists only to express it in
> the canonical flat-competency-catalogue schema (`curriculum-development.md`)
> that Stage 1 origination actually reads.
>
> **New this rebuild (Franz, 2026-09-19):** v3 only assigned an id at the
> **Enabling Competency** level — one id per chapter, shared by every
> Learning Objective inside it. The canonical schema below needs one id per
> LO. Every LO id below is newly minted this pass: `<EC id>.<lo-slug>`,
> the EC id verbatim from v3, the slug a short kebab-case description of
> that one LO's own skill (matching `curriculum-development.md`'s "Slug"
> convention). Nothing about v3's scope, grouping, or chapter design
> changed — this is id-minting only.
>
> **Bloom-level note:** several of v3's LO verbs (`interpret`, `predict`,
> `cross-reference`, `perform`) aren't in `instructional-design.js`'s
> current `DOMAIN_VERBS.engineering` menu. Classified here by nearest fit
> against how the SAME words are already tiered in the `instrumentation`/
> `maintenance` menus (`interpret`→analyze, matching instrumentation's own
> analyze-tier `interpret`) or by the bloom tier's own plain meaning
> (`perform`→apply). Flagging rather than silently assuming — worth a
> future look at whether `DOMAIN_VERBS.engineering` needs widening, not
> blocking this build.

The schema: a **competency** is a flat skill id. A course's Terminal
Competencies group its Enabling Competencies (chapters); each chapter's own
Learning Objectives are this registry's actual flat catalogue entries — the
granularity Stage 1 selects from per module. See `curriculum-development.md`
for the full record shapes.

---

## Terminal Competencies

```yaml
- id: cve1-tc1
  course: Control Valve Engineering 1
  enablingChapters: [1, 2, 3, 4, 5, 6, 8]
  statement: >
    Given a control loop and a stated liquid or compressible service,
    select a valve body/closure-member type and flow characteristic that
    fit the loop's real behavior, verify the choice against shutoff/
    pressure-temperature standards, calculate the required Cv, and
    calculate the actuator force or torque needed to close it against
    real seat load and unbalance.

- id: cve1-tc2
  course: Control Valve Engineering 1
  enablingChapters: [7, 9, 10]
  statement: >
    Select a packing system meeting a service's temperature, friction, and
    fugitive-emissions requirement; install and commission it correctly
    (piping arrangement, flushing, sacrificial trim); and explain that
    selection's real relevance to an operator's decarbonization strategy.
```

---

## Module map (per v3 — chapter/module boundaries, not yet cut into course.json slots)

| Chapter | EC | Modules (v3 grouping) |
| --- | --- | --- |
| 1. Control Loop Fundamentals & the Valve's Role as Final Control Element | `eng.foundations.control-loop-and-final-control-element` | M1 Feedback Loop & Valve Body Families (LO1-2) · M2 Gain, Rangeability, Deadband & Dynamic Response (LO3-6) |
| 2. Process Variability, Loop Performance & Valve Diagnostics | `eng.foundations.process-variability-and-loop-performance` | M1 Reading Variability & Its Cost (LO1-2) · M2 Diagnosing Valve-Level Causes (LO3-5) |
| 3. Valve Body & Closure-Member Type Selection | `eng.selection.valve-body-and-type-taxonomy` | M1 Body Family Taxonomy (LO1) · M2 Guiding & Restricted-Capacity Trim (LO2-3) · M3 Rotary Subtypes & Selection Process (LO4) · M4 Check Valves, End Connections & Pressure Class (LO5-6) |
| 4. Flow Characteristic & Rangeability | `eng.selection.flow-characteristic-and-rangeability` | M1 Inherent Characteristics & How They're Made (LO1-2) · M2 Installed Characteristic & Rangeability (LO3-4) |
| 5. Shutoff/Leakage Classification, Pressure-Temperature Rating & Standards | `eng.selection.shutoff-leakage-and-standards` | M1 Leakage Classification & Fugitive-Emissions Standards (LO1-2) · M2 P-T Rating & Code Jurisdiction (LO3-4) |
| 6. Actuator Selection & Force/Torque Sizing | `eng.actuation.actuator-selection-and-force-torque-sizing` | M1 Actuator Mechanism Types & Selection (LO1-2) · M2 Force & Torque Sizing (LO3-4) · M3 Bench Set & Extreme-Service Variants (LO5-6) |
| 7. Packing Selection & Fugitive-Emissions Control | `eng.packing.selection-and-fugitive-emissions` | M1 Packing Material & Arrangement Selection (LO1-2) · M2 Emissions Standards & Compliance (LO3) · M3 Bonnet Types & End Connections (LO4-5) |
| 8. Valve Sizing Fundamentals: Liquid & Compressible Flow | `eng.sizing.fundamentals-liquid-and-compressible` | M1 Liquid Sizing & Critical Pressure Ratio (LO1-2) · M2 Compressible Sizing & Choked Flow (LO3-4) |
| 9. Installation Practice: Piping Arrangement, Orientation & Commissioning | `eng.installation.piping-practice-and-orientation` | M1 Piping Arrangement & Line Sizing (LO1-2) · M2 Welding Procedure & Commissioning Flush (LO3-4) |
| 10. Decarbonization & Emissions Strategy: Industry Context | `eng.context.decarbonization-and-emissions-strategy` | M1 Emissions Scopes & Decarbonization Frameworks (LO1-2) · M2 Net-Zero Targets & the Valve's Contribution (LO3-4) |

---

## Competencies

Grouped by chapter (Enabling Competency). Statements are v3's own LO
sentences verbatim; `bloom` per the note above.

### `eng.foundations.control-loop-and-final-control-element` (Chapter 1)

```yaml
- { id: eng.foundations.control-loop-and-final-control-element.identify-final-control-element, bloom: understand,
    statement: "Describe a feedback control loop's components and identify the valve's function as final control element." }
- { id: eng.foundations.control-loop-and-final-control-element.distinguish-body-families, bloom: understand,
    statement: "Distinguish sliding-stem from rotary valve body families and identify styles from photo/cutaway." }
- { id: eng.foundations.control-loop-and-final-control-element.characteristic-and-gain-interaction, bloom: understand,
    statement: "Explain how flow characteristic and installed gain interact with loop dynamics." }
- { id: eng.foundations.control-loop-and-final-control-element.calculate-rangeability, bloom: apply,
    statement: "Calculate required rangeability for a given turndown and explain the low-flow control consequence of undersizing it." }
- { id: eng.foundations.control-loop-and-final-control-element.deadband-friction-effects, bloom: understand,
    statement: "Explain how deadband/friction degrade loop performance and read a deadband graph." }
- { id: eng.foundations.control-loop-and-final-control-element.dynamic-response-characteristics, bloom: understand,
    statement: "Describe the dynamic-response characteristics a valve contributes to loop response." }
```

### `eng.foundations.process-variability-and-loop-performance` (Chapter 2)

```yaml
- { id: eng.foundations.process-variability-and-loop-performance.interpret-variability-and-economics, bloom: analyze,
    statement: "Interpret process-variability distributions and relate variability to loop economics." }
- { id: eng.foundations.process-variability-and-loop-performance.oversizing-distortion-effects, bloom: understand,
    statement: "Explain how oversizing distorts installed characteristic/gain." }
- { id: eng.foundations.process-variability-and-loop-performance.distinguish-deadband-response-time, bloom: understand,
    statement: "Distinguish deadband from response time using a summary table." }
- { id: eng.foundations.process-variability-and-loop-performance.performance-test-loop-and-signature-testing, bloom: understand,
    statement: "Describe performance-test-loop setup and signature-series testing." }
- { id: eng.foundations.process-variability-and-loop-performance.diagnose-degraded-valve-from-signature-data, bloom: analyze,
    statement: "Interpret a signature-data overlay and ValveLink screen to identify a degraded valve." }
```

### `eng.selection.valve-body-and-type-taxonomy` (Chapter 3)

```yaml
- { id: eng.selection.valve-body-and-type-taxonomy.classify-body-family, bloom: understand,
    statement: "Classify body family (globe, angle, three-way, rotary, gate, diaphragm, pinch, plug)." }
- { id: eng.selection.valve-body-and-type-taxonomy.select-guiding-method, bloom: analyze,
    statement: "Compare guiding methods and select against stability requirement." }
- { id: eng.selection.valve-body-and-type-taxonomy.select-restricted-capacity-trim, bloom: evaluate,
    statement: "Select restricted-capacity trim for low-Cv service." }
- { id: eng.selection.valve-body-and-type-taxonomy.match-rotary-subtype-to-application, bloom: understand,
    statement: "Distinguish rotary subtypes and match to application." }
- { id: eng.selection.valve-body-and-type-taxonomy.select-check-valve-style, bloom: evaluate,
    statement: "Select check-valve style for backflow prevention." }
- { id: eng.selection.valve-body-and-type-taxonomy.verify-end-connection-and-pressure-class, bloom: apply,
    statement: "Apply end-connection/pressure-class criteria and verify rated class from a body-bonnet/pressure-seal detail." }
```

### `eng.selection.flow-characteristic-and-rangeability` (Chapter 4)

```yaml
- { id: eng.selection.flow-characteristic-and-rangeability.distinguish-inherent-characteristics, bloom: understand,
    statement: "Distinguish linear, equal-percentage, and quick-opening inherent flow characteristics from their curves." }
- { id: eng.selection.flow-characteristic-and-rangeability.characterization-mechanism, bloom: understand,
    statement: "Explain how plug contour and cage-port design physically produce a given flow characteristic." }
- { id: eng.selection.flow-characteristic-and-rangeability.predict-installed-vs-inherent-divergence, bloom: analyze,
    statement: "Predict how installed characteristic diverges from inherent characteristic as system pressure-drop ratio changes." }
- { id: eng.selection.flow-characteristic-and-rangeability.select-characteristic-for-rangeability, bloom: evaluate,
    statement: "Select a flow characteristic and estimate resulting rangeability for a given positioner/control scheme." }
```

### `eng.selection.shutoff-leakage-and-standards` (Chapter 5)

```yaml
- { id: eng.selection.shutoff-leakage-and-standards.classify-and-select-shutoff-class, bloom: understand,
    statement: "Classify required shutoff via FCI 70-2/ANSI leakage classes and select trim/seat to meet it." }
- { id: eng.selection.shutoff-leakage-and-standards.interpret-iso15848-qualification-data, bloom: analyze,
    statement: "Interpret ISO 15848-1 qualification requirements and measured leak-rate/concentration data." }
- { id: eng.selection.shutoff-leakage-and-standards.verify-pt-rating-and-material, bloom: apply,
    statement: "Apply P-T rating classes and material-selection criteria to verify a body/bonnet's rated class." }
- { id: eng.selection.shutoff-leakage-and-standards.identify-code-jurisdiction, bloom: analyze,
    statement: "Cross-reference applicable standards and identify correct code jurisdiction." }
```

### `eng.actuation.actuator-selection-and-force-torque-sizing` (Chapter 6)

```yaml
- { id: eng.actuation.actuator-selection-and-force-torque-sizing.distinguish-actuator-mechanism-types, bloom: understand,
    statement: "Distinguish actuator mechanism types (spring-diaphragm, piston, rack-and-pinion, electric, manual) and identify from photo/cutaway." }
- { id: eng.actuation.actuator-selection-and-force-torque-sizing.select-actuator-type-and-failsafe, bloom: evaluate,
    statement: "Select actuator type/fail-safe action for a given service and orientation." }
- { id: eng.actuation.actuator-selection-and-force-torque-sizing.calculate-sliding-stem-thrust, bloom: apply,
    statement: "Calculate required thrust for a sliding-stem valve (unbalance area, seat load)." }
- { id: eng.actuation.actuator-selection-and-force-torque-sizing.calculate-rotary-torque, bloom: apply,
    statement: "Calculate required torque for a rotary valve." }
- { id: eng.actuation.actuator-selection-and-force-torque-sizing.perform-bench-set-adjustment, bloom: apply,
    statement: "Perform bench-set adjustment and explain its criticality to travel accuracy." }
- { id: eng.actuation.actuator-selection-and-force-torque-sizing.select-extreme-service-actuator-variant, bloom: evaluate,
    statement: "Select actuator design variant (piston vs. diaphragm, electric, electro-hydraulic) for extreme-force or non-pneumatic services." }
```

### `eng.packing.selection-and-fugitive-emissions` (Chapter 7)

```yaml
- { id: eng.packing.selection-and-fugitive-emissions.select-packing-material-and-arrangement, bloom: evaluate,
    statement: "Select a packing material/arrangement (PTFE V-ring, duplex, graphite ULF, EnviroSeal variants) for a given temperature, friction, and emissions-class requirement." }
- { id: eng.packing.selection-and-fugitive-emissions.apply-packing-friction-guidelines, bloom: understand,
    statement: "Explain how packing friction is measured and how 100-ppm/non-environmental guideline charts determine an acceptable configuration." }
- { id: eng.packing.selection-and-fugitive-emissions.select-packing-for-emissions-target, bloom: apply,
    statement: "Apply fugitive-emissions standards and VOC/LDAR measurement frequency to select a packing system meeting a stated emissions target." }
- { id: eng.packing.selection-and-fugitive-emissions.select-bonnet-type, bloom: evaluate,
    statement: "Select a bonnet type (standard, extension, bellows-seal, cryogenic-extension) for a temperature/isolation requirement and identify variants from assembly figures." }
- { id: eng.packing.selection-and-fugitive-emissions.select-end-connection-and-precautions, bloom: evaluate,
    statement: "Select an end connection (flanged, welded) and identify galvanic-corrosion/storage and oxygen-service packing precautions." }
```

### `eng.sizing.fundamentals-liquid-and-compressible` (Chapter 8)

```yaml
- { id: eng.sizing.fundamentals-liquid-and-compressible.calculate-liquid-cv, bloom: apply,
    statement: "Calculate required Cv for a liquid service using the standard equation, including piping-geometry (Fp) correction." }
- { id: eng.sizing.fundamentals-liquid-and-compressible.determine-liquid-choked-flow, bloom: apply,
    statement: "Determine liquid critical pressure ratio from standard water/non-water charts and check for choked liquid flow." }
- { id: eng.sizing.fundamentals-liquid-and-compressible.calculate-compressible-cv, bloom: apply,
    statement: "Calculate required Cv for a compressible (gas/steam) service." }
- { id: eng.sizing.fundamentals-liquid-and-compressible.determine-compressible-choked-flow, bloom: apply,
    statement: "Apply expansion factor and Xtp piping-geometry correction to determine whether a compressible service is choked." }
```

### `eng.installation.piping-practice-and-orientation` (Chapter 9)

```yaml
- { id: eng.installation.piping-practice-and-orientation.apply-piping-arrangement-guidelines, bloom: apply,
    statement: "Apply standard piping-arrangement guidelines (straight-run, orientation) for a control valve installation." }
- { id: eng.installation.piping-practice-and-orientation.evaluate-line-size-and-velocity, bloom: analyze,
    statement: "Evaluate whether line size matches valve size and identify velocity-limitation violations." }
- { id: eng.installation.piping-practice-and-orientation.describe-welding-procedure-staging, bloom: understand,
    statement: "Describe correct welding-procedure staging for a welded-end installation." }
- { id: eng.installation.piping-practice-and-orientation.explain-flushing-and-sacrificial-trim, bloom: understand,
    statement: "Explain the purpose of system flushing and sacrificial trim and identify when each is required." }
```

### `eng.context.decarbonization-and-emissions-strategy` (Chapter 10)

```yaml
- { id: eng.context.decarbonization-and-emissions-strategy.classify-emissions-scope, bloom: understand,
    statement: "Distinguish GHG emissions Scopes 1/2/3 and classify a valve-related emissions source into the correct scope." }
- { id: eng.context.decarbonization-and-emissions-strategy.explain-decarbonization-pathways, bloom: understand,
    statement: "Explain how decarbonization pathways and a greening framework are typically structured at an industrial operator." }
- { id: eng.context.decarbonization-and-emissions-strategy.distinguish-net-zero-and-carbon-neutral, bloom: understand,
    statement: "Distinguish carbon-neutral from net-zero and explain typical net-zero target-setting." }
- { id: eng.context.decarbonization-and-emissions-strategy.explain-methane-reduction-contribution, bloom: understand,
    statement: "Explain how valve-related methane reduction contributes measurably to a decarbonization target." }
```

---

## Asset-variant registry (topics + figures per LO)

Verbatim from v3's own per-LO `sources:` citations — the Subject-Matter Index
ids Stage 2 selects from. `topics:` are `-topic-` ids (textual grounding —
required for any mechanism/tradeoff/"why" claim); `figures:` are `-cmp-` ids
(visual assets). An empty `topics:` list is a real, flagged condition, not
an omission — see `verify.ps1`'s figure-only sourcing check.

```yaml
eng.foundations.control-loop-and-final-control-element.identify-final-control-element:
  topics: [cvh-topic-control-loop-fundamentals]
  figures: [cvh-cmp-feedback-control-loop]
eng.foundations.control-loop-and-final-control-element.distinguish-body-families:
  topics: []
  figures: [cvh-cmp-sliding-stem-valve-photo, cvh-cmp-sliding-stem-exploded, cvh-cmp-angle-valve-photo, cvh-cmp-rotary-valve-photo, cvh-cmp-segmented-ball, cvh-cmp-v-notch-ball, cvh-cmp-eccentric-disk-valve, cvh-cmp-cage-types, cvh-cmp-three-way-globe-valve-overview]
eng.foundations.control-loop-and-final-control-element.characteristic-and-gain-interaction:
  topics: [cvh-topic-flow-characteristic-and-valve-gain]
  figures: []
eng.foundations.control-loop-and-final-control-element.calculate-rangeability:
  topics: [cvh-topic-rangeability]
  figures: []
eng.foundations.control-loop-and-final-control-element.deadband-friction-effects:
  topics: [cvh-topic-deadband-and-friction]
  figures: [cvh-cmp-deadband-graph]
eng.foundations.control-loop-and-final-control-element.dynamic-response-characteristics:
  topics: [cvh-topic-dynamic-response-characteristics]
  figures: []

eng.foundations.process-variability-and-loop-performance.interpret-variability-and-economics:
  topics: [cvh-topic-process-variability, cvh-topic-closed-loop-economics]
  figures: [cvh-cmp-process-variability-distributions, cvh-cmp-closed-loop-disturbance-summary]
eng.foundations.process-variability-and-loop-performance.oversizing-distortion-effects:
  topics: [cvh-topic-valve-oversizing-effects]
  figures: [cvh-cmp-installed-characteristic-and-gain, cvh-cmp-valve-style-control-range-comparison]
eng.foundations.process-variability-and-loop-performance.distinguish-deadband-response-time:
  topics: [cvh-topic-deadband, cvh-topic-valve-response-time]
  figures: [cvh-cmp-valve-response-time-summary-table]
eng.foundations.process-variability-and-loop-performance.performance-test-loop-and-signature-testing:
  topics: [cvh-topic-signature-series-testing]
  figures: [cvh-cmp-performance-test-loop-photo, cvh-cmp-signature-series-testing-photo]
eng.foundations.process-variability-and-loop-performance.diagnose-degraded-valve-from-signature-data:
  topics: []
  figures: [cvh-cmp-signature-data-comparison-overlay, cvh-cmp-valvelink-software-screens]

eng.selection.valve-body-and-type-taxonomy.classify-body-family:
  topics: [cvh-topic-valve-body-fundamentals, cvh-topic-globe-valve-body-selection, cvh-topic-rotary-valve-body-selection, cvh-topic-valve-function-taxonomy]
  figures: [cvh-cmp-flanged-angle-valve-body, cvh-cmp-single-ported-globe-valve-body, cvh-cmp-double-ported-globe-valve-body-reverse-acting, cvh-cmp-three-way-globe-valve-cutaway, cvh-cmp-butterfly-shaft-offset-disc-center, cvh-cmp-segmented-v-notch-ball, cvh-cmp-full-port-ball-control-valve, cvh-cmp-eccentric-plug-valve-body, cvh-cmp-solid-wedge-gate-valve, cvh-cmp-weir-type-diaphragm-valve, cvh-cmp-air-operated-pinch-valve, cvh-cmp-lubricated-plug-valve]
eng.selection.valve-body-and-type-taxonomy.select-guiding-method:
  topics: [cvh-topic-valve-plug-guiding-methods, cvh-topic-valve-guiding, ref-topic-port-guided-valve-limitations, pp-topic-valve-plug-guiding-methods]
  figures: [cvh-cmp-cage-style-trim-balanced-plug-soft-seat, cvh-cmp-body-guiding, cvh-cmp-stem-bonnet-guiding]
eng.selection.valve-body-and-type-taxonomy.select-restricted-capacity-trim:
  topics: [cvh-topic-restricted-capacity-trim, pp-topic-restricted-capacity-trim-rationale]
  figures: [cvh-cmp-adapter-reduced-flow-capacity]
  # Corrected 2026-09-19: the prior citation (cvh-cmp-plug-disk-globe-valve,
  # cvh-cmp-t-type-globe-valve) are CVH ch10 general isolation-valve
  # body-style cutaways (plug-disk vs. T-pattern globe bodies), unrelated to
  # restricted-capacity trim. cvh-cmp-adapter-reduced-flow-capacity (§3.7,
  # Figure 3.42) is the real figure — the sole relatedFigures entry on
  # cvh-topic-restricted-capacity-trim itself.
eng.selection.valve-body-and-type-taxonomy.match-rotary-subtype-to-application:
  topics: [ogas-topic-control-valve-selection-process, ogas-topic-sliding-stem-valve-family, ogas-topic-rotary-valve-family, pss-topic-ball-valve-subcategories, pss-topic-eccentric-plug-transitional-category, pss-topic-butterfly-valve-family-evolution]
  figures: [cvh-cmp-valve-selection-process-flowchart, cvh-cmp-high-performance-butterfly-valve, cvh-cmp-ball-valve-cavitation-noise-options, cvh-cmp-full-port-ball-valve-trunnion]
eng.selection.valve-body-and-type-taxonomy.select-check-valve-style:
  topics: [cvh-topic-check-valve-selection]
  figures: [cvh-cmp-stop-function, cvh-cmp-stop-check-function, cvh-cmp-swing-check-valve, cvh-cmp-lever-weight-swing-check-valve, cvh-cmp-tilting-check-valve, cvh-cmp-horizontal-lift-check-valve]
eng.selection.valve-body-and-type-taxonomy.verify-end-connection-and-pressure-class:
  topics: [cvh-topic-body-bonnet-junction, pss-topic-end-connection-selection-criteria, pss-topic-pressure-drop-capacity-selection-criteria, pss-topic-valve-type-selection-guidelines, pp-topic-flow-capacity-selection-tradeoff]
  figures: [cvh-cmp-pressure-seal-detail, cvh-cmp-gate-valve-pressure-seal, cvh-cmp-gate-valve-bolted-bonnet, cvh-cmp-cast-iron-gate-valve-dimensions, cvh-cmp-steel-gate-valve-class150-dimensions]

eng.selection.flow-characteristic-and-rangeability.distinguish-inherent-characteristics:
  topics: [cvh-topic-flow-characteristics]
  figures: [cvh-cmp-inherent-characteristics-graph, cvh-cmp-inherent-flow-characteristic-curves, cvh-cmp-flow-characteristic-curves-repeat]
eng.selection.flow-characteristic-and-rangeability.characterization-mechanism:
  topics: [cvh-topic-flow-characterization-mechanism]
  figures: [cvh-cmp-plug-contour-flow-characterization, cvh-cmp-quick-opening-construction, cvh-cmp-characterized-cages-globe]
eng.selection.flow-characteristic-and-rangeability.predict-installed-vs-inherent-divergence:
  topics: [cvh-topic-installed-vs-inherent-characteristic]
  figures: []
eng.selection.flow-characteristic-and-rangeability.select-characteristic-for-rangeability:
  topics: [pss-topic-flow-characteristic-rangeability-positioners, ogas-topic-flow-characteristic-and-rangeability, pp-topic-flow-characteristic-and-rangeability]
  figures: [ogas-cmp-flow-characteristic-curves, pss-cmp-flow-characteristic-curves]

eng.selection.shutoff-leakage-and-standards.classify-and-select-shutoff-class:
  topics: [cvh-topic-seat-leakage-classification, ogas-topic-shutoff-leakage-classification, pp-topic-shutoff-leakage-classification, pss-topic-shutoff-leakage-selection-criteria]
  figures: [cvh-cmp-fci91-1-leakage-class-summary]
eng.selection.shutoff-leakage-and-standards.interpret-iso15848-qualification-data:
  topics: []
  figures: [cvh-cmp-iso15848-1-qualification-requirements, cvh-cmp-iso15848-1-measured-leak-rate, cvh-cmp-iso15848-1-measured-leak-concentration]
eng.selection.shutoff-leakage-and-standards.verify-pt-rating-and-material:
  topics: [pss-topic-pressure-temperature-material-selection-criteria, pss-topic-pressure-rating-classes, pp-topic-pressure-temperature-material-selection-criteria]
  figures: []
eng.selection.shutoff-leakage-and-standards.identify-code-jurisdiction:
  topics: [pss-topic-valve-standards-crosswalk, pss-topic-boiler-piping-code-jurisdiction]
  figures: []

eng.actuation.actuator-selection-and-force-torque-sizing.distinguish-actuator-mechanism-types:
  topics: [cvh-topic-actuator-mechanism-basics]
  figures: [cvh-cmp-direct-acting-actuator, cvh-cmp-piston-actuator, cvh-cmp-reverse-acting-actuator, cvh-cmp-rotary-actuator-cutaway, cvh-cmp-double-acting-piston-actuator, cvh-cmp-scotch-yoke-piston-actuator, cvh-cmp-manual-actuator-sliding-stem, cvh-cmp-manual-actuator-rotary, cvh-cmp-rack-and-pinion-actuator, cvh-cmp-electric-actuator-sliding-stem, cvh-cmp-electric-actuator-rotary, cvh-cmp-spring-diaphragm-actuator-generic]
eng.actuation.actuator-selection-and-force-torque-sizing.select-actuator-type-and-failsafe:
  topics: [cvh-topic-actuator-type-selection, pss-topic-actuator-body-orientation, pss-topic-actuator-selection-parameters, pss-topic-actuator-design-categories-and-linkage, pss-topic-actuator-type-comparison-summary]
  figures: []
eng.actuation.actuator-selection-and-force-torque-sizing.calculate-sliding-stem-thrust:
  topics: [cvh-topic-actuator-force-selection, cvh-topic-valve-balance, cvh-topic-seat-load, pss-topic-actuator-force-calculation-globe, pss-topic-piston-thrust-calculation]
  figures: [cvh-cmp-unbalance-area-table, cvh-cmp-seat-load-graph, cvh-cmp-recommended-seat-load-table]
eng.actuation.actuator-selection-and-force-torque-sizing.calculate-rotary-torque:
  topics: [cvh-topic-rotary-actuator-torque, ogas-topic-rotary-actuator-torque-sizing, pss-topic-rotary-actuator-torque-methodology]
  figures: [cvh-cmp-rotary-actuator-cutaway]
eng.actuation.actuator-selection-and-force-torque-sizing.perform-bench-set-adjustment:
  topics: [cvh-topic-bench-set-adjustment, cvh-topic-bench-set, cvh-topic-valve-travel-criticality]
  figures: [cvh-cmp-bench-set-seating-force-graph]
eng.actuation.actuator-selection-and-force-torque-sizing.select-extreme-service-actuator-variant:
  topics: [ogas-topic-actuator-design-taxonomy, ogas-topic-fail-safe-action-mechanism, ogas-topic-piston-actuator-design-variants, ogas-topic-electric-actuator-selection-factors, ogas-topic-electro-hydraulic-actuator-configurations, ogas-topic-actuator-force-sizing-methodology, ogas-topic-actuator-selection-process-summary, pss-topic-failsafe-mechanism, pss-topic-piston-actuator-mechanism-variants, pss-topic-electric-actuator-characteristics, pss-topic-electro-hydraulic-configurations, pss-topic-piston-diaphragm-speed-myth, pss-topic-positioner-gain-mechanism]
  figures: [cvh-cmp-field-reversible-multi-spring-actuator, cvh-cmp-diaphragm-actuator-rotary-valve, cvh-cmp-actuator-side-handwheel, cvh-cmp-actuator-top-handwheel]

eng.packing.selection-and-fugitive-emissions.select-packing-material-and-arrangement:
  topics: [cvh-topic-packing-selection-criteria, ogas-topic-packing-selection-framework, pss-topic-packing-selection-framework, pss-topic-kalrez-vs-enviroseal-ptfe-tradeoff, pss-topic-enviroseal-vs-highseal-extreme-service, pss-topic-packing-arrangement-configurations]
  figures: [cvh-cmp-stem-packing-types, cvh-cmp-packing-material-arrangements-globe, cvh-cmp-single-ptfe-vring-packing, cvh-cmp-enviroseal-ptfe-packing-system, cvh-cmp-enviroseal-duplex-packing-system, cvh-cmp-enviroseal-graphite-ulf-packing-system, cvh-cmp-enviroseal-graphite-packing-rotary]
eng.packing.selection-and-fugitive-emissions.apply-packing-friction-guidelines:
  topics: [cvh-topic-packing-friction]
  figures: [cvh-cmp-packing-friction-values-table, cvh-cmp-packing-guidelines-chart-100ppm, cvh-cmp-packing-guidelines-chart-non-environmental]
eng.packing.selection-and-fugitive-emissions.select-packing-for-emissions-target:
  topics: [cvh-topic-fugitive-emissions-standards, pp-topic-fugitive-emissions-regulatory-framework]
  figures: [cvh-cmp-voc-ldar-measurement-frequency]
eng.packing.selection-and-fugitive-emissions.select-bonnet-type:
  topics: [cvh-topic-bonnet-function-and-types, pp-topic-bonnet-function-and-types]
  figures: [cvh-cmp-bellows-seal-bonnet, cvh-cmp-bonnet-assembly, cvh-cmp-bonnet-variations, cvh-cmp-fabricated-extension-bonnet, cvh-cmp-enviroseal-bellows-seal-bonnet, cvh-cmp-welded-leaf-bellows, cvh-cmp-mechanically-formed-bellows]
eng.packing.selection-and-fugitive-emissions.select-end-connection-and-precautions:
  topics: [cvh-topic-end-connection-selection, pp-topic-end-connection-selection-criteria, pss-topic-galvanic-corrosion-and-storage, pss-topic-oxygen-service-packing-precautions, ref-topic-laminated-filament-graphite-packing]
  figures: [cvh-cmp-bolted-flange-end-connections, cvh-cmp-welded-end-connections, cvh-cmp-typical-bonnet-flange-stud-bolts]

eng.sizing.fundamentals-liquid-and-compressible.calculate-liquid-cv:
  topics: [cvh-topic-liquid-sizing-methodology, ogas-topic-liquid-sizing-methodology, pss-topic-liquid-sizing-methodology, ogas-topic-piping-geometry-factor, pss-topic-piping-geometry-factor]
  figures: []
eng.sizing.fundamentals-liquid-and-compressible.determine-liquid-choked-flow:
  topics: []
  figures: [ogas-cmp-ff-chart-water, ogas-cmp-ff-chart-nonwater, pss-cmp-liquid-critical-pressure-ratio-water, pss-cmp-liquid-critical-pressure-ratio-other-liquids]
eng.sizing.fundamentals-liquid-and-compressible.calculate-compressible-cv:
  topics: [cvh-topic-compressible-sizing-methodology, pss-topic-gas-steam-sizing-methodology]
  figures: []
eng.sizing.fundamentals-liquid-and-compressible.determine-compressible-choked-flow:
  topics: [pss-topic-choked-flow-expansion-factor, pss-topic-xtp-piping-geometry-correction]
  figures: []

eng.installation.piping-practice-and-orientation.apply-piping-arrangement-guidelines:
  topics: [pss-topic-control-valve-piping-arrangement]
  figures: []
eng.installation.piping-practice-and-orientation.evaluate-line-size-and-velocity:
  topics: [pss-topic-line-size-vs-valve-size, pss-topic-velocity-limitations]
  figures: []
eng.installation.piping-practice-and-orientation.describe-welding-procedure-staging:
  topics: [pss-topic-welding-procedure-stages]
  figures: []
eng.installation.piping-practice-and-orientation.explain-flushing-and-sacrificial-trim:
  topics: [pss-topic-system-flushing-and-sacrificial-trim]
  figures: []

eng.context.decarbonization-and-emissions-strategy.classify-emissions-scope:
  topics: [cvh-topic-emissions-scopes]
  figures: [cvh-cmp-greenhouse-gas-scopes]
eng.context.decarbonization-and-emissions-strategy.explain-decarbonization-pathways:
  topics: [cvh-topic-decarbonization-pathways, cvh-topic-greening-framework]
  figures: [cvh-cmp-sustainability-decarbonization-table, cvh-cmp-esg-approach-by-industries]
eng.context.decarbonization-and-emissions-strategy.distinguish-net-zero-and-carbon-neutral:
  topics: [cvh-topic-carbon-neutral-vs-net-zero, cvh-topic-net-zero-target-setting]
  figures: []
eng.context.decarbonization-and-emissions-strategy.explain-methane-reduction-contribution:
  topics: [cvh-topic-valve-related-methane-reduction]
  figures: []
```
