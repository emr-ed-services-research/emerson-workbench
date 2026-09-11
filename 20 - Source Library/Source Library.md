---
title: Source Library
type: moc
tags:
  - moc
  - source-library
updated: 2026-09-04
---

# Source Library

The repository of primary source materials hosted in Emerson Workbench and used
across courses. In Stage 2 these become referenceable source content — a course
module cites a handbook section rather than paraphrasing it, so corrections
propagate everywhere at once.

**Current state:** real content is loaded. The base catalogue is a
**lightweight locate-the-source** index — what each document is and its scope at
a chapter or section level.

**Concept-level indexing has started, scoped to real use.** The deferred
"wait for a real retrieval task" condition is now met — the Pipeline Console's
Stage 3 was generating diagrams from scratch while good source material sat idle.
The response is a **teaching-component index** built only as far as a real
request actually reaches — never a wholesale pre-index of a document:

- [[Component Index — 14101 ch3]] — the discrete instructional components (a
  diagram, a labelled figure, a graph) that Chapter 3's concepts need, each with
  its source, a precedence bucket (`current` / `archive-corroborated` /
  `archive-only` / `legacy`), and a locator. Stage 2 tags each key concept
  against it; Stage 3 pulls from it instead of searching cold. Each record also
  carries a `serves:` pointer into the curriculum layer (competency ids).
- [[Component Index — 14101 ch1-ch2]] — the same, for Chapter 1 (valve
  specifications) and Chapter 2 (Fisher Easy-E valve maintenance). 25
  components, built 2026-09-06 as the Phase 4 follow-on of the Instructional
  Primitives Pathway. Almost entirely `current` (CVH 6th ed. + current Fisher
  easy-e / ET / packing manuals); no archive content.
- **Control Valve Handbook, chapters 1–4** — [[Component Index — Control Valve Handbook ch1|ch1]]
  (19 figures), [[Component Index — Control Valve Handbook ch2|ch2]] (9 new +
  1 cross-referenced), [[Component Index — Control Valve Handbook ch3|ch3]]
  (52), [[Component Index — Control Valve Handbook ch4|ch4]] (27) — 107
  figures catalogued fresh, built 2026-09-11 as Phase 0 of the Stage-1/
  Stage-2 review-checkpoint work, the real precondition for Steve's Control
  Valve Basics class (chapters in the order 1, 3, 4, 2). Standing full-chapter
  cataloging (see "Three ways," below), not deck- or topic-driven — CVH is a
  `current` first-party Emerson/Fisher document throughout. Real corrections
  found and documented in place, not silently fixed: a genuine source
  duplicate (two distinct figures both captioned "Figure 3.24"), a source
  citation error (§3.8.4 cites the wrong figure number for its own rack-and-
  pinion photo), a caption/image mismatch in ch2 (Figure 2.8's caption
  duplicates Figure 2.6's but the image is unrelated), and a real
  `pdftotext` extraction artifact in ch4 (spurious "14.x" figure numbering)
  caught and resolved against the actual source rather than reproduced.

**Three ways a component index gets triggered** (corrected 2026-09-04 — see
`Course Porting Pipeline.md` "Origination without a deck" — then widened
2026-09-11 to name a third pattern already in real use, the Oil & Gas
Sourcebook's own 13-chapter pass, but never previously written down here):

1. **Deck-driven** (the ch3 case above) — a chapter's existing slides define
   the scope; the index is built by cross-referencing what those slides
   already teach against the Source Library, in full, for that chapter only.
2. **Topic-driven** (needed for origination, not yet built for real) — a
   named topic with **no existing deck** ("bench-setting a Fisher 657") defines
   the scope instead; the index is built by reading the relevant Source
   Library sections for *that topic*, not the whole document. Same
   record shape, same precedence-bucket discipline, same review gate — the
   only difference is what supplies the boundary of what's in scope.
3. **Standing full-chapter cataloging** — a whole chapter of a source
   document is catalogued end to end, ahead of any course or topic actually
   needing it, when a course is *known* to need broad coverage of that
   material soon (e.g. Control Valve Basics needing CVH chapters 1–4 whole,
   not one narrow topic within them). Real precedent: the Oil & Gas
   Sourcebook's full 13-chapter, 144/144-figure pass, and — added 2026-09-11,
   Phase 0 of the Stage-1/Stage-2 review-checkpoint work — the Control Valve
   Handbook's own chapters 1–4 ([[Component Index — Control Valve Handbook ch1|ch1]],
   [[Component Index — Control Valve Handbook ch2|ch2]],
   [[Component Index — Control Valve Handbook ch3|ch3]],
   [[Component Index — Control Valve Handbook ch4|ch4]]).
   This is still **not** "index the whole Handbook just in case" — every
   pass here was scoped to specific chapters a specific, real course
   actually needs, confirmed before the pass started, never speculative
   coverage of a document with no course behind it at all.

Building either kind of index is real research and editorial judgment — full
reads of the relevant sources, precedence calls that go to Franz for
review — not a quick lookup or a code change. Treat it with the same weight
as authoring Stage 2 content, not as pipeline plumbing.

See `00 - Project/Source Grounding — Staging Plan.md` for the build plan and how
this graduates into the permanent pipeline docs.

## Holdings

| Source | Type | Items | Catalogue |
| --- | --- | --- | --- |
| Emerson Control Valve Handbook, 6th Edition | Handbook | 1 | [[Emerson Control Valve Handbook]] |
| Fisher Control Valve Sourcebooks (Oil & Gas, Power & Severe Service, Refining, Pulp & Paper) | Industry handbooks | 4 | [[Industry Handbooks]] |
| Fisher / Emerson instruction manuals | Technical publications | 16 | [[Technical Publications]] |
| Historic Educational Services training series | Historical archive (unverified) | ~60+ modules | [[Historic Educational Services Training Content]] |

### Primary sources (current, authoritative)

- **[[Emerson Control Valve Handbook]]** — the flagship reference on valve
  theory, performance, sizing, selection, installation and maintenance. 15
  chapters (D101881X012, August 2023).
- **[[Industry Handbooks]]** — the Fisher Control Valve Sourcebook series. Each
  has a shared fundamentals section (selection, actuator selection, sizing,
  noise, cavitation) plus an industry section that walks that industry's
  processes and the valves used at each point: **Oil & Gas**, **Power & Severe
  Service**, **Refining**, **Pulp & Paper**.
- **[[Technical Publications]]** — instruction manuals for the exact hardware
  taught in [[14101 — Course Home|14101]]:
  - *Sliding-stem actuators* — Fisher 667, 657, 585C
  - *Rotary actuators* — Fisher 1051/1052, 1061, 2052
  - *Globe valve bodies (easy-e)* — ES/EAS, ED, ET/EAT, EZ
  - *Rotary valve bodies* — 9500 (lined butterfly), 8580 (high-performance
    butterfly), Vee-Ball V150/V200/V300, V500 (eccentric plug)
  - *Digital valve controllers* — FIELDVUE DVC6200, DVC7K-H

### Historical archive (browse only, not authoritative)

- **[[Historic Educational Services Training Content]]** — a 1970s-era
  Educational Services training series (scans stamped 2017), ~60+ modules
  covering valve fundamentals, sizing, actuators, positioners, control theory,
  maintenance, regulators, shutoff valves, boiler/combustion control,
  measurement, and pumps. Large, uneven, contains known errors. Flagged
  **historical and unverified** — verify anything from it against a current
  source before use.

## In the 14101 course environment

The [[14101 — Course Home|14101]] course shell has a **📚 source-library shelf**
in its header (`Presentation/course/`) — the handbook, the four sourcebooks and
the sixteen instruction manuals open as a scrollable overlay over the slide,
without leaving the course page. The historical archive is deliberately left off
that shelf. Shelf contents are defined in `course/course.json` under `"library"`.

## Adding a source

1. Put the file in the appropriate subfolder of `20 - Source Library/`.
2. Add a catalogue entry to the relevant category note above — what it is,
   edition / document number / date, and scope at a chapter or section level.
3. Record the exact edition/version and date so citations stay precise.
4. Concept-level indexing is **use-driven** — deck-driven (a chapter's slides)
   or topic-driven (a named scope with no deck) — see "Concept-level indexing
   has started" above. Build an index entry only when a real request actually
   needs the component; do not pre-index a document wholesale.
