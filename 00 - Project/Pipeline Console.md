---
title: Pipeline Console
type: plan
tags:
  - project
  - pipeline
  - console
  - scoping
updated: 2026-08-31
---

# Pipeline Console — Scoping Document

> [!note] Status
> **Approved; Phase 1 starting.** Layer 4 of the [[System Architecture]]
> four-layer model. Written 2026-08-31, the day 1400 Chapter 2 closed and
> console work began. The four blocking decisions in §9 are resolved (Node.js
> installed; reuse the Claude Code subscription auth; generator
> `-Course` parameterisation is prerequisite work; Stage 1 is a full switch).
> Build proceeds per §7.

Related: [[System Architecture]] (the four layers) · [[Course Porting Pipeline]]
(the five stages this console runs) · [[Engine]] (the scripts it drives).

---

## 1. What it is

A desktop application — its own **Electron app**, its own repository, outside
this vault — that runs and manages course conversions end to end. Legacy
PowerPoint in, a finished [[System Architecture#Layer 3 — Cartridge|Cartridge]]
out.

It is a **full orchestrator**. The console itself invokes Claude Code
(headless, via the Agent SDK) to run the pipeline's AI stages, and runs the
engine's PowerShell scripts for the deterministic ones. Progress streams back
into the UI live. An action on the control surface causes real work to happen —
there is no step where a human copies a prompt out of the console and pastes it
into a chat window.

### What it is not

- **Not a passive dashboard.** It does not just track "done / not done" and hand
  off prompts. Flipping a switch runs the stage.
- **Not a typical web UI.** No cards, dropdown menus, progress bars, modal
  dialogs. See §6.
- **Not a replacement for judgement.** Stages that turn on a human decision
  (per-module approval in Stage 2; the teaching-arc cut in Stage 1; the
  callout-lands-on-its-part and polish-bar checks in Stage 3) have explicit
  human-confirm gates. The console makes those gates visible and blocking — it
  does not let the AI self-certify past them. But the gate is **approve or flag
  after the fact**, not co-authoring in real time: the agent does the work on
  its own judgement, then a human signs it off or flags it. There is no
  conversational pane anywhere in the console.

---

## 2. Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Pipeline Console  (Electron, separate repo)                 │
│                                                             │
│  Renderer (the control surface)                              │
│    - slots, stage switches, instrument cluster, light rack   │
│    - all state from the main process over IPC; no logic      │
│                                                             │
│  Main process (Node)                                         │
│    - project store          ~/.emerson-pipeline-console/     │
│    - stage runners:                                          │
│        Stage 0, 4   ->  spawn pwsh, run engine/*.ps1         │
│        Stage 1,2,3  ->  Claude Agent SDK, headless           │
│    - output parsers -> live status -> IPC -> renderer        │
│    - loop-close evaluators (per stage, §4)                   │
└───────────────┬─────────────────────────┬───────────────────┘
                │                         │
     spawns pwsh with -Course      spawns Claude Code headless
                │                    (cwd = this vault)
                ▼                         ▼
   40 - Engine/*.ps1            the vault: memories, pipeline
   (generate, verify,           docs, Source Library, and the
    build-course)               course under 10 - Courses/
```

**The console drives Claude Code inside this vault.** The Agent SDK process is
spawned with the vault as its working directory, so every run has the pinned
memories, `CLAUDE.md`, the pipeline docs, and the Source Library in context —
the same context a chat session has today. The console app's own code lives
elsewhere and is never in Claude's working set.

**Two runner types:**

| Stage | Runner | Why |
| --- | --- | --- |
| 0 · Bulk convert | `pwsh` → `generator/*.ps1` | deterministic, no model needed |
| 1 · Cut the arc | Agent SDK, whole course | editorial judgement; agent cuts on its own, human approves/flags after |
| 2 · Context layer | Agent SDK, per module | drafting from source |
| 3 · Slide pass | Agent SDK, per module | the four-part pass |
| 4 · Verify & publish | `pwsh` → `verify.ps1` + headless Chrome | deterministic checks |

**Auth.** The Agent SDK reuses the Claude Code subscription auth already on this
machine — no dedicated API key or separate billing during the build phase. A
dedicated key is revisited only if usage or billing tracking becomes a real
concern once the console is running stages regularly (§9).

---

## 3. State model

### Project

One course conversion. Persisted as JSON in the app's data directory (**not** in
the vault — the vault only ever receives the committed course outputs).

```jsonc
{
  "id": "1400-vtbm",
  "course": "1400 Valve Trim and Body Maintenance",
  "sourcePptx": "…/Source Deck/1400 Valve Trim & Body Maintenance.pptx",
  "vaultPath": "C:/Users/E1552882/Documents-Local/Projects/EmersonWorkbench",
  "created": "2026-09-01T…",
  "stages": {
    "0": { "state": "closed",   "ranAt": "…", "report": "conversion-report.csv" },
    "1": { "state": "closed",   "confirmedBy": "human", "at": "…" },
    "2": { "state": "flagged",  "modules": { "m4": "ready", "m5": "drafting", … } },
    "3": { "state": "locked" },
    "4": { "state": "locked" }
  },
  "flags": [
    { "id": "f1", "stage": 3, "slide": 57, "severity": "amber",
      "item": "image-quality", "comment": "plug photo low-res", "status": "open" }
  ]
}
```

**Stage state** is one of: `locked` (previous loop not closed — the switch is
dead), `armed` (ready to fire), `running`, `checking` (fired, loop-close
evaluation in progress), `flagged` (ran, but its check found issues or a human
gate is pending), `closed` (loop genuinely closed), `failed`.

### Slot

A project loaded into the console UI. Several slots coexist, each with
independent live state. Loading is a **select-or-add**, not drag-and-drop: pick
an existing project, or add one by choosing a `.pptx` and naming it. A slot can
be unloaded and reloaded later with all stage state and flags intact.

### Flag

`{ id, stage, slide, severity, item, comment, status }`. Severity drives the
light colour in the rack. `status` is `open` → `resolved` (fixed on re-run) or
`accepted` (logged as a known follow-up, does not block loop-close). Open flags
for a stage collate into **one batch prompt** when that stage is re-fired.

---

## 4. The control-loop model

The core idea: **a stage does not complete because it ran. It completes when its
own verification check closes the loop.** Each stage switch fires the stage; the
*next* switch stays `locked` until the current stage reaches `closed`. Nothing
advances on faith. This is the pipeline's existing checklist discipline
(working rule 1, the pre-send checklist, the geometry check) encoded into the
tool instead of relied on by habit.

| Stage | Fire action | Live signal | Loop-close condition |
| --- | --- | --- | --- |
| **0 · Convert** | `extract-media.ps1` then `generate.ps1 -Course …` | slide count ticking; `svg-rebuilt` / `ole-fallback` flag counts; log tail | `conversion-report.csv` written; every `slides/*.html` tag-balanced; `manifest.*` parses. No hard errors. |
| **1 · Cut the arc** | AI makes the editorial cut on its own judgement — days → chapters → modules, boundaries from each module's objective and key concepts (not deck order), per [[teaching-philosophy]] and the `1400-module-boundaries` rule | proposed module tree renders; per-module light | **Structural check** (valid JSON; every module has an objective stub + a page range; ranges cover the deck with no unintended gaps/overlaps; no module of only 1–2 slides; CYK slides at module ends) **and** a human approve/flag pass on the editorial judgement. A flagged module holds the loop open until re-cut or accepted. Skeleton written `status: "outline"`. |
| **2 · Context** | AI drafts `objective` + 4–6 `keyConcepts {t,pages}` per module from slides + Source Library | per-module lights: `drafting → drafted → approved`; which source docs were opened | `verify.ps1` course.json section passes (valid JSON; every keyConcept page ref inside its module's `pages`) **and** every module human-approved → `status: "ready"`. |
| **3 · Slide pass** | AI runs the four parts per module | **per-slide light rack** (§5); four-part sub-progress (sequencing · source · consolidate · polish) | Every in-flow slide passes the **six-item pre-send checklist** run as headless-Chrome render checks + `verify.ps1` on changed slides. Judgement items (callout accuracy, polish bar) are human-confirm sub-gates. A `flagged` slide holds the loop open until `resolved` or `accepted`. |
| **4 · Verify & publish** | full `verify.ps1` + headless render of every slide and every shell module; regenerate `course-data.js`; update README | check-by-check pass/fail stream; whole-deck render thumbnails | `verify.ps1` exits 0 (0 FAIL); every render clean. Cartridge is publishable. |

**Honest about automation limits.** Stage 3's checklist has items a script can
check (image resolution, tag balance, geometry — is there a sourced photo where
a hand-drawn feature is claimed, aspect-ratio render in both shells) and items
it cannot (does this leader line land exactly on the part it names; is this as
polished as the module-intro card). The loop-close for Stage 3 is *automated
checks green* **AND** *human confirmed the judgement sub-gates*. The console
shows both, and both block. It never reports a stage `closed` on the machine
checks alone.

---

## 5. Interaction model and layout

Landscape window. Four regions.

```
┌───────────────────────────────────────────────────────────────────────┐
│  EMERSON · PIPELINE CONSOLE            wired to: …/EmersonWorkbench     │  top strip
├───────────┬───────────────────────────────────────────────────────────┤
│  SLOTS    │   ACTIVE SLOT ·  1400 Valve Trim and Body Maintenance      │
│           │                                                           │
│ ▸1400 VTBM│    ( 0 )    ( 1 )    ( 2 )    [ 3 ]    ( 4 )                │  stage switches
│   ●stage3 │   CONVERT    CUT   CONTEXT   SLIDES   VERIFY               │  (chunky toggles,
│           │    ○green    ○green ○green   ◐amber   ○dark                │   light above each)
│  +2100 …  │                                                           │
│   ●stage1 │  ┌─ INSTRUMENT ───────────────────────────────────────┐   │
│           │  │ STAGE 3 · module 5 · part 4/4 · polish             │   │  instrument cluster
│  + add    │  │ slides 62·64·65·66   checklist 5/6 pass            │   │  (live readout +
│           │  │ > rendering 66 at 16:9 …                           │   │   log tail)
│           │  └───────────────────────────────────────────────────┘   │
│           │                                                           │
│           │  LIGHT RACK · module 5      ▦ ▦ ▦ ▨      2 open flags     │  per-slide lights
│           │   62●  64●  65●  66▨   ← click 66 → flag panel           │
└───────────┴───────────────────────────────────────────────────────────┘
```

- **Top strip.** App identity and the vault path it is wired to. A global
  run/pause. Nothing else — no menus on the surface.
- **Slots (left).** Loaded projects as stacked channel strips: course name, a
  small 0–4 stage-position marker, one overall health light. Click to make
  active. `+ add` opens the select/add intake.
- **Stage switches (centre top).** Five chunky toggles: `0 CONVERT · 1 CUT ·
  2 CONTEXT · 3 SLIDES · 4 VERIFY`. Above each, a state light:
  `dark` = locked (switch physically dead) · `amber` = armed · `blinking` =
  running · `green` = loop closed · `orange` = flagged · `red` = failed.
  A switch only throws when armed, or when green (to deliberately re-run).
- **Instrument cluster (centre).** The live readout for the running or
  last-run stage: what it is doing, the counts that matter for that stage
  (slides converted, concepts drafted and approved, checklist items passed),
  and a short monospace log tail. Reads like an instrument panel, not a
  progress bar — you glance at it to know the state, you do not watch a bar
  fill.
- **Light rack (centre bottom / right).** Stage 2: one light per module.
  Stage 3: a grid, **one light per in-flow slide**, coloured by worst open
  flag on that slide (green clean · amber minor · orange real · red failing).
  You see a whole module's health in one look. Click a lit slide → a **flag
  panel** slides in: the slide thumbnail, its failing checklist items, a
  comment field. Flags accumulate; an **"N open flags"** readout and a
  **re-run flagged** action fire Stage 3 again against just those slides with
  the collated comments as one batch.

**Stage 1 has no special-case UI.** It is the same switch → run → light →
approve/flag pattern as Stage 2 and 3, with a per-module light rack for the
approve/flag pass. There is no proposal-editing or co-authoring pane — the agent
cuts the arc, the human signs it off or flags modules for a re-cut. This matches
how Stage 1 has actually been used.

**Multi-project.** Each slot keeps its own live state. Start 1400 at Stage 3,
pause it, load course 2100 and run it to Stage 1, come back — every light and
flag is where you left it. Whether two slots can run Claude *simultaneously* or
are queued is an open question (§9).

---

## 6. Visual language — three directions

The aesthetic is a requirement, not decoration: bold flat colour blocking,
chunky tactile switches, indicator lights, Teenage Engineering precision — an
object an engineer would want on their desk. **No** skeuomorphic textures (fake
metal, wood, screws). Colour must stay meaningful — it carries live status.

Before building, the chosen direction gets drawn as a real wireframe (§7 phase
6). Three concrete options:

**A · Instrument** *(recommended).* Near-monochrome: dark charcoal panel, light
grey switches, black labels. Exactly one structural accent (signal yellow or
safety orange) used sparingly — on the active-slot marker and the global run
control. The **only** saturated colour on the surface is the state lights
(amber / green / orange / red). Reads like an OP-1 field or a lab instrument.
Why recommended: colour = status, always, with no competition. The control-loop
model lives or dies on being able to read status at a glance; this direction
protects that.

**B · Pedalboard.** Mid-grey panel, each stage its own saturated colour block
(teal · magenta · lime · amber · blue), white switches, black text. More
playful, more overtly "gear", closer to a TE pocket operator. Risk: stage
colour competes with status colour — a lime stage block next to a green status
light muddies the read. Would need the status lights moved off-colour (white
brightness levels, or shape changes) to compensate.

**C · Desk.** Lighter: bone / off-white panel, dark switches, a single strip of
colour down one edge. Calmer, more "desk object" than "rack gear", good in a
bright room. Risk: without discipline it drifts toward generic clean-SaaS —
the thing we are explicitly not building.

Recommendation: **A**, and treat the state lights as the primary visual system
everything else stays out of the way of.

---

## 7. Build sequence

Phased so a genuinely useful console exists early, before the hardest parts.

| # | Phase | Delivers | Needs |
| --- | --- | --- | --- |
| 0 | ~~**Generator `-Course`**~~ | Done 2026-08-31. `generator/*.ps1` take `-Course "<name>"` and resolve everything through `generator/_paths.ps1`; section map moved to `Source Deck/sections.json`; `generate.ps1 -DryRun` added; the `PROTECTED.txt` guard extended to 1400 Ch 1–2. | — |
| 1 | **Shell + state machine** | Electron skeleton; project/slot data model; persistence; vault wiring; load a project and see slots; hand-set stage states to exercise the `locked → armed → … → closed` logic. No AI, no scripts. | Node.js (done) |
| 2 | **Script stages (0 and 4)** | Stage 0 and Stage 4 switches fully wired: spawn `pwsh`, stream output into the instrument cluster, parse pass/fail, evaluate loop-close. Two real working switches. | Phase 0 |
| 3 | **Agent SDK integration** | Claude Code spawned headless in the vault; messages streamed to the cluster; **Stage 2** wired end to end (bounded, per-module, `verify.ps1`-checkable). | — |
| 4 | **Stage 1** | reuses the Phase 3 Agent SDK machinery: fire → agent cuts the arc → structural check → per-module approve/flag rack. | Phase 3 |
| 5 | **Stage 3 + light rack + batch review** | per-slide light grid; checklist parsing; flag panel; flag collation; re-run-flagged as one batch. The hardest surface. | headless-Chrome render checks built (`verify.ps1` step 4) |
| 6 | **Visual pass** | chosen direction (A) taken from wireframe to the finished control-surface aesthetic | direction approved |
| 7 | **Multi-project hardening** | several live slots; pause/resume; survive the app being killed mid-run; run-lane / queue behaviour | — |

Phases 1–2 alone give a console that really runs bulk-convert and verify with
live status — worth having even before the AI stages are wired.

---

## 8. Prerequisites

1. ~~**Node.js**~~ — installed 2026-08-31 (temporary elevated admin access).
   Toolchain prerequisite cleared.
2. ~~**Generator not course-parameterised.**~~ Done 2026-08-31 (Phase 0).
   `generator/*.ps1` take `-Course "<name>"` and resolve the deck, build path,
   slide prefix, deck id and section map through `generator/_paths.ps1`;
   per-course chapter ranges live in `<course>/Source Deck/sections.json`;
   `generate.ps1 -DryRun` previews a conversion into a scratch dir. Verified:
   re-running against 1400 reproduces the committed output byte-for-byte, and
   the regeneration guard (now covering 1400 Chapters 1–2) still blocks.
3. **Headless-Chrome render checks do not exist yet.** `verify.ps1` step 4 is
   still pending ([[Course Porting Pipeline]] recommended sequence, step 4).
   Stage 3 and Stage 4 loop-close both depend on building them.
4. ~~**Agent SDK auth**~~ — resolved: reuse the Claude Code subscription auth
   (§2, §9).

---

## 9. Decisions and open questions

### Resolved 2026-08-31

- **Node.js** — installed. Ready for Electron/Node work.
- **Agent SDK auth** — reuse the existing Claude Code subscription auth on this
  machine. No dedicated API key or separate billing during the build phase;
  revisit only if usage or billing tracking becomes a real concern once the
  console runs stages regularly.
- **Generator `-Course` parameterisation** — on the critical path, built now as
  Phase 0 prerequisite work (see §7, §8.2).
- **Stage 1 in the console** — yes, full inclusion as a real switch in the same
  control-loop pattern: fires a headless agent that makes the editorial cut on
  its own judgement, loop closes on a structural check plus a human approve/flag
  pass. No conversational pane — Franz's usage is approve/flag after the fact,
  not co-authoring the cut live.

### Still open

- **Git.** Does the console commit to the vault repo itself — per stage, the way
  the manual pipeline does one commit per module pass — or does it leave every
  commit to the human and just report a dirty tree?
- **Working `course.json` location.** During a conversion, is `course.json`
  edited in place in the vault, or does the console keep a staging copy and
  merge it into the vault only when a stage closes?
- **Concurrency.** Can two slots run Claude Code simultaneously (two headless
  processes), or is there a single orchestration lane with a queue?
- **Cartridge boundary.** The console's output is a Cartridge. Building it makes
  the [[System Architecture#Layer 3 — Cartridge|Cartridge / Workshop
  separation]] concrete — still deferred, but the console design should not
  foreclose it.

---

## 10. Relationship to the existing pipeline

The console does not change the pipeline — it runs
[[Course Porting Pipeline]] as written. Every stage switch maps to a stage in
that doc; every loop-close condition maps to a check that doc already defines
(`verify.ps1`, the pre-send checklist, working rule 2's geometry check). If the
console reveals a gap in the pipeline, that is still a
[[Course Porting Pipeline#Working rules (every stage, every course)|working
rule 3]] question — fix the pipeline doc first, then the console.
