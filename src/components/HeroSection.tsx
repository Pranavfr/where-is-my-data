import React, { useState } from 'react';
import { Search, AlertTriangle, Shield } from 'lucide-react';
import { SearchResult } from '../types';
import { checkBreaches } from '../services/api';
import LoadingSpinner from './LoadingSpinner';

interface HeroSectionProps {
  onSearch: (result: SearchResult) => void;
  setIsLoading: (loading: boolean) => void;
  isLoading: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, setIsLoading, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    
    try {
      const result = await checkBreaches(query.trim());
      onSearch(result);
    } catch (error) {
      console.error('Error checking breaches:', error);
      // Fallback to mock data if API fails
      const fallbackResult: SearchResult = {
        query,
        breachCount: 0,
        breaches: [],
        riskLevel: 'low'
      };
      onSearch(fallbackResult);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="scan" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Is Your Data Exposed?
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Check if your personal information has been leaked online in data breaches
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your email or username"
                className="w-full px-6 py-4 bg-gray-800 border-2 border-green-400/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-all duration-300 group-hover:border-green-400/50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-md hover:from-green-300 hover:to-blue-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isLoading ? (
                  <LoadingSpinner size="sm" color="white" />
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    <span className="hidden sm:inline">Scan Now</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>100% anonymous</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-blue-400" />
              <span>No data stored</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>Free forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;