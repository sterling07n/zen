import React, { useState, useEffect } from 'react';
import { Play, Circle } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'top-0 bg-white shadow-md py-4' : 'top-12 bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Circle className="w-8 h-8 text-[#023e8a]" strokeWidth={2} />
            <Play className="w-4 h-4 text-[#023e8a] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" />
          </div>
          <span className="text-2xl font-bold text-[#023e8a] tracking-tight">ZenCourse</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#pricing" className="text-gray-700 hover:text-[#023e8a] transition-colors duration-200">Pricing</a>
          <a href="#features" className="text-gray-700 hover:text-[#023e8a] transition-colors duration-200">Features</a>
          <a href="#about" className="text-gray-700 hover:text-[#023e8a] transition-colors duration-200">About</a>
          <button className="bg-[#023e8a] text-white px-6 py-2 rounded-lg hover:bg-[#034da2] transition-all duration-200 font-medium">
            Start Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;