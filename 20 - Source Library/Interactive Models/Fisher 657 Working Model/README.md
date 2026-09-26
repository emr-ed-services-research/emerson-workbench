# Fisher 657 Working Model

An interactive, exact-geometry cutaway of the Fisher 657 (Size 30)
diaphragm actuator: every casting traced from Franz's hand-painted part
masks over the 657 IOM's Figure 6, with a parametric mechanism (spring,
stem, seat, adjuster, rolling diaphragm) and real bench-set physics —
preload shifts the 3–11 psig travel window, travel stops at the measured
plate-to-casing contact, the nameplate is a live, field-addressable legend.

- **Live artifact:** https://claude.ai/code/artifact/f7448bd3-3953-49a2-8231-42948b689037
- **Local copy:** `657-working-model.html` (self-contained; open in any browser)
- Built 2026-09-24/25 for the bench-set micro-learning (directive from
  Steve). First consumer: the 657 bench-set video; the model is
  course-independent and reusable.

## Contents

| Path | What it is |
| --- | --- |
| `657-working-model.html` | The interactive model (self-contained HTML/SVG/JS) |
| `ground-truth/s0_crop_painted.png` | **THE ground truth** — Franz's hand-painted per-part masks. Immutable; all geometry derives from it |
| `ground-truth/s0_crop.png` | The unpainted IOM Figure 6 crop, same 1480x2250 frame |
| `ground-truth/p24-24.png` | The raw IOM page-24 extract the crop came from |
| `pipeline/masks-from-paint.py` | Painted PNG → per-part masks (`parts2/`), by discovered-color matching |
| `pipeline/parts2/` | The extracted per-part masks (regenerable, kept for convenience) |
| `pipeline/refine2.py` | Masks → part geometry + diaphragm centerline/floor data (`refined2-parts.js`) |
| `pipeline/build_refined2.py` | Assembles the final HTML (writes `../657-refined.html`) |
| `657-cross-section.svg` | Earlier deliverable: the labelled, grouped static trace |

## Rules that govern this asset (do not relearn these)

1. **Hard geometries are immutable.** Shapes measured from source or painted
   by Franz carry through point-for-point. Animation deforms the exact
   point sets piecewise; it never substitutes parametric lookalikes.
   Parametric parts (spring, seat, adjuster, scale) use dimensions
   *measured from the masks*, adopted with Franz's explicit sign-off.
2. **Refinement is per-part with sign-off** — never a wholesale pass.
3. **Physics facts are geometry:** at rest the diaphragm/plate presses
   against the upper casing (upper stop); over-stroke off the valve ends at
   the measured 217 px plate-to-lower-casing contact (lower stop); the
   diaphragm drapes against the casing floor profile, never through it.
4. The full method lives in the `diagram-replication-exactness-method`
   session memory and this folder's pipeline scripts.

## Rebuild from zero

```
python pipeline/masks-from-paint.py   # painted PNG -> parts2/ masks
python pipeline/refine2.py            # masks -> refined2-parts.js
python pipeline/build_refined2.py     # -> 657-refined.html (the model)
```
Needs Python 3.12 with opencv-python and numpy. Note: masks-from-paint.py
references the painted PNG by absolute path; `ground-truth/` is the
authoritative copy.

## Coupling stage (signed off 2026-09-26)

The "Stem connector installed" toggle mounts the valve below the yoke:
stem connector, travel indicator disk, valve stem locknuts, and valve stem
(all from the painted masks), the bonnet mounting stack per the easy-e IOM
Figure 8 (bonnet neck, yoke locknut, packing follower, packing flange,
studs, flange nuts — Belleville live-load stack appears for ENVIRO-SEAL
packing selections), and a deliberately muted non-cutaway valve silhouette.
Physics: packing friction is hysteretic (band widens with packing type,
CVH 6th ed. 5.18 ordering; psi values representative); coupled, the plug
seats at exactly rated travel; off the valve, over-stroke ends at the
measured plate-on-casing stop. A travel-mark annotation layer (?mark=1)
shows Franz's field method: mark the valve stem 3/4 in below the actuator
stem bottom with the plug seated, actuate down to the mark (within 1/16 in)
— travel is set off the measurement, never off bench-set pressure.

## Planned next steps

- Scripted playback mode driven by `narration/output/657/timing.json` —
  one animation step per narration segment, then screen-record for the
  micro-learning video.
