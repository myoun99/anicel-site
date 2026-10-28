# 도구

캔버스 왼쪽의 세로 막대입니다.

| | 버튼 | 키 |
|---|---|---|
| ![](img/icon-undo-button.png ':class=icon :no-zoom') | 실행 취소 | <span data-k="edit-undo"></span> |
| ![](img/icon-redo-button.png ':class=icon :no-zoom') | 다시 실행 | <span data-k="edit-redo"></span> |
| ![](img/icon-rail-onion-skin-button.png ':class=icon :no-zoom') | [어니언 스킨 켜기/끄기](/ko/onion-skin) | <span data-k="onion-skin-toggle"></span> |
| ![](img/icon-rail-deselect-button.png ':class=icon :no-zoom') | 선택 해제 | <span data-k="selection-deselect"></span> |
| ![](img/icon-rail-confirm-button.png ':class=icon :no-zoom') | [확정](/ko/tools?id=확정과-취소) | <span data-k="edit-confirm"></span> |
| ![](img/icon-rail-visibility-solo-button.png ':class=icon :no-zoom') | 활성 레이어 솔로 | <span data-k="layer-visibility-solo"></span> |
| ![](img/icon-tool-brush-button.png ':class=icon :no-zoom') | [브러시](/ko/tools?id=브러시) | <span data-k="tool-brush"></span> |
| ![](img/icon-tool-eraser-button.png ':class=icon :no-zoom') | [지우개](/ko/tools?id=지우개) | <span data-k="tool-eraser"></span> |
| ![](img/icon-tool-eyedropper-button.png ':class=icon :no-zoom') | [스포이트](/ko/tools?id=스포이트) | <span data-k="tool-eyedropper"></span> |
| ![](img/icon-tool-fill-button.png ':class=icon :no-zoom') | [채우기](/ko/tools?id=채우기) | <span data-k="tool-fill"></span> |
| ![](img/icon-tool-text-button.png ':class=icon :no-zoom') | [텍스트](/ko/tools?id=텍스트) | <span data-k="tool-text"></span> |
| ![](img/icon-tool-shape-button.png ':class=icon :no-zoom') | [도형](/ko/tools?id=도형) | <span data-k="tool-shape"></span> |
| ![](img/icon-tool-guide-button.png ':class=icon :no-zoom') | [가이드](/ko/tools?id=가이드) | <span data-k="tool-guide"></span> |
| ![](img/icon-tool-select-button.png ':class=icon :no-zoom') | [선택](/ko/tools?id=선택) | <span data-k="tool-select"></span> |
| ![](img/icon-tool-move-button.png ':class=icon :no-zoom') | [변형](/ko/tools?id=변형) | <span data-k="tool-transform-normal"></span> |
| ![](img/icon-tool-cut-button.png ':class=icon :no-zoom') | [잘라내기](/ko/tools?id=잘라내기) | <span data-k="tool-cut"></span> |

도구를 고르면 **도구 라이브러리**(종류)와 **도구 설정**(값)이 그 도구의 것으로 바뀝니다. 도구 버튼은 마지막에 쓴 종류로 다시 열립니다.

## 브러시

| 도구 라이브러리 | 도구 설정 |
|---|---|
| ![](img/tool-brush-library.png ':class=panel') | ![](img/tool-brush-settings.png ':class=panel') |

- 크기 · 불투명도 · 합성 모드는 캔버스 왼쪽 가장자리의 세로 알약에서 바꿉니다. 브러시를 만들고 고치는 법 → [브러시](/ko/brushes)

| 동작 | 키 |
|---|---|
| 45° 단위로 곧게(긋는 동안) | <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> |
| 직전 획의 끝에서 직선(누르는 동안 찍기) | <span data-k="canvas-line-hold"></span> |

## 지우개

- 도구 라이브러리 · 도구 설정은 [브러시](/ko/tools?id=브러시)와 같습니다. 고른 브러시 · 크기는 따로 기억합니다.

## 스포이트

| 도구 설정 |
|---|
| ![](img/tool-eyedropper-settings.png ':class=panel') |

- 다른 도구를 쓰는 중에도 <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> 를 누르고 있으면 스포이트가 됩니다(선택 · 변형 도구 제외).

## 채우기

| 도구 라이브러리 | 도구 설정 |
|---|---|
| ![](img/tool-fill-library.png ':class=panel') | ![](img/tool-fill-settings.png ':class=panel') |

- **펼치기** — 칠한 영역을 넓혀 선 밑까지 메웁니다.
- **틈 메우기** — 선이 조금 끊겨 있어도 막힌 것으로 봅니다.
- **캔버스 밖도 채우기** — 끄면 용지 가장자리까지 열린 영역은 칠하지 않습니다.

## 텍스트

| 도구 설정 |
|---|
| ![](img/tool-text-settings.png ':class=panel') |

- 누르면 그 자리에 글자, 끌면 그 너비의 글상자. 있는 글자를 누르면 다시 고칩니다.
- 글자는 **그 칸의 그림 안에** 들어갑니다(텍스트 레이어가 따로 없습니다).
- **글꼴 파일 가져오기**(.ttf · .otf · .ttc)로 넣은 글꼴은 프로젝트 파일과 함께 다닙니다.

## 도형

| 도구 라이브러리 | 도구 설정 |
|---|---|
| ![](img/tool-shape-library.png ':class=panel') | ![](img/tool-shape-settings.png ':class=panel') |

- 지금 브러시로 그려집니다. <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> 를 누르면 **비율 고정** 이 반대로 됩니다.

## 가이드

| 도구 라이브러리 | 도구 설정 |
|---|---|
| ![](img/tool-guide-library.png ':class=panel') | ![](img/tool-guide-settings.png ':class=panel') |

- **컷마다** 따로 갖습니다. 대칭 가이드는 하나만, 퍼스 가이드는 여럿이 함께 작용합니다.
- 캔버스 위 손잡이를 끌어 원점 · 각도 · 소실점 · 아이레벨을 옮깁니다.

## 선택

| 도구 라이브러리 | 도구 설정 |
|---|---|
| ![](img/tool-select-library.png ':class=panel') | ![](img/tool-select-settings.png ':class=panel') |

| 누르기 시작할 때 | 모드 |
|---|---|
| <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> | 추가 |
| <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> | 삭제 |
| <kbd class="k-pc">Shift+Alt</kbd><kbd class="k-mac">⌥⇧</kbd> | 선택중(겹친 곳만) |

- 다각형은 첫 점을 누르거나 <span data-k="edit-confirm"></span> 로 닫습니다. 끌지 않고 한 번 누르면 선택이 풀립니다.
- 선택은 다른 칸 · 다른 레이어로 옮겨 가도 남습니다.

## 변형

| 도구 라이브러리 | 도구 설정 |
|---|---|
| ![](img/tool-move-library.png ':class=panel') | ![](img/tool-move-settings.png ':class=panel') |

| 방식 | 키 |
|---|---|
| 일반 변형 | <span data-k="tool-transform-normal"></span> |
| 자유 변형 | <span data-k="tool-transform-free"></span> |

- 상자 안을 끌면 이동, 밖은 회전, 모서리는 크기(<kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> = 반대쪽 모서리 기준), 변 가운데는 한 방향 크기.
- 선택이 없으면 그림 전체가 변형됩니다.
- 타임라인에서 **여러 칸 · 여러 레이어** 를 고른 채 변형하면 고른 범위의 모든 그림에 같은 변형이 들어갑니다(숨긴 레이어 · 빈 칸은 건너뜁니다).

## 잘라내기

| 도구 라이브러리 | 도구 설정 |
|---|---|
| ![](img/tool-cut-library.png ':class=panel') | ![](img/tool-cut-settings.png ':class=panel') |

- 둘러싼 부분을 떼어 들고 옮깁니다. **원본 삭제** 를 끄면 복사가 됩니다.
- **스탬프** — 든 그림을 누르면 한 번, 끌면 이어서 찍습니다. **팁으로 등록** 하면 브러시 끝이 됩니다.

## 확정과 취소

| | 키 |
|---|---|
| 확정 ![](img/icon-rail-confirm-button.png ':class=icon :no-zoom') | <span data-k="edit-confirm"></span> |
| 취소 | <span data-k="selection-transform-cancel"></span> |

- 적용 전에는 실행 취소가 한 동작씩, 적용 후에는 변형 전체가 한 번에 되돌아갑니다.
- 다른 도구로 바꾸면 열려 있던 변형은 적용됩니다.
