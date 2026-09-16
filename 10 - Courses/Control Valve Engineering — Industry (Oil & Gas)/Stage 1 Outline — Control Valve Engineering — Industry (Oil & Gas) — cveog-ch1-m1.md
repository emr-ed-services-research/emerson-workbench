---
title: Stage 1 Outline — Control Valve Engineering — Industry (Oil & Gas)
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering — Industry (Oil & Gas)
chapter: cveog-ch1-m1
updated: 2026-09-15
---

# Stage 1 Outline — cveog-ch1-m1 (Onshore/Offshore Production: Facility Design Tradeoffs)

> [!warning] First-pass proposal — not reviewed by Franz
> This whole course's competency map is unconfirmed (see `Curriculum —
> CVE-Industry (Oil & Gas).md`). No `minutesTarget`, no moduleZero
> decision, no role-routing decision. Page numbers are provisional
> placeholders.

**Objective:** Judge how a control valve's design requirement changes for
the same duty point between an onshore and an offshore production
facility, applying CVE1/CVE2's severe-service and selection fundamentals
to a real siting decision rather than re-teaching those fundamentals.

level target: `evaluate` · domain: `engineering` · tier: `advanced` ·
`industryScope: oil-gas`

**Roles:** `sizing-eng` only, provisional — same open flag as every CVE1/CVE2 module.

**Stakes (opening hook):** A slug catcher's control valves see intermittent
surges of gas, oil, water, and solids together — the same duty exists
onshore and offshore, but an offshore platform's weight/footprint/access
constraints and an onshore well site's erosive, high-pressure raw-wellhead
duty pull the design in different directions for the identical process
function. Specifying "a slug-catcher valve" without naming which site
you're on is an incomplete spec.

| # | Item | Detail |
| --- | --- | --- |
| 1 | Both onshore and offshore production share the same top-level process shape — wellhead fluid → separation → downstream gas/oil/water paths — but the real engineering difference is sited constraints, not the process itself. | role: mechanism · level: understand · `ogas-cmp-onshore-production-process-flow` |
| 2 | Onshore well-site choke valves face raw, erosive, particulate-laden wellhead flow at inlet pressures up to 3000 psig — an angle-pattern body (Design D/DA) is chosen specifically because it survives this duty better than an in-line globe body, applying CVE1's body-style selection judgment to a genuinely severe inlet condition. | role: application · level: evaluate · `ogas-cmp-well-site-choke-valve-photo` |
| 3 | Offshore facilities add weight/footprint/access as real design drivers alongside the same process function — a topsides valve is sized and selected under a constraint onshore never has to consider, applying the same selection toolkit against a different binding constraint. | role: contrast · level: evaluate · `ogas-cmp-offshore-topsides-process-flow` |
| 4 | The slug catcher — a two-phase-flow surge buffer common to both onshore and offshore gathering systems — is a real case where "the same component, two sites" makes the constraint tradeoff concrete rather than abstract. | role: application · level: evaluate · `ogas-cmp-slug-catcher-valves` |
| 5 | **→ Activity — Same Duty, Two Sites** | case-walkthrough · 25 min — Given one duty point (e.g. slug-catcher inlet control) and two real siting briefs (onshore erosive/high-pressure wellhead vs. offshore weight/footprint-constrained topsides), have learners specify the design requirement for each and defend why they diverge. Grounded directly in `ogas-cmp-slug-catcher-valves` and the onshore/offshore process-flow figures — no invented scenario. |
| 6 | Check — knowledge check | — |

**Competency coverage:** `eng.production.facility-design-tradeoff` (all
items), `progression: applies` (proposed, unconfirmed).

**Open items flagged for Franz:** (1) whether `sizing-eng` is the only role
this routes to. (2) Item 3's offshore weight/footprint framing is this
pass's own read of `ogas-cmp-offshore-topsides-process-flow`'s teaches
field — the real chapter (ch8) has ~20 additional figures (slug catcher
hardware, high/low-pressure separation, gas compression, oil treatment,
gas dehydration, amine treatment) not read in depth for this outline;
confirm whether the module needs to go deeper into ch8's own content
before treating this outline as complete, or whether the onshore/offshore
*contrast* (rather than exhaustively re-covering ch8's own process detail,
already structurally similar to ch7's) is the right scope.
