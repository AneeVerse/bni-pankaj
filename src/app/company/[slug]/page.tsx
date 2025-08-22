import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

// Company data structure
const companyData = {
  bni: {
    title: "BNI NAVI MUMBAI",
    subtitle: "Structured Referral Engine",
    description: "Word-of-mouth is still the best marketing. But it only works when it's systematic. BNI gives you a proven weekly structure to generate qualified referrals with trusted business professionals.",
    additionalInfo: "Our members passed over ₹100 crores in referrals last year. Because when everyone succeeds, everyone wins. One referral can change your entire year.",
    logo: "/images/venture/ff445e7d753b31b4df15ae1abb0ec9a02f4d3b94.png",
    logoAlt: "BNI Logo",
    buttonText: "Visit a BNI Chapter Meeting",
    backgroundColor: "#efefef",
    textColor: "text-gray-900",
    features: [
      "Proven weekly structure for referrals",
      "Network of trusted business professionals",
      "Over ₹100 crores in referrals passed last year",
      "Systematic word-of-mouth marketing"
    ]
  },
  tab: {
    title: "THE ALTERNATIVE BOARD",
    subtitle: "Strategic Leadership Circle",
    description: "Your toughest business decisions shouldn't be made alone. TAB connects you with 10-12 fellow CEOs and business owners in monthly confidential sessions. Share real challenges. Get practical solutions. Plus one-on-one coaching to turn insights into action.",
    additionalInfo: "Members report 23% average revenue growth and clearer long-term vision within 12 months. Because great leaders make great decisions when they have the right support.",
    logo: "/images/venture/tab.png",
    logoAlt: "The Alternative Board Logo",
    buttonText: "Apply for TAB Membership",
    backgroundColor: "#efefef",
    textColor: "text-gray-900",
    features: [
      "Monthly confidential CEO sessions",
      "10-12 peer business owners",
      "One-on-one coaching included",
      "23% average revenue growth",
      "Clearer long-term vision"
    ]
  },
  "corporate-connections": {
    title: "CORPORATE CONNECTIONS",
    subtitle: "Executive Influence Network",
    description: "Your network determines your net worth. But building the right connections takes time you don't have. Corporate Connections brings together Navi Mumbai's most influential executives, decision-makers, and industry leaders in private forums.",
    additionalInfo: "Skip the small talk. Build relationships that matter. Access opportunities that transform your business and expand your influence across industries.",
    logo: "/images/venture/d7ddf110031b054df193d8ae5b7aab1295e2887a.png",
    logoAlt: "Corporate Connections Logo",
    buttonText: "Join the Executive Circle",
    backgroundColor: "#efefef",
    textColor: "text-gray-900",
    features: [
      "Network with influential executives",
      "Private decision-maker forums",
      "Cross-industry opportunities",
      "Transform business relationships",
      "Access to industry leaders"
    ]
  }
}

interface CompanyPageProps {
  params: { slug: string }
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const company = companyData[params.slug as keyof typeof companyData]

  if (!company) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Main Company Section with VentureDetail Layout */}
      <section className="w-full bg-[#000000] pt-20 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8 lg:py-10">
          
          {/* 2x2 Grid with Interlocking Curves */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden rounded-3xl">

            {/* Background Gradient - Subtle angled effect */}
            <div className="absolute w-[100%] h-[40%] left-[26%] top-[80%] bg-gradient-to-bl from-[#ffffff] via-[#ffffff] to-[#ffffff] rounded-full transform rotate-[-130deg] z-15 hidden sm:block blur-lg"></div> 

            {/* Section 1 - Company Title (Top Left) - Curved on Bottom Right - 3/5 width */}
            <div className="relative bg-[#000000] rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-3xl md:col-span-3 z-25">
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center min-h-[250px] relative z-30">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
                  <span className="font-bold uppercase">{company.title}</span>
                  <br />
                  <span className="font-normal lowercase">{company.subtitle}</span>
                </h2>
              </div>
            </div>

            {/* Section 2 - Company Logo (Top Right) - Curved on Top Left and Bottom Right - 2/5 width (small box) */}
            <div className="relative bg-white rounded-tl-3xl rounded-br-3xl rounded-bl-3xl overflow-hidden md:col-span-2 z-30">
              <div className="p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[250px] relative">
                <Image
                  src={company.logo}
                  alt={company.logoAlt}
                  width={200}
                  height={100}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Section 3 - Company Image (Bottom Left) - Curved on Top Right - 3/5 width */}
            <div className="relative bg-[#000000] rounded-tr-3xl rounded-bl-3xl md:col-span-3 overflow-hidden z-10">
              <div className="relative w-full h-full min-h-[320px] md:min-h-[360px] flex items-center justify-center z-30">
                {/* Image Container */}
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden"
                  style={{
                    borderRadius: '1.5rem',
                    WebkitBorderRadius: '1.5rem',
                    MozBorderRadius: '1.5rem'
                  }}
                >
                  <Image
                    src="/images/company/company-left-img.avif"
                    alt="Company Image"
                    fill
                    className="object-cover"
                    style={{
                      borderRadius: '1.5rem',
                      WebkitBorderRadius: '1.5rem',
                      MozBorderRadius: '1.5rem'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Section 4 - Description and Button (Bottom Right) - Curved on Top Left - 2/5 width */}
            <div className="relative bg-[#000000] rounded-tl-3xl rounded-br-3xl rounded-tr-3xl md:col-span-2 z-25">
              <div className="px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-8 flex flex-col justify-center min-h-[240px] md:min-h-[280px] lg:min-h-[300px] relative z-30">
                <p className="text-white text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  {company.description}
                </p>
                <p className="text-white text-sm md:text-base leading-relaxed mb-4 font-medium text-left max-w-none ml-2">
                  {company.additionalInfo}
                </p>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section - Interlocking Cards Design */}
      <section className="w-full bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How it works
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              The {company.title} System has 4 fully integrated parts.
            </p>
          </div>

          {/* Interlocking Cards Grid */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* Card 1 - Top Left (Immersion) */}
            <div className="absolute top-0 left-0 w-[45%] md:w-[48%] z-20">
              <div className="bg-blue-600 rounded-3xl p-8 md:p-12 min-h-[200px] md:min-h-[240px] flex flex-col items-center justify-center text-center relative">
                <div className="text-white mb-4">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Network</h3>
                
                {/* Bottom connector */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-black rounded-full z-30"></div>
                
                {/* Right connector */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-16 bg-black rounded-full z-30"></div>
              </div>
            </div>

            {/* Card 2 - Top Right (Coaching) */}
            <div className="absolute top-0 right-0 w-[45%] md:w-[48%] z-20">
              <div className="bg-blue-600 rounded-3xl p-8 md:p-12 min-h-[200px] md:min-h-[240px] flex flex-col items-center justify-center text-center relative">
                <div className="text-white mb-4">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Success</h3>
                
                {/* Bottom connector */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-black rounded-full z-30"></div>
                
                {/* Left connector */}
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-16 bg-black rounded-full z-30"></div>
              </div>
            </div>

            {/* Card 3 - Bottom Left (Daily Tools) */}
            <div className="absolute bottom-0 left-0 w-[45%] md:w-[48%] z-20" style={{ top: '200px' }}>
              <div className="bg-blue-600 rounded-3xl p-8 md:p-12 min-h-[200px] md:min-h-[240px] flex flex-col items-center justify-center text-center relative">
                <div className="text-white mb-4">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Growth</h3>
                
                {/* Top connector */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-black rounded-full z-30"></div>
                
                {/* Right connector */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-16 bg-black rounded-full z-30"></div>
              </div>
            </div>

            {/* Card 4 - Bottom Right (Community) */}
            <div className="absolute bottom-0 right-0 w-[45%] md:w-[48%] z-20" style={{ top: '200px' }}>
              <div className="bg-blue-600 rounded-3xl p-8 md:p-12 min-h-[200px] md:min-h-[240px] flex flex-col items-center justify-center text-center relative">
                <div className="text-white mb-4">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.99 2.99 0 0 0 17.14 7H16c-.8 0-1.54.37-2.03.99L12 10l-1.97-2.01A2.99 2.99 0 0 0 8 7H6.86c-1.31 0-2.41.83-2.82 2.37L1.5 16H4v6h4v-6h2v6h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Community</h3>
                
                {/* Top connector */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-black rounded-full z-30"></div>
                
                {/* Left connector */}
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-16 bg-black rounded-full z-30"></div>
              </div>
            </div>

            {/* Center Connecting Cross */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              {/* Horizontal bar */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 h-8 md:h-12 bg-black rounded-full"></div>
              {/* Vertical bar */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 w-8 md:w-12 h-24 md:h-32 bg-black rounded-full"></div>
            </div>

            {/* Spacer for mobile layout */}
            <div className="h-[440px] md:h-[480px]"></div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              {company.buttonText}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CompanyPageProps) {
  const company = companyData[params.slug as keyof typeof companyData]
  
  if (!company) {
    return {
      title: 'Company Not Found'
    }
  }

  return {
    title: `${company.title} - ${company.subtitle}`,
    description: company.description,
  }
}

// Generate static params for the three companies
export async function generateStaticParams() {
  return [
    { slug: 'bni' },
    { slug: 'tab' },
    { slug: 'corporate-connections' },
  ]
}
