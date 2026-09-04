---
title: Source Library
type: moc
tags:
  - moc
  - source-library
updated: 2026-09-03
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
The response is a per-chapter **teaching-component index** built only as far as a
course actually reaches:

- [[Component Index — 1400 ch3]] — the discrete instructional components (a
  diagram, a labelled figure, a graph) that Chapter 3's concepts need, each with
  its source, a precedence bucket (`current` / `archive-corroborated` /
  `archive-only` / `legacy`), and a locator. Stage 2 tags each key concept
  against it; Stage 3 pulls from it instead of searching cold.

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
  taught in [[1400 — Course Home|1400]]:
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

## In the 1400 course environment

The [[1400 — Course Home|1400]] course shell has a **📚 source-library shelf**
in its header (`Presentation/course/`) — the handbook, the four sourcebooks and
the sixteen instruction manuals open as a scrollable overlay over the slide,
without leaving the course page. The historical archive is deliberately left off
that shelf. Shelf contents are defined in `course/course.json` under `"library"`.

## Adding a source

1. Put the file in the appropriate subfolder of `20 - Source Library/`.
2. Add a catalogue entry to the relevant category note above — what it is,
   edition / document number / date, and scope at a chapter or section level.
3. Record the exact edition/version and date so citations stay precise.
4. Concept-level indexing is now **per-chapter and use-driven** (see
   [[Component Index — 1400 ch3]]). Build an index entry only when a course
   chapter actually needs the component — do not pre-index a document wholesale.
