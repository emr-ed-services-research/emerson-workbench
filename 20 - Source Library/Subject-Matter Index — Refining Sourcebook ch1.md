---
title: Subject-Matter Index — Refining Sourcebook ch1
type: reference
tags:
  - source-library
  - pipeline
  - subject-matter-index
source: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
chapter: ch1 — Introduction
updated: 2026-09-18
---

# Teaching-Subject-Matter Index — Fisher Control Valve Sourcebook, Refining, Chapter 1

**Standing full-chapter pass** (see `Subject-Matter Index — Process & Standards.md`,
"Three ways a subject-matter index gets triggered") — the whole Refining
Sourcebook is being catalogued end to end ahead of any single course's
citations, as the real, confirmed precondition for content-build work on
the upcoming Control Valve Engineering 1 and 2 courses. Not deck- or
topic-driven.

**Chapter/scope boundary, confirmed directly by rendering:** Chapter 1
"Introduction" is a short front-matter chapter — PDF pages 2–4 (printed pp.
1-1 through 1-4). PDF page 1 is the cover; PDF page 2 is the chapter divider
("Introduction / Refinery Control Valves," unnumbered/1-1); PDF page 3
(printed 1-3) carries the chapter's one figure; PDF page 4 (printed 1-4) is
prose only (valve-selection guidance, no figure) and ends the chapter — PDF
page 5 is confirmed (by rendering) to be the Chapter 2 divider ("Fisher™
Product Tools and Documentation"), catalogued separately in
`Subject-Matter Index — Refining Sourcebook ch2.md`.

The document uses a three-part figure numbering scheme (`Figure
<chapter>.<section>.<sequence>`, e.g. `Figure 1.1.1`) — different from the
Oil & Gas Sourcebook's flat `Figure 1-N` scheme; this is a real, confirmed
structural difference between the two sibling sourcebooks, not an
inconsistency to reconcile.

Rigor standard: every page in range rendered at 150dpi via the local
Poppler and read directly (`pdftotext -layout` used only to locate
candidates).

## Precedence

The Refining Sourcebook is itself a **current** document (D103205X012, ©
2014, 2024 Fisher Controls International LLC — Industry Handbooks
holdings, see `Industry Handbooks.md`), so every record below is `status:
current`. No archive or legacy material was consulted.

## Components

### Chapter 1 — Introduction (printed pp. 1-1 – 1-4)

```yaml
id: ref-cmp-complete-refinery-flow-diagram
kind: figure
teaches: >
  A complete-refinery block flow diagram tracing crude oil from storage and
  desalting through atmospheric and vacuum distillation into every major
  downstream process unit — gas plants, isomerization, catalytic reforming,
  alkylation, hydrotreating (naphtha, distillate, feed), hydrocracking,
  fluid catalytic cracking, delayed coking, visbreaking, deasphalting,
  treating, sulfur recovery, and gasoline/distillate/residual blending —
  ending in named products (LPG, unleaded/reformulated/low-sulfur gasoline,
  jet fuel, kerosene, diesel, heating oil, heavy fuel oil, asphalts,
  petroleum coke). This is the book's own orientation diagram: its 15
  named process units map directly to Chapter 4's 15 application-review
  sections (4.1 Furnace through 4.15 Blending Unit).
concept-tags: [refinery overview, process flow diagram, crude distillation, vacuum distillation, gas plant, hydrotreating, hydrocracking, fluid catalytic cracking, delayed coker, alkylation, reformer, blending, refining process map]
status: current
source:
  - doc: Fisher Control Valve Sourcebook — Refining (D103205X012, © 2014, 2024 Fisher Controls International LLC)
    locator: "Figure 1.1.1 'Complete Refinery' (drawing E1445), p. 1-3"
delivery: existing figure (crop) — per Style Guide §5.8 default
used-by: []
notes: >
  A block/flow diagram (unit boxes + labelled process-stream arrows), not a
  hardware cutaway — falls under Style Guide §5 (diagram conventions) if
  ever placed on a slide, not §6's nomenclature/callout rules. This is the
  chapter's only figure; PDF page 4 (printed 1-4) that follows is prose
  only (valve-selection philosophy, no figure) and closes the chapter.
```

## Open Items

- **`kind: topic` pass run 2026-09-18 — zero new entries, confirmed non-
  conceptual, not a gap.** Read printed p. 1-4 in full (the chapter's only
  prose page): it is entirely book-organization/scope-setting content —
  how each following chapter is formatted (Other Names, Process
  Descriptions, Process Drawing conventions, valve numbering
  left-to-right/top-to-bottom), plus a generic "consult your Emerson
  representative" valve-selection caveat. None of that is a refining- or
  valve-domain concept; it is instructions for reading the rest of the
  book. The one passage that names real valve-domain problems ("Problem
  Valves": stiction/static friction, actuator-linkage deadband — "typically
  in rotary valves," stem packing leakage, incompatible materials of
  construction) only *names* them in one paragraph as motivation for the
  sourcebook's existence — it does not teach the mechanism. That mechanism
  is already taught at real depth elsewhere in the vault, confirmed by
  reading it directly: `cvh-topic-deadband-and-friction` (Control Valve
  Handbook ch1, `Subject-Matter Index — Control Valve Handbook ch1.md`) quotes
  the source's own definitions of stiction, backlash, dynamic friction, and
  hysteresis and their causal relationship to deadband — a genuine
  duplicate-boilerplate finding, not a missed topic, same discipline
  applied to Pulp & Paper's ch2/ch5/ch7 zero-entry findings.
- **Chapter boundary confirmed directly**: PDF p.2 (chapter divider) through
  PDF p.4 (printed 1-4, prose close). PDF p.5 rendered and confirmed to be
  the Chapter 2 divider, not part of Chapter 1 — Chapter 1 is genuinely
  only 3 content pages (divider + 2).
- **Full coverage accounting**: one figure in range (Figure 1.1.1), fully
  catalogued. No other figure numbers appear in Chapter 1's page range
  (confirmed by both a full-text sweep for `Figure 1.` across pp. 2–4 and
  direct rendering of every page in range).
- **No low-confidence flags.** The figure's caption, drawing number, and
  page are all directly legible on the rendered page.
- **No duplicate figure numbers or source citation errors found** in this
  chapter.
- **No tables to exclude** — Chapter 1 has no numbered tables in range.
- **Cross-reference check**: Figure 1.1.1's drawing number (E1445) does not
  match any drawing number already catalogued in the Oil & Gas Sourcebook's
  or Control Valve Handbook's indexes (checked against both files' `notes`
  cross-reference entries for shared drawing numbers). This is a
  Refining-specific composite diagram (its 15 named units are unique to
  this book's own Chapter 4 structure), not a shared cutaway — no
  cross-reference needed.
- **Archive/legacy note**: none consulted, none needed — first-party
  current Fisher document throughout.
