# Canvas view

## The view pill

![](img/view-pill.png)

The pill at the bottom of the canvas. When there isn't enough room, some buttons go inside **⚙**.

| | Button | Key |
|---|---|---|
| ![](img/icon-canvas-viewport-fit.png ':class=icon :no-zoom') | Fit to View | <span data-k="canvas-fit"></span> |
| ![](img/icon-canvas-viewport-reset.png ':class=icon :no-zoom') | Reset Zoom (100%) | <span data-k="canvas-reset-view"></span> |
| ![](img/icon-canvas-viewport-zoom-out.png ':class=icon :no-zoom') | Zoom Out | <span data-k="canvas-zoom-out"></span> |
| ![](img/icon-canvas-viewport-zoom-in.png ':class=icon :no-zoom') | Zoom In | <span data-k="canvas-zoom-in"></span> |
| ![](img/icon-canvas-viewport-rotate-ccw.png ':class=icon :no-zoom') | Rotate View Left | <span data-k="canvas-rotate-ccw"></span> |
| ![](img/icon-canvas-viewport-rotate-cw.png ':class=icon :no-zoom') | Rotate View Right | <span data-k="canvas-rotate-cw"></span> |
| ![](img/icon-canvas-viewport-rotate-reset.png ':class=icon :no-zoom') | Straighten View (0°) | <span data-k="canvas-straighten"></span> |
| ![](img/icon-canvas-viewport-flip.png ':class=icon :no-zoom') | Flip View Horizontal | <span data-k="canvas-flip-horizontal"></span> |
| ![](img/icon-canvas-viewport-flip-vertical.png ':class=icon :no-zoom') | Flip View Vertical | <span data-k="canvas-flip-vertical"></span> |
| ![](img/icon-canvas-paper-color-button.png ':class=icon :no-zoom') ![](img/icon-canvas-pasteboard-color-button.png ':class=icon :no-zoom') ![](img/icon-canvas-backdrop-color-button.png ':class=icon :no-zoom') | [Canvas color · Pasteboard color · Backdrop color](/en/canvas-view?id=colors) | |

- Drag the zoom or angle number left and right to change it smoothly; press the pencil to type it. Zoom runs from 10 to 1600%.
- The keys and ± move along set steps (10 · 25 · 50 · 75 · 100 · 125 · 150 · 200 · 300 · 400 · 800 · 1600%), the rotate keys 15° at a time. The mouse wheel zooms around the cursor.
- Flipping turns the view only (the drawing stays as it is).

## Moving it by hand

| Hold and drag | |
|---|---|
| <span data-k="canvas-pan-hold"></span> | Pans the view |
| <span data-k="canvas-rotate-hold"></span> | Rotates the view |

- Dragging the bars at the edges of the canvas pans too.
- Touch and pen controls are in [Touch and pen](/en/touch-pen).

## Pasteboard

- You can draw outside the paper too. That outer area is the **Pasteboard**. On export, it is cropped to the paper size.
- In the **Pasteboard color** window, choose whether to use it (In use by default) and its size (1.5×, 2× or 3× the paper, 3× by default).

## Colors

- **Canvas color**: the paper's base color (for viewing only; it does not go into the drawing).
- **Pasteboard color**: the color outside the paper.
- **Backdrop color**: the color of the window around that.

## Camera view

- Turn on **Camera view** next to the timeline's play button, and everything outside the camera frame is darkened. Playback fits the camera frame too.
- How dark it gets is the camera row's opacity. → [Camera, direction, transition](/en/camera-section)

## Cursor

- In [Preferences](/en/preferences) → **Display**, choose **Brush / Pen / Crosshair** (Crosshair by default). **Brush** shows the brush tip's shape when you hover with the mouse.
- The cursor disappears when you touch with a finger.
