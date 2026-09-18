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

```yaml
id: cvh-topic-layers-of-protection
kind: topic
concept-tags: [layers of protection, prevent, mitigate, BPCS, SIS, process safety]
status: current
teaches: >
  Safety is provided by layered defenses, not one mechanism. The first
  layer is the basic process control system (BPCS) itself — proper
  process-control design provides significant safety on its own. The next
  layer is the control system plus operator intervention (automated
  shutdown routines combined with an operator manually shutting down the
  process). Next is the safety instrumented system (SIS) — independent of
  the BPCS, with its own sensors, valves, and logic solver, dedicated
  solely to safety with no process-control role. These first three layers
  are designed to PREVENT a safety event. If a safety event happens
  anyway, further layers MITIGATE its impact: an active protection layer
  (relief valves/rupture disks providing a controlled release point to
  prevent explosion/fire), a passive protection layer (dikes or other
  barriers that contain a fire or direct an explosion's energy away from
  damage), and finally plant/emergency response (evacuation, firefighting)
  for the largest events. Overall safety depends on how these layers work
  together, not any single layer alone.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§12.1 'Safety and Layers of Protection,' p.251 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-layers-of-protection]
relatedTopics: [cvh-topic-sis-fundamentals-and-standards]
used-by: []
notes: >
  Read directly from the real page text (PDF p.251, footer-confirmed
  "251"). The existing Figure 12.1 entry describes what the diagram shows;
  this entry captures the actual prose reasoning for why each layer exists
  and the Prevent/Mitigate split, which the figure alone doesn't convey.
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

```yaml
id: cvh-topic-sis-fundamentals-and-standards
kind: topic
concept-tags: [SIS, SIF, SIL, logic solver, sensor, final control element, IEC 61508, IEC 61511, ISA S84.01, HAZOP]
status: current
teaches: >
  A safety instrumented system (SIS) consists of one or more safety
  instrumented functions (SIF), each a loop of sensors, a logic solver
  (LS), and a final control element (FE), each assigned a required safety
  integrity level (SIL). Sensors (pneumatic/electrical switches through
  smart transmitters) use process taps dedicated to SIS service, separate
  from normal process-instrumentation taps. The logic solver determines
  what action to take and is built for both fail-safe and fault-tolerant
  operation — programmable, non-programmable, or even mechanical. The
  final control element (typically an automated on/off valve, fail-open or
  fail-closed) implements that action; all three elements must function as
  designed for the SIS to safely isolate the plant.

  Because zero-risk operation doesn't exist, the SIS designer's first task
  is a risk-tolerance analysis: identify hazards (commonly via a HAZOP —
  HAZard and OPerability study, run by a multi-disciplinary team), assess
  each hazard's risk (a function of likelihood and severity), and check
  what other Independent Protection Layers already exist — the HAZOP/PHA
  (process hazard analysis) result then sets the required SIL. Three
  governing standards apply: IEC 61508 (general functional-safety standard
  across all processing/manufacturing), and IEC 61511 / ISA S84.01
  (process-industry-specific — ISA S84.01 was replaced by ISA 84.00.01-2004).
  All three use a performance-based lifecycle model with quantifiable proof
  of compliance, and meeting the target SIL requires verifying systematic
  integrity (every SIF element rated for the SIL), architectural
  constraints (hardware fault tolerance/redundancy per current standards),
  and random integrity (PFDavg, calculated from device failure rates).
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§12.2 'Safety Instrumented Systems (SIS)' and §12.3 'Safety Standards,' pp.252-253 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-sis-components-loop, cvh-cmp-sil-pfd-rrf-table]
relatedTopics: [cvh-topic-layers-of-protection, cvh-topic-pfd-calculation]
used-by: []
notes: >
  Read directly from the real page text (PDF pp.252-253, footer-confirmed).
  Combines §12.2 and §12.3 into one topic — both are foundational SIS
  concepts (what it is, how its target integrity level gets set) that the
  chapter itself treats as one continuous explanation before §12.4 gives
  the SIL table.
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

```yaml
id: cvh-topic-pfd-calculation
kind: topic
concept-tags: [PFD, probability of failure on demand, nuisance trip, covert failure, test interval, SIL]
status: current
teaches: >
  An SIS can fail two distinct ways. A nuisance/spurious trip causes an
  unplanned but relatively safe shutdown — minimal danger, but real
  operational cost. A covert (hidden) failure is worse: it goes
  undetected, the process keeps running unsafely, and if a real emergency
  demand occurs the SIS can't respond — this contributes to the
  Probability of Failure on Demand (PFD). Total system PFD is the sum of
  each element's own PFD: PFDtotal = PFDsensor + PFDlogic-solver +
  PFDfinal-element. Each element's PFD comes from its documented
  (dangerous) failure rate combined with its test interval (TI) — the time
  before a covert fault would actually get caught by testing. This
  relationship is linear: doubling the test interval doubles the PFD,
  making the target SIL twice as hard to meet. Governing standards
  therefore require components be tested often enough to keep PFD low
  enough for the target SIL, documented across design, maintenance,
  inspection, testing, and operation.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§12.5 'Probability of Failure Upon Demand,' p.254 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-sil-pfd-rrf-table]
relatedTopics: [cvh-topic-sis-fundamentals-and-standards, cvh-topic-final-element-testing]
used-by: []
notes: >
  Read directly from the real page text (PDF p.254, footer-confirmed
  "254") — this page has zero figures (confirmed in this file's own Open
  Items), but its PFD-summation formula and test-interval relationship are
  genuine, citable conceptual content the figures-only rule never covered.
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

```yaml
id: cvh-topic-final-element-testing
kind: topic
concept-tags: [proof testing, partial stroke testing, PST, bypass testing, digital valve controller, final control element]
status: current
teaches: >
  Final elements (valves, actuators, valve instrumentation — ball,
  butterfly, or control valves used for ESD/blowdown duty) must be
  periodically proof-tested: a visual inspection plus verification of the
  safety function, including a full valve stroke and possibly a safety-time
  and leakage check. But full proof-test intervals don't always align with
  plant shutdowns, so partial stroke testing (PST) extends the interval by
  exercising the valve only part of its travel (typically 10%, up to 30% if
  plant guidelines allow) — enough to catch dangerous undetected failure
  modes (a stuck shaft, packing issues, actuator air-line problems) without
  a full shutdown. PST does not eliminate the need for full stroke testing
  (only a full stroke actually checks seating), it just reduces how often
  full testing is needed.

  Before digital valve controllers, online testing meant a bypass valve
  around the safety valve (leaves the process totally unprotected during
  the test) or mechanical travel-limiting devices (a pin, stem collar, or
  hand jack limiting travel to ≤15% of stroke) — both carry real risk: the
  safety function is unavailable during test, and a bypass or mechanical
  lock left engaged afterward leaves the process unprotected until
  discovered. A digital valve controller (a HART-communicating,
  microprocessor-based current-to-pneumatic instrument with internal
  logic) removes these risks: it already reads valve travel position plus
  supply/actuator pressures for its own diagnostics, so the entire PST
  procedure can be programmed in and run automatically, as often as
  hourly if the target SIL needs it, with the test aborting and the valve
  driving to its safe state if a real safety demand occurs during testing.
  This also documents every test and event automatically (useful for
  insurance/compliance) and lets testing be initiated remotely, without a
  field trip.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§§12.6-12.9 'Final Elements, Proof Testing, and Partial Stroke Testing Techniques' through 'Digital Valve Controller Use for Partial Stroke Testing,' pp.255-257 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-oreda-failure-data-chart]
relatedTopics: [cvh-topic-pfd-calculation, cvh-topic-hipps-functionality-and-testing]
used-by: []
notes: >
  Read directly from the real page text (PDF pp.255-257, footer-confirmed
  "255"/"256"/"257"). Combines §§12.6-12.9 into one topic — proof testing,
  PST's rationale, the older online-testing methods, and the DVC-enabled
  automated version are one continuous argument in the source (why proof
  testing is needed → why PST extends it → why older PST methods were
  risky → why a DVC fixes that), not four separate concepts.
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

```yaml
id: cvh-topic-hipps-functionality-and-testing
kind: topic
concept-tags: [HIPPS, 2oo3 voting, 1oo2 redundancy, pressure sensor, logic solver, final elements testing]
status: current
teaches: >
  HIPPS prevents overpressure by shutting off the source and holding the
  pressure upstream, rather than relieving it downstream like conventional
  mechanical relief/safety valves — this stops downstream leakage and
  fugitive emissions entirely, which is why HIPPS is considered the "last
  line of defense" and both an economical and environmentally friendlier
  option than conventional relief. A typical HIPPS has three functional
  parts: three pressure sensors on the upstream side in a 2-out-of-3
  (2oo3) voting arrangement (balancing availability and reliability); a
  logic solver that shuts down both final elements and alarms the control
  room the moment 2 of the 3 sensors read over the allowed pressure; and
  two isolation valves in series, in a 1-out-of-2 (1oo2) arrangement, for
  redundancy.

  Testing has to preserve this integrity: a pressure sensor can be taken
  out for testing while the logic solver's voting is temporarily dropped
  from 2oo3 to 1oo2 (via an interlock signalling the sensor is out), so
  full redundancy protection is maintained throughout; the logic solver
  typically runs dual-processor self-diagnostics continuously, shifting to
  a redundant solver or shutting down the final element if a fault is
  found; and the final control elements still need periodic full
  stroke/proof tests taken out of service, extendable between intervals
  using the same partial stroke testing approach used for ordinary SIS
  final elements.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§§12.11-12.12 'Functionality of the HIPPS' and 'Testing Requirements,' pp.257-258 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-hipps-typical-configuration]
relatedTopics: [cvh-topic-final-element-testing, cvh-topic-sis-fundamentals-and-standards]
used-by: []
notes: >
  Read directly from the real page text (PDF pp.257-258, footer-confirmed
  "257"/"258"). The existing Figure 12.5 entry describes the HIPPS diagram
  itself; this entry captures the functional reasoning (why 2oo3/1oo2, why
  HIPPS beats conventional relief) and the testing regime, neither of
  which the figure caption alone conveys.
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
- **Topic-indexing pass added 2026-09-17** (full-chapter `kind: topic` directive, applying the Chapter 5 precedent to this chapter): 5 new topic entries added — `cvh-topic-layers-of-protection` (§12.1), `cvh-topic-sis-fundamentals-and-standards` (§§12.2-12.3, combined — one continuous explanation in the source), `cvh-topic-pfd-calculation` (§12.5, one of the pages already confirmed to carry zero figures), `cvh-topic-final-element-testing` (§§12.6-12.9, combined — proof testing → PST rationale → older online-testing methods → DVC-enabled automation is one continuous argument in the source), `cvh-topic-hipps-functionality-and-testing` (§§12.11-12.12, combined). All read directly from the real page text (`pdftotext` against the source PDF, footer-confirmed page numbers), not inferred from the existing figure captions. Every page in the chapter's real range (251-258) is now covered by either a figure or a topic entry, or both. File integrity verified: 10 total ids, all unique, every `relatedFigures`/`relatedTopics` reference resolves to a real existing id.