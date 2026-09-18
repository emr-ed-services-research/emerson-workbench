---
title: Subject-Matter Index — Power & Severe Service Sourcebook ch3
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch3 — Liquid Valve Sizing
updated: 2026-09-14
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 3

**Chapter 3 — "Liquid Valve Sizing."** Standing library-cataloging pass, part
of a full-document pass across the whole Power & Severe Service Sourcebook —
built ahead of any course actually needing these figures, gating the start
of content-build work on Control Valve Engineering 1 and 2. Matches the
rigor of `Subject-Matter Index — Oil & Gas Sourcebook ch1.md`: every real page in
the chapter's confirmed range was rendered at 150dpi and read directly, not
paraphrased from `pdftotext` extraction alone.

Chapter boundaries were verified directly against the PDF: PDF p.35 is the
"Chapter 3 / Liquid Valve Sizing" divider page, real section content runs
PDF pp.35–42 (printed pp.3-1–3-8), and PDF p.43 is the "Chapter 4 / Gas and
Steam Valve Sizing" divider. **PDF page number = printed page number + 32**
for this chapter (PDF 35 = printed 3-1) — a fixed offset, not zero, unlike
the Oil & Gas Sourcebook's own chapter 1. Chapter 3 = PDF pp.35–42; Chapter 4
starts at PDF p.43.

This is a sizing/procedure chapter (ISA/IEC liquid-sizing equations, worked
sample problems) — genuinely low in figure count, confirmed by reading every
page, not assumed from the chapter's subject matter. All figures are from
`20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook
- Power & Severe Service.pdf`. This pass catalogs existence and location
only — it does not crop or extract images (this book has no
extracted-figures folder yet), so each record's `source` carries a single
locator, not a second "already extracted" entry. Every record's `used-by`
is `[]` — none are placed on a slide yet.

Record shape matches `Subject-Matter Index — Control Valve Handbook ch1.md`:
`id` · `teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`)
· `delivery` · `used-by` · `notes` · `mediaStatus`.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service is itself a
**current** document (Fourth Edition, D101449X012, © 2001/2003/2004 Fisher
Controls International LLC, part of the same first-party Fisher Sourcebook
series as `Subject-Matter Index — Oil & Gas Sourcebook ch1.md`'s source, which
already carries that series as `current`), so every record below is
`status: current`. No archive or legacy material was consulted for this
chapter.

## Components

### Chapter 3 — Liquid sizing procedure (printed pp. 3-1–3-3, 3-6–3-8)

```yaml
id: pss-topic-liquid-sizing-methodology
kind: topic
teaches: >
  The real ISA/IEC six-step liquid valve-sizing procedure: (1) specify the
  sizing variables (desired valve design, process fluid, service conditions
  q or w, P1, P2, T1, Gf, Pv, Pc); (2) determine the equation constant N
  from the Equation Constants table (N1 for volumetric units, N6 for mass
  units); (3) determine Fp, the piping geometry factor, only if fittings
  are attached to the valve (Fp = 1.0 and drops out otherwise); (4)
  determine qmax or ΔPmax if choked flow is possible; (5) solve for Cv via
  Cv = q / (N1·Fp·sqrt((P1-P2)/Gf)) for volumetric flow, or the mass-flow
  equivalent using N6; (6) select the valve size from the flow-coefficient
  table. Also states the Kv/Av conversions (Kv = 0.865·Cv, Av = 2.40e-5·Cv).
  The chapter's full worked sample problem is transcribed exactly: an
  8-inch line, liquid propane, q=800 gpm, P1=314.7 psia, P2=289.7 psia
  (ΔP=25 psi), T1=70°F, Gf=0.50, Pv=124.3 psia, Pc=616.3 psia — sizing a
  proposed 3-inch ANSI Class 300 globe valve (equal-percentage cage, Cv=121
  from the flow-coefficient table). Fp is calculated at 0.90 (using SK=1.11
  for a valve between identical concentric reducers), giving a first-pass
  Cv of 125.7 — exceeding the assumed 3-inch valve's 121 capacity, so the
  procedure is repeated for a 4-inch valve (Cv=203 rated, Fp recalculated
  to 0.93, yielding required Cv=121.7 — still under the 4-inch valve's
  rated capacity). A further refinement using Cv=121.7 in the Fp
  calculation converges to Fp=0.97 and a final required Cv of 116.2,
  confirming the 4-inch valve at roughly 75% open is the correct selection.
concept-tags: [liquid sizing, ISA S75.01, IEC 534, Cv calculation, piping geometry factor, worked example, propane]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 3 'Liquid Valve Sizing,' printed pp. 3-1–3-3 (procedure) and pp. 3-6–3-8 (worked sample problem) — prose, not figure-anchored"
relatedFigures: [pss-cmp-liquid-critical-pressure-ratio-water, pss-cmp-liquid-critical-pressure-ratio-other-liquids]
relatedTopics: [pss-topic-piping-geometry-factor, pss-topic-choked-flow-and-cavitation-flashing, ogas-topic-liquid-sizing-methodology, cvh-topic-liquid-sizing-methodology]
used-by: []
notes: >
  Read directly from the real PDF prose (PDF pp.35-37, 40-42; printed
  pp.3-1–3-3, 3-6–3-8), not inferred from the two existing figure entries.
  This is the same real worked sample problem (800 gpm liquid propane, 8-inch
  line, 3-inch-to-4-inch convergence) already found and transcribed in
  `Subject-Matter Index — Oil & Gas Sourcebook ch3.md`'s own `ogas-topic-liquid-
  sizing-methodology` — confirmed genuinely identical numbers, not just a
  similar example; this Fisher sizing-procedure chapter is shared verbatim
  boilerplate across the Sourcebook series, per that file's own flagged
  cross-reference note. Kept as a separate record per this project's
  standing rule against merging records across separate source documents,
  cross-referenced via `relatedTopics` instead.
```

```yaml
id: pss-topic-piping-geometry-factor
kind: topic
teaches: >
  The Fp (piping geometry factor) correction, needed only when fittings
  (reducers, elbows, tees) are directly attached to the valve's inlet/
  outlet connections — Fp = 1.0 and drops out of the sizing equation
  otherwise. Gives the real Fp equation (a function of the summed velocity-
  head-loss coefficient SK, the valve's Cv, N2, and nominal size d) and the
  three concentric-reducer K-factor cases actually used in the worked
  example: for an inlet reducer, K1 = 0.5·(1-(d/D)²)²; for an outlet
  reducer, K2 = 1.0·(1-(d/D)²)²; for a valve installed between identical
  reducers, K1+K2 = 1.5·(1-(d/D)²)² (the case the chapter's own sample
  problem uses). Also defines the Bernoulli coefficients KB1/KB2 (used only
  when inlet and outlet piping diameters differ) and states they cancel
  when the piping is the same size on both sides.
concept-tags: [piping geometry factor, Fp, concentric reducer, Bernoulli coefficient, velocity head loss]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 3 'Liquid Valve Sizing,' printed pp. 3-2–3-4 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-liquid-sizing-methodology, ogas-topic-piping-geometry-factor]
used-by: []
notes: >
  Read directly from the real PDF prose (PDF pp.36-38, printed pp.3-2–3-4).
  Same real equations and reducer cases already found in `Subject-Matter Index —
  Oil & Gas Sourcebook ch3.md`'s `ogas-topic-piping-geometry-factor` — kept
  separate per the standing rule against merging across source documents,
  cross-referenced instead.
```

### Chapter 3 — Liquid critical pressure ratio (printed pp. 3-5)

```yaml
id: pss-cmp-liquid-critical-pressure-ratio-water
teaches: >
  The liquid critical pressure ratio factor (F_F) for water, plotted against
  absolute vapor pressure (dual-axis: psia and bar) — used in the liquid
  sizing procedure's qmax/ΔPmax steps to find F_F without the F_F = 0.96 −
  0.28·sqrt(Pv/Pc) equation. Usage instructions are printed directly on the
  chart: enter on the abscissa at the water vapor pressure at the valve
  inlet, proceed vertically to the curve, then horizontally to read F_F.
concept-tags: [liquid valve sizing, critical pressure ratio, F_F, vapor pressure, choked flow, water service]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 3-1 'Liquid critical pressure ratio factor for water,' p. 3-5 — drawing A2737-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph (single declining curve, dual x-axis in psia/bar), not
  a cutaway — falls under Style Guide §5 if ever placed on a slide, not §6's
  nomenclature/callout rules. Companion to Figure 3-2 (same procedure, for
  liquids other than water); both are the sizing-chapter's own standard
  "use the chart instead of the equation" pair, a form likely shared across
  every Fisher Sourcebook in this series (ISA/IEC standard liquid-sizing
  content) — flagged for the central library-wide cross-reference sweep,
  not confirmed against another sourcebook's sizing chapter directly in
  this pass.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-liquid-critical-pressure-ratio-other-liquids
teaches: >
  The same liquid critical pressure ratio factor (F_F) chart, generalized
  for liquids other than water — plotted against the dimensionless ratio of
  absolute vapor pressure to absolute thermodynamic critical pressure
  (Pv/Pc). Usage instructions printed directly on the chart: divide the
  liquid's vapor pressure at the valve inlet by its critical pressure, enter
  on the abscissa at that ratio, proceed vertically to the curve, then
  horizontally to read F_F.
concept-tags: [liquid valve sizing, critical pressure ratio, F_F, vapor pressure, thermodynamic critical pressure, choked flow, general liquid service]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 3-2 'Liquid critical pressure ratio factor for liquids other than water,' p. 3-6"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same curve shape and axis scale as Figure 3-1, re-plotted on a
  dimensionless x-axis (Pv/Pc) instead of Figure 3-1's dual psia/bar vapor-
  pressure axis — confirmed genuinely distinct charts (different x-axis
  quantity and scale), not a duplicate. No drawing number visible on the
  rendered page for this one (Figure 3-1's "A2737-1" tag does not repeat
  here) — low-confidence flag: the chart may share the same underlying
  drawing family without a second stamped number, not confirmed either way.
mediaStatus: unreviewed
```

### Chapter 3 — Choked flow, ΔPmax, and cavitation/flashing diagnosis (printed pp. 3-4–3-6)

```yaml
id: pss-topic-choked-flow-and-cavitation-flashing
kind: topic
teaches: >
  Choked flow (qmax) occurs in liquids when the static pressure inside the
  valve drops below the liquid's vapor pressure, causing vaporization; qmax
  = N1·FL·Cv·sqrt((P1 - FF·Pv)/Gf), where FF (the liquid critical pressure
  ratio factor) is read from Figure 3-1/3-2 or calculated as FF = 0.96 −
  0.28·sqrt(Pv/Pc). The IEC standard instead requires calculating an
  allowable sizing pressure drop, ΔPmax — ΔPmax(L) = FL²·(P1 − FF·Pv) for a
  valve with no fittings attached, or the FLP/Fp-corrected equivalent
  (ΔPmax(LP)) when fittings are attached — and using the lesser of ΔPmax
  and the actual service ΔP (P1−P2) in the sizing equation whenever ΔPmax is
  the smaller value (indicating choked flow will occur). Once choked flow
  is confirmed, the source gives the real diagnostic for which failure mode
  is occurring: **flashing** if the valve's outlet pressure is below the
  liquid's vapor pressure; **cavitation** if the outlet pressure is above
  the vapor pressure (the vapor bubbles that form at the vena contracta
  collapse downstream instead of persisting).
concept-tags: [choked flow, qmax, delta P max, liquid critical pressure ratio, F_F, cavitation, flashing, vena contracta]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 3 'Liquid Valve Sizing,' printed pp. 3-4–3-6 — prose, not figure-anchored"
relatedFigures: [pss-cmp-liquid-critical-pressure-ratio-water, pss-cmp-liquid-critical-pressure-ratio-other-liquids]
relatedTopics: [pss-topic-liquid-sizing-methodology, ogas-topic-choked-flow-and-cavitation-flashing, cvh-topic-cavitation, cvh-topic-flashing, cvh-topic-flow-recovery]
used-by: []
notes: >
  Read directly from the real PDF prose (PDF pp.38-40, printed pp.3-4–3-6).
  The outlet-pressure-vs-vapor-pressure diagnostic for distinguishing
  cavitation from flashing is stated explicitly in this chapter's own text,
  the same real distinction already topic-indexed in `Subject-Matter Index —
  Oil & Gas Sourcebook ch3.md`'s `ogas-topic-choked-flow-and-cavitation-
  flashing` and in the Control Valve Handbook's `cvh-topic-cavitation`/
  `cvh-topic-flashing` — kept as a separate record per the standing rule
  against merging across source documents, cross-referenced instead of
  duplicated.
```

## Open Items

- **`kind: topic` pass (2026-09-17)**: 3 new topic entries added
  (`pss-topic-liquid-sizing-methodology`, `pss-topic-piping-geometry-factor`,
  `pss-topic-choked-flow-and-cavitation-flashing`), each read directly from
  the real PDF prose across the chapter's confirmed pp.35-42 range, not
  inferred from the two existing figure entries. Table 3-1 (Abbreviations)
  and Table 3-2 (Equation Constants) were re-confirmed reference-data-only
  — no topic authored for either. The intro paragraph on ISA/IEC
  standardization history (printed p.3-1) was read and judged historical
  attribution, not a transferable concept — deliberately not indexed. This
  chapter's real content (the ISA/IEC six-step procedure, the 800 gpm
  liquid-propane worked example, the Fp reducer equations, the choked-flow/
  cavitation-flashing diagnostic) is confirmed genuinely identical to
  `Subject-Matter Index — Oil & Gas Sourcebook ch3.md`'s own topic entries —
  same Fisher Sourcebook-series boilerplate, same worked numbers. Kept as
  separate records per the standing cross-document rule, cross-referenced
  via `relatedTopics`. Chapter total is now 5 components (2 figures + 3
  topics), up from 2.
- **Chapter boundary** — confirmed directly by rendering: PDF p.35 is the
  Chapter 3 divider ("Chapter 3 / Liquid Valve Sizing"), PDF p.43 is the
  Chapter 4 divider. Chapter 3 = PDF pp.35–42 (printed pp.3-1–3-8). Every
  page in that range was rendered at 150dpi and read directly (not just the
  two figure-bearing pages) — pp.35–37 (sizing-for-liquids procedure text
  and Tables 3-1/3-2), pp.38 (Fp/qmax procedure), pp.39 (Figure 3-1 +
  ΔPmax procedure), pp.40 (Figure 3-2 + sample-problem intro), pp.41–42
  (liquid sizing sample problem worked in full) were all read.
- **Full coverage accounting**: 2 real figures in range (Figure 3-1, Figure
  3-2) — both catalogued. No gaps; this is the chapter's real, complete
  figure count, not a partial batch.
- **Low-confidence flags**: Figure 3-2's drawing number could not be
  confirmed from the rendered page (no stamp visible, unlike Figure 3-1's
  "A2737-1") — noted in that record's own `notes`, not treated as an error.
- **Duplicate-figure-number / source-citation-error findings**: none found.
- **Table-exclusion confirmation**: Table 3-1 ("Abbreviations and
  Terminology," p.3-2) and Table 3-2 ("Equation Constants," p.3-3) are both
  genuine reference tables, correctly excluded — neither carries a "Figure"
  caption or number.
- **Cross-reference findings**: not run against another file in this pass
  (no other sourcebook's Liquid Valve Sizing chapter was in context). Both
  records flag in their own `notes` that this sizing-chapter content (ISA/
  IEC standard liquid sizing, including the F_F chart pair) is plausibly
  shared verbatim across the whole Fisher Sourcebook series and should be
  checked in the central whole-library cross-reference sweep against the
  Oil & Gas Sourcebook's own sizing chapter, Refining, and Pulp & Paper if
  and when those are indexed.
- **Archive/legacy material**: none consulted, none needed — first-party
  current Fisher document throughout.
