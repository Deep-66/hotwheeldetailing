import Navigation from '@/components/Navigation';
import HeroWithCars from '@/components/HeroWithCars';
import CarImageGallery from '@/components/CarImageGallery';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navigation />
      <HeroWithCars />
      
      <CarImageGallery />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
