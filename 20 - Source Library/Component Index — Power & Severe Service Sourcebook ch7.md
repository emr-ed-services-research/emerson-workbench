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
