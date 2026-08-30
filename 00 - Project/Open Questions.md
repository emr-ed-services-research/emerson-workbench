---
title: Open Questions
type: reference
tags:
  - project
  - decisions
updated: 2026-08-28
---

# Open Questions

Decisions that are deliberately deferred. Each should end up with a resolution
and a date, then move into [[Roadmap]] or the relevant course/source note.

## Rendering stack

**Question:** What is the technical stack for HTML rendering of Markdown course
content?

- Needs to produce a presentation artifact for Stage 1 that matches the existing
  PowerPoint look and feel.
- Needs to scale in Stage 2 to Bench Notes / Bench Book generation from shared
  source content.
- Candidates to evaluate: static site generator, a slides framework
  (reveal.js / Marp), a custom build step, or an Obsidian publish/export path.

**Decided (Stage 1 pilot, [[1400 Presentation]]):**
- *Authoring model* — component extraction: per-slide semantic HTML against a
  shared `emerson-workbench.css` that encodes the deck's design system.
- *Runner* — a dependency-free vanilla JS/CSS viewer (`build/index.html` +
  `assets/slides.js`), **not** reveal.js or Marp: the vault is offline, the
  slides already self-scale, and the slide files stay plain HTML so the runner
  is swappable later at no cost.

All 418 slides of course 1400 are converted on this model.

**Still open:** whether the same per-slide fragment model carries into Stage 2
Bench Notes / Bench Book generation from shared source content.

**Status:** resolved for Stage 1.

## Source-change propagation

**Question:** How will the AI-assisted authoring workflow detect and push source
content changes to the courses/modules that use them?

- What is the unit of shared content (a note, a heading block, a transclusion)?
- Is propagation a build-time regeneration or an edit-time sync?
- How are course-specific overrides handled without reintroducing drift?

**Status:** open.

## Stage 3 hardware

**Question:** What are the hardware/software requirements for Stage 3 process
control integration?

- Signal source for 4–20 mA output.
- Loop calibrator make/model and its control interface.
- Safety and isolation requirements for classroom use.

**Status:** open.

## Chapter 1 module structure (course 1400)

**Question:** Chapter 1 ("Control Valve Specifications for Maintenance")
currently has proper modules in `course.json` (Reading the P&ID; ASME
Pressure / Temperature Class; ANSI/FCI Seat Leakage Classes), but its slide
content still reads as a flat list of individual slides sitting under the
chapter rather than genuine module groupings the way Chapter 2 does. Should
Chapter 1's content be reworked into real module-shaped teaching units, or is
its lighter structure acceptable because it is a short specifications primer?

- Raised 2026-08-30 during the day/chapter intro-card navigation work.
- Flagged by Franz as a **content decision to revisit later**, not a
  navigation bug — the nav now treats every tier consistently regardless.

**Status:** open — deferred, revisit after the Day 1 four-part redesign pass.

## Add new questions below

- _..._
