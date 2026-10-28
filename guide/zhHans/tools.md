# 工具

画布左侧的竖条。

| | 按钮 | 按键 |
|---|---|---|
| ![](img/icon-undo-button.png ':class=icon :no-zoom') | 撤销 | <span data-k="edit-undo"></span> |
| ![](img/icon-redo-button.png ':class=icon :no-zoom') | 重做 | <span data-k="edit-redo"></span> |
| ![](img/icon-rail-onion-skin-button.png ':class=icon :no-zoom') | [切换洋葱皮](/zhHans/onion-skin) | <span data-k="onion-skin-toggle"></span> |
| ![](img/icon-rail-deselect-button.png ':class=icon :no-zoom') | 取消选择 | <span data-k="selection-deselect"></span> |
| ![](img/icon-rail-confirm-button.png ':class=icon :no-zoom') | [确认](/zhHans/tools?id=确认与取消) | <span data-k="edit-confirm"></span> |
| ![](img/icon-rail-visibility-solo-button.png ':class=icon :no-zoom') | 独奏当前图层 | <span data-k="layer-visibility-solo"></span> |
| ![](img/icon-tool-brush-button.png ':class=icon :no-zoom') | [画笔](/zhHans/tools?id=画笔) | <span data-k="tool-brush"></span> |
| ![](img/icon-tool-eraser-button.png ':class=icon :no-zoom') | [橡皮](/zhHans/tools?id=橡皮) | <span data-k="tool-eraser"></span> |
| ![](img/icon-tool-eyedropper-button.png ':class=icon :no-zoom') | [吸管](/zhHans/tools?id=吸管) | <span data-k="tool-eyedropper"></span> |
| ![](img/icon-tool-fill-button.png ':class=icon :no-zoom') | [填充](/zhHans/tools?id=填充) | <span data-k="tool-fill"></span> |
| ![](img/icon-tool-text-button.png ':class=icon :no-zoom') | [文字](/zhHans/tools?id=文字) | <span data-k="tool-text"></span> |
| ![](img/icon-tool-shape-button.png ':class=icon :no-zoom') | [形状](/zhHans/tools?id=形状) | <span data-k="tool-shape"></span> |
| ![](img/icon-tool-guide-button.png ':class=icon :no-zoom') | [参考线](/zhHans/tools?id=参考线) | <span data-k="tool-guide"></span> |
| ![](img/icon-tool-select-button.png ':class=icon :no-zoom') | [选择](/zhHans/tools?id=选择) | <span data-k="tool-select"></span> |
| ![](img/icon-tool-move-button.png ':class=icon :no-zoom') | [变换](/zhHans/tools?id=变换) | <span data-k="tool-transform-normal"></span> |
| ![](img/icon-tool-cut-button.png ':class=icon :no-zoom') | [裁剪](/zhHans/tools?id=裁剪) | <span data-k="tool-cut"></span> |

选中一个工具后，**工具库**（它的种类）和 **工具设置**（它的数值）会换成这个工具的内容。工具按钮会以你上次用过的种类重新打开。

## 画笔

| 工具库 | 工具设置 |
|---|---|
| ![](img/tool-brush-library.png ':class=panel') | ![](img/tool-brush-settings.png ':class=panel') |

- 大小 · 不透明度 · 混合模式在画布左边缘的竖向胶囊上。制作和编辑画笔 → [画笔](/zhHans/brushes)

| 操作 | 按键 |
|---|---|
| 以 45° 为单位画直线（画的时候） | <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> |
| 从上一笔的终点画直线（按住时点按） | <span data-k="canvas-line-hold"></span> |

## 橡皮

- 工具库和工具设置与 [画笔](/zhHans/tools?id=画笔) 相同。橡皮会记住自己的画笔和大小。

## 吸管

| 工具设置 |
|---|
| ![](img/tool-eyedropper-settings.png ':class=panel') |

- 使用其他工具时，按住 <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> 就会变成吸管（选择工具和变换工具除外）。

## 填充

| 工具库 | 工具设置 |
|---|---|
| ![](img/tool-fill-library.png ':class=panel') | ![](img/tool-fill-settings.png ':class=panel') |

- **展开** — 把填充区域向外扩，填到线条下面。
- **闭合缝隙** — 把有小断口的线当作闭合的线。
- **填充到画布之外** — 关闭时，连到纸张边缘的开放区域不会被填充。

## 文字

| 工具设置 |
|---|
| ![](img/tool-text-settings.png ':class=panel') |

- 点一下在那里输入文字，或拖出一个那么宽的文本框。点已有的文字可以再次编辑。
- 文字会进入 **那个单元格的画稿里**（没有单独的文字图层）。
- 用 **导入字体文件**（.ttf · .otf · .ttc）导入的字体会随项目文件一起保存。

## 形状

| 工具库 | 工具设置 |
|---|---|
| ![](img/tool-shape-library.png ':class=panel') | ![](img/tool-shape-settings.png ':class=panel') |

- 用当前画笔绘制。按住 <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> 可以临时切换 **锁定比例**。

## 参考线

| 工具库 | 工具设置 |
|---|---|
| ![](img/tool-guide-library.png ':class=panel') | ![](img/tool-guide-settings.png ':class=panel') |

- **每个镜头** 有自己的参考线。对称参考线同时只有一条起作用；透视参考线可以多条一起起作用。
- 拖动画布上的手柄，可以移动原点、角度、消失点和视平线。

## 选择

| 工具库 | 工具设置 |
|---|---|
| ![](img/tool-select-library.png ':class=panel') | ![](img/tool-select-settings.png ':class=panel') |

| 按下时按住 | 模式 |
|---|---|
| <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> | 添加到选区 |
| <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> | 从选区减去 |
| <kbd class="k-pc">Shift+Alt</kbd><kbd class="k-mac">⌥⇧</kbd> | 与选区交叉（只保留重叠部分） |

- 点多边形的第一个点或按 <span data-k="edit-confirm"></span> 来闭合多边形。不拖动只点一下会清除选区。
- 移到其他单元格或图层时，选区会保留。

## 变换

| 工具库 | 工具设置 |
|---|---|
| ![](img/tool-move-library.png ':class=panel') | ![](img/tool-move-settings.png ':class=panel') |

| 模式 | 按键 |
|---|---|
| 普通变换 | <span data-k="tool-transform-normal"></span> |
| 自由变换 | <span data-k="tool-transform-free"></span> |

- 在框内拖动是移动，框外拖动是旋转，拖角是缩放（<kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> = 以对角为基准），拖边的中点是单方向缩放。
- 没有选区时，整张画稿一起变换。
- 在时间轴上选中 **多个单元格和图层** 再变换，范围内的每张画稿都会得到同样的变换（隐藏的图层和空单元格会跳过）。

## 裁剪

| 工具库 | 工具设置 |
|---|---|
| ![](img/tool-cut-library.png ':class=panel') | ![](img/tool-cut-settings.png ':class=panel') |

- 把圈起来的部分拿起来，可以移动。关闭 **删除原图** 就变成复制。
- **图章** — 点一下把拿着的东西盖一次，拖动可以连续盖。**注册为笔尖** 会把它做成画笔笔尖。

## 确认与取消

| | 按键 |
|---|---|
| 确认 ![](img/icon-rail-confirm-button.png ':class=icon :no-zoom') | <span data-k="edit-confirm"></span> |
| 取消 | <span data-k="selection-transform-cancel"></span> |

- 应用之前，撤销会一步一步退回每个操作；应用之后，整个变换会一次撤销。
- 切换到别的工具时，正在进行的变换会被应用。
