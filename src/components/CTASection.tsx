import Image from "next/image"

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[50vh] lg:min-h-[75vh] overflow-hidden rounded-none bg-black lg:bg-transparent">
      {/* Background image - only visible on desktop */}
      <div className="hidden lg:block">
        <Image
          src="/images/cta1.png"
          alt="Tony Robbins inspirational quote"
          fill
          priority
          className="object-cover object-center center 10%"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay for better text contrast - only on desktop */}
      <div className="hidden lg:block absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-[760px] mx-auto px-4 sm:px-6 h-full">
        <div className="w-full h-full flex items-center justify-center lg:items-center pt-16 lg:pt-0">
          <div className="text-center text-white max-w-4xl mt-25">
            {/* Quote */}
            <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-[600] leading-tight mb-8 sm:mb-12" style={{ letterSpacing: '-0.07em', wordSpacing: '0.01em', lineHeight: '1.1' }}>
              &ldquo;I decided that I was going <br /> to find a way, somehow, someday, to give back <br /> and pay it forward.&rdquo;
            </blockquote>

            {/* Author attribution */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                <Image
                  src="/images/cta-logo-2.png"
                  alt="Pankaj Harwansh"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-left">
                <p className="lg:text-[15px] sm:text-2xl font-semibold">Pankaj Harwansh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
