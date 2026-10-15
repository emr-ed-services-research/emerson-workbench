# narration

Script to voiced audio, with per-line timing the interactive models read back
to synchronise animation.

**Engine:** [Chatterbox TTS](https://github.com/resemble-ai/chatterbox), run
locally on PyTorch. Not a cloud service.

## Running it

It has its own virtualenv — the repo's other Python does not have torch.

```
python -m venv .venv
.venv\Scripts\pip install -r requirements.txt
.venv\Scripts\python generate_narration.py
```

| File | What it is |
| --- | --- |
| `generate_narration.py` | The pipeline |
| `voice-config.json` | Franz's pick from the 2026-09-25 three-way comparison: turbo model, exaggeration 0.4, cfg_weight 0.3. Applies to every module |
| `pronunciation.yaml` | Overrides for terms the model gets wrong |
| `output/<module>/` | Numbered `.wav` files plus `timing.json` |
| `NOTES.md` | Working notes |

`timing.json` is what a model's choreography reads. Regenerating audio without
regenerating timing will desynchronise the animation.

## Rhythm

Franz's standing instruction for narration-synced animation: **complete the
spoken thought before the visual reacts to it.** Let held states breathe.
"It's okay to have some blank space." Packing transitions tightly through a
segment reads as rushed and jostling.
