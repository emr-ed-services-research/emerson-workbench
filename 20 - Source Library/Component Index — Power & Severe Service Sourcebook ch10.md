---
title: Component Index — Power & Severe Service Sourcebook ch10
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch10 — Materials Guidelines
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 10

**Chapter 10 — "Materials Guidelines."** Standing library-cataloging pass,
part of resuming the whole-document indexing of the Power & Severe Service
Sourcebook (the earlier pass completed chapters 1–7, 9C, 9D, 12–14; this
pass fills the confirmed gaps: 8, 9A, 9B, 10, 11), per `Component Index —
Process & Standards.md`'s "standing full-chapter" trigger. Every real page
in the chapter's confirmed range was rendered at 150dpi and read directly.

Chapter boundaries confirmed directly by rendering: PDF page 173 is the
"Chapter 10 / Materials Guidelines" divider, real content runs through PDF
page 186 (printed p. 10-14, "Fisher Standard Designation System"), and PDF
page 187 is immediately the "Chapter 11 / Packing Materials and Systems"
divider — zero page offset against the chapter's own printed numbering
(10-1 through 10-14), no trailing blank page.

**This is primarily a narrative materials-engineering chapter** (mechanical
properties, wear/corrosion mechanisms, standard body/bonnet/trim/bolting
material selections, materials designation systems) with genuinely few
figures — the opposite shape from Chapters 8 and 9B, with no mode-sequence
or progressive-diagram bundling question to resolve. All figures are from
`20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook
- Power & Severe Service.pdf`. No extracted-figures crop folder exists for
this book — each record's `source` carries a single locator. Every record's
`used-by` is `[]`.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition
(D101449X012), is itself a **current** first-party Fisher/Emerson document,
so every record below is `status: current`. No archive or legacy material
was consulted.

## Components

### Chapter 10 — Selection of Body/Bonnet Material (printed p. 10-6)

```yaml
id: pss-cmp-pt-ratings-comparison-graph
kind: figure
teaches: >
  Relative ANSI B16.34 pressure-temperature ratings for five common body/
  bonnet materials (WCB, WCC, WC9, C5, CF8M), each normalized to WC9's
  rating at room temperature and plotted across 0–1500°F — establishes the
  chapter's three-material-regime rule of thumb: WCC (and C5) rate highest
  from ambient to 700°F, WC9 rates highest from 700–950°F, and CF8M rates
  highest above 950°F.
concept-tags: [pressure temperature rating, ANSI B16.34, WCB, WCC, WC9, C5, CF8M, body bonnet material selection]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-1 (caption reads only 'Figure 10-1.', descriptive explanation given in the following paragraph rather than the caption itself), p. 10-6 — drawing E0166"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  LOW-CONFIDENCE FLAG: the printed caption under the chart reads only
  "Figure 10-1." with no descriptive sentence — confirmed directly against
  the rendered page, the same bare-caption anomaly already on record for
  this book's Figure 7-9 and Figure 9A-12. Here the descriptive explanation
  is given in the body-text paragraph immediately following instead of in
  the caption itself, so the figure's meaning is not actually ambiguous —
  flagged for consistency with how the pattern is documented elsewhere in
  this book.
mediaStatus: unreviewed
```

### Chapter 10 — Alloy 6 Corrosion Case Study (printed pp. 10-8 – 10-9)

```yaml
id: pss-cmp-alloy6-plug-side-view-damage-photo
kind: figure
teaches: >
  A real field-returned valve plug with CoCr-A (Alloy 6) hardsurfaced seat
  and guides, photographed in side view showing visible erosion-corrosion
  damage — the case study's opening exhibit, grounding the surrounding
  text's discussion of Alloy 6 failures in feedwater-regulator service
  treated with hydrazine or other amine derivatives.
concept-tags: [Alloy 6, CoCr-A, erosion corrosion, valve plug damage, feedwater regulator valve, hydrazine]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-2 'Side view of valve plug with CoCr-A hardsurfaced seat and guides showing erosion-corrosion damage,' p. 10-9 — drawing W5703"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real production/failure-analysis photo, not a manufacturer's drawing — first of a five-figure case-study sequence (Figures 10-2 through 10-5, plus the later Figure 10-6 on bolting, unrelated).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-alloy6-plug-end-view-damage-photo
kind: figure
teaches: >
  The same damaged plug from Figure 10-2, photographed end-on: shows a
  visible light-colored band adjacent to the plug's outer diameter (the
  damaged region) and illustrates how the sample was subsequently
  sectioned for laboratory examination.
concept-tags: [Alloy 6, CoCr-A, erosion corrosion, valve plug damage, metallographic sectioning]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-3 'End view of the same plug shown in Figure 10-2. Note the light band adjacent to the O.D. and the outside of the plug where the erosion-corrosion damage has occurred. This view also shows how the sample was removed for further evaluation,' p. 10-9 — drawing W5702"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Second of the five-figure case-study sequence; directly continues Figure 10-2.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-alloy6-sectioned-sample-photo
kind: figure
teaches: >
  The sectioned sample removed per Figure 10-3, photographed after
  metallographic polishing and etching of face "A" (a cross-section
  perpendicular to face "B", the bottom of the plug) — a circle marks the
  exact region examined at higher magnification in Figure 10-5.
concept-tags: [Alloy 6, metallographic polishing, sectioning, plane A, plane B, failure analysis]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-4 'Photograph of the sample, removed per Figure 10-3. This photograph was taken after metallographic polishing and etching of face \"A\", which is a cross-section perpendicular to plane \"B\", the bottom of the plug. The circle identifies the region shown in Figure 10-5,' p. 10-9 — drawing W5701"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Third of the five-figure case-study sequence; the circled region is what Figure 10-5's SEM photomicrograph shows at higher magnification.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-alloy6-sem-photomicrograph
kind: figure
teaches: >
  A scanning electron microscope (SEM) photomicrograph (100X) of the
  circled region from Figure 10-4: shows the microstructures of the S31600
  base material (left, plane "A") and the CoCr-A hardsurfacing (right,
  plane "A"), with the material interface (lower arrow) coinciding with the
  interface between damaged and undamaged areas on the unpolished plane "B"
  (upper arrow) — the case study's key evidentiary image, proving the
  CoCr-A hardsurfacing is being preferentially attacked while the base
  stainless steel is unaffected.
concept-tags: [SEM photomicrograph, S31600, CoCr-A, preferential corrosion, microstructure, failure analysis]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-5 'Scanning electron microscope photograph of the region shown in the circle in Figure 10-4. Note the microstructures of the S31600 (left-hand side) and the CoCr-A (right-hand side) in plane \"A\"... Original Magnification: 100X,' p. 10-9 — drawing W5700"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fourth and final image of the five-figure case-study sequence (Figure 10-2 through 10-5) — the sequence's conclusive evidence image.
mediaStatus: unreviewed
```

### Chapter 10 — Bolting (printed p. 10-11)

```yaml
id: pss-cmp-bolt-stress-vs-temperature-graph
kind: figure
teaches: >
  Allowable bolt stress vs. temperature (per ASME B&PV Code Section VIII)
  for the four most common Fisher bolting grades: B8M Class 1, B8M Class 2,
  B7, and B16 — shows B8M Class 2's higher allowable stress up to 800°F
  (from strain hardening) converging with Class 1 above that point, and B7
  losing its allowable-stress advantage over B16 above roughly 700°F —
  grounds the surrounding text's B7/B16/B8M bolting-selection discussion in
  one comparative chart.
concept-tags: [bolting, ASME B&PV Code Section VIII, B7 bolting, B16 bolting, B8M bolting, allowable stress, temperature]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-6 'Allowable Bolt Stress vs Temperature, ASME B&PV Code Section VIII,' p. 10-11 — drawing E0167"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  Last figure in the chapter; pp. 10-11 (remainder) through 10-14 (Materials
  Standardization, Standardized Metallic Materials Designations, Industry
  Trends, Fisher Standard Designation System) carry no further figures.
mediaStatus: unreviewed
```

---

## Open Items

- **Chapter boundary**, confirmed directly: Chapter 10 divider = PDF p. 173;
  Chapter 11 divider = PDF p. 187. Chapter 10 = PDF pp. 173–186 (printed pp.
  10-1 through 10-14), zero page offset, no trailing blank page. Every page
  in range was rendered at 150dpi and read directly.
- **Full coverage accounting**: Figures 10-1 through 10-6 — six real
  figures, all six accounted for above. No gaps; this is the chapter's
  complete figure set (confirmed by reading every page in range, not
  assumed from the chapter's largely-narrative subject matter).
- **Low-confidence flags**: Figure 10-1 (p. 10-6) prints only the bare
  caption "Figure 10-1." with no descriptive sentence in the caption itself
  — the same bare-caption pattern already on record for this book's Figure
  7-9 and Figure 9A-12, though here the explanation is given in the
  following body-text paragraph rather than left fully unexplained.
  Flagged in that record's own `notes`.
- **Duplicate-figure-number / source-citation-error findings**: none found.
- **Table-exclusion confirmation**: no numbered "Figure"-style tables were
  found in this chapter's range; the chapter's several materials-list
  blocks (bolting grades, casting-material lists by temperature use,
  standard trim/body materials by valve type) are unnumbered prose lists,
  not numbered tables, and are not figures — nothing to exclude under the
  tables-vs-figures rule.
- **Cross-reference findings**: no drawing-number or content overlap found
  against the Oil & Gas Sourcebook, the Control Valve Handbook, or any
  other chapter of this book already in this pass's context — this
  chapter's materials-engineering content (P-T ratings, the Alloy 6
  corrosion case study, bolting selection, materials designation systems)
  is generic cross-industry engineering reference material distinct from
  every other chapter's application-specific figures. Left for the closing
  whole-library sweep per standing practice.
- **Archive/legacy material**: none consulted, none needed — first-party
  current Fisher/Emerson document throughout.
