import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-green-400/20 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold text-white">Where's My Data?</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/#scan" className="text-green-400 hover:text-green-300 transition-colors">Breach Check</a>
            <a href="/#password" className="text-gray-300 hover:text-green-400 transition-colors">Password Check</a>
            <a href="/#domain" className="text-gray-300 hover:text-green-400 transition-colors">Domain Check</a>
            <a href="/#ip" className="text-gray-300 hover:text-green-400 transition-colors">IP Check</a>
            <a href="/#tips" className="text-gray-300 hover:text-green-400 transition-colors">Security Tips</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-400 hover:text-green-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-400/20">
            <nav className="flex flex-col space-y-4">
              <a href="/#scan" className="text-green-400 hover:text-green-300 transition-colors">Breach Check</a>
              <a href="/#password" className="text-gray-300 hover:text-green-400 transition-colors">Password Check</a>
              <a href="/#domain" className="text-gray-300 hover:text-green-400 transition-colors">Domain Check</a>
              <a href="/#ip" className="text-gray-300 hover:text-green-400 transition-colors">IP Check</a>
              <a href="/#tips" className="text-gray-300 hover:text-green-400 transition-colors">Security Tips</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;