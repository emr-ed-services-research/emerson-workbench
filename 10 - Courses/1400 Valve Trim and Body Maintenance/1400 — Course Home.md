---
title: 1400 Valve Trim and Body Maintenance — Course Home
type: course
course: "1400"
stage: 1
status: migration-in-progress
tags:
  - course
updated: 2026-08-28
---

# 1400 Valve Trim and Body Maintenance

The **Stage 1 pilot** for Emerson Workbench. Goal: convert the existing
PowerPoint deck into an HTML presentation artifact that keeps the current look
and feel, and package it as a Workbench class any instructor can present from.
See [[Roadmap#Stage 1 — Status Quo Transfer (Pilot)]].

## Deliverable

A working Emerson Workbench "class":

- [x] Original deck inventoried in `Source Deck/` — 418 slides, 16 chapters; see [[1400 Presentation]]
- [x] Design system extracted from the deck — [[1400 Presentation#4. Design system (read from the deck)]]
- [x] Conversion approach decided (component extraction → HTML + shared CSS) — [[1400 Presentation#5. Conversion approach (adopted)]]
- [x] Runner chosen — dependency-free vanilla viewer ([[Open Questions#Rendering stack]])
- [x] `emerson-workbench.css` built from the design system — `Presentation/build/css/`
- [x] **All 418 slides transferred to HTML** — `Presentation/build/`, [[1400 Presentation#6. Build — all 418 slides converted]]
- [x] Vector artwork rebuilt as SVG (P&ID, bench-set / positioner / calibration diagrams) — 28 slides
- [x] Spot-checked the 33 flagged slides against the `.pptx` — all teachable, no blockers ([[1400 Presentation#7. Spot-check — done]], `build/spot-check.md`)
- [ ] Full-polish pass on the residual cosmetic items (easy-e cutaway, a few text/figure overlaps)
- [ ] Instructor can open and present end to end
- [ ] Reviewed by a second instructor

Working notes: [[1400 Presentation]].

## Stage 2 — course environment (started)

Moving past the slide replica: a persistent learning-environment shell wraps the
converted content. Open `Presentation/course/index.html`; proposal and roll-out
plan in `Presentation/course/README.md`.

Structure is organised around **teaching days**, not chapters:

- **Module 0 · Before We Start** — welcome / safety / logistics, set apart as a bookend
- **Day 1 – Sliding Stem**, **Day 2 – Rotary**, **Day 3 – Positioners** — the top-level identity; the 16 chapters and their modules nest inside each day
- **Wrap-Up** — end bookend

Three zones, one job each: left rail navigates, centre **shows** (visual-only
slides — diagrams and labels, no teaching paragraphs), right rail **teaches**
(module objective + key concepts, with the current concept highlighting as you
move through the module). Present mode has independent left / right rail toggles
and keeps the context panel by default.

- [x] Day-based navigation shell + Module 0 / Wrap-Up bookends
- [x] Course structure model — `course/course.json` (days → chapters → modules)
- [x] Context pane = the one place teaching text lives; slides made visual-only
- [x] Present mode: independent Contents / Context toggles
- [x] Proof: Day 1 · Chapter 2 · Modules 1–3
- [ ] Author objective + key concepts + `visual` for the remaining ~50 modules
- [ ] Module 0 / Wrap-Up content pass

## Modules

> Fill in from the deck's section breaks. One row per module; create the
> Bench Notes and Bench Book notes from templates as each module is migrated.

| # | Module | Slides | Bench Notes | Bench Book |
| --- | --- | :---: | --- | --- |
| 1400.00 | Front matter (cover, safety, TOC) | 1–11 | | |
| 1400.01 | Important Control Valve Specifications for Maintenance | 12–25 | | |
| 1400.02 | Fisher Easy-E Valve Maintenance | 26–86 | | |
| 1400.03 | Fisher Sliding Stem Spring & Diaphragm Actuator Maintenance | 87–126 | | |
| 1400.04 | Fisher Sliding Stem Piston Actuator Maintenance | 127–145 | | |
| 1400.05 | Fisher Butterfly Valve Maintenance | 146–183 | | |
| 1400.06 | Fisher Vee-Ball Valve Maintenance | 184–213 | | |
| 1400.07 | Fisher Eccentric Plug Valve Maintenance | 214–235 | | |
| 1400.08 | Fisher Rotary Valve Packing Maintenance | 236–246 | | |
| 1400.09 | Fisher Rotary Actuator Maintenance | 247–290 | | |
| 1400.10 | Basics of Positioner Operation | 291–307 | | |
| 1400.11 | FIELDVUE Digital Valve Controller | 308–345 | | |
| 1400.12 | Connecting to Device using ValveLink Mobile | 346–357 | | |
| 1400.13 | FIELDVUE DVC6200 Configuration & Calibration (Emerson Communicator) | 358–388 | | |
| 1400.14 | Workshop 1: Sliding Stem | 389–395 | | |
| 1400.15 | Workshop 2: Rotary | 396–403 | | |
| 1400.16 | Workshop 3: FIELDVUE DVC6200 | 404–409 | | |
| 1400.99 | Conclusion & back matter | 410–418 | | |

## Guides

- [[1400 Bench Notes]] — instructor guide (index)
- [[1400 Bench Book]] — student guide (index)

## Source materials

- `Source Deck/` — original PowerPoint and extracted assets
- Related primary sources: [[Emerson Control Valve Handbook]]

## Notes

- Stage 1 is a transfer, not a redesign. Do not rewrite content or restyle
  slides. Unifying the instructor/student guides happens in Stage 2.
