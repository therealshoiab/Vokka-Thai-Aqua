import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Reveal: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !text1Ref.current || !text2Ref.current) return;
    
    // Split text into characters
    const text1 = new SplitType(text1Ref.current, { types: 'chars,words' });
    const text2 = new SplitType(text2Ref.current, { types: 'chars,words' });

    // Initial state: hide characters and make headings visible
    gsap.set([text1Ref.current, text2Ref.current], { visibility: 'visible' });
    gsap.set(text1.chars, {
      y: 50,
      opacity: 0,
      filter: 'blur(10px)',
      scale: 0.9
    });
    gsap.set(text2.chars, {
      y: 50,
      opacity: 0,
      filter: 'blur(10px)',
      scale: 0.9
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "+=180%", // Keep scroll distance comfortable
        scrub: 1.5,
        pin: true,
      }
    });

    // Reveal first line directly in the timeline (ensures proper scrubbing)
    tl.to(text1.chars, {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      stagger: 0.05,
      duration: 1.2,
      ease: 'power3.out'
    })
    .to({}, { duration: 1.5 }) // Hold
    .to(text1.chars, {
      opacity: 0,
      y: -30,
      filter: 'blur(8px)',
      duration: 1,
      stagger: 0.02,
      ease: 'power2.in'
    })
    // Reveal second line directly in the timeline
    .to(text2.chars, {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      stagger: 0.05,
      duration: 1.2,
      ease: 'power3.out'
    })
    .to({}, { duration: 2 }) // Hold longer
    .to(text2.chars, {
      opacity: 0,
      scale: 1.15,
      filter: 'blur(12px)',
      duration: 1.2,
      stagger: 0.02,
      ease: 'power2.out'
    });

    return () => {
      tl.kill();
      text1.revert();
      text2.revert();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === containerRef.current) st.kill();
      });
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full flex items-center justify-center relative z-10 pointer-events-none px-4 bg-transparent">
      {/* No dark gradient overlays here to allow clean bottle scroll */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <h2 ref={text1Ref} className="invisible font-serif text-[clamp(2.2rem,7vw,4.5rem)] text-white font-bold tracking-widest text-shadow-premium absolute w-full max-w-4xl px-4 leading-none">
          EVERY DETAIL MATTERS.
        </h2>
        
        <h2 ref={text2Ref} className="invisible font-serif text-[clamp(2.2rem,7vw,4.5rem)] text-white font-bold tracking-widest text-shadow-premium absolute w-full max-w-4xl px-4 leading-tight">
          CRAFTED TO BE<br/>
          <span className="text-[#D4AF37]">REMEMBERED.</span>
        </h2>
      </div>
    </section>
  );
};

export default Reveal;
