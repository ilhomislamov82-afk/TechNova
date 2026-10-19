export type Language = 'uz' | 'ru' | 'en';
export type Theme = 'light' | 'dark';
export type Currency = 'USD' | 'EUR' | 'UZS';
export type NavigationTab = 'home' | 'news' | 'techi' | 'settings';

export type NewsCategory = 
  | 'all'
  | 'ai'
  | 'smartphones'
  | 'computers'
  | 'robotics'
  | 'gadgets'
  | 'space';

export interface LocalizedString {
  uz: string;
  ru: string;
  en: string;
}

export interface NewsItem {
  id: string;
  title: LocalizedString;
  summary: LocalizedString;
  category: NewsCategory;
  publishedAt: string; // ISO date string in current calendar week
  publisher: string;
  originalUrl: string;
  imageUrl: string;
  readTimeMinutes: number;
  isFeatured?: boolean;
  keyTakeaway: LocalizedString;
}

export interface DeviceSpec {
  label: LocalizedString;
  value: string;
}

export interface DailyDevice {
  id: string;
  name: string;
  model: string;
  category: LocalizedString;
  description: LocalizedString;
  verifiedListedPrice: number | null; // null if unverified or unavailable
  originalCurrency: 'USD';
  retailerName: string;
  listingUrl: string;
  priceCheckedAt: string | null;
  isPriceVerified: boolean;
  unverifiedReason?: LocalizedString;
  imageUrl: string;
  specs: DeviceSpec[];
  highlights: LocalizedString[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  mode?: 'live_gemini' | 'knowledge_base' | 'knowledge_base_general';
  isOfflineFallback?: boolean;
}

export interface ExchangeRates {
  baseCurrency: 'USD';
  verifiedDate: string;
  rates: {
    USD: number;
    EUR: number;
    UZS: number;
  };
  source: string;
}
