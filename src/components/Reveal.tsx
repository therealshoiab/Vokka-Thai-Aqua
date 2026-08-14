import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reveal: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

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

    tl.fromTo('.reveal-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
      .to('.reveal-title', { opacity: 0, y: -30, duration: 1 }, "+=0.5")
      .fromTo('.reveal-micro', { opacity: 0, filter: "blur(10px)", scale: 0.8 }, { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1, stagger: 0.5 })
      .to('.reveal-micro', { opacity: 0, duration: 1 }, "+=1");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} id="details" className="h-[300vh] w-full relative text-white pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
        <div className="absolute top-1/4 text-center reveal-title bg-[#020C17]/40 backdrop-blur-sm px-12 py-8 rounded-xl border border-white/5 shadow-2xl">
          <p className="text-xs tracking-[0.4em] text-[#1FDEC3] mb-4 drop-shadow-md">THE DETAILS MATTER</p>
          <h2 className="font-serif text-4xl md:text-6xl drop-shadow-xl">CRAFTED TO BE<br/>REMEMBERED.</h2>
        </div>

        <div className="absolute w-full h-full flex items-center justify-center">
          {/* Micro-copy positioned around the center (where the bottle explodes) */}
          <div className="absolute left-[5%] md:left-[20%] top-[40%] reveal-micro bg-[#020C17]/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
            <div className="text-xs tracking-[0.3em] text-white flex items-center gap-4">
              <span>PRECISION</span>
              <div className="w-8 h-[1px] bg-white/50 hidden md:block"></div>
            </div>
          </div>
          
          <div className="absolute right-[5%] md:right-[20%] top-[50%] reveal-micro bg-[#020C17]/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
            <div className="text-xs tracking-[0.3em] text-[#D4AF37] flex items-center gap-4 flex-row-reverse">
              <span>CHARACTER</span>
              <div className="w-8 h-[1px] bg-[#D4AF37]/50 hidden md:block"></div>
            </div>
          </div>
          
          <div className="absolute left-[10%] md:left-[25%] top-[65%] reveal-micro bg-[#020C17]/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
            <div className="text-xs tracking-[0.3em] text-white flex items-center gap-4">
              <span>CRAFT</span>
              <div className="w-8 h-[1px] bg-white/50 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reveal;
