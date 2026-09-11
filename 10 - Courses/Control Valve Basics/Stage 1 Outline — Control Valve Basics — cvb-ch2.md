---
title: Stage 1 Outline — Control Valve Basics
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Basics
chapter: cvb-ch2
updated: 2026-09-11
---

# Stage 1 Outline — cvb-ch2 (Valve and Actuator Types)

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

### 1. cvb-ch2-m1 — Body Styles & End Connections

**Objective:** Distinguish globe and rotary valve body styles by construction and typical service, and identify the two standard end-connection types.

level target: `apply` · audience stage: `orientation` · builds on: cvb-ch1-m1, cvb-ch1-m2

**Stakes (opening hook):** Body style sets a valve's pressure-drop capability, noise/cavitation resistance, and maintainability — picking the wrong one for the service means re-specifying (and re-buying) the valve later.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | Single-ported globe bodies are the simplest and tightest-shutoff; double-ported (reverse-acting) bodies balance plug forces across two ports for less required thrust; cage-style balanced-plug bodies use the cage itself to balance pressure and can carry a soft seat for bubble-tight shutoff. | 15 | role: contrast · level: understand · cvh-cmp-single-ported-globe-valve-body, cvh-cmp-cage-style-trim-balanced-plug-soft-seat, cvh-cmp-double-ported-globe-valve-body-reverse-acting |
| 2 | Angle and bar-stock bodies extend the basic globe body for specialty service (erosive/slurry flow, high-purity or highly corrosive fluids); a three-way body combines two inlet streams or diverts one inlet to either of two outlets, one body doing the job two two-way valves and a manifold would otherwise do. | 16 | role: application · level: understand · cvh-cmp-flanged-angle-valve-body, cvh-cmp-bar-stock-valve-body, cvh-cmp-three-way-globe-valve |
| 3 | An offset-shaft butterfly disk swings clear of the seat as it opens, reducing seat wear versus a centered shaft; a high-performance butterfly adds a second, radial offset for a tighter, longer-wearing seal at higher pressure. | 17 | role: contrast · level: understand · cvh-cmp-butterfly-shaft-offset-disc-center, cvh-cmp-butterfly-control-valve, cvh-cmp-high-performance-butterfly-valve |
| 4 | A full-port ball valve (on trunnion mounts, for larger sizes) gives an unrestricted straight-through bore when open; an eccentric plug swings out of the seat on an off-center shaft, the same wear-reducing idea a butterfly's offset shaft uses. | 18 | role: contrast · level: understand · cvh-cmp-segmented-v-notch-ball, cvh-cmp-eccentric-plug-valve-body, cvh-cmp-full-port-ball-control-valve, cvh-cmp-full-port-ball-valve-trunnion |
| 5 | **→ Activity — Body Style ID** | — | small-group · 15 min — Sort a mixed set of real valve photos/cutaways (globe: single-ported, double-ported, cage-style; rotary: butterfly, ball, eccentric plug) by body-style family and name the family's typical service advantage. |
| 6 | Anti-cavitation and low-noise trim options quiet or eliminate the damage a high pressure-drop can cause; a multi-port flow-selector valve routes flow among several destinations from one body; a pressure-assisted seal uses process pressure itself to improve shutoff. | 19 | role: application · level: apply · cvh-cmp-ball-valve-cavitation-noise-options, cvh-cmp-multi-port-flow-selector-valve, cvh-cmp-pressure-assisted-seal-configuration |
| 7 | Bolted-flange connections bolt to mating pipe flanges and can be unbolted for service; welded connections are welded directly into the pipeline, for higher pressure or leak-critical service, at the cost of cutting the valve out to service it. | 20 | role: nomenclature · level: remember · cvh-cmp-bolted-flange-end-connections, cvh-cmp-welded-end-connections |
| 8 | Check — knowledge check | 21 | — |

### 2. cvb-ch2-m2 — Bonnets, Packing & Environmental Sealing

**Objective:** Identify bonnet and packing-system variants, and select an appropriate packing system for a given service and emissions requirement.

level target: `evaluate` · audience stage: `orientation` · builds on: cvb-ch1-m1

**Stakes (opening hook):** Picking the wrong packing system for a VOC-regulated or cryogenic service means a fugitive-emissions failure discovered on an audit, not on the bench.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | A standard bonnet bolts to the body with stud bolts; bonnet variations extend that basic shape for extra clearance or insulation; a fabricated extension bonnet lengthens the packing box away from the process fluid, for cryogenic or very hot service. | 22 | role: nomenclature · level: remember · cvh-cmp-typical-bonnet-flange-stud-bolts, cvh-cmp-bonnet-variations, cvh-cmp-fabricated-extension-bonnet |
| 2 | A welded-leaf bellows stacks thin metal diaphragms into a flexible seal; a mechanically-formed bellows is hydroformed from tubing instead — both give a fully welded, zero-leakage path around the stem. | 23 | role: mechanism · level: understand · cvh-cmp-enviroseal-bellows-seal-bonnet, cvh-cmp-welded-leaf-bellows, cvh-cmp-mechanically-formed-bellows |
| 3 | A single PTFE V-ring packing arrangement is the simple baseline; the full packing-material arrangement (rings, followers, springs) shown in cross-section is what actually loads and maintains that seal as the stem strokes and wears. | 24 | role: contrast · level: understand · cvh-cmp-packing-material-arrangements-globe, cvh-cmp-single-ptfe-vring-packing |
| 4 | ENVIRO-SEAL packing systems add a live-loaded spring to a PTFE, duplex (PTFE-plus-graphite), or graphite ULF (ultra-low fugitive) arrangement — for sliding-stem or rotary valves alike — to hold sealing force as packing wears, instead of relying on a one-time bolt torque. | 25 | role: mechanism · level: understand · cvh-cmp-enviroseal-ptfe-packing-system, cvh-cmp-enviroseal-duplex-packing-system, cvh-cmp-enviroseal-graphite-ulf-packing-system, cvh-cmp-enviroseal-graphite-packing-rotary |
| 5 | Match the packing system to the service: standard PTFE for general-purpose duty, an ENVIRO-SEAL live-loaded system where emissions matter, graphite where temperature rules PTFE out — sliding-stem and rotary valves each have their own selection chart. | 26 | role: application · level: evaluate · cvh-cmp-sliding-stem-environmental-packing-selection, cvh-cmp-rotary-environmental-packing-selection |
| 6 | **→ Activity — Packing Selection Case** | — | small-group · 18 min — Given three real service scenarios (general-purpose hydrocarbon, VOC-regulated process, cryogenic), select an appropriate packing system and justify the choice against the selection figures just taught. |
| 7 | Regulations require periodically testing valves for leaks into the air (called fugitive emissions) — the programs that do this are known as VOC/LDAR, and ISO 15848-1 is the standard a packing system has to pass to qualify. Picking an unqualified packing for the service can mean failing that test, not just a leak on the bench. | 27 | role: caution · level: understand · cvh-cmp-voc-ldar-measurement-frequency, cvh-cmp-iso15848-1-qualification-requirements |
| 8 | Check — knowledge check | 28 | — |

### 3. cvb-ch2-m3 — Flow Characterization, Trim & Actuator Variety

**Objective:** Explain how cage and plug contour shape a valve's flow characteristic, and identify actuator variants beyond the basic spring-and-diaphragm and piston types.

level target: `understand` · audience stage: `orientation` · builds on: cvb-ch1-m1, cvb-ch1-m2

**Stakes (opening hook):** Misreading which characteristic a trim actually delivers, or which actuator type is installed, means the wrong replacement part gets ordered or the wrong control behavior gets expected from the loop.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | A characterized cage shapes its window profile to produce a specific curve directly — the physical mechanism behind the quick-opening/linear/equal-percentage curves already introduced. | 29 | role: mechanism · level: understand · cvh-cmp-characterized-cages-globe, cvh-cmp-inherent-flow-characteristic-curves |
| 2 | A contoured plug shapes the same curve types by varying its own profile against a fixed seat, rather than through a cage window; quick-opening construction is the simplest case — a flat-faced plug that uncovers flow area almost immediately. | 30 | role: mechanism · level: understand · cvh-cmp-plug-contour-flow-characterization, cvh-cmp-quick-opening-construction |
| 3 | Cage-guided trim rides inside the cage bore; plug-guided trim rides in machined guides in the body itself — two different ways of keeping the plug centered on its seat. A reduced-capacity adapter lets one body size handle a smaller trim than its full-size rating. | 31 | role: nomenclature · level: remember · cvh-cmp-cage-guiding-plug-guiding-cross-section, cvh-cmp-adapter-reduced-flow-capacity |
| 4 | **→ Activity — Characteristic Selection** | — | discussion · 12 min — Given a process scenario (e.g. a valve that must hold near-constant gain across a wide travel range vs. one needing tight shutoff-adjacent control), discuss whether a cage-characterized, contoured-plug, or quick-opening trim fits best, and why. |
| 5 | A field-reversible actuator can be converted between direct- and reverse-acting in the field, without a different casting; the same spring-and-diaphragm principle drives a rotary valve's diaphragm actuator, just converted to rotation through a lever. | 32 | role: mechanism · level: understand · cvh-cmp-field-reversible-multi-spring-actuator, cvh-cmp-diaphragm-actuator-rotary-valve |
| 6 | A double-acting piston actuator uses supply pressure on both sides for higher thrust in either direction; a scotch-yoke piston actuator converts that linear piston motion into rotation for a rotary valve, the piston equivalent of a diaphragm actuator's lever. | 33 | role: mechanism · level: understand · cvh-cmp-double-acting-piston-actuator, cvh-cmp-scotch-yoke-piston-actuator |
| 7 | A handwheel gives manual override on a sliding-stem or rotary actuator without pneumatic supply; a rack-and-pinion actuator is a compact pneumatic option for rotary valves; an electric actuator replaces pneumatic supply with a motor, for sites with no air system. | 34 | role: nomenclature · level: remember · cvh-cmp-manual-actuator-sliding-stem, cvh-cmp-manual-actuator-rotary, cvh-cmp-rack-and-pinion-actuator, cvh-cmp-electric-actuator-sliding-stem, cvh-cmp-electric-actuator-rotary |
| 8 | Check — knowledge check | 35 | — |
