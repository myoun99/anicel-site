# Brushes

## Picking a brush

![](img/tool-brush-library.png ':size=328')

Pick the Brush tool <span data-k="tool-brush" data-k-paren></span> or the Eraser <span data-k="tool-eraser" data-k-paren></span> and the brush list appears in the **Tool library**.

- The **group** tabs are on the left, and the brushes of that group beside them. Press one to switch to that brush.
- The built-in groups: Basic · Pencil · Pen · Dry Media · Watercolor · Oil · Airbrush · Blend · Texture · Decoration.
- Drag a brush to change the order. Drag it over another group's tab and wait a moment: that group opens and you can move the brush there.
- Each group and brush can have a shortcut (separately for the Brush tool and the Eraser). → [Shortcuts](/en/shortcuts)

## Size and opacity

Change them on the **vertical pill at the left edge** of the canvas.

- The chip at the top: **Blend modes** (Normal · Behind · Erase · Darken · Multiply …).
- **Size** (0.1–2000 px) and **Opacity** bars: drag to change. ± and the mouse wheel move one step at a time along the steps of [Tool size](/en/brushes?id=tool-size).
- Press the **pencil button** (Type a value) beside the number and a number pad opens. The first key replaces the old value; enter it with ✓ or <kbd class="k-pc">Enter</kbd><kbd class="k-mac">↩</kbd>, and back out with <kbd class="k-pc">Esc</kbd><kbd class="k-mac">⎋</kbd>.
- The curve button under a bar sets that value's **Response** (Pressure · Tilt · Speed · Random, Min · Max).
- To move the pill to the top strip, use **Settings** (⚙) → **Panels** → **Brush values on the top strip**.

### Tool size

![](img/panel-tool-size.png ':size=328')

The **Tool size** panel on the right strip is a shelf of 40 sizes you use often (0.7–2000). Press one to get that size. The size bar also snaps to these values as you drag it.

## Brush settings

![](img/tool-brush-settings.png ':size=328')

The **Tool settings** panel holds every value of the current brush. The preview stroke at the top changes as you change the values. Fields that don't apply to that brush are hidden.

| Group | Main items |
|---|---|
| **Ink** | Flow (+pressure) |
| **Brush tip** | Tip shape (you can add a tip from an image) · Repeat Method · Hardness · Anti-alias · Roundness · Angle (Line Direction · Pen Direction · Barrel Rotation · Random) · Spacing |
| **Mixing** | Mix with ground / Blur · Paint amount · Paint density · Colour stretch |
| **Scattering** | Scatter % · Count (1–16) · Both Axes |
| **Texture** | Dual Tip (Scale · Density · Blend) · Texture (Scale · Density · Multiply/Height · Invert · Brightness · Contrast) |
| **Correction** | Sharpen corners · Stabilizer (0–100, By speed) · Post-correction (0–100, adjusted by speed and zoom) · Bezier curve |

Each brush remembers the values you change, and they go along when you export the brush.

## Making your own brushes

- **＋** (Save current settings as preset) at the top of the list — saves the current values as a new brush.
- The **⋯** menu: New group · Rename group · Delete group · Rename selected brush · Delete · Export brush · Export brush group · Reset brush library. The view (Tip icon · Stroke preview · Name) is changed here too.
- Use **Register as Tip** in the Stamp of the [Cut tool](/en/tools?id=cut), and the drawing you hold becomes a brush tip.

## Bringing in brushes from other apps

Pick files with the **Import brushes** button, or drop them onto the window.

| Format | App |
|---|---|
| `.abr` | Photoshop (versions 6 · 7 · 10. The very old 1 and 2 can't be read) |
| `.sut` · `.sutg` | CLIP STUDIO PAINT |
| `.anibrush` | Anicel (an exported brush) |

## Pen pressure

- Each brush's response is set with the curve button above; the **pen pressure curve for the whole app** is set in [Preferences](/en/preferences) → **Input** → **Pen pressure response**.
- If pressure acts up on Windows, try switching the Windows **Tablet service** (Standard / Wintab) in the same place.
