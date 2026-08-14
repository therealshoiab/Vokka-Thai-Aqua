import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onShopClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onShopClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-[#050B14]/85 backdrop-blur-xl py-3 border-b border-white/[0.05]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Logo - Golden VÖKKA logo */}
        <div className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-[#D4AF37]">
          VÖKKA
        </div>
        
        {/* Right order button - Gold outline for premium look */}
        <div>
          <button 
            onClick={onShopClick}
            className="flex items-center gap-2 text-xs md:text-sm tracking-[0.15em] font-bold border border-[#D4AF37]/50 text-[#D4AF37] px-5 py-2.5 rounded-sm hover:bg-[#D4AF37] hover:text-[#050B14] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-transparent"
          >
            <ShoppingBag size={14} />
            ORDER — ₹600
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
