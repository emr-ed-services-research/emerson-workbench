---
title: Component Index — Control Valve Handbook ch2
type: reference
tags: [source-library, pipeline, component-index]
source: Control Valve Handbook - Sixth Edition.pdf
chapter: "Chapter 2: Control Valve Performance"
updated: 2026-09-11
---

# Component Index — Control Valve Handbook, Chapter 2

Catalogs every real figure in Control Valve Handbook (6th ed.) Chapter 2,
"Control Valve Performance," confirmed against the actual PDF pages (not
assumed from the printed table of contents). Chapter 2 opens on PDF/printed
page 34 (chapter divider) and runs through PDF/printed page 53; Chapter 3,
"Valve and Actuator Types," begins on PDF/printed page 54. In this document,
PDF page number and printed page number are identical throughout the checked
range — confirmed by footer text, not assumed.

Ten real figures exist in the chapter (Figure 2.1 through Figure 2.10, using
the handbook's own period-style numbering, e.g. "Figure 2.3" — not the
hyphenated "Figure 2-3" style used by the Oil & Gas Sourcebook). No table in
this chapter is separately numbered as a "Table 2.x" — none were found by a
full-chapter search, so there is nothing tabular to exclude under the
tables-are-not-catalogued rule.

One figure, Figure 2.3, is already catalogued under a different id in
`Component Index — 14101 ch3.md` (`ch3-cmp-deadband-effect-chart`) and is
cross-referenced rather than duplicated here — see Open items. The other nine
figures are newly catalogued below.

## Precedence

Control Valve Handbook, 6th ed. (Document D101881X012, August 2023; ©2005,
2019, 2023) is published by Emerson / Fisher Controls International LLC — a
first-party Emerson/Fisher document, and the newest edition of it in the
Source Library. Per `Source Library.md` and `Emerson Control Valve Handbook.md`,
it is bucketed **`current`**. Nothing in this chapter is superseded by a newer
source; all components below inherit `status: current` from the document
itself.

## Components

### Process variability and performance test fundamentals (printed pp. 35–40)

```yaml
id: cvh-topic-process-variability
kind: topic
teaches: >
  Process variability is the spread (the +/-2 sigma band) of a process
  variable's deviation from its set point under normal-cause variation — a
  measure of how tightly a process is being controlled, expressed as a
  percentage of the set point. If a product must meet a lower-limit
  specification, the set point has to be pushed 2 sigma above that limit to
  guarantee conformance; a tighter (smaller-sigma) control valve lets the
  set point sit closer to the real limit instead of wasting material/product
  making everything to an unnecessarily high standard. Extensive control-loop
  studies found as many as 80% of loops fail to adequately reduce process
  variability, and the control valve assembly (valve + actuator + positioner,
  optimized as a unit, not as separately-designed components) is a major,
  often-overlooked contributor.
concept-tags: [process variability, 2-sigma band, set point, quality specification, control loop performance]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§2.1 Process Variability, pp. 35-36 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-process-variability-distributions, cvh-cmp-performance-test-loop-photo]
relatedTopics: [cvh-topic-deadband, cvh-topic-valve-oversizing-effects]
used-by: []
notes: >
  Read directly from the real PDF pages (pdftotext, footer-confirmed).
  Foundational framing for the whole chapter — every later performance
  concept (deadband, response time, gain) is explained in terms of its
  contribution to this one quantity.
```

```yaml
id: cvh-cmp-process-variability-distributions
teaches: >
  Two stacked bell-curve (distribution) plots contrasting a wider, higher-variability
  process against a narrower, tighter-controlled one, both centered on the same
  target/setpoint — the visual definition of "process variability" as the width
  of the distribution around a target, not the position of its mean.
concept-tags: [process variability, control loop performance, distribution, setpoint, standard deviation]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.1 Process Variability; Figure 2.1 'Process Variability' (p. 35)"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: [{course: CVB, slide: cvb-053.html}]
notes: Foundational framing figure for the whole chapter; no companion figure.
```

```yaml
id: cvh-cmp-performance-test-loop-photo
teaches: >
  Real photo of Fisher's own performance test loop — a physical flow-test rig
  (piping loop, control valve under test, instrumentation) used to generate the
  chapter's later dynamic-performance data (deadband, response time, gain,
  economics). Establishes that the chapter's later graphs come from real
  bench testing, not simulation.
concept-tags: [performance testing, test loop, valve testing, dynamic performance]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.2 Performance Testing; Figure 2.2 'Performance Test Loop' (p. 36)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-054.html}]
notes: Photo, not a graph; labelled equipment not individually called out in caption.
```

```yaml
id: cvh-topic-deadband
kind: topic
teaches: >
  Deadband is a range or band of controller-output (CO) values that fail to
  produce any change in the measured process variable (PV) when the input
  signal reverses direction — when a load disturbance moves the PV off set
  point, the corrective CO change must first travel through this deadband
  before any actual corrective change in PV occurs at all, meaning the
  deviation must grow larger before a fix can even begin. Deadband is a major
  contributor to excess process variability; a control valve assembly can be
  a primary source of it in an instrumentation loop, from friction, backlash,
  shaft wind-up, or relay/spool-valve dead zone.
concept-tags: [deadband, controller output, process variable, load disturbance, friction, backlash]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§2.1.1 Deadband, p. 36 — prose, not figure-anchored"
relatedFigures: [ch3-cmp-deadband-effect-chart]
relatedTopics: [cvh-topic-process-variability, cvh-topic-valve-response-time]
used-by: []
notes: >
  Read directly from the real PDF page. The chapter's own Figure 2.3
  (deadband effect chart) is cross-referenced elsewhere in this file, not
  duplicated — see Open items; this topic entry cites that existing id
  under `relatedFigures` rather than creating a second record for it.
```

### Response time, installed gain, and valve-style comparison (printed pp. 41–46)

```yaml
id: cvh-topic-valve-response-time
kind: topic
teaches: >
  Valve response time is measured by T63 — the time from the start of an
  input-signal change to when the output reaches 63% of the corresponding
  change — and splits into two parts. Dead time is the static portion,
  driven mainly by deadband (friction/backlash in the valve, actuator, or
  positioner); it should generally stay under about one-third of total
  response time, and matters most when a fast process loop's own time
  constant approaches the valve's dead time. Dead time should also be
  reasonably consistent in both stroking directions — some designs (often
  from asymmetric positioner behavior) have dead times 3-5x longer one way
  than the other, which can badly limit loop tuning. Dynamic time is what
  remains once dead time has passed and the valve is actually moving; it's
  set mainly by the positioner/actuator combination (a positioner's power-
  amplifier gain, and the actuator's air-chamber volume — a bigger chamber
  to fill means a slower dynamic time).
concept-tags: [valve response time, T63, dead time, dynamic time, positioner gain, actuator volume]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§2.1.3/§2.1.3.1/§2.1.3.2 Valve Response Time / Dead Time / Dynamic Time, pp. 40-41 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-valve-response-time-summary-table]
relatedTopics: [cvh-topic-deadband, cvh-topic-process-variability]
used-by: []
notes: Read directly from the real PDF pages (pdftotext, footer-confirmed).
```

```yaml
id: cvh-cmp-valve-response-time-summary-table
teaches: >
  A data-grid-formatted summary comparing dead time and 63%-response time
  across multiple valve/actuator/positioner configurations tested in the
  performance test loop — shows how response time varies by design, not a
  single fixed number. Formatted as a table but explicitly numbered and
  captioned "Figure 2.4" by the source itself, so catalogued as a figure per
  the standing tables-are-not-catalogued rule (that rule excludes items the
  source itself labels "Table N-N", not data-grid figures the source itself
  numbers as a Figure).
concept-tags: [valve response time, dead time, dynamic time, positioner, actuator, test summary]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.1.3 Valve Response Time; Figure 2.4 'Valve Response Time Summary' (p. 41)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Table-formatted content; no companion figure.
```

```yaml
id: cvh-topic-installed-vs-inherent-characteristic
kind: topic
teaches: >
  Inherent flow characteristic (linear, equal-percentage, quick-opening) is
  the valve's flow-vs-travel relationship under a HELD CONSTANT pressure
  drop — a function of trim geometry alone, unchanging as long as ΔP is
  held constant; rotary designs (ball, butterfly, eccentric plug) mostly
  can't have this changed, while most globe valves can via interchangeable
  cages/plugs. Installed flow characteristic is the more practically
  important number: the same flow-vs-input relationship but with the real
  system's pressure drop allowed to vary naturally as installed, not held
  constant. Installed gain is the slope of the installed characteristic
  curve at each point. The reason to characterize inherent gain at all is
  to compensate for the rest of the loop's own gain changes (e.g. a
  pressure vessel's gain typically falls as throughput rises, so pairing it
  with an equal-percentage valve, whose gain rises with flow, can net out
  to a roughly linear installed characteristic). Loop gain — the product of
  every device's gain in the loop except the controller — should not vary
  more than about 4:1 across the operating range, or dynamic performance
  degrades unacceptably (the EnTech gain-limit specification: nominal loop
  process gain 0.5-2.0, a practitioner consensus figure, not a hard physical
  law).
concept-tags: [inherent characteristic, installed characteristic, installed gain, loop gain, 4-to-1 rule, EnTech]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§2.1.4/§2.1.4.1/§2.1.4.2 (Installed Gain, Loop Gain), pp. 44-46 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-installed-characteristic-and-gain, cvh-cmp-valve-style-control-range-comparison]
relatedTopics: [cvh-topic-valve-oversizing-effects, cvh-topic-flow-characteristics]
used-by: []
notes: >
  Read directly from the real PDF pages. `cvh-topic-flow-characteristics`
  is Chapter 5's own topic entry (§5.4, inherent characteristics in the
  sizing context) — cross-referenced, not duplicated; this Chapter 2 entry
  is the performance/tuning-consequences side of the same underlying
  concept, not a restatement.
```

```yaml
id: cvh-cmp-installed-characteristic-and-gain
teaches: >
  Two stacked line graphs plotting installed flow characteristic and installed
  gain against valve travel for the same valve — shows how gain is the slope
  of the flow-characteristic curve, and how both non-linearity and gain
  variation across the travel range affect loop tuning.
concept-tags: [installed flow characteristic, installed gain, loop gain, valve travel, sizing]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.1.5 Installed Gain; Figure 2.5 'Installed Flow Characteristic and Gain' (p. 44)"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: [{course: CVB, slide: cvb-057.html}]
notes: Companion pair of stacked graphs sharing one x-axis (valve travel); treat as one figure/one crop.
```

```yaml
id: cvh-cmp-valve-style-control-range-comparison
teaches: >
  Two stacked line graphs comparing installed characteristic/gain behavior
  between a butterfly valve and a globe valve, showing the globe valve holding
  a usable (controllable) gain over a wider percentage of travel — i.e., a
  wider "control range" — than the butterfly valve for the same duty.
concept-tags: [valve style, control range, butterfly valve, globe valve, installed gain, valve characterization]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.1.5 Installed Gain; Figure 2.6 'Effect of Valve Style on Control Range' (p. 46)"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: [{course: CVB, slide: cvb-058.html}]
notes: >
  Same printed caption text as Figure 2.8 in this chapter ("Effect of Valve
  Style on Control Range") — this figure (2.6) is the one that actually
  matches its caption; see cvh-cmp-signature-series-testing-photo below and
  Open items for the mismatch on 2.8.
```

```yaml
id: cvh-topic-valve-oversizing-effects
kind: topic
teaches: >
  Oversizing (common with line-size valves, especially high-capacity rotary
  designs, and stacked safety factors) hurts process variability two real
  ways. First, it puts too much gain into the valve itself, leaving the
  controller less room to contribute gain — best performance comes from
  most of the loop's gain living in the controller, not the valve. Second,
  an oversized valve operates more often at low openings, where seal
  friction is worse (especially in rotary valves); because an oversized
  valve produces a disproportionately large flow change per unit of travel,
  this friction/deadband effect on process variability gets exaggerated.
  Regardless of its real inherent characteristic, a badly oversized valve
  behaves like a quick-opening valve at low lift (high installed gain
  there) and flattens out (near-zero gain, ineffective for control) at high
  travel — a valve can be so oversized its usable control range narrows to
  a small band of its total travel.
concept-tags: [oversizing, control range, seal friction, quick-opening behavior, rotary valve, process variability]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§2.1.5 Valve Sizing, pp. 47-48 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-valve-style-control-range-comparison]
relatedTopics: [cvh-topic-installed-vs-inherent-characteristic, cvh-topic-process-variability]
used-by: []
notes: Read directly from the real PDF pages.
```

### Economics and Signature Series testing (printed pp. 49–51)

```yaml
id: cvh-topic-closed-loop-economics
kind: topic
teaches: >
  Dynamic performance parameters (deadband, response time, installed gain)
  are measurable open-loop, but their real economic impact only shows up
  under closed-loop testing. A closed-loop test plots process variability
  (% of set point) against closed-loop time constant (a measure of loop
  tuning) for real valves against two reference lines: "Manual" (variability
  with no control attempted at all) and "Minimum Variability" (the
  calculated ideal for a perfectly linear valve assembly) — every real valve
  falls somewhere between them, and not all valves that meet the same
  static purchase spec perform the same dynamically. This is the basis for
  a real economic argument: replacing a worse-performing valve with a
  better one at the same tuning can be quantified as a specific percentage
  variability improvement, translating directly into reduced scrap/rework/
  off-spec product cost.
concept-tags: [closed-loop testing, process variability, economic impact, dynamic performance, minimum variability line]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§2.2 Economic Results, pp. 48-49 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-closed-loop-disturbance-summary]
relatedTopics: [cvh-topic-process-variability, cvh-topic-valve-oversizing-effects]
used-by: []
notes: Read directly from the real PDF pages.
```

```yaml
id: cvh-cmp-closed-loop-disturbance-summary
teaches: >
  Graph of process variability (2σ/μ, %) vs. closed-loop time constant for
  three valve designs (Valve A/B/C) under a random load disturbance, on 4"
  valves tested at 600 gpm in a 4" test loop. Shows a "minimum variability"
  reference line and labels "faster tuning" / "slower tuning" directions;
  Valve A tracks the minimum-variability line across tunings while B and C
  degrade as tuning is made more aggressive — the data behind the chapter's
  economic-impact argument (§ following text: replacing Valve B with Valve A
  at a 2.0s time constant yields a 1.4% variability improvement).
concept-tags: [closed-loop performance, process variability, load disturbance, tuning, economics, valve comparison]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.1.6 Economic Results (unlabeled subhead text); Figure 2.7 'Closed Loop Random Load Disturbance Summary' (p. 49)"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: [{course: CVB, slide: cvb-060.html}]
notes: Feeds directly into the chapter's economics discussion (return on investment from tighter control).
```

```yaml
id: cvh-topic-signature-series-testing
kind: topic
teaches: >
  ValveLink Software Signature Series is a factory-executed performance
  test, available for any Fisher control valve assembly with a FIELDVUE
  digital valve controller, that creates a documented performance benchmark
  before shipment — a starting point for a maintenance program, not a
  one-time QA check. Three tiers: Series 1 (instrument configuration,
  status monitor at 50% travel, valve spec sheet, valve signature and
  dynamic error-band curve and drive signal all recorded -5 to 105% input);
  Series 2 (adds a performance step test and status monitor at 0/25/50/75/
  100%); Series 3 (user-specified Series 1+2 tests with adjustable end
  points/scan times for specific requirements). The diagnostic principle:
  once in service, the same tests can be re-run via ValveLink and the
  current signature compared against the factory baseline to quickly
  pinpoint developing issues (e.g. rising friction shows as an increased
  signature span) — Data Comparison, the mechanism behind Figure 2.9's
  worked example.
concept-tags: [Signature Series, ValveLink, FIELDVUE, factory benchmark, data comparison, friction diagnosis]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§2.3/§2.3.1/§2.3.2/§2.3.3 Signature Series Performance Testing, pp. 50-51 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-signature-series-testing-photo, cvh-cmp-signature-data-comparison-overlay, cvh-cmp-valvelink-software-screens]
relatedTopics: []
used-by: []
notes: Read directly from the real PDF pages.
```

```yaml
id: cvh-cmp-signature-series-testing-photo
teaches: >
  Real photo of a technician running a ValveLink Software Signature Series
  factory performance test on an assembled Fisher control valve (green-bodied
  valve/actuator with a FIELDVUE digital valve controller, connected to a
  laptop running ValveLink), establishing the factory benchmark test described
  in §2.3 Signature Series Performance Testing.
concept-tags: [Signature Series, ValveLink, FIELDVUE, factory testing, performance benchmark, diagnostics]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.3 Signature Series Performance Testing; captioned 'Figure 2.8 Effect of Valve Style on Control Range' (p. 50)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-061.html}]
notes: >
  Caption/content mismatch, confirmed by direct visual inspection of the
  source page (not a transcription error on this pass): the printed caption
  for this figure is "Effect of Valve Style on Control Range" — an exact
  duplicate of Figure 2.6's caption — but the image itself is unambiguously a
  Signature Series testing photo, matching the surrounding §2.3 text, with no
  valve-style-comparison content of any kind. Appears to be a genuine
  source-document captioning erratum (a duplicated caption, most likely from
  production/layout, not an authoring error in the underlying content). The
  `teaches` field above describes the actual photo content, not the printed
  caption text. Flagged in Open items.
```

```yaml
id: cvh-cmp-signature-data-comparison-overlay
teaches: >
  ValueLink software screenshot overlaying an original factory signature trace
  with a new (in-service) signature trace for the same valve, with callout
  boxes reading "ORIGINAL TEST," "NEW TEST," and "INCREASED SPAN INDICATES
  INCREASED FRICTION" — the worked example of using Signature Series baseline
  data to diagnose rising friction in a valve already in service.
concept-tags: [ValveLink, signature comparison, friction diagnosis, Signature Series, diagnostics, baseline]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.3.3 Signature Series 3 / Data Comparison text; Figure 2.9 'Data Comparision' (p. 51) [sic — source spells 'Comparision']"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-062.html}]
notes: Caption spelling "Comparision" is the source document's own typo, reproduced verbatim above rather than silently corrected.
```

```yaml
id: cvh-cmp-valvelink-software-screens
teaches: >
  Two ValveLink software screenshots side by side — a Total Scan diagnostic
  view with a signature graph, and a Valve Step Response view with a step-test
  graph — illustrating the diagnostic software interface referenced by the
  chapter's closing "Take Advantage of the Signature Series" section.
concept-tags: [ValveLink, software interface, diagnostics, step test, Signature Series]
status: current
source:
  - doc: Control Valve Handbook 6th ed.
    locator: "§2.3 closing text 'Take Advantage of the Signature Series'; Figure 2.10 'ValveLink Software' (p. 51)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: [{course: CVB, slide: cvb-063.html}]
notes: Two-screenshot composite under one figure number; treat as one figure/one crop.
```

## Open items

- **Chapter range confirmed by reading the real pages, not the printed TOC
  alone**: Chapter 2 divider is PDF/printed page 34; last Chapter 2 content
  page is PDF/printed page 53; Chapter 3 divider is PDF/printed page 54. PDF
  page number equals printed page number throughout this range in this
  specific document (verified via running-footer text, not assumed — the Oil
  & Gas Sourcebook precedent explicitly warns these can diverge, they do not
  here).
- **All 10 real figures in the chapter accounted for**: Figures 2.1, 2.2, 2.4,
  2.5, 2.6, 2.7, 2.8, 2.9, 2.10 newly catalogued above (9 records); Figure 2.3
  cross-referenced, not duplicated (below). None skipped.
- **Cross-reference, not duplicate**: Figure 2.3, "Effect of Deadband on Valve
  Performance" (p. 37, three-panel open-loop step-test chart for Valves A/B/C)
  is already catalogued in `Component Index — 14101 ch3.md` under id
  `ch3-cmp-deadband-effect-chart`. No new id created for it here. Checked
  `Component Index — bench-set-657.md` as well; it cites CVH only for
  front-matter glossary content (p. 25) and the Fisher 657/667 IM, with no
  Chapter 2 figure overlap — nothing to cross-reference there.
- **No tables in this chapter**: a full-chapter search for "Table 2." found
  zero matches. Nothing was excluded under the tables-are-not-catalogued rule
  because nothing tabular is separately numbered as a table — Figure 2.4 is
  table-formatted but is itself numbered "Figure 2.4," so it is catalogued
  above per the same rule the Oil & Gas Sourcebook precedent applies.
- **Genuine source captioning erratum, confirmed by direct visual inspection**:
  Figure 2.8's printed caption ("Effect of Valve Style on Control Range") is an
  exact duplicate of Figure 2.6's caption and does not describe Figure 2.8's
  actual content (a Signature Series testing photo). This is not a
  transcription error introduced on this pass — both the text extraction and
  the rendered page image show the same mismatched caption. Catalogued
  `cvh-cmp-signature-series-testing-photo`'s `teaches` field against the real
  photo content, with the caption discrepancy flagged in its own notes.
- **Source typo reproduced, not corrected**: Figure 2.9's printed caption reads
  "Data Comparision" (sic) in the source document itself; reproduced verbatim
  in that record's locator with an explicit `[sic]` flag rather than silently
  fixed.
- **No low-confidence figures**: every figure's caption and page location was
  confirmed by both text extraction and a rendered page image; no figure in
  this chapter required a guess.
- **`kind: topic` pass (2026-09-17)**: 7 new topic entries added — process
  variability, deadband, valve response time, installed-vs-inherent
  characteristic, valve oversizing effects, closed-loop economics, and
  Signature Series testing — each grounded in real body prose read directly
  from the PDF (`pdftotext`, footer-confirmed page numbers), not inferred
  from the figure captions already catalogued above. All 16 ids in this file
  (9 figures + 7 topics) confirmed unique; every `relatedFigures`/
  `relatedTopics` reference (including the cross-chapter one to Chapter 5's
  `cvh-topic-flow-characteristics`) verified to resolve to a real id.
