---
title: Component Index — AMS Trex User Guide ch2
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
chapter: "2 — AMS Trex Device Communicator overview"
updated: 2026-09-14
---

# Component Index — AMS Trex User Guide ch2

Standing full-chapter pass, chapter 2 only ("AMS Trex Device Communicator
overview," the hardware-overview chapter). Numbered-chapter file convention,
matching the Control Valve Handbook and confirmed for this document in
`Component Index — Process & Standards.md` (AMS Trex has a real numbered
chapter/section structure: 1 intro, 2 hardware, 3 Field Communicator
application, 4 Loop Diagnostics application, 5 Fieldbus Diagnostics
application, plus four appendices and a glossary/index). This is the first
pass to apply the new `kind: navPath` software-documentation record type on
real content, alongside ordinary `kind: figure` records for the chapter's
genuine hardware photos and diagrams — both kinds are mixed under the same
numbered-section headers below, matching how the source itself interleaves
hardware description and on-device Settings-menu procedures.

**Rigor**: every one of the 46 pages in range (PDF pp. 7–52, confirmed
zero page offset — printed page number = PDF page number exactly, verified
directly against the rendered page images) was rendered at 150dpi via the
local Poppler and read directly, not inferred from `pdftotext` alone.
Chapter boundary confirmed directly: p.7 renders the "2 AMS Trex Device
Communicator overview" chapter-opening page; p.53 renders "3 Field
Communicator application" (chapter 3's own opening page, confirmed out of
scope for this file — someone else is indexing chapter 3); p.52 renders as
a genuinely blank trailing page (header/footer only, no body content)
between the end of chapter 2's real content (p.51) and chapter 3's start —
the same "blank trailing page before the next chapter" shape noted as a
recurring edge case in `Component Index — Process & Standards.md`.

**Document id note**: the task brief anticipated a `D...`-style document
number (matching the ValveLink Mobile Software Quick Start Guide's
`D103408X012`). Checked directly — title page, copyright/notice page,
every page footer in range, and the back cover (p. 206) — and confirmed
**no document/part number is printed anywhere in this PDF**. The document
identifies itself only as "AMS Trex™ Device Communicator User Guide, Rev 8,
February 2023" (confirmed on both the cover and the back-cover reprint of
the revision line). This is a real, confirmed difference from the ValveLink
guide, not an oversight — the Precedence citation below uses what the
document actually prints.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **AMS Trex Device Communicator User Guide** | Rev 8 · February 2023 · no document/part number printed anywhere in the PDF (confirmed directly — see note above) | `current` | First-party Emerson document; sole source for this file's records. |

## Components

### Section 2.1 — Precautions for the Trex unit (printed pp. 7–8)

No components. §2.1 and §2.1.1 (Hazardous areas) are both purely descriptive
bullet/prose content (pre-use checklist, IS-approval zone ratings) with no
real figure and no navigable procedure — excluded under the materiality
filter, not overlooked.

### Section 2.2 — Front view of the Trex unit (printed pp. 9–10)

```yaml
id: amstrex-cmp-front-view
kind: figure
teaches: >
  The front-view hardware orientation of the AMS Trex unit: the micro USB
  port, power button, strap connectors, touchscreen, keypad, and AC adapter
  charger port, each called out by letter on a single photo of the physical
  unit.
concept-tags: [AMS Trex, hardware overview, front view, ports, keypad, touchscreen]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-1 'Front view,' p. 9 — lettered callouts A–F"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption and all six callouts (A. Micro USB port (top), B. Power
  button (side), C. Strap connectors (side) — two callouts, D. Touchscreen,
  E. Keypad, F. Charger port for the AC adapter (side)) confirmed directly
  against the rendered page.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-keypad
kind: figure
teaches: >
  The AMS Trex keypad in isolation (four-arrow navigation cluster plus
  Cancel/X and checkmark/Enter buttons) with each button's function called
  out — the physical input device used throughout the rest of the manual's
  procedures for menu navigation and text entry.
concept-tags: [AMS Trex, keypad, hardware overview, navigation buttons]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-2 'Keypad,' p. 10 — lettered callouts A–C"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and all three callouts confirmed directly.
mediaStatus: unreviewed
```

### Section 2.3 — Touchscreen (printed pp. 10–12)

No printed figure number in this section, but §2.3.1 "Supported gestures"
(pp. 11–12) devotes a full two-page table to real illustrated gesture
pictograms (tap/press-and-hold, scroll down, scroll up, scroll right,
scroll left), each a genuine hand-icon graphic paired with a description —
catalogued as one unnumbered-diagram record per the standing icon-legend
consolidation precedent (see notes below). §2.3, §2.3.2 (Enter text,
numbers, or special characters), and §2.3.3 (Clean the touchscreen) are
descriptive prose with no real steps and no image — excluded under the
materiality filter.

```yaml
id: amstrex-cmp-supported-gestures-legend
kind: figure
teaches: >
  The full set of touchscreen gestures the Trex unit supports and what each
  does: tap (open a menu item), press-and-hold (open a context menu), and
  single-direction scroll (up/down/right/left) for moving through lists,
  grids, and graphs. Establishes that only single-touch gestures are
  supported — no pinch or other multi-touch gestures.
concept-tags: [AMS Trex, touchscreen, gestures, tap, scroll, navigation]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Unnumbered diagram, pp. 11–12 — 'Supported gestures' icon
      table, 5 illustrated gesture pictograms, no figure numbers printed"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real, genuinely illustrated content (5 distinct hand-gesture pictograms)
  with no printed figure number — confirmed by direct visual inspection of
  both pages, not assumed from the section heading alone. Catalogued as ONE
  component covering the whole gesture legend, matching the precedent
  `fvlm-cmp-menu-structure-icon-legend` set for a real multi-page icon
  legend (bundled as one record rather than one per icon) — a judgment
  call, flagged here rather than silently splitting into 5 near-identical
  records for what is really one continuous reference table.
mediaStatus: unreviewed
```

### Section 2.4 — Back view of the Trex unit (printed p. 13)

```yaml
id: amstrex-cmp-back-view
kind: figure
teaches: >
  The back-view hardware orientation of the AMS Trex unit: the
  communication module, the stand, and the power module, each called out
  by letter on a single photo of the physical unit's back.
concept-tags: [AMS Trex, hardware overview, back view, communication module, stand, power module]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-3 'Back view,' p. 13 — lettered callouts A–C"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and all three callouts confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-view-serial-number
kind: navPath
teaches: >
  How to view the Trex unit's CPU board serial number on-screen, as an
  alternative to reading the physical label on the bottom of the unit —
  useful when contacting technical support.
concept-tags: [AMS Trex, serial number, Settings, About]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.4.1 'Serial numbers,' p. 13"
path: [Settings, About, CPU Board Serial Number]
action: >
  Tap Settings (or the status bar) → About → CPU Board Serial Number to
  view the serial number on-screen, rather than reading the physical label
  on the bottom of the unit near the power module LEDs.
used-by: []
notes: >
  Low-confidence grain call, flagged honestly: §2.4.1 is mostly descriptive
  prose about the physical serial-number label, with a single parenthetical
  sentence naming a real on-screen path and function ("Tap Settings → About
  → CPU Board Serial Number"). Included as a thin but genuine navPath
  candidate rather than excluded outright, since it does name a real
  function with a real path — worth confirming this is the right call if a
  similarly thin case comes up again.
```

### Section 2.5 — Communication modules (printed pp. 14–18)

```yaml
id: amstrex-cmp-device-communicator-module
kind: figure
teaches: >
  The Device Communicator communication module's terminal layout: separate
  FF and HART terminal pairs for connecting to externally-powered
  FOUNDATION fieldbus and HART devices respectively. Cannot power a device
  or measure current/voltage — that requires the Plus module.
concept-tags: [AMS Trex, communication module, FOUNDATION fieldbus, HART, terminals]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-4 'Device Communicator communication module,' p. 14 — lettered callouts A–B"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and both callouts confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-device-communicator-plus-module
kind: figure
teaches: >
  The Device Communicator Plus communication module's five-terminal layout:
  FF power, FF externally-powered/Trex-powered, mA current measurement,
  HART+pwr (power and measure/control current), and externally-powered
  HART — the module that adds current/voltage measurement and device
  powering over the base Device Communicator module.
concept-tags: [AMS Trex, communication module, Device Communicator Plus, HART, FOUNDATION fieldbus, current measurement]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-5 'Device Communicator Plus communication module,' p. 15 — lettered callouts A–E"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and all five callouts confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-low-side-ammeter-connection
kind: figure
teaches: >
  The recommended "low-side" wiring convention for connecting the Trex
  unit's mA terminals to a device's analog output for best-accuracy current
  measurement — a wiring diagram showing the Trex unit, its lead set, and a
  connected instrument with the ammeter placed on the low (return) side of
  the loop.
concept-tags: [AMS Trex, ammeter, mA terminals, wiring diagram, current measurement, low-side connection]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-6 '\"Low-side\" ammeter connection,' p. 17 — callout A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption and callout (A. Analog output) confirmed directly. A wiring
  diagram, not a screenshot or device photo — catalogued as a figure like
  any other electrical schematic in the library.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-trex-with-module-removed
kind: figure
teaches: >
  The Trex unit with its communication module physically removed, shown
  alongside the detached module itself — the end state of the "remove a
  communication module" procedure, illustrating the connector recess on the
  unit and the module's own connector pins.
concept-tags: [AMS Trex, communication module, disassembly, maintenance]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-7 'Trex unit with the communication module removed,' p. 18"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption confirmed directly. The "Install a communication module"
  (§2.5.2) and "Remove a communication module" (§2.5.3) procedures
  themselves are physical/mechanical (screwdriver, module seating) with no
  on-screen menu navigation — out of scope for a `kind: navPath` record
  (the schema's `path` field presumes a software menu, which doesn't apply
  here) and this figure already illustrates the relevant end state, so no
  separate record was created for the procedure text itself. See Open Items.
mediaStatus: unreviewed
```

### Section 2.6 — Power module (printed pp. 19–23)

```yaml
id: amstrex-cmp-power-module-leds
kind: figure
teaches: >
  The power module's LED charge indicator at approximately 100 percent
  charge: the AC adapter LED (charging-status color), the row of power
  module LEDs (each representing ~20 percent charge), and the button that
  illuminates them.
concept-tags: [AMS Trex, power module, LEDs, charge indicator, battery]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-8 'LEDs showing approximately 100 percent charge,' p. 21 — lettered callouts A–C"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption and all three callouts confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-view-remaining-power-charge
kind: navPath
teaches: >
  How to check the Trex unit's remaining battery charge from the Settings
  menu (as an alternative to the physical power-module-button LED check
  already shown in Figure 2-8) — via Settings → More → Power Management.
concept-tags: [AMS Trex, power module, battery charge, Settings, Power Management]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.6.4 'View the remaining power module charge,' p. 21"
path: [Settings, More, Power Management]
action: >
  Tap Settings (or the status bar) → More → Power Management to view the
  current charge level on-screen. (The source procedure also describes a
  physical method — press the power module's own button to illuminate its
  LEDs — which is the subject of Figure 2-8 rather than this record, to
  avoid duplicating that teaching content.)
used-by: []
notes: >
  Judgment call, flagged: the source's own §2.6.4 procedure bundles one
  physical step (press the power module button, read LEDs) with one
  on-screen Settings step into a single numbered subsection. This record
  covers only the Settings/software half; the physical half is already
  fully covered by `amstrex-cmp-power-module-leds` (Figure 2-8), so its
  teaching content is not duplicated here.
```

```yaml
id: amstrex-cmp-trex-with-power-module-removed
kind: figure
teaches: >
  The Trex unit with its power module physically removed, shown alongside
  the detached power module itself — the end state of the "remove the
  power module" procedure.
concept-tags: [AMS Trex, power module, disassembly, maintenance]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-9 'Trex unit with the power module removed,' p. 23"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Real caption confirmed directly. As with the communication module, the
  "Charge the power module" (§2.6.5), "Install the power module" (§2.6.6),
  and "Remove the power module" (§2.6.7) procedures are physical/mechanical
  with no on-screen navigation — out of scope for `kind: navPath`; this
  figure already illustrates the relevant end state. See Open Items.
mediaStatus: unreviewed
```

### Section 2.7 — Accessories (printed pp. 24–26)

```yaml
id: amstrex-cmp-ff-power-plug
kind: figure
teaches: >
  The FOUNDATION fieldbus Power Plug accessory in isolation — the
  double-banana-jack adapter used with the Device Communicator Plus module
  to power one FOUNDATION fieldbus device.
concept-tags: [AMS Trex, accessories, FOUNDATION fieldbus, power plug]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-10 'FOUNDATION fieldbus Power Plug,' p. 24"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-ff-power-plug-attached
kind: figure
teaches: >
  The FOUNDATION fieldbus Power Plug attached to the Trex unit's FF pwr and
  positive FF terminals on top of the lead set — the physical connection
  state that follows from the standalone plug shown in Figure 2-10.
concept-tags: [AMS Trex, accessories, FOUNDATION fieldbus, power plug, lead set]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-11 'FOUNDATION fieldbus Power Plug attached to the Trex unit,' p. 25"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: amstrex-cmp-carrying-case
kind: figure
teaches: >
  The Trex carrying case: a shoulder-strap case with a closable faceplate
  over the touchscreen and storage compartments for lead sets and the AC
  adapter.
concept-tags: [AMS Trex, accessories, carrying case]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Figure 2-12 'The carrying case,' p. 26"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

### Section 2.8 — Power on or off (printed p. 26)

```yaml
id: amstrex-cmp-power-on-off
kind: navPath
teaches: >
  How to power the Trex unit on and off: powering on is a physical
  press-and-hold of the power button; powering off can be done either as a
  physical button-press shortcut or via the Settings menu.
concept-tags: [AMS Trex, power on, power off, Settings, Power Management]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.8 'Power on or off,' p. 26"
path: [Settings, More, Power Management, Turn off]
action: >
  To power on, press and hold the physical power button for one second. To
  power off, either quickly press the power button and tap Turn Off, or
  navigate Settings (or the status bar) → More → Power Management → Turn
  off.
used-by: []
notes: >
  Judgment call, flagged: this numbered subsection mixes a purely physical
  step (power on) with a step that has both a physical shortcut and a real
  Settings-menu path (power off). Included as one navPath record covering
  the function as the source presents it, rather than split or excluded,
  since a real menu path does exist for at least half of the function.
```

```yaml
id: amstrex-cmp-reboot
kind: navPath
teaches: >
  How to reboot the Trex unit from the Settings menu, without a physical
  hard-reset.
concept-tags: [AMS Trex, reboot, Settings, Power Management]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.8.1 'Reboot,' pp. 26–27"
path: [Settings, More, Power Management, Reboot]
action: Tap Settings (or the status bar) → More → Power Management → Reboot.
used-by: []
notes: >
  Real caption/heading and steps confirmed directly. Distinct from the
  physical "Hard shut down" (§2.8.2, press-and-hold power button for 12
  seconds) — see `amstrex-cmp-hard-shutdown` below.
```

```yaml
id: amstrex-cmp-hard-shutdown
kind: navPath
teaches: >
  How to force-shut-down an unresponsive Trex unit when the normal
  power-off path can't be used — a last-resort physical action, not a
  routine shutdown method.
concept-tags: [AMS Trex, hard shut down, power button, unresponsive unit]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.8.2 'Hard shut down,' pp. 26–27"
path: physical
action: >
  If the Trex unit is unresponsive, press and hold the power button for
  12 seconds — the unit shuts down. Do not use this as a normal shutdown
  method; contact technical support if repeated hard shutdowns are
  needed.
used-by: []
notes: >
  No on-screen menu applies — a purely physical last-resort action, hence
  `path: physical` per the standing convention (added 2026-09-14, see
  Process & Standards) rather than exclusion. Previously flagged in Open
  Items as falling outside both record kinds; closed by this addition.
```

### Section 2.9 — Home screen (printed pp. 27–29)

**Retroactively tightened 2026-09-14** to match ch3's stricter
figure/navPath line, adopted as the standing rule per Process &
Standards: `kind: figure` is reserved for wiring diagrams, hardware
photos, and genuine data-visualization — not plain UI screenshots that
just show a menu screen. Figures 2-13 "Home screen," 2-14 "Status bar,"
and 2-15 "Shortcut bar" (all plain on-device touchscreen screenshots,
each carrying a real figure number but no wiring/data-viz content) are
dropped entirely, matching ch3's own treatment of comparable content —
the navPath records that named them as a `screen:` reference already
describe the real tap sequence in prose, which is sufficient without a
screenshot.

```yaml
id: amstrex-cmp-return-to-home-screen
kind: navPath
teaches: >
  How to return to the Home screen from within an open application without
  exiting it.
concept-tags: [AMS Trex, Home screen, navigation, status bar]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.9.1 'Return to the Home screen,' p. 28"
path: [Status bar, Home]
action: Tap the status bar at the top of the screen, then tap Home.
used-by: []
notes: Real steps confirmed directly.
```

### Section 2.10 — Settings (printed pp. 30–38)

§2.10's own intro is a plain list of what can be configured, not a
component. §2.10.4 "Wireless communication" and §2.10.12 "Power
management" each open with purely descriptive content (an icon-meaning
table; a timer-comparison table) before their own real sub-procedures —
those descriptive tables are not catalogued as separate records (materiality
filter), and per the standing "no `kind: navSection`" rule, no top-level
summary record was created for either parent subsection. Each real
sub-procedure below is its own record.

```yaml
id: amstrex-cmp-view-open-applications
kind: navPath
teaches: >
  How to view every application currently open on the Trex unit — useful
  since some applications can't run simultaneously and multiple may be open
  at once.
concept-tags: [AMS Trex, Settings, Apps, open applications]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.1 'View all open applications,' p. 30"
path: [Settings, Apps]
action: Tap Settings (or the status bar), then tap Apps to display all open applications.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-close-application
kind: navPath
teaches: >
  How to close a running application from the Settings/Apps list, as an
  alternative to tapping Exit inside the application itself.
concept-tags: [AMS Trex, Settings, Apps, close application]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.2 'Close an application,' pp. 30–31 — identical
      procedure text repeated verbatim as Section 2.11.2 'Close an
      application,' p. 39"
path: [Settings, Apps]
action: Tap Settings (or the status bar), tap Apps, then select the X next to the application name.
used-by: []
notes: >
  Duplicate-content finding, flagged: the source prints this exact
  three-step procedure twice, verbatim, under two different numbered
  subsections (§2.10.2 and §2.11.2). Catalogued as ONE record citing both
  locators rather than two identical records, since it is genuinely one
  function taught twice rather than two distinct functions — a judgment
  call, not a mechanical application of "one record per numbered
  subsection." See Open Items.
```

```yaml
id: amstrex-cmp-change-screen-brightness
kind: navPath
teaches: How to adjust the Trex unit's screen brightness with the on-screen slider.
concept-tags: [AMS Trex, Settings, brightness, display]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.3 'Change the screen brightness,' p. 31"
path: [Settings, Brightness]
action: Tap Settings (or the status bar), tap Brightness, then use the slider to change the brightness.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-enable-disable-wireless
kind: navPath
teaches: How to turn the Trex unit's wireless radio on or off.
concept-tags: [AMS Trex, Settings, Wi-Fi, wireless communication]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.4 'Wireless communication' — 'Enable or disable
      wireless communication,' pp. 31–32"
path: [Settings, Wi-Fi, Wireless Networks]
action: Tap Settings (or the status bar), tap Wi-Fi, then tap the Wireless Networks option to enable or disable wireless.
used-by: []
notes: >
  Grain judgment call, flagged: §2.10.4 is one numbered parent subsection
  containing six distinct, independently useful Wi-Fi functions, each
  introduced by its own bold (but unnumbered) run-in heading with its own
  complete Procedure block. Each of the six — this record and the five that
  follow — was catalogued as its own navPath record, treating the bold
  headings as the document's real functional grain even though only the
  parent §2.10.4 carries a decimal number. Worth confirming this reading is
  correct if a similarly-structured section comes up again; see Open Items.
```

```yaml
id: amstrex-cmp-connect-broadcasting-wifi
kind: navPath
teaches: How to connect the Trex unit to a broadcasting (SSID-visible) wireless network.
concept-tags: [AMS Trex, Settings, Wi-Fi, wireless network, connect]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.4 'Wireless communication' — 'Connect the Trex
      unit to a broadcasting wireless network,' p. 32"
path: [Settings, Wi-Fi]
action: >
  Tap Settings (or the status bar), tap Wi-Fi, ensure Wireless Networks is
  ON, tap the desired network, then tap Connect and enter credentials if
  prompted. A checkmark and updated status-bar icon confirm the connection.
used-by: []
notes: >
  Cannot connect to a network that requires login credentials entered on a
  website (source note, confirmed directly). See the grain-judgment note on
  `amstrex-cmp-enable-disable-wireless` above — same §2.10.4 parent.
```

```yaml
id: amstrex-cmp-connect-nonbroadcasting-wifi
kind: navPath
teaches: How to manually connect the Trex unit to a non-broadcasting (hidden-SSID) wireless network.
concept-tags: [AMS Trex, Settings, Wi-Fi, wireless network, hidden network]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.4 'Wireless communication' — 'Connect the Trex
      unit to a non-broadcasting wireless network,' pp. 32–33"
path: [Settings, Wi-Fi, Add Wi-Fi Network...]
action: >
  Tap Settings (or the status bar), tap Wi-Fi, ensure Wireless Networks is
  ON, tap Add Wi-Fi Network..., enter the Network SSID and Security type,
  then tap Connect and enter credentials if prompted.
used-by: []
notes: Same §2.10.4 parent as the two records above — see the grain-judgment note there.
```

```yaml
id: amstrex-cmp-enter-network-address
kind: navPath
teaches: How to set a static IP address (or DHCP) for the Trex unit's wireless network connection.
concept-tags: [AMS Trex, Settings, Wi-Fi, IP address, static IP, DHCP]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.4 'Wireless communication' — 'Enter a network
      address for an AMS Trex unit,' p. 33"
path: [Settings, Wi-Fi, IP Address]
action: >
  Tap Settings, tap Wi-Fi and turn on Wireless Networks, tap IP Address and
  tap the IP Address Assignment line to change from DHCP to Static, enter
  an IP Address and/or Subnet Mask, then tap OK.
used-by: []
notes: >
  Source note: contact the network administrator before changing settings,
  and confirm the receiving port is configured for AMS Trex data. Same
  §2.10.4 parent as the records above.
```

```yaml
id: amstrex-cmp-forget-wireless-network
kind: navPath
teaches: How to make the Trex unit forget a saved wireless network so it stops auto-reconnecting.
concept-tags: [AMS Trex, Settings, Wi-Fi, forget network]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.4 'Wireless communication' — 'Forget a wireless
      network,' p. 33"
path: [Settings, Wi-Fi, Forget]
action: >
  Tap Settings (or the status bar), tap Wi-Fi then tap the network, then tap
  Forget. If unsynchronized data exists, a confirmation prompt appears
  before disconnecting.
used-by: []
notes: Same §2.10.4 parent as the records above.
```

```yaml
id: amstrex-cmp-change-connection-port
kind: navPath
teaches: How to change the network port the Trex unit uses to communicate with AMS Device Manager (default 8009).
concept-tags: [AMS Trex, Settings, Platform Communications, network port]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.4 'Wireless communication' — 'Change the default
      connection port,' p. 33"
path: [Settings, Platform Communications]
action: >
  Tap Settings → Platform Communications, then tap to change the default
  and enter a port number. Emerson recommends setting all AMS Trex units
  and AMS Device Manager stations to the same port.
used-by: []
notes: Last of the six §2.10.4 sub-functions — see the grain-judgment note on `amstrex-cmp-enable-disable-wireless` above.
```

```yaml
id: amstrex-cmp-view-hardware-os-info
kind: navPath
teaches: How to view Trex unit hardware/OS information — name, serial number, support contract, operating system, open-source licenses, and MAC address.
concept-tags: [AMS Trex, Settings, About, hardware information]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.5 'View information about the Trex hardware and
      operating system,' p. 34"
path: [Settings, More, About]
action: Tap Settings (or the status bar) → More → About, then tap OK.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-enter-device-name
kind: navPath
teaches: How to give the Trex unit a custom name (up to 20 characters) to distinguish it from other units at a site.
concept-tags: [AMS Trex, Settings, About, device name]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.6 'Enter a name for the Trex unit,' p. 34"
path: [Settings, More, About, Name]
action: >
  Tap Settings (or the status bar) → More → About → Name, enter a new name
  (up to 20 characters), then tap OK. The default name is
  "TrexXXXXXXXXXXXX" (serial number); the custom name displays in Upgrade
  Studio and AMS Device Manager.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-view-application-version
kind: navPath
teaches: How to view the version numbers of every installed application on the Trex unit.
concept-tags: [AMS Trex, Settings, installed applications, version number]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.7 'View the application version number,' p. 34"
path: [Settings, More, Installed Applications]
action: Tap Settings (or the status bar) → More → Installed Applications to display all version numbers, then tap OK to close.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-set-time-date
kind: navPath
teaches: How to set the Trex unit's date, date format, time, time format, time zone, and daylight-saving behavior.
concept-tags: [AMS Trex, Settings, date and time, time zone]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.8 'Set the time and date,' pp. 34–35"
path: [Settings, More, Date & Time]
action: >
  Tap Settings (or the status bar) → More → Date & Time, edit Auto adjust
  daylight savings, Date, Date Format, Time, Time Format, and/or Time Zone
  as needed, then tap OK. Note: connecting to a PC or wireless network
  auto-updates the time to match.
used-by: []
notes: Real steps and option table confirmed directly.
```

```yaml
id: amstrex-cmp-calibrate-touchscreen-settings
kind: navPath
teaches: How to recalibrate the Trex touchscreen if it becomes inaccurate, including the arrow-key workaround for a fully unresponsive screen.
concept-tags: [AMS Trex, Settings, touchscreen, calibration]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.9 'Calibrate the touchscreen,' p. 35"
path: [Settings, More, Display, Calibrate touch screen]
action: >
  Tap Settings (or the status bar) → More → Display → Calibrate touch
  screen, then tap the screen as indicated and tap OK. If the touchscreen
  is fully unresponsive, this menu can still be reached and initiated using
  the keypad's arrow keys.
used-by: []
notes: >
  Distinct from the hardware/hazard content of Section 2.17.2 "Calibration"
  (p. 51), which states that formal NIST-standard calibration is not
  supported on the AMS Trex at all — this record is specifically the
  on-screen touch-input recalibration function, a different concept
  sharing the word "calibration." Flagged to avoid confusion between the
  two.
```

```yaml
id: amstrex-cmp-set-language
kind: navPath
teaches: How to change the Trex unit's display language (requires a reboot).
concept-tags: [AMS Trex, Settings, language, localization]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.10 'Set the language on Trex,' p. 35"
path: [Settings, More, Language]
action: >
  Tap the toolbar → More → Language, select a language, then tap OK. The
  unit reboots into the new language. Not all applications support all
  languages, and non-Latin character entry is not supported.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-view-available-memory
kind: navPath
teaches: How to view the amount of memory available on the Trex unit.
concept-tags: [AMS Trex, Settings, memory management]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.11 'View the amount of available memory,' p. 36"
path: [Settings, More, Memory Management]
action: Tap Settings (or the status bar) → More → Memory Management to view available memory.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-enter-exit-suspend-mode
kind: navPath
teaches: How to put the Trex unit into (or wake it from) suspend mode — screen off, connectivity and any active device power/communication maintained.
concept-tags: [AMS Trex, Settings, Power Management, suspend mode]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.12 'Power management' — 'Enter or exit suspend
      mode,' pp. 36–37"
path: [Settings, More, Power Management, Suspend]
action: >
  To enter suspend: quickly press the power button and tap Suspend, or tap
  Settings (or the status bar) → More → Power Management → Suspend, or wait
  for the suspend timer. To exit: quickly press the power button or tap the
  touchscreen.
used-by: []
notes: >
  First of four real sub-functions under the §2.10.12 "Power management"
  parent — same grain-judgment pattern as §2.10.4's six sub-functions (see
  the note on `amstrex-cmp-enable-disable-wireless`). The parent's own
  three-row timer-comparison table (Dim Display, Suspend, Shut Down timers)
  is purely descriptive and not separately catalogued.
```

```yaml
id: amstrex-cmp-set-backlight-timer
kind: navPath
teaches: How to set the backlight dim timer to conserve power after a period of inactivity (only active when not on AC power).
concept-tags: [AMS Trex, Settings, Power Management, backlight timer]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.12 'Power management' — 'Set the backlight
      timer,' p. 37"
path: [Settings, More, Power Management, Dim display after]
action: >
  Tap Settings (or the status bar) → More → Power Management → Dim display
  after, select the number of minutes (default 5), then tap OK.
used-by: []
notes: Same §2.10.12 parent as the record above.
```

```yaml
id: amstrex-cmp-set-suspend-timer
kind: navPath
teaches: How to set the timer that automatically enters suspend mode after a period of inactivity (only active when not on AC power).
concept-tags: [AMS Trex, Settings, Power Management, suspend timer]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.12 'Power management' — 'Set the suspend timer,'
      p. 37"
path: [Settings, More, Power Management, Suspend after]
action: >
  Tap Settings (or the status bar) → More → Power Management → Suspend
  after, select the number of minutes (default Never), then tap OK.
used-by: []
notes: Same §2.10.12 parent as the records above.
```

```yaml
id: amstrex-cmp-set-shutdown-timer
kind: navPath
teaches: How to set the timer that automatically shuts down the Trex unit after a period of inactivity (only active when not on AC power).
concept-tags: [AMS Trex, Settings, Power Management, shut down timer]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.12 'Power management' — 'Set the shut down
      timer,' pp. 37–38"
path: [Settings, More, Power Management, Turn off after]
action: >
  Tap Settings (or the status bar) → More → Power Management → Turn off
  after, then select the number of minutes (default 30). Note: the three
  §2.10.12 timers are cumulative (e.g., a 5-minute dim + Never suspend +
  10-minute shutdown shuts the unit down after 15 minutes total).
used-by: []
notes: Last of the four §2.10.12 sub-functions.
```

```yaml
id: amstrex-cmp-enable-disable-hart-autoconnect
kind: navPath
teaches: >
  How to enable or disable automatic HART device connection in the Field
  Communicator application — useful to disable on multi-drop loops, with a
  THUM adapter at address zero, or with multiple THUM adapters.
concept-tags: [AMS Trex, Settings, Field Communicator App Settings, HART, auto-connect]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.13 'Enable or disable automatically connecting
      to HART devices,' p. 38"
path: [Settings, More, Field Communicator App Settings, Auto-Connect]
action: >
  Tap Settings (or the status bar) → More → Field Communicator App
  Settings, tap Auto-Connect to toggle the option, then tap OK.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-enable-diagnostic-logging
kind: navPath
teaches: How to enable Diagnostic Logging for the Field Communicator application, for use only when directed by Emerson service personnel.
concept-tags: [AMS Trex, Settings, Field Communicator App Settings, diagnostic logging]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.10.14 'Enable Diagnostic Logging,' p. 38"
path: [Settings, More, Field Communicator App Settings, Diagnostic Logging]
action: From Settings → Field Communicator App Settings, tap Diagnostic Logging to ON.
used-by: []
notes: >
  Real step confirmed directly. Thin content (a single-sentence action, no
  numbered list) but a genuine, independently-numbered function with a real
  path — included rather than excluded.
```

### Section 2.11 — Applications on the Trex unit (printed pp. 38–39)

§2.11 and §2.11.1 (Activation) are descriptive prose about what activation
does, with no numbered steps of their own — excluded under the materiality
filter (the real activation procedure lives in §2.14.3, catalogued below).
§2.11.2 "Close an application" repeats §2.10.2 verbatim — see
`amstrex-cmp-close-application` above, catalogued once under §2.10 with
both locators cited.

### Section 2.12 — USB communication (printed pp. 39–40)

No components. Descriptive capabilities and cautions only, no numbered
steps.

### Section 2.13 — Synchronizing AMS Trex data with AMS Device Manager (printed pp. 40–42)

§2.13's own intro is descriptive context for the three real sub-procedures
below; not separately catalogued.

```yaml
id: amstrex-cmp-sync-ams-trex-usb
kind: navPath
teaches: How to manually synchronize AMS Trex data to a paired AMS Device Manager station over USB.
concept-tags: [AMS Trex, AMS Device Manager, synchronization, USB, Audit Trail]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.13.1 'Synchronize AMS Trex data to AMS Device
      Manager using USB,' p. 41"
path: [AMS Device Manager station, USB connection]
action: >
  Connect the micro-USB end of the cable to the Trex unit, then connect the
  USB end to the AMS Device Manager station. The Trex unit begins
  downloading Audit Trail events to the AMS Device Manager Audit Trail.
  Prerequisites: AMS Device Manager must be licensed for AMS Trex and
  already paired with the unit. If the unit's wireless is on and connected
  to a network containing the paired station, USB sync isn't needed — new
  data syncs automatically.
used-by: []
notes: >
  Physical USB-connection procedure rather than an on-device Settings menu,
  but catalogued as navPath because it represents a real configuration/
  administration function of the Trex-to-AMS-Device-Manager software
  ecosystem, matching the ValveLink Mobile Software Quick Start Guide's own
  precedent of documenting Upgrade Studio-driven file-transfer procedures.
```

```yaml
id: amstrex-cmp-pair-trex-ams-device-manager
kind: navPath
teaches: How to pair an AMS Trex unit with an AMS Device Manager station (a one-station-at-a-time relationship, initiated only from the station side).
concept-tags: [AMS Trex, AMS Device Manager, pairing, USB]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.13.2 'Pair an AMS Trex unit with an AMS Device
      Manager station,' pp. 41–42"
path: [AMS Device Manager, AMS Trex Units node, Pair Trex Unit]
action: >
  Connect the microUSB cable to the Trex unit and the USB end to an AMS
  Device Manager station; in AMS Device Manager, expand the AMS Trex Units
  node, right-click the unpaired icon, and select Pair Trex Unit.
  Prerequisites: the pairing user needs Manage Connections permission; only
  one concurrent USB Trex connection per station is supported; pairing can
  only be initiated from the AMS Device Manager side, never from the Trex
  unit itself.
used-by: []
notes: Real steps and prerequisites confirmed directly.
```

```yaml
id: amstrex-cmp-unpair-trex-unit
kind: navPath
teaches: How to unpair an AMS Trex unit from an AMS Device Manager station, either from the station (preferred, to avoid data loss) or from the Trex unit itself.
concept-tags: [AMS Trex, AMS Device Manager, unpairing, USB, Settings]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.13.3 'Unpair an AMS Trex unit,' p. 42 — two named
      methods, 'Unpair from an AMS Device Manager station' and 'Unpair from
      an AMS Trex unit,' both under one numbered subsection"
path: [Settings, More, AMS Device Manager Sync]
action: >
  Preferred: from AMS Device Manager, connect the Trex unit via USB and
  right-click the unit, choosing Unpair Trex Unit (pairing to a different
  station also unpairs from the current one). Alternative, from the Trex
  unit itself: connect via USB, then on the unit tap Settings (or the
  status bar) → More → AMS Device Manager Sync → X, and confirm. Any
  in-process sync data is lost if unpairing while disconnected.
used-by: []
notes: >
  Consolidated as one record: the source presents both methods as two
  named alternatives for the same single function ("unpair") under one
  numbered subsection (§2.13.3), matching the standing "consolidate when
  the source treats several methods as one continuous procedure" rule
  rather than a case for two separate records.
```

### Section 2.14 — Upgrade Studio (printed pp. 43–46)

§2.14's own intro is descriptive context for the four real sub-procedures
below; not separately catalogued.

```yaml
id: amstrex-cmp-connect-upgrade-studio-usb
kind: navPath
teaches: How to connect the Trex unit to the Upgrade Studio PC application over USB.
concept-tags: [AMS Trex, Upgrade Studio, USB, connection]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.14.1 'Connect the Trex unit to Upgrade Studio using
      USB,' pp. 43–44"
path: [Upgrade Studio, Activate Units or Install Updates]
action: >
  Ensure the Trex unit is powered on, connect the microUSB cable to the
  unit and the PC running Upgrade Studio, then in Upgrade Studio click
  Activate Units or Install Updates (select Show All Trex units if the
  unit doesn't appear). Only one Trex unit can connect via USB at a time;
  the USB cable must be 2 meters or shorter.
used-by: []
notes: Real steps and prerequisites confirmed directly.
```

```yaml
id: amstrex-cmp-create-trex-online-account
kind: navPath
teaches: How to create a Trex online user account, needed for activation, downloading updates, viewing support contract info, and the online store.
concept-tags: [AMS Trex, Upgrade Studio, user account]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.14.2 'Create a Trex online user account,' p. 44"
path: [Upgrade Studio, Login, Create an Account]
action: >
  In Upgrade Studio, click Login → Create an Account (opens a web browser),
  enter your information, click Request Account, then wait for an email
  confirming the account is available and follow any additional steps in
  that email.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-activate-trex-unit
kind: navPath
teaches: How to activate the Trex unit via Upgrade Studio with an internet connection, enabling full functionality.
concept-tags: [AMS Trex, Upgrade Studio, activation]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.14.3 'Activate the Trex unit,' p. 45"
path: [Upgrade Studio, Activate Units, Login, Activate]
action: >
  Connect the Trex unit to the PC, in Upgrade Studio click Activate Units,
  click Login, enter credentials and log in (or request an activation code
  if not logging in), click the Trex unit on the left, then click Activate.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-activate-trex-offline
kind: navPath
teaches: How to activate the Trex unit without an internet connection, including the air-gap deployment export/import workflow.
concept-tags: [AMS Trex, Upgrade Studio, activation, offline, air-gap]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.14.4 'Activate the Trex unit without using an
      internet connection,' pp. 45–46"
path: [Upgrade Studio, Activate Units, Export, Import Package]
action: >
  Request an activation code from Emerson by email or phone with the
  serial number; connect the Trex unit, click Activate Units, click the
  unit, enter/paste the activation code, and click Activate. To transfer
  usage data without an internet connection: click More → Export, show
  details under Trex Synchronization Files, select and export the files,
  then either email them to Emerson directly, or — for an air-gap
  deployment — open Upgrade Studio on an internet-connected PC, transfer
  the file there, click More → Import Package, browse to the file, import,
  and log in to upload it.
used-by: []
notes: Real steps confirmed directly, including the full 12-step air-gap sub-procedure.
```

### Section 2.15 — AMS Trex Security (printed pp. 46–50)

§2.15's own intro (Initial setup, Local security, Enterprise security,
Near-field communication (NFC) card access) is descriptive context for the
eight real sub-procedures below; not separately catalogued.

```yaml
id: amstrex-cmp-enable-local-security
kind: navPath
teaches: How to enable Local security on a Trex unit (only Trex-created user accounts can access it).
concept-tags: [AMS Trex, security, Upgrade Studio, local security]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.15.1 'Enable local security for a Trex unit,' p. 47"
path: [Upgrade Studio, More, AMS Trex Security, Local]
action: >
  Connect the Trex unit to Upgrade Studio, select More → AMS Trex Security,
  click the unit, select Local, click Change Security Type, click Yes (the
  unit restarts), click OK, then on the Trex unit create a local
  administrator (username, password, confirm) and tap OK.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-enable-enterprise-security
kind: navPath
teaches: How to enable Enterprise security on a Trex unit (requires Windows Active Domain credentials over a WPA2-Enterprise wireless network).
concept-tags: [AMS Trex, security, Upgrade Studio, enterprise security]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.15.2 'Enable enterprise security for a Trex unit,'
      pp. 47–48"
path: [Upgrade Studio, More, AMS Trex Security, Enterprise]
action: >
  Connect the Trex unit to Upgrade Studio, select More → AMS Trex Security,
  click the unit, select Enterprise, click Change Security Type, click Yes
  (the unit restarts), click OK, then on the Trex unit enter Domain,
  Network SSID (WPA2-Enterprise required), User name, and Password, and
  tap OK.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-disable-security
kind: navPath
teaches: How to disable security on a Trex unit (only the Windows user who enabled it can disable it; deletes all user info and NFC pairings).
concept-tags: [AMS Trex, security, Upgrade Studio, disable security]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.15.3 'Disable security for a Trex unit,' p. 48"
path: [Upgrade Studio, More, AMS Trex Security, None]
action: >
  Connect the Trex unit to Upgrade Studio, select More → AMS Trex Security,
  click the unit, select None, click Change Security Type, click Yes (the
  unit restarts), then click OK.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-create-local-user-account
kind: navPath
teaches: How the local administrator adds a new local user account on a Trex unit with Local security enabled.
concept-tags: [AMS Trex, security, local security, add user]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.15.4 'Create a local user account,' pp. 48–49"
path: [Settings, Security Management, Add user]
action: >
  Log in as the local administrator, tap Settings → Security Management →
  Add user, enter a user name, and tap OK. The new user can only log in
  after the unit restarts, and is prompted for a password on first login.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-delete-local-user
kind: navPath
teaches: How the local administrator removes a local user account from a Trex unit.
concept-tags: [AMS Trex, security, local security, remove user]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.15.5 'Delete a local user,' p. 49"
path: [Settings, Security Management, Remove user]
action: Log in as the local administrator, tap Settings → Security Management → Remove user, select a user, then tap Yes.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-reset-local-user-password
kind: navPath
teaches: How the local administrator resets a local user's password on a Trex unit.
concept-tags: [AMS Trex, security, local security, reset password]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.15.6 'Reset the password of a local user,' p. 49"
path: [Settings, Security Management, Reset Password]
action: >
  Log in as the local administrator, tap Settings → Security Management →
  Reset Password, select a user, then tap Yes. The user is prompted to
  enter a new password on next login.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-pair-nfc-card
kind: navPath
teaches: How to pair an NXP NTAG21x-series NFC card to a user for badge-style access to a secured Trex unit.
concept-tags: [AMS Trex, security, NFC card, pairing]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.15.7 'Pair an NFC card to a user,' pp. 49–50"
path: [Settings, Security Management, Pair NFC card]
action: >
  Log in to the Trex unit, tap Settings → Security Management → Pair NFC
  card, tap the NFC card against the unit's navigation buttons to scan it,
  enter a 4-digit PIN, then tap OK. Requires Local or Enterprise security
  already enabled; only one card/PIN per user.
used-by: []
notes: Real steps confirmed directly.
```

```yaml
id: amstrex-cmp-remove-nfc-pairing
kind: navPath
teaches: How to remove a paired NFC card from a user on a Trex unit.
concept-tags: [AMS Trex, security, NFC card, remove pairing]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.15.8 'Remove a paired NFC card,' p. 50"
path: [Settings, Security Management, Remove NFC pairing]
action: Log in to the Trex unit, tap Settings → Security Management → Remove NFC pairing, then tap Yes.
used-by: []
notes: Real steps confirmed directly. Last of the eight §2.15 sub-functions.
```

### Section 2.16 — Transferring files to a PC (printed p. 50)

No components. One descriptive paragraph naming the Trex File Transfer
Utility and pointing to Upgrade Studio's own Help for details — no steps
given in this manual itself.

### Section 2.17 — Maintenance and repair (printed pp. 50–51)

§2.17's own intro is a bulleted index of maintenance tasks covered
elsewhere (touchscreen cleaning, power module install/remove, communication
module install/remove — all already handled above) — not separately
catalogued. §2.17.2 "Calibration" (p. 51) is a descriptive paragraph
stating that formal calibration is not supported on the AMS Trex at all —
not a procedure, and already distinguished in
`amstrex-cmp-calibrate-touchscreen-settings`'s notes above.

```yaml
id: amstrex-cmp-replace-stand
kind: navPath
teaches: >
  How to replace the Trex unit's stand — a real 5-step physical
  procedure (Torx screwdriver required).
concept-tags: [AMS Trex, maintenance, stand, replace]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 2.17.1 'Replace the stand,' p. 50"
path: physical
action: >
  Place the Trex unit face down on a level, secure surface. Lift up the
  stand. Use a Torx screwdriver to loosen and remove the two screws under
  the stand. Remove the stand. Place the new stand on the Trex unit.
used-by: []
notes: >
  No on-screen menu applies — a purely physical maintenance procedure,
  hence `path: physical` per the standing convention (added 2026-09-14,
  see Process & Standards) rather than exclusion. Previously flagged in
  Open Items as falling outside both record kinds; closed by this
  addition.
```

## Open Items

- **Chapter/scope boundary, confirmed directly**: PDF pp. 7–52 rendered and
  read in full. p.7 confirmed as the real "2 AMS Trex Device Communicator
  overview" chapter start; p.53 confirmed as chapter 3's real start
  ("3 Field Communicator application"); p.52 confirmed genuinely blank
  (header/footer only) — the same "blank trailing page before the next
  chapter" shape the Control Valve Handbook's chapters 6–7 showed. Zero page
  offset confirmed throughout (printed page number = PDF page number).
- **Document id discrepancy, flagged honestly**: the task brief expected a
  `D...`-style document number. Checked the title page, copyright page,
  every footer in range, and the back cover directly — this PDF prints no
  document/part number anywhere, only "Rev 8, February 2023." The
  Precedence table and every record's `source.doc` citation reflect what is
  actually printed, not the assumed convention.
- **Retroactive tightening, 2026-09-14**: three plain UI-screenshot
  figures (2-13 Home screen, 2-14 Status bar, 2-15 Shortcut bar) were
  dropped to match ch3's stricter figure/navPath line, now the standing
  rule in Process & Standards — `kind: figure` reserved for wiring
  diagrams, hardware photos, and genuine data-visualization, not plain
  menu-screen captures. The `screen:` pointers on the navPath records that
  had referenced them were removed (their own prose already names the
  real tap path). **Two more records were added** the same day —
  `amstrex-cmp-hard-shutdown` (§2.8.2) and `amstrex-cmp-replace-stand`
  (§2.17.1) — using the new `path: physical` convention, closing the real
  coverage gap these two procedures had been sitting in (see below).
- **Full coverage — figures**: 12 numbered figures remain after the
  tightening (Figure 2-1 through 2-12, sequential within the retained
  set — 2-13/2-14/2-15 dropped), all confirmed by direct visual inspection
  against the rendered page images. Plus one genuine unnumbered figure (the
  §2.3.1 gesture-icon legend, pp. 11–12, kept — matches ch3's own real
  precedent of keeping the §3.14.1 icon legend, since an icon/pictogram
  reference table is a different content type from a captured app screen).
  **Total figures: 13.**
- **Full coverage — navPath**: every numbered subsection from §2.1 through
  §2.17 was read and classified. **Total navPath records: 44** (43 distinct
  functions; the `amstrex-cmp-close-application` record covers two
  identically-worded source locations, §2.10.2 and §2.11.2 — see the
  duplicate-content finding below). Includes the two `path: physical`
  records added 2026-09-14.
- **Total components this file: 57** (13 `kind: figure`, 44 `kind: navPath`).
- **Materiality-filter exclusions (descriptive, no real steps or path) —
  named explicitly, not silently skipped**: §2.1, §2.1.1 Hazardous areas,
  §2.2.1 Keypad (descriptive intro paired with Figure 2-2, no separate
  procedure), §2.3 Touchscreen, §2.3.2 Enter text/numbers/special
  characters, §2.3.3 Clean the touchscreen, §2.5.1 Ammeter on the Device
  Communicator Plus (a numbered descriptive list of ammeter locations, not
  user-performed steps), §2.9.2 Status bar and §2.9.3 Shortcut bar
  (descriptive bullet lists — their own figures, 2-14/2-15, are also now
  dropped per the retroactive tightening above), the §2.10.4 icon-meaning
  table and §2.10.12 timer-comparison table (descriptive parent content
  for their own real sub-procedures, which *are* catalogued individually),
  §2.11 and §2.11.1 Activation, §2.12 USB communication, §2.13's own
  intro, §2.14's own intro, §2.15's own intro, §2.16 Transferring files to
  a PC, and §2.17's own intro and §2.17.2 Calibration.
- **Physical/mechanical procedures — closed 2026-09-14**: §2.5.2 Install a
  communication module, §2.5.3 Remove a communication module, §2.6.5
  Charge the power module, §2.6.6 Install the power module, and §2.6.7
  Remove the power module are real, numbered physical procedures whose
  teaching content is already fully carried by an existing figure showing
  the relevant before/after state (Figure 2-7 for the communication
  module, Figure 2-9 for the power module) — no separate record, per the
  navPath-to-figure dedup rule, to avoid teaching the same content twice.
  §2.8.2 Hard shut down and §2.17.1 Replace the stand had no accompanying
  figure at all and were previously flagged here as falling outside both
  record kinds — now closed as `amstrex-cmp-hard-shutdown` and
  `amstrex-cmp-replace-stand`, both `path: physical`, per the standing
  convention added to Process & Standards the same day.
- **Grain judgment calls, flagged for confirmation**:
  - §2.10.4 "Wireless communication" and §2.10.12 "Power management" are
    each a single numbered parent subsection containing multiple distinct
    functions under bold-but-unnumbered run-in headings (six under §2.10.4,
    four under §2.10.12). Each bold heading's function was catalogued as
    its own navPath record (ten records total across the two parents)
    rather than lumping each parent into one record — a defensible but real
    editorial call, since the source's own numbering convention only goes
    one level deep here where §2.15's parallel content uses real
    sub-numbers (§2.15.1–§2.15.8).
  - §2.4.1 "Serial numbers" and §2.6.4 "View the remaining power module
    charge" are both thin/mixed cases — a mostly-descriptive subsection
    with one real embedded on-screen path, or a subsection blending one
    physical step with one on-screen step. Both were included as navPath
    rather than excluded, on the reasoning that a real function + real path
    exists even where the surrounding content is thin or mixed.
  - §2.8 "Power on or off" mixes a purely physical power-on step with a
    power-off step that has both a physical shortcut and a real Settings
    path; catalogued as one record covering the function as the source
    presents it.
- **Duplicate-content finding**: §2.10.2 and §2.11.2, both titled "Close an
  application," print the identical three-step procedure verbatim in two
  places (pp. 30–31 and p. 39). Catalogued once (`amstrex-cmp-close-application`)
  with both locators cited in the record, rather than as two identical
  records — flagged as a judgment call, not a mechanical application of
  "one record per numbered subsection."
- **No duplicate figure numbers and no source citation errors found** among
  the source's real printed Figures 2-1 through 2-15 (2-13/2-14/2-15
  correctly identified and, per the 2026-09-14 tightening, dropped as
  content-type exclusions — not a duplication or citation-error finding).
- **Table-exclusion confirmation**: this chapter's real data tables (Home
  screen application descriptions, gesture-description table pairing with
  the gesture-icon figure, Settings option tables, power-management timer
  table, Date & Time option table) are genuinely separate from — and none
  are printed as — numbered "Figure" or "Table" content; none were
  excluded as tables because none were ever figure-numbered content to
  begin with. No genuinely separately-numbered "Table N" content exists in
  this chapter.
- **Cross-reference findings**: ran the whole-library collision sweep
  before starting (`grep -h "^id: " "20 - Source Library"/Component
  Index*.md | sort | uniq -d`) — baseline showed two pre-existing,
  unrelated collisions (`ogas-cmp-amine-treatment-unit`,
  `ogas-cmp-compressor-system` in the Oil & Gas Sourcebook, not touched by
  this pass) plus a false-positive match against the Process & Standards
  doc's own literal schema-template line (`id: <source-prefix>-cmp-
  <descriptive-slug>`) — neither is this pass's concern. Also checked the
  existing `Component Index — ValveLink Mobile Software Quick Start
  Guide.md`, which had already flagged (2026-09-21) that AMS Trex was
  unindexed and noted its Figure 2-1 "Front view" as a genuinely different
  capture from that guide's own Figure 1 "Trex Communicator" photo — no
  further action needed here; the two remain distinct records in their
  respective files, as that file already documented.
- **Collision sweep, after this pass**: re-ran the same sweep — see below.
- **Archive/legacy material**: none consulted, none needed — Rev 8
  (February 2023) is a first-party current-edition document and the sole
  source for this file.
