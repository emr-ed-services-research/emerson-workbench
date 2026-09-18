---
title: Subject-Matter Index — Fisher 3610J-3620J Positioners
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher 3610J/3620J Positioners and 3622 Electro-Pneumatic Converter Instruction Manual (D200149X012, June 2022)
chapter: whole document — no chapter structure to sub-divide
updated: 2026-09-13
---

# Subject-Matter Index — Fisher 3610J/3620J Positioners and 3622 Converter IM

Standing full-document cataloguing pass, the second of two manuals (with
the Fisher 3582/3582i Positioners and 582i Converter IM) acquired for the
17101 gap-analysis — 17101 is a live, currently-taught legacy course whose
real content citations to 646, 846, i2P-100, 3582/3582i, 3610J/3620J,
ValveLink Mobile QSG, and 585CLS drove this acquisition. Indexed in full
per the standing "index every acquired Technical Publications manual"
directive; 17101 itself is an unconverted legacy deck with no real
Subject-Matter Index citations of its own, so `used-by` is `[]` throughout.

Every real figure identified and visually verified against the rendered
page (Poppler, 150 DPI), never catalogued from caption or text-extraction
alone. 60 real PDF pages.

**Real page-numbering offset, confirmed by direct inspection:** this
document's PDF page number equals its own printed page number exactly
throughout (PDF p.2 = printed p.2, PDF p.20 = printed p.20, PDF p.59 =
printed p.59; PDF p.60 is a back-matter legal/copyright page). No offset
to apply when re-deriving directly from the file.

**Real structure:** a flat named-section house structure (Introduction,
Installation, Calibration, Principle of Operation, Maintenance, Parts
Ordering/Parts List), with no numbered sections anywhere in its own table
of contents — unlike the sibling 3582/3582i manual, this one does **not**
follow the numbered-hybrid shape; grouping headers below use the plain
`### <Section Name> (printed pp. A–B)` form. Figures are flat-numbered
(`Figure 1, Figure 2, ...`) straight through the document.

**A genuine near-miss on Figure 1, corrected before this pass closed:**
Figure 1 ("Typical Positioners") is referenced three times in running text
and the table of contents but is **not** printed in the document body —
it turns out to be printed on the front cover/contents page itself
(printed p. 1, alongside the "Contents" listing, ahead of the "Introduction"
heading that starts on p. 2). An initial check of only the body pages (2–3)
found no image and nearly produced a false "missing figure" finding;
rendering page 1 directly resolved it. Catalogued normally, under
Introduction, once confirmed.

**Real figure/section page overlap, not a numbering problem:** Figures 17
through 25 (the cam-characteristic curves and the six product-variant
operating schematics) are laid out across printed pp. 29–35, a span that
the manual's own "Maintenance" heading (p. 32) and its opening
warning/procedure text physically interleave with — the print layout does
not cleanly break section content at the page boundary the way the table
of contents implies. All nine figures are genuinely Principle-of-Operation
content by subject matter (the six schematics are explicitly the ones the
"Refer to the schematic diagrams as indicated" list on pp. 29–30 names one
by one), so they are grouped under Principle of Operation here rather than
split by literal page range against a Maintenance heading that has no
figures of its own. This makes Maintenance a genuine zero-figure section,
confirmed by direct inspection of pp. 32–45, not assumed from its title.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher 3610J/3620J Positioners and 3622 Electro-Pneumatic Converter IM** | D200149X012 · June 2022 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Introduction (printed pp. 1–7)

```yaml
id: f3610j-cmp-typical-positioners
teaches: >
  What a complete valve/actuator/positioner assembly looks like for the two
  main product families covered by this manual — a 3620JP electro-pneumatic
  positioner on a 1061 piston actuator, and a 3610J pneumatic positioner on
  a 2052 diaphragm actuator, both shown on a Fisher V500 rotary valve.
concept-tags: [3610J, 3620JP, positioner, product overview, V500 valve]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 1 'Typical Positioners,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Production photos, drawings W4920-1 (3620JP/1061/V500) and X1284
  (3610J/2052/V500). Printed on the front cover/contents page itself, ahead
  of the Introduction heading (p. 2) — a real near-miss on this pass: an
  initial check of only the body pages found no image and nearly produced a
  false "missing figure" finding, corrected by rendering page 1 directly.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-3621jp-with-585c-actuator
teaches: >
  A complete 3611JP/3621JP-family positioner mounted on a Fisher 585C
  sliding-stem actuator and control valve — the sliding-stem product
  variant, paired with Figure 1's rotary examples.
concept-tags: [3621JP, 585C actuator, sliding-stem, product overview]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 2 'Fisher 3621JP Positioner with 585C Actuator,' p. 5"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo, drawing W6594.
mediaStatus: unreviewed
```

### Installation (printed pp. 7–20)

```yaml
id: f3610j-cmp-mounting-on-2052-actuators
teaches: >
  How the 3610J/3620J positioner mounts on a 2052 diaphragm rotary
  actuator, both with the actuator cover in place and with it removed to
  show the roller, feedback lever assembly, cam, and cam mounting screws.
concept-tags: [3610J, 3620J, mounting, 2052 actuator, feedback lever, cam]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 3 'Typical Mounting Details for Fisher 3610J and 3620J Positioners on 2052 Actuators,' p. 9"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings GG00138-A and GG41215-A.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-mounting-3611jp-on-585
teaches: >
  How a 3611JP/3621JP positioner mounts on a Fisher 585 sliding-stem
  actuator and control valve assembly, with the actuator front yoke cover
  plate removed to show the stem bracket, feedback lever, and positioner
  adapter.
concept-tags: [3611JP, 585 actuator, sliding-stem, mounting, feedback lever assembly]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 4 'Typical Mounting Details for Fisher 3611JP and 3621JP Positioners on 585 Actuators,' p. 11"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings 49A3788-A / A3231-2.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-mounting-3611jp-on-585c
teaches: >
  How a 3611JP/3621JP positioner mounts on a Fisher 585C actuator using the
  positioner mounting bracket, hex hardware, and positioner adaptor — the
  585C-specific mounting hardware set.
concept-tags: [3611JP, 585C actuator, mounting bracket, positioner adaptor]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 5 'Typical Mounting Details for Fisher 3611JP and 3621JP Positioners on 585C Actuator,' p. 13"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6841.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-positioner-mounting-bracket
teaches: >
  The physical hole pattern of the positioner mounting bracket used on 585C
  installations — which holes serve size 50 versus size 25 actuators, and
  the mounting bracket slot.
concept-tags: [585C, mounting bracket, hole pattern]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 6 'Positioner Mounting Bracket,' p. 13"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A6840.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-mounting-long-travel-sliding-stem
teaches: >
  How to mount a 3610JP/3620JP positioner on a long-travel sliding-stem
  actuator using a cam-and-roller feedback mechanism — cam position marking,
  cam bracket, and the two sectional mounting-hardware views (A-A and B-B).
concept-tags: [3610JP, 3620JP, long travel, sliding-stem actuator, cam, roller feedback]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 7 'Typical Mounting Details for Fisher 3610JP and 3620JP Positioners on Long Travel Sliding-Stem Actuators,' p. 14"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: No drawing number visible on the printed page.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-nozzle-block-assembly
teaches: >
  The construction difference between the single-acting (3610J/3620J) and
  double-acting (3610JP/3611JP/3620JP/3621JP) nozzle block assemblies —
  offset taper versus straight taper — relevant when changing positioner
  types.
concept-tags: [nozzle block, offset taper, straight taper, changing positioner types]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 8 'Nozzle Block Assembly,' p. 15"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings 36A5654-A / A3234-1.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-mounting-dimensions-connections
teaches: >
  Overall mounted dimensions and process connection locations across every
  positioner/converter variant covered by the manual — 3610J with and
  without bypass, 3620J/3620JP, 3611JP, and 3621JP — the reference drawing
  for planning physical clearance and connection hookup.
concept-tags: [dimensions, connections, bypass valve, dimensional drawing, gauge block]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 9 'Typical Mounting Dimensions and Connections,' pp. 17-18"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Two-page figure. Drawings 19A1442-D, 19A1444-C, 11B2612-E, C0681-3 (p. 17)
  and 19A1486-C, 11B2613-C, B2151-2 (p. 18). Dimensional-envelope figure,
  catalogued per the Process & Standards edge case for reference drawings.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-flowscanner-3610j-3610jp
teaches: >
  How to install the FlowScanner diagnostic connector hardware (gauge, stem,
  body, body protector) on the gauge block or bypass block assembly of a
  3610J or 3610JP positioner.
concept-tags: [FlowScanner, diagnostic connections, 3610J, 3610JP, gauge block]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 10 'FlowScanner Diagnostic System Connections for Fisher 3610J and 3610JP Positioners,' p. 19"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 12B8050-A / A6081-1. Re-cited in the Parts List's "Diagnostic
  Connections" table (p. 50) — same figure, not a separate component.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-flowscanner-3620j-3620jp
teaches: >
  How to install the FlowScanner diagnostic connector hardware on the 3622
  converter housing of a 3620J or 3620JP positioner — the electro-pneumatic
  variant's equivalent of Figure 10.
concept-tags: [FlowScanner, diagnostic connections, 3620J, 3620JP, 3622 housing]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 11 'FlowScanner Diagnostic System Connections for Fisher 3620J and 3620JP Positioners,' p. 19"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 12B8051-B / A6083-1. Distinct real figure from Figure 10 (not a
  duplicate) — same diagnostic hardware, different host housing (gauge
  block versus 3622 converter housing).
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-3622-input-equivalent-circuit
teaches: >
  The internal input equivalent circuit of the 3622 electro-pneumatic
  converter — three parallel 5.6V zener diodes across the 4-20mA input,
  feeding two 60-ohm series inductive elements — used for intrinsic-safety
  entity-parameter evaluation.
concept-tags: [3622, equivalent circuit, intrinsic safety, zener diode, entity parameters]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 12 'Fisher 3622 Converter Equivalent Circuit,' p. 20"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 21B2335-D / A5578-1 (confirmed via embedded PDF text extraction,
  not visual read alone — the rendered image is easy to misread at the
  base drawing number). CONFIRMED SHARED DRAWING: the base circuit (drawing
  21B2335-D) is reused, visually and textually identical, as
  `f3582-cmp-582i-input-equivalent-circuit` in
  `Subject-Matter Index — Fisher 3582-3582i Positioners.md` (that manual's
  Figure 10, drawing 21B2335-D / A6012, for the 582i converter). Same
  three-zener/two-60-ohm-inductor topology and 4-20mA input labeling
  confirmed by direct visual comparison of both rendered pages and by
  extracting the literal drawing-number text from both PDFs — genuine
  drawing reuse across sibling converter models (3622 and 582i), catalogued
  as two independent records per the one-file-per-document convention,
  cross-referenced here and in the sibling record, matching the established
  easy-e valve family precedent for shared lubricator/packing figures.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-3622-field-wiring-diagram
teaches: >
  How to wire a control device into the 3622 converter's terminal block,
  including the optional indicating device across the loop and the earth
  ground connection.
concept-tags: [3622, field wiring, terminal block, earth ground, control device]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 13 'Typical Field Wiring Diagram,' p. 20"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing A5577.
mediaStatus: unreviewed
```

### Calibration (printed pp. 21–29)

```yaml
id: f3610j-cmp-calibration-adjustments
teaches: >
  The location of every calibration adjustment point on the two positioner
  body styles — the 3610J/3610JP/3620J/3620JP gauge-block layout and the
  3611JP/3621JP layout — zero, span, minor loop gain, crossover, and range
  spring/hanger.
concept-tags: [calibration, zero adjustment, span adjustment, minor loop gain, crossover adjustment, range spring]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 14 'Calibration Adjustments,' p. 22"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings W4900-1 and W4901-1.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-minor-loop-gain-adjustment
teaches: >
  How to adjust minor loop gain via the flexure adjustment socket head
  screw, and the required "X" dimension by actuator model/size — a
  dimensional lookup table paired with the physical adjustment diagram.
concept-tags: [minor loop gain, flexure adjustment, X dimension, actuator lookup]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 15 'Minor Loop Gain Adjustment,' p. 22"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 20B1277-E / A3233-2. The figure's own caption covers the diagram
  and its paired dimensional lookup table as one captioned unit —
  dimensional-reference figure per the Process & Standards edge case, not a
  separately-numbered table.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-span-adjustment
teaches: >
  The summing beam assembly's coarse and fine span adjustment points, range
  spring, range spring hanger, and feedback lever assembly — the mechanism
  adjusted when the actuator stroke doesn't match the input signal range.
concept-tags: [span adjustment, summing beam, coarse span, fine span, range spring]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 16 'Span Adjustment,' p. 26"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 20B1277-E / A3232-2. Shares base sheet 20B1277-E with Figure 15
  (different sub-drawing code, A3232-2 vs A3233-2) — a multi-sheet drawing
  set within this same document, not a cross-document duplication.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-input-signal-vs-valve-rotation
teaches: >
  How degrees of valve rotation vary with percent of rated input span for
  each of the three characterized cams (A linear, B and C characterized).
concept-tags: [characterized cams, Cam A, Cam B, Cam C, valve rotation]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 17 'Input Signal Versus Valve Rotation,' p. 29"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Drawing A2264-2.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-flow-char-equal-pct-push-down-open
teaches: >
  How percent flow varies with percent of rated input span for each cam,
  combined with an equal-percentage valve characteristic, for a
  push-down-to-open valve.
concept-tags: [characterized cams, equal percentage valve, push-down-to-open, flow characteristic]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 18 'Flow Characteristics for the Various Cams When Used With an Equal Percentage Valve Characteristic, Push-Down-to-Open Valve,' p. 29"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Drawing 33A4959-A / A1581-3.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-flow-char-equal-pct-push-down-close
teaches: >
  How percent flow varies with percent of rated input span for each cam,
  combined with an equal-percentage valve characteristic, for a
  push-down-to-close valve.
concept-tags: [characterized cams, equal percentage valve, push-down-to-close, flow characteristic]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 19 'Flow Characteristics for the Various Cams When Used With an Equal Percentage Valve Characteristic Push-Down-to-Close Valve,' p. 29"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Drawing 33A4960-A / A1582-3.
mediaStatus: unreviewed
```

### Principle of Operation (printed pp. 29–35)

```yaml
id: f3610j-cmp-schematic-3610j
teaches: >
  The full internal operating schematic of the 3610J pneumatic positioner —
  relays A and B, summing beam, flapper/nozzle, range spring, and feedback
  lever — showing how a pneumatic input signal is force-balanced against
  actuator rotary shaft position.
concept-tags: [3610J, principle of operation, schematic, relay, summing beam, feedback lever]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 20 'Schematic of Fisher 3610J Positioner,' p. 30"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 38A8901-B / B1844-1.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-schematic-3610jp
teaches: >
  The full internal operating schematic of the 3610JP pneumatic positioner
  for piston actuators — the double-acting variant of Figure 20's
  mechanism, driving a spring-and-diaphragm-style output to a piston
  actuator.
concept-tags: [3610JP, principle of operation, schematic, piston actuator]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 21 'Schematic of Fisher 3610JP Positioner,' p. 31"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 38A8900-B / B1845-1.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-schematic-3611jp
teaches: >
  The full internal operating schematic of the 3611JP pneumatic positioner
  for sliding-stem piston actuators — the cam-less feedback variant (no
  cam in the feedback linkage, unlike the rotary-actuator schematics).
concept-tags: [3611JP, principle of operation, schematic, sliding-stem, piston actuator]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 22 'Schematic of Fisher 3611JP Positioner,' p. 32"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 38A8902-B / B1846-1. Appears above the "Maintenance" heading that
  begins later on the same printed page; grouped here under Principle of
  Operation by subject matter (see this file's intro note on the pp. 29-35
  figure/section overlap).
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-schematic-3620j
teaches: >
  The full internal operating schematic of the 3620J electro-pneumatic
  positioner — a 3610J pneumatic positioner combined with a magnet/coil
  4-20mA input stage feeding the same force-balance mechanism.
concept-tags: [3620J, principle of operation, schematic, electro-pneumatic, magnet coil]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 23 'Schematic of Fisher 3620J Positioner,' p. 33"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 38A6593-A / B2150. Printed on the same page as continued
  Maintenance-section warning text (see this file's intro note).
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-schematic-3620jp
teaches: >
  The full internal operating schematic of the 3620JP electro-pneumatic
  positioner for piston actuators — the double-acting, electro-pneumatic
  variant combining Figure 21's piston-actuator mechanism with Figure 23's
  magnet/coil input stage.
concept-tags: [3620JP, principle of operation, schematic, electro-pneumatic, piston actuator]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 24 'Schematic of Fisher 3620JP Positioner,' p. 34"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing 38A6594-A / B2149. The "Positioner Disassembly" Maintenance
  subsection begins immediately below this figure on the same page.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-schematic-3621jp
teaches: >
  The full internal operating schematic of the 3621JP electro-pneumatic
  positioner for sliding-stem piston actuators — the cam-less,
  electro-pneumatic variant combining Figure 22's mechanism with the
  magnet/coil input stage.
concept-tags: [3621JP, principle of operation, schematic, electro-pneumatic, sliding-stem]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 25 'Schematic of Fisher 3621JP Positioner,' p. 35"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 38A6592-A / B2147.
mediaStatus: unreviewed
```

### Parts Ordering / Parts List (printed pp. 46–59)

```yaml
id: f3610j-cmp-positioner-assembly
teaches: >
  The complete exploded parts assembly drawing of the 3610J/3620J
  positioner body across four sectional views (D-D, E-E, F-F, and the
  nozzle/flapper detail), including the 3611JP/3621JP-specific rotated
  variant of section D-D — the master keyed reference for the positioner's
  internal parts.
concept-tags: [positioner assembly, exploded parts, section D-D, section E-E, section F-F, nozzle flapper]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 26 'Positioner Assembly,' pp. 51-53"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Three-page figure, drawing 58A7810-W SHT 4 throughout. Referenced
  throughout the Parts List by key number; the master assembly drawing the
  parts tables key against.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-gauge-block-bypass-assemblies
teaches: >
  The exploded keyed parts breakdown of the gauge block and bypass valve
  assemblies across three positioner variants (3610J/3610JP,
  3611JP-with-gauges) plus the standalone bypass valve assembly for 3610J
  positioners.
concept-tags: [gauge block, bypass valve, exploded parts, 3610J, 3611JP]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 27 'Gauge Block and Bypass Valve Assemblies,' p. 54"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings 58A7810W SHT 1, 58A7810-W SHT 3, and 29A6028-B.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-3620j-integral-filter-regulator
teaches: >
  The exploded keyed parts breakdown of a 3620J positioner built with an
  integrally mounted 67CFR filter/regulator, including gauges.
concept-tags: [3620J, integral filter regulator, 67CFR, exploded parts]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 28 'Fisher 3620J Positioner with Integral Mounted Filter/Regulator,' p. 55"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 41B2337-K SHT 1.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-feedback-assemblies-3610-3620
teaches: >
  The exploded keyed parts breakdown of feedback assemblies for
  3610J/3610JP/3620J/3620JP positioners across every supported actuator
  model and size (1051, 1052, 1061, 1069, 2052) — six distinct hardware
  configurations, cam-arm and stem-connector variants included.
concept-tags: [feedback assembly, exploded parts, 1051 actuator, 1052 actuator, 1061 actuator, 2052 actuator]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 29 'Feedback Assemblies for Fisher 3610J, 3610JP, 3620J, and 3620JP Positioners,' pp. 56-57"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Two-page figure. Drawings 58A7810-W SHT 1 (p. 56, two configurations) and
  58A7810-W SHT 2 (both pages, four more configurations).
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-feedback-assemblies-3611-3621
teaches: >
  The exploded keyed parts breakdown of feedback assemblies for
  3611JP/3621JP sliding-stem positioners across 585-size actuators with
  varying stem travel ranges, and 585C size 25/50 actuators.
concept-tags: [feedback assembly, exploded parts, 3611JP, 3621JP, 585 actuator, 585C actuator]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 30 'Feedback Assemblies for Fisher 3611JP and 3621JP Positioners,' p. 58"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawing 58A7810-W SHT 3.
mediaStatus: unreviewed
```

```yaml
id: f3610j-cmp-3622-converter-assembly
teaches: >
  The exploded keyed parts breakdown of the complete 3622 electro-pneumatic
  converter assembly, covering both the 3620JP configuration and the 3620J
  positioner-with-gauges configuration.
concept-tags: [3622, converter exploded parts, 3620JP, 3620J]
status: current
source:
  - doc: Fisher 3610J/3620J Positioners and 3622 Converter IM (D200149X012, June 2022)
    locator: "Figure 31 'Fisher 3622 Electro-Pneumatic Converter Assembly,' p. 59"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Drawings 41B2337-K SHT 1 and SHT 2.
mediaStatus: unreviewed
```

## Open Items

- **Scope boundary, confirmed directly:** whole document, PDF pages 1–60
  (printed pp. 1–59 content, p. 60 an unnumbered-in-body back-matter legal
  page). Rendered and read at the front-matter/TOC page (p. 1), every
  section-boundary page, and every figure page. Page offset (PDF = printed,
  exact) confirmed at three separate points (pp. 2, 20, 59) and held
  consistently throughout.
- **Full coverage accounting:** 31 real figures (Figure 1 through Figure
  31), every one identified and visually confirmed against its rendered
  page — this matches the full estimate with no gap. Figure 1 required a
  correction mid-pass (see the intro note above): it is real and present,
  just printed on the front cover/contents page rather than in the body.
- **Low-confidence flags:** the drawing number under Figure 12 (3622
  equivalent circuit) was ambiguous on first visual read at 150 DPI — the
  base sheet number could be misread as "2182335-D" instead of "21B2335-D."
  Resolved with certainty by extracting the literal embedded PDF text
  (not OCR/visual reading) for both this figure and its 3582/582i sibling,
  confirming "21B2335-D" in both documents. No other figure had a
  low-confidence reading.
- **Duplicate-figure-number and source-citation-error findings:** none.
  Figures 10 and 11 are genuinely distinct (same diagnostic hardware,
  different host housing for the 3610J/3610JP versus 3620J/3620JP
  families) — not a duplicate pair. Figures 10 and 8 are each legitimately
  re-cited by caption in later body text/parts tables (pp. 15, 50) — same
  figures, not citation errors.
- **Table-exclusion confirmation:** 8 genuine numbered tables identified
  (Tables 1–8, printed pp. 3–6, 24, 25 ×2, 28) and correctly excluded — all
  are specification/selection tables with their own separate numbering,
  distinct from the flat figure sequence.
- **Cross-reference findings:** the shared drawing 21B2335-D (Figure 12,
  "Fisher 3622 Converter Equivalent Circuit") is confirmed — by matching
  drawing number (verified via embedded PDF text, not visual read alone)
  and direct visual comparison of the rendered circuit — to be the same
  base drawing reused in `Subject-Matter Index — Fisher 3582-3582i
  Positioners.md`'s Figure 10 ("Input Equivalent Circuit for Fisher 582i
  Converter," drawing 21B2335-D / A6012). Cross-referenced by id in both
  records' `notes`. No overlap found against `Subject-Matter Index — Fisher
  FIELDVUE DVC6200.md`, `Subject-Matter Index — Fisher FIELDVUE DVC7K-H.md`, or
  `Subject-Matter Index — Fisher 585C Series Piston Actuators.md` — those
  manuals cover unrelated hardware (digital valve controllers and piston
  actuators) with no shared drawing numbers or visually similar figures.
  Within this document, Figures 15 and 16 share a base drawing sheet
  (20B1277-E) under different sub-drawing codes — a multi-sheet drawing
  within the same manual, not a cross-document duplication, noted in both
  records.
- **Zero-figure section, confirmed methodically:** the Maintenance section
  (printed pp. 32–45, minus the pp. 32–35 span shared with Principle of
  Operation's tail-end schematics) contains no figures of its own — checked
  by direct inspection of the section's actual pages, not assumed from its
  procedural/text-heavy title.
- **Archive/legacy material:** none consulted, none needed — first-party
  current document, sole source for its own content.
