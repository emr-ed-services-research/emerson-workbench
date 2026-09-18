---
title: Course Catalog
type: reference
tags:
  - source-library
  - pipeline
updated: 2026-09-18
---

# Course Catalog

The canonical set of real, production-track course ids — built to give the
Subject-Matter Index's `used-by` field a real reference target instead of a
free-text course name. Nothing more yet: no status/production-stage field,
no ownership metadata, no schedule — those get added only when a real,
cheap source for them exists, not spun up speculatively.

**Membership is deliberate, not automatic.** A course belongs here once it
has crossed the line toward production — not the moment a course folder
exists, and not in proportion to how much real content it holds. See
[[Subject-Matter Index — Process & Standards]] for how a real citation from a
non-catalog course is still recorded (in the component's own `notes`, never
by inventing a catalog entry to make `used-by` fit).

## Catalog

| Id | Title | Course folder |
| --- | --- | --- |
| `CVB` | Control Valve Basics | `10 - Courses/Control Valve Basics/` |

`CVB` is the same code already used as this course's own `course.code` in
`course.json` and as its `slidePrefix` — reused here rather than inventing a
second id for the same course.

## Not catalog members (checked, deliberately excluded)

- `_Domain-Tier Dry Run — CVE1`
- `_Domain-Tier Dry Run — CVE1-Independent`
- `_Domain-Tier Dry Run — CVE1-Verify`

All three carry real, substantive content and are cited by real component
ids — this is not a judgment on their content. They were built to test the
domain/tier pipeline mechanism itself (the Domain Voice / Domain-Tier Depth
work, and the independent-authoring verification that followed it), not to
ship as a real course. Revisit if any of them — or a course descended from
them — actually reaches production-track.

14101 (`14101 Valve Trim and Body Maintenance`) is also not listed here: its
own Subject-Matter Index files (`Subject-Matter Index — 14101 ch1-ch2.md`,
`Subject-Matter Index — 14101 ch3.md`) already use a separate, pre-existing
`used-by` convention (bare slide numbers, not filenames) that predates this
catalog and isn't part of this build. Adding 14101 to this catalog, and
migrating its indexes' `used-by` convention to match, is a real, separate
piece of work — not assumed or started here.
