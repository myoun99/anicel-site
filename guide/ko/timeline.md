# 타임라인

지금 컷의 레이어와 시간을 다루는 패널입니다. **한 줄이 레이어 하나, 가로가 시간(프레임)** 입니다. 레이어 줄의 칸과 종류는 [레이어 한눈에](/ko/layers)에 있습니다.

![](img/timeline.png)

- 블록 하나가 그림 한 장입니다. 큰 숫자는 그림 이름, 블록 끝의 작은 숫자는 길이(프레임 수)입니다.
- 패널 아래쪽 탭으로 **타임라인** 과 [콘티 패널](/ko/storyboard)을 오갑니다.

## 위쪽 명령 줄

| 자리 | 내용 |
|---|---|
| 왼쪽 | ![](img/icon-playback-skip-to-start-button.png ':class=icon :no-zoom') ![](img/icon-playback-play-button.png ':class=icon :no-zoom') ![](img/icon-playback-loop-toggle.png ':class=icon :no-zoom') ![](img/icon-timeline-camera-view-button.png ':class=icon :no-zoom') ![](img/icon-playback-record-voice-button.png ':class=icon :no-zoom') → [재생과 녹음](/ko/playback) |
| 알약 | **컷** · **레이어** · **프레임** · **공용** · **Fx** |
| 오른쪽 | 컷 이름 · 줌(좌우로 끌기) · 줌 맞춤 · **⇄**(X시트로 보기 / 타임라인으로 보기) |


## 고르기와 옮기기

블록 · 칸 · 레이어 · 키 · [콘티 패널](/ko/storyboard)의 컷 블록 모두 같은 규칙입니다.

- **처음 끌면 고릅니다**(하나 또는 여러 개, 여러 줄에 걸쳐서도).
- **고른 곳을 다시 끌면 옮깁니다.** 여러 줄에 걸친 선택은 어느 줄에서 잡아도 함께 옮겨집니다.
- 옮긴 그림이 그 줄의 같은 이름 그림 위에 놓이면 링크할지 묻습니다.
- 블록을 **더블클릭** 하면 그 블록의 편집 창이 열립니다(아래 「편집」).

## 컷 알약

| 동작 | 내용 |
|---|---|
| ＋ 새 컷 | 지금 컷 뒤에 새 컷 |
| 컷 메모 편집 | 컷에 메모 |
| 레이어 마크 | 컷 라벨 → [색 라벨과 테이크](/ko/layer-labels) |
| 컷 설정 | 이 컷의 스태프 |
| 캔버스 크기 | → [컷별 캔버스 크기](/ko/canvas-size) |
| 겸용컷 만들기 · 겸용컷으로 변환 | → [겸용컷](/ko/linked-cuts) |

컷 이름은 [콘티 패널](/ko/storyboard)에서 컷 블록을 고르고 **편집**(또는 더블클릭)으로 바꿉니다. 컷 길이는 마지막 블록 뒤의 컷 끝 손잡이를 끌어 바꿉니다.

## 레이어 알약

![](img/pill-layer.png ':size=107')

| | 동작 | 키 | |
|---|---|---|---|
| ![](img/icon-timeline-toolbar-add-layer-button.png ':class=icon :no-zoom') | 새 레이어 | <span data-k="layer-add"></span> | 옆 ▾ 로 종류 고르기 → [레이어 한눈에](/ko/layers) |

**레이어** 를 누르면 메뉴가 열립니다 — **어태치 해제** · **래스터라이즈** · **콘티 레이어**(애니메이션 ⇄ 콘티).

![](img/menu-layer.png ':size=184')

## 프레임 알약

![](img/pill-frame.png ':size=352')

| | 동작 | 키 | |
|---|---|---|---|
| ![](img/icon-new-frame-button.png ':class=icon :no-zoom') | 새 프레임 | <span data-k="frame-new-drawing"></span> | 고른 칸에 새 그림(레인에서는 새 키) |
| ![](img/icon-blank-exposure-button.png ':class=icon :no-zoom') | 비우기 | <span data-k="frame-blank-exposure"></span> | 고른 칸을 빈 칸으로 |
| ![](img/icon-auto-frame-toggle-button.png ':class=icon :no-zoom') | 프레임 자동 생성 | <span data-k="frame-auto-create"></span> | 켜 두면 빈 칸에 그리기만 해도 그림이 생김 |
| ![](img/icon-toggle-mark-one-button.png ':class=icon :no-zoom') | 중간나누기 마크1 | <span data-k="frame-toggle-mark-one"></span> | → [애니메이션 레이어](/ko/animation-layers) |
| ![](img/icon-toggle-mark-button.png ':class=icon :no-zoom') | 중간나누기 마크2 | <span data-k="frame-toggle-mark"></span> |  |
| ![](img/icon-mark-every-button.png ':class=icon :no-zoom') | 중간나누기 마크 자동 추가 | <span data-k="frame-mark-every"></span> | n 코마마다 마크 |
| ![](img/icon-push-blocks-button.png ':class=icon :no-zoom') | 밀기(칸 열기) | <span data-k="timeline-push-blocks"></span> | 고른 자리에 빈 칸을 열기 |
| ![](img/icon-pull-blocks-button.png ':class=icon :no-zoom') | 당기기(칸 닫기) | <span data-k="timeline-pull-blocks"></span> | 고른 자리의 빈 칸을 닫기 |
| ![](img/icon-set-comma-1-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-2-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-3-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-4-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-n-button.png ':class=icon :no-zoom') | 1 · 2 · 3 · 4 · N 코마 | <span data-k="timeline-comma-1 timeline-comma-2 timeline-comma-3 timeline-comma-4 timeline-comma-n"></span> | 고른 블록의 길이를 한꺼번에(뒤 블록은 당겨지거나 밀림) |

**프레임** 을 누르면 **행 전체 선택**(그 줄의 블록 전부).

## 공용 알약

무엇을 골랐든(블록 · 레이어 · 키 · 컷) 같은 버튼이 답합니다.

![](img/pill-shared.png ':size=308')

| | 동작 | 키 | |
|---|---|---|---|
| ![](img/icon-shared-edit-button.png ':class=icon :no-zoom') | 편집 | <span data-k="edit-instance"></span> | 고른 것의 편집 창([아래](/ko/timeline?id=편집)) |
| ![](img/icon-shared-auto-name-button.png ':class=icon :no-zoom') | 자동 이름 지정 | <span data-k="edit-auto-name"></span> | 고른 블록에 시작 번호부터 차례로 이름 |
| ![](img/icon-shared-cut-button.png ':class=icon :no-zoom') | 잘라내기 | <span data-k="edit-cut"></span> |  |
| ![](img/icon-shared-copy-button.png ':class=icon :no-zoom') | 복사 | <span data-k="edit-copy"></span> |  |
| ![](img/icon-shared-paste-independent-button.png ':class=icon :no-zoom') | 독립 붙여넣기 | <span data-k="edit-paste-independent"></span> | 새 그림으로 붙이기 |
| ![](img/icon-shared-paste-linked-button.png ':class=icon :no-zoom') | 링크 붙여넣기 | <span data-k="edit-paste-linked"></span> | 같은 그림으로 붙이기(한쪽을 고치면 둘 다 바뀜) |
| ![](img/icon-shared-unlink-button.png ':class=icon :no-zoom') | 링크 독립 | <span data-k="edit-unlink"></span> | 링크된 그림을 따로 떼기 |
| ![](img/icon-shared-duplicate-button.png ':class=icon :no-zoom') | 복제 | <span data-k="edit-duplicate"></span> | 고른 레이어(콘티 패널에서는 컷)를 복제 |
| ![](img/icon-shared-merge-button.png ':class=icon :no-zoom') | 병합 | <span data-k="edit-merge"></span> | 아래 |
| ![](img/icon-shared-delete-button.png ':class=icon :no-zoom') | 삭제 | <span data-k="edit-delete"></span> | 고른 것을 지움(컷 > 레이어 > 칸 순으로 큰 것) |
| ![](img/icon-shared-colour-edit-button.png ':class=icon :no-zoom') | 색 편집 |  | 고른 그림의 색 바꾸기 · 지우기 → [색](/ko/color) |

**병합** — 고른 레이어(둘 이상, 또는 폴더 하나)를 한 레이어로 — 보이던 그대로 구워 맨 위 레이어가 됩니다(실행 취소 한 번). 보이는 모양이 바뀔 수 있으면 먼저 알려 줍니다. 어태치가 붙은 레이어를 병합하면 고르지 않은 어태치는 결과 레이어에 붙어 남습니다. 겸용 · 콘티 · 참조 이미지 레이어, 지시가 실린 블록이 있는 레이어, 본 레이어 없이 고른 어태치, 맨 위가 아닌 본 레이어에 고르지 않은 어태치가 있을 때는 아직 건너뜁니다.

프레임 선택 범위가 한 행의 블록을 둘 이상 담고 있으면 **병합** 은 행마다 그 블록들을 **블록 하나** 로 만듭니다 — 제일 왼쪽 블록 자리에서 시작해 마지막 블록 끝까지(사이 빈칸도 덮음), 이름은 제일 왼쪽 블록의 것, 겹치는 곳은 왼쪽 블록의 그림이 위(실행 취소 한 번).

## 편집

블록을 고르고 **편집**<span data-k="edit-instance" data-k-paren></span>을 누르거나 블록을 더블클릭하면, 고른 것에 맞는 창이 열립니다.

![](img/se-edit.png)

| 고른 것 | 창에서 정하는 것 |
|---|---|
| 그림 블록(애니메이션 · 콘티 · 이미지) | 그림 이름 |
| SE 블록 | 이름(화자) · 타입(ON · OFF · MONO) · 대사 · 링크된 오디오 → [사운드(SE) 레이어](/ko/sound-layers) |
| 디렉션 블록 | 지시(PAN 등) · 이름 · 시작 · 끝 → [카메라 · 디렉션 · 트랜지션](/ko/camera-section) |
| 트랜지션 블록 | 전환 종류(FI · FO 등) |
| 레인의 키 | 키 이름 · 빠르기 · 경로 · 로빙 → [이펙트와 변형](/ko/effects) |
| 레이어 | 레이어 이름(여러 개를 한 번에) |
| 콘티 패널의 컷 | 컷 이름 |

## X시트

오른쪽 끝의 **⇄**(X시트로 보기)를 누르면 타임라인이 종이 타임시트처럼 **세로** 로 바뀝니다(위에서 아래가 시간, 왼쪽부터 ACTION · SE · CAM 열). 하는 일은 타임라인과 같고, 화살표 키의 방향이 시트를 따릅니다. → [단축키](/ko/shortcuts)

## 줌

- 오른쪽의 줌 숫자를 좌우로 끌어 칸 너비를 바꿉니다. **줌 맞춤** 은 컷 전체가 패널에 들어오게 합니다.
- [환경설정](/ko/preferences) → **화면** → **블록 안 프레임선** 을 켜면 블록 안에도 프레임마다 세로선이 그려집니다.
