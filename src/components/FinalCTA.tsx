import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMagnetic } from '../hooks/useMagnetic';
import { ShoppingCart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FinalCTAProps {
  onBuyClick?: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onBuyClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const btnRef = useMagnetic() as React.RefObject<HTMLButtonElement>;

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;

    // Simple, reliable reveal — no SplitType on mobile
    const children = Array.from(innerRef.current.children);
    gsap.set(children, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
        });
      },
      once: true,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-[60vh] w-full flex flex-col items-center justify-center text-white relative z-20 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent pointer-events-auto border-t border-white/5 py-24 px-6"
    >
      <div ref={innerRef} className="text-center z-10 w-full max-w-4xl mx-auto">
        {/* Gold divider */}
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8"></div>

        {/* Main headline - no SplitType, just CSS reveal */}
        <h2 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-wider leading-tight text-white text-shadow-premium">
          MAKE THEM
        </h2>
        <h2 className="font-serif text-[clamp(2rem,6vw,4rem)] font-bold tracking-wider leading-tight mb-6 text-[#D4AF37] text-shadow-premium">
          REMEMBER YOU.
        </h2>

        <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#D4AF37]/70 mb-10 font-bold uppercase">
          ✦ VÖKKA THAI AQUA ✦
        </p>

        <button
          ref={btnRef}
          onClick={onBuyClick}
          className="bg-[#D4AF37] text-[#050B14] hover:bg-white hover:text-[#050B14] transition-all duration-300 py-4 px-12 tracking-[0.2em] text-xs font-extrabold rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2.5 mx-auto"
        >
          <ShoppingCart size={14} />
          ORDER VIA WHATSAPP
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
