import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
      .to(descRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.4");
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-[100vh] flex flex-col justify-center items-center text-center px-6 md:px-12 text-white pointer-events-none">
      
      <div className="z-10 bg-[#020C17]/20 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl pointer-events-auto flex flex-col items-center">
        <p ref={subtitleRef} className="opacity-0 translate-y-4 text-[#D4AF37] tracking-[0.4em] text-sm md:text-base font-medium mb-4 drop-shadow-md">VÖKKA</p>
        
        <h1 ref={titleRef} className="opacity-0 translate-y-8 font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider mb-2 drop-shadow-xl">
          THAI AQUA
        </h1>
        
        <p ref={descRef} className="opacity-0 translate-y-4 text-white/90 text-sm md:text-base tracking-[0.2em] max-w-md drop-shadow-lg mb-8 uppercase">
          EAU DE PARFUM <br/><span className="text-[#1FDEC3] lowercase italic font-serif">Fresh aquatic fragrance</span>
        </p>
        <a ref={ctaRef} href="#purchase" className="opacity-0 translate-y-4 inline-block bg-white text-[#020C17] hover:bg-[#1FDEC3] transition-colors py-4 px-10 tracking-widest text-sm font-medium rounded-sm pointer-events-auto">
          SHOP NOW
        </a>
      </div>
      
      <div className="absolute top-[85vh] left-1/2 -translate-x-1/2 md:left-12 md:-translate-x-0 flex flex-col items-center gap-4 animate-pulse pointer-events-none">
        <span className="text-xs tracking-[0.2em] text-white/70">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
