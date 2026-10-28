# Attach layers

A layer that **is attached to a base layer**: it follows the base's motion but keeps its own drawings. Use it for things that always go with the main drawing, such as shadows and highlights.

![](img/add-layer.png)

## Attaching

- Select the base layer and pick **Attach free / synced layer** **above / below** from **Layer ＋ ▾**.
- You can also drag an existing layer and drop it **on** the base layer to attach it ("attach to {name} (synced/free)" appears). Dropping it between layers already attached also attaches it to that base.
- What can be a base layer: animation · storyboard · image · direction layers (you can't attach to an attach layer).
- The name is the base layer's name plus a number — **A+1** when attached above, **A-1** when attached below. The numbers count the layers attached to that base.

## Synced and free

| | Synced | Free |
|---|---|---|
| Timing | **Follows** the base layer's blocks exactly | Set **on its own** |
| Block length · marks | Can't be edited (they change when you edit the base layer) | Free |
| Use it when | Each drawing has its own shadow drawing | The shadow changes less often than the main drawing, and so on |

## What follows the base layer

- **Transform · effects**: an attach layer has no transform or effects of its own; it wears the base layer's (position · scale · rotation · opacity · effects). If you attach a layer that already has effects, you are told first that those effects will go.
- **The exception — attach layers on a [storyboard layer](/en/conte-layer)**: they keep their own transform and effects, and don't wear the storyboard layer's. Use them to give some drawings their own motion or effects while you work on the conte.
- The **color label** is inherited from the base layer.
- Fold the base layer and they fold with it; delete the base layer and they are deleted with it.
- They don't go on the [timesheet](/en/sheets) at first. To put one on, press the sheet arrow on its row.

## Attach folders

The attach layers of one base layer can be gathered into folders — for instance one per stage, such as direction and animation supervision.

- A folder attaches by dragging, as a layer does: drop it on the base layer's row, or between the attach layers already there. An empty folder attaches too. Then drop attach layers on the folder row to put them in.
- An attach folder moves with its base layer. Its row has only the **Eye, Opacity, Blend and fold**; it has no transform or effects.
- Folders can go inside it. A plain layer dropped in becomes an attach of that base.
- The attaches of a [Storyboard layer](/en/conte-layer) can be gathered into folders as well, and the [Conte panel](/en/storyboard) shows them as the timeline does (fold, indent, drag in).

## Detaching

**Layer** pill menu → **Detach from base**. A detached layer becomes an ordinary layer. Attach layers on a [storyboard layer](/en/conte-layer) can't be detached.
