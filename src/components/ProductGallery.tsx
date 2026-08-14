import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProductGallery: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: `${import.meta.env.BASE_URL}gallery/1.jpg`, label: "SCENE 01" },
    { src: `${import.meta.env.BASE_URL}gallery/2.jpg`, label: "SCENE 02" },
    { src: `${import.meta.env.BASE_URL}gallery/3.jpg`, label: "SCENE 03" },
    { src: `${import.meta.env.BASE_URL}gallery/4.jpg`, label: "SCENE 04" },
    { src: `${import.meta.env.BASE_URL}gallery/5.jpg`, label: "SCENE 05" }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Header entry animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }
    );

    // Scroll container entry
    gsap.fromTo(scrollContainerRef.current,
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      }
    );
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -window.innerWidth * 0.4,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: window.innerWidth * 0.4,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={containerRef} className="py-24 w-full bg-transparent text-white z-20 relative pointer-events-auto border-t border-white/[0.05] overflow-hidden">
      
      {/* Title Block - Left-aligned matching "CRAFTED WITHOUT COMPROMISE" */}
      <div ref={titleRef} className="max-w-2xl mb-16 px-6 md:px-12 text-left">
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wider mb-4 text-shadow-premium">THAI AQUA IN FOCUS</h2>
        <div className="w-16 h-[1px] bg-[#F5E6C8] mb-6"></div>
        <p className="text-white text-sm leading-relaxed text-shadow-premium font-bold">
          Explore the luxury bottle design of VÖKKA Thai Aqua in its natural element. Premium heavy-molded glass crowned with a champagne-knurled gold cap.
        </p>
      </div>

      {/* Interactive Carousel Wrapper */}
      <div className="relative w-full">
        
        {/* Navigation Arrows - Desktop Only */}
        <button 
          onClick={scrollLeft}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#050B14]/80 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-all backdrop-blur-md hidden md:flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={scrollRight}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#050B14]/80 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-all backdrop-blur-md hidden md:flex"
        >
          <ChevronRight size={20} />
        </button>

        {/* Scroll Container - Stacked vertically on mobile, horizontally scrolling on desktop */}
        <div 
          ref={scrollContainerRef}
          className="flex flex-col md:flex-row gap-8 md:gap-6 md:overflow-x-auto md:snap-x md:snap-mandatory md:scrollbar-none w-full py-4 px-6 md:px-12 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, i) => (
            <div 
              key={i} 
              className="w-full md:w-[60vw] lg:w-[48vw] md:flex-shrink-0 snap-center aspect-[16/10] bg-white/[0.01] border border-white/[0.07] rounded-2xl overflow-hidden shadow-2xl relative group"
            >
              <img 
                src={img.src} 
                alt={`Vokka Thai Aqua scene ${i+1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default ProductGallery;
