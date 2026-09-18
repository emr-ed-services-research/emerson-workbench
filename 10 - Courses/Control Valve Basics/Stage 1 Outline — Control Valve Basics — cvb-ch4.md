---
title: Stage 1 Outline — Control Valve Basics
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Basics
chapter: cvb-ch4
updated: 2026-09-12
---

# Stage 1 Outline — cvb-ch4 (Control Valve Performance)

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

### 1. cvb-ch4-m1 — Why Performance Varies — Variability, Deadband & Response

**Objective:** Explain process variability as a measure of loop performance, and trace deadband, response time, and installed gain as the design factors that cause it.

level target: `analyze` · audience stage: `orientation` · builds on: cvb-ch1-m2, cvb-ch2-m1

**Stakes (opening hook):** A tech who reads 'the valve is slow' as one problem misses that deadband, response time, and installed gain are three separate, separately-fixable causes — with three different remedies.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | Process variability is the width of the distribution of a measured value around its target, not where the target itself sits — a tightly-controlled loop has a narrow distribution, a poorly-controlled one a wide one, both centered the same place. | 53 | role: mechanism · level: understand · cvh-cmp-process-variability-distributions |
| 2 | Every performance number in this chapter — deadband, response time, gain, the economics — comes from real bench testing on a physical test loop, not a simulation. | 54 | role: nomenclature · level: remember · cvh-cmp-performance-test-loop-photo |
| 3 | Testing three real valve designs open-loop shows deadband directly: each valve's output lags its command by a different amount before it moves at all — the same deadband concept already introduced, now measured and compared. | 55 | role: mechanism · level: understand · CVH ch2 Figure 2.3 'Effect of Deadband on Valve Performance' — the same figure is already catalogued as ch3-cmp-deadband-effect-chart in 14101's own Subject-Matter Index (a different course); cross-referenced, not duplicated as a new id, per Subject-Matter Index — Control Valve Handbook ch2.md's own Open Items. |
| 4 | Dead time and 63%-response time both vary by valve/actuator/positioner combination — a faster positioner or a smaller actuator generally responds quicker, but the only way to know a specific configuration's numbers is to test it. | 56 | role: application · level: understand · cvh-cmp-valve-response-time-summary-table |
| 5 | Installed gain is the slope of the installed flow-characteristic curve at a given travel — where that slope changes sharply across the travel range, the loop's tuning has to compromise between the high-gain and low-gain regions. | 57 | role: mechanism · level: analyze · cvh-cmp-installed-characteristic-and-gain |
| 6 | A globe valve holds a usable, controllable gain over a wider share of its travel than a butterfly valve does for the same duty — a wider control range, read directly off the installed-gain comparison. | 58 | role: application · level: analyze · cvh-cmp-valve-style-control-range-comparison |
| 7 | **→ Activity — Performance Read** | — | discussion · 15 min — Read a real installed-gain graph and a valve-style-comparison graph, and predict which of two valve styles gives the better control range for a stated service. |
| 8 | Check — knowledge check | 59 | — |

### 2. cvb-ch4-m2 — Proving Performance — Economics & the Signature Series

**Objective:** Explain how a Signature Series factory test establishes a performance baseline, and justify replacing a valve on economic grounds using that baseline.

level target: `evaluate` · audience stage: `orientation` · builds on: cvb-ch4-m1

**Stakes (opening hook):** Without a Signature Series baseline, rising friction in a valve looks like normal wear until it's already a control problem — the baseline is what turns 'it seems sluggish' into a measured, defensible finding.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | Across three real valve designs under the same random load disturbance, the better-controlling valve holds process variability closer to the theoretical minimum as tuning gets more aggressive — a measurable economic argument for choosing it, not just a qualitative one. | 60 | role: application · level: evaluate · cvh-cmp-closed-loop-disturbance-summary |
| 2 | A Signature Series factory test runs an assembled valve through ValveLink software, recording its own friction/force signature as a baseline for comparison against a later, in-service test of the same valve. | 61 | role: mechanism · level: understand · cvh-cmp-signature-series-testing-photo |
| 3 | Overlaying a new in-service signature on the original baseline shows an increased span where friction has risen — the same comparison a technician would run to confirm a valve actually needs service, not just guess from symptoms. | 62 | role: application · level: apply · cvh-cmp-signature-data-comparison-overlay |
| 4 | **→ Activity — Signature Read** | — | application-exercise · 15 min — Given the original-vs-new signature overlay, identify what changed between the two traces and what it indicates about the valve's condition. |
| 5 | ValveLink's Total Scan view shows the signature graph directly; its Valve Step Response view runs and displays a step test — the two diagnostic screens a technician actually works from. | 63 | role: nomenclature · level: remember · cvh-cmp-valvelink-software-screens |
| 6 | Check — knowledge check | 64 | — |
