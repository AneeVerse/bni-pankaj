'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-black text-white px-4 sm:px-6 shadow-lg"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      <div className="max-w-[1230px] mx-auto h-16 md:h-18 flex items-center">
        {/* Left Section - Brand */}
        <div className="flex-shrink-0 mb-2">
          <Link href="/" className=" text-white text-xl sm:text-2xl md:text-[2.5rem] font-normal tracking-wider hover:opacity-90 sacramento-regular" style={{ letterSpacing: '0.05em' }}>
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
              className="bg-[#3470cc] text-white font-medium py-2 px-3 sm:py-2.5 sm:px-4 md:py-2 md:px-5 rounded-md hover:bg-white hover:text-black transition-colors text-xs sm:text-sm md:text-base"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-3 sm:ml-4">
            <button
              className="text-white hover:text-white/80"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-2 bg-black/95">
            <Link
              href="/"
              className="block text-white/85 hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white/85 hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/events"
              className="block text-white/85 hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/publications"
              className="block text-white/85 hover:text-white transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Publications
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-yellow-300 text-gray-900 font-medium mt-2 py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 