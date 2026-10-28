# Layers at a glance

On the timeline, **one row is one layer**. The rows fall into three sections, and the vertical strip on the left names each section.

| Section | Place on screen | Layers that go there |
|---|---|---|
| **CAM** (camera) | Top | Camera · Transition · Direction |
| **SE** (sound effects · dialogue) | Middle | SE |
| **ACTION** (drawings) | Bottom | Animation · Storyboard · Image · Folder · Adjustment |

The section names are the column names of a paper timesheet. Switch to the [X-sheet](/en/timeline?id=x-sheet), and like a paper sheet they become vertical columns, ACTION · SE · CAM from the left.

## Layer kinds

| Kind | In one line | More |
|---|---|---|
| **Animation** | The basic layer: a drawing in each cell | [Animation layers](/en/animation-layers) |
| **Storyboard** | Conte drawings. One block is one panel of the conte sheet | [Storyboard layer](/en/conte-layer) |
| **Image** | One picture, such as a background, over the whole cut | [Image layers](/en/image-layers) |
| **Folder** | Groups layers to show, hide and move them together | [Folders](/en/folders) |
| **Adjustment** | An effect on every layer below it (brightness · hue · blur …) | [Adjustment layers](/en/adjustment-layers) |
| **SE** | Sound and dialogue. Time them against the waveform | [Sound (SE) layers](/en/sound-layers) |
| **Direction** | Writes camera instructions such as PAN and FIX on the sheet | [Camera, direction, transition](/en/camera-section) |
| **Camera** | Camerawork (position · scale · rotation). One per cut, there by itself | 〃 |
| **Transition** | Scene changes such as FI · FO · O.L. One per track, there by itself | 〃 |
| **Attach** (not a kind, a way of attaching) | A layer attached to a base layer that follows its motion and effects (shadows, highlights) | [Attach layers](/en/attach-layers) |

> Default names of new layers: animation **A · B · C …**, image **BG** (**BOOK** if there already is one), storyboard **Conte**, adjustment **FX1**, SE **S1 · S2**, direction **Direction 1**, folder **Folder 1**, camera and transition **Camera** · **Transition**. They follow industry usage, so they are the same whatever language the app is in.

## Making a layer

Make one from the **Layer** pill at the top of the timeline.

- **＋** New Layer <span data-k="layer-add" data-k-paren></span>: an animation layer. On the [Conte panel](/en/storyboard), an SE layer.
- **＋ ▾**: pick the kind to make — Animation · Storyboard · Image · SE · Direction · Adjustment · Folder, plus **Attach free / synced layer** above or below the current layer.

![](img/add-layer.png)

## The cells of a layer row

![](img/layer-row.png ':size=465')

The left of a row (the rail) has these cells, from the left. A cell that doesn't fit the kind stays empty.

| Cell | What it does |
|---|---|
| **Color label** | The stage (Storyboard · Key · Inbetween …). → [Color labels and takes](/en/layer-labels) |
| **Take** | T1–T9 |
| **▸** | Opens the lanes (transform · effects …). → [Effects and transform](/en/effects) |
| **Sheet arrow** | Whether this layer goes on the [timesheet](/en/sheets) or comes off it |
| **Kind icon · name** | **Double-click** the name to change it. Small buttons such as link 🔗, graph and fold may sit beside the name |
| **Clipping** | Clip to layer below (shows only inside the drawing of the layer below) |
| **FX** | Bypasses / applies all of this layer's effects at once |
| **Onion skin** | This layer's onion skin. → [Onion skin](/en/onion-skin) |
| **Eye** | Hide / show |
| **Opacity** | Drag the bar, 0–100% |
| **Blend** | The blend mode (Normal · Multiply · Screen · Overlay …). Folders default to **Pass Through** |

- For on/off cells such as the eye, onion skin, clipping, FX and sheet, **press and sweep up or down**, and every row you pass gets the same state.

### The head row at the top (all layers at once)

Press a cell in the top row of the rail to open a menu for that cell.

| Cell | Menu |
|---|---|
| Section | Show SE rows · Show camera rows |
| Sheet | All on timesheet / All off timesheet · Solo sheet-on rows |
| Color label | Solo color · Clear mark filter |
| Kind | Solo kind |
| Clipping | Release all clipping · Solo clipped layers |
| FX | Apply all fx / Bypass all fx · Solo fx-on rows |
| Onion skin | Apply onion skin to displayed layers / Clear onion skin on displayed layers · Open onion skin panel |
| Eye | Show all / Hide all |
| Opacity · Blend | For every displayed layer |

**Solo** keeps only the rows that match and hides the rest for now. Press it again to undo it.

## Selecting, moving, deleting

- Press a name and that layer becomes the **current layer** (where you draw). Drag to select several rows.
- Drag the selected rows again and **the order changes.** Drop them on a folder and they go inside it.
- You can't move a layer across sections (a drawing layer into the SE section, say). In the CAM section the order is fixed — camera, transition, direction from the top — and only direction rows can swap order with each other.
- Duplicate · Cut · Copy · Paste · Delete are in the Shared pill. → [Timeline](/en/timeline?id=shared-pill)
- You can also rename a layer with **Edit** <span data-k="edit-instance" data-k-paren></span>. Select several rows and edit, and they all change at once.

## What layers don't have

- There is no **layer lock**.
- There is no **light table**. To see other drawings through, use the [onion skin](/en/onion-skin).
- There is no **text layer**. Put letters inside a drawing with the [Text tool](/en/tools?id=text).
