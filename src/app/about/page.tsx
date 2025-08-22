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
                        &ldquo;Make sure all the choices you make in life come from a point of awareness and not ignorance.&rdquo;
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
                         An extraordinary life is one on your terms, both of deep meaning and incredible impact. Driven by the pursuit of excellence and guided by a profound sense of purpose, Tony Robbins has inspired millions to dream bigger and reach higher.
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
                                The start of a bigger story
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Pankaj doesn&apos;t come from wealth.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                He believes that life is an incredible journey, filled with moments of deep reflection and transformation. Through his work with BNI and various business networks, Pankaj has discovered that true success isn&apos;t just about financial achievements, but about creating meaningful connections and helping others realize their potential. His journey from humble beginnings to becoming a respected business leader and motivational speaker demonstrates that with awareness, purpose, and dedication, anyone can create extraordinary results in their life.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className=" relative w-full max-w-md  max-h-[60vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/about/about1.avif"
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
                                    src="/images/about/about2.avif"
                                    alt="The secret to living is giving"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                The secret to living is giving
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                What he learned that day is creating means everything.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                In his father&apos;s last precious moments he saw a failure he became angry - and stayed that way. But it is Tony who meant strength once. And if strangers could care, he could too.
                            </p>
                            <p className="text-base text-gray-600 leading-relaxed mt-4">
                                This was the catalyst for Tony becoming a practical psychologist. He committed himself to learning what actually causes one person to think another to remain stuck. Gathering knowledge about success from the world&apos;s best he set out to help people become the best versions of themselves - in every area of life.
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
                                A life dedicated to a greater purpose
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Pankaj&apos;s mission remains to give back in any he continues to do what he does
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Today, Pankaj continues to inspire many through his work as a leader at BNI Navi Mumbai, where he has dedicated himself to building connections and creating opportunities for business professionals. His work extends beyond networking - he believes in transforming lives through awareness and conscious decision-making. Through his speaking engagements and mentorship, Pankaj helps individuals and organizations realize their true potential and create lasting positive impact in their communities.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className=" relative w-full max-w-md max-h-[60vh] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/about/about3.avif"
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
