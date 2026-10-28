# Linked cuts

Cuts that use the same drawings together. Fix a drawing in one cut and the fix shows as is in the cuts linked to it; the timing is set in each cut on its own.

## Making one

![](img/menu-cut.png ':size=820')

- Press **Cut** at the top of the timeline → **Create linked cut**: makes a new cut right after the current one that shares its drawings. Its timing and camera keys start empty; it takes over the guides, the cut's color label, the sheet length and the staff names.
- Press **Cut** at the top of the timeline → **Convert to linked cut**: links an existing cut with the current cut (the origin).
  - Layers with the same name become one shared picture, and drawings with the same name are replaced by the origin's. A layer that only one side has is made on the other side with empty timing.
  - If the origin is already linked with other cuts, those cuts are linked too. If the cut you picked is linked with other linked cuts, the two groups merge into one.
  - If the canvas sizes differ, they are matched to the origin's size.
  - One undo brings back every cut the conversion touched.
- To start with the same timing too, duplicate the cut and then convert it to a linked cut.

## Shared, and each cut's own

- **Shared**: the drawings; the layers (adding · deleting · order · name · [color label](/en/layer-labels) · opacity · blend); folders and attaching (including folded folders and opened lanes); the FX set-up (kinds · order · on/off); the [canvas size](/en/canvas-size); the drawing guides; the cut's color label, sheet length and staff names
- **Each cut's own**: the timing, the cut's length, whether a layer shows, the camera's and FX's keys and values, SE and direction
- Give keys names (the [Edit button](/en/timeline?id=edit)), and keys with the same name share their value across linked cuts.
- Image layers are shared only when their drawing names match.
- Layers pasted or duplicated into a linked cut go into the cuts linked with it too.

## Spotting one, and unlinking

![](img/linked-cut.png ':size=1188')

- On the [Conte](/en/storyboard) panel, linked cuts have 🔗 beside the cut name. Press it to see the cuts it is linked with (**Linked with**), and take a cut out with **Unlink**.
- Selecting a cut on the Conte panel and pressing the **Make independent** button at the top unlinks it too. The drawings stay as they are, and from then on each cut changes on its own.
- On the timeline, 🔗 at the right end of a layer's name cell means that layer is linked elsewhere. A linked cut's layers can't be unlinked one at a time; the whole cut is unlinked.
