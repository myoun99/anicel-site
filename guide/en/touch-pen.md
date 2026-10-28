# Touch and pen

All of this is changed in [Preferences](/en/preferences) → **Input**.

![](img/prefs-input.png ':size=720')

## Fingers (on the canvas)

| Fingers | Default | What you can choose |
|---|---|---|
| 1-finger drag | **Flip** — left and right for the previous and next drawing, up and down for the layer above and below | Flip (frames / layers) · Screen (pan · zoom · rotate) · Brush size · Touch drawing · None |
| 2 fingers | **Screen** — pan · zoom · rotate | |
| 3 fingers | **Brush size** — drag up and down | |

- **Put down one more finger** during a drag and it gets one step finer: Flip moves one cell at a time, Screen snaps zoom and rotation to steps, and Brush size snaps to [Tool size](/en/brushes?id=tool-size) (**Extra-finger modifier**, on by default).
- **Touch drawing** can only go to one finger. Use it to draw with a finger on a device without a pen.
- Turn on **Ignore all touch** and the canvas no longer reacts to fingers (pen only).

### Taps

| Tap | Action |
|---|---|
| 2-finger tap | Undo |
| 3-finger tap | Redo |
| 4-finger tap | Play / stop |

You can give any action to a 2- or 3-finger **hold**.

### Other items

| Item | Contents |
|---|---|
| Flip haptics | A short buzz each time a flip lands on a different drawing (only on devices with a vibration motor) |
| Two-finger rotation | When off, two fingers only pan and zoom (the rotate buttons and keys still work) |
| Modifier locks rotation | When on, the extra finger holds the angle (pan + stepped zoom). When off (the default), the angle snaps to steps |
| Rotation snap · Zoom snaps | The step values |
| Max zoom lock | Never zoom in past this (Fit to View stops here too) |

## Fingers in place of keys

On a tablet without a keyboard, while you work with the pen, **another finger resting anywhere on the screen** stands in for <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> and <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd>.

- Put a finger down while dragging with the pen and it acts as <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> — a move goes one way only, and a shape's lock ratio flips. To straighten a stroke to 45°, turn on **Finger stroke modifier** (off by default).
- Put a finger down while dragging a corner of the transform box and it acts as <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> — the size changes from the opposite corner.

## Pen and mouse buttons

| Button | Default | What you can choose |
|---|---|---|
| Right click / pen side button | Eyedropper | Eyedropper · Eraser · Pan · Undo · Redo · None |
| Wheel click / pen upper button | None | 〃 |
| Pen tail (turn the pen over) | Eraser | 〃 |

- Choose whether letting go of the button goes back to the tool you had (**Return to tool**) or stays on that tool (**Keep**).
- The Apple Pencil double-tap (brush ⇄ eraser) follows the iPad's system settings.

## Pen pressure

- **Pen pressure response**: the pressure response of the whole app. Each brush's own response is in [Brushes](/en/brushes?id=size-and-opacity).
- **Tablet service**: Standard / Wintab. If pressure doesn't work or acts up, try switching it.
