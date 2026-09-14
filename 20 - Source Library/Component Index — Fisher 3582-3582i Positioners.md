---
title: Component Index — Fisher 3582-3582i Positioners
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher 3582/3582i Positioners and 582i Electro-Pneumatic Converter Instruction Manual (D200138X012, February 2026)
chapter: whole document — no chapter structure to sub-divide
updated: 2026-09-13
---

# Component Index — Fisher 3582/3582i Positioners and 582i Converter IM

Standing full-document cataloguing pass, one of two manuals (with the Fisher
3610J/3620J Positioners and 3622 Converter IM) acquired for the 17101
gap-analysis — 17101 is a live, currently-taught legacy course whose real
content citations to 646, 846, i2P-100, 3582/3582i, 3610J/3620J, ValveLink
Mobile QSG, and 585CLS drove this acquisition. Indexed in full per the
standing "index every acquired Technical Publications manual" directive,
not scoped to any single course's confirmed citations — 17101 itself is an
unconverted legacy deck with no real Component Index citations of its own,
so `used-by` is `[]` throughout; any real 17101 usage is a matter for a
future conversion pass, not this one.

Every real figure identified and visually verified against the rendered
page (Poppler, 150 DPI), never catalogued from caption or text-extraction
alone. 54 real PDF pages.

**Real page-numbering offset, confirmed by direct inspection:** this
document's PDF page number is exactly 3 greater than its own printed page
number throughout the body (PDF p.4 = printed p.1, PDF p.19 = printed p.16,
PDF p.53 = printed p.50; PDF p.54 is an unnumbered back cover). All locators
below cite the **printed** page number; PDF page = printed page + 3 if ever
re-deriving directly from the file.

**Real hybrid structure**, matching the documented DVC6200/DVC7K-H/V500
case in `Component Index — Process & Standards.md`: the manual's own table
of contents uses a real numbered section/subsection structure (`Section 1`
through `Section 7`, with `1.1`–`7.3` subsections), but its figures are
flat-numbered (`Figure 1, Figure 2, ...`) straight through the whole
document with no chapter-scoped prefix. Grouping headers below use the
document's own top-level `Section N: Title` form (matching its own printed
heading text, colon included) at the same granularity as the DVC6200 pass,
since that granularity groups figures cleanly without needing every `X.Y`
subsection broken out separately.

An initial imprecise text sweep for figure captions missed two real
figures on first pass — Figure 4 (caption wraps across two lines in the
extracted text) and Figure 22 (present but skipped by an overly narrow
per-page regex) — both found and visually confirmed by targeted follow-up
before this pass closed. No other figures were missed on re-verification.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher 3582/3582i Positioners and 582i Electro-Pneumatic Converter IM** | D200138X012 · February 2026 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Section 1: Introduction (printed pp. 1–7)

```yaml
id: f3582-cmp-typical-mounting
teaches: >
  What a complete control valve assembly looks like with a 3582 pneumatic
  positioner versus a 3582i electro-pneumatic positioner mounted on it —
  the two product variants side by side as the manual's opening orientation
  image.
concept-tags: [3582, 3582i, positioner, mounting, product overview]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 1 'Typical Mounting for Fisher 3582 and 3582i Positioners,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photos (drawings W5498-1 / W8424-1), unlabelled parts.
mediaStatus: unreviewed
```

### Section 2: Installation (printed pp. 8–22)

```yaml
id: f3582-cmp-mounting-assembly-keyed-parts
teaches: >
  The keyed mounting hardware configurations for fitting a 3582/3582i
  positioner to the full range of Fisher actuator types and travel sizes
  (657, 667, 656, 513) — which spacer, connector-arm, and mounting-plate
  keys apply to which actuator/size/travel combination.
concept-tags: [3582, mounting assembly, actuator compatibility, spacers, mounting hardware]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 2 'Mounting Assembly,' p. 10"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 41B8569-D SHT 1 AND 2. Dense keyed-parts callout diagram; works alongside Table 3 (Fisher 3582 Mounting Information, p. 14), a genuine numbered table, correctly excluded.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-non-fisher-actuator-spacing
teaches: >
  How to size the spacer/"X" dimension when mounting a 3582 positioner on
  an actuator from another manufacturer, rather than a Fisher actuator —
  a dimensional reference table paired with the physical diagram it applies
  to (30° max travel-pin swing, stem-travel-to-X lookup by stem diameter).
concept-tags: [3582, non-Fisher actuator, mounting, dimensional reference, travel pin]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 3 'Spacing for Mounting on Other than Fisher Actuators,' p. 12"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 11B6520-F. The figure's own caption covers both the dimensional
  lookup table and the diagram beneath it as one captioned unit — this is a
  dimensional-reference figure per the Process & Standards edge case, not a
  separately-numbered table, so the whole figure is catalogued as one
  component.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-motion-feedback-isometric
teaches: >
  The physical motion-feedback linkage between the actuator stem and the
  positioner's rotary shaft arm — an isometric cutaway naming every part in
  the stem-to-arm connection (stem connector, connector arm, cap nut,
  travel pin, rotary shaft arm) for a typical stem connection.
concept-tags: [3582, motion feedback, rotary shaft arm, stem connector, travel pin]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 4 'Isometric View Showing Motion Feedback Arrangement and Typical Stem Connection,' p. 13"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing CV1768-C / A1397-2. Caption wraps across two printed lines; missed by the first-pass text sweep, confirmed by targeted follow-up and direct page render.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-mounting-plates-filter-regulator
teaches: >
  The two mounting-plate hole patterns used depending on whether the
  positioner's filter regulator is integrally mounted or separately
  mounted — which holes serve the actuator, the positioner, and (when
  separate) the regulator itself.
concept-tags: [3582, mounting plate, filter regulator, integrally mounted, separately mounted]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 5 'Mounting Plates Used with Fisher 3582 Valve Positioners,' p. 13"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: No drawing number printed on either sub-diagram.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-rotary-shaft-arm-index-marks
teaches: >
  How to read the case and rotary-shaft-arm index marks to verify travel
  pin position at mid-travel and at the 30-degree rotation limits in
  either direction — the alignment check performed after setting the
  travel pin.
concept-tags: [3582, rotary shaft arm, case index marks, travel pin, alignment]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 6 'Rotary Shaft Arm and Case Index Marks,' p. 14"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 70CA0750-C / A2452-2. Sits directly above Table 3, a genuine numbered table, correctly excluded.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-typical-dimensions-connections
teaches: >
  Overall mounted dimensions and the location/thread size of every process
  connection (supply, output, vent, instrument, conduit) on both the 3582
  and 3582i variants — the reference drawing for planning physical
  clearance and connection hookup.
concept-tags: [3582, 3582i, dimensions, connections, supply, output, vent, dimensional drawing]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 7 'Typical Dimensions and Connections,' p. 16"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings 11B6519-G / 11B6520-F / C0775-1. Dimensional-envelope figure, catalogued per the Process & Standards edge case for reference drawings.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-diagnostic-connections
teaches: >
  How to connect the FlowScanner valve diagnostics system to a 3582 or
  3582i positioner — the connector body, body protector, and (for units
  with gauges) stem hookup points on each variant.
concept-tags: [3582, 3582i, FlowScanner, diagnostics, connector body]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 8 'Diagnostic Connections,' p. 18"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings 12B8045-A / A6077-1 (3582 side) and 12B8046-C / A6078-2 (gauge side). Re-cited in the Parts section body text as "Diagnostic Connections (Figure 8)," p. 50 — same figure, not a separate component.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-field-wiring-diagram
teaches: >
  How to wire a 3582i positioner's field control device into the
  positioner housing terminal block, including the optional indicating
  device across the loop and the earth-ground connection.
concept-tags: [3582i, field wiring, terminal block, earth ground, control device]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 9 'Typical Field Wiring Diagram,' p. 20"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A3875.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-582i-input-equivalent-circuit
teaches: >
  The internal input equivalent circuit of the 582i electro-pneumatic
  converter — three parallel 5.6V zener diodes across the 4-20mA input,
  feeding two 60-ohm series inductive elements — used for intrinsic-safety
  entity-parameter evaluation.
concept-tags: [582i, equivalent circuit, intrinsic safety, zener diode, entity parameters]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 10 'Input Equivalent Circuit for Fisher 582i Converter,' p. 20"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 21B2335-D / A6012. CONFIRMED SHARED DRAWING: the base circuit
  (drawing 21B2335-D) is reused, visually identical, as
  `f3610j-cmp-3622-input-equivalent-circuit` in
  `Component Index — Fisher 3610J-3620J Positioners.md` (that manual's
  Figure 12, drawing 21B2335-D / A5578-1, for the 3622 converter). Same
  three-zener/two-60-ohm-inductor topology and 4-20mA labeling confirmed by
  direct visual comparison of both rendered pages, not just the shared
  drawing number — genuine drawing reuse across sibling converter models
  (582i and 3622), catalogued as two independent records per the
  one-file-per-document convention, cross-referenced here and in the
  sibling record, matching the established easy-e valve family precedent
  for shared lubricator/packing figures.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-582i-wiring-connections
teaches: >
  The physical layout of the 582i converter's I/P module, converter
  housing, and field wiring connection points — where to land field wiring
  on the actual hardware, complementing Figure 9's schematic wiring
  diagram.
concept-tags: [582i, wiring connections, I/P module, converter housing, field wiring]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 11 'Wiring Connections for Fisher 582i Converter,' p. 21"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A7140. Appears at the top of p. 21, still under §2.6 Electrical Connections, before the §2.7 582i Converter Installation heading that follows it on the same page.
mediaStatus: unreviewed
```

### Section 3: Operating Information (printed pp. 23–27)

```yaml
id: f3582-cmp-cam-characteristic-curves
teaches: >
  How stem travel varies with instrument pressure span for each of the
  three available cams (A linear, B and C characterized) — the reference
  curve set for choosing a cam to modify valve flow characteristics.
concept-tags: [3582, cam characteristics, Cam A, Cam B, Cam C, stem travel]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 12 'Cam Characteristic Curves,' p. 23"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Drawing CK4832-A.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-flow-char-equal-percentage-plug
teaches: >
  How the resultant instrument-pressure-to-flow characteristic changes when
  each of the three cams is combined with an equal-percentage valve plug,
  for both normally-closed and normally-open valve actions.
concept-tags: [3582, cam characteristics, equal percentage valve plug, flow characteristic]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 13 'Flow Characteristics with Different Cams and Equal Percentage Valve Plug,' p. 24"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Drawing CK4835-A.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-flow-char-linear-plug
teaches: >
  How the resultant instrument-pressure-to-flow characteristic changes when
  each of the three cams is combined with a linear valve plug, for both
  normally-closed and normally-open valve actions.
concept-tags: [3582, cam characteristics, linear valve plug, flow characteristic]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 14 'Flow Characteristics with Different Cams and Linear Valve Plug,' p. 24"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Drawing CK4833-A.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-beam-leveling-partial-view
teaches: >
  The direct/reverse-acting quadrants on the positioner beam and the
  flapper-assembly components (nozzle, flapper setting adjustment, flapper
  assembly screw) involved in leveling the beam and changing positioner
  action between direct- and reverse-acting.
concept-tags: [3582, beam leveling, direct-acting, reverse-acting, flapper assembly, nozzle]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 15 'Partial View for Beam Leveling and Calibration,' p. 27"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 23A0308-B / A6133. Appears under §3.5 Changing Valve Positioner Action, ahead of the calibration section proper.
mediaStatus: unreviewed
```

### Section 4: Calibration Of Valve Positioner (printed pp. 28–31)

```yaml
id: f3582-cmp-zero-degree-index-alignment
teaches: >
  How to align the rotary shaft arm's 0-degree index marks with the case
  index marks by adjusting the beam pivot pin — the beam-alignment step
  performed before proceeding to zero/span calibration.
concept-tags: [3582, beam alignment, 0-degree index marks, case index marks, beam pivot pin]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 16 'Rotary Shaft Arm 0-Degree and Case Index Marks, Location and Alignment,' p. 30"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A2452-3. Appears under §4.1 Beam Alignment, immediately before the §4.2 Calibration heading on the same page.
mediaStatus: unreviewed
```

### Section 5: Principle of Operation (printed pp. 32–33)

```yaml
id: f3582-cmp-schematic-3582-positioner
teaches: >
  The full internal operating schematic of the 3582 pneumatic positioner —
  bellows, relay, nozzle, flapper assembly, cam, and beam quadrants, showing
  how instrument input pressure moves the flapper to modulate output to the
  actuator.
concept-tags: [3582, principle of operation, schematic, relay, nozzle, flapper, cam]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 17 'Schematic Illustration of Fisher 3582 Positioner,' p. 33"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 22A7965-A / A2453-2.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-schematic-3582i-positioner
teaches: >
  The full internal operating schematic of the 3582i electro-pneumatic
  positioner — 582i converter, bellows, relay, nozzle, flapper assembly,
  cam, and beam quadrants, showing how a 4-20mA input signal is converted
  to pneumatic output.
concept-tags: [3582i, principle of operation, schematic, 582i converter, relay, nozzle, flapper]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 18 'Schematic Illustration of Fisher 3582i Positioner,' p. 33"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A4818-2.
mediaStatus: unreviewed
```

### Section 7: Parts (printed pp. 40–50)

```yaml
id: f3582-cmp-flapper-sub-assembly
teaches: >
  The exploded keyed parts breakdown of the flapper sub-assembly (key 19),
  with the specific assembly-orientation note for the letter-T-marked
  surface.
concept-tags: [3582, flapper sub-assembly, exploded parts, key 19]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 19 'Flapper Sub-Assembly (Key 19),' p. 42"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 13A1451-E.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-positioner-assembly-drawing
teaches: >
  The complete exploded parts assembly drawing of the 3582 positioner
  across three sectional views (A-A, B-B, C-C) plus a typical cam
  illustration — the master keyed reference for every replaceable part in
  the parts list.
concept-tags: [3582, positioner assembly, exploded parts, section A-A, section B-B, section C-C, typical cam]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 20 'Fisher 3582 Positioner Assembly Drawing,' p. 43"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 41B8558-E. Referenced throughout the parts-list tables (Table 8 and others) by key number; the master assembly drawing they key against.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-nozzle-sub-assembly
teaches: >
  The exploded keyed parts breakdown of the nozzle sub-assembly, including
  its relationship to the nozzle adaptor (key 3) that requires thread
  locking compound on assembly.
concept-tags: [3582, nozzle sub-assembly, exploded parts, nozzle adaptor]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 21 'Nozzle Sub-Assembly,' p. 44"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 12A7441-C.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-83l-relay
teaches: >
  The exploded keyed parts breakdown of the 83L relay used in the 3582
  positioner, including the high-temperature-construction identification
  stamp callout.
concept-tags: [3582, 83L relay, exploded parts, high temperature construction]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 22 '83L Relay,' p. 44"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 32B0255-B. Present in the source but skipped by the first-pass per-page text sweep; found and visually confirmed by a targeted follow-up grep for "Figure 22" and direct page render.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-block-assembly-with-bypass
teaches: >
  The exploded keyed parts breakdown of the 3582 gauge/output block
  assembly for units built with a bypass, across the standard 3582
  configuration and the 3582D/3582NS variant, plus a sectional cutaway of
  the block itself.
concept-tags: [3582, block assembly, bypass, gauge block, 3582D, 3582NS, exploded parts]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 23 'Fisher 3582 Block Assembly with Bypass,' p. 46"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings 21B8560-B (3582 standard) and 21B8562-B (3582D/3582NS variant), both part of this one captioned figure. Companion to Table 9, a genuine numbered table, correctly excluded.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-block-assemblies-without-bypass
teaches: >
  The exploded keyed parts breakdown of the 3582 gauge/output block
  assembly for units built without a bypass, across three variants (3582G,
  3582C/3582NS, 3582A) plus a sectional cutaway.
concept-tags: [3582, block assembly, no bypass, 3582G, 3582C, 3582NS, 3582A, exploded parts]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 24 'Fisher 3582 Block Assemblies without Bypass,' p. 47"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings 21B8565-B (3582G), 21B8564-B (3582C/3582NS), and 21B8563-B (3582A), all part of this one captioned figure. Companion to Table 10, a genuine numbered table, correctly excluded.
mediaStatus: unreviewed
```

```yaml
id: f3582-cmp-582i-converter-exploded
teaches: >
  The exploded keyed parts breakdown of the complete 582i converter,
  including the I/P module, converter housing, and the 67CFR filter
  regulator assembly.
concept-tags: [582i, converter exploded parts, I/P module, 67CFR filter regulator]
status: current
source:
  - doc: Fisher 3582/3582i Positioners and 582i Converter IM (D200138X012, February 2026)
    locator: "Figure 25 'Fisher 582i Converter,' p. 49"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 31B5995-G.
mediaStatus: unreviewed
```

## Open Items

- **Scope boundary, confirmed directly:** whole document, PDF pages 1–54
  (printed pp. i–ii front matter/TOC, 1–50 body, back cover unnumbered),
  rendered and read at the section-boundary pages (pp. 1, 4/TOC, 16, 18,
  19–21) and at every figure page. Printed-page offset (PDF = printed + 3)
  confirmed at three separate points in the document (p. 1, p. 16/18, p. 50)
  and held consistently throughout.
- **Full coverage accounting:** 25 real figures (Figure 1 through Figure
  25), every one identified and visually confirmed against its rendered
  page. Two figures (4, 22) were missed by the first-pass text sweep and
  recovered by targeted follow-up before this pass closed — no gaps remain.
- **Low-confidence flags:** none. Every figure's caption, page, and drawing
  number(s) were confirmed by direct visual inspection.
- **Duplicate-figure-number and source-citation-error findings:** none
  found. Figure 8 is legitimately re-cited by its own caption in the Parts
  section's body text (p. 50) — same figure, not a duplicate or citation
  error.
- **Table-exclusion confirmation:** 10 genuine numbered tables identified
  (Tables 1–10, printed pp. 3–5, 6, 14, 26 ×2, 31, 40, 41, 46, 47) and
  correctly excluded — all are data/specification tables with their own
  separate numbering, distinct from the flat figure sequence.
- **Cross-reference findings:** the shared drawing 21B2335-D (Figure 10,
  "Input Equivalent Circuit for Fisher 582i Converter") is confirmed — by
  both matching drawing number and direct visual comparison of the rendered
  circuit — to be the same base drawing reused in
  `Component Index — Fisher 3610J-3620J Positioners.md`'s Figure 12
  ("Fisher 3622 Converter Equivalent Circuit," drawing 21B2335-D / A5578-1).
  Cross-referenced by id in both records' `notes`. No overlap found against
  `Component Index — Fisher FIELDVUE DVC6200.md`, `Component Index — Fisher
  FIELDVUE DVC7K-H.md`, or `Component Index — Fisher 585C Series Piston
  Actuators.md` — those manuals cover unrelated hardware (digital valve
  controllers and piston actuators) with no shared drawing numbers or
  visually similar figures.
- **Archive/legacy material:** none consulted, none needed — first-party
  current document, sole source for its own content.
