"""Preprocess an IOM cross-section figure for part-by-part vectorization.

Stages (each saved for inspection):
  s0  crop to the figure body (given bbox)
  s1  grayscale -> inverted binary (ink = white)
  s2  thin-structure removal (leader lines / stray callout strokes) via
      morphological opening + reconstruction: structures thinner than the
      part boundary lines vanish entirely, boundaries keep full thickness
  s3  hatch close (Option A): morphological close sized past the hatch pitch
      so each hatched part region becomes one solid blob
  s4  small open to shave whiskers left by absorbed leaders
  s5  connected-component labelling; per-part masks + tinted overlay

Re-runnable on other figures (e.g. the 667): adjust BBOX and the kernel
sizes at the top.
"""
import sys, os
import cv2
import numpy as np

SRC   = sys.argv[1] if len(sys.argv) > 1 else "p24-24.png"
OUT   = os.path.dirname(os.path.abspath(SRC))
# Figure 6 body bbox on the 600dpi page render (x0,y0,x1,y1) — generous crop
# that excludes the callout circle columns on both sides and the caption.
BBOX  = (1820, 1050, 3300, 3300)

OPEN_R   = 2    # radius that kills leader lines but not part boundaries
CLOSE_R  = 13   # radius bridging the hatch pitch (~21px at 600dpi)
SHAVE_R  = 4    # post-close whisker shave
MIN_AREA = 1500 # discard specks below this area (600dpi px^2)

img = cv2.imread(SRC, cv2.IMREAD_GRAYSCALE)
assert img is not None, f"could not read {SRC}"

s0 = img[BBOX[1]:BBOX[3], BBOX[0]:BBOX[2]]
cv2.imwrite(f"{OUT}/s0_crop.png", s0)

_, s1 = cv2.threshold(s0, 200, 255, cv2.THRESH_BINARY_INV)
cv2.imwrite(f"{OUT}/s1_binary.png", s1)

# s2: plain opening -- kills thin strokes (leaders AND hatch, both ~2-3px)
# outright; part boundaries (4-6px) survive thinned. No reconstruction: any
# reconstruction regrows leaders that touch parts, i.e. all of them.
# Hatched interiors emptied here are restored by per-component hole filling
# after labelling.
# leaders are only ~1px thinner than part boundaries at this scale, so
# thickness-based removal kills boundaries too. Leave them: after closing,
# a leader either vanishes into a part blob (harmless) or bridges two parts,
# and bridges are handled by the measured CUTS below like any true contact.
s2 = s1
cv2.imwrite(f"{OUT}/s2_noleaders.png", s2)

# s3: close the hatching into solid regions
k_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2*CLOSE_R+1, 2*CLOSE_R+1))
s3 = cv2.morphologyEx(s2, cv2.MORPH_CLOSE, k_close)
cv2.imwrite(f"{OUT}/s3_closed.png", s3)

# s4: shave whiskers
k_shave = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2*SHAVE_R+1, 2*SHAVE_R+1))
s4 = cv2.morphologyEx(s3, cv2.MORPH_OPEN, k_shave)

# CUTS: severance lines at measured part joints (x0,y0,x1,y1,thickness),
# in s0 coordinates. These encode joints where distinct parts touch in the
# assembly (clamp stack, casing-to-yoke joint, ...) so labelling can
# separate them. Populated from joint measurements; reviewed with Franz.
CUTS = []
try:
    import json
    CUTS = json.load(open(f"{OUT}/cuts.json"))
except FileNotFoundError:
    pass
for (x0,y0,x1,y1,t) in CUTS:
    cv2.line(s4, (x0,y0), (x1,y1), 0, t)
cv2.imwrite(f"{OUT}/s4_shaved.png", s4)

# s5: connected components
n, labels, stats, cents = cv2.connectedComponentsWithStats(s4, connectivity=8)
rng = np.random.default_rng(7)
overlay = cv2.cvtColor(s0, cv2.COLOR_GRAY2BGR)
kept = []
for i in range(1, n):
    area = stats[i, cv2.CC_STAT_AREA]
    if area < MIN_AREA:
        continue
    kept.append(i)
    color = tuple(int(c) for c in rng.integers(60, 255, 3))
    mask = np.where(labels == i, 255, 0).astype(np.uint8)
    # fill internal holes: flood the outside, holes = neither outside nor mask
    ff = mask.copy()
    h, w = mask.shape
    ffm = np.zeros((h+2, w+2), np.uint8)
    cv2.floodFill(ff, ffm, (0,0), 255)
    holes = cv2.bitwise_not(ff)
    mask = cv2.bitwise_or(mask, holes)
    overlay[mask > 0] = color
    cv2.imwrite(f"{OUT}/cc_{i:03d}.png", mask)
    x, y = int(cents[i][0]), int(cents[i][1])
    cv2.putText(overlay, str(i), (x-20, y), cv2.FONT_HERSHEY_SIMPLEX, 1.6, (0,0,255), 4)
# blend tint over source
src3 = cv2.cvtColor(s0, cv2.COLOR_GRAY2BGR)
tinted = cv2.addWeighted(src3, 0.45, overlay, 0.55, 0)
cv2.imwrite(f"{OUT}/s5_components.png", tinted)

print("components kept:", len(kept))
for i in kept:
    print(f"  cc {i}: area={stats[i, cv2.CC_STAT_AREA]} bbox=({stats[i,0]},{stats[i,1]},{stats[i,2]}x{stats[i,3]})")
