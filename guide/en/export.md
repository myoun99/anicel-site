# Export

Export everything from one window: **Project** (folder icon) at the top left → **Export**.

![](img/export.png)

## Tabs

| Tab | What it exports |
|---|---|
| **Sequence** | A movie (MP4 · MOV) or numbered pictures |
| **Image** | The current frame alone (PNG · JPG · PSD · BMP · TGA · TIFF · WEBP) |
| **Cels** | One drawing = one file, plus the timesheet and cut envelope |
| **Conte Sheet** | The conte sheet as PDF (vector) or PNG · JPG |

## Sequence (movies)

| Item | Contents |
|---|---|
| Name | The file name (for numbered pictures, the naming rule) |
| Format | Numbered pictures · **MP4** (H.264 · H.265) · **MOV** (H.264 · ProRes Proxy · LT · 422 · HQ · 4444) |
| Codec settings | Bitrate · Quality · Channels · BG (White / Black and so on) |
| Scope | **Cut** (the current cut) / **Project** (every cut) |
| Size | **Camera** (the camera frame) / **Canvas** / **Canvas (per cut)** |
| Audio | **Mux the SE mix into the video** — puts the sound of the SE rows in too (muted rows are left out) |
| Options · Layer FX | FX on / Basic only / FX off |
| IN / OUT | The stretch to export, set in the preview |

- Codecs this device can't use show switched off. If **FFmpeg** is on this computer's PATH, you can export with it.
- While exporting, the window's settings are locked and only **Cancel** can be pressed. If you cancel, the video up to that point is kept.

## Cels

Exports one drawing as one file. The timesheet and cut envelope are exported here too.

![](img/export-cels.png)

| Item | Contents |
|---|---|
| Cel format | PNG · JPG … |
| Timesheet format | PNG · JPG · XDTS |
| Cut envelope format · Size | Cut size / Real sheet |
| Kinds to export | Cels · Storyboard · Art · Direction · Timesheet · Cut envelope |
| Label | Pick by [color label](/en/layer-labels) and take (Latest / Take n) — e.g. only the latest take of the key drawings |
| Layers | **Base** (base layers) · **Attach** · **Sheet only** (rows put on the timesheet) · Custom |
| Naming | Folders (Project / Cut / Layer) · Prefix · Digits · Suffix |
| Scope | Pick cuts (switch them on and off in the cut grid) |

- In the list under the preview, switch rows and drawings off and on one by one.
- On the strip above the list, overlay direction, camera path and guides on the drawings when they are exported.
- The file name is the layer name plus the drawing number (e.g. `A1.png`).
- [Attach layers](/en/attach-layers) come out merged with their base layer into one picture.
- [Linked cuts](/en/linked-cuts) are handled as one cut. The timesheet comes out for each linked cut.

## Conte Sheet

- **Vector PDF**: a PDF whose text and lines don't break up when enlarged. For printing and handing out.
- **Page image**: PNG · JPG, one per page.

## Presets and the queue

- **Presets**: in the preset drawer beside the window, name the current settings with **+ Save current**, and press one later to load it.
- **Queue**: stack several settings with **Add to queue**, and export them all at once with **Render All** in the **Render queue** drawer (e.g. cut movie + cels + timesheet).

## Where it is saved

Where to save is asked **when you press Export**. Which window opens, and when, depends on the **device** and **how many files come out**. The line left of Export ("Asks where first, then exports" / "Exports first, then asks where") is this device's order.

| Device | One file<br>(image · video · conte PDF …) | Several files · folders<br>(cels · sequence · conte page images …) |
|---|---|---|
| **Windows · Mac · Linux** | First a **save window** → export | First a **folder window** → export |
| **iPad · iPhone** | Export → then the **export window** | Export → then the **export window** (the whole folder) |
| **Android** | Export → then a **save window** | First a **folder window** → export |

- A **folder window** is the OS window that picks one folder rather than a file.
- When the naming rule makes a folder for each cut or layer, even one file counts as "several · folders".
- Cancel the window that opens after the export and the results are kept: it asks **[Pick again] · [Discard]**.
- **Queue**: devices that ask first ask when you **Add to queue**; devices that ask after ask once, when **Render All** has finished.

### Exporting straight to Google Drive

| Device | One file | Several files · folders |
|---|---|---|
| **Windows · Mac** | Yes — pick the Drive folder the Google Drive desktop app made on the PC (on Windows usually the **G:** drive) | Yes — the same folder |
| **Linux** | Pick the Drive folder a sync tool made | The same |
| **iPad · iPhone** | Yes — Drive in the export window | Yes — Drive in the export window (the whole folder) |
| **Android** | Yes — Drive in the save window | **No** — the folder window has no Drive. Export to a folder on this device, then sync it with a sync app (Autosync and the like) |

## Just one picture, quickly

You can also keep the current frame alone with **Project** → **Save as** → **PNG · JPG …**. → [Opening and saving](/en/files)
