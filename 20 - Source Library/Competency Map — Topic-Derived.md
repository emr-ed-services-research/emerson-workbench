---
title: Competency Map — Derived from the Topic-Indexed Subject-Matter Index
type: reference
tags:
  - source-library
  - pipeline
  - competency-map
  - curriculum-development
source: derived from all five industry Subject-Matter Indexes (CVH, Oil & Gas, Power & Severe Service, Pulp & Paper, Refining)
updated: 2026-09-18
---

# Competency Map — Derived from the Topic-Indexed Subject-Matter Index

Franz's three-part directive (2026-09-18, relayed and refined through RC across
several corrections): derive a fresh CVE competency map directly from the now
fully topic-indexed Subject-Matter Index — deliberately **not** using the existing
CVE1/CVE2/CVE-Industry map (`eng.sizing.*`, `eng.selection.*`, etc.) as a basis,
since that map was built by clustering figures thematically before the topic
layer existed. Report instructional-depth findings, then propose concrete
pipeline-integration requirements for the `kind: topic` layer going forward.

## Methodology (survey first, then build — per Franz's explicit correction)

Two corrections landed mid-task and are baked into how this was actually done,
not just noted after the fact:

1. **Topics lead, but figures are swept in per-chapter as first-class
   inputs, not pulled in secondarily through `relatedFigures` links.** An
   early draft of this methodology started from the topic graph and only
   pulled figures in via each topic's own `relatedFigures` citations — Franz
   caught that this would silently miss any figure with real, distinct
   content that happened to have no topic pointing at it. The check that
   catches this: **389 of 773 figures (50%) across the five sourcebooks are
   never cited by any topic's `relatedFigures` field at all.** Every one of
   those 389 was read directly (not assumed reference-data) as part of this
   survey — see Finding 5 below for what that review actually found.
2. **Survey the full index before deriving any competency boundary.** A
   real extraction bug was caught mid-survey: CVH and Oil & Gas's figure
   entries carry no explicit `kind:` field at all (figure is the
   undeclared default from before the `kind: topic` convention existed) —
   an early pass counted zero figures for both sourcebooks as a result.
   Fixed and re-verified against the known headline totals (CVH 228 + Oil &
   Gas 144 + Power & Severe Service 159 + Pulp & Paper 147 + Refining 95 =
   773, exact match) before any competency was named.

**What was actually done, in order:**

- Extracted all 381 `kind: topic` and 773 `kind: figure` entries (1,154
  total; 1,152 unique — the only duplicates are two pre-existing Oil & Gas
  id collisions already flagged in `Source Library.md` months ago, not
  caused by this pass) across all 64 chapter/sub-chapter Subject-Matter Index
  files in the five industry sourcebooks, with full `teaches` text,
  `concept-tags`, and `relatedFigures`/`relatedTopics` cross-references.
- Built the `relatedTopics` cross-reference graph: 144 connected
  components, two of which (67 and 52 topics) are genuine cross-sourcebook
  superclusters spanning all four industry sourcebooks plus CVH — see
  Finding 3. The other 122 topics have zero `relatedTopics` links at all,
  confirming the graph alone is too sparse to derive boundaries from — real
  domain judgment against the full per-chapter tag/content rollup did the
  actual clustering, with the graph as one corroborating signal.
- Read the full 389-figure orphan list end to end, grouped by sourcebook and
  chapter, with real `teaches` excerpts — not just counted.
- Derived 39 competencies (18 cross-cutting engineering domains, 21
  single-sourcebook application domains), covering **100% of the 1,152
  unique components** — verified programmatically: zero unclaimed, zero
  double-claimed.
- Spot-checked one striking finding directly against the real PDFs before
  writing it up (see Finding 4) rather than trusting a fork's report at
  face value, consistent with this whole initiative's standing discipline.

## Part 1 — The competency map

Schema: `domain.subdomain` id, `tier` (introductory / developing / advanced —
matching the existing schema's *shape*, not its boundaries), real component
counts, and every source id that grounds the competency, split by kind so a
reader can see topic-vs-figure backing at a glance.


## Foundations

### `eng.foundations.control-loop-and-final-control-element` — Control Loop Fundamentals & the Valve's Role as Final Control Element
*Tier: introductory · 5 topics + 11 figures · sourcebooks: CVH*

**Topics:** cvh-topic-control-loop-fundamentals, cvh-topic-flow-characteristic-and-valve-gain, cvh-topic-rangeability, cvh-topic-deadband-and-friction, cvh-topic-dynamic-response-characteristics

**Figures:** cvh-cmp-feedback-control-loop, cvh-cmp-sliding-stem-valve-photo, cvh-cmp-sliding-stem-exploded, cvh-cmp-angle-valve-photo, cvh-cmp-cage-types, cvh-cmp-three-way-globe-valve-overview, cvh-cmp-rotary-valve-photo, cvh-cmp-segmented-ball, cvh-cmp-v-notch-ball, cvh-cmp-eccentric-disk-valve, cvh-cmp-deadband-graph

### `eng.foundations.process-variability-and-loop-performance` — Process Variability, Loop Performance & Valve Diagnostics
*Tier: introductory · 6 topics + 9 figures · sourcebooks: CVH*

**Topics:** cvh-topic-process-variability, cvh-topic-deadband, cvh-topic-valve-response-time, cvh-topic-valve-oversizing-effects, cvh-topic-closed-loop-economics, cvh-topic-signature-series-testing

**Figures:** cvh-cmp-process-variability-distributions, cvh-cmp-performance-test-loop-photo, cvh-cmp-valve-response-time-summary-table, cvh-cmp-installed-characteristic-and-gain, cvh-cmp-valve-style-control-range-comparison, cvh-cmp-closed-loop-disturbance-summary, cvh-cmp-signature-series-testing-photo, cvh-cmp-signature-data-comparison-overlay, cvh-cmp-valvelink-software-screens


## Selection

### `eng.selection.valve-body-and-type-taxonomy` — Valve Body & Closure-Member Type Selection
*Tier: developing · 26 topics + 124 figures · sourcebooks: CVH, Oil & Gas, Power & Severe Service, Pulp & Paper, Refining*

**Topics:** cvh-topic-valve-body-fundamentals, cvh-topic-globe-valve-body-selection, cvh-topic-rotary-valve-body-selection, cvh-topic-valve-plug-guiding-methods, cvh-topic-restricted-capacity-trim, cvh-topic-valve-function-taxonomy, cvh-topic-body-bonnet-junction, cvh-topic-valve-guiding, cvh-topic-check-valve-selection, ogas-topic-control-valve-selection-process, ogas-topic-sliding-stem-valve-family, ogas-topic-rotary-valve-family, ogas-topic-general-selection-criteria, pss-topic-control-valve-selection-framework, pss-topic-sliding-stem-valve-family, pss-topic-ball-valve-subcategories, pss-topic-eccentric-plug-transitional-category, pss-topic-butterfly-valve-family-evolution, pss-topic-end-connection-selection-criteria, pss-topic-pressure-drop-capacity-selection-criteria, pss-topic-valve-type-selection-guidelines, pp-topic-control-valve-selection-framework, pp-topic-restricted-capacity-trim-rationale, pp-topic-valve-plug-guiding-methods, pp-topic-flow-capacity-selection-tradeoff, ref-topic-port-guided-valve-limitations

**Figures:** cvh-cmp-valve-selection-process-flowchart, cvh-cmp-flanged-angle-valve-body, cvh-cmp-bar-stock-valve-body, cvh-cmp-single-ported-globe-valve-body, cvh-cmp-cage-style-trim-balanced-plug-soft-seat, cvh-cmp-double-ported-globe-valve-body-reverse-acting, cvh-cmp-three-way-globe-valve-cutaway, cvh-cmp-butterfly-shaft-offset-disc-center, cvh-cmp-segmented-v-notch-ball, cvh-cmp-butterfly-control-valve, cvh-cmp-ball-valve-cavitation-noise-options, cvh-cmp-high-performance-butterfly-valve, cvh-cmp-pressure-assisted-seal-configuration, cvh-cmp-eccentric-plug-valve-body, cvh-cmp-full-port-ball-control-valve, cvh-cmp-full-port-ball-valve-trunnion, cvh-cmp-multi-port-flow-selector-valve, cvh-cmp-gate-valve-pressure-seal, cvh-cmp-gate-valve-bolted-bonnet, cvh-cmp-solid-wedge-gate-valve, cvh-cmp-flexible-wedge-disk, cvh-cmp-split-wedge-gate-valve, cvh-cmp-double-disk-gate-valve, cvh-cmp-flexible-split-wedge-gate-valve, cvh-cmp-pressure-seal-detail, cvh-cmp-globe-valve-isolation, cvh-cmp-angle-type-globe-valve, cvh-cmp-y-pattern-globe-valve, cvh-cmp-conventional-disk-globe-valve, cvh-cmp-plug-disk-globe-valve, cvh-cmp-t-type-globe-valve, cvh-cmp-y-type-globe-valve, cvh-cmp-angle-type-disk-globe-valve, cvh-cmp-stop-function, cvh-cmp-stop-check-function, cvh-cmp-body-guiding, cvh-cmp-stem-bonnet-guiding, cvh-cmp-swing-check-valve, cvh-cmp-lever-weight-swing-check-valve, cvh-cmp-tilting-check-valve, cvh-cmp-horizontal-lift-check-valve, cvh-cmp-weir-type-diaphragm-valve, cvh-cmp-straightway-diaphragm-valve, cvh-cmp-air-operated-pinch-valve, cvh-cmp-reduced-port-ball-valve, cvh-cmp-wafer-type-butterfly-valve, cvh-cmp-lug-butterfly-valve, cvh-cmp-double-flanged-butterfly-valve, cvh-cmp-lubricated-plug-valve, cvh-cmp-multi-port-plug-valve, cvh-cmp-cast-iron-gate-valve-dimensions, cvh-cmp-cast-iron-globe-valve-dimensions, cvh-cmp-steel-gate-valve-class150-dimensions, cvh-cmp-steel-gate-valve-class300-dimensions, cvh-cmp-steel-gate-valve-class400-600-dimensions, cvh-cmp-steel-gate-valve-class900-1500-dimensions, cvh-cmp-steel-gate-valve-class2500-dimensions, cvh-cmp-steel-globe-check-valve-class150-dimensions, cvh-cmp-steel-globe-check-valve-class300-dimensions, cvh-cmp-steel-globe-check-valve-class400-600-dimensions, cvh-cmp-steel-globe-check-valve-class600-dimensions, cvh-cmp-steel-globe-check-valve-class900-dimensions, cvh-cmp-steel-globe-check-valve-class1500-dimensions, cvh-cmp-steel-globe-check-valve-class2500-dimensions, ogas-cmp-modern-control-valve-assembly, ogas-cmp-et-globe-cutaway, ogas-cmp-large-et-drilled-cage-cutaway, ogas-cmp-ehd-high-pressure-cutaway, ogas-cmp-economy-body-sliding-stem, ogas-cmp-v250-ball-valve-cutaway, ogas-cmp-vee-ball-segmented-cutaway, ogas-cmp-v500-eccentric-plug-cutaway, ogas-cmp-8560-high-perf-butterfly-cutaway, pss-cmp-modern-control-valve-assembly, pss-cmp-design-et-globe-cutaway, pss-cmp-large-ewnt2-drilled-cage-cutaway, pss-cmp-ehd-high-pressure-cutaway, pss-cmp-baumann-24000sb-barstock-valve, pss-cmp-baumann-little-scotty-economy-valve, pss-cmp-piston-actuator-fieldvue-valve, pss-cmp-v250-ball-valve-cutaway, pss-cmp-vee-ball-v150-v200-v300-cutaway, pss-cmp-v500-eccentric-plug-cutaway, pss-cmp-swing-through-butterfly-valve, pss-cmp-lined-butterfly-valve, pss-cmp-8560-high-perf-butterfly-cutaway, pss-cmp-bolted-flange-end-connections, pss-cmp-welded-end-connections, pp-cmp-single-ported-globe-valve-body, pp-cmp-flanged-angle-valve-body, pp-cmp-bar-stock-valve-body, pp-cmp-high-pressure-globe-valve-body, pp-cmp-cage-style-balanced-plug-valve-body, pp-cmp-high-capacity-noise-abatement-valve-body, pp-cmp-three-way-balanced-plug-valve-body, pp-cmp-high-performance-butterfly-valve-body, pp-cmp-eccentric-disk-rotary-shaft-valve, pp-cmp-control-disk-valve-2052-actuator, pp-cmp-rotary-shaft-vnotch-ball-valve, pp-cmp-eccentric-plug-valve-body-sectional, ref-cmp-easy-e-universal-sliding-stem, ref-cmp-high-pressure-high-flow-sliding-stem, ref-cmp-steam-conditioning-valve, ref-cmp-gx-chemical-general-service-valve, ref-cmp-baumann-utility-low-flow-valve, ref-cmp-baumann-sanitary-valve, ref-cmp-flopro-high-pressure-gas-valve, ref-cmp-vee-ball-proven-performance, ref-cmp-v500-cv500-hard-to-handle-fluids, ref-cmp-8580-high-performance-overview, ref-cmp-control-disk-wide-control-range, ref-cmp-pipeline-control-valve-assembly, ref-cmp-novex-phoenix-tight-shutoff-valve, ref-cmp-8580-automated-on-off-valve, ref-cmp-single-ported-globe-valve-body, ref-cmp-angle-style-valve-body, ref-cmp-balanced-plug-cage-style-valve, ref-cmp-double-ported-globe-valve-body, ref-cmp-three-way-balanced-plug-valve, ref-cmp-high-performance-butterfly-valve, ref-cmp-v-notch-segmented-ball-valve, ref-cmp-eccentric-disk-control-valve, ref-cmp-eccentric-plug-valve-sectional, ref-cmp-control-valve-packing-overview

### `eng.selection.flow-characteristic-and-rangeability` — Flow Characteristic & Rangeability
*Tier: developing · 6 topics + 11 figures · sourcebooks: CVH, Power & Severe Service, Pulp & Paper, Oil & Gas*

**Topics:** cvh-topic-flow-characteristics, cvh-topic-flow-characterization-mechanism, cvh-topic-installed-vs-inherent-characteristic, pss-topic-flow-characteristic-rangeability-positioners, pp-topic-flow-characteristic-and-rangeability, ogas-topic-flow-characteristic-and-rangeability

**Figures:** cvh-cmp-inherent-characteristics-graph, cvh-cmp-flow-characteristic-curves-repeat, cvh-cmp-inherent-flow-characteristic-curves, cvh-cmp-plug-contour-flow-characterization, cvh-cmp-quick-opening-construction, cvh-cmp-characterized-cages-globe, ogas-cmp-flow-characteristic-curves, pss-cmp-flow-characteristic-curves, pp-cmp-inherent-flow-characteristics-curves, pp-cmp-quick-opening-construction-detail, pp-cmp-characterized-cages-globe-valve

### `eng.selection.shutoff-leakage-and-standards` — Shutoff/Leakage Classification, Pressure-Temperature Rating & Standards
*Tier: developing · 9 topics + 4 figures · sourcebooks: CVH, Oil & Gas, Pulp & Paper, Power & Severe Service*

**Topics:** cvh-topic-seat-leakage-classification, ogas-topic-shutoff-leakage-classification, pp-topic-shutoff-leakage-classification, pss-topic-shutoff-leakage-selection-criteria, pss-topic-pressure-temperature-material-selection-criteria, pss-topic-valve-standards-crosswalk, pss-topic-pressure-rating-classes, pss-topic-boiler-piping-code-jurisdiction, pp-topic-pressure-temperature-material-selection-criteria

**Figures:** cvh-cmp-iso15848-1-qualification-requirements, cvh-cmp-iso15848-1-measured-leak-rate, cvh-cmp-iso15848-1-measured-leak-concentration, cvh-cmp-fci91-1-leakage-class-summary


## Actuation

### `eng.actuation.actuator-selection-and-force-torque-sizing` — Actuator Selection & Force/Torque Sizing
*Tier: developing · 30 topics + 50 figures · sourcebooks: CVH, Power & Severe Service, Refining, Oil & Gas*

**Topics:** cvh-topic-actuator-type-selection, cvh-topic-actuator-force-selection, cvh-topic-rotary-actuator-torque, cvh-topic-actuator-mechanism-basics, cvh-topic-bench-set-adjustment, cvh-topic-valve-travel-criticality, cvh-topic-bench-set, cvh-topic-valve-balance, cvh-topic-seat-load, pss-topic-actuator-body-orientation, pss-topic-positioner-gain-mechanism, pss-topic-piston-diaphragm-speed-myth, ogas-topic-actuator-design-taxonomy, ogas-topic-fail-safe-action-mechanism, ogas-topic-piston-actuator-design-variants, ogas-topic-electric-actuator-selection-factors, ogas-topic-electro-hydraulic-actuator-configurations, ogas-topic-actuator-force-sizing-methodology, ogas-topic-rotary-actuator-torque-sizing, ogas-topic-actuator-selection-process-summary, pss-topic-actuator-selection-parameters, pss-topic-failsafe-mechanism, pss-topic-actuator-design-categories-and-linkage, pss-topic-piston-actuator-mechanism-variants, pss-topic-electric-actuator-characteristics, pss-topic-electro-hydraulic-configurations, pss-topic-actuator-force-calculation-globe, pss-topic-piston-thrust-calculation, pss-topic-rotary-actuator-torque-methodology, pss-topic-actuator-type-comparison-summary

**Figures:** cvh-cmp-direct-acting-actuator, cvh-cmp-piston-actuator, cvh-cmp-reverse-acting-actuator, cvh-cmp-rotary-actuator-cutaway, cvh-cmp-field-reversible-multi-spring-actuator, cvh-cmp-diaphragm-actuator-rotary-valve, cvh-cmp-double-acting-piston-actuator, cvh-cmp-scotch-yoke-piston-actuator, cvh-cmp-manual-actuator-sliding-stem, cvh-cmp-manual-actuator-rotary, cvh-cmp-rack-and-pinion-actuator, cvh-cmp-electric-actuator-sliding-stem, cvh-cmp-electric-actuator-rotary, cvh-cmp-spring-diaphragm-actuator-generic, cvh-cmp-actuator-side-handwheel, cvh-cmp-actuator-top-handwheel, cvh-cmp-bench-set-seating-force-graph, cvh-cmp-unbalance-area-table, cvh-cmp-seat-load-graph, cvh-cmp-recommended-seat-load-table, pss-cmp-process-variability-distribution, pss-cmp-performance-test-loop, pss-cmp-open-loop-step-test-three-valves, pss-cmp-installed-flow-characteristic-gain, pss-cmp-valve-style-control-range-comparison, pss-cmp-closed-loop-performance-summary, ref-cmp-easy-drive-sour-gas-actuator, ref-cmp-direct-acting-diaphragm-actuator, ref-cmp-reverse-acting-diaphragm-actuator, ref-cmp-reversible-diaphragm-actuator, ref-cmp-direct-acting-rotary-diaphragm-actuator, ref-cmp-piston-actuators-sliding-rotary, ref-cmp-typical-manual-actuators, ref-cmp-rack-and-pinion-actuator-hpbv, ref-cmp-electric-actuator-dump-valve, ogas-cmp-657-667-diaphragm-actuator-cutaways, ogas-cmp-2052-splined-actuator-connection, ogas-cmp-1061-double-acting-piston-rotary, ogas-cmp-585c-spring-bias-piston-cutaway, ogas-cmp-1061-rotary-piston-throttling-cutaway, ogas-cmp-1066sr-onoff-piston-actuator, ogas-cmp-d4-easydrive-electric-actuator, ogas-cmp-recommended-seat-load-chart, pss-cmp-spring-diaphragm-actuator-667-657, pss-cmp-double-acting-piston-actuator-comparison, pss-cmp-type585c-spring-fail-safe-piston, pss-cmp-type1061-rotary-piston-throttling, pss-cmp-type350-self-contained-electro-hydraulic, pss-cmp-recommended-seat-load-graph, pss-cmp-type3582-pneumatic-positioner


## Packing & Emissions

### `eng.packing.selection-and-fugitive-emissions` — Packing Selection & Fugitive-Emissions Control
*Tier: developing · 16 topics + 59 figures · sourcebooks: CVH, Oil & Gas, Pulp & Paper, Refining, Power & Severe Service*

**Topics:** cvh-topic-packing-selection-criteria, cvh-topic-packing-friction, cvh-topic-fugitive-emissions-standards, ogas-topic-packing-selection-framework, pp-topic-fugitive-emissions-regulatory-framework, pp-topic-bonnet-function-and-types, cvh-topic-bonnet-function-and-types, pp-topic-end-connection-selection-criteria, cvh-topic-end-connection-selection, ref-topic-laminated-filament-graphite-packing, pss-topic-packing-selection-framework, pss-topic-kalrez-vs-enviroseal-ptfe-tradeoff, pss-topic-galvanic-corrosion-and-storage, pss-topic-enviroseal-vs-highseal-extreme-service, pss-topic-packing-arrangement-configurations, pss-topic-oxygen-service-packing-precautions

**Figures:** cvh-cmp-bellows-seal-bonnet, cvh-cmp-bonnet-assembly, cvh-cmp-stem-packing-types, cvh-cmp-packing-material-arrangements-globe, cvh-cmp-single-ptfe-vring-packing, cvh-cmp-enviroseal-ptfe-packing-system, cvh-cmp-enviroseal-duplex-packing-system, cvh-cmp-enviroseal-graphite-ulf-packing-system, cvh-cmp-enviroseal-graphite-packing-rotary, cvh-cmp-sliding-stem-environmental-packing-selection, cvh-cmp-rotary-environmental-packing-selection, cvh-cmp-voc-ldar-measurement-frequency, cvh-cmp-bonnet-variations, cvh-cmp-fabricated-extension-bonnet, cvh-cmp-enviroseal-bellows-seal-bonnet, cvh-cmp-welded-leaf-bellows, cvh-cmp-mechanically-formed-bellows, cvh-cmp-adapter-reduced-flow-capacity, cvh-cmp-cage-guiding-plug-guiding-cross-section, cvh-cmp-bolted-flange-end-connections, cvh-cmp-welded-end-connections, cvh-cmp-typical-bonnet-flange-stud-bolts, cvh-cmp-packing-friction-values-table, cvh-cmp-packing-guidelines-chart-100ppm, cvh-cmp-packing-guidelines-chart-non-environmental, ogas-cmp-bolted-flange-end-connections, ogas-cmp-welded-end-connections, ogas-cmp-sliding-stem-packing-examples-ptfe-and-duplex, ogas-cmp-sliding-stem-packing-examples-graphite, ogas-cmp-enviroseal-rotary-packing-arrangements, ogas-cmp-packing-500ppm-guidelines-chart, ogas-cmp-packing-nonenvironmental-guidelines-chart, pss-cmp-sliding-stem-packing-examples-graphite, pp-cmp-bolted-flange-end-connections, pp-cmp-welded-end-connections, pp-cmp-typical-bonnet-flange-stud-bolts, pp-cmp-extension-bonnet-cast, pp-cmp-fabricated-extension-bonnet, pp-cmp-enviroseal-bellows-seal-bonnet, pp-cmp-mechanically-formed-bellows, pp-cmp-welded-leaf-bellows, pp-cmp-comprehensive-packing-arrangements-globe, pp-cmp-voc-measurement-frequency-flowchart, pp-cmp-single-ptfe-vring-packing-detail, pp-cmp-enviroseal-ptfe-packing-system, pp-cmp-enviroseal-duplex-packing-system, pp-cmp-enviroseal-graphite-ulf-packing-system, pp-cmp-enviroseal-graphite-packing-rotary, ref-cmp-enviroseal-environmental-packing-valve, ref-cmp-single-ptfe-vring-packing, ref-cmp-enviroseal-ptfe-packing-system, ref-cmp-enviroseal-duplex-packing-system, ref-cmp-enviroseal-graphite-ulf-packing, ref-cmp-enviroseal-graphite-packing-rotary, ref-cmp-highseal-graphite-ulf-packing, pss-cmp-packing-500ppm-application-guidelines-chart, pss-cmp-packing-nonenvironmental-application-guidelines-chart, pss-cmp-sliding-stem-packing-examples-ptfe-kalrez, pss-cmp-rotary-valve-packing-arrangements


## Sizing

### `eng.sizing.liquid-and-industry-specific-sizing` — Liquid Sizing Methodology (incl. Industry-Specific Corrections)
*Tier: developing · 7 topics + 11 figures · sourcebooks: CVH, Oil & Gas, Power & Severe Service, Pulp & Paper*

**Topics:** cvh-topic-liquid-sizing-methodology, ogas-topic-liquid-sizing-methodology, pss-topic-liquid-sizing-methodology, ogas-topic-piping-geometry-factor, pss-topic-piping-geometry-factor, pp-topic-pulp-stock-sizing-methodology, pp-topic-viscous-flow-sizing-correction

**Figures:** ogas-cmp-ff-chart-water, ogas-cmp-ff-chart-nonwater, pss-cmp-liquid-critical-pressure-ratio-water, pss-cmp-liquid-critical-pressure-ratio-other-liquids, pp-cmp-liquid-critical-pressure-ratio-water, pp-cmp-liquid-critical-pressure-ratio-nonwater, pp-cmp-liquid-critical-pressure-ratio-water-repeat, pp-cmp-pulp-stock-correction-factors-kraft, pp-cmp-pulp-stock-correction-factors-mechanical, pp-cmp-pulp-stock-correction-factors-recycled, pp-cmp-viscous-flow-correction-factors

### `eng.sizing.compressible-gas-and-steam-sizing` — Compressible (Gas/Steam) Sizing Methodology
*Tier: developing · 4 topics + 0 figures · sourcebooks: CVH, Power & Severe Service*

**Topics:** cvh-topic-compressible-sizing-methodology, pss-topic-gas-steam-sizing-methodology, pss-topic-choked-flow-expansion-factor, pss-topic-xtp-piping-geometry-correction


## Destructive Flow Phenomena

### `eng.destructive-flow.cavitation-flashing-mechanism-and-mitigation` — Cavitation & Flashing: Mechanism, Damage, and Trim/Materials Mitigation
*Tier: advanced · 24 topics + 40 figures · sourcebooks: CVH, Pulp & Paper, Power & Severe Service, Oil & Gas*

**Topics:** cvh-topic-vena-contracta, cvh-topic-flow-recovery, cvh-topic-flashing, cvh-topic-cavitation, cvh-topic-cavitation-flashing-mitigation, cvh-topic-particulate-cavitation-erosion, pp-topic-lime-mud-erosive-service-selection, pp-topic-cavitation-in-pulp-stock, pp-topic-cavitation-selection-coefficients, pss-topic-condensate-recirc-cavitation-diagnosis, pss-topic-cavitation-flashing-diagnostic-error, pss-topic-alloy6-corrosion-mechanism, ogas-topic-choked-flow-and-cavitation-flashing, ogas-topic-cavitation-flashing-mechanism, ogas-topic-bubble-cycle, ogas-topic-liquid-choked-flow, ogas-topic-cavitation-damage-mechanism, ogas-topic-cavitation-flashing-noise-levels, ogas-topic-flashing-hardware-selection-rationale, ogas-topic-cavitation-flashing-materials-selection, ogas-topic-cavitation-control-trim-theories, ogas-topic-seating-throttling-separation-rationale, ogas-topic-backpressure-device-alternative, pss-topic-choked-flow-and-cavitation-flashing

**Figures:** cvh-cmp-vena-contracta-diagram, cvh-cmp-pressure-profile-high-low-recovery, cvh-cmp-flashing-damage-photo, cvh-cmp-cavitation-damage-photo, ogas-cmp-restriction-pressure-profile, ogas-cmp-velocity-pressure-vena-contracta, ogas-cmp-cavitation-flashing-pressure-recovery, ogas-cmp-choked-flow-deltaP-allowable, ogas-cmp-cavitation-vs-flashing-damage-photos, ogas-cmp-microjet-collapse-mechanism, ogas-cmp-eas-valve-outlet-liner, ogas-cmp-rotary-plug-flashing-resistance, ogas-cmp-cavitrol-pressure-staging-graph, ogas-cmp-drilled-hole-cage-designs, ogas-cmp-cavitrol-iv-trim-cutaway, pss-cmp-restriction-pressure-profile, pss-cmp-pressure-velocity-vena-contracta-curves, pss-cmp-cavitation-vs-flashing-pressure-recovery, pss-cmp-choked-flow-deltap-allowable-graph, pss-cmp-cavitation-vs-flashing-damage-photos, pss-cmp-bubble-collapse-jet-mechanics, pss-cmp-eas-valve-outlet-liner-cutaway, pss-cmp-v500-rotary-plug-flashing-cutaway, pss-cmp-valve-location-flashing-system-design, pss-cmp-cavitrol-iv-pressure-staging-curve, pss-cmp-drilled-hole-geometry-comparison, pss-cmp-cavitrol-iv-trim-cutaway, pp-cmp-flow-curve-choked-flow, pp-cmp-generalized-rc-curve, pp-cmp-typical-cavitation-damage-photo, pp-cmp-high-low-recovery-valve-comparison, pp-cmp-pressure-profiles-flashing-cavitating, pp-cmp-typical-flashing-damage-photo, pp-cmp-cavitation-implosion-mechanism, pp-cmp-eas-valve-outlet-liner, pp-cmp-v500-rotary-plug-flashing-resistance, pp-cmp-valve-location-flashing-system-design, pp-cmp-cavitrol-pressure-staging-graph, pp-cmp-drilled-hole-cage-designs, pp-cmp-cavitrol-iv-trim-cutaway


## Noise

### `eng.noise.generation-and-control` — Control Valve Noise: Generation and Trim-Based Control
*Tier: advanced · 3 topics + 50 figures · sourcebooks: CVH, Oil & Gas, Refining, Pulp & Paper, Power & Severe Service*

**Topics:** cvh-topic-noise-generation-and-prediction, cvh-topic-noise-control-strategy, pp-topic-sootblower-valve-selection-rationale

**Figures:** cvh-cmp-noise-reduction-trim-photo, cvh-cmp-valve-inline-diffuser-photo, cvh-cmp-valve-vent-diffuser-diagram, cvh-cmp-cavitation-elimination-valve-design, cvh-cmp-inline-silencer-photo, cvh-cmp-globe-valve-noise-abatement-cage, cvh-cmp-ball-valve-noise-attenuator, ogas-cmp-whisperflo-trim-cutaway, ogas-cmp-whisperflo-trim-disk-stack, ogas-cmp-notchflo-dst-trim-cutaway, ogas-cmp-notchflo-dst-trim, ogas-cmp-notchflo-cast-globe-body, ogas-cmp-cavitrol-iii-trim-cage, ogas-cmp-cavitrol-iv-trim, ogas-cmp-ewt-metal-seat-whisper-trim-i-cutaway, ogas-cmp-whisper-trim-iii-flash-gas-flare, ogas-cmp-dst-trim, ogas-cmp-globe-valve-noise-abatement-cage, ogas-cmp-ball-valve-hydrodynamic-attenuator, ogas-cmp-large-et-valve-whisper-iii-trim, ref-cmp-cavitrol-iii-cavitating-liquid-trim, ref-cmp-dst-g-outgassing-trim, ref-cmp-whisper-trim-iii-drilled-hole-noise-trim, ref-cmp-notchflo-dst-cavitating-dirty-flow-trim, ref-cmp-dst-customized-dirty-service-trim, ref-cmp-cavitrol-iv-large-pressure-drop-trim, ref-cmp-whisperflo-stacked-disk-noise-trim, ref-cmp-whisper-trim-i-slotted-noise-trim, ref-cmp-6010-inline-diffuser, ref-cmp-expanded-end-connection-noise-trim-valve, ogas-cmp-cage-trim-noise-designs, ogas-cmp-inline-diffuser-combination, ogas-cmp-vent-diffuser-combination, ogas-cmp-series-restriction-anticavitation-trim, ogas-cmp-inline-silencer, pss-cmp-noise-trim-source-treatment-cutaway, pss-cmp-valve-inline-diffuser-combination, pss-cmp-valve-vent-diffuser-combination, pss-cmp-special-valve-cavitation-elimination, pss-cmp-inline-silencer, pss-cmp-globe-valve-noise-abatement-cage, pss-cmp-ball-valve-hydrodynamic-noise-attenuator, pp-cmp-whisper-trim-i-cage, pp-cmp-whisper-trim-i-inline-diffuser-combination, pp-cmp-whisper-trim-iii, pp-cmp-whisperflo-technology, pp-cmp-vee-ball-noise-attenuator, pp-cmp-valve-and-vent-diffuser-combination, pp-cmp-cavitrol-iii-trim-photo, pp-cmp-notchflo-dst-trim


## Materials

### `eng.materials.severe-service-material-selection` — Materials Selection for Erosive/Corrosive/High-Temperature Service
*Tier: advanced · 17 topics + 15 figures · sourcebooks: CVH, Oil & Gas, Power & Severe Service, Pulp & Paper*

**Topics:** cvh-topic-extreme-temperature-materials, cvh-topic-sulfide-stress-cracking, cvh-topic-nuclear-code-classification, cvh-topic-low-flow-design-approach, cvh-topic-custom-flow-characteristics, ogas-topic-sour-service-material-selection, pss-topic-high-temperature-alloy-selection, pp-topic-tio2-erosive-service-valve-requirements, pss-topic-material-selection-properties, pss-topic-elevated-temperature-material-effects, pss-topic-body-bonnet-material-requirements, pss-topic-trim-component-material-requirements, pss-topic-standard-trim-combination-rationale, pss-topic-alloy6-erosion-corrosion-case, pss-topic-bolting-grade-selection, pss-topic-standard-materials-cost-leadtime-rationale, pss-topic-material-designation-systems

**Figures:** cvh-cmp-cryogenic-extension-bonnet, cvh-cmp-cavitation-trim-cutaway, cvh-cmp-particulate-trim-eccentric-plug, cvh-cmp-severe-service-inherent-characteristic-curve, cvh-cmp-pressurizer-spray-valve-nuclear, cvh-cmp-butterfly-valve-fieldvue-assembly, cvh-cmp-large-flow-valve-body-noise-attenuation, cvh-cmp-black-forged-body-high-capacity, cvh-cmp-low-flow-cv-control-valve, pss-cmp-pt-ratings-comparison-graph, pss-cmp-alloy6-plug-side-view-damage-photo, pss-cmp-alloy6-plug-end-view-damage-photo, pss-cmp-alloy6-sectioned-sample-photo, pss-cmp-alloy6-sem-photomicrograph, pss-cmp-bolt-stress-vs-temperature-graph


## Steam Conditioning & Turbine Systems

### `eng.steam.desuperheating` — Desuperheating: Thermodynamics, Hardware & Sizing
*Tier: advanced · 10 topics + 38 figures · sourcebooks: CVH, Pulp & Paper, Power & Severe Service*

**Topics:** cvh-topic-desuperheater-sizing-methodology, cvh-topic-desuperheater-application-factors, cvh-topic-steam-conditioning-valve-rationale, pp-topic-superheater-attemperation-and-blowdown, pp-topic-sootblower-mechanism-types, pss-topic-steam-thermodynamics-and-desuperheat-rationale, pss-topic-desuperheater-selection-taxonomy, pss-topic-desuperheater-performance-factors, pss-topic-desuperheater-sizing-equations, pss-topic-desuperheater-control-philosophy

**Figures:** cvh-cmp-insertion-desuperheater-schematic, cvh-cmp-desuperheater-installation-orientations, cvh-cmp-desuperheater-spray-penetration, cvh-cmp-fixed-geometry-nozzle, cvh-cmp-variable-geometry-nozzle, cvh-cmp-self-contained-desuperheater-design, cvh-cmp-steam-atomized-desuperheater-design, cvh-cmp-steam-assisted-desuperheater-control-loop, cvh-cmp-geometry-assisted-wafer-design, cvh-cmp-steam-conditioning-valve-cross-section, cvh-cmp-backpressure-spray-nozzle, cvh-cmp-ring-style-attemperator, cvh-cmp-steam-sparger-drilled-hole, pss-cmp-water-temperature-enthalpy-btu-diagram, pss-cmp-water-th-diagram-saturation-vs-pressure, pss-cmp-insertion-style-desuperheater, pss-cmp-design-dma-af-desuperheater, pss-cmp-design-dvg-af-desuperheater, pss-cmp-design-dvi-desuperheater, pss-cmp-design-dsa-desuperheater-nozzle, pss-cmp-dsa-desuperheater-system-diagram, pss-cmp-design-tbx-t-steam-conditioning-valve, pss-cmp-tbx-af-spray-nozzle-detail, pss-cmp-tbx-t-cooler, pss-cmp-combined-cycle-turbine-bypass-schematic, pss-cmp-tbx-whisperflo-sparger, pp-cmp-water-temperature-enthalpy-diagram, pp-cmp-water-th-diagram-saturation-vs-pressure, pp-cmp-insertion-style-desuperheater, pp-cmp-dma-af-desuperheater, pp-cmp-dvi-desuperheater, pp-cmp-dsa-desuperheater-nozzle, pp-cmp-dsa-desuperheater-system-diagram, pp-cmp-tbx-t-cooler, pp-cmp-tbx-external-spraywater-manifold, pp-cmp-af-spray-nozzle-detail, pp-cmp-tbx-external-manifold-full-view, pp-cmp-tbx-whisperflo-sparger

### `eng.steam.turbine-and-boiler-bypass-systems` — Turbine & Boiler Bypass Systems
*Tier: advanced · 11 topics + 8 figures · sourcebooks: CVH, Power & Severe Service, Pulp & Paper*

**Topics:** cvh-topic-turbine-bypass-system-rationale, cvh-topic-turbine-bypass-valve-selection, pss-topic-turbine-bypass-system-benefits, pss-topic-hp-bypass-function-and-failure-mode, pss-topic-hrh-lp-bypass-function, pss-topic-bypass-capacity-sizing-strategy, pss-topic-turbine-operating-modes-and-bypass-role, pss-topic-turbine-bypass-system-function, pss-topic-boiler-bypass-system-purpose, pss-topic-turbine-bypass-system-purpose, pss-topic-startup-vent-valve-mechanism

**Figures:** cvh-cmp-turbine-bypass-actuation-package, pp-cmp-turbine-bypass-system-schematic, cvh-cmp-typical-feedheater-system, cvh-cmp-normal-bypass-operations, cvh-cmp-reheater-isolation-valve, cvh-cmp-turbine-extraction-valve, cvh-cmp-bypass-valve, cvh-cmp-bypass-auxiliary-connections


## Safety & Protection

### `eng.safety.instrumented-systems-and-accessories` — Safety Instrumented Systems, Positioners & Digital Valve Controllers
*Tier: advanced · 17 topics + 63 figures · sourcebooks: Oil & Gas, Power & Severe Service, Refining, Pulp & Paper, CVH*

**Topics:** ogas-topic-positioner-booster-application-guidelines, pss-topic-positioner-application-guidelines, cvh-topic-accessory-selection-rationale, cvh-topic-positioner-fundamentals, cvh-topic-digital-valve-controller-capabilities, cvh-topic-volume-booster-function, cvh-topic-sis-accessory-role, cvh-topic-partial-stroke-testing, cvh-topic-pneumatic-controller-modes, cvh-topic-position-feedback-devices, cvh-topic-sov-voting-nomenclature, cvh-topic-trip-system-function, cvh-topic-layers-of-protection, cvh-topic-sis-fundamentals-and-standards, cvh-topic-pfd-calculation, cvh-topic-final-element-testing, cvh-topic-hipps-functionality-and-testing

**Figures:** ref-cmp-dpc2k-digital-position-controller, ref-cmp-dvc7k-digital-valve-controller, ref-cmp-valvelink-diagnostics-software, ref-cmp-c1-pneumatic-pressure-controller, ref-cmp-electro-pneumatic-transducer-overview, ref-cmp-volume-booster-overview, ref-cmp-pneumatic-positioner, ref-cmp-analog-ip-positioner, ref-cmp-fieldvue-digital-valve-controller-overview, ref-cmp-flowscanner-system, ogas-cmp-diaphragm-actuator-handwheel, ogas-cmp-3620jp-electropneumatic-positioner, ogas-cmp-3582-pneumatic-positioner-nomenclature, ogas-cmp-fieldvue-digital-valve-controller, ogas-cmp-i2p100-electropneumatic-transducer, ogas-cmp-ss263-pneumatic-booster, ogas-cmp-c1-pneumatic-controller, pss-cmp-spring-diaphragm-handwheel, pss-cmp-type1052-rotary-spring-diaphragm, pss-cmp-type1066sr-spring-return-piston, pss-cmp-type3620jp-electro-pneumatic-positioner, pss-cmp-type646-electro-pneumatic-transducer, pss-cmp-limit-switches-actuator-accessory, pss-cmp-type2625-pneumatic-booster, pp-cmp-657-667-diaphragm-actuator-cutaways, pp-cmp-diaphragm-actuator-handwheel, pp-cmp-2052-splined-actuator-connection, pp-cmp-1061-double-acting-piston-rotary, pp-cmp-585c-spring-bias-piston-cutaway, pp-cmp-1066sr-onoff-piston-actuator, pp-cmp-fieldq-rack-pinion-actuator, pp-cmp-recommended-seat-load-chart, pp-cmp-fieldvue-digital-valve-controller-actuator-mounted, cvh-cmp-pneumatic-positioner-schematic, cvh-cmp-analog-ip-positioner-schematic, cvh-cmp-analog-ip-positioner-photo, cvh-cmp-digital-valve-controller-photo, cvh-cmp-ip-transducer-pilot-detail, cvh-cmp-ip-transducer-photo, cvh-cmp-volume-booster-sectional, cvh-cmp-dual-booster-installation, cvh-cmp-sis-dvc-on-safety-valve, cvh-cmp-pneumatic-controller-photo, cvh-cmp-pneumatic-controller-schematic-proportional, cvh-cmp-pneumatic-controller-schematic-reset-rate, cvh-cmp-wireless-position-transmitter, cvh-cmp-sov-3port-spring-return-symbol, cvh-cmp-sov-4port-double-acting-symbol, cvh-cmp-sov-1oo2-voting-intro, cvh-cmp-sov-direct-acting-assembly, cvh-cmp-sov-pilot-operated-assembly, cvh-cmp-sov-1oo2-architecture-schematic, cvh-cmp-sov-2oo2-architecture-schematic, cvh-cmp-sov-redundant-trip-configuration, cvh-cmp-sov-three-way-manual-reset, cvh-cmp-sov-manifold-assembly, cvh-cmp-trip-valve-tripped-condition, cvh-cmp-three-way-switching-valve, cvh-cmp-layers-of-protection, cvh-cmp-sis-components-loop, cvh-cmp-sil-pfd-rrf-table, cvh-cmp-oreda-failure-data-chart, cvh-cmp-hipps-typical-configuration

### `eng.safety.hazardous-locations-and-explosion-protection` — Hazardous Location Classification & Explosion Protection
*Tier: advanced · 10 topics + 7 figures · sourcebooks: CVH*

**Topics:** cvh-topic-hazardous-location-definitions, cvh-topic-classification-systems, cvh-topic-equipment-groups-subgroups, cvh-topic-types-and-levels-of-protection, cvh-topic-protection-level-and-epl, cvh-topic-temperature-code-concept, cvh-topic-marking-nomenclature, cvh-topic-atex-directive, cvh-topic-protection-techniques-applied, cvh-topic-enclosure-rating-standards

**Figures:** cvh-cmp-equipment-groups-table, cvh-cmp-zones-vs-epl-table, cvh-cmp-zones-vs-epl-risk-matrix, cvh-cmp-temperature-codes-table, cvh-cmp-iec-vs-atex-ratings-table, cvh-cmp-enclosure-ratings-table, cvh-cmp-ingress-protection-numerals-table


## Instrumentation

### `eng.instrumentation.level-measurement` — Liquid Level Measurement & Control (figure-only gap — see findings)
*Tier: developing · 0 topics + 9 figures · sourcebooks: Refining, Oil & Gas*

**Figures:** ref-cmp-digital-level-transmitter-overview, ref-cmp-l2-liquid-level-controller, ref-cmp-displacer-level-transmitter-schematic, ref-cmp-caged-sensor, ref-cmp-cageless-sensor, ref-cmp-level-trol-application-photo, ref-cmp-liquid-level-installation-schematic, ogas-cmp-l2e-electric-level-controller, ogas-cmp-fieldvue-dlc3010-digital-level-controller


## Maintenance & Lifecycle

### `eng.maintenance.diagnostics-and-lifecycle-strategy` — Maintenance Philosophy, Diagnostics & Spare-Parts Strategy
*Tier: advanced · 6 topics + 9 figures · sourcebooks: CVH*

**Topics:** cvh-topic-flushing-hydro-trim-protocol, cvh-topic-maintenance-philosophies, cvh-topic-in-service-diagnostics, cvh-topic-oem-vs-replicated-parts, cvh-topic-spare-parts-stocking-strategy, cvh-topic-sto-planning-process

**Figures:** cvh-cmp-ball-valve-flow-arrow, cvh-cmp-criss-cross-bolt-pattern, cvh-cmp-nonintrusive-diagnostics-program, cvh-cmp-control-disk-component, cvh-cmp-stud-washer-nut-kit, cvh-cmp-gasket-kit, cvh-cmp-packing-kit, cvh-cmp-valve-stem-packing-assemblies, cvh-cmp-sto-planning-process-infographic


## Installation Practice

### `eng.installation.piping-practice-and-orientation` — Installation Practice: Piping Arrangement, Orientation & Commissioning
*Tier: developing · 5 topics + 0 figures · sourcebooks: Power & Severe Service*

**Topics:** pss-topic-control-valve-piping-arrangement, pss-topic-line-size-vs-valve-size, pss-topic-velocity-limitations, pss-topic-welding-procedure-stages, pss-topic-system-flushing-and-sacrificial-trim


## Industry Context

### `eng.context.decarbonization-and-emissions-strategy` — Decarbonization & Emissions Strategy (industry context, not valve mechanism)
*Tier: introductory · 6 topics + 3 figures · sourcebooks: CVH*

**Topics:** cvh-topic-decarbonization-pathways, cvh-topic-greening-framework, cvh-topic-emissions-scopes, cvh-topic-net-zero-target-setting, cvh-topic-valve-related-methane-reduction, cvh-topic-carbon-neutral-vs-net-zero

**Figures:** cvh-cmp-greenhouse-gas-scopes, cvh-cmp-sustainability-decarbonization-table, cvh-cmp-esg-approach-by-industries


## Application — Oil & Gas

### `app.oil-gas.onshore-production` — Onshore Oil & Gas Production
*Tier: advanced · 7 topics + 11 figures · sourcebooks: Oil & Gas*

**Topics:** ogas-topic-onshore-production-overview, ogas-topic-staged-separation-pressure-design, ogas-topic-crude-oil-dehydration-methods, ogas-topic-compressor-skid-sizing-factors, ogas-topic-separator-gas-outlet-pressure-control, ogas-topic-separator-liquid-level-control-mechanism, ogas-topic-separator-vent-to-flare-safety-function

**Figures:** ogas-cmp-onshore-production-process-flow, ogas-cmp-well-site-gathering-system, ogas-cmp-well-site-choke-valve-photo, ogas-cmp-process-fluid-separation-system, ogas-cmp-v260-valve-exterior, ogas-cmp-easydrive-actuator-d4-valve, ogas-cmp-compressor-system, ogas-cmp-compression-suction-throttle-valve-photo, ogas-cmp-compressor-antisurge-valve-photo, ogas-cmp-bulk-treater-oil-treatment-system, ogas-cmp-electrostatic-coalescer-oil-treatment-system

### `app.oil-gas.offshore-production` — Offshore Oil & Gas Production
*Tier: advanced · 7 topics + 16 figures · sourcebooks: Oil & Gas*

**Topics:** ogas-topic-offshore-facility-types, ogas-topic-slugging-and-slug-catchers, ogas-topic-separation-train-overview, ogas-topic-oil-water-separation-technologies, ogas-topic-gas-compression-and-treatment-overview, ogas-topic-gas-injection-and-lift, ogas-topic-water-treatment-and-injection-overview

**Figures:** ogas-cmp-offshore-topsides-process-flow, ogas-cmp-slug-catcher-valves, ogas-cmp-vee-ball-v150-2052-actuator, ogas-cmp-8580-rotary-valve-2052-actuator, ogas-cmp-high-pressure-separation-process-diagram, ogas-cmp-low-pressure-separation-process-diagram, ogas-cmp-oil-treatment-system-diagram, ogas-cmp-667-hp-control-valve, ogas-cmp-low-pressure-compression-system-diagram, ogas-cmp-electrostatic-coalescer-oil-treatment, ogas-cmp-high-pressure-compression-train, ogas-cmp-ez-control-valve-sectional, ogas-cmp-teg-gas-dehydration-unit, ogas-cmp-amine-treatment-unit, ogas-cmp-tail-gas-treatment-system, ogas-cmp-water-injection-system-fpso

### `app.oil-gas.gas-treatment-and-processing` — Gas Treatment & Processing Plants
*Tier: advanced · 5 topics + 8 figures · sourcebooks: Oil & Gas*

**Topics:** ogas-topic-natural-gas-treatment-plant-overview, ogas-topic-amine-treating-mechanism, ogas-topic-gas-dehydration-methods, ogas-topic-sulfur-recovery-claus-process, ogas-topic-application-review-scaling

**Figures:** ogas-cmp-natural-gas-treatment-process-flow, ogas-cmp-inlet-separation-system, ogas-cmp-a11-2052-actuator-dvc6000, ogas-cmp-nps1-6-design-et-plug-open, ogas-cmp-tail-gas-treatment-system-ch9, ogas-cmp-teg-gas-dehydration-unit-ch9, ogas-cmp-sulfur-recovery-system, ogas-cmp-design-ed-cutaway

### `app.oil-gas.gas-transportation-and-storage` — Gas/Oil Transportation & Underground Storage
*Tier: advanced · 7 topics + 14 figures · sourcebooks: Oil & Gas*

**Topics:** ogas-topic-compressor-station-fundamentals, ogas-topic-metering-station-purpose, ogas-topic-pump-station-fundamentals, ogas-topic-anti-surge-dynamic-response, ogas-topic-transportation-startup-cavitation, ogas-topic-storage-formation-types, ogas-topic-bidirectional-cavern-valve-sizing

**Figures:** ogas-cmp-gas-transportation-process-flow, ogas-cmp-oil-transportation-process-flow, ogas-cmp-metering-station-control-valve-diagram, ogas-cmp-et-class300-whisperflo-spoked-plug, ogas-cmp-pump-station-control-valve-diagram, ogas-cmp-oil-terminal-receiving-unit-diagram, ogas-cmp-v260b-hydrodome-attenuator, ogas-cmp-vee-ball-v150-2052-dvc6200-cutaway, ogas-cmp-underground-storage-process-flow, ogas-cmp-water-injection-valve-diagram, ogas-cmp-vee-ball-v200-2052-actuator-dvc6200, ogas-cmp-brine-disposal-valve-diagram, ogas-cmp-gas-injection-valve-diagram, ogas-cmp-gas-withdrawal-export-valve-diagram

### `app.oil-gas.ngl-fractionation` — NGL Fractionation
*Tier: advanced · 3 topics + 8 figures · sourcebooks: Oil & Gas*

**Topics:** ogas-topic-ngl-fractions-and-terminology, ogas-topic-fractionation-train-mechanism, ogas-topic-fractionation-valve-selection-rationale

**Figures:** ogas-cmp-fractionation-process-flow, ogas-cmp-deethanizer-process-diagram, ogas-cmp-nps4-eh-hp-657-actuator-dvc6010, ogas-cmp-depropanizer-process-diagram, ogas-cmp-nps10-24-ewt-ewd-cutaway, ogas-cmp-8580-valve-2052-actuator-dvc6000, ogas-cmp-debutanizer-process-diagram, ogas-cmp-vee-ball-v150-2052-actuator-dvc6200

### `app.oil-gas.lng-liquefaction-and-regasification` — LNG Liquefaction & Regasification
*Tier: advanced · 11 topics + 20 figures · sourcebooks: Oil & Gas*

**Topics:** ogas-topic-lng-fundamentals, ogas-topic-propane-refrigeration-cycle, ogas-topic-mixed-refrigerant-cycle, ogas-topic-feed-gas-letdown-criticality, ogas-topic-compressor-surge-mechanism, ogas-topic-odv-package-rationale, ogas-topic-hot-gas-bypass, ogas-topic-joule-thomson-expansion-and-trim-selection, ogas-topic-lng-receiving-terminal-overview, ogas-topic-lng-vaporizer-types, ogas-topic-boiloff-recondenser-function

**Figures:** ogas-cmp-lng-process-flow-diagram, ogas-cmp-refrigerant-cycles-liquefaction-diagram, ogas-cmp-feed-gas-pressure-letdown-valves, ogas-cmp-ewt-whisper-trim-iii-cutaway, ogas-cmp-typical-compressor-map, ogas-cmp-odv-package-585cls, ogas-cmp-dvc6200-odv-package-instrument, ogas-cmp-propane-compressor-antisurge-diagram, ogas-cmp-mr-compressor-antisurge-diagram, ogas-cmp-common-valves-mhe-diagram, ogas-cmp-lng-receiving-terminal-process-flow, ogas-cmp-lng-ship-unloading-vapor-return, ogas-cmp-a31a-cryogenic-valve, ogas-cmp-lng-storage-send-out-system, ogas-cmp-design-et-c-cutaway, ogas-cmp-boiloff-gas-pipeline-compression-system, ogas-cmp-send-out-pump-recirculation-system, ogas-cmp-scv-fuel-gas-valve-train, ogas-cmp-shell-tube-vaporizer-valves, ogas-cmp-plant-discharge-valves


## Application — Power

### `app.power.fossil-plant-fundamentals` — Fossil Power Plant Fundamentals
*Tier: developing · 10 topics + 21 figures · sourcebooks: Power & Severe Service*

**Topics:** pss-topic-early-power-plant-context, pss-topic-coal-combustion-chemistry, pss-topic-vacuum-and-turbine-work, pss-topic-steam-cycle-thermal-efficiency, pss-topic-regenerative-heating-economics, pss-topic-pulverized-coal-control-flexibility, pss-topic-boiler-water-chemistry-and-emissions, pss-topic-auxiliary-turbine-desuperheating-rationale, pss-topic-generator-excitation-and-voltage-control, pss-topic-turbogenerator-overspeed-protection

**Figures:** pss-cmp-primer-basic-kettle-turbine-generator, pss-cmp-primer-stoker-fired-boiler, pss-cmp-primer-air-preheat-comparison, pss-cmp-primer-water-tube-boiler-steam-drum, pss-cmp-primer-feedwater-control-valve-operator, pss-cmp-primer-feedwater-heater-economizer, pss-cmp-primer-multistage-turbine-fan-concept, pss-cmp-primer-turbine-nozzle-bucket-cutaway, pss-cmp-primer-turbine-generator-heating-diagram, pss-cmp-primer-vacuum-cube-demonstration, pss-cmp-primer-gallon-can-implosion-demo, pss-cmp-primer-condenser-cutaway-concept, pss-cmp-primer-complete-closed-loop-diagram, pss-cmp-primer-pulverized-coal-firing, pss-cmp-primer-single-extraction-feedwater-heater, pss-cmp-primer-two-stage-regenerative-feedwater-heating, pss-cmp-primer-four-stage-feedwater-heating-diagram, pss-cmp-primer-draft-fan-air-heater-system, pss-cmp-primer-superheat-reheat-diagram, pss-cmp-primer-complete-plant-diagram, pss-cmp-primer-generator-exciter-collector-rings

### `app.power.boiler-severe-service-valves` — Boiler Systems & Severe-Service Valve Applications
*Tier: advanced · 7 topics + 17 figures · sourcebooks: Power & Severe Service*

**Topics:** pss-topic-boiler-type-fundamentals, pss-topic-feedpump-recirculation-methods, pss-topic-cavitrol-trim-staging-selection, pss-topic-microflat-trim-mechanism, pss-topic-soot-blower-service-challenges, pss-topic-heater-drain-erosion-materials, pss-topic-fgd-scrubber-fundamentals

**Figures:** pss-cmp-fossil-plant-severe-service-valve-map, pss-cmp-condensate-system-two-valve-schematic, pss-cmp-dalc-pressure-drop-vs-load-graph, pss-cmp-design-et-cavitrol-condensate-recirc-valve, pss-cmp-design-ewnt1-dalc-valve, pss-cmp-feedwater-system-three-valve-schematic, pss-cmp-cav4-four-stage-anticavitation-trim-cutaway, pss-cmp-design-ehd-feedwater-regulator-valve, pss-cmp-main-steam-system-five-valve-schematic, pss-cmp-small-hps-microform-trim-superheater-spray-valve, pss-cmp-microflat-plug-cavitrol-reheater-spray-trim, pss-cmp-heater-drain-system-four-heater-schematic, pss-cmp-tbx-t-hp-bypass-valve-cutaway, pss-cmp-tbx-t-lp-bypass-valve-photo, pss-cmp-turbine-bypass-system-hp-lp-schematic, pss-cmp-design-v500-heater-drain-valve-photo, pss-cmp-hp-heater-drain-two-heater-schematic

### `app.power.sliding-pressure-control-systems` — Sliding-Pressure Boiler Control Systems
*Tier: advanced · 3 topics + 23 figures · sourcebooks: Power & Severe Service*

**Topics:** pss-topic-sliding-pressure-control-mechanism, pss-topic-sliding-pressure-thermodynamic-basis, pss-topic-supercritical-sliding-pressure-suitability

**Figures:** pss-cmp-constant-pressure-control-graph, pss-cmp-100pct-sliding-pressure-control-graph, pss-cmp-70pct-sliding-pressure-control-graph, pss-cmp-bw-universal-pressure-bypass-system, pss-cmp-bw-startup-sequence-mode-diagrams, pss-cmp-bw-furnace-bypass-control-valves, pss-cmp-design-ehd-20in-sliding-pressure-valve, pss-cmp-bw207-service-conditions-time-graph, pss-cmp-design-cav4-superheater-bypass-valve, pss-cmp-design-ehat-optional-liner-valve, pss-cmp-ce-integral-recirculation-system, pss-cmp-ce-sliding-pressure-triple-comparison-graph, pss-cmp-ce-boiler-bypass-system, pss-cmp-ce-startup-sequence-mode-diagrams, pss-cmp-ce-constant-pressure-operation-graph, pss-cmp-ce-sliding-pressure-operation-graph, pss-cmp-ce-be-btb-bt-sequencing-chart, pss-cmp-stem-balanced-cav4-cavitrol-iv-trim, pss-cmp-hps-microform-trim-cutaway, pss-cmp-fw-flash-tank-sliding-pressure-system, pss-cmp-fw-integral-separator-startup-system, pss-cmp-fw-isss-startup-sequence-mode-diagrams, pss-cmp-cavitrol-iv-trim-variety-valve

### `app.power.geothermal-generation` — Geothermal Power Generation
*Tier: advanced · 3 topics + 4 figures · sourcebooks: Power & Severe Service*

**Topics:** pss-topic-geothermal-resource-fundamentals, pss-topic-geothermal-conversion-technologies, pss-topic-geothermal-corrosion-and-valve-selection

**Figures:** pss-cmp-flash-steam-power-plant-schematic, pss-cmp-binary-cycle-power-plant-schematic, pss-cmp-flash-cycle-valve-locations-diagram, pss-cmp-v500-eplug-geothermal-cutaway

### `app.power.combined-and-simple-cycle-gas-turbines` — Simple & Combined-Cycle Gas Turbine Plants
*Tier: advanced · 9 topics + 13 figures · sourcebooks: Power & Severe Service*

**Topics:** pss-topic-simple-cycle-economics-and-tradeoffs, pss-topic-gas-turbine-thermal-cycle, pss-topic-fuel-control-and-overspeed-protection, pss-topic-power-augmentation-and-emissions-injection, pss-topic-hrsg-mechanism-and-configuration, pss-topic-combined-cycle-steam-turbine-differences, pss-topic-cogeneration-economics, pss-topic-alloy-6-feedwater-corrosion, pss-topic-feedwater-valve-selection-rationale

**Figures:** pss-cmp-gas-turbine-simple-cycle-diagram, pss-cmp-ms7000-gas-turbine-cutaway, pss-cmp-fuel-gas-staged-combustion-diagram, pss-cmp-power-augmentation-diagram, pss-cmp-nox-formation-vs-temperature-graph, pss-cmp-combined-cycle-generation-diagram, pss-cmp-finned-tubes-diagram, pss-cmp-hrsg-duct-burner-cutaway, pss-cmp-cogeneration-cycle-diagram, pss-cmp-turbine-bypass-system-reheat-diagram, pss-cmp-hp-vent-startup-system-diagram, pss-cmp-whisperflo-vent-diffuser-photo, pss-cmp-condensate-system-diagram


## Application — Pulp & Paper

### `app.pulp-paper.batch-digesting` — Batch Digesting
*Tier: advanced · 6 topics + 6 figures · sourcebooks: Pulp & Paper*

**Topics:** pp-topic-batch-digester-heating-methods, pp-topic-kraft-cooking-chemistry, pp-topic-digester-pressure-control-concepts, pp-topic-blow-back-and-blow-tank-function, pp-topic-digester-capping-valve-selection-rationale, pp-topic-low-energy-batch-digester-process

**Figures:** pp-cmp-directly-steamed-batch-digester, pp-cmp-indirectly-steamed-batch-digester, pp-cmp-theoretical-batch-cooking-cycle, pp-cmp-actual-batch-cooking-cycle, pp-cmp-steam-demand-profile, pp-cmp-batch-digester-low-energy-three-stage-design

### `app.pulp-paper.continuous-digesting-kamyr` — Continuous (Kamyr) Digesting
*Tier: advanced · 12 topics + 3 figures · sourcebooks: Pulp & Paper*

**Topics:** pp-topic-kamyr-digester-configuration-types, pp-topic-digester-pressurizing-control-system, pp-topic-chip-feeding-mechanism, pp-topic-pre-steaming-purpose, pp-topic-high-pressure-feeder-pressure-lock-mechanism, pp-topic-top-separator-level-indication, pp-topic-impregnation-stage-purpose, pp-topic-two-stage-heating-mechanism, pp-topic-kraft-cooking-chemistry-continuous, pp-topic-counter-current-extraction-washing-mechanism, pp-topic-digester-blowing-stage-mechanism, pp-topic-kamyr-valve-metallurgy-selection-philosophy

**Figures:** pp-cmp-kamyr-chip-feeding-system, pp-cmp-kamyr-steaming-vessel, pp-cmp-kamyr-cooking-flow-diagram

### `app.pulp-paper.chemical-recovery-cycle` — Chemical Recovery Cycle (Evaporation, Recovery Boiler, Recausticizing)
*Tier: advanced · 16 topics + 5 figures · sourcebooks: Pulp & Paper*

**Topics:** pp-topic-black-liquor-recovery-cycle-role, pp-topic-multiple-effect-evaporator-mechanism, pp-topic-evaporator-design-type-comparison, pp-topic-evaporator-auxiliary-equipment-function, pp-topic-concentrator-design-evolution, pp-topic-black-liquor-valve-selection-rationale, pp-topic-recovery-boiler-cycle-role, pp-topic-black-liquor-preparation-methods, pp-topic-liquor-preparation-and-furnace-introduction, pp-topic-combustion-air-staging, pp-topic-black-liquor-combustion-and-chemical-reduction, pp-topic-ash-handling-and-salt-cake-makeup, pp-topic-recausticizing-process-fundamentals, pp-topic-recausticizing-chemistry, pp-topic-clarifier-separation-principle, pp-topic-lime-kiln-reburning-process

**Figures:** pp-cmp-multi-effect-evaporator-ltv, pp-cmp-falling-film-concentrator, pp-cmp-kraft-recovery-boiler-black-liquor-system, pp-cmp-recausticizing-lime-recovery-flow-diagram, pp-cmp-white-liquor-lime-mud-pressure-filters

### `app.pulp-paper.pulping-and-bleaching` — Mechanical/Chemical Pulping & Bleaching
*Tier: advanced · 13 topics + 9 figures · sourcebooks: Pulp & Paper*

**Topics:** pp-topic-mechanical-pulping-process-progression, pp-topic-tmp-valve-selection-rationale, pp-topic-sulfite-pulping-process, pp-topic-kraft-recovery-cycle-overview, pp-topic-bleaching-vs-brightening, pp-topic-oxygen-delignification-rationale, pp-topic-bleaching-chemistry-nomenclature, pp-topic-alternating-stage-chemistry-and-brightness, pp-topic-ecf-tcf-bleaching-drivers, pp-topic-fiberline-quality-and-strength, pp-topic-mechanical-pulp-brightening-chemistry, pp-topic-caustic-naoh-valve-control-criticality, pp-topic-chlorine-dioxide-valve-selection-criteria

**Figures:** pp-cmp-thermomechanical-pulping-process, pp-cmp-lignin-removal-reaction-mechanism, pp-cmp-oxygen-delignification-diagram, pp-cmp-conventional-bleaching-process, pp-cmp-chlorine-dioxide-filtrate-flow, pp-cmp-alkaline-filtrate-flow, pp-cmp-alkaline-extraction-hypochlorite-peroxide-ozone-stages, pp-cmp-chlorine-dioxide-d-stage, pp-cmp-oxygen-o-stage

### `app.pulp-paper.stock-preparation-and-wet-end-chemistry` — Stock Preparation & Wet-End Chemistry
*Tier: advanced · 13 topics + 20 figures · sourcebooks: Pulp & Paper*

**Topics:** pp-topic-stock-consistency-framework, pp-topic-machine-chest-function, pp-topic-white-water-recycling, pp-topic-pulp-screening-rationale-and-methods, pp-topic-broke-handling, pp-topic-brownstock-rejects-valve-selection, pp-topic-mc-pump-valve-selection, pp-topic-sizing-chemistry, pp-topic-internal-strength-additives, pp-topic-wet-strength-resins, pp-topic-filler-selection-tradeoffs, pp-topic-retention-aid-mechanism, pp-topic-defoamer-biocide-function

**Figures:** pp-cmp-thick-stock-system, pp-cmp-pulper, pp-cmp-pulper-dump, pp-cmp-disc-refiner, pp-cmp-fine-slotted-screens, pp-cmp-stock-screening-process, pp-cmp-thin-stock-system, pp-cmp-fan-pump, pp-cmp-stuffbox, pp-cmp-basis-weight-valve-photo, pp-cmp-disc-saveall, pp-cmp-cleaner, pp-cmp-primary-cleaners, pp-cmp-secondary-cleaners, pp-cmp-deaeration-chamber, pp-cmp-compact-stock-prep-system, pp-cmp-compact-stock-mixing-tank, pp-cmp-centrifugal-deaeration-pump, pp-cmp-brownstock-screening-diagram, pp-cmp-stock-approach-system

### `app.pulp-paper.paper-machine-operations` — Paper Machine Operations (Wet End Through Reel)
*Tier: advanced · 12 topics + 19 figures · sourcebooks: Pulp & Paper*

**Topics:** pp-topic-paper-machine-wet-dry-end-structure, pp-topic-headbox-slice-mechanism, pp-topic-forming-section-dewatering-sequence, pp-topic-fourdrinier-multiply-rationale, pp-topic-press-nip-mechanism, pp-topic-dryer-section-overview, pp-topic-steam-drying-thermodynamics, pp-topic-dryer-hood-ventilation, pp-topic-size-press-mechanism, pp-topic-calendaring-mechanism, pp-topic-reel-transfer-mechanism, pp-topic-winder-and-roll-finishing

**Figures:** pp-cmp-fourdrinier-paper-machine-overview, pp-cmp-paper-machine-wet-end-overview, pp-cmp-multitube-tapered-manifold, pp-cmp-rectifier-roll-headbox, pp-cmp-hydraulic-headbox, pp-cmp-dilution-control-headbox, pp-cmp-stratified-headbox, pp-cmp-cylinder-former, pp-cmp-gap-wire-former, pp-cmp-top-wire-former, pp-cmp-straight-through-press, pp-cmp-roll-press, pp-cmp-shoe-press, pp-cmp-shoe-press-nip, pp-cmp-modern-straight-through-press, pp-cmp-two-tier-drying-system, pp-cmp-single-tier-dryer-section, pp-cmp-dryer-steam-drum-siphon, pp-cmp-dryer-condensate-process

### `app.pulp-paper.mill-utilities-and-boiler-systems` — Mill Utilities & Power Boiler Systems
*Tier: advanced · 10 topics + 5 figures · sourcebooks: Pulp & Paper*

**Topics:** pp-topic-mill-process-factors, pp-topic-wood-preparation-woodyard, pp-topic-kraft-recovery-cycle-synthesis, pp-topic-mill-utilities-overview, pp-topic-waste-treatment-overview, pp-topic-boiler-feedwater-composition-and-treatment, pp-topic-feedwater-recirculation-methods, pp-topic-two-valve-feedwater-startup-regulator-design, pp-topic-steam-header-architecture-and-turbine-types, pp-topic-condenser-vacuum-economics

**Figures:** pp-cmp-kraft-pulp-paper-mill-process-overview, pp-cmp-kraft-recovery-cycle-overview, pp-cmp-mill-utilities-overview, pp-cmp-water-steam-cycle-diagram, pp-cmp-boiler-upper-convective-section


## Application — Refining

### `app.refining.unit-operations` — Refinery Unit Operations (incomplete rigor pass — see findings)
*Tier: advanced · 9 topics + 23 figures · sourcebooks: Refining*

**Topics:** ref-topic-furnace-temperature-control-philosophy, ref-topic-distillation-column-flooding-and-reflux-mechanics, ref-topic-gas-plant-light-ends-economics-and-emissions, ref-topic-crude-distillation-unit-role-and-product-cuts, ref-topic-pump-around-loop-function, ref-topic-delayed-coker-drum-cycle-mechanism, ref-topic-hydrotreating-reaction-mechanism, ref-topic-catalytic-reforming-octane-and-regulatory-history, ref-topic-alkylation-acid-catalyst-rationale

**Figures:** ref-cmp-complete-refinery-flow-diagram, ref-cmp-refinery-unit-location-map, ref-cmp-furnace-photo, ref-cmp-furnace-pfd, ref-cmp-distillation-column-photo, ref-cmp-distillation-column-pfd, ref-cmp-gas-plant-pfd, ref-cmp-crude-desalter-pfd, ref-cmp-crude-distillation-column-pfd, ref-cmp-vacuum-crude-column-pfd, ref-cmp-delayed-coking-unit-pfd, ref-cmp-v500ffd-features, ref-cmp-hydrotreater-pfd, ref-cmp-hydrocracker-pfd, ref-cmp-fixed-bed-catalytic-reformer-pfd, ref-cmp-continuous-catalytic-reformer-pfd, ref-cmp-fcc-converter-section-pfd, ref-cmp-fcc-fractionation-section, ref-cmp-fcc-vapor-recovery-section, ref-cmp-hf-alkylation-pfd, ref-cmp-sulfuric-acid-alkylation-pfd, ref-cmp-amine-unit-pfd, ref-cmp-sulfur-recovery-unit-pfd

### `app.refining.pressure-swing-adsorption` — Pressure-Swing Adsorption (Hydrogen Purification) — real gap, no topic anywhere
*Tier: advanced · 0 topics + 5 figures · sourcebooks: Refining*

**Figures:** ref-cmp-psa-basic-flow-scheme, ref-cmp-psa-four-bed-color-coded-diagram, ref-cmp-psa-four-bed-valve-numbered-diagram, ref-cmp-psa-five-step-cycle-diagrams, ref-cmp-blending-unit-pfd

## Part 2 — Instructional depth findings

**Finding 1 — Depth is real across the large cross-cutting domains, not a
concern.** The biggest competencies (`eng.selection.valve-body-and-type-taxonomy`
at 150 items, `eng.actuation.actuator-selection-and-force-torque-sizing` at 80,
`eng.safety.instrumented-systems-and-accessories` at 80,
`eng.packing.selection-and-fugitive-emissions` at 75,
`eng.destructive-flow.cavitation-flashing-mechanism-and-mitigation` at 64) are
each backed by 15–30 independently-authored topic entries drawn from four or
five different sourcebooks explaining the *same* underlying mechanism through
different worked examples. This is real, non-duplicative depth — each
sourcebook's own author walked through the mechanism with its own numbers, not
a single explanation copy-pasted five times. A course drawing on any of these
competencies has more than enough real explanatory material to teach from.

**Finding 2 — A few genuinely thin spots, named directly, not glossed over:**
- `eng.instrumentation.level-measurement` (9 figures, **zero topics**) is the
  starkest case in the whole map. Every entry is a bare hardware photo or
  schematic with a one-paragraph caption; nothing anywhere in the five
  sourcebooks explains *why* level measurement matters for valve selection, what
  a displacer vs. differential-pressure measurement actually is, or how caged
  vs. cageless sensors trade off. If a course wants to teach level-control valve
  selection, this competency needs real topic-authoring work before it's usable
  — the figures alone don't teach.
- `eng.installation.piping-practice-and-orientation` (5 topics, **zero
  figures**) is the mirror case: real prose (piping arrangement, line-size-vs-
  valve-size, welding procedure, flushing/sacrificial trim) with no diagram
  anywhere to show what any of it looks like installed.
- `Oil & Gas`'s `app.oil-gas.gas-transportation-and-storage` competency is
  figure-rich but topic-thin on the *storage* half specifically: 2 topics carry
  the entire conceptual load (why salt caverns vs. depleted reservoirs vs.
  aquifers) while 8 figures show specific hardware — a course leaning on this
  competency for storage-specific reasoning would need more theoretical depth
  than currently exists.

**Finding 3 — Interconnection runs in both directions relative to what a
figure-themed guess would assume, and the topic graph makes this concrete
rather than impressionistic.** The two real cross-sourcebook superclusters this
survey found (67 and 52 connected topics respectively) confirm the
cavitation/flashing/vena-contracta pattern already flagged from CVH ch5 — but
the *same* degree of interconnection turns out to be equally true of valve-body
selection and actuator-force/torque sizing, which are not specialty topics but
the connective tissue every sourcebook's own "fundamentals" chapter re-derives
independently. Running the other direction: a figure-themed guess might assume
Power & Severe Service's boiler/steam content overlaps with Pulp & Paper's own
boiler chapter (ch18) — it essentially doesn't. PP ch18 is a pulp mill's own
small power boiler feeding its own process steam; PSS's content is utility-scale
fossil/combined-cycle generation. The `relatedTopics` graph confirms zero real
links between them, and 21 of this map's 39 competencies are single-sourcebook
application domains with no cross-sourcebook topic links at all — application
content is far less interconnected across industries than the shared
engineering fundamentals are.

**Finding 4 — Real cross-sourcebook redundancy, correctly *not* duplicated,
confirmed by direct PDF spot-check.** Several sourcebook chapters this session
correctly authored **zero** new topic entries after finding their content was
genuinely identical boilerplate to a sibling sourcebook's chapter — Pulp & Paper
ch2 (actuator selection) vs. Oil & Gas/Power & Severe Service ch2, PP ch5 (gas
sizing) vs. PSS ch4, PP ch7 (steam conditioning) vs. PSS ch7, Refining ch1/ch2/
ch5. This was spot-checked directly against the real PDFs during this task, not
just trusted: PP ch5's and PSS ch4's steam-sizing worked example (`w = 125,000
lb/h`, `P1 = 500 psig`, `Cv = 236`) is byte-for-byte identical text in both
source PDFs. None of these show up as padded duplicate entries in the
competency map — each mechanism is cited once, from whichever sourcebook's
topic entry actually explains it, which is exactly the intended effect of the
standing "recognize genuine duplicate boilerplate, author zero new entries"
rule holding up under a second, independent check.

**Finding 5 — Real coverage gaps the orphan-figure review surfaced, exactly
the risk Franz's correction was checking for.** Of the 389 orphan figures, the
overwhelming majority are legitimate non-gaps: self-contained hardware-catalog
photos whose own caption is the complete teaching content, pure reference/
dimension tables (CVH ch10 alone has 14 ANSI dimension tables), or product
photos illustrating an application a sibling topic in the same chapter already
explains conceptually. But three real, distinct concept clusters have **no
topic backing anywhere in the whole five-sourcebook survey**, and a
topic-first-only derivation (the methodology Franz's first correction rejected)
would have missed all three silently:
- **Level/liquid-level measurement** — see Finding 2, the starkest example.
- **Feedwater-heater bypass piping arrangement** (CVH ch10: 6 figures —
  `cvh-cmp-typical-feedheater-system`, `normal-bypass-operations`,
  `reheater-isolation-valve`, `turbine-extraction-valve`, `bypass-valve`,
  `bypass-auxiliary-connections`) — a real, distinct three-way inlet/outlet/
  bypass piping mechanism with no topic anywhere explaining *why* it exists.
  Given a home in `eng.steam.turbine-and-boiler-bypass-systems` by association
  for this map, but the mechanism itself was never independently authored as
  prose.
- **Pressure-swing adsorption** (Refining ch4: 5 figures, its own competency
  `app.refining.pressure-swing-adsorption`) — directly caused by Refining ch4's
  own already-disclosed incomplete-rigor pass (7 of 15 sections spot-checked
  rather than exhaustively read, per that chapter's own fork report). This is
  the clearest case in the whole survey of a known gap and its downstream
  effect on the competency map lining up exactly.

## Part 3 — Pipeline-integration requirements for the `kind: topic` layer

Concrete, checkable requirements — not just principles — so tonight's discovery
doesn't stay a one-off.

**1. Stage 1/2 keyConcept citation rule.** Require every `keyConcept` to cite
at least one real source id, and specifically: a `keyConcept` whose language
describes a mechanism, a tradeoff, a "why," or a worked example must cite a
`kind: topic` id — a `kind: figure` citation alone is not sufficient for that
kind of claim. A `keyConcept` that is purely "here is what an X looks like" may
cite a `kind: figure` alone. This directly targets the failure mode Finding 2
found: a course author citing `ref-cmp-l2-liquid-level-controller` today would
have a photo and nothing else to actually teach the concept from.

**2. A mechanical QA check, analogous to `verify.ps1`'s existing checks.** For
any competency (once the Competency Registry exists) or any Stage-2-authored
module's cited source list: count `kind: figure` vs `kind: topic` citations,
and flag any competency/module whose entire source list is figures with **zero**
topic backing. This is exactly the shape of `eng.instrumentation.level-measurement`
found tonight, and it is mechanically checkable from the id prefix pattern alone
(`-cmp-` vs `-topic-`) with no judgment call required to run the check — only to
act on what it flags.

**3. How the Competency Registry should consume topics vs. figures.** Given the
two-axis (conceptual/topics vs. illustrative/figures) idea already parked in
`curriculum-development.md`: the Registry should store **both lists explicitly
per competency**, not collapse them into one undifferentiated source list — a
`topics:` array and a `figures:` array, with the QA check in #2 operating
directly on that structure. `relatedFigures`/`relatedTopics` cross-references
should be walked at Registry-build time to *suggest* additional figures for a
competency whose topics already cite them, but a human or agent must confirm
before the suggestion becomes a real citation — this survey found the
cross-reference graph only 50% populated (389 of 773 figures have zero incoming
topic reference), so it cannot be trusted as exhaustive and auto-linking off it
alone would silently under- or over-populate a competency's figure list.

**4. A concrete operational definition of "complete" for a topic pass at
scale**, resolving the open question flagged when the full-Handbook scope was
first approved (topics have no printed figure numbers to count against, unlike
figures). Propose: *a chapter's topic pass is complete when (a) every real
content page in the chapter's already-confirmed range has been read directly,
(b) every genuine explanatory concept in the body prose — a mechanism, a
tradeoff, a worked example, a definition backed by real numbers — has either a
new `kind: topic` entry, is already fully captured inside an existing
`kind: figure` entry's own `teaches` field, or is explicitly logged in Open
Items as reference-data-only with the specific reason, and (c) a vault-wide
id-collision and broken-cross-reference check has been run and its results
recorded.* This is exactly the discipline every fork in this initiative already
followed by convention (it is why the zero-entry findings in Finding 4 were
trustworthy) — the recommendation is to make it a named, written definition
rather than an unwritten pattern every fork happens to reproduce by imitating
the last one.

**5. Promote the ad hoc integrity checks run manually four times tonight into
real tooling.** Concretely extend the vault's verification scripts to run, on
demand or as part of closing a chapter pass: (a) vault-wide id-collision check
[done by hand after CVH, Oil & Gas, Power & Severe Service, Pulp & Paper, and
Refining — found and fixed two real collisions this way], (b) broken
`relatedFigures`/`relatedTopics` reference check [same], (c) the orphan-figure
breakdown by chapter [new tonight, exactly the check Franz's correction
required] so a future full-Handbook or full-sourcebook pass gets this signal
automatically rather than needing a special request each time.
