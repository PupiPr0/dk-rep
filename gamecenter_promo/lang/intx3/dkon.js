(async function() {
  const lang = (navigator.languages && navigator.languages[0] || navigator.language || 'en').slice(0,2).toLowerCase();
  const available = ['en','ru', 'id', 'pl', 'pt-BR', 'uk', 'zh-CN'];
  const chosen = available.includes(lang) ? lang : 'en';

  async function loadJSON(path) {
    try {
      const r = await fetch(path, {cache: "no-cache"});
      if (!r.ok) throw new Error('Load failed');
      return await r.json();
    } catch (e) {
      console.warn('Translation load error', e);
      return null;
    }
  }

  const translations = await loadJSON(`https://res.dkon.app/gamecenter_promo/lang/intx3/${chosen}.json`)
    || await loadJSON('https://res.dkon.app/gamecenter_promo/lang/intx3/en.json') || {};

  function decodeHtml(html){
    const t = document.createElement('textarea');
    t.innerHTML = html;
    return t.value;
  }

  function applyTranslations(map) {
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(node => {
      const key = node.getAttribute('data-i18n');
      let value = map[key];
      if (value === undefined) return;
      node.innerHTML = decodeHtml(value);

      
    });
  }

  applyTranslations(translations);

  const mo = new MutationObserver(muts => {
    muts.forEach(m => {
      m.addedNodes.forEach(n => {
        if (n.nodeType !== 1) return;
        if (n.matches('[data-i18n]')) {
          const key = n.getAttribute('data-i18n');
          if (translations[key]) n.innerHTML = decodeHtml(translations[key]);
        }
        n.querySelectorAll && n.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (translations[key]) el.innerHTML = decodeHtml(translations[key]);
        });
      });
    });
  });
  mo.observe(document.body, {childList: true, subtree: true});
})();
