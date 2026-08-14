import React from 'react';

const ProductDetails: React.FC = () => {
  return (
    <section className="min-h-screen w-full relative text-white flex items-center justify-start px-6 md:px-24 z-10 pointer-events-none">
      <div className="max-w-xl pointer-events-auto bg-[#020C17]/40 backdrop-blur-md p-8 md:p-12 rounded-sm border border-white/5">
        <h2 className="font-serif text-3xl md:text-4xl tracking-widest mb-2">VÖKKA THAI AQUA</h2>
        <p className="text-[#1FDEC3] tracking-[0.2em] text-sm mb-12">EAU DE PARFUM · 100 ML · UNISEX</p>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm tracking-[0.2em] font-medium mb-2">LONG LASTING</h3>
            <p className="font-light text-white/70">Designed to stay with you.</p>
          </div>
          <div>
            <h3 className="text-sm tracking-[0.2em] font-medium mb-2">PREMIUM FRAGRANCE</h3>
            <p className="font-light text-white/70">A carefully composed scent profile.</p>
          </div>
          <div>
            <h3 className="text-sm tracking-[0.2em] font-medium mb-2">DAY TO NIGHT</h3>
            <p className="font-light text-white/70">Made for everyday wear and special occasions.</p>
          </div>
          <div>
            <h3 className="text-sm tracking-[0.2em] font-medium mb-2">SIGNATURE SCENT</h3>
            <p className="font-light text-white/70">Fresh, distinctive and memorable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
