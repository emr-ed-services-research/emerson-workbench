---
title: Component Index — Oil & Gas Sourcebook ch13
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch13 — LNG Liquefaction
updated: 2026-09-17
status: complete — Figures 13-1 through 13-11 (this chapter's full figure list, across two batches) confirmed and catalogued; none skipped. 8 kind:topic entries added 2026-09-17, full-chapter conceptual pass.
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 13

**Chapter 13 — "LNG Liquefaction."** Standing library-cataloging pass, NOT
tied to any course — built ahead of any course actually needing these
figures, per `Source Library.md`'s "two ways a component index gets
triggered." Matches the batch shape of the ch1/ch2/ch3/ch5/ch6/ch7/ch8/ch9/
ch10/ch11/ch12 passes of this same chapter series. First batch: Figures
13-1 through 13-6. Second batch: Figures 13-7 through 13-11 (this
chapter's remaining figures, exhausting its full figure list). All eleven
figures confirmed against the real page text and a 300 dpi page-image
render before extraction — none were skipped or fabricated.

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

Chapter 13's own printed folios were confirmed directly against the
rendered pages, and this pass found a **correction to the prior chapter's
boundary note**: `Component Index — Oil & Gas Sourcebook ch12.md` states
"Chapter 13 ('LNG Liquefaction') begins immediately after at PDF p. 150
(mid-page)" — direct inspection this pass shows that is **not correct**.
PDF p. 150 (printed 12-8) carries only Table 12-15 and is otherwise blank
below it — Chapter 12 ends there with no Chapter 13 content sharing the
page. **Chapter 13 begins on its own fresh page, PDF p. 151**, a standalone
chapter-title/opener page (centered "Chapter 13 / LNG Liquefaction" title,
two columns of intro text, Fisher/Emerson footer logos, **no visible footer
folio** — the same opener convention as ch9/ch10/ch11/ch12's own openers —
so by that convention it is printed **p. 13-1**). Flagged here rather than
edited into the ch12 file, per this pass's scope (Component-Index-only, not
touching an existing chapter's already-written file). Confirmed by direct
page-image render, not carried forward from the ch12 file's claim.

Folios from PDF p. 151 onward, each confirmed against rendered page images:
PDF p. 151 = printed **13-1** (opener, no visible folio, per convention),
PDF p. 152 = printed **13-2** (Figure 13-1 and Figure 13-2, both on this
page), PDF p. 153 = printed **13-3** (Figure 13-3), PDF p. 154 = printed
**13-4** (Figure 13-4 in the left column and Figure 13-5 in the right
column, same page), PDF p. 155 = printed **13-5** (Figure 13-6, with
Table 13-2 immediately below it).

This batch's requested figure list (13-1, 13-2, 13-3, 13-5, 13-4, 13-6) is
fully contained in PDF pp. 152–155 (printed 13-2 through 13-5); the chapter
continues past this batch's range (Figures 13-7 through 13-11 exist further
in, at printed pp. 13-6 through 13-9, per the page-image text extraction
done to locate this batch's figures — out of scope for this batch, flagged
for a future pass if this chapter is revisited).

## Components

### Chapter 13 — LNG Fundamentals (printed p. 13-1, chapter opener)

```yaml
id: ogas-topic-lng-fundamentals
kind: topic
teaches: >
  LNG is a mixture of light hydrocarbons (86-99% methane), liquid at
  cryogenic temperature (−258°F/−161°C), occupying ~1/600 the volume of
  natural gas at atmospheric pressure — that volume reduction is the
  process's whole rationale: it lets gas from remote reserves with no
  feasible pipeline route reach market. Feed gas is bulk-separated from
  hydrocarbon liquids at the production site, compressed to 1000-1400
  psig (69-97 bar), and pipelined to the LNG plant. Several commercially
  patented liquefaction technologies exist — Air Products Mixed
  Refrigerant (APCI-MR, the largest installed base worldwide and this
  chapter's subject), Phillips Optimized Cascade, and Shell Double Mixed
  Refrigerant (DMR) — sharing the same basic stages (production, treating,
  dehydration, heavy-ends removal, liquefaction, storage) but differing
  in refrigerant cycle and cryogenic heat-exchanger type.
concept-tags: [LNG composition, cryogenic liquefaction, volume reduction, APCI-MR, Phillips Optimized Cascade, Shell DMR, feed gas compression]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 13 'LNG Liquefaction,' opening prose, printed p. 13-1 (PDF p. 151) — before Figure 13-1"
relatedFigures: [ogas-cmp-lng-process-flow-diagram]
relatedTopics: []
used-by: []
notes: >
  Real chapter-opening prose with no figure of its own — the −161°C
  cryogenic-temperature figure matches the value already verified earlier
  this session against this same page (a prior general-knowledge assumption
  of −162°C was corrected then; this entry uses the confirmed real number).
  Confirmed by direct `pdftotext` read of PDF p. 151, not assumed.
```

### Chapter 13 — LNG Process Overview (printed p. 13-2)

```yaml
id: ogas-cmp-lng-process-flow-diagram
teaches: >
  Orienting block-diagram overview of an LNG liquefaction facility. Raw
  natural gas flows through inlet facilities, gas treating (with sulfur
  recovery producing elemental sulfur — Chapter 9 scope, shown in a dashed
  "CHAPTER 9" box) and dehydration, then fractionation (producing NGLs —
  Chapter 11 scope, shown in a dashed "CHAPTER 11" box), then into
  refrigerant cycles and liquefaction, exiting as LNG. This is the
  chapter's orienting figure — the same block-diagram-then-zoom-in
  relationship the onshore (ch7 Fig 7-1), offshore (ch8 Fig 8-1),
  natural-gas-treatment (ch9 Fig 9-1), fractionation (ch11 Fig 11-1),
  oil/gas-transportation (ch10 Figs 10-1/10-2), and natural-gas-storage
  (ch12 Fig 12-1) chapters' own opening figures have to their sections —
  and it explicitly cross-references Chapters 9 and 11 as the upstream
  process stages it does not itself cover.
concept-tags: [LNG process overview, block diagram, gas treating, sulfur recovery, dehydration, fractionation, NGLs, refrigerant cycles, liquefaction, chapter cross-reference]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-1 (drawing number E1529,
      printed p. 13-2) — "Figure 13-1. LNG Process Flow Diagram."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig1-lng-process-flow-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 152, printed p. 13-2) at 300 dpi, full block diagram (both dashed chapter cross-reference boxes, all named process blocks), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Chapter opener figure (on the first content page after the standalone
  title/opener page, per this chapter's own layout — see the
  page-numbering note above). Figure 13-2 is the zoom-in on this figure's
  "REFRIGERANT CYCLES AND LIQUEFACTION" block, on the same printed page.
```

### Chapter 13 — LNG Process Overview (printed p. 13-2)

```yaml
id: ogas-cmp-refrigerant-cycles-liquefaction-diagram
teaches: >
  Process flow diagram of the refrigerant cycles and liquefaction unit in
  the Air Products Mixed Refrigerant (APCI-MR) process — the zoom-in on
  Figure 13-1's "REFRIGERANT CYCLES AND LIQUEFACTION" block. Mixed
  refrigerant (MR) from fractionation passes through MR compression and an
  MR HP separator; propane from fractionation passes through propane
  compression and propane heat exchange; natural gas from fractionation
  passes through a natural gas scrubber. All three streams converge at the
  main heat exchanger (MHE), which outputs LNG. Directly narrated by the
  surrounding "Refrigerant Cycles" text (propane cycle, mixed refrigerant
  cycle, and liquefaction sub-sections each walk one part of this diagram
  in turn).
concept-tags: [APCI-MR process, mixed refrigerant, MR compression, MR HP separator, propane cycle, propane compression, natural gas scrubber, main heat exchanger, MHE, LNG]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-2 (drawing number E1530,
      printed p. 13-2) — "Figure 13-2. Refrigerant Cycles and
      Liquefaction."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig2-refrigerant-cycles-and-liquefaction.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 152, printed p. 13-2) at 300 dpi, full block diagram (MR and propane cycles, natural gas scrubber, MHE), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Zoom-in on `ogas-cmp-lng-process-flow-diagram` (Figure 13-1), on the same
  printed page. This chapter's application-review text (Inlet Facilities,
  Refrigerant Cycles, Liquefaction sections) walks through this diagram's
  blocks directly and is the chapter's main teaching narrative.
```

### Chapter 13 — Refrigerant Cycles (printed pp. 13-2 to 13-3)

```yaml
id: ogas-topic-propane-refrigeration-cycle
kind: topic
teaches: >
  The propane cycle is a closed loop, periodically fed propane from the
  fractionation columns. Compressor discharge is condensed with cooling
  water, then passes through evaporators (used everywhere in the process
  except the MHE itself) where heat from the feed natural gas and gaseous
  MR is transferred to the propane, vaporizing it. The vapor returns to
  flash drums, where any remaining liquid is separated and sent back to
  the evaporators for further heat transfer; the gaseous portion goes to
  the propane compressor for recompression — closing the loop.
concept-tags: [propane cycle, closed loop refrigeration, evaporator, flash drum, compressor recompression]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 13 'LNG Liquefaction,' 'Propane Cycle' running text, printed p. 13-2 (PDF p. 152)"
relatedFigures: [ogas-cmp-refrigerant-cycles-liquefaction-diagram, ogas-cmp-propane-compressor-antisurge-diagram]
relatedTopics: [ogas-topic-mixed-refrigerant-cycle]
used-by: []
notes: >
  This is the process-mechanism explanation the block diagrams (Figures
  13-2, 13-8) show but do not themselves narrate — confirmed by direct
  read of PDF p. 152's "Propane Cycle" column.
```

```yaml
id: ogas-topic-mixed-refrigerant-cycle
kind: topic
teaches: >
  MR (a mixture of N2, methane, ethane, and propane) is also a closed
  loop, resupplied by the fractionation columns as needed. Compressor
  discharge is cooled/partially condensed by cooling water and the
  propane cycle, then split in a separator into MR vapor and MR liquid;
  both streams pass through the tube side of the MHE for further cooling.
  Pressure is then reduced through Joule-Thomson valves or expanders,
  partially vaporizing and further cooling the mixture via the
  Joule-Thomson effect. This partially-vaporized MR enters the MHE's
  shell side and contacts the tubes carrying natural gas and MR — that
  contact is what actually liquefies the natural gas feed, to −231°F
  (−146°C). MR vapor leaving the shell side returns to the MR compressor
  suction for recycle.
concept-tags: [mixed refrigerant cycle, MR, closed loop refrigeration, Joule-Thomson effect, main heat exchanger, tube-and-shell]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 13 'LNG Liquefaction,' 'Mixed Refrigerant Cycle' running text, printed pp. 13-2 to 13-3 (PDF pp. 152-153)"
relatedFigures: [ogas-cmp-refrigerant-cycles-liquefaction-diagram, ogas-cmp-mr-compressor-antisurge-diagram, ogas-cmp-common-valves-mhe-diagram]
relatedTopics: [ogas-topic-propane-refrigeration-cycle, ogas-topic-joule-thomson-expansion-and-trim-selection]
used-by: []
notes: >
  Confirmed by direct read of PDF pp. 152-153's "Mixed Refrigerant Cycle"
  column — this is the mechanism the MHE actually depends on; the natural
  gas is liquefied by CONTACT with this MR stream inside the MHE, not by
  the MR stream itself being LNG.
```

### Chapter 13 — Inlet Facilities (printed p. 13-3)

```yaml
id: ogas-cmp-feed-gas-pressure-letdown-valves
teaches: >
  Feed gas inlet pressure letdown — the first substantial pressure
  reduction the feed gas sees entering the plant. Two parallel plant/
  pipeline pressure letdown valves (100% operational redundancy) reduce
  the incoming natural-gas pipeline pressure before the gas enters the
  slug catchers, which separate the gas (to the NG pipeline onward) from
  liquid condensate (routed to processing). No numbered callouts in this
  figure — a generic P&ID-style block-and-valve-symbol diagram. Backs
  Table 13-1 ("Feed Gas Pressure Letdown Valve": NPS 16-20 EWT-2 or
  EUT-2, ASME CL600/900, Whisper III / WhisperFlo trim, almost always
  fail-close).
concept-tags: [feed gas letdown, pressure letdown valves, redundancy, slug catchers, liquid condensate, noise attenuation trim, fail-close]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-3 (drawing number E1531,
      printed p. 13-3) — "Figure 13-3. Feed Gas Pressure Letdown Valves."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig3-feed-gas-pressure-letdown-valves.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 153, printed p. 13-3) at 300 dpi, full diagram (two parallel letdown valve symbols, slug catchers block, NG/condensate outlets), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Directly captioned and positioned within the "Inlet Facilities" /
  "Feed Gas Inlet Pressure Letdown" application-review text, immediately
  above Table 13-1 — a confirmed positional match, not a family inference.
  `ogas-cmp-ewt-whisper-trim-iii-cutaway` (Figure 13-4, next page) is
  representative hardware for this same valve/trim family.
```

### Chapter 13 — Inlet Facilities: representative hardware (printed p. 13-4)

```yaml
id: ogas-cmp-ewt-whisper-trim-iii-cutaway
teaches: >
  Labelled cutaway product illustration of an EWT globe valve body fitted
  with a Whisper Trim III cage. Representative hardware for the feed gas
  inlet pressure letdown valve (Table 13-1: "Valve Type and Pressure
  Class — NPS 16-20 EWT-2 or EUT-2, ASME CL600/900"; "Trim Type —
  WhisperFlo Trim or Whisper III Trim"). The figure sits directly within
  the same running "Inlet Facilities" discussion that opens with Table
  13-1 on the prior page and continues past this figure into inlet-valve
  controllability and reliability — not a separate topic sharing the page
  by coincidence.
concept-tags: [EWT, Whisper Trim III, WhisperFlo trim, feed gas inlet letdown, noise attenuation, cutaway, cage trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-4 (drawing number W9518-1,
      printed p. 13-4) — "Figure 13-4. EWT with Whisper Trim III Cage."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig4-ewt-whisper-trim-iii-cage-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 154, printed p. 13-4) at 300 dpi, full cutaway illustration (globe body, cage trim, bonnet bolting), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Continuous-discussion match to `ogas-cmp-feed-gas-pressure-letdown-
  valves` (Figure 13-3) and Table 13-1, both on the immediately preceding
  page — the running "Inlet Facilities" text does not break between them.
  Positioned in the left column of printed p. 13-4; Figure 13-5 (Typical
  Compressor Map) occupies the right column of the same page but belongs
  to the separate "Refrigerant Cycles" antisurge-valve discussion.
```

### Chapter 13 — Inlet Facilities: letdown-valve criticality (printed pp. 13-3 to 13-4)

```yaml
id: ogas-topic-feed-gas-letdown-criticality
kind: topic
teaches: >
  The feed gas inlet letdown valve is not just a pressure-reduction
  device — it is the single point of supply for an entire LNG train,
  which makes both its reliability and its controllability critical, for
  two distinct reasons. Reliability: two valves provide 100% operational
  redundancy at the plant's reducing station because a failed inlet valve
  shuts down its whole train, and the plant can only partially make up
  the lost production from other trains — with long-term supply contracts
  at stake. Controllability: this is a true throttling valve, controlled
  by the DCS from a triple-voting pressure-transmitter configuration; if
  it cannot hold inlet pressure accurately, the resulting pressure swings
  cycle the whole plant, reduce throughput, and trip equipment repeatedly
  — repeated starting/stopping shortens mechanical equipment life. These
  valves are also configured in the plant's ESD systems.
concept-tags: [inlet letdown valve, redundancy, controllability, DCS, triple voting, ESD, process cycling]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 13 'LNG Liquefaction,' 'Feed Gas Inlet Pressure Letdown' application-review text, printed pp. 13-3 to 13-4 (PDF pp. 153-154)"
relatedFigures: [ogas-cmp-feed-gas-pressure-letdown-valves, ogas-cmp-ewt-whisper-trim-iii-cutaway]
relatedTopics: []
used-by: []
notes: >
  Confirmed by direct read of PDF pp. 153-154 — this text is why the
  valve gets NPS 16-24, ASME CL600/900, and noise-attenuation trim in
  Table 13-1, not just what those numbers are.
```

### Chapter 13 — Refrigerant Cycles (printed p. 13-4)

```yaml
id: ogas-cmp-typical-compressor-map
teaches: >
  Generic compressor performance map — discharge-pressure-head ratio (Rc)
  vs. volumetric suction flow (Qs, vol) — showing the surge limit, the
  stonewall/choke limit, minimum- and maximum-speed lines, the resulting
  actual available operating (stable) zone, and the additional control
  margins (process limit, power limit) subtracted from the theoretical
  envelope. The conceptual basis for why antisurge control valves on
  refrigerant compressors (propane and MR cycles) must throttle fast and
  accurately enough to keep the compressor's operating point inside the
  stable zone and away from the surge line.
concept-tags: [compressor map, surge limit, stonewall limit, choke limit, antisurge control, operating envelope, minimum speed, maximum speed, control margin]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-5 (drawing number E1532,
      printed p. 13-4) — "Figure 13-5. Typical Compressor Map."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig5-typical-compressor-map.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 154, printed p. 13-4) at 300 dpi, full map (surge/stonewall boundary, speed lines, operating zone, control-margin annotations), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Directly named and explained in the surrounding "Refrigerant Cycles"
  text — "Figure 13-5 shows the relationship between discharge pressure
  head and suction flow through a compressor" — a confirmed positional
  caption match, not an inferred family match. Right column of printed
  p. 13-4; `ogas-cmp-ewt-whisper-trim-iii-cutaway` (Figure 13-4) occupies
  the left column of the same page but belongs to the separate "Inlet
  Facilities" discussion.
```

### Chapter 13 — Refrigerant Cycles: compressor surge mechanism (printed pp. 13-4 to 13-5)

```yaml
id: ogas-topic-compressor-surge-mechanism
kind: topic
teaches: >
  Compressor surge occurs when the compressor can no longer produce
  enough discharge pressure head to overcome downstream resistance —
  caused by insufficient suction flow or a sudden drop in process demand,
  both of which raise the relative discharge pressure the compressor must
  fight. When surge is reached, process flow reverses through the
  compressor until enough head rebuilds to restart forward flow; this
  direction reversal stresses thrust bearings and other internals,
  causing wear and eventual damage — and it repeats cyclically as long as
  the triggering conditions persist. The compressor map's stable
  operating zone (`ogas-cmp-typical-compressor-map`) sits between the
  surge line and the stonewall/choke line, and control margins (process
  limit, power limit) are subtracted further inward from the theoretical
  envelope. Because a refrigerant compressor can cost upward of $50
  million, antisurge valves must throttle — not just open/close —
  quickly and accurately enough to keep the operating point inside that
  margin, close to the surge line for efficiency without crossing it.
concept-tags: [compressor surge, thrust bearing damage, antisurge valve, throttling requirement, stable operating zone, control margin]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 13 'LNG Liquefaction,' 'Refrigerant Cycles' running text, printed pp. 13-4 to 13-5 (PDF pp. 154-155)"
relatedFigures: [ogas-cmp-typical-compressor-map]
relatedTopics: [ogas-topic-odv-package-rationale]
used-by: []
notes: >
  This is the mechanism the compressor map figure graphs but does not
  itself explain in words — confirmed by direct read of PDF pp. 154-155.
```

### Chapter 13 — Refrigerant Cycles: Liquefaction, antisurge valve package (printed p. 13-5)

```yaml
id: ogas-cmp-odv-package-585cls
teaches: >
  Labelled product photo of a Fisher Optimized Digital Valve (ODV)
  package — an "FB" NPS 16x20 valve body with a 585CLS double-acting
  piston actuator, a FIELDVUE DVC6200 digital valve controller, and an
  SS-263 volume booster. Representative hardware for an antisurge control
  valve application (propane- or MR-cycle compressor antisurge service),
  directly paired with Table 13-2 ("Antisurge Valve Components"), which
  itemizes each package component the photo shows: regulator, filter,
  trip valve, volume booster, dump valve, solenoid valve, volume tank, the
  ODV-tiered DVC6200 (endpoint pressure control, lead/lag filtering,
  stabilize/optimize tuning), and the double-acting piston actuator.
concept-tags: [ODV package, Optimized Digital Valve, 585CLS actuator, DVC6200, volume booster, antisurge valve, double acting piston actuator, FIELDVUE]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-6 (drawing number X0210,
      printed p. 13-5) — "Figure 13-6. ODV Package with FB NPS 16x20,
      585CLS Actuator, DVC6200, and SS-263 Booster."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig6-odv-package-fb-585cls-dvc6200.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 155, printed p. 13-5) at 300 dpi, full product photo (double-acting piston actuator stack, valve body, instrumentation), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Directly captioned and immediately followed on the same printed page by
  Table 13-2, which names every component visible in the photo — a
  confirmed direct positional match, not a family inference. The
  caption's own "FB" valve-type abbreviation is kept verbatim as printed;
  it is not expanded here since the source text does not spell it out on
  this page.
```

### Chapter 13 — Refrigerant Cycles: ODV package rationale (printed p. 13-5)

```yaml
id: ogas-topic-odv-package-rationale
kind: topic
teaches: >
  Antisurge valve technology had to change from on/off (stroke-time-only
  specification) to true throttling that also responds accurately to
  small step changes. Fisher's Optimized Digital Valve (ODV) package meets
  this by combining a double-acting piston actuator (585C/585CLS, up to
  24 in. travel / 18 in. bore — an ATI actuator if more thrust or travel
  is needed) with an ODV-tiered DVC6200 digital valve controller carrying
  control/tuning algorithms beyond the standard PD tier: Endpoint Pressure
  Control, Lead/Lag Filtering, and Stabilize/Optimize Tuning. Every
  package is subjected to Factory Acceptance Test FGS4L11 before shipment
  (or Site Acceptance Test FGS4L12 for retrofits where the body isn't
  present at factory-test time); further customer-specific testing can be
  added beyond that baseline.
concept-tags: [Optimized Digital Valve, ODV package, DVC6200 tiers, double acting piston actuator, factory acceptance test, throttling vs on-off]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 13 'LNG Liquefaction,' running text following Figure 13-6, printed p. 13-5 (PDF p. 155)"
relatedFigures: [ogas-cmp-odv-package-585cls, ogas-cmp-dvc6200-odv-package-instrument]
relatedTopics: [ogas-topic-compressor-surge-mechanism]
used-by: []
notes: >
  Confirmed by direct read of PDF p. 155 — explains WHY the package shown
  in Figure 13-6 is built the way it is, not just what it looks like.
```

### Chapter 13 — Refrigerant Cycles: Propane Cycle, antisurge valve instrumentation (printed p. 13-6)

```yaml
id: ogas-cmp-dvc6200-odv-package-instrument
teaches: >
  Labelled product photo of a FIELDVUE DVC6200 digital valve controller as
  fitted to an Optimized Digital Valve (ODV) package — the "Optimized
  Digital Valve" nameplate is visible on the instrument's circular cover,
  along with the FIELDVUE/FISHER badge and triple pressure gauges. This is
  the instrumentation half of the same ODV package shown assembled onto a
  complete valve/actuator in `ogas-cmp-odv-package-585cls` (Figure 13-6,
  prior page) — here isolated as its own figure at the opening of the
  "Propane Cycle" section, immediately above the antisurge-valve
  application text and Table 13-3 (1st Stage Propane Compressor Antisurge
  Valve) that both specify "Actuation: Optimized Antisurge System."
concept-tags: [DVC6200, FIELDVUE, Optimized Digital Valve, ODV package, antisurge instrumentation, propane cycle, digital valve controller]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-7 (drawing number X0204-1,
      printed p. 13-6) — "Figure 13-7. DVC6200 Instrument for ODV
      Package."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig7-dvc6200-odv-package-instrument.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 156, printed p. 13-6) at 300 dpi, full product photo (instrument body, cover nameplate, gauges), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned at the top of the left column on printed p. 13-6, directly
  above the "Propane Cycle" section heading and its opening paragraph —
  confirmed positional match, not a family inference. Companion hardware
  figure to `ogas-cmp-odv-package-585cls` (Figure 13-6, prior page), which
  shows this same instrument mounted on the full valve/actuator package.
```

### Chapter 13 — Refrigerant Cycles: Propane Cycle (printed p. 13-6)

```yaml
id: ogas-cmp-propane-compressor-antisurge-diagram
teaches: >
  Process/instrumentation diagram of the three-stage propane compression
  train's antisurge recycle paths. Each of three propane compressor stages
  draws from its own propane flash drum; a numbered antisurge valve (①②③)
  on each stage recycles compressed gas from the stage's discharge back to
  its own suction (the flash drum inlet), with a shared header returning
  gas "TO EVAPORATORS, HEAT SINK FOR MR, FEED GAS, ETC." The numbered
  valves map directly onto the three "Propane Compressor Antisurge Valve"
  application-review entries (1st/2nd/3rd Stage) and Tables 13-3/13-4/13-5
  that immediately follow the figure on the same and facing pages.
concept-tags: [propane cycle, propane compressor, antisurge valve, propane flash drum, recycle, three-stage compression]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-8 (drawing number E1533,
      printed p. 13-6) — "Figure 13-8. Propane Compressor."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig8-propane-compressor-antisurge-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 156, printed p. 13-6) at 300 dpi, full diagram (three flash-drum/compressor/antisurge-valve stages, numbered ①②③, shared discharge header), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Chapter-opener figure for the "Propane Cycle" section (top of printed
  p. 13-6, above `ogas-cmp-dvc6200-odv-package-instrument` and the
  section's own text) — a confirmed positional match. The numbered
  callouts ①②③ are the source's own numbering and are kept as printed, per
  Style Guide §6.2 (a figure's own numbered key stays as drawn).
```

### Chapter 13 — Refrigerant Cycles: Mixed Refrigerant Cycle, individual stage compression (printed p. 13-7)

```yaml
id: ogas-cmp-mr-compressor-antisurge-diagram
teaches: >
  Process/instrumentation diagram of the two-stage mixed-refrigerant (MR)
  compression train's antisurge recycle paths — the MR-cycle counterpart
  to `ogas-cmp-propane-compressor-antisurge-diagram` (Figure 13-8). MR from
  the bottom of the MHE feeds a 1st-stage compressor (with KO drum and
  numbered antisurge valve ①), then a 2nd-stage compressor (KO drum,
  antisurge valve ②), then on to the HP MR separator; a third numbered
  valve (③) provides a shared recycle path across both stages. The
  numbered valves map directly onto the "1st/2nd Stage Mixed Refrigerant
  Compressor Antisurge Valve" application-review entries and Tables
  13-6/13-7 that immediately follow on the same and facing pages.
concept-tags: [mixed refrigerant cycle, MR compressor, antisurge valve, KO drum, HP MR separator, two-stage compression]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-9 (drawing number E1534,
      printed p. 13-7) — "Figure 13-9. Mixed Refrigerant Compressor."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig9-mixed-refrigerant-compressor-antisurge-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 157, printed p. 13-7) at 300 dpi, full diagram (both compressor stages, KO drums, numbered ①②③ antisurge valves, HP MR separator outlet), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Chapter-opener figure for the "Mixed Refrigerant Cycle: Individual Stage
  Compression" section (top of printed p. 13-7) — a confirmed positional
  match, the direct MR-cycle parallel to Figure 13-8's propane-cycle
  diagram one page prior. Numbered callouts ①②③ are the source's own
  numbering, kept as printed per Style Guide §6.2.
```

### Chapter 13 — Refrigerant Cycles: Mixed Refrigerant Cycle, representative hardware (printed p. 13-7)

```yaml
id: ogas-cmp-whisperflo-trim-disk-stack
teaches: >
  Isolated product illustration of a WhisperFlo trim disk stack — the
  curved, multi-plate labyrinth noise-attenuation trim referenced by name
  in Table 13-6/13-7's "Trim Type: Whisper III Trim or WhisperFlo Trim"
  entries for the MR-cycle antisurge valves. Shown as a standalone
  component (not in a valve cutaway), the same treatment
  `ogas-cmp-typical-compressor-map`-adjacent hardware figures in this
  chapter use for representative trim/hardware call-outs.
concept-tags: [WhisperFlo trim, disk stack, noise attenuation trim, antisurge valve trim, labyrinth trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-10 (drawing number X0266,
      printed p. 13-7) — "Figure 13-10. WhisperFlo Trim Disk Stack."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig10-whisperflo-trim-disk-stack.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 157, printed p. 13-7) at 300 dpi, full product illustration, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Positioned in the left column of printed p. 13-7, directly below
  `ogas-cmp-mr-compressor-antisurge-diagram` (Figure 13-9) — both entries
  on this page belong to the "Mixed Refrigerant Cycle: Individual Stage
  Compression" section; the trim named in this figure's caption is the
  same "Whisper III Trim or WhisperFlo Trim" specified in the adjacent
  Tables 13-6/13-7.
```

### Chapter 13 — Mixed Refrigerant Cycle: Hot Gas Bypass (printed p. 13-7, no figure)

```yaml
id: ogas-topic-hot-gas-bypass
kind: topic
teaches: >
  Some LNG plants add a hot gas bypass system for additional compressor
  protection beyond the per-stage antisurge valves — it recycles gas
  around the ENTIRE group of compressors, not just a single stage. It is
  not a design feature in every plant: it is only built in when the
  individual per-stage recycle loops and valves were not themselves sized
  to handle the full load during a major shut-in. It operates specifically
  during a shutdown of the whole refrigeration unit, when all flow must
  recycle around the compressors to keep them from tripping. Its valve
  (Table 13-8) must be large (typically NPS 20-24, potentially up to
  NPS 48) because it has to accommodate the full group capacity, and
  shares the antisurge valves' quick-opening, minimal-throttling
  requirements.
concept-tags: [hot gas bypass, compressor group protection, shut-in, major shutdown recycle]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 13 'LNG Liquefaction,' 'Mixed Refrigerant Cycle: Hot Gas Bypass' section, printed p. 13-7 (PDF p. 157)"
relatedFigures: []
relatedTopics: [ogas-topic-compressor-surge-mechanism]
used-by: []
notes: >
  This section has NO figure at all in the source — invisible to the
  original figures-only pass entirely; only Table 13-8 accompanies it.
  Confirmed by direct read of PDF p. 157, and by checking the existing
  figure list (Figures 13-1 through 13-11) has no entry between Figure
  13-10 (previous page) and Figure 13-11 (two pages later) that could
  belong here.
```

### Chapter 13 — Liquefaction (printed p. 13-9)

```yaml
id: ogas-cmp-common-valves-mhe-diagram
teaches: >
  Process/instrumentation diagram of the main heat exchanger (MHE) and the
  three valves commonly associated with it: natural gas from the scrubber
  and MR from both the bottom of the HP separator and the top of the
  separator all enter the MHE (shown as a tube-in-shell schematic with
  "TUBE" and "SHELL" leader-labelled); numbered valves ① and ② (the warm
  and cold Joule-Thomson valves) route MR back to the MR compressors and
  onward, while numbered valve ③ (the LNG temperature valve) routes the
  KO drum's output to nitrogen/light-ends fuel gas and LNG storage. The
  numbered valves map directly onto the "Liquefaction" section's three
  named valves (Warm Joule-Thomson, Cold Joule-Thomson, LNG Temperature)
  and Tables 13-9/13-10/13-11 that surround the figure.
concept-tags: [main heat exchanger, MHE, Joule-Thomson valve, warm JT valve, cold JT valve, LNG temperature valve, KO drum, tube and shell, liquefaction]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 13 "LNG Liquefaction," Figure 13-11 (drawing number E1535,
      printed p. 13-9) — "Figure 13-11. Common Valves Associated with the
      MHE."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch13-fig11-common-valves-mhe-diagram.png
    locator: "already extracted — cropped directly from the source PDF (PDF p. 159, printed p. 13-9) at 300 dpi, full diagram (MHE tube/shell schematic, all three numbered valves, KO drum, all labelled inlet/outlet blocks), drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Top of printed p. 13-9, opening the second half of the "Liquefaction"
  section (Table 13-9 "Warm Joule-Thomson Valve" closes out the prior page,
  13-8) — a confirmed positional match. Numbered callouts ①②③ are the
  source's own numbering, kept as printed per Style Guide §6.2. This is
  the chapter's final figure; Chapter 14 ("LNG Receiving Terminals") opens
  immediately after, on the next page.
```

### Chapter 13 — Liquefaction: Joule-Thomson expansion and cryogenic trim selection (printed pp. 13-8 to 13-9)

```yaml
id: ogas-topic-joule-thomson-expansion-and-trim-selection
kind: topic
teaches: >
  Three critical valves handle Liquefaction: warm and cold Joule-Thomson
  (JT) valves and the LNG temperature valve. Their primary function is to
  spray MR coolant onto the MHE bundles carrying feed gas and MR — the
  pressure drop through them cools the MR via the Joule-Thomson effect
  (cooling a fluid by pressure drop and expansion). The warm JT valve sees
  MR at ~−200°F (−130°C); the cold JT valve sees colder MR, ~−240°F
  (−150°C), because of the longer heat-exchanger pass beforehand. In both,
  the outlet fluid may be a liquid/vapor mix, so balanced cryogenic valves
  with correct trim are required: if a large fraction of refrigerant
  flashes to vapor as the valve sprays the bundles, drilled-hole or
  slotted trim in a flow-up orientation is used specifically to eliminate
  flashing-related noise, vibration, and erosion. The LNG temperature
  valve instead reduces LNG pressure so light-end gases (mostly N2) bubble
  out — since only small vapor amounts form downstream, the LNG mostly
  cavitates rather than flashes, so a Cavitrol trim is preferred (drilled-
  hole only when N2 rejection is high or the pressure drop is small).
  Some designs use expanders instead of JT/LNG-temperature valves as the
  main pressure-drop mechanism — expanders recover energy for auxiliary
  power and cool more efficiently, but the JT/LNG valve is then kept as
  a bypass/backup that must take over throttling duty if the expander
  trips, so it needs a comparable Cv to the expander for a smooth handoff.
concept-tags: [Joule-Thomson effect, warm JT valve, cold JT valve, LNG temperature valve, cryogenic trim, flashing, cavitation, balanced valve, expander backup]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 13 'LNG Liquefaction,' 'Liquefaction' section running text, printed pp. 13-8 to 13-9 (PDF pp. 158-159)"
relatedFigures: [ogas-cmp-common-valves-mhe-diagram]
relatedTopics: [ogas-topic-mixed-refrigerant-cycle, cvh-topic-cavitation, cvh-topic-flashing]
used-by: []
notes: >
  Real cross-book link: this section explicitly distinguishes flashing
  (drilled-hole/slotted trim) from cavitation (Cavitrol trim) by which one
  dominates in a given case — the exact mechanism distinction
  `cvh-topic-cavitation` and `cvh-topic-flashing` (Control Valve Handbook
  ch5, verified earlier this session) explain in general terms, applied
  here to a specific cryogenic service. Both ids confirmed to exist before
  citing. Confirmed by direct read of PDF pp. 158-159, including Table
  13-9 (Warm JT Valve) which has no figure of its own on PDF p. 158.
```

---

## Open items

- **First batch (Figures 13-1 through 13-6):** all six requested figures
  confirmed against the real page text and a 300 dpi page-image render
  before extraction; none were skipped or fabricated. PDF pages 152
  (printed 13-2, ×2), 153 (13-3), 154 (13-4, ×2), 155 (13-5). No gaps
  within that batch's range.
- **Chapter-boundary correction filed against the prior chapter's index:**
  `Component Index — Oil & Gas Sourcebook ch12.md` states Chapter 13
  begins mid-page on PDF p. 150; direct inspection this pass found
  Chapter 13 actually begins on its own fresh opener page, PDF p. 151.
  See the page-numbering note above for the full detail. Not corrected in
  the ch12 file itself — out of this batch's scope (Component-Index-only;
  not re-editing an existing chapter's already-written file) — flagged
  here for whoever next touches the ch12 file's boundary note.
- **Second batch (Figures 13-7 through 13-11):** all five requested
  figures confirmed against the real page text (`pdftotext -layout`) and
  a 300 dpi page-image render before extraction; none were skipped or
  fabricated. PDF pages 156 (printed 13-6, ×2: Figures 13-7 and 13-8),
  157 (printed 13-7, ×2: Figures 13-9 and 13-10), 159 (printed 13-9:
  Figure 13-11). Table 13-9 (Warm Joule-Thomson Valve, printed p. 13-8)
  has no accompanying figure on its page — confirmed by direct
  page-image render of PDF p. 158, not treated as a gap since no figure
  was requested there. This exhausts the chapter's full figure list
  (13-1 through 13-11); Chapter 14 begins immediately after, on the next
  page, with no visible footer folio (standalone opener convention,
  consistent with ch9–ch13's own openers).
- All eleven original figure records across both batches in this file are
  `used-by: []` — this is a proactive, use-driven-ahead catalog per
  `Source Library.md`; no course currently references them.
- **`kind: topic` pass, 2026-09-17:** full chapter re-read (PDF pp.
  151-159, `pdftotext -layout`), same rigor as the Control Valve Handbook
  topic-indexing pass just completed. 8 new topic entries added: LNG
  fundamentals, propane and MR refrigeration cycles, feed-gas letdown
  criticality, compressor surge mechanism, ODV package rationale, hot gas
  bypass, and Joule-Thomson expansion/cryogenic trim selection. Two of
  these (hot gas bypass, and the Warm JT Valve table on PDF p. 158) sit on
  pages with no figure at all — invisible to the original figures-only
  pass. One deliberate cross-book link: the JT/LNG-temperature trim
  selection topic cites `cvh-topic-cavitation`/`cvh-topic-flashing`
  (Control Valve Handbook ch5) — both verified to exist before citing, not
  assumed from memory. Every other section of the chapter's running text
  was checked and found to already be fully captured by an existing
  figure's own `teaches` field, so no further topic entries were added
  beyond these 8. Chapter's real component count is now 19 (11 figures +
  8 topics).
- No asset-variant-registry or `Curriculum —` writes were made from either
  batch — out of scope for a standing Component-Index-only cataloging
  pass.
