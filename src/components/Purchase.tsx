import React from 'react';
import { Check } from 'lucide-react';

const Purchase: React.FC = () => {

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
            
            <p className="text-white/90 font-serif text-sm md:text-base leading-relaxed mb-6">
              VOKKA Thai Aqua 100 ml Unisex Luxury Long Lasting Aqua Perfume For Men And Women
            </p>

            <div className="w-full border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm mb-6 text-sm">
              <div className="bg-white/5 py-2 px-4 border-b border-white/10 font-medium tracking-wider text-xs text-[#1FDEC3] uppercase">Product Highlights</div>
              <div className="grid grid-cols-2 gap-y-2 p-4 text-white/80">
                <div className="text-white/50">Net Quantity (N)</div><div>1</div>
                <div className="text-white/50">Flavour</div><div>Sandalwood</div>
                <div className="text-white/50">Brand</div><div>Vokka</div>
                <div className="text-white/50">Capacity</div><div>100ml</div>
              </div>
            </div>
          </div>
          
          <div className="text-4xl font-serif mb-8 text-[#D4AF37]">₹999</div>
          
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
            <span className="flex items-center gap-1"><Check size={14} className="text-[#1FDEC3]" /> 7 Days Delivery</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Purchase;
