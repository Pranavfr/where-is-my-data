import React, { useState } from 'react';
import { CheckCircle, Shield, Key, Trash2, AlertTriangle, ExternalLink } from 'lucide-react';

const CleanupTips: React.FC = () => {
  const [completedTasks, setCompletedTasks] = useState<Set<number>>(new Set());

  const tips = [
    {
      icon: Key,
      title: 'Change Exposed Passwords',
      description: 'Update passwords for any accounts found in breaches',
      action: 'Change passwords immediately',
      priority: 'high',
      completed: false
    },
    {
      icon: Shield,
      title: 'Enable Two-Factor Authentication',
      description: 'Add an extra layer of security to your important accounts',
      action: 'Set up 2FA on all major accounts',
      priority: 'high',
      completed: false
    },
    {
      icon: Key,
      title: 'Use a Password Manager',
      description: 'Generate and store unique passwords for every account',
      action: 'Install and configure a password manager',
      priority: 'medium',
      completed: false
    },
    {
      icon: Trash2,
      title: 'Request Data Removal',
      description: 'Contact services to remove your personal information',
      action: 'Use services like JustDelete.me',
      priority: 'medium',
      completed: false
    },
    {
      icon: AlertTriangle,
      title: 'Monitor Your Accounts',
      description: 'Regularly check for unauthorized access or changes',
      action: 'Set up account alerts and review regularly',
      priority: 'low',
      completed: false
    },
    {
      icon: Shield,
      title: 'Review Privacy Settings',
      description: 'Audit and update privacy settings on all platforms',
      action: 'Check social media and service privacy settings',
      priority: 'low',
      completed: false
    }
  ];

  const handleMarkComplete = (index: number) => {
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-400 bg-red-400/10';
      case 'medium': return 'border-yellow-400 bg-yellow-400/10';
      case 'low': return 'border-green-400 bg-green-400/10';
      default: return 'border-gray-400 bg-gray-400/10';
    }
  };

  const getPriorityBadge = (priority: string) => {
    const colors = {
      high: 'bg-red-400 text-black',
      medium: 'bg-yellow-400 text-black',
      low: 'bg-green-400 text-black'
    };
    return colors[priority as keyof typeof colors] || 'bg-gray-400 text-black';
  };

  const completedCount = completedTasks.size;
  const totalTasks = tips.length;

  return (
    <section id="tips" className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Here's What You Can Do Next
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take immediate action to protect your accounts and prevent future breaches
          </p>
          
          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Progress</span>
              <span>{completedCount}/{totalTasks} completed</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / totalTasks) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const isCompleted = completedTasks.has(index);
            
            return (
              <div 
                key={index} 
                className={`${getPriorityColor(tip.priority)} border-2 rounded-lg p-6 hover:border-opacity-100 transition-all duration-300 ${
                  isCompleted ? 'opacity-75' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <tip.icon className={`h-8 w-8 text-white flex-shrink-0 ${isCompleted ? 'opacity-50' : ''}`} />
                  <span className={`${getPriorityBadge(tip.priority)} px-2 py-1 rounded-full text-xs font-semibold uppercase`}>
                    {tip.priority}
                  </span>
                </div>
                
                <h3 className={`text-xl font-bold text-white mb-3 ${isCompleted ? 'line-through opacity-50' : ''}`}>
                  {tip.title}
                </h3>
                <p className={`text-gray-300 mb-4 ${isCompleted ? 'opacity-50' : ''}`}>
                  {tip.description}
                </p>
                
                <div className="space-y-3">
                  <p className={`text-sm text-gray-400 ${isCompleted ? 'opacity-50' : ''}`}>
                    <strong>Action:</strong> {tip.action}
                  </p>
                  
                  {isCompleted ? (
                    <div className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-green-600 border border-green-500 rounded-lg text-white">
                      <CheckCircle className="h-4 w-4" />
                      <span>Completed</span>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleMarkComplete(index)}
                      className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-green-400 rounded-lg transition-all duration-300 text-white hover:text-green-400"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>Mark as Complete</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Completion Message */}
        {completedCount === totalTasks && (
          <div className="mt-8 text-center">
            <div className="bg-green-400/10 border-2 border-green-400 rounded-lg p-6">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-400 mb-2">All Tasks Completed!</h3>
              <p className="text-gray-300">
                Great job! You've taken all the recommended steps to improve your security.
              </p>
            </div>
          </div>
        )}

        {/* External Resources */}
        <div className="mt-16 bg-gray-800 border border-gray-600 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Helpful Resources</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="https://justdeleteme.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
            >
              <ExternalLink className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
              <div>
                <p className="text-white font-semibold">JustDelete.me</p>
                <p className="text-gray-400 text-sm">Delete your accounts easily</p>
              </div>
            </a>

            <a 
              href="https://haveibeenpwned.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
            >
              <ExternalLink className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
              <div>
                <p className="text-white font-semibold">Have I Been Pwned</p>
                <p className="text-gray-400 text-sm">Check for data breaches</p>
              </div>
            </a>

            <a 
              href="https://twofactorauth.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
            >
              <ExternalLink className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
              <div>
                <p className="text-white font-semibold">2FA Directory</p>
                <p className="text-gray-400 text-sm">Find sites with 2FA support</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanupTips;