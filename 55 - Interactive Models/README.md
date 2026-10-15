# 55 - Interactive Models

Exact-geometry models of real equipment that a learner can operate. Traced from
instruction-manual figures, not illustrated.

Moved out of `20 - Source Library` on 2026-10-12: a library holds documents,
and these are products with their own build pipelines.

| Model | State |
| --- | --- |
| `Fisher 657 Working Model` | Built. Interactive cutaway of the 657 (Size 30) diaphragm actuator with real bench-set physics |

## The rule that governs everything here

**Geometry is traced, never drawn.** Every casting comes from the source figure
point-for-point, via Franz's hand-painted part masks, which are immutable
ground truth. Animation deforms those exact point sets; it never substitutes a
parametric lookalike. Parametric parts (spring, seat, adjuster, scale) use
dimensions *measured from the masks* and are adopted only with explicit
sign-off.

Refinement is **per part, with sign-off** — never a wholesale pass.

## Before reusing any artwork from here

Read the model's own `README.md` first and find which file the pipeline says is
authoritative. The nearest-looking export is routinely a stale pre-refinement
pass — `657-cross-section.svg` is one commit from Sep 25 and has never been
touched since, while the working model has eight commits and the refinement
work landed *after* that SVG was written. Pulling the SVG because it looked
like clean vector artwork is a mistake that has already been made once.
