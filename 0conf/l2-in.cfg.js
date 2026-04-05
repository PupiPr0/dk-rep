(function () {
  var url = 'https://res.dkon.app/0land/l2cl/v3.js';

  function addScript(src, cb, errCb) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    // не устанавливаем async для лучшей совместимости со старыми браузерами
    // обработчики для современных и старых IE
    s.onload = s.onreadystatechange = function () {
      var rs = this.readyState;
      if (!rs || rs === 'loaded' || rs === 'complete') {
        s.onload = s.onreadystatechange = null;
        if (typeof cb === 'function') cb();
      }
    };
    s.onerror = function () {
      if (typeof errCb === 'function') errCb();
    };
    // помещаем в head если есть, иначе в body
    var parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.documentElement;
    parent.appendChild(s);
  }

  addScript(url, function () {
    try {
      /* Код, который должен выполниться после загрузки внешнего скрипта.
         Здесь можно вызывать глобальные функции/переменные, предоставляемые v3.js.
         Пример:
         if (window.someInit) window.someInit();
      */
      console.log('v3.js успешно загружен');
    } catch (e) {
      /* обработка ошибок */
      console.error('Ошибка в post-load коде:', e);
    }
  }, function () {
    console.error('Не удалось загрузить', url);
  });
})();
