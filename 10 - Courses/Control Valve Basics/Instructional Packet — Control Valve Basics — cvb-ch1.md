---
title: Instructional Packet — Control Valve Basics
type: review
tags:
  - instructional-packet
  - pipeline
course: Control Valve Basics
chapter: cvb-ch1
updated: 2026-09-12
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
role: mechanism · level: understand · pages: 5

- **Primitive** — orientation · introductory

  Process control means automatically keeping something — a flow, a pressure, a temperature — at the value it should be. A control valve is the part that makes the correction: a sensor reads the real value, it's compared to the target, and the valve's stem moves to close the gap — this loop is what "process control" means in practice.

  - `cvh-cmp-feedback-control-loop` (current, Component Index — Control Valve Handbook ch1.md) — "The feedback control loop as a block diagram: Process, Sensor, Transmitter, Controller, and Control Valve blocks connected by labelled Manipulated Variable and Controlled Variable arrows — introduces the control valve as the final control element in the loop, before the chapter breaks into sliding-stem and rotary terminology."
  - template: `slide--role-mechanism` — The source figure (Figure 1.1) is a labelled block diagram of the whole feedback loop — Process, Sensor, Transmitter, Controller, Control Valve blocks connected by the Manipulated/Controlled Variable arrows — exactly the how-it-works schematic the mechanism role calls for, not a photo of hardware.
  - slideCount: 1 (stage2)
  - pages: 5


**2. cvb.intro.sliding-stem-overview** (introduces · confirmed)
role: nomenclature · level: remember · pages: 6

- **Primitive** — orientation · introductory

  A sliding-stem valve moves its plug straight up and down through a globe- or angle-style body — the most common control valve construction.

  - `cvh-cmp-sliding-stem-valve-photo` (current, Component Index — Control Valve Handbook ch1.md) — "A complete sliding-stem control valve assembly: a green Fisher-style globe body under a spring-and-diaphragm actuator — introduces "sliding-stem valve" as a real product before the section breaks into individual part callouts."
  - template: `slide--role-nomenclature` — The source figure is a real product photo of an assembled sliding-stem valve, used here to put a face on the term before the next slide breaks it into labelled parts — a recognition-level nomenclature treatment, not a mechanism explanation.
  - slideCount: 1 (stage2)
  - pages: 6


**3. cvb.intro.sliding-stem-parts** (introduces · confirmed)
role: nomenclature · level: remember · pages: 7

- **Primitive** — orientation · introductory

  From actuator to body: stem, packing flange, bonnet, piston ring, plug, cage, and seat ring stack in that order — the assembly sequence every sliding-stem valve follows.

  - `cvh-cmp-sliding-stem-exploded` (current, Component Index — Control Valve Handbook ch1.md) — "The major-component stack-up of a sliding-stem control valve, exploded and numbered: stem, packing flange, actuator locknut, bonnet, bonnet gasket, piston ring, plug, cage, seat ring, body/bonnet bolting, body — the assembly-order teaching figure for "actuator on top, then bonnet, then body.""
  - template: `slide--role-nomenclature` — The source figure is a numbered exploded-parts diagram (stem, packing flange, actuator locknut, bonnet, bonnet gasket, piston ring, plug, cage, seat ring, bolting, body) — the canonical labelled-parts-figure case the nomenclature role's default treatment is built for.
  - slideCount: 1 (stage2)
  - pages: 7


**4. cvb.intro.body-style-variants** (introduces · confirmed)
role: contrast · level: understand · pages: 8

- **Primitive** — orientation · introductory

  An angle body turns the flow path 90° for erosive or high-pressure-drop service; a three-way body combines or diverts flow through a single valve instead of the straight-through path a standard globe body uses.

  - `cvh-cmp-angle-valve-photo` (current, Component Index — Control Valve Handbook ch1.md) — "An angle valve: a grey angle-body sliding-stem valve with inlet and outlet perpendicular to each other, contrasting the straight-through globe body shown in Figures 1.2/1.3."
  - `cvh-cmp-three-way-globe-valve` (current, Component Index — Control Valve Handbook ch1.md) — "A three-way globe valve: a single body with three flow connections, combining or diverting flow rather than the simple two-port throttling shown in the earlier sliding-stem figures."
  - template: `slide--role-contrast` — Two real photos, each a distinct body style (an angle body vs. a three-way body) — a clean two-way split that fits the contrast role's fixed two-panel shape exactly, one photo per panel.
  - slideCount: 1 (stage2)
  - pages: 8


**5. cvb.intro.bonnet-packing-arrangement** (introduces · confirmed)
role: contrast · level: understand · pages: 9

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A conventional bonnet packs the stem with PTFE or graphite rings in the packing box; a bellows-seal bonnet replaces packing entirely with a welded metal bellows for zero-leakage service on hazardous or toxic process fluids.

  - `cvh-cmp-bonnet-assembly` (current, Component Index — Control Valve Handbook ch1.md) — "A conventional bonnet assembly: a labelled cutaway of the bonnet, packing, packing box (the bored recess in the bonnet, not the bonnet casting itself), and valve stem — the baseline packing arrangement Figure 1.5's bellows-seal variant is contrasted against."
  - `cvh-cmp-bellows-seal-bonnet` (current, Component Index — Control Valve Handbook ch1.md) — "A bellows seal bonnet: a labelled cutaway showing the bonnet, packing, packing box, and bellows sealing the valve stem — the zero-leakage alternative to conventional packing for hazardous or toxic service."
  - `cvh-cmp-stem-packing-types` (current, Component Index — Control Valve Handbook ch1.md) — "Two stem-packing systems side by side, each fully labelled: PTFE Packing (upper wiper, packing follower, female adaptor, V-ring, male adaptor, lantern ring, washer, spring, box ring/lower wiper) and Graphite Packing (filament ring, laminated ring, lantern ring, zinc washer) — the generic packing-type reference the chapter's terminology builds on."
  - template: `slide--role-contrast` — Two-way contrast (conventional packed bonnet vs. bellows-seal bonnet) fits the fixed two-panel shape; the third source (stem-packing-types) is a generic packing-type reference figure, not a third contrasted bonnet type — it supports the 'conventional' panel rather than needing a panel of its own.
  - slideCount: 1 (stage2)
  - pages: 9


**6. cvb.intro.actuator-types** (introduces · confirmed)
role: application · level: understand · pages: 10

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A direct-acting actuator pushes the stem down with loading pressure and returns it with the spring; a reverse-acting actuator does the opposite. A piston actuator trades the spring for a second pressure connection, for higher thrust and faster stroking.

  - `cvh-cmp-direct-acting-actuator` (current, Component Index — Control Valve Handbook ch1.md) — "A direct-acting spring-and-diaphragm actuator, fully labelled: diaphragm casing, diaphragm, diaphragm plate, actuator spring, actuator stem, spring seat, spring adjuster, yoke, stem connector, valve stem, travel indicator disk, travel scale — the baseline actuator construction Figure 1.12's reverse-acting variant is built from and contrasted against."
  - `cvh-cmp-reverse-acting-actuator` (current, Component Index — Control Valve Handbook ch1.md) — "A reverse-acting spring-and-diaphragm actuator, fully labelled: diaphragm casing, diaphragm, diaphragm plate, seal bushing and O-rings, actuator spring, actuator stem, spring seat, spring adjuster, yoke, stem connector, travel indicator disk, valve stem, integrated handwheel mounting bosses, integral air passage, integral DVC6200 mounting pad, travel scale — a more detailed 16-part companion to the direct-acting design in Figure 1.9, with action reversed and digital-valve-controller mounting features called out."
  - `cvh-cmp-piston-actuator` (current, Component Index — Control Valve Handbook ch1.md) — "A piston-type actuator, labelled: loading pressure connection, piston, piston seal, cylinder, cylinder closure seal, seal bushing, stem connector — the higher-thrust, higher-stiffness alternative to the spring-and-diaphragm design for high-pressure-drop or fast-stroking service."
  - template: `slide--role-application-case` — Three distinct actuator constructions, each fully labelled (direct-acting, reverse-acting, piston), now shown as application-case's filmstrip — one frame per actuator type, each carrying its own real detail — instead of forced into contrast's two-panel shape. Re-tagged from contrast to application per the 2026-09-11 template-fit review.
  - slideCount: 1 (stage2)
  - pages: 10


**→ Activity — Parts Walk** small-group · 15 min — In small groups at a real bench-mounted sliding-stem valve/actuator assembly (or a cutaway training aid), name each labelled part — body, bonnet, packing, actuator casing, spring, stem — checking against the exploded and cutaway figures just taught.

**Check** — pages 11 (composed by Stage 3, not authored here)

### 2. cvb-ch1-m2 — Rotary Valves & Flow Characteristics

**Objective:** Identify a rotary control valve's closure-member types and actuator, and explain how closure-member shape and cage design set a valve's inherent flow characteristic.

**1. cvb.rotary.overview** (introduces · confirmed)
role: nomenclature · level: understand · pages: 12

- **Primitive** — orientation · introductory

  A rotary control valve turns a ball, disk, or plug across the flow path instead of sliding a stem through it — the same final-control-element job, a different motion.

  - `cvh-cmp-rotary-valve-photo` (current, Component Index — Control Valve Handbook ch1.md) — "A complete rotary (butterfly-style) control valve assembly with actuator and positioner mounted — introduces "rotary control valve" as a real product before the section breaks into individual closure-member and actuator figures."
  - template: `slide--role-nomenclature` — The source figure is a real photo of an assembled rotary (butterfly-style) valve with actuator and positioner mounted, used the same way the sliding-stem overview photo is — putting a face on 'rotary control valve' before the section breaks into individual closure-member and actuator figures.
  - slideCount: 1 (stage2)
  - pages: 12


**2. cvb.rotary.closure-members** (introduces · confirmed)
role: application · level: understand · pages: 13

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory

  A segmented ball, a V-notch ball, and an eccentric disk are the three standard rotary closure members — the V-notch's contoured cut gives it the widest rangeability of the three.

  - `cvh-cmp-segmented-ball` (current, Component Index — Control Valve Handbook ch1.md) — "A segmented-ball closure member: a flanged, shaft-mounted ball segment — one of three rotary closure-member types the section introduces (segmented ball, V-notch ball, eccentric disk)."
  - `cvh-cmp-v-notch-ball` (current, Component Index — Control Valve Handbook ch1.md) — "A V-notch ball closure member: a ball with a contoured V-shaped notch cut into it, mounted on a shaft — the rotary closure-member type shaped for improved rangeability and throttling control over a plain segmented ball."
  - `cvh-cmp-eccentric-disk-valve` (current, Component Index — Control Valve Handbook ch1.md) — "An eccentric-disk (butterfly-style) rotary valve with actuator mounted — the disk-type closure member rounding out the section's three rotary closure-member types."
  - template: `slide--role-application-case` — Three distinct rotary closure-member types (segmented ball, V-notch ball, eccentric disk), each with its own real photo, now shown as application-case's filmstrip — one frame per type — instead of forced into contrast's two-panel shape. Re-tagged from contrast to application per the 2026-09-11 template-fit review.
  - slideCount: 1 (stage2)
  - pages: 13


**3. cvb.rotary.actuator-mechanism** (introduces · confirmed)
role: mechanism · level: understand · pages: 14

- **Primitive** — orientation · introductory

  A rotary actuator's lever and shaft convert the same linear stem motion a sliding-stem actuator produces into the disk or ball rotation the closure member actually needs.

  - `cvh-cmp-rotary-actuator-cutaway` (current, Component Index — Control Valve Handbook ch1.md) — "A rotary (spring-and-diaphragm) actuator mounted to a valve, fully labelled: loading pressure connection, diaphragm case, diaphragm, diaphragm plate, spring, actuator stem, lever, shaft, travel stop, packing, disk, body, seal, seal retainer — the rotary counterpart to the sliding-stem actuator cutaways in Figures 1.9/1.12, showing how linear actuator stem motion is converted to disk/ball rotation through the lever and shaft."
  - template: `slide--role-mechanism` — The source figure is a fully labelled cutaway of a rotary actuator (loading pressure connection, diaphragm, spring, lever, shaft, disk, seal) — a genuine how-it-works figure showing the lever/shaft conversion the concept describes, the textbook mechanism-role case.
  - slideCount: 1 (stage2)
  - pages: 14


**4. cvb.characteristic.cage-shape** (introduces · confirmed)
role: mechanism · level: understand · pages: 15

- **Primitive** — orientation · introductory

  A cage's window shape — linear, equal-percentage, or quick-opening — sets how flow changes as the valve strokes, independent of the body style around it.

  - `cvh-cmp-cage-types` (current, Component Index — Control Valve Handbook ch1.md) — "Three cage types side by side — linear, equal-percentage, and quick-opening — shown as a 3-panel photo of the physical cages with flow arrows overlaid on a grid background, illustrating how cage window shape sets the flow characteristic."
  - template: `slide--role-mechanism` — The source figure is itself a 3-panel photo (linear, equal-percentage, quick-opening cages shown together with flow arrows) — mechanism's shape explicitly allows a `.tpl-flow-arrow` treatment for a figure showing sequential/parallel states of one mechanism, which is exactly this case: one figure, three window shapes, not three separate figures needing their own panels.
  - slideCount: 1 (stage2)
  - pages: 15


**5. cvb.characteristic.inherent-curves** (introduces · confirmed)
role: application · level: analyze · pages: 16

- **Primitive** — orientation · introductory

  Quick-opening gives maximum flow change near the closed position, linear gives equal flow change per unit of travel, and equal-percentage gives equal PERCENTAGE change per unit of travel — read the curve to tell which characteristic a valve has.

  - `cvh-cmp-inherent-characteristics-graph` (current, Component Index — Control Valve Handbook ch1.md) — "The three standard inherent flow characteristics plotted together: rated flow coefficient (%) vs. rated travel (%), showing quick-opening, linear, and equal-percentage curves on one set of axes — the chapter's summary figure for "inherent characteristic," referenced by the adjacent glossary definition."
  - template: `slide--role-application` — One real figure — the three inherent-characteristic curves plotted on shared axes — with a single analytical takeaway (read the curve to identify which characteristic a valve has). That's exactly base application's one-fig-plus-takeaway shape, not a multi-instance case needing application-case.
  - slideCount: 1 (stage2)
  - pages: 16


**→ Activity — Characteristic Match** small-group · 15 min — Given three short process scenarios (a tight on/off-style isolation duty, a constant-gain flow loop, a large-rangeability blending duty), match each to the inherent flow characteristic (quick-opening, linear, equal-percentage) that fits, using the inherent-characteristics curve.

**6. cvb.performance.deadband** (introduces · confirmed)
role: mechanism · level: understand · pages: 17

- **Primitive** — orientation · introductory

  Deadband is the range a controller's output can reverse through before the valve produces any observable change — friction and backlash are its usual causes.

  - `cvh-cmp-deadband-graph` (current, Component Index — Control Valve Handbook ch1.md) — "Deadband illustrated as a hysteresis-style plot of process variable vs. controller output: the range through which the controller output can be reversed without producing an observable change in the process variable — the visual companion to the chapter's Deadband text definition."
  - template: `slide--role-mechanism` — The source figure is a hysteresis-style plot of process variable vs. controller output — a how-it-works diagram of the deadband mechanism itself (the reversal range before observable change), not a photo of hardware, matching the mechanism role's default treatment.
  - slideCount: 1 (stage2)
  - pages: 17


**Check** — pages 18 (composed by Stage 3, not authored here)
