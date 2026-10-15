# 20 - Source Library

Every document course content is allowed to be grounded in, plus the indexes
that make it retrievable. **`Source Library.md` is the catalogue** — start
there.

| | |
| --- | --- |
| `Handbooks & Sourcebooks` | Control Valve Handbook 6th ed., the Fisher sourcebooks |
| `Equipment Manuals` | Fisher IOMs, by equipment type |
| `Legacy & Archive` | The historic Educational Services training archive |
| `Standards` | The **Standards Register** — one entry per authority |
| `Subject-Matter Index — *.md` | ~103 files, ~1,900 records across ~34 publications |

## The Subject-Matter Index

Breaks source material into two record kinds so instructional design can
actually address it — you cannot write a learning objective against a 40-page
chapter.

- **`-cmp-`** — a component: a figure, drawing or table
- **`-topic-`** — a concept

Ids read `{source}-{kind}-{slug}`, e.g. `cvh-cmp-feedback-control-loop`. Bloom's
level and course placement live in the record that *points at* the id, not in
the id itself.

It was figures-only for a long time, and that was the root cause behind CVE1
repeatedly failing to teach its subject matter — a `teaches:` field describes
what one figure shows, and was never the place for explanatory prose. `topic`
exists for that now.

## Citations

Every standards citation must resolve to an entry in `Standards/` or the check
fails:

```
node "20 - Source Library/Standards/check-standards.js"     # --list, --write
```

A citation is an id and a locator — `ISA-5.5 §3.3.2` — and nothing more. The
reasoning, the edition and whether we even hold it live once, in the register.
An honest entry saying "never read" beats no entry.

## Reading the PDFs

Poppler, at `C:\Users\E1552882\poppler\poppler-26.02.0\Library\bin\`. The
built-in file reader fails on these without it.
