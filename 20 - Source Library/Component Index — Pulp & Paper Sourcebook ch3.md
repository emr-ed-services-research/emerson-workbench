---
title: Component Index — Pulp & Paper Sourcebook ch3
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch3 — Liquid Valve Sizing
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 3

**Chapter 3 — "Liquid Valve Sizing."** Standing full-chapter cataloguing
pass, continuing the whole-book completion pass begun with Chapter 1 (see
that file's intro for the resume context). Every real page in the chapter's
confirmed range was rendered and read directly (rigor standard). This is a
sizing chapter — mostly equations, worked examples, and tables — with only
6 real figures across 14 pages.

Chapter boundaries confirmed directly by rendering: PDF page 45 = printed p.
3-1 (Chapter 3 divider, "Liquid Valve Sizing"), PDF page 58 = printed p.
3-14, confirmed **blank**. PDF page 59 = Chapter 4 divider ("Cavitation and
Flashing"). Zero page offset throughout (PDF page = printed page number +
44). Chapter 3 = PDF pp. 45-58.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. The two standard ISA liquid-critical-pressure-ratio charts (Figures 3-1/3-3) share a printed drawing number with an Oil & Gas ch3 / Power & Severe Service ch3 record — cross-referenced in `notes`. The three pulp-stock correction-factor charts (Figures 3-4–3-6) are genuinely unique to this book — no Pulp & Paper-specific figures exist in the Oil & Gas or Power & Severe Service sourcebooks. |

## Components

### Chapter 3 — Fundamentals and the Sizing Equation (printed pp. 3-2–3-9)

```yaml
id: pp-cmp-liquid-critical-pressure-ratio-water
kind: figure
teaches: >
  The liquid critical pressure ratio factor F_F for water, read graphically
  against absolute vapor pressure at the valve inlet (dual-scale abscissa in
  psia and bar) — used in the q_max (choked flow) and ΔP_max (allowable
  sizing pressure drop) equations of the liquid valve sizing procedure; an
  alternative to the equation F_F = 0.96 − 0.28·√(P_v/P_c).
concept-tags: [liquid critical pressure ratio, F_F, water, vapor pressure, choked flow, q_max, delta P_max, liquid valve sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 3-1 'Liquid Critical Pressure Ratio Factor for Water,' p. 3-2 (PDF p. 46), drawing A2737-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph, not a cutaway — Style Guide §5 applies if ever placed
  on a slide. **Cross-reference (2026-09-15):** identical drawing number
  (A2737-1) to `ogas-cmp-ff-chart-water` in `Component Index — Oil & Gas
  Sourcebook ch3.md` and the corresponding record in `Component Index —
  Power & Severe Service Sourcebook ch3.md` — the same standard ISA chart
  reused across all three Sourcebooks. **This exact same drawing (A2737-1)
  is reprinted verbatim later in this same chapter as Figure 3-3** (p. 3-9)
  — see `pp-cmp-liquid-critical-pressure-ratio-water-repeat`'s own notes; a
  genuine intra-chapter reprint, not a duplicate-figure-number error (each
  instance carries its own distinct figure number and page).
```

```yaml
id: pp-cmp-liquid-critical-pressure-ratio-nonwater
kind: figure
teaches: >
  The liquid critical pressure ratio factor F_F for liquids other than
  water, read graphically against the dimensionless ratio of absolute vapor
  pressure to absolute thermodynamic critical pressure (P_v/P_c) — same
  underlying equation as Figure 3-1, generalized from water to any liquid.
concept-tags: [liquid critical pressure ratio, F_F, general liquid, vapor pressure ratio, critical pressure, choked flow, liquid valve sizing]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 3-2 'Liquid Critical Pressure Ratio Factor for Liquids Other Than Water,' p. 3-4 (PDF p. 48), drawing A2738-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph, not a cutaway — Style Guide §5 applies if ever placed
  on a slide. Checked against the whole library: no exact drawing-number
  match found. Oil & Gas ch3's conceptually identical chart
  (`ogas-cmp-ff-chart-nonwater`) is explicitly noted in that record as
  carrying **no printed drawing number at all** — this book's copy prints
  "A2738-1" where O&G's does not, confirmed by direct visual comparison, so
  no drawing-number cross-reference can be made even though the chart
  content and standard ISA sourcing are the same family as Figure 3-1's
  confirmed A2737-1 match. Not merged; flagged as the same standard-chart
  family without a hard drawing-number confirmation.
```

```yaml
id: pp-cmp-liquid-critical-pressure-ratio-water-repeat
kind: figure
teaches: >
  The same liquid critical pressure ratio factor F_F chart for water as
  Figure 3-1, reprinted here (identical drawing, identical caption) at the
  point in the step-by-step IEC sizing procedure where F_F for water is
  actually needed — a procedural convenience repeat, not new content.
concept-tags: [liquid critical pressure ratio, F_F, water, choked flow, liquid valve sizing, IEC procedure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 3-3 'Liquid Critical Pressure Ratio Factor for Water,' p. 3-9 (PDF p. 53), drawing A2737-1"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Verbatim intra-chapter reprint of `pp-cmp-liquid-critical-pressure-
  ratio-water`** (Figure 3-1, p. 3-2) — identical drawing number (A2737-1),
  identical caption, identical chart content, confirmed by direct visual
  comparison of both rendered pages. Catalogued as its own record because it
  carries its own distinct printed figure number (3-3) and page location,
  consistent with the standing "one record per real numbered figure"
  convention — not a duplicate-figure-number error (that edge case is for
  two *different* figures sharing one number; this is the same figure
  legitimately reprinted under a second number). Same cross-reference to
  Oil & Gas ch3 / Power & Severe Service ch3 applies as noted on Figure 3-1.
```

### Chapter 3 — Sizing for Pulp Stock (printed pp. 3-11–3-13)

```yaml
id: pp-cmp-pulp-stock-correction-factors-kraft
kind: figure
teaches: >
  Pulp stock correction factor K_p plotted against pressure drop for Kraft
  pulp stock at consistencies from 2% to 16% — used in the pulp-stock
  sizing equation Q = C_v·K_p·√ΔP, the modified form of the basic liquid
  sizing equation that accounts for pulp stock's non-Newtonian flow
  behavior (dominant effects: pulp type, consistency, pressure
  differential).
concept-tags: [pulp stock correction factor, Kraft pulp, consistency, pulp stock sizing, non-Newtonian flow]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 3-4 'Pulp Stock Correction Factors for Kraft Pulp,' p. 3-12 (PDF p. 56), drawing E1377"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph (8 labeled consistency curves, 2%-16%), Style Guide §5
  applies if ever placed on a slide. Genuinely unique to this Pulp & Paper
  book — checked against the whole library, no match found in Oil & Gas or
  Power & Severe Service (neither book handles pulp-stock sizing at all,
  consistent with this being industry-specific content).
```

```yaml
id: pp-cmp-pulp-stock-correction-factors-mechanical
kind: figure
teaches: >
  Pulp stock correction factor K_p plotted against pressure drop for
  mechanical pulp stock at consistencies from 2% to 16% — the mechanical-
  pulp counterpart to Figure 3-4's Kraft-pulp chart, same K_p sizing
  equation, different pulp-type curve family (extends to a higher pressure
  drop range, 0-70 psid vs. Kraft's 0-50 psid).
concept-tags: [pulp stock correction factor, mechanical pulp, consistency, pulp stock sizing, non-Newtonian flow]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 3-5 'Pulp Stock Correction Factors for Mechanical Pulp,' p. 3-13 (PDF p. 57), drawing E1378"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph (8 labeled consistency curves, 2%-16%). Genuinely
  unique to this book — no match found elsewhere in the library.
```

```yaml
id: pp-cmp-pulp-stock-correction-factors-recycled
kind: figure
teaches: >
  Pulp stock correction factor K_p plotted against pressure drop for
  recycled pulp stock at consistencies from 4% to 14% — the recycled-pulp
  counterpart to Figures 3-4/3-5, one fewer consistency curve (no 2% or
  16% curve) than the other two pulp types, over a 0-80 psid range.
concept-tags: [pulp stock correction factor, recycled pulp, consistency, pulp stock sizing, non-Newtonian flow]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 3-6 'Pulp Stock Correction Factors for Recycled Pulp,' p. 3-13 (PDF p. 57), drawing E1379"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph (6 labeled consistency curves, 4%-14%). Printed on the
  same page as Figure 3-5 (both on p. 3-13/PDF 57), stacked vertically.
  Genuinely unique to this book — no match found elsewhere in the library.
```

```yaml
id: pp-topic-pulp-stock-sizing-methodology
kind: topic
teaches: >
  Flowing pulp stock behaves differently from water or viscous Newtonian
  fluids, so standard liquid sizing must be modified for it: Q = Cv·Kp·√ΔP
  (a modified form of the basic liquid sizing equation), where Kp is the
  pulp stock correction factor — the ratio of pulp stock flow rate to water
  flow rate under the same flowing conditions. Kp in theory depends on pulp
  type, consistency, freeness, fiber length, valve type, and pressure drop,
  but in practice the dominant effects are just three: pulp type,
  consistency, and pressure differential — which is why Figures 3-4/3-5/3-6
  chart Kp against ΔP for exactly three pulp types (Kraft, mechanical,
  recycled) at several consistencies. Worked example transcribed exactly:
  1000 gpm of 8% consistency Kraft pulp stock, ΔP = 16 psid, Kp = 0.83 (from
  Figure 3-5 — the source's own text cites "figure 3-5" for this Kraft
  example even though Figure 3-4 is the Kraft chart; flagged as a probable
  source erratum, not corrected here) → Cv = 1000/(0.83·√16) = 301. Once Kp
  is known, the rest of the calculation is ordinary liquid sizing.
concept-tags: [pulp stock correction factor, Kp, non-Newtonian sizing, Kraft pulp, mechanical pulp, recycled pulp, consistency]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "'Sizing for Pulp Stock,' p. 3-11 (PDF p. 55) — real prose and worked example, not figure-anchored"
relatedFigures: [pp-cmp-pulp-stock-correction-factors-kraft, pp-cmp-pulp-stock-correction-factors-mechanical, pp-cmp-pulp-stock-correction-factors-recycled]
relatedTopics: []
used-by: []
notes: >
  Genuinely unique to this book — confirmed by reading the whole chapter
  directly (PDF pp. 45-58), not assumed. The standard ISA/IEC liquid-sizing
  methodology this chapter also covers (the six-step procedure, Fp piping-
  geometry factor, ΔPmax/choked-flow/cavitation-vs-flashing diagnostic, and
  the identical NPS-3→NPS-4 propane worked example, 8-inch line/800 gpm/
  ΔP=25 psi) is the same Fisher Sourcebook-series boilerplate already
  topic-indexed in `cvh-topic-liquid-sizing-methodology` (Control Valve
  Handbook ch5), `ogas-topic-liquid-sizing-methodology` (Oil & Gas ch3),
  and `pss-topic-liquid-sizing-methodology` (Power & Severe Service ch3) —
  all three ids verified real before writing this note. Deliberately not
  re-authored as a fourth duplicate `pp-topic-*` record; this entry covers
  only the genuinely book-specific pulp-stock addition.
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 45-58 in full: p. 45 = printed
  3-1 (Chapter 3 opening, "Liquid Valve Sizing"), p. 57 = printed 3-13
  (Figures 3-5/3-6, chapter's last content page), p. 58 = printed 3-14,
  confirmed genuinely **blank**. PDF page 59 confirmed as the Chapter 4
  divider ("Cavitation and Flashing"). Zero page offset (PDF = printed + 44)
  throughout.
- **Full chapter coverage.** All 6 real figures in range (Figures 3-1
  through 3-6) located and catalogued; every page 45-58 was rendered and
  read directly (a dense, equation-heavy chapter — pages 3-3, 3-5, 3-6–3-8,
  3-10–3-11, 3-14 carry no figures at all, confirmed by direct reading, not
  assumed from a sparse text-extraction hit).
- **No low-confidence flags.**
- **Duplicate/repeat finding, honestly flagged, not a citation error:**
  Figure 3-1 (p. 3-2) and Figure 3-3 (p. 3-9) are the exact same drawing
  (A2737-1, "Liquid Critical Pressure Ratio Factor for Water"), reprinted
  verbatim at the point in the step-by-step sizing procedure where it's
  actually used. Both are catalogued as separate records
  (`pp-cmp-liquid-critical-pressure-ratio-water` and
  `pp-cmp-liquid-critical-pressure-ratio-water-repeat`) since each carries
  its own distinct printed figure number — this is a genuine intra-chapter
  reprint, not the "two different figures sharing one caption number"
  duplicate-figure-number edge case, and not a source-citation error either.
- **No duplicate printed figure numbers or source-citation errors found**
  beyond the above honestly-flagged reprint.
- **Table exclusion confirmed.** Table 3-1 ("Abbreviations and
  Terminology," p. 3-6) and Table 3-2 ("Equation Constants," p. 3-7) are
  genuinely numbered with printed "Table" captions and are correctly
  excluded per the standing tables-vs-figures rule.
- **Cross-reference findings.** Checked every figure's printed drawing
  number against the whole library. **One confirmed real cross-reference**
  (and its intra-chapter repeat): `pp-cmp-liquid-critical-pressure-ratio-
  water` / `-repeat` (A2737-1) ↔ `ogas-cmp-ff-chart-water` in `Component
  Index — Oil & Gas Sourcebook ch3.md` and the corresponding Power & Severe
  Service ch3 record. **One same-family, no-hard-match case:**
  `pp-cmp-liquid-critical-pressure-ratio-nonwater` (A2738-1) is the same
  standard ISA chart family as Oil & Gas ch3's `ogas-cmp-ff-chart-nonwater`,
  but that O&G record explicitly notes no drawing number is printed on its
  own copy — confirmed by reading that record, no hard cross-reference
  made. **Three genuinely unique figures:** the pulp-stock correction-factor
  charts (Figures 3-4/3-5/3-6, drawings E1377/E1378/E1379) have no
  equivalent anywhere else in the library — pulp-stock sizing is
  Pulp & Paper-specific content, absent from Oil & Gas and Power & Severe
  Service.
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook is the sole and sufficient source for all six of this
  chapter's components.
