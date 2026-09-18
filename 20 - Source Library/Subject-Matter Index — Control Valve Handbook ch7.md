---
title: Subject-Matter Index — Control Valve Handbook ch7
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Control Valve Handbook, 6th ed. (D101881X012, © Aug 2023 Emerson/Fisher)
chapter: ch7 — Steam Conditioning
updated: 2026-09-17
---

# Subject-Matter Index — Control Valve Handbook, Chapter 7 (Steam Conditioning)

Standing full-chapter cataloging pass, part of the "index CVH chapters 5–15"
directive (Franz, 2026-09-17). Every real page in the chapter's confirmed
range was rendered as an image and visually inspected, not read from
extracted text alone — several of this chapter's own pages have figures
positioned out of reading order relative to the linear text-extraction
stream (e.g. Figure 7.9 prints physically above Figure 7.8 on the same
page), which text extraction alone would have scrambled.

**Real chapter boundary, confirmed by rendering and reading the actual
pages:** PDF page 161 (the end of Chapter 6's blank trailing page — see
`Subject-Matter Index — Control Valve Handbook ch6.md`'s Open Items) is followed
immediately by PDF page 162, the real "Chapter 7 / Steam Conditioning"
divider (a full-page photo, no numbered figure). Real content runs PDF pages
163–174. PDF page 175 is a blank trailing page (header/footer only, no
content — same pattern as ch6's page 161), confirmed by rendering it
directly. PDF page 176 is the real "Chapter 8 / Installation and
Maintenance" divider. PDF page number equals printed page number throughout
(zero offset, confirmed against the printed folios visible on pages 163,
169, and 175).

All figures are from `20 - Source Library/Control Valve Handbook/Control
Valve Handbook - Sixth Edition.pdf`. This pass catalogs existence and
location only — no crop/extraction has been performed, so each record
carries a single `source` citation. Every record's `used-by` is `[]`.

Record shape matches `Subject-Matter Index — Control Valve Handbook ch3.md` and
`ch4.md` (post-2026-09-17 correction): `id` (descriptive slug) · `teaches` ·
`concept-tags` · `status` (precedence bucket) · `source` · `delivery` ·
`used-by` · `notes`.

**Cross-reference to 14101 / bench-set-657, checked directly:** none of this
chapter's 14 figures are cited by `Subject-Matter Index — 14101 ch1-ch2.md`,
`Subject-Matter Index — 14101 ch3.md`, or `Subject-Matter Index — bench-set-657.md` —
grepped for section numbers (§7.1–§7.6) and figure numbers (7.1–7.14), no
matches. Every figure below is catalogued fresh.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | First-party Emerson document; sole source for this chapter. No archive or legacy material was consulted or found relevant to Chapter 7's content. |

## Components

### §7.1 Understanding Desuperheating (printed pp. 163–166)

```yaml
id: cvh-cmp-insertion-desuperheater-schematic
teaches: >
  A labelled schematic of a typical insertion-style desuperheater
  installation and its temperature control loop: a spraywater control valve
  meters spraywater into the steam line at the desuperheater, with a
  downstream temperature element (TE) feeding a temperature controller (TC)
  that closes the loop — the section's foundational diagram for how a
  desuperheater reduces steam temperature by injecting a controlled,
  predetermined amount of water into the flow.
concept-tags: [steam conditioning, desuperheater, temperature control loop, insertion-style, spraywater control valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.1 Understanding Desuperheating, Figure 7.1 (printed p. 163) — 'Typical Insertion-Style Desuperheater Installation and Temperature Control Loop.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Fully labelled schematic (Spraywater Control Valve, Spraywater,
  Desuperheater, Steam, TC, TE) — Style Guide §6.3 applies if ever placed on
  a slide.
```

```yaml
id: cvh-cmp-desuperheater-installation-orientations
teaches: >
  Six desuperheater installation orientations shown as a labelled composite —
  Horizontal, Vertical, Elbow, Radial, Condenser, and Reducer — illustrating
  that almost any orientation can be made to work if all system parameters
  are correctly incorporated into the design, though vertical-up flow is
  generally the optimum orientation for most units.
concept-tags: [steam conditioning, desuperheater, installation orientation, horizontal, vertical, elbow, radial]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.1 Understanding Desuperheating, Figure 7.2 (printed p. 164) — 'Desuperheating Installations.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  6-panel composite, each panel captioned by orientation name (not numbered
  callouts) — treat as a labelled composite for §6.3 purposes, same
  treatment as ch1's `cvh-cmp-cage-types` 3-panel composite.
```

```yaml
id: cvh-cmp-desuperheater-spray-penetration
teaches: >
  Three desuperheater spray nozzles shown at progressively deeper spray
  penetration into the steam flow — illustrates how proper placement and
  penetration depth of the spray avoids thermal stratification (a subcooled
  center core shrouded by superheated steam) that forms when a single-point,
  injection-type desuperheater has insufficient nozzle energy to disperse
  across the full flow area.
concept-tags: [steam conditioning, desuperheater, spray penetration, thermal stratification, nozzle energy]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.1 Understanding Desuperheating, Figure 7.3 (printed p. 165) — 'Desuperheater Spray Penetration.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A 3-panel progressive-sequence image (same nozzle at three penetration depths), not three distinct nozzle designs.
```

```yaml
id: cvh-topic-desuperheater-sizing-methodology
kind: topic
concept-tags: [desuperheater, sizing methodology, heat balance, spraywater quantity, Cv calculation]
status: current
teaches: >
  The real sizing method for a desuperheater, worked as a two-step
  calculation. Step 1 — a heat balance determines the required spraywater
  mass flow (Qw): as a function of inlet steam flow (Q1), Qw(mass) = Q1 ×
  (H1−H2)/(H2−Hw); as a function of outlet steam flow (Q2) instead, Qw(mass)
  = Q2 × (H1−H2)/(Hw−H1) — where Q is mass flow in PPH and H is the
  enthalpy at inlet, outlet, and spraywater conditions respectively. Step 2 —
  convert to a volumetric flow, Qw(volumetric) [GPM] = Qw(mass) × 0.1247 / ρw
  (ρw = spraywater density, lbm/ft³), then size the spraywater control valve
  with the standard liquid sizing relation Cv = Qw(volumetric) × √(SG/ΔPdsh),
  where ΔPdsh is the pressure differential across the proposed desuperheater.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.1 Understanding Desuperheating, pp. 164-165 — prose, not figure-anchored (the heat-balance and Cv equations themselves)."
relatedFigures: [cvh-cmp-insertion-desuperheater-schematic, cvh-cmp-desuperheater-spray-penetration]
relatedTopics: [cvh-topic-desuperheater-application-factors]
used-by: []
notes: >
  Confirmed by direct reading of PDF pp. 164-165 (printed pp. 164-165, zero
  offset per this chapter's own confirmed page-number correspondence). The
  three equations are transcribed exactly as printed, including which
  enthalpy terms appear in the numerator vs. denominator for each of the two
  Qw(mass) variants — this is a real, easily-transposed methodological
  detail worth getting right rather than approximating.
```

```yaml
id: cvh-topic-desuperheater-application-factors
kind: topic
concept-tags: [desuperheater, installation orientation, spraywater temperature, steam velocity, turndown, rangeability, strainer]
status: current
teaches: >
  The practical factors, beyond the sizing math itself, that determine
  whether a desuperheater installation actually works. Installation
  orientation matters more than unit style — vertical, flow-up is generally
  optimum. Counter-intuitively, hotter spraywater cools better: as
  spraywater temperature rises, surface tension and droplet-size
  distribution both improve, aiding vaporization. Steam velocity has upper
  and lower bounds — roughly 150-250 ft/s maximum (above which water can't
  mix before hitting a piping obstruction) and roughly 15-30 ft/s minimum
  for spring-loaded nozzles (below which droplets fall out of suspension;
  venturi or steam-atomizing designs extend usable velocity lower).
  "Turndown" and "rangeability" are frequently used interchangeably but are
  NOT the same thing, and a desuperheater — not being a final control
  element itself — has its actual system turndown set by the whole system
  (steam PRV, water TCV, pipe steam velocity, nozzle dP) rather than by the
  desuperheater's own empirical flow range alone; a good desuperheater
  cannot overcome a poor system. Inline strainers, sized to the specific
  nozzle's required mesh size, are always required given the particulate
  common in spraywater systems and piping.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.1/§7.1.1 Understanding Desuperheating / Technical Aspects of Desuperheating, pp. 163-166 — prose, not figure-anchored."
relatedFigures: [cvh-cmp-desuperheater-installation-orientations, cvh-cmp-desuperheater-spray-penetration]
relatedTopics: [cvh-topic-desuperheater-sizing-methodology]
used-by: []
notes: >
  Confirmed by direct reading of PDF pp. 163-166. The turndown-vs-rangeability
  distinction is explicitly flagged in the source itself as "one of the most
  over-used and misunderstood concepts" — worth preserving that framing
  rather than smoothing it into a plain definition, since the source's own
  point is that practitioners conflate the two.
```

### §7.2 Typical Desuperheater Designs (printed pp. 166–169)

```yaml
id: cvh-cmp-fixed-geometry-nozzle
teaches: >
  The fixed-geometry nozzle design — a simple, mechanically atomized
  desuperheater with single or multiple fixed-geometry spray nozzles,
  intended for applications with nearly constant load changes (rangeability
  up to 5:1), capable of proper atomization in steam flow velocities as low
  as 25-30 ft/s.
concept-tags: [steam conditioning, desuperheater design, fixed-geometry nozzle, rangeability]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.2.1 Fixed-Geometry Nozzle Design, Figure 7.4 (printed p. 167) — 'Fixed-Geometry Nozzle Design.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Printed side by side with `cvh-cmp-variable-geometry-nozzle` (Figure 7.5) for direct visual comparison.
```

```yaml
id: cvh-cmp-variable-geometry-nozzle
teaches: >
  The variable-geometry nozzle design — a simple, mechanically atomized
  desuperheater using one or more variable-geometry, back-pressure-activated
  spray nozzles, handling moderate load changes (rangeability up to 20:1)
  with the same minimum atomization velocity as the fixed-geometry design.
concept-tags: [steam conditioning, desuperheater design, variable-geometry nozzle, backpressure-activated, rangeability]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.2.2 Variable-Geometry Nozzle Design, Figure 7.5 (printed p. 167) — 'Variable-Geometry Nozzle Design.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Printed side by side with `cvh-cmp-fixed-geometry-nozzle` (Figure 7.4).
  The nozzle's own internal spring/valve mechanism is visible at its tip,
  distinguishing it visually from the fixed-geometry nozzle.
```

```yaml
id: cvh-cmp-self-contained-desuperheater-design
teaches: >
  The self-contained desuperheater design — mechanically atomized with one
  or more variable-geometry, backpressure-activated spray nozzles, but with
  a water flow control element packaged directly onto the desuperheating
  device itself (rather than as a separate spray water valve), minimizing
  space and piping modification on existing installations. Handles
  rangeability up to 25:1.
concept-tags: [steam conditioning, desuperheater design, self-contained, integrated control element, rangeability]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.2.3 Self-Contained Design, Figure 7.6 (printed p. 168) — 'Self-Contained Design.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Positioned top-left on a page shared with Figures 7.7, 7.8, and 7.9 — see those records for the page's other three figures.
```

```yaml
id: cvh-cmp-steam-atomized-desuperheater-design
teaches: >
  The steam-atomized desuperheater design — incorporates high-pressure steam
  (usually twice the main steam line pressure or higher) into the spray
  nozzle chamber to atomize the spraywater into very small droplets, allowing
  the design to properly mix water into steam flow velocities as low as
  approximately 10 ft/s under optimum conditions and handle rangeability up
  to 50:1.
concept-tags: [steam conditioning, desuperheater design, steam-atomized, high-pressure atomization, low steam velocity]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.2.4 Steam-Atomized Design, Figure 7.7 (printed p. 168) — 'Steam-Atomized Design.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Positioned bottom-left on the same page as Figures 7.6, 7.8, and 7.9 —
  this design also requires a separate on/off valve for the atomizing steam
  supply, per the surrounding text.
```

```yaml
id: cvh-cmp-steam-assisted-desuperheater-control-loop
teaches: >
  A labelled control loop schematic for a steam-atomized desuperheater
  installation: steam-atomizing isolation valve, spraywater control valve,
  temperature controller, SV and LS switches, and a downstream temperature
  element (TE) — shows how the atomized-steam and spraywater paths are
  jointly controlled to achieve rapid, complete atomization.
concept-tags: [steam conditioning, desuperheater, control loop, steam-atomizing isolation valve, temperature controller]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.2.4 Steam-Atomized Design, Figure 7.8 (printed p. 168) — 'Control Loop with Steam-Assisted Desuperheater.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  A wide labelled schematic spanning the full page width, positioned at the
  bottom of the page below Figures 7.6, 7.7, and 7.9 despite appearing
  numerically before 7.9's caption in the source's own layout — confirmed by
  direct visual inspection of the page, not assumed from linear text order.
  Fully labelled (Steam-Atomizing Isolation Valve, SV, Spraywater Control
  Valve, LS, Temperature Controller, TE, Atomized Steam, Steam) — Style
  Guide §6.3 applies if ever placed on a slide.
```

```yaml
id: cvh-cmp-geometry-assisted-wafer-design
teaches: >
  The geometry-assisted wafer design — a desuperheater installed as a wafer
  between two pipe flanges, originally developed for small steam pipe line
  sizes (less than NPS 6) unable to accommodate an insertion-style
  desuperheater. A reduced-diameter throat venturi sprays water completely
  around the wafer through drilled holes or small nozzles and increases
  steam velocity at the injection point to enhance atomization and mixing.
  Handles rangeability up to 20:1 in pipe sizes NPS 1 through NPS 24.
concept-tags: [steam conditioning, desuperheater design, wafer design, venturi throat, small pipe sizes]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.2.5 Geometry-Assisted Wafer Design, Figure 7.9 (printed p. 168) — 'Geometry-Assisted Wafer Design.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Positioned top-right on the same page as Figures 7.6, 7.7, and 7.8 —
  physically above Figure 7.8 on the page despite the higher figure number,
  confirmed by direct visual inspection (a real instance of the source's
  layout not matching a naive top-to-bottom, low-to-high figure-number
  reading order).
```

### §7.3–7.4 Steam Conditioning Valves (printed pp. 170–171)

```yaml
id: cvh-cmp-steam-conditioning-valve-cross-section
teaches: >
  A cross-section view of a steam conditioning valve — combines pressure
  reduction and temperature control in a single integral valve, developed
  using finite element analysis (FEA) and computational fluid dynamics (CFD)
  for structural integrity and operating performance. The cage is case
  hardened, continuously guided, and uses cobalt-based overlays for guide
  bands and metal-to-metal shutoff against the seat; the flow-up
  configuration combined with noise-abatement trim prevents excessive noise
  and vibration during rapid temperature swings such as a turbine trip.
concept-tags: [steam conditioning valve, cross-section, pressure and temperature control, cage-guided, metal-to-metal shutoff]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.4 Steam Conditioning Valves, Figure 7.10 (printed p. 170) — 'Cross-Section View of Steam Conditioning Valve.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A cutaway rendering, unlabelled with numbered callouts.
```

```yaml
id: cvh-cmp-backpressure-spray-nozzle
teaches: >
  The variable-geometry, backpressure-activated spray nozzle used in the
  steam conditioning valve's spraywater manifold — originally developed for
  condenser dump systems where downstream steam pressure can fall below
  saturation. Spring loading of the nozzle plug prevents flashing-induced
  changes from forcing the plug open; when flashing occurs, the nozzle spring
  forces closure and re-pressurization of the fluid leg until liquid
  properties are reestablished.
concept-tags: [steam conditioning valve, spray nozzle, backpressure-activated, flashing, spring-loaded plug]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.4 Steam Conditioning Valves, Figure 7.11 (printed p. 171) — 'Variable-Geometry, Backpressure-Activated Spray Nozzle.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A single-component photo, distinct from the whole-valve cross-section in Figure 7.10.
```

```yaml
id: cvh-topic-steam-conditioning-valve-rationale
kind: topic
concept-tags: [steam conditioning valve, forged construction, combined pressure and temperature control, rangeability]
status: current
teaches: >
  Why pressure reduction and desuperheating are combined into one integral
  valve rather than built as two separate devices. Steam conditioning valves
  are typically forged/fabricated (not cast) because forging permits higher
  design stresses, improved grain structure, and better material integrity
  at the elevated pressures/temperatures these applications see, plus it
  allows an expanded outlet (to control outlet steam velocity after the
  pressure drop) and different inlet/outlet pressure-class ratings to better
  match adjacent piping — castings remain an option only for lower-pressure
  globe-style applications. Combining the two functions in one valve (versus
  two separate devices) improves spraywater mixing (using the turbulent
  expansion zone downstream of the pressure-reduction elements), improves
  rangeability, and simplifies installation/servicing to one device instead
  of two.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.3 Understanding Steam Conditioning Valves, pp. 169-170 — prose, not figure-anchored."
relatedFigures: [cvh-cmp-steam-conditioning-valve-cross-section, cvh-cmp-backpressure-spray-nozzle]
relatedTopics: []
used-by: []
notes: >
  Confirmed by direct reading of PDF pp. 169-170. This is the "why" behind
  what Figure 7.10's cross-section shows physically — the figure entry
  covers the hardware (cage, cobalt overlays, shutoff), this topic covers
  the design-rationale reasoning (forged vs. cast, combined vs. separate)
  that isn't visible in the figure itself.
```

### §7.4.1–7.4.2 Attemperator and Sparger (printed p. 171)

```yaml
id: cvh-cmp-ring-style-attemperator
teaches: >
  A ring-style attemperator with liner — used when an application requires
  separating the pressure-reduction and desuperheating functions. A water
  supply manifold (multiple manifolds are possible) feeds cooling water
  through a number of individual spray nozzles installed radially in the
  pipe wall of the outlet section, injecting a fine spray into the high
  turbulence of the axial steam flow for efficient mixing and rapid
  vaporization.
concept-tags: [steam conditioning, attemperator, ring-style, water supply manifold, radial injection]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.4.1 Steam Attemperator, Figure 7.12 (printed p. 171) — 'Ring-Style Attemperator with Liner.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A pipe-section cutaway showing the ring manifold and mounting hardware.
```

```yaml
id: cvh-cmp-steam-sparger-drilled-hole
teaches: >
  A steam sparger with drilled-hole noise control technology — a
  pressure-reducing device used to safely discharge steam into a condenser
  or turbine exhaust duct, providing backpressure to the turbine bypass
  valve, limiting steam velocity, and allowing reduced pipe size between the
  bypass valve and sparger. Sparger design and installation are key to
  system noise, and various noise-abatement technologies (such as the
  drilled-hole pattern shown) address flow-induced noise.
concept-tags: [steam conditioning, steam sparger, noise abatement, drilled-hole, turbine bypass backpressure]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.4.2 Steam Sparger, Figure 7.13 (printed p. 172) — 'Steam Sparger with Drilled-Hole Noise Control Technology.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A cylindrical sparger component photo, showing the drilled perforation pattern along its body.
```

### §7.5–7.6.2 Turbine Bypass Systems and Valve Selection (printed pp. 172–173, no figures — prose only)

```yaml
id: cvh-topic-turbine-bypass-system-rationale
kind: topic
concept-tags: [turbine bypass, load swings, boiler protection, plant commissioning, closed-loop system]
status: current
teaches: >
  Why turbine bypass systems exist. Power plant operation swings rapidly
  between minimum and full load within a single day, and boilers, turbines,
  condensers, and associated equipment cannot respond properly to such rapid
  changes without a bypass path. A turbine bypass system lets the boiler
  operate independent of the turbine — supplying an alternate flow path for
  steam during startup or rapid load reduction, and conditioning that steam
  to the same pressure/temperature the turbine's own expansion process would
  normally produce. This protects the turbine, boiler, and condenser from
  thermal and pressure-excursion damage, allows a new plant's boiler to be
  commissioned and checked out separately from its turbine (faster, more
  economical startups), and — as a closed-loop system — prevents atmospheric
  loss of treated feedwater and reduces ambient noise emissions.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.5 Understanding Turbine Bypass Systems, pp. 172-173 — prose, not figure-anchored (no figure exists for this section)."
relatedFigures: [cvh-cmp-turbine-bypass-actuation-package]
relatedTopics: [cvh-topic-turbine-bypass-valve-selection]
used-by: []
notes: >
  Confirmed by direct reading of PDF pp. 172-173. This section has no figure
  at all in the source — genuinely missed by the figures-only pass, not a
  gap in that pass's execution.
```

```yaml
id: cvh-topic-turbine-bypass-valve-selection
kind: topic
concept-tags: [turbine bypass valve, water control valve, Class V shutoff, valve selection, noise abatement trim]
status: current
teaches: >
  A turbine bypass system's major elements are the turbine bypass valves,
  turbine bypass water control valves, and the actuation system. Both the
  bypass valves and their water control valves usually require tight
  shutoff (Class V) for equipment protection; water control valve trim can
  range from standard to cavitation-reduction styles. Selecting a turbine
  bypass control valve should start from the actual performance goals,
  real piping geometry, and required process controls, THEN incorporate
  valve style/size, pressure and flow control needs, noise-specification
  requirements, and materials — bypass valve installations vary widely and
  are frequently customized, rarely identical between installations.
  Separate globe/angle bodies with downstream desuperheating devices suit
  existing piping layouts; sliding-stem valves give precise flow control
  and can incorporate noise-abatement trim for the large pressure drops
  typical of steam letdown/turbine bypass service.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.6 Turbine Bypass System Components / §7.6.1 Turbine Bypass Valves / §7.6.2 Turbine Bypass Water Control Valves, p. 173 — prose, not figure-anchored (no figure exists for these subsections; §7.6.3's own figure, Figure 7.14, is catalogued separately below)."
relatedFigures: [cvh-cmp-turbine-bypass-actuation-package]
relatedTopics: [cvh-topic-turbine-bypass-system-rationale]
used-by: []
notes: >
  Confirmed by direct reading of PDF p. 173. §7.6.3 (Actuation) already has
  its own figure entry (`cvh-cmp-turbine-bypass-actuation-package`) which
  adequately covers the actuation-specific numbers (2-4s stroke, 1%
  positioning accuracy, pneumatic/hydraulic options) — not duplicated here;
  this topic covers §7.6-7.6.2's valve-selection content specifically, which
  had no figure and no existing coverage at all.
```

### §7.6.3 Turbine Bypass Actuation (printed p. 174)

```yaml
id: cvh-cmp-turbine-bypass-actuation-package
teaches: >
  A typical actuation package for use in turbine bypass applications — turbine
  bypass valves usually require tight shutoff (Class V) and extremely rapid
  open/close response times (2-4 seconds full-stroke) with better than 1%
  positioning accuracy, protecting critical, costly turbines from damage
  during transients while allowing the boiler to be started up and checked
  out independent of the turbine. Both pneumatic and hydraulic actuation
  solutions are available.
concept-tags: [turbine bypass, actuation package, tight shutoff, fast stroking, transient protection]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§7.6.3 Actuation, Figure 7.14 (printed p. 174) — 'Typical Actuation Package for Use in Turbine Bypass Applications.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A full actuator-and-valve assembly photo; the last figure of the chapter.
```

## Open items

- **Batch coverage**: all 14 real figures in the chapter (Figures 7.1–7.14) are catalogued, with no gaps in the numeric sequence. Confirmed by rendering and visually inspecting every page in the chapter's real range.
- **Chapter boundary correction**: same pattern as ch6 — PDF page 175 is a blank trailing page, not chapter content; the real Chapter 8 divider is PDF page 176. Chapter 7's real span is divider 162, content 163–174, blank 175.
- **A real out-of-order layout, caught only by rendering the page:** Figures 7.8 and 7.9 print on the same page (168) with Figure 7.9 positioned physically ABOVE Figure 7.8 despite the lower figure number — a naive top-to-bottom reading (or trusting linear text-extraction order) would have mis-sequenced or mis-paired the captions with their content. Confirmed correct by direct visual inspection; see the notes on both records.
- **No duplicate printed figure numbers or source citation errors found** in this chapter — every figure number 7.1–7.14 appears exactly once, with a caption matching its content, and no in-line text citation pointed to the wrong figure number.
- **Table exclusion**: no numbered tables appear anywhere in this chapter's real page range — confirmed by a full page-by-page visual read.
- **Cross-reference check**: `Subject-Matter Index — 14101 ch1-ch2.md`, `Subject-Matter Index — 14101 ch3.md`, and `Subject-Matter Index — bench-set-657.md` were checked directly — no existing citations into this chapter's range (§7.1–§7.6, figures 7.1–7.14). Every figure catalogued fresh here.
- **No archive or legacy material** was found or consulted for this chapter — the 6th-edition Control Valve Handbook is the sole and sufficient source for all 14 figures.
- **`status` and `id` conventions**: this file was authored fresh under the corrected conventions — no drift to correct.
- **`kind: topic` pass (2026-09-17):** read the chapter's full body prose (PDF pp. 163-174) start to finish, not just figure-adjacent text. Five real `kind: topic` entries added: `cvh-topic-desuperheater-sizing-methodology` and `cvh-topic-desuperheater-application-factors` (§7.1), `cvh-topic-steam-conditioning-valve-rationale` (§7.3-7.4), `cvh-topic-turbine-bypass-system-rationale` and `cvh-topic-turbine-bypass-valve-selection` (§7.5-7.6.2). The latter two topics cover §7.5 and §7.6-7.6.2 specifically — real sections with genuine conceptual content that had **no figure at all** and so were invisible to the original figures-only pass, not a gap in that pass's own execution. §7.2 (desuperheater design types, Figures 7.4-7.9) and §7.4.1-7.4.2 (attemperator/sparger, Figures 7.12-7.13) were read in full and confirmed to have no conceptual content beyond what their existing figure entries already capture — no topic entry added for these, to avoid padding. Total chapter component count: 19 (14 figures + 5 topics), up from 14.
