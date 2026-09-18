---
title: Component Index — Oil & Gas Sourcebook ch12
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch12 — Natural Gas Storage
updated: 2026-09-08
status: two batches complete — Figures 12-1 through 12-6 (first pass) plus Figures 12-7 and 12-8 (second pass, closing the gap the first pass flagged). All eight figures confirmed and catalogued; none skipped.
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 12

**Chapter 12 — "Natural Gas Storage."** Standing library-cataloging pass, NOT
tied to any course — built ahead of any course actually needing these
figures, per `Source Library.md`'s "two ways a component index gets
triggered." Matches the batch shape of the ch1/ch2/ch3/ch5/ch6/ch7/ch8/ch9/
ch10/ch11 passes of this same chapter series. All eight figures in this
chapter's full page range (12-1 through 12-8, across two batches) confirmed
against the real page text and a 300 dpi page-image render before
extraction — none were skipped or fabricated.

All from `20 - Source Library/Industry Specific Sourcebooks/Control Valve
Sourcebook - Oil & Gas.pdf`. Every record's `used-by` is `[]` — none are
placed on a slide yet; a future course resolves against these entries
instead of triggering reactive cataloging.

Record shape matches `Component Index — 14101 ch3.md` (and the rest of this
chapter series): `id` · `teaches` · `concept-tags` · `status` · `source`
(`doc` + `locator`) · `delivery` · `used-by` · `notes`.

## Precedence

The Oil & Gas Sourcebook is itself a **current** document (© 2013 Fisher,
held in the Source Library's Industry Handbooks holdings — see `Industry
Handbooks.md`), so every record below is `status: current`. No archive or
legacy material was consulted for this batch.

## Page-numbering note (specific to this chapter)

Chapter 12's own printed folios were confirmed directly against the
rendered pages. PDF p. 143 (the chapter-title page, carrying Chapter 12's
intro text, the base-gas/working-gas discussion, and the "Natural Gas
Storage Process" section opening) has **no visible footer folio** — the
standard convention for a chapter's opening page in this document, matching
the ch9/ch10/ch11 openers; by that convention it is printed **p. 12-1**.
The following pages carry visible folios, each individually confirmed
against rendered page images and per-page text extraction: PDF p. 144 =
printed "12-2" (Figure 12-1), PDF p. 145 = printed "12-3" (Figure 12-2 +
Tables 12-1 through 12-4), PDF p. 146 = printed "12-4" (Figure 12-4 at the
top of the page and Figure 12-3 lower on the same page, in that top-to-
bottom layout order — Figure 12-3's own number is lower than Figure 12-4's
because Figure 12-3 illustrates item 1 of the "Water Injection and Brine
Disposal" review while Figure 12-4 is the brine-disposal *process* diagram
placed above it on the page; both confirmed by direct page-image
inspection, not just running-text order), PDF p. 147 = printed "12-5"
(Figure 12-5 in the left column, Figure 12-6 in the right column, same
page).

Chapter 12 closes at PDF p. 150 (printed p. 12-8); Chapter 13 ("LNG
Liquefaction") begins immediately after at PDF p. 150 (mid-page) —
confirmed by direct inspection, flagged here so a future pass has the
chapter boundary without re-deriving it.

## Components

### Chapter 12 — Natural Gas Storage: Introduction (printed p. 12-1, no visible folio)

```yaml
id: ogas-topic-storage-formation-types
kind: topic
teaches: >
  Three formation types are used for underground natural-gas storage, each
  with real tradeoffs the source states directly: depleted (natural gas or
  oil) reservoirs are the most common, reusing existing wells and gas
  transportation infrastructure and offering the largest storage volumes
  of the three. Aquifers are the least common, due to relatively high base
  gas requirements and the formation's inherently low permeability. Salt
  caverns have lower storage capacity than the other two but have grown in
  popularity for their higher relative injection and withdrawal rates;
  naturally occurring salt domes are rarely large enough on their own, so
  nearly all cavern sites require an upfront solution-mining process
  (removing additional salt from the formation to create sufficient
  storage volume) called leaching, which takes six months to three years
  depending on the required cavern size — a real cost/lead-time tradeoff
  against the salt cavern's throughput advantage. Only salt-cavern sites
  need this leaching step; it does not apply to depleted-reservoir or
  aquifer sites, which already have enough storage volume to be
  economically feasible without it.

  All gas in storage at a facility is divided into two categories: base
  gas ("cushion gas") is the volume that must remain in the formation
  permanently to maintain a minimum wellhead pressure; working gas is the
  volume that can actually be extracted in normal operation. Facility size
  varies enormously by this working-gas figure alone — from roughly 0.1 Bcf
  for a smaller peak-load facility to 100 Bcf for a larger base-load one.
concept-tags: [natural gas storage, storage formation types, depleted reservoir, aquifer, salt cavern, base gas, cushion gas, working gas, leaching, solution mining]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 12 "Natural Gas Storage," introductory prose (printed p. 12-1,
      PDF p. 143, no visible footer folio per this chapter's own opening-page
      convention — prose, not figure-anchored).
relatedFigures: [ogas-cmp-underground-storage-process-flow]
relatedTopics: []
used-by: []
notes: >
  Real conceptual foundation for the whole chapter — explains WHY a real
  site has the specific sub-processes `ogas-cmp-underground-storage-process-
  flow`'s own notes already point to (only salt-cavern sites need the
  water-injection/brine-disposal loop), which that figure entry names but
  doesn't explain. The source also says, in this same introductory section,
  "See Chapter nine for more details" regarding glycol dehydration used in
  gas withdrawal/export — not indexed here since Chapter 9 (Natural Gas
  Treatment) hasn't been topic-indexed yet in this pass; a future ch9 pass
  should link back to this chapter's `ogas-topic-bidirectional-cavern-valve-sizing`
  and the withdrawal-separator/glycol-contactor content in
  `ogas-cmp-gas-withdrawal-export-valve-diagram`'s own teaches field.
```

### Chapter 12 — Underground Storage Process (chapter opener figure, printed p. 12-2)

```yaml
id: ogas-cmp-underground-storage-process-flow
teaches: >
  Orienting block-diagram overview of an underground natural-gas storage
  facility. Four sub-processes flow into/out of a shared underground
  reservoir: water injection and brine disposal (salt-cavern sites only,
  shown in a dashed "SALT CAVERNS ONLY" box — feedwater in, brine out) and
  gas injection and gas withdrawal/export (import gas in, export gas out).
  This is the chapter's orienting figure — the same block-diagram-then-
  zoom-in relationship the onshore (ch7 Fig 7-1), offshore (ch8 Fig 8-1),
  natural-gas-treatment (ch9 Fig 9-1), fractionation (ch11 Fig 11-1), and
  oil/gas-transportation (ch10 Figs 10-1/10-2) chapters' own opening figures
  have to their sections. Which sub-processes a real site has depends on
  its storage-formation type — depleted reservoir, aquifer, or salt cavern
  (only salt-cavern sites need the water-injection/brine-disposal loop to
  leach storage volume).
concept-tags: [natural gas storage, underground storage, salt cavern, brine disposal, water injection, gas injection, gas withdrawal, base gas, working gas, process flow, block diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 12 "Natural Gas Storage," Figure 12-1 (drawing number E1524,
      printed p. 12-2) — "Figure 12-1. Underground Storage Process."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch12-fig1-underground-storage-process-block-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 144, printed p. 12-2) at 300 dpi, full block diagram (dashed salt-caverns-only sub-box, four sub-processes, shared underground reservoir) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Chapter opener. Two sub-processes get their own zoom-in valve diagrams
  further in the chapter: `ogas-cmp-water-injection-valve-diagram` (Figure
  12-2) and `ogas-cmp-brine-disposal-valve-diagram` (Figure 12-4) cover the
  salt-caverns-only loop; `ogas-cmp-gas-injection-valve-diagram` (Figure
  12-6) covers the gas-injection sub-process. No zoom-in diagram is given
  for gas withdrawal/export in this batch's figure range (Figure 12-8,
  "Gas Withdrawal & Export System Valve Diagram," exists in the source at
  printed p. 12-6 but was not part of this batch's requested figure list —
  out of scope here, flagged for a future batch if this chapter is
  revisited).
```

### Chapter 12 — Water Injection and Brine Disposal (printed p. 12-3)

```yaml
id: ogas-cmp-water-injection-valve-diagram
teaches: >
  Water injection system valve diagram — the zoom-in on Figure 12-1's
  "WATER INJECTION" block (salt-cavern sites only). Feedwater passes through
  valve 1 into a feedwater tank, is pumped, and passes through valves 2/3/4
  (a min-flow recirculation valve in a bypass loop around the pump, and
  parallel max/min discharge-flow control valves) before leaving as leaching
  water to the cavern. Cross-referenced one-to-one against the surrounding
  "Water Injection and Brine Disposal" application-review text: 1. Water
  Injection System Control, 2. Water Injection Pump Minimum Flow
  Recirculation Control, 3. Feedwater Injection Pump Discharge Minimum Flow
  Control, 4. Feedwater Injection Pump Discharge Maximum Flow Control
  (Tables 12-1 through 12-4).
concept-tags: [water injection, feedwater tank, brine leaching, min flow recirculation, cavitrol trim, numbered valve stations, salt cavern]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 12 "Natural Gas Storage," Figure 12-2 (drawing number E1525,
      printed p. 12-3) — "Figure 12-2. Water Injection System Valve
      Diagram."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch12-fig2-water-injection-system-valve-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 145, printed p. 12-3) at 300 dpi, full schematic (all 4 numbered valve stations, feedwater tank, pump), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–④ are the source's own valve-station key,
  per Style Guide §6.2 these stay as the source drew them, not renumbered.
  This is the "Water Injection" zoom-in on
  `ogas-cmp-underground-storage-process-flow` (Figure 12-1), paired with
  `ogas-cmp-brine-disposal-valve-diagram` (Figure 12-4) as the two halves
  of the salt-caverns-only leaching loop.
```

### Chapter 12 — Water Injection and Brine Disposal: representative hardware, item 1 (printed p. 12-4)

```yaml
id: ogas-cmp-vee-ball-v200-2052-actuator-dvc6200
teaches: >
  Labelled product photo of a Fisher Vee-Ball V200 rotary control valve,
  NPS 3, fitted with a 2052 spring-and-diaphragm actuator, size 1, and a
  FIELDVUE DVC6200 digital valve controller. Representative hardware for
  item 1, "Water Injection System Control" (Table 12-1: "Valve Type and
  Pressure Class — NPS 6-8 Vee-Ball V150, ASME CL150") — a rotary solution
  for the fresh-well-water feed, where the surrounding review text notes
  entrained solids are possible but not common.
concept-tags: [Vee-Ball V200, 2052 actuator, DVC6200, rotary valve, water injection, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 12 "Natural Gas Storage," Figure 12-3 (drawing number X0188,
      printed p. 12-4) — "Figure 12-3. Vee-Ball V200 NPS 3 with a 2052
      Size 1 Actuator and DVC6200."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch12-fig3-vee-ball-v200-2052-actuator-dvc6200.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 146, printed p. 12-4) at 300 dpi, full product photo (Vee-Ball rotary body, 2052 actuator, DVC6200) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Honest-linkage caveat, same shape as ch11's `ogas-cmp-nps4-eh-hp-657-
  actuator-dvc6010` and `ogas-cmp-vee-ball-v150-2052-actuator-dvc6200`: the
  source's own text does NOT caption-link this photo to a table by name —
  it sits directly beside the item-1 "Water Injection System Control" text
  and Table 12-5 ("Brine Storage Tank Level Control Valve," a Vee-Ball
  V250/V500 spec) on the printed page, and the family match (Vee-Ball
  rotary, size-1 2052 actuator) is closest to Table 12-1's Vee-Ball V150
  spec for item 1 of the *Water Injection* review, not Table 12-5's item 1
  of the *Brine Disposal* review immediately below it on the same page —
  reported as a family match, not a confirmed positional caption. The task
  hint string for this figure ("...and particulate may be present in some
  installa- Size 1 Actuator and DVC6200") is a garbled OCR/text-extraction
  concatenation of this figure's real two-line caption with unrelated
  running text from an adjacent column (the item-2 Brine Injection Pump
  paragraph) — confirmed against the rendered page image; the real caption
  is exactly "Vee-Ball V200 NPS 3 with a 2052 Size 1 Actuator and DVC6200,"
  no other text.
```

### Chapter 12 — Water Injection and Brine Disposal: Brine Disposal System (printed p. 12-4)

```yaml
id: ogas-cmp-brine-disposal-valve-diagram
teaches: >
  Brine disposal system valve diagram — the zoom-in on Figure 12-1's
  "BRINE DISPOSAL" block (salt-cavern sites only), structurally the return
  path paired with Figure 12-2's water-injection diagram. Raw brine from
  the cavern passes through valve 1 into a hydrocyclone (solids drop out to
  a solids-slurry-disposal line), then into a brine storage tank, is pumped
  through a min-flow recirculation loop (valve 2), and splits across four
  parallel valves (3) to brine disposal wells. Cross-referenced against the
  surrounding "Water Injection and Brine Disposal" application-review text
  items 1–3 (Tables 12-5 through 12-7).
concept-tags: [brine disposal, hydrocyclone, solids slurry, brine storage tank, cavitrol trim, notchflo trim, numbered valve stations, salt cavern]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 12 "Natural Gas Storage," Figure 12-4 (drawing number E1526,
      printed p. 12-4) — "Figure 12-4. Brine Disposal System Valve
      Diagram."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch12-fig4-brine-disposal-system-valve-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 146, printed p. 12-4) at 300 dpi, full schematic (hydrocyclone, solids slurry disposal, brine storage tank, pump, 3 numbered valve stations feeding 4 parallel disposal-well valves), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–③ are the source's own valve-station key
  (valve station 3 fans out to four parallel disposal-well valves, drawn
  without separate numbers of their own — all four are "item 3"), per
  Style Guide §6.2 kept as the source drew them, not renumbered. This is
  the "Brine Disposal" zoom-in on `ogas-cmp-underground-storage-process-
  flow` (Figure 12-1), paired with `ogas-cmp-water-injection-valve-diagram`
  (Figure 12-2). Positioned at the top of the same printed page as
  `ogas-cmp-vee-ball-v200-2052-actuator-dvc6200` (Figure 12-3), which
  illustrates hardware for the *water injection* review directly above it —
  not a component of this brine-disposal diagram itself.
```

### Chapter 12 — Water Injection and Brine Disposal: representative hardware, item 3 (printed p. 12-5)

```yaml
id: ogas-cmp-notchflo-dst-trim-cutaway
teaches: >
  Labelled cutaway product photo of a Fisher globe valve body fitted with
  NotchFlo DST (drilled-stack technology) trim. Representative hardware for
  item 3, "Brine Disposal Flow Control" (Table 12-7: "Trim Type — Equal
  Percentage, Cavitrol III trim or NotchFlo Trim") — the surrounding review
  text recommends NotchFlo Trim specifically when significant solids or
  particulate are present in the brine, which this cutaway illustrates.
concept-tags: [NotchFlo trim, DST trim, drilled-stack technology, cutaway, brine disposal, solids handling, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 12 "Natural Gas Storage," Figure 12-5 (drawing number W8433,
      printed p. 12-5) — "Figure 12-5. NotchFlo DST Trim."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch12-fig5-notchflo-dst-trim-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 147, printed p. 12-5) at 300 dpi, full cutaway product photo (bolted body, drilled-stack trim assembly) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the source directly above Table 12-6 ("Brine Injection
  Pump Min Flow Recirculation Control Valve") and beside the item-3 "Brine
  Disposal Flow Control" text (printed p. 12-5) — same representative-
  hardware pattern as ch8's `ogas-cmp-notchflo-cast-globe-body` /
  `ogas-cmp-dst-trim` and ch11's numbered-valve-station companion photos.
  Trim-type match to Table 12-7 (item 3) is a direct textual match — the
  review text names "NotchFlo Trim" explicitly for this application, not a
  family inference.
```

### Chapter 12 — Gas Injection System (printed p. 12-5)

```yaml
id: ogas-cmp-gas-injection-valve-diagram
teaches: >
  Gas injection system valve diagram — the zoom-in on Figure 12-1's
  "GAS INJECTION" block. Import gas passes through an anti-surge valve (1)
  around a compressor, then through the compressor and out through four
  parallel cavern-injection valves (2) to gas storage. Cross-referenced
  against the surrounding "Gas Injection System" application-review text:
  1. Injection Compressor Anti-surge Control, 2. Cavern Injection Control
  (Tables 12-8 and 12-9).
concept-tags: [gas injection, anti-surge control, compressor, cavern injection, whisper trim, numbered valve stations]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 12 "Natural Gas Storage," Figure 12-6 (drawing number E1527,
      printed p. 12-5) — "Figure 12-6. Gas Injection System Valve
      Diagram."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch12-fig6-gas-injection-system-valve-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 147, printed p. 12-5) at 300 dpi, full schematic (anti-surge valve/compressor loop, 4 parallel cavern-injection valve stations), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–② are the source's own valve-station key
  (valve station 2 fans out to four parallel cavern-injection valves, all
  drawn as "item 2" — same one-number-many-parallel-valves pattern as
  Figure 12-4's item 3), per Style Guide §6.2 kept as the source drew
  them, not renumbered. This is the "Gas Injection" zoom-in on
  `ogas-cmp-underground-storage-process-flow` (Figure 12-1). Chapter 12
  also has a corresponding "Gas Withdrawal & Export" zoom-in (Figure 12-8)
  and a representative-hardware photo (Figure 12-7, "WhisperFlo Trim"),
  both printed p. 12-6 — catalogued below (added in the follow-up batch
  that closed the gap this record originally flagged).
```

### Chapter 12 — Gas Injection System / Gas Withdrawal and Export: bi-directional valve sizing (printed pp. 12-6–12-7)

```yaml
id: ogas-topic-bidirectional-cavern-valve-sizing
kind: topic
teaches: >
  Cavern injection and withdrawal valves are frequently the same physical
  valve run in both directions, not two separate devices — the source
  states this explicitly for both item 2 ("Cavern Injection Control... This
  valve is commonly used for gas withdrawal, as well") and the mirrored
  item 1 ("Cavern Withdrawal Control... This valve is commonly used for
  gas injection as well"). That bi-directional duty creates a real sizing
  tension: injection is a low-ΔP, high-Cv condition, while withdrawal is a
  high-ΔP, low-Cv condition — the same valve has to cover both regimes, so
  a specially characterized cage is commonly required rather than a
  standard linear or equal-percentage trim. When bi-directional use is
  actually required, turndown requirements "can be extreme." This is a
  distinct engineering judgment from ordinary trim selection: the valve
  isn't sized against one duty point, it's sized against two opposing
  duty points on the same trim.
concept-tags: [bidirectional flow, turndown, specially characterized cage, cavern injection, cavern withdrawal, low dP high Cv, high dP low Cv, gas storage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 12 "Natural Gas Storage," "Gas Injection System" item 2 and
      "Gas Withdrawal and Export" item 1 application-review prose (printed
      pp. 12-6–12-7, PDF pp. 147-148) — prose, not figure-anchored.
relatedFigures: [ogas-cmp-gas-injection-valve-diagram, ogas-cmp-gas-withdrawal-export-valve-diagram]
relatedTopics: [ogas-topic-storage-formation-types]
used-by: []
notes: >
  The same tension is stated twice in the source almost verbatim (once
  under Gas Injection's item 2, once under Gas Withdrawal's item 1) —
  confirmed by reading both passages directly rather than assuming one
  restates the other from a shared caption. Neither `ogas-cmp-gas-injection-
  valve-diagram` nor `ogas-cmp-gas-withdrawal-export-valve-diagram`'s own
  `teaches` field mentions this tradeoff; it lives only in the surrounding
  application-review prose, exactly the kind of content the figures-only
  rule structurally could not catch.
```

### Chapter 12 — Gas Injection System / Gas Withdrawal and Export: representative hardware (printed p. 12-6)

```yaml
id: ogas-cmp-whisperflo-trim-cutaway
teaches: >
  Labelled cutaway product photo of WhisperFlo noise-attenuation trim — a
  stack of contoured, drilled flow-passage disks that break gas flow into
  many small streams to reduce aerodynamic noise. Positioned on the printed
  page directly beneath Table 12-8 ("Injection Compressor Anti-surge
  Control Valve") and Table 12-9 ("Cavern Injection Control Valve") — both
  of which list "Trim Type: Whisper III Trim or WhisperFlo Trim" — and
  directly above the "Gas Withdrawal and Export" section heading, whose
  own item 1 (Table 12-10, "Cavern Withdrawal Control Valve") lists the
  identical trim-type value. Representative hardware for the WhisperFlo /
  Whisper III trim family used across both the Gas Injection System valve
  stations (Figure 12-6, items 1–2) and the Gas Withdrawal & Export System
  valve stations (Figure 12-8, item 1 and others) — not a single
  positionally-linked item for one table.
concept-tags: [WhisperFlo trim, Whisper III trim, noise attenuation, aerodynamic noise, drilled trim, gas injection, gas withdrawal, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 12 "Natural Gas Storage," Figure 12-7 (drawing number W7065,
      printed p. 12-6) — "Figure 12-7. WhisperFlo Trim."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch12-fig7-whisperflo-trim.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 148, printed p. 12-6) at 300 dpi, full cutaway product photo (contoured drilled trim disk stack) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Honest-linkage caveat, same shape as `ogas-cmp-vee-ball-v200-2052-
  actuator-dvc6200` (this same chapter): the source's own text does NOT
  caption-link this photo to one specific table — it sits on the page
  spanning both the tail end of the Gas Injection System review (Tables
  12-8/12-9) and the opening of the Gas Withdrawal and Export review
  (Table 12-10), all three of which independently name "Whisper III Trim
  or WhisperFlo Trim" as their trim type. Reported as a trim-family match
  across the surrounding tables, not a confirmed single-item caption. Not
  catalogued in the earlier Figures-12-1-through-12-6 batch because it was
  outside that batch's requested figure list — this closes that flagged
  gap.
```

### Chapter 12 — Gas Withdrawal and Export (printed p. 12-6)

```yaml
id: ogas-cmp-gas-withdrawal-export-valve-diagram
teaches: >
  Gas withdrawal and export system valve diagram — the zoom-in on Figure
  12-1's "GAS WITHDRAWAL" block. Raw gas from the cavern passes through
  four parallel withdrawal valves (1) into a withdrawal separator, which
  routes gas onward through valve (2) to a glycol contactor (fed by lean
  glycol) and water out through valve (3) to disposal. From the glycol
  contactor, dried gas passes through valve (4) to a compressor and out
  through valve (6) as dry gas to export, while rich glycol leaves through
  valve (5) to the reboiler. Cross-referenced one-to-one against the
  surrounding "Gas Withdrawal and Export" application-review text: 1.
  Cavern Withdrawal Control, 2. Separator Pressure Control, 3. Separator
  Level Control, 4. Glycol Contactor Pressure Control, 5. Glycol Contactor
  Level Control, 6. Export Compressor Anti-Surge Control (Tables 12-10
  through 12-14, continuing onto printed p. 12-7).
concept-tags: [gas withdrawal, gas export, withdrawal separator, glycol contactor, glycol dehydration, export compressor, anti-surge control, numbered valve stations, whisperflo trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 12 "Natural Gas Storage," Figure 12-8 (drawing number E1528,
      printed p. 12-6) — "Figure 12-8. Gas Withdrawal & Export System Valve
      Diagram."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch12-fig8-gas-withdrawal-export-valve-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 148, printed p. 12-6) at 300 dpi, full schematic (all 6 numbered valve stations, withdrawal separator, glycol contactor, compressor), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑥ are the source's own valve-station key
  (station 1 fans out from four parallel withdrawal wells, drawn without
  separate numbers of their own — all four are "item 1"), per Style Guide
  §6.2 kept as the source drew them, not renumbered. This is the "Gas
  Withdrawal and Export" zoom-in on `ogas-cmp-underground-storage-process-
  flow` (Figure 12-1) — the companion to `ogas-cmp-gas-injection-valve-
  diagram` (Figure 12-6) as the other half of the cavern's in/out gas
  loop. Not catalogued in the earlier Figures-12-1-through-12-6 batch
  because it was outside that batch's requested figure list (flagged
  there as a future pass) — this closes that gap. Item 1's Table 12-10
  lists the same "Whisper III Trim or WhisperFlo Trim" trim type as
  `ogas-cmp-whisperflo-trim-cutaway` (Figure 12-7).
```

---

## Open items

- **First batch (Figures 12-1 through 12-6):** all six requested figures
  confirmed against the real page text and a 300 dpi page-image render
  before extraction; none were skipped or fabricated. PDF pages 144
  (printed 12-2), 145 (12-3), 146 (12-4, ×2), 147 (12-5, ×2). No gaps
  within the requested range.
- **Reading-order note confirmed, not a defect:** the first batch
  request's own figure list ordered Figure 12-4 before Figure 12-3
  (matching a raw text-extraction's column-reading order); direct
  page-image inspection confirms both are real, correctly numbered
  figures on the same printed page (12-4) — Figure 12-4 (the
  brine-disposal process diagram) sits above Figure 12-3 (the Vee-Ball
  V200 product photo) in the page layout. Nothing was miscatalogued; the
  request's ordering just followed the source's own two-column reading
  order rather than the figure numbers.
- **Second batch (Figures 12-7 and 12-8) — closes the gap the first
  batch flagged:** both figures confirmed against the real page text
  (PDF p. 148, printed p. 12-6) and a 300 dpi page-image render before
  extraction; both match their hint strings exactly once the surrounding
  running text is read in full (Figure 12-7's hint string concatenates
  its caption with the start of the "Gas Withdrawal and Export" section
  that follows it on the page — confirmed against the rendered image,
  not a mismatch). Catalogued as `ogas-cmp-whisperflo-trim-cutaway` and
  `ogas-cmp-gas-withdrawal-export-valve-diagram`. No gaps within this
  batch's requested range.
- **Chapter boundary confirmed:** Chapter 12 closes at PDF p. 150 (printed
  p. 12-8); Chapter 13 ("LNG Liquefaction") begins immediately after on
  the same PDF page. Recorded so a future pass has the boundary without
  re-deriving it.
- All eight records in this file are `used-by: []` — this is a proactive,
  use-driven-ahead catalog per `Source Library.md`; no course currently
  references them.
- No asset-variant-registry or `Curriculum —` writes were made from either
  pass — out of scope for a standing Component-Index-only cataloging
  batch.
- **`kind: topic` pass (2026-09-17):** read the full chapter's real body
  prose (PDF pp. 143-150, printed 12-1 through 12-8) start to finish, not
  just sections already tied to a figure. Two genuine topic entries added:
  `ogas-topic-storage-formation-types` (the chapter's conceptual
  foundation — depleted reservoir/aquifer/salt-cavern tradeoffs, base
  gas/working gas, leaching) and `ogas-topic-bidirectional-cavern-valve-
  sizing` (the low-ΔP-high-Cv-injection vs. high-ΔP-low-Cv-withdrawal
  tension, stated twice in the source almost verbatim, tied to no single
  figure). **Every numbered parameter table (Tables 12-1 through 12-15 —
  Fluid/Inlet Pressure/Outlet Pressure/Flow Rate/Valve Type/Trim Material
  per service) confirmed reference-data-only**: real service-condition
  specs, not generalizable conceptual content beyond what the two topic
  entries above already extract from the surrounding prose. Chapter total
  is now 10 components (8 figures + 2 topics).
