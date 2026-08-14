import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo('.story-content', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5,
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
    <section id="story" ref={containerRef} className="h-[150vh] w-full relative text-white flex items-center justify-center px-6">
      {/* Subtle aqua gradient behind the text/canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0089A7]/10 to-transparent pointer-events-none z-[-1]"></div>
      
      <div className="story-content max-w-3xl text-center z-10 pointer-events-auto bg-[#020C17]/40 backdrop-blur-md p-10 md:p-16 rounded-xl border border-white/5 shadow-2xl">
        <h2 className="font-serif text-4xl md:text-6xl mb-8 drop-shadow-lg">INSPIRED BY WATER.</h2>
        <p className="font-light text-lg md:text-2xl text-white leading-relaxed drop-shadow-md">
          Thai Aqua captures the feeling of crystal-clear water, warm sunlight and effortless confidence in a refined fragrance designed for everyday moments and unforgettable nights.
        </p>
      </div>
    </section>
  );
};

export default Story;
