import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useMagnetic } from '../hooks/useMagnetic';
import { ShoppingCart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FinalCTAProps {
  onBuyClick?: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onBuyClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useMagnetic() as React.RefObject<HTMLButtonElement>;

  useEffect(() => {
    if (!containerRef.current || !text1Ref.current || !text2Ref.current) return;

    // Split both lines
    const split1 = new SplitType(text1Ref.current, { types: 'chars,words' });
    const split2 = new SplitType(text2Ref.current, { types: 'chars,words' });

    // Set initial state for all chars
    gsap.set([text1Ref.current, text2Ref.current], { visibility: 'visible' });
    gsap.set([...(split1.chars || []), ...(split2.chars || [])], {
      y: 60,
      opacity: 0,
      filter: 'blur(8px)',
    });
    gsap.set([eyebrowRef.current, btnRef.current], { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 70%",
      onEnter: () => {
        const tl = gsap.timeline();

        // Reveal "MAKE THEM"
        tl.to(split1.chars, {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.04,
          ease: 'power3.out'
        })
        // Reveal "REMEMBER YOU."
        .to(split2.chars, {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.04,
          ease: 'power3.out'
        }, '-=0.6')
        // Eyebrow and button
        .to([eyebrowRef.current, btnRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }, '-=0.4');
      },
      once: true
    });

    return () => {
      split1.revert();
      split2.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="min-h-[70vh] w-full flex flex-col items-center justify-center text-white relative z-20 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent pointer-events-auto border-t border-white/5 py-24 px-6">
      <div className="text-center z-10 w-full max-w-4xl mx-auto">
        <h2 ref={text1Ref} className="invisible font-serif text-[clamp(3rem,10vw,6rem)] md:text-8xl font-bold tracking-wider drop-shadow-2xl leading-none text-white text-shadow-premium">
          MAKE THEM
        </h2>
        <h2 ref={text2Ref} className="invisible font-serif text-[clamp(2rem,7vw,4.5rem)] md:text-6xl font-bold tracking-wider drop-shadow-2xl leading-tight mt-2 mb-8">
          <span className="text-[#D4AF37]">REMEMBER YOU.</span>
        </h2>
        <p ref={eyebrowRef} className="opacity-0 text-[10px] md:text-xs tracking-[0.4em] text-[#D4AF37] mb-10 font-bold uppercase">✦ VÖKKA THAI AQUA ✦</p>
        <button 
          ref={btnRef}
          onClick={onBuyClick}
          className="opacity-0 bg-[#D4AF37] text-[#050B14] hover:bg-white hover:text-[#050B14] transition-all duration-300 py-4 px-12 tracking-[0.2em] text-xs font-extrabold rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] flex items-center justify-center gap-2.5 mx-auto"
        >
          <ShoppingCart size={14} />
          ORDER VIA WHATSAPP
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
