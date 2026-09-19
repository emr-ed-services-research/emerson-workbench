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

## The objective hierarchy — course, unit, module (added 2026-09-18)

**The problem, named directly by Franz:** modules have consistently read as
abrupt across every CVE1 attempt, and the cause traces to something
missing in the schema itself, not to any one attempt's execution. A
module carries its own `objective`/`stakes`/`levelTarget`. A chapter — the
`unit` in the classic instructional-design sense — carries none of that:
checked directly against real `course.json` structure, a chapter object
has only `id`, `title`, `num`, `_source`. There is a course-level
objective (implicit in `course.summary`) and a module-level objective, but
nothing at the level in between naming *why this group of modules exists
as a deliberate step*, rather than an arbitrary bucket a set of related
competencies happened to fall into.

**The fix is structural, but the structure alone is not the fix.** Adding
a chapter-level `objective` (and `stakes`, mirroring the module-level
field) closes the schema gap and is required — but a field populated with
a list of the modules' own objectives restated one level up is not
instruction, it is a table of contents wearing a costume. **The standard
this field must actually meet, when populated:**

- **A genuine conceptual frame, not a list.** What a real teacher gives a
  class in the first few minutes of a unit — a mental model the learner
  can hold before the detail arrives, not a checklist of what's coming.
  This is a real, named technique (an *advance organizer*), not a house
  invention — brought in under the same standing rule that established
  instructional-design knowledge is a legitimate completeness source (see
  "The standard is completeness against source" above).
- **Real stakes at the unit's own scale**, the same job a module's
  `stakes` line does, one level up — why getting this whole unit wrong
  matters in the world the content actually serves, not administrative
  framing ("this unit covers X, Y, Z").
- **Grounded in real Subject-Matter Index content**, same discipline as
  everywhere else in this pipeline. An overview that paints a false or
  invented picture is worse than no overview at all.

**Why this is arguably the most important content in the unit, not a
formality to satisfy before the real content starts:** everything a
module teaches afterward is easier to learn with a frame to place it in,
and shallower without one — the overview is not preamble to the
instruction, it is instruction, and often the highest-leverage instruction
in the unit precisely because it's where the concept at hand actually
gets introduced.

**The corrected authoring order — top-down, not derived bottom-up from
the competency map.** The topic-derived competency map (see
`20 - Source Library/Competency Map — Topic-Derived.md`) is essential raw
material — it is the real, verified record of what exists and how it
genuinely connects — but it is not itself a course structure, and its
natural clusters (competencies that share a topic-graph connection, or
sit under the same industry) are not the same thing as a deliberately
designed instructional hierarchy. The corrected order: decide the course
objective first; design chapter/unit objectives as deliberate steps
toward it, informed by what the competency map shows is actually
teachable and how it connects, but not mechanically generated from those
clusters; then build modules that serve their chapter's objective. A
chapter that exists because a set of competencies clustered together in
the data, with no one having decided *why that cluster is a meaningful
step*, will read exactly as abrupt as CVE1 has so far.

### Three real tiers, confirmed (2026-09-18)

The hierarchy above is not two levels (course, module) with a gap in the
middle — it is three, each a genuinely different kind of thing, not the
same record at different sizes:

- **Terminal Competency** (course-scoped, no parent) — a demonstrable,
  real-world capability stated as a role-based performance ("size and
  select a control valve for a given process condition"). Synthesized by
  scanning the course's *entire* declared Subject-Matter Index scope, not
  any single topic or cluster. A course carries a small number of these —
  likely 1-4, never a long list.
- **Enabling Competency** (chapter-scoped, `parentTerminalId`) — a
  necessary sub-capability serving one specific terminal competency,
  tracing back to a real cluster of Subject-Matter Index entries (topics
  and/or figures) that justify it existing. **The existing 39-item
  topic-derived competency map (`Competency Map — Topic-Derived.md`) sits
  at exactly this tier** — confirmed by scale
  (`eng.selection.valve-body-and-type-taxonomy` alone cites 26 topics plus
  125 figures, chapter-scale synthesis, not one Bloom-verb action) — and
  gets re-typed into this schema as real Enabling Competency records, not
  rebuilt from scratch. A chapter carries no terminal competency of its
  own; it exists only to serve its parent's.
- **Learning Objective** (module-scoped, `parentEnablingId`) — a single
  observable action, a Bloom's-taxonomy verb tied to one specific Bloom's
  level, tracing to one or a small number of Subject-Matter Index entries
  — narrower than its parent enabling competency's own cluster. A module
  carries no competency of its own, only the objectives that roll up into
  its chapter's enabling competency.
- **Day** stays a pure scheduling container — no competency or objective
  weight of its own, just how modules get chunked into class time.

**Minimum module size — instructional time, not objective count.** When
decomposing an enabling competency downward into module-scale learning
objectives, do not default to one module per Subject-Matter Index topic.
A module sized around a single thin topic that only sustains a few
minutes of real class time is too granular. **A module's size is defined
by how much class time it can genuinely sustain, not by how many discrete
objectives happen to exist for it** — if an individual topic doesn't
clear that bar alone, merge it categorically with adjacent, related
topics under one shared objective set rather than generating a module per
topic by default. This is exactly the same failure shape as authoring a
slide per source citation regardless of whether each citation earns its
own slide — the unit of content should be sized by what it needs to teach
well, never by mechanically mirroring the index's own granularity.

**Concrete thresholds (added 2026-09-18), mechanically checkable, not a
judgment call left open-ended:**

- A module estimated at under **10 minutes** of real class time must be
  merged into another module.
- A chapter estimated at under **25 minutes** of real class time must be
  merged into another chapter.
- A course carries **no more than 10 chapters**.
- A chapter carries **no more than 4 modules**.

**These thresholds govern structure, never content — they never exclude
real, grounded material.** When a course's actual content would otherwise
call for more chapters or modules than these caps allow, the fix is to
group multiple Enabling Competencies into one chapter, or multiple
Learning Objectives into one module, never to drop content to fit the
cap. The minute estimates used here are a structural sizing heuristic for
this grouping decision during Stage 1 — a different thing from a course's
real `minutesTarget`, which still must come from an actual schedule
Franz/the course's design docs supply, never estimated by the pipeline as
a final, authoritative number.

**Traceability is bidirectional, but the reverse direction is a computed
index, never written back onto the Subject-Matter Index itself.** Every
competency and objective record, at all three tiers, carries an explicit
pointer to the real Subject-Matter Index entries (`sources: {topics: [...],
figures: [...]}`) it was built from — this is what lets an authoring pass
generate the hierarchy from the index rather than requiring it be
hand-built by feel, and gives a real audit trail (an index entry changes,
everything that depended on it can be found and flagged). The reverse
lookup — which competencies/objectives cite a given index entry — is a
computed scan generated at build or query time, not a backlink field
stored on the Subject-Matter Index entry itself. Writing curriculum-side
citations back onto an index record would recouple it to specific
courses, undoing the "exists independent of any course" property the
component/topic split was built to establish.

### Hard rule — the hierarchy is an authoring layer, never a presentation layer

**Non-negotiable, not a soft guideline, stated at the same register as
this document's other hard disciplines:** none of the competency or
objective records above are ever read aloud, displayed as an enumerated
list, or otherwise surfaced to a learner or instructor in anything close
to their raw form. A chapter opening with a bulleted list of enabling
competencies, or a module opening with a bulleted list of learning
objectives, is a real, well-documented instructional-design failure mode
(sometimes named "objective theater") — both instructors and students
disengage from that kind of formal recitation, and it is failure by the
Engagement section's own standard above, not a merely unpolished delivery
of the right content.

Stage 3 **may read** an enabling competency's record to generate its
chapter's `stakes` sentence — the same one-sentence, on-the-job-consequence
pattern a module's `stakes` field already uses, applied one level up. It
**may never render** the competency's raw statement, its source list, or
an enumerated list of the objectives beneath it. One compressed,
room-ready sentence per chapter, and nothing else from this hierarchy
reaches the rendered course. A future authoring pass that produces a
chapter with a real `stakes` sentence *and* a bulleted objectives list
alongside it has satisfied the letter of "chapter has a stakes sentence"
while still producing objective theater — that does not pass.

## Multi-course curriculum mapping — rebuild from zero, never patch (added 2026-09-18)

**The failure this corrects, named directly by Franz:** the CVE1 Terminal
Competency work went stale three times in a row, at three different
altitudes, and it was the same mistake each time, not three different
ones. Module structure got patched onto an existing scenario-only build
instead of rebuilt. The 40-item competency map got patched into the new
Terminal/Enabling schema by matching against each course's *existing*
declared scope (`Curriculum — CVE1.md`), which was itself still describing
the abandoned scenario. Even the correction to that mistake started by
re-examining the *already-assigned* enabling competencies rather than
questioning whether that assignment was ever independently derived at
all. **Output is a function of input plus structure. When the structure
changes — a new Subject-Matter Index layer, a new schema tier, a new
doctrine — prior output was produced by the old structure and is not a
valid starting point for the new one, no matter how reasonable it still
looks.** Patching it forward doesn't save the good parts; it invisibly
drags every assumption of the old structure into the new one.

**The rule is not "always rebuild from zero" — that would just swap one
silent default for another and remove Franz's own judgment from a call
that is his to make.** What actually failed here is that the choice was
never asked at all: RC and WC both defaulted to patching the existing
artifact without ever surfacing it as a decision. **The real rule:
whenever a structural change occurs that could affect already-built
curriculum artifacts (a new Subject-Matter Index layer, a new schema
tier, a new doctrine), that must be raised as an explicit question —
clean rebuild or patch — never silently defaulted either way.** Franz may
reasonably choose a patch when the change is small and contained, or a
full rebuild when it isn't; the failure is deciding that silently on his
behalf, not the specific direction picked in this instance.

**The method for multi-course curriculum mapping, for when a clean
rebuild is the chosen answer:**

1. **Input 1 — each course's intended purpose, stated independently of
   any existing artifact.** Domain, tier, `industryScope` where relevant,
   and one or two sentences naming the course's actual role in the
   program (e.g., "CVE1: introductory engineering, foundational
   selection/sizing/verification"; "CVE2: advanced engineering, deepens
   CVE1 and adds specialized/compliance capability"; "CVE-Industry(X):
   applies the fundamentals to industry X's real processes"). This comes
   from the program-level decision already made about the course
   (the CVE1 → CVE2 → CVE-Industry shape-1 allocation is exactly this
   kind of decision) — never derived from a course's own prior
   `Curriculum — *.md` doc, `course.json`, or any previously-built
   hierarchy.
2. **Input 2 — the full, current Subject-Matter Index.** Every topic and
   figure that exists right now, not whatever subset a prior pass
   happened to use.
3. **Process, run across the whole program together, not one course at a
   time in isolation** (courses in a sequence genuinely depend on each
   other — CVE2 develops what CVE1 introduces, CVE-Industry applies both):
   assign Enabling-Competency-scale clusters to courses based on fit
   against each course's *stated purpose* from Input 1, not against any
   existing assignment; synthesize each course's Terminal Competencies
   from the clusters actually assigned to it; decompose each Enabling
   Competency downward into Learning Objectives, respecting the minimum
   module-size rule above.
4. **Output supersedes, it does not merge with, whatever existed before.**
   Every prior CVE1/CVE2/CVE-Industry artifact — course-specific
   `Curriculum — *.md` docs, prior hierarchy documents, prior scenario
   builds — becomes historical record of what was tried, the same
   treatment `Curriculum — CVE1.md` already got after the module-structure
   correction. None of it is consulted as an input to the rebuild.
