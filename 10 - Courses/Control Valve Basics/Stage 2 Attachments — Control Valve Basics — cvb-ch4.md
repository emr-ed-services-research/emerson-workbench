---
title: Stage 2 Attachments — Control Valve Basics
type: review
tags:
  - stage2-attachments
  - pipeline
course: Control Valve Basics
chapter: cvb-ch4
updated: 2026-09-11
---

# Stage 2 Attachments — cvb-ch4 (Control Valve Performance)

> [!note] How to review this document
> This shows what actually backs each concept Stage 2 authored — the
> real Component Index record(s) each citation resolves to (what it
> teaches, its precedence status), or a plain `sourceNote` where no
> component fits. This is a sourcing-quality review, not an arc-structure
> one — see the matching `Stage 1 Outline` doc for that. Edit directly
> (strikethrough, `> [!warning]` callouts, notes) the same way; re-fire
> Stage 2 as a **REVISE** when done. Stage 3 stays locked until every
> module below is approved.

### 1. cvb-ch4-m1 — Why Performance Varies — Variability, Deadband & Response

**Objective:** Explain process variability as a measure of loop performance, and trace deadband, response time, and installed gain as the design factors that cause it.

**1. (mechanism · understand, page 49, slide--role-mechanism)** Process variability is the width of the distribution of a measured value around its target, not where the target itself sits — a tightly-controlled loop has a narrow distribution, a poorly-controlled one a wide one, both centered the same place.
  - `cvh-cmp-process-variability-distributions` (current, Component Index — Control Valve Handbook ch2.md) — "Two stacked bell-curve (distribution) plots contrasting a wider, higher-variability process against a narrower, tighter-controlled one, both centered on the same target/setpoint — the visual definition of "process variability" as the width of the distribution around a target, not the position of its mean."

**2. (nomenclature · remember, page 50, slide--role-nomenclature)** Every performance number in this chapter — deadband, response time, gain, the economics — comes from real bench testing on a physical test loop, not a simulation.
  - `cvh-cmp-performance-test-loop-photo` (current, Component Index — Control Valve Handbook ch2.md) — "Real photo of Fisher's own performance test loop — a physical flow-test rig (piping loop, control valve under test, instrumentation) used to generate the chapter's later dynamic-performance data (deadband, response time, gain, economics). Establishes that the chapter's later graphs come from real bench testing, not simulation."

**3. (mechanism · understand, page 51, slide--role-mechanism)** Testing three real valve designs open-loop shows deadband directly: each valve's output lags its command by a different amount before it moves at all — the same deadband concept already introduced, now measured and compared.
  - _sourceNote:_ CVH ch2 Figure 2.3 'Effect of Deadband on Valve Performance' — the same figure is already catalogued as ch3-cmp-deadband-effect-chart in 14101's own Component Index (a different course); cross-referenced, not duplicated as a new id, per Component Index — Control Valve Handbook ch2.md's own Open Items.

**4. (application · understand, page 52, slide--role-application)** Dead time and 63%-response time both vary by valve/actuator/positioner combination — a faster positioner or a smaller actuator generally responds quicker, but the only way to know a specific configuration's numbers is to test it.
  - `cvh-cmp-valve-response-time-summary-table` (current, Component Index — Control Valve Handbook ch2.md) — "A data-grid-formatted summary comparing dead time and 63%-response time across multiple valve/actuator/positioner configurations tested in the performance test loop — shows how response time varies by design, not a single fixed number. Formatted as a table but explicitly numbered and captioned "Figure 2.4" by the source itself, so catalogued as a figure per the standing tables-are-not-catalogued rule (that rule excludes items the source itself labels "Table N-N", not data-grid figures the source itself numbers as a Figure)."

**5. (mechanism · analyze, page 53, slide--role-mechanism)** Installed gain is the slope of the installed flow-characteristic curve at a given travel — where that slope changes sharply across the travel range, the loop's tuning has to compromise between the high-gain and low-gain regions.
  - `cvh-cmp-installed-characteristic-and-gain` (current, Component Index — Control Valve Handbook ch2.md) — "Two stacked line graphs plotting installed flow characteristic and installed gain against valve travel for the same valve — shows how gain is the slope of the flow-characteristic curve, and how both non-linearity and gain variation across the travel range affect loop tuning."

**6. (application · analyze, page 54, slide--role-application)** A globe valve holds a usable, controllable gain over a wider share of its travel than a butterfly valve does for the same duty — a wider control range, read directly off the installed-gain comparison.
  - `cvh-cmp-valve-style-control-range-comparison` (current, Component Index — Control Valve Handbook ch2.md) — "Two stacked line graphs comparing installed characteristic/gain behavior between a butterfly valve and a globe valve, showing the globe valve holding a usable (controllable) gain over a wider percentage of travel — i.e., a wider "control range" — than the butterfly valve for the same duty."

### 2. cvb-ch4-m2 — Proving Performance — Economics & the Signature Series

**Objective:** Explain how a Signature Series factory test establishes a performance baseline, and justify replacing a valve on economic grounds using that baseline.

**1. (application · evaluate, page 56, slide--role-application)** Across three real valve designs under the same random load disturbance, the better-controlling valve holds process variability closer to the theoretical minimum as tuning gets more aggressive — a measurable economic argument for choosing it, not just a qualitative one.
  - `cvh-cmp-closed-loop-disturbance-summary` (current, Component Index — Control Valve Handbook ch2.md) — "Graph of process variability (2σ/μ, %) vs. closed-loop time constant for three valve designs (Valve A/B/C) under a random load disturbance, on 4" valves tested at 600 gpm in a 4" test loop. Shows a "minimum variability" reference line and labels "faster tuning" / "slower tuning" directions; Valve A tracks the minimum-variability line across tunings while B and C degrade as tuning is made more aggressive — the data behind the chapter's economic-impact argument (§ following text: replacing Valve B with Valve A at a 2.0s time constant yields a 1.4% variability improvement)."

**2. (mechanism · understand, page 57, slide--role-mechanism)** A Signature Series factory test runs an assembled valve through ValveLink software, recording its own friction/force signature as a baseline for comparison against a later, in-service test of the same valve.
  - `cvh-cmp-signature-series-testing-photo` (current, Component Index — Control Valve Handbook ch2.md) — "Real photo of a technician running a ValveLink Software Signature Series factory performance test on an assembled Fisher control valve (green-bodied valve/actuator with a FIELDVUE digital valve controller, connected to a laptop running ValveLink), establishing the factory benchmark test described in §2.3 Signature Series Performance Testing."

**3. (application · apply, page 58, slide--role-application)** Overlaying a new in-service signature on the original baseline shows an increased span where friction has risen — the same comparison a technician would run to confirm a valve actually needs service, not just guess from symptoms.
  - `cvh-cmp-signature-data-comparison-overlay` (current, Component Index — Control Valve Handbook ch2.md) — "ValueLink software screenshot overlaying an original factory signature trace with a new (in-service) signature trace for the same valve, with callout boxes reading "ORIGINAL TEST," "NEW TEST," and "INCREASED SPAN INDICATES INCREASED FRICTION" — the worked example of using Signature Series baseline data to diagnose rising friction in a valve already in service."

**4. (nomenclature · remember, page 59, slide--role-nomenclature)** ValveLink's Total Scan view shows the signature graph directly; its Valve Step Response view runs and displays a step test — the two diagnostic screens a technician actually works from.
  - `cvh-cmp-valvelink-software-screens` (current, Component Index — Control Valve Handbook ch2.md) — "Two ValveLink software screenshots side by side — a Total Scan diagnostic view with a signature graph, and a Valve Step Response view with a step-test graph — illustrating the diagnostic software interface referenced by the chapter's closing "Take Advantage of the Signature Series" section."
