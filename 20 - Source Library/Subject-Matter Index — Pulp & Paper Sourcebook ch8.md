---
title: Subject-Matter Index — Pulp & Paper Sourcebook ch8
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch8 — Process Overview
updated: 2026-09-15
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 8

**Chapter 8 — "Process Overview."** Standing full-chapter cataloguing pass,
continuing the whole-book completion pass begun with Chapter 1. This
chapter opens the book's industry-application-specific section (Chapters
8-18): a whole-mill orientation before the later chapters drill into
individual process areas. 3 real figures across 10 pages, genuinely unique
to this Pulp & Paper book — no match found anywhere else in the library.

Chapter boundaries confirmed directly by rendering: PDF page 105 = printed
p. 8-1 (Chapter 8 divider, "Process Overview"), PDF page 114 = printed p.
8-10, confirmed **blank**. PDF page 115 = Chapter 9 divider ("Pulping").
Zero page offset throughout (PDF page = printed page number + 104). Chapter
8 = PDF pp. 105-114.

All figures are from `20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. All three figures are genuinely unique to this book — no archive, legacy, or cross-book overlap found. |

## Components

### Chapter 8 — Mill Process Factors (printed p. 8-1)

```yaml
id: pp-topic-mill-process-factors
kind: topic
teaches: >
  The mill's process choice is driven by four named factors: wood type
  (hardwood vs. softwood), the paper/paperboard grade produced, mill age,
  and water availability. The book scopes itself specifically to the Kraft
  (sulfate) process as the dominant chemical pulping method — the real
  reason later chapters (9, 11-14) all assume Kraft rather than covering
  every pulping chemistry equally.
concept-tags: [Kraft process, sulfate process, process selection factors, mill scoping]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§ Process Overview, opening paragraph, p. 8-1 (PDF p. 105) — prose, not figure-anchored"
relatedFigures: [pp-cmp-kraft-pulp-paper-mill-process-overview]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real prose (pdftotext -layout, PDF p. 105). This
  is the book's own stated scoping decision, not an inference — it directly
  explains why this whole book, and every later chapter built on it, is
  Kraft-specific.
```

### Chapter 8 — Wood Preparation / Woodyard (printed p. 8-1)

```yaml
id: pp-topic-wood-preparation-woodyard
kind: topic
teaches: >
  The woodyard converts logs to pulping-ready chips through a real
  mechanical sequence: crane unloading and sorting → optional slasher
  segmenting → mechanical debarking (rotating barking drum, bark tumbled
  free through slots, used as boiler fuel) → chipping (high-speed rotating
  blades) → vibratory screening (oversize/undersize rejects returned for
  rechipping, acceptable chips stored in piles or silos). No dedicated
  later chapter covers wood preparation — this overview is the book's only
  treatment of it.
concept-tags: [woodyard, debarking, chipping, screening, wood preparation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§ Wood Preparation, p. 8-1 (PDF p. 105) — prose, not figure-anchored"
relatedFigures: [pp-cmp-kraft-pulp-paper-mill-process-overview]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real prose. Genuinely standalone — no chapter in
  this book's table of contents (9, 11-18) revisits wood preparation at
  greater depth; this is the one place the mechanism is explained.
```

### Chapter 8 — Kraft Recovery Cycle: Three-Step Synthesis (printed p. 8-2)

```yaml
id: pp-topic-kraft-recovery-cycle-synthesis
kind: topic
teaches: >
  The Kraft recovery cycle exists because pulping chemicals (sodium and
  sulfur) are expensive enough that recovering and regenerating them has
  real economic weight, plus a secondary heat/steam-recovery objective from
  burning wood organics in the black liquor itself. The book explicitly
  frames the whole cycle as three steps — evaporation, burning
  (combustion in the recovery boiler), and causticizing (regeneration back
  to cooking-strength white liquor) — which is the organizing logic that
  Chapters 11 (evaporation), 12 (the recovery boiler/burning), and 13
  (causticizing) each independently develop at full depth. This three-step
  framing itself is not restated in any of those three chapters (confirmed
  by comparing this text against Figure 8-2's own entry) — it exists only
  here, at the whole-cycle level.
concept-tags: [Kraft recovery cycle, evaporation, burning, causticizing, chemical recovery economics]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§ Recovery of Kraft Pulping Liquors, p. 8-2 (PDF p. 106) — prose, not figure-anchored"
relatedFigures: [pp-cmp-kraft-recovery-cycle-overview]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real prose. This is a genuine synthesis/framing
  concept distinct from the mechanism-level detail Chapters 11-13 will
  cover — deliberately scoped to just the organizing "why three steps"
  logic, not the mechanisms themselves, to avoid pre-empting those
  chapters' own topic-indexing passes.
```

### Chapter 8 — Mill Utilities Overview (printed p. 8-5)

```yaml
id: pp-topic-mill-utilities-overview
kind: topic
teaches: >
  Water and electricity are the mill's two other major raw materials
  beyond wood. Water requires treatment (sedimentation, filtration, and —
  for boiler feed specifically — demineralization via ion-exchange resins,
  since dissolved minerals cause sludge/scale buildup) before use; a
  typical condensate return rate to the boiler is about 50%, which matters
  because demineralized water is expensive to produce. Electricity is
  supplied by a combination of own-make (steam turbines fed by the power
  and recovery boilers, dual-purpose "cogeneration" of heat and power) and
  a grid utility tie, which also provides continuity if mill generation is
  curtailed. Typical steam split: ~185 psig to the digester/turbine, ~80
  psig to the steam room.
concept-tags: [mill utilities, water treatment, demineralization, cogeneration, steam turbine, utility tie]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§ Utilities, p. 8-5 (PDF p. 109) — prose, not figure-anchored"
relatedFigures: [pp-cmp-mill-utilities-overview]
relatedTopics: []
used-by: []
notes: >
  Read directly from the real prose, expanding Figure 8-3's own caption
  with the real numbers (50% return rate, 185/80 psig split) and the
  cogeneration rationale the figure alone doesn't state. No dedicated
  later chapter in this book covers mill utilities as its own subject —
  Chapter 18 ("Boilers – Water/Steam Cycle") is the closest, but drills
  into boiler-specific water/steam cycle detail, not the whole-utilities
  water-and-electricity framing this section provides.
```

### Chapter 8 — Waste Treatment Overview (printed p. 8-6)

```yaml
id: pp-topic-waste-treatment-overview
kind: topic
teaches: >
  Two waste streams matter for a mill: water effluent (treated in
  sedimentation clarifiers and/or aeration lagoons before return to the
  source river or lake — the trend is toward closed systems with no
  effluent stream at all) and air emissions, split into particulate (fine
  sodium-compound particulate from the recovery boiler, coarser wood-waste
  particulate from the power boiler, controlled via scrubbers or
  electrostatic precipitators) and odor (sulfur gases collectively called
  TRS — Total Reduced Sulfur — which are not dangerous but are treated
  anyway via in-process reduction or wet-scrubber absorption, since odor
  pollution itself is difficult to treat after the fact).
concept-tags: [waste treatment, effluent, TRS, particulate emissions, odor control]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§ Waste Treatment, p. 8-6 (PDF p. 110) — prose, not figure-anchored"
relatedFigures: []
relatedTopics: []
used-by: []
notes: >
  Read directly from the real prose. No dedicated later chapter in this
  book (9, 11-18) covers waste treatment as its own subject — this
  overview section is this book's only treatment of it, genuinely
  standalone.
```

### Chapter 8 — Whole-Mill Process Overview (printed pp. 8-7–8-9)

```yaml
id: pp-cmp-kraft-pulp-paper-mill-process-overview
kind: figure
teaches: >
  The complete Kraft pulp and paper mill process, top to bottom, as one
  flow diagram: woodyard (logs → barking drum → chipper → chip storage) →
  pulp mill (digester, blow tank, knotters/washers/screens) → recovery cycle
  (referenced to Figure 8-2) → bleach plant (chlorine/chlorine-dioxide/
  caustic soda towers, alternate no-bleach path) → stock preparation
  (blending chest, machine chest, fan pump, white water pit) → paper machine
  (headbox, wire, press section, dryers, calender, finished roll) — the
  book's single orienting map that every later industry-specific chapter's
  process area is a zoomed-in piece of.
concept-tags: [Kraft process, mill overview, woodyard, pulp mill, digester, recovery cycle, bleach plant, stock preparation, paper machine, whole-mill flow diagram]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 8-1 'Kraft Pulp and Paper Mill Process Overview,' p. 8-7 (PDF p. 111), drawing C0810/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A full-page unlabeled-valve process-flow schematic (equipment names only,
  no valve tags/callouts, unlike the industry-specific chapters' figures
  which typically carry valve tags). Checked against the whole library: no
  exact drawing-number match found for C0810 — genuinely unique to this
  book, consistent with it being a whole-mill orientation diagram specific
  to Pulp & Paper.
```

```yaml
id: pp-cmp-kraft-recovery-cycle-overview
kind: figure
teaches: >
  The complete Kraft recovery cycle as one flow diagram, expanding Figure
  8-1's "Recovery Cycle (see Figure 2)" reference: digester → white liquor
  clarifier → causticizers → slaker (with lime and make-up lime) → clarified
  green liquor → green liquor clarifier (dregs to washing/landfill) →
  dissolving tank/recovery boiler (smelt) → evaporators/concentrators →
  black liquor oxidation → direct contact evaporator (older designs only) →
  lime mud washer → lime kiln — an earlier, whole-cycle orientation that the
  later Chapters 11-13 (evaporators, recovery boiler, recausticizing) each
  drill into individually.
concept-tags: [Kraft recovery cycle, white liquor clarifier, causticizer, slaker, green liquor clarifier, dissolving tank, recovery boiler, evaporator, black liquor oxidation, lime kiln]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 8-2 'Kraft Recovery Cycle,' p. 8-8 (PDF p. 112), drawing C0811/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A full-page unlabeled-equipment process-flow schematic (no valve tags).
  Checked against the whole library: no exact drawing-number match found for
  C0811 — genuinely unique to this book. This is the earliest, most
  zoomed-out view of the recovery cycle the book offers; Chapters 11-13 each
  cover one piece of this same cycle at full teaching depth with their own
  tagged, valve-labeled process diagrams.
```

```yaml
id: pp-cmp-mill-utilities-overview
kind: figure
teaches: >
  Whole-mill utilities as one flow diagram: raw water intake → sedimentation
  basin/holding pond → filtration → demineralizer (with caustic/acid
  regeneration) → demineralized water storage feeding both other users and
  the recovery/power boilers; and the power side — recovery boiler (fueled
  by black liquor) and power boiler (fueled by bark, coal, or oil) both
  feeding a turbine/electric generator with a utility tie, steam routed to
  process (digesters, evaporators, paper machine, etc.).
concept-tags: [mill utilities, raw water intake, demineralizer, recovery boiler, power boiler, turbine, electric generator, utility tie, cogeneration]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 8-3 'Utilities,' p. 8-9 (PDF p. 113), drawing C0812/IL"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A full-page unlabeled-equipment process-flow schematic (no valve tags) —
  the book's only figure covering water treatment and power/steam
  generation as a combined system. Checked against the whole library: no
  exact drawing-number match found for C0812 — genuinely unique to this
  book. Chapter 18 ("Power & Recovery Boiler," out of this pass's scope)
  presumably drills into the power/recovery-boiler half of this diagram at
  full teaching depth, the same relationship Figure 8-2 has to Chapters
  11-13.
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 105-114 in full: p. 105 =
  printed 8-1 (Chapter 8 opening, "Process Overview"), p. 113 = printed 8-9
  (Figure 8-3, chapter's last content page), p. 114 = printed 8-10,
  confirmed genuinely **blank**. PDF page 115 confirmed as the Chapter 9
  divider ("Pulping"). Zero page offset (PDF = printed + 104) throughout.
- **Full chapter coverage.** All 3 real figures in range (Figures 8-1, 8-2,
  8-3) located and catalogued; every page 105-114 was rendered and read
  directly. Pages 8-1–8-6 (PDF 105-110) are prose narrative covering the
  whole-mill process narrative (pulping, recovery, bleaching, stock
  preparation, paper machine, waste treatment) with no figures at all —
  confirmed by direct reading, not assumed from a sparse text-extraction
  hit.
- **No low-confidence flags.**
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter. Body text cites the figures in-line as "figure 2" (for
  Figure 8-2, on p. 8-2) and "figure 3" (for Figure 8-3, on p. 8-5) — an
  informal shorthand omitting the chapter prefix, consistent with this
  book's already-documented lowercase/informal in-text citation style
  (see Chapters 11-14's own notes) — not a citation error, since each
  shorthand unambiguously matches its intended figure within the chapter.
- **No numbered tables found in this chapter** — confirmed by direct
  reading of every page; Chapter 8 is prose and figures only.
- **Cross-reference findings.** Checked all three drawing numbers (C0810,
  C0811, C0812) against the whole library — **no match found for any of
  them**. This is expected: a whole-mill orientation overview is
  structurally unique to the Pulp & Paper Sourcebook, with no equivalent
  content in Oil & Gas or Power & Severe Service (neither of which is
  organized around a single industry's whole-mill process flow the way
  this book is).
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook is the sole and sufficient source for all three of this
  chapter's components.
- **`kind: topic` pass (2026-09-17):** 5 new topic entries added
  (`pp-topic-mill-process-factors`, `pp-topic-wood-preparation-woodyard`,
  `pp-topic-kraft-recovery-cycle-synthesis`, `pp-topic-mill-utilities-overview`,
  `pp-topic-waste-treatment-overview`), all read directly from the real
  prose on pp. 8-1–8-6 (PDF 105-110) — the pages this file's own earlier
  pass already confirmed are prose-only with no figures.
- **Deliberate scope decision, not an oversight:** this chapter's prose also
  narrates pulping (mechanical vs. chemical, RMP/TMP/CTMP, batch vs.
  continuous digesters), bleaching (chlorine vs. chlorine dioxide, dioxin
  history, O2 delignification), stock preparation (consistency, broke pulp,
  chemical additives, beating/refining), and the paper machine (wet-end
  approach system, headbox, press section, dryers, calender) at real but
  introductory depth. Deliberately did NOT author topic entries for these —
  Chapters 9 (Pulping), 14 (Bleaching), 15 (Stock Preparation), 16 (Wet-End
  Chemistry), and 17 (Paper Machine) each own that ground at full teaching
  depth (per this book's own real chapter list), and this overview's
  treatment is explicitly a preview, not independent content. Authoring
  topics here would risk pre-empting or duplicating those dedicated
  chapters' own topic-indexing passes, several of which are running in
  parallel tonight. The five topics actually indexed above were chosen
  specifically because no dedicated later chapter owns their ground (wood
  preparation, mill utilities, waste treatment, and the two
  overview/framing-level synthesis concepts).
