# -*- coding: utf-8 -*-
"""Yoke reconstruction step 1: measure everything the grammar needs.
Row-scan profiles of the outer edge and both windows; member thicknesses;
horizontal feature levels; bottom ring geometry."""
import cv2, json
import numpy as np

CX = 742.5

def load(n): return cv2.imread(f"parts2/{n}.png", cv2.IMREAD_GRAYSCALE)

def symmetrize(m, cx):
    H, W = m.shape
    M = np.float32([[-1, 0, 2*cx], [0, 1, 0]])
    return cv2.bitwise_or(m, cv2.warpAffine(m, M, (W, H)))

yk = load("yoke").copy()
yk[535:1015, 795:925] = 0
yk = symmetrize(yk, CX)
yk[505:540, 465:1020] = 255
yk = cv2.morphologyEx(yk, cv2.MORPH_CLOSE, np.ones((5,5), np.uint8))

x0, y0, w0, h0 = cv2.boundingRect(yk)
print(f"bbox x{x0}-{x0+w0} y{y0}-{y0+h0}")

cnts, hier = cv2.findContours(yk, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
holes = []
for i, c in enumerate(cnts):
    if hier[0][i][3] != -1 and cv2.contourArea(c) > 2000:
        hx, hy, hw, hh = cv2.boundingRect(c)
        holes.append((hy, hx, hw, hh, c))
holes.sort()
print("windows:")
for hy, hx, hw, hh, _ in holes:
    print(f"  y {hy}-{hy+hh}, x {hx}-{hx+hw}")

# outer-left profile x(y)
outerL = {}
for y in range(y0, y0+h0):
    row = np.nonzero(yk[y])[0]
    if len(row): outerL[y] = int(row.min())

# window-left profiles
def hole_profiles(c):
    pts = c.reshape(-1,2)
    prof = {}
    for y in np.unique(pts[:,1]):
        xs = pts[pts[:,1]==y][:,0]
        prof[int(y)] = (int(xs.min()), int(xs.max()))
    return prof

# ONE H-shaped hole: upper window + central stem slot + lower window
ph = hole_profiles(holes[0][4])
widths = {y: ph[y][1]-ph[y][0] for y in ph}
ys_sorted = sorted(ph)
# slot rows = narrow section between the wide windows
narrow = [y for y in ys_sorted if widths[y] < 260]
slot_y0, slot_y1 = min(narrow), max(narrow)
slot_l = int(np.median([ph[y][0] for y in narrow]))
slot_r = int(np.median([ph[y][1] for y in narrow]))
print(f"stem slot: y {slot_y0}-{slot_y1}, x {slot_l}-{slot_r} (w {slot_r-slot_l})")
pu = {y: ph[y] for y in ys_sorted if y < slot_y0}
pl_ = {y: ph[y] for y in ys_sorted if y > slot_y1}
uw = (min(pu), min(p[0] for p in pu.values()),
      max(p[1] for p in pu.values()) - min(p[0] for p in pu.values()),
      max(pu) - min(pu), None)
lw = (min(pl_), min(p[0] for p in pl_.values()),
      max(p[1] for p in pl_.values()) - min(p[0] for p in pl_.values()),
      max(pl_) - min(pl_), None)

# member thickness samples
def med(vals): return float(np.median(vals)) if vals else None
th_house = med([pu[y][0]-outerL[y] for y in pu if y in outerL and uw[0]+30 < y < uw[0]+uw[3]-30])
th_leg   = med([pl_[y][0]-outerL[y] for y in pl_ if y in outerL and lw[0]+60 < y < lw[0]+lw[3]-60])
print(f"housing wall t={th_house}, leg t={th_leg}")

# horizontal levels
top_outer = med([min(np.nonzero(yk[:,x])[0]) for x in range(600, 890, 20)])
print(f"top band: outer {top_outer}, window top {uw[0]} -> t_top={uw[0]-top_outer}")
print(f"upper window bottom (ledge) {uw[0]+uw[3]}")
print(f"lower window top {lw[0]}, bottom {lw[0]+lw[3]}")
print(f"foot band: window bottom {lw[0]+lw[3]} to ...")

# bottom region rows (ring)
print("bottom rows:")
prev=None
for y in range(2020, y0+h0, 6):
    row = np.nonzero(yk[y])[0]
    if not len(row): continue
    wd = row.max()-row.min()
    if prev is None or abs(wd-prev) > 8:
        print(f"  y={y}: x {row.min()}-{row.max()} (w{wd})")
        prev=wd
bot = med([max(np.nonzero(yk[:,x])[0]) for x in range(650, 840, 20)])
print(f"bottom edge (center): {bot}")

# outer profile stations every 40px for fit sanity
print("outerL stations:")
for y in range(int(top_outer)+10, y0+h0-6, 60):
    if y in outerL: print(f"  y={y}: x={outerL[y]}  (mirror {2*CX-outerL[y]:.0f})")

json.dump({"outerL": {str(k): v for k, v in outerL.items()},
           "pu": {str(k): v for k, v in pu.items()},
           "pl": {str(k): v for k, v in pl_.items()},
           "th_house": th_house, "th_leg": th_leg,
           "top_outer": top_outer, "bot": bot,
           "uw": [int(v) for v in uw[:4]], "lw": [int(v) for v in lw[:4]],
           "slot": [int(slot_y0), int(slot_y1), int(slot_l), int(slot_r)]},
          open("yoke-measure.json", "w"))
print("written yoke-measure.json")
