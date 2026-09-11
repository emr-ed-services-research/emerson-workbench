---
title: Stage 1 Outline — Control Valve Basics
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Basics
chapter: cvb-ch3
updated: 2026-09-11
---

# Stage 1 Outline — cvb-ch3 (Control Valve Accessories)

> [!note] How to review this document
> This is the real cut Stage 1 just made for this chapter — module
> boundaries, the concept sequence, and where a Hands-First doing-activity
> lands, in taught order. Edit it directly the way any other doc in this
> vault gets reviewed: strike through anything wrong (`~~like this~~`),
> add a `> [!warning]` callout on a boundary or activity placement you want
> reconsidered, or just leave a note. When you're done, re-fire Stage 1 as
> a **REVISE** — it reads your edits here against the current `course.json`
> and produces a corrected cut, then regenerates a clean copy of this file.
> Stage 2 stays locked until every module below is approved.

### 1. cvb-ch3-m1 — Positioners, Transducers & Boosters

**Objective:** Identify a positioner, digital valve controller, I/P transducer, and volume booster, and explain each one's role in getting a command signal to the valve stem.

level target: `understand` · audience stage: `orientation`

**Stakes (opening hook):** A tech who can't tell a positioner from a transducer from a booster can't explain why a valve isn't reaching command, or which accessory to check first.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | A pneumatic positioner closes its own local loop: it compares actual stem position (fed back through a cam and beam) to the command signal at a flapper/nozzle, and drives a relay until the two agree. | 36 | role: mechanism · level: understand · cvh-cmp-4.1 |
| 2 | An analog I/P positioner runs the same feedback loop from a 4-20 mA current signal instead of a pneumatic one, converting current to pneumatic output through the same nozzle/flapper/relay stages. | 37 | role: mechanism · level: understand · cvh-cmp-4.2, cvh-cmp-4.3 |
| 3 | A digital valve controller replaces the positioner's mechanical feedback linkage with a microprocessor — same job (drive the valve to command), added diagnostics. | 38 | role: nomenclature · level: remember · cvh-cmp-4.4 |
| 4 | An I/P transducer converts a current signal to a pneumatic one with no position feedback at all — simpler and cheaper than a positioner, appropriate where high positioning accuracy isn't required. | 39 | role: contrast · level: understand · cvh-cmp-4.5, cvh-cmp-4.6 |
| 5 | A volume booster amplifies the pneumatic flow available to the actuator without changing the signal's pressure — needed when a large or fast-stroking actuator would otherwise starve the positioner's own limited output capacity. | 40 | role: application · level: understand · cvh-cmp-4.7, cvh-cmp-4.8 |
| 6 | **→ Activity — Signal Path Trace** | — | case-walkthrough · 15 min — Given a real assembled valve/actuator/DVC photo, trace the signal path from the control-room command to stem motion, naming each accessory (positioner or transducer, booster if present) and what it does at each hop. |
| 7 | Check — knowledge check | 41 | — |

### 2. cvb-ch3-m2 — Controllers, Position Feedback & Safety Accessories

**Objective:** Identify a pneumatic controller's role as a standalone local controller, and distinguish solenoid-valve types and safety-accessory hardware used in a safety instrumented system.

level target: `understand` · audience stage: `orientation` · builds on: cvb-ch3-m1

**Stakes (opening hook):** Confusing a spring-return SOV for a double-acting one, or not recognizing a trip valve's tripped state, means a safety-shutdown component gets mishandled during a routine visit.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | A standalone pneumatic controller closes an entire control loop right at the valve, with no central control-room computer system (a DCS or PLC) needed — it compares the measured process value to a set point and drives the valve directly. Adding reset and rate elements to a proportional-only design corrects lingering offset and reacts faster to a changing load. | 42 | role: mechanism · level: understand · cvh-cmp-4.10, cvh-cmp-4.11, cvh-cmp-4.12 |
| 2 | A position transmitter reports actual valve position back to the control system — 4-20 mA if wired, a 0-100% digital signal if wireless — so the control room can see where the valve really is, not just where it was told to go. | 43 | role: contrast · level: understand · cvh-cmp-4.13 |
| 3 | A spring-return SOV drives a single-acting actuator (3-port symbol); a double-acting SOV drives an actuator that needs pressure on both sides (4-port symbol). Separately, a direct-acting SOV switches with less flow capacity but no minimum pressure; a pilot-operated SOV needs a minimum supply pressure but handles far more flow. | 44 | role: contrast · level: understand · cvh-cmp-4.14, cvh-cmp-4.15, cvh-cmp-4.17, cvh-cmp-4.18 |
| 4 | **→ Activity — SOV Actuation ID** | — | small-group · 15 min — Given labelled photos of a direct-acting and a pilot-operated solenoid valve, plus the 3-port/4-port schematic symbols, identify actuation type and port count for each. |
| 5 | A 1oo2 (one-out-of-two) architecture trips if either of two SOVs sees a demand — favoring safety, more nuisance trips. A 2oo2 architecture needs both to agree — favoring uptime, at the cost of a slower response to a real single-SOV failure. | 45 | role: application · level: understand · cvh-cmp-4.16, cvh-cmp-4.19, cvh-cmp-4.20 |
| 6 | A trip valve shows a distinct physical state once a safety system actually trips it; a switching valve routes pneumatic signal for control logic rather than process flow. A side- or top-mounted handwheel lets a technician manually stroke an actuator with no air supply at all. | 46 | role: nomenclature · level: remember · cvh-cmp-4.24, cvh-cmp-4.25, cvh-cmp-4.26, cvh-cmp-4.27 |
| 7 | Check — knowledge check | 47 | — |
