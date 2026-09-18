---
title: Component Index — Pulp & Paper Sourcebook ch7
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch7 — Steam Conditioning
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 7

**Chapter 7 — "Steam Conditioning."** Standing full-chapter cataloguing
pass, continuing the whole-book completion pass begun with Chapter 1. Every
real page in the chapter's confirmed range was rendered and read directly.
13 real figures across 14 pages, zero numbered tables.

**Near-total overlap confirmed with Power & Severe Service Sourcebook
Chapter 7** ("Steam Conditioning") — twelve of this chapter's thirteen
figures share an identical printed drawing number with a Power & Severe
Service ch7 record, the strongest single cross-book match found in this
whole pass. No match was found in Oil & Gas at all (steam conditioning is
not oil-and-gas-industry content, consistent with the book's own scope).

Chapter boundaries confirmed directly by rendering: PDF page 91 = printed p.
7-1 (Chapter 7 divider, "Steam Conditioning"), PDF page 104 = printed p.
7-14 ("Chapter 7 — Steam Conditioning Summary," chapter's last content page,
no trailing blank). PDF page 105 = Chapter 8 divider ("Process Overview").
Zero page offset throughout (PDF page = printed page number + 90). Chapter 7
= PDF pp. 91-104.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. Twelve of thirteen figures share a printed drawing number with Power & Severe Service ch7 records — cross-referenced by id in each affected record's `notes`, not duplicated. |

## Components

### Chapter 7 — Steam Thermodynamics (printed p. 7-2)

```yaml
id: pp-cmp-water-temperature-enthalpy-diagram
kind: figure
teaches: >
  The temperature-enthalpy diagram for water across its full phase range
  (ice heating, melting, water heating, evaporation, steam superheating),
  plotted against BTU added per pound of water — establishes that the
  greatest single thermal-energy input (970 BTU/lb) goes into vaporization
  itself, and maximum heat-transfer efficiency requires operating near
  saturation temperature to recover that energy.
concept-tags: [thermodynamics of steam, temperature-enthalpy diagram, latent heat of vaporization, saturation temperature, superheat]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-1 'Temperature enthalpy diagram for water. Note that the greatest amount of thermal energy input is used to vaporize the water...,' p. 7-2 (PDF p. 92), drawing E0117"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (E0117) to
  `pss-cmp-water-temperature-enthalpy-btu-diagram` in `Component Index —
  Power & Severe Service Sourcebook ch7.md` (that book's own Figure 7-1,
  identical caption) — the same source chart reused across both
  Sourcebooks. No match found in Oil & Gas (steam conditioning is not
  covered in that book).
```

```yaml
id: pp-cmp-water-th-diagram-saturation-vs-pressure
kind: figure
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
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-2 'Temperature enthalpy diagram for water showing that saturation temperature varies with pressure...,' p. 7-2 (PDF p. 92), drawing E0118"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (E0118) to
  `pss-cmp-water-th-diagram-saturation-vs-pressure` in `Component Index —
  Power & Severe Service Sourcebook ch7.md` (that book's own Figure 7-2,
  identical caption) — the same source chart reused across both
  Sourcebooks.
```

### Chapter 7 — Desuperheater Designs (printed pp. 7-4–7-6)

```yaml
id: pp-cmp-insertion-style-desuperheater
kind: figure
teaches: >
  The insertion-style desuperheater: a single spray injection nozzle mounted
  through the pipe wall injects a controlled amount of cooling water
  directly into the superheated steam flow — the simplest direct-contact
  heat-transfer mechanism for reducing/controlling steam temperature.
concept-tags: [desuperheater, insertion style, spray injection nozzle, direct contact heat transfer, steam conditioning]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-3 'Insertion style desuperheater injects a controlled amount of cooling water into super-heated steam flow,' p. 7-4 (PDF p. 94), drawing E0865"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (E0865) to
  `pss-cmp-insertion-style-desuperheater` in `Component Index — Power &
  Severe Service Sourcebook ch7.md` (that book's own Figure 7-3, identical
  caption).
```

```yaml
id: pp-cmp-dma-af-desuperheater
kind: figure
teaches: >
  The DMA/AF desuperheater: a fixed-geometry-orifice, variable-geometry,
  back-pressure-activated spray nozzle design — the simplest desuperheater
  style, highly dependent on pressure differential, best suited to
  near-steady-load applications (about 4:1 turndown).
concept-tags: [desuperheater, DMA, fixed geometry spray orifice, back-pressure activated nozzle, mechanically atomized]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-4 'The DMA/AF desuperheater utilizes variable-geometry, back-pressure activated spray nozzles,' p. 7-5 (PDF p. 95), drawing W6310-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (W6310-1) to
  `pss-cmp-design-dma-af-desuperheater` in `Component Index — Power &
  Severe Service Sourcebook ch7.md` (that book's Figure 7-4A — P&SS labels
  its DMA/DVG/DVI/DSA family as sub-figures 7-4A through 7-4D, while this
  book gives each its own top-level figure number, 7-4 through 7-6; a real
  cross-book numbering-convention difference, not an error in either book).
```

```yaml
id: pp-cmp-dvi-desuperheater
kind: figure
teaches: >
  The DVI desuperheater ("Geometric Enhanced" style): injects spraywater at
  the outlet of a venturi section, using the venturi's pressure recovery to
  keep turbulence and kinetic energy high at the injection point — assures
  excellent mixing and rapid atomization, suited to medium turndown
  (around 15:1) applications.
concept-tags: [desuperheater, DVI, geometric enhanced, venturi injection, rapid atomization]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-5 'The DVI desuperheater injects spraywater in the outlet of the venturi section, assuring excellent mixing and rapid atomization,' p. 7-5 (PDF p. 95), drawing W6313-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (W6313-1) to
  `pss-cmp-design-dvi-desuperheater` in `Component Index — Power & Severe
  Service Sourcebook ch7.md` (that book's Figure 7-4C). Note: P&SS also
  catalogues an intermediate DVG-AF design as its own Figure 7-4B
  (`pss-cmp-design-dvg-af-desuperheater`) — this book has no corresponding
  figure at all; confirmed by direct reading, not a missed figure on this
  book's part, simply narrower coverage of the same product family.
```

```yaml
id: pp-cmp-dsa-desuperheater-nozzle
kind: figure
teaches: >
  The DSA desuperheater: an externally-energized style that uses a
  high-pressure steam source (not the spraywater pressure itself) to shear
  the water into a fine mist for rapid, complete atomization — provides
  very high flow variation (turndowns greater than 40:1) without needing a
  high-pressure water supply, suited to low-velocity steam lines.
concept-tags: [desuperheater, DSA, externally energized, high-pressure steam atomization, high turndown, low velocity steam lines]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-6 'The DSA desuperheater uses high-pressure steam for rapid and complete atomization of spraywater in low-velocity steam lines,' p. 7-6 (PDF p. 96), drawing W6311-2"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (W6311-2) to
  `pss-cmp-design-dsa-desuperheater-nozzle` in `Component Index — Power &
  Severe Service Sourcebook ch7.md` (that book's Figure 7-4D).
```

### Chapter 7 — Desuperheater System and Steam Conditioning Valves (printed pp. 7-7–7-9)

```yaml
id: pp-cmp-dsa-desuperheater-system-diagram
kind: figure
teaches: >
  The complete DSA desuperheater installation: a Fisher 667-EZ atomizing
  steam isolation valve and a Fisher 667-EZ spraywater control valve, each
  with its own positioner/transmitter instrumentation (SV, LS, TC, TE),
  feeding the DSA desuperheater body mounted in the main steamflow line —
  the full control-loop context around the DSA nozzle of Figure 7-6.
concept-tags: [DSA desuperheater, desuperheater system, Fisher 667-EZ, atomizing steam isolation valve, spraywater control valve, steam conditioning P&ID]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-7 'The DSA desuperheater utilizes two external control valves: a spraywater unit and an atomizing steam valve,' p. 7-7 (PDF p. 97), drawing C0817/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (C0817/IL) to
  `pss-cmp-dsa-desuperheater-system-diagram` in `Component Index — Power &
  Severe Service Sourcebook ch7.md` (that book's own Figure 7-5, identical
  caption).
```

```yaml
id: pp-cmp-tbx-t-cooler
kind: figure
teaches: >
  The TBX-T Cooler: a separate downstream steam-cooler section fitted with a
  water-supply manifold that feeds multiple individual spray nozzles
  installed in the pipe wall — used when piping constraints require the
  TBX valve's pressure-control function and its temperature-reduction
  function to be split into separate components instead of one integral
  valve body.
concept-tags: [TBX-T Cooler, downstream steam cooler, water supply manifold, split pressure and temperature control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-8 'TBX-T Cooler,' p. 7-7 (PDF p. 97), drawing W8786-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (W8786-1) to
  `pss-cmp-tbx-t-cooler` in `Component Index — Power & Severe Service
  Sourcebook ch7.md` (that book's Figure 7-8, identical caption).
```

```yaml
id: pp-cmp-tbx-external-spraywater-manifold
kind: figure
teaches: >
  The TBX steam-conditioning valve: combines pressure reduction and
  temperature control (desuperheating) in a single valve body via an
  external spraywater manifold with multiple Type AF nozzles, for moderate
  to large volume applications — the cage is case-hardened to handle rapid
  temperature swings (e.g. a turbine trip) and the plug uses cobalt-based
  overlays for tight metal-to-metal shutoff.
concept-tags: [TBX, steam conditioning valve, spraywater manifold, Whisper Trim, cobalt overlay, combined pressure and temperature control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-9 'The TBX utilizes an external spraywater manifold with multiple nozzles for moderate to large volume applications,' p. 7-8 (PDF p. 98), drawing W8493-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (W8493-1) to
  `pss-cmp-design-tbx-t-steam-conditioning-valve` in `Component Index —
  Power & Severe Service Sourcebook ch7.md` (that book's Figure 7-6) and
  also cross-referenced in `Component Index — Power & Severe Service
  Sourcebook ch9a.md` — the same source cutaway reused across three files.
```

```yaml
id: pp-cmp-af-spray-nozzle-detail
kind: figure
teaches: >
  Detail of the AF spray nozzle used in the TBX manifold: a spring-loaded,
  variable-geometry, backpressure-activated nozzle. The spring forces the
  plug closed if flashing occurs at the nozzle (as can happen when
  downstream steam pressure falls below saturation, e.g. in condenser dump
  service), preventing the flow-characteristic and capacity changes
  flashing would otherwise cause.
concept-tags: [AF nozzle, spring-loaded nozzle, backpressure activated, condenser dump service, anti-flashing nozzle design]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-10 'Detail of AF Spray Nozzle,' p. 7-8 (PDF p. 98), drawing W8494-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (W8494-1) to
  `pss-cmp-tbx-af-spray-nozzle-detail` in `Component Index — Power & Severe
  Service Sourcebook ch7.md` (that book's Figure 7-7, identical caption
  minus "Type").
```

```yaml
id: pp-cmp-tbx-external-manifold-full-view
kind: figure
teaches: >
  The TBX valve showing its complete external spraywater manifold: uses
  high-performance pneumatic piston actuators with FIELDVUE Digital Valve
  Controllers to achieve full stroke in under two seconds; the FIELDVUE/AMS
  ValveLink combination provides self-diagnostic signature comparison
  (seat load, friction) to flag performance changes before they cause
  process problems.
concept-tags: [TBX, external spraywater manifold, FIELDVUE, AMS ValveLink, pneumatic piston actuator, self-diagnostics, valve signature]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-11 'The TBX showing external spraywater manifold,' p. 7-9 (PDF p. 99), drawing W8520"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A different production photo/angle from Figure 7-9
  (`pp-cmp-tbx-external-spraywater-manifold`) of the same TBX product line.
  Checked against the whole library: no exact drawing-number match found
  for W8520 — the only one of this chapter's 13 figures without a confirmed
  cross-reference.
```

### Chapter 7 — Turbine Bypass Systems (printed pp. 7-11–7-13)

```yaml
id: pp-cmp-turbine-bypass-system-schematic
kind: figure
teaches: >
  A complete combined-cycle turbine bypass system schematic: HP, IP, and LP
  bypass valves (each paired with its own spraywater valve, SWV) route steam
  from the HRSG around the HP, IP, and LP turbine sections respectively to
  the condenser — showing how the bypass system lets the boiler/HRSG operate
  independently of the turbine during startup, shutdown, or trip conditions.
concept-tags: [turbine bypass system, HP bypass, IP bypass, LP bypass, HRSG, spraywater valve, combined cycle]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-12 'Turbine Bypass System,' p. 7-11 (PDF p. 101), drawing E0866"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (E0866) to
  `pss-cmp-combined-cycle-turbine-bypass-schematic` in `Component Index —
  Power & Severe Service Sourcebook ch7.md` (that book's Figure 7-9, whose
  own caption prints no descriptive text — this book supplies the title
  "Turbine Bypass System" for the identical diagram).
```

```yaml
id: pp-cmp-tbx-whisperflo-sparger
kind: figure
teaches: >
  The TBX WhisperFlo Sparger: a low-noise downstream backpressure device
  used with a steam conditioning valve and spraywater valve to create the
  backpressure needed for a bypass-to-condenser installation, without the
  excessive noise a plain restriction would generate.
concept-tags: [TBX sparger, WhisperFlo, low noise trim, backpressure device, bypass to condenser]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 7-13 'TBX WhisperFlo Sparger,' p. 7-12 (PDF p. 102), drawing W8684-2"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Cross-reference (2026-09-15):** identical drawing number (W8684-2) to
  `pss-cmp-tbx-whisperflo-sparger` in `Component Index — Power & Severe
  Service Sourcebook ch7.md` (that book's Figure 7-10, identical caption
  minus "Design").
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 91-104 in full: p. 91 = printed
  7-1 (Chapter 7 opening, "Steam Conditioning"), p. 104 = printed 7-14
  ("Chapter 7 — Steam Conditioning Summary," chapter's genuine last content
  page — no trailing blank). PDF page 105 confirmed as the Chapter 8 divider
  ("Process Overview"). Zero page offset (PDF = printed + 90) throughout.
- **Full chapter coverage.** All 13 real figures in range (Figures 7-1
  through 7-13) located and catalogued; every page 91-104 was rendered and
  read directly, no gaps in the numeric sequence.
- **No low-confidence flags.**
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter.
- **No numbered tables found in this chapter** — confirmed by direct
  reading of every page; Chapter 7 is prose, equations, and figures only.
- **Cross-reference findings — the strongest single cross-book match found
  in this whole pass.** Twelve of this chapter's thirteen figures are
  confirmed real cross-references by identical printed drawing number to
  `Component Index — Power & Severe Service Sourcebook ch7.md`:
  `pp-cmp-water-temperature-enthalpy-diagram` (E0117),
  `pp-cmp-water-th-diagram-saturation-vs-pressure` (E0118),
  `pp-cmp-insertion-style-desuperheater` (E0865),
  `pp-cmp-dma-af-desuperheater` (W6310-1),
  `pp-cmp-dvi-desuperheater` (W6313-1),
  `pp-cmp-dsa-desuperheater-nozzle` (W6311-2),
  `pp-cmp-dsa-desuperheater-system-diagram` (C0817/IL),
  `pp-cmp-tbx-t-cooler` (W8786-1),
  `pp-cmp-tbx-external-spraywater-manifold` (W8493-1, also reused in Power &
  Severe Service ch9a), `pp-cmp-af-spray-nozzle-detail` (W8494-1),
  `pp-cmp-turbine-bypass-system-schematic` (E0866), and
  `pp-cmp-tbx-whisperflo-sparger` (W8684-2) — each cross-referenced by id in
  its own `notes` above. **One figure checked with no match found:**
  `pp-cmp-tbx-external-manifold-full-view` (W8520). No match was found in
  Oil & Gas at all — steam conditioning is genuinely absent from that
  book's scope. Also noted: Power & Severe Service catalogues an
  intermediate DVG-AF desuperheater design (its own Figure 7-4B) that this
  book has no corresponding figure for at all — confirmed by direct
  reading, not a missed figure on this book's part.
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook is the sole and sufficient source for all thirteen of
  this chapter's components.
- **`kind: topic` pass, added 2026-09-18: zero new entries — confirmed
  duplicate boilerplate, not a gap.** Read the full real chapter prose
  directly (`pdftotext -layout`, PDF pp. 91-104) and compared it line-by-line
  against Power & Severe Service Sourcebook ch7's own already-topic-indexed
  prose (10 `pss-topic-*` entries, added 2026-09-17). Every substantive claim
  in this chapter's text matches PSS ch7 word-for-word or near-word-for-word,
  not just at the figure-caption level already documented above: the same
  isenthalpic-throttling worked example (165 psia/370°F, 4°F superheat →
  throttled to 45 psia, comes out 328°F but saturation temp has dropped to
  274°F, net 54°F of superheat — the "unintentional superheat" finding);
  the same three-family desuperheater selection taxonomy (Mechanically
  Atomized/DMA-DVG, Geometrically Enhanced/DVI, Externally Energized/DSA)
  and the same five performance factors (orientation, spraywater
  temperature, quantity, pipeline size 250-300 ft/sec, equipment-vs-system
  turndown); the identical SPR/TS sizing equations (SPR = 0.1 sec × max
  velocity; TS = 0.2 or 0.3 sec × max velocity by spraywater %) and the same
  feedback-vs-feedforward control-philosophy discussion; and the identical
  turbine-bypass content — the same benefits list (thermal fatigue, load
  rejection/hot-vs-warm-start, solid-particle erosion, independent boiler
  operation), the same HP-bypass context-dependent fail-open-vs-fail-closed
  logic vs. HRH/LP's always-fail-closed rule, the same bypass-capacity
  percentages (100% once-through, 25-70% drum, 30% oil/40-50% coal hot
  start, 40% gas-oil/70% coal full trip), and the same cold/warm/hot-start
  timeframes (4.5-9 / 2.5-5 / 1-2 hours). This chapter's only genuinely
  distinct content is the industry-neutral framing paragraph at the very
  top ("power producers have an ever-increasing need...") versus PSS's own
  opening — framing prose, not a teachable concept, correctly not indexed.
  Nothing pulp-and-paper-specific exists anywhere in this chapter's real
  text — consistent with the file's own header note that steam conditioning
  is fundamentally power-plant/turbine content reused here, not native P&P
  process content. This is the strongest full-chapter duplicate found in
  this sourcebook's topic-indexing pass (stronger than ch2's and ch5's
  single-example matches) — cross-referencing PSS ch7's 10 topic entries
  by id would be redundant with the figure-level cross-references already
  documented above, so none were added; a reader following any figure's
  existing cross-reference note into `Component Index — Power & Severe
  Service Sourcebook ch7.md` will find the full topic-level content there.
  Integrity unaffected — no new ids introduced, file total remains 13
  figures, 0 topics.
