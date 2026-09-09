---
title: Component Index — Oil & Gas Sourcebook ch1
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch1 — Control Valve Selection
updated: 2026-09-08
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 1

**Chapter 1 — "Control Valve Selection."** Standing library-cataloging pass, NOT
tied to any course — built ahead of any course actually needing these figures,
per `Source Library.md`'s "two ways a component index gets triggered." Two
batches cover the chapter's figures end to end:

- **First batch** — the six sliding-stem / ball-valve overview figures on PDF
  pages 7–10 (printed pages 1-1 through 1-4).
- **Second batch** — the six rotary-valve, flow-characteristic, and
  end-connection figures on PDF pages 10–15 (printed pages 1-4 through 1-9).
- **Third batch** — the five packing-selection and packing-arrangement
  figures on PDF pages 22–25 (printed pages 1-16 through 1-19), which
  actually closes out the chapter's figures. **Correction to the second
  batch's "Open items" note:** that note claimed Chapter 1 ended at printed
  p. 1-10 (Table 1-2) — wrong. Verified against the real document for this
  batch: printed pp. 1-10 through 1-12 carry Tables 1-2/1-3/1-4 (reference
  tables, not figures, consistent with the earlier "tables aren't
  catalogued" practice), then a "Packing Materials and Systems" section
  starts at printed p. 1-12 and runs to p. 1-19, carrying Table 1-5 (also
  not catalogued — a table) and Figures 1-13 through 1-17. Chapter 1 ends at
  printed p. 1-19 (PDF page 25); Chapter 2 "Actuator Selection" starts
  immediately after on the same PDF page.

All three batches are from `20 - Source Library/Industry Specific
Sourcebooks/Control Valve Sourcebook - Oil & Gas.pdf`. Every record's
`used-by` is `[]` — none are placed on a slide yet; a future course resolves
against these entries instead of triggering reactive cataloging.

Record shape matches `Component Index — 14101 ch3.md`: `id` · `teaches` ·
`concept-tags` · `status` · `source` (`doc` + `locator`) · `delivery` ·
`used-by` · `notes`.

## Precedence

The Oil & Gas Sourcebook is itself a **current** document (© 2013 Fisher, held
in the Source Library's Industry Handbooks holdings — see `Industry
Handbooks.md`), so every record below is `status: current`. No archive or
legacy material was consulted for this batch.

## Components

### Chapter 1 — General valve-type overview (printed pp. 1-1 – 1-4)

```yaml
id: ogas-cmp-modern-control-valve-assembly
teaches: >
  A complete modern control valve loop assembly: spring-and-diaphragm
  actuator on top, globe valve body below, and a digital valve controller
  (FIELDVUE) mounted on the yoke — the three pieces combined to introduce
  "control valve" as actuator + valve assembly + digital positioner working
  together, before the chapter breaks out into individual valve subcategories.
concept-tags: [control valve overview, actuator, valve assembly, digital valve controller, FIELDVUE, sliding-stem]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1 "Control Valve Selection," Figure 1-1 (drawing W8119-2, printed
      p. 1-1) — "Modern control valve combines actuator, valve assembly and
      digital valve controller to provide maximum performance in a wide
      variety of control applications."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig1-modern-control-valve-overview.png
    locator: "already extracted — cropped directly from the source PDF (p. 7 / printed 1-1) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A production photo, not a labelled cutaway — good as a chapter-opening /
  overview image, not a part-callout source. Photo shows an EAS/ET-family
  globe body under a spring-and-diaphragm actuator with a FIELDVUE DVC
  mounted on the yoke.
```

```yaml
id: ogas-cmp-et-globe-cutaway
teaches: >
  Standard globe sliding-stem valve construction (typified by the Fisher ET):
  cage-guided trim, balanced valve plug (reduces plug force, allows smaller
  actuators), PTFE disk seat with metal disk retainer, seat ring, bonnet
  gasket, spiral-wound gasket, cage gasket, groove pin, TFE V-ring packing,
  backup ring, seal ring. The first-choice design for applications under
  NPS 3.
concept-tags: [globe valve, sliding-stem, ET, cage-guided, balanced plug, PTFE disk seat, seat ring, bonnet gasket, TFE V-ring, packing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-2 (drawing W0992-4, printed p. 1-2) — "Standard
      globe sliding-stem valve design is typified by the ET. A broad range of
      sizes, materials and end connections is available. The balanced plug
      reduces plug force and allows use of smaller actuators. These valves
      are the first choice for applications less than NPS 3 size."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig2-et-globe-valve-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 8 / printed 1-2) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway with its own field callouts already printed on the
  figure (BONNET GASKET, SPIRAL WOUND GASKET, CAGE GASKET, GROOVE PIN, SEAT
  RING GASKET, METAL DISK SEAT, PTFE DISK, METAL DISK RETAINER, TFE V-RING,
  BACKUP RING, SEAL RING, VALVE PLUG) — a nomenclature source, not just a
  silhouette. If ever placed on a slide with the house numbered-marker
  convention, see Style Guide §6.3 (figures with their own printed field
  labels are not re-marked with numbered circles).
```

```yaml
id: ogas-cmp-large-et-drilled-cage-cutaway
teaches: >
  Severe-service globe valve capability: a Large ET with a drilled-hole cage
  that attenuates flow noise by splitting flow into multiple passages, with
  hole spacing controlled to prevent jet interaction and higher noise.
concept-tags: [globe valve, severe service, Large ET, drilled cage, noise attenuation, multi-passage trim]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-3 (drawing X0215-1, printed p. 1-2) — "Severe
      service capability in globe valves demonstrated by this Large ET. The
      drilled hole cage provides attenuation of flow noise by splitting the
      flow into multiple passages. Spacing of the holes is carefully
      controlled to eliminate jet interaction and higher resultant noise
      levels."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig3-large-et-drilled-cage-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 8 / printed 1-2) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Unlabelled silhouette cutaway (no printed field callouts) — pairs well as a
  "before/after" or "standard vs. severe-service" companion to
  `ogas-cmp-et-globe-cutaway`, which does carry callouts.
```

```yaml
id: ogas-cmp-ehd-high-pressure-cutaway
teaches: >
  High-pressure globe valve construction: the EHD, rated ASME CL2500,
  provides throttling control of high-pressure steam and fluids; anti-noise
  and anti-cavitation trims are available for flow problems.
concept-tags: [globe valve, EHD, high pressure, ASME CL2500, anti-noise trim, anti-cavitation trim, steam service]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-4 (drawing W3379, printed p. 1-3) — "EHD is typical
      of high-pressure globe valves. Rated at ASME CL2500, it provides
      throttling control of high-pressure steam and fluids. Anti-noise and
      anti-cavitation trims are available to handle flow problems."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig4-ehd-high-pressure-globe-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 9 / printed 1-3) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Unlabelled silhouette cutaway — same trim family shape as the ET (cage,
  plug, seat ring visible) but heavier body section for the CL2500 rating; no
  printed field callouts.
```

```yaml
id: ogas-cmp-economy-body-sliding-stem
teaches: >
  The lowest-cost sliding-stem subcategory: "economy" bodies (e.g., the
  Baumann 24000 Little Scotty) for low-pressure steam, air and water
  service, NPS 1/2 - 4, pressure classes generally to ASME CL300, smaller
  actuators, simpler construction, no severe-service noise/cavitation trim
  options.
concept-tags: [sliding-stem, economy body, Baumann 24000, Little Scotty, low pressure, general purpose valve, FIELDVUE DVC6200]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-5 (drawing X0184, printed p. 1-3) — "NPS 1 Baumann
      24000 Little Scotty valve with a size 32 actuator and a FIELDVUE
      DVC6200."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig5-baumann-24000-little-scotty-valve.png
    locator: "already extracted — cropped directly from the source PDF (p. 9 / printed 1-3) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Production photo (not a cutaway) — same assembly shape as
  `ogas-cmp-modern-control-valve-assembly` (spring-and-diaphragm actuator +
  FIELDVUE positioner) but on the small "economy" Baumann body; useful as
  the low-cost/small-size contrast case.
```

```yaml
id: ogas-cmp-v250-ball-valve-cutaway
teaches: >
  High-pressure full-ball valve construction (the V250): heavy shaft, full
  through-bore ball, suitable for pressure drops to 2220 psig; ASME CL600 and
  CL900 bodies to NPS 24. Labelled parts: valve body, body outlet, valve ball
  outlet/inlet seals, thrust washer, main shaft bearing, seal carrier, drive
  shaft, O-ring, shim seals, follower shaft, seal protector ring / flow ring.
concept-tags: [ball valve, full-ball, through-bore, V250, high pressure drop, ASME CL600, ASME CL900, shaft bearing, seal carrier]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-6 (drawing W7169, printed p. 1-4) — "High-pressure
      ball valves feature heavy shafts and full ball designs. This V250 is
      suitable for pressure drops to 2220 psig. ASME CL600 and CL900 bodies
      are available—sizes range to NPS 24."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig6-v250-high-pressure-ball-valve-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 10 / printed 1-4) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway with its own field callouts already printed on the
  figure (VALVE BODY, BODY OUTLET, VALVE BALL OUTLET, THRUST WASHER, MAIN
  SHAFT BEARING, SEAL CARRIER, DRIVE SHAFT, O-RING, SHIM SEALS, VALVE BALL
  INLET SEAL, SEAL PROTECTOR RING OR FLOW RING, FOLLOWER SHAFT) — the ball-
  valve counterpart to `ogas-cmp-et-globe-cutaway`'s labelled globe cutaway.
  Same §6.3 note applies if used on a slide.
```

---

### Chapter 1 — Rotary valves, flow characteristic, and end connections (printed pp. 1-4 – 1-9)

```yaml
id: ogas-cmp-vee-ball-segmented-cutaway
teaches: >
  Segmented-ball valve construction (the V150/V200/V300 Vee-Ball): a
  reduced-bore ball whose segment edge has a contoured notch shape for
  better throttling control and higher rangeability than a full-bore ball
  valve. Splined shaft connections are engineered to eliminate lost motion.
  Tight shutoff is achieved with either heavy-duty metal seals or
  composition seals; ASME CL600, sizes to NPS 24. The segmented-ball
  subcategory contrasts with the through-bore/full-ball type (Figure 1-6).
concept-tags: [ball valve, segmented ball, Vee-Ball, V150, V200, V300, reduced bore, contoured notch, rangeability, splined shaft, ASME CL600, lost motion]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1 "Control Valve Selection," Figure 1-7 (drawing W7435, printed
      p. 1-4) — "Applications to ASME CL600 can be handled by the
      V150/V200/V300 Vee-Ball™. This product incorporates many features to
      improve throttling performance and rangeability. Tight shutoff is
      achieved by using either heavy-duty metal seals or composition seals."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig7-v150-v200-v300-vee-ball-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 10 / printed 1-4) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Unlabelled silhouette cutaway (no printed field callouts, unlike the
  full-ball V250 of Figure 1-6) — pairs as a "segmented vs. full-bore"
  companion to `ogas-cmp-v250-ball-valve-cutaway`; both figures sit on the
  same source page (printed p. 1-4 / PDF page 10).
```

```yaml
id: ogas-cmp-v500-eccentric-plug-cutaway
teaches: >
  Eccentric plug valve construction (the V500): rotary actuation combined
  with a massive, rigid seat design. The valve plug "cams" into the seat
  ring upon closure, giving tight shutoff with globe-valve-style seating
  plus excellent resistance to abrasive wear and flashing-induced erosion.
  Sizes generally to NPS 8; pressure ratings to ASME CL600. Labelled parts:
  retainer, valve plug, seat ring, face seals, bearing, taper and expansion
  pins, thrust washer, valve body, packing, valve shaft, bearing stop.
concept-tags: [eccentric plug valve, V500, rotary actuation, cams into seat, globe valve style seating, abrasive wear resistance, flashing erosion, seat ring, face seals]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-8 (drawing W4170-3/IL, printed p. 1-5) — "The V500
      eccentric plug valve is specially designed for severe rotary
      applications. Since the valve plug 'cams' into the seat ring upon
      closure, it features tight shutoff with globe valve style seating. It
      also offers excellent resistance to abrasive wear and flashing induced
      erosion."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig8-v500-eccentric-plug-valve-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 11 / printed 1-5) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway with its own printed field callouts (RETAINER,
  VALVE PLUG, SEAT RING, FACE SEALS, BEARING, TAPER AND EXPANSION PINS,
  THRUST WASHER, VALVE BODY, PACKING, VALVE SHAFT, BEARING STOP) — a
  nomenclature source like `ogas-cmp-et-globe-cutaway` and
  `ogas-cmp-v250-ball-valve-cutaway`. Style Guide §6.3 applies (figure's own
  printed field labels are not re-marked with numbered circles) if ever
  placed on a slide.
```

```yaml
id: ogas-cmp-8560-high-perf-butterfly-cutaway
teaches: >
  High performance butterfly valve construction (the 8560, ASME CL150):
  offset-disk design with eccentric shaft mounting so the disk swings clear
  of its seal to minimize wear and torque, allowing uninterrupted sealing
  and a replaceable seal ring. Labelled parts: spring, seal ring, taper pins
  and hollow pins, packing follower, valve body, disk, bearing, PTFE V-ring
  packing, splined shaft.
concept-tags: [high performance butterfly valve, 8560, offset disk, eccentric shaft mounting, PTFE V-ring packing, splined shaft, ASME CL150]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-9 (drawing W6235-2/IL, printed p. 1-6) — "High
      performance butterfly valves provide excellent performance and value.
      High-pressure capability, tight shutoff and excellent control are
      featured as standard. This 8560 design is made for ASME CL150
      applications."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig9-8560-high-performance-butterfly-cutaway.png
    locator: "already extracted — cropped directly from the source PDF (p. 12 / printed 1-6) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Fully labelled cutaway with its own printed field callouts (SPRING, SEAL
  RING, TAPER PINS AND HOLLOW PINS, PACKING FOLLOWER, VALVE BODY, DISK,
  BEARING, PTFE V-RING PACKING, SPLINED SHAFT) — a nomenclature source; §6.3
  applies if ever placed on a slide.
```

```yaml
id: ogas-cmp-flow-characteristic-curves
teaches: >
  The three typical inherent flow-characteristic curves — quick-opening,
  linear, equal-percentage — plotted as percent of maximum flow vs. percent
  of rated travel. Quick-opening gives maximum flow change at low travel
  (used for on-off service); linear gives flow directly proportional to
  travel, i.e. constant gain at constant pressure drop (used for liquid
  level control and some flow control); equal-percentage gives a flow
  change always proportional to the flow rate just before the change (used
  for pressure control and highly varying pressure-drop applications).
concept-tags: [flow characteristic, quick opening, linear, equal percentage, rated travel, percent of maximum flow, valve gain, rangeability]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-10 (drawing E1541, printed p. 1-7) — "Many control
      valves offer a choice of characteristic. Selection to match process
      requirements is guided by simple rules. Adherence to these guidelines
      will help assure stable operation."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig10-flow-characteristic-curves.png
    locator: "already extracted — cropped directly from the source PDF (p. 13 / printed 1-7) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph, not a cutaway — if ever placed on a slide it falls
  under Style Guide §5 (diagram & graph conventions), not §6's
  nomenclature/callout rules. The source figure's three in-plot labels
  (QUICK OPENING, LINEAR, EQUAL PERCENTAGE) are horizontal margin labels
  with pointer-ins, not rotated — closer to §5's own house convention than
  many CVH figures, but a redraw/key decision (series swatches per §5.3)
  would still need to be made at the point of use rather than assumed here.
```

```yaml
id: ogas-cmp-bolted-flange-end-connections
teaches: >
  The three common bolted flange end-connection styles for control valves:
  flat-face, raised-face, and ring-type joint. Flanged ends are used across
  the full range of working pressures most control valves are manufactured
  in, suit a temperature range from absolute zero (−273°F) to approximately
  1500°F (815°C), and are used on all valve sizes.
concept-tags: [end connections, bolted flange, flat-face, raised-face, ring-type joint, flanged ends]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-11 (drawing A7098, printed p. 1-9) — "Popular
      varieties of bolted flange end connections."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig11-bolted-flange-end-connections.png
    locator: "already extracted — cropped directly from the source PDF (p. 15 / printed 1-9) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Three stacked line-art cross-sections with their own printed labels
  (FLAT-FACE, RAISED-FACE, RING-TYPE JOINT) — §6.3 applies if ever placed on
  a slide. Pairs with `ogas-cmp-welded-end-connections` (Figure 1-12) as the
  chapter's two end-connection figures; both sit on the same source page.
```

```yaml
id: ogas-cmp-welded-end-connections
teaches: >
  The two common welded end-connection styles for control valves: socket
  welding ends and butt welding ends. Welded ends are leak-tight at all
  pressures and temperatures and economical in initial cost, but are more
  difficult to remove from the line than flanged or screwed ends and are
  limited to weldable materials.
concept-tags: [end connections, welded ends, socket welding ends, butt welding ends]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-12 (drawing A7099, printed p. 1-9) — "Common
      welded end connections."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig12-welded-end-connections.png
    locator: "already extracted — cropped directly from the source PDF (p. 15 / printed 1-9) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Two stacked line-art cross-sections with their own printed labels (SOCKET
  WELDING ENDS, BUTT WELDING ENDS) — §6.3 applies if ever placed on a slide.
  Pairs with `ogas-cmp-bolted-flange-end-connections` (Figure 1-11); both
  sit on printed p. 1-9 (PDF page 15), the flange figure above this one in
  the left column.
```

---

### Chapter 1 — Packing selection and packing arrangements (printed pp. 1-16 – 1-19)

```yaml
id: ogas-cmp-packing-500ppm-guidelines-chart
teaches: >
  Pressure/temperature application envelopes for packing systems rated to
  the EPA 500 ppmv fugitive-emission ("500 PPM Service") criterion: Single
  PTFE V-Ring, ENVIRO-SEAL PTFE, ENVIRO-SEAL Duplex, ENVIRO-SEAL Graphite
  ULF / HIGH-SEAL Graphite with PTFE, KALREZ with PTFE (KVSP 400), and
  KALREZ with ZYMAXX (KVSP 500) — each plotted as a hatched pressure-vs-
  temperature region. Companion to Table 1-5's "500 PPM Service" columns.
concept-tags: [packing selection, 500 ppm service, fugitive emission, EPA, ENVIRO-SEAL PTFE, ENVIRO-SEAL Duplex, ENVIRO-SEAL Graphite ULF, HIGH-SEAL Graphite with PTFE, Single PTFE V-Ring, KALREZ, pressure temperature envelope]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1 "Control Valve Selection," Figure 1-13 (drawing A6158-2/IL,
      printed p. 1-16) — "Application Guidelines Chart for 500 PPM Service."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig13-packing-500ppm-application-guidelines-chart.png
    locator: "already extracted — cropped directly from the source PDF (p. 22 / printed 1-16) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  An analytical pressure-vs-temperature envelope chart (hatch-filled regions,
  not a cutaway) — not the standard cutaway/line-art shape most ch1 records
  carry, closer in kind to `ogas-cmp-flow-characteristic-curves` (Figure
  1-10). Paired with Figure 1-14 (`ogas-cmp-packing-nonenvironmental-guidelines-chart`,
  the non-environmental-service companion, same source page) and with Table
  1-5 "Packing Selection Guidelines for Sliding-Stem Valves" (printed p.
  1-13, a reference table — not catalogued here, same practice as Table
  1-2/1-3/1-4). If ever placed on a slide, falls under Style Guide §5; the
  source figure's own hatch-pattern fill legend (printed directly on the
  plot, not a separate key) is a §5.1–§5.3 redraw/key decision to make at
  the point of use, not assumed here.
```

```yaml
id: ogas-cmp-packing-nonenvironmental-guidelines-chart
teaches: >
  Pressure/temperature application envelopes for packing systems in
  non-environmental (non-fugitive-emission) service — wider envelopes than
  the 500 ppm chart: Single/Double PTFE V-Ring, ENVIRO-SEAL PTFE and Duplex,
  ENVIRO-SEAL Graphite ULF, HIGH-SEAL Graphite (with and without PTFE),
  Braided Graphite Filament, and KALREZ variants. Companion to Table 1-5's
  "Nonenvironmental Service" columns.
concept-tags: [packing selection, non-environmental service, ENVIRO-SEAL PTFE, ENVIRO-SEAL Duplex, ENVIRO-SEAL Graphite ULF, HIGH-SEAL Graphite, HIGH-SEAL Graphite with PTFE, Braided Graphite Filament, KALREZ, pressure temperature envelope]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1 "Control Valve Selection," Figure 1-14 (drawing A6159-2/IL,
      printed p. 1-16) — "Application Guidelines Chart for Non-Environmental
      Service."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig14-packing-nonenvironmental-application-guidelines-chart.png
    locator: "already extracted — cropped directly from the source PDF (p. 22 / printed 1-16) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Same page and same chart family as `ogas-cmp-packing-500ppm-guidelines-chart`
  (Figure 1-13) — the two are printed one above the other on source PDF page
  22 and were cropped from the same page render. Same §5 redraw/key flag
  applies if ever placed on a slide.
```

```yaml
id: ogas-cmp-sliding-stem-packing-examples-ptfe-and-duplex
teaches: >
  Four labelled packing-arrangement cutaways for sliding-stem valves: Single
  PTFE V-Ring (coil spring, drawing A6161); Double PTFE V-Ring (two packing
  stacks + spacer, drawing A6162); ENVIRO-SEAL PTFE (live-loaded design —
  springs (Inconel 718), anti-extrusion washers, lantern rings, anti-
  extrusion rings (filled PTFE), PTFE packing ring, stainless packing box
  ring; drawing A6163); ENVIRO-SEAL Duplex Packing (spring pack assembly,
  carbon bushings, PTFE-carbon/PTFE packing set, lantern ring, composite
  packing ring, PTFE packing washers; drawing 24B9310/A6844).
concept-tags: [packing arrangement, sliding-stem valve, single PTFE V-ring, double PTFE V-ring, ENVIRO-SEAL PTFE, ENVIRO-SEAL Duplex, lantern ring, anti-extrusion ring, spring pack assembly, live-loaded packing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-15 (drawings A6161, A6162, A6163, 24B9310/A6844,
      printed p. 1-17) — "Typical Packing Examples for Sliding-Stem Valves."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig15-sliding-stem-packing-examples-ptfe-and-duplex.png
    locator: "already extracted — cropped directly from the source PDF (p. 23 / printed 1-17) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  A 4-panel composite figure, each panel fully labelled with its own printed
  field callouts — a nomenclature source (Style Guide §6.3 applies if ever
  placed on a slide: figures with their own printed field labels are not
  re-marked with numbered circles). Pairs with `ogas-cmp-sliding-stem-packing-examples-graphite`
  (Figure 1-16) as the two "Typical Packing Examples for Sliding-Stem
  Valves" figures — together they cover all rows of Table 1-5.
```

```yaml
id: ogas-cmp-sliding-stem-packing-examples-graphite
teaches: >
  Four labelled packing-arrangement cutaways for sliding-stem valves,
  continuing Figure 1-15: ENVIRO-SEAL Graphite ULF (packing stud/nut/flange,
  packing ring, packing box ring, spring pack assembly, carbon bushing, PTFE
  packing washer, lubricant; drawing E0818); HIGH-SEAL Graphite (17-7 PH
  stainless spring, load scale, packing follower, indicator disk, carbon
  guide bushings, composite + flexible-graphite packing rings, stainless
  packing box ring; drawing A6167); HIGH-SEAL Graphite with PTFE (same
  family plus PTFE packing washers; drawing A6166); Braided Graphite
  Filament (die-formed ribbon flexible graphite, braided filament graphite;
  drawing A6168).
concept-tags: [packing arrangement, sliding-stem valve, ENVIRO-SEAL Graphite ULF, HIGH-SEAL Graphite, HIGH-SEAL Graphite with PTFE, Braided Graphite Filament, load scale, indicator disk, live-loaded packing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-16 (drawings E0818, A6167, A6166, A6168, printed
      p. 1-18) — "Typical Packing Examples for Sliding-Stem Valves."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig16-sliding-stem-packing-examples-graphite.png
    locator: "already extracted — cropped directly from the source PDF (p. 24 / printed 1-18) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  Same caption text as Figure 1-15 (both titled "Typical Packing Examples
  for Sliding-Stem Valves") — the source distinguishes them only by figure
  number, not a subtitle; disambiguate in any caption or source line by
  figure number. Each panel carries its own printed field callouts — §6.3
  applies (no re-marking with numbered circles) if ever placed on a slide.
```

```yaml
id: ogas-cmp-enviroseal-rotary-packing-arrangements
teaches: >
  Two labelled ENVIRO-SEAL packing-arrangement cutaways for ROTARY valves
  (contrast to Figures 1-15/1-16's sliding-stem arrangements): Single PTFE
  Packing (packing box stud, actuator mounting yoke, valve shaft, yoke
  bearing, packing flange, packing follower, springs, valve body,
  anti-extrusion rings, packing box ring, PTFE packing V-rings; drawing
  W5806-1/IL) and Graphite Packing (valve shaft, packing flange, packing box
  ring, springs, packing follower, graphite packing set; drawing
  W6125-1/IL).
concept-tags: [packing arrangement, rotary valve, ENVIRO-SEAL, single PTFE packing, graphite packing, valve shaft, yoke bearing, packing box stud]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: >
      Chapter 1, Figure 1-17 (drawings W5806-1/IL, W6125-1/IL, printed p.
      1-19) — "Typical ENVIRO-SEAL Packing Arrangements for Rotary Valves."
  - doc: 20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/ch1-fig17-enviroseal-rotary-valve-packing-arrangements.png
    locator: "already extracted — cropped directly from the source PDF (p. 25 / printed 1-19) at 600 dpi, figure + caption"
    bucket: done
delivery: existing figure (crop) — used directly per Style Guide §5.8 default
used-by: []
notes: >
  The last figure in Chapter 1 — Chapter 2 "Actuator Selection" begins
  immediately after on the same source PDF page. Both panels are photo-
  realistic shaded cutaways (not line-art, unlike Figures 1-15/1-16) with
  their own printed field callouts — §6.3 applies if ever placed on a
  slide. Checked at 2x zoom against the source: the right-hand panel's
  "PACKING BOX RING" callout is genuinely printed truncated to "PACKINC"
  in the source document itself (the final G runs off the printed page
  edge) — verified this is a source artifact, not a cropping error on our
  side; carry the full word "PACKING BOX RING" in any list entry that uses
  this callout rather than reproducing the source's own clipping.
```

---

## Open items

- **Third batch (Figures 1-13 through 1-17)** — the five packing-selection
  and packing-arrangement figures, printed pp. 1-16–1-19 (PDF pages 22–25).
  All five extracted and catalogued: `ogas-cmp-packing-500ppm-guidelines-chart`,
  `ogas-cmp-packing-nonenvironmental-guidelines-chart`,
  `ogas-cmp-sliding-stem-packing-examples-ptfe-and-duplex`,
  `ogas-cmp-sliding-stem-packing-examples-graphite`,
  `ogas-cmp-enviroseal-rotary-packing-arrangements`. No unresolved figures
  in this batch.
- **Correction (this batch):** the second batch's note below that "Chapter 1
  ends at printed p. 1-10" was wrong — verified against the real document.
  Chapter 1 actually continues through a "Packing Materials and Systems"
  section (printed pp. 1-12–1-19, Tables 1-3/1-4/1-5 plus Figures 1-13–1-17)
  and ends at printed p. 1-19 (PDF page 25), where Chapter 2 "Actuator
  Selection" begins on the same PDF page. Table 1-2 (printed p. 1-10) was
  never the chapter's end, only the end of the general-selection narrative
  section that precedes packing. This batch's figures close out Chapter 1
  for real.
- **This batch (Figures 1-7 through 1-12)** closes the earlier open item —
  Figure 1-7 was previously flagged as "outside batch scope" and is now
  catalogued as `ogas-cmp-vee-ball-segmented-cutaway`.
- All seventeen records in this file (six + six + five) are `used-by: []` —
  this is a proactive, use-driven-ahead catalog per `Source Library.md`; no
  course currently references them.
- No primitive-registry or `Curriculum —` writes were made from this pass —
  out of scope for a standing Component-Index-only cataloging batch.
- Figure 1-10 (`ogas-cmp-flow-characteristic-curves`) is the first graph
  (as opposed to cutaway/line-art) record in this file — flagged in its own
  `notes` that a future placement needs a Style Guide §5 redraw/key
  decision at the point of use, not assumed here. Figures 1-13/1-14
  (`ogas-cmp-packing-*-guidelines-chart`) carry the same flag.
- Tables 1-2, 1-3, 1-4, and 1-5 (printed pp. 1-10–1-13) are reference
  tables, not figures, and are not catalogued as components here — same
  practice as the second batch applied to Table 1-2.
- Chapter 1 ends at printed p. 1-19 (PDF page 25, Figure 1-17) — this batch
  reached the real end of the chapter's figures; Chapter 2 "Actuator
  Selection" begins immediately after, out of scope for this pass.
