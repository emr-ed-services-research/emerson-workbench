---
title: Component Index — Fisher i2P-100 Electro-Pneumatic Transducer
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012, March 2026)
chapter: whole document — numbered sections, flat figure numbering
updated: 2026-09-13
---

# Component Index — Fisher i2P-100 Electro-Pneumatic Transducer

Cataloging pass for one of the three Fisher electro-pneumatic transducer
manuals acquired for the 17101 gap-analysis (17101 is a live, currently-taught
course whose real citations drove this acquisition; it is also an unconverted
legacy PPTX deck, so `used-by` is `[]` throughout — no real Component Index
citations exist for it yet). Document-grain, per
`Component Index — Process & Standards.md`: whole document is the bounded
unit, no `ch<N>` suffix.

Numbered-hybrid structure, confirmed by direct inspection: real numbered
sections (`Section 1: Introduction`, `Section 2: Installation`, `2.2
Mounting`, `2.4 Electrical Connections`, `Section 4: Principle of
Operation`, `Section 5: Troubleshooting`, `5.1 Troubleshooting`, `5.4 Relay
Maintenance`, `Section 6`, `6.1 Parts Kits`, `6.2 Parts List`, `6.4 Mounting
Parts`) but figures are numbered flatly throughout (Figure 1–Figure 14, no
per-section reset). No numbered "Section 3" was found anywhere in the
document — Section 2 runs continuously through Electrical Connections and
Calibration Procedure before Section 4 begins; this looks like a genuine gap
in the section numbering itself (confirmed by direct page-by-page
inspection, not a sweep artifact), not a citation error affecting any
figure or table. Grouping headers below use the numbered section/subsection
form, per the directive for this manual.

Every page carrying a figure was rendered as an image (150 dpi) and visually
inspected — 14 of 14 figures confirmed against the rendered page, not from
text extraction alone. All 15 tables were confirmed genuinely tabular and
correctly excluded, not rendered — including Table 12 ("Yoke Mounting"),
whose caption was initially missed by a text-extraction sweep and recovered
by direct rendering (see Open Items).

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher i2P-100 Electro-Pneumatic Transducer IM** | D103198X012 · March 2026 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Section 1 — Introduction (printed pp. 1, 6)

```yaml
id: fi2p100-cmp-transducer-photo
teaches: >
  A complete Fisher i2P-100 electro-pneumatic transducer — the
  whole-unit overview photo opening the manual, with the replaceable
  filter, vent, and integral pneumatic relay labelled.
concept-tags: [i2P-100, electro-pneumatic transducer, transducer overview, integral relay]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 1 'Fisher i2P-100 Electro-Pneumatic Transducer,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing W8710.
mediaStatus: unreviewed
```

```yaml
id: fi2p100-cmp-output-time-relationships
teaches: >
  The loading/exhausting output-vs-time behavior curve for the i2P-100
  transducer (% of output span against % of time), showing the
  characteristic fast-load/slow-exhaust response shape.
concept-tags: [i2P-100, output-time relationship, loading, exhausting, response curve]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 2 'Output-Time Relationships for Fisher i2P-100 Transducer,' p. 6"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-manual duplicate, confirmed by direct visual comparison.**
  Drawing A6815 — the identical generic loading/exhausting curve, same
  axes and shape, appears as the 646 manual's own Figure 2 ("Output-
  Time Relationships for Fisher 646 Transducer," `f646-cmp-output-time-
  relationships`), with only the product name changed in the figure
  title. This is a genuine shared drawing across the two sibling
  manuals, not a coincidence of similar content. Kept as two separate
  records (document-grain), cross-referenced here and in the 646
  record. Not found in the 846 manual, which has no equivalent figure.
mediaStatus: unreviewed
```

### Section 2 — Installation (printed pp. 7–18)

```yaml
id: fi2p100-cmp-mounted-667-sliding-stem
teaches: >
  An i2P-100 transducer mounted on a Size 30 667 sliding-stem actuator
  — a typical mounting configuration example.
concept-tags: [i2P-100, mounting, 667 actuator, sliding-stem]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 3 'Fisher i2P-100 Electro-Pneumatic Transducer Mounted on a Size 30 667 Sliding-Stem Actuator,' p. 9"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing W8723.
mediaStatus: unreviewed
```

```yaml
id: fi2p100-cmp-mounted-2052-rotary
teaches: >
  An i2P-100 transducer mounted on a 2052 rotary actuator with a 3610J
  positioner and V300B rotary valve — a second typical mounting
  configuration example.
concept-tags: [i2P-100, mounting, 2052 actuator, 3610J positioner, V300B]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 4 'Fisher i2P-100 Electro-Pneumatic Transducer Mounted on a 2052 Rotary Actuator with 3610J Positioner and V300B Rotary,' p. 9"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing X1354.
mediaStatus: unreviewed
```

```yaml
id: fi2p100-cmp-dimensions-connections
teaches: >
  Overall dimensions and connection locations for the i2P-100
  transducer (sheet 1 of 4).
concept-tags: [i2P-100, dimensions, connections]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 5 'Dimensions and Connections,' p. 11 (sheet 1 of 4)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing GE0643 (sheet 1 of 4). Only sheet 1 is present as a figure in this manual; sheets 2-4 were not located as separate captioned figures.
mediaStatus: unreviewed
```

```yaml
id: fi2p100-cmp-mounting-67cfr-filter-regulator
teaches: >
  The i2P-100 transducer mounted with a Fisher 67CFR filter regulator
  on a mounting bracket, including the pipe-nipple thread detail.
concept-tags: [i2P-100, 67CFR filter regulator, mounting bracket, supply pressure]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 6 'Typical Fisher i2P-100 Mounting with 67CFR Filter Regulator,' p. 12"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: No drawing number visible on the figure.
mediaStatus: unreviewed
```

```yaml
id: fi2p100-cmp-diagnostics-hookup
teaches: >
  Diagnostic connector hardware and hookup for the i2P-100, showing
  the gauge stem, body protector, body, pipe bushing, pipe tee, and
  pipe nipple.
concept-tags: [i2P-100, diagnostics hookup, connector hardware]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 7 'Diagnostics Hookup for Fisher i2P-100 Transducer,' p. 13 (sheet 1 of 4)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawings GE06439-A (sheet 1 of 4) and B2395-1. **Cross-manual shared
  component drawing, confirmed by direct visual comparison:** drawing
  B2395-1 (the gauge-stem/body-protector/pipe-bushing connector detail)
  also appears within the 646 manual's own Figure 4 ("Diagnostics
  Hookup for the Fisher 646 Transducer," `f646-cmp-diagnostics-
  hookup`) — same generic connector-hardware sub-drawing reused inside
  two different overall assembly illustrations (GE06439-A here vs.
  12B8040-A there). Not a duplicate figure — each shows a different
  transducer housing — but a real shared sub-component drawing, kept
  cross-referenced in both records.
mediaStatus: unreviewed
```

```yaml
id: fi2p100-cmp-field-wiring-diagram
teaches: >
  Typical field wiring from a control device to the i2P-100 transducer
  terminal block, including the optional in-line indicating device and
  earth ground connection.
concept-tags: [i2P-100, field wiring, terminal block, earth ground, control device]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 8 'Typical Field Wiring Diagram,' p. 16"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-manual duplicate, confirmed by direct visual comparison.**
  Drawing A3875 — identical diagram (same control-device box, terminal
  block layout, indicating-device note, and earth-ground callout) also
  appears as the 646 manual's own Figure 5 ("Typical Field Wiring
  Diagram," `f646-cmp-field-wiring-diagram`), same drawing number, same
  title, same content. Kept as two separate records (document-grain),
  cross-referenced in both. Not found in 846.
mediaStatus: unreviewed
```

```yaml
id: fi2p100-cmp-equivalent-circuit
teaches: >
  The i2P-100's equivalent electrical circuit — a series circuit with
  a constant ~4V DC voltage drop, 40-ohm total resistance, and two
  6.8V zener diodes shunting the input.
concept-tags: [i2P-100, equivalent circuit, zener diode, electrical loop]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 9 'Equivalent Circuit,' p. 16"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  No drawing number visible on the figure. Checked directly against
  the 646 manual's Figure 6 (drawing A6013, 23-ohm/three-6.8V-zener
  design) and the 846 manual's Figure 3 (drawing A6325, 6V/50-ohm
  design) — all three transducers use genuinely distinct circuit
  topologies; not a shared drawing.
mediaStatus: unreviewed
```

```yaml
id: fi2p100-cmp-zero-span-switch-settings
teaches: >
  Zero and span adjustment locations plus the DIP-switch settings
  table (Settings A, B, C) for selecting the i2P-100's input/output
  range combinations.
concept-tags: [i2P-100, zero adjustment, span adjustment, dip switch, range selection]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 10 'Zero and Span Adjustments and Switch Settings,' p. 18"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing GE03345. Directly referenced by the Calibration Procedure text and by the Troubleshooting section's "Electrical" checklist (item 3).
mediaStatus: unreviewed
```

### Section 4 — Principle of Operation (printed p. 20)

```yaml
id: fi2p100-cmp-transducer-schematic
teaches: >
  The complete labelled principle-of-operation schematic for the
  i2P-100 — converter module (coil, magnet, beam, flapper, nozzle,
  zero/span circuit) and pneumatic relay (diaphragm, valve plug,
  restriction) stages.
concept-tags: [i2P-100, transducer schematic, principle of operation, pneumatic relay, force balance beam]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 11 'Fisher i2P-100 Transducer Schematic,' p. 20"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing A3877-2. **Related-family drawing, not a duplicate:** the 646
  manual's own transducer schematic (Figure 8, `f646-cmp-transducer-
  schematic`) is drawing A3877-1 — same base drawing number, different
  suffix, and confirmed by direct visual comparison to be genuinely
  different content (different internal layout specific to each
  product's converter/relay design). Flagged as a related sibling
  drawing family, not catalogued as a duplicate.
mediaStatus: unreviewed
```

### Section 5.4 — Relay Maintenance (printed p. 25)

```yaml
id: fi2p100-cmp-valve-plug-inner-spring-body-plug
teaches: >
  The relay valve plug, inner valve spring, and body plug assembly for
  the i2P-100, with the spring coil end called out.
concept-tags: [i2P-100, valve plug, inner valve spring, body plug, relay maintenance]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 12 'Valve Plug, Inner Valve Spring and Body Plug Assembly,' p. 25"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-manual duplicate, confirmed by direct visual comparison —
  the strongest match found in this batch.** Drawing A6057-1, same
  title ("Valve Plug, Inner Valve Spring and Body Plug Assembly"),
  appears identically as the 646 manual's own Figure 9 (`f646-cmp-
  valve-plug-inner-spring-body-plug`) — same drawing number, same
  title, same content. This is the same physical relay valve-plug/
  spring/body-plug part shared across the two sibling transducer
  platforms. Kept as two separate records (document-grain), cross-
  referenced in both. Not found in 846, which has a mechanically
  different relay design.
mediaStatus: unreviewed
```

### Section 6.2 — Parts List (printed p. 28)

```yaml
id: fi2p100-cmp-transducer-assembly-exploded
teaches: >
  The full numbered exploded parts assembly of the i2P-100 transducer
  housing and I/P converter, the reference the Parts List (Table 6)
  key numbers are keyed to.
concept-tags: [i2P-100, exploded view, parts assembly, parts list, housing]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 13 'Fisher i2P-100 Transducer Assembly,' p. 28"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 30C2230-F. This figure's page shares a physical layout with
  Table 6 ("Housing"); an initial text-extraction sweep garbled the
  caption text on this landscape/rotated page (interleaved with the
  table content), resolved by direct rendering per the standing
  render-and-look discipline — see Open Items.
mediaStatus: unreviewed
```

### Section 6.4 — Mounting Parts (printed p. 30)

```yaml
id: fi2p100-cmp-relay-assembly
teaches: >
  The full numbered exploded parts assembly of the i2P-100 pneumatic
  relay, with the body-block/relay-body tab-alignment note called out.
concept-tags: [i2P-100, relay assembly, exploded view, parts list]
status: current
source:
  - doc: Fisher i2P-100 Electro-Pneumatic Transducer IM (D103198X012)
    locator: "Figure 14 'Fisher i2P-100 Relay Assembly,' p. 30"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 30C2258-C. Referenced by Table 10 ("Relay Assembly (See Figure 14)," not catalogued).
mediaStatus: unreviewed
```

## Open Items

- **Scope confirmed by direct inspection.** All pages carrying a figure were rendered (150 dpi) and read directly — PDF pages 3, 5–8, 11, 13–15, 18, 20, 22, 27, 30, 32 (printed pp. 1, 3, 5–6, 9, 11–13, 16, 18, 20, 25, 28, 30). Document-grain file, no `ch<N>` suffix. 14 of 14 figures confirmed.
- **Numbered-hybrid structure confirmed by direct inspection** — real numbered sections and subsections (Section 1, Section 2 with 2.2/2.4, Section 4, Section 5 with 5.1/5.4, Section 6 with 6.1/6.2/6.4) but flat figure numbering (Figure 1–14, no per-section reset). PDF-to-printed page offset confirmed as +2 (PDF page = printed page + 2) via footer page numbers on multiple rendered pages.
- **Real structural gap found, not a sweep artifact.** No numbered "Section 3" exists anywhere in the document — Section 2 (Installation) runs continuously through Electrical Connections (2.4) and an unnumbered "Calibration Procedure" subsection all the way to printed p. 19, and "Section 4: Principle of Operation" begins directly on p. 20. Confirmed by rendering and reading every page in that span (pp. 15, 18, 19) directly — this is a real numbering gap in the source document, not a caption we failed to find. It does not affect any figure or table catalogued here.
- **Table exclusion confirmed, with one text-extraction false alarm resolved.** All 15 tables (1–15) were located and confirmed genuinely tabular. Table 12 ("Yoke Mounting") was initially missed by a caption-line text sweep — its caption sits on a landscape/rotated page (the same physical page as Figure 13 and Table 6) where the extracted text interleaves and garbles across overlapping content blocks. Direct rendering of that page (PDF p. 32) confirmed Table 12 exists exactly where the numbering implies, immediately following Table 11. No real citation gap — resolved by the standing render-and-look discipline, the same category as the 846 manual's own false-alarm "Figure 2" finding.
- **No internal duplicate drawing numbers found** within this manual.
- **Required cross-manual visual overlap check (i2P-100 vs. 646 vs. 846), performed and reported here in full — see also the 646 and 846 files' own Open Items:**
  - **846: no overlap found.** 846 uses an entirely distinct drawing-number series throughout; none of this manual's 14 drawing numbers appear anywhere in the 846 manual.
  - **646: four real shared/related drawings found, all confirmed by direct visual comparison, not assumed from title similarity:**
    1. **A6815** — "Output-Time Relationships" curve, identical drawing, product name changed in title only (i2P-100 Fig. 2 / 646 Fig. 2).
    2. **B2395-1** — shared diagnostic-connector sub-drawing reused inside two different overall diagnostics-hookup illustrations (i2P-100 Fig. 7 / 646 Fig. 4).
    3. **A3875** — "Typical Field Wiring Diagram," identical drawing (i2P-100 Fig. 8 / 646 Fig. 5).
    4. **A6057-1** — "Valve Plug, Inner Valve Spring and Body Plug Assembly," identical drawing, same physical relay part (i2P-100 Fig. 12 / 646 Fig. 9).
  - Also noted, **not** a duplicate: i2P-100's Figure 11 (A3877-2) and 646's Figure 8 (A3877-1) are the same base drawing family with different suffixes, confirmed by direct comparison to hold genuinely different schematic content per product — flagged as a related family, not catalogued as an overlap.
  - This pattern makes sense product-wise: 646 and i2P-100 are the same simpler two-stage transducer platform and share several generic/component drawings, while 846 is a mechanically distinct, modular-construction product with its own complete drawing set.
- **Cross-reference check against the rest of the library, confirmed clean.** Searched all existing `Component Index*.md` files for every one of this manual's 14 drawing numbers — no matches outside this batch's own three files.
- **id-collision sweep run before and after minting** — clean both times except the two known, pre-existing, out-of-scope Oil & Gas Sourcebook collisions (`ogas-cmp-amine-treatment-unit`, `ogas-cmp-compressor-system`).
- **No low-confidence flags** — every figure directly confirmed against its rendered page.
- **No citation errors affecting any figure** — the one apparent gap (Table 12) was a text-extraction artifact, resolved by direct rendering, not a real source error.
- **`used-by: []` throughout** — 17101 (the course whose gap analysis drove this acquisition) is an unconverted legacy PPTX deck with no real Component Index citations yet.
- **No archive or legacy material** was found or consulted — the manual is `current` throughout.
