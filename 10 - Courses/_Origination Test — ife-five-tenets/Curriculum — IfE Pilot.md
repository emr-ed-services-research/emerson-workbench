---
title: Curriculum — IfE Pilot
type: reference
tags:
  - curriculum
  - pipeline
  - pilot
course: "Origination Pilot — IfE Five Tenets (NOT a real course)"
updated: 2026-09-09
---

# Curriculum Registry — IfE Pilot (bounded test, not a real course)

> [!note] Status — bounded origination-mode pilot, one module
> Tests the `ife` domain code and the `provenance: original` schema value
> (both added to `curriculum-development.md` 2026-09-09) against one small,
> real, hand-authored module — "The Five Tenets of IfE." Not wired into the
> IfE vault, the Workshop nav, or any course registry. Does **not** test
> IfE's cross-course-primitive case (practice-slice content borrowed from
> 14101) — that is a separate, larger follow-on test, not attempted here.
> See `PILOT-NOTES.md` for the full verification record and findings.
>
> **Superseded 2026-09-09** by the real registry —
> `10 - Courses/IfE - Instructing for Emerson/Curriculum — IfE.md`. The
> competency below (`ife.methodology.five-tenets-framework`) is renamed
> there to `ife.orientation.five-tenets-framework` now that IfE's area
> vocabulary is decided; this page is left exactly as originally written,
> the historical record of the pilot, not updated in place.

The schema this exercises: a **competency** is a flat skill ID
(`ife.methodology.five-tenets-framework`). A **primitive** is one authored
artifact for one `competency × asset-variant`, `provenance: original`
because there is no external source to cite. A **placement edge** is
`module × roles × competency × progression → primitive`. See
`00 - Project/curriculum-development.md` for the record shapes.

---

## Competency

```yaml
- id: ife.methodology.five-tenets-framework
  bloom: understand
  statement: >
    Restate the Five Tenets of IfE and distinguish which the instructor
    receives with the assigned slice (context, objectives) from which the
    instructor performs and is scored on (preparation, delivery,
    self-development).
```

**Area flag.** The ID uses `ife.methodology.*` — `methodology` is **not**
an enumerated IfE area; curriculum-development.md's Areas table only has
`actuator` / `valve-body` / `positioner`, all technical. This pilot picked
`methodology` by hand, for this one competency only, so the ID scheme had
somewhere to put it. It is not a decision — IfE's real area vocabulary
(how many areas, what they're called) is unenumerated and needs a real
pass the way `actuator`/`valve-body`/`positioner` got one, not a value
inherited from this pilot by default.

---

## Primitives

```yaml
- id: prim.ife.methodology.five-tenets-framework.overview
  competencyId: ife.methodology.five-tenets-framework
  status: exists
  asset: inline-table (slide ift-001)
  provenance: original
  redrawRecord: not applicable — provenance: original (curriculum-development.md)
  variantTag: overview

- id: prim.ife.methodology.five-tenets-framework.received-vs-performed
  competencyId: ife.methodology.five-tenets-framework
  status: exists
  asset: inline-table (slide ift-002)
  provenance: original
  redrawRecord: not applicable — provenance: original
  variantTag: received-vs-performed
```

One competency, two primitives — two distinct authored treatments of the
same understanding (name the tenets; then distinguish received from
performed), not two competencies. The check (`ift-003`) is not a teaching
artifact and gets no primitive — see the assessment edge below.

**`asset` flag.** Both primitives' `asset` value is a description
(`inline-table (slide N)`), not a filename — there is no image or SVG
file behind either slide, just a real HTML `<table>`. This is not new: the
14101 registry already tolerates a descriptive value here (`asset:
inline-svg (slide 097)` for a house-redrawn graph with no separate saved
file). But it goes one step further than that precedent — those are still
*visual* artifacts (a graph, a diagram); a `<table>` of names and short
phrases is not a figure at all. The primitive schema's implicit model
(one authored **figure** per competency-variant) holds up in the sense
that nothing broke, but it is being stretched: "primitive" here means "one
authored *slide composition*," not "one drawn figure." Worth a real
definition check once more non-technical content exists to compare
against, not resolved here.

---

## Placement edges

```yaml
- moduleId: ife/d1-five-tenets
  competencyId: ife.methodology.five-tenets-framework
  progression: introduces
  primitiveId: prim.ife.methodology.five-tenets-framework.overview
  slide: ift-001

- moduleId: ife/d1-five-tenets
  competencyId: ife.methodology.five-tenets-framework
  progression: develops
  primitiveId: prim.ife.methodology.five-tenets-framework.received-vs-performed
  slide: ift-002
  note: "same competency, not re-introduced — ift-002 develops the same
    understanding with the received/performed split, per the 'develops:
    taught again with genuinely new content' definition"

- moduleId: ife/d1-five-tenets
  competencyId: [ife.methodology.five-tenets-framework]
  progression: applies
  primitiveId: null
  slide: ift-003
  note: "check-your-knowledge — assessment edge, primitiveId null, per
    curriculum-development.md Finding 1 (14101 Phase 2)"
```

**`moduleId` flag.** `ife/d1-five-tenets` is illustrative, the same way
14101's Day-One module IDs were flagged illustrative before Phase 3 fixed
a real scheme. IfE has no module-ID scheme decided at all yet — this pilot
needed *something* to write here, not a real answer.

**`roles` flag — the concrete instance of the open question.**
Every placement edge in the 14101 registry carries an explicit, mandatory
`roles` list (per curriculum-development.md: *"explicit and mandatory — no
'all' default"*). The edges above carry **no `roles` field at all** —
deliberately omitted, not defaulted. `curriculum-development.md`'s own
2026-09-09 note on IfE's schema tier already flagged this as unresolved
("does `servesRoles` even apply to an IfE module? almost certainly not
... real follow-up work once IfE's first real primitives are authored").
This pilot **is** that moment: the schema currently has no third option
between "write the four technical roles" (wrong — an IfE participant is
not being routed toward a technical competency) and "leave it out" (breaks
the "mandatory, no default" rule as written). Omitting it is the more
honest of two bad options, not a fix. This needs an actual decision, not
a pilot-time workaround — see `PILOT-NOTES.md` finding 4.

No Subject-Matter Index back-pointer — `provenance: original` primitives are
exempt (curriculum-development.md: *"the one exception to 'must name a
real Subject-Matter Index entry'"*).

---

## Result

Schema mechanics held for a single competency exercised end to end:
`ife` domain code, `provenance: original`, cross-referencing primitives
from placement edges, the assessment-edge convention. Three real findings
came out of actually using it, not just reading it — written up in
`PILOT-NOTES.md`. None of them broke the pilot; all three are gaps the
schema simply doesn't cover yet, honestly surfaced rather than papered
over.
