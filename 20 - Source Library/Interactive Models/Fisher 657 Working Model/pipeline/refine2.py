# -*- coding: utf-8 -*-
"""Refinement rev B — per Franz's correction list (2026-09-25):
 - yoke: remove front-view panel + nameplate surround BEFORE symmetrizing;
   top of housing flush and connected left-to-right behind the spring;
   NO corner rounding (straight edges stay straight; orthogonal snap)
 - casings: symmetric, light smoothing only on genuinely curved runs
 - diaphragm: keep the painted primitive shape; extract its rest centerline
   and the molded-dip pivot points for the hinge animation
 - no nameplate, no fasteners, no connector, no indicator disk
 - stem: bottom ~1 inch threaded
 - scale: 0 at top aligned to stem bottom at rest; 3/4 at +60px; OPEN at 0
"""
import cv2, json
import numpy as np

CX = 742.5

def load(n):
    return cv2.imread(f"parts2/{n}.png", cv2.IMREAD_GRAYSCALE)

def symmetrize(m, cx):
    H, W = m.shape
    M = np.float32([[-1, 0, 2*cx], [0, 1, 0]])
    return cv2.bitwise_or(m, cv2.warpAffine(m, M, (W, H)))

def snap_ortho(pts, ang_tol_deg=6):
    # make near-vertical/horizontal segments exactly so (straight stays straight)
    pts = [list(p) for p in pts]
    n = len(pts)
    for i in range(n):
        x0, y0 = pts[i]; x1, y1 = pts[(i+1) % n]
        dx, dy = x1-x0, y1-y0
        L = (dx*dx+dy*dy) ** 0.5
        if L < 6: continue
        import math
        a = abs(math.degrees(math.atan2(dy, dx))) % 180
        if a < ang_tol_deg or a > 180-ang_tol_deg:        # horizontal
            ym = (y0+y1)/2; pts[i][1]=ym; pts[(i+1)%n][1]=ym
        elif abs(a-90) < ang_tol_deg:                      # vertical
            xm = (x0+x1)/2; pts[i][0]=xm; pts[(i+1)%n][0]=xm
    return [tuple(p) for p in pts]

def chaikin(pts, iters=1):
    for _ in range(iters):
        out = []
        n = len(pts)
        for i in range(n):
            p, q = pts[i], pts[(i+1) % n]
            out.append((0.75*p[0]+0.25*q[0], 0.75*p[1]+0.25*q[1]))
            out.append((0.25*p[0]+0.75*q[0], 0.25*p[1]+0.75*q[1]))
        pts = out
    return pts

def to_path(m, eps, smooth_iters, snap):
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5,5), np.uint8))
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((3,3), np.uint8))
    cnts, _ = cv2.findContours(m, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)
    d = ""
    for c in cnts:
        if cv2.contourArea(c) < 400: continue
        ap = cv2.approxPolyDP(c, eps, True).reshape(-1, 2).astype(float)
        pts = [tuple(p) for p in ap]
        if snap: pts = snap_ortho(pts)
        if smooth_iters: pts = chaikin(pts, smooth_iters)
        d += "M " + " L ".join(f"{x:.1f},{y:.1f}" for x, y in pts) + " Z "
    return d.strip()

parts = {}

# --- yoke: strip front panel, force flush connected top, no rounding ---
yk = load("yoke").copy()
# remove the front-view housing panel + nameplate surround (right of the
# sectioned wall); symmetrize then rebuilds the right side from the clean left
yk[535:1015, 795:925] = 0
yk = symmetrize(yk, CX)
# top of the housing: flush and connected left-to-right at the casing joint
yk[505:540, 465:1020] = 255
parts["yoke"] = to_path(yk, 3.0, 0, True)

# --- casings: symmetric; curves smoothed lightly, flanges snapped ---
up = symmetrize(load("upper-diaphragm-casing"), CX)
parts["upper-diaphragm-casing"] = to_path(up, 3.0, 0, True)  # no rounding (Franz)
lo = symmetrize(load("lower-diaphragm-casing"), CX)
parts["lower-diaphragm-casing"] = to_path(lo, 3.0, 0, True)  # no rounding (Franz)

# --- spring seat & adjuster: EXACT painted geometry (hard geometry) ---
parts["spring-seat"] = to_path(load("spring-seat"), 2.5, 0, True)
parts["spring-adjustor"] = to_path(load("spring-adjustor"), 2.5, 0, True)

# --- plate: straight edges, no rounding ---
pl = symmetrize(load("diaphragm-plate"), CX)
parts["diaphragm-plate"] = to_path(pl, 3.0, 0, True)

# --- diaphragm: rest centerline + pivot extraction from the painted shape ---
md = load("diaphragm")
ys, xs = np.nonzero(md)
lx = int(xs.min()); rx = int(xs.max())
ly = int(np.median(ys[xs < lx+20])); ry = int(np.median(ys[xs > rx-20]))
px, py, pw, ph = cv2.boundingRect(load("diaphragm-plate"))
prof = []
for x in range(lx, int(CX), 4):
    col = np.nonzero(md[:, x])[0]
    if len(col): prof.append((x, float(np.median(col))))
# molded dip = maximum-y point between clamp and the rise onto the plate
dipx, dipy = max(prof, key=lambda p: p[1])
# junction where centerline reaches plate-top altitude
joinx = next((x for x, y in prof if x > dipx and y < py + 22), px + 40)
# EXACT dense centerline across the full span + median band thickness.
# The animation warps THESE points piecewise; it never re-approximates them.
center = []
thick = []
floor = []   # lower-casing inner surface under each centerline point (drape limit)
mlow = load("lower-diaphragm-casing")
for x in range(lx, rx+1, 3):
    col = np.nonzero(md[:, x])[0]
    if len(col):
        cy = float(np.median(col))
        center.append([int(x), cy])
        thick.append(len(col))
        lc = np.nonzero(mlow[:, x])[0]
        lc = lc[lc > cy]
        floor.append(int(lc.min()) if len(lc) else None)
# --- declared-geometry denoise (Franz 2026-09-26): the diaphragm is a
# constant-thickness membrane; symmetrize the rest centerline and smooth
# INSIDE a +-2.5px band of the measurement. Same 3px x-grid, y-only —
# the piecewise warp breakpoints and the per-index floor stay valid.
_xs = np.array([p[0] for p in center], float)
_ys = np.array([p[1] for p in center], float)
_ys0 = _ys.copy()
_ymir = np.interp(2*CX - _xs, _xs, _ys)
_ys = 0.5*(_ys + _ymir)
for _ in range(40):
    _ys[1:-1] = 0.25*_ys[:-2] + 0.5*_ys[1:-1] + 0.25*_ys[2:]
    _dev = _ys - _ys0
    _ys = np.where(_dev > 2.5, _ys0 + 2.5, _ys)
    _ys = np.where(_dev < -2.5, _ys0 - 2.5, _ys)
_ys[0], _ys[-1] = _ys0[0], _ys0[-1]   # clamp edges pinned
print(f"diaphragm denoise: max dev {np.abs(_ys-_ys0).max():.2f}px, "
      f"mean {np.abs(_ys-_ys0).mean():.2f}px (band 2.5)")
center = [[int(x), float(y)] for x, y in zip(_xs, _ys)]

parts["_dia"] = {
    "clampL": [lx, ly], "clampR": [rx, ry],
    "dipL": [int(dipx), int(dipy)],
    "dipR": [int(2*CX - dipx), int(dipy)],
    "joinL": [int(joinx)], "joinR": [int(2*CX - joinx)],
    "plateTop": int(py), "cx": CX,
    "band": float(np.median(thick)),
    "centerline": center,
    "floor": floor,
}
print("diaphragm:", parts["_dia"])

with open("refined2-parts.js", "w", encoding="utf-8") as f:
    f.write("window.REFINED2 = " + json.dumps(parts) + ";\n")
print("written refined2-parts.js")
