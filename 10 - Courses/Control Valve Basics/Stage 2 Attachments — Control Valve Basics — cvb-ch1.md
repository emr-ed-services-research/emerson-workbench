---
title: Stage 2 Attachments — Control Valve Basics
type: review
tags:
  - stage2-attachments
  - pipeline
course: Control Valve Basics
chapter: cvb-ch1
updated: 2026-09-12
---

# Stage 2 Attachments — cvb-ch1 (Introduction to Control Valves)

> [!note] How to review this document
> This shows what actually backs each concept Stage 2 authored — the
> real Component Index record(s) each citation resolves to (what it
> teaches, its precedence status), or a plain `sourceNote` where no
> component fits. This is a sourcing-quality review, not an arc-structure
> one — see the matching `Stage 1 Outline` doc for that. Edit directly
> (strikethrough, `> [!warning]` callouts, notes) the same way; re-fire
> Stage 2 as a **REVISE** when done. Stage 3 stays locked until every
> module below is approved.

### 1. cvb-ch1-m1 — Sliding-Stem Valve Anatomy

**Objective:** Identify a sliding-stem control valve's major parts from a cutaway or photo, and name its body-style, bonnet, and actuator variations.

**1. (mechanism · understand, page 5, slide--role-mechanism)** Process control means automatically keeping something — a flow, a pressure, a temperature — at the value it should be. A control valve is the part that makes the correction: a sensor reads the real value, it's compared to the target, and the valve's stem moves to close the gap — this loop is what "process control" means in practice.
  - `cvh-cmp-feedback-control-loop` (current, Component Index — Control Valve Handbook ch1.md) — "The feedback control loop as a block diagram: Process, Sensor, Transmitter, Controller, and Control Valve blocks connected by labelled Manipulated Variable and Controlled Variable arrows — introduces the control valve as the final control element in the loop, before the chapter breaks into sliding-stem and rotary terminology."

**2. (nomenclature · remember, page 6, slide--role-nomenclature)** A sliding-stem valve moves its plug straight up and down through a globe- or angle-style body — the most common control valve construction.
  - `cvh-cmp-sliding-stem-valve-photo` (current, Component Index — Control Valve Handbook ch1.md) — "A complete sliding-stem control valve assembly: a green Fisher-style globe body under a spring-and-diaphragm actuator — introduces "sliding-stem valve" as a real product before the section breaks into individual part callouts."

**3. (nomenclature · remember, page 7, slide--role-nomenclature)** From actuator to body: stem, packing flange, bonnet, piston ring, plug, cage, and seat ring stack in that order — the assembly sequence every sliding-stem valve follows.
  - `cvh-cmp-sliding-stem-exploded` (current, Component Index — Control Valve Handbook ch1.md) — "The major-component stack-up of a sliding-stem control valve, exploded and numbered: stem, packing flange, actuator locknut, bonnet, bonnet gasket, piston ring, plug, cage, seat ring, body/bonnet bolting, body — the assembly-order teaching figure for "actuator on top, then bonnet, then body.""

**4. (contrast · understand, page 8, slide--role-contrast)** An angle body turns the flow path 90° for erosive or high-pressure-drop service; a three-way body combines or diverts flow through a single valve instead of the straight-through path a standard globe body uses.
  - `cvh-cmp-angle-valve-photo` (current, Component Index — Control Valve Handbook ch1.md) — "An angle valve: a grey angle-body sliding-stem valve with inlet and outlet perpendicular to each other, contrasting the straight-through globe body shown in Figures 1.2/1.3."
  - `cvh-cmp-three-way-globe-valve-overview` (current, Component Index — Control Valve Handbook ch1.md) — "A three-way globe valve: a single body with three flow connections, combining or diverting flow rather than the simple two-port throttling shown in the earlier sliding-stem figures."

**5. (contrast · understand, page 9, slide--role-contrast)** A conventional bonnet packs the stem with PTFE or graphite rings in the packing box; a bellows-seal bonnet replaces packing entirely with a welded metal bellows for zero-leakage service on hazardous or toxic process fluids.
  - `cvh-cmp-bonnet-assembly` (current, Component Index — Control Valve Handbook ch1.md) — "A conventional bonnet assembly: a labelled cutaway of the bonnet, packing, packing box (the bored recess in the bonnet, not the bonnet casting itself), and valve stem — the baseline packing arrangement Figure 1.5's bellows-seal variant is contrasted against."
  - `cvh-cmp-bellows-seal-bonnet` (current, Component Index — Control Valve Handbook ch1.md) — "A bellows seal bonnet: a labelled cutaway showing the bonnet, packing, packing box, and bellows sealing the valve stem — the zero-leakage alternative to conventional packing for hazardous or toxic service."
  - `cvh-cmp-stem-packing-types` (current, Component Index — Control Valve Handbook ch1.md) — "Two stem-packing systems side by side, each fully labelled: PTFE Packing (upper wiper, packing follower, female adaptor, V-ring, male adaptor, lantern ring, washer, spring, box ring/lower wiper) and Graphite Packing (filament ring, laminated ring, lantern ring, zinc washer) — the generic packing-type reference the chapter's terminology builds on."

**6. (application · understand, page 10, slide--role-application-case)** A direct-acting actuator pushes the stem down with loading pressure and returns it with the spring; a reverse-acting actuator does the opposite. A piston actuator trades the spring for a second pressure connection, for higher thrust and faster stroking.
  - `cvh-cmp-direct-acting-actuator` (current, Component Index — Control Valve Handbook ch1.md) — "A direct-acting spring-and-diaphragm actuator, fully labelled: diaphragm casing, diaphragm, diaphragm plate, actuator spring, actuator stem, spring seat, spring adjuster, yoke, stem connector, valve stem, travel indicator disk, travel scale — the baseline actuator construction Figure 1.12's reverse-acting variant is built from and contrasted against."
  - `cvh-cmp-reverse-acting-actuator` (current, Component Index — Control Valve Handbook ch1.md) — "A reverse-acting spring-and-diaphragm actuator, fully labelled: diaphragm casing, diaphragm, diaphragm plate, seal bushing and O-rings, actuator spring, actuator stem, spring seat, spring adjuster, yoke, stem connector, travel indicator disk, valve stem, integrated handwheel mounting bosses, integral air passage, integral DVC6200 mounting pad, travel scale — a more detailed 16-part companion to the direct-acting design in Figure 1.9, with action reversed and digital-valve-controller mounting features called out."
  - `cvh-cmp-piston-actuator` (current, Component Index — Control Valve Handbook ch1.md) — "A piston-type actuator, labelled: loading pressure connection, piston, piston seal, cylinder, cylinder closure seal, seal bushing, stem connector — the higher-thrust, higher-stiffness alternative to the spring-and-diaphragm design for high-pressure-drop or fast-stroking service."

### 2. cvb-ch1-m2 — Rotary Valves & Flow Characteristics

**Objective:** Identify a rotary control valve's closure-member types and actuator, and explain how closure-member shape and cage design set a valve's inherent flow characteristic.

**1. (nomenclature · understand, page 12, slide--role-nomenclature)** A rotary control valve turns a ball, disk, or plug across the flow path instead of sliding a stem through it — the same final-control-element job, a different motion.
  - `cvh-cmp-rotary-valve-photo` (current, Component Index — Control Valve Handbook ch1.md) — "A complete rotary (butterfly-style) control valve assembly with actuator and positioner mounted — introduces "rotary control valve" as a real product before the section breaks into individual closure-member and actuator figures."

**2. (application · understand, page 13, slide--role-application-case)** A segmented ball, a V-notch ball, and an eccentric disk are the three standard rotary closure members — the V-notch's contoured cut gives it the widest rangeability of the three.
  - `cvh-cmp-segmented-ball` (current, Component Index — Control Valve Handbook ch1.md) — "A segmented-ball closure member: a flanged, shaft-mounted ball segment — one of three rotary closure-member types the section introduces (segmented ball, V-notch ball, eccentric disk)."
  - `cvh-cmp-v-notch-ball` (current, Component Index — Control Valve Handbook ch1.md) — "A V-notch ball closure member: a ball with a contoured V-shaped notch cut into it, mounted on a shaft — the rotary closure-member type shaped for improved rangeability and throttling control over a plain segmented ball."
  - `cvh-cmp-eccentric-disk-valve` (current, Component Index — Control Valve Handbook ch1.md) — "An eccentric-disk (butterfly-style) rotary valve with actuator mounted — the disk-type closure member rounding out the section's three rotary closure-member types."

**3. (mechanism · understand, page 14, slide--role-mechanism)** A rotary actuator's lever and shaft convert the same linear stem motion a sliding-stem actuator produces into the disk or ball rotation the closure member actually needs.
  - `cvh-cmp-rotary-actuator-cutaway` (current, Component Index — Control Valve Handbook ch1.md) — "A rotary (spring-and-diaphragm) actuator mounted to a valve, fully labelled: loading pressure connection, diaphragm case, diaphragm, diaphragm plate, spring, actuator stem, lever, shaft, travel stop, packing, disk, body, seal, seal retainer — the rotary counterpart to the sliding-stem actuator cutaways in Figures 1.9/1.12, showing how linear actuator stem motion is converted to disk/ball rotation through the lever and shaft."

**4. (mechanism · understand, page 15, slide--role-mechanism)** A cage's window shape — linear, equal-percentage, or quick-opening — sets how flow changes as the valve strokes, independent of the body style around it.
  - `cvh-cmp-cage-types` (current, Component Index — Control Valve Handbook ch1.md) — "Three cage types side by side — linear, equal-percentage, and quick-opening — shown as a 3-panel photo of the physical cages with flow arrows overlaid on a grid background, illustrating how cage window shape sets the flow characteristic."

**5. (application · analyze, page 16, slide--role-application)** Quick-opening gives maximum flow change near the closed position, linear gives equal flow change per unit of travel, and equal-percentage gives equal PERCENTAGE change per unit of travel — read the curve to tell which characteristic a valve has.
  - `cvh-cmp-inherent-characteristics-graph` (current, Component Index — Control Valve Handbook ch1.md) — "The three standard inherent flow characteristics plotted together: rated flow coefficient (%) vs. rated travel (%), showing quick-opening, linear, and equal-percentage curves on one set of axes — the chapter's summary figure for "inherent characteristic," referenced by the adjacent glossary definition."

**6. (mechanism · understand, page 17, slide--role-mechanism)** Deadband is the range a controller's output can reverse through before the valve produces any observable change — friction and backlash are its usual causes.
  - `cvh-cmp-deadband-graph` (current, Component Index — Control Valve Handbook ch1.md) — "Deadband illustrated as a hysteresis-style plot of process variable vs. controller output: the range through which the controller output can be reversed without producing an observable change in the process variable — the visual companion to the chapter's Deadband text definition."
