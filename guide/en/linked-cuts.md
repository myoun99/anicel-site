# Linked cuts

Cuts that share the same drawings (kenyō cuts). The app calls them **linked cuts**. Fix a drawing in one, and every cut linked to it shows the fix; the timing is each cut's own.

## Making one

- **Cut ＋ ▾ → Create linked cut** at the top of the timeline: a new cut right after the current one, sharing its drawings. Its timing and camera keys start empty; it takes over the guides, the cut's colour label, the sheet length and the staff names.
- Press **Cut** at the top of the timeline → **Convert to linked cut…**: links an existing cut with the current one (the origin).
  - Layers with the same name become one shared picture, and a drawing with the same name is replaced by the origin's. A layer that only one side has is made on the other side with empty timing.
  - If the origin is already linked with other cuts, they are linked too. If the picked cut is linked with other linked cuts, the two groups become one.
  - If the canvas sizes differ, they take the origin's size.
  - One undo restores every cut the conversion touched.
- To start with the same timing too, duplicate the cut and then convert it to a linked cut.

## Shared, and each cut's own

- **Shared**: the drawings; the layers (adding, deleting, order, name, [colour label](/en/layer-labels), opacity, blend mode); folders and attaching (folded folders and opened lanes included); the FX set-up (which effects, in what order, on or off); the [canvas size](/en/canvas-size); the drawing guides; the cut's colour label, sheet length and staff names
- **Each cut's own**: the timing, the cut's length, whether a layer shows, the camera's and the FX's keys and values, the SE and direction rows
- Give a key a name (the [Edit button](/en/timeline?id=the-edit-button)), and keys with the same name share their value across linked cuts.
- Image layers are shared only when the drawing names match.
- Layers pasted or duplicated into a linked cut go into the cuts linked with it too.

## Spotting one, and unlinking

- On the [conte](/en/storyboard) panel, a linked cut has 🔗 beside its name. Press it to see the cuts it is linked with (**Linked with**); **Unlink** takes this cut out.
- Selecting the cut on the conte panel and pressing **Make independent** at the top does the same. The drawings stay; from then on each cut changes on its own.
- On the timeline, 🔗 at the right end of a layer's name field means the layer is linked elsewhere. A linked cut's layers cannot be unlinked one by one; the whole cut is.
