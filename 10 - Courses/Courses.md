---
title: Courses
type: moc
tags:
  - moc
updated: 2026-08-28
---

# Courses

Every course hosted in the Emerson Workbench. See [[Vault Structure]] for the
folder layout each course follows.

## Courses

| Course | Stage | Status | Home |
| --- | --- | --- | --- |
| 14101 Valve Trim and Body Maintenance | Stage 1 pilot | Migration in progress | [[14101 — Course Home]] |
| Instructing for Emerson (IfE) | Origination | Content started — 1 module | [[IfE — Course Home]] |
| Control Valve Basics | Origination — Stage 1/2 reconciled | 9 modules, 42 competencies, 59 slides, 9 Hands-First activities, all sourced against the CVH Component Index (run by hand 2026-09-11). `audienceStage: "orientation"` (not domain-scoped — brand new to the industry, not yet assigned a role), `tier: "introductory"`. No Course Home page, Source Deck, or Bench Notes/Book yet — this is a proving-ground run for the PipelineConsole review-checkpoint mechanism, not a full course scaffold. | [[Curriculum — Control Valve Basics]] |

## Adding a course

1. Create `10 - Courses/<course name>/`.
2. Add `<course name> — Course Home.md` from the [[Course Home]] template.
3. Drop the original deck into `Source Deck/`.
4. Add `Bench Notes/`, `Bench Book/`, and `Presentation/` subfolders.
5. Register the course in the table above.
