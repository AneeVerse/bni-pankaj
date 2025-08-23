'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = ({ variant = "home" }: { variant?: "home" | "about" | "contact" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSubheadline, setShowSubheadline] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Get content based on variant
  const getContent = () => {
    switch (variant) {
      case "about":
        return {
          headline: "Make Your Choices From Awareness, Not Ignorance",
          subheadline: "Join a thriving community inspired to grow in life, work, and purpose.",
          buttonText: "Connect With Pankaj Today"
        };
      case "contact":
        return {
          headline: "Let's Connect and Create\nImpact Together",
          subheadline: "Ready to transform your business and life? Reach out and let's start a meaningful conversation.",
          buttonText: "Get In Touch Today"
        };
      default:
        return {
          headline: "Make Your Choices From Awareness, Not Ignorance",
          subheadline: "Join a thriving community inspired to grow in life, work, and purpose.",
          buttonText: "Connect With Pankaj Today"
        };
    }
  };

  const content = getContent();
  
  // Headline lines for animation (using dynamic content, split by line breaks)
  const headlineLines = content.headline.split('\n');

  // Get responsive classes based on variant
  const getHeightClasses = () => {
    if (variant === "about" || variant === "contact") {
      return "min-h-[65vh] lg:min-h-[30vh]"; // Mobile: 65vh, Desktop: 30vh
    }
    return "min-h-[65vh] lg:min-h-[90vh]"; // Mobile: 65vh, Desktop: 90vh
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Calculate total delay for subheadline and button animations
    const lastLineIdx = headlineLines.length - 1;
    const lastCharIdx = headlineLines[lastLineIdx].length - 1;
    // Animation: 0.4s initial + 0.5s per line + 0.05s per char
    const totalDelay = 0.4 + (lastLineIdx * 0.5) + (lastCharIdx * 0.05) + 0.5; // extra 0.5s buffer
    
    const subTimer = setTimeout(() => {
      setShowSubheadline(true);
      setTimeout(() => {
        setShowButton(true);
      }, 1000);
    }, totalDelay * 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(subTimer);
    }
  }, [variant, headlineLines]);

  return (
    <section className={`relative ${getHeightClasses()} flex items-center`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/bbg1.png"
          alt="Hero Background"
          fill
          className="object-cover md:object-cover"
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
                <span className="text-[27px] sm:text-3xl md:text-5xl lg:text-[49px] font-normal block mb-2">
                  {headlineLines.map((line, lineIdx) => (
                    <span key={lineIdx} className="block">
                      {line.split('').map((char, charIdx) => (
                        <span
                          key={charIdx}
                          className={`inline-block transition-all duration-500 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                          style={{ 
                            transitionDelay: `${0.4 + ((lineIdx * 0.5) + charIdx * 0.05)}s`
                          }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                  ))}
                </span>
              </h1>
            </div>
            
            {/* Subheadline */}
            <div
              className={`text-base sm:text-lg md:text-xl text-gray-200 max-w-lg sm:max-w-3xl md:max-w-xl lg:max-w-[590px] leading-relaxed transition-all duration-1000 ease-out ${
                showSubheadline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: showSubheadline ? '0s' : '0.6s'
              }}
            >
              {content.subheadline}
            </div>

            {/* Button */}
            <div
              className={`pt-4 transition-all duration-1000 ease-out ${
                showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: showButton ? '0s' : '0.6s'
              }}
            >
            
            </div>
          </div>

         
          
        </div>
      </div>
    </section>
  );
};

export default Hero; 