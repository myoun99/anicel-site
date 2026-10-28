# Folders

![](img/folder.png ':size=1188')

Group several layers to show and hide them together, and to give them opacity, blend, effects and transform together.

## Making one and putting layers in

- Make an empty folder with **Layer ＋ ▾ → Folder** (named **Folder 1** …).
- Drag a layer row and drop it on a folder row, and it goes **inside that folder**. Drag it out of the folder to take it out.
- Folders can go inside folders.
- Fold and unfold a folder with the fold button at the end of its name.

## What a folder row does

| Cell | What it does |
|---|---|
| Eye | Hides / shows the layers inside all at once |
| Opacity | The opacity of the whole folder |
| Blend | See "Pass Through and other blends" below |
| Clipping | Clips the whole folder to the layer below |
| FX · lanes | [Effects and transform](/en/effects) on the whole folder |

- You don't draw in a folder (it has no cells).
- Select a folder with the transform tool and all the layers inside move together.
- Folders can't be copied and pasted.

## Pass Through and other blends

- **Pass Through** (the default): as if the folder weren't there, each layer inside blends with the picture below on its own. An [adjustment layer](/en/adjustment-layers) inside also affects the layers below, outside the folder.
- **Normal · Multiply …** (anything but Pass Through): the inside of the folder is first merged into one picture, and that picture then blends with what's below in the chosen way. An adjustment layer inside affects only the inside of the folder.
