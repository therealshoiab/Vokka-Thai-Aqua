import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMagnetic } from '../hooks/useMagnetic';
import { Star, ShieldCheck, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onBuyClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orderBtnRef = useMagnetic() as React.RefObject<HTMLButtonElement>;

  useEffect(() => {
    if (!contentRef.current) return;

    // Simple fade-in for all hero children — mobile-safe, no complex splits
    const children = Array.from(contentRef.current.children);
    gsap.set(children, { opacity: 0, y: 30 });
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.3,
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
      <div ref={contentRef} className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-12 gap-6">
        
        {/* Eyebrow */}
        <div className="text-[#D4AF37] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase py-1.5 px-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 backdrop-blur-md rounded-full">
          ✦ LUXURY EAU DE PARFUM • 100ML
        </div>
        
        {/* Title */}
        <h1 className="font-serif text-[clamp(2.2rem,8vw,5.5rem)] font-bold tracking-wider leading-none text-white text-shadow-premium">
          THE ESSENCE OF THE <br className="hidden md:inline" />
          ANDAMAN SEA.
        </h1>
        
        {/* Subtitle */}
        <p className="max-w-2xl text-white text-sm md:text-base leading-relaxed tracking-wide text-shadow-premium font-medium pointer-events-auto">
          A masterfully concentrated Eau De Parfum fusing sun-drenched Thai citrus zest, aquatic aldehydes, and grounding Mysore sandalwood. Engineered for an 8+ hour magnetic sillage.
        </p>

        {/* Price Badge */}
        <div className="py-2 px-5 bg-[#050B14]/40 border border-[#D4AF37]/35 backdrop-blur-md rounded-sm inline-flex flex-wrap items-center justify-center gap-2.5">
          <span className="text-[11px] font-semibold tracking-wider text-[#F5E6C8] uppercase">Special Direct Launch:</span>
          <span className="text-base font-bold text-[#D4AF37] font-serif">₹600</span>
          <span className="text-[10px] text-white/40 line-through">MRP ₹2,999</span>
          <span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-1.5 py-0.5 rounded font-bold">80% Off</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center pointer-events-auto">
          <button
            ref={orderBtnRef}
            onClick={() => onBuyClick && onBuyClick()}
            className="w-full sm:w-auto bg-[#D4AF37] text-[#050B14] hover:bg-white transition-all duration-300 py-4 px-10 tracking-[0.15em] text-xs font-extrabold rounded-sm shadow-[0_0_25px_rgba(212,175,55,0.25)]"
          >
            ORDER VIA WHATSAPP
          </button>
          <button
            onClick={scrollToNotes}
            className="w-full sm:w-auto border border-white/20 hover:border-[#D4AF37] transition-all duration-300 py-4 px-10 tracking-[0.15em] text-xs font-bold rounded-sm text-white"
          >
            EXPLORE NOTES ↓
          </button>
        </div>

        {/* Trust Pills */}
        <div className="flex flex-wrap justify-center gap-3 text-[10px] tracking-wider text-white/70">
          <div className="flex items-center gap-1.5 py-1.5 px-3 bg-[#050B14]/40 border border-white/[0.05] rounded-full backdrop-blur-md">
            <Star size={11} className="text-[#D4AF37]" fill="#D4AF37" />
            <span className="font-semibold text-white">4.2★ Rated</span>
            <span className="text-white/40">(21,000+ Reviews)</span>
          </div>
          <div className="flex items-center gap-1.5 py-1.5 px-3 bg-[#050B14]/40 border border-white/[0.05] rounded-full backdrop-blur-md">
            <Heart size={11} className="text-[#D4AF37]" fill="#D4AF37" />
            <span className="font-semibold text-white">100% Unisex EDP</span>
          </div>
          <div className="flex items-center gap-1.5 py-1.5 px-3 bg-[#050B14]/40 border border-white/[0.05] rounded-full backdrop-blur-md">
            <ShieldCheck size={11} className="text-[#D4AF37]" />
            <span className="font-semibold text-white">Pay on Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
