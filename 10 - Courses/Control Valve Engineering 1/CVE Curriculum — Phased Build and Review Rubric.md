---
title: CVE Curriculum — Phased Build and Review Rubric
type: reference
tags:
  - curriculum
  - pipeline
  - review
course: Control Valve Engineering 1
updated: 2026-09-16
---

# CVE Curriculum — Phased Build and Review Rubric

> [!note] Status
> Written 2026-09-16, after CVE1's first build (commit `a82a16b`) was
> reviewed by Franz and found genuinely deficient — see "Why this exists"
> below. Governs the CVE1 → CVE2 → CVE-Industry build going forward.
> Reinstates a real human checkpoint between phases; the first CVE1/CVE2/
> CVE-Industry build ran with checkpoints explicitly skipped
> (`cve-build-skips-human-checkpoints-by-choice`), and this document is the
> direct result of what that skip cost. Not a return to skipping — the
> opposite.

## Why this exists

CVE1's first build passed every automated check (`verify.ps1`: 0 FAIL, 0
warn) and still produced a genuinely bad module: six consecutive slides in
`cve1-ch1-m1` referencing the exact same unmodified source image, and
content Franz described directly as "flat, soulless, empty, devoid of
consideration for instructing." Automated verification catches broken
references and render failures; it does not catch whether a course is
actually good. This document is the structured, actionable substitute for
that judgment — a rubric specific enough that feedback can be "check #1
fails on slides 8–11, same figure reused, needs distinct grounding per
step" rather than an impression after the fact.

## Phased plan

Each phase is a real gate — nothing proceeds to the next phase without
Franz reviewing the built result against the rubric below and saying so.

| Phase | What happens | Gate to next phase |
| --- | --- | --- |
| **1. Prove the method** | Rebuild CVE1 against `teaching-philosophy.md`'s Cognitive Apprenticeship / Productive Failure method and Vitruvius, at CVE1's current scope (now 4 competencies, including the added `eng.sizing.actuator-force-awareness`). Smallest real test of whether the method works at all. | Rubric review. If it fails, tweak and re-run Phase 1 — do not scale a method that hasn't been shown to work once. |
| **2. Prove it at real coverage** | Same method, same course, expanded toward genuinely covering CVE1's assigned source chapter(s) — not a token sample. | Rubric review, with particular weight on the coverage check. |
| **3. Generalize to CVE2** | Apply the now-proven method to new content in a new course. Tests whether the method travels, or only worked because CVE1's content happened to fit it. | Rubric review. |
| **4. Generalize to CVE-Industry (Oil & Gas)** | Apply to the `applies` stage — a genuinely different content type (industry application, not fundamentals) — and check that the three-course arc reads as one connected sequence, not three unrelated courses. | Rubric review, plus: does this feel like the payoff of CVE1/CVE2? |
| **5. Generalize the industry pattern** | Power & Severe Service / Pulp & Paper / Refining as further CVE-Industry instances. | Explicitly out of scope until Phase 4 lands. |

## The rubric

Walk through this per module, against the actual rendered slides — not
the design docs, not the Stage 1 outline. CVE1 v1 passed every design-doc
and automated check and still failed on delivery; the rubric only means
something applied to what a learner would actually see.

| # | Check | What to actually look at | Pass / Needs tweak |
| --- | --- | --- | --- |
| 1 | **Visual variety** | Do consecutive slides show genuinely different images, or does one image repeat unmodified across multiple slides? | |
| 2 | **Real tension** | Is there at least one genuine, source-grounded counter-intuitive finding or open judgment call — not just facts delivered in sequence? | |
| 3 | **Attempt before instruction** | Does the learner make a real decision, with plausible wrong options, *before* the concept is taught — not an activity bolted on after? | |
| 4 | **Consequence is real** | Does the reveal trace to an actual documented case or finding (a Subject-Matter Index entry, a verified Vitruvius ledger entry) — not a dramatized but invented scenario? | |
| 5 | **Narrative continuity** | Does this module connect to the same running scenario as the one before it, or does it feel like a disconnected new topic? | |
| 6 | **Instructor depth** | Is there enough behind the content that an instructor could field a real unscripted question, or does it read as a bare script? | |
| 7 | **Coverage against source** | Does the competency set draw on a meaningful fraction of its assigned chapter's real content, or a token sample standing in for the whole chapter? | |

A module can pass automated verification and fail every row here. Both
kinds of check are required; neither substitutes for the other.
