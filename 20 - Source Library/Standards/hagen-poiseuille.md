---
title: Hagen-Poiseuille — Laminar Pipe Velocity Profile
type: standard
tags:
  - source-library
  - standards
standard-id: "Hagen-Poiseuille"
publisher: classical fluid mechanics — no publisher, no edition
holding: not-applicable
updated: 2026-10-10
used-by:
  - "00 - Project/Process Core — Pro Chrome Plan.md"
  - "45 - Process Core/lab/assembly/index.html"
  - "45 - Process Core/lab/cascade/index.html"
  - "45 - Process Core/lab/cutaway/index.html"
  - "45 - Process Core/lab/fic101/index.html"
  - "45 - Process Core/lab/loop/index.html"
  - "45 - Process Core/lab/render-cutaway.js"
  - "45 - Process Core/skins/procutaway.js"
  - "45 - Process Core/src/flowfield.js"
  - "45 - Process Core/test/flowfield.test.js"
  - "45 - Process Core/test/skins.test.js"
  - "50 - Lunar Process Engineer/engine.js"
  - "50 - Lunar Process Engineer/reference/cve-reference-rig.html"
  - "50 - Lunar Process Engineer/vendor/process-core/flowfield.js"
  - "50 - Lunar Process Engineer/vendor/process-core/skins/procutaway.js"
---

# Hagen-Poiseuille — Laminar Pipe Velocity Profile

**Publisher:** none. A classical, *derived* result of fluid mechanics,
registered here because the register's remit is every external source rather
than only standards-body documents.

**Holding:** `not-applicable` — there is no document to hold.

## What it says

For fully developed laminar flow of a Newtonian fluid in a circular pipe,
solving the Navier-Stokes equations gives a parabolic velocity profile:

```
u(r) / u_mean  =  2 (1 - (r/R)^2)
```

The centreline runs **exactly twice** the mean. Unlike the 1/7-power law
this is not a curve fit — it falls out of the equations, and the factor of
2 is exact.

## Why it is used here

`45 - Process Core/src/flowfield.js` blends this with the turbulent profile
so that a cutaway view shows the right shape at whatever Reynolds number the
flow is actually at. The laminar parabola is the visually distinctive case —
much more sharply peaked than the blunt turbulent profile — and showing the
difference is a teaching point the Lunar Process Engineer bench was built
around.

Its area-weighted mean is exactly 1 by construction, which together with the
normalised 1/7-power law is what lets the core assert that **any blend of the
two also has a mean of exactly 1**. That is the property making the blend
legitimate rather than merely smooth, and it is tested.

## Limits, stated

- **Laminar only.** Above roughly Re 2300 the flow is no longer laminar and
  this profile is simply the wrong one. The core treats Re 2300 as the lower
  edge of a transition band ending at 4000, and blends across it.
- **Fully developed.** An entrance length is required before the parabola
  establishes; the core ignores entrance effects and says so.
- **Newtonian, constant properties, no-slip at the wall.** All assumed.

## Why blend rather than switch

Laminar below 2300 and turbulent above 4000 leaves a real transition region
between them where the flow is genuinely part one and part the other.
Snapping between a parabola (peak 2.0) and a blunt 1/7-power (peak 1.2245)
the instant Reynolds crosses a threshold would step the centreline velocity
by 0.776 in a single frame — wrong as physics and unreadable as a picture.
The core's test asserts the centreline never steps by more than 0.01 per 10
Reynolds across that band.

## Related

`Prandtl 1/7-power` covers the turbulent case —
`20 - Source Library/Standards/prandtl-one-seventh.md`.
