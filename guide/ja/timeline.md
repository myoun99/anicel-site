# タイムライン

いまのカットのレイヤーと時間を扱うパネルです。**一行がひとつのレイヤー、横が時間(フレーム)** です。レイヤーの行の欄と種類は[レイヤーの概要](/ja/layers)にあります。

![](img/timeline.png)

- ブロックひとつが絵一枚です。大きい数字は絵の名前、ブロックの端の小さい数字は長さ(フレーム数)です。
- パネル下部のタブで、**タイムライン** と[コンテパネル](/ja/storyboard)を切り替えます。

## 上部のコマンドの行

| 場所 | 内容 |
|---|---|
| 左 | ![](img/icon-playback-skip-to-start-button.png ':class=icon :no-zoom') ![](img/icon-playback-play-button.png ':class=icon :no-zoom') ![](img/icon-playback-loop-toggle.png ':class=icon :no-zoom') ![](img/icon-timeline-camera-view-button.png ':class=icon :no-zoom') ![](img/icon-playback-record-voice-button.png ':class=icon :no-zoom') → [再生と録音](/ja/playback) |
| ピル | **カット**・**レイヤー**・**フレーム**・**共用**・**Fx** |
| 右 | カット名・ズーム(左右にドラッグ)・タイムラインを全体表示・**⇄**(Xシートで表示 / タイムラインで表示) |


## 選ぶ・動かす

ブロック・コマ・レイヤー・キー・[コンテパネル](/ja/storyboard)のカットブロック、すべて同じルールです。

- **最初のドラッグで選びます**(ひとつでも複数でも、複数の行にまたがっても)。
- **選んだところをもう一度ドラッグすると動かします。** 複数の行にまたがる選択は、どの行でつかんでもいっしょに動きます。
- 動かした絵が、その行の同じ名前の絵の上に置かれると、リンクするかをたずねます。
- ブロックを **ダブルクリック** すると、そのブロックの編集画面が開きます(下の「編集」)。

## カットのピル

| 操作 | 内容 |
|---|---|
| ＋ 新規カット | いまのカットの後ろに新しいカット |
| カットメモを編集 | カットにメモ |
| レイヤーマーク | カットのラベル → [カラーラベルとテイク](/ja/layer-labels) |
| カット設定 | このカットのスタッフ |
| カンバスサイズ | → [カットごとのカンバスサイズ](/ja/canvas-size) |
| 兼用カットを作成・兼用カットに変換 | → [兼用カット](/ja/linked-cuts) |

カット名は、[コンテパネル](/ja/storyboard)でカットブロックを選んで **編集**(またはダブルクリック)で変えます。カットの長さは、最後のブロックの後ろにあるカットの終わりのハンドルをドラッグして変えます。

## レイヤーのピル

![](img/pill-layer.png ':size=116')

| | 操作 | キー | |
|---|---|---|---|
| ![](img/icon-timeline-toolbar-add-layer-button.png ':class=icon :no-zoom') | 新規レイヤー | <span data-k="layer-add"></span> | 横の ▾ で種類を選ぶ → [レイヤーの概要](/ja/layers) |

**レイヤー** を押すとメニューが開きます — **アタッチを解除**・**ラスタライズ**・**絵コンテレイヤー**(アニメーション ⇄ 絵コンテ)。

![](img/menu-layer.png ':size=184')

## フレームのピル

![](img/pill-frame.png ':size=361.5')

| | 操作 | キー | |
|---|---|---|---|
| ![](img/icon-new-frame-button.png ':class=icon :no-zoom') | 新規フレーム | <span data-k="frame-new-drawing"></span> | 選んだコマに新しい絵(レーンでは新しいキー) |
| ![](img/icon-blank-exposure-button.png ':class=icon :no-zoom') | 空にする | <span data-k="frame-blank-exposure"></span> | 選んだコマを空きコマに |
| ![](img/icon-auto-frame-toggle-button.png ':class=icon :no-zoom') | フレーム自動生成 | <span data-k="frame-auto-create"></span> | オンにしておくと、空きコマに描くだけで絵ができる |
| ![](img/icon-toggle-mark-one-button.png ':class=icon :no-zoom') | 中割りマーク1 | <span data-k="frame-toggle-mark-one"></span> | → [アニメーションレイヤー](/ja/animation-layers) |
| ![](img/icon-toggle-mark-button.png ':class=icon :no-zoom') | 中割りマーク2 | <span data-k="frame-toggle-mark"></span> |  |
| ![](img/icon-mark-every-button.png ':class=icon :no-zoom') | 中割りマークを自動追加 | <span data-k="frame-mark-every"></span> | n コマごとにマーク |
| ![](img/icon-push-blocks-button.png ':class=icon :no-zoom') | 押し出し(コマを開ける) | <span data-k="timeline-push-blocks"></span> | 選んだ位置に空きコマを開ける |
| ![](img/icon-pull-blocks-button.png ':class=icon :no-zoom') | 詰め(コマを詰める) | <span data-k="timeline-pull-blocks"></span> | 選んだ位置の空きコマを詰める |
| ![](img/icon-set-comma-1-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-2-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-3-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-4-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-n-button.png ':class=icon :no-zoom') | 1・2・3・4・N コマ | <span data-k="timeline-comma-1 timeline-comma-2 timeline-comma-3 timeline-comma-4 timeline-comma-n"></span> | 選んだブロックの長さをまとめて(後ろのブロックは詰まったり送られたりする) |

**フレーム** を押すと **行全体を選択**(その行のブロックすべて)。

## 共用のピル

何を選んでいても(ブロック・レイヤー・キー・カット)、同じボタンが応えます。

![](img/pill-shared.png ':size=308')

| | 操作 | キー | |
|---|---|---|---|
| ![](img/icon-shared-edit-button.png ':class=icon :no-zoom') | 編集 | <span data-k="edit-instance"></span> | 選んだものの編集画面([下](/ja/timeline?id=編集)) |
| ![](img/icon-shared-auto-name-button.png ':class=icon :no-zoom') | 自動命名 | <span data-k="edit-auto-name"></span> | 選んだブロックに開始番号から順に名前 |
| ![](img/icon-shared-cut-button.png ':class=icon :no-zoom') | 切り取り | <span data-k="edit-cut"></span> |  |
| ![](img/icon-shared-copy-button.png ':class=icon :no-zoom') | コピー | <span data-k="edit-copy"></span> |  |
| ![](img/icon-shared-paste-independent-button.png ':class=icon :no-zoom') | 独立して貼り付け | <span data-k="edit-paste-independent"></span> | 新しい絵として貼り付ける |
| ![](img/icon-shared-paste-linked-button.png ':class=icon :no-zoom') | リンクして貼り付け | <span data-k="edit-paste-linked"></span> | 同じ絵として貼り付ける(片方を直すと両方変わる) |
| ![](img/icon-shared-unlink-button.png ':class=icon :no-zoom') | リンクから独立 | <span data-k="edit-unlink"></span> | リンクされた絵を別々に切り離す |
| ![](img/icon-shared-duplicate-button.png ':class=icon :no-zoom') | 複製 | <span data-k="edit-duplicate"></span> | 選んだレイヤー(コンテパネルではカット)を複製 |
| ![](img/icon-shared-merge-button.png ':class=icon :no-zoom') | 結合 | <span data-k="edit-merge"></span> | 下 |
| ![](img/icon-shared-delete-button.png ':class=icon :no-zoom') | 削除 | <span data-k="edit-delete"></span> | 選んだものを消す(カット > レイヤー > コマの順に大きいもの) |
| ![](img/icon-shared-colour-edit-button.png ':class=icon :no-zoom') | 色編集 |  | 選んだ絵の色を変える・消す → [色](/ja/color) |

**結合** — 選んだレイヤー(二つ以上、またはフォルダー一つ)を一枚に — 見えていたとおりに焼き込んで、いちばん上のレイヤーになります(取り消し一回)。見た目が変わるかもしれないときは先に知らせます。アタッチの付いたレイヤーを結合すると、選ばなかったアタッチは結果のレイヤーに付いたまま残ります。兼用・コンテ・参照の画像レイヤー、指示の載ったブロックがあるレイヤー、本体なしで選んだアタッチ、いちばん上ではない本体に選ばなかったアタッチがあるときは、まだ飛ばします。

フレームの選択範囲が一つの行のブロックを二つ以上含んでいると、**結合** は行ごとにそのブロックを **ブロック一つ** にします — いちばん左のブロックの位置から最後のブロックの終わりまで(間の空きコマも覆う)、名前はいちばん左のブロックのもの、重なるところは左のブロックの絵が上(取り消し一回)。

## 編集

ブロックを選んで **編集**<span data-k="edit-instance" data-k-paren></span>を押すか、ブロックをダブルクリックすると、選んだものに合った画面が開きます。

![](img/se-edit.png)

| 選んだもの | 画面で決めること |
|---|---|
| 絵のブロック(アニメーション・絵コンテ・画像) | 絵の名前 |
| SE のブロック | 名前(話者)・タイプ(ON・OFF・MONO)・セリフ・リンクされた音声 → [サウンド(SE)レイヤー](/ja/sound-layers) |
| ディレクションのブロック | 指示(PAN など)・名前・始点・終点 → [カメラ・ディレクション・トランジション](/ja/camera-section) |
| トランジションのブロック | 転換の種類(FI・FO など) |
| レーンのキー | キーの名前・速さ・パス・ロービング → [エフェクトとトランスフォーム](/ja/effects) |
| レイヤー | レイヤー名(複数をまとめて) |
| コンテパネルのカット | カット名 |

## Xシート

右端の **⇄**(Xシートで表示)を押すと、タイムラインが紙のタイムシートのように **縦** に変わります(上から下が時間、左から ACTION・SE・CAM の列)。することはタイムラインと同じで、矢印キーの向きがシートに沿います。→ [ショートカット](/ja/shortcuts)

## ズーム

- 右のズームの数値を左右にドラッグして、コマの幅を変えます。**タイムラインを全体表示** は、カット全体がパネルに収まるようにします。
- [環境設定](/ja/preferences) → **表示** → **ブロック内のフレーム線** をオンにすると、ブロックの中にもフレームごとに縦線が引かれます。
