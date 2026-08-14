import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
interface NavbarProps {
  onShopClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onShopClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-[#020C17]/80 backdrop-blur-md py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
        <div className="font-serif text-lg md:text-2xl tracking-widest text-white">VÖKKA</div>
        
        <div className="hidden md:flex space-x-8 text-sm tracking-widest text-white/80">
        </div>

        <div className="hidden md:block">
          <button 
            onClick={onShopClick}
            className="text-sm tracking-widest bg-white text-[#020C17] px-6 py-2 rounded-sm hover:bg-[#1FDEC3] transition-colors font-medium"
          >
            SHOP NOW
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-[#020C17] z-[35] transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'} md:hidden flex flex-col items-center justify-center space-y-8 text-lg tracking-widest text-white`}>
        <button 
          onClick={() => {
            setMobileMenuOpen(false);
            if (onShopClick) onShopClick();
          }}
          className="mt-8 text-sm tracking-widest bg-white text-[#020C17] px-8 py-3 rounded-sm"
        >
          SHOP NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
