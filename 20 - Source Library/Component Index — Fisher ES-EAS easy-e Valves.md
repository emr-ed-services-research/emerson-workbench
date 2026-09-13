---
title: Component Index — Fisher ES-EAS easy-e Valves
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher ES and EAS easy-e Valves Instruction Manual (D100397X012, September 2025)
chapter: whole document — no chapter structure
updated: 2026-09-19
---

# Component Index — Fisher ES and EAS easy-e Valves Instruction Manual

Standing full-chapter cataloging pass (document grain — this manual has no
chapter structure to sub-divide by), part of the "index all Technical
Publications manuals" directive (Franz, 2026-09-19), indexing ahead of any
individual course's confirmed citation — see `Source Library.md`'s coverage
table for the standing rationale. Matches the rigor of every prior pass:
every page was rendered as an image (Poppler, 130dpi) and visually
inspected — no figure catalogued from text extraction alone.

**Document has no chapter/section numbers.** House structure: Section 1
Introduction (Scope, Description, Specifications), Section 2 Installation,
Section 3 Maintenance (Packing Lubrication, Packing Maintenance, Trim
Maintenance, ENVIRO-SEAL Bellows Seal and Bonnet), Section 4 Parts
(Ordering, Kits, List) — named sections, confirmed against the manual's own
real Table of Contents, not numbered chapters. Grouping headers below use
the named-section form per `Component Index — Process & Standards.md`.

**Real page range confirmed by direct inspection:** 40 PDF pages total, no
front-matter/back-matter offset beyond the title page and inside-cover
(content begins printed p.1 = PDF p.3; printed page number = PDF page
number − 2 throughout). Figures are numbered flatly (Figure 1 through
Figure 16), no chapter prefix, confirmed against the manual's own captions.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher ES and EAS easy-e Valves IM** | D100397X012 · September 2025 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Section 1: Introduction (printed p. 1)

```yaml
id: fes-cmp-es-valve-657-actuator-photo
teaches: >
  A complete Fisher ES valve assembly with a 657 diaphragm actuator mounted
  — the manual's own opening reference photo for what the ES/EAS valve
  looks like assembled, before the manual breaks into installation and
  maintenance detail.
concept-tags: [ES valve, EAS valve, easy-e, 657 actuator, assembled valve photo]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 1 'Fisher ES Valve with 657 Actuator,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photo, unlabelled except for the drawing number (W2174-3).
mediaStatus: unreviewed
```

### Section 2: Installation (printed p. 6)

```yaml
id: fes-cmp-lubricator-isolating-valve
teaches: >
  Two optional accessories shown side by side: a lubricator alone, and a
  combined lubricator/isolating valve — both threaded fittings for
  introducing lubricant to the packing under pressure without removing the
  valve from service.
concept-tags: [lubricator, isolating valve, packing lubrication, accessory]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 2 'Optional Lubricator and Lubricator/Isolating Valve,' p. 6"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Two-panel cutaway, unlabelled beyond the panel titles (LUBRICATOR /
  LUBRICATOR-ISOLATING VALVE) and drawing numbers.
mediaStatus: unreviewed
```

### Section 3.2: Packing Maintenance (printed pp. 9–12)

```yaml
id: fes-cmp-ptfe-vring-packing-arrangements
teaches: >
  PTFE V-ring packing arrangements for plain and extension bonnets, single
  and double, across the full stem-size range (3/8 in. through 1-1/4 in.) —
  fully labelled (upper wiper, packing follower, female/male adaptor,
  packing ring, spacer, packing box ring, lantern ring) with separate
  assemblies shown for positive-pressure, vacuum, and positive-pressure-
  and-vacuum service.
concept-tags: [PTFE V-ring, packing arrangement, plain bonnet, extension bonnet, single arrangement, double arrangement, stem size]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 3 'PTFE V-Ring Packing Arrangements for Plain and Extension Bonnets,' p. 9 — multi-panel labelled cutaway (Upper Wiper, Packing Follower, Washer, Spring, Packing Box Ring, Female/Male Adaptor, Packing Ring, Lower Wiper, Spacer, Lantern Ring)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Dense multi-assembly figure — 3 single-arrangement panels plus 2×3
  double-arrangement panels plus a fully-labelled double-arrangement detail.
  A strong candidate for splitting into multiple crops if ever placed on a
  slide (Style Guide §5.8/§6.3 territory), not evaluated further here —
  cataloguing existence and location only.
mediaStatus: unreviewed
```

```yaml
id: fes-cmp-ptfe-packing-enviroseal-bellows
teaches: >
  PTFE packing arrangements specific to ENVIRO-SEAL bellows seal bonnets,
  single and double, across the stem-size range — thrust ring, spring,
  bushing, spacer are the ENVIRO-SEAL-specific parts this arrangement adds
  over the plain/extension bonnet version (Figure 3).
concept-tags: [PTFE packing, ENVIRO-SEAL, bellows seal bonnet, thrust ring, spacer, bushing]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 4 'PTFE Packing Arrangements for Use in ENVIRO-SEAL Bellows Seal Bonnets,' p. 10"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Companion figure to Figure 3, same packing family, ENVIRO-SEAL-specific
  hardware. Likely relates to the ENVIRO-SEAL Packing System IM
  (D101642X012), catalogued separately in this same batch — not
  cross-referenced by id here since that manual's own component ids were
  not confirmed at the time this record was written; flagged for a
  follow-up cross-reference pass once both are complete.
mediaStatus: unreviewed
```

```yaml
id: fes-cmp-ptfe-composition-packing-detail
teaches: >
  A labelled detail view of PTFE/composition double packing arrangements
  for plain and extension bonnets across the three stem-size groups —
  upper wiper, packing follower, packing ring, lantern ring, packing box
  ring.
concept-tags: [PTFE packing, composition packing, double arrangement, lantern ring, stem size]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 5 'Detail of PTFE/Composition Packing Arrangements for Plain and Extension Bonnets,' p. 11"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled with printed callouts — Style Guide §6.3 territory if ever
  placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: fes-cmp-graphite-ribbon-enviroseal-double
teaches: >
  Double graphite ribbon/filament packing arrangements for ENVIRO-SEAL
  bellows seal bonnets, across the stem-size range — bushing, graphite
  filament/ribbon packing rings, spacer — with a printed note on
  sacrificial zinc washer placement.
concept-tags: [graphite ribbon packing, graphite filament packing, ENVIRO-SEAL, bellows seal bonnet, sacrificial zinc washer]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 6 'Double Graphite Ribbon/Filament Arrangements for use in ENVIRO-SEAL Bellows Seal Bonnets,' p. 12"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion figure to Figure 7, same page, ENVIRO-SEAL-specific.
mediaStatus: unreviewed
```

```yaml
id: fes-cmp-graphite-ribbon-packing-detail
teaches: >
  Graphite ribbon/filament packing detail for plain and extension bonnets,
  single and double arrangements, across the stem-size range — packing
  follower, graphite ribbon/filament packing rings, lantern ring, packing
  box ring.
concept-tags: [graphite ribbon packing, graphite filament packing, plain bonnet, extension bonnet, lantern ring]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 7 'Detail of Graphite Ribbon/Filament Packing for Plain and Extension Bonnets,' p. 12"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same page as Figure 6; both share the sacrificial-zinc-washer note.
mediaStatus: unreviewed
```

### Section 3.3: Trim Maintenance (printed p. 28)

```yaml
id: fes-cmp-typical-bonnets
teaches: >
  Four bonnet constructions side by side, each a fully numbered-callout
  cutaway keyed to the manual's own parts table (Table 13): plain bonnet,
  a detail of 5-in./127mm yoke boss actuator bolting, a style 1/2 extension
  bonnet, and an ENVIRO-SEAL bellows seal bonnet.
concept-tags: [bonnet, plain bonnet, extension bonnet, ENVIRO-SEAL bellows seal bonnet, yoke boss, actuator bolting]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 8 'Typical Bonnets,' p. 28 — 4-panel numbered-callout cutaway, keyed to Table 13"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled with numbered circle callouts (Style Guide §6.3 territory).
  The ENVIRO-SEAL bellows seal bonnet panel is a real construction variant
  distinct from the plain/extension panels, not a repeat.
mediaStatus: unreviewed
```

### Section 3.2 (continued): HIGH-SEAL / ENVIRO-SEAL packing systems (printed pp. 29–30)

```yaml
id: fes-cmp-highseal-graphite-ulf-system
teaches: >
  A complete HIGH-SEAL graphite ULF packing system, fully numbered-callout
  (19 keyed parts) — the live-loaded packing arrangement this manual
  defers to the dedicated HIGH-SEAL IM for full adjustment instructions.
concept-tags: [HIGH-SEAL, graphite ULF, live-loaded packing, packing system]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 9 'Typical HIGH-SEAL Graphite ULF Packing System,' p. 29 — numbered-callout cutaway (keys 200–214, 219)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The manual's own text explicitly defers HIGH-SEAL adjustment procedure to
  the dedicated HIGH-SEAL IM (D101453X012), catalogued separately in this
  same batch — likely the same real system shown from a construction
  (parts-identification) angle here vs. a procedure angle there, not
  necessarily the same source figure. Not cross-referenced by id — flagged
  for a follow-up check once both manuals' indexes are complete.
mediaStatus: unreviewed
```

```yaml
id: fes-cmp-enviroseal-ptfe-system
teaches: >
  A complete ENVIRO-SEAL packing system with PTFE packing, labelled (stud,
  hex nut, packing flange, spring pack assembly, lantern rings,
  anti-extrusion washers, packing set, packing box ring, lower wiper).
concept-tags: [ENVIRO-SEAL, PTFE packing, packing system, spring pack assembly, lantern ring]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 10 'Typical ENVIRO-SEAL Packing System with PTFE Packing,' p. 29"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same deferral-to-dedicated-manual situation as Figure 9 — see that record's notes.
mediaStatus: unreviewed
```

```yaml
id: fes-cmp-enviroseal-graphite-ulf-system
teaches: >
  ENVIRO-SEAL packing system with graphite ULF packing, labelled (stud, hex
  nut, packing flange, packing rings, packing box ring, spring pack
  assembly, guide bushings, packing washers).
concept-tags: [ENVIRO-SEAL, graphite ULF, packing system, guide bushing]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 11 'Typical ENVIRO-SEAL Packing System with Graphite ULF Packing,' p. 30"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Figures 9/10/12 — the graphite ULF variant of the ENVIRO-SEAL system.
mediaStatus: unreviewed
```

```yaml
id: fes-cmp-enviroseal-duplex-system
teaches: >
  ENVIRO-SEAL packing system with duplex packing, numbered-callout
  (keys 200–217).
concept-tags: [ENVIRO-SEAL, duplex packing, packing system]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 12 'Typical ENVIRO-SEAL Packing System with Duplex Packing,' p. 30"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Figures 9/10/11 — the duplex variant of the ENVIRO-SEAL system.
mediaStatus: unreviewed
```

### Parts illustrations, cross-referenced from Section 4 Parts (printed pp. 32–36)

```yaml
id: fes-cmp-es-eas-valve-nps-half-to-6
teaches: >
  Full numbered-callout cutaway of NPS 1/2 through 6 ES and EAS valves,
  two body/trim configurations (metal seat, composition/PTFE seat) each
  shown twice (assembled + detail-of-seat inset), with flow direction and
  trim-type arrows (Cavitrol / STD / Whisper).
concept-tags: [ES valve, EAS valve, metal seat, composition seat, PTFE seat, flow direction, trim type, parts identification]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 13 'NPS 1/2 through 6 Fisher ES and EAS Valves,' p. 32 — dense numbered-callout parts cutaway, two body configurations"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: The single densest parts-identification figure in the manual — genuinely two related but distinct body/seat configurations, not a duplicate.
mediaStatus: unreviewed
```

```yaml
id: fes-cmp-es-valve-nps8-drain-plug
teaches: >
  NPS 8 Fisher ES valve with optional drain plug, metal seat and
  composition (PTFE) seat variants, numbered-callout.
concept-tags: [ES valve, NPS 8, drain plug, metal seat, composition seat, parts identification]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 14 'NPS 8 Fisher ES Valve with Optional Drain Plug,' p. 33"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: The NPS 8-specific parts figure — larger valve size than Figure 13's range, genuinely distinct hardware, not a repeat.
mediaStatus: unreviewed
```

```yaml
id: fes-cmp-whisper-trim-detail
teaches: >
  Whisper Trim III and Whisper NXG trim detail with optional drain plug,
  numbered-callout, labelled "WHISPER III TRIM."
concept-tags: [Whisper Trim III, Whisper NXG, drain plug, trim type, parts identification]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 15 'Whisper Trim III and Whisper NXG Trim Detail with Optional Drain Plug,' p. 34"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Noise-reduction trim variant — distinct hardware from the standard-trim figures.
mediaStatus: unreviewed
```

```yaml
id: fes-cmp-whisperflo-cage-assembly
teaches: >
  Fisher ES valve assembly with WhisperFlo cage and optional drain plug,
  numbered-callout.
concept-tags: [WhisperFlo cage, drain plug, cavitation/noise trim, parts identification]
status: current
source:
  - doc: Fisher ES and EAS easy-e Valves IM (D100397X012)
    locator: "Figure 16 'Fisher ES Valve Assembly with WhisperFlo Cage with Optional Drain Plug,' p. 36"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Last figure in the manual — the WhisperFlo cavitation-control cage variant.
mediaStatus: unreviewed
```

## Open Items

- **Full coverage: 16 figures, Figures 1–16, no gaps.** Located via a full-
  text scan of all 40 pages plus direct rendering and visual inspection of
  every page carrying a figure (pp. 1, 6, 9–12, 28–30, 32–36). No figure
  was catalogued from text extraction alone.
- **Table exclusion confirmed.** 15 numbered tables (Table 1 through
  Table 15) found across the manual — specifications, torque values,
  shutoff classifications, parts kits and parts lists — all excluded per
  the standing figures-only rule; none carry a "Figure" caption.
- **No duplicate figure numbers, no source citation errors found.**
- **No low-confidence flags** — every figure's identity, caption, and page
  were confirmed by direct visual inspection; no caption or heading was
  inferred.
- **Cross-reference check against 14101's indexes and the Control Valve
  Handbook:** checked `Component Index — 14101 ch1-ch2.md` and `ch3.md`
  directly. 14101's real citations into "easy-e" content are frequent (ES,
  EAS mentioned 8 times) but almost all route through the "Legacy 14101
  deck" or a generic "Fisher easy-e IM" citation without a specific figure
  number pinned down — not precise enough to merge with any one record
  above as a confirmed same-figure match. No figure-level duplicate found;
  no id collision.
- **Three probable but unconfirmed cross-document relationships flagged,
  not resolved:** Figures 9–12 (HIGH-SEAL/ENVIRO-SEAL packing systems)
  likely relate to the dedicated ENVIRO-SEAL (D101642X012) and HIGH-SEAL
  (D101453X012) instruction manuals, both catalogued in this same batch by
  a parallel pass — flagged in each record's own notes rather than
  cross-referenced by id, since that pass's real ids weren't available at
  the time this file was written. Worth a short follow-up pass once all of
  this batch lands, to confirm or rule out same-source-figure overlap.
- **No archive or legacy material** was found or consulted — the September
  2025 IM is the sole and sufficient source for all 16 figures.
