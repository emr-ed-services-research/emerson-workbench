# 50 - Lunar Process Engineer

A process-engineering teaching game, in the Zachtronics vein, set on a moon
colony where the life-support plant is the plant you maintain. Learners size,
select and diagnose real flow problems by operating a rig and reading its
instruments.

**Read `PIPELINE.md` before changing anything here.** It says where every
number and every pixel is allowed to come from, and it exists because the same
mistake happened twice — reaching for the nearest existing code as precedent
instead of the source it was derived from.

## Running it

```
node build.js                  # builds dist/ and runs every check
node extras/desktop/play.js    # serves dist/ and opens a browser
```

`file://` will not work — the levels are fetched and the origin rules stop it.
There is a desktop shortcut that runs the launcher.

## What is here

| | |
| --- | --- |
| `engine.js` | The shared runtime: `piping()`, `Line`, `Cutaway`, the shell, boot and title |
| `level0.html` … `level4.html` | Five levels, each a single fault with one duty to meet |
| `trainer.html` | R.O.'s bench — twelve concepts introduced one at a time, in dependency order |
| `fluids.js`, `sizing.js` | The physics and the derived constants |
| `build.js` | Inlines everything into `dist/game.html` and runs the checks |
| `verify.js` | 86 build checks |
| `reference/crosscheck.js` | 82 cross-checks against ASME tables, handbook relations and the lesson text |
| `vendor/process-core/` | A vendored copy of `45 - Process Core` plus its lock file |
| `extras/` | The Fisher calendar, and the desktop launcher and icon |

## Rules specific to this folder

1. **Never hand-edit `vendor/process-core/`.** Edit the core, run its
   `node test.js`, then re-vendor with
   `node vendor.js "../50 - Lunar Process Engineer"`.
2. **LPE is a consumer, not the reference.** Process Core is verified against
   its own sources, never against this game's recorded pixels. A broken level
   is cheap; a core shaped around one game is not.
3. **A check that cannot fail is not a check.** When you add one, prove it
   bites by reintroducing the fault it guards. Several have been caught
   silently always-true — a regex carrying a stray control byte can never
   match, and `verify.js` now scans for those.
4. **Fluid is represented uniformly across the whole game.** Changes to how it
   is drawn need Franz's approval.
5. Level files must be **ASCII** — the build fails otherwise. Use `\uXXXX`.

## Design constraints

These came from review and are not negotiable without a conversation:

- Screens are **places, not diagrams** — lived-in rooms, not clean schematics
  on a blank ground.
- Screens **show; they do not explain.** One line of direction at a time.
- Every level inherits the **shared screen shell**.
- A level has a **complexity budget**, and the job must arrive because someone
  decided it.

`PIPELINE.md` §6 carries the continuity rules (BOOT → TITLE → BRIEF → TRAINER →
ARRIVAL → PLAY → CLOSING) and §7 the levels still to build.
