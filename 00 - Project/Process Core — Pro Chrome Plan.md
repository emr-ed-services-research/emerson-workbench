# Process Core — Pro Chrome Plan

**Status:** rev 3, 2026-10-10. Approved. **Phases 0, 1, 2 and 3 BUILT.**
Phase 4 (valve geometry) is next and not started. It is the high-risk one.
**Companion to:** `Process Core — Flow Lab Plan.md` (Phases 0,1,2,4,5 BUILT; 3 blocked on hardware).

---

## What Pro Chrome is

A **see-inside cutaway view** of piping and valves that shows real flow dynamics,
magnified or exaggerated where that is what makes them legible, drawn with
particle physics.

It is **not** `45 - Process Core/skins/modern.js`. That skin never calls
phys-view at all: it paints flow-coloured lines and then hands off to
`schem.draw` for the symbols, so it is a coloured, animated schem-view and
nothing more. Phys-view itself contains zero references to equipment and draws
piping only, which is why a valve never appears in it.

The design precedent is LPE's `Cutaway` (`50 - Lunar Process Engineer/engine.js`)
— Prandtl 1/7-power turbulent profile, Poiseuille laminar, blended across the
Re 2300-4000 transition, envelope plotted from the same profile that carries
the markers. Its own comment states the doctrine:

> markers are "true in proportion but exaggerated in magnitude, because a pipe
> running at a believable rate shows the eye nothing"

But LPE's Cutaway is a straight magnified **pipe** slice. It does not show a
valve interior either. Pro Chrome is new work, not a port, and LPE is cited
here as a **design precedent only** — never as the reference for what is
correct. The core builds it standalone; LPE adopts later if it wants to.

---

## The governing rule

Exaggeration is allowed. Invention is not. The way those stay compatible:

> **Every magnification must be a named, separable transform applied to a true
> quantity — never an invented quantity.**

A particle moving 40x too fast is honest if the 40x is declared and the
*relative* speeds are right. A chamber drawn a shape nobody measured is not
honest unless the drawing says the contour is a convention.

LPE already does this correctly — it labels its temperature scaling
"illustrative, not calibrated to a measured diffusion coefficient." That
caveat travels with the model.

---

## What the globe valve actually is

Established 2026-10-10 against Control Valve Handbook ch3 and Figures 3.4 /
3.37, with corrections from Franz.

**Body.** Two **saucer-shaped chambers**, stacked, with the **port** as the only
opening between them. The inlet enters a flange at mid-height and the cavity
sweeps up into a dish surrounding the cage; the second dish opens downward
under the port and sweeps out to the other flange. The two dishes are offset —
inlet high, outlet low — so the cavity in section reads as a flattened **S**.
Nothing is prismatic: every passage is swept and flared, narrow at the flange
bore and broadening into the dish. In plan the chambers are **wider than the
line bore** — that is what makes room for the saucers.

**Flow path.** Handbook ch3.1.1.3, verbatim: for most trim designs the standard
direction is *"in through the cage openings and down through the seat ring"*.
Noise attenuation trim is flow **up**. So flow direction is an input, not a
constant.

**Cage.** Three jobs, and only one of them is flow: it characterises flow, it
**guides the plug into its seat**, and it is the **load path** — the bonnet
tightens down against the cage, which pushes down on and retains the seat ring.
That is why Figure 3.37 shows solid bands above and below the windows. It is
also why every measured width profile droops in the last travel band: the
window must finish before the plug does.

**Plug.** Balanced plugs carry holes through the head plus a pressure-energized
**U-seal** at the plug OD against the cage bore. The U opens toward the
high-pressure side so pressure closes it; **flow-up reverses the U's
orientation**. Unbalanced plugs are solid and need more actuator thrust.

**Two archetypes, not one.** ED / ET / EW are **cage-characterised** — windows
in the cage. **EZ has a seat ring retainer, not a cage**: the plug is different
and the characteristic comes from the **bottom bevel of the plug**.

---

## The finding the plan rests on

The plug uncovers window from the bottom up, so open area at travel *t* is the
integral of the width profile:

```
Cv(t)  is proportional to  A(t)  =  SUM over windows of  INTEGRAL from 0 to t of w(h) dh
                                                   therefore   w(t)  ~  dCv/dt
```

**The window width profile is the derivative of the published Cv curve** — so
it is derivable from Catalog 12 for all 105 extracted valves rather than
invented. Measured 2026-10-10:

```
travel band        10   20   30   40   50   60   70   80   90  100
quick-opening     .87  .88  .89  .77  .65  .52  .36  .25  .19  .15   (28 cages)
linear            .76  .80  .86  .87  .87  .85  .79  .74  .63  .51   (35)
equal-percentage  .14  .12  .16  .26  .38  .54  .74  .88  .81  .67   (42)
```

Equal-percentage holds sd 0.06-0.09 across the first three bands over 42
cages of differing size and body. That is a real geometric family. Linear comes
out nearly flat (the constant-width rectangle); quick-opening is widest at the
bottom but scatters to sd 0.31, so it is a looser family.

**EZ's different mechanism shows in the same data.** Quick-opening:

```
EZ (retainer)     .84  .91  .73  .37  .16  .09  .05  .02  .02  .00   n=6
ED/EW (caged)     .88  .87  .93  .89  .79  .64  .45  .32  .24  .19   n=22
```

EZ saturates once the bevel clears the seat bore; caged trim keeps uncovering
window. Small sample, clear signature.

**Limit of the method:** the derivative gives the SUM of all window widths at a
height. Equal-percentage cages have **alternating window sizes**, and the
derivative cannot separate a large window from a small one. Count and
alternation must come from elsewhere — and a longitudinal section through an
alternating cage cuts a **large window on one side and a small one on the
other**, so the cutaway must be left-right asymmetric.

---

## Sourcing status

| Quantity | Source | Status |
|---|---|---|
| Flow topology, chamber arrangement | CVH ch3.1.1.3, Fig 3.4 | **sourced** |
| Face-to-face length | CVH 5.1.1-5.1.6 (per the ISA-75.08 series), mm + in | **sourced** |
| Port diameter | Catalog 12, mm + in | **sourced**, already in `valves.json` as `portIn` |
| Rated travel | Catalog 12, mm + in | **sourced**, already as `travelIn` |
| Cv at every 10% travel | Catalog 12 | **sourced**, 105 valves extracted |
| Window / bevel width profile | derived, dCv/dt | **derived + validated** |
| Stem diameter | ED IOM Table 5 | **sourced** |
| Seat leakage class | ANSI/FCI 70-2 | already in the trim layer |
| Window **count** and alternation | Fig 3.37 (observation); Fd per ISA-75.01.01 | **NOT sourced** |
| Body envelope — width, height | D100390X012 Fig 19/20, traced and registered | **sourced — 2026-10-11**, see below |
| Cast chamber contours | D100390X012 Fig 19/20, traced and registered | **sourced — 2026-10-11**, see below |

The valve-body IOMs give almost nothing: every one in the vault (ED/EAD,
ET/EAT, EZ, ES/EAS, 9500, Vee-Ball, 8580, V500) is an install/maintain/parts
manual. **There is no dimensioned cross-section in the vault.**

### The two convention rows closed, 2026-10-11

There is still no *dimensioned* cross-section. There is now a *registered*
one, which is enough, and the difference is worth stating: nobody printed a
number on these drawings, but the drawings turn out to be to scale, and a
drawing to scale plus one sourced length is a dimensioned drawing.

Figure 19 and both panels of Figure 20 of D100390X012 have been painted
part by part and segmented into per-part masks and polygons
(`45 - Process Core/trace/`, and its README for the method). Figure 20's
two panels are the same NPS 8 valve drawn twice, at different sizes on the
page, painted independently. **Every ratio of two dimensions agrees between
them**: plug outside diameter to face-to-face, 0.0%; cage outer, 0.4%; body
height, 0.7%; cage bore, 1.2%. Independent paintings of one valve cannot
agree to a fraction of a percent unless both drawings are to scale, so they
are.

**The class is determined by exclusion, not by matching.** The figure
caption states no pressure class, and an NPS 8 globe's face-to-face runs
21.38 in at CL150 to 24.12 at CL600 — a 12% spread that would otherwise sit
underneath everything built on top. But the port is 8.00 in for an ED NPS 8
in every class Catalog 12 lists, and the port has to fit inside the cage.
Scale the drawing to CL150 and the cage bore comes out 7.16 in; to CL300 and
it is 7.50. Both put an 8.00 in port inside a cage narrower than itself.
Only CL600 survives.

Anchored on face-to-face = 24.00 in, the two panels then read:

| | Fig 20-A | Fig 20-B | against |
| --- | --- | --- | --- |
| cage bore | 8.02 in | 8.12 in | 8.00 in port, sourced |
| plug outside diameter | 8.09 in | 8.09 in | — |
| **body height** | **18.04 in** | **17.92 in** | nothing — this is the new quantity |
| cage outer | 9.74 in | 9.70 in | — |

The port lands inside the cage in both, within about 1%, which is the check
the anchor was chosen to allow rather than to guarantee. One honest
blemish: on panel A the plug reads 8.09 in against a cage bore of 8.02, a
0.07 in inversion a real plug could not have. That is 4 px of tracing
error, it is within the spread of every other feature, and it is recorded
rather than averaged away.

**So `geometry.globeBody()` is no longer writing a convention.** Body
envelope and cast contours come off a registered drawing of the real
casting. What remains a convention is anything the figures do not show, and
that has to keep saying so.

`trace/register.py` recomputes all of the above from the masks.

---

## The phases

Ordered so a visible result arrives before the convention-heavy work, and so
the risky phase is entered with the method already proven.

### Phase 0 — close the cheap sourcing gaps  **[BUILT]**

- Promote `portIn` / `travelIn` from `lab/valves.json` into `catalogue/parts.json`
  as a real **valve class**, carrying as-printed mm and inch pairs so the
  existing load-time invariant checks them.
- Add face-to-face from CVH 5.1.1-5.1.6.
- Count windows off Figure 3.37 for the three ED 2-1/2 cages and record it as an
  **observation from a photograph**, labelled as such — not a measurement.
- Register entries for anything newly cited.

**Test:** the as-printed invariant holds for every new row; `check-standards.js`
green. **Gate:** none. **Risk:** low.

### Phase 1 — `trim.widthProfile()`  **[BUILT]**

Pure data, no drawing. Returns the normalized width profile from dCv/dt, plus
the declared archetype (cage-characterised or plug-characterised).

**Test:** equal-percentage profiles agree to the measured sd; EZ shows the
documented saturation signature against caged bodies; a profile is refused if
the curve is too coarse to differentiate. **Risk:** low — the work is done, it
needs packaging and tests.

### Phase 2 — the flow-field layer  **[BUILT]**

A **new layer between dynamics and chrome**. This is the split LPE does not
have: `engine.js` mixes velocity profile with particle sizing and jitter, and
that is what makes it unverifiable.

- V(s) from continuity along an existing `flowPath`: Q / A(s)
- across-bore profile: Prandtl 1/7-power turbulent, Poiseuille laminar
- blended across Re 2300-4000 rather than snapped
- returns velocity at (s, lane); magnification is a **separate declared
  transform**, not baked in

Proven on the **pipe and elbow** geometry that already exists — no valve needed.

**Test:** the profile integrates back to the mean velocity; peak ratios match
the published correlations (1.22x centreline turbulent, 2x laminar); the blend
is continuous across the transition; mass is conserved through a contraction.
Register entries for Prandtl and Poiseuille. **Risk:** low-medium.

### Phase 3 — Pro Chrome v1, on a pipe run  **[BUILT]**

First visible result. A cutaway of pipe and elbows with particles advecting
through the Phase 2 field. No valve.

**Test:** the chrome-layer test suite (`test/skins.test.js`, which now exists)
extended to the new skin; visual inspection **naming the view inspected**.
**Why here:** proves the particle approach and the physics/appearance split
before committing to the hard geometry. If particles look wrong, that is
cheaper to find now.

### Phase 4 — valve geometry

The big one, and where invention pressure is highest.

- `geometry.globeBody()` — two saucer chambers, partition, port, offset S-path,
  body wider than the line
- `geometry.cage()` — windows from the Phase 1 profile, with count and
  alternation as **inputs**, producing the left-right asymmetric section
- `geometry.plug()` — balanced / unbalanced; balance holes; U-seal whose
  orientation follows flow direction
- `geometry.seatRing()` and the bonnet-cage-seat load path
- `geometry.plugBevel()` for the EZ archetype
- the valve's `flowPath`: reaches and features expressing in-radially,
  turn, down-through-seat

**Every convention declared in the file header, by name.** The body envelope and
cast contours are conventions; the port, travel, face-to-face and width profile
are not.

**Test:** the reference sheet draws them to scale; and the closed loop — the
flow area the geometry produces at each travel must reproduce the Cv curve it
was derived from. **Risk: high.** This is the phase to review before accepting.

### Phase 5 — Pro Chrome v2, the valve cutaway

Both archetypes, flow-up and flow-down, with the field running through the
S-path.

**Test:** visual, naming the view; plus the field's continuity through the port.

### Phase 6 — the FCC loop end to end

Point it at the refinery service already built in `lab/loop-fcc.js` and replace
panels 2 and 3 of `lab/render/index.html`.

---

## What phases 0 to 2 actually delivered

**Phase 0.** 105 Catalog 12 valves are now a real catalogue class, each
carrying port diameter and rated travel with the millimetre-and-inch pair the
page prints, plus the Cv curve, FL, flow direction where stated, and
`characterisedBy` (cage or plug). 82 flanged-globe face-to-face rows from CVH
5.1.1. Three defects were fixed at their source rather than patched: the
extractor was discarding the millimetre half it had to find anyway; a
typographic hyphen (U+2010) had split `1-1/2` into two sizes; and the
catalogue's dual-printed check only ever read the inch, so a transposed
millimetre would have sat there forever.

That check now compares each half against the other **using each half's own
printed precision** rather than a flat percentage — because Catalog 12 prints
"29 mm (1.125 in)" and 1.125 in is really 28.575 mm. A tolerance tight enough
to catch a transposition rejects that honest rounding; one loose enough to
accept it catches nothing. Reading both halves as intervals settles it.

Two **published typos** in the Handbook's own face-to-face table were caught
by that check and are DROPPED rather than corrected: NPS 2 Class 600 RTJ
prints 284 mm beside 11.37 in, and NPS 14 Class 600 RTJ prints 475 mm beside
38.37 in. Both were confirmed by rendering the page image. Writing the
corrected value would replace a printed number with a guessed one.

Also found and fixed: `ISA-51.1` was cited in five places across the
instrument layer with **no register entry at all**, and had been failing the
check unnoticed.

**Phase 1.** `trim.widthProfile()` recovers the shape of the opening from
dCv/dt, and is graded against Figure 3.37: equal-percentage comes out as the
trumpet, linear near-flat, quick-opening widest at the bottom. 42
equal-percentage cages agree to an sd of 0.06-0.09 in the early bands. The EZ
saturation signature is asserted as the plug-characterised archetype.

**Phase 2.** A new `flow-field` layer sits between dynamics and chrome.
Prandtl 1/7-power and Hagen-Poiseuille, blended across Re 2300-4000, both
normalised so their area-weighted mean is exactly 1 — tested, because a
profile that does not preserve the mean shows more fluid than the solver said
was flowing. Velocity along the path is continuity against the geometry
layer's own bores: through a socket-weld elbow the fluid speeds up by exactly
1.7887x, the area ratio. Magnification is `magnified(field, factor, why)`,
which **refuses without a stated reason** — an exaggeration nobody declared
is just a wrong number. Both correlations have register entries recording
their limits.

634 checks across 13 layers. LPE re-vendored, 90 checks, unchanged.

### What phase 3 delivered, and the assumption it broke

`skins/procutaway.js` (`@layer chrome`) and `lab/cutaway/index.html`: a
straight NPS 10 run, a socket-weld elbow, and the same line at Re 900 / 3150 /
60000 side by side. Markers are advected through the Phase 2 field; the
envelope is plotted from the **same** profile that carries them, so the two
cannot disagree.

The architectural seam is asserted as a test: the skin contains **no velocity
profile, no Reynolds threshold and no correlation**. That is the seam LPE does
not have, and it is why its cutaway cannot be graded.

**The assumption that broke.** The page was first written with a 40x speedup,
inherited from the doctrine that "a pipe running at a believable rate shows
the eye nothing". That is true of a grow bay at 2 gpm and **false of a
refinery line**: NPS 10 at 3735 gpm runs 15.2 ft/s, which at cutaway scale
crosses the frame in under a second unaided. At 40x every marker jumped 78% of
the run per frame -- teleporting, not flowing. Magnification is now **off by
default**, offered at 8x for the slow end of the slider. The exaggeration a
teaching bench needs is not the exaggeration an industrial line needs, and
assuming otherwise was the consumer being treated as the reference again.

Three other defects found by looking at the thing rather than at the tests:

- **A streak tied to the frame rate** made the same flow read differently on a
  slow machine. The streak is now an *exposure time* -- distance travelled in a
  fixed slice of seconds -- so its length is the speed, and long-down-the-
  middle / stubs-at-the-wall is legible in a still frame.
- **Streaks cut the corner.** Drawn as a straight chord, a streak spanning the
  elbow's square bend went through the outside wall. It now follows the
  centreline as a polyline.
- **A single Euler step** let a marker jump over the station where the bore
  changes, picking up the velocity on the far side of a contraction it never
  passed through. Stepping is substepped to a fraction of the run.
- **A theme check that could never fire**: `theme()` merged defaults first and
  then looked for missing roles. A test caught it accepting a one-colour
  theme. All-or-none now, matching phys-view.

Measured centre-to-wall streak ratio, which is what the eye compares:
**3.60x laminar, 2.17x at mid-transition, 1.31x turbulent.**

657 checks across 13 layers. LPE re-vendored at 90, unchanged.

---

## Open questions, carried not buried

1. **Body envelope.** Width and height are unsourced. Is there a dimensional
   bulletin? Otherwise it is a declared convention and the drawing says so.
2. **Window count and alternation.** *Partly answered in Phase 0.* Figure 3.37
   was rendered at 1100 dpi and examined per cage. What it settles:

   - **Equal-percentage**: the window is a V / trumpet — a narrow pointed
     bottom flaring to a wide, roughly rectangular top. This is what the
     Cv derivative predicted independently, so two unrelated routes agree.
     **At least two distinct window profiles are visible on the same cage**,
     confirming the alternating sizes.
   - **Linear**: near-rectangular windows with filleted bottom corners,
     uniform, and more of them. The apparent taper at low magnification was
     the fillet plus the curvature of the cylinder. Consistent with the
     derivative's near-flat profile.
   - **Quick-opening**: large plain rectangular openings, close to full
     height of the window band.
   - **All three**: a solid band above the windows, stamped with the size and
     characteristic, and a solid rim below. That is the bonnet load path and
     the seat-ring bearing face — and it is why every measured width profile
     droops in the last travel band.

   What it does **not** settle: the **count**. A photograph of a cylinder shows
   only the near ~180°, and perspective makes the far side ambiguous. No count
   is recorded, because a guessed one would set the absolute scale of every
   derived window width. Fd from ISA-75.01.01 remains the route — the register
   says it has been read to the **title page only** and is not on disk; the
   2007 revision is readable through eDocs (Information Center > Standards >
   ISA > Control Valves, via Info page > Revision History). Needs VPN;
   Franz's session to drive.
3. **The 3D problem.** Inlet flow converges radially from all sides into an
   annular chamber. A single centreline is a fiction there. It only draws
   cleanly because a cutaway *is* a longitudinal section, where that
   convergence flattens to arrows arriving from both left and right.
4. **Absolute scale of the derivative.** The profile's shape is solid; its
   absolute width needs the window count, and A(100%) for a balanced cage-guided
   plug is the total window area, **not** the port area. The two must not be
   quietly equated.
