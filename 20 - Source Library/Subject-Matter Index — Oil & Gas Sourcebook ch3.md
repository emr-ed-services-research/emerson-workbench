---
title: Subject-Matter Index — Oil & Gas Sourcebook ch3
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch3 — Liquid Valve Sizing
updated: 2026-09-08
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 3

**Chapter 3 — "Liquid Valve Sizing."** Standing library-cataloging pass, NOT
tied to any course — built ahead of any course actually needing these
figures, per `Source Library.md`'s "two ways a subject-matter index gets
triggered." Chapter 3 begins on PDF page 40 (printed p. 3-1), immediately
following Chapter 2's close (see `Subject-Matter Index — Oil & Gas Sourcebook
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

Record shape matches `Subject-Matter Index — 14101 ch3.md`: `id` · `teaches` ·
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
  in `Subject-Matter Index — Oil & Gas Sourcebook ch2.md`). If a future course
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

### Chapter 3 — Body prose (printed pp. 3-1 – 3-8), `kind: topic` entries added 2026-09-17

```yaml
id: ogas-topic-liquid-sizing-methodology
kind: topic
teaches: >
  The real ISA/IEC six-step liquid valve sizing procedure, worked start to
  finish: (1) specify the required variables — desired valve design, process
  fluid, and service conditions (q or w, P1, P2 or ΔP, T1, Gf, Pv, Pc, υ);
  (2) determine the equation constant N (N1 for volumetric flow units, N6
  for mass flow units, from Table 3-2); (3) determine Fp, the piping
  geometry factor (1.0 and drops out if no fittings are attached — see
  `ogas-topic-piping-geometry-factor` below for the real calculation when
  fittings ARE attached); (4) determine qmax or ΔPmax to check for choked
  flow (see `ogas-topic-choked-flow-and-cavitation-flashing` below);
  (5) solve for the required Cv using Cv = q / (N1·Fp·√(ΔP/Gf)) for
  volumetric units or the mass-flow equivalent; (6) select the valve size
  from the flow-coefficient table against the calculated Cv. Also gives the
  real relationships to the two other flow coefficients used outside North
  America: Kv = 0.865·Cv, Av = 2.40×10⁻⁵·Cv.

  The chapter's real worked "Liquid Sizing Sample Problem" applies this
  exactly: an NPS 8 line, ASME CL300 globe valve with equal-percentage cage,
  liquid propane at q=800 gpm, P1=300 psig, P2=275 psig, ΔP=25 psi, Gf=0.50,
  Pv=124.3 psia, Pc=616.3 psia. An assumed NPS 3 valve (Cv=121) yields a
  required Cv of 125.7 — too large — so the procedure repeats against an
  assumed NPS 4 valve (Cv=203), converging after one more iteration
  (Fp recalculated at 0.97, required Cv=116.2, close enough to the 121.7
  used to derive that Fp) to conclude an NPS 4 valve opened to about 75%
  travel is adequate. This demonstrates the procedure's own iterative
  Fp/Cv convergence loop when the assumed valve size is undersized on the
  first pass, not just a single-pass calculation.
concept-tags: [ISA S75.01, IEC 60534-2-1, liquid valve sizing, Cv, sizing procedure, N constant, Kv, Av, worked example, propane]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 3 'Liquid Valve Sizing,' printed pp. 3-1–3-3 (procedure steps 1-2), p. 3-4 (steps 3-6 summary and Cv/Kv/Av equations), pp. 3-6–3-8 (worked sample problem) — prose and worked example, not figure-anchored"
relatedFigures: [ogas-cmp-ff-chart-water, ogas-cmp-ff-chart-nonwater]
relatedTopics: [cvh-topic-liquid-sizing-methodology, ogas-topic-piping-geometry-factor, ogas-topic-choked-flow-and-cavitation-flashing]
used-by: []
notes: >
  Genuinely complementary to CVH's own `cvh-topic-liquid-sizing-methodology`
  (Handbook ch5), not a duplicate — confirmed by direct comparison: the
  Handbook treats sizing at a more conceptual decision-framework level,
  this sourcebook chapter carries the real, complete worked ISA/IEC
  equations and a full iterative worked example with real numbers
  (propane, NPS 8 line, specific pressures) that a learner can follow and
  check step by step. Table 3-1 (Abbreviations and Terminology) and Table
  3-2 (Equation Constants) remain correctly uncatalogued as pure reference
  data (see Open Items below) — this topic entry cites the specific N1/N6
  values actually used in the worked example rather than re-cataloguing
  the whole table.
```

```yaml
id: ogas-topic-piping-geometry-factor
kind: topic
teaches: >
  How to calculate Fp, the piping geometry factor, when reducers, elbows,
  or tees are directly attached to the valve's inlet/outlet connections
  (Fp = 1.0 and drops out of the sizing equation only when no such fittings
  are attached). Real equation: Fp = [1 + (ΣK/N2)·(Cv/d²)²]^(-1/2), where
  ΣK is the algebraic sum of the velocity-head-loss coefficients of all
  attached fittings (ΣK = K1 + K2 + KB1 − KB2), K1/K2 are the upstream/
  downstream fitting resistance coefficients, and KB1/KB2 are Bernoulli
  coefficients (used only when the approaching and leaving piping diameters
  differ; if the piping is the same size on both sides, KB1 = KB2 and both
  are dropped from the equation). Gives the real equations for the most
  common fitting case, a short-length concentric reducer: K1 = 0.5·(1 −
  d²/D²)² for an inlet reducer, K2 = 1.0·(1 − d²/D²)² for an outlet reducer,
  and K1+K2 = 1.5·(1 − d²/D²)² for a valve installed between identical
  reducers on both ends.
concept-tags: [Fp, piping geometry factor, reducer, elbow, tee, Bernoulli coefficient, resistance coefficient, liquid valve sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 3 'Liquid Valve Sizing,' printed pp. 3-2–3-3 (Fp definition and equation) and p. 3-7 (worked Fp calculation for both an inlet-only NPS 3-in-NPS 8 reducer case and a between-identical-reducers case) — prose and equations, not figure-anchored"
relatedFigures: []
relatedTopics: [ogas-topic-liquid-sizing-methodology]
used-by: []
notes: >
  A real, distinct sub-procedure within the overall sizing methodology —
  the worked sample problem (see `ogas-topic-liquid-sizing-methodology`)
  actually exercises the between-identical-reducers case (K1+K2 =
  1.5·(1-9/64)² = 1.11 for the first NPS 3 attempt, recalculated for NPS 4).
  Kept as its own topic entry rather than folded into the parent procedure
  because it has its own complete, self-contained equation set a learner
  would need to look up independently of the six-step overview.
```

```yaml
id: ogas-topic-choked-flow-and-cavitation-flashing
kind: topic
teaches: >
  How to determine whether choked flow will develop in a liquid service,
  and — if it does — whether the cause is cavitation or flashing. Real
  diagnostic rule stated directly in the source: choked flow is caused by
  flashing if the valve's outlet pressure is LESS than the vapor pressure
  of the flowing liquid; it is caused by cavitation if the outlet pressure
  is GREATER than the vapor pressure. Two real equations for the allowable
  sizing pressure drop, ΔPmax: for valves without attached fittings,
  ΔPmax(L) = FL²·(P1 − FF·Pv); for valves with fittings attached,
  ΔPmax(LP) = (FLP/Fp)²·(P1 − FF·Pv), where FF is the liquid critical
  pressure ratio factor (see `ogas-cmp-ff-chart-water`/`ogas-cmp-ff-chart-nonwater`
  above, or the equation FF = 0.96 − 0.28·√(Pv/Pc)). If the calculated
  ΔPmax is less than the actual service pressure differential (P1 − P2),
  choked flow conditions will exist, and step 5 of the sizing procedure
  must use ΔPmax in place of the actual (P1 − P2) in the Cv equation.
concept-tags: [choked flow, qmax, delta P max, cavitation, flashing, FF, liquid critical pressure ratio, diagnostic rule]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 3 'Liquid Valve Sizing,' printed pp. 3-4–3-5 (qmax and ΔPmax equations) and p. 3-6 (the cavitation-vs-flashing outlet-pressure diagnostic rule, in the boxed Note) — prose and equations, not figure-anchored"
relatedFigures: [ogas-cmp-ff-chart-water, ogas-cmp-ff-chart-nonwater]
relatedTopics: [ogas-topic-liquid-sizing-methodology, cvh-topic-cavitation, cvh-topic-flashing, cvh-topic-flow-recovery]
used-by: []
notes: >
  The outlet-pressure-vs-vapor-pressure diagnostic rule is a genuinely
  useful, concrete complement to CVH's own `cvh-topic-cavitation` and
  `cvh-topic-flashing` entries (Handbook ch5) — the Handbook explains the
  vena-contracta mechanism and damage signatures; this sourcebook chapter
  gives the actual field-usable test for telling the two apart once choked
  flow is already known to occur. Not a duplicate of either Handbook topic.
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
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
- **`kind: topic` pass, 2026-09-17 (WC fork):** read the whole real chapter,
  PDF pages 40-47 (printed 3-1–3-8), not just the figure-anchored sections.
  Three genuine concepts found and indexed: `ogas-topic-liquid-sizing-methodology`,
  `ogas-topic-piping-geometry-factor`, `ogas-topic-choked-flow-and-cavitation-flashing`
  (all above). Table 3-1 and Table 3-2 (the two reference tables already
  correctly excluded above) remain reference-data-only under the topic pass
  too — confirmed by reading them directly, no explanatory prose beyond the
  bare definitions/values themselves. The chapter's opening paragraph
  (ISA/IEC standardization history, printed p. 3-1) was read and confirmed
  to be historical background only — no transferable technical concept a
  learner needs, distinct from the real methodology it introduces (which
  IS topic-indexed above) — deliberately not given its own entry. Chapter
  total is now 5 components (2 figures + 3 topics).
