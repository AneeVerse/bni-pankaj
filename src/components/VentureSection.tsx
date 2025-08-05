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
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isMuted) {
        // Enable sound and play
        videoRef.current.muted = false
        setIsMuted(false)
        setIsPlaying(true)
      } else {
        // Mute and keep playing
        videoRef.current.muted = true
        setIsMuted(true)
        setIsPlaying(false)
      }
    }
    onVideoPlay?.()
  }
      return (
      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Mr. Pankaj Harwansh</h1>
          </div>

        {/* 2x2 Grid with Interlocking Curves - 60/40 split */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 shadow-2xl overflow-hidden bg-gradient-to-br from-[#245cd9] via-[#245cd9]/100 to-[#245cd9]/100 rounded-3xl">
          {/* Section 1 - Photo (Top Left) - Curved on Bottom Right - 3/5 width */}
          <div className="relative bg-white rounded-tl-3xl rounded-br-3xl overflow-hidden md:col-span-3">
            <Image
              src="/images/venture.png"
              alt="Mr. Pankaj Harwansh"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-blue-600/40 to-blue-700/50"></div>
          </div>

          {/* Section 2 - Description (Top Right) - Curved on Bottom Left - 2/5 width */}
          <div className="bg-white rounded-tr-3xl rounded-bl-3xl md:col-span-2">
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[400px]">
              <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 font-medium">
                At BNI Navi Mumbai, we believe in the power of relationships and the exponential growth that comes from
                genuine connections. For over a decade, we have been the driving force behind countless success stories,
                connecting business professionals and fostering thriving networks that propel businesses to new heights.
              </p>

              <button
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 w-fit px-6 md:px-8 py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-colors"
              >
                Meet Pankaj Harwansh
              </button>
            </div>
          </div>

          {/* Section 3 - Our Ventures (Bottom Left) - Curved on Top Right - 3/5 width - INCREASED PADDING */}
          <div className="relative bg-white rounded-tr-3xl rounded-bl-3xl md:col-span-3">
            <div className="px-8 md:px-12 lg:px-16 py-6 md:py-8 flex flex-col justify-center min-h-[200px] md:min-h-[250px]">
              <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-4 md:mb-6">Our Ventures:</h3>

              {/* Single Row Layout for Logos - LARGER SIZES */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-8 lg:gap-12">
                <div className="flex justify-center">
                  <Image
                    src="/images/venture/3196da117abd22b30b9d753b8a9f6c31b50c4382.png"
                    alt="Venture 1"
                    width={140}
                    height={70}
                    className="max-w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/images/venture/ff445e7d753b31b4df15ae1abb0ec9a02f4d3b94.png"
                    alt="Venture 2"
                    width={140}
                    height={70}
                    className="max-w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/images/venture/d7ddf110031b054df193d8ae5b7aab1295e2887a.png"
                    alt="Venture 3"
                    width={100}
                    height={50}
                    className="max-w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/images/venture/5762e34aca8b145a55270b53acf429fac1cee68c (1).png"
                    alt="Venture 4"
                    width={160}
                    height={70}
                    className="max-w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 - Video (Bottom Right) - Curved on Top Left - 2/5 width */}
          <div className="relative bg-gradient-to-br from-[#245cd9]/70 to-[#245cd9]/50 rounded-tl-3xl md:col-span-2 overflow-hidden">
            {/* Subtle gradient overlay for top-left corner */}
            <div className="absolute -top-28 -left-28 rotate-310 w-42 h-52 bg-gradient-to-br from-[#245cd9]/100  via-[#245cd9]/100 to-[#245cd9]/40 rounded-tl-3xl z-10"></div>
            {videoUrl ? (
              <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-tl-3xl"
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
                
                {/* Custom Video Controls Overlay */}
                {isMuted && (
                  <div className="absolute inset-0 bg-black/40 rounded-tl-3xl flex items-center justify-center">
                    <button
                      className="text-white hover:bg-white/20 p-4 md:p-6 relative z-10 rounded-full border-2 border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                      onClick={handleVideoPlay}
                    >
                      <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span className="sr-only">Enable sound</span>
                    </button>
                  </div>
                )}
                
                {/* Video Title Overlay */}
                <div className="absolute top-4 left-4 text-white text-sm md:text-base font-semibold z-10 bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                  "What is the force that controls the quality of our lives?"
                </div>
                
                {/* Mute/Unmute Button Overlay */}
                {!isMuted && (
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-3 rounded-full border-2 border-white/30 hover:border-white/50 transition-all backdrop-blur-sm opacity-0 hover:opacity-100"
                    onClick={handleVideoPlay}
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                    <span className="sr-only">Mute video</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[200px] md:min-h-[250px] relative rounded-tl-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#245cd9]/70 to-[#245cd9]/50"></div>

                <button
                  className="text-white hover:bg-white/20 p-4 md:p-6 relative z-10 rounded-full border-2 border-white/30 hover:border-white/50 transition-all"
                  onClick={onVideoPlay}
                >
                  <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span className="sr-only">Watch video</span>
                </button>

                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white text-sm md:text-base font-semibold z-10 flex items-center gap-2">
                  <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch video
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 