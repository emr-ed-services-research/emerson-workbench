---
title: Instructing for Emerson (IfE) — Course Home
type: course
course: "IfE"
stage: origination
status: content-started
tags:
  - course
updated: 2026-09-10
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
- [x] **Module 0 built** — title slide, course roadmap (Week One/Week Two,
      confirmed 4+4 day split), facility & safety, sign-in & housekeeping
      (`Presentation/build/slides/ife-001…004.html`), reworked from
      14101's own front matter, not ported as-is
- [x] **Title-slide boot order** — a fresh load of the course shell opens
      directly on the branded title slide (`ife-001.html`) instead of the
      generic overview card, with a Continue button revealing the overview
      afterward. Shared-engine change (`course.js`); 14101 gets the same
      fix, verified on both.
- [x] **Day 1 built in full** (2026-09-10) — one module ("Contents", id
      `d1-foundations`), `ife-005…014`: Welcome, The Five Tenets,
      Show–Tell–Do, Reading a Training Solution, The Prime Question,
      Objectives Briefly, Myths Quick-Hit, Meet Your Slice. Pulled from
      the vault's `Day 1 - Foundations.md` (a stub — built proportionate
      to it, not padded). **Structure corrected twice, same day**: (1)
      originally built as 8 separate modules, one per sub-topic — wrong;
      collapsed into the single "Contents" module matching the vault's
      own one unified Day 1 objective and 14101's ch1 precedent ("no
      modules of only one or two slides"); (2) the collapsed module's
      `pages`/`check` split played the Five-Tenets check after all 6
      remaining topics instead of right after it, because the shell
      always appends a module's check last regardless of its real page
      number — found on a walkthrough screenshot, fixed by folding the
      check into `pages` at its true position and dropping the `check`
      field, so it now plays as an ordinary page immediately after
      "Received vs. Delivered." Full live-shell walkthrough verified
      three times total — after each fix — zero console errors every
      time. See `Curriculum — IfE.md`.
- [x] **Content-depth mechanism added** (2026-09-10) — origination Stage 1
      had no concept of scheduled classroom time, only a topic-coverage
      slide-count heuristic; confirmed by reading the actual pipeline
      code, not inferred. Fixed with a `minutesTarget` field feeding
      Stage 1 a real duration to budget against, plus a softer Stage 2
      nudge toward worked examples over bare statements
      (`curriculum-development.md` "Module additions"). `d1-foundations`
      carries a provisional `minutesTarget: 180` (half-day, vault-sourced,
      not Steve's sign-off).
- [x] **Day 1 given a real activities schedule** (2026-09-10, addendum) —
      pushback on the above: "a lens, not a lecture series" excuses thin
      *slides*, not undesigned *time*. Added `activities[]` (schema in
      `curriculum-development.md`) and four real, sourced activities to
      `d1-foundations` — a Tenet Sort discussion, a Show-Tell-Do worked
      walkthrough tied to the real 1400 bench-set-657 procedure
      (`20 - Source Library/Subject-Matter Index — bench-set-657.md`), a live
      walkthrough of 1400 Chapter 3's own real slides, and an Objectives
      practice exercise using that chapter's real 7 objectives — all
      verified against real source, none invented. Literal schedule
      totals 151 of the 180 provisional minutes (a 15-min break added,
      Franz's call) with the remaining ~29 minutes accepted as
      legitimate rotation/discussion buffer, not a further gap. See
      `Curriculum — IfE.md` "Content-depth fix, addendum."
- [ ] Days 2–8
- [ ] A module exercising cross-course `provenance` against real 14101
      slice content — the harder half of the Part B integration question,
      deliberately not attempted by the Five Tenets module
- [ ] Bench Notes / Bench Book (Stage 2 context authoring — not started)

## Design direction — Geist structure + Emerson blue (IfE-only, 2026-09-10)

This course's own `Presentation/build/css/{tokens,emerson-workbench}.css`
have **intentionally diverged** from `40 - Engine/`'s shared copies —
confirmed identical before the change, confirmed diverged after. Adopted
after Franz reviewed a real isolated before/after preview (not a text
description) and approved IfE-only for now, with 14101 addressed as a
separate, deliberate later pass — not yet decided whether/when.

What changed, IfE-only: four new tokens (`--radius-base`, `--radius-lift`,
`--shadow-base`, `--shadow-lift`, `--hairline`); `.tmpl-table` header rows
go neutral (structural, not a meaningful highlight) instead of solid
Emerson-blue fill; `.slide--tmpl-roadmap` day-cards go plain white +
hairline + soft shadow instead of a blue-tinted background. The governing
rule: color marks the one meaningful thing per slide/diagram, never used
for differentiation among equals — `ife-006` is the worked example (two
neutral boxes, one blue box, not two blue + one orange).

**This means `build-course.ps1 -Course "IfE - Instructing for Emerson"`
will report these two CSS files `DIVERGED` on every future run.** That is
correct and expected — do not `-Force` them back to parity with the
shared engine/14101; that would silently revert this decision.

## Schema items surfaced by this course

Tracked in `00 - Project/curriculum-development.md`'s pilot-findings
note — **all four resolved 2026-09-09**: the `nomenclature`/`contrast`
role-template fit (widened `CONCEPT_ROLES.nomenclature.treatment`, no new
template), the placement-edge `roles` field (`roles: null` now a defined
value for non-role-routed domains), and IfE's competency-area vocabulary
(four areas enumerated: `orientation`, `preparation`, `delivery`,
`development`). One item stays open, unresolved, no fix proposed: the
asset variant's `asset` field is stretched by pure-table content with no figure
at all (`PILOT-NOTES.md` Finding 6).

## Modules

| # | Module | Domain area(s) inside it | Status |
| --- | --- | --- | --- |
| m0 | Before We Start (title, roadmap, facility & safety, sign-in) | — front matter, no competency | ready |
| d1-foundations | "Contents" — Welcome, Five Tenets, Received vs. Delivered, Check, Show–Tell–Do, Reading a Training Solution, Prime Question, Objectives, Myths, Meet Your Slice (10 pages, flat sequence) | `orientation`, `delivery` | ready |

One module per chapter, not one per sub-topic — corrected 2026-09-10 (see
`Curriculum — IfE.md`). The module ID (`d1-foundations`) and the `ife-`
slide prefix are still working identifiers — IfE's real module-ID scheme
is the one item from the pilot's placeholders left open, the same way
14101's was before its own Phase 3.
