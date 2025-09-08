import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Image from 'next/image';
import EventSlider from '@/components/EventSlider';
import CTASection from '@/components/CTASection';

export default function About() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero variant="about" />

            {/* Quote Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center -mt-10">
                    <blockquote className="text-2xl md:text-2xl lg:text-3xl  font-semibold text-gray-800 leading-relaxed">
                        &ldquo;Success in business isn&apos;t about having all the answers, it&apos;s about connecting with the right people who can help you find them. I&apos;ve dedicated my career to creating those connections.&rdquo;
                    </blockquote>
                </div>
            </section>

            {/* Pankaj's Image */}
            <div className="flex justify-center mb-40 -mt-5 bg-white">
                <div className="relative w-full max-w-[90vw] lg:max-w-[70vw] max-h-[80vh] lg:max-h-[70vh] aspect-[3/2] rounded-3xl overflow-hidden -mb-20 lg:-mb-0">
                    <Image
                        src="/images/bbg1.png"
                        alt="Pankaj Harwansh - Professional Portrait"
                        fill
                        className="object-cover "
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center 10%'
                        }}
                        priority
                    />
                </div>
                         </div>

             {/* Inspirational Quote Section */}
             <section className="py-16 md:py-20 bg-gray-50 -mt-25">
                 <div className="max-w-[920px] mx-auto px-4 sm:px-6 text-center">
                     <p className="text-2xl md:text-3xl lg:text-5xl font-[500] text-gray-800 leading-relaxed" style={{ letterSpacing: '-0.08em', wordSpacing: '0.01em', lineHeight: '1.1' }}>
                     Meet Pankaj J Harwnash, The Strategic Connector Behind Maharashtra&apos;s Most Influential Business Networks
                     </p>
                 </div>
             </section>

             {/* About Sections */}

            {/* Section 1: The start of a bigger story */}
            <section className="py-8 md:py-20 bg-gray-50">
                <div className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:ml-30">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1 text-left">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                            Founder & Executive Director
                            </h2>
                          
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Pankaj J Harwnash is a dynamic business leader with 28+ years in corporate relations, business development, and angel investments. A renowned community builder, he drives growth, innovation, and collaboration across industries.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative w-full max-w-[95vw] md:max-w-md max-h-[50vh] md:max-h-[60vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/company/tab.jpeg"
                                    alt="Pankaj&apos;s Journey"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: The secret to living is giving */}
            <section className="py-8 md:py-20 bg-white">
                <div className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:mr-30">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-1 flex justify-center">
                            <div className="relative w-full max-w-[95vw] md:max-w-md max-h-[50vh] md:max-h-[60vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/company/CC.jpg"
                                    alt="The secret to living is giving"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="order-2 text-left">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                            Leadership Roles
                            </h2>
                           
                            <p className="text-base text-gray-600 leading-relaxed mt-4">
                            Executive Director, BNI Navi Mumbai; Executive Director, Corporate Connections Global LLC; Regional Head, The Alternative Board Maharashtra and Goa; Partner, Turtle Care Consulting LLP; Regional Director, Venture Catalyst; Partner, Early Seed Ventures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: A life dedicated to a greater purpose */}
            <section className="py-8 md:py-20 bg-gray-50">
                <div className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:ml-30">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1 text-left">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                            Recognition and Mission
                            </h2>
                          
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            Honored as one of the Business Icons of Navi Mumbai by The Economic Times; awarded Executive Director of the Year 2023-24 by Corporate Connections Global LLC. A believer in Lifelong Learning, his mission is to build a robust business ecosystem in Navi Mumbai, enabling 5,000+ business owners to generate ₹5,000+ crores in referral business each year.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative w-full max-w-[95vw] md:max-w-md max-h-[50vh] md:max-h-[60vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/company/bni.jpeg"
                                    alt="A life dedicated to a greater purpose"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <EventSlider    />
            <CTASection />
            <Footer />
        </div>
    );
}
