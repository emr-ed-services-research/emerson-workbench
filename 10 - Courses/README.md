# 10 - Courses

One folder per course. **`Courses.md` in this folder is the map** — start there
rather than reading the folder listing.

| Course | |
| --- | --- |
| `14101 Valve Trim and Body Maintenance` | Maintenance |
| `Control Valve Basics` | Introductory |
| `Control Valve Engineering 1` / `2` / `— Industry (Oil & Gas)` | Engineering (sizing and selection) |
| `IfE - Instructing for Emerson` | Instructor training |

Folders prefixed `_` are dry runs, origination tests, template proofs and
previews — not shipping courses. They are kept deliberately; if something is
not in the repo, that is also deliberate.

A course **vendors** a built copy of `40 - Engine` plus a lock file. Build with
`40 - Engine/build-course.ps1`, then `40 - Engine/verify.ps1`.

Content and structure authorities: `00 - Project/Course Porting Pipeline.md`,
`00 - Project/teaching-philosophy.md`, `00 - Project/curriculum-development.md`.
