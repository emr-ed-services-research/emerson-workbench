---
title: Current State
type: reference
tags:
  - project
  - onboarding
updated: 2026-10-14
---

# Current State

**What is happening now**, as opposed to how things are built. `CLAUDE.md`
tells you the shape of the vault; `System Architecture.md` tells you why it
looks like that; this tells you where the work actually is today.

> This page goes stale faster than anything else in `00 - Project`. If what
> you find on disk disagrees with it, the disk is right — fix this page.
> Rebuilt 2026-10-14 from the commit record, because Roadmap, System Map and
> Project Log had all drifted about a month behind the work.

---

## Where the work is

Commit volume over the 30 days to 2026-10-14, which is a fair proxy for
attention:

| Area | Last touched | State |
|---|---|---|
| `20 - Source Library` | 2026-10-14 | **Most active.** Subject-Matter Index still being extended — the most recent passes are aerodynamic noise and anti-noise trim |
| `45 - Process Core` | 2026-10-14 | **Most active.** Flow field, particle advection, the cascade lab. Shared layer: LPE vendors a copy |
| `50 - Lunar Process Engineer` | 2026-10-14 | Five levels plus a twelve-concept bench, all playable. Moves in step with Process Core |
| `10 - Courses` | 2026-10-09 | CVE1/CVE2/CVE-Industry built; 14101 and Control Valve Basics live |
| `55 - Interactive Models` | 2026-10-12 | Fisher 657 Working Model. **Moved out of the Source Library** that day |
| `05 - Home` | 2026-10-13 | Layer 1 landing page, icon, launcher |
| `40 - Engine` | 2026-10-09 | Course runtime; courses vendor a built copy |
| `25 - Vitruvius` | quiet | CVE-scoped expert persona |

## Branch and publishing

- Work happens on **`ed-archetype-swap-wip`**, which is **67 commits ahead of
  `main`** as of 2026-10-14.
- **GitHub Pages serves `main`/`docs`** →
  https://emr-ed-services-research.github.io/emerson-workbench/ — so the public
  Home lags the work branch by that whole gap. It is **public**: no login
  needed. Worth knowing before sharing the link.

## Recently landed

- **2026-10-13 — Workbench was presented to Steve's manager and the Senior
  Manager of Automation Solutions.** It landed: immediate adoption, an offer of
  whatever licences are needed, and a follow-up meeting. The running order that
  made it work was LoopBench (real hardware, a real loop closing) → the cascade
  (`45 - Process Core/lab/cascade/`, the physical layer under that loop) → LPE
  last, as surplus rather than as the delivery story.
- **2026-10-12** — Interactive Models split out of the Source Library: a
  library holds documents, these are products with their own pipelines.
- The **Standards Register** (`20 - Source Library/Standards/`) now gates
  citations — every `ISA-5.5 §3.3.2`-style reference must resolve to an entry
  there or the check fails.

## Live threads

- **Process Core** is the active build. Rule: build the stock layer and verify
  it against its own sources, never against LPE — LPE is a consumer.
- **Lunar Process Engineer** — Level 5 (the flash drum) and Level 6 (the blend
  tank) are designed and booked in that folder's `PIPELINE.md`. Level 4 has not
  been played to its final step.
- **LoopBench / HART bench** — real DVC6200 driven from Python. Hardware in
  hand; not yet proven end to end. Doubles as a troubleshooting-exercise
  platform.
- **A pitch deck** for the pipeline and index exists as a private Artifact,
  drafted 2026-10-08.

## Known debt

- `System Map.md` (2026-09-18), `Project Log & Backlog.md` (2026-09-21),
  `Roadmap.md` and `Project Charter.md` (both 2026-09-06) are all behind the
  work. The System Map in particular is *supposed* to be maintained.
- Frontmatter `updated:` fields across `00 - Project` drift from the real edit
  dates. Trust `git log`, not the frontmatter.
- `05 - Home` and `50 - Lunar Process Engineer/extras/desktop/` both grew their
  own icon + local-server + shortcut tooling independently. They should
  probably converge.
