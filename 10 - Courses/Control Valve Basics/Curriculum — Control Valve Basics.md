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
> sourcing-quality review (both one file per chapter). **2026-09-11
> addendum:** every competency below now carries a `competencyStatus`
> (provisional/confirmed/revised) in `course.json`, from a full hand-audit
> of all 50 pre-split concept rows — 49 confirmed clean, one
> (`cvb.actuator.manual-electric`) genuinely needed correction and was
> **split** (see its own note in the Competencies list below), not renamed.
> A concept-granularity advisory (3+ cited components — a flag, never a
> blocking failure) now also runs on every module. See
> `Instructional Packet — Control Valve Basics — <chapterId>.md` (new, one
> file per chapter) for the reviewable rendering of both.

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

**Domain, tier, and audience stage — corrected twice, 2026-09-11.** Real
history, not just the final state:

1. Originally set to an invented fourth domain, `product-literacy`, mid-
   Stage-1-authoring — a Bloom-level/verb-menu observation (this course's
   objectives all sit at remember/understand) misread as a domain problem,
   with no prior confirmation.
2. Corrected to `domain: ["maintenance", "instrumentation", "selection-
   sizing"]` — genuinely broad across all three, per Franz's authoritative
   definition (domain names *which student is in the class* and what they
   need from a topic, a closed set of exactly three; tier is depth of the
   course, orthogonal to domain). A real improvement, but **still wrong**:
   this course's actual audience is people brand new to the industry, not
   yet settled into any of the three roles at all — a different claim than
   "all three at once."
3. **Corrected again to the real fix**: `domain` is unset entirely (the
   truthful state — no role assigned yet, not "every role"), and a new,
   third axis, `audienceStage: "orientation"`, names this — distinct from
   both domain (which role) and tier (how deep, still `introductory`,
   unchanged and correct throughout). See `instructional-design.js`'s
   `AUDIENCE_STAGES`/`AUDIENCE_STAGE_GUIDANCE`. This is genuinely different
   from 14101 (also introductory, but domain-scoped to maintenance — its
   audience HAS a role, just an introductory depth of it).

`course.sources` (plural, `{path, description}`) and `course.summary` as an
explicit course description are real, supplied Stage 1 inputs now too, per
Franz's new-input-stage directive — no longer left for Stage 1 to infer.

Content was reviewed against `AUDIENCE_STAGE_GUIDANCE`'s depth-floor/
reinforcement instruction (lower depth floor than any technical domain,
heavier reinforcement) rather than assumed fine as-is: three concepts
needed real revision (`cvb.intro.feedback-loop` — the course's own opening
slide, which never actually named "process control" before diving into
loop terminology; `cvb.sealing.emissions-standards-awareness` and
`cvb.accessory.pneumatic-controller`, both of which led with unexplained
acronyms — VOC/LDAR/ISO 15848-1, DCS/PLC — before any plain-language
framing). The remaining 48 concept rows were reviewed and already read at
an appropriate depth for a first-time-in-industry audience; the arc's
existing `develops`-progression reuses (body-style-variants, bonnet-
packing-arrangement, actuator-types ×2, closure-members ×2, inherent-
curves, deadband) already provide real structural reinforcement, so no
further additions were made there. Domain also determines instructional
*voice*, not just depth (`DOMAIN_VOICE` in `instructional-design.js`) — not
applicable to this course at all now: an orientation-stage audience has no
single domain register to write in, the same way it was never really
"three competing voices" under the (also-wrong) broad-domain reading.

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
  statement: Identify manual (sliding-stem and rotary) and electric (sliding-stem and rotary) actuators.
  # SPLIT 2026-09-11 (Franz): this statement originally also named a
  # rack-and-pinion actuator — a real content/id mismatch caught by the
  # provisional/confirmed/revised competency audit. Manual and electric are
  # both actuation-POWER types; rack-and-pinion is a mechanism-design detail
  # that happens to be pneumatic, a third power type this id never named —
  # not the same axis, so folding it into a longer id would repeat the same
  # bundling mistake under a different name. Split, not renamed: this id
  # keeps manual+electric only; see cvb.actuator.rack-and-pinion below for
  # the pneumatic content, cut on its own. Both post-split rows read as
  # competencyStatus "confirmed" (a split, not a same-id correction).

- id: cvb.actuator.rack-and-pinion
  bloom: understand
  statement: Explain why a rack-and-pinion actuator's backlash limits it to on/off rotary service rather than precision continuous throttling.
  # NEW 2026-09-11 — split out of cvb.actuator.manual-electric (see its own
  # note above). Content sourced fresh from cvh-cmp-rack-and-pinion-
  # actuator's own "teaches" text (the backlash / on-off-vs-throttling
  # point), not carried over as the original one-clause fragment.

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
  statement: Distinguish spring-return vs. double-acting solenoid-operated valve drive types.
  # SPLIT 2026-09-11 (Franz, template-fit fixes batch): this statement
  # originally also covered direct-acting vs. pilot-operated actuation -
  # a real content/template mismatch caught by the templateRationale
  # authoring pass. Spring-return/double-acting and direct-acting/pilot-
  # operated are two INDEPENDENT classification axes bundled into one
  # contrast slot, which contrast's fixed two-panel shape can't actually
  # hold at once (also the same concept the granularity advisory already
  # flagged for 4 sources). Split, not renamed: this id keeps the drive-
  # type axis only; see cvb.safety.solenoid-actuation-type below for the
  # actuation-type axis, cut on its own. Both post-split rows read as
  # competencyStatus "confirmed" (a split, not a same-id correction).

- id: cvb.safety.solenoid-actuation-type
  bloom: understand
  statement: Distinguish direct-acting vs. pilot-operated solenoid valve actuation types.
  # NEW 2026-09-11 - split out of cvb.safety.solenoid-valve-types (see its
  # own note above). Given its own new slide (page 45, cvb-ch3-m2) rather
  # than sharing a page with the drive-type axis, since these are two
  # independent SIS classification schemes, not compatible content that
  # reasonably shares one slide the way the manual-electric/rack-and-
  # pinion umbrella does.

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

**Module 0 — `Before We Start`** (added 2026-09-11, reusing `Curriculum — IfE.md`'s
real `moduleZero` as the model verbatim: same id `m0`, same title, same summary,
same 4-page shape — title slide, course roadmap, facility & safety, sign-in &
housekeeping) plays before Chapter 1. It is a top-level `course.json` field, not
a chapter/module — no `keyConcepts`, no competencies, and none of the strict
completeness machinery in `course-model.js` ever sees it (confirmed by reading
the shared engine and grepping PipelineConsole for `moduleZero`, not assumed).
Claims pages 1-4; every other slide in the course shifted up by 4 to make room
(chapter 1 now starts at page 5, the course now ends at page 64).

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
  approved) and Stage 2 (context authoring — `t`/sources/template for all 44
  competencies (42 originally cut, plus `cvb.actuator.rack-and-pinion`, split
  out 2026-09-11 from `cvb.actuator.manual-electric` sharing its original
  slide as an umbrella; plus `cvb.safety.solenoid-actuation-type`, split the
  same day from `cvb.safety.solenoid-valve-types` onto its OWN new slide),
  64 slides (60 content/check slides across the 9 real teaching modules, plus
  the 4 new Module 0 slides — see "Chapters, in taught order" above), all strict completeness checks
  passing) are this course's complete output so far. Migrated to the
  `primitives[]` shape 2026-09-11; every primitive's `templateRationale` is
  real, content-grounded prose (not the mechanically-derived placeholder
  the migration first wrote), reviewed against its actual `t`/sources —
  8 of the 50 original primitives had a genuine template/role mismatch,
  flagged and fixed the same day (see this file's own competency notes for
  `cvb.intro.actuator-types`, `cvb.rotary.closure-members`,
  `cvb.bodystyle.globe-variants`, `cvb.intro.body-style-variants`,
  `cvb.bodystyle.special-purpose`, `cvb.safety.voting-architecture`,
  `cvb.accessory.ip-transducer`, and the solenoid split above).
