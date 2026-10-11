# Valve body trace — what this is for and what it needs from Franz

The Process Core draws every globe valve from **one** traced body: an EWT
NPS 10x8, Figure 24 of D100399X012, scaled to each valve by its published
face-to-face. That is wrong in two measurable ways and both show on screen.

**It is the wrong shape for most valves.** The traced figure's bore is
0.323 of its face-to-face. Real valves run 0.117 to 0.357, and the ED
NPS 4 in FIC-101 is 0.278 — so the casting is drawn too fat for its
length, and on the NPS 1-1/2 it was drawn nearly twice too fat.

**Its trim column is short.** A shut EWT 10x8 has 2.49 in between the top
of its plug and the top of its cage, against a rated travel of 3 in. The
archetype cannot stroke its own valve, let alone a valve with a higher
travel-to-length ratio: the ED NPS 4 gets 1.12 in of a rated 2. Until
now the actuator stroked the full rating over a plug that stroked half
of it, and the assembly came apart on screen as the slider moved.

---

## The source, and why it is better than what we have

`20 - Source Library/Equipment Manuals/Valve Bodies/d100390x012.pdf` —
the **ED and EAD** instruction manual, February 2026. The ED is the
family FIC-101 actually uses; the EWT we trace today is a different
family and a different flow path.

Two full sections in it, at opposite ends of the size range:

| File | Source | What it is |
| --- | --- | --- |
| `ground-truth/ed-fig19-full-capacity-ED.png` | Figure 19, printed p.43 (PDF p.45), drawing 30A9542-F | Standard NPS 1 through 6, full-capacity ED with optional drain plug. Bore is about 0.146 of face-to-face — the SMALL end |
| `ground-truth/ed-fig20-nps8-A.png` | Figure 20, printed p.44 (PDF p.46) | NPS 8 ED with graphite piston ring. The LARGE end, and the clearer drawing of the two |
| `ground-truth/ed-fig20-nps8-B.png` | Figure 20, second panel | typical multiple piston-ring assembly |

They are **not** page rasterisations. The PDF carries each figure as its
own embedded 1-bit CCITT stencil at 320–351 ppi, so they came out as
clean black-on-white line art with no anti-aliasing and no JPEG mush —
pdfimages, not pdftoppm. Extracted at native resolution and doubled with
nearest-neighbour so the strokes stay crisp to paint over. Nothing has
been resampled or smoothed.

TWO SIZES OF THE SAME FAMILY IS THE POINT. One trace can only ever be
stretched. Two, at opposite ends, is the minimum needed to tell what
scales with size from what stays constant — which is what a body built
from published dimensions needs in order to be honest rather than
invented.

---

## What Franz paints

### Scribble, do not trace

These figures are HATCHED sections, not the shaded art the 657 was
painted over, so a flood fill would catch one thin stripe between two
hatch lines and nothing else. Do not fight that.

**Scribble roughly inside each part with the Brush, in the colour from
the table below. Stay inside it. Ignore the edges entirely.**

The paint says WHICH part a region belongs to; the drawing's own
linework says where that part ENDS. The pipeline cuts the line art
into every closed cell it contains — each hatch stripe is its own cell
— and assigns each cell to whichever colour covers most of it, so the
boundary comes out pixel-exact off the engineering drawing rather than
off a brush stroke. Anti-aliasing at the edge of a stroke does not
matter; a stroke that crosses into the neighbouring part does, because
then that part's cells vote the wrong way.

Save as PNG, beside the original, as `<name>-painted.png`.

### The colours

MS Paint's default palette, so there is nothing to mix or match. The
exact values are below only so the table is unambiguous — pick the
swatch by name, the pipeline discovers the colours by nearest match
and does not care about drift.

| # | Part | Paint swatch | Hex |
| --- | --- | --- | --- |
| 1 | **body casting** — flanges included, both sides | Red | `#ED1C24` |
| 2 | **bonnet** — the casting above the body joint | Orange | `#FF7F27` |
| 3 | **cage** — the cylinder the plug slides in | Turquoise | `#00A2E8` |
| 4 | **plug** — head and skirt | Yellow | `#FFF200` |
| 5 | **valve stem** — the rod above the plug | Purple | `#A349A4` |
| 6 | **seat ring** | Green | `#22B14C` |
| 7 | **packing** — the stack in the bonnet bore | Rose | `#FFAEC9` |
| 8 | **bolting** — studs, nuts, packing flange | Indigo | `#3F48CC` |
| 9 | **drain plug** | Brown | `#B97A57` |

Black and white are not on the list on purpose: black is the linework
and white is everything that is NOT a part. Whatever is inside the
casting and left white is fluid, which is most of the useful area and
none of the work.

Grey, dark red, gold, light yellow, lime, light turquoise, blue-grey
and lavender are unused and free for anything that turns out to need
its own colour — a gasket, a piston ring, a seal. Say which and it
gets a row.

### Old notes on the parts

The same method as the 657 Working Model, and for the same reason: a
person deciding where one part ends and the next begins is the step that
made that model work. Flood-fill each region below in a **distinct flat
colour** — any editor, any palette, the colours are discovered
downstream so drift does not matter. Save beside the original as
`<name>-painted.png`.

On **Figure 19** (`ed-fig19-full-capacity-ED.png`) and, if you have the
patience for both, **Figure 20A** (`ed-fig20-nps8-A.png`):

1. **body casting** — everything hatched that is the body itself,
   flanges included, both sides of the centreline
2. **bonnet** — the casting above the body joint
3. **cage** — the cylinder the plug slides in
4. **plug** — head and skirt, one colour
5. **valve stem** — the rod above the plug
6. **seat ring**
7. **packing** — the stack in the bonnet bore
8. **bolting** — studs, nuts, the packing flange
9. **drain plug**, if you want it

The two chambers come free: whatever is inside the casting and is not
painted is fluid.

**Leave the callout circles, leader lines and the centreline dash-dot
unpainted.** They are the only things in the frame that are not the
valve, and leaving them out is cheaper than teaching a script to.

If you know the nominal size Figure 19 is drafted at, say so — the
figure is captioned for NPS 1 through 6 and measures about 0.146
bore-to-face-to-face, which puts it near NPS 1 or 1-1/4. Knowing it
turns every proportion in the drawing into a dimension.

---

## What happens to it

`masks-from-paint.py` and `refine2.py` in the 657 pipeline already do
the work — colour discovery, nearest-colour assignment, per-mask hole
fill, contour, ortho-snap, corner-preserving Chaikin. They are written
against that folder's paths and will be adapted rather than rewritten.

Then the real question, which is Franz's call and is laid out in the
message that came with this file: whether the core keeps picking the
nearest of two archetypes, or whether two traces are enough to build a
body from the published dimensions — face-to-face, bore, port, travel,
stem, yoke boss, flange dimensions from ASME B16.5 — with a declared
casting grammar filling the space between them.

The second is the one that makes every size right instead of two sizes
right and the rest stretched. It needs two traces to be honest, which
is why this folder has two.

---

## A provenance error, found while setting this up

`geometry.js` says the archetype came from **"Figure 24 of D100399X012,
the Fisher EW instruction manual."** That document is cited in nine
places across the core and **is not in the vault**. No PDF, no file,
no Standards Register entry. The easy-e manuals we hold are ED/EAD
(D100390), ES/EAS (D100397), ET (D100398) and EZ (D100401). There is
no EW.

The figure the trace actually matches is
`20 - Source Library/Handbooks & Sourcebooks/Industry Specific
Sourcebooks/Control Valve Sourcebook - Oil & Gas — extracted-figures/
ch11-fig5-nps10-24-ewt-ewd-cutaway.png` — **Figure 11-5, drawing
W6022-2, "NPS 10-24 EWT or EWD"**. Copied here as
`ground-truth/ewt-fig11-5-current-archetype-source.png` so the claim
can be checked rather than taken.

Two things follow.

**The citation is wrong and has to be corrected** wherever it appears,
to the sourcebook figure that is really behind the shape.

**It is a rendered cutaway, not a drafted section.** Shaded
illustration art is drawn to look right, not to be measured, which is
the most likely reason the trim column came out 2.49 in where the
rated travel is 3. A parts drawing with a drawing number is held to a
scale; a product illustration is not. That is the strongest single
argument for re-tracing from D100390X012, whose figures carry drawing
numbers (30A9542-F) and are line sections.

## Judging a trace

`node trace/compare.js` writes `trace/compare/index.html`: the source
figure with the current geometry drawn over it, registered on the
flange faces — the one dimension both agree about — with the source
and the overlay each toggleable. Serve it and look.

In overlay rather than side by side, because side by side hides the
errors that matter. A chamber half an inch too deep reads as "about
right" next to the original and is unmissable on top of it.
