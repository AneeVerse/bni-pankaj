'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#121212] py-6 px-6">
      <div className="max-w-8xl mx-auto">
        {/* White Rounded Navbar Container */}
        <div className="bg-white rounded-lg shadow-lg px-8 py-6 flex items-center justify-between">
          {/* Left Section - Name Only */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              PANKAJ J. HARWANSH
            </Link>
          </div>

          {/* Right Section - Navigation Links and Contact Button */}
          <div className="flex items-center space-x-8">
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
            <div className="flex-shrink-0">
              <Link 
                href="/contact" 
                className="bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
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