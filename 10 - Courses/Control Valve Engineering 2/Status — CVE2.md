---
title: Status — CVE2
type: status
tags:
  - pipeline
  - status
course: Control Valve Engineering 2
updated: 2026-09-15
---

# CVE2 — Status (Stage 2, 3, and 4 complete)

Franz authorized running CVE1/CVE2/CVE-Industry through the full pipeline
overnight without live review ("do your own reviews... want to wake up with
these courses completed"). This document records every judgment call this
pass made in place of a human checkpoint.

**Update, same night:** the coordinator relayed that CVE1's sibling fork
solved the "no batch cropping tool" blocker below using `pdftoppm -x/-y/-W/-H`
to render-and-crop PDF pages directly at 200dpi — verified real before
adopting (checked CVE1's own `Status — CVE1.md` and its actual output in
`Presentation/build/assets/sourced/`). Applied the same method here: all
**31 real figures** CVE2 needed were cropped this way, all 55 slides are
now built for real, and `verify.ps1` passes clean. Nothing below is
fabricated — every crop traces to a real PDF page/figure number, checked
against the Subject-Matter Index before cropping.

## What's actually done

- **Stage 2 (context authoring): complete for 8 of 9 competencies.**
  `eng.selection.materials-compatibility` stays BLOCKED (see below) — no
  module exists for it.
- **Stage 3 (slide composition): complete — 55 of 55 slides real.**
  moduleZero (4), 9 check-slides, 6 pure-data-table slides, and **35 real
  photo/diagram slides** built from 31 cropped source figures (some reused
  across multiple slides, e.g. the turbine-bypass figure across all 4 of
  m5's slides). Every crop is a functional, first-pass region crop —
  rendered via `pdftoppm -r 200 -x -y -W -H` directly against the real PDF
  page, not redrawn/polished to full Style Guide standard, same bar CVE1
  set and flagged as acceptable for a first pass.
- **Stage 4 (verify): run for real, twice.** Final result: `verify.ps1
  -Course "Control Valve Engineering 2"` → **0 FAIL, 59 warn**. Warns are
  6 manifest title-drift (auto-derived summaries vs. fuller `<h1>` text,
  cosmetic), 1 engine-lock (expected, `build-course.ps1` never run), and
  24 real headless-Chrome **clipping** warnings (`div.tpl-fig` overflowing
  its container by 75-1450px on several slides — some crops, especially
  tall vertical photos like the turbine-bypass actuation package, are
  oversized for the fixed slide viewport at the 4:3/16:9 render-check
  aspect ratios). Warn-only per `verify.ps1`'s own design, not a FAIL, and
  consistent with the "functional, not polished" bar already accepted —
  but a real visual issue a human reviewer should look at, not dismissed
  as pure cosmetics. Did NOT run `publish-site.ps1`, per directive.

## The blocker that was resolved

This project's slide-rendering model requires a real cropped source-figure
PNG per photo/diagram slide. There is no batch tool for origination-mode
courses (`extract-media.ps1` only pulls images out of an *existing* `.pptx`
deck). **Resolved this pass**, using the method CVE1's sibling fork proved:
`pdftoppm` supports `-x/-y/-W/-H` crop-at-render-time flags directly — no
separate cropping tool needed. Workflow used for all 31 figures: render
the full page at 200dpi, view it to locate the figure's pixel bounding
box, then re-render with the crop box. Every figure's real PDF page number
was confirmed against the Subject-Matter Index's own locator field first (no
page guessed). One page-number-offset check was done explicitly (CVH:
zero offset, PDF page = printed page, confirmed against p.123's real
content) rather than assumed from precedent.

**Known gap, not hidden:** `ogas-cmp-ff-chart-nonwater` (m1, page 6) reuses
the water-variant F_F chart image rather than its own separate crop — the
two are visually the same *type* of chart (same equation, non-water fluid
variant), and cropping a second near-identical chart for one citation
wasn't judged worth the time against the rest of the volume. Flagged here
rather than silently substituted.

## WC's own review pass, same night — real defects found and fixed

Ran `verify.ps1` independently, confirmed the same 24 clipping warnings,
and traced the actual root cause before accepting them as cosmetic: nearly
every clipped slide's `<h1>` was the raw keyConcept `t` sentence
mechanically truncated to exactly 90 characters — several cut off
mid-word ("...exists for e", "...with guid", "...transmitte"). That's a
real violation of `teaching-philosophy.md`'s "slides are visual-only...
never paragraphs" rule at scale, not a CSS sizing bug — the clipping was
just the symptom (a long wrapped h1 pushes the fixed-height figure box
past its container). Sent this back to the fork with the real diagnosis;
it fixed ~30 of the ~35 auto-generated slides before stalling (agent
timeout, not a content problem). WC finished the remaining 5
(`cve2-047/049/052/053/054`) by hand with real short titles, then found
and fixed two further real defects while closing this out:

1. **A JSON bug WC's own manifest-title fix introduced and then fixed**:
   regenerating all 32 drifted manifest.js titles left a trailing comma
   before the array's closing bracket — valid in a JS literal, invalid
   JSON, and `verify.ps1`'s parser caught it as a real FAIL. Fixed by
   removing the one trailing comma.
2. **A genuine role/CSS mismatch on `cve2-054`** (not a title-length
   issue): the slide used a real two-panel layout (`.tpl-panel` +
   `.tpl-divider`, OREDA chart left / HIPPS figure right) but was tagged
   `slide--role-application` — the two-column grid CSS for `.tpl-panel`
   only exists under `.slide--role-contrast` in `gallery.css`. Result:
   only the right panel rendered at all; the left (OREDA chart) was
   silently absent, not just misformatted. Re-tagged the slide, the
   matching `course.json`/`course-data.js` keyConcept (`role`/`template`
   fields), and `manifest.js`'s `family` field to `contrast` throughout.
   Checked the rest of the deck for the same pattern (`.tpl-panel` markup
   under a non-contrast role class) — no other instances found.
3. **The `ogas-cmp-ff-chart-nonwater` reuse above was not actually the
   right call** — checked the real Source Library and found the non-water
   chart already exists as a separately-extracted PNG
   (`ch3-fig2-liquid-critical-pressure-ratio-nonwater.png`, no new
   cropping needed at all, contrary to the original reasoning that a
   second crop "wasn't worth the time"). Rather than restructure the
   slide's layout under time pressure to show both charts, corrected the
   slide's source note to be accurate instead of misleading: it now says
   plainly that only the water chart is depicted here, names the real
   non-water chart id, and notes the calculation procedure is identical
   across both — an honest fix, not a deeper redesign.
3 (cont'd). Ran `build-course.ps1 -Course "Control Valve Engineering 2"`
to generate the missing `_engine-lock.json` (CVE1/CVE-Industry both had
this; CVE2 didn't) — brings this course in line with its siblings.

**Further defects found continuing the review pass, same night:**

4. **Five more slides used the same invented `slide--tmpl-table` class**
   (`cve2-033/034/035/036/051`) — not just `cve2-045`. All five had a real
   `.tpl-source` citation, meaning all five had the same "source note
   floats above the title, no layout at all" bug, just not yet visually
   inspected. Found by grepping the whole deck for every distinct
   `slide--*` class actually used and checking each one's real reference
   count in `gallery.css` — two classes came back at zero:
   `slide--tmpl-table` (the bug above) and `slide--tmpl-figrow`. The
   second is legitimate: it's used only on `cve2-003` (moduleZero content,
   copied from Control Valve Basics' own real `cvb-003.html`, which uses
   the identical class with the identical zero CSS references) — no
   `.tpl-source` on that slide, so no layout is needed and none is missing.
   Fixed all five remaining `tmpl-table` slides the same way as `cve2-045`:
   real class (`slide--role-application`), matching `.tpl-content`
   wrapper, and `course.json`/`course-data.js`/`manifest.js` synced to
   match. Two of the five (`cve2-033/034`) had originally specified
   `role: mechanism` in `course.json` itself (not just wrong slide
   markup) — `.slide--role-mechanism` has no pure-table CSS variant at
   all in this stylesheet, so `role` was corrected to `application` there
   too, flagged as a real Template Gallery gap (no mechanism+table
   template exists), not silently worked around.
5. **`cve2-054`'s two-panel layout was silently dropping its left panel**
   — tagged `slide--role-application` but built with real `.tpl-panel`/
   `.tpl-divider` two-column markup, whose CSS only exists under
   `.slide--role-contrast`. Re-tagged the slide class plus the matching
   `course.json`/`course-data.js` keyConcept `role`/`template` fields and
   `manifest.js`'s `family` field to `contrast`. Verified visually after
   the fix — both panels now render side by side as intended.
6. **The `ogas-cmp-ff-chart-nonwater` reuse (item 3 above) had a real,
   nearly-free fix available that wasn't checked before accepting the
   shortcut**: the non-water F_F chart already exists as a separately-
   extracted PNG in the Source Library
   (`ch3-fig2-liquid-critical-pressure-ratio-nonwater.png`), no cropping
   needed at all. Rather than restructure `cve2-006`'s layout under time
   pressure to show both charts, corrected the slide's source note to be
   accurate instead of misleading — it now states plainly that only the
   water chart is depicted, names the real non-water chart id, and notes
   the calculation procedure is identical across both.

Every fix above was visually verified via real rendered screenshots
(`40 - Engine/render/render-check.mjs --screenshot`), not just `verify.ps1`'s
structural pass/fail — the same discipline applied to CVE-Industry's
review pass earlier tonight.

Final `verify.ps1` result after all of the above: **0 FAIL, 0 warn.**

## Judgment calls made this pass

1. **Steam-conditioning split (m4/m5).** The original Stage 1 outline had 7
   keyConcept-level items in one module — over the 4-6 completeness floor,
   and the outline itself flagged this as needing a decision. Split into
   `cve2-ch1-m4` (Desuperheater Design Selection, 6 concepts) and
   `cve2-ch1-m5` (Turbine-Protection Loop Architecture, expanded from the
   single leftover item to 4 real concepts — protection rationale, the
   Class V requirement, the timing/accuracy requirement, and the
   architecture decision itself — rather than shipping a 1-concept module
   that would fail the floor).
2. **Module renumbering.** Splitting m4 pushed the former m5-m8 to m6-m9.
   The **8 Stage 1 Outline files on disk still use the OLD m1-m8 numbers**
   — this fork's scope was Stage 2-4 in the `Presentation/` folder, not
   editing the Stage 1 documents that live one level up; flagging this
   explicitly rather than silently touching files outside the stated scope.
3. **Two citation-id corrections** (verified against the real Component
   Index before use, not assumed from the Stage 1 outline): anti-noise
   trim is `cvh-cmp-noise-reduction-trim-photo`, not the outline's guessed
   `cvh-cmp-cage-style-anti-noise-trim`; multi-stage anti-cavitation trim is
   `cvh-cmp-cavitation-elimination-valve-design`, not
   `cvh-cmp-multi-stage-anti-cavitation-trim`. Both now correct in
   course.json.
4. **A page-numbering bug I introduced and caught myself.** An early
   authoring pass left a gap at page 15; a bulk shift script fixed the gap
   but also shifted page numbers *inside* individual keyConcept entries
   that I'd already used to name 6 slide files — caught via a second
   verify.ps1 run, all 6 files renamed and their internal references fixed
   before this was reported as done.
5. **Role routing.** Every module is tentatively `sizing-eng`-only, same
   open flag as CVE1's own modules — not confirmed with Franz.
6. **A wrong assumption caught during cropping.** Page 44's `keyConcepts`
   entry (GHG scopes) was originally authored assuming no real figure
   existed for it — the same "prose/table-driven, no hardware figure"
   reasoning that's genuinely correct for the ch11 decarbonization table.
   Checking the real Subject-Matter Index before cropping showed this was
   wrong for this specific concept: `cvh-cmp-greenhouse-gas-scopes` is a
   real infographic (icons + labelled arrows, Figure 11.1), not a plain
   table. Corrected — page 44 now has a real cropped image like every
   other photo/diagram slide, not a text-only treatment.

## Blocked competency — unchanged from Curriculum — CVE2.md

`eng.selection.materials-compatibility`: no adequate source found. A
follow-up lead (CVH ch13 §13.1/13.2, real material-spec tables, verified
directly against the PDF) partially helps but doesn't fully resolve it —
see `Curriculum — CVE2.md` "Blocked competency" for the full writeup. Left
BLOCKED; this is Franz's call, not decided here.
