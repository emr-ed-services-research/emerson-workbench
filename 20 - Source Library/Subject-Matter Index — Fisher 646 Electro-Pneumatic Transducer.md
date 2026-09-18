---
title: Subject-Matter Index — Fisher 646 Electro-Pneumatic Transducer
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012, July 2023)
chapter: whole document — flat named sections, no numbering
updated: 2026-09-13
---

# Subject-Matter Index — Fisher 646 Electro-Pneumatic Transducer

Cataloging pass for one of the three Fisher electro-pneumatic transducer
manuals acquired for the 17101 gap-analysis (17101 is a live, currently-taught
course whose real citations drove this acquisition; it is also an unconverted
legacy PPTX deck, so `used-by` is `[]` throughout — no real Subject-Matter Index
citations exist for it yet). Document-grain, per
`Subject-Matter Index — Process & Standards.md`: whole document is the bounded
unit, no `ch<N>` suffix.

This manual has a genuinely flat named-section structure confirmed against
its own Contents page — Introduction / Installation / Operating Information /
Principle of Operation / Maintenance / Parts Ordering / Parts List / Parts
Kits, no numbering anywhere. Grouping headers below use these section names
verbatim, no numbers, per the directive for this manual.

Every page carrying a figure was rendered as an image (150 dpi) and visually
inspected — 11 of 11 figures confirmed against the rendered page, not from
text extraction alone. Tables 1–2 (Specifications, EMC Immunity) were
confirmed genuinely tabular via the Contents/text sweep and correctly
excluded, not rendered.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher 646 Electro-Pneumatic Transducer IM** | D101351X012 · July 2023 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Introduction (printed pp. 1–4)

```yaml
id: f646-cmp-transducer-actuator-photo
teaches: >
  A complete Fisher 646 electro-pneumatic transducer mounted on a
  sliding-stem control valve actuator — the whole-unit overview photo
  opening the manual.
concept-tags: [646, electro-pneumatic transducer, actuator overview, sliding-stem]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 1 'Fisher 646 Electro-Pneumatic Transducer Mounted on a Sliding-Stem Actuator,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing W6783-1.
mediaStatus: unreviewed
```

```yaml
id: f646-cmp-output-time-relationships
teaches: >
  The loading/exhausting output-vs-time behavior curve for the 646
  transducer (% of output span against % of time), showing the
  characteristic fast-load/slow-exhaust response shape.
concept-tags: [646, output-time relationship, loading, exhausting, response curve]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 2 'Output-Time Relationships for Fisher 646 Transducer,' p. 4"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-manual duplicate, confirmed by direct visual comparison.**
  Drawing A6815 — the identical generic loading/exhausting curve, same
  axes and shape, appears as the i2P-100 manual's own Figure 2 ("Output-
  Time Relationships for Fisher i2P-100 Transducer," `fi2p100-cmp-output-
  time-relationships`), with only the product name changed in the figure
  title. This is a genuine shared drawing across the two sibling
  manuals, not a coincidence of similar content — same drawing number,
  same curve. Kept as two separate records (document-grain), cross-
  referenced here and in the i2P-100 record. Not found in the 846
  manual, which has no equivalent figure.
mediaStatus: unreviewed
```

### Installation (printed pp. 5–9)

```yaml
id: f646-cmp-dimensions-connections
teaches: >
  Overall dimensions and pneumatic/electrical connection locations for
  the 646 transducer, including the optional gauge mounting position.
concept-tags: [646, dimensions, pneumatic connections, conduit connection]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 3 'Dimensions and Connections,' p. 6"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawings 38B3958-A and A6816-1. **Internal drawing-number reuse,
  same document:** drawing 38B3958-A also appears on this manual's own
  Figure 11 ("Typical Fisher 646 Mounting With 67CFR Filter Regulator,"
  `f646-cmp-mounting-67cfr-filter-regulator`) — confirmed by direct
  visual comparison, both kept as separate records per standing
  precedent (e.g. the ENVIRO-SEAL rotary manual's Figure 3/Figure 7
  sharing drawing 3289116-B).
mediaStatus: unreviewed
```

```yaml
id: f646-cmp-diagnostics-hookup
teaches: >
  Diagnostic connector hardware and hookup for the 646, shown in two
  configurations (front output and side output) with the pipe nipple,
  pipe tee, body, body protector, and gauge stem components labelled.
concept-tags: [646, diagnostics hookup, front output, side output, pipe tee]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 4 'Diagnostics Hookup for the Fisher 646 Transducer,' p. 7 — two panels (Front Output, Side Output)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawings 12B8040-A and B2395-1. **Cross-manual shared component
  drawing, confirmed by direct visual comparison:** drawing B2395-1 (the
  gauge-stem/body-protector/pipe-bushing connector detail) also appears
  within the i2P-100 manual's own Figure 7 ("Diagnostics Hookup for
  Fisher i2P-100 Transducer," `fi2p100-cmp-diagnostics-hookup`) — same
  generic connector-hardware sub-drawing reused inside two different
  overall assembly illustrations (12B8040-A here vs. GE06439-A there).
  Not a duplicate figure — each shows a different transducer housing —
  but a real shared sub-component drawing, kept cross-referenced in both
  records.
mediaStatus: unreviewed
```

```yaml
id: f646-cmp-field-wiring-diagram
teaches: >
  Typical field wiring from a control device to the 646 transducer
  terminal block, including the optional in-line indicating device and
  earth ground connection.
concept-tags: [646, field wiring, terminal block, earth ground, control device]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 5 'Typical Field Wiring Diagram,' p. 9"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-manual duplicate, confirmed by direct visual comparison.**
  Drawing A3875 — identical diagram (same control-device box, terminal
  block layout, indicating-device note, and earth-ground callout) also
  appears as the i2P-100 manual's own Figure 8 ("Typical Field Wiring
  Diagram," `fi2p100-cmp-field-wiring-diagram`), same drawing number,
  same title, same content. Kept as two separate records (document-
  grain), cross-referenced in both. Not found in 846.
mediaStatus: unreviewed
```

```yaml
id: f646-cmp-equivalent-circuit
teaches: >
  The 646 transducer's equivalent electrical circuit — three 6.8V zener
  diodes, a 0.7V/60-ohm/60-ohm output leg, and a 23-ohm resistor, on a
  4-20 mA input loop.
concept-tags: [646, equivalent circuit, zener diode, electrical loop]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 6 'Equivalent Circuit,' p. 9"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing A6013. Checked directly against the 846 manual's Figure 3
  (drawing A6325, 6V/50-ohm) and the i2P-100 manual's Figure 9 (no
  drawing number visible, 4V/two 6.8V zeners/40-ohm) — all three
  transducers use genuinely distinct circuit topologies and values; not
  a shared drawing.
mediaStatus: unreviewed
```

```yaml
id: f646-cmp-zero-span-terminal-connections
teaches: >
  Location of the zero and span adjustment potentiometers and terminal
  block connections on the 646, shown with the housing cap removed.
concept-tags: [646, zero adjustment, span adjustment, terminal block, calibration]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 7 'Zero and Span Adjustments and Terminal Block Connections (Cap Removed),' p. 9"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A3876-2. Directly referenced by the Calibration Procedure subsection (p. 10).
mediaStatus: unreviewed
```

### Principle of Operation (printed p. 11)

```yaml
id: f646-cmp-transducer-schematic
teaches: >
  The complete labelled principle-of-operation schematic for the 646 —
  converter module, pilot stage, relay, and pneumatic output path.
concept-tags: [646, transducer schematic, principle of operation, pilot stage, relay]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 8 'Fisher 646 Transducer Schematic,' p. 11"
delivery: existing figure (crop) — per Style Guide §§5.8 default
used-by: []
notes: >
  Drawing A3877-1. **Related-family drawing, not a duplicate:** the
  i2P-100 manual's own transducer schematic (Figure 11, `fi2p100-cmp-
  transducer-schematic`) is drawing A3877-2 — same base drawing number,
  different suffix, and confirmed by direct visual comparison to be
  genuinely different content (different internal layout specific to
  each product's converter/relay design). Flagged as a related sibling
  drawing family, not catalogued as a duplicate.
mediaStatus: unreviewed
```

### Maintenance (printed pp. 12–15)

```yaml
id: f646-cmp-valve-plug-inner-spring-body-plug
teaches: >
  The relay valve plug, inner valve spring, and body plug assembly for
  the 646, with the spring coil end and O-ring called out.
concept-tags: [646, valve plug, inner valve spring, body plug, relay maintenance]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 9 'Valve Plug, Inner Valve Spring and Body Plug Assembly,' p. 14"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-manual duplicate, confirmed by direct visual comparison —
  the strongest match found in this pass.** Drawing A6057-1, same title
  ("Valve Plug, Inner Valve Spring and Body Plug Assembly"), appears
  identically as the i2P-100 manual's own Figure 12 (`fi2p100-cmp-valve-
  plug-inner-spring-body-plug`) — same drawing number, same title, same
  content. This is the same physical relay valve-plug/spring/body-plug
  part shared across the two sibling transducer platforms. Kept as two
  separate records (document-grain), cross-referenced in both. Not
  found in 846, which has a mechanically different relay design.
mediaStatus: unreviewed
```

### Parts List (printed pp. 16–19)

```yaml
id: f646-cmp-transducer-assembly-exploded
teaches: >
  The full numbered exploded parts assembly of the 646 transducer
  (keys 1-44, key 49 not shown), the reference the Parts List key table
  is keyed to.
concept-tags: [646, exploded view, parts assembly, parts list]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 10 'Fisher 646 Transducer Assembly,' p. 17"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 41B2373-E. Companion to the Parts List key/description table (pp. 16, 19; not catalogued — pure reference text, no figure caption).
mediaStatus: unreviewed
```

```yaml
id: f646-cmp-mounting-67cfr-filter-regulator
teaches: >
  The 646 transducer mounted with a Fisher 67CFR filter regulator,
  showing the mounting bracket and pipe-nipple connection.
concept-tags: [646, 67CFR filter regulator, mounting bracket, supply pressure]
status: current
source:
  - doc: Fisher 646 Electro-Pneumatic Transducer IM (D101351X012)
    locator: "Figure 11 'Typical Fisher 646 Mounting With 67CFR Filter Regulator,' p. 19"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawings 38B3958-A and B2381-2. **Internal drawing-number reuse, same
  document:** shares drawing 38B3958-A with this manual's own Figure 3
  (`f646-cmp-dimensions-connections`) — see that record's notes. Both
  kept as separate records per standing precedent.
mediaStatus: unreviewed
```

## Open Items

- **Scope confirmed by direct inspection.** All pages carrying a figure were rendered (150 dpi) and read directly — pages 1, 4, 6, 7, 9 (three figures), 11, 14, 17, 19. Document-grain file, no `ch<N>` suffix. 11 of 11 figures confirmed.
- **Flat named-section structure confirmed against the manual's own Contents page** — Introduction, Installation, Operating Information, Principle of Operation, Maintenance, Parts Ordering, Parts List, Parts Kits, no numbering anywhere. Grouping headers above use these names verbatim.
- **Table exclusion confirmed.** Tables 1 and 2 (Specifications, EMC Immunity Performance Criteria) on pp. 2–3 correctly excluded — confirmed genuinely tabular via the Contents/text sweep, not rendered as figures.
- **Two internal drawing-number-reuse findings, both confirmed by direct visual comparison and kept as separate records:** Figure 3 and Figure 11 share drawing 38B3958-A; no other internal duplicates found.
- **Required cross-manual visual overlap check (646 vs. 846 vs. i2P-100), performed and reported here in full — see also the 846 and i2P-100 files' own Open Items:**
  - **846: no overlap found.** 846 uses an entirely distinct drawing-number series throughout (its modular-construction architecture is mechanically different from 646/i2P-100); none of 646's 11 drawing numbers appear anywhere in the 846 manual.
  - **i2P-100: four real shared/related drawings found, all confirmed by direct visual comparison, not assumed from title similarity:**
    1. **A6815** — "Output-Time Relationships" curve, identical drawing, product name changed in title only (646 Fig. 2 / i2P-100 Fig. 2).
    2. **B2395-1** — shared diagnostic-connector sub-drawing reused inside two different overall diagnostics-hookup illustrations (646 Fig. 4 / i2P-100 Fig. 7).
    3. **A3875** — "Typical Field Wiring Diagram," identical drawing (646 Fig. 5 / i2P-100 Fig. 8).
    4. **A6057-1** — "Valve Plug, Inner Valve Spring and Body Plug Assembly," identical drawing, same physical relay part (646 Fig. 9 / i2P-100 Fig. 12).
  - Also noted, **not** a duplicate: 646's Figure 8 (A3877-1) and i2P-100's Figure 11 (A3877-2) are the same base drawing family with different suffixes, confirmed by direct comparison to hold genuinely different schematic content per product — flagged as a related family, not catalogued as an overlap.
  - This pattern makes sense product-wise: 646 and i2P-100 are the same simpler two-stage transducer platform and share several generic/component drawings, while 846 is a mechanically distinct, modular-construction product with its own complete drawing set.
- **Cross-reference check against the rest of the library, confirmed clean.** Searched all existing `Subject-Matter Index*.md` files (including `Subject-Matter Index — Fisher V500 Rotary Globe Valve.md` and `Subject-Matter Index — Fisher Vee-Ball Rotary Valves.md`) for every one of this manual's 11 drawing numbers — no matches outside this batch's own three files.
- **id-collision sweep run before and after minting** — clean both times except the two known, pre-existing, out-of-scope Oil & Gas Sourcebook collisions (`ogas-cmp-amine-treatment-unit`, `ogas-cmp-compressor-system`).
- **No low-confidence flags** — every figure directly confirmed against its rendered page.
- **No citation errors found** within this manual.
- **`used-by: []` throughout** — 17101 (the course whose gap analysis drove this acquisition) is an unconverted legacy PPTX deck with no real Subject-Matter Index citations yet.
- **No archive or legacy material** was found or consulted — the manual is `current` throughout.
