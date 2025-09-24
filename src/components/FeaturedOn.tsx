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
    { src: '/images/logo/bloomberg-logo.png', alt: 'Bloomberg' },
    { src: '/images/logo/Republic-logo.png', alt: 'Republic' },
    { src: '/images/logo/1MoneyMania-white.png', alt: '1MoneyMania' },
    { src: '/images/logo/Business-Reporter-PNG-300x61.png', alt: 'Business Reporter' },
    { src: '/images/logo/Deccan-Business-PNG-300x104.png', alt: 'Deccan Business' },
    { src: '/images/logo/Entrepreneur-Saga-PNG-300x59.png', alt: 'Entrepreneur Saga' },
    { src: '/images/logo/Indian-Scoops-Business-02-png-300x114.png', alt: 'Indian Scoops Business' },
    { src: '/images/logo/RD-Times-Business-PNG-5.png', alt: 'RD Times Business' },
    { src: '/images/logo/RD-Times-Logo-PNG-1.png', alt: 'RD Times' },
    { src: '/images/logo/The-Indian-Bulletin-LOGO.png', alt: 'The Indian Bulletin' },
    { src: '/images/logo/Wow-Entrepreneurs-Logo-PNG.png', alt: 'Wow Entrepreneurs' },
    { src: '/images/logo/flipboard.png', alt: 'Flipboard' },
    { src: '/images/logo/newshead-logo.png', alt: 'Newshead' },
    { src: '/images/logo/scoopit-logo.svg', alt: 'Scoop.it' },
    { src: '/images/logo/medium.png', alt: 'Medium' },
    { src: '/images/logo/logo.svg', alt: 'Company Logo' },
  ];

  return (
    <section className="bg-[#efefef] py-12 sm:py-14 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h2
            className="text-xs sm:text-sm md:text-base text-[#0201016E] font-semibold tracking-wider"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            AS FEATURED ON
          </h2>
        </div>

        {/* Logos - Responsive Layout */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 sm:gap-x-10 md:gap-x-14 lg:gap-x-16 xl:gap-x-20 gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-8 w-full">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex justify-center opacity-50 hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={600}
                  height={300}
                  className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn; 