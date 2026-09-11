---
title: Curriculum — Control Valve Basics
type: reference
tags:
  - curriculum
  - pipeline
course: Control Valve Basics
updated: 2026-09-11
---

# Curriculum Registry — Control Valve Basics

> [!note] Status — Stage 1 approved, Stage 2 run by hand 2026-09-11
> This is the invented competency catalogue Stage 1 in ORIGINATION mode, ARC
> SCALE (`buildStage1OriginateArcPrompt`, `PipelineConsole/src/main/runners/
> prompts.js`) is required to write when there is no pre-existing catalogue
> to select from — see `curriculum-development.md`. Run by hand (proof-
> discipline, matching the ch3-m2 origination test) as the proving-ground for
> the "Real reviewable outputs at Stage 1 and Stage 2" review-checkpoint
> mechanism. Franz approved Stage 1's arc cut; Stage 2 (authoring
> `t`/sources/`template` against every competency below) ran immediately
> after, same course, same day. **Still no "Primitives" or "Placement
> edges" section, unlike `Curriculum — IfE.md`** — those record real SLIDE
> assets (`asset: inline-table (slide ife-006)`), and Stage 3 (slide
> composition) has not run; nothing exists yet to record. See `Stage 1
> Outline — Control Valve Basics — <chapterId>.md` for the arc cut and
> `Stage 2 Attachments — Control Valve Basics — <chapterId>.md` for the
> sourcing-quality review (both one file per chapter).

## Scope and source

Bounded to the four Control Valve Handbook chapters Steve requested, taught
in his order (a real reordering of the source book's own 1-2-3-4 sequence):
Chapter 1 (Introduction to Control Valves) → Chapter 3 (Valve and Actuator
Types) → Chapter 4 (Control Valve Accessories) → Chapter 2 (Control Valve
Performance). Course-chapter ids (`cvb-ch1..cvb-ch4`) are this course's own
teaching order, not the source chapter numbers — see each chapter's `_source`
note in `course.json`. Every competency below traces to a real figure already
catalogued in `Component Index — Control Valve Handbook ch1/ch2/ch3/ch4.md`
(Phase 0 of this same review-checkpoint work) — no invented facts, nothing
beyond what those indexes verified against the source PDF.

**Domain and tier, corrected 2026-09-11.** Originally set to an invented
fourth domain, `product-literacy`, mid-Stage-1-authoring — a Bloom-level/
verb-menu observation (this course's objectives all sit at remember/
understand) misread as a domain problem, with no prior confirmation. Per
Franz's authoritative definition — domain names *which student is in the
class* and what they need from a topic, a closed set of exactly three
(maintenance, instrumentation, selection-sizing); tier is depth of the
course, orthogonal to domain (introductory | advanced) — Control Valve
Basics is correctly modeled as genuinely **broad across all three domains**
(`domain: ["maintenance", "instrumentation", "selection-sizing"]`) at
**introductory** tier, matching Franz's own worked contrast: this course
introduces essentially all topics at a foundational level across every
domain, unlike 14101 (also introductory, but scoped specifically to
maintenance). Tier was already the correct value; it had no real validated
vocabulary behind it until `instructional-design.js` gained `TIERS`/
`isTier()` the same day. Domain also determines instructional *voice*, not
just depth — a maintenance tech, an instrumentation tech, and a sizing-
and-selection engineer are addressed differently, not in one neutral tone
(`DOMAIN_VOICE` in `instructional-design.js`) — not yet wired into this
course's actual prose, which stays broad/shared across all three audiences
for now, matching this course's own "broad, not domain-scoped" definition.

Deliberately left out of this
Basics cut, named rather than silently dropped: the deep VOC/LDAR and ISO
15848-1/FCI 91-1 emissions-compliance tables (only 2 of 5 catalogued figures
are cited, at awareness level), the redundant-SOV/three-way-manual-reset/SOV-
manifold hardware variants, and the SIS partial-stroke-testing DVC figure —
all judged too deep/niche for an intro course, all real catalogued components
a future advanced course could pull from directly.

## Competencies

```yaml
- id: cvb.intro.feedback-loop
  bloom: understand
  statement: >
    Explain the feedback control loop (process, sensor, transmitter,
    controller, control valve) and place the control valve as its final
    control element.

- id: cvb.intro.sliding-stem-overview
  bloom: remember
  statement: Identify a sliding-stem control valve assembly from a photo or cutaway.

- id: cvb.intro.sliding-stem-parts
  bloom: remember
  statement: >
    Name a sliding-stem valve's major parts from an exploded assembly view
    (stem, packing flange, bonnet, piston ring, plug, cage, seat ring, body).

- id: cvb.intro.body-style-variants
  bloom: understand
  statement: >
    Distinguish globe body-style variants — angle, three-way, and their
    specialty/combining-diverting service uses — from a straight-through
    globe body.
  note: >
    Introduced in cvb-ch1-m1 (angle + three-way terminology); develops twice
    in cvb-ch2-m1 (specialty/angle construction detail, then three-way
    combining/diverting service depth) — never re-introduced.

- id: cvb.intro.bonnet-packing-arrangement
  bloom: understand
  statement: >
    Distinguish a conventional bonnet/packing arrangement from a
    bellows-seal bonnet, and name generic PTFE/graphite packing types.
  note: Introduced in cvb-ch1-m1; develops once in cvb-ch2-m2 (standard packing depth).

- id: cvb.intro.actuator-types
  bloom: understand
  statement: Distinguish direct-acting, reverse-acting, and piston actuator construction and action.
  note: >
    Introduced in cvb-ch1-m1; develops twice in cvb-ch2-m3 (spring-diaphragm
    variants, then piston variants).

- id: cvb.rotary.overview
  bloom: understand
  statement: Identify a rotary (butterfly-style) control valve assembly with actuator and positioner mounted.

- id: cvb.rotary.closure-members
  bloom: understand
  statement: Distinguish segmented-ball, V-notch-ball, and eccentric-disk closure members.
  note: Introduced in cvb-ch1-m2; develops twice in cvb-ch2-m1 (butterfly/disk-type, then ball/eccentric-plug construction).

- id: cvb.rotary.actuator-mechanism
  bloom: understand
  statement: Explain how a rotary actuator's lever and shaft convert linear stem motion into disk/ball rotation.

- id: cvb.characteristic.cage-shape
  bloom: understand
  statement: Explain how cage window shape (linear, equal-percentage, quick-opening) sets a valve's flow characteristic.

- id: cvb.characteristic.inherent-curves
  bloom: analyze
  statement: Read an inherent-flow-characteristic curve (quick-opening/linear/equal-percentage) and match it to a service need.
  note: Introduced in cvb-ch1-m2; develops in cvb-ch2-m3 (characterized cages, in more depth).

- id: cvb.performance.deadband
  bloom: understand
  statement: Explain deadband as the range of controller-output reversal that produces no observable process change.
  note: Introduced in cvb-ch1-m2; develops in cvb-ch4-m1 (the chapter's own three-valve open-loop step-test comparison — cross-referenced to the same figure already catalogued as ch3-cmp-deadband-effect-chart in 14101's own Component Index, a different course).

- id: cvb.bodystyle.globe-variants
  bloom: understand
  statement: Distinguish single-ported, double-ported (reverse-acting), and cage-style balanced-plug globe body constructions.

- id: cvb.bodystyle.special-purpose
  bloom: apply
  statement: Select among cavitation/noise-trim options, a multi-port flow-selector body, or a pressure-assisted seal for a stated special-purpose service.

- id: cvb.bodystyle.end-connections
  bloom: remember
  statement: Identify bolted-flange vs. welded end connections.

- id: cvb.bodystyle.control-range-by-style
  bloom: analyze
  statement: Compare globe vs. butterfly valve control range from an installed-gain graph.

- id: cvb.sealing.bonnet-types
  bloom: remember
  statement: Identify a standard flanged bonnet, a bonnet variation, and a fabricated extension bonnet.

- id: cvb.sealing.bellows-bonnet
  bloom: understand
  statement: Explain how a welded-leaf or mechanically-formed bellows seal gives zero-leakage stem sealing.

- id: cvb.sealing.environmental-packing
  bloom: understand
  statement: Identify ENVIRO-SEAL PTFE, duplex, and graphite ULF packing systems for sliding-stem and rotary valves.

- id: cvb.sealing.packing-selection
  bloom: evaluate
  statement: Select an appropriate packing system for a stated service and emissions requirement.

- id: cvb.sealing.emissions-standards-awareness
  bloom: understand
  statement: >
    Explain, at an awareness level, why packing choice is tested against
    fugitive-emissions standards (VOC/LDAR, ISO 15848-1).

- id: cvb.characteristic.contoured-plug
  bloom: understand
  statement: Explain how plug contour and quick-opening construction shape a valve's flow characteristic.

- id: cvb.trim.guiding-and-capacity
  bloom: remember
  statement: Identify cage-guided vs. plug-guided trim, and a reduced-flow-capacity adapter.

- id: cvb.actuator.manual-electric
  bloom: remember
  statement: Identify manual (sliding-stem and rotary), rack-and-pinion, and electric actuators.

- id: cvb.accessory.positioner-mechanism
  bloom: understand
  statement: Explain a pneumatic positioner's own closed feedback loop (bellows, beam, cam feedback, flapper/nozzle, relay).

- id: cvb.accessory.analog-ip-positioner
  bloom: understand
  statement: Explain an analog I/P positioner's signal conversion and feedback stages.

- id: cvb.accessory.digital-valve-controller
  bloom: remember
  statement: Identify a digital valve controller mounted on an assembled control valve.

- id: cvb.accessory.ip-transducer
  bloom: understand
  statement: Distinguish an I/P transducer (no feedback) from a positioner as the accessory for lower-accuracy applications.

- id: cvb.accessory.volume-booster
  bloom: understand
  statement: Explain a volume booster's role in amplifying pneumatic capacity to a fast- or large-stroking actuator.

- id: cvb.accessory.pneumatic-controller
  bloom: understand
  statement: >
    Explain a standalone pneumatic controller's role and its proportional-only
    vs. proportional-plus-reset-plus-rate schematics.

- id: cvb.accessory.position-transmitter
  bloom: understand
  statement: Distinguish a wired (4-20 mA) from a wireless valve-position transmitter installation.

- id: cvb.safety.solenoid-valve-types
  bloom: understand
  statement: Distinguish spring-return vs. double-acting, and direct-acting vs. pilot-operated, solenoid-operated valve types.

- id: cvb.safety.voting-architecture
  bloom: understand
  statement: >
    Explain, at an awareness level, what a 1oo2 vs. 2oo2 SOV voting
    architecture buys a safety instrumented system.

- id: cvb.safety.trip-and-manual-override
  bloom: remember
  statement: Identify a tripped trip valve, a switching valve, and side- vs. top-mounted manual handwheel overrides.

- id: cvb.performance.process-variability
  bloom: understand
  statement: Explain process variability as the width of a distribution around a target, not the position of its mean.

- id: cvb.performance.test-loop
  bloom: remember
  statement: Identify a performance test loop as the physical rig behind the chapter's dynamic-performance data.

- id: cvb.performance.response-time
  bloom: understand
  statement: Explain how dead time and 63%-response time vary across valve/actuator/positioner configurations.

- id: cvb.performance.installed-gain
  bloom: analyze
  statement: Read an installed-characteristic-and-gain graph and explain how gain is the slope of the flow-characteristic curve.

- id: cvb.performance.economics-of-control
  bloom: evaluate
  statement: Justify a tighter-controlling valve on economic grounds from a closed-loop disturbance-vs-tuning comparison.

- id: cvb.performance.signature-series-testing
  bloom: understand
  statement: Explain a Signature Series factory performance test as the baseline for later diagnosis.

- id: cvb.performance.signature-diagnosis
  bloom: apply
  statement: Diagnose rising friction in an in-service valve by comparing its signature trace to the original baseline.

- id: cvb.performance.valvelink-interface
  bloom: remember
  statement: Identify ValveLink's Total Scan and Valve Step Response diagnostic screens.
```

## Chapters, in taught order

| # | Course chapter | Source | Modules |
| --- | --- | --- | --- |
| 1 | Introduction to Control Valves (`cvb-ch1`) | CVH ch1 | cvb-ch1-m1 (Sliding-Stem Valve Anatomy), cvb-ch1-m2 (Rotary Valves & Flow Characteristics) |
| 2 | Valve and Actuator Types (`cvb-ch2`) | CVH ch3 | cvb-ch2-m1 (Body Styles & End Connections), cvb-ch2-m2 (Bonnets, Packing & Environmental Sealing), cvb-ch2-m3 (Flow Characterization, Trim & Actuator Variety) |
| 3 | Control Valve Accessories (`cvb-ch3`) | CVH ch4 | cvb-ch3-m1 (Positioners, Transducers & Boosters), cvb-ch3-m2 (Controllers, Position Feedback & Safety Accessories) |
| 4 | Control Valve Performance (`cvb-ch4`) | CVH ch2 | cvb-ch4-m1 (Variability, Deadband & Response), cvb-ch4-m2 (Economics & the Signature Series) |

See each chapter's own `Stage 1 Outline — Control Valve Basics — <chapterId>.md`
for the reviewable arc cut (concept sequence, sourcing, Hands-First activity
placement) and `Stage 2 Attachments — Control Valve Basics — <chapterId>.md`
for the sourcing-quality review (every concept's `t` alongside what actually
backs it) — both one file per chapter, in taught order.

## Not yet built

- **Primitives / Placement edges** — these record real SLIDE assets
  (`asset: inline-table (slide ife-006)`, per `Curriculum — IfE.md`'s own
  registry); Stage 3 (slide composition) has not run, so there is no real
  asset yet to record for any competency.
- **A real schedule** — no `minutesTarget`/day count exists for this course;
  everything sits under one placeholder Day 1. See `course.json`'s own
  `_note` field.
- **Slides and Stage 3 composition** — not run. Stage 1 (arc cut, Franz-
  approved) and Stage 2 (context authoring — `t`/sources/template for all 42
  competencies, 59 slides, all strict completeness checks passing) are this
  course's complete output so far.
