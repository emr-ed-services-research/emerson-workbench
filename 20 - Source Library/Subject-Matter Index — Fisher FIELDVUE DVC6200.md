---
title: Subject-Matter Index — Fisher FIELDVUE DVC6200
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher FIELDVUE DVC6200 (HW2) Digital Valve Controller Instruction Manual (D103605X012, March 2026)
chapter: whole document — no chapter structure to sub-divide
updated: 2026-09-19
---

# Subject-Matter Index — Fisher FIELDVUE DVC6200 Digital Valve Controller IM

Standing full-document cataloging pass, part of the "index all Technical
Publications manuals" directive (Franz, 2026-09-18/19), run deliberately
ahead of any confirmed course demand — as of this pass, zero real citations
to this manual exist anywhere in 14101's built content; the "used by
14101's positioner chapters" note on this document's Source Library page
describes a future intention, not present fact. Indexed in full anyway, per
explicit instruction, rather than guessing at a course scope that doesn't
exist yet.

Matches the rigor of every prior pass: every real figure identified and
visually verified against the rendered page (not paraphrased from caption
or text-extraction alone). 120 real PDF pages — the largest single-document
pass run in this project to date.

**Real page-numbering offset, confirmed by direct inspection, not assumed:**
this document's PDF page number is exactly 2 greater than its own printed
page number throughout (PDF p.5 = printed p.3, PDF p.120 = printed p.118,
consistent front matter/TOC pagination). All locators below cite the
**printed** page number, matching this project's standing convention; PDF
page = printed page + 2 if ever re-deriving directly from the file.

**Real hybrid structure, per `Subject-Matter Index — Process & Standards.md`'s
own documented case for this pair of manuals:** numbered chapter/section
structure (Section 1 through Section 7, plus Appendix A, Appendix B, and a
Glossary) governs the grouping headers below, but the document's figures are
flat-numbered (`Figure 1, Figure 2, ...`) in the main body — **and,
confirmed only by reading the appendices directly, NOT by the initial
full-document text sweep for `Figure [0-9]+\.`, the two appendices each
carry their OWN separate letter-prefixed figure sequence** (`Figure A-1`
through `Figure A-6` in Appendix A; `Figure B-1` through `Figure B-7` in
Appendix B) that the main body's flat numbering never resumes into. This
was a real near-miss: the initial numeric-only sweep found 26 figures and
would have closed the pass there; only checking the appendices' own content
directly (per the standing rigor rule) surfaced 13 more. Flagged here
explicitly as a genuine structural finding worth carrying into the DVC7K-H
pass and any future hybrid-structure document.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher FIELDVUE DVC6200 (HW2) Digital Valve Controller IM** | D103605X012 · March 2026 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Section 1: Introduction (printed pp. 1–10)

```yaml
id: fdvc6200-cmp-mounted-on-sliding-stem
teaches: >
  A DVC6200 mounted on a Fisher sliding-stem valve actuator — the standard
  linear-actuator mounting configuration, shown as the first of two real
  photos establishing what the instrument looks like installed.
concept-tags: [DVC6200, digital valve controller, sliding-stem actuator, mounting, positioner]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 1 'FIELDVUE DVC6200 Digital Valve Controller Mounted on a Fisher Sliding-Stem Valve Actuator,' p. 3"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo, unlabelled. Companion to Figure 2 (rotary mounting).
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-mounted-on-gx-valve
teaches: >
  A DVC6200 integrally mounted to a Fisher GX rotary control valve — the
  rotary-actuator mounting configuration, paired with Figure 1's
  sliding-stem example.
concept-tags: [DVC6200, digital valve controller, rotary valve, GX valve, mounting, positioner]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 2 'FIELDVUE DVC6200 Digital Valve Controller Integrally Mounted to a Fisher GX Control Valve,' p. 4"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo, unlabelled. Sits directly above Table 1 (Instrument Level Capabilities), a genuine numbered table, correctly excluded.
mediaStatus: unreviewed
```

### Section 2: Wiring Practices (printed pp. 11–18)

```yaml
id: fdvc6200-cmp-hart-filter-application
teaches: >
  Where a HART filter sits in the signal path between a non-HART-based DCS
  and the digital valve controller — isolates control-system output from
  modulated HART communication and raises control-system impedance to
  allow HART communication.
concept-tags: [HART filter, wiring, non-HART DCS, signal isolation]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 3 'HART Filter Application,' p. 11"
delivery: analytical block diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Clean block/wiring diagram, no photo content.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-voltage-available-calc
teaches: >
  How to calculate voltage available at the instrument: control-system
  compliance voltage minus filter voltage drop, safety-barrier resistance
  drop, THUM adapter drop, and loop cable resistance drop — with a real
  worked numeric example (18.5 V compliance down to 15.19 V available).
concept-tags: [voltage available, compliance voltage, HART filter, safety barrier, loop cable resistance, worked example]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 4 'Determining Voltage Available at the Instrument,' p. 13"
delivery: analytical block diagram + worked calculation — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Block diagram plus a real numeric worked example printed alongside it, not a separate table.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-voltage-test-schematic
teaches: >
  Test circuit for measuring control-system compliance voltage when it is
  not already known — potentiometer, voltmeter, and milliammeter wired
  across the disconnected field-wiring terminals.
concept-tags: [compliance voltage, voltage test, potentiometer, voltmeter, milliammeter]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 5 'Voltage Test Schematic,' p. 14"
delivery: analytical wiring schematic — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Sits directly above/below real cable-characteristics tables (Table 4), correctly excluded.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-hart-triloop-flowchart
teaches: >
  Step-by-step HART Tri-Loop installation procedure as a real decision
  flowchart — unpack, review manual, check whether the DVC is installed,
  mount to DIN rail, wire channels, configure burst commands, verify
  system test pass/fail.
concept-tags: [HART Tri-Loop, installation flowchart, burst mode, decision procedure]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 6 'HART Tri-Loop Installation Flowchart,' p. 17"
delivery: analytical flowchart — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Genuine branching flowchart with start/decision/end nodes, not a simple linear diagram.
mediaStatus: unreviewed
```

### Section 3: Configuration (printed pp. 19–45)

```yaml
id: fdvc6200-cmp-calibrated-travel-analog-input
teaches: >
  Relationship between calibrated travel and analog input current, showing
  both possible zero-power-condition slopes (ZPC = open, ZPC = closed) on
  one graph — establishes travel range high/low against input range
  low/high.
concept-tags: [calibrated travel, analog input, zero power condition, linear characteristic]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 7 'Calibrated Travel to Analog Input Relationship,' p. 23"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Real analytical graph with two overlaid slopes, not a photo.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-travel-target-input-characteristics
teaches: >
  Travel target versus ranged set point for the three fixed input
  characteristics — linear, equal-percentage, and quick-opening — shown as
  three side-by-side graphs at zero power condition = closed.
concept-tags: [travel target, ranged set point, linear, equal-percentage, quick-opening, input characteristic]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 8 'Travel Target Versus Ranged Set Point, for Various Input Characteristics (Zero Power Condition = Closed),' p. 27"
delivery: analytical graph (3-panel) — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Three real distinct curve shapes on separate axes, not a single overlay.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-zero-power-condition
teaches: >
  What "zero power condition" (loss of electrical power) does to each relay
  type — single-acting direct sends port A to zero, double-acting sends
  port A to zero and port B to full supply, single-acting reverse sends
  port B to full supply — shown as a labelled photo (ports A/B) plus its
  own summary table.
concept-tags: [zero power condition, relay type, single-acting direct, double-acting, single-acting reverse, loss of power]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 9 'Zero Power Condition,' p. 35"
delivery: existing figure (crop) with an adjacent real table — per Style Guide §5.8 default
used-by: []
notes: Photo carries port labels A/B; the relay-type/loss-of-power mapping is a genuine adjacent table (correctly excluded on its own, but the photo+table pairing is one real teaching unit).
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-valve-signature-representation
teaches: >
  A partial-stroke-test valve signature (pressure vs. travel) with every
  real threshold numbered and named — supply pressure, end point pressure
  control, incoming/outgoing pressure thresholds (high/low friction
  breakout), outgoing pressure threshold, and target travel movement — the
  reference diagram every PST alert/abort criterion in this section cites
  back to.
concept-tags: [valve signature, partial stroke test, PST, breakout pressure, friction, pressure threshold]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 10 'Valve Signature Representation,' p. 37"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Heavily cross-referenced by later text ("see Figure 10") throughout the PST-configuration subsections — this is the anchor figure for that whole topic.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-short-duration-pst-timeseries
teaches: >
  Time-series comparison of a partial stroke test with Short Duration PST
  disabled versus enabled — shows outgoing/incoming ramp rate, return lead,
  pause time, breakout timeout, and early turnaround as two side-by-side
  travel-vs-time traces.
concept-tags: [short duration PST, ramp rate, return lead, pause time, breakout timeout]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 11 'Time Series Representation of Short Duration PST,' p. 38"
delivery: analytical graph (2-panel) — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Genuine before/after comparison, not a single trace.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-example-actuator-pressure-plot
teaches: >
  A real example time-series plot of actuator pressure during a stroke
  test, annotated with minimum pressure (Pmin), the actual trace from a
  real test, and the outgoing pressure limit — grounds the abstract
  threshold concepts in Figure 10 against a real recorded trace.
concept-tags: [actuator pressure, time series, minimum pressure, outgoing pressure limit, PST trace]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 12 'Example Time Series Plot; Actuator Pressure,' p. 41"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Explicitly labelled "typical" real trace data, not an idealized schematic like Figure 10.
mediaStatus: unreviewed
```

### Section 4: Calibration (printed pp. 46–55)

```yaml
id: fdvc6200-cmp-relay-a-adjustment
teaches: >
  How to adjust Relay A's output pressure — rotate the adjustment disc one
  direction for single-acting-direct relays (until it contacts the beam),
  the other direction for double-acting relays (to increase/decrease
  output pressure) — shown with the shroud removed for clarity.
concept-tags: [relay A, adjustment, single-acting, double-acting, output pressure]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 13 'Relay A Adjustment (Shroud Removed for Clarity),' p. 54"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled photo with directional annotation arrows for the adjustment disc.
mediaStatus: unreviewed
```

### Section 5: Device Information, Alerts and Diagnostics (printed pp. 56–66)

```yaml
id: fdvc6200-cmp-travel-alert-deadband
teaches: >
  How a travel alert deadband works — the alert sets when valve position
  crosses the travel alert high point, and clears only once it drops back
  below the deadband, preventing chatter around the threshold.
concept-tags: [travel alert, deadband, alert set, alert clear]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 14 'Travel Alert Deadband,' p. 63"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Real oscillating valve-position trace crossing the deadband band multiple times.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-cycle-counter-deadband-example
teaches: >
  A worked example (deadband set at 10%) of how the cycle counter and
  travel accumulator deadband decide what counts as a real direction
  reversal — a numbered 4-step sequence showing when a new reference point
  gets established and when the cycle counter increments.
concept-tags: [cycle counter, travel accumulator, deadband, direction reversal, worked example]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 15 'Cycle Counter and Travel Accumulator Deadband Example (Set at 10%),' p. 63"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same printed page as Figure 14 — the two are a paired concept/example presentation, catalogued as two records since each carries its own figure number.
mediaStatus: unreviewed
```

### Section 6: Maintenance and Troubleshooting (printed pp. 67–84)

```yaml
id: fdvc6200-cmp-pwb-cable-connections
teaches: >
  The two cable assemblies connecting the module base to the housing —
  cable to terminal box and cable to travel sensor — shown on a real
  disassembled unit with the module base pulled clear and swung to the
  side.
concept-tags: [module base, printed wiring board, cable assembly, terminal box, travel sensor]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 16 'Printed Wiring Board Cable Connections,' p. 70"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real disassembly photo, not an exploded-parts line drawing.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-ip-filter-location
teaches: >
  Where the O-ring (I/P converter output port) and screen/filter (I/P
  converter supply port) sit inside the module base — the two
  serviceable items checked/replaced during I/P converter maintenance.
concept-tags: [I/P converter, O-ring, screen, filter, module base]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 17 'I/P Filter Location,' p. 73"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled photo of the module base interior.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-ip-converter-exploded
teaches: >
  The I/P converter assembly — shroud, socket-head screws, boots, and the
  I/P converter itself — labelled for removal/replacement procedures.
concept-tags: [I/P converter, shroud, boots, socket-head screws, exploded view]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 18 'I/P Converter,' p. 74"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled photo, real part names called out, not generic keys.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-pwb-connections-settings
teaches: >
  Printed wiring board connector and DIP-switch layout — travel sensor
  connector, terminal box connector, operational mode selection — shown
  for both PWB variants (with and without transmitter/switch selection).
concept-tags: [printed wiring board, DIP switch, travel sensor connector, terminal box connector, operational mode]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 19 'Printed Wiring Board (PWB) Connections and Settings,' p. 75"
delivery: existing figure (crop, 2-panel) — per Style Guide §5.8 default
used-by: []
notes: Two real circular PWB photos, each independently labelled — a genuine two-variant comparison, not a duplicate.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-pneumatic-relay-assembly
teaches: >
  The pneumatic relay assembly with its relay seal called out — the
  serviceable seal location referenced by the relay-replacement procedure.
concept-tags: [pneumatic relay, relay seal, relay assembly]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 20 'Pneumatic Relay Assembly,' p. 77"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled photo of the removed relay assembly.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-terminal-boxes-comparison
teaches: >
  Compares the DVC6200's own main terminal box against the DVC6205's
  dual-terminal-box arrangement (main terminal box plus a separate,
  non-replaceable feedback-connections terminal box) — a genuine
  cross-model comparison, not two views of the same unit.
concept-tags: [terminal box, DVC6200, DVC6205, feedback connections, main terminal box]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 21 'Terminal Boxes,' p. 78"
delivery: existing figure (crop, 2-panel) — per Style Guide §5.8 default
used-by: []
notes: Explicit warning in the surrounding text that the DVC6205 feedback-connections terminal box is not a replaceable part — real, load-bearing distinction this figure exists to convey.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-terminal-box-io-variants
teaches: >
  Terminal box internals with and without the I/O package option —
  loop-only terminals versus loop plus AUX/OUT terminals for the I/O
  option.
concept-tags: [terminal box, I/O package, loop terminals, AUX terminals]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 22 'Terminal Box,' p. 88"
delivery: existing figure (crop, 2-panel) — per Style Guide §5.8 default
used-by: []
notes: Sits directly above a real Parts Kits table (Table 18), correctly excluded.
mediaStatus: unreviewed
```

### Section 7: Parts (printed pp. 85–99)

```yaml
id: fdvc6200-cmp-housing-assembly-exploded
teaches: >
  Full exploded parts diagram of the DVC6200 housing assembly across two
  printed sheets — housing A/B back views (GX actuator vs. all others),
  the terminal box/gauge end, and the three acting-type variants
  (double-acting, direct-acting, reverse-acting) with their own distinct
  part callouts, plus three detail sections (C-C, E-E, F-F) at 2:1 scale.
concept-tags: [housing assembly, exploded view, double-acting, direct-acting, reverse-acting, parts diagram]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 23 'FIELDVUE DVC6200 Digital Valve Controller Housing Assembly,' pp. 95–96 (Sheet 1 of 3 and Sheet 2 of 3 — Sheet 3 is Figure 24, catalogued separately since it carries its own figure number)"
delivery: existing figure (crop, multi-sheet) — per Style Guide §5.8 default
used-by: []
notes: >
  Real numbered-key parts diagram with genuine cross-references from body
  text ("Refer to Figure 23 or 25 for key number locations") throughout
  the maintenance procedures. Two printed pages, same figure number, no
  duplication — this is the standard multi-sheet convention this document
  uses for its exploded diagrams (see also Figure 25).
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-gauge-configuration
teaches: >
  Gauge-kit part callouts for all three acting-type variants
  (double-acting, direct-acting, reverse-acting), including the pipe-plug
  and tire-valve substitution notes for non-gauge options.
concept-tags: [gauge configuration, pipe plug, tire valve, double-acting, direct-acting, reverse-acting]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 24 'Gauge Configuration,' p. 96 (printed as Sheet 3 of 3 of the same GE40185 drawing series as Figure 23, but carries its own figure number and caption)"
delivery: existing figure (crop, 3-panel) — per Style Guide §5.8 default
used-by: []
notes: Own figure number despite sharing a drawing-series footer code with Figure 23 — catalogued separately per the standing rule that a real, distinct printed figure number gets its own record.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-dvc6205-base-housing-exploded
teaches: >
  Full exploded parts diagram of the DVC6205 base unit housing assembly
  across two printed sheets — main assembly with gauge/terminal box end,
  acting-type variants, wall- vs. pipe-mounting hardware, and detail
  sections B-B, A-A, H-H at 2:1 scale.
concept-tags: [DVC6205, base unit housing, exploded view, wall mounting, pipe mounting]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 25 'FIELDVUE DVC6205 Base Unit Housing Assembly,' pp. 97–98"
delivery: existing figure (crop, multi-sheet) — per Style Guide §5.8 default
used-by: []
notes: Same multi-sheet convention as Figure 23, confirmed by direct visual inspection of both pages — not assumed from the "(continued)" caption text alone.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-dvc6215-remote-feedback-exploded
teaches: >
  Exploded parts diagram of the DVC6215 remote feedback assembly for both
  housing variants (Housing A for GX actuators, Housing B for all
  others), including a Section A-A detail view for each.
concept-tags: [DVC6215, remote feedback assembly, exploded view, housing A, housing B]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure 26 'FIELDVUE DVC6215 Remote Feedback Assembly,' p. 99"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Last figure in the main body's flat numbering sequence — Appendix A restarts numbering as "A-N" immediately after (see below).
mediaStatus: unreviewed
```

### Appendix A: Principle of Operation (printed pp. 100–103)

```yaml
id: fdvc6200-cmp-hart-fsk-technique
teaches: >
  How the HART protocol encodes digits as two superimposed frequencies
  (1200 Hz = "1", 2200 Hz = "0") on the 4–20 mA loop, with zero average
  current change — the mechanism that lets digital communication ride the
  analog signal without disturbing it.
concept-tags: [HART protocol, frequency shift keying, FSK, 4-20 mA]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure A-1 'HART Frequency Shift Keying Technique,' p. 100"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: First figure in the appendix's own letter-prefixed sequence — see the top-of-file structural note.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-instrument-to-pc-connections
teaches: >
  Typical wiring from a control system, through field terminals and a HART
  modem, to a personal computer running ValveLink software — shown
  connecting to three real field instruments in a multi-drop arrangement.
concept-tags: [ValveLink, HART modem, field terminals, multi-drop, personal computer connection]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure A-2 'Typical FIELDVUE Instrument to Personal Computer Connections for ValveLink Software,' p. 101"
delivery: analytical wiring diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Includes a laptop illustration alongside the block/wiring elements.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-block-diagram
teaches: >
  The DVC6200's own core signal path as a functional block diagram —
  input signal through terminal box, printed wiring board, I/P converter,
  pneumatic relay, to the valve and actuator, with valve travel feedback
  closing the loop.
concept-tags: [block diagram, signal path, printed wiring board, I/P converter, pneumatic relay, travel feedback]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure A-3 'FIELDVUE DVC6200 Digital Valve Controller Block Diagram,' p. 102"
delivery: analytical block diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: The principal reference diagram for how the whole instrument works end to end — the text explicitly walks through it (increasing/decreasing input signal cases).
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-block-diagram-position-transmitter
teaches: >
  The core block diagram (Figure A-3) extended with the optional position
  transmitter feature — an isolated 4–20 mA AO output plus an 8–30 VDC
  powered AI loop for separate valve-position feedback.
concept-tags: [block diagram, position transmitter, isolated output, valve position feedback]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure A-4 'FIELDVUE DVC6200 Digital Valve Controller with Position Transmitter Block Diagram,' p. 103"
delivery: analytical block diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same printed page as Figure A-5 — the two options are shown stacked for direct comparison.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-block-diagram-discrete-switch
teaches: >
  The core block diagram (Figure A-3) extended with the optional discrete
  switch feature — a 4–20 mA AO plus a max-30 V discrete input (DI) for a
  limit-switch or alert-switch function.
concept-tags: [block diagram, discrete switch, limit switch, alert switch]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure A-5 'FIELDVUE DVC6200 Digital Valve Controller with Discrete Switch Block Diagram,' p. 103"
delivery: analytical block diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Directly below Figure A-4 on the same page — the position-transmitter and discrete-switch options are structurally parallel, not sequential steps.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-assembly-exploded-overview
teaches: >
  Full assembly overview of the DVC6200 — housing, terminal box with
  cover, module base assembly, printed wiring board assembly, I/P
  converter, pneumatic relay, gauges, and cover — as one labelled exploded
  photo tying every submodule named throughout the manual back to its real
  physical location.
concept-tags: [assembly overview, housing, module base, terminal box, cover, exploded view]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure A-6 'FIELDVUE DVC6200 Digital Valve Controller Assembly,' p. 104"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: The single best overview figure in the whole document for orienting a first-time reader to the instrument's real submodule layout — last figure in Appendix A.
mediaStatus: unreviewed
```

### Appendix B: Handheld Communicator Menu Trees (printed pp. 104–111)

```yaml
id: fdvc6200-cmp-menu-hot-key
teaches: >
  The handheld communicator's Hot Key/Favorites menu tree — instrument
  mode, change instrument mode, write protection, change write protection.
concept-tags: [handheld communicator, menu tree, hot key, favorites, write protection]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure B-1 'Hot Key,' p. 104"
delivery: menu-tree diagram — text hierarchy, not a photo or graph; falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  First figure in Appendix B's own letter-prefixed sequence. A genuine
  numbered figure per the source (not a table), catalogued per the
  standing figures-only rule even though its content is a text hierarchy
  rather than a diagram — matching the precedent already set for
  table-shaped-but-figure-numbered content elsewhere in this project.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-menu-online
teaches: >
  The handheld communicator's top-level Online menu tree — HART
  Application, Offline/Online modes, and the Overview/Configure/Service
  Tools/Utility/HART Diagnostics branch structure.
concept-tags: [handheld communicator, menu tree, online, HART application, service tools]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure B-2 'Online,' p. 105"
delivery: menu-tree diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Top of the whole online menu hierarchy that Figures B-3 through B-7 each expand one branch of.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-menu-overview
teaches: >
  The Overview branch's full menu tree — device status, analog input,
  setpoint, travel, drive signal, pressure variables, plus the Device
  Information sub-branch (identification, revisions, security).
concept-tags: [handheld communicator, menu tree, overview, device status, device information]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure B-3 'Overview,' p. 105"
delivery: menu-tree diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same printed page as Figure B-2.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-menu-guided-manual-setup
teaches: >
  The Configure branch's Guided Setup and Manual Setup menu tree — the
  single largest tree in the manual, covering mode/protection, instrument
  identification, units, terminal box, spec sheet (valve/trim/actuator
  detail), and travel/pressure control cutoffs, across two printed pages.
concept-tags: [handheld communicator, menu tree, guided setup, manual setup, spec sheet, travel pressure control]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure B-4 'Guided Setup and Manual Setup,' pp. 106–107"
delivery: menu-tree diagram (multi-page) — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Explicitly marked "continued on next page" in the source — confirmed as one figure spanning two printed pages, not two figures.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-menu-alert-setup
teaches: >
  The Alert Setup menu tree — electronics, pressure, and travel alert
  branches (including NE107-specific alert variants and travel
  history/cycle-counter alerts), across two printed pages.
concept-tags: [handheld communicator, menu tree, alert setup, NE107, travel history, cycle counter]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure B-5 'Alert Setup,' pp. 108–109"
delivery: menu-tree diagram (multi-page) — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same multi-page pattern as Figure B-4, confirmed by direct inspection of both pages.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-menu-calibration
teaches: >
  The Calibration menu tree — travel calibration (HART 5 and HART 7
  variants shown separately), relay adjust, sensor calibration, and PST
  calibration.
concept-tags: [handheld communicator, menu tree, calibration, travel calibration, sensor calibration, PST calibration]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure B-6 'Calibration,' p. 110"
delivery: menu-tree diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Cross-references Figures B-4 and B-5 by name for the branches it doesn't re-expand.
mediaStatus: unreviewed
```

```yaml
id: fdvc6200-cmp-menu-service-tools
teaches: >
  The Service Tools menu tree — device status, alert record, diagnostics
  (stroke valve, partial stroke test), variables, travel history, run-time
  extremes, and maintenance actions (stabilize/optimize, restart
  processor, reset PST alert, HART version change, simulate).
concept-tags: [handheld communicator, menu tree, service tools, diagnostics, run time extremes, maintenance]
status: current
source:
  - doc: Fisher FIELDVUE DVC6200 (HW2) IM (D103605X012, March 2026)
    locator: "Figure B-7 'Service Tools,' p. 111"
delivery: menu-tree diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Last figure in the document's numbered-figure sequence — the Glossary (pp. 112–120) that follows carries no figures, confirmed by direct text sweep.
mediaStatus: unreviewed
```

## Open Items

- **Full coverage: 39 real figures, no gaps** — 26 in the main body
  (Figures 1–26, flat-numbered), 6 in Appendix A (Figures A-1–A-6), 7 in
  Appendix B (Figures B-1–B-7). Every one visually verified against its
  rendered page, not read from text extraction alone. Confirmed via a
  second, separate full-text sweep for the `Figure [A-Z]-[0-9]+\.` pattern
  specifically — the appendices were not caught by the initial numeric-only
  sweep (see the top-of-file structural note; this was a real near-miss,
  not a hypothetical one). No figures exist in the Glossary (pp. 112–120),
  confirmed by a full-text sweep of that range finding zero matches.
- **Page-offset confirmed directly**: PDF page number = printed page
  number + 2, verified at multiple points across the document (p.4/p.2,
  p.5/p.3, p.100/p.98, p.111/p.109, p.112/p.110), not assumed from a single
  sample.
- **Low figure-per-page density, as expected — noted, not a problem.**
  39 real figures across 120 real pages (≈0.33 figures/page) — genuinely
  higher than the ~0.2 originally estimated from a coarse text sweep before
  this pass found the appendix figures, but still well below the
  0.4–0.9/page density typical of the Control Valve Handbook's mechanical
  chapters. The bulk of this document's real page count is HART/wiring
  procedural text, parameter tables (28 real numbered tables, all correctly
  excluded — DIP switch settings, alert configuration ranges, parts kits),
  and the two large menu-tree appendices, which are figures but read as
  text hierarchies rather than diagrams. Confirmed by direct reading, not
  assumed from the document's subject matter.
- **No duplicate printed figure numbers found** within either numbering
  scheme (main body or either appendix).
- **No source citation errors found** — every in-text "see Figure N" /
  "refer to Figure N" reference checked against this catalog resolves to
  the real figure it names.
- **Table exclusion confirmed**: 28 real numbered tables identified and
  excluded (Table 1 through Table 28), all genuinely distinct from the
  figure sequence — this document cleanly separates "Figure" and "Table"
  numbering with no table-shaped-but-figure-numbered edge case like the
  Control Valve Handbook's ch10 dimension tables.
- **Cross-reference check against the rest of the library, checked
  directly:** `Subject-Matter Index — Control Valve Handbook ch4.md` has three
  positioner-related records (`cvh-cmp-pneumatic-positioner-schematic`,
  `cvh-cmp-analog-ip-positioner-schematic`, `cvh-cmp-analog-ip-positioner-photo`)
  and one DVC-adjacent record (`cvh-cmp-sis-dvc-on-safety-valve`) — all
  four are topically adjacent (positioners, digital valve controllers in a
  safety context) but none are the same real photographed/drawn figure as
  anything in this document; the Handbook's positioner coverage is generic
  (pneumatic and analog I/P, not this specific digital HART instrument).
  No id collision, no cross-reference needed — noted here for future
  awareness rather than linked, since there is no shared figure to point
  at. `Subject-Matter Index — 14101 ch1-ch2.md` and `ch3.md` were also checked
  directly — confirmed to carry zero DVC/FIELDVUE/positioner citations as
  of this pass.
- **No archive or legacy material** was found or consulted — the current
  March 2026 edition is the sole source for all 39 components.
