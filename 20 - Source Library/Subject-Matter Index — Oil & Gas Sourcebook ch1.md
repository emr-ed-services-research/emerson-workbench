---
title: Subject-Matter Index — Oil & Gas Sourcebook ch1
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
chapter: ch1 — Control Valve Selection
updated: 2026-09-08
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Oil & Gas, Chapter 1

**Chapter 1 — "Control Valve Selection."** Standing library-cataloging pass, NOT
tied to any course — built ahead of any course actually needing these figures,
per `Source Library.md`'s "two ways a subject-matter index gets triggered." Two
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

Record shape matches `Subject-Matter Index — 14101 ch3.md`: `id` · `teaches` ·
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
  **Cross-reference (2026-09-14):** identical drawing number (W0992-4) to
  `pss-cmp-design-et-globe-cutaway` in `Subject-Matter Index — Power & Severe
  Service Sourcebook ch1.md` — the same source cutaway reused across both
  Sourcebooks.
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
  **Cross-reference (2026-09-14):** identical drawing number (W3379) to
  `pss-cmp-ehd-high-pressure-cutaway` in `Subject-Matter Index — Power & Severe
  Service Sourcebook ch1.md` — the same source cutaway reused across both
  Sourcebooks.
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
  **Cross-reference (2026-09-14):** identical drawing number (W7169) to
  `pss-cmp-v250-ball-valve-cutaway` in `Subject-Matter Index — Power & Severe
  Service Sourcebook ch1.md` — the same source cutaway reused across both
  Sourcebooks.
```

```yaml
id: ogas-topic-control-valve-selection-process
kind: topic
concept-tags: [control valve definition, valve selection process, general categories, sliding-stem, rotary, subcategories]
status: current
teaches: >
  What "control valve" means in this discussion — any power-operated valve
  used for throttling or on-off control, explicitly excluding motorized gate
  valves, louvers, pinch valves, and self-operated regulators. Frames why
  selection has become considerably more complex than it used to be (when
  sliding-stem was the only real option): today's assortment of sliding-stem
  and rotary styles, some marketed as "universal," makes even experienced
  users uncertain whether they're getting the best value. The two major
  valve types, sliding-stem and rotary, are further divided into nine
  subcategories by relative performance and cost (Table 1-2) — despite
  internal variation (e.g. cage- vs. stem-guiding), valves within one
  subcategory are treated as much alike for early-stage selection. Selection
  itself is a two-step narrowing: pick the subcategory, then compare
  specific valves within it.
source:
  - doc: Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 1, opening narrative + 'General Categories of Control Valves,' printed pp. 1-1–1-2 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-modern-control-valve-assembly]
relatedTopics: [ogas-topic-sliding-stem-valve-family, ogas-topic-rotary-valve-family, cvh-topic-flow-characteristics]
used-by: []
notes: >
  Read directly from the real PDF prose (pages 7-8 of the source PDF,
  printed pp. 1-1–1-2), not inferred from Figure 1-1's own caption. The
  "control valve" definition (excludes gate valves/louvers/pinch valves/
  self-operated regulators) does not appear anywhere in this chapter's
  existing figure entries — it was invisible to the figures-only pass.
```

```yaml
id: ogas-topic-sliding-stem-valve-family
kind: topic
concept-tags: [sliding-stem valve, globe valve, barstock valve, economy valve, versatility, severe service]
status: current
teaches: >
  Sliding-stem valves as the most versatile control-valve family: globe,
  angle, and Y-pattern designs spanning NPS 1/2-36, with more material/
  end-connection/characteristic choices than any other family, cage-,
  post-, or stem-guided trim, and body ratings to ASME CL4500 or API 10,000.
  Three real subcategories with distinct rationale: regular sliding-stem
  (ruggedness for field conditions — piping stress, vibration, temperature
  swings; the only suitable choice for high pressure/temperature, excessive
  noise, or cavitation risk); barstock valves (small, economical, machined
  from bar stock rather than cast — chosen when material availability or
  corrosion resistance matters, or for low-flow applications); and economy
  bodies (the lowest-cost subcategory, for non-demanding low-pressure steam/
  air/water service to ASME CL300, with no severe-service noise/cavitation
  trim options).
source:
  - doc: Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 1, 'Sliding-Stem Valves,' printed pp. 1-2–1-3 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-et-globe-cutaway, ogas-cmp-large-et-drilled-cage-cutaway, ogas-cmp-ehd-high-pressure-cutaway, ogas-cmp-economy-body-sliding-stem]
relatedTopics: [ogas-topic-control-valve-selection-process, ogas-topic-rotary-valve-family]
used-by: []
notes: >
  Read directly from the real PDF prose (pages 8-9, printed pp. 1-2–1-3).
  This is genuine family-level positioning (why choose sliding-stem at all,
  and which subcategory) distinct from any individual figure's own
  teaches — the existing four figure entries above each describe one
  specific valve, not the family-level tradeoffs.
```

```yaml
id: ogas-topic-rotary-valve-family
kind: topic
concept-tags: [rotary valve, ball valve, eccentric plug valve, butterfly valve, through-bore, segmented ball, lined butterfly, high performance butterfly]
status: current
teaches: >
  The rotary-valve family's real subcategory tradeoffs, distinct from any
  single cutaway's own caption. Ball valves split into through-bore/full-ball
  (high pressure-drop throttling and on-off service to NPS 24, high capacity
  and low erosion susceptibility, but sluggish response in the first 20% of
  travel) and segmented-ball (reduced bore with a contoured notch edge for
  better throttling and higher rangeability, splined-shaft connections
  engineered to eliminate lost motion, generally higher control performance
  than full-ball). Eccentric plug valves combine sliding-stem and rotary
  traits — rotary actuation with a massive, rigid seat design, excellent
  throttling and erosion resistance. Butterfly valves split into lined
  (elastomer/TFE-lined disk, limited pressure drop and temperature range
  because shutoff depends on disk-liner interference, but the cheapest
  option for corrosive medium/large-size service) and high-performance
  (offset-disk eccentric mounting so the disk swings clear of its seal —
  minimizes wear/torque, allows tight metal-to-metal shutoff even where
  elastomer designs are too hot to use).
source:
  - doc: Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 1, 'Ball Valves,' 'Eccentric Plug Valves,' and the lined/high-performance butterfly narrative, printed pp. 1-4–1-6 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-v250-ball-valve-cutaway, ogas-cmp-vee-ball-segmented-cutaway, ogas-cmp-v500-eccentric-plug-cutaway, ogas-cmp-8560-high-perf-butterfly-cutaway]
relatedTopics: [ogas-topic-control-valve-selection-process, ogas-topic-sliding-stem-valve-family]
used-by: []
notes: >
  Read directly from the real PDF prose (pages 10-13, printed pp. 1-4–1-6).
  The through-bore-vs-segmented tradeoff and the lined-vs-high-performance
  butterfly tradeoff are both genuine comparative reasoning the individual
  figure captions don't carry — each figure entry describes only its own
  valve, not the choice between subcategories.
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
  **Cross-reference (2026-09-14):** identical drawing number (W4170-3/IL) to
  `pss-cmp-v500-eccentric-plug-cutaway` in `Subject-Matter Index — Power &
  Severe Service Sourcebook ch1.md` — the same source cutaway reused across
  both Sourcebooks.
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
  **Cross-reference (2026-09-14):** identical drawing number (W6235-2/IL) to
  `pss-cmp-8560-high-perf-butterfly-cutaway` in `Subject-Matter Index — Power &
  Severe Service Sourcebook ch1.md` — the same source cutaway reused across
  both Sourcebooks.
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
  **Cross-reference (2026-09-14):** identical drawing number (A7098) to
  `pss-cmp-bolted-flange-end-connections` in `Subject-Matter Index — Power &
  Severe Service Sourcebook ch1.md` — the same source cutaway reused across
  both Sourcebooks.
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
  **Cross-reference (2026-09-14):** identical drawing number (A7099) to
  `pss-cmp-welded-end-connections` in `Subject-Matter Index — Power & Severe
  Service Sourcebook ch1.md` — the same source cutaway reused across both
  Sourcebooks.
```

```yaml
id: ogas-topic-general-selection-criteria
kind: topic
concept-tags: [selection criteria, pressure rating, temperature, material selection, flow capacity, ASME class]
status: current
teaches: >
  The chapter's real selection-criteria checklist (Table 1-1): body
  pressure rating, high/low temperature limits, material compatibility,
  inherent flow characteristic/rangeability, maximum pressure drop, noise
  and cavitation, end connections, shutoff leakage, capacity vs. cost,
  nature of flowing media, dynamic performance. Real reasoning behind the
  physical criteria: pressure ratings follow ASME classes, whose allowable
  pressure decreases with temperature per material strength; temperature
  limits are set by soft-part materials (elastomers ~200-350°F, PTFE
  ~450°F) and by rotary-bearing friction effects at high temperature;
  material selection differs for body vs. trim since velocity in the valve
  is higher than in piping; flow capacity favors sliding-stem for small
  lines and rotary for large ones (rotary has much higher capacity per
  body size but little advantage at high pressure drop); noise/cavitation
  are explicitly deferred to Chapters 5 and 6 of this same sourcebook. The
  chapter's own closing rule of thumb: sliding-stem for lower flow ranges,
  ball valves for intermediate capacity, high-performance butterfly for
  the largest flows — no single valve family is cost-effective across the
  full range.
source:
  - doc: Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 1, 'General Selection Criteria' through 'Conclusion,' printed pp. 1-6, 1-8–1-9 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [ogas-topic-flow-characteristic-and-rangeability, ogas-topic-shutoff-leakage-classification, ogas-topic-control-valve-selection-process]
used-by: []
notes: >
  Read directly from the real PDF prose (pages 13-15, printed pp. 1-6,
  1-8–1-9). This is a genuine checklist framework with no figure of its
  own — Table 1-1 itself is a reference table (not catalogued as a
  component, consistent with this file's own table-exclusion practice) but
  the reasoning behind each row is real, transferable teaching content, not
  captured anywhere in the existing figure entries. The chapter's explicit
  deferral of noise/cavitation to Chapters 5/6 is a real cross-reference
  worth carrying forward if this sourcebook's other chapters get indexed.
```

```yaml
id: ogas-topic-flow-characteristic-and-rangeability
kind: topic
concept-tags: [flow characteristic, quick opening, linear, equal percentage, rangeability, positioner, valve gain]
status: current
teaches: >
  Expands Figure 1-10's own caption with the real mechanism behind each
  characteristic: quick-opening gives maximum flow change at low travel
  with a nearly linear relationship, then sharply diminishing change as the
  plug nears wide-open — used for on-off service. Linear gives flow
  directly proportional to travel, a constant slope so valve gain stays
  the same at all flows under constant pressure drop — used for liquid
  level control and constant-gain flow control. Equal-percentage gives
  equal travel increments producing equal *percentage* changes in existing
  flow (change proportional to the flow rate just before the change) — used
  for pressure control and where pressure drop varies widely, since the
  system itself absorbs most of the drop. Rangeability (ratio of maximum to
  minimum controllable flow) is a related but distinct property; rotary
  valves — especially partial ball valves — generally have greater
  rangeability than sliding-stem. A positioner can make one inherent
  characteristic behave like another via a nonlinear (characterized)
  positioner-actuator combination, limited by the positioner's own
  frequency response and phase lag relative to the process.
source:
  - doc: Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 1, 'Flow Characteristic,' 'Rangeability,' and 'Use of Positioners,' printed pp. 1-6–1-7 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-flow-characteristic-curves]
relatedTopics: [ogas-topic-general-selection-criteria, cvh-topic-flow-characteristics, cvh-topic-rangeability]
used-by: []
notes: >
  Read directly from the real PDF prose (pages 13-14, printed pp. 1-6–1-7).
  Figure 1-10's own `teaches` field only names the three curves and their
  applications at a summary level; the real mechanism reasoning (why each
  shape produces the stated control behavior) lives in this surrounding
  prose, not the caption. Cross-references CVH's own
  `cvh-topic-flow-characteristics` (ch5) and `cvh-topic-rangeability` (ch1)
  — same underlying concepts, this sourcebook's own worked framing.
```

```yaml
id: ogas-topic-shutoff-leakage-classification
kind: topic
concept-tags: [shutoff capability, leakage class, ANSI FCI 70-2, seat leakage]
status: current
teaches: >
  Shutoff capability is rated by ANSI/FCI 70-2 leakage Classes (Table 1-4).
  Real caveats the table alone doesn't carry: service leakage depends on
  pressure drop, temperature, sealing-surface condition, and actuator
  force, and can't be predicted accurately from the standard test
  conditions the Class rating is based on — the Class is a comparison
  basis among similar valves, not a service-leakage guarantee. Users
  commonly overestimate the shutoff class they actually need. Tight
  shutoff costs more (initial and maintenance) and matters most in
  high-pressure valves, where leakage can progress to trim destruction —
  seat material, seat preparation, and seat load all need real attention
  to achieve it.
source:
  - doc: Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 1, 'Shutoff Capability,' printed p. 1-8 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [ogas-topic-general-selection-criteria, cvh-topic-seat-leakage-classification]
used-by: []
notes: >
  Read directly from the real PDF prose (page 15, printed p. 1-8). Table
  1-4 (ANSI/FCI 70-2 and IEC 60534-4 leakage classes) is a reference table,
  not catalogued as its own component per this file's existing practice —
  but the real caveats around what the Class rating does and doesn't
  guarantee are genuine teaching content with no other home in this index.
  Cross-references CVH's own `cvh-topic-seat-leakage-classification`
  (added during the Handbook's own topic-indexing pass, §5.2-5.3) — same
  underlying ANSI/FCI 70-2 standard, worth confirming the two entries stay
  consistent if either is revised later.
```

---

### Chapter 1 — Packing selection and packing arrangements (printed pp. 1-16 – 1-19)

```yaml
id: ogas-topic-packing-selection-framework
kind: topic
concept-tags: [packing selection, EPA Clean Air Act, fugitive emissions, ENVIRO-SEAL, seal performance, service life, packing friction]
status: current
teaches: >
  Why packing selection became a critical, separate factor in valve
  selection beyond pressure/temperature/material/flow-characteristic
  fit: driven by the Clean Air Act Amendments and subsequent EPA
  regulations, plus customer demand for less maintenance and longer
  service life. Historically packing was chosen mainly by process
  temperature (PTFE below 450°F, graphite above), but now packing friction,
  hysteresis, seal quality, and cycle life all matter and are hard to
  quantify simply — hence the engineered, comparative approach behind
  Table 1-5. Defines ENVIRO-SEAL from Fisher's perspective (an advanced
  "compact," live-loaded spring-design system) versus the user's usual
  framing of it (an emission-reducing packing) — clarifying it's also
  genuinely useful in non-environmental service. Table 1-5 itself splits
  into two real service categories (500 ppmv environmental/fugitive-
  emission applications vs. non-environmental applications, each with its
  own pressure/temperature guidelines) plus three comparative indices per
  packing system: seal performance, service life, and friction.
source:
  - doc: Control Valve Sourcebook — Oil & Gas (© 2013 Fisher)
    locator: "Chapter 1, 'Packing Materials and Systems,' printed pp. 1-11–1-12 — prose, not figure-anchored"
relatedFigures: [ogas-cmp-packing-500ppm-guidelines-chart, ogas-cmp-packing-nonenvironmental-guidelines-chart]
relatedTopics: [cvh-topic-packing-selection-criteria, cvh-topic-packing-friction]
used-by: []
notes: >
  Read directly from the real PDF prose (pages 20-21, printed pp. 1-11–1-12),
  immediately preceding the two guideline-chart figures and Table 1-5 —
  none of this framing (the regulatory driver, the ENVIRO-SEAL definition,
  the two-category/three-index structure) appears in either chart figure's
  own caption. Cross-references CVH's own `cvh-topic-packing-selection-
  criteria` and `cvh-topic-packing-friction` (ch5) — same underlying
  concepts, this sourcebook's own worked framing with real product names.
```

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
  **Cross-reference (2026-09-15):** this figure's ENVIRO-SEAL Duplex panel
  (drawing 24B9310/A6844) is identical to `pp-cmp-enviroseal-duplex-
  packing-system` in `Subject-Matter Index — Pulp & Paper Sourcebook ch1.md`
  and to `ref-cmp-enviroseal-duplex-packing-system` in `Subject-Matter Index —
  Refining Sourcebook ch3.md` — the same source cutaway reused across all
  three Sourcebooks, standalone in the other two vs. one panel of this
  4-panel composite here.
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
  **Cross-reference (2026-09-15):** this figure's Graphite Packing panel
  (drawing W6125-1/IL) is identical to `pp-cmp-enviroseal-graphite-
  packing-rotary` in `Subject-Matter Index — Pulp & Paper Sourcebook ch1.md`,
  `ref-cmp-enviroseal-graphite-packing-rotary` in `Subject-Matter Index —
  Refining Sourcebook ch3.md`, and `Subject-Matter Index — Fisher ENVIRO-SEAL
  Rotary Packing System.md`'s own standalone record — the same source
  cutaway confirmed reused across all three Sourcebooks plus the
  standalone instruction manual.
```

---

## Open items

- **`kind: topic` pass, 2026-09-17.** Read the chapter's real body prose
  start to finish (PDF pages 7-25, printed pp. 1-1–1-19), not just the
  sections around existing figures — same method proven on the Control
  Valve Handbook's own full topic-indexing pass. Seven new topic entries
  added: `ogas-topic-control-valve-selection-process`,
  `ogas-topic-sliding-stem-valve-family`, `ogas-topic-rotary-valve-family`,
  `ogas-topic-general-selection-criteria`,
  `ogas-topic-flow-characteristic-and-rangeability`,
  `ogas-topic-shutoff-leakage-classification`,
  `ogas-topic-packing-selection-framework`. Chapter total is now 24
  components (17 figures + 7 topics). Tables 1-1 through 1-5 remain
  correctly uncatalogued as reference tables per this file's existing
  practice, but the real prose framing each table (why it exists, how to
  read it, what it doesn't guarantee) is genuine teaching content that had
  no home until this pass — that gap is what these seven entries close.
  Integrity verified: all ids in this file unique, every
  `relatedFigures`/`relatedTopics` reference (including cross-references
  into the Control Valve Handbook's own `cvh-topic-*` entries) resolves to
  a real id, checked programmatically against the whole vault's Component
  Index namespace.
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
- No asset-variant-registry or `Curriculum —` writes were made from this pass —
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
