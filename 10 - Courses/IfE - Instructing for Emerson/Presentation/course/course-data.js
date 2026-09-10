window.EW_COURSE = {
  "course": {
    "code": "IfE",
    "title": "Instructing for Emerson",
    "summary": "An eight-day course that prepares Emerson instructors, SMEs, and team leads to deliver hands-on technical training to a consistent standard — built around repeated coached delivery practice against the Instructor Observation Rubric, not classroom theory.",
    "footer": "© Emerson Educational Services, 2026  ·  Emerson Confidential",
    "domain": "ife",
    "tier": "introductory"
  },
  "slideBase": "../build/slides/",
  "slidePrefix": "ife-",
  "_note": "First real content module, authored 2026-09-09 after the origination pilot (_Origination Test — ife-five-tenets/) proved provenance: original and the ife domain-verb menu. Module ID (d1-m1) and slide prefix (ife-) are working identifiers, not a finalised scheme — IfE's real module-ID convention is still open, the same way 14101's was before its own Phase 3. Competency area is ife.orientation.* — one of four ife areas enumerated 2026-09-09 in curriculum-development.md; see Curriculum — IfE.md for the full registry. Top-level shape (course as an object, slideBase) corrected 2026-09-09 to match what course.js actually reads — the original draft used a flatter shape borrowed from the origination-pilot format, which the real Workshop shell does not accept. moduleZero (title slide, roadmap, facility & safety, sign-in) added 2026-09-09, reworked from 14101's own front matter per Franz's directive — see PILOT-NOTES.md/session log, not a copy of 14101's HTML. Real content pages renumbered 1-4 -> 5-7 to make room.",
  "moduleZero": {
    "id": "m0",
    "title": "Before We Start",
    "summary": "The title slide, the course roadmap, and the facility, safety, and sign-in logistics. Complete once at the start of Day 1 — after that it is done and out of the way.",
    "pages": [
      1,
      2,
      3,
      4
    ]
  },
  "days": [
    {
      "id": "d1",
      "num": 1,
      "title": "Day 1 — Foundations",
      "chapters": [
        {
          "id": "d1ch",
          "title": "Foundations",
          "num": 1,
          "domain": "ife",
          "modules": [
            {
              "id": "d1-m1",
              "title": "The Five Tenets of IfE",
              "status": "ready",
              "visual": true,
              "domain": "ife",
              "levelTarget": "understand",
              "stakes": "An instructor who doesn't know which tenets they're actually responsible for spends prep time on the wrong things — over-preparing content framing that already comes with the slice, under-preparing the delivery skill the Instructor Observation Rubric actually scores.",
              "objective": "Restate the Five Tenets of IfE and distinguish which the instructor receives with the assigned slice (context, objectives) from which the instructor performs and is scored on (preparation, delivery, self-development).",
              "keyConcepts": [
                {
                  "t": "The Five Tenets are IfE's organizing framework: Context to Content, Training Objectives, Student Preparation, Course Delivery, Acuminating Instructor Skills — one line each on what it means for a delivering instructor and where it is built in the course.",
                  "pages": [
                    5
                  ],
                  "level": "remember",
                  "role": "nomenclature",
                  "sourceNote": "provenance: original — Steve's own framework (IfE Vault, 02 Methodology/Five Tenets of IfE.md), no external source to cite."
                },
                {
                  "t": "Tenets 1-2 are inputs the instructor receives — context and objectives come with the slice. Tenets 3-5 are what the instructor does. IfE spends its time on 3-5 because that is what the Instructor Observation Rubric measures.",
                  "pages": [
                    6
                  ],
                  "level": "understand",
                  "role": "contrast",
                  "sourceNote": "provenance: original — same vault note, its own 'The through-line' section."
                },
                {
                  "t": "Formative check: given a described instructor behavior (setting up the training area before students arrive), the learner identifies which of the Five Tenets it demonstrates.",
                  "pages": [
                    7
                  ],
                  "level": "evaluate",
                  "role": "check",
                  "sourceNote": "no figure — situation stem; provenance: original, same as concepts 1-2"
                }
              ],
              "pages": [
                5,
                6
              ],
              "check": [
                7
              ]
            }
          ]
        }
      ]
    }
  ]
};
