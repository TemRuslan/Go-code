#!/usr/bin/env python3
"""
Generate favicons matching the current "G" logo (black rounded square + white G).

Usage:
  python3 scripts/generate_favicons.py <output_dir>

Example:
  python3 scripts/generate_favicons.py index2-preview/public
"""

from __future__ import annotations

import json
import os
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


BG = "#0f172a"  # tailwind slate-900
FG = "#ffffff"


def _load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    # Prefer fonts that exist on macOS by default.
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Black.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Verdana Bold.ttf",
    ]
    for p in candidates:
        try:
            if os.path.exists(p):
                return ImageFont.truetype(p, size=size)
        except Exception:
            pass
    return ImageFont.load_default()


def render_base(size: int = 1024) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    # Rounded square background
    pad = int(size * 0.10)
    radius = int(size * 0.22)
    d.rounded_rectangle(
        (pad, pad, size - pad, size - pad),
        radius=radius,
        fill=BG,
    )

    # Centered "G"
    font = _load_font(int(size * 0.62))
    text = "G"
    bbox = d.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]

    x = (size - w) // 2 - bbox[0]
    y = (size - h) // 2 - bbox[1] - int(size * 0.02)
    d.text((x, y), text, font=font, fill=FG)
    return img


def save_png(base: Image.Image, out: Path, size: int, name: str) -> None:
    out.mkdir(parents=True, exist_ok=True)
    img = base.resize((size, size), Image.Resampling.LANCZOS)
    img.save(out / name, format="PNG", optimize=True)


def save_ico(base: Image.Image, out: Path, name: str = "favicon.ico") -> None:
    out.mkdir(parents=True, exist_ok=True)
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    img = base.resize((256, 256), Image.Resampling.LANCZOS)
    img.save(out / name, format="ICO", sizes=sizes)


def save_svg(out: Path, name: str = "favicon.svg") -> None:
    out.mkdir(parents=True, exist_ok=True)
    svg = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect x="52" y="52" width="408" height="408" rx="112" ry="112" fill="{BG}"/>
  <text x="256" y="332" text-anchor="middle" font-size="340" font-family="Arial Black, Arial, sans-serif" fill="{FG}">G</text>
</svg>
"""
    (out / name).write_text(svg, encoding="utf-8")


def save_manifest(out: Path, name: str = "site.webmanifest") -> None:
    out.mkdir(parents=True, exist_ok=True)
    manifest = {
        "name": "Go Gravity",
        "short_name": "Go Gravity",
        "icons": [
            # Relative paths so this works both at site root and in subfolders (e.g. /index2/).
            {"src": "./android-chrome-192x192.png", "sizes": "192x192", "type": "image/png"},
            {"src": "./android-chrome-512x512.png", "sizes": "512x512", "type": "image/png"},
        ],
        "theme_color": BG,
        "background_color": BG,
        "display": "standalone",
    }
    (out / name).write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        print("Usage: generate_favicons.py <output_dir>", file=sys.stderr)
        return 2

    out = Path(argv[1]).resolve()
    base = render_base(1024)

    save_ico(base, out, "favicon.ico")
    save_svg(out, "favicon.svg")
    save_png(base, out, 16, "favicon-16x16.png")
    save_png(base, out, 32, "favicon-32x32.png")
    save_png(base, out, 180, "apple-touch-icon.png")
    save_png(base, out, 192, "android-chrome-192x192.png")
    save_png(base, out, 512, "android-chrome-512x512.png")
    save_manifest(out, "site.webmanifest")

    print(f"Generated favicons in: {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
