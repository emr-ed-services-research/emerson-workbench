---
title: Component Index — Control Valve Handbook ch5
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Control Valve Handbook, Sixth Edition (Emerson / Fisher Controls International LLC, D101881X012, Aug 2023)
chapter: ch5 — Control Valve Sizing
updated: 2026-09-17
---

# Teaching-Component Index — Control Valve Handbook, Chapter 5

**Chapter 5 — "Control Valve Sizing."** Standing full-chapter cataloguing pass,
part of the CVH ch5–15 indexing directive (Franz, 2026-09-17), matching the
rigor of ch1–4: every real page in the chapter's confirmed range was read,
every real figure identified and visually verified against the rendered page
(not paraphrased from caption or text-extraction alone).

**Naming correction:** `20 - Source Library/Emerson Control Valve Handbook.md`'s
own scope-by-chapter table previously listed this chapter's title as "Control
Valve Selection" — the real book's own Table of Contents and chapter-divider
page both read "Chapter 5: Control Valve Sizing." Corrected there as part of
this pass; "Control Valve Sizing" is the real chapter title used throughout
this file.

Chapter boundaries verified directly against the PDF, not assumed from the
printed table of contents: PDF page 97 carries Chapter 4's last content
("Figure 4.27... See Additional Resources » 97"); PDF page 98 is the
"Chapter 5 / Control Valve Sizing" divider; PDF page 149 is the chapter's
last content page ("See Additional Resources » 149"); PDF page 150 is the
"Chapter 6 / Special and Severe Service Control Valves" divider. **PDF page
number equals printed page number exactly for this range (zero offset)** —
consistent with every other chapter checked so far in this document. Chapter
5 = pp. 98–149; Chapter 6 starts at p. 150.

All figures are from `20 - Source Library/Control Valve Handbook/Control
Valve Handbook - Sixth Edition.pdf`. This pass catalogs existence and
location only — it does not crop or extract images, so each record's
`source` carries a single locator (figure number, page, verified caption),
not a second "already extracted" entry. Every record's `used-by` is `[]` —
none are placed on a slide yet.

Record shape matches ch1–4: `id` · `teaches` · `concept-tags` · `status` ·
`source` (`doc` + `locator`) · `delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Control Valve Handbook, Sixth Edition** | D101881X012 · Aug 2023 | `current` | First-party Emerson document; sole source for this chapter. No archive or legacy material was consulted or found relevant to Chapter 5's content — all 19 components (18 numbered figures + 1 unnumbered diagram, see below) are catalogued directly against this edition. |

## Components

### Chapter opening — Valve Selection Process overview (printed p. 100, unnumbered)

```yaml
id: cvh-cmp-valve-selection-process-flowchart
teaches: >
  The chapter's own top-level valve-selection procedure as a 6-step
  flowchart: (1) determine service conditions (P1, ΔP, Q, T1, fluid
  properties, allowable noise, ANSI pressure class), (2) calculate
  preliminary Cv and check noise/cavitation levels, (3) select trim type
  (standard, noise-reduction, or cavitation-reduction) based on step 2's
  result, (4) select valve body and trim type/size for the required Cv,
  noting travel, trim group, and shutoff options, (5) select trim
  materials compatible with the application and available in the chosen
  trim group, (6) consider remaining options (shutoff, stem packing,
  etc.). Frames every section later in the chapter (flow characteristics,
  actuator sizing, cavitation/flashing, noise, packing selection) as one
  step of this same sequential decision, not an independent topic list.
concept-tags: [valve selection process, sizing procedure, decision flowchart, Cv, trim type, cavitation, noise]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Unnumbered diagram, p. 100 — 'Valve Selection Process,' 6-step flowchart (1. Determine Service Conditions, 2. Calculate Preliminary Cv Required, 3. Select Trim Type, 4. Select Valve Body and Trim Type, 5. Select Trim Materials, 6. Consider Options)"
delivery: analytical diagram — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  Real, genuine teaching content with no printed figure number anywhere on
  the page — sits at the very top of the chapter, before the §5.1 heading
  even begins. Confirmed by direct visual inspection of the rendered page,
  not text extraction (the page also carries the chapter's very first
  numbered dimensional table, which stays correctly excluded as a table).
  **Standing convention decided 2026-09-18 (Franz):** the figures-only rule
  was meant to exclude tables, not to exclude real, unnumbered diagrams
  with genuine teaching value — this record is the first application of
  that decision and the `locator: "Unnumbered diagram, p. N — ..."` phrasing
  is the pattern going forward for any future unnumbered-but-real diagram,
  not a one-off exception for this page alone.
```

### Section 5.4 — Control Valve Flow Characteristics (printed p. 108)

```yaml
id: cvh-cmp-flow-characteristic-curves-repeat
teaches: >
  The three standard inherent flow-characteristic curves (quick-opening,
  linear, equal-percentage) plotted as Rated Flow Coefficient (%) vs. Rated
  Travel (%) — the same curve family Chapter 1 already introduces, reprinted
  here to support §5.4.1's discussion of matching a characteristic to the
  application.
concept-tags: [flow characteristic, quick-opening, linear, equal-percentage, rated flow coefficient, rated travel]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.1 (printed caption reads 'Feedback Control Loop'), p. 108 — Rated Flow Coefficient (%) vs. Rated Travel (%), three curves labelled Quick-Opening, Linear, Equal-Percentage"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: >
  CONFIRMED SOURCE CAPTIONING ERROR, not corrected here: the printed caption
  under this figure reads "Figure 5.1 Feedback Control Loop," but the actual
  plotted content is the flow-characteristic curve set, and the adjacent body
  text explicitly reads "Figure 5.1 illustrates typical flow characteristic
  curves..." — caption and image/text plainly disagree. Visually confirmed by
  rendering p. 108 directly, not assumed from text extraction. Left as-is per
  the standing rule (ch2's Figure 2.8 precedent): catalogue against the real
  content, flag the mismatch, don't silently retitle the source's own caption.
  Very likely the same source chart as `cvh-cmp-inherent-characteristics-graph`
  (ch1, Figure 1.19) — identical axis labels and three-curve set — kept as a
  separate id since it is chapter 5's own distinct figure instance (per the
  same source-anchored-per-chapter convention ch1's own file already
  documents for its cross-chapter duplicates), not merged.
```

### Section 5.11 — Actuator Sizing: Globe Valve Forces (printed pp. 123–125)

```yaml
id: cvh-cmp-unbalance-area-table
teaches: >
  Typical unbalance areas (in²) for single-seated unbalanced valves vs.
  balanced valves, tabulated by port diameter — the data table §5.11.1.1
  points to for calculating the unbalance force (A) term in actuator sizing.
concept-tags: [actuator sizing, unbalance force, unbalance area, port diameter, single-seated valve, balanced valve]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.2 'Typical Unbalance Areas of Control Valves,' p. 123"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Table-formatted but printed with a Figure number and caption, not a Table
  number — catalogued per the same rule ch2/ch3's table-shaped figures
  followed. Topical overlap, not a figure duplicate: `Component Index — 14101
  ch3.md`'s `ch3-cmp-valve-forces-cutaway` cites this same section
  (§5.11.1.1–5.11.1.4, the A+B+C+D force breakdown) but against a different
  image (an archive globe-valve cutaway, not this data table) — no id
  collision, flagged here for awareness only.
```

```yaml
id: cvh-cmp-seat-load-graph
teaches: >
  Minimum required seat load (lbf per lineal inch of port circumference) vs.
  shutoff pressure drop, plotted per ANSI/FCI leak class (II through V) for
  metal-seated valves — the graph behind §5.11.1.2's seat-load (B) guidance.
concept-tags: [actuator sizing, seat load, shutoff pressure drop, metal-seated valve, leak class, seat load B]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.3 'Minimum Required Seat Load for Improved Seat Life on Metal-Seated Valves Class II-V,' p. 124"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Five labelled diagonal lines (Class II through Class V, with two Class V sub-cases for metal-seat variants), axes Required Seat Load (LBF per Lineal Inch) vs. Shutoff Pressure Drop (PSI).
```

```yaml
id: cvh-cmp-recommended-seat-load-table
teaches: >
  Recommended seat load by leak class (I through VI), cross-referencing
  Figure 5.2's unbalance-area table and Figure 5.3's seat-load graph — the
  practical lookup table an actuator-sizing calculation actually uses.
concept-tags: [actuator sizing, seat load, leak class, recommended seat load, class I-VI]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.4 'Recommended Seat Load,' p. 124"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Table-formatted, printed with a Figure number — catalogued per the same rule as Figure 5.2. Its Class V row explicitly instructs "determine from Figure 5.2," an internal cross-reference within the same source pass.
```

```yaml
id: cvh-cmp-packing-friction-values-table
teaches: >
  Typical packing friction values (lbf) by stem size, pressure class, and
  packing type (single/double PTFE, graphite ribbon/filament) — the data
  table behind §5.11.1.3's packing-friction (C) guidance.
concept-tags: [actuator sizing, packing friction, stem size, PTFE packing, graphite packing]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.5 'Typical Packing Friction Values,' p. 125"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Large table-formatted figure spanning stem sizes 5/16" through 2", printed with a Figure number, catalogued per the same table-as-figure rule.
```

### Section 5.14 — Cavitation and Flashing (printed pp. 128–130)

```yaml
id: cvh-cmp-vena-contracta-diagram
teaches: >
  The vena contracta illustrated in flow-path cross-section: flow narrowing
  through a restriction (P1) to its minimum cross-sectional area just
  downstream (vena contracta) before recovering toward P2 — the mechanism
  §5.14.1 builds the flashing/cavitation explanation from.
concept-tags: [vena contracta, flashing, cavitation, flow restriction, pressure recovery]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.6 'Vena Contracta Illustration,' p. 128"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Simple labelled flow-path diagram (Flow, P1, P2, Restriction, Vena Contracta) — an analytical/schematic diagram, not a photo.
```

```yaml
id: cvh-cmp-pressure-profile-high-low-recovery
teaches: >
  Pressure profile through a valve comparing a high-recovery design (e.g. a
  streamlined ball valve) against a lower-recovery design — same P1/vena
  contracta geometry as Figure 5.6, with two P2 recovery curves overlaid to
  show why low-recovery valves are less prone to cavitation.
concept-tags: [pressure recovery, high-recovery valve, low-recovery valve, cavitation, ball valve]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.7 'Comparison of Pressure Profiles for High- and Low-Recovery Valves,' p. 128"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Direct construction companion to Figure 5.6 — same flow-path drawing, with the pressure-profile curves added below it.
```

```yaml
id: cvh-cmp-flashing-damage-photo
teaches: >
  Real flashing damage on a valve plug/seat ring: a smooth, polished-metal
  erosion pattern — the visual signature §5.14.1 uses to distinguish flashing
  damage from cavitation's rougher, cinder-like erosion (Figure 5.9).
concept-tags: [flashing, erosion damage, valve plug, seat ring, physical damage identification]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.8 'Typical Appearance of Flashing Damage,' p. 129"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo of an eroded valve plug/seat assembly, unlabelled — direct visual contrast pair with `cvh-cmp-cavitation-damage-photo` (Figure 5.9).
```

```yaml
id: cvh-cmp-cavitation-damage-photo
teaches: >
  Real cavitation damage on valve trim: a rough, cinder-like erosion surface —
  the visual signature §5.14.3 uses to distinguish cavitation damage from
  flashing's smoother, polished erosion (Figure 5.8).
concept-tags: [cavitation, erosion damage, valve trim, physical damage identification]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.9 'Typical Appearance of Cavitation Damage,' p. 130"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo of eroded trim, unlabelled — direct visual contrast pair with `cvh-cmp-flashing-damage-photo` (Figure 5.8).
```

### Section 5.15–5.16 — Noise Prediction and Control (printed pp. 132–135)

```yaml
id: cvh-cmp-noise-reduction-trim-photo
teaches: >
  Two cage-style anti-noise trim designs (a multi-slot cage and a two-stage
  cage) shown as physical cutaway/photo components — the source-treatment
  hardware §5.16's noise-control discussion opens with.
concept-tags: [noise control, anti-noise trim, cage-style trim, aerodynamic noise, source treatment]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.10 'Valve Trim Design for Reducing Aerodynamic Noise,' p. 132 — two-panel photo (upper: many-slot cage; lower: two-stage cage)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Two-panel composite photo; each panel's role (many-slot vs. two-stage cage) is explained in the surrounding body text, not printed as an in-figure label.
```

```yaml
id: cvh-cmp-valve-inline-diffuser-photo
teaches: >
  A control valve fitted with an inline diffuser — a downstream noise-control
  accessory that reduces the pressure ratio across the valve itself.
concept-tags: [noise control, inline diffuser, downstream accessory, pressure ratio reduction]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.11 'Valve and Inline Diffuser Combination,' p. 133"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo of an assembled green globe valve with actuator and inline diffuser piping, unlabelled.
```

```yaml
id: cvh-cmp-valve-vent-diffuser-diagram
teaches: >
  A control valve and vent diffuser combination in cutaway/schematic form —
  the noise-control accessory used when the valve discharges to atmosphere
  rather than into downstream piping.
concept-tags: [noise control, vent diffuser, atmospheric discharge, downstream accessory]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.12 'Valve and Vent Diffuser Combination,' p. 133"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Schematic cutaway showing internal flow arrows through the vent diffuser body, paired on the same page as Figures 5.11 and 5.13.
```

```yaml
id: cvh-cmp-cavitation-elimination-valve-design
teaches: >
  A special valve design (multi-stage internal trim) engineered specifically
  to eliminate cavitation by staging the pressure drop internally, shown in
  cutaway.
concept-tags: [cavitation, special valve design, multi-stage trim, pressure staging]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.13 'Special Valve Design to Eliminate Cavitation,' p. 133"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway of a cage-style trim body with an internal stem/cage assembly visible; pairs with Figures 5.11/5.12 as the third accessory/design option on this page.
```

```yaml
id: cvh-cmp-inline-silencer-photo
teaches: >
  A typical inline silencer: an absorption-type acoustic accessory installed
  in the downstream piping to attenuate noise the valve itself has already
  generated.
concept-tags: [noise control, inline silencer, absorption-type, path treatment]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.14 'Typical Inline Silencer,' p. 135"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Production photo of a cylindrical inline silencer with visible internal perforated liner at the cutaway end.
```

```yaml
id: cvh-cmp-globe-valve-noise-abatement-cage
teaches: >
  A globe-style valve with a noise-abatement cage installed for aerodynamic
  flow, shown in cutaway with the cage's internal flow path visible.
concept-tags: [noise control, noise abatement cage, aerodynamic noise, globe valve, cage-style trim]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.15 'Globe-Style Valve with Noise Abatement Cage for Aerodynamic Flow,' p. 135"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway rendering, blue-highlighted internal cage/trim path; text explicitly references "Figures 5.15 and 5.16" together as a pair.
```

```yaml
id: cvh-cmp-ball-valve-noise-attenuator
teaches: >
  A ball-style valve fitted with an attenuator to reduce hydrodynamic noise,
  shown in cutaway with the ball/attenuator assembly visible.
concept-tags: [noise control, hydrodynamic noise, attenuator, ball-style valve]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.16 'Ball-Style Valve with Attenuator to Reduce Hydrodynamic Noise,' p. 135"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Cutaway rendering, blue-highlighted ball/attenuator assembly; direct companion to Figure 5.15 (aerodynamic vs. hydrodynamic noise treatment).
```

### Section 5.18 — Packing Selection (printed p. 136)

```yaml
id: cvh-cmp-packing-guidelines-chart-100ppm
teaches: >
  Packing-system application guidelines for 100 PPM service, plotted as
  pressure vs. packing temperature envelopes for each packing system (PTFE
  V-Ring, ENVIRO-SEAL variants, HIGH-SEAL, KALREZ/VESPEL) — the selection
  chart §5.18 points to for environmentally-regulated service.
concept-tags: [packing selection, 100 PPM service, PTFE V-ring, ENVIRO-SEAL, HIGH-SEAL, pressure-temperature envelope]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.17 'Application Guidelines Chart for 100 PPM Service,' p. 136"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Dense multi-envelope chart with dual-unit axes (°C/°F, psi/bar); each packing system's operating envelope is a labelled step-line, not a single curve.
```

```yaml
id: cvh-cmp-packing-guidelines-chart-non-environmental
teaches: >
  Packing-system application guidelines for non-environmental (standard)
  service, plotted the same way as Figure 5.17 but with wider pressure/
  temperature envelopes reflecting the less stringent leakage requirement.
concept-tags: [packing selection, non-environmental service, PTFE V-ring, ENVIRO-SEAL, HIGH-SEAL graphite]
status: current
source:
  - doc: Control Valve Handbook, Sixth Edition
    locator: "Figure 5.18 'Application Guidelines Chart for Non-Environmental Service,' p. 136"
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Direct companion to Figure 5.17 — same chart shape and packing-system set, wider envelopes throughout (e.g. temperature axis extends to 1200°F vs. Figure 5.17's ~600°F).
```

## Open Items

- **Chapter boundary confirmed directly, not assumed from the printed TOC.**
  PDF page 97 is Chapter 4's last content page; PDF page 98 is the "Chapter 5
  / Control Valve Sizing" divider; PDF page 149 is the chapter's last content
  page (footer "See Additional Resources » 149"); PDF page 150 is the
  Chapter 6 divider. Zero page offset throughout.
- **Naming correction applied:** `Emerson Control Valve Handbook.md`'s
  scope-by-chapter table previously said "Control Valve Selection" for this
  chapter — corrected to "Control Valve Sizing," the real printed title.
- **Full chapter coverage.** All 18 real numbered figures (Figures 5.1–5.18)
  were located via a full-text scan across every page in the 98–149 range,
  and every one was visually verified against its rendered source page —
  none skipped, none flagged as unconfirmed. No gaps in the numeric
  sequence. Plus 1 unnumbered diagram (below) — 19 components total.
- **Extensive uncaptioned/unnumbered tabular content, correctly excluded.**
  This chapter is dominated by dimensional and engineering-data tables
  (face-to-face dimensions §5.1.1–5.1.9, seat-leakage-class definitions
  §5.2–5.3, sizing-coefficient tables §5.10, torque-factor tables §5.13,
  packing selection-guideline tables §5.18.1–5.18.2, valve-body-material and
  pressure-temperature-rating tables §5.19–5.20) — all confirmed as plain
  tables carrying no "Figure" or "Table" caption number at all, correctly
  excluded per the standing figures-only rule (spot-checked directly by
  rendering representative pages across this range: pp. 100, 105, 107, 138,
  145).
- **Uncaptioned diagram — resolved, now catalogued (2026-09-18, Franz's
  decision).** p. 100's "Valve Selection Process" 6-step flowchart carries
  real teaching content but no figure number anywhere on the page. Flagged
  in this pass's original report rather than decided solo; the decision
  landed on cataloguing it, with a synthetic locator (`"Unnumbered diagram,
  p. N — ..."`) standing in for a figure number — see
  `cvh-cmp-valve-selection-process-flowchart` above, now the first
  application of that convention for any future chapter with the same
  situation.
- **Confirmed source captioning error, not corrected:** Figure 5.1's printed
  caption reads "Feedback Control Loop," but the plotted content and the
  adjacent body text both confirm it is the flow-characteristic curve set
  (quick-opening/linear/equal-percentage) — see that record's own notes.
  Very likely the same source chart as Chapter 1's Figure 1.19
  (`cvh-cmp-inherent-characteristics-graph`), reprinted here.
- **No duplicate printed figure numbers found** in this chapter (unlike ch3's
  Figure 3.24 or ch4's Figures 4.11/4.12 precedents).
- **Cross-reference check against the 14101 and bench-set-657 indexes:**
  checked directly, not assumed. Two genuine section-level (not figure-level)
  overlaps found: `Component Index — 14101 ch1-ch2.md`'s
  `ch1-cmp-fci-leakage-classes` cites CVH §5.2–§5.3 (the seat-leakage-class
  definitions) — that section's own tables carry no figure number, so there
  is no figure to cross-reference or duplicate. `Component Index — 14101
  ch3.md`'s `ch3-cmp-valve-forces-cutaway` cites CVH §5.11.1.1–5.11.1.4 (the
  A+B+C+D actuator-force breakdown) but against a different image (an
  archive globe-valve cutaway) than this file's `cvh-cmp-unbalance-area-table`
  (Figure 5.2) — noted in that record's own notes for awareness; no id
  collision, no duplicate. `Component Index — bench-set-657.md` was also
  checked; its only overlap is a one-line mention that bench-set values
  assume no packing friction, referencing the general packing-friction
  concept rather than any specific CVH Chapter 5 figure — nothing to
  cross-reference.
- **Table exclusion confirmed**: every numbered "Figure N.M" in this range
  was catalogued (including four table-formatted ones — 5.2, 5.4, 5.5 — per
  the same table-as-figure rule ch2/ch3 established); every unnumbered table
  was excluded; no source content in this chapter carries a "Table N.M"
  caption at all.
- **No archive or legacy material** was found or consulted for this
  chapter — the 6th-edition Control Valve Handbook is the sole and
  sufficient source for all 19 components.
