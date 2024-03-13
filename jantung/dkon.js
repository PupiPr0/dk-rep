'use strict';

importScripts('https://res.dkon.app/jantung/worker.js');

toolbox.precache(["https://dkon.app/?index.html","https://dkon.app/style/style.css"]);

toolbox.router.get('https://dkon.app/images/*', toolbox.cacheFirst);

toolbox.router.get('https://dkon.app/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
