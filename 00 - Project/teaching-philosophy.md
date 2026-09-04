---
title: Emerson Workbench — Teaching Philosophy and Design Principles
type: reference
tags:
  - project
  - design
updated: 2026-09-04
---

# Emerson Workbench — Teaching Philosophy and Design Principles

> [!note] Status
> This is **Franz's current working vision**, not yet department consensus.
> Treat it as a living north-star document for design decisions until wider
> department input happens. Revise it as that input comes in.

## What this curriculum teaches

Emerson Educational Services courses build three kinds of skill:

- **Mechanical maintenance skills** — disassembly, inspection, repair, and
  reassembly of control valves and their actuators.
- **Instrumentation skills** — connecting to, configuring, and calibrating
  positioners and digital valve controllers.
- **Engineering sizing and selection skills** — choosing the right trim, valve,
  and accessories for a given service.

## Instructional-design tags

Every module and key concept is tagged on two axes so the pipeline knows **what
kind of learning each piece of content is trying to produce**. Added to the
Pipeline Console's Stage 2 on 2026-09-03 (see
`00 - Project/Source Grounding — Staging Plan.md` §5, Axis B). The console mirrors
these lists in `src/main/instructional-design.js` — **keep the two in sync**;
this note is the authority.

### Axis 1 — domain

The kind of training, one of the three skill kinds above. Set at the **chapter**
level (stable), overridable per module.

- `maintenance` — hands-on disassembly, inspection, repair, reassembly.
- `instrumentation` — connecting to, configuring, calibrating positioners and
  digital valve controllers.
- `selection-sizing` — choosing and sizing trim, valves, and accessories.

### Axis 2 — cognitive level (Bloom's revised taxonomy)

What the learner does with the content. Per **key concept**; each module carries
a `levelTarget` = its ceiling, which the objective is written to.

| Level | The learner… |
| --- | --- |
| `remember` | recalls a fact unchanged — names a part, states a spec value, lists the steps |
| `understand` | explains meaning in their own terms — how a mechanism works, why two constructions differ, what outcome to expect |
| `apply` | carries out a procedure for real — performs the bench set, mounts the actuator, calculates a Cv |
| `analyze` | breaks something down and examines relationships — diagnoses a fault from symptoms, compares as-found to spec, traces a force path |
| `evaluate` | judges against criteria — fit-for-service vs replace, picks the correct fail-safe configuration, confirms a repair is complete |
| `create` | assembles parts into a new whole — plans an outage sequence, specifies a repair scope (rare below advanced courses) |

### Domain verb menus

The objective and key concepts are written with verbs from the module's domain
menu, at or below its `levelTarget`. The objective **leads** with a `levelTarget`
verb.

**`maintenance`**

| Level | Verbs |
| --- | --- |
| remember | identify · name · locate · label · list · state |
| understand | describe · explain · distinguish · recognize · summarize · predict |
| apply | disassemble · assemble · install · mount · remove · replace · adjust · set · torque · lap · connect · measure · mark · lubricate · flush · stroke |
| analyze | inspect · diagnose · troubleshoot · compare · trace · differentiate |
| evaluate | verify · assess · determine · judge · justify |
| create | plan · specify |

**`instrumentation`**

| Level | Verbs |
| --- | --- |
| remember | identify · name · recall · label |
| understand | explain · describe · interpret · distinguish |
| apply | mount · wire · configure · range · zero · span · calibrate · commission · stroke · set up |
| analyze | diagnose · interpret · trace · correlate |
| evaluate | verify · assess · judge |
| create | configure · design |

**`selection-sizing`**

| Level | Verbs |
| --- | --- |
| remember | recall · identify · define |
| understand | explain · describe · distinguish · classify |
| apply | calculate · size · determine · look up · convert |
| analyze | compare · examine · evaluate |
| evaluate | select · specify · recommend · justify |
| create | design |

### Axis 3 — instructional role

*What kind of move this concept is* — orthogonal to its cognitive level. Per
**key concept**, a closed vocabulary. It tells Stage 3 how to *frame and treat*
the slide (a `level: apply` concept can be a step-by-step procedure or a safety
caution — the same cognitive demand, very different slide). Added from the
instructional-method review, 2026-09-03.

| `role` | The move | Slide treatment |
| --- | --- | --- |
| `prime` | Open the module — a prediction, a question, or the stakes, **before** the mechanism | A question-framed slide (not the summative check); comes first |
| `nomenclature` | Name the parts | A labelled-parts figure; sequence it before the mechanism concepts |
| `mechanism` | How it works | A schematic or cutaway (the default for `understand`) |
| `procedure` | Do the steps | The ordered sequence, in the order a technician does it |
| `application` | The mechanism in a real situation | A concrete case / scenario |
| `contrast` | This vs. that | Parallel layout — figure row or comparison table |
| `caution` | A safety or failure warning | The caution card (`.slide--tmpl-caution`) — the warning, the failure it prevents, distinct weight |
| `check` | Formative retrieval | A question slide placed mid-module, before the end-of-module check-your-knowledge |

### Module framing attributes

| Attribute | Meaning |
| --- | --- |
| `stakes` | One sentence — the on-the-job consequence of getting this module wrong. Shown on the module-intro card, above the objective, as the hook. |
| `buildsOn` | Module ids this one is a faded repeat of, or depends on. Stage 3 does not re-teach what those already covered — it goes terser and spends the room on what is new. |

### How the pipeline uses the tags

- **Stage 2** classifies each key concept's `level` and `role`, sets the module
  `levelTarget` / `stakes` / `buildsOn`, and writes the objective from the domain
  menu. `moduleStage2Completeness` lints all of it.
- **Stage 3** receives each slide's `level` and `role` and the module framing,
  and:
  - pitches the treatment to the level (an `understand` slide is a diagram, an
    `apply` slide a procedure, an `evaluate` slide a judgement);
  - frames the slide by its role — a `caution` concept gets the
    `.slide--tmpl-caution` card, an `application` concept gets a concrete
    scenario;
  - re-orders the existing slides toward the soft sequence
    `prime → nomenclature → mechanism → procedure`/`application` → `check`;
  - writes an apply-or-higher module's check-your-knowledge stem as a
    **situation**, not "which statement is true";
  - where `buildsOn` is set, omits re-explanation of the referenced material.
  - It does **not create new slide files.** A missing `prime` is covered by the
    intro card's `stakes` line; a missing formative `check` is *noted* for the
    deferred first-class-formative-check change, not filled with a new slide.
- Combined with the source-component earmarking (Axis A), `level` + `role`
  sharpen Stage 3's *use an existing figure vs. compose new art* call —
  recall/understand and `nomenclature`/`mechanism` concepts are usually well
  served by an existing labelled figure.

## Doing-centered, not recall-centered

The curriculum is **doing-centered**. Success is measured by what a learner can
*do* after the course, not by what they can recite. A learner who can strip,
inspect, and rebuild a valve to spec has succeeded; a learner who can only
restate definitions has not.

**The class is not the slide deck.** The class is the instructor and the
hardware in the room, in the learner's hands. Course materials exist to prime
learners going in and ground them coming out — they must never compete with
hands-on work for attention.

## Design implications

These follow directly from the philosophy above and are not optional styling
choices.

### Slides are visual-only

Slide bodies carry **diagrams, images, component labels, and short identifying
headers** — nothing else. No explanatory paragraphs. No bullet lists that an
instructor would simply read aloud. If a slide contains a sentence an instructor
would recite verbatim, that sentence is in the wrong place.

### The context pane carries the textual grounding

All textual grounding lives in the **context pane** (right rail), written as
**terse, instructor-talking-point-style key concepts** — the tight phrasing an
instructor uses as a prompt, not prose for the learner to read cover to cover.
The currently relevant concept highlights to track position as the class moves
through a module.

### Structure mirrors the teaching arc, not the source deck

Course structure follows the **actual teaching arc**, not the source deck's
chapter order. Modules are cut from what is taught in what sequence, and
resequenced or split as needed.

Example — the **1400** course opens by:

1. **Scoping the work** with a P&ID — staying between the flanges; the valve and
   its immediate connections, not the wider loop.
2. **Leak classification as a reality check** — what "shut off" actually means in
   practice and what is achievable.
3. **Straight into hands-on disassembly.**

The original deck's chapter order does not drive this; the teaching arc does.

## This is not standard web-based training

This is deliberately **not** a standard web-based training module or an
Articulate-style course. It should feel **sparse in prose** on purpose — no
explanatory paragraphs, no bullet lists an instructor would read aloud —
because the instructor and the bench complete the teaching, not the screen.
That is a rule about **text**, stated already under "Slides are visual-only"
above. It is not a rule about how much a slide is allowed to show, and must
never be read as one.

### The standard is completeness against source, not a volume judgment

**Corrected 2026-09-04**, after a ch3-m4 review found a bench-set graph redraw
that dropped its upper/lower travel-stop illustrations — the actual teaching
point of that slide, not decoration around it — and construction callouts
placed plausibly rather than verified against the source figure. Both traced
back to an earlier version of this document that said flatly "density on the
screen is a sign something has been put in the wrong place, not a sign of
thoroughness" — true for explanatory text, false for a concept's visual
content, and stated with no carve-out for the difference. A model following
that instruction faithfully will prune a load-bearing illustration exactly as
readily as real clutter, and will optimize for "looks clean and plausible"
over "verified exactly correct," because exactness was never what the
instruction was measuring.

The actual standard, every time a slide's visual content is authored or
reworked:

1. **Establish completeness first, from source.** Use the Source Library /
   component index to determine what full, correct coverage of the concept
   actually requires — not what fits comfortably in the space already
   decided, and not what the slide currently happens to show. If the source's
   own treatment includes a mark, a callout, a comparison, or an illustration
   that carries part of the concept, that element is in scope for the slide
   whether or not the current draft has room for it.
2. **Measure the slide against that bar, not against a volume target.** An
   element — a diagram, a callout, an illustration like a bench-set graph's
   travel-stop marks — **stays, or gets added,** because it is load-bearing
   for teaching the concept completely and correctly. It **goes** only when
   it is genuinely redundant with something already shown elsewhere,
   decorative, or unrelated to the concept being taught at that step. "The
   slide will look busier" is never, by itself, a reason to cut something the
   source says the concept needs.
3. **Elegant delivery is a constraint applied after completeness, never a
   competing goal traded against it.** Once the concept is fully and
   correctly covered, present it as cleanly as the templates allow — but
   never at the cost of thoroughness. A slide that is sparse and wrong is not
   the goal; nor is a slide that is complete and cluttered. The templates
   (see the gallery / master-template system) exist to make "complete and
   clean" the normal outcome, not to force a choice between them.

**The test to hold every future revision against, verbatim:** a model working
this pipeline should be **exactly as willing to add** a slide, a diagram, or a
callout **as to remove one** — whichever move actually serves complete and
correct coverage of the concept. Neither direction is inherently the right
one; service to the concept is. Treating reduction as inherently good and
addition as inherently suspect is itself a bias to correct on sight, not a
safe default — it is what produced the ch3-m4 defects as directly as any
layout bug did.
