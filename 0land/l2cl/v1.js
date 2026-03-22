// promo-popup.js

(function () {
  // Проверяем, показывали ли уже попап (чтобы не появлялся при каждом обновлении страницы)
  if (localStorage.getItem('promoPopupShown')) {
    return;
  }

  // Создаём стили
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
      max-width: 420px;
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

    .promo-btn {
      display: inline-block;
      background: #6366f1;
      color: white;
      font-weight: 600;
      padding: 14px 36px;
      border-radius: 12px;
      text-decoration: none;
      transition: all 0.22s;
      border: none;
      cursor: pointer;
      font-size: 1.08rem;
    }

    .promo-btn:hover {
      background: #4f46e5;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
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

  // Создаём HTML-структуру попапа
  const overlay = document.createElement('div');
  overlay.className = 'promo-overlay';
  overlay.id = 'promoOverlay';

  overlay.innerHTML = `
    <div class="promo-modal">
      <button class="promo-close">✕</button>
      <h2>Привет!</h2>
      <p>Мы разрабатываем новый игровой клиент,<br>подробности — в нашем канале!</p>
      <a href="https://t.me/+WLgr7rOHBNtiZmYx" 
         target="_blank" 
         class="promo-btn">
        Перейти в Telegram-канал
      </a>
    </div>
  `;

  document.body.appendChild(overlay);

  // Функции открытия / закрытия
  function openPopup() {
    overlay.classList.add('active');
    localStorage.setItem('promoPopupShown', 'true'); // запоминаем, что показали
  }

  function closePopup() {
    overlay.classList.remove('active');
  }

  // Обработчики
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      closePopup();
    }
  });

  overlay.querySelector('.promo-close').addEventListener('click', closePopup);

  // Закрытие по Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closePopup();
    }
  });

  // Показываем через 3 секунды
  setTimeout(openPopup, 3000);
})();
