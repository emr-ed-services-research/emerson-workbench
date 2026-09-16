---
title: Stage 1 Outline — Control Valve Engineering — Industry (Oil & Gas)
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering — Industry (Oil & Gas)
chapter: cveog-ch1-m2
updated: 2026-09-15
---

# Stage 1 Outline — cveog-ch1-m2 (Natural Gas Treatment: Process-Train Application)

> [!warning] First-pass proposal — not reviewed by Franz. Same open items
> as cveog-ch1-m1 (no minutesTarget, no role confirmation, provisional
> page numbers).

**Objective:** Select and justify the control-valve duty point across a
natural-gas treatment train (amine treatment, dehydration, sulfur
recovery, tail gas), applying selection fundamentals to the real process
constraint driving each stage.

level target: `evaluate` · domain: `engineering` · tier: `advanced` · `industryScope: oil-gas`

**Roles:** `sizing-eng` only, provisional.

**Stakes (opening hook):** Raw natural gas isn't pipeline-quality gas — it
has to be stripped of acid gas (amine treatment), dried (dehydration), and
have its recovered sulfur and tail gas handled before it can go anywhere.
Each stage exists because the previous one alone isn't sufficient; a valve
spec that ignores which stage it's serving ignores what that stage is
actually for.

| # | Item | Detail |
| --- | --- | --- |
| 1 | Natural gas treatment is a sequence, not a single process: raw gas → amine treatment (acid gas removal) → dehydration → the gas is now pipeline-quality; sulfur recovery and tail gas treatment handle what amine treatment pulled out. | role: mechanism · level: understand · `ogas-cmp-natural-gas-treatment-process-flow` |
| 2 | Amine treatment's control valves serve a chemical-absorption process (lean/rich amine circulation) — the duty point is defined by the treatment chemistry, not by generic "gas flow control." | role: application · level: evaluate · `ogas-cmp-amine-treatment-unit` |
| 3 | Sulfur recovery closes the loop on what amine treatment removed — a real downstream consequence of an upstream process choice, worth tracing rather than treating each stage as independent. | role: application · level: evaluate · `ogas-cmp-sulfur-recovery-system` |
| 4 | **→ Activity — Trace the Train** | application-exercise · 20 min — Given the treatment-train process flow, learners trace one contaminant (acid gas or water) from raw-gas inlet through to the stage that actually removes it, then select and justify the control valve serving that stage's real duty. Grounded in the real process-flow, amine-unit, and sulfur-recovery figures. |
| 5 | Check — knowledge check | — |

**Competency coverage:** `eng.gas-treatment.process-train-application` (all items), `progression: applies` (proposed).

**Open items flagged for Franz:** tail gas treatment (a real stage named in the competency statement) has no dedicated item above — this chapter's own tail-gas figure (`ogas-cmp-tail-gas-treatment-system-ch9`, confirmed real) should be added if this module is developed further; kept out of this first pass to stay within a reasonable item count, not because it's unimportant.
