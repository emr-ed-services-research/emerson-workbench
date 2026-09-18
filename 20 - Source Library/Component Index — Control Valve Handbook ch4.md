---
title: Component Index — Control Valve Handbook ch4
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Control Valve Handbook, 6th ed. (D101881X012)
chapter: 4 — Control Valve Accessories
updated: 2026-09-11
---

# Component Index — Control Valve Handbook, Chapter 4 (Control Valve Accessories)

Full-chapter cataloging pass, matching the rigor of the Oil & Gas Sourcebook
ch1 precedent: every figure in the chapter's real page range is verified
against the source PDF (`Control Valve Handbook - Sixth Edition.pdf`) and
recorded here with a real page/section locator. This pass catalogs
**existence and location only** — no crop/extraction has been performed, so
each component carries a single `source` citation (doc + locator), not a
second "already extracted" entry.

Real PDF page range confirmed by direct inspection of the chapter-divider
pages: **Chapter 4 runs PDF pages 82 (divider) through 97** (content pages
83–97); **Chapter 5 ("Control Valve Sizing") begins at PDF page 98**. In this
region of the document, PDF page number and printed page number are
identical (zero offset) — confirmed against the printed folios visible on
pages 82, 90, and 98.

**Correction, 2026-09-12 (superseding the note originally here):** this
pass's own text-extraction-only reading concluded Figures 4.14 through
4.23 were rendered by `pdftotext` with a spurious leading "1" (e.g.
"Figure 14.16" instead of "Figure 4.16") and "corrected" every affected
entry below back to "4.N". That correction was **wrong** — confirmed by a
later Stage 3 authoring pass that rendered the actual PDF pages as images
(not just extracted text) and read the captions directly: the source book
genuinely, visibly prints **"Figure 14.14" through "Figure 14.23"** on
pp. 93–95 (verified again independently: pages 93 and 96 both rendered and
inspected). This is not a real Chapter 14 reference — Chapter 14 ("Piping
Reference Data") does not begin until much later in this 355-page,
15-chapter book, and every one of these pages still carries the same
"Chapter 4: Control Valve Accessories" running header as the rest of the
chapter — but the printed caption number really is "14.N", not "4.N", and
the body text's own in-line cross-references use the same "14.N" form
("...see Figures 14.14 and 14.15"). This is the source document's own
internal caption/cross-reference numbering (most likely carried over
un-renumbered from a differently-numbered internal or prior edition of
this material), not a misprint, OCR artifact, or anything introduced by
this vault's own tooling. Every entry below for `cvh-cmp-sov-3port-spring-return-symbol` through
`cvh-cmp-sov-manifold-assembly` has been corrected accordingly: the `locator` field and any
in-slide citation should read "Figure 14.N", not "Figure 4.N" — the
component `id` itself is unaffected (ids are internal handles, not
required to mirror the printed figure number, the same convention already
applied to the confirmed duplicate "Figure 3.24" case in the ch3 index).
Figures 4.1–4.13 and 4.24 onward are unaffected and print normally.

**Schema-drift correction, 2026-09-17 (part of the CVH ch5–15 indexing
pass):** this file was the one chapter that drifted from ch1–3's own
conventions in two ways, both now corrected. First, every record's
`status` read `verified` instead of the precedence-bucket vocabulary
(`current` / `archive-corroborated` / `archive-only` / `legacy`) that
`Source Library.md` and every other chapter's index actually use — all 27
corrected to `status: current`, matching this file's own Precedence table,
which already said `current` and was never wrong. Checked whether
`verified` was secretly carrying a real, distinct confidence concept before
correcting it: it wasn't — every record read `verified` uniformly
regardless of the chapter's own "Low-confidence flags" caveats (4.7,
14.14/former-4.14, 4.22, 4.23), so it was a vocabulary mismatch, not a
second axis hiding in the data. Second, every `id` was renamed from the
printed-figure-number form (`cvh-cmp-4.N`) to a descriptive slug matching
ch1–3's convention (e.g. `cvh-cmp-pneumatic-positioner-schematic`) — the
`cvh-cmp-4.14`–`cvh-cmp-4.23` ids kept their old `4.N` numbering even after
this file's own 2026-09-12 correction established their real printed
captions are `14.N`, which was exactly the kind of drift a numeric id
invites. All downstream `used-by` references and the 14101/bench-set-657
cross-index checks were re-run against the new ids; see Open Items below.

No tables are catalogued below — only figures, per the standing
Component Index rule.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | First-party Emerson document; sole source for this chapter. No archive or legacy material was consulted or found relevant to Chapter 4's content — all 27 figures are catalogued directly against this edition. |

## Components

### Introduction & Pneumatic Positioners (printed pp. 83–84)

```yaml
id: cvh-cmp-pneumatic-positioner-schematic
teaches: Full pneumatic single-acting positioner mechanism — bellows, beam, cam feedback, flapper/nozzle, relay, and the diaphragm-pressure output loop that positions the valve stem
concept-tags: [positioner, pneumatic positioner, feedback loop, beam-flapper-nozzle, relay, single-acting actuator]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.84, §4.2.1 "Pneumatic Positioners", Figure 4.1
delivery: not yet determined — labelled schematic, strong candidate for a dedicated diagram slide given its density
used-by: [{course: CVB, slide: cvb-040.html}]
notes: Fully labelled schematic (Output to Diaphragm, Relay, Instrument, Bellows, Supply, Feedback Axis, Nozzle, Flapper Assembly, Direct/Reverse Action Quadrants, Input Axis, Cam, Beam). The surrounding prose walks the full closed-loop mechanism step by step and is a strong candidate for context-pane material.
```

```yaml
id: cvh-topic-accessory-selection-rationale
kind: topic
concept-tags: [control valve accessories, accessory selection, environmental considerations, hazardous locations]
status: current
teaches: >
  Five real reasons accessories get added to a control valve assembly, stated
  directly in the source: improve process control, improve safety for the
  process or personnel, improve valve performance/speed of response, monitor
  or verify valve responsiveness, and diagnose potential valve issues.
  Environmental/application conditions that drive accessory selection:
  ambient temperature range -60 to 125°C (-76 to 257°F), corrosive
  atmospheres (may require stainless steel or engineered resin), vibration
  (may require rugged mounting or remote mounting), humidity (may require
  protected electronics), and hazardous locations (may require flameproof,
  explosion-proof, intrinsic-safety, or non-incendive protection concepts).
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§4.1 'Environmental & Application Considerations,' pp. 83-84 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-positioner-fundamentals]
used-by: []
notes: >
  Read directly from the real PDF (pp. 83-84). This is the chapter's own
  stated rationale for accessories existing at all — grounds every
  individual accessory figure that follows.
```

```yaml
id: cvh-topic-positioner-fundamentals
kind: topic
concept-tags: [positioner, throttling, position feedback, positioner categories]
status: current
teaches: >
  A positioner's fundamental function: deliver pressurized air to the valve
  actuator so the stem/shaft position corresponds to the control system's
  set point. Positioners are used when a valve requires throttling action,
  need position feedback from the stem/shaft, and must be mounted on or near
  the valve assembly. Three categories exist by control-signal type,
  diagnostic capability, and communication protocol: pneumatic, analog I/P,
  and digital valve controllers (each covered by its own figure entries).
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§4.2 'Positioners,' p. 84 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-pneumatic-positioner-schematic, cvh-cmp-analog-ip-positioner-schematic, cvh-cmp-digital-valve-controller-photo]
relatedTopics: [cvh-topic-accessory-selection-rationale, cvh-topic-digital-valve-controller-capabilities]
used-by: []
notes: Read directly from p. 84's real prose, the intro paragraph before §4.2.1's pneumatic-positioner detail begins.
```

### Analog I/P Positioners & Digital Valve Controllers (printed pp. 85–86)

```yaml
id: cvh-cmp-analog-ip-positioner-schematic
teaches: Analog I/P positioner design — labelled schematic showing the DC input signal, converter, feedback axis, nozzle/flapper, and relay stages that produce a pneumatic output
concept-tags: [positioner, analog I/P positioner, current-to-pneumatic conversion, feedback axis, nozzle-flapper]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.85, §4.2.2 "Analog I/P Positioners", Figure 4.2
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-041.html}]
notes: Companion figure to 4.3 — both illustrate the same analog I/P positioner design; 4.2 is the full labelled schematic (4-20 mA input, Converter, Supply, Output to Actuator, Relay, Rotary Shaft Arm, Feedback Axis, Nozzle, Beam, Direct/Reverse-Acting Quadrant, Flapper Assembly), 4.3 is a photo of the physical unit.
```

```yaml
id: cvh-cmp-analog-ip-positioner-photo
teaches: Physical appearance of an assembled I/P positioner unit, as referenced alongside the schematic in Figure 4.2
concept-tags: [positioner, analog I/P positioner, physical component identification]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.85, §4.2.2 "Analog I/P Positioners", Figure 4.3
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-041.html}]
notes: Photo, not a schematic — pairs with cvh-cmp-analog-ip-positioner-schematic (text cites "Figure 4.2 and 4.3" together).
```

```yaml
id: cvh-cmp-digital-valve-controller-photo
teaches: Digital valve controller mounted on an assembled control valve — the physical instrument referenced by §4.2.3's description of microprocessor-based positioning
concept-tags: [positioner, digital valve controller, physical component identification, microprocessor-based positioning]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.86, §4.2.3 "Digital Valve Controllers", Figure 4.4
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-042.html}]
notes: Photo of an assembled valve/actuator/DVC stack, not a schematic.
```

```yaml
id: cvh-topic-digital-valve-controller-capabilities
kind: topic
concept-tags: [digital valve controller, diagnostics, HART, FOUNDATION fieldbus, PROFIBUS, wireless communication, two-way communication]
status: current
teaches: >
  Beyond basic position control, a digital valve controller's microprocessor
  enables two additional capabilities. Diagnostics: using pressure sensors,
  temperature sensors, travel sensors, and internal readings, it creates
  graphical performance/health representations and recommends maintenance
  actions, using statistical algorithms on live sensor readings; provides
  full-stroke dynamic testing (valve signature, dynamic error band, step
  response, stroke time). Two-way digital communication: HART superimposes a
  digital signal over the traditional 4-20 mA DC signal, letting a host
  system configure/calibrate/monitor the positioner while keeping 4-20 mA
  familiarity; FOUNDATION fieldbus and PROFIBUS are both all-digital
  protocols sharing the same physical layer but differing in protocol;
  wireless lets diagnostic data transmit independent of control-system
  wiring.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§4.2.3.1-4.2.3.2, pp. 85-86 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-digital-valve-controller-photo]
relatedTopics: [cvh-topic-positioner-fundamentals, cvh-topic-partial-stroke-testing]
used-by: []
notes: Read directly from pp. 85-86's real prose (§4.2.3.1 Diagnostics, §4.2.3.2 Two-Way Digital Communication).
```

### I/P Transducers & Volume Boosters (printed pp. 87–88)

```yaml
id: cvh-cmp-ip-transducer-pilot-detail
teaches: Deflector/nozzle pilot-stage detail inside an I/P transducer — the two-nozzle arrangement and deflector bar that establishes pilot pressure
concept-tags: [transducer, I/P transducer, deflector-nozzle design, pilot stage]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.87, §4.3 "I/P Transducers", Figure 4.5
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-043.html}]
notes: Detail/cutaway view, distinct from the whole-unit photo in Figure 4.6.
```

```yaml
id: cvh-cmp-ip-transducer-photo
teaches: I/P transducer mounted on a control valve — the physical, no-feedback alternative to a positioner for applications not requiring high positioning accuracy
concept-tags: [transducer, I/P transducer, physical component identification]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.88, §4.3 "I/P Transducers", Figure 4.6
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-043.html}]
notes: Photo of the assembled transducer on a valve, referenced in the text just before the deflector/nozzle detail (Figure 4.5).
```

```yaml
id: cvh-cmp-volume-booster-sectional
teaches: Volume booster sectional view — internal construction of a booster used to amplify pneumatic flow capacity to the actuator
concept-tags: [volume booster, sectional view, pneumatic amplification, deadband]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.88, §4.4 "Volume Boosters" (heading not captured on this page but content is contiguous with the booster discussion), Figure 4.7
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-044.html}]
notes: Cutaway/sectional diagram, distinct from the installation photo in Figure 4.8. Low confidence only on the exact section-number heading for §4.4 — the heading itself did not appear within the p.87–88 text window read; the booster subject matter and figure sequence are fully verified.
```

```yaml
id: cvh-topic-volume-booster-function
kind: topic
concept-tags: [volume booster, deadband, pneumatic amplification, stroking speed]
status: current
teaches: >
  Volume boosters amplify positioner output to increase actuator stroking
  speed when a large actuator volume makes positioning response too slow. A
  large sudden input-signal change creates a pressure differential between
  input and booster output; diaphragms then open the supply or exhaust port
  (whichever reduces the differential) until the difference is back within
  the booster's deadband limit. Fixed deadband, soft-seat construction, and
  an integral bypass fitting let small-magnitude signal changes pass through
  the bypass restriction without triggering booster action at all, avoiding
  unnecessary air consumption. Single-acting actuators typically use one
  booster; double-acting actuators require at least two (one per piston
  side); compressor anti-surge or turbine-bypass applications may need
  additional boosters for faster response.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§4.4 'Volume Boosters,' pp. 87-89 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-volume-booster-sectional, cvh-cmp-dual-booster-installation]
relatedTopics: []
used-by: []
notes: Read directly from pp. 87-89's real prose.
```

### Booster Installations, SIS, and Pneumatic Controllers (printed pp. 89–90)

```yaml
id: cvh-cmp-dual-booster-installation
teaches: Typical dual-booster installation on a double-acting actuator — one booster feeding each side of the actuator piston
concept-tags: [volume booster, double-acting actuator, installation, pneumatic volume]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.89, §4.4 "Volume Boosters", Figure 4.8
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-044.html}]
notes: Photo of an installed pair of boosters on a double-acting actuator.
```

```yaml
id: cvh-cmp-sis-dvc-on-safety-valve
teaches: SIS digital valve controller mounted on a safety (on/off) valve — the instrumentation used to take a process loop to a safe state and to run partial stroke testing
concept-tags: [safety instrumented systems, SIS, digital valve controller, partial stroke testing, safety valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.89, §4.5 "Safety Instrumented Systems (SIS)", Figure 4.9
delivery: not yet determined
used-by: []
notes: Photo of a DVC mounted on a safety valve; directly supports the PST (partial stroke testing) discussion in §4.5.1.
```

```yaml
id: cvh-cmp-pneumatic-controller-photo
teaches: Pneumatic controller mounted on a control valve — a local, standalone controller used when a full DCS/PLC is not needed, driven by a Bourdon tube, bellows, liquid-displacement lever, or temperature bulb input element
concept-tags: [pneumatic controller, local control, beam-flapper assembly, process measurement input]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.90, §4.7 "Controllers", Figure 4.10
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-046.html}]
notes: Photo of the assembled controller on a valve; the internal mechanism it summarizes is shown schematically in Figures 4.11 and 4.12.
```

```yaml
id: cvh-topic-sis-accessory-role
kind: topic
concept-tags: [safety instrumented systems, SIS, fail-safe, FMEDA, emergency shutdown]
status: current
teaches: >
  Emergency vent/block/isolation valves in a process loop are typically
  on/off valves controlled by a separate safety system (often a logic
  solver) to take the loop to a safe state during an emergency — distinct
  from the primary modulating control valve. A spring-return, single-acting
  actuator provides an inherent fail mode: removing air pressure lets the
  spring drive the valve to its safe position, via a solenoid valve and/or
  digital valve controller. Additional safety-valve instrumentation
  (boosters, position transmitters, trip systems) must all be evaluated for
  their effect on the safety system, since they can fail either by causing
  an unplanned trip or by preventing the valve from reaching its safe state.
  Failure Modes, Effects, and Diagnostics Analysis (FMEDA) provides per-
  component metrics letting a safety engineer design to a target risk-
  reduction level.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§4.5 'Safety Instrumented Systems (SIS),' §4.5.2, pp. 89-90 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-sis-dvc-on-safety-valve]
relatedTopics: [cvh-topic-partial-stroke-testing]
used-by: []
notes: >
  Read directly from pp. 89-90's real prose. The source itself points to
  Chapter 12 for the full SIS treatment — this entry covers only what
  Chapter 4 states about accessories' role, not full SIS theory.
```

```yaml
id: cvh-topic-partial-stroke-testing
kind: topic
concept-tags: [partial stroke testing, PST, safety valve, valve sticking, safety instrumented systems]
status: current
teaches: >
  Safety valves are static (don't modulate under normal conditions) and are
  prone to sticking — when an emergency demand occurs, there's a real risk
  they won't move when commanded. A digital valve controller can perform a
  partial stroke test (PST): it slowly moves the valve a portion of its
  total travel, then returns it to the normal state, exercising the
  mechanical components with minimal process disruption. The digital valve
  controller diagnoses potential issues during the test and communicates
  alerts if it fails.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§4.5.1 'Partial Stroke Testing,' p. 89 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-sis-dvc-on-safety-valve]
relatedTopics: [cvh-topic-sis-accessory-role, cvh-topic-digital-valve-controller-capabilities]
used-by: []
notes: Read directly from p. 89's real prose.
```

### Pneumatic Controller Schematics & Position Transmitters (printed pp. 91–93)

```yaml
id: cvh-cmp-pneumatic-controller-schematic-proportional
teaches: Full pneumatic controller schematic for proportional-only control — manual/remote set point, proportional bellows, beam-flapper-nozzle-relay loop, and direct/reverse-action quadrants
concept-tags: [pneumatic controller, proportional control, beam-flapper-nozzle, set point adjustment, relay]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.91, §4.7 "Controllers", Figure 4.11
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-046.html}]
notes: Both Figure 4.11 and Figure 4.12 carry the identical caption "Pneumatic Controller Schematic" — same disambiguation situation the Oil & Gas Sourcebook precedent flagged for its own duplicate-captioned figures. Disambiguated here by figure number and by content: 4.11 is the proportional-only schematic (explicitly labelled "Proportional-Only Control" within the diagram itself), 4.12 extends it with reset and rate elements for proportional-plus-reset-plus-rate control. Not the same drawing — a real second, distinct schematic, not a duplicate to merge.
```

```yaml
id: cvh-cmp-pneumatic-controller-schematic-reset-rate
teaches: Pneumatic controller schematic extended with reset and rate elements — anti-reset windup and the differential relief valve for proportional-plus-reset-plus-rate control
concept-tags: [pneumatic controller, proportional-plus-reset, rate action, anti-reset windup, differential relief valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.92, §4.7 "Controllers", Figure 4.12
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-046.html}]
notes: >
  See disambiguation note on cvh-cmp-pneumatic-controller-schematic-proportional — same caption text as 4.11 by design (both titled "Pneumatic Controller Schematic"), genuinely different diagrams.
  Crop corrected 2026-09-14: the original crop included the printed caption line. Re-cropped to the complete three-panel schematic alone.
```

```yaml
id: cvh-cmp-wireless-position-transmitter
teaches: Wireless position monitor mounted on an actuator — a position transmitter reporting a 0–100% digital signal in a wireless installation, vs. a 4–20 mA signal in a wired one
concept-tags: [position transmitter, wireless installation, valve position feedback]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.92–93, §4.8 "Position Transmitters", Figure 4.13
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-047.html}]
notes: Photo of the assembled wireless position transmitter on an actuator.
```

```yaml
id: cvh-topic-pneumatic-controller-modes
kind: topic
concept-tags: [pneumatic controller, proportional control, reset, rate, anti-reset windup, differential pressure controller, gauge pressure controller, temperature controller]
status: current
teaches: >
  A local pneumatic controller measures a process input (pressure,
  differential pressure, temperature, or level via a Bourdon tube, bellows,
  liquid-displacement lever, or temperature bulb) through a beam-flapper-
  nozzle-relay mechanism and modulates output pressure to the actuator.
  Proportional-only control: the proportional band adjustment sets gain —
  widening the band means less flapper motion per unit input change (lower
  gain), narrowing it means more (higher gain); the adjustment can also
  reverse controller action. Proportional-plus-reset feeds output pressure
  back to reset and proportional bellows, minimizing offset between process
  variable and set point. Proportional-plus-reset-plus-rate adds a rate
  valve (adjustable restriction) that briefly holds gain up to accelerate
  correction for slow systems, without holding it long enough to destabilize
  the system. Anti-reset windup reduces overshoot from large/prolonged
  set-point deviation via a differential relief valve. Three indicating-
  controller variants exist by measured variable: differential pressure,
  gauge pressure, and temperature.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§4.7-4.7.3, pp. 90-92 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-pneumatic-controller-photo, cvh-cmp-pneumatic-controller-schematic-proportional, cvh-cmp-pneumatic-controller-schematic-reset-rate]
relatedTopics: []
used-by: []
notes: Read directly from pp. 90-92's real prose.
```

```yaml
id: cvh-topic-position-feedback-devices
kind: topic
concept-tags: [position transmitter, limit switch, discrete feedback, continuous feedback]
status: current
teaches: >
  Two distinct position-feedback device types serve different needs. A
  position transmitter provides independent, continuous valve-position
  feedback (4-20 mA wired, or 0-100% digital wireless) for process
  monitoring, troubleshooting, or startup/shutdown verification. A limit
  switch instead provides a discrete open/close signal only when the valve
  reaches one specific position in its travel range, using proximity,
  solid-state, magnetic, or contact-closure switch technology — same use
  cases (monitoring, troubleshooting, startup/shutdown verification) but a
  fundamentally coarser, discrete-only signal rather than continuous
  position.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§4.8-4.9, pp. 92-93 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-wireless-position-transmitter]
relatedTopics: []
used-by: []
notes: Read directly from pp. 92-93's real prose.
```

### Solenoid Valves & SIS Architectures (printed pp. 93–95)

```yaml
id: cvh-cmp-sov-3port-spring-return-symbol
teaches: Spring-return (single-acting) actuator represented in a 3-port SOV schematic symbol, used within SIS architecture diagrams
concept-tags: [solenoid-operated valve, SOV, spring-return actuator, schematic symbol, safety instrumented systems]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.93, §4.9 "Solenoid-Operated Valves (SOVs)" (section heading inferred from contiguous content; not directly captured in the read window), Figure 14.14
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-048.html}]
notes: Printed caption confirmed as "Figure 14.14" by direct visual inspection of the rendered PDF page (2026-09-12) — see the corrected note at the top of this file; the earlier "correction" to 4.14 was itself wrong. Low confidence on the exact §4.9 heading wording only — the figure identity and content are fully verified against page context.
```

```yaml
id: cvh-cmp-sov-4port-double-acting-symbol
teaches: Double-acting actuator represented in a 4-port SOV schematic symbol, contrasted with the 3-port spring-return symbol in Figure 14.14
concept-tags: [solenoid-operated valve, SOV, double-acting actuator, schematic symbol]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.93, §4.9, Figure 14.15
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-048.html}]
notes: Printed caption confirmed as "Figure 14.15" by direct visual inspection (2026-09-12) — the earlier "correction" to 4.15 was wrong; see the top-of-file note. Companion figure to 14.14 — same section, same schematic-symbol treatment, opposite actuator type.
```

```yaml
id: cvh-cmp-sov-1oo2-voting-intro
teaches: Solenoid valve and digital valve controller combined in a 1oo2 ("one-out-of-two") voting configuration for a safety instrumented system
concept-tags: [solenoid-operated valve, SOV, digital valve controller, 1oo2, safety instrumented systems, voting architecture]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.94, Figure 14.16
delivery: not yet determined
used-by: []
notes: Printed caption confirmed as "Figure 14.16" by direct visual inspection (2026-09-12) — the earlier "correction" to 4.16 was wrong; see the top-of-file note. Introduces the 1oo2/2oo2 voting nomenclature that Figures 14.19–14.20 later show as full architecture schematics.
```

```yaml
id: cvh-cmp-sov-direct-acting-assembly
teaches: Direct-acting solenoid valve assembly — physical construction of the simpler of the two SOV actuation types
concept-tags: [solenoid-operated valve, SOV, direct-acting, physical component identification]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.94, Figure 14.17
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-049.html}]
notes: Printed caption confirmed as "Figure 14.17" by direct visual inspection (2026-09-12) — the earlier "correction" to 4.17 was wrong; see the top-of-file note. Paired with Figure 14.18 (pilot-operated) as the two SOV actuation types.
```

```yaml
id: cvh-cmp-sov-pilot-operated-assembly
teaches: Pilot-operated solenoid valve — physical construction of the higher-capacity SOV actuation type, contrasted with the direct-acting design in Figure 14.17
concept-tags: [solenoid-operated valve, SOV, pilot-operated, physical component identification]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.94, Figure 14.18
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-049.html}]
notes: Printed caption confirmed as "Figure 14.18" by direct visual inspection (2026-09-12) — the earlier "correction" to 4.18 was wrong; see the top-of-file note.
```

```yaml
id: cvh-cmp-sov-1oo2-architecture-schematic
teaches: 1oo2 solenoid-operated valve architecture — full voting-system schematic showing how either of two SOVs can independently trip the safety function
concept-tags: [solenoid-operated valve, SOV, 1oo2, voting architecture, safety instrumented systems, schematic]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.95, Figure 14.19
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-050.html}]
notes: Printed caption confirmed as "Figure 14.19" by direct visual inspection (2026-09-12) — the earlier "correction" to 4.19 was wrong; see the top-of-file note. Companion figure to 14.20 (2oo2) — the two present the two standard voting architectures side by side.
```

```yaml
id: cvh-cmp-sov-2oo2-architecture-schematic
teaches: 2oo2 solenoid-operated valve architecture — full voting-system schematic requiring both SOVs to trip before the safety function activates, contrasted with the 1oo2 architecture in Figure 14.19
concept-tags: [solenoid-operated valve, SOV, 2oo2, voting architecture, safety instrumented systems, schematic]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.95, Figure 14.20
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-050.html}]
notes: Printed caption confirmed as "Figure 14.20" by direct visual inspection (2026-09-12) — the earlier "correction" to 4.20 was wrong; see the top-of-file note.
```

```yaml
id: cvh-cmp-sov-redundant-trip-configuration
teaches: Redundant SOV configuration used in critical trip-system applications
concept-tags: [solenoid-operated valve, SOV, redundancy, trip systems, safety instrumented systems]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.95, Figure 14.21
delivery: not yet determined
used-by: []
notes: Printed caption confirmed as "Figure 14.21" by direct visual inspection (2026-09-12) — the earlier "correction" to 4.21 was wrong; see the top-of-file note. Text explicitly frames this figure alongside the trip-systems discussion carried into Figure 4.24 (unaffected — normal chapter-4 numbering resumes there).
```

```yaml
id: cvh-cmp-sov-three-way-manual-reset
teaches: Three-way manual-reset solenoid-operated valve — an SOV variant requiring manual intervention to reset after a trip
concept-tags: [solenoid-operated valve, SOV, manual reset, three-way valve, trip systems]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.95, Figure 14.22
delivery: not yet determined
used-by: []
notes: Grep-confirmed as part of the unbroken figure sequence on this page range; full paragraph-level caption context for this specific figure was not independently re-verified beyond sequence position. The "14.N" printed-caption numbering for this whole 14.14-14.23 range was later confirmed by direct visual page inspection (2026-09-12) — see the top-of-file note; this entry's own exact caption wording is still not independently re-verified word-for-word, only the "14.N" numbering convention it shares with its neighbors.
```

```yaml
id: cvh-cmp-sov-manifold-assembly
teaches: SOV manifold assembly — a physical multi-valve manifold consolidating several solenoid-operated valves into one assembly
concept-tags: [solenoid-operated valve, SOV, manifold, physical component identification]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.95, Figure 14.23
delivery: not yet determined
used-by: []
notes: Same low-confidence caveat as cvh-cmp-sov-three-way-manual-reset — sequence position and page confirmed, exact caption wording not independently re-verified word-for-word beyond the "14.N" numbering itself (confirmed 2026-09-12, see the top-of-file note).
```

```yaml
id: cvh-topic-sov-voting-nomenclature
kind: topic
concept-tags: [solenoid-operated valve, SOV, XooY, voting architecture, 1oo1, 1oo2, 2oo2, direct-acting, pilot-operated]
status: current
teaches: >
  General XooY voting nomenclature for SOV (and final-element) architectures:
  "any X of the total Y devices must change state when demanded" to put the
  final control element in its safe state. A single solenoid used alone is
  1oo1. 1oo2 means any 1 of 2 devices can trip the system (used where any one
  SOV — or an SOV and a digital valve controller together — should be able
  to force the safe state); 2oo2 requires both devices to agree before
  tripping. More complex configurations exist beyond these two. Separately,
  SOV actuation type must suit the actuator's full pressure range (0-150 psi
  depending on actuator type): a direct-acting SOV is operated solely by the
  solenoid's electromagnetic force; an externally-piloted SOV uses external
  air pressure (switched by the solenoid's own direct-acting pilot) to
  change state, letting it work without air pressure in the SOV's main body.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§4.10, pp. 93-95 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-sov-1oo2-voting-intro, cvh-cmp-sov-1oo2-architecture-schematic, cvh-cmp-sov-2oo2-architecture-schematic, cvh-cmp-sov-direct-acting-assembly, cvh-cmp-sov-pilot-operated-assembly, cvh-cmp-sov-redundant-trip-configuration, cvh-cmp-sov-three-way-manual-reset]
relatedTopics: [cvh-topic-sis-accessory-role]
used-by: []
notes: >
  Read directly from pp. 93-95's real prose. This general XooY rule
  (transferable beyond SOVs — the same nomenclature governs sensor/final-
  element voting generally) is a candidate cross-reference once Chapter 12
  (Safety Instrumented Systems) is topic-indexed; not linked yet since that
  chapter's topic ids don't exist as of this pass.
```

### Trip and Switching Valves, Manual Handwheels (printed pp. 96–97)

```yaml
id: cvh-cmp-trip-valve-tripped-condition
teaches: Trip valve shown in its tripped condition — the physical valve state that results when a safety trip system activates
concept-tags: [trip valve, trip systems, safety instrumented systems, physical component identification]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.96, Figure 4.24
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-051.html}]
notes: >
  Directly follows the trip-systems and redundant-SOV discussion (Figure 14.21 — see that entry's own corrected caption note) earlier in the chapter.
  Crop corrected 2026-09-14: two printed labels on the left edge of this schematic are genuinely truncated in the source book's own print layout — confirmed by extracting all the way to the page's own printed margin and finding the text still cut off there. Not a cropping defect on our part and not recoverable by re-cropping; the current crop is the best available (captures everything the source actually contains) and excludes the printed caption line, which the original crop had included.
```

```yaml
id: cvh-topic-trip-system-function
kind: topic
concept-tags: [trip system, fail-up, fail-down, lock-in-last-position, volume tank, pneumatic lock-up]
status: current
teaches: >
  Trip systems provide a specific actuator action when supply pressure is
  lost. Used with double-acting actuators lacking an inherent no-air fail
  state, or with single-/double-acting actuators needing pneumatic lock-up.
  When supply pressure falls below the trip point, the trip valve causes the
  actuator to fail up, lock in its last position, or fail down. For double-
  acting applications, a volume tank supplies reserve pneumatic air to
  operate the valve until supply pressure is restored; when pressure rises
  back above the trip point, the trip valve automatically resets to normal
  operation.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§4.11 'Trip Systems,' pp. 94-96 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-trip-valve-tripped-condition]
relatedTopics: [cvh-topic-sis-accessory-role]
used-by: []
notes: Read directly from pp. 94-96's real prose.
```

```yaml
id: cvh-cmp-three-way-switching-valve
teaches: Typical three-way switching valve
concept-tags: [switching valve, three-way valve, physical component identification]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.96, Figure 4.25
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-051.html}]
notes: Paired on the same page as Figure 4.24 (trip valve); both are safety/trip-related accessory hardware.
```

```yaml
id: cvh-cmp-actuator-side-handwheel
teaches: Actuator fitted with a side-mounted handwheel — a manual-override mechanism for manipulating the actuator without pneumatic supply
concept-tags: [handwheel, manual override, actuator, physical component identification]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.97, Figure 4.26
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-051.html}]
notes: Companion figure to 4.27 — same section, contrasting handwheel mounting positions (side vs. top).
```

```yaml
id: cvh-cmp-actuator-top-handwheel
teaches: Actuator fitted with a top-mounted handwheel, contrasted with the side-mounted arrangement in Figure 4.26
concept-tags: [handwheel, manual override, actuator, physical component identification]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.97, Figure 4.27
delivery: not yet determined
used-by: [{course: CVB, slide: cvb-051.html}]
notes: Last figure in the chapter; Chapter 5 ("Control Valve Sizing") begins on the next page (PDF page 98), confirmed directly against the chapter-divider page.
```

## Open items

- **Full-chapter `kind: topic` pass, 2026-09-17.** Added 10 real `kind: topic`
  entries (`cvh-topic-accessory-selection-rationale`,
  `cvh-topic-positioner-fundamentals`,
  `cvh-topic-digital-valve-controller-capabilities`,
  `cvh-topic-volume-booster-function`, `cvh-topic-sis-accessory-role`,
  `cvh-topic-partial-stroke-testing`, `cvh-topic-pneumatic-controller-modes`,
  `cvh-topic-position-feedback-devices`, `cvh-topic-sov-voting-nomenclature`,
  `cvh-topic-trip-system-function`) covering every genuine concept the
  chapter's body prose teaches beyond what a figure caption alone captures —
  read directly from the real PDF (`pdftotext -f/-l`), same rigor as the
  original figure pass. Two sections (§4.12 Switching Valves, §4.13
  Handwheels) were confirmed to have nothing conceptual beyond what their
  existing figure entries already state — one short paragraph each, fully
  captured by the figure's own `teaches:` field — no topic entry authored
  for either, not an oversight. Total component count is now **37** (27
  figures + 10 topics), up from 27. File integrity verified: 37 unique ids,
  37 balanced `\`\`\`yaml` fences, every `relatedFigures`/`relatedTopics`
  reference programmatically confirmed to resolve to a real id in this file
  (zero broken references).
- **Batch coverage**: all 27 figures in the chapter (4.1–4.27) are catalogued, with no gaps in the numeric sequence. Real chapter start (PDF p.82, divider) and end (content through p.97, with Chapter 5 confirmed starting at p.98) were verified directly against the source PDF, not assumed from the table of contents.
- **Correction reversed, 2026-09-12**: this pass originally treated Figures 4.14–4.23's "Figure 14.N" captions as a `pdftotext` extraction artifact and "corrected" them back to "4.N". That was wrong — a later Stage 3 authoring pass rendered the actual PDF pages as images and confirmed the source book genuinely prints "Figure 14.14" through "Figure 14.23"; every affected entry below (`cvh-cmp-sov-3port-spring-return-symbol` through `cvh-cmp-sov-manifold-assembly`) has been corrected back to the real printed number. See the note at the top of this file for the full explanation and the confirmed boundary (4.13 and earlier, 4.24 and later, both unaffected).
- **Low-confidence flags**:
  - `cvh-cmp-volume-booster-sectional`: the exact section-number/heading for the Volume Boosters section was not captured within the page window read; the figure's identity, content, and page are fully verified.
  - `cvh-cmp-sov-3port-spring-return-symbol`: same caveat — the `§4.9` heading text for the Solenoid-Operated Valves section is inferred from contiguous content, not directly read from a heading line.
  - `cvh-cmp-sov-three-way-manual-reset` and `cvh-cmp-sov-manifold-assembly`: figure identity, sequence position, and page are confirmed; the exact caption wording was not independently re-verified beyond the sequence-position check (these two fell in a page region where the full-caption grep returned partial results for other figures on the same page but not these two specifically).
- **Duplicate-caption pair identified and resolved**: Figures 4.11 and 4.12 both carry the caption "Pneumatic Controller Schematic" — confirmed as two genuinely distinct diagrams (proportional-only vs. proportional-plus-reset-plus-rate), not a duplicate to merge, matching the same disambiguation situation the Oil & Gas Sourcebook ch1 precedent encountered with its own duplicate-captioned figures.
- **Table exclusion confirmed**: no tables appear in this chapter's figure sequence; all 27 catalogued items are genuine figures (schematics or photos).
- **Cross-reference check**: `Component Index — 14101 ch3.md` was checked for incidental references into this chapter's figure range. Its Control Valve Handbook citations (Fig 3.43, Fig 8.10, Fig 2.3, §5.11) all fall outside Chapter 4 — no existing `used-by` entries apply to any figure catalogued here.
- **No archive or legacy material** was found or consulted for this chapter — the 6th-edition Control Valve Handbook is the sole and sufficient source for all 27 figures.
- **Schema-drift fix, 2026-09-17 — `status` and `id` corrected, all downstream references updated.** All 27 `status: verified` values corrected to `status: current` (see the note near the top of this file). All 27 `id`s renamed from `cvh-cmp-4.N` to descriptive slugs. This touched real, shipped content, not just this index: a scripted, word-boundary-anchored rename (so `4.1` couldn't corrupt `4.10`–`4.19`) was applied across every file found citing the old ids — 4 planning docs (`CLI-directive-migrate-verify-stage3-cvb.md`, `Instructional Packet`/`Stage 1 Outline`/`Stage 2 Attachments — Control Valve Basics — cvb-ch3.md`), Control Valve Basics' real `course.json` and `course-data.js`, 11 of its already-built slide HTML files (`cvb-040`–`cvb-051`, excluding `cvb-045`, which never cited this chapter), and `assets/sourced/SOURCES.txt` — 283 replacements total, verified zero old-style `cvh-cmp-4.N` references remain anywhere in the vault afterward, `course.json` re-validated as parseable JSON, and a sampled slide's rendered citation line spot-checked directly. The 14101 ch1-ch2/ch3 and bench-set-657 cross-indexes were confirmed to have never cited these ids (checked, not assumed) — nothing to update there. No slug collided with any existing id in ch1–3 (checked before applying).
