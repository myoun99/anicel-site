# Opening and saving

You do this from the **Project** (folder icon) menu at the top left.

## The project file

- An Anicel project is **one `.anicel` file**. Drawings, timesheet, sound and settings all go inside it (sound and video brought in as "Link" still need their original files → [Media panel and import](/en/media-pool)).
- When you open several projects, they sit side by side as tabs on the top strip.

## Opening

![](img/menu-project.png ':size=245')

**Project** → **Open File** (or drop the file onto the window). Where it goes depends on what you open.

| File | Opens in |
|---|---|
| `.anicel` · `.tvpp` (TVPaint) · `.clip` (CLIP STUDIO PAINT) | A new project tab |
| Pictures · movies · sound · PDF | The [import window](/en/media-pool) |
| `.abr` · `.sut` · `.sutg` · `.anibrush` | The [brush](/en/brushes) library |
| `.ttf` · `.otf` · `.ttc` | Fonts (the [Text tool](/en/tools)) |
| Another app's shortcut file | A [shortcut](/en/shortcuts) preset |

- **Open Folder**: opens a whole cut folder (a folder holding picture files) in the import window.
- **Recent projects**: files you opened recently. For a file that moved and can't be found, tell the app its new place with **Reconnect**.
- Drop a file onto a [viewer](/en/screen) and it shows in that viewer instead of opening as a project.

### TVPaint and CLIP STUDIO files

- Open a `.tvpp` and its layers, timing and in-between marks become Anicel layers, blocks and marks.
- Open a `.clip` and its animation cels come in as layers and blocks, and the layers of a cel as [attach layers](/en/attach-layers) (A · A-1 …).
- The original file doesn't change. Saving saves a `.anicel`.

## Saving

| Menu | Key | Contents |
|---|---|---|
| Save | <span data-k="file-save"></span> | Asks for a place and name only the first time |
| Save as → Project (.anicel) | <span data-k="file-save-as"></span> | To another file |
| Save as → PNG · JPG · BMP · TGA · TIFF … | | **The current frame alone** as a picture the size of the canvas |

Exporting many pictures, movies or cels is [Export](/en/export).

## Autosave

**Autosave is off at first.** While it is off, the project only changes when you save, and if the app quits unexpectedly, the work since your last save is lost.

- Turn on [Preferences](/en/preferences) → **Autosave** and set the interval (**Every**: 3–60 minutes, 10 minutes at first), and the project file is saved at that interval.

## When saving fails (failed copy)

When another program is using the file, the file is read-only, there isn't enough space, or the drive was removed, the save fails and the reason is shown.

- Your work up to then is kept in a **failed copy** inside the app. **The failed copy disappears when you close the app.**
- To keep it, save it where you want with **Project** → **Back up failed copy**, or use **Save as**.
- Once the cause is gone, save again and it goes to the original file.
- If the file of an open project is deleted or moved, the app tells you. If it is in the trash, restore it then.

## On cloud storage and tablets

A file opens in one tab only. Nothing is saved over a file that is open in another tab.

| | PC<br>(Windows · Mac · Linux) | iPad · iPhone | Android |
|---|---|---|---|
| **Opening a Drive or Dropbox file** | From the folder the desktop app (on Linux, a sync tool) made on the PC | From Drive · Dropbox · iCloud Drive in the Files app — while it downloads, "Downloading from the cloud · Ns" | From Drive · Dropbox in the file window — it opens as a **working copy**, and every save uploads the whole file again |
| **Google Drive in a folder window** | Pickable (the desktop app's Drive folder) | **Not pickable** — Open does not respond. Use iCloud Drive, Dropbox or this device | **Not pickable** — it is not listed. Use a folder on this device |
| **Permission** | None needed | Only the file or folder you pick, at that moment | **All files access** has to be on before any file or folder is picked |

- Where a **folder window** opens: **Open Folder** · **cut folder** in the import window · **Find in folder** in the media panel · exporting several files on Android.
- Exporting to Drive → [Export › Exporting straight to Google Drive](/en/export?id=exporting-straight-to-google-drive)
