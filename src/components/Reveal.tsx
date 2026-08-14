import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextReveal } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const Reveal: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !text1Ref.current || !text2Ref.current) return;
    
    // Hide initially to prevent flash
    gsap.set([text1Ref.current, text2Ref.current], { visibility: 'visible' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "+=150%", // Keep the longer scroll distance requested earlier
        scrub: 1.5, // Smoother scrub for luxury feel
        pin: true,
      }
    });

    // Reveal first line
    tl.add(() => splitTextReveal(text1Ref.current!, { duration: 1.5, stagger: 0.08 }))
      .to({}, { duration: 2 }) // hold
      .to(text1Ref.current, { opacity: 0, y: -20, duration: 1, filter: 'blur(5px)' });

    // Reveal second line
    tl.add(() => splitTextReveal(text2Ref.current!, { duration: 1.5, stagger: 0.08 }))
      .to({}, { duration: 3 }) // hold longer
      .to(text2Ref.current, { opacity: 0, scale: 1.1, duration: 1.5, filter: 'blur(10px)' });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === containerRef.current) st.kill();
      });
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full flex items-center justify-center relative z-10 pointer-events-none px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#01060B]/60 to-transparent"></div>
      
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <h2 ref={text1Ref} className="invisible font-serif text-[clamp(2.5rem,8vw,5rem)] text-white tracking-widest drop-shadow-2xl absolute w-full max-w-4xl px-4">
          EVERY DETAIL MATTERS.
        </h2>
        
        <h2 ref={text2Ref} className="invisible font-serif text-[clamp(2.5rem,8vw,5rem)] text-white tracking-widest drop-shadow-2xl absolute w-full max-w-4xl px-4 leading-tight">
          CRAFTED TO BE<br/>
          <span className="text-[#D4AF37]">REMEMBERED.</span>
        </h2>
      </div>
    </section>
  );
};

export default Reveal;
