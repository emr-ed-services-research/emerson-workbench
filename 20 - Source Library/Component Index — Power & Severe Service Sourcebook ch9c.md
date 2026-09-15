---
title: Component Index — Power & Severe Service Sourcebook ch9c
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch9C — Geothermal Power
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 9C

**Chapter 9C — "Geothermal Power."** Standing library-cataloging pass (whole
document, ahead of Control Valve Engineering 1/2 course-build need), per
`Component Index — Process & Standards.md`'s "standing full-chapter"
trigger. Chapter boundaries confirmed directly by rendering and reading the
actual PDF pages, not assumed from the table of contents: PDF page 155 is
the "Chapter 9C / Geothermal Power" divider (text-only opening — no figure
on the divider page itself), and PDF page 159 is the "Chapter 9D / Combined
Cycle, Cogen, Simple Cycle" divider. Chapter 9C = PDF pp. 155–158 (printed
9C-1 through 9C-4), a short, fully read four-page chapter.

This book has no extracted-figures crop folder (unlike the Oil & Gas
Sourcebook's early batches) — this pass catalogs existence and location
only, so each record's `source` carries a single locator, matching
`Component Index — Control Valve Handbook ch1.md`'s record shape:
`id` · `teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`)
· `delivery` · `used-by` · `notes` · `mediaStatus`.

## Precedence

The Power & Severe Service Sourcebook is itself a **current** first-party
Fisher document (© 2001/2003/2004, Fourth Edition, D101449X012), held in
the Source Library's Industry Handbooks holdings alongside the Oil & Gas
Sourcebook — so every record below is `status: current`. No archive or
legacy material was consulted for this chapter.

## Components

### Chapter 9C — Geothermal Power (printed pp. 9C-1 – 9C-4)

```yaml
id: pss-cmp-flash-steam-power-plant-schematic
teaches: >
  Flash-steam geothermal power plant process schematic: hydrothermal fluid
  from the production well pump flows to a flash tank where it flashes to
  steam, drives a turbine/generator set through a condenser and cooling
  tower, with excess brine returned via the injection well pump — one of
  the two dominant geothermal plant technologies alongside binary-cycle.
concept-tags: [geothermal power, flash steam plant, flash tank, production well pump, injection well pump, condenser, cooling tower, turbine generator set]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9C-1 'Schematic of Flash Steam Power Plant,' p. 9C-2 — drawing E0842"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A process-flow block schematic, not a cutaway — falls under Style Guide
  §5 (diagram & graph conventions) if ever placed on a slide. Printed
  side-by-side with `pss-cmp-binary-cycle-power-plant-schematic` (Figure
  9C-2) on the same source page as a "flash vs. binary" comparison pair.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-binary-cycle-power-plant-schematic
teaches: >
  Binary-cycle geothermal power plant process schematic: hydrothermal fluid
  passes through a preheater/evaporator heat exchanger to vaporize a
  secondary working fluid that drives the turbine/generator set in a
  closed loop, with the geothermal fluid itself returned via the injection
  well pump — the technology of choice for lower-temperature (below 400°F)
  geothermal resources, per the chapter's own text.
concept-tags: [geothermal power, binary cycle plant, preheater evaporator, closed loop, production well pump, injection well pump, air-cooled condenser, feed pump]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9C-2 'Schematic of Binary Cycle Power Plant,' p. 9C-2 — drawing E0843"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Companion to `pss-cmp-flash-steam-power-plant-schematic` (Figure 9C-1) —
  both printed on the same source page. Style Guide §5 applies if ever
  placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-flash-cycle-valve-locations-diagram
teaches: >
  A full flash-steam-cycle plant layout locating every frequently-cited
  severe-service valve by name and position: steam dryer, gate valves,
  turbine, main condenser and its butterfly/knife/check valves, cooling
  towers and their butterfly valves, hot well pump, flash tank, sump
  discharge pump, globe and ball valves, the "fence" boundary between
  inside/outside-plant bearing-material zones, and — on the well-production
  side — the CV500/A body wellhead valve and the V500 reinjection valve.
concept-tags: [flash steam cycle, valve location diagram, CV500, V500 reinjection valve, cooling tower, condenser, flash tank, sump discharge pump, wellhead valve, inside the fence, outside the fence]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9C-3 'Location of Frequently Referenced Valves in a Flash Steam Cycle Plant,' p. 9C-3 — drawing E0844"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A dense full-plant process/instrumentation-style layout diagram with
  ~20 labelled valves and equipment items — the chapter's own reference
  figure for the "Valve Options" and bearing-material ("inside/outside the
  fence") discussion that follows it in the body text. If ever placed on a
  slide this is a strong candidate for a redraw/simplification decision
  (Style Guide §5) given its density.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-v500-eplug-geothermal-cutaway
teaches: >
  The V500 eplug eccentric-plug valve's reverse-flow advantage: a
  photorealistic shaded cutaway showing flow isolated to the port/outlet
  area, where the seat and retainer can be protected with erosion-resistant
  materials — the chapter's recommended valve for "dirty," erosive
  geothermal brine service.
concept-tags: [V500, eplug, eccentric plug valve, reverse flow, erosion resistance, geothermal brine, seat, retainer]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9C-4 'The V500 eplug valve offers a reverse flow advantage...,' p. 9C-4 — drawing W8359"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The last figure in Chapter 9C — a bibliography follows immediately on the
  same page; Chapter 9D begins on the next PDF page (159). Photorealistic
  shaded cutaway (not line-art), no printed field callouts on the figure
  itself. The V500 eccentric plug valve is also catalogued generically in
  Oil & Gas Sourcebook ch1 as `ogas-cmp-v500-eccentric-plug-cutaway`
  (Figure 1-8, a different photo/cutaway of the same product line, not the
  same image) — cross-referenced here as a related-product note, not a
  duplicate (visually distinct figures).
mediaStatus: unreviewed
```

---

## Open Items

- **Chapter boundary** — confirmed directly by rendering: PDF p.155 is the
  Chapter 9C divider (text-only, no figure), PDF p.159 is the Chapter 9D
  divider. Chapter 9C = PDF pp.155–158 (printed 9C-1 through 9C-4)
  inclusive, all four pages read directly.
- **Full coverage accounting**: four numbered figures in range (9C-1
  through 9C-4), all four catalogued. No gaps, no unnumbered-but-real
  diagrams found beyond the four numbered figures.
- **Low-confidence flags**: none. Every figure identity, caption, and page
  was confirmed against the rendered image directly.
- **Duplicate-figure-number / source-citation-error findings**: none found
  in this chapter.
- **Table exclusion**: no numbered tables appear in this chapter's range
  (confirmed by direct read of all four pages — this is a narrative/
  application-discussion chapter, not a specification-table chapter).
- **Cross-reference findings**: `pss-cmp-v500-eplug-geothermal-cutaway`
  (Figure 9C-4) shows the same V500 eccentric-plug product line as
  `ogas-cmp-v500-eccentric-plug-cutaway` in the Oil & Gas Sourcebook ch1
  index, but the two are visually distinct images (different angle/finish/
  labelling) — noted as a related-product cross-reference in both
  directions is recommended but not yet written back into the Oil & Gas
  record (out of scope for this pass; flagged for the closing whole-library
  sweep). No other overlap found against material already in context.
- **Archive/legacy material**: none consulted, none needed — this is a
  first-party current Fisher document throughout.
