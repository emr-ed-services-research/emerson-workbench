---
title: Stage 1 Outline — Control Valve Engineering — Industry (Oil & Gas)
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering — Industry (Oil & Gas)
chapter: cveog-ch1-m4
updated: 2026-09-15
---

# Stage 1 Outline — cveog-ch1-m4 (LNG Receiving Terminals: A Different Process, Same Material Constraint)

> [!warning] First-pass proposal — not reviewed by Franz. Same open items as cveog-ch1-m1.

**Objective:** Select and justify a control valve at a real LNG
receiving-terminal duty point (ship unloading, vapor return,
storage/send-out, regasification), applying the same cryogenic material
judgment as liquefaction (cveog-ch1-m3) to a materially different process.

level target: `evaluate` · domain: `engineering` · tier: `advanced` · `industryScope: oil-gas`

**Roles:** `sizing-eng` only, provisional.

**Stakes (opening hook):** Liquefaction (m3) makes LNG; a receiving
terminal unloads it, stores it, and turns it back into gas — the
cryogenic material constraint carries over, but the process itself
(ship unloading, vapor return, storage, send-out, regasification) is
completely different from a refrigeration cycle. Treating "LNG" as one
undifferentiated topic would miss that the engineering problem changes
even though the temperature constraint doesn't.

| # | Item | Detail |
| --- | --- | --- |
| 1 | A receiving terminal's real process sequence — ship unloading → vapor return → storage → send-out → regasification — is a materially different flow than liquefaction's refrigerant cycle, even though both operate at the same cryogenic temperature regime. | role: mechanism · level: understand · `ogas-cmp-lng-receiving-terminal-process-flow` |
| 2 | Ship-unloading and vapor-return duty points exist specifically because unloading LNG from a ship displaces vapor that has to go somewhere — a real operational constraint unique to the receiving-terminal process, not present in liquefaction. | role: application · level: evaluate · `ogas-cmp-lng-ship-unloading-vapor-return` |
| 3 | A cryogenic valve selected for this service (the source's own named hardware) carries forward the same material-selection judgment m3 applied to liquefaction — confirming the fundamental transfers across two different LNG processes, not just within one. | role: application · level: evaluate · `ogas-cmp-a31a-cryogenic-valve` |
| 4 | **→ Activity — Two LNG Processes, One Material Constraint** | case-walkthrough · 20 min — Learners compare a liquefaction duty point (m3) against a receiving-terminal duty point from this module and identify what carries over (the cryogenic material judgment) versus what's genuinely different (the process function itself). Grounded in both modules' real source figures. |
| 5 | Check — knowledge check | — |

**Competency coverage:** `eng.lng.receiving-terminal-application` (all items), `progression: applies` (proposed).

**Open items flagged for Franz:** the `ogas-cmp-a31a-cryogenic-valve` figure's specific spec details (material, size, pressure class) were not read in depth for this first pass — only confirmed to exist in the real Subject-Matter Index; Stage 2 needs to read that record's full `teaches` field before authoring real slide content from it.
