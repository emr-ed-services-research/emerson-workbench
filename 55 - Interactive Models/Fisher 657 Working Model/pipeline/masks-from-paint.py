# -*- coding: utf-8 -*-
"""Build part masks from Franz's hand-painted annotation (ground truth).

Each painted color -> nearest palette entry (distance-capped). Unassigned
non-white pixels (linework, anti-aliased edges) join the nearest part mask
if within a few px of one; leaders/centerlines in open white stay excluded.
"""
import cv2
import numpy as np

PAINTED = r"C:\Users\E1552882\Documents-Local\s0_crop_painted.png"
PALETTE = {
    "upper-diaphragm-casing": (224, 24, 24),
    "diaphragm":              (248, 224, 0),
    "diaphragm-plate":        (0, 128, 80),
    "lower-diaphragm-casing": (0, 168, 200),
    "spring":                 (248, 128, 248),
    "yoke":                   (248, 80, 0),
    "actuator-stem":          (56, 0, 184),
    "spring-seat":            (176, 16, 96),
    "spring-adjustor":        (96, 0, 128),
    "travel-indicator-disk":  (160, 224, 24),
    "travel-indicator-scale": (136, 80, 40),
    "stem-connector":         (160, 168, 168),
    "nameplate":              (128, 208, 248),
    "fasteners":              (184, 176, 248),
    "valve-stem":             (88, 88, 88),
}
img = cv2.imread(PAINTED, cv2.IMREAD_COLOR)  # BGR
H, W = img.shape[:2]
print("painted size:", W, H)

rgb = img[:, :, ::-1].astype(np.int32)
names = list(PALETTE.keys())
pal = np.array([PALETTE[n] for n in names], np.int32)

# distance of every pixel to every palette color
flat = rgb.reshape(-1, 3)
d = np.linalg.norm(flat[:, None, :] - pal[None, :, :], axis=2)
best = np.argmin(d, axis=1)
bestd = d[np.arange(len(flat)), best]

lum = flat.mean(axis=1)
is_white = lum > 235
is_blackline = lum < 60
CAP = 45
assigned = np.where((~is_white) & (~is_blackline) & (bestd < CAP), best + 1, 0)
assigned = assigned.reshape(H, W).astype(np.int32)

# report raw assignment counts
for i, n in enumerate(names):
    c = int((assigned == i+1).sum())
    print(f"  {n:26s} raw px: {c}")

# grow assignments into nearby unassigned ink (linework/AA edges) within 5px
ink = ((~is_white).reshape(H, W)) & (assigned == 0)
for _ in range(5):
    dil = cv2.dilate(assigned.astype(np.float32), np.ones((3,3), np.uint8)).astype(np.int32)
    take = ink & (assigned == 0) & (dil > 0)
    assigned[take] = dil[take]
    ink = ink & (assigned == 0)

import os
os.makedirs("parts2", exist_ok=True)
k3 = np.ones((3,3), np.uint8)
overlay = img.copy()
rng = np.random.default_rng(3)
for i, n in enumerate(names):
    m = ((assigned == i+1).astype(np.uint8)) * 255
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, k3)   # drop stray specks
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, k3)  # heal pinholes
    cv2.imwrite(f"parts2/{n}.png", m)
    print(f"  {n:26s} final px: {int((m>0).sum())}")
cv2.imwrite("parts2/_assigned_labels.png", (assigned * 17 % 255).astype(np.uint8))
print("done")
