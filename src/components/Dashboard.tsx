import React from 'react';
import { AlertTriangle, Calendar, Database, Shield } from 'lucide-react';
import { SearchResult } from '../types';

interface DashboardProps {
  searchResult: SearchResult;
}

const Dashboard: React.FC<DashboardProps> = ({ searchResult }) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400 border-green-400';
      case 'medium': return 'text-yellow-400 border-yellow-400';
      case 'high': return 'text-red-400 border-red-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getRiskBgColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-400/10';
      case 'medium': return 'bg-yellow-400/10';
      case 'high': return 'bg-red-400/10';
      default: return 'bg-gray-400/10';
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="slide-up">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Scan Results for <span className="text-green-400">{searchResult.query}</span>
          </h2>

          {/* Risk Level Alert */}
          <div className={`${getRiskBgColor(searchResult.riskLevel)} border-2 ${getRiskColor(searchResult.riskLevel)} rounded-lg p-6 mb-8`}>
            <div className="flex items-center justify-center space-x-4">
              <AlertTriangle className={`h-8 w-8 ${getRiskColor(searchResult.riskLevel)}`} />
              <div className="text-center">
                <h3 className="text-2xl font-bold capitalize text-white">
                  {searchResult.riskLevel} Risk Level
                </h3>
                <p className="text-gray-300 mt-2">
                  Your data was found in {searchResult.breachCount} breach{searchResult.breachCount !== 1 ? 'es' : ''}
                </p>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800 border border-green-400/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Breaches Found</p>
                  <p className="text-3xl font-bold text-green-400">{searchResult.breachCount}</p>
                </div>
                <Database className="h-8 w-8 text-green-400" />
              </div>
            </div>

            <div className="bg-gray-800 border border-blue-400/30 rounded-lg p-6 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Data Types</p>
                  <p className="text-3xl font-bold text-blue-400">
                    {[...new Set(searchResult.breaches.flatMap(b => b.dataClasses))].length}
                  </p>
                </div>
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
            </div>

            <div className="bg-gray-800 border border-red-400/30 rounded-lg p-6 hover:border-red-400 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Latest Breach</p>
                  <p className="text-xl font-bold text-red-400">
                    {new Date(Math.max(...searchResult.breaches.map(b => new Date(b.breachDate).getTime()))).getFullYear()}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-red-400" />
              </div>
            </div>
          </div>

          {/* Breach Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Affected Sites</h3>
            {searchResult.breaches.map((breach, index) => (
              <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-6 hover:border-green-400 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-400 mb-2">{breach.name}</h4>
                    <p className="text-gray-300 mb-4">{breach.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Breach Date</p>
                    <p className="text-white font-semibold">{new Date(breach.breachDate).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm mb-2">Data Types Exposed:</p>
                  <div className="flex flex-wrap gap-2">
                    {breach.dataClasses.map((dataClass, i) => (
                      <span key={i} className="bg-red-400/20 text-red-400 px-3 py-1 rounded-full text-sm border border-red-400/30">
                        {dataClass}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;