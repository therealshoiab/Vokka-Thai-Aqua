import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMagnetic } from '../hooks/useMagnetic';
import { Star, ShieldCheck, Heart } from 'lucide-react';
import { splitTextReveal } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onBuyClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const priceBadgeRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const trustPillsRef = useRef<HTMLDivElement>(null);
  const orderBtnRef = useMagnetic() as React.RefObject<HTMLButtonElement>;

  useEffect(() => {
    // Set initial states for elements except headline (which is handled by SplitType)
    gsap.set([eyebrowRef.current, descRef.current, priceBadgeRef.current, ctasRef.current, trustPillsRef.current], {
      opacity: 0,
      y: 20
    });

    // Start with the main headline pop animation
    if (headlineRef.current) {
      splitTextReveal(headlineRef.current, { delay: 0.1, duration: 0.8 });
    }

    // Animate other elements matching the timing
    gsap.to([eyebrowRef.current, descRef.current, priceBadgeRef.current, ctasRef.current, trustPillsRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.4
    });

    // Scroll-linked fade/scale out
    const st = gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
      y: 40,
      ease: 'none',
    });

    return () => { st.kill(); };
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
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-12 gap-6">
        
        {/* Eyebrow */}
        <div ref={eyebrowRef} className="text-[#D4AF37] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase py-1.5 px-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 backdrop-blur-md rounded-full">
          ✦ LUXURY EAU DE PARFUM • 100ML
        </div>
        
        {/* Title - splits & pops out */}
        <h1 ref={headlineRef} className="invisible font-serif text-[clamp(2.2rem,8vw,5.5rem)] font-bold tracking-wider leading-none text-white text-shadow-premium">
          THE ESSENCE OF THE <br className="hidden md:inline" />
          ANDAMAN SEA.
        </h1>
        
        {/* Subtitle */}
        <p ref={descRef} className="max-w-2xl text-white text-sm md:text-base leading-relaxed tracking-wide text-shadow-premium font-medium pointer-events-auto">
          A masterfully concentrated Eau De Parfum fusing sun-drenched Thai citrus zest, aquatic aldehydes, and grounding Mysore sandalwood. Engineered for an 8+ hour magnetic sillage.
        </p>

        {/* Price Badge */}
        <div ref={priceBadgeRef} className="py-2 px-5 bg-[#050B14]/60 border border-[#D4AF37]/50 backdrop-blur-md rounded-sm inline-flex flex-wrap items-center justify-center gap-2.5">
          <span className="text-[11px] font-bold tracking-wider text-[#F5E6C8] uppercase">Special Direct Launch:</span>
          <span className="text-base font-extrabold text-[#F5E6C8] font-serif">₹600</span>
          <span className="text-[10px] text-white/60 line-through font-semibold">MRP ₹2,999</span>
          <span className="text-[10px] bg-[#D4AF37]/30 text-[#F5E6C8] px-1.5 py-0.5 rounded font-bold">80% Off</span>
        </div>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center pointer-events-auto">
          <button
            ref={orderBtnRef}
            onClick={() => onBuyClick && onBuyClick()}
            className="w-full sm:w-auto bg-[#D4AF37] text-[#050B14] hover:bg-white transition-all duration-300 py-4 px-10 tracking-[0.15em] text-xs font-extrabold rounded-sm shadow-[0_0_25px_rgba(212,175,55,0.25)]"
          >
            ORDER VIA WHATSAPP
          </button>
          <button
            onClick={scrollToNotes}
            className="w-full sm:w-auto border border-white/30 hover:border-[#D4AF37] transition-all duration-300 py-4 px-10 tracking-[0.15em] text-xs font-bold rounded-sm text-white"
          >
            EXPLORE NOTES ↓
          </button>
        </div>

        {/* Trust Pills */}
        <div ref={trustPillsRef} className="flex flex-wrap justify-center gap-3 text-[10px] tracking-wider text-white">
          <div className="flex items-center gap-1.5 py-1.5 px-3 bg-[#050B14]/60 border border-white/[0.1] rounded-full backdrop-blur-md">
            <Star size={11} className="text-[#D4AF37]" fill="#D4AF37" />
            <span className="font-bold text-[#F5E6C8]">4.2★ Rated</span>
            <span className="text-white/80 font-bold">(21,000+ Reviews)</span>
          </div>
          <div className="flex items-center gap-1.5 py-1.5 px-3 bg-[#050B14]/60 border border-white/[0.1] rounded-full backdrop-blur-md">
            <Heart size={11} className="text-[#D4AF37]" fill="#D4AF37" />
            <span className="font-bold text-[#F5E6C8]">100% Unisex EDP</span>
          </div>
          <div className="flex items-center gap-1.5 py-1.5 px-3 bg-[#050B14]/60 border border-white/[0.1] rounded-full backdrop-blur-md">
            <ShieldCheck size={11} className="text-[#D4AF37]" />
            <span className="font-bold text-[#F5E6C8]">Pay on Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
