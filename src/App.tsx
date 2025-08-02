import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';
import PasswordChecker from './components/PasswordChecker';
import DomainChecker from './components/DomainChecker';
import IPChecker from './components/IPChecker';
import CleanupTips from './components/CleanupTips';
import SubscriptionSection from './components/SubscriptionSection';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import { SearchResult } from './types';
import './styles/animations.css';

function App() {
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const HomePage = () => (
    <main>
      <HeroSection 
        onSearch={setSearchResult} 
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      
      {searchResult && (
        <Dashboard searchResult={searchResult} />
      )}
      
      <PasswordChecker />
      <DomainChecker />
      <IPChecker />
      <CleanupTips />
      <SubscriptionSection />
    </main>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-green-400 overflow-x-hidden">
        {/* Matrix background effect */}
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="matrix-bg"></div>
        </div>
        
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;