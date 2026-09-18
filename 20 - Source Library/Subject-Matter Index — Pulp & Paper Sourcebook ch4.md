---
title: Subject-Matter Index — Pulp & Paper Sourcebook ch4
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch4 — Cavitation and Flashing
updated: 2026-09-15
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 4

**Chapter 4 — "Cavitation and Flashing."** Standing full-chapter cataloguing
pass, continuing the whole-book completion pass begun with Chapter 1. Every
real page in the chapter's confirmed range was rendered and read directly
(rigor standard). 14 real figures across 14 pages.

**A significant cross-book structural finding:** this chapter's content
(cavitation/flashing theory, damage photos, Cavitrol trim designs) is
identical in substance to **Oil & Gas Sourcebook Chapter 6** ("Control Valve
Cavitation and Flashing"), not Oil & Gas Chapter 4 — the two books number
their chapters differently even though nine of this chapter's fourteen
figures share an identical printed drawing number with an Oil & Gas ch6 /
Power & Severe Service ch6 record. See "Cross-reference findings" in Open
Items.

Chapter boundaries confirmed directly by rendering: PDF page 59 = printed p.
4-1 (Chapter 4 divider, "Cavitation and Flashing"), PDF page 72 = printed p.
4-14 ("Summary," chapter's last content page, no trailing blank). PDF page 73
= Chapter 5 divider ("Gas Sizing"). Zero page offset throughout (PDF page =
printed page number + 58). Chapter 4 = PDF pp. 59-72.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. Nine of fourteen figures share a printed drawing number with Oil & Gas ch6 / Power & Severe Service ch6 records — cross-referenced by id in each affected record's `notes`, not duplicated. |

## Components

### Chapter 4 — Choked Flow and Cavitation Fundamentals (printed pp. 4-1–4-6)

```yaml
id: pp-cmp-flow-curve-choked-flow
kind: figure
teaches: >
  A typical flow curve (Q vs. √ΔP) showing the relationship between flow
  rate and imposed pressure differential: flow initially rises linearly
  with a slope of Cv, then flattens as choked flow is reached — actual flow
  falls short of the flow predicted by naively extrapolating the basic
  sizing equation using the actual ΔP, which is the core evidence that a
  maximum-flow-rate limit exists.
concept-tags: [choked flow, flow curve, Cv, actual delta P, allowable delta P, predicted flow]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-1 'Typical Flow Curve Showing Relationship Between Flow Rate Q and Imposed Pressure Differential ΔP,' p. 4-1 (PDF p. 59), drawing A3442/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph, not a cutaway — Style Guide §5 applies if ever placed
  on a slide. Checked against the whole library: no exact drawing-number
  match found (Oil & Gas Sourcebook's parallel cavitation/flashing content
  lives in its own ch6, not ch4 — see this chapter's overall cross-reference
  note; this specific choked-flow-curve figure does not appear to have a
  direct O&G ch6 counterpart under this drawing number).
```

```yaml
id: pp-cmp-generalized-rc-curve
kind: figure
teaches: >
  The generalized critical pressure ratio r_c curve, plotted against vapor
  pressure ÷ critical pressure — used with the pressure recovery coefficient
  K_m to determine the allowable pressure differential (P1-P2)_allowable at
  which choked flow occurs, per r_c = F_F = 0.96 − 0.28·√(P_vc/P_c).
concept-tags: [critical pressure ratio, r_c curve, pressure recovery coefficient, K_m, allowable pressure differential, choked flow]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-2 'Generalized rc Curve,' p. 4-2 (PDF p. 60), drawing A3443/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph, not a cutaway. Checked against the whole library: no
  exact drawing-number match found.
```

```yaml
id: pp-cmp-typical-cavitation-damage-photo
kind: figure
teaches: >
  A photograph of a valve plug showing typical cavitation damage: an
  irregular, rough, "cinder-like" surface texture — the visual reference
  point for distinguishing cavitation damage from the smooth, polished
  appearance of flashing damage (Figure 4-6).
concept-tags: [cavitation damage, cinder-like appearance, valve plug erosion, material damage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-3 'Typical Cavitation Damage,' p. 4-3 (PDF p. 61), drawing W1350"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production/damage photo, single subject (unlike Oil & Gas ch6's composite
  Figure 6-6, which pairs a cavitation photo (W2843) directly above a
  flashing photo (W2842) on one figure). Checked against the whole library:
  no exact drawing-number match found for W1350 specifically — this book
  shows the cavitation-damage photo and flashing-damage photo (Figure 4-6,
  drawing W2842) as two separate single-subject figures rather than one
  paired composite.
```

```yaml
id: pp-cmp-high-low-recovery-valve-comparison
kind: figure
teaches: >
  Comparison of high and low recovery valves via pressure profile through a
  restriction: both valve types reach the same minimum pressure at the vena
  contracta, but a high recovery valve's downstream pressure P2 recovers
  much closer to P1 than a low recovery valve's — explaining why high
  recovery valves are more prone to cavitation at the same service
  conditions.
concept-tags: [pressure recovery, high recovery valve, low recovery valve, vena contracta, cavitation susceptibility]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-4 'Comparison of High and Low Recovery Valves,' p. 4-3 (PDF p. 61), drawing A3444"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical/schematic pressure-profile graph, not a cutaway.
  **Cross-reference (2026-09-15):** identical drawing number (A3444) to
  `ogas-cmp-restriction-pressure-profile` in `Subject-Matter Index — Oil & Gas
  Sourcebook ch6.md` (that book's Figure 6-1) and the corresponding record
  in `Subject-Matter Index — Power & Severe Service Sourcebook ch6.md` — the
  same source chart reused across all three Sourcebooks, despite the
  differing chapter numbers between books (this book's ch4 vs. the other
  two books' ch6).
```

```yaml
id: pp-topic-cavitation-in-pulp-stock
kind: topic
teaches: >
  Cavitation behavior in low-consistency pulp stock (below 4%) is treated as
  equivalent to water — the standard sizing/selection guidance applies
  unchanged. Above 4% consistency, cavitation is generally not known to be
  problematic, because the stock itself absorbs the majority of the energy
  produced by the cavitating microjets (the same mechanical-attack mechanism
  Figure 4-8 depicts, but the energy is dissipated into the fibrous stock
  rather than the metal surface). The chapter's own closing Summary
  reinforces this with a caveat: pulp stock's multi-phase flow may cause less
  severe cavitation/flashing/turbulent-flow damage than water would predict,
  but pulp stock can still drive other problems — erosion and corrosion —
  depending on the specific process makeup and materials used, so the real
  process media and conditions still need to be understood case by case, not
  assumed safe purely from the consistency rule of thumb.
concept-tags: [cavitation, pulp stock, consistency, microjet energy absorption, erosion, corrosion, industry-specific]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Cavitation in Pulp Stock,' p. 4-3 (PDF p. 61); reinforced in the chapter's closing 'Summary,' p. 4-14 (PDF p. 72)"
relatedFigures: [pp-cmp-cavitation-implosion-mechanism, pp-cmp-typical-cavitation-damage-photo]
relatedTopics: []
used-by: []
notes: >
  Genuinely industry-specific content, not found in CVH ch5, Oil & Gas ch6,
  or Power & Severe Service ch6's own cavitation/flashing chapters — verified
  by direct search of all three files for "pulp stock" and related terms
  before writing this entry (no matches). This is the standout Pulp & Paper-
  specific addition from this chapter, read directly from both the real
  mid-chapter passage and the Summary's own reinforcement, not paraphrased
  from a single sentence in isolation.
```

```yaml
id: pp-cmp-pressure-profiles-flashing-cavitating
kind: figure
teaches: >
  Schematic pressure profiles for flashing and cavitating flow plotted
  against distance through a restriction: both share the same pressure drop
  to the vena contracta, but diverge on recovery — a cavitating liquid's
  downstream pressure P2 recovers back above vapor pressure Pv, while a
  flashing liquid's P2 stays below Pv — the chapter's core distinguishing
  figure between the two phenomena.
concept-tags: [cavitation, flashing, vapor pressure, pressure recovery, P2 cavitating, P2 flashing, phase change]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-5 'Pressure Profiles for Flashing and Cavitating Flows,' p. 4-4 (PDF p. 62), drawing A3445"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (A3445) to
  `ogas-cmp-cavitation-flashing-pressure-recovery` in `Subject-Matter Index —
  Oil & Gas Sourcebook ch6.md` (that book's Figure 6-3) and the
  corresponding record in `Subject-Matter Index — Power & Severe Service
  Sourcebook ch6.md` — the same source chart reused across all three
  Sourcebooks.
```

```yaml
id: pp-cmp-typical-flashing-damage-photo
kind: figure
teaches: >
  A photograph of a valve component showing typical flashing damage: a
  smooth, polished surface — the visual counterpart and contrast case to
  Figure 4-3's rough cavitation-damage photo.
concept-tags: [flashing damage, polished appearance, material damage, valve component erosion]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-6 'Typical Flashing Damage,' p. 4-4 (PDF p. 62), drawing W2842"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (W2842) to the
  lower ("flashing") photo panel of `ogas-cmp-cavitation-vs-flashing-damage-
  photos` in `Subject-Matter Index — Oil & Gas Sourcebook ch6.md` (that book's
  Figure 6-6, a 2-photo composite pairing W2843 [cavitation] above W2842
  [flashing]) and the corresponding record in `Subject-Matter Index — Power &
  Severe Service Sourcebook ch6.md` — the same flashing-damage photo, shown
  standalone here vs. as one panel of a paired composite there.
```

```yaml
id: pp-cmp-viscous-flow-correction-factors
kind: figure
teaches: >
  Reynolds number factor F_R plotted against valve Reynolds number Re_v,
  with three separate curves for predicting pressure drop, selecting valve
  size, and predicting flow rate — used to correct the required Cv for
  non-fully-turbulent (laminar or transitional) flow regimes.
concept-tags: [viscous flow, Reynolds number, F_R factor, laminar flow, turbulent flow, valve sizing correction]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-7 'Viscous Flow Correction Factors,' p. 4-5 (PDF p. 63), drawing A3446"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: An analytical graph (3 labeled curves). Checked against the whole library: no exact drawing-number match found.
```

```yaml
id: pp-topic-viscous-flow-sizing-correction
kind: topic
teaches: >
  The standard liquid-sizing equations assume fully developed turbulent flow.
  Laminar flow (all fluid particles moving parallel, no mixing) and turbulent
  flow (highly random local velocity, significant mixing) are the two
  bounding regimes, distinguished by the Reynolds number — a ratio of inertial
  to viscous forces: below ~2,000 the flow is laminar/viscous, above ~3,000
  it is turbulent/inviscid, with a transitional regime in between. This
  matters for sizing because the available energy losses scale differently
  by regime — proportional to velocity squared in turbulent flow, linearly
  proportional to velocity in laminar flow — so the same flow rate produces a
  different pressure differential depending on regime. The correction is
  applied as C_v(required) = F_R × C_v(rated), where F_R is read from Figure
  4-7 against a calculated valve Reynolds number (Re_v, itself a function of
  Cv, flow rate, and fluid viscosity/density).
concept-tags: [viscous flow, laminar flow, turbulent flow, Reynolds number, F_R correction factor, non-turbulent sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Section 'Viscous Flow,' pp. 4-4–4-5 (PDF pp. 62-63)"
relatedFigures: [pp-cmp-viscous-flow-correction-factors]
relatedTopics: []
used-by: []
notes: >
  Genuinely distinct from CVH ch5, Oil & Gas ch6, and Power & Severe Service
  ch6's own cavitation/flashing chapters — verified by direct search of all
  three for "viscous", "Reynolds", before writing this entry (no matches in
  any). The existing `pp-cmp-viscous-flow-correction-factors` figure entry
  describes the graph itself (F_R vs. Re_v curves) but not the regime
  distinction or the reasoning for why the correction is needed — this topic
  entry fills that gap rather than restating the figure's own caption.
```

```yaml
id: pp-cmp-cavitation-implosion-mechanism
kind: figure
teaches: >
  The four-stage mechanical-attack mechanism behind cavitation erosion
  damage: (1) initial spherical bubble, (2) perturbation of the side away
  from the surface, (3) upper fluid penetrating the flattened side, (4)
  formation of a liquid jet that impinges on the metal surface below — the
  most probable mechanism behind cavitation erosion.
concept-tags: [cavitation, bubble collapse, microjet, mechanical attack, erosion, asymmetric collapse, material damage mechanism]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-8 'The implosion of cavitation vapor cavities is rapid, asymmetric and very energetic...,' p. 4-6 (PDF p. 64), drawing E0111"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  4-panel sequential diagram with printed stage labels (INITIAL SPHERICAL
  BUBBLE, PERTURBATION OF SIDE AWAY FROM SURFACE, UPPER FLUID PENETRATING
  FLATTENED SIDE, FORMATION OF JET). **Cross-reference (2026-09-15):**
  identical drawing number (E0111) to `ogas-cmp-microjet-collapse-mechanism`
  in `Subject-Matter Index — Oil & Gas Sourcebook ch6.md` (that book's Figure
  6-7) and the corresponding record in `Subject-Matter Index — Power & Severe
  Service Sourcebook ch6.md` — the same source diagram reused across all
  three Sourcebooks.
```

```yaml
id: pp-topic-cavitation-selection-coefficients
kind: topic
teaches: >
  A real, named valve-selection framework distinct from the FL/xT-based
  choked-flow terminology used earlier in this same chapter: F_L (pressure
  recovery coefficient), Kc (cavitation coefficient — a valve/trim-style
  parameter predicting the onset of cavitation-related damage and vibration,
  ΔP_cavitation = Kc·(P1−Pv)), Ar (Application Ratio — a cavitation index
  from actual service conditions, Ar = ΔP_flowing / (P1−Pv), indicating
  flashing if Ar ≥ 1.0 or potential cavitation if Ar ≤ 1.0), and Ki (incipient
  cavitation coefficient — predicts the onset of vapor-bubble
  generation/collapse, though specific values are generally not published).
  The real selection procedure: determine ΔP_flowing, calculate Ar, then
  compare against a candidate valve/trim's own ΔP limit and Kc index —
  select a valve/trim whose ΔP limit exceeds the service ΔP_flowing and whose
  Kc exceeds the service Ar. The guidelines are explicitly caveated as
  built from broad experience with real exceptions, water-only by default,
  and not a substitute for local sales-office consultation on detailed
  cavitating-service selection.
concept-tags: [cavitation coefficient, Kc, application ratio, incipient cavitation, valve selection procedure, trim selection criteria]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Sections 'Cavitation / Flashing Damage Coefficients and Product Selection,' 'Terminology,' and 'Valve Selection Coefficient Criteria and Selection Procedure,' pp. 4-7–4-8 (PDF pp. 65-66)"
relatedFigures: []
relatedTopics: [pp-cmp-generalized-rc-curve]
used-by: []
notes: >
  Genuinely distinct selection methodology, not found in CVH ch5, Oil & Gas
  ch6, or Power & Severe Service ch6's own cavitation/flashing chapters —
  verified by direct search of all three for "Application Ratio" and "Kc"
  before writing this entry (no matches in any). This section has no figure
  of its own — invisible to the original figures-only pass entirely.
```

### Chapter 4 — Hardware Choices and Cavitation Control Trims (printed pp. 4-9–4-13)

```yaml
id: pp-cmp-eas-valve-outlet-liner
kind: figure
teaches: >
  The Fisher EAS angle valve with a restricted-trim adaptor and a
  replaceable downstream outlet liner: the liner absorbs flashing erosion
  downstream of the throttling point, protecting the valve body itself —
  the liner, not the body, is the sacrificial part, and it can be replaced
  far more economically.
concept-tags: [flashing, angle valve, EAS, outlet liner, restricted-trim adaptor, erosion resistance, sacrificial liner]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-9 'Fisher EAS valve with outlet liner is used for flashing service. The liner resists erosion and protects the body,' p. 4-9 (PDF p. 67), drawing W0970"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway (RESTRICTED-TRIM ADAPTOR, LINER callouts).
  **Cross-reference (2026-09-15):** identical drawing number (W0970) to
  `ogas-cmp-eas-valve-outlet-liner` in `Subject-Matter Index — Oil & Gas
  Sourcebook ch6.md` (that book's Figure 6-8) and the corresponding record
  in `Subject-Matter Index — Power & Severe Service Sourcebook ch6.md` — the
  same source cutaway reused across all three Sourcebooks.
```

```yaml
id: pp-cmp-v500-rotary-plug-flashing-resistance
kind: figure
teaches: >
  Rotary plug valves, such as the V500 Vee-Ball valve (reverse flow trim
  direction, trim level 3), have excellent erosion resistance and perform
  well in flashing service: the plug can be installed facing downstream so
  flashing occurs downstream of the valve rather than within the body — an
  alternative to the angle-valve-with-liner approach.
concept-tags: [flashing, rotary plug valve, V500, Vee-Ball, reverse flow trim direction, trim level 3, erosion resistance, downstream flashing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-10 'Rotary plug valves, such as the V500 Vee-Ball valve (reverse flow trim direction, trim level 3) have excellent erosion resistance and perform well in flashing service,' p. 4-10 (PDF p. 68), drawing W8359"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Rendered production-quality cutaway illustration. **Cross-reference
  (2026-09-15):** identical drawing number (W8359) to
  `ogas-cmp-rotary-plug-flashing-resistance` in `Subject-Matter Index — Oil & Gas
  Sourcebook ch6.md` (that book's Figure 6-9) and the corresponding record
  in `Subject-Matter Index — Power & Severe Service Sourcebook ch6.md` — the
  same source illustration reused across all three Sourcebooks. Also
  cross-referenced by drawing number in `Subject-Matter Index — Power & Severe
  Service Sourcebook ch9a.md`, confirming this is a recurring stock
  illustration reused across multiple chapters/books, not merely a
  two-book coincidence.
```

```yaml
id: pp-cmp-valve-location-flashing-system-design
kind: figure
teaches: >
  System-design placement of a control valve to control where flashing
  damage occurs: mounting the valve close to the condenser (1 foot of pipe)
  moves the flashing point into the condenser's large-volume tank instead of
  a length of downstream piping (25 feet), where there is no material
  surface for high-velocity fluid to impinge on — preventing flashing damage
  through system design rather than valve hardware.
concept-tags: [system design, valve location, flashing prevention, condenser, heater drain valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-11 'Location of a control valve can often be changed to lengthen its life or allow use of less expensive products. Mounting a heater drain valve near the condenser is a good example,' p. 4-10 (PDF p. 68), drawing E0864"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Two-panel schematic (25-foot vs. 1-foot condenser-mounting comparison).
  **Cross-reference (2026-09-15):** identical drawing number (E0864) to
  `pss-cmp-valve-location-flashing-system-design` in `Subject-Matter Index —
  Power & Severe Service Sourcebook ch6.md` — the same source schematic
  reused across both Sourcebooks. No match found in Oil & Gas ch6 under
  this drawing number (checked directly, not assumed).
```

```yaml
id: pp-cmp-cavitrol-pressure-staging-graph
kind: figure
teaches: >
  In Cavitrol trim, the pressure drop is staged in two or more unequal steps
  (shown here as six stages), with staging accomplished by increasing the
  flow area from stage to stage — this stepped reduction allows full
  pressure drop without the vena contracta pressure falling below the vapor
  pressure of the liquid until deliberately allowed right at the final
  stage.
concept-tags: [Cavitrol trim, pressure drop staging, vena contracta, vapor pressure, expanding flow area, cavitation control, multi-stage trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-12 'In Cavitrol trim, the pressure drop is staged in two or more unequal steps...,' p. 4-11 (PDF p. 69), drawing A2149-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical pressure-vs-fluid-travel graph, not a cutaway.
  **Cross-reference (2026-09-15):** identical drawing number (A2149-1) to
  `ogas-cmp-cavitrol-pressure-staging-graph` in `Subject-Matter Index — Oil & Gas
  Sourcebook ch6.md` (that book's Figure 6-10) and the corresponding record
  in `Subject-Matter Index — Power & Severe Service Sourcebook ch6.md` — the
  same source chart reused across all three Sourcebooks.
```

```yaml
id: pp-cmp-drilled-hole-cage-designs
kind: figure
teaches: >
  Three cross-sectioned drilled-hole cage designs compared: thin plate (low
  Cv, high FL²), thick plate (high Cv, low FL²), and the Cavitrol hole
  (high Cv, high FL² — combining the geometric effects of both to optimize
  capacity and recovery simultaneously). The Cavitrol hole design is used
  exclusively in Cavitrol cages.
concept-tags: [Cavitrol trim, drilled hole design, thin plate, thick plate, Cavitrol hole, Cv, FL2, pressure recovery, cavitation control cage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-13 'By combining the geometric effects of thick plates and thin plates, it is possible to design a flow passage that optimizes capacity and recovery coefficient values...,' p. 4-12 (PDF p. 70), drawing E0113-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  6-panel line-art comparison with printed labels (THIN PLATE, THICK PLATE,
  CAVITROL HOLE, each with LOW/HIGH Cv and FL² annotations).
  **Cross-reference (2026-09-15):** identical drawing number (E0113-1) to
  `ogas-cmp-drilled-hole-cage-designs` in `Subject-Matter Index — Oil & Gas
  Sourcebook ch6.md` (that book's Figure 6-11) and the corresponding record
  in `Subject-Matter Index — Power & Severe Service Sourcebook ch6.md` — the
  same source line-art reused across all three Sourcebooks.
```

```yaml
id: pp-cmp-cavitrol-iv-trim-cutaway
kind: figure
teaches: >
  Cavitrol IV trim provides cavitation protection at pressures to 6500 psi,
  using expanding flow areas to affect a four-stage pressure drop, with all
  significant pressure drop taken downstream of the shutoff seating surface
  — the physical hardware implementation of the separate-seating-and-
  throttling-locations concept and the pressure-staging concept shown
  graphically in Figure 4-12.
concept-tags: [Cavitrol IV trim, cavitation control, multi-stage cage, expanding flow area, shutoff seating surface, separate seating and throttling, high pressure drop]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 4-14 'Cavitrol IV trim provides cavitation protection at pressures to 6500 psi...,' p. 4-13 (PDF p. 71), drawing W3668-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully shaded production-quality cutaway of a multi-stage cage assembly.
  **Cross-reference (2026-09-15):** identical drawing number (W3668-1) to
  `ogas-cmp-cavitrol-iv-trim-cutaway` in `Subject-Matter Index — Oil & Gas
  Sourcebook ch6.md` (that book's Figure 6-12) and the corresponding record
  in `Subject-Matter Index — Power & Severe Service Sourcebook ch6.md` — the
  same source cutaway reused across all three Sourcebooks. Also
  cross-referenced by drawing number in `Subject-Matter Index — Power & Severe
  Service Sourcebook ch9a.md`.
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 59-72 in full: p. 59 = printed
  4-1 (Chapter 4 opening, "Cavitation and Flashing," Figure 4-1 on the same
  page as the divider), p. 72 = printed 4-14 ("Summary," chapter's genuine
  last content page — no trailing blank page, unlike Chapters 1-3). PDF page
  73 confirmed as the Chapter 5 divider ("Gas Sizing"). Zero page offset
  (PDF = printed + 58) throughout.
- **Full chapter coverage.** All 14 real figures in range (Figures 4-1
  through 4-14) located and catalogued; every page 59-72 was rendered and
  read directly, no gaps in the numeric sequence.
- **No low-confidence flags.**
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter.
- **No numbered tables found in this chapter** — confirmed by direct
  reading of every page; Chapter 4 is figures and equations only, no
  "Table 4-N" content to exclude (a genuine near-zero-table chapter,
  confirmed methodically, not assumed).
- **Cross-reference findings — the second-strongest overlap found in this
  whole pass, and a real cross-book structural finding.** This chapter's
  content is substantively identical to **Oil & Gas Sourcebook Chapter 6**
  ("Control Valve Cavitation and Flashing") and **Power & Severe Service
  Sourcebook Chapter 6** — not either book's own Chapter 4 — meaning the
  three Sourcebooks number their shared-fundamentals chapters differently
  past Chapter 3. **Nine of fourteen figures are confirmed real
  cross-references** by identical printed drawing number:
  `pp-cmp-high-low-recovery-valve-comparison` (A3444),
  `pp-cmp-pressure-profiles-flashing-cavitating` (A3445),
  `pp-cmp-typical-flashing-damage-photo` (W2842, standalone here vs. one
  panel of a 2-photo composite in O&G/P&SS),
  `pp-cmp-cavitation-implosion-mechanism` (E0111),
  `pp-cmp-eas-valve-outlet-liner` (W0970),
  `pp-cmp-v500-rotary-plug-flashing-resistance` (W8359, also reused in
  Power & Severe Service ch9a),
  `pp-cmp-valve-location-flashing-system-design` (E0864, Power & Severe
  Service only — no match in Oil & Gas ch6),
  `pp-cmp-cavitrol-pressure-staging-graph` (A2149-1),
  `pp-cmp-drilled-hole-cage-designs` (E0113-1), and
  `pp-cmp-cavitrol-iv-trim-cutaway` (W3668-1, also reused in Power & Severe
  Service ch9a) — each cross-referenced by id in its own `notes` above.
  **Four figures checked with no match found:**
  `pp-cmp-flow-curve-choked-flow` (A3442/IL),
  `pp-cmp-generalized-rc-curve` (A3443/IL),
  `pp-cmp-typical-cavitation-damage-photo` (W1350 — this book shows the
  cavitation-damage photo standalone, unlike O&G/P&SS's paired composite),
  and `pp-cmp-viscous-flow-correction-factors` (A3446).
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook is the sole and sufficient source for all fourteen of
  this chapter's components.
