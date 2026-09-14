// ===================================
// ВСТРОЕННЫЕ ПЕРЕВОДЫ
// ===================================
// Переводы встроены напрямую, без fetch(), чтобы система работала через file://

const translationsRu = {
  "header": {
    "contact": "Связаться"
  },
  "hero": {
    "eyebrow": "Фотограф · Ереван",
    "title": "Ловлю свет\nв момент,\nкогда рождается чувство",
    "subtitle": "Свадьбы, репортажи и пейзажи — моменты, которые не повторяются. Для меня важно ловить не позу, а суть.",
    "cta1": "Смотреть портфолио",
    "cta2": "Обсудить съёмку"
  },
  "portfolio": {
    "title": "Портфолио",
    "subtitle": "Избранные кадры"
  },
  "about": {
    "title": "Обо мне",
    "intro": "Викарчук Матвей Денисович — фотограф, работающий над проектом Salty. Вот уже несколько лет я ловлю моменты на свадьбах, репортажах и в природе. Каждый кадр для меня — это разговор между светом и временем, где я просто внимательно слушаю.",
    "fact1": "Опыт",
    "fact1_val": "5+ лет съёмки",
    "fact2": "Город",
    "fact2_val": "Ереван, выезд по Кавказу",
    "fact3": "Специализация",
    "fact3_val": "Свадьбы, репортажи, природа",
    "fact4": "Стиль",
    "fact4_val": "Моменты, а не позы"
  },
  "services": {
    "title": "Услуги",
    "subtitle": "Форматы съёмки и стоимость",
    "service1": "Сессия",
    "service1_desc": "1–1,5 часа, одна локация, обработка 15–20 кадров. Идеально для личного архива.",
    "service1_price": "от 25 000 ֏",
    "service2": "Репортаж",
    "service2_desc": "Съёмка мероприятия 3+ часа. Я ловлю все моменты, не ставя никого перед камерой.",
    "service2_price": "от 45 000 ֏",
    "service3": "Свадебный день",
    "service3_desc": "От сборов до банкета. Полная история вашего дня, цветокоррекция и приватная онлайн-галерея.",
    "service3_price": "от 120 000 ֏"
  },
  "contact": {
    "title": "Контакты",
    "lead": "Расскажите мне о вашей съёмке — отвечу в течение дня.",
    "phone": "Телефон",
    "email": "Email",
    "form_name": "Имя",
    "form_name_placeholder": "Как к вам обращаться",
    "form_contact": "Телефон или способ связи",
    "form_contact_placeholder": "+374 ... или другое",
    "form_message": "Сообщение",
    "form_message_placeholder": "Тип съёмки, дата, место",
    "form_submit": "Отправить",
    "form_success": "Спасибо! Сообщение отправлено, скоро свяжусь."
  },
  "footer": {
    "text": "© 2026 Salty. Все права защищены.",
    "top": "Наверх ↑"
  },
  "nav": {
    "portfolio": "Портфолио",
    "about": "Обо мне",
    "services": "Услуги",
    "contact": "Контакты"
  }
};

const translationsEn = {
  "header": {
    "contact": "Contact"
  },
  "hero": {
    "eyebrow": "Photographer · Yerevan",
    "title": "I catch light\nat the moment\nfeeling is born",
    "subtitle": "Weddings, reportage, and landscapes—moments that don't repeat. I capture feeling, not poses.",
    "cta1": "View Portfolio",
    "cta2": "Discuss a Shoot"
  },
  "portfolio": {
    "title": "Portfolio",
    "subtitle": "Selected shots"
  },
  "about": {
    "title": "About Me",
    "intro": "Matvey Vikarchuk — photographer behind the Salty project. For several years, I've been capturing moments at weddings, events, and in nature. Every frame is a conversation between light and time—I simply listen carefully.",
    "fact1": "Experience",
    "fact1_val": "5+ years of shooting",
    "fact2": "Location",
    "fact2_val": "Yerevan, available for travel",
    "fact3": "Specialization",
    "fact3_val": "Weddings, reportage, landscape",
    "fact4": "Approach",
    "fact4_val": "Moments, not poses"
  },
  "services": {
    "title": "Services",
    "subtitle": "Shoot formats and rates",
    "service1": "Session",
    "service1_desc": "1–1.5 hours, one location, 15–20 edited images. Perfect for personal archive.",
    "service1_price": "from 25,000 ֏",
    "service2": "Reportage",
    "service2_desc": "Event coverage 3+ hours. I capture all moments naturally, no staging.",
    "service2_price": "from 45,000 ֏",
    "service3": "Wedding Day",
    "service3_desc": "From preparations to reception. Full story of your day, color correction, private online gallery.",
    "service3_price": "from 120,000 ֏"
  },
  "contact": {
    "title": "Contact",
    "lead": "Tell me about your shoot—I'll respond within a day.",
    "phone": "Phone",
    "email": "Email",
    "form_name": "Name",
    "form_name_placeholder": "Your name",
    "form_contact": "Phone or contact method",
    "form_contact_placeholder": "+374 ... or other",
    "form_message": "Message",
    "form_message_placeholder": "Shoot type, date, location",
    "form_submit": "Send",
    "form_success": "Thank you! Message sent, I'll be in touch soon."
  },
  "footer": {
    "text": "© 2026 Salty. All rights reserved.",
    "top": "Back to top ↑"
  },
  "nav": {
    "portfolio": "Portfolio",
    "about": "About",
    "services": "Services",
    "contact": "Contact"
  }
};

const translationsHy = {
  "header": {
    "contact": "Կապ"
  },
  "hero": {
    "eyebrow": "Լուսանկարիչ · Երևան",
    "title": "Ես գրավում եմ լույսը\nայն պահին,\nերբ ծնվում է զգացումը",
    "subtitle": "Հարսանիքներ, ռեպորտաժներ և բնանկարներ՝ պահեր, որոնք չեն կրկնվում։ Ինձ համար կարևոր է գրավել ոչ թե դիրքը, այլ էությունը։",
    "cta1": "Դիտել պորտֆոլիոն",
    "cta2": "Քննարկել նկարահանումը"
  },
  "portfolio": {
    "title": "Պորտֆոլիո",
    "subtitle": "Ընտրված կադրեր"
  },
  "about": {
    "title": "Իմ մասին",
    "intro": "Վիկարչուկ Մատվեյ Դենիսովիչը՝ լուսանկարիչ, ով աշխատում է Salty նախագծի վրա։ Արդեն մի քանի տարի է՝ ես գրավում եմ պահեր հարսանիքներից, ռեպորտաժներից և բնությունից։ Ինձ համար յուրաքանչյուր կադր լույսի ու ժամանակի միջև խոսակցություն է, որտեղ ես պարզապես ուշադիր լսում եմ։",
    "fact1": "Փորձ",
    "fact1_val": "5+ տարվա նկարահանում",
    "fact2": "Քաղաք",
    "fact2_val": "Երևան, մեկնում ամբողջ Կովկասով",
    "fact3": "Մասնագիտացում",
    "fact3_val": "Հարսանիքներ, ռեպորտաժներ, բնություն",
    "fact4": "Ոճ",
    "fact4_val": "Պահեր, ոչ թե դիրքեր"
  },
  "services": {
    "title": "Ծառայություններ",
    "subtitle": "Նկարահանման ձևաչափեր և արժեք",
    "service1": "Սեսիա",
    "service1_desc": "1–1,5 ժամ, մեկ վայր, 15–20 կադրի մշակում։ Իդեալական է անձնական արխիվի համար։",
    "service1_price": "25 000 ֏",
    "service2": "Ռեպորտաժ",
    "service2_desc": "Միջոցառման նկարահանում՝ 3+ ժամ։ Ես գրավում եմ բոլոր պահերը՝ առանց որևէ մեկին տեսախցիկի առաջ դնելու։",
    "service2_price": "45 000 ֏",
    "service3": "Հարսանիքի օր",
    "service3_desc": "Պատրաստվելուց մինչև հանդիսությունը։ Ձեր օրվա ամբողջական պատմությունը, գունային կորեկցիա և մասնավոր առցանց պատկերասրահ։",
    "service3_price": "120 000 ֏"
  },
  "contact": {
    "title": "Կապեր",
    "lead": "Պատմեք ինձ ձեր նկարահանման մասին՝ կպատասխանեմ մեկ օրվա ընթացքում։",
    "phone": "Հեռախոս",
    "email": "Էլ. փոստ",
    "form_name": "Անուն",
    "form_name_placeholder": "Ինչպես դիմել ձեզ",
    "form_contact": "Հեռախոս կամ կապի եղանակ",
    "form_contact_placeholder": "+374 ... կամ այլ",
    "form_message": "Հաղորդագրություն",
    "form_message_placeholder": "Նկարահանման տեսակը, ամսաթիվը, վայրը",
    "form_submit": "Ուղարկել",
    "form_success": "Շնորհակալություն։ Հաղորդագրությունն ուղարկվել է, շուտով կկապվեմ։"
  },
  "footer": {
    "text": "© 2026 Salty։ Բոլոր իրավունքները պաշտպանված են։",
    "top": "Վերև ↑"
  },
  "nav": {
    "portfolio": "Պորտֆոլիո",
    "about": "Իմ մասին",
    "services": "Ծառայություններ",
    "contact": "Կապեր"
  }
};

// ===================================
// I18N СИСТЕМА ДЛЯ МНОГОЯЗЫЧНОСТИ
// ===================================
class I18n {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.translations = {
      ru: translationsRu,
      en: translationsEn,
      hy: translationsHy
    };
    this.init();
  }

  init() {
    // Установить начальный язык
    this.setLanguage(this.currentLang);
    
    // Добавить обработчики для кнопок переключения языков
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.setLanguage(e.target.dataset.lang);
      });
    });
  }

  // Определить язык: сохраненный в localStorage или язык по умолчанию
  detectLanguage() {
    const saved = localStorage.getItem('lang');
    if (saved && ['ru', 'en', 'hy'].includes(saved)) {
      return saved;
    }
    return 'ru'; // Русский по умолчанию
  }

  // Установить язык и обновить страницу
  setLanguage(lang) {
    if (!['ru', 'en', 'hy'].includes(lang)) {
      lang = 'ru';
    }

    this.currentLang = lang;
    localStorage.setItem('lang', lang);

    // Установить правильный lang атрибут для HTML
    document.documentElement.lang = lang === 'hy' ? 'hy-AM' : lang;

    // Обновить содержимое страницы
    this.updatePage();

    // Обновить активную кнопку переключения
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
    });
  }

  // Обновить весь контент страницы
  updatePage() {
    const t = this.translations[this.currentLang];

    // Обновить элементы с data-key атрибутом
    document.querySelectorAll('[data-key]').forEach((el) => {
      const key = el.dataset.key;
      const text = this.getNestedValue(t, key);
      if (text) {
        el.textContent = text;
      }
    });

    // Обновить placeholders
    document.querySelectorAll('[data-placeholder-key]').forEach((el) => {
      const key = el.dataset.placeholderKey;
      const text = this.getNestedValue(t, key);
      if (text) {
        el.placeholder = text;
      }
    });
  }

  // Получить значение из вложенного объекта по пути (например, "hero.title")
  getNestedValue(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
  }

  // Публичный метод для получения перевода
  t(key) {
    return this.getNestedValue(this.translations[this.currentLang], key) || key;
  }
}

// Инициализировать систему переводов
const i18n = new I18n();
