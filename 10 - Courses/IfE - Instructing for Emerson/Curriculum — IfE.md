---
title: Curriculum — IfE
type: reference
tags:
  - curriculum
  - pipeline
course: Instructing for Emerson (IfE)
updated: 2026-09-09
---

# Curriculum Registry — IfE

> [!note] Status — first real module (Day 1, "The Five Tenets of IfE")
> Authored 2026-09-09, immediately after the origination pilot
> (`10 - Courses/_Origination Test — ife-five-tenets/`) proved
> `provenance: original` and the `ife` domain-verb menu against the same
> content. This is the real registry entry — the pilot folder stays on
> record as the test that proved the mechanism, not duplicated content.
> **In scope:** one module, one competency. **Not started:** every other
> Day 1–8 module. Schema in `00 - Project/curriculum-development.md`.

The schema: a **competency** is a flat skill ID
(`ife.methodology.five-tenets-framework`). A **primitive** is one authored
artifact for one `competency × asset-variant`, `provenance: original`
here because there is no external source to cite. A **placement edge** is
`module × roles × competency × progression → primitive`.

**Known placeholders in this first entry — not decisions:**
- `ife.methodology.*` — `methodology` is not an enumerated IfE area (only
  `mnt`/`inst` have areas defined). A real area-vocabulary proposal is
  logged in `Open Questions.md`; if approved differently, this competency
  ID renames (`ife.orientation.five-tenets-framework` is the current
  proposal's candidate) — cheap now, before anything else references it.
- `d1-m1` (module ID) and `ife-` (slide prefix) are working identifiers,
  not a finalised scheme, the same way 14101's Day-One module IDs were
  "illustrative" before its own Phase 3.
- `roles` is omitted from every edge below, not defaulted — see the open
  proposal in `Open Questions.md` for a real fix (`roles: null` as a
  defined value for non-role-routed domains).

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

---

## Primitives

```yaml
- id: prim.ife.methodology.five-tenets-framework.overview
  competencyId: ife.methodology.five-tenets-framework
  status: exists
  asset: inline-table (slide ife-001)
  provenance: original
  redrawRecord: not applicable — provenance: original
  variantTag: overview

- id: prim.ife.methodology.five-tenets-framework.received-vs-performed
  competencyId: ife.methodology.five-tenets-framework
  status: exists
  asset: inline-table (slide ife-002)
  provenance: original
  redrawRecord: not applicable — provenance: original
  variantTag: received-vs-performed
```

## Placement edges

```yaml
- moduleId: d1-m1
  competencyId: ife.methodology.five-tenets-framework
  progression: introduces
  primitiveId: prim.ife.methodology.five-tenets-framework.overview
  slide: ife-001

- moduleId: d1-m1
  competencyId: ife.methodology.five-tenets-framework
  progression: develops
  primitiveId: prim.ife.methodology.five-tenets-framework.received-vs-performed
  slide: ife-002
  note: "same competency, not re-introduced — ife-002 develops the same
    understanding with the received/performed split"

- moduleId: d1-m1
  competencyId: [ife.methodology.five-tenets-framework]
  progression: applies
  primitiveId: null
  slide: ife-003
  note: "check-your-knowledge — assessment edge, primitiveId null, per
    curriculum-development.md Finding 1 (14101 Phase 2)"
```

No Component Index back-pointer — `provenance: original` primitives are
exempt.

## Verification

```
$ node "40 - Engine/render/render-check.mjs" --course "IfE - Instructing for Emerson"
  [ok]   ife-001.html
  [ok]   ife-002.html
  [ok]   ife-003.html
RENDER: 3 slides rendered, 0 warn
```

Both 4:3 and 16:9, confirmed by eye against `_verify-shots/`, not just the
automated pass. `objectiveVerbOk('ife', 'understand')` against this
module's real `objective` string: `true` (verified via
`PipelineConsole/src/main/instructional-design.js` after the domain-verb
menu was wired in — see `PILOT-NOTES.md` Finding 3 in the pilot folder for
the full transcript; same objective text, same result, now the production
copy).

## Next

Every other Day 1–8 module. None started. The next real module should
exercise the case this one deliberately avoided — real 14101 slice content
and cross-course `provenance` — since that is the harder half of the Part
B integration question and still unproven against real production
content.
