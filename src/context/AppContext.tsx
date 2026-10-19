import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme, Currency, NavigationTab, ExchangeRates } from '../types';
import { translations } from '../data/translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  showWelcomeModal: boolean;
  setShowWelcomeModal: (show: boolean) => void;
  completeOnboarding: (lang: Language, theme: Theme) => void;
  resetAllSettings: () => void;
  exchangeRates: ExchangeRates;
  t: typeof translations;
  formatCurrency: (amountInUSD: number | null, targetCurrency?: Currency) => {
    formatted: string;
    isConverted: boolean;
    rateDate: string;
    rateUsed: number;
    rawConverted: number | null;
  };
}

const DEFAULT_EXCHANGE_RATES: ExchangeRates = {
  baseCurrency: 'USD',
  verifiedDate: '2026-10-18',
  rates: {
    USD: 1.0,
    EUR: 0.92,
    UZS: 12850.0,
  },
  source: 'Official Market Benchmark (Central Bank & ECB standards)',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Read initial states from localStorage
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('technova_language');
    if (saved === 'uz' || saved === 'ru' || saved === 'en') return saved;
    return 'en';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('technova_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Default to modern navy dark aesthetic
  });

  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('technova_currency');
    if (saved === 'USD' || saved === 'EUR' || saved === 'UZS') return saved;
    return 'USD';
  });

  const [activeTab, setActiveTabState] = useState<NavigationTab>(() => {
    const hash = window.location.hash.replace('#', '') as NavigationTab;
    if (hash === 'news' || hash === 'techi' || hash === 'settings') return hash;
    return 'home';
  });

  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(() => {
    const onboarded = localStorage.getItem('technova_onboarded');
    return onboarded !== 'true';
  });

  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>(DEFAULT_EXCHANGE_RATES);

  // Sync theme with DOM
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('technova_theme', theme);
  }, [theme]);

  // Sync language with HTML lang
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('technova_language', language);
  }, [language]);

  // Sync currency
  useEffect(() => {
    localStorage.setItem('technova_currency', currency);
  }, [currency]);

  // Fetch verified exchange rates from server
  useEffect(() => {
    fetch('/api/exchange-rates')
      .then(res => res.json())
      .then(data => {
        if (data && data.rates) {
          setExchangeRates(data);
        }
      })
      .catch(() => {
        // Fallback already in place
      });
  }, []);

  // Sync activeTab with URL hash
  const setActiveTab = (tab: NavigationTab) => {
    setActiveTabState(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavigationTab;
      if (hash === 'home' || hash === 'news' || hash === 'techi' || hash === 'settings') {
        setActiveTabState(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
  };

  const completeOnboarding = (lang: Language, newTheme: Theme) => {
    setLanguage(lang);
    setTheme(newTheme);
    localStorage.setItem('technova_onboarded', 'true');
    setShowWelcomeModal(false);
    setActiveTab('home');
  };

  const resetAllSettings = () => {
    localStorage.removeItem('technova_onboarded');
    localStorage.removeItem('technova_language');
    localStorage.removeItem('technova_theme');
    localStorage.removeItem('technova_currency');
    setLanguageState('en');
    setThemeState('dark');
    setCurrencyState('USD');
    setShowWelcomeModal(true);
    setActiveTab('home');
  };

  const formatCurrency = (amountInUSD: number | null, targetCurrency: Currency = currency) => {
    if (amountInUSD === null || isNaN(amountInUSD)) {
      return {
        formatted: language === 'uz' ? 'Narx mavjud emas' : language === 'ru' ? 'Цена недоступна' : 'Price unavailable',
        isConverted: false,
        rateDate: exchangeRates.verifiedDate,
        rateUsed: 1,
        rawConverted: null,
      };
    }

    const rate = exchangeRates.rates[targetCurrency] || 1;
    const isConverted = targetCurrency !== 'USD';
    const converted = amountInUSD * rate;

    let formatted = '';
    if (targetCurrency === 'USD') {
      formatted = `$${amountInUSD.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
    } else if (targetCurrency === 'EUR') {
      formatted = `€${converted.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
    } else if (targetCurrency === 'UZS') {
      formatted = `${Math.round(converted).toLocaleString('uz-UZ')} so‘m`;
    }

    return {
      formatted,
      isConverted,
      rateDate: exchangeRates.verifiedDate,
      rateUsed: rate,
      rawConverted: converted,
    };
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        currency,
        setCurrency,
        activeTab,
        setActiveTab,
        showWelcomeModal,
        setShowWelcomeModal,
        completeOnboarding,
        resetAllSettings,
        exchangeRates,
        t: translations,
        formatCurrency,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
