---
title: Component Index — AMS Trex ValveLink Diagnostic Concepts
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: AMS Trex Device Communicator User Guide (Rev 8, February 2023); ValveLink Mobile Software Quick Start Guide (D103408X012, September 2024, Version 6.1)
topic: AMS Trex / ValveLink Mobile diagnostic and workflow concepts
updated: 2026-09-14
---

# Component Index — AMS Trex ValveLink Diagnostic Concepts

**Topic-driven, concept-level pass — a correction, not an extension, of the
navPath/figure passes over these two documents.** The earlier AMS Trex pass
(`Component Index — AMS Trex User Guide ch2/ch3/ch4-ch5.md`, 192 records)
catalogued nearly every menu screen and click path — the wrong grain for a
Component Index. Compare the Control Valve Handbook: it documents what flow
characteristic cage types exist and what distinguishes them, not every cage
size crossed with every trim combination. This file applies that same
standard to AMS Trex and ValveLink Mobile — the small set of concepts,
functions, and distinctions a technician actually needs to do real
diagnostic and configuration work, not a navigation map.

**Nothing from the earlier pass is discarded.** All 192 navPath/figure
records (84 `kind: figure`, 108 `kind: navPath`) remain in place and are
cited below wherever a real record already exists for a fact this file
re-explains at concept grain — cross-referenced by id, not duplicated. This
file's own 19 records are the deliverable; the 192 are raw source material
that was mined to produce them, and (per a separate, related directive) will
stop counting toward the primary Component Index total once the coverage
tracker is restructured to separate durable/physical facts from high-churn
software-navigation records.

**id prefix**: `trexvl-cmp-` (Trex + ValveLink) — a combined prefix because
several of these concepts genuinely span both documents (e.g. taking a
device out of service touches both the Trex-side power warning and
ValveLink's own instrument-mode mechanism), and forcing every concept into
one document's own prefix would misrepresent that.

**Organized by function, not by source chapter** — matching how an
instrument tech's own job actually breaks down (Connect / Configure /
Calibrate / Monitor–verify / a safety-critical fifth category), confirmed
against the real menu structure of both documents (ValveLink Mobile's own
Home screen literally groups into CONNECT / SETUP / CALIBRATION / STATUS /
DIAGNOSTICS / UTILITIES) rather than imposed from outside.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **AMS Trex Device Communicator User Guide** | Rev 8 · February 2023 · no document/part number printed | `current` | First-party Emerson document. |
| **ValveLink Mobile Software Quick Start Guide** | D103408X012 · September 2024 · Version 6.1 | `current` | First-party Emerson/Fisher document. |

## Components

### Connect

```yaml
id: trexvl-cmp-device-interoperability
teaches: >
  The Trex unit talks to HART and FOUNDATION fieldbus devices from any
  manufacturer by reading a manufacturer-supplied Electronic Device
  Description (DD) rather than having each device's menu hard-coded into
  the communicator — the installed DD is what actually defines a specific
  device's menu structure, parameters, and units, not the Trex firmware
  itself. This is the direct explanation for why the same Field
  Communicator app can show a rich, complete Device Setup menu for one
  instrument and a sparse or missing one for another (the device-dependent-
  menu finding governing this whole document's own navPath wording — see
  `Component Index — AMS Trex User Guide ch3.md`'s intro). New or updated
  DDs are installed via Upgrade Studio or the resource DVD, not a Trex
  firmware update, and basic testing is performed on every DD Emerson
  ships.
concept-tags: [interoperability, EDDL, device description, DD, HART, FOUNDATION fieldbus]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.2 'Device interoperability,' p. 54"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  The conceptual root of a fact already noted procedurally throughout
  `Component Index — AMS Trex User Guide ch3.md` (e.g. §3.14.2 Device Setup
  options) — this entry is the "why," those are the "here's how it plays
  out in the menu."
```

```yaml
id: trexvl-cmp-forward-compatibility-rules
teaches: >
  A real, technically substantive constraint on offline configuration work,
  not a menu path: to EDIT an offline configuration on the Trex unit, the
  installed device description must match the configuration's device type
  and device revision exactly — a mismatch means the configuration cannot
  be saved at all. To SEND a configuration to a live device, the installed
  DD must be for the same device type and be equal to or newer than the
  configuration's own device revision (an older DD than the configuration
  cannot send it). Configurations built or edited using the generic device
  description can never be saved or sent — the generic DD exists for basic
  connectivity, not real configuration work. A technician who doesn't know
  these rules will genuinely lose work (an edit that silently can't be
  saved) or be blocked from a send with no obvious reason.
concept-tags: [forward compatibility, device description, DD revision, offline configuration]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.3 'Forward Compatibility rules for saving and sending configurations to AMS Trex,' p. 54"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Direct consequence of `trexvl-cmp-device-interoperability` above — DD
  version discipline is what makes the whole EDDL model safe to use for
  real configuration changes, not just connectivity.
```

### Configure

```yaml
id: trexvl-cmp-setup-wizard
teaches: >
  ValveLink Mobile's guided path through initial instrument setup and
  calibration in one linear flow — every required field must be completed
  before Apply becomes available, and critically, the instrument must
  already be in Out of Service (HART) or MAN (fieldbus) mode before the
  Wizard can download any parameters to the instrument at all. This is the
  natural on-ramp for commissioning a new or replacement device; it is not
  where a technician goes to make a single targeted change to an
  already-configured instrument (that's Detailed Setup, or a specific
  Calibration routine).
concept-tags: [ValveLink Mobile, Setup Wizard, commissioning, instrument mode]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Menu Structure — SETUP — 'Setup Wizard,' p. 13"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  One of four distinct records extracted from `fvlm-cmp-menu-structure-
  icon-legend` (`Component Index — ValveLink Mobile Software Quick Start
  Guide.md`), which bundled the whole Setup/Calibration/Status/Diagnostics/
  Utilities menu tree into one record — too compressed to teach these as
  distinct functions. That original figure-based record is left untouched
  (forward-only convention); this is the concept-grain replacement for its
  Configure-relevant content. Cross-references the mode-gating rule also
  central to `trexvl-cmp-out-of-service-safety` below — this is the third
  of that entry's four real touchpoints.
```

```yaml
id: trexvl-cmp-initial-setup
teaches: >
  The fundamental, largely one-time instrument parameters (e.g. Zero Power
  Condition) that establish how the instrument behaves at its most basic
  level — set once during commissioning and rarely revisited afterward, in
  contrast to Detailed Setup's parameters (which a technician may return to
  repeatedly) or a Calibration routine (a repeatable diagnostic/tuning
  action). Knowing that Initial Setup content is meant to be "set and
  leave" is itself the useful distinction — it tells a technician this is
  not where to look when troubleshooting a live behavior change.
concept-tags: [ValveLink Mobile, Initial Setup, Zero Power Condition, commissioning]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Menu Structure — SETUP — 'Initial Setup,' p. 13"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: Second of the four Setup-menu extractions — see `trexvl-cmp-setup-wizard`'s notes.
```

```yaml
id: trexvl-cmp-detailed-setup
teaches: >
  The parameter set a technician actually returns to during normal service
  work, distinct from Initial Setup's set-once fundamentals: Engineering
  Units (keeps ValveLink Mobile's displayed values consistent with the
  instrument's own configured units), Write Protection (enable/disable —
  when enabled, blocks both configuration AND calibration changes to the
  instrument, a real safety/change-control control worth knowing exists),
  and Save Detailed Setup (records every device parameter for later review
  in Data Set Explorer — the audit trail for "what was this instrument
  actually configured to before I touched it").
concept-tags: [ValveLink Mobile, Detailed Setup, Engineering Units, Write Protection, audit trail]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Menu Structure — SETUP — 'Detailed Setup,' p. 13"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Third of the four Setup-menu extractions. Write Protection is a genuine
  safety/change-control concept worth a technician knowing exists even
  outside a specific procedure — flagged here rather than only inside a
  How-To.
```

```yaml
id: trexvl-cmp-spec-sheet
teaches: >
  A reference list of the valve body, actuator, and trim construction for
  the connected instrument — not a data-entry form, a lookup. Its stated
  purpose in the source is explicit and important: it exists "to provide
  context for diagnostics" — meaning a technician reading a Total Scan or
  Step Response result is meant to cross-check it against the Spec Sheet
  (e.g. a large actuator and heavy trim explaining an otherwise-concerning
  friction or dead-band reading). This is the conceptual link between
  "what hardware is this" and "does this diagnostic result make sense" —
  worth teaching explicitly rather than leaving implicit.
concept-tags: [ValveLink Mobile, Spec Sheet, valve construction, diagnostic context]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Menu Structure — SETUP — 'Spec Sheet,' p. 13"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Last of the four Setup-menu extractions. Cross-references every
  diagnostic-test entry below — Spec Sheet is the "what am I looking at"
  anchor for interpreting any of them.
```

### Calibrate — diagnostic test types

```yaml
id: trexvl-cmp-total-scan
teaches: >
  An offline diagnostic test (the instrument must be Out of Service for
  HART, or MAN for fieldbus — it cannot run on an in-service device) that
  produces three graphs from one test run: pressure versus travel, travel
  versus time, and pressure versus time. Its real diagnostic purpose is
  specific and worth naming directly: Total Scan results are used to
  estimate friction, bench set, and seat load — the same three concepts a
  technician already works with at the bench on a spring-and-diaphragm
  actuator, now read from a software-generated curve instead of a manual
  gauge reading. This is the software equivalent of the physical bench-set
  procedure already documented for the 657/667 actuators
  (`bs657-cmp-bench-set-adjustment`), not a replacement concept — the same
  underlying mechanical facts, read a different way.
concept-tags: [ValveLink Mobile, Total Scan, offline test, friction, bench set, seat load]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Menu Structure — DIAGNOSTICS — 'Total Scan,' p. 15"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Cross-references `bs657-cmp-bench-set-adjustment` (`Component Index —
  bench-set-657.md`) — a technician who already understands the physical
  bench-set procedure has almost everything needed to understand what a
  Total Scan reading means.
```

```yaml
id: trexvl-cmp-step-response-tests
teaches: >
  A family of four offline, step-input tests, each answering a genuinely
  different diagnostic question — the real distinction a technician needs,
  not just "they're all step tests": **Stroking Time** drives the
  instrument through 0% → 100% → 0% and times the full travel, estimating
  how long a full open/close actually takes. **25% Step Study** cycles
  0/25/50/75/100/75/50/25/0% to check linearity across the full range.
  **Large Step Study** applies 10/20/.../80% steps from a 10% baseline,
  used specifically to assess stability on valves with complex accessory
  configurations (boosters, volume tanks) where a small step wouldn't
  expose an instability. **Performance Step Test** applies small
  bidirectional steps (0.25/0.5/1/2/5/10%) to estimate dead band and
  dynamic response — the fine-resolution end of the same family. The
  common thread: bigger, slower steps characterize gross travel and
  linearity; smaller steps characterize fine dead-band and dynamic
  behavior.
concept-tags: [ValveLink Mobile, Step Response, Stroking Time, Step Study, Performance Step Test, linearity, dead band]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Menu Structure — DIAGNOSTICS — 'Step Response' (Stroking Time, 25% Step Study, Large Step Study, Performance Step Test), p. 15"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  All four are offline tests, same instrument-mode precondition as Total
  Scan — see `trexvl-cmp-out-of-service-safety` for what that precondition
  actually requires doing first.
```

```yaml
id: trexvl-cmp-performance-diagnostics
teaches: >
  The online counterpart to the Total Scan/Step Response offline-test
  family — run with the instrument In Service (HART) or In Service/MAN/AUTO
  (fieldbus, depending on the tool), meaning the instrument keeps doing its
  real job while being diagnosed. Two distinct tools, not one: **PD One
  Button** runs a preconfigured, canned set of online fault-identification
  tests — the fast, no-judgment-required check. **PD Traces** instead
  records a real-time trace of any device variable the technician chooses,
  with no preset test structure — explicitly useful for tracking down limit
  cycles or other atypical behavior that a canned test wouldn't be scoped
  to catch. The choice between them is "do I want a quick automated
  check" versus "I have a specific, unusual symptom to chase."
concept-tags: [ValveLink Mobile, Performance Diagnostics, PD One Button, PD Traces, limit cycle, online diagnostics]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Menu Structure — DIAGNOSTICS — 'PD One Button' and 'PD Traces,' p. 16"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Cross-references `amstrex-cmp-strip-chart` (`Component Index — AMS Trex
  User Guide ch3.md`) — PD Traces' real-time variable trace is the same
  strip/sweep/scope charting mechanism documented generically in the AMS
  Trex Graphics section (§3.26); see `trexvl-cmp-diagnostic-chart-types`
  below for that distinction.
```

```yaml
id: trexvl-cmp-partial-stroke-test
teaches: >
  A safety-instrumented-system-oriented test, distinct from the general
  diagnostic families above: runs the Partial Stroke Test itself and lets
  the technician analyze the data during and after the run. Its real
  purpose is proving an emergency shutdown valve will actually move when
  called on, without fully stroking (and disrupting) an in-service
  process — this is why it is configured through the SIS (HART) or FST/PST
  (Fieldbus) parameter menus under Setup, which explicitly govern Safety
  Instrumented Systems Tier alerts, values, and diagnostics. A separate
  ValveLink calibration routine, Partial Stroke Cal, exists specifically to
  set these test parameters before the test itself is ever run — configure
  first, then test.
concept-tags: [ValveLink Mobile, Partial Stroke Test, SIS, safety instrumented systems, PST]
status: current
source:
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Menu Structure — DIAGNOSTICS — 'Partial Stroke,' p. 16; SETUP — 'SIS (HART)' / 'FST/PST (Fieldbus),' p. 13; CALIBRATION — 'Partial Stroke Cal,' p. 14"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  The one diagnostic-test entry with a real safety-instrumented-system
  angle distinct from `trexvl-cmp-out-of-service-safety` (which is about
  physically safe hands-on work, not SIS proof-testing) — related but not
  the same concept, kept as separate entries.
```

### Monitor / verify — reading and interpreting live data

```yaml
id: trexvl-cmp-hart-status-icons
teaches: >
  Four status-bar icon states a technician reads at a glance to understand
  a HART connection's real communication health, not just whether it's
  "connected": plain online/live, burst mode (the device is streaming data
  continuously rather than responding to each poll — faster updates, but a
  different communication pattern to be aware of), shout/deaf mode (the
  device has gone into a degraded communication state, typically due to a
  noisy loop), and shout/deaf combined with burst. Recognizing shout/deaf
  specifically matters diagnostically — it is itself a symptom (loop noise)
  visible before a technician even opens a dedicated diagnostic test.
concept-tags: [AMS Trex, HART, status icons, burst mode, shout deaf mode, loop noise]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Unnumbered diagram, p. 88 — Section 3.14.1 'HART icons' icon table"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Concept-anchored companion to the already-catalogued source-anchored
  figure `amstrex-cmp-hart-status-icons-legend` (`Component Index — AMS
  Trex User Guide ch3.md`) — same real figure, cited here for its
  diagnostic-reading significance (shout/deaf as a noise symptom) rather
  than as a plain icon inventory. Per the standing cross-reference rule,
  both ids legitimately coexist for the same figure.
mediaStatus: unreviewed
```

```yaml
id: trexvl-cmp-diagnostic-chart-types
teaches: >
  Five chart types the Graphics feature offers, each suited to a different
  kind of diagnostic question — the real distinction, not just "different
  visual styles": **Strip** charts continually scroll right-to-left,
  showing the most recent window of a live trend — the natural choice for
  watching a variable change in real time. **Sweep** charts redraw
  left-to-right and overwrite old data with a moving divider line — useful
  for comparing a fresh pass against the immediately-preceding one on the
  same screen. **Scope** charts redraw left-to-right and then clear
  entirely — best for a single clean capture window, no old-data clutter.
  **Bar** charts (horizontal or vertical) show a snapshot of one or more
  variables' current values, not a trend over time — the choice when the
  question is "what is this reading right now," not "how has this
  changed." **Gauge** charts format one reading as an analog speedometer —
  the fastest at-a-glance read of a single value against its range, at the
  cost of showing no history at all.
concept-tags: [AMS Trex, Graphics, strip chart, sweep chart, scope chart, bar chart, gauge chart, data visualization]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.26.2 'Charts' comparison table, p. 118; Section 3.26.3 'Strip/sweep/scope chart,' p. 118"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Cross-references the five already-catalogued individual figures
  (`amstrex-cmp-strip-chart`, `amstrex-cmp-horizontal-bar-chart`,
  `amstrex-cmp-vertical-bar-chart`, `amstrex-cmp-gauge-chart`,
  `amstrex-cmp-graph`, all in `Component Index — AMS Trex User Guide
  ch3.md`) — those show what each chart type looks like; this entry
  explains when a technician would deliberately choose one over another,
  which none of the five individually teaches.
```

```yaml
id: trexvl-cmp-fieldbus-segment-health
teaches: >
  How to read a fieldbus segment's diagnostic status, not just what the
  numbers are: DC voltage uses a simple two-band threshold (BAD 0–9V, GOOD
  9–34V). Noise and signal both use a three-band GOOD/CHECK/BAD scale
  (signal: BAD 0–250mV, CHECK 250–700mV, GOOD 700–1000mV, CHECK again above
  1000mV) — and CHECK is not a vague "maybe" state, it has a real, named
  reason: noise and signal readings are position-dependent. The same 400mV
  signal reading is BAD if the Trex unit was connected near the device, but
  can be entirely expected (and GOOD) if the Trex was connected far away on
  the segment, since cable length naturally attenuates the signal. A
  technician reading CHECK without knowing this will misdiagnose a healthy
  far-end reading as a fault. INACTIVE simply means the Trex detects no
  fieldbus communication at all (tap Go Online), a distinct state from a
  poor-but-present signal.
concept-tags: [AMS Trex, Fieldbus Diagnostics, segment health, noise, signal, DC voltage, GOOD BAD CHECK]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 5.3 'Default status labels' — DC voltage p. 156, noise and signal p. 157"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Concept-anchored companion to the three already-catalogued source-
  anchored figures `amstrex-cmp-dc-voltage-status-labels-diagram`,
  `amstrex-cmp-noise-status-labels-diagram`, and
  `amstrex-cmp-signal-status-labels-diagram` (`Component Index — AMS Trex
  User Guide ch4-ch5.md`) — this is the interpretation layer those three
  figures don't individually carry (the position-dependence caveat, in
  particular, is easy to miss reading any one figure alone).
mediaStatus: unreviewed
```

### Safety-critical

```yaml
id: trexvl-cmp-out-of-service-safety
teaches: >
  **Safety-critical.** Powering a positioner that is in service can move
  the valve and release process fluid or pressure — a real, explicit
  hazard the source states as a WARNING, not a caution. The required
  mitigation is specific and must be followed before applying power: isolate
  the valve from the process and equalize pressure on both sides of the
  valve, or bleed off the process fluid, before connecting Trex Unit Power.
  Separately, on a FOUNDATION fieldbus device, changing a block's mode to
  Out of Service (OOS) is a real, required precondition before editing that
  block's own configuration — a technician must change the mode to OOS
  first, make the change, and change the mode back to Auto when finished;
  skipping this is a configuration-integrity issue even where it isn't
  itself a physical hazard. In ValveLink Mobile, instrument mode (In
  Service / Out of Service / Not Connected for HART; AUTO / MAN / OOS / Not
  Connected for fieldbus) is read and changed from a single dedicated soft
  key at the bottom of the screen — this is the actual mechanism, not a
  hidden setting. Three separate ValveLink functions all gate on this same
  state: the Setup Wizard cannot download parameters unless the device is
  already OOS/MAN, Total Scan requires Out of Service (HART) or MAN
  (fieldbus), and Performance Diagnostics (PD One Button, PD Traces)
  requires the opposite — In Service. A technician who doesn't track
  instrument mode as its own concept will repeatedly hit "why won't this
  run" with no obvious cause.
concept-tags: [safety, in service, out of service, instrument mode, isolate valve, OOS, Auto mode, WARNING]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4.9 'Stroke a valve' WARNING, p. 143"
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.2 'Device blocks' — Out of Service (OOS) mode description, p. 108"
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Navigation Tips — instrument-mode soft key, p. 3"
  - doc: ValveLink Mobile Software Quick Start Guide (D103408X012)
    locator: "Menu Structure — SETUP — 'Setup Wizard' mode requirement, p. 13"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Written as its own dedicated entry rather than folded into any single
  procedure, precisely because the source material never presents it as
  one thing — it surfaces four separate times across two documents (a
  safety warning, a fieldbus configuration rule, a UI mechanism, and a
  precondition on a wizard), and a per-section indexing pass walks past
  each instance without ever stopping to name the underlying concept. The
  existing navPath record `amstrex-cmp-stroke-valve` (`Component Index —
  AMS Trex User Guide ch4-ch5.md`) captures the WARNING's existence in its
  own `teaches` field but drops the actual mitigation instruction — this
  entry is where that mitigation is fully stated. Flagged explicitly as
  safety-critical, matching the weight this content actually carries in
  the source (a WARNING block, not a Note).
```

### Underlying communication-protocol concepts

```yaml
id: trexvl-cmp-hart-internal-resistor
teaches: >
  Why a HART communication resistor matters and when the Trex unit's own
  internal resistor is the right tool: HART signals ride on top of a 4-20mA
  loop, and reliable communication needs adequate loop resistance at HART
  frequencies. For an externally-powered 2-wire transmitter, the Trex's
  internal resistor is enabled by connecting the unit in series with the
  loop; for a 4-wire transmitter, the Trex is instead connected in
  parallel. Getting series-vs-parallel backwards for the device type is a
  real, easy-to-make wiring mistake that produces a communication failure
  with no obvious cause on the screen — this is why the connection type
  (2-wire externally-powered vs. 4-wire) has to be identified correctly
  before wiring in the resistor, not treated as a detail to sort out after.
concept-tags: [AMS Trex, HART, internal resistor, 2-wire, 4-wire, loop resistance]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.11 'Internal resistors,' pp. 81–83"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Concept-anchored companion to the already-catalogued source-anchored
  wiring figures `amstrex-cmp-wiring-internal-resistor-trex-powered`,
  `amstrex-cmp-wiring-internal-resistor-ext-powered-2wire`, and
  `amstrex-cmp-wiring-internal-resistor-4wire` (`Component Index — AMS Trex
  User Guide ch3.md`) — those show the correct connections; this entry
  explains the underlying reason series-vs-parallel matters at all.
mediaStatus: unreviewed
```

```yaml
id: trexvl-cmp-fieldbus-device-blocks
teaches: >
  How a FOUNDATION fieldbus device's own parameters are actually organized
  on screen: many devices split their parameters into a resource block, a
  transducer block, and other device-specific function blocks (some
  devices instead display everything via a single device dashboard — this
  varies genuinely by device, not by Trex configuration). Every block
  supports at minimum two modes, Auto and Out of Service (OOS) — in Auto,
  the block's functions execute normally and any outputs keep updating; in
  OOS, the block's functions stop executing and its output status reads
  "BAD" to anything downstream. The practical rule that follows directly
  from this: change a block to OOS before editing its configuration, then
  change it back to Auto once finished — configuring a block that's still
  in Auto risks a live functional change rather than a controlled edit.
concept-tags: [AMS Trex, FOUNDATION fieldbus, device blocks, resource block, transducer block, Auto mode, OOS mode]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.21.2 'Device blocks,' pp. 107–109"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Previously excluded entirely under the materiality filter in `Component
  Index — AMS Trex User Guide ch3.md` (no numbered procedure of its own) —
  a real example of genuinely conceptual content that a procedure-grained
  pass has no way to catch. Directly informs `trexvl-cmp-out-of-service-
  safety` above (this section is one of that entry's four real sources).
```

```yaml
id: trexvl-cmp-link-active-scheduler
teaches: >
  Every fieldbus segment has exactly one Link Active Scheduler (LAS) — the
  bus arbiter that recognizes and adds new devices to the segment, removes
  non-responsive ones, and distributes communication time among devices.
  Only "link master" devices are eligible to become the LAS; all other
  devices are "basic" devices and can never take the role. When a segment
  starts up (or the current LAS fails), eligible link masters bid for the
  role, and the one with the lowest address wins and becomes the active
  LAS; the other link masters become backups, watching for a future LAS
  failure. The Trex unit itself can act as a link master but is
  deliberately the *last* node to become the LAS on a segment — it won't
  compete for the role against real segment infrastructure. Knowing this
  matters diagnostically: a segment with communication trouble and no
  clear LAS, or with two devices fighting to become LAS, is a real,
  nameable fault condition, not just "the network is acting up."
concept-tags: [AMS Trex, FOUNDATION fieldbus, Link Active Scheduler, LAS, link master, bus arbiter]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.18.4 'Link Active Scheduler (LAS),' p. 103; Glossary 'Link Active Scheduler,' p. 194"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Also previously excluded under the materiality filter — same pattern as
  `trexvl-cmp-fieldbus-device-blocks` above, a real network-behavior
  concept with no numbered procedure of its own to have triggered a navPath
  record.
```

```yaml
id: trexvl-cmp-simulate-device-concept
teaches: >
  Simulation lets a technician open a device's full menu structure and
  practice navigating or configuring it with no physical device connected
  at all — a genuine training and familiarization tool, not a diagnostic
  function. This matters conceptually because it changes what a technician
  is looking at: a simulated session shows real menu structure and real
  parameter names for the chosen manufacturer/type/revision, but nothing
  it displays reflects an actual live instrument's actual readings — a
  distinction worth being explicit about before a new technician
  practices on it and starts trusting the numbers. Not every device
  description is well-optimized for simulation, so a simulated menu may
  behave slightly differently from how that same DD behaves connected to a
  real device.
concept-tags: [AMS Trex, simulate device, training, device description]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 3.22 'Simulate a live device,' p. 115"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Concept-anchored companion to the already-catalogued navPath record
  `amstrex-cmp-simulate-device` (`Component Index — AMS Trex User Guide
  ch3.md`), which covers the mechanical "how to start a simulated session"
  — this entry is the "what is this actually for, and what are its real
  limits" a technician needs before relying on it for training.
```

```yaml
id: trexvl-cmp-loop-diagnostic-modes
teaches: >
  Two genuinely different diagnostic strategies live under Loop
  Diagnostics, not one feature with two settings: **Trex Unit Current**
  connects the Trex in series with an externally-powered loop and lets it
  control current the way a transmitter would — used to verify a digital
  control system's own input module, verify the cabling between a
  connection point and that input module, or move a positioner, all
  *without* powering the field device itself. **Trex Unit Power** instead
  powers one transmitter or positioner directly when the loop is not
  externally powered — used to isolate a suspect device from its loop and
  verify its own operation independently, or to perform a wiring
  continuity check on a cable with no power present at all. The choice
  between them is really the choice of what's actually being tested: the
  control system's side of the loop (Trex Unit Current) versus the field
  device itself, isolated (Trex Unit Power) — and Trex Unit Power is the
  half that carries the in-service valve-movement hazard (see
  `trexvl-cmp-out-of-service-safety`).
concept-tags: [AMS Trex, Loop Diagnostics, Trex Unit Current, Trex Unit Power, isolate device]
status: current
source:
  - doc: AMS Trex Device Communicator User Guide (Rev 8, February 2023)
    locator: "Section 4 'Loop Diagnostics application' intro, p. 125"
delivery: definition — context-pane / opening concept, no figure needed
used-by: []
notes: >
  Cross-references the already-catalogued navPath records
  `amstrex-cmp-loop-diagnostics-screen-powering` and
  `amstrex-cmp-power-positioner-loop-diagnostics` (`Component Index — AMS
  Trex User Guide ch4-ch5.md`), and directly feeds
  `trexvl-cmp-out-of-service-safety` above — this entry is the "why would
  I choose one over the other" that a menu-path record doesn't carry.
```

## Open Items

- **Scope**: 19 concept-level entries, extracted from the raw navPath/figure
  material in `Component Index — AMS Trex User Guide ch2/ch3/ch4-ch5.md`
  (192 records) and `Component Index — ValveLink Mobile Software Quick
  Start Guide.md` (11 records), per the directive correcting the original
  navPath pass's grain. Organized under 5 functional headers: Connect (2),
  Configure (4), Calibrate — diagnostic test types (4), Monitor/verify (3),
  Safety-critical (1), Underlying communication-protocol concepts (5).
- **Nothing discarded**: all 192 navPath/figure AMS Trex records and all 11
  ValveLink Mobile QSG records remain exactly as they were — mined as raw
  source, not replaced. Nine of this file's 19 entries explicitly
  cross-reference an existing figure or navPath record by id (both ids
  legitimately coexist per the standing cross-reference rule — one
  source-anchored, one concept-anchored).
- **The two directed gaps, both closed**:
  - **In-service/out-of-service** — `trexvl-cmp-out-of-service-safety`,
    synthesizing all four confirmed touchpoints (AMS Trex §4.9 WARNING +
    mitigation, AMS Trex §3.21.2 fieldbus OOS rule, ValveLink's
    instrument-mode soft key, ValveLink Setup Wizard's mode gate), flagged
    explicitly as safety-critical in its own `teaches` field.
  - **Configure** — the bundled `fvlm-cmp-menu-structure-icon-legend`
    record's Setup content split into four distinct entries (`trexvl-cmp-
    setup-wizard`, `-initial-setup`, `-detailed-setup`, `-spec-sheet`),
    each genuinely different in purpose.
- **Calibration-menu items folded in, not given standalone entries** (per
  directive — "sharpen if a natural fit, don't force it"): Partial Stroke
  Cal is cited directly inside `trexvl-cmp-partial-stroke-test`'s source
  list, since it configures the parameters that test runs on. Auto/Manual
  Travel Cal, Travel Sensor Adjust, and SOV Calibration were reviewed but
  not woven in — none had a natural single-entry home among the 19 without
  forcing it; flagged here rather than silently dropped.
- **Two source sections newly pulled out of the materiality filter**:
  `trexvl-cmp-fieldbus-device-blocks` (AMS Trex §3.21.2) and
  `trexvl-cmp-link-active-scheduler` (§3.18.4) were both previously excluded
  from the navPath pass entirely (no numbered procedure of their own) — a
  real, concrete example of genuinely conceptual content a procedure-grained
  pass structurally cannot catch, regardless of how carefully the
  materiality filter is applied.
- **No low-confidence flags** — every entry traces to a directly rendered
  or directly text-confirmed page, cited in `source.locator`.
- **`used-by: []` throughout** — no course yet cites this material; 17101
  (the course that drove the whole AMS Trex/ValveLink acquisition) remains
  an unconverted legacy deck.
- **Whole-library collision sweep**: to be run before committing —
  `grep -h "^id: " "20 - Source Library"/Component Index*.md | sort | uniq -d`
  — expected clean against the `trexvl-cmp-` prefix (unused elsewhere in
  the library) except the two known, pre-existing, unrelated Oil & Gas
  collisions.
- **Tracker structure**: this file's own coverage-tracker row, and the
  question of separating this durable concept content from the high-churn
  navPath/figure material it was mined from, is deliberately **not**
  resolved in this file — that's the separate tracker-restructuring
  decision already scoped with Franz, not decided here.
