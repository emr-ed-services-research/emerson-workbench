---
title: Stage 1 Outline — Control Valve Engineering 2
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering 2
chapter: cve2-ch1-m1
updated: 2026-09-15
---

# Stage 1 Outline — cve2-ch1-m1 (Real Cv Calculation & Actuator Force Verification)

> [!note] Origination mode — no existing deck, no minutesTarget yet for CVE2
> Develops CVE1's `eng.sizing.valve-selection-process` (which stayed
> conceptual — no real math). This module is where the actual ISA/IEC
> arithmetic happens for the first time.

### 1. cve2-ch1-m1 — Real Cv Calculation & Actuator Force Verification

**Objective:** Perform a real ISA/IEC liquid Cv calculation for a given service, including a choked-flow check, and verify the actuator has adequate force margin (unbalance area, seat load, packing friction) to actually close against that service.

level target: `evaluate` · domain: `engineering` · tier: `advanced`

**Roles:** `sizing-eng` only, same open flag as CVE1's modules — confirm with Franz.

**Stakes (opening hook):** CVE1 taught "calculate a preliminary Cv" as a conceptual step; this module is where a learner discovers that step hides two separate failure modes if done carelessly — a Cv sized correctly for flow but calculated past the choked-flow limit, and a valve sized correctly on paper that an undersized actuator can't actually close against real seat load and packing friction. Both failures look identical on a spec sheet and only show up in the field.

| # | Item | Detail |
| --- | --- | --- |
| 1 | The liquid critical pressure ratio factor F_F sets the choked-flow ceiling: F_F = 0.96 − 0.28·√(P_v/P_c), read graphically or by formula, used in both q_max and ΔP_max. Past this ceiling, more pressure drop does not produce more flow — it produces cavitation instead. | role: mechanism · level: apply · sourcebooks ch3 (Oil & Gas + Power & Severe Service, cross-referenced) |
| 2 | Work a full worked Cv calculation for a real service case: given P1, ΔP, Q, fluid properties, calculate preliminary Cv, then check it against q_max/ΔP_max via F_F — a Cv that satisfies flow but exceeds the choked-flow limit is not a valid result, it forces a trim-type reconsideration (back to CVE1's flowchart step 2→3 judgment, now with real numbers behind it). | role: application · level: evaluate · sourcebooks ch3 |
| 3 | A correctly sized Cv is necessary but not sufficient — the actuator must generate enough force to seat against the resulting seat load, overcome packing friction, and account for unbalance area, or the valve won't fully close regardless of how well the Cv math worked out. | role: mechanism · level: understand · cvh-cmp-unbalance-area-table, cvh-cmp-seat-load-graph |
| 4 | Verify actuator force margin for the same service case: read seat load off the seat-load graph, read packing friction off the friction-values table, compute required force including unbalance area, and compare against the actuator's rated output at its operating supply pressure — a margin failure here means a bigger actuator, not a different Cv. | role: application · level: evaluate · cvh-cmp-unbalance-area-table, cvh-cmp-seat-load-graph, cvh-cmp-packing-friction-values-table |
| 5 | **→ Activity — Full Sizing Case** | case-walkthrough · 30 min — One real service case worked start to finish: Cv calculation, choked-flow check, actuator force-margin verification. Learners work in pairs against a real case, then the class compares results and discusses where a margin came out thinner than expected. Grounded directly in the sourcebooks' own worked-example format, not an invented exercise. |
| 6 | Check — knowledge check | — |

**Competency coverage:** `eng.sizing.liquid-sizing-calculation` (all items), `progression: develops`.

**Verification (WC, same night):** real F_F figure ids confirmed —
`ogas-cmp-ff-chart-water` / `ogas-cmp-ff-chart-nonwater` (Oil & Gas ch3) and
`pss-cmp-liquid-critical-pressure-ratio-water` /
`pss-cmp-liquid-critical-pressure-ratio-other-liquids` (Power & Severe
Service ch3) — both pairs teach F_F = 0.96 − 0.28·√(P_v/P_c) exactly as
described, confirming the "genuinely complementary, not four redundant
copies" claim: same formula, each sourcebook's own water/non-water split.
