import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScentNotes: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const notes = gsap.utils.toArray('.scent-note');
    notes.forEach((note: any, i: number) => {
      // Alternate sliding from left and right
      const xOffset = i % 2 === 0 ? -50 : 50;
      
      gsap.fromTo(note, 
        { 
          opacity: 0, 
          x: xOffset,
          scale: 0.95
        }, 
        {
          scrollTrigger: {
            trigger: note,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} id="notes" className="py-20 w-full text-white pointer-events-none relative z-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 pointer-events-auto">
        
        {/* Left Side: Transparent spacer to let bottle show */}
        <div className="hidden md:block w-1/2"></div>
        
        {/* Right Side: Scent Notes */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-32 md:mt-0">
          <div className="mb-12 scent-note">
            <h2 className="font-serif text-3xl md:text-5xl mb-4 text-right md:text-left drop-shadow-lg">THE ESSENCE</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] ml-auto md:ml-0 mb-6"></div>
            <p className="text-white/80 text-sm leading-relaxed text-right md:text-left drop-shadow-md">
              A masterful blend of aquatic freshness and deep, resonant woods. Designed to evoke the feeling of standing at the edge of the ocean at midnight.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="border-l border-[#1FDEC3]/30 pl-6 relative scent-note">
              <div className="absolute w-2 h-2 rounded-full bg-[#1FDEC3] -left-[4.5px] top-2"></div>
              <h3 className="text-[#1FDEC3] text-sm tracking-[0.2em] mb-2 font-medium">TOP NOTES</h3>
              <p className="font-serif text-xl md:text-2xl drop-shadow-md">Bergamot, Sea Salt, Lemon Zest</p>
            </div>
            
            <div className="border-l border-white/30 pl-6 relative scent-note">
              <div className="absolute w-2 h-2 rounded-full bg-white/50 -left-[4.5px] top-2"></div>
              <h3 className="text-white/60 text-sm tracking-[0.2em] mb-2 font-medium">HEART NOTES</h3>
              <p className="font-serif text-xl md:text-2xl drop-shadow-md">Blue Lotus, Driftwood, Clary Sage</p>
            </div>
            
            <div className="border-l border-[#D4AF37]/30 pl-6 relative scent-note">
              <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37] -left-[4.5px] top-2"></div>
              <h3 className="text-[#D4AF37] text-sm tracking-[0.2em] mb-2 font-medium">BASE NOTES</h3>
              <p className="font-serif text-xl md:text-2xl drop-shadow-md">Sandalwood, Ambergris, Vetiver</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ScentNotes;
