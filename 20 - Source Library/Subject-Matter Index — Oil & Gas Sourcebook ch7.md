---
title: Subject-Matter Index — Oil & Gas Sourcebook ch7
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch7 — Onshore Oil and Gas Production
updated: 2026-09-08
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 7

**Chapter 7 — "Onshore Oil and Gas Production."** Standing library-cataloging
pass, NOT tied to any course — built ahead of any course actually needing
these figures, per `Source Library.md`'s "two ways a subject-matter index gets
triggered." Matches the batch shape of the ch1/ch2/ch3/ch5/ch6 passes of this
same chapter series.

**First batch** — the six figures from the chapter's opening sections: the
onshore production process overview (Figure 7-1), the well site & gathering
system with its choke-valve product photo (Figures 7-2, 7-3), and the
separation-site process with its two representative valve-hardware photos
(Figures 7-4, 7-5, 7-6). All six confirmed against the real page text and
image before extraction — none were skipped or fabricated.

**Second batch** (2026-09-08) — the next five figures, continuing the
chapter's own sequence with no gap: the Gas Compression section's process
schematic and two representative valve-hardware photos (Figures 7-7, 7-8,
7-9), and the Oil Processing section's two alternative treatment-path
diagrams — bulk treater (Figure 7-10) and electrostatic coalescer
(Figure 7-11). All five confirmed against the real page text and image
before extraction — none were skipped or fabricated.

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

### Chapter 7 — Introduction and Application Overview (printed pp. 7-1–7-3)

`kind: topic` entries added 2026-09-17, part of a vault-wide pass extending
the Control Valve Handbook's topic-indexing convention to the Industry
Specific Sourcebooks — the figures-only rule was never meant to exclude
genuine conceptual body prose, only tables. All five entries below are
read directly from the chapter's opening prose (PDF pp.72-74, printed
7-1–7-3), which frames every later figure-anchored section but was
completely invisible to the original figures-only pass.

```yaml
id: ogas-topic-onshore-production-overview
kind: topic
teaches: >
  Conventional onshore oil and gas production breaks into four main
  processes, in sequence: (1) oil, gas, and water separation; (2) crude oil
  treatment and preparation for distribution; (3) gas dehydration and
  compression; (4) water treatment and injection. Raw fluid (oil, gas,
  water, and undesired products) leaves the well site, is gathered through
  a manifold system, and enters a separation facility; separated gas is
  compressed and sent to a gas plant, crude oil to a refinery. Because the
  methods and equipment used at each site are broadly similar regardless of
  production scale, control valve selection is largely independent of site
  scale and scope — production scale varies, valve-selection logic does not.
concept-tags: [onshore production, process overview, well site, separation, crude oil treatment, gas dehydration, gas compression, water treatment, valve selection scope-independence]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 7 'Onshore Oil and Gas Production,' printed pp. 7-1–7-3 — introductory/overview prose, not figure-anchored."
relatedFigures: [ogas-cmp-onshore-production-process-flow]
relatedTopics: [ogas-topic-crude-oil-dehydration-methods, ogas-topic-compressor-skid-sizing-factors]
used-by: []
notes: >
  Read directly from the real chapter-opening prose (PDF pp.72-74, printed
  7-1–7-3), not inferred from Figure 7-1's caption alone. The "valve
  selection is largely independent of site scale and scope" line is the
  chapter's own explicit framing for why this application-review chapter
  is organized by process stage rather than by field size.
```

```yaml
id: ogas-topic-staged-separation-pressure-design
kind: topic
teaches: >
  Separation sites commonly use two or more separators in series to
  optimally separate gas, oil, and water. Each separator's pressure
  classification is set by its pressure-rating capability: high-pressure
  vessels are typically ASME CL600, intermediate CL300, low CL150. The
  first separator in the series is always rated highest, with each
  subsequent stage typically reducing until fluids reach ambient pressure —
  the number of stages depends on the production field's pressure, though
  most fields use a high/intermediate/low three-stage train. The inlet
  (first-stage) separator provides a significant cut in inlet pressure and
  is well suited to smoothing surging liquid flows; unprocessed raw
  production (with its sand/sediment) always enters here first.
concept-tags: [separator staging, pressure classification, ASME class, high pressure separator, intermediate pressure separator, low pressure separator, inlet separator]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 7 'Onshore Oil and Gas Production,' printed p. 7-2 — Oil, Gas, and Water Separation prose, not figure-anchored."
relatedFigures: [ogas-cmp-process-fluid-separation-system]
relatedTopics: [ogas-topic-separator-gas-outlet-pressure-control, ogas-topic-separator-liquid-level-control-mechanism]
used-by: []
notes: >
  Read directly from the real prose (PDF p.73, printed 7-2). This is the
  design REASONING behind the three-stage high/intermediate/low structure
  `ogas-cmp-process-fluid-separation-system` (Figure 7-4) shows — that
  figure's own teaches field documents the valve stations, not why the
  three pressure classes exist or why the first stage is always highest.
```

```yaml
id: ogas-topic-crude-oil-dehydration-methods
kind: topic
teaches: >
  Crude oil treatment/stabilization removes hydrogen sulfide, light
  hydrocarbons (methane through butane), and water, producing a safe,
  transportable crude at atmospheric pressure. Four dehydration methods
  exist in the source, only two of which are shown as figures in this
  chapter: electrostatic coalescers (high-voltage field coalesces entrained
  water into droplets, also removing dissolved salts — see
  `ogas-cmp-electrostatic-coalescer-oil-treatment-system`) and bulk
  treaters (see `ogas-cmp-bulk-treater-oil-treatment-system`). The source
  also names hydrocyclones (centrifugal force drives lighter oil droplets to
  a low-pressure central core for reverse-flow removal, clean water exits
  downstream) and flotation cells (fine gas bubbles generated in the water
  attach to oil droplets/solids and lift them to the surface for collection)
  — neither of which has any figure anywhere in this chapter.
concept-tags: [crude oil treatment, stabilization, electrostatic coalescer, bulk treater, hydrocyclone, flotation cell, dehydration, dissolved salts]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 7 'Onshore Oil and Gas Production,' printed pp. 7-2–7-3 — Crude Oil Treatment and Preparation prose, not figure-anchored."
relatedFigures: [ogas-cmp-bulk-treater-oil-treatment-system, ogas-cmp-electrostatic-coalescer-oil-treatment-system]
relatedTopics: [ogas-topic-onshore-production-overview]
used-by: []
notes: >
  Read directly from the real prose (PDF pp.73-74, printed 7-2–7-3). The
  real, concrete finding this topic-indexing pass exists to catch: two of
  the four named dehydration methods (hydrocyclones, flotation cells) were
  completely invisible to the original figures-only pass — the source
  describes their mechanism in prose but never illustrates them in this
  chapter. Not fabricated or expanded beyond what the source states; no
  numeric parameters are given for either method in this chapter.
```

```yaml
id: ogas-topic-compressor-skid-sizing-factors
kind: topic
teaches: >
  A gas-compression skid's capacity and horsepower are driven primarily by
  three factors: suction pressure and temperature, discharge pressure and
  temperature, and speed — allowing the compressor to run the engine Hp as
  fully loaded and efficiently as possible for specified conditions. Skids
  range from 50 Hp (smallest) to 8,000 Hp (largest), using reciprocating or
  rotary screw compressors driven by natural gas engines/turbines or electric
  motors. Because these conditions change over the life of a project, a
  suction control valve and a recycle (anti-surge) valve are both required to
  give the skid the flexibility to keep operating as field pressure depletes.
concept-tags: [compressor skid, horsepower sizing, suction pressure, discharge pressure, reciprocating compressor, rotary screw compressor, gas engine drive, electric motor drive]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 7 'Onshore Oil and Gas Production,' printed p. 7-2 — Gas Dehydration and Compression intro prose, not figure-anchored."
relatedFigures: [ogas-cmp-compressor-system]
relatedTopics: [ogas-topic-onshore-production-overview]
used-by: []
notes: >
  Read directly from the real prose (PDF p.73, printed 7-2). Explains WHY a
  suction control valve and recycle valve are both structurally necessary
  (not just what they do) — the "conditions change over project life"
  reasoning is the real justification the existing `ogas-cmp-compressor-system`
  figure entry doesn't itself carry.
```

```yaml
id: ogas-topic-sour-service-material-selection
kind: topic
teaches: >
  Onshore production materials selection commonly follows NACE
  MR0175/ISO 15156 metallurgical guidelines, the most common user-applied
  standard for sour-service (H2S-containing) production environments — a
  shift to high-alloy materials may be necessary depending on field
  conditions. The same corrosion/erosion concern applies at the well site
  and gathering system specifically, where sour gases and particulates in
  unprocessed flow can damage standard materials.
concept-tags: [sour service, NACE MR0175, ISO 15156, corrosion resistance, erosion resistance, material selection, high alloy materials]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 7 'Onshore Oil and Gas Production,' printed p. 7-3 (Application Review intro) and p. 7-4 (Well Site and Gathering System) — material-selection prose, not figure-anchored."
relatedFigures: [ogas-cmp-well-site-choke-valve-photo, ogas-cmp-well-site-gathering-system]
relatedTopics: [ogas-topic-onshore-production-overview]
used-by: []
notes: >
  Read directly from the real prose (PDF p.74, printed 7-3; PDF p.75,
  printed 7-4). Deliberately brief, matching the source's own brief
  treatment — not padded with outside NACE/ISO 15156 knowledge beyond what
  this chapter itself states. Likely to recur across other Oil & Gas
  Sourcebook chapters given how commonly "sour service" is invoked; not
  cross-checked against other chapters in this pass (out of scope, ch7
  only).
```

### Chapter 7 — Onshore production process overview (printed p. 7-1)

```yaml
id: ogas-cmp-onshore-production-process-flow
teaches: >
  The general process flow typical of conventional onshore oil and gas
  production, top level: wellhead fluid enters the well site & gathering
  system, flows to oil/gas/water separation (bounded as "the separation
  site"), and separates into three downstream paths — gas to gas dehydration
  and compression, oil to crude oil treatment, and water to water treatment
  and injection/disposal. This is the chapter's orienting figure — every
  later section (well site, separation site, water treatment) is a zoom-in
  on one block of this diagram.
concept-tags: [onshore production, process flow, well site, gathering system, separation site, gas dehydration, crude oil treatment, water treatment, wellhead fluid]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-1 (drawing number
      E1481, printed p. 7-1) — "Figure 7-1. Production Process Flow Diagram."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig1-onshore-production-process-flow.png
    locator: "already extracted — cropped directly from the source PDF (p. 72 / printed 7-1) at 300 dpi, full block diagram (SEPARATION SITE dashed boundary + all five process blocks) + drawing number, caption excluded"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The dashed "SEPARATION SITE" boundary in this figure is the same scope
  boundary the chapter's own section headings use ("Separation Site" governs
  Figures 7-4 through 7-6 below) — worth preserving if this figure and
  `ogas-cmp-process-fluid-separation-system` (Figure 7-4) are ever used
  together on a teaching sequence.
```

### Chapter 7 — Well site & gathering system (printed p. 7-4)

```yaml
id: ogas-cmp-well-site-gathering-system
teaches: >
  Well site & gathering system schematic: fluid from the reservoir passes
  through a well site choke valve (item 1, an on/off + throttling valve at
  each well) before joining a common header; a manifold control valve (item
  2) then combines the gathered trunk-and-lateral flow and sends it on to
  the separation site. Two wells are shown feeding one gathering line, the
  pattern repeating per well pad.
concept-tags: [well site, gathering system, trunk and lateral, well site choke valve, manifold control valve, wellhead fluid, separation site]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-2 (drawing number
      E1482, printed p. 7-4) — "Figure 7-2. Well Site & Gathering System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig2-well-site-gathering-system.png
    locator: "already extracted — cropped directly from the source PDF (p. 75 / printed 7-4) at 300 dpi, both valve stations (items 1 and 2), the FLUID FROM RESERVOIR / TO SEPARATION SITE labels, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①② mark the choke valve and the manifold control
  valve respectively — per Style Guide §6.2, these are the source's own
  callout key (matched to Table 7-1 "Well Site Choke Valve" item 1 and Table
  7-2 "Manifold Control Valve" item 2 in the surrounding text), not a step
  sequence; name the two schemes apart if this figure is ever placed
  alongside a numbered procedure list. Companion product photo:
  `ogas-cmp-well-site-choke-valve-photo` (Figure 7-3), immediately following
  in the source.
```

```yaml
id: ogas-cmp-well-site-choke-valve-photo
teaches: >
  Representative hardware for the well site choke valve (item 1 in Figure
  7-2): a high-pressure angle-pattern globe control valve, Design D or DA.
  Angle-body selection is the primary choice at this duty point because it
  handles erosive, high-pressure, particulate-laden raw wellhead flow
  (inlet pressure up to 3000 psig / 207 bar) more robustly than an
  in-line globe body.
concept-tags: [well site choke valve, angle valve, Design D, Design DA, high pressure, erosive service, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-3 (drawing number
      W7859-1, printed p. 7-4) — "Figure 7-3. Product Catalog − High Pressure
      − D or DA; Oil and Gas − D or DA."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig3-well-site-choke-valve-photo.png
    locator: "already extracted — cropped directly from the source PDF (p. 75 / printed 7-4) at 300 dpi, full valve photo (actuator to body) + drawing number, caption excluded"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Pairs with Table 7-1 "Well Site Choke Valve" (Valve Type and Pressure
  Class: D, DA; Shutoff Requirement: ANSI Class V) in the surrounding text —
  that table is not separately catalogued here (subject-matter index catalogues
  figures, not tables); cite it from the source text directly if a future
  slide needs the parameter values alongside this photo.
```

### Chapter 7 — Separation site (printed pp. 7-5 – 7-7)

```yaml
id: ogas-cmp-process-fluid-separation-system
teaches: >
  Full separation-site process diagram: fluid from wells passes through a
  high pressure separator, an intermediate pressure separator, and a low
  pressure separator in series, each with a gas outlet (to natural gas
  dehydration and compression), and each stage's oil and water streams
  routed onward (oil to crude oil treatment, water to water treatment and
  injection). Thirteen numbered control valves mark every control point
  across the three stages — separator inlet control, gas outlet back
  pressure control, and liquid (oil/water) level control at each stage.
concept-tags: [separation site, high pressure separator, intermediate pressure separator, low pressure separator, gas outlet pressure control, liquid level control, gas dehydration, crude oil treatment, water treatment]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-4 (drawing number
      E1483, printed p. 7-5) — "Figure 7-4. Process Fluid Separation
      System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig4-process-fluid-separation-system.png
    locator: "already extracted — cropped directly from the source PDF (p. 76 / printed 7-5) at 300 dpi, all three separator stages, all 13 numbered valve stations, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–⑬ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Separator Inlet Control ... 8. Intermediate Pressure
  Separator Oil Level Control) and Tables 7-3 through 7-10 — per Style Guide
  §6.2 these stay as the source drew them, not renumbered. This is the
  "SEPARATION SITE" zoom-in on `ogas-cmp-onshore-production-process-flow`
  (Figure 7-1). Companion hardware photos: `ogas-cmp-v260-valve-exterior`
  (Figure 7-5, separator inlet control) and
  `ogas-cmp-easydrive-actuator-d4-valve` (Figure 7-6, level control), both
  immediately following in the source.
```

```yaml
id: ogas-cmp-v260-valve-exterior
teaches: >
  Representative hardware for separator inlet control (valve stations 1, 6,
  8 in Figure 7-4): a V260C trunnion-mounted ball valve with a full-bore,
  high-recovery, throttling-capable design. Selected because it must pass
  slugs of gathered fluid (gas, oil, water, and solids, possibly forming a
  liquid slug) without restriction while still providing the final pressure
  cut before the fluid enters the separator vessel — the rugged trunnion
  mount gives heavy, stable guiding under that duty.
concept-tags: [separator inlet control, V260C, trunnion mounted ball valve, full bore, high recovery, throttling, slug catcher, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-5 (drawing number
      W6539-1, printed p. 7-6) — "Figure 7-5. V260 Valve Exterior."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig5-v260-valve-exterior.png
    locator: "already extracted — cropped directly from the source PDF (p. 77 / printed 7-6) at 300 dpi, full valve photo (actuator, positioner, body, flanged outlet) + drawing number, caption excluded"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Pairs with Table 7-3 "High Pressure Separator Inlet Control Valve" (Valve
  Type and Pressure Class: V260C/Vee-Ball, ASME CL600/900) and the "Separator
  Inlet Control" / "Gas Outlet Back Pressure Control" text on printed p. 7-5
  — those tables/text are not separately catalogued here (subject-matter index
  catalogues figures, not tables). Immediately follows
  `ogas-cmp-process-fluid-separation-system` (Figure 7-4) in the source.
```

```yaml
id: ogas-cmp-easydrive-actuator-d4-valve
teaches: >
  Representative hardware for the separator liquid-level and gas-outlet
  pressure-control duty points across all three separator stages (valve
  stations 2, 3, 4, 5, 7, 9, 10, 11, 12, 13 in Figure 7-4): a Fisher
  easy-Drive electric actuator mounted on a D4 globe control valve. The
  D2/D3/D4/easy-Drive/e-body/Vee-Ball family is the valve type and pressure
  class listed across every gas-outlet and level-control table in this
  section (Tables 7-4 through 7-10).
concept-tags: [separator level control, gas outlet pressure control, easy-Drive actuator, D4 control valve, e-body, electric actuator, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-6 (drawing number
      W9934-2, printed p. 7-7) — "Figure 7-6. easy-Drive Actuator on D4
      Control Valve."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig6-easydrive-actuator-d4-valve.png
    locator: "already extracted — cropped directly from the source PDF (p. 78 / printed 7-7) at 300 dpi, full actuator-and-valve photo + drawing number, caption excluded"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Pairs with Tables 7-4 through 7-10 (High/Intermediate/Low Pressure
  Separator Gas Outlet and Water/Oil Level Control Valves), all of which
  list "D2/D3/D4/easy-Drive/e-body/Vee-Ball" as the valve type and pressure
  class — those tables are not separately catalogued here (subject-matter index
  catalogues figures, not tables). Immediately follows
  `ogas-cmp-v260-valve-exterior` (Figure 7-5) in the source.
```

`kind: topic` entries added 2026-09-17, elaborating the functional
reasoning behind Figure 7-4's numbered valve stations — read directly from
the real prose surrounding that figure, not inferred from its own caption.

```yaml
id: ogas-topic-separator-gas-outlet-pressure-control
kind: topic
teaches: >
  A separator's gas-outlet back-pressure control valve sits at the top of
  the vessel and controls gas flow out to keep the separator operating in
  its optimal separation pressure range — the outgoing gas is either sent
  to the compression skid or directly to export. This gas stream carries
  all the produced-gas constituents present at the well site, and depending
  on location may see both low and high pressure drops, which can require
  noise-attenuating trim; globe-style construction is the majority
  solution.
concept-tags: [separator gas outlet, back pressure control, noise attenuating trim, globe valve, optimal separation pressure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 7 'Onshore Oil and Gas Production,' printed pp. 7-5–7-6 — Gas Outlet Back Pressure Control prose, not figure-anchored."
relatedFigures: [ogas-cmp-process-fluid-separation-system, ogas-cmp-easydrive-actuator-d4-valve]
relatedTopics: [ogas-topic-staged-separation-pressure-design]
used-by: []
notes: >
  Read directly from the real prose (PDF pp.77-78, printed 7-5–7-6). This
  is the functional WHY behind valve stations 3, 4, 5 in
  `ogas-cmp-process-fluid-separation-system` (Figure 7-4) — that entry
  names the stations, this topic explains what the control loop is
  actually doing and why noise trim sometimes matters.
```

```yaml
id: ogas-topic-separator-liquid-level-control-mechanism
kind: topic
teaches: >
  Separator liquid-level dump valves are placed based on the gravity
  separator's design and controlled by a level system (a controller coupled
  to a displacer) — one valve per stage controls water level, a second
  controls oil level. When the level system senses a level above set point,
  it signals the corresponding valve to open, lowering the level; separated
  water routes to water treatment and injection, separated oil to storage
  tanks pending shipment to a refinery. Both level-control valves may see
  flashing or cavitation conditions, which can require hardened trim or
  Cavitrol III trim.
concept-tags: [separator level control, dump valve, level controller, displacer, flashing, cavitation, Cavitrol III trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 7 'Onshore Oil and Gas Production,' printed p. 7-6 — Separator Liquid Level Control prose, not figure-anchored."
relatedFigures: [ogas-cmp-process-fluid-separation-system, ogas-cmp-easydrive-actuator-d4-valve]
relatedTopics: [ogas-topic-staged-separation-pressure-design, ogas-topic-separator-gas-outlet-pressure-control]
used-by: []
notes: >
  Read directly from the real prose (PDF p.77, printed 7-6). Generalizes
  across all three separator stages (valve stations 2,3,7,8,9,10,12,13 in
  Figure 7-4) — the control-loop mechanism itself (level system → dump
  valve) is stated once in the source and applies to every stage, not
  repeated per stage.
```

```yaml
id: ogas-topic-separator-vent-to-flare-safety-function
kind: topic
teaches: >
  A separator's vent-to-flare valve is a high-pressure emergency relief
  valve: if separator pressure rises above set point, it is relieved to the
  flare header to safeguard the vessel. These valves see very high pressure
  drops, producing high aerodynamic noise — globe-style valves with
  attenuating trim (Whisper Trim I, Whisper Trim III) are commonly required
  to mitigate noise and vibration.
concept-tags: [vent to flare, emergency relief, overpressure protection, aerodynamic noise, Whisper Trim, flare header]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 7 'Onshore Oil and Gas Production,' printed pp. 7-6–7-7 — Separator Vent to Flare prose, not figure-anchored."
relatedFigures: [ogas-cmp-process-fluid-separation-system]
relatedTopics: [ogas-topic-staged-separation-pressure-design]
used-by: []
notes: >
  Read directly from the real prose (PDF pp.77-78, printed 7-6–7-7). This
  is valve stations 11-13 in Figure 7-4's own numbered key — the figure
  entry names the stations generically ("gas outlet back pressure control
  at each stage"), this topic is the specific safety-relief function and
  noise-trim reasoning for the vent-to-flare subset of those stations
  specifically, distinct from the ordinary gas-outlet stations covered by
  `ogas-topic-separator-gas-outlet-pressure-control`.
```

### Chapter 7 — Gas Compression (printed pp. 7-9 – 7-10)

```yaml
id: ogas-cmp-compressor-system
teaches: >
  Single-stage gas-compression skid process flow, four control valve
  stations: (1) compression suction throttle control at the first-stage
  scrubber inlet — sized so the valve normally runs 50-70% open (never above
  85% or below 15%), keeping a minimum pressure drop across the valve as
  upstream/downstream pressures equalize, for the most efficient use of
  compressor Hp; (2) compression suction scrubber level control — a dump
  valve regulating the hydrocarbon/water mixture level in the scrubber,
  which removes particulates so only dry gas reaches the compressor;
  (3) compressor anti-surge (recycle) control — opens to normalize suction
  and discharge pressure and keep the compressor running without shutting
  down or being damaged when low suction or high discharge pressure occurs;
  (4) compressor export control — meters the compressed gas out to the
  metering station / pipeline; if this valve is not operating, there is no
  output to the pipeline system.
concept-tags: [gas compression, compressor system, suction throttle control, scrubber level control, anti-surge, recycle valve, export control, natural gas compressor]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-7 (drawing number
      E1484, printed p. 7-9) — "Figure 7-7. Compressor System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig7-compressor-system.png
    locator: "already extracted — cropped directly from the source PDF (p. 80 / printed 7-9) at 300 dpi, all four numbered valve stations, scrubber, compressor, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–④ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Compression Suction Throttle Control ... 4. Compressor
  Export Control) and Tables 7-16 through 7-19 — per Style Guide §6.2 these
  stay as the source drew them, not renumbered. This is the "Gas
  Compression" companion to `ogas-cmp-process-fluid-separation-system`
  (Figure 7-4) — both feed from the separation site's gas outlets. Companion
  hardware photos: `ogas-cmp-compression-suction-throttle-valve-photo`
  (Figure 7-8, valve station 1) and `ogas-cmp-compressor-antisurge-valve-photo`
  (Figure 7-9, valve station 3), both immediately following in the source.
```

```yaml
id: ogas-cmp-compression-suction-throttle-valve-photo
teaches: >
  Representative hardware for compression suction throttle control (valve
  station 1 in Figure 7-7, Table 7-16): a Fisher 657 easy-e EZ low-angle
  control valve, NPS 2, ASME CL150, captioned with a 67AFR and a FIELDVUE
  DVC6010 digital valve controller as the instrumentation shown.
concept-tags: [compression suction throttle, Fisher 657 easy-e, EZ low angle valve, DVC6010, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-8 (drawing number
      W9244, printed p. 7-9) — "Figure 7-8. 657 easy-e EZ Low Angle NPS 2
      CL150 67AFR DVC6010."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig8-657-easye-ez-low-angle-antisurge-valve.png
    locator: "already extracted — cropped directly from the source PDF (p. 80 / printed 7-9) at 300 dpi, full valve photo (actuator to body) + drawing number, caption excluded"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Pairs with Table 7-16 "Compression Suction Throttle Control Valve" (Valve
  Type and Pressure Class: e-body/Vee-Ball, ASME CL150/300/600 — the general
  duty-point spec; this photo shows the specific low-angle 657 easy-e EZ
  hardware pictured) — that table is not separately catalogued here
  (subject-matter index catalogues figures, not tables). Immediately follows
  `ogas-cmp-compressor-system` (Figure 7-7) in the source.
```

```yaml
id: ogas-cmp-compressor-antisurge-valve-photo
teaches: >
  Representative hardware for compressor anti-surge / recycle control
  (valve station 3 in Figure 7-7, Table 7-18): a 12x8 EW antisurge valve
  fitted with a 585C size 130 piston actuator, a FIELDVUE DVC6200 digital
  valve controller, and 2625 boosters. Anti-surge valves must respond
  quickly and accurately to set-point changes with minimal travel overshoot
  and provide throttling at various travel ranges; trip systems open the
  valve to full travel in under one second in most cases.
concept-tags: [compressor anti-surge, recycle valve, EW valve, 585C piston actuator, DVC6200, boosters, fast stroke, trip response, product photo]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-9 (drawing number
      X0202-1, printed p. 7-10) — "Figure 7-9. 12x8 EW Antisurge Valve, 585C
      Size 130 Actuator, DVC6200 Instrument, and 2625 Boosters."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig9-12x8-ew-antisurge-valve-585c.png
    locator: "already extracted — cropped directly from the source PDF (p. 81 / printed 7-10) at 300 dpi, full valve photo (actuator, positioner, boosters, body, flanged outlet) + drawing number, caption excluded"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Pairs with Table 7-18 "Compressor Anti-surge Control Valve" (Valve Type
  and Pressure Class: e-body/FB/HP, ASME CL150/300/600/900; Trim Type:
  Whisper Trim III or WhisperFlo Trim) and the surrounding "Compressor
  Anti-surge" / "Anti-surge valves, also known as recycle valves..." text —
  those are not separately catalogued here (subject-matter index catalogues
  figures, not tables). Immediately follows the Table 7-17 / item-2 text in
  the source, on the page facing `ogas-cmp-compression-suction-throttle-valve-photo`
  (Figure 7-8).
```

### Chapter 7 — Oil Processing (printed pp. 7-11 – 7-12)

```yaml
id: ogas-cmp-bulk-treater-oil-treatment-system
teaches: >
  Bulk-treater oil-processing path — one of two alternative crude
  dehydration methods this chapter covers (the other is the electrostatic
  coalescer, see `ogas-cmp-electrostatic-coalescer-oil-treatment-system`,
  Figure 7-11). The bulk treater further separates any residual water from
  the crude oil product. Four numbered control valve stations: (1) bulk
  treater produced water — controls produced-water level in the bulk
  treater, relatively low pressure-drop ratios (globe valve typical; ball
  valve depending on pressure-recovery characteristics); (2) bulk treater
  oil out — controls oil flow from the bulk treater to the dry oil storage
  tank ahead of the main pump (globe valve typical); (3) dry oil pump
  recirculation — recycles flow around the main discharge pump to prevent
  pump cavitation, high pressure drops and potential damaging cavitation
  (globe valve with anti-cavitation trim typical); (4) crude oil discharge —
  controls the flow from the platform/site to the onshore pipeline and
  processing network.
concept-tags: [oil processing, bulk treater, produced water level, oil out, dry oil pump recirculation, anti-cavitation trim, crude oil discharge]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-10 (drawing
      number E1485, printed p. 7-11) — "Figure 7-10. Oil Treatment System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig10-oil-treatment-system.png
    locator: "already extracted — cropped directly from the source PDF (p. 82 / printed 7-11) at 300 dpi, all four numbered valve stations, bulk treater, dry oil tank, main pump, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①–④ are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Bulk Treater Produced Water ... 4. Crude Oil Discharge
  Valve) and Tables 7-20 through 7-23 — per Style Guide §6.2 these stay as
  the source drew them, not renumbered. The source's own caption is the
  generic "Oil Treatment System" — this id and `used-by`-facing name
  disambiguate it from Figure 7-11, which carries the identical generic
  half of its own two-line caption ("...Oil Treatment System"). Immediately
  precedes `ogas-cmp-electrostatic-coalescer-oil-treatment-system`
  (Figure 7-11, the alternative treatment path) in the source.
```

```yaml
id: ogas-cmp-electrostatic-coalescer-oil-treatment-system
teaches: >
  Electrostatic-coalescer oil-processing path — the alternative to the bulk
  treater (`ogas-cmp-bulk-treater-oil-treatment-system`, Figure 7-10). The
  coalescer subjects the crude oil stream to a high-voltage electrostatic
  field, causing entrained water to coalesce into droplets that fall free
  from the oil; this also helps remove dissolved salts left in the stream.
  Two numbered control valve stations: (1) electrostatic treater oil out —
  controls oil flow out of the coalescer toward cargo storage, may sit
  before or after the crude pumps (globe valve typical); (2) electrostatic
  treater produced water — controls the produced-water level in the
  coalescer, relatively low pressure-drop ratios (globe valve typical; ball
  valve depending on pressure-recovery characteristics).
concept-tags: [oil processing, electrostatic coalescer, high voltage electrostatic field, water coalescence, dissolved salts, produced water level, oil out, cargo storage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 7 "Onshore Oil and Gas Production," Figure 7-11 (drawing
      number E1486, printed p. 7-12) — "Figure 7-11. Electrostatic
      Coalescer Oil Treatment System."
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch7-fig11-electrostatic-coalescer-oil-treatment-system.png
    locator: "already extracted — cropped directly from the source PDF (p. 83 / printed 7-12) at 300 dpi, both numbered valve stations, coalescer vessel, cargo-storage outlet, drawing number and caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The figure's own numbers ①② are the source's own valve-station key,
  cross-referenced one-to-one against the surrounding text's numbered
  subsections (1. Electrostatic Treater Oil Out; 2. Electrostatic Treater
  Produced Water) and Tables 7-24 / 7-25 — per Style Guide §6.2 these stay
  as the source drew them, not renumbered. Immediately follows
  `ogas-cmp-bulk-treater-oil-treatment-system` (Figure 7-10) in the source,
  under the same "Oil Processing" section heading.
```

---

## Open items

- **`kind: topic` pass (2026-09-17): 8 new topic entries added**, extending
  the CVH topic-indexing convention to this sourcebook — chapter's real
  component count is now 19 (11 figures + 8 topics). All read directly from
  the real body prose (PDF pp.72-78, printed 7-1–7-7), not inferred from
  existing figure captions. The most concrete finding: two of the four
  crude-oil dehydration methods this chapter names (hydrocyclones, flotation
  cells) have **no figure anywhere in this chapter** — completely invisible
  to the original figures-only pass (`ogas-topic-crude-oil-dehydration-methods`).
  Sections pp.7-8–7-12 (Gas Compression detail, Oil Processing) were checked
  and confirmed to have no further conceptual content beyond what the
  existing figure entries' own `teaches` fields already capture — not
  padded with a thin entry.
- **All eleven figures across both batches confirmed against the real page
  text and image before extraction** — none were skipped or fabricated.
  Figure numbering in this chapter runs continuously 7-1 through 7-11
  (confirmed by scanning printed pp. 7-1 – 7-12, PDF pages 72–83); no gaps
  anywhere in the 7-1 through 7-11 range.
- **Second batch correction:** the first batch's Open items note called
  Figures 7-7–7-11 "Gas Dehydration and Compression" — on inspection the
  real section headings covering this range are **"Gas Compression"**
  (Figures 7-7–7-9) and **"Oil Processing"** (Figures 7-10–7-11); "Gas
  Dehydration" does not appear as a section heading in this chapter.
  Corrected here rather than left standing.
- **Figure 7-1 through 7-11 is now the full run catalogued for this
  chapter** — no figures remain unindexed in Chapter 7 as printed (pp.
  7-1–7-12 checked in full across both batches).
- All eleven records in this file are `used-by: []` — this is a proactive,
  use-driven-ahead catalog per `Source Library.md`; no course currently
  references them.
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
