import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Purchase: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section id="purchase" className="py-32 w-full bg-[#020C17] text-white z-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left: Product visual */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
           <img src={`${import.meta.env.BASE_URL}frames/0240.webp`} alt="VÖKKA Thai Aqua" className="w-full aspect-[3/4] max-w-md object-cover rounded-sm shadow-2xl" />
        </div>
        
        {/* Right: Purchase options */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">YOUR SIGNATURE SCENT AWAITS.</h2>
          
          <div className="mb-8">
            <h3 className="text-xl tracking-widest mb-2 font-medium">VÖKKA THAI AQUA</h3>
            <p className="text-[#0089A7] tracking-[0.2em] text-sm">100 ML · EAU DE PARFUM</p>
          </div>
          
          <div className="text-3xl font-serif mb-12 text-[#D4AF37]">₹999</div>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md mb-12">
            <div className="flex items-center justify-between border border-white/20 rounded-sm px-4 py-3 min-w-[120px]">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-white/50 hover:text-white transition-colors p-2"
              >−</button>
              <span className="font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="text-white/50 hover:text-white transition-colors p-2"
              >+</button>
            </div>
            
            <button className="flex-1 bg-white text-[#020C17] hover:bg-[#1FDEC3] transition-colors py-4 px-8 tracking-widest text-sm font-medium rounded-sm">
              ADD TO CART
            </button>
          </div>
          
          <button className="w-full max-w-md border border-white/30 hover:border-white bg-transparent text-white transition-all duration-300 py-4 tracking-widest text-sm rounded-sm mb-12">
            BUY NOW
          </button>
          
          <div className="space-y-4 text-sm text-white/70 tracking-wide w-full max-w-md">
            <div className="flex items-center gap-3">
              <Check size={16} className="text-[#1FDEC3]" /> Secure Checkout
            </div>
            <div className="flex items-center gap-3">
              <Check size={16} className="text-[#1FDEC3]" /> Delivery takes around 7 days
            </div>
            <div className="flex items-center gap-3">
              <Check size={16} className="text-[#1FDEC3]" /> Easy Returns
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Purchase;
