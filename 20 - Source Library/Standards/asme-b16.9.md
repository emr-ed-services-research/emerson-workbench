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

The standard itself: nothing. Its **dimension table for 90-degree long-radius
elbows** has been read from published secondary sources that cite it, and
cross-checked between independent manufacturer references. That settles the
number the vault depends on; it does not make the document held.

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

## The specific doubt — and a correction

> **The first version of this entry got the rule wrong from memory.** It said a
> long-radius elbow is "1.5 x NPS" at every size, and worked an error table off
> that. Corroborated catalogue data says otherwise. The wrong version is left
> described here rather than quietly deleted, because the mistake is the reason
> this register exists.

**Center-to-end dimension, 90° long-radius elbow** (for a 90° elbow this *is*
the centreline radius), from published B16.9 dimension tables:

| NPS | center-to-end | 1.5 x NPS would be |
|---|---|---|
| 1/2   | **1.50 in** | 0.75 in |
| 3/4   | **1.50 in** | 1.125 in |
| 1     | **1.50 in** | 1.50 in |
| 1-1/4 | 1.90 in | 1.875 in |
| 1-1/2 | 2.25 in | 2.25 in |
| 2     | 3.00 in | 3.00 in |

Two things fall out, and both matter here:

1. **The 1.5 x NPS rule only holds from NPS 1 upward.** Below that the
   dimension does not scale at all — it floors at a flat **1.50 in**. A formula
   that scales with size is structurally wrong in exactly the range Lunar
   Process Engineer works in.
2. **The table starts at NPS 1/2.** NPS 3/8 — level 1's branch bore of
   0.493 in — is not covered by this standard at all. There is no B16.9 elbow
   for that line.

Against the core's `bendRadius = 3 * r`, where `r` is the bore diameter scaled
by the frame (level 1: `r` = 12.6 px for the 0.622 in main, at 20.28 px/in):

| Line | NPS | code radius | B16.9 | |
|---|---|---|---|---|
| main   | 1/2 | 1.866 in | 1.50 in | **+24 % too large** |
| branch | 3/8 | 1.479 in | *not covered*; nearest NPS 1/2 is 1.50 in | within 1.4 % |

So the main run's elbows are about a quarter again too round, and the branch is
right by coincidence — the floor at 1.50 in happens to land where a scaling
formula puts a 3/8 line.

**Source:** published B16.9 dimension tables, corroborated across independent
manufacturer references (Wermac; metalspiping; Ferrobend). The standard itself
is still **not held** — these are secondary sources that cite it, which is
enough to settle the number and not enough to make this entry `confirmed`.

A separate problem the table makes visible: the netlist carries **bore**, not
**nominal**. Applying the real convention needs nominal size to reach the
geometry layer. LPE's `sizing.js` already holds the B36.10M mapping
(NPS → OD, wall, bore, area), so the data exists; it simply does not reach the
core today.

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
