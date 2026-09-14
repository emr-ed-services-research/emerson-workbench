---
title: Component Index — Fisher 585C Series Piston Actuators
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
chapter: whole document — no chapter structure
updated: 2026-09-19
---

# Component Index — Fisher 585C Series Piston Actuators Instruction Manual

Standing full-chapter cataloging pass (document grain), part of the "index
all Technical Publications manuals" directive (Franz, 2026-09-19) —
deliberately ahead of any specific course's current citation. Matches the
rigor of every prior pass: every page rendered as an image and visually
inspected, not read from extracted text alone.

**Document boundary, confirmed directly:** 40 real pages (`pdfinfo`
confirmed), title page through the back-cover legal/address page (last
content, Figure 16, is on p. 38). No chapter numbering — house structure is
Introduction/Scope of Manual/Description/Specifications/Educational
Services, Principle of Operation, Installation, 585C Handwheels,
Maintenance (Sizes 25 and 50; Sizes 60-130, including Side-Mounted
Handwheel Maintenance and disassembly/reassembly), Parts Ordering, Parts
Kits, Parts List. Note: the 585CLS long-stroke actuator is explicitly
out of scope of this manual (covered in a separate IM, D103793X012 — see
the resolved note below for its current, indexed status).

All figures are numbered flatly (Figure 1 through Figure 16), no chapter
prefix.

**Resolved, 2026-09-21 — the 585/585CR/double-acting configuration
question, confirmed directly against this manual's real content, not
assumed from its title.** This one document covers all three real
configurations of the base 585 piston actuator, closing the loop so a
future reader doesn't have to re-derive it:

- **Direct-acting (585C)** — the manual's main narrative throughout
  (Principle of Operation, Installation, Maintenance).
- **Reverse-acting (585CR)** — genuinely, separately documented, not just
  mentioned: its own dedicated **Figure 7** ("Fisher 585CR Size 25 and 50
  Actuators, spring extends actuator rod"), **Figure 8** (the matching
  handwheel assembly), and **Tables 6 and 7** (585CR-specific thrust
  capabilities, U.S. and metric units).
- **Double-acting (springless)** — real, but easy to miss on a plain text
  search: the Description states plainly "The 585C actuator uses a
  double-acting cylinder," with the spring only added on top for sizes
  25/50's fail-safe action — springless (double-acting) construction is
  explicitly the **only** option for sizes 60–130, has its own **Table 8**
  ("Fisher 585C Thrust, springless construction"), and the entire
  "Sizes 60–130" content thread running through Installation/Maintenance
  applies to it. **One real, minor asymmetry, not a gap:** unlike 585CR,
  the springless/double-acting configuration has no dedicated construction
  *figure* of its own — it shares Figure 1's general product photo rather
  than an illustrated assembly view.

No new manual is needed for 585, 585CR, or double-acting — this document's
real scope already covers all three.

**585CLS note corrected, 2026-09-21**: the long-stroke variant, named
below as out of this manual's scope, is **no longer unheld** — Franz
acquired it and it's now indexed at
`Component Index — Fisher 585CLS Long Stroke Piston Actuator.md`, checked
directly against this manual's own drawing numbers (zero overlap,
genuinely distinct hardware).

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher 585C Series Piston Actuators IM** | D102087X012 · November 2022 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted. |

## Components

### Introduction (printed p. 1)

```yaml
id: f585c-cmp-actuator-with-fieldvue
teaches: >
  A complete Fisher 585C Series piston actuator with a FIELDVUE positioner
  mounted — the manual's cover figure.
concept-tags: [585C, piston actuator, FIELDVUE positioner, production photo]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 1 'Fisher 585C Series Piston Actuator,' p. 1 (photo X0175-2)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Topically adjacent to `ogas-cmp-585c-spring-bias-piston-cutaway` (Oil &
  Gas Sourcebook ch2) — checked directly; that record is a labelled
  spring-bias cutaway, this is an unlabelled production photo. Genuinely
  distinct, not cross-referenced as a duplicate.
mediaStatus: unreviewed
```

### Principle of Operation (printed p. 9)

```yaml
id: f585c-cmp-actuator-with-handwheel-cutaway
teaches: >
  585C piston actuator with handwheel, full cutaway — the actuator's
  operating principle with manual override installed.
concept-tags: [585C, piston actuator, handwheel, cutaway, principle of operation]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 2 'Fisher 585C Piston Actuator with Handwheel,' p. 9 (drawing E0410)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Paired on the same page with Figure 3 (spring return variant); shown alongside Table 9 (Handwheel Specifications), which stays correctly excluded as a numbered table.
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-actuator-spring-return-cutaway
teaches: >
  585C piston actuator with spring return, full cutaway, piston O-ring
  called out — the spring-fail-safe operating principle.
concept-tags: [585C, piston actuator, spring return, piston O-ring, cutaway]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 3 'Fisher 585C Piston Actuator with Spring Return,' p. 9 (drawing W7447-1)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing from Figure 2 — spring-return construction, not handwheel.
mediaStatus: unreviewed
```

### Maintenance — Sizes 60-130, Handwheel Disassembly (printed p. 22)

```yaml
id: f585c-cmp-handwheel-bushing-directional-install
teaches: >
  Handwheel directional bushing design and installation for size 60 and 68
  actuators — a labelled cutaway of the correct orientation plus two real
  photos contrasting correct (no gap) vs. incorrect (with gap) bushing
  installation.
concept-tags: [585C, handwheel, directional bushing, size 60, size 68, correct vs incorrect installation]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 4 'Fisher 585C Size 60 and 68 Handwheel Directional Bushing Design and Installation,' p. 22"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Combines a labelled line drawing with two contrasting real photos in one figure — a genuine correct/incorrect comparison, not a duplicate pair.
mediaStatus: unreviewed
```

### Parts List — Sizes 25 and 50 (printed pp. 27–31)

```yaml
id: f585c-cmp-actuator-size25-50-retract
teaches: >
  Fisher 585C size 25 and 50 actuators, full parts cutaway (spring retracts
  actuator rod) — numbered key callouts, includes a detail view of the
  size-50 seal arrangement.
concept-tags: [585C, parts diagram, actuator assembly, size 25, size 50, spring retracts]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 5 'Fisher 585C Size 25 and 50 Actuators (spring retracts actuator rod),' p. 27 (drawing 4486335-C)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: First of the size/configuration-variant parts diagrams (Figures 5-15), each a genuinely distinct drawing.
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-handwheel-assembly-size25-50-retract
teaches: >
  Handwheel assembly for Fisher 585C size 25 and 50 actuators (spring
  retracts actuator rod), full parts cutaway.
concept-tags: [585C, handwheel assembly, size 25, size 50, spring retracts]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 6 'Fisher 585C Size 25 and 50 Actuators Handwheel Assembly (spring retracts actuator rod),' p. 28 (drawing 44B6330-B)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing from Figure 5 — handwheel-equipped variant.
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-actuator-size25-50-extend
teaches: >
  Fisher 585CR size 25 and 50 actuators, full parts cutaway (spring extends
  actuator rod) — the reverse-action companion to Figure 5.
concept-tags: [585CR, parts diagram, actuator assembly, size 25, size 50, spring extends]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 7 'Fisher 585CR Size 25 and 50 Actuators (spring extends actuator rod),' p. 29 (drawing 4486319-D)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing number from Figure 5 (585CR reverse-action variant), confirmed by direct comparison.
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-handwheel-assembly-size25-50-extend
teaches: >
  Handwheel assembly for Fisher 585CR size 25 and 50 actuators (spring
  extends actuator rod), full parts cutaway.
concept-tags: [585CR, handwheel assembly, size 25, size 50, spring extends]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 8 'Fisher 585CR Size 25 and 50 Actuators Handwheel Assembly (spring extends actuator rod),' p. 30 (drawing 44B6337-C)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing from Figure 6 — reverse-action companion.
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-handwheel-assembly-size25-50-direct-push
teaches: >
  Handwheel assembly for Fisher 585C size 25 and 50 actuators, direct
  acting/push-only configuration (spring retracts actuator rod) — a third
  handwheel-assembly variant distinct from Figures 6 and 8.
concept-tags: [585C, handwheel assembly, direct acting, push only, size 25, size 50]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 9 'Fisher 585C Size 25 and 50 Actuators Handwheel Assembly—Direct Acting, Push Only (spring retracts actuator rod),' p. 31 (drawing 3488587-B)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing — push-only configuration, no bypass valve assembly shown.
mediaStatus: unreviewed
```

### Parts List — Sizes 60-130 (printed pp. 33–38)

```yaml
id: f585c-cmp-actuator-handjack-size68-2-4in
teaches: >
  Fisher 585C actuator with integral handjack, size 68, 2- and 4-inch
  travel — full parts cutaway.
concept-tags: [585C, integral handjack, size 68, parts diagram]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 10 'Fisher 585C Actuator with Integral Handjack Size 68 with 2- and 4-Inch Travel,' p. 33 (drawing GH17769_A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: References Figure 16 for the bypass assembly, not catalogued separately here (see that record below).
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-actuator-handjack-size60-8in
teaches: >
  Fisher 585C actuator with integral handjack, size 60, 8-inch travel —
  full parts cutaway.
concept-tags: [585C, integral handjack, size 60, parts diagram]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 11 'Fisher 585C Actuator with Integral Handjack Size 60 with 8-Inch Travel,' p. 34 (drawing GH17700)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing from Figure 10.
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-actuator-handjack-size80-100-4in
teaches: >
  Fisher 585C actuator with integral handjack, sizes 80 and 100, 4-inch
  travel — full parts cutaway plus a Section A-A detail of the handjack
  gear mechanism.
concept-tags: [585C, integral handjack, size 80, size 100, parts diagram, section view]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 12 'Fisher 585C Actuator with Integral Handjack Size 80 and 100 with 4-Inch Travel,' p. 35 (drawing 58B1373-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing, includes a bevel-gear section view not present on Figures 10/11.
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-actuator-handjack-size130-4in
teaches: >
  Fisher 585C actuator with integral handjack, size 130, 4-inch travel —
  full parts cutaway plus Section A-A handjack gear detail.
concept-tags: [585C, integral handjack, size 130, parts diagram, section view]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 13 'Fisher 585C Actuator with Integral Handjack Size 130 with 4-Inch Travel,' p. 36 (drawings 58B1375-1, 58B1378-2)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing, largest actuator size in the manual.
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-actuator-size60-2-4in
teaches: >
  Fisher 585C actuator, size 60, 2- and 4-inch travel — full parts cutaway
  (no integral handjack).
concept-tags: [585C, actuator, size 60, parts diagram]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 14 'Fisher 585C Actuator Size 60 with 2- and 4-Inch Travel,' p. 37 (drawing 58B1365-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing from the handjack-equipped size-60 variant (Figure 11) — this is the plain (non-handjack) construction.
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-actuator-size60-8in-size68-multi
teaches: >
  Fisher 585C actuator, size 60 with 8-inch travel, and size 68 with 2-,
  4-, and 8-inch travel — full parts cutaway (no integral handjack).
concept-tags: [585C, actuator, size 60, size 68, parts diagram]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 15 'Fisher 585C Actuator Size 60 with 8-Inch Travel and Size 68 with 2-, 4-, and 8-Inch Travel,' p. 38 (drawing 58B1366-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Distinct drawing from the handjack-equipped variants (Figures 10/11).
mediaStatus: unreviewed
```

```yaml
id: f585c-cmp-bypass-assembly-size60-130
teaches: >
  Fisher 585C size 60-130 bypass assembly — the small valve/tubing
  assembly referenced by Figures 10-15 as "see Figure 16 for bypass
  assembly," shown here on its own.
concept-tags: [585C, bypass assembly, size 60-130]
status: current
source:
  - doc: Fisher 585C Series Piston Actuators IM (D102087X012, November 2022)
    locator: "Figure 16 'Fisher 585C Size 60-130 Bypass Assembly,' p. 38 (drawing 38B1397/A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Last figure in the manual; genuinely distinct sub-assembly, not shown in full on Figures 10-15.
mediaStatus: unreviewed
```

## Open Items

- **Document boundary confirmed directly**: 40 pages total (`pdfinfo`), page 1 the title/Contents page, last real content (Figure 16) on p. 38, pp. 39-40 legal/address back matter — no chapter divider pages exist (no chapter structure).
- **Full coverage: all 16 figures (Figure 1 through Figure 16) catalogued, no gaps.** Every figure located via a `pdftotext` sweep for `Figure N.` across every page, then visually confirmed against its rendered page (150dpi).
- **No duplicate printed figure numbers found.**
- **No source citation errors found.**
- **Table exclusion**: "Table 9. Fisher 585C Handwheel Specifications" (p. 9, alongside Figures 2/3) is a genuine numbered data table, correctly excluded per the standing figures-only rule.
- **Cross-reference check, done against the whole library.** Checked `Component Index — Control Valve Handbook ch1.md`/`ch3.md`, `Component Index — Oil & Gas Sourcebook ch2.md` (real hit: `ogas-cmp-585c-spring-bias-piston-cutaway`), `Component Index — 14101 ch1-ch2.md`, `Component Index — 14101 ch3.md`, and `Component Index — bench-set-657.md`. One real topical overlap found (585C actuator, Oil & Gas Sourcebook's own labelled cutaway) — confirmed to be a genuinely different drawing (labelled cutaway vs. this manual's unlabelled cover photo), cross-referenced in notes, not merged.
- **No low-confidence flags** — every figure's caption, page, and content confirmed directly against the rendered page.
- **No archive or legacy material** consulted — the current-edition IM is the sole and sufficient source for all 16 figures.
- **`mediaStatus: unreviewed`** applied to every record, per the standing rule.
