---
title: Stage 1 Outline — Control Valve Engineering 2
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering 2
chapter: cve2-ch1-m6
updated: 2026-09-15
---

# Stage 1 Outline — cve2-ch1-m6 (Isolation Valve Variant Justification)

> [!note] Origination mode — mandatory attribution
> New territory. **Every slide/source citation against this chapter's
> content MUST carry the IPT/Robert A. Lee credit forward** (Franz's
> 2026-09-18 decision) — this entire chapter is credited to IPT's Pipe
> Trades Handbook by Robert A. Lee, not cited as Control Valve Handbook
> content alone. Scoped to gate-valve internal variants specifically (not
> all 8+ valve families ch10 catalogues) — see scoping note below.

### 1. cve2-ch1-m6 — Isolation Valve Variant Justification

**Objective:** Justify a specific gate-valve variant choice against a named failure mode — chattering, wear/erosion, or excessive actuation torque.

level target: `evaluate` · domain: `engineering` · tier: `advanced`

**Roles:** `sizing-eng` only.

**Stakes (opening hook):** Every gate-valve variant below closes the same basic way — a wedge or disk dropping into a seat — so it's tempting to treat them as interchangeable. Each variant exists because a specific, named failure mode breaks the simpler design: one variant exists to stop chattering, another to cut required torque, another to survive uneven wear the simplest design can't tolerate.

| # | Item | Detail |
| --- | --- | --- |
| 1 | The solid wedge gate valve is the simplest, most common design — but its rigid wedge geometry is the baseline every other variant below is a response to a specific limitation of. | role: mechanism · level: understand · cvh-cmp-solid-wedge-gate-valve |
| 2 | The flexible wedge disk splits the wedge into two halves joined by a center hub, with guides added on larger sizes specifically to prevent chattering — a failure mode the rigid solid wedge is more prone to at larger sizes. | role: application · level: analyze · cvh-cmp-flexible-wedge-disk |
| 3 | The split wedge gate valve and the flexible split-wedge design both address the same problem from a different angle — the flexible split-wedge achieves zero leakage at 6 bar air with lower required torque than a solid wedge, trading a more complex internal geometry for a real, quantified torque reduction. | role: contrast · level: analyze · cvh-cmp-split-wedge-gate-valve, cvh-cmp-flexible-split-wedge-gate-valve |
| 4 | The double disk gate valve is explicitly contrasted against the split-wedge design in the source on friction/wear behavior — closure by two independent, parallel disks rather than a single wedge shape changes how the seating faces wear over repeated cycles. | role: contrast · level: analyze · cvh-cmp-double-disk-gate-valve |
| 5 | Given a named failure mode (chattering at large size, high required actuation torque, or uneven wear from repeated cycling), select and defend the gate-valve variant that addresses it, and explain why the other variants would still exhibit that failure mode. | role: application · level: evaluate · items 1-4 |
| 6 | **→ Activity — Failure Mode Match** | case-walkthrough · 25 min — Given 3 short failure-mode scenarios (a large valve reported chattering at partial closure; a valve requiring excessive actuator torque to seat; a valve showing uneven seating-face wear after repeated cycling), select and justify the gate-valve variant that addresses each — grounded directly in the source's own stated design rationale for each variant, not invented failure scenarios. |
| 7 | Check — knowledge check | — |

**Competency coverage:** `eng.isolation-valves.variant-justification` (all items), `progression: introduces`.

**Verification note:** "chattering" (item 2) and "torque" (item 3) are verbatim in the source. "Uneven wear" as an exact phrase does NOT appear — the real sourced concept is the double-disk valve's contrasted "friction/wear behavior" against split-wedge (item 4). Corrected the activity and item wording to "wear" generally rather than force the unverified exact phrase "uneven seat wear."

**Scoping note, flagged for Franz:** CVH ch10 catalogues 8+ valve families total (gate, globe, check, diaphragm, pinch, ball, butterfly, plug — plus dimension tables). This module covers ONLY gate-valve internal variants, where the richest variant-vs-failure-mode comparative content concentrates. A broader module surveying all 8 families was considered and rejected as too shallow to hit the `evaluate` bar for any single family — confirm this narrower scope is acceptable, or whether the competency should be split by valve family instead.
