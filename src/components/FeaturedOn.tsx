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
    <section className="bg-[#efefef] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-bold text-gray-500 uppercase tracking-wide">
            As Featured On
          </h2>
        </div>

        {/* Logos in Single Line */}
        <div className="flex justify-center items-center space-x-12">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 opacity-50 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={40}
                className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn; 