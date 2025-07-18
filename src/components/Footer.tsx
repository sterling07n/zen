import React from 'react';
import { Instagram, Youtube, Twitter, Play, Circle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="relative">
              <Circle className="w-8 h-8 text-[#023e8a]" strokeWidth={2} />
              <Play className="w-4 h-4 text-[#023e8a] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" />
            </div>
            <span className="text-2xl font-bold text-[#023e8a] tracking-tight">ZenCourse</span>
          </div>

          <div className="flex items-center space-x-8 mb-6 md:mb-0">
            <a href="#" className="text-[#023e8a] hover:text-[#034da2] transition-colors duration-200">Terms</a>
            <a href="#" className="text-[#023e8a] hover:text-[#034da2] transition-colors duration-200">Privacy</a>
            <a href="#" className="text-[#023e8a] hover:text-[#034da2] transition-colors duration-200">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-[#023e8a] hover:text-[#034da2] transition-colors duration-200">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#023e8a] hover:text-[#034da2] transition-colors duration-200">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#023e8a] hover:text-[#034da2] transition-colors duration-200">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-[#023e8a]">© 2025 ZenCourse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;