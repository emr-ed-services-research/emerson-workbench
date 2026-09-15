---
title: Component Index — Power & Severe Service Sourcebook ch9a
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch9A — Conventional Power
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 9A

**Chapter 9A — "Conventional Power."** Standing library-cataloging pass,
part of resuming the whole-document indexing of the Power & Severe Service
Sourcebook (the earlier pass completed chapters 1–7, 9C, 9D, 12–14; this
pass fills the confirmed gaps: 8, 9A, 9B, 10, 11), per `Component Index —
Process & Standards.md`'s "standing full-chapter" trigger. Every real page
in the chapter's confirmed range was rendered at 150dpi and read directly.

Chapter boundaries confirmed directly by rendering: PDF page 105 is the
"Chapter 9A / Conventional Power" divider, real content runs through PDF
page 120 (printed p. 9A-16, "Ash Handling"), and PDF page 121 is immediately
the "Chapter 9B / Sliding Pressure Control" divider — zero page offset
against the chapter's own printed numbering (9A-1 through 9A-16), no
trailing blank page.

Unlike Chapter 8, this chapter uses the book's normal numbered-figure
convention throughout (`Figure 9A-N`). All figures are from `20 - Source
Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Power &
Severe Service.pdf`. No extracted-figures crop folder exists for this book
— each record's `source` carries a single locator. Every record's `used-by`
is `[]`.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition
(D101449X012), is itself a **current** first-party Fisher/Emerson document,
so every record below is `status: current`. No archive or legacy material
was consulted.

## Components

### Chapter 9A — Introduction and Condensate System (printed pp. 9A-1 – 9A-3)

```yaml
id: pss-cmp-fossil-plant-severe-service-valve-map
kind: figure
teaches: >
  A complete fossil-plant steam-cycle schematic locating all 11 key severe-
  service control-valve applications the chapter will cover: superheaters,
  HP/LP turbines, reheater, emergency heater drain valves, deaerator,
  economizer, feedwater heaters, condenser, and condensate/boiler-feedwater
  pumps — the chapter's own orienting map, referenced explicitly by the
  chapter's introduction as the figure "discussed in detail by application."
concept-tags: [conventional power, severe service valve applications, steam cycle overview, condensate system, feedwater system, main steam system, heater drain system]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-1 'The steam cycle of a fossil power plant has control valves in 11 key severe service applications. Valves shown in this diagram will be discussed in detail by application,' p. 9A-2 — drawing E0121"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Dense, fully labelled process schematic (superheaters, HP/LP turbine,
  reheater, emergency heater drain, deaerator, economizer, condenser, hot
  well, boiler/condensate/feedwater pumps) — a strong Style Guide §5 redraw
  candidate if ever placed on a slide given its density. Opens the chapter;
  every later figure in this chapter zooms into one part of this map.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-condensate-system-two-valve-schematic
kind: figure
teaches: >
  The condensate system's two key control valves located in one schematic:
  the condensate pump recirculating valve (protects the condensate pump from
  overheating/cavitation at low flow) and the deaerator level control valve
  (DALC, needs high rangeability to handle widely varying flows/temperatures
  from startup through full load) — distinguishes the two valves' very
  different service-condition challenges even though both handle the same
  fluid.
concept-tags: [condensate system, condensate recirculation valve, deaerator level control valve, DALC, cavitation protection, rangeability]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-2 'The condensate system employs two key control valves. The condensate recirculation valve requires cavitation protection. The deaerator level control valve is distinguished by its need for high rangeability,' p. 9A-3 — drawing E0122"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled (CONDENSER, HOT WELL, CONDENSATE PUMP, DEAERATOR LEVEL CONTROL VALVE, CONDENSATE PUMP RECIRCULATING VALVE).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-dalc-pressure-drop-vs-load-graph
kind: figure
teaches: >
  Why the deaerator level control valve needs both cavitation protection AND
  high capacity in the same valve: pressure head vs. plant load, showing the
  condensate-pump curve (≈P1) diverging sharply from the deaerator-
  pressure-plus-system-loss curve (≈P2) at startup (high ΔP, cavitating
  liquid, low flow) while the two curves converge at full capacity (low ΔP,
  not cavitating, high flow required) — the graphical basis for the DALC
  valve's dual-mode sizing challenge.
concept-tags: [DALC valve, pressure drop, plant load, cavitation, condensate pump curve, valve sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-3 'A decrease in pressure drop across the DALC Valve is experienced as load increases. At startup, cavitation may occur, thus protection is indicated. At higher loads, the pressure drop decreases, calling for high flow capacity,' p. 9A-3"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: An analytical x-y graph, not a cutaway or schematic.
mediaStatus: unreviewed
```

### Chapter 9A — Feedwater System (printed pp. 9A-4 – 9A-9)

```yaml
id: pss-cmp-design-et-cavitrol-condensate-recirc-valve
kind: figure
teaches: >
  The recommended condensate-pump-recirculation valve hardware: the Design
  ET globe valve with Cavitrol III two-stage characterized trim (shown as a
  two-image pair — a close-up of the drilled-hole characterized cage insert,
  and the fully assembled valve) — provides both cavitation protection at
  low travel and unrestricted flow capability at high travel, satisfying the
  chapter's stated ANSI Class V tight-shutoff requirement.
concept-tags: [Design ET, Cavitrol III trim, characterized trim, condensate pump recirculation valve, tight shutoff, ANSI Class V]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-4 'The Design ET with Cavitrol trim is recommended for condensate pump recirculation applications. Its drilled hole trim gives protection from cavitation damage. Tight shutoff is also featured,' p. 9A-4 — drawings W3708-1 (trim detail) and W2174 (assembled valve)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Two-image figure (trim cage close-up + full assembled valve) under one caption — catalogued as one record matching the source's own single-figure treatment.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-ewnt1-dalc-valve
kind: figure
teaches: >
  The recommended deaerator-level-control-valve hardware: the Design EWNT-1
  globe valve, engineered for minimal flow resistance at high loads while
  still providing cavitation protection for low-load startup/operation — the
  physical valve answering the sizing challenge shown in Figure 9A-3.
concept-tags: [Design EWNT-1, DALC valve, deaerator level control, cavitation protection, low flow resistance]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-5 'The Design EWNT-1 is typical of globe valves used for DALC service. Flow resistance is minimal at high loads and cavitation protection is provided for low load operation and startup,' p. 9A-5 — drawing W3310"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo of the assembled valve.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-feedwater-system-three-valve-schematic
kind: figure
teaches: >
  The feedwater system's three critical service valves located in one
  schematic: the boiler feedwater startup valve, the boiler feedwater
  regulator valve, and the boiler feedwater recirculation valve — the text
  notes these handle the same fluid but see very different pressure-drop
  severity and duty cycles from one another.
concept-tags: [feedwater system, boiler feedwater startup valve, boiler feedwater regulator valve, boiler feedwater recirculation valve, deaerator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-6 'The feedwater system includes three critical service valves: the feedwater recirculation valve, the feedwater regulator, and the feedwater startup valve. While the valves handle the same fluid, the pressure drop and severity of each application vary greatly,' p. 9A-6 — drawing E0124"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled (BOILER FEEDWATER STARTUP VALVE, BOILER FEEDWATER REGULATOR VALVE, BOILER FEEDWATER RECIRCULATION VALVE, DEAERATOR, BOILER FEEDWATER PUMP).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-cav4-four-stage-anticavitation-trim-cutaway
kind: figure
teaches: >
  The Design CAV 4's four-stage anti-cavitation trim construction, for
  boiler-feedpump-recirculation pressure drops up to 6500 psi: the staged
  trim design is engineered to take the pressure drop away from the valve's
  seating surfaces, protecting shutoff integrity from the extreme-energy
  cavitation this application generates.
concept-tags: [Design CAV 4, four-stage anti-cavitation trim, boiler feedpump recirculation, extreme pressure drop, seating protection]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-7 'The CAV 4 is designed for boiler feedpump recirculation use with pressure drops to 6500 psi. It has four-stage, anti-cavitation trim, which is designed to take the pressure drop away from seating surfaces,' p. 9A-6 — drawing W3668"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully sectioned cutaway showing internal stacked-stage trim construction — no printed field callouts beyond the caption.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-ehd-feedwater-regulator-valve
kind: figure
teaches: >
  The recommended high-capacity feedwater-regulator-valve hardware: the
  large Design EHD, whose modified equal-percentage characteristic provides
  both the high capacity and the large turndown ratio this application
  requires (feedwater flow control from startup through full load in a
  drum-style boiler).
concept-tags: [Design EHD, feedwater regulator valve, modified equal percentage, high capacity, turndown ratio]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-8 'The Design EHD is recommended for feedwater regulator service. It has high capacity and good rangeability with modified equal percentage characteristic,' p. 9A-7 — drawing W2992-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo of the assembled valve.
mediaStatus: unreviewed
```

### Chapter 9A — Main Steam System (printed pp. 9A-9 – 9A-11)

```yaml
id: pss-cmp-main-steam-system-five-valve-schematic
kind: figure
teaches: >
  The main steam system's five critical service control valves located in
  one schematic: the superheater attemperator spray valve, the soot blower
  valve, the deaerator pegging steam valve, the turbine bypass valve, and
  the reheater attemperator spray valve — spans from the boiler outlet
  through primary/secondary superheaters and the reheater to the HP/LP
  turbines, the chapter's map for this system the same way Figure 9A-1 maps
  the whole plant.
concept-tags: [main steam system, superheater attemperator spray valve, soot blower valve, deaerator pegging steam valve, turbine bypass valve, reheater attemperator spray valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-9 'The main steam system features five critical service control valves,' p. 9A-8 — drawing E0125"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully labelled system schematic (PRIMARY/SECONDARY SUPERHEATER, TURBINE BYPASS VALVE, REHEATER, SOOT BLOWER VALVE, DEAERATOR PEGGING STEAM VALVE, SUPERHEATER/REHEATER ATTEMPERATOR SPRAY VALVE) — Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-small-hps-microform-trim-superheater-spray-valve
kind: figure
teaches: >
  The recommended superheater-attemperator-spray-valve hardware, shown as a
  two-part figure: a small Design HPS valve with Micro-Form trim (assembled)
  and its internal Micro-Form trim cutaway — Micro-Form trim suits the small
  flow rates of this application while giving an excellent control
  characteristic and the tight shutoff needed to eliminate unwanted
  spraywater flow.
concept-tags: [Design HPS, Micro-Form trim, superheater attemperator spray valve, tight shutoff, small flow control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-10A & 10B 'Small Design HPS valves with Micro-Form trim are commonly used for superheater attemperator spray valves. Tight shutoff is required,' p. 9A-9 — drawings W3387 (assembled valve) and W5817 (Micro-Form trim cutaway)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  One joint caption ("9A-10A & 10B") covering both panels — catalogued as
  one record, matching the source's own single joint-figure treatment
  (distinct from Chapter 7's Figure 7-4A–D, where four separately-lettered
  panels each show a genuinely different product and were catalogued
  separately).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-microflat-plug-cavitrol-reheater-spray-trim
kind: figure
teaches: >
  Special trim engineered for the reheater attemperator spray valve's much
  harsher service (lower reheat-line pressure means much higher pressure
  drop across the spray valve than the superheater spray valve sees, with
  high cavitation likelihood at very low flows): the Micro-Flat plug
  combined with Cavitrol two-stage trim, shown in a detailed sectioned
  cutaway.
concept-tags: [Micro-Flat plug, Cavitrol trim, reheater attemperator spray valve, high pressure drop, cavitation, low flow control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-11 'The high pressure drops encountered in reheat attemperator spray applications require special trim design. The Micro-Flat plug combined with Cavitrol two-stage trim is recommended,' p. 9A-10 — drawing W5624"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Detailed sectioned trim cutaway, photorealistic shaded rendering.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-heater-drain-system-four-heater-schematic
kind: figure
teaches: >
  A four-heater feedwater-heater-drain train diagram: extraction steam feeds
  four successive shell-and-tube heaters, each with its own heater drain
  valve and high-level dump line, cascading condensate down from heater to
  heater until the last one dumps to the condenser (fed in turn by the
  condensate pump) — the physical arrangement behind the Heater Drain System
  discussion that follows.
concept-tags: [heater drain system, feedwater heater, heater drain valve, high level dump, extraction steam, condenser]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-12 (caption reads only 'Figure 9A-12.', no descriptive text printed), p. 9A-10 — drawing E0126"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  LOW-CONFIDENCE FLAG: the source prints only the bare caption "Figure
  9A-12." with no descriptive sentence — confirmed directly against the
  rendered page, the same anomaly already on record for this book's Chapter
  7 Figure 7-9 and (per that record's own notes) not a rendering/OCR
  artifact. The figure's own printed labels (Heater Drain Valve, High Level
  Dump, Extraction Steam, To Deaerator, To Condenser, From Condensate Pump)
  make its content fully legible regardless.
mediaStatus: unreviewed
```

### Chapter 9A — Turbine Bypass Valves (printed pp. 9A-11 – 9A-13)

```yaml
id: pss-cmp-tbx-t-hp-bypass-valve-cutaway
kind: figure
teaches: >
  The Type TBX-T high-pressure turbine bypass valve's internal construction:
  spraywater is introduced from multiple nozzles into the radial steam flow
  to provide efficient mixing, cooling high-pressure/high-temperature steam
  to a temperature slightly above the HP turbine exhaust temperature so it
  can safely protect the reheater section during a turbine trip or startup
  without requiring a boiler trip.
concept-tags: [Type TBX-T, high pressure turbine bypass, spraywater mixing, radial steam flow, reheater protection]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-13 'Type TBX-T turbine by-pass valve. Spraywater is introduced from multiple nozzles in the radial steam flow to provide efficient mixing,' p. 9A-12 — drawing W8493-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully sectioned cutaway showing internal spray-nozzle arrangement.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-tbx-t-lp-bypass-valve-photo
kind: figure
teaches: >
  The Type TBX-T as used for low-pressure turbine bypass / condenser dump
  service, shown as an assembled production valve with handwheel and
  actuator instrumentation: features maximum desuperheating spraywater
  capacity to ensure condenser protection, since temperature control here is
  secondary to guaranteeing the condenser never sees excessive temperature.
concept-tags: [Type TBX-T, low pressure turbine bypass, condenser dump, desuperheating spraywater capacity, condenser protection]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-14 'Type TBX-T features maximum desuperheating spraywater capacity to ensure condensor protection,' p. 9A-12 — drawing W8740-2A"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo of the assembled valve with handwheel and actuator/instrumentation stack.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-turbine-bypass-system-hp-lp-schematic
kind: figure
teaches: >
  A complete typical turbine-bypass system schematic showing both high- and
  low-pressure bypass applications together: HP bypass valve (with HP spray
  valve) routes cold reheat steam around the HP turbine back to the
  reheater, while the LP bypass valve (with LP spray valve) routes hot
  reheat steam around the LP turbine directly to the condenser — spray
  water flow, steam flow, and the turbine bypass path are each distinguished
  with their own line-style legend.
concept-tags: [turbine bypass system, HP bypass valve, LP bypass valve, HP spray valve, LP spray valve, reheat steam, condenser]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-15 'Schematic of typical turbine by-pass system featuring both high pressure and low pressure by-pass application,' p. 9A-14 — drawing A5551"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully labelled with its own line-type legend (Spray Water Flow / Steam Flow / Turbine Bypass Path) — Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

### Chapter 9A — Heater Drain System and Scrubber Slurry (printed pp. 9A-15 – 9A-16)

```yaml
id: pss-cmp-design-v500-heater-drain-valve-photo
kind: figure
teaches: >
  The Design V500 (rotary eccentric-plug valve, with actuator/positioner
  instrumentation) as Fisher's recommended solution for erosive/flashing
  low-pressure heater-drain and ash/scrubber-slurry service — the physical
  valve behind the surrounding text's discussion of level-3 trim, sealed
  bearings, and reverse-flow orientation for erosion resistance.
concept-tags: [Design V500, heater drain valve, flashing service, erosion resistance, scrubber slurry, ash slurry]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-16 'The Design V500 is recommended for erosive and flashing applications found on low pressure heater drains and on slurries of ash or scrubber by-products,' p. 9A-15 — drawing W8380"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo of the assembled valve with actuator and positioner.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-hp-heater-drain-two-heater-schematic
kind: figure
teaches: >
  A two-heater high-pressure heater drain system diagram, showing extraction
  steam feeding two successive HP feedwater heaters (each with its own
  heater drain valve and high-level dump), the drain path routed to the
  H.P. heater drain pump (D.A.), and the economizer receiving feedwater from
  the feed pumps — illustrates the "difficult combination of high pressure
  and flashing fluid" the text says makes oversized end globe valves
  generally necessary here.
concept-tags: [heater drain system, high pressure heater drain, feedwater heater, heater drain pump, economizer, extraction steam]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9A-17 'The high pressure heater drain system provides a difficult combination of high pressure and flashing fluid. Use of oversized end globe valves is generally recommended,' p. 9A-15 — drawing E0127"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully labelled system schematic (To Economizer, Extraction Steam, Heater Drain Valve, High Level Dump, To H.P. Heater Drain Pump (D.A.), From Feedwater Pumps).
mediaStatus: unreviewed
```

---

## Open Items

- **Chapter boundary**, confirmed directly: Chapter 9A divider = PDF p. 105;
  Chapter 9B divider = PDF p. 121. Chapter 9A = PDF pp. 105–120 (printed pp.
  9A-1 through 9A-16), zero page offset, no trailing blank page. Every page
  in range was rendered at 150dpi and read directly.
- **Full coverage accounting**: Figures 9A-1 through 9A-17 — 17 printed
  figure numbers (9A-10 carries a joint "A & B" two-panel caption, counted
  as one). All 17 accounted for; 18 records minted (one figure number,
  9A-1, generated one map-level record, and every other figure number
  generated exactly one record except 9A-10A&10B, bundled as one per the
  source's own joint caption). No gaps.
- **Low-confidence flags**: Figure 9A-12 (p. 9A-10) prints only the bare
  caption "Figure 9A-12." with no descriptive sentence — the same anomaly
  already on record for this book's Chapter 7 Figure 7-9, confirmed
  directly against the rendered page, not a text-extraction artifact.
  Flagged in that record's own `notes`.
- **Duplicate-figure-number / source-citation-error findings**: none found.
  Figure 9A-10's "A & B" two-panel joint caption is a real, intentional
  source convention (distinct from Chapter 7's four separately-lettered,
  separately-product Figure 7-4A–D) — catalogued as one record since the
  source itself captions both panels jointly as one figure.
- **Table-exclusion confirmation**: no numbered tables were found anywhere
  in this chapter's range (confirmed by direct page-by-page reading) — this
  is an application-discussion chapter (valve selection narrative plus
  typical service-condition parameter lists), not a specification-table
  chapter.
- **Cross-reference findings**: checked against `Component Index — Power &
  Severe Service Sourcebook ch7.md` and `ch9c.md`/`ch9d.md` (already in this
  pass's context) — no shared drawing numbers or duplicated content found.
  This chapter's application-specific valve recommendations (Design ET,
  EWNT-1, EHD, CAV4, HPS, V500, TBX-T) are conventional-power-plant-specific
  and did not obviously overlap with the Oil & Gas Sourcebook's own chapter
  1 content checked in this book's own Chapter 1 file. No Control Valve
  Handbook cross-reference was checked in this pass (left for the closing
  whole-library sweep, per standing practice).
- **Archive/legacy material**: none consulted, none needed — first-party
  current Fisher/Emerson document throughout.
