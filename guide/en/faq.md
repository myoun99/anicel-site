# FAQ

[](../../launch/latest/en/notice.md ':include')

## Saving and files

**The app closed and my work is gone.**
Autosave is off at first. Turn on [Preferences](/en/preferences) → **Autosave** and it saves at the interval you set. → [Opening and saving](/en/files?id=autosave)

**It says saving failed.**
Your work up to then is in the **failed copy** inside the app. Before you close the app, keep it somewhere else with **Project** → **Back up failed copy** or **Save as**. → [Opening and saving](/en/files?id=when-saving-fails-failed-copy)

**I opened the project on another device and some pictures, sound or video are missing.**
Files brought in as "Link" have their originals outside the project file. Link them again with **Find in folder** in the media panel, or use **Keep inside the project file** before you move the project. → [Media panel and import](/en/media-pool?id=when-linked-files-go-missing)

**Can I open files on Google Drive or Dropbox directly?**
Yes. Pick the project file on Drive or Dropbox in the **Open** window and it opens. Whether a folder window can pick Drive, and how exports reach it, depend on the device and the number of files — the tables are in [Opening and saving › On cloud storage and tablets](/en/files?id=on-cloud-storage-and-tablets) and [Export › Exporting straight to Google Drive](/en/export?id=exporting-straight-to-google-drive).

**Can I open TVPaint and CLIP STUDIO files?**
Open a `.tvpp` or `.clip` with **Open File** and it comes in as a new project. The original doesn't change. → [Opening and saving](/en/files)

## Drawing

**Nothing gets drawn.**
- Check that the current layer is one that takes drawings. You can't draw on folders, adjustment layers, SE or camera rows, or on a **reference image layer** that holds a file as it is (rasterize a reference image with **Rasterize** and you can draw on it). → [Layers at a glance](/en/layers)
- If the cell is empty, turn on **✦** (Auto-create Frames) or make a drawing first with **Frame ＋**.

**Pen pressure doesn't work (Windows).**
In [Preferences](/en/preferences) → **Input** → **Tablet service**, try switching between **Standard** and **Wintab**.

**Pressing the pen's side button gives me the eyedropper.**
That is the default. Change it in [Preferences](/en/preferences) → **Input** → **Canvas**. → [Touch and pen](/en/touch-pen)

**I can't see the previous drawing through.**
Onion skin is turned on **per layer**. Use the onion skin cell on that layer's row, or **Toggle Onion Skin** <span data-k="onion-skin-toggle" data-k-paren></span>. → [Onion skin](/en/onion-skin)

**Where are layer lock, the light table and text layers?**
There is no layer lock. See drawings through with the [onion skin](/en/onion-skin), and put letters inside a drawing with the [Text tool](/en/tools?id=text).

## Screen

**A panel disappeared / the layout is a mess.**
In **Settings** (⚙) → **Panels**, turn the panel back on or press **Reset workspace layout**. → [Screen and panels](/en/screen)

**I want to change the app's language.**
[Preferences](/en/preferences) → **Language** → **Program language**. The language printed on the timesheet is set separately with **Notation language**.

**I want the same shortcuts as the app I used before.**
In **Settings** → **Keyboard shortcuts**, pick the **Clip Studio based** or **TVPaint based** preset, or bring in that app's shortcut file. → [Shortcuts](/en/shortcuts)

## Playback and sound

**Playback keeps pausing.**
The default playback mode (**Every frame**) waits until each drawing is ready. To keep time while playing, use **Skip frames**; to draw everything first, use **Render first**. → [Playback and recording](/en/playback?id=playback-mode)

**There's no sound.**
Check the **Output** device in [Preferences](/en/preferences) → **Audio**. If "{n} silent" appears during playback, that sound file is missing, still downloading, or in a format that can't be read.

**With wireless earphones, the sound and picture drift apart.**
Line them up with **A/V offset**. → [Playback and recording](/en/playback?id=when-sound-and-picture-drift-apart)

**Recording doesn't work.**
Turn on [Preferences](/en/preferences) → **Audio** → **Allow microphone**, and allow Anicel's microphone permission in the OS settings too.

## Export

**Some movie formats are grayed out.**
That happens when this device's OS doesn't support the codec. If **FFmpeg** is on this computer's PATH, you can export with it. → [Export](/en/export)

**The exported movie has no sound.**
Turn on **Mux the SE mix into the video** under **Audio** in the Sequence tab. Muted SE rows are left out.
