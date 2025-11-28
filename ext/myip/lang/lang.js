// https://res.dkon.app/ext/myip/lang/lang.js
(() => {
  const LANGS = {
    en: "English",
    ru: "Русский",
    id: "Bahasa Indonesia",
    es: "Español",
    pt: "Português",
    de: "Deutsch",
    fr: "Français",
    tr: "Türkçe",
    vi: "Tiếng Việt",
    pl: "Polski",
    // добавляй сколько хочешь
  };

  // В service worker navigator нет → берём из chrome.i18n (это единственный надёжный способ!)
  const browserLang = (chrome.i18n.getUILanguage() || 'en').toLowerCase().split('-')[0];

  window.DKON_CURRENT_LANG = LANGS[browserLang] ? browserLang : 'en';
  window.DKON_LANGS = LANGS; // на всякий случай
})();
