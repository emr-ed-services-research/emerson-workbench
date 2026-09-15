---
title: Component Index — Pulp & Paper Sourcebook ch14
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch14 — Bleaching and Brightening
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 14

**Chapter 14 — "Bleaching and Brightening."** Standing full-chapter
cataloguing pass, one of four chapters (11-14) assigned in a topically-disjoint
parallel split of this Sourcebook (other agents covering chapters 1-3, 4-7,
8-10B, 15-18). Every real page in the chapter's confirmed range was rendered
and read directly (rigor standard), every real figure identified and visually
verified against the rendered page — not paraphrased from caption or
text-extraction alone. This chapter carries the densest figure set of the
four assigned (7 real figures across 8 pages), several of them missed by a
raw text-extraction sweep (Figures 14-2 and 14-3 in particular, whose captions
sit inside a shaded photographic drawing block rather than plain body text).

Chapter boundaries were pre-confirmed by the coordinating pass via direct
divider-page rendering (PDF page 177 = "Chapter 14 / Bleaching and
Brightening" divider; PDF page 185 = the Chapter 15 divider, out of this
pass's scope) and re-verified directly in this pass by rendering and reading
pp. 177-184 in full: PDF p. 177 = printed p. 14-1 (chapter opening), PDF p.
184 = printed p. 14-8 (chapter's last content page, ending with Figure 14-7).
Zero page offset throughout (PDF page = printed page number + 163). Chapter
14 = PDF pp. 177-184.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter's control-valve-application content and layout diagrams (Figures 14-5–14-7). Four of the chapter's seven figures (14-1–14-4) are process-flow drawings licensed from **TAPPI's "Making Pulp and Paper Series," used with permission** — a third-party illustration reprinted with permission inside a first-party current document, not archive or superseded material; catalogued as `current` per the assignment's guidance, with the TAPPI attribution flagged in each affected record's own `notes`. |

## Components

### Chapter 14 — The Bleaching Process, TAPPI process diagrams (printed pp. 14-1–14-4)

```yaml
id: pp-cmp-oxygen-delignification-diagram
kind: figure
teaches: >
  The oxygen delignification process train positioned between pulping and
  bleaching: digester → blow tank → pressure screens → brown stock washing
  → primary oxygen reactor → washing presses → secondary oxygen reactor →
  washing presses → high consistency storage chest, removing up to half of
  the remaining lignin under oxygen/NaOH at medium-to-high pulp consistency
  before the pulp ever reaches the conventional bleaching sequence, reducing
  both the cost of downstream bleaching and the load on effluent treatment.
concept-tags: [oxygen delignification, brown stock washing, primary oxygen reactor, secondary oxygen reactor, medium consistency, high consistency storage chest, bleaching]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 14-1 'Oxygen Delignification Diagram,' p. 14-1 (PDF p. 177)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." — a third-party process illustration
  licensed into this first-party Fisher document; catalogued `status:
  current` per the assignment's explicit guidance (first-party document
  precedence, TAPPI attribution noted here rather than changing the
  precedence bucket). No control valves are labeled on this particular
  diagram (unlike Figures 12-1/13-1); it is purely a process-flow teaching
  diagram. Body text cites it in-line as "figure 14-1" (p. 14-1 and again p.
  14-3, fiberline discussion), matching the informal lowercase in-text
  citation style already documented for Chapters 11-13.
```

```yaml
id: pp-cmp-conventional-bleaching-process
kind: figure
teaches: >
  A conventional 5-stage bleaching sequence rendered as a photograph-style
  process illustration: D (chlorine dioxide) → Eop (alkaline extraction with
  oxygen/peroxide reinforcement) → D → E (alkaline extraction) → D, each
  stage shown as a chemical/extraction tower pair with its own washer —
  the physical embodiment of the DEOPDED-style alternating acidic/alkaline
  sequence the body text describes, and the direct visual referent for why
  chlorine dioxide stages are "always interspersed with alkaline extraction
  stages."
concept-tags: [conventional bleaching, chlorine dioxide stage, alkaline extraction stage, DEOPDED sequence, chemical tower, extraction tower, washer]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 14-2 'Conventional Bleaching Process,' p. 14-2 (PDF p. 179)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." — same third-party-licensed-into-
  first-party-document situation as Figure 14-1; catalogued `status: current`
  on the same basis. **Missed by the raw `pdftotext` sweep** used to build the
  assignment's candidate figure list — its caption sits directly beneath a
  shaded photographic-style illustration block rather than in a plain text
  column, which the extraction pass's column-wrap handling appears to have
  dropped; confirmed real and present only by rendering and visually reading
  p. 14-2 (PDF p. 179) directly. Body text cites it in-line as "figure 14-2"
  (p. 14-2, twice) and again on p. 14-3 (brightness discussion).
```

```yaml
id: pp-cmp-chlorine-dioxide-filtrate-flow
kind: figure
teaches: >
  The counter-current filtrate flow specific to the chlorine dioxide (D)
  stages of the bleaching sequence: filtrate from the final D-stage washer
  is used as shower water on the third D-stage washer, whose own filtrate is
  then used on the first D-stage washer, with acidic filtrate ultimately
  diluting the pulp effluent treatment stream — the same 5-stage tower
  layout as Figure 14-2, with arrows added to show this specific
  water-conservation flow path.
concept-tags: [chlorine dioxide, filtrate flow, counter-current flow, shower water, effluent treatment, bleaching, water conservation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 14-3 'Chlorine Dioxide (ClO2) Filtrate Flow,' p. 14-3 (PDF p. 180)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." — same third-party-licensed-into-
  first-party-document situation as Figures 14-1/14-2. **Missed by the raw
  `pdftotext` sweep**, for the same reason as Figure 14-2 (caption embedded
  beside a shaded illustration block); confirmed real and present only by
  rendering and visually reading p. 14-3 (PDF p. 180) directly. Visually near-
  identical base layout to Figure 14-2 (same 5-tower D-Eop-D-E-D sequence)
  with flow-direction arrows overlaid to illustrate this specific filtrate
  path — a real, distinct figure, not a duplicate of 14-2, since the arrows
  and teaching point (filtrate reuse, not the bleaching stages themselves)
  differ. Body text cites it in-line as "figure 14-3" (p. 14-3).
```

```yaml
id: pp-cmp-alkaline-filtrate-flow
kind: figure
teaches: >
  The counter-current filtrate flow specific to the alkaline extraction (E,
  Eop) stages: filtrate from the second extraction stage is used as shower
  water on the first extraction stage, and the first extraction stage's own
  filtrate goes to effluent treatment — the alkaline-side counterpart to
  Figure 14-3's chlorine-dioxide-side filtrate routing, and the reason the
  body text notes this effluent stream is brown (lignin-bearing) rather than
  the D-stages' yellowish acidic stream.
concept-tags: [alkaline extraction, filtrate flow, counter-current flow, shower water, effluent treatment, bleaching, lignin]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 14-4 'Alkaline Filtrate Flow,' p. 14-3 (PDF p. 180)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." — same third-party-licensed-into-
  first-party-document situation as Figures 14-1–14-3. Printed directly below
  Figure 14-3 on the same page (PDF p. 180); same base 5-tower layout with a
  different flow path overlaid (alkaline-stage filtrate routing rather than
  D-stage). A real, distinct figure per the same reasoning as 14-3 vs. 14-2 —
  not a duplicate. Body text cites it in-line as "figure 14-4" (p. 14-2,
  filtrate-flow discussion).
```

### Chapter 14 — Typical Valve Layouts by Bleaching Stage (printed pp. 14-6–14-8)

```yaml
id: pp-cmp-alkaline-extraction-hypochlorite-peroxide-ozone-stages
kind: figure
teaches: >
  A typical valve layout for the alkaline extraction (E), hypochlorite (H),
  peroxide (P), and ozone (Z) bleaching stages: pump → medium-consistency
  (MC) control valve (#1) → bleaching agent valve (#4) → pulp/chemical mixer
  (#2) → upflow reaction tower → washer/pump loop (#3, #5) → product tank
  with a filtrate valve (#7) — the physical valve arrangement corresponding
  to the "E"/"Eop" stage boxes abstracted in Figures 14-2–14-4, and the
  companion diagram to Figure 14-6's chlorine dioxide layout and Figure
  14-7's oxygen-stage layout (all three share the same numbered-valve
  legend convention).
concept-tags: [alkaline extraction, hypochlorite, peroxide, ozone, medium consistency control, bleaching agent valve, valve layout, Vee-Ball, high pressure butterfly valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 14-5 'Alkaline Extraction (E), Hypochlorite (H), Peroxide (P) and Ozone (Z) Stages,' p. 14-7 (PDF p. 182)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing number E1381 printed at lower left of the diagram. Numbered valves
  (#1–#7) correspond directly to the unnumbered "Alkaline Extraction (E),
  Hypochlorite (H), Peroxide (P) and Ozone (Z) Stages" valve-tag table
  printed immediately above it on the same page (p. 14-7) — that table is
  excluded here as a table (see Open Items), while this numbered-valve
  process diagram is the genuine captioned figure. First of three
  near-identical per-stage layout diagrams in this chapter (companions:
  `pp-cmp-chlorine-dioxide-d-stage` Figure 14-6, `pp-cmp-oxygen-o-stage`
  Figure 14-7) — catalogued as three separate records, not bundled, because
  each illustrates a distinct bleaching-stage's own valve count and process
  path (7 valves here vs. 8 for Figure 14-6 vs. 9 for Figure 14-7), matching
  the standing "separate when the source treats them as distinct, separately
  headed things" convention rather than the "bundle one continuous legend"
  convention.
```

```yaml
id: pp-cmp-chlorine-dioxide-d-stage
kind: figure
teaches: >
  A typical valve layout for the chlorine dioxide (D) bleaching stage:
  pump → MC control valve (#1) → bleaching agent valve (#4) → pulp/chemical
  mixer (#2) → upflow reaction tower → washer/pump loop (#3, #5) → product
  tank with two filtrate valves (#7, #8) — one additional filtrate valve
  versus the alkaline-stage layout (Figure 14-5), reflecting the D-stage's
  own two-filtrate-flow routing already shown schematically in Figure 14-3.
concept-tags: [chlorine dioxide stage, medium consistency control, bleaching agent valve, valve layout, Vee-Ball, high pressure butterfly valve, filtrate valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 14-6 'Chlorine Dioxide (D) Stage,' p. 14-7 (PDF p. 182)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing number E1382 printed at lower left of the diagram. Numbered valves
  (#1–#8) correspond directly to the unnumbered "Chlorine Dioxide (D) Stage"
  valve-tag table printed at the top of the same page (p. 14-6/PDF p. 182,
  above Figure 14-5's own table) — that table is excluded here as a table
  (see Open Items). Second of the three per-stage layout diagrams (see
  `pp-cmp-alkaline-extraction-hypochlorite-peroxide-ozone-stages` for the
  bundling-vs-separate reasoning shared across all three).
```

```yaml
id: pp-cmp-oxygen-o-stage
kind: figure
teaches: >
  A typical valve layout for the oxygen (O) bleaching stage: pump → MC
  control valve (#1) → bleaching agent valve (#2) → pulp/chemical mixer (#3)
  → upflow reaction tower → a second pump/control-valve/tower pass (#4, #5,
  #6) → washer with filtrate/discharge valves (#7, #8, #9) — the most
  elaborate of the three per-stage layouts (9 valves, two full tower passes),
  reflecting the oxygen stage's own two-reactor design already shown in
  Figure 14-1's Oxygen Delignification Diagram.
concept-tags: [oxygen stage, medium consistency control, bleaching agent valve, valve layout, Vee-Ball, high pressure butterfly valve, discharge tank valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 14-7 'Oxygen (O) Stage,' p. 14-8 (PDF p. 183)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing number E1383 printed at lower left of the diagram. Numbered valves
  (#1–#9) correspond directly to the unnumbered "Oxygen (O) Stage" valve-tag
  table printed at the top of the same page (p. 14-7/PDF p. 183) — that table
  is excluded here as a table (see Open Items). Last of the three per-stage
  layout diagrams (see
  `pp-cmp-alkaline-extraction-hypochlorite-peroxide-ozone-stages` for the
  bundling-vs-separate reasoning shared across all three). This is also the
  chapter's and this pass's own final content page (PDF p. 184/printed 14-8
  is the page-number footer only, confirmed genuinely blank beyond it).
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from the
  coordinating pass's candidate range. Rendered and read PDF pp. 177-184 in
  full: p. 177 = printed 14-1 (Chapter 14 opening, "Bleaching and
  Brightening"), p. 184 = printed 14-8 (chapter's last content page, Figure
  14-7). PDF page 185 confirmed as the Chapter 15 divider (out of this pass's
  scope, per the assignment). Zero page offset (PDF = printed + 163)
  throughout.
- **Full chapter coverage — all 7 figures found, closing a real gap in the
  assignment's candidate list.** The candidate list supplied for this
  assignment named only Figures 14-1, 14-4, 14-5, 14-6, 14-7 and flagged
  14-2/14-3 as a likely gap from text-extraction miss. Direct rendering of
  every page confirmed the gap was real: **Figures 14-2 and 14-3 both
  exist**, both real, both correctly catalogued above. Full numeric sequence
  14-1 through 14-7 is now complete with no gaps — 7 figures total, every one
  visually confirmed against its rendered page, none skipped. The
  text-extraction miss traces to both figures' captions sitting directly
  beside/beneath a shaded photographic-style illustration block rather than
  in a plain text column — `pdftotext -layout` appears to drop text
  positioned this way; a reminder that the candidate list is a starting
  point, never a ceiling, exactly as the rigor standard warns.
- **No low-confidence flags** beyond the text-extraction-miss note already
  covered above (which is a coverage finding, not a confidence caveat on the
  figures themselves — both 14-2 and 14-3 were confirmed with full
  confidence once rendered).
- **No duplicate printed figure numbers or source-citation errors found** in
  this chapter. All seven figure numbers appear exactly once each, and
  body-text citations ("figure 14-1" through "figure 14-4," referenced
  in-line multiple times) consistently match their captioned targets. Note:
  Figures 14-2, 14-3, and 14-4 share a very similar base 5-tower illustration
  layout with only the overlaid flow arrows differing — confirmed as three
  genuinely distinct figures (not a duplicate-caption situation) since each
  has its own caption, its own figure number, and its own distinct teaching
  point (the bleaching sequence itself vs. two different filtrate-routing
  paths).
- **Table exclusion confirmed.** Three unnumbered valve-tag reference tables
  in this chapter — "Chlorine Dioxide (D) Stage" (p. 14-6), "Alkaline
  Extraction (E), Hypochlorite (H), Peroxide (P) and Ozone (Z) Stages" (p.
  14-6), and "Oxygen (O) Stage" (p. 14-7) — each listing numbered Valve
  Tag #, Application Description, Control Function, and Fisher product-line
  columns (Vee-Ball, HPBV, V150E) keyed to the numbered valves shown on
  Figures 14-5/14-6/14-7 respectively. Excluded per the standing
  valve-application/valve-tag reference-table rule — no "Figure" or "Table"
  caption/number appears anywhere on any of the three tables, and their
  content is purely tabular, not a diagram.
- **Cross-reference findings.** Checked the whole-library collision sweep
  (below) and grepped `20 - Source Library/Component Index — Oil & Gas
  Sourcebook ch*.md`, `... Control Valve Handbook ch*.md`, and every
  standalone product-manual index for product names appearing in this
  chapter's valve-selection tables and body text (Vee-Ball, V150/V150E,
  V300, 8580, FIELDVUE DVC6200). All matches found are generic product
  mentions in other, unrelated chapters/manuals' own valve-selection tables,
  product cutaways, or FIELDVUE-family positioner records — none reference
  bleaching, brightening, oxygen delignification, or chlorine dioxide process
  content. Separately grepped the whole library for "bleaching," "bright,"
  "delignif," "chlorine dioxide," "TAPPI," "fiberline," and related terms: no
  genuine hits outside this chapter's own file. **No real overlap found** —
  confirmed by reading matched context, not assumed from the keyword hit
  alone. This is also the only chapter in this pass whose figures are
  partly third-party-licensed (TAPPI) rather than wholly Fisher-authored;
  flagged per-record above rather than treated as an archive/legacy question,
  since the license is into a current first-party document, not a
  superseded source.
- **Archive/legacy material:** none consulted, none needed — the 2011 Fisher
  Sourcebook (including its TAPPI-licensed illustrations, used with
  permission) is the sole and sufficient source for all seven of this
  chapter's components.
