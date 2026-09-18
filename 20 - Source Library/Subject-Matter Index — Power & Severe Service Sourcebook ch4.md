---
title: Subject-Matter Index — Power & Severe Service Sourcebook ch4
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Power & Severe Service (© 2001, 2003, 2004 Fisher Controls International LLC, Fourth Edition, D101449X012)
chapter: ch4 — Gas and Steam Valve Sizing
updated: 2026-09-14
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Power & Severe Service, Chapter 4

**Chapter 4 — "Gas and Steam Valve Sizing."** Standing library-cataloging
pass, part of a full-document pass across the whole Power & Severe Service
Sourcebook. Matches the rigor of `Subject-Matter Index — Oil & Gas Sourcebook
ch1.md`: every real page in the chapter's confirmed range was rendered at
150dpi and read directly.

Chapter boundaries were verified directly against the PDF: PDF p.43 is the
"Chapter 4 / Gas and Steam Valve Sizing" divider page, real section content
runs PDF pp.43–50 (printed pp.4-1–4-8), and PDF p.51 is the "Chapter 5 /
Control Valve Noise" divider. Chapter 4 = PDF pp.43–50; Chapter 5 starts at
PDF p.51.

**This chapter contains zero numbered figures — confirmed methodically, not
assumed from the chapter title.** Every one of the 8 pages in range (PDF
43–50 / printed 4-1–4-8) was rendered at 150dpi and read directly: the
chapter is entirely ISA/IEC compressible-fluid sizing procedure text
(6-step gas/steam sizing method, xTP/pressure-drop-ratio procedure), two
fully-worked sample problems (a Design V250 ball valve on natural gas, a
Design ED valve on superheated steam), and two reference tables (Table 4-1
"Representative Sizing Coefficients for Rotary Shaft Valves," Table 4-2
"Representative Sizing Coefficients for Design ED Single-Ported Globe Style
Valve Bodies," both excluded per the tables-vs-figures rule). No chart, no
cutaway, no unnumbered-but-real diagram of the kind the Oil & Gas
Sourcebook's ch5 p.100 flowchart or this same book's Chapter 8 kettle
sketch represent — genuinely all equations, worked arithmetic, and tables.
Real precedent for a chapter reaching zero this way: Control Valve Handbook
chapters 13–15, confirmed zero via full-page rendering rather than assumed.

All page-reading was done against `20 - Source Library/Industry Specific
Sourcebooks/Control Valve Sourcebook - Power & Severe Service.pdf`.

**Updated 2026-09-17: zero figures still holds, but zero components does
not.** The `kind: topic` entry type (added the same night, parallel to
`kind: figure`) exists specifically for real conceptual/procedural content
that never had a figure to anchor it — exactly this chapter's situation.
The six-step sizing procedure, the Y/choked-flow mechanism, and the xTP
piping-geometry correction are all real, teachable, and now catalogued as
three `pss-topic-*` entries below, grounded in the same page range this
file's own figures-only pass already confirmed was read in full.

## Precedence

The Fisher Control Valve Sourcebook — Power & Severe Service is itself a
**current** document (Fourth Edition, D101449X012, © 2001/2003/2004 Fisher
Controls International LLC, same series as `Subject-Matter Index — Oil & Gas
Sourcebook ch1.md`'s source), so this precedence bucket would apply to any
record in this file — moot, since the chapter carries zero real figures.

## Components

**No numbered figures** (confirmed above), but real conceptual/procedural
content exists throughout the chapter's body prose — three `kind: topic`
entries added 2026-09-17, same rigor as every figure entry (real page
locators, grounded directly in the text read above, nothing invented).

```yaml
id: pss-topic-gas-steam-sizing-methodology
kind: topic
concept-tags: [compressible flow sizing, ISA six-step procedure, N constant, Cv, Kv, Av, rotary valve, globe valve, worked example]
status: current
teaches: >
  The six-step ISA standardized procedure for sizing control valves on
  compressible fluids (gas/steam): specify the required variables; select
  the equation constant N (N7 for volumetric flow with specific gravity
  Gg known, N9 for volumetric flow with molecular weight M known, N6/N8
  for the mass-flow-rate equivalents); determine Fp, the piping geometry
  factor (1.0 if valve and line size match); determine Y, the expansion
  factor; solve for Cv; select the valve size from the flow-coefficient
  table. Kv = 0.865 × Cv and Av = 2.40×10⁻⁵ × Cv relate the three
  coefficient systems. Two full worked samples run this procedure
  end to end: an 8-inch Design V250 ball valve sized for 6.0×10⁶ scfh
  natural gas at P1=214.7 psia/ΔP=150 psi, reworked iteratively by VALVE
  OPENING ANGLE rather than valve size (100%→83°→78° travel, since xT
  itself varies by opening angle) to land on ~75° open — a materially
  different iteration mechanism than liquid sizing's iterate-by-size
  approach; and a 4-inch ANSI Class 300 Design ED globe valve with linear
  cage sized for 125,000 lb/h superheated steam at 500 psig/500°F
  installed in a 6-inch line (Cv=176 required against a rated Cv=236).
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, 4th ed. (D101449X012)
    locator: "Chapter 4 'Gas and Steam Valve Sizing,' printed pp.4-1–4-6 — body prose and both worked sample problems, PDF pp.43-48"
relatedFigures: []
relatedTopics: [cvh-topic-compressible-sizing-methodology]
used-by: []
notes: >
  Verified: cvh-topic-compressible-sizing-methodology (Control Valve
  Handbook ch5, confirmed to exist by direct grep before citing) covers
  the same procedure with its own two worked examples (natural gas +
  steam) — genuinely parallel, not duplicated, since these are the
  sourcebook's own distinct numbers/valve models, the same
  don't-merge-across-source-documents rule already applied on Oil & Gas
  ch2/ch3 tonight. Read directly from PDF pp.43-48 via pdftotext -layout,
  not inferred from the file's own prior (figures-only) summary.
```

```yaml
id: pss-topic-choked-flow-expansion-factor
kind: topic
concept-tags: [choked flow, expansion factor Y, critical pressure drop ratio, compressible flow limit]
status: current
teaches: >
  The expansion factor Y = 1 − x/(3·Fk·xT), where x = ΔP/P1 and
  Fk = k/1.4 (k = ratio of specific heats). Critical (choked) flow occurs
  when x reaches or exceeds Fk·xT (or Fk·xTP for a valve installed with
  fittings) — at that point Y = 0.667 exactly, and Y can never be less
  than 0.667 regardless of how much further ΔP is increased beyond the
  critical value: a physical ceiling on how much a compressible fluid's
  flow rate can rise from additional pressure drop across a restriction,
  distinct in mechanism (and equation) from liquid cavitation/flashing's
  own choked-flow treatment. Sample Problem 1 demonstrates this directly:
  the pressure-drop ratio x=0.70 exceeds the rated-travel critical value
  Fk·xT=0.129, so Y is set to 0.667 and the calculation uses x=0.129 in
  place of the actual 0.70.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, 4th ed. (D101449X012)
    locator: "Chapter 4, printed pp.4-1–4-2, 4-3 — the Y-factor derivation and its application in Sample Problem 1"
relatedFigures: []
relatedTopics: [pss-topic-gas-steam-sizing-methodology, pss-topic-xtp-piping-geometry-correction]
used-by: []
notes: >
  Read directly from the real prose (the "Note: Conditions of critical
  pressure drop..." callout and its application in Sample Problem 1's
  step 4), not inferred from the equation alone.
```

```yaml
id: pss-topic-xtp-piping-geometry-correction
kind: topic
concept-tags: [xTP, piping geometry factor, reducers, inlet head loss coefficient, Fp, worked example]
status: current
teaches: >
  When a control valve is installed with attached fittings (reducers,
  elbows — i.e. a smaller valve in a larger line rather than installed
  at line size), the plain xT pressure-drop-ratio factor is replaced by
  xTP, which corrects for the fittings' own resistance via Ki (the inlet
  head-loss coefficient, Ki = K1 + KB1) and SK (a combined resistance
  term). Sample Problem 2 works this exactly: a 4-inch Design ED valve
  installed in a 6-inch line computes SK=0.463, Fp=0.95, and xTP=0.67 —
  materially different from the flow-coefficient table's own rated xT
  (0.688) at line size, changing the required Cv result.
source:
  - doc: Fisher Control Valve Sourcebook — Power & Severe Service, 4th ed. (D101449X012)
    locator: "Chapter 4, printed pp.4-2–4-5 — the xTP derivation and Sample Problem 2, steps 3-4"
relatedFigures: []
relatedTopics: [pss-topic-gas-steam-sizing-methodology, pss-topic-choked-flow-expansion-factor]
used-by: []
notes: >
  Read directly from the real prose and Sample Problem 2's own worked
  arithmetic (PDF pp.44-45, 47-48), not assumed from the equation's
  variable names alone.
```

## Open Items

- **Chapter boundary** — confirmed directly by rendering: PDF p.43 is the
  Chapter 4 divider, PDF p.51 is the Chapter 5 divider. Chapter 4 = PDF
  pp.43–50 (printed pp.4-1–4-8).
- **Full coverage accounting**: 0 real figures in range — the entire
  8-page chapter was rendered and read page by page (43 divider/intro,
  44 Y-expansion-factor procedure, 45 xTP procedure + sample problem 1
  setup, 46 sample problem 1 worked (V250 ball valve, natural gas), 47
  sample problem 1 continued (choked-flow rework) + sample problem 2 setup
  (Design ED, superheated steam), 48 sample problem 2 Fp/ΣK calculation,
  49–50 Tables 4-1/4-2). No figure or unnumbered diagram found anywhere in
  range — a genuine zero, not a gap. **2026-09-17 topic-indexing pass
  re-read the same full range for conceptual content** and added 3
  `pss-topic-*` entries (sizing methodology, choked-flow/expansion factor,
  xTP piping-geometry correction) — the chapter is real, teachable
  content despite carrying zero figures.
- **Low-confidence flags**: none.
- **Duplicate-figure-number / source-citation-error findings**: none (no
  figures to collide or mis-cite).
- **Table-exclusion confirmation**: Table 4-1 (p.4-7, rotary shaft valve
  sizing coefficients) and Table 4-2 (p.4-8, Design ED globe body sizing
  coefficients) are both genuine reference tables, correctly excluded —
  neither carries a "Figure" caption or number.
- **Cross-reference findings (topic entries only)**: `pss-topic-gas-
  steam-sizing-methodology` cross-references `cvh-topic-compressible-
  sizing-methodology` (Control Valve Handbook ch5) — verified to exist
  before citing, genuinely parallel content (same procedure, this
  sourcebook's own distinct worked numbers), not a duplicate per the
  don't-merge-across-source-documents rule already applied elsewhere
  tonight. No figure components exist in this file, so there is nothing
  else in this chapter to check against the rest of the library.
- **Archive/legacy material**: none consulted, none needed — first-party
  current Fisher document throughout.
