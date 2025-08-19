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
      <section className="w-full bg-white py-4 sm:py-6 md:py-8 lg:py-10">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 flex flex-col">
          {/* Header */}
          <div className="mb-2 sm:mb-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 mt-8">Mr. Pankaj Harwansh</h1>
          </div>

        {/* 2x2 Grid with Interlocking Curves - No Gaps */}
        <div className="relative grid grid-cols-1 md:grid-cols-6 items-stretch gap-0 overflow-hidden rounded-2xl sm:rounded-3xl"
             style={{ gridGap: '0px' }}>
          
         {/* Background Gradient - Subtle angled effect */}
          <div className="absolute w-[38%] h-[38%] left-[48%] top-[40%] bg-gradient-to-bl from-[#3973cb] via-[#3973cb] to-[#3973cb] rounded-full transform rotate-[-40deg] z-15 hidden sm:block opacity-100 blur-lg"></div> 

          {/* Section 1 - Photo (Top Left) - Curved on Top Right, Bottom Right, and Bottom Left - 4/6 width */}
          <div className="relative bg-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-bl-3xl overflow-hidden md:col-span-4 z-10 min-h-[300px] sm:min-h-[400px] md:h-[480px] lg:h-[540px]">
            <Image
              src="/images/bbg2.png"
              alt="Mr. Pankaj Harwansh"
              fill
              className="object-cover object-center"
              style={{
                objectPosition: 'center 1%'
              }}
              sizes="(max-width: 768px) 100vw, 60vw"
            />

          </div>

          {/* Section 2 - Description (Top Right) - Curved on Top Left and Bottom Left - 2/6 width */}
          <div className="relative bg-white rounded-tl-2xl rounded-bl-2xl sm:rounded-tl-3xl sm:rounded-bl-3xl md:col-span-2 z-25">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[300px] sm:min-h-[360px] md:h-[440px] lg:h-[500px] relative z-30">
              <div className="w-full mx-auto">
                <p className=" max-w-[350px] text-gray-800 text-xs sm:text-sm md:text-base lg:text-[22x] leading-relaxed mb-6 sm:mb-8 md:mb-10 font-medium">
                  Every turning point in life starts with a single step: awareness. That&apos;s where real change happens. Discover honest conversations, practical tools, and a space where your questions are welcome no matter how big or small. Transform the way you think, feel, and succeed.
                </p>

                <button
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 w-fit px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-4 rounded-full font-semibold text-xs sm:text-xs md:text-sm transition-colors shadow-sm"
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>

          {/* Section 3 - Our Ventures (Bottom Left) - Curved on Top Left and Top Right - 4/6 width */}
          <div className="relative bg-white rounded-tl-2xl rounded-tr-2xl sm:rounded-tl-3xl sm:rounded-tr-3xl md:col-span-4 z-25 order-2 md:order-2">
            <div className="pl-3 sm:pl-4 md:pl-6 lg:pl-6 pr-4 sm:pr-6 md:pr-8 lg:pr-10 py-4 sm:py-6 md:py-8 flex flex-col justify-center min-h-[180px] sm:min-h-[200px] md:h-[250px] lg:h-[280px] relative z-30">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 mb-3 sm:mb-4 md:mb-6 text-left">Our Ventures:</h3>

              {/* Single Row Layout for Logos - LARGER SIZES */}
              <div className="flex justify-start items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 pb-2 -ml-2">
              <div className="flex justify-center flex-shrink-0 mr-2">
                  <Image
                    src="/images/venture/tab.png"
                    alt="Venture 4"
                    width={200}
                    height={90}
                    className="max-w-full h-auto object-contain w-28 sm:w-36 md:w-44 lg:w-48"
                  />
                </div>
               
               
               
                <div className="flex justify-center flex-shrink-0 -mr-2 sm:-mr-3 md:-mr-2">
                  <Image
                    src="/images/venture/d7ddf110031b054df193d8ae5b7aab1295e2887a.png"
                    alt="Venture 3"
                    width={200}
                    height={90}
                    className="max-w-full h-auto object-contain w-28 sm:w-36 md:w-44 lg:w-48"
                  />
                </div>
                <div className="flex justify-center flex-shrink-0 -mr-2 sm:-mr-3 md:-mr-6">
                  <Image
                    src="/images/venture/ff445e7d753b31b4df15ae1abb0ec9a02f4d3b94.png"
                    alt="Venture 2"
                    width={180}
                    height={90}
                    className="max-w-full h-auto object-contain w-28 sm:w-36 md:w-44 lg:w-48"
                  />
                </div>

               
                <div className="flex justify-center flex-shrink-0 -ml-2 sm:-ml-3 md:-ml-4">
                  <Image
                    src="/images/venture/3196da117abd22b30b9d753b8a9f6c31b50c4382.png"
                    alt="Venture 1"
                    width={180}
                    height={90}
                    className="max-w-full h-auto object-contain w-28 sm:w-36 md:w-44 lg:w-48"
                  />
                </div>

               
                
              </div>
            </div>
          </div>

          {/* Section 4 - Video (Bottom Right) - Curved on Top Left and Bottom Left - 2/6 width */}
          <div className="relative bg-white rounded-tl-2xl rounded-bl-2xl sm:rounded-tl-3xl sm:rounded-bl-3xl md:col-span-2 overflow-hidden z-10 order-1 md:order-4">
                        {videoUrl ? (
              <div className="relative w-full h-full min-h-[180px] sm:min-h-[200px] md:h-[250px] lg:h-[280px] flex items-center justify-center z-30">
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
              <div className="flex items-center justify-center min-h-[140px] sm:min-h-[160px] md:h-[190px] lg:h-[210px] relative rounded-tl-2xl sm:rounded-tl-3xl overflow-hidden bg-gray-100">
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