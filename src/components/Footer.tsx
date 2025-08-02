import React from 'react';
import { Shield, Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-green-400/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold text-white">Where's My Data?</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A privacy-focused tool to check if your personal information has been exposed 
              in data breaches. Protect yourself and stay informed about your digital footprint.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Pranavfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="mailto:pranav16022016@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#scan" className="text-gray-400 hover:text-green-400 transition-colors">Breach Check</a></li>
              <li><a href="/#password" className="text-gray-400 hover:text-green-400 transition-colors">Password Check</a></li>
              <li><a href="/#domain" className="text-gray-400 hover:text-green-400 transition-colors">Domain Check</a></li>
              <li><a href="/#ip" className="text-gray-400 hover:text-green-400 transition-colors">IP Check</a></li>
              <li><a href="/#tips" className="text-gray-400 hover:text-green-400 transition-colors">Security Tips</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">About</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Where's My Data?. All rights reserved.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-2">
                <strong>Disclaimer:</strong> This tool is for educational purposes only. 
                Not affiliated with HaveIBeenPwned or any security organizations.
              </p>
              <p>
                Data is sourced from publicly available breach databases and security research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;