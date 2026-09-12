---
title: Stage 3 Slide Plan — Control Valve Basics
type: review
tags:
  - stage3-slideplan
  - pipeline
course: Control Valve Basics
updated: 2026-09-11
---

# Stage 3 Slide Plan — Control Valve Basics

> [!note] What this is, and what it is not
> This is `flattenOriginateSlidePlan` run for real against CVB's full, current
> `course.json` (post-migration to `primitives[]`, post all 8 template-fit
> fixes, post the manual-electric/rack-and-pinion split, post Module 0) — the
> real page-ordered grouping of every primitive into its physical slide file,
> including the two non-trivial groupings (a multi-part primitive spanning two
> slides, and an umbrella slide sharing one page between two concepts). This is
> the "shooting script" the next stage would compose HTML against.
>
> **What this is NOT:** real slide HTML, on-screen titles, or a `build/
> manifest.js` — those require actually composing each slide (choosing a real
> figure, writing on-screen text per the Style Guide, giving it a real title),
> which is Stage 3's own separate, larger authoring step and has not been run.
> `flattenOriginateSlidePlan` produces the grouping plan that step consumes; it
> does not compose anything itself.

## Counts

| | Count |
| --- | --- |
| Total slides | **64** |
| Module 0 (bookend, front matter) | 4 |
| Concept slides (9 real teaching modules) | 51 |
| Check slides | 9 |
| Unique competencies | 44 |
| Real teaching modules | 9 (+ Module 0 as a non-counted bookend) |

Sequential, page 1 through 64, no gaps or duplicates — verified programmatically.

## Full slide sequence

### Module 0 — Before We Start

**cvb-001.html** (page 1) — Title Slide

**cvb-002.html** (page 2) — Course Roadmap

**cvb-003.html** (page 3) — Facility & Safety

**cvb-004.html** (page 4) — Sign-In & Housekeeping

### cvb-ch1-m1

**cvb-005.html** (page 5)
- `cvb.intro.feedback-loop` — [understand · mechanism] → `slide--role-mechanism`
  "Process control means automatically keeping something — a flow, a pressure, a temperature — at the value it should be. A control valve is the part that makes the correction: a sensor reads the real value, it's compared to the target, and the valve's stem moves to close the gap — this loop is what "process control" means in practice."

**cvb-006.html** (page 6)
- `cvb.intro.sliding-stem-overview` — [remember · nomenclature] → `slide--role-nomenclature`
  "A sliding-stem valve moves its plug straight up and down through a globe- or angle-style body — the most common control valve construction."

**cvb-007.html** (page 7)
- `cvb.intro.sliding-stem-parts` — [remember · nomenclature] → `slide--role-nomenclature`
  "From actuator to body: stem, packing flange, bonnet, piston ring, plug, cage, and seat ring stack in that order — the assembly sequence every sliding-stem valve follows."

**cvb-008.html** (page 8)
- `cvb.intro.body-style-variants` — [understand · contrast] → `slide--role-contrast`
  "An angle body turns the flow path 90° for erosive or high-pressure-drop service; a three-way body combines or diverts flow through a single valve instead of the straight-through path a standard globe body uses."

**cvb-009.html** (page 9)
- `cvb.intro.bonnet-packing-arrangement` — [understand · contrast] → `slide--role-contrast`
  "A conventional bonnet packs the stem with PTFE or graphite rings in the packing box; a bellows-seal bonnet replaces packing entirely with a welded metal bellows for zero-leakage service on hazardous or toxic process fluids."

**cvb-010.html** (page 10)
- `cvb.intro.actuator-types` — [understand · application] → `slide--role-application-case`
  "A direct-acting actuator pushes the stem down with loading pressure and returns it with the spring; a reverse-acting actuator does the opposite. A piston actuator trades the spring for a second pressure connection, for higher thrust and faster stroking."

**cvb-011.html** (page 11) — Check (composed by Stage 3, not planned here)

### cvb-ch1-m2

**cvb-012.html** (page 12)
- `cvb.rotary.overview` — [understand · nomenclature] → `slide--role-nomenclature`
  "A rotary control valve turns a ball, disk, or plug across the flow path instead of sliding a stem through it — the same final-control-element job, a different motion."

**cvb-013.html** (page 13)
- `cvb.rotary.closure-members` — [understand · application] → `slide--role-application-case`
  "A segmented ball, a V-notch ball, and an eccentric disk are the three standard rotary closure members — the V-notch's contoured cut gives it the widest rangeability of the three."

**cvb-014.html** (page 14)
- `cvb.rotary.actuator-mechanism` — [understand · mechanism] → `slide--role-mechanism`
  "A rotary actuator's lever and shaft convert the same linear stem motion a sliding-stem actuator produces into the disk or ball rotation the closure member actually needs."

**cvb-015.html** (page 15)
- `cvb.characteristic.cage-shape` — [understand · mechanism] → `slide--role-mechanism`
  "A cage's window shape — linear, equal-percentage, or quick-opening — sets how flow changes as the valve strokes, independent of the body style around it."

**cvb-016.html** (page 16)
- `cvb.characteristic.inherent-curves` — [analyze · application] → `slide--role-application`
  "Quick-opening gives maximum flow change near the closed position, linear gives equal flow change per unit of travel, and equal-percentage gives equal PERCENTAGE change per unit of travel — read the curve to tell which characteristic a valve has."

**cvb-017.html** (page 17)
- `cvb.performance.deadband` — [understand · mechanism] → `slide--role-mechanism`
  "Deadband is the range a controller's output can reverse through before the valve produces any observable change — friction and backlash are its usual causes."

**cvb-018.html** (page 18) — Check (composed by Stage 3, not planned here)

### cvb-ch2-m1

**cvb-019.html** (page 19)
- `cvb.bodystyle.globe-variants` — [understand · application] → `slide--role-application-case`
  "Single-ported globe bodies are the simplest and tightest-shutoff; double-ported (reverse-acting) bodies balance plug forces across two ports for less required thrust; cage-style balanced-plug bodies use the cage itself to balance pressure and can carry a soft seat for bubble-tight shutoff."

**cvb-020.html** (page 20)
- `cvb.intro.body-style-variants` — [understand · application] → `slide--role-application-case`
  "Angle and bar-stock bodies extend the basic globe body for specialty service (erosive/slurry flow, high-purity or highly corrosive fluids); a three-way body combines two inlet streams or diverts one inlet to either of two outlets, one body doing the job two two-way valves and a manifold would otherwise do."

**cvb-021.html** (page 21)
- `cvb.rotary.closure-members` — [understand · contrast] → `slide--role-contrast`
  "An offset-shaft butterfly disk swings clear of the seat as it opens, reducing seat wear versus a centered shaft; a high-performance butterfly adds a second, radial offset for a tighter, longer-wearing seal at higher pressure."

**cvb-022.html** (page 22)
- `cvb.rotary.closure-members` — [understand · contrast] → `slide--role-contrast`
  "A full-port ball valve (on trunnion mounts, for larger sizes) gives an unrestricted straight-through bore when open; an eccentric plug swings out of the seat on an off-center shaft, the same wear-reducing idea a butterfly's offset shaft uses."

**cvb-023.html** (page 23)
- `cvb.bodystyle.special-purpose` — [apply · application] → `slide--role-application-case`
  "Anti-cavitation and low-noise trim options quiet or eliminate the damage a high pressure-drop can cause; a multi-port flow-selector valve routes flow among several destinations from one body; a pressure-assisted seal uses process pressure itself to improve shutoff."

**cvb-024.html** (page 24)
- `cvb.bodystyle.end-connections` — [remember · nomenclature] → `slide--role-nomenclature`
  "Bolted-flange connections bolt to mating pipe flanges and can be unbolted for service; welded connections are welded directly into the pipeline, for higher pressure or leak-critical service, at the cost of cutting the valve out to service it."

**cvb-025.html** (page 25) — Check (composed by Stage 3, not planned here)

### cvb-ch2-m2

**cvb-026.html** (page 26)
- `cvb.sealing.bonnet-types` — [remember · nomenclature] → `slide--role-nomenclature`
  "A standard bonnet bolts to the body with stud bolts; bonnet variations extend that basic shape for extra clearance or insulation; a fabricated extension bonnet lengthens the packing box away from the process fluid, for cryogenic or very hot service."

**cvb-027.html** (page 27)
- `cvb.sealing.bellows-bonnet` — [understand · mechanism] → `slide--role-mechanism`
  "A welded-leaf bellows stacks thin metal diaphragms into a flexible seal; a mechanically-formed bellows is hydroformed from tubing instead — both give a fully welded, zero-leakage path around the stem."

**cvb-028.html** (page 28)
- `cvb.intro.bonnet-packing-arrangement` — [understand · contrast] → `slide--role-contrast`
  "A single PTFE V-ring packing arrangement is the simple baseline; the full packing-material arrangement (rings, followers, springs) shown in cross-section is what actually loads and maintains that seal as the stem strokes and wears."

**cvb-029.html** (page 29)
- `cvb.sealing.environmental-packing` — [understand · mechanism] → `slide--role-mechanism`
  "ENVIRO-SEAL packing systems add a live-loaded spring to a PTFE, duplex (PTFE-plus-graphite), or graphite ULF (ultra-low fugitive) arrangement — for sliding-stem or rotary valves alike — to hold sealing force as packing wears, instead of relying on a one-time bolt torque."

**cvb-030.html** (page 30)
- `cvb.sealing.packing-selection` — [evaluate · application] → `slide--role-application`
  "Match the packing system to the service: standard PTFE for general-purpose duty, an ENVIRO-SEAL live-loaded system where emissions matter, graphite where temperature rules PTFE out — sliding-stem and rotary valves each have their own selection chart."

**cvb-031.html** (page 31)
- `cvb.sealing.emissions-standards-awareness` — [understand · caution] → `slide--tmpl-caution`
  "Regulations require periodically testing valves for leaks into the air (called fugitive emissions) — the programs that do this are known as VOC/LDAR, and ISO 15848-1 is the standard a packing system has to pass to qualify. Picking an unqualified packing for the service can mean failing that test, not just a leak on the bench."

**cvb-032.html** (page 32) — Check (composed by Stage 3, not planned here)

### cvb-ch2-m3

**cvb-033.html** (page 33)
- `cvb.characteristic.inherent-curves` — [understand · mechanism] → `slide--role-mechanism`
  "A characterized cage shapes its window profile to produce a specific curve directly — the physical mechanism behind the quick-opening/linear/equal-percentage curves already introduced."

**cvb-034.html** (page 34)
- `cvb.characteristic.contoured-plug` — [understand · mechanism] → `slide--role-mechanism`
  "A contoured plug shapes the same curve types by varying its own profile against a fixed seat, rather than through a cage window; quick-opening construction is the simplest case — a flat-faced plug that uncovers flow area almost immediately."

**cvb-035.html** (page 35)
- `cvb.trim.guiding-and-capacity` — [remember · nomenclature] → `slide--role-nomenclature`
  "Cage-guided trim rides inside the cage bore; plug-guided trim rides in machined guides in the body itself — two different ways of keeping the plug centered on its seat. A reduced-capacity adapter lets one body size handle a smaller trim than its full-size rating."

**cvb-036.html** (page 36)
- `cvb.intro.actuator-types` [part 1 of 2] — [understand · mechanism] → `slide--role-mechanism`
  "A field-reversible actuator can be converted between direct- and reverse-acting in the field, without a different casting, and the same spring-and-diaphragm principle drives a rotary valve's diaphragm actuator, just converted to rotation through a lever. A double-acting piston actuator uses supply pressure on both sides for higher thrust in either direction; its rotary equivalent, a scotch-yoke piston actuator, converts that same linear motion into rotation the piston way, just as the diaphragm actuator does through its lever."

**cvb-037.html** (page 37)
- `cvb.intro.actuator-types` [part 2 of 2] — [understand · mechanism] → `slide--role-mechanism`
  "A field-reversible actuator can be converted between direct- and reverse-acting in the field, without a different casting, and the same spring-and-diaphragm principle drives a rotary valve's diaphragm actuator, just converted to rotation through a lever. A double-acting piston actuator uses supply pressure on both sides for higher thrust in either direction; its rotary equivalent, a scotch-yoke piston actuator, converts that same linear motion into rotation the piston way, just as the diaphragm actuator does through its lever."

**cvb-038.html** (page 38) — umbrella, 2 concepts share this slide
- `cvb.actuator.manual-electric` — [remember · nomenclature] → `slide--role-nomenclature`
  "A handwheel gives manual override on a sliding-stem or rotary actuator without pneumatic supply; an electric actuator replaces pneumatic supply with a motor, for sites with no air system."
- `cvb.actuator.rack-and-pinion` — [understand · mechanism] → `slide--role-mechanism`
  "A rack-and-pinion actuator is a compact, economical pneumatic option for rotary valves — but its backlash limits it to on/off service, not the precision continuous throttling a diaphragm or piston actuator handles."

**cvb-039.html** (page 39) — Check (composed by Stage 3, not planned here)

### cvb-ch3-m1

**cvb-040.html** (page 40)
- `cvb.accessory.positioner-mechanism` — [understand · mechanism] → `slide--role-mechanism`
  "A pneumatic positioner closes its own local loop: it compares actual stem position (fed back through a cam and beam) to the command signal at a flapper/nozzle, and drives a relay until the two agree."

**cvb-041.html** (page 41)
- `cvb.accessory.analog-ip-positioner` — [understand · mechanism] → `slide--role-mechanism`
  "An analog I/P positioner runs the same feedback loop from a 4-20 mA current signal instead of a pneumatic one, converting current to pneumatic output through the same nozzle/flapper/relay stages."

**cvb-042.html** (page 42)
- `cvb.accessory.digital-valve-controller` — [remember · nomenclature] → `slide--role-nomenclature`
  "A digital valve controller replaces the positioner's mechanical feedback linkage with a microprocessor — same job (drive the valve to command), added diagnostics."

**cvb-043.html** (page 43)
- `cvb.accessory.ip-transducer` — [understand · mechanism] → `slide--role-mechanism`
  "An I/P transducer converts a current signal to a pneumatic one with no position feedback at all — simpler and cheaper than a positioner, appropriate where high positioning accuracy isn't required."

**cvb-044.html** (page 44)
- `cvb.accessory.volume-booster` — [understand · application] → `slide--role-application`
  "A volume booster amplifies the pneumatic flow available to the actuator without changing the signal's pressure — needed when a large or fast-stroking actuator would otherwise starve the positioner's own limited output capacity."

**cvb-045.html** (page 45) — Check (composed by Stage 3, not planned here)

### cvb-ch3-m2

**cvb-046.html** (page 46)
- `cvb.accessory.pneumatic-controller` — [understand · mechanism] → `slide--role-mechanism`
  "A standalone pneumatic controller closes an entire control loop right at the valve, with no central control-room computer system (a DCS or PLC) needed — it compares the measured process value to a set point and drives the valve directly. Adding reset and rate elements to a proportional-only design corrects lingering offset and reacts faster to a changing load."

**cvb-047.html** (page 47)
- `cvb.accessory.position-transmitter` — [understand · contrast] → `slide--role-contrast`
  "A position transmitter reports actual valve position back to the control system — 4-20 mA if wired, a 0-100% digital signal if wireless — so the control room can see where the valve really is, not just where it was told to go."

**cvb-048.html** (page 48)
- `cvb.safety.solenoid-valve-types` — [understand · contrast] → `slide--role-contrast`
  "A spring-return SOV drives a single-acting actuator (3-port symbol); a double-acting SOV drives an actuator that needs pressure on both sides (4-port symbol)."

**cvb-049.html** (page 49)
- `cvb.safety.solenoid-actuation-type` — [understand · contrast] → `slide--role-contrast`
  "A direct-acting SOV switches with less flow capacity but no minimum pressure; a pilot-operated SOV needs a minimum supply pressure but handles far more flow."

**cvb-050.html** (page 50)
- `cvb.safety.voting-architecture` — [understand · application] → `slide--role-application-case`
  "A 1oo2 (one-out-of-two) architecture trips if either of two SOVs sees a demand — favoring safety, more nuisance trips. A 2oo2 architecture needs both to agree — favoring uptime, at the cost of a slower response to a real single-SOV failure."

**cvb-051.html** (page 51)
- `cvb.safety.trip-and-manual-override` — [remember · nomenclature] → `slide--role-nomenclature`
  "A trip valve shows a distinct physical state once a safety system actually trips it; a switching valve routes pneumatic signal for control logic rather than process flow. A side- or top-mounted handwheel lets a technician manually stroke an actuator with no air supply at all."

**cvb-052.html** (page 52) — Check (composed by Stage 3, not planned here)

### cvb-ch4-m1

**cvb-053.html** (page 53)
- `cvb.performance.process-variability` — [understand · mechanism] → `slide--role-mechanism`
  "Process variability is the width of the distribution of a measured value around its target, not where the target itself sits — a tightly-controlled loop has a narrow distribution, a poorly-controlled one a wide one, both centered the same place."

**cvb-054.html** (page 54)
- `cvb.performance.test-loop` — [remember · nomenclature] → `slide--role-nomenclature`
  "Every performance number in this chapter — deadband, response time, gain, the economics — comes from real bench testing on a physical test loop, not a simulation."

**cvb-055.html** (page 55)
- `cvb.performance.deadband` — [understand · mechanism] → `slide--role-mechanism`
  "Testing three real valve designs open-loop shows deadband directly: each valve's output lags its command by a different amount before it moves at all — the same deadband concept already introduced, now measured and compared."

**cvb-056.html** (page 56)
- `cvb.performance.response-time` — [understand · application] → `slide--role-application`
  "Dead time and 63%-response time both vary by valve/actuator/positioner combination — a faster positioner or a smaller actuator generally responds quicker, but the only way to know a specific configuration's numbers is to test it."

**cvb-057.html** (page 57)
- `cvb.performance.installed-gain` — [analyze · mechanism] → `slide--role-mechanism`
  "Installed gain is the slope of the installed flow-characteristic curve at a given travel — where that slope changes sharply across the travel range, the loop's tuning has to compromise between the high-gain and low-gain regions."

**cvb-058.html** (page 58)
- `cvb.bodystyle.control-range-by-style` — [analyze · application] → `slide--role-application`
  "A globe valve holds a usable, controllable gain over a wider share of its travel than a butterfly valve does for the same duty — a wider control range, read directly off the installed-gain comparison."

**cvb-059.html** (page 59) — Check (composed by Stage 3, not planned here)

### cvb-ch4-m2

**cvb-060.html** (page 60)
- `cvb.performance.economics-of-control` — [evaluate · application] → `slide--role-application`
  "Across three real valve designs under the same random load disturbance, the better-controlling valve holds process variability closer to the theoretical minimum as tuning gets more aggressive — a measurable economic argument for choosing it, not just a qualitative one."

**cvb-061.html** (page 61)
- `cvb.performance.signature-series-testing` — [understand · mechanism] → `slide--role-mechanism`
  "A Signature Series factory test runs an assembled valve through ValveLink software, recording its own friction/force signature as a baseline for comparison against a later, in-service test of the same valve."

**cvb-062.html** (page 62)
- `cvb.performance.signature-diagnosis` — [apply · application] → `slide--role-application`
  "Overlaying a new in-service signature on the original baseline shows an increased span where friction has risen — the same comparison a technician would run to confirm a valve actually needs service, not just guess from symptoms."

**cvb-063.html** (page 63)
- `cvb.performance.valvelink-interface` — [remember · nomenclature] → `slide--role-nomenclature`
  "ValveLink's Total Scan view shows the signature graph directly; its Valve Step Response view runs and displays a step test — the two diagnostic screens a technician actually works from."

**cvb-064.html** (page 64) — Check (composed by Stage 3, not planned here)

## Non-trivial groupings (flagged for review)

- **cvb-036.html** — part 1 of 2 of `cvb.intro.actuator-types`'s primitive (spans pages 36, 37). Confirm the content splits cleanly across these slides before composing.
- **cvb-037.html** — part 2 of 2 of `cvb.intro.actuator-types`'s primitive (spans pages 36, 37). Confirm the content splits cleanly across these slides before composing.
- **cvb-038.html** — umbrella slide: `cvb.actuator.manual-electric` + `cvb.actuator.rack-and-pinion`. Confirm both concepts genuinely share one visual before composing.

## Next step (not taken here)

Actually composing these 64 slides — real HTML, real figures resolved from the
Component Index, on-screen titles/text per the Style Guide, and a real
`build/manifest.js` — is Stage 3's own authoring pass (`buildStage3OriginatePrompt`
in `PipelineConsole/src/main/runners/prompts.js`), run per module. That has not
been executed for CVB; this plan is what it would consume.
