---
title: Component Index — Fisher 585CLS Long Stroke Piston Actuator
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher 585CLS Long Stroke Piston Actuator IM (D103793X012 — outer supplement dated April 2018, wrapping the real October 2013 instruction manual)
updated: 2026-09-21
---

# Component Index — Fisher 585CLS Long Stroke Piston Actuator

One of 7 manuals acquired for the 17101 gap-analysis, indexed in this pass
— specifically, the manual `Component Index — Fisher 585C Series Piston
Actuators.md`'s own Scope of Manual pointed to as a separate document for
the long-stroke variant ("Information for the 585CLS long stroke actuator
can be found in the Fisher 585CLS Instruction Manual, D103793X012").
Document-grain, whole-manual scope, **flat named-section structure**
(Introduction/Installation/Operation/Maintenance/Parts, no chapter
numbers). All 16 real pages rendered (150dpi) and visually inspected.

## A real structural finding worth flagging before the schema — this is not an ordinary current IM

**The document itself states: "The product covered in this document is
Inactive."** D103793X012 is a discontinuation supplement (cover dated April
2018) wrapping a reproduction of the actual, older 585CLS instruction
manual — which carries its own internal date of **October 2013** and its
own "Emerson Process Management" branding, distinct from the outer
supplement's cover page. The supplement's own Introduction explains this
plainly: it's "made available to provide updates of newer safety
procedures," while the real technical content (Installation, Maintenance,
Parts, and all 3 real figures) is the unedited 2013 manual reproduced
starting at page 5.

**Precedence judgment call, flagged rather than decided silently:** the
existing four-bucket vocabulary (`current` / `archive-corroborated` /
`archive-only` / `legacy`) doesn't have a clean slot for "the manufacturer's
own still-published, still-authoritative document for a product that has
since been discontinued." This is genuinely different from what "legacy" has
meant elsewhere in this project (older material superseded by better
current documentation) — there is no newer 585CLS manual; this **is** Fisher's
current, official answer for anyone who needs this document, they just
also disclose the underlying product's lifecycle status. I've catalogued
this as `status: current` below — it's the authoritative, first-party
document Emerson actually publishes and points to, not an archive scan or
a superseded draft — but flagging this explicitly since it's a real
judgment call, not a mechanical application of the vocabulary. If Franz
reads it differently (e.g., wants a `legacy` tag specifically because the
underlying product is inactive), that's a one-line change once decided.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher 585CLS Long Stroke Piston Actuator IM** | D103793X012 · outer supplement April 2018, real content dated October 2013 | `current` | First-party Emerson/Fisher document — see the judgment-call note above. The underlying product is explicitly disclosed as Inactive/discontinued by the document itself; this is a product-lifecycle fact, not a precedence-bucket downgrade. |

## Cross-reference check against 585C — done, confirmed clean

Checked directly against `Component Index — Fisher 585C Series Piston
Actuators.md`'s own drawing numbers before minting anything here — **zero
overlap**. 585CLS's three real drawings (W2795-1, 52A7782-A, 52A7783-A) are
genuinely distinct from every drawing cited in the 585C manual's own
records, confirming 585CLS is real, separate hardware, not a
relabeled/shared design — matches what 585C's own Scope of Manual already
implied by pointing to this as a separate document.

## Components

### Introduction (printed p. 1 of the embedded 2013 manual)

```yaml
id: f585cls-cmp-actuator-photo
teaches: >
  A complete Fisher 585CLS long-stroke piston actuator — a real product
  photo showing the extended cylinder body, positioner/DVC mounting
  bracket, and the long travel-indicator column characteristic of this
  actuator's extended-stroke design (up to 610 mm/24 inches).
concept-tags: [585CLS, long stroke, piston actuator, overview photo]
status: current
source:
  - doc: Fisher 585CLS Long Stroke Piston Actuator IM (D103793X012)
    locator: "Figure 1 'Fisher 585CLS Piston Actuator,' p. 1 of the embedded manual (drawing W2795-1)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo, unlabelled — the manual's own opening overview image,
  same role Figure 1 plays in the 585C manual and most other Technical
  Publications manuals in this batch.
mediaStatus: unreviewed
```

### Maintenance — Handwheel Construction (printed p. 11 of the embedded 2013 manual)

```yaml
id: f585cls-cmp-handwheel-construction-assembly
teaches: >
  Fully labelled exploded/cutaway assembly of the 585CLS handwheel
  construction — 56 numbered callouts across four views: the main cutaway
  (handwheel-side and travel-indicator-side halves), View B-B (handwheel
  stop mechanism detail), Section A-A (worm gear and bearing construction),
  and a Back View of the handwheel assembly.
concept-tags: [585CLS, handwheel construction, exploded view, worm gear, travel indicator]
status: current
source:
  - doc: Fisher 585CLS Long Stroke Piston Actuator IM (D103793X012)
    locator: "Figure 2 'Fisher 585CLS Actuator,' p. 11 of the embedded manual (drawing 52A7782-A) — 56-part numbered assembly across 4 sub-views"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The handwheel-construction companion to Figure 3 (non-handwheel
  construction). Notes on the source page: LP = Lubriplate No. 130AA, pack
  parts 20 and 40 with multipurpose grease.
mediaStatus: unreviewed
```

### Maintenance — Non-Handwheel Construction (printed p. 12 of the embedded 2013 manual)

```yaml
id: f585cls-cmp-non-handwheel-construction-assembly
teaches: >
  Fully labelled assembly view of the 585CLS non-handwheel construction —
  11 numbered callouts, contrasted directly against Figure 2's
  handwheel-equipped version (same actuator body, no handwheel/worm-gear
  stop hardware).
concept-tags: [585CLS, non-handwheel construction, exploded view]
status: current
source:
  - doc: Fisher 585CLS Long Stroke Piston Actuator IM (D103793X012)
    locator: "Figure 3 'Fisher 585CLS Actuator,' p. 12 of the embedded manual (drawing 52A7783-A) — 11-part numbered assembly"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Non-handwheel companion to Figure 2. Last figure in the document — parts
  ordering/parts list content follows, no further figures.
mediaStatus: unreviewed
```

## Open Items

- **Full coverage: 3 figures catalogued (Figures 1–3), no gaps.** Located
  via a full-text sweep across all 16 real pages, every one visually
  verified against its rendered page.
- **Real structural finding, flagged prominently above and in the file's
  own header**: this document is an "Inactive product" supplement wrapping
  a 2013 manual, not an ordinary current-product IM — a genuine precedence
  judgment call, not a mechanical vocabulary application. See the section
  above.
- **No duplicate figure numbers or source citation errors found.**
- **Cross-reference check against 585C, confirmed clean** — zero shared
  drawing numbers (W2795-1, 52A7782-A, 52A7783-A vs. 585C's own set).
- **No tables** carry their own figure number in this document — the
  Parts List (p. 10 of the embedded manual) is a genuine numbered table,
  correctly excluded per the standing figures-only rule.
- **No low-confidence flags** — every figure's caption, page, and drawing
  number confirmed directly.
- **`used-by` is `[]`** — 17101, the course that drove this acquisition, is
  an unconverted legacy deck with no real Component Index citations of its
  own yet.
