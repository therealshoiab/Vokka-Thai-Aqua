import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      src: `${import.meta.env.BASE_URL}gallery/1.jpg`,
      title: "THE MONOLITH",
      desc: "VÖKKA Thai Aqua resting on a reflective obsidian pedestal."
    },
    {
      src: `${import.meta.env.BASE_URL}gallery/2.jpg`,
      title: "VANITY OASIS",
      desc: "Designed to elevate premium marble countertops."
    },
    {
      src: `${import.meta.env.BASE_URL}gallery/3.jpg`,
      title: "SEA BREEZE",
      desc: "Pure marine freshness set against the azure Andaman horizon."
    },
    {
      src: `${import.meta.env.BASE_URL}gallery/4.jpg`,
      title: "TROPICAL RITUAL",
      desc: "Chilled infinity pool reflections highlighting the warm saffron notes."
    },
    {
      src: `${import.meta.env.BASE_URL}gallery/5.jpg`,
      title: "AQUATIC RUSH",
      desc: "Raw, energetic water splashes capturing the signature clean aldehydes."
    }
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

    // Showcase & Thumbnails scroll animation
    gsap.fromTo([showcaseRef.current, thumbnailsRef.current],
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      }
    );
  }, []);

  // Fade out/in showcase image on transition
  const handleTabChange = (index: number) => {
    if (activeTab === index) return;
    
    const tl = gsap.timeline();
    tl.to(".gallery-showcase-img", {
      opacity: 0,
      scale: 0.98,
      duration: 0.3,
      onComplete: () => {
        setActiveTab(index);
      }
    });
    tl.to(".gallery-showcase-img", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  return (
    <section ref={containerRef} className="py-24 w-full bg-[#050B14] text-white z-20 relative pointer-events-auto border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Title Block */}
        <div ref={titleRef} className="text-center max-w-2xl mb-16">
          <span className="text-[#D4AF37] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-3 block">VISUAL CAMPAIGN</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wider mb-4 text-shadow-premium">THAI AQUA IN FOCUS</h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto font-medium">
            Explore the luxury bottle design of VÖKKA Thai Aqua in its natural element. Premium heavy-molded glass crowned with a champagne-knurled gold cap.
          </p>
        </div>

        {/* Dynamic Showcase & Stepper */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Showcase Screen */}
          <div ref={showcaseRef} className="lg:col-span-8 relative aspect-[16/10] md:aspect-[16/9] bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent z-10 pointer-events-none"></div>
            
            <img 
              src={images[activeTab].src} 
              alt={images[activeTab].title}
              className="gallery-showcase-img w-full h-full object-cover transition-all duration-300"
            />
            
            {/* Image Overlay Label */}
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-[#050B14]/70 backdrop-blur-md border border-white/[0.06] p-5 rounded-xl max-w-md">
              <span className="text-[#D4AF37] text-[9px] font-bold tracking-[0.25em] block mb-1 uppercase">SCENE 0{activeTab + 1}</span>
              <h3 className="font-serif text-base md:text-lg font-bold tracking-wide mb-1.5">{images[activeTab].title}</h3>
              <p className="text-[11px] text-white/70 leading-relaxed font-medium">{images[activeTab].desc}</p>
            </div>
          </div>

          {/* Large description / specs list on side */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-white/[0.02] border border-white/[0.07] backdrop-blur-xl rounded-2xl">
            <div className="space-y-6">
              <span className="text-[#D4AF37] tracking-[0.2em] text-[10px] font-bold uppercase block">BOTTLE ARCHITECTURE</span>
              <h4 className="font-serif text-2xl font-bold tracking-wide">DESIGN DETAILS</h4>
              <p className="text-xs text-white/70 leading-relaxed font-medium">
                VÖKKA Thai Aqua features a bespoke 100ml heavy glass formulation. Designed in France, the custom-knurled gold screw cap and heavy-base flacon reflect the luxury juice inside.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/50 font-medium">Bottle Glass</span>
                  <span className="text-[#F5E6C8] font-bold">Ultra-Clear Heavy-Base</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/50 font-medium">Atomizer Spray</span>
                  <span className="text-[#F5E6C8] font-bold">Micro-Mist Dispenser</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/50 font-medium">Cap Texture</span>
                  <span className="text-[#F5E6C8] font-bold">Knurled Luxury Gold</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/50 font-medium">Formulation</span>
                  <span className="text-[#F5E6C8] font-bold">Concentrated EDP (Unisex)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/50">
              <span>* Matches original product dimensions</span>
              <span className="text-[#D4AF37] font-bold">100ml e 3.4 fl.oz</span>
            </div>
          </div>

        </div>

        {/* Thumbnail Selector list */}
        <div ref={thumbnailsRef} className="w-full flex items-center justify-center gap-4 flex-wrap">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => handleTabChange(i)}
              className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border transition-all duration-300 ${
                activeTab === i 
                  ? 'border-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.25)]' 
                  : 'border-white/10 hover:border-white/40'
              }`}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className={`absolute inset-0 bg-[#050B14]/40 group-hover:opacity-0 transition-opacity duration-300 ${
                activeTab === i ? 'opacity-0' : 'opacity-100'
              }`}></div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGallery;
