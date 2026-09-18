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
> **Updated 2026-09-10:** this document is Emerson Workbench's own
> operationalization of [[Hands-First Philosophy]] — Educational Services'
> explicit, department-wide teaching philosophy, set by Steve and defined by
> Franz. It is no longer a standalone working vision pending department
> input; that input is Hands-First, and this document now implements it for
> this pipeline specifically. Where the two ever appear to differ, Hands-First
> is the authority.

## Governed by Hands-First

Everything below is this pipeline's own working-out of a single department-wide
principle: **[[Hands-First Philosophy|Hands-First]]** — learning through
action, student time focused on the actions they will actually perform. This
document's own "doing-centered, not recall-centered" section (below) is not a
separate idea arrived at independently; it is what Hands-First requires,
applied to how Workbench cuts modules, writes objectives, and composes
slides. Read Hands-First first for the vision and its rationale; read this
document for how that vision becomes structure, schema, and pipeline
behavior in Workbench specifically.

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
- `eng` — engineering: choosing and sizing trim, valves, and accessories, and
  broader engineering-specific content (deliberately named for room to grow
  beyond selection/sizing alone, not narrowly scoped to it — renamed from
  `selection-sizing` 2026-09-14).

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

**`engineering`**

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

Example — the **14101** course opens by:

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

1. **Establish completeness first, from source — and "source" means every
   legitimate source, not the reference library alone.** When converting an
   existing deck, the deck itself is a source of completeness, not raw
   material being judged against an external standard: it may carry real
   instructional content, framing, or emphasis that is not in the Source
   Library at all, earned by however the course was actually taught before.
   Completeness for a conversion is measured against the **union** of the
   Source Library / subject-matter index **and** the original deck, never the
   Source Library alone with the deck treated as mere inventory to reshape —
   that repeats this exact bias, just relocated: the correction was "don't
   judge a slide's completeness by how little it shows," not "judge it by an
   external checklist instead of what it already taught." Use whichever
   sources exist for the scope at hand to determine what full, correct
   coverage of the concept actually requires — not what fits comfortably in
   the space already decided, and not what the slide currently happens to
   show. If either the deck's own existing treatment or the Source Library's
   treatment includes a mark, a callout, a comparison, or an illustration that
   carries part of the concept, that element is in scope for the slide
   whether or not the current draft has room for it.

   **A third legitimate source, named explicitly (added 2026-09-10):**
   established general instructional-design or subject-matter knowledge —
   real techniques, their rationale, their common pitfalls, a worked example
   grounded in the course's own practice vehicle — on the same footing as
   "the deck" above, for content that has neither a deck nor a Source
   Library figure behind it (origination's `provenance: original` case,
   e.g. IfE's Show-Tell-Do, Ask-Pause-Direct, or any established method
   named in Steve's own framework). Before this addition, an origination
   module had exactly one named legitimate source — the Source Library —
   which is the same shape of gap the Content-Depth investigation found in
   Stage 1/2's slide-count heuristic: a rule fit for one mode (conversion,
   which always has a deck or a technical source) silently narrowing to
   something too strict for the other (origination, which often has
   neither) because the second mode was never explicitly written in. This
   does not license inventing a fact, a source, or an example — it licenses
   explaining what a real, established technique is, why it works, and how
   it applies, the way any competent instructional designer would, instead
   of treating the vault's own stub-level source note as the ceiling of
   what may be said about it.
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

## Engagement as the class itself — CVE curriculum test pattern (added 2026-09-15)

**Status: a test pattern for the CVE1 → CVE2 → CVE-Industry curriculum
specifically, not yet department-wide doctrine.** Raised by Franz while
scoping that curriculum, on the grounds that these learners are engineers
with complex degrees, and a flat "one course introduces, the next develops,
the last applies" progression undersells them — both in how shallow a first
exposure is allowed to be, and in how thin "applies" is allowed to mean.
Whether this becomes standing doctrine (alongside Hands-First above) depends
on how it holds up once tried against real CVE content, the same way
Hands-First itself was validated before going department-wide.

Franz's own framing: **"Any class is about engagement... That IS the
class."** Engagement is relational and runs in six directions, not one:
student → content, content → student, student → instructor, instructor →
student, content → instructor, instructor → content. A competency authored
for only one of these (content delivered flat to a student, the default
shape today) is not fully taught even when it is factually complete.

**What this means for how a competency is built, for CVE1/CVE2/CVE-Industry:**

- **Content → student and student → content:** the content itself should
  carry a real tension, open question, or non-obvious result the learner
  has to work with — not a fact stated and moved past. The kind of texture
  this project already produces for itself when cataloguing a source (*is
  this one consolidated component or thirteen near-duplicates; this caption
  contradicts the figure, which is true*) is exactly the analytical grain a
  degreed-engineer audience should be handed to work through themselves,
  not just told the answer to.
- **Content → instructor and instructor → content:** a competency needs
  enough depth behind it that an instructor can field a real pushback
  question they did not script for, and enough room that the instructor is
  expected to adapt and shape the material live, not execute it verbatim.
  Thin content that only survives a straight read-through fails this
  direction even if the slide itself is correct.
- **Student → instructor and instructor → student:** the module needs real
  room for the student to bring something back — a question, a disagreement,
  a competing answer — not just a delivery-and-check cycle.

**Progression is not one stage per course.** `introduces` / `develops` /
`applies` (see the Curriculum Development Layer's competency schema) should
not be assumed to map one course = one stage for this curriculum. A
competency can genuinely introduce and develop within CVE1 alone before CVE2
ever touches it; CVE-Industry's `applies` stage should be held to the same
engagement bar as `introduces`, not treated as a lighter, later add-on.
Progression and Bloom's level are already separate axes in the schema —
nothing requires an `introduces` placement to sit at `remember`/`understand`
if the audience and content can support entering at `analyze` or `evaluate`
from the start.

## Instructional method — Cognitive Apprenticeship via Productive Failure (CVE curriculum test pattern, added 2026-09-16)

**Status: a test pattern for the CVE1 → CVE2 → CVE-Industry curriculum
specifically, same standing as the Engagement section above — not yet
department-wide doctrine, to be validated against real content before it
goes further.** This section exists because the Engagement section above
named a *standard* (real tension, instructor depth, room for pushback)
without ever naming a *method* for reliably producing it. Bloom's level
alone doesn't supply that — it classifies the cognitive destination
(`analyze`, `evaluate`), not the instructional path to get a learner there.
CVE1's first real build made exactly this gap visible: content labelled
`level: analyze` delivered as explain-mechanism → explain-mechanism →
one surprising fact → contrast → activity → check, the same generic
Template Gallery role sequence every course in this vault defaults to,
with a single embedded tension standing in for engagement rather than a
real method producing it throughout.

### The method

Two established, named instructional-design techniques, run together —
brought in under the standing rule that established instructional-design
knowledge is a legitimate completeness source in its own right (see "The
standard is completeness against source" above):

1. **Productive failure** (Kapur) — a learner who generates varied,
   even wrong, solutions to a real problem *before* being taught the
   underlying concept learns that concept more deeply than one taught the
   concept first, because the failed attempt primes them to recognize
   exactly what their own approach was missing when the real reasoning
   arrives. The failure phase is not decorative struggle — its function is
   exposing the specific gap the subsequent instruction then closes.
2. **Cognitive apprenticeship** (Collins, Brown & Newman) — the sequencing
   framework Bloom's level alone doesn't provide: **model** the full expert
   reasoning process on a real case, **coach** the learner through a
   similar case with support, **fade** that support as competence grows,
   have the learner **articulate** their own reasoning, then **reflect**
   against the expert's.

Run together as one repeating cycle, this is an **activity-level
technique**, not the course's architecture:

**Attempt → Consequence → Model → Coach-and-fade → Articulate/Reflect.**

**Corrected scope (2026-09-17, second correction — this replaces the
original framing below the line, kept for the record of how the mistake
happened, not as a live option).** CVE1's rebuild took the cycle above and
used it to replace the course's actual day/chapter/module structure with
one continuous scenario spanning the whole course, on the theory that
module boundaries were "content seams" breaking the narrative. Franz's
verdict after seeing it built: it stopped being a course at all — "it was
literally treating scenarios like course modules, which they are not even
close to." The real error traced back to a narrower, correct finding
(three tightly-coupled keyConcepts, all tracing to one source diagram,
had been awkwardly fragmented across two module files) that got
overgeneralized into "the whole course should be one scenario with no
module structure." That generalization was never justified by the
finding, and it produced something unrecognizable as a course.

**The corrected rule: this course keeps the same day/chapter/module/
keyConcept structure every other course in this vault uses, in full.**
Modules are real structural *and* content units, not scheduling-only
containers. A module teaches its competency properly, using genuine
explanation — now drawn from the Subject-Matter Index's `kind: topic` entries,
not narrated results — the same way any module in CVB or 14101 does.
Productive failure and cognitive apprenticeship are **one activity type
available inside a module**, alongside (not instead of) the normal
mechanism/nomenclature/procedure/contrast content: a module can include
one or more attempt→consequence→model exercises as specific keyConcept or
activity items, the same way `cve1-ch1-m2`'s original Stage 1 outline had
a discrete "Activity — Damage Diagnosis" item sitting inside an otherwise
normal keyConcepts list. It never replaces the module's own real teaching
content, and it never dissolves the module boundary itself.

**Difficulty must still ramp within an activity sequence, not open cold —
this part of the original correction (CVE1's first real build,
2026-09-17) still holds, just scoped to activities now instead of the
whole course:**

1. **A simple, fully worked success first — no failure at all.** Real
   numbers, the complete flowchart or procedure walked start to finish,
   the right answer. Vocabulary (P1, ΔP, Q, Cv, and so on) gets defined
   here with real, specific values a learner can follow and check, not
   narrated as something that already happened off-screen. For this
   opening tier, "Attempt → Consequence" doesn't apply yet — there is
   nothing to fail against — it is **Model (as a complete worked success)
   → Articulate/Reflect** only.
2. **A moderate productive-failure activity next**, reinforcing what the
   success example just established against a slightly harder case — the
   first real "Attempt → Consequence → Model" cycle.
3. **A harder activity after that**, extending further. CVE1's original
   Class V/cavitation case belongs here, not at the front.

These three tiers can span one module's activities, or a short run of
modules within a chapter — they are not a license to reintroduce a
continuous cross-course scenario by another name. Skipping tier 1 doesn't
make the later tiers harder in a useful way — it removes the floor a
learner needs to attempt anything at all.

**This only works if these disciplines hold, all flagged directly by
Franz and RC while designing and then debugging it — not optional
refinements:**

- **The wrong paths and their consequences must be real, not invented for
  drama.** They should trace to genuine documented cases — a real
  counter-intuitive finding already in the Subject-Matter Index (e.g. the
  cavitation section's high-recovery-valves-are-more-cavitation-prone
  result), a real documented failure pattern (e.g. the SIS chapter's OREDA
  data showing the final control element accounts for roughly half of
  safety-function failures), or a verified case from Vitruvius (below) —
  never a strawman wrong answer authored just to be defeated.
- **The reveal must explicitly contrast the learner's own attempt against
  the real reasoning, not just state the correct answer.** Comparison is
  what makes productive failure productive. A cycle that becomes "they
  guess, then we lecture" has lost the mechanism entirely and is
  indistinguishable from the flat delivery this method exists to replace.
- **Every technical term must be defined at or before first use, and
  every worked step needs real, specific data — never a narrated result.**
  CVE1's first build used P1, ΔP, Q, Cv, and Class V throughout without
  defining any of them once, and narrated outcomes ("the calculated Cv
  was correct," "a streamlined trim was selected") with no actual numbers
  anywhere a learner could check or compute themselves. A scenario that
  tells the learner what was decided, instead of giving them what they'd
  need to decide it, has not implemented the attempt step at all — it has
  replaced it with a summary.

### Vitruvius — the modeled-expert persona

The "model" step needs a consistent voice, not an anonymous instructor
aside — **Vitruvius** (named by Franz, 2026-09-16) is that persona: the
expert whose reasoning gets modeled in a module's productive-failure
activity, who reports the consequence of a wrong decision within that
activity, and who verifies that a piece of content pulled from outside
the Source Library (the web, or the historic archive) is accurate before
it enters a course. Vitruvius has broad engineering
experience and judgement to draw on and is explicitly permitted to research
beyond the Source Library to keep that judgement current — but never
imports outside-brand hardware as actual course content; the boundary is
verifying accuracy and modeling reasoning, not expanding what gets taught
into other manufacturers' equipment.

Vitruvius's own permanent resources are **not** part of the Component
Index and carry a different, lighter trust tier deliberately: verified
narrowly, per use, when a specific fact or case is actually pulled in for
a scenario — not catalogued exhaustively up front the way a Component
Index chapter pass is. See the persona's own identity/ledger location
(separate document) for how that verification gets recorded.

### What this does not change

Slides stay visual-only; the context pane still carries the textual
grounding; none of the composition rules above are superseded. **The day/
chapter/module/keyConcept structure stays exactly as it is for every
other course in this vault — this method never replaces it, only supplies
one activity type available inside it.** This section governs what one
or more activities inside a module can look like, not what a single slide
is allowed to show, and not the course's own organizing structure.
