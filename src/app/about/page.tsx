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
                <div className="relative w-full  max-w-[70vw] max-h-[70vh] aspect-[3/2] rounded-3xl overflow-hidden ">
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
                     Meet Pankaj Harwansh – The Strategic Connector Behind Maharashtra&apos;s Most Influential Business Networks
                     </p>
                 </div>
             </section>

             {/* About Sections */}

            {/* Section 1: The start of a bigger story */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-[1370px] mx-auto px-4 sm:px-6 ml-30">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Guiding Business Leaders Through Strategic Peer Advisory

                            </h2>
                          
                            <p className="text-lg text-gray-600 leading-relaxed">
                            As Regional Head of TAB Maharashtra, Pankaj has transformed how business owners approach critical decision making. He understands that running a business can be isolating, with leaders often making million dollar decisions without trusted advisors. Through confidential peer advisory boards, Pankaj creates safe spaces where CEOs and entrepreneurs can share real challenges and receive battle tested solutions from fellow business leaders. His approach combines the collective wisdom of successful peers with proven business frameworks, ensuring members don&apos;t just solve problems faster they build more valuable, sustainable businesses.

                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className=" relative w-full max-w-md  max-h-[60vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
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
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-[1370px] mx-auto px-4 sm:px-6 mr-30">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 flex justify-center">
                            <div className=" relative w-full max-w-md max-h-[60vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/company/CC.jpg"
                                    alt="The secret to living is giving"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Curating Executive Networks That Move Markets

                            </h2>
                           
                            <p className="text-base text-gray-600 leading-relaxed mt-4">
                            Leading CorporateConnections® Navi Mumbai, Pankaj has mastered the art of high-level executive networking. He recognizes that top business leaders need more than casual networking – they need strategic alliances with peers who operate at their level. Pankaj carefully curates exclusive membership, ensuring every connection is meaningful and every conversation drives real value. His vision has created a platform where CEOs, founders, and senior executives don&apos;t just expand their networks – they elevate their influence, enhance their leadership capabilities, and access cross-border opportunities that transform entire industries.

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: A life dedicated to a greater purpose */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-[1370px] mx-auto px-4 sm:px-6 ml-30">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Building Referral Systems That Generate Measurable Results
                            </h2>
                          
                            <p className="text-lg text-gray-600 leading-relaxed">
                            As Executive Director of BNI Navi Mumbai, Pankaj has built one of the fastest-growing regions in India&apos;s business networking landscape. He believes in the power of structured referral marketing and has proven that when business owners follow the &quot;Givers Gain&quot; philosophy with consistency and intent, extraordinary results follow. Under his leadership, BNI Navi Mumbai members have generated crores worth of business for each other, demonstrating that word-of-mouth marketing, when systematized and measured, becomes the most powerful growth engine any business can have.

                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className=" relative w-full max-w-md max-h-[60vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
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
