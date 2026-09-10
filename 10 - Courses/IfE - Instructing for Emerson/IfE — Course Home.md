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
      (`Curriculum — IfE.md`, `Presentation/build/slides/ife-005…007.html`)
- [x] **Module 0 built** — title slide, course roadmap (Week One/Week Two,
      confirmed 4+4 day split), facility & safety, sign-in & housekeeping
      (`Presentation/build/slides/ife-001…004.html`), reworked from
      14101's own front matter, not ported as-is
- [x] **Title-slide boot order** — a fresh load of the course shell opens
      directly on the branded title slide (`ife-001.html`) instead of the
      generic overview card, with a Continue button revealing the overview
      afterward. Shared-engine change (`course.js`); 14101 gets the same
      fix, verified on both.
- [ ] Remaining Day 1 content (Show–Tell–Do overview, TPCD overview,
      reading a training solution)
- [ ] Days 2–8
- [ ] A module exercising cross-course `provenance` against real 14101
      slice content — the harder half of the Part B integration question,
      deliberately not attempted by the Five Tenets module
- [ ] Bench Notes / Bench Book (Stage 2 context authoring — not started)

## Schema items surfaced by this course

Tracked in `00 - Project/curriculum-development.md`'s pilot-findings
note — **all four resolved 2026-09-09**: the `nomenclature`/`contrast`
role-template fit (widened `CONCEPT_ROLES.nomenclature.treatment`, no new
template), the placement-edge `roles` field (`roles: null` now a defined
value for non-role-routed domains), and IfE's competency-area vocabulary
(four areas enumerated: `orientation`, `preparation`, `delivery`,
`development`). One item stays open, unresolved, no fix proposed: the
primitive `asset` field is stretched by pure-table content with no figure
at all (`PILOT-NOTES.md` Finding 6).

## Modules

| # | Module | Domain area | Status |
| --- | --- | --- | --- |
| m0 | Before We Start (title, roadmap, facility & safety, sign-in) | — front matter, no competency | ready |
| d1-m1 | The Five Tenets of IfE | `orientation` | ready |

`d1-m1` and the `ife-` slide prefix are still working identifiers — IfE's
real module-ID scheme is the one item from the pilot's placeholders left
open, the same way 14101's was before its own Phase 3.
