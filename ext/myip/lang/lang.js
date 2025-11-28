(function() {
  window.DKON_LANGS = {
    en: "English",
    ru: "Русский",
    id: "Bahasa Indonesia",
    es: "Español",
    pt: "Português",
    de: "Deutsch",
    fr: "Français",
    tr: "Türkçe",
    vi: "Tiếng Việt",
    pl: "Polski"
  };

  const browserLang = (navigator.language || navigator.userLanguage || 'en')
    .toLowerCase().split('-')[0];

  window.DKON_CURRENT_LANG = window.DKON_LANGS[browserLang] ? browserLang : 'en';
})();
