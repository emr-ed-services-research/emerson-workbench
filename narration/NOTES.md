# Narration pipeline — setup notes

**PENDING (2026-09-26): Franz will personally rewrite the Spring
Verification and Stem Connector sections of `657-bench-set-travel.md` in
the same voice as his mechanism-first opening (the current procedure text
is CLI-drafted and approved only as a placeholder). Do not regenerate or
polish those sections until his rewrite lands; then full regen + beat
re-map.**

**Status (2026-09-25):** COMPLETE for the 657 module. Franz approved the
final narration (2:40, 20 segments) after two pronunciation fixes and two
script edits. Deliverables: `output/657/657-narration.wav`, `timing.json`,
per-segment wavs, `voice-config.json` (mild: exaggeration 0.4 / cfg 0.3,
Turbo model), and the glossary. The next module needs only a script file:
`.venv\Scripts\python generate_narration.py <script.md> <module>`.

## Review-loop history (657)

- "actuator" read as "acsuator" → glossary respelling "actchuator", chosen
  by Franz from a three-way candidate test (candidates generated as short
  wavs before batch regeneration — keep doing it this way).
- Spelled units with spaces ("P S I G") produced beats between letters →
  connected hyphenated phonetics ("pee-ess-eye-jee"). Same lesson applies
  to any future letter-by-letter term.
- Script edits mid-review shifted segment boundaries (21 → 20): unchanged
  takes were renumbered on disk rather than regenerated, so approved audio
  stayed byte-identical; only edited + affected segments were re-rolled.
- Reference clip arrived as .m4a at 43.6 s → converted locally with PyAV,
  trimmed to the cleanest 25 s window at silence boundaries, normalized
  to -3 dBFS. Original m4a kept untouched in voice/.

## Hardware found

- AMD Ryzen AI 7 PRO 350 (8C/16T), 31 GB RAM, Radeon 860M iGPU.
- No CUDA GPU; PyTorch on Windows cannot use the Radeon iGPU or the NPU →
  **CPU inference** (torch 2.6.0+cpu, 8 threads).

## Model and speed

- Package ships the newer **Turbo** model; it loads and runs (`sr=24000`).
  The pipeline prefers Turbo and falls back to the classic model.
- Measured on the install test: 7.9 s of audio in 27 s → **RTF ≈ 3.5×**
  (plus ~11 s one-time model load per run).
- Measured on the real 657 run: the full module (~2:45 of speech) took
  **~6.5 minutes** of generation. Single-segment re-rolls are 10–40 s each.

## Things that needed judgment

- **setuptools<81 pin** (see requirements.txt): without it Chatterbox's
  perth watermarker import silently degrades to `None` and both model
  classes crash at construction. Watermark stays in, as specified.
- **Turbo vs classic expressiveness:** the `exaggeration`/`cfg_weight`
  knobs belong to the classic model's API; if the compare pass shows Turbo
  ignores them, the A/B/C comparison will be run on the classic model and
  the chosen settings saved to voice-config.json apply to it.
- **Headings are not narrated.** The script's `##` sections are section
  markers; segments get a longer pause (0.9 s vs 0.45 s) at section
  boundaries, recorded in timing.json for the animation.
- Weights download from HuggingFace on first run (cached in
  `~/.cache/huggingface`); generation itself is fully local, and nothing
  is uploaded anywhere.
