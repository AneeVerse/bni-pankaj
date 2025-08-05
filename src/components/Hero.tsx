'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-2xl md:text-3xl lg:text-4xl font-normal block mb-2">
                  awareness is
                </span>
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold">
                  everything
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
              Make sure all the choices you make in life come from a point of awareness and not ignorance.
            </p>
          </div>

         
          
        </div>
      </div>
    </section>
  );
};

export default Hero; 