---
title: Stage 1 Outline — Control Valve Engineering 1
type: review
tags:
  - stage1-outline
  - pipeline
course: Control Valve Engineering 1
chapter: cve1-ch1 (all 3 modules — one continuous case)
updated: 2026-09-16
---

# Stage 1 Outline — cve1-ch1, "Sizing a Valve for Real Shutoff" (Phase 1 rebuild, ATTEMPT 3)

> [!warning] SUPERSEDED by attempt 3 (2026-09-17) — this outline describes attempt 2's structure below, kept as historical record
> Attempt 2's single-scenario, three-module structure (below) was rebuilt
> again after Franz found no real numbers or term definitions anywhere in
> the early slides — see `Curriculum — CVE1.md`'s structure section and
> `Status — CVE1.md`'s attempt-3 entry for the real, current structure:
> three tiers of increasing difficulty (a fully-worked success, a moderate
> single-gap failure, then this attempt's hardest two-gap case
> repositioned last), each with real specific numbers. The module ids
> (`cve1-ch1-m1/m2/m3`) are reused for the new tiers in `course.json` — the
> outline below no longer matches the built course, kept for the historical
> record of what attempt 2 actually contained, same convention as
> `cve1-ch1-m2.md`'s own superseded-pointer note.

> [!warning] Replaces the prior 7-module Stage 1 Outline (same filename, overwritten)
> Attempt 1 of the Phase 1 rebuild (2026-09-16, morning) failed Franz's
> rubric review on four root causes: a rotary-trim narrative illustrated
> with sliding-stem damage photos; the scenario replacing direct
> instruction instead of framing it; the Vitruvius persona leaking into
> delivered content; and seven modules imposing artificial scene-breaks.
> **This document describes ATTEMPT 2** — see `Status — CVE1.md` for the
> full self-check against all four fixes, with real verification commands.

## The case

A learner works a real spec: a control valve for a liquid service with
Class V (near-zero-leakage) shutoff. Working the flowchart's six steps,
they commit to a streamlined, minimum-restriction **sliding-stem** trim
(chosen for Cv efficiency and tight gallery space) and an actuator sized
only to stroking thrust. A field inspection three weeks later finds two
independent real failures: cavitation damage on the trim, and a seat leak
from an actuator that was never checked against Class V's real seat-load
demand. Both mechanisms are then taught in full — vena contracta and the
counter-intuitive high-recovery-is-worse-for-cavitation finding; the real
A+B+C+D actuator-force breakdown — each complete enough to teach on its
own, each explicitly compared against the original decision. The flowchart
is re-walked correctly, practiced on new cases with fading support, and
the learner reflects on the specific gap between their own reasoning and
the correct reasoning.

**Hardware consistency, checked before writing any scenario text (fix #1):**
the only real damage-photo evidence in ch5 (`cvh-cmp-flashing-damage-photo`/
`cvh-cmp-cavitation-damage-photo`) is documented as sliding-stem "valve
plug/seat ring" damage, and the unbalance-area table
(`cvh-cmp-unbalance-area-table`) is explicitly framed around "single-seated
unbalanced valves vs. balanced valves" — sliding-stem-specific language.
The scenario's hardware is sliding-stem throughout, matching both. The
high/low-recovery pressure-profile figure (`cvh-cmp-pressure-profile-high-
low-recovery`) is itself hardware-agnostic (an abstract flow-path diagram,
no valve body shown), so the cavitation finding holds without needing to
invoke any particular valve family.

## Module map

| Module | Pages | Stage | Competencies |
| --- | --- | --- | --- |
| `cve1-ch1-m1` Specifying the Valve | 5-8 | Attempt + real consequence | `eng.sizing.valve-selection-process` (introduces), `eng.sizing.actuator-force-awareness` (introduces), `eng.noise-cavitation.damage-diagnosis` (introduces, evidence only) |
| `cve1-ch1-m2` The Two Real Mechanisms Behind the Failure | 9-14 | Model, full depth | `eng.noise-cavitation.damage-diagnosis` (introduces, full mechanism), `eng.sizing.actuator-force-awareness` (introduces, full mechanism) |
| `cve1-ch1-m3` Specifying It Correctly | 15-19 | Model (correct re-walk) → Coach-and-fade → Articulate/Reflect | `eng.sizing.valve-selection-process` (develops), `eng.selection.body-trim-decision` (introduces), `eng.sizing.valve-selection-process`/`eng.sizing.actuator-force-awareness` (applies), `eng.noise-cavitation.damage-diagnosis` (applies) |

Check: page 20, exercises `eng.sizing.actuator-force-awareness` against the
real Figure 5.3 seat-load values.

**Fix #4 in practice:** m1's own attempt and its consequence reveal are one
uninterrupted module (no scene break between "decision" and "field
report") — attempt 1 had these as two separate modules with a "Three Weeks
Later" title card. m2 folds both mechanisms (cavitation and actuator-force)
into one module rather than two, since neither needs its own scheduling
unit to be taught at full depth. m3 folds the correct re-walk, the coached
attempt, the faded attempt, and the reflection into one module — attempt 1
had these as three separate modules. Every cross-reference between modules
is by content ("the trim shown earlier"), never a module number.

## Real sources used (all verified against Component Index — Control Valve Handbook ch5.md before use)

- `cvh-cmp-valve-selection-process-flowchart` — shown as two distinct crops
  (steps 1-2; steps 3-5) plus once as the full diagram (page 17, the
  coached re-attempt, where the whole decision is genuinely worked at
  once) — never the same unmodified crop repeated for different concepts.
- `cvh-cmp-vena-contracta-diagram` (Fig. 5.6, p.128).
- `cvh-cmp-pressure-profile-high-low-recovery` (Fig. 5.7, p.128) — used
  without any valve-body-type language; the figure itself shows no
  hardware.
- `cvh-cmp-flashing-damage-photo` / `cvh-cmp-cavitation-damage-photo`
  (Figs. 5.8/5.9, pp.129-130).
- `cvh-cmp-unbalance-area-table` (Fig. 5.2, p.123).
- `cvh-cmp-seat-load-graph` (Fig. 5.3, p.124).

## The four fixes, checked directly

1. **Asset-first.** Checked above, before any scenario text was written —
   see "Hardware consistency."
2. **Full-depth instruction.** Every mechanism slide (pages 9-14) states
   the general mechanism completely, then cites the running case as one
   worked example — removing the case references would still leave a
   complete explanation of vena contracta, flash/collapse, high/low
   recovery, damage-signature contrast, the A+B+C+D breakdown, and reading
   the seat-load graph.
3. **No Vitruvius, no persona voice.** `grep -il vitruvius build/slides/*.html`
   returns no matches. The field-consequence device is plain professional
   narration ("field inspection... finds..."), not a character speaking.
4. **Modules are scheduling only.** Three modules, `buildsOn` chained
   m1→m2→m3, no module-number cross-references in delivered text, no
   fresh-start title-card framing between modules.

## Open items for Franz's rubric review

- `minutesTarget` per module (70/130/130, still totaling 360) is a
  judgment call, not independently confirmed.
- Role routing (`sizing-eng` only) is unchanged, still not confirmed.
- Pages 9-10 still reuse the identical vena-contracta image back to back
  (flagged directly in `cve1-010.html`'s own authoring comment) — genuinely
  different teaching content each time (the mechanism itself, then the
  flash/collapse distinction), but a distinct tighter crop of the collapse
  point specifically would be a real further improvement, not done in this
  pass given its scope was the four root-cause fixes.
- This is Phase 1 — coverage of ch5's other components (§5.1-5.10's
  dimensional/sizing-formula content) is explicitly Phase 2's job.
