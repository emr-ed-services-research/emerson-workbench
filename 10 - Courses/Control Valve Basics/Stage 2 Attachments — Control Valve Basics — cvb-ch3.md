---
title: Stage 2 Attachments — Control Valve Basics
type: review
tags:
  - stage2-attachments
  - pipeline
course: Control Valve Basics
chapter: cvb-ch3
updated: 2026-09-11
---

# Stage 2 Attachments — cvb-ch3 (Control Valve Accessories)

> [!note] How to review this document
> This shows what actually backs each concept Stage 2 authored — the
> real Component Index record(s) each citation resolves to (what it
> teaches, its precedence status), or a plain `sourceNote` where no
> component fits. This is a sourcing-quality review, not an arc-structure
> one — see the matching `Stage 1 Outline` doc for that. Edit directly
> (strikethrough, `> [!warning]` callouts, notes) the same way; re-fire
> Stage 2 as a **REVISE** when done. Stage 3 stays locked until every
> module below is approved.

### 1. cvb-ch3-m1 — Positioners, Transducers & Boosters

**Objective:** Identify a positioner, digital valve controller, I/P transducer, and volume booster, and explain each one's role in getting a command signal to the valve stem.

**1. (mechanism · understand, page 36, slide--role-mechanism)** A pneumatic positioner closes its own local loop: it compares actual stem position (fed back through a cam and beam) to the command signal at a flapper/nozzle, and drives a relay until the two agree.
  - `cvh-cmp-4.1` (verified, Component Index — Control Valve Handbook ch4.md) — "Full pneumatic single-acting positioner mechanism — bellows, beam, cam feedback, flapper/nozzle, relay, and the diaphragm-pressure output loop that positions the valve stem"

**2. (mechanism · understand, page 37, slide--role-mechanism)** An analog I/P positioner runs the same feedback loop from a 4-20 mA current signal instead of a pneumatic one, converting current to pneumatic output through the same nozzle/flapper/relay stages.
  - `cvh-cmp-4.2` (verified, Component Index — Control Valve Handbook ch4.md) — "Analog I/P positioner design — labelled schematic showing the DC input signal, converter, feedback axis, nozzle/flapper, and relay stages that produce a pneumatic output"
  - `cvh-cmp-4.3` (verified, Component Index — Control Valve Handbook ch4.md) — "Physical appearance of an assembled I/P positioner unit, as referenced alongside the schematic in Figure 4.2"

**3. (nomenclature · remember, page 38, slide--role-nomenclature)** A digital valve controller replaces the positioner's mechanical feedback linkage with a microprocessor — same job (drive the valve to command), added diagnostics.
  - `cvh-cmp-4.4` (verified, Component Index — Control Valve Handbook ch4.md) — "Digital valve controller mounted on an assembled control valve — the physical instrument referenced by §4.2.3's description of microprocessor-based positioning"

**4. (contrast · understand, page 39, slide--role-contrast)** An I/P transducer converts a current signal to a pneumatic one with no position feedback at all — simpler and cheaper than a positioner, appropriate where high positioning accuracy isn't required.
  - `cvh-cmp-4.5` (verified, Component Index — Control Valve Handbook ch4.md) — "Deflector/nozzle pilot-stage detail inside an I/P transducer — the two-nozzle arrangement and deflector bar that establishes pilot pressure"
  - `cvh-cmp-4.6` (verified, Component Index — Control Valve Handbook ch4.md) — "I/P transducer mounted on a control valve — the physical, no-feedback alternative to a positioner for applications not requiring high positioning accuracy"

**5. (application · understand, page 40, slide--role-application)** A volume booster amplifies the pneumatic flow available to the actuator without changing the signal's pressure — needed when a large or fast-stroking actuator would otherwise starve the positioner's own limited output capacity.
  - `cvh-cmp-4.7` (verified, Component Index — Control Valve Handbook ch4.md) — "Volume booster sectional view — internal construction of a booster used to amplify pneumatic flow capacity to the actuator"
  - `cvh-cmp-4.8` (verified, Component Index — Control Valve Handbook ch4.md) — "Typical dual-booster installation on a double-acting actuator — one booster feeding each side of the actuator piston"

### 2. cvb-ch3-m2 — Controllers, Position Feedback & Safety Accessories

**Objective:** Identify a pneumatic controller's role as a standalone local controller, and distinguish solenoid-valve types and safety-accessory hardware used in a safety instrumented system.

**1. (mechanism · understand, page 42, slide--role-mechanism)** A standalone pneumatic controller closes an entire control loop right at the valve, with no central control-room computer system (a DCS or PLC) needed — it compares the measured process value to a set point and drives the valve directly. Adding reset and rate elements to a proportional-only design corrects lingering offset and reacts faster to a changing load.
  - `cvh-cmp-4.10` (verified, Component Index — Control Valve Handbook ch4.md) — "Pneumatic controller mounted on a control valve — a local, standalone controller used when a full DCS/PLC is not needed, driven by a Bourdon tube, bellows, liquid-displacement lever, or temperature bulb input element"
  - `cvh-cmp-4.11` (verified, Component Index — Control Valve Handbook ch4.md) — "Full pneumatic controller schematic for proportional-only control — manual/remote set point, proportional bellows, beam-flapper-nozzle-relay loop, and direct/reverse-action quadrants"
  - `cvh-cmp-4.12` (verified, Component Index — Control Valve Handbook ch4.md) — "Pneumatic controller schematic extended with reset and rate elements — anti-reset windup and the differential relief valve for proportional-plus-reset-plus-rate control"

**2. (contrast · understand, page 43, slide--role-contrast)** A position transmitter reports actual valve position back to the control system — 4-20 mA if wired, a 0-100% digital signal if wireless — so the control room can see where the valve really is, not just where it was told to go.
  - `cvh-cmp-4.13` (verified, Component Index — Control Valve Handbook ch4.md) — "Wireless position monitor mounted on an actuator — a position transmitter reporting a 0–100% digital signal in a wireless installation, vs. a 4–20 mA signal in a wired one"

**3. (contrast · understand, page 44, slide--role-contrast)** A spring-return SOV drives a single-acting actuator (3-port symbol); a double-acting SOV drives an actuator that needs pressure on both sides (4-port symbol). Separately, a direct-acting SOV switches with less flow capacity but no minimum pressure; a pilot-operated SOV needs a minimum supply pressure but handles far more flow.
  - `cvh-cmp-4.14` (verified, Component Index — Control Valve Handbook ch4.md) — "Spring-return (single-acting) actuator represented in a 3-port SOV schematic symbol, used within SIS architecture diagrams"
  - `cvh-cmp-4.15` (verified, Component Index — Control Valve Handbook ch4.md) — "Double-acting actuator represented in a 4-port SOV schematic symbol, contrasted with the 3-port spring-return symbol in Figure 4.14"
  - `cvh-cmp-4.17` (verified, Component Index — Control Valve Handbook ch4.md) — "Direct-acting solenoid valve assembly — physical construction of the simpler of the two SOV actuation types"
  - `cvh-cmp-4.18` (verified, Component Index — Control Valve Handbook ch4.md) — "Pilot-operated solenoid valve — physical construction of the higher-capacity SOV actuation type, contrasted with the direct-acting design in Figure 4.17"

**4. (application · understand, page 45, slide--role-application)** A 1oo2 (one-out-of-two) architecture trips if either of two SOVs sees a demand — favoring safety, more nuisance trips. A 2oo2 architecture needs both to agree — favoring uptime, at the cost of a slower response to a real single-SOV failure.
  - `cvh-cmp-4.16` (verified, Component Index — Control Valve Handbook ch4.md) — "Solenoid valve and digital valve controller combined in a 1oo2 ("one-out-of-two") voting configuration for a safety instrumented system"
  - `cvh-cmp-4.19` (verified, Component Index — Control Valve Handbook ch4.md) — "1oo2 solenoid-operated valve architecture — full voting-system schematic showing how either of two SOVs can independently trip the safety function"
  - `cvh-cmp-4.20` (verified, Component Index — Control Valve Handbook ch4.md) — "2oo2 solenoid-operated valve architecture — full voting-system schematic requiring both SOVs to trip before the safety function activates, contrasted with the 1oo2 architecture in Figure 4.19"

**5. (nomenclature · remember, page 46, slide--role-nomenclature)** A trip valve shows a distinct physical state once a safety system actually trips it; a switching valve routes pneumatic signal for control logic rather than process flow. A side- or top-mounted handwheel lets a technician manually stroke an actuator with no air supply at all.
  - `cvh-cmp-4.24` (verified, Component Index — Control Valve Handbook ch4.md) — "Trip valve shown in its tripped condition — the physical valve state that results when a safety trip system activates"
  - `cvh-cmp-4.25` (verified, Component Index — Control Valve Handbook ch4.md) — "Typical three-way switching valve"
  - `cvh-cmp-4.26` (verified, Component Index — Control Valve Handbook ch4.md) — "Actuator fitted with a side-mounted handwheel — a manual-override mechanism for manipulating the actuator without pneumatic supply"
  - `cvh-cmp-4.27` (verified, Component Index — Control Valve Handbook ch4.md) — "Actuator fitted with a top-mounted handwheel, contrasted with the side-mounted arrangement in Figure 4.26"
