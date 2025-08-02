import React, { useState } from 'react';
import { Shield, Users, TrendingUp, CheckCircle, Key, AlertTriangle } from 'lucide-react';

const SubscriptionSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const features = [
    {
      icon: Shield,
      title: 'Privacy Protection Tools',
      description: 'Check your passwords, emails, and domains for security vulnerabilities'
    },
    {
      icon: Key,
      title: 'Password Security',
      description: 'Analyze password strength and get recommendations for better security'
    },
    {
      icon: AlertTriangle,
      title: 'Security Tips',
      description: 'Get personalized security recommendations based on your privacy check results'
    },
    {
      icon: Users,
      title: 'Privacy Education',
      description: 'Learn about data privacy and how to protect your personal information'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Protected
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Use our privacy tools to check your security and get personalized recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-600 hover:border-blue-400 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Information Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Privacy Tools</h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  Our privacy checking tools are completely free to use. No registration required.
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Password Checker</h4>
                    <p className="text-gray-300 text-sm">
                      Analyze your passwords for common patterns and security vulnerabilities
                    </p>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Email Breach Checker</h4>
                    <p className="text-gray-300 text-sm">
                      Check if your email has been involved in known data breaches
                    </p>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Domain Reputation</h4>
                    <p className="text-gray-300 text-sm">
                      Check if websites are safe before visiting or sharing information
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-400">
                  All tools are free • No registration required • Privacy-focused
                </p>
              </div>
            </div>

            {/* Security Tips */}
            <div className="mt-8 pt-8 border-t border-gray-600">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Quick Security Tips</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Use unique passwords for each account</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Enable two-factor authentication</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Regularly check your privacy settings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Be cautious with personal information online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;