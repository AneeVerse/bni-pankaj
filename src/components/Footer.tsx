"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 sm:py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
        
        {/* Main Footer Content */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          
          {/* Mobile: 2-column grid, Desktop: 5-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-6 md:mb-0">
            
            {/* Column 1 */}
            <div className="space-y-3 sm:space-y-4">
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Coaching
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Start now
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-3 sm:space-y-4">
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Documentary
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Free resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Shop all
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Desktop only */}
            <div className="hidden md:block space-y-3 sm:space-y-4">
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Assessments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                    Giving
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Customer Support - Desktop only */}
            <div className="hidden lg:block space-y-3 sm:space-y-4">
              <div>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium flex items-center text-sm sm:text-base">
                  Customer Support
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 rotate-[-90deg]" />
                </a>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  Contact Customer Support for questions on your products, coaching, or events.
                </p>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium flex items-center text-sm sm:text-base">
                  Media Inquiries
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 rotate-[-90deg]" />
                </a>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  Robbins Research International, Inc. has a dedicated media department. Members of the press are welcome to contact us.
                </p>
              </div>
            </div>

            {/* Column 5 - Social Media - Desktop only */}
            <div className="hidden lg:flex flex-col items-end space-y-3 sm:space-y-4">
              <div className="flex space-x-3 sm:space-x-4">
                {/* Instagram */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* X (Twitter) */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile: Full-width sections for Customer Support and Media Inquiries */}
          <div className="block md:hidden space-y-6 mt-8">
            {/* Customer Support */}
            <div className="border-t border-gray-800 pt-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium flex items-center text-base">
                Customer Support
                <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
              </a>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Contact Customer Support for questions on your products, coaching, or events.
              </p>
            </div>
            
            {/* Media Inquiries */}
            <div className="border-t border-gray-800 pt-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium flex items-center text-base">
                Media Inquiries
                <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
              </a>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Robbins Research International, Inc. has a dedicated media department. Members of the press are welcome to contact us.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 sm:space-y-6 md:space-y-0">
            
            {/* Left Side - Language and Copyright */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {/* Language Selector */}
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm font-medium">English</span>
                <ChevronDown className="w-4 h-4 text-white" />
              </div>
            
              {/* Copyright and Links */}
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 text-xs sm:text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span>© 2024. All rights reserved.</span>
              </div>
              
              {/* Address */}
              <p className="text-xs sm:text-sm text-gray-400">
                9051 Mira Mesa Blvd P.O. Box 281228, San Diego, CA 92128
              </p>
            </div>

            {/* Right Side - Mobile: Social Media, Desktop: Aneeverse Credit */}
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 w-full md:w-auto">
              {/* Social Media (Mobile only) */}
              <div className="flex lg:hidden space-x-3 sm:space-x-4 justify-center md:justify-start">
                {/* Instagram */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* X (Twitter) */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Aneeverse Credit */}
              <a 
                href="https://www.aneeverse.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 sm:space-x-3 text-xs sm:text-sm text-gray-400 hover:text-gray-300 transition-colors group"
              >
                <span>Designed & Managed by Aneeverse</span>
                <Image
                  src="/images/aneeverse-logo.svg"
                  alt="Aneeverse"
                  width={20}
                  height={20}
                  className="opacity-70 group-hover:opacity-100 transition-opacity sm:w-6 sm:h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
