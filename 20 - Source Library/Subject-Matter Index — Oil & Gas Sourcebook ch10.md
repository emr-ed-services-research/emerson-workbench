---
title: Subject-Matter Index — Oil & Gas Sourcebook ch10
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch10 — Oil and Gas Transportation
updated: 2026-09-17
status: closed — figures complete (10-1 through 10-9); topic pass complete (5 kind:topic entries)
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 10

**Chapter 10 — "Oil and Gas Transportation."** Standing library-cataloging pass,
NOT tied to any course — built ahead of any course actually needing these
figures, per `Source Library.md`'s "two ways a subject-matter index gets
triggered." Matches the batch shape of the ch1/ch2/ch3/ch5/ch6/ch7/ch8/ch9
passes of this same chapter series. The **first batch** (2026-09-08) covered
the chapter's first six figures (10-1 through 10-6), from the chapter opener
through the Oil Transportation Application Review section's Pump Station
opening. The **second batch** (also 2026-09-08, same day) closes out the
chapter: Figures 10-7 through 10-9, the rest of the Oil Transportation
Application Review section (the Oil Terminal's Delivery / Flow Balancing /
Meter Backpressure valves and their representative hardware). All nine
figures confirmed against the real page text and a 300 dpi page-image render
before extraction — none were skipped or fabricated. Chapter 10 is now fully
catalogued.

> [!note] Chapter title correction against the batch request
> The batch request that produced this file labelled the target chapter
> "Chapter 10 — Fractionation." Reading the real pages (PDF pp. 127–130)
> shows this is incorrect: **Chapter 10 is "Oil and Gas Transportation."**
> "Fractionation" is the *next* chapter — **Chapter 11**, beginning
> immediately after Chapter 10 closes (PDF p. 132, printed p. 10-6, followed
> by "Chapter 11 / Fractionation" and its own Figure 11-1 on PDF p. 133). The
> six hint strings supplied with the batch request ("Figure 10-1... Gas
> Transportation Process Flow Diagram", "...Figure 10-2. Oil Transportation
> Process Flow Diagram", "Figure 10-3. Metering Station Control Valve
> Diagram", "Figure 10-4. Compressor System", "...Figure 10-5. ET Class 300
> with WhisperFlo trim and Spoked Plug", "Figure 10-6. Pump Station Control
> Valve Diagram") all matched the real Chapter 10 "Oil and Gas
> Transportation" content exactly — only the chapter-title label in the
> request header was wrong, not the figure list. Catalogued here under the
> chapter's real title; flagged so a future pass doesn't propagate the wrong
> title, and so a future "Chapter 11 — Fractionation" batch is understood to
> be genuinely new territory, not a duplicate of this one.

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

Chapter 10's own printed folios were confirmed directly against the rendered
pages, continuing forward from Chapter 9's confirmed closing point (PDF
p. 126, printed p. 9-14, immediately followed by Chapter 10's opening page).
PDF p. 127 (the chapter-title page, carrying Chapter 10's intro text and
Figure 10-1) has **no visible footer folio** — the standard convention for a
chapter's opening page in this document, matching ch9's own opener. The
following pages carry visible folios: PDF p. 128 = printed "10-2", PDF
p. 129 = printed "10-3", PDF p. 130 = printed "10-4" — all individually
confirmed against rendered page images. By the unnumbered-opener convention
already established in the ch9 batch, PDF p. 127 is printed **p. 10-1**.

## Components

### Chapter 10 — Gas Transportation Process (chapter opener, printed p. 10-1)

```yaml
id: ogas-cmp-gas-transportation-process-flow
teaches: >
  General process flow of a gas transportation network: gas from the
  production field enters a compressor station, which discharges to a
  second compressor station, which in turn feeds a metering station that
  distributes gas to local distribution or an end user. This is the
  chapter's orienting figure for the gas side of the chapter — the
  "Compressor Station" and "Metering Stations" sections that follow are a
  closer look at two of this diagram's blocks, the same relationship the
  onshore (ch7 Fig 7-1), offshore (ch8 Fig 8-1), and natural-gas-treatment
  (ch9 Fig 9-1) chapters' own opening figures have to their sections.
concept-tags: [gas transportation, process flow, compressor station, metering station, pipeline, interconnect]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 10 "Oil and Gas Transportation," Figure 10-1 (drawing number
      E1515, printed p. 10-1, the chapter's opening page) — "Figure 10-1.
      Gas Transportation Process Flow Diagram."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch10-fig1-gas-transportation-process-flow.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 127, printed p. 10-1) at 300 dpi, full block diagram (production field, two compressor stations, metering station) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Structurally parallel to `ogas-cmp-natural-gas-treatment-process-flow`
  (ch9, Figure 9-1) and the other Section II chapter openers in this
  sourcebook. Chapter 10 covers BOTH gas and crude-oil transportation as two
  parallel halves — this figure is the gas half's opener; the crude-oil
  half's own opener is `ogas-cmp-oil-transportation-process-flow` (Figure
  10-2), immediately below. This chapter's "Metering Station" and
  "Compressor System" sections (`ogas-cmp-metering-station-control-valve-diagram`
  and `ogas-cmp-compressor-system`, below) are the zoom-ins on this
  diagram's blocks.
```

### Chapter 10 — Compressor Station (printed p. 10-2)

```yaml
id: ogas-topic-compressor-station-fundamentals
kind: topic
teaches: >
  A compressor station is "the engine that powers a gas pipeline" —
  compressing (raising the pressure of) natural gas to move it through the
  pipeline. Stations are installed roughly every 40 to 100 miles; station
  size and compressor count depend on pipe diameter and gas volume, but the
  basic components are similar station to station. Three compressor styles
  exist, each drivable by electric motor, gas engine, or turbine: (1)
  centrifugal — low compression ratio but moves large volumes, used on
  large-capacity mainline compression; (2) reciprocating — limited
  compression ratio (typically 2:1 or 3:1 per stage, up to four stages on
  one engine), used on production lines from wellhead to processing plant;
  (3) screw — historically smaller, now up to 18 MMSCFD capacity, capable
  of extremely high compression ratios (as high as 100:1). Gas entering the
  station first passes through a filter/scrubber/strainer unit that removes
  free liquids and dirt before the compressors.
concept-tags: [compressor station, centrifugal compressor, reciprocating compressor, screw compressor, compression ratio, gas filtration]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 10 \"Oil and Gas Transportation,\" Compressor Station / Gas Filters / Compressors and Drivers sections, printed p. 10-2 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-gas-transportation-process-flow, ogas-cmp-compressor-system]
relatedTopics: [ogas-topic-anti-surge-dynamic-response]
used-by: []
notes: >
  This is the real conceptual content behind Figure 10-1's "COMPRESSOR
  STATION" block — the figure shows where a station sits in the network,
  this text explains what's inside one and why three compressor styles
  exist. Distinct from `ogas-cmp-compressor-system` (Figure 10-4), which
  zooms into ONE station's four numbered control-valve stations, not the
  compressor equipment itself.
```

### Chapter 10 — Metering Stations (printed p. 10-2)

```yaml
id: ogas-topic-metering-station-purpose
kind: topic
teaches: >
  A pipeline company must know how much gas is in its system at all
  times, a genuinely difficult task since pipeline systems often extend
  over thousands of miles. Metering stations solve this by measuring all
  natural gas entering or exiting the pipeline system. A metering station
  located anywhere gas is removed for local distribution is specifically
  called an "interconnect" — the term names the metering station's
  function at that kind of location, not a different piece of equipment.
concept-tags: [metering station, interconnect, gas measurement, pipeline management]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 10 \"Oil and Gas Transportation,\" Metering Stations section, printed p. 10-2 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-gas-transportation-process-flow, ogas-cmp-metering-station-control-valve-diagram]
relatedTopics: []
used-by: []
notes: >
  Figure 10-1's own teaches field names the "Metering Station" block but
  doesn't explain why one exists or what "interconnect" means — this fills
  that gap. Figure 10-3 (`ogas-cmp-metering-station-control-valve-diagram`)
  is the hardware zoom-in on this same concept's worker/monitor valve pair.
```

### Chapter 10 — Oil Transportation Process (printed p. 10-2)

```yaml
id: ogas-cmp-oil-transportation-process-flow
teaches: >
  General process flow of an oil transportation network: crude oil from the
  production field enters a pump station, which discharges to a second pump
  station, which in turn feeds an oil terminal that sends crude oil to
  storage or a refinery. The crude-oil-side counterpart to Figure 10-1's
  gas-side diagram — same chapter, same block-diagram-then-zoom-in
  structure, applied to the chapter's other half.
concept-tags: [oil transportation, crude oil, process flow, pump station, oil terminal, pipeline]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 10 "Oil and Gas Transportation," Figure 10-2 (drawing number
      E1516, printed p. 10-2) — "Figure 10-2. Oil Transportation Process
      Flow Diagram."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch10-fig2-oil-transportation-process-flow.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 128, printed p. 10-2) at 300 dpi, full block diagram (production field, two pump stations, oil terminal) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  This chapter's "Pump Station" section text ("Oil Transportation
  Application Review") is the zoom-in on this diagram's pump-station block,
  delivered as `ogas-cmp-pump-station-control-valve-diagram` (Figure 10-6),
  further down the chapter — the pump-station figure is separated from this
  process-flow opener by the gas-side application review content that comes
  between them in the source's page order.
```

### Chapter 10 — Pump Station Fundamentals (printed p. 10-2)

```yaml
id: ogas-topic-pump-station-fundamentals
kind: topic
teaches: >
  A pump station is "the engine that powers an oil pipeline" — increasing
  oil pressure to move it through the pipeline. Stations are installed
  roughly every 25 to 50 miles; station size and pump count depend on pipe
  diameter and oil volume. Two pump types are commonly used, centrifugal
  (most common) and reciprocating, most often electricity-driven and
  sometimes fitted with a variable speed drive (VSD) to throttle outlet
  pressure. When a VSD is present, a control valve is NOT needed to control
  outlet pressure during normal operation — one is typically specified only
  to control outlet pressure when the required pressure falls outside the
  VSD's own control range. At the end of each pipeline, an oil terminal is
  a breakout station where personnel perform final metering and route
  product to storage, another pipeline, or direct truck/vessel loading.
concept-tags: [pump station, centrifugal pump, reciprocating pump, variable speed drive, VSD, oil terminal]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 10 \"Oil and Gas Transportation,\" Pump Station / Oil Terminal sections, printed p. 10-2 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-oil-transportation-process-flow, ogas-cmp-pump-station-control-valve-diagram]
relatedTopics: [ogas-topic-compressor-station-fundamentals]
used-by: []
notes: >
  The oil-side counterpart to `ogas-topic-compressor-station-fundamentals`
  — same "engine that powers the pipeline" framing, parallel structure.
  The VSD-means-no-control-valve point is a real, control-valve-relevant
  fact this chapter's figures never state — Figure 10-6 only shows the
  Pump Discharge Valve that DOES exist when the VSD's range is exceeded,
  it doesn't explain why a valve is sometimes absent from the loop at all.
```

### Chapter 10 — Gas Transportation Application Review: Metering Station (printed p. 10-3)

```yaml
id: ogas-cmp-metering-station-control-valve-diagram
teaches: >
  Metering station control valve schematic — the zoom-in on the gas process
  diagram's "Metering Station" block. Gas from the pipeline passes through
  two numbered control valves in series before the flow meter: (1) worker
  valve — the flow control valve, taking a high pressure drop that often
  requires noise-attenuating trim; (2) monitor valve — normally wide open
  until the worker valve is in fail mode, operating under the same
  conditions as the worker only when the worker fails. Downstream of both
  valves, a flow meter measures gas exiting to local distribution.
concept-tags: [metering station, worker valve, monitor valve, flow meter, noise attenuating trim, fail mode]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 10 "Oil and Gas Transportation," Figure 10-3 (drawing number
      E1517, printed p. 10-3) — "Figure 10-3. Metering Station Control Valve
      Diagram."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch10-fig3-metering-station-control-valve-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 129, printed p. 10-3) at 300 dpi, full schematic (both numbered valve stations, flow meter), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①②  are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Worker Valve, 2. Monitor Valve, printed p. 10-2 – 10-3)
  and Tables 10-1 / 10-2 — per Style Guide §6.2 these stay as the source
  drew them, not renumbered. This is the "Metering Station" zoom-in on
  `ogas-cmp-gas-transportation-process-flow` (Figure 10-1).
```

### Chapter 10 — Gas Transportation Application Review: Compressor Station (printed p. 10-3)

```yaml
id: ogas-cmp-compressor-system
teaches: >
  Compressor system schematic — the zoom-in on the gas process diagram's
  compressor-station content. Gas from separators passes through a
  numbered suction throttle valve (1) into a scrubber vessel, then to the
  natural gas compressor; a scrubber level-control valve (2) dumps liquid
  from the scrubber bottom; an anti-surge/recycle valve (3) routes flow
  from the compressor discharge back to its suction side to prevent surge;
  and an export control valve (4) on the compressor discharge sends
  compressed gas on to the natural gas pipeline. Four numbered control
  valves mark the system's control points, matching the surrounding text's
  four numbered subsections (Compression Suction Throttle Control,
  Compression Suction Scrubber Level Control, Compressor Anti-surge,
  Compressor Export Control).
concept-tags: [compressor system, suction throttle control, scrubber level control, anti-surge, recycle valve, export control, natural gas compressor]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 10 "Oil and Gas Transportation," Figure 10-4 (drawing number
      E1484, printed p. 10-3) — "Figure 10-4. Compressor System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch10-fig4-compressor-system.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 129, printed p. 10-3) at 300 dpi, full schematic (scrubber, compressor, all 4 numbered valve stations), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–④ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Compression Suction Throttle Control ... 4. Compressor
  Export Control, printed pp. 10-3 – 10-4) and Tables 10-3 through 10-6 —
  per Style Guide §6.2 these stay as the source drew them, not renumbered.
  Positioned on the same printed page as `ogas-cmp-metering-station-control-valve-diagram`
  (Figure 10-3), directly below it. Companion hardware photo:
  `ogas-cmp-et-class300-whisperflo-spoked-plug` (Figure 10-5, representative
  hardware for item 3, the anti-surge valve — see its own record for the
  Table 10-5 cross-check).
```

### Chapter 10 — Compressor Anti-surge Dynamic Response (printed pp. 10-3 – 10-4)

```yaml
id: ogas-topic-anti-surge-dynamic-response
kind: topic
teaches: >
  An anti-surge (recycle) valve's job is preventing compressor shutdown
  under low suction pressure or high discharge pressure, by opening to
  route flow from discharge back to suction until pressures normalize —
  but the source's real requirement goes beyond that static role: the
  valve "must be able to respond quickly and accurately to changes in set
  point with minimal travel overshoot" and provide throttling capability
  across various travel ranges. A trip system associated with the valve is
  configured to open it to full travel in less than one second in most
  trip cases. This dynamic-response and trip-integration requirement is
  driven by the compressor system's own performance criteria, not by the
  valve in isolation — a control-valve selection consideration Figure
  10-4's schematic alone doesn't convey.
concept-tags: [anti-surge valve, recycle valve, trip system, dynamic response, travel overshoot, compressor surge]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 10 \"Oil and Gas Transportation,\" Compressor Anti-surge subsection (item 3), printed pp. 10-3 – 10-4 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-compressor-system, ogas-cmp-et-class300-whisperflo-spoked-plug]
relatedTopics: [ogas-topic-compressor-station-fundamentals]
used-by: []
notes: >
  `ogas-cmp-compressor-system`'s own teaches field already covers WHAT the
  anti-surge valve does (routes flow to prevent surge); this topic captures
  the additional real performance/dynamics requirement the source states
  separately, which the figure itself doesn't show. The source also
  references "Chapter 13" for additional compressor-surge-control
  information — not cross-linked here since that chapter (LNG Liquefaction
  in this sourcebook's real numbering) has not yet been checked for a
  matching concept; flagged for whoever indexes that chapter next, not
  assumed.
```

### Chapter 10 — Gas Transportation Application Review: representative hardware (printed p. 10-4)

```yaml
id: ogas-cmp-et-class300-whisperflo-spoked-plug
teaches: >
  Labelled cutaway of a Fisher ET Class 300 globe valve with WhisperFlo
  low-noise trim and a spoked plug, actuator and yoke visible above the
  bonnet. Representative hardware for the compressor anti-surge control
  valve (item 3 in Figure 10-4, Table 10-5: "Trim Type — Whisper Trim III or
  WhisperFlo trim") — the anti-surge valve typically requires an ASME
  CL600/900-rated body and a noise-abatement trim because of the large
  pressure drops it takes when relieving compressor surge conditions.
concept-tags: [ET valve, WhisperFlo trim, spoked plug, cutaway, compressor anti-surge, noise abatement trim, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 10 "Oil and Gas Transportation," Figure 10-5 (drawing number
      X0265, printed p. 10-4) — "Figure 10-5. ET Class 300 with WhisperFlo
      trim and Spoked Plug."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch10-fig5-et-class300-whisperflo-spoked-plug.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 130, printed p. 10-4) at 300 dpi, full valve cutaway photo (actuator, yoke, bonnet, spoked plug, flanged body) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the source directly beside item 3's text (Compressor
  Anti-surge) and Table 10-6, immediately following
  `ogas-cmp-compressor-system` (Figure 10-4) — the cross-check between the
  caption's "WhisperFlo trim" and Table 10-5/10-6's own "Whisper Trim III or
  WhisperFlo trim" entry confirms the item-3 link, the same honest-linkage
  discipline used for ch9's numbered-valve-station companion photos
  (`ogas-cmp-a11-2052-actuator-dvc6000`, `ogas-cmp-nps1-6-design-et-plug-open`).
```

### Chapter 10 — Oil Transportation Application Review: Pump Station (printed p. 10-4)

```yaml
id: ogas-cmp-pump-station-control-valve-diagram
teaches: >
  Pump station control valve schematic — the zoom-in on the oil process
  diagram's "Pump Station" block, and the oil-side counterpart to Figure
  10-3's gas-side metering-station diagram. Oil from the pipeline passes
  through a pump and a single numbered pump discharge valve (1) before
  continuing to the next section of pipeline. The pump discharge valve is
  normally held wide open to minimise energy loss, but is used to maintain
  a constant back pressure on the pump during startup, when cavitation of
  the fluid may occur — hydrodynamic noise-attenuating trim such as a
  hydrodome may be needed to manage the resulting noise and vibration.
concept-tags: [pump station, pump discharge valve, cavitation, hydrodome, noise attenuating trim, startup back pressure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 10 "Oil and Gas Transportation," Figure 10-6 (drawing number
      E1518, printed p. 10-4) — "Figure 10-6. Pump Station Control Valve
      Diagram."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch10-fig6-pump-station-control-valve-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 130, printed p. 10-4) at 300 dpi, full schematic (pump, single numbered valve station), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own number ① is the source's own valve-station key,
  cross-referenced against the surrounding text's numbered subsection (1.
  Pump Discharge Valve, printed pp. 10-4 – 10-5) and Table 10-7 — per Style
  Guide §6.2 it stays as the source drew it, not renumbered. This is the
  "Pump Station" zoom-in on `ogas-cmp-oil-transportation-process-flow`
  (Figure 10-2). Positioned on the same printed page as
  `ogas-cmp-et-class300-whisperflo-spoked-plug` (Figure 10-5), beginning the
  "Oil Transportation Application Review" section that continues past this
  batch's scope (Figures 10-7 through 10-9, seen further ahead in the
  chapter while confirming this batch's page range, are NOT catalogued
  here — a future batch should pick them up).
```

### Chapter 10 — Oil Transportation Application Review: Oil Terminal (printed p. 10-5)

```yaml
id: ogas-cmp-oil-terminal-receiving-unit-diagram
teaches: >
  Oil terminal receiving unit schematic — the zoom-in on the oil process
  diagram's "Oil Terminal" block, and the oil-side counterpart to Figure
  10-3's gas-side metering-station diagram. Oil from the pipeline passes
  through a single numbered Delivery valve (1), which takes the pipeline's
  initial pressure cut; the flow then splits across four parallel flow-meter
  runs, each with its own numbered Flow Balancing valve (2) that equalizes
  flow rate across the meters; the runs recombine through a single numbered
  Meter Backpressure valve (3), which holds the pressure needed within the
  flow meters, before the oil continues to the terminal.
concept-tags: [oil terminal, delivery valve, flow balancing valve, meter backpressure valve, flow meter, receiving unit]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 10 "Oil and Gas Transportation," Figure 10-7 (drawing number
      E1519, printed p. 10-5) — "Figure 10-7. Oil Terminal Receiving Unit
      Control Valve Diagram."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch10-fig7-oil-terminal-receiving-unit-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 131, printed p. 10-5) at 300 dpi, full schematic (all three numbered valve stations, four flow-meter runs), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①②③ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered "Oil
  Terminal" subsections (1. Delivery, printed p. 10-5; 2. Flow Balancing, 3.
  Meter Backpressure, printed p. 10-6) and Tables 10-8 / 10-9 / 10-10 — per
  Style Guide §6.2 these stay as the source drew them, not renumbered. This
  is the "Oil Terminal" zoom-in on `ogas-cmp-oil-transportation-process-flow`
  (Figure 10-2), the oil-side counterpart to
  `ogas-cmp-metering-station-control-valve-diagram` (Figure 10-3, gas side).
  Printed on the same page as `ogas-cmp-v260b-hydrodome-attenuator` (Figure
  10-8), directly above it — but that figure illustrates the separate Pump
  Station's Pump Discharge Valve (Figure 10-6 / Table 10-7), not this
  diagram's valves.
```

### Chapter 10 — Startup/Pressure-Cut Cavitation Pattern (printed pp. 10-4 – 10-5)

```yaml
id: ogas-topic-transportation-startup-cavitation
kind: topic
teaches: >
  A recurring pattern across this chapter's oil-side valves: a large,
  transient pressure drop — the pump discharge valve holding back pressure
  during pipeline startup, or the oil terminal's Delivery valve taking the
  pipeline's initial pressure cut — often causes cavitation. The source is
  explicit that this cavitation is typically NOT damaging to the valve
  itself (an erosion standpoint), but the resulting noise and vibration can
  damage other pipeline components — the concern is acoustic/mechanical,
  not erosive. Hydrodynamic noise-attenuating trim such as a hydrodome is
  the stated mitigation in both cases.
concept-tags: [startup cavitation, pressure cut, hydrodome, noise and vibration, non-erosive cavitation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 10 \"Oil and Gas Transportation,\" Pump Discharge Valve and Delivery Valve subsections, printed pp. 10-4 – 10-5 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-pump-station-control-valve-diagram, ogas-cmp-v260b-hydrodome-attenuator, ogas-cmp-oil-terminal-receiving-unit-diagram]
relatedTopics: []
used-by: []
notes: >
  Real gap caught while reading this pass: `ogas-cmp-pump-station-control-valve-diagram`'s
  own teaches field already states the cavitation/hydrodome point for the
  Pump Discharge Valve, but `ogas-cmp-oil-terminal-receiving-unit-diagram`'s
  teaches field does NOT — the source states the same cavitation/hydrodome
  requirement for the Delivery valve (Table 10-8: Trim Type "Hydrodome") but
  that figure entry never mentions it. This topic entry captures the
  cross-cutting pattern and closes that gap without editing the existing
  figure entry itself, per this pass's scope (author new topic entries,
  not rewrite existing figure entries).
```

### Chapter 10 — Oil Transportation Application Review: representative hardware, Pump Discharge Valve (printed p. 10-5)

```yaml
id: ogas-cmp-v260b-hydrodome-attenuator
teaches: >
  Labelled cutaway product photo of a Fisher V260B ball valve fitted with a
  hydrodome noise-attenuating trim. Representative hardware for the pump
  station's Pump Discharge Valve (item 1 in Figure 10-6, Table 10-7: "Trim
  Type — Standard Flow Ring/Full Bore or Hydrodome") — during startup the
  discharge valve throttles to hold back pressure on the pump while the
  downstream pipeline builds pressure, cavitation of the fluid may occur, and
  a hydrodynamic noise-attenuating trim such as a hydrodome manages the
  resulting noise and vibration.
concept-tags: [pump discharge valve, hydrodome, V260B, ball valve cutaway, cavitation, noise attenuating trim, startup back pressure, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 10 "Oil and Gas Transportation," Figure 10-8 (drawing number
      X0082-2, printed p. 10-5) — "Figure 10-8. V260B with Hydrodome
      Attenuator."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch10-fig8-v260b-hydrodome-attenuator.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 131, printed p. 10-5) at 300 dpi, full cutaway product photo (ball, hydrodome trim, bolted body) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the source directly beside the Pump Discharge Valve
  discussion continuing from Figure 10-6 / Table 10-7 (printed pp. 10-4 –
  10-5) — same representative-hardware pattern as
  `ogas-cmp-et-class300-whisperflo-spoked-plug` (Figure 10-5, compressor
  anti-surge valve) and ch9's numbered-valve-station companion photos. Not to
  be confused with `ogas-cmp-oil-terminal-receiving-unit-diagram` (Figure
  10-7), printed on the same page immediately above it but illustrating the
  separate Oil Terminal block.
```

### Chapter 10 — Oil Transportation Application Review: representative hardware, Meter Backpressure Valve (printed p. 10-6)

```yaml
id: ogas-cmp-vee-ball-v150-2052-dvc6200-cutaway
teaches: >
  Labelled cutaway product photo of a Fisher Vee-Ball V150 rotary control
  valve fitted with a 2052 size 3 spring-and-diaphragm actuator and a
  FIELDVUE DVC6200 digital valve controller. Representative hardware for the
  oil terminal's Meter Backpressure valve (item 3 in Figure 10-7, Table
  10-10: "Valve Type and Pressure Class — Vee-Ball V150, ASME CL150"), which
  maintains the pressure needed within the flow meter.
concept-tags: [Vee-Ball V150, 2052 actuator, DVC6200, digital valve controller, meter backpressure valve, cutaway, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 10 "Oil and Gas Transportation," Figure 10-9 (drawing number
      X0334, printed p. 10-6) — "Figure 10-9. Cutaway of Vee-Ball V150/2052
      Size 3 Actuator and DVC6200."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch10-fig9-vee-ball-v150-2052-dvc6200-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 132, printed p. 10-6) at 300 dpi, full cutaway product photo (Vee-Ball body, size 3 spring-and-diaphragm actuator, DVC6200 digital valve controller) + drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the source directly beside the Meter Backpressure item-3 text
  and Table 10-10 (printed p. 10-6), immediately following
  `ogas-cmp-oil-terminal-receiving-unit-diagram` (Figure 10-7) and its Flow
  Balancing / Meter Backpressure discussion — same representative-hardware
  pattern as `ogas-cmp-v260b-hydrodome-attenuator` (Figure 10-8) and ch9's
  numbered-valve-station companion photos.
```

---

## Open items

- **First batch (Figures 10-1 through 10-6):** all six requested figures
  confirmed against the real page text and a 300 dpi page-image render
  before extraction; none were skipped or fabricated. PDF pages 127
  (printed 10-1, chapter opener), 128 (10-2), 129 (10-3, ×2), 130 (10-4,
  ×2). No gaps within that batch's range.
- **Chapter-title correction, flagged at the top of this file:** the batch
  request that produced this file mislabelled the target chapter
  "Fractionation" — the real Chapter 10 title, confirmed by reading the
  rendered pages, is "Oil and Gas Transportation." "Fractionation" is
  Chapter 11, which begins immediately after Chapter 10 closes (PDF p. 132,
  printed p. 10-6). The six figures requested all matched Chapter 10's real
  content exactly, so nothing here is miscatalogued — only the chapter
  label in the originating request was wrong. Flagged so it isn't repeated,
  and so a genuine future "Chapter 11 — Fractionation" batch isn't mistaken
  for a duplicate of this one.
- **Second batch (Figures 10-7 through 10-9) — closes out the chapter:** all
  three requested figures confirmed against the real page text and a
  300 dpi page-image render before extraction; none were skipped or
  fabricated. Both on PDF p. 131 (printed 10-5: Figures 10-7 and 10-8) and
  PDF p. 132 (printed 10-6: Figure 10-9). This was exactly the gap the first
  batch's own "Open items" flagged — Chapter 10 is now fully catalogued,
  chapter opener through its closing page, with no gap remaining before
  Chapter 11 ("Fractionation," confirmed starting at PDF p. 133, printed
  p. 11-1) begins.
- All nine records in this file are `used-by: []` — this is a proactive,
  use-driven-ahead catalog per `Source Library.md`; no course currently
  references them.
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
- **Topic pass (2026-09-17):** applied the `kind: topic` convention (proven
  on the Control Valve Handbook) to this chapter for the first time in the
  Oil & Gas Sourcebook. Read the full real chapter text (PDF pp. 127-132)
  directly, not just the existing figure captions. **5 new topic entries**
  added: `ogas-topic-compressor-station-fundamentals`,
  `ogas-topic-metering-station-purpose`,
  `ogas-topic-pump-station-fundamentals`,
  `ogas-topic-anti-surge-dynamic-response`,
  `ogas-topic-transportation-startup-cavitation`. All ten per-valve
  application-table sections (Tables 10-1 through 10-10) were read but not
  separately topic-indexed — they're real reference data (typical
  pressure/temperature/material/trim values per valve), the same "figures
  only, not tables" boundary the Handbook pass already established,
  correctly extended here rather than re-litigated. Chapter 10's real
  component count is therefore 14 (9 figures + 5 topics), not 9.
- **One real gap closed, not silently absorbed:** `ogas-cmp-oil-terminal-receiving-unit-diagram`'s
  own `teaches` field never mentions that its Delivery valve (item 1) needs
  hydrodome trim for startup cavitation, even though the source states this
  explicitly (Table 10-8) and the sibling Pump Discharge Valve entry
  already captures the same point for its own valve. Not fixed by editing
  that entry (out of scope for a topic-only pass) — captured instead in
  `ogas-topic-transportation-startup-cavitation`, which cites both figures
  and names the gap directly in its own notes.
- **Uncited cross-chapter reference, not resolved:** the source's Anti-surge
  subsection references "Chapter 13" for more compressor-surge-control
  information. Not linked from `ogas-topic-anti-surge-dynamic-response`
  since Chapter 13 (LNG Liquefaction, this sourcebook's real chapter 13)
  has not been checked for a matching concept as of this pass — flagged for
  whoever indexes that chapter's topics next, not assumed or guessed at.
- **Integrity check run, not assumed:** 14 total ids in this file, all
  unique; all `relatedFigures`/`relatedTopics` references (including the
  intentional self-references among the five new topic entries) verified
  to resolve to real existing ids in this file. No `Source Library.md` edit
  made this pass — the coordinating parent consolidates counts across all
  13 chapters of this sourcebook once the whole batch lands.
