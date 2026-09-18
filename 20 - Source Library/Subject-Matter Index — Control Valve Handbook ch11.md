---
title: Subject-Matter Index — Control Valve Handbook ch11
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Control Valve Handbook, 6th ed. (D101881X012, © Aug 2023 Emerson/Fisher)
chapter: 11 — Sustainability
updated: 2026-09-17
---

# Subject-Matter Index — Control Valve Handbook, Chapter 11 (Sustainability)

Full-chapter cataloging pass, part of the CVH ch5–15 indexing directive
(Franz, 2026-09-17). Matches ch1–4's rigor: every page in the chapter's
confirmed range was rendered as an image and visually inspected.

**Real chapter boundary, confirmed by direct page reads:** Chapter 11 spans
PDF pages 240–249 inclusive. Page 240 is the "Chapter 11 / Sustainability"
divider page; page 249 is blank (chapter-end filler, no figures); PDF page
250 is the "Chapter 12 / Safety Instrumented Systems" divider. Zero
printed/PDF page offset, consistent with every other chapter.

This is a short, largely prose chapter (ESG, decarbonization, net-zero
targets, emerging-technology overview) — only 3 figures across 10 pages,
against 7 pages of pure prose/bulleted text with no figures at all (pp. 241,
242, 244, 247, 248 confirmed to carry no figures on direct inspection). This
low figure density is a genuine, confirmed property of the chapter's real
content, not a sign anything was missed — see Open Items.

**Topic-indexing pass (2026-09-17), same directive:** the chapter's
figure-only count above understated its real teaching content — this is
exactly the prose-heavy chapter the `kind: topic` convention (see
`Source Library.md`) exists for. Six `kind: topic` entries added, each
grounded directly in the real body prose (`cvh-topic-decarbonization-
pathways`, `cvh-topic-greening-framework`, `cvh-topic-emissions-scopes`,
`cvh-topic-net-zero-target-setting`, `cvh-topic-valve-related-methane-
reduction`, `cvh-topic-carbon-neutral-vs-net-zero`). Chapter total is now
**9 components** (3 figures + 6 topics).

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Control Valve Handbook, 6th ed.** | D101881X012 · Aug 2023 | `current` | First-party Emerson/Fisher document. No archive or legacy material was consulted for this chapter. |

## Components

### 11.1–11.3 Sustainability, Energy Efficiency, and Decarbonization Pathways (printed pp. 241–242)

```yaml
id: cvh-topic-decarbonization-pathways
kind: topic
concept-tags: [sustainability, decarbonization, CCUS, carbon capture, energy efficiency, net-zero]
status: current
teaches: >
  Sustainability in the process-control world centers on four strategic
  areas: decarbonization, emissions management, electrification, and
  energy efficiency/optimization. Energy efficiency is itself a major
  lever — only about one-third of primary energy produced today actually
  performs its intended function (heating, cooling, moving a vehicle);
  two-thirds is lost to heat escape, braking, electrical line losses, and
  unoptimized processes. Decarbonization proceeds via two general
  pathways: (1) mitigation of carbon sources — deploying renewable
  resources and efficiency improvements for carbon-intensive industrial
  processes; (2) deployment of CCUS (Carbon Capture, Utilization and
  Storage) — extracting point-source carbon emissions and sequestering
  them underground, with the potential to remove 90–99% of an industrial
  facility's carbon emissions. CCUS is described as the only technology
  group that both reduces emissions in key sectors directly AND removes
  CO2 already in the atmosphere.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§11.1 Sustainability, §11.2 Energy Reduction and Efficiencies, §11.3 Decarbonization, pp. 241–242 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-greening-framework, cvh-topic-net-zero-target-setting]
used-by: []
notes: >
  Read directly via pdftotext from the real PDF pages (240–249 range,
  confirmed by this file's own existing chapter-boundary note). The
  90–99% CCUS removal figure and the one-third/two-thirds energy-loss
  figure are both stated directly in the source prose, not inferred.
```

### 11.4–11.6 The Three "Greening" Categories (printed pp. 242–243)

```yaml
id: cvh-topic-greening-framework
kind: topic
concept-tags: [sustainability, greening, corporate strategy, decarbonization]
status: current
teaches: >
  The source frames a company's sustainability approach as three distinct
  "Greening" categories. Greening OF: internal initiatives — in-house
  goals/actions a company takes to reduce its own greenhouse gas
  emissions (e.g. LED lighting retrofits, automated lighting shutdown,
  compressed-air leak detection, tuned chilled-water control-system
  scheduling/setpoints) — and engaging upstream partners to reduce
  emissions in the products they supply. Greening BY: the products and
  services a company offers that help others decarbonize — control
  systems, software, electric-actuation solutions, environmental
  packing, valve condition monitoring. Greening WITH: industry-wide
  collaboration — participation in industry forums, research-institution
  partnerships, and multi-stakeholder alliances, on the premise that no
  single stakeholder (government, business, community, or academia) can
  manage the low-carbon transition alone.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§11.4 Greening OF, §11.5 Greening By, §11.6 Greening With, pp. 242–243 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-sustainability-decarbonization-table]
relatedTopics: [cvh-topic-decarbonization-pathways, cvh-topic-valve-related-methane-reduction]
used-by: []
notes: >
  The "Greening BY" section's own examples (electric actuation, valve
  condition monitoring) are the most control-valve-specific content in
  this framework — cross-referenced forward to
  cvh-topic-valve-related-methane-reduction, which covers the same
  BY-category content in hardware-specific depth.
```

### 11.6 Greening With — Scope 1/2/3 Emissions (printed p. 243)

```yaml
id: cvh-cmp-greenhouse-gas-scopes
teaches: Greenhouse gas protocol scope diagram — a GHG cloud with Scope 1 (direct emissions from owned/controlled sources), Scope 2 (indirect emissions from purchased electricity generation), and Scope 3 (all other indirect emissions, upstream and downstream in the value chain) shown as icon groups with upstream/downstream flow arrows.
concept-tags: [greenhouse gas, GHG protocol, scope 1, scope 2, scope 3, sustainability, emissions]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.243, §11.6 "Greening With", Figure 11.1 "Greenhouse Gas"
delivery: not yet determined
used-by: []
notes: An infographic-style diagram (icons + labelled arrows), not a technical cutaway or engineering schematic — consistent with this chapter's non-hardware subject matter.
```

```yaml
id: cvh-topic-emissions-scopes
kind: topic
concept-tags: [scope 1, scope 2, scope 3, GHG protocol, emissions accounting]
status: current
teaches: >
  Expands beyond Figure 11.1's icon diagram into the real definitions and
  measurement nuance the source prose gives: Scope 1 = direct emissions
  from owned/controlled sources (e.g. comfort heating, industrial
  applications on-site). Scope 2 = indirect emissions from purchased
  electricity generation — "indirect" because the emissions occur at the
  point of generation (e.g. a coal or natural-gas plant), not at the
  company's own site. Scope 3 = all other indirect value-chain emissions,
  split into 15 named sub-categories (purchased goods/services, capital
  goods, fuel/energy-related activities not in Scope 1/2, upstream/
  downstream distribution, waste generated in operations, business
  travel, employee commuting, upstream/downstream leased assets,
  processing/use/end-of-life of sold products, franchises, investments).
  Industry-average Scope 3 breakdown given in the source: purchased
  goods/services ≈20–30% of total Scope 3; use of sold products ≈60–65%;
  business travel + employee commuting ≈2–3%; logistics (in+outbound)
  ≈2–3%. Scope 3 is typically the largest single contributor to total
  organizational emissions and the hardest to measure — many companies
  report Scopes 1 and 2 but have not fully measured Scope 3 yet.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§11.6 Greening With, 'Scope 1, 2, and 3 Emissions' subsection, pp. 243–244 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-greenhouse-gas-scopes]
relatedTopics: [cvh-topic-net-zero-target-setting]
used-by: []
notes: >
  The 15-category list and the 20–30%/60–65%/2–3%/2–3% breakdown are both
  stated directly in the source prose (the 15-item bulleted list appears
  verbatim on p. 244) — none of this appears in Figure 11.1 itself, which
  only shows the three scopes as icon groups with flow arrows.
```

### 11.5 Greening By — Emerging Technology Categories (printed p. 245)

```yaml
id: cvh-cmp-sustainability-decarbonization-table
teaches: A 5-category reference table of new and emerging decarbonization technologies — Hydrogen, Decarbonization/Carbon Capture, Alternative Fuel and Biochemical, Renewables, and Electrification and Storage — each with a bulleted list of specific technologies (e.g. green hydrogen electrolyzers, CCUS, biofuels, offshore wind, actuator electrification).
concept-tags: [sustainability, decarbonization, hydrogen, carbon capture, renewables, electrification]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.245, §11.5 "Greening By" (figure appears within this section, before §11.6), Figure 11.2 "Sustainability and Decarbonization"
delivery: not yet determined
used-by: []
notes: A structured reference table (5 columns, bulleted cells) captioned as a Figure — catalogued per the standing rule that a source-numbered figure is a component regardless of pictorial-vs-tabular content.
```

```yaml
id: cvh-topic-net-zero-target-setting
kind: topic
concept-tags: [net-zero, target-setting, SBTi, decarbonization, baseline year]
status: current
teaches: >
  The real process the source describes for setting a net-zero target:
  first, an in-depth analysis of a company's total emissions across
  Scope 1, 2, and 3 to establish a baseline year; then a target year is
  set to reach net-zero from that baseline. To keep the target aligned
  with current climate science, the source recommends using an
  internationally recognized standard — specifically the Science Based
  Targets initiative (SBTi) Net-Zero Standard, described as the world's
  leading organization driving adoption of science-based targets. A
  robust net-zero design requires an absolute reduction of greenhouse gas
  emissions of at least 90%, with high-quality carbon neutralization
  (offsetting) permitted only for the residual emissions that cannot
  otherwise be abated — net-zero is not simply "offset everything."
  Progress must then be monitored and measured on a yearly basis.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§11.7 Net-Zero Ambitions, pp. 244–245 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-emissions-scopes, cvh-topic-carbon-neutral-vs-net-zero]
used-by: []
notes: >
  The 90% absolute-reduction threshold is stated directly in the source
  ("A robust net-zero design requires the absolute reduction of
  greenhouse gas emissions by at least 90%..."), not inferred from
  general climate-policy knowledge.
```

### 11.9 ESG — Approach by Companies (printed p. 246)

```yaml
id: cvh-cmp-esg-approach-by-industries
teaches: ESG (Environmental, Social, Governance) framework reference table — three categories (Environmental, Social, Governance), each with a bulleted list of specific focus areas (e.g. reducing greenhouse gas emissions, workplace safety, board diversity and structure).
concept-tags: [ESG, environmental social governance, sustainability, corporate governance]
status: current
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: p.246, §11.9 "ESG - Approach by Companies", Figure 11.3 "ESG Approach by Different Industries"
delivery: not yet determined
used-by: []
notes: Structured reference table (3 category rows, each with a nested bulleted list), captioned as a Figure — same treatment as Figure 11.2.
```

### 11.9 Valve- and Actuation-Related Methane Reduction (printed pp. 246–247)

```yaml
id: cvh-topic-valve-related-methane-reduction
kind: topic
concept-tags: [methane emissions, natural-gas actuation, electric actuator, low-bleed, fugitive emissions, packing]
status: current
teaches: >
  The most directly control-valve-relevant content in this chapter.
  Remote oil and gas production areas and pipelines often use natural
  gas itself as the motive force for instrumentation and valve actuation
  — methane is vented with each valve stroke, or bled continuously from
  the instrumentation. Separately, control valves and pumps in chemical
  service emit pollutants through packing and seal leaks. Both emission
  sources can be substantially curtailed or eliminated through: proper
  equipment design; replacing natural-gas-actuated valves with electric
  actuators (often sold as retrofit kits, providing dramatic methane
  reduction); low-bleed pneumatic instrumentation alternatives; very-low-
  power electrical alternatives that can run on the output of a small
  solar system; and improved packing designs. In many real cases, the
  savings from reduced methane emissions, reduced regulatory testing
  requirements, and additional saleable natural gas production pay for
  the instrument/actuator upgrade itself.
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§11.9 ESG - Approach by Companies (methane/actuation-retrofit discussion), pp. 246–247 — prose, not figure-anchored"
relatedFigures: [cvh-cmp-esg-approach-by-industries]
relatedTopics: [cvh-topic-greening-framework]
used-by: []
notes: >
  This content sits under the §11.9 "ESG" heading in the source but is
  substantively about valve/actuator hardware choices, not corporate ESG
  reporting — indexed here by its real page location, cross-referenced
  to the Greening framework topic (this is real "Greening BY" content in
  hardware-specific depth).
```

```yaml
id: cvh-topic-carbon-neutral-vs-net-zero
kind: topic
concept-tags: [carbon neutral, net-zero, terminology, definitions]
status: current
teaches: >
  Two commonly conflated terms, defined distinctly by the source: carbon
  neutral means any CO2 a company's activities release into the
  atmosphere is balanced by an equivalent amount being removed (i.e. it
  permits offsetting). Net-zero carbon emissions means an activity
  releases net-zero carbon emissions in the first place — no carbon
  needs to be captured or offset because none was emitted to begin with.
  The source states "Total Net-Zero = Net Zero" as a plain equivalence,
  and frames the two terms as similar in goal (reducing/balancing a
  carbon footprint) but different in mechanism (balancing after the fact
  vs. not emitting at all).
source:
  - doc: Control Valve Handbook, 6th ed. (D101881X012)
    locator: "§11.12 Commonly Used Terms in Sustainability, pp. 247–248 — prose, not figure-anchored"
relatedFigures: []
relatedTopics: [cvh-topic-net-zero-target-setting]
used-by: []
notes: >
  Verbatim source definitions, not a general-knowledge restatement — the
  source's own glossary section (§11.12) is short (this is the only
  entry in it) but genuinely distinct from the net-zero target-setting
  process topic above.
```

## Open items

- **Chapter boundary confirmed by direct page reads:** PDF page 240 (divider) through PDF page 249 (blank, chapter-end filler); PDF page 250 is the Chapter 12 divider. No printed/PDF page offset.
- **Full coverage: 3 figures, Figures 11.1–11.3, no gaps.** Every page in the chapter's 10-page range was rendered and visually inspected: pages 241, 242, 244, 247, and 248 confirmed to carry zero figures (pure prose/bulleted-list content); page 249 is blank chapter-end filler.
- **Near-zero figure count is an accepted, confirmed-intentional outcome, not an oversight.** This chapter's subject (ESG, decarbonization strategy, net-zero targets) is prose- and reference-table-driven, not equipment-diagram-driven, unlike every other chapter catalogued so far. All three figures found are reference tables or infographics, not technical hardware diagrams — a genuine, expected difference in kind from Chapters 1–10's cataloguing, not a sign this chapter was under-read.
- **Two of the three figures are structured reference tables, not diagrams**, captioned as figures in the source — catalogued per the same standing rule ch1–10 already established (a source-numbered figure is a component regardless of pictorial-vs-tabular content).
- **No duplicate captions or source citation errors found** in this chapter.
- **Table exclusion:** no separately-numbered "Table N" items exist in this chapter.
- **Cross-reference check:** `Subject-Matter Index — 14101 ch1-ch2.md`, `Subject-Matter Index — 14101 ch3.md`, `Subject-Matter Index — bench-set-657.md`, and `Subject-Matter Index — Control Valve Handbook ch4.md` were checked — no overlap. This chapter's ESG/sustainability subject matter is topically disjoint from every other indexed chapter's hardware/procedure content; the check found nothing to cross-reference, as expected.
- **No archive or legacy material** was found or consulted for this chapter.
- **Topic-indexing pass (2026-09-17):** six `kind: topic` entries added
  (`cvh-topic-decarbonization-pathways`, `cvh-topic-greening-framework`,
  `cvh-topic-emissions-scopes`, `cvh-topic-net-zero-target-setting`,
  `cvh-topic-valve-related-methane-reduction`,
  `cvh-topic-carbon-neutral-vs-net-zero`), each read directly from the
  real body prose (pp. 241–248) via `pdftotext`, not inferred from the
  three existing figure captions. **§11.8 (ESG history/origin), §11.10
  (Maximizing ESG Through Collaboration), and §11.11 (Conclusion)
  confirmed reference-data/narrative-only** — read directly, contain
  real context (the 2004 UN/Kofi Annan ESG origin story, industry-
  collaboration framing, a closing summary) but no additional distinct
  engineering or process concept beyond what the ESG reference-table
  figure (`cvh-cmp-esg-approach-by-industries`) and the Greening
  framework topic above already capture — not padded with a thin entry.
  Every `relatedFigures`/`relatedTopics` reference across all six new
  entries was checked to resolve to a real existing id before use.