# -*- coding: utf-8 -*-
"""Generate voice-cloned narration from a script file with Chatterbox.

Usage (run with narration/.venv's python):
    python generate_narration.py <script-file> <module-name> [options]

Options:
    --ref PATH        reference voice wav (default: voice/franz-reference.wav)
    --check-ref       only run the reference-clip quality checks and exit
    --compare         generate one sample segment at 3 expressiveness settings
    --only N          regenerate only segment N (1-based), then re-concatenate
    --settings PATH   voice settings json (default: narration/voice-config.json)
    --default-voice   synthesize with the model's built-in voice (install test)

Pipeline contract (see the task spec):
 - source scripts are never modified; pronunciation.yaml rules are applied
   only to the text sent to the model
 - markdown headings are section markers, not narration; every non-heading
   paragraph is a segment, split further at sentence boundaries if long
 - a paragraph containing only "---" is a beat marker, not narration: it
   inserts BEAT_PAUSE_S before the next segment instead of the normal
   PAUSE_S, for a deliberate theatrical pause mid-section (added
   2026-09-30, Franz: "take a long beat wherever needed to make the
   pacing strong" -- a real pause needs real silence in the audio, not
   just a later cue in the animation code; this gives the script author
   that control directly in the source without inventing a new section)
 - per-segment wavs land in narration/output/<module>/NN.wav, concatenated
   to narration/output/<module>/<module>-narration.wav with short pauses,
   with segment timings in timing.json for animation sync
 - everything runs locally; generated audio keeps Chatterbox's watermark
"""
import argparse, json, re, sys, time, wave
from pathlib import Path

HERE = Path(__file__).parent
REPO = HERE.parent
PAUSE_S = 0.45          # natural pause between segments
SECTION_PAUSE_S = 0.9   # longer pause at a section (heading) boundary
BEAT_PAUSE_S = 1.5      # deliberate pause requested via a "---" marker paragraph
BEAT_MARKER = "---"
MAX_SEG_CHARS = 260     # split longer paragraphs at sentence boundaries

# ---------------------------------------------------------------- text prep
def load_glossary(path=HERE / "pronunciation.yaml"):
    """Minimal ordered yaml reader for the rules file (no yaml dependency)."""
    rules, match = [], None
    for line in path.read_text(encoding="utf-8").splitlines():
        m = re.match(r'\s*-\s*match:\s*"(.*)"', line)
        if m: match = m.group(1); continue
        m = re.match(r'\s*say:\s*"(.*)"', line)
        if m and match is not None:
            rules.append((match, m.group(1))); match = None
    return rules

def apply_glossary(text, rules):
    for match, say in rules:
        text = text.replace(match, say)
    return text

def split_sentences(text):
    return [s.strip() for s in re.split(r'(?<=[.!?])\s+', text) if s.strip()]

def parse_script(path):
    """Return list of segments: dicts {text, section, new_section}."""
    segments, section, first_in_section = [], "", False
    body = Path(path).read_text(encoding="utf-8")
    # drop the leading title + preamble up to the first ## heading
    parts = re.split(r'^##\s+', body, flags=re.M)[1:]
    for part in parts:
        lines = part.splitlines()
        section = lines[0].strip()
        first_in_section = True
        pending_beat = False
        for para in re.split(r'\n\s*\n', "\n".join(lines[1:])):
            para = " ".join(para.split())
            if not para: continue
            if para == BEAT_MARKER:
                pending_beat = True
                continue
            chunks, cur = [], ""
            for s in split_sentences(para):
                if cur and len(cur) + len(s) + 1 > MAX_SEG_CHARS:
                    chunks.append(cur); cur = s
                else:
                    cur = (cur + " " + s).strip()
            if cur: chunks.append(cur)
            for i, c in enumerate(chunks):
                segments.append({"text": c, "section": section,
                                 "new_section": first_in_section,
                                 "beat": pending_beat and i == 0})
                first_in_section = False
            pending_beat = False
    return segments

# ---------------------------------------------------------------- ref check
def check_reference(path):
    problems = []
    try:
        import numpy as np, soundfile as sf
        data, sr = sf.read(str(path), always_2d=True)
        mono = data.mean(axis=1)
        dur = len(mono) / sr
        peak = float(abs(mono).max())
        clipped = int((abs(mono) > 0.999).sum())
        # noise floor: quietest 10% of 50ms frames (rms)
        fr = int(sr * 0.05)
        n = len(mono) // fr
        rms = np.sqrt((mono[:n*fr].reshape(n, fr) ** 2).mean(axis=1))
        floor = float(np.percentile(rms, 10)); speech = float(np.percentile(rms, 90))
        print(f"reference: {dur:.1f}s, {sr} Hz, {data.shape[1]} ch, peak {peak:.3f}")
        if dur < 12: problems.append(f"too short ({dur:.1f}s) — aim for 15-30s")
        if dur > 40: problems.append(f"long ({dur:.1f}s) — 15-30s is the sweet spot")
        if clipped > 10: problems.append(f"clipping detected ({clipped} samples at full scale)")
        if peak < 0.1: problems.append(f"very quiet (peak {peak:.2f}) — re-record closer/louder")
        if floor > 0 and speech / max(floor, 1e-9) < 12:
            problems.append("high background noise relative to speech — use a quieter room")
        # long-pause check: any stretch > 2.5s below the floor*2
        quiet = rms < max(floor * 2, 1e-4)
        run = best = 0
        for q in quiet:
            run = run + 1 if q else 0
            best = max(best, run)
        if best * 0.05 > 2.5: problems.append(f"contains a long pause (~{best*0.05:.1f}s)")
    except Exception as e:
        problems.append(f"could not analyze: {e}")
    return problems

# ---------------------------------------------------------------- synthesis
def load_model(device):
    """Prefer Turbo (much faster, good quality); fall back to the original."""
    try:
        from chatterbox.tts_turbo import ChatterboxTurboTTS
        return ChatterboxTurboTTS.from_pretrained(device=device), "turbo"
    except Exception:
        from chatterbox.tts import ChatterboxTTS
        return ChatterboxTTS.from_pretrained(device=device), "classic"

def pick_device():
    import torch
    if torch.cuda.is_available(): return "cuda"
    if getattr(torch.backends, "mps", None) and torch.backends.mps.is_available():
        return "mps"
    return "cpu"

def synth(model, kind, text, ref, settings):
    kw = {}
    if ref: kw["audio_prompt_path"] = str(ref)
    # both models take these; their natural defaults differ
    ex_def, cw_def = (0.0, 0.0) if kind == "turbo" else (0.5, 0.5)
    kw["exaggeration"] = settings.get("exaggeration", ex_def)
    kw["cfg_weight"] = settings.get("cfg_weight", cw_def)
    return model.generate(text, **kw)

def save_wav(path, wav, sr):
    import torchaudio as ta
    ta.save(str(path), wav, sr)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("script"); ap.add_argument("module")
    ap.add_argument("--ref", default=str(REPO / "voice" / "franz-reference.wav"))
    ap.add_argument("--check-ref", action="store_true")
    ap.add_argument("--compare", action="store_true")
    ap.add_argument("--only", type=int)
    ap.add_argument("--settings", default=str(HERE / "voice-config.json"))
    ap.add_argument("--default-voice", action="store_true")
    a = ap.parse_args()

    ref = None if a.default_voice else Path(a.ref)
    if ref is not None:
        if not ref.exists():
            sys.exit(f"reference clip not found: {ref}\n(record it, or use --default-voice)")
        problems = check_reference(ref)
        for p in problems: print("REF WARNING:", p)
        if a.check_ref: return
        if problems and input("continue anyway? [y/N] ").lower() != "y": return
    elif a.check_ref:
        sys.exit("--check-ref needs a reference clip")

    settings = {}
    sp = Path(a.settings)
    if sp.exists(): settings = json.loads(sp.read_text())

    rules = load_glossary()
    segments = parse_script(a.script)
    print(f"{len(segments)} segments")

    device = pick_device()
    print("device:", device)
    t0 = time.time()
    model, kind = load_model(device)
    print(f"model: {kind} (loaded in {time.time()-t0:.0f}s)")
    sr = model.sr

    outdir = HERE / "output" / a.module
    outdir.mkdir(parents=True, exist_ok=True)

    if a.compare:
        # one representative segment at three settings for Franz to pick
        text = apply_glossary(segments[2]["text"], rules)
        for name, ex, cw in [("neutral", 0.0, 0.0), ("mild", 0.4, 0.3),
                             ("expressive", 0.7, 0.3)]:
            wav = synth(model, kind, text, ref, {"exaggeration": ex, "cfg_weight": cw})
            save_wav(outdir / f"compare-{name}.wav", wav, sr)
            print("wrote", outdir / f"compare-{name}.wav")
        print("pick one; save {'exaggeration':X,'cfg_weight':Y} to", sp)
        return

    import torch
    todo = range(len(segments)) if a.only is None else [a.only - 1]
    for i in todo:
        seg = segments[i]
        text = apply_glossary(seg["text"], rules)
        t0 = time.time()
        wav = synth(model, kind, text, ref, settings)
        f = outdir / f"{i+1:02d}.wav"
        save_wav(f, wav, sr)
        print(f"[{i+1}/{len(segments)}] {time.time()-t0:.0f}s  {wav.shape[-1]/sr:.1f}s audio  {seg['text'][:60]}")

    # concatenate with pauses + timing.json
    import torchaudio as ta
    pieces, timing, cursor = [], [], 0.0
    for i, seg in enumerate(segments):
        f = outdir / f"{i+1:02d}.wav"
        if not f.exists(): sys.exit(f"missing {f} — generate all segments first")
        wav, wsr = ta.load(str(f))
        dur = wav.shape[-1] / wsr
        pause = (SECTION_PAUSE_S if seg["new_section"] and i > 0
                 else BEAT_PAUSE_S if seg.get("beat") else PAUSE_S)
        if i > 0:
            pieces.append(torch.zeros(wav.shape[0], int(pause * wsr)))
            cursor += pause
        pieces.append(wav)
        timing.append({"segment": i + 1, "section": seg["section"],
                       "text": seg["text"], "start": round(cursor, 3),
                       "duration": round(dur, 3)})
        cursor += dur
    full = torch.cat(pieces, dim=-1)
    out = outdir / f"{a.module}-narration.wav"
    ta.save(str(out), full, sr)
    (outdir / "timing.json").write_text(json.dumps(timing, indent=1), encoding="utf-8")
    print(f"\nwrote {out} ({cursor:.1f}s) and timing.json")

if __name__ == "__main__":
    main()
