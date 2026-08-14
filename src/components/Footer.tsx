import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#01060B] text-white pt-24 pb-12 px-6 md:px-12 z-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
        
        <div>
          <h2 className="font-serif text-3xl tracking-widest mb-6 text-[#D4AF37]">VÖKKA</h2>
          <p className="text-sm tracking-widest text-white/50 max-w-xs">
            Luxury fragrances inspired by the power and purity of water.
          </p>
        </div>
        
        <div className="flex gap-16">
          <div className="flex flex-col space-y-4 text-sm tracking-widest text-white/70">
            <a href="#fragrance" className="hover:text-white transition-colors">FRAGRANCE</a>
            <a href="#story" className="hover:text-white transition-colors">THE STORY</a>
            <a href="#notes" className="hover:text-white transition-colors">NOTES</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>
          
          <div className="flex flex-col space-y-4 text-sm tracking-widest text-white/70">
            <a href="#shipping" className="hover:text-white transition-colors">SHIPPING</a>
            <a href="#returns" className="hover:text-white transition-colors">RETURNS</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm tracking-widest mb-6 font-medium">FOLLOW US</h3>
          <div className="flex gap-6 text-sm tracking-widest text-white/50">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-white/30 border-t border-white/5 pt-8">
        <p>© 2026 VÖKKA. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
