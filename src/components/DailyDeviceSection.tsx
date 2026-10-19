import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { verifiedDevices } from '../data/devicesData';
import { Currency } from '../types';
import { 
  ShieldCheck, 
  ExternalLink, 
  Clock, 
  Store, 
  AlertTriangle, 
  Info, 
  Layers, 
  ChevronRight, 
  Zap,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

export const DailyDeviceSection: React.FC = () => {
  const { 
    language, 
    currency, 
    setCurrency, 
    formatCurrency, 
    exchangeRates, 
    t 
  } = useApp();

  const [activeDeviceId, setActiveDeviceId] = useState<string>(verifiedDevices[0].id);
  const [showAllSpecs, setShowAllSpecs] = useState<boolean>(false);

  const device = verifiedDevices.find((d) => d.id === activeDeviceId) || verifiedDevices[0];
  const priceInfo = formatCurrency(device.verifiedListedPrice, currency);

  const currencies: Array<{ code: Currency; symbol: string; label: string }> = [
    { code: 'USD', symbol: '$', label: 'USD ($)' },
    { code: 'EUR', symbol: '€', label: 'EUR (€)' },
    { code: 'UZS', symbol: 'so‘m', label: 'UZS (so‘m)' },
  ];

  const formattedCheckDate = device.priceCheckedAt 
    ? new Date(device.priceCheckedAt).toLocaleDateString(
        language === 'uz' ? 'uz-UZ' : language === 'ru' ? 'ru-RU' : 'en-US', 
        { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
      )
    : null;

  return (
    <section id="daily-device" className="scroll-mt-24 my-12 sm:my-16">
      <div className="relative rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-cyan-500/25 shadow-xl shadow-cyan-500/5 overflow-hidden">
        
        {/* Decorative background aura */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header with Title and Currency Switcher */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 mb-3">
              <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{t.dailyDevice.sectionTitle[language]}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {device.name} — {device.model}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {device.description[language]}
            </p>
          </div>

          {/* Currency Selector Controls */}
          <div className="shrink-0">
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
              {t.dailyDevice.currencyLabel[language]}
            </label>
            <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
              {currencies.map((curr) => {
                const isActive = currency === curr.code;
                return (
                  <button
                    key={curr.code}
                    onClick={() => setCurrency(curr.code)}
                    className={`btn-tech px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-cyan-600 dark:bg-cyan-500 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {curr.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Product Presentation Grid */}
        <div className="relative mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Photography & Device Selector Chips */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-4/3 group">
              <img
                src={device.imageUrl}
                alt={`${device.name} ${device.model}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                  {device.category[language]}
                </span>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-black/60 backdrop-blur-md text-slate-200">
                  Real Product Photo
                </span>
              </div>
            </div>

            {/* Device Switcher Tabs */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                {t.dailyDevice.switchDeviceLabel[language]}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {verifiedDevices.map((d) => {
                  const isSelected = d.id === activeDeviceId;
                  return (
                    <button
                      key={d.id}
                      onClick={() => {
                        setActiveDeviceId(d.id);
                        setShowAllSpecs(false);
                      }}
                      className={`btn-tech text-left p-2.5 rounded-xl border text-xs transition-all ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 font-bold'
                          : 'border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="truncate">{d.name}</div>
                      <div className="text-[10px] opacity-75 font-normal truncate">
                        {d.isPriceVerified ? `$${d.verifiedListedPrice}` : (language === 'uz' ? 'Tasdiqlanmagan' : language === 'ru' ? 'Не подтверждена' : 'Unavailable')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Transparency & Specifications */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Price Box with Absolute Compliance with Rule #5 */}
            <div className={`p-6 rounded-2xl border transition-all ${
              device.isPriceVerified
                ? 'bg-gradient-to-br from-cyan-500/5 via-sky-500/10 to-blue-500/5 dark:from-cyan-950/30 dark:via-sky-900/20 dark:to-blue-950/20 border-cyan-500/30'
                : 'bg-amber-500/5 dark:bg-amber-950/20 border-amber-500/30'
            }`}>
              
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                {device.isPriceVerified ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{t.dailyDevice.verifiedPriceBadge[language]}</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>{t.dailyDevice.unverifiedPriceBadge[language]}</span>
                  </div>
                )}

                {/* Retailer Info */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Store className="w-3.5 h-3.5 text-slate-400" />
                  <span>{device.retailerName}</span>
                </div>
              </div>

              {/* Price Figures */}
              {device.isPriceVerified && device.verifiedListedPrice !== null ? (
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    {t.dailyDevice.displayPriceLabel[language]}
                  </div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                      {priceInfo.formatted}
                    </span>
                    {priceInfo.isConverted && (
                      <span className="text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400">
                        ({t.dailyDevice.originalPriceLabel[language]} ${device.verifiedListedPrice} {device.originalCurrency})
                      </span>
                    )}
                  </div>

                  {/* Exchange rate disclosure when converted */}
                  {priceInfo.isConverted && (
                    <div className="mt-3 flex items-start gap-2 p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                      <Info className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <p>{t.dailyDevice.exchangeRateNote[language]}</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Exchange Rate Used: 1 USD = {priceInfo.rateUsed} {currency} (Date: {exchangeRates.verifiedDate})
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Price checked timestamp */}
                  {formattedCheckDate && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{t.dailyDevice.checkedDateLabel[language]} {formattedCheckDate}</span>
                    </div>
                  )}
                </div>
              ) : (
                /* Unverified / Price unavailable state */
                <div>
                  <div className="text-3xl font-black text-amber-600 dark:text-amber-400">
                    {t.common.verified[language] === 'Tasdiqlangan' ? 'Narx mavjud emas' : language === 'ru' ? 'Цена недоступна' : 'Price Unavailable'}
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {device.unverifiedReason 
                      ? device.unverifiedReason[language] 
                      : t.dailyDevice.priceUnavailableNotice[language]}
                  </p>
                </div>
              )}

              {/* Direct Link to original listing */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={device.listingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tech inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 transition-all shadow-sm"
                >
                  <span>{t.dailyDevice.viewOriginalListing[language]}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] text-slate-400">
                  {device.isPriceVerified ? 'Verified Official Source' : 'Academic Prototype'}
                </span>
              </div>
            </div>

            {/* Key Technical Specifications Table */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{t.dailyDevice.specsTitle[language]}</span>
                </h3>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {device.specs.map((spec, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                    <dt className="text-slate-500 dark:text-slate-400 font-semibold mb-1">
                      {spec.label[language]}
                    </dt>
                    <dd className="font-bold text-slate-900 dark:text-slate-200">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Highlights & Innovations */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  {t.dailyDevice.highlightsTitle[language]}
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {device.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{h[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
