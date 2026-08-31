# PPT -> HTML generator (shared tooling)

> Course-parameterised (2026-08-31). Every script takes `-Course "<folder name
> under 10 - Courses>"` and resolves the deck, build path, slide prefix, deck
> id and section map from it via `_paths.ps1`. No hardcoded `1400` or absolute
> paths.
>
> Unlike the rest of the engine these scripts are **not** copied into a course
> by `build-course.ps1` — they are run in place from `40 - Engine/generator/`.

Two PowerShell scripts rebuild a course deck:

1. **extract-media.ps1** `-Course "<name>"` - unpacks ppt/media into
   `assets/img` (EMF/WMF/WDP rasterised via GDI+), writes the curated
   `assets/brand` logos, and emits `media-map.json` into
   `<build>/_generator/tmp/`.
2. **generate.ps1** `-Course "<name>"` - resolves slide order, walks each
   slide's shape tree (flattening groups), classifies the layout family,
   extracts title / body / figures / tables / notes / hyperlinks /
   Check-Your-Knowledge reveals, and writes `slides/<prefix>NNN.html` +
   `manifest.*` + `conversion-report.csv`.

```powershell
cd "40 - Engine\generator"
.\extract-media.ps1 -Course "1400 Valve Trim and Body Maintenance"
.\generate.ps1      -Course "1400 Valve Trim and Body Maintenance"
```

`extract-media` first, then `generate`. Windows only (uses System.Drawing for
EMF rasterisation). The design system (`css/emerson-workbench.css`) and runner
(`index.html` + `assets/slides.js`) are hand-maintained, not generated.

### Common parameters

| Param | Meaning |
| --- | --- |
| `-Course` (required) | folder name under `10 - Courses/` |
| `-SourcePptx` | explicit deck path; defaults to the single `.pptx` in `<course>/Source Deck/` |
| `-TmpDir` | scratch dir; defaults to `<build>/_generator/tmp/` (gitignored) |

`generate.ps1` also takes:

- **`-DryRun`** - writes the full output to `<tmp>/dryrun/` instead of the
  course build, and bypasses the regeneration guard. For previewing a
  conversion or diffing against the committed slides without touching them.
- **`-Force`** - regenerate slides listed in `_generator/PROTECTED.txt` too
  (a snapshot is saved to `_generator/_snapshots/` first).

### The regeneration guard

`generate.ps1` refuses to overwrite slides listed in
`<build>/_generator/PROTECTED.txt` (hand-owned chapters) unless `-Force`. The
pipeline rule: a chapter is hand-owned once authored; the generator only
bulk-converts chapters not yet touched. Extend `PROTECTED.txt` as chapters are
authored.

### Per-course section map

`generate.ps1` reads `<course>/Source Deck/sections.json` for the presentation-
order chapter ranges that fill the manifest `section` field:

```json
[ { "name": "Ch 1 - ...", "from": 12, "to": 25 }, ... ]
```

Optional — a brand-new course has none, and `section` stays blank until Stage 1
cuts the teaching arc.

## Spot-check helpers

- **export-orig.ps1** `-Course "<name>" -Slides 15,20,45` - exports those slides
  from the source `.pptx` as PNG via PowerPoint COM (requires PowerPoint
  installed). Output goes to `<tmp>/orig/`.
- **compare.ps1** `-Course "<name>" -Slides 15,20,45` - builds side-by-side
  sheets: original export (`<tmp>/orig/`, left) vs the headless-Chrome render of
  the converted HTML (`<tmp>/mine/`, right).
