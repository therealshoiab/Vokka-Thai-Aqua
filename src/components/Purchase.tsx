import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Purchase: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section id="purchase" className="py-20 w-full bg-[#020C17] text-white z-20 relative border-t border-white/5 pointer-events-auto">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Product visual */}
        <div className="w-full md:w-1/2 flex justify-center">
           <img src={`${import.meta.env.BASE_URL}frames/0240.webp`} alt="VÖKKA Thai Aqua" className="w-full max-w-sm aspect-[4/5] object-cover rounded-xl shadow-2xl" />
        </div>
        
        {/* Right: Purchase options */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          
          <div className="mb-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-2 tracking-wide">VÖKKA THAI AQUA</h2>
            <p className="text-[#0089A7] tracking-[0.2em] text-xs font-medium uppercase mb-4">EAU DE PARFUM</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs tracking-widest text-white/70 mb-8">
              <span className="bg-white/5 px-3 py-1 rounded-full">100 ML</span>
              <span className="bg-white/5 px-3 py-1 rounded-full">UNISEX</span>
              <span className="bg-white/5 px-3 py-1 rounded-full">FRESH / AQUATIC</span>
              <span className="bg-white/5 px-3 py-1 rounded-full">DAY → NIGHT</span>
            </div>
          </div>
          
          <div className="text-4xl font-serif mb-8 text-[#D4AF37]">₹4,999</div>
          
          <div className="flex flex-col w-full max-w-sm gap-4 mb-8">
            <button className="w-full bg-white text-[#020C17] hover:bg-[#1FDEC3] transition-colors py-4 px-8 tracking-widest text-sm font-medium rounded-sm">
              BUY NOW
            </button>
            <button className="w-full border border-white/30 hover:border-white bg-transparent text-white transition-all duration-300 py-4 tracking-widest text-sm rounded-sm">
              ADD TO CART
            </button>
          </div>
          
          <div className="flex justify-center md:justify-start gap-6 text-xs text-white/50 tracking-wider w-full">
            <span className="flex items-center gap-1"><Check size={14} className="text-[#1FDEC3]" /> Free Shipping</span>
            <span className="flex items-center gap-1"><Check size={14} className="text-[#1FDEC3]" /> Secure</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Purchase;
