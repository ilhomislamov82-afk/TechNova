import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { newsArticles } from '../data/newsData';
import { NewsCategory } from '../types';
import { 
  Search, 
  X, 
  ExternalLink, 
  Clock, 
  Filter, 
  ShieldCheck, 
  Sparkles, 
  Bot, 
  RotateCcw,
  Newspaper
} from 'lucide-react';

export const NewsView: React.FC = () => {
  const { language, setActiveTab, t } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const categories: Array<{ id: NewsCategory; label: string }> = [
    { id: 'all', label: t.news.categories.all[language] },
    { id: 'ai', label: t.news.categories.ai[language] },
    { id: 'smartphones', label: t.news.categories.smartphones[language] },
    { id: 'computers', label: t.news.categories.computers[language] },
    { id: 'robotics', label: t.news.categories.robotics[language] },
    { id: 'gadgets', label: t.news.categories.gadgets[language] },
    { id: 'space', label: t.news.categories.space[language] },
  ];

  const filteredNews = useMemo(() => {
    return newsArticles.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search match
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase();
        const title = item.title[language].toLowerCase();
        const summary = item.summary[language].toLowerCase();
        const publisher = item.publisher.toLowerCase();
        const takeaway = item.keyTakeaway[language].toLowerCase();

        return (
          title.includes(query) ||
          summary.includes(query) ||
          publisher.includes(query) ||
          takeaway.includes(query)
        );
      }

      return true;
    });
  }, [selectedCategory, searchQuery, language]);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="page-transition bg-news-style min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        
        {/* Page Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 mb-3">
            <Newspaper className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Calendar Week: October 12 – 19, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {t.news.pageTitle[language]}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.news.pageSubtitle[language]}
          </p>

          {/* Publisher Integrity & Verification Notice */}
          <div className="mt-4 p-3 rounded-2xl bg-slate-100/80 dark:bg-[#0B132B]/90 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{t.news.archivedNotice[language]}</span>
          </div>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="mb-10 space-y-4 max-w-4xl mx-auto">
          
          {/* Search Input Field */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.news.searchPlaceholder[language]}
              className="input-tech w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Wrapping, touch-friendly) */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`btn-tech px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-cyan-600 dark:bg-cyan-500 text-white shadow-sm ring-2 ring-cyan-500/30'
                      : 'bg-white dark:bg-[#0B132B] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* News Grid or Empty State */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((article) => {
              const formattedDate = new Date(article.publishedAt).toLocaleDateString(
                language === 'uz' ? 'uz-UZ' : language === 'ru' ? 'ru-RU' : 'en-US',
                { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }
              );

              return (
                <article
                  key={article.id}
                  className="btn-tech flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B132B] overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div>
                    {/* Real Authentic Article Image */}
                    <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={article.imageUrl}
                        alt={article.title[language]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-white border border-white/20">
                          {t.news.categories[article.category]?.[language] || article.category}
                        </span>
                        {article.isFeatured && (
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-cyan-500 text-white shadow-sm">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-5 sm:p-6">
                      {/* Publisher and Date/Time */}
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2.5">
                        <span className="font-bold text-cyan-600 dark:text-cyan-400">
                          {article.publisher}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{formattedDate}</span>
                        </div>
                      </div>

                      {/* Real Headline */}
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {article.title[language]}
                      </h2>

                      {/* Concise Summary */}
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                        {article.summary[language]}
                      </p>

                      {/* Key takeaway */}
                      <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs">
                        <span className="font-bold text-cyan-600 dark:text-cyan-400">
                          {t.news.keyTakeawayLabel[language]}
                        </span>{' '}
                        <span className="text-slate-700 dark:text-slate-300">
                          {article.keyTakeaway[language]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Working Link to Original Article & Ask TechI */}
                  <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2 flex items-center justify-between gap-3 text-xs">
                    <a
                      href={article.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-tech font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 inline-flex items-center gap-1.5"
                    >
                      <span>{t.news.originalArticle[language]}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setActiveTab('techi')}
                      className="btn-tech inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                      title="Ask TechI about this topic"
                    >
                      <Bot className="w-3.5 h-3.5 text-cyan-500" />
                      <span>TechI</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="max-w-md mx-auto text-center py-16 px-4 bg-white dark:bg-[#0B132B] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {t.news.emptyStateTitle[language]}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {t.news.emptyStateDesc[language]}
            </p>
            <button
              onClick={handleClearFilters}
              className="btn-tech mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.news.resetFiltersBtn[language]}</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
