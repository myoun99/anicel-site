# ツール

カンバスの左にある縦のバーです。

| | ボタン | キー |
|---|---|---|
| ![](img/icon-undo-button.png ':class=icon :no-zoom') | 元に戻す | <span data-k="edit-undo"></span> |
| ![](img/icon-redo-button.png ':class=icon :no-zoom') | やり直す | <span data-k="edit-redo"></span> |
| ![](img/icon-rail-onion-skin-button.png ':class=icon :no-zoom') | [オニオンスキンの切り替え](/ja/onion-skin) | <span data-k="onion-skin-toggle"></span> |
| ![](img/icon-rail-deselect-button.png ':class=icon :no-zoom') | 選択解除 | <span data-k="selection-deselect"></span> |
| ![](img/icon-rail-confirm-button.png ':class=icon :no-zoom') | [確定](/ja/tools?id=確定とキャンセル) | <span data-k="edit-confirm"></span> |
| ![](img/icon-rail-visibility-solo-button.png ':class=icon :no-zoom') | アクティブレイヤーをソロ | <span data-k="layer-visibility-solo"></span> |
| ![](img/icon-tool-brush-button.png ':class=icon :no-zoom') | [ブラシ](/ja/tools?id=ブラシ) | <span data-k="tool-brush"></span> |
| ![](img/icon-tool-eraser-button.png ':class=icon :no-zoom') | [消しゴム](/ja/tools?id=消しゴム) | <span data-k="tool-eraser"></span> |
| ![](img/icon-tool-eyedropper-button.png ':class=icon :no-zoom') | [スポイト](/ja/tools?id=スポイト) | <span data-k="tool-eyedropper"></span> |
| ![](img/icon-tool-fill-button.png ':class=icon :no-zoom') | [塗りつぶし](/ja/tools?id=塗りつぶし) | <span data-k="tool-fill"></span> |
| ![](img/icon-tool-text-button.png ':class=icon :no-zoom') | [テキスト](/ja/tools?id=テキスト) | <span data-k="tool-text"></span> |
| ![](img/icon-tool-shape-button.png ':class=icon :no-zoom') | [図形](/ja/tools?id=図形) | <span data-k="tool-shape"></span> |
| ![](img/icon-tool-guide-button.png ':class=icon :no-zoom') | [ガイド](/ja/tools?id=ガイド) | <span data-k="tool-guide"></span> |
| ![](img/icon-tool-select-button.png ':class=icon :no-zoom') | [選択](/ja/tools?id=選択) | <span data-k="tool-select"></span> |
| ![](img/icon-tool-move-button.png ':class=icon :no-zoom') | [変形](/ja/tools?id=変形) | <span data-k="tool-transform-normal"></span> |
| ![](img/icon-tool-cut-button.png ':class=icon :no-zoom') | [切り抜き](/ja/tools?id=切り抜き) | <span data-k="tool-cut"></span> |

ツールを選ぶと、**ツールライブラリ**(種類)と **ツール設定**(値)がそのツールのものに変わります。ツールのボタンは、最後に使った種類でまた開きます。

## ブラシ

| ツールライブラリ | ツール設定 |
|---|---|
| ![](img/tool-brush-library.png ':class=panel') | ![](img/tool-brush-settings.png ':class=panel') |

- サイズ・不透明度・合成モードは、カンバスの左端にある縦長のピルで変えます。ブラシの作り方・直し方 → [ブラシ](/ja/brushes)

| 操作 | キー |
|---|---|
| 45° 単位でまっすぐ(引いている間) | <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> |
| 直前のストロークの終わりから直線(押している間に点を打つ) | <span data-k="canvas-line-hold"></span> |

## 消しゴム

- ツールライブラリ・ツール設定は [ブラシ](/ja/tools?id=ブラシ) と同じです。選んだブラシ・サイズは別に記憶します。

## スポイト

| ツール設定 |
|---|
| ![](img/tool-eyedropper-settings.png ':class=panel') |

- ほかのツールを使っている間も、<kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> を押している間はスポイトになります(選択・変形ツールを除く)。

## 塗りつぶし

| ツールライブラリ | ツール設定 |
|---|---|
| ![](img/tool-fill-library.png ':class=panel') | ![](img/tool-fill-settings.png ':class=panel') |

- **展開** — 塗った領域を広げて線の下まで埋めます。
- **隙間閉じ** — 線が少し切れていても閉じているとみなします。
- **カンバス外も塗る** — オフにすると、用紙の縁まで開いている領域は塗りません。

## テキスト

| ツール設定 |
|---|
| ![](img/tool-text-settings.png ':class=panel') |

- 押すとその場所に文字、ドラッグするとその幅のテキストボックス。すでにある文字を押すと、もう一度編集できます。
- 文字は **そのコマの絵の中に** 入ります(テキストレイヤーは別にありません)。
- **フォントファイルを読み込み**(.ttf・.otf・.ttc)で入れたフォントは、プロジェクトファイルといっしょに持ち運ばれます。

## 図形

| ツールライブラリ | ツール設定 |
|---|---|
| ![](img/tool-shape-library.png ':class=panel') | ![](img/tool-shape-settings.png ':class=panel') |

- いまのブラシで描かれます。<kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> を押すと **比率を固定** が逆になります。

## ガイド

| ツールライブラリ | ツール設定 |
|---|---|
| ![](img/tool-guide-library.png ':class=panel') | ![](img/tool-guide-settings.png ':class=panel') |

- **カットごと** に別々に持ちます。対称ガイドはひとつだけ、パースガイドは複数がいっしょに効きます。
- カンバス上のハンドルをドラッグして、原点・角度・消失点・アイレベルを動かします。

## 選択

| ツールライブラリ | ツール設定 |
|---|---|
| ![](img/tool-select-library.png ':class=panel') | ![](img/tool-select-settings.png ':class=panel') |

| 押し始めに | モード |
|---|---|
| <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> | 追加選択 |
| <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> | 部分解除 |
| <kbd class="k-pc">Shift+Alt</kbd><kbd class="k-mac">⌥⇧</kbd> | 選択中(重なったところだけ) |

- 多角形は最初の点を押すか <span data-k="edit-confirm"></span> で閉じます。ドラッグせずに一度押すと、選択が解除されます。
- 選択は別のコマ・別のレイヤーに移っても残ります。

## 変形

| ツールライブラリ | ツール設定 |
|---|---|
| ![](img/tool-move-library.png ':class=panel') | ![](img/tool-move-settings.png ':class=panel') |

| 方式 | キー |
|---|---|
| 通常変形 | <span data-k="tool-transform-normal"></span> |
| 自由変形 | <span data-k="tool-transform-free"></span> |

- ボックスの中をドラッグすると移動、外は回転、角はサイズ(<kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> = 反対側の角が基準)、辺の中央は一方向のサイズ。
- 選択がなければ、絵全体が変形されます。
- タイムラインで **複数のコマ・複数のレイヤー** を選んだまま変形すると、選んだ範囲のすべての絵に同じ変形が入ります(非表示のレイヤー・空きコマは飛ばします)。

## 切り抜き

| ツールライブラリ | ツール設定 |
|---|---|
| ![](img/tool-cut-library.png ':class=panel') | ![](img/tool-cut-settings.png ':class=panel') |

- 囲んだ部分を切り離して持ち上げ、動かします。**元画像を削除** をオフにするとコピーになります。
- **スタンプ** — 持ち上げた絵を、押すと一回、ドラッグすると続けて押します。**先端として登録** するとブラシの先端になります。

## 確定とキャンセル

| | キー |
|---|---|
| 確定 ![](img/icon-rail-confirm-button.png ':class=icon :no-zoom') | <span data-k="edit-confirm"></span> |
| キャンセル | <span data-k="selection-transform-cancel"></span> |

- 適用前は、取り消しがひと操作ずつ戻し、適用後は変形全体が一度に戻ります。
- 別のツールに切り替えると、開いていた変形は適用されます。
