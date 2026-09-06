---
title: "ch3-m2 A/B Dry-Run — Candidate A (converted) vs Candidate B (originated)"
type: reference
status: test result — for direct review
created: 2026-09-05
---

# ch3-m2 A/B Dry-Run — Comparison

**The question this test exists to answer:** does origination-mode Stage 3
authoring, run from a topic-scoped concept map with no deck, produce slide
content that is trustworthy enough to compare against the real converted
module on its merits — or does it only look plausible until you render it?

To answer that, candidate B had to reach **built, rendered HTML**, not stop
at a plan. It did: `Presentation/build/slides/ob-001.html` … `ob-006.html`,
all six passing `render-check.mjs` clean (no load errors, no broken images,
no clipping) in both 4:3 and 16:9.

- **Candidate A** = the real, current ch3-m2 (`1400-094` … `098`, check
  `100`). Not touched by this test.
- **Candidate B** = originated cold from the topic *"bench-setting a Fisher
  657"* via `20 - Source Library/Component Index — bench-set-657.md`, then
  composed into HTML with `buildStage3OriginatePrompt` (in
  `PipelineConsole/src/main/runners/prompts.js`), the prompt executed by the
  model under the same discipline as the 17 template-proof examples.

---

## 1. The two concept maps

| # | Candidate A — `ch3-m2` (converted) | Candidate B — `ob-m1` (originated) |
|---|---|---|
| Module | **Fisher 657 — Identify & Bench Set** | **Bench-Set a Fisher 657 Off the Valve** |
| Objective | Identify a 657 from its construction and nameplate, **and** measure and set its bench set off the valve | Set the bench set off the valve: adjust the spring for first movement at the lower pressure, verify travel between marks equals rated travel |
| Level target | apply | apply |
| Slide budget | 5 content + 1 check | 5 content + 1 check |
| 1 | `094` **nomenclature** — 657 construction, 7 parts top-to-bottom (cutaway) | `ob-001` **mechanism** — what bench set *is*: the friction-free pressure range for rated travel (keyed graph) |
| 2 | `095` **caution** — relieve the spring before opening the diaphragm casing (load-path cutaway) | `ob-002` **nomenclature** — the two nameplate fields a bench set must hit: BENCH SET, TRAVEL |
| 3 | `096` **nomenclature** — read the nameplate: type/size, bench set, travel, max stem dia (SVG nameplate) | `ob-003` **procedure** — set it off the valve: adjust the spring adjuster for first movement, mark, measure (Fisher 657 IM Fig 4) |
| 4 | `097` **mechanism** — bench set off the valve, friction-free; first-movement / full-travel endpoints (keyed graph) | `ob-004` **application** — on the valve, friction shifts full travel to bench set + friction ÷ diaphragm area (keyed graph) |
| 5 | `098` **procedure** — off the valve: mark at lower pressure, measure at upper = rated travel (two photos) | `ob-005` **procedure** — where bench set fits in the mounting sequence: mounted, unconnected, verified, then stem connector (hoist photo) |
| check | `100` — short travel across the rated span → wrong spring / mis-set compression | `ob-006` — same teaching point, near-identical stem |

Both modules land on `apply`, both spend six slides, both close on
essentially the same check question. What differs is **what the five content
slides are spent on.**

---

## 2. Where they cover the same ground (same sources, same facts)

| Ground | Candidate A | Candidate B | Shared source |
|---|---|---|---|
| The nameplate | `096` — full SVG nameplate, 4 fields keyed | `ob-002` — same SVG nameplate figure, 2 fields keyed | `ch3-cmp-nameplate` (the Fisher nameplate redraw) |
| Off-the-valve bench-set procedure | `098` — two representative photos (mark / measure) | `ob-003` — Fisher 657 IM Figure 4, `.has-wide-fig` | `ch3-cmp-benchset-adjustment-setup` ↔ `bs657-cmp-bench-set-adjustment` (both = 657 IM Fig 4) |
| The friction-free bench-set line on a travel-vs-pressure graph | `097` — endpoints ①② keyed, "off the valve" as the takeaway | `ob-001` — same line + a shaded bench-set-range band | CVH Fig 8.10 / 657 IM Fig 5 → `ch3-cmp-bench-set-graph` ↔ `bs657-cmp-deadband-graph` |
| The module check | `100` | `ob-006` | Same teaching point; B's stem adapted from the proof's `tp-014`, itself a copy of `100` |

On the shared ground, **B is not weaker than A.** The nameplate figure is
the same; the procedure figure is arguably cleaner in B (the IM's own
labelled 2-panel drawing vs A's two cropped photos); the bench-set graph is
the same geometry.

---

## 3. Where B is *more* complete than A (within the bench-set topic)

1. **B slides a formal definition of bench set; A does not.** `ob-001` is
   built on `bs657-cmp-definition` — the CVH p25 glossary entry plus §8.5.5.
   A never slides this: `094` is construction, and A's key concept 1 ("657
   is direct-acting, fails up") is taught in `ch3-m1` (`buildsOn`) and the
   context pane, not on a ch3-m2 slide. The topic index found the glossary
   definition precisely because a cold read of CVH §8.5 has no existing
   slide pre-selecting which page matters; the ch3 index never recorded it.

2. **B teaches the friction correction; A defers it.** `ob-004` is an
   `analyze`-level slide on the on-valve friction shift (full travel at
   bench set + friction ÷ effective diaphragm area). A's `097` is
   friction-**free** only; A pushes the on-valve re-check to `ch3-m3` key
   concept 4 (slides `102`/`104`). Inside the module boundary as drawn, B
   covers friction and A doesn't.

3. **B makes the mounting sequence explicit; A doesn't carry it in this
   module.** `ob-005` states that bench set is verified while the actuator
   is mounted-but-unconnected, *before* the stem connector goes on. A treats
   mounting as `ch3-m3` material entirely.

All three additions come from the same cause: the topic index read the 657
IM and CVH §8.5 **in full**, with nothing pre-selecting the relevant
subsections, so it surfaced the definition, the friction procedure, and the
mounting-sequence framing as first-class components.

---

## 4. Where B *drops* content A has (the "identify" half)

1. **657 construction nomenclature (A `094`).** Seven parts, top to bottom,
   on a cutaway. B has nothing equivalent — B's objective is "bench-set,"
   not "identify a 657." A real learner meeting a 657 for the first time
   gets this from A and not from B.

2. **The diaphragm-casing caution (A `095`) — "relieve the spring before you
   open the casing, or it is thrown off."** B drops this **entirely**. The
   topic index scoped it out deliberately (it is 657 IM *Maintenance*-section
   content; you bench-set a 657 without opening the diaphragm casing). That
   is a defensible scoping call — **but it is a real safety caution that A's
   author chose to keep in the module,** and B's narrower scope loses it.
   This is the single most consequential difference between the two.

3. **Explicit DA-action mechanism.** Neither module re-teaches it — both lean
   on `ch3-m1`. Not a difference, listed for completeness.

---

## 5. The core finding: scope granularity, not authoring quality

A and B are both internally coherent, both source-grounded, both presentable.
The real difference is **scope width**, and it is exactly what the
topic-index trial predicted:

- **A** was cut from an existing deck as *"identify **and** bench-set a
  657"* — a two-concern module. Its five content slides split ~3 identify /
  ~2 bench-set.
- **B** was scoped from a topic name as *"bench-set a 657 off the valve"* — a
  single-concern module. Its five content slides go entirely to bench-set,
  and reach depth A doesn't have room for (definition, friction, mounting
  sequence).

Neither is "better." They are answers to different questions. The lesson for
origination is the one already in `Course Porting Pipeline.md`: **scope
origination requests at single-concern granularity.** "Bench-set a 657"
produces a tight, deep module. Asking origination to reproduce A's exact
"identify and bench-set" breadth would require either a broader topic brief
or explicitly merging two topic scopes.

---

## 6. Finding: A and B are not on the same template system

- **A** is built on `.slide--tmpl-*` — `tmpl-diagram`, `tmpl-caution`,
  `tmpl-figrow`, `tmpl-graph`. This is the production ch3 family from the
  four-part conversion pass.
- **B** is built on `.slide--role-*` — `role-nomenclature`, `role-mechanism`,
  `role-procedure-image`, `role-application`, `role-check`. This is the
  17-example template-proof family, which is what the task specified.

These are **two parallel template systems** in the codebase right now. A
literal side-by-side render of A and B is partly comparing template systems,
not just concept maps — B's slides will look like the proof gallery, A's like
production ch3. Before origination Stage 3 is real, one of these has to
become the authoritative target, and `CONCEPT_ROLES.treatment` in
`40 - Engine/.../instructional-design.js` (which still maps roles to the old
`.slide--tmpl-*` classes) has to be reconciled with whichever wins.

**Sub-finding — the role→template map has no clean slot for "a mechanism
explained by a graph."** B's concept 1 is tagged `role: mechanism`, but the
only sensible figure for "what bench set is" is a pressure-vs-travel graph,
so `ob-001` was built on `.slide--role-application` (the keyed-graph
template). A hit the same wall from the other direction: `097` is tagged
mechanism and uses `.slide--tmpl-graph`. The role vocab treats mechanism as
"cutaway / how the parts move," and neither template family has a
"conceptual graph" treatment that a `mechanism` concept can route to.

---

## 7. Composition friction encountered while authoring B

Logged honestly — these are what the "does it hold up when you actually build
it" question was asking about.

1. **Concept 2 was written wrong and had to be corrected mid-authoring.**
   The concept map said the nameplate carries *"three numbers — lower bench
   set, upper bench set, rated travel."* The nameplate actually presents
   BENCH SET as a single **range** field (`3–11 psig`) plus a separate
   TRAVEL field — two fields, not three numbers. The concept text was written
   before checking how the source figure presents the data. Corrected in
   `course.json` and `ob-002`; called out in `ob-002`'s comment.

2. **Role→template mismatch on concept 1** (see §6 sub-finding) — resolved by
   hand, not by any rule.

3. **`ob-001` shipped its first render with an SVG label collision.** The
   folded "lower bench set" / "upper bench set" axis labels overlapped the
   x-axis title. Caught on visual inspection of the render and fixed (labels
   moved above the plot). This is exactly the class of defect the 17 proof
   examples needed review rounds to shake out — the authoring pass did not
   prevent it, a render check did.

4. **`ob-004`'s graph geometry is inherited, not derived.** The 2-psig
   friction shift is carried over wholesale from the proof's `tp-010`, where
   it was pixel-measured against CVH Fig 8.10. B's `analyze`-level slide is
   presenting a measurement it did not make. Acceptable for a dry run;
   a real origination pass on this concept would need to do that measurement.

5. **Two takeaways run to two lines** (`ob-001`, `ob-004`), at the wordier
   end of what Style Guide §8 wants for on-slide text — permitted (takeaways
   are a full-sentence exception) but not tight.

---

## 8. What in the authoring path is general vs built-narrow-for-this-test

**General-purpose (survives into a real origination Stage 3):**
- The prompt shape of `buildStage3OriginatePrompt` — a concept list of
  `{n, t, level, role, sources, sourceNote, slide, template}` → one slide per
  concept, composed then polished (not a four-part rework pass — there is
  nothing to rework).
- The role → template routing table.
- The report-back structure ("generated from nothing", "low confidence",
  "concept-map gaps").

**Narrow — built by hand just to make this test possible:**
- **The concept map itself.** `course.json` was written by hand from the
  topic index. A real run needs origination-mode Stage 1/2 prompts to
  produce it — those do not exist yet.
- **Slide numbering.** `1–6`, assigned sequentially. There is no deck length
  to bound against; real origination needs page-allocation logic.
- **No weighing fork.** B was built in isolation. "Build an originated
  treatment *and* a converted one, then pick the stronger" — the model in
  the 2026-09-05 directive — is **not** implemented. This document is that
  comparison done by hand, after the fact, by a human-readable diff. The
  system did not judge anything.
- **Template choice per concept** was set by hand in `course.json`, not
  derived by the prompt.
- **The generation step was the model executing the prompt**, exactly as with
  the 17 proof examples — not a headless Agent-SDK run. That stays a separate
  future step.

---

## 9. Bottom line for review

- Candidate B reached real, clean-rendering HTML. The authoring process
  produced six coherent, source-grounded slides.
- On shared ground, B is at least as strong as A.
- B is deeper on the bench-set concept; A is broader (it also identifies the
  657). This is a **scope** difference driven by how each concept map was
  cut, and it matches the topic-index trial's finding exactly.
- B drops A's diaphragm-casing safety caution. That is the one omission that
  should not be waved through on "different scope" alone.
- The process is **not** trustworthy unattended yet: it wrote one concept
  wrong (nameplate), shipped one render defect (label collision), and
  inherited a measurement it presented as analysis. Every one of those was
  caught by a human or a render check, not by the authoring pass.
- Two template families still coexist; that has to be resolved before any of
  this is more than a test.

**This test does not lift the full stop on ch3-m4 completion, ch3-m5, or
ch3-m6.** It is bounded to ch3-m2. Building `ob-005` surfaced one real
ch3-m3 question (how much of the mounting/stem-connector sequence belongs in
a bench-set module) — flagged here, **not resolved.**
