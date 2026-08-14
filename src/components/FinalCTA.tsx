import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="h-[70vh] min-h-[500px] w-full flex flex-col items-center justify-center text-white relative z-20 bg-gradient-to-t from-[#01060B] to-transparent pointer-events-auto border-t border-white/5">
      <div className="text-center z-10 px-6">
        <h2 className="font-serif text-5xl md:text-7xl mb-4 tracking-wide drop-shadow-2xl">MAKE THEM<br/>REMEMBER YOU.</h2>
        <p className="text-xs tracking-[0.4em] text-[#1FDEC3] mb-10 font-medium">VÖKKA THAI AQUA</p>
        <button className="bg-white text-[#020C17] hover:bg-[#1FDEC3] transition-colors py-4 px-12 tracking-widest text-sm font-medium rounded-sm shadow-xl hover:shadow-[#1FDEC3]/20">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
