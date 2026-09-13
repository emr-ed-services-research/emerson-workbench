---
title: Component Index — Control Valve Handbook ch12
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Control Valve Handbook, 6th ed. (D101881X012, © Aug 2023 Emerson/Fisher)
chapter: 12 — Safety Instrumented Systems
updated: 2026-09-17
---

# Component Index — Control Valve Handbook, Chapter 12 (Safety Instrumented Systems)

Full-chapter cataloging pass, part of the CVH ch5–15 indexing directive
(Franz, 2026-09-17). Matches ch1–4's rigor: every page in the chapter's
confirmed range was rendered as an image and visually inspected.

**Real chapter boundary, confirmed by direct page reads:** Chapter 12 spans
PDF pages 250–259 inclusive. Page 250 is the "Chapter 12 / Safety
Instrumented Systems" divider page; page 259 is blank (chapter-end filler,
no figures); PDF page 260 is the "Chapter 13 / Engineering Data" divider.
Zero printed/PDF page offset, consistent with every other chapter.

**Topical adjacency to Chapter 4, checked directly, no overlap found:**
Chapter 4's index (`Component Index — Control Valve Handbook ch4.md`) already
catalogues several SIS-related figures — but those are all about SOV
(solenoid-operated valve) *accessory hardware and voting architectures* used
within a safety loop (e.g. `cvh-cmp-sov-1oo2-architecture-schematic`,
`cvh-cmp-trip-valve-tripped-condition`). This chapter's figures are about the
SIS *concept and methodology itself* — layers of protection, SIL/PFD/RRF
calculation, HIPPS system-level configuration, and OREDA failure-rate
statistics. No figure appears in both chapters; the two indexes are
complementary, not overlapping. Noted here rather than silently assumed.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | First-party Emerson/Fisher document. No archive or legacy material was consulted for this chapter. |

## Components

### 12.1 Safety and Layers of Protection (printed p. 251)

```yaml
id: cvh-cmp-layers-of-protection
teaches: Layers-of-protection diagram — six horizontal layers from Process Control (BPCS) at the base through Operator Intervention, Safety/Emergency Shutdown (SIS), Active Protection, Passive Protection, to Emergency Response at the top, bracketed as "Prevent" (bottom three) vs. "Mitigate" (top three), with a process-trend curve showing Normal Behavior, Operator Intervention, and Emergency Shutdown response points.
concept-tags: [layers of protection, safety instrumented system, SIS, BPCS, process safety]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.251, §12.1 "Safety and Layers of Protection", Figure 12.1 "Layers of Protection"
delivery: not yet determined
used-by: []
notes: The chapter's foundational concept diagram — every subsequent section (SIS, SIL, HIPPS) builds on the "Prevent vs. Mitigate" layer model shown here.
```

### 12.2 Safety Instrumented Systems (printed p. 252)

```yaml
id: cvh-cmp-sis-components-loop
teaches: SIS component loop — three real-hardware photos (a safety PLC/logic solver, a pressure/temperature transmitter as sensor, and a rotary actuator/valve as final control element) arranged in a circular loop with labels "Logic Solver," "Sensor," and "Final Control Element."
concept-tags: [safety instrumented system, SIS, logic solver, sensor, final control element]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.252, §12.2 "Safety Instrumented Systems (SIS)", Figure 12.2 "Components of a Safety Instrumented System (SIS)"
delivery: not yet determined
used-by: []
notes: Conceptually parallel to Chapter 1's Figure 1.1 "Feedback Control Loop" (cvh-cmp-feedback-control-loop) — both show a sensor/logic/final-element loop — but this figure uses real component photos in a safety-specific framing (SIS, not process control) rather than Chapter 1's abstract process-control block diagram. Not a duplicate; no cross-reference needed, flagged here only for the conceptual parallel.
```

### 12.4 Safety Integrity Level (printed p. 253)

```yaml
id: cvh-cmp-sil-pfd-rrf-table
teaches: Safety Integrity Level reference table — Risk Reduction Factor (RRF) ranges, corresponding Probability of Failure on Demand (PFDavg) ranges, and the resulting SIL 1–4 rating for each.
concept-tags: [safety integrity level, SIL, PFDavg, risk reduction factor, RRF]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.253, §12.4 "Safety Integrity Level (SIL)", "Figure 12.3 Safety Integrity Levels and Associated PFDavg and RRF Figures"
delivery: not yet determined
used-by: []
notes: A 4-row numeric reference table, captioned as a Figure — catalogued per the standing rule that a source-numbered figure is a component regardless of pictorial-vs-tabular content.
```

### 12.6 Final Elements, Proof Testing, and Partial Stroke Testing (printed p. 255)

```yaml
id: cvh-cmp-oreda-failure-data-chart
teaches: OREDA (Offshore and Onshore Reliability Data) bar chart showing the percentage of SIF failures attributable to each of the three SIS components — Sensor (~42%), Logic Solver (~8%), and Final Control Element (~50%) — supporting the text's point that final elements account for roughly half of all SIF failures.
concept-tags: [OREDA, reliability data, safety instrumented function, SIF, final control element]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.255, §12.6 "Final Elements, Proof Testing, and Partial Stroke Testing Techniques", Figure 12.4 "OREDA Data"
delivery: not yet determined
used-by: []
notes: A vertical bar chart with three categories on the x-axis and a percentage y-axis (0–50%) — an analytical graph, not a photo or cutaway.
```

### 12.10 High-Integrity Pressure Protection System (HIPPS) (printed p. 258)

```yaml
id: cvh-cmp-hipps-typical-configuration
teaches: Typical HIPPS (High-Integrity Pressure Protection System) configuration diagram — three pressure transmitters (2oo3 voting) feeding a logic solver connected via a communications link to asset management software, driving two redundant final control elements (rotary valves) on the upstream side of a pipe run.
concept-tags: [HIPPS, high-integrity pressure protection, pressure transmitter, redundant final control elements, logic solver]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.258, §12.10 "High-Integrity Pressure Protection System (HIPPS)", Figure 12.5 "Typical HIPPS Configuration"
delivery: not yet determined
used-by: []
notes: Text explicitly frames this as "a typical HIPPS in a configuration set to meet SIL 3." Real-photo components (transmitters, actuated valves) combined with a labelled system/communications diagram, similar composition style to Figure 12.2.
```

## Open items

- **Chapter boundary confirmed by direct page reads:** PDF page 250 (divider) through PDF page 259 (blank, chapter-end filler); PDF page 260 is the Chapter 13 divider. No printed/PDF page offset.
- **Full coverage: 5 figures, Figures 12.1–12.5, no gaps.** Every page in the chapter's 10-page range was rendered and visually inspected: pages 254, 256, and 257 confirmed to carry zero figures (referenced text/equations/prose only — page 254's PFD-summation formula is written as plain text, not a numbered figure).
- **Topical adjacency to Chapter 4 checked directly and confirmed non-overlapping** — see the top-of-file note. No shared figures, no cross-reference needed.
- **Two of the five figures are reference tables/charts, not hardware diagrams** (Figure 12.3's SIL/PFD/RRF table, Figure 12.4's OREDA bar chart) — catalogued per the same standing rule as every other chapter.
- **No duplicate captions or source citation errors found** in this chapter.
- **Table exclusion:** no separately-numbered "Table N" items exist in this chapter.
- **Cross-reference check:** `Component Index — 14101 ch1-ch2.md`, `Component Index — 14101 ch3.md`, and `Component Index — bench-set-657.md` were checked for SIS/HIPPS/SIL/layers-of-protection terminology — no overlap found, as expected (14101's Fisher control-valve maintenance content doesn't touch SIS methodology).
- **No archive or legacy material** was found or consulted for this chapter.