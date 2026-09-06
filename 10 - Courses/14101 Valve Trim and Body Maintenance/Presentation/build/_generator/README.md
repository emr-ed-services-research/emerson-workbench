# 14101 deck -> HTML generator

Two PowerShell scripts that rebuild the deck from
`Source Deck/14101 Valve Trim & Body Maintenance.pptx`.

1. **extract-media.ps1** - unpacks ppt/media into `assets/img` (EMF/WMF/WDP
   rasterised via GDI+), writes the curated `assets/brand` logos, and emits
   `media-map.json`.
2. **generate.ps1** - resolves slide order, walks each slide's shape tree
   (flattening groups), classifies the layout family, extracts title / body /
   figures / tables / notes / hyperlinks / Check-Your-Knowledge reveals, and
   writes `slides/1400-NNN.html` + `manifest.*` + `conversion-report.csv`.

Run from any PowerShell (paths are absolute inside the scripts). `extract-media`
first, then `generate`. Windows only (uses System.Drawing for EMF rasterisation).

The design system (`css/emerson-workbench.css`) and runner (`index.html` +
`assets/slides.js`) are hand-maintained, not generated.

## Spot-check helpers

- **export-orig.ps1** - exports a list of slides from the source `.pptx` as PNG
  via PowerPoint COM automation (requires PowerPoint installed).
- **compare.ps1** - builds side-by-side sheets: original export (left) vs the
  headless-Chrome render of `slides/*.html` (right). Edit the slide list at
  the top of each.
