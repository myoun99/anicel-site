// The app's launch-window files on the site (launch/, copied from the app's
// assets/launch/<language>/ by the release round): written once, shown by
// the app and by these pages alike.
//   AnicelLaunch.render(md)            the markdown, as HTML
//   AnicelLaunch.fill(el, pathOf)      every language's file into el, one
//                                      data-lang block each
(function () {
  const LANGS = ['ja', 'ko', 'en', 'fr', 'zhHans'];

  const escape = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // `**…**` in bold; a marker left without its pair stays a literal, as the
  // app's MarkdownSubset reads it.
  const inline = (s) => {
    const parts = escape(s).split('**');
    const paired = parts.length % 2 === 1 ? parts.length : parts.length - 1;
    let out = '';
    for (let i = 0; i < paired; i++) out += i % 2 ? `<strong>${parts[i]}</strong>` : parts[i];
    if (paired < parts.length) out += `**${parts[parts.length - 1]}`;
    return out;
  };

  // The app's subset and nothing more: `## ` headings, `- ` bullets and
  // paragraphs a blank line apart; a line that is none of these carries on
  // the bullet or paragraph above it.
  const render = (md) => {
    const blocks = [];
    let open = null;
    for (const raw of md.replace(/\r\n/g, '\n').split('\n')) {
      const line = raw.trim();
      if (!line) { open = null; continue; }
      if (line.startsWith('## ')) { blocks.push({ kind: 'h', text: line.slice(3) }); open = null; }
      else if (line.startsWith('- ')) blocks.push(open = { kind: 'li', text: line.slice(2) });
      else if (open) open.text += ' ' + line;
      else blocks.push(open = { kind: 'p', text: line });
    }
    let html = '';
    let inList = false;
    for (const b of blocks) {
      if (b.kind === 'li' && !inList) { html += '<ul>'; inList = true; }
      if (b.kind !== 'li' && inList) { html += '</ul>'; inList = false; }
      if (b.kind === 'h') html += `<h3>${inline(b.text)}</h3>`;
      else if (b.kind === 'li') html += `<li>${inline(b.text)}</li>`;
      else html += `<p>${inline(b.text)}</p>`;
    }
    return html + (inList ? '</ul>' : '');
  };

  const fetchText = (url) =>
    fetch(url, { cache: 'no-cache' }).then((r) => (r.ok ? r.text() : null)).catch(() => null);

  const fill = async (el, pathOf) => {
    const texts = await Promise.all(LANGS.map((l) => fetchText(pathOf(l))));
    el.innerHTML = LANGS.map((l, i) => (texts[i] ? `<div data-lang="${l}">${render(texts[i])}</div>` : '')).join('');
  };

  window.AnicelLaunch = { LANGS, render, fetchText, fill };
})();
