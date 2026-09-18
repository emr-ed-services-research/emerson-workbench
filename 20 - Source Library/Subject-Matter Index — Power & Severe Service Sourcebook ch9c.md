---
title: Subject-Matter Index — Power & Severe Service Sourcebook ch9c
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch9C — Geothermal Power
updated: 2026-09-14
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 9C

**Chapter 9C — "Geothermal Power."** Standing library-cataloging pass (whole
document, ahead of Control Valve Engineering 1/2 course-build need), per
`Subject-Matter Index — Process & Standards.md`'s "standing full-chapter"
trigger. Chapter boundaries confirmed directly by rendering and reading the
actual PDF pages, not assumed from the table of contents: PDF page 155 is
the "Chapter 9C / Geothermal Power" divider (text-only opening — no figure
on the divider page itself), and PDF page 159 is the "Chapter 9D / Combined
Cycle, Cogen, Simple Cycle" divider. Chapter 9C = PDF pp. 155–158 (printed
9C-1 through 9C-4), a short, fully read four-page chapter.

This book has no extracted-figures crop folder (unlike the Oil & Gas
Sourcebook's early batches) — this pass catalogs existence and location
only, so each record's `source` carries a single locator, matching
`Subject-Matter Index — Control Valve Handbook ch1.md`'s record shape:
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
id: pss-topic-geothermal-resource-fundamentals
kind: topic
teaches: >
  Geothermal energy fundamentals: the resource is categorized as
  hydrothermal, geo-pressured, hot dry rock, or magma — most existing
  applications use hydrothermal (hot water/steam in permeable rock).
  A resource becomes usable for power generation once its temperature
  exceeds 90°C (194°F). Geothermal power is generally environmentally
  clean, though steam plants can release small, easily-mitigated amounts
  of gas. Reservoir economics: reinjecting spent geothermal fluid
  preserves reservoir fluid volume but does not regenerate the heat
  content itself — the source's own text states a geothermal resource's
  recovery period runs several hundred years, against a typical 50-year
  generating-facility lifespan, implying periodic new-site construction
  rather than indefinite single-site operation.
concept-tags: [geothermal power, hydrothermal resource, geo-pressured, hot dry rock, magma, reservoir recovery period, temperature threshold]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9C opening prose, p. 9C-1"
relatedFigures: []
relatedTopics: [pss-topic-geothermal-conversion-technologies]
used-by: []
notes: >
  Pure body prose, no figure of its own — the chapter's opening framing
  before the plant-technology discussion begins. Read directly from the
  rendered page text, not inferred from any figure caption.
```

```yaml
id: pss-topic-geothermal-conversion-technologies
kind: topic
teaches: >
  Three power-plant technologies convert hydrothermal fluid to
  electricity, selected by the fluid's state and temperature: Dry Steam
  plants (steam-rich resources like The Geysers, CA — steam feeds the
  turbine directly, emitting only excess steam and minor gases); Flash
  Steam plants (fluid above 400°F/200°C is sprayed into a lower-pressure
  tank, flashing part of it to steam that drives the turbine — Figure
  9C-1); and Binary-Cycle plants (fluid below 400°F passes through a heat
  exchanger to vaporize a secondary low-boiling-point fluid, e.g.
  isobutane or isopentane, in a closed loop with virtually no atmospheric
  emission — Figure 9C-2). The source states moderate-temperature water
  is the most common geothermal resource, so binary-cycle is expected to
  dominate future plant construction.
concept-tags: [dry steam power plant, flash steam power plant, binary cycle power plant, temperature threshold, closed loop, secondary working fluid]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "\"Converting Steam and Hot Water to Electricity,\" p. 9C-1–9C-2"
relatedFigures: [pss-cmp-flash-steam-power-plant-schematic, pss-cmp-binary-cycle-power-plant-schematic]
relatedTopics: [pss-topic-geothermal-resource-fundamentals]
used-by: []
notes: >
  Dry Steam plants are named and explained in the real prose but have NO
  figure anywhere in this chapter — only Flash Steam (Fig. 9C-1) and
  Binary-Cycle (Fig. 9C-2) are illustrated. This third technology was
  completely invisible to the original figures-only cataloguing pass.
```

```yaml
id: pss-topic-geothermal-corrosion-and-valve-selection
kind: topic
teaches: >
  Geothermal fluids carry a specific set of corrosive agents named
  directly in the source, each with a distinct mechanism: carbon dioxide
  (corrodes steam/condensate lines), hydrogen sulfide (corrosive and
  lethal at high concentration), sulfates (combine with the water's own
  calcium to form adherent calcium-sulfate scale on pipe/heat-exchanger
  surfaces), chlorides (increase water corrosiveness and drive chloride
  stress-corrosion cracking on 300-series stainless steel — the source's
  stated reason other stainless grades are typically used instead),
  ammonia (reacts with copper/zinc alloys), and oxygen (accelerates
  corrosion of water lines, heat-exchange equipment, boilers, return
  lines). Valve selection follows directly from this: the V500 eplug
  (ceramic plug/seat/retainer, optionally Alloy 6 chrome-oxide coated) is
  the source's recommended choice for dirty, erosive brine and low-ΔP
  wellhead duty; Vee-Ball valves for high-ΔP reinjection-tank and
  pre-separator duty; a high-performance butterfly valve (e.g. Posi-Seal
  A41, metal or firesafe elastomer disc seal) before the separator.
  Bearing-material selection follows the plant's own "inside/outside the
  fence" zoning shown in Figure 9C-3: sealed metal bearings (316SST,
  Alloy 6, 440C) on the dirty/outside-the-fence side, PEEK elastomer-lined
  bearings on the clean/inside-the-fence side.
concept-tags: [corrosion, hydrogen sulfide, chloride stress corrosion cracking, calcium sulfate scale, V500 eplug, Vee-Ball, Posi-Seal A41, bearing material selection, inside the fence, outside the fence]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "\"Severe Service Considerations\" and \"Valve Options,\" p. 9C-2–9C-3"
relatedFigures: [pss-cmp-flash-cycle-valve-locations-diagram, pss-cmp-v500-eplug-geothermal-cutaway]
relatedTopics: []
used-by: []
notes: >
  Expands well beyond Figure 9C-3's own `teaches` field, which names the
  valves and the fence boundary but not the corrosion mechanisms driving
  the selection or the specific bearing-material choices — that reasoning
  exists only in the surrounding body prose. Cross-book materials-severity
  connection considered: `cvh-topic-extreme-temperature-materials` and
  `cvh-topic-sulfide-stress-cracking` (both verified real in Control Valve
  Handbook ch6) cover temperature-driven and H2S-driven material selection
  respectively — related domain, but this entry's corrosion agents
  (chloride SCC, calcium sulfate scale, ammonia) are distinct enough not
  to merge; left as a documented relationship here rather than a
  relatedTopics link, since neither CVH entry actually discusses
  geothermal brine chemistry specifically.
```

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
- **`kind: topic` pass, added 2026-09-17**: 3 new topic entries
  (`pss-topic-geothermal-resource-fundamentals`,
  `pss-topic-geothermal-conversion-technologies`,
  `pss-topic-geothermal-corrosion-and-valve-selection`) added, all read
  directly from the chapter's real body prose (`pdftotext -layout`,
  PDF pp. 155-158). Dry Steam power plants are named and explained in the
  prose but have no figure at all — invisible to the original
  figures-only pass. Chapter total is now 7 components (4 figures + 3
  topics). No reference-data-only section required a skip note — the
  whole chapter is narrative prose, fully covered between the 4 existing
  figure entries and these 3 topic entries.
