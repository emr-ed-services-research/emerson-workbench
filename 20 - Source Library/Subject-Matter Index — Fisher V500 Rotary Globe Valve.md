---
title: Subject-Matter Index — Fisher V500 Rotary Globe Valve
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012, June 2026)
chapter: whole document — numbered sections, flat figure numbering
updated: 2026-09-19
---

# Subject-Matter Index — Fisher V500 Rotary Globe (Eccentric Plug) Control Valve

Standing full-chapter cataloging pass, part of the "index all Technical
Publications manuals" directive (Franz, 2026-09-19) — deliberately ahead of
individual course citations (zero real citations to this manual exist
anywhere in the vault as of this pass). Document-grain, per
`Subject-Matter Index — Process & Standards.md`: whole document is the bounded
unit, no `ch<N>` suffix.

**Real structural finding, not anticipated by the schema addition as
written:** this manual is NOT purely flat like its 14 siblings in this
batch — it has real numbered sections (`Section 1: Introduction`, `1.1`,
`1.2`, `2.1 Ceramic Trim`, `3.1`, `3.2`, ...), the same hybrid shape the
Process & Standards doc's schema addition described as specific to the two
FIELDVUE DVC controllers. Figures are still numbered flatly (`Figure
1`–`Figure 15`, no chapter prefix), and an Appendix carries its own
separate `Figure A-N` numbering. Grouping headers below use the numbered
section form where the manual has one. This should be folded into the
Process & Standards doc as a correction: the hybrid case isn't limited to
the two DVC controllers.

Every page carrying a figure was rendered as an image (150dpi) and visually
inspected.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM** | D100423X012 · June 2026 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Section 1 — Introduction (printed p. 1)

```yaml
id: fv500-cmp-valve-actuator-overview
teaches: >
  A complete Fisher V500 flanged rotary control valve assembly with a
  1061 actuator and FIELDVUE DVC6200 digital valve controller mounted —
  the whole-unit overview.
concept-tags: [V500, eccentric plug, rotary valve, actuator overview, DVC6200]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 1 'Fisher V500 Flanged Rotary Control Valve with 1061 Actuator and FIELDVUE DVC6200 Digital Valve Controller,' p. 1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same cross-document assembly pattern as the 9500, 8580, and Vee-Ball manuals' own Figure 1 — a distinct photo, not a duplicate.
mediaStatus: unreviewed
```

### Section 2 — Installation (printed pp. 5, 7–8)

```yaml
id: fv500-cmp-lever-orientation-matrix
teaches: >
  The full actuator-lever-orientation reference matrix for the V500:
  right-hand and left-hand mounting, four style/action combinations
  (Style A-D, PDTC/PDTO), forward/reverse flow, valve-open orientation,
  and four actuator positions each.
concept-tags: [V500, actuator mounting, lever orientation, PDTC, PDTO, mounting position]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 2 'Index Marks for Actuator Lever Orientation,' p. 5 — full mounting/style/position reference table with per-cell diagrams"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same category of dense reference-matrix figure as the 9500, 8580, and
  Vee-Ball manuals' own lever/mounting-position matrices — same flag
  applies: unlikely to fit a plain crop at readable size; a
  template/redraw decision would be needed first.
mediaStatus: unreviewed
```

```yaml
id: fv500-cmp-line-bolts-valve-bodies
teaches: >
  Three line-bolt styles (I, II, III) for V500 valve bodies, shown on a
  real rendered assembly with each style called out — the reference the
  installation procedure's stud/nut tables (Tables 3-4) are keyed to.
concept-tags: [V500, line bolts, installation, bolt style]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 3 'Line Bolts for V500 Valve Bodies (Also See Table 3),' p. 7 — labelled (Style I, Style II, Style III)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: A rendered/CAD-style image, not a line drawing — companion to Tables 3-4 (dimensional data, not catalogued).
mediaStatus: unreviewed
```

```yaml
id: fv500-cmp-bonding-strap-assembly
teaches: >
  The optional shaft-to-body bonding strap assembly for V500 valves,
  face-on and mounted sectional views — directly tied to a real safety
  warning about static-electricity discharge in hazardous areas.
concept-tags: [V500, bonding strap, electrical continuity, static discharge, hazardous area]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 4 'Optional Shaft-to-Body Bonding Strap Assembly,' p. 8 — labelled (View A-A, Valve Body, Actuator; keys 130, 131, 25)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same construction concept and key numbers (130, 131) as the 9500, 8580, and Vee-Ball manuals' own bonding/grounding strap figures — a genuinely different product's version, not a shared source figure.
mediaStatus: unreviewed
```

### Section 3.1 — Replacing Packing (printed pp. 14–15)

```yaml
id: fv500-cmp-packing-arrangements
teaches: >
  A large, multi-panel figure covering every V500 packing arrangement:
  leakoff, double packing (PTFE-bound composition/graphite ribbon and
  PTFE/V-ring, each split by pressure/vacuum/pressure-vacuum service and
  purged-bearing construction), single packing (graphite ribbon/PTFE-
  composition and PTFE V-ring), plus — continued onto the next page — a
  labelled single-PTFE-packing sectional and an ENVIRO-SEAL PTFE/
  composition or graphite panel.
concept-tags: [V500, packing arrangement, leakoff, double packing, single packing, ENVIRO-SEAL, purged bearing]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 5 'Packing Arrangements,' pp. 14–15 (spans two pages, second page captioned '(continued)') — 12 total panels across both pages"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Real, genuinely useful find, not just a duplicate topical link:**
  unlike the 8580 and Vee-Ball manuals, which only *cite* the external
  "ENVIRO-SEAL Packing System for Rotary Valves" manual (D101643X012, not
  held in this vault), this V500 manual's own Figure 5 (continued page)
  directly contains a real, labelled ENVIRO-SEAL rotary packing panel
  ("PTFE/Composition or Graphite ENVIRO-SEAL Packing Arrangements") — a
  genuine, in-vault visual for content the missing external manual would
  otherwise make inaccessible. The largest single figure in this manual
  (12 panels, 2 pages) — would need to be split by panel/service-type if
  ever placed on a slide, not used as one crop.
mediaStatus: unreviewed
```

```yaml
id: fv500-cmp-pry-bar-use
teaches: >
  Where to insert a pry bar against the valve plug and thrust washer,
  and in which direction to pry, before tightening packing flange nuts —
  a real procedural safety/technique figure, not a static parts diagram.
concept-tags: [V500, pry bar, valve plug, thrust washer, packing installation]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 6 'Pry Bar Use,' p. 15 — labelled (Actuator Side of Valve, Thrust Washer, Pry in This Direction, Valve Plug)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Directly referenced by the packing-installation procedure's own pry-bar step.
mediaStatus: unreviewed
```

### Section 3.2 — Replacing Retainer, Seat Ring, Face Seals and Insert (printed p. 16)

```yaml
id: fv500-cmp-retainer-tool-data
teaches: >
  Dimensioned drawings for shop-fabricating a retainer removal/
  installation tool (key 33), in two forms — hex-drive for NPS 1
  (optional for 1-1/2) and square-drive for NPS 1-1/2 through 12 — plus
  the per-NPS dimension and retainer-torque tables the tool is sized
  against.
concept-tags: [V500, retainer tool, shop fabrication, torque, dimension table]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 7 'Data for Making and Using Retainer Tool (Key 33) (Also See Tables 5 and 6),' p. 16 — two tool-drawing variants with dimension callouts A-H"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: A fabrication-drawing figure, same category as the Vee-Ball manual's own HD Seal Removal Plate and centering-template figures.
mediaStatus: unreviewed
```

### Section 3.3 — Replacing Valve Plug, Shaft and Bearings — Disassembly (printed pp. 19, 22–23)

```yaml
id: fv500-cmp-valve-plug-pin-removal
teaches: >
  Where and from which end to drive pins out for pin removal, contrasted
  across two body styles (flanged-rotary face-to-face vs. flanged-globe
  face-to-face) — plus the slash-mark orientation check on the splined
  shaft end used throughout disassembly/reassembly.
concept-tags: [V500, valve plug, pin removal, slash mark, splined shaft, disassembly]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 8 'Detail of Valve Plug for Pin Removal,' p. 19 — labelled (Flanged - Rotary Face-to-Face, Flanged - Globe Face-to-Face, Slash Mark on Splined End of Shaft)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion contrast to Figure 10 (pin insertion, the reverse procedure).
mediaStatus: unreviewed
```

```yaml
id: fv500-cmp-ram-dimension-bearing-removal
teaches: >
  A single-dimension drawing (length L, diameter A) for the ram tool used
  to remove bearings — the reference Table 9's per-NPS ram dimensions are
  keyed to.
concept-tags: [V500, bearing removal, ram tool, dimension]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 9 'Ram Dimension for Bearing Removal (Also See Table 9),' p. 22"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Simple single-dimension line drawing, companion to Table 9 (not catalogued).
mediaStatus: unreviewed
```

```yaml
id: fv500-cmp-valve-plug-pin-insertion
teaches: >
  Where and from which end pins go in during reassembly, contrasted
  across the same two body styles as Figure 8 (flanged-rotary vs.
  flanged-globe face-to-face), including the bench-orientation setup and
  slash-mark alignment check.
concept-tags: [V500, valve plug, pin insertion, slash mark, splined shaft, assembly]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 10 'Detail of Valve Plug for Pin Insertion,' p. 23 — labelled (Flanged - Rotary Face-to-Face, Flanged - Globe Face-to-Face, Slash Mark on Splined End of Shaft, Bench)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: The reverse-procedure companion to Figure 8.
mediaStatus: unreviewed
```

### Parts diagrams (printed pp. 29–34)

```yaml
id: fv500-cmp-valve-assembly-small
teaches: >
  Full numbered exploded assembly of the Fisher V500 rotary control
  flange valve, NPS 1 and 1-1/2 — main body sectional plus double-packing
  and sealed-bearing sub-assembly insets — keyed to Table 14's packing/
  bearing-construction lookup.
concept-tags: [V500, valve assembly, exploded view, NPS 1, double packing, sealed bearing]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 11 'Fisher V500 Rotary Control Flange Valve, NPS 1 and 1-1/2,' p. 29 — numbered sectional plus sub-assembly insets, keys 1-32; parts not shown: 28, 30, 31, 33, 36, 37, 130, 131, 134, 135"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Table 14 ('Explanation of Valve Construction,' not catalogued — pure reference text, no figure caption).
mediaStatus: unreviewed
```

```yaml
id: fv500-cmp-valve-plug-views
teaches: >
  Valve plug construction compared across three variants: standard
  (NPS 1-8), VTC ceramic (NPS 3-8, pre-assembled only), and VTC ceramic
  (NPS 1/1-1/2/2) — plus a fourth standard-plug detail for NPS 12 with
  involute-spline callouts.
concept-tags: [V500, valve plug, VTC ceramic, involute spline, plug construction]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 12 'Valve Plug Views,' p. 30 — 4-panel (Standard NPS 1-8, VTC Ceramic NPS 3-8, VTC Ceramic NPS 1/1-1/2/2, Standard NPS 12)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real construction-variant contrast, good template-gallery candidate if ever cited.
mediaStatus: unreviewed
```

```yaml
id: fv500-cmp-valve-assembly-medium
teaches: >
  Full numbered exploded assembly of the Fisher V500 rotary control
  valve, NPS 2, 3, 4, 6, and 8 — main body sectional plus double-packing,
  sealed-bearing, and a gap-measurement callout.
concept-tags: [V500, valve assembly, exploded view, NPS 2-8, double packing, sealed bearing]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 13 'Fisher V500 Rotary Control Valve, NPS 2, 3, 4, 6 and 8,' p. 32 — numbered sectional plus insets, keys 1-32; parts not shown: 28, 30, 31, 33, 36, 37, 130, 131, 134, 135"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: The mid-size-range counterpart to Figure 11.
mediaStatus: unreviewed
```

```yaml
id: fv500-cmp-valve-assembly-large
teaches: >
  Full numbered exploded assembly of the Fisher V500 rotary control
  valve, NPS 10 and 12 — main body sectional plus double-packing,
  NPS 10-specific plug detail, and sealed-bearing sub-assembly insets.
concept-tags: [V500, valve assembly, exploded view, NPS 10-12, double packing, sealed bearing]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 14 'Fisher V500 Rotary Control Valve, NPS 10 and 12,' p. 33 — numbered sectional plus insets, keys 1-45; parts not shown: 28, 30, 31, 33, 36, 37, 130, 131, 134, 135"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: The largest-size-range counterpart to Figures 11 and 13.
mediaStatus: unreviewed
```

```yaml
id: fv500-cmp-enviro-seal-rotary-packing
teaches: >
  Full numbered exploded ENVIRO-SEAL rotary packing arrangements for both
  PTFE and graphite packing — stacking order of packing rings for each
  material, plus a labelled sectional of each in a standard-depth packing
  box (keys 100-107, 113).
concept-tags: [V500, ENVIRO-SEAL, rotary packing, PTFE packing, graphite packing, stacking order]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure 15 'ENVIRO-SEAL Rotary Packing Arrangements with PTFE and Graphite Packing,' p. 34 — 4-panel (Stacking Order of PTFE Packing Rings, Single PTFE Packing Standard Depth Box, Stacking Order of Graphite Packing Rings, Graphite Packing Standard Depth Box)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A second, dedicated ENVIRO-SEAL rotary packing figure (distinct from
  Figure 5's ENVIRO-SEAL panel) — fully numbered with its own key list,
  genuinely useful real content for a topic the external, unheld
  ENVIRO-SEAL rotary manual (D101643X012) would otherwise leave
  uncovered in this vault.
mediaStatus: unreviewed
```

### Appendix A — Instructions for Non-Series B / Flangeless Bodies (printed p. 36)

```yaml
id: fv500-cmp-line-bolt-dimensions-flangeless
teaches: >
  Line bolt dimensions (M, N, P, R) for flangeless V500 valve bodies,
  using line studs (key 36) or cap screws (key 37) — the appendix's own
  dimensional reference, distinct from the main-body Figure 3 (which
  covers flanged bodies).
concept-tags: [V500, flangeless body, line bolt, line stud, cap screw, appendix]
status: current
source:
  - doc: Fisher V500 Rotary Globe (Eccentric Plug) Control Valve IM (D100423X012)
    locator: "Figure A-1 'Line Bolt Dimensions for Flangeless Valve Bodies (Also See Tables A2 and A3),' p. 36"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Appendix-specific figure numbering, confirmed distinct from the main
  body's flat 1-15 sequence** — this is "Figure A-1," not a 16th main
  figure. Only one appendix figure exists (confirmed by sweeping the full
  appendix text for any other "Figure A-N" caption).
mediaStatus: unreviewed
```

## Open Items

- **Scope confirmed by direct inspection.** All pages carrying a figure were rendered (150dpi) and read directly — pages 1, 5, 7, 8, 14, 15, 16, 19, 22, 23, 29, 30, 32, 33, 34, 36. Document-grain file, no `ch<N>` suffix.
- **Real structural nuance found and flagged for the Process & Standards doc:** unlike its 14 siblings in this batch, this manual has real numbered sections (Section 1, 1.1, 1.2, 2.1, 3.1, 3.2, 3.3...) — the same hybrid shape previously described as specific to the two FIELDVUE DVC controllers. Figures stay flat-numbered (1-15) despite the numbered sections, and the Appendix uses its own separate "A-N" numbering. This should be corrected in `Subject-Matter Index — Process & Standards.md`'s "Grouping headers" section — the hybrid case isn't a two-document special case, it's a real pattern that can recur.
- **Full coverage: 15 main figures (Figure 1–Figure 15) plus 1 appendix figure (Figure A-1), no gaps.** Confirmed via a precise caption-only sweep (`^Figure N.` at line start) after an initial broad sweep produced false positives from inline body-text references (e.g. "as shown in Figure 5. Make sure split rings are arranged..." — a sentence boundary, not a second Figure 5 caption) and cross-page continuation ("Figure 5. Packing Arrangements (continued)" on p. 15, confirmed as the same figure spanning two pages, not two figures).
- **Table exclusion confirmed.** Numerous dimension/torque tables (Tables 3-9, 14, A-2, A-3) all correctly excluded — none carry a "Figure" caption.
- **No duplicate figure numbers, no source citation errors found** — the apparent "Figure 5" duplicate was a text-extraction artifact, resolved by direct visual confirmation (see above), not a real source duplication.
- **No low-confidence flags** — every figure directly confirmed against its rendered page.
- **Real, genuinely useful find, now complemented rather than uniquely load-bearing — RESOLVED 2026-09-20.** This manual contains **two** real, dedicated ENVIRO-SEAL rotary packing figures (part of Figure 5, and the standalone Figure 15) — at the time of this pass, the only in-vault visual coverage of this topic, since D101643X012 (the dedicated ENVIRO-SEAL rotary manual the 8580 and Vee-Ball manuals only cite externally) was not held. Franz has since added it; it's now indexed at `Subject-Matter Index — Fisher ENVIRO-SEAL Rotary Packing System.md` and explicitly names the V500/eccentric-plug line in its own Figures 2 and 4 — cross-checked against this record's own drawing numbers, genuinely distinct, not a duplicate. This manual's own two figures remain real and cataloguable in their own right; they're no longer the only source for this topic in the library.
- **Two dense mounting-position/parts-assembly figures** (Figure 2 and Figures 11/13/14) flagged the same way as every other manual in this batch — unlikely to fit a plain crop; a template/redraw decision would be needed first.
- **Cross-reference check, confirmed clean.** Checked the Control Valve Handbook (all 15 chapters — especially ch3's eccentric plug valve body content), Oil & Gas Sourcebook, `Subject-Matter Index — 14101 ch1-ch2.md`, `Subject-Matter Index — 14101 ch3.md`, and `Subject-Matter Index — bench-set-657.md` — no figure-level overlap found. CVH ch3's `cvh-cmp-eccentric-plug-valve-body` (Figure 3.13) is a generic Handbook illustration of the eccentric-plug concept, visually distinct from this manual's own product-specific V500 photos and diagrams — confirmed by direct comparison, not assumed from topical adjacency.
- **No archive or legacy material** was found or consulted — the manual is `current` throughout.
- **Zero real course citations exist for this manual as of this pass** — cataloguing ahead of demand is deliberate, per this directive.
