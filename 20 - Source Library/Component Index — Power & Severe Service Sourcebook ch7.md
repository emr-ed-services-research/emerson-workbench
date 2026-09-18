---
title: Component Index — Power & Severe Service Sourcebook ch7
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch7 — Steam Conditioning
updated: 2026-09-14
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 7

**Chapter 7 — "Steam Conditioning."** Standing library-cataloging pass, part
of the whole-document indexing of the Power & Severe Service Sourcebook,
ahead of Control Valve Engineering 1/2 course content-build — per
`Source Library.md`'s "standing full-chapter" trigger. Matches the rigor of
`Component Index — Oil & Gas Sourcebook ch1.md` and
`Component Index — Control Valve Handbook ch1.md`: every real page in the
chapter's confirmed range was rendered at 150dpi and read directly, every
real figure identified and visually verified against the rendered page.

Chapter boundaries were verified directly against the PDF: PDF p.69 is the
"Chapter 7 / Steam Conditioning" divider page, real content runs PDF
pp.69–83 (printed pp. 7-1 through 7-15), and PDF p.84 (printed "7-16") is a
blank trailing page before the "Chapter 8 / Power Plant Primer" divider at
PDF p.85 — confirmed by rendering p.83 and p.84 directly, the same
"trailing blank page" shape already documented for Control Valve Handbook
ch6/ch7 and for this book's own Chapter 6.

This pass catalogs existence and location only — it does not crop or extract
images, so each record's `source` carries a single locator, not a second
"already extracted" entry (this book has no `extracted-figures` crop folder
the way the Oil & Gas Sourcebook does). Every record's `used-by` is `[]` —
none are placed on a slide yet.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service is itself a
**current** first-party Fisher/Emerson document (© 2001, 2003, 2004 Fisher
Controls International LLC, Fourth Edition, D101449X012), so every record
below is `status: current`. No archive or legacy material was consulted for
this chapter.

## Components

### Chapter 7 — Thermodynamics of Steam (printed pp. 7-1–7-3)

```yaml
id: pss-cmp-water-temperature-enthalpy-btu-diagram
teaches: >
  The temperature-enthalpy diagram for water across its full phase range
  (ice heating, melting, water heating, evaporation, steam superheating),
  plotted against BTU added per pound of water — establishes that the
  greatest single thermal-energy input (970 BTU/lb) goes into vaporization
  itself, and that maximum heat-transfer efficiency requires operating near
  saturation temperature to recover that energy.
concept-tags: [thermodynamics of steam, temperature-enthalpy diagram, latent heat of vaporization, saturation temperature, superheat]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-1 'Temperature enthalpy diagram for water. Note that the greatest amount of thermal energy input is used to vaporize the water. Maximum efficiency in heat transfer requires operation at near saturation temperature to recover this energy,' p. 7-2 — drawing E0117"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  A single continuous temperature-vs-BTU-added curve spanning ice through
  superheated steam, with the ice-melting, boiling, and superheating slopes
  each separately annotated.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-water-th-diagram-saturation-vs-pressure
teaches: >
  A generalized temperature-enthalpy (T-H) diagram for water showing the
  liquid, vapor, and liquid-vapor ("steam dome") regions at multiple
  pressures (14.7 psia and 800 psia curves shown) — demonstrates that
  saturation temperature shifts with pressure, so choosing the right
  operating pressure lets a process get both the temperature it needs and
  good thermal efficiency.
concept-tags: [T-H diagram, steam dome, saturation temperature, critical point, liquid-vapor region, pressure selection]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-2 'Temperature enthalpy diagram for water showing that saturation temperature varies with pressure. By choosing an appropriate pressure, both correct system temperature and thermal efficiency can be accommodated,' p. 7-2 — drawing E0118"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  A full T-H dome plot with LIQUID / VAPOR / LIQUID-VAPOR regions labelled
  and two pressure curves (14.7 PSIA, 800 PSIA) shown for comparison.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-steam-thermodynamics-and-desuperheat-rationale
kind: topic
teaches: >
  Highly superheated steam (900-1100°F) is generated to do mechanical work,
  but superheated steam is a poor heat-transfer medium — a 10°F temperature
  drop in superheated steam only liberates 4.7 BTU/lb, versus over 976
  BTU/lb for the same 10°F drop once the steam has been desuperheated to
  near saturation, because most of the thermal energy (970 BTU/lb) is the
  latent heat of vaporization, released only near the saturation line, not
  spread evenly across the superheated region. A genuinely counter-intuitive
  real worked example: 165 psia/370°F steam (only 4°F of superheat, saturation
  temp 366°F) throttled through a pressure-reducing valve (an isenthalpic —
  constant-enthalpy — process) down to 45 psia comes out at 328°F, which
  looks cooler, but the saturation temperature at 45 psia has also dropped
  to 274°F — so the steam now has 54°F of superheat, MORE than before the
  throttling, not less. This "unintentional superheat" from pressure
  reduction is one of the two primary reasons to desuperheat (the other
  being protecting downstream equipment/process/product from excessive
  temperature).
concept-tags: [superheated steam, latent heat of vaporization, saturation temperature, isenthalpic throttling, unintentional superheat, desuperheating rationale]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 7 body prose, 'Thermodynamics of Steam' / 'Why Desuperheat?' sections, pp. 7-1–7-3 — prose, not figure-anchored"
relatedFigures: [pss-cmp-water-temperature-enthalpy-btu-diagram, pss-cmp-water-th-diagram-saturation-vs-pressure]
relatedTopics: [cvh-topic-desuperheater-sizing-methodology]
used-by: []
notes: >
  Read directly from the real chapter prose (pp. 7-1–7-3), not inferred from
  the two T-H diagram figures' own captions — the worked isenthalpic-
  throttling example (165 psia/370°F → 45 psia/328°F, 54°F superheat) does
  not appear on either figure at all. Cross-references CVH ch7's own
  desuperheater-sizing topic since both trace to the same underlying
  thermodynamic driver, though this chapter's worked example is genuinely
  distinct (a different real case, not a duplicate).
```

---

### Chapter 7 — Desuperheating and Desuperheaters (printed pp. 7-4–7-6)

```yaml
id: pss-cmp-insertion-style-desuperheater
teaches: >
  The insertion-style desuperheater: a single spray injection nozzle mounted
  through the pipe wall injects a controlled amount of cooling water
  directly into the superheated steam flow — the simplest direct-contact
  heat-transfer mechanism for reducing/controlling steam temperature.
concept-tags: [desuperheater, insertion style, spray injection nozzle, direct contact heat transfer, steam conditioning]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-3 'Insertion style desuperheater injects a controlled amount of cooling water into super-heated steam flow,' p. 7-4 — drawing E0865"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A pipe cross-section cutaway showing the nozzle assembly and its spray
  cone into the flow stream — unlabelled beyond the caption.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-dma-af-desuperheater
teaches: >
  Design DMA/AF desuperheater: a fixed-geometry-orifice, variable-geometry,
  back-pressure-activated spray nozzle design — the simplest desuperheater
  style, highly dependent on pressure differential, best suited to
  near-steady-load applications (about 4:1 turndown).
concept-tags: [desuperheater, Design DMA, fixed geometry spray orifice, back-pressure activated nozzle, mechanically atomized]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-4A 'Design DMA/AF desuperheater utilizes variable-geometry, back-pressure activated spray nozzles,' p. 7-5 — drawing W6310-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  First of four lettered sub-figures (7-4A–7-4D) on facing pages, each a
  distinct desuperheater product design — catalogued as separate records
  since each shows a genuinely different, separately captioned product, not
  variants of one drawing.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-dvg-af-desuperheater
teaches: >
  Design DVG/AF desuperheater: a variable-geometry, mechanically atomized,
  self-contained desuperheater (an upgrade from the fixed-geometry DMA/AF)
  that maintains an optimum pressure differential across the discharge
  orifice as flow varies — turndowns can exceed 40:1, suited to medium-to-
  high load-change applications; can integrate its own control valve and
  actuating trim.
concept-tags: [desuperheater, Design DVG, variable geometry nozzle, self-contained desuperheater, mechanically atomized, high turndown]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-4B 'Design DVG/AF variable-geometry, mechanically atomized, self-contained desuperheater for moderate to high flow variation,' p. 7-5 — drawing W6982-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Second of the four lettered sub-figures (see 7-4A's note on why each is a
  separate record).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-dvi-desuperheater
teaches: >
  Design DVI desuperheater: a "geometric enhanced" style that injects
  spraywater at the outlet of a venturi section, using the venturi's
  pressure recovery to keep turbulence and kinetic energy high at the
  injection point — assures excellent mixing and rapid atomization, suited
  to medium turndown (around 15:1) applications.
concept-tags: [desuperheater, Design DVI, geometric enhanced, venturi injection, rapid atomization]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-4C 'Design DVI desuperheater injects spraywater in the outlet of the venturi section, assuring excellent mixing and rapid atomization,' p. 7-5 — drawing W6313-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Third of the four lettered sub-figures (see 7-4A's note); a photo-realistic
  shaded cutaway rather than line-art, unlike the other three panels.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-dsa-desuperheater-nozzle
teaches: >
  Design DSA desuperheater: an externally-energized style that uses a
  high-pressure steam source (not the spraywater pressure itself) to ablate
  and shear the water into a fine mist — provides very high flow variation
  (turndowns greater than 40:1) without needing a high-pressure water
  supply, suited to low-velocity steam lines; requires an external
  spraywater control valve plus an atomizing steam shutoff valve.
concept-tags: [desuperheater, Design DSA, externally energized, high-pressure steam atomization, high turndown, low velocity steam lines]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-4D 'Design DSA desuperheater uses high-pressure steam for rapid and complete atomization of spraywater in low-velocity steam lines,' p. 7-6 — drawing W6311-2"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Fourth of the four lettered sub-figures (see 7-4A's note); pairs with
  `pss-cmp-dsa-desuperheater-system-diagram` (Figure 7-5), the full P&ID-
  style system diagram for this same desuperheater design.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-desuperheater-selection-taxonomy
kind: topic
teaches: >
  Desuperheaters fall into three design-criteria families, distinguished by
  how they atomize spraywater: Mechanically Atomized (fixed-geometry DMA,
  4:1 turndown, near-steady-load only; or variable-geometry DVG, >40:1
  turndown, can integrate its own control valve/trim), Geometrically
  Enhanced (DVI — a venturi's own pressure recovery keeps turbulence high at
  the injection point, ~15:1 turndown, best mixing/atomization of the
  mechanical group), and Externally Energized (DSA — uses a separate
  high-pressure steam source, not spraywater pressure itself, to shear water
  into mist; >40:1 turndown without needing high-pressure water, but needs
  a second control valve for the atomizing steam). The single most important
  selection factor named by the source is picking the right family for the
  application's real turndown requirement, not defaulting to one style.
concept-tags: [desuperheater selection, mechanically atomized, geometrically enhanced, externally energized, turndown ratio, design taxonomy]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 7 body prose, 'Desuperheaters' section, pp. 7-4–7-6 — the synthesis text framing Figures 7-4A–7-4D as one family taxonomy, not each figure's own individual caption"
relatedFigures: [pss-cmp-design-dma-af-desuperheater, pss-cmp-design-dvg-af-desuperheater, pss-cmp-design-dvi-desuperheater, pss-cmp-design-dsa-desuperheater-nozzle]
relatedTopics: [cvh-topic-desuperheater-application-factors]
used-by: []
notes: >
  Each of the four figures already documents its own design individually;
  this entry captures the cross-cutting selection logic (which family for
  which turndown) that no single figure's caption states — read directly
  from the connecting prose between Figures 7-4A and 7-4D, pp. 7-4–7-6.
```

```yaml
id: pss-topic-desuperheater-performance-factors
kind: topic
teaches: >
  Beyond design family, five real physical factors govern desuperheater
  performance: (1) Installation orientation — vertical, flow-up is optimal
  for most units, since gravity suspends droplets longer against the
  counter-directed injected water, extending effective mixing time; (2)
  Spraywater temperature — counter-intuitively, HOTTER water performs
  better (improves surface tension, drop-size distribution, latent heat of
  vaporization, and vaporization rate all at once); (3) Spraywater quantity
  — directly proportional to vaporization time, since heat transfer is
  time-dependent; (4) Pipeline size — ideal steam velocity is 250-300
  ft/sec; too fast needs more downstream distance to cool, too slow lets
  water fall out of suspension and pool in the pipe without cooling the
  steam; (5) Equipment vs. system turndown — a desuperheater is not a final
  control element, so its real achievable turndown is a function of the
  system it's installed in, not just its own empirical flow-variation spec
  — even a well-designed unit cannot overcome a poorly designed system.
concept-tags: [desuperheater performance, installation orientation, spraywater temperature, pipeline velocity, system vs equipment turndown]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 7 body prose, 'Desuperheaters' section, pp. 7-6–7-7 — prose, not figure-anchored"
relatedTopics: [pss-topic-desuperheater-selection-taxonomy, cvh-topic-desuperheater-application-factors]
used-by: []
notes: >
  Read directly from pp. 7-6–7-7's connected prose (the "Other factors"
  bulleted list and its full explanation) — no figure covers this content at
  all, genuinely invisible to the original figures-only pass.
```

```yaml
id: pss-topic-desuperheater-sizing-equations
kind: topic
teaches: >
  Two real installation-sizing formulas from the source, both functions of
  maximum steam velocity: Downstream Straight Pipe Requirement, SPR (ft) =
  0.1 sec × max steam velocity (ft/sec); and Downstream Temperature Sensor
  Distance, TS (ft) = 0.2 sec × max steam velocity (ft/sec) for 15%
  spraywater or less, or 0.3 sec × max steam velocity for greater than 15%
  spraywater — more spraywater needs more downstream distance before a
  temperature sensor reads a representative, fully-mixed value.
concept-tags: [desuperheater sizing, straight pipe requirement, temperature sensor distance, spraywater percentage]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 7 body prose, p. 7-9 — the SPR/TS equations, prose/formula, not figure-anchored"
relatedTopics: [pss-topic-desuperheater-performance-factors, cvh-topic-desuperheater-sizing-methodology]
used-by: []
notes: >
  Real formulas transcribed exactly from p. 7-9, not paraphrased or derived —
  distinct from CVH ch7's own desuperheater-sizing-methodology topic (a heat-
  balance/Cv equation set), this is purely a pipe-layout/installation-
  distance calculation, a different sizing question entirely.
```

```yaml
id: pss-topic-desuperheater-control-philosophy
kind: topic
teaches: >
  Two real control approaches for desuperheater temperature: feedback control
  from a downstream temperature sensor (the default, but requires enough
  straight pipe distance for the sensor to read a fully-mixed value — see
  the TS equation), or feedforward control, where a control-system algorithm
  calculates the required spraywater flow directly from a heat balance —
  using upstream temperature/pressure, valve position, and steam-table
  enthalpy data for both the steam and the spraywater — without waiting for
  a downstream sensor reading at all. Feedforward is the source's named
  practical solution when an installation genuinely lacks enough downstream
  pipe distance for accurate feedback measurement.
concept-tags: [feedback control, feedforward control, desuperheater temperature control, heat balance calculation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 7 body prose, p. 7-9 — prose, not figure-anchored"
relatedTopics: [pss-topic-desuperheater-sizing-equations]
used-by: []
notes: >
  Read directly from the paragraph following the SPR/TS equations on p. 7-9 —
  no figure exists for this content at all.
```

---

### Chapter 7 — Steam Conditioning Valves (printed pp. 7-6–7-9)

```yaml
id: pss-cmp-dsa-desuperheater-system-diagram
teaches: >
  The complete Design DSA desuperheater installation: a Fisher 667-EZ
  atomizing steam isolation valve and a Fisher 667-EZ spraywater control
  valve, each with its own positioner/transmitter instrumentation (SV, LS,
  TC, TE), feeding the DSA desuperheater body mounted in the main steamflow
  line — the full control-loop context around the Figure 7-4D nozzle.
concept-tags: [Design DSA, desuperheater system, Fisher 667-EZ, atomizing steam isolation valve, spraywater control valve, steam conditioning P&ID]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-5 'Design DSA desuperheater utilizes two external control valves: a spraywater unit and an atomizing steam valve,' p. 7-7 — drawing C0817/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A labelled P&ID-style system diagram (ATOMIZING STEAM, SPRAYWATER,
  STEAMFLOW, instrument tags SV/LS/TC/TE) rather than a component cutaway —
  Style Guide §6.3 applies if ever placed on a slide.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-design-tbx-t-steam-conditioning-valve
teaches: >
  Design TBX-T steam-conditioning valve: combines pressure reduction and
  temperature control (desuperheating) in a single valve body via an
  external spraywater manifold with multiple Type AF nozzles, for moderate
  to large volume applications — the cage is case-hardened to handle rapid
  temperature swings (e.g. a turbine trip) and the plug uses cobalt-based
  overlays for tight metal-to-metal shutoff.
concept-tags: [Design TBX, steam conditioning valve, spraywater manifold, Whisper Trim, cobalt overlay, combined pressure and temperature control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-6 'Design TBX-T utilizes an external spraywater manifold with multiple nozzles for moderate to large volume applications,' p. 7-7 — drawing W8493-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A full valve-body cutaway (pipeline section with the TBX valve trim
  visible, manifold bolted on) — unlabelled beyond the caption. Pairs with
  `pss-cmp-tbx-af-spray-nozzle-detail` (Figure 7-7) and
  `pss-cmp-tbx-t-cooler` (Figure 7-8).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-tbx-af-spray-nozzle-detail
teaches: >
  Detail of the Type AF spray nozzle used in the TBX manifold: a
  spring-loaded, variable-geometry, backpressure-activated nozzle. The
  spring forces the plug closed if flashing occurs at the nozzle (as can
  happen when downstream steam pressure falls below saturation, e.g. in
  condenser dump service), preventing the flow-characteristic and capacity
  changes flashing would otherwise cause.
concept-tags: [Type AF nozzle, spring-loaded nozzle, backpressure activated, condenser dump service, anti-flashing nozzle design]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-7 'Detail of Type AF Spray Nozzle,' p. 7-8 — drawing W8494-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A close-up cutaway of a single nozzle assembly (circular inset framing) —
  unlabelled beyond the caption.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-tbx-t-cooler
teaches: >
  The Design TBX-T Cooler: a separate downstream steam-cooler section fitted
  with a water-supply manifold that feeds multiple individual spray nozzles
  installed in the pipe wall — used when piping constraints require the TBX
  valve's pressure-control function and its temperature-reduction function
  to be split into separate components instead of one integral valve body.
concept-tags: [Design TBX-T Cooler, downstream steam cooler, water supply manifold, split pressure and temperature control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-8 'Design TBX-T Cooler,' p. 7-9 — drawing W8786-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A production photo of the cooler section (pipe spool with flanged nozzle
  connections visible), not a cutaway drawing.
mediaStatus: unreviewed
```

---

### Chapter 7 — Turbine Bypass Systems (printed pp. 7-10–7-13)

```yaml
id: pss-cmp-combined-cycle-turbine-bypass-schematic
teaches: >
  A complete combined-cycle turbine bypass system schematic: HP, IP, and LP
  bypass valves (each paired with its own spraywater valve, SWV) route steam
  from the HRSG around the HP, IP, and LP turbine sections respectively to
  the condenser — showing how the bypass system lets the boiler/HRSG operate
  independently of the turbine during startup, shutdown, or trip conditions.
concept-tags: [turbine bypass system, HP bypass, IP bypass, LP bypass, HRSG, spraywater valve, combined cycle]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-9 (caption reads only 'Figure 7-9.', no descriptive text printed), p. 7-12 — drawing E0866"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Labelled system schematic (HRSG, Gas Turbine, HP/IP/LP Turbine, Condenser,
  HP/IP/LP Bypass valve symbols, SWV) — Style Guide §6.3 applies if ever
  placed on a slide. Low-confidence flag: the source prints only "Figure
  7-9." with no descriptive caption sentence (every other figure in this
  chapter has one) — confirmed by re-reading the rendered page directly,
  not a rendering/OCR artifact on our part; the figure's content is fully
  legible from its own printed labels regardless.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-tbx-whisperflo-sparger
teaches: >
  The Design TBX WhisperFlo Sparger: a low-noise downstream backpressure
  device used with a steam conditioning valve and spraywater valve to create
  the backpressure needed for a bypass-to-condenser installation, without
  the excessive noise a plain restriction would generate.
concept-tags: [Design TBX sparger, WhisperFlo, low noise trim, backpressure device, bypass to condenser]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 7-10 'Design TBX WhisperFlo Sparger,' p. 7-13 — drawing W8684-2"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A production photo of the sparger cylinder assembly — the chapter's last
  figure; pp. 7-14–7-15 (Chapter 7 Summary and Short Notes) carry no further
  figures.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-turbine-bypass-system-benefits
kind: topic
teaches: >
  A turbine bypass system's real benefits, independent of any one bypass
  stage: matching steam and heavy turbine-metal component temperatures
  during startup/shutdown (major fuel-savings and thermal-fatigue-reduction
  significance, especially for life-extension programs); avoiding a full
  boiler trip after a load rejection (the boiler/HRSG can withstand the
  rejection and stay available for rapid reloading — the difference between
  a costly warm start and a fast hot start); reducing solid-particle erosion
  of turbine components (thermal transients dislodge scale/oxides/weldments
  that would otherwise erode turbine blades); and independent operation of
  the boiler and turbine (boiler controls/firing systems can be tested and
  tuned without the turbine running at all, reducing commissioning cost and
  time).
concept-tags: [turbine bypass benefits, thermal fatigue, load rejection, solid particle erosion, independent boiler operation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 7 body prose, 'Turbine Bypass Systems' / 'General System Description' sections, pp. 7-10 — prose, not figure-anchored"
relatedFigures: [pss-cmp-combined-cycle-turbine-bypass-schematic]
relatedTopics: [cvh-topic-turbine-bypass-system-rationale]
used-by: []
notes: >
  Read directly from pp. 7-10's bulleted-and-explained benefit list — the
  existing Figure 7-9 schematic shows the HP/IP/LP valve layout but never
  states why a bypass system is worth building, which is what this entry
  captures. Cross-references CVH ch7's own turbine-bypass-system-rationale
  topic — genuinely complementary (CVH gives the general Handbook-level
  rationale, this sourcebook gives the power-industry-specific real benefit
  list with concrete operational detail CVH doesn't carry).
```

```yaml
id: pss-topic-hp-bypass-function-and-failure-mode
kind: topic
teaches: >
  The High Pressure (HP) bypass directs steam from the superheater outlet to
  the cold reheat line during startup/shutdown/trip, bypassing the HP
  turbine section, with six specific duties: pressure/temperature-controlled
  HP bypass, controlled main-steam pressure buildup, reheat-section cooling,
  preventing spring-loaded HP safety-valve lifts during minor disturbances,
  avoiding condensate loss/noise from blowing safety valves, and protecting
  the boiler from over-pressure. Its failure mode is context-dependent, not
  fixed: if the HP bypass is designed as the safety bypass system replacing
  the standard safety relief valve function, it must fail OPEN; but if
  standard safety relief valves remain in place, it's normally required to
  fail CLOSED, especially in over-temperature situations on drum boilers.
  Control is normally via feedback from main steam pressure and cold reheat
  temperature, with the steam-to-spraywater ratio inversely proportional to
  valve position (large Cv needed at startup's low-pressure/high-temperature
  conditions, despite the reduced flow).
concept-tags: [HP bypass, cold reheat, failure mode, fail open, fail closed, safety relief valve interaction]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 7 body prose, 'High Pressure Bypass' section, pp. 7-10–7-11 — prose, not figure-anchored"
relatedFigures: [pss-cmp-combined-cycle-turbine-bypass-schematic]
relatedTopics: [pss-topic-turbine-bypass-system-benefits, pss-topic-hrh-lp-bypass-function]
used-by: []
notes: >
  The context-dependent fail-open-vs-fail-closed logic is a real,
  counter-intuitive point worth flagging — a naive "safety systems always
  fail open" assumption would be wrong here depending on what else is
  installed. Read directly from pp. 7-10–7-11.
```

```yaml
id: pss-topic-hrh-lp-bypass-function
kind: topic
teaches: >
  The Hot Reheat (HRH) and Low Pressure (LP) bypass directs steam from the
  hot reheat line to the condenser during startup/shutdown/trip, bypassing
  the IP and LP turbine sections, with four specific duties: pressure/
  temperature-controlled bypass of IP and LP turbines, controlling reheat-
  section pressure buildup, preventing condensate loss during trips, and
  protecting the condenser from excessive pressure/temperature/enthalpy —
  this last duty is the dominant design driver, since (unlike the HP bypass)
  the HRH/LP bypass has ONLY closed as a real failure mode: protecting the
  condenser from damage takes priority over controlling hot reheat pressure.
  A named condenser is typically at 1-3 psia vacuum, so creating enough
  backpressure to maintain reasonable pipe velocities while minimizing noise
  (via sparger hole spacing/placement, avoiding converging steam jets) is a
  real, distinct engineering challenge for this bypass stage specifically.
concept-tags: [HRH bypass, LP bypass, condenser protection, fail closed only, backpressure control, sparger noise]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 7 body prose, 'Hot-Reheat & Low Pressure Bypass' section, pp. 7-12–7-13 — prose, not figure-anchored"
relatedFigures: [pss-cmp-combined-cycle-turbine-bypass-schematic, pss-cmp-tbx-whisperflo-sparger]
relatedTopics: [pss-topic-hp-bypass-function-and-failure-mode]
used-by: []
notes: >
  Real contrast with the HP bypass's context-dependent fail mode — this
  stage's always-fail-closed rule is stated explicitly and unconditionally
  in the source, unlike HP's. Read directly from pp. 7-12–7-13.
```

```yaml
id: pss-topic-bypass-capacity-sizing-strategy
kind: topic
teaches: >
  Real bypass capacity guidance by boiler and fuel type: once-through boiler
  plants generally need 100% of full-load steam bypass capacity for startup/
  part-load operation (essential if conventional safety valves are omitted);
  drum boiler plants typically only need 25-70% capacity to handle most
  operating/trip conditions, with more specific figures for hot-startup
  temperature matching (30% for oil firing, 40-50% for coal) and for a full
  turbine trip (40% for gas/oil-fired drum units, up to 70% for coal). A
  real design tension: if HP bypass capacity exceeds ~50% and the LP bypass
  passes all that steam to the condenser, condenser duty during bypass
  operation becomes MORE severe than during normal full-load turbine
  operation — a real limiting factor especially on retrofit projects.
concept-tags: [bypass capacity, once-through boiler, drum boiler, fuel type, condenser duty limit]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 7 body prose, 'Bypass Size' section, p. 7-13 — prose, not figure-anchored"
relatedTopics: [pss-topic-hrh-lp-bypass-function]
used-by: []
notes: >
  Real percentages transcribed exactly from p. 7-13, not rounded or
  paraphrased. No figure exists for this content.
```

```yaml
id: pss-topic-turbine-operating-modes-and-bypass-role
kind: topic
teaches: >
  A bypass system's role differs by real operating mode, each with real
  characteristic timeframes from the source: Cold start (unit down over a
  week, reheat temps below 200°F, 4.5-9 hours to full load — the bypass lets
  the furnace/superheater/reheater run early in the steam cycle for steam
  purity and tube-cooling before turbine start); Warm start (weekend
  shutdown, HP turbine casing above 450°F, 2.5-5 hours); Hot start (a minor
  disturbance caused a trip, 1-2 hours — the bypass keeps the boiler online
  through the disturbance for the fastest reload); Load rejection/quick
  restart (runback to minimum load, a definitive path to either complete
  shutdown or quick restart, minimizing condensate loss); and Two-shift
  operation (smaller, less-maneuverable units shut down nightly and
  restarted each morning — the bypass matches steam/metal temperatures for
  efficient restart without thermally stressing components each cycle).
concept-tags: [cold start, warm start, hot start, load rejection, two-shift operation, turbine bypass role]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 7 body prose, 'Starts, Trips, Load Rejection, Two-Shift Operation' section, pp. 7-13–7-14 — prose, not figure-anchored"
relatedTopics: [pss-topic-turbine-bypass-system-benefits, pss-topic-bypass-capacity-sizing-strategy]
used-by: []
notes: >
  Real time ranges transcribed exactly from pp. 7-13–7-14. No figure exists
  for this content — the chapter's final two pages (Summary, Short Notes)
  carry no further figures at all, consistent with the existing index's own
  finding.
```

---

## Open Items

- **Chapter boundary**: confirmed directly by rendering PDF p.69 (Chapter 7
  divider), p.83 (last real content page, "Chapter 7 — Steam Conditioning
  Summary" and "Short Notes"), p.84 (blank, printed "7-16"), and p.85
  (Chapter 8 divider). Chapter 7 = PDF pp.69–83 (printed pp. 7-1–7-15);
  p.84 is a trailing blank page, not additional content.
- **Full coverage accounting**: every page in the confirmed range was
  rendered and read, including the two candidate "gap" pages flagged ahead
  of time (p.78/printed 7-10, p.82/printed 7-14, plus pp.83–84) — all
  confirmed to be genuinely figure-free text (equations, bullet lists,
  chapter summary), not missed figures. All 13 real figure records
  accounted for: Figures 7-1, 7-2, 7-3, 7-4A, 7-4B, 7-4C, 7-4D, 7-5, 7-6,
  7-7, 7-8, 7-9, 7-10.
- **Low-confidence flags**: Figure 7-9 (p. 7-12) prints only the bare
  caption "Figure 7-9." with no descriptive sentence — confirmed directly
  against the rendered page, not a text-extraction artifact. Flagged in
  that record's own `notes`.
- **Duplicate-figure-number / source-citation-error findings**: none found.
  Figure 7-4's four lettered sub-parts (7-4A–7-4D) are a real, intentional
  source convention (four distinct desuperheater product designs sharing
  one figure number with letter suffixes), not a duplication or error —
  catalogued as four separate records since each shows a genuinely
  different product.
- **Table-exclusion confirmation**: no "Table 7-N" references were found
  anywhere in this chapter (confirmed via both a `pdftotext` sweep and the
  page-by-page render) — Chapter 7 genuinely has no numbered tables to
  exclude.
- **Cross-reference findings**: not run centrally as part of this
  chapter-level pass (see the coordinating pass's whole-library collision
  sweep). No obvious shared drawing numbers with the Oil & Gas Sourcebook
  were spotted by inspection — steam conditioning/desuperheating/turbine
  bypass content is unique to the Power & Severe Service industry section
  and has no equivalent chapter in the Oil & Gas Sourcebook.
- **Archive/legacy material**: none consulted, none needed — this is a
  first-party current Fisher/Emerson document throughout.
- **`kind: topic` pass, added 2026-09-17**: full chapter re-read for genuine
  conceptual content beyond the 13 figure captions, same rigor as the CVH
  and Oil & Gas Sourcebook passes. 10 new `pss-topic-*` entries added,
  covering steam thermodynamics/desuperheat rationale (including a real,
  counter-intuitive worked isenthalpic-throttling example), desuperheater
  selection taxonomy and performance factors, real sizing equations and
  control-philosophy content, and five distinct turbine-bypass concepts
  (general benefits, HP-specific function/failure-mode logic, HRH/LP-
  specific function, capacity sizing strategy, and operating-mode roles).
  Chapter total is now 23 components (13 figures + 10 topics). No section
  was found reference-data-only beyond what the figures pass already
  established — every real page had genuine conceptual content to extract.
  Confirmed richer than CVH's own steam-conditioning chapter (5 topics) —
  this sourcebook's power-industry focus does carry real, distinct applied
  content (specific bypass percentages, fail-mode logic, start-type
  timeframes) that CVH's more conceptual treatment doesn't.
