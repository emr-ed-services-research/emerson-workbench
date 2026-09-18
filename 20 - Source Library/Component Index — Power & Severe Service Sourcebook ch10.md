---
title: Component Index — Power & Severe Service Sourcebook ch10
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch10 — Materials Guidelines
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 10

**Chapter 10 — "Materials Guidelines."** Standing library-cataloging pass,
part of resuming the whole-document indexing of the Power & Severe Service
Sourcebook (the earlier pass completed chapters 1–7, 9C, 9D, 12–14; this
pass fills the confirmed gaps: 8, 9A, 9B, 10, 11), per `Component Index —
Process & Standards.md`'s "standing full-chapter" trigger. Every real page
in the chapter's confirmed range was rendered at 150dpi and read directly.

Chapter boundaries confirmed directly by rendering: PDF page 173 is the
"Chapter 10 / Materials Guidelines" divider, real content runs through PDF
page 186 (printed p. 10-14, "Fisher Standard Designation System"), and PDF
page 187 is immediately the "Chapter 11 / Packing Materials and Systems"
divider — zero page offset against the chapter's own printed numbering
(10-1 through 10-14), no trailing blank page.

**This is primarily a narrative materials-engineering chapter** (mechanical
properties, wear/corrosion mechanisms, standard body/bonnet/trim/bolting
material selections, materials designation systems) with genuinely few
figures — the opposite shape from Chapters 8 and 9B, with no mode-sequence
or progressive-diagram bundling question to resolve. All figures are from
`20 - Source Library/Industry Specific Sourcebooks/Control Valve Sourcebook
- Power & Severe Service.pdf`. No extracted-figures crop folder exists for
this book — each record's `source` carries a single locator. Every record's
`used-by` is `[]`.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service, Fourth Edition
(D101449X012), is itself a **current** first-party Fisher/Emerson document,
so every record below is `status: current`. No archive or legacy material
was consulted.

## Components

### Chapter 10 — Materials Selection Fundamentals (printed pp. 10-1 – 10-3)

```yaml
id: pss-topic-material-selection-properties
kind: topic
teaches: >
  Control valve material selection is a two-category tradeoff — mechanical
  suitability (yield strength, hardness, toughness) versus environmental
  compatibility — that frequently conflicts, forcing a best-compromise
  choice rather than a single "correct" material. Yield strength governs
  pressure-containing parts and load-bearing components (stems, cages,
  seat rings). Hardness (resistance to indentation) is used as a proxy for
  sliding-wear and erosion/abrasion resistance. Toughness (resistance to
  fracture, measured historically via Charpy/Izod impact tests, now via
  fracture mechanics) correlates with higher elongation, greater
  work-hardening rate, and austenitic microstructure (300-series
  stainless/nickel-base alloys are tougher than ferritic carbon/alloy
  steels and 400-series stainless). Wear itself splits into sliding wear
  (adhesive "galling" from frictional welding at asperities vs. oxidative
  wear producing a fine powdery product — mitigated by dissimilar wear-
  couple composition, differing surface hardness, and lubrication),
  erosion (high-velocity fluid impingement or abrasive-particle impact,
  including "wire drawing" at seating surfaces/cage holes), and cavitation
  damage (shock waves from imploding vapor bubbles during pressure
  recovery) — the last two are usually addressed by valve/trim style
  choice more effectively than by material substitution alone. Corrosion
  resistance in chromium/molybdenum alloys comes from a passive oxide
  layer that can be washed off under high-velocity conditions
  ("erosion-corrosion"), the only fix being to limit susceptible
  alloy/environment/velocity combinations.
concept-tags: [material selection, yield strength, hardness, toughness, sliding wear, galling, erosion, cavitation damage, corrosion, passive layer, erosion-corrosion]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 10 body prose, 'Mechanical and Physical Properties' through 'Corrosion,' pp. 10-1 – 10-2 — no figure, prose only"
relatedFigures: []
relatedTopics: [cvh-topic-cavitation]
used-by: []
notes: >
  Read directly from the real chapter prose (pdftotext -layout, PDF pp.
  173-174), not inferred from any figure caption — this narrative section
  has no figure at all. Cross-references cvh-topic-cavitation (Control
  Valve Handbook) for the shared cavitation-damage mechanism, verified to
  exist before citing.
```

```yaml
id: pss-topic-elevated-temperature-material-effects
kind: topic
teaches: >
  Elevated service temperature degrades several material properties
  independently, each requiring its own check during selection.
  Metallurgical stability: carbon-steel valve bodies (ferrite + iron
  carbide microstructure) undergo "graphitization" above 800°F, decomposing
  carbides into iron and graphite and reducing strength/toughness — chrome/
  moly steel alloys are used above 800°F because their carbide phases stay
  stable; other alloys (17-4PH and related precipitation-hardenable
  stainless, cold-worked 300-series stainless, duplex stainless) have their
  own distinct high-temperature stability failure modes (embrittlement or
  loss of cold-worked strengthening). Yield strength itself falls with
  temperature because the crystalline-defect mechanisms that strengthen a
  material (heat treatment, cold working) lose effectiveness as temperature
  rises. Creep — a time-dependent, non-elastic strain that appears only
  above a material-specific threshold temperature — can become a limiting
  design factor; above the creep-onset temperature, static yield strength
  data becomes irrelevant to a working design. Elastic modulus (stiffness)
  decreases with temperature, which matters directly for bolted joints: a
  bonnet bolt torqued to a given strain at ambient temperature sees its
  load fall in service at elevated temperature as the bolt's modulus drops,
  even though its strain stays constant. Thermal expansion coefficients
  differ by alloy family (300-series stainless expands far more than
  carbon/alloy steels and 400-series stainless; nickel alloys fall between)
  — differential expansion between mating parts (plug/cage, body/bonnet/
  cage/seat-ring stack) can cause binding, excessive looseness, or lost
  gasket load and leakage unless like materials are chosen or parts are
  dimensioned to compensate.
concept-tags: [elevated temperature, graphitization, creep, elastic modulus, thermal expansion, yield strength, metallurgical stability]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 10 body prose, 'Effects of Inlet and Differential Pressure' through 'Coefficient of Thermal Expansion,' pp. 10-2 – 10-4 — no figure, prose only"
relatedFigures: []
relatedTopics: [pss-topic-material-selection-properties]
used-by: []
notes: >
  Read directly from the real chapter prose (PDF pp. 174-176), confirmed
  no figure exists in this range — six distinct temperature-driven failure
  mechanisms (graphitization, alloy-specific embrittlement, yield-strength
  loss, creep, elastic-modulus loss, thermal-expansion mismatch), each
  transcribed with its own real mechanism, not summarized from outside
  knowledge.
```

### Chapter 10 — Selection of Body/Bonnet Material (printed p. 10-6)

```yaml
id: pss-cmp-pt-ratings-comparison-graph
kind: figure
teaches: >
  Relative ANSI B16.34 pressure-temperature ratings for five common body/
  bonnet materials (WCB, WCC, WC9, C5, CF8M), each normalized to WC9's
  rating at room temperature and plotted across 0–1500°F — establishes the
  chapter's three-material-regime rule of thumb: WCC (and C5) rate highest
  from ambient to 700°F, WC9 rates highest from 700–950°F, and CF8M rates
  highest above 950°F.
concept-tags: [pressure temperature rating, ANSI B16.34, WCB, WCC, WC9, C5, CF8M, body bonnet material selection]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-1 (caption reads only 'Figure 10-1.', descriptive explanation given in the following paragraph rather than the caption itself), p. 10-6 — drawing E0166"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  LOW-CONFIDENCE FLAG: the printed caption under the chart reads only
  "Figure 10-1." with no descriptive sentence — confirmed directly against
  the rendered page, the same bare-caption anomaly already on record for
  this book's Figure 7-9 and Figure 9A-12. Here the descriptive explanation
  is given in the body-text paragraph immediately following instead of in
  the caption itself, so the figure's meaning is not actually ambiguous —
  flagged for consistency with how the pattern is documented elsewhere in
  this book.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-body-bonnet-material-requirements
kind: topic
teaches: >
  Valve body/bonnet materials must satisfy four requirements simultaneously:
  castability into the irregular shapes bodies/bonnets require; reliability
  under a known code/standard (most Fisher valves follow ASME/ANSI B16.34,
  which fixes standard dimensions, markings, and design practice per
  pressure class); adequate mechanical properties at operating temperature;
  and corrosion/oxidation resistance in service. Figure 10-1's three-
  material-regime rule (WCC/C5 best to 700°F, WC9 best 700-950°F, CF8M best
  above 950°F) is this requirement set applied to five real candidate
  materials — the pressure-temperature curve is the practical output of
  balancing strength-at-temperature against the other three requirements,
  not an independent selection criterion.
concept-tags: [body material, bonnet material, ASME B16.34, castability, pressure-temperature rating]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 10 body prose, 'Materials of Construction' intro paragraph, p. 10-4 — the four-requirement list preceding Figure 10-1's own discussion"
relatedFigures: [pss-cmp-pt-ratings-comparison-graph]
relatedTopics: [pss-topic-material-selection-properties]
used-by: []
notes: >
  Read directly (PDF p. 176) — this is the real prose reasoning the
  existing pss-cmp-pt-ratings-comparison-graph figure entry's own teaches
  field doesn't carry (that entry describes what the chart shows, not why
  body/bonnet material selection is framed this way).
```

### Chapter 10 — Trim Material Selection (printed pp. 10-6 – 10-7)

```yaml
id: pss-topic-trim-component-material-requirements
kind: topic
teaches: >
  Trim components (plugs, cages, seat rings, stems) are not pressure-
  retaining, so their material requirements center on flow-control
  performance rather than code compliance: each must resist corrosion by
  the process fluid to maintain flow control and mechanical stability, plus
  component-specific demands — plugs withstand seat loads and Cavitrol-trim/
  low-lift-throttling erosive jets, and in cage-guided valves must resist
  galling against the cage; cages provide plug guidance, transfer bonnet-
  bolt load to the seat ring, and in Cavitrol designs take a share of the
  pressure drop itself, requiring axial/radial compressive strength plus
  sliding-wear and (in some designs) erosion resistance; seat rings
  withstand seat loads and low-lift-throttling erosion, sometimes bearing
  bending loads from the seat-ring retainer; stems resist general corrosion
  and pitting (to protect the packing) while providing sliding-wear
  compatibility with guide bushings and packing.
concept-tags: [trim materials, plug, cage, seat ring, stem, galling, corrosion resistance]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 10 body prose, 'Trim Parts' through 'Stems,' pp. 10-6 – 10-7 — no figure, prose only"
relatedFigures: []
relatedTopics: [pss-topic-material-selection-properties, pss-topic-standard-trim-combination-rationale]
used-by: []
notes: >
  Read directly (PDF pp. 178-179). Genuine lead for the still-open CVE2
  eng.selection.materials-compatibility gap — see this file's Open Items
  for the full finding.
```

```yaml
id: pss-topic-standard-trim-combination-rationale
kind: topic
teaches: >
  Fisher's Standard Trim Combination for cage-guided globe valves (Trim 1:
  17-4PH or CB7Cu-1 cage, 416 HT seat ring and plug, both HRC 38 min) is
  explicitly a cost/performance compromise: "good performance at a minimum
  cost," not the highest-performing option available. The 416 plug/seat
  pairing is chosen for erosion resistance plus ease of machining/finishing
  for shutoff; the stem material is a Fisher standard "in nearly all
  product lines" specifically for corrosion/pitting resistance "in most
  environments" (not all); the 17-4PH/CB7Cu-1 cage is normally supplied in
  the H900 heat-treat condition for maximum strength/hardness, but
  Cavitrol cages specifically use H1075 instead — trading some hardness for
  markedly better resistance to stress-corrosion cracking, needed because
  Cavitrol cages have shrink-fit outer sleeves prone to cracking; the
  source states this substitution "caused no decrease in wear performance
  even though the hardness is lower," directly illustrating that a harder
  material is not automatically the better choice once a specific failure
  mode (stress-corrosion cracking, here) is the actual risk. For higher
  temperature/pressure service where standard trim's yield strength, creep
  resistance, or wear resistance falls short, Fisher substitutes a
  316/CF8M chromium-coated cage with a 316/CoCr-A plug and 316/CoCr-A or
  solid Alloy 6 seat ring — the proprietary chromium coating extends
  galling resistance to 1100°F (vs. ~500°F for normal chromium plating).
concept-tags: [trim selection, standard trim combination, cost tradeoff, heat treatment, H900, H1075, stress corrosion cracking, chromium coating]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 10 body prose, 'Common Trim Materials' through 'Trim for High Temperature/Pressure,' pp. 10-6 – 10-7 — no figure, prose only"
relatedFigures: []
relatedTopics: [pss-topic-trim-component-material-requirements, pss-topic-alloy6-erosion-corrosion-case]
used-by: []
notes: >
  Read directly (PDF pp. 178-179), including the real material grades
  (17-4PH/CB7Cu-1, 416 HT HRC 38 min) transcribed exactly. This is the
  strongest single lead found tonight for CVE2's blocked
  eng.selection.materials-compatibility competency — a real, first-party,
  cost-explicit trim-material tradeoff, not a bare spec table. Flagged
  explicitly in this file's Open Items, not silently indexed.
```

### Chapter 10 — Alloy 6 Corrosion Case Study (printed pp. 10-8 – 10-9)

```yaml
id: pss-topic-alloy6-erosion-corrosion-case
kind: topic
teaches: >
  A real, documented material-compatibility failure: Cobalt-chromium Alloy
  6 (Stellite 6, cast designation UNS R30006 / AWS CoCr-A hardsurfacing /
  wrought Alloy 6B) was long considered safe for "non-corrosive" boiler
  feedwater service, but Fisher has seen increasing field failures in
  utility and cogeneration feedwater-regulator valves over roughly ten
  years — at temperatures as low as 300°F and pressure drops as low as 100
  psi, well within Alloy 6's normal service envelope. The root cause is
  erosion-corrosion driven by hydrazine (or related amine) oxygen-scavenger
  treatment of the feedwater: two candidate mechanisms are offered (the
  amine weakens Alloy 6's protective oxide passive layer so it erodes and
  rebuilds repeatedly, accelerating corrosion; or the amine prevents the
  passive layer from reforming at all after initial erosion, leaving the
  alloy permanently unprotected) — the source is explicit that the precise
  mechanism is unconfirmed but the correlation with Alloy 6 presence is
  clear from returned-parts studies. Similar failures occur with tungsten-
  carbide (cobalt-binder) trim in hydrazine or ammonia service (ammonia is
  chemically related to hydrazine). No specific hydrazine-content,
  temperature, or velocity limit is known to be safe — the only mitigation
  is avoiding cobalt-containing alloys in feedwater service, substituting
  hardened stainless trims (S41600/Type 416, S41000/Type 410, S42000/Type
  420, S44004/Type 440C, S17400/17-4PH) or, in severely erosive cases,
  nickel-chromium-boron hardsurfacing (NiCr-C / Colmonoy 6).
concept-tags: [Alloy 6, Stellite 6, erosion-corrosion, hydrazine, feedwater, material compatibility failure, cobalt alloy]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 10 body prose, 'Alloy 6 Corrosion' section, pp. 10-7 – 10-9 — the narrative framing the case-study photographs (pss-cmp-alloy6-*) illustrate"
relatedFigures: [pss-cmp-alloy6-plug-side-view-damage-photo, pss-cmp-alloy6-plug-end-view-damage-photo, pss-cmp-alloy6-sectioned-sample-photo, pss-cmp-alloy6-sem-photomicrograph]
relatedTopics: [pss-topic-standard-trim-combination-rationale]
used-by: []
notes: >
  Read directly (PDF pp. 179-181) — the four existing pss-cmp-alloy6-*
  figure entries document the photographic evidence; this entry captures
  the actual failure mechanism, root-cause hypotheses, and mitigation
  guidance the photos illustrate but their own teaches fields don't state.
  A real, verified compatibility-failure case — directly relevant to
  CVE2's blocked materials-compatibility competency as a worked "material
  that fails on one axis" example (Alloy 6 fails specifically on chemical
  compatibility with hydrazine-treated feedwater, despite otherwise strong
  wear/cavitation performance).
```

```yaml
id: pss-cmp-alloy6-plug-side-view-damage-photo
kind: figure
teaches: >
  A real field-returned valve plug with CoCr-A (Alloy 6) hardsurfaced seat
  and guides, photographed in side view showing visible erosion-corrosion
  damage — the case study's opening exhibit, grounding the surrounding
  text's discussion of Alloy 6 failures in feedwater-regulator service
  treated with hydrazine or other amine derivatives.
concept-tags: [Alloy 6, CoCr-A, erosion corrosion, valve plug damage, feedwater regulator valve, hydrazine]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-2 'Side view of valve plug with CoCr-A hardsurfaced seat and guides showing erosion-corrosion damage,' p. 10-9 — drawing W5703"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Real production/failure-analysis photo, not a manufacturer's drawing — first of a five-figure case-study sequence (Figures 10-2 through 10-5, plus the later Figure 10-6 on bolting, unrelated).
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-alloy6-plug-end-view-damage-photo
kind: figure
teaches: >
  The same damaged plug from Figure 10-2, photographed end-on: shows a
  visible light-colored band adjacent to the plug's outer diameter (the
  damaged region) and illustrates how the sample was subsequently
  sectioned for laboratory examination.
concept-tags: [Alloy 6, CoCr-A, erosion corrosion, valve plug damage, metallographic sectioning]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-3 'End view of the same plug shown in Figure 10-2. Note the light band adjacent to the O.D. and the outside of the plug where the erosion-corrosion damage has occurred. This view also shows how the sample was removed for further evaluation,' p. 10-9 — drawing W5702"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Second of the five-figure case-study sequence; directly continues Figure 10-2.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-alloy6-sectioned-sample-photo
kind: figure
teaches: >
  The sectioned sample removed per Figure 10-3, photographed after
  metallographic polishing and etching of face "A" (a cross-section
  perpendicular to face "B", the bottom of the plug) — a circle marks the
  exact region examined at higher magnification in Figure 10-5.
concept-tags: [Alloy 6, metallographic polishing, sectioning, plane A, plane B, failure analysis]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-4 'Photograph of the sample, removed per Figure 10-3. This photograph was taken after metallographic polishing and etching of face \"A\", which is a cross-section perpendicular to plane \"B\", the bottom of the plug. The circle identifies the region shown in Figure 10-5,' p. 10-9 — drawing W5701"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Third of the five-figure case-study sequence; the circled region is what Figure 10-5's SEM photomicrograph shows at higher magnification.
mediaStatus: unreviewed
```

```yaml
id: pss-cmp-alloy6-sem-photomicrograph
kind: figure
teaches: >
  A scanning electron microscope (SEM) photomicrograph (100X) of the
  circled region from Figure 10-4: shows the microstructures of the S31600
  base material (left, plane "A") and the CoCr-A hardsurfacing (right,
  plane "A"), with the material interface (lower arrow) coinciding with the
  interface between damaged and undamaged areas on the unpolished plane "B"
  (upper arrow) — the case study's key evidentiary image, proving the
  CoCr-A hardsurfacing is being preferentially attacked while the base
  stainless steel is unaffected.
concept-tags: [SEM photomicrograph, S31600, CoCr-A, preferential corrosion, microstructure, failure analysis]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-5 'Scanning electron microscope photograph of the region shown in the circle in Figure 10-4. Note the microstructures of the S31600 (left-hand side) and the CoCr-A (right-hand side) in plane \"A\"... Original Magnification: 100X,' p. 10-9 — drawing W5700"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Fourth and final image of the five-figure case-study sequence (Figure 10-2 through 10-5) — the sequence's conclusive evidence image.
mediaStatus: unreviewed
```

### Chapter 10 — Bolting (printed p. 10-11)

```yaml
id: pss-cmp-bolt-stress-vs-temperature-graph
kind: figure
teaches: >
  Allowable bolt stress vs. temperature (per ASME B&PV Code Section VIII)
  for the four most common Fisher bolting grades: B8M Class 1, B8M Class 2,
  B7, and B16 — shows B8M Class 2's higher allowable stress up to 800°F
  (from strain hardening) converging with Class 1 above that point, and B7
  losing its allowable-stress advantage over B16 above roughly 700°F —
  grounds the surrounding text's B7/B16/B8M bolting-selection discussion in
  one comparative chart.
concept-tags: [bolting, ASME B&PV Code Section VIII, B7 bolting, B16 bolting, B8M bolting, allowable stress, temperature]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Figure 10-6 'Allowable Bolt Stress vs Temperature, ASME B&PV Code Section VIII,' p. 10-11 — drawing E0167"
delivery: analytical graph — falls under Style Guide §5 (diagram & graph conventions)
used-by: []
notes: >
  Last figure in the chapter; pp. 10-11 (remainder) through 10-14 (Materials
  Standardization, Standardized Metallic Materials Designations, Industry
  Trends, Fisher Standard Designation System) carry no further figures.
mediaStatus: unreviewed
```

```yaml
id: pss-topic-bolting-grade-selection
kind: topic
teaches: >
  Fisher's three common bolting grades (ASME SA193 B7, B16, B8M) each solve
  a different real constraint, per Figure 10-6's allowable-stress-vs-
  temperature comparison: B7 (a heat-treated 4140-type alloy steel) is the
  standard supplied grade, chosen for a combination of strength across a
  wide temperature range, thermal-expansion match to WCC/WC9 body
  materials, "excellent availability," and "reasonable cost" — an explicit
  availability/cost tradeoff, not a pure-performance choice. B16 (4140 plus
  vanadium and extra molybdenum) is used above roughly 700°F specifically
  for superior high-temperature strength and the same WCC/WC9 thermal-
  expansion match. B8M (316 stainless) is chosen for high- or low-
  temperature service, or to match a CF8M body/bonnet's thermal expansion;
  its Class 2 (strain-hardened) variant has higher allowable stress up to
  800°F than Class 1 (annealed), but annealing above 800°F erases the
  strain-hardening benefit, so Class 2 is not permitted above 1000°F.
concept-tags: [bolting, B7, B16, B8M, thermal expansion match, availability, cost]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 10 body prose, 'Bolting' through 'B8M Bolting,' pp. 10-9 – 10-10"
relatedFigures: [pss-cmp-bolt-stress-vs-temperature-graph]
relatedTopics: [pss-topic-material-selection-properties]
used-by: []
notes: >
  Read directly (PDF pp. 181-183) — the real selection rationale behind
  the existing pss-cmp-bolt-stress-vs-temperature-graph figure, including
  the explicit availability/cost language for B7.
```

### Chapter 10 — Materials Standardization and Designation Systems (printed pp. 10-11 – 10-14)

```yaml
id: pss-topic-standard-materials-cost-leadtime-rationale
kind: topic
teaches: >
  Customers frequently specify non-standard materials for Fisher valve
  bodies/bonnets and trim, often because they are unaware a standard
  Fisher material would perform equivalently — this is presented as an
  economic problem, not a performance one: non-standard castings require
  special foundry orders, which "increases costs and delays delivery,"
  and the source states plainly that "the non-standard material actually
  costs more than a superior standard material" once delivery performance
  is accounted for. The chapter names real proposed universal-standard
  material sets covering the full low/intermediate/high-temperature range
  for both globe and rotary valve bodies, trim, and bolting (e.g. globe
  body/bonnet: LCC, WCC or WCB, WC9, CF8M; standard plugs: S41600, S44004,
  S31600/CoCr-A) — using one of these, even where a non-standard
  alternative "might seem to be a premium choice," is presented as saving
  money and improving lead time in the long run. The underlying economic
  logic: casting materials are listed in order of increasing capability
  and, by assumption, increasing price, so a real application exists for
  which each alloy in the list is the most economical valid choice — the
  task is matching the application to the cheapest material that still
  qualifies, not defaulting to the highest-spec option.
concept-tags: [material standardization, cost, lead time, availability, standard trim, standard body material]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 10 body prose, 'Materials Standardization' through the standard-materials lists, pp. 10-11 – 10-13 — no figure, prose plus reference lists"
relatedFigures: []
relatedTopics: [pss-topic-standard-trim-combination-rationale]
used-by: []
notes: >
  Read directly (PDF pp. 183-185). This is the clearest cost/availability
  guidance found in this chapter — explicit, first-party language ("costs
  more," "increases costs and delays delivery," "saves money... in the long
  run") directly on point for CVE2's blocked materials-compatibility
  competency's "availability" and "cost" axes specifically. See this
  file's Open Items for the consolidated finding across all three axes.
```

```yaml
id: pss-topic-material-designation-systems
kind: topic
teaches: >
  No single metallic-material designation system covers the process
  control industry; three coexist by real-world convention rather than
  formal mandate. The Unified Numbering System (UNS, SAE/ASTM) is favored
  for nearly all wrought products (an alpha character naming the metal
  family — A for aluminum, C for copper, N for nickel, S for stainless —
  followed by five digits, e.g. S31600 for Type 316 stainless, N04400 for
  Monel 400) and for cast aluminum/copper alloys. ACI (Alloy Casting
  Institute, now folded into ASTM) designations are used for cast stainless/
  heat-resisting steels and cast nickel-base alloys — the first letter is
  C (corrosion-resistant) or H (heat-resistant), the second letter (A–Z)
  tracks nickel content, and trailing digits give maximum carbon content
  ×100 (e.g. CA15 = 12% chromium, no nickel). ASTM/ASME designations are
  retained for special carbon/alloy steels and cast iron specifically
  because their UNS numbers, where they exist at all, are less systematic
  and harder to relate back to the commonly known designation than the ACI
  scheme is. Fisher's own internal designation system is explicitly built
  to match ANSI/ASME/ASTM practice and anticipate where those standards are
  headed, rather than being an independent scheme.
concept-tags: [UNS, ACI designation, ASTM, ASME, material designation systems]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
    locator: "Chapter 10 body prose, 'Standardized Metallic Materials Designations' through 'Fisher Standard Designation System,' pp. 10-13 – 10-14 — no figure, prose only"
relatedFigures: []
relatedTopics: [pss-topic-standard-materials-cost-leadtime-rationale]
used-by: []
notes: >
  Read directly (PDF pp. 185-186), the chapter's final pages — the real
  reasoning for why each system is used where, not just a bare lookup
  table, which is why this was authored as a topic rather than left as
  reference data.
```

---

## Open Items

- **Chapter boundary**, confirmed directly: Chapter 10 divider = PDF p. 173;
  Chapter 11 divider = PDF p. 187. Chapter 10 = PDF pp. 173–186 (printed pp.
  10-1 through 10-14), zero page offset, no trailing blank page. Every page
  in range was rendered at 150dpi and read directly.
- **Full coverage accounting**: Figures 10-1 through 10-6 — six real
  figures, all six accounted for above. No gaps; this is the chapter's
  complete figure set (confirmed by reading every page in range, not
  assumed from the chapter's largely-narrative subject matter).
- **Low-confidence flags**: Figure 10-1 (p. 10-6) prints only the bare
  caption "Figure 10-1." with no descriptive sentence in the caption itself
  — the same bare-caption pattern already on record for this book's Figure
  7-9 and Figure 9A-12, though here the explanation is given in the
  following body-text paragraph rather than left fully unexplained.
- **`kind: topic` pass (2026-09-17): 9 entries added, and a real, direct
  lead for CVE2's blocked `eng.selection.materials-compatibility`
  competency.** This chapter is genuinely a narrative materials-engineering
  chapter (confirmed by reading all 14 real pages, not assumed from the
  file's own earlier "few figures" framing), and it covers all three axes
  that competency's blocked statement needs — compatibility
  (`pss-topic-alloy6-erosion-corrosion-case`: a real, documented material
  that fails specifically on chemical compatibility with hydrazine-treated
  feedwater despite strong wear/cavitation performance otherwise — exactly
  the "material that fails on one axis" shape the competency's own
  statement calls for), cost (`pss-topic-standard-materials-cost-leadtime-
  rationale`, `pss-topic-standard-trim-combination-rationale`: explicit
  first-party cost/lead-time language, not inferred), and availability
  (same two entries — "excellent availability" for B7 bolting vs. "poor"
  availability for Super-12%-chromium steels, stated directly). This is a
  stronger, more direct lead than Control Valve Handbook's own ch13
  (Engineering Data), which was checked earlier tonight and confirmed to
  have zero explanatory prose on materials selection at all — only bare
  spec tables. Whether this is enough to fully unblock the CVE2 competency,
  or needs combining with a still-to-be-checked source, is Franz's call —
  flagged here, not decided.
  Flagged in that record's own `notes`.
- **Duplicate-figure-number / source-citation-error findings**: none found.
- **Table-exclusion confirmation**: no numbered "Figure"-style tables were
  found in this chapter's range; the chapter's several materials-list
  blocks (bolting grades, casting-material lists by temperature use,
  standard trim/body materials by valve type) are unnumbered prose lists,
  not numbered tables, and are not figures — nothing to exclude under the
  tables-vs-figures rule.
- **Cross-reference findings**: no drawing-number or content overlap found
  against the Oil & Gas Sourcebook, the Control Valve Handbook, or any
  other chapter of this book already in this pass's context — this
  chapter's materials-engineering content (P-T ratings, the Alloy 6
  corrosion case study, bolting selection, materials designation systems)
  is generic cross-industry engineering reference material distinct from
  every other chapter's application-specific figures. Left for the closing
  whole-library sweep per standing practice.
- **Archive/legacy material**: none consulted, none needed — first-party
  current Fisher/Emerson document throughout.
