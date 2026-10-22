# Timeline

One row is one layer; across is time, in frames.

![](img/timeline.png)

- From the top: **CAM** (camera, transition, direction), **SE** (sound, dialogue), then **ACTION**, the drawing layers.
- One block is one drawing. The big number is the drawing's name; the small number at the block's end is the block's length in frames.
- The colour at the left of a row is its [colour label](/en/layer-labels).
- The tabs at the bottom left of the panel switch between the timeline and the [conte](/en/storyboard).

## Selecting and moving

Frames, layers and the cut blocks of the [conte](/en/storyboard) panel all work the same way.

- The first drag **selects** (one or several).
- A drag that starts on the selection **moves** it. A selection across several rows moves together, whichever row you grab.
- Drop a moved drawing onto a drawing of the same name on its row, and you are asked whether to link them.

## The Edit button

Select a block and press **✎** (Edit) at the top: the window for what you selected opens. A double click on the block does the same.

![](img/se-edit.png)

- A drawing's block (drawing, conte and image layers): the drawing's name
- An SE block: the name (speaker) and dialogue, the type (ON · OFF · MONO), the linked audio
- A direction block: the instruction (PAN and so on)
- A transition block: the kind of change (FI, FO and so on). Its length is changed by dragging the block's end.
- A key on a lane, such as the camera's: the key's name, its in and out speeds, and a position key's path and roving ([camera](/en/camera-section))
- With layers selected, their name (several at once); with cuts selected in the [conte](/en/storyboard) panel, the cut's name

## In-between marks

- **●** among the frame buttons puts an in-between mark on the selected cell, or takes it off.
- Type a number n into **Auto-add In-between Marks** beside it, and the selected blocks get a mark every n frames from their head.

## Lanes and graphs

- Open a row with **▸** at its left to see lanes such as **Transform** and **Effects**; each lane holds keys. Drag a number field to change it, or type the value with the pencil button.
- The **Graph** button on the **Transform** and **Effects** head rows and on the camera row opens the graph of that group. Switch between **Value** and **Speed**, drag keys to move them, or set the easing with the handles.

## Showing and solo

- Press a cell on the head row at the very top of the rail for a menu with **Show all**, **Hide all**, **Solo kind**, **Solo color** and more. Solo works the same on the [conte](/en/storyboard) panel.
