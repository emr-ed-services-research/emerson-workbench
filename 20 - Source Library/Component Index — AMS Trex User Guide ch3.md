---
title: Component Index — AMS Trex User Guide ch3
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
chapter: "3 — Field Communicator application"
updated: 2026-09-13
---

# Component Index — AMS Trex User Guide ch3

Standing full-chapter pass, chapter 3 only ("Field Communicator application,"
the HART/FOUNDATION fieldbus communicator app — the largest and densest
chapter in the document). Numbered-chapter file convention, matching chapter
2's file and confirmed for this document in `Component Index — Process &
Standards.md`. This is a mixed-kind file: genuine hardware/electrical
reference diagrams and genuine data-visualization figures are catalogued as
`kind: figure`; the chapter's many app-navigation and configuration
procedures are catalogued as `kind: navPath`, per the software-documentation
convention added 2026-09-24, applied here for the first time on the chapter
it was written against.

**Rigor**: every one of the 72 pages in range (PDF/printed pp. 53–124,
confirmed zero page offset — printed page number = PDF page number exactly)
was rendered at 150dpi via the local Poppler and read directly. Chapter
boundary confirmed directly: p.53 renders "3 Field Communicator application"
(this chapter's own opening page); p.124 renders as a genuinely blank
trailing page (header/footer only, no body content) between the end of this
chapter's real content (p.123, §3.27 "Disconnect a device") and chapter 4's
start (p.125, out of scope for this file — chapters 4–5 are being indexed
separately) — the same "blank trailing page before the next chapter" shape
already noted as a recurring edge case in `Component Index — Process &
Standards.md` and confirmed at this document's own ch2/ch3 boundary.

**Document id**: reuses the finding already confirmed in ch2 — this PDF
prints no document/part number anywhere; it identifies itself only as "AMS
Trex™ Device Communicator User Guide, Rev 8, February 2023." Not re-verified
against the cover page a second time in this pass since it is the same PDF
file already checked directly.

**The device-dependent-menu finding governs this entire chapter's
`path`/`action` wording.** Confirmed directly at its source: §3.14.2 "Device
Setup options" states plainly that "Some devices may not display a Device
Setup menu or it may display different options... The diagnostics and
service operations that are available vary widely from device to device and
are defined in the device description" (p.88–89). The Field Communicator
application's entire online-device menu structure — Online menu vs. Device
Dashboard (§3.8), the Device Setup/Basic Setup/Detailed Setup/Review menus
(§3.14.2), FOUNDATION fieldbus block menus (§3.21.2) — is generated per
connected instrument's Device Description (DD), not a fixed menu tree. Every
`navPath` record below is worded at the function level ("go to the parameter
you want to change," "tap the desired block") rather than as a literal,
universally-true click sequence, exactly per the standing convention — a
concrete example is `amstrex-cmp-change-hart-parameter`'s `action`, which
says "go to the parameter you want to change... each device has different
menus" rather than naming a specific menu path, because the source itself
says so at that exact point.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **AMS Trex Device Communicator User Guide** | Rev 8 · February 2023 · no document/part number printed anywhere in the PDF (confirmed directly in the ch2 pass) | `current` | First-party Emerson document; sole source for this file's records. |

## Components

### Section 3.1 — Open or close the Field Communicator application (printed p. 53)

```yaml
id: amstrex-cmp-open-close-field-communicator
kind: navPath
teaches: >
  How to open the Field Communicator application from the Home screen
  (triggering Auto-Detect, which falls through to the Connect - Select
  screen if it can't find a device) and how to close it back out to the
  Home screen.
concept-tags: [AMS Trex, Field Communicator, open application, close application, Auto-Detect]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.1 'Open or close the Field Communicator application,' p. 53"
path: [Home screen, Field Communicator icon]
action: >
  Tap the Field Communicator icon on the Home screen to open the
  application; the Auto-Detect screen displays while it tries to find a
  connected device, falling through to the Connect - Select screen if
  Cancel is tapped or no device is found. To close the application, tap
  Exit if the Connect - Select screen is displayed, otherwise tap Back
  repeatedly until that screen is displayed.
used-by: []
notes: Real steps confirmed directly.
```

### Section 3.2 — Device interoperability (printed p. 54)

No components. Descriptive paragraph about EDDL technology and device
description testing/availability — no real steps, no figure.

### Section 3.3 — Forward Compatibility rules for saving and sending configurations to AMS Trex (printed p. 54)

No components. A rules list (device description must match device
type/revision to edit or send a configuration) — descriptive constraints,
not a navigable procedure — excluded under the materiality filter.

### Section 3.4 — Automatically detect a device (printed pp. 54–55)

No components. §3.4 itself and §3.4.1 "Automatically connect to a HART
device" are both descriptive explanations of an automatic behavior, not a
user-performed procedure — excluded under the materiality filter. §3.4.1
names the real underlying setting ("ensure the Auto-Connect option is
enabled: Settings → Field Communicator App Settings → Auto-Connect") but
this is the same function already catalogued in ch2 as
`amstrex-cmp-enable-disable-hart-autoconnect` (§2.10.13) — cross-referenced
here rather than duplicated, per the cross-reference-before-minting rule.

### Section 3.5 — Connect - Select screen (printed pp. 55–57)

No components. Figure 3-1 (the Connect - Select screen itself) and the
option table describing Power Status / Communication Status / HART / HART
Offline / Fieldbus / Fieldbus Offline are a pure UI reference screen with no
procedure of its own — each of those buttons is the entry point into a
separately-catalogued procedure elsewhere in this file (the device
connection wizard's own connect procedures, the offline-config records,
etc.). Per the navPath convention's own reasoning ("a screenshot proves a
screen exists; it doesn't teach the skill"), this reference screenshot is
not catalogued as `kind: figure` — see the judgment call recorded in Open
Items about which figures fall on which side of that line in this chapter.

### Section 3.6 — Device connection wizard (printed pp. 57–58)

No components. Descriptive explanation of the wizard's possible questions
and its wiring-problem detection behavior ("Problems the device connection
wizard can detect") — no numbered procedure of its own; the wizard's real
answer sequences are captured inline in the wiring-diagram figures below
(the "Device connection wizard prompts / Answer" tables under each Figure
3-11–3-22) and in the connect procedures (§3.12, §3.13, §3.19, §3.20).

### Section 3.7 — Status when detecting a device (printed pp. 58–60)

No components. A reference table of Power Status / Communication Status
messages — descriptive, no steps, no figure.

### Section 3.8 — Online menu or Device Dashboard (printed pp. 60–66)

No components. §3.8 (Figures 3-2, 3-3: Online menu / Dashboard menu
examples), §3.8.1 "Device screen layout" (Figure 3-4: sections of a device
screen), §3.8.2 "Application bar" (Figure 3-5: example application bar),
and §3.8.3 "Menu screen" (Figures 3-6, 3-7: Menu screen with/without a
connected device) are all pure UI reference screenshots and option tables
describing screen layout — no procedure of its own in any of the four
subsections. Every real function these screens expose (Connect/Disconnect,
Favorites, Save/Send Config, Offline Config, Simulate) is separately
catalogued as its own navPath record elsewhere in this file. Excluded from
`kind: figure` for the same reason as §3.5 above — see Open Items.

### Section 3.9 — Icons on the device menus (printed pp. 67–69)

```yaml
id: amstrex-cmp-device-menu-icons-legend
kind: figure
teaches: >
  The full set of icons that can appear on a device menu and what each
  means: pencil (editable parameter), method/wand (device method, e.g. a
  loop test), submenu arrow, chart, gauge chart, grid, image, and no-icon
  (a plain process variable). This is the icon legend a learner needs to
  read any connected device's menu correctly, regardless of which specific
  device is attached.
concept-tags: [AMS Trex, device menu, icons, legend, parameters, methods]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-8 'Device menu with icons,' pp. 68–69"
delivery: screen capture
used-by: []
notes: >
  Judgment call, flagged: this is a genuinely numbered figure (unlike ch2's
  gesture legend, which was unnumbered) but is otherwise the same shape of
  content as `amstrex-cmp-supported-gestures-legend` — a small icon-glyph
  reference table, not a screen-navigation procedure — so it is catalogued
  as `kind: figure` rather than excluded under the general "no plain menu
  screenshots" reasoning applied to §3.5/§3.8's screens. All seven icon
  meanings (edit, method, submenu, chart, gauge, grid, image) plus "no
  icon" confirmed directly against the rendered pages.
mediaStatus: unreviewed
```

### Section 3.10 — Connections to HART devices (printed pp. 69–81)

```yaml
id: amstrex-cmp-hart-comm-terminals-communicator
kind: figure
teaches: >
  The HART communication terminal on the base Device Communicator module,
  used to communicate with an externally-powered HART device — the module
  cannot power a device.
concept-tags: [AMS Trex, HART, communication terminals, Device Communicator module]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-9 'HART communication terminals on the Device Communicator communication module,' p. 69 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cross-reference: this is the same physical module photographed for ch2's
  `amstrex-cmp-device-communicator-module` (Figure 2-4), but re-cropped/
  re-annotated to show only the HART terminal (callout A) rather than
  Figure 2-4's two callouts covering both FF and HART — the narrower,
  HART-specific teaching point this section needs. Not a duplicate to
  skip; the two records serve different teaching purposes (general module
  overview vs. this section's HART-specific terminal identification).
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-hart-comm-terminals-communicator-plus
kind: figure
teaches: >
  The two HART-related terminals on the Device Communicator Plus module:
  HART+pwr (power and communicate) and HART (communicate with an
  externally-powered device only).
concept-tags: [AMS Trex, HART, communication terminals, Device Communicator Plus]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-10 'HART communication terminals on the Device Communicator Plus communication module,' p. 70 — callouts A–B"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same cross-reference pattern as `amstrex-cmp-hart-comm-terminals-communicator`
  above, this time against ch2's `amstrex-cmp-device-communicator-plus-module`
  (Figure 2-5, five callouts covering FF and HART together) — this figure
  re-crops/re-annotates the same module photo down to just the two
  HART-relevant terminals for this section's narrower purpose.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-2wire-hart-trex-powered
kind: figure
teaches: >
  The wiring diagram for the Trex unit powering a 2-wire HART transmitter
  directly (HART+pwr terminals), the baseline connection scenario — plus
  the device connection wizard's three prompts and answers for this exact
  wiring (provide power: Yes; transmitter/positioner: Transmitter; change
  polling: only if not at address zero).
concept-tags: [AMS Trex, HART, wiring diagram, 2-wire transmitter, Trex-powered, device connection wizard]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-11 'Power and connect to a 2-wire HART transmitter,' p. 71"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption and wizard-prompt table confirmed directly. See Open Items
  for a general note on this section's reuse of a small set of base wiring
  illustrations (this same transmitter/cable artwork recurs, differently
  captioned, as Figures 3-24 and 3-27).
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-wirelesshart-battery-powered
kind: figure
teaches: >
  The wiring diagram for connecting to a powered WirelessHART device with
  its own battery attached — the Trex unit must NOT power this device
  (battery already supplies it) — plus the wizard prompts/answers for this
  scenario.
concept-tags: [AMS Trex, WirelessHART, wiring diagram, battery-powered, device connection wizard]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-12 'Connect to a powered WirelessHART device (with its battery attached),' p. 72"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption, caution, and wizard-prompt table confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-ext-powered-2wire-hart
kind: figure
teaches: >
  The wiring diagram for connecting to an externally-powered 2-wire HART
  transmitter (Trex does not provide power) — plus the wizard
  prompts/answers, and the note that address-zero devices may auto-connect
  without wizard prompts at all.
concept-tags: [AMS Trex, HART, wiring diagram, 2-wire transmitter, externally-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-13 'Connect to an externally-powered 2-wire HART transmitter,' p. 72 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption, callout (A. Voltage source), and wizard-prompt table confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-ext-powered-2wire-hart-resistor
kind: figure
teaches: >
  The wiring diagram for connecting to an externally-powered 2-wire HART
  transmitter while enabling the Trex unit's internal resistor (device
  connected in series) — plus the wizard prompts/answers, including the
  "increase loop resistance" prompt this scenario specifically triggers.
concept-tags: [AMS Trex, HART, wiring diagram, internal resistor, 2-wire transmitter]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-14 'Connect to an externally-powered 2-wire HART transmitter and use the Trex internal resistor,' p. 73 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption, callout (A. Voltage source), 25V DC ceiling note, and
  wizard-prompt table confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-4wire-hart-transmitter
kind: figure
teaches: >
  The wiring diagram for connecting to a 4-wire HART transmitter, including
  the option of an external 250 Ohm resistor vs. enabling the Trex
  internal resistor — plus the wizard prompts/answers.
concept-tags: [AMS Trex, HART, wiring diagram, 4-wire transmitter, internal resistor]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-15 'Connect to a 4-wire HART transmitter,' p. 73 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption, callout (A. Voltage source), and wizard-prompt table confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-hart-positioner-trex-powered
kind: figure
teaches: >
  The wiring diagram for the Trex unit powering a HART positioner directly
  — plus the wizard prompts/answers, including the positioner-specific
  "increase loop current" prompt (4 mA default, only offered for
  positioners).
concept-tags: [AMS Trex, HART, wiring diagram, positioner, Trex-powered, loop current]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-16 'Power and connect to a HART positioner,' p. 74"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and wizard-prompt table confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-ext-powered-hart-positioner
kind: figure
teaches: >
  The wiring diagram for connecting to an externally-powered HART
  positioner (current source) — plus the wizard prompts/answers.
concept-tags: [AMS Trex, HART, wiring diagram, positioner, externally-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-17 'Connect to an externally-powered HART positioner,' p. 75 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption, callout (A. Current source), and wizard-prompt table confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-thum-250ohm-no-device
kind: figure
teaches: >
  The wiring diagram for powering a Smart Wireless THUM adapter with no
  HART device attached, using a 250 Ohm resistor, connected to the red/
  black wires — plus the wizard prompts/answers, including selecting
  Positioner specifically because of the lower resistor value.
concept-tags: [AMS Trex, THUM adapter, wiring diagram, WirelessHART, resistor]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-18 'Power the THUM adapter without a device attached and use 250 Ohm resistor,' p. 76"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and wizard-prompt table confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-thum-trex-powered-transmitter
kind: figure
teaches: >
  The wiring diagram for the Trex unit powering the THUM adapter while it
  is attached to a HART transmitter — plus the wizard prompts/answers
  (including the polling-address options for THUM, device, or both).
concept-tags: [AMS Trex, THUM adapter, wiring diagram, HART transmitter, Trex-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-19 'Power and communicate with the THUM adapter attached to a HART transmitter,' p. 77"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption, Auto-Connect note, and wizard-prompt table confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-thum-powered-transmitter
kind: figure
teaches: >
  The wiring diagram for communicating with a THUM adapter attached to an
  already-powered HART transmitter (Trex does not power it), connected via
  the yellow/white wires — plus the wizard prompts/answers.
concept-tags: [AMS Trex, THUM adapter, wiring diagram, HART transmitter, externally-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-20 'Communicate with the THUM adapter attached to a powered HART transmitter,' p. 78 — callouts A–B"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption and both callouts (A. Optional connection if yellow/white
  wires are inaccessible; B. Voltage source) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-thum-voltage-source
kind: figure
teaches: >
  The wiring diagram for communicating with a standalone THUM adapter
  powered by a voltage source (1200 Ohm resistor), connected via the
  yellow and white/black wires — plus the wizard prompts/answers.
concept-tags: [AMS Trex, THUM adapter, wiring diagram, voltage source]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-21 'Communicate with the THUM adapter powered by a voltage source,' p. 79 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption, callout (A. Voltage source), and wizard-prompt table confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-thum-current-source
kind: figure
teaches: >
  The wiring diagram for communicating with a standalone THUM adapter
  powered by a current source (optional 250 Ohm resistor to verify
  current), connected via the yellow and white/black wires — plus the
  wizard prompts/answers.
concept-tags: [AMS Trex, THUM adapter, wiring diagram, current source]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-22 'Communicate with the THUM adapter powered by a current source,' p. 79 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption, callout (A. Current source), and wizard-prompt table
  confirmed directly. Last of the twelve HART/THUM wiring-diagram figures
  spanning §3.10.2–3.10.3.
mediaStatus: unreviewed
```

§3.10.4 "HART Device List" (Figure 3-23, p.80) is a plain device-list
screenshot with a two-sentence descriptive procedure ("tap a device to
connect," "tap My Device Not Found to change polling options") — excluded
under the materiality filter (no distinct steps of its own; the polling
change it points to is `amstrex-cmp-set-hart-polling-options`, §3.17.1,
catalogued below).

### Section 3.11 — Internal resistors (printed pp. 81–84)

```yaml
id: amstrex-cmp-wiring-internal-resistor-trex-powered
kind: figure
teaches: >
  The wiring diagram showing how the Trex unit's internal 167 Ohm resistor
  is enabled when the Trex unit itself powers the transmitter (HART+pwr
  terminals) — the reference diagram for §3.11's own conceptual
  explanation, distinct from the numbered procedure in §3.11.1 below.
concept-tags: [AMS Trex, internal resistor, wiring diagram, Trex-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-24 'Connection for using the Trex internal resistor when the Trex unit powers the transmitter,' p. 81"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption confirmed directly. Visually near-identical base artwork to
  Figure 3-11 (same 2-wire-transmitter illustration, different caption
  emphasis) — see the general reused-artwork note in Open Items.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-internal-resistor-ext-powered-2wire
kind: figure
teaches: >
  The wiring diagram for enabling the Trex internal resistor on an
  externally-powered 2-wire transmitter — the Trex unit must be connected
  in series with the device.
concept-tags: [AMS Trex, internal resistor, wiring diagram, 2-wire transmitter, externally-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-25 'Connection for using the Trex internal resistor for an externally-powered 2-wire transmitter,' p. 82 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Voltage source) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-internal-resistor-4wire
kind: figure
teaches: >
  The wiring diagram for enabling the Trex internal resistor on a 4-wire
  transmitter — the Trex unit must be connected in parallel, the opposite
  topology from the 2-wire case.
concept-tags: [AMS Trex, internal resistor, wiring diagram, 4-wire transmitter]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-26 'Connection for using the internal resistor for a 4-wire transmitter,' p. 82 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Voltage source) confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-enable-disable-internal-resistor-hart
kind: navPath
teaches: >
  How to enable the Trex unit's internal resistor for a HART transmitter —
  automatically applied when the Trex unit powers a 2-wire transmitter, or
  selected via the device connection wizard's "increase loop resistance"
  prompt when connected to an externally-powered transmitter — and how to
  disable it (disconnect the device or close the application).
concept-tags: [AMS Trex, internal resistor, HART, device connection wizard]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.11.1 'Enable or disable the internal resistors,' pp. 82–84"
path: [Field Communicator, HART, device connection wizard]
action: >
  To power a 2-wire transmitter and get the resistor automatically: connect
  the lead set to the HART+pwr terminals, tap HART, tap Yes to provide
  power, tap Transmitter — the Trex unit applies the internal resistor
  automatically. To enable it on an externally-powered 2-wire (or 4-wire,
  connected in parallel) transmitter: connect the lead set to the HART
  terminals in series, tap HART, tap No to power, tap Transmitter, tap No
  to polling (assumes address zero), then tap Yes to "increase loop
  resistance" and Next. To disable the resistor, disconnect the device or
  close the Field Communicator application.
used-by: []
notes: >
  Real steps confirmed directly, including the embedded wiring
  illustrations for each sub-case (Figures 3-27 and 3-28, catalogued below
  as their own figure records since they are genuine wiring diagrams, not
  UI screenshots, per the chapter-wide figure/navPath split explained in
  Open Items).
```

```yaml
id: amstrex-cmp-wiring-provide-power-2wire-procedure
kind: figure
teaches: >
  The wiring diagram illustrating step 1a of the "enable the internal
  resistor" procedure: connecting the lead set to the HART+pwr terminals
  to power a 2-wire HART transmitter.
concept-tags: [AMS Trex, internal resistor, wiring diagram, 2-wire transmitter, Trex-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-27 'Connection for providing power to a 2-wire HART transmitter,' p. 83"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption confirmed directly. This is the same base transmitter/cable
  artwork as Figures 3-11 and 3-24, reused a third time as a procedure-step
  illustration within `amstrex-cmp-enable-disable-internal-resistor-hart`
  — see Open Items.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-ext-powered-2wire-procedure
kind: figure
teaches: >
  The wiring diagram illustrating step 2a of the "enable the internal
  resistor" procedure: connecting the lead set to the HART terminals
  in-series with an externally-powered 2-wire transmitter.
concept-tags: [AMS Trex, internal resistor, wiring diagram, 2-wire transmitter, externally-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-28 'Connection for an externally-powered 2-wire transmitter,' p. 84 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. Voltage source) confirmed directly.
mediaStatus: unreviewed
```

### Section 3.12 — Power and connect to a HART device (printed pp. 84–86)

```yaml
id: amstrex-cmp-power-connect-hart-device
kind: navPath
teaches: >
  How to power and connect to a HART transmitter or positioner directly
  from the Trex unit (Device Communicator Plus module required, up to 16V
  at 22.5 mA) — the Trex unit refuses to power an already externally-
  powered device to protect itself.
concept-tags: [AMS Trex, HART, power device, Device Communicator Plus, transmitter, positioner]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.12 'Power and connect to a HART device,' pp. 84–85"
path: [Field Communicator, HART]
action: >
  Connect the lead set to the HART+pwr terminals on the Trex unit and the
  device's communication terminals, tap HART, tap Yes when asked if the
  Trex unit should power the device, tap Transmitter or Positioner (a
  positioner gets 4 mA initially), then follow any additional prompts
  (e.g. reviewing the polling address or increasing current for a
  positioner that doesn't initially communicate).
used-by: []
notes: >
  Real steps confirmed directly, including the CAUTION (never connect Trex
  to a 4-wire device's power terminals — can blow a fuse) and WARNING
  (never externally power a device the Trex unit is already powering).
  Figures 3-29 and 3-30 (wiring diagrams for the transmitter/positioner
  cases) catalogued below as their own figure records.
```

```yaml
id: amstrex-cmp-wiring-power-hart-transmitter-procedure
kind: figure
teaches: >
  The wiring diagram for the "power and connect to a HART device" procedure's
  transmitter case: connecting the lead set to the HART+pwr terminals and
  the device's communication terminals.
concept-tags: [AMS Trex, HART, wiring diagram, transmitter, Trex-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-29 'Power a HART transmitter,' p. 84"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-power-hart-positioner-procedure
kind: figure
teaches: >
  The wiring diagram for the "power and connect to a HART device"
  procedure's positioner case.
concept-tags: [AMS Trex, HART, wiring diagram, positioner, Trex-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-30 'Power a HART positioner,' p. 85"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-power-connect-thum-adapter
kind: navPath
teaches: >
  How to power and connect to a Smart Wireless THUM adapter directly from
  the Trex unit — the Device Communicator Plus module is required, and the
  THUM adapter can be powered whether or not it's attached to a HART
  device.
concept-tags: [AMS Trex, THUM adapter, power device, Device Communicator Plus]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.12.1 'Power and connect to a Smart Wireless THUM adapter,' pp. 85–86"
path: [Field Communicator, HART]
action: >
  Connect the lead set to the HART+pwr terminals on the Trex unit and the
  red/black wires on the THUM adapter, tap HART, tap Yes to provide power,
  tap Positioner, change the polling address to 63 when prompted, then
  follow any additional prompts. The device menu displays once connected.
used-by: []
notes: >
  Real steps confirmed directly. Figure 3-31 (THUM adapter wiring with 250
  Ohm resistor) catalogued below as its own figure record.
```

```yaml
id: amstrex-cmp-wiring-thum-250ohm-procedure
kind: figure
teaches: >
  The wiring diagram for the "power and connect to a Smart Wireless THUM
  adapter" procedure: the lead set connected to the Trex unit's HART+pwr
  terminals and the THUM adapter's red/black wires via a 250 Ohm resistor.
concept-tags: [AMS Trex, THUM adapter, wiring diagram, Trex-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-31 'THUM adapter wiring with 250 Ohm resistor,' p. 86"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

### Section 3.13 — Connect to an externally-powered HART device (printed pp. 86–87)

```yaml
id: amstrex-cmp-connect-externally-powered-hart-device
kind: navPath
teaches: >
  How to connect to an externally-powered HART transmitter or positioner
  when auto-detect/auto-connect doesn't complete the connection on its
  own, and how to disconnect afterward.
concept-tags: [AMS Trex, HART, externally-powered, connect device, disconnect device]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.13 'Connect to an externally-powered HART device,' pp. 86–87"
path: [Field Communicator, HART]
action: >
  Connect the lead set to the HART terminals on the Trex unit and the
  device's communication terminals (in series to use the internal
  resistor), open the Field Communicator application, and if it doesn't
  auto-connect, tap HART, tap No to power, select Transmitter or
  Positioner, follow any additional prompts, then tap the device on the
  Device List. To disconnect, tap Menu → Disconnect or remove the lead set.
used-by: []
notes: Real steps confirmed directly.
```

### Section 3.14 — Online HART devices (printed pp. 88–93)

```yaml
id: amstrex-cmp-hart-status-icons-legend
kind: figure
teaches: >
  The four status-bar icons shown while communicating with a HART device
  and what each means: live/online, burst mode, shout/deaf mode (noisy
  loop), and shout/deaf + burst combined.
concept-tags: [AMS Trex, HART, status bar, icons, burst mode, shout/deaf mode]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Unnumbered diagram, p. 88 — Section 3.14.1 'HART icons' icon table, 4 illustrated status icons, no figure number printed"
delivery: screen capture
used-by: []
notes: >
  Real, genuinely illustrated content (4 distinct heart-shaped status
  icons) with no printed figure number, confirmed by direct visual
  inspection — same synthetic-locator treatment as the standing
  unnumbered-diagram convention, and the same "small icon-glyph legend"
  reasoning as `amstrex-cmp-device-menu-icons-legend` above.
mediaStatus: unreviewed
```

§3.14.2 "Device Setup options" (pp. 88–89) is the section that establishes
this chapter's device-dependent-menu finding (see the intro paragraph
above) — a descriptive overview of the Device Setup menu's typical
sub-areas (Process Variables, Diagnostics and Service, Basic Setup,
Detailed Setup, Review), explicitly stated to vary by device — no numbered
steps of its own, excluded under the materiality filter.

§3.14.3 "Changing device parameters" (p. 90) is a one-paragraph explanation
of the yellow-highlight convention for unsent changes, illustrated by
Figure 3-32 (a UI screenshot, excluded from `kind: figure` per this
chapter's screenshot/navPath split — see Open Items) — no steps of its own;
the real step-by-step procedure is §3.14.4 below.

```yaml
id: amstrex-cmp-change-hart-parameter
kind: navPath
teaches: >
  How to change one or more HART device parameters and send the changes to
  the device, including the review/discard/cancel decision before sending.
concept-tags: [AMS Trex, HART, change parameter, send configuration]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.14.4 'Change a HART device parameter,' pp. 90–91"
path: [Connected HART device, parameter menu]
action: >
  Connect to the HART device, go to the parameter you want to change (each
  device has different menus — see the device documentation), make the
  change (highlighted yellow), tap OK, tap the Send icon, review the list
  of changes (Discard to undo and close, Cancel to keep for later), then
  tap Send to transmit the change — the yellow highlight clears once sent.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-edit-hart-configuration
kind: navPath
teaches: >
  How to edit an existing offline HART configuration on the Trex unit —
  sort/select the saved file, edit and mark parameters for writing, then
  save (optionally under a new name).
concept-tags: [AMS Trex, HART, offline configuration, edit, Offline Config]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.14.5 'Edit a HART configuration,' p. 91 — identical
      procedure text repeated verbatim as Section 3.15.2 'Edit a HART
      configuration,' pp. 94–95"
path: [Field Communicator, HART Offline, Offline Config, Edit Existing]
action: >
  Tap HART Offline, tap Offline Config → Edit Existing, sort by File Name
  or Tag and select the configuration, tap OK, select and edit the
  parameters, tap the checkbox to mark each for writing (unmarked
  parameters save but don't transmit), tap Save, optionally enter a new
  configuration name, then tap OK.
used-by: []
notes: >
  Duplicate-content finding, flagged: the source prints this exact
  eight-step procedure twice, verbatim, under two different numbered
  subsections (§3.14.5, nested under "Online HART devices," and §3.15.2,
  nested under "Offline HART configurations" — the source's own filing of
  this procedure under "Online" is itself a slightly odd placement, since
  the procedure is entirely an offline-config operation reached via HART
  Offline). Catalogued as ONE record citing both locators, matching the
  established `amstrex-cmp-close-application` precedent from ch2 (§2.10.2 /
  §2.11.2) rather than as two identical records.
```

```yaml
id: amstrex-cmp-display-hart-tag
kind: navPath
teaches: >
  How to switch the displayed HART device tag between the short tag and
  long tag for HART revision 6+ devices (revision 7 devices default to the
  long tag; the option doesn't display for earlier devices, and the
  selection isn't retained between connections).
concept-tags: [AMS Trex, HART, short tag, long tag, device tag]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.14.6 'Display the HART short tag or long tag,' pp. 91–92"
path: [Connected HART device, application title bar]
action: >
  Connect to the HART device, tap the tag displayed at the top of the
  screen, then select Tag or Long Tag from the menu that appears — the
  displayed tag changes immediately.
used-by: []
notes: >
  **Critical correction to a standing precedent doc claim, flagged
  prominently**: `Component Index — Process & Standards.md` cites this
  exact section (§3.14.6) as "one descriptive paragraph, no real steps" and
  uses it as the standing example of a materiality-filter exclusion.
  Rendering and reading the actual page (p.92) directly shows this is
  WRONG — §3.14.6 has a genuine three-step numbered Procedure with its own
  figure (Figure 3-33, "Tap the device tag"), confirmed by direct visual
  inspection, not inferred from text extraction. This is caught by the
  standing rigor rule ("render and look, don't trust extraction alone") in
  exactly the way the Control Valve Handbook ch4 caption-numbering
  precedent describes — a written-down precedent claim was itself wrong,
  and only the rendered page settled it. Included as a real navPath record
  per what was actually confirmed on the page, not per the doc's stated
  precedent. **The Process & Standards doc's own citation of this section
  needs a correction pass** — flagged here rather than silently worked
  around; see Open Items.
```

```yaml
id: amstrex-cmp-view-hart-alerts
kind: navPath
teaches: >
  How to view a connected HART device's active alerts via the Alerts
  button at the top of the screen.
concept-tags: [AMS Trex, HART, alerts, device status]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.14.7 'View device alerts,' p. 93"
path: [Connected HART device, Alerts]
action: >
  Connect to the HART device, tap Alerts at the top of the screen if the
  device has alerts, view the list, then tap OK.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-send-hart-configuration
kind: navPath
teaches: >
  How to send a previously-saved configuration to a connected HART device
  (requires at least one saved configuration for the connected device
  type).
concept-tags: [AMS Trex, HART, send configuration, Menu tab]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.14.8 'Send a configuration to a connected HART device,' p. 93"
path: [Connected HART device, Menu, Send Config]
action: >
  Connect to the HART device, tap the Menu tab in the application bar, tap
  Send Config, select a saved configuration, tap OK, review the
  parameters, then tap Send.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-save-hart-configuration
kind: navPath
teaches: >
  How to save a copy of a connected HART device's configuration to the
  Trex unit (non-dynamic parameters only).
concept-tags: [AMS Trex, HART, save configuration, Menu tab]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.14.9 'Save a configuration from a HART device,' p. 93"
path: [Connected HART device, Menu, Save Config]
action: >
  Connect to the HART device, tap the Menu tab, tap Save Config, enter a
  filename, then tap OK — the configuration saves to the Trex unit.
used-by: []
notes: Real steps confirmed directly.
```

### Section 3.15 — Offline HART configurations (printed pp. 94–96)

```yaml
id: amstrex-cmp-create-hart-configuration
kind: navPath
teaches: >
  How to create a brand-new offline HART configuration for a specific
  device type and revision, so it can later be applied to multiple
  physical devices of that type.
concept-tags: [AMS Trex, HART, offline configuration, create, Offline Config]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.15.1 'Create a HART configuration,' p. 94"
path: [Field Communicator, HART Offline, Offline Config, New]
action: >
  Tap HART Offline, tap Offline Config → New, tap a manufacturer, device
  type, and device revision, tap OK, select and edit the necessary
  parameters, tap OK to mark each for writing, tap Save, then enter a name
  for the configuration and tap OK.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-copy-hart-configuration
kind: navPath
teaches: How to create a copy of a saved offline HART configuration under a new name.
concept-tags: [AMS Trex, HART, offline configuration, copy, Offline Config]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.15.3 'Copy a HART configuration,' p. 95"
path: [Field Communicator, HART Offline, Offline Config, Copy]
action: >
  Tap HART Offline, tap Offline Config → Copy, select the configuration to
  copy, tap OK, enter a name for the new copy, tap OK, then tap OK again
  to confirm — the copy saves to the Trex unit.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-rename-hart-configuration
kind: navPath
teaches: How to rename a saved offline HART configuration.
concept-tags: [AMS Trex, HART, offline configuration, rename, Offline Config]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.15.4 'Rename a HART configuration,' p. 95"
path: [Field Communicator, HART Offline, Offline Config, Rename]
action: >
  Tap HART Offline, tap Offline Config → Rename, select the file, tap OK,
  enter a new name, tap OK, then tap OK again to confirm the rename.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-delete-hart-configuration
kind: navPath
teaches: How to delete a saved offline HART configuration.
concept-tags: [AMS Trex, HART, offline configuration, delete, Offline Config]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.15.5 'Delete a HART configuration,' pp. 95–96"
path: [Field Communicator, HART Offline, Offline Config, Delete]
action: >
  Tap HART Offline, tap Offline Config → Delete, select the file, tap OK,
  then tap OK again to confirm the deletion.
used-by: []
notes: Real steps confirmed directly. Last of the five offline-HART-configuration functions.
```

### Section 3.16 — Favorites (printed pp. 96–98)

```yaml
id: amstrex-cmp-open-favorite-hart
kind: navPath
teaches: >
  How to open a saved favorite menu item for quick access on a connected
  HART device (HART only — not supported for FOUNDATION fieldbus).
concept-tags: [AMS Trex, HART, favorites, quick access]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.16.1 'Open a menu item from the favorites list,' p. 96"
path: [Connected HART device, Menu, Favorites]
action: Connect to a HART device, tap Menu → Favorites, then tap a saved favorite to open that menu item.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-add-favorite-hart
kind: navPath
teaches: How to add a HART device menu item (menu, method, or variable) to the favorites list.
concept-tags: [AMS Trex, HART, favorites, add favorite]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.16.2 'Add a menu item to the favorites list,' pp. 96–97"
path: [Connected HART device, menu item, Add To Favorites]
action: >
  Connect to a HART device, go to the menu item to add, press it for 2
  seconds until a context menu appears, tap Add To Favorites, then
  optionally verify via Menu → Favorites.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-remove-favorite-hart
kind: navPath
teaches: >
  How to remove a previously-added menu item from the favorites list —
  device-default favorites (e.g. tag, range values) cannot be removed,
  only user-added ones.
concept-tags: [AMS Trex, HART, favorites, remove favorite]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.16.3 'Remove a menu item from the favorites list,' pp. 97–98"
path: [Connected HART device, Menu, Favorites]
action: >
  Connect to a HART device, tap Menu → Favorites, press and hold the menu
  item in the Favorites list, then tap Remove From Favorites.
used-by: []
notes: Real steps confirmed directly.
```

### Section 3.17 — Polling options for HART devices (printed pp. 98–99)

```yaml
id: amstrex-cmp-set-hart-polling-options
kind: navPath
teaches: >
  How to change the HART polling option (address, tag, or long tag) when
  the Trex unit can't find a device at the default address zero —
  including the custom-address-range syntax for multidrop loops.
concept-tags: [AMS Trex, HART, polling options, address, multidrop, device connection wizard]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.17.1 'Set the polling options for HART devices,' pp. 98–99"
path: [Field Communicator, HART, device connection wizard]
action: >
  Connect the lead set and open the Field Communicator application; if it
  doesn't auto-connect, tap HART and follow the prompts; tap Yes when
  asked to change the polling option, then select a polling option at the
  top of the screen — Address (0, a 0–15 or 0–63 range, 63 for a wireless
  adapter, 0-and-63, or a Custom range like "0, 5-7, 12"), Tag, or Long Tag
  (HART Universal Revision 6+ only).
used-by: []
notes: >
  Real steps and option table confirmed directly. The selected option is
  not saved between connections.
```

### Section 3.18 — Connections to FOUNDATION fieldbus devices (printed pp. 99–104)

§3.18 itself and §3.18.1 "Precautions for using the Trex unit with
FOUNDATION fieldbus devices" (warnings about host-system database sync,
control-loop safety, and the Trex unit's ~12 mA online current draw) are
descriptive/safety content with no numbered steps — excluded under the
materiality filter.

```yaml
id: amstrex-cmp-ff-power-plug-terminal-install
kind: figure
teaches: >
  Attaching the FOUNDATION fieldbus Power Plug to the Trex unit's FF pwr
  terminal with a screwdriver — the physical installation step for the
  accessory that lets the Trex unit power one FOUNDATION fieldbus device.
concept-tags: [AMS Trex, FOUNDATION fieldbus, Power Plug, communication terminals]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-36 'FOUNDATION fieldbus Power Plug attached to the Trex unit,' p. 100"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cross-reference finding, flagged: this figure shares an almost identical
  caption with ch2's `amstrex-cmp-ff-power-plug-attached` (Figure 2-11,
  "FOUNDATION fieldbus Power Plug attached to the Trex unit," p.25) — but
  direct visual comparison confirms these are two DIFFERENT photographs,
  not a reused image. Ch2's Figure 2-11 shows the plug already seated with
  the lead set connected on top; this Figure 3-36 shows a screwdriver
  actively tightening the plug into the terminal, no lead set present.
  Catalogued as its own record with a distinct id for exactly this reason
  — a same-caption, different-photo situation, not a duplicate to skip.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-ff-comm-terminals-communicator
kind: figure
teaches: >
  The FF terminal on the base Device Communicator module, used to
  communicate with a FOUNDATION fieldbus device (no power capability on
  this module).
concept-tags: [AMS Trex, FOUNDATION fieldbus, communication terminals, Device Communicator module]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-37 'FOUNDATION fieldbus terminals on the Device Communicator communication module,' p. 101 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cross-reference: same reused-and-recropped module photo pattern as
  `amstrex-cmp-hart-comm-terminals-communicator` above, this time isolating
  the FF terminal instead of HART, against ch2's Figure 2-4.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-ff-comm-terminals-communicator-plus
kind: figure
teaches: >
  The two FF-related terminals on the Device Communicator Plus module: FF
  pwr (power, power conditioning, and two terminators for one device) and
  FF (communicate only).
concept-tags: [AMS Trex, FOUNDATION fieldbus, communication terminals, Device Communicator Plus]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-38 'FOUNDATION fieldbus terminals on the Device Communicator Plus communication module,' p. 101 — callouts A–B"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Cross-reference: same reused-and-recropped pattern against ch2's Figure
  2-5, isolating the two FF terminals instead of the five-callout full
  module overview.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-power-connect-ff-device
kind: figure
teaches: >
  The wiring diagram for the Trex unit powering and connecting to a
  FOUNDATION fieldbus device directly, using the FOUNDATION fieldbus Power
  Plug.
concept-tags: [AMS Trex, FOUNDATION fieldbus, wiring diagram, Power Plug, Trex-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-39 'Power and connect to a FOUNDATION fieldbus device,' p. 102 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption and callout (A. FOUNDATION fieldbus Power Plug) confirmed
  directly, alongside the WARNING that the Trex unit can power only one
  FOUNDATION fieldbus device.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-wiring-ext-powered-ff-device
kind: figure
teaches: >
  The wiring diagram for connecting to an externally-powered FOUNDATION
  fieldbus device, including the terminators, power conditioner, fieldbus
  power supply, and host system in the segment.
concept-tags: [AMS Trex, FOUNDATION fieldbus, wiring diagram, externally-powered, terminators, power conditioner]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-40 'Connect to an externally-powered FOUNDATION fieldbus device,' p. 102 — callouts A–D"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption and all four callouts (A. Terminators, B. Power conditioner,
  C. Fieldbus power supply, D. Host system) confirmed directly.
mediaStatus: unreviewed
```

§3.18.4 "Link Active Scheduler (LAS)" (pp. 103–104) is a conceptual
explanation of bus arbitration, link master/basic devices, and token
passing — descriptive, no numbered steps — excluded under the materiality
filter.

§3.18.5 "Fieldbus Device List" (Figure 3-41, p. 104) is a plain device-list
screenshot with the same thin, descriptive "tap a device to connect / tap
My Device Not Found to expand polling settings" content as §3.10.4's HART
Device List — excluded under the materiality filter for the same reason.

### Section 3.19 — Power and connect to a FOUNDATION fieldbus device (printed pp. 105–106)

```yaml
id: amstrex-cmp-power-connect-ff-device
kind: navPath
teaches: >
  How to power and connect to a FOUNDATION fieldbus device directly from
  the Trex unit (one device only, ~10V at 25 mA, two internal terminators
  and a power conditioner applied) — the Trex unit refuses to power an
  already externally-powered device to protect itself.
concept-tags: [AMS Trex, FOUNDATION fieldbus, power device, Power Plug, terminators]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.19 'Power and connect to a FOUNDATION fieldbus device,' pp. 105–106"
path: [Field Communicator, Fieldbus]
action: >
  Connect the lead set to the FF terminals on the Trex unit and directly to
  the unpowered device's communication terminals (not a junction box),
  connect the FOUNDATION fieldbus Power Plug to the FF pwr terminal and
  the positive (red) lead-set terminal, open the Field Communicator
  application, tap Fieldbus, tap Yes to provide power, then tap the
  desired device from the Device List. To stop powering, close the
  application or remove the lead set.
used-by: []
notes: >
  Real steps confirmed directly, including the WARNING (do not add
  external power while the Trex unit is powering the device — can blow a
  fuse). Figure 3-42 (the wiring diagram embedded in step 2) catalogued
  below as its own figure record.
```

```yaml
id: amstrex-cmp-wiring-power-ff-device-procedure
kind: figure
teaches: >
  The wiring diagram for the "power and connect to a FOUNDATION fieldbus
  device" procedure's step 2: connecting the FOUNDATION fieldbus Power
  Plug to the FF pwr terminal and the positive lead-set terminal.
concept-tags: [AMS Trex, FOUNDATION fieldbus, wiring diagram, Power Plug, Trex-powered]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-42 'Connection for powering a FOUNDATION fieldbus device,' p. 106 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and callout (A. FOUNDATION fieldbus Power Plug) confirmed directly.
mediaStatus: unreviewed
```

### Section 3.20 — Connect to an externally-powered FOUNDATION fieldbus device (printed p. 107)

```yaml
id: amstrex-cmp-connect-externally-powered-ff-device
kind: navPath
teaches: >
  How to connect to an externally-powered FOUNDATION fieldbus device — the
  Trex unit may become the LAS if it joins a segment with no existing
  communications.
concept-tags: [AMS Trex, FOUNDATION fieldbus, externally-powered, LAS, connect device, disconnect device]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.20 'Connect to an externally-powered FOUNDATION fieldbus device,' p. 107"
path: [Field Communicator, Fieldbus]
action: >
  Connect the lead set to the FF terminals on the Trex unit and the
  device, open the Field Communicator application, tap Fieldbus on the
  Connect - Select screen if it doesn't auto-find the device, tap the
  desired device from the Device List, then to disconnect tap Menu →
  Disconnect or remove the lead set.
used-by: []
notes: >
  Real steps confirmed directly. Figure 3-43 (the fieldbus-segment wiring
  example embedded in step 1) catalogued below as its own figure record.
```

```yaml
id: amstrex-cmp-wiring-ext-powered-ff-segment-example
kind: figure
teaches: >
  An example wiring diagram of a full externally-powered FOUNDATION
  fieldbus segment: two field devices, terminators, power conditioner,
  fieldbus power supply, and host system, with the Trex unit tapping in at
  a convenient point along the bus.
concept-tags: [AMS Trex, FOUNDATION fieldbus, wiring diagram, fieldbus segment, terminators, power conditioner, host system]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-43 'Example of connection to the fieldbus segment,' p. 107 — callouts A–D"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption and all four callouts (A. Terminators, B. Power conditioner,
  C. Fieldbus power supply, D. Host system) confirmed directly — the most
  complete segment-topology diagram in the chapter.
mediaStatus: unreviewed
```

### Section 3.21 — Online FOUNDATION fieldbus devices (printed pp. 108–115)

§3.21.1 "Limitations for commissioned devices" (a bullet list of five
disallowed actions on commissioned devices — scheduling blocks, changing
link master config/block tag/device tag/device address) is descriptive,
not a procedure — excluded under the materiality filter, though its
content is the reason several procedures below (block mode, tag, address,
link master) all carry a commissioned-device caveat in their own notes.

§3.21.2 "Device blocks" is a numbered parent section whose own intro
(resource/transducer/function blocks, block modes table, mode parameters
table) is descriptive context — not separately catalogued, matching the
standing "no `kind: navSection`" rule. It contains three real, distinct
bold-run-in-heading sub-procedures, catalogued individually below —
the same grain-judgment pattern already established in ch2 for §2.10.4 and
§2.10.12 (bold-but-unnumbered sub-headings under one numbered parent, each
a genuine independent function).

```yaml
id: amstrex-cmp-change-ff-block-mode
kind: navPath
teaches: >
  How to change a FOUNDATION fieldbus block's mode (Auto, Out of Service,
  or another supported mode like Cas/RCas/ROut/IMan/LO) — either for
  several blocks at once from the Block List, or from within a specific
  block.
concept-tags: [AMS Trex, FOUNDATION fieldbus, block mode, Auto, Out of Service, Block List]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.2 'Device blocks' — 'Change the block mode for a
      FOUNDATION fieldbus device,' pp. 108–110"
path: [Connected FOUNDATION fieldbus device, Block List or block menu, mode button]
action: >
  Connect to the device; to change modes from the Block List, tap the mode
  button there, select the desired mode for each block, tap OK, tap Send,
  review, then tap Send again. To change from within a specific block, go
  to the block menu, tap the mode button at the top of the screen, select
  the mode, tap OK (highlighted yellow), tap Send, review, then tap Send
  again.
used-by: []
notes: >
  First of the three §3.21.2 sub-functions — see the grain-judgment note
  above. Figure 3-44 (the mode-button screenshot) is a plain UI screenshot,
  excluded from `kind: figure` per this chapter's convention (see Open
  Items).
```

```yaml
id: amstrex-cmp-change-ff-io-block-schedule
kind: navPath
teaches: >
  How to change the IO block schedule on the bench (not connected to a
  control system) to verify an IO block's outputs compute correctly —
  cannot be done on a commissioned device or one with a host/linking
  device detected on the segment.
concept-tags: [AMS Trex, FOUNDATION fieldbus, IO block schedule, macrocycle, Service Tools]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.2 'Device blocks' — 'Change the IO block
      schedule for FOUNDATION fieldbus devices,' p. 110"
path: [Connected FOUNDATION fieldbus device, Service Tools, Write IO Block Schedule]
action: >
  Connect to the device, tap Service Tools, tap Write IO Block Schedule,
  tap OK, tap Yes or No when asked if the device is commissioned (Yes
  blocks scheduling), select the macrocycle duration and the desired IO
  blocks, then tap OK — this schedules the blocks and sets their mode to
  Auto.
used-by: []
notes: Second of the three §3.21.2 sub-functions.
```

```yaml
id: amstrex-cmp-view-ff-block-status
kind: navPath
teaches: >
  How to view a FOUNDATION fieldbus block's status parameters — the
  specific options vary by device.
concept-tags: [AMS Trex, FOUNDATION fieldbus, block status]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.2 'Device blocks' — 'View the status of a
      block,' pp. 110–111"
path: [Connected FOUNDATION fieldbus device, block, Status]
action: Connect to the device, tap the desired block, then tap Status to display its status parameters.
used-by: []
notes: Last of the three §3.21.2 sub-functions.
```

```yaml
id: amstrex-cmp-run-ff-method
kind: navPath
teaches: >
  How to run a device method (e.g. calibration or a diagnostic routine) on
  a FOUNDATION fieldbus device — typically run from the transducer block;
  the specific methods available vary by device.
concept-tags: [AMS Trex, FOUNDATION fieldbus, methods, calibration, diagnostic, transducer block]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.3 'Run a method,' p. 111"
path: [Connected FOUNDATION fieldbus device, block, methods menu]
action: >
  Connect to the device, tap the desired block (typically the transducer
  block), tap a menu containing methods, tap the type of method to run,
  then follow the on-screen prompts.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-view-ff-device-information
kind: navPath
teaches: >
  How to view a FOUNDATION fieldbus device's physical tag, address, device
  ID, and revision via Service Tools (an alternative to the device-tag →
  DD Information path).
concept-tags: [AMS Trex, FOUNDATION fieldbus, device information, Service Tools, DD Information]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.4 'View the device information,' p. 111"
path: [Connected FOUNDATION fieldbus device, Service Tools]
action: >
  Connect to the device, tap Service Tools, then tap Physical Device Tag,
  Device Node Address, Device ID, or Device Revision to view each value.
used-by: []
notes: >
  Real steps and option table confirmed directly. Same read-only
  commissioned-device caveat as the tag/address-change procedures below.
```

```yaml
id: amstrex-cmp-change-ff-parameter
kind: navPath
teaches: >
  How to change a FOUNDATION fieldbus device parameter and send the change
  — some changes are prohibited for commissioned devices, and the Trex
  unit may disconnect automatically after a change (auto-sending it).
concept-tags: [AMS Trex, FOUNDATION fieldbus, change parameter, commissioned device]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.5 'Change a FOUNDATION fieldbus device parameter,' pp. 111–112"
path: [Connected FOUNDATION fieldbus device, parameter menu]
action: >
  Connect to the device, go to the parameter to change (menus vary by
  device), select whether the device is commissioned if prompted, change
  the parameter, tap Send, review (Discard to undo, Cancel to keep for
  later), tap Send again, then tap OK.
used-by: []
notes: >
  Real steps confirmed directly, including the WARNING about putting the
  control loop in Manual/Out of Service before applying changes.
```

```yaml
id: amstrex-cmp-change-ff-tag
kind: navPath
teaches: >
  How to change a FOUNDATION fieldbus device's physical tag — read-only
  when the device is commissioned or a host/linking device is on the
  segment; the Trex unit disconnects and the device reappears with the new
  tag on the Device List.
concept-tags: [AMS Trex, FOUNDATION fieldbus, device tag, Physical Device Tag, commissioned device]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.6 'Change the tag for a FOUNDATION fieldbus device,' pp. 112–113"
path: [Connected FOUNDATION fieldbus device, Service Tools, Physical Device Tag]
action: >
  Connect to the device, tap Service Tools, tap Physical Device Tag, tap OK
  when told the device will restart, select whether it's commissioned, enter
  the new tag, tap OK (the Trex unit disconnects), tap OK on the
  disconnect message, then tap the device on the Device List to reconnect.
used-by: []
notes: Real steps confirmed directly.
```

§3.21.7 "Guidelines for changing the device address" (p. 113) is a rules
list of FOUNDATION fieldbus address ranges (below 16 unavailable, 16–19
reserved for hosts, 20–247 valid, 248–251 temporary, 252–255 reserved for
visitors like the Trex unit) — descriptive constraints, not a procedure —
excluded under the materiality filter. The real address-change procedure
is §3.21.8 below.

```yaml
id: amstrex-cmp-change-ff-address
kind: navPath
teaches: >
  How to change a FOUNDATION fieldbus device's node address — read-only
  when commissioned or a host/linking device is on the segment; the Trex
  unit disconnects and the device reappears at the new address.
concept-tags: [AMS Trex, FOUNDATION fieldbus, device address, Device Node Address, commissioned device]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.8 'Change the device address for a FOUNDATION fieldbus device,' pp. 113–114"
path: [Connected FOUNDATION fieldbus device, Service Tools, Device Node Address]
action: >
  Connect to the device, tap Service Tools, tap Device Node Address, tap OK
  when told the device will restart, select whether it's commissioned,
  enter the new address, tap OK (the Trex unit disconnects), tap OK on the
  disconnect message, then tap the device on the Device List to reconnect.
used-by: []
notes: Real steps confirmed directly.
```

§3.21.9 "Polling for FOUNDATION fieldbus devices" (p. 114) is descriptive —
the Trex unit polls automatically with no user-settable range, and "My
Device Not Found" simply expands the automatic polling addresses/slot time
(the same thin, non-distinct-steps shape as the HART/FF Device List
sections) — excluded under the materiality filter.

```yaml
id: amstrex-cmp-set-ff-link-master-basic
kind: navPath
teaches: >
  How to set a FOUNDATION fieldbus device to be a link master (eligible to
  become the LAS) or a basic device (never becomes the LAS) — the option
  only appears if the device supports being a link master; setting it
  doesn't itself make the device the LAS.
concept-tags: [AMS Trex, FOUNDATION fieldbus, link master, basic device, LAS, Link Master Configuration]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.10 'Set a FOUNDATION fieldbus device to be a link master or basic device,' pp. 114–115"
path: [Connected FOUNDATION fieldbus device, Service Tools, Link Master Configuration]
action: >
  Connect to the device, tap Service Tools, tap Link Master Configuration,
  tap OK when told the device will restart, select whether it's
  commissioned, select Basic or Master, tap OK, then tap OK to restart and
  apply the change — the Trex unit displays the Device List.
used-by: []
notes: >
  Real steps confirmed directly. Last of the ten §3.21 sub-functions.
```

### Section 3.22 — Simulate a live device (printed p. 115)

```yaml
id: amstrex-cmp-simulate-device
kind: navPath
teaches: >
  How to simulate an online connection to a HART or FOUNDATION fieldbus
  device without a physical connection — a training tool for becoming
  familiar with a device's menus before configuring it live (not all
  device descriptions are optimized for simulation).
concept-tags: [AMS Trex, HART, FOUNDATION fieldbus, simulate device, training]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.22 'Simulate a live device,' p. 115"
path: [Field Communicator, HART Offline or Fieldbus Offline, Simulate]
action: >
  Tap HART Offline or Fieldbus Offline on the Connect - Select screen, tap
  Simulate, tap a device manufacturer, type, and revision, tap OK — the
  device menu displays and can be navigated/configured as if connected. To
  end, tap Menu → Disconnect or close the application.
used-by: []
notes: >
  Consolidated as one record covering both HART and FOUNDATION fieldbus
  simulation, since the source presents both under one numbered section
  with one continuous procedure differing only in the entry point (HART
  Offline vs. Fieldbus Offline) — matching the standing consolidation
  precedent for a single continuous procedure.
```

### Section 3.23 — View the device descriptions on the Trex unit (printed pp. 115–116)

```yaml
id: amstrex-cmp-view-installed-device-descriptions
kind: navPath
teaches: >
  How to view all HART or FOUNDATION fieldbus device descriptions
  installed on the Trex unit, organized by manufacturer and device type.
concept-tags: [AMS Trex, device descriptions, HART, FOUNDATION fieldbus, Simulate menu]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.23 'View the device descriptions on the Trex unit,' pp. 115–116"
path: [Field Communicator, HART Offline or Fieldbus Offline, Simulate]
action: >
  Tap HART Offline or Fieldbus Offline depending on the protocol, tap
  Simulate, select a manufacturer, then select a device type — the device
  revision and device description revision display; tap Cancel to return
  to the offline menu without actually simulating.
used-by: []
notes: >
  Real steps confirmed directly. Reuses the same Simulate entry point as
  `amstrex-cmp-simulate-device` but for a different purpose (browsing
  installed device descriptions vs. actually simulating one) — a real,
  independently-numbered function per the source, not a duplicate.
```

### Section 3.24 — View the device description information (printed p. 116)

```yaml
id: amstrex-cmp-view-device-description-info
kind: navPath
teaches: >
  How to view a connected device's manufacturer, device type, device
  revision, and device description revision (the Tag/Long Tag options
  shown alongside this only apply to HART revision 7 devices).
concept-tags: [AMS Trex, device description, DD Information, manufacturer, device revision]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.24 'View the device description information,' p. 116"
path: [Connected device, application title bar, DD Information]
action: >
  Connect to the HART or FOUNDATION fieldbus device, tap the tag displayed
  at the top of the screen, tap DD Information, then tap OK after
  reviewing the information.
used-by: []
notes: >
  Duplicate-image finding, flagged (informational only, no id impact):
  Figure 3-45 ("Tap the device tag," p.116, illustrating this procedure) is
  the literal same screenshot as Figure 3-33 (p.92, illustrating
  `amstrex-cmp-display-hart-tag`) — same device, same arrow, same gauge
  readings — confirmed by direct visual comparison. Neither is catalogued
  as `kind: figure` under this chapter's screenshot/navPath convention, so
  this duplication has no schema consequence, but it's recorded here for
  honesty and for whoever later decides to add `screen:` references.
```

### Section 3.25 — View Help for a device parameter (printed p. 117)

```yaml
id: amstrex-cmp-view-parameter-help
kind: navPath
teaches: How to view a connected device's built-in Help text for a specific parameter.
concept-tags: [AMS Trex, Help, device parameter]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.25 'View Help for a device parameter,' p. 117"
path: [Connected device, parameter, Help]
action: >
  Go to the desired parameter in the connected device, press and hold it
  until a menu appears, tap Help to view the help text, then tap OK to
  close it.
used-by: []
notes: Real steps confirmed directly.
```

### Section 3.26 — Graphics (printed pp. 117–122)

Genuine data-visualization content — confirmed directly against the
rendered pages, matching the distinction drawn between "menu screens" and
"real diagnostic charts/graphs showing live device data." Every figure in
this section stays `kind: figure`.

```yaml
id: amstrex-cmp-graphics-options-controls
kind: figure
teaches: >
  The interactive controls common to every graphic type (image, chart, or
  graph): a variable-select dropdown, zoom reset, zoom out, and zoom in —
  the shared interface a learner needs before reading any of the specific
  chart types below.
concept-tags: [AMS Trex, Graphics, EDDL, zoom controls, variable selection]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-46 'Graphics options,' p. 117 — callouts A–D"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption and all four callouts (A. Select a variable, B. Reset zoom,
  C. Zoom out, D. Zoom in) confirmed directly. This is the interactive
  chrome shared by every graphic type rather than a specific data
  visualization itself, but it is the entry visual for the whole Graphics
  feature set described in §3.26 and its subsections — kept as `kind:
  figure` per the section-wide data-visualization scope, not excluded as a
  plain UI screenshot.
mediaStatus: unreviewed
```

§3.26.1 "Images" (p. 117) is descriptive (a full-screen device picture,
possibly with links to run methods) with no figure of its own in this
chapter and no numbered steps — excluded under the materiality filter.
§3.26.2 "Charts" (pp. 117–118) is a descriptive intro plus a chart-type
comparison table (strip/sweep/scope, horizontal bar, vertical bar, gauge)
— no figure of its own; the individual chart figures are in §3.26.3–3.26.6
below.

```yaml
id: amstrex-cmp-strip-chart
kind: figure
teaches: >
  A real strip/sweep/scope chart showing live device data plotted against
  time (three variables shown, one bold/selected) — the strip-chart
  variant specifically, continually scrolling right to left.
concept-tags: [AMS Trex, Graphics, strip chart, sweep chart, scope chart, data visualization, trend]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-47 'Strip chart,' p. 119"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption confirmed directly. Genuine data visualization — the actual
  plotted trend lines are the teaching content, not a menu or option
  layout.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-horizontal-bar-chart
kind: figure
teaches: >
  A real horizontal bar chart showing two live device variables (Pressure
  Value, Snsr temp) as bars running left to right, with the selected
  variable outlined and its value labeled.
concept-tags: [AMS Trex, Graphics, horizontal bar chart, data visualization]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-48 'Horizontal bar chart,' p. 120"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-vertical-bar-chart
kind: figure
teaches: >
  A real vertical bar chart showing the same two live device variables as
  bars running bottom to top.
concept-tags: [AMS Trex, Graphics, vertical bar chart, data visualization]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-49 'Vertical bar chart,' p. 121"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-gauge-chart
kind: figure
teaches: >
  A real gauge chart formatting live device data into an analog-
  speedometer-style view with a colored needle and numeric readout — up to
  three variables can share one gauge.
concept-tags: [AMS Trex, Graphics, gauge chart, data visualization]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-50 'Gauge chart,' p. 122"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-graph
kind: figure
teaches: >
  A real graph — a snapshot line drawing of device information showing
  four variables, including keypoint markers (circles) on the plotted
  lines.
concept-tags: [AMS Trex, Graphics, graph, keypoints, data visualization]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 3-51 'Graph,' p. 123"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption confirmed directly. Last of the six §3.26 chart/graph
  figures, and the last numbered figure in this chapter (3-1 through 3-51,
  full accounting in Open Items).
mediaStatus: unreviewed
```

### Section 3.27 — Disconnect a device (printed p. 123)

```yaml
id: amstrex-cmp-disconnect-device
kind: navPath
teaches: >
  How to disconnect the Trex unit from whatever device it's connected to
  (HART or FOUNDATION fieldbus) — the single most frequently
  cross-referenced function in this chapter's own "Related information"
  links.
concept-tags: [AMS Trex, disconnect device, Menu tab]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.27 'Disconnect a device,' p. 123"
path: [Connected device, Menu, Disconnect]
action: >
  Resolve any unsent data first, then tap Menu → Disconnect or remove the
  lead set from the device or the Trex unit — the Trex unit detects the
  loss of voltage/current, stops communicating (and stops powering the
  device if it was), and returns to the Connect - Select screen.
used-by: []
notes: >
  Real steps confirmed directly. Last section of this chapter — p.124
  (out of range end) renders as a genuinely blank trailing page before
  chapter 4's real start.
```

## Open Items

- **Chapter/scope boundary, confirmed directly**: PDF/printed pp. 53–124
  rendered and read in full, all 72 pages. p.53 confirmed as the real "3
  Field Communicator application" chapter start; p.123 confirmed as the
  real end of this chapter's content (§3.27 "Disconnect a device"); p.124
  confirmed genuinely blank (header/footer only) — the same "blank trailing
  page before the next chapter" shape ch2's own boundary with this chapter
  showed. Zero page offset confirmed throughout.
- **Full coverage — figures**: Figures 3-1 through 3-51 (51 sequential
  printed figure numbers, zero gaps) all confirmed by direct visual
  inspection. 36 of the 51 are catalogued as `kind: figure` (genuine
  wiring/hardware-terminal diagrams and genuine data-visualization
  charts/graphs). The remaining 15 (Figures 3-1 through 3-7, 3-23, 3-32
  through 3-35, 3-41, 3-44, and 3-45) are plain application-UI screenshots
  — reference screens, a device/parameter list, or step-illustration
  screenshots embedded in a procedure — excluded from `kind: figure` per
  this chapter's application of the navPath convention's own founding
  reasoning ("a screenshot proves a screen exists; it doesn't teach the
  skill"). Plus one genuine unnumbered figure (the §3.14.1 HART status-icon
  legend). **Total figures: 37** (36 numbered + 1 unnumbered).
- **Full coverage — navPath**: every numbered subsection and bold run-in
  sub-heading from §3.1 through §3.27 was read and classified. **Total
  navPath records: 35** (36 distinct source procedure locations, since
  `amstrex-cmp-edit-hart-configuration` covers two identically-worded
  source locations, §3.14.5 and §3.15.2).
- **Total components this file: 72** (37 `kind: figure`, 35 `kind: navPath`).
- **A chapter-wide judgment call, stated explicitly**: this chapter draws a
  sharper figure/navPath line than ch2 did. Ch2 kept several plain
  UI-reference screenshots as `kind: figure` (Home screen, status bar,
  shortcut bar) when they carried a real figure number and had no
  procedure of their own. This chapter instead treats the figure/navPath
  split as content-type-based across the board: only genuine
  wiring/electrical-terminal diagrams and genuine data-visualization
  charts stay `kind: figure`; every other application screenshot in this
  chapter — including several that DO carry a real figure number and no
  procedure of their own (Figures 3-1 through 3-7, 3-23, 3-41) — is
  excluded, on the reasoning that this is exactly the class of content the
  navPath convention was written to stop treating as an image. The one
  exception made in the other direction is the two small icon-glyph
  legends (`amstrex-cmp-device-menu-icons-legend`, Figure 3-8, and
  `amstrex-cmp-hart-status-icons-legend`, unnumbered) — kept as figures
  because they match ch2's own gesture-legend precedent (a Rosetta-stone
  reference table of small graphic glyphs, not a screen layout). This is a
  real, judgment-based tightening of the convention as applied here rather
  than a mechanical carry-forward of ch2's own mix — worth confirming this
  reading is correct if a similarly screenshot-heavy chapter comes up
  again.
  **Resolved 2026-09-14**: adopted as the standing rule in Process &
  Standards, and ch2 was retroactively tightened to match — its own
  Figures 2-13 (Home screen), 2-14 (Status bar), and 2-15 (Shortcut bar)
  are now dropped for the same reason. The two files' figure/navPath
  lines are consistent as of this date.
- **Extension of the wiring-diagram figure rule beyond its named
  sections, flagged as a judgment call**: the task brief named §3.10.2,
  3.10.3, and 3.18.3 as the sections whose wiring diagrams stay `kind:
  figure`. This pass extended the same content-type reasoning to genuine
  wiring/electrical diagrams appearing elsewhere in the chapter — §3.10.1
  and 3.18.2's communication-terminal photos, §3.11's internal-resistor
  diagrams, and the wiring illustrations embedded directly inside
  Procedure blocks in §3.11.1, 3.12, 3.12.1, 3.19, and 3.20 (Figures 3-9,
  3-10, 3-24 through 3-31, 3-37, 3-38, 3-42, 3-43). The reasoning: these
  are the identical class of content (a real physical/electrical
  connection diagram) regardless of which section number they sit under,
  and the general Process & Standards figure rule ("a source-numbered
  Figure N.M is catalogued regardless of...") is content-based, not
  section-based. Flagged explicitly since it is a real extension beyond
  the task brief's literal three named sections, not a mechanical
  application of it.
- **Reused base-artwork observation (not a duplicate-figure-number
  finding)**: several wiring diagrams reuse the same underlying
  illustration template under different figure numbers and captions —
  most visibly the 2-wire-transmitter connection graphic, which recurs as
  Figure 3-11 (general reference, §3.10.2), Figure 3-24 (internal-resistor
  explanation, §3.11), and Figure 3-27 (procedure-step illustration,
  §3.11.1). Each is catalogued as its own record per the standing
  "every source-numbered figure is catalogued" rule — there is no
  duplicate-figure-number or citation-error condition here, just template
  reuse across genuinely different captions/contexts, flagged for
  honesty.
- **Cross-references to ch2 figures, confirmed**: the HART and FOUNDATION
  fieldbus communication-terminal photos in §3.10.1 and §3.18.2 (Figures
  3-9, 3-10, 3-37, 3-38) reuse and re-crop the same physical module photos
  already catalogued in ch2 as `amstrex-cmp-device-communicator-module`
  (Figure 2-4) and `amstrex-cmp-device-communicator-plus-module` (Figure
  2-5) — narrowed to one protocol's terminals per this chapter's more
  specific teaching purpose. Both records are kept (source-anchored,
  different callout scope and context), cross-referenced in each new
  record's own notes rather than treated as duplicates.
- **Duplicate-image finding (informational, no schema impact)**: Figure
  3-33 (p.92, illustrating `amstrex-cmp-display-hart-tag`) and Figure 3-45
  (p.116, illustrating `amstrex-cmp-view-device-description-info`) are the
  literal same screenshot, confirmed by direct visual comparison. Neither
  is catalogued as `kind: figure` in this chapter's convention, so this
  has no id or record consequence — noted for honesty and for anyone later
  adding `screen:` references.
- **Same-caption, different-photograph finding**: Figure 3-36 ("FOUNDATION
  fieldbus Power Plug attached to the Trex unit," p.100) shares an
  almost-identical caption with ch2's Figure 2-11 of the same name (p.25)
  but is confirmed by direct visual comparison to be a different
  photograph (a screwdriver actively installing the plug vs. the plug
  already seated with the lead set attached) — catalogued as its own
  record with a distinct id (`amstrex-cmp-ff-power-plug-terminal-install`)
  rather than treated as a duplicate.
- **Critical correction to the standing Process & Standards precedent,
  flagged prominently**: `Component Index — Process & Standards.md` cites
  this chapter's own §3.14.6 "Display the HART short tag or long tag" as
  the standing precedent for a materiality-filter exclusion ("one
  descriptive paragraph, no real steps"). Rendering and reading the actual
  page directly (p.92) shows this claim is wrong — §3.14.6 has a genuine
  three-step numbered Procedure with its own figure (Figure 3-33).
  Catalogued as `amstrex-cmp-display-hart-tag`, a real navPath record,
  per what the rendered page actually shows. **This is a real,
  standing-doc precedent needing correction** — the Process & Standards
  doc's own citation of AAMS Trex §3.14.6 should be fixed in a follow-up
  edit to that file, not left standing as a wrong example for the next
  pass to copy.
- **Duplicate-content finding**: §3.14.5 and §3.15.2, both titled "Edit a
  HART configuration," print the identical eight-step procedure verbatim
  in two places (p.91 and pp.94–95) under two different parent umbrellas
  ("Online HART devices" and "Offline HART configurations" respectively —
  itself a slightly odd filing choice by the source, since the procedure
  is entirely an offline-config operation). Catalogued once
  (`amstrex-cmp-edit-hart-configuration`) with both locators cited, per
  the same precedent ch2 established for `amstrex-cmp-close-application`.
- **No duplicate figure numbers and no source citation errors found**
  among Figures 3-1 through 3-51, beyond the reused-artwork and
  same-caption-different-photo observations already noted above (neither
  of which is a citation error — every figure's own printed caption
  matches its own content).
- **Materiality-filter exclusions (descriptive, no real steps or path) —
  named explicitly**: §3.2 Device interoperability, §3.3 Forward
  Compatibility rules, §3.4 Automatically detect a device and §3.4.1
  (cross-referenced to ch2's `amstrex-cmp-enable-disable-hart-autoconnect`),
  §3.5 Connect - Select screen, §3.6 Device connection wizard (+ "Problems
  the device connection wizard can detect"), §3.7 Status when detecting a
  device, §3.8/3.8.1/3.8.2/3.8.3 (Online menu, device screen layout,
  application bar, Menu screen), §3.10 Connections to HART devices, §3.10.4
  HART Device List, §3.11 Internal resistors (own intro), §3.14 Online
  HART devices (umbrella) and §3.14.2 Device Setup options (the
  device-dependent-menu source) and §3.14.3 Changing device parameters,
  §3.15 Offline HART configurations (own intro), §3.16 Favorites (own
  intro), §3.17 Polling options for HART devices (own intro), §3.18
  Connections to FOUNDATION fieldbus devices (own intro), §3.18.1
  Precautions, §3.18.4 Link Active Scheduler (LAS), §3.18.5 Fieldbus
  Device List, §3.21 Online FOUNDATION fieldbus devices (umbrella),
  §3.21.1 Limitations for commissioned devices, §3.21.2's own intro
  (block/mode-parameters tables), §3.21.7 Guidelines for changing the
  device address, §3.21.9 Polling for FOUNDATION fieldbus devices, §3.26.1
  Images, and §3.26.2 Charts (own intro/comparison table).
- **Physical/mechanical-procedure-with-no-figure edge case, checked and
  confirmed not present**: per ch2's own precedent and the task's explicit
  instruction to check for this, this chapter was scanned specifically for
  any real numbered procedure that is purely physical/mechanical with no
  on-screen menu path AND no accompanying figure. None found — chapter 3
  is entirely software-navigation and wiring/connection content; every
  real procedure is either a genuine on-screen function (`kind: navPath`)
  or a wiring/electrical connection procedure with its own accompanying
  diagram (`kind: figure`). There is no analog here to ch2's
  install/remove-a-module mechanical procedures.
- **Table-exclusion confirmation**: this chapter's many real data tables
  (device connection wizard prompt/answer tables under nearly every wiring
  figure, the Device Setup/Basic Setup/Detailed Setup option tables, the
  power-status/communication-status message tables, the polling-option
  table, the chart-type comparison table, the block-mode and
  mode-parameters tables) are genuinely separate from — and none are
  printed as — numbered "Figure" or "Table" content; none were excluded as
  tables because none were ever figure-numbered to begin with. No
  genuinely separately-numbered "Table N" content exists in this chapter.
- **Cross-reference findings**: ran the whole-library collision sweep
  before starting (`grep -h "^id: " "20 - Source Library"/Component
  Index*.md | sort | uniq -d`) — baseline matched ch2's own documented
  baseline exactly: the two pre-existing, unrelated Oil & Gas Sourcebook
  collisions (`ogas-cmp-amine-treatment-unit`, `ogas-cmp-compressor-system`,
  neither touched by this pass) plus the same false-positive match against
  the Process & Standards doc's own literal schema-template line. Also
  checked every new id against ch2's own 58 real ids (`Component Index —
  AMS Trex User Guide ch2.md`) directly — no collisions, and the
  cross-references to ch2's communication-module figures and to
  `amstrex-cmp-enable-disable-hart-autoconnect` are documented in the
  relevant records above.
- **Collision sweep, after this pass**: re-ran the same sweep — result
  unchanged from the baseline (still only the two pre-existing Oil & Gas
  Sourcebook collisions and the schema-template false positive); no new
  collisions introduced by this file's 72 new ids.
- **Archive/legacy material**: none consulted, none needed — Rev 8
  (February 2023) is a first-party current-edition document and the sole
  source for this file.
