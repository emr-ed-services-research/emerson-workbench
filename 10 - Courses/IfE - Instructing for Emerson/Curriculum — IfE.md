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
(`ife.orientation.five-tenets-framework`). A **primitive** is one authored
artifact for one `competency × asset-variant`, `provenance: original`
here because there is no external source to cite. A **placement edge** is
`module × roles × competency × progression → primitive`.

**Resolved 2026-09-09** (were placeholders in this entry's first draft,
now decided — see `curriculum-development.md`'s pilot-findings note):
- **Area:** `orientation` — one of four `ife` areas now enumerated in
  `curriculum-development.md`'s Areas table. The competency ID below is
  the renamed form (`ife.orientation.*`, was `ife.methodology.*` in the
  origination pilot — the pilot's own record stays as originally written,
  a historical snapshot, not rewritten in place).
- **`roles`:** every edge below carries `roles: null` explicitly — the
  defined value for a non-role-routed domain, not an omission.

**Still a working identifier, not decided:** `d1-m1` (module ID) and
`ife-` (slide prefix) — the same footing 14101's Day-One module IDs had
before its own Phase 3.

---

## Competency

```yaml
- id: ife.orientation.five-tenets-framework
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
- id: prim.ife.orientation.five-tenets-framework.overview
  competencyId: ife.orientation.five-tenets-framework
  status: exists
  asset: inline-table (slide ife-005)
  provenance: original
  redrawRecord: not applicable — provenance: original
  variantTag: overview

- id: prim.ife.orientation.five-tenets-framework.received-vs-performed
  competencyId: ife.orientation.five-tenets-framework
  status: exists
  asset: inline-table (slide ife-006)
  provenance: original
  redrawRecord: not applicable — provenance: original
  variantTag: received-vs-performed
```

**Slide renumbering (2026-09-09):** the Five Tenets slides moved from
`ife-001…003` to `ife-005…007` when Module 0 (title slide, roadmap,
facility & safety, sign-in — pages 1–4) was added ahead of them. No
competency, primitive, or edge content changed — only which file each
`slide:` reference names.

## Placement edges

```yaml
- moduleId: d1-m1
  roles: null   # ife is not role-routed — see curriculum-development.md "Placement edge"
  competencyId: ife.orientation.five-tenets-framework
  progression: introduces
  primitiveId: prim.ife.orientation.five-tenets-framework.overview
  slide: ife-005

- moduleId: d1-m1
  roles: null
  competencyId: ife.orientation.five-tenets-framework
  progression: develops
  primitiveId: prim.ife.orientation.five-tenets-framework.received-vs-performed
  slide: ife-006
  note: "same competency, not re-introduced — ife-006 develops the same
    understanding with the received/performed split"

- moduleId: d1-m1
  roles: null
  competencyId: [ife.orientation.five-tenets-framework]
  progression: applies
  primitiveId: null
  slide: ife-007
  note: "check-your-knowledge — assessment edge, primitiveId null, per
    curriculum-development.md Finding 1 (14101 Phase 2)"
```

No Component Index back-pointer — `provenance: original` primitives are
exempt. Module 0's own content (title, roadmap, facility & safety,
sign-in) carries no competency/primitive/edge at all — it is compliance
and orientation front matter, not instructional content, the same way
14101's Module 0 has none.

## Verification

```
$ node "40 - Engine/render/render-check.mjs" --course "IfE - Instructing for Emerson"
  [ok]   ife-001.html   (title)
  [ok]   ife-002.html   (roadmap)
  [ok]   ife-003.html   (facility & safety)
  [ok]   ife-004.html   (sign-in & housekeeping)
  [ok]   ife-005.html   (Five Tenets)
  [ok]   ife-006.html   (Received vs. Performed)
  [ok]   ife-007.html   (Check)
RENDER: 7 slides rendered, 0 warn
```

Also verified: the shared engine's title-splash boot order (`course.js`,
2026-09-09) opens this course directly on `ife-001.html` (the branded
title slide) on a fresh load, with a Continue button revealing the normal
course-overview card — confirmed live in headless Chrome, not assumed,
on both this course and 14101 (same shared code path). No console errors
on either.

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
