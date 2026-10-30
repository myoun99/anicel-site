// A picture on the site opens at its own size on a click (유저 10-31 「사진같은거
// 누르면 원본크기로 보이는기능」): the front page crops its shots to one height, and
// a guide screenshot is as wide as the app's window where the page column is
// not. One pixel of the picture is one pixel of the screen, so a picture
// wider than the window scrolls rather than shrinks. A click or Esc closes it.
//   AnicelPictureView.watch(selector)   pictures matching it open on a click
(function () {
  const STYLE = `
    .picture-view {
      width: 100%;
      height: 100%;
      max-width: none;
      max-height: none;
      margin: 0;
      padding: 0;
      border: 0;
      overflow: auto;
      overscroll-behavior: contain;
      background: rgba(0, 0, 0, 0.88);
      cursor: zoom-out;
    }
    .picture-view[open] { display: flex; }
    .picture-view::backdrop { background: none; }
    .picture-view img {
      flex: none;
      max-width: none;
      height: auto;
      margin: auto;
      border-radius: 0;
    }
  `;

  const addStyle = (css) => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.append(style);
  };

  addStyle(STYLE);
  const view = document.createElement('dialog');
  view.className = 'picture-view';
  const full = document.createElement('img');
  view.append(full);
  document.body.append(view);
  view.addEventListener('click', () => view.close());

  const open = (picture) => {
    // The density is what sizes it, so this holds before the picture loads.
    full.srcset = `${picture.src} ${window.devicePixelRatio}x`;
    full.alt = picture.alt;
    view.showModal();
  };

  // On the document, because the guide swaps its pictures with every page.
  const watch = (selector) => {
    addStyle(`${selector} { cursor: zoom-in; }`);
    document.addEventListener('click', (event) => {
      const picture = event.target.closest(selector);
      if (picture) open(picture);
    });
  };

  window.AnicelPictureView = { watch };
})();
