import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import EventSlider from '@/components/EventSlider'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

// Company data structure
const companyData = {
  bni: {
    title: "BNI NAVI MUMBAI",
    subtitle: "Structured Referral Engine",
    description: "Word-of-mouth is still the best marketing. But it only works when it's systematic. BNI gives you a proven weekly structure to generate qualified referrals with trusted business professionals.",
    additionalInfo: "Our members passed over ₹100 crores in referrals last year. Because when everyone succeeds, everyone wins. One referral can change your entire year.",
    logo: "/images/venture/ff445e7d753b31b4df15ae1abb0ec9a02f4d3b94.png",
    logoAlt: "BNI Logo",
    companyImage: "/images/company/bni.jpeg",
    companyImageAlt: "BNI Company",
    buttonText: "Visit a BNI Chapter Meeting",
    backgroundColor: "#efefef",
    textColor: "text-gray-900",
    features: [
      "Proven weekly structure for referrals",
      "Network of trusted business professionals",
      "Over ₹100 crores in referrals passed last year",
      "Systematic word-of-mouth marketing"
    ],
    interlockingCards: {
      card1: {
        title: "CONNECT",
        description: "Weekly chapter meetings where business owners from non-competing industries build trust and share referrals in a structured, professional environment."
      },
      card2: {
        title: "COLLABORATE",
        description: "Members work together through one-to-ones, training sessions, and relationship-building activities that deepen professional bonds and business understanding."
      },
      card3: {
        title: "CONTRIBUTE",
        description: "Each member actively gives qualified referrals to fellow members, following our core philosophy of 'Givers Gain' to create mutual business growth."
      },
      card4: {
        title: "CELEBRATE",
        description: "Track measurable results as members generate crores worth of business for each other through consistent, word-of-mouth marketing that works."
      }
    }
  },
  tab: {
    title: "THE ALTERNATIVE BOARD",
    subtitle: "Strategic Leadership Circle",
    description: "Your toughest business decisions shouldn't be made alone. TAB connects you with 10-12 fellow CEOs and business owners in monthly confidential sessions. Share real challenges. Get practical solutions. Plus one-on-one coaching to turn insights into action.",
    additionalInfo: "Members report 23% average revenue growth and clearer long-term vision within 12 months. Because great leaders make great decisions when they have the right support.",
    logo: "/images/venture/tab.png",
    logoAlt: "The Alternative Board Logo",
    companyImage: "/images/company/tab.jpeg",
    companyImageAlt: "TAB Company",
    buttonText: "Apply for TAB Membership",
    backgroundColor: "#efefef",
    textColor: "text-gray-900",
    features: [
      "Monthly confidential CEO sessions",
      "10-12 peer business owners",
      "One-on-one coaching included",
      "23% average revenue growth",
      "Clearer long-term vision"
    ],
    interlockingCards: {
      card1: {
        title: "CONVENE",
        description: "Monthly confidential peer advisory board meetings where 8-12 business owners share challenges, opportunities, and strategic decisions in a trusted env"
      },
      card2: {
        title: "COACH",
        description: "One-on-one business coaching sessions with experienced facilitators who provide personalized guidance, accountability, and proven business fram"
      },
      card3: {
        title: "COLLABORATE",
        description: "Collective problem-solving where diverse business perspectives combine to generate breakthrough solutions and innovative strategies for rea"
      },
      card4: {
        title: "CATALYZE",
        description: "Access to global TAB network resources, tools, and insights that accelerate decision-making and transform business vision into measurable results."
      }
    }
  },
  "corporate-connections": {
    title: "CORPORATE CONNECTIONS",
    subtitle: "Executive Influence Network",
    description: "Your network determines your net worth. But building the right connections takes time you don't have. Corporate Connections brings together Navi Mumbai's most influential executives, decision-makers, and industry leaders in private forums.",
    additionalInfo: "Skip the small talk. Build relationships that matter. Access opportunities that transform your business and expand your influence across industries.",
    logo: "/images/venture/d7ddf110031b054df193d8ae5b7aab1295e2887a.png",
    logoAlt: "Corporate Connections Logo",
    companyImage: "/images/company/CC.jpg",
    companyImageAlt: "Corporate Connections Company",
    buttonText: "Join the Executive Circle",
    backgroundColor: "#efefef",
    textColor: "text-gray-900",
    features: [
      "Network with influential executives",
      "Private decision-maker forums",
      "Cross-industry opportunities",
      "Transform business relationships",
      "Access to industry leaders"
    ],
    interlockingCards: {
      card1: {
        title: "CURATE",
        description: "Exclusive membership limited to top-tier CEOs, founders, and senior executives who meet strict criteria for leadership excellence and business achievement."
      },
      card2: {
        title: "CONNECT",
        description: "Private forums and intimate networking sessions where decision-makers engage in strategic peer-to-peer conversations that matter at the highest levels of business."
      },
      card3: {
        title: "COLLABORATE",
        description: "Cross-border business opportunities, joint ventures, and transformative partnerships that leverage the collective expertise and resources of global leaders."
      },
      card4: {
        title: "CULTIVATE",
        description: "Ongoing leadership development and influence expansion through exclusive events, mentorship opportunities, and access to international business networks."
      }
    }
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
            <div className="absolute w-[100%] h-[40%] left-[10%] top-[40%] bg-gradient-to-bl from-[transparent] via-[#ffffff] to-[#ffffff] rounded-full transform rotate-[-130deg] z-15 hidden sm:block  blur-lg"></div> 

            {/* Section 1 - Company Title (Top Left) - Curved on Bottom Right - 3/5 width */}
            <div className="relative bg-[#000000] rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-3xl md:col-span-3 z-25">
              <div className="p-4 md:p-8 lg:p-10 flex flex-col justify-center min-h-[200px] md:min-h-[250px] relative z-30">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8 text-left">
                  <span className="font-bold uppercase">{company.title}</span>
                  <br />
                  <span className="font-normal lowercase">{company.subtitle}</span>
                </h2>
              </div>
            </div>

            {/* Section 2 - Company Logo (Top Right) - Curved on Top Left and Bottom Right - 2/5 width (small box) */}
            <div className="relative bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-3xl rounded-bl-3xl overflow-hidden md:col-span-2 z-30 mb-5 lg:mb-0">
              <div className="p-4 md:p-8 lg:p-10 flex items-center justify-center min-h-[200px] md:min-h-[250px] relative">
                <Image
                  src={company.logo}
                  alt={company.logoAlt}
                  width={200}
                  height={100}
                  className="max-w-[80%] md:max-w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Section 3 - Company Image (Bottom Left) - Curved on Top Right - 3/5 width */}
            <div className="relative bg-[#000000] rounded-tr-3xl rounded-bl-3xl md:col-span-3 overflow-hidden z-10">
              <div className="relative w-full h-full min-h-[250px] md:min-h-[360px] flex items-center justify-center z-30">
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
                    src={company.companyImage}
                    alt={company.companyImageAlt}
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
              <div className="px-4 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 flex flex-col justify-center min-h-[200px] md:min-h-[280px] lg:min-h-[300px] relative z-30">
                <p className="text-white text-sm md:text-base leading-relaxed mb-3 md:mb-4 font-medium text-left max-w-none ml-2">
                  {company.description}
                </p>
                <p className="text-white text-sm md:text-base leading-relaxed mb-3 md:mb-4 font-medium text-left max-w-none ml-2">
                  {company.additionalInfo}
                </p>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section - Interlocking Cards Design */}
      <section className="w-full bg-black py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-[80px] font-bold text-white mb-4 md:mb-6" style={{ letterSpacing: '-0.08em', wordSpacing: '0.01em' }}>
              How it works
            </h2>
            <p className="text-white text-base md:text-lg max-w-3xl mx-auto -mb-8 md:-mb-10">
              The {company.title} System has 4 fully integrated parts.
            </p>
          </div>


          {/* Interlocking Cards Design Image with Text Overlays */}
          <div className="relative mb-32 md:mb-50 flex justify-center max-w-full mx-auto select-none pointer-events-none" style={{ userSelect: 'none', outline: 'none' }}>
            <Image
              src="/images/about/designnew.png"
              alt="How it works - Interlocking system design"
              width={1200}
              height={600}
              className="w-full max-w-5xl h-auto object-contain select-none pointer-events-none"
              style={{ userSelect: 'none', outline: 'none' }}
              draggable={false}
            />
            
            {/* Text Overlays for the 4 Cards */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-5xl h-full relative">
                
                {/* Card 1 - Top Left */}
                <div className="absolute top-[9%] left-[10%] w-[32%] pointer-events-none">
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg text-left">
                    {company.interlockingCards.card1.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-white leading-relaxed drop-shadow-lg text-left">
                    {company.interlockingCards.card1.description}
                  </p>
                </div>

                {/* Card 2 - Top Right */}
                <div className="absolute top-[9%] right-[10%] w-[32%] pointer-events-none">
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg text-left">
                    {company.interlockingCards.card2.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-white leading-relaxed drop-shadow-lg text-left">
                    {company.interlockingCards.card2.description}
                  </p>
                </div>

                {/* Card 3 - Bottom Left */}
                <div className={`absolute ${slug === 'corporate-connections' ? 'bottom-[10%]' : 'bottom-[13%]'} left-[10%] w-[32%] pointer-events-none`}>
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg text-left">
                    {company.interlockingCards.card3.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-white leading-relaxed drop-shadow-lg text-left">
                    {company.interlockingCards.card3.description}
                  </p>
                </div>

                {/* Card 4 - Bottom Right */}
                <div className={`absolute ${slug === 'corporate-connections' ? 'bottom-[10%]' : 'bottom-[13%]'} right-[10%] w-[32%] pointer-events-none`}>
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 drop-shadow-lg text-left">
                    {company.interlockingCards.card4.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-white leading-relaxed drop-shadow-lg text-left">
                    {company.interlockingCards.card4.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </section>
          <section className="w-full bg-white py-12 md:py-24 ">
          <div className="  bg-white flex justify-center max-w-full mx-auto select-none pointer-events-none" style={{ userSelect: 'none', outline: 'none' }}>
            <Image
              src={`/images/company/overlay/${slug === 'bni' ? 'bni.png' : slug === 'tab' ? 'tab.png' : 'cc.png'}`}
              alt="How it works - Interlocking system design"
              width={1100}
              height={500}
              className="w-full max-w-[94vw] md:max-w-[945px] h-auto object-contain select-none pointer-events-none -mt-40 md:-mt-80 rounded-2xl"
              style={{ userSelect: 'none', outline: 'none' }}
              draggable={false}
            />
          </div>
          </section>

          {/* Company-Specific Content Section */}
          <section className="w-full bg-white py-12 md:py-24 max-w-[1080px] mx-auto -mt-20 md:-mt-35">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6">
              
              {/* Header */}
              <div className="text-left mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {slug === 'bni' && "Transform Your Business Network Into Your Most Powerful Revenue Engine"}
                  {slug === 'corporate-connections' && "Where India's Most Influential Leaders Shape The Future Of Business"}
                  {slug === 'tab' && "Stop Making Critical Business Decisions In Isolation"}
                </h2>
                <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
                  {slug === 'bni' && "Join BNI Navi Mumbai – Where Business Relationships Create Extraordinary Results"}
                  {slug === 'corporate-connections' && "Join CorporateConnections® Navi Mumbai – The Exclusive Network For Decision-Makers Who Move Markets"}
                  {slug === 'tab' && "Join TAB Maharashtra - Where Business Owners Get The Strategic Guidance They Can't Find Anywhere Else"}
                </p>
              </div>

              {/* Main Content */}
              <div className="max-w-[900px] mx-auto space-y-6 md:space-y-8">
                
                {/* ABOUT Section */}
                <div className="text-left space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900">ABOUT</h3>
                  
                  {slug === 'bni' && (
                    <>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        You&apos;re leaving money on the table every single day.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        While you&apos;re grinding away trying to find new customers through expensive ads and cold outreach, successful business owners in Navi Mumbai have discovered a smarter way to grow. They&apos;re using the power of structured networking to generate qualified leads, trusted referrals, and measurable business results week after week, month after month.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        BNI Navi Mumbai is not your typical networking group. We&apos;re part of BNI (Business Network International), the world&apos;s largest business networking and referral organization, and we&apos;ve built one of the fastest-growing and most dynamic regions in India.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Here&apos;s what makes us different: We operate on a proven system. Every week, business owners from diverse, non competing industries meet with one clear purpose to pass qualified business referrals to each other. This isn&apos;t casual networking over coffee. This is strategic, measurable, results-driven business development.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Our members have generated crores worth of business for each other. That&apos;s not hype that&apos;s documented, trackable results from entrepreneurs, professionals, and business owners who understand that the fastest way to grow is through the trusted recommendations of people who know your work.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Under the leadership of Executive Director Pankaj Harwansh, our multiple thriving chapters create a platform where businesses meet real opportunities. When you join BNI Navi Mumbai, you&apos;re not just expanding your network you&apos;re plugging into a proven system that turns relationships into revenue.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        The &quot;Givers Gain&quot; philosophy drives everything we do. The more business you give to fellow members, the more business flows back to you. It&apos;s word-of-mouth marketing with structure, accountability, and measurable results.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Whether you&apos;re a startup looking to establish credibility, an established business ready to scale, or a professional seeking to expand your influence, BNI Navi Mumbai provides the tools, training, and community to help you succeed. This is where connections become opportunities, and opportunities become success stories every single day.
                      </p>
                    </>
                  )}

                  {slug === 'corporate-connections' && (
                    <>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Most networking events are a waste of your time.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        As a CEO, founder, or senior executive, you&apos;ve sat through countless business gatherings filled with small talk, business card exchanges, and people who simply can&apos;t operate at your level. You leave frustrated, knowing that your time – your most precious resource – was squandered on connections that lead nowhere.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        CorporateConnections® Navi Mumbai changes everything.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        We&apos;re not another networking group. We&apos;re the exclusive platform where India&apos;s top business leaders, decision-makers, and influential executives gather to create real value. Under the visionary leadership of Executive Director Pankaj Harwansh, we&apos;ve built something extraordinary – a curated environment where only the most accomplished leaders gain access.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        This is peer-to-peer networking at the highest level. Every conversation is strategic. Every connection is powerful. Every opportunity is transformative.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Our members don&apos;t just grow their businesses – they expand their influence, enhance their leadership capabilities, and create lasting impact in their industries and communities. Through private forums, exclusive events, and cross-border business opportunities, you&apos;ll engage with leaders who think bigger, move faster, and achieve more.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        The difference is in the curation. We maintain strict membership criteria because dilution destroys value. When you&apos;re surrounded by CEOs, founders, and executives who&apos;ve already proven their excellence, the conversations naturally elevate to match the caliber of minds in the room.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        As part of the globally recognized CorporateConnections® network, our Navi Mumbai region gives you access to international business opportunities and global leadership networks that can transform not just your business, but your entire industry perspective.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        This isn&apos;t networking – this is strategic alliance building at the executive level. Where visionary leaders connect, collaborate, and succeed together.
                      </p>
                    </>
                  )}

                  {slug === 'tab' && (
                    <>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Running a business is the loneliest job in the world.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Every day, you make decisions that affect your company&apos;s future, your employees&apos; livelihoods, and your family&apos;s security. But who do you turn to for unbiased, strategic advice? Your employees look to you for answers. Your family wants you to succeed but doesn&apos;t understand the complexities. Your competitors aren&apos;t sharing their secrets.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        You&apos;re making million-dollar decisions with incomplete information.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        The Alternative Board (TAB) Maharashtra changes this forever. We&apos;re not consultants selling you solutions. We&apos;re not coaches with theoretical frameworks. We&apos;re a confidential peer advisory board where successful business owners, CEOs, and entrepreneurs come together to solve real problems with real experience.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Here&apos;s how it works: Every month, you sit around a table with 8-12 other business leaders who&apos;ve faced similar challenges. They&apos;ve navigated economic downturns, scaled operations, managed difficult employees, and built successful exits. When you present a challenge, you get perspectives from leaders who&apos;ve actually been there.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Under the guidance of Regional Head Pankaj Harwansh, TAB Maharashtra combines the power of peer wisdom with proven business tools and strategic frameworks used by thousands of successful companies worldwide. You&apos;re not just getting advice you&apos;re getting battle-tested strategies from the global TAB network.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        The magic happens in the confidentiality. Members sign strict confidentiality agreements, creating a safe space where you can share your real challenges, your actual numbers, and your genuine concerns without fear of judgment or competition.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Plus, you get one-on-one business coaching sessions that provide personalized guidance and accountability between board meetings. This isn&apos;t group therapy – this is strategic business acceleration.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Our members don&apos;t just solve problems faster – they identify opportunities sooner, make better decisions consistently, and build more valuable businesses systematically.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Stop navigating your business journey alone. Join leaders who&apos;ve discovered that collective wisdom beats individual struggle every single time.
                      </p>
                    </>
                  )}
                </div>

                {/* READY TO Section */}
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900 text-left">
                    {slug === 'bni' && "READY TO TURN YOUR NETWORK INTO YOUR NET WORTH?"}
                    {slug === 'corporate-connections' && "READY TO ELEVATE YOUR LEADERSHIP NETWORK?"}
                    {slug === 'tab' && "READY TO MAKE BETTER BUSINESS DECISIONS WITH PROVEN PEER GUIDANCE?"}
                  </h3>
                  
                  {slug === 'bni' && (
                    <>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Join hundreds of successful business owners who&apos;ve discovered the power of structured referral marketing.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Reserve your spot at our next chapter meeting and see the BNI system in action.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Contact Executive Director Pankaj Harwansh today to learn how BNI Navi Mumbai can transform your business growth.
                      </p>
                    </>
                  )}

                  {slug === 'corporate-connections' && (
                    <>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Join the exclusive circle of CEOs, founders, and senior executives who are shaping the future of business in Navi Mumbai and beyond.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Apply for membership consideration and discover what happens when top leaders collaborate.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Contact Executive Director Pankaj Harwansh to begin your confidential membership evaluation.
                      </p>
                    </>
                  )}

                  {slug === 'tab' && (
                    <>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Join successful business owners who&apos;ve discovered the power of confidential peer advisory boards.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Reserve your seat at our next board meeting and experience the TAB difference firsthand.
                      </p>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Contact Regional Head Pankaj Harwansh to learn how TAB Maharashtra can accelerate your business growth.
                      </p>
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <div className="text-left pt-6 md:pt-8">
                  <Link href="/contact">
                    <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg">
                      {slug === 'bni' && "CONTACT US NOW"}
                      {slug === 'corporate-connections' && "APPLY FOR MEMBERSHIP"}
                      {slug === 'tab' && "SCHEDULE YOUR BOARD VISIT"}
                    </button>
                  </Link>
                </div>

                {/* Footer Note */}
                <div className="text-center pt-4">
                  <p className="text-xs md:text-sm text-gray-600 font-medium">
                    {slug === 'bni' && "Limited seats available, serious business owners only."}
                    {slug === 'corporate-connections' && "Membership by invitation and qualification only, Executive level leaders exclusively."}
                    {slug === 'tab' && "Membership by application only, Established business owners exclusively."}
                  </p>
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

