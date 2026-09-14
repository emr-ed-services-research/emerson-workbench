---
title: Component Index — Fisher 846 Electro-Pneumatic Transducer
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012, June 2025)
chapter: whole document — numbered sections, flat figure numbering
updated: 2026-09-13
---

# Component Index — Fisher 846 Electro-Pneumatic Transducer

Cataloging pass for one of the three Fisher electro-pneumatic transducer
manuals acquired for the 17101 gap-analysis (17101 is a live, currently-taught
course whose real citations drove this acquisition; it is also an unconverted
legacy PPTX deck, so `used-by` is `[]` throughout — no real Component Index
citations exist for it yet). Document-grain, per
`Component Index — Process & Standards.md`: whole document is the bounded
unit, no `ch<N>` suffix.

Numbered-hybrid structure, confirmed by direct inspection: real numbered
sections (`Section 1: Introduction`, `1.1`–`1.3`, `Section 2: Installation`,
`2.4`, `Section 3: Calibration`, `Section 4: Principle of Operation`, `4.4`,
`Section 5: Troubleshooting`, `5.1`–`5.3`, `Section 6: Maintenance`,
`6.1`–`6.5`, `Section 7: Parts Ordering`, `7.2`) but figures are numbered
flatly throughout (Figure 1–Figure 24, no per-section reset). Grouping
headers below use the numbered section/subsection form, per the directive
for this manual.

Every page carrying a figure was rendered as an image (150 dpi) and visually
inspected — 24 of 24 figures confirmed against the rendered page, not from
text extraction alone. All 6 tables (Specifications, EMC Immunity
Performance Criteria, I/P Rangeability Matrix, O-ring Sizes, Parts Kit, Parts
List) were confirmed genuinely tabular via a precise caption sweep and
correctly excluded, not rendered.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher 846 Electro-Pneumatic Transducer IM** | D102005X012 · June 2025 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Section 1 — Introduction (printed pp. 1, 7)

```yaml
id: f846-cmp-transducer-photo
teaches: >
  A complete Fisher 846 electro-pneumatic transducer — the whole-unit
  overview photo opening the manual.
concept-tags: [846, electro-pneumatic transducer, transducer overview]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 1 'Fisher 846 Electro-Pneumatic Transducer,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing X0234.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-modular-construction
teaches: >
  The 846's field-replaceable modular construction — the module final
  assembly concept that lets the whole active electronics/pneumatics
  package be swapped as one unit.
concept-tags: [846, modular construction, module final assembly]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 2 'Transducer Modular Construction,' p. 7"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6643.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-equivalent-circuit
teaches: >
  The 846's equivalent electrical circuit — a 6V DC circuit with a
  50-ohm resistor.
concept-tags: [846, equivalent circuit, electrical loop]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 3 'Equivalent Circuit,' p. 7"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing A6325. Checked directly against the 646 manual's Figure 6
  (drawing A6013, 23-ohm/0.7V-zener design) and the i2P-100 manual's
  Figure 9 (no drawing number visible, 4V/40-ohm design) — all three
  transducers use genuinely distinct circuit topologies; not a shared
  drawing.
mediaStatus: unreviewed
```

### Section 2 — Installation (printed pp. 8–17)

```yaml
id: f846-cmp-dimensions-connections-aluminum
teaches: >
  Full typical dimensions and connection locations for the 846
  (aluminum construction shown).
concept-tags: [846, dimensions, connections, aluminum construction]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 4 'Typical Dimensions and Connection Locations (Aluminum Construction Shown),' p. 11"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing B2473-1. Notes on the figure reference Figure 8 for ATEX/IECEx-specific dimensions.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-dimensions-67cfr-gauges
teaches: >
  Typical dimensions for the 846 mounted with a Fisher 67CFR
  filter/regulator and supply/output gauges.
concept-tags: [846, 67CFR filter regulator, gauges, dimensions]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 5 'Typical Dimensions with Fisher 67CFR Filter/Regulator and Gauges,' p. 12"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings 14B7361-D and A6626-3.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-mounting-universal-bracket
teaches: >
  Typical 846 mounting using the universal mounting bracket (spans a
  two-page continuation).
concept-tags: [846, universal mounting bracket, mounting]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 6 'Typical Transducer Mounting with Universal Mounting Bracket,' pp. 13–14 (continued)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawings 14B7332, 19B9484-B, and E0786. **Internal drawing-number
  reuse, same document:** base drawing number 14B7332 also appears
  (as 14B7332-D) on this manual's own Figure 7
  (`f846-cmp-dimensions-with-gauges`) — confirmed by direct visual
  comparison, both kept as separate records per standing precedent
  (e.g. the ENVIRO-SEAL rotary manual's Figure 3/Figure 7 sharing
  drawing 3289116-B).
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-dimensions-with-gauges
teaches: >
  Typical 846 transducer dimensions when fitted with gauges.
concept-tags: [846, dimensions, gauges]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 7 'Typical Transducer Dimensions with Gauges,' p. 15"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawings 14B7332-D and E0776. **Internal drawing-number reuse, same
  document:** shares base drawing number 14B7332 with this manual's
  own Figure 6 (`f846-cmp-mounting-universal-bracket`) — see that
  record's notes.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-dimensions-atex-iecex
teaches: >
  846 transducer dimensions specific to ATEX/IECEx flameproof
  certified units.
concept-tags: [846, ATEX, IECEx, flameproof, dimensions]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 8 'Transducer Dimensions with ATEX / IECEx Flameproof Certifications,' p. 15"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing B2465.
mediaStatus: unreviewed
```

### Section 3 — Calibration (printed pp. 19–26)

```yaml
id: f846-cmp-calibration-source-connection
teaches: >
  How to connect a current or voltage source (two panels) for
  calibrating the 846.
concept-tags: [846, calibration, current source, voltage source]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 9 'Connecting a Current or Voltage Source for Calibration,' p. 19 — two panels (current source, voltage source)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6644-1. Cross-references Figure 18 (circuit board jumper positions) within the same document.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-functional-parts-block-diagram
teaches: >
  The 846's functional parts block diagram — how the converter
  module, pilot stage, booster stage, and relay stages connect.
concept-tags: [846, functional block diagram, converter module, booster stage]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 10 'Functional Parts Block Diagram,' p. 26"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6324-1.
mediaStatus: unreviewed
```

### Section 4 — Principle of Operation (printed pp. 26–29)

```yaml
id: f846-cmp-deflector-nozzle-operation
teaches: >
  Deflector/nozzle pilot-stage operation for direct-action units, in
  two states (High Output Pressure / Low Output Pressure) — explains
  the direct- vs. reverse-acting fail-safe behavior.
concept-tags: [846, deflector, nozzle, pilot stage, direct action, fail-safe]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 11 'Deflector/Nozzle Pilot Stage Operation (Direct Action),' p. 28 — two states"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6645. Deflector is tungsten carbide; nozzles are 316 stainless steel, per body text.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-deflector-nozzle-detail
teaches: >
  A close detail view of the deflector/nozzle pilot stage geometry.
concept-tags: [846, deflector, nozzle, pilot stage, detail view]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 12 'Detail of Deflector/Nozzle Pilot Stage,' p. 29"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing W6287.
mediaStatus: unreviewed
```

### Section 5 — Troubleshooting (printed pp. 29–34)

```yaml
id: f846-cmp-frequency-counter-wiring
teaches: >
  Wiring connections for using a frequency counter to read the 846's
  optional Remote Pressure Reading (RPR) signal, plus the equations
  and worked example for converting frequency to pressure.
concept-tags: [846, remote pressure reading, RPR, frequency counter, wiring]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 13 'Wiring Connections for Frequency Counter,' p. 31"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing B2466.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-field-troubleshooting-flowchart
teaches: >
  The complete field troubleshooting flowchart for the 846, covering
  both control-room and in-field diagnostic paths.
concept-tags: [846, troubleshooting, flowchart, field diagnostics]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 14 'Field Troubleshooting Flowchart,' p. 32"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing C0789. Large, dense reference flowchart — unlikely to fit a plain crop at readable size; a template/redraw decision would be needed first if ever cited.
mediaStatus: unreviewed
```

### Section 6.1 — Module Final Assembly (printed pp. 37–40)

```yaml
id: f846-cmp-transducer-exploded-view
teaches: >
  The full labelled exploded view of the 846 transducer's three major
  subassemblies — electronic circuit board, pilot/actuator assembly,
  and module subassembly — plus the housing, terminal cover, and
  module cover.
concept-tags: [846, exploded view, module final assembly, electronic circuit board, pilot actuator assembly]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 15 'Fisher 846 Exploded View,' p. 38"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing C0790. The reference figure for the whole Maintenance section's module-level disassembly/reassembly procedures.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-alignment-key-module-cover
teaches: >
  The module alignment key and indicating boss above the module cover
  — the visual reference for correctly orienting the module final
  assembly before removal.
concept-tags: [846, alignment key, module cover, indicating boss]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 16 'Alignment Key Above Module Cover,' p. 40"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6649.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-removing-module-final-assembly
teaches: >
  The two-step motion for removing the module final assembly from the
  module cover (push toward the indicating boss while lifting the
  opposite foot).
concept-tags: [846, module final assembly, removal procedure, module cover]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 17 'Removing the Module Final Assembly from the Module Cover,' p. 40"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6650.
mediaStatus: unreviewed
```

### Section 6.2 — Electronic Circuit Board (printed p. 42)

```yaml
id: f846-cmp-circuit-board-jumper-positions
teaches: >
  The two configurable jumpers on the 846's electronic circuit board —
  high/low range and RPR on/off — and their physical positions.
concept-tags: [846, circuit board jumpers, range selection, RPR jumper]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 18 'Circuit Board Jumper Positions,' p. 42"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6652. Directly referenced by both the Calibration section (Figure 9) and the RPR troubleshooting procedure.
mediaStatus: unreviewed
```

### Section 6.3 — Pilot/Actuator Assembly (printed pp. 44–45)

```yaml
id: f846-cmp-pilot-actuator-bottom-view
teaches: >
  The bottom view of the 846 pilot/actuator assembly, showing the
  alignment key, rubber diaphragm (color-coded direct/reverse action),
  and mounting screws.
concept-tags: [846, pilot actuator assembly, rubber diaphragm, direct action, reverse action]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 19 'Pilot/Actuator Assembly (Bottom View),' p. 44"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6654.
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-cleaning-nozzles
teaches: >
  How to clean the pilot-stage nozzles on the 846 — inserting a wire
  from the outside into each nozzle separately, without disturbing the
  deflector bar.
concept-tags: [846, nozzle cleaning, pilot stage, maintenance procedure]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 20 'Cleaning the Nozzles,' p. 45"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6655-1.
mediaStatus: unreviewed
```

### Section 6.5 — Terminal Compartment (printed p. 47)

```yaml
id: f846-cmp-terminal-compartment-exploded
teaches: >
  The exploded view of the 846's terminal compartment — test pins,
  terminal block, terminal block connection board, zero/span screws,
  grounding lug, and electrical feedthroughs.
concept-tags: [846, terminal compartment, terminal block, feedthroughs, grounding lug]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 21 'Terminal Compartment Exploded View,' p. 47"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6656.
mediaStatus: unreviewed
```

### Section 7.2 — Parts List (printed pp. 50–51)

```yaml
id: f846-cmp-supply-gauge
teaches: >
  The 846's supply gauge — dimensioned front and side views with
  thread callouts.
concept-tags: [846, supply gauge, parts list]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 22 'Supply Gauge,' p. 50"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: No drawing number visible on the figure. Referenced by Table 6 (Parts List, not catalogued).
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-output-gauge
teaches: >
  The 846's output gauge — dimensioned front and side views with
  thread callouts.
concept-tags: [846, output gauge, parts list]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 23 'Output Gauge,' p. 50"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: No drawing number visible on the figure. Referenced by Table 6 (Parts List, not catalogued).
mediaStatus: unreviewed
```

```yaml
id: f846-cmp-exploded-parts-drawing
teaches: >
  The full numbered exploded parts drawing for the 846, the reference
  the Parts List (Table 6) key numbers are keyed to.
concept-tags: [846, exploded parts drawing, parts list]
status: current
source:
  - doc: Fisher 846 Electro-Pneumatic Transducer IM (D102005X012)
    locator: "Figure 24 'Exploded Parts Drawing (also see Table 6),' p. 51"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing GE89695.
mediaStatus: unreviewed
```

## Open Items

- **Scope confirmed by direct inspection.** All pages carrying a figure were rendered (150 dpi) and read directly — PDF pages 4, 10, 14–18, 22, 29, 31–32, 41, 43, 45, 47–48, 50, 53–54 (printed pp. 1, 7, 11–15, 19, 26, 28–29, 31–32, 38, 40, 42, 44–45, 47, 50–51). Document-grain file, no `ch<N>` suffix. 24 of 24 figures confirmed.
- **Numbered-hybrid structure confirmed by direct inspection** — real numbered sections (Section 1 through Section 7, with decimal subsections) but flat figure numbering (Figure 1–24, no per-section reset). PDF-to-printed page offset confirmed as +3 (PDF page = printed page + 3) via footer page numbers on multiple rendered pages.
- **Table exclusion confirmed.** All 6 tables (1. Specifications, 2. EMC Immunity Performance Criteria, 3. I/P Rangeability Matrix, 4. O-ring Sizes, 5. Parts Kit, 6. Parts List) located via a precise line-anchored caption sweep and correctly excluded — none carry a "Figure" caption.
- **Two internal drawing-number-reuse findings, both confirmed by direct visual comparison and kept as separate records:** Figure 6 and Figure 7 share base drawing number 14B7332; no other internal duplicates found.
- **False-alarm apparent duplicate "Figure 2" caption, investigated and resolved.** An initial loose text sweep suggested two Figure 2 captions; direct rendering confirmed the second apparent occurrence was inline body text ("...as shown in Figure 2. The circuit contains...") not a real second caption. Only one genuine Figure 2 exists. Resolved by the standing render-and-look discipline, not assumed.
- **Required cross-manual visual overlap check (846 vs. 646 vs. i2P-100), performed and reported here in full — see also the 646 and i2P-100 files' own Open Items.** No overlap found: none of this manual's 24 drawing numbers appear in either the 646 or i2P-100 manuals, and none of 646's or i2P-100's drawing numbers appear here. The 846 uses an entirely distinct, self-contained drawing-number series throughout — consistent with it being a mechanically different, modular-construction product line from the simpler 646/i2P-100 platform (which do share several drawings with each other; see the 646 and i2P-100 files).
- **Cross-reference check against the rest of the library, confirmed clean.** Searched all existing `Component Index*.md` files for every one of this manual's 24 drawing numbers — no matches outside this batch's own three files.
- **id-collision sweep run before and after minting** — clean both times except the two known, pre-existing, out-of-scope Oil & Gas Sourcebook collisions (`ogas-cmp-amine-treatment-unit`, `ogas-cmp-compressor-system`).
- **No low-confidence flags** — every figure directly confirmed against its rendered page.
- **No citation errors found** within this manual.
- **`used-by: []` throughout** — 17101 (the course whose gap analysis drove this acquisition) is an unconverted legacy PPTX deck with no real Component Index citations yet.
- **No archive or legacy material** was found or consulted — the manual is `current` throughout.
