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
used-by: []
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
used-by: []
notes: Photo, not a graph; labelled equipment not individually called out in caption.
```

### Response time, installed gain, and valve-style comparison (printed pp. 41–46)

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
used-by: []
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
used-by: []
notes: >
  Same printed caption text as Figure 2.8 in this chapter ("Effect of Valve
  Style on Control Range") — this figure (2.6) is the one that actually
  matches its caption; see cvh-cmp-signature-series-testing-photo below and
  Open items for the mismatch on 2.8.
```

### Economics and Signature Series testing (printed pp. 49–51)

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
used-by: []
notes: Feeds directly into the chapter's economics discussion (return on investment from tighter control).
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
used-by: []
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
used-by: []
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
used-by: []
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
