---
title: Prandtl 1/7-Power Law — Turbulent Pipe Velocity Profile
type: standard
tags:
  - source-library
  - standards
standard-id: "Prandtl 1/7-power"
publisher: classical fluid mechanics — no publisher, no edition
holding: not-applicable
updated: 2026-10-10
used-by:
  - "00 - Project/Lunar Process Engineer — Game Design.md"
  - "00 - Project/Process Core — Pro Chrome Plan.md"
  - "45 - Process Core/lab/assembly/index.html"
  - "45 - Process Core/lab/cutaway/index.html"
  - "45 - Process Core/lab/fic101/index.html"
  - "45 - Process Core/src/flowfield.js"
  - "45 - Process Core/test/flowfield.test.js"
  - "50 - Lunar Process Engineer/engine.js"
  - "50 - Lunar Process Engineer/reference/cve-reference-rig.html"
  - "50 - Lunar Process Engineer/vendor/process-core/flowfield.js"
---

# Prandtl 1/7-Power Law — Turbulent Pipe Velocity Profile

**Publisher:** none. This is a classical result of fluid mechanics, not a
published standard, and it is registered here because the register's remit
is **every external source**, not only standards-body documents.

**Holding:** `not-applicable` — there is no document to hold.

## What it says

For fully developed turbulent flow in a smooth circular pipe, the velocity
across the bore follows an empirical power law:

```
u(r) / u_max  =  (1 - r/R)^(1/n)        with n = 7
```

The area-weighted mean of that profile is a fixed fraction of the peak:

```
u_mean / u_max  =  2n^2 / ((n + 1)(2n + 1))        =  98/120  =  49/60
```

so at n = 7 the centreline runs **60/49 = 1.2245** times the mean, and the
profile normalised by 49/60 has a mean of exactly 1.

## Why it is used here

`45 - Process Core/src/flowfield.js` needs velocity ACROSS the bore, not
just the mean, because the whole purpose of a cutaway view is to show that
the fluid does not move as a block. The 1/7-power law is the standard
engineering approximation for the turbulent case, it is cheap, and critically
its mean-to-peak ratio is exact and closed-form — which is what lets the
layer assert that its profile redistributes the flow rather than inventing
any. That assertion is a test, not a comment.

The exponent and the ratio are written in the code as `N` and a computed
`MEAN_OVER_PEAK` expression rather than as two independent constants, so the
ratio cannot drift away from the exponent it was derived from.

## Limits, stated

- **Empirical, not derived.** It is a curve fit to measured profiles, good
  across a broad band of Reynolds numbers and not exact at any of them.
- **n varies with Reynolds.** n = 7 is the common choice around Re 1e5;
  n rises slowly at higher Reynolds. The core fixes n = 7 and says so.
- **It is wrong at the wall.** The derivative is infinite at r = R, so the
  law gives no wall shear stress and numerical integration of it converges
  slowly near the wall. The core's mean-preservation test allows 5e-5 for
  exactly this reason, and that tolerance is the integration rather than the
  physics.
- **Fully developed flow only.** Downstream of a bend or a contraction the
  real profile is distorted and asymmetric. The core applies the profile
  station by station anyway, which is a stated simplification: it is a
  reading aid for a cutaway, not a CFD result.

## Related

`Hagen-Poiseuille` covers the laminar case; the core blends between the two
across Re 2300 to 4000 rather than snapping. See
`20 - Source Library/Standards/hagen-poiseuille.md`.

## Prior art in this vault

Lunar Process Engineer's `engine.js` already implemented this law, with the
0.817 ratio written as a literal. The Process Core implementation was written
against the correlation itself rather than ported, per the standing rule that
a consumer is never the reference for what is correct.
