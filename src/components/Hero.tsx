'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const AnimatedText = ({ text, delay = 0, onComplete }: { text: string; delay?: number; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // 50ms per character

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayedText('');
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className="inline-block">
      {displayedText}
    </span>
  );
};

const SlideUpText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <p className={`text-base sm:text-lg md:text-xl text-gray-200 max-w-lg sm:max-w-3xl md:max-w-xl lg:max-w-[590px] leading-relaxed transform transition-all duration-1500 ease-in-out ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-12 opacity-0'
    }`}>
      {text}
    </p>
  );
};

const SlideUpButton = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <button className={`bg-yellow-300 text-gray-900 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-yellow-400 transition-all duration-200 transform transition-all duration-1500 ease-in-out ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-12 opacity-0'
    }`}>
      {text}
    </button>
  );
};

const Hero = () => {
  const [showSubheadline, setShowSubheadline] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      // Animation trigger placeholder
    }, 100);
    
    // Calculate total animation time for headline
    const headlineLines = ["Make Your Choices From Awareness, Not Ignorance"];
    const firstLineDelay = 100; // Initial delay
    const firstLineDuration = headlineLines[0].length * 50; // 50ms per character
    const totalDelay = firstLineDelay + firstLineDuration + 500; // extra 500ms buffer
    
    // Show both subheadline and button together simultaneously
    const contentTimer = setTimeout(() => {
      setShowSubheadline(true);
      setShowButton(true);
    }, totalDelay);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    }
  }, []);

  // Headline lines for animation
  const headlineLines = ["Make Your Choices From Awareness, Not Ignorance"];

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bbg1.png"
          alt="Hero Background"
          fill
          className="object-cover sm:object-cover object-center sm:object-center"
          style={{
            objectPosition: 'center 2%'
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
              <h1 className="max-w-[700px] text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
                <span className="text-2xl sm:text-3xl md:text-5xl lg:text-[49px] font-normal block mb-2">
                  <AnimatedText text={headlineLines[0]} />
                </span>
              </h1>
            </div>
            
            {showSubheadline && (
              <SlideUpText 
                text="Join a thriving community inspired to grow in life, work, and purpose." 
              />
            )}

            {showButton && (
              <div className="pt-4">
                <SlideUpButton 
                  text="Connect With Pankaj Today" 
                />
              </div>
            )}
          </div>

         
          
        </div>
      </div>
    </section>
  );
};

export default Hero; 