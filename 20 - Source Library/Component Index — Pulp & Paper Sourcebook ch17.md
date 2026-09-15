---
title: Component Index — Pulp & Paper Sourcebook ch17
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch17 — Paper Machine
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 17

**Chapter 17 — "Paper Machine."** Standing full-chapter cataloguing pass,
continuing the whole-book completion pass begun with Chapter 1. The
book's largest single figure set — 19 real figures across 12 pages,
covering the complete paper-machine train from headbox through forming,
pressing, drying, and finishing. Almost entirely TAPPI-licensed process/
equipment illustrations, the same "Making Pulp and Paper Series, used with
permission" arrangement already confirmed in Chapters 14 and 15.

Chapter boundaries confirmed directly by rendering: PDF page 197 = printed
p. 17-1 (Chapter 17 divider, "Paper Machine," Figure 17-1 on the same page
as the divider), PDF page 208 = printed p. 17-12 (chapter's last content
page, no trailing blank). PDF page 209 confirmed as the Chapter 18 divider
— whose own real printed title is "Boilers — Water/Steam Cycle," not the
TOC's "Power & Recovery Boiler" (see `Component Index — Pulp & Paper
Sourcebook ch18.md` for that naming note). Zero page offset throughout
(PDF page = printed page number + 180). Chapter 17 = PDF pp. 197-208.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. All 19 figures are process/equipment illustrations licensed from **TAPPI's "Making Pulp and Paper Series," used with permission** — catalogued as `current` per the same TAPPI-attribution practice established in Chapters 14 and 15, with the credit flagged in each affected record's own `notes`. |

## Components

### Chapter 17 — Fourdrinier Overview and Headbox Types (printed pp. 17-1–17-2)

```yaml
id: pp-cmp-fourdrinier-paper-machine-overview
kind: figure
teaches: >
  The complete Fourdrinier paper machine as one labeled side-view diagram,
  end to end: headbox → forming wire → press section → dryer section →
  size press → calendar stack → reel — the chapter's own orienting figure,
  since every following section (headbox types, forming wire, pressing,
  drying, sizing, calendaring, reel, winder) is a zoom-in on one stage of
  this one machine.
concept-tags: [Fourdrinier paper machine, headbox, forming wire, press section, dryer section, size press, calendar stack, reel, paper machine overview]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-1 'Fourdrinier Paper Machine,' p. 17-1 (PDF p. 197)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." A full-machine side-view schematic,
  every named machine section labeled directly on the drawing.
```

```yaml
id: pp-cmp-paper-machine-wet-end-overview
kind: figure
teaches: >
  The wet-end system feeding the paper machine's headbox as one labeled
  isometric diagram: deaerator, cleaners, pressure screen, and stuffbox all
  feeding the headbox — the same equipment grouping already introduced in
  Chapter 15's thin-stock system and Chapter 16's stock approach system,
  shown here at the point it actually connects into the paper machine
  train.
concept-tags: [wet end, deaerator, cleaners, pressure screen, headbox, stuffbox, paper machine]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-2, p. 17-2 (PDF p. 198) — the source prints only the bare figure number and a period ('Figure 17-2.'), no descriptive caption title at all"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Genuinely uncaptioned in the source** — confirmed by direct visual
  inspection at 150 dpi: unlike every other figure in this chapter (and
  nearly every figure in this entire book), the printed caption line below
  this figure reads only "Figure 17-2." with no descriptive title following
  it. Not a rendering or extraction gap on this pass's part; the source
  itself omits the title. Drawing credited in-page: "Drawing is from
  TAPPI's Making Pulp and Paper Series and is used with permission." Very
  similar in equipment vocabulary and isometric layout to this book's own
  Figure 15-7 ("Thin Stock System") and Figure 16-1 ("Stock Approach
  System") — all three were directly visually compared; each is a
  distinct, separately drawn diagram (differing in exact pipe routing and
  pump placement), not the same drawing file reused across chapters,
  though all three illustrate the same real family of wet-end equipment.
  See `pp-cmp-thin-stock-system` (`Component Index — Pulp & Paper
  Sourcebook ch15.md`) and `pp-cmp-stock-approach-system` (`... ch16.md`)
  for the other two records in this three-way comparison. The descriptive
  id and `teaches` text above are this pass's own content-based
  description, standing in for the caption title the source itself never
  printed — not an invented source caption.
```

```yaml
id: pp-cmp-multitube-tapered-manifold
kind: figure
teaches: >
  The multitube tapered manifold: stock enters the headbox interior
  through a bank of parallel feed tubes tapered along the manifold's
  length, distributing flow evenly across the full width of the machine
  before it reaches the slice — the mechanism that delivers stock "through
  a series of tubes" into the headbox, referenced directly in the
  surrounding Headbox-types discussion.
concept-tags: [multitube tapered manifold, headbox interior, feed tubes, flow distribution, headbox]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-3 'Multitube Tapered Manifold,' p. 17-2 (PDF p. 198)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Labeled cutaway (Headbox Interior,
  with inlet/outlet flow arrows).
```

```yaml
id: pp-cmp-rectifier-roll-headbox
kind: figure
teaches: >
  The Rectifier Roll (air-padded) headbox: hollow perforated rolls
  (approximately one-inch-diameter holes) sit within the stock stream
  inside the headbox, with one roll at the box entrance, one in the main
  pond area, and one near the discharge; stock fills the box almost to the
  top of the rectifier roll so a cushion of air remains above it, lessening
  pressure variations and basis-weight changes. The rolls rotate slowly to
  help eliminate large-scale turbulence and break up fiber flocs — best
  suited to slower and specialty paper machines with a wide range of flow
  requirements.
concept-tags: [rectifier roll headbox, air-padded headbox, perforated roll, air cushion, basis weight variation, fiber flocs]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-4 'Rectifier Roll (or Air-Padded) Headbox,' p. 17-2 (PDF p. 198)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Cutaway showing the perforated roll
  assembly and its feed/discharge geometry. First of three headbox-type
  figures in this section (companions: `pp-cmp-hydraulic-headbox` Figure
  17-5, `pp-cmp-dilution-control-headbox` Figure 17-6).
```

### Chapter 17 — Hydraulic and Dilution Control Headboxes (printed p. 17-3)

```yaml
id: pp-cmp-hydraulic-headbox
kind: figure
teaches: >
  The hydraulic headbox: completely filled with stock (no air cushion,
  unlike the rectifier-roll design), designed to deflocculate stock purely
  through velocity changes as it passes through tube bundles or across
  flat sheets. Discharge velocity from the slice depends directly on
  feeding-pump pressure. This type is found on most new paper machines.
concept-tags: [hydraulic headbox, deflocculation, tube bundle, feeding pump pressure, headbox slice]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-5 'Hydraulic Headbox,' p. 17-3 (PDF p. 199)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Cutaway of the internal tube-bundle/
  slice assembly of a fully-flooded headbox.
```

```yaml
id: pp-cmp-dilution-control-headbox
kind: figure
teaches: >
  The dilution control headbox: uses dilution (consistency control) across
  the machine width to correct basis-weight errors — up to one hundred or
  more individually controlled dilution valves along the back of the
  headbox let a computer add dilute white water precisely where a heavy
  streak needs correcting, or remove dilute water where the sheet runs too
  light.
concept-tags: [dilution control headbox, dilution valve, white water manifold, basis weight correction, consistency control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-6 'Dilution Control Headbox,' p. 17-3 (PDF p. 199)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Labeled cutaway (Dilution Valves,
  White Water Manifold, Main Stock Manifold). Last of the three headbox-
  type figures (see `pp-cmp-rectifier-roll-headbox` for the full grouping).
```

### Chapter 17 — Fourdrinier Multi-Ply and Twin-Wire Forming (printed pp. 17-5–17-6)

```yaml
id: pp-cmp-stratified-headbox
kind: figure
teaches: >
  The stratified headbox: capable of depositing two or three different
  stock layers onto the fourdrinier wire simultaneously — one of several
  fourdrinier multi-ply techniques for combining multiple plies into a
  single finished sheet, alongside the secondary-headbox and multiple-
  fourdrinier alternatives the surrounding text also describes.
concept-tags: [stratified headbox, multi-ply forming, layered stock, fourdrinier, paperboard]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-7 'Stratified Headbox,' p. 17-5 (PDF p. 201)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Exploded/cutaway view of the
  internal layer-separating vanes feeding the slice.
```

```yaml
id: pp-cmp-cylinder-former
kind: figure
teaches: >
  The cylinder former: a vat containing a large-diameter, wire-covered
  rotating cylinder mold — the sheet forms on the wire as the cylinder
  rotates through the dilute stock pond, drains into the cylinder interior,
  and is couched off onto a wet felt. Most effective in the multi-ply
  process, since each cylinder in a series lays down and couches its own
  individual ply, building up a heavyweight paperboard sheet.
concept-tags: [cylinder former, cylinder mold, wire-covered cylinder, couch roll, multi-ply paperboard]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-8 'Cylinder Former,' p. 17-5 (PDF p. 201)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Labeled cutaway (Formed Sheet and
  Felt, Couch Roll, Overflow Dam, Fibers Depositing On Cylinder Wire, Pond,
  Cylinder Mold, Stock Inlet).
```

```yaml
id: pp-cmp-gap-wire-former
kind: figure
teaches: >
  The gap-wire former (a twin-wire former subtype): injects the headbox
  jet directly into the gap between two converging wires, with a large
  forming roll handling most sheet drainage before several high-vacuum
  boxes and a suction couch roll separate the two wires as the sheet is
  taken into the press section. Gap formers hold the speed/production
  record for most single-ply paper grades (newsprint, copy paper) and are
  becoming competitive even in multi-ply paperboard.
concept-tags: [gap-wire former, twin-wire forming, converging wires, forming roll, suction couch roll, single-ply speed record]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-9 'Gap-Wire Former,' p. 17-5 (PDF p. 201)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Cutaway of the converging-wire
  entry geometry and forming-roll assembly.
```

```yaml
id: pp-cmp-top-wire-former
kind: figure
teaches: >
  The top-wire former (the other twin-wire former subtype): water can
  drain from both sides of the forming sheet rather than one, making the
  top and bottom sheet surfaces more alike than a conventional fourdrinier
  produces, and draining in a much shorter distance than the fourdrinier
  process requires — this technology is now faster than a fourdrinier
  machine and holds the speed/production record for most paper grades.
concept-tags: [top-wire former, twin-wire forming, two-sided drainage, sheet uniformity, forming speed]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-10 'Top-Wire Former,' p. 17-6 (PDF p. 202)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Cutaway showing the second (top)
  wire converging onto the forming sheet from above.
```

### Chapter 17 — Press Section (printed pp. 17-6–17-8)

```yaml
id: pp-cmp-straight-through-press
kind: figure
teaches: >
  The (original) straight-through press arrangement: the oldest and
  simplest press configuration, still found on many paper and board
  machines — each press has a smooth top roll and a bottom felted roll, so
  only the top surface of the sheet ever contacts a smooth roll; a later
  inverse second press allowed the bottom of the sheet to also contact a
  smooth roll.
concept-tags: [straight-through press, press arrangement, smooth roll, felted roll, one-sided smoothness]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-11 'Straight-Through Press,' p. 17-6 (PDF p. 202)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." A schematic sheet-path diagram
  through a multi-roll straight-through press train. Companion/contrast to
  `pp-cmp-modern-straight-through-press` (Figure 17-15), the later two-shoe-
  press evolution of this same arrangement.
```

```yaml
id: pp-cmp-roll-press
kind: figure
teaches: >
  The roll press: two smooth rolls form a nip through which the sheet
  (carried on a press felt) passes; pressure builds through the nip (the
  "footprint," 500-2,000 psi depending on how hard the rolls are pressed
  together) forcing water out of the sheet into the felt, but past the
  nip's midpoint pressure decreases and some water is re-absorbed or
  "re-wetted" back into the sheet. Roll presses can increase sheet
  consistency to roughly 28-32% solids.
concept-tags: [roll press, press felt, nip, footprint, rewetting, sheet consistency]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-12 'Roll Press,' p. 17-7 (PDF p. 203)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Photo-style cutaway of a two-roll
  press nip with felt/sheet path labeled (Top Roll, Sheet, Press Felt,
  Bottom Roll).
```

```yaml
id: pp-cmp-shoe-press
kind: figure
teaches: >
  The shoe press: instead of a second roll, a stationary, concave,
  hydraulically loaded shoe (covered by a rotating, oil-lubricated
  polyurethane blanket to eliminate friction between shoe and blanket)
  presses against a conventional roll — creating a much wider, longer-
  dwell-time nip than a roll press, allowing for better drying (up to
  roughly 50% solids).
concept-tags: [shoe press, hydraulic shoe, polyurethane blanket, extended nip, conventional roll, drying capacity]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-13 'Shoe Press,' p. 17-7 (PDF p. 203)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Labeled cutaway (Conventional Roll,
  Shoe, Polyurethane Blanket).
```

```yaml
id: pp-cmp-shoe-press-nip
kind: figure
teaches: >
  Detail of the shoe press nip zone: a pressure-vs-time/press-zone-length
  graph overlaid on the nip cross-section shows the pressure profile across
  the extended dwell (three labeled phases, I-II-III) that gives an
  extended-nip shoe press its drying advantage over a conventional
  roll-press nip — the mechanical detail behind Figure 17-13's whole-press
  cutaway.
concept-tags: [shoe press nip, press zone length, line force, extended nip pressure profile, dwell time]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-14 'Shoe Press Nip,' p. 17-8 (PDF p. 204)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Combination cutaway-plus-graph
  figure (Pressure vs. Time inset, Press Zone Length, Line Force, Web) —
  Style Guide §5 (analytical-graph conventions) would apply to the inset
  plot if this figure is ever placed on a slide, alongside §6 for the
  mechanical cutaway portion.
```

```yaml
id: pp-cmp-modern-straight-through-press
kind: figure
teaches: >
  The modern straight-through press: two double-felted presses (each now
  commonly a shoe press) arranged so the sheet is fully supported off the
  couch, between the individual presses, and all the way into the dryer
  section — never running unsupported the way the original straight-
  through arrangement (Figure 17-11) did. The number of shoe presses used
  depends on the paper's weight and how much water must be removed.
concept-tags: [modern straight-through press, double felted press, shoe press, sheet support, press arrangement evolution]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-15 'Modern Straight-Through Press,' p. 17-8 (PDF p. 204)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." A schematic sheet-path diagram
  through a two-shoe-press train, with each shoe press location callout-
  labeled directly on the drawing ("Shoe Press").
```

### Chapter 17 — Drying, Steam/Condensate System (printed pp. 17-9–17-10)

```yaml
id: pp-cmp-two-tier-drying-system
kind: figure
teaches: >
  The two-tier drying arrangement, the most common dryer-section
  configuration: the sheet passes from cylinder to cylinder, alternating
  top and bottom rows (tightly pressed against each cylinder by the dryer
  fabric), passing unsupported between each dryer — each cylinder is 60-72
  inches in diameter, fed with 15-150 psi steam, and the final sheet leaves
  the dryer section at 5-8% moisture.
concept-tags: [two-tier drying, dryer cylinder, dryer fabric, unsupported draw, drying section]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-16 'Two-Tier Drying System,' p. 17-9 (PDF p. 205)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Production-photo-style view of a
  two-row bank of drying cylinders with fabric routing visible.
```

```yaml
id: pp-cmp-single-tier-dryer-section
kind: figure
teaches: >
  The single-tier (or "Uni-run") dryer arrangement: unlike the two-tier
  design, the dryer fabric stays in constant contact with the sheet at all
  times, eliminating the unsupported draws between cylinders that can
  flutter and break at high machine speeds — this design allows higher
  overall machine speed than the two-tier configuration permits.
concept-tags: [single-tier dryer, Uni-run, constant fabric contact, sheet flutter, high speed drying]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-17 'Single-Tier Dryer Section,' p. 17-9 (PDF p. 205)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Schematic showing a single row of
  dryer cylinders with the fabric routed in continuous contact via idler
  rolls above.
```

```yaml
id: pp-cmp-dryer-steam-drum-siphon
kind: figure
teaches: >
  The steam drum and siphon inside a dryer cylinder: steam enters and
  condenses against the cylinder's inner wall (releasing its latent heat to
  dry the sheet), and a specially designed siphon pipe assembly — driven by
  differential pressure — removes the resulting condensate continuously so
  it doesn't pool or (at high speed) form a full rimming layer that would
  reduce drying efficiency.
concept-tags: [dryer cylinder, steam drum, siphon, condensate removal, latent heat, rimming condition]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-18 'Steam Drum and Siphon,' p. 17-10 (PDF p. 206)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Labeled cutaway (Steam In, Syphon,
  Condensate Out) of a single dryer cylinder's internal siphon assembly.
```

```yaml
id: pp-cmp-dryer-condensate-process
kind: figure
teaches: >
  The dryer condensate recovery process downstream of the siphons:
  condensate from the dryers and separated steam both feed a separator
  vessel; the separator recycles any blown-through steam and sends
  recovered condensate onward, via a pump, to the mill's boiler feedwater
  system — closing the loop between the dryer section's steam supply and
  the boiler's own feedwater demand (see Chapter 18's Boiler Feedwater
  System discussion for the receiving end of this same condensate stream).
concept-tags: [dryer condensate, condensate separator, steam recovery, boiler feedwater, condensate recycling]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 17-19 'Condensate Process,' p. 17-10 (PDF p. 206)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Labeled schematic (Condensate from
  the Dryers, Separated Steam, Separator, Condensate to the Boiler).
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 197-208 in full: p. 197 =
  printed 17-1 (Chapter 17 opening, "Paper Machine," Figure 17-1 on the
  divider page itself), p. 208 = printed 17-12 (chapter's last content
  page — prose on winders/roll finishing, no trailing blank). PDF page 209
  confirmed as the Chapter 18 divider. Zero page offset (PDF = printed +
  180) throughout.
- **Full chapter coverage.** All 19 real figures in range (Figures 17-1
  through 17-19) located and catalogued; every page 197-208 was rendered
  and read directly, no gaps in the numeric sequence — the chapter contains
  exactly nineteen figures, confirmed, none skipped. Pages 17-11 and 17-12
  (PDF 207-208, covering Hood Ventilation, Size Press, Calendaring, Reel,
  and Winder/Roll Finishing) carry no figures at all — confirmed by direct
  reading of both pages, not assumed from a sparse text-extraction hit.
- **One honestly-flagged captioning irregularity, not a coverage gap**:
  Figure 17-2 (`pp-cmp-paper-machine-wet-end-overview`) carries no
  descriptive caption title at all in the source — only the bare "Figure
  17-2." — confirmed by direct visual inspection, not a rendering or
  extraction miss on this pass's part. This is a genuine property of the
  source page itself, not a defect in this cataloguing pass; the record's
  `teaches` and id are this pass's own content-based description standing
  in for the missing title.
- **No low-confidence flags** beyond the Figure 17-2 captioning note
  above.
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter — the full 17-1 through 17-19 sequence is complete, each
  number appearing exactly once, with no caption-content mismatch of the
  kind found in Chapter 15's Figure 15-19.
- **No numbered tables found in this chapter** — confirmed by a full-text
  sweep of every page; Chapter 17 is figures and prose only.
- **Cross-reference findings.** Checked the whole-library collision sweep
  (below) and grepped the whole library for "fourdrinier," "headbox,"
  "twin wire," "shoe press," "dryer cylinder," "siphon," and related
  terms — no genuine hits outside this chapter's own file. All 19 figures
  are TAPPI-licensed process illustrations with no Fisher drawing number to
  cross-reference by, the same pattern already confirmed in Chapters 14 and
  15. Figure 17-2 was separately, directly compared against this book's own
  Figure 15-7 ("Thin Stock System") and Figure 16-1 ("Stock Approach
  System") — closely related wet-end equipment groupings, but three
  genuinely distinct diagrams, not a duplicate; see that record's own notes
  and the parallel notes left in the ch15 and ch16 files for the full
  three-way comparison.
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook (including its TAPPI-licensed illustrations, used with
  permission) is the sole and sufficient source for all nineteen of this
  chapter's components.
