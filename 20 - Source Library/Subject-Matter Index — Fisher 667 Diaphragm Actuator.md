---
title: Subject-Matter Index — Fisher 667 Diaphragm Actuator
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
chapter: whole document — no chapter structure
updated: 2026-09-19
---

# Subject-Matter Index — Fisher 667 Diaphragm Actuator Instruction Manual

Standing full-chapter cataloging pass (document grain — this manual has no
chapter structure to sub-divide by), part of the "index all Technical
Publications manuals" directive (Franz, 2026-09-19) — deliberately ahead of
any specific course's current citation of this document, per that
directive's own stated demand signal ("Franz added it to the library").
Matches the rigor of every prior pass: every page in the document's real
range was rendered as an image and visually inspected — not read from
extracted text alone — and every real figure identified against the
rendered page.

**Document boundary, confirmed directly:** 40 real pages (`pdfinfo`
confirmed), front cover through the back-cover legal/address page. No
chapter numbering exists — the house structure is Introduction/Scope of
Manual, Description, Specifications, Educational Services, Instructional
Videos, Maximum Pressure Limitations, Installation (Mounting the Actuator
on the Valve, Discussion of Bench Set, Spring Verification, Installing the
Stem Connector Assembly, Friction Discussion, Deadband Measurement, Loading
Connection), Maintenance (Actuator, five Top-/Side-Mounted Handwheel
variants, Casing-Mounted Travel Stops), Parts Kits, Parts List.

All figures are numbered flatly (Figure 1 through Figure 25), no chapter
prefix, matching the grouping-header convention `Subject-Matter Index — Process
& Standards.md` documents for this class of document. This pass catalogs
existence and location only — no crop/extraction has been performed.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher 667 Diaphragm Actuator IM** | D100310X012 · May 2018 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted. |

## Components

### Introduction (printed p. 1)

```yaml
id: f667-cmp-actuator-on-easye-valve
teaches: >
  A complete Fisher 667 actuator mounted on an easy-e globe valve — the
  manual's own cover figure, introducing the real product before any
  procedure begins.
concept-tags: [667, spring-and-diaphragm actuator, easy-e valve, production photo]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 1 'Fisher 667 Actuator Mounted on easy-e Valve,' p. 1 (photo X1182)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo, unlabelled. Topically adjacent to
  `cvh-cmp-sliding-stem-valve-photo` (Control Valve Handbook ch1, Figure
  1.2) and `ogas-cmp-657-667-diaphragm-actuator-cutaways` (Oil & Gas
  Sourcebook ch2) — checked both directly; neither is the same photo (CVH's
  is an unbranded generic sliding-stem overview, Oil & Gas's is a labelled
  657-vs-667 comparison cutaway). Genuinely distinct figure, not
  cross-referenced as a duplicate.
mediaStatus: unreviewed
```

### Description (printed p. 3)

```yaml
id: f667-cmp-operating-schematic
teaches: >
  The actuator's direct-acting operating principle as a labelled schematic:
  air lifts the stem up, the spring pushes the stem down, with stem seal
  and stem called out — the mechanism the rest of the manual assumes the
  reader already understands.
concept-tags: [667, operating principle, direct-acting, schematic, stem seal, spring]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 2 'Schematic of Fisher 667 and 667-4 Actuators,' p. 3 (drawing A6759)"
delivery: analytical diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  Labelled operating-principle schematic, not a parts diagram. Topically
  related to Control Valve Handbook ch1's `cvh-cmp-direct-acting-actuator`
  (Figure 1.9) but a different, simpler drawing (4 labels vs. CVH's 12-part
  numbered cutaway) — cross-referenced here, not merged.
mediaStatus: unreviewed
```

### Installation — Mounting the Actuator on the Valve (printed p. 6)

```yaml
id: f667-cmp-mounting-components
teaches: >
  Actuator-mounting components for size 30/30i through 70/70i actuators,
  fully labelled (vent assembly, diaphragm casings, diaphragm/stem
  position, actuator spring, spring adjustor, stem connector, yoke, travel
  indicator disk), plus a companion callout diagram of the valve-side
  mounting features (valve stem, yoke lock nut, yoke boss diameter, bonnet,
  match line for actuator).
concept-tags: [667, mounting, yoke, stem connector, travel indicator, bonnet, valve stem]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 3 'Actuator-Mounting Components for Size 30/30i through 70/70i Actuators,' p. 6 (drawings X1184/X1185, W6199-1)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Two-actuator side-by-side comparison (Size 30-76 vs. 30i-76i) plus a
  separate valve-side callout — genuinely three drawings sharing one figure
  number; catalogued as one component since they're printed and captioned
  together.
mediaStatus: unreviewed
```

### Installation — Discussion of Bench Set (printed p. 7)

```yaml
id: f667-cmp-bench-set-adjustment
teaches: >
  Bench-set adjustment procedure for the 667: spring adjuster, actuator
  stem, upper/lower bench-set loading pressure, lower bench-set pressure
  mark, valve stem, rated valve travel measure — the same lower-mark/
  upper-retract/measure-travel procedure taught for the 657, on the 667's
  own drawing.
concept-tags: [667, bench set, spring adjuster, rated travel, lower bench set, upper bench set]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 4 'Bench Set Adjustment,' p. 7 (drawings 50A8379-C, B2429-1)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same procedure as `bench-set-657`'s own bench-set records and 14101's
  `ch3-cmp-benchset-adjustment-setup` (Subject-Matter Index — 14101 ch3.md), but
  a different drawing (this is the 667's own 50A8379-C/B2429-1 figure, not
  the 657 IM's Figure 4) — cross-referenced, not merged; the two products'
  own manuals each get their own real drawing catalogued.
mediaStatus: unreviewed
```

### Installation — Friction Discussion / Deadband Measurement (printed p. 11)

```yaml
id: f667-cmp-deadband-response-graph
teaches: >
  Typical valve response to deadband, two-panel graph (direct-acting vs.
  reverse-acting valve): diaphragm pressure vs. valve travel, bench set
  band, range of deadband — deadband is caused by friction.
concept-tags: [667, deadband, bench set, direct-acting, reverse-acting, friction]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 5 'Typical Valve Response to Deadband,' p. 11 (drawing A6763-2)"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  Same underlying concept as `cvh-cmp-deadband-graph` (Control Valve
  Handbook ch1, Figure 1.18) and 14101's `ch3-cmp-deadband-effect-chart` —
  a different drawing (this one is direct-vs-reverse two-panel; CVH's is a
  single hysteresis loop) — cross-referenced, not merged.
mediaStatus: unreviewed
```

### Maintenance — Actuator (printed pp. 27–31)

```yaml
id: f667-cmp-actuator-size-30-60
teaches: >
  Fisher 667 actuator, sizes 30 through 60, full parts cutaway with numbered
  key callouts (not named labels) tying to the manual's own parts list.
concept-tags: [667, parts diagram, actuator assembly, size 30-60]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 6 'Fisher 667 Actuator Sizes 30 through 60,' p. 27 (drawing 50A8379-C)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Numbered-key parts diagram; keys resolve against the manual's own Parts List section, not catalogued separately here.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-actuator-size-30i-60i
teaches: >
  Fisher 667 actuator, sizes 30i through 60i, full parts cutaway with
  numbered key callouts — the "i" (integral-mount) size-range companion to
  Figure 6.
concept-tags: [667, parts diagram, actuator assembly, size 30i-60i]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 7 'Fisher 667 Actuator Sizes 30i through 60i,' p. 28 (drawing GE71547-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing from Figure 6 (different key numbers, e.g. 259 appears here, not in Fig 6) — genuinely different construction, not a duplicate.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-actuator-size-70-76
teaches: >
  Fisher 667 size 70 and 76 actuator, full parts cutaway with numbered key
  callouts.
concept-tags: [667, parts diagram, actuator assembly, size 70-76]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 8 'Fisher 667 Size 70 and 76 Actuator,' p. 29 (drawing 50A8598-E)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing; introduces key 78, 83 not present on the smaller-size figures.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-actuator-size-70i-76i
teaches: >
  Fisher 667 size 70i and 76i actuator, full parts cutaway with numbered
  key callouts.
concept-tags: [667, parts diagram, actuator assembly, size 70i-76i]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 9 'Fisher 667 Size 70i and 76i Actuator,' p. 30 (drawing GE71630-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing, "i" companion to Figure 8.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-actuator-size-87
teaches: >
  Fisher 667 size 87 actuator, full parts cutaway with numbered key
  callouts — the largest size in this manual's range.
concept-tags: [667, parts diagram, actuator assembly, size 87]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 10 'Fisher 667 Size 87 Actuator,' p. 31 (drawing 50A8600-E)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing; introduces key 79 not present on the other four size-variant figures.
mediaStatus: unreviewed
```

### Maintenance — Top-Mounted Handwheel Assembly (printed pp. 32–34)

```yaml
id: f667-cmp-top-handwheel-30-40
teaches: >
  Top-mounted handwheel assembly for size 30/30i through 40/40i actuators —
  fully keyed parts diagram; note that the top-mounted handwheel is not
  designed for heavy load or frequent use.
concept-tags: [667, handwheel, top-mounted, manual override, size 30-40]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 11 'Top-Mounted Handwheel Assembly for Size 30/30i through 40/40i Actuators,' p. 32"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: First of five top-/side-mounted handwheel variant figures (11-19), each a genuinely distinct size-range drawing.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-top-handwheel-p2-45-76
teaches: >
  Top-mounted handwheel assembly, Style P2, for size 45/45i, 50/50i,
  60/60i, and 76/76i actuators.
concept-tags: [667, handwheel, top-mounted, style P2, manual override]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 12 'Top-Mounted Handwheel Assembly, Style P2 for Size 45/45i, 50/50i, 60/60i, and 76/76i Actuators,' p. 32 (drawing 30B3942-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct from Figure 11 — a different mounting style (P2), not just a size variant.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-top-handwheel-45-76i
teaches: >
  Top-mounted handwheel assembly for size 45/45i-76/76i actuators.
concept-tags: [667, handwheel, top-mounted, manual override]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 13 'Top-Mounted Handwheel Assembly for Size 45/45i-76/76i Actuators,' p. 33 (drawing 33B9224-B)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing from Figures 11/12.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-top-handwheel-70-87
teaches: >
  Top-mounted handwheel assembly for size 70/70i and 87 actuators.
concept-tags: [667, handwheel, top-mounted, manual override, size 70-87]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 14 'Top-Mounted Handwheel Assembly for Size 70/70i and 87 Actuators,' p. 34 (drawing CV8060-J)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-top-handjack-bar-70-87
teaches: >
  Top-mounted handjack bar assembly for size 70/70i and 87 actuators — a
  bar tool, not a wheel; the manual notes it should be removed when not in
  use and the handwheel cap installed for weather protection.
concept-tags: [667, handjack bar, top-mounted, manual override, size 70-87]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 15 'Top-Mounted Handjack Bar Assembly for Size 70/70i and 87 Actuators,' p. 34 (drawing GE61626-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: A genuinely different manual-override tool (bar, not wheel) from Figure 14, shown on the same page — not a duplicate.
mediaStatus: unreviewed
```

### Maintenance — Side-Mounted Handwheel Assembly (printed pp. 35–38)

```yaml
id: f667-cmp-side-handwheel-34-40
teaches: >
  Side-mounted handwheel assembly for size 34 and 40 actuators, fully keyed
  parts diagram including the neutral-position indicator.
concept-tags: [667, handwheel, side-mounted, manual override, size 34-40]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 16 'Side Mounted Handwheel Assembly for Size 34 and 40 Actuators,' p. 35 (drawing 30A8778-D)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: First of four side-mounted handwheel size-range figures (16-19).
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-side-handwheel-34i-40i
teaches: >
  Side-mounted handwheel assembly for size 34i and 40i actuators.
concept-tags: [667, handwheel, side-mounted, manual override, size 34i-40i]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 17 'Side Mounted Handwheel Assembly for Size 34i and 40i Actuators,' p. 35 (drawing GE71635-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing from Figure 16.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-side-handwheel-45-60
teaches: >
  Side-mounted handwheel assembly for size 45 through 60 actuators.
concept-tags: [667, handwheel, side-mounted, manual override, size 45-60]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 18 'Side-Mounted Handwheel Assembly for Size 45 through 60 Actuators,' p. 36 (drawing 40A8779-D)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-side-handwheel-45i-60i
teaches: >
  Side-mounted handwheel assembly for size 45i through 60i actuators.
concept-tags: [667, handwheel, side-mounted, manual override, size 45i-60i]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 19 'Side Mounted Handwheel Assembly for Size 45i through 60i Actuators,' p. 36 (drawing GE71636-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-side-handwheel-70-87
teaches: >
  Size 70, 76, and 87 actuator shown fully assembled with the side-mounted
  handwheel installed — the largest, most complete parts cutaway in the
  manual (keys through 144).
concept-tags: [667, handwheel, side-mounted, manual override, size 70-87, full assembly]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 20 'Size 70, 76, and 87 Actuator with Side Mounted Handwheel Assembly,' p. 38 (drawing E0871)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct, most extensive callout set in the manual.
mediaStatus: unreviewed
```

### Maintenance — Casing-Mounted Travel Stops (printed pp. 39–40)

```yaml
id: f667-cmp-travel-stop-style10
teaches: >
  Style 10 down travel stop (casing-mounted) — for all actuator sizes.
concept-tags: [667, travel stop, casing-mounted, style 10, down travel]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 21 'Style 10 Down Travel Stop - For All Sizes (Casing Mounted),' p. 39 (drawing BV8094-B)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: First of five travel-stop style figures (21-25), each a genuinely distinct mechanism.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-travel-stop-style11
teaches: >
  Style 11 up or down travel stop (casing-mounted) — for sizes 30/30i to
  60/60i and 76/76i.
concept-tags: [667, travel stop, casing-mounted, style 11, up travel, down travel]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 22 'Style 11 Up Or Down Travel Stop - For Sizes 30/30i to 60/60i and 76/76i (Casing Mounted),' p. 39 (drawing 38A1212-B)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct mechanism from Style 10 — reversible up/down, not down-only.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-travel-stop-style12
teaches: >
  Style 12 up travel stop (casing-mounted).
concept-tags: [667, travel stop, casing-mounted, style 12, up travel]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 23 'Style 12 Up Travel Stop (Casing Mounted),' p. 40 (drawing 28A1208-B)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct mechanism.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-travel-stop-style13
teaches: >
  Style 13 up travel stop (casing-mounted) — for sizes 30/30i to 60/60i and
  76/76i, size 30/30i shown.
concept-tags: [667, travel stop, casing-mounted, style 13, up travel]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 24 'Style 13 Up Travel Stop - For Sizes 30/30i to 60/60i and 76/76i, Size 30/30i Shown (Casing Mounted),' p. 40 (drawing 28A1204-B)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct mechanism, simpler construction than Styles 10-12.
mediaStatus: unreviewed
```

```yaml
id: f667-cmp-travel-stop-style14
teaches: >
  Style 14 up travel stop (casing-mounted) — the simplest of the five
  travel-stop styles, a plain threaded rod with two nuts.
concept-tags: [667, travel stop, casing-mounted, style 14, up travel]
status: current
source:
  - doc: Fisher 667 Diaphragm Actuator IM (D100310X012, May 2018)
    locator: "Figure 25 'Style 14 Up Travel Stop (Casing Mounted),' p. 40 (drawing AV8096-B)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Last figure in the manual; distinct mechanism.
mediaStatus: unreviewed
```

## Open Items

- **Document boundary confirmed directly**: 40 pages total (`pdfinfo`), page 1 the title/Contents page, page 40 the last content page (Figures 23-25 plus legal/address back matter) — no chapter divider pages exist since this document has no chapter structure.
- **Full coverage: all 25 figures (Figure 1 through Figure 25) catalogued, no gaps.** Every figure identified via a `pdftotext` sweep for `Figure N.` across every page, then every one visually confirmed against its rendered page (150dpi) — not read from extracted text alone.
- **No duplicate printed figure numbers found** in this manual.
- **No source citation errors found.**
- **Table exclusion**: no separately-numbered "Table N" items exist in this manual's figure sequence (the manual references "table 1" for specifications in body text, but that table carries no independent figure-style catalog entry of its own per the standing figures-only rule — it is a data table, correctly excluded).
- **Cross-reference check, done against the whole library, not assumed clean.** Checked `Subject-Matter Index — Control Valve Handbook ch1.md` (actuator content), `ch3.md`, `ch4.md`, `Subject-Matter Index — Oil & Gas Sourcebook ch2.md` (actuator-selection fundamentals — real hits: `ogas-cmp-657-667-diaphragm-actuator-cutaways`, `ogas-cmp-diaphragm-actuator-handwheel`), `Subject-Matter Index — 14101 ch1-ch2.md`, `Subject-Matter Index — 14101 ch3.md`, and `Subject-Matter Index — bench-set-657.md`. Four real topical overlaps found (bench-set procedure, deadband graph, operating schematic, cover photo) — all confirmed to be genuinely different drawings from their CVH/Oil & Gas/14101 counterparts (different drawing numbers, different composition), so each was catalogued as its own record with an explicit cross-reference note rather than merged as multi-source. No case required merging — this manual's own drawings are consistently distinct artwork from the generic-fundamentals figures already indexed elsewhere, even when teaching the same underlying concept.
- **No low-confidence flags** — every figure's caption, page, and content were confirmed directly against the rendered page.
- **No archive or legacy material** was found or consulted — the current-edition IM is the sole and sufficient source for all 25 figures.
- **`mediaStatus: unreviewed`** applied to every record, per the standing rule for newly-catalogued components.
