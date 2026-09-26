# -*- coding: utf-8 -*-
"""Yoke constructed from the declared member grammar (Franz 2026-09-26):
straight members snapped exactly straight, shoulder/foot tapers as
band-constrained smoothed measured profiles, windows = member offsets,
stem slot centered, fillets at every junction, symmetric by construction,
binding audit against the painted mask."""
import cv2, json
import numpy as np

CX = 742.5
R_SMALL = 14.0    # standard junction fillet
AUDIT_TOL = 6.0

M = json.load(open("yoke-measure.json"))
outerL = {int(k): v for k, v in M["outerL"].items()}
pl_ = {int(k): v for k, v in M["pl"].items()}
pu_ = {int(k): v for k, v in M["pu"].items()}
th_house, th_leg = M["th_house"], M["th_leg"]
yTop = M["top_outer"]                # 505
yWinTop = M["uw"][0]                 # 539
yLedge = M["uw"][0] + M["uw"][3]     # 1113
yLWTop = M["lw"][0]                  # 1180
yLWBot = M["lw"][0] + M["lw"][3]     # 2062
yBot = M["bot"]                      # 2148
slot_y0, slot_y1, slot_l, slot_r = M["slot"]
xSlot = 0.5*((slot_l) + (2*CX - slot_r))     # symmetric slot wall (left)
xHouse = float(np.median([outerL[y] for y in range(620, 990) if y in outerL]))
xLeg = float(np.median([outerL[y] for y in range(1260, 2000) if y in outerL]))
xEar = float(np.median([outerL[y] for y in range(492, 546) if y in outerL]))
xWinU = xHouse + th_house
xWinL = xLeg + th_leg
xRingBot = float(np.median([outerL[y] for y in range(int(yBot)-4, int(yBot)+1) if y in outerL]))
# ear underside level: where outer jumps from ear x to housing x
yEarBot = max(y for y in outerL if y < 700 and outerL[y] <= xEar + 6)
# foot window corner radius: rows where lower-window left leaves the leg line
rFootL = yLWBot - max(y for y in pl_ if pl_[y][0] <= xWinL + 3)
xWinR_edge = None
rFoot = rFootL
# lower-window top corner radius (big shoulder sweep into the leg wall)
rTopLW_L = min(y for y in pl_ if pl_[y][0] <= xWinL + 3) - yLWTop
# right-side measurements (hole may be asymmetric after the mirror-OR)
_xwr = 2*CX - (xLeg + th_leg) if False else None
print(f"rTopLW={rTopLW_L}")
print(f"xEar={xEar} yEarBot={yEarBot} xHouse={xHouse} xLeg={xLeg} "
      f"xWinU={xWinU} xWinL={xWinL} xSlot={xSlot} xRingBot={xRingBot} rFoot={rFoot}")

# --- smoothed symmetric outer profile for taper zones ---
def smooth_profile(y0, y1, x_start, x_end, iters=60, bw=40.0):
    ys = np.arange(y0, y1+1, 2.0)
    xs = np.array([outerL.get(int(y), np.nan) for y in ys])
    ok = ~np.isnan(xs)
    xs = np.interp(ys, ys[ok], xs[ok])
    x0s = xs.copy()
    for _ in range(iters):
        xs[1:-1] = 0.25*xs[:-2] + 0.5*xs[1:-1] + 0.25*xs[2:]
        d = xs - x0s
        xs = np.where(d > 2.5, x0s+2.5, xs)
        xs = np.where(d < -2.5, x0s-2.5, xs)
    for i in range(len(ys)):
        f0 = min(1.0, (ys[i]-y0)/bw)
        f1 = min(1.0, (y1-ys[i])/bw)
        xs[i] = xs[i]*min(f0,1)*min(f1,1) + x_start*(1-min(f0,1)) + x_end*(1-min(f1,1))
    return list(zip(xs, ys))

# top edge profile top(x) — ears higher than center (sloped flange)
def load0(n): return cv2.imread(f"parts2/{n}.png", cv2.IMREAD_GRAYSCALE)
def symm0(m, cx):
    H, W = m.shape
    Mm = np.float32([[-1, 0, 2*cx], [0, 1, 0]])
    return cv2.bitwise_or(m, cv2.warpAffine(m, Mm, (W, H)))
_yk = load0("yoke").copy()
_yk[535:1015, 795:925] = 0
_yk = symm0(_yk, CX)
_yk[505:540, 465:1020] = 255
_yk = cv2.morphologyEx(_yk, cv2.MORPH_CLOSE, np.ones((5,5), np.uint8))
_txs = np.arange(int(xEar), int(2*CX - xEar) + 1, 3.0)
_tys = []
for x in _txs:
    col = np.nonzero(_yk[:, int(x)])[0]
    _tys.append(float(col.min()) if len(col) else np.nan)
_tys = np.array(_tys)
_ok = ~np.isnan(_tys)
_tys = np.interp(_txs, _txs[_ok], _tys[_ok])
_tmir = np.interp(2*CX - _txs, _txs, _tys)
_tys = 0.5*(_tys + _tmir)
_t0 = _tys.copy()
for _ in range(40):
    _tys[1:-1] = 0.25*_tys[:-2] + 0.5*_tys[1:-1] + 0.25*_tys[2:]
    d = _tys - _t0
    _tys = np.where(d > 2.5, _t0+2.5, _tys)
    _tys = np.where(d < -2.5, _t0-2.5, _tys)
_tys[:6] = _t0[:6]      # ear tip flat stays at its measured height
_tys[-6:] = _t0[-6:]
_lmt = _txs <= CX
_tys[~_lmt] = np.interp(2*CX - _txs[~_lmt], _txs[_lmt], _tys[_lmt])
top_prof = list(zip(_txs, _tys))
yTopL = float(_tys[0])   # top at the ear

shoulder = smooth_profile(995, 1235, xHouse, xLeg)
foot = smooth_profile(2012, int(yBot), xLeg, xRingBot)

def fillet(cx_, cy_, r, a0, a1, n=8):
    """quarter-arc points around center (cx_,cy_) from angle a0 to a1 (deg)"""
    out = []
    for t in np.linspace(np.radians(a0), np.radians(a1), n):
        out.append((cx_ + r*np.cos(t), cy_ + r*np.sin(t)))
    return out

def pl_pts(seq):
    return " ".join(f"L {x:.1f},{y:.1f}" for x, y in seq)

def mirror(seq):
    return [(2*CX - x, y) for x, y in reversed(seq)]

# ---------------- OUTER BOUNDARY (clockwise from top-left ear corner) ----
r = R_SMALL
r_e = 3.0
left_outer = []
left_outer += fillet(xEar+r, yTop+r, r, 180, 270)[::1]           # ear top-left corner
# top edge handled by mirroring; build LEFT side downward:
left_down = []
left_down += [(xEar, yTopL + r_e)]
rEo, rG = 10.0, 40.0
left_down += [(xEar, yEarBot - rEo)]                              # ear side down
left_down += fillet(xEar + rEo, yEarBot - rEo, rEo, 180, 90)      # rounded ear bottom corner
left_down += [(xHouse - rG, yEarBot)]                             # underside inward
left_down += fillet(xHouse - rG, yEarBot + rG, rG, 270, 360)      # one smooth cove into the wall
left_down += [(xHouse, 995)]                                      # housing wall
left_down += shoulder                                             # shoulder taper
left_down += [(xLeg, 1235), (xLeg, 2012)]                         # leg wall
left_down += foot                                                 # foot/ring taper
left_down += [(xRingBot, yBot)]

r_e = 3.0
yTopL = float(np.median(_t0[:8]))   # declared: one flat flush plane at ear height
top_seq = [(xEar + r_e, yTopL), (2*CX - (xEar + r_e), yTopL)]
outer_path = (f"M {top_seq[0][0]:.1f},{top_seq[0][1]:.1f} "
              + pl_pts(top_seq[1:]) + " "                          # measured top edge
              + f"A {r_e:.1f} {r_e:.1f} 0 0 1 {2*CX-xEar:.1f},{yTopL+r_e:.1f} "
              + pl_pts(mirror(left_down)[::-1][1:]) + " "          # right side down
              + f"L {2*CX-xRingBot:.1f},{yBot:.1f} "
              + f"L {xRingBot:.1f},{yBot:.1f} "                    # bottom edge
              + pl_pts(left_down[::-1][1:]) + " "                  # left side up
              + f"A {r_e:.1f} {r_e:.1f} 0 0 1 {top_seq[0][0]:.1f},{top_seq[0][1]:.1f} Z ")

# ---------------- HOLE (upper window + slot + lower window), evenodd -----
rf = float(rFoot)
h = []
h.append((xWinU, yWinTop + r))
rL = float(yLedge - max(y for y in pu_ if pu_[y][0] <= xWinU + 3))
h.append((xWinU, yLedge - rL))
h += fillet(xWinU + rL, yLedge - rL, rL, 180, 90)  # wall -> ledge (measured r)
h.append((xSlot, yLedge))
h.append((xSlot, yLedge))                          # threaded boss: square corner
h.append((xSlot, yLWTop))                          # threaded boss: square corner
# shoulder haunch: measured symmetric sweep (not circular)
_cy = [y for y in range(int(yLWTop), int(yLWTop) + int(rTopLW_L) + 14) if y in pl_]
_cxs = np.array([0.5*(pl_[y][0] + 2*CX - pl_[y][1]) for y in _cy], float)
for _ in range(12):
    _cxs[1:-1] = 0.25*_cxs[:-2] + 0.5*_cxs[1:-1] + 0.25*_cxs[2:]
h.append((float(_cxs[0]), float(_cy[0])))
h += [(float(x), float(y)) for x, y in zip(_cxs, _cy)]
h.append((xWinL, float(_cy[-1]) + 4))
# bottom: per-column measured profile (bowed foot-arc inner edge + curls)
_wxs = np.arange(xWinL + 2, 2*CX - (xWinL + 2) + 1, 3.0)
_wys = []
for x in _wxs:
    col = np.where(_yk[int(yLWTop):int(yLWBot)+4, int(x)] == 0)[0]
    _wys.append(float(col.max() + yLWTop) if len(col) else np.nan)
_wys = np.array(_wys)
_okw = ~np.isnan(_wys)
_wys = np.interp(_wxs, _wxs[_okw], _wys[_okw])
_wmir = np.interp(2*CX - _wxs, _wxs, _wys)
_wys = 0.5*(_wys + _wmir)
_w0 = _wys.copy()
for _ in range(40):
    _wys[1:-1] = 0.25*_wys[:-2] + 0.5*_wys[1:-1] + 0.25*_wys[2:]
    d = _wys - _w0
    _wys = np.where(d > 2.5, _w0+2.5, _wys)
    _wys = np.where(d < -2.5, _w0-2.5, _wys)
_lmw = _wxs <= CX
_wys[~_lmw] = np.interp(2*CX - _wxs[~_lmw], _wxs[_lmw], _wys[_lmw])
botL = [(x, y) for x, y in zip(_wxs, _wys) if x <= CX]
h.append((xWinL, botL[0][1]))
h += botL
hr = mirror(h)   # continues from bottom-right corner up the right side
tail = []
tail += fillet(2*CX - (xWinU + r), yWinTop + r, r, 0, -90)   # UR corner
tail.append((xWinU + r, yWinTop))
tail += fillet(xWinU + r, yWinTop + r, r, 270, 180)          # UL corner
hole_path = (f"M {h[0][0]:.1f},{h[0][1]:.1f} " + pl_pts(h[1:]) + " "
             + pl_pts(hr) + " " + pl_pts(tail) + " Z ")

path = outer_path + hole_path
json.dump({"yoke": path}, open("yoke-shell-path.json", "w"))
print("path written")

# ---------------- AUDIT vs painted mask ----------------------------------
def load(n): return cv2.imread(f"parts2/{n}.png", cv2.IMREAD_GRAYSCALE)
def symmetrize(m, cx):
    H, W = m.shape
    Mm = np.float32([[-1, 0, 2*cx], [0, 1, 0]])
    return cv2.bitwise_or(m, cv2.warpAffine(m, Mm, (W, H)))
yk = load("yoke").copy()
yk[535:1015, 795:925] = 0
yk = symmetrize(yk, CX)
yk[505:540, 465:1020] = 255
yk = cv2.morphologyEx(yk, cv2.MORPH_CLOSE, np.ones((5,5), np.uint8))
# sample constructed path points for distance test
allpts = []
import re as _re
for a, b in _re.findall(r"[LM] (-?\d+\.?\d*),(-?\d+\.?\d*)", path):
    allpts.append((float(a), float(b)))
F = np.array(allpts)
cnts, _ = cv2.findContours(yk, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
big = np.vstack([c.reshape(-1,2) for c in cnts if cv2.contourArea(c) > 2000]).astype(float)
E = np.roll(F, -1, 0) - F
L2 = (E**2).sum(1); L2[L2 == 0] = 1e-9
viol = []
for p in big[::2]:
    if p[1] < 510: continue   # top band: declared flat overrides painted dip
    tt = np.clip(((p-F)*E).sum(1)/L2, 0, 1)
    proj = F + E*tt[:, None]
    d = float(np.sqrt(((proj-p)**2).sum(1).min()))
    if d > AUDIT_TOL: viol.append((round(d,1), int(p[0]), int(p[1])))
print(f"AUDIT: {len(viol)} paint points beyond {AUDIT_TOL}px")
viol.sort(reverse=True)
for v in viol[:8]: print("  ", v)

parts = open("refined2-parts.js", encoding="utf-8").read()
html = f"""<meta charset="utf-8"><style>
body{{margin:0;background:#fff;padding:8px;}}
svg{{width:100%;display:block;}}
path{{fill:#7e9cc4;stroke:#1c3350;stroke-width:2.5;fill-rule:evenodd;stroke-linejoin:round;}}</style>
<div style="font:600 14px system-ui;">FINAL — yoke, constructed member frame</div>
<svg viewBox="380 420 730 1800"><path d="{path}"/></svg>"""
open("../yoke-solo.html", "w", encoding="utf-8").write(html)
print("solo written")
