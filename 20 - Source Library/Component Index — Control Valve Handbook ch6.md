---
title: Component Index — Control Valve Handbook ch6
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Control Valve Handbook, 6th ed. (D101881X012, © Aug 2023 Emerson/Fisher)
chapter: ch6 — Special and Severe Service Control Valves
updated: 2026-09-17
---

# Component Index — Control Valve Handbook, Chapter 6 (Special and Severe Service Control Valves)

Standing full-chapter cataloging pass, part of the "index CVH chapters 5–15"
directive (Franz, 2026-09-17) that extends the ch1–4 whole-chapter passes
built for Control Valve Basics. Every real page in the chapter's confirmed
range was rendered as an image and visually inspected — not read from
extracted text alone — matching the rigor ch1–4 established and the standard
ch4's own history shows is necessary (a text-extraction-only reading of that
chapter mis-corrected a real printed figure-number anomaly; only a rendered
page caught the mistake).

**Real chapter boundary, confirmed by rendering and reading the actual pages,
not assumed from the table of contents or from PDF-page-number arithmetic
alone.** The parent directive's TOC-derived candidate (PDF pages 150–161) was
checked directly and found to need one correction: PDF page 150 is the real
"Chapter 6 / Special and Severe Service Control Valves" divider page (a
full-page photo, no numbered figure — matching every other chapter's divider
convention). Real content runs PDF pages 151–160. **PDF page 161 is a blank
trailing page** carrying only the running header and the "See Additional
Resources »" footer — no content, no figures — confirmed by rendering it
directly. PDF page 162 (not 161) is the real "Chapter 7 / Steam Conditioning"
divider. PDF page number equals printed page number throughout (zero offset,
confirmed against the printed folios visible on pages 150, 155, and 161).

All figures are from `20 - Source Library/Control Valve Handbook/Control
Valve Handbook - Sixth Edition.pdf`. This pass catalogs existence and
location only — no crop/extraction has been performed, so each record
carries a single `source` citation (doc + locator). Every record's `used-by`
is `[]` — none are placed on a slide yet.

Record shape matches `Component Index — Control Valve Handbook ch3.md` and
`ch4.md` (post-2026-09-17 correction): `id` (descriptive slug) · `teaches` ·
`concept-tags` · `status` (precedence bucket) · `source` (`doc` + `locator`)
· `delivery` · `used-by` · `notes`.

**Cross-reference to 14101 / bench-set-657, checked directly:** none of this
chapter's 9 figures are cited by `Component Index — 14101 ch1-ch2.md`,
`Component Index — 14101 ch3.md`, or `Component Index — bench-set-657.md` —
grepped for section numbers (§6.1–§6.8) and figure numbers (6.1–6.9), no
matches. Every figure below is catalogued fresh.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | First-party Emerson document; sole source for this chapter. No archive or legacy material was consulted or found relevant to Chapter 6's content. |

## Components

### §6.1 High-Capacity Control Valves (printed pp. 151–152)

```yaml
id: cvh-cmp-butterfly-valve-fieldvue-assembly
teaches: >
  A complete high-performance butterfly control valve assembly with a
  FIELDVUE digital valve controller and pneumatic accessories mounted — the
  section's opening example of the special valve category. High-performance
  butterfly valves larger than NPS 48 fall into this category alongside
  globe-style valves larger than NPS 12 and ball valves over NPS 24; as valve
  size increases arithmetically, static pressure loads at shutoff increase
  geometrically.
concept-tags: [special valve, high-performance butterfly, FIELDVUE, high capacity, large-flow]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.1 High-Capacity Control Valves, Figure 6.1 (printed p. 151) — 'High-Performance Butterfly Valve.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  Distinguish from `cvh-cmp-high-performance-butterfly-valve` (ch3, Figure
  3.11) — that record catalogs a bare butterfly valve body; this one shows a
  fully assembled valve with actuator and FIELDVUE positioner, in the
  high-capacity/special-service context rather than the general body-styles
  survey.
```

```yaml
id: cvh-cmp-large-flow-valve-body-noise-attenuation
teaches: >
  A large cage-style valve body designed for noise attenuation — long valve
  plug travel, a great number of small flow openings through the cage wall,
  and an expanded outlet line connection minimize noise output and reduce
  fluid velocity in large-flow installations where sound pressure increases
  in direct proportion to flow magnitude.
concept-tags: [special valve, large-flow, noise attenuation, cage-style, expanded outlet]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.1 High-Capacity Control Valves, Figure 6.2 (printed p. 152) — 'Large-Flow Valve Body for Noise Attenuation.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Printed alongside `cvh-cmp-black-forged-body-high-capacity` (Figure 6.3) on the same page.
```

```yaml
id: cvh-cmp-black-forged-body-high-capacity
teaches: >
  A black forged body used to meet intermediate pressure ratings and high
  capacity in globe or angle valve styles, designed to ASME B16.34 with
  integral flanges — an alternative to a cast body for this service range.
concept-tags: [special valve, forged body, high capacity, ASME B16.34, integral flanges]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.1 High-Capacity Control Valves, Figure 6.3 (printed p. 152) — 'Black Forged Body for High Capacity.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Printed alongside `cvh-cmp-large-flow-valve-body-noise-attenuation` (Figure 6.2) on the same page.
```

```yaml
id: cvh-cmp-low-flow-cv-control-valve
teaches: >
  A special, compact control valve designed for very low flow rates — special
  trims (seat ring and valve plug machined to very close tolerances) can
  handle flow coefficients as low as 0.03 in standard bodies, or as low as
  0.000001 in specialty valves built compact and lightweight for laboratory
  and pilot-plant use with light-schedule piping.
concept-tags: [special valve, low-flow Cv, laboratory service, special trim, low deadband]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.2 Low-Flow Cv Control Valves, Figure 6.4 (printed p. 152) — 'Special Control Valve Designed for Very Low Flow Rates.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A FIELDVUE-equipped compact valve assembly, on the same page as Figures 6.2/6.3, opening §6.2.
```

### §6.3–6.4 High-Temperature and Cryogenic Service (printed p. 154)

```yaml
id: cvh-cmp-cryogenic-extension-bonnet
teaches: >
  A typical extension bonnet used in cryogenic service — extension bonnets
  allow the packing box area to be warmed by ambient temperature, preventing
  frost (from atmospheric moisture condensing and freezing below -101°C /
  -150°F) from forming on the stem and packing box and being drawn through
  the packing, which would tear the packing and cause loss of seal. Bonnet
  length depends on application temperature and insulation requirements.
concept-tags: [special valve, cryogenic service, extension bonnet, frost, packing box, stem seal]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.4 Cryogenic Service Valves, Figure 6.5 (printed p. 154) — 'Typical Extension Bonnet.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  A line-art cutaway, unlabelled with numbered callouts. Distinguish from
  ch3's extension bonnet figures (`cvh-cmp-fabricated-extension-bonnet`,
  Figure 3.21) — that record covers the general fabricated-vs-cast extension
  bonnet choice for high-temperature service in §3.3.1; this one is the same
  general device applied to the opposite temperature extreme (cryogenic),
  in a different chapter's context.
```

```yaml
id: cvh-cmp-cavitation-trim-cutaway
teaches: >
  Special trim to handle cavitation — a cutaway of multi-stage,
  anti-cavitation control valve trim used where the fluid may have entrained
  particulate that could plug passages or cause erosion damage to
  conventional anti-cavitation trims. This trim style (DST) is used in
  high-pressure-drop applications up to 4200 psid.
concept-tags: [special valve, cavitation, multi-stage trim, anti-cavitation, high pressure drop]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.5 Valves Subjected to Cavitation and Fluids with Particulate, Figure 6.6 (printed p. 154) — 'Trim to Handle Cavitation.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Printed opposite `cvh-cmp-cryogenic-extension-bonnet` (Figure 6.5) on the same page.
```

### §6.5–6.6 Particulate and Customized Characteristics (printed pp. 155–156)

```yaml
id: cvh-cmp-particulate-trim-eccentric-plug
teaches: >
  An eccentric plug rotary control valve trim used to control erosive,
  coking, and other hard-to-handle fluids with entrained particulate up to
  1.27 cm (½ inch) — a flanged design with streamline flow passages, rugged
  metal trim components, and a self-centering seat ring, providing throttling
  or on/off operation.
concept-tags: [special valve, particulate service, eccentric plug, rotary valve, self-centering seat]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.5 Valves Subjected to Cavitation and Fluids with Particulate, Figure 6.7 (printed p. 155) — 'Trim to Handle Particles.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: Cutaway rendering, opens the section's discussion of particulate-handling trim design.
```

```yaml
id: cvh-cmp-severe-service-inherent-characteristic-curve
teaches: >
  Rated flow coefficient (%) plotted against rated travel (%) for the three
  inherent flow characteristics — Quick-Opening, Linear, and
  Equal-Percentage — introduced in §6.6's discussion of customized
  characteristics, noise abatement, and cavitation mitigation trims: contoured
  plugs and redesigned cages can be manufactured to meet specific flow
  characteristics beyond the standard three, especially in noise-abatement
  and anti-cavitation trims needing high protection at low flow rates and
  lower protection at higher flow rates.
concept-tags: [inherent flow characteristic, quick-opening, linear, equal-percentage, custom trim, noise abatement]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.6 Customized Characteristics, Noise Abatement, and Cavitation Mitigation Trims, Figure 6.8 (printed p. 156) — 'Inherent Valve Characteristic.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  This is the THIRD appearance of the same underlying curve within this one
  document — a genuine content duplication within the Control Valve
  Handbook itself, not a cross-index concern (no 14101/bench-set-657
  citation involved). See `cvh-cmp-inherent-characteristics-graph` (ch1,
  Figure 1.19) and `cvh-cmp-inherent-flow-characteristic-curves` (ch3, Figure
  3.38) for the other two printings of this same chart. Catalogued as its
  own record per this pass's source-anchored, page-scoped convention (a
  reader landing on this exact page/figure should find a matching record)
  rather than silently reused, but flagged here for visibility rather than
  treated as three independent facts.
```

### §6.7 Nuclear Service (printed p. 157)

```yaml
id: cvh-cmp-pressurizer-spray-valve-nuclear
teaches: >
  A Pressurizer Spray Valve — a critical control valve application within a
  Pressurized Water Reactor (PWR) design, providing primary coolant to the
  pressurizer that controls coolant pressure within the reactor. Nuclear
  power plant control valves in the U.S. are typically specified to ASME
  Section III (Rules for Construction of Nuclear Facility Components), with
  Class 1/2/3 code designations depending on the valve's role in the primary
  system pressure boundary, emergency core cooling, or emergency equipment
  cooling.
concept-tags: [nuclear service, pressurizer spray valve, PWR, ASME Section III, code class]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.7 Control Valves for Nuclear Service in North America, Figure 6.9 (printed p. 157) — 'Pressurizer Spray Valve.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A FIELDVUE-equipped assembly photo; the only figure in §6.7 and §6.8 (Sulfide Stress Cracking, printed pp. 157–160, is text/standards-reference only, no figures).
```

## Open items

- **Batch coverage**: all 9 real figures in the chapter (Figures 6.1–6.9) are catalogued, with no gaps in the numeric sequence. Confirmed by rendering and visually inspecting every page in the chapter's real range — no figure was skipped or identified from text extraction alone.
- **Chapter boundary correction**: the parent directive's candidate range (PDF 150–161) needed one real correction, found by rendering the boundary pages directly rather than trusting PDF-page arithmetic: PDF page 161 is a blank trailing page (header/footer only, no content), and the real Chapter 7 divider is PDF page 162, not 161. Chapter 6's real span is divider 150, content 151–160, blank 161.
- **A genuine within-document content duplication, not a cross-index one**: Figure 6.8 ("Inherent Valve Characteristic") is the third printing of the same quick-opening/linear/equal-percentage curve already catalogued as `cvh-cmp-inherent-characteristics-graph` (ch1, Fig 1.19) and `cvh-cmp-inherent-flow-characteristic-curves` (ch3, Fig 3.38). Catalogued as its own record (this pass is page/source-anchored, one record per real printed figure) but flagged for visibility — see that record's own notes.
- **No duplicate printed figure numbers or source citation errors found** in this chapter (unlike ch3's Figure 3.24 duplicate and ch4's Figure 14.N caption anomaly) — every figure number 6.1–6.9 appears exactly once, with a caption matching its content.
- **Table exclusion**: no numbered tables appear anywhere in this chapter's real page range — checked directly (a full page-by-page visual read, not a text search for "Table N.").
- **Cross-reference check**: `Component Index — 14101 ch1-ch2.md`, `Component Index — 14101 ch3.md`, and `Component Index — bench-set-657.md` were checked directly (grepped for this chapter's section numbers §6.1–§6.8 and figure numbers 6.1–6.9) — no existing citations into this chapter's range. Every figure catalogued fresh here.
- **No archive or legacy material** was found or consulted for this chapter — the 6th-edition Control Valve Handbook is the sole and sufficient source for all 9 figures.
- **`status` and `id` conventions**: this file was authored fresh under the corrected conventions (precedence-bucket `status` values only; descriptive `id` slugs, not printed-figure-number ids) — no drift to correct, unlike ch4.
