---
title: Subject-Matter Index — Control Valve Handbook ch6
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Control Valve Handbook, 6th ed. (D101881X012, © Aug 2023 Emerson/Fisher)
chapter: ch6 — Special and Severe Service Control Valves
updated: 2026-09-17
---

# Subject-Matter Index — Control Valve Handbook, Chapter 6 (Special and Severe Service Control Valves)

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

Record shape matches `Subject-Matter Index — Control Valve Handbook ch3.md` and
`ch4.md` (post-2026-09-17 correction): `id` (descriptive slug) · `teaches` ·
`concept-tags` · `status` (precedence bucket) · `source` (`doc` + `locator`)
· `delivery` · `used-by` · `notes`.

**Cross-reference to 14101 / bench-set-657, checked directly:** none of this
chapter's 9 figures are cited by `Subject-Matter Index — 14101 ch1-ch2.md`,
`Subject-Matter Index — 14101 ch3.md`, or `Subject-Matter Index — bench-set-657.md` —
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

```yaml
id: cvh-topic-low-flow-design-approach
kind: topic
teaches: >
  Two distinct design approaches meet very-low-flow-Cv requirements. First,
  special trims — a seat ring and valve plug machined to very close
  tolerances — fit inside a standard control valve body, handling Cv as low
  as 0.03; this reduces spare-parts inventory (the body stays standard) and
  makes future flow expansion easy (swap the trim, not the whole valve).
  Second, dedicated compact/lightweight specialty valves handle Cv as low as
  0.000001, built for laboratory and pilot-plant use on light-schedule
  piping/tubing where a full-size standard body would be impractical. Low-flow
  designs generally feature low deadband/hysteresis, high flow capacity
  relative to their size, and tight shutoff.
concept-tags: [low-flow Cv, special trim, laboratory service, design tradeoff, spare-parts economy]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.2 Low-Flow Cv Control Valves, pp. 152-153 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-low-flow-cv-control-valve]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real page-152/153 body text (pdftotext -layout,
  footer-confirmed). The existing figure entry (Figure 6.4) shows the compact
  specialty-valve half of this picture; this topic adds the standard-body
  special-trim alternative and the design/economic reasoning between them,
  neither of which the figure caption alone conveys.
```

### §6.3–6.4 High-Temperature and Cryogenic Service (printed p. 154)

```yaml
id: cvh-topic-extreme-temperature-materials
kind: topic
teaches: >
  Materials selection at both temperature extremes, by threshold. High
  temperature (above 232°C/450°F): standard plastics/elastomers/gaskets
  become unsuitable; metal-to-metal seating and semi-metallic or laminated
  flexible-graphite packing are used instead, with spiral-wound stainless
  steel or flexible-graphite gaskets. Body-casting material is threshold-
  driven — Cr-Mo steels above 538°C (1000°F); ASTM A217 Grade WC9 up to
  593°C (1100°F); ASTM A351 Grade CF8M (Type 316 stainless) up to 816°C
  (1500°F), with carbon content controlled to 0.04-0.08% between 538-816°C;
  9%Cr-1%Mo-V materials (ASTM A217 Grade C12A castings, ASTM A182 Grade F91
  forgings) up to 650°C (1200°F). Extension bonnets protect packing-box parts
  from the heat. Cryogenic (below -101°C/-150°F): the same categories of
  component (packing, plug seals) need special consideration — standard soft
  seals go hard and brittle below -18°C (0°F) and lose their shutoff
  capability; special elastomers need extra loading to still seal. Materials
  of construction are generally CF8M body/bonnet with 300-series stainless
  steel trim; hard facing may be needed in flashing applications to combat
  erosion.
concept-tags: [high-temperature service, cryogenic service, materials selection, Cr-Mo steel, ASTM grades, packing materials]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.3 High-Temperature Control Valves and §6.4 Cryogenic Service Valves, pp. 153-154 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-cryogenic-extension-bonnet]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real page-153/154 body text. §6.3 (high-temperature)
  has NO figure anywhere in the chapter — this is the only catalogued record
  for that section's real content. §6.4's existing figure entry
  (cryogenic-extension-bonnet, Figure 6.5) already covers the frost mechanism
  well; this topic adds the materials-of-construction guidance for both
  temperature extremes, which no figure conveys. Merged high-temp and
  cryogenic into one entry deliberately — parallel content (materials
  selection by temperature threshold) in the same two-section prose flow,
  not two independent concepts.
```

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

```yaml
id: cvh-topic-particulate-cavitation-erosion
kind: topic
teaches: >
  As process/oil-recovery pressures and resultant pressure drops climb, so
  does cavitation propensity — and rising pressure often brings more
  entrained particulate with it, which increases the risk of clogging the
  small holes cavitation-abatement trims depend on (a real design tension:
  the trim feature that fights cavitation is the same feature particulate
  clogs). A distinct, separate erosion mechanism affects plants cycled
  multiple times daily with particulate in the flow (particulate driven by
  corrosion in the boiler feedwater system): jets exiting the cage holes
  erode the plug tip when it sits in front of those holes for extended
  periods, and controlling below the recommended minimum Cv lets clearance
  flow erode the plug tip directly. A protected inside-seat design extends
  seat and plug-tip service life against this specific failure mode.
concept-tags: [cavitation, particulate erosion, seat erosion, minimum Cv, cyclic service, design tension]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.5 Valves Subjected to Cavitation and Fluids with Particulate, pp. 154-155 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-cavitation-trim-cutaway, cvh-cmp-particulate-trim-eccentric-plug]
relatedTopics: [cvh-topic-cavitation, cvh-topic-flow-recovery]
used-by: []
notes: >
  Read directly from the real page-154/155 body text. The two existing
  figure entries show what the anti-cavitation and particulate-handling
  trims look like; this topic adds the WHY — the cavitation/particulate
  clogging tension, and the below-minimum-Cv erosion mechanism, neither of
  which either figure caption states. relatedTopics point to ch5's real,
  verified cavitation/flow-recovery topics since this section extends that
  same mechanism into a severe-service, particulate-bearing context.
```

```yaml
id: cvh-topic-custom-flow-characteristics
kind: topic
teaches: >
  When the three standard inherent flow characteristics (Quick-Opening,
  Linear, Equal-Percentage) don't meet a given application's needs, custom
  characteristics can be manufactured: a contoured plug's tip design can be
  modified so the unobstructed flow area changes size in a specific way as
  the plug moves through its travel range, and cages can be similarly
  redesigned. This is especially common in noise-abatement and
  anti-cavitation trims, where a high level of protection may be needed at
  low flow rates but much lower protection is needed at higher flow rates —
  the custom characteristic lets the trim's protection level track the
  actual risk across the flow range rather than being uniform.
concept-tags: [inherent flow characteristic, custom trim, contoured plug, cage design, noise abatement, cavitation mitigation]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.6 Customized Characteristics, Noise Abatement, and Cavitation Mitigation Trims, pp. 155-156 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-severe-service-inherent-characteristic-curve]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real page-155/156 body text. The existing figure
  entry shows the three STANDARD curves (itself the third printing of that
  same chart in this document, see its own notes); this topic covers the
  section's real subject — how and why custom characteristics beyond those
  three get designed — which the standard-curve figure doesn't convey at all.
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

```yaml
id: cvh-topic-nuclear-code-classification
kind: topic
teaches: >
  U.S. nuclear power plant components have been subject to 10CFR50 Appendix
  B (Quality Assurance Criteria for Nuclear Power Plants and Fuel
  Reprocessing Plants) since 1970, enforced by the NRC; the plant owner bears
  ultimate compliance responsibility but relies on manufacturers' documented
  proof of controlled manufacture/inspection/test. Most nuclear components
  are specified to ASME Section III (Rules for Construction of Nuclear
  Facility Components), which defines three code classes by role: Class 1
  (primary system pressure boundary, between the reactor vessel and the
  outermost containment isolation valves), Class 2 (part of the emergency
  core cooling system), Class 3 (emergency equipment cooling / systems that
  may contain radioactive fluids). Section III governs materials, design
  criteria, fabrication, NDE, hydrostatic testing, and marking/stamping for
  pressure-retaining parts (in a control valve: body, bonnet, body-bonnet
  studs/nuts, plug or disc) — it explicitly does NOT apply to actuators/
  accessories (unless pressure-retaining), to service deterioration
  (radiation, corrosion, erosion, seismic), or to cleaning/painting/
  packaging. Non-Section-III parts can still be "safety related" under
  10CFR50 Appendix B / 10CFR Part 21 if they prevent or mitigate offsite
  exposure or enable safe shutdown — typically actuator yokes, valve stems,
  stem connector assemblies, and actuator springs; packing and gaskets
  generally are NOT considered safety related. Section III revises on a
  cycle (editions every 3 years, addenda semi-annual) — usable after
  issue date, mandatory 6 months after. The two main U.S. reactor designs
  are PWR (Pressurized Water Reactor — primary coolant heats the core,
  flows to a steam generator, a separate secondary water system makes the
  steam that drives the turbines; the Pressurizer Spray Valve controls
  primary coolant pressure) and BWR (Boiling Water Reactor — primary
  cooling water itself boils in the core and its steam directly drives the
  turbines); Canada's CANDU (Pressurized Heavy Water Reactor, uranium fuel)
  is a third design increasingly using ENVIRO-SEAL packing to reduce valve
  assembly height and improve seismic performance during refurbishment.
concept-tags: [nuclear service, ASME Section III, code class, 10CFR50, safety related, PWR, BWR, CANDU, pressurizer spray valve]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.7 Control Valves for Nuclear Service in North America, pp. 156-157 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-pressurizer-spray-valve-nuclear]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real page-156/157 body text. The existing figure
  entry's own teaches field already sketches Class 1/2/3 and ASME Section
  III briefly; this topic adds the real regulatory depth (10CFR50 Appendix
  B, the safety-related distinction, Section III's explicit scope
  exclusions, the revision cadence, and the PWR/BWR/CANDU reactor-type
  differences) that the figure entry's short summary doesn't carry.
```

```yaml
id: cvh-topic-sulfide-stress-cracking
kind: topic
teaches: >
  NACE International's MR0175 ("Sulfide Stress Cracking-Resistant Metallic
  Materials for Oilfield Equipment," issued 1975) is the dominant standard
  for material selection against sulfide stress cracking (SSC) in H2S-
  containing oil and gas production environments — so dominant that "NACE"
  became nearly synonymous with "MR0175." Material resistance ranks
  roughly: carbon/low-alloy steels need proper heat treatment (max HRC 22)
  to resist SSC; austenitic stainless steels resist best annealed (some
  grades acceptable to 35 HRC); copper-based alloys are inherently resistant
  but restricted from critical parts over general-corrosion concerns; nickel
  alloys generally provide the best resistance (some precipitation-hardenable
  grades acceptable to 40 HRC); plating (chromium, nickel, etc.) offers NO
  SSC protection and cannot substitute for a resistant base material. In
  2003 MR0175 was significantly revised to also cover chloride stress
  corrosion cracking and was rebranded as the joint NACE/ISO document NACE
  MR0175/ISO 15156 — this removed a bolting material previously allowed
  (17-4PH H1150 DBL, no longer permitted) and shifted from a simple
  acceptable/unacceptable material list to environmental limits by H2S
  partial pressure, temperature, chloride ppm, and free sulfur presence.
  MR0103 ("Materials Resistant to Sulfide Stress Cracking in Corrosive
  Petroleum Refining Environments," April 2003) is the refining industry's
  parallel standard — similar to pre-2003 MR0175 but refinery-scoped, with
  its own (more rigorous) welding controls (via NACE RP0472) and no
  environmental limits — a material is simply acceptable or not. "Universal
  NACE" is a WCC casting compliant with all four standards at once
  (MR0175-2002, MR0175-2003/ISO 15156, and MR0103) — the practical
  simplification for a manufacturer who doesn't want to track which
  standard a given customer specifies.
concept-tags: [sulfide stress cracking, NACE MR0175, NACE MR0103, sour service, material selection, H2S]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§6.8 Valves Subjected to Sulfide Stress Cracking (§6.8.1-6.8.3), pp. 157-160 — prose, not figure-anchored, no figures anywhere in this section"
relatedFigures: []
relatedTopics: []
used-by: []
notes: >
  Read directly from the real page-157-160 body text. This whole section has
  zero figures (confirmed by the existing figure-only pass's own Open Items
  note) — this topic is the ONLY catalogued record for §6.8's real content.
  Kept as one entry covering both the SSC material-resistance concept and
  the MR0175/MR0103 standards-landscape history, since the source itself
  presents them as one continuous narrative, not two separable concepts.
```

## Open items

- **Batch coverage**: all 9 real figures in the chapter (Figures 6.1–6.9) are catalogued, with no gaps in the numeric sequence. Confirmed by rendering and visually inspecting every page in the chapter's real range — no figure was skipped or identified from text extraction alone.
- **Chapter boundary correction**: the parent directive's candidate range (PDF 150–161) needed one real correction, found by rendering the boundary pages directly rather than trusting PDF-page arithmetic: PDF page 161 is a blank trailing page (header/footer only, no content), and the real Chapter 7 divider is PDF page 162, not 161. Chapter 6's real span is divider 150, content 151–160, blank 161.
- **A genuine within-document content duplication, not a cross-index one**: Figure 6.8 ("Inherent Valve Characteristic") is the third printing of the same quick-opening/linear/equal-percentage curve already catalogued as `cvh-cmp-inherent-characteristics-graph` (ch1, Fig 1.19) and `cvh-cmp-inherent-flow-characteristic-curves` (ch3, Fig 3.38). Catalogued as its own record (this pass is page/source-anchored, one record per real printed figure) but flagged for visibility — see that record's own notes.
- **No duplicate printed figure numbers or source citation errors found** in this chapter (unlike ch3's Figure 3.24 duplicate and ch4's Figure 14.N caption anomaly) — every figure number 6.1–6.9 appears exactly once, with a caption matching its content.
- **Table exclusion**: no numbered tables appear anywhere in this chapter's real page range — checked directly (a full page-by-page visual read, not a text search for "Table N.").
- **Cross-reference check**: `Subject-Matter Index — 14101 ch1-ch2.md`, `Subject-Matter Index — 14101 ch3.md`, and `Subject-Matter Index — bench-set-657.md` were checked directly (grepped for this chapter's section numbers §6.1–§6.8 and figure numbers 6.1–6.9) — no existing citations into this chapter's range. Every figure catalogued fresh here.
- **No archive or legacy material** was found or consulted for this chapter — the 6th-edition Control Valve Handbook is the sole and sufficient source for all 9 figures.
- **`status` and `id` conventions**: this file was authored fresh under the corrected conventions (precedence-bucket `status` values only; descriptive `id` slugs, not printed-figure-number ids) — no drift to correct, unlike ch4.
- **`kind: topic` pass (2026-09-17), added to the existing figure-only catalogue above.** Read every real page (151-160) directly, not just sections with figures. Six new topic entries: `cvh-topic-low-flow-design-approach`, `cvh-topic-extreme-temperature-materials` (merges §6.3 high-temp and §6.4 cryogenic materials guidance — parallel content, same two-section prose flow), `cvh-topic-particulate-cavitation-erosion`, `cvh-topic-custom-flow-characteristics`, `cvh-topic-nuclear-code-classification`, `cvh-topic-sulfide-stress-cracking` (the entire figure-less §6.8, confirmed zero figures). **§6.1's one real concept (geometric-vs-arithmetic pressure-load scaling with valve size) is deliberately NOT given a separate topic entry** — it's already stated directly in `cvh-cmp-butterfly-valve-fieldvue-assembly`'s own `teaches` field; a separate topic would just restate it. Chapter total: 15 components (9 figures + 6 topics), up from 9. Integrity verified: 15 unique ids, 15 yaml fences, zero broken relatedFigures/relatedTopics references (checked programmatically against this file and ch5's own ids).
