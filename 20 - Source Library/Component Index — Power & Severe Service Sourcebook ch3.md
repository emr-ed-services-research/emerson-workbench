---
title: Component Index — Power & Severe Service Sourcebook ch3
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch3 — Liquid Valve Sizing
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 3

**Chapter 3 — "Liquid Valve Sizing."** Standing library-cataloging pass, part
of a full-document pass across the whole Power & Severe Service Sourcebook —
built ahead of any course actually needing these figures, gating the start
of content-build work on Control Valve Engineering 1 and 2. Matches the
rigor of `Component Index — Oil & Gas Sourcebook ch1.md`: every real page in
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

Record shape matches `Component Index — Control Valve Handbook ch1.md`:
`id` · `teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`)
· `delivery` · `used-by` · `notes` · `mediaStatus`.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service is itself a
**current** document (Fourth Edition, D101449X012, © 2001/2003/2004 Fisher
Controls International LLC, part of the same first-party Fisher Sourcebook
series as `Component Index — Oil & Gas Sourcebook ch1.md`'s source, which
already carries that series as `current`), so every record below is
`status: current`. No archive or legacy material was consulted for this
chapter.

## Components

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

## Open Items

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
