"use client"

import Image from "next/image"
import { useState, useRef } from "react"

interface VentureSectionProps {
  videoUrl?: string
  onVideoPlay?: () => void
}

export default function VentureSection({ videoUrl, onVideoPlay }: VentureSectionProps = {}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const popupVideoRef = useRef<HTMLVideoElement>(null)

  // Removed unused handleVideoToggle function

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const openVideoPopup = () => {
    setShowPopup(true)
    // Pause the main video when opening popup
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const closeVideoPopup = () => {
    setShowPopup(false)
    // Pause the popup video when closing
    if (popupVideoRef.current) {
      popupVideoRef.current.pause()
    }
  }
      return (
      <section className="w-full bg-white py-8 sm:py-10 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-0 max-w-[1400px]">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">Mr. Pankaj Harwansh</h1>
          </div>

        {/* 2x2 Grid with Interlocking Curves - No Gaps */}
        <div className="relative grid grid-cols-1 md:grid-cols-6 gap-0 overflow-hidden rounded-2xl sm:rounded-3xl"
             style={{ gridGap: '0px' }}>
          
          {/* Background Gradient - Subtle angled effect */}
          <div className="absolute w-[60%] h-[40%] left-[40%] top-[30%] bg-gradient-to-bl from-[#245cd9]/60 via-[#245cd9]/40 to-[#245cd9]/20 rounded-full transform rotate-[-15deg] z-15"></div>

          {/* Section 1 - Photo (Top Left) - Curved on Top Right, Bottom Right, and Bottom Left - 4/6 width */}
          <div className="relative bg-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-bl-3xl overflow-hidden md:col-span-4 z-10 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
            <Image
              src="/images/hero-bg1.jpg"
              alt="Mr. Pankaj Harwansh"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
            />

          </div>

          {/* Section 2 - Description (Top Right) - Curved on Top Left and Bottom Left - 2/6 width */}
          <div className="relative bg-white rounded-tl-2xl rounded-bl-2xl sm:rounded-tl-3xl sm:rounded-bl-3xl md:col-span-2 z-25">
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] relative z-30">
              <div className="w-full mx-auto">
                <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 font-medium">
                  At BNI Navi Mumbai, we believe in the power of relationships and the exponential growth that comes from
                  genuine connections. For over a decade, we have been the driving force behind countless success stories,
                  connecting business professionals and fostering thriving networks that propel businesses to new heights.
                </p>

                <button
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 w-fit px-4 sm:px-6 md:px-8 py-2 sm:py-2 md:py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-colors"
                >
                  Meet Pankaj Harwansh
                </button>
              </div>
            </div>
          </div>

          {/* Section 3 - Our Ventures (Bottom Left) - Curved on Top Left and Top Right - 4/6 width */}
          <div className="relative bg-white rounded-tl-2xl rounded-tr-2xl sm:rounded-tl-3xl sm:rounded-tr-3xl md:col-span-4 z-25">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 flex flex-col justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[250px] relative z-30">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 mb-3 sm:mb-4 md:mb-6 text-left">Our Ventures:</h3>

              {/* Single Row Layout for Logos - LARGER SIZES */}
              <div className="flex justify-start items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-2">
                <div className="flex justify-center flex-shrink-0">
                  <Image
                    src="/images/venture/3196da117abd22b30b9d753b8a9f6c31b50c4382.png"
                    alt="Venture 1"
                    width={180}
                    height={90}
                    className="max-w-full h-auto object-contain w-20 sm:w-24 md:w-32 lg:w-auto"
                  />
                </div>

                <div className="flex justify-center flex-shrink-0">
                  <Image
                    src="/images/venture/ff445e7d753b31b4df15ae1abb0ec9a02f4d3b94.png"
                    alt="Venture 2"
                    width={180}
                    height={90}
                    className="max-w-full h-auto object-contain w-20 sm:w-24 md:w-32 lg:w-auto"
                  />
                </div>

                <div className="flex justify-center flex-shrink-0">
                  <Image
                    src="/images/venture/d7ddf110031b054df193d8ae5b7aab1295e2887a.png"
                    alt="Venture 3"
                    width={140}
                    height={70}
                    className="max-w-full h-auto object-contain w-16 sm:w-20 md:w-24 lg:w-auto"
                  />
                </div>

                <div className="flex justify-center flex-shrink-0">
                  <Image
                    src="/images/venture/tab.png"
                    alt="Venture 4"
                    width={200}
                    height={90}
                    className="max-w-full h-auto object-contain w-24 sm:w-28 md:w-36 lg:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 - Video (Bottom Right) - Curved on Top Left and Bottom Left - 2/6 width */}
          <div className="relative bg-white rounded-tl-2xl rounded-bl-2xl sm:rounded-tl-3xl sm:rounded-bl-3xl md:col-span-2 overflow-hidden z-10">
                        {videoUrl ? (
              <div className="relative w-full h-full min-h-[180px] sm:min-h-[200px] md:min-h-[250px] flex items-center justify-center z-30">
                {/* Video Container with Unified Gradient Integration */}
                <div 
                  className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden"
                  style={{
                    borderRadius: '1rem',
                    WebkitBorderRadius: '1rem',
                    MozBorderRadius: '1rem'
                  }}
                >
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    style={{
                      borderRadius: '1rem',
                      WebkitBorderRadius: '1rem',
                      MozBorderRadius: '1rem'
                    }}
                    muted
                    autoPlay
                    loop
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  

                  
                  {/* Play Button Overlay - Opens Popup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="text-white hover:bg-white/20 p-3 sm:p-4 md:p-6 relative z-10 rounded-full border-2 border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                      onClick={openVideoPopup}
                    >
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span className="sr-only">Open video in popup</span>
                    </button>
                  </div>
                
                  
                  {/* Mute/Unmute Button Overlay */}
                  <button
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white/20 p-1.5 sm:p-2 rounded-full border border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                    onClick={handleMuteToggle}
                  >
                    {isMuted ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    )}
                    <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[250px] relative rounded-tl-2xl sm:rounded-tl-3xl overflow-hidden bg-gray-100">
                <button
                  className="text-gray-600 hover:bg-gray-200 p-3 sm:p-4 md:p-6 relative z-10 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all"
                  onClick={onVideoPlay}
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span className="sr-only">Watch video</span>
                </button>

                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 text-gray-600 text-xs sm:text-sm md:text-base font-semibold z-10 flex items-center gap-1 sm:gap-2">
                  <svg className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeVideoPopup}
              className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>

            {/* Video Player */}
            <div className="relative">
              <video
                ref={popupVideoRef}
                className="w-full h-auto max-h-[70vh] object-contain"
                controls
                autoPlay
                muted={false}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Title */}
              <div className="absolute top-4 left-4 text-white text-lg font-semibold z-10 bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                &ldquo;What is the force that controls the quality of our lives?&rdquo;
              </div>
            </div>

          
          </div>
        </div>
      )}
    </section>
  )
} 