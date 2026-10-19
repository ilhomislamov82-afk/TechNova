import { Language } from '../types';

export const translations = {
  // Brand & Tagline
  brand: {
    name: 'TechNova',
    tagline: {
      uz: 'Texnologiya olamidagi yangiliklar va kashfiyotlar.',
      ru: 'Новости технологий и новые открытия.',
      en: 'Technology news and discoveries.',
    },
    mission: {
      uz: 'TechNova — sun\'iy intellekt, robototexnika, hisoblash texnologiyalari va zamonaviy qurilmalar olamiga xolis va aniq qo\'llanma.',
      ru: 'TechNova — ваш надежный путеводитель в мир искусственного интеллекта, робототехники, вычислительных систем и инновационных устройств.',
      en: 'TechNova — your authoritative guide to artificial intelligence, robotics, computing breakthroughs, and cutting-edge devices.',
    },
  },

  // Navigation
  nav: {
    home: {
      uz: 'Bosh sahifa',
      ru: 'Главная',
      en: 'Home',
    },
    news: {
      uz: 'Haftaning yangiliklari',
      ru: 'Интересные новости недели',
      en: 'This Week’s News',
    },
    techi: {
      uz: 'TechI — Sun\'iy Intellekt',
      ru: 'TechI — Интеллект ИИ',
      en: 'TechI — Technologic Intelligence AI',
    },
    settings: {
      uz: 'Sozlamalar',
      ru: 'Настройки',
      en: 'Settings',
    },
  },

  // First visit / Welcome modal
  welcome: {
    title: {
      uz: 'TechNova portaliga xush kelibsiz!',
      ru: 'Добро пожаловать в TechNova!',
      en: 'Welcome to TechNova!',
    },
    subtitle: {
      uz: 'Texnologiya yangiliklari, tasdiqlangan qurilmalar narxlari va TechI yordamchisidan foydalanish uchun til va mavzuni tanlang.',
      ru: 'Выберите предпочтительный язык и тему оформления для чтения новостей технологий, цен устройств и общения с TechI.',
      en: 'Select your preferred language and display theme to explore technology news, verified device prices, and TechI assistant.',
    },
    step1Title: {
      uz: '1. Tilni tanlang',
      ru: '1. Выберите язык',
      en: '1. Select Language',
    },
    step2Title: {
      uz: '2. Mavzuni tanlang',
      ru: '2. Выберите тему',
      en: '2. Select Theme',
    },
    themeLight: {
      uz: 'Yorug\' mavzu',
      ru: 'Светлая тема',
      en: 'Light Theme',
    },
    themeLightDesc: {
      uz: 'Yorqin fon, yuqori kontrast va qulay o\'qish',
      ru: 'Светлый фон, высокий контраст и удобное чтение',
      en: 'Crisp light background, strong contrast, easy reading',
    },
    themeDark: {
      uz: 'Tungi mavzu',
      ru: 'Темная тема',
      en: 'Dark Theme',
    },
    themeDarkDesc: {
      uz: 'To\'q ko\'k kosmik fon, ko\'zga qulay va zamonaviy',
      ru: 'Глубокий синий космический фон, комфорт для глаз',
      en: 'Deep navy aerospace background, easy on the eyes',
    },
    continueBtn: {
      uz: 'TechNova’ga o\'tish',
      ru: 'Перейти в TechNova',
      en: 'Continue to TechNova',
    },
  },

  // Homepage
  home: {
    heroBadge: {
      uz: 'Yangi kashfiyotlar platformasi',
      ru: 'Платформа новых открытий',
      en: 'Platform for Tech Discoveries',
    },
    heroHeading: {
      uz: 'Kelajak texnologiyalari, sun\'iy intellekt va kashfiyotlar maydoni',
      ru: 'Мир передовых технологий, искусственного интеллекта и открытий',
      en: 'Your Hub for Advanced Technology, AI Breakthroughs & Discoveries',
    },
    heroDescription: {
      uz: 'TechNova har kuni sun\'iy intellekt modellari, mikroprotsessorlar, gumanoid robotlar, zamonaviy smartfonlar va kosmik aloqa texnologiyalaridagi eng so\'nggi ilmiy-texnik yangiliklarni yoritadi.',
      ru: 'TechNova освещает главные научно-технические достижения: новые модели искусственного интеллекта, микропроцессоры, шагающие роботы, современные смартфоны и космические системы связи.',
      en: 'TechNova delivers verified coverage across frontier AI models, cutting-edge semiconductor fabrication, humanoid robotics, modern smartphones, and orbital satellite networks.',
    },
    featuredStoryBadge: {
      uz: 'Hafta tanlovi: Bosh maqola',
      ru: 'Выбор недели: Главный материал',
      en: 'Editor’s Pick: Lead Story',
    },
    quickNavTitle: {
      uz: 'Bo\'limlar bo\'yicha tezkor o\'tish',
      ru: 'Быстрый переход по разделам',
      en: 'Quick Navigation Destinations',
    },
    quickNavDesc: {
      uz: 'TechNova portalining barcha to\'rtta asosiy bo\'limiga bir bosishda kiring:',
      ru: 'Мгновенный доступ ко всем четырем разделам портала TechNova:',
      en: 'Direct access to all four core areas of the TechNova platform:',
    },
    recentNewsTitle: {
      uz: 'So\'nggi texnologik yangiliklar',
      ru: 'Свежие технологические новости',
      en: 'Recent Technology Headlines',
    },
    recentNewsDesc: {
      uz: 'Dunyo ilmiy markazlari va yetakchi texnologiya nashrlaridan olingan xabarlar',
      ru: 'Материалы ведущих мировых технологических изданий и исследовательских лабораторий',
      en: 'Curated dispatches from leading research labs and accredited technology publishers',
    },
    viewAllNewsBtn: {
      uz: 'Barcha haftalik yangiliklarni ko\'rish',
      ru: 'Смотреть все новости недели',
      en: 'View All Weekly News',
    },
    askTechiPrompt: {
      uz: 'Ushbu mavzu bo\'yicha tushunarsiz joy bormi? TechI intellektidan so\'rang!',
      ru: 'Есть технический вопрос? Задайте его прямо сейчас TechI!',
      en: 'Have questions about these breakthroughs? Ask TechI right now!',
    },
    dailyDeviceAnchor: {
      uz: 'Kun qurilmasi bo\'limiga o\'tish',
      ru: 'К разделу «Устройство дня»',
      en: 'Jump to Daily Device Section',
    },
  },

  // News Page
  news: {
    pageTitle: {
      uz: 'Haftaning qiziqarli yangiliklari',
      ru: 'Интересные новости этой недели',
      en: 'This Week’s Interesting News',
    },
    pageSubtitle: {
      uz: 'Joriy kalendar haftasi davomida e\'lon qilingan eng muhim ilmiy-texnik yangiliklar, apparat vositalari va sun\'iy intellekt yutuqlari.',
      ru: 'Главные научно-технические события текущей календарной недели: прорывы в микроэлектронике, ИИ, мобильных устройствах и робототехнике.',
      en: 'The most impactful discoveries and engineering milestones published during the current calendar week across global technology.',
    },
    searchPlaceholder: {
      uz: 'Yangiliklar bo\'yicha qidiruv (masalan: Gemini, TSMC, robot, OLED)...',
      ru: 'Поиск по новостям (например: Gemini, TSMC, роботы, OLED)...',
      en: 'Search news (e.g., Gemini, TSMC, robotics, OLED)...',
    },
    categories: {
      all: {
        uz: 'Barcha mavzular',
        ru: 'Все темы',
        en: 'All Topics',
      },
      ai: {
        uz: 'Sun\'iy intellekt',
        ru: 'Искусственный интеллект',
        en: 'Artificial Intelligence',
      },
      smartphones: {
        uz: 'Smartfonlar',
        ru: 'Смартфоны',
        en: 'Smartphones & Mobile',
      },
      computers: {
        uz: 'Kompyuter & Protsessorlar',
        ru: 'Компьютеры и чипы',
        en: 'Computers & Processors',
      },
      robotics: {
        uz: 'Robototexnika',
        ru: 'Робототехника',
        en: 'Robotics',
      },
      gadgets: {
        uz: 'Yangi gadjetlar',
        ru: 'Гаджеты и девайсы',
        en: 'Consumer Gadgets',
      },
      space: {
        uz: 'Kosmik & Kelajak texnologiyalari',
        ru: 'Космос и технологии будущего',
        en: 'Space & Emerging Tech',
      },
    },
    source: {
      uz: 'Manba:',
      ru: 'Источник:',
      en: 'Source:',
    },
    originalArticle: {
      uz: 'Asl maqolani o\'qish',
      ru: 'Читать оригинал статьи',
      en: 'Read Original Article',
    },
    verifiedSource: {
      uz: 'Tasdiqlangan ilmiy/texnik manba',
      ru: 'Проверенный источник',
      en: 'Verified Tech Publisher',
    },
    archivedNotice: {
      uz: 'Eslatma: TechNova barcha yangiliklar sanasi va manba havolalarini xolisona taqdim etadi. Matnlar haqiqiy nashr materiallariga asoslangan.',
      ru: 'Примечание: TechNova предоставляет точные даты публикации и подлинные ссылки на материалы аккредитованных мировых изданий.',
      en: 'Notice: TechNova ensures rigorous date verification and working original publisher links. No fabricated headlines or synthetic quotes.',
    },
    emptyStateTitle: {
      uz: 'Qidiruv bo\'yicha hech narsa topilmadi',
      ru: 'По вашему запросу ничего не найдено',
      en: 'No news found matching your criteria',
    },
    emptyStateDesc: {
      uz: 'Boshqa kalit so\'zlarni kiritib ko\'ring yoki toifa filtrini tozalang.',
      ru: 'Попробуйте изменить поисковый запрос или сбросить фильтр категорий.',
      en: 'Try searching for different keywords or resetting your active category filter.',
    },
    resetFiltersBtn: {
      uz: 'Filtrlarni bekor qilish',
      ru: 'Сбросить фильтры',
      en: 'Reset Filters',
    },
    minRead: {
      uz: 'daq. o\'qish',
      ru: 'мин. чтения',
      en: 'min read',
    },
    keyTakeawayLabel: {
      uz: 'Asosiy xulosa:',
      ru: 'Главный вывод:',
      en: 'Key Takeaway:',
    },
  },

  // Daily Device Section
  dailyDevice: {
    sectionTitle: {
      uz: 'Kun qurilmasi — Haqiqiy mahsulot va tasdiqlangan narx',
      ru: 'Устройство дня — Реальный продукт и проверенная цена',
      en: 'Daily Device — Real Product & Verified Price',
    },
    sectionSubtitle: {
      uz: 'Haqiqiy ishlab chiqaruvchi yoki rasmiy dilerdan olingan tasdiqlangan qurilma, fotosurat va narx ma\'lumoti.',
      ru: 'Реальный девайс из официального каталога производителя с прозрачной информацией о проверенной розничной цене.',
      en: 'An authentic technological product with genuine manufacturer photography and transparently verified retail pricing.',
    },
    currencyLabel: {
      uz: 'Valyutani tanlang:',
      ru: 'Выберите валюту:',
      en: 'Select Display Currency:',
    },
    verifiedPriceBadge: {
      uz: 'Tasdiqlangan rasmiy narx',
      ru: 'Проверенная цена',
      en: 'Verified Listed Price',
    },
    unverifiedPriceBadge: {
      uz: 'Narx mavjud emas / Tasdiqlanmagan',
      ru: 'Цена недоступна / Не подтверждена',
      en: 'Price Unavailable / Unverified',
    },
    originalPriceLabel: {
      uz: 'Asl katalog narxi:',
      ru: 'Оригинальная цена каталога:',
      en: 'Original Catalog Price:',
    },
    displayPriceLabel: {
      uz: 'Tanlangan valyutadagi narx:',
      ru: 'Цена в выбранной валюте:',
      en: 'Price in Selected Currency:',
    },
    exchangeRateNote: {
      uz: 'Konvertatsiya Markaziy Bankning 2026-yil 18-oktabrdagi rasmiy kursi bo\'yicha hisoblangan (1 USD = 0.92 EUR = 12 850 UZS).',
      ru: 'Конвертация рассчитана по официальному курсу от 18 октября 2026 года (1 USD = 0.92 EUR = 12 850 UZS).',
      en: 'Conversion calculated using official market benchmark rates as of October 18, 2026 (1 USD = 0.92 EUR = 12,850 UZS).',
    },
    retailerLabel: {
      uz: 'Rasmiy sotuvchi / Ishlab chiqaruvchi:',
      ru: 'Официальный продавец / Производитель:',
      en: 'Verified Retailer / Manufacturer:',
    },
    checkedDateLabel: {
      uz: 'Narx tekshirilgan vaqt:',
      ru: 'Дата и время проверки цены:',
      en: 'Price Checked Timestamp:',
    },
    viewOriginalListing: {
      uz: 'Asl mahsulot sahifasini ko\'rish',
      ru: 'Смотреть страницу товара в магазине',
      en: 'View Original Product Listing',
    },
    specsTitle: {
      uz: 'Asosiy texnik xususiyatlar',
      ru: 'Ключевые технические параметры',
      en: 'Key Technical Specifications',
    },
    highlightsTitle: {
      uz: 'Afzalliklari va innovatsion xususiyatlari',
      ru: 'Инновации и особенности',
      en: 'Innovations & Key Features',
    },
    switchDeviceLabel: {
      uz: 'Boshqa haqiqiy qurilmani ko\'rish:',
      ru: 'Посмотреть другое устройство:',
      en: 'Explore Other Verified Devices:',
    },
    testUnavailableToggle: {
      uz: 'Narx tasdiqlanmagan holatni ko\'rish',
      ru: 'Показать режим «Цена недоступна»',
      en: 'Preview "Price Unavailable" State',
    },
    priceUnavailableNotice: {
      uz: 'Ushbu qurilma narxi rasmiy manbada tasdiqlanmagan yoki mintaqaviy cheklovlar tufayli ko\'rsatib bo\'lmaydi. TechNova hech qachon taxminiy yoki uydirma narxlarni ko\'rsatmaydi.',
      ru: 'Цена данного устройства не может быть проверена в официальном каталоге на данный момент. В соответствии с правилами TechNova вымышленные или приблизительные цены исключены.',
      en: 'Pricing for this product configuration cannot be verified from official feeds. Under TechNova transparency rules, fictional or estimated prices are never displayed.',
    },
  },

  // TechI AI Page
  techi: {
    title: {
      uz: 'TechI — Texnologik Intellekt Sun\'iy Intellekti',
      ru: 'TechI — Интеллектуальный ИИ-ассистент',
      en: 'TechI — Technologic Intelligence AI',
    },
    subtitle: {
      uz: 'Texnologiyalar, apparat vositalari, arxitektura va sun\'iy intellekt bo\'yicha savollaringizga chuqur, tushunarli va ishonchli javoblar oling.',
      ru: 'Задавайте любые вопросы об архитектуре процессоров, ИИ-моделях, дисплеях, роботах и спутниковой связи на удобном вам языке.',
      en: 'Ask deep technical questions regarding processor architectures, AI models, displays, robotics, and orbital networks in your language.',
    },
    suggestedTitle: {
      uz: 'Tavsiya etilgan savollar:',
      ru: 'Популярные вопросы:',
      en: 'Suggested Questions to Explore:',
    },
    suggestedQuestions: [
      {
        uz: 'OLED va E-Ink ekranlari o\'rtasida qanday farq bor?',
        ru: 'В чем разница между экранами OLED и E-Ink?',
        en: 'What is the difference between OLED and E-Ink?',
      },
      {
        uz: 'Zamonaviy protsessorlar va NPU bloklari qanday ishlaydi?',
        ru: 'Как работают современные процессоры и блоки NPU?',
        en: 'Explain how modern processors work.',
      },
      {
        uz: 'Hozirgi kunda o\'rganishga arziydigan qanday yangi texnologiyalar bor?',
        ru: 'Какие новые технологии стоит изучать в первую очередь?',
        en: 'What new technologies are worth learning about?',
      },
      {
        uz: 'Sun\'iy yo\'ldoshlar orqali qanday qilib yer yuziga internet uzatiladi?',
        ru: 'Как низкоорбитальные спутники обеспечивают доступ в интернет?',
        en: 'How do satellites provide internet access?',
      },
    ],
    inputPlaceholder: {
      uz: 'Texnologiya bo\'yicha savolingizni yozing (Enter bosing)...',
      ru: 'Задайте технический вопрос (нажмите Enter для отправки)...',
      en: 'Ask any technology question (press Enter to send)...',
    },
    sendBtn: {
      uz: 'Yuborish',
      ru: 'Отправить',
      en: 'Send',
    },
    newChatBtn: {
      uz: 'Yangi suhbat',
      ru: 'Новый диалог',
      en: 'New Conversation',
    },
    typingIndicator: {
      uz: 'TechI javobni tahlil qilmoqda va shakllantirmoqda...',
      ru: 'TechI анализирует данные и формирует ответ...',
      en: 'TechI is analyzing technical concepts and formulating response...',
    },
    welcomeBubble: {
      uz: 'Salom! Men **TechI** — TechNova intellektual texnologik yordamchisiman. Men kompyuter arxitekturasi, sun\'iy intellekt, robototexnika va gadjetlar haqida talabalar va muhandislarga tushunarli tilda tushuntirib bera olaman. Savolingizni o\'zbek, rus yoki ingliz tilida bering!',
      ru: 'Привет! Я **TechI** — интеллектуальный ассистент TechNova. Я помогаю разобраться в сложных концепциях микроэлектроники, нейросетей, робототехники и спутниковых сетей понятным языком. Задайте любой вопрос на русском, узбекском или английском!',
      en: 'Hello! I am **TechI** — TechNova’s Technologic Intelligence AI. I provide clear, fact-checked explanations on computer hardware, neural architectures, robotics, and emerging science. Ask me anything in English, Uzbek, or Russian!',
    },
    liveBadge: {
      uz: 'Gemini 3.8 Flash orqali faol',
      ru: 'Работает на Gemini 3.8 Flash',
      en: 'Powered by Gemini 3.8 Flash',
    },
    kbBadge: {
      uz: 'TechNova Bilimlar Bazasi',
      ru: 'База знаний TechNova',
      en: 'TechNova Curated Knowledge Bank',
    },
    factsDisclaimer: {
      uz: 'Muhim eslatma: TechI faqat ilmiy tasdiqlangan tamoyillarni bayon qiladi. U tirik yangiliklar yoki do\'kondagi jonli narxlarni tekshirmaydi.',
      ru: 'Важно: TechI разъясняет фундаментальные инженерные факты. Он не делает неподтвержденных прогнозов цен и не имитирует проверку магазинов.',
      en: 'Note: TechI focuses on verified engineering facts and science. It never fabricates live retail prices or inventory status.',
    },
    errorTitle: {
      uz: 'So\'rovni qayta ishlashda xatolik yuz berdi',
      ru: 'Ошибка при обработке запроса',
      en: 'Unable to process AI request',
    },
    errorDesc: {
      uz: 'Tarmoq ulanishini tekshiring yoki savolni qayta yuborib ko\'ring.',
      ru: 'Проверьте сетевое соединение или повторите отправку сообщения.',
      en: 'Please check your connection or retry your question.',
    },
  },

  // Settings Page
  settings: {
    pageTitle: {
      uz: 'TechNova Sozlamalari',
      ru: 'Настройки TechNova',
      en: 'TechNova Settings',
    },
    pageSubtitle: {
      uz: 'Til, ko\'rinish mavzusi va valyuta sozlamalarini o\'zingizga moslang. Barcha o\'zgarishlar darhol va butun sayt bo\'ylab kuchga kiradi.',
      ru: 'Настройте язык интерфейса, тему оформления и валюту цен. Все изменения применяются мгновенно и сохраняются в браузере.',
      en: 'Personalize language, visual theme, and preferred currency. All changes take effect immediately across the entire platform.',
    },
    languageSectionTitle: {
      uz: 'Interfeys tili',
      ru: 'Язык интерфейса',
      en: 'Interface Language',
    },
    languageSectionDesc: {
      uz: 'Barcha menyular, yangiliklar, qurilma tavsiflari va TechI intellekti tanlangan tilda ishlaydi.',
      ru: 'Все элементы навигации, карточки новостей, характеристики гаджетов и ответы TechI адаптируются под выбранный язык.',
      en: 'All navigation elements, news articles, device descriptions, and TechI interactions adapt to your choice.',
    },
    languages: {
      uz: {
        name: 'O‘zbekcha',
        native: 'O‘zbek tili (Lotin)',
        flag: '🇺🇿',
      },
      ru: {
        name: 'Русский',
        native: 'Русский язык',
        flag: '🇷🇺',
      },
      en: {
        name: 'English',
        native: 'English (US/UK)',
        flag: '🌐',
      },
    },
    themeSectionTitle: {
      uz: 'Ko\'rinish mavzusi',
      ru: 'Тема оформления',
      en: 'Appearance & Theme',
    },
    themeSectionDesc: {
      uz: 'Yorug\'lik darajasiga qarab qulay o\'qish uchun oq yoki to\'q ko\'k kosmik mavzuni tanlang.',
      ru: 'Выберите светлую тему для высокой четкости днем или глубокую темную тему для комфорта в темноте.',
      en: 'Choose crisp light styling or deep aerospace navy styling tailored for low-light environments.',
    },
    currencySectionTitle: {
      uz: 'Standart narx valyutasi',
      ru: 'Валюта отображения цен',
      en: 'Default Display Currency',
    },
    currencySectionDesc: {
      uz: '«Kun qurilmasi» bo\'limida rasmiy tasdiqlangan narxni qaysi valyutada ko\'rishni xohlaysiz.',
      ru: 'В какой валюте отображать проверенные розничные цены в карточке «Устройство дня».',
      en: 'Choose your default currency for verified device prices on the Daily Device showcase.',
    },
    resetSectionTitle: {
      uz: 'Barcha sozlamalarni tiklash',
      ru: 'Сброс всех настроек',
      en: 'Reset to Factory Defaults',
    },
    resetSectionDesc: {
      uz: 'Barcha saqlangan til, mavzu va kesh ma\'lumotlarini dastlabki holatga qaytaradi.',
      ru: 'Сброс сохраненных настроек языка, темы и валюты к исходным значениям по умолчанию.',
      en: 'Clear local preferences and restore default configuration (English, Dark Theme, USD).',
    },
    resetBtn: {
      uz: 'Dastlabki holatga qaytarish',
      ru: 'Сбросить к исходным',
      en: 'Reset All Settings',
    },
    resetModalTitle: {
      uz: 'Haqiqatan ham sozlamalarni tiklamoqchimisiz?',
      ru: 'Вы уверены, что хотите сбросить настройки?',
      en: 'Are you sure you want to reset all settings?',
    },
    resetModalDesc: {
      uz: 'Bu amal tanlangan til, mavzu va valyutani dastlabki holatga qaytaradi hamda birinchi tashrif xush kelibsiz oynasini qaytadan ko\'rsatadi.',
      ru: 'Это действие вернет язык, тему и валюту к настройкам по умолчанию и снова покажет приветственное окно выбора.',
      en: 'This will restore defaults and re-open the initial setup wizard on your next visit.',
    },
    cancelBtn: {
      uz: 'Bekor qilish',
      ru: 'Отмена',
      en: 'Cancel',
    },
    confirmResetBtn: {
      uz: 'Ha, tiklansin',
      ru: 'Да, сбросить',
      en: 'Yes, Reset',
    },
    systemInfoTitle: {
      uz: 'Tizim ma\'lumotlari va integratsiya holati',
      ru: 'Информация о системе и интеграциях',
      en: 'System Details & Integration Status',
    },
    versionLabel: {
      uz: 'TechNova talqini:',
      ru: 'Версия TechNova:',
      en: 'TechNova Version:',
    },
    geminiStatusLabel: {
      uz: 'Gemini API integratsiyasi:',
      ru: 'Интеграция Gemini API:',
      en: 'Gemini API Integration:',
    },
    statusConnected: {
      uz: 'Ulangan (Server tomonida faol)',
      ru: 'Подключено (Работает на сервере)',
      en: 'Connected (Active on Server)',
    },
    statusFallback: {
      uz: 'Faol (Ichki bilimlar bazasi)',
      ru: 'Активно (Локальная база знаний)',
      en: 'Active (Curated Knowledge Bank)',
    },
    exchangeStatusLabel: {
      uz: 'Valyuta kursi bazasi:',
      ru: 'База курсов валют:',
      en: 'Exchange Rate Baseline:',
    },
  },

  // Footer
  footer: {
    quickLinksTitle: {
      uz: 'Tezkor havolalar',
      ru: 'Быстрые ссылки',
      en: 'Quick Navigation',
    },
    topicsTitle: {
      uz: 'Asosiy yo\'nalishlar',
      ru: 'Тематические направления',
      en: 'Technology Topics',
    },
    integrityNotice: {
      uz: 'TechNova ilmiy aniqlik, xolislik va narxlarning shaffofligini birinchi o\'ringa qo\'yadi. Uydirma narxlar va soxta yangiliklar qat\'iyan taqiqlangan.',
      ru: 'TechNova придерживается принципов журналистской честности и проверенных технических данных. Мы не публикуем вымышленные цены и ложные заголовки.',
      en: 'TechNova upholds strict technical verification, source attribution, and pricing integrity. Synthetic claims and speculative prices are strictly excluded.',
    },
    rightsReserved: {
      uz: 'Barcha huquqlar himoyalangan.',
      ru: 'Все права защищены.',
      en: 'All rights reserved.',
    },
  },

  // Common UI words
  common: {
    loading: {
      uz: 'Yuklanmoqda...',
      ru: 'Загрузка...',
      en: 'Loading...',
    },
    verified: {
      uz: 'Tasdiqlangan',
      ru: 'Проверено',
      en: 'Verified',
    },
    readMore: {
      uz: 'Batafsil o\'qish',
      ru: 'Подробнее',
      en: 'Read More',
    },
    close: {
      uz: 'Yopish',
      ru: 'Закрыть',
      en: 'Close',
    },
    save: {
      uz: 'Saqlash',
      ru: 'Сохранить',
      en: 'Save',
    },
    active: {
      uz: 'Faol',
      ru: 'Активно',
      en: 'Active',
    },
  },
};
