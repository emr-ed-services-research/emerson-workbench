---
title: Component Index — Power & Severe Service Sourcebook ch9b
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch9B — Sliding Pressure Control
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 9B

**Chapter 9B — "Sliding Pressure Control."** Standing library-cataloging
pass, part of resuming the whole-document indexing of the Power & Severe
Service Sourcebook (the earlier pass completed chapters 1–7, 9C, 9D, 12–14;
this pass fills the confirmed gaps: 8, 9A, 9B, 10, 11), per `Component Index
— Process & Standards.md`'s "standing full-chapter" trigger. Every real page
in the chapter's confirmed range was rendered at 150dpi and read directly.

Chapter boundaries confirmed directly by rendering: PDF page 121 is the
"Chapter 9B / Sliding Pressure Control" divider, real content runs through
PDF page 153 (printed p. 9B-33, Figure 9B-42), PDF page 154 (printed "9B-34")
is a confirmed blank trailing page (page number only, no body content), and
PDF page 155 is the "Chapter 9C / Geothermal Power" divider (already
established in `Component Index — Power & Severe Service Sourcebook
ch9c.md`) — zero page offset against the chapter's own printed numbering.

**This chapter is organized around three boiler manufacturers'
sliding-pressure/supercritical startup-bypass systems** (Babcock & Wilcox,
Combustion Engineering, Foster Wheeler), each following the same real
pattern: one canonical, fully-tagged system schematic, followed by a run of
near-identical redraws of that same schematic showing only which valves are
open/closed/throttling at each successive startup stage (cold clean-up,
initial firing, turbine roll, load ramp, transfer to once-through, etc.),
interspersed with a handful of analytical graphs and Fisher product-valve
photos. **Bundling judgment call, extending the same principle already
applied in this book's Chapter 8 (Power Plant Primer) to this chapter's
figure-numbered case:** cataloguing every mode-sequence redraw as its own
record would produce roughly 20 near-duplicate entries whose only real
difference is which valve symbols are shaded open vs. closed on an otherwise
identical P&ID — genuinely low marginal teaching value for citation
purposes. Applying the Process & Standards "judge each case against the
source's own structure" test: each manufacturer's own startup-sequence run
is presented as one continuous procedural narrative (a single sequence of
steps through one system), not as separately distinct figures — so each
manufacturer's full mode-sequence run is catalogued as ONE bundled record,
while every genuinely distinct diagram (the canonical system schematic
itself, every analytical graph, every valve/trim photo, and every
system-detail diagram that is not part of a mode sequence) is catalogued
individually. 40 real figure numbers (9B-3 through 9B-42) resulted in 23
records — see Open Items for the full accounting.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/
Control Valve Sourcebook - Power & Severe Service.pdf`. No extracted-figures
crop folder exists for this book — each record's `source` carries a single
locator. Every record's `used-by` is `[]`.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition
(D101449X012), is itself a **current** first-party Fisher/Emerson document,
so every record below is `status: current`. No archive or legacy material
was consulted.

## Components

### Chapter 9B — Sliding Pressure Control Concept (printed pp. 9B-1 – 9B-2, prose)

```yaml
id: pss-topic-sliding-pressure-control-mechanism
kind: topic
teaches: >
  The core mechanism distinguishing constant pressure control from sliding
  pressure control. In constant pressure operation, the boiler is fired to
  a fixed discharge pressure and turbine control valves regulate turbine
  inlet pressure by throttling (moving closed as load decreases, either in
  unison — full arc admission — or sequentially — partial arc admission).
  This has two adverse effects at large load swings: turbine temperature
  fluctuations that cause fatigue and shorten turbine life, and reduced net
  thermal efficiency (heat rate) at lower loads. Sliding pressure control
  eliminates both by adding pressure-reducing valve(s) upstream of the
  turbine control valves (between the primary and secondary superheater);
  these valves absorb the pressure reduction instead, so the turbine
  control valves stay fully (or nearly) open across the load range and the
  sliding pressure control valve itself becomes what actually sets plant
  load. Real listed benefits: full-arc admission, lower turbine thermal
  stresses, faster load changes, improved overall heat rate, lower minimum
  load capability. Also explains 70%/100% sliding pressure control as a
  direct function of how the sliding pressure control valve is sized: sized
  for the full load range (100%) or only up to some fraction (e.g. 70%),
  above which turbine throttle valves take back over and the sliding-
  pressure benefits are lost above that point.
concept-tags: [sliding pressure control, constant pressure control, turbine control valve, full arc admission, partial arc admission, turbine thermal stress, heat rate]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9B opening prose, printed pp. 9B-1 – 9B-2 (PDF pp. 121-122) — read directly, not inferred from figure captions"
relatedFigures: [pss-cmp-constant-pressure-control-graph, pss-cmp-100pct-sliding-pressure-control-graph, pss-cmp-70pct-sliding-pressure-control-graph]
relatedTopics: [pss-topic-sliding-pressure-thermodynamic-basis, pss-topic-supercritical-sliding-pressure-suitability]
used-by: []
notes: >
  Real, confirmed discrepancy found while reading this chapter's real prose
  for this pass, flagged here rather than silently corrected (out of scope
  for a topic-only pass to fix the existing figure catalogue): this file's
  own Open Items state "Figures 9B-1 and 9B-2 do not exist in this
  chapter — chapter numbering begins at 9B-3." The real PDF text (pp.
  121-122) shows both figures DO exist and are captioned: "Figure 9B-1.
  Once-through main steam system -- constant pressure control" and "Figure
  9B-2. Once-through main steam system -- sliding pressure control" (drawing
  numbers E0128, E0129). Neither is currently catalogued as a `kind: figure`
  component. This should be corrected in a future figure-cataloguing pass on
  this file, not this one.
```

```yaml
id: pss-topic-sliding-pressure-thermodynamic-basis
kind: topic
teaches: >
  Why sliding pressure control actually improves turbine efficiency,
  reasoned from thermodynamics rather than just stated as a fact. For a
  control valve (a system that does no work), enthalpy upstream must equal
  enthalpy downstream (h1 = h2); since enthalpy is a function of both
  pressure and temperature, reducing pressure across a valve also reduces
  temperature (confirmed via steam tables). What differs between the two
  control modes is WHERE in the system that pressure/temperature drop
  happens: in constant pressure operation, the drop occurs at the turbine
  control valves themselves — right at the turbine inlet — so the turbine
  receives the resulting lower, uncontrolled steam temperature directly,
  reducing efficiency and causing wet-steam erosion risk in the later
  turbine stages. In sliding pressure control, the drop instead occurs
  upstream of the secondary superheater, so the steam re-enters the
  secondary superheater and is reheated back up to its full-load
  temperature limit (around 1005°F in this chapter's system) before
  reaching the turbine — meaning the turbine sees constant-temperature
  steam at every plant load, not just at full load.
concept-tags: [enthalpy, thermodynamics, sliding pressure control, secondary superheater, steam temperature, wet steam erosion]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9B prose, printed p. 9B-2 (PDF p. 122) — read directly"
relatedFigures: [pss-cmp-constant-pressure-control-graph, pss-cmp-100pct-sliding-pressure-control-graph]
relatedTopics: [pss-topic-sliding-pressure-control-mechanism]
used-by: []
notes: The h1=h2 enthalpy-conservation reasoning is stated explicitly in the source as the basis for the whole chapter's central claim — not paraphrased from outside thermodynamics knowledge.
```

```yaml
id: pss-topic-supercritical-sliding-pressure-suitability
kind: topic
teaches: >
  Why this chapter treats sliding pressure control as essentially a
  supercritical, once-through boiler topic rather than covering drum-style
  subcritical units in equal depth. The source's own reasoning: supercritical
  once-through units are typically larger, harder to start up, and more
  difficult to cycle than drum-style units, so the efficiency and
  quick-load-change benefits sliding pressure control provides matter more
  for them — the same benefits exist in principle for drum units, but the
  magnitude of benefit is smaller, so the chapter deliberately narrows its
  remaining scope to supercritical boilers only.
concept-tags: [supercritical boiler, once-through boiler, drum boiler, subcritical, sliding pressure control, boiler cycling]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9B prose, printed p. 9B-2 (PDF p. 122) — read directly"
relatedTopics: [pss-topic-sliding-pressure-control-mechanism]
used-by: []
notes: A real scoping/judgment statement in the source itself, not an inference — explains why every subsequent manufacturer section (B&W, CE, FW) in this chapter is a supercritical once-through system.
```

```yaml
id: pss-topic-boiler-bypass-system-purpose
kind: topic
teaches: >
  The general functional reason every manufacturer's startup bypass system
  in this chapter (B&W, CE, and Foster Wheeler alike) has the same basic
  shape, even though their specific valve tagging differs. A supercritical
  boiler must maintain a minimum flow inside the furnace waterwalls to
  prevent tube overheating, and this minimum flow must be established
  before firing even begins — before the turbine can accept any steam at
  all. A bypass system integral with the main steam, condensate, and
  feedwater systems exists to maintain that minimum design flow at startup
  and whenever it exceeds actual turbine steam demand. The source lists five
  concrete functions any such bypass system performs: (1) reduces the
  steam's pressure and temperature to conditions suitable for the flash
  tank, condenser, and auxiliary equipment; (2) recovers heat from the
  bypass feedwater via the feedwater heaters; (3) conditions the water
  during startup without delaying boiler/turbine warming; (4) protects the
  secondary superheater from thermal shock from water during startup; (5)
  relieves excess boiler pressure during a load trip. This is why the B&W,
  CE, and FW sections all present "one canonical system schematic, then a
  run of startup-mode redraws" — they're the same underlying requirement
  solved with manufacturer-specific valve arrangements, not three
  independently-invented designs.
concept-tags: [boiler bypass system, minimum waterwall flow, flash tank, startup sequence, thermal shock protection, load trip]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 9B prose, printed p. 9B-2 (PDF p. 122) — read directly"
relatedFigures: [pss-cmp-bw-universal-pressure-bypass-system, pss-cmp-ce-boiler-bypass-system, pss-cmp-fw-flash-tank-sliding-pressure-system, pss-cmp-fw-integral-separator-startup-system]
relatedTopics: [cvh-topic-turbine-bypass-system-rationale]
used-by: []
notes: >
  The cross-reference to CVH ch7's `cvh-topic-turbine-bypass-system-rationale`
  is a real functional parallel (both explain why a bypass path around
  normal steam flow exists) but a genuinely different context — CVH ch7's
  topic is about turbine PROTECTION bypass during upset conditions in an
  already-running unit, this topic is about boiler STARTUP bypass before
  the turbine is even accepting steam. Cross-referenced as related, not
  merged or treated as the same concept.
```

### Chapter 9B — Sliding Pressure Control Concept (printed pp. 9B-2 – 9B-3)

```yaml
id: pss-cmp-constant-pressure-control-graph
kind: figure
teaches: >
  Constant pressure control's boiler-pressure-vs-load relationship: a flat
  boiler pressure line held from 0–100% unit load, with secondary superheater
  inlet pressure tracking it via small startup valves at very low loads —
  the baseline against which sliding pressure control's benefits (Figures
  9B-4, 9B-5) are contrasted.
concept-tags: [constant pressure control, boiler pressure, unit load, secondary superheater inlet pressure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-3 'Constant pressure control,' p. 9B-2 — drawing E0130"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: Pairs directly with Figure 9B-4 (100% sliding pressure) as the chapter's opening concept-contrast pair.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-100pct-sliding-pressure-control-graph
kind: figure
teaches: >
  100% sliding pressure control's boiler-pressure-vs-load relationship: the
  sliding pressure control valve ramps pressure across the full 10–100% load
  range (rather than only the lowest ~25%), meaning the sliding pressure
  control valve alone — not the turbine throttle valves — determines plant
  load across the whole operating range.
concept-tags: [sliding pressure control, 100% sliding pressure, sliding pressure ramp, unit load, valve sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-4 '100% sliding pressure control,' p. 9B-2 — drawing E0131"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: Direct contrast with Figure 9B-3; both cited together in the surrounding text.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-70pct-sliding-pressure-control-graph
kind: figure
teaches: >
  Partial (70%) sliding pressure control's boiler-pressure-vs-load
  relationship: the sliding pressure valve is sized only for load up to 70%,
  above which the turbine throttle valves take over control and the benefits
  of sliding pressure control are lost — establishes that the sizing of the
  sliding pressure control valve itself determines how much sliding-pressure
  benefit a given plant actually has.
concept-tags: [sliding pressure control, 70% sliding pressure, turbine throttle valve, valve sizing, unit load]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-5 '70% sliding pressure control,' p. 9B-2 — drawing E0132"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: Third of the chapter's opening three-graph concept sequence (9B-3, 9B-4, 9B-5).
mediaStatus: unreviewed
```

### Chapter 9B — Babcock & Wilcox Startup Bypass System (printed pp. 9B-4 – 9B-17)

```yaml
id: pss-cmp-bw-universal-pressure-bypass-system
kind: figure
teaches: >
  The complete Babcock & Wilcox Universal Pressure boiler bypass system,
  fully tagged with every valve's real designation (BW-200, 201, 201A, 202,
  205, 207, 220, 230, 231, 240, 241, 242) across boiler, primary/secondary
  superheater, flash tank, deaerator, H.P./L.P. heaters, condensate
  polishing, condenser, and turbine — the canonical reference diagram this
  section's whole startup-mode sequence (Figures 9B-7 through 9B-15) is a
  repeated redraw of with different valves open or closed.
concept-tags: [Babcock and Wilcox, universal pressure boiler, bypass system, flash tank, deaerator, superheater, once-through boiler]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-6 'Babcock and Wilcox universal pressure boiler bypass system,' p. 9B-4 — drawing E0133"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled system P&ID — Style Guide §6.3 applies (nomenclature
  source) if ever placed on a slide. Serves as the reference key for the
  entire B&W startup-sequence bundle below.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-bw-startup-sequence-mode-diagrams
kind: figure
teaches: >
  The full B&W once-through-boiler startup sequence, told as nine successive
  redraws of the Figure 9B-6 bypass system with different valve states
  active at each stage: cold water clean-up mode under constant pressure
  control (Figure 9B-7) and under sliding pressure control (Figure 9B-8);
  initial firing mode under constant pressure control (Figure 9B-9) and
  sliding pressure control (Figure 9B-10); initial turbine roll mode under
  constant pressure control (Figure 9B-11) and sliding pressure control
  (Figure 9B-12); transfer to once-through operation with the flash tank
  still in service under constant pressure control (Figure 9B-13) and after
  the flash tank is taken out of service under sliding pressure control
  (Figure 9B-14); and finally the fully-loaded 100% sliding pressure control
  system spanning 12-1/2% to 100% plant load (Figure 9B-15) — together the
  complete valve line-up story from a cold, unfired boiler through full
  load.
concept-tags: [Babcock and Wilcox, startup sequence, cold water cleanup, initial firing, turbine roll, transfer to once-through, constant pressure control, sliding pressure control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figures 9B-7 through 9B-15 (nine successive mode redraws), pp. 9B-4 – 9B-11 — drawings E0135 (9B-7), E0136 (9B-8), E0137 (9B-9), E0138 (9B-10), E0139 (9B-11), E0140 (9B-12), E0141 (9B-13), E0142 (9B-14), E0143 (9B-15)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  BUNDLED RECORD (deliberate, see this file's intro): nine printed figure
  numbers, one continuous procedural narrative (the B&W startup sequence),
  each redraw of the same Figure 9B-6 base schematic differing only in
  which valves are shown open/closed/throttling. If a specific startup
  stage is ever needed for a slide, cite the specific figure number from
  this list directly (e.g. "Figure 9B-9, initial firing mode — constant
  pressure control") rather than this record generically.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-bw-furnace-bypass-control-valves
kind: figure
teaches: >
  The BW-263/BW-264 furnace first/second-bypass control valve detail: each
  valve feeds a mixing bottle that routes flow through a bank of waterwall
  tubes (SW, then FW/RW) making a second pass through the furnace — doubles
  first-pass fluid velocity, which reduces the unit's minimum load capability
  from 25% down to 12% by preventing "pseudo film boiling" at low flow.
concept-tags: [BW-263, BW-264, furnace bypass control valve, mixing bottle, waterwall tubes, pseudo film boiling, minimum load]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-16 'Furnace bypass control valves,' p. 9B-11 — drawing E0143 (labelled on the page as separate from the 9B-15 schematic above it, though the two share a drawing-number-adjacent stamp — confirmed as a distinct figure by its own separate caption and content)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: A detail diagram, not a mode-sequence redraw of the main system schematic — catalogued individually.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-ehd-20in-sliding-pressure-valve
kind: figure
teaches: >
  The Fisher 20-inch Design EHD engineered specifically for BW-401 100%
  sliding-pressure-control service: a coned plug tip eliminates damaging
  vibration and state-of-the-art materials meet the high pressures and
  temperatures of supercritical units — shown as a full sectioned cutaway
  with characterized Whisper Trim III.
concept-tags: [Design EHD, sliding pressure control valve, coned plug, Whisper Trim III, supercritical, BW-401]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-17 '20-inch Design EHD for sliding pressure control,' p. 9B-12 — drawing W4282-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully sectioned photorealistic cutaway, unlabelled beyond the caption.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-bw207-service-conditions-time-graph
kind: figure
teaches: >
  Typical service conditions for a BW-207 secondary superheater bypass valve
  across a full 6-hour startup, plotted as PSH outlet pressure/temperature
  and flash tank pressure vs. time, with the real sequence of events
  annotated directly on the chart (fire starts, F.W. pressure ramp, roll
  turbine, 207 starts to close, transfer to once-through operation
  complete) — a worked numeric companion to the Figure 9B-9/9B-10
  mode-sequence diagrams.
concept-tags: [BW-207, secondary superheater bypass valve, service conditions, startup timeline, PSH outlet pressure, flash tank pressure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-18 'Typical service conditions for a BW-207, secondary superheater bypass valve,' p. 9B-13 — drawing E0144"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: A genuine analytical time-series graph, not a mode-sequence P&ID redraw — catalogued individually.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-cav4-superheater-bypass-valve
kind: figure
teaches: >
  The Fisher Design CAV4 recommended for BW-202/BW-207 superheater bypass
  service (the most severe service of any valve in the B&W startup system):
  four-stage pressure reduction prevents cavitation damage while also
  providing noise attenuation at the superheated steam condition; the angle
  valve configuration prevents flashing damage to the body.
concept-tags: [Design CAV4, superheater bypass valve, cavitation protection, four-stage trim, angle valve, BW-202, BW-207]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-19 'Design CAV4 for applications where cavitation is a problem, such as superheater bypass,' p. 9B-14 — drawing W3668-2"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully sectioned photorealistic cutaway — angle-body configuration visible.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-ehat-optional-liner-valve
kind: figure
teaches: >
  The Fisher Design EHAT with optional liner, recommended for the
  BW-263/BW-264 furnace bypass control valves' erosive, high-pressure,
  supercritical-liquid service — shown as a fully sectioned angle-body
  cutaway with flow-direction callout.
concept-tags: [Design EHAT, optional liner, furnace bypass valve, erosion resistance, supercritical liquid, BW-263, BW-264]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-20 'Design EHAT with optional liner,' p. 9B-15 — drawing E0146"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully sectioned line-art cutaway with a printed FLOW DIRECTION callout. Last figure in the B&W section; the section closes with an unnumbered "Guideline Summary" table (see Open Items).
mediaStatus: unreviewed
```

### Chapter 9B — Combustion Engineering Startup Bypass System (printed pp. 9B-16 – 9B-28)

```yaml
id: pss-cmp-ce-integral-recirculation-system
kind: figure
teaches: >
  The Combustion Engineering Combined Circulation supercritical boiler's
  defining unique feature versus the B&W design: an integral recirculation
  system inside the boiler (circ. pumps, circ. pump bypass valve, recirc.
  system check valve) that separates waterwall protection from low-flow
  requirements, allowing a lower minimum flow (~10% of full boiler load)
  and a bumpless, operator-intervention-free transfer from recirculation to
  once-through operation.
concept-tags: [Combustion Engineering, Combined Circulation, integral recirculation system, circ pump bypass valve, waterwall protection, once-through transfer]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-21 'CE integral recirculation system,' p. 9B-16 — drawing E0147"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Labelled (WATER WALLS, MIXING HEADER, MIXING SPHERE, CIRC. PUMPS, CIRC. PUMP BYPASS VALVE, RECIRC. SYSTEM CHECK VALVE, BT/BTB VALVES, ECONOMIZER).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-ce-sliding-pressure-triple-comparison-graph
kind: figure
teaches: >
  Three boiler-circulation types' waterwall-pressure vs. superheater-outlet-
  pressure behavior compared side by side across 0–100% boiler load:
  subcritical controlled circulation (both curves rise together from a low
  base), supercritical combined circulation (waterwall pressure held high
  and flat while superheater outlet pressure ramps up, i.e. no sliding
  pressure benefit for the waterwalls), and supercritical sliding pressure
  (waterwall pressure held flat only at the very lowest loads, then tracks
  superheater outlet pressure up) — the CE-specific version of the chapter's
  opening constant-vs-sliding concept (Figures 9B-3/9B-4/9B-5).
concept-tags: [Combustion Engineering, sliding pressure operation, subcritical controlled circulation, supercritical combined circulation, waterwall pressure, superheater outlet pressure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-22 'Sliding pressure operation,' p. 9B-19 — drawing E0148"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: Three-panel comparison graph with its own printed legend (WW = water wall pressure, SHO = superheater outlet pressure).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-ce-boiler-bypass-system
kind: figure
teaches: >
  The complete Combustion Engineering boiler bypass system, fully tagged
  with CE's own valve nomenclature (BE, BTB, BT, SA, ISPR, IS, IR, IC, SP,
  WD, FWB) across furnace walls, startup separator, initial/final
  superheaters, reheater, HP/IP/LP turbines, condenser, economizer, and
  feedwater train — the canonical reference diagram this section's whole
  startup-mode sequence (Figures 9B-24 through 9B-29) is a repeated redraw
  of. Directly comparable to the B&W system's own Figure 9B-6, with a
  CE-to-B&W valve cross-reference table given in the surrounding text (BE ↔
  BW-202/BW-207, BTB ↔ BW-201, BT ↔ BW-400/BW-401, SA ↔ BW-205, WD ↔
  BW-241, SP ↔ BW-240, IS ↔ BW-218, IR ↔ BW-219).
concept-tags: [Combustion Engineering, boiler bypass system, startup separator, initial superheater, final superheater, boiler extraction valve, boiler throttle valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-23 'CE boiler bypass system,' p. 9B-20 — drawing E0149"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fully labelled system P&ID — Style Guide §6.3 applies if ever placed on a slide. Serves as the reference key for the entire CE startup-sequence bundle below.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-ce-startup-sequence-mode-diagrams
kind: figure
teaches: >
  The full CE Combined Circulation unit startup sequence, told as six
  successive redraws of the Figure 9B-23 bypass system with different valve
  states active at each stage: establishing flow preliminary to firing
  (Figure 9B-24); lighting off and warming up (Figure 9B-25); turbine
  rolling and synchronizing (Figure 9B-26); initial turbine loading,
  synchronizing to 10% (Figure 9B-27); initial turbine loading, 10–20% load
  (Figure 9B-28); and turbine loading above 20% (Figure 9B-29) — the
  BE/BTB/BT valve line-up progressing from full recirculation through
  synchronization to normal turbine-throttle-controlled operation.
concept-tags: [Combustion Engineering, startup sequence, establishing flow, lighting off, turbine rolling, synchronizing, initial turbine loading, BE valve, BTB valve, BT valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figures 9B-24 through 9B-29 (six successive mode redraws), pp. 9B-20 – 9B-23 — drawings E0150 (9B-24), E0151 (9B-25), E0152 (9B-26), E0153 (9B-27), E0154 (9B-28), E0155 (9B-29)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  BUNDLED RECORD (deliberate, see this file's intro): six printed figure
  numbers, one continuous procedural narrative (the CE startup sequence),
  each redraw of the same Figure 9B-23 base schematic differing only in
  which valves are shown open/closed/throttling. Cite the specific figure
  number directly if a particular startup stage is ever needed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-ce-constant-pressure-operation-graph
kind: figure
teaches: >
  CE constant pressure operation's pressure-vs-steam-flow relationship,
  distinguishing which valve group controls which portion of the load
  range: BE valve controls from 0 to ~8% flow, BTB valves from ~8–33% flow,
  and turbine throttle valves from ~33–100% flow, with furnace wall pressure
  held flat and SH inlet/throttle pressure ramping — the CE constant-
  pressure analog of Figure 9B-3.
concept-tags: [Combustion Engineering, constant pressure operation, BE valve, BTB valves, turbine throttle valves, furnace wall pressure, steam flow]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-30 'Constant pressure operation,' p. 9B-23 — drawing E0156"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: Pairs directly with Figure 9B-31 (sliding pressure operation) as the CE constant-vs-sliding contrast pair.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-ce-sliding-pressure-operation-graph
kind: figure
teaches: >
  CE sliding pressure operation's pressure-vs-steam-flow relationship: the
  same BE/BTB/BT valve-group control-range format as Figure 9B-30, but with
  the BT valves' control range extended out to roughly 80% flow before the
  turbine throttle valves take over — visually demonstrates how sizing the
  BT valves for a larger fraction of load extends the sliding-pressure
  benefit further up the load range.
concept-tags: [Combustion Engineering, sliding pressure operation, BE valve, BTB valves, BT valves, turbine throttle valves, steam flow]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-31 'Sliding pressure operation,' p. 9B-24 — drawing E0157"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: Direct contrast with Figure 9B-30; both cited together in the surrounding text.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-ce-be-btb-bt-sequencing-chart
kind: figure
teaches: >
  The BE/BTB/BT valve transfer and sequencing logic plotted as % valve
  opening vs. time: the BE valve ramps closed as the turbine synchronizes,
  handing off to the BTB valves opening in its place; the BTB valves in turn
  hand off to the first BT valve(s) around 20% load, and finally to the
  remaining BT valves around 25–30% load — the precise mechanics behind the
  "transfer point" language used throughout the CE startup-sequence
  discussion.
concept-tags: [Combustion Engineering, BE valve, BTB valves, BT valves, valve sequencing, transfer point, percent valve opening]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-32 'BE/BTB transfer and BTB/BT sequencing,' p. 9B-25 — drawing E0158"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: A genuine analytical time-sequencing graph with its own printed legend (BE valves / BTB valves / BT valves line styles).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-stem-balanced-cav4-cavitrol-iv-trim
kind: figure
teaches: >
  The Fisher stem-balanced Design CAV4 with Cavitrol IV trim, recommended
  for the CE BE (boiler extraction) valve's especially demanding service
  (cavitating cold water, flashing hot water, and high-pressure-drop
  superheated steam all in the same valve) — shown as two side-by-side
  sectioned cutaways (globe body and angle body variants).
concept-tags: [Design CAV4, Cavitrol IV trim, stem balanced, boiler extraction valve, BE valve, cavitation, flashing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-33 'Stem-balanced Design CAV4 with Cavitrol IV trim,' p. 9B-26 — drawings W3668 and W3670"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Two-panel figure (globe-body cutaway + angle-body cutaway) under one caption — catalogued as one record matching the source's own single-figure treatment.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-hps-microform-trim-cutaway
kind: figure
teaches: >
  The Fisher Design HPS with special Micro-Form trim, recommended for the
  CE IS/IR/IC spray-valve family's very-low-lift throttling requirement (the
  same low-flow-control challenge the B&W BW-218/BW-219 valves face) —
  shown as a full sectioned cutaway.
concept-tags: [Design HPS, Micro-Form trim, low flow control, spray valve, IS valve, IR valve, IC valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-34 'HPS with Micro-Form trim,' p. 9B-26 — drawing W5817"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Same drawing (W5817) as this book's own Figure 9A-10B (small Design HPS
  Micro-Form trim cutaway, `Component Index — Power & Severe Service
  Sourcebook ch9a.md`) — visually confirmed identical trim-cutaway image
  reused verbatim under a new caption/figure number. Cross-referenced here,
  not duplicated as a second full record's worth of new content. Last
  figure in the CE section; the section closes with an unnumbered
  "Guideline Summary" table (see Open Items).
mediaStatus: unreviewed
```

### Chapter 9B — Foster Wheeler Startup Bypass System (printed pp. 9B-27 – 9B-33)

```yaml
id: pss-cmp-fw-flash-tank-sliding-pressure-system
kind: figure
teaches: >
  Foster Wheeler's flash-tank-based sliding pressure system, structurally
  identical in concept to the B&W design (a flash tank between primary and
  secondary superheater, taken out of the loop once superheated steam is
  available) — fully tagged with its own BW-series valve designations
  (BW-207, BW-401, BW-205, BW-218, BW-219, BW-240, BW-241, BW-230,
  "Feedwater Regulator").
concept-tags: [Foster Wheeler, flash tank, sliding pressure system, superheater, moisture separator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-35 'Flash tank sliding pressure system,' p. 9B-27 — drawing E0159"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled system P&ID, structurally analogous to the B&W Figure 9B-6
  system but this is Foster Wheeler's own version of it (confirmed distinct
  drawing number, E0159 vs. E0133) — not a duplicate.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-fw-integral-separator-startup-system
kind: figure
teaches: >
  Foster Wheeler's alternative Integral Separator Startup System (ISSS): an
  integral separator installed between the furnace outlet and the primary
  superheater instead of a flash tank — rated for full boiler design
  pressure/temperature and kept in the loop during once-through operation
  (unlike a flash tank, which is bypassed), avoiding some of the extra
  controls and valves a flash-tank isolation scheme needs; fully tagged with
  its own valve set (P, P2, Pb, Y, W, PPR, D, E, F, drain valve, turbine
  stop valve, turbine stop valve bypass, heater level control valve).
concept-tags: [Foster Wheeler, Integral Separator Startup System, ISSS, moisture separator, once-through operation, hybrid sliding pressure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-36 'Integral separator startup system,' p. 9B-29 — drawing E0160"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled system P&ID — Style Guide §6.3 applies if ever placed on a
  slide. Serves as the reference key for the ISSS-specific startup-sequence
  bundle below (the flash-tank system, Figure 9B-35, has no separate
  mode-sequence run of its own printed in this chapter).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-fw-isss-startup-sequence-mode-diagrams
kind: figure
teaches: >
  The Foster Wheeler Integral Separator Startup System's five-stage startup
  sequence, told as successive redraws of the Figure 9B-36 system: flushing
  (Figure 9B-37, establishing correct feedwater chemistry via the P/Pb/P2/Y/
  W/PPR valves before any firing); light off to 8% load (Figure 9B-38,
  firing begins, turbine stop valve opens to warm/roll the turbine); 8–9%
  load (Figure 9B-39, printed caption reads "89% load" but the surrounding
  text discusses this as the ~8-9% load stage — see this record's own
  low-confidence flag); ramping the boiler 8–25% load (Figure 9B-40, P1/P2/
  Pb valves close as W valves open to control boiler pressure); and ramping
  the boiler 25–60% load (Figure 9B-41, Y valves open to increase turbine
  inlet pressure toward full separator pressure).
concept-tags: [Foster Wheeler, Integral Separator Startup System, ISSS, flushing, light off, ramp boiler, separator pressure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figures 9B-37 through 9B-41 (five successive mode redraws), pp. 9B-29 – 9B-33 — drawings E0161 (9B-37), E0162 (9B-38), E0163 (9B-39), E0164 (9B-40), E0165 (9B-41)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  BUNDLED RECORD (deliberate, see this file's intro): five printed figure
  numbers, one continuous procedural narrative (the FW ISSS startup
  sequence), each redraw of the same Figure 9B-36 base schematic differing
  only in which valves are shown open/closed/throttling. LOW-CONFIDENCE
  FLAG: Figure 9B-39's printed caption reads "89% load" verbatim (confirmed
  directly against the rendered page) — almost certainly a source
  typesetting error for "8-9% load," given it sits directly between "Light
  off to 8% load" (9B-38) and "Ramp boiler, 8-25% load" (9B-40) in both the
  figure sequence and the numbered five-stage list the surrounding text
  itself gives ("2. Light off to 8% load... 3. Ramp boiler, 8-25% load").
  Reported as a source citation/caption anomaly, not silently corrected.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-cavitrol-iv-trim-variety-valve
kind: figure
teaches: >
  Cavitrol IV trim's availability across a variety of body designs to fit
  different piping arrangements and service conditions — illustrated with
  an angle-body valve cutaway and the caption's own worked example: this
  configuration is "ideally suited to services such as the BE application
  on Combustion Engineering" boilers, tying the trim technology explicitly
  back to the CE BE valve discussed earlier in this chapter.
concept-tags: [Cavitrol IV trim, body design variety, angle valve, BE application, Combustion Engineering]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 9B-42 'Cavitrol IV trim is available in a variety of body designs to fit piping and a variety of service conditions. This valve is ideally suited to services such as the BE application on combustion engineering,' p. 9B-33 — drawing W5601"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fully sectioned photorealistic angle-body cutaway. Last figure in Chapter
  9B; PDF p. 154 (printed "9B-34") is a confirmed blank trailing page before
  the Chapter 9C divider at PDF p. 155.
mediaStatus: unreviewed
```

---

## Open Items

- **Chapter boundary**, confirmed directly: Chapter 9B divider = PDF p. 121;
  real content ends at PDF p. 153 (printed 9B-33, Figure 9B-42); PDF p. 154
  (printed "9B-34") is a confirmed blank trailing page; Chapter 9C divider =
  PDF p. 155 (already established in `ch9c.md`). Every page 121–154 was
  rendered at 150dpi and read directly.
- **Full coverage accounting**: Figures 9B-3 through 9B-42 — 40 real,
  sequentially-numbered figures, every one accounted for. 23 records were
  minted: 17 individual records plus 3 deliberately bundled records (the
  B&W 9-figure startup sequence, the CE 6-figure startup sequence, and the
  FW 5-figure ISSS startup sequence — 20 figures total folded into those 3
  records), per the bundling judgment call stated in this file's intro and
  in each bundled record's own `notes`. No figure was skipped or omitted.
  Figures 9B-1 and 9B-2 do not exist in this chapter — chapter numbering
  begins at 9B-3, confirmed directly (the chapter's first two pages, PDF
  121–122/printed 9B-1–9B-2, carry only introductory prose with no
  figures before Figure 9B-3 on printed p. 9B-2).
- **Low-confidence flags**: Figure 9B-39's printed caption reads "89% load"
  verbatim — almost certainly a source typesetting error for "8-9% load"
  given its position in the sequence and the surrounding text's own
  numbered stage list; flagged honestly in
  `pss-cmp-fw-isss-startup-sequence-mode-diagrams`'s own `notes`, not
  silently corrected.
- **Duplicate-figure-number / source-citation-error findings**: none beyond
  the Figure 9B-39 caption anomaly above. One same-document duplicate image
  found: Figure 9B-34's drawing (W5817, HPS with Micro-Form trim) is the
  identical image already catalogued as this book's own Figure 9A-10B in
  `Component Index — Power & Severe Service Sourcebook ch9a.md` — cross-
  referenced in `pss-cmp-hps-microform-trim-cutaway`'s own `notes`, not
  duplicated as new content.
- **Table-exclusion confirmation**: two unnumbered "Guideline Summary"
  reference tables were found and excluded — "B & W Once-through
  Supercritical Boilers" (p. 9B-17 / PDF p. 137) and "CE Once-through
  Supercritical Boilers" (p. 9B-28 / PDF p. 148) — both are genuine
  valve-description/critical-parameters/Fisher-recommendation summary
  tables with no "Figure" or "Table 9B-N" caption or number, correctly
  excluded per the tables-vs-figures rule (no printed figure number to
  qualify them). Foster Wheeler's section carries no equivalent summary
  table.
- **Bundling judgment call, stated for completeness**: 20 of this chapter's
  40 figure numbers (three separate manufacturer-specific startup-mode
  sequences) were bundled into 3 records rather than 20 — argued explicitly
  in this file's intro, extending the same editorial-judgment principle
  already applied once in this book's Chapter 8. Flagged here for
  visibility in any future schema-drift review, and because a course
  builder needing one specific startup stage should cite the specific
  figure number named inside the relevant bundled record's own `teaches`
  text or `source.locator`, not the bundle record generically.
- **Cross-reference findings**: checked against `Component Index — Power &
  Severe Service Sourcebook ch9a.md` (in this pass's own context) — found
  one genuine same-document duplicate (Figure 9B-34 / Figure 9A-10B, W5817,
  see above). No cross-reference against the Oil & Gas Sourcebook or the
  Control Valve Handbook was run in this pass (this chapter's sliding-
  pressure/supercritical-startup content is unique to the Power & Severe
  Service industry section and has no obvious counterpart elsewhere in the
  library) — left for the closing whole-library sweep per standing
  practice.
- **Archive/legacy material**: none consulted, none needed — first-party
  current Fisher/Emerson document throughout.
