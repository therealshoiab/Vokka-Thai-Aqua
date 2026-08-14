import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface HeroProps {
  onBuyClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
      .to(descRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.4");
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-[100vh] flex flex-col justify-between py-24 px-6 md:px-12 text-white pointer-events-none z-10">
      
      {/* TOP SECTION: TITLE */}
      <div className="w-full flex flex-col items-center mt-0 md:mt-12 pointer-events-auto">
        <p ref={subtitleRef} className="opacity-0 translate-y-4 text-[#D4AF37] tracking-[0.4em] text-sm md:text-base font-medium mb-2 drop-shadow-md">VÖKKA</p>
        
        <h1 ref={titleRef} className="opacity-0 translate-y-8 font-serif text-[clamp(2.5rem,10vw,5rem)] md:text-7xl lg:text-8xl tracking-wider mb-2 drop-shadow-xl text-center leading-none">
          THAI AQUA
        </h1>
      </div>

      {/* MIDDLE SECTION: CLEAR SAFE ZONE FOR BOTTLE */}
      <div className="flex-1 w-full min-h-[30vh]"></div>
      
      {/* BOTTOM SECTION: CTA */}
      <div className="w-full flex flex-col items-center mb-16 md:mb-12 pointer-events-auto bg-transparent md:bg-[#020C17]/10 md:backdrop-blur-sm p-4 rounded-xl md:border md:border-white/5">
        <p ref={descRef} className="opacity-0 translate-y-4 text-white/90 text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] max-w-md drop-shadow-lg mb-6 uppercase text-center leading-relaxed">
          EAU DE PARFUM <br/>
          <span className="text-[#1FDEC3] lowercase italic font-serif tracking-normal text-sm md:text-base">Fresh · Aquatic · Unisex</span>
        </p>

        <button 
          ref={ctaRef}
          onClick={onBuyClick}
          className="opacity-0 translate-y-4 mt-12 bg-white text-[#020C17] px-8 py-3 tracking-widest text-sm font-medium hover:bg-[#1FDEC3] transition-colors rounded-sm pointer-events-auto shadow-2xl"
        >
          SHOP NOW
        </button>
      </div>
      
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 animate-pulse pointer-events-none">
        <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/70">
          SCROLL
        </span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/70 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
