---
title: Subject-Matter Index — ValveLink Mobile Software Quick Start Guide
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: ValveLink Mobile Software Quick Start Guide (D103408X012, September 2024, Version 6.1)
updated: 2026-09-21
---

# Subject-Matter Index — ValveLink Mobile Software Quick Start Guide

One of 7 manuals acquired for the 17101 gap-analysis, indexed in this pass.
Document-grain, whole-guide scope, matching the Technical Publications
convention. **Flat named sections** (Installation/Establishing a
Connection/Navigation Tips/Graph Controls/File Transfer/Menu Structure —
no chapter numbers). Every page rendered (150dpi) and visually inspected —
20 real pages total.

**Content type note**: this is a software quick-start guide, not hardware
documentation — every figure is an app-UI or desktop-software screenshot,
not a physical cutaway or photo. `delivery: screen capture` is used
throughout instead of the usual "existing figure (crop)," per the
convention already anticipated for DVC6200's own software-menu figures.

Real page range: PDF pages 1–20 (the document's own printed folios run 2
behind the PDF page index — PDF p.3 is printed p.1 — confirmed directly by
reading the visible page-footer numbers, not assumed).

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **ValveLink Mobile Software Quick Start Guide** | D103408X012 · September 2024 · Version 6.1 | `current` | First-party Emerson/Fisher document; sole source for this file's records. |

## The required cross-reference check — done, real finding

Franz's directive asked for a direct visual comparison against the
already-acquired **AMS Trex Device Communicator User Guide**, since both
cover connecting to a Trex unit and no drawing-number convention exists for
either (both are screenshot-based). **Note: the AMS Trex User Guide is not
yet indexed in the Subject-Matter Index** — it has no Subject-Matter Index file of
its own to cross-reference against, so this check was done directly
against the raw AMS Trex PDF's own pages, not an existing record. Real
finding, worth flagging for whoever indexes AMS Trex next: **that document
is substantially larger and differently structured than anything else in
this Technical Publications batch** — 206 pages, 97 real figures, using a
genuine chapter-scoped numbering convention (`Figure 2-1`, `Figure 2-10`,
...), unlike any other Technical Publications manual indexed so far. Out of
scope for this pass — noting it here so it isn't lost before AMS Trex gets
its own directive.

**The comparison itself**: this guide's Figure 1 ("Trex Communicator," p.1)
and the AMS Trex User Guide's Figure 2-1 ("Front view," p.9) show the same
physical device model, but are genuinely different captures — confirmed by
direct visual inspection, not assumed from similar subject matter. The AMS
Trex figure is a hardware-orientation diagram (screen off/dim, lettered
callouts A–F for ports/buttons/touchscreen/keypad). This guide's Figure 1 is
a software-context photo (screen actively displaying a live ValveLink Total
Scan graph). Not a shared screenshot reused across documents — two distinct
real images of the same device, serving different purposes. No merge, no
cross-reference needed beyond noting this comparison was made.

## Components

### Installation — AMS Trex Device Communicator (printed p. 1)

```yaml
id: fvlm-cmp-trex-communicator-photo
teaches: >
  The AMS Trex Device Communicator as used with ValveLink Mobile software —
  a photo of the physical handheld unit with the ValveLink app actively
  running, showing a completed Total Scan pressure-vs-travel graph on its
  screen.
concept-tags: [ValveLink Mobile, AMS Trex, device communicator, Total Scan]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Figure 1 'Trex Communicator,' p. 1"
delivery: screen capture — device photo with live app screen
used-by: []
notes: >
  Compared directly against the AMS Trex User Guide's own Figure 2-1
  ("Front view," p. 9) — same physical device model, genuinely different
  capture (that figure shows the device with a dim/off screen and lettered
  hardware callouts; this one shows the screen actively running the
  ValveLink app). Not a duplicate — see the cross-reference section above.
mediaStatus: unreviewed
```

### Establishing a Connection (printed p. 3)

```yaml
id: fvlm-cmp-home-screen
teaches: >
  The ValveLink Mobile home screen's full icon grid: Connect, Setup,
  Calibration, Status, Diagnostics, Utilities, and Stroke Valve — the
  starting point for every workflow the rest of the guide describes.
concept-tags: [ValveLink Mobile, home screen, app menu, HART]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Figure 2 'Home Screen,' p. 3"
delivery: screen capture
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

### Navigation Tips (printed p. 4)

```yaml
id: fvlm-cmp-list-control-navigation
teaches: >
  How list-style parameter screens are navigated: grab-and-drag scrolling,
  the selection button (>) for editable parameters, and the no-entry symbol
  marking parameters that can't be changed in the current instrument mode.
concept-tags: [ValveLink Mobile, list control, navigation, parameter selection]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Figure 3 'List Control Navigation,' p. 4 — Initial Setup parameter list example"
delivery: screen capture
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

### Graph Controls (printed pp. 5–6)

```yaml
id: fvlm-cmp-graph-zoom-translate
teaches: >
  Graph zoom (drag a selection rectangle around a region of interest) and
  translate (grab an axis scale and slide it) controls on a real Total Scan
  pressure-vs-travel plot, with the two gestures explicitly labelled and
  arrowed on the figure itself.
concept-tags: [ValveLink Mobile, graph controls, zoom, translate, Total Scan]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Figure 4 'Graph Zoom and Translate Controls,' p. 5"
delivery: screen capture
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: fvlm-cmp-graph-crosshairs
teaches: >
  Graph crosshairs and coordinate readout — a movable crosshair pair
  showing live X-Y coordinates (travel %, pressure) in the lower-right
  corner of the graph.
concept-tags: [ValveLink Mobile, graph controls, crosshairs, coordinates]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Figure 5 'Graph Crosshairs and Coordinates,' p. 6"
delivery: screen capture
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: fvlm-cmp-pd-real-time-graphs
teaches: >
  A PD (Performance Diagnostics) real-time graph showing two stacked
  variable traces (travel %, set point %) plotted against time — the
  two-graph layout PD tests use to display up to four variables at once.
concept-tags: [ValveLink Mobile, PD graph, performance diagnostics, real-time]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Figure 6 'PD Real Time Graphs,' p. 6"
delivery: screen capture
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

### ValveLink Mobile File Transfer on AMS Trex Device Communicator (printed pp. 7–8)

```yaml
id: fvlm-cmp-upgrade-studio-file-transfer-menu
teaches: >
  Opening the file-transfer workflow from Emerson's desktop Upgrade Studio
  application (More menu > File Transfer) — the first step in getting
  ValveLink Mobile diagnostic data off the Trex unit and onto a PC.
concept-tags: [ValveLink Mobile, Upgrade Studio, file transfer, desktop software]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Figure 7 'File Transfer,' p. 7"
delivery: screen capture — desktop application, not the mobile device UI
used-by: []
notes: >
  Distinct from every other figure in this file — this and the next record
  are the only two showing the desktop Upgrade Studio application rather
  than the Trex handheld's own screen.
mediaStatus: unreviewed
```

```yaml
id: fvlm-cmp-transfer-valvelink-dataset
teaches: >
  Transferring the ValveLink Mobile dataset from a connected Trex unit to a
  PC via Upgrade Studio's Transfer button, and the resulting .exp file
  destination path — the step that produces files ValveLink desktop
  software can then import.
concept-tags: [ValveLink Mobile, Upgrade Studio, file transfer, dataset export]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Figure 8 'Transfer ValveLink Mobile Dataset,' p. 8"
delivery: screen capture — desktop application
used-by: []
notes: Real caption confirmed directly.
mediaStatus: unreviewed
```

```yaml
id: fvlm-cmp-import-tag-data-menu
teaches: >
  Importing the transferred dataset into ValveLink desktop software via
  its Tag menu's "Import Tag Data..." command — the final step completing
  the file-transfer workflow started in the two preceding figures.
concept-tags: [ValveLink Mobile, ValveLink software, import tag data, file transfer]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Figure 9 'Import Tag Data,' p. 8"
delivery: screen capture — desktop application
used-by: []
notes: >
  Real caption confirmed directly. Last numbered figure in the document —
  everything after this point (AMS Trex Powering the Loop, Menu Structure)
  is real but unnumbered content, catalogued below per the standing
  synthetic-locator convention.
mediaStatus: unreviewed
```

### AMS Trex Powering the Loop (printed pp. 9–12) — unnumbered, real procedure

```yaml
id: fvlm-cmp-trex-powering-the-loop-procedure
teaches: >
  The full 10-step procedure for powering a HART loop through the AMS Trex
  unit from within ValveLink Mobile: connecting, selecting "Provide Power
  from Trex" in Communication Settings, confirming the power warning,
  waiting for the connect task to complete, and using the resulting Power
  icon to set/monitor loop current (measured voltage, measured current, mA
  setpoint buttons at 0/25/50/75/100%). Requires the Device Communicator
  Plus Communication Module.
concept-tags: [ValveLink Mobile, AMS Trex, powering the loop, HART, current setpoint]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Unnumbered diagram, pp. 9–12 — 'AMS Trex Powering the Loop,' 10 sequential step screenshots, no figure numbers printed"
delivery: screen capture — multi-step procedure, 10 real screenshots
used-by: []
notes: >
  Real, genuinely teaching content with no printed figure numbers anywhere
  across these 4 pages — confirmed by direct visual inspection of all 10
  individual step screenshots, not assumed absent from a text sweep alone.
  Catalogued as ONE component covering the whole procedure, matching the
  precedent `bs657-cmp-bench-set-adjustment` set for a real multi-step
  numbered procedure with several illustrating images (that record's own
  8-step Spring Verification procedure, one locator, not 8 separate
  records) — a judgment call, flagged here rather than silently splitting
  into 10 near-identical records for what is really one continuous
  procedure.
mediaStatus: unreviewed
```

### Menu Structure (printed pp. 13–18) — unnumbered, real reference content

```yaml
id: fvlm-cmp-menu-structure-icon-legend
teaches: >
  The complete ValveLink Mobile menu icon legend — every top-level and
  nested menu icon (Connect, Setup [Setup Wizard, Initial Setup, Tuning,
  Response, Travel/Pressure Control, Alerts, SIS (HART), FST/PST (Fieldbus)],
  Calibration, Status, Diagnostics, Utilities, Instrument Level StepUp,
  About, Stroke Valve, Trex Powering the Loop (HART)) paired with a plain-
  language description of what each screen does — the reference a student
  or technician would use to orient within the app's full menu tree.
concept-tags: [ValveLink Mobile, menu structure, icon legend, app navigation, setup wizard]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Unnumbered diagram, pp. 13–18 — 'Menu Structure,' full icon-and-description legend spanning 6 pages, no figure numbers printed"
delivery: screen capture — icon legend, multi-page reference
used-by: []
notes: >
  Real, substantial reference content (6 full pages) with no printed figure
  numbers — confirmed by reading every page in the range, not assumed from
  the section heading alone. Catalogued as ONE component covering the whole
  legend rather than one record per icon (dozens of individual icons),
  matching the same "one continuous reference, one record" judgment applied
  to the Trex-powering procedure above — flagged, not silently decided.
mediaStatus: unreviewed
```

## Open Items

- **Full coverage: 9 numbered figures (Figures 1–9) plus 2 real unnumbered
  components (the Trex-powering procedure and the Menu Structure legend),
  no gaps.** All 20 real pages rendered and visually inspected.
- **Two judgment calls on unnumbered content, flagged above in each
  record's own notes**: bundling a real multi-step procedure and a real
  multi-page icon legend into one record each, rather than one record per
  screenshot/icon. Matches established precedent (`bs657-cmp-*`'s own
  multi-step procedure handling) but is a real editorial call, not a
  mechanical one — worth confirming this is the right grain if it comes up
  again on a similarly-structured software guide.
- **Cross-reference check against AMS Trex User Guide**: done, by direct
  visual comparison since neither document uses a drawing-number
  convention. Real finding: AMS Trex User Guide is unindexed, much larger
  (206pp, 97 figures) and chapter-scoped (`Figure 2-1` style) — flagged for
  whoever indexes it next, not acted on here.
- **No duplicate figures or citation errors found.**
- **No low-confidence flags** — every figure and every unnumbered section
  confirmed directly.
- **`used-by` is `[]` throughout** — 17101, the course that drove this
  acquisition, is an unconverted legacy deck with no real Subject-Matter Index
  citations of its own yet.
- **No archive or legacy material** was consulted — the current (September
  2024, Version 6.1) edition is the sole and sufficient source.
