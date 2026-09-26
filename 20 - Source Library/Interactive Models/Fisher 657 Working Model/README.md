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

## End-to-end pipeline (manual figure -> working model)

The complete chain,each stage's tool and authority:

1. **Source figure** — 657 IOM (`20 - Source Library/Equipment Manuals/
   Actuators/instruction-manual-fisher-657-...-11746662.pdf`), page 24:
   Figure 6 cross-section; the parts key is "Actuator Assembly" on p23.
2. **Extract at 600 DPI** — `pdftoppm -png -r 600 -f 24 -l 24 <pdf> p24`
   (Poppler; see the reading-source-library-pdfs memory for the local
   install path). Output: `ground-truth/p24-24.png`.
3. **Crop to the figure body** — `pipeline/preprocess.py` s0 stage,
   `BBOX = (1820, 1050, 3300, 3300)` on the 600-DPI page. Output:
   `ground-truth/s0_crop.png` (1480x2250). THIS CROP DEFINES THE MASTER
   COORDINATE FRAME — every mask, path, and model coordinate downstream
   lives in it. Never re-crop.
4. **Franz hand-paints the part masks** (the step that made everything
   work): flood-fill every part region in a distinct flat color over the
   crop, any editor (Snipping Tool worked). No prescribed palette —
   actual colors are DISCOVERED downstream, so editor palette drift
   doesn't matter. Output: `ground-truth/s0_crop_painted.png` (immutable
   ground truth).
5. **Masks from paint** — `pipeline/masks-from-paint.py`: quantized-
   histogram color discovery, nearest-color assignment (cap 45), 5px
   grow into linework, per-mask hole fill. Output: `pipeline/parts2/`.
6. **Trace / measure** — `pipeline/refine2.py`: per-part contours,
   ortho-snap, exact diaphragm centerline + casing floor profile
   (-> `refined2-parts.js`); parametric hardware (spring, seat,
   adjuster, scale...) is generated in the build from mask-measured
   dimensions, adopted with Franz's sign-off.
7. **Declared-geometry finish** (per part, Franz's grammar + binding
   audit — see the method section below): `pipeline/centerline-upper2.py`
   + `pipeline/assemble-upper3.py` (upper casing done; lower casing and
   yoke queued).
8. **Model build** — `pipeline/build_refined2.py` assembles the
   interactive HTML (physics, playback choreography, narration timing
   from `narration/output/657/timing.json`).
9. **Publish** — artifact f7448bd3 (same URL every republish); vault copy
   `657-working-model.html`.

Human gates: step 4 (Franz paints), step 7's grammar declaration and
per-part sign-off, and review of every visual change before publish.

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

## Declared-geometry shell reconstruction (method, proven 2026-09-26)

For casting shells, edge finish comes from CONSTRUCTED geometry, not
smoothing. Franz declares the part's grammar (e.g. "constant thickness
from the lip until the geometry changes toward center"); the pipeline
then: (1) extracts the shell CENTERLINE as the distance-transform ridge
of the painted mask, excluding feature zones, (2) fits one half and
mirrors it (symmetry by construction, horizontal tangent at CX),
(3) offsets +-t/2 with t measured from the paint, (4) stops the band at
the declared feature boundaries and splices the original approved trace
for the feature spans (travel stops, boss), (5) blends seams flat and
tangent, per-side measured heights symmetrized to the thin side, edits
guarded to the intended edge only, and (6) runs a BINDING audit of the
painted contour against the result — beyond-allowance deviations reject
the build outright. Scripts: pipeline/centerline-upper2.py +
pipeline/assemble-upper3.py (upper casing, approved). Same recipe planned
for the lower casing and the yoke's curved regions. Four rounds of
generic smoothing/fairing preceded this and were rejected; the archive
lives in the session scratchpad, not here.

## Planned next steps

- Scripted playback mode driven by `narration/output/657/timing.json` —
  one animation step per narration segment, then screen-record for the
  micro-learning video.
