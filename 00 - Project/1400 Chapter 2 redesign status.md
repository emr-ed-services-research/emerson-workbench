---
title: 1400 — Day 1 redesign status
type: reference
tags:
  - project
  - "1400"
  - status
updated: 2026-08-31
---

# 1400 — Day 1 redesign status

Running tracker for the Stage 3 (four-part) slide pass on course 1400.
Process and the pre-send checklist: [[Course Porting Pipeline]] → Stage 3.
Templates: `40 - Engine/Presentation/build/css/TEMPLATES.md`.

## Where the course stands

| Day / Chapter | `course.json` status | Stage 3 pass |
| --- | --- | --- |
| Module 0 — Before We Start | ready | not needed (bookend) |
| **Day 1 · Ch 1** — Control Valve Specifications | ready | **done** — template rebuild, then 3 thin modules consolidated into one ("Reading a Valve's Specifications") |
| **Day 1 · Ch 2** — Fisher Easy-E Valve Maintenance | ready | **modules 1–3 done** (see below). Modules 4–7 are `outline` only — separate authoring task, **not** in scope. |
| Day 1 · Ch 3 — Sliding-Stem S&D Actuator Maintenance | outline | not started |
| Day 1 · Ch 4 — Sliding-Stem Piston Actuator Maintenance | outline | not started |
| Day 1 · Ch 14 — Workshop 1: Sliding Stem | outline | not started |
| Days 2 and 3 (Ch 5–16) | outline | not started |

The day-intro and chapter-intro cards, the `.slide--hd` course-wide heading,
and the TOC navigation (click-to-open, collapsible modules, Prev/Next spine)
are in place across the whole shell.

## Chapter 2 modules 1–3 — four-part pass complete

Every in-flow slide is on a template; bullet lists moved to the module key
concepts; floating PowerPoint text boxes became figure captions or callouts.

| Module | Slides reworked | Commits |
| --- | --- | --- |
| **1 · Valve Bodies, Plugs & Seating** | 27 (Handbook Fig 1.3), 28/29/30/34/35 (figrow), 31/32 (diagram + leader callouts) | `9938ce6`, `bf56629` |
| **2 · Plug Guiding, Cages & Flow Characteristics** | 36/38 (figrow), 37/43 (diagram + callouts), 39 (SVG curve), 40 (table + cage row) | `23fc1f7`, `f99eee0` |
| **3 · easy-e Trim Seals & Packing** | 45 (dropped, merged into 46), 46 (tmpl-table), 47 (tmpl-compare), 51 (SVG packing box), 52 (table + packing row) | `5eb04cc` |

Consolidations (Part 3): 40 = old 40+41+42; 47 = old 47+48+49; 52 = old
52+53+54; Ch 1's one module = old 3 modules. Dropped slides keep their files
for the standalone deck and carry a `data-review` ribbon.

### Templates that emerged during this pass

- **1 — intro cards** (day / chapter / module), shell-rendered
- **2 — `.slide--tmpl-diagram`** labelled diagram, Handbook callout convention;
  `.is-wide` for detailed cutaways (31, 32, 43); `.is-sourced` for a figure
  that carries its own callouts (27)
- **3 — `.slide--tmpl-table`** one reference table (16, 46)
- **4 — `.slide--tmpl-compare`** table + a paired illustration (19, 47)
- **5 — `.slide--tmpl-figrow`** 2–4 captioned figures in a row (28, 29, 30, 34,
  35, 36, 38, 39, 51); `.has-lead` = a table above the row (40, 52)

### Derived / redrawn images

In `10 - Courses/1400 .../Presentation/build/assets/sourced/` with provenance
in that folder's `SOURCES.txt`:
- `cvh6-fig1-3-globe-valve-components.png` — Handbook Fig 1.3 (slide 27)
- `plug-unbalanced-head.png`, `plug-balanced-head.png` — cropped (slide 30)
- `cage-plug-assembly.png` — cropped (slide 37)
- `flow-curve.png` (superseded by an inline SVG), `flow-cages.png`,
  `cage-quick-opening.png` / `cage-linear.png` / `cage-equal-pct.png` (slide 40)
- Slides 39 and 51 use inline SVGs authored in the slide file.

## Open follow-ups

| Slide | Item |
| --- | --- |
| 34 | **`NEEDS VERIFY`** — the radius-tip vs standard-tip *shutoff ranking* does not fully match Franz's hands-on experience. Captions state only the undisputed facts (chamfer + lap vs knife-edge + no lap); the ranking waits on a check against the Fisher ET manual seating detail (D100398X012). |
| 34 | Plug-tip close-ups (image51 / image52) have crude blue arrows burned in — could be cleaned. |
| 38, 43 | The Fisher EZ manual sectional (Figure 11 plain bonnet / Figure 12, D100401X012) is clean line-art but carries the manual's parts-list key numbers; lifting it would need real image editing. Current figures are adequate. |
| 46 | ET piston-seal cell reads "PTFE with Nitrile Backup" — reflects the ET manual's "two-piece PTFE seal ring with elastomeric backup ring"; left as reviewed, flag if a cleaner wording is wanted (needs sync across 4 `data-ref` copies). |
| 48–50, 53–54 | Out-of-flow deck files still on the pre-pass PowerPoint markup. A deck-hygiene pass could bring them onto the templates; low priority (they are not in any module). |

## Explicitly out of scope for this pass

- Chapter 2 modules 4–7 (Body Disassembly, Lapping, Packing Replacement,
  Reassembly) — still `outline`; need Stage 2 context authoring first.
- Day 1 Chapters 3, 4, Workshop 1 — still `outline`.
- Days 2 and 3.

## What's next (Franz's call)

1. Stage 2 authoring for Ch 2 modules 4–7, then their Stage 3 pass; **or**
2. Stage 2 + Stage 3 for Day 1 Chapters 3 / 4 / Workshop 1; **or**
3. Address the follow-ups above; **or**
4. Move to a second course to prove the pipeline end to end.
