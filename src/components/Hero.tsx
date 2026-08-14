import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { splitTextReveal } from '../utils/animations';
import { useMagnetic } from '../hooks/useMagnetic';
import { Star, ShieldCheck, Heart } from 'lucide-react';

interface HeroProps {
  onBuyClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const priceBadgeRef = useRef<HTMLDivElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const trustPillsRef = useRef<HTMLDivElement>(null);

  // Magnetic CTAs
  const orderBtnRef = useMagnetic() as React.RefObject<HTMLButtonElement>;

  useEffect(() => {
    if (titleRef.current) gsap.set(titleRef.current, { visibility: 'visible' });

    const tl = gsap.timeline();
    
    // Eyebrow enters first
    tl.to(eyebrowRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });
    
    // Headline split reveal
    if (titleRef.current) {
      setTimeout(() => {
        splitTextReveal(titleRef.current!, { delay: 0, duration: 1.2, stagger: 0.04 });
      }, 300);
      tl.to({}, { duration: 0.8 });
    }

    // Subtitle & Price Badge
    tl.to([subtitleRef.current, priceBadgeRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.3");

    // CTAs & Trust Pills
    tl.to([ctaContainerRef.current, trustPillsRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.2");

    // Scroll-linked shrink/fade out
    const st = gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      scale: 0.95,
      y: 50,
      ease: "none"
    });

    return () => {
      tl.kill();
      st.kill();
    };
  }, []);

  const scrollToNotes = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('notes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      ref={containerRef} 
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-12 text-white pointer-events-none z-10 overflow-hidden"
    >
      {/* radial gradient background mask to increase description legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/60 via-[#050B14]/30 to-[#050B14] z-0"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-12">
        {/* Eyebrow */}
        <div 
          ref={eyebrowRef} 
          className="opacity-0 translate-y-4 text-[#38BDF8] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-4 py-1.5 px-4 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(56,189,248,0.05)]"
        >
          ✦ LUXURY EAU DE PARFUM • 100ML
        </div>
        
        {/* Title */}
        <h1 
          ref={titleRef} 
          className="invisible font-serif text-[clamp(2.2rem,8vw,5.5rem)] md:text-6xl lg:text-7xl font-bold tracking-wider leading-none mb-6 text-white text-shadow-premium"
        >
          THE ESSENCE OF THE <br className="hidden md:inline" />
          <span className="bg-gradient-to-r from-white via-[#F5E6C8] to-[#00F0FF] bg-clip-text text-transparent">ANDAMAN SEA.</span>
        </h1>
        
        {/* Subtitle */}
        <p 
          ref={subtitleRef} 
          className="opacity-0 translate-y-4 max-w-2xl text-white/95 text-sm md:text-base leading-relaxed tracking-wide mb-8 pointer-events-auto text-shadow-premium font-medium"
        >
          A masterfully concentrated Eau De Parfum fusing sun-drenched Thai citrus zest, aquatic aldehydes, and grounding Mysore sandalwood. Engineered for an 8+ hour magnetic sillage.
        </p>

        {/* Price Badge */}
        <div 
          ref={priceBadgeRef} 
          className="opacity-0 translate-y-4 mb-8 py-2 px-5 bg-[#050B14]/65 border border-[#00F0FF]/30 backdrop-blur-md rounded-sm inline-flex items-center gap-2.5 shadow-[0_0_20px_rgba(0,240,255,0.05)]"
        >
          <span className="text-[11px] md:text-xs font-semibold tracking-wider text-[#F5E6C8] uppercase">Special Direct Launch:</span>
          <span className="text-sm md:text-base font-bold text-[#00F0FF] font-serif">₹600</span>
          <span className="text-[10px] md:text-xs text-white/40 line-through">MRP ₹2,999</span>
          <span className="text-[10px] md:text-xs bg-[#00F0FF]/20 text-[#00F0FF] px-1.5 py-0.5 rounded font-bold">80% Off</span>
        </div>

        {/* CTAs */}
        <div 
          ref={ctaContainerRef} 
          className="opacity-0 translate-y-4 flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-10 pointer-events-auto"
        >
          <button 
            ref={orderBtnRef}
            onClick={() => onBuyClick && onBuyClick()}
            className="w-full sm:w-auto bg-[#00F0FF] text-[#050B14] hover:bg-white hover:text-[#050B14] transition-all duration-300 py-4 px-10 tracking-[0.15em] text-xs font-extrabold rounded-sm shadow-[0_0_25px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 animate-pulse"
          >
            ORDER VIA WHATSAPP
          </button>
          
          <button 
            onClick={scrollToNotes}
            className="w-full sm:w-auto border border-white/20 hover:border-[#00F0FF] hover:bg-white/[0.03] transition-all duration-300 py-4 px-10 tracking-[0.15em] text-xs font-bold rounded-sm text-white"
          >
            EXPLORE NOTES ↓
          </button>
        </div>

        {/* Trust Pills */}
        <div 
          ref={trustPillsRef} 
          className="opacity-0 translate-y-4 flex flex-wrap justify-center gap-3 md:gap-4 text-[10px] md:text-xs tracking-wider text-white/70"
        >
          <div className="flex items-center gap-1.5 py-1.5 px-3 bg-[#050B14]/40 border border-white/[0.05] rounded-full backdrop-blur-md">
            <Star size={11} className="text-[#00F0FF]" fill="#00F0FF" />
            <span className="font-semibold text-white">4.2★ Rated</span>
            <span className="text-white/40">(21,000+ Reviews)</span>
          </div>
          <div className="flex items-center gap-1.5 py-1.5 px-3 bg-[#050B14]/40 border border-white/[0.05] rounded-full backdrop-blur-md">
            <Heart size={11} className="text-[#38BDF8]" fill="#38BDF8" />
            <span className="font-semibold text-white">100% Unisex EDP</span>
          </div>
          <div className="flex items-center gap-1.5 py-1.5 px-3 bg-[#050B14]/40 border border-white/[0.05] rounded-full backdrop-blur-md">
            <ShieldCheck size={11} className="text-[#F5E6C8]" />
            <span className="font-semibold text-white">Pay on Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
