import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedOn from '@/components/FeaturedOn';
import VentureSection from '@/components/VentureSection';
import VentureDetail from '@/components/VentureDetail';
import Testimonials from '@/components/Testimonials';
import EventSlider from '@/components/EventSlider';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="md:min-h-screen">
      <Navbar />
      <Hero height="90vh" />
      <FeaturedOn />
      <VentureSection videoUrl="/video/venture.mp4" />
      <EventSlider />
      <VentureDetail videoUrl="/video/venture.mp4" />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
