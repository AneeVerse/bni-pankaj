"use client"

import Image from "next/image"
import Masonry from "react-masonry-css"
import { useMemo, useState } from "react"

export default function Testimonials() {
  // Testimonial data
  // Base items (BNI/TAB only). Corporate content is provided from a dedicated folder below.
  const baseItems = [
    {
      id: 1,
      src: "/images/IMAGES/Copy of DSC00550.JPG",
      alt: "Testimonial 1",
    },
    {
      id: 2,
      src: "/images/IMAGES/Copy of WhatsApp Image 2025-08-14 at 16.32.12.jpeg",
      alt: "Testimonial 2", 
    },
    {
      id: 3,
      src: "/images/IMAGES/Copy of WhatsApp Image 2025-08-14 at 16.32.12 (1).jpeg",
      alt: "Testimonial 3",
    },
    {
      id: 4,
      src: "/images/IMAGES/Copy of WhatsApp Image 2025-08-14 at 16.32.13.jpeg",
      alt: "Testimonial 4",
    },
    {
      id: 5,
      src: "/images/IMAGES/Copy of WhatsApp Image 2025-08-14 at 16.32.08.jpeg",
      alt: "Testimonial 5",
    },
    {
      id: 6,
      src: "/images/IMAGES/Copy of CC.jpg",
      alt: "Testimonial 6",
    },
    {
      id: 7,
      src: "/images/IMAGES/Copy of WhatsApp Image 2025-08-14 at 16.32.07.jpeg",
      alt: "Testimonial 7",
    },
    {
      id: 8,
      src: "/images/IMAGES/Copy of WhatsApp Image 2025-08-14 at 16.32.09.jpeg",
      alt: "Testimonial 8",
    },
    {
      id: 9,
      src: "/images/IMAGES/Copy of CC3.jpg",
      alt: "Testimonial 9",
    },
  ]

  // Corporate-specific assets (images and videos) used ONLY in Corporate tab
  const corporateFolderPrefix = "/images/testimonals/CORPORATE CONNECTIONS"
  const corporateItems = [
    {
      id: 101,
      src: `${corporateFolderPrefix}/CC Experience meet August.mp4`,
      alt: "Corporate video: Experience meet August",
      isVideo: true as const,
    },
    {
      id: 102,
      src: `${corporateFolderPrefix}/WhatsApp Video 2025-07-14 at 17.15.23.mp4`,
      alt: "Corporate video: WhatsApp clip",
      isVideo: true as const,
    },
    { id: 103, src: `${corporateFolderPrefix}/Screenshot 2025-09-17 153608.png`, alt: "Corporate screenshot 153608" },
    { id: 104, src: `${corporateFolderPrefix}/CC3.jpg`, alt: "Corporate CC3" },
    { id: 105, src: `${corporateFolderPrefix}/WhatsApp Image 2025-09-17 at 15.18.09.jpeg`, alt: "Corporate image 15.18.09" },
    { id: 106, src: `${corporateFolderPrefix}/CC.jpg`, alt: "Corporate CC" },
    { id: 107, src: `${corporateFolderPrefix}/Screenshot 2025-09-17 153731.png`, alt: "Corporate screenshot 153731" },
    { id: 108, src: `${corporateFolderPrefix}/WhatsApp Image 2025-09-17 at 15.18.09 (1).jpeg`, alt: "Corporate image 15.18.09 (1)" },
  ] as const

  const testimonials = [...baseItems, ...corporateItems]

  // Tabs
  const tabs = ["All", "BNI", "TAB", "Corporate"] as const
  type Tab = typeof tabs[number]
  const [activeTab, setActiveTab] = useState<Tab>("All")

  // Categorize by filename; ensure Corporate only for the dedicated folder
  const categorizedTestimonials = useMemo(() => {
    const rotate: Exclude<Tab, "All">[] = ["BNI", "TAB", "Corporate"]
    return testimonials.map((t, index) => {
      const lower = t.src.toLowerCase()
      let category: Exclude<Tab, "All"> | null = null
      const isFromCorporateFolder = lower.includes("/images/testimonals/corporate connections")
      if (isFromCorporateFolder) category = "Corporate"
      else if (lower.includes("bni")) category = "BNI"
      else if (lower.includes("tab")) category = "TAB"
      // Fallback rotate for now
      if (!category) category = rotate[index % rotate.length]

      // Explicit overrides
      // 1) Ensure previously mis-filed item is BNI
      if (t.id === 3) category = "BNI"
      // 2) Prevent non-folder images that contain 'cc' or 'corporate' in filename from being marked Corporate
      if (!isFromCorporateFolder && category === "Corporate") category = "BNI"
      return { ...t, category }
    })
  }, [testimonials])

  const filteredTestimonials = useMemo(() => {
    if (activeTab === "All") return categorizedTestimonials
    return categorizedTestimonials.filter(t => t.category === activeTab)
  }, [activeTab, categorizedTestimonials])

  // Function to determine size based on index pattern
  const getImageSize = (index: number) => {
    // Pattern: Large for positions 0,2,3,7 (left/right columns), Small for others (middle)
    const largePositions = [0, 2, 3, 7]; // These will be taller
    return largePositions.includes(index) ? 'large' : 'small';
  }

  // Breakpoints for responsive masonry (desktop only)
  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tabs */}
        <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-blue-50/80 p-1.5 sm:p-2 rounded-2xl shadow-sm">
            {tabs.map(tab => {
              const selected = activeTab === tab
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-xl text-sm sm:text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-blue-300 ${
                    selected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {tab === 'Corporate' ? 'Corporate Connection' : tab}
                </button>
              )
            })}
          </div>
        </div>

        {/* Mobile: Pinterest-style CSS Columns Grid */}
        <div className="lg:hidden columns-2 gap-3 sm:gap-4 md:gap-6">
          {filteredTestimonials.map((testimonial, index) => {
            const size = getImageSize(index);
            return (
              <div key={testimonial.id} className="break-inside-avoid mb-3 sm:mb-4 md:mb-6">
                <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 ${
                  size === 'large' 
                    ? 'aspect-[4/5]' // Taller aspect ratio for large images
                    : 'aspect-[4/3]' // Shorter aspect ratio for small images
                }`}>
                  {String(testimonial.src).toLowerCase().endsWith('.mp4') ? (
                    <video
                      src={testimonial.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate nofullscreen"
                    />
                  ) : (
                    <Image
                      src={testimonial.src}
                      alt={testimonial.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: Masonry Grid Layout with Pattern Control */}
        <div className="hidden lg:block">
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-3 sm:-ml-4 md:-ml-6"
            columnClassName="pl-3 sm:pl-4 md:pl-6"
          >
            {filteredTestimonials.map((testimonial, index) => {
              const size = getImageSize(index);
              return (
                <div key={testimonial.id} className="mb-3 sm:mb-4 md:mb-6">
                  <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 ${
                    size === 'large' 
                      ? 'aspect-[4/5]' // Taller aspect ratio for large images
                      : 'aspect-[4/3]' // Shorter aspect ratio for small images
                  }`}>
                    {String(testimonial.src).toLowerCase().endsWith('.mp4') ? (
                      <video
                        src={testimonial.src}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload noplaybackrate nofullscreen"
                      />
                    ) : (
                      <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        fill
                        sizes="(max-width: 1200px) 33vw, 33vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </Masonry>
        </div>
      </div>
    </section>
  )
}
