import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Language, Theme, Currency } from '../types';
import { 
  Settings as SettingsIcon, 
  Globe, 
  Sun, 
  Moon, 
  DollarSign, 
  RotateCcw, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Server, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    theme, 
    setTheme, 
    currency, 
    setCurrency, 
    resetAllSettings, 
    exchangeRates, 
    t 
  } = useApp();

  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [serverStatus, setServerStatus] = useState<{ hasGeminiKey: boolean; model: string } | null>(null);

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => {
        setServerStatus({
          hasGeminiKey: Boolean(data.hasGeminiKey),
          model: data.model || 'gemini-3.8-flash',
        });
      })
      .catch(() => {
        setServerStatus({
          hasGeminiKey: false,
          model: 'gemini-3.8-flash',
        });
      });
  }, []);

  const languagesList: Array<{ code: Language; name: string; native: string; flag: string }> = [
    { code: 'uz', name: 'O‘zbekcha', native: 'O‘zbek tili (Lotin)', flag: '🇺🇿' },
    { code: 'ru', name: 'Русский', native: 'Русский язык', flag: '🇷🇺' },
    { code: 'en', name: 'English', native: 'English (US/UK)', flag: '🌐' },
  ];

  const themesList: Array<{ code: Theme; label: string; desc: string; icon: React.ReactNode }> = [
    {
      code: 'light',
      label: t.welcome.themeLight[language],
      desc: t.welcome.themeLightDesc[language],
      icon: <Sun className="w-5 h-5 text-amber-500" />,
    },
    {
      code: 'dark',
      label: t.welcome.themeDark[language],
      desc: t.welcome.themeDarkDesc[language],
      icon: <Moon className="w-5 h-5 text-cyan-400" />,
    },
  ];

  const currenciesList: Array<{ code: Currency; symbol: string; label: string }> = [
    { code: 'USD', symbol: '$', label: 'US Dollar ($)' },
    { code: 'EUR', symbol: '€', label: 'Euro (€)' },
    { code: 'UZS', symbol: 'so‘m', label: 'O‘zbekiston so‘mi (so‘m)' },
  ];

  return (
    <div className="page-transition bg-settings-style min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        
        {/* Page Title */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 mb-3">
            <SettingsIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Preferences</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.settings.pageTitle[language]}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.settings.pageSubtitle[language]}
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Section 1: Language Selection */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B132B] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {t.settings.languageSectionTitle[language]}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.settings.languageSectionDesc[language]}
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {languagesList.map((item) => {
                const isSelected = language === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`btn-tech relative flex flex-col p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'border-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/20 text-slate-900 dark:text-white ring-2 ring-cyan-500/30'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{item.flag}</span>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.native}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Theme Selection */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B132B] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {t.settings.themeSectionTitle[language]}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.settings.themeSectionDesc[language]}
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {themesList.map((item) => {
                const isSelected = theme === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => setTheme(item.code)}
                    className={`btn-tech relative flex items-start gap-4 p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'border-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/20 text-slate-900 dark:text-white ring-2 ring-cyan-500/30'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-xs border border-slate-200 dark:border-slate-700">
                      {item.icon}
                    </div>
                    <div className="flex-1 pr-4">
                      <div className="font-bold text-sm text-slate-900 dark:text-white">
                        {item.label}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {item.desc}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Currency Selection */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B132B] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  {t.settings.currencySectionTitle[language]}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.settings.currencySectionDesc[language]}
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currenciesList.map((curr) => {
                const isSelected = currency === curr.code;
                return (
                  <button
                    key={curr.code}
                    onClick={() => setCurrency(curr.code)}
                    className={`btn-tech flex items-center justify-between p-4 rounded-2xl border transition-all ${
                      isSelected
                        ? 'border-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/20 text-slate-900 dark:text-white ring-2 ring-cyan-500/30'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">
                        {curr.code} ({curr.symbol})
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {curr.label}
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 4: System Details & Integration Status */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#070C18]/60 p-6 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t.settings.systemInfoTitle[language]}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">{t.settings.versionLabel[language]}</span>
                <span className="font-bold text-slate-900 dark:text-white">TechNova 2026.1 (Build 4.0)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">{t.settings.geminiStatusLabel[language]}</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>
                    {serverStatus?.hasGeminiKey 
                      ? t.settings.statusConnected[language] 
                      : t.settings.statusFallback[language]}
                  </span>
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 flex items-center justify-between sm:col-span-2">
                <span className="text-slate-500 dark:text-slate-400">{t.settings.exchangeStatusLabel[language]}</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {exchangeRates.source} ({exchangeRates.verifiedDate})
                </span>
              </div>
            </div>
          </div>

          {/* Section 5: Reset All Settings to Default */}
          <div className="rounded-3xl border border-rose-200 dark:border-rose-950/60 bg-rose-50/30 dark:bg-rose-950/20 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-rose-900 dark:text-rose-300">
                  {t.settings.resetSectionTitle[language]}
                </h3>
                <p className="mt-1 text-xs text-rose-700/80 dark:text-rose-400 max-w-xl">
                  {t.settings.resetSectionDesc[language]}
                </p>
              </div>

              <button
                onClick={() => setShowResetConfirm(true)}
                className="btn-tech self-start sm:self-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.settings.resetBtn[language]}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Reset Confirmation Dialog */}
        {showResetConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white dark:bg-[#0B132B] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl page-transition">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t.settings.resetModalTitle[language]}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.settings.resetModalDesc[language]}
              </p>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="btn-tech px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {t.settings.cancelBtn[language]}
                </button>
                <button
                  onClick={() => {
                    setShowResetConfirm(false);
                    resetAllSettings();
                  }}
                  className="btn-tech px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm"
                >
                  {t.settings.confirmResetBtn[language]}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
