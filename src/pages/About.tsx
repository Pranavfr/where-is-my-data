import React, { useEffect } from 'react';
import { Shield, ArrowLeft, Users, Target, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
            <h1 className="text-2xl sm:text-3xl font-bold">About Us</h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">Learn more about our mission to protect your digital privacy</p>
        </div>

        {/* Mission Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-4 sm:mb-6">Our Mission</h2>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                At Where's My Data?, we believe that privacy is a fundamental human right. Our mission is to 
                empower individuals with the tools and knowledge they need to protect their personal information 
                in an increasingly digital world.
              </p>
              <p>
                We provide free, accessible privacy checking tools that help you understand your digital footprint 
                and take proactive steps to secure your online presence. Our goal is to make privacy protection 
                simple, transparent, and available to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-4 sm:mb-6">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Breach Detection</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Check if your email or username has been compromised in known data breaches. 
                Get detailed information about affected services and data types.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Password Analysis</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Analyze password strength using advanced pattern detection. Get personalized 
                recommendations to improve your security practices.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Domain Safety</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Check website reputation and safety before visiting. Identify potential 
                phishing sites and malicious domains to protect yourself online.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Security Education</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Learn about digital privacy and security best practices. Get actionable 
                tips to protect your personal information and accounts.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-400/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Privacy First</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                We never store your personal information permanently. All data is processed 
                in memory and discarded immediately after use.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-400/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Free & Accessible</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                All our tools are completely free to use. No registration required, 
                no hidden fees, and no data collection.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-4 sm:mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Privacy by Design</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We believe privacy should be built into every aspect of our service. 
                We don't track users, store personal data, or use invasive analytics. 
                Your privacy is our priority.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Transparency</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We're open about how our tools work, what data we process, and how we 
                protect your information. No hidden agendas, no secret tracking.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Accessibility</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Privacy protection should be available to everyone, regardless of technical 
                expertise. We make complex security concepts simple and actionable.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Education</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We don't just provide tools—we educate users about digital privacy and 
                security. Knowledge is the best defense against online threats.
              </p>
            </div>
          </div>
        </section>

        {/* How It Started */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-4 sm:mb-6">How It Started</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p>
                Where's My Data? was born from a simple observation: while data breaches were becoming 
                increasingly common, most people had no easy way to check if their information had been compromised.
              </p>
              <p>
                Traditional breach checking services were either too complex, required registration, or 
                didn't provide enough actionable information. We wanted to create something different—a 
                tool that was free, accessible, and genuinely helpful.
              </p>
              <p>
                Our team of privacy advocates and security researchers came together to build a service 
                that puts user privacy first. We believe that everyone deserves to know if their personal 
                information has been exposed and what they can do about it.
              </p>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-4 sm:mb-6">Our Technology</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Data Sources</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                We aggregate data from publicly available breach databases, security research, 
                and community-contributed sources. All data is verified and regularly updated.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Security</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Our platform uses industry-standard encryption and security practices. 
                We regularly audit our systems and update our security measures.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Privacy</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                We use minimal cookies and don't track user behavior. All search queries 
                are processed in memory and discarded immediately.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Performance</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Our tools are optimized for speed and reliability. We use modern web 
                technologies to provide a fast, responsive experience.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section>
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-yellow-400 mb-2 sm:mb-3">Important Disclaimer</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Where's My Data? is an educational tool designed to raise awareness about data privacy and security. 
              We are not affiliated with HaveIBeenPwned or any security organizations. While we strive to provide 
              accurate information, we cannot guarantee the completeness or reliability of all results. 
              This service should not be considered as professional security advice.
            </p>
          </div>
        </section>
      </div>
    );
  };

export default About; 