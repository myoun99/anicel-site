# ショートカット

既定のキーです。Mac や iPad で開くと Mac の表記になります。

## ショートカットを変える

**設定**(⚙) → **キーボードショートカット** で、すべての操作のキーを見て変えます。

- **プリセット**:**Anicel**・**CLIP STUDIO ベース**・**TVPaint ベース** から選ぶか、自分のプリセットを作ります(新しいプリセット・プリセットを複製・プリセット名を変更・プリセットを削除)。下の表は、3つの既定のプリセットのキーです。
- **アクションを検索** で操作を探し、**新しいショートカットを記録** を押してからキーを押します(<kbd class="k-pc">Esc</kbd><kbd class="k-mac">⎋</kbd> でキャンセル)。**ショートカットを解除**・**既定に戻す**・**すべてリセット**。
- 同じキーを使う操作があると、強調して知らせます。自分で変えたキーが、プリセットの既定より優先されます。
- **タッチショートカット**:指のタップ・長押しに割り当てる動作。→ [タッチとペン](/ja/touch-pen)

### ほかのアプリのショートカットを読み込む

使っていたアプリのショートカットファイルを **ファイルを開く** で選ぶか、ウィンドウにドラッグ&ドロップすると、そのキーが **新しいプリセット** として入ります(対応する操作のないキーがいくつあったかを知らせます)。

| アプリ | ファイル |
|---|---|
| CLIP STUDIO PAINT | ショートカット設定 `.khc`・ツールパレット `.todb`(ふたつをいっしょに選ぶと、ひとつのプリセットに) |
| TVPaint | `config.ini`・キーマップ `.cfg`・ショートカットの画面で保存した `.txt` |

<!-- 下の2行のあいだの表は、アプリのショートカット一覧から自動で作られます。ここを直しても次の生成で上書きされます。 -->
<!-- shortcuts:begin -->

### カンバス › ツール

| 操作 | キー |
|---|---|
| ブラシツール | <span data-k="tool-brush"></span> |
| 消しゴムツール | <span data-k="tool-eraser"></span> |
| スポイトツール | <span data-k="tool-eyedropper"></span> |
| 塗りつぶしツール | <span data-k="tool-fill"></span> |
| テキストツール | <span data-k="tool-text"></span> |
| 図形ツール | <span data-k="tool-shape"></span> |
| ガイドツール | <span data-k="tool-guide"></span> |
| 選択ツール | <span data-k="tool-select"></span> |
| 切り抜きツール | <span data-k="tool-cut"></span> |

### カンバス › サブツール

| 操作 | キー |
|---|---|
| 塗りつぶし | <span data-k="tool-fill-bucket"></span> |
| 矩形塗り | <span data-k="tool-fill-rect"></span> |
| 投げ縄塗り | <span data-k="tool-fill-lasso"></span> |
| 矩形描画 | <span data-k="tool-shape-rect"></span> |
| 直線描画 | <span data-k="tool-shape-line"></span> |
| 投げ縄選択 | <span data-k="tool-select-lasso"></span> |
| 通常変形 | <span data-k="tool-transform-normal"></span> |
| 自由変形 | <span data-k="tool-transform-free"></span> |
| 投げ縄カット | <span data-k="tool-cut-lasso"></span> |
| スタンプ | <span data-k="tool-cut-stamp"></span> |

### カンバス › 合成モード

| 操作 | キー |
|---|---|
| 合成: 通常 | <span data-k="tool-blend-color"></span> |
| 合成: 背面 | <span data-k="tool-blend-behind"></span> |
| 合成: 消去 | <span data-k="tool-blend-erase"></span> |
| 合成: 比較（暗） | <span data-k="tool-blend-darken"></span> |
| 合成: 乗算 | <span data-k="tool-blend-multiply"></span> |
| 合成: 焼き込みカラー | <span data-k="tool-blend-colorBurn"></span> |
| 合成: 焼き込み（リニア） | <span data-k="tool-blend-linearBurn"></span> |
| 合成: 減算 | <span data-k="tool-blend-subtract"></span> |
| 合成: 比較（明） | <span data-k="tool-blend-lighten"></span> |
| 合成: スクリーン | <span data-k="tool-blend-screen"></span> |
| 合成: 覆い焼きカラー | <span data-k="tool-blend-colorDodge"></span> |
| 合成: 加算 | <span data-k="tool-blend-add"></span> |

### カンバス › 選択

| 操作 | キー |
|---|---|
| 選択解除 | <span data-k="selection-deselect"></span> |
| 確定 | <span data-k="edit-confirm"></span> |
| 変形をキャンセル | <span data-k="selection-transform-cancel"></span> |
| カンバス外も選択範囲を反転 | <span data-k="selection-invert"></span> |

### カンバス › 編集

| 操作 | キー |
|---|---|
| 元に戻す | <span data-k="edit-undo"></span> |
| やり直す | <span data-k="edit-redo"></span> |
| 直前のストロークから直線（押している間） | <span data-k="canvas-line-hold"></span> |

### カンバス › 表示

| 操作 | キー |
|---|---|
| 移動（押している間） | <span data-k="canvas-pan-hold"></span> |
| 回転（押している間） | <span data-k="canvas-rotate-hold"></span> |
| オニオンスキンの切り替え | <span data-k="onion-skin-toggle"></span> |
| カンバス表示を左に回転 | <span data-k="canvas-rotate-ccw"></span> |
| カンバス表示を右に回転 | <span data-k="canvas-rotate-cw"></span> |
| カンバス表示を左右反転 | <span data-k="canvas-flip-horizontal"></span> |
| カンバス表示を上下反転 | <span data-k="canvas-flip-vertical"></span> |
| カンバス表示の傾きをリセット | <span data-k="canvas-straighten"></span> |
| カンバス表示を画面に合わせる | <span data-k="canvas-fit"></span> |
| カンバスのズームをリセット（100%） | <span data-k="canvas-reset-view"></span> |
| ズームイン | <span data-k="canvas-zoom-in"></span> |
| ズームアウト | <span data-k="canvas-zoom-out"></span> |
| アクティブレイヤーをソロ | <span data-k="layer-visibility-solo"></span> |

### タイムライン・コンテ › ナビゲーション

| 操作 | キー |
|---|---|
| 前のフレーム | <span data-k="frame-previous"></span> |
| 次のフレーム | <span data-k="frame-next"></span> |
| 前のブロック | <span data-k="drawing-previous"></span> |
| 次のブロック | <span data-k="drawing-next"></span> |
| レイヤーを上へ | <span data-k="layer-up"></span> |
| レイヤーを下へ | <span data-k="layer-down"></span> |

### タイムライン・コンテ › 再生

| 操作 | キー |
|---|---|
| 再生 / 一時停止 | <span data-k="playback-toggle"></span> |
| 先頭へ | <span data-k="playback-to-start"></span> |
| 音声収録（開始/停止） | <span data-k="voice-record-toggle"></span> |

### タイムライン・コンテ › ピル › レイヤーのピル

| 操作 | キー |
|---|---|
| 新規レイヤー | <span data-k="layer-add"></span> |
| 新規レイヤー: フォルダー | <span data-k="layer-add-folder"></span> |

### タイムライン・コンテ › ピル › フレームのピル

| 操作 | キー |
|---|---|
| 1コマに設定 | <span data-k="timeline-comma-1"></span> |
| 2コマに設定 | <span data-k="timeline-comma-2"></span> |
| 3コマに設定 | <span data-k="timeline-comma-3"></span> |
| 4コマに設定 | <span data-k="timeline-comma-4"></span> |
| Nコマに設定 | <span data-k="timeline-comma-n"></span> |
| 新規フレーム | <span data-k="frame-new-drawing"></span> |

### タイムライン・コンテ › ピル › 共用のピル

| 操作 | キー |
|---|---|
| 切り取り | <span data-k="edit-cut"></span> |
| コピー | <span data-k="edit-copy"></span> |
| リンクして貼り付け | <span data-k="edit-paste-linked"></span> |
| 独立して貼り付け | <span data-k="edit-paste-independent"></span> |
| 削除 | <span data-k="edit-delete"></span> |
| 編集 | <span data-k="edit-instance"></span> |

### タイムライン・コンテ › ピル › 色編集

| 操作 | キー |
|---|---|
| ピクセル消去 | <span data-k="edit-clear-pixels"></span> |
| ピクセルコピー | <span data-k="edit-copy-pixels"></span> |
| ピクセルを上に貼り付け | <span data-k="edit-paste-pixels-above"></span> |

### 上部のバー › ファイル

| 操作 | キー |
|---|---|
| 新規プロジェクト | <span data-k="file-new"></span> |
| ファイルを開く | <span data-k="file-open"></span> |
| 保存 | <span data-k="file-save"></span> |
| 名前を付けて保存 | <span data-k="file-save-as"></span> |
| 書き出し | <span data-k="file-export"></span> |

### 上部のバー › 設定

| 操作 | キー |
|---|---|
| キーボードショートカット | <span data-k="edit-keyboard-shortcuts"></span> |
| 環境設定 | <span data-k="edit-preferences"></span> |

<!-- shortcuts:end -->

## 知っておくこと

- **Xシートでは方向がシートに沿います。** タイムライン上部の右端の **⇄** で Xシート(縦)に切り替えると、上下のキーが前・次のブロック、左右のキーが下・上のレイヤー、Shift と上下のキーが前・次のフレームへ移ります。
- **再生・先頭へ・[編集](/ja/timeline?id=編集)・コマ数のキーは、最後に触ったパネルのボタンを押します。** [コンテ](/ja/storyboard)パネルでは、再生はトラック全体を再生し、先頭へはトラックの先頭へ移り、編集はカーソルのあるブロックの画面を開き(カットならカット名)、コマ数はそのブロックの長さを変えます(カットブロックならカットの長さ)。
- **コマ数**(1〜4コマに設定、Nコマに設定…)は、タイムライン・コンテパネル上部の **1 2 3 4 N** ボタンと同じです。選んだブロックすべて(選んでいなければいまのブロック)の長さを変え、後ろのブロックはそのぶん詰まったり送られたりします — `1--2--3--` をすべて選んで1コマに設定すると `123` になります。
