---
title: IfE Readiness Roadmap
type: reference
tags:
  - project
  - roadmap
updated: 2026-09-09
---

# IfE Readiness Roadmap

**What this answers:** when is 14101 — and the Workbench delivering it — actually
ready to serve as practice material for **IfE (Instructing for Emerson)**, the
separate train-the-trainer course Steve (Manager, Educational Services)
sponsors? This is not [[Roadmap]] (which tracks the Workbench *system's own*
build stages). It's the readiness bar for one specific external consumer of
14101's content.

> [!note] What IfE is, briefly
> A 2-week, rubric-driven course that prepares Emerson SMEs/instructors to
> deliver hands-on technical training to a defined standard (the Instructor
> Observation Rubric). Cohorts are capped at 6. Participants don't design a
> lesson — they teach a pre-carved ~45–60 minute **slice** of the existing
> 14101 content, so the rubric can isolate delivery skill from
> instructional-design skill. IfE has its own project vault; this note only
> tracks where 14101/Workbench readiness intersects it.
>
> Some detail available on IfE (day-by-day structure in particular) comes from
> an earlier snapshot that's since gone stale — it names a 5-day course where
> the actual current course is 2 weeks. Nothing below depends on the specific
> day count; treat any day-by-day claim about IfE itself as Steve's to
> confirm, not this document's.

Milestones are **capability gates, not a calendar** — each one is either true
or not yet true, independent of when it happens.

---

## M0 — The delivery mechanism itself works · **done**

The Workshop shell (nav, context pane, presenter mode) is built and
structurally frozen — proven against all of 14101 Chapter 2. IfE doesn't need
Workbench software work to start using it; the shell isn't the gate.

## M1 — One slice proven end-to-end · **closest to done, not fully closed**

A single 14101 module reaches full Stage 3 completion **and** is confirmed to
be the right shape for a single 45–60 minute delivery block — not just
correctly rendered, but correctly *sized* as a teachable unit.

Ch 1–2 are fully finished. `ch3-m1` has been through a real teach-through (the
Phase 5 origination dry run), but that was a self-executed dry run reviewed on
screen — not an observed live delivery. **Not yet closed**: no module has been
taught out loud by a person as a timed practice block and checked against the
45–60 minute target.

## M2 — Cohort-minimum slice variety · **not started**

At least 6 distinct, fully finished modules/slices, spanning more than one
chapter, so a 6-person cohort each gets genuinely different material rather
than 6 people drawing from the same two chapters. Ch 1–2 alone (8 modules) hit
the *count* but not the *variety* — all from adjoining early content.

## M3 — A way to find "which modules are slice-ready" · **gap, not yet addressed**

Right now, knowing which modules are clean, finished, and teachable means
reading the Console's project store or [[System Map]] by hand. Nothing in
Workbench surfaces "IfE-ready slices" as a simple list a coordinator could use
to assign material to a cohort. This is a real gap — flagged here rather than
assumed solved by anything already built.

## M4 — A live pilot delivery · **not started**

A real person delivers one slice from the Workbench Workshop shell as an
actual practice teach-back — not a screen review. This is the first check that
presenter mode, the context pane, and slide legibility hold up in an actual
room, for an actual audience, under actual time pressure. Nothing has
validated this yet.

## M5 — Coverage across more of the course · **long-horizon**

Once IfE runs multiple cohorts over time, slice variety ideally spans more of
14101's 3 days, not just Day 1. This depends on the broader pipeline finishing
Chapters 4–16 and is explicitly a longer-horizon target, not a near-term gate.

---

## What's genuinely unresolved

- **M3's picker gap** — worth solving before the first real cohort, or is a
  person manually checking the System Map fine for now? Steve's call — see
  [[For Steve]].
- **What "done" means for a slice beyond Stage 3** — does an IfE participant
  need a printed Bench Book/instructor guide, or does the Workshop shell's
  on-screen context pane already carry what they need? Not yet asked, not
  assumed either way.
- **Which chapters to prioritize** — pipeline-completion order (Ch 3 next)
  vs. IfE-variety order (skip ahead to grab one slice from each day) are
  different orderings and nobody has chosen between them yet.

---

## Where this connects to the rest of the system

Once the hub's wiring view (in progress — see the project log) shows real
edges between pipeline stages and outcomes, this roadmap's milestones will
link directly to the specific chapter/stage completions that unlock them,
rather than sitting next to that diagram unconnected. Until then, this note is
the source of truth; the hub reflects it as a snapshot.
