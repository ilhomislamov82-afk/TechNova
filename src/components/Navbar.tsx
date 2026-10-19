import React from 'react';
import { useApp } from '../context/AppContext';
import { NavigationTab, Language } from '../types';
import { 
  Cpu, 
  Home, 
  Newspaper, 
  Bot, 
  Settings as SettingsIcon, 
  Sun, 
  Moon, 
  Globe, 
  Sparkles 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    theme, 
    setTheme, 
    activeTab, 
    setActiveTab, 
    t 
  } = useApp();

  const navItems: Array<{ id: NavigationTab; label: string; icon: React.ReactNode }> = [
    { id: 'home', label: t.nav.home[language], icon: <Home className="w-4 h-4" /> },
    { id: 'news', label: t.nav.news[language], icon: <Newspaper className="w-4 h-4" /> },
    { id: 'techi', label: t.nav.techi[language], icon: <Bot className="w-4 h-4" /> },
    { id: 'settings', label: t.nav.settings[language], icon: <SettingsIcon className="w-4 h-4" /> },
  ];

  const handleLangToggle = () => {
    const nextLang: Record<Language, Language> = {
      uz: 'ru',
      ru: 'en',
      en: 'uz',
    };
    setLanguage(nextLang[language]);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-[#070C18]/90 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Logo & Tagline */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 via-sky-700 to-cyan-600 dark:from-white dark:via-sky-200 dark:to-cyan-400 bg-clip-text text-transparent">
                  TechNova
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
                  <Sparkles className="w-2.5 h-2.5" /> Portal
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden md:block line-clamp-1 max-w-[280px]">
                {t.brand.tagline[language]}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Bar (Visible horizontal) */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`btn-tech flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-white dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 shadow-sm border border-slate-200/60 dark:border-cyan-500/40'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className={isActive ? 'text-cyan-600 dark:text-cyan-400' : 'opacity-70'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {item.id === 'techi' && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Quick Language, Theme toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Quick Switcher */}
            <button
              onClick={handleLangToggle}
              title={`Switch language: currently ${language.toUpperCase()}`}
              className="btn-tech flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span className="font-semibold uppercase">{language}</span>
              <span className="text-[11px] text-slate-400 hidden lg:inline">
                ({language === 'uz' ? 'O‘zbekcha' : language === 'ru' ? 'Русский' : 'English'})
              </span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle theme"
              className="btn-tech p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar: Compact, touch-friendly wrapping tabs. NO hamburger menu per specification */}
        <div className="md:hidden py-2 border-t border-slate-200/60 dark:border-slate-800/60 overflow-x-auto no-scrollbar">
          <nav className="flex items-center justify-between gap-1 min-w-full">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`btn-tech flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl text-xs font-semibold text-center transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50'
                  }`}
                >
                  <span className={`mb-1 ${isActive ? 'text-cyan-600 dark:text-cyan-400' : 'opacity-70'}`}>
                    {item.icon}
                  </span>
                  <span className="line-clamp-1 text-[11px] leading-tight">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

      </div>
    </header>
  );
};
