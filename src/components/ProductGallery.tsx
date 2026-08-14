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
    <section ref={containerRef} className="py-24 w-full bg-[#050B14] text-white z-20 relative pointer-events-auto border-t border-white/[0.05] overflow-hidden">
      
      {/* Title Block - Only Eyebrow and Headline (No descriptions) */}
      <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16 px-6">
        <span className="text-[#D4AF37] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-4 block animate-pulse">VISUAL CAMPAIGN</span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wider text-white">THAI AQUA IN FOCUS</h2>
        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-6"></div>
      </div>

      {/* Interactive Carousel Wrapper */}
      <div className="relative w-full px-4 md:px-12">
        
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

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-none w-full py-4 px-4 md:px-12 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[48vw] snap-center aspect-[16/10] bg-white/[0.01] border border-white/[0.07] rounded-2xl overflow-hidden shadow-2xl relative group"
            >
              <img 
                src={img.src} 
                alt={`Vokka Thai Aqua scene ${i+1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Glassmorphic Scene Tab on top of image */}
              <div className="absolute top-4 left-4 z-20 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] px-4 py-2 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                <span className="text-[#D4AF37] text-[10px] tracking-[0.25em] font-extrabold uppercase">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default ProductGallery;
