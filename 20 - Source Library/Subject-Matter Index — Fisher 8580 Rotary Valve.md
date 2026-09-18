---
title: Subject-Matter Index — Fisher 8580 Rotary Valve
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher 8580 Rotary Valve IM (D103300X012, April 2020)
chapter: whole document — no chapter structure
updated: 2026-09-19
---

# Subject-Matter Index — Fisher 8580 Rotary Valve

Standing full-chapter cataloging pass, part of the "index all Technical
Publications manuals" directive (Franz, 2026-09-19) — deliberately ahead of
individual course citations (zero real citations to this manual exist
anywhere in the vault as of this pass). Document-grain, per
`Subject-Matter Index — Process & Standards.md`: no numbered chapter structure,
whole 24-page document is the bounded unit.

Every page was rendered as an image (150dpi) and visually inspected. Figures
numbered flatly (`Figure 1`–`Figure 12`), no chapter prefix.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher 8580 Rotary Valve IM** | D103300X012 · April 2020 | `current` | First-party Emerson/Fisher document; sole source for this manual. No archive or legacy material was consulted or found relevant. |

## Components

### Introduction (printed p. 1)

```yaml
id: f8580-cmp-valve-actuator-overview
teaches: >
  A complete Fisher 8580 rotary valve (lugged style) with a 2052 actuator
  and DVC6200 digital valve controller mounted — the whole-unit overview
  photo.
concept-tags: [8580, rotary valve, double-offset disk, actuator overview, DVC6200]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 1 'Fisher 8580 Valve with 2052 Actuator and DVC6200 Digital Valve Controller,' p. 1 — lugged style"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same cross-document assembly pattern as the 9500 manual's own Figure 1 (real valve + real actuator + real DVC6200) — a distinct photo, not a duplicate.
mediaStatus: unreviewed
```

### Installation (printed pp. 6–7)

```yaml
id: f8580-cmp-stud-bolts-wafer-lugged
teaches: >
  Stud-bolt geometry for wafer-style and lugged-style (threaded holes)
  valve body installation, keyed to the manual's own dimension tables —
  which stud length/position figure to reference for a given body style.
concept-tags: [8580, stud bolts, wafer style, lugged style, installation]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 2 'Stud Bolts for Installation (also see table 5),' p. 6 — two-panel (Wafer-Style Valve Body, Lugged-Style Valve Body [Threaded Holes])"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Table 5 (not catalogued — pure dimensional data, no figure caption).
mediaStatus: unreviewed
```

```yaml
id: f8580-cmp-stud-bolts-double-flange
teaches: >
  Stud-bolt geometry for double-flange valve body installation, both
  threaded-hole and through-hole variants — the double-flange counterpart
  to Figure 2's wafer/lugged coverage.
concept-tags: [8580, stud bolts, double-flange, installation]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 3 'Stud Bolts for Installation (also see table 6),' p. 7 — two-panel (Double-Flange Valve Body [Threaded Holes], Double-Flange Valve Body [Through Holes])"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Companion to Table 6 (not catalogued — pure dimensional data).
mediaStatus: unreviewed
```

```yaml
id: f8580-cmp-bonding-strap-assembly
teaches: >
  The optional shaft-to-valve-body bonding strap assembly, shown in
  face-on and sectional views — the electrical continuity path some
  installations require between the rotating shaft and the grounded
  valve body.
concept-tags: [8580, bonding strap, electrical continuity, shaft, optional assembly]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 4 'Optional Shaft-to-Valve Body Bonding Strap Assembly,' p. 7 — two-view (face-on, sectional); keys 130, 131"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Same construction concept as the Fisher 9500 manual's own Figure 4 (Grounding Assembly), same key numbers (130, 131) — a genuinely different product's version of the same accessory, not a shared source figure.
mediaStatus: unreviewed
```

### Maintenance — Packing (printed p. 10)

```yaml
id: f8580-cmp-packing-arrangement-details
teaches: >
  Four packing arrangements compared in one figure: standard PTFE V-ring,
  standard graphite ribbon, and — under the ENVIRO-SEAL packing family —
  single PTFE and graphite variants, each shown as a labelled sectional
  with tightening notes (conductive-packing note, lubrication, parallel
  surfaces while tightening).
concept-tags: [8580, packing arrangement, PTFE V-ring, graphite ribbon, ENVIRO-SEAL, tightening procedure]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 5 'Packing Arrangement Details,' p. 10 — 4-panel (Standard Packing: PTFE V-Ring, Graphite Ribbon; ENVIRO-SEAL Packing: Single PTFE, Graphite; 3 numbered notes)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Topical link, not a shared source figure, checked directly:** two of
  the four panels are explicitly labelled "ENVIRO-SEAL PACKING," but this
  is the 8580's own product-specific packing-box geometry (rotary valve),
  visually distinct from `Subject-Matter Index — Fisher ENVIRO-SEAL Packing
  System.md`'s figures (sliding-stem easy-e valves) — confirmed by direct
  comparison, not assumed from the shared name. No id collision; the two
  manuals cover the same packing family for different valve types.
  Separately: a later page (17) of this manual explicitly directs ENVIRO-SEAL
  rotary packing installation to instruction manual D101643X012, a
  **rotary-specific ENVIRO-SEAL manual this vault does not hold** (per
  `Technical Publications.md`'s own note) — flagged, not something this
  pass can cross-reference or catalogue.
mediaStatus: unreviewed
```

### Maintenance — Replacing the Disk, Shafts, or Bearings (printed pp. 14–19)

```yaml
id: f8580-cmp-bearing-tab-orientation
teaches: >
  Correct orientation of the bearing tabs on both sides of the valve body
  (backside view plus two magnified insets) — a disassembly/reassembly
  check that prevents installing a bearing rotated wrong.
concept-tags: [8580, bearing tab, orientation, disassembly, reassembly]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 6 'Orientation of Bearing Tabs,' p. 14 — labelled (Backside of Valve, Bearing Tab ×2 magnified insets)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo with two magnified circular insets, not a line drawing.
mediaStatus: unreviewed
```

```yaml
id: f8580-cmp-taper-expansion-pin-installation
teaches: >
  Where and how the taper/expansion pins are driven into the disk/shaft
  assembly, including the "solid contact" identification method (sound
  and hammer bounce) that confirms correct seating — the one-piece
  through-shaft design's single pin connection.
concept-tags: [8580, taper pin, expansion pin, disk-shaft assembly, through-shaft design]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 7 'Taper / Expansion Pin Installation,' p. 16 — labelled (Taper/Expansion Pin Location)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Body text notes the NPS 8-12 one-piece through-shaft design (since
  October 2015) uses only one pin connection, vs. two for the two-piece
  split-shaft design (NPS 2-6, and pre-2015 NPS 8-12) — the figure shows
  the current one-piece case.
mediaStatus: unreviewed
```

```yaml
id: f8580-cmp-valve-body-sectional
teaches: >
  Full sectional of a typical 8580 valve body: X1/X2 disk-to-seal-retainer
  clearance measurement points, CCW disk rotation to open, actuator end
  of shaft, and the position-indication mark — the reference used for
  confirming the fully-closed disk position during actuator mounting.
concept-tags: [8580, valve body sectional, disk position, CCW rotation, position indication mark]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 8 'Sectional of Typical Valve Body,' p. 17 — labelled (X1, X2, CCW Disk Rotation to Open, Actuator End of Shaft, Position Indication Mark Indicates Approximate Disk Position)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Directly referenced by the Actuator Mounting procedure's X1/X2 measurement step later in the manual.
mediaStatus: unreviewed
```

```yaml
id: f8580-cmp-follower-spring-seat-assembly
teaches: >
  Exploded view of the follower spring/spring seat assembly (spring
  flanked by two seats) — the small sub-assembly reinstalled inside the
  follower shaft before packing installation.
concept-tags: [8580, follower spring, spring seat, exploded view]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 9 'Follower Spring/Spring Seat Assembly,' p. 18 — labelled (Follower Spring Seat, key 9 ×2; Follower Spring, key 12)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Simple 3-part exploded view, smallest parts diagram in this manual.
mediaStatus: unreviewed
```

```yaml
id: f8580-cmp-lever-shaft-disk-orientation-matrix
teaches: >
  The full actuator-mounting reference matrix for the 8580: right-hand
  and left-hand mounting, four style/action combinations (PDTO/PDTC),
  valve-closed disk orientation, and four mounting positions each — the
  definitive lookup for correctly indexing the actuator lever to the
  valve shaft, plus a typical-actuator sectional (Fisher 1052) naming the
  actuator rod, lever, and index marks the matrix assumes.
concept-tags: [8580, actuator mounting, lever orientation, PDTO, PDTC, mounting position, valve shaft index mark]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 10 'Lever/Shaft/Disk Orientation with Valve Closed,' p. 19 — labelled sectional (Typical Actuator, Fisher 1052) plus a full mounting/style/position reference table with per-cell diagrams"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The same category of dense reference-matrix figure as the Fisher 9500
  manual's own Figure 6 — same flag applies: unlikely to fit a plain crop
  at readable size if ever placed on a slide; a template/redraw decision
  would be needed first.
mediaStatus: unreviewed
```

### Parts diagrams (printed pp. 22–23)

```yaml
id: f8580-cmp-valve-assembly-exploded
teaches: >
  Full exploded assembly of the Fisher 8580 valve — body, disk, shaft,
  seal ring, packing, retainer, and mounting hardware, 30+ keys across
  the whole body — the comprehensive parts-ordering reference for a
  complete rebuild.
concept-tags: [8580, valve assembly, exploded view, seal ring, packing, retainer]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 11 'Fisher 8580 Valve Assembly,' p. 22 — large numbered exploded view, keys 1–41 (non-sequential; several keys starred for alloy construction; keys 31, 32, 33, 38, 130, 131 noted as parts not shown)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The largest, most complex parts diagram in this manual. Numbered-only
  callouts (no in-figure text labels) — key numbers resolved in the
  manual's own Parts List. If ever placed on a slide, would very likely
  need to be broken into sub-assembly crops rather than shown whole.
mediaStatus: unreviewed
```

```yaml
id: f8580-cmp-seal-assembly-detail
teaches: >
  Close-up detail of the seal assembly for all three construction types
  side by side: soft seal, metal seal, and flow ring — each shown as a
  magnified sectional inset with its own key callouts, making the
  construction-type differences directly comparable.
concept-tags: [8580, seal assembly, soft seal, metal seal, flow ring, construction comparison]
status: current
source:
  - doc: Fisher 8580 Rotary Valve IM (D103300X012)
    locator: "Figure 12 'Fisher 8580 Seal Assembly Detail,' p. 23 — 3-panel (Soft Seal Construction Assembly, Metal Seal Construction Assembly, Flow Ring Construction Assembly), each with a magnified circular inset"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: A genuine 3-way contrast figure — good template-gallery contrast-role candidate if this manual is ever cited by a real course.
mediaStatus: unreviewed
```

## Open Items

- **Scope confirmed by direct inspection.** All 24 pages rendered (150dpi) and read directly. No numbered chapter/section structure — house structure only (Introduction/Description/Specifications, Installation, Maintenance [Packing/Seal Ring/Disk-Shafts-Bearings], Actuator Mounting, Parts Ordering, Parts Kits, Parts List) — document-grain file.
- **Full coverage: 12 figures (Figure 1–Figure 12), no gaps.** Located via a full-text sweep for `Figure [0-9]` across the whole document (pages 1, 6, 7 ×2, 10, 14, 16, 17, 18, 19, 22, 23), then every one visually confirmed against its rendered page.
- **Table exclusion confirmed.** Tables 5–8 (stud bolt data, follower shaft threads, blind flange torque, actuator-mounting torque) all correctly excluded — none carry a "Figure" caption.
- **No duplicate figure numbers, no source citation errors found** in this manual.
- **No low-confidence flags** — every figure directly confirmed against its rendered page.
- **Real external reference found — RESOLVED 2026-09-20.** p. 17 directs ENVIRO-SEAL rotary packing installation to a separate manual, D101643X012 — flagged at the time of this pass as not held in this vault. Franz has since added it; it's now indexed at `Subject-Matter Index — Fisher ENVIRO-SEAL Rotary Packing System.md`, cross-checked against this manual's own packing content (no shared drawing number — genuinely distinct figures, not a duplicate).
- **Topical link checked and confirmed distinct, not a duplicate:** Figure 5's ENVIRO-SEAL panels are this valve's own product-specific packing geometry, visually different from the sliding-stem ENVIRO-SEAL manual's own figures — see that record's notes for the full comparison.
- **Cross-reference check, confirmed clean otherwise.** Checked the Control Valve Handbook (all 15 chapters), Oil & Gas Sourcebook, `Subject-Matter Index — 14101 ch1-ch2.md`, `Subject-Matter Index — 14101 ch3.md`, and `Subject-Matter Index — bench-set-657.md` — no further figure-level overlap found. The Fisher 9500 manual (also catalogued this pass) shares construction concepts (grounding/bonding strap, mounting-position reference matrices) but not source figures — noted in each relevant record, not merged.
- **No archive or legacy material** was found or consulted — the manual is `current` throughout.
- **Zero real course citations exist for this manual as of this pass** — cataloguing ahead of demand is deliberate, per this directive.
