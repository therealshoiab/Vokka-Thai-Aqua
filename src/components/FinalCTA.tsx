import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="h-[80vh] w-full flex flex-col items-center justify-center text-center px-6 text-white relative z-20 bg-[#020C17]">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-[-1]"></div>
      
      <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
        MAKE THEM<br />REMEMBER YOU.
      </h2>
      <p className="text-[#0089A7] font-light text-xl tracking-widest mb-16">
        Discover Thai Aqua by VÖKKA.
      </p>
      
      <button className="bg-white text-[#020C17] hover:bg-[#1FDEC3] transition-colors py-5 px-12 tracking-widest text-sm font-medium rounded-sm">
        SHOP THAI AQUA
      </button>
    </section>
  );
};

export default FinalCTA;
