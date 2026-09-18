---
title: Subject-Matter Index — Pulp & Paper Sourcebook ch16
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Pulp & Paper (Fisher Controls International LLC, D103540X012, © 2011)
chapter: ch16 — Wet-End Chemistry
updated: 2026-09-15
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook — Pulp & Paper, Chapter 16

**Chapter 16 — "Wet-End Chemistry"** (the printed chapter-divider title
reads "Wet-End Chemistry," with a hyphen, matching the TOC's "Wet End
Chemistry" closely enough that no naming-discrepancy flag is needed).
Standing full-chapter cataloguing pass, continuing the whole-book
completion pass begun with Chapter 1. A very short chapter — 4 pages — with
exactly one figure; the remaining three pages are prose covering fillers,
retention aids, and defoamers/biocides, each a chemistry topic rather than
a piece of process hardware.

Chapter boundaries confirmed directly by rendering: PDF page 193 = printed
p. 16-1 (Chapter 16 divider, "Wet-End Chemistry," Figure 16-1 on the same
page as the divider), PDF page 196 = printed p. 16-4, confirmed **blank**
(rendered and visually inspected — only the page-number footer). PDF page
197 = Chapter 17 divider ("Paper Machine"). Zero page offset throughout
(PDF page = printed page number + 177). Chapter 16 = PDF pp. 193-196.

All figures are from `20 - Source Library/Industry Specific Sourcebooks/Control
Valve Sourcebook - Pulp & Paper.pdf`. This pass catalogs existence and location
only — it does not crop or extract images. Record shape: `id` · `kind` ·
`teaches` · `concept-tags` · `status` · `source` (`doc` + `locator`) ·
`delivery` · `used-by` · `notes`.

## Precedence

| Source | Edition / ID | Bucket | Notes |
|---|---|---|---|
| **Fisher Control Valve Sourcebook — Pulp & Paper** | D103540X012 · © 2011 Fisher Controls International LLC | `current` | First-party Fisher document; sole source for this chapter. Its one figure is TAPPI-licensed process art, the same "Making Pulp and Paper Series, used with permission" arrangement already confirmed in Chapters 14 and 15. |

## Components

### Chapter 16 — Stock Approach System (printed p. 16-1)

```yaml
id: pp-cmp-stock-approach-system
kind: figure
teaches: >
  The stock approach system as one labeled isometric diagram: the same
  deaerator/cleaners/pressure-screen/headbox/stuffbox equipment grouping
  already introduced in the thin-stock and paper-machine chapters, shown
  here as the point where wet-end additives (retention aids in particular)
  are actually introduced — retention aids are typically added just before
  the headbox or headbox screen (referenced directly against this figure
  in the surrounding "Fillers" discussion) because adding them any earlier
  risks breaking up the polymer chains through excess agitation.
concept-tags: [stock approach system, deaerator, cleaners, pressure screen, headbox, stuffbox, retention aid, wet-end chemistry]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "Figure 16-1 'Stock Approach System,' p. 16-1 (PDF p. 193)"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  Drawing credited in-page: "Drawing is from TAPPI's Making Pulp and Paper
  Series and is used with permission." Visually closely related to this
  book's own Figure 15-7 "Thin Stock System" and the unnamed Figure 17-2 —
  all three show a similar Deaerator/Cleaners/Headbox/Stuffbox/Pressure
  Screen equipment grouping in isometric perspective, but each was directly
  visually compared and confirmed to be a distinct, separately captioned
  diagram (different exact layout and labeling), not the same drawing
  reused across chapters — see `pp-cmp-thin-stock-system`'s own notes
  (`Subject-Matter Index — Pulp & Paper Sourcebook ch15.md`) for the fuller
  three-way comparison, and `pp-cmp-paper-machine-wet-end-overview`'s own
  notes (`Subject-Matter Index — Pulp & Paper Sourcebook ch17.md`) for the
  Figure 17-2 side of it.
```

### Chapter 16 — Wet-end additive chemistry (printed pp. 16-1–16-3)

```yaml
id: pp-topic-sizing-chemistry
kind: topic
teaches: >
  Wet-end additives split into two categories: functional additives (meet
  a specific end-customer requirement) and process additives (modify the
  paper's own properties). Sizing is the first functional example the
  chapter gives: it lets paper resist fluid penetration, critical for
  printing (unsized paper lets ink diffuse into the sheet and cause
  quality problems). The traditional wet-end sizing agent is rosin size
  (a modified rosin, a byproduct of Kraft pulping from softwoods), made to
  work by adding aluminum sulfate ("papermaker's alum") — the combination
  makes paper water-repellent under acidic conditions, hence "acid
  sizing."
concept-tags: [wet-end chemistry, sizing, rosin size, acid sizing, papermaker's alum, functional additive, process additive]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§16, p. 16-1 (PDF p. 193), running text alongside Figure 16-1"
relatedFigures: [pp-cmp-stock-approach-system]
relatedTopics: []
used-by: []
notes: >
  Real prose read directly (pdftotext, PDF p.193), not inferred from the
  existing figure entry's own summary — that entry documents only the
  retention-aid/headbox-timing point, not this chapter's sizing chemistry
  at all, a genuine gap in the prior figures-only pass's own chapter
  characterization (its Open Items describe pp.16-2–16-3 as covering
  "fillers, retention aids, and defoamers/biocides" only — p.16-1's own
  running text alongside the figure was not characterized).
```

```yaml
id: pp-topic-internal-strength-additives
kind: topic
teaches: >
  Internal strength additives reinforce fiber-to-fiber bonds to improve
  tensile strength, reduce surface "fuzz"/lint, and slow water
  penetration. Traditional agents are natural/modified starches
  (glucose polymers) and gums (mannose/galactose polymers); the current
  trend is synthetic polymers (latexes, polyacrylamides) used in
  combination with starches/gums, meeting a wider range of strength/
  stiffness/stretch requirements than the traditional agents alone.
concept-tags: [wet-end chemistry, internal strength, starch, gum, polyacrylamide, latex, tensile strength]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§16, p. 16-1 (PDF p. 193), running text"
relatedFigures: []
relatedTopics: [pp-topic-wet-strength-resins]
used-by: []
notes: Real prose read directly, distinct chemical mechanism from wet-strength resins below (general reinforcement vs. specifically water-durable bonding) — kept as separate entries rather than merged.
```

```yaml
id: pp-topic-wet-strength-resins
kind: topic
teaches: >
  Wet-strength resins tie fibers/fines together with bonds water doesn't
  break apart. Wet-strength paper is defined in the source as retaining
  more than 15% of its tensile strength when wet. The most common agents
  — urea-formaldehyde, melamine-formaldehyde, and polyamide resins — are
  themselves water-soluble, so (a real, non-obvious dependency) they must
  be fixed onto fibers using retention aids/fillers to actually stay in
  the sheet.
concept-tags: [wet-end chemistry, wet-strength resin, urea-formaldehyde, melamine-formaldehyde, polyamide, retention]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§16, p. 16-1 (PDF p. 193), running text"
relatedFigures: []
relatedTopics: [pp-topic-internal-strength-additives, pp-topic-retention-aid-mechanism]
used-by: []
notes: The water-soluble-resin-needs-retention-aid dependency is the real, citable link to the retention-aid topic below — not asserted without this source basis.
```

```yaml
id: pp-topic-filler-selection-tradeoffs
kind: topic
teaches: >
  Fillers (15-30% of most copy paper, mostly clay and PCC/precipitated
  calcium carbonate) lower material cost and can add brightness, opacity,
  or smoothness — but don't bond like cellulose fibers, so they reduce
  paper strength, which caps how much can be used. Filler particle size/
  shape trades off directly against paper properties: flatter microscopic
  filler particles increase density (useful against a paper's thickness
  spec), but small enough particles wedge between fibers and make the
  paper smoother instead. Four named fillers, each a real comparative
  tradeoff: clay (cheapest, stable, generally good performance), calcium
  carbonate (better opacifier than clay, higher brightness), titanium
  dioxide (brightest, most effective opacifier, but high cost), talc (a
  "soft" filler for a soft/silky feel).
concept-tags: [wet-end chemistry, filler, clay, calcium carbonate, titanium dioxide, talc, opacity, brightness]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§16, p. 16-2 (PDF p. 194), running text"
relatedFigures: []
relatedTopics: [pp-topic-retention-aid-mechanism, pp-topic-tio2-erosive-service-valve-requirements]
used-by: []
notes: Real four-way comparative tradeoff transcribed from the source, not summarized from general filler knowledge.
```

```yaml
id: pp-topic-retention-aid-mechanism
kind: topic
teaches: >
  Wet-end additives (fillers, wet-strength resins, etc.) are either
  water-soluble or small enough to pass through the forming fabric's
  openings — meaning they're at real risk of being lost from the process
  during sheet forming, not just diluted. Retention aids are added
  specifically to keep these additives attached to the fibers so they
  aren't lost on the moving wire/forming fabric. (The existing
  `pp-cmp-stock-approach-system` figure entry already documents the real
  detail of *when* retention aids are added relative to the headbox and
  why — that timing detail is not repeated here to avoid duplication;
  this entry is the underlying loss-mechanism retention aids exist to
  solve.)
concept-tags: [wet-end chemistry, retention aid, forming fabric, filler retention]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§16, p. 16-2 (PDF p. 194), running text"
relatedFigures: [pp-cmp-stock-approach-system]
relatedTopics: [pp-topic-wet-strength-resins, pp-topic-filler-selection-tradeoffs]
used-by: []
notes: Deliberately scoped to avoid restating the existing figure entry's own headbox-timing content — cross-referenced instead.
```

```yaml
id: pp-topic-defoamer-biocide-function
kind: topic
teaches: >
  High water throughput in the wet-end system generates foam, which can
  cause spots/pinholes in the paper — defoamers are added to coalesce
  bubbles into larger ones that rise and break at the surface. Separately,
  the warm, wet environment is real breeding ground for bacteria/fungal
  slimes (called "bugs" in the paper mill) that can cause holes, spots,
  and frequent sheet breaks — controlled by adding biocides to the paper
  machine's "white water" system. Two distinct problems (foam vs.
  biological growth), two distinct chemistries, addressed together in the
  same passage because both stem from the same wet, high-throughput
  environment.
concept-tags: [wet-end chemistry, defoamer, biocide, white water, foam, bacteria, fungal slime]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§16, p. 16-2 (PDF p. 194), running text"
relatedFigures: []
relatedTopics: []
used-by: []
notes: Real terminology ("bugs") transcribed as the source uses it, not softened or generalized.
```

```yaml
id: pp-topic-tio2-erosive-service-valve-requirements
kind: topic
teaches: >
  Titanium dioxide is added as a low-flow-rate slurry to pulp stock — the
  source states directly that this specific service "is very erosive and
  requires fine control and tight shutoff," and names two real Fisher
  valve solutions: Vee-Ball V150 with Micro-Scratch, Micro-Notch, or
  Macro-Notch trim in ceramic, or a V500 Reverse Flow valve with ceramic
  trim. This is real, actionable valve-selection guidance tied to a named
  process fluid — not general erosive-service guidance, a specific
  chemistry-to-hardware recommendation this chapter's own text makes.
concept-tags: [wet-end chemistry, titanium dioxide, erosive service, ceramic trim, Vee-Ball, V500, tight shutoff]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Pulp & Paper (D103540X012, © 2011 Fisher Controls International LLC)
    locator: "§16, p. 16-3 (PDF p. 195), \"Titanium Dioxide (TiO2) Applications\"/\"Typical Specification\" box"
relatedFigures: []
relatedTopics: [pp-topic-filler-selection-tradeoffs]
used-by: []
notes: >
  Cross-references Control Valve Handbook's `cvh-topic-particulate-cavitation-erosion`
  (verified real, `Subject-Matter Index — Control Valve Handbook ch6.md`) as
  the general mechanism this specific application is an instance of —
  kept as a separate record per the project's standing rule against
  merging content across source documents, not merged into the CVH entry.
  This is the one piece of this chapter that is genuinely valve-selection
  content rather than pure process chemistry — flagging it as the single
  highest-value entry in this short chapter.
```

## Open Items

- **`kind: topic` pass, added 2026-09-17.** Seven new topic entries
  authored from this chapter's real running prose (pp. 16-1–16-3),
  applying the same conceptual-indexing pass proven on the Control Valve
  Handbook and the Oil & Gas / Power & Severe Service sourcebooks:
  `pp-topic-sizing-chemistry`, `pp-topic-internal-strength-additives`,
  `pp-topic-wet-strength-resins`, `pp-topic-filler-selection-tradeoffs`,
  `pp-topic-retention-aid-mechanism`, `pp-topic-defoamer-biocide-function`,
  `pp-topic-tio2-erosive-service-valve-requirements`. **This corrects an
  undercount in this file's own prior chapter characterization** (the
  Open Items note below, written during the figures-only pass, describes
  pp. 16-2–16-3 as covering only "fillers, retention aids, and
  defoamers/biocides" — it did not mention p. 16-1's sizing/internal-
  strength/wet-strength content at all, nor p. 16-3's real TiO2 valve-
  application specification box, both read directly this pass via
  `pdftotext`, not assumed). The single highest-value new entry is
  `pp-topic-tio2-erosive-service-valve-requirements` — the chapter's only
  genuinely valve-selection-actionable content (a named Fisher
  Vee-Ball/V500 ceramic-trim recommendation for a named erosive service),
  as distinct from the surrounding pure process-chemistry background.
  Integrity check run (not assumed): 8 total ids in this file (1 figure +
  7 topics), all unique, 8 matched yaml fences, zero broken
  `relatedFigures`/`relatedTopics` references (including the verified
  cross-book link to `cvh-topic-particulate-cavitation-erosion`) checked
  against the whole vault's Subject-Matter Index namespace.
- **Chapter boundary confirmed directly**, not merely inherited from any
  candidate range. Rendered and read PDF pp. 193-196 in full: p. 193 =
  printed 16-1 (Chapter 16 opening, "Wet-End Chemistry," Figure 16-1 on the
  divider page itself), p. 196 = printed 16-4, confirmed genuinely **blank**
  (rendered and visually inspected — no text, no figure, only the
  page-number footer). PDF page 197 confirmed as the Chapter 17 divider
  ("Paper Machine"). Zero page offset (PDF = printed + 177) throughout.
- **Full chapter coverage.** The one real figure in range (Figure 16-1) was
  located and every one of the 4 real content pages (16-1 through 16-4,
  including the confirmed-blank 16-4) was rendered and read directly — no
  gaps in the numeric sequence (the chapter contains exactly one figure,
  confirmed, no others exist). Pages 16-2 and 16-3 (PDF 194-195) are prose
  covering fillers (clay, calcium carbonate, talc, titanium dioxide),
  retention aids, and defoamers/biocides, with no figures at all —
  confirmed by direct reading, not assumed from a sparse text-extraction
  hit.
- **No low-confidence flags.** The caption and page location were confirmed
  by direct visual inspection of the rendered PNG at 150 dpi, not text
  extraction. The p. 16-4 blank-page finding was likewise confirmed
  visually, not assumed from a page-count gap.
- **No duplicate printed figure numbers or source-citation errors found**
  in this chapter. Figure 16-1 appears exactly once, cited correctly
  in-line as "(figure 16-1 )" on p. 16-2 (a stray internal space before the
  closing parenthesis — a printing/typesetting artifact, not a distinct
  figure number or a citation error, matching the same kind of harmless
  typesetting irregularity already noted for Chapter 13's Figure 13-2
  caption spacing).
- **No numbered tables found in this chapter** — confirmed by direct
  reading of every page; Chapter 16 is one figure and prose only.
- **Cross-reference findings.** Checked the whole-library collision sweep
  (below) and grepped the whole library for "stock approach system,"
  "wet-end chemistry," "retention aid," "filler," and related terms — no
  genuine hits outside this chapter's own file. This figure carries a TAPPI
  credit (no Fisher drawing number to cross-reference by), consistent with
  Chapters 14-15's already-confirmed TAPPI-licensing pattern. Separately
  confirmed by direct visual comparison against this book's own Figure
  15-7 ("Thin Stock System") and Figure 17-2 (unnamed) — closely related
  equipment groupings, but three genuinely distinct diagrams, not a
  duplicate; see `pp-cmp-stock-approach-system`'s own notes above for the
  full three-way comparison record.
- **Archive/legacy material:** none consulted, none needed — the 2011
  Fisher Sourcebook (including its TAPPI-licensed illustration, used with
  permission) is the sole and sufficient source for this chapter's one
  component.
