---
title: Component Index — Oil & Gas Sourcebook ch6
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch6 — Control Valve Cavitation and Flashing
updated: 2026-09-08
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 6

**Chapter 6 — "Control Valve Cavitation and Flashing."** Standing library-
cataloging pass, NOT tied to any course — built ahead of any course actually
needing these figures, per `Source Library.md`'s "two ways a component index
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

Record shape matches `Component Index — 14101 ch3.md` (and the ch5 batch of
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
  not separately catalogued here (component index catalogues figures, not
  equations) — cite the equation from the source text directly if a future
  slide needs it alongside this figure.
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

---

## Open items

- **Figure 6-5 does not exist** — verified by reading printed pp. 6-2–6-4 (PDF
  pages 62–63) directly: the figure sequence in the source runs
  ...6-4, 6-6, 6-7... with no 6-5 anywhere in the chapter. Not a cataloguing
  gap; nothing was skipped.
- **Figures 6-8 through 6-12 catalogued in the second batch** (this pass) —
  all five confirmed against the real page text and image before extraction;
  none were skipped or fabricated. Chapter 6 continues past printed p. 6-10
  into system-design alternatives and the cavitation-control summary — no
  further named figures were assigned to this pass; not catalogued here.
- All eleven records in this file are `used-by: []` — this is a proactive,
  use-driven-ahead catalog per `Source Library.md`; no course currently
  references them.
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
