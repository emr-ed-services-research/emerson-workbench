---
title: Component Index — Oil & Gas Sourcebook ch5
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch5 — Control Valve Noise
updated: 2026-09-08
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 5

**Chapter 5 — "Control Valve Noise."** Standing library-cataloging pass, NOT
tied to any course — built ahead of any course actually needing these
figures, per `Source Library.md`'s "two ways a component index gets
triggered."

- **First batch** — the six noise-abatement figures from the "Noise Control"
  and closing "Aerodynamic Noise Prediction" / "Noise Summary" sections,
  printed pp. 5-1 – 5-4 (PDF pages 56–59). Figure 5-7 ("Ball-Style Valve with
  Attenuator to Reduce Hydrodynamic Noise," printed p. 5-4, same page as
  Figure 5-6) was **not** part of this batch's assigned scope and is not
  catalogued here — see "Open items" below.

All from `20 - Source Library/Industry Specific Sourcebooks/Control Valve
Sourcebook - Oil & Gas.pdf`. Every record's `used-by` is `[]` — none are
placed on a slide yet; a future course resolves against these entries
instead of triggering reactive cataloging.

Record shape matches `Component Index — 14101 ch3.md`: `id` · `teaches` ·
`concept-tags` · `status` · `source` (`doc` + `locator`) · `delivery` ·
`used-by` · `notes`.

## Precedence

The Oil & Gas Sourcebook is itself a **current** document (© 2013 Fisher,
held in the Source Library's Industry Handbooks holdings — see `Industry
Handbooks.md`), so every record below is `status: current`. No archive or
legacy material was consulted for this batch.

## Components

### Chapter 5 — Aerodynamic noise source-treatment trim and accessories (printed pp. 5-1 – 5-2)

```yaml
id: ogas-cmp-cage-trim-noise-designs
teaches: >
  Two cage-style source-treatment trim designs for aerodynamic noise
  abatement. Upper view: a cage with many narrow parallel slots that
  minimizes turbulence and gives a favorable velocity distribution in the
  expansion area — an economical approach providing 15-20 dBA reduction with
  little or no flow-capacity loss. Lower view: a two-stage cage-style trim
  for high pressure-drop ratios (ΔP/P1), combining unique passage shape,
  multistage pressure reduction, frequency-spectrum shifting, exit-jet
  independence, velocity management, and complementary body design to reduce
  valve noise as much as 40 dBA.
concept-tags: [control valve noise, source treatment, cage-style trim, aerodynamic noise, multistage pressure reduction, noise reduction dBA, ΔP/P1]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 5 "Control Valve Noise," Figure 5-1 (drawing numbers W1257
      [upper view] and E0863 [lower view], printed p. 5-1) — "Figure 5-1.
      Valve Trim Designs for Reducing Aerodynamic Noise."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch5-fig1-cage-trim-designs-aerodynamic-noise.png
    locator: "already extracted — cropped directly from the source PDF (p. 56 / printed 5-1) at 300 dpi, both views + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Two distinct cutaway views under one figure number/caption — the upper
  (W1257) is a 3-D cutaway of a single-stage slotted cage; the lower (E0863)
  is an exploded/sectioned two-stage cage trim with INLET/OUTLET flow-arrow
  labels. Both views are kept together in the one extracted crop, matching
  how the source presents them as one figure.
```

```yaml
id: ogas-cmp-inline-diffuser-combination
teaches: >
  Path-treatment source noise control by splitting total pressure drop
  between the control valve and a fixed downstream restriction (an inline
  diffuser), sized and shaped for the specific installation so the valve
  and diffuser generate equal noise levels. Cutaway shows a globe-style
  control valve immediately upstream of an inline diffuser section in the
  same pipe run.
concept-tags: [control valve noise, path treatment, inline diffuser, pressure drop split, noise abatement]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 5 "Control Valve Noise," Figure 5-2 (drawing number W2618,
      printed p. 5-2) — "Figure 5-2. Valve and Inline Diffuser Combination."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch5-fig2-valve-inline-diffuser-combination.png
    locator: "already extracted — cropped directly from the source PDF (p. 57 / printed 5-2) at 300 dpi, chart + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Companion figure to `ogas-cmp-vent-diffuser-combination` below — same
  page, same diffuser-in-series concept, differing only in whether the
  downstream side discharges to more piping (this figure) or to atmosphere
  (Figure 5-3).
```

```yaml
id: ogas-cmp-vent-diffuser-combination
teaches: >
  Path-treatment noise control for systems venting to atmosphere, where
  high pressure ratios and high exit velocities make noise worse. Dividing
  the total pressure drop between the vent itself and an upstream control
  valve, via a vent diffuser, quiets both the valve and the vent — reducing
  overall system noise as much as 40 dBA. Cutaway shows a globe-style
  control valve with a right-angle riser to a vertical vent-diffuser stack
  discharging upward to atmosphere.
concept-tags: [control valve noise, path treatment, vent diffuser, atmospheric venting, pressure drop split, noise abatement]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 5 "Control Valve Noise," Figure 5-3 (drawing number W2672,
      printed p. 5-2) — "Figure 5-3. Valve and Vent Diffuser Combination."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch5-fig3-valve-vent-diffuser-combination.png
    locator: "already extracted — cropped directly from the source PDF (p. 57 / printed 5-2) at 300 dpi, chart + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Companion figure to `ogas-cmp-inline-diffuser-combination` above — same
  page, right-hand column. Text calls this combination able to reduce
  "overall system noise level as much as 40 dBA," the same headline figure
  quoted for the two-stage cage trim in Figure 5-1's lower view — both are
  distinct techniques (trim design vs. downstream diffuser) that reach a
  similar order-of-magnitude reduction; do not conflate them if both appear
  on a future slide.
```

### Chapter 5 — Aerodynamic noise: series-restriction trim and inline silencer (printed p. 5-3)

```yaml
id: ogas-cmp-series-restriction-anticavitation-trim
teaches: >
  A special valve trim design using the series-restriction concept —
  stacked, drilled disk-stage elements creating multiple pressure-reduction
  steps inside the valve body — to eliminate cavitation as a source-treatment
  approach to noise control. Sectioned cutaway shows the stacked disk-stack
  trim assembly inside a globe-valve body.
concept-tags: [control valve noise, series restriction, anti-cavitation trim, source treatment, cavitation elimination, staged pressure reduction]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 5 "Control Valve Noise," Figure 5-4 (drawing number W2673,
      printed p. 5-3) — "Figure 5-4. Special Valve Design to Eliminate
      Cavitation."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch5-fig4-special-valve-design-eliminate-cavitation.png
    locator: "already extracted — cropped directly from the source PDF (p. 58 / printed 5-3) at 300 dpi, chart + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Same series-restriction principle text-referenced for the Figure 5-1
  lower-view two-stage cage trim, but this figure is a different (drilled
  disk-stack) trim style applied specifically to cavitation elimination
  rather than general aerodynamic noise — keep the two figures/components
  distinct if a future course places both.
```

```yaml
id: ogas-cmp-inline-silencer
teaches: >
  A typical absorption-type inline silencer for gas systems — dissipates
  noise within the fluid stream and attenuates the noise level transmitted
  to the pipe's solid boundaries. Most realistic/economical path-treatment
  approach where high mass flow rates and/or high pressure ratios exist;
  economic considerations generally limit insertion loss to about 25 dBA.
  External cutaway shows a cylindrical inline silencer body with internal
  perforated/absorptive core visible at each flanged end.
concept-tags: [control valve noise, path treatment, inline silencer, absorption type, insertion loss, gas systems]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 5 "Control Valve Noise," Figure 5-5 (drawing number W1304,
      printed p. 5-3) — "Figure 5-5. Typical Inline Silencer."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch5-fig5-typical-inline-silencer.png
    locator: "already extracted — cropped directly from the source PDF (p. 58 / printed 5-3) at 300 dpi, chart + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A standalone silencer unit (installed in the pipe run downstream of the
  valve), distinct from the diffuser combinations of Figures 5-2/5-3, which
  show diffusers integrated directly at/after the valve outlet.
```

### Chapter 5 — Noise abatement equipment selected via the IEC prediction method (printed p. 5-4)

```yaml
id: ogas-cmp-globe-valve-noise-abatement-cage
teaches: >
  A globe-style control valve fitted with a noise-abatement cage for
  aerodynamic flow — one of the noise reduction equipment types the IEC
  60534-8-3 aerodynamic noise prediction method (five-step process:
  stream power at the vena contracta, acoustic power fraction, sound
  pressure conversion, pipe-wall transmission loss, distance/observer
  sound pressure level) helps select. Sectioned cutaway shows the valve
  body, cage, and stem/actuator connection.
concept-tags: [control valve noise, noise abatement cage, aerodynamic flow, IEC 60534-8-3, noise prediction, globe valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 5 "Control Valve Noise," Figure 5-6 (drawing number W6851,
      printed p. 5-4) — "Figure 5-6. Globe-Style Valve with Noise Abatement
      Cage for Aerodynamic Flow."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch5-fig6-globe-valve-noise-abatement-cage.png
    locator: "already extracted — cropped directly from the source PDF (p. 59 / printed 5-4) at 300 dpi, chart + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Paired in the source with Figure 5-7 ("Ball-Style Valve with Attenuator to
  Reduce Hydrodynamic Noise," same page) under the "Noise Summary" section's
  closing reference to "noise reduction equipment such as shown in Figures
  5-6 and 5-7" — Figure 5-7 addresses hydrodynamic (liquid/cavitation)
  noise rather than this figure's aerodynamic (gas) noise and was out of
  this batch's assigned scope; see "Open items."
```

```yaml
id: ogas-cmp-ball-valve-hydrodynamic-attenuator
teaches: >
  A ball-style control valve fitted with an internal attenuator (a curved
  perforated/slotted sleeve spanning part of the bore, downstream side) to
  reduce hydrodynamic noise. Hydrodynamic noise is noticeable noise
  associated with cavitation — traditionally described as sounding like
  rocks flowing inside the pipe. Paired in the source with Figure 5-6 as
  the two noise-reduction equipment examples the "Noise Summary" section
  points to together (aerodynamic cage vs. hydrodynamic attenuator).
  Sectioned cutaway shows a ball valve body, ball, stem, and the curved
  attenuator element mounted against the bore wall on the outlet side.
concept-tags: [control valve noise, hydrodynamic noise, cavitation, attenuator, ball valve, source treatment, noise abatement]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 5 "Control Valve Noise," Figure 5-7 (drawing number W6343,
      printed p. 5-4) — "Figure 5-7. Ball-Style Valve with Attenuator to
      Reduce Hydrodynamic Noise."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch5-fig7-ball-valve-hydrodynamic-noise-attenuator.png
    locator: "already extracted — cropped directly from the source PDF (p. 59 / printed 5-4) at 300 dpi, cutaway + drawing number + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Companion figure to `ogas-cmp-globe-valve-noise-abatement-cage` above —
  same page, same "Noise Summary" closing reference ("noise reduction
  equipment such as shown in Figures 5-6 and 5-7"). Figure 5-6 addresses
  aerodynamic (gas) noise via a cage; this figure addresses hydrodynamic
  (liquid/cavitation) noise via an attenuator sleeve — keep the two
  distinct if a future course places both. This entry was out of scope for
  the first ch5 batch (see the earlier "Open items" note, superseded by
  this record) and is catalogued here in a follow-up pass, 2026-09-08.
```

---

## Open items

- **Figure 5-7 is now catalogued** (`ogas-cmp-ball-valve-hydrodynamic-attenuator`,
  above) — added 2026-09-08 in a follow-up batch. The earlier note that it
  was out of the first batch's assigned scope is resolved.
- Chapter 5 continues past printed p. 5-4 (the "Noise Summary" section) —
  whether further figures follow was not checked; this batch's scope was
  the six named figures only.
- All six records in this file are `used-by: []` — this is a proactive,
  use-driven-ahead catalog per `Source Library.md`; no course currently
  references them.
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
