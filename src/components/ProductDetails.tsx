import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, UserCheck, Flame, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProductDetails: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gsap.utils.toArray('.spec-card');
    cards.forEach((card: any, index: number) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.1
        }
      );
    });
  }, []);

  return (
    <section id="details" className="py-24 w-full text-white pointer-events-none relative z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pointer-events-auto">
        
        {/* Title */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#D4AF37] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-3 block">SPECIFICATIONS</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wider mb-4 text-shadow-premium">CRAFTED WITHOUT COMPROMISE</h2>
          <div className="w-16 h-[1px] bg-[#F5E6C8] mb-6"></div>
          <p className="text-white text-sm leading-relaxed text-shadow-premium font-bold">
            Every bottle of VÖKKA is built with high-quality components and strict quality standards, ensuring a premium fragrance experience.
          </p>
        </div>

        {/* 4 Grid Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          {/* Card 1 */}
          <div className="spec-card p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-[#D4AF37]/25 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
              <Award size={20} className="text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-lg font-bold tracking-wide mb-3 text-white text-shadow-premium">High Concentration EDP</h3>
            <p className="text-xs text-white/70 leading-relaxed font-semibold">
              Rich fragrance oils that outlast traditional sprays and provide a lasting sillage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="spec-card p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-[#D4AF37]/25 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
              <UserCheck size={20} className="text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-lg font-bold tracking-wide mb-3 text-white text-shadow-premium">Universal Unisex Aura</h3>
            <p className="text-xs text-white/70 leading-relaxed font-semibold">
              Perfectly balanced formulation that complements both men and women elegantly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="spec-card p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-[#D4AF37]/25 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
              <Flame size={20} className="text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-lg font-bold tracking-wide mb-3 text-white text-shadow-premium">All-Season Signature</h3>
            <p className="text-xs text-white/70 leading-relaxed font-semibold">
              Crisp and refreshing in summer heat, warm and cozy on skin in cold weather.
            </p>
          </div>

          {/* Card 4 */}
          <div className="spec-card p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-[#D4AF37]/25 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
              <Compass size={20} className="text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-lg font-bold tracking-wide mb-3 text-white text-shadow-premium">Ultra-Fine Atomizer</h3>
            <p className="text-xs text-white/70 leading-relaxed font-semibold">
              Heavyweight 100ml glass bottle featuring a premium wide-dispersion mist pump.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductDetails;
