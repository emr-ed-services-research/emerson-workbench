---
title: Subject-Matter Index — Oil & Gas Sourcebook ch11
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch11 — Fractionation
updated: 2026-09-08
status: batch complete — Figures 11-1 through 11-8, the full chapter (chapter opener through the Debutanizer Application Review's item 4). No figures remain uncatalogued in Chapter 11.
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 11

**Chapter 11 — "Fractionation."** Standing library-cataloging pass, NOT tied to
any course — built ahead of any course actually needing these figures, per
`Source Library.md`'s "two ways a subject-matter index gets triggered." Matches the
batch shape of the ch1/ch2/ch3/ch5/ch6/ch7/ch8/ch9/ch10 passes of this same
chapter series. **Two batches now cover this chapter in full:** the first
covered Figures 11-1 through 11-6 (the chapter opener through the
Depropanizer Application Review's item 4); this second batch adds Figures
11-7 and 11-8 — the Debutanizer process diagram and its own representative-
hardware photo, closing out the chapter. All eight figures confirmed against
the real page text and a 300 dpi page-image render before extraction — none
were skipped or fabricated.

> [!note] Chapter title correction against the batch request
> The batch request that produced this file labelled the target chapter
> "Chapter 11 — Oil and Gas Transportation." Reading the real pages (PDF pp.
> 133–142) shows this is incorrect: **Chapter 11 is "Fractionation."** "Oil
> and Gas Transportation" is the *previous* chapter — **Chapter 10** — already
> catalogued in `Subject-Matter Index — Oil & Gas Sourcebook ch10.md`, whose own
> "Open items" flagged exactly this: Chapter 10 closes at PDF p. 132 (printed
> p. 10-6) and Chapter 11 ("Fractionation") begins immediately after at PDF p.
> 133 (printed p. 11-1). This batch's six hint strings (deethanizer,
> depropanizer, "C9 Nonane," "NPS 4 EH or HP Control Valve and 657 Actuator
> Size 80 with DVC6010," "8580 Valve with... 2052 Actuator and DVC6000," etc.)
> all matched the real Chapter 11 "Fractionation" content exactly — only the
> chapter-title label in the request header was wrong, not the figure list.
> Catalogued here under the chapter's real title; flagged so a future pass
> doesn't propagate the wrong title, and so this is understood as the
> confirmation of the ch10 file's own forward flag, not a fresh discovery.

All from `20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve
Sourcebook - Oil & Gas.pdf`. Every record's `used-by` is `[]` — none are
placed on a slide yet; a future course resolves against these entries instead
of triggering reactive cataloging.

Record shape matches `Subject-Matter Index — 14101 ch3.md` (and the rest of this
chapter series): `id` · `teaches` · `concept-tags` · `status` · `source`
(`doc` + `locator`) · `delivery` · `used-by` · `notes`.

## Precedence

The Oil & Gas Sourcebook is itself a **current** document (© 2013 Fisher, held
in the Source Library's Industry Handbooks holdings — see `Industry
Handbooks.md`), so every record below is `status: current`. No archive or
legacy material was consulted for this batch.

## Page-numbering note (specific to this chapter)

Chapter 11's own printed folios were confirmed directly against the rendered
pages, continuing forward from Chapter 10's confirmed closing point (PDF
p. 132, printed p. 10-6, immediately followed by Chapter 11's opening page).
PDF p. 133 (the chapter-title page, carrying Chapter 11's intro text, the
hydrocarbon-constituent table, and the "Fractionation Process" section
opening) has **no visible footer folio** — the standard convention for a
chapter's opening page in this document, matching the ch9/ch10 openers. The
following pages carry visible folios, each individually confirmed against
rendered page images and per-page text extraction: PDF p. 134 = printed
"11-2" (Figure 11-1), PDF p. 135 = printed "11-3" (Figure 11-2), PDF p. 136 =
printed "11-4" (tables only, no figure), PDF p. 137 = printed "11-5" (Figure
11-3), PDF p. 138 = printed "11-6" (Figures 11-4 and 11-5, both), PDF p. 139 =
printed "11-7" (Figure 11-6), PDF p. 140 = printed "11-8" (tables + the
"Debutanizer" section-opener text only, no figure), PDF p. 141 = printed
"11-9" (Figure 11-7), PDF p. 142 = printed "11-10" (Figure 11-8). By the
unnumbered-opener convention already established in the ch9/ch10 batches,
PDF p. 133 is printed **p. 11-1**.

**Correction against this batch's own earlier forward-flag (2026-09-08):**
the first batch's "Open items" note predicted Figure 11-7 at PDF p. 140 /
printed p. 11-8 and Figure 11-8 at PDF p. 141 / printed p. 11-9 — both off by
one page. Direct page-image inspection this batch (not just running-text
order, which interleaves columns) confirms PDF p. 140 / printed 11-8 carries
no figure at all — it is Tables 11-13 through 11-19 plus the "Debutanizer"
section-opener prose. Figure 11-7 is actually on PDF p. 141 / printed 11-9,
and Figure 11-8 on PDF p. 142 / printed 11-10. Recorded so a future pass
doesn't inherit the off-by-one guess.

## Components

### Chapter 11 — NGL Composition and Terminology (chapter opener, printed p. 11-1, no figure)

```yaml
id: ogas-topic-ngl-fractions-and-terminology
kind: topic
teaches: >
  Natural gas at the wellhead is primarily four hydrocarbon constituents —
  methane (C1), ethane (C2), propane (C3), butane (C4) — with methane
  commonly 80%+ of the raw stream; fields high in C2+ are called "high BTU"
  or "liquids-rich." When produced gas exceeds sales-pipeline BTU
  specifications, heavier hydrocarbons are separated out at the gas
  treatment plant via a low-temperature NGL recovery process, producing a
  mixed C2+ stream commonly called "y-grade" or "raw mix." A typical mixed
  NGL stream (for marketing purposes) breaks down as 45% ethane, 30%
  propane, 10% butane, and 15% C5+ hydrocarbons — the actual mix varies by
  reservoir. Widening oil-to-gas price spreads have made NGL recovery more
  economically attractive in recent years, increasing production. The full
  C1-C12 hydrocarbon name/chemical-formula table (methane through
  dodecane) is given as a footnote reference.
concept-tags: [NGL, natural gas liquids, high BTU, liquids-rich, y-grade, raw mix, hydrocarbon fractions, ethane, propane, butane]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 11 'Fractionation,' chapter-opening prose and hydrocarbon-fraction table, PDF p. 133, printed p. 11-1 (unnumbered opener page, no figure) — read directly, not inferred from any figure caption."
relatedFigures: [ogas-cmp-fractionation-process-flow]
relatedTopics: [ogas-topic-fractionation-train-mechanism]
used-by: []
notes: >
  This page carries no figure or table object at all in the figures-only
  sense (the C1-C12 chart is a footnote reference list, not a numbered
  Table N.M) — confirmed invisible to the original figure-indexing pass,
  which correctly found nothing to catalogue here. Genuine chapter-opening
  concept content the fractionation-train mechanism (below) and the whole
  application-review section assume the reader already has.
```

### Chapter 11 — Fractionation Process (chapter opener, printed p. 11-2)

```yaml
id: ogas-cmp-fractionation-process-flow
teaches: >
  General block-diagram overview of a fractionation train: mixed NGL feed
  passes sequentially through a deethanizer (removes ethane, C2, overhead), a
  depropanizer (removes propane, C3, overhead), and a debutanizer (removes
  butane, C4, overhead), leaving a stabilized C5+ condensate stream. This is
  the chapter's orienting figure — the same block-diagram-then-zoom-in
  relationship the onshore (ch7 Fig 7-1), offshore (ch8 Fig 8-1),
  natural-gas-treatment (ch9 Fig 9-1), and oil/gas-transportation (ch10 Figs
  10-1/10-2) chapters' own opening figures have to their sections. The number
  of towers an actual plant has depends on which NGL products it is designed
  to recover.
concept-tags: [fractionation, NGL, deethanizer, depropanizer, debutanizer, process flow, block diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 11 "Fractionation," Figure 11-1 (drawing number E1520, printed
      p. 11-2) — "Figure 11-1. Typical Fractionation Process Recovering C2,
      C3, and C4."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch11-fig1-fractionation-process-block-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 134, printed p. 11-2) at 300 dpi, full block diagram (mixed NGL feed, three towers, four product streams) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Chapter opener. Each individual tower gets its own zoom-in process diagram
  further in the chapter: `ogas-cmp-deethanizer-process-diagram` (Figure
  11-2), `ogas-cmp-depropanizer-process-diagram` (Figure 11-4), and
  `ogas-cmp-debutanizer-process-diagram` (Figure 11-7) — all three catalogued
  below.
```

### Chapter 11 — Fractionation Train Mechanism (printed p. 11-2, prose beyond Figure 11-1's block diagram)

```yaml
id: ogas-topic-fractionation-train-mechanism
kind: topic
teaches: >
  The fractionation process works by exploiting the varying boiling points
  of the hydrocarbon constituents in the mixed NGL stream — each stage
  separates out one constituent by boiling it off from the mixed stream and
  recovering the pure product via an overhead condenser. Stages are named
  for the constituent boiled off, in order: deethanizer, then depropanizer,
  then debutanizer. The number of towers an actual plant has depends on
  which products it's designed to recover — some plants need only one
  tower (ethane/propane mix as the primary product), others add a butane
  splitter for separate isobutane/normal-butane streams. Initial gas
  treatment and NGL recovery (removing moisture, H2S, CO2 and recovering
  C2+ from the raw gas) happen upstream of fractionation and are a
  separate process. The debutanizer's bottoms output — mostly pentanes and
  heavier — is called stabilized gas condensate or natural gasoline.
concept-tags: [fractionation mechanism, boiling point separation, deethanizer, depropanizer, debutanizer, stabilized condensate, natural gasoline]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 11 'Fractionation,' 'Fractionation Process' section prose, printed p. 11-2, and its continuation on printed p. 11-3 — read directly, not inferred from Figure 11-1's own block-diagram caption."
relatedFigures: [ogas-cmp-fractionation-process-flow, ogas-cmp-deethanizer-process-diagram, ogas-cmp-depropanizer-process-diagram, ogas-cmp-debutanizer-process-diagram]
relatedTopics: [ogas-topic-ngl-fractions-and-terminology, ogas-topic-fractionation-valve-selection-rationale]
used-by: []
notes: >
  Complements rather than duplicates `ogas-cmp-fractionation-process-flow`
  (Figure 11-1) — the figure shows the block-diagram WHAT (three towers,
  four product streams); this entry captures the WHY (boiling-point
  separation principle) and the real plant-variability facts (single-tower
  plants, butane-splitter option) that never appear in the figure itself.
```

### Chapter 11 — Deethanizer (printed p. 11-3)

```yaml
id: ogas-cmp-deethanizer-process-diagram
teaches: >
  Deethanizer unit process diagram — the zoom-in on Figure 11-1's deethanizer
  block. Mixed NGL feed enters the trayed deethanizer tower through valve
  station (1); overhead ethane vapor is cooled through an exchanger and
  captured in a reflux accumulator, then pumped through two reflux pumps
  (stations 4, 5) to product metering (6), with a reflux recycle loop back to
  the tower (stations 2, 3); the tower's bottom reboiler is heated by hot oil
  (station 7) and delivers the remaining C3+ liquid mix onward to the
  depropanizer (station 8).
concept-tags: [deethanizer, reflux accumulator, reboiler, hot oil, ethane product, numbered valve stations]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 11 "Fractionation," Figure 11-2 (drawing number E1521, printed
      p. 11-3) — "Figure 11-2. Process Diagram of Typical Deethanizer Unit."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch11-fig2-deethanizer-process-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 135, printed p. 11-3) at 300 dpi, full schematic (all 8 numbered valve stations, tower, reflux accumulator, two reflux pumps), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑧ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  "Deethanizer" application-review subsections (1. Deethanizer Inlet Control
  ... 8. Deethanizer Reboiler to Depropanizer Control, printed pp. 11-3 –
  11-5) and Tables 11-1 through 11-8 — per Style Guide §6.2 these stay as the
  source drew them, not renumbered. This is the "Deethanizer" zoom-in on
  `ogas-cmp-fractionation-process-flow` (Figure 11-1).
```

### Chapter 11 — Deethanizer Application Review: representative hardware (printed p. 11-5)

```yaml
id: ogas-cmp-nps4-eh-hp-657-actuator-dvc6010
teaches: >
  Labelled product photo of a Fisher NPS 4 EH- or HP-series globe control
  valve fitted with a 657 spring-and-diaphragm actuator, size 80, and a
  FIELDVUE DVC6010 digital valve controller. Positioned at the top of the
  deethanizer valve-table page; its "EH or HP" valve family most closely
  matches Table 11-6's HPT/EHT trim material (item 6, "Ethane to Product
  Meter Control" — 1600-1800 psig inlet, the highest-pressure deethanizer
  application reviewed on this page).
concept-tags: [657 actuator, DVC6010, EH valve, HP valve, high pressure ET, product photo, deethanizer]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 11 "Fractionation," Figure 11-3 (drawing number W8917-1,
      printed p. 11-5) — "Figure 11-3. NPS 4 EH or HP Control Valve and 657
      Actuator Size 80 with DVC6010."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch11-fig3-nps4-eh-hp-657-actuator-dvc6010.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 137, printed p. 11-5) at 300 dpi, full product photo (657 actuator, DVC6010, globe valve body) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Honest-linkage caveat, unlike the cleaner item-number matches below: the
  source's own text does NOT cross-reference this photo to a specific
  numbered application item by caption or adjacency the way Figures 11-5 and
  11-6 are cross-referenced to their tables. The "EH or HP" family match to
  Table 11-6 (HPT/EHT trim) is the closest correspondence found on the page,
  not a confirmed source linkage — reported as such rather than overclaimed.
```

### Chapter 11 — Depropanizer (printed p. 11-6)

```yaml
id: ogas-cmp-depropanizer-process-diagram
teaches: >
  Depropanizer unit process diagram — the zoom-in on Figure 11-1's
  depropanizer block, structurally parallel to Figure 11-2's deethanizer
  diagram. C3+ NGL mix from the deethanizer enters the trayed depropanizer
  tower; overhead propane vapor passes through a heat pump compressor (station
  1) with a recycle path (station 2), shares two heat exchangers with the
  deethanizer (stations 2 and 4, "TO/FROM DE-ETH HEAT EXCHANGER"), and reaches
  the reflux accumulator via station 3 before being pumped (stations 5, 6)
  onward to product metering; the tower's bottom reboiler is heated by hot oil
  (station 7) and delivers the remaining C4+ liquid mix onward to the
  debutanizer (station 8).
concept-tags: [depropanizer, heat pump compressor, reflux accumulator, reboiler, propane product, numbered valve stations]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 11 "Fractionation," Figure 11-4 (drawing number E1522, printed
      p. 11-6) — "Figure 11-4. Process Diagram of Typical Depropanizer Unit."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch11-fig4-depropanizer-process-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 138, printed p. 11-6) at 300 dpi, full schematic (all 8 numbered valve stations, tower, reflux accumulator, two pumps), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑧ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  "Depropanizer" application-review subsections (1. Depropanizer Heat Pump
  Compressor Recycle Control ... 8. Depropanizer Bottom Reboiler to
  Debutanizer Control, printed pp. 11-5 – 11-7) and Tables 11-9 through 11-16
  — per Style Guide §6.2 these stay as the source drew them, not renumbered.
  This is the "Depropanizer" zoom-in on `ogas-cmp-fractionation-process-flow`
  (Figure 11-1).

  Source-quirk flagged, NOT corrected here (index work, not slide work): the
  diagram's output arrow after valve station 6 — which the surrounding
  application-review text names "Propane to Product Meter Control" (item 6)
  — is printed "ETHANE PRODUCT TO METERING," identical wording to Figure
  11-2's deethanizer diagram at the same diagram position. This reads as a
  copy-paste label carried over from the deethanizer artwork in the source
  document itself. Reported as observed on the real page; not altered or
  resolved here.
```

### Chapter 11 — Depropanizer Application Review: representative hardware, item 1 (printed p. 11-6)

```yaml
id: ogas-cmp-nps10-24-ewt-ewd-cutaway
teaches: >
  Labelled cutaway product photo of a Fisher NPS 10-24 EWT or EWD control
  valve (a large-bore ET-family globe valve). Representative hardware for the
  depropanizer's Heat Pump Compressor Recycle Control valve (item 1 in Figure
  11-4, Table 11-9: "Valve Type and Pressure Class — NPS 6-12 ET/EWT, ASME
  CL300") — the recycle valve handles large propane-vapor volumetric flow
  (12,000-108,000 MSCFD) at moderate pressure, consistent with a large-bore
  EWT-family body.
concept-tags: [EWT valve, EWD valve, cutaway, depropanizer, heat pump compressor recycle, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 11 "Fractionation," Figure 11-5 (drawing number W6022-2,
      printed p. 11-6) — "Figure 11-5. NPS 10-24 EWT or EWD."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch11-fig5-nps10-24-ewt-ewd-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 138, printed p. 11-6) at 300 dpi, full cutaway product photo (bolted body, internal trim, actuator stem) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the source directly beside Table 11-9 and the item-1
  "Depropanizer Heat Pump Compressor Recycle Control" text (printed pp. 11-5
  – 11-6), immediately following `ogas-cmp-depropanizer-process-diagram`
  (Figure 11-4) on the same printed page — same representative-hardware
  pattern as ch9/ch10's numbered-valve-station companion photos
  (`ogas-cmp-et-class300-whisperflo-spoked-plug`,
  `ogas-cmp-v260b-hydrodome-attenuator`).
```

### Chapter 11 — Depropanizer Application Review: representative hardware, items 2 & 4 (printed p. 11-7)

```yaml
id: ogas-cmp-8580-valve-2052-actuator-dvc6000
teaches: >
  Labelled product photo of a Fisher 8580 high-performance butterfly valve
  fitted with a 2052 spring-and-diaphragm actuator and a FIELDVUE DVC6000
  digital valve controller. Representative hardware for the depropanizer's
  heat-pump-compressor butterfly-valve applications (items 2 and 4 in Figure
  11-4, Table 11-10: "Valve Type and Pressure Class — NPS 6-12 8580, ASME
  CL300" and Table 11-12: "NPS 6-14 8580/8532, ASME CL300") — both applications
  take a minimal pressure drop moving compressed propane vapor and the
  surrounding text notes a butterfly valve is typically used for each.
concept-tags: [8580 valve, 2052 actuator, DVC6000, butterfly valve, depropanizer, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 11 "Fractionation," Figure 11-6 (drawing number W9498-2,
      printed p. 11-7) — "Figure 11-6. 8580 Valve with 2052 Actuator and
      DVC6000."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch11-fig6-8580-valve-2052-actuator-dvc6000.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 139, printed p. 11-7) at 300 dpi, full product photo (butterfly disc/body, 2052 actuator, DVC6000) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the source directly beside Tables 11-10, 11-11, and 11-12
  and the item-2/item-4 text continuing from Figure 11-4 (printed pp. 11-6 –
  11-7) — same representative-hardware pattern as
  `ogas-cmp-nps10-24-ewt-ewd-cutaway` above and ch9/ch10's numbered-valve-
  station companion photos.
```

### Chapter 11 — Debutanizer (printed p. 11-9)

```yaml
id: ogas-cmp-debutanizer-process-diagram
teaches: >
  Debutanizer unit process diagram — the zoom-in on Figure 11-1's debutanizer
  block, structurally parallel to Figure 11-2's deethanizer diagram and
  Figure 11-4's depropanizer diagram (same three-tower fractionation-train
  template, applied to the third tower). C4+ NGL mix from the depropanizer
  enters the trayed debutanizer tower; overhead butane vapor is cooled
  through an exchanger and captured in a reflux accumulator, then pumped
  (stations 3, 4) onward to product metering, with a reflux recycle loop back
  to the tower (stations 1, 2); the tower's bottom reboiler is heated by hot
  oil (station 5) and delivers the remaining C5+ liquid mix onward to
  stabilized condensate product metering (stations 6, 7).
concept-tags: [debutanizer, reflux accumulator, reboiler, hot oil, butane product, numbered valve stations]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 11 "Fractionation," Figure 11-7 (drawing number E1523, printed
      p. 11-9) — "Figure 11-7. Process Diagram of Typical Debutanizer Unit."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch11-fig7-debutanizer-process-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 141, printed p. 11-9) at 300 dpi, full schematic (all 7 numbered valve stations, tower, reflux accumulator, two pumps), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑦ are the source's own valve-station key,
  cross-referenced against the surrounding text's numbered "Debutanizer"
  application-review subsections (1. Debutanizer Reflux Pump to Debutanizer
  Control ... 7. Condensate Product Meter Control, printed pp. 11-8 – 11-10)
  and Tables 11-17 through 11-23 — per Style Guide §6.2 these stay as the
  source drew them, not renumbered. This is the "Debutanizer" zoom-in on
  `ogas-cmp-fractionation-process-flow` (Figure 11-1); it closes out the same
  three-diagram set as `ogas-cmp-deethanizer-process-diagram` (Figure 11-2)
  and `ogas-cmp-depropanizer-process-diagram` (Figure 11-4).

  Source-quirk flagged, NOT corrected here (index work, not slide work): the
  same "ETHANE PRODUCT TO METERING" copy-paste label already flagged on
  `ogas-cmp-depropanizer-process-diagram` recurs on this diagram too — the
  output arrow after the reflux-pump valve stations (3, 4), which the
  surrounding application-review text names "Debutanizer Reflux Pump to
  Debutanizer Control" / item 4 "Butane to Product Meter Control," is printed
  "ETHANE PRODUCT TO METERING," identical wording to Figure 11-2's deethanizer
  diagram at the same diagram position. This confirms the earlier observation
  is a real, repeated artwork artifact in the source document (carried across
  all three tower diagrams from the deethanizer original), not a one-off.
  Reported as observed on the real page; not altered or resolved here.
```

### Chapter 11 — Debutanizer Application Review: representative hardware, item 5 (printed p. 11-10)

```yaml
id: ogas-cmp-vee-ball-v150-2052-actuator-dvc6200
teaches: >
  Labelled product photo of a Fisher Vee-Ball V150 NPS 3 rotary control valve
  fitted with a 2052 spring-and-diaphragm actuator, size 1, and a FIELDVUE
  DVC6200 digital valve controller. Representative hardware for the
  debutanizer's Reboiler Hot Oil Return Control valve (item 5 in the
  Debutanizer application review, Table 11-21: "Valve Type and Pressure
  Class — NPS 6-12 Vee-Ball V150, ASME CL150") — the only Vee-Ball V150 valve
  family named anywhere in the Debutanizer application review (every other
  item in the section specifies an ET-family globe valve, ASME CL300).
concept-tags: [Vee-Ball V150, 2052 actuator, DVC6200, rotary valve, debutanizer, reboiler hot oil return, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 11 "Fractionation," Figure 11-8 (drawing number X0187, printed
      p. 11-10) — "Figure 11-8. Vee-Ball V150 NPS 3 with 2052 Size 1 Actuator
      and DVC6200."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch11-fig8-vee-ball-v150-2052-actuator-dvc6200.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 142, printed p. 11-10) at 300 dpi, full product photo (Vee-Ball rotary body, 2052 actuator, DVC6200) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Honest-linkage caveat, same shape as `ogas-cmp-nps4-eh-hp-657-actuator-dvc6010`:
  the source's own text does NOT cross-reference this photo to a specific
  numbered application item by caption or adjacency — on the printed page it
  sits directly above Table 11-20 (item 4, "Butane to Product Meter Control,"
  an NPS 3-6 ET globe valve — NOT a Vee-Ball). The valve-family match to item
  5 (Table 11-21, the section's only Vee-Ball V150 entry) is a confident
  match by exclusivity — no other item in the Debutanizer review specifies
  a Vee-Ball of any series — but it is a family match found by scanning the
  whole section's tables, not a positional or captioned linkage on the page
  itself. Reported as such rather than overclaimed.
```

### Chapter 11 — Fractionation Valve-Duty-Point Taxonomy and Selection Rationale (chapter-wide, spans all three towers' Application Review sections, printed pp. 11-3 – 11-10)

```yaml
id: ogas-topic-fractionation-valve-selection-rationale
kind: topic
teaches: >
  Each fractionation tower's Application Review names the same recurring
  set of valve duty points, with the same selection reasoning applied at
  each tower (deethanizer, depropanizer, debutanizer): (1) tower feed
  control — flashing risk drives CoCr-A hardfacing, or an angle body with
  hardened liner if flashing is expected to be severe; (2) reflux-pump
  discharge back to the tower — a segmented ball valve for accurate flow
  control and rangeability at minimal pressure drop; (3) reflux-pump
  recycle (anti-cavitation/anti-surge protection during commissioning and
  startup) — standard trim suffices at small pressure drop, but the
  primary-pump recycle duty point specifically needs anti-cavitation trim
  (and sometimes Micro-Trim for low flow) because of its elevated pressure
  drop; (4) product-to-meter control — minimal pressure drop, a globe with
  standard trim is the usual choice; (5) reboiler-to-next-tower handoff —
  accurate control needed to optimize the next tower's recovery; (6)
  reboiler hot-oil-return control. The depropanizer's heat-pump-compressor
  duty points are a distinct case beyond this common pattern: a butterfly
  valve is typical at minimal pressure drop, but the compressor-recycle
  valve specifically needs fast-stroking capability for anti-surge
  service, up to specifying the Fisher Optimized Digital Valve (ODV) on
  larger valves to meet stroke-speed and throttling requirements — a real,
  distinct selection driver (surge protection response time) that the
  other duty points don't share.
concept-tags: [valve selection rationale, anti-cavitation trim, Micro-Trim, segmented ball valve, anti-surge, ODV, fast stroking, rangeability, flashing, hardfacing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 11 'Fractionation,' the Deethanizer/Depropanizer/Debutanizer Application Review numbered-item prose (items 1-8 per tower), printed pp. 11-3 through 11-10 — read directly across all three towers to confirm the pattern recurs, not assumed from one tower alone."
relatedFigures: [ogas-cmp-deethanizer-process-diagram, ogas-cmp-depropanizer-process-diagram, ogas-cmp-debutanizer-process-diagram]
relatedTopics: [ogas-topic-fractionation-train-mechanism, cvh-topic-cavitation, cvh-topic-flow-recovery]
used-by: []
notes: >
  Cross-referenced to the Control Valve Handbook's own cavitation/flow-
  recovery topic entries (`cvh-topic-cavitation`, `cvh-topic-flow-recovery`
  — verified real in `Subject-Matter Index — Control Valve Handbook ch5.md`
  before citing) since the anti-cavitation-trim selection reasoning here is
  a direct industry application of that same mechanism, not a separate
  fact. This is the single richest transferable concept in the chapter —
  captures the REASONING pattern across all three towers' Application
  Review sections rather than restating any one tower's own table values,
  which stay correctly owned by the existing per-figure component entries.
```

---

## Open items

- **Third batch — `kind: topic` pass (2026-09-17):** read the chapter's
  full real prose (PDF pp. 133-142, all 10 printed pages) beyond the
  figure captions already catalogued. Three genuine topic entries added:
  `ogas-topic-ngl-fractions-and-terminology` (chapter-opening prose, no
  figure at all on that page — invisible to the original figures-only
  pass), `ogas-topic-fractionation-train-mechanism` (the boiling-point
  separation principle, complementing rather than duplicating Figure
  11-1), and `ogas-topic-fractionation-valve-selection-rationale` (the
  recurring valve-duty-point pattern and selection reasoning across all
  three towers' Application Review sections — the chapter's single
  richest transferable concept). No other section had conceptual content
  beyond what its existing figure entry already captures — every
  Application Review numbered item beyond the general pattern above is
  tower-specific table data, correctly left uncatalogued as a topic (the
  existing per-figure entries already cite the relevant tables directly).
  File integrity verified: 11 total ids (8 figures + 3 topics), all
  unique, all `relatedFigures`/`relatedTopics` references — including the
  two cross-file citations into `Subject-Matter Index — Control Valve Handbook
  ch5.md`'s `cvh-topic-cavitation`/`cvh-topic-flow-recovery` — verified to
  resolve to real existing ids before use.
- **First batch (Figures 11-1 through 11-6):** all six requested figures
  confirmed against the real page text and a 300 dpi page-image render
  before extraction; none were skipped or fabricated. PDF pages 134
  (printed 11-2), 135 (11-3), 137 (11-5), 138 (11-6, ×2), 139 (11-7). No
  gaps within that batch's range.
- **Second batch (Figures 11-7 and 11-8, this update):** both requested
  figures confirmed against the real page text and a 300 dpi page-image
  render before extraction; none were skipped or fabricated. PDF pages 141
  (printed 11-9, Figure 11-7) and 142 (printed 11-10, Figure 11-8). This
  closes out Chapter 11 — no figures remain uncatalogued in the chapter.
  **Corrects the first batch's own forward-flag**, which had guessed
  Figure 11-7 at PDF p. 140 / printed 11-8 and Figure 11-8 at PDF p. 141 /
  printed 11-9 (both off by one page from a running-text skim); the
  page-numbering note above records the confirmed folios and the
  correction.
- **Chapter-title correction, flagged at the top of this file:** the batch
  request that produced this file mislabelled the target chapter "Oil and
  Gas Transportation" — the real Chapter 11 title, confirmed by reading the
  rendered pages, is "Fractionation." "Oil and Gas Transportation" is
  Chapter 10, already catalogued in `Subject-Matter Index — Oil & Gas Sourcebook
  ch10.md`, whose own closing note predicted exactly this chapter boundary.
  The figures requested across both batches all matched Chapter 11's real
  content exactly, so nothing here is miscatalogued — only the chapter
  label in the originating request was wrong.
- **Source-quirk, confirmed as a repeated pattern across both batches:**
  Figure 11-4's (depropanizer) valve-station-6 output is printed "ETHANE
  PRODUCT TO METERING" where the surrounding text's item 6 is "Propane to
  Product Meter Control"; Figure 11-7's (debutanizer) equivalent output
  station carries the identical "ETHANE PRODUCT TO METERING" mislabel where
  the surrounding text calls for a butane-product label. Both flagged in
  their own records as an apparent label carryover from Figure 11-2's
  (deethanizer) original artwork, not corrected (index work, not
  slide/source-editing work).
- All eight records in this file are `used-by: []` — this is a proactive,
  use-driven-ahead catalog per `Source Library.md`; no course currently
  references them.
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
