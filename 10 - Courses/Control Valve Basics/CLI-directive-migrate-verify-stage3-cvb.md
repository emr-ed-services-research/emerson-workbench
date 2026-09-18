---
title: CLI directive — migrate, verify, Stage 3 (Control Valve Basics)
type: report
tags:
  - pipeline
  - report
course: Control Valve Basics
updated: 2026-09-11
---

# CLI directive: migrate CVB, verify navigability, run Stage 3 — full output

Franz's directive (2026-09-11): all three items mechanical execution of already-confirmed design, proceed through all three unattended, report back with full raw output, not a compressed summary — every flagged issue traced to its source (module -> concept -> primitive) and to the upstream step that introduced it (migration, packet-doc.js, or `flattenOriginateSlidePlan`).

This file is that full output. The chat summary is a pointer here, not a replacement for it.

## Step 1 — Migrate CVB's 50 concepts into `primitives[]`

### What changed, mechanically

For every keyConcept in every one of CVB's 9 modules: the flat `t`, `sources`/`sourceNote`, `template` fields were moved into a single `primitives: [{...}]` array entry (array even at N=1, per the confirmed schema). The concept-level `competencyId`, `competencyStatus`, `progression`, `role`, `level`, `pages` stay exactly where they were — those describe the competency SLOT, not the primitive's content, and nothing in this migration touches them.

Each primitive got:
- `domainOrAudienceStage`: `"orientation"` (from the course's own `audienceStage`) for all 50 — CVB has no domain split, so every concept has exactly one primitive.
- `tier`: `"introductory"` (from the course's own `tier`) for all 50.
- `t`, `sources`/`sourceNote`: carried over unchanged from the flat shape — no content was rewritten.
- `template`: carried over unchanged.
- `templateRationale`: **mechanically derived, not freshly authored** — built from `instructional-design.js`'s own `CONCEPT_ROLES[role].treatment` text ("This is the '{role}' role's default Template Gallery treatment: {treatment}"). This is a real limitation to flag honestly: it states the GENERAL rule for that role, not a concept-specific reason the way the curriculum-development.md worked example's bench-set-657 rationale does ("A real worked walkthrough, not a plain step list — the procedure has a common failure mode worth calling out mid-sequence"). A future real Stage 2 authoring pass on new content should write a genuine per-concept rationale; this migration's rationale is a correct but generic placeholder, not equivalent authoring effort.
- `pages`: copied from the concept's own `pages` (identical, since every CVB concept has exactly one primitive spanning exactly the concept's assigned pages).
- `slideCount`: `{ estimate: pages.length, maturity: "stage2" }` — a real, computed fact (current authored page count), `stage2` maturity because real content/sourcing/template are all in hand (per curriculum-development.md's own maturity definition).

### Full before/after (all 50 concepts)

**Before** (flat `t`/`sources`/`template` shape):

```json
[
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.feedback-loop",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   1
  ],
  "t": "Process control means automatically keeping something — a flow, a pressure, a temperature — at the value it should be. A control valve is the part that makes the correction: a sensor reads the real value, it's compared to the target, and the valve's stem moves to close the gap — this loop is what \"process control\" means in practice.",
  "sources": [
   "cvh-cmp-feedback-control-loop"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.sliding-stem-overview",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   2
  ],
  "t": "A sliding-stem valve moves its plug straight up and down through a globe- or angle-style body — the most common control valve construction.",
  "sources": [
   "cvh-cmp-sliding-stem-valve-photo"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.sliding-stem-parts",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   3
  ],
  "t": "From actuator to body: stem, packing flange, bonnet, piston ring, plug, cage, and seat ring stack in that order — the assembly sequence every sliding-stem valve follows.",
  "sources": [
   "cvh-cmp-sliding-stem-exploded"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.body-style-variants",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   4
  ],
  "t": "An angle body turns the flow path 90° for erosive or high-pressure-drop service; a three-way body combines or diverts flow through a single valve instead of the straight-through path a standard globe body uses.",
  "sources": [
   "cvh-cmp-angle-valve-photo",
   "cvh-cmp-three-way-globe-valve-overview"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.bonnet-packing-arrangement",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   5
  ],
  "t": "A conventional bonnet packs the stem with PTFE or graphite rings in the packing box; a bellows-seal bonnet replaces packing entirely with a welded metal bellows for zero-leakage service on hazardous or toxic process fluids.",
  "sources": [
   "cvh-cmp-bonnet-assembly",
   "cvh-cmp-bellows-seal-bonnet",
   "cvh-cmp-stem-packing-types"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.actuator-types",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   6
  ],
  "t": "A direct-acting actuator pushes the stem down with loading pressure and returns it with the spring; a reverse-acting actuator does the opposite. A piston actuator trades the spring for a second pressure connection, for higher thrust and faster stroking.",
  "sources": [
   "cvh-cmp-direct-acting-actuator",
   "cvh-cmp-reverse-acting-actuator",
   "cvh-cmp-piston-actuator"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.rotary.overview",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "understand",
  "pages": [
   8
  ],
  "t": "A rotary control valve turns a ball, disk, or plug across the flow path instead of sliding a stem through it — the same final-control-element job, a different motion.",
  "sources": [
   "cvh-cmp-rotary-valve-photo"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.rotary.closure-members",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   9
  ],
  "t": "A segmented ball, a V-notch ball, and an eccentric disk are the three standard rotary closure members — the V-notch's contoured cut gives it the widest rangeability of the three.",
  "sources": [
   "cvh-cmp-segmented-ball",
   "cvh-cmp-v-notch-ball",
   "cvh-cmp-eccentric-disk-valve"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.rotary.actuator-mechanism",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   10
  ],
  "t": "A rotary actuator's lever and shaft convert the same linear stem motion a sliding-stem actuator produces into the disk or ball rotation the closure member actually needs.",
  "sources": [
   "cvh-cmp-rotary-actuator-cutaway"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.characteristic.cage-shape",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   11
  ],
  "t": "A cage's window shape — linear, equal-percentage, or quick-opening — sets how flow changes as the valve strokes, independent of the body style around it.",
  "sources": [
   "cvh-cmp-cage-types"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.characteristic.inherent-curves",
  "progression": "introduces",
  "role": "application",
  "level": "analyze",
  "pages": [
   12
  ],
  "t": "Quick-opening gives maximum flow change near the closed position, linear gives equal flow change per unit of travel, and equal-percentage gives equal PERCENTAGE change per unit of travel — read the curve to tell which characteristic a valve has.",
  "sources": [
   "cvh-cmp-inherent-characteristics-graph"
  ],
  "template": "slide--role-application",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.performance.deadband",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   13
  ],
  "t": "Deadband is the range a controller's output can reverse through before the valve produces any observable change — friction and backlash are its usual causes.",
  "sources": [
   "cvh-cmp-deadband-graph"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.bodystyle.globe-variants",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   15
  ],
  "t": "Single-ported globe bodies are the simplest and tightest-shutoff; double-ported (reverse-acting) bodies balance plug forces across two ports for less required thrust; cage-style balanced-plug bodies use the cage itself to balance pressure and can carry a soft seat for bubble-tight shutoff.",
  "sources": [
   "cvh-cmp-single-ported-globe-valve-body",
   "cvh-cmp-cage-style-trim-balanced-plug-soft-seat",
   "cvh-cmp-double-ported-globe-valve-body-reverse-acting"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.intro.body-style-variants",
  "progression": "develops",
  "role": "application",
  "level": "understand",
  "pages": [
   16
  ],
  "t": "Angle and bar-stock bodies extend the basic globe body for specialty service (erosive/slurry flow, high-purity or highly corrosive fluids); a three-way body combines two inlet streams or diverts one inlet to either of two outlets, one body doing the job two two-way valves and a manifold would otherwise do.",
  "sources": [
   "cvh-cmp-flanged-angle-valve-body",
   "cvh-cmp-bar-stock-valve-body",
   "cvh-cmp-three-way-globe-valve-cutaway"
  ],
  "template": "slide--role-application",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.rotary.closure-members",
  "progression": "develops",
  "role": "contrast",
  "level": "understand",
  "pages": [
   17
  ],
  "t": "An offset-shaft butterfly disk swings clear of the seat as it opens, reducing seat wear versus a centered shaft; a high-performance butterfly adds a second, radial offset for a tighter, longer-wearing seal at higher pressure.",
  "sources": [
   "cvh-cmp-butterfly-shaft-offset-disc-center",
   "cvh-cmp-butterfly-control-valve",
   "cvh-cmp-high-performance-butterfly-valve"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.rotary.closure-members",
  "progression": "develops",
  "role": "contrast",
  "level": "understand",
  "pages": [
   18
  ],
  "t": "A full-port ball valve (on trunnion mounts, for larger sizes) gives an unrestricted straight-through bore when open; an eccentric plug swings out of the seat on an off-center shaft, the same wear-reducing idea a butterfly's offset shaft uses.",
  "sources": [
   "cvh-cmp-segmented-v-notch-ball",
   "cvh-cmp-eccentric-plug-valve-body",
   "cvh-cmp-full-port-ball-control-valve",
   "cvh-cmp-full-port-ball-valve-trunnion"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.bodystyle.special-purpose",
  "progression": "introduces",
  "role": "application",
  "level": "apply",
  "pages": [
   19
  ],
  "t": "Anti-cavitation and low-noise trim options quiet or eliminate the damage a high pressure-drop can cause; a multi-port flow-selector valve routes flow among several destinations from one body; a pressure-assisted seal uses process pressure itself to improve shutoff.",
  "sources": [
   "cvh-cmp-ball-valve-cavitation-noise-options",
   "cvh-cmp-multi-port-flow-selector-valve",
   "cvh-cmp-pressure-assisted-seal-configuration"
  ],
  "template": "slide--role-application",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.bodystyle.end-connections",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   20
  ],
  "t": "Bolted-flange connections bolt to mating pipe flanges and can be unbolted for service; welded connections are welded directly into the pipeline, for higher pressure or leak-critical service, at the cost of cutting the valve out to service it.",
  "sources": [
   "cvh-cmp-bolted-flange-end-connections",
   "cvh-cmp-welded-end-connections"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.bonnet-types",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   22
  ],
  "t": "A standard bonnet bolts to the body with stud bolts; bonnet variations extend that basic shape for extra clearance or insulation; a fabricated extension bonnet lengthens the packing box away from the process fluid, for cryogenic or very hot service.",
  "sources": [
   "cvh-cmp-typical-bonnet-flange-stud-bolts",
   "cvh-cmp-bonnet-variations",
   "cvh-cmp-fabricated-extension-bonnet"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.bellows-bonnet",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   23
  ],
  "t": "A welded-leaf bellows stacks thin metal diaphragms into a flexible seal; a mechanically-formed bellows is hydroformed from tubing instead — both give a fully welded, zero-leakage path around the stem.",
  "sources": [
   "cvh-cmp-enviroseal-bellows-seal-bonnet",
   "cvh-cmp-welded-leaf-bellows",
   "cvh-cmp-mechanically-formed-bellows"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.intro.bonnet-packing-arrangement",
  "progression": "develops",
  "role": "contrast",
  "level": "understand",
  "pages": [
   24
  ],
  "t": "A single PTFE V-ring packing arrangement is the simple baseline; the full packing-material arrangement (rings, followers, springs) shown in cross-section is what actually loads and maintains that seal as the stem strokes and wears.",
  "sources": [
   "cvh-cmp-packing-material-arrangements-globe",
   "cvh-cmp-single-ptfe-vring-packing"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.environmental-packing",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   25
  ],
  "t": "ENVIRO-SEAL packing systems add a live-loaded spring to a PTFE, duplex (PTFE-plus-graphite), or graphite ULF (ultra-low fugitive) arrangement — for sliding-stem or rotary valves alike — to hold sealing force as packing wears, instead of relying on a one-time bolt torque.",
  "sources": [
   "cvh-cmp-enviroseal-ptfe-packing-system",
   "cvh-cmp-enviroseal-duplex-packing-system",
   "cvh-cmp-enviroseal-graphite-ulf-packing-system",
   "cvh-cmp-enviroseal-graphite-packing-rotary"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.packing-selection",
  "progression": "introduces",
  "role": "application",
  "level": "evaluate",
  "pages": [
   26
  ],
  "t": "Match the packing system to the service: standard PTFE for general-purpose duty, an ENVIRO-SEAL live-loaded system where emissions matter, graphite where temperature rules PTFE out — sliding-stem and rotary valves each have their own selection chart.",
  "sources": [
   "cvh-cmp-sliding-stem-environmental-packing-selection",
   "cvh-cmp-rotary-environmental-packing-selection"
  ],
  "template": "slide--role-application",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.emissions-standards-awareness",
  "progression": "introduces",
  "role": "caution",
  "level": "understand",
  "pages": [
   27
  ],
  "t": "Regulations require periodically testing valves for leaks into the air (called fugitive emissions) — the programs that do this are known as VOC/LDAR, and ISO 15848-1 is the standard a packing system has to pass to qualify. Picking an unqualified packing for the service can mean failing that test, not just a leak on the bench.",
  "sources": [
   "cvh-cmp-voc-ldar-measurement-frequency",
   "cvh-cmp-iso15848-1-qualification-requirements"
  ],
  "template": "slide--tmpl-caution",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.characteristic.inherent-curves",
  "progression": "develops",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   29
  ],
  "t": "A characterized cage shapes its window profile to produce a specific curve directly — the physical mechanism behind the quick-opening/linear/equal-percentage curves already introduced.",
  "sources": [
   "cvh-cmp-characterized-cages-globe",
   "cvh-cmp-inherent-flow-characteristic-curves"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.characteristic.contoured-plug",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   30
  ],
  "t": "A contoured plug shapes the same curve types by varying its own profile against a fixed seat, rather than through a cage window; quick-opening construction is the simplest case — a flat-faced plug that uncovers flow area almost immediately.",
  "sources": [
   "cvh-cmp-plug-contour-flow-characterization",
   "cvh-cmp-quick-opening-construction"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.trim.guiding-and-capacity",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   31
  ],
  "t": "Cage-guided trim rides inside the cage bore; plug-guided trim rides in machined guides in the body itself — two different ways of keeping the plug centered on its seat. A reduced-capacity adapter lets one body size handle a smaller trim than its full-size rating.",
  "sources": [
   "cvh-cmp-cage-guiding-plug-guiding-cross-section",
   "cvh-cmp-adapter-reduced-flow-capacity"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.intro.actuator-types",
  "competencyStatus": "confirmed",
  "progression": "develops",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   32,
   33
  ],
  "t": "A field-reversible actuator can be converted between direct- and reverse-acting in the field, without a different casting, and the same spring-and-diaphragm principle drives a rotary valve's diaphragm actuator, just converted to rotation through a lever. A double-acting piston actuator uses supply pressure on both sides for higher thrust in either direction; its rotary equivalent, a scotch-yoke piston actuator, converts that same linear motion into rotation the piston way, just as the diaphragm actuator does through its lever.",
  "sources": [
   "cvh-cmp-field-reversible-multi-spring-actuator",
   "cvh-cmp-diaphragm-actuator-rotary-valve",
   "cvh-cmp-double-acting-piston-actuator",
   "cvh-cmp-scotch-yoke-piston-actuator"
  ],
  "template": "slide--role-mechanism"
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.actuator.manual-electric",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   34
  ],
  "t": "A handwheel gives manual override on a sliding-stem or rotary actuator without pneumatic supply; an electric actuator replaces pneumatic supply with a motor, for sites with no air system.",
  "sources": [
   "cvh-cmp-manual-actuator-sliding-stem",
   "cvh-cmp-manual-actuator-rotary",
   "cvh-cmp-electric-actuator-sliding-stem",
   "cvh-cmp-electric-actuator-rotary"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.actuator.rack-and-pinion",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   34
  ],
  "t": "A rack-and-pinion actuator is a compact, economical pneumatic option for rotary valves — but its backlash limits it to on/off service, not the precision continuous throttling a diaphragm or piston actuator handles.",
  "sources": [
   "cvh-cmp-rack-and-pinion-actuator"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.positioner-mechanism",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   36
  ],
  "t": "A pneumatic positioner closes its own local loop: it compares actual stem position (fed back through a cam and beam) to the command signal at a flapper/nozzle, and drives a relay until the two agree.",
  "sources": [
   "cvh-cmp-pneumatic-positioner-schematic"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.analog-ip-positioner",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   37
  ],
  "t": "An analog I/P positioner runs the same feedback loop from a 4-20 mA current signal instead of a pneumatic one, converting current to pneumatic output through the same nozzle/flapper/relay stages.",
  "sources": [
   "cvh-cmp-analog-ip-positioner-schematic",
   "cvh-cmp-analog-ip-positioner-photo"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.digital-valve-controller",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   38
  ],
  "t": "A digital valve controller replaces the positioner's mechanical feedback linkage with a microprocessor — same job (drive the valve to command), added diagnostics.",
  "sources": [
   "cvh-cmp-digital-valve-controller-photo"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.ip-transducer",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   39
  ],
  "t": "An I/P transducer converts a current signal to a pneumatic one with no position feedback at all — simpler and cheaper than a positioner, appropriate where high positioning accuracy isn't required.",
  "sources": [
   "cvh-cmp-ip-transducer-pilot-detail",
   "cvh-cmp-ip-transducer-photo"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.volume-booster",
  "progression": "introduces",
  "role": "application",
  "level": "understand",
  "pages": [
   40
  ],
  "t": "A volume booster amplifies the pneumatic flow available to the actuator without changing the signal's pressure — needed when a large or fast-stroking actuator would otherwise starve the positioner's own limited output capacity.",
  "sources": [
   "cvh-cmp-volume-booster-sectional",
   "cvh-cmp-dual-booster-installation"
  ],
  "template": "slide--role-application",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch3-m2",
  "competencyId": "cvb.accessory.pneumatic-controller",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   42
  ],
  "t": "A standalone pneumatic controller closes an entire control loop right at the valve, with no central control-room computer system (a DCS or PLC) needed — it compares the measured process value to a set point and drives the valve directly. Adding reset and rate elements to a proportional-only design corrects lingering offset and reacts faster to a changing load.",
  "sources": [
   "cvh-cmp-pneumatic-controller-photo",
   "cvh-cmp-pneumatic-controller-schematic-proportional",
   "cvh-cmp-pneumatic-controller-schematic-reset-rate"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch3-m2",
  "competencyId": "cvb.accessory.position-transmitter",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   43
  ],
  "t": "A position transmitter reports actual valve position back to the control system — 4-20 mA if wired, a 0-100% digital signal if wireless — so the control room can see where the valve really is, not just where it was told to go.",
  "sources": [
   "cvh-cmp-wireless-position-transmitter"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch3-m2",
  "competencyId": "cvb.safety.solenoid-valve-types",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   44
  ],
  "t": "A spring-return SOV drives a single-acting actuator (3-port symbol); a double-acting SOV drives an actuator that needs pressure on both sides (4-port symbol). Separately, a direct-acting SOV switches with less flow capacity but no minimum pressure; a pilot-operated SOV needs a minimum supply pressure but handles far more flow.",
  "sources": [
   "cvh-cmp-sov-3port-spring-return-symbol",
   "cvh-cmp-sov-4port-double-acting-symbol",
   "cvh-cmp-sov-direct-acting-assembly",
   "cvh-cmp-sov-pilot-operated-assembly"
  ],
  "template": "slide--role-contrast",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch3-m2",
  "competencyId": "cvb.safety.voting-architecture",
  "progression": "introduces",
  "role": "application",
  "level": "understand",
  "pages": [
   45
  ],
  "t": "A 1oo2 (one-out-of-two) architecture trips if either of two SOVs sees a demand — favoring safety, more nuisance trips. A 2oo2 architecture needs both to agree — favoring uptime, at the cost of a slower response to a real single-SOV failure.",
  "sources": [
   "cvh-cmp-sov-1oo2-voting-intro",
   "cvh-cmp-sov-1oo2-architecture-schematic",
   "cvh-cmp-sov-2oo2-architecture-schematic"
  ],
  "template": "slide--role-application",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch3-m2",
  "competencyId": "cvb.safety.trip-and-manual-override",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   46
  ],
  "t": "A trip valve shows a distinct physical state once a safety system actually trips it; a switching valve routes pneumatic signal for control logic rather than process flow. A side- or top-mounted handwheel lets a technician manually stroke an actuator with no air supply at all.",
  "sources": [
   "cvh-cmp-trip-valve-tripped-condition",
   "cvh-cmp-three-way-switching-valve",
   "cvh-cmp-actuator-side-handwheel",
   "cvh-cmp-actuator-top-handwheel"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.performance.process-variability",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   48
  ],
  "t": "Process variability is the width of the distribution of a measured value around its target, not where the target itself sits — a tightly-controlled loop has a narrow distribution, a poorly-controlled one a wide one, both centered the same place.",
  "sources": [
   "cvh-cmp-process-variability-distributions"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.performance.test-loop",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   49
  ],
  "t": "Every performance number in this chapter — deadband, response time, gain, the economics — comes from real bench testing on a physical test loop, not a simulation.",
  "sources": [
   "cvh-cmp-performance-test-loop-photo"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.performance.deadband",
  "progression": "develops",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   50
  ],
  "t": "Testing three real valve designs open-loop shows deadband directly: each valve's output lags its command by a different amount before it moves at all — the same deadband concept already introduced, now measured and compared.",
  "sourceNote": "CVH ch2 Figure 2.3 'Effect of Deadband on Valve Performance' — the same figure is already catalogued as ch3-cmp-deadband-effect-chart in 14101's own Subject-Matter Index (a different course); cross-referenced, not duplicated as a new id, per Subject-Matter Index — Control Valve Handbook ch2.md's own Open Items.",
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.performance.response-time",
  "progression": "introduces",
  "role": "application",
  "level": "understand",
  "pages": [
   51
  ],
  "t": "Dead time and 63%-response time both vary by valve/actuator/positioner combination — a faster positioner or a smaller actuator generally responds quicker, but the only way to know a specific configuration's numbers is to test it.",
  "sources": [
   "cvh-cmp-valve-response-time-summary-table"
  ],
  "template": "slide--role-application",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.performance.installed-gain",
  "progression": "introduces",
  "role": "mechanism",
  "level": "analyze",
  "pages": [
   52
  ],
  "t": "Installed gain is the slope of the installed flow-characteristic curve at a given travel — where that slope changes sharply across the travel range, the loop's tuning has to compromise between the high-gain and low-gain regions.",
  "sources": [
   "cvh-cmp-installed-characteristic-and-gain"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.bodystyle.control-range-by-style",
  "progression": "introduces",
  "role": "application",
  "level": "analyze",
  "pages": [
   53
  ],
  "t": "A globe valve holds a usable, controllable gain over a wider share of its travel than a butterfly valve does for the same duty — a wider control range, read directly off the installed-gain comparison.",
  "sources": [
   "cvh-cmp-valve-style-control-range-comparison"
  ],
  "template": "slide--role-application",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch4-m2",
  "competencyId": "cvb.performance.economics-of-control",
  "progression": "introduces",
  "role": "application",
  "level": "evaluate",
  "pages": [
   55
  ],
  "t": "Across three real valve designs under the same random load disturbance, the better-controlling valve holds process variability closer to the theoretical minimum as tuning gets more aggressive — a measurable economic argument for choosing it, not just a qualitative one.",
  "sources": [
   "cvh-cmp-closed-loop-disturbance-summary"
  ],
  "template": "slide--role-application",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch4-m2",
  "competencyId": "cvb.performance.signature-series-testing",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   56
  ],
  "t": "A Signature Series factory test runs an assembled valve through ValveLink software, recording its own friction/force signature as a baseline for comparison against a later, in-service test of the same valve.",
  "sources": [
   "cvh-cmp-signature-series-testing-photo"
  ],
  "template": "slide--role-mechanism",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch4-m2",
  "competencyId": "cvb.performance.signature-diagnosis",
  "progression": "introduces",
  "role": "application",
  "level": "apply",
  "pages": [
   57
  ],
  "t": "Overlaying a new in-service signature on the original baseline shows an increased span where friction has risen — the same comparison a technician would run to confirm a valve actually needs service, not just guess from symptoms.",
  "sources": [
   "cvh-cmp-signature-data-comparison-overlay"
  ],
  "template": "slide--role-application",
  "competencyStatus": "confirmed"
 },
 {
  "mod": "cvb-ch4-m2",
  "competencyId": "cvb.performance.valvelink-interface",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   58
  ],
  "t": "ValveLink's Total Scan view shows the signature graph directly; its Valve Step Response view runs and displays a step test — the two diagnostic screens a technician actually works from.",
  "sources": [
   "cvh-cmp-valvelink-software-screens"
  ],
  "template": "slide--role-nomenclature",
  "competencyStatus": "confirmed"
 }
]
```

**After** (`primitives[]` shape):

```json
[
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.feedback-loop",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   1
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Process control means automatically keeping something — a flow, a pressure, a temperature — at the value it should be. A control valve is the part that makes the correction: a sensor reads the real value, it's compared to the target, and the valve's stem moves to close the gap — this loop is what \"process control\" means in practice.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     1
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-feedback-control-loop"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.sliding-stem-overview",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   2
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A sliding-stem valve moves its plug straight up and down through a globe- or angle-style body — the most common control valve construction.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     2
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-sliding-stem-valve-photo"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.sliding-stem-parts",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   3
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "From actuator to body: stem, packing flange, bonnet, piston ring, plug, cage, and seat ring stack in that order — the assembly sequence every sliding-stem valve follows.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     3
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-sliding-stem-exploded"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.body-style-variants",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   4
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "An angle body turns the flow path 90° for erosive or high-pressure-drop service; a three-way body combines or diverts flow through a single valve instead of the straight-through path a standard globe body uses.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     4
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-angle-valve-photo",
     "cvh-cmp-three-way-globe-valve-overview"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.bonnet-packing-arrangement",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   5
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A conventional bonnet packs the stem with PTFE or graphite rings in the packing box; a bellows-seal bonnet replaces packing entirely with a welded metal bellows for zero-leakage service on hazardous or toxic process fluids.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     5
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-bonnet-assembly",
     "cvh-cmp-bellows-seal-bonnet",
     "cvh-cmp-stem-packing-types"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m1",
  "competencyId": "cvb.intro.actuator-types",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   6
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A direct-acting actuator pushes the stem down with loading pressure and returns it with the spring; a reverse-acting actuator does the opposite. A piston actuator trades the spring for a second pressure connection, for higher thrust and faster stroking.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     6
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-direct-acting-actuator",
     "cvh-cmp-reverse-acting-actuator",
     "cvh-cmp-piston-actuator"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.rotary.overview",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "understand",
  "pages": [
   8
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A rotary control valve turns a ball, disk, or plug across the flow path instead of sliding a stem through it — the same final-control-element job, a different motion.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     8
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-rotary-valve-photo"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.rotary.closure-members",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   9
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A segmented ball, a V-notch ball, and an eccentric disk are the three standard rotary closure members — the V-notch's contoured cut gives it the widest rangeability of the three.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     9
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-segmented-ball",
     "cvh-cmp-v-notch-ball",
     "cvh-cmp-eccentric-disk-valve"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.rotary.actuator-mechanism",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   10
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A rotary actuator's lever and shaft convert the same linear stem motion a sliding-stem actuator produces into the disk or ball rotation the closure member actually needs.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     10
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-rotary-actuator-cutaway"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.characteristic.cage-shape",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   11
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A cage's window shape — linear, equal-percentage, or quick-opening — sets how flow changes as the valve strokes, independent of the body style around it.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     11
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-cage-types"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.characteristic.inherent-curves",
  "progression": "introduces",
  "role": "application",
  "level": "analyze",
  "pages": [
   12
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Quick-opening gives maximum flow change near the closed position, linear gives equal flow change per unit of travel, and equal-percentage gives equal PERCENTAGE change per unit of travel — read the curve to tell which characteristic a valve has.",
    "template": "slide--role-application",
    "templateRationale": "This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.",
    "pages": [
     12
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-inherent-characteristics-graph"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch1-m2",
  "competencyId": "cvb.performance.deadband",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   13
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Deadband is the range a controller's output can reverse through before the valve produces any observable change — friction and backlash are its usual causes.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     13
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-deadband-graph"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.bodystyle.globe-variants",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   15
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Single-ported globe bodies are the simplest and tightest-shutoff; double-ported (reverse-acting) bodies balance plug forces across two ports for less required thrust; cage-style balanced-plug bodies use the cage itself to balance pressure and can carry a soft seat for bubble-tight shutoff.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     15
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-single-ported-globe-valve-body",
     "cvh-cmp-cage-style-trim-balanced-plug-soft-seat",
     "cvh-cmp-double-ported-globe-valve-body-reverse-acting"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.intro.body-style-variants",
  "progression": "develops",
  "role": "application",
  "level": "understand",
  "pages": [
   16
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Angle and bar-stock bodies extend the basic globe body for specialty service (erosive/slurry flow, high-purity or highly corrosive fluids); a three-way body combines two inlet streams or diverts one inlet to either of two outlets, one body doing the job two two-way valves and a manifold would otherwise do.",
    "template": "slide--role-application",
    "templateRationale": "This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.",
    "pages": [
     16
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-flanged-angle-valve-body",
     "cvh-cmp-bar-stock-valve-body",
     "cvh-cmp-three-way-globe-valve-cutaway"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.rotary.closure-members",
  "progression": "develops",
  "role": "contrast",
  "level": "understand",
  "pages": [
   17
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "An offset-shaft butterfly disk swings clear of the seat as it opens, reducing seat wear versus a centered shaft; a high-performance butterfly adds a second, radial offset for a tighter, longer-wearing seal at higher pressure.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     17
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-butterfly-shaft-offset-disc-center",
     "cvh-cmp-butterfly-control-valve",
     "cvh-cmp-high-performance-butterfly-valve"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.rotary.closure-members",
  "progression": "develops",
  "role": "contrast",
  "level": "understand",
  "pages": [
   18
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A full-port ball valve (on trunnion mounts, for larger sizes) gives an unrestricted straight-through bore when open; an eccentric plug swings out of the seat on an off-center shaft, the same wear-reducing idea a butterfly's offset shaft uses.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     18
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-segmented-v-notch-ball",
     "cvh-cmp-eccentric-plug-valve-body",
     "cvh-cmp-full-port-ball-control-valve",
     "cvh-cmp-full-port-ball-valve-trunnion"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.bodystyle.special-purpose",
  "progression": "introduces",
  "role": "application",
  "level": "apply",
  "pages": [
   19
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Anti-cavitation and low-noise trim options quiet or eliminate the damage a high pressure-drop can cause; a multi-port flow-selector valve routes flow among several destinations from one body; a pressure-assisted seal uses process pressure itself to improve shutoff.",
    "template": "slide--role-application",
    "templateRationale": "This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.",
    "pages": [
     19
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-ball-valve-cavitation-noise-options",
     "cvh-cmp-multi-port-flow-selector-valve",
     "cvh-cmp-pressure-assisted-seal-configuration"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m1",
  "competencyId": "cvb.bodystyle.end-connections",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   20
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Bolted-flange connections bolt to mating pipe flanges and can be unbolted for service; welded connections are welded directly into the pipeline, for higher pressure or leak-critical service, at the cost of cutting the valve out to service it.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     20
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-bolted-flange-end-connections",
     "cvh-cmp-welded-end-connections"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.bonnet-types",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   22
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A standard bonnet bolts to the body with stud bolts; bonnet variations extend that basic shape for extra clearance or insulation; a fabricated extension bonnet lengthens the packing box away from the process fluid, for cryogenic or very hot service.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     22
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-typical-bonnet-flange-stud-bolts",
     "cvh-cmp-bonnet-variations",
     "cvh-cmp-fabricated-extension-bonnet"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.bellows-bonnet",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   23
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A welded-leaf bellows stacks thin metal diaphragms into a flexible seal; a mechanically-formed bellows is hydroformed from tubing instead — both give a fully welded, zero-leakage path around the stem.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     23
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-enviroseal-bellows-seal-bonnet",
     "cvh-cmp-welded-leaf-bellows",
     "cvh-cmp-mechanically-formed-bellows"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.intro.bonnet-packing-arrangement",
  "progression": "develops",
  "role": "contrast",
  "level": "understand",
  "pages": [
   24
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A single PTFE V-ring packing arrangement is the simple baseline; the full packing-material arrangement (rings, followers, springs) shown in cross-section is what actually loads and maintains that seal as the stem strokes and wears.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     24
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-packing-material-arrangements-globe",
     "cvh-cmp-single-ptfe-vring-packing"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.environmental-packing",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   25
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "ENVIRO-SEAL packing systems add a live-loaded spring to a PTFE, duplex (PTFE-plus-graphite), or graphite ULF (ultra-low fugitive) arrangement — for sliding-stem or rotary valves alike — to hold sealing force as packing wears, instead of relying on a one-time bolt torque.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     25
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-enviroseal-ptfe-packing-system",
     "cvh-cmp-enviroseal-duplex-packing-system",
     "cvh-cmp-enviroseal-graphite-ulf-packing-system",
     "cvh-cmp-enviroseal-graphite-packing-rotary"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.packing-selection",
  "progression": "introduces",
  "role": "application",
  "level": "evaluate",
  "pages": [
   26
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Match the packing system to the service: standard PTFE for general-purpose duty, an ENVIRO-SEAL live-loaded system where emissions matter, graphite where temperature rules PTFE out — sliding-stem and rotary valves each have their own selection chart.",
    "template": "slide--role-application",
    "templateRationale": "This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.",
    "pages": [
     26
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-sliding-stem-environmental-packing-selection",
     "cvh-cmp-rotary-environmental-packing-selection"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.emissions-standards-awareness",
  "progression": "introduces",
  "role": "caution",
  "level": "understand",
  "pages": [
   27
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Regulations require periodically testing valves for leaks into the air (called fugitive emissions) — the programs that do this are known as VOC/LDAR, and ISO 15848-1 is the standard a packing system has to pass to qualify. Picking an unqualified packing for the service can mean failing that test, not just a leak on the bench.",
    "template": "slide--tmpl-caution",
    "templateRationale": "This is the 'caution' role's default Template Gallery treatment: The caution card (.slide--tmpl-caution): the warning, the failure it prevents, distinct visual weight.",
    "pages": [
     27
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-voc-ldar-measurement-frequency",
     "cvh-cmp-iso15848-1-qualification-requirements"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.characteristic.inherent-curves",
  "progression": "develops",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   29
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A characterized cage shapes its window profile to produce a specific curve directly — the physical mechanism behind the quick-opening/linear/equal-percentage curves already introduced.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     29
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-characterized-cages-globe",
     "cvh-cmp-inherent-flow-characteristic-curves"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.characteristic.contoured-plug",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   30
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A contoured plug shapes the same curve types by varying its own profile against a fixed seat, rather than through a cage window; quick-opening construction is the simplest case — a flat-faced plug that uncovers flow area almost immediately.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     30
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-plug-contour-flow-characterization",
     "cvh-cmp-quick-opening-construction"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.trim.guiding-and-capacity",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   31
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Cage-guided trim rides inside the cage bore; plug-guided trim rides in machined guides in the body itself — two different ways of keeping the plug centered on its seat. A reduced-capacity adapter lets one body size handle a smaller trim than its full-size rating.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     31
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-cage-guiding-plug-guiding-cross-section",
     "cvh-cmp-adapter-reduced-flow-capacity"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.intro.actuator-types",
  "competencyStatus": "confirmed",
  "progression": "develops",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   32,
   33
  ],
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A field-reversible actuator can be converted between direct- and reverse-acting in the field, without a different casting, and the same spring-and-diaphragm principle drives a rotary valve's diaphragm actuator, just converted to rotation through a lever. A double-acting piston actuator uses supply pressure on both sides for higher thrust in either direction; its rotary equivalent, a scotch-yoke piston actuator, converts that same linear motion into rotation the piston way, just as the diaphragm actuator does through its lever.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     32,
     33
    ],
    "slideCount": {
     "estimate": 2,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-field-reversible-multi-spring-actuator",
     "cvh-cmp-diaphragm-actuator-rotary-valve",
     "cvh-cmp-double-acting-piston-actuator",
     "cvh-cmp-scotch-yoke-piston-actuator"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.actuator.manual-electric",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   34
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A handwheel gives manual override on a sliding-stem or rotary actuator without pneumatic supply; an electric actuator replaces pneumatic supply with a motor, for sites with no air system.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     34
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-manual-actuator-sliding-stem",
     "cvh-cmp-manual-actuator-rotary",
     "cvh-cmp-electric-actuator-sliding-stem",
     "cvh-cmp-electric-actuator-rotary"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch2-m3",
  "competencyId": "cvb.actuator.rack-and-pinion",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   34
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A rack-and-pinion actuator is a compact, economical pneumatic option for rotary valves — but its backlash limits it to on/off service, not the precision continuous throttling a diaphragm or piston actuator handles.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     34
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-rack-and-pinion-actuator"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.positioner-mechanism",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   36
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A pneumatic positioner closes its own local loop: it compares actual stem position (fed back through a cam and beam) to the command signal at a flapper/nozzle, and drives a relay until the two agree.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     36
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-pneumatic-positioner-schematic"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.analog-ip-positioner",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   37
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "An analog I/P positioner runs the same feedback loop from a 4-20 mA current signal instead of a pneumatic one, converting current to pneumatic output through the same nozzle/flapper/relay stages.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     37
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-analog-ip-positioner-schematic",
     "cvh-cmp-analog-ip-positioner-photo"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.digital-valve-controller",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   38
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A digital valve controller replaces the positioner's mechanical feedback linkage with a microprocessor — same job (drive the valve to command), added diagnostics.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     38
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-digital-valve-controller-photo"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.ip-transducer",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   39
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "An I/P transducer converts a current signal to a pneumatic one with no position feedback at all — simpler and cheaper than a positioner, appropriate where high positioning accuracy isn't required.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     39
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-ip-transducer-pilot-detail",
     "cvh-cmp-ip-transducer-photo"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.volume-booster",
  "progression": "introduces",
  "role": "application",
  "level": "understand",
  "pages": [
   40
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A volume booster amplifies the pneumatic flow available to the actuator without changing the signal's pressure — needed when a large or fast-stroking actuator would otherwise starve the positioner's own limited output capacity.",
    "template": "slide--role-application",
    "templateRationale": "This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.",
    "pages": [
     40
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-volume-booster-sectional",
     "cvh-cmp-dual-booster-installation"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch3-m2",
  "competencyId": "cvb.accessory.pneumatic-controller",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   42
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A standalone pneumatic controller closes an entire control loop right at the valve, with no central control-room computer system (a DCS or PLC) needed — it compares the measured process value to a set point and drives the valve directly. Adding reset and rate elements to a proportional-only design corrects lingering offset and reacts faster to a changing load.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     42
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-pneumatic-controller-photo",
     "cvh-cmp-pneumatic-controller-schematic-proportional",
     "cvh-cmp-pneumatic-controller-schematic-reset-rate"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch3-m2",
  "competencyId": "cvb.accessory.position-transmitter",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   43
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A position transmitter reports actual valve position back to the control system — 4-20 mA if wired, a 0-100% digital signal if wireless — so the control room can see where the valve really is, not just where it was told to go.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     43
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-wireless-position-transmitter"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch3-m2",
  "competencyId": "cvb.safety.solenoid-valve-types",
  "progression": "introduces",
  "role": "contrast",
  "level": "understand",
  "pages": [
   44
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A spring-return SOV drives a single-acting actuator (3-port symbol); a double-acting SOV drives an actuator that needs pressure on both sides (4-port symbol). Separately, a direct-acting SOV switches with less flow capacity but no minimum pressure; a pilot-operated SOV needs a minimum supply pressure but handles far more flow.",
    "template": "slide--role-contrast",
    "templateRationale": "This is the 'contrast' role's default Template Gallery treatment: Parallel this-vs-that layout — a figure row or a comparison table.",
    "pages": [
     44
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-sov-3port-spring-return-symbol",
     "cvh-cmp-sov-4port-double-acting-symbol",
     "cvh-cmp-sov-direct-acting-assembly",
     "cvh-cmp-sov-pilot-operated-assembly"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch3-m2",
  "competencyId": "cvb.safety.voting-architecture",
  "progression": "introduces",
  "role": "application",
  "level": "understand",
  "pages": [
   45
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A 1oo2 (one-out-of-two) architecture trips if either of two SOVs sees a demand — favoring safety, more nuisance trips. A 2oo2 architecture needs both to agree — favoring uptime, at the cost of a slower response to a real single-SOV failure.",
    "template": "slide--role-application",
    "templateRationale": "This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.",
    "pages": [
     45
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-sov-1oo2-voting-intro",
     "cvh-cmp-sov-1oo2-architecture-schematic",
     "cvh-cmp-sov-2oo2-architecture-schematic"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch3-m2",
  "competencyId": "cvb.safety.trip-and-manual-override",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   46
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A trip valve shows a distinct physical state once a safety system actually trips it; a switching valve routes pneumatic signal for control logic rather than process flow. A side- or top-mounted handwheel lets a technician manually stroke an actuator with no air supply at all.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     46
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-trip-valve-tripped-condition",
     "cvh-cmp-three-way-switching-valve",
     "cvh-cmp-actuator-side-handwheel",
     "cvh-cmp-actuator-top-handwheel"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.performance.process-variability",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   48
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Process variability is the width of the distribution of a measured value around its target, not where the target itself sits — a tightly-controlled loop has a narrow distribution, a poorly-controlled one a wide one, both centered the same place.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     48
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-process-variability-distributions"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.performance.test-loop",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   49
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Every performance number in this chapter — deadband, response time, gain, the economics — comes from real bench testing on a physical test loop, not a simulation.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     49
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-performance-test-loop-photo"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.performance.deadband",
  "progression": "develops",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   50
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Testing three real valve designs open-loop shows deadband directly: each valve's output lags its command by a different amount before it moves at all — the same deadband concept already introduced, now measured and compared.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     50
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sourceNote": "CVH ch2 Figure 2.3 'Effect of Deadband on Valve Performance' — the same figure is already catalogued as ch3-cmp-deadband-effect-chart in 14101's own Subject-Matter Index (a different course); cross-referenced, not duplicated as a new id, per Subject-Matter Index — Control Valve Handbook ch2.md's own Open Items."
   }
  ]
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.performance.response-time",
  "progression": "introduces",
  "role": "application",
  "level": "understand",
  "pages": [
   51
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Dead time and 63%-response time both vary by valve/actuator/positioner combination — a faster positioner or a smaller actuator generally responds quicker, but the only way to know a specific configuration's numbers is to test it.",
    "template": "slide--role-application",
    "templateRationale": "This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.",
    "pages": [
     51
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-valve-response-time-summary-table"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.performance.installed-gain",
  "progression": "introduces",
  "role": "mechanism",
  "level": "analyze",
  "pages": [
   52
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Installed gain is the slope of the installed flow-characteristic curve at a given travel — where that slope changes sharply across the travel range, the loop's tuning has to compromise between the high-gain and low-gain regions.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     52
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-installed-characteristic-and-gain"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch4-m1",
  "competencyId": "cvb.bodystyle.control-range-by-style",
  "progression": "introduces",
  "role": "application",
  "level": "analyze",
  "pages": [
   53
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A globe valve holds a usable, controllable gain over a wider share of its travel than a butterfly valve does for the same duty — a wider control range, read directly off the installed-gain comparison.",
    "template": "slide--role-application",
    "templateRationale": "This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.",
    "pages": [
     53
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-valve-style-control-range-comparison"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch4-m2",
  "competencyId": "cvb.performance.economics-of-control",
  "progression": "introduces",
  "role": "application",
  "level": "evaluate",
  "pages": [
   55
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Across three real valve designs under the same random load disturbance, the better-controlling valve holds process variability closer to the theoretical minimum as tuning gets more aggressive — a measurable economic argument for choosing it, not just a qualitative one.",
    "template": "slide--role-application",
    "templateRationale": "This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.",
    "pages": [
     55
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-closed-loop-disturbance-summary"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch4-m2",
  "competencyId": "cvb.performance.signature-series-testing",
  "progression": "introduces",
  "role": "mechanism",
  "level": "understand",
  "pages": [
   56
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "A Signature Series factory test runs an assembled valve through ValveLink software, recording its own friction/force signature as a baseline for comparison against a later, in-service test of the same valve.",
    "template": "slide--role-mechanism",
    "templateRationale": "This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).",
    "pages": [
     56
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-signature-series-testing-photo"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch4-m2",
  "competencyId": "cvb.performance.signature-diagnosis",
  "progression": "introduces",
  "role": "application",
  "level": "apply",
  "pages": [
   57
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "Overlaying a new in-service signature on the original baseline shows an increased span where friction has risen — the same comparison a technician would run to confirm a valve actually needs service, not just guess from symptoms.",
    "template": "slide--role-application",
    "templateRationale": "This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.",
    "pages": [
     57
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-signature-data-comparison-overlay"
    ]
   }
  ]
 },
 {
  "mod": "cvb-ch4-m2",
  "competencyId": "cvb.performance.valvelink-interface",
  "progression": "introduces",
  "role": "nomenclature",
  "level": "remember",
  "pages": [
   58
  ],
  "competencyStatus": "confirmed",
  "primitives": [
   {
    "domainOrAudienceStage": "orientation",
    "tier": "introductory",
    "t": "ValveLink's Total Scan view shows the signature graph directly; its Valve Step Response view runs and displays a step test — the two diagnostic screens a technician actually works from.",
    "template": "slide--role-nomenclature",
    "templateRationale": "This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.",
    "pages": [
     58
    ],
    "slideCount": {
     "estimate": 1,
     "maturity": "stage2"
    },
    "sources": [
     "cvh-cmp-valvelink-software-screens"
    ]
   }
  ]
 }
]
```

### Re-running `moduleStage2Completeness` (strict) — full output, all 9 modules

Result: **0 incomplete, 9 of 9 modules complete** — identical to the pre-migration count (also 0 incomplete). The granularity-advisory notes are byte-identical in content to the pre-migration run (same competency ids flagged, same modules) — this is the direct, traceable effect of `course-model.js`'s new backward-compatible derivation (chapters()): because every CVB concept has exactly one primitive, the derivation is a clean passthrough of that primitive's `sources`/`t`/`template` back onto the concept-level fields `moduleStage2Completeness` reads, so nothing the check looks at actually changed value, only where it's stored.

```json
[
 {
  "module": "cvb-ch1-m1",
  "complete": true,
  "missing": [],
  "notes": [
   "no prime concept (opening hook / prediction)",
   "2 concept(s) cite 3+ components — worth a human check on whether each is genuinely one competency: cvb.intro.bonnet-packing-arrangement, cvb.intro.actuator-types"
  ],
  "conceptCount": 6,
  "primitiveCounts": [
   1,
   1,
   1,
   1,
   1,
   1
  ]
 },
 {
  "module": "cvb-ch1-m2",
  "complete": true,
  "missing": [],
  "notes": [
   "no prime concept (opening hook / prediction)",
   "no formative check concept — Stage 3 should compose one for an apply+ module",
   "1 concept(s) cite 3+ components — worth a human check on whether each is genuinely one competency: cvb.rotary.closure-members"
  ],
  "conceptCount": 6,
  "primitiveCounts": [
   1,
   1,
   1,
   1,
   1,
   1
  ]
 },
 {
  "module": "cvb-ch2-m1",
  "complete": true,
  "missing": [],
  "notes": [
   "no prime concept (opening hook / prediction)",
   "no formative check concept — Stage 3 should compose one for an apply+ module",
   "5 concept(s) cite 3+ components — worth a human check on whether each is genuinely one competency: cvb.bodystyle.globe-variants, cvb.intro.body-style-variants, cvb.rotary.closure-members, cvb.rotary.closure-members, cvb.bodystyle.special-purpose"
  ],
  "conceptCount": 6,
  "primitiveCounts": [
   1,
   1,
   1,
   1,
   1,
   1
  ]
 },
 {
  "module": "cvb-ch2-m2",
  "complete": true,
  "missing": [],
  "notes": [
   "no prime concept (opening hook / prediction)",
   "no formative check concept — Stage 3 should compose one for an apply+ module",
   "3 concept(s) cite 3+ components — worth a human check on whether each is genuinely one competency: cvb.sealing.bonnet-types, cvb.sealing.bellows-bonnet, cvb.sealing.environmental-packing"
  ],
  "conceptCount": 6,
  "primitiveCounts": [
   1,
   1,
   1,
   1,
   1,
   1
  ]
 },
 {
  "module": "cvb-ch2-m3",
  "complete": true,
  "missing": [],
  "notes": [
   "no prime concept (opening hook / prediction)",
   "2 concept(s) cite 3+ components — worth a human check on whether each is genuinely one competency: cvb.intro.actuator-types, cvb.actuator.manual-electric"
  ],
  "conceptCount": 6,
  "primitiveCounts": [
   1,
   1,
   1,
   1,
   1,
   1
  ]
 },
 {
  "module": "cvb-ch3-m1",
  "complete": true,
  "missing": [],
  "notes": [
   "no prime concept (opening hook / prediction)"
  ],
  "conceptCount": 5,
  "primitiveCounts": [
   1,
   1,
   1,
   1,
   1
  ]
 },
 {
  "module": "cvb-ch3-m2",
  "complete": true,
  "missing": [],
  "notes": [
   "no prime concept (opening hook / prediction)",
   "4 concept(s) cite 3+ components — worth a human check on whether each is genuinely one competency: cvb.accessory.pneumatic-controller, cvb.safety.solenoid-valve-types, cvb.safety.voting-architecture, cvb.safety.trip-and-manual-override"
  ],
  "conceptCount": 5,
  "primitiveCounts": [
   1,
   1,
   1,
   1,
   1
  ]
 },
 {
  "module": "cvb-ch4-m1",
  "complete": true,
  "missing": [],
  "notes": [
   "no prime concept (opening hook / prediction)",
   "no formative check concept — Stage 3 should compose one for an apply+ module"
  ],
  "conceptCount": 6,
  "primitiveCounts": [
   1,
   1,
   1,
   1,
   1,
   1
  ]
 },
 {
  "module": "cvb-ch4-m2",
  "complete": true,
  "missing": [],
  "notes": [
   "no prime concept (opening hook / prediction)",
   "no formative check concept — Stage 3 should compose one for an apply+ module"
  ],
  "conceptCount": 4,
  "primitiveCounts": [
   1,
   1,
   1,
   1
  ]
 }
]
```

### `primitiveCompleteness` (strict) — full output, all 50 primitives

Result: **0 incomplete, 50 of 50 primitives complete.** Every primitive carries a real `domainOrAudienceStage`, `tier`, `t`, a citation (`sources[]` or `sourceNote`), `template` + `templateRationale`, real `pages`, and a valid `slideCount`.

```json
[
 {
  "module": "cvb-ch1-m1",
  "competencyId": "cvb.intro.feedback-loop",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m1",
  "competencyId": "cvb.intro.sliding-stem-overview",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m1",
  "competencyId": "cvb.intro.sliding-stem-parts",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m1",
  "competencyId": "cvb.intro.body-style-variants",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m1",
  "competencyId": "cvb.intro.bonnet-packing-arrangement",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m1",
  "competencyId": "cvb.intro.actuator-types",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m2",
  "competencyId": "cvb.rotary.overview",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m2",
  "competencyId": "cvb.rotary.closure-members",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m2",
  "competencyId": "cvb.rotary.actuator-mechanism",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m2",
  "competencyId": "cvb.characteristic.cage-shape",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m2",
  "competencyId": "cvb.characteristic.inherent-curves",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch1-m2",
  "competencyId": "cvb.performance.deadband",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m1",
  "competencyId": "cvb.bodystyle.globe-variants",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m1",
  "competencyId": "cvb.intro.body-style-variants",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m1",
  "competencyId": "cvb.rotary.closure-members",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m1",
  "competencyId": "cvb.rotary.closure-members",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m1",
  "competencyId": "cvb.bodystyle.special-purpose",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m1",
  "competencyId": "cvb.bodystyle.end-connections",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.bonnet-types",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.bellows-bonnet",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m2",
  "competencyId": "cvb.intro.bonnet-packing-arrangement",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.environmental-packing",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.packing-selection",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m2",
  "competencyId": "cvb.sealing.emissions-standards-awareness",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m3",
  "competencyId": "cvb.characteristic.inherent-curves",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m3",
  "competencyId": "cvb.characteristic.contoured-plug",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m3",
  "competencyId": "cvb.trim.guiding-and-capacity",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m3",
  "competencyId": "cvb.intro.actuator-types",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m3",
  "competencyId": "cvb.actuator.manual-electric",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch2-m3",
  "competencyId": "cvb.actuator.rack-and-pinion",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.positioner-mechanism",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.analog-ip-positioner",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.digital-valve-controller",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.ip-transducer",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch3-m1",
  "competencyId": "cvb.accessory.volume-booster",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch3-m2",
  "competencyId": "cvb.accessory.pneumatic-controller",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch3-m2",
  "competencyId": "cvb.accessory.position-transmitter",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch3-m2",
  "competencyId": "cvb.safety.solenoid-valve-types",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch3-m2",
  "competencyId": "cvb.safety.voting-architecture",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch3-m2",
  "competencyId": "cvb.safety.trip-and-manual-override",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch4-m1",
  "competencyId": "cvb.performance.process-variability",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch4-m1",
  "competencyId": "cvb.performance.test-loop",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch4-m1",
  "competencyId": "cvb.performance.deadband",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch4-m1",
  "competencyId": "cvb.performance.response-time",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch4-m1",
  "competencyId": "cvb.performance.installed-gain",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch4-m1",
  "competencyId": "cvb.bodystyle.control-range-by-style",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch4-m2",
  "competencyId": "cvb.performance.economics-of-control",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch4-m2",
  "competencyId": "cvb.performance.signature-series-testing",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch4-m2",
  "competencyId": "cvb.performance.signature-diagnosis",
  "complete": true,
  "missing": []
 },
 {
  "module": "cvb-ch4-m2",
  "competencyId": "cvb.performance.valvelink-interface",
  "complete": true,
  "missing": []
 }
]
```

### Regenerated artifacts

- `course-data.js` regenerated and validated (no BOM, no trailing newline, valid JSON, matches `course.json`).
- All four `Instructional Packet — Control Valve Basics — cvb-ch{1..4}.md` regenerated against the migrated data (see Step 2 for the navigability fixes applied before this final regeneration).

**No regressions found.** Nothing flagged in this step traces to the migration itself being wrong — the one design limitation found (`templateRationale`'s generic, role-level text) is named above, not hidden, but it is not a completeness failure: `primitiveCompleteness` only requires a rationale be PRESENT, not that it be concept-specific prose, and that's the real, current rule, not a gap this migration introduced.

## Step 2 — Packet navigability spot-check

Read the regenerated `Instructional Packet — Control Valve Basics — cvb-ch2.md` in full (the chapter containing the manual-electric/rack-and-pinion split from the previous turn — the most structurally interesting real case: a 2-page primitive and a 2-concept umbrella slide both live in `cvb-ch2-m3`). Found two real defects, not style preferences — both traced to `packet-doc.js` itself, not to the migration data (the underlying `course.json` was correct in both cases) and not to `flattenOriginateSlidePlan` (that function hadn't even run yet at this point in the directive — Step 3 came after this fix).

### Defect 1 — primitive blocks were not real Markdown structure

**Symptom:** a primitive's detail (domain/tier tags, the `t` prose, its resolved citations, template+rationale, slideCount) was written as plain text lines prefixed with 2 or 4 literal space characters (`'  **Primitive** — ...'`, `'    - \`id\` ...'`), with **no blank line** separating it from the concept's own header/meta line above it.

**Trace:** this is CommonMark-ambiguous on two counts — (a) a plain paragraph line beginning with 1-3 spaces is not special at all (renders as a normal paragraph, so the leading spaces are silently dropped — the "indent" never actually appeared visually), and with no blank line before it, some renderers treat it as a *lazy continuation* of the concept header's own paragraph, gluing unrelated content together; (b) the 4-space-indented citation lines, with no enclosing list item establishing that nesting level, sit right at the boundary CommonMark uses for an *indented code block* — a fragile construct that behaves inconsistently across renderers including Obsidian's. Root cause: `primitiveBlock()` in `packet-doc.js` built its lines with raw string-prefixed whitespace instead of real Markdown list syntax. **Introduced when `packet-doc.js` was first written** (the turn before this one) — not something the migration or Stage 3 touched.

**Before** (real output against migrated `cvb.actuator.rack-and-pinion`):

```
**6. cvb.actuator.rack-and-pinion** (introduces · confirmed)
role: mechanism · level: understand · pages: 34

  **Primitive** — orientation · introductory
  A rack-and-pinion actuator is a compact, economical pneumatic option for rotary valves — but its backlash limits it to on/off service, not the precision continuous throttling a diaphragm or piston actuator handles.
    - `cvh-cmp-rack-and-pinion-actuator` (current, Subject-Matter Index — Control Valve Handbook ch3.md)
    - template: `slide--role-mechanism` — ...
    - slideCount: 1 (stage2)
    - pages: 34
```

**After the fix** (real nested Markdown bullet, blank-line-separated):

```
**6. cvb.actuator.rack-and-pinion** (introduces · confirmed)
role: mechanism · level: understand · pages: 34

- **Primitive** — orientation · introductory

  A rack-and-pinion actuator is a compact, economical pneumatic option for rotary valves — but its backlash limits it to on/off service, not the precision continuous throttling a diaphragm or piston actuator handles.

  - `cvh-cmp-rack-and-pinion-actuator` (current, Subject-Matter Index — Control Valve Handbook ch3.md)
  - template: `slide--role-mechanism` — ...
  - slideCount: 1 (stage2)
  - pages: 34
```

**Fix applied:** `primitiveBlock()` and the pre-migration flat-shape fallback both rewritten to use a real top-level `- ` bullet with a 2-space-indented continuation paragraph and nested bullet list — `resolvedSourceLines()`'s `indent` parameter is now always a real, list-nesting-consistent prefix, never bare cosmetic whitespace.

### Defect 2 — an umbrella slide's two concepts looked unrelated

**Symptom:** `cvb.actuator.manual-electric` (#5) and `cvb.actuator.rack-and-pinion` (#6) both show `pages: 34` in their meta line, but nothing else connects them — they render as two fully separate, sequentially-numbered items. A reader would have to notice the matching page number themselves to realize Stage 3 composes these onto ONE physical slide file, not two.

**Trace:** this is a real product of the split done last turn (the manual-electric/rack-and-pinion split, deliberately sharing page 34 as an umbrella rather than triggering a whole-course renumber) meeting a `packet-doc.js` that had no concept of "shared page" at all — it rendered every `keyConcepts` entry independently, with no cross-referencing logic. **Introduced when `packet-doc.js` was first written**, surfaced by real data only once a genuine umbrella pair existed to render (the split from last turn is what created that first real case).

**Fix applied:** `moduleSection()` now builds a page -> concept-index map before rendering, and `conceptSection()` takes a new `sharedWith` parameter — a concept whose page(s) overlap another's now renders:

```
**5. cvb.actuator.manual-electric** (introduces · confirmed)
role: nomenclature · level: remember · pages: 34

> [!tip] Umbrella slide — shares this page with #6 `cvb.actuator.rack-and-pinion`. One physical slide, not two.

> [!warning] 3+ components cited — worth a human check on whether this is genuinely one competency.

- **Primitive** — orientation · introductory
  ...
```

...and symmetrically on #6, naming #5 back. Verified: the only pair in all four regenerated CVB packets that gets this note is #5/#6 in `cvb-ch2-m3` — no other concept in CVB shares a page (confirmed structurally in Step 3 below: 50 concepts, 50 planned slide-content-units, only this one page holds two).

### What did NOT need fixing

The chapter (`###`) -> module (numbered subsection) -> concept (numbered, bold header) -> primitive (nested bullet) hierarchy itself reads clearly once the two fixes above landed: granularity/revised callouts sit immediately under the concept header where a reviewer scanning down the document will see them before the content; activities interleave at their real position; check slides render clearly; resolved citations show real `teaches` text, not just bare ids. Re-read all four regenerated chapter packets end to end after the fix — no further structural confusion found.

## Step 3 — Run `flattenOriginateSlidePlan` against real CVB data

First real run of this function against production data (previously only exercised by a hand-built 3-concept fixture). Exported it from `prompts.js` so it could be called directly, then ran it against every one of CVB's 9 modules' real `keyConcepts` (post-migration, so each concept's `primitives[]` is the real array, not a derived stand-in).

### Full output, all 9 modules

```json
[
 {
  "module": "cvb-ch1-m1",
  "slidesPlanned": 6,
  "conceptCount": 6,
  "plan": [
   {
    "slideFile": "cvb-001.html",
    "page": 1,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.intro.feedback-loop",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-002.html",
    "page": 2,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.intro.sliding-stem-overview",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-003.html",
    "page": 3,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.intro.sliding-stem-parts",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-004.html",
    "page": 4,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.intro.body-style-variants",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-005.html",
    "page": 5,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.intro.bonnet-packing-arrangement",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-006.html",
    "page": 6,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.intro.actuator-types",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   }
  ]
 },
 {
  "module": "cvb-ch1-m2",
  "slidesPlanned": 6,
  "conceptCount": 6,
  "plan": [
   {
    "slideFile": "cvb-008.html",
    "page": 8,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.rotary.overview",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-009.html",
    "page": 9,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.rotary.closure-members",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-010.html",
    "page": 10,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.rotary.actuator-mechanism",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-011.html",
    "page": 11,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.characteristic.cage-shape",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-012.html",
    "page": 12,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.characteristic.inherent-curves",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-013.html",
    "page": 13,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.performance.deadband",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   }
  ]
 },
 {
  "module": "cvb-ch2-m1",
  "slidesPlanned": 6,
  "conceptCount": 6,
  "plan": [
   {
    "slideFile": "cvb-015.html",
    "page": 15,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.bodystyle.globe-variants",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-016.html",
    "page": 16,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.intro.body-style-variants",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-017.html",
    "page": 17,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.rotary.closure-members",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-018.html",
    "page": 18,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.rotary.closure-members",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-019.html",
    "page": 19,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.bodystyle.special-purpose",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-020.html",
    "page": 20,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.bodystyle.end-connections",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   }
  ]
 },
 {
  "module": "cvb-ch2-m2",
  "slidesPlanned": 6,
  "conceptCount": 6,
  "plan": [
   {
    "slideFile": "cvb-022.html",
    "page": 22,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.sealing.bonnet-types",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-023.html",
    "page": 23,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.sealing.bellows-bonnet",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-024.html",
    "page": 24,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.intro.bonnet-packing-arrangement",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-025.html",
    "page": 25,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.sealing.environmental-packing",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-026.html",
    "page": 26,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.sealing.packing-selection",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-027.html",
    "page": 27,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.sealing.emissions-standards-awareness",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   }
  ]
 },
 {
  "module": "cvb-ch2-m3",
  "slidesPlanned": 6,
  "conceptCount": 6,
  "plan": [
   {
    "slideFile": "cvb-029.html",
    "page": 29,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.characteristic.inherent-curves",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-030.html",
    "page": 30,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.characteristic.contoured-plug",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-031.html",
    "page": 31,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.trim.guiding-and-capacity",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-032.html",
    "page": 32,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.intro.actuator-types",
      "partIndex": 0,
      "partCount": 2
     }
    ]
   },
   {
    "slideFile": "cvb-033.html",
    "page": 33,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.intro.actuator-types",
      "partIndex": 1,
      "partCount": 2
     }
    ]
   },
   {
    "slideFile": "cvb-034.html",
    "page": 34,
    "itemCount": 2,
    "items": [
     {
      "competencyId": "cvb.actuator.manual-electric",
      "partIndex": 0,
      "partCount": 1
     },
     {
      "competencyId": "cvb.actuator.rack-and-pinion",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   }
  ]
 },
 {
  "module": "cvb-ch3-m1",
  "slidesPlanned": 5,
  "conceptCount": 5,
  "plan": [
   {
    "slideFile": "cvb-036.html",
    "page": 36,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.accessory.positioner-mechanism",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-037.html",
    "page": 37,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.accessory.analog-ip-positioner",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-038.html",
    "page": 38,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.accessory.digital-valve-controller",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-039.html",
    "page": 39,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.accessory.ip-transducer",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-040.html",
    "page": 40,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.accessory.volume-booster",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   }
  ]
 },
 {
  "module": "cvb-ch3-m2",
  "slidesPlanned": 5,
  "conceptCount": 5,
  "plan": [
   {
    "slideFile": "cvb-042.html",
    "page": 42,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.accessory.pneumatic-controller",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-043.html",
    "page": 43,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.accessory.position-transmitter",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-044.html",
    "page": 44,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.safety.solenoid-valve-types",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-045.html",
    "page": 45,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.safety.voting-architecture",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-046.html",
    "page": 46,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.safety.trip-and-manual-override",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   }
  ]
 },
 {
  "module": "cvb-ch4-m1",
  "slidesPlanned": 6,
  "conceptCount": 6,
  "plan": [
   {
    "slideFile": "cvb-048.html",
    "page": 48,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.performance.process-variability",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-049.html",
    "page": 49,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.performance.test-loop",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-050.html",
    "page": 50,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.performance.deadband",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-051.html",
    "page": 51,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.performance.response-time",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-052.html",
    "page": 52,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.performance.installed-gain",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-053.html",
    "page": 53,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.bodystyle.control-range-by-style",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   }
  ]
 },
 {
  "module": "cvb-ch4-m2",
  "slidesPlanned": 4,
  "conceptCount": 4,
  "plan": [
   {
    "slideFile": "cvb-055.html",
    "page": 55,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.performance.economics-of-control",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-056.html",
    "page": 56,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.performance.signature-series-testing",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-057.html",
    "page": 57,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.performance.signature-diagnosis",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   },
   {
    "slideFile": "cvb-058.html",
    "page": 58,
    "itemCount": 1,
    "items": [
     {
      "competencyId": "cvb.performance.valvelink-interface",
      "partIndex": 0,
      "partCount": 1
     }
    ]
   }
  ]
 }
]
```

### Grouping results

| Module | Concepts | Slides planned | Non-trivial grouping |
| --- | --- | --- | --- |
| cvb-ch1-m1 | 6 | 6 | none — 1:1 throughout |
| cvb-ch1-m2 | 6 | 6 | none — 1:1 throughout |
| cvb-ch2-m1 | 6 | 6 | none — 1:1 throughout |
| cvb-ch2-m2 | 6 | 6 | none — 1:1 throughout |
| cvb-ch2-m3 | 6 | 6 | **yes — see below** |
| cvb-ch3-m1 | 5 | 5 | none — 1:1 throughout |
| cvb-ch3-m2 | 5 | 5 | none — 1:1 throughout |
| cvb-ch4-m1 | 6 | 6 | none — 1:1 throughout |
| cvb-ch4-m2 | 4 | 4 | none — 1:1 throughout |

**cvb-ch2-m3 is the only module with non-trivial grouping**, and it produces exactly the two shapes expected from last turn's split/merge work — nothing new or unexpected:

1. **Multi-part primitive** — `cvb.intro.actuator-types` (the concept merged last turn from two separate `develops` slots) has ONE primitive whose `pages: [32, 33]` — the function correctly splits it into TWO slide-plan entries, `cvb-032.html` (`partIndex: 0, partCount: 2`) and `cvb-033.html` (`partIndex: 1, partCount: 2`), both attributed to the same competencyId. **Traces to:** the merge fix applied last turn to restore the 4-6 keyConcepts bound after the manual-electric split — this is that fix's content correctly reaching Stage 3, not a new issue.
2. **Umbrella slide** — `cvb.actuator.manual-electric` and `cvb.actuator.rack-and-pinion` (the two concepts created by last turn's split, both `pages: [34]`) group into ONE slide-plan entry, `cvb-034.html`, with `itemCount: 2`. **Traces to:** the split itself (deliberately sharing page 34 rather than renumbering) — again, that design decision correctly reaching Stage 3, not a new issue.

Every other one of CVB's concepts outside this module, plus `cvb-ch2-m3`'s own first three concepts, maps exactly 1 concept -> 1 primitive -> 1 slide, confirming the documented expectation directly: "most slots will still land as one concept, one slide, because that's what most content actually needs, not because the rule requires it."

### Structural integrity check

Verified programmatically, all 9 modules:

- **Plan pages exactly equal `module.pages`** — no page the plan skips, no page the plan invents. Confirmed `true` for every module.
- **No duplicate slide files, no gaps** in any module's plan.
- **Filenames well-formed** — every `slideFile` matches `${slidePrefix}${page, zero-padded to 3}.html` exactly (`cvb-034.html`, not `cvb-34.html` or similar) for all 50 concept-page pairs.

```
all modules: plan pages exactly match module.pages, filenames well-formed: true
```

**Nothing flagged as wrong in this step.** The two non-trivial groupings found are exactly the two the split/merge from last turn should have produced — verified by construction, not just by absence of an error — and every other concept behaves as documented. This is the first real validation of `flattenOriginateSlidePlan` against production data and it holds.

## Summary

| Step | Result | Issues found | Traced to |
| --- | --- | --- | --- |
| 1. Migrate 50 concepts to `primitives[]` | 0/9 modules incomplete, 0/50 primitives incomplete — no regression | `templateRationale` is mechanically generic, not concept-specific (named, not hidden) | The migration script's own design choice — acceptable for a mechanical migration, would need real authoring for new content |
| 2. Packet navigability spot-check | Fixed, not just reported | (a) primitive blocks were invalid/fragile Markdown structure; (b) umbrella-slide pairs had no cross-reference | Both traced to `packet-doc.js`'s original implementation (previous turn), surfaced by real migrated + split data |
| 3. Run Stage 3's `flattenOriginateSlidePlan` on real data | Validated — matches expected grouping exactly, full structural integrity confirmed | None | N/A — the two non-trivial groupings found are the correct, expected effect of last turn's split/merge, not new problems |

All three steps done. `packet-doc.js` and `course-model.js` fixes committed to PipelineConsole (`07de035`); the migration, regenerated packets, and regenerated `course-data.js` committed to EmersonWorkbench alongside this report.
