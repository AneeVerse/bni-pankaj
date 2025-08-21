'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-black text-white px-4 sm:px-6 shadow-lg"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        <div className="max-w-[1230px] mx-auto h-22 md:h-18 flex items-center">
          {/* Left Section - Brand */}
          <div className="flex-shrink-0 mb-2">
            <Link href="/" className=" text-white ml-2 text-2xl sm:text-2xl md:text-[2.5rem] font-normal tracking-wider hover:opacity-90 sacramento-regular" style={{ letterSpacing: '0.05em' }}>
              pankaj harwansh
            </Link>
          </div>

          {/* Right Section - Navigation Links and Contact Button */}
          <div className="flex items-center ml-auto">
            {/* Navigation Links - Desktop Only */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm">
              <Link href="/" className="text-white hover:text-white transition-colors font-semibold">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-white transition-colors font-semibold">
                About
              </Link>
              <Link href="/events" className="text-white hover:text-white transition-colors font-semibold">
                Events
              </Link>
              <Link href="/publications" className="text-white hover:text-white transition-colors font-semibold">
                Publications
              </Link>
            </div>

            {/* Contact Button - stays at the end */}
            <div className="flex-shrink-0 ml-4 sm:ml-6 md:ml-8">
              <Link
                href="/contact"
                className="bg-[#3470cc] hidden sm:block text-white font-medium py-2 px-3 sm:py-2.5 sm:px-4 md:py-2 md:px-5 rounded-md hover:bg-white hover:text-black transition-colors text-xs sm:text-sm md:text-base"
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden mr-6 sm:ml-8">
              <button
                className="text-white hover:text-white/80 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="#2ea3f2" viewBox="0 0 24 24">
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
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-sm"></div>
        
        {/* Menu Content */}
        <div 
          className={`absolute top-0 left-0 right-0 bg-black transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? 'translate-y-0' 
              : '-translate-y-full'
          }`}
        >
          {/* Header with Close Button */}
          <div className="flex items-center justify-between px-4 py-6 border-b border-white/10">
            <Link 
              href="/" 
              className="text-white text-2xl font-normal tracking-wider sacramento-regular"
              style={{ letterSpacing: '0.05em' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              pankaj harwansh
            </Link>
            <button
              className="text-white hover:text-white/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="#2ea3f2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-4 py-8 space-y-6">
            <Link
              href="/"
              className="block text-white text-xl font-medium py-3 hover:text-yellow-300 transition-colors border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white text-xl font-medium py-3 hover:text-yellow-300 transition-colors border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/events"
              className="block text-white text-xl font-medium py-3 hover:text-yellow-300 transition-colors border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/publications"
              className="block text-white text-xl font-medium py-3 hover:text-yellow-300 transition-colors border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Publications
            </Link>
            
            {/* Contact Button */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block bg-yellow-300 text-gray-900 font-semibold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 