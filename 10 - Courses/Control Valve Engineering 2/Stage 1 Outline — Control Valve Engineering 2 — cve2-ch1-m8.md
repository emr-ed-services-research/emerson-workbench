---
title: Stage 1 Outline — Control Valve Engineering 2
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering 2
chapter: cve2-ch1-m8
updated: 2026-09-15
---

# Stage 1 Outline — cve2-ch1-m8 (SIS Voting Architecture & SIL Compliance)

> [!note] Origination mode
> New territory. Real worked example available in the source itself — the
> HIPPS figure is explicitly framed as "a typical HIPPS in a configuration
> set to meet SIL 3," using 2oo3 voting. Confirmed non-overlapping with
> ch4's SOV/voting-architecture figures already catalogued for other
> courses (per ch12's own Component Index note) — no cross-course
> collision.

### 1. cve2-ch1-m8 — SIS Voting Architecture & SIL Compliance

**Objective:** Architect a voting configuration meeting a required SIL/PFDavg/RRF target, using OREDA final-element failure data to justify where redundancy actually belongs in the loop.

level target: `evaluate` (spans into `create`) · domain: `engineering` · tier: `advanced`

**Roles:** `sizing-eng` only.

**Stakes (opening hook):** OREDA's own failure data says the final control element accounts for roughly half of all SIF failures — sensor (~42%) and logic solver (~8%) combined are barely more than that one component alone. An engineer who spends a redundancy budget on triplicating the sensor while leaving the final element single is solving the wrong half of the problem, and the data says exactly why.

| # | Item | Detail |
| --- | --- | --- |
| 1 | The layers-of-protection model separates six layers into "Prevent" (Process Control/BPCS, Operator Intervention, SIS) and "Mitigate" (Active Protection, Passive Protection, Emergency Response) — an SIS's job is specifically to prevent an emergency shutdown scenario, not to clean up after one starts. | role: mechanism · level: understand · cvh-cmp-layers-of-protection |
| 2 | An SIS is built from exactly three components in a loop — sensor, logic solver, final control element — the same three-part structure as an ordinary process-control loop, but framed and rated for safety response rather than routine control. | role: mechanism · level: understand · cvh-cmp-sis-components-loop |
| 3 | SIL rating (1-4) is set by a required Risk Reduction Factor (RRF) and its corresponding Probability of Failure on Demand (PFDavg) range — a target SIL isn't chosen freehand, it's read off this table against the RRF the application actually needs. | role: mechanism · level: understand · cvh-cmp-sil-pfd-rrf-table |
| 4 | OREDA field data attributes SIF failures roughly 42% to the sensor, 8% to the logic solver, and 50% to the final control element — redundancy spent on the final element addresses the largest single failure contributor, not an arbitrary choice among the three components. | role: application · level: analyze · cvh-cmp-oreda-failure-data-chart |
| 5 | HIPPS is a real, worked example of this exact architecture task: three pressure transmitters in 2oo3 voting, feeding a logic solver, driving two redundant final control elements — explicitly framed in the source as meeting SIL 3. Walking why 2oo3 (not 1oo2, not a single transmitter) meets that target is the model for the module's own architecture exercise. | role: application · level: evaluate · cvh-cmp-hipps-typical-configuration |
| 6 | Given a required SIL/PFDavg/RRF target and the OREDA failure-distribution data, architect a voting configuration (sensor count/voting, final-element redundancy) that meets the target, and justify where the redundancy budget went using the failure data — not evenly splitting redundancy across all three components by default. | role: application · level: evaluate · items 3-5 |
| 7 | **→ Activity — Architecture Design** | case-walkthrough · 30 min — Given a required SIL/RRF target different from the HIPPS example's SIL 3, design a voting configuration that meets it, using the OREDA data to justify where redundancy goes. Compare designs across pairs/groups and discuss why two valid designs might allocate redundancy differently. |
| 8 | Check — knowledge check | — |

**Competency coverage:** `eng.sis.sil-architecture` (all items), `progression: introduces`.

**Verification note:** the OREDA 42%/8%/50% breakdown and the HIPPS "SIL 3, 2oo3 voting" framing were both checked verbatim against `Component Index — Control Valve Handbook ch12.md` this pass — the design conversation's "~50%" claim holds exactly, and the HIPPS worked example wasn't even flagged in the original conversation, a genuine find that strengthens this module.
