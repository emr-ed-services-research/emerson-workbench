---
title: 14101 build — spot-check against the original .pptx
type: reference
course: "14101"
tags:
  - presentation
  - stage-1
updated: 2026-08-29
---

# Spot-check: 33 flagged slides vs the original PowerPoint

Each flagged slide was exported from the source `.pptx` with PowerPoint itself
(COM automation, 1320×1020 PNG) and compared side by side with the converted
HTML. Comparison sheets: `_generator` scratch (`compare.ps1`).

## Verdict: all 33 present and teachable. No blockers.

| # | slide | flag | verdict |
| ---: | --- | --- | --- |
| 20–22, 24 | ANSI Class II / III / IV / VI Shutoff | ole-fallback | **exact** — the EMF fallback is PowerPoint's own render |
| 23 | ANSI Class V Shutoff | ole-fallback | **fixed** — two overlapping OLE objects; the second was baking a white background over the first. Now composites correctly |
| 85 | Spiral Wound Gasket Types | ole-fallback | exact (photo crop differs slightly) |
| 89, 129 | Selecting an Action / Fail Action with Spring | ole-fallback | exact |
| 298, 300 | Relay Action Increasing / Decreasing | ole-fallback | exact — 3-panel sequences render whole |
| 299, 301 | Actuator Response Downward / Upward | ole-fallback | good — diagram exact; last words of two bullets sit behind the figure (text-column overlap) |
| 305, 306 | Saturation Low / High End | ole-fallback | exact |
| 312 | Operational Block Diagram | ole-fallback | good — block diagram exact; bullet text partly behind the diagram |
| 326 | Configurators | ole-fallback | exact — text slide; the OLE is inconsequential |
| 416, 417 | Curriculum maps | ole-fallback | good — all course-code boxes and connectors present, boxes shift a little |
| 81 | Assembly | svg-rebuilt | **excellent** — IM thumbnail, arrow, full valve cutaway all rebuilt |
| 97, 104, 112 | Bench Set Concept / Setting Travel | svg-rebuilt | **excellent** — travel line, reference lines, dimension arrows, actuator schematics all rebuilt |
| 125 | Deadband | svg-rebuilt | excellent — hysteresis loops and labels rebuilt |
| 259, 284 | Fisher Type 1052 / 1061 60° Stop | svg-rebuilt | excellent — actuator cutaways with colour and callouts rebuilt |
| 294, 295, 304 | Friction Effects / Overcoming Friction / Zero & Span | svg-rebuilt | good — graphs rebuilt; occasional label collision, s304 caption meets the footer |
| 297 | Positioner Operation – Equilibrium | svg-rebuilt | **excellent** — full colour positioner cutaway rebuilt, near-identical |
| 325 | Networking Features | svg-rebuilt | good — topology and connectors rebuilt; labels a touch faint |
| 15 | ASME Class Pressure/Temperature | svg-rebuilt | good — the 6 rating curves and axes rebuilt; grid faint, some label overlap, bullet blank-line spacing lost |
| 45, 46 | Fisher easy-e Valves | svg-rebuilt | **minor gap** — valve body, seals, plug and (46) the comparison table all render; the **upper actuator/bonnet is clipped** (source group has broken child-scaling PowerPoint auto-recovers). Body is the teaching content |

## Fixes applied during the spot-check

1. **Transparent metafile canvas** — `extract-media.ps1` now renders EMF/WMF
   onto a transparent bitmap instead of white, so a metafile that doesn't paint
   its own background no longer hides the object beneath it. Fixed slide 23;
   no regressions on the other 22 EMF-backed slides.
2. **Off-canvas guard** — `ShapeBox` marks graphicFrame coordinates that fall
   10×+ outside the slide as junk; such objects are stacked in the content area
   rather than placed at nonsense positions.

## Residual items (cosmetic, for the full polish pass)

- **45 / 46** — easy-e cutaway actuator top clipped. Redraw that one group as
  SVG by hand, or replace with a clean cutaway image.
- **299 / 301 / 312** — in the two-column families the body text column and the
  absolutely-placed figure overlap at the column edge; widen the gap or clip
  the figure.
- **304** — "Positioner Zero and Span Calibration" caption wraps into the
  footer; nudge it up.
- **15** — restore blank-line spacing between bullets; the graph grid could be
  darker.
