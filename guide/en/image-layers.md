# Image layers

A layer that lays **one picture over the whole cut**, such as a background (BG) or a book. It is named **BG**, or **BOOK** if there already is a BG, and its color label starts as **Art Material**.

![](img/overview-cut2.png)

## Making one

- **Layer ＋ ▾ → Image**: an empty image layer. Draw on it directly.
- **From a file**: drop a picture file onto the window, or pick it with **Project** → **Open File**, and the **Import** window opens. Set **Into** (New layer · New cut · Media …) on each row and press **Import**. → [Media panel and import](/en/media-pool)
- **From the media panel**: the media's menu → **Place**.

## The file as it is vs. Rasterize

Choose **Rasterize** when you import.

| | Rasterize off (reference) | Rasterize on |
|---|---|---|
| What goes into the layer | A picture that **points at** the file — at its original resolution | A picture **baked** into canvas pixels |
| Drawing on it | No | Yes |
| Where you place it | **Reference** at the top of the lanes (position · scale · rotation) | Like any drawing |
| Media panel | It stays there | It doesn't stay |

- A reference image layer has a file button beside its name. Press it to **Rasterize** (you can bake it later).
- Grab a reference layer with the transform tool and a box appears on the canvas so you can move it by hand.

## Numbered pictures, PSD, movies

- Pick just one of a set of numbered files such as `A1.png` · `A2.png`, and they all come in. Like a movie, **one reference layer changes over time** as it shows; choose the range with IN/OUT in the preview. Rasterize it and each picture becomes a drawing.
- For a PSD, choose **Keep layers** (layers and folders as they are) or **Merge layers** (into one picture).
- For a movie, choose **Picture + sound / Picture only / Sound only**.

## Good to know

- An image layer covers the whole cut with one picture. You can empty the picture, but you don't split it into cells.
- It has no onion skin. Clipping, blend, effects and transform work.
- Between [linked cuts](/en/linked-cuts), image layers with **the same name** are linked.
