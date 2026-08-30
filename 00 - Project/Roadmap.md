---
title: Roadmap
type: reference
tags:
  - project
updated: 2026-08-31
---

# Roadmap

Three stages, sequenced so each one delivers something usable before the next
begins. Stage 1 is the pilot and the current focus.

## Stage 1 — Status Quo Transfer (Pilot)

**Objective:** prove that a course can live in the Workbench and be presented
from it, without changing the content or its look.

| | |
| --- | --- |
| Pilot course | [[1400 — Course Home\|1400 Valve Trim and Body Maintenance]] |
| Input | Existing PowerPoint deck (100–300+ slides) |
| Output | HTML presentation artifact, same look and feel as the deck |
| Definition of done | Any instructor can open the Workbench class and present from it |

Scope guardrails:

- No redesign. Match the current slide layout, colors, and typography.
- No content rewrite. This is a transfer, not an edit.
- Instructor/student guide unification is *not* in this stage.

Working notes: [[1400 Presentation]].

## Stage 2 — Curriculum Migration + AI Implementation

**Objective:** move the whole curriculum into the Markdown structure and change
how editing works.

**Started:** the 1400 course now has a learning-environment shell around the
converted content instead of a linear slide viewer. Navigation is organised
around the **three teaching days** (Sliding Stem / Rotary / Positioners), with
chapters and modules nested inside; welcome/safety/logistics is pulled into a
set-apart "Module 0". Each module has a right-hand context panel carrying the
teaching text (objective + key concepts, the current one highlighting as you
move through), and the slides themselves are visual-only. Proof: Day 1,
Chapter 2, Modules 1–3. See
`10 - Courses/1400 Valve Trim and Body Maintenance/Presentation/course/README.md`.

- Migrate all courses into the [[Vault Structure|standard structure]].
- Establish **shared source content** as the single point of truth. A course
  module references source content rather than copying it.
- Editing an item of source content pushes the update to every course/module
  that uses it — no more drift between [[Glossary#Bench Notes|Bench Notes]] and
  [[Glossary#Bench Book|Bench Book]].
- Generate Bench Notes (instructor) and Bench Book (student) from the same
  source, with audience-specific framing applied at generation time.
- Fold the [[Source Library]] (handbooks, technical publications) into the same
  referencing model so courses cite primary sources directly.

Depends on resolving: [[Open Questions#Rendering stack]],
[[Open Questions#Source-change propagation]].

**Near-term sequencing ([[System Architecture]], 2026-08-31):** the course
shell ("Workshop") is structurally locked in. Finish course 1400 chapter 2's
remaining modules under the existing pipeline conventions — no further
structural changes — then build the **Pipeline Console** (a UI for running
course conversions) as the next major phase. Cartridge / Workshop separation is
deferred until after that. Rework requests while finishing chapter 2 are treated
as pipeline QA, not one-off slide fixes.

## Stage 3 — Process Control Integration

**Objective:** drive the physical classroom from the Workbench for live
demonstrations.

- Control the classroom environment from a process control perspective.
- Send 4–20 mA signals from the Workbench environment.
- Integrate a loop calibrator to help control a valve during diagnostics.
- Use case: replicate specific failure scenarios live, in front of the class.

Depends on resolving: [[Open Questions#Stage 3 hardware]].
