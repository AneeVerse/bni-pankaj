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
