"use client"

import { useState, useRef, useEffect } from "react"
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
    videoUrl: "/video/venture.mp4"
  },
  {
    id: 2,
    title: "LEADERSHIP ACADEMY",
    subtitle: "TONY ROBBINS", 
    description: "Become a great leader",
    videoUrl: "/video/venture.mp4"
  },
  {
    id: 3,
    title: "DATE WITH DESTINY",
    subtitle: "TONY ROBBINS",
    description: "Create life according to your terms",
    videoUrl: "/video/venture.mp4"
  },
  {
    id: 4,
    title: "UNLEASH THE POWER WITHIN",
    subtitle: "TONY-ROBBINS",
    description: "Experience explosive growth",
    videoUrl: "/video/venture.mp4"
  },
  {
    id: 5,
    title: "LIFE MASTERY",
    subtitle: "TONY ROBBINS",
    description: "Master mind and body",
    videoUrl: "/video/venture.mp4"
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

  // Continuous position in px relative to the start of the middle copy
  // Negative values move left. We wrap this value within one copy width.
  const basePositionRef = useRef<number>(0)

  // Pointer drag state (mouse/touch unified)
  const isPointerDownRef = useRef<boolean>(false)
  const dragStartXRef = useRef<number>(0)
  const dragDeltaRef = useRef<number>(0)

  // Hover tracking to pause auto-scroll (no mouse-follow)
  const isHoveringRef = useRef<boolean>(false)

  // Smooth snapping animation state
  const isSnappingRef = useRef<boolean>(false)
  const snapAnimationRef = useRef<number | null>(null)

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

      const deltaPx = (speedPxPerSec * deltaMs) / 1000

      // Auto-move only when not interacting with mouse and not snapping
      const shouldAutoMove = !isHoveringRef.current && !isPointerDownRef.current && !isSnappingRef.current
      if (shouldAutoMove) {
        basePositionRef.current -= deltaPx
      }

      // Seamless wrap within [-copyWidth, 0)
      if (basePositionRef.current <= -copyWidth) {
        basePositionRef.current += copyWidth
      } else if (basePositionRef.current >= 0) {
        basePositionRef.current -= copyWidth
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

  // Pointer (mouse/touch) unified handlers for smooth drag and pause only
  const onPointerEnter = () => {
    isHoveringRef.current = true
  }

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

  const smoothSnapTo = (target: number) => {
    // Smoothly animate basePosition to target using easing
    isSnappingRef.current = true
    const durationMs = 250
    const start = basePositionRef.current
    const delta = target - start
    let startTime: number | null = null

    const step = (t: number) => {
      if (startTime === null) startTime = t
      const elapsed = t - startTime
      const progress = Math.min(1, elapsed / durationMs)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      basePositionRef.current = start + delta * eased
      if (progress < 1) {
        snapAnimationRef.current = requestAnimationFrame(step)
      } else {
        isSnappingRef.current = false
      }
    }

    if (snapAnimationRef.current) cancelAnimationFrame(snapAnimationRef.current)
    snapAnimationRef.current = requestAnimationFrame(step)
  }

  const snapToNearestCard = () => {
    // Merge the drag delta into the base position and snap to nearest card
    basePositionRef.current += dragDeltaRef.current
    dragDeltaRef.current = 0
    const snapped = Math.round(basePositionRef.current / slideSize) * slideSize
    smoothSnapTo(snapped)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return
    isPointerDownRef.current = false
    ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
    snapToNearestCard()
  }

  const onPointerLeave = () => {
    // End any interaction and resume auto
    isHoveringRef.current = false
    if (isPointerDownRef.current) {
      isPointerDownRef.current = false
      snapToNearestCard()
    }
  }

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
          className="relative"
          onPointerEnter={onPointerEnter}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerLeave}
        >
          <div 
            ref={sliderRef}
            className="flex gap-6"
            style={{
              transform: `translateX(${renderTranslateX}px)`
            }}
          >
            {renderedEvents.map((event, index) => (
              <div
                key={`${event.__dup}-${event.id}-${index}`}
                className="flex-shrink-0 w-[220px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[420px] relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                data-card="true"
                onMouseEnter={(e) => {
                  const v = e.currentTarget.querySelector('video') as HTMLVideoElement | null
                  v?.play()?.catch(() => {})
                }}
                onMouseLeave={(e) => {
                  const v = e.currentTarget.querySelector('video') as HTMLVideoElement | null
                  if (v) { v.pause(); try { v.currentTime = 0 } catch {} }
                }}
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
                  className="absolute top-3 left-3 z-10 flex items-center gap-2 text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30"
                  onClick={(e) => {
                    e.stopPropagation()
                    const card = (e.currentTarget.closest('[data-card="true"]') as HTMLElement) || undefined
                    const v = card?.querySelector('video') as HTMLVideoElement | null
                    if (v) {
                      v.play().catch(() => {})
                      // Try fullscreen if available
                      const anyV: any = v
                      if (anyV.requestFullscreen) anyV.requestFullscreen()
                    }
                  }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  <span className="text-xs font-semibold uppercase tracking-wide">Watch</span>
                </button>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-xs md:text-sm font-medium tracking-wider opacity-90">
                      {event.subtitle}
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-sm sm:text-sm md:text-base opacity-90 mt-1 sm:mt-2">
                      {event.description}
                    </p>
                  </div>
                </div>
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
    </section>
  )
}
