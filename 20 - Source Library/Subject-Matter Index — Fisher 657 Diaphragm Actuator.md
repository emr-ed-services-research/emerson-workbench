---
title: Subject-Matter Index — Fisher 657 Diaphragm Actuator
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher 657 Diaphragm Actuator IM (D100306X012, June 2018)
updated: 2026-09-19
---

# Subject-Matter Index — Fisher 657 Diaphragm Actuator Instruction Manual

**Pass 2 of Franz's "index all Technical Publications manuals" directive
(2026-09-19)** — finishing this document beyond its already-indexed
bench-set section. Document-grain, whole-manual scope, matching the
convention `Subject-Matter Index — Process & Standards.md` sets for
Technical Publications manuals with no chapter structure. Named-section
grouping headers, per the same doc. Every figure visually verified against
the rendered page — 150dpi, all 32 pages — not read from text extraction
alone.

**Relationship to `Subject-Matter Index — bench-set-657.md`: no overlap, by
design.** That file is a standalone topic-driven trial (accepted 2026-09-06,
real historical/methodology value of its own — see its own header) covering
Figures 3, 4, and 5 (mounting preconditions, bench-set adjustment, and the
deadband graph) under `bs657-cmp-*` ids. This file covers everything else in
the same 32-page document — Figures 1, 2, and 6 through 20 — under a
separate `f657-cmp-*` prefix. Confirmed no figure-number collision between
the two files before writing a single record here. Do not merge the two
files: the bench-set-657 trial's own comparison-against-ch3 findings and
methodology assessment are real, referenced content
(`Course Porting Pipeline.md` cites it for "Origination without a deck"),
not a draft superseded by this pass.

Real page range: the whole document, PDF/printed pages 1–32 (zero offset,
confirmed — page 32 carries the manual's own back-cover legal text, page 1
is the title page, both directly inspected). No chapter structure exists;
the document's own section names are used as grouping headers below.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher 657 Diaphragm Actuator IM** | D100306X012 · June 2018 | `current` | First-party Emerson/Fisher document; sole source for this file's records. Same precedence already established for this document by `Subject-Matter Index — bench-set-657.md` and `Subject-Matter Index — 14101 ch3.md`. |

## Components

### Introduction (printed p. 1)

```yaml
id: f657-cmp-actuator-on-easye-valve
teaches: >
  A complete Fisher 657 actuator mounted on an easy-e valve body, with a
  digital valve controller attached — the manual's own cover/overview
  photo, establishing what a fully assembled 657 installation looks like
  before the document breaks into individual procedures and parts.
concept-tags: [657 actuator, easy-e valve, digital valve controller, overview photo]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 1 'Fisher 657 Actuator Mounted on an easy-e Valve,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo, unlabelled — a section-opening overview image, same
  role Control Valve Handbook ch1's Figure 1.2/1.13 photos play for their
  own sections.
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-action-schematic
teaches: >
  A minimal labelled schematic of the 657's basic action: air pressure
  pushes the stem down, the spring lifts it back up — the two-line
  mechanical principle the whole rest of the document (bench set,
  deadband, spring verification) assumes the reader already has.
concept-tags: [657 actuator, direct action, spring return, action schematic]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 2 'Schematic of Fisher 657 and 657-4 Actuators,' p. 3 (drawing AF3833-A)"
delivery: analytical diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  Checked against Control Valve Handbook ch1's actuator figures
  (`cvh-cmp-direct-acting-actuator`, `cvh-cmp-reverse-acting-actuator`) —
  different drawings, not the same source image: the Handbook's figures are
  fully numbered 12/16-part cutaways of a generic actuator; this is a
  simplified 3-label action schematic specific to the 657. Not a
  cross-reference case, genuinely distinct content.
mediaStatus: unreviewed
```

### Maintenance — Actuator Assembly (printed pp. 24–26)

Five parts-catalog figures, one per size group — same basic exploded/cutaway
assembly, numbered callouts (keys) shown for that size group's own hardware
variant. Genuinely distinct drawings (checked directly, not assumed
identical because they're visually similar), not one figure reused five
times — each carries its own drawing number (40A8765-C, GE71419-A,
50A8768-C, GE71634-A, 50A8767-C) and size-specific callout differences (e.g.
size 87 has no travel indicator disk; sizes 70/70i/87 carry extra keys 32/33
not present on the smaller sizes).

```yaml
id: f657-cmp-assembly-size-30-60
teaches: >
  Fully labelled exploded/cutaway assembly of the Fisher 657 actuator,
  sizes 30 through 60 — 20 numbered callouts (upper/lower diaphragm casing,
  diaphragm, diaphragm plate, actuator spring, spring seat, spring adjuster,
  stem, stem connector, travel indicator disk, yoke, mounting hardware).
concept-tags: [657 actuator, assembly, exploded view, size 30-60, direct acting]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 6 'Fisher 657 Actuator Sizes 30 through 60,' p. 24 (drawing 40A8765-C) — 20-part numbered exploded view"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Companion to Figures 7-10 (same assembly, other size groups) — see each
  record's own notes for what genuinely differs. Note 1 on the source page:
  "key 25 is not part of size 40 constructions."
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-assembly-size-30i-60i
teaches: >
  Fully labelled exploded/cutaway assembly of the Fisher 657 actuator,
  sizes 30i through 60i (reverse-acting) — same 20-callout structure as the
  direct-acting size 30-60 figure, reverse-action construction.
concept-tags: [657 actuator, assembly, exploded view, size 30i-60i, reverse acting]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 7 'Fisher 657 Actuator Sizes 30i through 60i,' p. 24 (drawing GE71419-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Reverse-acting companion to `f657-cmp-assembly-size-30-60`. Source page
  notes parts 7, 24, and 249 not shown, and key 25 not part of size 40
  constructions.
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-assembly-size-70
teaches: >
  Fully labelled exploded/cutaway assembly of the Fisher 657 actuator, size
  70 (direct-acting) — 22 numbered callouts, adding keys 32/33 not present
  on the smaller size-30-60 assembly.
concept-tags: [657 actuator, assembly, exploded view, size 70, direct acting]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 8 'Fisher 657 Size 70 Actuator,' p. 25 (drawing 50A8768-C)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Direct-acting companion to Figure 9 (size 70i, reverse-acting).
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-assembly-size-70i
teaches: >
  Fully labelled exploded/cutaway assembly of the Fisher 657 actuator, size
  70i (reverse-acting) — same 22-callout structure as size 70, reverse
  action construction.
concept-tags: [657 actuator, assembly, exploded view, size 70i, reverse acting]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 9 'Fisher 657 Size 70i Actuator,' p. 25 (drawing GE71634-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Reverse-acting companion to `f657-cmp-assembly-size-70`. Source page notes
  parts 7, 24, and 249 not shown.
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-assembly-size-87
teaches: >
  Fully labelled exploded/cutaway assembly of the Fisher 657 actuator, size
  87 — the largest size, mounted with cap screws to the bonnet rather than a
  yoke locknut (keys 28/29 replace the smaller sizes' locknut hardware); no
  travel indicator disk on this size.
concept-tags: [657 actuator, assembly, exploded view, size 87]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 10 'Fisher 657 Size 87 Actuator,' p. 26 (drawing 50A8767-C)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Largest-size variant; genuinely different mounting hardware from the
  smaller sizes' yoke-locknut construction, not just a relabeled copy.
mediaStatus: unreviewed
```

### Maintenance — Top-Mounted Handwheel Assembly (printed p. 27)

```yaml
id: f657-cmp-top-handwheel-30-60
teaches: >
  Top-mounted manual-override handwheel assembly for size 30/30i through
  60/60i actuators — travel stop nut, sleeve, bearing flange stack-up above
  the actuator spring. Not designed for use under heavy load or frequent use.
concept-tags: [657 actuator, top-mounted handwheel, manual override, size 30-60]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 11 'Top-Mounted Handwheel Assembly for Size 30/30i through 60/60i Actuators,' p. 27 (drawing 28A1205-D)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Figure 12 (sizes 70/70i-87); same warning note on both.
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-top-handwheel-70-87
teaches: >
  Top-mounted manual-override handwheel assembly for sizes 70/70i through 87
  actuators — same function as the smaller-size assembly, additional keys
  (246, 169, 242) for the larger size group's own hardware.
concept-tags: [657 actuator, top-mounted handwheel, manual override, size 70-87]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 12 'Top-Mounted Handwheel Assembly for Sizes 70/70i through 87 Actuators,' p. 27 (drawing CV8010-G)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Larger-size companion to `f657-cmp-top-handwheel-30-60`.
mediaStatus: unreviewed
```

### Maintenance — Side-Mounted Handwheel Assembly (printed pp. 28–30)

Five parts-catalog figures, one per size group, same relationship as the
Actuator Assembly figures above — genuinely distinct drawings (own drawing
numbers, own key sets), not one figure repeated.

```yaml
id: f657-cmp-side-handwheel-34-40
teaches: >
  Side-mounted manual-override handwheel assembly for size 34 and 40
  actuators (direct-acting) — worm-gear/worm-shaft mechanism turning the
  handwheel's rotation into linear stem travel via a threaded lower sleeve.
concept-tags: [657 actuator, side-mounted handwheel, worm gear, manual override, size 34-40]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 13 'Side-Mounted Handwheel Assembly for Size 34 and 40 Actuators,' p. 28 (drawing 30A8778-D)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Figures 14-17 (other size groups); assembly procedure text (pp. 17-19) references this figure directly for callout numbers.
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-side-handwheel-34i-40i
teaches: >
  Side-mounted manual-override handwheel assembly for size 34i and 40i
  actuators (reverse-acting) — same worm-gear mechanism as the direct-acting
  34/40 assembly.
concept-tags: [657 actuator, side-mounted handwheel, worm gear, manual override, size 34i-40i]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 14 'Side-Mounted Handwheel Assembly for Size 34i and 40i Actuators,' p. 28 (drawing GE71635-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Reverse-acting companion to `f657-cmp-side-handwheel-34-40`.
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-side-handwheel-45-60
teaches: >
  Side-mounted manual-override handwheel assembly for size 45, 46, 50, and
  60 actuators (direct-acting) — same worm-gear mechanism, larger size
  group's own hardware.
concept-tags: [657 actuator, side-mounted handwheel, worm gear, manual override, size 45-60]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 15 'Side-Mounted Handwheel Assembly for Size 45, 46, 50, and 60 Actuators,' p. 29 (drawing 40A8779-D)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Figure 16 (same size group, reverse-acting).
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-side-handwheel-45i-60i
teaches: >
  Side-mounted manual-override handwheel assembly for size 45i, 46i, 50i,
  and 60i actuators (reverse-acting).
concept-tags: [657 actuator, side-mounted handwheel, worm gear, manual override, size 45i-60i]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 16 'Side-Mounted Handwheel Assembly for Size 45i, 46i, 50i, and 60i Actuators,' p. 29 (drawing GE71636-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Reverse-acting companion to `f657-cmp-side-handwheel-45-60`.
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-side-handwheel-70-87
teaches: >
  Side-mounted manual-override handwheel assembly for size 70 and 87
  actuators — includes a Section A-A cutaway view of the handwheel
  mechanism's internal worm/gear stack, the most detailed of the five
  side-handwheel figures.
concept-tags: [657 actuator, side-mounted handwheel, worm gear, manual override, size 70-87, section view]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 17 'Fisher 657 Size 70 and 87 Actuators with Side-Mounted Handwheel,' p. 30 (drawing 50A8769-D) — includes Section A-A cutaway"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Largest-size companion to the other four side-handwheel figures; the only
  one of the five that includes an internal section-view cutaway rather
  than an external exploded view alone.
mediaStatus: unreviewed
```

### Maintenance — Casing-Mounted Adjustable Travel Stops (printed pp. 31–32)

```yaml
id: f657-cmp-up-travel-stop-30-60
teaches: >
  Casing-mounted adjustable up travel stop (Style 1) for sizes 30/30i
  through 60/60i actuators — a threaded stem/nut assembly limiting the
  actuator's upward travel.
concept-tags: [657 actuator, travel stop, up travel, adjustable, size 30-60]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 18 'Casing-Mounted Adjustable Up Travel Stop for Sizes 30/30i through 60/60i Actuators (Style 1),' p. 31 (drawing 28A1206-C)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Figure 19 (larger sizes) and Figure 20 (down travel stop, different style/size group).
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-up-travel-stop-70-87
teaches: >
  Casing-mounted adjustable up travel stop (Style 1) for sizes 70/70i and 87
  actuators — same function as the smaller-size stop, includes a thrust
  bearing/race not present on the smaller assembly.
concept-tags: [657 actuator, travel stop, up travel, adjustable, size 70-87, thrust bearing]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 19 'Casing-Mounted Adjustable Up Travel Stop for Sizes 70/70i and 87 Actuators (Style 1),' p. 31 (drawing CV8057-E)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Larger-size companion to `f657-cmp-up-travel-stop-30-60`.
mediaStatus: unreviewed
```

```yaml
id: f657-cmp-down-travel-stop-30-40
teaches: >
  Casing-mounted adjustable down travel stop (Style 2) for size 30/30i and
  40/40i actuators only — a distinct construction (Style 2, not Style 1)
  from the up travel stops above; limits downward rather than upward travel.
concept-tags: [657 actuator, travel stop, down travel, adjustable, size 30-40]
status: current
source:
  - doc: Fisher 657 Diaphragm Actuator IM (D100306X012)
    locator: "Figure 20 'Casing-Mounted Adjustable Down Travel Stop for Size 30/30i and 40/40i Actuators (Style 2),' p. 32 (drawing BV8054-E)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Last figure in the document. Only covers size 30/30i and 40/40i — no
  equivalent down-travel-stop figure exists for the larger size groups in
  this manual (checked: nothing on pp. 31-32 covers a larger-size down
  travel stop; not an omission on this pass's part).
mediaStatus: unreviewed
```

## Open Items

- **Full coverage, this file's scope**: 17 figures catalogued (Figures 1, 2,
  6–20), confirmed against the complete figure list for the whole 32-page
  document (20 real figures total: 1–20, no gaps, no duplicate numbers).
  Figures 3, 4, 5 are out of this file's scope by design — already
  catalogued in `Subject-Matter Index — bench-set-657.md` under `bs657-cmp-*`
  ids; not duplicated here.
- **Pages 11–23 confirmed near-zero, not assumed.** A full-text sweep for
  `Figure N.` across this entire range found nothing, and three
  representative pages (12, 18, and the section transition at 23) were
  rendered and visually confirmed as pure numbered-step
  disassembly/reassembly procedure text plus Table 2 (Actuator Assembly
  Recommended Torque Values, p. 12) — a genuinely numbered table, correctly
  excluded per the standing figures-only rule. No figures skipped in this
  range.
- **Table exclusion**: Table 1 (Specifications, p. 2) and Table 2 (Torque
  Values, p. 12) are the document's only numbered tables — both excluded
  per the standing rule; neither carries its own figure number.
- **No duplicate figure numbers or source citation errors found** in this
  file's scope (unlike ch3/ch4's precedents) — every figure number 1–20 is
  unique and its own caption/content is internally consistent.
- **Cross-reference check against the rest of the library, confirmed
  clean**: checked Control Valve Handbook ch1 (actuator figures), ch3, and
  ch4 (accessories) for overlap — `f657-cmp-action-schematic`'s comparison
  against `cvh-cmp-direct-acting-actuator`/`cvh-cmp-reverse-acting-actuator`
  is the only genuinely close case, and it's confirmed distinct (see that
  record's own notes). `Subject-Matter Index — 14101 ch3.md` was also checked —
  its `ch3-cmp-*` records for this same document cite Figures 3/4/5 (already
  bench-set-657's territory) and general actuator-assembly content, but no
  `ch3-cmp-*` record traces to Figures 1, 2, or 6–20 specifically — no
  collision.
- **Low-confidence flags**: none. Every figure in this file's scope was
  visually confirmed with a clearly legible caption and page.
- **No archive or legacy material** was consulted — the current 657 IM is
  the sole and sufficient source for all 17 records here, matching
  `Subject-Matter Index — bench-set-657.md`'s own precedence finding for the
  same document.
- **Schema-drift check against `Subject-Matter Index — bench-set-657.md`,
  requested by this directive — reconciled, one honest note.** Checked
  `status` vocabulary (bench-set-657 uses `current`/`archive-corroborated`
  exclusively — matches this file and the standing vocabulary, no drift),
  `id` convention (descriptive slugs — matches), and `source`/`locator`
  format (matches). One real difference, not a drift to fix: bench-set-657
  predates the `mediaStatus` field entirely (built 2026-09-06) and, per the
  Process & Standards doc's own explicit rule, does NOT get the field
  backfilled retroactively — its records stay exactly as they are, silently
  `unreviewed` by the "missing key = unreviewed" convention. This file's
  records, written today, all carry `mediaStatus: unreviewed` explicitly.
  This is the correct, intentional difference between an old and a new
  record, not an inconsistency to reconcile.
