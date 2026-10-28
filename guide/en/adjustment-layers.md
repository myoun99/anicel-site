# Adjustment layers

![](img/adjustment-layer.png ':size=1188')

A layer that puts an effect (brightness · hue · blur …) on **every layer below it**. It holds no drawing.

## How to use it

1. Make one with **Layer ＋ ▾ → Adjustment** (named **FX1** …). A newly made adjustment layer has no effect yet.
2. Open the row with **▸** and add effects. The effects you can add and their values are the same as in [Effects and transform](/en/effects).
3. Move the row **above** the layers you want it to affect. Layers above it are not affected.

## Good to know

- **Opacity** is the strength of the effect (0% = no effect, 100% = full).
- It has no blend or transform.
- Inside a folder: if the folder is **Pass Through**, the effect reaches below the folder too; with any other blend, it reaches **only inside the folder**. → [Folders](/en/folders)
- Effects can change over time with keys (keys on each lane).
- Adjustment layers can't be copied and pasted.
- Even when you convert to a [linked cut](/en/linked-cuts), adjustment layers stay separate in each cut.
