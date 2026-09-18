---
title: Status — CVE1
type: reference
tags:
  - status
  - pipeline
course: Control Valve Engineering 1
updated: 2026-09-17
---

# Status — CVE1

## PHASE 1 REBUILD, ATTEMPT 4 (2026-09-17) — grounds conceptual explanation in real Subject-Matter Index topic entries, awaiting Franz's review

**Why this pass exists.** Attempt 3 (below) fixed narrative/pacing/data
problems (the three-tier ramp, real worked numbers) but its conceptual
explanations — why cavitation happens, what vena contracta is, what
balance/seat-load actually mean — were authored from general engineering
knowledge, because no real source for that conceptual content existed
anywhere in the Subject-Matter Index. The Subject-Matter Index only ever indexed
figures/diagrams/tables (the standing "figures-only rule"); body prose
explaining the concepts themselves was never catalogued. Franz's fix: a
new entry kind, `kind: topic`, was added to
`Subject-Matter Index — Control Valve Handbook ch5.md` — six real entries
(`cvh-topic-cavitation`, `cvh-topic-flashing`, `cvh-topic-flow-recovery`,
`cvh-topic-vena-contracta`, `cvh-topic-valve-balance`, `cvh-topic-seat-load`),
each grounded in real Handbook body prose (verified via `pdftotext -layout`
against the real PDF pages, confirmed independently a second time by WC
before this rebuild started — two verbatim quotes checked directly against
the PDF text and matched exactly). This pass is the validation test: does
citing real conceptual sources actually improve the content, not just add
citations for their own sake.

### What changed, slide by slide

- **Page 7 ("Four Forces, Not One")** — added a new bullet stating the real
  mechanism from `cvh-topic-valve-balance`: unbalance force = net pressure
  differential × net unbalance area, and that a balanced trim routes
  pressure to both sides of the plug to cancel *most, but never all,* of
  that force. This was missing before — the slide named the four forces but
  never explained what A actually *is*. Cited `cvh-topic-valve-balance`
  alongside the existing figure citation.
- **Page 17 ("The Assumption That Was Backwards") — the most substantive
  real fix.** Attempt 3 asserted the high-recovery/cavitation correlation
  without explaining *why*: it said a high-recovery trim "recovers pressure
  faster and higher," full stop, leaving the actual causal chain
  (why the vena-contracta pressure itself is lower for a high-recovery
  design) unstated. Rewrote it to state the Handbook's own reasoning
  directly, quoting verbatim: "High-recovery valves tend to be more subject
  to cavitation, since the vena contracta pressure is lower and more likely
  to reach down to the liquid's vapor pressure" — and explained why: less
  internal turbulence and energy dissipation means more of the total
  pressure drop shows up right at the vena contracta itself. This is a real
  content improvement, not just an added citation — attempt 3's version
  would have left a learner able to recite the correlation without
  understanding it.
- **Page 16 ("Where Both Failures Start")** — bullet 3 expanded to include
  the real source detail that collapse happens "close to where they
  formed" and produces "a noise like gravel flowing through the valve" —
  both from the real prose, not invented flavor text.
- **Pages 8, 10, 11, 14, 15, 18, 19** — added `cvh-topic-*` citations
  alongside existing figure citations where the content already matched the
  real source closely (these slides converged with the real prose even
  before the topic entries existed, likely because general engineering
  knowledge of this material is accurate) — citations added for real
  traceability, no content rewrite needed since nothing was wrong, only
  unsourced.

**Honest assessment of whether this was worth it:** partially oversold in
the original root-cause framing. Most of attempt 3's conceptual content was
already substantively correct — the topic entries mainly *added
traceability* (a real citation instead of an implicit claim) rather than
*correcting* wrong content. The one genuine exception is page 17, where the
real source revealed a causal mechanism attempt 3 had skipped past. That is
a real, meaningful improvement and justifies the schema addition on its own,
but it would be inaccurate to claim all six topics "fixed" something broken
— most confirmed what was already there.

### Verification of the five items carried forward from attempt 3 — re-confirmed with real commands, not assumed

1. **Vitruvius absent from delivered content:**
   `grep -ril vitruvius build/slides/*.html build/manifest.js` → no matches.
2. **No delivered "Module N" framing:**
   `grep -n "Module [0-9]" build/slides/*.html | grep -v "<!--"` → no matches.
3. **No consecutive duplicate images:** checked every consecutive slide
   pair (pages 5-20) programmatically — none found.
4. **Sliding-stem consistency:** `grep -n -i rotary build/slides/*.html`
   → only page 20's quiz distractor ("Class V only matters for rotary
   valves, not this globe valve"), correctly framed as a wrong-answer
   option, not a leak.
5. **Real numbers preserved in tier 1:** confirmed pages 5-8 still contain
   the real P1/ΔP/Q/Cv/lbf arithmetic from attempt 3, untouched by this
   pass's citation additions.

`verify.ps1 -Course "Control Valve Engineering 1"`: **0 FAIL, 0 warn**,
re-run after every edit.

### What still needs Franz

Same open items as attempt 3 — `minutesTarget` split (90/90/180) is a
proportional guess, role routing unconfirmed — plus a new one: is the
honest assessment above (topic entries mostly added traceability, one real
causal-mechanism fix) itself the right bar, or does Franz want every
concept slide re-examined this closely regardless of whether the existing
content happened to already be accurate? Scaling this `kind: topic`
approach to chapters 6-12 is explicitly not decided by this pass — Franz
asked to validate against CVE1 first.

---

## PHASE 1 REBUILD, ATTEMPT 3 (2026-09-17) — fixes two more real defects, awaiting Franz's review

Attempt 2 (below) fixed attempt 1's four root causes but Franz then found,
reading the real delivered slide text directly with RC: **no technical
term was ever defined** (P1, ΔP, Q, Cv, Class V used repeatedly with zero
definition) and **no real number appeared anywhere in the early slides**
— every decision was narrated as already-decided ("the calculated Cv was
correct," "a streamlined trim was selected") with nothing a learner could
compute or check. The attempt step of the method had never actually
happened — replaced by a summary of someone else's decision. Root cause,
per `teaching-philosophy.md`'s new "Difficulty must ramp, not open cold"
section: the course opened directly on its hardest case (Class V shutoff
+ a cavitation-prone trim, two independent failure modes at once) before
the learner had ever seen the vocabulary or mechanism succeed once.

**The fix — three tiers, not one scenario:**

- **Tier 1 (`cve1-ch1-m1`, pages 5-8) — a complete, real, fully-worked
  SUCCESS, no failure at all.** Case A: P1=150 psig, ΔP=50 psi, Q=200 gpm
  water, Class II. Preliminary Cv = 200 × √(1.0/50) = 200 × 0.141 ≈ 28 —
  shown as actual arithmetic, not a stated result. Trim/body: 3-in. globe,
  standard trim, rated Cv≈32. Actuator force: port dia. 2-5/16 in →
  unbalance area 4.20 in² (Fig. 5.2), A=4.20×50=210 lbf; Fig. 5.3 at Class
  II/50psi≈15 lbf/in, circumference=π×2.3125=7.27in, B≈109 lbf; C≈30,
  D≈10; total≈359 lbf against a 900 lbf-rated actuator — real margin. This
  is where P1, ΔP, Q, Cv, unbalance area, and seat load are each defined
  in plain language, the first time they appear. No Attempt→Consequence
  here — nothing has been taught yet to fail against — it is Model (as
  worked success) → Reflect only, per the corrected method.
- **Tier 2 (`cve1-ch1-m2`, pages 9-11) — a moderate, single-gap
  productive-failure case.** Case B (Class III): Cv/trim correctly
  reasoned (≈19, 2-in. globe, rated Cv≈22, no cavitation risk). The
  actuator is sized against stroking thrust alone (≈180 lbf estimate,
  250 lbf unit selected) — a real, documented commissioning seat leak
  results. The real total, worked the same way as Tier 1: port dia.
  1-7/8in → area 2.76in² (Fig. 5.2), A=2.76×60≈166 lbf; Fig. 5.3 at Class
  III/60psi≈45 lbf/in, circumference=π×1.875=5.89in, B≈265 lbf; C≈25,
  D≈10; total≈466 lbf — nearly double the 250 lbf actually rated, and B
  alone exceeds the whole rating. One real gap only (actuator force),
  isolated from any cavitation issue — a real Attempt→Consequence→Model
  cycle, moderate difficulty.
- **Tier 3 (`cve1-ch1-m3`, pages 12-19+check) — the hardest case, Franz's
  original Class V/cavitation scenario, repositioned here rather than at
  the front.** Case C: P1=400psig, ΔP=320psi (80% of P1), Q=100gpm, Class
  V. Preliminary Cv=100×√(1.0/320)≈5.6. The same two shortcuts as before
  (high-recovery sliding-stem trim for Cv-efficiency; stroking-thrust-only
  actuator sizing, now ≈2,500lbf estimate against a 3,000lbf unit) produce
  two independent real failures: cavitation damage (Fig. 5.9) and a seat
  leak. Both mechanisms are modeled in full (vena contracta/flash-collapse,
  high-vs-low recovery, the damage-photo contrast) and the real force total
  is worked at Class V's scale: port dia. 3-7/16in → area 9.28in² (Fig.
  5.2), A=9.28×400≈3,712lbf (shutoff uses the full 400psi); Fig. 5.3 at
  Class V/400psi≈900lbf/in, circumference=π×3.4375=10.8in, B≈9,720lbf;
  C≈50, D≈20; total≈13,500lbf — over four times the 3,000lbf rating. The
  case is then re-worked correctly with coached-then-faded practice and a
  closing reflection.

**Verification evidence, checked directly, every item, not asserted:**

- **Real numbers, every term defined at first use** — confirmed by reading
  pages 5, 7, 8, 9, 11, 12, 13, 15, 19 directly; each shows the actual
  arithmetic, not a narrated result.
- **Sliding-stem throughout** — `grep -n -i "rotary" build/slides/*.html |
  grep -v "<!--"` returns only page 20's wrong-answer distractor ("Class V
  only matters for rotary valves, not this globe valve"), correctly framed
  as a distractor, not a narrative inconsistency.
- **Vitruvius fully absent** — `grep -ril "vitruvius" build/slides/*.html
  build/manifest.js` returns nothing.
- **No delivered "Module N" framing** — `grep -n "Module [0-9]"
  build/slides/*.html | grep -v "<!--"` returns nothing outside comments.
- **No back-to-back identical images** — checked every consecutive page
  pair's figure directly (005→006→...→019): none repeats. (Attempt 2's
  flagged pages 9-10 vena-contracta repeat no longer exists in this
  structure — that content moved to Tier 3's pages 16-17, no longer
  adjacent to itself.)
- `verify.ps1 -Course "Control Valve Engineering 1"`: **0 FAIL, 0 warn**,
  re-run after every content change, not once at the end. Also re-synced
  `manifest.js`'s titles and section labels to the new module
  titles/structure (attempt 2 left this stale once before — checked this
  time before reporting done).

**Open items, unchanged from attempt 2, still real:** `minutesTarget`
per module is a judgment-call reallocation (90/90/180 across the three
tiers, weighted toward Tier 3's larger scope), not independently
confirmed. Role routing (`sizing-eng` only) remains unconfirmed. No git
commit made — old build stays tagged at `cve1-build1-pre-productive-
failure-rebuild` (commit `a82a16b`); attempt 2's work was never committed
either, so nothing additional needed preserving before this pass
overwrote it.

---

## PHASE 1 REBUILD, ATTEMPT 2 (2026-09-16) — fixes attempt 1's four root causes, awaiting Franz's rubric review

Attempt 1 (below) also failed Franz's rubric review, on four root causes
Franz and RC synthesized together, not a list of eleven separate
complaints. This section documents attempt 2, which fixes all four
together as one redesign. `Curriculum — CVE1.md`'s "Structure" section has
the reader-facing summary; this section has the explicit self-check with
real commands run, not just an assertion each fix holds.

### The four root causes from attempt 1, and the fix for each

**1. Asset/narrative mismatch — the story got invented before checking what assets existed.**
Attempt 1's wrong decision was a "compact rotary trim," but the only real
damage photos in ch5 (`cvh-cmp-flashing-damage-photo`/
`cvh-cmp-cavitation-damage-photo`, Figures 5.8/5.9) are documented as
sliding-stem "valve plug/seat ring" damage — a real hardware mismatch that
destroyed the scenario's credibility.

*Fix, checked before writing any scenario text this time:* read
`Subject-Matter Index — Control Valve Handbook ch5.md` in full first. Confirmed
the damage photos are sliding-stem-specific, and separately confirmed the
unbalance-area table (`cvh-cmp-unbalance-area-table`, Fig. 5.2) is
explicitly framed around "single-seated unbalanced valves vs. balanced
valves" — also sliding-stem-specific language, not hardware-agnostic. Also
checked `cvh-cmp-pressure-profile-high-low-recovery` (Fig. 5.7): the actual
figure is an abstract flow-path diagram with no valve body drawn at all —
attempt 1's own "e.g. a streamlined ball valve" aside was never required by
the source figure, just an unnecessary example added on top of it. The
scenario's hardware is sliding-stem throughout, matching the real evidence
exactly. Verification command and result:
```
grep -il "rotary\|ball valve" build/slides/*.html
```
→ matches only in authoring comments explaining the fix, and one
correctly-framed wrong-answer distractor on the check slide (page 20,
"Class V only matters for rotary valves, not this globe valve" — a false
option, consistent with the sliding-stem framing). Zero occurrences in
delivered narrative text.

**2. The scenario replaced direct instruction instead of framing it.**
Franz: "the scenario should NOT completely replace direct instruction — it
needs both a well-grounded scenario AND real, logically-sequenced direct
instruction."

*Fix:* every mechanism-teaching slide (pages 9-14) was rewritten so its
core technical content is a complete, standalone statement of the
mechanism — the vena-contracta explanation, the flash/collapse
distinction, the high/low-recovery finding, the flashing-vs-cavitation
visual signature, the A+B+C+D force breakdown, and reading the seat-load
graph could each be taught with every scenario reference deleted and would
still fully teach the concept. The scenario is cited as one worked example
of each mechanism (e.g. "the trim chosen earlier was the higher-recovery
option"), never the vehicle the teaching depends on.

**3. Vitruvius leaked into delivered, student-facing content.**
Verified directly in attempt 1: "Vitruvius" appeared in the course roadmap
table (`cve1-002.html`) and as literal slide titles ("Vitruvius: The First
Call", "Vitruvius: The Second Call").

*Fix:* removed the named persona entirely. The field-consequence device is
now plain professional narration ("field inspection, three weeks in
service, finds...") — a real inspection finding stated directly, not a
character's dialogue. Verification commands and results:
```
grep -il vitruvius build/slides/*.html      → no matches
grep -i vitruvius manifest.js               → no matches (also caught and
                                               fixed a stale "section"
                                               field that still said "What
                                               Vitruvius Checks" even after
                                               slide titles were clean —
                                               manifest.js needs its own
                                               check, title-matching alone
                                               isn't sufficient)
grep -ril vitruvius Presentation/           → only course.json's own
                                               internal _note field
                                               (pipeline metadata, never
                                               rendered to a student)
```

**4. Module structure imposed artificial seams on one continuous scenario.**
Franz: "the scenario does not need these seams, it breaks the narrative by
conveying this simple scenario as a multiple scenario event."

*Fix:* three modules instead of seven. `cve1-ch1-m1` holds both the
attempt AND its consequence as one uninterrupted module (attempt 1 split
these into two modules with a "Three Weeks Later" title-card scene break).
`cve1-ch1-m2` holds both mechanism explanations (cavitation, actuator-
force) in one module rather than two. `cve1-ch1-m3` holds the corrected
re-walk, the coached attempt, the faded attempt, and the reflection in one
module (attempt 1 had these as three separate modules). Every cross-module
reference is by content ("the trim shown a moment ago"), never a module
number — checked directly:
```
grep -n "Module [0-9]" build/slides/*.html
```
→ matches only in HTML authoring comments (`<!-- Module 0, page N -->`,
the standard moduleZero convention every course in this vault uses),
never in delivered slide text.

### Not addressed in this pass, flagged not hidden

- Pages 9-10 still reuse the identical vena-contracta image back to back.
  Genuinely different teaching content each time (the mechanism itself,
  then the flash/collapse distinction it extends into) — not the same
  failure as attempt 1's six-in-a-row repeat — but Franz's own review
  flagged this exact pattern as a real, if minor, recurrence, and a
  distinct tighter crop of the collapse point specifically would close it
  fully. Left as a known item rather than attempted in this pass, which
  scoped itself to the four root causes.
- `minutesTarget` per module (70/130/130, still 360 total) is a
  reallocation judgment call, not independently confirmed with Franz.
- Role routing (`sizing-eng` only) is unchanged, still unconfirmed.
- `verify.ps1 -Course "Control Valve Engineering 1"` result after all
  fixes: **0 FAIL, 0 warn.**

---

## PHASE 1 REBUILD, ATTEMPT 1 (2026-09-16) — FAILED Franz's rubric review, superseded below

The section below this one is the original 2026-09-15 build's status
record, kept as history. This section documents the first Phase 1 rebuild
attempt that replaced it in the working tree (old build tagged
`cve1-build1-pre-productive-failure-rebuild` @ commit `a82a16b`) — itself
now superseded by ATTEMPT 2, documented in the new top section above this
one. Kept as history, not deleted, same convention as the original build
below it.

### Why this rebuild happened

The first build passed `verify.ps1` cleanly (0 FAIL, 0 warn) and was still
judged genuinely deficient by Franz on direct review: "flat, soulless,
empty, devoid of consideration for instructing." The concrete, independently
verified defect: `cve1-005.html` through `cve1-010.html` (all six
keyConcepts of the old module 1) referenced the exact same unmodified image,
`cvh5-valve-selection-process-flowchart.png`, six times in a row. Automated
verification catches broken references and render failures; it does not
catch whether a course is actually good. `CVE Curriculum — Phased Build and
Review Rubric.md` is the structured response — a 7-item rubric, applied
per module against the real rendered slides, with a real human gate between
phases. Checkpoints are back on for this build and all future phases;
tonight's earlier "run it all through Stage 4 unattended" authorization is
explicitly reversed by that document, not just this one.

### What changed

Rebuilt against `teaching-philosophy.md`'s "Instructional method —
Cognitive Apprenticeship via Productive Failure" section and the new
Vitruvius persona (`25 - Vitruvius/Vitruvius.md`). Added a 4th competency,
`eng.sizing.actuator-force-awareness` (qualitative table-lookup level —
unbalance area, seat load — NOT the full quantitative calculation, which
stays CVE2's job), per the coverage-scope decision Franz and RC resolved
directly. Restructured the old two independent topic modules into ONE
continuous scenario across 7 modules, mapped explicitly to
Attempt → Consequence → Model → Coach-and-fade → Articulate/Reflect — see
`Stage 1 Outline — Control Valve Engineering 1 — cve1-ch1-m1.md` for the
full module map and scenario description.

Two new real source figures used for the first time in any built course:
`cvh-cmp-unbalance-area-table` (Figure 5.2, p.123) and
`cvh-cmp-seat-load-graph` (Figure 5.3, p.124) — both verified against
`Subject-Matter Index — Control Valve Handbook ch5.md` before use, both
hand-cropped via `pdftoppm -r 200` from the real PDF pages. The flowchart
component — the source of the original defect — is now shown as two
distinct crops (steps 1-2; steps 3-5) for different concepts, plus once as
the complete diagram (page 17, where the whole decision is genuinely being
re-worked at once) — never the same crop reused for unrelated content.

### Rubric self-score (against `CVE Curriculum — Phased Build and Review Rubric.md`)

Walked per the rubric's own instruction — against the actual rendered
slides (verified via real screenshots, `40 - Engine/render/render-check.mjs
--screenshot`), not the design docs.

| # | Check | Self-score | Why |
| --- | --- | --- | --- |
| 1 | Visual variety | **Pass** | Every one of the 16 content slides uses a distinct crop or a genuinely different figure — checked directly by listing every image reference across pages 5-20; the flowchart appears as 3 different crop regions (steps 1-2, steps 3-5, full diagram) across 5 uses, never the same crop for two different concepts. This is the specific defect that broke the first build — confirmed fixed, not assumed. |
| 2 | Real tension | **Pass** | The high-recovery-valves-are-more-cavitation-prone finding (page 11) and the 5-10x seat-load gap between Class II and Class V (page 14) are both genuine, source-grounded counter-intuitive results, not facts delivered in sequence — both explicitly framed as contradicting a plausible-sounding assumption. |
| 3 | Attempt before instruction | **Pass** | Module 1 (pages 5-6) is a real written commitment to a specific, plausible wrong decision, made before any of the four competencies are taught — not an activity bolted on after content. The instructor collects varied answers without correcting (page 6's activity note). |
| 4 | Consequence is real | **Pass** | Both field failures (cavitation damage, seat-load shortfall) trace directly to real, already-verified Subject-Matter Index entries (`cvh-cmp-pressure-profile-high-low-recovery`, `cvh-cmp-seat-load-graph`) — not dramatized inventions. Neither needed the Historic archive or new Vitruvius research, so the Verified Findings Ledger correctly stays empty this pass (see course.json's own `_note`). |
| 5 | Narrative continuity | **Pass** | All 7 modules run the same case (the same service, the same original spec) — module 3/4's "Model" stages explicitly reference "the Module 1 decision," module 5 explicitly re-walks "the same flowchart steps," module 6 explicitly frames itself as a second attempt, module 7 explicitly asks the learner to compare against their own Module 1/6 work. No module reads as a disconnected new topic. |
| 6 | Instructor depth | **Needs a human judgment call, not a fact-check** | The real A+B+C+D force breakdown, the real seat-load table, and the vena-contracta/high-recovery mechanism all give an instructor genuine material to field an unscripted question with — more than the first build had. Whether it's genuinely *enough* depth is exactly the kind of call this rubric item exists for a human to make, not something I can self-certify. |
| 7 | Coverage against source | **Needs a tweak — flagged, not hidden** | This is explicitly Phase 1's scope, not Phase 2's — the rubric doc itself says Phase 1 tests the method "at CVE1's current scope," and Phase 2 is where real chapter coverage gets proven. CVE1 still draws on a small fraction of ch5 (the flowchart, cavitation/flashing, and now 2 of the actuator-sizing figures) — Figures 5.4-5.5 (recommended seat load table, packing friction) and the rest of ch5's dimensional/sizing content are untouched. Do not read row 1's real fix as also closing row 7 — they are different defects. |

**Net: 5 of 7 rows self-score Pass, 1 (instructor depth) needs Franz's own
judgment rather than a fact-check, and 1 (coverage) is honestly flagged as
Phase 2's job, not silently claimed as done.**

### verify.ps1

`verify.ps1 -Course "Control Valve Engineering 1"` → **0 FAIL, 0 warn**,
independently re-run after every content change, not just once at the end.
20 slides (4 moduleZero + 16 content/check), all real, all citations
verified against the Subject-Matter Index before use.

### What still needs Franz

Per the phased rubric doc: this build stops here. Specifically —

1. **Rows 6 and 7 above** — instructor depth and coverage — need Franz's
   own judgment, not just automated confirmation.
2. **`minutesTarget` reallocation** (still 360 total, now split across 7
   modules instead of 2) is a judgment call, not independently confirmed.
3. **Role routing** (`sizing-eng` only) is still unconfirmed.
4. Per the phased plan: if this passes review, Phase 2 (expand to real
   ch5 coverage) is next — NOT CVE2, NOT CVE-Industry, and NOT started by
   this pass on its own judgment.

---

## Original build (2026-09-15) — Stage 2 → 4, self-reviewed, superseded above

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

Every Subject-Matter Index citation used (`cvh-cmp-valve-selection-process-flowchart`,
`cvh-cmp-vena-contracta-diagram`, `cvh-cmp-pressure-profile-high-low-recovery`,
`cvh-cmp-flashing-damage-photo`, `cvh-cmp-cavitation-damage-photo`) was
checked against the real `Subject-Matter Index — Control Valve Handbook ch5.md`
before use — none invented. All 5 slide images are real crops from actual
200dpi renders of the source PDF pages (p.100 for the flowchart — an
unnumbered diagram, confirmed via the Subject-Matter Index's own locator note;
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
