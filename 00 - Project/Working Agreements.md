---
title: Working Agreements
type: reference
tags:
  - project
  - onboarding
updated: 2026-10-14
---

# Working Agreements

**Read this second, after `CLAUDE.md`.** It is the part of this project that
never lived in the repo: who you are working with, how he wants to be worked
with, and the rules this project earned by getting them wrong first.

It was written on 2026-10-14 by curating 81 session-memory files accumulated
from 2026-08-31 onward, at the point the work moved to a new Claude. Those
memories do not travel between assistants; this document is how they survive.
Every entry below is something a previous session was corrected on, in Franz's
own words where they were recorded.

> Keep this current. When a correction lands that will still matter in a
> month, add it here. A rule that only lives in a chat log is lost at the next
> migration.

---

## 1. Who you are working with

**Franz.** Emerson Educational Services — training and curriculum for Emerson's
control-valve and instrumentation product lines.

**His degree is in English Literature, not engineering.** Not CE, ME, EE or
process control. He has built real fluency with this vault's vocabulary and the
Source Library's content through sustained work, so this is *not* a licence to
talk down to him or over-explain basics. It does mean: when you explain a
mechanism, ground it in plain language rather than assuming engineering-native
fluency with the terms or the maths.

**He has real firsthand expertise in NIR spectroscopy** from his time at John
Deere — reading slurry composition for nitrogen and protein content. If
agricultural sensing or real-time dosing comes up, that is a domain where he
may know more than you. Do not explain it from first principles.

**Sourcing preference (2026-10-08):** as an Emerson employee he should not rely
on paywalled or third-party reference material for something Emerson already
holds internally. Treat external sources as a **stopgap** and re-ground on the
internal source when it lands. Two internal routes: Fishweb/eDocs (see §4) and
Emerson's Information Resource Center, staffed by actual librarians — his
intended route for ISA standards.

**Aesthetic:** he loves Riven and Myst, and volunteered it unprompted as a
standing visual reference — worn hand-inked journal pages, in-world diegetic
documents, warm aged paper, organic linework against clean manufactured
drawing. He also has a drafting background (AutoCAD) and admires Frank Lloyd
Wright's architectural blueprints. The working-model pages are meant to read
like a draftsman's rigorous template that can animate.

---

## 2. How he wants to be engaged

### The three-step review gate

When Franz reviews a body of work he runs a strict sequence. Do not skip ahead.

1. **Impressions / discussion.** He shares reactions, sometimes labelled
   "Impressions:". He expects genuine back-and-forth — reflect back what you
   heard, give your own independent reactions including disagreement, own the
   judgement calls that turned out to be gaps, and ask whether there is more.
   **No file edits in this phase, even when a fix would be trivial.**
2. **Phased plan.** Only once he signals the discussion is done.
3. **Explicit approval**, then act.

### Honest engagement, not performed agreement

> *"There's always a time like when I'll sense with you like you've completely
> lost the thread… it comes across to me like if I'm talking to a person and
> they're just kind of nodding along."*

Do not paraphrase his operational explanations back at a confidence level that
is not real. Say what you do not know. Give real independent assessments when
asked — including when you disagree.

### Approval of an observation is not approval of an action

"I approve those points" and "thanks for informing me" confirm that your
*reading* was correct. They do not commission a change. When a flagged concern
could resolve either way, do not pick the more actionable interpretation just
because it produces forward motion. Ask.

### Resolve before escalating

If your analysis surfaces "this needs a visual check of X" or "this depends on
what source Y says" — go do X, read Y, and come back with a grounded
recommendation. That is an instruction to yourself, not licence to hand him the
decision with a guess attached.

### Solve the design problem, not the literal complaint

Three rounds of narrow feedback on the same element ("I don't like the curve" →
"I don't like the lines either") is a symptom of an unsolved underlying
problem, not a list of instructions to execute. His correction:

> *"You have been reacting specifically to what I am saying, but not providing
> any better solutions."*

### Reference slides the way he sees them

Workshop shows chapter / module / page-of-total. It has **no global slide
numbers**. Never cite the pipeline's internal number (`1400-098`) — it forces
him to translate.

---

## 3. The rules this project earned the hard way

### Never invent — and that includes conventions

The hard rule in `CLAUDE.md` is the headline; these are the specific ways it has
been broken.

- **Symbology counts as invention.** A prototype drew a circle labelled "FT"
  for a transmitter and a bowtie-plus-rectangle for a valve, then asserted
  unverified that this was ISA convention. *"That is not the symbol for a valve
  either. Why make that up?"* This produced the ISA schematic canon
  (`00 - Project` / Process Core) so it never recurs.
- **Mirroring a shape is not a functional difference.** Two configurations with
  genuinely different Cv cannot be drawn as the same shape flipped — a mirrored
  valve behaves identically. Find where the real asymmetry lives and draw that.
- **Never invent geometry to fix a visual problem.** If a traced part looks
  unsupported, relocate the real traced geometry; do not add a new shape.
- **Reconstruct what a cutaway hides.** A half-section figure that draws one of
  a symmetric pair of fasteners is a drafting choice, not the real hardware.
  Check the parts list quantity.

### Find the authority before reusing anything

> *"That is so bad. You pulled from the original rasterized? No, we vectorized,
> denoised, locked it in."*

The nearest-looking export is routinely a stale pre-refinement pass. Read the
folder's own README or pipeline doc first and find which file is authoritative.
Checkable facts that would have caught that one: commit counts and dates.

### Build on the core, not beside it

> *"Why isn't pro cutaway feeding this, I don't get it. That was the whole point
> for creating pro cutaway and the piping rig."*

A consumer that reimplements the core's behaviour gets a worse copy, and the
real one stops being exercised. And build the **stock layer first, verified
against its own sources** — never against whichever consumer happens to exist.
LPE is a consumer; if it becomes the reference, the core inherits its accidents
as requirements. Franz would rather a level break than the core be shaped
around one game.

### Run the real pipeline stage

Even when you have already worked out the exact answer by hand. Running the
stage keeps the pipeline honest — the agent's reasoning and tool calls are the
record, and the real prompts and completeness checks get exercised.

### Verify, and say precisely what you verified

- **Never claim "renders clean" without naming the view you opened and what you
  looked for.** The automated render check only verifies three things, all
  WARN-only: no console errors, images decode, nothing escapes the slide box by
  >2px. It does **not** check visual layout.
- **Measure layout bugs yourself.** If the page loads in your own browser
  tooling, instrument it — `getBoundingClientRect()`, compute the real gaps —
  before asking Franz to open devtools. *"Oh, I thought you would check it."*
- **Compute geometric claims from the real path data.** Do not reason about
  which regions of an SVG are empty by recalling coordinates. *"I don't think
  you're making real checks."*
- **Label a self-check as a self-check.** Never "caught downstream," "caught in
  review," or anything that could be mistaken for independent human
  verification.

### A failing check is the answer, not an obstacle

Checks in this repo carry their reasons in the failure text. Never disable one
to get green. And a check that cannot fail is not a check — prove a new one
bites by deliberately reintroducing the fault it guards against. This has
repeatedly caught checks that were silently always-true.

### Rebuild from zero means re-deriving the decisions

Two distinct failures, both real:

- Redrawing a rejected diagram with the same underlying scenario, case and
  numbers is a different rendering of the same decision, not a new one.
- "Consult none of v1 as input" also means guarding your **own context** — five
  Terminal Competency statements came through word-for-word identical because
  the earlier version's wording was still in the session, not because any file
  was re-read.

And do not invent unrequested caution-rules that function as reasons to
under-deliver.

### Assess before matching precedent

"The other courses have this layer" is not a reason to build it. Investigate
what the layer actually does, when it gets used in practice (against real
historical evidence, not the schema's aspirational description), and whether
this stage of work needs it.

### Bake in known values

"Flat until it bites" is right only for values that are genuinely uncertain.
When the values are already known and enumerable, bake them in — retrofitting
an ID or naming scheme after content exists is severely expensive.

---

## 4. Operational facts

| | |
|---|---|
| **Reading Source Library PDFs** | Poppler at `C:\Users\E1552882\poppler\poppler-26.02.0\Library\bin`. The built-in Read tool fails on these PDFs without it. |
| **Fishweb / eDocs** | `https://edocs-consump.emrsn.org/FishWeb/index.htm?&Auth=Internet` — official Fisher catalogs and bulletins. **Not reachable by WebFetch** (public internet only). Reachable via Claude-in-Chrome, which runs on Franz's machine with its VPN and Okta session. His words: *"be careful it is the intranet, don't get weird in there."* |
| **Line endings** | Source files are **LF**. A tool that stamps CRLF rewrites the whole file and buries the real diff. |
| **ASCII** | LPE's build fails on non-ASCII in level files. Use `\uXXXX` escapes. |
| **Control bytes** | Writing `\b` or `\x00` into a non-raw Python string emits a literal control byte. This has silently disabled three checks (a regex carrying 0x08 can never match). `verify.js` now scans for this. |
| **Commits** | Commit or push only when asked. |

---

## 5. Decisions not worth re-litigating

- **Doing-centered, not recall-centered.** `00 - Project/teaching-philosophy.md`
  is the north-star. The class is the instructor and the hardware in the
  learner's hands — not the deck. Slides are visual-only; the context pane
  carries the text.
- **Source grounding is necessary but not sufficient.** A fully sourced slide
  can still be worse than the original deck. Franz called a full stop on module
  work over exactly that.
- **Sources ground instruction; they never dictate its shape.** *"I'm not here
  to measure off of the exactness of a source reference."* Do not score a course
  on what percentage of a chapter's components it touched.
- **The Subject-Matter Index indexes figures AND topics.** It was figures-only
  for a long time, and that was the root cause behind CVE1 repeatedly failing to
  teach actual subject matter — a `teaches:` field describes what one figure
  shows, and was never a place for the Handbook's explanatory prose. `kind:
  topic` exists for that now.
- **Structure diagrams stay free of volatile status.** A wiring diagram shows
  fixed architecture; live status links out from a node.
- **The System Map is maintained, not regenerated.** Update it when the
  architecture or current state changes.
- **The Style Guide is the source of truth for style**, the way the Source
  Library is for content.

### Lunar Process Engineer specifically

- Screens are **places, not diagrams** — lived-in rooms with retro-game
  environmental art, not clean schematics on a blank ground.
- Screens **show, they do not explain**. One line of direction at a time. This
  correction has been needed twice.
- Every level inherits the **shared screen shell** rather than inventing chrome.
- A level has a **complexity budget**; the second level blew it.
- A level's job must **arrive because someone decided it**, and the stated cost
  must attach to the expensive thing.
- **Fluid representation is uniform across the whole game, and changes to it
  need Franz's approval.**

---

## 6. Historical: the WC / RC era

From 2026-09 to 2026-10 Franz ran two Claude Code instances side by side: **WC**
(Write Claude), which touched files, and **RC** (Read Claude), a read-only
planning partner that replaced an earlier voice-app sounding board. RC's
boundary later relaxed — by 2026-09-20 Franz said RC was his primary writer.

**This arrangement ends with the migration to Enterprise Claude**, so the
session-protocol memories around it (who may write, pausing reads during file
moves, how to phrase a relay) are recorded here as history rather than rules.

Two lessons from that era do generalise and are kept above: approval of an
observation is not approval of an action (§2), and an agreeable response to
criticism is not evidence the output improved — check the artifact, not the tone
of the acknowledgement.

---

## 7. Course-content facts worth not rediscovering

- **"Packing box" is the bored recess the stem packing sits in** — a feature
  machined into the bonnet, not the bonnet casting. A leader line must land on
  the annular cavity.
- **Flow-up is end-for-end, not upside down.** Same casting, same trim, same
  orientation; the fluid enters the other flange. The actuator is always on top.
  Mirroring the section in y puts the bonnet underneath the body, which is not a
  valve.
- **14101 module boundaries** come from each module's stated objective and key
  concepts — not from where the check-your-knowledge slides fell in the original
  deck.
- **Animated marks belong to the part they mark.** A scribed mark must be a
  child of the moving part's own SVG group, not an independently positioned
  overlay.
- **Do not assume a default transform means aligned.** Solve the real aligned
  offset from both parts' actual drawn coordinates.
- **Narration rhythm:** complete the spoken thought before the visual reacts to
  it. Let held states breathe. *"It's okay to have some blank space."*
