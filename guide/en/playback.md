# Playback and recording

## Playback buttons

They sit at the top left of the timeline and the Conte panel.

| | Button | Key | What it does |
|---|---|---|---|
| ![](img/icon-playback-skip-to-start-button.png ':class=icon :no-zoom') | To Start | <span data-k="playback-to-start"></span> | To the start of the cut (of the track, on the Conte panel) |
| ![](img/icon-playback-play-button.png ':class=icon :no-zoom') | Play / Pause | <span data-k="playback-toggle"></span> |  |
| ![](img/icon-playback-loop-toggle.png ':class=icon :no-zoom') | Loop / Play Once | <span data-k="playback-loop-toggle"></span> | Whether to go back to the start at the end |
| ![](img/icon-timeline-camera-view-button.png ':class=icon :no-zoom') | Camera view | <span data-k="camera-view-toggle"></span> | Masks outside the camera frame and plays fitted to the frame → [Canvas view](/en/canvas-view) |
| ![](img/icon-playback-record-voice-button.png ':class=icon :no-zoom') | Record | <span data-k="voice-record-toggle"></span> | See "Recording" below |
|  | Level meter |  | How loud the sound playing now is |

- Play on the **Timeline** and only the current cut plays; play on the **Conte panel** and all the cuts play in a row.
- The play and To Start keys press the button of the panel you touched last.
- With fingers, a 4-finger tap is play / stop. → [Touch and pen](/en/touch-pen)

## Playback mode

In **Settings** (⚙) → **Project settings** → **Playback mode**, choose what to do when playback reaches a frame whose drawing isn't ready yet.

| Mode | What it does |
|---|---|
| **Every frame** (default) | Waits a moment before that frame until the drawing is ready, then goes on. It never skips a drawing |
| **Skip frames** | Keeps time and skips drawings it couldn't draw in time (sound and timing stay exact) |
| **Render first** | Draws the whole stretch it is about to play first, then starts |

When you play with Skip frames, the number of skipped drawings shows as "{n} dropped".

## Recording

![](img/icon-playback-record-voice-button.png ':class=icon :no-zoom') Record dialogue and sound effects with the **microphone** next to the play button. Recording is **taking in sound while it plays** — you watch the pictures and hear the other sound as you record to them.

### Once, the first time

1. Turn on [Preferences](/en/preferences?id=audio) → **Audio** → **Allow microphone**. While it is off, the microphone only says the microphone isn't allowed.
2. When the OS asks for microphone permission, allow it. If you refused, turn Anicel's microphone on in the OS settings.
3. In the same place, pick the microphone under **Input** and speak to see the **input level** move.

### Recording a take

1. Stand on the **SE row** the take should go on. Standing on any other row, a **new SE row** is made and it goes there.
2. Put the playhead where it should start (playing is fine too — it starts where you press).
3. Press the **microphone** <span data-k="voice-record-toggle" data-k-paren></span> → it plays from there while it records. The block and its waveform grow as you record.
4. Press the **microphone** again, or **stop**, and the take is placed on the SE row as a block.

| Good to know | |
|---|---|
| What you hear | The other rows play as usual; only **the row being recorded** goes quiet |
| Where a block already is | The new take wins that span — only the overlap is cut away, and the original sound file stays in the media panel |
| Undo | One undo brings back the take and the blocks it cut |
| Where takes are kept | Inside the project file · in the media panel |
| Too loud | If it breaks up even once, a **red dot** lights on the microphone's top right. With **Clipping warnings** on, a notice and a red block corner too |

### Recording just a span (punch-in)

**Select the span** to record on the SE row, put the playhead before it and press the microphone. Playback runs from the playhead, but it records **only inside the span** — you hear the lead-in and catch your entrance.

| Signal (Preferences → Audio) | At first | What it does |
|---|---|---|
| **Cue beeps** | On | Beep · beep · beep one second apart before the span — it starts right after the third |
| **Streamer** | On | For up to 3 seconds before the start a band crosses the picture; it starts the moment the band reaches the edge |

### Not starting right away (count-in)

Set **Count-in** (0 seconds = off at first) and, after you press the microphone, playback waits that long before it starts (with Cue beeps on, it beeps while it waits). A recording with a span selected doesn't use it.

### Settings that shape the sound (Preferences → Audio)

| Setting | At first | |
|---|---|---|
| **Mic gain** | 0 dB | How loud the incoming sound is |
| **Input channels** | As device | Mono mix / Left only / Right only |
| **Noise suppression** | Off | For voice — it erases footsteps and props too, so turn it off for sound effects |
| **Clipping warnings** | Off | A notice for a take that broke up, and a red block corner |

Gain and input channels stay as they were when the take started, to its end. Changed while recording, they apply from the next take.

## When sound and picture drift apart

- **A/V offset** (Preferences → Audio): fine-tunes how many frames later or earlier the picture shows than the sound. Wireless earphones often play sound 150–300 ms late, so if things drift while you listen on earphones, line them up here.
- **Output** · **Input**: pick the speaker and microphone to use.
- During playback, blocks that make no sound are reported as "{n} silent" (the file is missing, still downloading, or in a format that can't be read).
