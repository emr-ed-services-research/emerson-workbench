---
title: Stage 1 Outline — Control Valve Basics
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Basics
chapter: cvb-ch1
updated: 2026-09-12
---

# Stage 1 Outline — cvb-ch1 (Introduction to Control Valves)

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

### 1. cvb-ch1-m1 — Sliding-Stem Valve Anatomy

**Objective:** Identify a sliding-stem control valve's major parts from a cutaway or photo, and name its body-style, bonnet, and actuator variations.

level target: `understand` · audience stage: `orientation`

**Stakes (opening hook):** A technician who can't name a valve's parts can't read a parts list, order the right seal kit, or follow a maintenance procedure written against that nomenclature.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | Process control means automatically keeping something — a flow, a pressure, a temperature — at the value it should be. A control valve is the part that makes the correction: a sensor reads the real value, it's compared to the target, and the valve's stem moves to close the gap — this loop is what "process control" means in practice. | 5 | role: mechanism · level: understand · cvh-cmp-feedback-control-loop |
| 2 | A sliding-stem valve moves its plug straight up and down through a globe- or angle-style body — the most common control valve construction. | 6 | role: nomenclature · level: remember · cvh-cmp-sliding-stem-valve-photo |
| 3 | From actuator to body: stem, packing flange, bonnet, piston ring, plug, cage, and seat ring stack in that order — the assembly sequence every sliding-stem valve follows. | 7 | role: nomenclature · level: remember · cvh-cmp-sliding-stem-exploded |
| 4 | An angle body turns the flow path 90° for erosive or high-pressure-drop service; a three-way body combines or diverts flow through a single valve instead of the straight-through path a standard globe body uses. | 8 | role: contrast · level: understand · cvh-cmp-angle-valve-photo, cvh-cmp-three-way-globe-valve-overview |
| 5 | A conventional bonnet packs the stem with PTFE or graphite rings in the packing box; a bellows-seal bonnet replaces packing entirely with a welded metal bellows for zero-leakage service on hazardous or toxic process fluids. | 9 | role: contrast · level: understand · cvh-cmp-bonnet-assembly, cvh-cmp-bellows-seal-bonnet, cvh-cmp-stem-packing-types |
| 6 | A direct-acting actuator pushes the stem down with loading pressure and returns it with the spring; a reverse-acting actuator does the opposite. A piston actuator trades the spring for a second pressure connection, for higher thrust and faster stroking. | 10 | role: application · level: understand · cvh-cmp-direct-acting-actuator, cvh-cmp-reverse-acting-actuator, cvh-cmp-piston-actuator |
| 7 | **→ Activity — Parts Walk** | — | small-group · 15 min — In small groups at a real bench-mounted sliding-stem valve/actuator assembly (or a cutaway training aid), name each labelled part — body, bonnet, packing, actuator casing, spring, stem — checking against the exploded and cutaway figures just taught. |
| 8 | Check — knowledge check | 11 | — |

### 2. cvb-ch1-m2 — Rotary Valves & Flow Characteristics

**Objective:** Identify a rotary control valve's closure-member types and actuator, and explain how closure-member shape and cage design set a valve's inherent flow characteristic.

level target: `analyze` · audience stage: `orientation`

**Stakes (opening hook):** Specifying the wrong flow characteristic for a control loop causes a valve that's twitchy near shutoff or sluggish near full-open — a loop-tuning problem that traces back to a valve-selection decision, not the controller.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | A rotary control valve turns a ball, disk, or plug across the flow path instead of sliding a stem through it — the same final-control-element job, a different motion. | 12 | role: nomenclature · level: understand · cvh-cmp-rotary-valve-photo |
| 2 | A segmented ball, a V-notch ball, and an eccentric disk are the three standard rotary closure members — the V-notch's contoured cut gives it the widest rangeability of the three. | 13 | role: application · level: understand · cvh-cmp-segmented-ball, cvh-cmp-v-notch-ball, cvh-cmp-eccentric-disk-valve |
| 3 | A rotary actuator's lever and shaft convert the same linear stem motion a sliding-stem actuator produces into the disk or ball rotation the closure member actually needs. | 14 | role: mechanism · level: understand · cvh-cmp-rotary-actuator-cutaway |
| 4 | A cage's window shape — linear, equal-percentage, or quick-opening — sets how flow changes as the valve strokes, independent of the body style around it. | 15 | role: mechanism · level: understand · cvh-cmp-cage-types |
| 5 | Quick-opening gives maximum flow change near the closed position, linear gives equal flow change per unit of travel, and equal-percentage gives equal PERCENTAGE change per unit of travel — read the curve to tell which characteristic a valve has. | 16 | role: application · level: analyze · cvh-cmp-inherent-characteristics-graph |
| 6 | **→ Activity — Characteristic Match** | — | small-group · 15 min — Given three short process scenarios (a tight on/off-style isolation duty, a constant-gain flow loop, a large-rangeability blending duty), match each to the inherent flow characteristic (quick-opening, linear, equal-percentage) that fits, using the inherent-characteristics curve. |
| 7 | Deadband is the range a controller's output can reverse through before the valve produces any observable change — friction and backlash are its usual causes. | 17 | role: mechanism · level: understand · cvh-cmp-deadband-graph |
| 8 | Check — knowledge check | 18 | — |
