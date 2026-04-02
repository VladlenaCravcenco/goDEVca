export const LANGUAGES = ["ru", "ro", "en"];

export const DEFAULT_LANGUAGE = "ru";

export function normalizeLanguage(value) {
  return LANGUAGES.includes(value) ? value : null;
}

export function detectPreferredLanguage() {
  if (typeof navigator === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const candidates = [...(navigator.languages || []), navigator.language]
    .filter(Boolean)
    .map((lang) => lang.toLowerCase());

  if (candidates.some((lang) => lang.startsWith("ro"))) {
    return "ro";
  }

  if (candidates.some((lang) => lang.startsWith("ru"))) {
    return "ru";
  }

  if (candidates.some((lang) => lang.startsWith("en"))) {
    return "en";
  }

  return DEFAULT_LANGUAGE;
}

export function getRouteState(location = window.location) {
  const segments = location.pathname.split("/").filter(Boolean);
  const routeLanguage = normalizeLanguage(segments[0]);

  return {
    lang: routeLanguage || detectPreferredLanguage(),
    isLocalized: Boolean(routeLanguage),
    subPath: routeLanguage ? segments.slice(1) : segments,
    search: location.search || "",
    hash: location.hash || "",
  };
}

export function buildLocalizedPath(lang, subPath = [], search = "", hash = "") {
  const safeLang = normalizeLanguage(lang) || DEFAULT_LANGUAGE;
  const normalizedSubPath = Array.isArray(subPath)
    ? subPath.filter(Boolean)
    : String(subPath || "")
        .split("/")
        .filter(Boolean);

  const suffix = normalizedSubPath.length ? `/${normalizedSubPath.join("/")}` : "";
  return `/${safeLang}${suffix}${search}${hash}`;
}

export const copy = {
  ru: {
    languageLabel: "Язык",
    siteHeader: {
      websites: "К сайтам",
      contact: "Контакт",
    },
    hero: {
      photoAlt: "Владлена Кравченко",
      role: "Designer • Visual creator",
      sections: [
        {
          title: "Что я создаю",
          items: [
            "Рекламные баннеры и креативы для digital-продвижения",
            "Айдентику, логотипы и бренд-системы",
            "3D-визуализацию и анимацию в Blender",
            "Визуал для продуктов: от идеи до финального рендера",
          ],
        },
        {
          title: "Мои сильные стороны",
          items: [
            "Композиция и подача: фокус, баланс, читаемость",
            "Цвет и стиль под бренд: аккуратно и современно",
            "Сильные креативы под рекламу: чтобы цепляло",
            "Детали и качество: довожу визуал до дорогого вида",
          ],
        },
        {
          title: "Инструменты",
          items: [
            "Illustrator: вектор, логотипы, бренд-элементы",
            "Photoshop: рекламные макеты, ретушь, компоновка",
            "Blender: 3D-сцены, продуктовые рендеры, анимация",
            "Figma: композиции, концепции, системы",
          ],
        },
        {
          title: "Подход к работе",
          items: [
            "Сначала смысл и идея, потом визуальный стиль",
            "Делаю визуал под задачу: реклама / бренд / продукт",
            "Люблю чистую подачу без визуального мусора",
          ],
        },
      ],
      ctaProjects: "Посмотреть проекты",
      ctaContact: "Обсудить проект",
    },
    projects: {
      all: "Все",
      empty: "Пока нет проектов в этой категории.",
      projectFallback: "Проект",
      projectTitleFallback: "Название проекта",
      companyLogoAlt: "Логотип компании",
    },
    modal: {
      title: "Заявка",
      close: "Закрыть",
      name: "Имя *",
      namePlaceholder: "Как к вам обращаться",
      phone: "Телефон / Telegram *",
      phonePlaceholder: "+373… или @username",
      email: "Email (необязательно)",
      emailPlaceholder: "you@mail.com",
      message: "Задача *",
      messagePlaceholder: "Что нужно сделать? Сроки? Пример или референс?",
      errorRequired: "Заполни: имя, телефон и задачу.",
      errorEmail: "EmailJS не настроен: проверь переменные VITE_EMAILJS_* в .env",
      errorSubmit: "Не отправилось. Попробуй ещё раз или напиши в Instagram.",
      success: "Отправлено. Я отвечу в ближайшее время.",
      cancel: "Отмена",
      submit: "Отправить",
      sending: "Отправляю...",
      note: "Нажми Esc, чтобы закрыть.",
      source: "goDEVca • дизайн-портфолио",
    },
  },
  ro: {
    languageLabel: "Limbă",
    siteHeader: {
      websites: "Spre site-uri",
      contact: "Contact",
    },
    hero: {
      photoAlt: "Vladlena Cravcenco",
      role: "Designer • creator vizual",
      sections: [
        {
          title: "Ce creez",
          items: [
            "Bannere publicitare și creații pentru promovare digitală",
            "Identitate vizuală, logo-uri și sisteme de brand",
            "Vizualizare 3D și animație în Blender",
            "Vizual pentru produse: de la idee la randarea finală",
          ],
        },
        {
          title: "Punctele mele forte",
          items: [
            "Compoziție și prezentare: focus, echilibru, lizibilitate",
            "Culoare și stil potrivite brandului: curat și contemporan",
            "Vizualuri puternice pentru ads: făcute să atragă atenția",
            "Detalii și calitate: duc vizualul la un aspect premium",
          ],
        },
        {
          title: "Instrumente",
          items: [
            "Illustrator: vector, logo-uri, elemente de brand",
            "Photoshop: layout-uri publicitare, retuș, compoziție",
            "Blender: scene 3D, randări de produs, animație",
            "Figma: compoziții, concepte, sisteme",
          ],
        },
        {
          title: "Cum lucrez",
          items: [
            "Mai întâi sensul și ideea, apoi direcția vizuală",
            "Construiesc vizualul după obiectiv: reclamă / brand / produs",
            "Îmi place o prezentare curată, fără zgomot vizual",
          ],
        },
      ],
      ctaProjects: "Vezi proiectele",
      ctaContact: "Discută proiectul",
    },
    projects: {
      all: "Toate",
      empty: "Încă nu există proiecte în această categorie.",
      projectFallback: "Proiect",
      projectTitleFallback: "Titlul proiectului",
      companyLogoAlt: "Logo companie",
    },
    modal: {
      title: "Cerere",
      close: "Închide",
      name: "Nume *",
      namePlaceholder: "Cum să mă adresez către tine",
      phone: "Telefon / Telegram *",
      phonePlaceholder: "+373… sau @username",
      email: "Email (opțional)",
      emailPlaceholder: "you@mail.com",
      message: "Task *",
      messagePlaceholder: "Ce trebuie făcut? Termene? Exemple sau referințe?",
      errorRequired: "Completează numele, telefonul și cerința.",
      errorEmail: "EmailJS nu este configurat: verifică variabilele VITE_EMAILJS_* din .env",
      errorSubmit: "Nu s-a trimis. Încearcă din nou sau scrie-mi pe Instagram.",
      success: "Trimis. Revin cu răspuns cât mai curând.",
      cancel: "Anulează",
      submit: "Trimite",
      sending: "Trimit...",
      note: "Apasă Esc pentru a închide.",
      source: "goDEVca • portofoliu de design",
    },
  },
  en: {
    languageLabel: "Language",
    siteHeader: {
      websites: "To websites",
      contact: "Contact",
    },
    hero: {
      photoAlt: "Vladlena Cravcenco",
      role: "Designer • visual creator",
      sections: [
        {
          title: "What I create",
          items: [
            "Ad banners and creatives for digital campaigns",
            "Brand identity, logos, and brand systems",
            "3D visualization and animation in Blender",
            "Product visuals from concept to final render",
          ],
        },
        {
          title: "My strengths",
          items: [
            "Composition and presentation: focus, balance, readability",
            "Color and style aligned with the brand: clean and current",
            "Strong ad creatives built to catch attention",
            "Detail and polish: visuals pushed to a premium finish",
          ],
        },
        {
          title: "Tools",
          items: [
            "Illustrator: vector work, logos, brand elements",
            "Photoshop: ad layouts, retouching, compositing",
            "Blender: 3D scenes, product renders, animation",
            "Figma: compositions, concepts, systems",
          ],
        },
        {
          title: "How I work",
          items: [
            "Meaning and idea first, visual style second",
            "Every visual is built for the task: ads / brand / product",
            "I prefer clean presentation without visual noise",
          ],
        },
      ],
      ctaProjects: "View projects",
      ctaContact: "Discuss a project",
    },
    projects: {
      all: "All",
      empty: "There are no projects in this category yet.",
      projectFallback: "Project",
      projectTitleFallback: "Project title",
      companyLogoAlt: "Company logo",
    },
    modal: {
      title: "Project request",
      close: "Close",
      name: "Name *",
      namePlaceholder: "How should I address you",
      phone: "Phone / Telegram *",
      phonePlaceholder: "+373... or @username",
      email: "Email (optional)",
      emailPlaceholder: "you@mail.com",
      message: "Task *",
      messagePlaceholder: "What needs to be done? Timeline? Example or reference?",
      errorRequired: "Fill in your name, phone, and project brief.",
      errorEmail: "EmailJS is not configured: check VITE_EMAILJS_* variables in .env",
      errorSubmit: "It did not send. Try again or message me on Instagram.",
      success: "Sent. I will get back to you shortly.",
      cancel: "Cancel",
      submit: "Send",
      sending: "Sending...",
      note: "Press Esc to close.",
      source: "goDEVca • design portfolio",
    },
  },
};
