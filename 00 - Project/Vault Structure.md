---
title: Vault Structure
type: reference
tags:
  - project
  - meta
updated: 2026-08-31
---

# Vault Structure

How this Obsidian vault is organized and how to work in it.

## Top-level folders

| Folder | Holds |
| --- | --- |
| `00 - Project` | Charter, roadmap, open questions, glossary, this note |
| `10 - Courses` | One folder per course; [[Courses]] is the map of content |
| `20 - Source Library` | Handbooks and technical publications; [[Source Library]] is the MOC |
| `30 - Templates` | Obsidian **note** templates (configured as the Templates plugin folder) — `Bench Book Module`, `Bench Notes Module`, `Course Home`, `Source Document` |
| `40 - Engine` | The shared **course runtime** — the presentation engine every course is assembled from. See [[Engine]]. |
| `99 - Attachments` | PDFs, images, exported decks — the default attachment folder |

`Emerson Workbench.md` at the vault root is the home note.

### `30 - Templates` vs `40 - Engine`

Two different kinds of "template", kept apart deliberately:

- **`30 - Templates`** holds Obsidian Markdown note skeletons — what the
  Templates core plugin inserts when you create a new note.
- **`40 - Engine`** holds the code that renders a course: the design system
  (`emerson-workbench.css`, `tokens.css`), the deck runner and learning-shell
  skeleton (`index.html`, `course.js`, `course.css`, `slides.js`), the four
  reusable **slide** card templates (`build/css/TEMPLATES.md`), the
  PPT→HTML generator (`generator/`), and the assembly + verification scripts
  (`build-course.ps1`, `verify.ps1`). A course under `10 - Courses` is
  assembled from it and keeps only its own content (`course.json`,
  `slides/*.html`, media). It is separate from `30 - Templates` because it is
  executable runtime shared across courses, not authoring boilerplate.

## Course folder layout

Each course under `10 - Courses` follows the same shape:

```
10 - Courses/
  <course> /
    <course> — Course Home.md      ← overview, module list, status
    Bench Notes/                   ← instructor guide, one note per module
    Bench Book/                    ← student guide, one note per module
    Presentation/                  ← the built HTML course — assembled from 40 - Engine
      build/   slides/*.html, css/, assets/, the standalone deck runner
      course/  course.json (+ course-data.js), the learning-shell instance
    Source Deck/                   ← the original PowerPoint + extracted assets
```

Everything under `Presentation/` except the course's own `course.json`,
`slides/*.html` and media is placed there by `40 - Engine/build-course.ps1`
and must be edited in the engine, not in the course. See [[Engine]].

## Conventions

- **Links:** use `[[wikilinks]]`. New links resolve to the shortest unique path.
- **Properties:** every note starts with YAML frontmatter — at minimum `title`,
  `type`, `tags`, `updated`.
- **`type` values:** `home`, `moc`, `reference`, `course`, `module`, `source`,
  `template`.
- **Naming:** course modules are prefixed with the course number, e.g.
  `1400.02 Trim Removal`.
- **Templates:** create notes from `30 - Templates` via the Templates core
  plugin.
- **Shared source content (Stage 2):** lives in the Source Library or a future
  `15 - Source Content` folder and is transcluded, never copied.
