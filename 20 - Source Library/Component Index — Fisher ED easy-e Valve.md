---
title: Component Index — Fisher ED easy-e Valve
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher ED and EAD easy-e Valves Instruction Manual (D100390X012, February 2026)
chapter: whole document — no chapter structure
updated: 2026-09-19
---

# Component Index — Fisher ED and EAD easy-e Valves Instruction Manual

Standing full-chapter cataloging pass (document grain), part of the "index
all Technical Publications manuals" directive (Franz, 2026-09-19). Matches
the rigor of every prior pass: all 52 pages rendered as images (Poppler,
130dpi) and visually inspected — no figure catalogued from text extraction
alone.

**Real manual title: "Fisher ED and EAD easy-e Valves"** — not just "ED,"
per the manual's own cover and running headers. House structure: Section 1
Introduction (Scope, Description, Specifications, Education Services),
Section 2 Installation, Section 3 Maintenance (Packing Lubrication, Packing
Maintenance, Trim Maintenance, Retrofit/Replacement of C-seal Trim,
ENVIRO-SEAL Bellows Seal Bonnet), Section 4 Parts. Named sections, no
chapter numbers, confirmed against the manual's own real Table of Contents.

**Real page range:** 52 PDF pages, content begins printed p.1 = PDF p.3
(printed page = PDF page − 2 throughout). Figures numbered flatly (Figure 1
through Figure 24), confirmed against the manual's own captions — 25
`Figure N.` string matches found by a raw text sweep, but only 24 are real
captions; the extra hit is a body-text sentence ending in "...Figure 7."
(a cross-reference, not a caption), confirmed by direct inspection.

**Real source document error found, flagged not corrected:** Section 1.1
"Scope of the Manual" reads "This instruction manual includes installation,
maintenance and parts information for NPS 1/2 through 8 Fisher ES valves
and NPS 1 through 6 EAS valves, through CL600 ratings" — this is the ES/EAS
manual's (D100397X012) own scope text, apparently carried over unedited
into this ED/EAD manual (D100390X012). Every other page, header, and figure
caption in this document correctly names ED/EAD. Not corrected here — this
is the source document's own real printed error, reproduced as printed
practice dictates.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher ED and EAD easy-e Valves IM** | D100390X012 · February 2026 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Section 1: Introduction (printed p. 1)

```yaml
id: fed-cmp-ed-valve-667-actuator-photo
teaches: >
  A complete Fisher ED valve assembly with a 667 diaphragm actuator mounted
  — the manual's own opening reference photo.
concept-tags: [ED valve, EAD valve, easy-e, 667 actuator, assembled valve photo]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 1 'Fisher ED Valve with 667 Actuator,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo, unlabelled except drawing number (W1916-2).
mediaStatus: unreviewed
```

### Section 3.1/3.2: Packing Lubrication and Maintenance (printed pp. 7–13)

```yaml
id: fed-cmp-lubricator-isolating-valve
teaches: >
  Optional lubricator and lubricator/isolating valve accessories for
  introducing lubricant to the packing under pressure.
concept-tags: [lubricator, isolating valve, packing lubrication, accessory]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 2 'Lubricator and Lubricator/Isolating Valve (Optional),' p. 7"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same drawing numbers (10A9421-A, AJ5428-D, A0832-2) as
  `fes-cmp-lubricator-isolating-valve` in `Component Index — Fisher ES-EAS
  easy-e Valves.md` — confirmed the same real physical figure, reused
  across the easy-e manual family (a generic accessory, not
  ED/EAD-specific). Kept as a separate record here since this pass
  catalogues per-manual, matching the standing file convention — not
  merged into one shared record.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-ptfe-vring-packing-arrangements
teaches: >
  PTFE V-ring packing arrangements for plain and extension bonnets, single
  and double, across the stem-size range — fully labelled, same structure
  as the ES/EAS manual's equivalent figure.
concept-tags: [PTFE V-ring, packing arrangement, plain bonnet, extension bonnet]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 3 'PTFE V-Ring Packing Arrangements for Plain and Extension Bonnets,' p. 9"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same family as `fes-cmp-ptfe-vring-packing-arrangements` (ES/EAS manual)
  but a distinct drawing (bottom assembly drawing number C0783 here vs.
  B2427 there) — a related but not confirmed-identical figure; not merged.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-ptfe-composition-packing-detail
teaches: >
  Detail of PTFE/composition double packing arrangements for plain and
  extension bonnets across the stem-size range.
concept-tags: [PTFE packing, composition packing, double arrangement, lantern ring]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 4 'Detail of PTFE/Composition Packing Arrangements for Plain and Extension Bonnets,' p. 11"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing numbers (12A8088-A, 12A7815-A, 12A8173-A, A5904) distinct from ES/EAS's equivalent Figure 5 — a related but different real figure, not the same source drawing.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-graphite-ribbon-packing-detail
teaches: >
  Graphite ribbon/filament packing for plain or extension bonnets, single
  and double arrangements, across the stem-size range.
concept-tags: [graphite ribbon packing, graphite filament packing, plain bonnet, extension bonnet]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 5 'Graphite Ribbon/Filament Packing for Plain or Extension Bonnets,' p. 13"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same sacrificial-zinc-washer note pattern as the ES/EAS manual's equivalent figure; distinct drawing numbers.
mediaStatus: unreviewed
```

### Section 3.4: Retrofit — Installing C-seal Trim (printed pp. 19–22)

```yaml
id: fed-cmp-c-seal-trim-flow-orientation
teaches: >
  C-seal plug seal orientation for flow-up vs. flow-down construction, and
  a Cavitrol III 2-stage cage variant — the C-seal trim is ED/EAD-specific
  hardware not present in the ES/EAS manual.
concept-tags: [C-seal trim, flow direction, Cavitrol III, plug seal orientation]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 6 'Fisher ED with C-seal Trim,' p. 19 — numbered-callout cutaway, two flow orientations plus a Cavitrol III 2-stage panel"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: C-seal trim is a real ED/EAD-specific construction, no ES/EAS equivalent found.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-c-seal-installation-tool-dimensions
teaches: >
  Dimensioned drawing of the C-seal plug seal installation tool — the
  specification a shop could use to manufacture the tool if not ordered as
  a Fisher spare part.
concept-tags: [C-seal trim, installation tool, dimensional drawing]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 7 'C-seal Plug Seal Installation Tool,' p. 22"
delivery: analytical/dimensional diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Pure dimensional drawing (diameters, angles, tolerances), not a nomenclature figure.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-c-seal-installation-using-tool
teaches: >
  Installing the C-seal plug seal onto the valve plug using the
  installation tool, until the tool contacts the plug's horizontal
  reference surface.
concept-tags: [C-seal trim, installation tool, valve plug, procedure]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 8 'Installing the C-seal Plug Seal Using the Installation Tool,' p. 22"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled cutaway, flow-down orientation shown.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-c-seal-stake-threads
teaches: >
  Staking the threads of the C-seal retainer after installation — deforming
  the thread to lock the retainer in place, shown with the piston ring and
  valve plug in context.
concept-tags: [C-seal trim, retainer, thread staking, piston ring]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 9 'Stake the Threads of the C-seal Retainer,' p. 23"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Paired with the CAUTION about never reusing an old valve stem with a new plug.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-c-seal-seating-surfaces
teaches: >
  The two real seating surfaces on a C-seal construction — lower (valve
  plug to seat ring) and upper (C-seal plug seal to cage) — shown together
  so the reader understands both must be inspected/machined together.
concept-tags: [C-seal trim, seating surface, seat ring, cage]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 10 'Lower (Valve Plug to Seat Ring) and Upper (C-seal Plug Seal to Cage) Seating Surfaces,' p. 23"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Two-panel schematic, referenced repeatedly by later procedure steps.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-c-seal-remachining-example
teaches: >
  A worked, dimensioned example of remachining the lower and upper seating
  surfaces together (0.254mm from plug, 0.254mm from seat ring, 0.508mm
  from the upper seating surface in the cage) — the critical constraint
  that upper-surface machining must equal the total of the lower-surface
  machining, or the retainer strikes the upper seat before the plug seats.
concept-tags: [C-seal trim, remachining, seating surface, dimensional tolerance]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 11 'Example of Machining the Lower (Valve Plug to Seat Ring) and Upper (C-seal Plug Seal to Cage) Seating Surfaces,' p. 24 — dimensioned example, example values only per the source's own note"
delivery: analytical/dimensional diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  Real worked-example content with a genuine "values are for example only"
  caveat printed on the source itself — reproduce that caveat if ever
  cited on a slide.
mediaStatus: unreviewed
```

### Section 3.6: ENVIRO-SEAL Bellows Seal Bonnet (printed pp. 29–35)

```yaml
id: fed-cmp-ptfe-packing-enviroseal-bellows
teaches: >
  PTFE packing arrangement for ENVIRO-SEAL bellows seal bonnets, single and
  double, across the stem-size range.
concept-tags: [PTFE packing, ENVIRO-SEAL, bellows seal bonnet]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 12 'PTFE Packing Arrangement for Use in ENVIRO-SEAL Bellows Seal Bonnets,' p. 29"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same packing family as ES/EAS's Figure 4, distinct drawing numbers — related, not confirmed identical.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-graphite-ribbon-enviroseal-double
teaches: >
  Double graphite ribbon/filament packing arrangement for ENVIRO-SEAL
  bellows seal bonnets, across the stem-size range.
concept-tags: [graphite ribbon packing, ENVIRO-SEAL, bellows seal bonnet]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 13 'Double Graphite Ribbon/Filament Arrangements for Use in ENVIRO-SEAL Bellows Seal Bonnets,' p. 30"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same packing family as ES/EAS's Figure 6, distinct drawing numbers.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-highseal-graphite-ulf-system
teaches: >
  A complete HIGH-SEAL graphite ULF packing system, fully numbered-callout.
  The manual defers full adjustment procedure to the dedicated HIGH-SEAL IM.
concept-tags: [HIGH-SEAL, graphite ULF, live-loaded packing, packing system]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 14 'Typical HIGH-SEAL Graphite ULF Packing System,' p. 33"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing number (39B4153-A) to `fes-cmp-highseal-graphite-ulf-system`
  in the ES/EAS index — confirmed the exact same real source figure,
  reused verbatim across the easy-e family (generic HIGH-SEAL system, not
  ED/EAD-specific). Kept as a separate record per this pass's per-manual
  file convention.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-enviroseal-ptfe-system
teaches: >
  A complete ENVIRO-SEAL packing system with PTFE packing, labelled.
concept-tags: [ENVIRO-SEAL, PTFE packing, packing system]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 15 'Typical ENVIRO-SEAL Packing System with PTFE Packing,' p. 34"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing number (A6297-1) to `fes-cmp-enviroseal-ptfe-system` in
  the ES/EAS index — same real source figure, confirmed reused verbatim.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-enviroseal-graphite-ulf-system
teaches: >
  ENVIRO-SEAL packing system with graphite ULF packing, labelled.
concept-tags: [ENVIRO-SEAL, graphite ULF, packing system, guide bushing]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 16 'Typical ENVIRO-SEAL Packing System with Graphite ULF Packing,' p. 34"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing number (39B4612/A) to `fes-cmp-enviroseal-graphite-ulf-system`
  in the ES/EAS index — same real source figure, confirmed reused verbatim.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-enviroseal-duplex-system
teaches: >
  ENVIRO-SEAL packing system with duplex packing, numbered-callout.
concept-tags: [ENVIRO-SEAL, duplex packing, packing system]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 17 'Typical ENVIRO-SEAL Packing System with Duplex Packing,' p. 35"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing number (A6722) to `fes-cmp-enviroseal-duplex-system` in
  the ES/EAS index — same real source figure, confirmed reused verbatim.
mediaStatus: unreviewed
```

### Section 3.3: Trim Maintenance — Bonnets (printed p. 40)

```yaml
id: fed-cmp-typical-bonnets
teaches: >
  Four bonnet constructions: plain bonnet, a detail of 127mm/5-in. yoke
  boss actuator bolting, an ENVIRO-SEAL bellows seal bonnet, and a style
  1/2 extension bonnet — numbered-callout, keyed to the manual's own parts
  table.
concept-tags: [bonnet, plain bonnet, extension bonnet, ENVIRO-SEAL bellows seal bonnet, yoke boss]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 18 'Typical Bonnets,' p. 40"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Identical drawing numbers (E0201, 30A9425-A, CU3911-C, 42B3947-A) to
  `fes-cmp-typical-bonnets` in the ES/EAS index — same real source figure,
  confirmed reused verbatim.
mediaStatus: unreviewed
```

### Parts illustrations, cross-referenced from Section 4 Parts (printed pp. 43–48)

```yaml
id: fed-cmp-ed-ead-valve-standard-nps1-6
teaches: >
  Standard NPS 1 through 6 Fisher ED and EAD valves, three configurations:
  full-capacity ED, seat-ring-style EAD with restricted trim, and a detail
  of liner-style EAD — numbered-callout.
concept-tags: [ED valve, EAD valve, full-capacity trim, restricted trim, liner-style, parts identification]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 19 'Standard NPS 1 through 6 Fisher ED and EAD Valves,' p. 43 — 3-panel numbered-callout parts cutaway"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: The densest parts-identification figure in this manual — three genuinely distinct constructions, not repeats.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-ed-valve-nps8-graphite-piston-ring
teaches: >
  NPS 8 Fisher ED valve with graphite piston ring and optional drain plug,
  single and typical-multiple piston ring assemblies.
concept-tags: [ED valve, NPS 8, graphite piston ring, drain plug, parts identification]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 20 'NPS 8 Fisher ED Valve with Graphite Piston Ring and Optional Drain Plug,' p. 44"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Two-panel (single vs. typical multiple piston ring assembly).
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-whisper-trim-detail
teaches: >
  Whisper Trim III and Whisper NXG trim detail with optional drain plug,
  numbered-callout, two full valve-section panels.
concept-tags: [Whisper Trim III, Whisper NXG, drain plug, trim type, parts identification]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 21 'Whisper Trim III and Whisper NXG Trim Detail with Optional Drain Plug,' p. 45"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Two full numbered-callout panels, denser than the ES/EAS equivalent.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-whisperflo-cage-assembly
teaches: >
  Fisher ED valve assembly with WhisperFlo cage and optional drain plug,
  numbered-callout.
concept-tags: [WhisperFlo cage, drain plug, cavitation/noise trim, parts identification]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 22 'Fisher ED Valve Assembly with WhisperFlo Cage and Optional Drain Plug,' p. 46"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: none
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-whisperflo-cage-nps8-assembly
teaches: >
  NPS 8 Fisher ED valve assembly with WhisperFlo cage and optional drain
  plug — the NPS 8-specific variant of Figure 22.
concept-tags: [WhisperFlo cage, NPS 8, drain plug, parts identification]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 23 'NPS 8 Fisher ED Valve Assembly with WhisperFlo Cage and Optional Drain Plug,' p. 47"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Genuinely distinct hardware from Figure 22 (larger valve size), not a repeat.
mediaStatus: unreviewed
```

```yaml
id: fed-cmp-gasket-set-detail
teaches: >
  Gasket set detail with optional drain plug, restricted-trim and
  full-capacity-trim variants shown as two magnified detail circles on a
  full valve-section context image.
concept-tags: [gasket set, drain plug, restricted trim, full-capacity trim, parts identification]
status: current
source:
  - doc: Fisher ED and EAD easy-e Valves IM (D100390X012)
    locator: "Figure 24 'Gasket Set Detail with Optional Drain Plug,' p. 48"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Last figure in the manual.
mediaStatus: unreviewed
```

## Open Items

- **Full coverage: 24 figures, Figures 1–24, no gaps.** Located via a full-
  text scan of all 52 pages plus direct rendering and visual inspection of
  every page carrying a figure. A raw text sweep for `Figure N.` initially
  returned 25 hits; the extra one is a body-text sentence ending in
  "...Figure 7." (a cross-reference within the C-seal retrofit NOTE,
  repeated verbatim in two places in the manual) — confirmed by direct
  inspection, not a duplicate caption.
- **Real source document error, flagged not corrected:** Section 1.1's
  scope paragraph names the ES/EAS valve family instead of ED/EAD — see
  the top-of-file note. Everything else in the document (headers, figure
  captions, part numbers) correctly and consistently names ED/EAD.
- **Six figures confirmed as the exact same real source drawing reused
  across the easy-e manual family** (identical drawing/print numbers,
  checked directly, not assumed from similar subject matter): Figure 2
  (lubricator), Figure 14 (HIGH-SEAL system), Figure 15/16/17 (ENVIRO-SEAL
  PTFE/graphite-ULF/duplex systems), Figure 18 (typical bonnets) — each
  cross-referenced by id to its `Component Index — Fisher ES-EAS easy-e
  Valves.md` counterpart in that record's own notes. Kept as separate
  per-manual records rather than merged, per the standing one-file-per-
  document convention — a future consolidation pass could formally merge
  these into single multi-document `source:` arrays if that's judged
  worthwhile, not decided here.
- **Four further figures (3, 4, 5, 12, 13) share the same packing family as
  ES/EAS equivalents but carry distinct drawing numbers** — related but
  not confirmed identical, not merged, not cross-referenced by id (only
  noted in prose).
- **No duplicate printed figure numbers, no source citation errors found**
  beyond the Section 1.1 scope-text error already flagged.
- **No low-confidence flags** — every figure confirmed by direct visual
  inspection.
- **Table exclusion confirmed.** 20 numbered tables found (specifications,
  torque values, packing kits, parts lists) — all excluded per the
  standing figures-only rule; none carry a "Figure" caption.
- **Cross-reference check against 14101's indexes and the Control Valve
  Handbook:** checked `Component Index — 14101 ch1-ch2.md` and `ch3.md`
  directly. No specific-figure-level citation to the ED/EAD manual found
  (14101's easy-e citations concentrate on ET/EAT and generic "Fisher
  easy-e IM" references, not ED/EAD specifically) — no merge candidates,
  no id collision.
- **No archive or legacy material** was found or consulted.
