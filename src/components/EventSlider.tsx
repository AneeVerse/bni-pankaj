"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface EventCard {
  id: number
  title: string
  subtitle: string
  description: string
  videoUrl: string
}

const events: EventCard[] = [
  {
    id: 1,
    title: "BUSINESS MASTERY",
    subtitle: "TONY ROBBINS",
    description: "Grow your business exponentially",
    videoUrl: "/video/VIDEOS/Copy of CC Experience meet August.mp4"
  },
  {
    id: 2,
    title: "LEADERSHIP ACADEMY",
    subtitle: "TONY ROBBINS", 
    description: "Become a great leader",
    videoUrl: "/video/VIDEOS/Copy of Untitled design 45.mp4"
  },
  {
    id: 3,
    title: "DATE WITH DESTINY",
    subtitle: "TONY ROBBINS",
    description: "Create life according to your terms",
    videoUrl: "/video/VIDEOS/Copy of Amit Pawar BNI AGNI.mp4"
  },
  {
    id: 4,
    title: "UNLEASH THE POWER WITHIN",
    subtitle: "TONY-ROBBINS",
    description: "Experience explosive growth",
    videoUrl: "/video/VIDEOS/Copy of ADV Swati KUmar.mp4"
  },
  {
    id: 5,
    title: "LIFE MASTERY",
    subtitle: "TONY ROBBINS",
    description: "Master mind and body",
    videoUrl: "/video/VIDEOS/Copy of Prof. Ravi Aahlawat.mp4"
  },
  {
    id: 6,
    title: "COLLABORATION",
    subtitle: "TONY ROBBINS",
    description: "Build powerful partnerships",
    videoUrl: "/video/VIDEOS/Copy of COLLABORATION.mp4"
  }
]

export default function EventSlider() {
  // Rendered duplicates for seamless loop
  const DUPLICATES = 3
  const renderedEvents = Array.from({ length: DUPLICATES })
    .flatMap((_, dupIdx) => events.map((e) => ({ ...e, __dup: dupIdx })))

  // Measurements and animation state
  const [slideSize, setSlideSize] = useState<number>(244) // px per card incl. gap
  const [activeIndex, setActiveIndex] = useState<number>(0) // 0..events.length-1
  const [renderTranslateX, setRenderTranslateX] = useState<number>(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)

  // Video popup state
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState<boolean>(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("")
  // const [currentVideoTitle, setCurrentVideoTitle] = useState<string>("")

  // Continuous position in px relative to the start of the middle copy
  // Negative values move left. We wrap this value within one copy width.
  const basePositionRef = useRef<number>(0)

  // Pointer drag state (mouse/touch unified)
  const isPointerDownRef = useRef<boolean>(false)
  const dragStartXRef = useRef<number>(0)
  const dragDeltaRef = useRef<number>(0)

  // Smooth snap animation state
  const isSnappingRef = useRef<boolean>(false)
  const snapStartRef = useRef<number>(0)
  const snapTargetRef = useRef<number>(0)
  const snapStartTimeRef = useRef<number>(0)
  const snapDurationMsRef = useRef<number>(300)

  // Video popup functions
  const openVideoPopup = (videoUrl: string, _title: string) => {
    setCurrentVideoUrl(videoUrl)
    // setCurrentVideoTitle(title)
    setIsVideoPopupOpen(true)
  }

  const closeVideoPopup = () => {
    setIsVideoPopupOpen(false)
    setCurrentVideoUrl("")
    // setCurrentVideoTitle("")
  }

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoPopupOpen) {
        closeVideoPopup()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isVideoPopupOpen])

  // Set video thumbnails to 7 seconds and handle hover play
  useEffect(() => {
    const videos = document.querySelectorAll('video')
    const cleanupFunctions: (() => void)[] = []
    
    videos.forEach((video) => {
      // Set initial thumbnail to 7 seconds for desktop, 6 seconds for mobile
      const isMobile = window.innerWidth < 640
      video.currentTime = isMobile ? 6 : 7
      
      // Add event listener to restart from appropriate time when video loops
      const handleTimeUpdate = () => {
        const isMobile = window.innerWidth < 640
        const targetTime = isMobile ? 6 : 7
        if (video.currentTime < targetTime) {
          video.currentTime = targetTime
        }
      }
      
      video.addEventListener('timeupdate', handleTimeUpdate)
      
      // Auto-play on mobile
      if (window.innerWidth < 640) {
        video.play().catch(() => {})
      }
      
      // Store cleanup function
      cleanupFunctions.push(() => {
        video.removeEventListener('timeupdate', handleTimeUpdate)
      })
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }, [])

  // Manual navigation helpers (adjust base position by one card)
  const nextSlide = () => {
    basePositionRef.current -= slideSize
  }

  const prevSlide = () => {
    basePositionRef.current += slideSize
  }

  // Measure slide size responsively from actual DOM
  useEffect(() => {
    const computeSlideSize = () => {
      const track = sliderRef.current
      if (!track) return
      const cards = track.querySelectorAll('[data-card="true"]')
      if (cards.length < 2) return
      const first = (cards[0] as HTMLElement).getBoundingClientRect()
      const second = (cards[1] as HTMLElement).getBoundingClientRect()
      const delta = Math.abs(second.left - first.left)
      if (delta > 0) {
        setSlideSize(delta)
      }
    }
    computeSlideSize()
    window.addEventListener('resize', computeSlideSize)
    return () => window.removeEventListener('resize', computeSlideSize)
  }, [])

  // Continuous auto-scroll animation (never pauses, seamless wrap)
  useEffect(() => {
    const speedPxPerSec = 26 // slow, smooth
    const copyWidth = events.length * slideSize

    const animate = (currentTime: number) => {
      const last = lastTimeRef.current || currentTime
      const deltaMs = currentTime - last
      lastTimeRef.current = currentTime

      // Update position when not dragging
      if (!isPointerDownRef.current) {
        if (isSnappingRef.current) {
          // Smoothly interpolate to target
          const t = Math.min(1, (currentTime - snapStartTimeRef.current) / snapDurationMsRef.current)
          const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3)
          const eased = easeOutCubic(t)
          basePositionRef.current = snapStartRef.current + (snapTargetRef.current - snapStartRef.current) * eased
          if (t >= 1) {
            basePositionRef.current = snapTargetRef.current
            isSnappingRef.current = false
          }
        } else {
          // Continuous auto-scroll
          const deltaPx = (speedPxPerSec * deltaMs) / 1000
          basePositionRef.current -= deltaPx

          // Seamless wrap within [-copyWidth, 0)
          if (basePositionRef.current <= -copyWidth) {
            basePositionRef.current += copyWidth
          } else if (basePositionRef.current >= 0) {
            basePositionRef.current -= copyWidth
          }
        }
      }

      // Apply drag delta (if any) and render transform relative to middle copy
      const x = -copyWidth + basePositionRef.current + dragDeltaRef.current
      setRenderTranslateX(x)

      // Derive active index for dots
      const rawIndex = Math.round((-basePositionRef.current) / slideSize)
      const normalized = ((rawIndex % events.length) + events.length) % events.length
      if (normalized !== activeIndex) {
        setActiveIndex(normalized)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [slideSize, activeIndex])

  // Pointer (mouse/touch) unified handlers for smooth drag without pausing
  const onPointerDown = (e: React.PointerEvent) => {
    isPointerDownRef.current = true
    dragStartXRef.current = e.clientX
    dragDeltaRef.current = 0
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return
    dragDeltaRef.current = e.clientX - dragStartXRef.current
  }

  const startSnapToNearestCard = useCallback(() => {
    // Merge drag delta into the base position and animate to the nearest card
    basePositionRef.current += dragDeltaRef.current
    dragDeltaRef.current = 0

    const copyWidth = events.length * slideSize
    // Normalize position into [-copyWidth, 0)
    if (basePositionRef.current <= -copyWidth) {
      const wraps = Math.ceil((-basePositionRef.current) / copyWidth)
      basePositionRef.current += wraps * copyWidth
    } else if (basePositionRef.current >= 0) {
      const wraps = Math.ceil(basePositionRef.current / copyWidth)
      basePositionRef.current -= wraps * copyWidth
    }

    const snapped = Math.round(basePositionRef.current / slideSize) * slideSize

    isSnappingRef.current = true
    snapStartRef.current = basePositionRef.current
    snapTargetRef.current = snapped
    snapStartTimeRef.current = performance.now()
  }, [slideSize])

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return
    isPointerDownRef.current = false
    ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
    startSnapToNearestCard()
  }

  const onPointerLeave = () => {
    if (!isPointerDownRef.current) return
    isPointerDownRef.current = false
    startSnapToNearestCard()
  }

  // Add touch event listeners with proper options to handle passive event listener issue
  useEffect(() => {
    const container = sliderRef.current
    if (!container) return

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault() // Prevent default to avoid conflicts
      if (e.touches.length === 1) {
        isPointerDownRef.current = true
        dragStartXRef.current = e.touches[0].clientX
        dragDeltaRef.current = 0
        lastTimeRef.current = performance.now()
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault() // Prevent default to avoid conflicts
      if (!isPointerDownRef.current || e.touches.length !== 1) return
      
      const currentX = e.touches[0].clientX
      const deltaX = currentX - dragStartXRef.current
      dragDeltaRef.current = deltaX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault() // Prevent default to avoid conflicts
      if (!isPointerDownRef.current) return
      
      const currentTime = performance.now()
      const timeDelta = currentTime - lastTimeRef.current
      const velocity = dragDeltaRef.current / timeDelta
      
      isPointerDownRef.current = false
      
      // Lower threshold and higher momentum for better sensitivity
      if (Math.abs(velocity) > 0.1) { // Reduced from 0.5
        const momentumDistance = velocity * 500; // Increased from 300
        dragDeltaRef.current += momentumDistance
      }
      
      startSnapToNearestCard()
    }

    // Add event listeners with passive: false to allow preventDefault
    container.addEventListener('touchstart', handleTouchStart, { passive: false })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [startSnapToNearestCard])

  // Prevent text selection on mobile
  useEffect(() => {
    const preventSelect = (e: Event) => {
      e.preventDefault()
    }

    const container = sliderRef.current
    if (container) {
      container.addEventListener('selectstart', preventSelect)
      container.addEventListener('dragstart', preventSelect)
    }

    return () => {
      if (container) {
        container.removeEventListener('selectstart', preventSelect)
        container.removeEventListener('dragstart', preventSelect)
      }
    }
  }, [])

  return (
    <section className="w-full bg-black py-8 sm:py-10 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Events that liberate
          </h2>
          
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {/* Discover Events Link */}
            <div className="hidden sm:flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer">
              <span className="text-sm md:text-base mr-2">Discover events</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          className="relative carousel-container overflow-hidden"
          style={{
            touchAction: 'pan-x',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div 
            ref={sliderRef}
            className="flex gap-6 carousel-track"
            style={{
              transform: `translateX(${renderTranslateX}px)`,
              touchAction: 'pan-x',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitTouchCallout: 'none'
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerLeave}
          >
            {renderedEvents.map((event, index) => (
              <div
                key={`${event.__dup}-${event.id}-${index}`}
                className="group flex-shrink-0 w-[180px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[320px] relative rounded-xl sm:rounded-2xl overflow-hidden h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] carousel-item cursor-pointer"
                data-card="true"
                onMouseEnter={(e) => {
                  // Only handle hover on desktop
                  if (window.innerWidth >= 640) {
                    const video = e.currentTarget.querySelector('video') as HTMLVideoElement | null
                    if (video) {
                      video.currentTime = 7
                      video.play().catch(() => {})
                    }
                  }
                }}
                onMouseLeave={(e) => {
                  // Only handle hover on desktop
                  if (window.innerWidth >= 640) {
                    const video = e.currentTarget.querySelector('video') as HTMLVideoElement | null
                    if (video) {
                      video.pause()
                      video.currentTime = 7
                    }
                  }
                }}
                onClick={() => openVideoPopup(event.videoUrl, event.title)}
              >
                {/* Video Background */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                >
                  <source src={event.videoUrl} type="video/mp4" />
                </video>
                
                {/* Overlay shade */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Watch button */}
                <button
                  className="absolute top-3 left-3 z-10 flex items-center gap-2 text-white bg-white/20 backdrop-blur-md rounded-full px-6 py-4 b hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    openVideoPopup(event.videoUrl, event.title)
                  }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  <span className="text-sm font-medium">Watch</span>
                </button>
                

              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                // Jump to selected index within middle copy
                basePositionRef.current = -index * slideSize
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-300 disabled:opacity-50 ${
                index === activeIndex
                  ? 'bg-white'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Popup */}
      {isVideoPopupOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeVideoPopup}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          
          {/* Video Container - Shorts Size and Fullscreen */}
          <div 
            className="relative bg-black rounded-3xl overflow-hidden w-full h-full max-w-[400px] max-h-[80vh] aspect-[9/16]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoPopup}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Player - Full Container */}
            <div className="w-full h-full">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                style={{ borderRadius: '1.5rem' }}
              >
                <source src={currentVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
