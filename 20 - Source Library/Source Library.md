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
- **Control Valve Handbook, all 15 chapters — complete.** Chapters 1–4 —
  [[Component Index — Control Valve Handbook ch1|ch1]] (19 figures),
  [[Component Index — Control Valve Handbook ch2|ch2]] (9 new + 1
  cross-referenced), [[Component Index — Control Valve Handbook ch3|ch3]]
  (52), [[Component Index — Control Valve Handbook ch4|ch4]] (27) — 107
  figures catalogued fresh, built 2026-09-11 as Phase 0 of the Stage-1/
  Stage-2 review-checkpoint work, the real precondition for Steve's Control
  Valve Basics class (chapters in the order 1, 3, 4, 2). Chapters 5–15 —
  [[Component Index — Control Valve Handbook ch5|ch5]] (19 — 18 numbered
  figures + 1 unnumbered diagram, see below),
  [[Component Index — Control Valve Handbook ch6|ch6]] (9),
  [[Component Index — Control Valve Handbook ch7|ch7]] (14),
  [[Component Index — Control Valve Handbook ch8|ch8]] (11),
  [[Component Index — Control Valve Handbook ch9|ch9]] (7),
  [[Component Index — Control Valve Handbook ch10|ch10]] (53),
  [[Component Index — Control Valve Handbook ch11|ch11]] (3),
  [[Component Index — Control Valve Handbook ch12|ch12]] (5),
  [[Component Index — Control Valve Handbook ch13|ch13]],
  [[Component Index — Control Valve Handbook ch14|ch14]],
  [[Component Index — Control Valve Handbook ch15|ch15]] (0 each, confirmed
  — reference-table chapters with no numbered figures, checked page by page
  rather than assumed) — 121 more components, built 2026-09-17. **228
  components total across the whole Handbook.** Standing full-chapter cataloging (see
  "Three ways," below), not deck- or topic-driven — CVH is a `current`
  first-party Emerson/Fisher document throughout. Real corrections found and
  documented in place, not silently fixed: a genuine source duplicate (two
  distinct figures both captioned "Figure 3.24"), a source citation error
  (§3.8.4 cites the wrong figure number for its own rack-and-pinion photo), a
  caption/image mismatch in ch2 (Figure 2.8's caption duplicates Figure
  2.6's but the image is unrelated), a real `pdftotext` extraction artifact
  in ch4 (spurious "14.x" figure numbering) caught and resolved against the
  actual source rather than reproduced, and (ch5) a source captioning error
  where Figure 5.1's printed caption reads "Feedback Control Loop" but its
  actual content is the flow-characteristic curve set.
  **A genuine, pre-existing id collision was found and resolved (2026-09-18).**
  `cvh-cmp-three-way-globe-valve` had named two different real figures — ch1's
  Figure 1.8 (p.20, plain overview photo) and ch3's Figure 3.6 (p.58,
  balanced-plug cutaway) — both authored 2026-09-11 without cross-checking
  each other, and load-bearing in real, shipped Control Valve Basics slides
  (`cvb-008.html` genuinely used the ch1 photo, `cvb-020.html` genuinely
  used the ch3 cutaway) and in all three CVE1 dry-run courses. Split into
  `cvh-cmp-three-way-globe-valve-overview` (ch1) and
  `cvh-cmp-three-way-globe-valve-cutaway` (ch3); every real reference
  repointed per-slide by checking each one's actual image content, not
  assumed — including confirming CVE1-Verify's own authored `t` text
  ("mid-travel plug position") matches the ch3 cutaway despite never having
  a built slide to check an image against. Both `used-by` lists, which had
  been identically (and wrongly) listing both slides, corrected to the
  slide each figure actually appears on. Re-swept afterward: the collision
  is gone, no new one was introduced, `verify.ps1` on Control Valve Basics
  is clean.
  **The ch5 p.100 unnumbered "Valve Selection Process" diagram is now
  catalogued** (`cvh-cmp-valve-selection-process-flowchart`), per the
  decision that the figures-only rule was meant to exclude tables, not real
  unnumbered diagrams — a synthetic `"Unnumbered diagram, p. N — ..."`
  locator is the standing convention for this case going forward, not a
  one-off. ch5's real component count is therefore 19, not 18.
  ch4's own schema drift was also fixed in the same pass: `status: verified`
  (a non-standard value never used elsewhere) corrected to `status: current`
  across all 27 records, and numeric ids (`cvh-cmp-4.N`) renamed to
  descriptive slugs — both touched real, shipped Control Valve Basics
  content (course data, 11 built slide files, an asset manifest), verified
  clean afterward (`verify.ps1`: 0 FAIL, 0 warn).

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
   Sourcebook's full 13-chapter, 144/144-figure pass; the Control Valve
   Handbook's own chapters 1–4, added 2026-09-11 as Phase 0 of the
   Stage-1/Stage-2 review-checkpoint work; and chapters 5–15, added
   2026-09-17 to complete the whole Handbook (all 15 chapters:
   [[Component Index — Control Valve Handbook ch1|ch1]] through
   [[Component Index — Control Valve Handbook ch15|ch15]]) — the last three
   chapters (13–15) confirmed to contain zero numbered figures, checked page
   by page, not skipped on the assumption that reference-table chapters
   wouldn't have any.
   Chapters 1–4 held to that rule exactly — scoped to Control Valve Basics'
   confirmed, immediate need. **Chapters 5–15 are a real exception, made
   deliberately, not a quiet drift back to "index it all just in case":**
   Franz explicitly chose to complete the whole Handbook's coverage once
   chapters 1–4 proved the pass out, rather than wait for each remaining
   chapter to have its own confirmed course behind it first. Chapters 5–8
   do have a known near-term claim (a future engineering/sizing-oriented
   course); chapters 9–15 do not, as of 2026-09-17 — this doc says so
   plainly rather than retroactively inventing a course need to fit the old
   rule. If this pattern repeats for another source document, treat it as
   its own decision each time, not a precedent that completeness is now
   the default.

Building either kind of index is real research and editorial judgment — full
reads of the relevant sources, precedence calls that go to Franz for
review — not a quick lookup or a code change. Treat it with the same weight
as authoring Stage 2 content, not as pipeline plumbing.

**The actual step-by-step process — file/record schema, the render-and-look
rigor standard, the mandatory whole-library collision sweep, and how the
real edge cases get handled — lives in
[[Component Index — Process & Standards]], not here.** This doc stays the
overview; that one is what a directive like "index [source]" should point
at instead of re-deriving scope from scratch. It also governs `used-by`
(see [[Course Catalog]] for the real courses it can reference) and
`mediaStatus` (the media-improvement-earmarking field, built 2026-09-18).

See `00 - Project/Source Grounding — Staging Plan.md` for the build plan and how
this graduates into the permanent pipeline docs.

## Holdings

| Source | Type | Items | Catalogue |
| --- | --- | --- | --- |
| Emerson Control Valve Handbook, 6th Edition | Handbook | 1 | [[Emerson Control Valve Handbook]] |
| Fisher Control Valve Sourcebooks (Oil & Gas, Power & Severe Service, Refining, Pulp & Paper) | Industry handbooks | 4 | [[Industry Handbooks]] |
| Fisher / Emerson instruction manuals | Technical publications | 27 | [[Technical Publications]] |
| Historic Educational Services training series | Historical archive (unverified) | ~60+ modules | [[Historic Educational Services Training Content]] |

## Component Index coverage

The single place that answers "what's indexed and what isn't," across every
source. Updated as the explicit closing step of every ingestion pass — see
[[Component Index — Process & Standards]] — not a separately-remembered
maintenance task. "Status" and "trigger-type" are read together: a
deck-/topic-driven index's own "complete" means *matches its scope*
(the deck or the topic), not *exhausts the source* — don't read "partial"
on those rows as unfinished work.

| Source / scope | Trigger-type | Status | Components | Last touched |
| --- | --- | --- | --- | --- |
| Control Valve Handbook — all 15 chapters | Standing full-chapter | Complete | 228 | 2026-09-18 |
| Oil & Gas Sourcebook — all 13 chapters | Standing full-chapter | Complete | 144 | 2026-09-08 |
| 14101 ch1–ch2 ([[Component Index — 14101 ch1-ch2]]) | Deck-driven | Complete (matches the deck) | 25 | 2026-09-06 |
| 14101 ch3 ([[Component Index — 14101 ch3]]) | Deck-driven | Complete (matches the deck) | 52 | 2026-09-02 |
| bench-set-657 ([[Component Index — bench-set-657]]) | Topic-driven | Complete (matches the topic) | 6 | 2026-09-06 |
| Fisher 657 Diaphragm Actuator ([[Component Index — Fisher 657 Diaphragm Actuator]]) — rest of the document beyond bench-set-657's slice | Standing full-document | Complete | 17 | 2026-09-19 |
| Fisher 667 Diaphragm Actuator | Standing full-document | Complete | 25 | 2026-09-19 |
| Fisher 585C Series Piston Actuators | Standing full-document | Complete | 16 | 2026-09-19 |
| Fisher 1051/1052 Rotary Actuators | Standing full-document | Complete | 17 | 2026-09-19 |
| Fisher 1061 Rotary Actuator | Standing full-document | Complete | 11 | 2026-09-19 |
| Fisher 2052 Rotary Actuator | Standing full-document | Complete | 10 | 2026-09-19 |
| Fisher ES/EAS easy-e Valves | Standing full-document | Complete | 16 | 2026-09-19 |
| Fisher ED easy-e Valve | Standing full-document | Complete | 24 | 2026-09-19 |
| Fisher ET/EAT easy-e Valves | Standing full-document | Complete | 25 | 2026-09-19 |
| Fisher EZ easy-e Valve | Standing full-document | Complete | 15 | 2026-09-19 |
| Fisher ENVIRO-SEAL Packing System | Standing full-document | Complete | 9 | 2026-09-19 |
| Fisher HIGH-SEAL Packing System | Standing full-document | Complete | 6 | 2026-09-19 |
| Fisher 9500 Butterfly Valve | Standing full-document | Complete | 7 | 2026-09-19 |
| Fisher 8580 Rotary Valve | Standing full-document | Complete | 12 | 2026-09-19 |
| Fisher Vee-Ball V150/200/300 Rotary Valves | Standing full-document | Complete | 35 | 2026-09-19 |
| Fisher V500 Rotary Globe Valve | Standing full-document | Complete | 16 | 2026-09-19 |
| Fisher FIELDVUE DVC6200 ([[Component Index — Fisher FIELDVUE DVC6200]]) | Standing full-document | Complete | 39 | 2026-09-19 |
| Fisher FIELDVUE DVC7K-H ([[Component Index — Fisher FIELDVUE DVC7K-H]]) | Standing full-document | Complete | 42 | 2026-09-19 |
| Fisher ENVIRO-SEAL Rotary Packing System ([[Component Index — Fisher ENVIRO-SEAL Rotary Packing System]]) — added to the library 2026-09-20 | Standing full-document | Complete | 7 | 2026-09-20 |
| Fisher 646 Electro-Pneumatic Transducer ([[Component Index — Fisher 646 Electro-Pneumatic Transducer]]) — 1 of 7 manuals acquired for the 17101 gap analysis | Standing full-document | Complete | 11 | 2026-09-21 |
| Fisher 846 Electro-Pneumatic Transducer ([[Component Index — Fisher 846 Electro-Pneumatic Transducer]]) — 17101 batch | Standing full-document | Complete | 24 | 2026-09-21 |
| Fisher i2P-100 Electro-Pneumatic Transducer ([[Component Index — Fisher i2P-100 Electro-Pneumatic Transducer]]) — 17101 batch | Standing full-document | Complete | 14 | 2026-09-21 |
| Fisher 3582/3582i Positioners ([[Component Index — Fisher 3582-3582i Positioners]]) — 17101 batch | Standing full-document | Complete | 25 | 2026-09-21 |
| Fisher 3610J/3620J Positioners ([[Component Index — Fisher 3610J-3620J Positioners]]) — 17101 batch | Standing full-document | Complete | 31 | 2026-09-21 |
| ValveLink Mobile Software Quick Start Guide ([[Component Index — ValveLink Mobile Software Quick Start Guide]]) — 17101 batch | Standing full-document | Complete | 11 | 2026-09-21 |
| Fisher 585CLS Long Stroke Piston Actuator ([[Component Index — Fisher 585CLS Long Stroke Piston Actuator]]) — 17101 batch, `status: current` per a flagged precedence judgment call (see the file's own header) | Standing full-document | Complete | 3 | 2026-09-21 |
| AMS Trex User Guide ch2 ([[Component Index — AMS Trex User Guide ch2]]) — hardware overview chapter; first pass to apply the `kind: navPath` software-documentation convention | Standing full-chapter | Complete | 57 | 2026-09-14 |
| AMS Trex User Guide ch3 ([[Component Index — AMS Trex User Guide ch3]]) — Field Communicator application chapter, the densest chapter in the document (HART/FOUNDATION fieldbus connection, configuration, Favorites, Graphics) | Standing full-chapter | Complete | 72 | 2026-09-14 |
| AMS Trex User Guide ch4-ch5 ([[Component Index — AMS Trex User Guide ch4-ch5]]) — Loop Diagnostics + Fieldbus Diagnostics applications, catalogued together | Standing full-chapter | Complete | 63 | 2026-09-24 |
| Power & Severe Service Sourcebook | — | Not started | 0 | — |
| Refining Sourcebook | — | Not started | 0 | — |
| Pulp & Paper Sourcebook | — | Not started | 0 | — |
| Historic Educational Services archive | — | Not started (unverified, `legacy`/`archive-only` territory if ever indexed) | 0 | — |

**27 real Technical Publications manuals are now fully indexed** (18 from
the original batch, plus the ENVIRO-SEAL rotary manual D101643X012 added
2026-09-20, plus 7 more acquired for the 17101 gap analysis and indexed
2026-09-21: Fisher 646, Fisher 846, Fisher i2P-100, Fisher 3582/3582i,
Fisher 3610J/3620J, the ValveLink Mobile Software Quick Start Guide, and
Fisher 585CLS, plus the AMS Trex Device Communicator User Guide — indexed
2026-09-24 as the first real build of the `kind: navPath` software-
documentation convention, catalogued as three chapter files (ch2, ch3,
ch4-ch5) per its real numbered-chapter structure rather than the flat
whole-document form most Technical Publications manuals use). This was
indexed deliberately ahead of any confirmed course citation for the
first 19, in direct response to a real gap analysis for the 17101 batch
for the next 7, and as a deliberate proof-of-concept for AMS Trex — see
each file's own header for the real per-document rigor and structural
findings.

**1,038 components catalogued across the library today** (228 CVH + 144
Oil & Gas + 666 Technical Publications, the last figure being 6
bench-set-657 + 17 657-completion +
25+16+17+11+10+16+24+25+15+9+6+7+12+35+16 across the original 15
flat-structure manuals + 39 DVC6200 + 42 DVC7K-H + 7 ENVIRO-SEAL rotary +
11 Fisher 646 + 24 Fisher 846 + 14 i2P-100 + 25 Fisher 3582/3582i + 31
Fisher 3610J/3620J + 11 ValveLink Mobile QSG + 3 Fisher 585CLS + 192 AMS
Trex User Guide [57 ch2 + 72 ch3 + 63 ch4-ch5, split 84 `kind: figure` /
108 `kind: navPath` after the 2026-09-14 cleanup pass — see each file's
own Open Items]), plus the 25/52 course-scoped 14101 ones counted in
their own rows rather than double-counted into that total, since they
cite figures the whole-chapter/whole-document indexes may already carry
separately.

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
