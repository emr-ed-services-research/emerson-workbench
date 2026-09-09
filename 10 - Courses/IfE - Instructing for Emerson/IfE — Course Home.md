---
title: Instructing for Emerson (IfE) — Course Home
type: course
course: "IfE"
stage: origination
status: content-started
tags:
  - course
updated: 2026-09-09
---

# Instructing for Emerson (IfE)

The Educational Services train-the-trainer course, produced through the
Workbench pipeline in **origination mode** — no source PowerPoint exists;
content is authored cold from the [[IfE Vault]] design (course structure,
methodology, objectives) and the Source Library, not converted from a
deck. See [[System Architecture]] and `curriculum-development.md`'s
"Cross-course provenance" section for how this integrates with the
conversion-mode 14101 build.

There is no `Source Deck/` folder for this reason — see
[[Vault Structure]]'s course layout, which the "Adding a course" checklist
already anticipates for a deckless course.

## Design source

The course's design of record — day structure, objectives, assessment
plan, rubric — lives in the separate **IfE Vault**
(`C:/Users/E1552882/Documents-Local/Projects/IfE`), maintained by Franz
and Steve. This course folder is the **Cartridge**: the pipeline's
produced output, built from that design, not a copy of it. Changes to the
course's shape (day count, objectives, assessment weights) happen in the
IfE Vault first; this folder tracks it.

## Status

- [x] Design source stable — 8-day structure, D1–D10 decisions (IfE Vault)
- [x] Schema proven — `provenance: original` and the `ife` domain-verb
      menu, via a bounded origination pilot
      (`10 - Courses/_Origination Test — ife-five-tenets/`)
- [x] **First real module authored** — Day 1, "The Five Tenets of IfE"
      (`Curriculum — IfE.md`, `Presentation/build/slides/ife-001…003.html`)
- [ ] Remaining Day 1 content (Show–Tell–Do overview, TPCD overview,
      reading a training solution)
- [ ] Days 2–8
- [ ] A module exercising cross-course `provenance` against real 14101
      slice content — the harder half of the Part B integration question,
      deliberately not attempted by the Five Tenets module
- [ ] Bench Notes / Bench Book (Stage 2 context authoring — not started)

## Open schema items affecting this course

Tracked in `00 - Project/Open Questions.md` and
`00 - Project/curriculum-development.md`'s pilot-findings note:

- Two Axis-3 roles (`nomenclature`, `contrast`) have no clean template fit
  for content with no figure — worked around by hand per-slide so far.
- The placement-edge `roles` field has no honest value for a non-role-
  routed domain like `ife` — currently omitted, not defaulted.
- IfE has no enumerated competency-area vocabulary — `ife.methodology.*`
  is a placeholder, not a decision.

## Modules

| # | Module | Domain area | Status |
| --- | --- | --- | --- |
| d1-m1 | The Five Tenets of IfE | `methodology` (placeholder) | ready |

`d1-m1` and the `ife-` slide prefix are working identifiers — IfE's real
module-ID scheme is still open, the same way 14101's was before its own
Phase 3.
