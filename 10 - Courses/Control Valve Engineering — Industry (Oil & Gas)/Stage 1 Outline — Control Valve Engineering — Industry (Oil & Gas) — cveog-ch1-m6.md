---
title: Stage 1 Outline — Control Valve Engineering — Industry (Oil & Gas)
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering — Industry (Oil & Gas)
chapter: cveog-ch1-m6
updated: 2026-09-15
---

# Stage 1 Outline — cveog-ch1-m6 (Fractionation: Distillation-Column Control)

> [!warning] First-pass proposal — not reviewed by Franz. Same open items as cveog-ch1-m1.

**Objective:** Select and justify a control valve at a real
fractionation-column duty point (deethanizer, depropanizer, or
debutanizer), applying selection fundamentals to distillation-column
control rather than a simple flow-line duty point.

level target: `evaluate` · domain: `engineering` · tier: `advanced` · `industryScope: oil-gas`

**Roles:** `sizing-eng` only, provisional.

**Stakes (opening hook):** A distillation column's control valves don't
just move fluid — reflux, reboiler, and product-draw valves each hold one
piece of a running separation stable. Getting one wrong doesn't just
misroute flow, it can degrade the separation the whole column exists to
produce.

| # | Item | Detail |
| --- | --- | --- |
| 1 | Fractionation separates a mixed hydrocarbon stream into progressively lighter/heavier products through a sequence of columns — deethanizer, depropanizer, debutanizer — each column pulling off one specific product. | role: mechanism · level: understand · `ogas-cmp-fractionation-process-flow` |
| 2 | The deethanizer's own numbered valve stations (Figure 11-2): feed enters at station 1; overhead ethane vapor recycles to the tower through the reflux loop (stations 2, 3) after two reflux pumps (4, 5) split flow to product metering (6); the bottom reboiler runs on hot-oil duty (station 7) and hands the remaining liquid to the depropanizer (8). Reflux and reboiler duty exist to hold the column's separation stable, not just to move product downstream. | role: application · level: evaluate · `ogas-cmp-deethanizer-process-diagram` |
| 3 | The depropanizer (Figure 11-4: heat-pump compressor 1, recycle 2, shared heat exchanger with the deethanizer at 2/4, reflux accumulator via 3, reflux pumps 5/6, reboiler hot oil 7, to debutanizer 8) and debutanizer (Figure 11-7: reflux recycle 1/2, reflux pumps 3/4, reboiler hot oil 5, product metering 6/7) repeat the same reflux/reboiler/product-draw pattern at each successive stage, each with its own real numbered stations — recognizing the pattern once means recognizing it at every column in the train, not re-deriving it each time. | role: application · level: evaluate · `ogas-cmp-depropanizer-process-diagram`, `ogas-cmp-debutanizer-process-diagram` |
| 4 | **→ Activity — Name the Duty Point** | application-exercise · 20 min — Given one column's real numbered process diagram (deethanizer, depropanizer, or debutanizer — instructor's choice), learners identify the actual station number for reflux, reboiler, and product-draw duty from the figure itself, and justify what happens to the separation if each one fails open or closed. Grounded directly in the source's own numbered stations, not a generic pattern. |
| 5 | Check — knowledge check | — |

**Competency coverage:** `eng.fractionation.column-control-application` (all items), `progression: applies` (proposed).

**Verification (WC, same night):** the flagged concern below was checked and resolved — the source's own Subject-Matter Index entries (`ogas-cmp-deethanizer-process-diagram`, `ogas-cmp-depropanizer-process-diagram`, `ogas-cmp-debutanizer-process-diagram`) already name every valve station's real duty directly in their own `teaches` field (Subject-Matter Index — Oil & Gas Sourcebook ch11.md, lines ~132-141, ~201-212, ~316-327) — this was real sourced fact the whole time, not an unconfirmed inference; the outline above now cites the actual station numbers instead of the generic reflux/reboiler/product-draw pattern.
