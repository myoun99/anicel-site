# カンバスの表示

## 表示のピル

![](img/view-pill.png)

カンバスの下にあるピルです。場所が足りないと、一部が **⚙** の中に入ります。

| | ボタン | キー |
|---|---|---|
| ![](img/icon-canvas-viewport-fit.png ':class=icon :no-zoom') | 画面に合わせる | <span data-k="canvas-fit"></span> |
| ![](img/icon-canvas-viewport-reset.png ':class=icon :no-zoom') | ズームをリセット（100%） | <span data-k="canvas-reset-view"></span> |
| ![](img/icon-canvas-viewport-zoom-out.png ':class=icon :no-zoom') | ズームアウト | <span data-k="canvas-zoom-out"></span> |
| ![](img/icon-canvas-viewport-zoom-in.png ':class=icon :no-zoom') | ズームイン | <span data-k="canvas-zoom-in"></span> |
| ![](img/icon-canvas-viewport-rotate-ccw.png ':class=icon :no-zoom') | 表示を左に回転 | <span data-k="canvas-rotate-ccw"></span> |
| ![](img/icon-canvas-viewport-rotate-cw.png ':class=icon :no-zoom') | 表示を右に回転 | <span data-k="canvas-rotate-cw"></span> |
| ![](img/icon-canvas-viewport-rotate-reset.png ':class=icon :no-zoom') | 傾きをリセット（0°） | <span data-k="canvas-straighten"></span> |
| ![](img/icon-canvas-viewport-flip.png ':class=icon :no-zoom') | 表示を左右反転 | <span data-k="canvas-flip-horizontal"></span> |
| ![](img/icon-canvas-viewport-flip-vertical.png ':class=icon :no-zoom') | 表示を上下反転 | <span data-k="canvas-flip-vertical"></span> |
| ![](img/icon-canvas-paper-color-button.png ':class=icon :no-zoom') ![](img/icon-canvas-pasteboard-color-button.png ':class=icon :no-zoom') ![](img/icon-canvas-backdrop-color-button.png ':class=icon :no-zoom') | [カンバスの色・ペーストボードの色・背景の色](/ja/canvas-view?id=色) | |

- ズーム・角度の数値は左右にドラッグすると連続して変わり、鉛筆を押すと直接入力できます。ズームは 10〜1600%。
- キーと ± は決まった段階(10・25・50・75・100・125・150・200・300・400・800・1600%)に沿って、回転キーは 15° ずつ動きます。マウスホイールはカーソルの位置を基準に拡大・縮小します。
- 反転は表示だけを反転します(絵はそのまま)。

## 手で動かす

| 押したままドラッグ | |
|---|---|
| <span data-k="canvas-pan-hold"></span> | 画面の移動 |
| <span data-k="canvas-rotate-hold"></span> | 画面の回転 |

- カンバスの縁のバーをドラッグしても移動します。
- タッチ・ペンの操作は[タッチとペン](/ja/touch-pen)にあります。

## ペーストボード

- 用紙の外側にも描けます。その外側の領域が **ペーストボード** です。書き出すときは用紙のサイズで切り取られます。
- **ペーストボードの色** の画面で、使うかどうか(既定は使用)とサイズ(用紙の 1.5倍・2倍・3倍、既定は3倍)を決めます。

## 色

- **カンバスの色**:用紙の地の色(表示用で、絵には入りません)。
- **ペーストボードの色**:用紙の外側の色。
- **背景の色**:そのさらに外側のウィンドウの色。

## カメラビュー

- タイムラインの再生ボタンの横の **カメラビュー** をオンにすると、カメラフレームの外が暗く隠れます。再生もカメラフレームに合わせて行われます。
- 隠す暗さは、カメラ行の不透明度です。→ [カメラ・ディレクション・トランジション](/ja/camera-section)

## カーソル

- [環境設定](/ja/preferences) → **表示** で **ブラシ / ペン / 十字** を選びます(既定は十字)。**ブラシ** は、マウスを乗せたときにブラシの先端の形を表示します。
- 指で触れているときはカーソルが消えます。
