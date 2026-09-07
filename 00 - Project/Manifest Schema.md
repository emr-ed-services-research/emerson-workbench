# Manifest Schema

`build/manifest.js` (`window.EW_MANIFEST`) is a flat array of one row per
slide file in a course's `build/slides/` directory. This document states its
row schema directly, verified against the real engine code
(`40 - Engine/Presentation/course/course.js`, `build/index.html`,
`build/assets/slides.js`) on 2026-09-07 — not guessed, and not inferred from
a converted course's legacy manifest, which uses an older `family` taxonomy
(see the note at the end). Written after Stage 3 origination runs
repeatedly spent turns re-deriving this by grepping the shell code from
scratch; read this instead.

## Row shape

```json
{ "n": 1, "file": "om1-001.html", "family": "tmpl-figrow",
  "section": "Ch 3 - Fisher Sliding Stem Spring & Diaphragm Actuator Maintenance",
  "title": "Direct- and Reverse-Acting Actuators",
  "hasNotes": false, "review": "" }
```

| Field | Type | Meaning | Who reads it |
| --- | --- | --- | --- |
| `n` | number | The slide's page number — matches the number in its filename. | `course.js`'s only manifest read: looks up the current page's `title` by filtering on `n`. |
| `file` | string | The slide's filename, e.g. `"om1-001.html"`. | Not read by the shell at runtime (routes are built from `slidePrefix` + page number instead) — kept for the raw QA viewer and for humans scanning the file. |
| `family` | string | The slide's master template class (`TEMPLATES.md`) with the `slide--` prefix stripped: `.slide--tmpl-figrow` → `"tmpl-figrow"`, `.slide--tmpl-diagram` → `"tmpl-diagram"`, `.slide--tmpl-graph` → `"tmpl-graph"`, `.slide--tmpl-table` → `"tmpl-table"`, the check-slide class `.slide--hd` → `"hd"`. | `build/index.html`'s raw QA viewer, as a fallback label — shown in italics, `(family)`, only when `title` is empty. |
| `section` | string | A grouping label. The QA viewer draws a new divider in its slide list every time this value changes between consecutive rows, so it should be constant across one chapter/module block and change at a real boundary — normally the chapter title, e.g. `"Ch 3 - Fisher Sliding Stem Spring & Diaphragm Actuator Maintenance"`. | `build/index.html`'s raw QA viewer only. |
| `title` | string | The slide's on-screen title. Leave `""` only for a slide that genuinely has no title (a bare figure/diagram slide). | `course.js` (the module overview / breadcrumb's page-title display) and `build/index.html`'s slide list. |
| `hasNotes` | boolean | Whether the slide's HTML contains a `.notes` element (presenter notes). Computed live elsewhere (`slides.js`) by checking the DOM for that element — it is not derived from anything else in the row. Per the Style Guide, slides are visual-only; an originated slide has no `.notes` block, so this is always `false` for origination output. | Not read by the shell at runtime; a static record. |
| `review` | string | A workshop review-flag. `""` means clean / no flag. Any non-empty string makes `build/index.html`'s QA viewer show a ⚠ next to that slide in its nav list — it is a flag for a human reviewer, not a place for provenance notes or authoring commentary. Leave `""` unless there is a genuine reason to flag the slide for review. | `build/index.html`'s raw QA viewer only. |

## What NOT to do

- Do not repurpose `review` to record why/how a slide was originated (a
  real headless run's manifest.js should not read like a commit message) —
  that belongs in Stage 3's own report back, not the manifest row.
- Do not copy `family` values from a converted course's legacy manifest
  (`cover`, `one-col`, `title-only`, etc.) — those predate the master-
  template system. `family` for a slide authored against a master template
  is that template's own class name, stripped of `slide--`, per the table
  above.
- Do not treat manifest order as authoritative — `n` is what's read; keep
  rows in page order for human readability, but the shell does not depend
  on array order.
