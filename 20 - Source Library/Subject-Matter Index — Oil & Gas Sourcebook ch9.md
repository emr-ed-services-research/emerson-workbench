---
title: Subject-Matter Index — Oil & Gas Sourcebook ch9
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch9 — Natural Gas Treatment
updated: 2026-09-08
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 9

**Chapter 9 — "Natural Gas Treatment."** Standing library-cataloging pass, NOT
tied to any course — built ahead of any course actually needing these
figures, per `Source Library.md`'s "two ways a subject-matter index gets
triggered." Matches the batch shape of the ch1/ch2/ch3/ch5/ch6/ch7/ch8
passes of this same chapter series. This is the **first batch** for ch9 and
covers the chapter's first six figures (9-1 through 9-6), from the chapter
opener through the start of the Gas Treatment / Amine Treatment section. All
six confirmed against the real page text and a 300 dpi page-image render
before extraction — none were skipped or fabricated.

**Second batch** — the chapter's remaining five figures (9-7 through 9-11),
picking up exactly where the first batch's "Open items" said to: the
Whisper Trim III low-noise trim hardware for the flash/lean gas to flare
valves (Figure 9-7), the Tail Gas Treatment System that completes the Gas
Treatment section (Figure 9-8), the TEG Gas Dehydration Unit (Figure 9-9),
the Sulfur Recovery System (Figure 9-10), and its companion Design ED
valve hardware (Figure 9-11). All five confirmed against the real page
text and a 300 dpi page-image render before extraction — none were
skipped or fabricated. **Chapter 9 is now fully catalogued, Figures 9-1
through 9-11, with no gaps** — Figure 9-11 is the chapter's last figure
(confirmed by reading Chapter 10's opening page immediately after it).

All from `20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve
Sourcebook - Oil & Gas.pdf`. Every record's `used-by` is `[]` — none are
placed on a slide yet; a future course resolves against these entries
instead of triggering reactive cataloging.

Record shape matches `Subject-Matter Index — 14101 ch3.md` (and the rest of this
chapter series): `id` · `teaches` · `concept-tags` · `status` · `source`
(`doc` + `locator`) · `delivery` · `used-by` · `notes`.

## Precedence

The Oil & Gas Sourcebook is itself a **current** document (© 2013 Fisher,
held in the Source Library's Industry Handbooks holdings — see `Industry
Handbooks.md`), so every record below is `status: current`. No archive or
legacy material was consulted for this batch.

## Page-numbering note (specific to this chapter)

Chapter 9's own printed folios were confirmed directly against the rendered
pages, not assumed from the prior ch8 batch's closing note. PDF p. 113
(the chapter-title page, carrying Chapter 9's intro text and Figure 9-1) has
**no visible footer folio** — the next page (PDF p. 114) is the first to
show one, printed "9-2". Following that sequence backward, PDF p. 113 is
printed **p. 9-1** (unnumbered, the standard convention for a chapter's
opening page in this document), not "9-2" as the prior ch8 batch's closing
note stated when describing where Chapter 9 begins — that note is corrected
here based on directly reading the footer sequence (114=9-2, 115=9-3,
116=9-4, 117=9-5, 118=9-6), all individually confirmed against rendered
page images.

## Components

### Chapter 9 — Natural Gas Treatment Process (chapter opener, printed p. 9-1)

```yaml
id: ogas-cmp-natural-gas-treatment-process-flow
teaches: >
  The general process flow of a natural gas treatment plant, top level: raw
  natural gas enters inlet separation, then gas treatment (which branches to
  a sulfur recovery unit producing elemental sulfur), then dehydration,
  yielding treated natural gas. This is the chapter's orienting figure —
  every later section (inlet separation, gas treatment / amine treatment,
  dehydration, sulfur recovery) is a zoom-in on one block of this diagram,
  the same relationship the onshore (ch7 Fig 7-1) and offshore (ch8 Fig 8-1)
  production chapters' own opening figures have to their sections.
concept-tags: [natural gas treatment, process flow, inlet separation, gas treatment, sulfur recovery, elemental sulfur, dehydration]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-1 (drawing number E1511,
      printed p. 9-1, the chapter's opening page) — "Figure 9-1. Natural Gas
      Treatment Process Flow Diagram."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig1-natural-gas-treatment-process-flow.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 113, printed p. 9-1) at 300 dpi, full block diagram (all five blocks: inlet separation, gas treatment, sulfur recovery, dehydration) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Structurally parallel to `ogas-cmp-onshore-production-process-flow` (ch7,
  Figure 7-1) and `ogas-cmp-offshore-topsides-process-flow` (ch8, Figure
  8-1) — each chapter in this sourcebook's Section II opens with a single
  block-diagram overview that its own later sections zoom in on. This
  chapter's own "Inlet Separation" and "Gas Treatment" sections
  (`ogas-cmp-inlet-separation-system` and `ogas-cmp-amine-treatment-unit`,
  below) are the zoom-ins on this diagram's first two blocks; dehydration
  and sulfur recovery (Figures 9-9 and 9-10, both seen further ahead in the
  chapter while confirming this batch's own page range) are out of this
  batch's scope — a future batch should catalogue them.
```

### Chapter 9 — genuine conceptual content beyond the figure captions (`kind: topic`, added 2026-09-17)

```yaml
id: ogas-topic-natural-gas-treatment-plant-overview
kind: topic
concept-tags: [natural gas treatment, plant capacity, MMSCFD, fractionation, discharge compression, facility composition]
status: current
teaches: >
  A natural gas treatment facility's real composition and scale, stated in
  the chapter's own opening prose, not shown in Figure 9-1's block diagram
  itself: every facility contains a receiving area, a treatment area, a
  water-removal (dehydration) unit, a sulfur recovery unit, and a discharge
  compression unit. Capacity in North America typically runs 50-500 MMSCFD;
  where large reserves exist (e.g. the Middle East) facilities scale to
  800 MMSCFD-1 BSCFD. Treatment units are sometimes combined with gas
  fractionation units (separating natural gas liquids) — noted but not
  covered further in this chapter (see Chapter 11, Fractionation). After
  treatment, gas is compressed and injected into a high-pressure
  distribution network at 1,200-1,700 psig for industrial or residential use.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 9 'Natural Gas Treatment,' opening prose and 'Discharge Compression' section, printed pp. 9-1–9-2 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-natural-gas-treatment-process-flow]
relatedTopics: [ogas-topic-amine-treating-mechanism, ogas-topic-gas-dehydration-methods, ogas-topic-sulfur-recovery-claus-process]
used-by: []
notes: >
  Read directly from the chapter's real running prose (pdftotext -layout,
  PDF pp. 113-114). This is the plant-level orienting content Figure 9-1's
  own `teaches` field (already catalogued) does not carry — the figure
  shows which blocks exist and their order; this topic explains scale,
  composition, and the discharge-compression endpoint the figure doesn't
  depict at all (no block for it in Figure 9-1).
```

```yaml
id: ogas-topic-amine-treating-mechanism
kind: topic
concept-tags: [amine treating, MEA, DEA, MDEA, contactor, lean amine, rich amine, regeneration, stripper, flash tank]
status: current
teaches: >
  Why gas treatment uses a countercurrent contactor plus a regeneration
  loop, and why amine type is a real selection variable rather than a
  fixed choice: MEA (monoethanolamine) is used when complete H2S/CO2
  removal is required; DEA (diethanolamine) is less reactive but tolerates
  higher acid-gas loadings; MDEA (methyldiethanolamine) can selectively
  remove H2S to pipeline spec while leaving some CO2 uncaptured. In the
  contactor, sour gas enters the bottom and flows countercurrent to lean
  amine entering the top; treated gas leaves the top (still saturated,
  headed to dehydration) while rich amine (amine plus absorbed acid gases)
  leaves the bottom. Regeneration: rich amine first enters a flash tank
  (pressure reduced to flash off dissolved hydrocarbons, usable as fuel gas
  or further treated), then passes through a heat exchanger into a solvent
  stripper, where low-pressure steam strips the acid gases back out,
  returning the amine to its lean state to repeat the cycle. The acid gas
  driven off in the stripper is *not* disposed of directly — it goes
  through a further, separate treatment step (typically using a different
  amine derivative such as MDEA) before sulfur recovery — this is the tail
  gas treatment system (Figure 9-8), a second application of the same
  contactor/regeneration mechanism at smaller scale, not a different
  process.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 9 'Natural Gas Treatment,' 'Gas Treatment' overview prose, printed pp. 9-1–9-2 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-amine-treatment-unit, ogas-cmp-tail-gas-treatment-system-ch9]
relatedTopics: [ogas-topic-natural-gas-treatment-plant-overview, ogas-topic-sulfur-recovery-claus-process]
used-by: []
notes: >
  Read directly from the chapter's real prose (PDF pp. 113-114). This is
  the process-mechanism explanation neither `ogas-cmp-amine-treatment-unit`
  (Figure 9-5) nor `ogas-cmp-tail-gas-treatment-system-ch9` (Figure 9-8)
  carries in their own `teaches` fields — those catalogue the 12 and 8
  numbered valve stations respectively, not why the contactor/regeneration
  cycle works the way it does or why amine type is chosen per application.
  The explicit statement that tail gas treatment is "very similar to that
  previously discussed" (i.e. the same mechanism as the primary amine
  treatment step) is the source's own words, confirmed at PDF p. 121.
```

```yaml
id: ogas-topic-gas-dehydration-methods
kind: topic
concept-tags: [dehydration, absorption, adsorption, TEG, triethylene glycol, molecular sieve, glycol contactor]
status: current
teaches: >
  Two real dehydration approaches exist, and the chapter explicitly scopes
  which one it covers: absorption (contacting the gas with a liquid that
  absorbs water vapor — ethylene glycol, diethylene glycol, or triethylene
  glycol, TEG being the most popular, typically achieving <10 ppm water) and
  adsorption (molecular sieves — solids with high surface area that attract
  water molecules; more costly but yields greater dehydration, typically
  used in LNG/cryogenic processes). The chapter states it focuses on
  absorption technology only, despite control valves also existing in
  molecular-sieve regeneration service. In the TEG process: wet gas passes
  an inlet scrubber (removing solids/free liquids), enters the bottom of
  the glycol contactor and flows countercurrent to lean glycol descending
  from the top; lean glycol absorbs the water and leaves at the bottom
  while dry gas exits the top. The rich glycol solution is then warmed,
  flashed in a flash tank to remove dissolved gases, and further heated in
  a boiler to remove residual water vapor before being cooled and pumped
  back to the contactor — the same countercurrent-contact-plus-regeneration
  pattern as amine treating, applied to water instead of acid gas.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 9 'Natural Gas Treatment,' 'Dehydration' overview prose, printed pp. 9-1–9-2 (right column) — prose, not figure-anchored"
relatedFigures: [ogas-cmp-teg-gas-dehydration-unit-ch9]
relatedTopics: [ogas-topic-amine-treating-mechanism, ogas-topic-natural-gas-treatment-plant-overview]
used-by: []
notes: >
  Read directly from the chapter's real prose (PDF p. 114, right column).
  `ogas-cmp-teg-gas-dehydration-unit-ch9` (Figure 9-9) catalogues the 3
  numbered valve stations on the TEG unit; this topic supplies the "why
  absorption over adsorption, why TEG, what the countercurrent contact
  actually does" content the figure entry doesn't carry. The chapter's own
  explicit scoping-out of adsorption/molecular-sieve control valves is
  noted so a future course doesn't assume that content exists here.
```

```yaml
id: ogas-topic-sulfur-recovery-claus-process
kind: topic
concept-tags: [sulfur recovery, Claus process, H2S disposal, elemental sulfur, sulfuric acid, combustion, catalytic conversion]
status: current
teaches: >
  H2S removed during gas treatment must be disposed of; the chapter names
  two real methods — injection into underground formations (which also
  enhances product recovery by maintaining well pressure) and conversion to
  elemental sulfur — and states conversion is the more common method at
  large treatment units, which is why the chapter focuses on it (most
  elemental sulfur produced is itself used to make sulfuric acid). The
  Claus process (or a variant) is the standard conversion method: an
  initial combustion step in a furnace, then the combustion products pass
  through a series of catalytic converters; at each converter's exit the
  gas is condensed to remove the sulfur that has formed, and the vapor
  leaving the condenser is at the sulfur dew point, requiring reheating
  before it can pass to any additional converter stage. This combustion→
  catalytic-conversion→condensation→reheat cycle is the real mechanism
  Figure 9-10's numbered valve stations (reaction furnace, #1/#2 sulfur
  condensers, #1/#2 reactor/reheaters) are placed against — the figure
  entry catalogues what each valve does; this topic explains why the plant
  is shaped as a repeating condense-then-reheat sequence at all.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 9 'Natural Gas Treatment,' 'Sulfur Recovery' overview prose, printed p. 9-2 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-sulfur-recovery-system, ogas-cmp-design-ed-cutaway]
relatedTopics: [ogas-topic-amine-treating-mechanism, ogas-topic-natural-gas-treatment-plant-overview]
used-by: []
notes: >
  Read directly from the chapter's real prose (PDF p. 114, right column).
  Confirms why the chapter's Figure 9-10 has exactly two condenser/reheater
  stages (#1 and #2) rather than one or three — that's the "additional
  converters that may be present" language in the source, a real design
  variable the figure entry alone doesn't explain.
```

```yaml
id: ogas-topic-application-review-scaling
kind: topic
concept-tags: [valve count scaling, plant capacity, materials selection, sour gas, high nickel alloy, ANSI pressure class]
status: current
teaches: >
  The chapter's "Application Review" section states a real capacity-to-
  valve-count relationship before walking each numbered valve: a smaller
  plant (100 MMCFD) uses roughly 50 control valves, while a larger unit
  (1000 MMCFD) uses up to 300 — valve count scales with treatment capacity,
  not a fixed design regardless of throughput. Most valves in these plants
  are CL600 and below, with sizes varying by throughput within that
  pressure-class ceiling. The chapter also names a real materials trend:
  because of a global shift toward developing sour gas fields, plants are
  moving toward high-nickel-alloy materials beyond the standard WCC/316 SST
  combinations tabulated for each individual valve.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 9 'Natural Gas Treatment,' 'Application Review' introductory prose, printed pp. 9-2–9-3 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [ogas-topic-natural-gas-treatment-plant-overview]
used-by: []
notes: >
  Read directly from the chapter's real prose (PDF pp. 114-115). This
  framing paragraph precedes every individual valve write-up in the
  chapter and is not tied to any single figure — it sets the scale/
  materials context the per-valve tables (9-1 through 9-36) all sit inside,
  but is itself genuinely orphaned from any one figure entry.
```

### Chapter 9 — Inlet Separation (printed pp. 9-3)

```yaml
id: ogas-cmp-inlet-separation-system
teaches: >
  Inlet separation system schematic — the zoom-in on the opening process
  diagram's "Inlet Separation" block. Raw natural gas passes through the
  feed gas inlet pressure control valve into the inlet separator vessel.
  Three numbered control valves mark the system's control points: (1) feed
  gas inlet pressure control — controls inlet pressure of the gas into the
  separator, typically a high-performance butterfly valve given minimal
  pressure drop but potentially high flow; (2) inlet separator level control
  — controls the liquid level in the separator, commonly a globe or angle
  valve with anti-cavitation trim given the possible high pressure drops;
  (3) heat exchanger temperature control — controls steam flow to the inlet
  heat exchanger downstream of the separator, thus controlling feed-gas
  outlet temperature, typically a globe valve.
concept-tags: [inlet separation, feed gas inlet pressure control, inlet separator level control, heat exchanger temperature control, slug catcher]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-2 (drawing number E1512,
      printed p. 9-3) — "Figure 9-2. Inlet Separation System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig2-inlet-separation-system.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 115, printed p. 9-3) at 300 dpi, full schematic (all 3 numbered valve stations, inlet separator vessel), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–③ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Feed Gas Inlet Pressure Control Valve ... 3. Heat
  Exchanger Temperature Control Valve, printed pp. 9-3 – 9-4) and Tables
  9-1 through 9-3 — per Style Guide §6.2 these stay as the source drew
  them, not renumbered. This is the "Inlet Separation" zoom-in on
  `ogas-cmp-natural-gas-treatment-process-flow` (Figure 9-1). Companion
  hardware photos: `ogas-cmp-a11-2052-actuator-dvc6000` (Figure 9-3, valve
  station 1) and `ogas-cmp-nps1-6-design-et-plug-open` (Figure 9-4, valve
  station 3), both catalogued below.
```

```yaml
id: ogas-cmp-a11-2052-actuator-dvc6000
teaches: >
  Representative hardware for the feed gas inlet pressure control valve
  (valve station 1 in Figure 9-2, Table 9-1): an A11 high-performance
  butterfly valve (HPBV), NPS 10-30, ASME CL150/300/600, with a 2052
  actuator and a FIELDVUE DVC6000 digital valve controller. A high
  performance butterfly valve is used here because pressure drop across the
  valve is minimal but flow may be high depending on plant capacity —
  Table 9-1 also lists 8532/8580 rotary valve and A31A HPBV as alternates
  at this duty point.
concept-tags: [feed gas inlet pressure control, A11 valve, high performance butterfly valve, 2052 actuator, DVC6000, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-3 (drawing number W9571,
      printed p. 9-3) — "Figure 9-3. A11 with 2052 Actuator and FIELDVUE
      DVC6000."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig3-a11-2052-actuator-dvc6000.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 115, printed p. 9-3) at 300 dpi, full valve photo (actuator, positioner, disc, flanged body) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Immediately follows `ogas-cmp-inlet-separation-system` (Figure 9-2) on the
  same page, positioned beside item 1's text (Feed Gas Inlet Pressure
  Control Valve) and Table 9-1. Pairs with Table 9-1 — that table is not
  separately catalogued here (subject-matter index catalogues figures, not
  tables).
```

```yaml
id: ogas-cmp-nps1-6-design-et-plug-open
teaches: >
  Labelled cutaway of an ET-design globe valve with the plug shown open for
  dynamic action: bonnet, packing/stem assembly, spring-loaded plug guide,
  and flow-path arrows through the body. Representative hardware for the
  heat exchanger temperature control valve (valve station 3 in Figure 9-2,
  Table 9-3: "NPS 2-6 ET, ASME CL150/300") — the text notes valve sizes here
  are not typically large since the duty adds only a modest amount of heat
  to the system, and a globe valve is a suitable solution.
concept-tags: [heat exchanger temperature control, ET valve, cutaway, plug open, dynamic action, flow path, globe valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-4 (drawing number
      W3162-3, printed p. 9-4) — "Figure 9-4. NPS 1-6 Design ET with Plug
      Open for Dynamic Action."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig4-nps1-6-design-et-plug-open-dynamic-action.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 116, printed p. 9-4) at 300 dpi, full valve body cutaway (bonnet, stem, plug, flow arrows) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A labelled cutaway (not a product photo like `ogas-cmp-a11-2052-actuator-dvc6000`)
  — shows the internal plug/flow-path geometry, not just the exterior.
  Positioned in the source directly after item 3's text (Heat Exchanger
  Temperature Control Valve) and Table 9-3, immediately before the "Gas
  Treatment" section heading begins on the same page — the caption's "NPS
  1-6" range is broader than Table 9-3's "NPS 2-6" (the photo is
  representative hardware, not the exact sized unit for every application,
  the same pattern noted for other product photos in this chapter series).
```

### Chapter 9 — Gas Treatment: Amine Treatment Unit (printed pp. 9-5 – 9-6)

```yaml
id: ogas-cmp-amine-treatment-unit
teaches: >
  Amine treatment unit — the first step in this plant's gas treatment,
  removing sour-gas components via amine absorption. Twelve numbered control
  valves mark the process: (1) rich amine letdown — controls liquid level in
  the bottom of the contactor, letting down pressure to drive off entrained
  gases, may experience severe outgassing; (2) flash drum lean solvent; (3)
  flash drum water; (4) flash drum level; (5) flash drum pressure (to flash
  gas); (6) flash gas to flare; (7) lean amine booster pump recirculation —
  bypasses the booster pump to prevent cavitation; (8) lean amine main pump
  recirculation — same duty for the main pump; (9) lean amine to contactor —
  controls the lean-amine/gas ratio entering the top of the contactor; (10)
  lean gas to flare; (11) lean gas separator level control; (12) lean gas
  separator sour-water letdown. The contactor, flash tank, rich/lean amine
  exchanger, regeneration vessel, and the lean amine main/booster pumps are
  the process equipment tying the twelve valves together.
concept-tags: [amine treatment, sour gas removal, contactor, flash tank, rich lean amine exchanger, regeneration, lean amine pump recirculation, flare]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-5 (drawing number E1497,
      printed p. 9-5) — "Figure 9-5. Amine Treatment Unit."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig5-amine-treatment-unit.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 117, printed p. 9-5) at 300 dpi, contactor, flash tank, rich/lean amine exchanger, regeneration vessel, both pumps, all 12 numbered valve stations, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑫ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Rich Amine Letdown Control Valve ... 12. Lean Gas
  Separator Sour Water Letdown Control Valve, printed pp. 9-4 – 9-8) and
  Tables 9-4 through 9-15 — per Style Guide §6.2 these stay as the source
  drew them, not renumbered. This is the "Gas Treatment" zoom-in on
  `ogas-cmp-natural-gas-treatment-process-flow` (Figure 9-1). Drawing
  number E1497 is identical to ch8's `ogas-cmp-amine-treatment-unit`
  (Figure 8-18, also E1497) — this chapter's Figure 9-5 and ch8's Figure
  8-18 are the same underlying source drawing reused across both chapters
  (onshore natural-gas-treatment amine unit vs. offshore amine unit), with
  the same 12-valve-station shape and near-identical `teaches` content.
  This ch9 record's own id is intentionally distinct from the ch8 one
  (`ogas-cmp-amine-treatment-unit` already exists in `Subject-Matter Index —
  Oil & Gas Sourcebook ch8.md`) — **this is a naming collision to resolve**:
  both this chapter's and ch8's records currently share the literal id
  `ogas-cmp-amine-treatment-unit`. Flagged here rather than silently
  renamed; whichever chapter's record is touched next should disambiguate
  (e.g. suffix `-ch8` / `-ch9`, or `-offshore` / `-onshore`) per the
  vault's id-uniqueness expectation — not resolved in this batch since it
  is a cross-file rename, not a new-entry decision, and ch8's file is
  already closed out.
```

### Chapter 9 — Gas Treatment: representative flash-drum / flare valve hardware (printed p. 9-6)

```yaml
id: ogas-cmp-notchflo-cast-globe-body
teaches: >
  Labelled cutaway of a NotchFlo cast globe valve body: bonnet, staged trim
  stack, and body cutaway with flow path visible, flanged NPS 6 Class 600.
  Positioned in the source as general representative hardware for the
  amine-treatment unit's flash-drum and flare valve duties (items 4-6 in
  Figure 9-5's numbering — Flash Drum Level, Flash Drum Pressure, and Flash
  Gas to Flare Control Valves) rather than tied to one single numbered
  station; the source does not state which specific item's trim table
  (Tables 9-7 through 9-9) it illustrates.
concept-tags: [NotchFlo, cast globe body, cutaway, flash drum valves, flare valve, trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-6 (drawing number
      W9711-2, printed p. 9-6) — "Figure 9-6. NPS 6 Class 600 NotchFlo Cast
      Globe Body."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig6-notchflo-cast-globe-body.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 118, printed p. 9-6) at 300 dpi, full valve cutaway (bonnet, trim stack, flanged body) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the source between item 4's table (Table 9-7, Flash Drum
  Level Control Valve) in the left column and item 6's text (Flash Gas to
  Flare Control Valve) in the right column — genuinely ambiguous which
  single numbered item it illustrates, so this record deliberately does not
  force a one-to-one link (same honesty pattern as ch8's
  `ogas-cmp-ez-control-valve-sectional`, which was "not tied to a single
  numbered valve station"). Figure 9-7 ("Whisper Trim III," drawing W2629,
  printed p. 9-6) was seen on the same page, positioned beside item 6's
  text and Table 9-9, but was NOT confirmed or catalogued — it is not in
  this batch's requested figure list (the batch's own list ran 9-1 through
  9-6 only); a future batch should catalogue it, continuing forward from
  Figure 9-7 through the rest of the "Gas Treatment," "Dehydration," and
  "Sulfur Recovery" sections (Figures 9-8 through 9-11 were seen further
  ahead in the chapter while confirming this batch's page range but were
  not read, confirmed, or catalogued at this time).
```

### Chapter 9 — Gas Treatment: Flash/Lean Gas to Flare hardware (printed p. 9-6)

```yaml
id: ogas-cmp-whisper-trim-iii-flash-gas-flare
teaches: >
  Representative low-noise trim hardware: a Whisper Trim III perforated,
  staged-hole cylindrical cage, shown removed from its valve body.
  Illustrates the trim option for the flash gas to flare control valve
  (item 6, Table 9-9: "Whisper Trim I or Whisper Trim III") and the lean
  gas to flare control valve (item 10, Table 9-13, the same trim option) —
  both valves are normally closed and take relatively high pressure drops
  when relieving to the flare header, which can cause high noise and
  vibration if not attenuated; Whisper Trim's staged multi-hole geometry
  addresses this.
concept-tags: [flash gas to flare, lean gas to flare, Whisper Trim III, low noise trim, staged cage, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-7 (drawing number W2629,
      printed p. 9-6) — "Figure 9-7. Whisper Trim III."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig7-whisper-trim-iii.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 118, printed p. 9-6) at 300 dpi, full trim cage photo + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned on the same printed page as `ogas-cmp-notchflo-cast-globe-body`
  (Figure 9-6), directly beneath item 6's text (Flash Gas to Flare Control
  Valve) and above Table 9-9 — confirmed by direct visual inspection of the
  300 dpi page render, not just text-adjacency: the "Whisper Trim III"
  caption matches Table 9-9's trim type exactly, while item 5's text (Flash
  Drum Pressure Control Valve, Table 9-8: "Linear" trim) sits in the facing
  column and does not match, despite being the nearer paragraph in the raw
  text-extraction reading order. Same honest-ambiguity handling as the
  first batch's `ogas-cmp-notchflo-cast-globe-body` record, resolved here
  rather than forced because the trim-type cross-check gave a clean answer.
  This figure was seen on the same page as Figure 9-6 during the first
  batch but deliberately left uncatalogued (not in that batch's requested
  list); picked up here as the first item of this second batch.
```

### Chapter 9 — Gas Treatment: Tail Gas Treatment (printed p. 9-9)

```yaml
id: ogas-cmp-tail-gas-treatment-system-ch9
teaches: >
  Tail gas treatment process diagram — the step after the amine treatment
  unit, using a different amine derivative (e.g. MDEA) to further scrub
  tail gas before sulfur recovery. Eight numbered control valves are drawn:
  (1) rich amine recirculation to acid gas enrichment; (2) regeneration
  lean amine pump recirculation; (3) rich amine pump discharge to
  regeneration; (4) free acid gas drum level control; (5) lean amine flow
  control to the acid gas enrichment absorber; (6) tail gas quench water
  control; (7) lean amine to tail gas absorber; (8) tail gas treater
  semi-lean amine letdown (drawn twice — two valve symbols both marked "8"
  near the tail gas absorber's outputs). A ninth control point, the tail
  gas knockout drum level control valve (item 9 in the surrounding text),
  is described but has no drawn numbered station in the figure — confirmed
  by direct visual inspection of the rendered page.
concept-tags: [tail gas treatment, MDEA, acid gas enrichment, amine regeneration, rich amine recirculation, lean amine flow control, tail gas quench, sulfur recovery]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-8 (drawing number E1498,
      printed p. 9-9) — "Figure 9-8. Tail Gas Treatment System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig8-tail-gas-treatment-system.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 121, printed p. 9-9) at 300 dpi, full block diagram (all drawn valve stations, tail gas quench/absorber/KO drum, acid gas enrichment absorber, regeneration, rich amine flash drum, free acid gas drum vessels), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  SAME DRAWING NUMBER (E1498) AND CONTENT as `Subject-Matter Index — Oil & Gas
  Sourcebook ch8.md`'s `ogas-cmp-tail-gas-treatment-system` (its own Figure
  8-19) — same 8-drawn/9-described valve pattern and item wording, reused
  across both chapters exactly like the E1497 amine-treatment-unit reuse
  already flagged on this file's own Figure 9-5 record, and the E1496
  TEG-dehydration-unit reuse on this batch's Figure 9-9 record below. This
  ch9 record's id is deliberately suffixed `-ch9` from the start, learning
  from the earlier flagged bare-id collision (`ogas-cmp-amine-treatment-unit`)
  rather than repeating it — the ch8 record should ideally gain a matching
  `-ch8` suffix at its own next touch, per that flag's own recommendation,
  but this pass does not rename it (a cross-file edit, out of scope for a
  Component-Index-only batch touching ch9). Position corrected from the
  first batch's guess: the diagram itself is on PDF p. 121, printed p. 9-9
  — NOT printed p. 9-8 as that batch's "Open items" note estimated from a
  multi-column running-text scan. Printed p. 9-8 only *references* "Figure
  9-8" in its item-11/12 text; the actual diagram prints on the following
  page. Confirmed here by direct page-image inspection of both pages'
  footers (9-8 and 9-9).
```

### Chapter 9 — Dehydration (printed p. 9-11)

```yaml
id: ogas-cmp-teg-gas-dehydration-unit-ch9
teaches: >
  TEG (tri-ethylene glycol) gas dehydration unit — the step after gas
  treatment (amine treatment and tail gas treatment), removing remaining
  water from the gas stream. Three numbered control valves: (1) lean
  glycol to glycol contactor — controls lean-glycol flow from the glycol
  regeneration unit into the top of the contactor (may be absent if a
  variable-speed pump is used); (2) gas dehydration inlet separator level
  control — controls the liquid level in the separator upstream of the
  contactor, removing water/liquids before glycol dehydration; (3) glycol
  contactor level control — controls the glycol-water interface level in
  the contactor, typically needing anti-cavitation trim (Cavitrol III
  2-stage) for the pressure drop.
concept-tags: [gas dehydration, TEG, triethylene glycol, glycol contactor, lean glycol, inlet separator level control, interface level control, anti-cavitation trim, Cavitrol III]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-9 (drawing number E1496,
      printed p. 9-11) — "Figure 9-9. TEG Gas Dehydration Unit."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig9-teg-gas-dehydration-unit.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 123, printed p. 9-11) at 300 dpi, both vessels (KO drum and glycol contactor), all 3 numbered valve stations, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  SAME DRAWING NUMBER (E1496) AND CONTENT as `Subject-Matter Index — Oil & Gas
  Sourcebook ch8.md`'s `ogas-cmp-teg-gas-dehydration-unit` (its own Figure
  8-16) — identical 3-valve pattern and item wording, the same reused-
  drawing pattern noted on this file's Figure 9-5 and 9-8 records. Id
  deliberately suffixed `-ch9` from the start (see
  `ogas-cmp-tail-gas-treatment-system-ch9`'s note for the reasoning); the
  ch8 record is not renamed in this pass. This is the "Dehydration"
  zoom-in on `ogas-cmp-natural-gas-treatment-process-flow` (Figure 9-1),
  positioned in the chapter after Gas Treatment (Amine + Tail Gas) and
  before Sulfur Recovery.
```

### Chapter 9 — Sulfur Recovery (printed p. 9-12)

```yaml
id: ogas-cmp-sulfur-recovery-system
teaches: >
  Sulfur recovery process diagram — a common Claus process, producing
  elemental sulfur from the H2S produced in the gas treatment section.
  Nine numbered control valves mark the process: (1) acid gas knockout
  drum level control; (2) acid gas preheater temperature control —
  controls steam flow to the preheater, thus discharge temperature; (3)
  air preheater temperature control — same duty for the combustion-air
  preheater; (4) waste heat boiler (WHB) boiler feedwater level control,
  downstream of the reaction furnace; (5) reaction furnace WHB steam
  pressure control; (6) sulfur condenser boiler feedwater control valve
  #1, to the #1 sulfur condenser; (7) reactor/reheater steam temperature
  control valve #1, reheating gas leaving the #1 sulfur condenser (at its
  dew point) for further sulfur separation; (8) sulfur condenser boiler
  feedwater control valve #2, to the #2 sulfur condenser; (9)
  reactor/reheater steam temperature control valve #2, the same reheat
  duty after the #2 condenser. Process equipment: free acid gas drum, KO
  drum, air preheater, reaction furnace/WHB, #1 and #2 sulfur condensers,
  #1 and #2 reactor/reheaters, sulfur degasser/sump, tail gas scrubber.
concept-tags: [sulfur recovery, Claus process, elemental sulfur, H2S, reaction furnace, waste heat boiler, sulfur condenser, reactor reheater, boiler feedwater control, anti-cavitation trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-10 (drawing number
      E1514, printed p. 9-12) — "Figure 9-10. Sulfur Recovery System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig10-sulfur-recovery-system.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 124, printed p. 9-12) at 300 dpi, full block diagram (all process vessels, all 9 numbered valve stations), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑨ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Acid Gas Knockout Drum Level Control ... 9.
  Reactor/Reheater Steam Temperature Control Valve #2, printed pp. 9-12 –
  9-14) and Tables 9-28 through 9-36 — per Style Guide §6.2 these stay as
  the source drew them, not renumbered. This is the "Sulfur Recovery"
  zoom-in on `ogas-cmp-natural-gas-treatment-process-flow` (Figure 9-1) —
  the last of the chapter's four zoom-in sections (Inlet Separation, Gas
  Treatment, Dehydration, Sulfur Recovery). Companion hardware photo:
  item 8's valve is illustrated by `ogas-cmp-design-ed-cutaway` (Figure
  9-11), immediately following in the source.
```

### Chapter 9 — Sulfur Recovery: representative hardware (printed p. 9-14)

```yaml
id: ogas-cmp-design-ed-cutaway
teaches: >
  Labelled cutaway of a Fisher "Design ED" globe valve: bonnet, yoke,
  spring-loaded plug/stem assembly, and body cutaway with flow-path arrows
  entering and exiting through the flanged ends. Representative hardware
  for the sulfur condenser boiler feedwater control valve #2 (item 8 in
  Figure 9-10, Tables 9-35/9-36: "NPS 2-6 ED, ASME CL600") — this valve
  controls boiler feedwater flow to the #2 sulfur heat exchanger/condenser
  to facilitate sulfur fallout from the flowstream, and experiences much
  higher pressure drops than the WHB duty, creating the need for
  anti-cavitation (Cavitrol III) trim.
concept-tags: [Design ED, globe valve, cutaway, sulfur condenser boiler feedwater control, anti-cavitation trim, Cavitrol III, flow path]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 9 "Natural Gas Treatment," Figure 9-11 (drawing number
      W0451, printed p. 9-14) — "Figure 9-11. Design ED."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch9-fig11-design-ed-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 126, printed p. 9-14) at 300 dpi, full valve body cutaway (bonnet, stem, spring, flow arrows) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the source directly beside item 8's text (Sulfur Condenser
  Boiler Feedwater Control Valve #2) and Tables 9-35/9-36, immediately
  after `ogas-cmp-sulfur-recovery-system` (Figure 9-10). Confirmed by
  reading Chapter 10's opening page (PDF p. 127) that Figure 9-11 is the
  chapter's LAST figure — Chapter 10 "Oil and Gas Transportation" begins
  immediately after with its own Figure 10-1. **Chapter 9 is now fully
  catalogued, Figures 9-1 through 9-11, with no gaps.**
```

---

## Open items

- **First batch (Figures 9-1 through 9-6):** all six requested figures
  confirmed against the real page text and a 300 dpi page-image render
  before extraction; none were skipped or fabricated. PDF pages 113
  (printed 9-1, chapter opener), 115 (9-3, ×2), 116 (9-4), 117 (9-5), 118
  (9-6). No gaps within that batch's range.
- **Second batch (Figures 9-7 through 9-11):** all five requested figures
  confirmed against the real page text and a 300 dpi page-image render
  before extraction; none were skipped or fabricated. PDF pages 118
  (printed 9-6, same page as Figure 9-6), 121 (9-9), 123 (9-11), 124
  (9-12), 126 (9-14). The first batch's page-guess for Figure 9-8 (printed
  "9-8/9-9") is corrected here: the diagram itself is on printed p. 9-9,
  confirmed by direct page-image inspection — printed p. 9-8 only
  references the figure in its item text. **Chapter 9 is closed out —
  Figures 9-1 through 9-11, no further figures remain to catalogue.**
- **Two more reused-drawing collisions found and flagged, not resolved:**
  this file's `ogas-cmp-tail-gas-treatment-system-ch9` (Figure 9-8, drawing
  E1498) shares its drawing number and content with `Subject-Matter Index — Oil
  & Gas Sourcebook ch8.md`'s `ogas-cmp-tail-gas-treatment-system` (Figure
  8-19); this file's `ogas-cmp-teg-gas-dehydration-unit-ch9` (Figure 9-9,
  drawing E1496) shares its drawing number and content with that same
  file's `ogas-cmp-teg-gas-dehydration-unit` (Figure 8-16). Both new ch9
  records were given `-ch9`-suffixed ids from the start to avoid repeating
  the earlier `ogas-cmp-amine-treatment-unit` bare-id collision; the ch8
  records are not renamed in this pass (cross-file edits, out of scope for
  a Component-Index-only batch touching ch9). A future pass touching ch8
  should add matching `-ch8` suffixes to its `ogas-cmp-tail-gas-treatment-system`,
  `ogas-cmp-teg-gas-dehydration-unit`, and `ogas-cmp-amine-treatment-unit`
  records for consistency.
- **Naming collision flagged earlier, still not resolved:** this file's
  `ogas-cmp-amine-treatment-unit` (Figure 9-5) and `Subject-Matter Index — Oil &
  Gas Sourcebook ch8.md`'s own `ogas-cmp-amine-treatment-unit` (Figure
  8-18) share the identical id. Both figures share drawing number E1497 and
  near-identical content (12-valve amine treatment unit, onshore vs.
  offshore framing) — see this record's own `notes` for detail.
- All eleven records in this file (both batches) are `used-by: []` — this
  is a proactive, use-driven-ahead catalog per `Source Library.md`; no
  course currently references them.
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
