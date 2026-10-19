import { GoogleGenAI } from '@google/genai';

const FALLBACK_KNOWLEDGE: Record<string, { en: string; uz: string; ru: string }> = {
  'oled_vs_eink': {
    en: `### OLED vs E-Ink: Key Differences

**1. Display Technology & Light Emission:**
- **OLED (Organic Light Emitting Diode):** Each pixel emits its own vibrant RGB light. Pixels can turn off entirely to achieve infinite contrast and deep true blacks.
- **E-Ink (Electronic Paper Display):** Reflective display that uses microscopic microcapsules containing charged black and white pigments suspended in clear fluid. It emits no light of its own.

**2. Eye Comfort & Glare:**
- **OLED:** Emits blue light and direct light radiation; can cause eye strain during prolonged reading.
- **E-Ink:** Reads just like genuine printed paper under direct sunlight with zero glare, causing virtually no eye fatigue.

**3. Refresh Rate & Motion:**
- **OLED:** Super fast refresh rates (60Hz to 240Hz+), perfect for videos and gaming.
- **E-Ink:** Very slow refresh rates (1Hz to 15Hz); ideal for static text and books.

**4. Power Consumption:**
- **OLED:** Consumes significant continuous battery power.
- **E-Ink:** Consumes power *only* when changing the image on screen! A static page consumes zero power.`,
    uz: `### OLED va E-Ink texnologiyalari o'rtasidagi farq

**1. Displey texnologiyasi va yorug'lik:**
- **OLED:** Har bir piksel o'zidan yorqin rangli yorug'lik chiqaradi. Qora rangda piksellar butunlay o'chadi.
- **E-Ink (Elektron qog'oz):** Reflektiv ekran bo'lib, o'zidan yorug'lik chiqarmaydi, xuddi qog'oz kabi tashqi yorug'likni aks ettiradi.

**2. Ko'z salomatligi va quyosh ostida ko'rinish:**
- **OLED:** Ko'k nur va yorqinlik chiqaradi, uzoq vaqt o'qiganda ko'zni toliqtirishi mumkin.
- **E-Ink:** Haqiqiy kitob qog'ozi kabi o'qiladi, to'g'ridan-to'g'ri quyosh nuri ostida hech qanday blik bermaydi.

**3. Yangilanish tezligi:**
- **OLED:** Juda yuqori (60Hz dan 240Hz gacha), videolar va o'yinlar uchun ideal.
- **E-Ink:** Sekin yangilanish (1Hz - 15Hz), kitob o'qish uchun mo'ljallangan.

**4. Energiya sarfi:**
- **OLED:** Uzluksiz quvvat sarflaydi.
- **E-Ink:** Faqat sahifa o'zgargandagina energiya sarflaydi! Statik holatda 0 vatt quvvat talab qiladi.`,
    ru: `### OLED и E-Ink: Ключевые различия

**1. Принцип работы и подсветка:**
- **OLED:** Каждый пиксель сам излучает свет. Пиксели отключаются для отображения истинного черного цвета.
- **E-Ink:** Рефлективный дисплей, отражающий внешний свет подобно обычной бумаге.

**2. Комфорт для глаз:**
- **OLED:** Излучает свет в глаза, может утомлять зрение при многочасовом чтении.
- **E-Ink:** Читается как настоящая печатная книга даже под прямым солнцем, не бликует.

**3. Частота обновления:**
- **OLED:** Высокая (60-240 Гц), идеальна для видео и анимации.
- **E-Ink:** Низкая (1-15 Гц), для чтения статичного текста.

**4. Энергопотребление:**
- **OLED:** Расходует заряд постоянно во включенном состоянии.
- **E-Ink:** Потребляет энергию только в момент перелистывания страницы.`
  },
  'processors': {
    en: `### How Modern Processors (CPUs) Work

**1. Microscopic Transistors:**
Modern CPUs pack 10 to 100+ billion transistors on a silicon die fabricated at 3nm nodes.

**2. The Four Stages of the Instruction Cycle:**
- **Fetch:** Instructions are pulled from RAM/cache.
- **Decode:** Complex commands are broken into micro-operations.
- **Execute:** Arithmetic Logic Units (ALUs) perform computations.
- **Writeback:** Results are written back to registers and cache.

**3. Modern Architecture:**
- **Multi-core & Heterogeneous:** Performance cores handle heavy workloads while Efficiency cores handle background tasks.
- **Branch Prediction:** AI-assisted predictors guess execution branches with >95% accuracy.
- **NPUs (Neural Processing Units):** Matrix-multiplication accelerators designed specifically for machine learning models.`,
    uz: `### Zamonaviy protsessorlar qanday ishlaydi?

**1. Nanotranzistorlar:**
Zamonaviy chiplar (Apple M, AMD Ryzen, Intel Core Ultra) 3-5 nanometrli o'nlab milliard tranzistorlarni jamlaydi.

**2. Buyruqlar sikli:**
- **Fetch:** Buyruq xotiradan chaqirib olinadi.
- **Decode:** Buyruq mayda mikrooperatsiyalarga ajratiladi.
- **Execute:** ALU va FPU bloklarida hisob-kitoblar bajariladi.
- **Writeback:** Natija registrga yoziladi.

**3. Zamonaviy yutuqlar:**
- **Geterogen yadrolar:** Kuchli (P) va tejamkor (E) yadrolar uyg'unligi.
- **NPU bloklari:** Neyron tarmoqlari hisob-kitoblarini apparat darajasida tezlashtirish.`,
    ru: `### Как работают современные процессоры

**1. Нанотранзисторы:**
Современные чипы содержат десятки миллиардов транзисторов, произведенных по нормам 3–5 нм.

**2. Цикл инструкций:**
- **Fetch (Выборка):** Загрузка инструкции из кэша/памяти.
- **Decode (Декодирование):** Расшифровка команды на микрооперации.
- **Execute (Исполнение):** Вычисления в блоках ALU и FPU.
- **Writeback (Запись):** Сохранение результата в регистры.

**3. Инновации:**
- **Гетерогенные ядра:** P-ядра для тяжелых задач и E-ядра для фона.
- **NPU:** Аппаратные нейропроцессоры для работы локальных моделей ИИ.`
  }
};

function findFallbackAnswer(query: string, lang: 'en' | 'uz' | 'ru'): string | null {
  const q = query.toLowerCase();
  let key: string | null = null;
  if (q.includes('oled') || q.includes('e-ink') || q.includes('eink') || q.includes('ekran') || q.includes('display')) {
    key = 'oled_vs_eink';
  } else if (q.includes('processor') || q.includes('protsessor') || q.includes('cpu') || q.includes('chip')) {
    key = 'processors';
  }

  if (key && FALLBACK_KNOWLEDGE[key]) {
    return FALLBACK_KNOWLEDGE[key][lang] || FALLBACK_KNOWLEDGE[key]['en'];
  }
  return null;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history = [], language = 'en' } = req.body || {};

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const lang = (language === 'uz' || language === 'ru') ? language : 'en';

  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const systemInstruction = `You are TechI (Technologic Intelligence AI), the expert technology educator and guide for TechNova.
Explain technology, hardware, AI, computing, and robotics clearly and accurately.
Respond strictly in ${lang === 'uz' ? "Uzbek (O'zbek tili)" : lang === 'ru' ? "Russian (Русский язык)" : "English"}.
Distinguish verified facts from speculation. Never invent prices or fake live data. Use clean markdown formatting.`;

      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];
      for (const item of history.slice(-6)) {
        if (item.text && (item.role === 'user' || item.role === 'model')) {
          contents.push({ role: item.role, parts: [{ text: item.text }] });
        }
      }
      contents.push({ role: 'user', parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: { systemInstruction, temperature: 0.7 }
      });

      return res.status(200).json({
        reply: response.text || '',
        mode: 'live_gemini',
        model: 'gemini-3.8-flash'
      });
    } catch (err: any) {
      console.warn('Gemini API call error in serverless handler:', err);
    }
  }

  const fallback = findFallbackAnswer(message, lang);
  if (fallback) {
    return res.status(200).json({
      reply: fallback,
      mode: 'knowledge_base',
      isOfflineFallback: true
    });
  }

  const defaultReplies: Record<string, string> = {
    uz: `Salom! Men **TechI** — TechNova texnologik yordamchisiman. Sizning so'rovingiz: "${message.slice(0, 80)}". Zamonaviy apparat vositalari, protsessorlar, OLED displeylari yoki sun'iy intellekt bo'yicha savollaringizni bering!`,
    ru: `Здравствуйте! Я **TechI** — технологический ассистент TechNova. Ваш запрос: "${message.slice(0, 80)}". Спрашивайте о процессорах, экранах OLED/E-Ink, робототехнике или ИИ-моделях!`,
    en: `Hello! I am **TechI** — TechNova's technology guide. Regarding your question: "${message.slice(0, 80)}". Feel free to ask about processors, display physics, robotics, or frontier AI models!`
  };

  return res.status(200).json({
    reply: defaultReplies[lang] || defaultReplies.en,
    mode: 'knowledge_base_general',
    isOfflineFallback: true
  });
}
