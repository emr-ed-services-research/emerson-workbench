---
title: Stage 1 Outline — Control Valve Engineering — Industry (Oil & Gas)
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering — Industry (Oil & Gas)
chapter: cveog-ch1-m3
updated: 2026-09-15
---

# Stage 1 Outline — cveog-ch1-m3 (LNG Liquefaction: Cryogenic Constraint Application)

> [!warning] First-pass proposal — not reviewed by Franz. Same open items as cveog-ch1-m1.

**Objective:** Apply severe-service material and temperature judgment to a
real LNG liquefaction duty point — genuinely colder than the generic
cryogenic example CVE2 uses, a concrete test of whether that fundamental
actually transfers to real numbers.

level target: `evaluate` · domain: `engineering` · tier: `advanced` · `industryScope: oil-gas`

**Roles:** `sizing-eng` only, provisional.

**Stakes (opening hook):** CVE2's severe-service competency names a
-101°C frost point as an example threshold. LNG liquefies methane at
roughly -161°C — if a learner assumes "severe-service cryogenic" tops out
near CVE2's example number, the real liquefaction process will contradict
that assumption immediately. This module exists to test the fundamental
against a harder real number, not just restate it.

| # | Item | Detail |
| --- | --- | --- |
| 1 | LNG liquefaction cools natural gas through a refrigerant cycle to roughly -161°C, well past the frost-point severe-service threshold CVE2's example used — the same material-selection judgment applies, at a materially colder real number. | role: mechanism · level: evaluate · `ogas-cmp-lng-process-flow-diagram` |
| 2 | The refrigerant cycle itself is a control-valve-relevant process — the cycle's own valve duty points exist because of how the refrigeration stages are staged, not incidental to it. | role: mechanism · level: understand · `ogas-cmp-refrigerant-cycles-liquefaction-diagram` |
| 3 | **→ Activity — How Cold Is Cold Enough** | application-exercise · 15 min — Given CVE2's -101°C severe-service frost-point example and LNG's real ~-161°C liquefaction temperature, learners identify what specifically has to change in a material/trim selection between the two (not just "colder = more severe" as a restatement). Grounded in the real process-flow figure; the specific material specification itself needs confirming against the actual sourcebook text before this activity is finalized — flagged below. |
| 4 | Check — knowledge check | — |

**Competency coverage:** `eng.lng.liquefaction-cryogenic-constraint` (all items), `progression: applies` (proposed).

**Verification (WC, same night):** checked directly against the real PDF
(pages 148-152 of `Control Valve Sourcebook - Oil & Gas.pdf`). The
chapter's own running text states LNG "is in a liquid state at cryogenic
temperatures (−258°F/−161°C)" — the original -162°C figure was general
knowledge, off by 1°C from the real sourced number; corrected above to
-161°C throughout this module. No named low-temperature alloy or specific
material spec was found anywhere in the pages read (148-152) — this
module should NOT cite a specific material/trim spec unless a further
read of the rest of the chapter turns one up; the activity item (row 3)
should stay at the level the real text supports (temperature delta and
its implication), not invent a named alloy.
