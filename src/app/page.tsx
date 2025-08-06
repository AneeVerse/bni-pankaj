import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedOn from '@/components/FeaturedOn';
import VentureSection from '@/components/VentureSection';
import VentureDetail from '@/components/VentureDetail';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navbar />
      <Hero />
      <FeaturedOn />
      <VentureSection videoUrl="/video/venture.mp4" />
      <VentureDetail videoUrl="/video/venture.mp4" />
    </div>
  );
}
