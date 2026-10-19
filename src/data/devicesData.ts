import { DailyDevice } from '../types';

export const verifiedDevices: DailyDevice[] = [
  {
    id: 'framework-laptop-13-amd',
    name: 'Framework Laptop 13',
    model: 'DIY Edition (AMD Ryzen™ 7 7840U)',
    category: {
      en: 'Modular Ultrabook',
      uz: 'Modulli ultrabuk',
      ru: 'Модульный ультрабук',
    },
    description: {
      en: 'A repairable and modular 13.5-inch laptop featuring high-efficiency AMD Zen 4 architecture, hot-swappable expansion cards (USB-C, HDMI, DisplayPort, MicroSD), a 2.8K 120Hz display, and 100% user-replaceable components.',
      uz: 'To\'liq ta\'mirlanadigan va modulli 13.5 dyuymli noutbuk. AMD Zen 4 arxitekturasi, tez almashtiriladigan port modullari (USB-C, HDMI, MicroSD), 2.8K 120Hz displey va foydalanuvchi tomonidan mustaqil yangilanadigan qismlarga ega.',
      ru: 'Полностью модульный и ремонтопригодный 13.5-дюймовый ноутбук на базе энергоэффективных чипов AMD Zen 4 с заменяемыми модулями разъемов, экраном 2.8K 120 Гц и доступными запчастями.',
    },
    verifiedListedPrice: 1049,
    originalCurrency: 'USD',
    retailerName: 'Framework Computer Inc. (Official Store)',
    listingUrl: 'https://frame.work/products/laptop-13-gen-amd',
    priceCheckedAt: '2026-10-18T10:00:00Z',
    isPriceVerified: true,
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80',
    specs: [
      {
        label: { en: 'Processor', uz: 'Protsessor', ru: 'Процессор' },
        value: 'AMD Ryzen™ 7 7840U (8 cores, 16 threads, up to 5.1GHz)',
      },
      {
        label: { en: 'Display', uz: 'Displey', ru: 'Дисплей' },
        value: '13.5" 2880x1920 (3:2), 120Hz, 500 nits, Anti-glare matte',
      },
      {
        label: { en: 'Memory & Storage', uz: 'Xotira va disk', ru: 'Память и накопитель' },
        value: 'Up to 96GB DDR5-5600, M.2 2280 PCIe 4.0 NVMe',
      },
      {
        label: { en: 'Repairability Score', uz: 'Ta\'mirlanish darajasi', ru: 'Индекс ремонтопригодности' },
        value: '10/10 (iFixit Certified Perfect Score)',
      },
    ],
    highlights: [
      {
        en: 'Modular expansion ports can be swapped in 2 seconds without tools.',
        uz: 'Portlarni hech qanday asbobsiz 2 soniyada almashtirish mumkin.',
        ru: 'Модульные разъемы меняются за секунды без отвертки.',
      },
      {
        en: 'Mainboard upgradeable to future processor generations indefinitely.',
        uz: 'Kelajakda ona platani yangi protsessor avlodiga osongina yangilash mumkin.',
        ru: 'Материнскую плату можно заменять на новые поколения чипов в том же корпусе.',
      },
      {
        en: 'Physical hardware privacy switches for camera and microphone.',
        uz: 'Kamera va mikrofon uchun jismoniy o\'chirgichlar mavjud.',
        ru: 'Аппаратные физические переключатели камеры и микрофона.',
      },
    ],
  },
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5',
    model: 'Wireless Noise Canceling Headphones (Silver / Black)',
    category: {
      en: 'Acoustic Hardware',
      uz: 'Akustik qurilma',
      ru: 'Аудиотехника',
    },
    description: {
      en: 'Industry-leading noise canceling headphones with dual Integrated Processor V1 and QN1, 8 beamforming microphones, carbon-fiber composite 30mm drivers, and 30-hour verified battery life.',
      uz: 'Ikki tomonlama V1 va QN1 protsessorlari, 8 ta mikrofon, uglerod tolali 30 mm drayverlar va 30 soatlik quvvatga ega shovqinni so\'ndiruvchi simsiz quloqchinlar.',
      ru: 'Флагманские беспроводные наушники с активным шумоподавлением на базе чипов V1 и QN1, 8 микрофонами, мембранами из углеволокна и 30 часами автономной работы.',
    },
    verifiedListedPrice: 399,
    originalCurrency: 'USD',
    retailerName: 'Sony Electronics Official Store',
    listingUrl: 'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm5-b',
    priceCheckedAt: '2026-10-18T12:30:00Z',
    isPriceVerified: true,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    specs: [
      {
        label: { en: 'Acoustic Driver', uz: 'Akustik drayver', ru: 'Динамик' },
        value: '30mm Carbon Fiber Composite Dome',
      },
      {
        label: { en: 'Noise Canceling', uz: 'Shovqin so\'ndirish', ru: 'Шумоподавление' },
        value: 'Dual Processors (V1 + HD Noise Canceling QN1) + 8 Mics',
      },
      {
        label: { en: 'Battery Life', uz: 'Batareya muddati', ru: 'Автономность' },
        value: '30 Hours (NC On), 3 min quick-charge gives 3 hours',
      },
      {
        label: { en: 'Audio Codecs', uz: 'Audio kodeklar', ru: 'Аудиокодеки' },
        value: 'LDAC (Hi-Res Audio Wireless), AAC, SBC',
      },
    ],
    highlights: [
      {
        en: 'Auto NC Optimizer adjusts noise reduction in real-time based on atmospheric pressure.',
        uz: 'Atmosfera bosimi va muhitga qarab shovqin so\'ndirishni avtomatik moslaydi.',
        ru: 'Автоматическая оптимизация шумоподавления под атмосферное давление.',
      },
      {
        en: 'Multipoint Bluetooth connection to two devices simultaneously.',
        uz: 'Bir vaqtning o\'zida ikkita qurilmaga Bluetooth orqali ulanish imkoniyati.',
        ru: 'Одновременное беспроводное подключение к двум устройствам.',
      },
    ],
  },
  {
    id: 'raspberry-pi-5-8gb',
    name: 'Raspberry Pi 5',
    model: 'Single Board Computer (8GB LPDDR4X)',
    category: {
      en: 'Embedded Computing',
      uz: 'Bir platalik kompyuter',
      ru: 'Одноплатный компьютер',
    },
    description: {
      en: 'Next-generation single-board computer built around the 64-bit quad-core Arm Cortex-A76 processor with in-house RP1 silicon controller, PCIe 2.0 interface, dual 4Kp60 HDMI outputs, and cryptographic acceleration.',
      uz: '64-bitli 4 yadroli Arm Cortex-A76 protsessori, shaxsiy RP1 kontrolleri, PCIe 2.0 shinasi va ikkita 4Kp60 HDMI portiga ega yangi avlod mikrokopmyuteri.',
      ru: 'Одноплатный компьютер нового поколения на 64-битном 4-ядерном процессоре Arm Cortex-A76 с фирменным южным мостом RP1, шиной PCIe 2.0 и двумя выходами 4K 60 Гц.',
    },
    verifiedListedPrice: 80,
    originalCurrency: 'USD',
    retailerName: 'Raspberry Pi Foundation Authorized Distributors',
    listingUrl: 'https://www.raspberrypi.com/products/raspberry-pi-5/',
    priceCheckedAt: '2026-10-17T15:00:00Z',
    isPriceVerified: true,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    specs: [
      {
        label: { en: 'SoC & Architecture', uz: 'Kristall & Arxitektura', ru: 'Чипсет и архитектура' },
        value: 'Broadcom BCM2712 2.4GHz quad-core 64-bit Arm Cortex-A76',
      },
      {
        label: { en: 'GPU', uz: 'Grafika', ru: 'Графика' },
        value: 'VideoCore VII @ 800MHz, OpenGL ES 3.1, Vulkan 1.2',
      },
      {
        label: { en: 'Expansion Bus', uz: 'Kengaytirish shinasi', ru: 'Шина расширения' },
        value: 'PCIe 2.0 x1 interface for high-speed M.2 NVMe SSDs',
      },
      {
        label: { en: 'Display Output', uz: 'Ekran chiqishlari', ru: 'Видеовыходы' },
        value: '2 × micro-HDMI ports (up to 4Kp60 with HDR support)',
      },
    ],
    highlights: [
      {
        en: '2.5x to 3x performance leap over Raspberry Pi 4.',
        uz: 'Raspberry Pi 4 ga nisbatan 2.5-3 barobar yuqori unumdorlik.',
        ru: 'Прирост производительности в 2.5–3 раза по сравнению с Pi 4.',
      },
      {
        en: 'Integrated on/off power button and real-time clock (RTC) battery connector.',
        uz: 'Platada yoqish/o\'chirish tugmasi va RTC batareyasi ulagichi mavjud.',
        ru: 'Встроенная физическая кнопка питания и разъем для батарейки часов реального времени.',
      },
    ],
  },
  {
    id: 'prototype-quantum-evaluation-kit',
    name: 'Q-Spin Educational Cryo-Probe',
    model: 'DevKit v0.9 (Pre-production prototype)',
    category: {
      en: 'Quantum Hardware',
      uz: 'Kvant laboratoriya qurilmasi',
      ru: 'Квантовое оборудование',
    },
    description: {
      en: 'An experimental cryo-electronic sensing prototype designed for university physics laboratories. Currently in institutional testing phase without commercial retail availability.',
      uz: 'Universitet fizika laboratoriyalari uchun mo\'ljallangan eksperimental krio-elektron zond prototipi. Hozirda sinov bosqichida bo\'lib, ochiq savdoda mavjud emas.',
      ru: 'Экспериментальный прототип криоэлектронного датчика для университетских физических лабораторий. Находится на стадии опытной эксплуатации без розничных поставок.',
    },
    verifiedListedPrice: null, // Price strictly unavailable
    originalCurrency: 'USD',
    retailerName: 'Quantum Sensors Consortium (Research Prototype)',
    listingUrl: 'https://spectrum.ieee.org/',
    priceCheckedAt: null,
    isPriceVerified: false,
    unverifiedReason: {
      en: 'Retail pricing unavailable: This hardware is currently restricted to academic research grants. TechNova adheres to strict verification rules and does not display speculative price estimates.',
      uz: 'Rasmiy narx mavjud emas: Ushbu uskunalar faqat ilmiy grantlar orqali yetkaziladi. TechNova qoidalariga ko\'ra taxminiy yoki uydirma narxlar ko\'rsatilmaydi.',
      ru: 'Цена недоступна: Оборудование распространяется исключительно по академическим грантам. TechNova никогда не публикует вымышленные или приблизительные оценки.',
    },
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    specs: [
      {
        label: { en: 'Operating Temperature', uz: 'Ish harorati', ru: 'Рабочая температура' },
        value: '4.2 Kelvin (Liquid Helium compatible)',
      },
      {
        label: { en: 'Qubit Architecture', uz: 'Kubit arxitekturasi', ru: 'Архитектура кубитов' },
        value: '2-qubit Silicon Spin Resonance sensor',
      },
      {
        label: { en: 'Status', uz: 'Holati', ru: 'Статус' },
        value: 'Academic Prototype (Price Unverified)',
      },
    ],
    highlights: [
      {
        en: 'Demonstrates macroscopic quantum coherence in compact lab setups.',
        uz: 'Ixcham laboratoriya sharoitida kvant kogerentligini namoyish etadi.',
        ru: 'Демонстрирует макроскопическую квантовую когерентность в компактной лаборатории.',
      },
    ],
  },
];
