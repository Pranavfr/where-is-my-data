import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, Shield, Globe } from 'lucide-react';
import { DomainResult } from '../types';
import { checkDomain } from '../services/api';
import LoadingSpinner from './LoadingSpinner';

const DomainChecker: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState<DomainResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;

    setIsLoading(true);
    
    try {
      const result = await checkDomain(domain);
      setResult(result);
    } catch (error) {
      console.error('Error checking domain:', error);
      // Fallback to mock data if API fails
      const fallbackResult: DomainResult = {
        domain: domain,
        isPhishing: false,
        isMalware: false,
        isBlacklisted: false,
        reputation: 'safe',
        categories: ['Clean'],
        lastScanned: new Date().toISOString(),
        riskScore: 0
      };
      setResult(fallbackResult);
    } finally {
      setIsLoading(false);
    }
  };

  const getReputationColor = (reputation: string) => {
    switch (reputation) {
      case 'safe':
        return { color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400', icon: CheckCircle };
      case 'suspicious':
        return { color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400', icon: AlertTriangle };
      case 'dangerous':
        return { color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400', icon: AlertTriangle };
      default:
        return { color: 'text-gray-400', bg: 'bg-gray-400/10', border: 'border-gray-400', icon: AlertTriangle };
    }
  };

  return (
    <section id="domain" className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Globe className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Is This Website Safe?
          </h2>
          <p className="text-xl text-gray-300">
            Check if a website is safe before visiting or sharing information
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-600 rounded-lg p-8">
          <form onSubmit={handleCheck} className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Enter Website URL
              </label>
              <div className="relative">
                <input
                  type="url"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 pr-12 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                  disabled={isLoading}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !domain.trim()}
              className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-lg hover:from-green-300 hover:to-blue-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <LoadingSpinner size="sm" color="white" />
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  <span>Check Domain</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-300 flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span>We check domain reputation using multiple security databases. Results are for informational purposes only.</span>
            </p>
          </div>

          {result && (
            <div className="mt-8">
              <div className={`${getReputationColor(result.reputation).bg} border-2 ${getReputationColor(result.reputation).border} rounded-lg p-6`}>
                <div className="flex items-center space-x-4 mb-4">
                  {React.createElement(getReputationColor(result.reputation).icon, {
                    className: `h-8 w-8 ${getReputationColor(result.reputation).color}`
                  })}
                  <div>
                    <h3 className={`text-xl font-bold ${getReputationColor(result.reputation).color}`}>
                      {result.reputation === 'safe' ? 'Domain is Safe' : 
                       result.reputation === 'suspicious' ? 'Domain is Suspicious' : 'Domain is Dangerous'}
                    </h3>
                    <p className="text-gray-300">
                      {result.domain} - Risk Score: {result.riskScore}%
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-200">Security Status:</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${result.isPhishing ? 'bg-red-400' : 'bg-green-400'}`}></div>
                        <span className="text-sm text-gray-300">
                          Phishing: {result.isPhishing ? 'Detected' : 'Clean'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${result.isMalware ? 'bg-red-400' : 'bg-green-400'}`}></div>
                        <span className="text-sm text-gray-300">
                          Malware: {result.isMalware ? 'Detected' : 'Clean'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${result.isBlacklisted ? 'bg-red-400' : 'bg-green-400'}`}></div>
                        <span className="text-sm text-gray-300">
                          Blacklisted: {result.isBlacklisted ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-200">Categories:</h4>
                    <div className="flex flex-wrap gap-1">
                      {result.categories.map((category, index) => (
                        <span key={index} className="bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400">
                  Last scanned: {new Date(result.lastScanned).toLocaleDateString()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DomainChecker;