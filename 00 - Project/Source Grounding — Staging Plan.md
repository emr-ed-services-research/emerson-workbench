---
title: Source Grounding — Staging Plan
type: plan
status: staging
tags:
  - project
  - pipeline
  - source-library
  - transient
updated: 2026-09-02
---

# Source Grounding — Staging Plan

> [!warning] This is a temporary staging document — it will be retired
> This captures a plan that is **being built now** and will be **absorbed into
> the permanent references** once it is real: the mechanism into
> [[Course Porting Pipeline]] and [[System Architecture]] / [[System Map]], the
> sequencing into [[Roadmap]]. It is **not** a fourth long-lived companion doc.
> When steps 1–4 below are done and folded into those docs, delete this file.
> Franz approved the plan and this staging approach on 2026-09-02.

Companion context only: this file is the sole written record of two
architectural self-assessments done in session on 2026-09-02 (trust /
auto-advance, and source grounding). Their durable conclusions graduate into the
permanent docs alongside the plan.

---

## 1. The problem

Stage 3 sometimes generates a diagram from scratch when the Source Library
already holds strong, relevant material. This is not a QA gap — catching a bad
generated diagram after the fact only limits damage. The cause is upstream:

- Every other kind of pipeline state is **structured and carried forward** —
  Stage 1 writes module boundaries into `course.json`, Stage 2 writes
  `keyConcepts` with slide-page refs, Stage 3 reads both.
- **Source linkage is the one kind of state that does not persist.** Stage 1's
  prompt never opens the Source Library. Stage 2 reads it at catalogue level and
  records nothing durable. Stage 3 is told to "search source material for a
  cleaner existing version first" — then does that search **cold, at the last
  stage, under the least context, with no memory of what any earlier run found**,
  and with the historical archive not even named in its instructions.
- Proof it is real: the first `ch3-m1` Stage 3 pass hand-cropped deck line-art
  that "could not be force-labelled with confidence"; only the human-flagged
  rework sent the agent into the archive, where it found Fisher figure W0451-1
  in **D750020** — a better, correctly-labelled diagram that was there all along.

The fix is to give source material the same treatment every other input gets: a
persistent, structured, precedence-resolved artifact that stages **reference**
instead of rediscovering.

---

## 2. The approved plan (ordered — do not reorder)

1. **Precedence pass first.** Resolve current-vs-archive precedence into four
   buckets: `current`, `archive-corroborated`, `archive-only` (caution-flagged),
   `superseded` (excluded from retrieval). **Human-checked, not decided live by
   an agent** — it determines what is even eligible for the index. §3 below is
   the drafted groundwork awaiting Franz's check.
2. **Teaching-component index, scoped to ch3 only.** Extend the pattern
   `build/assets/sourced/SOURCES.txt` already does well, to cover ch3's actual
   footprint (§4 — estimated ~16 diagram components). **Do not** digitise or
   index the full archive.
3. **Stage 2 enrichment — two tagging axes** (§5). Once the ch3 index exists,
   wire Stage 2 to tag each `keyConcept` with (A) `sources: [component-id, …]`
   from the index, so Stage 3 reads from it instead of searching cold ("no
   component fits" becomes a **logged decision**, not a silent fall-back to new
   art); and (B) an instructional-design classification — Bloom's cognitive
   `level` per concept + a `domain` verb set per module — so objective-writing
   is consistent and Stage 3 pitches each slide's treatment to the right kind of
   learning. Added as one build pass (Franz, 2026-09-02).
4. **QA layering — only after 1–3 are real.** The three mechanisms from the
   source-grounding assessment (§5, Step 4).

Scope discipline throughout: bounded to what ch3 (and 1400 generally) actually
needs. Expand later, deliberately, once proven on real content.

---

## 3. Step 1 — Precedence pass

**Status (2026-09-03):** Steps 1–2 done; step 3 mechanism wired.
- **Step 1–2:** precedence confirmed; component index built
  (`20 - Source Library/Component Index — 1400 ch3.md`, 18 components + a
  procedure-photo group + a proposed concept→component+level map).
- **Step 3 (wiring):** the console now reads the index and the ID tags —
  `src/main/instructional-design.js` (verb menus + Bloom levels, mirrors
  `teaching-philosophy.md`), `course-model.js` (parses `domain` / `levelTarget` /
  concept `level` + `sources`; `moduleStage2Completeness(m, {strict})` gains the
  A- and B-axis checks), `prompts.js` (Stage 2 authors both axes; Stage 3 gets a
  per-slide concept map with levels + earmarked component ids), `stage-runners.js`
  (passes `domain` / `concepts` / `componentIndex` through). 78 tests green.
- **ch3 tagged for real via a live Stage 2 re-author** (2026-09-03, Agent SDK,
  62 turns / $1.55 / ~6 min). `runStage2` gained a `force` option that
  re-authors already-authored modules with an *annotate-only* prompt (objective
  + keyConcept wording preserved verbatim). All 6 ch3 modules now carry
  `domain` (chapter, inherited) / `levelTarget` / per-concept `level` +
  `sources`; the agent's assignments matched the curated map one-for-one; no
  `sourceNote` fallbacks. `moduleStage2Completeness` strict → all 6 complete.
  `verify.ps1` (ch3-scoped) 0 FAIL. Project store: ch3 Stage 2 → `flagged`
  (awaiting review of the tags); Stage 3 state untouched.
- **Agent flagged two pre-existing wording items.** (1) ch3-m1 concept 4
  `pages: [93]` → **retagged to `[89]`** (Franz, 2026-09-03). (2) ch3-m3
  concept 4's quantitative friction claim is not shown on its slides — left as
  authored (consistent with CVH §5.11/§8.5.5; wording was pre-approved).
- **Still to do:** the redraw queue (Stage 3) — bench-set graph (92/97/112),
  deadband graph (125), PDTC/PDTO bodies (93), casing-torque pattern (107/124),
  plus slide 112's leftover deck textbox (new verify warning).

### Decisions received (Franz, 2026-09-02)

1. Four-bucket framework (`current` / `archive-corroborated` / `superseded` /
   `legacy`) — **approved as proposed.**
2. Exclude D750004 + D750066 from ch3 retrieval — **approved**, on the stated
   rationale that the current Fisher 657/667 manuals cover the same actuators.
   **→ the full review below found no conflicts and materially better teaching
   diagrams in D750004; recommend revisiting this. See "Full archive review".**
3. Bench-set graph — do the real visual comparison (CVH §8, Fisher Fig 4/5)
   before deciding. **Done — recommendation below.**
4. Archive PDFs — render and review all three ch3 archive docs in full, not
   spot-checks. **Done — findings below.**

### Source documents in play for ch3

| Source | Tier | Currency | What it covers for ch3 |
| --- | --- | --- | --- |
| **Control Valve Handbook, 6th ed.** (D101881X012, Aug 2023) | current / primary | current | deadband concept & causes (§2.1.1), friction (§2.1.1.4), actuator types (§3.2), valve/actuator force categories (§5.x), fail-safe action |
| **Fisher 657 Instruction Manual** (D100306X012, Jun 2018) | current / primary | current | 657 operating schematic (Fig 2), mounting components (Fig 3), bench-set adjustment (Fig 4), deadband response (Fig 5), full assembly + parts (Figs 6–10), casing torque (Table 2, 27 N·m / 20 lbf·ft) |
| **Fisher 667 Instruction Manual** (D100310X012, May 2018) | current / primary | current | 667 operating schematic (Fig 2), seal-bushing / stem O-rings, mounting components (Fig 3), bench-set adjustment (Fig 4), friction + deadband measurement, assembly + parts (Figs 6–10), casing torque (Table 2) |
| **Legacy 1400 PowerPoint deck** (`build/slides/**/img/imageNNN.png`) | legacy / uncredited | mixed — Fisher-origin art, often superseded by the current manuals | most ch3 procedure photos + some diagrams currently in the slides |
| **Archive D750004** — *Pneumatic Spring-and-Diaphragm Actuators* (Fisher Ed. Services student guide, ~1990s scan) | archive · reviewed in full, **no conflicts** | historical but corroborated | purpose-built teaching diagrams for direct/reverse acting, PDTC/PDTO fail modes, actuator forces, static balance, bench set (pp 5, 7, 13, 15, 17, 19) |
| **Archive D750020** — *Actuator Sizing for Sliding-Stem Control Valves* (~1990s scan) | archive · reviewed in full, **no conflicts** | historical but corroborated | valve-force cutaway with A/B/C/D callouts (in use, slide 91); valve-plug-unbalance diagrams; sizing method (redundant with CVH §5.11) |
| **Archive D750066** — *Maintaining Spring-and-Diaphragm Actuators* (~1990s scan) | archive · reviewed in full, **no conflicts** | historical; actuator content corroborated, positioner content dated | 657/667-class disassembly/assembly/inspection procedures (consistent with current); analog-positioner sections are superseded but out of ch3 scope |

### Full archive review — findings (all three docs, every page)

All three archive docs are **Fisher Educational Services student guides**,
mid-1990s vintage (3–15 psi era, W-numbered figures), scanned. Reviewed page by
page against CVH 6th ed. and the current Fisher 657/667 instruction manuals.

**No conflicts were found in any of the three.** Terminology (PDTC/PDTO,
direct/reverse acting, static unbalance, A/B/C/D forces, bench set), fail-mode
logic, the force framework, and the bench-set definition all match the current
sources exactly. Where numbers overlap they agree — D750066 gives "a common
guideline is 20 foot-pounds" for the diaphragm-casing bolts; the current Fisher
manual Table 2 says 20 lbf·ft / 27 N·m. D750066 **explicitly defers** to the
instruction manual for specifics ("specific torque values are given by
manufacturers… always consult specific product instruction manuals"): the
archive teaches concepts, the manual gives the numbers, and they do not compete.

| Doc | ch3 value | Verdict |
| --- | --- | --- |
| **D750004** *Pneumatic Spring-and-Diaphragm Actuators* (30 pp) | Purpose-built teaching diagrams better than the instruction-manual parts diagrams for the **conceptual** slides: p5 Direct-Acting Actuator (schematic + labelled cutaway + PDTC/PDTO application cutaways with fail modes), p7 Reverse-Acting Actuator (matched pair, STEM SEAL called out), p13 Actuator Forces schematic, p15 globe-valve force cutaway (W0451-1 — the figure already on slide 91), p17 Static Actuator Balance (paired direct/reverse), p19 Bench Set Illustrated (segmented pressure scale, Fi/Fs/F_CVR). | **archive-corroborated** — recommend indexing pp 5, 7, 13, 15, 17, 19 for ch3-m1. Not `superseded`. |
| **D750020** *Actuator Sizing for Sliding-Stem Control Valves* (36 pp) | Same force framework as CVH §5.11. The W0451-1 cutaway (p5, same figure as D750004 p15), Valve Plug Unbalance diagrams (p7), "Safety and Operational Checks" annotated cutaway (p39). Mostly redundant with CVH §5.11 for ch3; the cutaway is the value. | **archive-corroborated** (as already proposed). |
| **D750066** *Maintaining Spring-and-Diaphragm Actuators* (28 pp) | Same direct/reverse schematics as D750004. Disassembly photo-sequence (relieve spring compression → casing → diaphragm plate → spring → stem seals) and bench-set check photos — consistent with current procedure. **Dated hardware:** the positioner sections (pp 8–9, 32–33) show analog flapper-nozzle positioners, superseded by digital valve controllers — **but positioners are a Day-3 course, not ch3**, so this does not affect ch3 retrieval. | **archive-corroborated** for its ch3-relevant actuator content. Not `superseded`. |

**Recommended revision to decision 2:** treat D750004 and D750020 as
`archive-corroborated` **and index the specific ch3 pages above**, rather than
excluding them. D750066's actuator content is corroborated too but adds little
beyond D750004 for ch3; its positioner content stays out of scope. Nothing in
any of the three needs a `superseded` flag for ch3 — there were no conflicts to
protect against, which is the thing a full review (not a spot-check) was needed
to establish.

*Vault data note:* the D750066 folder is actually named
`D750066 Maintaining Spring-and-Diaphragm Actuators` (hyphenated); the catalogue
`Historic Educational Services Training Content.md` and links refer to it without
the hyphens.

### Bench-set graph — recommendation (slides 92, 97, 112; related: 125)

**Visual comparison done.**

- **CVH Fig 8.10 "Bench Set Seating Force"** (travel-vs-pressure): overlays three
  lines — friction-free ideal, bench set, bench set + deadband — with a deadband
  bracket. **Deadband-centric**; footnoted "actuator connected to valve, deadband
  present". Dense; bundles bench set and deadband into one figure.
- **Fisher 657 / 667 IM Figure 5 "Typical Valve Response to Deadband"**
  (identical drawing A6763-2 in both manuals; pressure-vs-travel): **two panels —
  DIRECT ACTING VALVE and REVERSE ACTING VALVE** — each with the bench-set
  centreline, opening/closing curves, a "RANGE OF DEADBAND" bracket, upper/lower
  bench-set pressure marks, and the note "deadband is caused by friction".
  Clean, purpose-built as a teaching graphic, **already split by action** —
  exactly ch3's framing.
- **Fisher Fig 4 "Bench Set Adjustment"**: a physical setup diagram, not a graph
  — feeds component #15 (travel-measure setup), not this.
- **D750004 p19 "Bench Set Illustrated"**: a segmented pressure-scale
  (Fi / Fs / F_CVR decomposition), direct + reverse — a useful *complementary*
  framing for keyConcept 6, not a travel/pressure graph.

**Current slide state:** only **slide 92** has a real hand-authored SVG (clean,
~40 lines, single friction-free bench-set line, cited "after CVH Fig 8.10").
Slides **97 and 112** carry ~110 KB machine-traced path-soup SVGs
auto-vectorised from the deck — placeholders, not Stage 3 work (ch3-m2 and
ch3-m4 have not been through Stage 3). Slide **125** similarly.

**Recommendation:** index **Fisher 657/667 IM Figure 5** as the canonical
reference for the bench-set / deadband graph, with **CVH Fig 8.10** as the
corroborating cross-reference. **Keep the delivery format a house-style
hand-authored SVG redraw** — the Fisher figure is a low-res 1990s scan that
would clash with the Workbench design system, so a redraw is justified — but the
redraw is now *specified against a named current figure*, not invented from
scratch. Per-slide variants:

| Slide | Module | Variant |
| --- | --- | --- |
| 92 | ch3-m1 (generic, friction-free) | bench-set centreline **only** — no opening/closing curves, no deadband bracket. Keep the existing SVG; re-anchor its citation to "after Fisher 657/667 IM Fig 5 / CVH Fig 8.10". |
| 97 | ch3-m2 "…Direct Action" | redraw of Fig 5 **DIRECT ACTING VALVE panel**; friction-free framing (m2 is off-the-valve) so the deadband bracket is faint or omitted. Replaces the auto-trace. |
| 112 | ch3-m4 "…Reverse Acting" | redraw of Fig 5 **REVERSE ACTING VALVE panel**. Replaces the auto-trace. |
| 125 | ch3-m6 "Deadband" | **full** Fig 5 — bench-set line + opening/closing curves + "range of deadband" bracket + "deadband is caused by friction". Replaces the auto-trace + deck image197. |

Coherent chapter-wide progression: friction-free bench-set line (92) → per-action
(97, 112) → friction adds deadband (125), all anchored to one current Fisher
figure that already splits direct/reverse.

### Open for Franz

- Confirm the revised buckets: **D750004 and D750020 → `archive-corroborated`
  and indexed** (pp listed above), D750066 → `archive-corroborated` but not
  separately indexed for ch3, nothing `superseded`.
- Confirm the bench-set-graph recommendation (Fisher Fig 5 as canonical
  reference; house-style redraw as delivery; the four per-slide variants).

---

## 4. Step 2 — Teaching-component index, ch3 — **BUILT**

`20 - Source Library/Component Index — 1400 ch3.md` (2026-09-03). 18 discrete
components (est. was ~16) grouped by module, plus a procedure-photo catch-all.
The table below was the planning inventory; the index file is now authoritative.
Diagram/figure components where **source-grounding vs. invention is the live
question**:

| # | Component | Slides | Candidate source |
| --- | --- | --- | --- |
| 1 | Direct-acting actuator operating schematic (657) | 88, 95 | Fisher 657 Fig 2 |
| 2 | Reverse-acting actuator operating schematic (667) | 88, 110 | Fisher 667 Fig 2 |
| 3 | Fail-mode matrix: actuator action × body orientation → fail open/closed | 89 | `sourced/fail-mode-spring-schematics.png` (deck OLE, done) + CVH fail-safe |
| 4 | 4-up spring schematics (DA/RA × PDTC/PDTO) | 89 | same sourced asset |
| 5 | PDTC vs PDTO body cutaway comparison | 93 | deck image42/43 (legacy) — candidate CVH §1.2/§3.1.1 replacement |
| 6 | Valve-forces cutaway, A/B/C/D callouts | 91 | `sourced/globe-valve-forces-cutaway.png` (archive D750020, corroborated — done) |
| 7 | Bench-set graph (friction-free line; per-action for 97/112) | 92, 97, 112 | **Fisher 657/667 IM Fig 5** (canonical ref) + CVH Fig 8.10 (corrob.); house-style SVG redraw per §3 recommendation |
| 8 | Deadband graph (bench-set line + opening/closing curves + bracket) | 125 | **Fisher 657/667 IM Fig 5** — full version, both panels |
| 9 | Deadband effect-on-control chart | ch3-m6 context | CVH Figure 2.3 |
| 10 | 657 construction / exploded assembly | 94 | Fisher 657 Fig 2 / Figs 6–10 |
| 11 | 667 construction + seal-bushing / two-O-ring detail | 109, 121 | Fisher 667 Fig 2 / Figs 6–10 |
| 12 | Nameplate example (type, size, bench-set range, rated travel, stem dia) | 96, 111 | deck image157 (legacy) or Fisher nameplate section |
| 13 | Stem-connector thread-engagement detail (≥ 1 stem dia) | 103, 118 | deck image166/167 (legacy) or Fisher 657 Fig 3 / 667 stem-connector section |
| 14 | Diaphragm-casing bolt torque pattern (4 @ 90° then criss-cross, 2 rounds) | 107, 124 | Fisher 657/667 Table 2 + star-pattern figure |
| 15 | Bench-set adjustment / travel-measure setup | 98, 99, 114 | Fisher 657 Fig 4 / 667 Fig 4 "Bench Set Adjustment" |
| 16 | Actuator-on-valve mounting components | 101, 115, 116 | Fisher 657 Fig 3 / 667 Fig 3 "Actuator-Mounting Components" |

Procedure photos (legacy deck, low invention-risk, **lower index priority**):
hoisting the actuator, running the yoke locknut with hammer + blunt chisel,
marking the stem, screwdriver travel method, spring drop-out, snap-ring removal,
diaphragm change-out.

### Index record shape (extends `SOURCES.txt`)

Today's `SOURCES.txt` is per-course, output-side, prose. The index is the
input-side, structured version. One record per component:

```
id:                 ch3-cmp-<slug>            e.g. ch3-cmp-657-schematic
concept-tags:        [<phrases from the keyConcept vocabulary>]
teaches:             <one line — what a learner sees in this component>
status:              current | archive-corroborated | archive-only | superseded | legacy
source:
  doc:               <title, doc number, edition/date>
  locator:           <figure number / page / region>
current-equivalent:  <for superseded/legacy: the winning id or reference>
extraction:          <crop notes once pulled — mirrors today's SOURCES.txt prose>
used-by:             [<slide numbers>]        # back-reference, filled as Stage 3 consumes it
```

Lives at `20 - Source Library/Component Index — ch3.md` for now (human-readable).
A console-parseable form (`.json`, kept in sync like `System Map.md` / `.html`)
is added when step 3 wires Stage 2 to read it.

---

## 5. Step 3 — Stage 2 enrichment (two tagging axes) · Step 4 — QA (after 1–2)

Stage 2 gains **two** structured tagging axes, authored alongside the existing
objective + key-concepts. Both are added in the same build pass (Franz,
2026-09-02 — folded in as scope, not a separate project).

### Axis A — source-component earmarking

- `buildStage2Prompt`: read `Component Index — ch3.md`; for each `keyConcept` add
  `sources: [component-id, …]`; if none fits, record an explicit "no component"
  note.
- `moduleStage2Completeness`: optionally require every concept to carry ≥ 1
  `source` or the explicit no-component note.
- `buildStage3Prompt`: per slide, resolve the concepts' `sources` to components
  and instruct "use these; new art is a logged fall-back, reported in the
  To-Franz list."

### Axis B — instructional-design tagging (Bloom's + domain verb set)

Beyond *what source supports a concept*, tag *what kind of learning it is trying
to produce*. Two parts:

**B1 · Cognitive level — Bloom's revised taxonomy.** Each `keyConcept` gets a
`level`: `remember | understand | apply | analyze | evaluate | create`. A module
gets a `levelTarget` = the highest level it teaches to. Rough mapping:
introductory/recognition content sits at remember–understand; hands-on
reinforcement at apply–analyze; assessment / judgement content (e.g. a
check-your-knowledge slide that asks the learner to *choose* a correct assembly)
at evaluate–create.

**B2 · Domain verb set.** The natural action verbs differ by the *kind* of
training, not just the cognitive level. A module gets a `domain` tag; the domain
supplies the verb set the objective and concepts should be written from:

Three domains (a concept-only module is just its domain at `remember`/
`understand` — no separate `theory` domain). Full verb menus by Bloom level
live in `teaching-philosophy.md` "Instructional-design tags"; starters:

| Domain | Verb set (starter) |
| --- | --- |
| `maintenance` (hands-on valve/actuator work) | identify, describe, disassemble, assemble, install, mount, replace, torque, lap, mark, inspect, diagnose, verify, determine |
| `instrumentation` (controls / positioners / DVCs) | identify, explain, mount, wire, configure, range, zero, span, calibrate, interpret, diagnose, verify |
| `selection-sizing` | recall, explain, calculate, size, compare, select, specify, justify |

`domain` is a **chapter-level** setting (ch3 = `maintenance`), overridable per
module. It lives in `teaching-philosophy.md` (a pedagogical framework, reusable
across every course — **not** a new standalone doc). ch3-m1 is `maintenance` /
`levelTarget: evaluate` (objective "Determine…", and the CYK asks the learner to
choose a working assembly).

**How B feeds the pipeline:**

- **Objective consistency (Franz's stated goal):** the module objective is
  written with a verb from its `domain` set at its `levelTarget`.
  `moduleStage2Completeness` can lint that the objective's main verb is in the
  declared set.
- **Stage 3 targeting:** `buildStage3Prompt` gets each slide's concept levels —
  "slide N teaches at `understand`: support recognition and explanation, not a
  step-by-step procedure"; an `apply` slide may carry a procedure; an `evaluate`
  slide poses a judgement. Prevents an introductory slide being written with
  advanced-analysis framing and vice-versa.
- **Interaction with Axis A:** a `remember`/`understand` concept is usually well
  served by an existing labelled diagram (recognition); an `apply`/`analyze`
  concept more often needs a decision aid or annotated procedure that may need
  composition. The two axes together sharpen Stage 3's "use existing vs compose"
  call.

**Data shape (added to each module in `course.json`):**

```jsonc
{
  "id": "ch3-m1",
  "domain": "maintenance",         // chapter-level; module overrides only if different
  "levelTarget": "evaluate",
  "keyConcepts": [
    { "t": "...", "pages": [88], "sources": ["ch3-cmp-657-schematic"], "level": "understand" }
  ]
}
```

### Axis C — instructional-composition (concept `role` + module `stakes` / `buildsOn`)

A third tagging axis, from the **instructional-method review**
(`00 - Project/Instructional-Method Review — ch3.md`, 2026-09-03 — compared the
ch3 archive method, the Workshop template, and modern online ID practice).
Its two-part endpoint:

- **Part 1 — adopt:** per-concept `role` (a closed vocabulary — `prime`,
  `nomenclature`, `mechanism`, `procedure`, `application`, `contrast`,
  `caution`, `check` — that tells Stage 3 how to *frame* a slide, orthogonal to
  Bloom `level`); module `stakes` (one-sentence on-the-job consequence, shown on
  the intro card); module `buildsOn` (faded-repeat / prerequisite module ids).
  Plus Stage 3 process rules (soft module sequence; a formative check before the
  summative CYK; transfer-level CYK stems for apply+ modules; terser faded
  modules) and one new slide template (`.slide--tmpl-caution`).
- **Part 2 — Workshop verdict: HOLD.** No finding needs a change to the
  canvas / pane / nav shape; the one true container-gap (continuous prose) is
  already delegated to the Bench Book. Reasoning recorded in the review, to
  graduate into [[System Architecture]] Layer 2 so it is not re-litigated.

Axis C ships in the same build pass as Axes A/B where ch3 has not been authored
yet; for ch3 (already tagged for A/B) it is another `force` re-author.

### Step 4 — QA mechanisms (from the source-grounding assessment)

1. **Machine geometry checks** in `render-check.mjs`, promoted to blocking for
   Stage-3-touched slides: text-wrap overflow (`scrollWidth > clientWidth`,
   orphan last line, > N lines in a caption); **sibling-box collision — two
   visible non-nested elements whose boxes overlap by > N px** (this is the one
   that would have caught the slide-98 figcaption/note overlap on 2026-09-04 —
   the current check only sees content escaping the `.slide` box, not overlap
   *inside* it; make this one first); empty region (content box < X% of its
   cell); aspect-ratio mismatch across a figure row; computed font-size below a
   legibility floor.
2. **Provenance checks**: a new `build/assets/sourced/*.png` referenced by a
   changed slide with no `SOURCES.txt` line → FAIL; a new inline `<svg>` where
   the prior version had `<img src="…/sourced/…">` → flag "sourced art replaced
   with a hand drawing"; an earmarked component that the slide neither uses nor
   cites → flag.
3. **Second-agent rubric review**: a fresh-context headless agent gets
   before/after HTML + screenshots + the module objective + the earmarked
   components, and answers a fixed rubric — does each figure match the concept at
   its step; is any on-slide claim unsupported by the cited component; was a
   diagram invented where an earmarked component existed. Structured findings
   populate the flag rack before a human sees the batch.

---

## 6. Graduation checklist (when this file retires)

- [x] §3 precedence buckets confirmed by Franz (2026-09-02).
- [x] Bench-set-graph decision confirmed (Fisher IM Fig 5 canonical). The four
      slide variants (92/97/112/125) still to be built by Stage 3.
- [x] `20 - Source Library/Component Index — 1400 ch3.md` built.
- [x] Step 3 mechanism wired in the console (`instructional-design.js`,
      `course-model.js`, `prompts.js`, `stage-runners.js`); 78 tests green.
- [x] `teaching-philosophy.md` "Instructional-design tags" section written.
- [x] ch3 fully tagged in `course.json` — `domain` / `levelTarget` /
      per-concept `level` + `sources` — via a live Stage 2 re-author
      (2026-09-03).
- [x] ch3 Stage 2 module review **approved by Franz** (all 6, 2026-09-03);
      Stage 2 → closed. Retag applied: ch3-m1 concept 4 `pages` 93 → 89.
- [x] **Axis A + B** shipped: `sources` / `sourceNote`, chapter `domain`,
      module `levelTarget`, per-concept `level`; verb menus + Bloom mapping in
      [[teaching-philosophy]]; objective-verb + strict lint in
      `moduleStage2Completeness`; noted in [[Course Porting Pipeline]] Stage 2.
- [x] **Axis C** mechanism shipped (2026-09-03): concept `role` (8-value vocab)
      + module `stakes` / `buildsOn`; `instructional-design.js` `CONCEPT_ROLES`;
      strict lint (unknown role blocks, missing prime/check advisory); Stage 2 /
      Stage 3 prompts; **Template 6 `.slide--tmpl-caution`** in the engine CSS +
      `TEMPLATES.md`, course rebuilt; [[teaching-philosophy]] "Axis 3"; 81 tests.
- [x] ch3 Axis C `force` re-author done (2026-09-03, $1.49); **all 6 modules
      approved by Franz** (stakes, buildsOn, role calls incl. the two debatable
      ones — no changes); Stage 2 closed.
- [x] **ch3-m1 Stage 3 full re-fire** (2026-09-03, $1.66). 0 FAIL, machine-green.
      All 5 open flags addressed; slide 92 graph re-anchored to Fisher IM Fig 5;
      slide 90 CYK → scenario. **Franz approved all 6 slides**; `pages`
      reordered `[88, 93, 89, 91, 92]`; Stage 3 → closed.
- [x] **ch3-m2 Stage 3** (2026-09-04, $2.45) — first *fresh* module through the
      full pipeline. Axis C sequence applied (nomenclature 94/96 → mechanism 97 →
      procedure 98/99 → check 100); `buildsOn: [ch3-m1]` respected (no re-draw of
      the direct-acting schematic); **Template 6 caution card — first use** on
      slide 95; slide-97 bench-graph consistent with slide 92; CYK 100 →
      scenario. **1 machine finding:** slide 94 `.tmpl-fig` clips 37px in 16:9
      (`.is-wide` + tall sectional) → geometry rework. 2 new sourced crops + 2
      inline-SVG redraws logged (nameplate SVG on 96 is generated art). To-Franz:
      98/99 want consolidating; confirm slide-96 nameplate values; slides 92 & 97
      carry similar bench-set graphs by index design.
- [x] **ch3-m2 Stage 3 rework** (2026-09-04, $1.22) per Franz's calls: slide 94
      clipping fixed (markers verified against Fisher 657 IM Fig 6 — order was
      correct); slide 96 OPER RANGE `0–18` → `3–15 psig`, marked EXAMPLE (values
      checked against 657 IM Table 1); slides 98+99 consolidated into one
      "Bench Set — Off the Valve" step-1/step-2 slide, 99 kept as a
      `data-review="ch3-m2-consolidated"` stub. `course.json` — ch3-m2 `pages`
      → `[94,95,96,97,98]`, concept 6 `pages` `[98,99]` → `[98]`. `verify.ps1`
      0 FAIL, 0 render warnings. **Template gap found:** `.slide--tmpl-figrow`
      with portrait images + 2-line figcaptions + a `.tmpl-note` overlaps — the
      render check misses it (interior sibling overlap, not slide-box escape);
      hand-fixed slide 98 (capped image height, tightened captions). This is the
      "sibling-box collision" QA check in §4 — bumped to first priority.
- [x] ch3-m2 Stage 3 accepted (Franz moved on), Stage 3 → closed.
- [~] **ch3-m3 Stage 3** (Mount & Service, `buildsOn: [ch3-m2]`, one `caution`
      concept on slide 105) — the console's agent run **crashed on the Claude
      session limit** before the after-render/screenshot/review-capture phase
      (2026-09-04); the console recorded Stage 3 as `failed` with no m3 review
      entry, but the editorial pass had already completed on all 8 slides.
      Verified by hand: `verify.ps1` 0 FAIL, render-check 0 warn (8 slides).
      Reviewed against screenshots: 105/106/108 clean; **101 and 103 have a
      `.tmpl-note`/figcaption overlap** (the same bug hand-patched on ch3-m2's
      slide 98 — recurring because that fix was a one-off patch, not the
      template; this is the "sibling-box collision" QA check, still §4
      priority 1); **102's graph has a label collision** ("on the valve" vs
      "upper bench set"). Franz's calls: **keep slides 95 and 105 separate**
      (different modules, 105 owns the bypass/vent/relieve sequence); **both
      proposed consolidations approved** (102+104, 106+107 — 104/107 kept as
      `data-review="ch3-m3-consolidated"` stubs). `course.json` ch3-m3 `pages`
      → `[101,102,103,105,106]`, concept 4 `pages` `[102,104]`→`[102]`, concept
      6 `pages` `[106,107]`→`[106]`; `course-data.js` regenerated; re-verified
      0 FAIL. **Rework fired and closed** (2026-09-04, headless Agent SDK,
      56 turns, $2.01): root-caused the `.tmpl-note`/figcaption overlap to
      `.slide--tmpl-figrow`'s CSS (row/note pinned to constant `bottom:`
      offsets, sized for a one-line note) and fixed it **at the template
      level** — `:has(> .tmpl-note)` lays a plain figrow + trailing note out
      as a flow column so the note's real height always pushes the row up.
      This replaces ch3-m2 slide 98's one-off patch with a fix that holds for
      all 14+ existing figrow+note slides (verified); applied to both the
      course build and the canonical `40 - Engine` copy, `TEMPLATES.md`
      updated in both. Slide 102's graph label repositioned. Full-course
      `verify.ps1` re-run: 0 FAIL (10 pre-existing warnings, all in
      unauthored Day 2/3 outline slides, unrelated). **ch3-m3 Stage 3 done.**
      One gap noted for the record: the console's own Stage 3 review rack for
      ch3-m3 only holds 101/102/103 (the rework's scope) — 105/106/108 were
      reviewed by hand in this session but never went through the console's
      after-render/screenshot phase, since the original run crashed before
      reaching it. Cosmetic for now; worth a full (non-rework) Stage 3 fire
      later if the console's own record should be complete.
- [x] **ch3-m4 Stage 3** (Fisher 667 — Identify & Bench Set, `buildsOn: []`,
      mirrors ch3-m2's 657 treatment) — full four-part pass (2026-09-04, $3.14,
      74 turns): merged RA-mechanism content duplicated across 109/112 into
      109 alone; Template 6 caution card on 110; nameplate SVG on 111 (EXAMPLE,
      as slide 96); bench-set graph only on 112 (reverse-acting panel, 7–15
      psig); CYK on 113 recast as a situation, and its original claim replaced
      after the 667 IM's own procedure contradicted it (PDTC starts upper
      travel stop, PDTO/reverse-acting starts lower — not "always upper" as
      originally written); 114 rebuilt as a 3-step figrow. **Third instance of
      the sibling-box collision class** found on slide 109 — `.tmpl-fig` (tall
      narrow cutaway) overlapped `.tmpl-note`, same root cause as the
      figrow/note bug, different template (`.slide--tmpl-diagram`). Fixed the
      same way, at the template level: `:has(> .tmpl-note) .tmpl-fig` anchors
      to `top:17cqh` and caps its width instead of centering an unbounded box;
      verified against the other 8 existing `.tmpl-diagram` slides (none
      touched). Full-course `verify.ps1`: 0 FAIL. **ch3-m4 Stage 3 done**, all
      6 slides approved, console closed. Two judgment calls left open for
      Franz (not blocking): slide 111's OPER RANGE is illustrative like slide
      96's; slide 112 keeps the module's shared travel-axis convention even
      though it no longer tracks a reverse-acting stem's actual direction.
      **Tooling note:** `build-course.ps1`'s "unchanged" fast path (course
      copy already byte-identical to engine) returns before refreshing
      `_engine-lock.json`'s recorded hash — a hand-edit landing both copies
      identical never updates the lock. Worked around by hand twice now;
      worth patching `build-course.ps1` directly at some point.
- [ ] Four-bucket precedence rule written into [[Course Porting Pipeline]]
      working rules.
- [ ] Stage 3 QA mechanisms (§4 above) shipped; noted in
      `40 - Engine/render/README.md` and [[System Map]].
- [ ] [[Roadmap]] "Current picture" + [[System Map]] updated with the
      source-grounding + instructional-design milestone.
- [ ] `00 - Project/Instructional-Method Review — ch3.md` verdict graduated into
      [[System Architecture]] Layer 2; both staging docs deleted.
