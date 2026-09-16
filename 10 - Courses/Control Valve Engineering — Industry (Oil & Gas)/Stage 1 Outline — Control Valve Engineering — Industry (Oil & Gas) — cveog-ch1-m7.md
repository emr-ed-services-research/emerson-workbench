---
title: Stage 1 Outline — Control Valve Engineering — Industry (Oil & Gas)
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering — Industry (Oil & Gas)
chapter: cveog-ch1-m7
updated: 2026-09-15
---

# Stage 1 Outline — cveog-ch1-m7 (Natural Gas Storage: Formation-Type Classification)

> [!warning] First-pass proposal — not reviewed by Franz. Same open items
> as cveog-ch1-m1, EXCEPT this module's source content was read in more
> depth than most others in this course — see item 2, a real verified
> fact, not an inference.

**Objective:** Classify which sub-processes a natural-gas storage facility
actually needs from its storage-formation type (depleted reservoir,
aquifer, or salt cavern) and justify the water-injection/brine-disposal
loop's presence or absence accordingly.

level target: `evaluate` · domain: `engineering` · tier: `advanced` · `industryScope: oil-gas`

**Roles:** `sizing-eng` only, provisional.

**Stakes (opening hook):** Two natural-gas storage facilities can share
the same block-diagram shape and still need genuinely different hardware
— a salt-cavern site needs a water-injection/brine-disposal loop to leach
storage volume in the first place; a depleted-reservoir or aquifer site
never does. Specifying "a gas storage facility's valves" without naming
the formation type is an incomplete spec, the same shape of gap as m1's
onshore/offshore distinction.

| # | Item | Detail |
| --- | --- | --- |
| 1 | A natural-gas storage facility's process flow has four possible sub-processes — water injection, brine disposal, gas injection, gas withdrawal/export — flowing into/out of a shared underground reservoir. | role: mechanism · level: understand · `ogas-cmp-underground-storage-process-flow` |
| 2 | Verified directly against the source: only a salt-cavern site needs the water-injection/brine-disposal loop at all (the source figure shows it in a dashed "SALT CAVERNS ONLY" box) — a depleted-reservoir or aquifer site's storage facility genuinely has fewer valve stations, not a simplified version of the same ones. | role: contrast · level: evaluate · `ogas-cmp-underground-storage-process-flow` |
| 3 | The water-injection valve diagram is the real zoom-in on the salt-cavern-only loop — concrete hardware for a sub-process that literally does not exist at two of the three formation types. | role: application · level: evaluate · `ogas-cmp-water-injection-valve-diagram` |
| 4 | The brine-disposal valve diagram completes the salt-cavern-only loop — feedwater in, brine out, the mechanism that leaches the storage cavern's volume in the first place. | role: application · level: evaluate · `ogas-cmp-brine-disposal-valve-diagram` |
| 5 | **→ Activity — Which Formation, Which Valves** | application-exercise · 20 min — Given three storage-site briefs (depleted reservoir, aquifer, salt cavern), learners classify which of the four sub-processes each site actually needs and justify the salt-cavern site's extra water-injection/brine-disposal valves by name. Grounded directly in the real process-flow, water-injection, and brine-disposal figures — no invented scenario. |
| 6 | Check — knowledge check | — |

**Competency coverage:** `eng.storage.formation-type-classification` (all items), `progression: applies` (proposed) — **though see the Curriculum doc's own flag: this may actually be `introduces` (genuinely new classification content) rather than `applies` (exercising something already taught) — Franz should make this call, not this pass.**

**Open items flagged for Franz:** none beyond the progression-value question above — this module's sourcing is the most directly verified of the seven in this course (the salt-cavern-only claim was read from the actual Component Index record, not inferred).
