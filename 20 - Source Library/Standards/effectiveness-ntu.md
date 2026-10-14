---
title: Effectiveness-NTU — Heat Exchanger Outlet Temperatures
type: standard
tags:
  - source-library
  - standards
standard-id: "Effectiveness-NTU"
publisher: classical heat transfer — no publisher, no edition
holding: not-applicable
updated: 2026-10-11
used-by:
  - "45 - Process Core/lab/cascade/index.html"
  - "45 - Process Core/lab/loop-cooling.js"
  - "45 - Process Core/lab/loop/index.html"
  - "45 - Process Core/src/thermal.js"
  - "45 - Process Core/test/thermal.test.js"
  - "50 - Lunar Process Engineer/vendor/process-core/thermal.js"
---

# Effectiveness-NTU — Heat Exchanger Outlet Temperatures

**Publisher:** none. A classical, *derived* result of heat transfer,
registered here because the register's remit is every external source
rather than only standards-body documents.

**Holding:** `not-applicable` — there is no document to hold.

## What it says

Given both inlet temperatures and both flow rates, an exchanger's outlet
temperatures follow from one dimensionless group and one ratio.

```
C      = m * cp                      heat capacity rate, each side
Cmin   = min(Ch, Cc)   Cmax = max    and  Cr = Cmin / Cmax
NTU    = UA / Cmin
Qmax   = Cmin * (Thi - Tci)          the most any exchanger could move
Q      = eps * Qmax
```

For **counter-flow**, which is what a shell-and-tube trim cooler
approximates:

```
          1 - exp(-NTU (1 - Cr))
eps  =  --------------------------        (Cr < 1)
        1 - Cr exp(-NTU (1 - Cr))

eps  =  NTU / (1 + NTU)                   (Cr = 1, the limit)
```

Then the outlets fall straight out of the duty:

```
Tho = Thi - Q / Ch        Tco = Tci + Q / Cc
```

## Why this form and not LMTD

LMTD answers *"what area do I need for this duty"* — a design question,
where both outlet temperatures are already known. Effectiveness-NTU
answers *"given these flows and these inlets, what comes out"*, which is
the operating question and the only one a simulation can ask. With LMTD
you would be iterating to find the outlets you already needed to start.

It also degrades correctly, which is the whole point here. As cooling
water flow falls, `Cmin` falls, `NTU = UA/Cmin` RISES, and effectiveness
rises toward 1 — but `Qmax` falls faster, because it is proportional to
`Cmin`. Net duty drops and the hot outlet climbs. A valve closing on the
cold side therefore warms the product, smoothly and for the right
reason, with no special case for "valve shut" anywhere in the model.

## Limits, stated

- **Counter-flow only** as implemented. A 1-2 shell-and-tube is slightly
  worse than pure counter-flow for the same UA; the core uses the
  counter-flow relation and says so rather than carrying an F-factor it
  cannot source for a notional exchanger.
- **Constant UA.** In reality UA falls with flow — the tube-side film
  coefficient goes roughly as velocity^0.8 — so a model with fixed UA is
  optimistic as flow drops, meaning it *understates* how hot the product
  gets. Stated where it is used; the direction of the error is the safe
  one for a teaching model but it is still an error.
- **Constant specific heats, no phase change, no fouling, no losses.**
- **UA itself is not sourced.** For a notional exchanger there is no
  published UA. The core back-calculates it from the exchanger's declared
  design point, which makes it a property of a *stated duty* rather than
  a measurement, and labels it so.

## Why it is used here

`45 - Process Core/src/thermal.js`, to give the FIC-101 cooling-water
loop something at stake. Without a hot side a control valve that sticks
shut simply stops the water; with one, the product it was cooling climbs
toward its specification limit, which is the consequence a reader can
actually see and the reason the loop exists at all.
