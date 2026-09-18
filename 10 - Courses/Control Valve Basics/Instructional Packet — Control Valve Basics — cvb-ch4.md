---
title: Instructional Packet — Control Valve Basics
type: review
tags:
  - instructional-packet
  - pipeline
course: Control Valve Basics
chapter: cvb-ch4
updated: 2026-09-12
---

# Instructional Packet — cvb-ch4 (Control Valve Performance)

> [!note] How to review this document
> This is the content unit Stage 3 will actually compose from — one or
> more `primitives[]` per concept once migrated to that shape (pre-
> migration content renders its flat `t`/`sources`/`template` instead,
> labeled as such), each competency's own confidence state
> (`provisional`/`confirmed`/`revised`, with why when revised), and a
> concept-granularity flag (3+ components cited — worth a glance, never a
> blocking failure). This accumulates across Stage 1 (the concept slot)
> and Stage 2 (the primitive(s) authored onto it) and is reviewed at the
> existing Stage 2 gate — it is not a separate Stage 3 log. See the
> matching `Stage 1 Outline` doc for arc structure and `Stage 2
> Attachments` for a flat sourcing-only view. Edit directly (strikethrough,
> `> [!warning]` callouts, notes) the same way every other pipeline doc in
> this vault is reviewed; re-fire Stage 2 as a **REVISE** when done.

### 1. cvb-ch4-m1 — Why Performance Varies — Variability, Deadband & Response

**Objective:** Explain process variability as a measure of loop performance, and trace deadband, response time, and installed gain as the design factors that cause it.

**1. cvb.performance.process-variability** (introduces · confirmed)
role: mechanism · level: understand · pages: 53

- **Primitive** — orientation · introductory

  Process variability is the width of the distribution of a measured value around its target, not where the target itself sits — a tightly-controlled loop has a narrow distribution, a poorly-controlled one a wide one, both centered the same place.

  - `cvh-cmp-process-variability-distributions` (current, Subject-Matter Index — Control Valve Handbook ch2.md) — "Two stacked bell-curve (distribution) plots contrasting a wider, higher-variability process against a narrower, tighter-controlled one, both centered on the same target/setpoint — the visual definition of "process variability" as the width of the distribution around a target, not the position of its mean."
  - template: `slide--role-mechanism` — One figure — two stacked distribution curves, same target, different widths — is the direct visual definition of the concept itself (variability is distribution width, not target position), the cleanest possible one-figure mechanism case.
  - slideCount: 1 (stage2)
  - pages: 53


**2. cvb.performance.test-loop** (introduces · confirmed)
role: nomenclature · level: remember · pages: 54

- **Primitive** — orientation · introductory

  Every performance number in this chapter — deadband, response time, gain, the economics — comes from real bench testing on a physical test loop, not a simulation.

  - `cvh-cmp-performance-test-loop-photo` (current, Subject-Matter Index — Control Valve Handbook ch2.md) — "Real photo of Fisher's own performance test loop — a physical flow-test rig (piping loop, control valve under test, instrumentation) used to generate the chapter's later dynamic-performance data (deadband, response time, gain, economics). Establishes that the chapter's later graphs come from real bench testing, not simulation."
  - template: `slide--role-nomenclature` — A single real photo of the physical test rig — establishing 'this chapter's numbers come from real bench testing, not simulation' as a factual, recognition-level claim, the nomenclature role's default figure-plus-claim treatment.
  - slideCount: 1 (stage2)
  - pages: 54


**3. cvb.performance.deadband** (develops · confirmed)
role: mechanism · level: understand · pages: 55

- **Primitive** — orientation · introductory

  Testing three real valve designs open-loop shows deadband directly: each valve's output lags its command by a different amount before it moves at all — the same deadband concept already introduced, now measured and compared.

  - _sourceNote:_ CVH ch2 Figure 2.3 'Effect of Deadband on Valve Performance' — the same figure is already catalogued as ch3-cmp-deadband-effect-chart in 14101's own Subject-Matter Index (a different course); cross-referenced, not duplicated as a new id, per Subject-Matter Index — Control Valve Handbook ch2.md's own Open Items.
  - template: `slide--role-mechanism` — The cross-referenced figure (CVH ch2 Figure 2.3, 'Effect of Deadband on Valve Performance') plots three real valve designs' open-loop lag directly — a measured mechanism demonstration, not a schematic, fitting mechanism's role as the demonstrated counterpart to the definition already given in ch1-m2.
  - slideCount: 1 (stage2)
  - pages: 55


**4. cvb.performance.response-time** (introduces · confirmed)
role: application · level: understand · pages: 56

- **Primitive** — orientation · introductory

  Dead time and 63%-response time both vary by valve/actuator/positioner combination — a faster positioner or a smaller actuator generally responds quicker, but the only way to know a specific configuration's numbers is to test it.

  - `cvh-cmp-valve-response-time-summary-table` (current, Subject-Matter Index — Control Valve Handbook ch2.md) — "A data-grid-formatted summary comparing dead time and 63%-response time across multiple valve/actuator/positioner configurations tested in the performance test loop — shows how response time varies by design, not a single fixed number. Formatted as a table but explicitly numbered and captioned "Figure 2.4" by the source itself, so catalogued as a figure per the standing tables-are-not-catalogued rule (that rule excludes items the source itself labels "Table N-N", not data-grid figures the source itself numbers as a Figure)."
  - template: `slide--role-application` — The source is explicitly a table-shaped summary (dead time / 63%-response time across valve/actuator/positioner configurations) — application's own `.tmpl-table` allowance fits directly, with the one-line takeaway being 'test your specific configuration, don't assume a number.'
  - slideCount: 1 (stage2)
  - pages: 56


**5. cvb.performance.installed-gain** (introduces · confirmed)
role: mechanism · level: analyze · pages: 57

- **Primitive** — orientation · introductory

  Installed gain is the slope of the installed flow-characteristic curve at a given travel — where that slope changes sharply across the travel range, the loop's tuning has to compromise between the high-gain and low-gain regions.

  - `cvh-cmp-installed-characteristic-and-gain` (current, Subject-Matter Index — Control Valve Handbook ch2.md) — "Two stacked line graphs plotting installed flow characteristic and installed gain against valve travel for the same valve — shows how gain is the slope of the flow-characteristic curve, and how both non-linearity and gain variation across the travel range affect loop tuning."
  - template: `slide--role-mechanism` — One figure — installed characteristic and installed gain plotted together for the same valve — shows gain as the slope of the characteristic curve directly, the visual mechanism behind the analytical claim (tuning has to compromise where slope changes sharply).
  - slideCount: 1 (stage2)
  - pages: 57


**6. cvb.bodystyle.control-range-by-style** (introduces · confirmed)
role: application · level: analyze · pages: 58

- **Primitive** — orientation · introductory

  A globe valve holds a usable, controllable gain over a wider share of its travel than a butterfly valve does for the same duty — a wider control range, read directly off the installed-gain comparison.

  - `cvh-cmp-valve-style-control-range-comparison` (current, Subject-Matter Index — Control Valve Handbook ch2.md) — "Two stacked line graphs comparing installed characteristic/gain behavior between a butterfly valve and a globe valve, showing the globe valve holding a usable (controllable) gain over a wider percentage of travel — i.e., a wider "control range" — than the butterfly valve for the same duty."
  - template: `slide--role-application` — One figure — globe vs. butterfly installed-gain behavior plotted together — with a single analytical takeaway (globe holds a usable gain over more of its travel); fits application's one-fig-plus-takeaway shape exactly, reading the same comparison graph as the analytical skill rather than needing two separate valve photos.
  - slideCount: 1 (stage2)
  - pages: 58


**→ Activity — Performance Read** discussion · 15 min — Read a real installed-gain graph and a valve-style-comparison graph, and predict which of two valve styles gives the better control range for a stated service.

**Check** — pages 59 (composed by Stage 3, not authored here)

### 2. cvb-ch4-m2 — Proving Performance — Economics & the Signature Series

**Objective:** Explain how a Signature Series factory test establishes a performance baseline, and justify replacing a valve on economic grounds using that baseline.

**1. cvb.performance.economics-of-control** (introduces · confirmed)
role: application · level: evaluate · pages: 60

- **Primitive** — orientation · introductory

  Across three real valve designs under the same random load disturbance, the better-controlling valve holds process variability closer to the theoretical minimum as tuning gets more aggressive — a measurable economic argument for choosing it, not just a qualitative one.

  - `cvh-cmp-closed-loop-disturbance-summary` (current, Subject-Matter Index — Control Valve Handbook ch2.md) — "Graph of process variability (2σ/μ, %) vs. closed-loop time constant for three valve designs (Valve A/B/C) under a random load disturbance, on 4" valves tested at 600 gpm in a 4" test loop. Shows a "minimum variability" reference line and labels "faster tuning" / "slower tuning" directions; Valve A tracks the minimum-variability line across tunings while B and C degrade as tuning is made more aggressive — the data behind the chapter's economic-impact argument (§ following text: replacing Valve B with Valve A at a 2.0s time constant yields a 1.4% variability improvement)."
  - template: `slide--role-application` — One figure — three real valve designs' variability response to the same load disturbance across tuning aggressiveness — carries the whole economic argument (a measurable improvement, not just a qualitative one) as application's single analytical figure plus takeaway.
  - slideCount: 1 (stage2)
  - pages: 60


**2. cvb.performance.signature-series-testing** (introduces · confirmed)
role: mechanism · level: understand · pages: 61

- **Primitive** — orientation · introductory

  A Signature Series factory test runs an assembled valve through ValveLink software, recording its own friction/force signature as a baseline for comparison against a later, in-service test of the same valve.

  - `cvh-cmp-signature-series-testing-photo` (current, Subject-Matter Index — Control Valve Handbook ch2.md) — "Real photo of a technician running a ValveLink Software Signature Series factory performance test on an assembled Fisher control valve (green-bodied valve/actuator with a FIELDVUE digital valve controller, connected to a laptop running ValveLink), establishing the factory benchmark test described in §2.3 Signature Series Performance Testing."
  - template: `slide--role-mechanism` — The photo shows the real test procedure in progress (a technician running ValveLink's Signature Series test on an assembled valve) — grounding 'how the baseline actually gets made' as a real process, which is what mechanism's treatment is for even without an internal cutaway.
  - slideCount: 1 (stage2)
  - pages: 61


**3. cvb.performance.signature-diagnosis** (introduces · confirmed)
role: application · level: apply · pages: 62

- **Primitive** — orientation · introductory

  Overlaying a new in-service signature on the original baseline shows an increased span where friction has risen — the same comparison a technician would run to confirm a valve actually needs service, not just guess from symptoms.

  - `cvh-cmp-signature-data-comparison-overlay` (current, Subject-Matter Index — Control Valve Handbook ch2.md) — "ValueLink software screenshot overlaying an original factory signature trace with a new (in-service) signature trace for the same valve, with callout boxes reading "ORIGINAL TEST," "NEW TEST," and "INCREASED SPAN INDICATES INCREASED FRICTION" — the worked example of using Signature Series baseline data to diagnose rising friction in a valve already in service."
  - template: `slide--role-application` — The source figure is itself a worked diagnostic example — an overlay of original vs. new signature traces with 'INCREASED SPAN INDICATES INCREASED FRICTION' called out directly on the image — application's fig-plus-takeaway shape fits perfectly since the figure already does the diagnostic reasoning the concept teaches.
  - slideCount: 1 (stage2)
  - pages: 62


**→ Activity — Signature Read** application-exercise · 15 min — Given the original-vs-new signature overlay, identify what changed between the two traces and what it indicates about the valve's condition.

**4. cvb.performance.valvelink-interface** (introduces · confirmed)
role: nomenclature · level: remember · pages: 63

- **Primitive** — orientation · introductory

  ValveLink's Total Scan view shows the signature graph directly; its Valve Step Response view runs and displays a step test — the two diagnostic screens a technician actually works from.

  - `cvh-cmp-valvelink-software-screens` (current, Subject-Matter Index — Control Valve Handbook ch2.md) — "Two ValveLink software screenshots side by side — a Total Scan diagnostic view with a signature graph, and a Valve Step Response view with a step-test graph — illustrating the diagnostic software interface referenced by the chapter's closing "Take Advantage of the Signature Series" section."
  - template: `slide--role-nomenclature` — Two real software screenshots, each a named diagnostic view (Total Scan, Valve Step Response) — nomenclature's labelled-reference treatment fits directly, naming the two screens a technician actually works from rather than explaining a mechanism.
  - slideCount: 1 (stage2)
  - pages: 63


**Check** — pages 64 (composed by Stage 3, not authored here)
