---
title: Subject-Matter Index — Pulp & Paper Sourcebook ch18
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch18 — Boilers – Water/Steam Cycle
updated: 2026-09-15
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 18

**Chapter 18 — printed divider reads "Boilers — Water/Steam Cycle"** (the
table of contents lists this chapter as "Power & Recovery Boiler"; the
chapter's own printed divider title is different — confirmed by direct
rendering of the divider page, consistent with the standing "confirm the
real printed title, don't trust the TOC" convention already applied in
this book's Chapters 5 and 10A). Standing full-chapter cataloguing pass,
**closing out the whole-book completion pass begun with Chapter 1** — this
is the last real chapter in the book (confirmed directly; see below). A
short chapter by figure count — 2 real figures across 8 pages, the rest
per-valve-tag narrative write-ups (Boiler Feedwater System, Steam
Generation, Sootblower Valve, Main Steam PRV and Turbine Bypass, Condensing
and Cooling System) closing in one unnumbered valve-selection table.

Chapter boundaries confirmed directly by rendering: PDF page 209 = printed
p. 18-1 (Chapter 18 divider, "Boilers — Water/Steam Cycle"), PDF page 216 =
printed p. 18-8 (Figure 18-2, chapter's last content page, no trailing
blank). PDF page 217 confirmed **blank** (rendered and visually inspected —
no text, no figure, only white space; not a numbered chapter page at all).
PDF page 218 confirmed as the book's real back-cover/colophon page (Emerson
Process Management office addresses and legal disclaimer text — not a
19th chapter, not further content of any kind). Zero page offset throughout
for the chapter itself (PDF page = printed page number + 191). Chapter 18 =
PDF pp. 209-216. **The book ends here** — 218 PDF pages total (confirmed via
`pdfinfo`), with p. 217 a genuine trailing blank and p. 218 the colophon;
there is no Chapter 19 or further content of any kind.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. Both figures are first-party Fisher process diagrams (own drawing numbers, no TAPPI credit) — no archive, legacy, or cross-book overlap found. |

## Components

### Chapter 18 — Water/Steam Cycle and Boiler Convective Section (printed pp. 18-3–18-4)

```yaml
id: pp-cmp-water-steam-cycle-diagram
kind: figure
teaches: >
  A generic mill water/steam cycle as one labeled process diagram: one
  power boiler (base-loaded on bark/hog fuel, supplemented with coal, oil,
  or gas) and one recovery boiler (base-loaded on a constant flow of black
  liquor fuel, with steam flow/pressure allowed to fluctuate) both
  discharge into a common high-pressure superheated-steam header, whose
  pressure (typically 1000-1500 psig) is controlled by varying the power
  boiler's own fuel input — the chapter's own orienting figure, since every
  following section (BFW, steam generation, sootblowers, PRV/turbine
  bypass, condensing) is a zoom-in on one part of this one cycle.
concept-tags: [water steam cycle, power boiler, recovery boiler, black liquor fuel, steam header, base load, boiler feedwater]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 18-1 'Water/Steam Cycle Diagram,' p. 18-3 (PDF p. 215), drawing E1385"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled P&ID-style flow diagram, drawing number E1385 printed at
  upper left — no TAPPI credit (first-party Fisher content, unlike the
  bulk of Chapters 14-17's process art). No control-valve tags visible on
  this system-level diagram itself; the chapter's per-topic write-ups (BFW
  Recirculation, Feedwater Startup/Regulating, Sootblower, Main Steam
  PRV/Turbine Bypass, Condensate Recirculation) each describe their own
  duty point in prose against this cycle rather than a tagged figure.
  Checked against the whole library: no exact drawing-number match found —
  genuinely unique to this chapter.
```

```yaml
id: pp-cmp-boiler-upper-convective-section
kind: figure
teaches: >
  An enlarged view of a power/recovery boiler's upper convective section:
  boiler feedwater (BFW) enters the economizer, then flows to the steam
  drum of the generating section; saturated steam leaving the steam drum
  passes through primary and secondary superheater sections (with
  attemperation/desuperheating between them to control final temperature
  and prevent tube overheating) before reaching the high-pressure
  superheated steam header, where a vent handles superheater moisture
  clearing at startup and pressure relief; a separate valve is shown
  controlling steam flow to the sootblowers.
concept-tags: [boiler convective section, economizer, steam drum, superheater, attemperation, desuperheating, sootblower valve, steam vent]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 18-2 'Power or Recovery Boiler Upper Convective Section,' p. 18-4 (PDF p. 216), drawing E1386"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Full labeled cutaway/schematic, drawing number E1386 printed at upper
  left — no TAPPI credit, first-party Fisher content. Zooms into the
  generating/superheating stage of Figure 18-1's whole-cycle diagram, the
  same "system diagram then stage-level detail" pairing pattern already
  seen elsewhere in this book (e.g. Chapter 10B's steaming-vessel detail
  following its system diagram). Checked against the whole library: no
  exact drawing-number match found — genuinely unique to this chapter.
```

### Condensate Return System (printed p. 18-1)

```yaml
id: pp-topic-boiler-feedwater-composition-and-treatment
kind: topic
teaches: >
  Boiler feedwater (BFW) is a mixture of condensate returned from process
  and demineralized/deionized make-up water — in a typical mill, only
  40-50% of condensate is returned (the rest is lost to direct
  heating/cleaning applications like pulp cooking and sootblowers, to the
  transport system, or to contamination). Demineralizing removes hardness
  minerals and silica that would otherwise deposit on boiler tubes, but is
  large/expensive equipment, so maximizing clean condensate return is both
  an economic and operational priority. A real safeguard: if contaminated
  condensate (black liquor, white liquor) enters the boiler it causes
  serious operational problems, so a conductivity-element-triggered
  condensate dump system senses contamination and diverts it to sewer
  automatically rather than relying on a manual-operated system.
concept-tags: [boiler feedwater, condensate return, demineralized water, deionized water, condensate contamination, conductivity element]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 18 'Boilers — Water/Steam Cycle,' 'Condensate Return System' section, printed p. 18-1 (PDF p. 209)"
relatedFigures: [pp-cmp-water-steam-cycle-diagram]
relatedTopics: []
used-by: []
notes: >
  Real prose read directly (pdftotext -layout, PDF p. 209). Not captured by
  either of this chapter's two figure entries — Figure 18-1's own `teaches`
  field is about the boiler-pair/header architecture, not BFW composition
  or the condensate-dump safeguard.
```

### Feedwater Recirculation Valve (printed p. 18-2)

```yaml
id: pp-topic-feedwater-recirculation-methods
kind: topic
teaches: >
  Boiler feed pump recirculation exists to protect the pump from cavitation
  and excess temperature rise. Three methods, in order of historical
  development: continuous recirculation and on/off recirculation (both
  older, simpler), and modulating recirculation (the current method) —
  modulating provides minimum recirculation flow to protect the pump while
  optimizing efficiency, but requires a "high technology" recirculation
  valve since it typically experiences cavitation and needs tight shutoff
  (any leakage past the valve cavitates and damages the seat). A named
  materials caveat: amine- or hydrazine-treated feedwater is corrosive to
  the cobalt binding in Alloy 6, so Alloy 6 trim should be avoided when
  feedwater is treated with these chemicals.
concept-tags: [feed pump recirculation, modulating recirculation, cavitation, tight shutoff, alloy 6, hydrazine corrosion]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 18, 'Feedwater Recirculation Valve' section, printed p. 18-2 (PDF p. 210)"
relatedFigures: []
relatedTopics: []
used-by: []
notes: >
  Real prose read directly. The Alloy 6/hydrazine corrosion caveat is the
  same specific failure mode already documented in Power & Severe Service
  Sourcebook's `pss-topic-alloy6-feedwater-corrosion` (ch9d) and
  `pss-topic-alloy6-erosion-corrosion-case` (ch10, Control Valve Handbook
  side) — a third independent sourcebook stating the identical named
  materials failure. Not cross-referenced by relatedTopics since those ids
  weren't independently re-verified in this pass (out of scope to open
  those files again); flagged here for a future cross-linking pass instead
  of assumed.
```

### Feedwater Startup and Regulating Valves (printed p. 18-2)

```yaml
id: pp-topic-two-valve-feedwater-startup-regulator-design
kind: topic
teaches: >
  During boiler drum-fill startup (minimal drum pressure), the feedwater
  startup valve takes the entire pressure drop, which makes cavitation a
  real concern — so the startup valve must be sized in combination with
  the feedwater regulator valve to ensure the regulator never sees
  damaging cavitation once the transition happens. The most common split
  is 80% capacity in the startup valve to 20% in the regulator valve; the
  startup valve closes once the regulator takes over. A named, common
  failure mode: using only the regulator valve for both functions (not
  using the startup valve at all), or switching between the two valves too
  quickly — both real misapplication patterns the source calls out
  directly. A second named failure mode, distinct from cavitation:
  operating either valve below its minimum operating point causes
  "gear-toothing" damage on the plug.
concept-tags: [feedwater startup valve, feedwater regulator valve, boiler drum fill, cavitation, gear-toothing, valve sizing coordination]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 18, 'Feedwater Startup and Regulating Valves' section, printed p. 18-2 (PDF p. 210)"
relatedFigures: []
relatedTopics: []
used-by: []
notes: >
  Real prose read directly. The 80/20 capacity split and "gear-toothing"
  failure mode are specific, named details not present in either of this
  chapter's figure entries.
```

### Steam Generation (printed pp. 18-3–18-4)

```yaml
id: pp-topic-superheater-attemperation-and-blowdown
kind: topic
teaches: >
  As saturated steam leaves the steam drum, trace solids are left behind
  and must be removed via continuous bleed/blowdown; the mud drum (a low
  point for solids to settle) has its own intermittent blowdown for the
  same reason. Superheating happens in primary and secondary sections,
  with attemperation/desuperheating between them to control final
  temperature and prevent tube overheating — the attemperation spray water
  must be demineralized-quality (a common source is BFW from the boiler
  feedwater pump discharge) to avoid depositing inside the tubes. The vent
  on the superheated-steam outlet (shown in Figure 18-2) actually serves
  three distinct real functions, not one: clearing superheater moisture at
  startup (so no water droplets reach the turbine), pressure relief on a
  high-pressure alarm, and — a third, separate use — opening on high
  pressure just before the spring-operated safety valve would lift.
concept-tags: [steam drum, mud drum, blowdown, superheater, attemperation, desuperheating, vent function]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 18, 'Steam Generation' section, printed pp. 18-3–18-4 (PDF pp. 211-212)"
relatedFigures: [pp-cmp-boiler-upper-convective-section]
relatedTopics: []
used-by: []
notes: >
  Real prose read directly. Figure 18-2's own `teaches` field names
  attemperation and the vent but doesn't state the vent's three distinct
  functions or the blowdown/water-quality detail — this entry adds that
  real depth rather than restating the figure caption.
```

### Sootblower Valve (printed pp. 18-4–18-5)

```yaml
id: pp-topic-sootblower-mechanism-types
kind: topic
teaches: >
  Fouling of boiler tubes from combustion deposits (coal, oil, biomass,
  other waste fuels) reduces thermal efficiency and causes operational
  difficulty, so an online cleaning method is required — sootblowers,
  using flowing media (water, air, or steam) to remove deposits. Steam is
  the most common media; widespread water use has been limited by the
  real risk of thermal shock on the tube banks. Three real sootblower
  types: wall blowers (short lance, nozzle tip, rotates in a circular
  pattern, used for furnace walls), retractable sootblowers (longer lance
  inserted into the boiler for high flue-gas-temperature zones, fully or
  partially retractable), and partially-retractable sootblowers (used
  where the sootblower's own materials can withstand the flue gas
  temperature without full retraction).
concept-tags: [sootblower, wall blower, retractable sootblower, thermal shock, boiler tube fouling]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 18, 'Sootblower Valve' section, printed pp. 18-4–18-5 (PDF pp. 212-213)"
relatedFigures: [pp-cmp-boiler-upper-convective-section]
relatedTopics: []
used-by: []
notes: >
  Real prose read directly. The three sootblower-type distinction and the
  water-vs-steam thermal-shock rationale are not in Figure 18-2's own
  teaches field (which names only the sootblower valve's existence, not
  the mechanism).
```

### Steam Turbine Generators / Main Steam PRV and Turbine Bypass (printed pp. 18-4–18-5)

```yaml
id: pp-topic-steam-header-architecture-and-turbine-types
kind: topic
teaches: >
  Most mills run a three-header steam system — high (1000-2000 psig),
  medium (500 psig), and low (100 psig) pressure — because a single
  pressure level cannot serve wood-chip preparation, process heating,
  drying, boiler cleaning, and power generation at once. Power/recovery
  boilers feed the high header directly; pressure reduction to medium and
  low happens via either a pressure-reducing valve (PRV) or a steam
  turbine (turbo-generator) — each PRV can only perform a single pressure
  reduction step, so bridging all three headers requires multiple PRVs in
  series. On the turbine side: backpressure turbines (discharge to a
  lower-pressure process header) provide more than double the fuel-energy
  utilization of condensing turbines (discharge to a condenser), because a
  condensing turbine's exhaust latent heat is wasted in the condenser —
  supplying process steam is the primary concern even though the
  electrical power produced (typically 30-70 MW) matters too.
concept-tags: [steam header architecture, pressure reducing valve, backpressure turbine, condensing turbine, turbo-generator, extraction steam]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 18, 'Steam Turbine Generators' and 'Main Steam PRV and Turbine Bypass' sections, printed pp. 18-4–18-5 (PDF pp. 212-213)"
relatedFigures: []
relatedTopics: []
used-by: []
notes: >
  Real prose read directly, both sections combined into one entry since
  they describe one coherent header/turbine architecture, not two separate
  concepts. This chapter's own turbine-bypass content (a bypass valve
  installed in parallel with the turbine so pressure reduction continues
  during turbine outage) is the same real mechanism already documented as
  `cvh-topic-turbine-bypass-system-rationale` (Control Valve Handbook ch7,
  verified to exist) and `pss-topic-turbine-bypass-system-function`/
  `pss-topic-turbine-bypass-system-purpose` (Power & Severe Service
  Sourcebook ch9a/ch9d, both verified to exist) — deliberately not
  re-authored as a fourth near-duplicate entry, consistent with this
  project's standing discipline against padding cross-book boilerplate.
  Likewise, this chapter's steam-conditioning-valve rationale (combining
  pressure and temperature control in one element) restates
  `cvh-topic-steam-conditioning-valve-rationale` (verified to exist) with
  no new detail — not re-authored either.
```

### Condensing and Cooling System / Condensate Recirculation Valve (printed pp. 18-5–18-6)

```yaml
id: pp-topic-condenser-vacuum-economics
kind: topic
teaches: >
  A condenser operates at a vacuum and decreases overall cycle efficiency,
  but is essential anyway: it provides a "cushion" — somewhere to dump
  steam when part of the process is down — so the mill can keep producing
  electrical power even when process steam demand drops. Cooling water
  passes through the condenser tubes in a closed loop back to a cooling
  tower; because cooling demand varies seasonally, not all cooling-tower
  cells run at once, so butterfly valves are used to isolate individual
  cells or bypass the tower entirely.
concept-tags: [condenser, cooling tower, vacuum, cycle efficiency, cell isolation]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Chapter 18, 'Condensing and Cooling System' section, printed p. 18-5 (PDF p. 213)"
relatedFigures: []
relatedTopics: []
used-by: []
notes: >
  Real prose read directly. This chapter's condensate-recirculation-valve
  content ("inlet sizing often indicates flashing... experience shows this
  is always a cavitating application... a sparger or diffuser downstream
  emitting back pressure... will cause cavitation rather than flashing")
  is the same real misdiagnosis pattern already documented as
  `pss-topic-condensate-recirc-cavitation-diagnosis` (Power & Severe
  Service Sourcebook ch9d, verified to exist) — a third independent
  sourcebook naming the identical flashing-vs-cavitation misread for a
  condensate recirculation valve specifically. Deliberately not
  re-authored as a duplicate entry.
```

## Open Items

- **Chapter/scope boundary confirmed directly**, not merely inherited from
  any candidate range — **including confirming this is the real end of the
  book, not an assumption from the page count.** Rendered and read PDF pp.
  209-218 in full: p. 209 = printed 18-1 (Chapter 18 opening, "Boilers —
  Water/Steam Cycle"), p. 216 = printed 18-8 (Figure 18-2, chapter's
  genuine last content page — no trailing blank within the chapter's own
  numbered pages). PDF p. 217 rendered and visually confirmed genuinely
  **blank** — no text, no figure, no page-number footer even, pure white
  space. PDF p. 218 rendered and visually confirmed as the book's real
  **back-cover/colophon page**: Emerson Process Management office addresses
  (Marshalltown Iowa, Sorocaba Brazil, Chatham UK, Dubai UAE) and a legal
  disclaimer paragraph about product specifications — genuine back matter,
  not a 19th chapter or any further technical content. `pdfinfo` confirms
  218 total pages, matching exactly; there is nothing beyond p. 218. Zero
  page offset for the chapter itself (PDF = printed + 191) throughout.
- **Naming note:** the table of contents lists this chapter as "Power &
  Recovery Boiler"; the real printed chapter-divider title reads "Boilers
  — Water/Steam Cycle" — confirmed by direct rendering of PDF p. 209. Used
  the real printed form throughout this file, consistent with the standing
  "confirm the real printed title, don't trust the TOC" convention already
  applied in this book's Chapters 5 and 10A.
- **Full chapter coverage.** All 2 real figures in range (Figures 18-1,
  18-2) located and catalogued; every page 209-216 was rendered and read
  directly, no gaps in the numeric sequence — the chapter contains exactly
  two figures, confirmed, none skipped. Pages 18-2, 18-3 (part), 18-5
  through 18-7 (PDF 210, part of 211, 213-214... precisely: PDF 210-214)
  are exclusively per-valve/per-topic narrative write-ups ("Boiler
  Feedwater System," "Feedwater Recirculation Valve," "Feedwater Startup
  and Regulating Valves," "Steam Generation," "Sootblower Valve," "Steam
  Turbine Generators," "Main Steam PRV and Turbine Bypass," "Turbine
  Bypass," "Condensing and Cooling System," "Condensate Recirculation
  Valve") with no figures at all — confirmed by direct reading of every
  page, not assumed from a sparse text-extraction hit.
- **No low-confidence flags.** Every caption, drawing number, and page
  location was confirmed by direct visual inspection of the rendered PNG
  at 150 dpi, not text extraction alone.
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter.
- **Table exclusion confirmed.** The chapter's closing content (p. 18-6,
  PDF 214) is an unnumbered "PROCESS / Water/Steam Power Cycle / FISHER
  VALVE PRODUCT DESIGN" valve-tag reference table (Valve Tag#, Application
  Description, Control Function, and Fisher product-line columns spanning
  V150/V300, V500, Control-Disk, E-Body, EH, HP, Steam Conditioning,
  Typical Valve Size) — excluded per the standing valve-application/
  valve-tag reference-table rule already applied throughout this book. No
  "Figure" or "Table" caption/number appears anywhere on the page, and its
  content is purely tabular, not a diagram.
- **Cross-reference findings.** Checked both drawing numbers (E1385,
  E1386) against the whole library — **no match found for either**. Also
  grepped the whole library for "boiler feedwater," "sootblower," "turbine
  bypass," "water/steam cycle," and related terms: "boiler feedwater" and
  "turbine bypass" as generic concepts do appear in several other
  sourcebooks' own boiler/steam-conditioning chapters (Control Valve
  Handbook ch3/ch7, Oil & Gas ch9, Power & Severe Service ch7/ch8/ch9a/
  ch9d, Refining ch3) — each checked directly and confirmed to be a
  different book's own distinct figure/content, not a drawing-number match
  to either of this chapter's two figures; this chapter's own turbine-
  bypass system diagram (Figure 7-12, `pp-cmp-turbine-bypass-system-
  schematic`) was already cross-referenced against Power & Severe Service
  ch7 in this book's own Chapter 7 file, and this chapter (18) introduces
  no new turbine-bypass diagram of its own to re-check. Genuinely unique
  to this Pulp & Paper book at the figure level.
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook is the sole and sufficient source for both of this
  chapter's components.
- **`kind: topic` indexing pass (2026-09-17).** Added 7 new topic entries
  grounded in the chapter's real per-valve narrative prose (pp. 209-213),
  which the original figures-only pass correctly left uncatalogued as
  components but which carries genuine transferable engineering concepts
  beyond the 2 figures: BFW composition/treatment, feed-pump recirculation
  method evolution (with the same Alloy 6/hydrazine corrosion caveat found
  independently in two other sourcebooks), the two-valve startup/regulator
  80/20 sizing design (with its named "gear-toothing" failure mode),
  superheater attemperation/blowdown mechanics and the vent's three real
  functions, sootblower mechanism types, the three-header steam
  architecture with backpressure-vs-condensing turbine economics, and
  condenser vacuum economics. Three real candidates were deliberately NOT
  authored as new entries — turbine-bypass rationale, steam-conditioning
  valve rationale, and the condensate-recirculation flashing-vs-cavitation
  misdiagnosis — because each is a verified, near-identical restatement of
  content already indexed elsewhere (Control Valve Handbook ch7, Power &
  Severe Service Sourcebook ch9a/ch9d), consistent with this project's
  standing discipline against padding cross-book boilerplate. The
  unnumbered valve-tag reference table (printed p. 18-6) stays correctly
  excluded as reference data, unchanged. Chapter total is now 9 components
  (2 figures + 7 topics).
- **Whole-book closure note:** this chapter closes the Pulp & Paper
  Sourcebook cataloguing pass in full. All 18 real chapters (1, 2, 3, 4, 5,
  6, 7, 8, 9, 10A, 10B, 11, 12, 13, 14, 15, 16, 17, 18 — chapter 10 genuinely
  has exactly two lettered sub-parts, 10A and 10B, confirmed directly
  against the book's own real table of contents on PDF p. 2, no 10C or
  further sub-parts) are now catalogued end to end, PDF pp. 9-216, with pp.
  1-8 (front matter/TOC/introduction) and pp. 217-218 (blank + colophon)
  confirmed as genuine non-content pages requiring no further cataloguing.
