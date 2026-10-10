---
title: ASME B16.9 — Factory-Made Wrought Buttwelding Fittings
type: standard
tags:
  - source-library
  - standards
standard-id: "ASME B16.9"
publisher: ASME
edition: unknown — not held
holding: not-held
updated: 2026-10-10
used-by:
  - "45 - Process Core/src/topology.js"
  - "50 - Lunar Process Engineer/vendor/process-core/topology.js"
---

# ASME B16.9 — Factory-Made Wrought Buttwelding Fittings

**Publisher:** ASME
**Edition on hand / cited:** unknown — not held
**Holding:** `not-held`

## Access

ASME is in Emerson's enterprise set, with a dedicated "Enterprise Access - ASME"
route — the same one noted on the `ASME B16.10` entry. Not opened. This entry
exists because something in the vault **depends on what this standard says** and
nobody has checked it, which is worth recording even while the answer is
"we have not looked."

## What has been read

Nothing.

## What rests on it

The Process Core's **elbow radius convention**, which every drawn pipe corner
and every curve the water follows is derived from:

```js
// 45 - Process Core/src/topology.js
const bendRadius = r => 3 * r;
```

The code describes this as "centreline R = 1.5 x bore diameter = 3 x bore
radius, which is how a real long-radius elbow is made." That sentence makes a
claim about this standard, and this standard is not held, so the claim is
unverified.

## The specific doubt

A long-radius buttwelding elbow is conventionally specified as **centreline
radius = 1.5 x NPS** — the *nominal* pipe size. The core's formula uses the
**bore**, which is a different number, and larger.

Worked against the bores the levels actually use, which come from
`ASME B36.10M` and are registered:

| Line | NPS | Sch 40 bore | 1.5 x NPS | code: 1.5 x bore | difference |
|---|---|---|---|---|---|
| main   | 1/2 in | 0.622 in | 0.750 in | 0.933 in | **+24 %** |
| branch | 3/8 in | 0.493 in | 0.563 in | 0.740 in | **+31 %** |

If the convention is as recalled, every elbow in Lunar Process Engineer is
drawn roughly a quarter again too round, and the core has been stating a
standard it does not hold as the reason.

**This is recalled, not read.** It is exactly the kind of claim this register
exists to stop being made from memory — recorded here as an open question
rather than acted on. Resolving it needs the standard, or a sourced secondary
in the Source Library. Neither is in hand.

A second problem the table makes visible: the netlist knows **bore**, not
**nominal**. Even once the convention is confirmed, applying it correctly needs
nominal size to reach the geometry layer, which today it does not.

## What was deliberately not taken

n/a — not opened.

## Copyright

Unverified.

## Note

Raised 2026-10-10 from Franz's concern that the Process Core was taking its
conventions from Lunar Process Engineer's own bolted-on geometry rather than
from engineering sources. The audit that followed found the hydraulics
(`ISA-75.01.01`) and the symbology (`ISA-5.5`) properly grounded, and the pipe
geometry almost entirely not. This is the piece of it that at least *claims* a
source. The companion `teeTurnRadius = r * 1.6` claims none — its own comment
records it as "the value level 1 settled on after the branches looked wrong at
anything larger," which is an art decision and is now labelled as one in the
code.
