---
title: Engine
type: reference
tags:
  - project
  - engine
updated: 2026-08-30
---

# Emerson Workbench — Engine

The shared runtime for every Workbench course. Extracted from course 1400 on
2026-08-30 (see [[Course Porting Pipeline]] step 2). Before this, the design
system, shell, deck runner and generator all lived inside
`10 - Courses/1400 …/Presentation/`, so a second course would have had to copy
them — an immediate fork. Now they live here once and are assembled into each
course.

## Layout

```
40 - Engine/
  README.md              this file
  build-course.ps1        assembles a course's Presentation/ from Presentation/ below
  verify.ps1              integrity checks for a course (JSON, page refs, tag balance,
                          manifest / title drift, CSS, engine-lock, data-ref drift lint)
  generator/              PPT → HTML conversion tooling (run manually, not assembled)
    generate.ps1  extract-media.ps1  compare.ps1  export-orig.ps1  README.md
  Presentation/           the shared runtime — MIRRORS a course's Presentation/ tree
    build/
      index.html          standalone deck runner
      css/
        tokens.css         the EMERSON palette — single source
        emerson-workbench.css   deck design system (imports tokens.css)
        TEMPLATES.md       the four card templates
      assets/
        slides.js          per-slide behaviour (embed / visual / nav / reveal)
        brand/             logos + cover art (shared)
    course/
      index.html          learning-environment shell skeleton
      course.css           shell styles (imports ../build/css/tokens.css)
      course.js            shell runtime (course-agnostic; reads window.EW_COURSE)
```

`Presentation/` here mirrors a course's `Presentation/` so every relative path
(`../css/emerson-workbench.css`, `../build/css/tokens.css`, `../assets/slides.js`)
resolves identically in the engine and in an assembled course. No path rewriting.

## What is engine vs. per-course

| Engine (here, shared) | Per-course (stays in `10 - Courses/<name>/Presentation/`) |
| --- | --- |
| `emerson-workbench.css`, `tokens.css`, `TEMPLATES.md` | `build/slides/*.html` |
| `slides.js`, deck `build/index.html` | `build/assets/img/`, `manifest.*`, `conversion-report.csv` |
| `course.js`, `course.css`, shell `course/index.html` | `course/course.json`, `course/course-data.js` |
| `brand/` logos + cover art | `build/_generator/PROTECTED.txt`, both `README.md`s |
| `generator/*.ps1` | `build/_engine-lock.json`, `_engine-snapshots/` |

## Assembling a course

```powershell
cd "40 - Engine"
.\build-course.ps1 -Course "1400 Valve Trim and Body Maintenance"
.\build-course.ps1 -Course "<name>" -WhatIf     # preview only
.\build-course.ps1 -Course "<name>" -Force      # overwrite hand-edited targets
```

It copies `Presentation/` (above) into the course's `Presentation/` tree.
Per-course files are never touched. After each run, `build/_engine-lock.json`
in the course records the hash of every file placed. On the next run a target
that differs from **both** the engine source **and** that recorded hash has been
hand-edited since assembly — it is skipped with a warning unless `-Force`, and a
snapshot of the prior shared files is written to `build/_engine-snapshots/`
before any first assembly or forced run.

**Edit the engine, then re-assemble — never hand-edit the shared files inside a
course.**

## Checking a course

```powershell
.\verify.ps1 -Course "1400 Valve Trim and Body Maintenance"
```

Runs: `course.json` JSON validity; every `keyConcepts` page ref is inside its
module's `pages`; slide-HTML tag balance; `manifest.js` parse + title-vs-`<h1>`
drift; CSS brace balance; engine-lock drift (assembled files still match the
engine); and the **reference-data drift lint** — every `<table data-ref="…">`
grouped by ref, normalised cell text compared, any ref that appears with
different content across files fails. Exit 1 on any FAIL. Render checks (headless
Chrome of rebuilt slides) are not in it yet.

## Course-specific configuration

A course's `course/course.json` carries everything specific:

- `course.code` / `course.title` / `course.footer` — shown in the shell header
  and browser title (the shell HTML has no course text baked in).
- `slidePrefix` — the slide filename prefix (e.g. `"1400-"`); `course.js` falls
  back to `course.code + "-"` if omitted.
- `slideBase`, `library`, `days[]` → `chapters[]` → `modules[]`, `moduleZero`,
  `wrapUp`.
- localStorage keys are namespaced per course (`ew<code>.progress`, `ew<code>.lib`).

## Known not-yet-decoupled

- **`generator/*.ps1`** still have `1400` and absolute paths hardcoded
  throughout (section map, `data-deck`, filename prefix, `$src`/`$build`). They
  work for 1400 as-is; parameterising them (`-Course`) is a separate task before
  a second course is converted. See [[Course Porting Pipeline]] open decisions.
- **`build/index.html`** (the standalone deck runner) still shows "1400 …" in
  three places. Lower priority — it is the standalone viewer, not the shell.
- **`--copyright-line`** in `emerson-workbench.css` has the year baked in.

## Related

[[Course Porting Pipeline]] · `Presentation/build/css/TEMPLATES.md` ·
`10 - Courses/1400 …/Presentation/build/README.md` ·
`10 - Courses/1400 …/Presentation/course/README.md`
