---
title: Stage 1 Outline — Control Valve Engineering 1
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering 1
chapter: cve1-ch1-m2
updated: 2026-09-15
---

# Stage 1 Outline — cve1-ch1-m2 (Cavitation and Flashing: Diagnosing Damage)

> [!note] How to review this document
> Same provisional-numbering caveat as cve1-ch1-m1, including the newly
> confirmed `days[].minutesTarget: 360` for CVE1 Day 1 as a whole (Franz
> confirmed "1 day" — see cve1-ch1-m1's own note for the half-day = 180 min
> precedent this derives from) — the split between this module and
> cve1-ch1-m1 is still a Stage 2 decision. This module covers the
> single competency `eng.noise-cavitation.damage-diagnosis`
> (`progression: introduces`) — noise *mitigation selection* is confirmed
> CVE2-only (`develops`), so this module stops at diagnosis and does not
> touch the Handbook's noise-control accessory figures (Figures 5.10–5.16)
> even though they sit in the same chapter section.

### 1. cve1-ch1-m2 — Cavitation and Flashing: Diagnosing Damage

**Objective:** Distinguish flashing damage from cavitation damage by visual signature, tracing the difference back to the vena-contracta mechanism that produces each.

level target: `analyze` · domain: `engineering` · tier: `introductory`

**Roles:** `sizing-eng` only — same flag as m1, confirm with Franz whether `inst-tech`/`operator` need this diagnostic skill for field troubleshooting.

**Stakes (opening hook):** An engineer who mistakes cavitation damage for flashing damage (or the reverse) prescribes the wrong fix — flashing is largely unavoidable once the process conditions are fixed, but cavitation is preventable by valve/trim design; treating a cavitation problem as flashing means shipping a valve that fails again.

| # | Item | Pages | Detail |
| --- | --- | --- | --- |
| 1 | Flow narrows through a restriction to a minimum cross-sectional area just downstream — the vena contracta — before recovering toward the downstream pressure. Both flashing and cavitation start here: it's where the pressure inside the valve drops lowest. | 1 | role: mechanism · level: understand · cvh-cmp-vena-contracta-diagram |
| 2 | If the pressure at the vena contracta drops to or below the fluid's vapor pressure, the liquid flashes to vapor bubbles there. If the downstream pressure then recovers above the vapor pressure, those bubbles collapse violently — that collapse, not the flashing itself, is what erodes metal. Flashing without recovery above vapor pressure causes no collapse damage; cavitation is specifically the collapse case. | 2 | role: mechanism · level: analyze · cvh-cmp-vena-contracta-diagram |
| 3 | A high-recovery valve design (e.g. a streamlined ball valve) recovers pressure faster and higher after the vena contracta than a low-recovery design — which is exactly why high-recovery designs are more prone to cavitation for the same upstream/downstream conditions, not less: more recovery means a higher chance of crossing back above vapor pressure. | 3 | role: contrast · level: analyze · cvh-cmp-pressure-profile-high-low-recovery |
| 4 | Flashing damage looks smooth and polished — a clean erosion pattern with no pitting. Cavitation damage looks rough and cinder-like — a pitted, gouged surface from repeated bubble-collapse impacts. The visual signature alone, with no pressure data available, is enough to tell which mechanism produced a given piece of failed trim. | 4 | role: contrast · level: analyze · cvh-cmp-flashing-damage-photo, cvh-cmp-cavitation-damage-photo |
| 5 | **→ Activity — Damage Diagnosis** | — | application-exercise · 20 min — Show the two real damage photos (cvh-cmp-flashing-damage-photo, cvh-cmp-cavitation-damage-photo) unlabelled. Learners diagnose which is which from visual signature alone, then justify the diagnosis by walking the vena-contracta / pressure-recovery mechanism backward from the damage to the cause — not just naming the answer. |
| 6 | Check — knowledge check | 5 | — |

**Competency coverage:** `eng.noise-cavitation.damage-diagnosis` (all items), `progression: introduces`, sources verified real against `Component Index — Control Valve Handbook ch5.md` §5.14 (printed pp. 128–130) before this outline was written.

**Genuinely surprising finding, flagged for Franz:** item 3's high-recovery/low-recovery point is a real counter-intuitive result the source itself supports (Figure 5.7's own two-curve comparison) — a learner's naive instinct is "better recovery = better valve," and the source shows that's backwards for cavitation risk specifically. This is exactly the kind of non-obvious tension `teaching-philosophy.md`'s CVE test pattern calls for; recommend Stage 2 lead with this as the module's hook rather than burying it as item 3.
