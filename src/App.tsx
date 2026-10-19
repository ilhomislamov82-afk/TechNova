import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { WelcomeModal } from './components/WelcomeModal';
import { HomeView } from './components/HomeView';
import { NewsView } from './components/NewsView';
import { TechIView } from './components/TechIView';
import { SettingsView } from './components/SettingsView';
import { Footer } from './components/Footer';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <WelcomeModal />

      <main className="flex-1">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'news' && <NewsView />}
        {activeTab === 'techi' && <TechIView />}
        {activeTab === 'settings' && <SettingsView />}
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
