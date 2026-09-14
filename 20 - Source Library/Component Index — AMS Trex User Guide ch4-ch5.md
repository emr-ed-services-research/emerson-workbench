---
title: Component Index — AMS Trex User Guide ch4-ch5
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
chapter: "4-5 — Loop Diagnostics application / Fieldbus Diagnostics application"
updated: 2026-09-24
---

# Component Index — AMS Trex User Guide ch4-ch5

Standing full-chapter pass, chapters 4 and 5 together ("Loop Diagnostics
application" and "Fieldbus Diagnostics application") — catalogued in one
file per the task brief, since both are smaller, closely-related diagnostic
sub-applications on the same device. Numbered-chapter file convention,
matching chapter 2 and the Control Valve Handbook, and matching this
document's own real structure as already confirmed in
`Component Index — Process & Standards.md` (1 intro, 2 hardware, 3 Field
Communicator application, 4 Loop Diagnostics application, 5 Fieldbus
Diagnostics application, plus four appendices and a glossary/index). This
pass applies the `kind: navPath` software-documentation record type
alongside ordinary `kind: figure` records for the two applications' genuine
wiring diagrams, on-device screenshots, and status-indicator graphics — both
kinds are mixed under the same numbered-section headers below, matching how
the source itself interleaves screen description and Settings/procedure
content.

**Chapter boundary, confirmed directly, and corrected from the task brief's
candidate range**: the brief's candidate boundaries (chapter 4 starting
p.124, chapter 5 starting p.150) were checked against the rendered pages,
not trusted — per the standing rule that a candidate range is a starting
point, never a fact. **p.124 renders as a genuinely blank trailing page**
(header "Field Communicator application" only, no body content, footer
"124") — the same "blank trailing page before the next chapter" shape
already seen at chapter 2/3's boundary. Chapter 4 ("4 Loop Diagnostics
application") actually opens on **p.125**. Chapter 4's own last page is
**p.150** (§4.11.4's Procedure and Figure 4-20 both render there, footer
"150") — chapter 5 ("5 Fieldbus Diagnostics application") opens on
**p.151**, not p.150. Chapter 5 runs through **p.178**; p.179 was rendered
and confirmed as Appendix A ("A Troubleshooting," §A.1 "Troubleshoot HART
communication") — out of scope, matching the task brief. **Real content
range for this file: printed pp. 125–178** (zero PDF-page-to-printed-page
offset throughout — confirmed on every rendered page). Every page in this
corrected range was rendered at 150dpi via the local Poppler and read
directly.

**Menu structure: confirmed fixed, not device-dependent** — a real, checked
difference from chapter 3's Field Communicator application. Both Loop
Diagnostics and Fieldbus Diagnostics are generic electrical-test tools
operating on the Trex unit's own hardware (terminals, internal resistor,
ammeter, fieldbus power conditioner) — neither reads or renders a connected
device's HART/FF Device Description the way the Field Communicator
application does. Nowhere in either chapter does the source hedge a menu
path with "varies by device" or "some devices may not display" language
(the language that drove chapter 2/3's DD-driven caution); every screen,
option, and button name is stated in absolute terms (**Trex Unit Power**,
**Trex Unit Current**, **Measurement criteria**, **Go Online**, etc.), the
same fixed vocabulary throughout every rendered page. `path`/`action` below
are worded at the literal-click level accordingly, per the "genuinely
fixed-menu application" exception in `Component Index — Process &
Standards.md`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **AMS Trex Device Communicator User Guide** | Rev 8 · February 2023 · no document/part number printed anywhere in the PDF (confirmed on this pass's own title/footer renders, consistent with chapter 2's finding) | `current` | First-party Emerson document; sole source for this file's records. |

## Components

### Section 4.1 — Open or close the Loop Diagnostics application (printed p. 125)

```yaml
id: amstrex-cmp-open-close-loop-diagnostics
kind: navPath
teaches: >
  How to open and close the Loop Diagnostics application, and what happens
  to any device the Trex unit is powering when the application closes
  (a positioner prompts for a safe current value first; a transmitter's
  power simply stops).
concept-tags: [AMS Trex, Loop Diagnostics, Home screen, open application, close application]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.1 'Open or close the Loop Diagnostics application,' p. 125"
path: [Home screen, Loop Diagnostics icon]
action: >
  Tap the Loop Diagnostics icon on the Trex Home screen to open the
  application. Tap Exit to close it. If the Trex unit was powering a
  positioner, closing prompts for a current value to set a safe position
  before power stops; a transmitter's power simply stops.
used-by: []
screen: amstrex-cmp-loop-diagnostics-screen-startup
notes: Real steps confirmed directly.
```

### Section 4.2 — Loop Diagnostics screen (printed pp. 126–130)

```yaml
id: amstrex-cmp-loop-diagnostics-screen-startup
kind: figure
teaches: >
  The Loop Diagnostics screen's three-section layout at startup: the
  Measurement section (voltage/current readout), the Power/Help section
  (Trex Unit Power toggle plus a live connection diagram of the Trex unit's
  terminals), and the Current control/output section (populated once power
  or current control is enabled).
concept-tags: [AMS Trex, Loop Diagnostics, screen layout, measurement section, power section]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-1 'Loop Diagnostics screen at start up,' p. 127 — lettered callouts A–C (C on p. 128)"
delivery: screen capture
used-by: []
notes: >
  Real caption and all three callouts (A. Measurement section, B. Power/Help
  section, C. Current control/output section) confirmed directly against
  the rendered pages; callout C's text is printed on the following page
  (p. 128) but is part of the same figure's callout list.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-loop-diagnostics-screen-powering
kind: figure
teaches: >
  The Loop Diagnostics screen while actively powering a positioner and
  taking measurements: the full ten-element control surface — measured
  voltage/current, the Trex Unit Power and Trex Unit Current toggles, the
  live terminal connection diagram (tappable for a full-screen view), the
  current readout with pencil-icon entry and up/down arrows, the quick
  current buttons, and the More Options entry point for the Settings covered
  in Section 4.10.
concept-tags: [AMS Trex, Loop Diagnostics, screen layout, Trex Unit Power, Trex Unit Current, quick buttons]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-2 'Loop Diagnostics when powering a positioner and taking measurements,' p. 129 — lettered callouts A–J (F–J on p. 130)"
delivery: screen capture
used-by: []
notes: >
  Real caption and all ten callouts confirmed directly against the rendered
  pages (A–E on p. 129, F–J on p. 130). Callout G documents the "tap the
  image to see a larger version" behavior cataloged separately as
  `amstrex-cmp-view-loop-diagnostics-connection-fullscreen`.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-view-loop-diagnostics-connection-fullscreen
kind: navPath
teaches: >
  How to view a full-screen version of the Loop Diagnostics connection
  diagram, useful for reading the small terminal-connection image more
  clearly before wiring the Trex unit to a device.
concept-tags: [AMS Trex, Loop Diagnostics, connection diagram, full-screen image]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.2.1 'View the connection diagram as a full-screen image,' p. 130"
path: [Loop Diagnostics screen, terminal connection image]
action: Tap the image of the terminals on the Loop Diagnostics screen to enlarge it; tap OK to close the full-screen view and return.
used-by: []
screen: amstrex-cmp-loop-diagnostics-screen-powering
notes: Real steps confirmed directly.
```

### Section 4.3 — Powering transmitters or positioners from Loop Diagnostics (printed pp. 130–132)

```yaml
id: amstrex-cmp-select-power-option-dialog
kind: figure
teaches: >
  The Select Power Option dialog the Trex unit shows when Trex Unit Power is
  tapped: five mutually-exclusive choices (Power Transmitter, Power
  Positioner with 4 mA/20 mA/other mA value, Simulate Transmitter with
  4 mA) — the single entry point for every powering/simulation function
  Section 4.3 describes.
concept-tags: [AMS Trex, Loop Diagnostics, Trex Unit Power, power options, dialog]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-3 'Select the type of device to power,' p. 131"
delivery: screen capture
used-by: []
notes: Real caption and all five listed options confirmed directly against the rendered page.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-disable-loop-diagnostics-power
kind: navPath
teaches: >
  How to stop the Trex unit from powering a device in Loop Diagnostics, and
  why disabling via the Trex Unit Power toggle (rather than Exit or
  unplugging) is the recommended way to move a positioner to a safe position
  first.
concept-tags: [AMS Trex, Loop Diagnostics, Trex Unit Power, disable power, safe position]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.3 'Powering transmitters or positioners from Loop Diagnostics' — 'Disable power to a device,' p. 132"
path: [Loop Diagnostics screen, Trex Unit Power]
action: >
  Tap Trex Unit Power to set it to OFF (also stops automatically on Exit or
  lead-set removal). If powering a positioner, disabling via Trex Unit Power
  is recommended — it lets you select 4 mA, 20 mA, or the present value so
  the positioner reaches a safe position before power actually stops.
used-by: []
screen: amstrex-cmp-loop-diagnostics-screen-powering
notes: >
  Grain judgment call, flagged: Section 4.3's other three bold-heading
  sub-functions — "Power a transmitter," "Power a positioner," and
  "Simulate a transmitter with 4 mA" — are thin descriptive context for the
  Figure 4-3 dialog, and their real teaching content is fully covered by the
  complete numbered procedures that follow (Sections 4.6–4.9 for powering;
  Section 4.11.4 for simulating). They are intentionally not duplicated as
  separate navPath records here — see Open Items. "Disable power to a
  device" is cataloged on its own because no later section restates it.
```

### Section 4.4 — Voltage and current measurements in Loop Diagnostics (printed p. 132)

No components. Purely descriptive explanation of which terminals are used
for each of the four voltage/current measurement combinations — no real
steps or navigable function — excluded under the materiality filter.

### Section 4.5 — Wiring diagrams for the Loop Diagnostics application (printed pp. 133–139)

```yaml
id: amstrex-cmp-power-hart-transmitter-wiring
kind: figure
teaches: >
  The wiring for the Trex unit powering a HART transmitter from its HART +
  pwr terminals, using its internal 167 Ohm resistor — no external resistor
  needed.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, HART transmitter, HART + pwr terminals]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-4 'Power a HART transmitter,' p. 134"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-measure-voltage-externally-powered-hart-transmitter
kind: figure
teaches: >
  The wiring for measuring voltage on an externally-powered HART transmitter
  from the Trex unit's HART + pwr terminals, with a 250 Ohm resistor and
  external voltage source in the loop.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, externally-powered transmitter, voltage measurement]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-5 'Measure voltage on an externally-powered HART transmitter,' p. 134 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Voltage source) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-power-control-current-positioner-wiring
kind: figure
teaches: >
  The wiring for the Trex unit powering and controlling current to a
  positioner from its HART + pwr terminals.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, positioner, HART + pwr terminals]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-6 'Power and control current to a positioner,' p. 135"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-connect-externally-powered-positioner-parallel
kind: figure
teaches: >
  The wiring for connecting the Trex unit's HART terminals in parallel to an
  externally-powered positioner to measure voltage at various points along
  the loop and identify voltage drops.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, externally-powered positioner, parallel connection]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-7 'Connect to an externally-powered positioner in-parallel,' p. 135 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Current source) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-connect-externally-powered-positioner-series
kind: figure
teaches: >
  The wiring for connecting the Trex unit's HART terminals in series to an
  externally-powered positioner to control current.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, externally-powered positioner, series connection]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-8 'Connect to an externally-powered positioner in-series,' p. 136 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Voltage source) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-simulate-transmitter-externally-powered-loop-wiring
kind: figure
teaches: >
  The wiring for the Trex unit controlling current from its HART terminals
  to simulate a transmitter on an externally-powered loop, connected to the
  analog input (AI) channel.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, simulate transmitter, analog input]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-9 'Control current to simulate a transmitter on an externally-powered loop,' p. 136 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Analog input) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-read-current-analog-output-loop-check
kind: figure
teaches: >
  The wiring for reading current at the Trex unit's mA terminals for an
  analog output loop check, connected in series with the analog output.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, analog output, mA terminals, loop check]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-10 'Read current for an analog output loop check,' p. 137 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Analog output) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-connect-externally-powered-positioner-read-current
kind: figure
teaches: >
  The wiring for connecting to an externally-powered positioner while
  reading current from an analog output, showing both the positioner
  connection and the current-reading tap point.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, externally-powered positioner, analog output]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-11 'Connect to an externally-powered positioner and read current,' p. 137 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Analog output) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-measure-current-test-terminals
kind: figure
teaches: >
  Two wiring options for measuring current from an externally-powered
  transmitter's own test terminals using the Trex mA terminals, without
  breaking the loop — shown for two different test-terminal orientations
  since device layouts vary.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, test terminals, mA terminals]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-12 'Measure current from an externally-powered transmitter device with test terminals,' pp. 138 — callout A, two connection options shown ('or')"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption and callout (A. Voltage source) confirmed directly. One
  printed figure containing two connection-option drawings joined by "or" —
  cataloged as a single record since the source presents them as one figure
  with one caption/number.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-simulate-transmitter-unpowered-loop-wiring
kind: figure
teaches: >
  The wiring for the Trex unit powering and controlling current from its
  HART + pwr terminals to simulate a transmitter on an unpowered loop
  connected to a 4-wire terminal block.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, simulate transmitter, unpowered loop, 4-wire terminal block]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-13 'Power and control current to simulate a transmitter on an unpowered loop,' p. 139 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Analog input) confirmed directly.
mediaStatus: unreviewed
```

### Section 4.6 — Power a 2-wire transmitter (printed pp. 139–140)

```yaml
id: amstrex-cmp-power-2wire-transmitter
kind: navPath
teaches: >
  How to power a 2-wire HART transmitter from the Trex unit's HART + pwr
  terminals using its internal resistor, then stop powering it.
concept-tags: [AMS Trex, Loop Diagnostics, power a transmitter, 2-wire transmitter, HART + pwr terminals]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.6 'Power a 2-wire transmitter,' pp. 139–140"
path: [Loop Diagnostics screen, Trex Unit Power, Power Transmitter]
action: >
  Connect the lead set to the HART + pwr terminals on the Trex unit and the
  transmitter, tap Trex Unit Power, tap Power Transmitter, then tap OK.
  Loop Diagnostics powers the transmitter and measures voltage/current. To
  stop, tap Trex Unit Power to OFF, tap Exit, or remove the lead set.
used-by: []
screen: amstrex-cmp-power-2wire-transmitter-connection
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-power-2wire-transmitter-connection
kind: figure
teaches: >
  The physical lead-set connection for powering a 2-wire transmitter from
  the Trex unit's HART + pwr terminals — the wiring end state for the
  Section 4.6 procedure.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, 2-wire transmitter, HART + pwr terminals]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-14 'Power a 2-wire transmitter,' p. 140"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

### Section 4.7 — Power a 2-wire transmitter and measure analog output (printed pp. 140–141)

```yaml
id: amstrex-cmp-power-2wire-transmitter-measure-output
kind: navPath
teaches: >
  How to remove a 2-wire HART transmitter from a loop, power it from the
  Trex unit, and measure its analog output — verifying the transmitter in
  isolation.
concept-tags: [AMS Trex, Loop Diagnostics, power a transmitter, analog output, isolation test]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.7 'Power a 2-wire transmitter and measure analog output,' pp. 140–141"
path: [Loop Diagnostics screen, Trex Unit Power, Power Transmitter]
action: >
  Connect the lead set to the HART + pwr terminals on the Trex unit and the
  transmitter, tap Trex Unit Power, tap Power Transmitter, then tap OK. The
  Trex unit powers the device and displays voltage/current. To stop, tap
  Trex Unit Power to OFF, tap Exit, or remove the lead set.
used-by: []
screen: amstrex-cmp-power-2wire-transmitter-measure-output-connection
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-power-2wire-transmitter-measure-output-connection
kind: figure
teaches: >
  The physical lead-set connection for the Section 4.7 procedure — powering
  a removed 2-wire transmitter from the Trex unit's HART + pwr terminals to
  measure its analog output.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, 2-wire transmitter, analog output]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-15 'Connection for providing power to the device,' p. 141"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

### Section 4.8 — Power a positioner (printed pp. 141–143)

```yaml
id: amstrex-cmp-power-positioner-loop-diagnostics
kind: navPath
teaches: >
  How to power a positioner from the Trex unit at a chosen current (4 mA,
  20 mA, or a specified value), change the supplied current with the quick
  buttons or arrow keys, and stop powering it.
concept-tags: [AMS Trex, Loop Diagnostics, power a positioner, quick buttons, current control]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.8 'Power a positioner,' pp. 141–143"
path: [Loop Diagnostics screen, Trex Unit Power, Power Positioner]
action: >
  Connect the lead set to the HART + pwr terminals on the Trex unit and the
  positioner, tap Trex Unit Power, select Power Positioner with 4 mA (0%),
  20 mA (100%), or another mA value, then tap OK. Loop Diagnostics powers
  the positioner (Trex Unit Current also enables). Change current with a
  quick button (4/8/12/16/20 mA) or the up/down arrow keys (default
  increment 0.1 mA). To stop, tap Trex Unit Power to OFF or Exit (prompts
  for a safe-position current value) or remove the lead set (no prompt).
used-by: []
screen: amstrex-cmp-power-positioner-connection
notes: Real steps, option table, and stop-power behavior confirmed directly.
```

```yaml
id: amstrex-cmp-power-positioner-connection
kind: figure
teaches: >
  The physical lead-set connection for powering a positioner from the Trex
  unit's HART + pwr terminals — the wiring end state for the Section 4.8
  procedure.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, positioner, HART + pwr terminals]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-16 'Connection for powering a positioner,' p. 142"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

### Section 4.9 — Stroke a valve (printed pp. 143–144)

```yaml
id: amstrex-cmp-stroke-valve
kind: navPath
teaches: >
  How to stroke a valve/actuator assembly through its required positions by
  powering a positioner and repeatedly adjusting the supplied current —
  including the safety warnings around moving parts and released process
  fluid/pressure.
concept-tags: [AMS Trex, Loop Diagnostics, stroke a valve, positioner, current control, safety]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.9 'Stroke a valve,' pp. 143–144"
path: [Loop Diagnostics screen, Trex Unit Power, Power Positioner]
action: >
  Connect the lead set to the HART + pwr terminals on the Trex unit and the
  positioner, tap Trex Unit Power, select a Power Positioner option, tap OK,
  then repeatedly change the current (quick button, arrow keys, or pencil
  icon) and wait for the valve to move, cycling through all required
  positions. To stop, tap Trex Unit Power to OFF or Exit (prompts for a
  safe-position value) or remove the lead set (no prompt).
used-by: []
notes: >
  No accompanying figure — uses the same HART + pwr connection already
  shown in Figure 4-16 (Section 4.8); the source does not repeat the
  drawing here.
```

### Section 4.10 — Settings for controlling current (printed pp. 144–146)

```yaml
id: amstrex-cmp-change-quick-button-values
kind: navPath
teaches: >
  How to change the mA values assigned to the Loop Diagnostics screen's five
  quick current buttons (default 4/8/12/16/20 mA).
concept-tags: [AMS Trex, Loop Diagnostics, quick buttons, More Options, current settings]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.10.1 'Change the values for the quick buttons,' pp. 144–145"
path: [Loop Diagnostics screen, Trex Unit Current, More Options, Quick Button Selection]
action: >
  Tap Trex Unit Current → More Options → Quick Button Selection (More
  Options only appears once Trex Unit Power or Trex Unit Current is
  enabled), tap a button to change, enter a new value, tap OK, repeat for
  each button, then tap Back to save and return.
used-by: []
screen: amstrex-cmp-quick-buttons-screen
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-quick-buttons-screen
kind: figure
teaches: >
  The Loop Diagnostics screen's five quick current buttons in their default
  state (4/8/12/16/20 mA with percentage equivalents) — the control surface
  the Section 4.10.1 procedure edits.
concept-tags: [AMS Trex, Loop Diagnostics, quick buttons, current control]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-17 'Quick buttons,' p. 145"
delivery: screen capture
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-change-arrow-scaling-ma
kind: navPath
teaches: >
  How to change the increment the up/down arrow keys use to manually adjust
  current (default 0.1 mA), to move a valve more slowly or quickly.
concept-tags: [AMS Trex, Loop Diagnostics, arrow scaling, current settings, More Options]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.10.2 'Change the scale for the up and down arrow keys,' p. 146"
path: [Loop Diagnostics screen, Trex Unit Current, More Options, Arrow Scaling for mA]
action: >
  Tap Trex Unit Current → More Options → Arrow Scaling for mA, enter a value
  between 0.04 and 10.00 mA, tap OK, then tap Back to save and return.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-set-duration-current-change
kind: navPath
teaches: >
  How to set how long the Trex unit takes to change from one supplied
  current value to another — a higher value avoids abrupt valve movement;
  zero moves the valve quickly. Applies to quick buttons, arrow keys, the
  pencil-icon entry, and stopping power to a positioner (not the initial
  current applied at power-on).
concept-tags: [AMS Trex, Loop Diagnostics, duration of current change, current settings, More Options]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.10.3 'Set the duration to change the current,' p. 146"
path: [Loop Diagnostics screen, Trex Unit Current, More Options, Duration of Current Change]
action: >
  Tap Trex Unit Current → More Options → Duration of Current Change, tap the
  desired number of seconds, tap OK, then tap Back to save and return.
used-by: []
notes: Real steps and scope caveat (does not apply to the initial power-on current) confirmed directly.
```

### Section 4.11 — Loop checks (printed pp. 146–150)

Section 4.11's own intro and its four bold-heading subsections ("Checks
before installation," "Checks during installation," "Checks after
installation," "Troubleshoot a HART loop," pp. 146–147) are descriptive
field-procedure guidance — bullet lists of physical wiring/verification
tasks with no on-screen menu path of their own (they point back to the
already-catalogued Loop Diagnostics functions) — excluded under the
materiality filter, not overlooked.

```yaml
id: amstrex-cmp-measure-voltage-externally-powered-loop
kind: navPath
teaches: >
  How to measure voltage on an externally-powered loop/device using the Trex
  unit's HART terminals, without powering the device.
concept-tags: [AMS Trex, Loop Diagnostics, loop check, voltage measurement, HART terminals]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.11.1 'Measure voltage on an externally-powered loop,' p. 148"
path: [Loop Diagnostics screen, Measured Voltage section]
action: >
  Connect the lead set to the HART terminals on the Trex unit and the
  externally-powered device, then view the Measured Voltage section on the
  Loop Diagnostics screen.
used-by: []
screen: amstrex-cmp-loop-diagnostics-screen-startup
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-measure-control-system-output
kind: navPath
teaches: >
  How to measure a digital control system's loop current output (0–25 mA)
  using the Trex unit's mA terminals, to confirm it is sending the correct
  value.
concept-tags: [AMS Trex, Loop Diagnostics, loop check, current measurement, mA terminals]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.11.2 'Measure the control system output,' pp. 148–149"
path: [Loop Diagnostics screen, Measured Current section]
action: >
  Connect the lead set to the mA terminals on the Trex unit and a connection
  point on the loop, then view the measured current at the top of the Loop
  Diagnostics screen.
used-by: []
screen: amstrex-cmp-measure-control-system-output-connection
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-measure-control-system-output-connection
kind: figure
teaches: >
  An example wiring for measuring current at a connection point on a 4-20 mA
  loop using the Trex unit's mA terminals.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, mA terminals, analog output]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-18 'Example connection for measuring current,' p. 149 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Analog output) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-simulate-transmitter-externally-powered-loop-check
kind: navPath
teaches: >
  How to use the Trex unit to control current on an externally-powered loop
  to simulate a 2-wire transmitter for a loop check, verifying the digital
  control system reads the same current.
concept-tags: [AMS Trex, Loop Diagnostics, loop check, simulate transmitter, Trex Unit Current]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.11.3 'Simulate a transmitter on an externally-powered loop for a loop check,' pp. 148–149"
path: [Loop Diagnostics screen, Trex Unit Current]
action: >
  Connect the lead set to the HART terminals on the Trex unit and the
  powered 4-20 mA loop, tap Trex Unit Current, adjust the supplied current
  with a quick button, the arrow keys, or the pencil icon, then verify the
  digital control system reads the same value.
used-by: []
screen: amstrex-cmp-simulate-transmitter-externally-powered-loop-check-connection
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-simulate-transmitter-externally-powered-loop-check-connection
kind: figure
teaches: >
  The wiring for connecting the Trex unit's HART terminals to a powered
  4-20 mA current loop's analog input, for the Section 4.11.3 loop-check
  procedure.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, loop check, analog input]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-19 'Connection for controlling current,' p. 149 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Analog input) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-simulate-transmitter-unpowered-loop-check
kind: navPath
teaches: >
  How to use the Trex unit to both power an unpowered loop and control
  current to simulate a 2-wire transmitter for a loop check, used when the
  loop will have a 4-wire transmitter.
concept-tags: [AMS Trex, Loop Diagnostics, loop check, simulate transmitter, Trex Unit Power, unpowered loop]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.11.4 'Simulate a transmitter on an unpowered loop for a loop check,' p. 150"
path: [Loop Diagnostics screen, Trex Unit Power, Simulate Transmitter with 4 mA]
action: >
  Connect the lead set to the HART + pwr terminals on the Trex unit and the
  unpowered loop, tap Trex Unit Power, tap Simulate Transmitter with 4 mA,
  change the current with the quick buttons or arrow keys, then verify the
  digital control system reads the same value.
used-by: []
screen: amstrex-cmp-simulate-transmitter-unpowered-loop-check-connection
notes: >
  Real steps confirmed directly. This is the fuller procedure for the
  "Simulate a transmitter with 4 mA" function introduced descriptively in
  Section 4.3 — see that record's notes.
```

```yaml
id: amstrex-cmp-simulate-transmitter-unpowered-loop-check-connection
kind: figure
teaches: >
  The wiring for the Trex unit powering an unpowered loop from its HART +
  pwr terminals while simulating a transmitter, connected to a 4-wire
  terminal block.
concept-tags: [AMS Trex, Loop Diagnostics, wiring diagram, simulate transmitter, unpowered loop]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 4-20 'Connection for providing power and simulating a transmitter,' p. 150 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Analog input) confirmed directly.
mediaStatus: unreviewed
```

### Section 5.1 — Open or close the Fieldbus Diagnostics application (printed p. 152)

```yaml
id: amstrex-cmp-open-close-fieldbus-diagnostics
kind: navPath
teaches: How to open and close the Fieldbus Diagnostics application from the Trex Home screen.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Home screen, open application, close application]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.1 'Open or close the Fieldbus Diagnostics application,' p. 152"
path: [Home screen, Fieldbus Diagnostics icon]
action: Tap the Fieldbus Diagnostics icon on the Trex Home screen to open the application; tap Exit to close it.
used-by: []
screen: amstrex-cmp-fieldbus-diagnostics-screen-startup
notes: Real steps confirmed directly.
```

### Section 5.2 — Fieldbus Diagnostics Overview screen (printed pp. 152–155)

```yaml
id: amstrex-cmp-fieldbus-diagnostics-screen-startup
kind: figure
teaches: >
  The Fieldbus Diagnostics Overview screen's real appearance at startup
  before any measurements resolve: DC Voltage, Noise, and Signal each shown
  with a status (here BAD/GOOD/INACTIVE, illustrating the three possible
  statuses) plus the Settings, Details, Logging, and Power supply entry
  points.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Overview screen, GOOD BAD CHECK, INACTIVE]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-1 'Fieldbus Diagnostics screen at start up,' p. 153"
delivery: screen capture
used-by: []
notes: >
  Real caption confirmed directly. No lettered callouts on this figure — the
  full callout set is on Figure 5-2, showing the same screen mid-measurement.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-fieldbus-diagnostics-overview-screen-measurements
kind: figure
teaches: >
  The Fieldbus Diagnostics Overview screen's complete nine-element control
  surface while actively taking measurements: the DC Voltage/Noise/Signal
  status indicators, the Spectrum and Go Online/Go Offline buttons, and the
  Settings, Details, Logging, and Power supply rows — the entry point for
  every function cataloged in Sections 5.3–5.13.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Overview screen, Settings, Details, Logging, Power supply]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-2 'Fieldbus Diagnostics Overview screen while taking measurements,' p. 154 — lettered callouts A–I (I continues onto p. 155)"
delivery: screen capture
used-by: []
notes: Real caption and all nine callouts confirmed directly against the rendered pages.
mediaStatus: unreviewed
```

### Section 5.3 — GOOD, BAD, and CHECK measurements in Fieldbus Diagnostics (printed pp. 155–157)

Section 5.3's own intro and its two data tables (the GOOD/BAD/CHECK/INACTIVE
status-definition table and the fieldbus-signal-status-note table, pp.
155–157) are descriptive reference tables with no numbered steps — excluded
under the materiality filter (and the standing table-exclusion rule; neither
is separately figure-numbered).

```yaml
id: amstrex-cmp-dc-voltage-status-labels-diagram
kind: figure
teaches: >
  The default GOOD/BAD threshold for the DC voltage measurement: BAD below
  9 volts, GOOD from 9–34 volts — a color-coded range bar illustrating
  exactly where the Section 5.3 status table's numbers fall on the
  measurement scale.
concept-tags: [AMS Trex, Fieldbus Diagnostics, DC voltage, GOOD BAD CHECK, measurement criteria]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Unnumbered diagram, p. 156 — 'Default status labels for the DC voltage measurement,' color-coded range bar"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real, genuinely illustrated content (a red/green color-coded threshold
  bar) with no printed figure number — confirmed by direct visual
  inspection of the rendered page. Cataloged as its own record rather than
  bundled with the noise/signal diagrams below: each has its own bold
  heading and illustrates a distinct measurement's own numeric thresholds,
  unlike the ch2 gesture-icon legend's single continuous table with no
  per-item headings — see Open Items for this judgment call.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-noise-status-labels-diagram
kind: figure
teaches: >
  The default GOOD/CHECK threshold for the noise measurement across all
  three frequency bands (low, in-band, high) — a color-coded diagram showing
  the numeric cutoffs (1000 mV low, 75 mV in-band, 150 mV high) that
  separate GOOD from CHECK.
concept-tags: [AMS Trex, Fieldbus Diagnostics, noise measurement, GOOD BAD CHECK, low frequency, in-band, high frequency]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Unnumbered diagram, p. 157 — 'Default status labels for the noise measurement,' color-coded threshold diagram"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real, genuinely illustrated content with no printed figure number —
  confirmed by direct visual inspection. See
  `amstrex-cmp-dc-voltage-status-labels-diagram`'s notes for the
  three-separate-records judgment call.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-signal-status-labels-diagram
kind: figure
teaches: >
  The default BAD/CHECK/GOOD/CHECK threshold for the fieldbus signal
  measurement across four value bands (0–250, 250–700, 700–1000, and
  greater than 1000 mV peak-to-peak).
concept-tags: [AMS Trex, Fieldbus Diagnostics, signal measurement, GOOD BAD CHECK]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Unnumbered diagram, p. 157 — 'Default status labels for the signal measurement,' color-coded threshold diagram"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real, genuinely illustrated content with no printed figure number —
  confirmed by direct visual inspection. See
  `amstrex-cmp-dc-voltage-status-labels-diagram`'s notes for the
  three-separate-records judgment call.
mediaStatus: unreviewed
```

### Section 5.4 — Wiring diagrams for the Fieldbus Diagnostics application (printed pp. 158–160)

```yaml
id: amstrex-cmp-power-connect-foundation-fieldbus-device-wiring
kind: figure
teaches: >
  The wiring for the Trex unit powering and connecting to a FOUNDATION
  fieldbus device using the FOUNDATION fieldbus Power Plug.
concept-tags: [AMS Trex, Fieldbus Diagnostics, wiring diagram, FOUNDATION fieldbus, Power Plug]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-3 'Power and connect to a FOUNDATION fieldbus device,' p. 158 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. FOUNDATION fieldbus Power Plug) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-connect-externally-powered-fieldbus-segment-wiring
kind: figure
teaches: >
  The wiring for connecting the Trex unit to an externally-powered fieldbus
  segment with two devices, terminators, a power conditioner, the fieldbus
  power supply, and the host system all shown.
concept-tags: [AMS Trex, Fieldbus Diagnostics, wiring diagram, fieldbus segment, terminators, power conditioner]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-4 'Connect to an externally-powered fieldbus segment,' p. 159 — callouts A (device terminators), A–D (host block)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption confirmed directly. Two "A" callouts (device-level
  terminators) plus a separate A–D lettered set for the host-side wiring
  block (A. Terminators, B. Power conditioner, C. Fieldbus power supply,
  D. Host system) — both confirmed directly against the rendered page, not
  a duplicate-callout error (they label two different parts of one drawing).
mediaStatus: unreviewed
```

### Section 5.5 — Power a FOUNDATION fieldbus device (printed pp. 159–160)

```yaml
id: amstrex-cmp-power-foundation-fieldbus-device
kind: navPath
teaches: >
  How to power one FOUNDATION fieldbus device from the Trex unit using the
  FOUNDATION fieldbus Power Plug, then stop.
concept-tags: [AMS Trex, Fieldbus Diagnostics, power a device, FOUNDATION fieldbus, Power Plug]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.5 'Power a FOUNDATION fieldbus device,' pp. 159–160"
path: [Fieldbus Diagnostics Overview screen, Power Supply]
action: >
  Connect the lead set to the FF terminals on the Trex unit and directly to
  the unpowered device's communication terminals, connect the FOUNDATION
  fieldbus Power Plug to the FF pwr terminal and the positive (red) lead-set
  terminal, then on the Fieldbus Diagnostics Overview screen tap Power
  Supply to enable power. To stop, tap Power Supply again or disconnect the
  lead set.
used-by: []
screen: amstrex-cmp-power-foundation-fieldbus-device-connection
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-power-foundation-fieldbus-device-connection
kind: figure
teaches: >
  The physical lead-set and Power Plug connection for powering a
  FOUNDATION fieldbus device — the wiring end state for the Section 5.5
  procedure.
concept-tags: [AMS Trex, Fieldbus Diagnostics, wiring diagram, FOUNDATION fieldbus, Power Plug]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-5 'Connection for powering a FOUNDATION fieldbus device,' p. 160 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. FOUNDATION fieldbus Power Plug) confirmed directly.
mediaStatus: unreviewed
```

### Section 5.6 — Connect to an externally-powered fieldbus segment (printed pp. 160–161)

```yaml
id: amstrex-cmp-connect-externally-powered-fieldbus-segment
kind: navPath
teaches: >
  How to connect the Trex unit to an externally-powered fieldbus segment or
  device to begin measurements, and optionally query device tags.
concept-tags: [AMS Trex, Fieldbus Diagnostics, connect to segment, FF terminals, Go Online]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.6 'Connect to an externally-powered fieldbus segment,' pp. 160–161"
path: [Home screen, Fieldbus Diagnostics icon, Go Online]
action: >
  Connect the lead set to the FF terminals on the Trex unit and to the
  fieldbus segment or device, open Fieldbus Diagnostics (the Trex unit
  connects and begins measuring), then optionally tap Go Online to query
  devices for their tags.
used-by: []
screen: amstrex-cmp-connect-fieldbus-segment-connection-option
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-connect-fieldbus-segment-connection-option
kind: figure
teaches: >
  One example connection option for connecting the Trex unit's FF terminals
  to an externally-powered fieldbus segment with two devices, terminators, a
  power conditioner, the fieldbus power supply, and the host system.
concept-tags: [AMS Trex, Fieldbus Diagnostics, wiring diagram, fieldbus segment, terminators]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-6 'One connection option for connecting to the fieldbus segment,' p. 161 — callouts A (device terminators), A–D (host block)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption confirmed directly. Same dual-"A" callout shape as Figure
  5-4 — confirmed as the same drawing pattern reused, not a new error.
mediaStatus: unreviewed
```

### Section 5.7 — Measure the DC voltage, noise, and the fieldbus signal (printed pp. 161–162)

```yaml
id: amstrex-cmp-measure-dc-voltage-noise-fieldbus-signal
kind: navPath
teaches: >
  How to take a full set of DC voltage, noise, and fieldbus signal
  measurements — covering both the externally-powered-device case and the
  unpowered-device case (which requires powering the device with the
  FOUNDATION fieldbus Power Plug first).
concept-tags: [AMS Trex, Fieldbus Diagnostics, measurements, DC voltage, noise, signal, Go Online]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.7 'Measure the DC voltage, noise, and the fieldbus signal,' pp. 161–162"
path: [Fieldbus Diagnostics Overview screen, Go Online]
action: >
  If the device is externally-powered: connect the lead set to the FF
  terminals, open Fieldbus Diagnostics, then tap Go Online if the signal
  status is INACTIVE or to identify device tags. If the device is
  unpowered: connect the lead set to the FF terminals directly to the
  device, connect the FOUNDATION fieldbus Power Plug to the FF pwr terminal
  and the positive lead-set terminal, open Fieldbus Diagnostics, tap Power
  supply to power the device, then tap Go Online as needed.
used-by: []
notes: >
  Real steps confirmed directly, including the remove-the-AC-adapter-first
  note for accurate noise readings.
```

### Section 5.8 — Details screen (printed p. 162)

No components. Purely descriptive overview of what the Details screen
displays by default (live values, units, min/max/average, device count and
addresses) with no numbered steps of its own — the screen's real navigable
functions are the two sections that follow (5.9, 5.10) — excluded under the
materiality filter.

### Section 5.9 — View the live measurement values in Fieldbus Diagnostics (printed p. 163)

```yaml
id: amstrex-cmp-view-live-measurement-values-fieldbus
kind: navPath
teaches: >
  How to view the real-time DC voltage, noise, and signal measurement
  values (rather than just the GOOD/BAD/CHECK summary status) and scroll to
  see every device found on the fieldbus segment.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Details screen, live measurements]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.9 'View the live measurement values in Fieldbus Diagnostics,' p. 163"
path: [Fieldbus Diagnostics Overview screen, Details]
action: >
  Connect to the FOUNDATION fieldbus device or segment, tap Details on the
  Fieldbus Diagnostics Overview screen, then touch and scroll right to view
  additional measurement values (BAD values shown red, CHECK values orange).
used-by: []
screen: amstrex-cmp-fieldbus-diagnostics-overview-screen-measurements
notes: Real steps confirmed directly.
```

### Section 5.10 — View help for a measurement (printed pp. 163–164)

```yaml
id: amstrex-cmp-view-help-fieldbus-measurement
kind: navPath
teaches: >
  How to view built-in Help text for any measurement cell on the Details
  screen — overview and troubleshooting information for that specific
  measurement.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Details screen, Help, troubleshooting]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.10 'View help for a measurement,' pp. 163–164"
path: [Fieldbus Diagnostics Overview screen, Details, Help]
action: >
  Connect to the FOUNDATION fieldbus device or segment, tap Details, press
  and hold a measurement value (or highlight a cell and tap the keypad
  checkmark) to display a menu, tap Help to view the text, then tap OK to
  close.
used-by: []
screen: amstrex-cmp-fieldbus-help-example-screen
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-fieldbus-help-example-screen
kind: figure
teaches: >
  A worked example of the Details screen's Help feature: a signal
  measurement's Help popup explaining what a normal-condition reading means
  and what it can help diagnose.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Details screen, Help, signal measurement]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-7 'Help example,' p. 164"
delivery: screen capture
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

### Section 5.11 — Noise spectrum (printed pp. 164–167)

Section 5.11's own intro (concept explanation, frequency-range table,
gray-shaded-area/color-coding explanation) and "How noise affects the
fieldbus segment" (p. 166) are descriptive teaching content about the
spectrum's meaning, with no numbered steps of their own — excluded under
the materiality filter; the real navigable function is Section 5.11.1 below.

```yaml
id: amstrex-cmp-noise-spectrum-highest-amplitude
kind: figure
teaches: >
  A real noise spectrum reading with the highest measured peak outlined in
  black, showing color-coded low/in-band/high frequency bands (green =
  GOOD, yellow/orange = CHECK) and the gray/shaded exceedance zone.
concept-tags: [AMS Trex, Fieldbus Diagnostics, noise spectrum, GOOD BAD CHECK, Reset Peak]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-8 'Highest amplitude marked with black outline,' p. 165"
delivery: screen capture
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-view-noise-spectrum
kind: navPath
teaches: >
  How to view the real-time noise spectrum (low/in-band/high frequency) and
  clear a recorded peak.
concept-tags: [AMS Trex, Fieldbus Diagnostics, noise spectrum, Reset Peak]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.11.1 'View a spectrum of the noise measurement,' p. 166"
path: [Fieldbus Diagnostics Overview screen, Spectrum, Reset Peak]
action: >
  Connect to the FOUNDATION fieldbus device or segment, tap Spectrum on the
  Fieldbus Diagnostics Overview screen (highest peaks outline in black), then
  tap Reset Peak if needed to clear the outline.
used-by: []
screen: amstrex-cmp-noise-spectrum-example
notes: >
  Real steps confirmed directly, including the remove-the-AC-adapter and
  1.5V-amplitude-failure notes.
```

```yaml
id: amstrex-cmp-noise-spectrum-example
kind: figure
teaches: >
  A second real noise spectrum reading, showing the same low/in-band/high
  frequency layout with a different, mostly high-frequency noise
  distribution.
concept-tags: [AMS Trex, Fieldbus Diagnostics, noise spectrum, GOOD BAD CHECK]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-9 'Example of noise spectrum,' p. 167"
delivery: screen capture
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

### Section 5.12 — Settings (printed pp. 167–169)

Section 5.12's own intro (a plain bullet list of what can be configured) is
not separately catalogued — each real bullet is its own numbered
sub-procedure below.

```yaml
id: amstrex-cmp-view-hide-minmaxavg-fieldbus
kind: navPath
teaches: How to show or hide the minimum, maximum, and average values on the Details screen.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Settings, Show Min Max Avg]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.12.1 'View or hide the minimum, maximum, and average values for a measurement,' p. 168"
path: [Fieldbus Diagnostics Overview screen, Settings, Show Min Max Avg]
action: On the Fieldbus Diagnostics Overview screen, tap Settings, then tap the Show Min Max Avg box to toggle these values.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-view-hide-device-tags-fieldbus
kind: navPath
teaches: >
  How to control whether the Trex unit queries and displays device/host tags
  when going online — useful to disable if you don't want the unit querying
  a device for identification.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Settings, Device Tags, Go Online]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.12.2 'View or hide the device tags when online,' p. 168"
path: [Fieldbus Diagnostics Overview screen, Settings, Device Tags (when online)]
action: >
  Tap Settings, tap Device Tags (when online), select Fieldbus Host and
  Devices, Fieldbus Devices Only, or No Tags, then tap OK.
used-by: []
notes: Real steps and option table confirmed directly.
```

```yaml
id: amstrex-cmp-set-measurements-to-average-fieldbus
kind: navPath
teaches: >
  How to set the number of recent measurements (0–100, default 10) averaged
  for the DC voltage, noise, and signal readings shown on the Details
  screen — one setting applies to all three measurement types.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Settings, measurement average]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.12.3 'Set the number of measurements to average,' p. 168"
path: [Fieldbus Diagnostics Overview screen, Settings, # of Measurements to Avg]
action: >
  Tap Settings, tap # of Measurements to Avg, enter a value between 0 and
  100 (default 10), then tap OK.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-set-good-bad-range-fieldbus
kind: navPath
teaches: >
  How to adjust the minimum/maximum values that determine the GOOD and BAD
  status labels for each measurement type — widening the GOOD/BAD range
  narrows the CHECK range and vice versa.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Settings, Measurement criteria, GOOD BAD CHECK]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.12.4 'Set the range of values for the GOOD and BAD status,' p. 169"
path: [Fieldbus Diagnostics Overview screen, Settings, Measurement criteria]
action: >
  Tap Settings, tap Measurement criteria, enter minimum and/or maximum
  values for each measurement type, then tap Back to complete the changes.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-reset-fieldbus-settings-default
kind: navPath
teaches: >
  How to reset all Fieldbus Diagnostics settings — both the Settings screen
  and the Measurement criteria screen (two separate reset actions are
  needed) — back to default values.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Settings, reset to default]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.12.5 'Reset the Fieldbus Diagnostics settings to the default values,' p. 169"
path: [Fieldbus Diagnostics Overview screen, Settings, Reset to Default]
action: >
  Tap Settings, tap Reset to Default to reset the Settings screen, then tap
  Measurement criteria on the Settings screen and tap Reset to Default again
  to reset that screen too.
used-by: []
notes: Real steps confirmed directly, including the two-screen scope caveat.
```

### Section 5.13 — Saving measurements to a log file (printed pp. 169–174)

Section 5.13's own intro, "File type," and "Creating trends/reports"
(p. 169–170) are descriptive context for the real sub-procedures below —
not separately catalogued.

Section 5.13.1 "Log file overview" (pp. 170–171) — including its own
"Automatically generated file names," "Displayed data," "Measurement
intervals," and "Viewing the saved measurements on a PC" sub-content — is
entirely descriptive reference material about the log file's format and
naming, with no numbered steps of its own. Excluded under the materiality
filter; its one real figure is cataloged below.

```yaml
id: amstrex-cmp-fieldbus-log-file-example
kind: figure
teaches: >
  An example Fieldbus Diagnostics .csv log file opened in a spreadsheet
  program, showing the real column layout: revision, segment/user/location,
  date/timestamp, DC voltage, device count, and per-address signal columns.
concept-tags: [AMS Trex, Fieldbus Diagnostics, log file, csv, spreadsheet]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-10 'Example log file,' p. 171"
delivery: screen capture
used-by: []
notes: >
  Real caption confirmed directly. A PC-side spreadsheet screenshot rather
  than an on-device screen, matching the `screen capture` convention already
  used for other software-content captures in this library.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-enable-disable-fieldbus-logging
kind: navPath
teaches: >
  How to enable logging of DC voltage/noise/signal measurements to a .csv
  file, configuring the user name, segment name, file name, measurement
  location, save option (Append/Replace), update rate, and max log entries.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Logging, csv, trend report]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.13.2 'Enable or disable logging,' pp. 171–173"
path: [Fieldbus Diagnostics Overview screen, Logging]
action: >
  Connect to the FOUNDATION fieldbus device or segment, tap Logging on the
  Fieldbus Diagnostics Overview screen, then set User Name, Segment Name,
  File Name, Measurement Location (At Device/At Fieldbus Control Module/At
  Hub), Save Option (Append/Replace), Target Update Rate, and Max Log
  Entries as needed. Logging stops when disabled, when the selected entry
  count is reached, at 100,000 entries, or at 176 MB file size.
used-by: []
notes: Real steps, full option table, and stop conditions confirmed directly.
```

```yaml
id: amstrex-cmp-save-to-existing-fieldbus-log-file
kind: navPath
teaches: >
  How to append measurements to an existing named log file to build a
  trend/report over time, since the application cannot browse to an
  existing file — the file name must be typed.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Logging, Append, trend report]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.13.3 'Save measurements to an existing log file,' pp. 173–174"
path: [Fieldbus Diagnostics Overview screen, Logging, File Name]
action: >
  Tap Logging; if the listed File Name is correct, tap OK. Otherwise tap
  File Name, tap File Name again, enter the desired name, tap OK, ensure
  Append is selected for the Save Option, then tap OK.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-transfer-fieldbus-log-file-to-pc
kind: navPath
teaches: >
  How to transfer a saved Fieldbus Diagnostics .csv log file from the Trex
  unit to a PC using the Trex File Transfer Utility, since log files cannot
  be viewed on the Trex unit itself.
concept-tags: [AMS Trex, Fieldbus Diagnostics, File Transfer Utility, csv, USB]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.13.4 'Transfer a Fieldbus Diagnostics log file from the Trex unit to a PC,' p. 174"
path: [Trex File Transfer Utility, Fieldbus Diagnostics Dataset, Transfer]
action: >
  Close Fieldbus Diagnostics on the Trex unit, connect it to the PC running
  the Trex File Transfer Utility via USB, open the utility (it lists the
  connected unit by name), click Transfer next to Fieldbus Diagnostics
  Dataset, click OK, then click the Destination file directory to access the
  transferred files. Disconnect by removing the USB cable.
used-by: []
notes: >
  Physical USB-transfer procedure rather than an on-device Settings menu,
  cataloged as navPath per the same PC-utility precedent already
  established (matching this file's own `amstrex-cmp-transfer-...` style
  and chapter 2's Upgrade Studio/AMS Device Manager records).
```

### Section 5.14 — Troubleshooting Fieldbus Diagnostics (printed pp. 174–178)

Section 5.14's own intro and Note (p. 174) describe accessing Help from a
BAD/CHECK measurement — the same function already fully catalogued as
`amstrex-cmp-view-help-fieldbus-measurement` (Section 5.10) — not
duplicated here.

```yaml
id: amstrex-cmp-fieldbus-help-text-example
kind: figure
teaches: >
  A second worked Help example (DC voltage), shown alongside the Details
  screen it was opened from — reinforces what the Help feature looks like in
  practice.
concept-tags: [AMS Trex, Fieldbus Diagnostics, Details screen, Help, DC voltage]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 5-11 'Help text example,' p. 175"
delivery: screen capture
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

The remainder of Section 5.14 (pp. 175–178) is a large symptom/possible
cause/action troubleshooting table (DC voltage, low-frequency noise,
in-band frequency noise, high-frequency noise, and fieldbus signal rows) —
excluded under the standing table-exclusion rule: it is genuinely tabular
reference content with no figure number, the same shape as Appendix A's
troubleshooting table immediately following at p. 179 (confirmed out of
scope for this file).

## Open Items

- **Chapter/scope boundary, confirmed directly and corrected**: the task
  brief's candidate boundaries (ch4 from p.124, ch5 from p.150) were not
  trusted — rendered and read every page from PDF/printed p. 123 through
  p. 180 to confirm the real boundaries. **p.124 is a genuinely blank
  trailing page** (header "Field Communicator application," no body,
  footer "124") between chapter 3's real end (p.123, "3.27 Disconnect a
  device") and chapter 4's real start. **Chapter 4 actually opens on
  p.125**, not p.124. **Chapter 4's own content runs through p.150**
  (§4.11.4 and Figure 4-20 both render there) — **chapter 5 actually opens
  on p.151**, not p.150. Chapter 5 runs through p.178; p.179 was rendered
  and confirmed as Appendix A's real start ("A Troubleshooting"). **Real
  content range cataloged in this file: printed pp. 125–178**, zero
  PDF-page-to-printed-page offset throughout. This is the same "candidate
  range is a starting point, never a fact" lesson the Control Valve
  Handbook's chapter 15 and chapters 6–7 already established — now
  confirmed a second time on a software manual.
- **Full coverage — figures**: Chapter 4 has Figures 4-1 through 4-20,
  sequential, zero gaps (confirmed by direct visual inspection of every
  rendered page). Chapter 5 has Figures 5-1 through 5-11, sequential, zero
  gaps, plus three genuine unnumbered diagrams (the Section 5.3
  GOOD/BAD/CHECK threshold bars for DC voltage, noise, and signal — pp.
  156–157). **Total figures: 34** (20 chapter 4 + 14 chapter 5).
- **Full coverage — navPath**: every numbered subsection in both chapters
  was read and classified. **Total navPath records: 29** (14 chapter 4 +
  15 chapter 5).
- **Total components this file: 63** (34 `kind: figure`, 29 `kind: navPath`) —
  chapter 4: 20 figure + 14 navPath = 34; chapter 5: 14 figure + 15 navPath
  = 29.
- **Menu structure: confirmed fixed, not device-dependent** — see the
  file's own intro paragraph above for the full reasoning. Both
  applications are generic Trex-hardware electrical-test tools (voltage,
  current, noise, signal), not HART/FF Device-Description-driven displays;
  no hedging language appears anywhere in either chapter. `path`/`action`
  fields are worded at the literal-click level throughout, unlike the
  chapter 2/3 DD-driven records.
- **No physical/mechanical-procedure-with-no-figure edge case found in
  these chapters** — checked explicitly, since chapter 2 had several
  (install/remove modules, replace the stand). Every real numbered
  procedure in chapters 4 and 5 involves the touchscreen app; there is no
  case here of a genuine procedure excluded from both record kinds for lack
  of a menu path or figure.
- **Materiality-filter exclusions (descriptive, no real steps or path) —
  named explicitly**: §4.2's own three-sentence intro; §4.4 (whole
  section); §4.11's intro plus "Checks before/during/after installation"
  and "Troubleshoot a HART loop"; §5.2's own intro/Notes; §5.3's intro and
  both data tables; §5.8 (whole section, its real functions live in §5.9
  and §5.10); §5.11's intro, frequency table, and "How noise affects the
  fieldbus segment"; §5.12's own intro; §5.13's intro, "File type,"
  "Creating trends/reports," and all of §5.13.1 "Log file overview"
  (including its four named sub-topics); §5.14's intro and Note (duplicate
  of §5.10, see below).
- **Duplicate-content finding**: §5.14's intro/Note describes the same
  press-and-hold-for-Help function already fully catalogued as
  `amstrex-cmp-view-help-fieldbus-measurement` (§5.10) — not re-recorded,
  matching the ch2 precedent of citing one function once even when the
  source explains it more than once.
- **Grain/consolidation judgment calls, flagged for confirmation**:
  - §4.3's three thin bold-heading sub-functions ("Power a transmitter,"
    "Power a positioner," "Simulate a transmitter with 4 mA") were **not**
    given their own navPath records, since their full teaching content is
    covered by later complete numbered procedures (§4.6–§4.9, §4.11.4) —
    only "Disable power to a device" (which has no later fuller section)
    was cataloged from §4.3 itself. This is the same "don't duplicate
    teaching content already carried by another record" reasoning ch2 used
    for `amstrex-cmp-view-remaining-power-charge`, applied here to navPath-
    to-navPath overlap rather than navPath-to-figure overlap — worth
    confirming this extension is the right call.
  - The three Section 5.3 "Default status labels" diagrams (DC voltage,
    noise, signal — pp. 156–157) were cataloged as **three separate**
    records rather than bundled into one, on the reasoning that each has
    its own bold heading and illustrates a distinct measurement's own
    numeric thresholds — a real difference from the ch2 gesture-icon
    legend precedent (one continuous table with no per-item headings,
    bundled as one record). This is the first time this exact pattern
    (several short, separately-headed, thematically-related unnumbered
    diagrams appearing consecutively) has come up — flagged for
    confirmation, since a future pass could reasonably read it the other
    way.
- **No duplicate figure numbers and no source citation errors found**
  among Figures 4-1 through 4-20 or 5-1 through 5-11. One real double-"A"
  callout labeling on Figures 5-4 and 5-6 (one A for a device-level
  terminator, a separate A–D set for the host-wiring block) was confirmed
  directly as intentional dual labeling within one drawing, not an error.
- **Table-exclusion confirmation**: Chapter 4 has no separately-numbered
  "Table N" content at all. Chapter 5's real data tables (the GOOD/BAD/
  CHECK/INACTIVE status table, the fieldbus-signal-status-note table, the
  Logging option table, and the full §5.14 symptom/cause/action
  troubleshooting table spanning pp. 175–178) are all genuinely unnumbered
  prose/reference tables, never printed as "Figure N" or "Table N" — none
  were excluded as tables because none were ever figure-numbered content
  to begin with, and the large §5.14 troubleshooting table is confirmed the
  same shape as Appendix A's (out-of-scope) troubleshooting table.
- **Cross-reference findings**: ran the whole-library collision sweep
  before starting this pass (`grep -h "^id: " "20 - Source Library"/
  Component Index*.md | sort | uniq -d`) — baseline showed the same two
  pre-existing, unrelated collisions already logged in chapter 2's own
  Open Items (`ogas-cmp-amine-treatment-unit`, `ogas-cmp-compressor-system`
  in the Oil & Gas Sourcebook) plus the same Process & Standards
  schema-template false positive; neither is this pass's concern.
  `Component Index — AMS Trex User Guide ch3.md` did not exist at the start
  of this pass (only chapter 2's 58 ids were in the baseline) but landed
  before this pass's closing sweep — the final collision sweep (run after
  this file was complete) covers all three AMS Trex files together and
  confirmed zero overlap between this file's 63 ids and chapter 3's 72,
  as expected since chapters 4/5 cover entirely different functions
  (Loop/Fieldbus Diagnostics vs. the HART Field Communicator application).
- **Collision sweep, after this pass**: re-ran the same sweep — clean; no
  new collisions introduced by this file's 63 ids.
- **Archive/legacy material**: none consulted, none needed — Rev 8
  (February 2023) is a first-party current-edition document and the sole
  source for this file.
- **Source Library.md coverage table**: this file's own coverage row is
  added below as the closing step of this pass. Chapter 2's 58 components
  were not yet reflected in that table when this pass started (a
  pre-existing gap, not caused by this pass) — added along with this file's
  row so the table matches real state for both AMS Trex files currently in
  the library.
