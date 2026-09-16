---
title: Stage 1 Outline — Control Valve Engineering — Industry (Oil & Gas)
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering — Industry (Oil & Gas)
chapter: cveog-ch1-m5
updated: 2026-09-15
---

# Stage 1 Outline — cveog-ch1-m5 (Oil and Gas Transportation: Pipeline-Network Application)

> [!warning] First-pass proposal — not reviewed by Franz. Same open items as cveog-ch1-m1.

**Objective:** Select and justify a control valve at a real
pipeline-transportation duty point (pump station, metering station,
terminal receiving), applying selection and sizing fundamentals to a
transport-network context rather than a process-plant one.

level target: `evaluate` · domain: `engineering` · tier: `advanced` · `industryScope: oil-gas`

**Roles:** `sizing-eng` only, provisional.

**Stakes (opening hook):** A process plant's valves control a
transformation (separating, treating, cooling); a pipeline's valves
control *movement* — getting product from one place to another at the
right pressure and the right measured rate. The same selection toolkit
applies, but the constraint driving the decision (line pressure profile,
metering accuracy, station spacing) is a different kind of problem.

| # | Item | Detail |
| --- | --- | --- |
| 1 | Gas and oil transportation are each their own process-flow shape — the chapter treats them as related but distinct networks, not one generic "pipeline" topic. | role: mechanism · level: understand · `ogas-cmp-gas-transportation-process-flow` |
| 2 | A pump station's control valves exist to manage line pressure between stations — the duty point is defined by the pipeline's own pressure profile, not by a process-plant transformation. | role: application · level: evaluate · `ogas-cmp-pump-station-control-valve-diagram` |
| 3 | A metering station's control valve duty is inseparable from measurement accuracy — the valve has to hold conditions steady enough for the metering equipment to produce a billable, accurate reading, a constraint most other duty points in this course don't have. | role: application · level: evaluate · `ogas-cmp-metering-station-control-valve-diagram` |
| 4 | **→ Activity — Pressure Profile or Product Quality?** | case-walkthrough · 20 min — Given a pump-station duty point and a metering-station duty point, learners identify which real constraint (pressure management vs. measurement accuracy) actually drives each valve's spec, and defend why the same generic "flow control" framing would miss it. Grounded in the real pump-station and metering-station figures. |
| 5 | Check — knowledge check | — |

**Competency coverage:** `eng.transportation.pipeline-system-application` (all items), `progression: applies` (proposed).

**Open items flagged for Franz:** oil transportation's own terminal-receiving content (`ogas-cmp-oil-terminal-receiving-unit-diagram`, confirmed real) is not covered above — this first pass focused on the gas-side pump-station/metering duty points; if oil transportation's terminal-receiving process is materially different enough to need its own item, that's a real gap to close before this outline is final.
