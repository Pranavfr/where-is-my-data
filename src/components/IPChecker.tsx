import React, { useState, useEffect } from 'react';
import { Wifi, MapPin, Globe, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { IPInfo } from '../types';
import { checkIP } from '../services/api';
import LoadingSpinner from './LoadingSpinner';

const IPChecker: React.FC = () => {
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkCurrentIP();
  }, []);

  const checkCurrentIP = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await checkIP();
      setIpInfo(result);
    } catch (error) {
      console.error('Error checking IP:', error);
      setError('Failed to check IP information. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getRiskColor = (score: number) => {
    if (score < 30) return 'text-green-400';
    if (score < 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRiskLevel = (score: number) => {
    if (score < 30) return 'Low Risk';
    if (score < 70) return 'Medium Risk';
    return 'High Risk';
  };

  return (
    <section id="ip" className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Globe className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your IP Information
          </h2>
          <p className="text-xl text-gray-300">
            Check your IP address and location information
          </p>
        </div>

        <div className="bg-gray-800 border border-gray-600 rounded-lg p-8">
          <div className="text-center mb-8">
            <button
              onClick={checkCurrentIP}
              disabled={isLoading}
              className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-lg hover:from-green-300 hover:to-blue-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mx-auto"
            >
              {isLoading ? (
                <LoadingSpinner size="sm" color="white" />
              ) : (
                <>
                  <Wifi className="h-6 w-6 text-blue-400" />
                  <span>Check My IP</span>
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="bg-red-400/10 border border-red-400 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <span className="text-red-400">{error}</span>
              </div>
            </div>
          )}

          {ipInfo && (
            <div className="space-y-6">
              {/* IP Address */}
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">IP Address</h3>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    ipInfo.isBlacklisted ? 'bg-red-400/20 text-red-400' : 'bg-green-400/20 text-green-400'
                  }`}>
                    {ipInfo.isBlacklisted ? 'Blacklisted' : 'Clean'}
                  </div>
                </div>
                <p className="text-2xl font-mono text-blue-400">{ipInfo.ip}</p>
              </div>

              {/* Location Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="h-5 w-5 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <span className="text-gray-400">City:</span> {ipInfo.city}
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400">Region:</span> {ipInfo.region}
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400">Country:</span> {ipInfo.country}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="h-5 w-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">Network</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <span className="text-gray-400">ISP:</span> {ipInfo.isp}
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400">Risk Score:</span> 
                      <span className={`ml-2 font-semibold ${getRiskColor(ipInfo.riskScore)}`}>
                        {ipInfo.riskScore}%
                      </span>
                    </p>
                    <p className="text-gray-300">
                      <span className="text-gray-400">Status:</span> 
                      <span className={`ml-2 font-semibold ${getRiskColor(ipInfo.riskScore)}`}>
                        {getRiskLevel(ipInfo.riskScore)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Risk Assessment</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Blacklist Status</span>
                    <div className="flex items-center space-x-2">
                      {ipInfo.isBlacklisted ? (
                        <AlertTriangle className="h-5 w-5 text-red-400" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      )}
                      <span className={ipInfo.isBlacklisted ? 'text-red-400' : 'text-green-400'}>
                        {ipInfo.isBlacklisted ? 'Blacklisted' : 'Clean'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        ipInfo.riskScore < 30 ? 'bg-green-400' : 
                        ipInfo.riskScore < 70 ? 'bg-yellow-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${ipInfo.riskScore}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-sm text-gray-400">
                    Risk score based on network reputation and blacklist status
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IPChecker;