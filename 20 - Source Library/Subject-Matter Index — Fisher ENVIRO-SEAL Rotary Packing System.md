---
title: Subject-Matter Index — Fisher ENVIRO-SEAL Rotary Packing System
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Enhanced ENVIRO-SEAL Packing Systems for Fisher Rotary Valves IM (D101643X012, February 2024)
updated: 2026-09-20
---

# Subject-Matter Index — Fisher ENVIRO-SEAL Packing Systems for Rotary Valves

**Newly added to the Source Library (Franz, 2026-09-20)** — previously
referenced by name from three already-catalogued manuals (8580, Vee-Ball,
V500) as an external document "not held" in this vault; now held and
indexed under this directive. Document-grain, whole-manual scope, matching
the convention `Subject-Matter Index — Process & Standards.md` sets for
Technical Publications manuals with no chapter structure. Named-section
grouping headers, per the same doc. Every figure visually verified against
the rendered page — 150dpi, all 20 pages — not read from text extraction
alone.

Real page range: the whole document, PDF/printed pages 1–20 (zero offset,
confirmed directly — page 1 is the title page with the manual's own Figure
1, page 20 is the back-cover legal page).

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Enhanced ENVIRO-SEAL Packing Systems for Fisher Rotary Valves IM** | D101643X012 · February 2024 | `current` | First-party Emerson/Fisher document; sole source for this file's records. |

## Cross-reference check — done before minting, real overlaps found and handled

Checked against the three manuals that already reference this document by
name, and against the already-indexed ENVIRO-SEAL (sliding-stem) and
Oil & Gas Sourcebook packing content, before writing any record below:

- **Fisher 8580 Rotary Valve** and **Fisher V500 Rotary Globe Valve**: this
  manual's Figures 3 and 5 are explicitly captioned "for Fisher A11, 8532,
  **8580**, 8590, and Control-Disk Valves" — the 8580 manual is named
  directly. Checked both 8580's and V500's own packing figures for the
  same drawing numbers as this file's Figures 2–5 (42B8445-C, 14B0095-A,
  14B0086-A, 3289116-B) — no match; 8580 and V500's own in-manual packing
  figures (`fv500-cmp-enviro-seal-rotary-packing`, drawing numbers distinct
  from these) are genuinely different drawings, not the same source image
  reused. Real topical overlap, not a figure duplicate — cross-referenced
  by id in the relevant records' `notes` below, not merged.
- **Fisher Vee-Ball Rotary Valves**: this manual's Figures 2 and 4 are
  explicitly captioned "for Fisher Vee-Ball, Eccentric Plug, and 8560
  Valves" — Vee-Ball named directly. Same check as above: no shared
  drawing number with Vee-Ball's own packing content — genuinely different
  drawings.
- **Fisher ENVIRO-SEAL Packing System (sliding-stem)**
  (`Subject-Matter Index — Fisher ENVIRO-SEAL Packing System.md`): checked for
  the shared "20/20 rule" packing-bore-condition guidance and Belleville
  spring content both manuals carry. The bore-condition text (this
  manual's "Other Considerations," p. 11) is prose with no accompanying
  figure in either manual — neither file catalogues it as its own
  component (the schema anchors records to real figures, not free-standing
  procedure text, outside the bench-set-657 topic-driven trial's own
  different mandate) — nothing to cross-reference. The Belleville
  spring-stacking figures (this manual's Figure 6; the sliding-stem
  manual's own stacking figure) use different drawing numbers and different
  ring counts (rotary: 5/6/7/9/10 springs by shaft size; sliding-stem: 7 for
  PTFE/duplex, 9 for graphite ULF) — genuinely different figures for the
  two different packing-box geometries, not the same content.
- **`Subject-Matter Index — Oil & Gas Sourcebook ch1.md`'s
  `ogas-cmp-enviroseal-rotary-packing-arrangements`** (drawing numbers
  W5806-1/IL and W6125-1/IL): checked directly against this manual's own
  Figures 2–5 (drawing numbers 42B8445-C, 14B0095-A, 14B0086-A, 3289116-B)
  — no match. The Oil & Gas Sourcebook figure is a different, older/simpler
  pair of cutaways (single PTFE panel + single graphite panel), not the
  same source drawing as this manual's more detailed, multi-panel,
  per-valve-line figures. Cross-referenced by id in the relevant records'
  `notes`, not merged — genuinely complementary content, not duplicate.

**Downstream housekeeping**: the three manuals' own "not held" notes
(`Subject-Matter Index — Fisher 8580 Rotary Valve.md`,
`Subject-Matter Index — Fisher Vee-Ball Rotary Valves.md`,
`Subject-Matter Index — Fisher V500 Rotary Globe Valve.md`) described
D101643X012 as unavailable — now stale, since the document is held and
indexed as of this pass. Updated in place (see those files' own Open Items)
rather than left to drift.

## Components

### Introduction (printed p. 1)

```yaml
id: fenvirorot-cmp-typical-systems-photo
teaches: >
  Two real installed-assembly photos of enhanced ENVIRO-SEAL rotary packing
  systems, mounted between a valve body flange and an actuator mounting
  bracket — the manual's own overview image establishing what the hardware
  looks like assembled before the document breaks into per-valve-line
  installation figures.
concept-tags: [ENVIRO-SEAL, rotary packing, overview photo, live-loaded packing]
status: current
source:
  - doc: Enhanced ENVIRO-SEAL Packing Systems for Fisher Rotary Valves IM (D101643X012)
    locator: "Figure 1 'Typical Enhanced ENVIRO-SEAL Packing Systems,' p. 1 — two photos (drawings W5882-1, W9058-1)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photos, unlabelled — a section-opening overview image, same
  role Figure 1 plays in several other Technical Publications manuals in
  this batch (e.g. the 657 IM's own Figure 1).
mediaStatus: unreviewed
```

### Installation — Installing an ENVIRO-SEAL Packing System (printed pp. 5–11)

```yaml
id: fenvirorot-cmp-ptfe-arrangements-veeball-eccplug-8560
teaches: >
  Five real PTFE packing-arrangement panels for Fisher Vee-Ball, Eccentric
  Plug, and 8560 valves: single PTFE standard-depth box, single PTFE
  optional-deep box (V500), double PTFE with leakoff (V500/CV500), single
  PTFE outboard standard-depth box (8510B), and the stacking order of the
  PTFE packing rings — fully labelled numbered-key callouts on each panel.
concept-tags: [ENVIRO-SEAL, rotary packing, PTFE packing, Vee-Ball, eccentric plug, 8560, V500, 8510B, leakoff]
status: current
source:
  - doc: Enhanced ENVIRO-SEAL Packing Systems for Fisher Rotary Valves IM (D101643X012)
    locator: "Figure 2 'Typical Enhanced ENVIRO-SEAL Rotary Packing Arrangements with PTFE Packing for Fisher Vee-Ball, Eccentric Plug, and 8560 Valves,' p. 5 — 5-panel composite (drawings 42B8445-C, 14B0095-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Names both the Vee-Ball and V500 (eccentric plug) product lines already
  catalogued in this library — checked `Subject-Matter Index — Fisher Vee-Ball
  Rotary Valves.md` and `Subject-Matter Index — Fisher V500 Rotary Globe
  Valve.md` for the same drawing numbers (42B8445-C, 14B0095-A); no match,
  genuinely different figures from each manual's own packing content.
  Cross-referenced here for topical continuity, not merged.
mediaStatus: unreviewed
```

```yaml
id: fenvirorot-cmp-ptfe-system-a11-8532-8580-8590-controldisk
teaches: >
  Fully labelled PTFE packing system cutaway (10 numbered callouts) plus
  the stacking order of PTFE packing rings, for Fisher A11, 8532, 8580,
  8590, and Control-Disk valves.
concept-tags: [ENVIRO-SEAL, rotary packing, PTFE packing, A11, 8532, 8580, 8590, control-disk]
status: current
source:
  - doc: Enhanced ENVIRO-SEAL Packing Systems for Fisher Rotary Valves IM (D101643X012)
    locator: "Figure 3 'Enhanced ENVIRO-SEAL PTFE Packing System for Fisher A11, 8532, 8580, 8590, and Control-Disk Valves,' p. 7 (drawings 3289116-B, 14B0095-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Names the 8580 product line already catalogued in this library — checked
  `Subject-Matter Index — Fisher 8580 Rotary Valve.md` for the same drawing
  number (3289116-B); no match, genuinely different figure from that
  manual's own packing content. Cross-referenced here, not merged. Shares
  drawing number 3289116-B with this same file's `fenvirorot-cmp-
  ptfe-system-detail` (Figure 7) — see that record's own notes for the
  internal relationship.
mediaStatus: unreviewed
```

```yaml
id: fenvirorot-cmp-graphite-arrangements-veeball-eccplug-8560
teaches: >
  Graphite-packing counterpart to `fenvirorot-cmp-ptfe-arrangements-
  veeball-eccplug-8560` — the same five arrangement categories (standard
  depth, outboard standard depth for 8510B, optional deep box for V500),
  using graphite packing rings and stacking order instead of PTFE.
concept-tags: [ENVIRO-SEAL, rotary packing, graphite packing, Vee-Ball, eccentric plug, 8560, V500, 8510B]
status: current
source:
  - doc: Enhanced ENVIRO-SEAL Packing Systems for Fisher Rotary Valves IM (D101643X012)
    locator: "Figure 4 'Typical Enhanced ENVIRO-SEAL Rotary Packing Arrangements with Graphite Packing for Fisher Vee-Ball, Eccentric Plug, and 8560 Valves,' p. 8 — 4-panel composite (drawings 42B8445-C/DOC, 14B0086-A/DOC)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Graphite companion to `fenvirorot-cmp-ptfe-arrangements-veeball-eccplug-8560`
  (Figure 2). Same cross-reference check against Vee-Ball/V500's own
  content — no drawing-number match, genuinely distinct.
mediaStatus: unreviewed
```

```yaml
id: fenvirorot-cmp-graphite-system-a11-8532-8580-8590-controldisk
teaches: >
  Graphite-packing counterpart to `fenvirorot-cmp-ptfe-system-a11-8532-8580-
  8590-controldisk` — same fully labelled cutaway and stacking-order panel,
  graphite packing rings and stem-diameter note (valves with shafts larger
  than 38.1 mm/1-1/2 inch use three graphite rings).
concept-tags: [ENVIRO-SEAL, rotary packing, graphite packing, A11, 8532, 8580, 8590, control-disk]
status: current
source:
  - doc: Enhanced ENVIRO-SEAL Packing Systems for Fisher Rotary Valves IM (D101643X012)
    locator: "Figure 5 'Enhanced ENVIRO-SEAL Graphite Packing System for Fisher A11, 8532, 8580, 8590, and Control-Disk Valves,' p. 9 (drawings 3289116-B, 14B0086-A)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Graphite companion to `fenvirorot-cmp-ptfe-system-a11-8532-8580-8590-
  controldisk` (Figure 3). Same 8580 cross-reference check applies — no
  drawing-number match against `Subject-Matter Index — Fisher 8580 Rotary
  Valve.md`'s own content.
mediaStatus: unreviewed
```

```yaml
id: fenvirorot-cmp-belleville-spring-stacking-order
teaches: >
  Belleville (coned-disk) spring stacking order for both graphite and PTFE
  rotary packing, by shaft-diameter band — five distinct panels: graphite
  9/16" and smaller (10 springs), graphite 3/4" and larger (6 springs),
  PTFE 9/16" and smaller (9 springs), PTFE 3/4"-1" (7 springs), PTFE
  1-1/16" and larger (5 springs). References Table 3 for the full
  shaft-size/spring-count matrix.
concept-tags: [ENVIRO-SEAL, rotary packing, Belleville spring, spring count, shaft diameter, PTFE, graphite]
status: current
source:
  - doc: Enhanced ENVIRO-SEAL Packing Systems for Fisher Rotary Valves IM (D101643X012)
    locator: "Figure 6 'Belleville Spring Stacking Order (See Table 3),' p. 10 — 5-panel composite (drawings 13B8226-A, 13B8227-A, 12B9056-B, 12B9057-B, 12B9058-B)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Checked against the sliding-stem ENVIRO-SEAL manual's own Belleville
  content (7 springs for PTFE/duplex, 9 for graphite ULF) — different spring
  counts and different drawing numbers; genuinely distinct content for the
  two different packing-box geometries (sliding-stem vs. rotary), not the
  same figure.
mediaStatus: unreviewed
```

```yaml
id: fenvirorot-cmp-ptfe-system-detail
teaches: >
  Generic ENVIRO-SEAL PTFE packing system detail cutaway, with two
  installation notes (apply lubricant; keep the two flange faces parallel
  while tightening) — a closer, unlabelled-by-valve-line view than Figures
  2/3's fully numbered assemblies.
concept-tags: [ENVIRO-SEAL, rotary packing, PTFE packing, installation detail, lubricant, parallel tightening]
status: current
source:
  - doc: Enhanced ENVIRO-SEAL Packing Systems for Fisher Rotary Valves IM (D101643X012)
    locator: "Figure 7 'Enhanced ENVIRO-SEAL PTFE Packing System Detail,' p. 11 (drawing 3289116-B)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Shares drawing number 3289116-B with this same file's `fenvirorot-cmp-
  ptfe-system-a11-8532-8580-8590-controldisk` (Figure 3) — the same base
  cutaway drawing, reused within this one document under two different
  figure numbers/captions (Figure 3 as the fully-numbered per-valve-line
  assembly, Figure 7 as a generic two-note installation detail). Catalogued
  as two distinct records per the standing "distinct figure number = distinct
  record" rule, not merged — flagging the internal reuse plainly rather than
  treating it as two unrelated figures that happen to look similar.
mediaStatus: unreviewed
```

## Open Items

- **Full coverage: 7 figures catalogued (Figures 1–7), no gaps.** Located
  via a full-text sweep across all 20 pages, every one visually verified
  against its rendered page.
- **Trigger-type / grain**: standing full-document, matching the rest of
  this batch (ENVIRO-SEAL sliding-stem, HIGH-SEAL, and the other 15
  flat-structure manuals) — this is a complete, real instruction manual,
  not artificially scoped to a narrower topic the way `bench-set-657` was.
  Document grain, no chapter structure (named sections only: Introduction,
  Installation, Parts Ordering, Parts Kits).
- **11 numbered tables (Tables 1–11), all excluded** per the standing
  figures-only rule — parts kits, torque values, spring-count matrices
  (including Table 3, which Figure 6 explicitly references) — none carry
  their own figure number.
- **No duplicate figure numbers or source citation errors found.** One
  genuine internal drawing reuse (Figures 3 and 7 share drawing number
  3289116-B) — flagged in Figure 7's own notes, both kept as distinct
  records since they are distinctly numbered and captioned.
- **Cross-reference check against the whole library**: see the dedicated
  section above — real topical overlap confirmed with `Subject-Matter Index —
  Fisher 8580 Rotary Valve.md`, `Subject-Matter Index — Fisher Vee-Ball Rotary
  Valves.md`, `Subject-Matter Index — Fisher V500 Rotary Globe Valve.md`, and
  `Subject-Matter Index — Oil & Gas Sourcebook ch1.md`'s
  `ogas-cmp-enviroseal-rotary-packing-arrangements` — every case checked by
  real drawing-number comparison, not assumed from topic proximity alone;
  no figure-level duplicate found, every cross-reference is topical, not a
  merge case.
- **Low-confidence flags**: none — every figure's caption, page, and
  drawing number confirmed directly.
- **No archive or legacy material** was consulted — the current (February
  2024) edition is the sole and sufficient source for all 7 records here.
