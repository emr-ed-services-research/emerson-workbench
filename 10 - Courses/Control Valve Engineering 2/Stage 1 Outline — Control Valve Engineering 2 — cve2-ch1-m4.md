---
title: Stage 1 Outline — Control Valve Engineering 2
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering 2
chapter: cve2-ch1-m4
updated: 2026-09-15
---

# Stage 1 Outline — cve2-ch1-m4 (Steam-Conditioning System Integration)

> [!note] Origination mode — real volume flag
> New territory. **This chapter (CVH ch7) has 14 real figures — the most
> source material of any CVE2-new competency.** One module is cut below,
> covering design selection through to full loop architecture, but Stage 2
> should weigh a two-module split for pacing (e.g. "Desuperheater Design
> Selection" then "Turbine-Protection Loop Architecture") — flagged, not
> decided here, since a Stage-1 pass isn't the right point to force a split
> without knowing real per-item depth yet.

### 1. cve2-ch1-m4 — Steam-Conditioning System Integration

**Objective:** Match a desuperheater design to a service's rangeability/velocity/pipe-size constraints, then architect a full turbine-protection steam-conditioning loop meeting a Class V shutoff requirement and 2-4 second stroke response.

level target: `evaluate` (spans into `create`) · domain: `engineering` · tier: `advanced`

**Roles:** `sizing-eng` only.

**Stakes (opening hook):** Five desuperheater designs exist because no single design covers the full range of rangeability, minimum steam velocity, and pipe size — picking a design outside its stated operating window (e.g. a fixed-geometry nozzle on a load that swings far past 5:1) means either poor atomization or a design that can't hold up structurally. And the highest-stakes case in the whole chapter, turbine protection, has a hard numeric bar (Class V, 2-4s) that a "good enough" loop simply fails.

| # | Item | Detail |
| --- | --- | --- |
| 1 | Fixed-geometry nozzle desuperheaters handle rangeability up to 5:1 at steam velocities as low as 25-30 ft/s — the simplest, most constrained design, suited to nearly constant loads. | role: mechanism · level: understand · cvh-cmp-fixed-geometry-nozzle |
| 2 | Variable-geometry (backpressure-activated) nozzle desuperheaters extend rangeability to 20:1 at the same minimum velocity — the mechanical difference (a spring-loaded, backpressure-activated nozzle vs. a fixed orifice) is what buys the extra range. | role: contrast · level: analyze · cvh-cmp-variable-geometry-nozzle |
| 3 | Self-contained designs package the water flow control element directly onto the desuperheater (rangeability 25:1) — the design choice here is driven by installation constraints (minimizing space/piping modification on an existing line), not primarily by rangeability. | role: mechanism · level: understand · cvh-cmp-self-contained-desuperheater-design |
| 4 | Steam-atomized designs use high-pressure steam (≥2x main steam pressure) to atomize spraywater, extending both rangeability (50:1) and the minimum usable steam velocity (down to ~10 ft/s) — the highest-performing design, at the cost of needing a separate atomizing-steam supply and isolation valve. | role: mechanism · level: analyze · cvh-cmp-steam-atomized-desuperheater-design, cvh-cmp-steam-assisted-desuperheater-control-loop |
| 5 | Geometry-assisted wafer designs exist for a constraint none of the other four address — small pipe (below NPS 6, where an insertion-style desuperheater physically won't fit) — rangeability 20:1 in NPS 1-24 once the wafer form factor is used. | role: application · level: analyze · cvh-cmp-geometry-assisted-wafer-design |
| 6 | Given a real service's rangeability, minimum steam velocity, and pipe size, select and defend one of the five designs against the others — a design that meets rangeability but violates the pipe-size constraint (or vice versa) is not a valid answer. | role: application · level: evaluate · items 1-5 |
| 7 | A turbine bypass valve's job — protecting a critical, costly turbine from transient damage while letting the boiler start up independently — sets two hard numeric requirements: Class V shutoff and 2-4 second full-stroke response with better than 1% positioning accuracy. Architecting the loop means choosing actuation (pneumatic or hydraulic) and accessories that can actually hit both numbers together, not just one. | role: application · level: evaluate · cvh-cmp-turbine-bypass-actuation-package |
| 8 | **→ Activity — Design Selection & Loop Architecture** | case-walkthrough · 30 min — Part 1: given 2-3 service cases, select and defend a desuperheater design. Part 2: given the turbine-bypass case, architect the actuation approach that meets both Class V and the 2-4s stroke spec, and identify what would fail if either requirement were dropped. |
| 9 | Check — knowledge check | — |

**Competency coverage:** `eng.steam-conditioning.system-integration` (all items), `progression: introduces`.

**Verification note:** all five design rangeability/velocity figures and the turbine-bypass Class V / 2-4s / 1% figures were checked verbatim against `Component Index — Control Valve Handbook ch7.md` this pass. No corrections needed — every specific number named in the original design conversation and added here checks out exactly.

**Flagged for Franz:** the two-module split question above (real, unresolved) and confirmation that `evaluate`/`create` split bloom-level framing is acceptable for a single competency ID, rather than warranting a second competency for the "architect" half specifically.
