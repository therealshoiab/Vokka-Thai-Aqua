import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);
  const text5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
      }
    });

    const texts = [text1Ref, text2Ref, text3Ref, text4Ref, text5Ref];
    
    texts.forEach((text) => {
      if (!text.current) return;
      tl.fromTo(text.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      ).to(text.current,
        { opacity: 0, y: -50, duration: 1 },
        "+=0.5"
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} id="fragrance" className="h-[300vh] w-full relative text-white pointer-events-none text-center">
      <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-4xl mx-auto flex flex-col items-center justify-center font-serif text-5xl md:text-7xl px-4 py-12 rounded-xl bg-[#020C17]/40 backdrop-blur-sm border border-white/5 shadow-2xl">
        <div ref={text1Ref} className="absolute opacity-0 drop-shadow-2xl">MORE THAN A FRAGRANCE.</div>
        <div ref={text2Ref} className="absolute opacity-0 drop-shadow-2xl">IT'S AN EXPERIENCE.</div>
        <div ref={text3Ref} className="absolute opacity-0 text-[#1FDEC3] drop-shadow-2xl">FRESH.</div>
        <div ref={text4Ref} className="absolute opacity-0 text-[#0089A7] drop-shadow-2xl">AQUATIC.</div>
        <div ref={text5Ref} className="absolute opacity-0 drop-shadow-2xl">UNFORGETTABLE.</div>
      </div>
    </section>
  );
};

export default Experience;
