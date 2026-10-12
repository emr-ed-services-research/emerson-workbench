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
| `ground-truth/ed-fig20-nps8-B.png` | Figure 20, second panel, drawing 43X2895-A | Typical multiple piston-ring assembly. **Rotated 180° after extraction — see below** |

They are **not** page rasterisations. The PDF carries each figure as its
own embedded 1-bit CCITT stencil at 320–351 ppi, so they came out as
clean black-on-white line art with no anti-aliasing and no JPEG mush —
pdfimages, not pdftoppm. Extracted at native resolution and doubled with
nearest-neighbour so the strokes stay crisp to paint over. Nothing has
been resampled or smoothed.

### Panel B came out upside down, and that is an extraction artifact

`pdfimages` pulls the stored bitmap and ignores the placement matrix the
page draws it with. Panel B's stencil is *stored* rotated 180° and the
PDF rotates it back when it prints, so the manual is right and the
extraction was not: the valve sat bonnet-down with every callout bubble
inverted.

The giveaway is the callouts. No manual prints its own part numbers
upside down, so an inverted drawing is never the drawing — it is always
the handling. And a flow-up ED is the same body entered from the other
flange, never a vertically mirrored one; the actuator is on top in every
real orientation.

Checked rather than assumed, three ways: the page rendered with
`pdftoppm` shows both panels upright; our A matches raw stencil 000 and
our B matches raw stencil 001 at an ink IoU of 1.000, so both files are
exactly what was embedded; and only 001 is stored inverted. The file
here has been rotated 180°, which for a 1-bit image is a pure
permutation of pixels — the ink count is identical before and after and
it round-trips exactly, so nothing was resampled.

Figure 19 and Figure 20-A were unaffected and are untouched.

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

**The Brush, not the Fill bucket, and this is the whole trick.** One
fill click lands in one closed cell, and in a hatched section one
closed cell is one stripe between two hatch lines. The body of
Figure 19 is something like a hundred of them. One brush stroke
dragged ACROSS the hatching crosses every stripe it passes through and
does all hundred at once, which is why the instruction is to scribble
rather than to click. Drag across the hatch lines, not along them.

A part the figure draws in exterior view rather than in section — the
cage and the plug, in Figure 19 — carries no hatching at all and is
one single open cell. Those take one stroke, but they still take one:
being unhatched does not make them fluid, and nothing can tell the
difference for you.

The paint says WHICH part a region belongs to; the drawing's own
linework says where that part ENDS. The pipeline cuts the line art
into every closed cell it contains — each hatch stripe is its own cell
— and assigns each cell to whichever colour covers most of it, so the
boundary comes out pixel-exact off the engineering drawing rather than
off a brush stroke. Anti-aliasing at the edge of a stroke does not
matter; a stroke that crosses into the neighbouring part does, because
then that part's cells vote the wrong way.

**Save as a NEW file** beside the original, as `<name>-painted.png`.
Do not save over the file in `ground-truth/` — that one is the
linework and it is the half of the input the paint cannot replace. The
first real paint came back saved in place, and 5.6% of the ink had
been painted over; it only cost nothing because the clean copy was
still in git. The step takes two files for exactly this reason.

### The colours

MS Paint's default palette, so there is nothing to mix or match.
**These hexes are exact and are checked.** An earlier version of this
table said the pipeline matched by nearest colour and so did not care
about drift; that was wrong and it cost a part. Light turquoise
`#99D9EA` is nearer to *white* than it is to turquoise `#00A2E8`, so a
cage painted with the neighbouring swatch came back not wrong but
**absent**, which reads exactly like having forgotten to paint it.
The step now matches within a tolerance and stops on any colour no row
claims, naming the hex and the pixel count.

This table is the live one — the hexes below are the ones in
`masks-from-paint.py`.

| # | Part | Paint swatch | Hex |
| --- | --- | --- | --- |
| 1 | **body casting** — flanges included, both sides | Red *or* dark red | `#ED1C24` / `#880015` |
| 2 | **bonnet** — the casting above the body joint | Orange | `#FF7F27` |
| 3 | **cage** — the cylinder the plug slides in | Turquoise *or* light turquoise | `#00A2E8` / `#99D9EA` |
| 4 | **plug** — head and skirt | Yellow | `#FFF200` |
| 5 | **valve stem** — the rod above the plug | Purple | `#A349A4` |
| 6 | **seat ring** | Green | `#22B14C` |
| 7 | **packing** — the stack in the bonnet bore | Rose | `#FFAEC9` |
| 8 | **bolting** — studs, nuts, packing flange | Indigo | `#3F48CC` |
| 9 | **small hardware** — drain plug, yoke locknut, spiral-wound and wire-mesh gaskets | Brown | `#B97A57` |
| 10 | **fluid** — every passage, bore and open chamber | Grey | `#C3C3C3` |

**Rows 1 and 3 accept either of two adjacent squares**, because both
have been used for the same part on different figures and the
difference means nothing. Everything else is one square exactly, and
a colour no row claims now stops the run by design, naming the hex and
the pixel count — see *If you grab the wrong square* below.

Row 9 is named for what it holds rather than for what was asked. Brown
was requested for the drain plug and used for the drain plug, the yoke
locknut and both gaskets — all small sealing and fastening hardware,
none of it on the list. They sit in different places, so they come
back as separate pieces of one mask and can be split by position later.

**Row 10 is new and it is not optional.** See *Paint the fluid* below.

Black and white stay off the list: black is the linework, white is
"nobody has said".

### Paint the fluid

Leaving the passages white was supposed to be free, since white means
"not a part" and the passages are most of the drawing. It is not free.
White is also what an **unpainted** cell looks like, so the void has no
voice, and anything that wanders into it wins by default.

Figure 19 was painted as one long continuous squiggle per part, and the
body's squiggle loops down through the open bore on its way from the
upper wall to the lower one. Nothing contradicted it, so 60 000 px of
flowing water came back as cast iron.

So: **one grey stroke down each passage, bore and open chamber.** It
costs almost nothing, it makes the void argue its own case, and it
hands the flow-field layer a fluid domain that was traced rather than
assumed.

And the rule the squiggle broke: **lift the brush when you cross a
void.** A stroke is a claim, and it claims everything it touches.

### If you grab the wrong square

Nothing bad happens and nothing is silently wrong — the run stops and
tells you which hex it did not recognise. Two ways to resolve it:
change the paint, or, if a whole figure was painted to a different
convention, declare that convention beside it.

### Declaring a different convention

A painted figure may sit beside `<painted>.map.json`:

```json
{
  "note": "seat and plug came out swapped on this figure",
  "colours": { "#FFF200": "seatRing", "#22B14C": "plug" }
}
```

Only the colours it names move, and only for that figure. This exists
because Figure 19 and Figure 20 came back with yellow and green meaning
opposite things — both paintings perfectly clear, neither agreeing with
the other, and no way to tell from one file what the other meant. The
map that was actually used is recorded in each mask set's
`_report.json`, so a mask can always be traced back to what its colours
were taken to mean.

## Where the three traces stand

All three figures are painted and segmented. Each mask set carries ten
masks — nine parts and the declared fluid — plus `_preview.png`,
`_whats-left.png` and `_paint-grey-here.png` for inspection.

| Figure | Masks | Hatched metal still unpainted | Notes |
| --- | --- | --- | --- |
| Fig 19 (`trace/masks`) | 10 | 1 456 px | Seat/plug colours swapped — declared in its `.map.json`. Upper stem cell refused: purple and grey both landed in it at 66/34, under the 70% share rule |
| Fig 20-A (`trace/masks-fig20A`) | 10 | 1 684 px | Two large cells refused as fluid-vs-body ties |
| Fig 20-B (`trace/masks-fig20B`) | 10 | 37 092 px | Grey ran the length of the stem, so B has no usable stem. 19 and A both do |

The refusals are the design working. A tie between two colours in one
cell is reported and left unassigned rather than settled by taking the
larger, and an unassigned cell is a hole somebody can see. A cell
silently handed to the wrong part is not.

## From masks to polygons

```
node/python trace/contours.py <lineart.png> <masksdir> [outdir]
   ->  contours.json, _contours.svg
```

One part, one or more rings, in the figure's own pixels with y down.
Outer rings counter-clockwise, holes clockwise, so even-odd and
non-zero fills agree and nothing downstream has to be told which
convention is in force. A part that genuinely appears as several
pieces — the two halves of a flange in section, the four pieces of
`hardware` — comes back as several rings rather than being merged.

**Simplification is measured.** Douglas-Peucker at 1.5 px, and then
the simplified rings are rasterised back and compared against the mask
they came from. The report prints the worst disagreement per part:
0.45–2.29% on Figure 19, with the structural parts (body, bonnet,
fluid) all under 0.7%. A tolerance that quietly ate a chamfer would
show up there as a number instead of being discovered much later in a
drawing nobody can account for.

**These are not dimensions.** There is no scale here, no inches, no
registration to a flange face — only the figure's own pixel grid, and
`contours.json` says so in its own `declared` field. Turning a traced
outline into real geometry is a separate step with its own sources,
and running the two together is exactly how a picture becomes a
measurement without anyone deciding that it should.

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
