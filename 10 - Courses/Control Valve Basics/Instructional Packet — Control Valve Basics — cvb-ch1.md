---
title: Instructional Packet — Control Valve Basics
type: review
tags:
  - instructional-packet
  - pipeline
course: Control Valve Basics
chapter: cvb-ch1
updated: 2026-09-11
---

# Instructional Packet — cvb-ch1 (Introduction to Control Valves)

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

### 1. cvb-ch1-m1 — Sliding-Stem Valve Anatomy

**Objective:** Identify a sliding-stem control valve's major parts from a cutaway or photo, and name its body-style, bonnet, and actuator variations.

**1. cvb.intro.feedback-loop** (introduces · confirmed)
role: mechanism · level: understand · pages: 1

- **Primitive** — orientation · introductory

  Process control means automatically keeping something — a flow, a pressure, a temperature — at the value it should be. A control valve is the part that makes the correction: a sensor reads the real value, it's compared to the target, and the valve's stem moves to close the gap — this loop is what "process control" means in practice.

  - `cvh-cmp-feedback-control-loop` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-mechanism` — This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).
  - slideCount: 1 (stage2)
  - pages: 1


**2. cvb.intro.sliding-stem-overview** (introduces · confirmed)
role: nomenclature · level: remember · pages: 2

- **Primitive** — orientation · introductory

  A sliding-stem valve moves its plug straight up and down through a globe- or angle-style body — the most common control valve construction.

  - `cvh-cmp-sliding-stem-valve-photo` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-nomenclature` — This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.
  - slideCount: 1 (stage2)
  - pages: 2


**3. cvb.intro.sliding-stem-parts** (introduces · confirmed)
role: nomenclature · level: remember · pages: 3

- **Primitive** — orientation · introductory

  From actuator to body: stem, packing flange, bonnet, piston ring, plug, cage, and seat ring stack in that order — the assembly sequence every sliding-stem valve follows.

  - `cvh-cmp-sliding-stem-exploded` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-nomenclature` — This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.
  - slideCount: 1 (stage2)
  - pages: 3


**4. cvb.intro.body-style-variants** (introduces · confirmed)
role: contrast · level: understand · pages: 4

- **Primitive** — orientation · introductory

  An angle body turns the flow path 90° for erosive or high-pressure-drop service; a three-way body combines or diverts flow through a single valve instead of the straight-through path a standard globe body uses.

  - `cvh-cmp-angle-valve-photo` (current, Component Index — Control Valve Handbook ch1.md)
  - `cvh-cmp-three-way-globe-valve` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-contrast` — This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.
  - slideCount: 1 (stage2)
  - pages: 4


**5. cvb.intro.bonnet-packing-arrangement** (introduces · confirmed)
role: contrast · level: understand · pages: 5

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A conventional bonnet packs the stem with PTFE or graphite rings in the packing box; a bellows-seal bonnet replaces packing entirely with a welded metal bellows for zero-leakage service on hazardous or toxic process fluids.

  - `cvh-cmp-bonnet-assembly` (current, Component Index — Control Valve Handbook ch1.md)
  - `cvh-cmp-bellows-seal-bonnet` (current, Component Index — Control Valve Handbook ch1.md)
  - `cvh-cmp-stem-packing-types` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-contrast` — This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.
  - slideCount: 1 (stage2)
  - pages: 5


**6. cvb.intro.actuator-types** (introduces · confirmed)
role: contrast · level: understand · pages: 6

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A direct-acting actuator pushes the stem down with loading pressure and returns it with the spring; a reverse-acting actuator does the opposite. A piston actuator trades the spring for a second pressure connection, for higher thrust and faster stroking.

  - `cvh-cmp-direct-acting-actuator` (current, Component Index — Control Valve Handbook ch1.md)
  - `cvh-cmp-reverse-acting-actuator` (current, Component Index — Control Valve Handbook ch1.md)
  - `cvh-cmp-piston-actuator` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-contrast` — This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.
  - slideCount: 1 (stage2)
  - pages: 6


**→ Activity — Parts Walk** small-group · 15 min — In small groups at a real bench-mounted sliding-stem valve/actuator assembly (or a cutaway training aid), name each labelled part — body, bonnet, packing, actuator casing, spring, stem — checking against the exploded and cutaway figures just taught.

**Check** — pages 7 (composed by Stage 3, not authored here)

### 2. cvb-ch1-m2 — Rotary Valves & Flow Characteristics

**Objective:** Identify a rotary control valve's closure-member types and actuator, and explain how closure-member shape and cage design set a valve's inherent flow characteristic.

**1. cvb.rotary.overview** (introduces · confirmed)
role: nomenclature · level: understand · pages: 8

- **Primitive** — orientation · introductory

  A rotary control valve turns a ball, disk, or plug across the flow path instead of sliding a stem through it — the same final-control-element job, a different motion.

  - `cvh-cmp-rotary-valve-photo` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-nomenclature` — This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.
  - slideCount: 1 (stage2)
  - pages: 8


**2. cvb.rotary.closure-members** (introduces · confirmed)
role: contrast · level: understand · pages: 9

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A segmented ball, a V-notch ball, and an eccentric disk are the three standard rotary closure members — the V-notch's contoured cut gives it the widest rangeability of the three.

  - `cvh-cmp-segmented-ball` (current, Component Index — Control Valve Handbook ch1.md)
  - `cvh-cmp-v-notch-ball` (current, Component Index — Control Valve Handbook ch1.md)
  - `cvh-cmp-eccentric-disk-valve` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-contrast` — This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.
  - slideCount: 1 (stage2)
  - pages: 9


**3. cvb.rotary.actuator-mechanism** (introduces · confirmed)
role: mechanism · level: understand · pages: 10

- **Primitive** — orientation · introductory

  A rotary actuator's lever and shaft convert the same linear stem motion a sliding-stem actuator produces into the disk or ball rotation the closure member actually needs.

  - `cvh-cmp-rotary-actuator-cutaway` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-mechanism` — This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).
  - slideCount: 1 (stage2)
  - pages: 10


**4. cvb.characteristic.cage-shape** (introduces · confirmed)
role: mechanism · level: understand · pages: 11

- **Primitive** — orientation · introductory

  A cage's window shape — linear, equal-percentage, or quick-opening — sets how flow changes as the valve strokes, independent of the body style around it.

  - `cvh-cmp-cage-types` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-mechanism` — This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).
  - slideCount: 1 (stage2)
  - pages: 11


**5. cvb.characteristic.inherent-curves** (introduces · confirmed)
role: application · level: analyze · pages: 12

- **Primitive** — orientation · introductory

  Quick-opening gives maximum flow change near the closed position, linear gives equal flow change per unit of travel, and equal-percentage gives equal PERCENTAGE change per unit of travel — read the curve to tell which characteristic a valve has.

  - `cvh-cmp-inherent-characteristics-graph` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-application` — This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.
  - slideCount: 1 (stage2)
  - pages: 12


**→ Activity — Characteristic Match** small-group · 15 min — Given three short process scenarios (a tight on/off-style isolation duty, a constant-gain flow loop, a large-rangeability blending duty), match each to the inherent flow characteristic (quick-opening, linear, equal-percentage) that fits, using the inherent-characteristics curve.

**6. cvb.performance.deadband** (introduces · confirmed)
role: mechanism · level: understand · pages: 13

- **Primitive** — orientation · introductory

  Deadband is the range a controller's output can reverse through before the valve produces any observable change — friction and backlash are its usual causes.

  - `cvh-cmp-deadband-graph` (current, Component Index — Control Valve Handbook ch1.md)
  - template: `slide--role-mechanism` — This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).
  - slideCount: 1 (stage2)
  - pages: 13


**Check** — pages 14 (composed by Stage 3, not authored here)
