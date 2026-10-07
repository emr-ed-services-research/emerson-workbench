# Pipeline

How a level or a trainer segment gets made, and where every number and
every pixel is allowed to come from. This exists because the same mistake
happened twice: reaching for the nearest existing code as precedent
instead of the source it was derived from.

- The Cv values were invented because they balanced nicely. The bay
  delivered 2,800 gal/hour.
- The cutaway got a hand-rolled jitter because `Line` had none — when the
  reference rig, which `Line` was ported *from*, has had a full agitation
  model all along.

Both were avoidable by asking "what is the source for this?" first. That
question now has a written answer.

---

## 1. Sources of truth

Nothing in this game is allowed to be invented if one of these covers it.

| What | Source | Where |
| --- | --- | --- |
| Pipe bores, wall thickness, flow areas | ASME B36.10M via Fisher Control Valve Handbook §14.2 | `sizing.js`, `reference/friction.js` |
| Valve / restriction Cv | Derived from duty: `Cv = q/√(ΔP/SG)` | `sizing.js` |
| Fluid properties — SG, viscosity vs temperature | Standard reference values at stated conditions | `fluids.js` |
| Reynolds, laminar/turbulent thresholds | `Re = vD/ν`; laminar <2300, turbulent >4000 | `fluids.js` |
| **How fluid LOOKS — profile, jitter, SG, temperature** | **The reference rig. Not `Line`, not another level.** | `reference/cve-reference-rig.html` |
| What a level teaches, and in what order | §7.2 teaching sequence + its built-state ledger | `00 - Project/Lunar Process Engineer — Game Design.md` |
| Which discipline a concept belongs to | §7.3 concept inventory, five tracks | same |
| Screen furniture — walls, plates, readouts, pipework | `LPE.art.*`, `LPE.piping`, `LPE.Line`, `LPE.Cutaway` | `engine.js` |

**§9 is NOT a source for level sequencing.** It carries a banner saying so.

---

## 2. Making a level

Run in this order. Each step has an output the next one consumes.

1. **Pick the concept from the ledger, not from a good idea.**
   Open §7.2's built-state table. Take the next unspent step, or state
   plainly why you are skipping it. A level built from a concept nobody
   checked against the ledger is how the first level two happened.

2. **State the application in real units before touching code.**
   What fluid, how much of it, to where, at what pressure. "Three NFT beds
   at 2.0 gpm each, 15.2 psig manifold" is an application. "A valve puzzle"
   is not.

3. **Size it.** `node sizing.js` — it picks line sizes from the real bore
   table by velocity band and derives every Cv from duty. Paste its output;
   do not round it to something tidier.

4. **Check the puzzle is solvable AND findable.** Not just "a solution
   exists" — how wide is the window, in units the player actually moves?
   A 4% sliver of lever travel is not a puzzle, it is a pixel hunt. If the
   window is narrow because the physics says so, draw a target on the
   control rather than widening the physics.

5. **Check no step strands the player.** Every state a step accepts must
   still satisfy the step after it. The crash course let the trickle step
   pass with the valve shut, and no amount of heat makes a dead line
   turbulent.

6. **Lay it out in one table.** Every rectangle — scenery and controls
   together — in a single `LAY` object. Positioning scenery and UI
   independently is how the maker's plate ended up across the temperature
   readout.

7. **Write the text last, and short.** If the text is carrying the lesson,
   the rig is not doing its job. Name what the player did, what changed,
   the quantity that changed it, and the term for it. No figures of speech
   where the plain word is shorter.

8. **`node build.js`** — it runs `verify.js` and fails the build on any
   regression.

---

## 3. Making a trainer segment

The trainer is a **device**, not a level: a bench on a desk that runs
before a level to teach what that level needs. One or two concepts each,
never six.

1. **One concept per segment**, titled on screen before the demonstration
   starts. The learner performs better knowing what to look for.
2. **Demonstrate, then apply.** A segment that only shows is a slideshow.
   The applied step must be unsolvable by moving one control at random.
3. **The rig carries the teaching.** If removing the text would leave
   nothing learnable, the segment is not built yet.
4. **Declare the convention before the first segment ever runs.** The
   markers are not molecules; they are markers, in true proportion and
   exaggerated magnitude.

---

## 4. Fluid representation

One implementation, in the engine, used by every view. Derived from the
reference rig and nowhere else.

The rig's model, in full:

```
velocity profile   turbulent  (1-r)^(1/7) / 0.817      centre 1.22x mean
                   laminar    2(1-r²)                  centre 2x mean
jitter base        liquid 0.6, gas 2.2
temperature        1 + max(0, (T°F - 60))/80 * 6       up to 7x
density            rhoSpread = 1/max(0.3, ρ)           lighter spreads more
regime             laminar × 0.12                      laminar barely mixes
specific gravity   scales particle size and alpha
cross-stream       0.6 × the along-stream jitter
```

The rig labels its temperature scaling *"illustrative, not calibrated to a
measured diffusion coefficient."* That caveat travels with the model and
belongs in the convention beat.

**Changing any of this needs Franz's sign-off.** Uniformity of how fluid
is represented is a standing requirement, not a style preference.

---

## 5. What `verify.js` guards

Run on every build. Add to it whenever a bug reaches Franz before it
reaches a measurement — that is the signal the suite had a hole.

- every lesson fits the guide box, which clips rather than scrolls
- Cv values still match what `sizing.js` derives
- bore radii still derived from real bores, not typed in
- level 1 and 2 solvers identical across all 81 valve states
- both balance windows still open and wide enough to hit
- the reducer is still worth ~33%, and the bay still delivers a grow bay's
  flow rather than a fire main's
- air purge lands in 2–8 s at the actual flow
- the applied step is solvable, needs cooling, and is impossible on the
  wrong fluid
- no step accepts a state the next step rejects
- no two rectangles on the rig overlap, and the drawing code reads the
  layout table rather than hardcoding past it
- sources are ASCII, every built script block parses
