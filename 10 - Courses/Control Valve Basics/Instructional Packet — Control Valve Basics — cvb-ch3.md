---
title: Instructional Packet — Control Valve Basics
type: review
tags:
  - instructional-packet
  - pipeline
course: Control Valve Basics
chapter: cvb-ch3
updated: 2026-09-11
---

# Instructional Packet — cvb-ch3 (Control Valve Accessories)

> [!note] How to review this document
> This is the content unit Stage 3 will actually compose from — one or
> more `primitives[]` per concept once migrated to that shape (pre-
> migration content renders its flat `t`/`sources`/`template` instead,
> labeled as such), each competency's own confidence state
> (`provisional`/`confirmed`/`revised`, with why when revised), and a
> concept-granularity flag (3+ components cited — worth a glance, never a
> blocking failure). This accumulates across Stage 1 (the concept slot)
> and Stage 2 (the primitive(s) authored onto it) and is reviewed at the
> existing Stage 2 gate — it is not a separate Stage 3 log. See the
> matching `Stage 1 Outline` doc for arc structure and `Stage 2
> Attachments` for a flat sourcing-only view. Edit directly (strikethrough,
> `> [!warning]` callouts, notes) the same way every other pipeline doc in
> this vault is reviewed; re-fire Stage 2 as a **REVISE** when done.

### 1. cvb-ch3-m1 — Positioners, Transducers & Boosters

**Objective:** Identify a positioner, digital valve controller, I/P transducer, and volume booster, and explain each one's role in getting a command signal to the valve stem.

**1. cvb.accessory.positioner-mechanism** (introduces · confirmed)
role: mechanism · level: understand · pages: 36

- **Primitive** — orientation · introductory

  A pneumatic positioner closes its own local loop: it compares actual stem position (fed back through a cam and beam) to the command signal at a flapper/nozzle, and drives a relay until the two agree.

  - `cvh-cmp-4.1` (verified, Component Index — Control Valve Handbook ch4.md) — "Full pneumatic single-acting positioner mechanism — bellows, beam, cam feedback, flapper/nozzle, relay, and the diaphragm-pressure output loop that positions the valve stem"
  - template: `slide--role-mechanism` — One fully labelled schematic (bellows, beam, cam feedback, flapper/nozzle, relay, diaphragm-pressure output) showing the complete closed local loop — the clearest possible mechanism-role case in this module, one figure carrying the whole explanation.
  - slideCount: 1 (stage2)
  - pages: 36


**2. cvb.accessory.analog-ip-positioner** (introduces · confirmed)
role: mechanism · level: understand · pages: 37

- **Primitive** — orientation · introductory

  An analog I/P positioner runs the same feedback loop from a 4-20 mA current signal instead of a pneumatic one, converting current to pneumatic output through the same nozzle/flapper/relay stages.

  - `cvh-cmp-4.2` (verified, Component Index — Control Valve Handbook ch4.md) — "Analog I/P positioner design — labelled schematic showing the DC input signal, converter, feedback axis, nozzle/flapper, and relay stages that produce a pneumatic output"
  - `cvh-cmp-4.3` (verified, Component Index — Control Valve Handbook ch4.md) — "Physical appearance of an assembled I/P positioner unit, as referenced alongside the schematic in Figure 4.2"
  - template: `slide--role-mechanism` — Two figures in natural teaching order: the labelled schematic (DC input, converter, feedback axis, nozzle/flapper, relay) explaining the mechanism, then the physical unit photo confirming what it actually looks like — the same schematic-then-hardware sequence mechanism's shape is built to carry.
  - slideCount: 1 (stage2)
  - pages: 37


**3. cvb.accessory.digital-valve-controller** (introduces · confirmed)
role: nomenclature · level: remember · pages: 38

- **Primitive** — orientation · introductory

  A digital valve controller replaces the positioner's mechanical feedback linkage with a microprocessor — same job (drive the valve to command), added diagnostics.

  - `cvh-cmp-4.4` (verified, Component Index — Control Valve Handbook ch4.md) — "Digital valve controller mounted on an assembled control valve — the physical instrument referenced by §4.2.3's description of microprocessor-based positioning"
  - template: `slide--role-nomenclature` — A single real photo of a digital valve controller mounted on an assembled valve — a straightforward recognition-level nomenclature case, naming the instrument before its own diagnostic capabilities are covered later in the course.
  - slideCount: 1 (stage2)
  - pages: 38


**4. cvb.accessory.ip-transducer** (introduces · confirmed)
role: mechanism · level: understand · pages: 39

- **Primitive** — orientation · introductory

  An I/P transducer converts a current signal to a pneumatic one with no position feedback at all — simpler and cheaper than a positioner, appropriate where high positioning accuracy isn't required.

  - `cvh-cmp-4.5` (verified, Component Index — Control Valve Handbook ch4.md) — "Deflector/nozzle pilot-stage detail inside an I/P transducer — the two-nozzle arrangement and deflector bar that establishes pilot pressure"
  - `cvh-cmp-4.6` (verified, Component Index — Control Valve Handbook ch4.md) — "I/P transducer mounted on a control valve — the physical, no-feedback alternative to a positioner for applications not requiring high positioning accuracy"
  - template: `slide--role-mechanism` — Two figures in natural teaching order — a pilot-stage detail crop, then the assembled unit mounted on a valve — the same schematic-then-hardware sequence mechanism's shape already carries for the analog I/P positioner two slides earlier. Re-tagged from contrast to mechanism per the 2026-09-11 template-fit review, since both cited figures are views of the same device, not two different things for a two-panel contrast.
  - slideCount: 1 (stage2)
  - pages: 39


**5. cvb.accessory.volume-booster** (introduces · confirmed)
role: application · level: understand · pages: 40

- **Primitive** — orientation · introductory

  A volume booster amplifies the pneumatic flow available to the actuator without changing the signal's pressure — needed when a large or fast-stroking actuator would otherwise starve the positioner's own limited output capacity.

  - `cvh-cmp-4.7` (verified, Component Index — Control Valve Handbook ch4.md) — "Volume booster sectional view — internal construction of a booster used to amplify pneumatic flow capacity to the actuator"
  - `cvh-cmp-4.8` (verified, Component Index — Control Valve Handbook ch4.md) — "Typical dual-booster installation on a double-acting actuator — one booster feeding each side of the actuator piston"
  - template: `slide--role-application` — Two figures split cleanly by role within the slide: the sectional view grounds the takeaway's mechanism claim (amplifying flow without changing signal pressure), and the dual-booster installation photo is the real case that motivates when you'd need one — fits application's fig-plus-takeaway shape with the installation photo as the primary figure and the sectional view supporting the one-line payoff, not two separate things needing their own panels.
  - slideCount: 1 (stage2)
  - pages: 40


**→ Activity — Signal Path Trace** case-walkthrough · 15 min — Given a real assembled valve/actuator/DVC photo, trace the signal path from the control-room command to stem motion, naming each accessory (positioner or transducer, booster if present) and what it does at each hop.

**Check** — pages 41 (composed by Stage 3, not authored here)

### 2. cvb-ch3-m2 — Controllers, Position Feedback & Safety Accessories

**Objective:** Identify a pneumatic controller's role as a standalone local controller, and distinguish solenoid-valve types and safety-accessory hardware used in a safety instrumented system.

**1. cvb.accessory.pneumatic-controller** (introduces · confirmed)
role: mechanism · level: understand · pages: 42

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A standalone pneumatic controller closes an entire control loop right at the valve, with no central control-room computer system (a DCS or PLC) needed — it compares the measured process value to a set point and drives the valve directly. Adding reset and rate elements to a proportional-only design corrects lingering offset and reacts faster to a changing load.

  - `cvh-cmp-4.10` (verified, Component Index — Control Valve Handbook ch4.md) — "Pneumatic controller mounted on a control valve — a local, standalone controller used when a full DCS/PLC is not needed, driven by a Bourdon tube, bellows, liquid-displacement lever, or temperature bulb input element"
  - `cvh-cmp-4.11` (verified, Component Index — Control Valve Handbook ch4.md) — "Full pneumatic controller schematic for proportional-only control — manual/remote set point, proportional bellows, beam-flapper-nozzle-relay loop, and direct/reverse-action quadrants"
  - `cvh-cmp-4.12` (verified, Component Index — Control Valve Handbook ch4.md) — "Pneumatic controller schematic extended with reset and rate elements — anti-reset windup and the differential relief valve for proportional-plus-reset-plus-rate control"
  - template: `slide--role-mechanism` — Three figures in a genuine build-up sequence — the physical unit, then its proportional-only schematic, then the same schematic extended with reset-and-rate elements — exactly mechanism's own guidance for a figure showing sequential states of one mechanism (add a flow-arrow between the two schematic stages), not three independent things.
  - slideCount: 1 (stage2)
  - pages: 42


**2. cvb.accessory.position-transmitter** (introduces · confirmed)
role: contrast · level: understand · pages: 43

- **Primitive** — orientation · introductory

  A position transmitter reports actual valve position back to the control system — 4-20 mA if wired, a 0-100% digital signal if wireless — so the control room can see where the valve really is, not just where it was told to go.

  - `cvh-cmp-4.13` (verified, Component Index — Control Valve Handbook ch4.md) — "Wireless position monitor mounted on an actuator — a position transmitter reporting a 0–100% digital signal in a wireless installation, vs. a 4–20 mA signal in a wired one"
  - template: `slide--role-contrast` — The single source figure (a wireless position monitor) is captioned against the wired case directly ('reporting a 0-100% digital signal... vs. a 4-20mA signal in a wired one') — a real two-way contrast even from one figure, since the wired case is the baseline already established for every other accessory in this chapter; the wireless photo anchors one panel, the wired baseline anchors the other without needing its own new photograph.
  - slideCount: 1 (stage2)
  - pages: 43


**3. cvb.safety.solenoid-valve-types** (introduces · confirmed)
role: contrast · level: understand · pages: 44

- **Primitive** — orientation · introductory

  A spring-return SOV drives a single-acting actuator (3-port symbol); a double-acting SOV drives an actuator that needs pressure on both sides (4-port symbol).

  - `cvh-cmp-4.14` (verified, Component Index — Control Valve Handbook ch4.md) — "Spring-return (single-acting) actuator represented in a 3-port SOV schematic symbol, used within SIS architecture diagrams"
  - `cvh-cmp-4.15` (verified, Component Index — Control Valve Handbook ch4.md) — "Double-acting actuator represented in a 4-port SOV schematic symbol, contrasted with the 3-port spring-return symbol in Figure 4.14"
  - template: `slide--role-contrast` — Two-way contrast (spring-return/single-acting vs. double-acting), each with its own schematic symbol (3-port vs. 4-port) — fits contrast's two-panel shape exactly, once split from the actuation-type axis this id used to also carry.
  - slideCount: 1 (stage2)
  - pages: 44


**4. cvb.safety.solenoid-actuation-type** (introduces · confirmed)
role: contrast · level: understand · pages: 45

- **Primitive** — orientation · introductory

  A direct-acting SOV switches with less flow capacity but no minimum pressure; a pilot-operated SOV needs a minimum supply pressure but handles far more flow.

  - `cvh-cmp-4.17` (verified, Component Index — Control Valve Handbook ch4.md) — "Direct-acting solenoid valve assembly — physical construction of the simpler of the two SOV actuation types"
  - `cvh-cmp-4.18` (verified, Component Index — Control Valve Handbook ch4.md) — "Pilot-operated solenoid valve — physical construction of the higher-capacity SOV actuation type, contrasted with the direct-acting design in Figure 4.17"
  - template: `slide--role-contrast` — Two-way contrast (direct-acting vs. pilot-operated SOV actuation), each with its own physical-construction photo — fits contrast's two-panel shape exactly, split out of cvb.safety.solenoid-valve-types (which used to bundle this axis with the separate spring-return/double-acting drive-type axis).
  - slideCount: 1 (stage2)
  - pages: 45


**→ Activity — SOV Actuation ID** small-group · 15 min — Given labelled photos of a direct-acting and a pilot-operated solenoid valve, plus the 3-port/4-port schematic symbols, identify actuation type and port count for each.

**5. cvb.safety.voting-architecture** (introduces · confirmed)
role: application · level: understand · pages: 46

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A 1oo2 (one-out-of-two) architecture trips if either of two SOVs sees a demand — favoring safety, more nuisance trips. A 2oo2 architecture needs both to agree — favoring uptime, at the cost of a slower response to a real single-SOV failure.

  - `cvh-cmp-4.16` (verified, Component Index — Control Valve Handbook ch4.md) — "Solenoid valve and digital valve controller combined in a 1oo2 ("one-out-of-two") voting configuration for a safety instrumented system"
  - `cvh-cmp-4.19` (verified, Component Index — Control Valve Handbook ch4.md) — "1oo2 solenoid-operated valve architecture — full voting-system schematic showing how either of two SOVs can independently trip the safety function"
  - `cvh-cmp-4.20` (verified, Component Index — Control Valve Handbook ch4.md) — "2oo2 solenoid-operated valve architecture — full voting-system schematic requiring both SOVs to trip before the safety function activates, contrasted with the 1oo2 architecture in Figure 4.19"
  - template: `slide--role-application-case` — Two distinct voting architectures (1oo2, 2oo2), each with its own full schematic and its own tradeoff, now shown as application-case's two-frame filmstrip instead of base application's single-fig shape. Already the right role; only the template variant changed.
  - slideCount: 1 (stage2)
  - pages: 46


**6. cvb.safety.trip-and-manual-override** (introduces · confirmed)
role: nomenclature · level: remember · pages: 47

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A trip valve shows a distinct physical state once a safety system actually trips it; a switching valve routes pneumatic signal for control logic rather than process flow. A side- or top-mounted handwheel lets a technician manually stroke an actuator with no air supply at all.

  - `cvh-cmp-4.24` (verified, Component Index — Control Valve Handbook ch4.md) — "Trip valve shown in its tripped condition — the physical valve state that results when a safety trip system activates"
  - `cvh-cmp-4.25` (verified, Component Index — Control Valve Handbook ch4.md) — "Typical three-way switching valve"
  - `cvh-cmp-4.26` (verified, Component Index — Control Valve Handbook ch4.md) — "Actuator fitted with a side-mounted handwheel — a manual-override mechanism for manipulating the actuator without pneumatic supply"
  - `cvh-cmp-4.27` (verified, Component Index — Control Valve Handbook ch4.md) — "Actuator fitted with a top-mounted handwheel, contrasted with the side-mounted arrangement in Figure 4.26"
  - template: `slide--role-nomenclature` — Four figures resolve into three named items — trip valve, switching valve, and handwheel override (shown in its two mounting variants, side and top) — nomenclature's labelled-list shape holds three named things under one slide comfortably, the handwheel's two photos serving as one list entry's illustration, not two separate items.
  - slideCount: 1 (stage2)
  - pages: 47


**Check** — pages 48 (composed by Stage 3, not authored here)
