# Timeline

The panel for the current cut's layers and time. **One row is one layer; across is time (frames)**. The cells and kinds of a layer row are in [Layers at a glance](/en/layers).

![](img/timeline.png)

- One block is one drawing. The big number is the drawing's name; the small number at the block's end is its length (in frames).
- The tabs at the bottom of the panel switch between the **Timeline** and the [Conte panel](/en/storyboard).

## The command bar at the top

| Where | Contents |
|---|---|
| Left | ![](img/icon-playback-skip-to-start-button.png ':class=icon :no-zoom') ![](img/icon-playback-play-button.png ':class=icon :no-zoom') ![](img/icon-playback-loop-toggle.png ':class=icon :no-zoom') ![](img/icon-timeline-camera-view-button.png ':class=icon :no-zoom') ![](img/icon-playback-record-voice-button.png ':class=icon :no-zoom') → [Playback and recording](/en/playback) |
| Pills | **Cut** · **Layer** · **Frame** · **Shared** · **Fx** |
| Right | Cut name · zoom (drag left and right) · zoom to fit · **⇄** (Show X-sheet / Show timeline) |


## Selecting and moving

Blocks, cells, layers, keys and the cut blocks of the [Conte panel](/en/storyboard) all follow the same rules.

- **The first drag selects** (one or several, across several rows too).
- **Drag the selection again to move it.** A selection across several rows moves together, whichever row you grab.
- If a moved drawing lands on a drawing of the same name on its row, you are asked whether to link them.
- **Double-click** a block to open its edit window (see "Edit" below).

## Cut pill

| Action | Contents |
|---|---|
| ＋ New cut | A new cut after the current one |
| Edit cut note | A note on the cut |
| Layer mark | The cut label → [Color labels and takes](/en/layer-labels) |
| Cut settings | This cut's staff |
| Canvas size | → [Canvas size per cut](/en/canvas-size) |
| Create linked cut · Convert to linked cut | → [Linked cuts](/en/linked-cuts) |

Rename a cut on the [Conte panel](/en/storyboard): select its cut block and use **Edit** (or double-click). Change a cut's length by dragging the cut-end handle after the last block.

## Layer pill

![](img/pill-layer.png ':size=110')

| | Action | Key | |
|---|---|---|---|
| ![](img/icon-timeline-toolbar-add-layer-button.png ':class=icon :no-zoom') | New Layer | <span data-k="layer-add"></span> | Pick the kind with the ▾ beside it → [Layers at a glance](/en/layers) |

Press **Layer** for its menu — **Detach from base** · **Rasterize layer** · **Storyboard layer** (animation ⇄ storyboard).

![](img/menu-layer.png ':size=240')

## Frame pill

![](img/pill-frame.png ':size=359')

| | Action | Key | |
|---|---|---|---|
| ![](img/icon-new-frame-button.png ':class=icon :no-zoom') | New Frame | <span data-k="frame-new-drawing"></span> | A new drawing in the selected cell (a new key on a lane) |
| ![](img/icon-blank-exposure-button.png ':class=icon :no-zoom') | Clear | <span data-k="frame-blank-exposure"></span> | Turns the selected cells into empty cells |
| ![](img/icon-auto-frame-toggle-button.png ':class=icon :no-zoom') | Auto-create Frames | <span data-k="frame-auto-create"></span> | When on, just drawing in an empty cell makes a drawing |
| ![](img/icon-toggle-mark-one-button.png ':class=icon :no-zoom') | In-between Mark 1 | <span data-k="frame-toggle-mark-one"></span> | → [Animation layers](/en/animation-layers) |
| ![](img/icon-toggle-mark-button.png ':class=icon :no-zoom') | In-between Mark 2 | <span data-k="frame-toggle-mark"></span> |  |
| ![](img/icon-mark-every-button.png ':class=icon :no-zoom') | Auto-add In-between Marks | <span data-k="frame-mark-every"></span> | A mark every n commas |
| ![](img/icon-push-blocks-button.png ':class=icon :no-zoom') | Push Blocks | <span data-k="timeline-push-blocks"></span> | Opens empty cells at the selected place |
| ![](img/icon-pull-blocks-button.png ':class=icon :no-zoom') | Pull Blocks | <span data-k="timeline-pull-blocks"></span> | Closes the empty cells at the selected place |
| ![](img/icon-set-comma-1-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-2-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-3-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-4-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-n-button.png ':class=icon :no-zoom') | Set 1 · 2 · 3 · 4 · N Commas | <span data-k="timeline-comma-1 timeline-comma-2 timeline-comma-3 timeline-comma-4 timeline-comma-n"></span> | Sets the length of the selected blocks at once (the blocks after them close up or move along) |

Press **Frame** for **Select whole row** (every block on that row).

## Shared pill

Whatever you selected (blocks · layers · keys · cuts), the same buttons answer.

![](img/pill-shared.png ':size=308')

| | Action | Key | |
|---|---|---|---|
| ![](img/icon-shared-edit-button.png ':class=icon :no-zoom') | Edit | <span data-k="edit-instance"></span> | The edit window for what you selected ([below](/en/timeline?id=edit)) |
| ![](img/icon-shared-auto-name-button.png ':class=icon :no-zoom') | Auto Name | <span data-k="edit-auto-name"></span> | Names the selected blocks in order, from a start number |
| ![](img/icon-shared-cut-button.png ':class=icon :no-zoom') | Cut | <span data-k="edit-cut"></span> |  |
| ![](img/icon-shared-copy-button.png ':class=icon :no-zoom') | Copy | <span data-k="edit-copy"></span> |  |
| ![](img/icon-shared-paste-independent-button.png ':class=icon :no-zoom') | Paste independent | <span data-k="edit-paste-independent"></span> | Pastes as a new drawing |
| ![](img/icon-shared-paste-linked-button.png ':class=icon :no-zoom') | Paste linked | <span data-k="edit-paste-linked"></span> | Pastes as the same drawing (fix one and both change) |
| ![](img/icon-shared-unlink-button.png ':class=icon :no-zoom') | Make independent | <span data-k="edit-unlink"></span> | Pulls a linked drawing apart |
| ![](img/icon-shared-duplicate-button.png ':class=icon :no-zoom') | Duplicate | <span data-k="edit-duplicate"></span> | Duplicates the selected layer (on the Conte panel, the cut) |
| ![](img/icon-shared-merge-button.png ':class=icon :no-zoom') | Merge | <span data-k="edit-merge"></span> | Below |
| ![](img/icon-shared-delete-button.png ':class=icon :no-zoom') | Delete | <span data-k="edit-delete"></span> | Deletes what you selected (the larger of cut > layer > cell) |
| ![](img/icon-shared-colour-edit-button.png ':class=icon :no-zoom') | Color Edit |  | Changes or erases the colors of the selected drawings → [Color](/en/color) |

**Merge** — makes the selected layers (two or more, or one folder) one layer — baked as they looked, becoming the topmost layer (one undo). If how it looks may change, it asks first. Merging a layer with attaches keeps the attaches you did not select attached to the result. Skipped for now: linked-cut, conte and reference-image layers, layers with a block that carries an instruction, attaches selected without their base, and a base that is not the topmost when it has attaches you did not select.

When the frame selection holds two or more blocks of one row, **Merge** makes them **one block**, row by row — from where the leftmost block starts to where the last one ends (covering the empty cells between), named after the leftmost block, with the leftmost block's drawing on top where they overlap (one undo).

## Edit

Select a block and press **Edit** <span data-k="edit-instance" data-k-paren></span>, or double-click the block, and the window that fits what you selected opens.

![](img/se-edit.png)

| Selected | What you set in the window |
|---|---|
| A drawing block (animation · storyboard · image) | The drawing's name |
| An SE block | Name (speaker) · Type (ON · OFF · MONO) · Dialogue · Linked audio → [Sound (SE) layers](/en/sound-layers) |
| A direction block | Instruction (PAN and so on) · name · start · end → [Camera, direction, transition](/en/camera-section) |
| A transition block | The kind of change (FI · FO and so on) |
| A key on a lane | The key's name · speed · path · roving → [Effects and transform](/en/effects) |
| A layer | The layer's name (several at once) |
| A cut on the Conte panel | The cut's name |

## X-sheet

Press **⇄** (Show X-sheet) at the right end, and the timeline turns **vertical** like a paper timesheet (time runs from top to bottom; ACTION · SE · CAM columns from the left). It does the same as the timeline, and the arrow keys follow the sheet's directions. → [Shortcuts](/en/shortcuts)

## Zoom

- Drag the zoom number on the right left and right to change the cell width. **Timeline Zoom to Fit** fits the whole cut in the panel.
- Turn on [Preferences](/en/preferences) → **Display** → **Frame lines inside blocks**, and a vertical line is drawn for every frame inside blocks too.
