---
title: Course Porting Pipeline
type: plan
tags:
  - project
  - pipeline
  - stage-2
updated: 2026-09-04
---

# Course Porting Pipeline

> [!note] Status
> **Proven on the 14101 pilot; being run per chapter.** Consolidates the 14101
> course-engine architecture review (2026-08-29). Repeatable process for bringing
> any PowerPoint course into the Workbench; belongs under [[Roadmap]] Stage 2.
>
> - **Step 1 done (2026-08-30):** `git init` + `.gitignore`; the generator guard
>   (`generate.ps1` refuses to overwrite `PROTECTED.txt` slides without `-Force`).
> - **Step 2 done (2026-08-30):** engine extracted to [[Engine|40 - Engine]];
>   `build-course.ps1` assembles a course's `Presentation/` from it; the three
>   de-coupling fixes applied (slide prefix, shell title, colour tokens) plus
>   per-course localStorage namespacing. Verified in-browser for 14101.
> - **Step 3 done (2026-08-30):** Chapter 2 slide 27 → `.slide--tmpl-diagram`
>   (Template 2 proven with a second consumer); data single-sourcing resolved
>   (lint now via `data-ref` + `40 - Engine/verify.ps1`, data layer as a named
>   later stage). `verify.ps1` runs 0 FAIL for 14101.
> - **14101 Chapter 2 complete (2026-08-31):** all seven modules through Stage 2
>   and the Stage 3 four-part pass. Three cross-cutting working rules (below)
>   were codified from its rework requests. Next phase is the Pipeline Console —
>   see [[System Architecture]].
> - **Step 4 done (2026-08-31):** `verify.ps1` validates structure (JSON, page
>   refs, tag balance, CSS, engine-lock, `data-ref` drift) **and** renders every
>   slide in headless Chrome (section 7, via `40 - Engine/render/`) — load-clean,
>   broken-image, and clipping checks in both 4:3 and the 16:9 shell. Warn-only
>   until proven; the finished Chapters 1–2 render clean. The judgement items
>   (callout accuracy, geometry, polish bar) still belong to the reviewer.
>
> Open decisions at the end; mirror into [[Open Questions]].

## Purpose

One repeatable process to port a PowerPoint course into the Emerson Workbench:
**bulk-convert → cut to the teaching arc → author the context layer → run the
four-part slide pass → verify → publish.**

[[14101 — Course Home|14101]] was the proving ground. Everything below is extracted
from what worked there and what forked. The goal of writing it down is to stop
re-deriving the process per course and to make the engine a shared asset instead
of a thing that gets copied.

## Working rules (every stage, every course)

Cross-cutting rules that came out of the 14101 work. They apply at **every stage
and to every course** — not scoped to a chapter, a module, or the stage that
first surfaced them.

1. **Browser rendering is a discrete verification step, never a drafting aid.**
   Wherever the pipeline produces or edits HTML / CSS / SVG — a Stage 0
   hand-fix, the Stage 3 slide pass, Stage 4 tuning — every decision about
   structure, template choice, content, wording, and layout (including callout
   `top` / `--lead` starting values) is made by **reasoning about the markup and
   the design system**. Chrome is opened only to verify a finished artifact, and
   only for what genuinely cannot be read from source: real proportions, whether
   a callout leader lands on its exact part, layout collisions and clipping, and
   the slide against the module-intro polish bar. Stage 3 runs this as its
   Part 4 verification stage, once per slide; Stage 4 runs the same checks
   headless across the whole deck. Reaching for the browser mid-draft is the
   failure this rule exists to stop.

2. **Understand the real 3-D geometry, and look for a sourced figure, before
   drawing.** Whenever a slide carries a diagram or image, check the Control
   Valve Handbook (its component figures *and* its section 3.4, not only the
   Fisher instruction manuals) for a cleaner existing version of the same thing.
   Prefer the sourced figure — cropped, attributed in `SOURCES.txt`,
   `.is-sourced` treatment — over a recreation. This check is owed **before
   spending time iterating on an existing hand-drawn figure too**, not only when
   first authoring a slide.

   From Stage 2 on, this search is **front-loaded into a component index**
   (`20 - Source Library/Component Index — <code> <chapter>.md`): the figures a
   chapter's concepts need, each with a source locator and a precedence bucket
   (`current` / `archive-corroborated` / `archive-only` / `legacy` — newer
   sources win on correctness; a better-presented older figure is usable where
   it does not conflict). Stage 2 earmarks each concept's component; Stage 3
   uses the earmark instead of searching cold, and logs any decision to draw new
   art. Provenance is confirmed by a full read of a source before it is cited —
   spot-checks miss the conflicts you do not already know to look for.

   Before hand-drawing any diagram of a *physical feature* — a seating line, a
   lap line, a seal contact, a thread, a gland bore — first name what kind of
   geometry it is: a flat face, a **circumferential ring**, a curved surface, a
   helix. A 2-D cutaway that flattens a ring into a line is fine; one that turns
   a ring into a **V** is *wrong*. If you are not sure what the feature's shape
   is in 3-D, that uncertainty is the signal to stop and check a source photo —
   a real photo of the real part is both more trustworthy and usually clearer
   for the learner. After drawing, cross-check the diagram's geometry against a
   reference photo or the manual's own figure. Two slides were drawn wrong this
   way before this rule existed: the Ch 2 M3 packing-box cutaway (bonnet wall
   too thick — slide 51) and the Ch 2 M5 lap-line cutaway (a ring drawn as a V —
   slide 62), both fixed by switching to the sourced figure.

   This rule is the canonical statement of the geometry check. The Part 4
   pre-send checklist (Stage 3) points back here rather than restating it.

3. **A fix discovered during course work is a pipeline question first.** When a
   slide needs reworking, decide whether it is a one-time content correction or
   a gap the pipeline's rules, templates, or checklist should have caught. If it
   is a gap, codify it — here, in the pre-send checklist, or in
   [[System Architecture]] — *before or alongside* fixing the slide; the slide
   fix is then the first instance of the codified rule, not an isolated patch.
   This is why rules 1 and 2 exist: both started as slide fixes that were
   actually pipeline gaps. [[System Architecture]] carries the four-layer model
   (Workbench / Workshop / Cartridge / Pipeline Console) this separation comes
   from. 14101 Chapter 2 is now complete; the next phase is scoping and building
   the Pipeline Console, with the Workshop shell frozen until then.

4. **Completeness against source, not volume, is the content standard.**
   (Corrected 2026-09-04, from a ch3-m4 review — see [[teaching-philosophy]]
   "The standard is completeness against source, not a volume judgment" for
   the full statement.) Establish what full, correct coverage of a concept
   requires from **every legitimate source for the scope at hand** — the
   Source Library / component index, and, when converting an existing deck,
   the deck itself (it may carry real instructional content or framing not in
   the Source Library at all; it is a source, not inventory to reshape
   against an external standard) — then measure a slide against that bar,
   never against how sparse or busy it looks. An element
   stays, or gets added, because it is load-bearing for the concept; it goes
   only when it is genuinely redundant, decorative, or unrelated. Elegant
   delivery is a constraint applied *after* completeness, never traded against
   it. **The test:** be exactly as willing to add a slide, a diagram, or a
   callout as to remove one, whichever move actually serves complete and
   correct coverage — reduction is not inherently virtuous and addition is not
   inherently suspect; service to the concept is the only virtue. This rule
   exists because an earlier version of the teaching philosophy said flatly
   that on-screen density is a sign of misplacement, with no carve-out for a
   concept that genuinely needs several visual elements to be taught
   completely — read literally, that produced exactly the ch3-m4 defects (a
   bench-set graph missing its travel-stop marks; callouts placed plausibly
   rather than verified). Part 3 of Stage 3 (below) is amended accordingly.

   **Widened 2026-09-10** (Content-Depth follow-up, checking Stage 3 for the
   same floor-vs-ceiling conflation found in Stage 1/2's slide-count
   heuristic): a third legitimate source, on the same footing as "the
   deck" above — established general instructional-design or
   subject-matter knowledge, for origination content with neither a deck
   nor a Source Library figure behind it (`provenance: original`). Before
   this, an origination module's completeness bar named only the Source
   Library, which is too strict for content like IfE's Show-Tell-Do or
   Five Tenets — real, established, non-vault-exclusive material this
   pipeline is expected to draw on, not invent. See
   [[teaching-philosophy]] for the full statement.

5. **A real doing-activity follows the natural completion of a topic — not a
   slot count, a module boundary, or a competency change.** (Added
   2026-09-10, from [[Hands-First Philosophy|Hands-First]], Educational
   Services' department-wide teaching philosophy.) Whenever content shows or
   explains something, a genuinely strong, compelling doing-activity follows
   once that explanation actually finishes — never partway through it, and
   never a token check-the-box exercise. "Topic" is Stage 1's own judgment
   about what constitutes one coherent teaching unit; it is deliberately
   **not** defined by a countable structural signal, because none exists that
   survives contact with real content. Checked directly before writing this
   rule, not assumed: a module-boundary proxy fails on IfE's Foundations
   module, which covers several distinct topics (Five Tenets, Show-Tell-Do,
   reading a training solution, objectives) in one module — a rule keyed to
   module boundaries would never fire inside it. A competency-change proxy
   fails in the opposite direction on 14101's Fisher 657 actuator topic,
   which genuinely spans several separate competencies (identify, bench-set,
   mount, service) that must run **uninterrupted** as one continuous arc — a
   rule keyed to competency changes would fire repeatedly mid-topic, breaking
   exactly the content this rule exists to protect. See
   [[curriculum-development]] "Module additions — `activities[]`" for the
   schema and what counts as a genuinely strong activity, not a token one.
   **Enforcement is human review for now**, at the same tier as callout
   accuracy and the polish bar in the Part 4 pre-send checklist below — not a
   mechanical check. A real automated check would need Stage 1 to author an
   explicit topic-boundary marker (e.g. a `topicEnd` flag) as part of the
   same arc-cutting judgment it already makes implicitly; that schema
   addition is deliberately not built, pending a future decision to actually
   want this mechanically checkable.

## Where we are (updated 2026-08-31)

- **14101 fully converted** — all 418 slides on the component-extraction model
  (semantic HTML per slide against a shared design system).
- **The shell layer is solid.** `course.js` / `course.css` / `course.json` are
  chapter-agnostic — no per-chapter code. The drop-a-slide-from-flow / keep the
  file / mark it with a `data-review` ribbon convention is identical across
  chapters.
- **The four-part slide-redesign process is proven** on all of Day 1 Chapters 1
  and 2 (Ch 2 finished 2026-08-31 — seven modules, Stage 2 + Stage 3).
- **Five reusable slide templates exist** (see
  `40 - Engine/Presentation/build/css/TEMPLATES.md`): intro card,
  `.slide--tmpl-diagram`, `.slide--tmpl-table`, `.slide--tmpl-compare`,
  `.slide--tmpl-figrow`. After Chapter 2 each has multiple consumers — "shared"
  is now exercised, not just built.
- **Authoring tiers remaining:**
  1. *Done to Stage 3* — Day 1 Chapters 1 and 2.
  2. *Outline only* — Day 1 Chapters 3, 4, Workshop 1; Days 2–3 (Ch 5–16): page
     ranges and a one-line objective, nothing else.
- **Chapter 2's own back-align** (its m1–m3 ad-hoc consolidated slides onto the
  templates) was folded into the Stage 3 pass — no longer a separate tier.

## The blocker

**The engine lives inside course 14101's folder** —
`10 - Courses/14101 Valve Trim and Body Maintenance/Presentation/` holds
`course.js`, `course.css`, `emerson-workbench.css`, `slides.js`, the shell
skeleton, the `_generator/` scripts, and the templates.

Porting a second course today means copying all of that into its folder — an
immediate fork. Every later engine fix (a template, a `course.js` change, a
palette tweak) then has to be applied N times, and the courses drift — the exact
failure this project exists to end.

**Nothing else in this plan is worth doing until the engine is a shared asset
every course references.**

### Engine extraction

Move the engine to a shared location. A course then reduces to: its
`course.json`, its `slides/`, its media, and its source-library shelf config —
all pointing at one engine.

De-coupling fixes required first (all small):

| Coupling | Fix |
| --- | --- |
| `course.js` hardcodes `"1400-"` in the slide-iframe `src` (2 lines) | read `course.code + "-"`, or add a `slidePrefix` field to `course.json` |
| Shell `index.html` hardcodes the course title and header string | render them from `course-data.js` on boot |
| `course.css` re-declares 6 EMERSON colour tokens that also live in `emerson-workbench.css` | one shared `tokens.css` both import — or the shell also loads the design system |

## Pipeline stages

| Stage | Input | Output | Owner | Automatable |
| --- | --- | --- | --- | --- |
| **0 · Bulk convert** | `.pptx` | `slides/*.html`, `manifest.*`, `conversion-report.csv` | script | Fully — `extract-media.ps1` + `generate.ps1`. Works today. |
| **1 · Cut the teaching arc** | converted deck + source chapter list + [[teaching-philosophy]] | `course.json` skeleton: days → chapters → modules, page ranges, `status: "outline"` | human | No — this is the judgement the philosophy governs. Scaffold only. |
| **2 · Author the context layer** | skeleton + [[Source Library]] + component index | per module: `objective`, 4–6 `keyConcepts` (`{t, pages, level, role, sources}`), `check`, `visual: true`, `status: "ready"`, `levelTarget` / `stakes` / `buildsOn`; chapter `domain` | human + Claude | Partly — Claude drafts from slides + source; human approves. |
| **3 · Four-part slide pass** | authored module + [[Source Library]] | templated, polished slides; splits consolidated; dropped slides ribboned; unverifiable claims flagged | Claude + human review | Partly — procedure is defined; needs the template library and the data-single-source decision to be clean. |
| **4 · Verify & publish** | rebuilt slides | browser-render checks, 16:9 tuning, `course-data.js` regenerated, integrity-validated | script + human | Mostly — one `verify.ps1`. |

### Stage 0 — Bulk convert

Already built and reliable, and course-parameterised (2026-08-31):
`extract-media.ps1 -Course "<name>"` unpacks and rasterises media;
`generate.ps1 -Course "<name>"` walks each slide's shape tree, classifies the
layout family, extracts title / body / figures / tables / notes / hyperlinks /
CYK reveals, rebuilds native vector artwork as SVG, and writes one HTML file per
slide plus the manifest and a conversion report. Two conversion flags are
emitted: `svg-rebuilt` (dense diagram auto-rebuilt) and `ole-fallback` (embedded
object, PowerPoint's fallback image rasterised). Everything — deck path, slide
prefix, deck id, the section map — resolves from the course name through
`generator/_paths.ps1`; per-course chapter ranges live in
`<course>/Source Deck/sections.json`. `generate.ps1 -DryRun` writes to a scratch
dir for previewing a conversion without touching the real slides.

**Its one defect: it is a one-shot.** Re-running it rewrites every
`slides/<prefix>*.html` from the `.pptx` with no knowledge of downstream hand
work — which is what the regeneration guard (below) fences off.

### Stage 1 — Cut the teaching arc

Human decides, from what is taught in what sequence:

- **Days** — the top-level identity (14101: Sliding Stem / Rotary / Positioners).
- **Chapters** — detail nested inside a day.
- **Module boundaries** — cut from each module's stated objective and key
  concepts, **not** the deck's chapter order or its check-your-knowledge slide
  positions.

Governed by [[teaching-philosophy]] ("structure mirrors the teaching arc, not
the source deck") and the 14101 module-boundary work. Output is a `course.json`
skeleton with every module `status: "outline"`.

Scaffolding possible (not required): a script that *proposes* modules from the
deck's section breaks and CYK positions for a human to re-cut.

**Run Stage 1 as a discrete step even when a rough skeleton already exists.**
14101 Chapter 2's modules 4–7 already had titles, page ranges and a one-line
objective in `course.json` (from the earlier chapter-structuring work), so this
session went straight from that skeleton into Stage 2 without an explicit "is
this the right cut?" pass. It happened to hold — the maintenance-sequence
boundaries (Disassembly / Lapping / Packing / Reassembly) matched the Stage 2
objectives and key concepts with no friction. But the check was skipped, not
passed. For Chapter 3 onward, confirm each module boundary against its intended
objective *before* authoring context — an inherited page range is a starting
proposal, not a completed Stage 1.

### Stage 2 — Author the context layer

Per module, write:

- a one-sentence `objective`;
- 4–6 `keyConcepts`, each
  `{ "t": "...", "pages": [n], "level": "...", "role": "...", "sources": [...] }`,
  in instructor-talking-point voice;
- confirm `pages` / `check`;
- set `"visual": true` and `"status": "ready"`;
- the tags (below): chapter `domain`; module `levelTarget` / `stakes` /
  `buildsOn`; per-concept `level` / `role` / `sources`.

Correctness is checked against the [[Source Library]] here — this is where the
four-part process's **Part 2** (source cross-reference) begins. Claude drafts
from the slides plus the relevant Handbook / manual sections; the human approves
each module.

**Three tagging axes** (added 2026-09-03; see
`00 - Project/Source Grounding — Staging Plan.md`,
`00 - Project/Instructional-Method Review — ch3.md`, and [[teaching-philosophy]]
"Instructional-design tags"):

1. **Source-component earmarking (Axis A).** If the chapter has a component index
   (`20 - Source Library/Component Index — <code> <chapter>.md`), each concept
   gets `sources: [<component id>, …]` naming the indexed figure that supports
   it. No indexed component → a short `sourceNote` instead. Stage 3 then pulls
   from these instead of searching source material cold.
2. **Bloom / domain (Axis B).** Each chapter carries a `domain` (`maintenance` /
   `instrumentation` / `engineering` / `null` — renamed from `selection-sizing`
   2026-09-14, spelled out in full 2026-09-17, see the domain/tier schema fix
   below); each module a `levelTarget` (Bloom's
   revised: remember … create); each concept its own `level`. The objective
   leads with a verb from the domain menu at `levelTarget`.
3. **Instructional role (Axis C).** Each concept carries a `role` (`prime`,
   `nomenclature`, `mechanism`, `procedure`, `application`, `contrast`,
   `caution`, `check`) — what kind of move it is, telling Stage 3 how to frame
   the slide. Each module carries `stakes` (one sentence — the on-the-job cost
   of getting it wrong, shown on the intro card) and `buildsOn` (module ids this
   one is a faded repeat of — Stage 3 goes terser).

`moduleStage2Completeness` (strict mode, run by the Console's Stage 2) lints all
of the above; a missing `prime` or formative `check` is an advisory note, not a
failure (Stage 3 composes the check slide).

**The domain/tier schema fix (Post-Stage-4 Architecture Bundle item 3, Franz,
2026-09-14).** Before this fix, a chapter/module tracked whether its audience
had settled into a domain at all through a separate `audienceStage` field
(`"orientation"` meaning "no domain yet"), while a primitive tracked the same
question through a differently-named, conflated field,
`domainOrAudienceStage`, that could hold either a real domain string or the
literal `"orientation"`. Both are retired. `domain` is now the single field
everywhere (chapter, module, and primitive), and **`null` is itself a real,
permanent value of `domain`** — not a placeholder for "not yet decided." A
module or chapter with no domain assigned simply carries `domain: null`
(or omits the field, which collapses to the same `null` at read time — Stage
2 completeness checking no longer requires a chapter/module to have a
non-null domain, the way it used to require the `audienceStage: "orientation"`
exception to excuse one). A primitive is stricter: **the `domain` key must be
present**, even when its value is `null` — `primitiveCompleteness` checks
`'domain' in primitive`, not `primitive.domain == null`, so a primitive that
never set the field at all is still flagged as incomplete, while one that
explicitly set `domain: null` is not. This is the one invariant the whole fix
turns on: `domain: null` must never *also* mean "not yet decided" — that
ambiguity stays owned by `status: "outline"` (module/chapter) or by a
primitive simply not existing yet in an unauthored concept, never by `domain`
itself. `instructional-design.js`'s `NULL_DOMAIN_GUIDANCE` (keyed by `tier`)
replaces the old `AUDIENCE_STAGE_GUIDANCE` (keyed by the single value
`"orientation"`) as the depth/reinforcement guidance injected into Stage 1/2
origination prompts when `domain` is `null`.

This fix also builds the **primitive selector** the schema always implied but
never had: `selectPrimitive(primitives, target)` in `course-model.js`. A
concept with exactly one primitive (every real course so far) returns it
directly, no matching needed. A concept with more than one primitive — one
per applicable `domain` x `tier` permutation, not yet exercised by any real
course as of this writing — matches on exact `domain` + `tier` equality
against the target course's own scoping; zero or multiple matches throws a
descriptive error rather than silently guessing, since a wrong silent guess
here would ship the wrong depth or voice with no signal anything went wrong.
Control Valve Basics was migrated to this schema 2026-09-14 (4 chapters, 9
modules, 51 primitives, all from `audienceStage`/`domainOrAudienceStage:
"orientation"` to explicit `domain: null`) — the first real course in the
new shape, same as it was the first real course in the `primitives[]` shape
itself (2026-09-11).

Requires: readable Source Library PDFs (Poppler's `pdftotext` is at
`C:\Users\E1552882\poppler\poppler-26.02.0\Library\bin\`; archive scans need
`pdftoppm` — see the `reading-source-library-pdfs` note).

### Stage 3 — The four-part slide pass

A slide-level content and design pass **beneath** the module structure (the
day / chapter / module hierarchy never changes). Run per module.

1. **Sequencing & framing.** Go slide by slide. Does the image match the concept
   being introduced at that exact step? Where a slide introduces a narrower idea
   (e.g. *trim*) while showing the fuller assembly (body + bonnet), reorder or
   re-crop so the visual matches what is being taught at that moment; save the
   fuller view for when the broader concept is actually introduced.
2. **Source cross-reference.** For each module, check the relevant Handbook
   chapter and the applicable Fisher manuals — for correctness *and* framing.
   Per working rule 2, look for a cleaner sourced version of every diagram
   before recreating or hand-tuning one; fix wording that does not quite say the
   right thing once checked against the real source. Any claim that cannot be
   confirmed against source material is **flagged explicitly as unresolved**,
   not guessed.
3. **Consolidate artificially split slides — and verify nothing load-bearing
   was lost doing it.** Where one idea has been spread across many
   near-identical slides (one slide per leakage class, per flow characteristic,
   per packing type), combine them into one well-designed slide — a comparison
   table or a single labelled figure — so related items can be seen and
   compared together. A consolidation removes **duplication**, never
   **content**: before marking a merge done, re-check the result against
   Part 2's source cross-reference and confirm every element that was teaching
   something distinct in either original slide is still present — including
   an element that reads as a decorative detail rather than a "concept," such
   as a graph's calibration marks or a diagram's secondary illustration. Per
   working rule 4, an under-covering merge is a defect to fix, not an economy
   to keep.
4. **Hierarchy + polish.** Keep day / chapter / module exactly as they are. Every
   resulting slide, however much it consolidates, gets the same clean visual
   treatment and context-pane parity as the rest of the course. This part ends
   with the **browser verification stage** (below).

Parts 1–3 and every drafting decision in Part 4 are markup reasoning, not
browser work — per working rule 1. The Part 4 verification stage is where this
pass renders, once per slide.

**Composition, from the Stage 2 tags** (Axis C — see [[teaching-philosophy]]):
Stage 3 receives each slide's concept `level` + `role` and the module `stakes` /
`buildsOn`. It frames each slide by its role (a `mechanism` is a diagram, a
`procedure` a step sequence, a `caution` the `.slide--tmpl-caution` card, an
`application` a concrete scenario), re-orders the existing slides toward
`prime → nomenclature → mechanism → procedure`/`application` → `check`, writes an
apply-or-higher module's check-your-knowledge stem as a *situation* rather than
"which is true", and where `buildsOn` is set does not re-teach the referenced
material. It does **not create new slide files** — a missing `prime` is the
intro card's `stakes`; a missing formative `check` is noted (a first-class
formative-check slide is a deferred Layer-2 change). A full re-fire also carries
any open Stage-3 review flags for the module to resolve.

**The visual-concept check** (added 2026-09-09, from the IfE Foundations
review — `ife-006` was the miss that surfaced it): before a concept with no
source figure defaults onto a table or text-list template, ask explicitly —
does this concept describe a relationship, hierarchy, process, or framework
between its parts that could be drawn, not just named or tabulated? If yes,
propose an original diagram (house-designed, `provenance: original` where
applicable) before falling back to a table. If the content is genuinely a
flat set of separate facts with no natural visual shape, a table or short
list is the correct, honest answer — say so explicitly rather than landing
there by default either way. This is a propose-, not force-, rule: "no
natural visual shape" stays a fully legitimate outcome, not a failure to
find one. See Part 4 checklist item 4 for the render-time half of this check.

**Ground rules:**

- Re-cropping a deck image to its teaching subject, splitting a composite figure
  into its parts, and redrawing a weak low-resolution raster as a clean SVG are
  **part of this pass** — not deferred follow-ups. (The original "no pixel-level
  re-cropping" rule applied only to the first Chapter 2 proof pass.) The one
  thing still flagged as a follow-up: pulling a single diagram out of a dense
  multi-callout engineering drawing where it would need real retouching (erasing
  crossing leader lines, rebuilding labels).
- Derived / redrawn images go in the course's tracked
  `Presentation/build/assets/sourced/` with a line in that folder's
  `SOURCES.txt`. The raw PPTX extracts in `assets/img/` are gitignored.
- Where a slide's image and its key-concept text do not match, fix the framing
  or reorder — do not leave them out of sync.
- Dropped-but-retained slides keep their files (for the standalone deck) and
  carry a `data-review` ribbon naming the pass.

**Part 4 browser verification stage — the pre-send checklist.** Every redesigned
slide is rendered in Chrome once, at the end of its pass, and passes all six
checks before Franz sees it. This is the visual quality gate made concrete and
the point in the four-part pass where working rule 1's render happens. Rework
rounds spent on these are the assistant's failure, not review feedback. Item 4
(template fit) is a markup-reasoning check that should already be settled going
in; the render confirms it rather than discovers it.

1. **Image quality.** Sharp at slide size? A low-resolution raster, a screenshot,
   or an image with baked-in arrows / labels / JPEG noise does **not** ship as-is
   — re-crop from a higher-resolution render, lift a cleaner version from a
   manual, or redraw it as an SVG.

   **Geometry accuracy:** for any hand-drawn diagram of a physical feature,
   run working rule 2's geometry check — confirm the feature's real 3-D shape
   and cross-check the drawing against a source photo or the manual's figure.
   Full statement and worked examples: **working rule 2** (above).
2. **No text over imagery.** Captions, notes and the callout list each sit in
   their own space. Nothing but a deliberate on-image marker overlaps a figure.
   Re-check this in the 16:9 shell, where a fixed-size figure takes more of the
   vertical space than in 4:3.
3. **Callout accuracy.** Zoom every render to 2× and confirm each leader line
   *terminates on the exact part it names* — not "near", not "in the right
   region". Nudge the marker `top` / `--lead` and re-render until every one lands.
4. **Template fit.** 2–4 things compared side by side → horizontal `figrow`
   (`.slide--tmpl-figrow`). A reference table plus the items it tabulates →
   table with the items in a row beneath it (`.has-lead`). One diagram with
   parts to name → `.slide--tmpl-diagram`. A relationship, process, or
   framework with no source figure but a real drawable shape → an original
   diagram, not a default table — reached only when the visual-concept check
   above (Stage 3 composition) was actually asked, not skipped. Never a
   vertical stack of images in an aside.
5. **Both aspect ratios.** Render the slide standalone (4:3) **and** in the
   course shell (16:9, `?embed=1&visual=1`); check for collisions and clipping
   in each.
6. **Polish bar.** Hold it against the module-intro card: centred where it should
   be, balanced whitespace, no oversized element, heading in the standard
   `.slide--hd` treatment. If it looks weaker than the intro card, it is not done.

**What still legitimately goes to Franz** (judgement, not layout bugs): disputed
technical claims (flag, do not resolve); genuinely ambiguous "which image teaches
this concept best"; and keep-vs-drop calls on borderline slides.

Inputs: the existing slide fragments plus the relevant Source Library documents.
Outputs: revised slide fragments and updated context-pane text where framing or
wording needs fixing; image / diagram references changed where needed; the
day / chapter / module hierarchy untouched.

Depends on: the template library (Stage 3 builds *on* templates, never one-off
HTML for a shape a template covers) and the data-single-sourcing decision.

### Stage 4 — Verify & publish

**Definition adopted 2026-09-12**, after the first real Stage 4 pass (a
verify-and-fix run against the completed Control Valve Basics build) found
seven confirmed, shipped defects `verify.ps1`'s checks at the time could not
have caught: an under-enlarging lightbox, composite images with no per-panel
enlargement, a broken interactive answer-key on four check slides, a factual
error (a rotary valve described with a cage), internal planning language and
placeholder schedule text leaked into student-facing content, and a context
pane rendering empty for a schema-migrated course. Franz's directive was
explicit that this was not a one-off bugfix list but the occasion to define
Stage 4 for real — the checklist below is that definition, not a summary of
one pass. It is additive over time: the next Stage 4 pass that finds a new
class of defect extends this list, the same way this one did.

A course build is not "done" until every check below has actually been run
against it and every finding has been fixed or explicitly accepted (with a
reason recorded, the same discipline Stage 3's pre-send checklist already
uses). "Ran clean last time" does not carry forward across a schema change,
an engine change, or a new authoring pass — re-run the whole checklist.

**A. Automated — structural, via `verify.ps1` (existing)**

- `course.json` is valid JSON.
- Every `keyConcepts` page ref is inside its module's `pages` array.
- Slide-HTML tag balance (`article`, `figure`, `table`, `svg`, `ol`, `ul`,
  `div`) on every changed slide.
- `manifest.js` parses; its titles match the slides' own `<h1>`s.
- CSS brace balance.
- `_engine-lock.json` drift (assembled shared files match the engine source).
- `data-ref` table drift lint (a reference table repeated across slides
  stays identical everywhere it's repeated).
- Headless-Chrome render of every slide (`render-check.mjs`, both 4:3 and
  16:9/embed modes): page loads clean (no console/page errors, no failed
  resource loads), every `<img>` decodes (`naturalWidth > 0`), no visible
  content escapes the `.slide` box (`overflow:hidden`, so an escape is a
  silent clip).

**B. Automated — new, added from the 2026-09-12 pass (not yet folded into
`verify.ps1` as of this writing; run via the standalone scripts in
`40 - Engine/render/` until they are)**

- **In-bounds overlap, not just escape.** Render-check's existing clipping
  check only catches content that escapes the slide box — it does not catch
  two elements that both stay inside the box but overlap each other (e.g. a
  citation or list item visually sitting on top of a figure). Check every
  text-bearing element (`.tpl-source`, `.tmpl-source`, `.tpl-list li`,
  `.tpl-content p`, `.tpl-takeaway`, `.panel-caption`, a filmstrip/reveal
  detail pane) against every image/figure element (`img`, `svg`, `.tpl-fig`,
  `.placeholder-img`) for a real bounding-box intersection, excluding
  elements that are deliberately layered (marker dots, lightbox callouts,
  parse-mode definitions). See `40 - Engine/render/overlap-check.mjs` — run
  it across a spread of viewport widths (not just one), since a template's
  actual failure width is not knowable in advance.
- **Lightbox enlargement.** Click every real figure image open in the
  lightbox and confirm the DISPLAYED size actually fills the lightbox's
  figure box (comparable to the card size), not just the source image's own
  native pixel resolution. A source crop authored with `max-width:100%;
  max-height:100%` (caps, never upscales) instead of `width:100%;
  height:100%` (fills its container) will silently under-enlarge in the
  lightbox even though it looks fine inline — this is a real, confirmed
  failure mode, not a hypothetical one (see `40 - Engine/render/
  lightbox-check.mjs`). The engine-level fix (2026-09-12) already forces
  full-fill on every lightbox image regardless of the source slide's own
  inline style, but a future lightbox change could regress this — re-check
  it, don't just trust the fix stays in place.
- **Composite-image click targets.** Any slide whose figure is several
  source photos/diagrams pre-combined into one flat raster image (a
  filename containing "composite" is the usual tell) loses the ability to
  click into and enlarge one panel on its own — the lightbox's real,
  working per-panel mechanism (`slides.js`, an `<svg>` wrapping multiple
  `<image>` children) only activates for that markup shape, never for a
  flattened PNG. A composite is fine to leave as one flat image ONLY when
  no individual panel inside it needs its own callouts/legible zoom (Style
  Guide Sec 5.9's own carve-out); otherwise it needs converting to the
  SVG-multi-image shape, reusing the individual (pre-composite) crops that
  Stage 3 almost always already saved to `assets/sourced/` alongside the
  composite. Check for this on every composite slide, not just the ones a
  human happens to notice.
- **Check-slide answer-key validity.** For every `.slide--role-check` slide:
  exactly one `<li>` in `.tpl-options` carries `data-correct="true"`, and its
  text is the one the `.tpl-reveal` line actually names. A check slide can
  render perfectly and still be silently broken if `data-correct="true"` is
  missing from every option — every click shows "wrong," with no visible
  sign anything is misconfigured. This is a real, confirmed failure mode
  (four of nine CVB check slides shipped this way) — the reveal text alone
  is not a sufficient check, verify the DOM's `data-correct` marker exists
  and matches.
- **Context-pane population.** Open the real course shell (not just the raw
  slide file) at a real module page and confirm the context pane's key-
  concepts list actually renders non-empty teaching text, not blank
  bullets. This can pass every slide-level render check and still be
  completely broken at the shell level if a schema change (e.g. concept
  text moving into `primitives[]`) outpaces the shell's own rendering code
  — confirmed on CVB, 2026-09-12. Check it against the real `index.html` +
  `course-data.js`, not the slide HTML alone (see
  `40 - Engine/render/ctx-check.mjs`).
- **Placeholder / undetermined-schedule language scan.** Grep every
  student-facing `course.json` string field (`course.summary`, every
  `day.title`/`day.subtitle`, `chapter.summary`, `module.objective`) for
  placeholder markers — "unscheduled", "TBD", "to be determined",
  "undetermined", "placeholder", "no real schedule yet" and similar. A
  course with only one real day should say "Day 1" (or a real theme name,
  per the day-title convention 14101 and IfE already use) plainly, never a
  caveat about the schedule not existing yet.
- **Internal-planning-language scan.** Grep the same student-facing fields
  for language that describes HOW or WHY the course was built rather than
  what it teaches — a stakeholder's name, an internal directive ("Steve's
  requested order"), a reference to the pipeline/Stage machinery itself, a
  scope-negotiation note. This kind of note belongs in an underscore-
  prefixed internal field (`_note`, `_source` — confirmed never rendered by
  `course.js`) or a vault doc, never in `course.summary` or any other field
  the shell actually displays.
- **Missing-citation scan.** Every content slide sourced from real figures
  should carry exactly one `.tpl-source`/`.tmpl-source` citation line (Style
  Guide Sec 5.9) — Module 0 and check slides are the only legitimate
  exceptions (no earmarked source to cite). `grep -L "tpl-source\|tmpl-
  source"` across a course's slides, then confirm each hit is actually a
  Module-0/check slide and not a real gap — three CVB contrast-role slides
  shipped with no citation at all, found this way.

**C. Judgment required — factual/pedagogical, not automatable**

- **Factual-content spot-check against source.** A generation pass can
  produce a fluent, well-templated sentence that is simply wrong — e.g. a
  rotary valve described with a cage (cages are sliding-stem/globe
  construction only; a rotary valve's flow characteristic comes from its
  closure member's own contour). This is not caught by any render check —
  it requires actually knowing the domain and checking the claim against
  the Component Index's own `teaches` field (grounded in the real source)
  or the source document directly. Prioritize checks where two adjacent
  concepts share vocabulary but describe genuinely different hardware
  (sliding-stem vs. rotary is the recurring one in this vault; there may be
  others), and once one instance of a specific conflation is found, grep
  for the same wording across the rest of the course — it is rarely a
  one-off (three instances of the cage/rotary conflation were found this
  way in one pass, not one).
- **Visual layout quality** beyond hard overlap — awkward whitespace, a
  figure crop that reads as too small/too large for its teaching point, a
  template stretched past what its content shape actually fits. Screenshot
  review by a person or a fresh agent with no authoring-pass investment in
  the slide looking "done."

**Round 2 additions (2026-09-13)**, from a manual slide-by-slide walkthrough
of the same CVB build after the first Stage 4 pass and the composite-crop
cleanup. The core principle this round surfaced: **the lightbox's whole job
is a clean, zoomed-in view of one image — anything else appearing inside it
(a source-page artifact baked into the crop, inherited slide metadata, a
caption that wraps) fights the image for the same fixed space.** A caption
in the lightbox, if shown at all, must never wrap past one line and must
never name a figure other than the one on screen.

**D. Automated — new, added from the 2026-09-13 pass**

- **Lightbox content purity.** For a slide with more than one lightbox-
  eligible image (several filmstrip/application-case panes, a composite),
  clicking a panel must never show the WHOLE SLIDE's shared citation — only
  that panel's own caption, or nothing. This was a real, confirmed
  regression: `captionFor()`'s whole-slide-citation fallback was written
  for the single-figure case and had no guard against firing on a
  multi-image slide, so every pane's lightbox silently showed the same
  wrong, multi-figure citation regardless of which pane was actually open
  (six slides shipped this way). Fixed at the engine level (the fallback
  now only fires when there is exactly one lightbox-eligible item on the
  whole slide) and structurally enforced in CSS (`white-space: nowrap` +
  `text-overflow: ellipsis` on `.ew-lightbox-caption` — a caption that
  would have wrapped now visibly truncates instead of silently consuming
  another line of the fixed-height card). See
  `40 - Engine/render/caption-purity-check.mjs` — click every lightbox
  trigger on a slide and confirm each shows a distinct, single-line,
  figure-specific caption (or none), never the same oversized text
  regardless of which panel is open.
- **Table legibility/expandability.** Confirmed general to the template
  set, not one instance: every `.tmpl-table` on both real content-table
  slides in the course used a small `cqw`-relative font size with no way
  to enlarge it, and the lightbox mechanism had never been extended to
  tables at all (`initLightbox` only ever looked for `img`/`svg`). Fixed
  by making every `table.tmpl-table` a lightbox trigger; three real bugs
  surfaced across two rounds of fixing this, each worth naming as its own
  check-worthy failure mode for any future "clone content into the
  lightbox" mechanism:
  1. The clone rendered white-on-white, because `.tmpl-table` cells rely
     on `.slide`'s scoped `color: var(--body-text)`, which a clone living
     outside `.slide` (in the lightbox overlay) never inherits — always
     give a cloned element an explicit color rather than assuming
     inheritance carries over.
  2. A fixed enlarged font-size (the first fix attempt) is NOT the same
     kind of fix that works for an image. An image scales via
     width/height percentages and object-fit — genuinely proportional on
     both axes regardless of box size. A table's height is NOT
     proportional to its width: cloned into a NARROW lightbox card (the
     real embedded-iframe case every course page actually renders in —
     confirmed roughly 650px wide, not the ~1200px a standalone full-page
     view gives it), a fixed-font table's cells wrapped across 2-3 lines
     each, multiplying total height to nearly 4x the box and overflowing
     it by ~800px — completely broken, not just a legibility miss. The
     real fix (`slides.js` `show()`'s `isTable` branch): render the table
     unwrapped (`white-space: nowrap`) at a large base size so its natural
     size reflects real content, measure that with `scrollWidth`/
     `scrollHeight`, then apply a single `transform: scale()` computed as
     `min(boxWidth / naturalWidth, boxHeight / naturalHeight)` — by hand,
     the same "biggest size that still fully fits both axes" behavior
     `object-fit: contain` gives an image for free. Never reach for a
     fixed enlarged size as an "images vs. tables" fix without checking
     whether the content's height is actually independent of its width the
     way an image's is — a table's isn't, and neither is a paragraph of
     wrapping text.
  3. **The methodology gap that let bug 2 ship in the first place:**
     every check on the first attempt (`table-lightbox-check.mjs`,
     screenshots) was run against the STANDALONE slide file at a wide
     viewport, which is not how a student ever actually sees a slide — the
     real course always embeds it in a much narrower iframe inside
     `index.html`. That gap alone hid a completely broken feature through
     an entire round of "verified" fixes. Any check on lightbox/enlarge
     behavior must run through the real embedded shell
     (`index.html#<hash>`, finding the slide's own iframe and testing
     inside it — see `40 - Engine/render/lightbox-containment-check.mjs`)
     — the standalone file is only a valid substitute for content whose
     containment genuinely doesn't depend on box size (a plain image,
     confirmed safe either way).
  See `40 - Engine/render/table-lightbox-check.mjs` (trigger + color/
  font-size sanity, standalone file is fine for this part) and
  `40 - Engine/render/lightbox-containment-check.mjs` (the real
  containment check, through the embedded shell, generalized to any
  lightbox content — image, composite panel, or table — flagging any
  panel whose rendered box extends past its figure box on any edge).
- **Composite-slide click independence, widened.** The check from the
  prior pass (`composite-click-check.mjs`) verifies a slide already
  converted to the per-panel SVG shape actually works — it does not find a
  slide that STILL needs converting. One was missed by the original pass:
  a single source PHOTO printing three named items side by side (not
  several source figures combined into one file by us, which is what the
  original pass's "composite" search — filenames containing `composite` —
  was scoped to) had its own `.tpl-marker` overlay and companion list, but
  was one flat image with no click-through at all. Widen the search: any
  slide with more than one `.tpl-marker` over a SINGLE plain `<img>` is a
  candidate — a marker cluster is usually the tell that several named
  things share one image, whether or not "composite" appears in the
  filename. Confirming which of those genuinely need splitting (vs. a
  marker cluster correctly labelling ONE unified figure, like an assembly
  cutaway) is judgment, not automatable — but finding the candidates to
  check is.

**E. Judgment required — new, added from the 2026-09-13 pass**

- **Lightbox/base-slide crop completeness.** Whether a crop still shows a
  source-page artifact — a page number, the printed caption/label, a
  stray rule line, text cut off mid-sentence from an adjacent paragraph —
  or cuts off content the slide actually needs (a numbered callout hidden
  below the crop's own bottom edge). Neither is detectable from the DOM or
  computed styles; both require actually looking at the rendered image
  (three real instances found this way in one pass: two crops that
  included most of the surrounding page, and one that cropped straight
  through a 14-part callout key, hiding several of its numbers). Re-crop
  from the source PDF page at 300dpi (600dpi if the source photo itself is
  low-resolution enough that text/labels in it are still hard to read at
  300dpi — confirmed to help on at least one real slide) using the
  iterative crop-test-view-adjust method established across both passes;
  if a defect turns out to be genuinely how the source book itself prints
  the page (a truncated label at the printed margin, an intentionally
  irregular photo silhouette), confirm against the actual source page
  before concluding it can't be fixed, and say so explicitly rather than
  leaving it unexplained.

Then, once every check above is clean or every finding is fixed/accepted:
the 16:9 figure-box tuning pass, `course-data.js` regenerated from
`course.json`, README updated.

## Infrastructure prerequisites

### Blocks the pipeline — true before Stage 0 runs on a second course

1. **Engine extracted** to a shared location (see *The blocker*).
2. **Version control.** This working copy is **not a git repository**. Every
   stage lays irreversible hand work over machine output; without git the
   generator trapdoor and every future one stay unrecoverable. ~5 minutes.
3. **Generator guard + hand-owned boundary.** `generate.ps1` refuses to
   overwrite slides that have diverged from their last generated state
   (checksum manifest, or a `PROTECTED` list), `-Force` required to override.
   Plus the written rule: **a chapter is hand-owned once authored; the generator
   only bulk-converts not-yet-touched chapters.** ~half a day. Turns Stage 0
   from a foundation risk into a fenced hazard.

### Needed for Stage 3 to be clean

4. ~~**Data single-sourcing decision.**~~ Resolved 2026-08-30: **lint now, data
   layer as a named stage** (below). `verify.ps1` has a reference-data drift
   lint — every `<table data-ref="…">` is grouped by ref and its normalised cell
   text compared; a ref appearing with different content across files fails the
   check. Every reference table in Chapters 1–2 is tagged
   (`ansi-fci-leakage`, `asme-b1634-a216-wcc`, `easy-e-matrix`,
   `easy-e-piston-seals`, `easy-e-packing`, `flow-characteristics`).
5. ~~**Template library as a real set.**~~ Done 2026-08-30: Chapter 2 slide 27
   converted to `.slide--tmpl-diagram` — a second, independent consumer of the
   same engine component that Chapter 1 slide 14 uses. Rule adopted: a new slide
   shape gets a new template, never one-off HTML.
6. **`data-review` vocabulary → controlled set**, surfaced in `manifest.js` and
   `conversion-report.csv` so the deck runner's review mode and the pipeline's
   own reporting see the same flags. (Still forked.)

### The reference-data layer — a named later stage

Do this *after* the first full course is ported (Ch3 / Ch4 / WS1 authored) so
its scope is known. Reference tables move to a sibling `course-data/*.json` with
a schema; `build-course.ps1` (or a render helper) builds the HTML table from the
JSON so a correction propagates to every slide that shows it. This is the
concrete first step of the [[Roadmap]] Stage 2 "shared source content" goal and
the data source Bench Notes / Bench Book generation will read. Until then the
`data-ref` tags + `verify.ps1` lint keep the copies honest.

### Can follow — cleanup, not blockers

7. Manifest / slide-title drift → regenerate `manifest.js` titles from the slide
   `<h1>`s as a `verify.ps1` step.
8. ~~**Converge Chapter 2**~~ — done 2026-08-31. Its consolidated slides
   (40, 47, 52 and the m4–m7 consolidations) are on the `.slide--tmpl-*`
   templates; the four-part pass absorbed the back-align.
9. ~~**Pull the authoring tiers to one bar**~~ — Day 1 Chapters 1 and 2 are now
   both through Stage 3. Remaining chapters are all in the single "outline →
   Stage 2 → Stage 3" tier.

## Recommended sequence

| # | Action | Effort | Status |
| --- | --- | --- | --- |
| 1 | `git init` + generator guard | ½ day | **done 2026-08-30** |
| 2 | Extract the engine + the 3 de-coupling fixes | 1–2 days | **done 2026-08-30** |
| 3 | Prove Template 2 on Chapter 2 slide 27; decide the data-single-source split | 1 day + a decision | **done 2026-08-30** |
| 4 | `verify.ps1` — validate now; add render checks | 1 day | **done 2026-08-31** — structure checks + headless-Chrome render (section 7, `40 - Engine/render/`), warn-only |
| 5 | Pipeline exists → run "converge Chapter 2", "finish Ch3 / Ch4 / WS1", then port course #2 as the real test | ongoing | |

Steps 1–4 are roughly one week. They are the difference between "we redesigned
one course by hand with Claude's help" and "we have a way to do this."

### Step 2 as built

- Engine at **`40 - Engine/`** (peer to `10 - Courses/`), with `Presentation/`
  mirroring a course's tree so relative paths resolve identically both places.
- **`build-course.ps1`** assembles a course's `Presentation/` from the engine.
  Per-course files untouched; `_engine-lock.json` records what was placed;
  hand-edited targets are skipped without `-Force`; a snapshot precedes any
  first assembly or forced run.
- De-coupling: `slidePrefix` in `course.json` (fallback `code + "-"`); shell
  title + header from `course.json` at runtime; the EMERSON palette in one
  `tokens.css` imported by both stylesheets; `localStorage` keys namespaced
  `ew<code>.*`.
- Generator scripts course-parameterised 2026-08-31 (`-Course`, via
  `generator/_paths.ps1`; section map in `Source Deck/sections.json`). Still
  coupled (deferred): the standalone deck runner's three "14101" strings and the
  `emerson-workbench.css` copyright-year token. Tracked in [[Engine]] "Known
  not-yet-decoupled".

## Open decisions

Mirror into [[Open Questions]] once reviewed.

- ~~**Engine location**~~ — resolved 2026-08-30: `40 - Engine/`, peer to
  `10 - Courses/`; courses assembled from it by `build-course.ps1`.
- **Minor: indefinite article on domain names** — `course-model.js`'s
  `moduleStage2Completeness` builds the message `` `objective should lead
  with a ${m.domain}/${m.levelTarget}-or-below verb` ``, which always uses
  "a" regardless of what follows — reads wrong for a vowel-leading domain
  (`"a engineering/evaluate-or-below verb"` should be "an"). Found 2026-09-17
  during the Domain Voice / Domain-Tier Depth naming consolidation's real
  schema-check verification; pre-existing and unrelated to that rename
  (the same bug already existed for `instrumentation`), left out of scope
  there. Cosmetic only — no functional effect on the check itself.
- **Data layer scope** — which tables / values move to a data layer versus stay
  in HTML behind a lint check.
- **Generator future** — retire it from authored chapters (recommended) versus
  invest in a merge-aware / patch-overlay rebuild. (Parameterisation done; this
  is the deeper question of the one-shot rebuild model. The `PROTECTED.txt`
  guard now covers 14101 Chapters 1–2.)
- **Stage 1 scaffolding** — does the teaching-arc cut get a proposing script, or
  stay fully manual.
- **Bench Notes / Bench Book** — this pipeline covers the *presentation*
  artifact. Where does generation of the instructor / student guides from shared
  source content ([[Roadmap]] Stage 2) attach — a parallel Stage 3', or later.
- **Origination without a deck (Franz, 2026-09-04)** — checked whether
  "convert-or-originate" is one capability or two; it's one, and the
  state-machine gate that made a no-deck project permanently stuck at Stage 0
  is fixed (`PipelineConsole` commit `5ac9c1d`). **Not yet done:** Stage 1's
  and Stage 2's prompts still open with "read every slide in the range" /
  "read its slides for the page numbers listed," unconditionally — they need
  a second mode that cuts a module's scope and drafts its `keyConcepts`
  directly from a named topic + the Source Library / component index, with no
  slide range to read at all. Stage 3's explicit "does not create new slide
  files" rule needs to become "does not create new slide files **when
  converting**" — an origination module's assigned-but-unbacked page numbers
  are exactly what it should author, against the approved master template for
  that concept's Axis C role (see the template-gallery work — this is the
  reason that work matters beyond just fixing layout bugs). Which console
  affordance starts an origination project (a distinct "no deck" action, not
  inferred from an empty Source Deck folder) and how an origination module's
  page numbers get allocated with no deck length to bound them are still
  open.

  **Follow-up (Franz, 2026-09-04, same day):** the two open questions above —
  bounding a module with no page range, and which template Stage 3 authors
  into — may collapse into one: generalize the Component Index. Checked
  against how the ch3 index and Axis C actually work:
  - **Template selection is already solved**, not just plausible: Stage 3's
    existing role→treatment mapping (`teaching-philosophy.md`) already picks
    a caution card for a `caution` concept, a scenario for `application`,
    etc. The only real gap is authoring a new file into that choice, per the
    "does not create new slide files" note above.
  - **The index generalizes deck-scoped → topic-scoped, not course-scoped →
    library-scoped.** The ch3 index's 18 components were found by
    cross-referencing *ch3's existing slides* against source, in full — its
    method is deck-anchored even though its file lives in the Source
    Library. Widening it to a true library-wide index (pre-cataloguing
    everything the Handbook and every Fisher IM contain, independent of any
    request) would reverse `Source Library.md`'s own deliberate "use-driven,
    never pre-index a document wholesale" rule (`Source Grounding — Staging
    Plan.md`: "bounded to what ch3 actually needs"). The right generalization
    keeps that discipline: an origination request's *named topic* is the
    trigger, the same way a chapter's slides are the trigger today — a
    small, request-scoped index built for that topic alone, not a
    library-wide one. See `Source Library.md` "Two ways a component index
    gets triggered."
  - **Building a topic index is real editorial work, not a bounded code
    change** — the same size and character as building ch3's index was (full
    source reads, precedence judgment calls, a Franz review pass), not the
    same category as the state-machine plumbing fix. A trial topic index
    (e.g. "bench-setting a Fisher 657") is the natural next step to prove
    this shape for real.

    **Correction (Franz, same day):** this does *not* stay paused under the
    full stop. It's research, source cross-referencing, and tagging — no
    generation into any template, so it doesn't touch the risk the full stop
    exists to gate. It can and should run in parallel with the template
    proof below, not after it.

    **Trial done, accepted (Franz, 2026-09-06):**
    `20 - Source Library/Component Index — bench-set-657.md` — built cold
    2026-09-04, compared against the ch3 index. Accepted as the trial
    result. Its one shortcut (carrying over ch3's archive-review verdict for
    D750004/D750066 rather than re-reading the same Franz-confirmed pages)
    is defensible, not missing rigor. **Core finding, actionable for sizing
    future origination requests:** a topic-driven scope comes out
    *finer-grained* than a deck-cut module — "bench-setting a 657" naturally
    excludes the casing-torque and disassembly content that ch3-m2/m3
    bundle in, because those sit in the IM's *Maintenance* section, not its
    bench-set procedure. Scope an origination request at roughly
    single-concern granularity, not to match an existing module's breadth.

    **Standing guidance for the NEXT topic index — Axis C as a
    component-type checklist (Franz, 2026-09-06):** the trial drew scope
    purely by editorial judgement + whatever was easy to find in source.
    The next one adds a structural pass: decompose the topic into its spine
    of teaching steps (from the current source's own procedure sequencing),
    then for **each step** walk the Axis C role vocabulary and ask
    explicitly — does this step need a `nomenclature` artifact? a
    `mechanism` one? a `procedure`, `application`, `contrast`, `caution`,
    `check`? Each "yes" with no matching component is a gap to index, even
    if nothing in the source jumps out. This catches load-bearing artifacts
    a "read the source and cut the scope" pass misses — the way the trial
    only found the glossary definition and the friction-measurement
    procedure by reading whole sections rather than jumping to cited
    figures. It is a retrofit requirement on nothing already built; it is
    how the next topic index is scoped.

    **Still open, correctly gated:** whether a topic index *holds up when
    consumed* — a real Stage 2 authoring pass finding it complete with no
    `sourceNote` fallbacks, the way ch3's index proved itself — cannot be
    tested until origination-mode Stage 1/2 prompts exist. That waits on
    the template proof, not forced now.

  **The gate on Stage 3 authoring, stated explicitly (Franz, 2026-09-04):**
  building the capability itself — Stage 3 writing *fresh* content into a
  chosen master template, the actual unlock for real origination — does not
  start until the 16-example template proof (2 real ch3 examples per Axis C
  role, rendered and reviewed) has landed and passed review. Reasoning
  carried over directly from the ch3-m4 failure: new generation logic
  writing into a frame is the same shape of risk whether the frame is a
  freehand slide or an unproven template — validate the 11 templates against
  real content first, then build authoring logic with confidence in what
  it's writing into, not on faith that it's probably fine. Concretely, until
  the proof lands: no design, prototyping, or implementation of the Stage 3
  authoring capability itself. Explicitly **not** gated by this: the topic-
  index trial (above); and design *discussion* / architecture docs about how
  Stage 3 authoring should eventually work, which can continue — only
  actually building and firing that capability is blocked. The template
  proof is now the single highest-priority piece of work for two reasons at
  once: it's what the original full stop already required, and it's what
  unlocks this.

## Related

[[Roadmap]] · [[Open Questions]] · [[teaching-philosophy]] · [[14101 Presentation]] ·
[[Source Library]] · `Presentation/build/README.md` ·
`Presentation/course/README.md` · `Presentation/build/css/TEMPLATES.md`
