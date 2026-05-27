window.addEventListener('DOMContentLoaded', () => {
  // ── 1. 目次の生成（既存コード）──
  const tocList = document.getElementById('toc-list');
  const headers = document.querySelectorAll('h2, h3');
  headers.forEach((header, index) => {
    if (!header.id) {
      header.id = 'header-' + index;
    }
    const li = document.createElement('li');
    li.style.marginBottom = "5px";
    li.style.paddingLeft = header.tagName === 'H3' ? "15px" : "0px";
    const a = document.createElement('a');
    a.href = '#' + header.id;
    a.textContent = header.textContent;
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // ── 2. アクティブハイライトのスタイルを追加（追記分）──
  const style = document.createElement('style');
  style.textContent = `
    #toc-list a {
      display: block;
      color: inherit;
      text-decoration: none;
      padding: 1px 4px;
      border-radius: 3px;
      transition: background 0.2s, color 0.2s;
    }
    #toc-list a.active {
      background: #d0e8ff;
      color: #0056b3;
      font-weight: bold;
    }
  `;
  document.head.appendChild(style);

  // ── 3. アクティブ項目を更新する関数（追記分）──
  function updateActive() {
    const headingList = Array.from(document.querySelectorAll('h2, h3'));
    if (headingList.length === 0) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const offset = 80;

    let current = headingList[0];
    for (const h of headingList) {
      if (h.getBoundingClientRect().top + scrollY - offset <= scrollY) {
        current = h;
      }
    }

    const links = document.querySelectorAll('#toc-list a');
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current.id) {
        link.classList.add('active');
        link.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  // ── 4. スクロールイベントの登録（追記分）──
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
      ticking = true;
    }
  });

  // 初期表示時にも実行
  updateActive();
});
