// promo-popup.js

(function () {
  // Показываем только один раз
  if (localStorage.getItem('promoPopupShown1')) {
    return;
  }

  // Определяем язык браузера
  const userLangs = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
  const primaryLang = (userLangs[0] || 'en').toLowerCase().split('-')[0]; // ru, uk, tr, pt, el, zh, id, es, pl, en

  // Переводы
  const translations = {
    en: {
      title: "Hello!",
      text: "We are developing a new game client,<br>details and community — in our channels!",
      telegram: "Telegram Channel",
      discord: "Discord Server"
    },
    ru: {
      title: "Привет!",
      text: "Мы разрабатываем новый игровой клиент,<br>подробности и общение — в наших сообществах!",
      telegram: "Канал в Telegram",
      discord: "Сервер Discord"
    },
    uk: {
      title: "Привіт!",
      text: "Ми розробляємо новий ігровий клієнт,<br>деталі та спілкування — у наших спільнотах!",
      telegram: "Канал у Telegram",
      discord: "Сервер Discord"
    },
    tr: {
      title: "Merhaba!",
      text: "Yeni bir oyun istemcisi geliştiriyoruz,<br>detaylar ve topluluk — kanallarımızda!",
      telegram: "Telegram Kanalı",
      discord: "Discord Sunucusu"
    },
    pt: {
      title: "Olá!",
      text: "Estamos desenvolvendo um novo cliente de jogo,<br>detalhes e comunidade — nos nossos canais!",
      telegram: "Canal do Telegram",
      discord: "Servidor Discord"
    },
    el: {
      title: "Γεια σου!",
      text: "Αναπτύσσουμε νέο game client,<br>λεπτομέρειες και κοινότητα — στα κανάλια μας!",
      telegram: "Κανάλι Telegram",
      discord: "Διακομιστής Discord"
    },
    zh: {
      title: "你好！",
      text: "我们正在开发新的游戏客户端，<br>详情与社区 — 在我们的频道中！",
      telegram: "Telegram 频道",
      discord: "Discord 服务器"
    },
    id: {
      title: "Halo!",
      text: "Kami sedang mengembangkan klien game baru,<br>detail dan komunitas — di channel kami!",
      telegram: "Saluran Telegram",
      discord: "Server Discord"
    },
    es: {
      title: "¡Hola!",
      text: "Estamos desarrollando un nuevo cliente de juego,<br>detalles y comunidad — ¡en nuestros canales!",
      telegram: "Canal de Telegram",
      discord: "Servidor de Discord"
    },
    pl: {
      title: "Cześć!",
      text: "Tworzymy nowego klienta gry,<br>szczegóły i społeczność — na naszych kanałach!",
      telegram: "Kanał Telegram",
      discord: "Serwer Discord"
    }
  };

  // Выбираем перевод (fallback на английский)
  const lang = translations[primaryLang] ? primaryLang : 'en';
  const t = translations[lang];

  // Стили (без изменений, только классы)
  const style = document.createElement('style');
  style.textContent = `
    .promo-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.68);
      display: grid;
      place-items: center;
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s ease;
    }

    .promo-modal {
      background: #1a1a2e;
      color: #e0e0ff;
      width: 90%;
      max-width: 460px;
      border-radius: 16px;
      padding: 32px 24px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,0.7);
      transform: scale(0.75);
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
    }

    .promo-overlay.active {
      opacity: 1;
      pointer-events: all;
    }

    .promo-overlay.active .promo-modal {
      transform: scale(1);
    }

    .promo-modal h2 {
      margin: 0 0 16px;
      font-size: 1.7rem;
      color: #a5b4fc;
    }

    .promo-modal p {
      margin: 0 0 28px;
      line-height: 1.55;
      font-size: 1.05rem;
      color: #c7d2fe;
    }

    .promo-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      margin-bottom: 12px;
    }

    .promo-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #6366f1;
      color: white;
      font-weight: 600;
      padding: 14px 28px;
      border-radius: 12px;
      text-decoration: none;
      transition: all 0.22s;
      border: none;
      cursor: pointer;
      font-size: 1.05rem;
      min-width: 200px;
      justify-content: center;
    }

    .promo-btn.discord {
      background: #5865F2;
    }

    .promo-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
    }

    .promo-btn.discord:hover {
      box-shadow: 0 8px 20px rgba(88, 101, 242, 0.5);
    }

    .promo-close {
      position: absolute;
      top: 14px;
      right: 18px;
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 1.6rem;
      cursor: pointer;
      padding: 4px 10px;
      line-height: 1;
    }

    .promo-close:hover {
      color: #f87171;
    }
  `;

  document.head.appendChild(style);

  // HTML с динамическим содержимым
  const overlay = document.createElement('div');
  overlay.className = 'promo-overlay';
  overlay.id = 'promoOverlay';

  overlay.innerHTML = `
    <div class="promo-modal">
      <button class="promo-close">✕</button>
      
      <h2>${t.title}</h2>
      <p>${t.text}</p>
      
      <div class="promo-buttons">
        <a href="https://t.me/+WLgr7rOHBNtiZmYx" 
           target="_blank" 
           class="promo-btn">
          ${t.telegram}
        </a>
        
        <a href="https://discord.gg/UEDzhkxa7z" 
           target="_blank" 
           class="promo-btn discord">
          ${t.discord}
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Функции открытия / закрытия
  function openPopup() {
    overlay.classList.add('active');
    localStorage.setItem('promoPopupShown', 'true');
  }

  function closePopup() {
    overlay.classList.remove('active');
  }

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closePopup();
  });

  overlay.querySelector('.promo-close').addEventListener('click', closePopup);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closePopup();
    }
  });

  // Показ через 3 секунды
  setTimeout(openPopup, 3000);
})();
