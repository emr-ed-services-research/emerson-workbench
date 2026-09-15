---
title: Component Index — Power & Severe Service Sourcebook ch9d
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch9D — Combined Cycle, Cogen, Simple Cycle
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 9D

**Chapter 9D — "Combined Cycle, Cogen, Simple Cycle."** Standing
library-cataloging pass (whole document, ahead of Control Valve Engineering
1/2 course-build need), per `Component Index — Process & Standards.md`'s
"standing full-chapter" trigger. Chapter boundaries confirmed directly by
rendering and reading the actual PDF pages: PDF page 159 is the "Chapter 9D"
divider (its own body carries only an efficiency/cost/availability
comparison table, not a figure), and PDF page 173 is the "Chapter 10 /
Materials Guidelines" divider. Chapter 9D = PDF pp. 159–172 (printed 9D-1
through 9D-14) — printed page 9D-14 (PDF p. 172) is a genuine blank trailing
page (page number printed, no body content), the same "blank page before
the next chapter divider" pattern already on record for Control Valve
Handbook ch6/ch7. Every page in the range was read directly.

This book has no extracted-figures crop folder — this pass catalogs
existence and location only, so each record's `source` carries a single
locator, matching `Component Index — Control Valve Handbook ch1.md`'s
record shape: `id` · `teaches` · `concept-tags` · `status` · `source`
(`doc` + `locator`) · `delivery` · `used-by` · `notes` · `mediaStatus`.

## Precedence

The Power & Severe Service Sourcebook is itself a **current** first-party
Fisher document (© 2001/2003/2004, Fourth Edition, D101449X012), held in
the Source Library's Industry Handbooks holdings alongside the Oil & Gas
Sourcebook — so every record below is `status: current`. No archive or
legacy material was consulted for this chapter. Two of the figures
(9D-1, 9D-2, 9D-7, 9D-8) carry the source's own third-party attribution
lines ("From Power Plant Engineering @ Black & Veatch," "From General
Electric. Used with Permission," "From Steam, Its Generation and Use @
Babcock & Wilcox," "from Combustion Fossil Power @ ABB") — these are
still `current`, first-party-licensed reprints within a current Fisher
document, not archive material; the attribution is preserved in each
record's own `notes` for citation accuracy.

## Components

### Chapter 9D — Introduction & Simple Cycle Plant Types (printed pp. 9D-1 – 9D-5)

```yaml
id: pss-cmp-gas-turbine-simple-cycle-diagram
teaches: >
  The simple-cycle gas turbine block diagram: compressor, combustor, and
  turbine driving a generator, with inlet air and exhaust gas flow paths
  labelled — introduces the basic gas-turbine thermal cycle before the
  chapter moves to combined-cycle and cogeneration configurations.
concept-tags: [simple cycle, gas turbine, compressor, combustor, turbine, generator, inlet air, exhaust gas]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-1 'Gas Turbine - Simple Cycle,' p. 9D-2"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Source attributes this figure "(From Power Plant Engineering @ Black &
  Veatch)" — a licensed third-party reprint within this current Fisher
  document, not archive material. Simple block diagram, not a cutaway —
  Style Guide §5 applies if placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-ms7000-gas-turbine-cutaway
teaches: >
  A full-length sectioned cutaway of a General Electric MS-7000 industrial
  gas turbine, labelling its four major sections in flow order: air inlet
  section, compressor section, combustion section, turbine section, and
  exhaust section — grounds the block-diagram concept of Figure 9D-1 in a
  real machine's actual internal construction.
concept-tags: [gas turbine, MS-7000, compressor section, combustion section, turbine section, exhaust section, industrial gas turbine]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-2 'Major Sections of the MS-7000 Gas Turbine,' p. 9D-2"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Source attributes this figure "(From General Electric. Used with
  Permission)" — a licensed third-party reprint, not archive material.
  Fully labelled sectioned line-art cutaway with its own printed field
  callouts (AIR INLET SECTION, COMPRESSOR SECTION, COMBUSTION SECTION,
  TURBINE SECTION, EXHAUST SECTION, FWD, AFT) — Style Guide §6.3 applies
  if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-fuel-gas-staged-combustion-diagram
teaches: >
  Fuel gas staged-combustion valve arrangement for a gas turbine: four
  parallel stages (Stage A, B, C, and Pilot), each with its own OST
  (over-speed trip) valve and stage throttle valve feeding a common fuel
  gas nozzle — the valve architecture behind the fuel-control discussion
  that follows in the body text, including the OST valves' role in turbine
  overspeed protection.
concept-tags: [fuel control, staged combustion, OST valve, stage throttle valve, fuel gas nozzle, gas turbine overspeed protection]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-3 'Fuel Gas Staged Combustion,' p. 9D-4"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A P&ID-style valve/flow schematic with its own printed labels (Stage A/B/
  C, Pilot, OST Valve, Stage Throttle Valve, Fuel Gas Nozzle) — Style Guide
  §6.3 applies if ever placed on a slide. Companion service-condition
  tables for fuel gas and fuel oil sit directly below this figure on the
  same page — reference tables, not catalogued (see Open Items).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-power-augmentation-diagram
teaches: >
  Power-augmentation steam-injection valve arrangement: a PA (power
  augmentation) throttle valve and PA isolation valve in series, feeding
  steam pulled from the cold reheat line into the power augmentation
  manifold that injects it into the turbine blades to increase mass flow,
  output, and efficiency.
concept-tags: [power augmentation, PA throttle valve, PA isolation valve, cold reheat, steam injection, turbine blades, combined cycle]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-4 'Power Augmentation,' p. 9D-4"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A P&ID-style valve/flow schematic with its own printed labels (PA
  Throttle, PA Isolation, From Cold Reheat, Power Augmentation Manifold) —
  Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-nox-formation-vs-temperature-graph
teaches: >
  NOx formation rate plotted against flame temperature (°F): a sharply
  rising curve above roughly 2800°F — the technical rationale for water/
  steam injection as a flame-temperature-lowering, emissions-control
  technique discussed in the surrounding text.
concept-tags: [NOx formation, flame temperature, emissions control, water injection, steam injection, combustion]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-5 'NOx Formation vs. Temperature,' p. 9D-5"
delivery: analytical graph — falls under Style Guide §5 / not yet determined
used-by: []
notes: >
  An analytical x-y graph (shaded region under a rising curve), not a
  cutaway or schematic — Style Guide §5 (diagram & graph conventions)
  applies if ever placed on a slide, not §6's nomenclature/callout rules.
mediaStatus: unreviewed
```

---

### Chapter 9D — Combined Cycle & Co-Generation (printed pp. 9D-6 – 9D-9)

```yaml
id: pss-cmp-combined-cycle-generation-diagram
teaches: >
  The full combined-cycle plant flow diagram: a gas turbine (compressor +
  combustor + turbine + generator) exhausts through an HRSG (heat recovery
  steam generator) with HP and LP drums/superheaters/evaporators/
  economizers, producing steam that drives a steam turbine + generator,
  with condenser, deaerator, condensate pump, and LP/HP boiler feed pumps
  completing the loop — the chapter's core "what is combined cycle"
  reference figure.
concept-tags: [combined cycle, gas turbine, HRSG, heat recovery steam generator, HP drum, LP drum, steam turbine, condenser, deaerator, boiler feed pump]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-6 'Gas Turbine Generation Cycles - Combined Cycle,' p. 9D-6"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Source attributes this figure "(from Power Plant Engineering @ Black &
  Veatch)" — a licensed third-party reprint, not archive material. Dense,
  fully labelled process schematic — a strong Style Guide §5 redraw
  candidate if ever placed on a slide given its density.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-finned-tubes-diagram
teaches: >
  Finned-tube heat-exchanger construction inside an HRSG: flue gas flowing
  across banks of finned tubes bounded by an enclosure wall and baffle,
  with a dead-space clearance allowance for thermal expansion — explains
  why HRSGs use finned tubes (to maximize surface area and heat transfer
  from lower-temperature exhaust gas) versus a conventional fossil boiler.
concept-tags: [finned tubes, HRSG, heat exchanger, flue gas, thermal expansion clearance, heat transfer]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-7 'Finned Tubes,' p. 9D-7"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Source attributes this figure "(From Steam, Its Generation and Use @
  Babcock & Wilcox)" — a licensed third-party reprint, not archive
  material. Labelled cross-section line-art (Enclosure Wall, Baffle, Flue
  Gas, Finned Tubes, Dead Space, Minimum Clearance for Thermal Expansion)
  — Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-hrsg-duct-burner-cutaway
teaches: >
  A full isometric cutaway of a heat recovery steam generator (HRSG) fitted
  with a duct burner: labels the integral deaerator storage drum, high
  pressure steam drum, high-pressure superheater outlet, high-pressure
  superheater, high-pressure bank, intermediate pressure bank, high- and
  intermediate-pressure economizers, low pressure bank, feed preheater, and
  duct burner — shows the internal tube-bank arrangement referenced in the
  surrounding "HRSGs vary widely in construction" discussion.
concept-tags: [HRSG, duct burner, high pressure steam drum, deaerator, economizer, superheater, feed preheater, low pressure bank]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-8 'Heat recovery steam generator with duct burner,' p. 9D-8"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Source attributes this figure "(from Combustion Fossil Power @ ABB)" — a
  licensed third-party reprint, not archive material. Fully labelled
  isometric line-art cutaway with its own printed field callouts — Style
  Guide §6.3 applies (nomenclature source, not re-marked with numbered
  circles) if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-cogeneration-cycle-diagram
teaches: >
  A cogeneration plant flow diagram: a gas turbine (compressor + combustor
  + turbine + generator) exhausts through an HRSG that produces process
  steam for off-site export as well as driving the loop's own feedwater
  system — illustrates cogeneration's defining trait of producing two
  saleable products (steam and electricity) from one fuel input.
concept-tags: [cogeneration, process steam export, gas turbine, HRSG, boiler feed pump, feedwater]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-9 'Gas turbine generation cycles - co-generation,' p. 9D-9"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Source attributes this figure "(from Power Plant Engineering @ Black &
  Veatch)" — a licensed third-party reprint, not archive material. Labelled
  process-flow block schematic (Process Steam, Exhaust Gas, Feedwater,
  Boiler Feed Pump) — Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

---

### Chapter 9D — Combined Cycle Application Discussion (printed pp. 9D-10 – 9D-13)

```yaml
id: pss-cmp-turbine-bypass-system-reheat-diagram
teaches: >
  A conventional turbine-bypass system with reheat capability: HP and IP
  bypass valves route steam around the HP and IP/LP turbines to the
  condenser during startup/shutdown, with an LP bypass valve handling full
  low-pressure steam load — the configuration is noted as specifically
  preventing boilout in the reheat section of the HRSG.
concept-tags: [turbine bypass system, HP bypass valve, IP bypass valve, LP bypass valve, reheat, condenser, HRSG boilout prevention]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-10 'With reheat Turbine bypass system,' p. 9D-11 — drawing E0828"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Labelled valve/flow schematic (HP/IP/LP Turbine, HP/IP/LP Bypass Valve,
  Condenser) with its own printed annotation callout explaining the
  reheat-boilout-prevention rationale — Style Guide §6.3 applies if ever
  placed on a slide. Pairs with `pss-cmp-hp-vent-startup-system-diagram`
  (Figure 9D-11) as the two turbine-bypass/startup-system schematics on
  facing pages.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-hp-vent-startup-system-diagram
teaches: >
  An HP vent startup system: an HP safety vent valve and HP startup vent
  valve route steam to an HP silencer to warm the bypass valves before
  admitting steam to the HP bypass valve, alongside the HP turbine, IP
  bypass valve, and condenser — the startup-vent role of bypassing steam
  directly to atmosphere before the bypass valves themselves see steam.
concept-tags: [startup vent, HP safety vent valve, HP startup vent valve, HP silencer, HP bypass valve, IP bypass valve, condenser]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-11 'HP vent startup system,' p. 9D-11 — drawing E0829"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Labelled valve/flow schematic — Style Guide §6.3 applies if ever placed
  on a slide. Companion to `pss-cmp-turbine-bypass-system-reheat-diagram`
  (Figure 9D-10); both sit on the same source page (PDF p. 170).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-whisperflo-vent-diffuser-photo
teaches: >
  A production photo of the Fisher WhisperFlo vent diffuser: a perforated
  cylindrical diffuser element bolted to a valve outlet flange — the
  chapter's recommended noise-attenuation device for startup/turbine-bypass
  vent-to-atmosphere service, said to provide an additional 10 dBA of
  attenuation versus prior offerings at roughly 35% the size and weight of
  an equivalent drilled-hole device.
concept-tags: [WhisperFlo, vent diffuser, noise attenuation, startup vent, drilled hole device]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-12 'WhisperFlo vent diffuser,' p. 9D-12 — drawing W8037"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A production photo, not a labelled cutaway — no printed field callouts.
  Two service-condition tables (HP/IP/LP Vent, HP/IP-HRH/LP Bypass) sit
  below this figure on the same page — reference tables, not catalogued
  (see Open Items).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-condensate-system-diagram
teaches: >
  The combined-cycle condensate system: condensate from the LP-turbine
  condenser hot well is recirculated by the condensate pump recirculation
  valve back to the hot well (to protect the condensate pump from
  cavitation via net positive suction head) while the main condensate flow
  proceeds to the preheater, with IP/LP spray water shown entering the
  condenser.
concept-tags: [condensate system, condensate pump recirculation valve, net positive suction head, cavitation protection, hot well, preheater]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9D-13 'Condensate system,' p. 9D-13"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  The last figure in Chapter 9D — printed page 9D-14 (PDF p. 172) is a
  genuine blank trailing page (page number printed, no body content, no
  figure) before Chapter 10 begins on PDF p. 173. Labelled valve/flow
  schematic (Condenser, Hot Well, Condensate Pump Recirculation Valve, To
  Preheater, IP/LP Spray Water) — Style Guide §6.3 applies if ever placed
  on a slide.
mediaStatus: unreviewed
```

---

## Open Items

- **Chapter boundary** — confirmed directly by rendering: PDF p.159 is the
  Chapter 9D divider (a comparison table, no figure), PDF p.173 is the
  Chapter 10 divider. Chapter 9D = PDF pp.159–172 (printed 9D-1 through
  9D-14) inclusive. Printed p.9D-14 (PDF p.172) is a genuine blank trailing
  page — confirmed by direct render, same pattern as the CVH ch6/ch7
  precedent — not a missed figure.
- **Full coverage accounting**: thirteen numbered figures in range (9D-1
  through 9D-13), all thirteen catalogued. No gaps.
- **Low-confidence flags**: none. Every figure identity, caption, and page
  was confirmed against the rendered image directly.
- **Duplicate-figure-number / source-citation-error findings**: none found
  in this chapter.
- **Table exclusion**: several numbered/unnumbered reference tables were
  excluded, all confirmed table-shaped (not figure-numbered): the Chapter
  9D divider's own "Unit Efficiency by Type / Capital Investment per KW /
  Availability in Percent" comparison table (p.159); fuel gas/fuel oil
  service-condition tables (p.162, under Figure 9D-3); power-augmentation
  throttle/isolation-valve tables (p.163, under Figure 9D-4, repeated
  p.164); fuel-oil-water-injection and turbine-lube-oil tables (p.164);
  feedwater-system pressure/configuration tables (p.169, ×2); and the two
  WhisperFlo vent/bypass service-condition tables (p.171, under Figure
  9D-12). None are figure-numbered, so none qualify for cataloguing under
  the figures-only rule.
- **Cross-reference findings**: no overlap found against Oil & Gas
  Sourcebook ch1 or other material already in context — this chapter's
  content (geothermal/combined-cycle/cogeneration plant systems) is
  genuinely unique to the Power & Severe Service book's industry-specific
  section, unlike the shared-fundamentals chapters (1–6) which are more
  likely to overlap with other sourcebooks' front matter.
- **Archive/legacy material**: none consulted, none needed — this is a
  first-party current Fisher document throughout. Four figures (9D-1,
  9D-2, 9D-7, 9D-8) carry the source's own third-party licensed-reprint
  attributions (Black & Veatch, General Electric, Babcock & Wilcox, ABB) —
  noted in each record's own `notes`, still `status: current` since they
  are licensed reprints within a current first-party document, not archive
  material.
