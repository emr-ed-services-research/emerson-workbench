---
title: Competency Hierarchy v3 — CVE1, CVE2, CVE3
type: reference
tags:
  - curriculum
  - pipeline
  - competency-hierarchy
updated: 2026-09-18
---

# Competency Hierarchy v3 — CVE1, CVE2, CVE3

> [!warning] SUPERSEDES both prior versions entirely
> `Competency Hierarchy — CVE1, CVE2, CVE-Industry (Oil & Gas).md` (v1) and
> `Competency Hierarchy — CVE1, CVE2, CVE-Industry (Oil & Gas) v2.md` (v2)
> are both now historical record only. v2's own defect (all five Terminal
> Competency statements were word-for-word identical to v1's — the wording
> was still sitting in the coordinator's own active context from writing
> v1 earlier the same session, never actually re-derived) proved that
> "don't read the prior document" isn't sufficient discipline when the
> same agent wrote it. **This version was built differently for exactly
> that reason** — see Method below.

## What's different this time, and why

Franz gave this build **only a three-line course spec, verbatim, and
nothing else** — no stated course purposes beyond role/depth/industry, no
"CVE3 shouldn't re-teach the fundamentals," no framing carried from any
prior message tonight:

- CVE1: role Engineering, depth Introductory.
- CVE2: role Engineering, depth Advanced.
- CVE3 (Oil & Gas): role Engineering, depth Advanced, industry Oil & Gas.

**The coordinator (this session) did not write any of the derivation this
time.** Given v2's actual root cause — wording carried forward from the
coordinator's own context, not from reading a file — the only reliable fix
was to ensure none of the generative content came from an agent whose
context contained any prior attempt. A single **fresh, non-fork
general-purpose agent** (zero conversation history, dispatched with only
the three-line spec above and explicit instructions not to read six named
prior-attempt files) did the entire derivation — Terminal Competencies,
re-examined Enabling Competency boundaries, Chapters, Learning Objectives,
and Modules, for all three courses together. The coordinator's role this
time was purely mechanical: dispatching that agent, resuming it three times
to recover content that didn't fit in one response, spot-verifying its
citations directly against the real Subject-Matter Index, and assembling
the final document — never writing statement text, never making a
clustering judgment call.

**Result: a genuinely different structure from v1/v2**, which is itself
evidence the purge worked. Most notably, CVE1 in this version carries the
*entire* general-engineering-fundamentals territory — including the full
quantitative actuator force/torque calculation and full ISA/IEC Cv
sizing — rather than the "CVE1 conceptual, CVE2 quantitative" split v1/v2
both used. CVE2 in this version has zero content that duplicates or
"develops" anything in CVE1; every CVE2 chapter is genuinely new,
specialized, or compliance-focused territory. This is a legitimate,
independently-derived reading of "Introductory vs. Advanced" — depth read
as *course scope* (fundamentals vs. specialized) rather than *treatment*
(conceptual vs. quantitative) — and it is **not** being corrected back
toward v1/v2's assumption here, since doing so would reintroduce the exact
contamination this build exists to eliminate.

## Cluster-boundary adjustments (verbatim from the derivation)

1. **Merged** `eng.sizing.liquid-and-industry-specific-sizing` +
   `eng.sizing.compressible-gas-and-steam-sizing` into one Enabling
   Competency (`eng.sizing.fundamentals-liquid-and-compressible`),
   assigned to CVE1. Evidence: compressible sizing alone is 4 topics + 0
   figures, too thin to stand as its own chapter, and both clusters teach
   the same skill (Cv calculation) differing only by fluid phase.
2. **Trimmed** the Pulp & Paper–specific slice out of that merged cluster
   before assignment: removed `pp-topic-pulp-stock-sizing-methodology`
   (+3 correction figures) and `pp-topic-viscous-flow-sizing-correction`
   (+1 figure). Evidence: none of these three courses target Pulp & Paper;
   this is industry-specific arithmetic with no fit here.
3. **Moved** `eng.instrumentation.level-measurement` (0 topics, 9 figures)
   out of standalone status, folded into `app.oil-gas.onshore-production`
   as an added module for CVE3. Evidence: zero topic backing means it
   couldn't clear the objective/stakes bar alone; its real content directly
   instantiates `ogas-topic-separator-liquid-level-control-mechanism`,
   already inside onshore-production; its only two contributing
   sourcebooks (Refining, Oil & Gas) tie it to O&G-style vessel
   applications specifically.
4. **Considered and declined** splitting the two sour-service topics out
   of `eng.materials.severe-service-material-selection` into a CVE3-
   specific cluster — a split would leave 2 topics + 0 figures with no
   CVE3 chapter to fold into (thinner than case #3 above). Kept whole,
   assigned to CVE2.
5. **Declined** pulling any `app.refining.*` cluster into CVE3 despite "oil
   & gas" being a plausible colloquial umbrella — the source map itself
   treats Oil & Gas and Refining as separate sourcebooks with distinct
   namespaces, and the given spec names Oil & Gas specifically.

All 20 `eng.*` clusters are accounted for (19 become chapters directly or
via the one merge in #1; 1 is folded into CVE3 per #3). All 6
`app.oil-gas.*` clusters are used in CVE3. The 14 Power/Pulp & Paper/
Refining application clusters have no home among these three courses and
are correctly left unassigned — see the end of this document.

---

## Terminal Competencies

**CVE1** (2): serves the full general-engineering-fundamentals scope.
**CVE2** (4): serves genuinely new specialized/compliance territory only.
**CVE3** (3): serves the six Oil & Gas process contexts.

```yaml
- id: cve1-tc1
  course: Control Valve Engineering 1
  enablingChapters: [1, 2, 3, 4, 5, 6, 8]   # Foundations, Process Variability, Selection Taxonomy, Flow Characteristic, Shutoff/Standards, Actuation, Sizing
  statement: >
    Given a control loop and a stated liquid or compressible service,
    select a valve body/closure-member type and flow characteristic that
    fit the loop's real behavior, verify the choice against shutoff/
    pressure-temperature standards, calculate the required Cv, and
    calculate the actuator force or torque needed to close it against
    real seat load and unbalance.

- id: cve1-tc2
  course: Control Valve Engineering 1
  enablingChapters: [7, 9, 10]   # Packing/Emissions, Installation Practice, Decarbonization Context
  statement: >
    Select a packing system meeting a service's temperature, friction, and
    fugitive-emissions requirement; install and commission it correctly
    (piping arrangement, flushing, sacrificial trim); and explain that
    selection's real relevance to an operator's decarbonization strategy.

- id: cve2-tc1
  course: Control Valve Engineering 2
  enablingChapters: [1, 2, 3]   # Cavitation/Flashing, Noise, Materials
  statement: >
    Diagnose and mitigate cavitation, flashing, and noise in a severe,
    high-pressure-drop control valve application through trim, materials,
    and staging selection.

- id: cve2-tc2
  course: Control Valve Engineering 2
  enablingChapters: [4, 5]   # Desuperheating, Turbine/Boiler Bypass
  statement: >
    Specify a steam-conditioning or turbine/boiler-bypass valve system,
    including desuperheating hardware sizing and bypass architecture, for
    power/process steam systems.

- id: cve2-tc3
  course: Control Valve Engineering 2
  enablingChapters: [6, 7]   # SIS/Accessories, Hazardous Locations
  statement: >
    Specify safety-instrumented-system accessories (positioners, DVCs,
    SOVs) and hazardous-area protection for a control valve final control
    element in a SIL-rated or classified-area loop.

- id: cve2-tc4
  course: Control Valve Engineering 2
  enablingChapters: [8]   # Maintenance
  statement: >
    Develop a maintenance, diagnostics, and spare-parts lifecycle strategy
    for a fleet of control valves in continuous severe service.

- id: cve3-tc1
  course: Control Valve Engineering 3 (Oil & Gas)
  enablingChapters: [1, 2]   # Onshore, Offshore
  statement: >
    Specify control valves — including separator level-control and choke
    valves — for onshore and offshore oil & gas production
    separation/treatment trains.

- id: cve3-tc2
  course: Control Valve Engineering 3 (Oil & Gas)
  enablingChapters: [3, 4]   # Gas Treatment, Transport/Storage
  statement: >
    Specify control valves for gas treatment, transportation, and
    underground-storage systems in the midstream oil & gas value chain.

- id: cve3-tc3
  course: Control Valve Engineering 3 (Oil & Gas)
  enablingChapters: [5, 6]   # Fractionation, LNG
  statement: >
    Specify control valves for NGL fractionation and LNG
    liquefaction/regasification service, including cryogenic and
    Joule-Thomson trim selection.
```

---

## CVE1 — Control Valve Engineering 1 (Engineering, Introductory) — 10 Chapters

### Chapter 1 — Control Loop Fundamentals & the Valve's Role as Final Control Element
**EC:** `eng.foundations.control-loop-and-final-control-element`
**objective:** A control valve is the one component in a feedback loop that actually changes the process — every upstream control decision is worthless if the valve can't move flow the amount and moment the loop asks. Frames the valve as final control element and introduces the four behavior properties (gain/characteristic, rangeability, deadband/friction, dynamic response) determining whether a "correct" controller output actually reaches the process.
**stakes:** An engineer who treats valve selection as a catalog exercise disconnected from loop behavior ships a nominally "correct" valve the loop can't actually control well — cycling or offset that gets blamed on tuning when the real cause is baked in at selection time.

1. Describe a feedback control loop's components and identify the valve's function as final control element. `sources: {topics: [cvh-topic-control-loop-fundamentals], figures: [cvh-cmp-feedback-control-loop]}`
2. Distinguish sliding-stem from rotary valve body families and identify styles from photo/cutaway. `sources: {topics: [], figures: [cvh-cmp-sliding-stem-valve-photo, cvh-cmp-sliding-stem-exploded, cvh-cmp-angle-valve-photo, cvh-cmp-rotary-valve-photo, cvh-cmp-segmented-ball, cvh-cmp-v-notch-ball, cvh-cmp-eccentric-disk-valve, cvh-cmp-cage-types, cvh-cmp-three-way-globe-valve-overview]}`
3. Explain how flow characteristic and installed gain interact with loop dynamics. `sources: {topics: [cvh-topic-flow-characteristic-and-valve-gain], figures: []}`
4. Calculate required rangeability for a given turndown and explain the low-flow control consequence of undersizing it. `sources: {topics: [cvh-topic-rangeability], figures: []}`
5. Explain how deadband/friction degrade loop performance and read a deadband graph. `sources: {topics: [cvh-topic-deadband-and-friction], figures: [cvh-cmp-deadband-graph]}`
6. Describe the dynamic-response characteristics a valve contributes to loop response. `sources: {topics: [cvh-topic-dynamic-response-characteristics], figures: []}`

**Modules:** M1 "Feedback Loop & Valve Body Families" (LO1–2, ~25min) · M2 "Gain, Rangeability, Deadband & Dynamic Response" (LO3–6, ~30min). **Chapter ≈55min.**

### Chapter 2 — Process Variability, Loop Performance & Valve Diagnostics
**EC:** `eng.foundations.process-variability-and-loop-performance`
**objective:** Where Chapter 1 frames the valve's ideal role, this chapter frames what happens with real deadband/oversizing in a real loop — variability is the visible symptom, and this chapter introduces the diagnostic tools (signature testing, ValveLink) to trace it to a valve-level cause.
**stakes:** Plants pay for excess variability directly (off-spec product, energy loss, safety-margin erosion); an engineer who can't connect a variability trend to a specific valve behavior chases tuning indefinitely.

1. Interpret process-variability distributions and relate variability to loop economics. `sources: {topics: [cvh-topic-process-variability, cvh-topic-closed-loop-economics], figures: [cvh-cmp-process-variability-distributions, cvh-cmp-closed-loop-disturbance-summary]}`
2. Explain how oversizing distorts installed characteristic/gain. `sources: {topics: [cvh-topic-valve-oversizing-effects], figures: [cvh-cmp-installed-characteristic-and-gain, cvh-cmp-valve-style-control-range-comparison]}`
3. Distinguish deadband from response time using a summary table. `sources: {topics: [cvh-topic-deadband, cvh-topic-valve-response-time], figures: [cvh-cmp-valve-response-time-summary-table]}`
4. Describe performance-test-loop setup and signature-series testing. `sources: {topics: [cvh-topic-signature-series-testing], figures: [cvh-cmp-performance-test-loop-photo, cvh-cmp-signature-series-testing-photo]}`
5. Interpret a signature-data overlay and ValveLink screen to identify a degraded valve. `sources: {topics: [], figures: [cvh-cmp-signature-data-comparison-overlay, cvh-cmp-valvelink-software-screens]}`

**Modules:** M1 "Reading Variability & Its Cost" (LO1–2, ~25min) · M2 "Diagnosing Valve-Level Causes" (LO3–5, ~30min). **Chapter ≈55min.**

### Chapter 3 — Valve Body & Closure-Member Type Selection
**EC:** `eng.selection.valve-body-and-type-taxonomy` (26 topics + 124 figures, full cluster — largest CVE1 chapter, 4 modules, at cap)
**objective:** Nearly every later decision (sizing, actuation, packing, materials) presupposes a body/closure-member type has already been chosen; builds the vocabulary and selection logic every later chapter assumes.
**stakes:** Picking the wrong body/closure-member family locks in downstream limitations no trim or actuator engineering can fix later.

1. Classify body family (globe, angle, three-way, rotary, gate, diaphragm, pinch, plug). `sources: {topics: [cvh-topic-valve-body-fundamentals, cvh-topic-globe-valve-body-selection, cvh-topic-rotary-valve-body-selection, cvh-topic-valve-function-taxonomy], figures: [cvh-cmp-flanged-angle-valve-body, cvh-cmp-single-ported-globe-valve-body, cvh-cmp-double-ported-globe-valve-body-reverse-acting, cvh-cmp-three-way-globe-valve-cutaway, cvh-cmp-butterfly-shaft-offset-disc-center, cvh-cmp-segmented-v-notch-ball, cvh-cmp-full-port-ball-control-valve, cvh-cmp-eccentric-plug-valve-body, cvh-cmp-solid-wedge-gate-valve, cvh-cmp-weir-type-diaphragm-valve, cvh-cmp-air-operated-pinch-valve, cvh-cmp-lubricated-plug-valve]}`
2. Compare guiding methods and select against stability requirement. `sources: {topics: [cvh-topic-valve-plug-guiding-methods, cvh-topic-valve-guiding, ref-topic-port-guided-valve-limitations, pp-topic-valve-plug-guiding-methods], figures: [cvh-cmp-cage-style-trim-balanced-plug-soft-seat, cvh-cmp-body-guiding, cvh-cmp-stem-bonnet-guiding]}`
3. Select restricted-capacity trim for low-Cv service. `sources: {topics: [cvh-topic-restricted-capacity-trim, pp-topic-restricted-capacity-trim-rationale], figures: [cvh-cmp-plug-disk-globe-valve, cvh-cmp-t-type-globe-valve]}`
4. Distinguish rotary subtypes and match to application. `sources: {topics: [ogas-topic-control-valve-selection-process, ogas-topic-sliding-stem-valve-family, ogas-topic-rotary-valve-family, pss-topic-ball-valve-subcategories, pss-topic-eccentric-plug-transitional-category, pss-topic-butterfly-valve-family-evolution], figures: [cvh-cmp-valve-selection-process-flowchart, cvh-cmp-high-performance-butterfly-valve, cvh-cmp-ball-valve-cavitation-noise-options, cvh-cmp-full-port-ball-valve-trunnion]}`
5. Select check-valve style for backflow prevention. `sources: {topics: [cvh-topic-check-valve-selection], figures: [cvh-cmp-stop-function, cvh-cmp-stop-check-function, cvh-cmp-swing-check-valve, cvh-cmp-lever-weight-swing-check-valve, cvh-cmp-tilting-check-valve, cvh-cmp-horizontal-lift-check-valve]}`
6. Apply end-connection/pressure-class criteria and verify rated class from a body-bonnet/pressure-seal detail. `sources: {topics: [cvh-topic-body-bonnet-junction, pss-topic-end-connection-selection-criteria, pss-topic-pressure-drop-capacity-selection-criteria, pss-topic-valve-type-selection-guidelines, pp-topic-flow-capacity-selection-tradeoff], figures: [cvh-cmp-pressure-seal-detail, cvh-cmp-gate-valve-pressure-seal, cvh-cmp-gate-valve-bolted-bonnet, cvh-cmp-cast-iron-gate-valve-dimensions, cvh-cmp-steel-gate-valve-class150-dimensions]}`

**Modules:** M1 "Body Family Taxonomy" (LO1, ~30min) · M2 "Guiding & Restricted-Capacity Trim" (LO2–3, ~30min) · M3 "Rotary Subtypes & Selection Process" (LO4, ~25min) · M4 "Check Valves, End Connections & Pressure Class" (LO5–6, ~30min). **Chapter ≈115min.**

### Chapter 4 — Flow Characteristic & Rangeability
**EC:** `eng.selection.flow-characteristic-and-rangeability`
**objective:** A valve's flow characteristic isn't a fixed catalog property — it's manufactured into the plug contour or cage, and what the process actually experiences (installed characteristic) is never identical to the inherent curve stamped on the datasheet. Teaches how characteristic is physically produced and how to reason about the inherent-vs-installed gap.
**stakes:** An engineer who selects "equal-percentage" off a catalog without accounting for system pressure-drop ratio gets an installed characteristic that behaves nothing like equal-percentage in the real piping — a mismatch that shows up as poor controllability blamed on the wrong component.

1. Distinguish linear, equal-percentage, and quick-opening inherent flow characteristics from their curves. `sources: {topics: [cvh-topic-flow-characteristics], figures: [cvh-cmp-inherent-characteristics-graph, cvh-cmp-inherent-flow-characteristic-curves, cvh-cmp-flow-characteristic-curves-repeat]}`
2. Explain how plug contour and cage-port design physically produce a given flow characteristic. `sources: {topics: [cvh-topic-flow-characterization-mechanism], figures: [cvh-cmp-plug-contour-flow-characterization, cvh-cmp-quick-opening-construction, cvh-cmp-characterized-cages-globe]}`
3. Predict how installed characteristic diverges from inherent characteristic as system pressure-drop ratio changes. `sources: {topics: [cvh-topic-installed-vs-inherent-characteristic], figures: []}`
4. Select a flow characteristic and estimate resulting rangeability for a given positioner/control scheme. `sources: {topics: [pss-topic-flow-characteristic-rangeability-positioners, ogas-topic-flow-characteristic-and-rangeability, pp-topic-flow-characteristic-and-rangeability], figures: [ogas-cmp-flow-characteristic-curves, pss-cmp-flow-characteristic-curves]}`

**Modules:** M1 "Inherent Characteristics & How They're Made" (LO1–2, ~20min) · M2 "Installed Characteristic & Rangeability" (LO3–4, ~20min). **Chapter ≈40min.**

### Chapter 5 — Shutoff/Leakage Classification, Pressure-Temperature Rating & Standards
**EC:** `eng.selection.shutoff-leakage-and-standards`
**objective:** Shutoff classification and P-T rating are the purely standards-driven filters alongside Chapter 3's mechanical selection — get them wrong and a mechanically correct valve still fails an acceptance test or code inspection.
**stakes:** A valve specified against the wrong leakage class or code jurisdiction is a paperwork failure surfacing at commissioning or audit — expensive to catch late, avoidable by treating standards as a first-class criterion.

1. Classify required shutoff via FCI 70-2/ANSI leakage classes and select trim/seat to meet it. `sources: {topics: [cvh-topic-seat-leakage-classification, ogas-topic-shutoff-leakage-classification, pp-topic-shutoff-leakage-classification, pss-topic-shutoff-leakage-selection-criteria], figures: [cvh-cmp-fci91-1-leakage-class-summary]}`
2. Interpret ISO 15848-1 qualification requirements and measured leak-rate/concentration data. `sources: {topics: [], figures: [cvh-cmp-iso15848-1-qualification-requirements, cvh-cmp-iso15848-1-measured-leak-rate, cvh-cmp-iso15848-1-measured-leak-concentration]}`
3. Apply P-T rating classes and material-selection criteria to verify a body/bonnet's rated class. `sources: {topics: [pss-topic-pressure-temperature-material-selection-criteria, pss-topic-pressure-rating-classes, pp-topic-pressure-temperature-material-selection-criteria], figures: []}`
4. Cross-reference applicable standards and identify correct code jurisdiction. `sources: {topics: [pss-topic-valve-standards-crosswalk, pss-topic-boiler-piping-code-jurisdiction], figures: []}`

**Modules:** M1 "Leakage Classification & Fugitive-Emissions Standards" (LO1–2, ~20min) · M2 "P-T Rating & Code Jurisdiction" (LO3–4, ~20min). **Chapter ≈40min.**

### Chapter 6 — Actuator Selection & Force/Torque Sizing
**EC:** `eng.actuation.actuator-selection-and-force-torque-sizing` (30 topics + 50 figures, full cluster — 3 modules)
**objective:** An undersized actuator can't overcome unbalance force/seat load at shutoff; an oversized one wastes cost and slows response. Builds mechanism vocabulary and the real force/torque sizing math turning a chosen body (Ch3) into a fully actuated assembly.
**stakes:** An actuator sized from a rule of thumb instead of real unbalance-area/seat-load calculation stalls at the seat under real differential pressure — a shutoff failure discovered mid-upset.

1. Distinguish actuator mechanism types (spring-diaphragm, piston, rack-and-pinion, electric, manual) and identify from photo/cutaway. `sources: {topics: [cvh-topic-actuator-mechanism-basics], figures: [cvh-cmp-direct-acting-actuator, cvh-cmp-piston-actuator, cvh-cmp-reverse-acting-actuator, cvh-cmp-rotary-actuator-cutaway, cvh-cmp-double-acting-piston-actuator, cvh-cmp-scotch-yoke-piston-actuator, cvh-cmp-manual-actuator-sliding-stem, cvh-cmp-manual-actuator-rotary, cvh-cmp-rack-and-pinion-actuator, cvh-cmp-electric-actuator-sliding-stem, cvh-cmp-electric-actuator-rotary, cvh-cmp-spring-diaphragm-actuator-generic]}`
2. Select actuator type/fail-safe action for a given service and orientation. `sources: {topics: [cvh-topic-actuator-type-selection, pss-topic-actuator-body-orientation, pss-topic-actuator-selection-parameters, pss-topic-actuator-design-categories-and-linkage, pss-topic-actuator-type-comparison-summary], figures: []}`
3. Calculate required thrust for a sliding-stem valve (unbalance area, seat load). `sources: {topics: [cvh-topic-actuator-force-selection, cvh-topic-valve-balance, cvh-topic-seat-load, pss-topic-actuator-force-calculation-globe, pss-topic-piston-thrust-calculation], figures: [cvh-cmp-unbalance-area-table, cvh-cmp-seat-load-graph, cvh-cmp-recommended-seat-load-table]}`
4. Calculate required torque for a rotary valve. `sources: {topics: [cvh-topic-rotary-actuator-torque, ogas-topic-rotary-actuator-torque-sizing, pss-topic-rotary-actuator-torque-methodology], figures: [cvh-cmp-rotary-actuator-cutaway]}`
5. Perform bench-set adjustment and explain its criticality to travel accuracy. `sources: {topics: [cvh-topic-bench-set-adjustment, cvh-topic-bench-set, cvh-topic-valve-travel-criticality], figures: [cvh-cmp-bench-set-seating-force-graph]}`
6. Select actuator design variant (piston vs. diaphragm, electric, electro-hydraulic) for extreme-force or non-pneumatic services. `sources: {topics: [ogas-topic-actuator-design-taxonomy, ogas-topic-fail-safe-action-mechanism, ogas-topic-piston-actuator-design-variants, ogas-topic-electric-actuator-selection-factors, ogas-topic-electro-hydraulic-actuator-configurations, ogas-topic-actuator-force-sizing-methodology, ogas-topic-actuator-selection-process-summary, pss-topic-failsafe-mechanism, pss-topic-piston-actuator-mechanism-variants, pss-topic-electric-actuator-characteristics, pss-topic-electro-hydraulic-configurations, pss-topic-piston-diaphragm-speed-myth, pss-topic-positioner-gain-mechanism], figures: [cvh-cmp-field-reversible-multi-spring-actuator, cvh-cmp-diaphragm-actuator-rotary-valve, cvh-cmp-actuator-side-handwheel, cvh-cmp-actuator-top-handwheel]}`

**Modules:** M1 "Actuator Mechanism Types & Selection" (LO1–2, ~30min) · M2 "Force & Torque Sizing" (LO3–4, ~30min) · M3 "Bench Set & Extreme-Service Variants" (LO5–6, ~30min). **Chapter ≈90min.**

### Chapter 7 — Packing Selection & Fugitive-Emissions Control
**EC:** `eng.packing.selection-and-fugitive-emissions` (16 topics + 59 figures, full cluster — 3 modules)
**objective:** Packing is the one component whose job is to fail slowly and predictably rather than catastrophically. Builds selection logic across packing materials, bonnet types, and end connections, tying every choice back to fugitive-emissions performance.
**stakes:** Packing selected on stem-friction cost alone, without regard to the emissions class the site actually needs, is a valve that passes acceptance today and becomes an LDAR compliance finding within a year.

1. Select a packing material/arrangement (PTFE V-ring, duplex, graphite ULF, EnviroSeal variants) for a given temperature, friction, and emissions-class requirement. `sources: {topics: [cvh-topic-packing-selection-criteria, ogas-topic-packing-selection-framework, pss-topic-packing-selection-framework, pss-topic-kalrez-vs-enviroseal-ptfe-tradeoff, pss-topic-enviroseal-vs-highseal-extreme-service, pss-topic-packing-arrangement-configurations], figures: [cvh-cmp-stem-packing-types, cvh-cmp-packing-material-arrangements-globe, cvh-cmp-single-ptfe-vring-packing, cvh-cmp-enviroseal-ptfe-packing-system, cvh-cmp-enviroseal-duplex-packing-system, cvh-cmp-enviroseal-graphite-ulf-packing-system, cvh-cmp-enviroseal-graphite-packing-rotary]}`
2. Explain how packing friction is measured and how 100-ppm/non-environmental guideline charts determine an acceptable configuration. `sources: {topics: [cvh-topic-packing-friction], figures: [cvh-cmp-packing-friction-values-table, cvh-cmp-packing-guidelines-chart-100ppm, cvh-cmp-packing-guidelines-chart-non-environmental]}`
3. Apply fugitive-emissions standards and VOC/LDAR measurement frequency to select a packing system meeting a stated emissions target. `sources: {topics: [cvh-topic-fugitive-emissions-standards, pp-topic-fugitive-emissions-regulatory-framework], figures: [cvh-cmp-voc-ldar-measurement-frequency]}`
4. Select a bonnet type (standard, extension, bellows-seal, cryogenic-extension) for a temperature/isolation requirement and identify variants from assembly figures. `sources: {topics: [cvh-topic-bonnet-function-and-types, pp-topic-bonnet-function-and-types], figures: [cvh-cmp-bellows-seal-bonnet, cvh-cmp-bonnet-assembly, cvh-cmp-bonnet-variations, cvh-cmp-fabricated-extension-bonnet, cvh-cmp-enviroseal-bellows-seal-bonnet, cvh-cmp-welded-leaf-bellows, cvh-cmp-mechanically-formed-bellows]}`
5. Select an end connection (flanged, welded) and identify galvanic-corrosion/storage and oxygen-service packing precautions. `sources: {topics: [cvh-topic-end-connection-selection, pp-topic-end-connection-selection-criteria, pss-topic-galvanic-corrosion-and-storage, pss-topic-oxygen-service-packing-precautions, ref-topic-laminated-filament-graphite-packing], figures: [cvh-cmp-bolted-flange-end-connections, cvh-cmp-welded-end-connections, cvh-cmp-typical-bonnet-flange-stud-bolts]}`

**Modules:** M1 "Packing Material & Arrangement Selection" (LO1–2, ~25min) · M2 "Emissions Standards & Compliance" (LO3, ~15min) · M3 "Bonnet Types & End Connections" (LO4–5, ~25min). **Chapter ≈65min.**

### Chapter 8 — Valve Sizing Fundamentals: Liquid & Compressible Flow
**EC:** `eng.sizing.fundamentals-liquid-and-compressible` *(new id — merges the map's liquid and compressible sizing clusters, trimmed of Pulp & Paper content; see boundary adjustments #1–2)*
**objective:** Sizing converts every earlier selection decision into one number — Cv — that has to be right. Covers the standard liquid Cv equation and piping-geometry correction, then the compressible-flow equivalent including choked-flow behavior.
**stakes:** A sizing error doesn't fail gracefully — undersized can't pass rated flow at any opening; oversized operates nearly closed for its whole service life. Both are sizing-desk mistakes, not manufacturing defects.

1. Calculate required Cv for a liquid service using the standard equation, including piping-geometry (Fp) correction. `sources: {topics: [cvh-topic-liquid-sizing-methodology, ogas-topic-liquid-sizing-methodology, pss-topic-liquid-sizing-methodology, ogas-topic-piping-geometry-factor, pss-topic-piping-geometry-factor], figures: []}`
2. Determine liquid critical pressure ratio from standard water/non-water charts and check for choked liquid flow. `sources: {topics: [], figures: [ogas-cmp-ff-chart-water, ogas-cmp-ff-chart-nonwater, pss-cmp-liquid-critical-pressure-ratio-water, pss-cmp-liquid-critical-pressure-ratio-other-liquids]}`
3. Calculate required Cv for a compressible (gas/steam) service. `sources: {topics: [cvh-topic-compressible-sizing-methodology, pss-topic-gas-steam-sizing-methodology], figures: []}`
4. Apply expansion factor and Xtp piping-geometry correction to determine whether a compressible service is choked. `sources: {topics: [pss-topic-choked-flow-expansion-factor, pss-topic-xtp-piping-geometry-correction], figures: []}`

**Modules:** M1 "Liquid Sizing & Critical Pressure Ratio" (LO1–2, ~25min) · M2 "Compressible Sizing & Choked Flow" (LO3–4, ~20min). **Chapter ≈45min.**

### Chapter 9 — Installation Practice: Piping Arrangement, Orientation & Commissioning
**EC:** `eng.installation.piping-practice-and-orientation` *(5 topics, 0 figures — thinnest visually, substantive in prose, included as written)*
**objective:** A correctly selected and sized valve can still underperform or fail early if installed wrong. Covers the piping-arrangement, line-size, and commissioning practices protecting the work of the prior eight chapters.
**stakes:** Skipping system flushing or installing sacrificial trim incorrectly is the single most common cause of "premature trim failure" complaints against a brand-new, correctly-sized valve — the valve gets blamed for a construction-phase mistake.

1. Apply standard piping-arrangement guidelines (straight-run, orientation) for a control valve installation. `sources: {topics: [pss-topic-control-valve-piping-arrangement], figures: []}`
2. Evaluate whether line size matches valve size and identify velocity-limitation violations. `sources: {topics: [pss-topic-line-size-vs-valve-size, pss-topic-velocity-limitations], figures: []}`
3. Describe correct welding-procedure staging for a welded-end installation. `sources: {topics: [pss-topic-welding-procedure-stages], figures: []}`
4. Explain the purpose of system flushing and sacrificial trim and identify when each is required. `sources: {topics: [pss-topic-system-flushing-and-sacrificial-trim], figures: []}`

**Modules:** M1 "Piping Arrangement & Line Sizing" (LO1–2, ~15min) · M2 "Welding Procedure & Commissioning Flush" (LO3–4, ~15min). **Chapter ≈30min** — clears the 25min floor.

### Chapter 10 — Decarbonization & Emissions Strategy: Industry Context
**EC:** `eng.context.decarbonization-and-emissions-strategy` *(honestly the thinnest, least mechanism-focused chapter in CVE1 — 9 items, pure context, no calculation/hardware LO — included because it's real, introductory-tier content directly framing Chapter 7, not to fill a structural gap)*
**objective:** Everything Chapter 7 taught about packing/fugitive-emissions selection sits inside a larger strategic driver. Closes CVE1 by framing why methane/fugitive-emissions performance is now a board-level decarbonization metric, giving vocabulary to talk to that audience.
**stakes:** An engineer who can size a valve correctly but can't explain in Scope 1/2/3 or net-zero terms why the Chapter 7 packing choice matters can't make the business case for the better (costlier) packing option when it's actually needed.

1. Distinguish GHG emissions Scopes 1/2/3 and classify a valve-related emissions source into the correct scope. `sources: {topics: [cvh-topic-emissions-scopes], figures: [cvh-cmp-greenhouse-gas-scopes]}`
2. Explain how decarbonization pathways and a greening framework are typically structured at an industrial operator. `sources: {topics: [cvh-topic-decarbonization-pathways, cvh-topic-greening-framework], figures: [cvh-cmp-sustainability-decarbonization-table, cvh-cmp-esg-approach-by-industries]}`
3. Distinguish carbon-neutral from net-zero and explain typical net-zero target-setting. `sources: {topics: [cvh-topic-carbon-neutral-vs-net-zero, cvh-topic-net-zero-target-setting], figures: []}`
4. Explain how valve-related methane reduction contributes measurably to a decarbonization target. `sources: {topics: [cvh-topic-valve-related-methane-reduction], figures: []}`

**Modules:** M1 "Emissions Scopes & Decarbonization Frameworks" (LO1–2, ~15min) · M2 "Net-Zero Targets & the Valve's Contribution" (LO3–4, ~15min). **Chapter ≈30min.**

**CVE1 totals: 10 chapters (at the 10-chapter cap), 48 Learning Objectives, 24 modules. All chapters ≥25min; all modules ≥10min; no chapter exceeds 4 modules (max used: 4, Ch3 only, at the cap).**

---

## CVE2 — Control Valve Engineering 2 (Engineering, Advanced) — 8 Chapters

### Chapter 1 — Cavitation & Flashing: Mechanism, Damage, and Trim/Materials Mitigation
**EC:** `eng.destructive-flow.cavitation-flashing-mechanism-and-mitigation` (24 topics + 40 figures, full cluster — largest CVE2 chapter, 4 modules, at cap)
**objective:** Cavitation and flashing turn a "correctly sized" valve into one that erodes to failure within months. Builds the vena-contracta/pressure-recovery mechanism causing both, then the trim and materials mitigation letting an engineer keep a high-ΔP service in sliding-stem or rotary hardware.
**stakes:** Misdiagnosing flashing damage as cavitation (or the reverse) sends mitigation the wrong direction — anti-cavitation trim does nothing for flashing erosion — and a repeat failure is a credibility problem for the engineer who signed off on it.

1. Explain the vena-contracta mechanism and pressure-recovery profile determining whether a service cavitates, flashes, or neither. `sources: {topics: [cvh-topic-vena-contracta, cvh-topic-flow-recovery], figures: [cvh-cmp-vena-contracta-diagram, cvh-cmp-pressure-profile-high-low-recovery, ogas-cmp-restriction-pressure-profile, ogas-cmp-velocity-pressure-vena-contracta]}`
2. Distinguish flashing from cavitation damage from photo evidence and explain common diagnostic errors. `sources: {topics: [cvh-topic-flashing, cvh-topic-cavitation, pss-topic-cavitation-flashing-diagnostic-error, pss-topic-condensate-recirc-cavitation-diagnosis], figures: [cvh-cmp-flashing-damage-photo, cvh-cmp-cavitation-damage-photo, ogas-cmp-cavitation-vs-flashing-damage-photos, pss-cmp-cavitation-vs-flashing-damage-photos]}`
3. Explain the bubble-collapse (microjet) mechanism and predict where damage will localize in trim. `sources: {topics: [ogas-topic-bubble-cycle, ogas-topic-cavitation-damage-mechanism], figures: [ogas-cmp-microjet-collapse-mechanism, pss-cmp-bubble-collapse-jet-mechanics]}`
4. Select anti-cavitation/anti-flashing trim (staged pressure drop, drilled-hole cages, Cavitrol-family, flashing-resistant rotary plugs) and justify against the specific damage mechanism. `sources: {topics: [cvh-topic-cavitation-flashing-mitigation, ogas-topic-cavitation-control-trim-theories, ogas-topic-seating-throttling-separation-rationale, ogas-topic-flashing-hardware-selection-rationale], figures: [ogas-cmp-cavitrol-pressure-staging-graph, ogas-cmp-drilled-hole-cage-designs, ogas-cmp-cavitrol-iv-trim-cutaway, ogas-cmp-rotary-plug-flashing-resistance, ogas-cmp-eas-valve-outlet-liner]}`
5. Select materials for cavitation/erosion resistance and evaluate a backpressure-device alternative when trim alone is insufficient. `sources: {topics: [cvh-topic-particulate-cavitation-erosion, ogas-topic-cavitation-flashing-materials-selection, ogas-topic-backpressure-device-alternative, pss-topic-alloy6-corrosion-mechanism], figures: [ogas-cmp-choked-flow-deltaP-allowable, pss-cmp-choked-flow-deltap-allowable-graph]}`
6. Apply choked-flow/noise-level considerations to trim selection and evaluate industry-specific cavitation-selection variants. `sources: {topics: [ogas-topic-choked-flow-and-cavitation-flashing, ogas-topic-cavitation-flashing-noise-levels, pss-topic-choked-flow-and-cavitation-flashing, pp-topic-cavitation-in-pulp-stock, pp-topic-cavitation-selection-coefficients, pp-topic-lime-mud-erosive-service-selection], figures: [pss-cmp-valve-location-flashing-system-design, pp-cmp-cavitation-implosion-mechanism]}`

**Modules:** M1 "Mechanism: Vena Contracta, Pressure Recovery & Bubble Collapse" (LO1,3, ~30min) · M2 "Diagnosis: Distinguishing Flashing from Cavitation" (LO2, ~20min) · M3 "Trim Mitigation & Materials Selection" (LO4–5, ~35min) · M4 "Choked Flow, Noise & Industry-Specific Variants" (LO6, ~20min). **Chapter ≈105min.**

### Chapter 2 — Control Valve Noise: Generation and Trim-Based Control
**EC:** `eng.noise.generation-and-control` (3 topics + 50 figures)
**objective:** Noise is both regulated and diagnostic. Covers how flow-generated noise arises and how trim technology (drilled-hole, stacked-disk, diffusers, silencers) controls it at the source.
**stakes:** Retrofitting acoustic insulation after installation treats the symptom at several times the cost of specifying correct noise-control trim before purchase.

1. Explain the aerodynamic/hydrodynamic noise-generation mechanism and how noise level is predicted. `sources: {topics: [cvh-topic-noise-generation-and-prediction], figures: []}`
2. Select a source-treatment noise-control trim (drilled-hole cage, stacked-disk, WhisperFlo/NotchFlo/Cavitrol-family) for a given generation mechanism. `sources: {topics: [cvh-topic-noise-control-strategy], figures: [cvh-cmp-noise-reduction-trim-photo, cvh-cmp-globe-valve-noise-abatement-cage, cvh-cmp-ball-valve-noise-attenuator, ogas-cmp-whisperflo-trim-cutaway, ogas-cmp-whisperflo-trim-disk-stack, ogas-cmp-notchflo-dst-trim-cutaway, ogas-cmp-cavitrol-iii-trim-cage, ogas-cmp-cavitrol-iv-trim, ogas-cmp-ewt-metal-seat-whisper-trim-i-cutaway]}`
3. Select a path-treatment device (in-line diffuser, vent diffuser, in-line silencer) when source treatment alone is insufficient. `sources: {topics: [], figures: [cvh-cmp-valve-inline-diffuser-photo, cvh-cmp-valve-vent-diffuser-diagram, cvh-cmp-inline-silencer-photo, ogas-cmp-inline-diffuser-combination, ogas-cmp-vent-diffuser-combination, ogas-cmp-inline-silencer, ref-cmp-6010-inline-diffuser]}`
4. Evaluate a combined source-plus-path strategy for a severe noise-generating service, including an industry-specific variant (sootblower-valve selection). `sources: {topics: [pp-topic-sootblower-valve-selection-rationale], figures: [cvh-cmp-cavitation-elimination-valve-design, ogas-cmp-series-restriction-anticavitation-trim, pp-cmp-whisper-trim-i-inline-diffuser-combination]}`

**Modules:** M1 "Noise Generation & Prediction" (LO1, ~15min) · M2 "Source-Treatment Trim Selection" (LO2, ~25min) · M3 "Path-Treatment & Combined Strategies" (LO3–4, ~25min). **Chapter ≈65min.**

### Chapter 3 — Materials Selection for Erosive/Corrosive/High-Temperature Service
**EC:** `eng.materials.severe-service-material-selection` (17 topics + 15 figures, whole cluster — includes sour-service topics per boundary adjustment #4)
**objective:** Trim and body materials are the last line of defense once flow-induced mechanisms can't be designed away entirely. Covers selecting alloys, hardfacing, and material designation systems against a specific degradation mechanism rather than habit or lowest cost.
**stakes:** The Alloy 6 erosion-corrosion case in this chapter's own source material is a real documented failure — a materials choice that looked adequate on a datasheet, discovered only via sectioned-sample/SEM analysis after failure.

1. Select materials for extreme-temperature service and identify design implications (cryogenic extension bonnets, custom flow characteristics for low-flow design). `sources: {topics: [cvh-topic-extreme-temperature-materials, cvh-topic-low-flow-design-approach, cvh-topic-custom-flow-characteristics, pss-topic-high-temperature-alloy-selection, pss-topic-elevated-temperature-material-effects], figures: [cvh-cmp-cryogenic-extension-bonnet, cvh-cmp-severe-service-inherent-characteristic-curve, cvh-cmp-low-flow-cv-control-valve]}`
2. Evaluate sulfide-stress-cracking and sour-service material requirements for H2S-containing service. `sources: {topics: [cvh-topic-sulfide-stress-cracking, ogas-topic-sour-service-material-selection], figures: []}`
3. Apply body/bonnet and trim-component material requirements and select a standard trim-material combination, including erosive TiO2-slurry service. `sources: {topics: [pss-topic-body-bonnet-material-requirements, pss-topic-trim-component-material-requirements, pss-topic-standard-trim-combination-rationale, pss-topic-standard-materials-cost-leadtime-rationale, pp-topic-tio2-erosive-service-valve-requirements], figures: [cvh-cmp-particulate-trim-eccentric-plug, cvh-cmp-black-forged-body-high-capacity]}`
4. Analyze a documented erosion-corrosion case (Alloy 6) from damage photos and metallurgical evidence to identify the failure mechanism. `sources: {topics: [pss-topic-alloy6-erosion-corrosion-case], figures: [pss-cmp-alloy6-plug-side-view-damage-photo, pss-cmp-alloy6-plug-end-view-damage-photo, pss-cmp-alloy6-sectioned-sample-photo, pss-cmp-alloy6-sem-photomicrograph]}`
5. Apply material designation systems and bolting-grade criteria, verifying selection against a P-T ratings comparison graph. `sources: {topics: [pss-topic-material-designation-systems, pss-topic-bolting-grade-selection, pss-topic-material-selection-properties], figures: [pss-cmp-pt-ratings-comparison-graph, pss-cmp-bolt-stress-vs-temperature-graph]}`
6. Select materials for nuclear-code-classified service and identify design/QA implications. `sources: {topics: [cvh-topic-nuclear-code-classification], figures: [cvh-cmp-pressurizer-spray-valve-nuclear]}`

**Modules:** M1 "Temperature-Extreme & Nuclear-Code Material Selection" (LO1,6, ~25min) · M2 "Sour Service & Erosive-Service Materials" (LO2–3, ~25min) · M3 "Failure Analysis & Material Designation Systems" (LO4–5, ~25min). **Chapter ≈75min.**

### Chapter 4 — Desuperheating: Thermodynamics, Hardware & Sizing
**EC:** `eng.steam.desuperheating` (10 topics + 38 figures)
**objective:** Desuperheating is a sizing problem wrapped around a thermodynamics problem. Builds the steam-thermodynamics rationale for conditioning steam at all, then nozzle/hardware families and sizing equations turning that rationale into a spray-water valve specification.
**stakes:** A desuperheater sized without accounting for spray-penetration/evaporation distance delivers wet steam or unevaporated droplets downstream — a turbine-erosion or thermal-shock risk tracing directly to a sizing shortcut.

1. Explain the steam-thermodynamics rationale for desuperheating and read enthalpy/T-H diagrams to determine required spray water. `sources: {topics: [pss-topic-steam-thermodynamics-and-desuperheat-rationale, cvh-topic-steam-conditioning-valve-rationale], figures: [pss-cmp-water-temperature-enthalpy-btu-diagram, pss-cmp-water-th-diagram-saturation-vs-pressure]}`
2. Select a desuperheater design taxonomy (insertion, steam-atomized, self-contained, geometry/wafer-assisted) for a given orientation and application factor. `sources: {topics: [cvh-topic-desuperheater-application-factors, pss-topic-desuperheater-selection-taxonomy], figures: [cvh-cmp-insertion-desuperheater-schematic, cvh-cmp-desuperheater-installation-orientations, cvh-cmp-self-contained-desuperheater-design, cvh-cmp-steam-atomized-desuperheater-design, cvh-cmp-geometry-assisted-wafer-design, pss-cmp-insertion-style-desuperheater, pss-cmp-design-dma-af-desuperheater, pss-cmp-design-dvg-af-desuperheater, pss-cmp-design-dvi-desuperheater]}`
3. Calculate required nozzle sizing and select fixed- vs. variable-geometry nozzle for a given turndown. `sources: {topics: [cvh-topic-desuperheater-sizing-methodology, pss-topic-desuperheater-sizing-equations, pss-topic-desuperheater-performance-factors], figures: [cvh-cmp-fixed-geometry-nozzle, cvh-cmp-variable-geometry-nozzle, cvh-cmp-desuperheater-spray-penetration, pss-cmp-design-dsa-desuperheater-nozzle, pss-cmp-tbx-af-spray-nozzle-detail]}`
4. Evaluate desuperheater control philosophy for a given plant control architecture. `sources: {topics: [pss-topic-desuperheater-control-philosophy], figures: [cvh-cmp-steam-assisted-desuperheater-control-loop, cvh-cmp-backpressure-spray-nozzle]}`
5. Select a steam-conditioning valve (combined pressure-reduction plus desuperheating) for a turbine-bypass or process-steam application. `sources: {topics: [], figures: [cvh-cmp-steam-conditioning-valve-cross-section, pss-cmp-design-tbx-t-steam-conditioning-valve, pss-cmp-tbx-t-cooler, pss-cmp-tbx-whisperflo-sparger, cvh-cmp-ring-style-attemperator, cvh-cmp-steam-sparger-drilled-hole]}`

**Modules:** M1 "Thermodynamic Rationale & Design Taxonomy" (LO1–2, ~30min) · M2 "Nozzle Sizing & Control Philosophy" (LO3–4, ~30min) · M3 "Combined Steam-Conditioning Valves" (LO5, ~20min). **Chapter ≈80min.**

### Chapter 5 — Turbine & Boiler Bypass Systems
**EC:** `eng.steam.turbine-and-boiler-bypass-systems` (11 topics + 8 figures) *— considered merging with Chapter 4 (same source-map category header) but declined: each clears the floor alone and teaches a genuinely distinct competency (spray-water hardware vs. bypass architecture/capacity sizing).*
**objective:** A turbine bypass system exists to let a boiler keep producing steam when the turbine can't take it — startup, trip, or load rejection. Covers why that capability is designed in, how HP/LP/HRH bypass valves function differently, and how capacity is sized against turbine operating modes.
**stakes:** A boiler with no adequate bypass capacity has exactly one option during a turbine trip — venting to atmosphere or tripping the boiler too — both outcomes a correctly sized bypass system exists to prevent.

1. Explain the rationale for a turbine bypass system and select a bypass valve for a given operating mode. `sources: {topics: [cvh-topic-turbine-bypass-system-rationale, pss-topic-turbine-bypass-system-benefits, pss-topic-turbine-operating-modes-and-bypass-role, pss-topic-turbine-bypass-system-purpose], figures: [cvh-cmp-turbine-bypass-actuation-package]}`
2. Distinguish HP bypass and HRH/LP bypass function and failure mode. `sources: {topics: [pss-topic-hp-bypass-function-and-failure-mode, pss-topic-hrh-lp-bypass-function], figures: [cvh-cmp-bypass-valve, cvh-cmp-bypass-auxiliary-connections]}`
3. Calculate bypass capacity sizing against startup-vent and boiler-bypass system requirements. `sources: {topics: [pss-topic-bypass-capacity-sizing-strategy, pss-topic-boiler-bypass-system-purpose, pss-topic-startup-vent-valve-mechanism, cvh-topic-turbine-bypass-valve-selection], figures: [pp-cmp-turbine-bypass-system-schematic]}`
4. Select feedheater/extraction/reheater-isolation valves for normal bypass operations within a turbine's steam cycle. `sources: {topics: [pss-topic-turbine-bypass-system-function], figures: [cvh-cmp-typical-feedheater-system, cvh-cmp-normal-bypass-operations, cvh-cmp-reheater-isolation-valve, cvh-cmp-turbine-extraction-valve]}`

**Modules:** M1 "Bypass System Rationale & HP/LP Function" (LO1–2, ~20min) · M2 "Capacity Sizing & Feedheater/Extraction Valves" (LO3–4, ~20min). **Chapter ≈40min.**

### Chapter 6 — Safety Instrumented Systems, Positioners & Digital Valve Controllers
**EC:** `eng.safety.instrumented-systems-and-accessories` (17 topics + 63 figures, full cluster — largest CVE2 chapter alongside Ch1, 4 modules, at cap)
**objective:** The valve is only half of a safety-critical or tightly controlled loop. Covers the accessory layer (positioners, DVCs, boosters, SOVs) executing the controller's command, then the SIS layer (SIL/PFD, HIPPS, trip systems, partial-stroke testing) governing when the valve's job is to fail safely rather than control.
**stakes:** An accessory or SOV architecture selected without regard to the loop's actual SIL requirement is a safety gap that looks fine on a datasheet and fails exactly when the process needs it not to.

1. Select a positioner/accessory (pneumatic, analog I/P, DVC, volume booster) for a given loop-performance requirement, distinguishing DVC capabilities from analog. `sources: {topics: [cvh-topic-accessory-selection-rationale, cvh-topic-positioner-fundamentals, cvh-topic-digital-valve-controller-capabilities, cvh-topic-volume-booster-function, ogas-topic-positioner-booster-application-guidelines, pss-topic-positioner-application-guidelines], figures: [cvh-cmp-pneumatic-positioner-schematic, cvh-cmp-analog-ip-positioner-schematic, cvh-cmp-digital-valve-controller-photo, cvh-cmp-volume-booster-sectional, cvh-cmp-dual-booster-installation, ref-cmp-dvc7k-digital-valve-controller, ref-cmp-fieldvue-digital-valve-controller-overview]}`
2. Explain pneumatic controller proportional and reset-rate modes and position-feedback device options. `sources: {topics: [cvh-topic-pneumatic-controller-modes, cvh-topic-position-feedback-devices], figures: [cvh-cmp-pneumatic-controller-schematic-proportional, cvh-cmp-pneumatic-controller-schematic-reset-rate, cvh-cmp-wireless-position-transmitter]}`
3. Apply SOV voting nomenclature and select an architecture (1oo2, 2oo2, redundant trip) for a given safety function. `sources: {topics: [cvh-topic-sov-voting-nomenclature, cvh-topic-trip-system-function], figures: [cvh-cmp-sov-3port-spring-return-symbol, cvh-cmp-sov-4port-double-acting-symbol, cvh-cmp-sov-1oo2-voting-intro, cvh-cmp-sov-1oo2-architecture-schematic, cvh-cmp-sov-2oo2-architecture-schematic, cvh-cmp-sov-redundant-trip-configuration, cvh-cmp-sov-manifold-assembly, cvh-cmp-trip-valve-tripped-condition]}`
4. Analyze layers-of-protection and SIS fundamentals/standards to determine SIL target and calculate PFD. `sources: {topics: [cvh-topic-sis-accessory-role, cvh-topic-layers-of-protection, cvh-topic-sis-fundamentals-and-standards, cvh-topic-pfd-calculation], figures: [cvh-cmp-layers-of-protection, cvh-cmp-sis-components-loop, cvh-cmp-sil-pfd-rrf-table, cvh-cmp-oreda-failure-data-chart]}`
5. Design a partial-stroke and final-element testing program for a safety valve without disrupting production. `sources: {topics: [cvh-topic-partial-stroke-testing, cvh-topic-final-element-testing], figures: [cvh-cmp-sis-dvc-on-safety-valve]}`
6. Evaluate HIPPS functionality and testing requirements for a high-integrity pressure-protection application. `sources: {topics: [cvh-topic-hipps-functionality-and-testing], figures: [cvh-cmp-hipps-typical-configuration]}`

**Modules:** M1 "Positioners, DVCs & Boosters" (LO1–2, ~30min) · M2 "SOV Voting Architectures & Trip Systems" (LO3, ~25min) · M3 "SIS Fundamentals, SIL/PFD & Testing" (LO4–5, ~30min) · M4 "HIPPS" (LO6, ~15min). **Chapter ≈100min.**

### Chapter 7 — Hazardous Location Classification & Explosion Protection
**EC:** `eng.safety.hazardous-locations-and-explosion-protection` (10 topics + 7 figures) *— considered merging with Chapter 6 (same category header) but declined: Ch6 already sits at the 4-module cap, and hazardous-location classification is a genuinely distinct compliance topic from accessory selection.*
**objective:** Every accessory selected in Chapter 6 has to survive being installed in the actual hazardous-area classification of the plant it serves. Covers classification systems (zones, groups, EPL) and protection techniques determining which accessory hardware is legal to install where.
**stakes:** Installing an accessory rated for the wrong zone or temperature code in a classified area isn't a performance problem — it's an ignition-source safety violation discovered at the worst time.

1. Define hazardous-location classification systems (zones, divisions) and distinguish between them. `sources: {topics: [cvh-topic-hazardous-location-definitions, cvh-topic-classification-systems], figures: [cvh-cmp-zones-vs-epl-table, cvh-cmp-zones-vs-epl-risk-matrix]}`
2. Classify equipment groups/subgroups and select equipment appropriately EPL-rated for a given zone. `sources: {topics: [cvh-topic-equipment-groups-subgroups, cvh-topic-protection-level-and-epl], figures: [cvh-cmp-equipment-groups-table]}`
3. Apply the temperature-code concept and marking nomenclature to verify equipment rating against process/ambient temperature. `sources: {topics: [cvh-topic-temperature-code-concept, cvh-topic-marking-nomenclature], figures: [cvh-cmp-temperature-codes-table]}`
4. Compare IEC and ATEX rating schemes and select protection techniques (intrinsic safety, flameproof enclosure) for accessory hardware. `sources: {topics: [cvh-topic-atex-directive, cvh-topic-protection-techniques-applied], figures: [cvh-cmp-iec-vs-atex-ratings-table]}`
5. Apply enclosure-rating standards (IP numerals) to verify an accessory enclosure meets ingress-protection requirements. `sources: {topics: [cvh-topic-enclosure-rating-standards], figures: [cvh-cmp-enclosure-ratings-table, cvh-cmp-ingress-protection-numerals-table]}`

**Modules:** M1 "Classification Systems, Zones & EPL" (LO1–2, ~20min) · M2 "Temperature Codes, ATEX/IEC & Enclosure Ratings" (LO3–5, ~25min). **Chapter ≈45min.**

### Chapter 8 — Maintenance Philosophy, Diagnostics & Spare-Parts Strategy
**EC:** `eng.maintenance.diagnostics-and-lifecycle-strategy` (6 topics + 9 figures)
**objective:** Every prior CVE2 chapter covered engineering a valve correctly the first time; this closing chapter covers what happens after installation — maintenance philosophy, in-service diagnostics, and spare-parts strategy determining whether a correctly engineered valve stays correctly performing for its full service life.
**stakes:** A plant with no non-intrusive diagnostics program and no spare-parts strategy discovers packing or trim degradation only as an unplanned shutdown.

1. Compare maintenance philosophies (reactive, preventive, predictive/non-intrusive) and select an appropriate strategy for a given valve criticality. `sources: {topics: [cvh-topic-maintenance-philosophies], figures: [cvh-cmp-nonintrusive-diagnostics-program]}`
2. Apply flushing/hydro-trim protocol requirements before returning a valve to service after maintenance. `sources: {topics: [cvh-topic-flushing-hydro-trim-protocol], figures: []}`
3. Interpret in-service diagnostics to identify degraded components without removing the valve from the line. `sources: {topics: [cvh-topic-in-service-diagnostics], figures: [cvh-cmp-ball-valve-flow-arrow, cvh-cmp-criss-cross-bolt-pattern, cvh-cmp-control-disk-component]}`
4. Evaluate OEM-vs-replicated-parts tradeoffs and develop a spare-parts stocking strategy for a given valve fleet. `sources: {topics: [cvh-topic-oem-vs-replicated-parts, cvh-topic-spare-parts-stocking-strategy], figures: [cvh-cmp-stud-washer-nut-kit, cvh-cmp-gasket-kit, cvh-cmp-packing-kit, cvh-cmp-valve-stem-packing-assemblies]}`
5. Apply the STO planning process to schedule valve maintenance within a plant-wide outage window. `sources: {topics: [cvh-topic-sto-planning-process], figures: [cvh-cmp-sto-planning-process-infographic]}`

**Modules:** M1 "Maintenance Philosophy & In-Service Diagnostics" (LO1–3, ~30min) · M2 "Spare-Parts Strategy & STO Planning" (LO4–5, ~25min). **Chapter ≈55min.**

**CVE2 totals: 8 chapters, 41 Learning Objectives, 23 modules. All chapters ≥40min; all modules ≥10min; no chapter exceeds 4 modules (max used: 4, Ch1 and Ch6).**

---

## CVE3 — Control Valve Engineering, Industry (Oil & Gas) (Engineering, Advanced, Oil & Gas) — 6 Chapters

### Chapter 1 — Control Valves for Onshore Oil & Gas Production
**EC:** `app.oil-gas.onshore-production`, extended with `eng.instrumentation.level-measurement` folded in per boundary adjustment #3
**objective:** Onshore production is where a control-valve engineer first meets the full separation-and-treatment train as a system — wellhead choke, staged separation, level and pressure control on each separator, downstream gas/liquid/solids handling. Builds process-flow literacy to place the right valve type at each point, closing with the level-measurement technology that makes separator level control possible at all.
**stakes:** A choke or separator-control valve specified without understanding the staged-separation pressure design it sits inside can be individually well-sized and still destabilize the whole train — an oversized first-stage pressure-control valve starves second-stage separation of the differential it needs.

1. Describe the onshore production process flow from wellhead through staged separation and identify the well-site choke valve's role. `sources: {topics: [ogas-topic-onshore-production-overview], figures: [ogas-cmp-onshore-production-process-flow, ogas-cmp-well-site-gathering-system, ogas-cmp-well-site-choke-valve-photo]}`
2. Explain staged-separation pressure design and select gas-outlet pressure-control and vent-to-flare safety valves for each stage. `sources: {topics: [ogas-topic-staged-separation-pressure-design, ogas-topic-separator-gas-outlet-pressure-control, ogas-topic-separator-vent-to-flare-safety-function], figures: [ogas-cmp-process-fluid-separation-system, ogas-cmp-v260-valve-exterior]}`
3. Explain the separator liquid-level control mechanism and select a level-measurement technology (displacer vs. differential-pressure, caged vs. cageless) appropriate to the service. `sources: {topics: [ogas-topic-separator-liquid-level-control-mechanism], figures: [ref-cmp-digital-level-transmitter-overview, ref-cmp-l2-liquid-level-controller, ref-cmp-displacer-level-transmitter-schematic, ref-cmp-caged-sensor, ref-cmp-cageless-sensor, ref-cmp-level-trol-application-photo, ref-cmp-liquid-level-installation-schematic, ogas-cmp-l2e-electric-level-controller, ogas-cmp-fieldvue-dlc3010-digital-level-controller]}` *(these 9 figures have 0 topic backing in the Subject-Matter Index — real conceptual grounding for this LO exists via Vitruvius, per `Competency Map — Topic-Derived.md`'s Finding 2, not via a topic id; cited descriptively here.)*
4. Select control valves for crude-oil dehydration (bulk treater, electrostatic coalescer) and compressor-skid sizing (suction throttle, anti-surge). `sources: {topics: [ogas-topic-crude-oil-dehydration-methods, ogas-topic-compressor-skid-sizing-factors], figures: [ogas-cmp-bulk-treater-oil-treatment-system, ogas-cmp-electrostatic-coalescer-oil-treatment-system, ogas-cmp-compressor-system, ogas-cmp-compression-suction-throttle-valve-photo, ogas-cmp-compressor-antisurge-valve-photo, ogas-cmp-easydrive-actuator-d4-valve]}`

**Modules:** M1 "Onshore Process Flow & Wellhead Choke" (LO1, ~15min) · M2 "Separation-Stage Pressure & Level Control" (LO2–3, ~30min) · M3 "Dehydration & Compressor-Skid Valves" (LO4, ~20min). **Chapter ≈65min.**

### Chapter 2 — Control Valves for Offshore Oil & Gas Production
**EC:** `app.oil-gas.offshore-production` (7 topics + 16 figures)
**objective:** Offshore adds slugging, space/weight-constrained topsides layout, and full oil-water-gas separation trains to everything Chapter 1 covered onshore. Builds process literacy specific to a floating or fixed offshore platform.
**stakes:** Slugging is a transient, not a steady-state, phenomenon — a slug-catcher control valve sized against average flow will be overwhelmed by the transient liquid surge slugging is defined by.

1. Distinguish offshore facility types and explain slugging and the slug-catcher's role in handling it. `sources: {topics: [ogas-topic-offshore-facility-types, ogas-topic-slugging-and-slug-catchers], figures: [ogas-cmp-offshore-topsides-process-flow, ogas-cmp-slug-catcher-valves]}`
2. Select control valves across a separation-train overview and compare oil-water separation technologies. `sources: {topics: [ogas-topic-separation-train-overview, ogas-topic-oil-water-separation-technologies], figures: [ogas-cmp-high-pressure-separation-process-diagram, ogas-cmp-low-pressure-separation-process-diagram, ogas-cmp-oil-treatment-system-diagram, ogas-cmp-electrostatic-coalescer-oil-treatment]}`
3. Select control valves for gas compression and treatment (TEG dehydration, amine treatment) on an offshore train. `sources: {topics: [ogas-topic-gas-compression-and-treatment-overview], figures: [ogas-cmp-low-pressure-compression-system-diagram, ogas-cmp-high-pressure-compression-train, ogas-cmp-teg-gas-dehydration-unit, ogas-cmp-amine-treatment-unit, ogas-cmp-tail-gas-treatment-system]}`
4. Select control valves for gas injection/lift and water treatment/injection systems, including FPSO-specific water injection. `sources: {topics: [ogas-topic-gas-injection-and-lift, ogas-topic-water-treatment-and-injection-overview], figures: [ogas-cmp-vee-ball-v150-2052-actuator, ogas-cmp-8580-rotary-valve-2052-actuator, ogas-cmp-667-hp-control-valve, ogas-cmp-ez-control-valve-sectional, ogas-cmp-water-injection-system-fpso]}`

**Modules:** M1 "Facility Types, Slugging & Separation" (LO1–2, ~25min) · M2 "Compression, Treatment, Injection & Water Systems" (LO3–4, ~25min). **Chapter ≈50min.**

### Chapter 3 — Control Valves for Gas Treatment & Processing Plants
**EC:** `app.oil-gas.gas-treatment-and-processing` (5 topics + 8 figures — thinnest chapter in CVE3 by item count, clears the floor, flagged honestly rather than inflated)
**objective:** A natural gas treatment plant turns wellhead gas into pipeline-spec gas. Covers the three chemistry-driven unit operations (amine treating, dehydration, sulfur recovery) and the valve-selection judgment needed to scale a review across plants of different sizes.
**stakes:** The Claus sulfur-recovery process and amine treating both run continuous exothermic/absorption chemistry that a mis-sized or mis-selected control valve can upset badly enough to trip the unit.

1. Describe the natural gas treatment plant process flow and identify major unit operations. `sources: {topics: [ogas-topic-natural-gas-treatment-plant-overview], figures: [ogas-cmp-natural-gas-treatment-process-flow, ogas-cmp-inlet-separation-system]}`
2. Select control valves for amine-treating and gas-dehydration mechanisms. `sources: {topics: [ogas-topic-amine-treating-mechanism, ogas-topic-gas-dehydration-methods], figures: [ogas-cmp-a11-2052-actuator-dvc6000, ogas-cmp-nps1-6-design-et-plug-open, ogas-cmp-teg-gas-dehydration-unit-ch9]}`
3. Select control valves for the sulfur-recovery (Claus process) unit and identify the tail-gas treatment system's valves. `sources: {topics: [ogas-topic-sulfur-recovery-claus-process], figures: [ogas-cmp-sulfur-recovery-system, ogas-cmp-tail-gas-treatment-system-ch9, ogas-cmp-design-ed-cutaway]}`
4. Apply application-review scaling judgment to adapt this chapter's selection logic across plants of different capacity. `sources: {topics: [ogas-topic-application-review-scaling], figures: []}`

**Modules:** M1 "Plant Overview, Amine Treating & Dehydration" (LO1–2, ~20min) · M2 "Sulfur Recovery & Scaling Judgment" (LO3–4, ~15min). **Chapter ≈35min.**

### Chapter 4 — Control Valves for Gas/Oil Transportation & Underground Storage
**EC:** `app.oil-gas.gas-transportation-and-storage` (7 topics + 14 figures) *— storage half (LO3–4) is genuinely topic-thin relative to transportation, flagged honestly.*
**objective:** Transportation and storage operate against pipeline-scale pressure differentials and startup transients rather than process chemistry. Covers compressor/metering/pump-station valve selection, then underground storage's bidirectional-cavern sizing problem.
**stakes:** A bidirectional cavern valve sized only for withdrawal will be wrong for injection service — exactly the failure mode a bidirectional-sizing-aware engineer is trained to catch before it reaches procurement.

1. Select control valves for compressor stations, metering stations, and pump stations, and explain anti-surge dynamic-response requirements. `sources: {topics: [ogas-topic-compressor-station-fundamentals, ogas-topic-metering-station-purpose, ogas-topic-pump-station-fundamentals, ogas-topic-anti-surge-dynamic-response], figures: [ogas-cmp-gas-transportation-process-flow, ogas-cmp-oil-transportation-process-flow, ogas-cmp-metering-station-control-valve-diagram, ogas-cmp-et-class300-whisperflo-spoked-plug, ogas-cmp-pump-station-control-valve-diagram, ogas-cmp-oil-terminal-receiving-unit-diagram]}`
2. Evaluate transportation-startup cavitation risk and select mitigating trim for pipeline startup transients. `sources: {topics: [ogas-topic-transportation-startup-cavitation], figures: [ogas-cmp-v260b-hydrodome-attenuator]}`
3. Distinguish underground storage formation types (salt cavern, depleted reservoir, aquifer) and identify each's process-flow role. `sources: {topics: [ogas-topic-storage-formation-types], figures: [ogas-cmp-underground-storage-process-flow]}`
4. Calculate bidirectional cavern-valve sizing for both injection and withdrawal service, and select valves for water-injection, brine-disposal, and gas-injection/withdrawal-export duty. `sources: {topics: [ogas-topic-bidirectional-cavern-valve-sizing], figures: [ogas-cmp-vee-ball-v150-2052-dvc6200-cutaway, ogas-cmp-water-injection-valve-diagram, ogas-cmp-brine-disposal-valve-diagram, ogas-cmp-gas-injection-valve-diagram, ogas-cmp-gas-withdrawal-export-valve-diagram, ogas-cmp-vee-ball-v200-2052-actuator-dvc6200]}`

**Modules:** M1 "Compressor, Metering & Pump-Station Valves" (LO1–2, ~25min) · M2 "Underground Storage & Bidirectional Cavern-Valve Sizing" (LO3–4, ~25min). **Chapter ≈50min.**

### Chapter 5 — Control Valves for NGL Fractionation
**EC:** `app.oil-gas.ngl-fractionation` (3 topics + 8 figures — thinnest chapter in CVE3, 2 LOs/2 modules at practical minimums; kept as its own chapter, not merged, since it's a real distinct process segment with no natural merge partner among the other CVE3 chapters — flagged honestly rather than inflated)
**objective:** NGL fractionation is a distillation-train problem (deethanizer, depropanizer, debutanizer) at a scale and terminology specific to gas-plant NGL streams rather than crude distillation. Builds that vocabulary and the valve-selection rationale for each column.
**stakes:** A fractionation valve mis-selected for the wrong column duty doesn't just underperform — a poorly controlled fractionation train off-specs product across every downstream train it feeds.

1. Define NGL fractions/terminology and describe the fractionation train mechanism (deethanizer through debutanizer). `sources: {topics: [ogas-topic-ngl-fractions-and-terminology, ogas-topic-fractionation-train-mechanism], figures: [ogas-cmp-fractionation-process-flow, ogas-cmp-deethanizer-process-diagram, ogas-cmp-depropanizer-process-diagram, ogas-cmp-debutanizer-process-diagram]}`
2. Select and justify control valves for each fractionation column's specific duty (reboiler, reflux, product draw). `sources: {topics: [ogas-topic-fractionation-valve-selection-rationale], figures: [ogas-cmp-nps4-eh-hp-657-actuator-dvc6010, ogas-cmp-nps10-24-ewt-ewd-cutaway, ogas-cmp-8580-valve-2052-actuator-dvc6000, ogas-cmp-vee-ball-v150-2052-actuator-dvc6200]}`

**Modules:** M1 "Fractionation Terminology & Train Mechanism" (LO1, ~15min) · M2 "Column Valve Selection & Duty Justification" (LO2, ~15min). **Chapter ≈30min.**

### Chapter 6 — Control Valves for LNG Liquefaction & Regasification
**EC:** `app.oil-gas.lng-liquefaction-and-regasification` (11 topics + 20 figures, full cluster — largest CVE3 chapter, 3 modules)
**objective:** LNG is the most thermodynamically extreme service in this course's value chain — cryogenic temperatures, refrigeration-cycle compressor surge, and Joule-Thomson expansion all interact. Covers the full liquefaction-through-regasification chain and the trim/valve selection each stage demands.
**stakes:** A feed-gas letdown or JT-expansion valve selected without accounting for cryogenic trim behavior risks brittle-fracture failure at LNG temperatures — a materials/mechanism failure mode unique to this chapter's service class.

1. Explain LNG fundamentals and compare the propane-refrigeration and mixed-refrigerant liquefaction cycles. `sources: {topics: [ogas-topic-lng-fundamentals, ogas-topic-propane-refrigeration-cycle, ogas-topic-mixed-refrigerant-cycle], figures: [ogas-cmp-lng-process-flow-diagram, ogas-cmp-refrigerant-cycles-liquefaction-diagram]}`
2. Evaluate feed-gas letdown criticality and select cryogenic trim using Joule-Thomson expansion principles. `sources: {topics: [ogas-topic-feed-gas-letdown-criticality, ogas-topic-joule-thomson-expansion-and-trim-selection], figures: [ogas-cmp-feed-gas-pressure-letdown-valves, ogas-cmp-a31a-cryogenic-valve, ogas-cmp-design-et-c-cutaway]}`
3. Analyze compressor-surge mechanism and select an anti-surge/ODV package for propane and mixed-refrigerant compressors. `sources: {topics: [ogas-topic-compressor-surge-mechanism, ogas-topic-odv-package-rationale, ogas-topic-hot-gas-bypass], figures: [ogas-cmp-typical-compressor-map, ogas-cmp-odv-package-585cls, ogas-cmp-dvc6200-odv-package-instrument, ogas-cmp-propane-compressor-antisurge-diagram, ogas-cmp-mr-compressor-antisurge-diagram, ogas-cmp-ewt-whisper-trim-iii-cutaway]}`
4. Select control valves for an LNG receiving terminal, vaporizer type, and boiloff-recondenser function. `sources: {topics: [ogas-topic-lng-receiving-terminal-overview, ogas-topic-lng-vaporizer-types, ogas-topic-boiloff-recondenser-function], figures: [ogas-cmp-common-valves-mhe-diagram, ogas-cmp-lng-receiving-terminal-process-flow, ogas-cmp-lng-ship-unloading-vapor-return, ogas-cmp-lng-storage-send-out-system, ogas-cmp-boiloff-gas-pipeline-compression-system, ogas-cmp-send-out-pump-recirculation-system, ogas-cmp-scv-fuel-gas-valve-train, ogas-cmp-shell-tube-vaporizer-valves, ogas-cmp-plant-discharge-valves]}`

**Modules:** M1 "Liquefaction Cycles & Feed-Gas Letdown" (LO1–2, ~30min) · M2 "Compressor Surge & ODV Protection" (LO3, ~25min) · M3 "Receiving Terminal, Vaporization & Boiloff" (LO4, ~25min). **Chapter ≈80min.**

**CVE3 totals: 6 chapters (well within the 10-chapter cap), 22 Learning Objectives, 14 modules. All chapters ≥30min; all modules ≥15min; no chapter exceeds 3 modules.**

---

## Program totals (recomputed directly, not taken from the derivation agent's own summary)

**24 chapters, 111 Learning Objectives, 61 modules across 3 courses.** CVE1: 10 chapters / 48 LOs / 24 modules. CVE2: 8 chapters / 41 LOs / 23 modules. CVE3: 6 chapters / 22 LOs / 14 modules. Every chapter clears its 25min floor (range 30–115min); every module clears its 10min floor; no chapter exceeds the 10-chapter cap (max 10, CVE1, at the cap); no chapter exceeds the 4-module cap (max 4, at the cap in three chapters — CVE1 Ch3, CVE2 Ch1, CVE2 Ch6).

## Left unassigned — 14 clusters, correctly, not a completeness gap

All 5 `app.power.*` clusters, all 7 `app.pulp-paper.*` clusters, and both `app.refining.*` clusters have no home among CVE1/CVE2/CVE3 — none of the three courses' role/depth/industry spec covers Power, Pulp & Paper, or Refining. The Pulp & Paper–specific slice trimmed out of the liquid-sizing cluster (pulp-stock correction factors, viscous-flow correction) is also unassigned, for the same reason. Nothing was discarded from the source map — only left unassigned to these three specific courses.

## Explicitly out of scope for this build

- Activity placement inside modules — Stage 2's job.
- `course.json`, build files, Stage 2/3 content — none touched.
- Wiring `keyConcept.learningObjectiveId` into pipeline code — PipelineConsole, separate repo, real follow-on work (schema decision itself already recorded in `curriculum-development.md`).
