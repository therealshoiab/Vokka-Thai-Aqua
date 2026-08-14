import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextReveal } from '../utils/animations';
import { useMagnetic } from '../hooks/useMagnetic';

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
    <section ref={containerRef} className="h-[70vh] min-h-[500px] w-full flex flex-col items-center justify-center text-white relative z-20 bg-gradient-to-t from-[#01060B] to-transparent pointer-events-auto border-t border-white/5">
      <div className="text-center z-10 px-6 w-full">
        <h2 ref={titleRef} className="invisible font-serif text-[clamp(2.5rem,8vw,4.5rem)] md:text-7xl mb-4 tracking-wide drop-shadow-2xl leading-tight">MAKE THEM<br/>REMEMBER YOU.</h2>
        <p className="text-[10px] md:text-xs tracking-[0.4em] text-[#1FDEC3] mb-10 font-medium">VÖKKA THAI AQUA</p>
        <button 
          ref={btnRef}
          onClick={onBuyClick}
          className="opacity-0 bg-white text-[#020C17] hover:bg-[#1FDEC3] transition-colors py-4 px-12 tracking-widest text-sm font-medium rounded-sm shadow-xl hover:shadow-[#1FDEC3]/20 w-full max-w-[280px]"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
