---
title: "IfE Origination Pilot — Five Tenets"
type: reference
status: test result — for direct review
created: 2026-09-09
---

# IfE Origination Pilot — "The Five Tenets of IfE"

**The question this test exists to answer:** now that `curriculum-
development.md` has real schema entries for the `ife` domain code and
`provenance: original` (both added 2026-09-09), do they actually work when
used for real — on IfE's own content, in isolation from the harder
cross-course-primitive case — or only on paper?

This is a **bounded, isolated test**, the same discipline as the ch3-m2
A/B dry run before it: small, scratch, reversible, not a first step toward
authoring the rest of IfE. It does **not** test IfE's practice-slice
content (the 14101 material IfE borrows) — that exercises cross-course
`provenance` and is a separate, larger follow-on, not attempted here.

To answer the question, the pilot had to reach **built, rendered HTML**,
not stop at a plan. It did: `Presentation/build/slides/ift-001.html`,
`ift-002.html`, `ift-003.html`, all three passing `render-check.mjs` clean
(no load errors, no broken images, no clipping) in both 4:3 and 16:9 —
and separately confirmed by eye from real screenshots, not just the
automated pass (see §3 — the automated check does not catch everything).

---

## 1. What was built

**Source.** `IfE Vault/02 Methodology/Five Tenets of IfE.md` — Steve's own
five-tenet framework and its "through-line" (tenets 1–2 are inputs the
instructor receives; 3–5 are what the instructor performs and is scored
on). No handbook, no manual, nothing external behind it — the reason this
module was chosen as the pilot candidate over one with real 14101 content:
it isolates `provenance: original` cleanly, with no Component Index
material mixed in.

**Module.** One module, three slides, `domain: "ife"` on the chapter and
module records in `course.json`:

| Slide | Concept | Level | Role tag | Template actually used |
|---|---|---|---|---|
| `ift-001` | The five tenets, named and placed | remember | `nomenclature` | `.slide--tmpl-table` (production) |
| `ift-002` | Received (1–2) vs. performed (3–5) | understand | `contrast` | `.slide--tmpl-table` (production) |
| `ift-003` | Check — which tenet does this behavior show | evaluate | `check` | `.slide--role-check` (proof gallery) |

**Registry.** `Curriculum — IfE Pilot.md` — one competency
(`ife.methodology.five-tenets-framework`), two primitives (both
`provenance: original`, `status: exists`), three placement edges (two
`introduces`/`develops`, one `applies` assessment edge with
`primitiveId: null`). Full detail there; this document is the findings.

**Verification.**
```
node render-check.mjs --course "_Origination Test — ife-five-tenets"
  [ok]   ift-001.html
  [ok]   ift-002.html
  [ok]   ift-003.html
RENDER: 3 slides rendered, 0 warn
```
Plus a `--screenshot` pass, and each of the three screenshots opened and
looked at directly (§3 explains why that step mattered — it is where two
of the three real defects were caught, and render-check did not catch
either).

---

## 2. `provenance: original` — works cleanly, no friction

Both `ift-001` and `ift-002` are `provenance: original` primitives with no
Component Index entry, and this composed without incident:

- Neither slide has a `.tmpl-source` citation line — there is nothing to
  cite, and the Style Guide convention (a required source attribution on
  a sourced figure) simply doesn't apply, no workaround needed.
- `course.json`'s key concepts carry a `sourceNote` describing the
  provenance in prose (matching the existing `sourceNote` convention
  already used for check slides with no figure) instead of a `sources`
  list naming Component Index IDs.
- The registry's `redrawRecord: not applicable — provenance: original`
  reads correctly against the schema's own stated exception.

**This is the one part of the pilot's stated purpose that fully held.**

---

## 3. Composition friction — caught by self-check, not by render-check

Logged honestly, same standard as the ch3-m2 dry run: `render-check.mjs`
checks load errors, broken images, and clipping — it does **not** check
whether a slide's content actually fills or suits its space. Both of the
defects below rendered "clean" by the automated check and were only caught
by opening the screenshots and looking.

1. **First pass of `ift-001`/`ift-002`: a short table floated to the top
   of the slide, leaving most of it empty.** `.slide--tmpl-table`'s
   `.tmpl-wrap` box is sized to the full content area regardless of how
   tall the actual table is; a 5-row table doesn't fill it. This is a
   **known, already-documented** failure mode — `TEMPLATES.md` Template 4
   names this exact problem ("a short table... leaves the bottom of the
   slide empty and reads as sparse") and prescribes the fix (14101 slides
   72/82): `display:flex;flex-direction:column;justify-content:center` on
   `.tmpl-wrap`, plus `table-layout:fixed` and an explicit `<colgroup>` so
   a `width:100%` table actually stretches inside the flex column. Applied
   directly from that precedent — not a new problem, but a real one, and
   the first draft did not avoid it.

2. **Second pass: "Acuminating Instructor Skills" wrapped to two lines**
   in too-narrow a Tenet column, breaking row-height uniformity against
   the other four single-line rows. Caught on the re-screenshot after
   fixing (1); fixed by widening that column (24%→31%) and trimming the
   font size slightly (2cqw→1.85cqw). Not caught by render-check either —
   a wrapped table cell is not clipping.

Both fixes are visible in the final screenshots (§1's render-check output
is from the corrected version). **Note what this is and isn't:** this is
the generation agent's own self-check catching its own draft defects by
looking at the actual render — a real and useful layer, but explicitly
**not** independent human review. No one but the agent has looked at these
three slides yet.

---

## 4. Real schema gaps surfaced — none fatal, none silently worked around

### Finding 1 — the `nomenclature` role has no template fit for content with no figure

`instructional-design.js`'s `CONCEPT_ROLES.nomenclature.treatment`: *"A
labelled-parts figure (`.slide--tmpl-diagram`), recognition-level."* The
proof-gallery's own `role-nomenclature` template
(`40 - Engine/_template-gallery/nomenclature-02.html`) is built around
numbered markers positioned by x/y coordinates on an image, with a
`callout-manifest` recording each marker's source locator. The Five
Tenets have no figure and no physical parts to mark up — five named
concepts in a table. `ift-001` is tagged `role: nomenclature` in
`course.json` (the closest cognitive fit — recognition-level naming of a
small fixed set) but built on production `.slide--tmpl-table`, not
`.slide--role-nomenclature`. This is the same kind of hand override
ch3-m2's dry run made for its own role/template mismatch (tagged
`mechanism`, built as `.slide--role-application` because the natural
figure was a graph) — logged the same way, not silently absorbed.

### Finding 2 — the `contrast` role's template assumes an image pair, not a text split

`CONCEPT_ROLES.contrast.treatment`: *"Parallel this-vs-that layout — a
figure row or a comparison table."* The treatment text itself actually
names "a comparison table" as an option — but the proof-gallery's
`role-contrast` template (`contrast-08.html`) only implements the image
option: two `.tpl-panel`s, each a `panel-label` / `placeholder-img` /
`panel-caption` stack, with no text-list variant. `ift-002` is tagged
`role: contrast` (a genuine this-vs-that split: received vs. performed)
but built on production `.slide--tmpl-table`, which is what the role's own
*written* treatment already pointed at — the code just hasn't caught up to
its own documented flexibility for this role.

**Findings 1 and 2 together:** every Axis-3 role except `check` is
defined, in practice, around a technical/mechanical subject — a figure,
a procedure a technician performs, a hardware caution. `check` is the one
role that is already pure text (a scenario, options, a reveal) and it fit
this pilot with zero override needed. This tracks with the concern already
on record in `curriculum-development.md`'s "IfE does not get a fifth role"
note: the schema decision that IfE sits at "a different tier" was made
knowing the consequences weren't fully worked out. This pilot is the first
concrete instance of that — not the roles table itself, but the role
*treatment* vocabulary one layer down, which nobody had reason to touch
until content with no figure showed up.

### Finding 3 — the `ife` domain code wasn't wired into the engine — RESOLVED 2026-09-09

Originally logged here as: `curriculum-development.md`'s domain table has
had `ife` since 2026-09-09, but `DOMAINS`/`DOMAIN_VERBS` in
`PipelineConsole/src/main/instructional-design.js` did not — no `ife`
entry, no pedagogical-verb menu. The module's `objective` and
`keyConcepts` text in this pilot were written by hand against IfE's own
existing vocabulary, not validated against a real menu, because none
existed.

**Closed the same day, as its own directive** (proposed verb set reviewed
and approved by Franz before wiring): `ife` added to `DOMAIN_VERBS`
(`remember`/`understand`/`recall`-type verbs traced to Terminal & Enabling
Objectives wording; `apply` tier to Show–Tell–Do and the Rubric's Section
3 competencies; `analyze`/`evaluate` scoped to delivery self-assessment,
deliberately not content analysis, per [[D2]]; `create` to the Day 6
development-plan wording verbatim). Verified for real, not eyeballed:

```
$ node -e "... id.objectiveVerbOk(mod.objective, mod.domain, mod.levelTarget) ..."
domain: ife  levelTarget: understand
objective: "Restate the Five Tenets of IfE and distinguish which the instructor
  receives with the assigned slice (context, objectives) from which the
  instructor performs and is scored on (preparation, delivery, self-development)."
menu at/below levelTarget: [ 'restate', 'identify', 'locate', 'name', 'recall',
  'state', 'explain', 'describe', 'distinguish', 'summarize', 'recognize' ]
objectiveVerbOk: true
```

This module's hand-written objective — written *before* the menu existed,
specifically because it didn't — now validates cleanly against the real
menu with no rewording. `node --test test/instructional-design.test.js`:
all 6 existing tests still pass (no regression from the new entry).

**Scope note:** `objectiveVerbOk` checks the module's `objective` field
only, by design (its own doc comment: *"Does the objective lead with a
verb..."*) — it does not check each `keyConcept`'s `t` prose, which is
descriptive text, not an objective statement. Confirmed by reading the
function, not assumed.

### Finding 4 — the `roles` field has no honest value for an IfE edge

`curriculum-development.md`: every placement edge's `roles` list is
*"explicit and mandatory — no 'all' default."* IfE doesn't route a cohort
toward a subset of the four technical roles (`maint-tech` / `inst-tech` /
`sizing-eng` / `operator`) — an IfE participant isn't one of those roles
being taught a technical competency, they're learning to teach people who
hold those roles. The three placement edges in the pilot's registry
**omit `roles` entirely** rather than default to "all four" (wrong — it
would claim a routing relationship that doesn't exist) or invent a value
(not this pilot's call to make). This is the concrete instance of the
question `curriculum-development.md` already flagged as open ("does
`servesRoles` even apply to an IfE module? ... real follow-up work once
IfE's first real primitives are authored") — this pilot is that moment,
and the honest answer right now is: the schema has no third option
between "wrong" and "silently broken," and needs one.

### Finding 5 — IfE has no enumerated `area` vocabulary

The competency ID `ife.methodology.five-tenets-framework` needed an area
segment (`<domain>.<area>.<slug>`), and `methodology` isn't one of the
enumerated areas — only `mnt`/`inst`'s three (`actuator`, `valve-body`,
`positioner`) are. Picked by hand, for this one competency, not a
decision. The project's own convention is to bake in known ID-scheme
values up front rather than retrofit later — IfE's real area vocabulary
needs the same kind of enumeration pass `actuator`/`valve-body`/
`positioner` already got, once there's enough real IfE competency content
to see what the areas actually are.

### Finding 6 — the primitive `asset` field is being stretched, not broken

Both primitives here use `asset: inline-table (slide N)` — a description,
not a filename, because there is no image or SVG behind either slide, just
a real HTML `<table>`. This isn't unprecedented (the 14101 registry already
has `asset: inline-svg (slide 097)` for a house-redrawn graph with no
separate saved file) but it goes one step further: that precedent is still
a *drawn figure*; a table of names and phrases is not a figure at all.
Nothing broke — the field held — but "primitive = one authored figure" is
doing more work here than it was written for. Worth a real definition
check once more non-technical content exists to compare against.

---

## 5. Bottom line

- The pilot reached real, clean-rendering HTML — three slides, `--course`
  render-check clean in both aspect ratios, and separately confirmed by
  eye.
- **`provenance: original` works cleanly** — the one thing this pilot most
  needed to prove. No Component Index entry, no source citation, no
  friction.
- **The `ife` domain code is now wired into the engine** — `instructional-
  design.js` has a real `ife` verb menu (proposed, reviewed, and approved
  by Franz before being wired in), and this module's own hand-written
  objective validates against it via the real `objectiveVerbOk` check, not
  a manual read-through. Closed same-day as its own directive; was an open
  gap earlier in this document, now resolved — see Finding 3.
- **Two of the eight Axis-3 roles (`nomenclature`, `contrast`) have no
  clean template fit for content with no figure** — worked around by hand
  per-slide, documented per-slide and in `course.json`, same discipline as
  ch3-m2's own role/template override, not silently absorbed.
- **`roles` on a placement edge has no honest value for IfE** — omitted,
  not defaulted or invented. This is the concrete surfacing of the
  question `curriculum-development.md` already flagged as unresolved.
- **IfE's `area` vocabulary is unenumerated** — one value picked by hand
  for this pilot only, not a decision.
- **The primitive `asset` field is stretched** by pure-table content with
  no figure at all — held, but worth a real look later.
- Two composition defects (a sparse short table, an uneven-wrapping row)
  were caught by the generation agent's own self-check against real
  screenshots, **not** by `render-check.mjs` and **not** by independent
  human review — no one else has looked at these slides yet.

**What this means for the recommended next step (Five Tenets pilot before
full IfE authoring, per the Part B report):** the isolation worked as
intended — `provenance: original` is now proven, cleanly, on its own,
before the harder cross-course-primitive case gets attempted. But this
pilot also surfaced that the schema's role vocabulary, its domain-verb
engine wiring, and its `roles`/`area` fields were all built against
technical/mechanical content and don't yet have a settled answer for
IfE's own kind of content. None of that blocks moving forward — every gap
above has a logged workaround, not a wall — but a second pilot against a
module with real 14101 slice content (where cross-course `provenance`
gets exercised) will hit the `roles` question again for real, and should
not re-litigate it from scratch.
