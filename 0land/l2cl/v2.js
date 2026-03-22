// promo-popup.js

(function () {
  // Показываем только один раз (можно убрать или изменить на таймер)
  if (localStorage.getItem('promoPopupShown')) {
    return;
  }

  // Стили (добавил классы для двух кнопок и их контейнера)
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
      max-width: 440px;
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
      min-width: 220px;
      justify-content: center;
    }

    .promo-btn.discord {
      background: #5865F2; /* официальный цвет Discord (Blurple) */
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

  // HTML попапа
  const overlay = document.createElement('div');
  overlay.className = 'promo-overlay';
  overlay.id = 'promoOverlay';

  overlay.innerHTML = `
    <div class="promo-modal">
      <button class="promo-close">✕</button>
      
      <h2>Привет!</h2>
      <p>Мы разрабатываем новый игровой клиент,<br>подробности и общение — в наших сообществах!</p>
      
      <div class="promo-buttons">
        <a href="https://t.me/+WLgr7rOHBNtiZmYx" 
           target="_blank" 
           class="promo-btn">
          Telegram-канал
        </a>
        
        <a href="https://discord.gg/yTRnSvCpCv" 
           target="_blank" 
           class="promo-btn discord">
          Discord-сервер
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Функции
  function openPopup() {
    overlay.classList.add('active');
    localStorage.setItem('promoPopupShown', 'true');
  }

  function closePopup() {
    overlay.classList.remove('active');
  }

  // Закрытие по клику на фон
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closePopup();
  });

  // Закрытие по крестику
  overlay.querySelector('.promo-close').addEventListener('click', closePopup);

  // Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closePopup();
    }
  });

  // Показ через 3 секунды
  setTimeout(openPopup, 3000);
})();
