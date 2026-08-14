import { useEffect, useState } from 'react';
import { usePreloader } from './hooks/usePreloader';
import Navbar from './components/Navbar';
import ProductSequence from './components/ProductSequence';
import Hero from './components/Hero';
import ScentNotes from './components/ScentNotes';
import ProductDetails from './components/ProductDetails';
import ProductGallery from './components/ProductGallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CheckoutModal from './components/CheckoutModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { isInitialLoaded, loadedImages } = usePreloader();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    if (isInitialLoaded) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    }
  }, [isInitialLoaded]);

  const openCheckout = (quantity: number = 1) => {
    setSelectedQuantity(quantity);
    setIsCheckoutOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-[#050B14] overflow-x-hidden bg-[#050B14]">
        
        <Navbar onShopClick={() => openCheckout(1)} />
        
        <div id="main-scroll-container" className="relative w-full">
          {isInitialLoaded && <ProductSequence images={loadedImages} />}
          
          <div className="relative z-10 w-full overflow-x-hidden">
            <Hero onBuyClick={() => openCheckout(1)} />
            <ScentNotes />
            {/* Reveal section removed — was causing ghost "CRAFTED TO" text between sections */}
            <ProductDetails />
            <ProductGallery />
            <Pricing onBuyClick={(qty) => openCheckout(qty)} />
            <Testimonials />
            <FinalCTA onBuyClick={() => openCheckout(1)} />
            <Footer />
          </div>
        </div>

        <CheckoutModal 
          isOpen={isCheckoutOpen} 
          onClose={() => setIsCheckoutOpen(false)} 
          initialQuantity={selectedQuantity}
        />
      </div>
    </SmoothScroll>
  );
}

export default App;
