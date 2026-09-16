---
title: Stage 1 Outline — Control Valve Engineering 1
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering 1
chapter: cve1-ch1-m1
updated: 2026-09-15
---

# Stage 1 Outline — cve1-ch1-m1 (Valve Selection & Sizing Decision)

> [!note] How to review this document — and what's provisional
> Origination mode: no existing deck, no `course.json`, no moduleZero
> decision yet. Franz has now confirmed CVE1 Day 1 is **one training day**
> — following the established half-day = 180 min (net of one break)
> convention already used for `d1-foundations` in `Curriculum — IfE.md`,
> that's `days[].minutesTarget: 360` for the whole day, **provisional/rough,
> not sign-off**, same caveat that entry carries. How that 360 minutes
> splits between this module and `cve1-ch1-m2` is a Stage 2 decision (needs
> the relative content depth Stage 1 didn't need to resolve), not decided
> here. **Page numbers below are provisional
> placeholders (1–N within this module), not a real page allocation** —
> nothing has confirmed whether this course gets a moduleZero bookend or
> how it sequences against cve1-ch1-m2. Edit this the way any Stage 1
> Outline gets reviewed: strike through anything wrong, add a
> `> [!warning]` on a boundary/activity you want reconsidered. Both of
> this module's competencies (see Curriculum — CVE1.md) trace to the
> **same single source component** — the chapter-opening 6-step
> flowchart — walked in two judgment stages, not two separate topics.

### 1. cve1-ch1-m1 — Valve Selection & Sizing Decision

**Objective:** Work a control valve's selection-and-sizing decision end to end from real service conditions — calculate a preliminary Cv, check it against noise/cavitation limits, and justify the resulting trim-type and body/trim decision.

level target: `analyze` · domain: `engineering` · tier: `introductory`

**Roles:** `sizing-eng` only — this is desk/calculation judgment, not a hardware task the other three roles' jobs require. **Flagged for review, not locked**: confirm with Franz whether `inst-tech` should also route here given positioner sizing touches instrumentation work.

**Stakes (opening hook):** A preliminary Cv calculated in isolation, without checking it against noise and cavitation limits first, produces a valve that's the right size on paper and fails in the field within a year — the flowchart's own step 2→3 branch exists because "big enough" and "right" are two different questions.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | The valve-selection process is one continuous 6-step decision, not six independent topics: service conditions → preliminary Cv → trim type → body/trim size → trim materials → remaining options. Every later section in the chapter is one step of this same sequence. | 1 | role: mechanism · level: understand · cvh-cmp-valve-selection-process-flowchart |
| 2 | Step 1 fixes the service conditions a preliminary Cv depends on: P1, ΔP, Q, T1, fluid properties, allowable noise, and the required ANSI pressure class — get any one wrong and the Cv that follows is wrong regardless of the arithmetic. | 2 | role: nomenclature · level: understand · cvh-cmp-valve-selection-process-flowchart |
| 3 | Step 2 is the real branch point: calculate a preliminary Cv, then check it against noise and cavitation limits *before* treating it as final — a Cv that passes the flow requirement but fails either check forces a different trim type in step 3, not a bigger valve. | 3 | role: application · level: analyze · cvh-cmp-valve-selection-process-flowchart |
| 4 | Step 3's trim-type decision follows directly from step 2's result: standard trim when both checks pass, noise-reduction trim when the noise limit is the one that fails, cavitation-reduction trim when the cavitation check is the one that fails — the failing check, not preference, decides which. | 4 | role: application · level: analyze · cvh-cmp-valve-selection-process-flowchart |
| 5 | Step 4 selects the actual body and trim size for the required Cv once trim type is fixed — travel, trim group, and shutoff class all follow from this choice, not from the Cv number alone. | 5 | role: mechanism · level: understand · cvh-cmp-valve-selection-process-flowchart |
| 6 | Step 5 selects trim materials compatible with the process and available within the trim group step 4 already fixed — a material that fits the process but doesn't exist in that trim group is not a real option at this step. | 6 | role: application · level: analyze · cvh-cmp-valve-selection-process-flowchart |
| 7 | **→ Activity — Selection Walkthrough** | — | case-walkthrough · 25 min — Given a real service-condition case (P1, ΔP, Q, T1, fluid, allowable noise, ANSI class), work steps 1–3 of the flowchart as a class: state the preliminary Cv result, run the noise/cavitation check, and decide whether the case forces a trim-type change — then work steps 4–5 to justify the resulting body/trim/material decision. Grounded directly in the flowchart's own 6 steps (cvh-cmp-valve-selection-process-flowchart); no invented procedure. |
| 8 | Check — knowledge check | 7 | — |

**Competency coverage:** `eng.sizing.valve-selection-process` (items 2–3, the step-1/step-2 judgment) and `eng.selection.body-trim-decision` (items 4–6, the step-3/4/5 judgment) — both `progression: introduces`, both against the single verified source `cvh-cmp-valve-selection-process-flowchart`.

**Open item flagged for Franz:** this module does not calculate a real numeric Cv (the ISA/IEC formula is `eng.sizing.liquid-sizing-calculation`, confirmed CVE2-only, `develops`). Item 3's "calculate a preliminary Cv" is taught as a conceptual step in the decision sequence, not a worked formula — confirm this matches the intended CVE1/CVE2 depth split before Stage 2 authors real slide content, since "calculate" in the competency `statement` could be misread as requiring the actual math this early.
