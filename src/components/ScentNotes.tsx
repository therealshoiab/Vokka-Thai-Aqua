import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Heart, Anchor } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ScentNotes: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Header title animation
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }
    );

    // Cards staggered entry — single trigger for mobile reliability
    const cards = gsap.utils.toArray<HTMLElement>('.scent-card');
    const grid = containerRef.current?.querySelector('.scent-grid');
    gsap.set(cards, { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: grid || containerRef.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        });
      },
      once: true,
    });
  }, []);

  return (
    <section ref={containerRef} id="notes" className="py-24 w-full text-white pointer-events-none relative z-20 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center pointer-events-auto">
        
        {/* Title Block */}
        <div ref={titleRef} className="text-center max-w-2xl mb-16">
          <span className="text-[#D4AF37] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-3 block">OLFACTORY ARCHITECTURE</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wider mb-4 text-white text-shadow-premium">THE SCENT STRUCTURE</h2>
          <div className="w-16 h-[1px] bg-[#F5E6C8] mx-auto mb-6"></div>
          <p className="text-white text-sm leading-relaxed text-shadow-premium font-bold">
            Every element is carefully composed to construct an evolvement of premium notes, locking onto skin for an exceptional and memorable sillage.
          </p>
        </div>

        {/* 3-Tier Grid */}
        <div className="scent-grid grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
          
          {/* Card 1: Top Notes */}
          <div className="scent-card flex flex-col p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-all duration-300"></div>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded">01 • TOP NOTE</span>
              <Sparkles size={16} className="text-[#D4AF37]" />
            </div>
            
            <h3 className="font-serif text-2xl font-bold tracking-wide text-white mb-2 text-shadow-premium">ELECTRIC OPENING</h3>
            <span className="text-[11px] tracking-wider text-white/40 mb-4 block">0 – 30 MINUTES</span>
            
            <div className="w-full h-[1px] bg-white/10 mb-6"></div>
            
            <p className="font-serif text-lg md:text-xl text-[#F5E6C8] tracking-wide mb-6 leading-relaxed flex-grow text-shadow-premium">
              Grapefruit, Bergamot, Italian Lemon, Pink Pepper, Saffron, Fresh Mint, Crisp Aldehydes.
            </p>
            
            <div className="mt-auto bg-white/[0.01] border border-white/[0.04] p-4 rounded-lg">
              <span className="text-[10px] tracking-widest font-bold text-white/50 block mb-1 uppercase">Sensation</span>
              <p className="text-xs text-white leading-relaxed italic font-bold">
                An invigorating surge of ocean breeze and chilled citrus spice.
              </p>
            </div>
          </div>

          {/* Card 2: Heart Notes */}
          <div className="scent-card flex flex-col p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-all duration-300"></div>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded">02 • HEART NOTE</span>
              <Heart size={16} className="text-[#D4AF37]" />
            </div>
            
            <h3 className="font-serif text-2xl font-bold tracking-wide text-white mb-2 text-shadow-premium">SENSUAL CORE</h3>
            <span className="text-[11px] tracking-wider text-white/40 mb-4 block">2 – 4 HOURS</span>
            
            <div className="w-full h-[1px] bg-white/10 mb-6"></div>
            
            <p className="font-serif text-lg md:text-xl text-[#F5E6C8] tracking-wide mb-6 leading-relaxed flex-grow text-shadow-premium">
              Warm Amber, Crushed Ginger, Nutmeg, Night-Blooming Jasmine, Crisp Melon.
            </p>
            
            <div className="mt-auto bg-white/[0.01] border border-white/[0.04] p-4 rounded-lg">
              <span className="text-[10px] tracking-widest font-bold text-white/50 block mb-1 uppercase">Sensation</span>
              <p className="text-xs text-white leading-relaxed italic font-bold">
                Velvety warmth preventing harsh aquatic sharpness.
              </p>
            </div>
          </div>

          {/* Card 3: Base Notes */}
          <div className="scent-card flex flex-col p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-all duration-300"></div>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded">03 • BASE NOTE</span>
              <Anchor size={16} className="text-[#D4AF37]" />
            </div>
            
            <h3 className="font-serif text-2xl font-bold tracking-wide text-white mb-2 text-shadow-premium">SIGNATURE SILLAGE</h3>
            <span className="text-[11px] tracking-wider text-white/40 mb-4 block">6 – 8+ HOURS</span>
            
            <div className="w-full h-[1px] bg-white/10 mb-6"></div>
            
            <p className="font-serif text-lg md:text-xl text-[#F5E6C8] tracking-wide mb-6 leading-relaxed flex-grow text-shadow-premium">
              Mysore Sandalwood, Virginia Cedar, Incense, Fir Resin, Patchouli, Labdanum.
            </p>
            
            <div className="mt-auto bg-white/[0.01] border border-white/[0.04] p-4 rounded-lg">
              <span className="text-[10px] tracking-widest font-bold text-white/50 block mb-1 uppercase">Sensation</span>
              <p className="text-xs text-white leading-relaxed italic font-bold">
                An alluring, woody trail that locks into skin and apparel.
              </p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default ScentNotes;
