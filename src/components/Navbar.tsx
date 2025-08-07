'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#121212] py-3 sm:py-4 md:py-6 px-4 sm:px-6">
      <div className="max-w-8xl mx-auto">
        {/* White Rounded Navbar Container */}
        <div className="bg-white rounded-lg shadow-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center">
          {/* Left Section - Name Only */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-sm sm:text-base md:text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              PANKAJ J. HARWANSH
            </Link>
          </div>

          {/* Right Section - Navigation Links and Contact Button */}
          <div className="flex items-center ml-auto">
            {/* Navigation Links - Desktop Only */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                About
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Events
              </Link>
              <Link href="/publications" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Publications
              </Link>
            </div>

            {/* Contact Button */}
            <div className="flex-shrink-0 ml-4 sm:ml-6 md:ml-8">
              <Link 
                href="/contact" 
                className="bg-yellow-300 text-gray-800 font-normal py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-6 rounded-lg hover:bg-yellow-400 transition-colors leading-loose tracking-wider text-xs sm:text-sm md:text-base"
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-3 sm:ml-4">
              <button 
                className="text-gray-700 hover:text-gray-900"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="bg-white rounded-lg shadow-lg px-4 py-4 space-y-3">
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/events" 
                className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/publications" 
                className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Publications
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 