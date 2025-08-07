'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const AnimatedText = ({ text }: { text: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Reduced delay for faster animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <span 
      className={`inline-block transform transition-all duration-800 ease-out ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-full opacity-0'
      }`}
    >
      {text}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg1.jpg"
          alt="Hero Background"
          fill
          className="object-cover sm:object-cover object-center sm:object-center"
          style={{
            objectPosition: 'center 30%'
          }}
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block mb-2">
                  <AnimatedText text="awareness is" />
                </span>
                <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
                  <AnimatedText text="everything" />
                </span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
              <AnimatedText 
                text="Make sure all the choices you make in life come from a point of awareness and not ignorance." 
              />
            </p>
          </div>

         
          
        </div>
      </div>
    </section>
  );
};

export default Hero; 