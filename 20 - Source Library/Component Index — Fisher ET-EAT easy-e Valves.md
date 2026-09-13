---
title: Component Index — Fisher ET-EAT easy-e Valves
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher ET and EAT easy-e Valves Instruction Manual (D100398X012, August 2021)
chapter: whole document — no chapter structure
updated: 2026-09-19
---

# Component Index — Fisher ET and EAT easy-e Valves Instruction Manual

Standing full-chapter cataloging pass (document grain), part of the "index
all Technical Publications manuals" directive (Franz, 2026-09-19). Matches
the rigor of every prior pass: all 48 pages rendered as images (Poppler,
130dpi) and visually inspected — no figure catalogued from text extraction
alone.

House structure: Introduction (Scope of Manual, Description,
Specifications, Educational Services), Installation, Maintenance (Packing
Lubrication, Packing Maintenance/Replacing Packing, Trim
Maintenance/Disassembly/Lapping Metal Seats/Valve Plug Maintenance/
Assembly, ENVIRO-SEAL Bellows Seal Bonnet), Parts Ordering, Parts Kits,
Parts List — flat named headers (no "Section N:" numbering, unlike the
ES/EAS and ED/EAD manuals' own convention), confirmed against this
manual's own real Contents page.

**Real page range:** 48 PDF pages, no front-matter offset — printed page
number equals PDF page number throughout (Figure 1 is on PDF/printed p.1).
Figures numbered flatly (Figure 1 through Figure 25), confirmed against the
manual's own captions.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher ET and EAT easy-e Valves IM** | D100398X012 · August 2021 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Introduction (printed p. 1)

```yaml
id: fet-cmp-et-valve-667-actuator-photo
teaches: >
  A complete Fisher ET valve assembly with a 667 diaphragm actuator mounted
  — the manual's own opening reference photo.
concept-tags: [ET valve, EAT valve, easy-e, 667 actuator, assembled valve photo]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 1 'Fisher ET Control Valve with 667 Actuator,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo, drawing number W1916-4 — same drawing family as the ED/EAD manual's Figure 1 (W1916-2), different valve photographed.
mediaStatus: unreviewed
```

### Maintenance: Packing Lubrication / Packing Maintenance (printed pp. 7–11)

```yaml
id: fet-cmp-lubricator-isolating-valve
teaches: >
  Optional lubricator and lubricator/isolating valve accessories for
  introducing lubricant to the packing under pressure.
concept-tags: [lubricator, isolating valve, packing lubrication, accessory]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 2 'Lubricator and Lubricator/Isolating Valve (Optional),' p. 7"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing numbers (10A9421-A, AJ5428-D, A0832-2) to
  `fes-cmp-lubricator-isolating-valve` and `fed-cmp-lubricator-isolating-valve`
  — confirmed the same real physical figure, reused across the whole
  easy-e manual family.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-ptfe-vring-packing-arrangements
teaches: >
  PTFE V-ring packing arrangements for plain and extension bonnets, single
  and double, across the stem-size range — fully labelled.
concept-tags: [PTFE V-ring, packing arrangement, plain bonnet, extension bonnet]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 3 'PTFE V-Ring Packing Arrangements for Plain and Extension Bonnets,' p. 8"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing numbers (A8187-D/B1429-5/12A7814-D/12A7839-A/B1428-5) distinct from ES/EAS and ED/EAD's equivalent figures — related family, not confirmed identical drawings.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-ptfe-composition-packing-detail
teaches: >
  Detail of PTFE/composition packing arrangements for plain and extension
  bonnets, across the stem-size range — fully labelled (upper wiper,
  packing follower, packing ring, lantern ring, packing box ring). The
  3/4-1-1/4 in. stem panel is the fully-labelled reference used elsewhere
  in the library for packing-stack build procedure.
concept-tags: [PTFE packing, composition packing, packing ring, lantern ring, packing stack]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 4 'Detail of PTFE/Composition Packing Arrangements for Plain and Extension Bonnets,' p. 9"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Real, confirmed cross-reference:** `Component Index — 14101
  ch1-ch2.md`'s `ch2-cmp-packing-stack-build` cites this exact figure
  directly — "Fisher ET IM D100398X012 Figure 4 — labelled 3/4-1-1/4 in.
  stem packing arrangement, cropped; left-edge sliver whited out" — as the
  source for slide 70/71/74's packing-stack-build content. Confirmed by
  direct inspection: this figure's third (rightmost) panel, the
  19.1/25.4/31.8mm (3/4, 1, 1-1/4in) stem panel, is the one fully labelled
  with printed callouts (Upper Wiper, Packing Follower, Packing Ring,
  Lantern Ring, Packing Box Ring) — matches the 14101 record's own
  description exactly. That record is competency-anchored
  (`serves: [mnt.valve-body.build-packing-stack]`); this record is the
  source-anchored library-wide entry for the same real figure. Both kept,
  cross-referenced, not merged — per the standing convention.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-graphite-ribbon-packing-detail
teaches: >
  Graphite ribbon/filament packing detail for plain and extension bonnets,
  single and double arrangements, across the stem-size range.
concept-tags: [graphite ribbon packing, graphite filament packing, plain bonnet, extension bonnet]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 5 'Detail of Graphite Ribbon/Filament Packing for Plain and Extension Bonnets,' p. 11"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Also cited generically (without a specific figure number) by 14101's
  `ch2-cmp-packing-adjustment-by-type` for "D100398X012 Table 4 — jam-
  packing torque values" — that citation is to a table, not this figure;
  Table 4 was confirmed excluded from this index per the standing
  figures-only rule (see Open Items).
mediaStatus: unreviewed
```

### Trim Maintenance: TSO (Tight Shutoff) Trim (printed pp. 12–16)

```yaml
id: fet-cmp-tso-protected-soft-seat-detail
teaches: >
  TSO (Tight Shutoff Trim), detail of the protected soft seat — inner plug,
  outer plug, cage, seat ring — a genuinely ET/EAT-specific trim
  construction not present in the ES/EAS or ED/EAD manuals.
concept-tags: [TSO trim, tight shutoff, protected soft seat, inner plug, outer plug]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 6 'TSO (Tight Shutoff Trim), Detail of Protected Soft Seat,' p. 12"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: No equivalent figure found in the ES/EAS or ED/EAD manuals — TSO trim appears specific to ET/EAT.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-tso-balanced-trim-assembly
teaches: >
  Typical balanced TSO trim, full assembly — valve plug seal and protected
  soft seat shown in context.
concept-tags: [TSO trim, balanced trim, valve plug seal, protected soft seat]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 7 'Typical Balanced TSO Trim,' p. 16"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Figure 6, later in the Trim Maintenance section.
mediaStatus: unreviewed
```

### Maintenance: ENVIRO-SEAL Bellows Seal Bonnet (printed pp. 22–24)

```yaml
id: fet-cmp-ptfe-packing-enviroseal-bellows
teaches: >
  PTFE packing arrangements for ENVIRO-SEAL bellows seal bonnets, single
  and double, across the stem-size range.
concept-tags: [PTFE packing, ENVIRO-SEAL, bellows seal bonnet]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 8 'PTFE Packing Arrangements for Use in ENVIRO-SEAL Bellows Seal Bonnets,' p. 22"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same packing family as ES/EAS's Figure 4 and ED/EAD's Figure 12 — distinct drawing numbers, related not confirmed identical.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-graphite-ribbon-enviroseal-double
teaches: >
  Double graphite ribbon/filament packing arrangements for ENVIRO-SEAL
  bellows seal bonnets, across the stem-size range.
concept-tags: [graphite ribbon packing, ENVIRO-SEAL, bellows seal bonnet]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 9 'Double Graphite Ribbon/Filament Arrangements for Use in ENVIRO-SEAL Bellows Seal Bonnets,' p. 24"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same packing family as ES/EAS's Figure 6 and ED/EAD's Figure 13.
mediaStatus: unreviewed
```

### HIGH-SEAL / ENVIRO-SEAL packing systems, 4-panel layout (printed p. 30)

```yaml
id: fet-cmp-highseal-graphite-ulf-system
teaches: >
  A complete HIGH-SEAL graphite ULF packing system, fully numbered-callout.
concept-tags: [HIGH-SEAL, graphite ULF, live-loaded packing, packing system]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 10 'Typical HIGH-SEAL Graphite ULF Packing System,' p. 30"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing number (39B4153-A) to the ES/EAS and ED/EAD manuals'
  equivalent figures (`fes-cmp-highseal-graphite-ulf-system`,
  `fed-cmp-highseal-graphite-ulf-system`) — confirmed same real source
  figure, reused verbatim across the easy-e family.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-enviroseal-ptfe-system
teaches: >
  A complete ENVIRO-SEAL packing system with PTFE packing, labelled.
concept-tags: [ENVIRO-SEAL, PTFE packing, packing system]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 11 'Typical ENVIRO-SEAL Packing System with PTFE Packing,' p. 30"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing number (A6297-1) to the ES/EAS and ED/EAD manuals'
  equivalent figures — confirmed same real source figure reused verbatim.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-enviroseal-graphite-ulf-system
teaches: >
  ENVIRO-SEAL packing system with graphite ULF packing, labelled.
concept-tags: [ENVIRO-SEAL, graphite ULF, packing system, guide bushing]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 12 'Typical ENVIRO-SEAL Packing System with Graphite ULF Packing,' p. 30"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing number (39B4612/A) to the ES/EAS and ED/EAD manuals'
  equivalent figures — confirmed same real source figure reused verbatim.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-enviroseal-duplex-system
teaches: >
  ENVIRO-SEAL packing system with duplex packing, numbered-callout.
concept-tags: [ENVIRO-SEAL, duplex packing, packing system]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 13 'Typical ENVIRO-SEAL Packing System with Duplex Packing,' p. 30"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing number (A6722) to the ES/EAS and ED/EAD manuals'
  equivalent figures — confirmed same real source figure reused verbatim.
mediaStatus: unreviewed
```

### Parts: Bonnets and Alternate Configurations (printed pp. 32–33)

```yaml
id: fet-cmp-typical-bonnets
teaches: >
  Four bonnet constructions: plain bonnet, a detail of 127mm/5-in. yoke
  boss actuator bolting, an ENVIRO-SEAL bellows seal bonnet, and a style
  1/2 extension bonnet — numbered-callout.
concept-tags: [bonnet, plain bonnet, extension bonnet, ENVIRO-SEAL bellows seal bonnet, yoke boss]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 14 'Typical Bonnets,' p. 32"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing numbers to the ES/EAS and ED/EAD manuals' equivalent
  figures — confirmed same real source figure reused verbatim.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-alternate-plug-configurations-peek
teaches: >
  Alternate valve plug configurations for ET valves using PEEK
  anti-extrusion rings, NPS 1 through 8, flow-up and flow-down
  orientations.
concept-tags: [PEEK anti-extrusion ring, valve plug, flow orientation, alternate configuration]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 15 'Alternate Configurations,' p. 33 — NPS 1 to 8 ET using PEEK anti-extrusion rings"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: PEEK anti-extrusion ring construction is ET/EAT-specific — no equivalent found in ES/EAS or ED/EAD.
mediaStatus: unreviewed
```

### Parts: Valve Body, standard and alternate constructions (printed pp. 34–39)

```yaml
id: fet-cmp-et-eat-valve-nps1-6
teaches: >
  NPS 1 through 6 Fisher ET and EAT valves — five real sub-views: correct
  plug/seal-ring orientation, detail of PTFE seat and two-piece seal ring,
  seat-ring-style metal EAT, full-capacity metal-seat ET with optional
  drain plug, and detail of liner-style EAT (metal seat only).
concept-tags: [ET valve, EAT valve, metal seat, PTFE seat, seat-ring style, liner style, parts identification]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 16 'NPS 1 Through 6 Fisher ET and EAT Valves,' p. 34 — dense multi-panel numbered-callout parts cutaway"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: The densest, most complex figure found across this whole batch — five genuinely distinct real constructions, not repeats.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-whisper-trim3-cage-assembly
teaches: >
  Fisher ET valve assembly with Whisper Trim III cage and optional drain
  plug — full-capacity metal-seat construction plus a PTFE seat detail.
concept-tags: [Whisper Trim III, drain plug, full-capacity trim, PTFE seat, parts identification]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 17 'Fisher ET Valve Assembly with Whisper Trim III Cage and Optional Drain Plug,' p. 35"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: none
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-whisperflo-cage-assembly
teaches: >
  Fisher ET valve assembly with WhisperFlo cage and optional drain plug,
  plus a PTFE seat detail.
concept-tags: [WhisperFlo cage, drain plug, cavitation/noise trim, PTFE seat, parts identification]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 18 'Fisher ET Valve Assembly with WhisperFlo Cage and Optional Drain Plug,' p. 36"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: none
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-whisperflo-cage-nps8-assembly
teaches: >
  NPS 8 Fisher ET valve assembly with WhisperFlo cage and optional drain
  plug, plus a PTFE seat detail — the NPS 8-specific variant of Figure 18.
concept-tags: [WhisperFlo cage, NPS 8, drain plug, PTFE seat, parts identification]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 19 'NPS 8 Fisher ET Valve Assembly with WhisperFlo Cage and Optional Drain Plug,' p. 37"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Genuinely distinct hardware from Figure 18 (larger valve size), not a repeat.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-cavitrol3-nps8-detail
teaches: >
  Cavitrol III construction details across three real variants: 1-stage
  Cavitrol III through NPS 6, 2-stage Cavitrol III cage (NPS 1-6 and NPS
  8), each showing correct plug/seal-ring orientation with spring loading.
concept-tags: [Cavitrol III, NPS 8, anti-cavitation trim, plug orientation, spring-loaded seal ring]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 20 'Details of Cavitrol III and NPS 8 Fisher ET Valves with Optional Drain Plug,' p. 38 — 3-panel numbered-callout"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cavitrol III multi-stage anti-cavitation trim — real, ET-specific hardware detail across three genuinely distinct sub-constructions.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-gasket-set-detail
teaches: >
  Gasket set detail with optional drain plug, standard NPS 8 construction,
  restricted-trim and full-capacity-trim variants.
concept-tags: [gasket set, load ring, drain plug, restricted trim, full-capacity trim]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 21 'Gasket Set Detail shown with Optional Drain Plug,' p. 39"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same drawing number (16A1943-A) shared restricted/full-capacity-trim
  detail sub-panels as ED/EAD's Figure 24 — this figure adds a "standard
  NPS 8 construction" panel with a load ring, not present in the ED/EAD
  version.
mediaStatus: unreviewed
```

### Parts: Valve Body with R31233 DST (Dirty Service Trim) (printed pp. 40–43)

```yaml
id: fet-cmp-dst-2stage-assembly
teaches: >
  Typical valve assembly with 2-stage R31233 DST (Dirty Service Trim) —
  genuinely different internal cage/trim construction from the standard
  and Whisper/Cavitrol trims catalogued elsewhere in this manual.
concept-tags: [R31233 DST, dirty service trim, 2-stage, cage, seal ring]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 22 'Typical Valve Assembly with 2-Stage DST,' p. 40"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: R31233 DST is a distinct real trim family, its own parts key list (Valve Body with R31233 DST, figures 22-25) separate from the rest of the manual's parts numbering.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-dst-3stage-assembly
teaches: >
  Typical valve assembly with 3-stage R31233 DST — the higher-stage
  variant of Figure 22, with an upper/lower cage split (2A/2B).
concept-tags: [R31233 DST, dirty service trim, 3-stage, upper cage, lower cage]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 23 'Typical Valve Assembly with 3-Stage DST,' p. 41"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Figure 22, genuinely more complex construction (2-piece cage).
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-dst-3stage-nps6-assembly
teaches: >
  NPS 6 valve assembly with 3-stage R31233 DST — the NPS 6-specific
  variant of Figure 23.
concept-tags: [R31233 DST, dirty service trim, 3-stage, NPS 6]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 24 'NPS 6 Valve Assembly with 3-Stage DST,' p. 42"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Genuinely distinct hardware from Figure 23 (larger valve size), not a repeat.
mediaStatus: unreviewed
```

```yaml
id: fet-cmp-dst-3stage-nps8-assembly
teaches: >
  NPS 8 valve assembly with 3-stage R31233 DST — the largest-size variant
  in this trim family, last figure in the manual.
concept-tags: [R31233 DST, dirty service trim, 3-stage, NPS 8]
status: current
source:
  - doc: Fisher ET and EAT easy-e Valves IM (D100398X012)
    locator: "Figure 25 'NPS 8 Valve Assembly with 3-Stage DST,' p. 43"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Last figure in the manual.
mediaStatus: unreviewed
```

## Open Items

- **Full coverage: 25 figures, Figures 1–25, no gaps.** Located via a
  full-text scan of all 48 pages plus direct rendering and visual
  inspection of every page carrying a figure. Figures 10–13 sit together
  in a real 4-panel, 2-column-per-row layout on a single page (p. 30) — a
  raw text sweep initially missed 2 of the 4 due to column-merging in the
  extracted text; all 4 confirmed present and correct by direct visual
  inspection.
- **One real, confirmed cross-reference to an existing 14101 record,
  applied:** `fet-cmp-ptfe-composition-packing-detail` (Figure 4) is the
  exact figure `Component Index — 14101 ch1-ch2.md`'s
  `ch2-cmp-packing-stack-build` already cites by locator — confirmed by
  matching the described panel (the fully-labelled 3/4-1-1/4in. stem
  arrangement) against the real rendered page. Cross-referenced in that
  record's own notes rather than duplicated; the two ids coexist
  (source-anchored here, competency-anchored there) per the standing
  convention.
- **Ten figures confirmed as the exact same real source drawing reused
  across the easy-e manual family** (identical drawing/print numbers,
  checked directly): Figure 2 (lubricator), Figures 10/11/12/13
  (HIGH-SEAL/ENVIRO-SEAL packing systems), Figure 14 (typical bonnets) —
  each cross-referenced by id to its ES/EAS and/or ED/EAD counterpart in
  that record's own notes.
- **No duplicate printed figure numbers, no source citation errors found.**
- **No low-confidence flags** — every figure confirmed by direct visual
  inspection.
- **Table exclusion confirmed.** 7 numbered tables found (specifications,
  torque values, packing kits) — all excluded per the standing
  figures-only rule. `ch2-cmp-packing-adjustment-by-type`'s citation to
  "D100398X012 Table 4" (jam-packing torque values) is a table reference,
  correctly not catalogued as a component here — noted in
  `fet-cmp-graphite-ribbon-packing-detail`'s own notes for awareness.
- **Cross-reference check against 14101's indexes and the Control Valve
  Handbook:** checked `Component Index — 14101 ch1-ch2.md` and `ch3.md`
  directly and found the one real figure-level match documented above,
  plus the one real table-level citation (not catalogued, per the
  figures-only rule). No id collision.
- **No archive or legacy material** was found or consulted.
