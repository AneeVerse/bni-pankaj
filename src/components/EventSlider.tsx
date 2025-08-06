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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentSlide(slideIndex)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % events.length
    goToSlide(nextIndex)
  }

  const prevSlide = () => {
    const prevIndex = currentSlide === 0 ? events.length - 1 : currentSlide - 1
    goToSlide(prevIndex)
  }

  // Continuous auto-scroll functionality
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    let animationFrame: number
    
    const animate = () => {
      if (!isPaused) {
        setTranslateX(prev => {
          const newValue = prev - 0.05 // Slow continuous movement
          // Reset when we've moved past one full slide width
          if (Math.abs(newValue) >= (100 / 3)) {
            setCurrentSlide(current => (current + 1) % events.length)
            return 0
          }
          return newValue
        })
      }
      animationFrame = requestAnimationFrame(animate)
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isPaused, events.length])

  const getVisibleSlides = () => {
    const slides = []
    for (let i = 0; i < 3; i++) {
      const slideIndex = (currentSlide + i) % events.length
      slides.push(events[slideIndex])
    }
    return slides
  }

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Events that liberate
          </h2>
          
          <div className="flex items-center gap-6">
            {/* Discover Events Link */}
            <div className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer">
              <span className="text-sm md:text-base mr-2">Discover events</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsPaused(true)
                  setTranslateX(0)
                  prevSlide()
                  setTimeout(() => setIsPaused(false), 1000)
                }}
                disabled={isTransitioning}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setIsPaused(true)
                  setTranslateX(0)
                  nextSlide()
                  setTimeout(() => setIsPaused(false), 1000)
                }}
                disabled={isTransitioning}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={sliderRef}
            className="flex gap-6"
            style={{
              transform: `translateX(${-currentSlide * (100 / 3) + translateX}%)`
            }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className="flex-shrink-0 w-full sm:w-[480px] md:w-[420px] lg:w-[380px] xl:w-[420px] relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]"
              >
                {/* Video Background */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={event.videoUrl} type="video/mp4" />
                </video>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                  <div className="space-y-2">
                    <p className="text-xs md:text-sm font-medium tracking-wider opacity-90">
                      {event.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-sm md:text-base opacity-90 mt-2">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsPaused(true)
                setTranslateX(0)
                goToSlide(index)
                setTimeout(() => setIsPaused(false), 1000)
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentSlide
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
