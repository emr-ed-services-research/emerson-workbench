---
title: Component Index — Oil & Gas Sourcebook ch3
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch3 — Liquid Valve Sizing
updated: 2026-09-08
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 3

**Chapter 3 — "Liquid Valve Sizing."** Standing library-cataloging pass, NOT
tied to any course — built ahead of any course actually needing these
figures, per `Source Library.md`'s "two ways a component index gets
triggered." Chapter 3 begins on PDF page 40 (printed p. 3-1), immediately
following Chapter 2's close (see `Component Index — Oil & Gas Sourcebook
ch2.md` "Open items" — Chapter 2's last content is printed p. 2-14, PDF page
39).

- **First batch** — the chapter's two liquid-critical-pressure-ratio charts,
  Figures 3-1 and 3-2, printed pp. 3-4 – 3-6 (PDF pages 44–45). These are the
  only two numbered figures the chapter's "Sizing Valves for Liquids"
  procedure section carries; the rest of the section is equations, a
  worked sample problem, and Tables 3-1 (Abbreviations and Terminology) and
  3-2 (Equation Constants) — reference tables, not catalogued as components,
  matching the practice already applied to ch1's and ch2's own reference
  tables in this document series.

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

### Chapter 3 — Liquid critical pressure ratio factor charts (printed pp. 3-4 – 3-6)

```yaml
id: ogas-cmp-ff-chart-water
teaches: >
  The liquid critical pressure ratio factor F_F for water, read graphically
  against absolute vapor pressure at the valve inlet (dual-scale abscissa in
  psia and bar). F_F is used in the q_max (choked flow) and ΔP_max (allowable
  sizing pressure drop) equations in the liquid valve sizing procedure — enter
  on the abscissa at the water vapor pressure, proceed vertically to the
  curve, then horizontally left to read F_F on the ordinate. An alternative
  to the equation F_F = 0.96 − 0.28·√(P_v/P_c).
concept-tags: [liquid critical pressure ratio, F_F, water, vapor pressure, choked flow, q_max, delta P_max, liquid valve sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 3 "Liquid Valve Sizing," Figure 3-1 (drawing A2737-1, printed
      p. 3-4) — "Figure 3-1. Liquid critical pressure ratio factor for
      water." Caption note printed beneath the chart: "USE THIS CURVE FOR
      WATER. ENTER ON THE ABSCISSA AT THE WATER VAPOR PRESSURE AT THE VALVE
      INLET. PROCEED VERTICALLY TO INTERSECT THE CURVE. MOVE HORIZONTALLY TO
      THE LEFT TO READ THE CRITICAL PRESSURE RATIO, F_F, ON THE ORDINATE."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch3-fig1-liquid-critical-pressure-ratio-water.png
    locator: "already extracted — cropped directly from the source PDF (p. 44 / printed 3-4) at 600 dpi, chart + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  This is a line/curve chart, not a photo or cutaway — closer in kind to a
  Style Guide §5 analytical graph than to this file series' cutaway/photo
  figures (matching the precedent set by `ogas-cmp-recommended-seat-load-chart`
  in `Component Index — Oil & Gas Sourcebook ch2.md`). If a future course
  places it on a slide, treat it under §5 (key, axis, and line-style
  conventions), not the §6 callout conventions. Dual x-axis (PSIA top-level
  scale is actually printed as the lower/primary axis with BAR above it —
  verified against the real page: "ABSOLUTE VAPOR PRESSURE—BAR" labels the
  upper tick row, "ABSOLUTE VAPOR PRESSURE—PSIA" the lower/primary one) — a
  redraw, if ever undertaken, would need to decide whether to keep both
  scales or drop to the course's working unit (psig/psia) per Style Guide
  §7.3. Companion figure to Figure 3-2 (`ogas-cmp-ff-chart-nonwater` below) —
  same F_F concept, water-specific vs. general-liquid curve.
```

```yaml
id: ogas-cmp-ff-chart-nonwater
teaches: >
  The liquid critical pressure ratio factor F_F for liquids other than
  water, read graphically against the dimensionless ratio of absolute vapor
  pressure to absolute thermodynamic critical pressure (P_v/P_c) on the
  abscissa. Determine the ratio by dividing the liquid's vapor pressure at
  the valve inlet by its critical pressure, enter on the abscissa at that
  ratio, proceed vertically to the curve, then horizontally left to read F_F
  on the ordinate. Same underlying equation as Figure 3-1
  (F_F = 0.96 − 0.28·√(P_v/P_c)), generalized from water to any liquid via
  the dimensionless ratio.
concept-tags: [liquid critical pressure ratio, F_F, general liquid, vapor pressure ratio, critical pressure, choked flow, q_max, delta P_max, liquid valve sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 3 "Liquid Valve Sizing," Figure 3-2 (printed p. 3-6; no
      drawing number printed on this figure, unlike Figure 3-1's "A2737-1")
      — "Figure 3-2. Liquid critical pressure ratio factor for liquids
      other than water." Caption note printed beneath the chart: "USE THIS
      CURVE FOR LIQUIDS OTHER THAN WATER. DETERMINE THE VAPOR
      PRESSURE/CRITICAL PRESSURE RATIO BY DIVIDING THE LIQUID VAPOR
      PRESSURE AT THE VALVE INLET BY THE CRITICAL PRESSURE OF THE LIQUID.
      ENTER ON THE ABSCISSA AT THE RATIO JUST CALCULATED AND PROCEED
      VERTICALLY TO INTERSECT THE CURVE. MOVE HORIZONTALLY TO THE LEFT AND
      READ THE CRITICAL PRESSURE RATIO, F_F, ON THE ORDINATE."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch3-fig2-liquid-critical-pressure-ratio-nonwater.png
    locator: "already extracted — cropped directly from the source PDF (p. 45 / printed 3-6) at 600 dpi, chart + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Same chart kind and treatment note as `ogas-cmp-ff-chart-water` above —
  a Style Guide §5 analytical graph, not a §6 cutaway. Single dimensionless
  abscissa (0–1.00), unlike Figure 3-1's dual psia/bar scale. No drawing
  number is printed on this figure (checked directly against the source
  page at 300 dpi in the caption-note region where Figure 3-1 prints
  "A2737-1" — Figure 3-2 has no equivalent mark). Companion figure to
  Figure 3-1 (`ogas-cmp-ff-chart-water` above) — same F_F concept,
  general-liquid vs. water-specific curve; text on printed p. 3-5/3-6 cross-
  references both interchangeably ("Values of F_F ... can be obtained from
  figure 3-1 or from the following equation").
```

---

## Open items

- **First batch (Figures 3-1 and 3-2)** covers the chapter's complete figure
  set for the liquid-sizing procedure section this batch was scoped to. Both
  extracted and catalogued; no unresolved figures.
- **Not yet catalogued — future batch, if ever needed:** Table 3-1
  (Abbreviations and Terminology) and Table 3-2 (Equation Constants,
  printed p. 3-2/3-3) — reference tables, not catalogued as components per
  the same practice already applied to ch1's and ch2's own reference tables.
  The chapter's worked "Liquid Sizing Sample Problem" (printed pp. 3-6 – 3-8)
  is procedural/numerical text, not a figure, and is also out of scope.
- Whether Chapter 3 ("Liquid Valve Sizing") carries any further figures
  beyond Figures 3-1/3-2 was **not checked past printed p. 3-8** — this
  batch's scope was the two named figures only (Chapter 4, "Gas Valve
  Sizing," begins immediately after on the same PDF page, page 47/printed
  3-8, so Chapter 3 in fact has no further figures — confirmed incidentally
  while reading page 47 for the Figure 3-2 context, not as a deliberate
  full-chapter scan).
- Both records in this file are `used-by: []` — this is a proactive,
  use-driven-ahead catalog per `Source Library.md`; no course currently
  references them.
- No primitive-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
