---
title: Subject-Matter Index — Pulp & Paper Sourcebook ch10A
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch10A — Digesters (Batch Digesters)
updated: 2026-09-15
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 10A

**Chapter 10A — printed divider reads "Digesters"** (the table of contents
lists it as "Batch Digesters"; the chapter's own body content is entirely
about batch digesters specifically, and the divider's subtitle-free "Digesters"
is used only as the chapter's printed title — the real printed form is used
throughout this file, consistent with the standing "confirm the real printed
title" convention). Standing full-chapter cataloguing pass, continuing the
whole-book completion pass begun with Chapter 1. 6 real figures across 12
pages, all genuinely unique to this book.

Chapter boundaries confirmed directly by rendering: PDF page 119 = printed
p. 10A-1 (Chapter 10A divider, "Digesters"), PDF page 130 = printed p.
10A-12, confirmed **blank**. PDF page 131 = Chapter 10B divider ("Kamyr
Continuous Digesters"). Zero page offset throughout (PDF page = printed
page number + 109, i.e. PDF 119 = 10A-1... PDF 130 = 10A-12). Chapter 10A =
PDF pp. 119-130.

All figures are from `20 - Source Library/Handbooks & Sourcebooks/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. All six figures are genuinely unique to this book — no archive, legacy, or cross-book overlap found. |

## Components

### Chapter 10A — Batch Digester Configurations (printed pp. 10A-2–10A-3)

```yaml
id: pp-cmp-directly-steamed-batch-digester
kind: figure
teaches: >
  A directly steamed batch digester as one labeled P&ID: capping device,
  wood chip fill, white/black liquor fill valves (FV-1, FV-2), liquor-fill
  handvalve (HV-1), blow-back steam (HV-2), gas-off relief (PV-1), direct
  steam injection at the cone (TV-1), and the blow valve discharging to the
  blow tank — the simpler of the two batch digester heating configurations
  (contrast with Figure 10A-2's indirect design), with pressure and dual
  temperature sensors on the vessel body.
concept-tags: [batch digester, direct steam heating, blow valve, blow tank, gas-off relief, liquor fill valve, cooking valve]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 10A-1 'Directly Steamed Batch Digester,' p. 10A-2 (PDF p. 120), drawing C0751"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled P&ID-style flow diagram, drawing number C0751 printed at
  lower left. Every valve tag on this diagram (HV-1, FV-1, FV-2, HV-2, PV-1,
  TV-1) is also listed with recommended/alternate Fisher product in the
  chapter's own "General Service Valves" table (p. 10A-7, "Refer to figure
  10A-1") — that table is excluded here as a table (see Open Items).
  Checked against the whole library: no exact drawing-number match found —
  genuinely unique to this chapter.
```

```yaml
id: pp-cmp-indirectly-steamed-batch-digester
kind: figure
teaches: >
  An indirectly steamed batch digester as one labeled P&ID: adds a
  circulation loop (circulation pump, external heater, recirculated hot
  liquor return via FV-3/FV-4) driven by indirect high-pressure steam
  (TV-1) with condensate return (TV-2) and a direct-steam backup path
  (TV-3) — the more elaborate of the two heating configurations, using
  indirect heat exchange rather than direct steam injection into the liquor
  mass to control cooking temperature.
concept-tags: [batch digester, indirect steam heating, circulation pump, external heater, condensate return, recirculated liquor, screen]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 10A-2 'Indirectly Steamed Batch Digester,' p. 10A-3 (PDF p. 121), drawing C0750"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled P&ID-style flow diagram, drawing number C0750 printed at
  lower left. Every valve tag on this diagram (HV-1, FV-1 through FV-4,
  HV-2, PV-1, TV-1 through TV-3) is also listed in the chapter's own
  "General Service Valves" table (p. 10A-7, "Refer to figure 10A-2") —
  excluded here as a table. Checked against the whole library: no exact
  drawing-number match found — genuinely unique to this chapter.
```

```yaml
id: pp-topic-batch-digester-heating-methods
kind: topic
teaches: >
  Batch digesters use one of two heating methods, each a real engineering
  tradeoff, not just a design variant: direct steam injection (Figure
  10A-1) is the simpler, older design, but steam condensing directly into
  the liquor mass dilutes the cooking liquor. Indirect heating (Figure
  10A-2) extracts liquor through a screen, passes it through an external
  heat exchanger, and recirculates it — avoiding dilution, but requiring
  more maintenance (screens, pumps, external heat exchangers). Both serve
  the same process objective: raising chip-liquor temperature/pressure so
  the alkaline cooking liquor can dissolve lignin and extractives from the
  cellulose fiber.
concept-tags: [batch digester, direct steam heating, indirect steam heating, dilution effect, delignification, heating method tradeoff]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 10A opening prose, 'Batch Digesters – Kraft Pulping,' p. 10A-1 (PDF p. 119)"
relatedFigures: [pp-cmp-directly-steamed-batch-digester, pp-cmp-indirectly-steamed-batch-digester]
relatedTopics: [pp-topic-kraft-cooking-chemistry]
used-by: []
notes: >
  Real prose beyond either figure's own teaches field — the figures show
  what each configuration looks like; this topic explains why a mill would
  choose one over the other. Also names the "low energy process" as a
  further, more modern derivation, covered in its own topic below.
```

```yaml
id: pp-topic-kraft-cooking-chemistry
kind: topic
teaches: >
  Kraft (sulfate/alkaline) pulping cooks wood chips in a mixture of white
  liquor (from the chemical recovery boiler and recausticizing) and black
  liquor (spent liquor recovered from prior batches by brown stock
  washers) — NaOH and Na2S are the constituents that dissolve the lignin
  binder, at a starting pH above 13. Cooking liquor is added at 160-190°F
  against 60-80°F wood chips. Cooking temperature (330-350°F target,
  100-120 psi) is the key uniformity variable — uneven top/bottom
  temperature distribution causes rejects (knots, partially cooked chips)
  — but the "H-factor" (a real, named target combining temperature and
  time) is what actually determines when a batch is done: cook cycles
  range 2 hours (hard cook, high yield) to 5 hours (soft cook, low yield).
  Pressure is the easier, faster variable to measure and correlates to
  temperature via saturated-steam tables, but requires a correction for
  the liquor's own boiling-point elevation from dissolved solids.
concept-tags: [Kraft process, white liquor, black liquor, NaOH, Na2S, H-factor, cooking temperature, cooking time, delignification, pulp yield]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "'Batch Digester Process Parameters' through 'Cooking Pressure,' pp. 10A-3–10A-4 (PDF pp. 121-122)"
relatedTopics: [pp-topic-batch-digester-heating-methods, pp-topic-digester-pressure-control-concepts]
used-by: []
notes: >
  Real prose, no figure anywhere in the chapter depicts this chemistry —
  invisible to the original figures-only pass entirely. H-factor is named
  directly in the source text ("When the target 'H' factor has been
  reached...") but never defined numerically in this chapter — flagging
  that the source itself treats H-factor as a term the reader is assumed
  to already know, not something this chapter teaches from scratch.
```

### Chapter 10A — Cooking Cycle Profiles (printed p. 10A-5)

```yaml
id: pp-cmp-theoretical-batch-cooking-cycle
kind: figure
teaches: >
  The idealized (textbook) batch cooking cycle as a digester-pressure-vs-time
  graph: a clean trapezoid rising linearly through a 60-minute steaming
  phase to a 110 psig target pressure, holding flat through a 90-minute
  cooking phase, then dropping during a 10-minute blowing phase — a
  simplified representation the chapter explicitly contrasts with the real,
  irregular profile of Figure 10A-4.
concept-tags: [batch cooking cycle, digester pressure profile, theoretical cycle, steaming phase, cooking phase, blowing phase, target pressure]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 10A-3 'Theoretical Batch Cooking Cycle,' p. 10A-5 (PDF p. 123), drawing C0749"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph, not a cutaway — Style Guide §5 applies if ever
  placed on a slide. **Shares its printed drawing-number stamp (C0749) with
  Figures 10A-4 and 10A-5** — all three are separately captioned, separately
  numbered charts printed on the same source page, sharing one drawing-
  number block rather than each carrying its own; this is a real, confirmed
  printing convention in this book (not a duplicate-figure-number situation,
  since each chart has its own distinct figure number and content) — the
  same kind of shared-stamp arrangement already documented for other
  multi-figure pages in this book (e.g. Chapter 11's Figures 11-1/11-2
  sharing one E0894 stamp). Checked against the whole library: no exact
  drawing-number match found — genuinely unique to this chapter.
```

```yaml
id: pp-cmp-actual-batch-cooking-cycle
kind: figure
teaches: >
  The real, irregular batch cooking cycle as a digester-pressure-vs-time
  graph: unlike Figure 10A-3's clean trapezoid, actual pressure ramps and
  holds are noisy/uneven — the time interval at each cook phase varies
  significantly by pulp grade and mill, so this figure is presented as the
  more realistic representation of what operators actually see.
concept-tags: [batch cooking cycle, digester pressure profile, actual cycle, steaming phase, cooking phase, blowing phase, real-world variation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 10A-4 'Actual Batch Cooking Cycle,' p. 10A-5 (PDF p. 123), drawing C0749"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph. Shares its drawing-number stamp (C0749) with Figures
  10A-3 and 10A-5 — see `pp-cmp-theoretical-batch-cooking-cycle`'s notes for
  the full explanation of this book's shared-stamp convention. Directly
  contrasted with Figure 10A-3 in the surrounding body text ("In real life,
  the cooking cycle pressure profile is never this rigid... Figure 10A-4
  shows a more realistic representation").
```

```yaml
id: pp-cmp-steam-demand-profile
kind: figure
teaches: >
  Steam demand (unlabeled vertical axis — different pulp grades/digester
  sizes require different absolute quantities) plotted against the same
  turnaround/steaming/cooking/blowing time axis as Figures 10A-3/10A-4:
  demand spikes sharply during steaming, tapers through cooking, and drops
  to near-zero during blowing — the steam-side companion to the pressure
  profiles, used to size the steam supply for a representative cooking
  cycle (a typical 3-hour, 100 psig cycle consumes 4000-6500 lb steam per
  ton of pulp).
concept-tags: [steam demand profile, batch cooking cycle, steaming phase, digester sizing, steam supply]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 10A-5 'Steam Demand Profile,' p. 10A-5 (PDF p. 123), drawing C0749"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  An analytical graph. Third and last of the three charts sharing drawing-
  number stamp C0749 on this page — see
  `pp-cmp-theoretical-batch-cooking-cycle`'s notes for the shared-stamp
  explanation. Deliberately has an unlabeled vertical axis (the source
  explains why: different pulp grades/digester sizes need different
  absolute steam quantities) — this is a real, confirmed source choice, not
  a rendering/extraction gap.
```

```yaml
id: pp-topic-digester-pressure-control-concepts
kind: topic
teaches: >
  Digester pressure control has two named failure modes beyond simple
  overpressure. "False pressure": non-condensable gases (resinous vapors,
  entrained air) accumulate at the top of the digester and read as higher
  pressure than the actual steam-saturation temperature justifies — the
  naive corrective action (reduce steam flow) is wrong and produces a
  badly undercooked, possibly ruined batch; the real fix is relieving the
  non-condensable gases through the gas-off line, not cutting steam.
  "Overpressure" (actual pressure above target) can itself result from
  chasing false pressure (overshooting) or from exothermic reaction once
  target is reached, and is both a safety hazard and an off-quality-pulp
  contributor. A hard safety/economic interlock exists between the gas-off
  valve and the blow-back valve: when one is open, the other must be
  closed.
concept-tags: [false pressure, overpressure, gas off, non-condensable gases, safety interlock, pressure-temperature relationship]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "'False Pressure' through 'Relief or Gas Off,' pp. 10A-5–10A-6 (PDF pp. 123-124)"
relatedTopics: [pp-topic-kraft-cooking-chemistry, pp-topic-blow-back-and-blow-tank-function]
used-by: []
notes: >
  Real prose, no figure in the chapter depicts or explains this mechanism
  — a genuinely non-obvious control gotcha (the instrument reads high
  pressure; the correct response is the opposite of what that reading
  would suggest) invisible to the original figures-only pass.
```

```yaml
id: pp-topic-blow-back-and-blow-tank-function
kind: topic
teaches: >
  "Blow back" is a real, named 3-step maintenance sequence: (1) shut the
  high-pressure steam valve to the digester base, (2) shut the gas-off
  valve to the common header, (3) open the blow-back valve — briefly
  reversing steam flow through the relief line to the digester top for
  10-30 seconds, cleaning the relief screen and collapsing any steam
  bubble trapped in the lower chip mass, then reverting. Separately, the
  "blow tank" is the low-pressure vessel a completed batch is dumped into
  when the blow valve opens (releasing the full 100-120 psi digester
  pressure at once) — it needs both vacuum and pressure relief valving
  because of that surge and the flashed vapor that follows it.
concept-tags: [blow back, blow tank, relief screen, blow valve, maintenance sequence]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "'Blow Back' and 'Blow Tank,' p. 10A-6 (PDF p. 124)"
relatedFigures: [pp-cmp-directly-steamed-batch-digester, pp-cmp-indirectly-steamed-batch-digester]
relatedTopics: [pp-topic-digester-pressure-control-concepts]
used-by: []
notes: >
  Real prose beyond either heating-configuration figure's own teaches
  field — those figures show the blow-back valve (HV-2) and blow valve
  positions, this topic explains the actual sequence and why it exists.
```

```yaml
id: pp-topic-digester-capping-valve-selection-rationale
kind: topic
teaches: >
  The digester capping valve — the valve mounted directly to the chip
  chute that automates chip filling — is named as one of the most
  important valves in the whole process, for two real engineering
  reasons: it is genuinely erosive service (chips impinge directly on the
  body and ball, requiring hardened materials/trim), and it must achieve
  tight shutoff so the digester can reach and hold cooking pressure. Both
  requirements are explicitly stated as the reasons behind the valve
  selection, not left implicit in a spec table.
concept-tags: [capping valve, erosive service, tight shutoff, control valve selection rationale]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "'Control Valve Selection — Digester Capping Valve,' p. 10A-7 (PDF p. 125)"
used-by: []
notes: >
  Real control-valve-selection reasoning distinct from the "General
  Service Valves" application tables (correctly excluded as reference
  data elsewhere in this file) — this is the one place the chapter states
  WHY a specific valve needs specific hardware, not just which product
  fits which tag.
```

### Chapter 10A — Low Energy Batch Digester Process (printed p. 10A-9)

```yaml
id: pp-cmp-batch-digester-low-energy-three-stage-design
kind: figure
teaches: >
  A typical three-stage low-energy batch digester tank farm: "A" (cool
  black liquor accumulator), "B" (warm black liquor accumulator, with a
  liquor cooler/mill-water heat exchanger and displacement tank), and "C"
  (hot black liquor accumulator, with a white-liquor preheat exchanger)
  tanks feed the digester in stages via warm/hot liquor fill pumps and a
  variable-speed displacement fill pump — the heat-recovery-driven
  alternative to conventional direct/indirect batch cooking (Figures
  10A-1/10A-2), reported to cut steam use, evaporator load, and alkali
  consumption while improving pulp strength.
concept-tags: [low energy cooking, three-stage design, black liquor accumulator, displacement tank, heat recovery, warm liquor fill pump, hot liquor fill pump, brown stock filtrate]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 10A-6 'Typical Three-Stage Design,' p. 10A-9 (PDF p. 127), drawing C0748"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled P&ID-style flow diagram, drawing number C0748 printed at
  lower right, with 20 handvalve/control-valve tags (HV-1 through HV-20,
  FV-2 through FV-7, PV-1/PV-2, TV-1 through TV-3, LV-1/LV-2) — the
  chapter's most elaborate diagram. Every valve tag is also listed across
  three separate "General Service Valves" tables (pp. 10A-10–10A-11, each
  "Refer to figure 10A-6") — excluded here as tables (see Open Items).
  Checked against the whole library: no exact drawing-number match found —
  genuinely unique to this chapter.
```

```yaml
id: pp-topic-low-energy-batch-digester-process
kind: topic
teaches: >
  The "low energy" cooking process is a real, named alternative to
  conventional direct/indirect batch cooking, built around a staged
  black-liquor accumulator tank farm (typically three stages, "A"/"B"/"C"
  tanks — Figure 10A-6) rather than the two-figure conventional designs.
  Cool black liquor (from "A") forms a bottom liquor pad; warm liquor
  (from "B") displaces entrained air and brings the digester to pressure;
  hot white liquor (preheated via an indirect exchanger using hot black
  liquor as the heat source, stored in a pressurized accumulator) then
  raises the mass to near cook temperature, with an external liquor
  heater only if needed. After cooking, most hot liquor is displaced back
  to "C" for reuse; cooler liquor goes to "B"/"A"; the pulp is washed and
  cooled in-digester by washer filtrate before a cold-blow with
  compressed air (not a hot blow like conventional digesters). Reported
  benefits: steam savings, reduced evaporator load, lower black-liquor
  viscosity, lower alkali use, fewer washing stages, stronger pulp, lower
  environmental impact, and (from cold-blowing) lower total-reduced-sulfur
  emissions.
concept-tags: [low energy process, three-stage design, black liquor accumulator, heat recovery, cold blow, tank farm]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "'Batch Digester – Low Energy Process' through 'The Process,' pp. 10A-7–10A-9 (PDF pp. 125-127)"
relatedFigures: [pp-cmp-batch-digester-low-energy-three-stage-design]
relatedTopics: [pp-topic-batch-digester-heating-methods, pp-topic-kraft-cooking-chemistry]
used-by: []
notes: >
  Real prose well beyond the figure's own teaches field — the figure
  shows the tank/pump/valve layout, this topic explains the actual liquor
  cycle, why cold-blowing replaces hot-blowing here, and the real reported
  benefits list (steam/evaporator/alkali/washing/strength/emissions),
  none of which the figure states on its own.
```

## Open Items

- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 119-130 in full: p. 119 =
  printed 10A-1 (Chapter 10A opening, "Digesters"), p. 129 = printed 10A-11
  (chapter's last content page, the "Digester" valve-selection table), p.
  130 = printed 10A-12, confirmed genuinely **blank**. PDF page 131
  confirmed as the Chapter 10B divider ("Kamyr Continuous Digesters"). Zero
  page offset throughout.
- **Naming note:** the table of contents lists this chapter as "Batch
  Digesters"; the real printed chapter-divider title reads just "Digesters"
  (confirmed by direct rendering of PDF p. 119) — used throughout this
  file, consistent with the standing "confirm the real printed title, don't
  trust the TOC" convention already applied in this book's Chapter 5.
- **Full chapter coverage.** All 6 real figures in range (Figures 10A-1
  through 10A-6) located and catalogued; every page 119-130 was rendered
  and read directly, no gaps in the numeric sequence.
- **No low-confidence flags** beyond the honestly-documented shared-
  drawing-number-stamp finding for Figures 10A-3/10A-4/10A-5 (see those
  records' own `notes`) — confirmed as a real printing convention already
  seen elsewhere in this book, not a duplicate-figure-number error.
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter. Body text cites the figures correctly in-line (e.g. "see
  figures 10A-1 and 10A-2," "figure 10A-6").
- **Table exclusion confirmed.** Five unnumbered "General Service Valves" /
  "Control Valve Selection" tables in this chapter (pp. 10A-7, 10A-10,
  10A-10, 10A-10, 10A-11 — each explicitly "Refer to figure 10A-1/10A-2/
  10A-6") list Valve Tag #, Application Description, Control Function, and
  Fisher product-line columns keyed to the numbered process figures.
  Excluded per the standing valve-application/valve-tag reference-table
  rule — no "Figure" or "Table" caption/number appears on any of them.
- **Cross-reference findings.** Checked all four drawing numbers (C0751,
  C0750, C0749, C0748) against the whole library — **no match found for
  any of them**. Genuinely unique to this Pulp & Paper book; batch-digester
  process detail is industry-specific content absent from Oil & Gas and
  Power & Severe Service.
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook is the sole and sufficient source for all six of this
  chapter's components.
- **`kind: topic` pass, added 2026-09-17.** Re-read the full chapter's real
  running prose (not just the figure captions) and added 6 `pp-topic-*`
  entries for genuine conceptual content the figures-only pass structurally
  couldn't see: the direct/indirect heating tradeoff, Kraft cooking
  chemistry (white/black liquor, H-factor), the false-pressure/overpressure/
  interlock control concepts, the blow-back/blow-tank mechanism, the
  capping valve's real selection rationale (erosive service + tight
  shutoff), and the full low-energy process cycle. No section was found to
  be genuinely reference-data-only beyond the "General Service Valves"
  tables already excluded above — every real page of prose supported at
  least one topic entry. Chapter total: 12 components (6 figures + 6
  topics), up from 6.
