---
title: Subject-Matter Index — Fisher FIELDVUE DVC7K-H
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher FIELDVUE DVC7K-H Digital Valve Controller Instruction Manual (D104767X012, July 2026)
chapter: whole document — no chapter structure to sub-divide
updated: 2026-09-19
---

# Subject-Matter Index — Fisher FIELDVUE DVC7K-H Digital Valve Controller IM

Standing full-document cataloging pass, part of the "index all Technical
Publications manuals" directive (Franz, 2026-09-18/19), run deliberately
ahead of any confirmed course demand, the same as the DVC6200 pass this
document is paired with. 140 real PDF pages — larger than the DVC6200 IM,
the largest single document indexed in this project to date.

**Real page-numbering offset, confirmed directly, NOT assumed to match
DVC6200's:** this document's PDF page number is exactly 3 greater than its
own printed page number throughout (PDF p.5 = printed p.2, PDF p.126 =
printed p.123), a genuinely different offset from the DVC6200 IM's +2 —
checking this directly rather than carrying the sibling document's offset
over was the right call.

**Real hybrid structure, matching the case `Subject-Matter Index — Process &
Standards.md` documents:** numbered Section 1 through Section 8, plus
letter-prefixed Appendix A and Appendix B figures, govern most of the
grouping headers — but this document is NOT simply a bigger copy of
DVC6200's structure. Genuine differences, confirmed by reading the real
table of contents rather than assumed: DVC7K-H has its own Section 2
"Security" (DVC6200 has none), a different section count and ordering from
Section 4 onward, only 5 Appendix A figures (not 6) and 5 Appendix B
figures (not 7), and — found only by reading Appendix C directly, since
neither the flat numeric sweep nor the letter-prefixed sweep would ever
find it — **a third appendix, "Appendix C: Local User Interface (LUI) Flow
Chart," containing three genuine, real diagrams with NO figure numbers at
all** (Overview, Configure, Service Tools). This is the second real
application of the "unnumbered-but-real diagram" convention (decided
2026-09-18 for Control Valve Handbook ch5), now confirmed to recur in a
completely different document family — worth treating as a real, recurring
case going forward, not a one-off. A fourth appendix, "Appendix D:
Third-Party Software Notices and Additional Terms and Conditions," and the
closing Glossary, were both confirmed by direct text sweep to carry zero
figures — pure legal/reference text.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher FIELDVUE DVC7K-H Digital Valve Controller IM** | D104767X012 · July 2026 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Section 1: Introduction (printed pp. 1–7)

```yaml
id: fdvc7kh-cmp-mounted-on-sliding-stem
teaches: >
  A DVC7K-H mounted on a Fisher sliding-stem valve actuator — the standard
  linear-actuator mounting configuration. The photo shows the unit's own
  Local User Interface (LUI) display, a real hardware feature this
  instrument has that the DVC6200 does not.
concept-tags: [DVC7K-H, digital valve controller, sliding-stem actuator, mounting, Local User Interface, LUI]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 1 'FIELDVUE DVC7K Digital Valve Controller Mounted on a Fisher Sliding-Stem Valve Actuator,' p. 2"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo. Companion to Figure 2 (rotary mounting).
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-mounted-on-8590-valve
teaches: >
  A DVC7K-H mounted to a real named Fisher product, the 8590 butterfly
  control valve — the rotary-actuator mounting example, more specific than
  DVC6200's generic "GX Control Valve" caption.
concept-tags: [DVC7K-H, digital valve controller, rotary valve, Fisher 8590, mounting]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 2 'FIELDVUE DVC7K Digital Valve Controller Mounted to a Fisher 8590 Control Valve,' p. 3"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo.
mediaStatus: unreviewed
```

### Section 3: Wiring Practices (printed pp. 16–19)

```yaml
id: fdvc7kh-cmp-voltage-available-calc
teaches: >
  How to calculate voltage available at the instrument — the identical
  worked calculation (18.5 V compliance down to 15.19 V available) shared
  with the DVC6200 IM's own Figure 4, confirming this is a house diagram
  reused across the FIELDVUE product line rather than instrument-specific
  content.
concept-tags: [voltage available, compliance voltage, HART filter, worked example]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 3 'Determining Voltage Available at the Instrument,' p. 17"
delivery: analytical block diagram + worked calculation — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same content as `fdvc6200-cmp-voltage-available-calc` — a shared house diagram across the FIELDVUE DVC product line, not a duplicate figure to merge (each document's own real, printed instance is catalogued separately per this project's per-document scoping).
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-voltage-test-schematic
teaches: >
  Test circuit for measuring control-system compliance voltage — the same
  shared house diagram as DVC6200's Figure 5.
concept-tags: [compliance voltage, voltage test, potentiometer, voltmeter, milliammeter]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 4 'Voltage Test Schematic,' p. 19"
delivery: analytical wiring schematic — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same content as `fdvc6200-cmp-voltage-test-schematic` — shared house diagram, not a duplicate to merge.
mediaStatus: unreviewed
```

### Section 4: Configuration (printed pp. 20–47)

```yaml
id: fdvc7kh-cmp-zero-power-condition
teaches: >
  What zero power condition does to each relay type — single-acting direct,
  single-acting reverse, double-acting — shown as a labelled photo (ports
  A/B, visible LUI display) plus its own summary table.
concept-tags: [zero power condition, relay type, single-acting, double-acting]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 5 'Zero Power Condition,' p. 26"
delivery: existing figure (crop) with an adjacent real table — per Style Guide §5.8 default
used-by: []
notes: Same concept as `fdvc6200-cmp-zero-power-condition`; the photo itself is genuinely different (this instrument's own housing, LUI display visible).
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-travel-target-input-characteristics
teaches: >
  Travel target versus ranged set point for linear, equal-percentage, and
  quick-opening input characteristics — same shared house diagram as
  DVC6200's Figure 8.
concept-tags: [travel target, ranged set point, linear, equal-percentage, quick-opening]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 6 'Travel Target Versus Ranged Set Point, for Various Input Characteristics (Zero Power Condition = Closed),' p. 28"
delivery: analytical graph (3-panel) — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same content as `fdvc6200-cmp-travel-target-input-characteristics`.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-calibrated-travel-analog-input
teaches: >
  Relationship between calibrated travel and analog input current at both
  zero-power-condition slopes — same shared house diagram as DVC6200's
  Figure 7.
concept-tags: [calibrated travel, analog input, zero power condition]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 7 'Calibrated Travel to Analog Input Relationship,' p. 43"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same content as `fdvc6200-cmp-calibrated-travel-analog-input`.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-travel-alert-deadband
teaches: >
  How a travel alert deadband works — set/clear behavior against a real
  oscillating valve-position trace — same shared house diagram as
  DVC6200's Figure 14.
concept-tags: [travel alert, deadband, alert set, alert clear]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 8 'Travel Alert Deadband,' p. 46"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same content as `fdvc6200-cmp-travel-alert-deadband`.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-cycle-counter-deadband-example
teaches: >
  Worked example (deadband set at 10%) of cycle counter and travel
  accumulator deadband behavior — same shared house diagram as DVC6200's
  Figure 15.
concept-tags: [cycle counter, travel accumulator, deadband, worked example]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 9 'Cycle Counter and Travel Accumulator Deadband Example (Set at 10%),' p. 46"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same printed page as Figure 8, same content as `fdvc6200-cmp-cycle-counter-deadband-example`.
mediaStatus: unreviewed
```

### Section 5: Calibration (printed pp. 48–56)

```yaml
id: fdvc7kh-cmp-relay-a-adjustment
teaches: >
  How to adjust Relay A's output pressure by rotating the adjustment disc —
  same core content as DVC6200's Figure 13, with a real added caution about
  stabilization time (up to 30 seconds, longer with the low-bleed relay
  option) not present in the DVC6200 IM's own version.
concept-tags: [relay A, adjustment, output pressure, low bleed]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 10 'Relay A Adjustment (Shroud Removed for Clarity),' p. 56"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled photo; genuinely different framing/callout style from DVC6200's equivalent figure, not identical.
mediaStatus: unreviewed
```

### Section 6: Device Information, Diagnostics and Variables (printed pp. 57–69)

```yaml
id: fdvc7kh-cmp-ne107-health-indicators
teaches: >
  The NE107 valve health indicator legend — five LED color/blink states
  (solid green, blinking green, blinking red ×2, solid red) each paired
  with a real icon and status meaning (good, maintenance required, out of
  specification, check function, failed). A component type not present
  anywhere in the DVC6200 IM.
concept-tags: [NE107, valve health, LED indicator, diagnostics, status icon]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 11 'NE107 Valve Health Indicators,' p. 60"
delivery: existing figure (crop) — icon/color legend, per Style Guide §5.8 default
used-by: []
notes: Real 5-row legend combining a color swatch, a printed icon, and a text meaning per row — a genuinely new component type for this project, not previously catalogued in this shape.
mediaStatus: unreviewed
```

### Section 7: Maintenance and Troubleshooting (printed pp. 70–94)

```yaml
id: fdvc7kh-cmp-ip-converter-location
teaches: >
  Where the I/P converter sits inside the housing — between the terminal
  box and the relay — shown on a real disassembled unit.
concept-tags: [I/P converter, module base, housing interior]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 12 'I/P Converter Location,' p. 74"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real disassembly photo.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-ip-converter-exploded
teaches: >
  The I/P converter assembly with real part callouts — shroud, socket-head
  screws, finger cover, boots — for removal/replacement procedures.
concept-tags: [I/P converter, shroud, boots, finger cover, exploded view]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 13 'I/P Converter,' p. 75"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled photo; notes the leads route through guides in the Sensor Assembly to the Front Cover Assembly — a real structural detail specific to this instrument's design (DVC6200 routes to the printed wiring board instead).
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-ip-filter-location
teaches: >
  Where the O-ring (I/P converter output port) and screen/filter (I/P
  converter supply port) sit — the two serviceable items during I/P
  converter maintenance.
concept-tags: [I/P converter, O-ring, screen, filter]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 14 'I/P Filter Location,' p. 76"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled photo of the module base interior.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-sensor-board-ribbon-cable
teaches: >
  Two ribbon-cable connections on the Sensor Board — terminal box ribbon
  cable connection and Sensor Board ribbon cable connection — that must be
  unplugged before removing the Front Cover Assembly. Shows the unit's
  internal battery compartment ("NO BATTERY" placeholder label visible).
concept-tags: [sensor board, ribbon cable, front cover assembly, battery compartment]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 15 'Sensor Board Ribbon Cable Connections,' p. 77"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A hinged front-cover design with an internal sensor board and battery —
  structurally distinct from the DVC6200's separate module-base/PWB
  design; no equivalent DVC6200 figure to cross-reference.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-ering-hinge-pin-location
teaches: >
  Where the E-ring and hinge pin sit on the Front Cover Assembly's hinge —
  removed with slip-joint pliers as part of front-cover replacement.
concept-tags: [E-ring, hinge pin, front cover assembly]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 16 'E-ring and Hinge Pin Location,' p. 78"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Close-up labelled photo.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-pcb-connections-settings
teaches: >
  The printed circuit board's DIP switch (24 V / 4-20 mode) on the back of
  the Front Cover Assembly, plus a real caution label ("NO BATTERY ALLOWED
  EVER FOR EXTREME TEMP UNITS") that is a genuine safety-relevant detail
  specific to this instrument's extreme-temperature variant.
concept-tags: [printed circuit board, DIP switch, extreme temperature, battery caution]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 17 'Printed Circuit Board (PCB) Connections and Settings,' p. 79"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Note the naming difference from DVC6200's equivalent (Figure 19, "Printed Wiring Board (PWB)") — this manual consistently calls the same kind of board a "PCB," not a "PWB"; a real terminology difference between the two sibling documents, not an inconsistency in this catalog.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-seal-location
teaches: >
  Where the housing seal sits, checked/reseated when reattaching the Front
  Cover Assembly.
concept-tags: [seal, front cover assembly, housing]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 18 'Seal Location,' p. 79"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same printed page as Figure 17.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-battery-location
teaches: >
  The internal battery backup and its two real sticker options — one for
  extreme-temperature units (no battery allowed) and one for
  high/standard-temperature units (naming the required battery source,
  Murata CR2032W) — a genuine feature this instrument has that DVC6200
  does not.
concept-tags: [battery backup, extreme temperature, battery sticker, Murata]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 19 'Battery Location,' p. 80"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: A real safety-relevant WARNING accompanies this figure in the source (non-approved battery voids hazardous-area approvals) — worth carrying forward if this component is ever cited.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-pneumatic-relay-location
teaches: >
  Where the pneumatic relay sits, on the right side of the module base.
concept-tags: [pneumatic relay, module base]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 20 'Pneumatic Relay Location,' p. 81"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled photo.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-pneumatic-relay-assembly
teaches: >
  The pneumatic relay assembly with its relay seal called out.
concept-tags: [pneumatic relay, relay seal]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 21 'Pneumatic Relay Assembly,' p. 82"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same content type as `fdvc6200-cmp-pneumatic-relay-assembly` — a different real photo of a differently-shaped relay housing, not a duplicate.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-terminal-box-location
teaches: >
  Where the terminal box sits inside the housing.
concept-tags: [terminal box, housing interior]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 22 'Terminal Box Location,' p. 83"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled photo.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-vent-variants
teaches: >
  Standard vent versus pipe-away block — the two real vent configurations
  this instrument ships with, shown side by side on the assembled unit.
concept-tags: [vent, standard vent, pipe-away block]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 23 'Vent,' p. 85"
delivery: existing figure (crop, 2-panel) — per Style Guide §5.8 default
used-by: []
notes: No equivalent figure in the DVC6200 IM — a pipe-away vent option specific to this instrument.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-vent-assembly-exploded
teaches: >
  Real exploded parts view of the standard vent — screws, vent top, filter,
  umbrella valve, vent housing, O-ring, in assembly order.
concept-tags: [vent, exploded view, filter, umbrella valve, O-ring]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 24 'Vent Assembly,' p. 86"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real numbered assembly-order labels.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-pipe-away-vent-exploded
teaches: >
  Real exploded parts view of the pipe-away vent option — screws,
  pipe-away vent housing, O-ring.
concept-tags: [pipe-away vent, exploded view, O-ring]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 25 'Pipe-Away Vent,' p. 87"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Figure 24 for the alternate vent configuration.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-gauge-block-orings-screws
teaches: >
  Real exploded/labelled view of the optional gauge block's O-rings,
  screws, and three gauges — for removal/replacement.
concept-tags: [gauge block, O-rings, screws, gauges]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 26 'Gauge Block O-rings and Screws,' p. 88"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: The gauge block is explicitly noted as an optional feature on this instrument.
mediaStatus: unreviewed
```

### Section 8: Parts (printed pp. 95–103)

```yaml
id: fdvc7kh-cmp-terminal-box-io-variants
teaches: >
  Terminal box with and without the I/O package option — the two real
  configurations shown side by side.
concept-tags: [terminal box, I/O package, XMTR terminals]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 27 'Terminal Box,' p. 96"
delivery: existing figure (crop, 2-panel) — per Style Guide §5.8 default
used-by: []
notes: Companion figure to Table 16 (Parts Kits), which names the matching Front Cover Assembly kits — correctly excluded as a table.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-assembly-drawings-views
teaches: >
  Full external/internal assembly drawing set across two printed pages —
  front, right, top, bottom, back, and left views, the Front Cover
  Assembly's terminal-box-cap-removed and internal views (I/P converter,
  relay assembly, ribbon cables, DIP switch, battery), and pipe-plug
  callouts.
concept-tags: [assembly drawings, front view, front cover assembly, DIP switch, ribbon cables]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 28 'DVC7K Assembly Drawings,' pp. 101–102"
delivery: existing figure (crop, multi-sheet) — per Style Guide §5.8 default
used-by: []
notes: The single best overview figure in this document for orienting a first-time reader — analogous in purpose to DVC6200's own Figure A-6/`fdvc6200-cmp-assembly-exploded-overview`, though this one shows six labelled orthographic views rather than one exploded photo.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-gauge-block-views
teaches: >
  The optional gauge block itself — back, front, right, left, top, and
  bottom views with gauges, O-rings, and screws-with-O-rings called out.
concept-tags: [gauge block, exploded view, O-rings, gauges]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure 29 'Gauge Block,' p. 103"
delivery: existing figure (crop, 6-panel) — per Style Guide §5.8 default
used-by: []
notes: Last figure in the document's main-body flat numbering — Appendix A restarts numbering as "A-N" immediately after (see below).
mediaStatus: unreviewed
```

### Appendix A: Principle of Operation (printed pp. 104–108)

```yaml
id: fdvc7kh-cmp-hart-fsk-technique
teaches: >
  How the HART protocol encodes digits as two superimposed frequencies on
  the 4–20 mA loop — the identical shared house diagram as DVC6200's
  Figure A-1.
concept-tags: [HART protocol, frequency shift keying, FSK]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure A-1 'HART Frequency Shift Keying Technique,' p. 104"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same content as `fdvc6200-cmp-hart-fsk-technique`.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-instrument-to-pc-connections
teaches: >
  Typical wiring from a control system through field terminals and a HART
  modem to a PC running Device Description (DD) software — the same
  multi-drop wiring pattern as DVC6200's Figure A-2, retitled for DD
  software rather than ValveLink specifically.
concept-tags: [Device Description, DD software, HART modem, field terminals, multi-drop]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure A-2 'Typical FIELDVUE Instrument to Personal Computer Connections for Device Description (DD) Software,' p. 106"
delivery: analytical wiring diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Real title difference from DVC6200's equivalent ("Device Description (DD) Software" vs. "ValveLink Software") — a genuine, if minor, content difference, not just a rename.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-block-diagram
teaches: >
  The DVC7K-H's own core signal path as a functional block diagram —
  terminal box through I/P, pneumatic relay, printed circuit board, to the
  valve and actuator, closing the loop with valve travel feedback.
concept-tags: [block diagram, signal path, I/P converter, pneumatic relay, printed circuit board]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure A-3 'FIELDVUE DVC7K Digital Valve Controller Block Diagram,' p. 107"
delivery: analytical block diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Analogous to DVC6200's Figure A-3, but genuinely redrawn for this instrument's own module names (e.g. "printed circuit board" not "printed wiring board").
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-block-diagram-transmitter-switches
teaches: >
  The core block diagram extended with BOTH the position transmitter and
  discrete switch options shown together on one diagram — genuinely
  different from DVC6200, which splits this across two separate figures
  (A-4 position transmitter, A-5 discrete switch).
concept-tags: [block diagram, position transmitter, discrete switch, switches 1 and 2]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure A-4 'FIELDVUE DVC7K Digital Valve Controller with Position Transmitter and Switches Block Diagram,' p. 107"
delivery: analytical block diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  Real structural difference from the DVC6200 IM, confirmed by direct
  comparison: DVC6200 keeps the position-transmitter and discrete-switch
  options as two separate figures because they are genuinely alternative,
  mutually exclusive options on that instrument; DVC7K-H's own hardware
  supports both a transmitter and two switches simultaneously, so one
  combined diagram is the correct, non-redundant representation for this
  instrument specifically — not an inconsistency between the two catalogs.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-assembly-exploded-overview
teaches: >
  Full assembly overview — housing, terminal box assembly, wiring terminal
  box cap, I/P converter, pneumatic relay assembly, and Front Cover
  Assembly (with its visible LUI screen and button controls) — as one
  labelled exploded photo.
concept-tags: [assembly overview, housing, front cover assembly, LUI, exploded view]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure A-5 'FIELDVUE DVC7K Digital Valve Controller Assembly,' p. 108"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Analogous in purpose to DVC6200's Figure A-6 (`fdvc6200-cmp-assembly-exploded-overview`),
  one figure number earlier since this document's Appendix A has 5 figures,
  not 6. Last figure in Appendix A.
mediaStatus: unreviewed
```

### Appendix B: Menu Trees (printed pp. 109–122)

```yaml
id: fdvc7kh-cmp-menu-favorites
teaches: >
  The Favorites menu tree — tag, long tag, instrument, change mode, write
  protection.
concept-tags: [menu tree, favorites, write protection]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure B-1 'Favorites,' p. 109"
delivery: menu-tree diagram — text hierarchy, not a photo or graph; falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  Genuine numbered figure per the source (not a table), catalogued per the
  standing figures-only rule even though its content is a text hierarchy —
  matching the same precedent as DVC6200's own menu-tree figures.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-menu-process-variables
teaches: >
  The Process Variables menu tree — device overview status, inputs/output
  (setpoint, travel, pressures), and mapped variables (primary through
  quaternary).
concept-tags: [menu tree, process variables, device overview, mapped variables]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure B-2 'Process Variables,' p. 109"
delivery: menu-tree diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Same printed page as Figure B-1.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-menu-device-settings
teaches: >
  The Device Settings menu tree — by far the largest tree in either
  DVC document, spanning 8 real printed pages: Guided Setup, Positioner
  (identification, tiers, revisions, units, instrument time, positioner
  performance — travel control, cutoff/limit high/low, characterization),
  and Valve (identification, mechanics, construction).
concept-tags: [menu tree, device settings, guided setup, positioner, valve, cutoff limit]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure B-3 'Device Settings,' pp. 111–118"
delivery: menu-tree diagram (multi-page, 8 pages) — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  Explicitly marked "continued on next page" across all 8 pages, confirmed
  by direct inspection of the start and end of the range — one figure, not
  eight. Substantially larger than any single menu-tree figure in the
  DVC6200 IM (whose largest, Figure B-4/B-5, spans only 2 pages each).
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-menu-diagnostics
teaches: >
  The Diagnostics menu tree — alerts (active alerts, history/event log),
  proof test, variables, status, travel/pressure, stroke information,
  configuration, outputs, and Bluetooth (radio, connection status, UID,
  security resets) — across 3 printed pages.
concept-tags: [menu tree, diagnostics, alerts, proof test, Bluetooth]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure B-4 'Diagnostics,' pp. 119–121"
delivery: menu-tree diagram (multi-page, 3 pages) — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Bluetooth branch is a real feature this instrument has that DVC6200's own equivalent tree does not surface as prominently.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-menu-maintenance
teaches: >
  The Maintenance menu tree — calibration (travel, pressure sensor, input
  current), tuning, proof test, restore/restart, and simulation.
concept-tags: [menu tree, maintenance, calibration, tuning, restore, simulation]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Figure B-5 'Maintenance,' p. 122"
delivery: menu-tree diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Last figure in Appendix B's own letter-prefixed sequence.
mediaStatus: unreviewed
```

### Appendix C: Local User Interface (LUI) Flow Chart (printed pp. 123–125)

```yaml
id: fdvc7kh-cmp-lui-flowchart-overview
teaches: >
  The LUI's own Overview screen flowchart — numbered decimal-outline boxes
  (1. Overview, 1.1 Primary Variables, 1.2 Device Information, 1.2.1
  Identification, 1.2.2 Serial Numbers, 1.2.3 Revisions) showing exactly
  what a technician sees navigating the physical front-panel display.
concept-tags: [Local User Interface, LUI, flowchart, overview, primary variables]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Unnumbered diagram, p. 123 — 'C.1 Overview' LUI flowchart, decimal-numbered boxes 1 through 1.2.3"
delivery: analytical flowchart — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  Genuine real teaching content — a real navigable flowchart of the
  physical Local User Interface — with NO printed figure number anywhere
  on the page, confirmed by direct visual inspection. Synthetic locator per
  the standing convention decided 2026-09-18 for Control Valve Handbook
  ch5's p.100 diagram; this is the second real application of that
  convention, in a completely different document, confirming it is a real,
  recurring case rather than a one-off.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-lui-flowchart-configure
teaches: >
  The LUI's Configure screen flowchart — the single densest diagram in
  either DVC document: guided setup, instrument mode, security, units,
  localization, travel control, tuning, outputs (position transmitter,
  switches 1/2), alert setup, calibration, and wireless/Bluetooth, all as
  one connected decimal-numbered box diagram.
concept-tags: [Local User Interface, LUI, flowchart, configure, tuning, outputs, Bluetooth]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Unnumbered diagram, p. 124 — 'C.2 Configure' LUI flowchart, decimal-numbered boxes 2 through 2.12.1"
delivery: analytical flowchart — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: No printed figure number, confirmed by direct visual inspection — same convention as `fdvc7kh-cmp-lui-flowchart-overview`.
mediaStatus: unreviewed
```

```yaml
id: fdvc7kh-cmp-lui-flowchart-service-tools
teaches: >
  The LUI's Service Tools screen flowchart — active alerts, variables
  (status, travel, pressure, stroke information, configuration, outputs),
  stroke valve, and maintenance (auto calibration, relay adjust).
concept-tags: [Local User Interface, LUI, flowchart, service tools, stroke valve, maintenance]
status: current
source:
  - doc: Fisher FIELDVUE DVC7K-H IM (D104767X012, July 2026)
    locator: "Unnumbered diagram, p. 125 — 'C.3 Service Tools' LUI flowchart, decimal-numbered boxes 3 through 3.4.2"
delivery: analytical flowchart — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: No printed figure number, confirmed by direct visual inspection. Last real component in the document — Appendix D and the Glossary that follow are confirmed figure-free.
mediaStatus: unreviewed
```

## Open Items

- **Full coverage: 42 real components, no gaps** — 29 in the main body
  (Figures 1–29, flat-numbered), 5 in Appendix A (Figures A-1–A-5), 5 in
  Appendix B (Figures B-1–B-5), and 3 genuinely unnumbered diagrams in
  Appendix C. Every one visually verified against its rendered page. The
  main-body flat sweep and a separate letter-prefixed sweep were both run
  (per the lesson from the DVC6200 pass), and **Appendix C was checked by
  directly reading its content, not by any text-pattern sweep at all** —
  neither sweep pattern would ever find an unnumbered diagram; this is
  exactly why the standing process now treats unnumbered content as its own
  real category to check for, not an edge case to stumble into.
- **Page-offset confirmed directly, NOT copied from the DVC6200 pass**:
  PDF page number = printed page number + 3 for this document (versus
  DVC6200's own +2) — checked independently at multiple points, not
  assumed to match its sibling manual.
- **Structural differences from DVC6200, confirmed by direct comparison,
  not assumed from the sibling document:**
  - A distinct Section 2 "Security" with no figures.
  - Appendix A has 5 figures (not 6); Appendix B has 5 (not 7).
  - **Appendix C — a genuine third appendix DVC6200 does not have at all** —
    containing 3 real unnumbered flowcharts for the physical Local User
    Interface, a hardware feature (with real display and buttons) this
    instrument has that DVC6200 does not.
  - Figure A-4 covers position-transmitter AND discrete-switch options
    together (DVC6200 splits these across two figures, A-4 and A-5) — a
    real hardware difference (this instrument supports both simultaneously),
    not a cataloguing inconsistency.
  - A real battery backup (Figure 19) and Bluetooth radio (surfaced in
    Figure B-4's menu tree) — features absent from the DVC6200 IM entirely.
- **Six components share identical content with a DVC6200-side component**
  (the shared "house diagrams" — voltage-available calc, voltage test
  schematic, travel-target/input-characteristics, calibrated-travel,
  travel-alert-deadband, cycle-counter-deadband-example) — each catalogued
  as its own real record here, per this project's per-document scoping
  convention, with an explicit cross-reference note to its DVC6200
  counterpart rather than treated as a duplicate to merge or skip.
- **No duplicate printed figure numbers found**, no source citation errors
  found, within any of the three numbering schemes (main body, Appendix A,
  Appendix B) or the unnumbered Appendix C content.
- **Table exclusion confirmed**: 17 real numbered tables identified and
  excluded, cleanly distinct from the figure sequence — no
  table-shaped-but-figure-numbered edge case in this document.
- **Cross-reference check against the rest of the library, checked
  directly:** same four positioner-adjacent CVH ch4 records checked for
  the DVC6200 pass (`cvh-cmp-pneumatic-positioner-schematic`,
  `cvh-cmp-analog-ip-positioner-schematic`, `cvh-cmp-analog-ip-positioner-photo`,
  `cvh-cmp-sis-dvc-on-safety-valve`) were checked again against this
  document's own figures — same conclusion: topically adjacent, no shared
  real figure, no id collision. 14101's indexes checked directly again —
  still zero DVC/FIELDVUE/positioner citations as of this pass.
- **No archive or legacy material** was found or consulted — the current
  July 2026 edition is the sole source for all 42 components.
