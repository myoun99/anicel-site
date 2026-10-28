# Tools

The vertical strip at the left of the canvas.

| | Button | Key |
|---|---|---|
| ![](img/icon-undo-button.png ':class=icon :no-zoom') | Undo | <span data-k="edit-undo"></span> |
| ![](img/icon-redo-button.png ':class=icon :no-zoom') | Redo | <span data-k="edit-redo"></span> |
| ![](img/icon-rail-onion-skin-button.png ':class=icon :no-zoom') | [Toggle Onion Skin](/en/onion-skin) | <span data-k="onion-skin-toggle"></span> |
| ![](img/icon-rail-deselect-button.png ':class=icon :no-zoom') | Deselect | <span data-k="selection-deselect"></span> |
| ![](img/icon-rail-confirm-button.png ':class=icon :no-zoom') | [Confirm](/en/tools?id=confirm-and-cancel) | <span data-k="edit-confirm"></span> |
| ![](img/icon-rail-visibility-solo-button.png ':class=icon :no-zoom') | Solo active layer | <span data-k="layer-visibility-solo"></span> |
| ![](img/icon-tool-brush-button.png ':class=icon :no-zoom') | [Brush](/en/tools?id=brush) | <span data-k="tool-brush"></span> |
| ![](img/icon-tool-eraser-button.png ':class=icon :no-zoom') | [Eraser](/en/tools?id=eraser) | <span data-k="tool-eraser"></span> |
| ![](img/icon-tool-eyedropper-button.png ':class=icon :no-zoom') | [Eyedropper](/en/tools?id=eyedropper) | <span data-k="tool-eyedropper"></span> |
| ![](img/icon-tool-fill-button.png ':class=icon :no-zoom') | [Fill](/en/tools?id=fill) | <span data-k="tool-fill"></span> |
| ![](img/icon-tool-text-button.png ':class=icon :no-zoom') | [Text](/en/tools?id=text) | <span data-k="tool-text"></span> |
| ![](img/icon-tool-shape-button.png ':class=icon :no-zoom') | [Shape](/en/tools?id=shape) | <span data-k="tool-shape"></span> |
| ![](img/icon-tool-guide-button.png ':class=icon :no-zoom') | [Guide](/en/tools?id=guide) | <span data-k="tool-guide"></span> |
| ![](img/icon-tool-select-button.png ':class=icon :no-zoom') | [Select](/en/tools?id=select) | <span data-k="tool-select"></span> |
| ![](img/icon-tool-move-button.png ':class=icon :no-zoom') | [Transform](/en/tools?id=transform) | <span data-k="tool-transform-normal"></span> |
| ![](img/icon-tool-cut-button.png ':class=icon :no-zoom') | [Cut](/en/tools?id=cut) | <span data-k="tool-cut"></span> |

When you pick a tool, the **Tool library** (its kinds) and **Tool settings** (its values) change to that tool's. A tool button reopens with the kind you used last.

## Brush

| Tool library | Tool settings |
|---|---|
| ![](img/tool-brush-library.png ':class=panel') | ![](img/tool-brush-settings.png ':class=panel') |

- Size · opacity · blend mode are on the vertical pill at the left edge of the canvas. Making and editing brushes → [Brushes](/en/brushes)

| Action | Key |
|---|---|
| Straight, in 45° steps (while drawing) | <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> |
| A straight line from the end of the last stroke (tap while holding) | <span data-k="canvas-line-hold"></span> |

## Eraser

- The Tool library and Tool settings are the [brush](/en/tools?id=brush)'s. It remembers its own brush and size.

## Eyedropper

| Tool settings |
|---|
| ![](img/tool-eyedropper-settings.png ':class=panel') |

- While using another tool, hold <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> and it becomes the eyedropper (except in the select and transform tools).

## Fill

| Tool library | Tool settings |
|---|---|
| ![](img/tool-fill-library.png ':class=panel') | ![](img/tool-fill-settings.png ':class=panel') |

- **Expand** — widens the filled area to fill under the line.
- **Gap Close** — treats a line with small breaks as closed.
- **Fill Beyond Canvas** — when off, an area open to the edge of the paper is not filled.

## Text

| Tool settings |
|---|
| ![](img/tool-text-settings.png ':class=panel') |

- Press to put letters there, or drag for a text box that wide. Press existing text to edit it again.
- The text goes **inside the drawing of that cell** (there is no separate text layer).
- A font brought in with **Import a font file** (.ttf · .otf · .ttc) travels with the project file.

## Shape

| Tool library | Tool settings |
|---|---|
| ![](img/tool-shape-library.png ':class=panel') | ![](img/tool-shape-settings.png ':class=panel') |

- It is drawn with the current brush. Hold <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> to flip **Lock ratio**.

## Guide

| Tool library | Tool settings |
|---|---|
| ![](img/tool-guide-library.png ':class=panel') | ![](img/tool-guide-settings.png ':class=panel') |

- **Each cut** has its own. One symmetry guide acts at a time; several perspective guides can act together.
- Drag the handles on the canvas to move the origin, angle, vanishing points and eye level.

## Select

| Tool library | Tool settings |
|---|---|
| ![](img/tool-select-library.png ':class=panel') | ![](img/tool-select-settings.png ':class=panel') |

| At the start of a press | Mode |
|---|---|
| <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> | Add |
| <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> | Subtract |
| <kbd class="k-pc">Shift+Alt</kbd><kbd class="k-mac">⌥⇧</kbd> | Intersect (only the overlap) |

- Close a polygon by pressing its first point or <span data-k="edit-confirm"></span>. A single press without dragging clears the selection.
- The selection stays when you move to another cell or layer.

## Transform

| Tool library | Tool settings |
|---|---|
| ![](img/tool-move-library.png ':class=panel') | ![](img/tool-move-settings.png ':class=panel') |

| Mode | Key |
|---|---|
| Normal Transform | <span data-k="tool-transform-normal"></span> |
| Free Transform | <span data-k="tool-transform-free"></span> |

- Drag inside the box to move, outside to rotate, a corner to scale (<kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> = from the opposite corner), the middle of a side to scale one way.
- With no selection, the whole drawing transforms.
- Transform with **many cells and layers** selected on the timeline, and every drawing in that range gets the same transform (hidden layers and empty cells are skipped).

## Cut

| Tool library | Tool settings |
|---|---|
| ![](img/tool-cut-library.png ':class=panel') | ![](img/tool-cut-settings.png ':class=panel') |

- Lifts the part you circle so you can move it. Turn off **Delete original** to copy instead.
- **Stamp** — press to stamp what you hold once, drag to stamp it again and again. **Register as Tip** makes it a brush tip.

## Confirm and cancel

| | Key |
|---|---|
| Confirm ![](img/icon-rail-confirm-button.png ':class=icon :no-zoom') | <span data-k="edit-confirm"></span> |
| Cancel | <span data-k="selection-transform-cancel"></span> |

- Before you apply, undo steps back one action at a time; after you apply, the whole transform undoes at once.
- Switching to another tool applies an open transform.
