---
title: Subject-Matter Index — Power & Severe Service Sourcebook ch9d
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch9D — Combined Cycle, Cogen, Simple Cycle
updated: 2026-09-14
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 9D

**Chapter 9D — "Combined Cycle, Cogen, Simple Cycle."** Standing
library-cataloging pass (whole document, ahead of Control Valve Engineering
1/2 course-build need), per `Subject-Matter Index — Process & Standards.md`'s
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
locator, matching `Subject-Matter Index — Control Valve Handbook ch1.md`'s
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

```yaml
id: pss-topic-simple-cycle-economics-and-tradeoffs
kind: topic
teaches: >
  Simple-cycle gas turbine plants trade lower efficiency (<30%, versus 50%
  for combined cycle and 30-35% for conventional steam turbines) for real
  economic advantages that make them the standard peaking-unit choice:
  roughly a quarter the capital cost per kW of a conventional coal-fired
  unit (~$250/kW vs. >$1000/kW), construction periods as short as six
  months, a very small footprint from their compact modular construction,
  fast start-up/ramp rates, and excellent cycling capability — advantages
  that matter specifically because peaking units run under 1000 hours per
  year, where the coal-fired unit's better fuel efficiency and lower fuel
  cost are outweighed by its much higher operating/maintenance cost. Fuel
  cost is 60-70% of any generating unit's total operating cost, the single
  largest factor; other factors (maintenance, personnel, capital cost,
  plant type, base-load vs. peaking duty) also contribute. Simple-cycle
  disadvantages are the mirror image of its advantages: lower efficiency,
  higher-cost fuels (natural gas/distillate), and gas-supply uncertainty
  during peak heating/cooling seasons. Manning is correspondingly low —
  some installations run fully remote, unmanned; a one-shift peaking
  operation needs only 6-10 personnel.
concept-tags: [simple cycle, economics, capital cost, operating cost, fuel cost, peaking unit, capacity factor, manning]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Introduction / Cost to Operate / Plant Types / Manning, pp. 9D-1 – 9D-3 — prose, not figure-anchored"
relatedFigures: [pss-cmp-gas-turbine-simple-cycle-diagram]
relatedTopics: [pss-topic-gas-turbine-thermal-cycle]
used-by: []
notes: >
  Read directly from the real running prose (PDF pp. 159-161), not
  inferred from any figure caption — this is the chapter's own economic
  framing for why simple-cycle plants exist at all, distinct from the
  mechanism content in the next topic entry.
```

```yaml
id: pss-topic-gas-turbine-thermal-cycle
kind: topic
teaches: >
  The gas turbine's actual thermal cycle mechanism, beyond what Figure
  9D-2's labelled cutaway shows: air enters the compressor section and is
  raised to several times atmospheric pressure (>100 psig) and several
  hundred degrees above ambient (>800°F) purely from compression; this
  compressed, heated air is mixed with fuel in the combustion chambers and
  ignited, raising the temperature further (>2000°F); the combustion gases
  then expand through the turbine section, converting thermal energy to
  mechanical energy that drives both the compressor and the generator —
  typically 30-50% of the turbine section's own power output is consumed
  just driving its own compressor, with the remainder driving the
  generator. Exhaust gas leaving the turbine is typically 900-1300°F, hot
  enough to be useful downstream in a combined-cycle HRSG. Aircraft-derived
  turbines (typically <20 MW, jet-engine-based, used for smaller/lightweight
  packages) and industrial turbines (more rugged, capable of lower-grade
  distillate fuels, over 200 MW in current designs, lower cost per kW, better
  emissions) are the two commercial design lineages.
concept-tags: [gas turbine, thermal cycle, compressor, combustion, expansion, exhaust temperature, aircraft-derived turbine, industrial turbine]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Plant Types / Simple Cycle, pp. 9D-2 – 9D-3 — prose beyond Figure 9D-2's own caption"
relatedFigures: [pss-cmp-gas-turbine-simple-cycle-diagram, pss-cmp-ms7000-gas-turbine-cutaway]
relatedTopics: [pss-topic-simple-cycle-economics-and-tradeoffs, pss-topic-fuel-control-and-overspeed-protection]
used-by: []
notes: >
  Read directly from the real running prose (PDF p. 160). Figure 9D-2's
  own `teaches` field describes the cutaway's labelled sections; this entry
  captures the actual physical mechanism (why compression heats the air,
  where the power split goes) that the figure shows but does not explain
  in words.
```

```yaml
id: pss-topic-fuel-control-and-overspeed-protection
kind: topic
teaches: >
  The fuel control system has two distinct jobs depending on grid
  connection state: before connecting to the grid, it holds the turbine at
  the correct rotational speed by positioning the fuel valve; once
  connected, load control becomes essentially a function of fuel supply —
  more fuel increases generator load, less decreases it. The system must
  also react to sudden load rejection (the generator output breaker opening
  abruptly), which instantaneously removes load and causes the turbine to
  overspeed unless fuel is cut quickly — modern turbines use multiple
  electronic sensors to detect overspeed and trip by closing the fuel
  valves and isolating the fuel system, the OST (over-speed trip) valves
  shown in Figure 9D-3. Natural gas firing controls NOx via staged fuel
  control (lowering flame temperature); fuel oil firing achieves the same
  effect via water or steam injection to atomize and cool the oil droplets.
  Ball valves were historically used for fuel control but were superseded
  by sliding-stem valves due to "sloppy" linkage performance issues and
  increased emissions-control requirements.
concept-tags: [fuel control, overspeed protection, OST valve, load rejection, staged fuel control, NOx, ball valve, sliding stem]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Application Discussion / Fuel Control, p. 9D-3 — prose beyond Figure 9D-3's own caption"
relatedFigures: [pss-cmp-fuel-gas-staged-combustion-diagram]
relatedTopics: [pss-topic-gas-turbine-thermal-cycle]
used-by: []
notes: >
  Read directly from the real running prose (PDF p. 161). The historical
  ball-valve-to-sliding-stem transition detail is a real, specific fact
  worth preserving — not generic.
```

```yaml
id: pss-topic-power-augmentation-and-emissions-injection
kind: topic
teaches: >
  Steam or water injection into the gas turbine serves two purposes
  simultaneously, not two separate systems: (1) power augmentation —
  injecting steam pulled from the cold reheat line (combined-cycle) or an
  outside source (simple cycle) increases mass flow through the turbine,
  raising both output and efficiency; (2) NOx emissions control — the same
  injection lowers flame temperature, which the NOx-vs-temperature
  relationship (Figure 9D-5) shows sharply reduces NOx formation above
  roughly 2800°F. Water injection (more common in single-cycle plants,
  since it avoids needing an offsite steam source) uses the same mechanism
  as steam injection. Because combustion gases can back up into the steam
  line when augmentation is not active, an isolation valve is paired with
  the throttle valve specifically to provide tight shutoff in either
  direction — without it, high combustion-gas temperatures backing up
  through the throttle valve would cause premature component failure.
concept-tags: [power augmentation, steam injection, water injection, NOx control, flame temperature, tight shutoff, isolation valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Application Discussion / Power Augmentation / Water and Steam Injection, pp. 9D-3 – 9D-4"
relatedFigures: [pss-cmp-power-augmentation-diagram, pss-cmp-nox-formation-vs-temperature-graph]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real running prose (PDF pp. 161-162). The
  dual-purpose framing (power AND emissions from the same injection) is the
  real insight here — the two figures on their own each show only half of
  it.
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

```yaml
id: pss-topic-hrsg-mechanism-and-configuration
kind: topic
teaches: >
  The HRSG (heat recovery steam generator) is normally heated entirely by
  hot gas turbine exhaust, but may include a supplemental natural-gas- or
  fuel-oil-fired duct burner (Figure 9D-8) for additional steam when more
  power output or cogeneration steam is needed. HRSG complexity scales with
  the unit efficiency target: the simplest configurations have only a
  high-pressure steam drum, generation tubes, and possibly a superheater;
  as efficiency needs increase, a low-pressure drum, intermediate-pressure
  drum, multiple economizers (high/intermediate/low pressure), deaerators,
  and superheaters are progressively added, with tube sections arranged so
  the hottest gases contact the highest-pressure superheat stages first.
  A diverter/bypass damper on the gas turbine exhaust duct lets the turbine
  run in simple-cycle mode by routing hot gases to a bypass stack instead
  of the HRSG — important when the HRSG or steam turbine is unavailable for
  maintenance, and sometimes installed on new simple-cycle units
  specifically to allow a later HRSG retrofit without disturbing the gas
  turbine.
concept-tags: [HRSG, duct burner, steam drum, economizer, superheater, deaerator, diverter damper, bypass stack]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Combined Cycle, pp. 9D-6 – 9D-7 — prose beyond Figures 9D-6/9D-8's own captions"
relatedFigures: [pss-cmp-combined-cycle-generation-diagram, pss-cmp-finned-tubes-diagram, pss-cmp-hrsg-duct-burner-cutaway]
relatedTopics: [pss-topic-combined-cycle-steam-turbine-differences]
used-by: []
notes: >
  Read directly from the real running prose (PDF pp. 164-165). The
  diverter/bypass damper's dual real-world purpose (maintenance flexibility
  AND enabling a later HRSG retrofit) is stated explicitly in the source,
  not inferred.
```

```yaml
id: pss-topic-combined-cycle-steam-turbine-differences
kind: topic
teaches: >
  Steam turbines used in combined-cycle plants differ materially from
  conventional-plant steam turbines: they are typically smaller (10-200 MW,
  most under 100 MW, versus much larger conventional-unit turbines), are
  sometimes built without reheat capability (when the associated HRSG
  cannot supply reheated steam — conventional-unit turbines are always
  built with reheat for its efficiency benefit), and have little or no
  steam extraction points because combined-cycle plants rely on the HRSG's
  finned-tube economizer(s) to raise feedwater temperature instead of the
  shell-type feedwater heaters conventional plants use, which is what
  extraction normally feeds.
concept-tags: [combined cycle, steam turbine, reheat, steam extraction, feedwater heater, economizer]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Combined Cycle, p. 9D-6 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-hrsg-mechanism-and-configuration]
used-by: []
notes: >
  Read directly from the real running prose (PDF p. 165). Not tied to any
  figure at all — a comparative concept explaining WHY combined-cycle STs
  look different, not shown in any diagram.
```

```yaml
id: pss-topic-cogeneration-economics
kind: topic
teaches: >
  Cogeneration produces two saleable products (steam for off-site
  industrial use and electricity) from one fuel input, achieving overall
  efficiency over 70% — markedly higher than a modern conventional
  condensing-cycle unit (~35%) or a modern combined-cycle unit (~50%),
  because using steam directly as an energy source avoids the thermodynamic
  waste of the condensing cycle; steam used purely for heating (no
  electricity generation) can approach 90% efficiency. Real configurations
  vary: all produced steam may be exported off-site (Figure 9D-9), only a
  portion exported with the rest generating electricity, or all steam
  routed through a steam turbine first with some later extracted for
  off-site use. A conventional auxiliary boiler is sometimes needed to
  supply steam when running the whole cogeneration facility isn't
  economical — cogenerators must balance electrical generation against
  their steam customer's actual needs, a real operational constraint
  traditional generators don't have.
concept-tags: [cogeneration, dual product, overall efficiency, condensing cycle waste, steam export, auxiliary boiler]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Combined Cycle, pp. 9D-8 – 9D-9 — prose beyond Figure 9D-9's own caption"
relatedFigures: [pss-cmp-cogeneration-cycle-diagram]
relatedTopics: [pss-topic-hrsg-mechanism-and-configuration]
used-by: []
notes: >
  Read directly from the real running prose (PDF pp. 167-168). The four
  efficiency numbers (70%/35%/50%/90%) are all stated explicitly in the
  source in the same paragraph, transcribed exactly.
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

```yaml
id: pss-topic-alloy-6-feedwater-corrosion
kind: topic
teaches: >
  Alloy 6 corrosion problems in feedwater systems are often misdiagnosed —
  a real, non-obvious diagnostic finding: boiler feedwater is treated with
  ammonia, hydrazine, or amine derivatives at the deaerator to eliminate
  excess oxygen, but these same chemicals attack the protective oxide films
  on Alloy 6 trim, initiating an erosion/corrosion process that degrades
  Alloy 6 overlays — a mechanism the source states has been "responsible
  for many valve trim failures previously attributed to poor design or
  maintenance." The fix is materials selection, not procedure: solid 400
  series stainless steel trim, or Colmonoy overlays instead of Alloy 6,
  eliminates the problem.
concept-tags: [Alloy 6, corrosion, feedwater treatment, erosion-corrosion, trim material selection, Colmonoy, 400 series stainless]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Feedwater System, p. 9D-10 — a highlighted \"Note\" box in the running text, not figure-anchored"
relatedFigures: []
relatedTopics: [pss-topic-feedwater-valve-selection-rationale]
used-by: []
notes: >
  Read directly from the real running prose (PDF p. 169) — a boxed "Note"
  callout in the source, not ordinary body text, signalling the source's
  own emphasis on this being a real, previously-misattributed failure mode.
  A genuinely valuable materials-selection insight with no figure at all.
```

```yaml
id: pss-topic-feedwater-valve-selection-rationale
kind: topic
teaches: >
  Combined-cycle feedwater systems differ from conventional plants in
  having separate feedwater control valves for each HRSG drum, and combine
  the startup regulator and main feedwater regulator into one valve (versus
  separate valves and piping in conventional designs) by using
  characterized trim: cavitation-protection characterization handles the
  startup condition as the valve first opens, transitioning to standard
  holes as travel increases for the necessary flow capacity. Valve mounting
  location matters: mounting at ground level takes the pressure drop before
  water reaches the economizer, while mounting near the steam drum risks
  steam forming in the economizer section, requiring an angle valve with
  cavitation protection that can also withstand flashing as temperature
  rises during startup. The feedwater recirc valve maintains net positive
  suction head on the feedwater pump to prevent pump cavitation — nearly
  identical to conventional plant designs.
concept-tags: [feedwater regulator, characterized trim, startup cavitation, HRSG drum, valve mounting location, net positive suction head]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Feedwater System, pp. 9D-9 – 9D-10"
relatedFigures: []
relatedTopics: [pss-topic-alloy-6-feedwater-corrosion]
used-by: []
notes: >
  Read directly from the real running prose (PDF pp. 168-169). The
  combined startup+main-regulator design (via characterized trim, replacing
  separate valves) is the real distinguishing insight versus a conventional
  plant's feedwater system.
```

```yaml
id: pss-topic-turbine-bypass-system-purpose
kind: topic
teaches: >
  The Turbine Bypass System (TBS) is described as probably the most key
  system in a combined-cycle plant: during initial firing it bypasses steam
  to atmosphere or the condenser (steam isn't yet suitable for the turbine),
  and during shutdown it bypasses full steam load to the condenser to
  protect turbine components. TBS valve sizing depends on plant size, plant
  type, and whether the unit has reheat — a plant with reheat needs an HP
  bypass valve (desuperheating HP steam to match cold-reheat conditions
  before the reheater) plus separate IP and LP bypass valves; the LP bypass
  valve's job (bypass all LP steam to the condenser) doesn't change based
  on reheat configuration. TBS valves combine pressure reduction, noise
  control, and steam conditioning functions in one device — the same
  product line the source cross-references to its own Steam Conditioning
  chapter (Chapter 7).
concept-tags: [turbine bypass system, desuperheating, reheat, steam conditioning, pressure reduction, noise control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Turbine Bypass System, pp. 9D-10 – 9D-11 — prose beyond Figure 9D-10's own caption"
relatedFigures: [pss-cmp-turbine-bypass-system-reheat-diagram]
relatedTopics: [cvh-topic-turbine-bypass-system-rationale, pss-topic-startup-vent-valve-mechanism]
used-by: []
notes: >
  Read directly from the real running prose (PDF pp. 169-170). The source
  itself cross-references its own Chapter 7 (Steam Conditioning) for the
  TBS valve product line — mirrored here via relatedTopics into CVH's own
  turbine-bypass topic (verified real: `cvh-topic-turbine-bypass-system-rationale`,
  Subject-Matter Index — Control Valve Handbook ch7.md), a genuine cross-book
  connection, not assumed.
```

```yaml
id: pss-topic-startup-vent-valve-mechanism
kind: topic
teaches: >
  Startup vent valves exist because bypassing steam directly through the
  turbine bypass valves as steam first forms in the HRSG would cause a
  major shock to the valve and piping systems — so steam is bypassed
  directly to atmosphere first (through the startup vent valves) to warm
  the bypass valves before they open. Once closed, startup vent valves must
  then maintain tight, long-term shutoff despite high pressure-drop
  requirements — losing steam through them after startup directly costs
  efficiency and power production. HP applications use a high-pressure
  valve with C-seal in combination with a vent silencer; Fisher's WhisperFlo
  vent diffuser can add roughly 10 dBA of additional noise attenuation
  versus older offerings while being about 35% the size and weight of an
  equivalent drilled-hole device.
concept-tags: [startup vent valve, thermal shock, C-seal, tight shutoff, vent silencer, WhisperFlo, noise attenuation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Startup Vent, pp. 9D-11 – 9D-12 — prose beyond Figures 9D-11/9D-12's own captions"
relatedFigures: [pss-cmp-hp-vent-startup-system-diagram, pss-cmp-whisperflo-vent-diffuser-photo]
relatedTopics: [pss-topic-turbine-bypass-system-purpose]
used-by: []
notes: >
  Read directly from the real running prose (PDF pp. 170-171). The
  "why atmosphere first" thermal-shock-avoidance reasoning is the real
  insight the figures alone don't state.
```

```yaml
id: pss-topic-condensate-recirc-cavitation-diagnosis
kind: topic
teaches: >
  A genuinely non-obvious diagnostic point about the condensate recirc
  valve: service conditions will often indicate the valve should experience
  flashing (since the recirc line runs to a hot well near atmospheric
  pressure or vacuum), but the effects of pipe friction, elevation, and
  condensate sparger backpressure are conventionally ignored in that
  analysis — accounting for them raises the real outlet pressure the valve
  sees, which leads to cavitation forming, not flashing. The valve's actual
  job is protecting the condensate pump from cavitation via net positive
  suction head, using low-flow anti-cavitation trim (Cavitrol III/2-stage)
  suited to service conditions that are close to atmospheric/vacuum.
concept-tags: [condensate recirculation, cavitation vs flashing diagnosis, net positive suction head, pipe friction, backpressure, Cavitrol trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9D Condensate System, p. 9D-13 — prose beyond Figure 9D-13's own caption"
relatedFigures: [pss-cmp-condensate-system-diagram]
relatedTopics: [cvh-topic-cavitation, cvh-topic-flashing]
used-by: []
notes: >
  Read directly from the real running prose (PDF p. 172). This is a
  distinct, specific diagnostic pitfall (naive service-condition analysis
  predicting the wrong failure mode) — genuinely different from the general
  cavitation/flashing mechanism topics already indexed in the Control Valve
  Handbook (`cvh-topic-cavitation`/`cvh-topic-flashing`, both verified real
  in Subject-Matter Index — Control Valve Handbook ch5.md), cross-referenced
  rather than duplicated.
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
- **`kind: topic` pass, added 2026-09-17**: full chapter re-read for genuine
  conceptual content beyond the 13 figures' own captions, same rigor as the
  Control Valve Handbook and Oil & Gas Sourcebook passes completed the same
  night. 12 new `pss-topic-*` entries added, each read directly from real
  running prose (PDF pp. 159-172, `pdftotext -layout`) — three real,
  specific finds worth naming: the Alloy-6-feedwater-corrosion Note box
  (a documented misdiagnosis pattern, no figure at all), the condensate
  recirc valve's flashing-vs-cavitation diagnostic pitfall (cross-referenced
  to CVH's cavitation/flashing topics rather than duplicated), and the
  chapter's own cross-reference to CVH ch7's turbine-bypass content
  (mirrored via `relatedTopics`). No section was found to have zero
  conceptual content beyond its tables — every section's real prose
  supported at least one genuine topic entry. Chapter total is now 25
  components (13 figures + 12 topics — the divider-page comparison table
  itself was correctly left uncatalogued as a table, per the existing
  figures-only exclusion above).
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
