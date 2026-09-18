---
title: Subject-Matter Index — Fisher ENVIRO-SEAL Packing System
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM (D101642X012, July 2017)
chapter: whole document — no chapter structure
updated: 2026-09-19
---

# Subject-Matter Index — Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves

Standing full-chapter cataloging pass, part of the "index all Technical
Publications manuals" directive (Franz, 2026-09-19) — deliberately ahead of
individual course citations ("demand signal here is Franz added it to the
library"). Document-grain, not chapter-grain, per
`Subject-Matter Index — Process & Standards.md`: this manual has no numbered
chapter structure (a flat house structure of named sections), so the whole
12-page document is the bounded unit, one file, no `ch<N>` suffix.

Every page was rendered as an image (150dpi) and visually inspected — not
read from extracted text alone. Figures are numbered flatly throughout
(`Figure 1`–`Figure 9`), no chapter prefix, per this manual's own real
structure.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM** | D101642X012 · July 2017 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Introduction (printed p. 1)

```yaml
id: fenviro-cmp-bonnet-cutaway
teaches: >
  A complete Fisher easy-e valve bonnet fitted with ENVIRO-SEAL packing,
  fully labelled: valve stem, packing flange, Belleville springs, packing
  follower, valve bonnet — the whole-assembly overview the rest of the
  manual's exploded views and procedures build on.
concept-tags: [ENVIRO-SEAL, packing, bonnet, Belleville springs, packing follower, valve stem]
status: current
source:
  - doc: Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM (D101642X012)
    locator: "Figure 1 'Fisher easy-e Valve Bonnet with ENVIRO-SEAL Packing,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Opens the manual as the assembly-overview figure — the same role
  `cvh-cmp-bonnet-assembly` (Handbook Figure 1.6) plays for a conventional
  bonnet. Not the same source image; a distinct, ENVIRO-SEAL-specific
  photo/cutaway, not a duplicate.
mediaStatus: unreviewed
```

### Description (printed p. 2)

```yaml
id: fenviro-cmp-applications-guidelines-graph
teaches: >
  Pressure-vs-temperature applicability envelope for the three ENVIRO-SEAL
  packing types (PTFE, Duplex, Graphite ULF — plus HIGH-SEAL Graphite ULF
  shown on the same axes) for 100 ppm fugitive-emission service — which
  packing type is rated for a given process pressure/temperature
  combination.
concept-tags: [ENVIRO-SEAL, PTFE, Duplex, Graphite ULF, pressure rating, temperature rating, 100 ppm, fugitive emissions]
status: current
source:
  - doc: Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM (D101642X012)
    locator: "Figure 2 'Applications Guidelines for 100 ppm Service,' p. 2 — Pressure (psi) vs Temperature (°F), three packing-type envelopes plus a HIGH-SEAL Graphite ULF overlap region"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  Also directly names HIGH-SEAL Graphite ULF on its own axes — a real,
  source-confirmed cross-reference to the companion HIGH-SEAL manual
  (D101453X012), not assumed.
mediaStatus: unreviewed
```

### Installation (printed pp. 3–7)

```yaml
id: fenviro-cmp-tightening-procedure
teaches: >
  The tightening-procedure geometry for any ENVIRO-SEAL packing flange:
  alternate tightening between the two hex nuts, keeping the packing
  flange and bonnet faces parallel throughout — the mechanical setup this
  manual's own "Tightening Procedures" text (spring-flat method, p. 7)
  instructs against.
concept-tags: [ENVIRO-SEAL, tightening procedure, hex nut, packing flange, spring-flat method, bonnet]
status: current
source:
  - doc: Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM (D101642X012)
    locator: "Figure 3 'ENVIRO-SEAL Packing Assembly Procedure,' p. 3 — labelled (Hex Nut, Packing Flange, Stud, Bonnet; callouts: alternate tightening, keep two surfaces parallel)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Real cross-reference, checked directly:** `Subject-Matter Index — 14101
  ch1-ch2.md`'s `ch2-cmp-packing-adjustment-by-type` already cites this
  same manual's "Tightening Procedures (spring-flat method), D101642X012"
  generically (procedure text, not this specific figure) alongside the
  HIGH-SEAL load-scale method and jam-packing torque values, backing 14101
  ch2-m6 (Packing Replacement & Adjustment). This figure is the visual
  anchor for that procedure text. Not a duplicate id — that record cites
  the procedure section as prose; this is the manual's own numbered figure
  for it, source-anchored here for the first time.
mediaStatus: unreviewed
```

```yaml
id: fenviro-cmp-belleville-spring-stacking
teaches: >
  Belleville spring stacking order compared across two packing variants:
  7 springs for PTFE and Duplex packing vs. 9 springs for Graphite ULF
  packing — the spring-count distinction the tightening procedure and the
  parts diagrams both assume the reader already knows.
concept-tags: [ENVIRO-SEAL, Belleville spring, spring stacking, PTFE, Duplex, Graphite ULF, packing follower]
status: current
source:
  - doc: Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM (D101642X012)
    locator: "Figure 4 'Belleville Spring Stacking Order,' p. 5 — two-panel comparison (easy-e PTFE & Duplex Packing: 7 springs; easy-e Graphite ULF Packing: 9 springs), both labelled Packing Follower"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: A genuine 2-panel contrast figure, not two separate figures — cited as one Figure 4 in the source throughout.
mediaStatus: unreviewed
```

### Parts diagrams (printed pp. 9–10)

```yaml
id: fenviro-cmp-ptfe-packing-exploded
teaches: >
  Full numbered exploded-parts diagram for PTFE sliding-stem ENVIRO-SEAL
  packing on Fisher easy-e valves: packing nut, packing flange, spring
  pack assembly (key 217), anti-extrusion washers, lower wiper, lantern
  ring, packing set, packing box ring, stud, anti-seize lubricant — the
  real parts-ordering reference for a PTFE rebuild.
concept-tags: [ENVIRO-SEAL, PTFE packing, exploded view, packing nut, spring pack assembly, lantern ring, easy-e]
status: current
source:
  - doc: Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM (D101642X012)
    locator: "Figure 5 'PTFE Sliding-Stem ENVIRO-SEAL Packing for Fisher easy-e Valves,' p. 9 — 10-part numbered exploded view (200 Stud, 201 Packing Flange, 211 Packing Box Ring, 212 Packing Nut, 213 Anti-Seize Lubricant, 214 Anti-Extrusion Washers, 215 Packing Set, 216 Lantern Ring, 217 Spring Pack Assembly, 218 Lower Wiper)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully labelled with its own printed numbered callouts — Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: fenviro-cmp-duplex-packing-exploded
teaches: >
  Full numbered exploded-parts diagram for Duplex ENVIRO-SEAL packing on
  Fisher easy-e valves — the same stud/flange/spring-pack construction as
  the PTFE variant, but with two guide bushings (207) flanking a packing
  ring (209) instead of the PTFE variant's anti-extrusion-washer stack.
concept-tags: [ENVIRO-SEAL, Duplex packing, exploded view, guide bushing, packing ring, spring pack assembly, easy-e]
status: current
source:
  - doc: Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM (D101642X012)
    locator: "Figure 6 'ENVIRO-SEAL Duplex Packing for Fisher easy-e Valves,' p. 9 — 8-part numbered exploded view (200 Stud, 201 Packing Flange, 207 Guide Bushing ×3, 209 Packing Ring, 211 Packing Box Ring, 212 Packing Nut, 213 Anti-Seize Lubricant, 214 Packing Washer, 215 Packing Set, 216 Lantern Ring, 217 Spring Pack Assembly)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully labelled with its own printed numbered callouts — Style Guide §6.3 applies if ever placed on a slide. Shares the same page as Figure 5, distinct figure.
mediaStatus: unreviewed
```

```yaml
id: fenviro-cmp-graphite-ulf-packing-exploded
teaches: >
  Full numbered exploded-parts diagram for Graphite ULF ENVIRO-SEAL
  packing on Fisher easy-e valves — two packing-ring stages (209, 210)
  between two guide bushings (207, 208), the construction the 9-spring
  stack (Figure 4) and the 90°-quarter-turn back-off torque method serve.
concept-tags: [ENVIRO-SEAL, Graphite ULF packing, exploded view, guide bushing, packing ring, spring pack assembly, easy-e]
status: current
source:
  - doc: Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM (D101642X012)
    locator: "Figure 7 'ENVIRO-SEAL Graphite ULF Packing for Fisher easy-e Valves,' p. 10 — 9-part numbered exploded view (200 Stud, 201 Packing Flange, 207 Guide Bushing, 208 Guide Bushing, 209 Packing Ring, 210 Packing Ring, 211 Packing Box Ring, 212 Packing Nut, 213 Anti-Seize Lubricant, 214 Packing Washer, 217 Spring Pack Assembly)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully labelled with its own printed numbered callouts — Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

### Back matter — TÜV certification (printed pp. 11–12)

```yaml
id: fenviro-cmp-tuv-certificate-en
teaches: >
  TÜV Saarland certificate (English) attesting ENVIRO-SEAL PTFE and
  Graphite ULF packing's stem-sealing equivalence to TA-Luft fugitive-
  emission requirements — the compliance record backing the manual's own
  TÜV-certification claim (p. 2).
concept-tags: [ENVIRO-SEAL, TÜV certification, TA-Luft, fugitive emissions, compliance]
status: current
source:
  - doc: Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM (D101642X012)
    locator: "Figure 8 'Copy of TÜV Certificate,' p. 11 — English-language TÜV Saarland certificate scan"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A real, source-numbered figure per the standing figures-only rule, but
  low instructional value — a compliance/certification document scan, not
  a teaching diagram. Catalogued for completeness, not expected to be a
  real citation candidate for course content.
mediaStatus: unreviewed
```

```yaml
id: fenviro-cmp-tuv-certificate-de
teaches: >
  The same TÜV Saarland certification, in the original German
  ("Zertifikat") — same register number (842-99-5010) and content as
  Figure 8, confirmed as a genuine second printed figure (language
  variant), not a duplicate scan of the same page.
concept-tags: [ENVIRO-SEAL, TÜV certification, TA-Luft, fugitive emissions, compliance]
status: current
source:
  - doc: Fisher ENVIRO-SEAL Packing System for Sliding-Stem Valves IM (D101642X012)
    locator: "Figure 9 'Copy of TÜV Certificate,' p. 12 — German-language TÜV Saarland Zertifikat scan"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same low-instructional-value note as Figure 8 — a compliance document,
  catalogued for completeness. Confirmed by direct visual comparison that
  this is the German original, not an accidental duplicate render of
  Figure 8 (register number and layout match; language and header
  ["ZERTIFIKAT" vs "CERTIFICATE"] differ).
mediaStatus: unreviewed
```

## Open Items

- **Scope confirmed by direct inspection.** All 12 pages rendered (150dpi) and read directly, not from text extraction alone. Manual has no numbered chapter/section structure — house structure only (Introduction/Scope, Description, Installation/Tightening Procedures, Other Considerations, Parts Ordering, Retrofit Kits, Repair Kits) — document-grain file, per the Process & Standards schema addition for exactly this case.
- **Full coverage: 9 figures (Figure 1–Figure 9), no gaps.** Located via a full-text sweep for `Figure [0-9]` across the whole document, then every one visually confirmed against its rendered page.
- **Table exclusion confirmed.** Tables 1–7 (specifications, product-availability, packing-friction, torque values) all correctly excluded — none carry a "Figure" caption, all are genuinely numbered "Table N."
- **No duplicate figure numbers, no source citation errors found** in this manual.
- **No low-confidence flags** — every figure's caption, page, and callout content was directly confirmed by the rendered image; nothing here required a guess.
- **Real cross-reference found and used** (not assumed): `fenviro-cmp-tightening-procedure` connects to `Subject-Matter Index — 14101 ch1-ch2.md`'s `ch2-cmp-packing-adjustment-by-type`, which already cites this manual's Tightening Procedures section generically (procedure text) as one of three sources backing 14101 ch2-m6 (Packing Replacement & Adjustment). This is the manual's own figure for that same procedure — noted in both directions, not duplicated as a second id for the same content.
- **Real cross-reference found, not yet actionable**: Figure 2's applications-guidelines graph directly names HIGH-SEAL Graphite ULF on its own axes — the two packing manuals are genuinely linked at the source level, not just topically adjacent. See `Subject-Matter Index — Fisher HIGH-SEAL Packing System.md` for the companion side of this.
- **Checked against the wider library** — Control Valve Handbook (all 15 chapters), Oil & Gas Sourcebook, `Subject-Matter Index — 14101 ch3.md`, `Subject-Matter Index — bench-set-657.md`: no figure-level overlap found beyond the ch1-ch2 procedure-text citation above. ENVIRO-SEAL's own parts diagrams (Figures 5–7) are specific to this packing system and don't appear elsewhere in the library.
- **No archive or legacy material** was found or consulted — the manual is `current` throughout.
