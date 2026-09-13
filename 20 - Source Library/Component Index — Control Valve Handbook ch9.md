---
title: Component Index — Control Valve Handbook ch9
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Control Valve Handbook, 6th ed. (D101881X012, © Aug 2023 Emerson/Fisher)
chapter: ch9 — Standards and Approvals
updated: 2026-09-17
---

# Component Index — Control Valve Handbook, Chapter 9 (Standards and Approvals)

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

Record shape matches `Component Index — Control Valve Handbook ch3.md` and
`ch4.md` (post-2026-09-17 correction): `id` (descriptive slug) · `teaches` ·
`concept-tags` · `status` (precedence bucket) · `source` · `delivery` ·
`used-by` · `notes`.

**Cross-reference to 14101 / bench-set-657, checked directly:** none of this
chapter's 7 figures are cited by `Component Index — 14101 ch1-ch2.md`,
`Component Index — 14101 ch3.md`, or `Component Index — bench-set-657.md` —
grepped for section numbers (§9.1–§9.7) and figure numbers (9.1–9.7), no
matches. Every figure below is catalogued fresh.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | First-party Emerson document; sole source for this chapter. No archive or legacy material was consulted or found relevant to Chapter 9's content. |

## Components

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

### §9.7 Enclosure Ratings (printed p. 209)

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
- **Every figure in this chapter is a data table, not a photo/diagram/graph — noted explicitly, not overlooked.** Chapter 9 is a standards-and-approvals reference chapter; unlike ch6–8's mostly photo/schematic figures, all 7 of its numbered figures are tables (equipment groupings, zone/EPL mappings, temperature codes, rating-scheme comparisons, enclosure ratings). Each was catalogued under the standing "a table-formatted item IS catalogued if the source itself gives it a Figure N.M number and caption" rule, same precedent as ch3's ISO 15848-1/FCI 91-1 tables and ch9's own Figure 9.1 — this is a real, chapter-wide pattern here, not an isolated exception.
- **Confirmed genuine source duplicate caption**: Figures 9.2 and 9.3 (printed p. 202) both carry the identical caption "Zones vs. Equipment Protection Levels" but are two genuinely different visuals — Figure 9.2 a plain lookup table, Figure 9.3 a colored risk-acceptability matrix. Both catalogued as distinct records, disambiguated by figure number, per the same handling ch3 (Figure 3.24) and ch4 (Figures 4.11/4.12) already established for this recurring source-document pattern.
- **No source citation errors found** in this chapter — every in-line text reference to a figure number (e.g. "See Figure 9.1," "defined in Figure 9.4") points to the correct figure.
- **Real chapter title correction**: this chapter's real title, per the book's own table of contents and divider page, is "Standards and Approvals" — `Emerson Control Valve Handbook.md`'s summary table previously read "Standards and Approval Agencies" (a paraphrase, not the printed title); corrected as part of this pass.
- **Cross-reference check**: `Component Index — 14101 ch1-ch2.md`, `Component Index — 14101 ch3.md`, and `Component Index — bench-set-657.md` were checked directly — no existing citations into this chapter's range. Every figure catalogued fresh here.
- **No archive or legacy material** was found or consulted for this chapter — the 6th-edition Control Valve Handbook is the sole and sufficient source for all 7 figures.
- **`status` and `id` conventions**: this file was authored fresh under the corrected conventions — no drift to correct.
