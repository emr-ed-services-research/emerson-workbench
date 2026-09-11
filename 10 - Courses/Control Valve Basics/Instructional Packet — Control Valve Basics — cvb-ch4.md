---
title: Instructional Packet — Control Valve Basics
type: review
tags:
  - instructional-packet
  - pipeline
course: Control Valve Basics
chapter: cvb-ch4
updated: 2026-09-11
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
role: mechanism · level: understand · pages: 48

- **Primitive** — orientation · introductory

  Process variability is the width of the distribution of a measured value around its target, not where the target itself sits — a tightly-controlled loop has a narrow distribution, a poorly-controlled one a wide one, both centered the same place.

  - `cvh-cmp-process-variability-distributions` (current, Component Index — Control Valve Handbook ch2.md)
  - template: `slide--role-mechanism` — This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).
  - slideCount: 1 (stage2)
  - pages: 48


**2. cvb.performance.test-loop** (introduces · confirmed)
role: nomenclature · level: remember · pages: 49

- **Primitive** — orientation · introductory

  Every performance number in this chapter — deadband, response time, gain, the economics — comes from real bench testing on a physical test loop, not a simulation.

  - `cvh-cmp-performance-test-loop-photo` (current, Component Index — Control Valve Handbook ch2.md)
  - template: `slide--role-nomenclature` — This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.
  - slideCount: 1 (stage2)
  - pages: 49


**3. cvb.performance.deadband** (develops · confirmed)
role: mechanism · level: understand · pages: 50

- **Primitive** — orientation · introductory

  Testing three real valve designs open-loop shows deadband directly: each valve's output lags its command by a different amount before it moves at all — the same deadband concept already introduced, now measured and compared.

  - _sourceNote:_ CVH ch2 Figure 2.3 'Effect of Deadband on Valve Performance' — the same figure is already catalogued as ch3-cmp-deadband-effect-chart in 14101's own Component Index (a different course); cross-referenced, not duplicated as a new id, per Component Index — Control Valve Handbook ch2.md's own Open Items.
  - template: `slide--role-mechanism` — This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).
  - slideCount: 1 (stage2)
  - pages: 50


**4. cvb.performance.response-time** (introduces · confirmed)
role: application · level: understand · pages: 51

- **Primitive** — orientation · introductory

  Dead time and 63%-response time both vary by valve/actuator/positioner combination — a faster positioner or a smaller actuator generally responds quicker, but the only way to know a specific configuration's numbers is to test it.

  - `cvh-cmp-valve-response-time-summary-table` (current, Component Index — Control Valve Handbook ch2.md)
  - template: `slide--role-application` — This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.
  - slideCount: 1 (stage2)
  - pages: 51


**5. cvb.performance.installed-gain** (introduces · confirmed)
role: mechanism · level: analyze · pages: 52

- **Primitive** — orientation · introductory

  Installed gain is the slope of the installed flow-characteristic curve at a given travel — where that slope changes sharply across the travel range, the loop's tuning has to compromise between the high-gain and low-gain regions.

  - `cvh-cmp-installed-characteristic-and-gain` (current, Component Index — Control Valve Handbook ch2.md)
  - template: `slide--role-mechanism` — This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).
  - slideCount: 1 (stage2)
  - pages: 52


**6. cvb.bodystyle.control-range-by-style** (introduces · confirmed)
role: application · level: analyze · pages: 53

- **Primitive** — orientation · introductory

  A globe valve holds a usable, controllable gain over a wider share of its travel than a butterfly valve does for the same duty — a wider control range, read directly off the installed-gain comparison.

  - `cvh-cmp-valve-style-control-range-comparison` (current, Component Index — Control Valve Handbook ch2.md)
  - template: `slide--role-application` — This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.
  - slideCount: 1 (stage2)
  - pages: 53


**→ Activity — Performance Read** discussion · 15 min — Read a real installed-gain graph and a valve-style-comparison graph, and predict which of two valve styles gives the better control range for a stated service.

**Check** — pages 54 (composed by Stage 3, not authored here)

### 2. cvb-ch4-m2 — Proving Performance — Economics & the Signature Series

**Objective:** Explain how a Signature Series factory test establishes a performance baseline, and justify replacing a valve on economic grounds using that baseline.

**1. cvb.performance.economics-of-control** (introduces · confirmed)
role: application · level: evaluate · pages: 55

- **Primitive** — orientation · introductory

  Across three real valve designs under the same random load disturbance, the better-controlling valve holds process variability closer to the theoretical minimum as tuning gets more aggressive — a measurable economic argument for choosing it, not just a qualitative one.

  - `cvh-cmp-closed-loop-disturbance-summary` (current, Component Index — Control Valve Handbook ch2.md)
  - template: `slide--role-application` — This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.
  - slideCount: 1 (stage2)
  - pages: 55


**2. cvb.performance.signature-series-testing** (introduces · confirmed)
role: mechanism · level: understand · pages: 56

- **Primitive** — orientation · introductory

  A Signature Series factory test runs an assembled valve through ValveLink software, recording its own friction/force signature as a baseline for comparison against a later, in-service test of the same valve.

  - `cvh-cmp-signature-series-testing-photo` (current, Component Index — Control Valve Handbook ch2.md)
  - template: `slide--role-mechanism` — This is the 'mechanism' role's default Template Gallery treatment: A how-it-works schematic or cutaway (the default for an understand-level concept).
  - slideCount: 1 (stage2)
  - pages: 56


**3. cvb.performance.signature-diagnosis** (introduces · confirmed)
role: application · level: apply · pages: 57

- **Primitive** — orientation · introductory

  Overlaying a new in-service signature on the original baseline shows an increased span where friction has risen — the same comparison a technician would run to confirm a valve actually needs service, not just guess from symptoms.

  - `cvh-cmp-signature-data-comparison-overlay` (current, Component Index — Control Valve Handbook ch2.md)
  - template: `slide--role-application` — This is the 'application' role's default Template Gallery treatment: The mechanism in a concrete situation — a real case or scenario, not an abstract restatement.
  - slideCount: 1 (stage2)
  - pages: 57


**→ Activity — Signature Read** application-exercise · 15 min — Given the original-vs-new signature overlay, identify what changed between the two traces and what it indicates about the valve's condition.

**4. cvb.performance.valvelink-interface** (introduces · confirmed)
role: nomenclature · level: remember · pages: 58

- **Primitive** — orientation · introductory

  ValveLink's Total Scan view shows the signature graph directly; its Valve Step Response view runs and displays a step test — the two diagnostic screens a technician actually works from.

  - `cvh-cmp-valvelink-software-screens` (current, Component Index — Control Valve Handbook ch2.md)
  - template: `slide--role-nomenclature` — This is the 'nomenclature' role's default Template Gallery treatment: A labelled-parts figure (.slide--tmpl-diagram), recognition-level — or, for a concept with no physical figure to label (a named framework, a fixed small set of terms), a reference table (.slide--tmpl-table). Sequence before the mechanism concepts.
  - slideCount: 1 (stage2)
  - pages: 58


**Check** — pages 59 (composed by Stage 3, not authored here)
