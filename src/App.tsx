import { useEffect } from 'react';
import { usePreloader } from './hooks/usePreloader';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import ProductSequence from './components/ProductSequence';
import Hero from './components/Hero';
import ScentNotes from './components/ScentNotes';
import Reveal from './components/Reveal';
import Purchase from './components/Purchase';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { progress, isInitialLoaded, loadedImages } = usePreloader();

  useEffect(() => {
    if (isInitialLoaded) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [isInitialLoaded]);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-[#1FDEC3] selection:text-[#020C17] overflow-x-hidden">
      {!isInitialLoaded && <Preloader progress={progress} />}
      
      <Navbar />
      
      <div id="main-scroll-container" className="relative w-full">
        {isInitialLoaded && <ProductSequence images={loadedImages} />}
        
        <div className="relative z-10 w-full overflow-x-hidden">
          <Hero />
          <ScentNotes />
          <Reveal />
          <Purchase />
          <Testimonials />
          <FinalCTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
