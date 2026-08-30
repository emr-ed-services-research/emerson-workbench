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
| **Day 1 · Ch 2** — Fisher Easy-E Valve Maintenance | **all 7 modules `ready`** | **modules 1–3 four-part done** (see below). **Modules 4–7 Stage 2 done** (context authored 2026-08-31); their Stage 3 slide passes are the next block of work. |
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
| **1 · Valve Bodies, Plugs & Seating** | 27 (Handbook Fig 1.3), 28/29/30/34/35 (figrow), 31/32 (diagram + leader callouts) | `9938ce6`, `bf56629`; 34 shutoff ranking resolved _(pending commit)_ |
| **2 · Plug Guiding, Cages & Flow Characteristics** | 36/38 (figrow), 37/43 (diagram + callouts), 39 (SVG curve), 40 (table + cage row) | `23fc1f7`, `f99eee0` |
| **3 · easy-e Trim Seals & Packing** | 45 (dropped, merged into 46), 46 (tmpl-table), 47 (figrow + lead table — re-laid from tmpl-compare), 51 (is-sourced diagram — Handbook Fig 1.6 cutaway, replaced a hand-drawn SVG), 52 (table + packing row) | `5eb04cc`, _(47 / 51 revision pending commit)_ |

Consolidations (Part 3): 40 = old 40+41+42; 47 = old 47+48+49; 52 = old
52+53+54; Ch 1's one module = old 3 modules. Dropped slides keep their files
for the standalone deck and carry a `data-review` ribbon.

### Templates that emerged during this pass

- **1 — intro cards** (day / chapter / module), shell-rendered
- **2 — `.slide--tmpl-diagram`** labelled diagram, Handbook callout convention;
  `.is-wide` for detailed cutaways (31, 32, 43); `.is-sourced` for a figure
  that carries its own callouts (27, 51)
- **3 — `.slide--tmpl-table`** one reference table (16, 46)
- **4 — `.slide--tmpl-compare`** table + a paired illustration (19). Slide 47
  was moved off this template — a small floating aside image reads too weak next
  to a full table; use `.slide--tmpl-figrow.has-lead` when the images carry real
  teaching weight.
- **5 — `.slide--tmpl-figrow`** 2–4 captioned figures in a row (28, 29, 30, 34,
  35, 36, 38, 39); `.has-lead` = a table above the row (40, 47, 52)

### Derived / redrawn images

In `10 - Courses/1400 .../Presentation/build/assets/sourced/` with provenance
in that folder's `SOURCES.txt`:
- `cvh6-fig1-3-globe-valve-components.png` — Handbook Fig 1.3 (slide 27)
- `plug-unbalanced-head.png`, `plug-balanced-head.png` — cropped (slide 30)
- `cage-plug-assembly.png` — cropped (slide 37)
- `flow-curve.png` (superseded by an inline SVG), `flow-cages.png`,
  `cage-quick-opening.png` / `cage-linear.png` / `cage-equal-pct.png` (slide 40)
- `piston-seal-spring-loaded-detail.png` / `piston-seal-location.png` — deck
  image76 split into its two panels (slide 47)
- `cvh6-fig1-6-bonnet-packing-box.png` — Handbook Fig 1.6 "Bonnet Assembly"
  cutaway, callouts 1–4 (slide 51)
- Slide 39 uses an inline SVG authored in the slide file.

## Open follow-ups

| Slide | Item |
| --- | --- |
| 34 | ~~`NEEDS VERIFY` — radius vs standard shutoff ranking~~ **Resolved 2026-08-31.** Checked against the Fisher ET manual (D100398X012, Table 2 + note 2): Class V metal shutoff on the easy-e uses a *radiused-seat plug + wide-bevel seat ring*; standard metal seating is Class IV — so the radius/wide-bevel arrangement is Fisher's tighter metal option, but via a *rounded* surface on a *narrow line*, not a knife edge (the photos confirm a rounded edge). "knife-edge" and "tightest shutoff / never lapped" removed from the captions; the ranking is now a one-line `tmpl-note` (Class V vs IV) and the field trade-off (narrow line seals tighter while true, but tolerates damage poorly and is re-machined not field-lapped) is in the context pane. `course.json` + `course-data.js` key concept updated. |
| 34 | Plug-tip close-ups (image51 / image52) have crude blue arrows burned in — could be cleaned. Still open. |
| 38, 43 | The Fisher EZ manual sectional (Figure 11 plain bonnet / Figure 12, D100401X012) is clean line-art but carries the manual's parts-list key numbers; lifting it would need real image editing. Current figures are adequate. |
| 46 | ET piston-seal cell reads "PTFE with Nitrile Backup" — reflects the ET manual's "two-piece PTFE seal ring with elastomeric backup ring"; left as reviewed, flag if a cleaner wording is wanted (needs sync across 4 `data-ref` copies). |
| 47 | Only the spring-loaded PTFE seal is shown (no graphite / two-piece image exists in the deck); the table carries all three. The `piston-seal-location.png` panel keeps the source figure's diagonal locator arrow running off its top-left corner — reads as a link to the detail panel, could be painted out if it bothers. |
| 51 | Uses Control Valve Handbook Fig 1.6 (generic bonnet cutaway). Fine for a "what is a packing box" slide. If a Fisher easy-e-specific packing-box sectional is wanted later, the ES/EAS and ET/EZ instruction manuals (D100398X012, D100401X012) have one, but they carry the manuals' parts-list key numbers. |
| 48–50, 53–54 | Out-of-flow deck files still on the pre-pass PowerPoint markup. A deck-hygiene pass could bring them onto the templates; low priority (they are not in any module). |

## Current work — finishing Chapter 2 (per [[System Architecture]] directive)

Sequencing is fixed: finish Ch 2 modules 4–7, then the Pipeline Console. No
Day 1 Ch 3/4, no second course, no console work until Ch 2 is done. Rework
requests in this window are treated as pipeline QA (working rule 3).

**Stage 2 for modules 4–7 is complete (2026-08-31).** All seven Ch 2 modules
are `status: ready`. Next block: the Stage 3 four-part slide passes for
modules 4–7 (option 1 — all Stage 2 first, then the slide passes as a block).

| Module | Stage 2 (context) | Stage 3 (slide pass) |
| --- | --- | --- |
| 4 · Body Disassembly & Seal Replacement | **done** — objective + 6 key concepts, sourced from the ET (D100398X012) and ED (D100390X012) manuals; `pages` [56–61]; `status: ready` | not started |
| 5 · Valve Lapping | **done** — objective + 6 key concepts, sourced from the ET / ED / EZ manuals' Lapping Metal Seats sections and the CVH; `pages` [62–66], `check` [67]; `status: ready` | not started |
| 6 · Packing Replacement & Adjustment | **done** — objective + 6 key concepts (removal + the five packing types' distinct compression methods), sourced from the ET manual's Packing Maintenance section (step 13 + Table 4) and the deck; `pages` [68–72, 74–79], `check` [73, 80]; `status: ready` | not started |
| 7 · Reassembly & Gaskets | **done** — objective + 5 key concepts (new gaskets every time, spiral-wound as a spring, gasket locations, crosswise-progressive bonnet torque, rated bolting), sourced from the ET manual's Assembly section + bonnet-bolting note + Table 3; `pages` [81–85], `check` [86]; `status: ready` | not started |

### Module 4 — Stage 3 to-do

- **Slide 55** ("Fisher Easy-E Valve Maintenance") is a modules-4–7 roadmap that
  duplicates the chapter-intro card — drop it in the Stage 3 pass (`data-review`
  ribbon, retained for the standalone deck). It has already been removed from
  module 4's `pages`.
- Slides 56–61 are photo-heavy 2-column / 3-photo PowerPoint layouts — candidates
  for `.slide--tmpl-figrow` (procedure-step photo rows) once the pass runs.

### Module 5 — Stage 3 to-do

- **Slide 62** is a section opener whose point is to establish that lapping is a
  documented tech-manual procedure, not an improvised one. Keep it, but it is
  weak (two images, no text, one shared with the old slide 55) — needs a proper
  treatment in the Stage 3 pass, e.g. a real reference to the manual section.
- Slides 64/65 are procedure steps in 2-column / 3-photo layouts — `figrow`
  candidates. Slide 63 (lap-line diagram) is a `.slide--tmpl-diagram` candidate.
  Slide 66 (plug/cage damage) is a two-photo comparison.

### Module 6 — Stage 3 to-do

- **Slide 68** is a tech-pub reminder (same as slide 62) — its point is that
  packing work is done to the tech manual, not from memory. Keep it, but give it
  a real treatment (an actual pointer to the packing manual section, not just a
  bare image).
- **Big consolidation target.** 11 content slides cover 5 packing types as
  near-identical "components" + "compression" pairs. Stage 3 should collapse this
  to roughly: one comparison table of the five adjustment methods
  (spring-loaded PTFE → follower bottoms on bonnet; jam PTFE → min torque; jam
  graphite → max then back to min; HIGH-SEAL → scale-to-indicator, max mark;
  ENVIRO-SEAL → spring-flat) plus a figure row of the five stacks.
- **Source manuals now held** (2026-08-31): HIGH-SEAL (`53688016.pdf` =
  D101453X012) and ENVIRO-SEAL (`d101642x012.pdf` = D101642X012) are in
  [[Technical Publications]]. Concepts 5–6 were checked and refined against the
  actual Tightening Procedures — HIGH-SEAL uses a load scale to the
  maximum-compression line; ENVIRO-SEAL uses the springs-100%-flat-then-back-off
  method (1/2 turn PTFE/duplex, 1/4 turn graphite ULF). Slides 76–79 in the
  Stage 3 pass can be built straight from these manuals' figures.

### Module 7 — Stage 3 to-do

- **Slide 81** ("Assembly") is an image-only opener (the body text is a garbled
  PPTX extraction artifact, "essolid") — drop or fold in the Stage 3 pass, like
  slides 55 / 62 / 68.
- **Slide 85** ("Spiral Wound Gasket Types") carries an `ole-fallback` ribbon —
  a rasterised embedded object. Re-source from the CVH or a gasket figure if the
  raster is poor.
- Slide 83 ("Gasket Locations") is a labelled sectional — `.slide--tmpl-diagram`
  candidate. Slide 82 is a gasket-type list → could pair with 85 as a figure row.
- CYK 86 is mistitled "Check Your Knowledge 1" (should follow the Ch 2 series —
  4? 7?); fix the label in the Stage 3 pass.

## Out of scope until Chapter 2 is finished

- Day 1 Chapters 3, 4, Workshop 1 — still `outline`.
- Days 2 and 3.
- Pipeline Console / Cartridge separation — deferred by [[System Architecture]].
