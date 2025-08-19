import Image from "next/image"

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] overflow-hidden rounded-none">
      {/* Background image */}
      <Image
        src="/images/bbg4.png"
        alt="Ready to live an extraordinary life"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Subtle dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Bottom fade to blend with footer */}
      <div className="absolute inset-x-0 bottom-0 h-40 sm:h-52 md:h-64 bg-gradient-to-b from-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full">
        <div className="w-full h-full flex items-center justify-center mt-40">
          <div className="text-center text-white max-w-4xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold leading-tight">
              Stop Guessing.Start Growing.
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90">
              Every day you delay connecting with the right business leaders costs you opportunities, insights, and revenue. The most successful entrepreneurs in Navi Mumbai are already part of these networks. Your competition isn't waiting. Neither should you.
            </p>

            <div className="mt-6 sm:mt-8">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:bg-white/90 transition-colors">
                Book Your Free Network Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
