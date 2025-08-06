"use client"

import Image from "next/image"
import { useState, useRef } from "react"

interface VentureDetailProps {
  videoUrl?: string
  onVideoPlay?: () => void
}

export default function VentureDetail({ videoUrl, onVideoPlay }: VentureDetailProps = {}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const popupVideoRef = useRef<HTMLVideoElement>(null)

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
    <div className="w-full">
      <section className="w-full bg-[#efefef]">
      <div className="container mx-auto px-4 md:px-0 max-w-[1400px] py-6 md:py-8 lg:py-10">
       

        {/* 2x2 Grid with Interlocking Curves - Reordered sections */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0  overflow-hidden  rounded-3xl">
          
          {/* Background Image - Visible Only in Image and Video Sections */}
          <div 
            className="absolute inset-0 w-200 h-100 left-68 top-20 -translate-x-1/2 -translate-y-1/2  z-15 mx-auto my-auto bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/gradient/01.png)'
            }}
          ></div>

                                           {/* Section 1 - BNI Logo (Top Left) - Curved on Top Right and Bottom Left - 2/5 width (small box) */}
            <div className="relative bg-white rounded-tr-3xl rounded-bl-3xl overflow-hidden md:col-span-2 z-30">
             <div className="p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[250px] relative z-30">
              <Image
                src="/images/venture/ff445e7d753b31b4df15ae1abb0ec9a02f4d3b94.png"
                alt="BNI Logo"
                width={200}
                height={100}
                className="max-w-full h-auto  object-contain z-30"
              />
            </div>
          </div>

                                           {/* Section 2 - Expert Guidance Text (Top Right) - Curved on Bottom Left - 3/5 width */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl md:col-span-3 z-25">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                 Expert guidance for your path
               </h2>
             </div>
           </div>

                     {/* Section 3 - Statistics and Coaching Info (Bottom Left) - Curved on Top Right - 2/5 width */}
           <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl md:col-span-2 z-25">
             <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
               {/* Statistics - Side by side with better spacing */}
               <div className="flex justify-start gap-8 mb-8">
                 <div className="text-left">
                   <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">81%</div>
                   <div className="text-gray-700 text-base md:text-lg font-medium leading-snug">improved time<br/>management</div>
                 </div>
                 
                 <div className="text-left">
                   <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">70%</div>
                   <div className="text-gray-700 text-base md:text-lg font-medium leading-snug">increased work<br/>performance</div>
                 </div>
               </div>

               <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 font-medium text-left max-w-none">
                 Achieve lasting transformation in all areas of your life. Discover the support you need to do more, be more and serve more with one-on-one strategy sessions with our expert results coaches.
               </p>

               {/* Buttons - Stacked vertically with better styling */}
               <div className="flex flex-col gap-3">
                 <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl">
                   Results coaching
                 </button>
                 <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl">
                   Business coaching
                 </button>
               </div>
             </div>
           </div>

          {/* Section 4 - Video (Bottom Right) - Curved on Top Left - 3/5 width (big video section) */}
          <div className="relative bg-[#efefef]  rounded-tl-3xl md:col-span-3 overflow-hidden z-10">
            {videoUrl ? (
              <div className="relative w-full h-full min-h-[250px] flex items-center justify-center z-30">
                {/* Video Container with Unified Gradient Integration */}
                                 <div 
                   className="relative w-full h-11/12 rounded-3xl overflow-hidden -mt-10 -ml-0"
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
                      className="text-white hover:bg-white/20 p-4 md:p-6 relative z-10 rounded-full border-2 border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                      onClick={openVideoPopup}
                    >
                      <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span className="sr-only">Open video in popup</span>
                    </button>
                  </div>
                
                  {/* Mute/Unmute Button Overlay */}
                  <button
                    className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full border border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                    onClick={handleMuteToggle}
                  >
                    {isMuted ? (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    )}
                    <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[250px] relative rounded-tl-3xl overflow-hidden bg-gray-100">
                <button
                  className="text-gray-600 hover:bg-gray-200 p-4 md:p-6 relative z-10 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all"
                  onClick={onVideoPlay}
                >
                  <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span className="sr-only">Watch video</span>
                </button>

                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-gray-600 text-sm md:text-base font-semibold z-10 flex items-center gap-2">
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
    {/* Second VentureDetail Section - Mirrored Layout */}
    <section className="w-full bg-[#efefef]">
      <div className="container mx-auto px-4 md:px-0 max-w-[1400px] py-6 md:py-8 lg:py-10">
        
 
        {/* 2x2 Grid with Interlocking Curves - Mirrored sections */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0  overflow-hidden  rounded-3xl">
          
          {/* Background Image - Visible Only in Image and Video Sections */}
          <div 
            className="absolute inset-0 w-200 h-100 -right-330 top-20 -translate-x-1/2 -translate-y-1/2  z-15 mx-auto my-auto bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/gradient/02.png)'
            }}
          ></div>


                                                                                                                                       {/* Section 1 - Expert Guidance Text (Top Left) - Curved on Bottom Right - 3/5 width */}
               <div className="relative bg-[#efefef] rounded-tr-3xl rounded-br-3xl md:col-span-3 z-25">
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                   Expert guidance for your path
                 </h2>
               </div>
             </div>

                       {/* Section 2 - Corporate Connections Logo (Top Right) - Curved on Top Left and Bottom Right - 2/5 width (small box) */}
             <div className="relative bg-transparent rounded-tl-3xl rounded-br-3xl overflow-hidden md:col-span-2 z-30">
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
                <div className="relative w-full h-full min-h-[250px] flex items-center justify-center z-30">
                                     {/* Video Container with Unified Gradient Integration */}
                                      <div 
                      className="relative w-full h-11/12 rounded-3xl overflow-hidden -mt-10 -ml-0"
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
                       className="text-white hover:bg-white/20 p-4 md:p-6 relative z-10 rounded-full border-2 border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                       onClick={openVideoPopup}
                     >
                       <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                         <path d="M8 5v14l11-7z"/>
                       </svg>
                       <span className="sr-only">Open video in popup</span>
                     </button>
                   </div>
                 
                   {/* Mute/Unmute Button Overlay */}
                   <button
                     className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full border border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                     onClick={handleMuteToggle}
                   >
                     {isMuted ? (
                       <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                         <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                       </svg>
                     ) : (
                       <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                         <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                       </svg>
                     )}
                     <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
                   </button>
                 </div>
               </div>
             ) : (
               <div className="flex items-center justify-center min-h-[250px] relative rounded-tr-3xl rounded-bl-3xl overflow-hidden bg-gray-100">
                 <button
                   className="text-gray-600 hover:bg-gray-200 p-4 md:p-6 relative z-10 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all"
                   onClick={onVideoPlay}
                 >
                   <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                     <path d="M8 5v14l11-7z"/>
                   </svg>
                   <span className="sr-only">Watch video</span>
                 </button>

                 <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-gray-600 text-sm md:text-base font-semibold z-10 flex items-center gap-2">
                   <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                     <path d="M8 5v14l11-7z"/>
                   </svg>
                   Watch video
                 </div>
               </div>
             )}
           </div>

           {/* Section 4 - Statistics and Coaching Info (Bottom Right) - Curved on Top Left - 2/5 width */}
            <div className="relative bg-[#efefef]  rounded-tl-3xl rounded-br-3xl md:col-span-2 z-25">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
                {/* Statistics - Side by side with better spacing */}
                <div className="flex justify-start gap-8 mb-8">
                  <div className="text-left">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">81%</div>
                    <div className="text-gray-700 text-base md:text-lg font-medium leading-snug">improved time<br/>management</div>
                  </div>
                  
                  <div className="text-left">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">70%</div>
                    <div className="text-gray-700 text-base md:text-lg font-medium leading-snug">increased work<br/>performance</div>
                  </div>
                </div>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 font-medium text-left max-w-none">
                  Achieve lasting transformation in all areas of your life. Discover the support you need to do more, be more and serve more with one-on-one strategy sessions with our expert results coaches.
                </p>

                {/* Buttons - Stacked vertically with better styling */}
                <div className="flex flex-col gap-3">
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl">
                    Results coaching
                  </button>
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl">
                    Business coaching
                  </button>
                </div>
              </div>
            </div>
                   </div>
        </div>
      </section>
      <section className="w-full bg-[#efefef]">
      <div className="container mx-auto px-4 md:px-0 max-w-[1400px] py-6 md:py-8 lg:py-10">
       

        {/* 2x2 Grid with Interlocking Curves - Reordered sections */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0  overflow-hidden  rounded-3xl">
          
          {/* Background Image - Visible Only in Image and Video Sections */}
          <div 
            className="absolute inset-0 w-200 h-100 left-68 top-20 -translate-x-1/2 -translate-y-1/2  z-15 mx-auto my-auto bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/gradient/01.png)'
            }}
          ></div>

                                           {/* Section 1 - BNI Logo (Top Left) - Curved on Top Right and Bottom Left - 2/5 width (small box) */}
            <div className="relative bg-white rounded-tr-3xl rounded-bl-3xl overflow-hidden md:col-span-2 z-30">
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
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl md:col-span-3 z-25">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                 Expert guidance for your path
               </h2>
             </div>
           </div>

                     {/* Section 3 - Statistics and Coaching Info (Bottom Left) - Curved on Top Right - 2/5 width */}
           <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl md:col-span-2 z-25">
             <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
               {/* Statistics - Side by side with better spacing */}
               <div className="flex justify-start gap-8 mb-8">
                 <div className="text-left">
                   <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">81%</div>
                   <div className="text-gray-700 text-base md:text-lg font-medium leading-snug">improved time<br/>management</div>
                 </div>
                 
                 <div className="text-left">
                   <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">70%</div>
                   <div className="text-gray-700 text-base md:text-lg font-medium leading-snug">increased work<br/>performance</div>
                 </div>
               </div>

               <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 font-medium text-left max-w-none">
                 Achieve lasting transformation in all areas of your life. Discover the support you need to do more, be more and serve more with one-on-one strategy sessions with our expert results coaches.
               </p>

               {/* Buttons - Stacked vertically with better styling */}
               <div className="flex flex-col gap-3">
                 <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl">
                   Results coaching
                 </button>
                 <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl">
                   Business coaching
                 </button>
               </div>
             </div>
           </div>

          {/* Section 4 - Video (Bottom Right) - Curved on Top Left - 3/5 width (big video section) */}
          <div className="relative bg-[#efefef] rounded-tl-3xl md:col-span-3 overflow-hidden z-10">
            {videoUrl ? (
              <div className="relative w-full h-full min-h-[250px] flex items-center justify-center z-30">
                {/* Video Container with Unified Gradient Integration */}
                                 <div 
                   className="relative w-full h-11/12 rounded-3xl overflow-hidden -mt-10 -ml-0"
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
                      className="text-white hover:bg-white/20 p-4 md:p-6 relative z-10 rounded-full border-2 border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                      onClick={openVideoPopup}
                    >
                      <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span className="sr-only">Open video in popup</span>
                    </button>
                  </div>
                
                  {/* Mute/Unmute Button Overlay */}
                  <button
                    className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full border border-white/30 hover:border-white/50 transition-all backdrop-blur-sm"
                    onClick={handleMuteToggle}
                  >
                    {isMuted ? (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    )}
                    <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[250px] relative rounded-tl-3xl overflow-hidden bg-gray-100">
                <button
                  className="text-gray-600 hover:bg-gray-200 p-4 md:p-6 relative z-10 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all"
                  onClick={onVideoPlay}
                >
                  <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span className="sr-only">Watch video</span>
                </button>

                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-gray-600 text-sm md:text-base font-semibold z-10 flex items-center gap-2">
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
    </div>
  )
}  