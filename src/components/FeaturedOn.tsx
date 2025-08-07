'use client';

import Image from 'next/image';

const FeaturedOn = () => {
  const logos = [
    { src: '/images/logo/logo-1.webp', alt: 'Fortune' },
    { src: '/images/logo/logo-2.webp', alt: 'BBC' },
    { src: '/images/logo/logo-3.webp', alt: 'Moneycontrol' },
    { src: '/images/logo/logo-4.webp', alt: 'The Economic Times' },
    { src: '/images/logo/logo-5.webp', alt: 'Mint' },
    { src: '/images/logo/logo-6.webp', alt: 'NDTV' },
  ];

  return (
    <section className="bg-[#efefef] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-bold text-gray-500 uppercase tracking-wide">
            As Featured On
          </h2>
        </div>

        {/* Logos - Responsive Layout */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-md sm:max-w-lg md:max-w-none mx-auto">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex justify-center opacity-50 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={40}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn; 