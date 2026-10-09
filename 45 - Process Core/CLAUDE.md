# Process Core — read this first

You are in the **Process Core**: the shared model of a process system. It is used by
Lunar Process Engineer and will be used by LoopBench. **It is not part of the game.**

Full orientation: `README.md` here, and
`00 - Project/Process Core — Architecture & Build Plan.md` for why any of it is shaped
this way.

## The two rules

**1. Never import from a consumer.** No `LPE.palette`, no `LPE.art`, no level, no game
engine. The core is the platform; consumers adapt to it. The bar is literal: this
directory must pass `node test.js` with every consumer deleted from disk.

**2. Never hand-edit a vendored copy** (`<consumer>/vendor/process-core/`). Edit `src/`
here, run the tests, re-vendor. Consumers verify their lock on every build.

## Before you change anything

```
node test.js                                      everything, guard first
node vendor.js "../50 - Lunar Process Engineer"   after a change to src/
```

A change to `src/` is not finished until it has been re-vendored. LPE's build will fail
until you do, which is intended.

## The layer you are editing matters

Every `.js` here opens with an `@layer` header naming its layer and what it may never do.
`test/layers.test.js` checks the **code** against that claim, not the comment.

```
chrome > scenario > dynamics > schem-view | phys-view > netlist > registration
```

The dynamics layer answers *how much flows where*; anything about how that LOOKS is
above it. The netlist says *what is connected to what*. How it looks — which symbol, what is
hidden, where a line breaks, what colour anything is — is decided **above** it. That
boundary has already been crossed once by accident: a line-gap caused by an undrawn
reducer was fixed in the netlist, and the netlist's own test rejected it, because hiding
a fitting is a render concern and a hidden reducer still changes the bore. The fix
belonged one layer up.

If a check here rejects your change, read the failure text before working around it. Each
one states **why** the rule exists. It is more likely right than you are.

> "Layer" means something else elsewhere in this vault — Workbench Layers 1–4, where
> **Layer 3 is "Cartridge."** Different stack. Do not call a Process Core consumer a
> cartridge. See the vault root `CLAUDE.md`.
