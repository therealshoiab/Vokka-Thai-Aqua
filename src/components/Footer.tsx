import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050B14] text-white pt-20 pb-12 px-6 md:px-12 z-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        
        <div>
          <h2 className="font-serif text-3xl font-bold tracking-[0.2em] mb-6 text-[#D4AF37]">VÖKKA</h2>
          <p className="text-sm tracking-wider text-white/50 max-w-sm leading-relaxed">
            Luxury fragrances inspired by the power and purity of water. Specially formulated for long-lasting sillage.
          </p>
        </div>
        
        <div className="flex gap-16">
          <div className="flex flex-col space-y-4 text-xs tracking-wider text-white/70">
            <a href="#hero" className="hover:text-[#D4AF37] transition-colors">HOME</a>
            <a href="#notes" className="hover:text-[#D4AF37] transition-colors">NOTES</a>
            <a href="#pricing" className="hover:text-[#D4AF37] transition-colors">PRICING</a>
          </div>
          
          <div className="flex flex-col space-y-4 text-xs tracking-wider text-white/70">
            <a href="#details" className="hover:text-[#D4AF37] transition-colors">SPECIFICATIONS</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">SUPPORT</a>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] tracking-wider text-white/30 border-t border-white/5 pt-8 gap-4">
        <p>© 2026 VÖKKA. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
