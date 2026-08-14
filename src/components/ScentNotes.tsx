import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScentNotes: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo('.scent-note', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <section id="notes" ref={containerRef} className="h-[100vh] min-h-[600px] w-full relative text-white flex flex-col items-center justify-end md:justify-center px-4 md:px-12 pointer-events-none pb-12 md:pb-0">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center bg-[#020C17]/40 backdrop-blur-md p-6 md:p-12 rounded-xl border border-white/5 shadow-2xl pointer-events-auto mt-16 md:mt-0">
        <h2 className="font-serif text-[clamp(2rem,8vw,3rem)] md:text-5xl tracking-wide mb-4 md:mb-6">THE SCENT</h2>
        
        <p className="font-light text-sm md:text-xl text-white/90 leading-relaxed max-w-2xl mb-8 md:mb-12 drop-shadow-md">
          A fresh aquatic composition created for effortless confidence, from the first spray to the final impression.
        </p>

        <div className="flex flex-col md:flex-row justify-between w-full gap-8">
          <div className="scent-note flex flex-col items-center flex-1">
            <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#D4AF37] mb-2 md:mb-4 border-b border-[#D4AF37]/30 pb-2 w-full">TOP</h3>
            <p className="font-serif text-base md:text-xl text-white drop-shadow-md">Bergamot · Pink Pepper</p>
          </div>
          
          <div className="scent-note flex flex-col items-center flex-1">
            <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#D4AF37] mb-2 md:mb-4 border-b border-[#D4AF37]/30 pb-2 w-full">HEART</h3>
            <p className="font-serif text-base md:text-xl text-white drop-shadow-md">Jasmine · White Flowers</p>
          </div>
          
          <div className="scent-note flex flex-col items-center flex-1">
            <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#D4AF37] mb-2 md:mb-4 border-b border-[#D4AF37]/30 pb-2 w-full">BASE</h3>
            <p className="font-serif text-base md:text-xl text-white drop-shadow-md">Amber · Musk · Woody Notes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScentNotes;
