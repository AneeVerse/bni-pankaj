"use client"

import Image from "next/image"
import Link from "next/link"

export default function VentureDetail() {
  return (
    <div className="w-full">
     <section className="w-full bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8 lg:py-10">

          {/* 2x2 Grid with Interlocking Curves - Reordered sections */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0  overflow-hidden  rounded-3xl">

            {/* Background Gradient - Subtle angled effect */}
            <div className="absolute w-[100%] h-[40%] left-[9%] top-[-2%] bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[transparent] rounded-full transform rotate-[-55deg] z-15 hidden sm:block  blur-lg"></div> 
            
            {/* Section 1 - BNI Logo (Top Left) - Curved on Top Right and Bottom Left - 2/5 width (small box) */}
            <div className="relative bg-white rounded-tr-3xl rounded-bl-3xl rounded-br-3xl rounded-tl-3xl overflow-hidden md:col-span-2 z-30 order-2 md:order-1 mb-10 lg:mb-0">
              <div className="p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[250px] relative z-30">
                <Image
                  src="/images/venture/tab.png"
                  alt="TAB Logo"
                  width={200}
                  height={100}
                  className="max-w-full h-auto  object-contain z-30"
                />
              </div>
            </div>

            {/* Section 2 - Expert Guidance Text (Top Right) - Curved on Bottom Left - 3/5 width */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl rounded-tl-3xl md:col-span-3 z-25 order-1 md:order-2">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                  <span className="font-bold uppercase">THE ALTERNATIVE BOARD</span>
                  <br />
                  <span className="font-normal lowercase">Strategic Leadership Circle</span>
                </h2>
              </div>
            </div>

            {/* Section 3 - Statistics and Coaching Info (Bottom Left) - Curved on Top Right - 2/5 width */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl  rounded-tl-3xl md:col-span-2 z-25 order-4 md:order-3">
              <div className="px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-8 flex flex-col justify-center min-h-[240px] md:min-h-[280px] lg:min-h-[300px] relative z-30">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  Leading TAB Maharashtra, I help owners, CEOs, and entrepreneurs make better decisions together. Monthly peer boards and one-on-one coaching turn real challenges into clear, confident action.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  Members gain sharper vision, stronger execution, and measurable growth because the right perspectives and accountability convert ambition into sustainable results.
                </p>

                {/* Buttons - Stacked vertically with better styling */}
                <div className="flex flex-col gap-3">
                  <Link 
                    href="/company/tab"
                    className="bg-[#3470cc] hover:bg-white hover:text-black text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl text-center border border-[#3470cc] hover:border-gray-300 group relative"
                  >
                    <span className="group-hover:hidden">Know More</span>
                    <span className="hidden group-hover:inline">Know More </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 4 - TAB Company Image (Bottom Right) - Curved on Top Left - 3/5 width */}
            <div className="relative bg-[#efefef] rounded-tl-3xl rounded-br-3xl rounded-tr-3xl md:col-span-3 overflow-hidden z-10 order-3 md:order-4 -mb-20">
              <div className="relative w-full h-full min-h-[320px] md:min-h-[220px] flex items-center justify-center z-30">
                <div className="relative w-full h-11/12 rounded-3xl overflow-hidden -mt-12 -ml-0">
                  <Image
                    src="/images/company/tab.jpeg"
                    alt="TAB Company"
                    width={800}
                    height={400}
                    className="w-full h-[80%] object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second VentureDetail Section - Mirrored Layout */}
      <section className="w-full bg-[#efefef] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8 lg:py-10">

          {/* 2x2 Grid with Interlocking Curves - Mirrored sections */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0  overflow-hidden  rounded-3xl">

            {/* Background Gradient - Subtle angled effect */}
            <div className="absolute w-[100%] h-[40%] left-[12%] top-[40%] bg-gradient-to-bl from-[transparent] via-[#ffffff] to-[#ffffff] rounded-full transform rotate-[-130deg] z-15 hidden sm:block  blur-lg"></div> 

            {/* Section 1 - Expert Guidance Text (Top Left) - Curved on Bottom Right - 3/5 width */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-3xl md:col-span-3 z-25">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                  <span className="font-bold uppercase">CORPORATE CONNECTIONS</span>
                  <br />
                  <span className="font-normal lowercase">Executive Influence Network</span>
                </h2>
              </div>
            </div>

            {/* Section 2 - Corporate Connections Logo (Top Right) - Curved on Top Left and Bottom Right - 2/5 width (small box) */}
            <div className="relative bg-white rounded-tl-3xl rounded-br-3xl rounded-bl-3xl overflow-hidden md:col-span-2 z-30 mb-10 lg:mb-0">
              <div className="p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[250px] relative ">
                <Image
                  src="/images/venture/d7ddf110031b054df193d8ae5b7aab1295e2887a.png"
                  alt="Corporate Connections Logo"
                  width={200}
                  height={100}
                  className="max-w-full h-auto  object-contain"
                />
              </div>
            </div>

            {/* Section 3 - Corporate Connections Company Image (Bottom Left) - Curved on Top Right - 3/5 width */}
            <div className="relative bg-[#efefef]  rounded-tr-3xl rounded-bl-3xl md:col-span-3 overflow-hidden z-10">
              <div className="relative w-full h-full min-h-[220px] sm:min-h-[200px] flex items-center justify-center z-30">
                <div className="relative w-full h-11/12 rounded-3xl overflow-hidden -mt-8 -ml-0">
                  <Image
                    src="/images/company/CC.jpg"
                    alt="Corporate Connections Company"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 - Statistics and Coaching Info (Bottom Right) - Curved on Top Left - 2/5 width */}
            <div className="relative bg-[#efefef]  rounded-tl-3xl rounded-br-3xl rounded-tr-3xl md:col-span-2 z-25">
              <div className="px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-8 flex flex-col justify-center min-h-[240px] md:min-h-[280px] lg:min-h-[300px] relative z-30">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  CorporateConnections Navi Mumbai unites senior leaders to go beyond networking and create transformative opportunities. Our members build high-value relationships and open cross-border doors.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  Through private forums and curated events, leaders expand influence, solve strategic challenges, and collaborate at scale as the city becomes a global business hub.
                </p>

                {/* Buttons - Stacked vertically with better styling */}
                <div className="flex flex-col gap-3">
                  <Link 
                    href="/company/corporate-connections"
                    className="bg-[#3470cc] hover:bg-white hover:text-black text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl text-center border border-[#3470cc] hover:border-gray-300 group relative"
                  >
                    <span className="group-hover:hidden">Join the Executive Circle</span>
                    <span className="hidden group-hover:inline">Join the Executive Circle </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="w-full bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8 lg:py-10">

          {/* 2x2 Grid with Interlocking Curves - Reordered sections */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden rounded-2xl sm:rounded-3xl">

            {/* Background Gradient - Subtle angled effect */}
            <div className="absolute w-[100%] h-[40%] left-[9%] top-[-4%] bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[transparent] rounded-full transform rotate-[-55deg] z-15 hidden sm:block  blur-lg"></div> 

            {/* Section 1 - Expert Guidance Text (Top Right) - Curved on Bottom Left - 3/5 width - MOBILE FIRST */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-br-3xl md:col-span-3 z-25 order-1 md:order-2">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                  <span className="font-bold uppercase">BNI NAVI MUMBAI</span>
                  <br />
                  <span className="font-normal lowercase">Structured Referral Engine</span>
                </h2>
              </div>
            </div>

            {/* Section 2 - BNI Logo (Top Left) - Curved on Top Right and Bottom Left - 2/5 width (small box) - MOBILE SECOND */}
            <div className="relative bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-br-2xl sm:rounded-tr-3xl sm:rounded-bl-3xl sm:rounded-br-3xl overflow-hidden md:col-span-2 z-30 order-2 md:order-1 mb-10 lg:mb-0">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[200px] sm:min-h-[250px] relative z-30 ">
                <Image
                  src="/images/venture/ff445e7d753b31b4df15ae1abb0ec9a02f4d3b94.png"
                  alt="BNI Logo"
                  width={200}
                  height={100}
                  className="max-w-full h-auto  object-contain z-30"
                />
              </div>
            </div>

            {/* Section 3 - BNI Company Image (Bottom Right) - Curved on Top Left - 3/5 width - MOBILE THIRD */}
            <div className="relative bg-[#efefef] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl md:col-span-3 overflow-hidden z-10 order-3 md:order-4">
              <div className="relative w-full h-full min-h-[290px] lg:min-h-[220px] flex items-center justify-center z-30">
                <div className="relative w-full h-11/12 rounded-3xl overflow-hidden -mt-12 -ml-0">
                  <Image
                    src="/images/company/bni.jpeg"
                    alt="BNI Company"
                    width={800}
                    height={400}
                    className="w-full h-[75%] object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 - Statistics and Coaching Info (Bottom Left) - Curved on Top Right - 2/5 width - MOBILE FOURTH */}
            <div className="relative bg-[#efefef] rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl md:col-span-2 z-25 order-4 md:order-3 -mt-20 lg:-mt-0">
              <div className="px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-8 flex flex-col justify-center min-h-[240px] md:min-h-[280px] lg:min-h-[300px] relative z-30 ">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  I lead BNI Navi Mumbai, one of BNI&apos;s fastest-growing regions, where 700+ members across 19 chapters use a proven weekly structure to generate qualified, trust-based referrals.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  Together, we&apos;ve enabled ₹2100+ crores in business—powered by Givers Gain®, training, and a culture of credibility that turns relationships into predictable growth.
                </p>

                {/* Buttons - Stacked vertically with better styling */}
                <div className="flex flex-col gap-3">
                  <Link 
                    href="/company/bni"
                    className="bg-[#3470cc] hover:bg-white hover:text-black text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 w-full shadow-lg hover:shadow-xl text-center border border-[#3470cc] hover:border-gray-300 group relative"
                  >
                    <span className="group-hover:hidden">Visit a BNI Chapter Meeting</span>
                    <span className="hidden group-hover:inline">Visit a BNI Chapter Meeting </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}  