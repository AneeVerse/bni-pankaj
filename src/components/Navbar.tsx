'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#121212] py-6 px-6">
      <div className="max-w-8xl mx-auto">
        {/* White Rounded Navbar Container */}
        <div className="bg-white rounded-lg shadow-lg px-8 py-6 flex items-center">
          {/* Left Section - Name Only */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              PANKAJ J. HARWANSH
            </Link>
          </div>

          {/* Right Section - Navigation Links and Contact Button */}
          <div className="flex items-center ml-auto">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
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
            <div className="flex-shrink-0 ml-8">
              <Link 
                href="/contact" 
                className="bg-yellow-300 text-gray-800 font-normal py-4 px-6 rounded-lg hover:bg-yellow-400 transition-colors leading-loose tracking-wider"
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-8">
              <button className="text-gray-700 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 