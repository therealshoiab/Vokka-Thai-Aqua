import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { splitTextReveal } from '../utils/animations';
import { useMagnetic } from '../hooks/useMagnetic';

interface HeroProps {
  onBuyClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  
  // Use magnetic hook for the CTA button
  const ctaRef = useMagnetic() as React.RefObject<HTMLButtonElement>;

  useEffect(() => {
    // Hide title text initially to prevent flash of unstyled content
    if (titleRef.current) gsap.set(titleRef.current, { visibility: 'visible' });

    const tl = gsap.timeline();
    
    // Logo/Subtitle fades/scales in first
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5
    });
    
    // Headline splits by character and rises with blur-to-sharp transition
    if (titleRef.current) {
      // Small delay so it happens right after subtitle starts
      setTimeout(() => {
        splitTextReveal(titleRef.current!, { delay: 0.2, duration: 1.5 });
      }, 500);
      
      // We add a dummy tween to the timeline just for timing purposes
      tl.to({}, { duration: 1 }, "-=1");
    }

    // Then description and CTA
    tl.to([descRef.current, ctaRef.current], {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.5");

    // Scroll-linked transition: shrink and fade as user scrolls past hero
    const st = gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      scale: 0.9,
      y: 100,
      ease: "power2.inOut"
    });

    return () => {
      tl.kill();
      st.kill();
    };
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-[100vh] flex flex-col justify-between py-24 px-6 md:px-12 text-white pointer-events-none z-10">
      
      {/* TOP SECTION: TITLE */}
      <div className="w-full flex flex-col items-center mt-0 md:mt-12 pointer-events-auto">
        <p ref={subtitleRef} className="opacity-0 translate-y-4 scale-95 text-[#D4AF37] tracking-[0.4em] text-sm md:text-base font-medium mb-2 drop-shadow-md">VÖKKA</p>
        
        {/* Added invisible class initially to prevent unstyled text flash before SplitType runs */}
        <h1 ref={titleRef} className="invisible font-serif text-[clamp(2.5rem,10vw,5rem)] md:text-7xl lg:text-8xl tracking-wider mb-2 drop-shadow-xl text-center leading-none">
          THAI AQUA
        </h1>
      </div>
      
      {/* BOTTOM SECTION: CTA */}
      <div className="w-full flex flex-col items-center pb-12">
        <p ref={descRef} className="opacity-0 translate-y-4 text-center max-w-md text-white/80 text-sm md:text-base leading-relaxed tracking-wider drop-shadow-lg mb-8">
          The essence of the ocean, distilled into a luxury fragrance. <br/>
          <span className="text-[#1FDEC3] lowercase italic font-serif tracking-normal text-sm md:text-base">Fresh · Aquatic · Unisex</span>
        </p>

        <button 
          ref={ctaRef}
          onClick={onBuyClick}
          className="opacity-0 translate-y-4 bg-white text-[#020C17] px-10 py-4 tracking-widest text-sm font-medium rounded-sm pointer-events-auto shadow-2xl transition-colors hover:bg-[#1FDEC3]"
        >
          SHOP NOW
        </button>
      </div>
      
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 animate-pulse pointer-events-none">
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[8px] md:text-[10px] tracking-[0.3em] text-white/50 uppercase">Discover</span>
      </div>
    </section>
  );
};

export default Hero;
