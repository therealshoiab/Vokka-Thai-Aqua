import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-[150vh] flex flex-col justify-start pt-32 px-6 md:px-12 text-white">
      <div className="max-w-4xl pt-20" data-hero-content>
        <p className="text-[#1FDEC3] tracking-[0.3em] text-xs md:text-sm mb-6 font-medium">EAU DE PARFUM · THAI AQUA</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
          LEAVE A LASTING<br />IMPRESSION.
        </h1>
        <p className="text-lg md:text-xl font-light text-white/80 max-w-xl mb-12 leading-relaxed">
          A fresh aquatic fragrance crafted for those who move with confidence and leave something unforgettable behind.
        </p>
        <button className="border border-white/30 hover:border-white bg-transparent hover:bg-white hover:text-[#020C17] text-white transition-all duration-300 px-8 py-4 tracking-widest text-sm rounded-sm">
          DISCOVER THE SCENT
        </button>
      </div>
      
      <div className="absolute top-[80vh] left-6 md:left-12 flex flex-col items-center gap-4 animate-pulse">
        <span className="text-xs tracking-[0.2em] text-white/70">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/70 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
