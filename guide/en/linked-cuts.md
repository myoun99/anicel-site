# Linked cuts

Cuts that share the same drawings (kenyō cuts). The app calls them **linked cuts**. Fix a drawing in one, and every cut linked to it shows the fix; the timing is each cut's own.

## Making one

- **Cut ＋ ▾ → Create linked cut** at the top of the timeline: a new cut that shares the current cut's drawings. Its timing starts empty.
- Press **Cut** at the top of the timeline → **Convert to linked cut…**: links an existing cut with the current one. Layers with the same name become one shared picture, and a drawing with the same name is replaced by the current cut's (the origin's). Undo restores both cuts.
- To start with the same timing too, duplicate the cut and then convert it to a linked cut.

## Shared, and each cut's own

- **Shared**: the drawings; the layers (adding, deleting, order, name, [colour label](/en/layer-labels)); folders and attaching; the FX set-up (which effects, in what order, on or off); the [canvas size](/en/canvas-size); the drawing guides; the cut's colour label
- **Each cut's own**: the timing, the cut's length, a layer's visibility, opacity and blend mode, the camera's and the FX's keys and values, the SE and direction rows
- Give a key a name (the [Edit button](/en/timeline?id=the-edit-button)), and keys with the same name share their value across linked cuts.

## Spotting one, and unlinking

- On the [conte](/en/storyboard) panel, a linked cut has 🔗 beside its name. Press it to see the cuts it is linked with; **Unlink** takes this cut out.
- Selecting the cut on the conte panel and pressing **Make independent** at the top does the same. The drawings stay; from then on each cut changes on its own.
- On the timeline, 🔗 beside a layer's name means the layer is linked elsewhere. A linked cut's layers cannot be unlinked one by one; the whole cut is.
