---
title: Component Index — Pulp & Paper Sourcebook ch10A
type: reference
tags:
  - source-library
  - pipeline
  - component-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch10A — Digesters (Batch Digesters)
updated: 2026-09-15
---

# Teaching-Component Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 10A

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

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
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
