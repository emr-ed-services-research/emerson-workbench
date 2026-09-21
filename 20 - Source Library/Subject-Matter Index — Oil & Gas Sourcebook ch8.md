---
title: Subject-Matter Index — Oil & Gas Sourcebook ch8
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch8 — Offshore Oil and Gas Production
updated: 2026-09-08
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 8

**Chapter 8 — "Offshore Oil and Gas Production."** Standing library-cataloging
pass, NOT tied to any course — built ahead of any course actually needing
these figures, per `Source Library.md`'s "two ways a subject-matter index gets
triggered." Matches the batch shape of the ch1/ch2/ch3/ch5/ch6/ch7 passes of
this same chapter series.

**First batch** — the six figures from the chapter's opening sections: the
offshore topsides process overview (Figure 8-1), the slug catcher and its two
representative valve-hardware photos (Figures 8-2, 8-3, 8-4), and the
High Pressure Separation section's third representative valve photo and its
process diagram (Figures 8-5, 8-6). All six confirmed against the real page
text and image before extraction — none were skipped or fabricated.

**Second batch** — six more figures continuing through the Test Separator,
Low Pressure Separation, Oil Treatment, and Gas Compression sections: a
Cavitrol III trim hardware photo and an EWT metal-seat valve cutaway
(Figures 8-7, 8-8), the Low Pressure Separation process diagram (Figure
8-9), the Oil Treatment process diagram and its companion 667 HP control
valve hardware photo (Figures 8-10, 8-11), and the Low Pressure Compression
process diagram (Figure 8-13). All six confirmed against the real page text
and a 300 dpi page-image render before extraction — none were skipped or
fabricated. Figure 8-12 (Electrostatic Coalescer) was seen on the same page
as Figure 8-13 but deliberately left uncatalogued — it was not in this
batch's requested figure list; see "Open items."

**Third batch** — six more figures, picking up exactly where the second
batch's "Open items" said to (Figure 8-12 first, then continuing forward
past Figure 8-13 into High Pressure Compression, Gas Dehydration, and Gas
Treatment / Amine Treatment): the previously-skipped Electrostatic
Coalescer oil-treatment alternative (Figure 8-12), the four-stage High
Pressure Compression train and its representative EZ valve hardware
(Figures 8-14, 8-15), the TEG Gas Dehydration Unit (Figure 8-16), and the
NotchFlo DST trim hardware with the Amine Treatment Unit it serves (Figures
8-17, 8-18). All six confirmed against the real page text and a 200 dpi
page-image render before extraction — none were skipped or fabricated.
Figure 8-19 ("Tail Gas Treatment System") was seen immediately after this
batch's scope while confirming Figure 8-18's item 12 text, but was
deliberately left uncatalogued — it was not in this batch's requested
figure list; see "Open items."

**Fourth batch** — the chapter's last four figures, closing out Chapter 8:
the Tail Gas Treatment System that completes the Gas Treatment section's
sequence (Figure 8-19), and the Water Injection section in full — its
process diagram and two trim/hardware figures (Figures 8-20, 8-21, 8-22).
All four confirmed against the real page text and a 200/300 dpi page-image
render before extraction; none were skipped or fabricated. Confirmed by
reading Chapter 9's opening page (PDF p. 113) that Figure 8-22 is the
chapter's last figure — Chapter 9 "Natural Gas Treatment" begins
immediately after with its own Figure 9-1. **Chapter 8 is now fully
catalogued, Figures 8-1 through 8-22, with no gaps.**

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

## Components

### Chapter 8 — Introduction (printed pp. 8-1 – 8-4)

**`kind: topic` entries added 2026-09-17** — a full-chapter conceptual pass
run after the Control Valve Handbook's own topic-indexing proved the
`kind: topic` convention (see `Source Library.md`). The chapter's opening
~4 pages (printed 8-1 through 8-4, PDF pp. 84-87) are real explanatory
prose with no figure of their own at all — invisible to every prior
figures-only batch above. Read directly via `pdftotext -layout`,
footer-confirmed page numbers, nothing invented or summarized from
outside knowledge.

```yaml
id: ogas-topic-offshore-facility-types
kind: topic
concept-tags: [fixed leg platform, tension leg platform, FPSO, spar, semi-submersible, offshore facility types, water depth, production capacity]
status: current
teaches: >
  The chapter's five offshore production unit types, each with real
  distinguishing numbers: Fixed Leg Platforms (FLP) — concrete/steel legs
  anchored to the seabed, feasible to ~1,700 ft water depth. Tension Leg
  Platforms (TLP) — floating, tethered to eliminate vertical movement, used
  to ~6,000 ft, a 4-column design resembling a semi-submersible; "mini
  TLPs" serve as early-production/satellite platforms. Floating Production
  Storage and Offloading (FPSO) units — hull-based (converted tankers or
  new builds) on a geostationary turret mooring that lets the vessel weathervane;
  typically produce crude oil only (gas is reinjected, used for fuel, or
  flared, since transporting gas to shore is uneconomical); 30,000-250,000
  b/d production, 1-2 million bbl storage (3-10 days before offload
  required), used to 8,500 ft. Spars — cylindrical vertical hulls (Conventional,
  Truss, or Cell design), moored by a semi-taut system, 30,000-200,000 b/d,
  no storage capability (unlike FPSOs), used to 8,000 ft. Semi-submersibles
  — multi-legged floating structures on buoyant pontoons, 30,000-250,000
  b/d, used to 8,000 ft. The source's own framing: "oil and gas production
  methods... are common to nearly all units" — the rest of the chapter
  describes that shared processing, not five separate process chains.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 8 opening, printed pp. 8-1 – 8-2 — prose, no figure"
relatedFigures: [ogas-cmp-offshore-topsides-process-flow]
relatedTopics: [ogas-topic-slugging-and-slug-catchers]
used-by: []
notes: >
  This is the chapter's umbrella framing — every downstream figure/topic
  in this file describes processing common across these five facility
  types, per the source's own statement. FLP and TLP are named here but
  neither gets its own dedicated figure/system diagram anywhere later in
  the chapter (FPSO is the facility type most later figures are explicitly
  captioned for, e.g. "Water Injection System, FPSO Unit").
```

```yaml
id: ogas-topic-slugging-and-slug-catchers
kind: topic
concept-tags: [slugging, slug catcher, multiphase flow, separation train, gas flaring, plant shutdown]
status: current
teaches: >
  Slugging is the partial separation of gas and liquid phases in a
  multiphase flow line, characterized by sudden drops and surges in liquid
  and gas volumes — a real, named failure mode for topsides processing, not
  just background noise: large rapid variations can induce excessive gas
  flaring, reduce operating capacity, and trigger plant shutdowns. A
  dedicated slug catcher is installed specifically where frequent slugging
  is anticipated, to protect the separation train from these variations
  before the fluid reaches the high/low pressure separation vessels.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "printed p. 8-2 — prose, no figure (the slug catcher's own
      valve layout is Figure 8-2, catalogued separately below)"
relatedFigures: [ogas-cmp-slug-catcher-valves]
relatedTopics: [ogas-topic-offshore-facility-types, ogas-topic-separation-train-overview]
used-by: []
notes: >
  Explains WHY a slug catcher exists — `ogas-cmp-slug-catcher-valves`
  (Figure 8-2) already documents its numbered valve stations but not the
  underlying slugging phenomenon this record now covers. Note this chapter
  frames the slug catcher as an FPSO-specific vessel ("found only in FPSO
  units" per Figure 8-2's own record); this intro's more general "a
  dedicated slug catcher may be installed" framing doesn't repeat that
  restriction, a minor scope difference between the general intro and the
  specific figure, not a contradiction to resolve here.
```

```yaml
id: ogas-topic-separation-train-overview
kind: topic
concept-tags: [separation train, high pressure separation, low pressure separation, test separator, momentum dissipation, flash separation]
status: current
teaches: >
  The general separation sequence common to offshore facilities: fluid
  entering the high pressure separator has its momentum dissipated,
  letting liquids fall free from gas; the liquid phase is then heated and
  undergoes further separation to flash off remaining gas and split crude
  oil from produced water. The high-pressure phase splits across a test
  separator and a dedicated HP separator — where a slug catcher is
  present, some initial separation has already occurred, and it's not
  uncommon for the HP separator to be sized large enough to serve as both
  the separator and the slug catcher. After HP separation, oil is heated
  and further separated in the LP separator; LP off-gas moves to LP
  compression (if present) then HP compression/dehydration, while the
  crude oil stream proceeds to the bulk oil treater (and sometimes an
  electrostatic coalescer) and produced water goes to the free water
  knockout drum.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "printed pp. 8-2 – 8-3 — prose, no figure"
relatedFigures: [ogas-cmp-high-pressure-separation-process-diagram, ogas-cmp-low-pressure-separation-process-diagram]
relatedTopics: [ogas-topic-slugging-and-slug-catchers, ogas-topic-oil-water-separation-technologies]
used-by: []
notes: >
  The general "why this sequence" explanation behind the specific
  numbered-valve-station diagrams already catalogued (Figures 8-6, 8-9) —
  those document each vessel's control points, this covers the physical
  separation logic connecting the vessels.
```

```yaml
id: ogas-topic-oil-water-separation-technologies
kind: topic
concept-tags: [electrostatic coalescer, hydrocyclone, floatation cell, oil-water separation, centrifugal separation, produced water treatment]
status: current
teaches: >
  Three named oil-water separation technologies, reused across both oil
  treatment and produced-water treatment in this chapter: electrostatic
  coalescers expose the crude/water stream to a high-voltage electrostatic
  field, causing water to coalesce into droplets and fall free (also
  helping remove dissolved salts). Hydrocyclones use centrifugal force —
  lighter oil droplets migrate to a low-pressure central core with axial
  reverse flow, while clean water exits downstream. Floatation cells
  generate and disperse fine gas bubbles that attach to oil droplets (or
  solid particles), lifting them to the surface for collection. The source
  explicitly scopes out valve-selection detail for this equipment: "valves
  used in this process will not be discussed in this chapter, but can
  range from NPS 1-14 globe, ball, or butterfly valves," sized dramatically
  differently by pressure/flow constraints.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "printed pp. 8-3 – 8-4 — prose, no figure"
relatedFigures: [ogas-cmp-electrostatic-coalescer-oil-treatment]
relatedTopics: [ogas-topic-separation-train-overview, ogas-topic-water-treatment-and-injection-overview]
used-by: []
notes: >
  Complementary to, not duplicative of, `ogas-cmp-electrostatic-coalescer-oil-treatment`
  (Figure 8-12) — that record documents the coalescer system's numbered
  valve stations; this record explains the coalescing/hydrocyclone/
  floatation physics the source states are also used for produced-water
  cleanup before disposal or injection, a second application the figure
  entry doesn't cover at all.
```

```yaml
id: ogas-topic-gas-compression-and-treatment-overview
kind: topic
concept-tags: [gas compression, low pressure compression, high pressure compression, dehydration, staging, vapor recovery, fuel gas]
status: current
teaches: >
  After separation, gas is dried, compressed, potentially treated, and
  sent back to the formation or onshore — at minimum via a high pressure
  compression unit and dehydration package. Low pressure compression
  (typically two-stage) is not present on every unit — more common on
  larger vessels (150,000+ b/d) — and boosts secondary-separator gas for
  further HP compression; where absent, a vapor recovery system may
  instead capture off-gas from the knockout drum/bulk treater for HP
  compression. HP compression uses at minimum two 50%-capacity
  three-or-four-stage trains — shallower-water units typically use
  three-stage trains, deeper-water units use additional staging, and
  larger units may run up to three HP trains. Midway through HP
  compression, gas is routed to TEG (tri-ethylene glycol) dehydration;
  some dehydrated gas is diverted as fuel gas to power the vessel.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "printed pp. 8-3 – 8-4 — prose, no figure"
relatedFigures: [ogas-cmp-low-pressure-compression-system-diagram, ogas-cmp-high-pressure-compression-train, ogas-cmp-teg-gas-dehydration-unit]
relatedTopics: [ogas-topic-separation-train-overview, ogas-topic-gas-injection-and-lift]
used-by: []
notes: >
  The staging/train-count reasoning behind why Figure 8-14 shows two
  parallel four-stage trains (deeper-water configuration) — the existing
  figure entry documents the valve stations within that configuration but
  not why train count/staging varies by water depth and vessel size.
```

```yaml
id: ogas-topic-gas-injection-and-lift
kind: topic
concept-tags: [gas injection, gas lift, secondary recovery, tertiary recovery, gas flaring limits, wellbore annulus]
status: current
teaches: >
  Two distinct uses of produced/compressed gas, both aimed at improving
  well productivity rather than export: gas injection reinjects gas to
  raise reservoir pressure — increasingly the economic choice over
  flaring, since most regions now limit flaring volumes, and nearly every
  FPSO carries gas compression for this purpose even where flaring limits
  aren't the driver. Gas lift instead routes compressed gas into the outer
  wellbore annulus, where it enters the wellstream through inlets in the
  inner production conduit, reducing the fluid column's density and
  hydrostatic head to increase flow to surface — used where reservoir
  pressure is relatively low, and specifically in deepwater developments
  where reservoir drive pressure is countered by high hydrostatic head.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "printed p. 8-4 — prose, no figure"
relatedFigures: []
relatedTopics: [ogas-topic-gas-compression-and-treatment-overview]
used-by: []
notes: >
  No figure anywhere in this chapter documents a gas-injection or
  gas-lift-specific valve layout — this concept is genuinely absent from
  the figures-only catalogue, confirmed by re-checking this file's own
  existing 22 figure records above before writing this entry.
```

```yaml
id: ogas-topic-water-treatment-and-injection-overview
kind: topic
concept-tags: [water treatment, water injection, secondary recovery, oil-in-water specification, produced water disposal]
status: current
teaches: >
  Produced-water treatment depth depends on its destination: water
  disposed overboard needs more cleaning than water re-injected into the
  reservoir, typically to an oil-in-water specification below 40 ppm,
  using the same hydrocyclone/floatation-cell technologies described
  above. Water injection (a secondary recovery method) cleans and injects
  produced water into the lowest portion of the reservoir via separate
  injection wells, raising oil level and pushing it toward producing
  areas — the need for water injection increases as the reservoir
  depletes over time.
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "printed p. 8-4 — prose, no figure"
relatedFigures: [ogas-cmp-water-injection-system-fpso]
relatedTopics: [ogas-topic-oil-water-separation-technologies]
used-by: []
notes: >
  The general water-treatment/injection rationale (including the real
  40 ppm oil-in-water spec, absent from any figure entry) behind
  `ogas-cmp-water-injection-system-fpso` (Figure 8-20), which documents
  only that system's numbered valve stations, not the treatment-depth
  logic or the disposal-vs-injection distinction driving it.
```

### Chapter 8 — Offshore production process overview (printed p. 8-2)

```yaml
id: ogas-cmp-offshore-topsides-process-flow
teaches: >
  The general process flow typical of an offshore production facility's
  topsides, top level: wellhead fluid enters oil/gas/water separation, and
  separates into three downstream paths — gas to gas treatment (dehydration
  and compression) then to the gas pipeline or injection, oil to crude oil
  treatment then to the oil pipeline or storage, and water to water treatment
  then to disposal or injection. This is the chapter's orienting figure —
  every later section (slug catcher, high/low pressure separation, gas
  compression, oil treatment) is a zoom-in on one block of this diagram, the
  same relationship the onshore chapter's Figure 7-1 has to its own sections.
concept-tags: [offshore production, topsides, process flow, wellhead fluid, separation, gas treatment, crude oil treatment, water treatment]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-1 (drawing number
      E1490, printed p. 8-2) — "Figure 8-1. Process Flow Diagram of Topsides
      in Offshore Production."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig1-offshore-topsides-process-flow.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 85 / printed 8-2) at 300 dpi, full block diagram (all three downstream paths) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Structurally the offshore counterpart to `ogas-cmp-onshore-production-process-flow`
  (ch7, Figure 7-1) — same three-way separation-to-treatment shape, offshore
  framing (spar / semi-submersible / FPSO topsides) instead of onshore
  wellsite-and-gathering framing. Chapter 8's own later sections (slug
  catcher, high/low pressure separation) are the zoom-ins on this diagram's
  "OIL, GAS, AND WATER SEPARATION" block.
```

### Chapter 8 — Slug catcher (printed pp. 8-5 – 8-6)

```yaml
id: ogas-cmp-slug-catcher-valves
teaches: >
  Slug catcher valve schematic (found only in FPSO units): fluid from the
  well and the turret enters the slug catcher vessel, which absorbs the
  slugging (sudden surges) that would otherwise upset downstream separation.
  Four numbered control valves mark the vessel's control points: (1) slug
  catcher gas to flare — controls slug-catcher pressure by directing gas to
  the flare knockout drum (or to low pressure gas compression, depending on
  unit design); (2) slug catcher level control — controls the liquid
  interface level, feeding the High Pressure Separator; (3) HP flare
  scrubber — controls the hydrocarbon/water stream after flare gas has been
  scrubbed; (4) slug catcher to test separator heating medium control —
  controls the heating fluid (condensate or the final oil product) used to
  warm fluids ahead of the test separator.
concept-tags: [slug catcher, FPSO, slugging, gas to flare, level control, HP flare scrubber, heating medium control, turret]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-2 (drawing number
      E1491, printed p. 8-5) — "Figure 8-2. Common Slug Catcher Valves."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig2-slug-catcher-valves.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 88 / printed 8-5) at 300 dpi, all four numbered valve stations, slug catcher and turret vessels, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–④ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Slug Catcher Gas to Flare ... 4. Slug Catcher to Test
  Separator Heating Medium Control Valve) and Tables 8-1 through 8-4 — per
  Style Guide §6.2 these stay as the source drew them, not renumbered.
  Companion hardware photos: `ogas-cmp-large-et-valve-whisper-iii-trim`
  (Figure 8-3, valve station 1) and `ogas-cmp-vee-ball-v150-2052-actuator`
  (Figure 8-4, valve station 2), both immediately following in the source.
```

```yaml
id: ogas-cmp-large-et-valve-whisper-iii-trim
teaches: >
  Representative hardware for slug catcher gas to flare (valve station 1 in
  Figure 8-2, Table 8-1): a large ET globe valve with Whisper Trim III and a
  D3 cage-and-baffle trim arrangement, NPS 10-16, ASME CL150. Low-noise trim
  is the selection driver — as with most flare valves, noise generation from
  the pressure letdown is the primary concern the trim design solves.
concept-tags: [slug catcher gas to flare, ET valve, Whisper Trim III, D3 cage and baffle, low noise trim, flare valve, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-3 (drawing number
      X0215-1, printed p. 8-6) — "Figure 8-3. Large ET Valve with Whisper III
      Trim and D3 Cage and Baffle."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig3-large-et-valve-whisper-iii-trim.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 89 / printed 8-6) at 300 dpi, full valve cutaway (bonnet, stem, cage, body) + drawing number, caption excluded"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  This is a labelled cutaway drawing (not a product photo like the other
  hardware figures in this chapter and ch7) — shows the internal cage/baffle
  trim arrangement, not just the exterior. Pairs with Table 8-1 "Spar Slug
  Catcher Gas to Flare Valve" (Valve Type and Pressure Class: NPS 10-16 EWT,
  ASME CL150; Trim Type: Whisper Trim III or WhisperFlo trim) — that table is
  not separately catalogued here (subject-matter index catalogues figures, not
  tables). Immediately follows `ogas-cmp-slug-catcher-valves` (Figure 8-2) in
  the source.
```

```yaml
id: ogas-cmp-vee-ball-v150-2052-actuator
teaches: >
  Representative hardware for slug catcher level control (valve station 2 in
  Figure 8-2, Table 8-2): a Vee-Ball V150 ball valve, NPS 10-16, ASME CL150,
  with a 2052 Size 1 spring-and-diaphragm actuator and a FIELDVUE DVC6200
  digital valve controller. A ball valve is the common solution here because
  the valve does not see high pressure differentials, eliminating the need
  for severe-service trim.
concept-tags: [slug catcher level control, Vee-Ball V150, 2052 actuator, DVC6200, ball valve, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-4 (drawing number
      X0187, printed p. 8-6) — "Figure 8-4. Vee-Ball V150 NPS 3 with 2052
      Size 1 Actuator and DVC6200."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig4-vee-ball-v150-2052-actuator.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 89 / printed 8-6) at 300 dpi, full valve photo (actuator, positioner, body, flanged inlet) + drawing number, caption excluded"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The caption's own "NPS 3" describes the pictured unit; Table 8-2 "Spar Slug
  Catcher Level Control Valve" gives the general duty-point spec as "NPS 10 -
  16 Vee-Ball V150, ASME CL150" — the photo shows representative hardware,
  not the exact sized unit for every application (same pattern as ch7's
  `ogas-cmp-compression-suction-throttle-valve-photo`). That table is not
  separately catalogued here (subject-matter index catalogues figures, not
  tables). Immediately follows `ogas-cmp-large-et-valve-whisper-iii-trim`
  (Figure 8-3) in the source, on the same page.
```

### Chapter 8 — High Pressure Separation (printed pp. 8-6 – 8-7)

```yaml
id: ogas-cmp-8580-rotary-valve-2052-actuator
teaches: >
  Representative hardware for the slug catcher to test separator heating
  medium control valve (valve station 4 in Figure 8-2, Table 8-4): an 8580
  rotary (high-performance butterfly) valve, NPS 6-10, ASME CL150, with a
  2052 actuator and a FIELDVUE DVC6000 digital valve controller. A butterfly
  valve is most commonly applied here because the final oil product is being
  cooled before going to storage — the duty is a heating-medium control, not
  a severe-service or high-pressure-drop application.
concept-tags: [heating medium control, 8580 rotary valve, high performance butterfly, 2052 actuator, DVC6000, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-5 (drawing number
      W9498, printed p. 8-7) — "Figure 8-5. 8580 Rotary Valve with 2052
      Actuator and DVC6000."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig5-8580-rotary-valve-2052-actuator.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 90 / printed 8-7) at 300 dpi, full valve photo (actuator, positioner, body, disc visible) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Pairs with Table 8-4 "Spar Slug Catcher to Test Separator Heating Medium
  Control Valve" (Valve Type and Pressure Class: NPS 6-10 8580 rotary valve,
  ASME CL150) — that table is not separately catalogued here (component
  index catalogues figures, not tables). This is the fourth and last of the
  slug-catcher hardware photos (valve station 3, HP Flare Scrubber, has no
  dedicated hardware photo in this chapter — the source text for it appears
  on printed p. 8-6 with no accompanying figure).
```

```yaml
id: ogas-cmp-high-pressure-separation-process-diagram
teaches: >
  High pressure separation process diagram: fluid from the well enters the
  test separator, which shares its liquid streams with the HP separator (fed
  independently from the well). Eight numbered control valves mark every
  control point across both vessels: (1) test separator gas outlet pressure
  control — directs gas to the high pressure compression section; (2) test
  separator oil interface level control; (3) test separator produced water
  interface level control; (4) HP flare scrubber — controls the
  hydrocarbon/water stream after flare gas scrubbing; (5) HP separator vent
  to flare — an emergency-only relief path, not present on every platform;
  (6) HP separator oil interface level control — flow proceeds on to the low
  pressure separator; (7) HP separator produced water interface level
  control; (8) HP separator gas outlet pressure control.
concept-tags: [high pressure separation, test separator, HP separator, gas outlet pressure control, oil interface level control, produced water interface level control, vent to flare]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-6 (drawing number
      E1492, printed p. 8-7) — "Figure 8-6. High Pressure Separation Process
      Diagram."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig6-high-pressure-separation-process-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 90 / printed 8-7) at 300 dpi, both vessels, all 8 numbered valve stations, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑧ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Test Separator Gas Outlet Pressure Control ... 8. HP
  Separator Gas Outlet Pressure Control, printed pp. 8-7 through 8-9) and
  Tables 8-5 through 8-12 — per Style Guide §6.2 these stay as the source
  drew them, not renumbered. This is the "High Pressure Separation" zoom-in
  on `ogas-cmp-offshore-topsides-process-flow` (Figure 8-1), the same
  relationship ch7's Figure 7-4 has to its own Figure 7-1. Item descriptions
  for stations 5-8 (HP separator vent to flare, oil/water level control, gas
  outlet pressure control) continue past this batch's confirmed page range
  (printed pp. 8-8 – 8-9) but were read in full to confirm this record's
  `teaches` field; no hardware photos for those four stations were checked
  and none are catalogued here — a later batch continuing this chapter
  should confirm whether such photos exist (Figure 8-7 "Cavitrol III Trim"
  appears immediately after this figure's text, on printed p. 8-8, and looks
  like the next item in the chapter's own sequence).
```

### Chapter 8 — Test Separator hardware (printed p. 8-8)

```yaml
id: ogas-cmp-cavitrol-iii-trim-cage
teaches: >
  Representative Cavitrol III anti-cavitation trim hardware: a perforated
  cylindrical cage (multiple staged flow-restriction holes around its
  circumference) shown disassembled from its flanged base/retainer ring.
  Referenced by the text as the trim option for the test separator produced
  water interface level control valve (Table 8-7) when the pressure drop is
  high enough to risk cavitation damage — the valve otherwise defaults to
  Equal Percentage trim.
concept-tags: [Cavitrol III, anti-cavitation trim, staged pressure letdown, cage trim, test separator produced water, cavitation damage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-7 (drawing number
      W8295, printed p. 8-8) — "Figure 8-7. Cavitrol III Trim."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig7-cavitrol-iii-trim-cage.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 91 / printed 8-8) at 300 dpi, full disassembled trim photo (perforated cage + base ring) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A product/hardware photo, not a labelled cutaway — shows the trim cage
  itself removed from the valve body, not installed. Positioned in the
  source immediately after Table 8-5 (Test Separator Gas Outlet Pressure
  Control Valve) and item 3's text (Test Separator Produced Water Interface
  Level Control Valve, whose Table 8-7 lists "Equal Percentage or Cavitrol
  III trim (depending on dP)" as the trim option this figure illustrates).
```

```yaml
id: ogas-cmp-ewt-metal-seat-whisper-trim-i-cutaway
teaches: >
  Labelled cutaway of an EWT metal-seat globe valve with a Whisper Trim I
  cage: bonnet, packing/stem assembly, spring-loaded plug, and the cage's
  slotted trim ring, with flow-path arrows showing fluid entering below the
  cage, flowing up through the trim slots, and exiting the outlet — the
  low-noise trim geometry for a moderate-pressure-drop, low-to-moderate-noise
  duty. Representative hardware for the HP separator produced water
  interface level control valve (station 7 in Figure 8-6, Table 8-11), which
  "may experience moderate pressure drops" where "a globe valve may be
  utilized."
concept-tags: [EWT valve, metal seat, Whisper Trim I, cage trim, flow path, HP separator produced water, moderate pressure drop]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-8 (drawing number
      W9038, printed p. 8-9) — "Figure 8-8. EWT Metal Seat Valve with Whisper
      Trim I Cage."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig8-ewt-metal-seat-valve-whisper-trim-i-cage.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 92 / printed 8-9) at 300 dpi, full valve body cutaway (bonnet, stem, cage, flow arrows) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A labelled cutaway (like `ogas-cmp-large-et-valve-whisper-iii-trim`,
  Figure 8-3), not a product photo — shows the internal cage/flow-path
  geometry, not just the exterior. Pairs with Table 8-11 "HP Separator
  Produced Water Interface Level Control Valve" (NPS 2-6 ET, Whisper Trim I
  / III / WhisperFlo) — that table is not separately catalogued here
  (subject-matter index catalogues figures, not tables).
```

### Chapter 8 — Low Pressure Separation (printed p. 8-10)

```yaml
id: ogas-cmp-low-pressure-separation-process-diagram
teaches: >
  Low pressure separation process diagram: fluid from the HP separator's oil
  interface level control valve feeds the LP separator, which vents to an LP
  Flare KO (knockout) Drum. Five numbered control valves mark the control
  points: (1) LP separator vent to flare — an emergency-only relief path,
  not present on every floating unit; (2) LP separator oil interface level
  control; (3) LP separator gas outlet pressure control — directs gas
  onward to LP or HP compression; (4) LP flare scrubber — controls the
  hydrocarbon/water stream after flare gas scrubbing; (5) LP separator
  produced water interface level control.
concept-tags: [low pressure separation, LP separator, LP flare KO drum, gas outlet pressure control, oil interface level control, produced water interface level control, vent to flare]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-9 (drawing number
      E1493, printed p. 8-10) — "Figure 8-9. Low Pressure Separation Process
      Diagram."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig9-low-pressure-separation-process-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 93 / printed 8-10) at 300 dpi, LP separator and LP flare KO drum vessels, all 5 numbered valve stations, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑤ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Low Pressure (LP) Separator Vent to Flare ... 5. LP
  Separator Produced Water Interface Level Control Valve, printed pp. 8-10 –
  8-11) and Tables 8-13 through 8-17 — per Style Guide §6.2 these stay as
  the source drew them, not renumbered. This is the "Low Pressure
  Separation" zoom-in on `ogas-cmp-offshore-topsides-process-flow` (Figure
  8-1) and the downstream stage from `ogas-cmp-high-pressure-separation-process-diagram`
  (Figure 8-6) — the HP separator's oil interface level control valve (its
  station 6) feeds this vessel.
```

### Chapter 8 — Oil Treatment (printed pp. 8-12 – 8-13)

```yaml
id: ogas-cmp-oil-treatment-system-diagram
teaches: >
  Oil treatment process diagram: crude oil from the bulk treater flows to
  the dry oil tank, then to the main pump for onward delivery. Four numbered
  control valves mark the control points: (1) bulk treater produced water —
  controls the produced water level in the bulk treater; (2) bulk treater
  oil out — controls oil flow from the bulk treater to the dry oil tank; (3)
  dry oil pump recirculation — recycles flow around the main discharge pump
  to prevent pump cavitation; (4) crude oil discharge — controls flow from
  the platform to the onshore pipeline network. Oil treatment occurs after
  the low-pressure separation stage; the crude is dehydrated using a bulk
  treater or electrostatic coalescers.
concept-tags: [oil treatment, bulk treater, dry oil tank, main pump, produced water valve, oil out valve, pump recirculation, crude oil discharge]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-10 (drawing
      number E1485, printed p. 8-12) — "Figure 8-10. Oil Treatment System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig10-oil-treatment-system.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 95 / printed 8-12) at 300 dpi, bulk treater, dry oil tank, main pump, all 4 numbered valve stations, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–④ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Bulk Treater Produced Water ... 4. Crude Oil Discharge
  Valve, printed pp. 8-11 – 8-12) and Tables 8-18 through 8-21 — per Style
  Guide §6.2 these stay as the source drew them, not renumbered. This is the
  "Oil Treatment" zoom-in on `ogas-cmp-offshore-topsides-process-flow`
  (Figure 8-1). Companion hardware photo: `ogas-cmp-667-hp-control-valve`
  (Figure 8-11, valve station 3), immediately following in the source. The
  bulk treater is one of two oil-treatment methods this chapter covers — the
  electrostatic-coalescer alternative (Figure 8-12) is out of scope for this
  batch (not in the requested figure list).
```

```yaml
id: ogas-cmp-667-hp-control-valve
teaches: >
  Representative hardware for the dry oil pump recirculation valve (valve
  station 3 in Figure 8-10, Table 8-20): a Fisher 667 high-pressure trim
  (HPT) control valve, NPS 2-4, ASME CL1500, with Cavitrol III 3- or 4-stage
  trim. This valve recycles flow around the main discharge pump to prevent
  pump cavitation and experiences high pressure drops with the potential for
  damaging cavitation — a globe valve with anti-cavitation trim is typically
  used.
concept-tags: [dry oil pump recirculation, 667 actuator, HPT valve, Cavitrol III multi-stage trim, anti-cavitation, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-11 (drawing
      number W9050, printed p. 8-12) — "Figure 8-11. 667 HP Control Valve."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig11-667-hp-control-valve.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 95 / printed 8-12) at 300 dpi, full valve photo (667 spring-and-diaphragm actuator, yoke, bonnet, body, flanged inlet/outlet) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Pairs with Table 8-20 "Dry Oil Pump Recirculation Valve" (NPS 2-4 HPT,
  ASME CL1500, Cavitrol III 3- or 4-stage trim) — that table is not
  separately catalogued here (subject-matter index catalogues figures, not
  tables). Immediately follows `ogas-cmp-oil-treatment-system-diagram`
  (Figure 8-10) in the source, on the same page. The "667" here names the
  Fisher 657/667-family actuator visible atop the valve body (spring-and-
  diaphragm, direct/reverse-acting per the 14101 ch3 actuator content), not
  a distinct product line from what 14101 ch3 already teaches.
```

### Chapter 8 — Gas Compression (printed p. 8-13)

```yaml
id: ogas-cmp-low-pressure-compression-system-diagram
teaches: >
  Low pressure compression process diagram: a compressor (turbine-driven,
  shown with its driver symbol) draws suction from the LP compression
  suction scrubber vessel and discharges through a cooler into the LP
  compression discharge scrubber vessel. Four numbered control valves mark
  the control points: (1) suction scrubber level control; (2) discharge
  scrubber level control; (3) compressor anti-surge — recycles discharge
  flow back to the suction scrubber to protect the compressor from surge
  damage; (4) discharge cooling control — controls seawater cooling flow at
  the compressor discharge. After separation, produced gas is compressed,
  dried, potentially treated, and sent back into the formation or onshore.
concept-tags: [low pressure compression, suction scrubber, discharge scrubber, anti-surge valve, discharge cooling, compressor recycle]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-13 (drawing
      number E1494, printed p. 8-13) — "Figure 8-13. Low Pressure
      Compression System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig13-low-pressure-compression-system.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 96 / printed 8-13) at 300 dpi, compressor, suction and discharge scrubber vessels, all 4 numbered valve stations, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–④ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Low Pressure Compression Suction Scrubber Level Control
  Valve ... 4. Low Pressure Discharge Cooling Control Valve, printed pp.
  8-13 – 8-14) and Tables 8-24 through 8-27 — per Style Guide §6.2 these
  stay as the source drew them, not renumbered. Figure 8-12 ("Electrostatic
  Coalescer Oil Treatment System"), on the same printed page immediately
  before this figure, was seen while locating Figure 8-13 but was NOT
  confirmed or catalogued — it is not in this batch's requested figure list.
  A future batch should catalogue Figure 8-12 rather than treating this
  batch as having closed out page 8-13 entirely.
```

### Chapter 8 — Oil Treatment: Electrostatic Coalescer alternative (printed p. 8-13)

```yaml
id: ogas-cmp-electrostatic-coalescer-oil-treatment
teaches: >
  Electrostatic coalescer oil treatment system — the alternative to the
  bulk-treater method (`ogas-cmp-oil-treatment-system-diagram`, Figure 8-10)
  for dehydrating crude oil after low-pressure separation. Two numbered
  control valves: (1) electrostatic treater oil out — controls oil flow from
  the coalescer to cargo storage, typically a globe valve; (2) electrostatic
  treater produced water — controls the produced-water level in the
  coalescer, which may need anti-cavitation trim (Cavitrol III 1-stage)
  depending on the pressure drop.
concept-tags: [oil treatment, electrostatic coalescer, oil out valve, produced water valve, cargo storage, anti-cavitation trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-12 (drawing
      number E1486, printed p. 8-13) — "Figure 8-12. Electrostatic Coalescer
      Oil Treatment System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig12-electrostatic-coalescer-oil-treatment-system.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 96 / printed 8-13) at 200 dpi, full block diagram (both numbered valve stations, ELECTROSTATIC COALESCER vessel) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  This is the figure the second batch's `ogas-cmp-oil-treatment-system-diagram`
  note flagged as "out of scope for this batch" — picked up here as the
  first item of the third batch. The bulk treater (Figure 8-10) and the
  electrostatic coalescer (this figure) are the chapter's two oil-treatment
  methods; the source text notes crude "is dehydrated using a bulk treater
  or electrostatic coalescers" with no stated preference between them.
```

### Chapter 8 — High Pressure Compression (printed pp. 8-14 – 8-19)

```yaml
id: ogas-cmp-high-pressure-compression-train
teaches: >
  High pressure compression, four stages, built as two parallel identical
  trains (redundant/parallel units) — gas from low pressure compression (if
  present) combines with gas from the test and high pressure separators
  before this stage. Each of the four stages repeats the same three-valve
  pattern the low pressure compression diagram uses (Figure 8-13): a
  compressor draws suction from a scrubber vessel with its own
  level-control valve, discharges through a cooler with a
  temperature-control valve, and recycles through an anti-surge valve back
  to the upstream scrubber. Twelve numbered control valves per train (three
  per stage × four stages) mark every control point; a DEHYD offtake after
  the second stage of each train feeds gas dehydration (Figure 8-16), and
  the second train's final discharge is routed "TO TURRET FOR INJECTION" —
  an FPSO-specific detail (fluid imported/exported through a turret
  mooring).
concept-tags: [high pressure compression, four-stage compression, suction scrubber level control, discharge cooler temperature control, compressor anti-surge, redundant trains, turret injection, dehydration offtake]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-14 (drawing
      number E1495, printed p. 8-15) — "Figure 8-14. High Pressure
      Compression Train, Four stages."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig14-high-pressure-compression-train-four-stages.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 98 / printed 8-15) at 200 dpi, both parallel trains, all 12 numbered valve stations on the upper train, DEHYD offtakes, TO TURRET FOR INJECTION label, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑫ (labelled only on the upper train; the lower
  train repeats the identical pattern unlabelled) are the source's own
  valve-station key, cross-referenced against the surrounding text's
  numbered subsections (1. First Stage Compression Suction Scrubber Level
  Control ... 12. Fourth Stage Compressor Antisurge and/or Recycle, printed
  pp. 8-16 – 8-19) and Tables 8-28 through 8-42 — per Style Guide §6.2 these
  stay as the source drew them, not renumbered. This is the "High Pressure
  Compression" zoom-in on `ogas-cmp-offshore-topsides-process-flow` (Figure
  8-1) and the downstream stage from
  `ogas-cmp-low-pressure-compression-system-diagram` (Figure 8-13) — same
  three-valve-per-stage shape, repeated four times per train instead of
  once.
```

```yaml
id: ogas-cmp-ez-control-valve-sectional
teaches: >
  Representative hardware for the small globe/ball valve duty called out
  repeatedly across the compression-train suction-scrubber level-control
  valves (e.g. Table 8-28 "First Stage Compression Suction Scrubber Level
  Control Valve": "NPS 1-2 EZ/Vee-Ball V150/V300") — a labelled cutaway of a
  Fisher EZ globe valve: bonnet, packing/stem assembly, cage, and flow-path
  arrows through the body.
concept-tags: [EZ valve, globe valve, cutaway, suction scrubber level control, small valve duty, product cutaway]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-15 (drawing
      number W7027-3, printed p. 8-16) — "Figure 8-15. EZ Control Valve
      Sectional."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig15-ez-control-valve-sectional.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 99 / printed 8-16) at 200 dpi, full valve body cutaway (bonnet, stem, cage, flow arrows) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Not tied to a single numbered valve station — the source places it as
  general representative hardware for the "small globe or ball valves" the
  first-stage (and, by the repeated pattern, every stage's) suction-scrubber
  level-control text calls for, immediately following Table 8-27 and the
  "High Pressure Compression" section header. Positioned in the source
  between `ogas-cmp-high-pressure-compression-train` (Figure 8-14, printed
  p. 8-15) and the stage-by-stage tables that follow it.
```

### Chapter 8 — Gas Treatment: Gas Dehydration (printed p. 8-20)

```yaml
id: ogas-cmp-teg-gas-dehydration-unit
teaches: >
  TEG (tri-ethylene glycol) gas dehydration unit — positioned midway through
  high pressure gas compression, this removes remaining water from the gas
  stream before it proceeds to gas treatment. Three numbered control
  valves: (1) lean glycol to glycol contactor — controls lean-glycol flow
  from the glycol regeneration unit into the top of the contactor (may be
  absent if a variable-speed pump is used); (2) glycol contactor level
  control — controls the glycol-water interface level in the contactor,
  typically needing anti-cavitation trim (Cavitrol III 2-stage) for the
  pressure drop; (3) gas dehydration inlet separator level control —
  controls the glycol-water interface level in the inlet separator upstream
  of the contactor, same anti-cavitation trim consideration.
concept-tags: [gas dehydration, TEG, triethylene glycol, glycol contactor, lean glycol, interface level control, anti-cavitation trim, Cavitrol III]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-16 (drawing
      number E1496, printed p. 8-20) — "Figure 8-16. TEG Gas Dehydration
      Unit."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig16-teg-gas-dehydration-unit.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 103 / printed 8-20) at 200 dpi, both vessels (inlet separator and glycol contactor), all 3 numbered valve stations, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–③ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Lean Glycol to Glycol Contactor Control Valve ... 3.
  Glycol Contactor Level Control Valve, printed p. 8-20) and Tables 8-44
  through 8-46 — per Style Guide §6.2 these stay as the source drew them,
  not renumbered. This is the "Gas Dehydration" subsection of the chapter's
  "Gas Treatment" section (which follows High Pressure Compression); the
  text points to Chapter 9 for additional dehydration detail, out of scope
  here.
```

### Chapter 8 — Gas Treatment: Amine Treatment (printed p. 8-21)

```yaml
id: ogas-cmp-notchflo-dst-trim
teaches: >
  Representative NotchFlo DST (Dirty Service Trim) hardware: a labelled
  cutaway of the staged, slotted trim cage — a severe-service anti-cavitation
  / anti-plugging trim option named in the trim-selection tables for both the
  glycol contactor level control valve (Table 8-46, "Cavitrol III 2-stage
  trim or NotchFlo 4-stage trim") and the rich amine letdown control valve
  (Table 8-47, "Whisper Trim I, Whisper Trim III, or NotchFlo DST trim").
concept-tags: [NotchFlo DST, trim, anti-cavitation, staged trim cage, glycol contactor, rich amine letdown, severe service]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-17 (drawing
      number W8538-1, printed p. 8-21) — "Figure 8-17. Notchflo DST Trim."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig17-notchflo-dst-trim.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 104 / printed 8-21) at 200 dpi, full trim cutaway + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the source directly beside Table 8-46 (Glycol Contactor
  Level Control Valve) and ahead of the "Gas Treatment" / amine-treatment
  section and Table 8-47 (Rich Amine Letdown Control Valve) — it illustrates
  a trim option shared by both valves rather than being tied to one numbered
  station on `ogas-cmp-teg-gas-dehydration-unit` or
  `ogas-cmp-amine-treatment-unit`.
```

```yaml
id: ogas-cmp-amine-treatment-unit
teaches: >
  Amine treatment unit — the first step in natural-gas treatment, removing
  sour-gas components via amine absorption. Twelve numbered control valves
  mark the process: (1) rich amine letdown — controls liquid level in the
  bottom of the contactor, letting down pressure to drive off entrained
  gases; (2) flash drum lean solvent; (3) flash drum water; (4) flash drum
  level; (5) flash drum pressure (to flash gas); (6) flash gas to flare; (7)
  lean amine booster pump recirculation — bypasses the booster pump to
  prevent cavitation; (8) lean amine main pump recirculation — same duty for
  the main pump; (9) lean amine to contactor — controls the lean-amine/gas
  ratio entering the top of the contactor; (10) lean gas to flare; (11) lean
  gas separator level control; (12) lean gas separator sour-water letdown.
  The contactor, flash tank, rich/lean amine exchanger, regeneration vessel,
  and the lean amine main/booster pumps are the process equipment tying the
  twelve valves together.
concept-tags: [amine treatment, sour gas removal, contactor, flash tank, rich lean amine exchanger, regeneration, lean amine pump recirculation, flare]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-18 (drawing
      number E1497, printed p. 8-21) — "Figure 8-18. Amine Treatment Unit."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig18-amine-treatment-unit.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 104 / printed 8-21) at 200 dpi, contactor, flash tank, rich/lean amine exchanger, regeneration vessel, both pumps, all 12 numbered valve stations, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑫ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Rich Amine Letdown Control Valve ... 12. Lean Gas
  Separator Sour Water Letdown Control Valve, printed pp. 8-21 – 8-23) and
  Tables 8-47 through 8-58 — per Style Guide §6.2 these stay as the source
  drew them, not renumbered. This is the "Amine Treatment" zoom-in on
  `ogas-cmp-offshore-topsides-process-flow` (Figure 8-1)'s gas-treatment
  path, downstream of `ogas-cmp-teg-gas-dehydration-unit` (Figure 8-16) per
  the chapter's own "Gas Treatment" section grouping (Gas Dehydration, then
  amine treatment). Figure 8-19 ("Tail Gas Treatment System," printed p.
  8-24) was seen immediately after this batch's scope while confirming item
  12's text but was NOT confirmed or catalogued — out of this batch's
  requested figure list; a future batch should catalogue it.
```

### Chapter 8 — Gas Treatment: Amine Treatment, Tail Gas Treatment (printed p. 8-25)

```yaml
id: ogas-cmp-tail-gas-treatment-system
teaches: >
  Tail gas treatment process diagram — the final step after amine treatment,
  using a different amine derivative (e.g. MDEA) to further scrub tail gas
  before sulfur recovery. Eight numbered control valves visible in the
  figure mark the process's control points: (1) rich amine recirculation to
  acid gas enrichment — bypasses the rich amine pump to prevent cavitation;
  (2) regeneration lean amine pump recirculation — same duty for the
  regeneration tower's pump; (3) rich amine pump discharge to regeneration;
  (4) free acid gas drum level control; (5) lean amine flow control to the
  acid gas enrichment absorber; (6) tail gas quench water control; (7) lean
  amine to tail gas absorber; (8) tail gas treater semi-lean amine letdown.
  A ninth control point, the tail gas knockout drum level control valve
  (item 9 in the surrounding text), is described but not drawn with its own
  numbered station in this figure.
concept-tags: [tail gas treatment, MDEA, acid gas enrichment, amine regeneration, rich amine recirculation, lean amine flow control, tail gas quench, sulfur recovery]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-19 (drawing
      number E1498, printed p. 8-25) — "Figure 8-19. Tail Gas Treatment
      System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig19-tail-gas-treatment-system.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 108 / printed 8-25) at 200 dpi, full block diagram (all 8 numbered valve stations, acid gas enrichment absorber, regeneration, rich amine flash drum, free acid gas drum, tail gas quench/absorber/KO drum vessels), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑧ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Rich Amine Recirculation to Acid Gas Enrichment Control
  Valve ... 9. Tail Gas Knockout Drum Level Control Valve, printed pp. 8-24
  – 8-27) and Tables 8-59 through 8-67 — per Style Guide §6.2 these stay as
  the source drew them, not renumbered. This is the "Tail Gas Treatment"
  continuation of `ogas-cmp-amine-treatment-unit` (Figure 8-18) — the
  chapter's own "Gas Treatment" section runs Gas Dehydration → Amine
  Treatment → Tail Gas Treatment as one sequence. Item 9 (Tail Gas Knockout
  Drum Level Control Valve, Table 8-67) has no drawn numbered station
  visible in the figure itself — confirmed by direct visual inspection of
  the rendered page, not just the text — so this record's `teaches` field
  notes it as text-only, matching how the third batch's
  `ogas-cmp-high-pressure-compression-train` handled its own unlabelled
  lower train.
```

### Chapter 8 — Water Injection (printed pp. 8-27 – 8-29)

```yaml
id: ogas-cmp-water-injection-system-fpso
teaches: >
  Water injection system, FPSO unit: produced water (or seawater) from the
  water injection surge vessel is boosted by a booster pump and a main pump
  in series, then injected into the reservoir. Four numbered control
  valves: (1) water injection surge vessel level control — controls the
  level of produced water in the surge vessel; (2) booster pump
  recirculation — bypasses the booster pump (not present on every unit) to
  prevent cavitation; (3) water injection pump recirculation — same duty for
  the main injection pump, exposed to extremely high pressure differentials
  depending on reservoir characteristics; (4) water injection discharge
  pressure control — controls the pressure of water injected into the
  reservoir (not present on every unit).
concept-tags: [water injection, FPSO, surge vessel level control, booster pump recirculation, main pump, discharge pressure control, high pressure differential, reservoir injection]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-20 (drawing
      number E1499, printed p. 8-27) — "Figure 8-20. Water Injection System,
      FPSO Unit."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig20-water-injection-system-fpso.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 110 / printed 8-27) at 200 dpi, surge vessel, booster and main pumps, all 4 numbered valve stations, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–④ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Water Injection Surge Vessel Level Control Valve ... 4.
  Water Injection Discharge Pressure Control Valve, printed pp. 8-27 – 8-29)
  and Tables 8-68 through 8-71 — per Style Guide §6.2 these stay as the
  source drew them, not renumbered. This is the "Water Injection" zoom-in on
  `ogas-cmp-offshore-topsides-process-flow` (Figure 8-1)'s water-treatment
  path. Companion hardware/trim photos: `ogas-cmp-dst-trim` (Figure 8-21,
  associated with valve station 2/3's anti-cavitation trim option) and
  `ogas-cmp-cavitrol-iv-trim` (Figure 8-22, associated with valve station
  4's trim option), both following in the source.
```

```yaml
id: ogas-cmp-dst-trim
teaches: >
  Representative DST (Dirty Service Trim) hardware: a disassembled
  product photo showing the trim's outer sleeve/cage body beside its
  internal staged stem-and-plug assembly. Named as one of the anti-cavitation
  trim options for the water injection booster pump recirculation valve
  (Table 8-69 text, "appropriate level of anti-cavitation trim") and the
  water injection pump recirculation valve (Table 8-70, "Cavitrol III trim,
  Cavitrol IV trim, or NotchFlo DST or DST trim") — high-pressure-differential
  duties where severe-service trim is needed.
concept-tags: [DST trim, dirty service trim, anti-cavitation, water injection pump recirculation, booster pump recirculation, product photo, disassembled trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-21 (drawing
      number W6787, printed p. 8-28) — "Figure 8-21. DST Trim."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig21-dst-trim.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 111 / printed 8-28) at 300 dpi, full disassembled trim photo (outer sleeve + internal staged stem assembly) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A product/hardware photo (disassembled), not a labelled cutaway — same
  presentation style as `ogas-cmp-cavitrol-iii-trim-cage` (Figure 8-7).
  Distinct from `ogas-cmp-notchflo-dst-trim` (Figure 8-17, drawing
  W8538-1) — this batch's figure is captioned plainly "DST Trim" (drawing
  W6787), a different photographed unit, though both are the same
  severe-service trim family named together in trim-selection tables
  throughout the chapter (e.g. Table 8-70 "Cavitrol III trim, Cavitrol IV
  trim, or NotchFlo DST or DST trim"). Positioned in the source immediately
  after item 2's text (Booster Pump Recirculation Valve) on the same page.
```

```yaml
id: ogas-cmp-cavitrol-iv-trim
teaches: >
  Labelled cutaway of a high-pressure angle valve with Cavitrol IV
  multi-stage anti-cavitation trim: actuator/bonnet assembly atop a body
  cutaway showing the stacked staged-cage trim elements and the
  angled inlet/outlet flow path. Named as a trim option for the water
  injection discharge pressure control valve (Table 8-71, "Cavitrol III
  trim, Cavitrol IV trim, NotchFlo DST or DST trim") — the highest
  pressure-differential duty in the water injection system (2,000 - 8,000
  psig inlet).
concept-tags: [Cavitrol IV, multi-stage trim, anti-cavitation, angle valve, water injection discharge pressure control, high pressure differential, labelled cutaway]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 8 "Offshore Oil and Gas Production," Figure 8-22 (drawing
      number W9983-2, printed p. 8-29) — "Figure 8-22. Cavitrol IV Trim."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch8-fig22-cavitrol-iv-trim.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 112 / printed 8-29) at 300 dpi, full valve/actuator cutaway (actuator, bonnet, staged trim stack, angled body) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A labelled cutaway (3D rendered illustration, not a photograph) — same
  presentation style as `ogas-cmp-ewt-metal-seat-whisper-trim-i-cutaway`
  (Figure 8-8) and ch6's Cavitrol IV cutaway
  (`ch6-fig12-cavitrol-IV-trim-cutaway`, if catalogued in that chapter's own
  index — not cross-checked here). This is the last figure in the chapter's
  Water Injection section and, per the running figure sequence, the last
  figure in Chapter 8 as a whole — no further figures were seen past this
  one on printed p. 8-29 or beyond while confirming this batch.
```

---

## Open items

- **First batch (Figures 8-1 through 8-6):** all six figures confirmed
  against the real page text and image before extraction; none were skipped
  or fabricated. Figure numbering ran continuously 8-1 through 8-6 (PDF
  pages 85, 88, 89 [×2], 90 [×2]; printed pp. 8-2, 8-5, 8-6 [×2], 8-7 [×2]) —
  no gaps within that batch's range.
- **Second batch (Figures 8-7, 8-8, 8-9, 8-10, 8-11, 8-13):** all six
  requested figures confirmed against the real page text and page image
  (rendered at 300 dpi) before extraction; none were skipped or fabricated.
  PDF pages 91 (printed 8-8), 92 (8-9), 93 (8-10), 95 (8-12, ×2), 96 (8-13).
  **Figure 8-12 ("Electrostatic Coalescer Oil Treatment System," PDF p. 96,
  printed p. 8-13, drawing E1486) was seen but deliberately NOT catalogued**
  — it was not in this batch's requested figure list. Figure 8-14 ("High
  Pressure Compression Train, Four Stages") and Figure 8-15 ("EZ Control
  Valve Sectional") were seen further ahead in the page-text scan while
  locating this batch's figures but were not read, confirmed, or catalogued
  at that time. **All three, plus three more, were picked up in the third
  batch below.**
- **Third batch (Figures 8-12, 8-14, 8-15, 8-16, 8-17, 8-18):** all six
  requested figures confirmed against the real page text and a 200 dpi
  page-image render before extraction; none were skipped or fabricated. PDF
  pages 96 (printed 8-13), 98 (8-15), 99 (8-16), 103 (8-20), 104 (8-21, ×2).
  Figure 8-13's page (PDF 96, printed 8-13) also carries Figure 8-12 in the
  same left column — confirmed both belong on that page, not adjacent pages.
  **Figure 8-19 ("Tail Gas Treatment System," printed p. 8-24) was seen but
  deliberately NOT catalogued** — it was not in this batch's requested
  figure list; its drawing number was not confirmed. A future batch
  continuing this chapter should pick it up at Figure 8-19, not re-scan from
  Figure 8-12.
- **Fourth batch (Figures 8-19, 8-20, 8-21, 8-22):** all four requested
  figures confirmed against the real page text and a 200/300 dpi
  page-image render before extraction; none were skipped or fabricated. PDF
  pages 108 (printed 8-25), 110 (8-27), 111 (8-28), 112 (8-29). Visually
  confirmed Figure 8-19 draws only 8 of its 9 described valve stations (item
  9, Tail Gas Knockout Drum Level Control Valve, has text and a table but
  no drawn numbered station in the figure) — noted in that record's
  `teaches` field rather than silently treated as a 9-station figure.
  Visually confirmed Chapter 9 begins immediately after Figure 8-22 (PDF p.
  113, printed p. 9-2) with its own Figure 9-1. **Chapter 8 is closed out —
  Figures 8-1 through 8-22, no further figures remain to catalogue.**
- All twenty-two records in this file (all four batches) are `used-by: []`
  — this is a proactive, use-driven-ahead catalog per `Source Library.md`;
  no course currently references them.
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
