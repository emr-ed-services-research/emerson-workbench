# Emerson Workbench — orientation

Read this before doing anything. It is short on purpose.

This vault is **Emerson Educational Services course and training infrastructure**:
converted and originated courses, the runtime that renders them, the source library they
are grounded in, and a process-simulation game. Franz is Educational Services, not an
engineer by training — pitch explanations accordingly, and never perform understanding
you do not have.

---

## "Layer" means two different things here. Do not mix them.

**Workbench layers** (`00 - Project/System Architecture.md`) — how a course reaches a
learner:

| | |
|---|---|
| Layer 1 | **Home** — Emerson Workbench |
| Layer 2 | **Workshop** — the course shell |
| Layer 3 | **Cartridge** — a course package that loads into a Workshop |
| Layer 4 | **Pipeline Console** — the orchestrator |

**Process Core layers** (`00 - Project/Process Core — Architecture & Build Plan.md`) —
how a process system is modelled and drawn:

```
chrome  >  scenario  >  dynamics  >  schem-view | phys-view  >  netlist  >  registration
```

"Cartridge" is **reserved** for Workbench Layer 3. Do not use it for anything else.

---

## Folders

| Folder | Holds |
|---|---|
| `00 - Project` | Charter, architecture, pipeline, style guide, philosophy. **Start here.** |
| `10 - Courses` | One folder per course |
| `20 - Source Library` | Handbooks, IOMs, the Component Index, Interactive Models, and the **Standards Register** |
| `25 - Vitruvius` | The expert-engineer persona the CVE pipeline reasons through, plus its findings ledger. Scoped to CVE1→CVE2→CVE-Industry, **not** department-wide |
| `30 - Templates` | Obsidian note templates (not code) |
| `40 - Engine` | The shared course runtime. Courses **vendor** a built copy + lock file |
| `45 - Process Core` | The shared process model — netlist, schematic view, later dynamics. Consumers vendor a copy + lock. **Not part of the game** |
| `50 - Lunar Process Engineer` | The process-simulation game |
| `99 - Attachments` | PDFs, images, exports |

`45 - Process Core` has its own `CLAUDE.md` and `README.md`. Read them before touching
anything in it — in particular, never hand-edit a consumer's
`vendor/process-core/` copy. Edit the core, run `node test.js`, re-vendor.

> `00 - Project/Vault Structure.md` is reconciled with this table as of 2026-10-08.

---

## Hard rules

These exist because each one has already gone wrong.

1. **Never invent.** Every diagram, symbol, value, dimension and convention traces to a
   real source — an IOM, a handbook, an ISA standard, the Source Library. This applies to
   schematic and symbolic conventions exactly as strictly as to mechanical geometry. If
   you cannot source it, say so instead of producing it.

   **Citing a standard is an id and a locator — `ISA-5.5 §3.3.2` — and nothing more.**
   The reasoning, the edition, whether we even hold it, and what rests on it live once in
   `20 - Source Library/Standards/`. Every citation must resolve to an entry there; the
   check fails otherwise. An honest entry saying "never read" beats no entry.

2. **Find the authoritative file before reusing artwork.** Read the folder's own README or
   pipeline doc first. The nearest-looking export is routinely a stale pre-refinement
   pass. Getting this wrong has shipped rasterised artwork over a vectorised, denoised,
   locked-in model.

3. **Fix the layer, not the symptom.** When something breaks, ask whether it is a one-time
   content fix or a gap in the rules. If it is the latter, it belongs in the pipeline or
   the engine *before* it is applied to the instance. This is the vault's own standing
   working principle — `System Architecture.md`, "Working principle going forward".

4. **Run the real pipeline stage.** Do not hand-apply a curated equivalent, even one you
   have already worked out.

5. **Never claim something "renders clean" without naming the view you inspected** and
   what you looked for. An automated pass does not verify visual layout, and the
   embed/visual view hides the elements that usually break.

6. **A failing check is the answer, not an obstacle.** Checks in this repo carry their
   reasons in the failure text. If one rejects your change, read why before working
   around it — it is more likely right than you are. Never disable a check to get green.

---

## Running things

| | |
|---|---|
| Lunar Process Engineer | `cd "50 - Lunar Process Engineer" && node build.js` — builds `dist/` and runs every check |
| Process Core | `cd "45 - Process Core" && node test.js`; `node vendor.js "../50 - Lunar Process Engineer"` after a change |
| A course | `40 - Engine/build-course.ps1`, then `40 - Engine/verify.ps1` |
| Standards Register | `node "20 - Source Library/Standards/check-standards.js"` — add `--list` for the inventory, `--write` to refresh `used-by` |
| Source PDFs | Poppler at `C:\Users\E1552882\poppler\poppler-26.02.0\Library\bin\` |

`file://` will not load the LPE build — serve `dist/` over HTTP.

---

## Where to read more

| Question | Read |
|---|---|
| Why does the system look like this? | `00 - Project/System Architecture.md` |
| What is the Process Core, and what is being built? | `00 - Project/Process Core — Architecture & Build Plan.md` |
| How is a course made? | `00 - Project/Course Porting Pipeline.md` |
| How should it look? | `00 - Project/Style Guide.md` |
| How should it teach? | `00 - Project/teaching-philosophy.md` |
| What is the engine? | `40 - Engine/README.md` |
| What is the Process Core? | `45 - Process Core/README.md` |
| What standard backs this claim? | `20 - Source Library/Standards/README.md` |

---

## Conventions

- Source files in this vault are **LF**, not CRLF. Writing with a tool that stamps CRLF
  rewrites the whole file and buries the real diff.
- Keep generated/source ASCII where an existing check requires it — LPE's build fails on
  non-ASCII in level files. Use `\uXXXX` escapes.
- Commit or push only when asked.
