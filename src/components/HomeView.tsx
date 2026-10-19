import React from 'react';
import { useApp } from '../context/AppContext';
import { newsArticles } from '../data/newsData';
import { DailyDeviceSection } from './DailyDeviceSection';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Newspaper, 
  Bot, 
  Settings as SettingsIcon, 
  Layers, 
  ExternalLink, 
  ChevronRight,
  TrendingUp,
  Cpu,
  ShieldCheck
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { language, setActiveTab, t } = useApp();

  const featuredStory = newsArticles.find((n) => n.isFeatured) || newsArticles[0];
  const recentNews = newsArticles.filter((n) => n.id !== featuredStory.id).slice(0, 4);

  const quickLinks = [
    {
      tab: 'home' as const,
      title: t.nav.home[language],
      desc: language === 'uz' ? 'Asosiy yangiliklar va bosh sahifa' : language === 'ru' ? 'Главная сводка и ключевые события' : 'Lead overview & front page',
      icon: <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/30',
    },
    {
      tab: 'news' as const,
      title: t.nav.news[language],
      desc: language === 'uz' ? 'Joriy haftaning saralangan ilmiy xabarlari' : language === 'ru' ? 'Отобранные статьи текущей недели' : 'Curated discoveries from current week',
      icon: <Newspaper className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      color: 'from-sky-500/10 to-indigo-500/10 border-sky-500/30',
    },
    {
      tab: 'techi' as const,
      title: t.nav.techi[language],
      desc: language === 'uz' ? 'Texnologik intellekt bilan suhbat qiling' : language === 'ru' ? 'Интеллектуальный диалог о технологиях' : 'Ask questions to Technologic Intelligence',
      icon: <Bot className="w-5 h-5 text-cyan-500 dark:text-cyan-300" />,
      color: 'from-blue-500/10 to-cyan-500/10 border-cyan-400/30',
      badge: 'AI Assistant',
    },
    {
      tab: 'settings' as const,
      title: t.nav.settings[language],
      desc: language === 'uz' ? 'Til, mavzu va valyutani sozlang' : language === 'ru' ? 'Настройки языка, темы и валюты' : 'Configure language, theme & currency',
      icon: <SettingsIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />,
      color: 'from-slate-500/10 to-slate-600/10 border-slate-500/30',
    },
  ];

  return (
    <div className="page-transition bg-home-style min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        
        {/* Hero Section: Clear purpose statement */}
        <section className="relative text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100/90 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>{t.home.heroBadge[language]}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            {t.home.heroHeading[language]}
          </h1>

          <p className="mt-5 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.home.heroDescription[language]}
          </p>

          {/* Quick jump to Daily Device and TechI */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => setActiveTab('news')}
              className="btn-tech inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25"
            >
              <Newspaper className="w-4 h-4" />
              <span>{t.home.viewAllNewsBtn[language]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('techi')}
              className="btn-tech inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-white dark:bg-slate-900/90 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-800 hover:border-cyan-500 shadow-sm"
            >
              <Bot className="w-4 h-4 text-cyan-500" />
              <span>{t.nav.techi[language]}</span>
            </button>

            <a
              href="#daily-device"
              className="btn-tech inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl font-semibold text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <span>{t.home.dailyDeviceAnchor[language]}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Four Main Navigation Quick Access Cards */}
        <section className="mb-14 sm:mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t.home.quickNavTitle[language]}
            </h2>
            <span className="text-xs text-slate-400">4 Core Destinations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((item) => (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`btn-tech relative text-left p-5 rounded-2xl bg-gradient-to-br ${item.color} bg-white dark:bg-[#0B132B] border shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
                      {item.icon}
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500 text-white shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  <span>Open destination</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Featured Story Showcase */}
        <section className="mb-14 sm:mb-16">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B132B] shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Image side */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] overflow-hidden">
                <img
                  src={featuredStory.imageUrl}
                  alt={featuredStory.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500 text-white shadow-sm uppercase tracking-wider">
                    {t.home.featuredStoryBadge[language]}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {featuredStory.publisher}
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {new Date(featuredStory.publishedAt).toLocaleDateString(
                        language === 'uz' ? 'uz-UZ' : language === 'ru' ? 'ru-RU' : 'en-US',
                        { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }
                      )}
                    </span>
                    <span>•</span>
                    <span>{featuredStory.readTimeMinutes} {t.news.minRead[language]}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                    {featuredStory.title[language]}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredStory.summary[language]}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                    <span className="font-bold text-cyan-600 dark:text-cyan-400">
                      {t.news.keyTakeawayLabel[language]}
                    </span>{' '}
                    <span className="text-slate-700 dark:text-slate-300">
                      {featuredStory.keyTakeaway[language]}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                  <a
                    href={featuredStory.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tech inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 transition-all"
                  >
                    <span>{t.news.originalArticle[language]}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setActiveTab('techi')}
                    className="btn-tech inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>{t.home.askTechiPrompt[language]}</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Recent Technology Headlines Grid */}
        <section className="mb-14 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                <TrendingUp className="w-4 h-4" />
                <span>{t.home.recentNewsTitle[language]}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {t.home.recentNewsDesc[language]}
              </h2>
            </div>

            <button
              onClick={() => setActiveTab('news')}
              className="btn-tech inline-flex items-center gap-1.5 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline self-start sm:self-auto"
            >
              <span>{t.home.viewAllNewsBtn[language]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentNews.map((item) => (
              <article
                key={item.id}
                className="btn-tech flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B132B] overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={item.imageUrl}
                      alt={item.title[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-slate-950/80 backdrop-blur-md text-white border border-white/20">
                        {t.news.categories[item.category]?.[language] || item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                      <span className="font-semibold text-cyan-600 dark:text-cyan-400">{item.publisher}</span>
                      <span>•</span>
                      <span>
                        {new Date(item.publishedAt).toLocaleDateString(
                          language === 'uz' ? 'uz-UZ' : language === 'ru' ? 'ru-RU' : 'en-US',
                          { month: 'short', day: 'numeric' }
                        )}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {item.title[language]}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {item.summary[language]}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2 flex items-center justify-between text-xs">
                  <a
                    href={item.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>{t.news.originalArticle[language]}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[11px] text-slate-400">
                    {item.readTimeMinutes} {t.news.minRead[language]}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Daily Device Section Anchor */}
        <DailyDeviceSection />

      </div>
    </div>
  );
};
