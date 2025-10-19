(async function() {
  const defaultLocale = 'en';
 // const supported = ['en','ru','pl','tl','id'];
  const supported = ['en','ru','pl','tl','id','hi','fa','ar']; 
  const rawLang = navigator.language || navigator.userLanguage || defaultLocale;
  const lang = rawLang.split('-')[0];

 
  async function fetchLocale(locale) {
    try {
      const resp = await fetch(`https://res.dkon.app/dmght/land/${locale}.json`, {cache: 'no-cache'});
      if (!resp.ok) return null;
      return await resp.json();
    } catch (e) {
      return null;
    }
  }

  let messages = null;
  if (supported.includes(lang)) {
    messages = await fetchLocale(lang);
  }
  if (!messages) {
    messages = await fetchLocale(defaultLocale) || {};
  }

  function applyTranslations(dict) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = key.split('.').reduce((o,k) => (o && o[k] !== undefined) ? o[k] : undefined, dict);
      if (val !== undefined && val !== null) {
        if (el.tagName.toLowerCase() === 'img' && el.hasAttribute('alt')) {
          el.setAttribute('alt', val);
        } else if (el.tagName.toLowerCase() === 'input' && el.type === 'button') {
          el.value = val;
        } else {
          el.textContent = val;
        }
      }
    });
  }

  applyTranslations(messages);

  
})();
