import React from 'react';
import { useApp } from '../context/AppContext';
import { Cpu, ShieldCheck, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setActiveTab, t } = useApp();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-[#070C18]/90 backdrop-blur-sm text-slate-600 dark:text-slate-400 text-xs py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-sm">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                TechNova
              </span>
            </div>
            <p className="font-medium text-slate-700 dark:text-slate-300">
              {t.brand.tagline[language]}
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs max-w-sm">
              {t.brand.mission[language]}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-bold uppercase tracking-wider text-slate-900 dark:text-white text-xs mb-3">
              {t.footer.quickLinksTitle[language]}
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('home')}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {t.nav.home[language]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('news')}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {t.nav.news[language]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('techi')}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {t.nav.techi[language]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('settings')}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {t.nav.settings[language]}
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial Integrity & Standards */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-900 dark:text-white text-xs mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Editorial Integrity</span>
            </div>
            <p className="leading-relaxed text-[11px] text-slate-500 dark:text-slate-400">
              {t.footer.integrityNotice[language]}
            </p>
            <div className="pt-2 text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Hardware Specifications & Published Research</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 dark:text-slate-500">
          <div>
            © 2026 TechNova Platform. {t.footer.rightsReserved[language]}
          </div>
          <div className="flex items-center gap-4">
            <span>Calendar Week: October 12 – 19, 2026</span>
            <span>•</span>
            <span>Gemini 3.8 Flash Powered TechI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
