#!/usr/bin/env python3
"""Remove light grey / off-white background from the Vikram logo PNG."""
from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    path = root / "public" / "vikram-gps-tracker-logo.png"
    img = Image.open(path).convert("RGBA")
    w, h = img.size
    px = img.load()

    def bg_match(r: int, g: int, b: int, tol: int = 32) -> bool:
        # Corners are ~237–245; allow texture + vignette
        return max(abs(r - 241), abs(g - 241), abs(b - 239)) <= tol

    def maroon_like(r: int, g: int, b: int) -> bool:
        return r > 55 and r > g + 12 and r > b + 12

    visited = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            r, g, b, _ = px[x, y]
            if bg_match(r, g, b) and not maroon_like(r, g, b):
                visited[y][x] = True
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if visited[y][x]:
                continue
            r, g, b, _ = px[x, y]
            if bg_match(r, g, b) and not maroon_like(r, g, b):
                visited[y][x] = True
                q.append((x, y))

    while q:
        x, y = q.popleft()
        r, g, b, _ = px[x, y]
        px[x, y] = (r, g, b, 0)
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                r2, g2, b2, _ = px[nx, ny]
                if bg_match(r2, g2, b2) and not maroon_like(r2, g2, b2):
                    visited[ny][nx] = True
                    q.append((nx, ny))

    # Interior holes (e.g. letter counters) not reached from edges
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            lo, hi = min(r, g, b), max(r, g, b)
            if lo > 178 and hi - lo <= 30 and not maroon_like(r, g, b):
                px[x, y] = (r, g, b, 0)

    img.save(path, optimize=True)


if __name__ == "__main__":
    main()
