---
title: BROKEN — Pro Cutaway panel 5 (the run through a valve)
type: handoff
tags:
  - project
  - handoff
  - process-core
  - broken
updated: 2026-10-14
status: BROKEN — rejected by Franz 2026-10-14. Do not build on it.
---

# BROKEN — Pro Cutaway panel 5

**Read this before touching `45 - Process Core/lab/render-cutaway.js`.**

Franz's verdict on the state this was left in, verbatim:

> "Ok. That is completely broken and terrible. We're going to stop right here
> though."

The work below **passes every automated check and is still wrong.** That is the
single most important fact on this page. `node test.js` reports 1086 green
across 18 layers, LPE builds 90 green, and the panel it produces was rejected on
sight. Do not take the suite as evidence the panel works — it never looked at
the panel. See hard rule 5 in the root `CLAUDE.md`.

This handoff was written by the assistant that broke it, at Franz's request,
before a migration to an enterprise Claude account. He has not reviewed the
reasoning below; treat it as a defendant's statement, not a verdict.

---

## What was asked for

Franz's own words, in order, across the session:

1. "I want a straight run in pro cutaway to go into and the out of the valve"
2. "build the cutaway panel"
3. After the first attempt was rejected:
   > "I asked for the Straight Run, panel 1 in pro cutaway. To show itself
   > moving through a valve. You're not doing that. You're taking another valve
   > panel and using those markers and that is not what I asked. Here is another
   > way to put it. **Take panel 1, duplicate it, but have it move through a
   > valve. That means the pipe and the markers and the physics inside panel 1
   > will move thought the valve geometry and then out of it.**"

And the framing for the whole exercise:

> "You are not ready to continue working on the cascade. I want the pro cutaway
> to build what I want and what I've been asking for in it so you can use it to
> build the plant view from it."

So: **Pro Cutaway is the proving ground. The cascade and the plant view are
downstream of getting this right, and are explicitly on hold.**

---

## State on disk

Branch `ed-archetype-swap-wip`. **Nothing from this session is committed.**

| File | Change |
|---|---|
| `45 - Process Core/src/plant.js` | added `route()` — emits a `geometry.flowPath`-shaped object composed line → component → line, plus an axial-projection option |
| `45 - Process Core/test/plant.test.js` | +19 checks for `route()` (29 → 48) |
| `45 - Process Core/skins/procutaway.js` | two additive options on `draw()`: `ground: false` and `openSpan` |
| `45 - Process Core/lab/render-cutaway.js` | panel 5 rewritten; `fieldFor()` gained a `spacing` argument; `c5` canvas 560 → 420 |
| `45 - Process Core/lab/cutaway/index.html` | build output |
| `50 - Lunar Process Engineer/vendor/process-core/*` | re-vendored (3 files) — required after any `src/` change |

Also untracked, unrelated to this work:

- `55 - Interactive Models/Fisher 657 Working Model/Script/…​.docx` — real content, worth committing.
- `LPE 😎.mp4` (6.6 MB) — **do not commit.** It is already published as
  `docs/lpe.mp4` on `main`. Gitignore it or leave it untracked.

---

## What the code currently does

Panel 1 is built on a chain that already works:

```
geometry.flowPath  →  procutaway.plan  →  flowfield.field  →  procutaway.markers  →  procutaway.draw
```

One path, one field, one marker population, with pipe friction and the
laminar/turbulent profile across the bore already in it.

The thing that never existed was **a flow path with a component on it**, which
is why every previous attempt drew a second system beside the first and tried to
reconcile them at the flange. `plant.route()` was added to close that: it
returns `{units, path, length, reaches, features, component, run, projected}` —
the same shape `geometry.flowPath` returns — so nothing downstream had to learn
anything new.

Two decisions inside it that a successor should either keep or deliberately
overturn, not stumble into:

- **Area arrives as an equivalent bore.** A flow path states a bore and
  everything below reads area back off it as a circle. A valve passage is not
  round anywhere but its end connections, so `route` writes the diameter of the
  circle *of the same area*. Continuity is then exact.
- **`straight` option.** Default `true` projects the component's stations onto
  the axis (keep `x`, drop `y`, area untouched). Panel 5 currently passes
  `straight: false` to get the real internal route, because the valve's own
  cutaway is drawn on the same canvas and a straight tube over a real cavity was
  incoherent.

Panel 5 then draws, in this order: valve cutaway → pipe + markers over it with
`ground: false` and `openSpan` set to the component's span so the pipe wall
stops at the flanges.

Numbers it reports: 114.5 in path, 900 reaches, line 7.9 ft/s, narrowest 3.29 in
equivalent bore at 73 ft/s (9× line), at 1938 gpm and 50% travel.

---

## Two real bugs that were found and fixed along the way

These are worth keeping regardless of what happens to the panel.

1. **`flowfield.field` undersamples a component.** Default spacing is
   `length/200`. On a 114 in run that is 0.54 in, and the EWT cage window is a
   dip roughly 0.3 in wide — so the field stepped over the narrowest point in
   the whole system and reported the trim passing at line velocity. Panel 5 now
   passes an explicit `spacing`. **Any consumer putting a component on a path
   has this bug unless it does the same.**
2. **Canvas/layout mismatch.** `c5` was `height="560"` while `draw` was laying
   out for 340, so the drawing occupied the top two-thirds with dead ground
   below. This also invalidated several pixel measurements taken before it was
   found — a warning about trusting your own instrumentation.

---

## Approaches already tried and rejected — do not repeat these

In rough order. Each was rejected by Franz, usually on sight.

1. **A second valve-centred system with pipe stubs grafted on.**
   `plant.wetted()` + `flowfield.solveField2D` over a valve plus stubs, drawn
   with its own marker population. This is the same shape as the cascade.
   Rejected: *"You're taking another valve panel and using those markers and
   that is not what I asked."*
2. **Two marker populations, one for pipe and one for valve, overlaid.**
   Rejected hard and repeatedly: *"You overlayed the valve flow again. That is
   illegal don't do it again."* and *"If you have 2 remove 1 now."* There must
   be exactly **one** population.
3. **Seeding markers directly into the valve's chambers.** Same objection.
4. **Recirculation eddies** added to make the chambers look full. Rejected as
   *"a fudge"* — *"the recirc was weak, looked bad and basically disingenuous."*
5. **Field-inside / continuity-outside**, reconciled at the face. This is the
   architecture that produced every seam. Franz caught a proposal to return to
   it: *"You're already talking about going back to the cascade and using what
   didn't work. I'm very skeptical of that ask."*
6. **A straight marker band painted over the valve's real cutaway** (panel 5, an
   earlier revision this session). Incoherent: the valve drawing shows the real
   S-route and the markers travelled a fake straight tube through it.

---

## What is actually wrong with the current panel

Honest answer: **not fully diagnosed.** Franz rejected it as a whole and stopped
the session, so there is no itemised defect list from him. What the assistant
could see, and what it had already flagged as unresolved when the session
stopped:

- Whether the markers inside the valve read as going **through the cage windows
  and down through the seat**, or merely as a blur inside the body. This was the
  open question put to Franz, and his answer was that the whole thing is broken.
- The throat is axially tiny — the cage-window dip is ~0.3 in on a 114 in path,
  about 3 px at panel scale — so the acceleration happens over almost no
  distance. At true speed a marker is through the trim inside one frame. A
  declared 0.15× slowing was added to compensate; it is a reading aid, not a
  fix for the underlying framing problem.
- The panel is at roughly 9.3 px/in, so the whole valve is ~260 px wide. That
  may simply be too small to show trim behaviour at all, which would mean the
  framing — not the physics — is the thing to change.

**A successor's first job is to get Franz to itemise what is wrong before
writing any code.** This session's largest failure was iterating on guesses.

---

## Standing constraints from Franz (still in force)

- **"WE ARE DOING VISUALIZATION here. If we can calculate real numbers, then we
  can provide them, but the visualization layer here does not have to exact
  those numbers."**
- **One marker population. Never two. Never an overlay.**
- Never hand-edit `vendor/process-core/` — edit `src/`, `node test.js`, then
  `node vendor.js "../50 - Lunar Process Engineer"`.
- Source files are **LF**, not CRLF.
- **Commit or push only when asked.**
- Do not use the Agent tool, workflows, or deep research unless asked.
- Fishweb/eDocs is Emerson's intranet: stay narrowly on task, never download
  anything without a go-ahead for that specific file, use the page's own Quick
  Search, back out if sales-order records surface, do not authenticate.
- Copyrighted standards (IEC 60534-8-3, ISA-5.5, ASME B16.9/B16.11) are **never**
  vendored — clause ids, locators and coefficients only.
- Franz has an advanced degree in English Literature, not engineering. Pitch
  explanations accordingly and never perform understanding you do not have.
  He has also asked not to be talked down to — be clear, not simplified.

---

## Commands

```
cd "45 - Process Core"
node test.js                                      # 1086 checks, 18 layers
node lab/render-cutaway.js                        # builds lab/cutaway/index.html
node vendor.js "../50 - Lunar Process Engineer"   # after ANY src/ change

cd "50 - Lunar Process Engineer"
node build.js                                     # 90 checks, verifies the vendor lock
```

The cutaway page must be served over HTTP, not opened as `file://`. There is a
local server on port 8099 serving `45 - Process Core/lab/` in this session's
setup; `05 - Home/serve.js` is the vault's general one.

---

## If the next instance decides to revert

The Process Core changes are self-contained and the vendored copies follow from
them. Reverting these five files plus the three vendored ones returns panel 5 to
its pre-session state — which was *also* rejected, so reverting is not a fix,
only a clean floor.

Worth keeping even on a revert: the `flowfield.field` undersampling finding, and
`plant.route()` itself, which is sound and tested independently of the panel
that consumes it.
