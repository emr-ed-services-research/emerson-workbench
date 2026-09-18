---
title: Subject-Matter Index — Oil & Gas Sourcebook ch6
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch6 — Control Valve Cavitation and Flashing
updated: 2026-09-08
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 6

**Chapter 6 — "Control Valve Cavitation and Flashing."** Standing library-
cataloging pass, NOT tied to any course — built ahead of any course actually
needing these figures, per `Source Library.md`'s "two ways a subject-matter index
gets triggered."

- **First batch** — the six figures from the chapter's opening theory section
  (defining cavitation/flashing, the bubble cycle, and material-damage
  mechanics), printed pp. 6-1 – 6-5 (PDF pages 61–64). Figure 6-5 does not
  exist in the source (the figure sequence in this section runs 6-1 through
  6-4, then jumps to 6-6 and 6-7 — confirmed by reading the actual pages, not
  assumed); this is not a gap in this batch's cataloguing.
- **Second batch** — the five hardware-selection figures from the chapter's
  flashing- and cavitation-hardware sections (printed pp. 6-6 – 6-10, PDF
  pages 65–69): Figures 6-8 through 6-12. All five confirmed against the
  real page text before extraction (each hint matched what the source page
  actually shows).

All from `20 - Source Library/Industry Specific Sourcebooks/Control Valve
Sourcebook - Oil & Gas.pdf`. Every record's `used-by` is `[]` — none are
placed on a slide yet; a future course resolves against these entries
instead of triggering reactive cataloging.

Record shape matches `Subject-Matter Index — 14101 ch3.md` (and the ch5 batch of
this same chapter series): `id` · `teaches` · `concept-tags` · `status` ·
`source` (`doc` + `locator`) · `delivery` · `used-by` · `notes`.

## Precedence

The Oil & Gas Sourcebook is itself a **current** document (© 2013 Fisher,
held in the Source Library's Industry Handbooks holdings — see `Industry
Handbooks.md`), so every record below is `status: current`. No archive or
legacy material was consulted for this batch.

## Components

### Chapter 6 — Defining cavitation and flashing (printed pp. 6-1 – 6-3)

```yaml
id: ogas-cmp-restriction-pressure-profile
teaches: >
  The pressure profile of liquid flow through a simple restriction: pressure
  falls from P1 to a minimum at the vena contracta (the point of minimum flow
  area, downstream of the physical restriction), then recovers toward P2.
  Two recovery cases are shown — high recovery and low recovery — which
  determine how close the recovered downstream pressure comes back to the
  inlet pressure.
concept-tags: [cavitation, flashing, vena contracta, pressure profile, restriction, pressure recovery, high recovery, low recovery]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-1 (drawing
      number A3444, printed p. 6-1) — "Figure 6-1. Pressure profile of flow
      through a restriction."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig1-pressure-profile-restriction.png
    locator: "already extracted — cropped directly from the source PDF (p. 61 / printed 6-1) at 300 dpi, both the flow-restriction schematic and the pressure-profile curve + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Companion figure to `ogas-cmp-velocity-pressure-vena-contracta` below — same
  page, the same restriction referenced from the pressure side (this figure)
  vs. the velocity side (Figure 6-2). The text explicitly cross-references
  both figures together when introducing the vena contracta concept.
```

```yaml
id: ogas-cmp-velocity-pressure-vena-contracta
teaches: >
  Companion pressure-and-velocity curves through the same restriction as
  Figure 6-1: velocity peaks exactly at the vena contracta (where pressure is
  at its minimum), illustrating that the highest flow rate occurs at that
  point. Two stacked plots share one x-axis (distance downstream) — pressure
  on top, velocity on bottom — so the reader can see cause (pressure drop)
  and effect (velocity rise) line up at the same location.
concept-tags: [cavitation, flashing, vena contracta, velocity, pressure, restriction, flow rate]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-2 (drawing
      number E0109, printed p. 6-1) — "Figure 6-2. Pressure versus velocity
      curves illustrate that the highest flow rate occurs at the vena
      contracta."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig2-pressure-velocity-vena-contracta.png
    locator: "already extracted — cropped directly from the source PDF (p. 61 / printed 6-1) at 300 dpi, both stacked plots + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Companion figure to `ogas-cmp-restriction-pressure-profile` above — same
  page. If a future slide uses both, keep them visually paired as the source
  does (6-1 above 6-2, same restriction).
```

```yaml
id: ogas-cmp-cavitation-flashing-pressure-recovery
teaches: >
  The graphical definition of the difference between cavitation and
  flashing: both phenomena follow the same pressure drop into the vena
  contracta, but diverge on recovery — a cavitating liquid's pressure
  recovers back above the vapor pressure Pv (P2 cavitating), while a
  flashing liquid's downstream pressure stays below Pv (P2 flashing). This
  is the chapter's core distinguishing figure between the two phenomena.
concept-tags: [cavitation, flashing, vapor pressure, pressure recovery, P2 cavitating, P2 flashing, phase change]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-3 (drawing
      number A3445, printed p. 6-2) — "Figure 6-3. Pressure recovery above
      the vapor pressure of the liquid results in cavitation. Remaining
      below the vapor pressure incures [sic] flashing."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig3-pressure-recovery-cavitation-flashing.png
    locator: "already extracted — cropped directly from the source PDF (p. 62 / printed 6-2) at 300 dpi, curve + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The source caption itself has a typo ("incures" for "incurs") — quoted
  verbatim above per the locator convention; do not silently correct it if
  quoting the caption again on a future slide's source line, or note the
  correction explicitly if cleaned up for on-slide use.
```

```yaml
id: ogas-cmp-choked-flow-deltaP-allowable
teaches: >
  Liquid choked flow: as pressure differential across a restriction
  increases, actual flow rate initially tracks the predicted flow from the
  Q = Cv·sqrt((P1-P2)/G) relationship, but breaks away and flattens once
  enough vapor forms from cavitation — flow becomes constant despite further
  increases in pressure drop. The gap between "actual flow" and "predicted
  flow using actual ΔP" at a given point is the choked-flow effect; ΔP
  allowable marks where the flow curve goes flat.
concept-tags: [choked flow, ΔP allowable, cavitation, Cv, liquid sizing, vena contracta, flow rate]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-4 (drawing
      number E0110, printed p. 6-2) — "Figure 6-4. The ΔP allowable equation
      will predict the occurrence of fully choked flow."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig4-choked-flow-deltaP-allowable.png
    locator: "already extracted — cropped directly from the source PDF (p. 62 / printed 6-2) at 300 dpi, chart + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Companion to equation 6-2 (Q = Cv·sqrt((P1-P2)/G)) in the surrounding text,
  not separately catalogued here (subject-matter index catalogues figures, not
  equations) — cite the equation from the source text directly if a future
  slide needs it alongside this figure.
```

```yaml
id: ogas-topic-cavitation-flashing-mechanism
kind: topic
teaches: >
  Both cavitation and flashing begin identically: as pressure falls from
  inlet toward the vena contracta, a point is reached where local fluid
  pressure equals vapor pressure and the liquid begins turning to vapor
  (nucleation of bubbles, same phenomenon as boiling but driven by velocity-
  induced pressure drop rather than temperature). The two phenomena diverge
  only at recovery: if downstream pressure recovers back above vapor
  pressure, the vapor bubbles collapse (implode) back to liquid — this is
  cavitation, a liquid-vapor-liquid phase change. If downstream pressure
  stays below vapor pressure, the bubbles persist and grow — this is
  flashing. The distinction matters practically: flashing is a system
  phenomenon (governed by P2 and Pv alone) that no control valve design can
  prevent — only its damage can be mitigated by materials/design choices —
  while cavitation, because it depends on recovery behavior inside/after the
  valve, CAN be prevented by correct valve selection. The relationship is
  also expressible via Bernoulli's Equation (equation 6-1) between P1 and
  the vena contracta: an increase in velocity (kinetic energy) must be
  offset by a decrease in static pressure.
concept-tags: [cavitation, flashing, vena contracta, vapor pressure, phase change, Bernoulli, nucleation, system phenomenon, valve-preventable]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 6 \"Control Valve Cavitation and Flashing,\" running text, printed pp. 6-1–6-3 (PDF pp. 61-63), between Figures 6-2 and 6-3, and again after Figure 6-3"
relatedFigures: [ogas-cmp-restriction-pressure-profile, ogas-cmp-velocity-pressure-vena-contracta, ogas-cmp-cavitation-flashing-pressure-recovery]
relatedTopics: [cvh-topic-cavitation, cvh-topic-flashing, cvh-topic-vena-contracta, ogas-topic-bubble-cycle]
used-by: []
notes: >
  Complements rather than duplicates CVH's cvh-topic-cavitation/
  cvh-topic-flashing — this sourcebook's real value-add is the explicit
  "flashing is system-governed, cavitation is valve-preventable" practical
  distinction and the direct Bernoulli-equation tie-in, not restated
  elsewhere. Read directly from the real running prose, not inferred from
  the three figures' own captions.
```

```yaml
id: ogas-topic-bubble-cycle
kind: topic
teaches: >
  The bubble cycle names the four sequential phase-change events that occur
  when a liquid cavitates: (1) nucleation — bubble formation typically
  seeded by a small entrained noncondensible-gas nucleus of a minimum
  required size; (2) growth — the bubble grows as it crosses the reduced-
  pressure region, driven by continually decreasing pressure and increasing
  vaporization; (3) collapse — pressure recovery halts growth and forces the
  bubble to implode; (4) rebound — under some conditions, several growth-
  and-collapse cycles repeat in series before the cycle fully resolves. The
  cycle's behavior directly drives cavitation's four negative side effects:
  excessive noise, excessive vibration, material damage, and deterioration
  of flow effectiveness.
concept-tags: [cavitation, bubble cycle, nucleation, growth, collapse, rebound, noncondensible gas, cavitation side effects]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 6 \"Control Valve Cavitation and Flashing,\" \"Bubble Cycle\" running text, printed p. 6-3 (PDF p. 63)"
relatedTopics: [ogas-topic-cavitation-flashing-mechanism, cvh-topic-cavitation, ogas-topic-cavitation-damage-mechanism]
used-by: []
notes: >
  No figure anywhere in the chapter names or diagrams this four-stage cycle
  by name — entirely invisible to the original figures-only pass.
```

```yaml
id: ogas-topic-liquid-choked-flow
kind: topic
teaches: >
  Liquid flow through a restriction normally follows Q = Cv·√((P1-P2)/G)
  (equation 6-2) — flow rate proportional to the square root of pressure
  drop. This relationship breaks down once enough vapor forms from
  cavitation: less flow increase is realized per unit of added pressure
  differential, until flow becomes constant regardless of further pressure-
  drop increases (choked flow). The exact mechanism isn't fully confirmed,
  but a parallel exists to gas critical flow: gas chokes when flow velocity
  equals the acoustic (sonic) wave speed. Pure liquids have a very high
  acoustic wave speed (so they don't choke this way), but a partially-
  vaporized two-phase liquid mixture has a much lower acoustic wave speed —
  actually lower than a pure gas's — making it possible for the mixture
  velocity to reach that lowered sonic velocity and choke the flow.
concept-tags: [choked flow, ΔP allowable, Cv, liquid sizing, cavitation, sonic velocity, two-phase flow, acoustic wave speed]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 6 \"Control Valve Cavitation and Flashing,\" running text, printed p. 6-3 (PDF p. 63), surrounding Figure 6-4 and equation 6-2"
relatedFigures: [ogas-cmp-choked-flow-deltaP-allowable]
relatedTopics: [ogas-topic-cavitation-flashing-mechanism]
used-by: []
notes: >
  Figure 6-4's own catalogued entry explicitly deferred the equation/
  mechanism explanation as "not separately catalogued" since a Component
  Index catalogues figures, not equations — this topic entry is exactly
  that deferred content, now captured for real.
```

### Chapter 6 — Cavitation damage mechanics (printed pp. 6-4 – 6-5)

```yaml
id: ogas-cmp-cavitation-vs-flashing-damage-photos
teaches: >
  Side-by-side photographic comparison of the two damage appearances: the
  top plug shows the characteristic rough, irregular, "cinder-like" texture
  of cavitation damage; the lower photo shows the smooth, polished
  appearance characteristic of flashing damage. The two damage mechanisms
  vary greatly in appearance despite both being liquid-phase-change related.
concept-tags: [cavitation damage, flashing damage, material damage, cinder-like appearance, polished appearance, valve plug erosion]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-6 (drawing
      numbers W2843 [upper photo, cavitation] and W2842 [lower photo,
      flashing], printed p. 6-4) — "Figure 6-6. The top plug shows the
      characteristic rough texture of cavitation damage, which differs
      greatly from the polished appearance of damage due to flashing (lower
      photo). The two damage mechanisms vary greatly."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig6-cavitation-vs-flashing-damage-photos.png
    locator: "already extracted — cropped directly from the source PDF (p. 63 / printed 6-4) at 300 dpi, both photos (W2843 upper, W2842 lower) + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Two distinct photographed valve plugs under one figure number/caption —
  kept together in the one extracted crop, matching how the source presents
  them as one figure (same pattern as `ogas-cmp-cage-trim-noise-designs` in
  the ch5 index, which also combines two views under one figure number).
  Figure 6-5 does not exist in the source between Figures 6-4 and 6-6 — the
  text's own figure numbering skips from 6-4 to 6-6 (confirmed by reading pp.
  6-2 through 6-4 directly; not an extraction gap on this batch's part).
```

```yaml
id: ogas-cmp-microjet-collapse-mechanism
teaches: >
  The mechanical sequence of an asymmetric vapor-bubble collapse that forms
  a damaging high-velocity liquid microjet: (1) initial spherical bubble, (2)
  perturbation of the side away from the surface, (3) the upper fluid
  penetrates the flattened side, (4) formation of a liquid jet that impinges
  on the metal surface below. This is the most probable mechanical-attack
  mechanism behind cavitation erosion damage (as distinct from the less
  dominant shock-wave-impingement mechanism).
concept-tags: [cavitation, bubble collapse, microjet, mechanical attack, erosion, asymmetric collapse, material damage mechanism]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-7 (drawing
      number E0111, printed p. 6-5) — "Figure 6-7. The implosion of
      cavitation vapor cavities is rapid, asymmetric and very energetic. The
      mechanics of collapse give rise to high velocity liquid jets, which
      impinge on metallic surfaces. Ultimately, the metal fatigues and
      breaks away in small pieces."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig7-bubble-collapse-jet-formation.png
    locator: "already extracted — cropped directly from the source PDF (p. 64 / printed 6-5) at 300 dpi, all four sequence panels + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A four-panel sequence diagram (not a single image) — kept as one crop since
  the source presents all four panels as one figure and one caption walking
  the sequence left to right. If a future slide needs to isolate one panel
  (e.g. just "formation of jet"), that is a new crop decision at time of use,
  not a reason to split this record now.
```

```yaml
id: ogas-topic-cavitation-damage-mechanism
kind: topic
teaches: >
  Cavitation damage results from two interacting attack modes on the
  material surface. Mechanical attack occurs two ways: (1) high-velocity
  microjets from asymmetric bubble collapse (the dominant, most-supported
  mechanism, per Figure 6-7) and (2) shock-wave impingement from
  collapse — analytically estimated as not damaging on initial collapse,
  but increasingly damaging on later rebound collapses. Chemical attack is
  secondary but reinforcing: mechanical attack strips protective surface
  films/oxides, exposing base material to chemical attack it otherwise
  resists. Four variables influence total damage, several with genuinely
  OPPOSING effects, not a simple monotonic relationship: air content (more
  entrained air = more cavitation nuclei = more cavities, but past a point
  disrupts the mechanical-attack component and reduces total damage);
  backpressure P2 (lower P2 increases the number of cavities formed — worse —
  but also lowers the collapse pressure differential P2-Pv — less intense);
  and pressure changes shift WHERE damage occurs (upstream vs. downstream)
  as well as how much. Overall damage is a function of cavitation
  intensity/degree, material of construction, and time of exposure — real
  influences, not yet fully quantifiable per the source's own admission.
concept-tags: [cavitation damage, mechanical attack, chemical attack, microjet, shock wave, air content, backpressure, material damage factors]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 6 \"Control Valve Cavitation and Flashing,\" running text, printed pp. 6-4–6-5 (PDF pp. 64-65), surrounding Figures 6-6 and 6-7"
relatedFigures: [ogas-cmp-cavitation-vs-flashing-damage-photos, ogas-cmp-microjet-collapse-mechanism]
relatedTopics: [ogas-topic-bubble-cycle, ogas-topic-cavitation-flashing-noise-levels]
used-by: []
notes: >
  The two figures in this section catalogue WHAT damage looks like and the
  microjet mechanism specifically — this topic entry adds the chemical-
  attack synergy and the four influencing variables (with their opposing
  trends), none of which appear in either figure's own caption.
```

```yaml
id: ogas-topic-cavitation-flashing-noise-levels
kind: topic
teaches: >
  Cavitation noise, while sometimes quite high, is treated as secondary to
  material-damage risk — if cavitation is prevented, the resulting noise
  from liquid flow will be less than 90 dBA. Flashing noise is treated
  separately and more simply: a flashing valve's noise level will be less
  than 85 dBA regardless of the pressure drop involved in creating the
  flashing (flashing noise doesn't scale with ΔP the way cavitation
  intensity does).
concept-tags: [cavitation noise, flashing noise, dBA, noise prediction, material damage priority]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 6 \"Control Valve Cavitation and Flashing,\" \"Noise\" running text, printed p. 6-5 (PDF p. 65)"
relatedTopics: [ogas-topic-cavitation-damage-mechanism]
used-by: []
notes: >
  A short but entirely un-figured subsection ("Noise") — no figure anywhere
  in the chapter carries these two real, specific dBA thresholds.
```

### Chapter 6 — Hardware choices for flashing and cavitation control (printed pp. 6-6 – 6-10)

```yaml
id: ogas-cmp-eas-valve-outlet-liner
teaches: >
  Angle-valve hardware choice for flashing service: a Design EAS valve with a
  downstream restricted-trim adaptor and a replaceable outlet liner. The
  liner absorbs flashing erosion downstream of the throttling point so the
  valve body itself is protected — the liner, not the body, is the
  sacrificial part, and it can be replaced far more economically.
concept-tags: [flashing, angle valve, Design EAS, outlet liner, restricted-trim adaptor, erosion resistance, sacrificial liner, flashing damage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-8 (drawing
      number W0970, printed p. 6-6) — "Figure 6-8. Design EAS valve with
      outlet liner is used for flashing service. The liner resists erosion
      and protects the body."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig8-eas-valve-outlet-liner.png
    locator: "already extracted — cropped directly from the source PDF (p. 65 / printed 6-6) at 300 dpi, full cutaway (RESTRICTED-TRIM ADAPTOR + LINER callouts) + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own callouts ("RESTRICTED-TRIM ADAPTOR", "LINER") are printed
  leader-line labels on the drawing itself — per Style Guide §6.1/§6.2, these
  stay as the source drew them if this figure is used directly; do not
  renumber or replace them with house numbered markers without a stated
  reason. Companion figure: `ogas-cmp-rotary-plug-flashing-resistance`
  (Figure 6-9) — the text presents the angle-valve-with-liner and rotary-
  plug-valve as the two hardware choices for flashing service, in that order.
```

```yaml
id: ogas-cmp-rotary-plug-flashing-resistance
teaches: >
  Rotary plug valve (Design V500, reverse flow trim direction, trim level 3)
  as the second hardware choice for flashing service: installed with the
  plug facing the downstream side of the body so flashing occurs downstream
  of the valve rather than within the body — an alternative to the angle-
  valve-with-liner approach, suited to medium-to-low-pressure flashing
  applications.
concept-tags: [flashing, rotary plug valve, Design V500, reverse flow trim direction, trim level 3, erosion resistance, downstream flashing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-9 (drawing
      number W8359, printed p. 6-7) — "Figure 6-9. Rotary plug valves, such
      as the Design V500 (reverse flow trim direction, trim level 3) have
      excellent erosion resistance and perform well in flashing service."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig9-rotary-plug-valve-flashing-service.png
    locator: "already extracted — cropped directly from the source PDF (p. 66 / printed 6-7) at 300 dpi, full 3D cutaway rendering + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Companion to `ogas-cmp-eas-valve-outlet-liner` (Figure 6-8) — see that
  record's notes. This is a rendered 3D cutaway (no printed part callouts),
  unlike Figure 6-8's labelled line drawing.
```

```yaml
id: ogas-topic-flashing-hardware-selection-rationale
kind: topic
teaches: >
  Flashing damage occurs when high-velocity vapor bubbles impinge on a
  valve's internal surfaces — valve design has no bearing on WHETHER
  flashing occurs (that's system-governed, see ogas-topic-cavitation-
  flashing-mechanism) but strongly affects HOW MUCH damage results. Angle
  valves with a downstream liner (Figure 6-8) work by directing flow into
  the center of the downstream pipe rather than into the valve body itself —
  if damage occurs, it's the liner (a comparatively cheap replaceable part)
  taking it, not the body. Rotary plug valves (Figure 6-9) work by a
  different mechanism: installed with the plug facing downstream, flashing
  is pushed to occur downstream of the valve entirely, sometimes using a
  sacrificial spool piece to absorb it; suited to medium-to-low-pressure
  flashing applications specifically.
concept-tags: [flashing, angle valve, rotary plug valve, hardware selection rationale, sacrificial liner, downstream flashing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 6 \"Control Valve Cavitation and Flashing,\" \"Valve Design\" running text, printed p. 6-6 (PDF p. 66), surrounding Figures 6-8 and 6-9"
relatedFigures: [ogas-cmp-eas-valve-outlet-liner, ogas-cmp-rotary-plug-flashing-resistance]
relatedTopics: [ogas-topic-cavitation-flashing-mechanism, ogas-topic-cavitation-flashing-materials-selection]
used-by: []
notes: >
  The two hardware figures' own captions name WHAT each design is; this
  topic entry captures WHY each works (the mechanism the source's running
  text gives), which neither caption states.
```

```yaml
id: ogas-topic-cavitation-flashing-materials-selection
kind: topic
teaches: >
  Material performance in flashing/cavitating service depends on toughness,
  hardness, and corrosion resistance in the specific application
  environment. Hardness ranks materials reliably WITHIN one family (e.g.
  comparing 400-series stainless steels to each other) but does NOT
  correlate across different material families — cobalt-chromium-tungsten
  Alloy 6 substantially outperforms hardened 410 or 17-4 stainless steel
  against cavitation/flashing despite all three having roughly the same
  hardness, because Alloy 6 has a built-in "energy-absorbing" mechanism
  shared by cobalt-base alloys generally (though Alloy 6 has a real
  weakness: accelerated erosion-corrosion attack in amine-treated feedwater
  service). Common materials for this service: Alloy 6 (solid/overlay),
  nickel-chromium-boron alloys, hardened 440C/17-4/410/416 stainless. For
  standard (relatively soft) valve-body materials, resistance correlates
  with chromium and molybdenum content — chromium-molybdenum alloy steels
  beat carbon steels, stainless steels beat chromium-molybdenum steels.
  ASME SA217 grade WC9 has displaced the historically-common grade C5
  (better casting/welding/manufacturing characteristics) despite lower
  chromium content (2-1/4% vs. 5%), because its higher molybdenum content
  (1% vs. 1/2%) compensates.
concept-tags: [materials selection, Alloy 6, stainless steel, chromium molybdenum, ASME SA217, cavitation resistance, flashing resistance, hardness]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 6 \"Control Valve Cavitation and Flashing,\" \"Materials of Construction\" running text, printed pp. 6-6–6-7 (PDF pp. 66-67)"
relatedTopics: [ogas-topic-flashing-hardware-selection-rationale]
used-by: []
notes: >
  Entirely un-figured subsection — no figure anywhere in this chapter
  carries any of this real, specific material-comparison content
  (Alloy 6 vs. stainless, chromium-molybdenum correlation, SA217 grade
  C5 vs. WC9). Cross-references "Alloy 6 Corrosion" in Chapter 10 — a
  real forward pointer to another chapter, noted but not resolved here
  (Chapter 10 is a separate indexing pass).
```

```yaml
id: ogas-cmp-cavitrol-pressure-staging-graph
teaches: >
  Pressure-drop staging concept behind Cavitrol trim: pressure falls through
  a series of unequal-area restrictions (six stages shown), each stage's
  drop dissipating energy and presenting a lower inlet pressure to the next.
  Two curves compare "equal drop through six stages" against the actual
  Cavitrol IV trim staging (unequal steps, expanding flow area from stage to
  stage) — the staged design keeps the vena contracta pressure Pvc from
  falling below vapor pressure Pv until the final stage, preventing
  cavitation until deliberately allowed right at the end.
concept-tags: [Cavitrol trim, pressure drop staging, vena contracta, vapor pressure, expanding flow area, cavitation control, multi-stage trim, P1, P2, Pv, Pvc]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-10 (drawing
      number A2149-1, printed p. 6-8) — "Figure 6-10. In Cavitrol™ trim, the
      pressure drop is staged in two or more unequal steps. Staging is
      accomplished by increasing the flow area from stage to stage. This
      stepped reduction allows full pressure drop without the vena contracta
      pressure falling below the vapor pressure of the liquid."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig10-cavitrol-pressure-drop-staging-graph.png
    locator: "already extracted — cropped directly from the source PDF (p. 67 / printed 6-8) at 300 dpi, full chart (both curves, all callouts) + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A line chart with in-plot leader-line callouts ("EQUAL DROP THROUGH SIX
  STAGES", "INLET PRESSURE TO FINAL STAGE", "CAVITROL IV TRIM") printed by
  the source itself — per §6.1/§6.2 these stay as drawn if used directly;
  this is source figure content, not a Style Guide §5 house-authored graph,
  so §5's "no leader crosses the plot area" key convention does not apply to
  it as extracted.
```

```yaml
id: ogas-cmp-drilled-hole-cage-designs
teaches: >
  Three drilled-hole cage cross-sections compared for cavitation-control
  trim: thin plate (low Cv, high FL²  — inefficient flow but low pressure
  recovery), thick plate (high Cv, low FL² — efficient flow but high
  pressure recovery), and the Cavitrol hole (high Cv, high FL² — combines
  the geometric effects of both to optimize capacity and recovery
  simultaneously). The Cavitrol hole design is used exclusively in Cavitrol
  cages.
concept-tags: [Cavitrol trim, drilled hole design, thin plate, thick plate, Cavitrol hole, Cv, FL2, pressure recovery, cavitation control cage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-11 (drawing
      number E0113-1, printed p. 6-9) — "Figure 6-11. By combining the
      geometric effects of thick plates and thin plates, it is possible to
      design a flow passage that optimizes capacity and recovery coefficient
      values. These carefully designed passages are used exclusively in
      Cavitrol cages."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig11-drilled-hole-cross-sections.png
    locator: "already extracted — cropped directly from the source PDF (p. 68 / printed 6-9) at 300 dpi, all three cross-section pairs + labels + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Six line-drawing cross-sections (two rows × three designs) under one
  figure number/caption, kept together in the one extracted crop — same
  one-figure-multiple-views pattern as `ogas-cmp-cavitation-vs-flashing-damage-photos`
  and `ch3-cmp-fail-mode-matrix`. The "THIN PLATE / THICK PLATE / CAVITROL
  HOLE" and "LOW Cv / HIGH Cv" etc. labels are printed directly on the source
  figure (§6.1/§6.2 — stay as drawn).
```

```yaml
id: ogas-cmp-cavitrol-iv-trim-cutaway
teaches: >
  Cavitrol IV trim cutaway: a multi-stage drilled-hole cage stack providing
  cavitation protection at pressures to 6500 psig via a four-stage expanding-
  flow-area pressure drop, with all significant pressure drop taken
  downstream of the shutoff seating surface — the physical hardware
  implementation of the separate-seating-and-throttling-locations concept
  and the pressure-staging concept shown graphically in Figure 6-10.
concept-tags: [Cavitrol IV trim, cavitation control, multi-stage cage, expanding flow area, shutoff seating surface, separate seating and throttling, high pressure drop]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 6 "Control Valve Cavitation and Flashing," Figure 6-12 (drawing
      number W3668-1, printed p. 6-10) — "Figure 6-12. Cavitrol IV trim
      provides cavitation protection at pressures to 6500 psig. It uses
      expanding flow areas to affect a four-stage pressure drop. All
      significant pressure drop is taken downstream of the shutoff seating
      surface."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch6-fig12-cavitrol-IV-trim-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 69 / printed 6-10) at 300 dpi, full body cutaway + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Pairs conceptually with `ogas-cmp-cavitrol-pressure-staging-graph` (Figure
  6-10, the graphical staging concept) and `ogas-cmp-drilled-hole-cage-designs`
  (Figure 6-11, the hole-design comparison) — this figure is the physical
  hardware the other two explain the theory behind. A future slide sequence
  teaching Cavitrol trim end-to-end would likely use all three together.
```

```yaml
id: ogas-topic-cavitation-control-trim-theories
kind: topic
teaches: >
  Seven named design theories underlie Fisher's cavitation-control trim
  designs: tortuous path, pressure drop staging, expanding flow area,
  drilled hole design, characterized cage, separation of seating and
  throttling locations, and cavitation control in lieu of prevention.
  Pressure drop staging routes flow through multiple restrictions in
  series, each dissipating energy and presenting a lower inlet pressure to
  the next stage — for the same total pressure differential, staged trim
  keeps the vena contracta pressure higher than conventional (single-
  restriction) trim, and even if the design differential IS exceeded and
  cavitation occurs anyway, its intensity is reduced because the recovered
  (collapse-driving) pressure is lower. Expanding flow area is a closely
  related refinement: each successive restriction has a LARGER flow area
  than the last, so the final (most cavitation-prone) restriction carries
  only a small fraction of the total pressure drop — this needs fewer
  stages than equal-area staging for the same protection. Characterized
  cages (e.g. Cavitrol III) change their internal design as travel
  increases — starting pressure-staging, transitioning to straight-through
  hole design — because "capacity is inversely related to a design's
  ability to prevent cavitation"; only applicable where pressure drop
  genuinely decreases as flow/travel increases. Fisher's Dirty Service Trim
  (DST) addresses a real tradeoff cavitation-control trims otherwise have
  (fine flow passages plugging with particulate): DST passes particles up
  to 3/4 inch while still controlling cavitation to 4000 psig drops.
concept-tags: [Cavitrol trim, pressure drop staging, expanding flow area, characterized cage, drilled hole design, Dirty Service Trim, DST, cavitation control theory]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 6 \"Control Valve Cavitation and Flashing,\" \"Hardware Choices for Cavitating Applications\" through \"Characterized Cages,\" running text, printed pp. 6-7–6-9 (PDF pp. 67-69), surrounding Figures 6-10 and 6-11"
relatedFigures: [ogas-cmp-cavitrol-pressure-staging-graph, ogas-cmp-drilled-hole-cage-designs]
relatedTopics: [ogas-topic-cavitation-flashing-mechanism, ogas-topic-seating-throttling-separation-rationale]
used-by: []
notes: >
  Figures 6-10/6-11 catalogue the staging graph and hole-design comparison
  specifically; this topic entry adds the 7-theory organizing taxonomy,
  the "why staging still helps even past its design point" reasoning, the
  characterized-cage applicability restriction, and DST — none of which
  have a figure at all in this chapter.
```

```yaml
id: ogas-topic-seating-throttling-separation-rationale
kind: topic
teaches: >
  Most cavitating applications need BOTH cavitation control and tight
  shutoff — achieved by physically separating the throttling location
  (where pressure drop happens) from the seating location (where shutoff
  happens), with seating upstream of throttling so the seat experiences
  low velocity (velocity is inversely related to pressure, and the seat
  sees relatively little pressure drop). A real hardware innovation
  extending this: a softer seating material than the plug material allows
  slight seat deformation for much better plug/seat contact — enabling
  Class VI shutoff on trims that also control cavitation.
concept-tags: [separate seating and throttling, Class VI shutoff, soft seating material, cavitation control, tight shutoff]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 6 \"Control Valve Cavitation and Flashing,\" \"Separate Seating and Throttling Locations,\" printed p. 6-9 (PDF p. 69)"
relatedFigures: [ogas-cmp-cavitrol-iv-trim-cutaway]
relatedTopics: [ogas-topic-cavitation-control-trim-theories]
used-by: []
notes: >
  Figure 6-12's own caption states WHAT the design does (four-stage
  pressure drop, all significant drop downstream of shutoff seating); this
  topic adds WHY (velocity-pressure relationship at the seat) and the
  soft-seating-material Class VI innovation, neither in the figure caption.
```

```yaml
id: ogas-topic-backpressure-device-alternative
kind: topic
teaches: >
  An alternative to specialized cavitation-control trim hardware: a
  standard trim valve paired with a downstream backpressure device, which
  raises the valve's downstream pressure (and therefore the vena contracta
  pressure) enough to stay above vapor pressure, preventing cavitation
  without special trim. Real, specific tradeoffs against this approach: a
  larger valve may be needed since the pressure drop across it is lowered;
  cavitation may simply relocate to the backpressure device itself; the
  device can only be correctly sized for ONE operating condition — other
  conditions may still allow cavitation; device wear over time reduces the
  backpressure and can reintroduce cavitation; and during valve opening
  against high upstream pressure, before flow reaches and stabilizes at the
  backpressure device, the valve briefly experiences the FULL system
  pressure drop — a real, often-overlooked damage-potential window. System
  design overall (correct sizing/layout) is framed as the most economical
  prevention method, though even good system design usually still needs
  some cavitation-type valve.
concept-tags: [backpressure device, system design, cavitation prevention, vena contracta pressure, cavitation control alternatives]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 6 \"Control Valve Cavitation and Flashing,\" \"Cavitation Control Hardware Alternatives\" and \"System Design,\" printed pp. 6-9–6-11 (PDF pp. 69-71)"
relatedTopics: [ogas-topic-cavitation-control-trim-theories, ogas-topic-cavitation-flashing-mechanism]
used-by: []
notes: >
  An entire real subsection with no figure at all — invisible to the
  original figures-only pass. The chapter's closing "Cavitation Control
  Summary" (p. 6-11) was read directly and confirmed to be a pure recap of
  concepts already captured across this file's topic entries — not
  authored as its own separate topic to avoid a content duplicate.
```

---

## Open items

- **Figure 6-5 does not exist** — verified by reading printed pp. 6-2–6-4 (PDF
  pages 62–63) directly: the figure sequence in the source runs
  ...6-4, 6-6, 6-7... with no 6-5 anywhere in the chapter. Not a cataloguing
  gap; nothing was skipped.
- **Figures 6-8 through 6-12 catalogued in the second batch** — all five
  confirmed against the real page text and image before extraction; none
  were skipped or fabricated.
- **Full-chapter `kind: topic` pass completed 2026-09-17** (third batch,
  same rigor as the Control Valve Handbook's own full-chapter topic-index
  pass) — the whole chapter, printed pp. 6-1 through 6-11 (PDF pp. 61-71,
  confirmed by reading directly through to the real Chapter 7 boundary),
  was read start to finish via `pdftotext`, not just the sections already
  holding a figure. 10 new `ogas-topic-*` entries added: the cavitation/
  flashing mechanism and Bernoulli relationship, the bubble cycle, liquid
  choked flow, the cavitation damage mechanism (mechanical + chemical
  attack, four influencing variables), cavitation/flashing noise levels,
  flashing-hardware selection rationale, materials selection (an entirely
  un-figured subsection — Alloy 6 vs. stainless, chromium-molybdenum
  content, ASME SA217 grade choices), the cavitation-control trim design
  theories (7 named approaches, characterized cages, Dirty Service Trim),
  the seating/throttling-separation rationale, and the backpressure-device
  alternative (also entirely un-figured — pp. 6-9–6-11, previously flagged
  in this file's own second-batch note as "not catalogued here"). The
  chapter's closing "Cavitation Control Summary" (p. 6-11) was read and
  confirmed to be a pure recap of already-captured content, not a new
  concept — deliberately not given its own topic entry to avoid a content
  duplicate. Chapter total is now 21 components (11 figures + 10 topics).
- All 21 records in this file are `used-by: []` — this is a proactive,
  use-driven-ahead catalog per `Source Library.md`; no course currently
  references them.
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
