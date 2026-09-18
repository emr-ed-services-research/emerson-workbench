---
title: Subject-Matter Index — Fisher 9500 Butterfly Valve
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher 9500 Butterfly Control Valve IM (D100380X012, February 2019)
chapter: whole document — no chapter structure
updated: 2026-09-19
---

# Subject-Matter Index — Fisher 9500 Butterfly Control Valve

Standing full-chapter cataloging pass, part of the "index all Technical
Publications manuals" directive (Franz, 2026-09-19) — deliberately ahead of
individual course citations ("demand signal here is Franz added it to the
library," not a course citation; zero real citations to this manual exist
anywhere in the vault as of this pass). Document-grain, per
`Subject-Matter Index — Process & Standards.md`: no numbered chapter structure,
whole 20-page document is the bounded unit.

Every page was rendered as an image (150dpi) and visually inspected. Figures
numbered flatly (`Figure 1`–`Figure 7`), no chapter prefix.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher 9500 Butterfly Control Valve IM** | D100380X012 · February 2019 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Introduction (printed p. 1)

```yaml
id: f9500-cmp-valve-actuator-overview
teaches: >
  A complete Fisher 9500 butterfly valve assembly with a 1052 rotary
  actuator and DVC6200 digital valve controller mounted — the whole-unit
  overview the rest of the manual's adjustment and disassembly procedures
  assume the reader has seen.
concept-tags: [9500, butterfly valve, rotary actuator, DVC6200, valve overview]
status: current
source:
  - doc: Fisher 9500 Butterfly Control Valve IM (D100380X012)
    locator: "Figure 1 'Fisher 9500 Valve with 1052 Actuator and DVC6200 Digital Valve Controller,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo, unlabelled — a real cross-document assembly (9500 + 1052 + DVC6200), not this manual's own hardware alone.
mediaStatus: unreviewed
```

### Installation (printed pp. 4–5)

```yaml
id: f9500-cmp-valve-shaft-marking
teaches: >
  How to read the disk-position/shaft-marking geometry on a splined valve
  shaft: nose/leading edge of disk, tail of FISHTAIL disk, location of the
  flat spot, and the index mark used to confirm the disk is fully closed
  by measuring equal clearance top and bottom.
concept-tags: [9500, valve shaft marking, FISHTAIL disk, splined shaft, index mark, disk position]
status: current
source:
  - doc: Fisher 9500 Butterfly Control Valve IM (D100380X012)
    locator: "Figure 2 'Valve Shaft Marking,' p. 4 — labelled (Nose or Leading Edge of Disk, Location of Flat Spot on Valve Shaft, Location of Index Mark on End of Valve Shaft, Tail of FISHTAIL Disk; numbered notes on equal-measurement check and flat-spot/nose alignment)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Directly referenced later in the manual's own Linkage-adjustment procedure (p. 8) as the fully-closed-position check.
mediaStatus: unreviewed
```

```yaml
id: f9500-cmp-partial-oring-location
teaches: >
  Where the partial O-rings sit on the valve liner faces, and the
  distinction between liner face-to-face and metal face-to-face
  dimensions — the geometry the installation procedure's mating-flange
  clearance check (Table 3) depends on.
concept-tags: [9500, partial O-ring, liner, face-to-face dimension, installation]
status: current
source:
  - doc: Fisher 9500 Butterfly Control Valve IM (D100380X012)
    locator: "Figure 3 'Partial O-Ring Location,' p. 5 — labelled (Partial O-Ring, Liner Face-to-Face, Metal Face-to-Face)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Referenced directly by the installation procedure's step on pipeline-flange spacing.
mediaStatus: unreviewed
```

### Adjustments (printed pp. 7–8)

```yaml
id: f9500-cmp-grounding-assembly
teaches: >
  The grounding-strap assembly between the two thrust-plate cap screws on
  the actuator end plate — the hardware the hub-seal adjustment procedure
  (alternating 1/4-turn tightening) works around.
concept-tags: [9500, grounding assembly, hub seal, thrust-plate cap screw, actuator end plate]
status: current
source:
  - doc: Fisher 9500 Butterfly Control Valve IM (D100380X012)
    locator: "Figure 4 'Grounding Assembly,' p. 7 — labelled (Actuator End Plate; keys 130, 131)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Two-key diagram, keys resolved in the manual's own parts list (not reproduced in this record).
mediaStatus: unreviewed
```

```yaml
id: f9500-cmp-tandem-linkage-three-way
teaches: >
  Tandem-linkage geometry for a three-way valve assembly on splined
  shafts: power valve, slave valve, connecting rod assembly, and the
  rotary actuator housing — how adjusting the linkage keeps both valve
  disks synchronized.
concept-tags: [9500, tandem linkage, three-way valve, connecting rod, slave valve, power valve]
status: current
source:
  - doc: Fisher 9500 Butterfly Control Valve IM (D100380X012)
    locator: "Figure 5 'Tandem Linkage Adjustment for Three-Way Valve Assemblies,' p. 8 — labelled (Rotary Actuator Housing, Power Valve, Connecting Rod Assembly, Slave Valve, Flow arrows ×3)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Explicitly scoped to splined valve shafts only (labelled on the figure itself).
mediaStatus: unreviewed
```

### Actuator Mounting (printed p. 15)

```yaml
id: f9500-cmp-splined-shaft-mounting-matrix
teaches: >
  The full disk/mounting/style/position reference matrix for correctly
  indexing a splined actuator shaft to the valve shaft: FISHTAIL (4
  mounting/style combinations) and Conventional (2 combinations) disks,
  each across 4 actuator mounting positions — the definitive lookup for
  "which spline position gives the correct valve action," plus a
  typical-actuator sectional view naming the actuator rod, lever, and
  index marks the matrix's small diagrams assume the reader recognizes.
concept-tags: [9500, splined shaft, actuator mounting, FISHTAIL, conventional disk, index mark, mounting position]
status: current
source:
  - doc: Fisher 9500 Butterfly Control Valve IM (D100380X012)
    locator: "Figure 6 'Splined-Shaft Index Mark Alignment for Standard Mounting Position-Valve Action Combinations,' p. 15 — labelled sectional (Typical Actuator, Fisher 1061: Actuator Housing Cover, Actuator Rod, Actuator Rod End Bearing, Actuator Lever, Lever Index Marks, Valve Shaft Index Mark) plus a full disk-type/mounting/style/position reference table with small per-cell diagrams"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The single most complex figure in this manual — a labelled sectional
  view combined with a large reference matrix, not a simple photo or
  cutaway. If this is ever placed on a slide, it is very unlikely to fit
  as a single crop at readable size; flag for a template/redraw decision
  rather than assuming a plain crop works, should this manual ever be
  cited by a real course.
mediaStatus: unreviewed
```

### Parts diagram (printed p. 17)

```yaml
id: f9500-cmp-valve-body-assembly
teaches: >
  Full numbered cutaway of the Fisher 9500 valve body assembly — liner,
  disk, shaft, seals, and both-side flange hardware, 13 keys — the
  parts-ordering reference for a complete body rebuild.
concept-tags: [9500, valve body assembly, exploded view, liner, disk, shaft]
status: current
source:
  - doc: Fisher 9500 Butterfly Control Valve IM (D100380X012)
    locator: "Figure 7 'Fisher 9500 Valve Body Assembly,' p. 17 — 13-key numbered cutaway (keys 1, 2, 3, 4, 6, 9, 10, 15, 16, 17, 19, 21; key 22 noted as a part not shown)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Numbered-only callouts (no in-figure text labels) — key numbers are
  resolved in the manual's own Parts List section, not reproduced here.
  Style Guide §6.3 would need the parts-list key/description pairing
  carried alongside this figure if it's ever placed on a slide.
mediaStatus: unreviewed
```

## Open Items

- **Scope confirmed by direct inspection.** All 20 pages rendered (150dpi) and read directly. No numbered chapter/section structure — house structure only (Introduction/Description, Installation, Adjustments, Maintenance, Actuator Mounting, Changing Disk Rotation and Action, Parts Ordering, Parts List) — document-grain file.
- **Full coverage: 7 figures (Figure 1–Figure 7), no gaps.** Located via a full-text sweep for `Figure [0-9]` across the whole document (pages 1, 4, 5, 7, 8, 15, 17), then every one visually confirmed against its rendered page.
- **Table exclusion confirmed.** Table 3 (mating flange diameters) and all parts-list tables correctly excluded — none carry a "Figure" caption.
- **No duplicate figure numbers, no source citation errors found** in this manual.
- **No low-confidence flags** — every figure directly confirmed against its rendered page. Figure 6 and Figure 7 use numbered-only callouts resolved elsewhere in the manual's own parts list; this is the manual's own convention, not a confidence gap.
- **Cross-reference check, confirmed clean.** Checked the Control Valve Handbook (all 15 chapters, especially ch3's rotary/butterfly-valve content and ch10's isolation valves), the Oil & Gas Sourcebook, `Subject-Matter Index — 14101 ch1-ch2.md`, `Subject-Matter Index — 14101 ch3.md`, and `Subject-Matter Index — bench-set-657.md` — no figure-level overlap found. This is genuinely product-specific hardware (the Fisher 9500's own liner/disk/shaft construction) distinct from the Handbook's generic rotary-valve illustrations.
- **No archive or legacy material** was found or consulted — the manual is `current` throughout.
- **Zero real course citations exist for this manual as of this pass** — cataloguing this ahead of demand is deliberate, per this directive's own stated basis (Franz added it to the library).
