import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Language, Theme } from '../types';
import { Cpu, Check, Sun, Moon, ArrowRight, Sparkles } from 'lucide-react';

export const WelcomeModal: React.FC = () => {
  const { showWelcomeModal, completeOnboarding, t } = useApp();
  const [selectedLang, setSelectedLang] = useState<Language>('uz');
  const [selectedTheme, setSelectedTheme] = useState<Theme>('dark');

  if (!showWelcomeModal) return null;

  const languages: Array<{ code: Language; name: string; native: string; flag: string; badge: string }> = [
    { code: 'uz', name: 'O‘zbekcha', native: 'O‘zbek tili', flag: '🇺🇿', badge: 'Lotin' },
    { code: 'ru', name: 'Русский', native: 'Русский язык', flag: '🇷🇺', badge: 'Кириллица' },
    { code: 'en', name: 'English', native: 'English', flag: '🌐', badge: 'International' },
  ];

  const handleContinue = () => {
    completeOnboarding(selectedLang, selectedTheme);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 bg-white dark:bg-[#0B132B] rounded-3xl border border-slate-200 dark:border-cyan-500/30 shadow-2xl shadow-cyan-500/10 p-6 sm:p-8 page-transition">
        
        {/* Glow accent */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header with TechNova emblem */}
        <div className="relative text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-600 to-blue-700 text-white shadow-lg shadow-cyan-500/30 mb-3">
            <Cpu className="w-8 h-8 animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.welcome.title[selectedLang]}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            {t.welcome.subtitle[selectedLang]}
          </p>
        </div>

        {/* Step 1: Language Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              {t.welcome.step1Title[selectedLang]}
            </label>
            <span className="text-xs text-slate-400">Step 1 of 2</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {languages.map((item) => {
              const isSelected = selectedLang === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setSelectedLang(item.code)}
                  className={`btn-tech relative flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/20 text-slate-900 dark:text-white ring-2 ring-cyan-500/40 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  )}
                  <span className="text-2xl mb-1.5">{item.flag}</span>
                  <span className="font-bold text-sm">{item.name}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.native}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Theme Selection */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              {t.welcome.step2Title[selectedLang]}
            </label>
            <span className="text-xs text-slate-400">Step 2 of 2</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Light Theme */}
            <button
              type="button"
              onClick={() => setSelectedTheme('light')}
              className={`btn-tech relative flex items-start gap-3.5 p-4 rounded-2xl border text-left transition-all ${
                selectedTheme === 'light'
                  ? 'border-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/20 text-slate-900 dark:text-white ring-2 ring-cyan-500/40'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 border border-amber-200">
                <Sun className="w-5 h-5" />
              </div>
              <div className="flex-1 pr-4">
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {t.welcome.themeLight[selectedLang]}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.welcome.themeLightDesc[selectedLang]}
                </p>
              </div>
              {selectedTheme === 'light' && (
                <div className="w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              )}
            </button>

            {/* Dark Theme */}
            <button
              type="button"
              onClick={() => setSelectedTheme('dark')}
              className={`btn-tech relative flex items-start gap-3.5 p-4 rounded-2xl border text-left transition-all ${
                selectedTheme === 'dark'
                  ? 'border-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/20 text-slate-900 dark:text-white ring-2 ring-cyan-500/40'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700">
                <Moon className="w-5 h-5" />
              </div>
              <div className="flex-1 pr-4">
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {t.welcome.themeDark[selectedLang]}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.welcome.themeDarkDesc[selectedLang]}
                </p>
              </div>
              {selectedTheme === 'dark' && (
                <div className="w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="button"
          onClick={handleContinue}
          className="btn-tech w-full py-4 px-6 rounded-2xl font-bold text-white text-base bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
        >
          <span>{t.welcome.continueBtn[selectedLang]}</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};
