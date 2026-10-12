"""
Lunar Process Engineer — desktop icon.

The mark is the hand wheel: the one control the player touches on every
level, and the thing the whole game is about turning. Behind it, a lunar
limb and a few stars.

Each size is DRAWN at that size, not downscaled from one master — a 16px
icon that keeps the stars and the moon turns to mush, so those drop out
below 32px and the wheel gets heavier strokes to survive. Supersampled
8x and reduced with LANCZOS for the antialiasing.

Run:  python make-icon.py        ->  lpe.ico  (+ lpe-preview.png)
"""
from PIL import Image, ImageDraw
import math, os

HERE = os.path.dirname(os.path.abspath(__file__))

# the game's own palette, read off the running build
INK      = (11, 16, 13, 255)        # panel black-green
INK_LIT  = (23, 33, 27, 255)        # top of the ground gradient
PHOS     = (57, 255, 106, 255)      # phosphor green
AMBER    = (255, 182, 39, 255)      # the wheel
AMBER_LO = (183, 125, 20, 255)      # its shaded side
MARK     = (228, 87, 46, 255)       # the one marked spoke
MOON     = (138, 148, 160, 255)     # steel / lunar limb
STAR     = (205, 222, 212, 255)


def draw(px, S):
    """Draw the icon at logical size `px`, supersampled by S."""
    n = px * S
    img = Image.new("RGBA", (n, n), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    detail = px >= 32                       # moon + stars only when they read
    r_out = n * 0.20 if detail else n * 0.26   # corner radius

    # --- ground: a vertical gradient, dark at the bottom
    for y in range(n):
        t = y / max(1, n - 1)
        c = tuple(round(INK_LIT[i] + (INK[i] - INK_LIT[i]) * t) for i in range(3))
        d.line([(0, y), (n, y)], fill=c + (255,))

    # mask the gradient into a rounded square
    mask = Image.new("L", (n, n), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, n - 1, n - 1], radius=r_out, fill=255)
    img.putalpha(mask)
    d = ImageDraw.Draw(img)

    if detail:
        # --- lunar limb, low and to the right: a disc clipped by the frame
        mr = n * 0.60
        mx, my = n * 0.74, n * 1.08
        d.ellipse([mx - mr, my - mr, mx + mr, my + mr], fill=(41, 54, 48, 255))
        d.arc([mx - mr, my - mr, mx + mr, my + mr], 182, 358,
              fill=MOON[:3] + (205,), width=max(1, int(n * 0.016)))
        # two craters, just enough to read as a surface
        for cx, cy, cr in ((0.40, 0.76, 0.050), (0.66, 0.86, 0.034)):
            d.ellipse([n * (cx - cr), n * (cy - cr), n * (cx + cr), n * (cy + cr)],
                      fill=(31, 41, 37, 255))
        # --- stars
        for sx, sy, ss in ((0.20, 0.17, 0.016), (0.78, 0.13, 0.013),
                           (0.33, 0.30, 0.010), (0.88, 0.33, 0.010)):
            d.ellipse([n * (sx - ss), n * (sy - ss), n * (sx + ss), n * (sy + ss)],
                      fill=STAR)

    # --- the hand wheel
    cx = cy = n * 0.50
    R = n * (0.305 if detail else 0.345)     # outer radius of the rim
    rim = n * (0.075 if detail else 0.105)   # rim thickness
    spoke = n * (0.055 if detail else 0.085)
    hub = n * (0.105 if detail else 0.125)

    # spokes first, so the rim and hub sit over their ends
    for i, ang in enumerate((90, 180, 270, 0)):
        a = math.radians(ang)
        ex, ey = cx + math.cos(a) * R, cy - math.sin(a) * R
        d.line([(cx, cy), (ex, ey)],
               fill=MARK if i == 0 else AMBER, width=int(spoke))

    # rim: a bright ring with a shaded lower-right arc for a little form
    d.ellipse([cx - R, cy - R, cx + R, cy + R], outline=AMBER, width=int(rim))
    d.arc([cx - R, cy - R, cx + R, cy + R], 20, 150,
          fill=AMBER_LO, width=int(rim))

    # hub
    d.ellipse([cx - hub, cy - hub, cx + hub, cy + hub], fill=AMBER)
    d.ellipse([cx - hub * 0.42, cy - hub * 0.42, cx + hub * 0.42, cy + hub * 0.42],
              fill=INK)

    # --- phosphor rim light: the terminal the whole game is played on
    d.rounded_rectangle([0, 0, n - 1, n - 1], radius=r_out,
                        outline=PHOS[:3] + ((95,) if detail else (165,)),
                        width=max(1, int(n * (0.010 if detail else 0.020))))

    return img.resize((px, px), Image.LANCZOS)


SIZES = [16, 24, 32, 48, 64, 128, 256]
frames = [draw(p, 8 if p <= 64 else 4) for p in SIZES]

ico = os.path.join(HERE, "lpe.ico")
frames[-1].save(ico, format="ICO",
                sizes=[(p, p) for p in SIZES],
                append_images=frames[:-1])

# a contact sheet, so the small sizes can be eyeballed without Explorer
pad, x = 12, 12
sheet = Image.new("RGBA", (sum(SIZES) + pad * (len(SIZES) + 1), 256 + pad * 2),
                  (24, 24, 24, 255))
for f, p in zip(frames, SIZES):
    sheet.paste(f, (x, pad + (256 - p)), f)
    x += p + pad
sheet.save(os.path.join(HERE, "lpe-preview.png"))

print("wrote lpe.ico (" + ", ".join(str(p) for p in SIZES) + ")")
print("wrote lpe-preview.png")
