---
title: Status — CVE1
type: reference
tags:
  - status
  - pipeline
course: Control Valve Engineering 1
updated: 2026-09-16
---

# Status — CVE1 (Stage 2 → 4, self-reviewed)

> [!note] Why this document exists
> Franz authorized running CVE1 through Stage 4 overnight without a live
> human checkpoint at any stage boundary ("do your own reviews, but I am
> going to bed and want to wake up with these courses completed"). This
> document is that missing human review, written down instead of held in
> a person's head — every judgment call a human reviewer would normally
> make or challenge, made here explicitly, with reasoning, for morning
> review. Nothing was committed to git; that's left for a clean human (or
> WC) checkpoint before this lands in history.

## What got built

Stage 2 (context/key-concepts authoring), Stage 3 (slide composition), and
Stage 4 (verify) all ran for CVE1's two Stage-1-approved modules. Real
`course.json`, `course-data.js`, `manifest.js`, 16 real slide HTML files,
and 5 real cropped source-figure images now exist in
`Presentation/`. `40 - Engine/verify.ps1 -Course "Control Valve Engineering 1"`
passes **0 FAIL, 0 warn** (including the headless-Chrome render check —
this took two passes; see "Template-fit correction" below for what the
first pass caught).

## Judgment calls made in place of Franz's review

1. **minutesTarget split: 215 (m1) / 145 (m2) of the confirmed 360-minute
   day.** Not specified by Franz — he confirmed "1 day" (→360 min total,
   see `Curriculum — CVE1.md`), not a per-module split. Rationale: m1 has
   6 keyConcepts + a 25-min activity, m2 has 4 keyConcepts + a 20-min
   activity, roughly the same per-concept depth — split proportional to
   concept count (6:4 ≈ 3:2 of 360 ≈ 216:144, rounded to 215/145).
   **Genuinely a guess at proportion, not a scheduled-minutes fact** —
   worth Franz's own sanity check once he's reviewed the actual content.

2. **Role routing left at `sizing-eng` only, not resolved.** Both Stage 1
   outlines flagged this as an open question (does `inst-tech` need this
   for positioner-sizing work; does `operator`/`inst-tech` need damage
   diagnosis for field troubleshooting?). Kept the Stage-1-recommended
   default rather than either guessing yes or arbitrarily removing the
   flag — genuinely needs Franz's call, not mine to make unilaterally.

3. **Item ordering in cve1-ch1-m2 NOT changed** despite the Stage 1 fork's
   own recommendation to lead with the counter-intuitive high-recovery
   finding as the module's hook. Reasoning: that finding (page 14) is not
   comprehensible without the vena-contracta/collapse mechanism taught
   first (pages 12-13) — reordering would break comprehension for a real
   gain in "hook" placement. Used the module's `stakes` line to foreshadow
   the tension instead of a literal reorder. **Worth a second opinion** —
   this is exactly the kind of pedagogical trade-off a human should weigh
   in on, not just accept my resolution of it.

4. **Template-fit correction, mid-build (caught by the render check, not
   guessed in advance).** Four keyConcepts (pages 7, 8, 10, 14) were
   originally authored with `role: application` and a figure+takeaway
   layout. The first `verify.ps1` pass came back 0 FAIL but **8 render
   warnings** — real clipping on all four. Root cause: `gallery.css`'s
   `.slide--role-application` has no CSS rule for a real figure
   (`.tpl-fig-wrap`/`.tpl-fig`) at all — only `.tpl-chart` (SVG charts) or
   a list-based keyed-graph variant. All four were re-tagged to
   `role: mechanism` (fig+list is a real, working shape there; `level`
   stays `analyze`, independent of role) rather than inventing a new
   CSS rule or forcing the content into a chart it isn't. Second
   `verify.ps1` pass: 0 FAIL, 0 warn. **This was a real defect caught by
   running the actual render check, not assumed away** — flagging the
   method, not just the fix, since it's the discipline this whole
   overnight authorization depends on.

5. **Page 14's figure reused as a single image, not split into a
   two-panel contrast**, even though the concept compares high- vs.
   low-recovery valves. The source (Fig. 5.7) is ONE chart with both
   curves already overlaid on a shared axis — not two separate photos —
   so a forced two-panel split would have shown the identical image
   twice. This concept went through two re-tags in total (contrast →
   application → mechanism) before landing on its real shape; documented
   in the slide's own HTML comment and the concept's `templateRationale`.

6. **moduleZero content reused near-verbatim from Control Valve Basics**
   (title/roadmap/facility&safety/sign-in), matching the same pattern CVB
   itself used reusing IfE's. One line changed deliberately: CVB's
   Sign-In slide calls itself "a hands-on class" — false for CVE1 (desk/
   analysis work, worked case walkthroughs), changed to name the actual
   activity format instead of copying an inaccurate claim forward.

## Verification discipline applied

Every Component Index citation used (`cvh-cmp-valve-selection-process-flowchart`,
`cvh-cmp-vena-contracta-diagram`, `cvh-cmp-pressure-profile-high-low-recovery`,
`cvh-cmp-flashing-damage-photo`, `cvh-cmp-cavitation-damage-photo`) was
checked against the real `Component Index — Control Valve Handbook ch5.md`
before use — none invented. All 5 slide images are real crops from actual
200dpi renders of the source PDF pages (p.100 for the flowchart — an
unnumbered diagram, confirmed via the Component Index's own locator note;
pp.128-130 for the cavitation/flashing figures), not fabricated or
AI-generated illustrations. The counter-intuitive "high-recovery valves
are more cavitation-prone" claim was independently corroborated by reading
the source page's own body text during image extraction ("High-recovery
valves tend to be more subject to cavitation, since the vena contracta
pressure is lower...", p.129) — not just trusted from the Stage 1 outline.

## What still needs Franz's eyes specifically

- Judgment calls 1 and 2 above (minutesTarget split, role routing) —
  genuinely unresolved, not silently decided against his interest.
- Judgment call 3 (item ordering vs. the Stage 1 fork's hook
  recommendation) — a real pedagogical trade-off, not a fact check.
- The image crops themselves are functional but not redrawn/polished to
  full Style Guide §5.8 standard (a straight page-region crop, not a
  house redraw) — acceptable for a first real pass, but the kind of thing
  a real editorial review would normally catch and decide whether to
  redraw.
- No git commit has been made. This entire course exists only in the
  working tree, awaiting review.
