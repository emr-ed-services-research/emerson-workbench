---
title: Subject-Matter Index — Pulp & Paper Sourcebook ch9
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch9 — Pulping
updated: 2026-09-15
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 9

**Chapter 9 — "Pulping."** Standing full-chapter cataloguing pass,
continuing the whole-book completion pass begun with Chapter 1. This
chapter covers mechanical, chemithermomechanical, and chemical (sulfite and
Kraft/sulfate) pulping processes at the fundamentals level, before Chapters
10A/10B drill into the Kraft digester specifically. A short chapter — 4
pages — with one numbered figure and one genuinely unnumbered-but-real
diagram; both genuinely unique to this Pulp & Paper book.

Chapter boundaries confirmed directly by rendering: PDF page 115 = printed
p. 9-1 (Chapter 9 divider, "Pulping"), PDF page 118 = printed p. 9-4
(chapter's last content page, ends mid-recovery-process discussion, no
trailing blank). PDF page 119 = Chapter 10A divider ("Digesters"). Zero page
offset throughout (PDF page = printed page number + 106). Chapter 9 = PDF
pp. 115-118.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. Both components are genuinely unique to this book — no archive, legacy, or cross-book overlap found. |

## Components

### Chapter 9 — Mechanical and Chemithermomechanical Pulping (printed p. 9-2)

```yaml
id: pp-topic-mechanical-pulping-process-progression
kind: topic
teaches: >
  Mechanical pulping is a progression of related processes, not four
  unrelated methods: stone groundwood (SGW) — grinding whole logs against
  manufactured grindstones, essentially unchanged since the 1840s — gives
  the shortest fibers and the weakest, darkest pulp. Refiner mechanical
  pulp (RMP), commercial since 1960, grinds wood chips (not logs) between
  rotating metal discs in two stages, producing longer fibers and
  therefore stronger, freer, bulkier, somewhat darker pulp than SGW.
  Thermomechanical pulping (TMP) adds a presteaming step before refining;
  softening the chips this way yields still-longer fibers and fewer
  shives than RMP, making the strongest pulp of the three and the
  standard for high-tier newsprint/board stock today. Chemithermomechanical
  pulping (CTMP) adds a further chemical pretreatment (sodium carbonate,
  hydroxide, or sulfide) before refining — milder than a true chemical
  process, since the goal is only to make fibers easier to refine, not to
  remove the lignin. The through-line: each step in the SGW → RMP → TMP →
  CTMP progression trades more process complexity for longer fibers and a
  stronger final sheet.
concept-tags: [mechanical pulping, stone groundwood, refiner mechanical pulp, thermomechanical pulping, chemithermomechanical pulping, fiber length, pulp strength]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§Mechanical Pulping / Stone Groundwood / Refiner Mechanical Pulp / Thermomechanical Pulping / Chemithermomechanical Pulp, pp. 9-1–9-2 (PDF pp. 115-116) — running prose, not figure-anchored"
relatedFigures: [pp-cmp-thermomechanical-pulping-process]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real prose (PDF pp. 115-116), not inferred from
  Figure 9-1's own caption, which only diagrams the TMP process equipment
  and valve tags — it does not explain why TMP differs from SGW/RMP/CTMP in
  outcome. This is the fiber-quality mechanism the figure assumes but never
  states.
```

```yaml
id: pp-cmp-thermomechanical-pulping-process
kind: figure
teaches: >
  The thermomechanical pulping (TMP) process as one labeled process
  diagram: chips → presteamer → refiner (fed with fresh steam via PCV-4
  during startup) → cyclone (separates steam from pulp, PCV-1/PCV-2 control
  refiner pressure, routing steam to stack during startup or to heat
  recovery during production) → TMP pulp discharge via PCV-3 (blow valve,
  handling ~35% consistency pulp under high pressure drop) — each valve
  tagged directly on the diagram and keyed to the chapter's own Valve
  Selection table (Vee-Ball segmented ball, Control-Disk alternates).
concept-tags: [thermomechanical pulping, TMP, presteamer, refiner, cyclone, blow valve, Vee-Ball, Control-Disk, mechanical pulping]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 9-1 'Thermomechanical Pulping Process,' p. 9-2 (PDF p. 116), drawing E1387"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled P&ID-style flow diagram, drawing number E1387 printed at
  lower left. Every valve tag on this diagram (PCV-1 through PCV-4) is also
  listed with recommended/alternate Fisher product in the chapter's own
  unnumbered "Valve Selection" table (p. 9-2/9-3) — that table is excluded
  here as a table (see Open Items). Checked against the whole library: no
  exact drawing-number match found — genuinely unique to this chapter.
```

```yaml
id: pp-topic-tmp-valve-selection-rationale
kind: topic
teaches: >
  The TMP process's own Valve Selection table (PCV-1 through PCV-4 plus the
  water-control valve) is a bare reference table, but the surrounding prose
  states real engineering reasoning the table alone doesn't carry: the
  Fisher Vee-Ball segmented ball valve is specified for PCV-1/PCV-2
  (presteamer pressure control) specifically because its V-notch ball
  shears through pulp fibers that would otherwise build up and plug a
  conventional valve — the Fisher Control-Disk is offered as an alternate
  for the same service. PCV-3, the refiner blow valve, discharges pulp at
  35% consistency plus steam/condensate under a high pressure drop, so it
  must withstand erosion; the source's solution is stellited internals and
  trim (including the ball seal) on a Vee-Ball. The water control valve is
  specified as Vee-Ball for the same "optimal control" reasoning as the
  clean-steam service.
concept-tags: [Vee-Ball, Control-Disk, V-notch ball, fiber plugging, stellited trim, erosion resistance, valve selection rationale, thermomechanical pulping]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§Valve Selection (TMP), pp. 9-2–9-3 (PDF pp. 116-117) — running prose accompanying the Valve Selection table, not the table itself"
relatedFigures: [pp-cmp-thermomechanical-pulping-process]
relatedTopics: [pp-topic-mechanical-pulping-process-progression]
used-by: []
notes: >
  The Valve Selection table itself (Tag/Application/Recommended/Alternate)
  stays correctly excluded as tabular reference data, consistent with this
  chapter's own Open Items — this entry captures only the real prose
  reasoning that explains WHY each recommendation was made, which the bare
  table doesn't state.
```

### Chapter 9 — Chemical (Kraft/Sulfate) Pulping Chemistry (printed p. 9-4)

```yaml
id: pp-topic-sulfite-pulping-process
kind: topic
teaches: >
  The sulfite process produces near-pure-cellulose pulp by dissolving
  lignin with various salts of sulfurous acid (H2SO3) rather than Kraft's
  alkaline liquor — pulping liquor is made by burning sulfur to SO2, then
  absorbing it into water. Cooking runs at pH 1.5-5 (set by the
  counterion/base ratio), 265-320°F, for 4-14 hours. Yield is higher than
  Kraft and the pulp bleaches more easily, but sulfite pulp is weaker than
  Kraft pulp because the process degrades lignin less selectively. A real,
  named failure mode: if sulfur trioxide (SO3) forms instead of staying as
  SO2, it produces sulfuric acid (H2SO4) in solution, which hydrolyzes
  cellulose directly (not just delignifying) and damages fiber strength —
  the process's largest drawback. The most common recovery method
  (Magnefite) burns concentrated brown liquor to recover magnesium oxide
  and sulfur dioxide from the flue gases, then regenerates fresh pulping
  liquor from them in a closed loop.
concept-tags: [sulfite process, sulfurous acid, lignin removal, sulfur trioxide, cellulose degradation, Magnefite, brown liquor, chemical pulping]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§Chemical Pulping / Sulfite, pp. 9-3–9-4 (PDF pp. 117-118) — running prose, not figure-anchored"
relatedFigures: []
relatedTopics: []
used-by: []
notes: >
  Read directly from the real prose, including the source's own reaction
  equations (S + O2 → SO2; SO2 + H2O ⇌ H2SO3, etc.) — transcribed as stated,
  not re-derived. No figure or table in this chapter covers the sulfite
  process at all; it would otherwise be entirely invisible to a
  figures-only index.
```

```yaml
id: pp-topic-kraft-recovery-cycle-overview
kind: topic
teaches: >
  The Kraft (sulfate) process is the dominant chemical pulping method
  today: wood chips cook under pressure in an alkaline white liquor
  (NaOH + Na2S) at 265-355°F for several hours, breaking down lignin
  without seriously degrading cellulose. The spent cooking liquor (black
  liquor) is concentrated in evaporators and burned in a recovery boiler —
  this both generates steam and regenerates the inorganic pulping
  chemicals, closing a real four-reaction cycle: (1) the recovery boiler
  reduces sodium sulfate to sodium sulfide; (2) the resulting smelt
  dissolves in weak wash to form green liquor, which reacts with lime to
  regenerate white liquor and precipitate calcium carbonate; (3) that
  calcium carbonate is calcined in a lime kiln back to calcium oxide
  (lime); (4) lime reacts with water to regenerate the calcium hydroxide
  used in step 2. The source states this closed loop recovers roughly 98%
  of the original chemicals — the practical reason Kraft dominates despite
  producing darker pulp than sulfite: fiber-source flexibility plus this
  near-complete chemical regeneration.
concept-tags: [Kraft process, sulfate process, white liquor, black liquor, recovery boiler, recausticizing, lime kiln, chemical regeneration]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§Chemical Pulping / Sulfate (Kraft), pp. 9-3–9-4 (PDF pp. 117-118) — running prose, not figure-anchored"
relatedFigures: [pp-cmp-lignin-removal-reaction-mechanism]
relatedTopics: [pp-topic-sulfite-pulping-process]
used-by: []
notes: >
  Complements rather than duplicates `pp-cmp-lignin-removal-reaction-mechanism`
  (the unnumbered molecular-level diagram of the HS⁻ attack on a lignin
  fragment) — that figure explains the microscopic chemistry of
  delignification; this entry explains the macroscopic recovery/
  regeneration cycle the chapter's prose describes around it. Read
  directly from the real prose, including the source's own four numbered
  recovery-cycle reactions, transcribed as stated.
```

### Chapter 9 — Chemical (Kraft/Sulfate) Pulping Chemistry — figure (printed p. 9-4)

```yaml
id: pp-cmp-lignin-removal-reaction-mechanism
kind: figure
teaches: >
  The lignin-removal reaction mechanism at the molecular level: an HS⁻ ion
  (from the white liquor's sodium sulfide) attacks a lignin fragment's
  beta-aryl-ether linkage, cleaving it to release the aryl-oxide (ArOH) and
  alkoxide (ROH) fragments that ultimately solubilize lignin in the strongly
  basic cooking liquor — the actual chemical mechanism underlying the
  Kraft/sulfate process's macroscopic description elsewhere in the chapter.
concept-tags: [lignin removal, reaction mechanism, beta-aryl ether, HS ion, Kraft process, sulfate process, white liquor chemistry]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Unnumbered diagram, p. 9-4 (PDF p. 118) — a chemical structure/reaction-arrow diagram illustrating lignin fragment cleavage, drawing E1388"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  **Unnumbered-but-real diagram** (per the standing edge-case rule): no
  "Figure 9-N" caption or number appears anywhere on the page or in the
  surrounding text, but this is genuine teaching content (a real chemical
  reaction scheme, drawing number E1388 printed at lower left of the
  diagram itself) rather than a table — catalogued per the standing
  "figures-only rule excludes tables, not real diagrams that happen to lack
  a number" convention. Checked against the whole library: no exact
  drawing-number match found — genuinely unique to this chapter.
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 115-118 in full: p. 115 =
  printed 9-1 (Chapter 9 opening, "Pulping"), p. 118 = printed 9-4
  (chapter's genuine last content page, ending mid-discussion of the
  recovery process — no trailing blank, the chapter simply ends where
  Chapter 10A begins on the very next PDF page). PDF page 119 confirmed as
  the Chapter 10A divider ("Digesters"). Zero page offset (PDF = printed +
  106) throughout.
- **Full chapter coverage.** Both real components in range (the one
  numbered figure, Figure 9-1, and the one unnumbered-but-real reaction
  diagram) located and catalogued; every page 115-118 was rendered and read
  directly. Page 9-3 (PDF 117) carries the sulfite-process narrative and
  chemical equations with no diagram at all — confirmed by direct reading.
- **No low-confidence flags.**
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter — the chapter contains exactly one numbered figure
  (Figure 9-1), cited in-line correctly, plus the one unnumbered diagram
  honestly flagged above.
- **Table exclusion confirmed.** The chapter's "Valve Selection" table
  (p. 9-2–9-3, Tag/Application/Recommended/Alternate columns for PCV-1
  through PCV-4 and an unlabeled water-control row) is unnumbered and
  purely tabular — excluded per the standing valve-application/valve-tag
  reference-table rule, the same practice already applied to Chapters
  11-14's own closing valve-selection tables.
- **Cross-reference findings.** Checked both drawing numbers (E1387,
  E1388) against the whole library — **no match found for either**.
  Genuinely unique to this Pulp & Paper book; consistent with mechanical/
  chemithermomechanical/chemical pulping fundamentals being industry-
  specific content absent from Oil & Gas and Power & Severe Service.
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook is the sole and sufficient source for both of this
  chapter's figure components.
- **`kind: topic` pass (2026-09-17).** Re-read all 4 pages (115-118) in
  full for genuine conceptual content beyond the two figure entries above.
  4 new topic entries added: the mechanical-pulping process progression
  (SGW→RMP→TMP→CTMP and why each step yields stronger pulp), the TMP
  valve-selection reasoning behind the chapter's own Valve Selection table,
  the full sulfite process (including the SO3/cellulose-degradation
  failure mode and Magnefite recovery), and the Kraft recovery-cycle
  overview (complementing, not duplicating, the existing molecular-level
  lignin-removal figure). Chapter total is now 6 components (2 figures +
  4 topics). No section confirmed to have nothing left to index — every
  real page now has at least one figure or topic entry.
