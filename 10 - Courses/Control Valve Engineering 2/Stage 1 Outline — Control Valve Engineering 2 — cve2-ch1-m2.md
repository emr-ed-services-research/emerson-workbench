---
title: Stage 1 Outline — Control Valve Engineering 2
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering 2
chapter: cve2-ch1-m2
updated: 2026-09-15
---

# Stage 1 Outline — cve2-ch1-m2 (Noise & Cavitation Mitigation Selection)

> [!note] Origination mode
> Develops CVE1's `eng.noise-cavitation.damage-diagnosis` — CVE1 taught
> diagnosis only (what damage looks like and why); this module is the first
> time a learner picks a fix.

### 1. cve2-ch1-m2 — Noise & Cavitation Mitigation Selection

**Objective:** Select and justify a specific noise or cavitation mitigation — anti-noise trim, inline or vent diffuser, multi-stage anti-cavitation trim, or inline silencer — against real comparative alternatives for a given service.

level target: `evaluate` · domain: `engineering` · tier: `advanced`

**Roles:** `sizing-eng` only, same open flag as prior modules.

**Stakes (opening hook):** CVE1's damage-diagnosis module ended on a real tension — high-recovery valve designs are *more* cavitation-prone, not less. This module's own tension: none of the four mitigations below fix the same problem the same way, and picking the wrong one for the actual failure mode (noise vs. cavitation, source-side vs. path-side) means paying for an accessory that doesn't address what's actually damaging the trim.

| # | Item | Detail |
| --- | --- | --- |
| 1 | Anti-noise trim (multi-slot cage, two-stage cage) treats noise at the source — inside the valve, before the fluid exits — by breaking the flow into smaller streams before it can generate aerodynamic noise. | role: mechanism · level: understand · CVH ch5 §5.15-5.16 |
| 2 | Inline and vent diffusers treat noise downstream of the valve, by reducing the pressure ratio across a single stage into several smaller drops spread over the diffuser's length — the diffuser doesn't change what happens inside the valve at all, it's a path-treatment, not a source-treatment. | role: contrast · level: analyze · CVH ch5 §5.15-5.16 |
| 3 | Multi-stage anti-cavitation trim is engineered specifically to stage the pressure drop internally so no single stage's local pressure drops to vapor pressure — this is a cavitation fix, not primarily a noise fix, even though it's catalogued in the same chapter section as the noise trims. | role: contrast · level: analyze · CVH ch5 §5.15-5.16 |
| 4 | An inline silencer is an absorption-type acoustic accessory (a perforated liner inside a housing) installed downstream — closest in function to a diffuser (path-side, downstream) but works by sound absorption rather than pressure staging. | role: mechanism · level: understand · CVH ch5 §5.15-5.16 |
| 5 | Given a real service case and its actual failure mode (aerodynamic noise vs. cavitation, source-side vs. downstream), select and defend one mitigation against the other three — the wrong choice for the mechanism (e.g. an inline diffuser for a cavitation problem) does not fix the actual damage. | role: application · level: evaluate · CVH ch5 §5.15-5.16 |
| 6 | **→ Activity — Mitigation Selection Case** | application-exercise · 25 min — Given 2-3 real service cases (some noise-limited, some cavitation-limited, from the sourcebooks' own worked examples where available), select and defend one of the four mitigations per case against the other three. |
| 7 | Check — knowledge check | — |

**Competency coverage:** `eng.noise-cavitation.mitigation-selection` (all items), `progression: develops`.

**Verification (WC, same night):** real ids confirmed directly —
anti-noise trim = `cvh-cmp-noise-reduction-trim-photo` (Figure 5.10, not
`cvh-cmp-cage-style-anti-noise-trim` as first guessed); inline diffuser =
`cvh-cmp-valve-inline-diffuser-photo` (Figure 5.11); vent diffuser =
`cvh-cmp-valve-vent-diffuser-diagram` (Figure 5.12); multi-stage
anti-cavitation trim = `cvh-cmp-cavitation-elimination-valve-design`
(Figure 5.13, not `cvh-cmp-multi-stage-anti-cavitation-trim` as first
guessed); inline silencer = `cvh-cmp-inline-silencer-photo`. All five
teach exactly the concept each item above describes.
