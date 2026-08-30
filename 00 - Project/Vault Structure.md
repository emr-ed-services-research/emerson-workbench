---
title: Vault Structure
type: reference
tags:
  - project
  - meta
updated: 2026-08-28
---

# Vault Structure

How this Obsidian vault is organized and how to work in it.

## Top-level folders

| Folder | Holds |
| --- | --- |
| `00 - Project` | Charter, roadmap, open questions, glossary, this note |
| `10 - Courses` | One folder per course; [[Courses]] is the map of content |
| `20 - Source Library` | Handbooks and technical publications; [[Source Library]] is the MOC |
| `30 - Templates` | Note templates (configured as the Templates plugin folder) |
| `99 - Attachments` | PDFs, images, exported decks — the default attachment folder |

`Emerson Workbench.md` at the vault root is the home note.

## Course folder layout

Each course under `10 - Courses` follows the same shape:

```
10 - Courses/
  <course> /
    <course> — Course Home.md      ← overview, module list, status
    Bench Notes/                   ← instructor guide, one note per module
    Bench Book/                    ← student guide, one note per module
    Presentation/                  ← presentation-artifact working notes
    Source Deck/                   ← the original PowerPoint + extracted assets
```

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
