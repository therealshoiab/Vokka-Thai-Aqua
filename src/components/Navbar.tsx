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
        ? 'bg-[#050B14]/75 backdrop-blur-xl py-3 border-b border-white/[0.05]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Logo */}
        <div className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-[#F5E6C8]">
          VÖKKA
        </div>
        
        {/* Right order now button with glow effect */}
        <div>
          <button 
            onClick={onShopClick}
            className="flex items-center gap-2 text-xs md:text-sm tracking-[0.15em] font-bold bg-white text-[#050B14] px-5 py-2.5 rounded-sm hover:bg-[#00F0FF] hover:text-[#050B14] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <ShoppingBag size={14} />
            ORDER NOW — ₹224
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
