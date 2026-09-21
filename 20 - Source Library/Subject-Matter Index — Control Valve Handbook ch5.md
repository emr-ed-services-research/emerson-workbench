---
title: Subject-Matter Index — Control Valve Handbook ch5
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Control Valve Handbook, Sixth Edition (Emerson / Fisher Controls International LLC, D101881X012, Aug 2023)
chapter: ch5 — Control Valve Sizing
updated: 2026-09-17
---

# Teaching-Subject-Matter Index — Control Valve Handbook, Chapter 5

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
| **Control Valve Handbook, Sixth Edition** | D101881X012 · Aug 2023 | `current` | First-party Emerson document; sole source for this chapter. No archive or legacy material was consulted or found relevant to Chapter 5's content — all 36 components (18 numbered figures + 1 unnumbered diagram + 17 `kind: topic` conceptual entries, see below) are catalogued directly against this edition. |

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
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Control Valve Handbook — extracted-figures/ch5-diagram-valve-selection-process-flowchart.png
    locator: ""
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

### Section 5.2–5.3 — Seat Leakage Classifications (printed pp. 107–108)

```yaml
id: cvh-topic-seat-leakage-classification
kind: topic
concept-tags: [seat leakage class, ANSI/FCI 70-2, IEC 60534-4, Class I-VI, shutoff, leak test]
status: current
teaches: >
  ANSI/FCI 70-2 and IEC 60534-4 define six seat-leakage classes (I–VI), each
  with a maximum allowable leakage, a required test medium/pressure, and a
  distinct test procedure — not just an escalating leak-rate number. Class I
  requires no test at all (user/supplier agreement only). Classes II–IV are
  air-or-water tests at a fixed differential (0.5%, 0.1%, 0.01% of rated
  capacity respectively). Class V is a water test at the valve's actual max
  service pressure drop, rated in ml/min per inch of orifice diameter per psi
  differential — a genuinely different, tighter test than II–IV, not just a
  smaller number on the same scale. Class VI (air/nitrogen, bubbles-per-minute
  against a real submerged-tube apparatus) is the tightest class and is its
  own table by port diameter (§5.3). §5.11.1.2's seat-load guidance (see
  `cvh-topic-seat-load`) is keyed directly to these same class designations —
  a higher leak class demands a higher seat load, and the two sections are
  meant to be read together, not independently.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.2, p. 107, and §5.3, p. 108 — prose and table, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-seat-load]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, pp. 107-108, confirmed
  against each page's own printed footer number). §5.2's own table (Class
  I-VI test medium/pressure/procedure) and §5.3's Class VI bubbles-per-minute
  table are both real reference tables, not figures — excluded from
  component cataloguing under the standing figures-only rule, same as every
  other reference-data table in this chapter, but their real content is
  exactly what this topic entry preserves conceptually.
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
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Control Valve Handbook — extracted-figures/ch5-fig1-flow-characteristic-curves.png
    locator: ""
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

```yaml
id: cvh-topic-flow-characteristics
kind: topic
concept-tags: [flow characteristic, inherent characteristic, installed characteristic, quick-opening, linear, equal-percentage, valve gain]
status: current
teaches: >
  Flow characteristic is the relationship between flow rate and valve travel
  (0-100%). Inherent characteristic is that relationship at a CONSTANT
  pressure drop; installed characteristic is what actually happens in
  service, where pressure drop varies with flow and other system changes —
  these are genuinely different things, not two names for the same curve.
  Quick-opening gives maximum flow change at low travel (near-linear early,
  flattening fast) — used for on/off service. Linear gives flow directly
  proportional to travel (constant valve gain at constant ΔP) — common for
  liquid-level control and constant-gain flow control. Equal-percentage gives
  flow change proportional to the flow rate already passing (not to travel
  directly) — used where the system itself absorbs most of the pressure
  drop, leaving only a small, variable fraction at the valve, and where
  pressure drop varies widely. The real selection goal is a linear INSTALLED
  characteristic and uniform installed gain — inherent characteristic is
  chosen to counteract how installed conditions will distort it, not chosen
  in isolation.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.4.1-5.4.2, pp. 108-109 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-flow-characteristic-curves-repeat]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, pp. 108-109, confirmed
  against printed footers). The inherent-vs-installed distinction and the
  "why equal-percentage" reasoning are the source's own words, not summarized
  from outside knowledge of valve characteristics.
```

### Section 5.8–5.9 — Valve Sizing Procedures: Liquids and Compressible Fluids (printed pp. 112–119)

```yaml
id: cvh-topic-liquid-sizing-methodology
kind: topic
concept-tags: [Cv, valve sizing, ISA IEC sizing procedure, piping geometry factor, choked flow, liquid sizing]
status: current
teaches: >
  The real ISA/IEC liquid-sizing procedure is a 5-step loop, not a single
  formula: (1) specify service variables (q, P1, P2/ΔP, T1, specific gravity,
  vapor pressure, critical pressure); (2) look up the unit-system constants
  N1/N2; (3) determine FP (piping geometry factor for attached
  reducers/elbows/tees — 1.0 and drops out if the valve is line-sized with no
  fittings) and FLP (the pressure-recovery factor FL adjusted for those
  fittings); (4) determine the real sizing pressure drop, ΔPsizing — the
  LESSER of the actual ΔP and the choked pressure drop ΔPchoked, because past
  a certain ΔP the liquid starts vaporizing (choked flow) and using the
  actual ΔP would overstate the real Cv needed; (5) calculate Cv, and if it
  isn't close to the Cv assumed in step 3, iterate with the new value. The
  standards apply strictly only to single-component, Newtonian fluids — the
  method's applicability itself has real, stated limits (§5.5), not
  unconditional. A real worked sample problem (§5.8.4, Class 300 globe valve,
  liquid propane, 800 gpm) shows the iteration in practice: an assumed NPS 3
  valve (Cv=121) comes up short (required Cv=125.7), so the next size up
  (NPS 4, Cv=203, FL=0.91) is tried and converges after one more iteration —
  the standard's own example of why iteration, not a single pass, is the real
  procedure.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.5, 5.8-5.8.4, pp. 109, 112-115 — prose and worked example, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-compressible-sizing-methodology, cvh-topic-flow-recovery]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, pp. 109, 112-115,
  confirmed against printed footers). The 5-step procedure and the sample
  problem's real numbers (800 gpm, P1=314.7 psia, P2=289.7 psia, Cv=121 then
  203, FL=0.89 then 0.91) are transcribed from the source's own worked
  example, not invented arithmetic.
```

```yaml
id: cvh-topic-compressible-sizing-methodology
kind: topic
concept-tags: [Cv, compressible fluid sizing, gas sizing, steam sizing, expansion factor, choked flow, xT]
status: current
teaches: >
  Compressible-fluid (gas/steam) sizing parallels the liquid procedure but
  swaps ΔP-based choking for a pressure-drop-RATIO (x = ΔP/P1) based choking
  check, and adds the expansion factor Y (accounting for gas density change
  through the valve). The 5(-6)-step procedure: specify variables (including
  molecular weight M and specific-heat ratio γ, not needed for liquids);
  determine constants; determine FP and xTP (the compressible analogue of
  FLP); determine xsizing (the lesser of the actual x and the choked xchoked)
  and Y (equal to 2/3 exactly when flow is choked); calculate Cv. Two real
  worked sample problems: natural gas through a Fisher V250 ball valve
  (§5.9.4 — the required Cv drops sharply once the actual xT at 83° opening,
  0.219, replaces the rated-travel xT of 0.137 initially assumed, converging
  at Cv=923, ~74° opening) and superheated steam through a Fisher ED valve
  (§5.9.5) — both demonstrate why using the valve's ACTUAL travel-specific
  xT, not its rated-travel value, matters to the real answer.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.9-5.9.5, pp. 116-119 — prose and worked examples, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-liquid-sizing-methodology]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, pp. 116-119, confirmed
  against printed footers). The natural-gas sample problem's real numbers
  (P1=214.7 psia, P2=64.7 psia, x=0.70, q=6.0×10^6 scfh, converged Cv=923 at
  ~74°) are transcribed from the source's own worked example.
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
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Control Valve Handbook — extracted-figures/ch5-table2-unbalance-areas.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Table-formatted but printed with a Figure number and caption, not a Table
  number — catalogued per the same rule ch2/ch3's table-shaped figures
  followed. Topical overlap, not a figure duplicate: `Subject-Matter Index — 14101
  ch3.md`'s `ch3-cmp-valve-forces-cutaway` cites this same section
  (§5.11.1.1–5.11.1.4, the A+B+C+D force breakdown) but against a different
  image (an archive globe-valve cutaway, not this data table) — no id
  collision, flagged here for awareness only.
```

```yaml
id: cvh-topic-valve-balance
kind: topic
concept-tags: [actuator sizing, unbalance force, valve balance, balanced valve, unbalanced valve, A+B+C+D force breakdown]
status: current
teaches: >
  Actuators are selected by matching the force needed to stroke the valve
  (torque, for rotary valves) — for globe valves, total force required =
  A + B + C + D. The unbalance force (A) results from fluid pressure at
  shutoff: net pressure differential × net unbalance area. Net unbalance
  area is the port area on a single-seated, flow-up design; for a balanced
  valve there is still a small unbalance area (obtained from the
  manufacturer) — a balanced trim design routes pressure to both sides of
  the plug to largely cancel the net force, but never completely. B is seat
  load (see `cvh-topic-seat-load`); C is packing friction, set by stem
  size, packing type, and compressive load, not perfectly repeatable
  (live-loaded/graphite packing can add significant friction); D is
  additional application-specific forces (e.g. bellows stiffness, unusual
  sealing friction). Figure 5.2's unbalance-area table is read by finding
  the row for the actual port diameter and the column matching whether the
  trim is balanced or unbalanced.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.11–5.11.1.1, p. 123 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-unbalance-area-table]
relatedTopics: [cvh-topic-seat-load]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext -layout, pp. 122-125,
  confirmed against the page's own printed footer numbers) — the "Total
  force required = A + B + C + D" line and each lettered force's own
  paragraph are the source's own words, not summarized from outside
  knowledge. Confirms cvh-cmp-unbalance-area-table's own `teaches` field is
  accurate to the real prose.
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
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Control Valve Handbook — extracted-figures/ch5-fig3-seat-load-graph.png
    locator: ""
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Five labelled diagonal lines (Class II through Class V, with two Class V sub-cases for metal-seat variants), axes Required Seat Load (LBF per Lineal Inch) vs. Shutoff Pressure Drop (PSI).
```

```yaml
id: cvh-topic-seat-load
kind: topic
concept-tags: [actuator sizing, seat load, leak class, shutoff pressure drop, ANSI/FCI 70-2, IEC 60534-4]
status: current
teaches: >
  Seat load (usually lbf per lineal inch of port circumference) is the
  force (B in the A+B+C+D actuator-force total) needed to meet the
  shutoff requirement — specifically the factory acceptance test leak
  classification (ANSI/FCI 70-2 / IEC 60534-4 classes II through VI). The
  source cautions these leak classes describe factory test conditions, not
  a guarantee of field performance, and recommends a higher-than-minimum
  seat load to prolong seat life and shutoff capability where tight
  shutoff matters (or a lower leak class where it doesn't). Figure 5.3
  plots minimum required seat load against shutoff pressure drop as
  separate lines per leak class (II-V, with two Class V metal-seat
  sub-cases) — read it by finding the shutoff-pressure-drop value on the
  x-axis and reading up to the correct class's line. Figure 5.4 is the
  companion recommended-seat-load lookup table by class (I-VI); its Class V
  row explicitly instructs the reader back to Figure 5.2 rather than giving
  a flat number, since Class V's real seat load depends on the valve's own
  unbalance area.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.11.1.2, p. 124 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-seat-load-graph, cvh-cmp-recommended-seat-load-table, cvh-cmp-unbalance-area-table]
relatedTopics: [cvh-topic-valve-balance]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext -layout, p. 124,
  confirmed against the page's own printed footer). The Figure 5.4→Figure
  5.2 cross-reference is the source's own internal instruction, not an
  inference — confirms cvh-cmp-recommended-seat-load-table's existing
  `notes` field describing this same cross-reference.
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
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Control Valve Handbook — extracted-figures/ch5-table4-recommended-seat-load.png
    locator: ""
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
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Control Valve Handbook — extracted-figures/ch5-table5-packing-friction-values.png
    locator: ""
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: Large table-formatted figure spanning stem sizes 5/16" through 2", printed with a Figure number, catalogued per the same table-as-figure rule.
```

```yaml
id: cvh-topic-packing-friction
kind: topic
concept-tags: [packing friction, force C, live-loaded packing, graphite packing, stem seal friction]
status: current
teaches: >
  Packing friction (force C in the A+B+C+D total) is set by stem size,
  packing type, and how much compressive load the process or the bolting
  places on the packing — and, distinctly from A/B/D, it is explicitly NOT
  100% repeatable: live-loaded packing designs can carry significant
  friction, especially graphite packing. Figure 5.5's real values show why
  this matters concretely: for a given stem size and pressure class, single
  PTFE packing runs far lower friction than graphite ribbon/filament (e.g.
  5/16" stem, Class 125: 20 lbf PTFE single vs. no graphite value tabulated;
  at 3/4" stem, Class 600: 320 lbf graphite vs. not offered in PTFE at that
  class) — the packing MATERIAL choice, not just the seal design, is itself
  a real force input an actuator sizing has to account for, and it varies
  by roughly an order of magnitude across the real table.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.11.1.3, p. 125 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-packing-friction-values-table]
relatedTopics: [cvh-topic-valve-balance]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, p. 125, confirmed against
  the printed footer). `cvh-topic-valve-balance` already mentions packing
  friction in one sentence as part of the A+B+C+D overview; this entry
  expands it to the real depth the source itself gives — the
  not-100%-repeatable claim and Figure 5.5's actual comparative numbers,
  neither of which the summary sentence carried.
```

```yaml
id: cvh-topic-actuator-force-selection
kind: topic
concept-tags: [actuator selection, bench set, precompression, diaphragm actuator, piston actuator, stem buckling]
status: current
teaches: >
  Knowing the required force (A+B+C+D) is not the same as selecting an
  actuator — the source's own worked example: 275 lbf required, an
  air-to-open diaphragm actuator with 100 sq. in. area and a 6-15 psig bench
  set is checked by finding the PRECOMPRESSION force at the bottom of the
  operating range (3 psig × 100 sq. in. = 300 lbf, since the 3-15 psig
  operating range starts 3 psig above the 6 psig bench-set floor) — 300 lbf
  exceeds the 275 lbf required, so the selection is adequate. Piston
  actuators without springs size more simply: thrust = piston area × minimum
  supply pressure. The source also names a real, distinct risk in the
  opposite direction: an actuator that supplies TOO MUCH force can buckle
  the stem, bend it enough to leak, or damage valve internals — actuator
  selection is a real match to a target, not "bigger is always safer."
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.11.2, p. 126 — prose and worked example, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-valve-balance, cvh-topic-seat-load]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, p. 126, confirmed against
  the printed footer). The 275 lbf / 100 sq in. / 6-15 psig bench-set /
  300 lbf precompression numbers are transcribed from the source's own
  worked example, not invented.
```

### Section 5.12–5.13 — Actuator Sizing for Rotary Valves (printed pp. 126–128)

```yaml
id: cvh-topic-rotary-actuator-torque
kind: topic
concept-tags: [rotary actuator sizing, breakout torque, dynamic torque, torque factors, rotary valve]
status: current
teaches: >
  Rotary-valve actuator sizing matches TORQUE, not force, to the actuator's
  torque output — the same fundamental process as globe-valve force sizing,
  applied to rotation instead of travel. Real torque is the sum of several
  components, but the source pre-combines them into two practical equations:
  breakout torque TB = A(ΔPshutoff) + B (the torque needed to start the valve
  moving from a dead stop against shutoff pressure), and dynamic torque TD =
  C(ΔPeff) (the torque needed to continue moving once underway) — A, B, and
  C are real, valve-design-specific factors from §5.13's own tables (e.g. a
  6-inch V-Notch ball valve: A=1.80, B=500, C=1.10, max TD=4140 lbf·in).
  Maximum rotation is normally 90°, but some pneumatic actuators limit it to
  60° or 75° — a real design tradeoff, since limiting rotation allows higher
  initial spring compression (more breakout torque) but changes the
  actuator lever's effective length, which published torque values already
  account for.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.12-5.13.2.1, pp. 126-128 — prose, not figure-anchored (5.13's own torque-factor tables are reference data, excluded under the figures-only rule)"
relatedFigures: []
relatedTopics: [cvh-topic-valve-balance]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, pp. 126-128, confirmed
  against printed footers). The 6-inch V-Notch ball valve figures (A=1.80,
  B=500, C=1.10, max TD=4140) are transcribed directly from §5.13.1's real
  table, not invented.
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
id: cvh-topic-vena-contracta
kind: topic
concept-tags: [vena contracta, flow restriction, pressure recovery, choked flow]
status: current
teaches: >
  As liquid flow passes through a restriction (normally the valve port),
  the flow stream necks down; its minimum cross-sectional area occurs just
  downstream of the physical restriction, at a point called the vena
  contracta. To maintain steady flow, velocity must be greatest there
  (where area is least) — that velocity increase is accompanied by a
  substantial decrease in pressure at the vena contracta. Further
  downstream, as the stream expands into a larger area, velocity decreases
  and pressure increases again — but downstream pressure never recovers
  completely to equal the pressure that existed upstream of the valve; the
  pressure differential (ΔP) across the valve measures the energy
  dissipated in the valve. This mechanism occurs at the point of greatest
  restriction in any valve — what differs between valve designs is how
  much pressure recovers afterward (see `cvh-topic-flow-recovery`).
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.14.1, p. 128 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-vena-contracta-diagram]
relatedTopics: [cvh-topic-flow-recovery, cvh-topic-cavitation, cvh-topic-flashing]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext -layout, p. 128,
  confirmed against the page's own printed footer). Confirms
  cvh-cmp-vena-contracta-diagram's own `teaches` field is accurate to the
  real prose it's paired with.
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
id: cvh-topic-flow-recovery
kind: topic
concept-tags: [pressure recovery, high-recovery valve, low-recovery valve, cavitation risk, ball valve]
status: current
teaches: >
  The pressure differential that actually matters for flashing/cavitation
  is specifically the drop between the valve inlet and the vena contracta,
  not the overall ΔP across the valve. Different valve designs recover
  pressure differently downstream of the vena contracta: a high-recovery
  design (the source's own example: a streamlined ball valve) has less
  internal turbulence and dissipates less energy, so downstream pressure
  recovers closer to its original value. A lower-recovery design has
  greater internal turbulence and dissipation, and its downstream pressure
  recovers less. The source states the counter-intuitive consequence
  directly: "High-recovery valves tend to be more subject to cavitation,
  since the vena contracta pressure is lower and more likely to reach down
  to the liquid's vapor pressure" — a design that dissipates less energy
  overall is the one more likely to let local pressure at the vena
  contracta fall far enough to form vapor bubbles.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.14.1, pp. 128-129 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-pressure-profile-high-low-recovery, cvh-cmp-vena-contracta-diagram]
relatedTopics: [cvh-topic-vena-contracta, cvh-topic-cavitation]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext -layout, pp. 128-129,
  confirmed against the page's own printed footers) — the quoted sentence
  is verbatim from the source, not paraphrased. This is the real mechanism
  behind the counter-intuitive finding CVE1's rebuild attempts already
  used; this entry is what lets that finding actually be explained to a
  learner instead of just asserted.
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
id: cvh-topic-flashing
kind: topic
concept-tags: [flashing, erosion damage, valve selection, phase change, vapor bubbles]
status: current
teaches: >
  If pressure at the vena contracta drops below the fluid's vapor pressure,
  vapor bubbles form there. If downstream pressure then stays below vapor
  pressure (unlike cavitation, where it recovers back above), those
  bubbles remain in the downstream system rather than collapsing — this
  condition is flashing. Flashing produces a smooth, polished-metal erosion
  pattern (Figure 5.8), normally worst at the point of highest velocity,
  usually at or near the valve plug/seat-ring seat line. Because the
  variables that define flashing (P2, set by downstream process/piping,
  and vapor pressure, set by the fluid and its temperature) are not
  directly controlled by the valve, the source states plainly there is no
  way for any control valve to prevent flashing — the only real remedy is
  selecting valve geometry/materials to minimize damage: fewer fluid
  directional changes (sliding-stem angle valves, or rotary designs like
  eccentric-plug/segmented-ball that offer straight-through flow paths),
  expanded flow area downstream of the throttling point to reduce erosive
  velocity, and harder seating-surface materials. Flashing combined with a
  corrosive fluid (the source's example: flashing water in a steel valve)
  is especially damaging since corrosion and erosion compound each other.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.14.1 (mechanism), p. 129, and §5.14.2 'Valve Selection for Flashing Service,' pp. 129-130 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-flashing-damage-photo, cvh-cmp-vena-contracta-diagram]
relatedTopics: [cvh-topic-cavitation, cvh-topic-vena-contracta]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext -layout, pp. 129-130,
  confirmed against the page's own printed footers). Confirms
  cvh-cmp-flashing-damage-photo's own `teaches` field is accurate to the
  real prose.
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

```yaml
id: cvh-topic-cavitation
kind: topic
concept-tags: [cavitation, erosion damage, valve selection, phase change, vapor bubbles]
status: current
teaches: >
  If pressure at the vena contracta drops below the fluid's vapor pressure,
  vapor bubbles form there; if downstream pressure then rises back above
  vapor pressure (the opposite of flashing, where it stays below), those
  bubbles collapse/implode very close to where they formed. Collapse
  releases energy, produces a noise "similar to what one would expect if
  gravel were flowing through the valve," and — if it happens near solid
  surfaces — tears away material into a rough, cinder-like eroded surface
  (Figure 5.9), distinctly different from flashing's smooth polish.
  Selection/treatment per §5.14.3, three methods: (1) eliminate cavitation
  by managing pressure drop — split the total ΔP into smaller stages with
  multiple-stage trim so no single stage's vena-contracta pressure drops
  below vapor pressure; (2) don't eliminate it, but isolate/harden the
  surfaces cavitation impacts, same approach as flashing mitigation; (3)
  change the system so the valve is no longer choked — raise P2 (relocate
  the valve to a point with more downstream static head, or add a
  backpressure device) so vena-contracta pressure never falls below vapor
  pressure, noting the tradeoff that a backpressure device can transfer the
  cavitation problem to itself instead of eliminating it.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.14.1 (mechanism), pp. 128-129, and §5.14.3 'Valve Selection for Cavitation Service,' p. 130 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-cavitation-damage-photo, cvh-cmp-vena-contracta-diagram, cvh-cmp-pressure-profile-high-low-recovery]
relatedTopics: [cvh-topic-flashing, cvh-topic-vena-contracta, cvh-topic-flow-recovery]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext -layout, pp. 128-130,
  confirmed against the page's own printed footers) — the quoted noise
  description is verbatim from the source. Confirms
  cvh-cmp-cavitation-damage-photo's own `teaches` field is accurate to the
  real prose.
```

```yaml
id: cvh-topic-cavitation-flashing-mitigation
kind: topic
concept-tags: [cavitation mitigation, flashing mitigation, valve selection, multi-stage trim, hard materials, straight-through flow path]
status: current
teaches: >
  Flashing CANNOT be prevented by the valve — P2 and Pv are set by the
  downstream process/piping and the fluid/temperature, neither of which the
  valve controls — so mitigation is entirely about minimizing damage:
  choosing a straight-through flow path (sliding-stem angle valves, eccentric
  rotary plug, segmented ball — fewer directional changes means fewer
  particle impacts), expanded downstream flow areas (lower erosive
  velocity), and harder seating materials. Cavitation, by contrast, CAN
  genuinely be eliminated (not just minimized) by managing pressure drop:
  splitting the total drop across multiple trim stages keeps each stage's own
  vena-contracta pressure above vapor pressure, so no bubbles form at all —
  this is a different category of fix than flashing's damage-reduction
  approach. Where elimination isn't practical, cavitation damage can still be
  isolated/hardened the same way flashing is, or the system itself can be
  changed to raise P2 (relocating the valve for more downstream static head,
  or adding a backpressure orifice — with the real caveat that this can just
  transfer the cavitation to the orifice plate instead of removing it).
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.14.2-5.14.3, pp. 129-130 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-flashing-damage-photo, cvh-cmp-cavitation-damage-photo]
relatedTopics: [cvh-topic-cavitation, cvh-topic-flashing, cvh-topic-flow-recovery]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, pp. 129-130, confirmed
  against printed footers). Distinct from cvh-topic-cavitation/
  cvh-topic-flashing, which explain the MECHANISM — this entry is the
  source's own practical mitigation/valve-selection guidance, a genuinely
  separate teaching unit the mechanism topics don't cover.
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

```yaml
id: cvh-topic-noise-generation-and-prediction
kind: topic
concept-tags: [aerodynamic noise, hydrodynamic noise, IEC 60534-8-3, noise prediction, trim noise, valve outlet noise]
status: current
teaches: >
  Two distinct noise sources contribute to total valve noise: trim noise
  (depends on trim type/geometry) and valve outlet noise (depends on outlet
  area, outlet Mach number, any downstream expander) — not one combined
  number. The IEC 60534-8-3 aerodynamic prediction method is a real 5-step
  chain, each step converting one physical quantity to the next: (1) total
  stream power at the vena contracta (from mass flow and vena-contracta
  velocity); (2) the fraction of that power that is ACOUSTIC power (an
  "acoustic efficiency" that differs across five defined pressure-ratio
  regimes — a quieter valve design is explicitly one with lower acoustic
  efficiency); (3) convert acoustic power to a sound-pressure frequency
  spectrum; (4) account for the pipe wall's own transmission loss (fluid
  noise → pipe vibration → pipe-wall vibration → radiated sound, a real
  three-step physical chain, not a single attenuation number); (5) account
  for distance to the observer. Hydrodynamic noise is different in kind, not
  just degree — it's the noise cavitation itself produces (traditionally
  described as "rocks flowing inside the pipe"), tightly linked to whether
  cavitation is occurring at all, not a separate independent noise source to
  predict the same way.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.15-5.15.2, pp. 130-132 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-noise-control-strategy, cvh-topic-cavitation]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, pp. 130-132, confirmed
  against printed footers). The 5-step chain and the "rocks flowing inside
  the pipe" description are the source's own framing, not summarized from
  outside acoustics knowledge.
```

```yaml
id: cvh-topic-noise-control-strategy
kind: topic
concept-tags: [noise control, source treatment, path treatment, anti-noise trim, inline diffuser, inline silencer, dBA reduction]
status: current
teaches: >
  Noise control is either SOURCE treatment (prevent/attenuate noise where
  it's generated — always preferred when feasible) or PATH treatment
  (increase the transmission path's impedance so less acoustic energy
  reaches the receiver) — genuinely different strategies, not two names for
  the same fix. Source treatment for gas service uses cage-style trim: a
  multi-slot cage (many narrow parallel slots) or a two-stage cage
  (optimized for high ΔP/P1 ratios, up to 30 dBA reduction alone, 40 dBA
  combined with other strategies — unique passage shape, multistage pressure
  reduction, frequency-spectrum shifting, and keeping exit jets independent
  so they don't recombine and regenerate noise). For liquid service, source
  treatment specifically targets eliminating/minimizing cavitation itself
  (the real noise driver). Series-restriction diffusers (splitting the total
  drop between the valve and a downstream fixed restriction, effective above
  ΔP/P1 > 0.8) and inline silencers (absorption-type, for high-mass-flow/
  high-pressure-ratio gas systems, up to ~25 dBA) are both PATH treatments —
  they don't touch the noise-generation mechanism, they reduce what escapes.
  External treatment (heavy-wall pipe, acoustical insulation, isolation
  enclosures) is path treatment's last resort — genuinely limited because
  noise travels long distances via the fluid stream itself, so the fix's
  effectiveness ends exactly where the treatment ends.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.16, pp. 132-134 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-noise-reduction-trim-photo, cvh-cmp-valve-inline-diffuser-photo, cvh-cmp-valve-vent-diffuser-diagram, cvh-cmp-cavitation-elimination-valve-design, cvh-cmp-inline-silencer-photo]
relatedTopics: [cvh-topic-noise-generation-and-prediction, cvh-topic-cavitation-flashing-mitigation]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, pp. 132-134, confirmed
  against printed footers). The specific dBA figures (15-20, 30, 40, ~25) are
  transcribed from the source's own claims, not estimated. All five
  relatedFigures ids individually verified to exist in this file (grep-checked
  after an initial guess got two ids wrong — cvh-cmp-valve-inline-diffuser-photo
  and cvh-cmp-valve-vent-diffuser-diagram both carry the "valve-" prefix this
  chapter's other figure ids use, corrected before finalizing).
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
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Control Valve Handbook — extracted-figures/ch5-fig17-packing-guidelines-100ppm.png
    locator: ""
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
  - doc: 20 - Source Library/Handbooks & Sourcebooks/Control Valve Handbook — extracted-figures/ch5-fig18-packing-guidelines-non-environmental.png
    locator: ""
delivery: analytical graph — falls under Style Guide §5 if ever placed on a slide
used-by: []
notes: Direct companion to Figure 5.17 — same chart shape and packing-system set, wider envelopes throughout (e.g. temperature axis extends to 1200°F vs. Figure 5.17's ~600°F).
```

```yaml
id: cvh-topic-packing-selection-criteria
kind: topic
concept-tags: [packing selection, 100 PPM service, non-environmental service, fugitive emissions, sliding-stem packing, rotary packing]
status: current
teaches: >
  Packing selection is driven by TWO separate axes, not one: pressure/
  temperature limits AND whether the service is 100 PPM (fugitive-emissions-
  regulated) or non-environmental (standard) — the same packing system can
  have a much narrower real operating envelope under the 100 PPM standard
  than under non-environmental service (e.g. HIGH-SEAL Graphite ULF: 1500 psi
  / -7 to 315°C for 100 PPM vs. 4200 psi / -198 to 538°C non-environmental —
  roughly a 3x pressure difference and a much wider temperature range for the
  identical physical packing, purely because of which emissions standard
  applies). §5.18.1/5.18.2 give separate guideline sets for sliding-stem vs.
  rotary valves — packing selection is not a single universal answer across
  valve body styles either. The two application-guideline charts (Figures
  5.17/5.18) are read the same way as the seat-load graph (`cvh-topic-seat-
  load`): find the packing system's own labelled envelope and check whether
  the real service's pressure/temperature point falls inside it.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§5.18-5.18.2, pp. 136-138 — prose and tables, not figure-anchored (the two application-guideline charts are separately catalogued as cvh-cmp-packing-guidelines-chart-100ppm/-non-environmental)"
relatedFigures: [cvh-cmp-packing-guidelines-chart-100ppm, cvh-cmp-packing-guidelines-chart-non-environmental]
relatedTopics: [cvh-topic-packing-friction, cvh-topic-seat-load]
used-by: []
notes: >
  Read directly from the real PDF text (pdftotext, pp. 136-138, confirmed
  against printed footers). The HIGH-SEAL Graphite ULF 1500/4200 psi and
  -7 to 315°C / -198 to 538°C comparison is transcribed directly from
  §5.18.1's own table (footnote 4 on the higher pressure value verified
  present in the real table, not dropped).
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
  overlaps found: `Subject-Matter Index — 14101 ch1-ch2.md`'s
  `ch1-cmp-fci-leakage-classes` cites CVH §5.2–§5.3 (the seat-leakage-class
  definitions) — that section's own tables carry no figure number, so there
  is no figure to cross-reference or duplicate. `Subject-Matter Index — 14101
  ch3.md`'s `ch3-cmp-valve-forces-cutaway` cites CVH §5.11.1.1–5.11.1.4 (the
  A+B+C+D actuator-force breakdown) but against a different image (an
  archive globe-valve cutaway) than this file's `cvh-cmp-unbalance-area-table`
  (Figure 5.2) — noted in that record's own notes for awareness; no id
  collision, no duplicate. `Subject-Matter Index — bench-set-657.md` was also
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
- **Full-chapter `kind: topic` pass (2026-09-17), completing the earlier
  six-topic reactive pass.** The six topics added same-night in response to
  specific CVE1 gaps (`cvh-topic-cavitation`, `-flashing`, `-flow-recovery`,
  `-vena-contracta`, `-valve-balance`, `-seat-load`) covered only what one
  scenario happened to need. This pass read the chapter's real body prose
  start to finish (`pdftotext` against every real page, 98–149, footer-number
  confirmed) and added 11 more genuine concepts the earlier pass didn't touch:
  `cvh-topic-seat-leakage-classification` (§5.2–5.3), `cvh-topic-flow-
  characteristics` (§5.4), `cvh-topic-liquid-sizing-methodology` (§5.5, 5.8),
  `cvh-topic-compressible-sizing-methodology` (§5.9), `cvh-topic-packing-
  friction` (§5.11.1.3 — expanding what `cvh-topic-valve-balance` only
  mentioned in one sentence), `cvh-topic-actuator-force-selection` (§5.11.2),
  `cvh-topic-rotary-actuator-torque` (§5.12–5.13), `cvh-topic-cavitation-
  flashing-mitigation` (§5.14.2–5.14.3 — practical valve-selection guidance,
  distinct from the mechanism topics), `cvh-topic-noise-generation-and-
  prediction` (§5.15), `cvh-topic-noise-control-strategy` (§5.16), and
  `cvh-topic-packing-selection-criteria` (§5.18). 17 `kind: topic` entries
  total, 36 components in the chapter overall.
- **Sections confirmed as reference-data only, no topic entry authored:**
  §5.1 (face-to-face dimension tables), §5.6 (abbreviations/terminology
  glossary — a symbol table, not a concept), §5.7 (equation constants),
  §5.10 (representative sizing-coefficient tables), §5.13's own torque-factor
  tables (the real torque CONCEPT is captured in `cvh-topic-rotary-actuator-
  torque`; the tables themselves are data), §5.17 (noise summary — a
  wrap-up paragraph pointing to prediction/control software, no new
  concept), §5.19–§5.22 (material designations, pressure-temperature
  ratings, non-metallic abbreviations, non-destructive-examination method
  names) — all read directly, confirmed to be pure lookup data or brief
  method-naming with no explanatory prose beyond what a table caption
  already states, same disposition as ch13's own "figures-only rule excludes
  tables" precedent extended to concepts.
- **Competency-map re-examination (per Franz's explicit sequencing:
  full topic index → re-examine map → THEN outline → THEN rebuild):**
  see `10 - Courses/Control Valve Engineering 1/Curriculum — CVE1.md`'s own
  status note for the conclusion and reasoning — not duplicated here.
