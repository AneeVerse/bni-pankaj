"use client"

import Image from "next/image"
import { useState, useRef, useEffect, useCallback } from "react"

interface VentureDetailProps {
  videoUrl?: string
  onVideoPlay?: () => void
}

export default function VentureDetail({ videoUrl, onVideoPlay }: VentureDetailProps = {}) {
  // const [isPlaying, setIsPlaying] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const popupVideoRef = useRef<HTMLVideoElement>(null)

  const openVideoPopup = () => {
    setShowPopup(true)
    // Pause the main video when opening popup
    if (videoRef.current) {
      videoRef.current.pause()
      // setIsPlaying(false)
    }
  }

  const closeVideoPopup = useCallback(() => {
    setShowPopup(false)
    // Pause the popup video when closing
    if (popupVideoRef.current) {
      popupVideoRef.current.pause()
    }
  }, [])

  // Add keyboard support for closing popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Close video popup with Escape key
      if (e.key === 'Escape' && showPopup) {
        closeVideoPopup()
      }
    }

    // Add event listener
    document.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showPopup, closeVideoPopup])

  return (
    <div className="w-full">
      <section className="w-full bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8 lg:py-10">


                     {/* 2x2 Grid with Interlocking Curves - Reordered sections */}
           <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden rounded-2xl sm:rounded-3xl">

      {/* Background Gradient - Subtle angled effect */}
      <div className="absolute w-[80%] h-[60%] left-[5%] top-[-10%] bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[#ffffff] rounded-full transform rotate-[-55deg] z-15 hidden sm:block  blur-lg"></div> 

            {/* Section 1 - Expert Guidance Text (Top Right) - Curved on Bottom Left - 3/5 width - MOBILE FIRST */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-br-3xl md:col-span-3 z-25 order-1 md:order-2">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                  <span className="font-bold uppercase">BNI NAVI MUMBAI</span>
                  <br />
                  <span className="font-normal lowercase">Structured Referral Engine</span>
                </h2>
              </div>
            </div>

            {/* Section 2 - BNI Logo (Top Left) - Curved on Top Right and Bottom Left - 2/5 width (small box) - MOBILE SECOND */}
            <div className="relative bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-br-2xl sm:rounded-tr-3xl sm:rounded-bl-3xl sm:rounded-br-3xl overflow-hidden md:col-span-2 z-30 order-2 md:order-1">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[200px] sm:min-h-[250px] relative z-30">
                <Image
                  src="/images/venture/ff445e7d753b31b4df15ae1abb0ec9a02f4d3b94.png"
                  alt="BNI Logo"
                  width={200}
                  height={100}
                  className="max-w-full h-auto  object-contain z-30"
                />
              </div>
            </div>

            {/* Section 3 - Video (Bottom Right) - Curved on Top Left - 3/5 width (big video section) - MOBILE THIRD */}
            <div className="relative bg-[#efefef] rounded-tl-2xl sm:rounded-tl-3xl  rounded-br-3xl md:col-span-3 overflow-hidden z-10 order-3 md:order-4">
              {videoUrl ? (
                <div className="relative w-full h-full min-h-[220px] sm:min-h-[200px] flex items-center justify-center z-30">
                  {/* Video Container with Unified Gradient Integration */}
                  <div
                    className="relative w-full h-11/12 rounded-3xl overflow-hidden -mt-8 -ml-0"
                    style={{
                      borderRadius: '1.5rem',
                      WebkitBorderRadius: '1.5rem',
                      MozBorderRadius: '1.5rem'
                    }}
                  >
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      style={{
                        borderRadius: '1.5rem',
                        WebkitBorderRadius: '1.5rem',
                        MozBorderRadius: '1.5rem'
                      }}
                      muted
                      autoPlay
                      loop
                      playsInline
                      // onPlay={() => setIsPlaying(true)}
                      // onPause={() => setIsPlaying(false)}
                      // onEnded={() => setIsPlaying(false)}
                    >
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play Button Overlay - Opens Popup */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="text-white hover:bg-white/20 p-4 md:p-6 relative z-10 rounded-full border-2 border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                        onClick={openVideoPopup}
                      >
                        <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className="sr-only">Open video in popup</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[250px] relative rounded-tl-3xl overflow-hidden bg-gray-100">
                  <button
                    className="text-gray-600 hover:bg-gray-200 p-4 md:p-6 relative z-10 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all"
                    onClick={onVideoPlay}
                  >
                    <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="sr-only">Watch video</span>
                  </button>

                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-gray-600 text-sm md:text-base font-semibold z-10 flex items-center gap-2">
                    <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch video
                  </div>
                </div>
              )}
            </div>

            {/* Section 4 - Statistics and Coaching Info (Bottom Left) - Curved on Top Right - 2/5 width - MOBILE FOURTH */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl md:col-span-2 z-25 order-4 md:order-3">
              <div className="px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-8 flex flex-col justify-center min-h-[240px] md:min-h-[280px] lg:min-h-[300px] relative z-30">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  Word-of-mouth is still the best marketing. But it only works when it&apos;s systematic. BNI gives you a proven weekly structure to generate qualified referrals with trusted business professionals.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  Our members passed over ₹100 crores in referrals last year. Because when everyone succeeds, everyone wins. One referral can change your entire year.
                </p>

                {/* Buttons - Stacked vertically with better styling */}
                <div className="flex flex-col gap-3">
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl">
                    Visit a BNI Chapter Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Popup Modal */}
        {showPopup && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={(e) => {
              // Close popup when clicking on the background
              if (e.target === e.currentTarget) {
                closeVideoPopup();
              }
            }}
          >
            <div className="relative bg-black rounded-3xl overflow-hidden w-full h-full max-w-6xl max-h-[80vh] flex flex-col">
              {/* Close Button */}
              <button
                onClick={closeVideoPopup}
                className="absolute top-4 right-4 z-30 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2 backdrop-blur-sm"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>

              {/* Video Player */}
              <div className="relative flex-1 flex items-center justify-center">
                <video
                  ref={popupVideoRef}
                  className="w-full h-full object-contain rounded-3xl"
                  style={{
                    borderRadius: '1.5rem'
                  }}
                  controls
                  autoPlay
                  muted={false}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* Second VentureDetail Section - Mirrored Layout */}
      <section className="w-full bg-[#efefef] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8 lg:py-10">


          {/* 2x2 Grid with Interlocking Curves - Mirrored sections */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0  overflow-hidden  rounded-3xl">

            
      {/* Background Gradient - Subtle angled effect */}
      <div className="absolute w-[70%] h-[60%] left-[26%] top-[10%] bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[#ffffff] rounded-full transform rotate-[-130deg] z-15 hidden sm:block  blur-lg"></div> 

            {/* Section 1 - Expert Guidance Text (Top Left) - Curved on Bottom Right - 3/5 width */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-3xl md:col-span-3 z-25">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                  <span className="font-bold uppercase">CORPORATE CONNECTIONS</span>
                  <br />
                  <span className="font-normal lowercase">Executive Influence Network</span>
                </h2>
              </div>
            </div>

            {/* Section 2 - Corporate Connections Logo (Top Right) - Curved on Top Left and Bottom Right - 2/5 width (small box) */}
            <div className="relative bg-white rounded-tl-3xl rounded-br-3xl rounded-bl-3xl overflow-hidden md:col-span-2 z-30">
              <div className="p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[250px] relative ">
                <Image
                  src="/images/venture/d7ddf110031b054df193d8ae5b7aab1295e2887a.png"
                  alt="Corporate Connections Logo"
                  width={200}
                  height={100}
                  className="max-w-full h-auto  object-contain"
                />
              </div>
            </div>

            {/* Section 3 - Video (Bottom Left) - Curved on Top Right - 3/5 width (big video section) */}
            <div className="relative bg-[#efefef]  rounded-tr-3xl rounded-bl-3xl md:col-span-3 overflow-hidden z-10">
              {videoUrl ? (
                <div className="relative w-full h-full min-h-[220px] sm:min-h-[200px] flex items-center justify-center z-30">
                  {/* Video Container with Unified Gradient Integration */}
                  <div
                    className="relative w-full h-11/12 rounded-3xl overflow-hidden -mt-8 -ml-0"
                    style={{
                      borderRadius: '1.5rem',
                      WebkitBorderRadius: '1.5rem',
                      MozBorderRadius: '1.5rem'
                    }}
                  >
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      style={{
                        borderRadius: '1.5rem',
                        WebkitBorderRadius: '1.5rem',
                        MozBorderRadius: '1.5rem'
                      }}
                      muted
                      autoPlay
                      loop
                      playsInline
                      // onPlay={() => setIsPlaying(true)}
                      // onPause={() => setIsPlaying(false)}
                      // onEnded={() => setIsPlaying(false)}
                    >
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play Button Overlay - Opens Popup */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="text-white hover:bg-white/20 p-4 md:p-6 relative z-10 rounded-full border-2 border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                        onClick={openVideoPopup}
                      >
                        <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className="sr-only">Open video in popup</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[250px] relative rounded-tr-3xl rounded-bl-3xl overflow-hidden bg-gray-100">
                  <button
                    className="text-gray-600 hover:bg-gray-200 p-4 md:p-6 relative z-10 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all"
                    onClick={onVideoPlay}
                  >
                    <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="sr-only">Watch video</span>
                  </button>

                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-gray-600 text-sm md:text-base font-semibold z-10 flex items-center gap-2">
                    <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch video
                  </div>
                </div>
              )}
            </div>

            {/* Section 4 - Statistics and Coaching Info (Bottom Right) - Curved on Top Left - 2/5 width */}
            <div className="relative bg-[#efefef]  rounded-tl-3xl rounded-br-3xl rounded-tr-3xl md:col-span-2 z-25">
              <div className="px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-8 flex flex-col justify-center min-h-[240px] md:min-h-[280px] lg:min-h-[300px] relative z-30">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  Your network determines your net worth. But building the right connections takes time you don&apos;t have. Corporate Connections brings together Navi Mumbai&apos;s most influential executives, decision-makers, and industry leaders in private forums.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  Skip the small talk. Build relationships that matter. Access opportunities that transform your business and expand your influence across industries.
                </p>

                {/* Buttons - Stacked vertically with better styling */}
                <div className="flex flex-col gap-3">
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl">
                    Join the Executive Circle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Popup Modal */}
        {showPopup && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={(e) => {
              // Close popup when clicking on the background
              if (e.target === e.currentTarget) {
                closeVideoPopup();
              }
            }}
          >
            <div className="relative bg-black rounded-3xl overflow-hidden w-full h-full max-w-6xl max-h-[80vh] flex flex-col">
              {/* Close Button */}
              <button
                onClick={closeVideoPopup}
                className="absolute top-4 right-4 z-30 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2 backdrop-blur-sm"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>

              {/* Video Player */}
              <div className="relative flex-1 flex items-center justify-center">
                <video
                  ref={popupVideoRef}
                  className="w-full h-full object-contain rounded-3xl"
                  style={{
                    borderRadius: '1.5rem'
                  }}
                  controls
                  autoPlay
                  muted={false}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="w-full bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8 lg:py-10">


          {/* 2x2 Grid with Interlocking Curves - Reordered sections */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0  overflow-hidden  rounded-3xl">

           
      {/* Background Gradient - Subtle angled effect */}
      <div className="absolute w-[80%] h-[60%] left-[5%] top-[-10%] bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[#ffffff] rounded-full transform rotate-[-55deg] z-15 hidden sm:block  blur-lg"></div> 
            {/* Section 1 - BNI Logo (Top Left) - Curved on Top Right and Bottom Left - 2/5 width (small box) */}
            <div className="relative bg-white rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden md:col-span-2 z-30 order-2 md:order-1">
              <div className="p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[250px] relative z-30">
                <Image
                  src="/images/venture/tab.png"
                  alt="BNI Logo"
                  width={200}
                  height={100}
                  className="max-w-full h-auto  object-contain z-30"
                />
              </div>
            </div>


            {/* Section 2 - Expert Guidance Text (Top Right) - Curved on Bottom Left - 3/5 width */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl rounded-tl-3xl md:col-span-3 z-25 order-1 md:order-2">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                  <span className="font-bold uppercase">THE ALTERNATIVE BOARD</span>
                  <br />
                  <span className="font-normal lowercase">Strategic Leadership Circle</span>
                </h2>
              </div>
            </div>

            {/* Section 3 - Statistics and Coaching Info (Bottom Left) - Curved on Top Right - 2/5 width */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl  rounded-tl-3xl md:col-span-2 z-25 order-4 md:order-3">
              <div className="px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-8 flex flex-col justify-center min-h-[240px] md:min-h-[280px] lg:min-h-[300px] relative z-30">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  Your toughest business decisions shouldn&apos;t be made alone. TAB connects you with 10-12 fellow CEOs and business owners in monthly confidential sessions. Share real challenges. Get practical solutions. Plus one-on-one coaching to turn insights into action.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  Members report 23% average revenue growth and clearer long-term vision within 12 months. Because great leaders make great decisions when they have the right support.
                </p>

                {/* Buttons - Stacked vertically with better styling */}
                <div className="flex flex-col gap-3">
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl">
                    Apply for TAB Membership
                  </button>
                </div>
              </div>
            </div>

            {/* Section 4 - Video (Bottom Right) - Curved on Top Left - 3/5 width (big video section) */}
            <div className="relative bg-[#efefef] rounded-tl-3xl rounded-br-3xl rounded-tr-3xl md:col-span-3 overflow-hidden z-10 order-3 md:order-4">
              {videoUrl ? (
                <div className="relative w-full h-full min-h-[220px] sm:min-h-[200px] flex items-center justify-center z-30">
                  {/* Video Container with Unified Gradient Integration */}
                  <div
                    className="relative w-full h-11/12 rounded-3xl overflow-hidden -mt-8 -ml-0"
                    style={{
                      borderRadius: '1.5rem',
                      WebkitBorderRadius: '1.5rem',
                      MozBorderRadius: '1.5rem'
                    }}
                  >
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      style={{
                        borderRadius: '1.5rem',
                        WebkitBorderRadius: '1.5rem',
                        MozBorderRadius: '1.5rem'
                      }}
                      muted
                      autoPlay
                      loop
                      playsInline
                      // onPlay={() => setIsPlaying(true)}
                      // onPause={() => setIsPlaying(false)}
                      // onEnded={() => setIsPlaying(false)}
                    >
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play Button Overlay - Opens Popup */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        className="text-white hover:bg-white/20 p-4 md:p-6 relative z-10 rounded-full border-2 border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                        onClick={openVideoPopup}
                      >
                        <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className="sr-only">Open video in popup</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[250px] relative rounded-tl-3xl overflow-hidden bg-gray-100">
                  <button
                    className="text-gray-600 hover:bg-gray-200 p-4 md:p-6 relative z-10 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all"
                    onClick={onVideoPlay}
                  >
                    <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="sr-only">Watch video</span>
                  </button>

                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-gray-600 text-sm md:text-base font-semibold z-10 flex items-center gap-2">
                    <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch video
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Video Popup Modal */}
        {showPopup && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={(e) => {
              // Close popup when clicking on the background
              if (e.target === e.currentTarget) {
                closeVideoPopup();
              }
            }}
          >
            <div className="relative bg-black rounded-3xl overflow-hidden w-full h-full max-w-6xl max-h-[80vh] flex flex-col">
              {/* Close Button */}
              <button
                onClick={closeVideoPopup}
                className="absolute top-4 right-4 z-30 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2 backdrop-blur-sm"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>

              {/* Video Player */}
              <div className="relative flex-1 flex items-center justify-center">
                <video
                  ref={popupVideoRef}
                  className="w-full h-full object-contain rounded-3xl"
                  style={{
                    borderRadius: '1.5rem'
                  }}
                  controls
                  autoPlay
                  muted={false}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}  