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
          <span className="text-[#00F0FF] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-3 block">SPECIFICATIONS</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wider mb-4">CRAFTED WITHOUT COMPROMISE</h2>
          <div className="w-16 h-[1px] bg-[#F5E6C8] mb-6"></div>
          <p className="text-white/60 text-xs md:text-sm leading-relaxed">
            Every bottle of VÖKKA is built with high-quality components and strict quality standards, ensuring a premium fragrance experience.
          </p>
        </div>

        {/* 4 Grid Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          {/* Card 1 */}
          <div className="spec-card p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-[#00F0FF]/25 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#00F0FF]/20 transition-all duration-300">
              <Award size={20} className="text-[#00F0FF]" />
            </div>
            <h3 className="font-serif text-lg font-bold tracking-wide mb-3 text-white">High Concentration EDP</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Rich fragrance oils that outlast traditional sprays and provide a lasting sillage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="spec-card p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-[#38BDF8]/25 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center mb-6 group-hover:bg-[#38BDF8]/20 transition-all duration-300">
              <UserCheck size={20} className="text-[#38BDF8]" />
            </div>
            <h3 className="font-serif text-lg font-bold tracking-wide mb-3 text-white">Universal Unisex Aura</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Perfectly balanced formulation that complements both men and women elegantly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="spec-card p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-[#F5E6C8]/25 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-[#F5E6C8]/10 flex items-center justify-center mb-6 group-hover:bg-[#F5E6C8]/20 transition-all duration-300">
              <Flame size={20} className="text-[#F5E6C8]" />
            </div>
            <h3 className="font-serif text-lg font-bold tracking-wide mb-3 text-white">All-Season Signature</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Crisp and refreshing in summer heat, warm and cozy on skin in cold weather.
            </p>
          </div>

          {/* Card 4 */}
          <div className="spec-card p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-[#00F0FF]/25 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#00F0FF]/20 transition-all duration-300">
              <Compass size={20} className="text-[#00F0FF]" />
            </div>
            <h3 className="font-serif text-lg font-bold tracking-wide mb-3 text-white">Ultra-Fine Atomizer</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Heavyweight 100ml glass bottle featuring a premium wide-dispersion mist pump.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductDetails;
