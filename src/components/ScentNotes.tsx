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
    <section id="notes" ref={containerRef} className="h-[200vh] w-full relative text-white flex flex-col items-center md:items-start justify-center px-6 md:px-24 pointer-events-none">
      <div className="sticky top-1/3 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-16 bg-[#020C17]/40 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl">
        <div className="md:w-1/3">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">THE SCENT</h2>
          <p className="text-[#0089A7] font-light text-xl tracking-wide max-w-sm text-center md:text-left drop-shadow-lg">
            A carefully balanced composition designed to evolve with you.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:w-1/3">
          <div className="scent-note flex flex-col items-center md:items-start">
            <h3 className="text-xs tracking-[0.3em] text-[#D4AF37] mb-4 border-b border-[#D4AF37]/30 pb-2">TOP NOTES</h3>
            <ul className="space-y-2 font-serif text-2xl text-white text-center md:text-left drop-shadow-md">
              <li>Bergamot</li>
              <li>Pink Pepper</li>
            </ul>
          </div>
          <div className="scent-note flex flex-col items-center md:items-start">
            <h3 className="text-xs tracking-[0.3em] text-[#D4AF37] mb-4 border-b border-[#D4AF37]/30 pb-2">HEART NOTES</h3>
            <ul className="space-y-2 font-serif text-2xl text-white text-center md:text-left drop-shadow-md">
              <li>Jasmine</li>
              <li>White Flowers</li>
            </ul>
          </div>
          <div className="scent-note flex flex-col items-center md:items-start">
            <h3 className="text-xs tracking-[0.3em] text-[#D4AF37] mb-4 border-b border-[#D4AF37]/30 pb-2">BASE NOTES</h3>
            <ul className="space-y-2 font-serif text-2xl text-white text-center md:text-left drop-shadow-md">
              <li>Amber</li>
              <li>Musk</li>
              <li>Woody Notes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScentNotes;
