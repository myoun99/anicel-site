# 캔버스 보기

## 보기 알약

![](img/view-pill.png)

캔버스 아래쪽의 알약입니다. 자리가 모자라면 일부가 **⚙** 안으로 들어갑니다.

| | 버튼 | 키 |
|---|---|---|
| ![](img/icon-canvas-viewport-fit.png ':class=icon :no-zoom') | 화면에 맞추기 | <span data-k="canvas-fit"></span> |
| ![](img/icon-canvas-viewport-reset.png ':class=icon :no-zoom') | 줌 초기화 (100%) | <span data-k="canvas-reset-view"></span> |
| ![](img/icon-canvas-viewport-zoom-out.png ':class=icon :no-zoom') | 축소 | <span data-k="canvas-zoom-out"></span> |
| ![](img/icon-canvas-viewport-zoom-in.png ':class=icon :no-zoom') | 확대 | <span data-k="canvas-zoom-in"></span> |
| ![](img/icon-canvas-viewport-rotate-ccw.png ':class=icon :no-zoom') | 왼쪽 회전 | <span data-k="canvas-rotate-ccw"></span> |
| ![](img/icon-canvas-viewport-rotate-cw.png ':class=icon :no-zoom') | 오른쪽 회전 | <span data-k="canvas-rotate-cw"></span> |
| ![](img/icon-canvas-viewport-rotate-reset.png ':class=icon :no-zoom') | 기울기 초기화 (0°) | <span data-k="canvas-straighten"></span> |
| ![](img/icon-canvas-viewport-flip.png ':class=icon :no-zoom') | 좌우 반전 | <span data-k="canvas-flip-horizontal"></span> |
| ![](img/icon-canvas-viewport-flip-vertical.png ':class=icon :no-zoom') | 상하 반전 | <span data-k="canvas-flip-vertical"></span> |
| ![](img/icon-canvas-paper-color-button.png ':class=icon :no-zoom') ![](img/icon-canvas-pasteboard-color-button.png ':class=icon :no-zoom') ![](img/icon-canvas-backdrop-color-button.png ':class=icon :no-zoom') | [캔버스 색 · 페이스트보드 색 · 배경 색](/ko/canvas-view?id=색) | |

- 줌 · 각도 숫자는 좌우로 끌면 연속으로 바뀌고, 연필을 누르면 직접 입력합니다. 줌은 10~1600%.
- 키와 ± 는 정해진 단계(10 · 25 · 50 · 75 · 100 · 125 · 150 · 200 · 300 · 400 · 800 · 1600%)를, 회전 키는 15°씩 움직입니다. 마우스 휠은 커서 자리를 기준으로 확대 · 축소합니다.
- 반전은 보기만 뒤집습니다(그림은 그대로).

## 손으로 움직이기

| 누른 채 끌기 | |
|---|---|
| <span data-k="canvas-pan-hold"></span> | 화면 이동 |
| <span data-k="canvas-rotate-hold"></span> | 화면 회전 |

- 캔버스 가장자리의 막대를 끌어도 이동합니다.
- 터치 · 펜 조작은 [터치와 펜](/ko/touch-pen)에 있습니다.

## 페이스트보드

- 용지 바깥에도 그릴 수 있습니다. 그 바깥 영역이 **페이스트보드** 입니다. 출력할 때는 용지 크기로 잘립니다.
- **페이스트보드 색** 창에서 쓸지 말지(기본 사용)와 크기(용지의 1.5배 · 2배 · 3배, 기본 3배)를 정합니다.

## 색

- **캔버스 색**: 용지의 바탕색(보기용, 그림에는 들어가지 않습니다).
- **페이스트보드 색**: 용지 바깥의 색.
- **배경 색**: 그 바깥 창의 색.

## 카메라 뷰

- 타임라인 재생 버튼 옆의 **카메라 뷰** 를 켜면 카메라 틀 밖이 어둡게 가려집니다. 재생도 카메라 틀에 맞춰집니다.
- 가리는 어둡기는 카메라 행의 불투명도입니다. → [카메라 · 디렉션 · 트랜지션](/ko/camera-section)

## 커서

- [환경설정](/ko/preferences) → **화면** 에서 **브러시 / 펜 / 십자** 를 고릅니다(기본 십자). **브러시** 는 마우스를 올렸을 때 브러시 끝 모양을 보여 줍니다.
- 손가락으로 만질 때는 커서가 사라집니다.
