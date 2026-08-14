import React from 'react';

interface PreloaderProps {
  progress: number;
}

const Preloader: React.FC<PreloaderProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020C17] text-[#FFFFF0]">
      <div className="mb-8 font-serif text-3xl tracking-widest text-[#D4AF37]">
        VÖKKA
      </div>
      <div className="text-sm tracking-[0.2em] font-light text-[#0089A7]">
        LOADING EXPERIENCE — {progress}%
      </div>
      <div className="mt-6 h-[1px] w-48 bg-white/10 overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 h-full bg-[#1FDEC3] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Preloader;
