---
title: Stage 1 Outline — Control Valve Engineering 2
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering 2
chapter: cve2-ch1-m3
updated: 2026-09-15
---

# Stage 1 Outline — cve2-ch1-m3 (Severe-Service Design Justification)

> [!note] Origination mode
> New territory — nothing in CVE1 precedes this. `progression: introduces`,
> not `develops`, even though the audience and bloom level match CVE2's
> other modules.

### 1. cve2-ch1-m3 — Severe-Service Design Justification

**Objective:** Justify a specific severe-service design choice against a source's own stated numeric limit, for a given category of special/severe service.

level target: `evaluate` · domain: `engineering` · tier: `advanced`

**Roles:** `sizing-eng` only.

**Stakes (opening hook):** Standard valve construction has real, numbered limits — a threshold pressure drop, a temperature floor, a code classification — and severe service isn't a vague "extra-tough" category, it's a specific design response to a specific number being exceeded. Naming the category without knowing the number that triggered it is not actually justifying anything.

| # | Item | Detail |
| --- | --- | --- |
| 1 | High-capacity service (butterfly >NPS 48, globe >NPS 12, ball >NPS 24) exists because static pressure loads at shutoff increase geometrically as size increases arithmetically — the category is a direct consequence of that scaling, not an arbitrary size cutoff. | role: mechanism · level: understand · cvh-cmp-butterfly-valve-fieldvue-assembly |
| 2 | Low-flow Cv service uses special trims machined to close tolerances specifically because standard trim tolerances can't hold a flow coefficient as low as 0.03 (standard bodies) or 0.000001 (specialty lab/pilot-plant valves) — the design response is a tolerance problem, not a materials problem. | role: mechanism · level: understand · cvh-cmp-low-flow-cv-control-valve |
| 3 | Cryogenic extension bonnets exist specifically to keep the packing box above -101°C/-150°F — below that, atmospheric moisture freezes on the stem and packing box and gets drawn through the packing, tearing it. The bonnet's length is set by how far from the process the packing box needs to sit to stay above that number. | role: application · level: analyze · cvh-cmp-cryogenic-extension-bonnet |
| 4 | Multi-stage anti-cavitation trim rated to 4200 psid pressure drop (DST-style) exists for exactly the pressure-drop range where a standard single-stage trim would cavitate destructively — the 4200 psid figure is the design's stated operating ceiling, not a marketing number. | role: application · level: analyze · cvh-cmp-cavitation-trim-cutaway |
| 5 | Nuclear-service valves in U.S. plants are classified ASME Section III Class 1/2/3 by their role in the primary pressure boundary, emergency core cooling, or emergency equipment cooling — the class designation IS the justification for using nuclear-qualified construction, not a separate consideration layered on top. | role: mechanism · level: understand · cvh-cmp-pressurizer-spray-valve-nuclear |
| 6 | **→ Activity — Category Match Case** | case-walkthrough · 25 min — Given 3-4 short service-condition cases (a size, a temperature, a pressure drop, or a plant-role description), identify which severe-service category applies and justify it against the specific numeric threshold that category exists to address — not just naming the category. |
| 7 | Check — knowledge check | — |

**Competency coverage:** `eng.severe-service.design-justification` (all items), `progression: introduces`.

**Verification note:** every numeric threshold above (4200 psid, -101°C, ASME Section III Class 1/2/3, the geometric-vs-arithmetic scaling claim) was checked verbatim against `Subject-Matter Index — Control Valve Handbook ch6.md` this pass — none were assumed from the design conversation. No corrections needed; this is the one CVE2-new competency where every original claim held up exactly as stated.
