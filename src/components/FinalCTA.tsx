import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextReveal } from '../utils/animations';
import { useMagnetic } from '../hooks/useMagnetic';
import { ShoppingCart } from 'lucide-react';

interface FinalCTAProps {
  onBuyClick?: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onBuyClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Use magnetic hook for button
  const btnRef = useMagnetic() as React.RefObject<HTMLButtonElement>;

  useEffect(() => {
    if (!containerRef.current || !titleRef.current) return;
    
    gsap.set(titleRef.current, { visibility: 'visible' });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 70%",
      onEnter: () => {
        splitTextReveal(titleRef.current!, { duration: 1.2, stagger: 0.05 });
        gsap.fromTo(btnRef.current, 
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.5 }
        );
      },
      once: true
    });
  }, []);

  return (
    <section ref={containerRef} className="h-[70vh] min-h-[500px] w-full flex flex-col items-center justify-center text-white relative z-20 bg-gradient-to-t from-[#050B14] via-[#0A1320]/60 to-transparent pointer-events-auto border-t border-white/5">
      <div className="text-center z-10 px-6 w-full max-w-4xl mx-auto">
        <h2 ref={titleRef} className="invisible font-serif text-[clamp(2.5rem,8vw,4.5rem)] md:text-7xl mb-4 font-bold tracking-wider drop-shadow-2xl leading-tight">
          MAKE THEM<br />
          <span className="bg-gradient-to-r from-[#F5E6C8] to-[#00F0FF] bg-clip-text text-transparent">REMEMBER YOU.</span>
        </h2>
        <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#38BDF8] mb-10 font-bold uppercase">✦ VÖKKA THAI AQUA ✦</p>
        <button 
          ref={btnRef}
          onClick={onBuyClick}
          className="opacity-0 bg-[#00F0FF] text-[#050B14] hover:bg-white hover:text-[#050B14] transition-all duration-300 py-4.5 px-12 tracking-[0.2em] text-xs font-extrabold rounded-sm shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] w-full max-w-[320px] flex items-center justify-center gap-2.5 mx-auto"
        >
          <ShoppingCart size={14} />
          ORDER VIA WHATSAPP
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
