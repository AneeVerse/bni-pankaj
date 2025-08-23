import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import EventSlider from '@/components/EventSlider'
import CTASection from '@/components/CTASection'

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
  params: Promise<{ slug: string }>
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params
  const company = companyData[slug as keyof typeof companyData]

  if (!company) {
    notFound()
  }

  return (
    <div className="min-h-screen ">
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
            <h2 className="text-4xl md:text-5xl lg:text-[80px] font-bold text-white mb-6" style={{ letterSpacing: '-0.08em', wordSpacing: '0.01em' }}>
              How it works
            </h2>
            <p className="text-white text-lg md:text-lg max-w-3xl mx-auto -mb-10">
              The {company.title} System has 4 fully integrated parts.
            </p>
          </div>


          {/* Interlocking Cards Design Image */}
          <div className=" mb-50 flex justify-center max-w-full mx-auto select-none pointer-events-none" style={{ userSelect: 'none', outline: 'none' }}>
            <Image
              src="/images/about/design.png"
              alt="How it works - Interlocking system design"
              width={1200}
              height={600}
              className="w-full max-w-5xl h-auto object-contain select-none pointer-events-none"
              style={{ userSelect: 'none', outline: 'none' }}
              draggable={false}
            />
          </div>
          </div>
          </section>
          <section className="w-full bg-white py-16 md:py-24 ">
          <div className="  bg-white flex justify-center max-w-full mx-auto select-none pointer-events-none" style={{ userSelect: 'none', outline: 'none' }}>
            <Image
              src="/images/company/company-overlay.avif"
              alt="How it works - Interlocking system design"
              width={1100}
              height={500}
              className="w-full max-w-[945px] h-auto object-contain select-none pointer-events-none -mt-80 rounded-2xl"
              style={{ userSelect: 'none', outline: 'none' }}
              draggable={false}
            />
          </div>
          </section>

          {/* She's Unstoppable Summit Section */}
          <section className="w-full bg-white py-16 md:py-24 max-w-[1080px] mx-auto -mt-35">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6">
              
              {/* Header */}
              <div className="text-left mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
                  A Free Virtual Event by Sage & Tony Robbins | August 20-22, 2025
                </h2>
              
              </div>

              {/* Main Content */}
              <div className="max-w-[900px] mx-auto space-y-8">
                
                {/* Opening Question */}
                <div className="text-left space-y-4 -mt-10">
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    Are you a woman who constantly pours into others, always checking boxes and pushing through, yet lately, something feels… missing?
                  </p>
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    Perhaps you&apos;re not looking for more to do, but for more that&apos;s true. More meaning, more presence, more you.
                  </p>
                </div>

                {/* Event Description */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    If you feel a quiet yearning for a deeper connection with your authentic self, then the She&apos;s Unstoppable Summit 2025 is your invitation to pause, catch your breath, and finally catch up with yourself.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This free, 3-day virtual event, hosted by Sage Robbins, is designed specifically for women ready to reconnect with their inner power and align with their deepest knowing.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                    From August 20-22, 2025, join thousands of women worldwide from 2-4pm ET daily for a transformative experience to awaken the unstoppable woman already within you.
                  </p>
                </div>

                {/* Are You Ready Section */}
                <div className=" space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-left">
                    Are You Ready to Answer the Call for More?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In a world that constantly demands more from women—more effort, more sacrifice, more holding it all together—it&apos;s easy to lose touch with your own needs and desires.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You might be excelling in your career, managing a bustling household, or tirelessly supporting your loved ones, but beneath the surface, a quiet question lingers: &ldquo;What do I need now?&rdquo; This isn&apos;t a sign of weakness or being &ldquo;behind&rdquo;; it&apos;s a powerful awakening.
                  </p>
                  <p className="text-xl font-bold text-gray-900 text-left">
                    You&apos;re not behind. You&apos;re becoming!
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The She&apos;s Unstoppable Summit is a profound answer to that call. It&apos;s an opportunity to shed the expectations that no longer serve you and embrace a path that feels authentic and true. It&apos;s about moving beyond the endless to-do lists and discovering a deeper sense of purpose and presence.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    If you&apos;re ready to embrace your personal growth journey and cultivate a life that truly reflects your inner self, then this event is for you. It&apos;s time to stop pushing through and start flowing with grace and strength, allowing your true self to emerge.
                  </p>
                </div>

                {/* What You'll Experience Section */}
                <div className="space-y-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-left">
                    What You&apos;ll Experience at the She&apos;s Unstoppable Summit
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed text-left">
                    Over three transformative days, you&apos;ll delve into key areas that will help you reclaim your authentic self during the powerful journey of the She&apos;s Unstoppable Summit.
                  </p>

                  {/* Experience Points */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900">Remember Who You Are</h4>
                      <p className="text-gray-700">
                        Reconnect with the woman beneath the roles, responsibilities, and expectations—and come home to your truth.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900">Rise from a Kinder Place</h4>
                      <p className="text-gray-700">
                        Move through life&apos;s transitions with grace, not grit. Discover how softness and strength can live side by side.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900">Show Up for Yourself</h4>
                      <p className="text-gray-700">
                        Trade self-silencing for self-honoring. Learn to speak with clarity, choose with courage, and act with alignment.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900">Be Connected in Sisterhood</h4>
                      <p className="text-gray-700">
                        Surround yourself with women who reflect your wholeness back to you—and remind you that you don&apos;t have to do it all alone.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900">Reignite What You&apos;ve Set Aside</h4>
                      <p className="text-gray-700">
                        Call back the parts of yourself you&apos;ve put on hold—your joy, your creativity, your voice, your peace—and welcome them home.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900">Leave with What You Need</h4>
                      <p className="text-gray-700">
                        Regain your clarity, calm, and your next step that feels true. You won&apos;t leave the same—and you won&apos;t leave empty-handed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-left pt-8">
                  <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg">
                    Save My Free Seat for the She&apos;s Unstoppable Summit!
                  </button>
                </div>

              </div>
            </div>
          </section>

        <EventSlider />
        <CTASection />


      <Footer />
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CompanyPageProps) {
  const { slug } = await params
  const company = companyData[slug as keyof typeof companyData]
  
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

