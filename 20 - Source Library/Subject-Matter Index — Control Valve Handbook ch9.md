---
title: Subject-Matter Index — Control Valve Handbook ch9
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Control Valve Handbook, 6th ed. (D101881X012, © Aug 2023 Emerson/Fisher)
chapter: ch9 — Standards and Approvals
updated: 2026-09-17
---

# Subject-Matter Index — Control Valve Handbook, Chapter 9 (Standards and Approvals)

Standing full-chapter cataloging pass, part of the "index CVH chapters 5–15"
directive (Franz, 2026-09-17). Every real page in the chapter's confirmed
range was rendered as an image and visually inspected, not read from
extracted text alone — this discipline mattered here more than in most
chapters, since every single figure in this chapter is a data table
presented as a numbered figure, a fact text extraction alone would not have
made clear (a bulleted-list-heavy chapter like this could easily be
mis-scanned as containing no real "figures" at all).

**Real chapter title, corrected against the primary source:** the book's own
table of contents and chapter-divider page both print "Standards and
Approvals," not "Standards and Approval Agencies" as `Emerson Control Valve
Handbook.md`'s summary-by-chapter table currently reads — that file's title
was corrected as part of this pass (see that file directly).

**Real chapter boundary, confirmed by rendering and reading the actual
pages:** PDF page 192 is the real "Chapter 9 / Standards and Approvals"
divider (a full-page photo, no numbered figure). Real content runs PDF pages
193–209 — **no blank trailing page**, matching ch8's pattern rather than
ch6/ch7's. PDF page 210 is the real "Chapter 10 / Isolation Valves" divider,
confirmed by rendering it directly. PDF page number equals printed page
number throughout (zero offset, confirmed against the printed folios visible
on pages 193, 199, and 209).

All figures are from `20 - Source Library/Control Valve Handbook/Control
Valve Handbook - Sixth Edition.pdf`. This pass catalogs existence and
location only. Every record's `used-by` is `[]`.

Record shape matches `Subject-Matter Index — Control Valve Handbook ch3.md` and
`ch4.md` (post-2026-09-17 correction): `id` (descriptive slug) · `teaches` ·
`concept-tags` · `status` (precedence bucket) · `source` · `delivery` ·
`used-by` · `notes`.

**Cross-reference to 14101 / bench-set-657, checked directly:** none of this
chapter's 7 figures are cited by `Subject-Matter Index — 14101 ch1-ch2.md`,
`Subject-Matter Index — 14101 ch3.md`, or `Subject-Matter Index — bench-set-657.md` —
grepped for section numbers (§9.1–§9.7) and figure numbers (9.1–9.7), no
matches. Every figure below is catalogued fresh.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | First-party Emerson document; sole source for this chapter. No archive or legacy material was consulted or found relevant to Chapter 9's content. |

## Components

### §9.2–9.2.1 Product Approvals for Hazardous Locations (printed pp. 195–196)

```yaml
id: cvh-topic-hazardous-location-definitions
kind: topic
teaches: >
  The foundational definitions §9.2/9.2.1 establish before any classification
  system is introduced: an Explosive Gas Atmosphere is a mixture of air and
  flammable gas/vapor that, once ignited, permits self-sustaining
  propagation; an Explosive Dust Atmosphere is the same but for combustible
  dust, fiber, or flyings. A Hazardous Location (or area) is any area where
  either atmosphere is expected in sufficient quantity to require special
  precautions in construction, installation, and use of equipment. An
  Approval Agency is an organization with authority to grant/authorize/attest
  to facts (usually via certificate); a Certification Scheme is a group of
  approval agencies operating under one unified system of rules (the EU,
  Eurasia Economic Union, IECEx Scheme, Gulf States Organization, etc. are
  named examples). The chapter's own disclaimer: this material is a broad
  overview for educational purposes, not a substitute for governing
  documents — and every control valve equipment use in an explosive
  atmosphere requires a real ignition hazard assessment first.
concept-tags: [hazardous location, explosive gas atmosphere, explosive dust atmosphere, approval agency, certification scheme, ignition hazard assessment]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.2 Product Approvals for Hazardous (Classified) Locations, §9.2.1 Hazardous Location Approvals and Definitions, pp. 195-196 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-classification-systems]
used-by: []
notes: >
  Read directly via pdftotext -layout against the real PDF pages, footer-
  confirmed. This is the chapter's own opening definitional layer — every
  later section (classification systems, groups, protection types, EPL)
  builds on these four terms without redefining them again.
```

### §9.3–9.3.2 Classification Systems (printed pp. 196–197)

```yaml
id: cvh-topic-classification-systems
kind: topic
teaches: >
  Two classification systems exist for hazardous areas, and the chapter is
  explicit about which region uses which: the Class/Division System
  (generally the United States and Canada, though new installations there may
  use Zone) and the Zone System (the rest of the world). Class/Division
  (§9.3.1) rates a location on three independent axes — Class (the general
  nature of the hazardous material: I = flammable gas/vapor, II = combustible
  dust, III = easily ignitable fibers/flyings not normally suspended in air),
  Division (the probability of the hazard being present: 1 = high, present
  under normal operation; 2 = low, present only in an abnormal
  situation/leak), and Group (the explosive characteristic of the specific
  gas/vapor/dust — A/B/C/D for Class I gases by MESG/MIC ratio, e.g. Group A
  is acetylene alone; E/F/G for Class II dusts by composition, e.g. metallic
  dusts vs. carbonaceous dusts vs. other). The Zone System (§9.3.2) instead
  classifies by frequency and duration of the explosive atmosphere's
  presence: Zones 0/1/2 for gas (0 = continuous/long-period/frequent, 1 =
  likely periodically in normal operation, 2 = not likely, and short-lived if
  it occurs), with the exact same 0/1/2 logic mapped to dust as Zones
  20/21/22. The chapter's own caution: a zone number alone says nothing about
  the material's actual explosive nature — that's what Group, subgroup, type
  of protection, EPL, and temperature code (covered next) are for.
concept-tags: [class division system, zone system, hazardous area classification, class, division, group, zone]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.3 Classification Systems, §9.3.1 Class/Division System, §9.3.2 Zone System, pp. 196-197 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-hazardous-location-definitions, cvh-topic-equipment-groups-subgroups]
used-by: []
notes: >
  Read directly via pdftotext -layout, footer-confirmed pp. 196-197. This is
  the real conceptual root of every downstream figure in this chapter
  (Figures 9.1-9.7 all encode some piece of this classification logic as a
  lookup table) — none of the existing figure entries explain WHY the two
  systems exist or what Class/Division/Group actually mean, only WHAT the
  resulting substitutability/mapping tables say.
```

### §9.3.3–9.3.4 Equipment Groups and Subgroups (printed p. 199)

```yaml
id: cvh-cmp-equipment-groups-table
teaches: >
  A 2×3 table cross-referencing equipment grouping (IIC/IIB/IIA) against
  suitable applications for Gas and Dust atmospheres — IIC-marked equipment
  is suitable for applications requiring IIC, IIB, or IIA; IIB-marked
  equipment is suitable for IIB or IIA; IIA-marked equipment is suitable only
  for IIA, reflecting a substitutability hierarchy explained in the
  surrounding text on IEC equipment subgroups.
concept-tags: [hazardous area classification, equipment group, IIC, IIB, IIA, substitutability]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.3.4 Equipment Subgroups, Figure 9.1 (printed p. 199) — 'Equipment Groups.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  A bordered data table with a "Suitable Applications" column, given a
  figure number and caption by the source itself — catalogued here per the
  standing "a table-formatted item IS catalogued if the source itself gives
  it a figure number and caption" rule (same as ch3's ISO 15848-1/FCI 91-1
  tables), not excluded under the tables-not-catalogued default.
```

### §9.3.3–9.3.6 Equipment Groups, Types and Levels of Protection (printed pp. 198–201)

```yaml
id: cvh-topic-equipment-groups-subgroups
kind: topic
teaches: >
  What Figure 9.1's substitutability table means underneath the numbers.
  Equipment is first assigned a top-level Group by where it's used: Group I
  is for mines susceptible to firedamp; Group II is for explosive gas
  atmospheres outside mines; Group III is for explosive dust atmospheres.
  Group I has no subgroup. Groups II and III are subdivided further by the
  explosive nature of the specific atmosphere: Group II's subgroups (IIA/IIB/
  IIC, the "Gas Group") are set by Maximum Experimental Safe Gap (MESG) or
  Minimum Igniting Current (MIC) ratio — IIC is the most restrictive
  (MESG ≤ 0.5mm or MIC ≤ 0.45, e.g. hydrogen), IIA the least (MESG ≥ 0.9mm or
  MIC > 0.80, e.g. propane) — and because IIC covers the hardest-to-ignite-
  safely case, IIC-rated equipment is suitable anywhere IIB or IIA is
  required, but not the reverse; the identical logic applies to Group III's
  IIIA/IIIB/IIIC ("Dust Group") subgroups, rated by particle size and
  electrical resistivity rather than MESG/MIC. This substitutability
  direction (higher subgroup letter covers lower) is exactly what Figure
  9.1's table encodes as a lookup, without explaining the MESG/MIC mechanism
  behind it.
concept-tags: [equipment group, gas group, dust group, MESG, MIC ratio, subgroup substitutability]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.3.3 Equipment Groups, §9.3.4 Equipment Subgroups (§9.3.4.1 Group II, §9.3.4.2 Group III), pp. 198-199 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-equipment-groups-table]
relatedTopics: [cvh-topic-classification-systems]
used-by: []
notes: >
  Read directly via pdftotext -layout, footer-confirmed pp. 198-199. Directly
  complements cvh-cmp-equipment-groups-table (Figure 9.1) — that figure entry
  catalogues the table's existence and what it shows; this topic explains why
  the substitutability direction runs the way it does (MESG/MIC severity),
  which the figure alone doesn't state.
```

```yaml
id: cvh-topic-types-and-levels-of-protection
kind: topic
teaches: >
  §9.3.5 catalogues the real named protection techniques a piece of
  equipment can use to avoid becoming an ignition source, split by
  electrical vs. non-electrical equipment — Intrinsic Safety (Ex i, gas and
  dust: restricts electrical energy below the level that could ignite),
  Flame-Proof Enclosure (Ex d, gas: contains an internal explosion,
  prevents transmission outward), Encapsulation (Ex m), Increased Safety
  (Ex e), Type n (Ex n), Pressurization (Ex p), Oil Immersion (Ex o), Powder
  Filling (Ex q), Enclosure (Ex t, dust), and Special Protection (Ex s) for
  electrical equipment; Flow Restricting Enclosure (Ex fr), Flame-Proof (Ex
  d), Constructional Safety (Ex c), Control of Ignition Sources (Ex b),
  Pressurization (Ex p), and Liquid Immersion (Ex k) for non-electrical
  equipment (most mechanical equipment doesn't need one of these at all —
  normal operation within design parameters typically won't ignite an
  explosive atmosphere). §9.3.6 then explains the level-of-protection letter
  (a = very high, b = high, c or none = enhanced) that follows the type-of-
  protection letter in a marking — not every protection type supports every
  level (e.g. Ex n has no level letter and is Zone-2-only), and the assigned
  level correlates directly to the equipment's overall EPL rating (§9.3.7).
concept-tags: [type of protection, Ex code, intrinsic safety, flame-proof, level of protection, ignition protection]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.3.5 Type of Protection (§9.3.5.1 Electrical, §9.3.5.2 Non-Electrical), §9.3.6 Level of Protection, pp. 199-201 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-protection-techniques-applied, cvh-topic-protection-level-and-epl]
used-by: []
notes: >
  Read directly via pdftotext -layout, footer-confirmed pp. 199-201. This is
  the definitional/naming layer (what each Ex-letter means); the deeper
  practical advantages/disadvantages per technique live in §9.6, catalogued
  separately as cvh-topic-protection-techniques-applied since that's real
  applied-selection content, not just naming.
```

### §9.3.7 Equipment Protection Level (printed p. 202)

```yaml
id: cvh-cmp-zones-vs-epl-table
teaches: >
  A data table cross-referencing hazardous-area Zones (0, 1, 2, 20, 21, 22)
  to their default Equipment Protection Level (EPL) assignment — e.g. Zone 0
  requires Ga; Zone 1 allows Ga or Gb; Zone 2 allows Ga, Gb, or Gc; the
  equivalent Da/Db/Dc progression applies to the dust-atmosphere Zones 20/21/22.
concept-tags: [hazardous area classification, zone system, equipment protection level, EPL, gas dust]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.3.7 Equipment Protection Level (EPL), Figure 9.2 (printed p. 202) — 'Zones vs. Equipment Protection Levels.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  A simple two-column data table (Zone / EPL). **Confirmed genuine source
  duplicate caption**, same handling as ch3's Figure 3.24 pair and ch4's
  Figures 4.11/4.12 pair: Figure 9.3, printed immediately below this one on
  the same page, carries the IDENTICAL caption "Zones vs. Equipment
  Protection Levels" but is a genuinely different visual (a colored risk
  matrix, not a plain table) — see `cvh-cmp-zones-vs-epl-risk-matrix` below.
  Disambiguated here by figure number, per the standing convention.
```

```yaml
id: cvh-cmp-zones-vs-epl-risk-matrix
teaches: >
  A colored risk matrix cross-referencing Level of Protection (Very High /
  High / Moderate, with sub-levels a/b/c and their Ga-Dc/Gb-Db/Gc-Dc
  groupings) against Frequency and Duration (Low to Very High), color-coded
  by Default Risk Level (Acceptable / Unacceptable) and cross-referenced to
  specific Zone numbers (0/20, 1/21, 2/22) along the right edge — visualizes
  the same zone-to-EPL relationship as Figure 9.2 but framed as a risk
  acceptability grid rather than a lookup table.
concept-tags: [hazardous area classification, zone system, equipment protection level, risk matrix, default risk level]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.3.7 Equipment Protection Level (EPL), Figure 9.3 (printed p. 202) — 'Zones vs. Equipment Protection Levels.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  This is the SECOND of two real, distinct figures both captioned "Zones vs.
  Equipment Protection Levels" — confirmed by direct visual inspection: this
  one is a 3×3 colored grid with a legend (blue = Acceptable, grey =
  Unacceptable) and axis labels "Level of Protection" / "Frequency and
  Duration" / "Zone"; Figure 9.2 (above it on the same page) is a plain
  Zone/EPL lookup table. A genuine source-document duplicate caption, not an
  extraction artifact or an error introduced in this catalog — see Open
  Items.
```

```yaml
id: cvh-topic-protection-level-and-epl
kind: topic
teaches: >
  An Equipment Protection Level (EPL) rating assigns equipment based on its
  likelihood of becoming an ignition source in a gas atmosphere, dust
  atmosphere, or mine — it's the single summary rating Figures 9.2/9.3's
  zone-to-EPL tables are built around. Mine ratings: Ma (very high
  protection, unlikely to ignite even during rare malfunctions) and Mb (high
  protection, unlikely to ignite in normal operation or expected
  malfunctions). Gas ratings Ga/Gb/Gc and dust ratings Da/Db/Dc follow the
  identical very-high/high/enhanced protection logic as their Mine
  counterparts. The chapter states explicitly that Figures 9.2 and 9.3 both
  visualize the SAME default zone-to-EPL relationship — 9.2 as a lookup
  table, 9.3 as a color-coded risk-acceptability matrix (Level of Protection
  × Frequency/Duration × Zone) — not two different facts.
concept-tags: [equipment protection level, EPL, Ma, Ga, Da, zone to EPL mapping]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.3.7 Equipment Protection Level (EPL), pp. 201-202 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-zones-vs-epl-table, cvh-cmp-zones-vs-epl-risk-matrix]
relatedTopics: [cvh-topic-types-and-levels-of-protection]
used-by: []
notes: >
  Read directly via pdftotext -layout, footer-confirmed pp. 201-202. Directly
  complements both existing Figure 9.2/9.3 entries — confirms in the source's
  own words that the two figures are deliberately the same relationship shown
  two ways, matching what those entries' own notes already inferred visually.
```

### §9.4 Temperature Code (printed p. 203)

```yaml
id: cvh-cmp-temperature-codes-table
teaches: >
  A two-column table of temperature codes T1 through T6, each with its
  corresponding maximum surface temperature (e.g. T1 = 450°C/842°F down to
  T6 = 85°C/185°F) — used to classify equipment by the maximum surface
  temperature it can reach, since a hot surface can ignite an explosive gas
  atmosphere in the absence of a spark or flame.
concept-tags: [hazardous area classification, temperature code, maximum surface temperature, ignition]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.4 Temperature Code, Figure 9.4 (printed p. 203) — 'Temperature Codes.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A simple two-column data table (T Code / Maximum Surface Temperature).
```

```yaml
id: cvh-topic-temperature-code-concept
kind: topic
teaches: >
  Why a temperature code exists: an explosive gas atmosphere can ignite from
  contact with a sufficiently hot surface alone, with no spark or flame
  required — whether ignition happens depends on the surface's area,
  temperature, and the specific gas group involved. Figure 9.4's T1-T6 codes
  are the classification shorthand for maximum surface temperature. Dust
  atmospheres are marked differently — with the actual maximum surface
  temperature number, not a T-code, because dust ignition depends on
  additional factors (atmospheric concentration, dispersion, layer
  thickness) the T-code system doesn't capture. For process equipment like
  valves, the real surface temperature depends on the fluid, ambient air
  temperature, materials, and geometry — since only the end user typically
  knows true operating conditions, such equipment is marked 'TX,' meaning the
  real maximum surface temperature is operating-condition-dependent and must
  be evaluated by the end user, not fixed by the manufacturer.
concept-tags: [temperature code, T rating, TX marking, surface temperature, dust ignition]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.4 Temperature Code, pp. 202-203 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-temperature-codes-table]
relatedTopics: []
used-by: []
notes: >
  Read directly via pdftotext -layout, footer-confirmed pp. 202-203. The 'TX'
  marking concept is real, specific content the existing figure entry (a
  plain T1-T6/temperature lookup table) doesn't carry at all — genuinely new
  information, not just a restatement of the table.
```

### §9.5.4 European Union — ATEX Directive (printed p. 204)

```yaml
id: cvh-cmp-iec-vs-atex-ratings-table
teaches: >
  A comparison table cross-referencing IEC 60079-series equipment ratings
  (EPL and Group, by Mines/Gas/Dust) against ATEX Directive 2014/34/EU
  ratings (Equipment Group, and Equipment Category & Environment, e.g. 1G,
  2G, 3G for gas or 1D, 2D, 3D for dust) — shows how the two major
  international rating schemes for hazardous-area equipment map onto each
  other.
concept-tags: [hazardous area classification, IEC 60079, ATEX directive, equipment category, EPL]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.5.4 European Union (EU) — ATEX Directive 2014/34/EU, Figure 9.5 (printed p. 204) — 'IEC Ratings vs. ATEX Ratings.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A multi-row, multi-column comparison table (Mines/Gas/Dust rows; EPL, Group, Equipment Group, Equipment Category & Environment columns).
```

```yaml
id: cvh-topic-marking-nomenclature
kind: topic
teaches: >
  How to actually read a hazardous-location marking, per system. Class/
  Division has no formal naming standard, but industry commonly uses terms
  like "Explosion-Proof" (Class I Division 1), "Non-Incendive" (Class I
  Division 2), "Dust Ignition-Proof" (Class II Division 1), and "IS
  Equipment" (intrinsically-safe, always evaluated as Division 1 regardless
  of gas or dust). Zone-system naming instead uses the type-of-protection
  letter directly (see cvh-topic-types-and-levels-of-protection). Wiring
  practice codes differ by region and by which classification system is in
  use: NEC (U.S.) Articles 500-504 address Class/Division, Articles 505-506
  address Zone; CEC (Canada) Section J addresses Class/Division, Section 18
  addresses Zone; IEC 60079-14 addresses Zone worldwide. Real worked marking
  examples from the source, decoded: "CL I DIV 1 GP BCD" = Explosion-Proof
  approval for Class I Division 1, Groups B/C/D; "Ex ia IIC T6 Ga" =
  intrinsically-safe, very-high protection, gas group IIC, temperature code
  T6, EPL Ga.
concept-tags: [marking nomenclature, explosion-proof, non-incendive, NEC, CEC, wiring practice, marking example]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.5.1-9.5.3 Nomenclature (Class/Division, Zone, Wiring Practices), §9.5.5 Marking Examples, pp. 203-204 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-classification-systems, cvh-topic-types-and-levels-of-protection]
used-by: []
notes: >
  Read directly via pdftotext -layout, footer-confirmed pp. 203-204. The
  worked marking-decode examples are real, specific, and directly teachable
  — quoted rather than paraphrased where the source gives its own worked
  example.
```

```yaml
id: cvh-topic-atex-directive
kind: topic
teaches: >
  Per the EU's ATEX Directive 2014/34/EU, the classification scheme is
  deliberately simpler than IEC 60079's: only two equipment Groups (Group I =
  underground mines susceptible to firedamp; Group II = everywhere else),
  three equipment Categories (1 = very high protection, 2 = high, 3 =
  normal/moderate-or-enhanced), and two Environments (G = gas, D = dust).
  Figure 9.5 shows how these map onto IEC 60079's EPL/Group system (e.g. IEC
  EPL Ga + Group II ↔ ATEX Category 1G) — the two schemes rate the same
  underlying protection level, just with different label systems. ATEX-
  approved equipment must additionally carry the explosion-protection
  symbol, Equipment Group (I or II), Equipment Category (1/2/3), and
  Environment (G or D) on its marking.
concept-tags: [ATEX directive, equipment category, equipment group, IEC vs ATEX]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.5.4 European Union (EU) — ATEX Directive 2014/34/EU, pp. 203-204 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-iec-vs-atex-ratings-table]
relatedTopics: [cvh-topic-marking-nomenclature]
used-by: []
notes: >
  Read directly via pdftotext -layout, footer-confirmed pp. 203-204. Directly
  complements cvh-cmp-iec-vs-atex-ratings-table (Figure 9.5) — that entry
  catalogues the comparison table's existence; this topic explains what
  ATEX's own Group/Category/Environment terms mean before the table maps
  them to IEC's EPL/Group.
```

```yaml
id: cvh-topic-protection-techniques-applied
kind: topic
teaches: >
  §9.6 walks five specific protection techniques with real, practical
  advantages and disadvantages each — not just naming, but selection
  guidance. Explosion-Proof/Flame-Proof (Class I Div 1/2, Zone 1/2):
  contains an internal explosion, prevents outside ignition; familiar and
  sturdy, but circuits must be de-energized before opening housing covers,
  and opening a cover in a hazardous area voids all protection. Intrinsically
  Safe (Class I Div 1, Zone 0/1/2, dust equivalents): limits electrical/
  thermal energy below ignition levels; lower cost, safer field maintenance
  (no need to de-energize), but requires a safety barrier and is limited to
  low-power applications (DC circuits, positioners, transducers). Non-
  Incendive/Type n (Class I Div 2, Zone 2 only): equipment incapable of
  igniting under normal operation; lower cost than explosion-proof, but
  restricted to Division-2/Zone-2 use and field wiring must still be well
  protected. Increased Safety (Zone 1/2 gas): additional measures against
  arcs/sparks/overheating for equipment with no incendive devices in normal
  operation (terminal/junction boxes); cheaper wiring than flame-proof, but
  limited apparatus scope. Dust Ignition-Proof (Class II Div 1/2, Zone 20-22):
  excludes ignitable dust and contains internal arcs/sparks/heat; no barrier
  needed unlike intrinsically-safe-for-dust, and usable in high-energy
  applications.
concept-tags: [explosion-proof, intrinsically safe, non-incendive, increased safety, dust ignition-proof, protection technique selection]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.6 Protection Techniques and Methods (§9.6.1-§9.6.5), pp. 204-207 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-types-and-levels-of-protection]
used-by: []
notes: >
  Read directly via pdftotext -layout, footer-confirmed pp. 204-207. This is
  real applied selection content (tradeoffs between techniques), distinct
  from §9.3.5's definitional naming layer already catalogued as
  cvh-topic-types-and-levels-of-protection — kept as a separate entry
  deliberately rather than merged, since the two sections serve different
  jobs (what a term means vs. when to actually choose it).
```

### §9.7 Enclosure Ratings (printed p. 209)

```yaml
id: cvh-topic-enclosure-rating-standards
kind: topic
teaches: >
  Enclosures are tested for their ability to keep out liquids and dust, and
  the most widely used standards for this are NEMA 250 and UL 50 (United
  States), CSA C22.2 No. 94 (Canada), and IEC 60529 (worldwide) — UL 50 and
  CSA C22.2 No. 94 closely parallel NEMA 250's own rating scheme. Figure 9.6
  catalogues common NEMA 250 enclosure types for unclassified (general)
  locations only — types like 3/3X/3R/3RX/3S each define what they protect
  against (falling dirt, windblown dust, rain/snow/ice, corrosion) in
  slightly different combinations, and separate types (e.g. 7, 8, 9) exist
  specifically for classified/hazardous locations.
concept-tags: [enclosure rating standards, NEMA 250, UL 50, CSA C22.2, IEC 60529]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.7 Enclosure Ratings (opening paragraphs before Figure 9.6), p. 207 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-enclosure-ratings-table, cvh-cmp-ingress-protection-numerals-table]
relatedTopics: []
used-by: []
notes: >
  Read directly via pdftotext -layout, footer-confirmed p. 207. Short by
  design — the real conceptual content here is which standards bodies exist
  and how they relate, not a restatement of Figure 9.6's own table rows.
```

```yaml
id: cvh-cmp-enclosure-ratings-table
teaches: >
  A large data table cross-referencing degree-of-protection conditions
  (general access to hazardous parts; ingress of solid foreign objects —
  falling dirt, windblown dust; ingress of water — dripping, splashing,
  rain, snow, ice, hose-directed water; corrosion) against NEMA 250 enclosure
  types (3, 3X, 3R, 3RX, 3S, 3SX, 4, 4X), marked with an X where each
  enclosure type meets that protection condition, per its own test clause
  reference (e.g. §5.2, §5.5.1).
concept-tags: [enclosure rating, NEMA 250, degree of protection, ingress protection, test clause]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.7 Enclosure Ratings, Figure 9.6 (printed p. 209) — 'Explanation of Enclosure Ratings.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: >
  A large multi-row, multi-column data table with two footnoted caveats
  about ice-covered operating mechanisms.
```

```yaml
id: cvh-cmp-ingress-protection-numerals-table
teaches: >
  A two-column table describing the IEC 60529 Ingress Protection (IP) code's
  two numerals — the first numeral (0-6) describes protection against solid
  bodies (from no protection through dust-tight); the second numeral (0-9)
  describes protection against liquid (from no protection through
  high-pressure and temperature water jet).
concept-tags: [enclosure rating, IEC 60529, ingress protection, IP code, first and second numeral]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§9.7 Enclosure Ratings, Figure 9.7 (printed p. 209) — 'Description of Ingress Protection Numerals.'"
delivery: existing figure — use directly per Style Guide §5.8 default; not yet cropped/extracted from source
used-by: []
notes: A two-column data table (First Numeral / Second Numeral), the last figure of the chapter.
```

## Open items

- **Batch coverage**: all 7 real figures in the chapter (Figures 9.1–9.7) are catalogued, with no gaps in the numeric sequence. Confirmed by rendering and visually inspecting every page in the chapter's real range.
- **Topic pass (2026-09-17, `kind: topic` full-chapter pass, part of "index CVH chapters 5-15" directive):** 10 new topic entries added, covering every genuine conceptual section in the chapter — hazardous-location definitions (§9.2), the two classification systems (§9.3-9.3.2), equipment groups/subgroups (§9.3.3-9.3.4), types and levels of protection (§9.3.5-9.3.6), EPL (§9.3.7), temperature-code concept (§9.4), marking nomenclature (§9.5.1-9.5.3/9.5.5), the ATEX directive (§9.5.4), applied protection-technique selection (§9.6), and enclosure-rating standards (§9.7 intro). **§9.1 Control Valve Standards (pp. 193-195) is confirmed reference-data-only** — a flat bulleted enumeration of standards-body designations (API, ASME, CEN, ISA, NACE, etc. — code numbers and titles only), no conceptual explanation to extract, same category as a glossary or naming list. No topic entry authored for it. All cross-references (`relatedFigures`/`relatedTopics`) programmatically verified to resolve to real existing ids — zero broken references.
- **Every figure in this chapter is a data table, not a photo/diagram/graph — noted explicitly, not overlooked.** Chapter 9 is a standards-and-approvals reference chapter; unlike ch6–8's mostly photo/schematic figures, all 7 of its numbered figures are tables (equipment groupings, zone/EPL mappings, temperature codes, rating-scheme comparisons, enclosure ratings). Each was catalogued under the standing "a table-formatted item IS catalogued if the source itself gives it a Figure N.M number and caption" rule, same precedent as ch3's ISO 15848-1/FCI 91-1 tables and ch9's own Figure 9.1 — this is a real, chapter-wide pattern here, not an isolated exception.
- **Confirmed genuine source duplicate caption**: Figures 9.2 and 9.3 (printed p. 202) both carry the identical caption "Zones vs. Equipment Protection Levels" but are two genuinely different visuals — Figure 9.2 a plain lookup table, Figure 9.3 a colored risk-acceptability matrix. Both catalogued as distinct records, disambiguated by figure number, per the same handling ch3 (Figure 3.24) and ch4 (Figures 4.11/4.12) already established for this recurring source-document pattern.
- **No source citation errors found** in this chapter — every in-line text reference to a figure number (e.g. "See Figure 9.1," "defined in Figure 9.4") points to the correct figure.
- **Real chapter title correction**: this chapter's real title, per the book's own table of contents and divider page, is "Standards and Approvals" — `Emerson Control Valve Handbook.md`'s summary table previously read "Standards and Approval Agencies" (a paraphrase, not the printed title); corrected as part of this pass.
- **Cross-reference check**: `Subject-Matter Index — 14101 ch1-ch2.md`, `Subject-Matter Index — 14101 ch3.md`, and `Subject-Matter Index — bench-set-657.md` were checked directly — no existing citations into this chapter's range. Every figure catalogued fresh here.
- **No archive or legacy material** was found or consulted for this chapter — the 6th-edition Control Valve Handbook is the sole and sufficient source for all 7 figures.
- **`status` and `id` conventions**: this file was authored fresh under the corrected conventions — no drift to correct.
