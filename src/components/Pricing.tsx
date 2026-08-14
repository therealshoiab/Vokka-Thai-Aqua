import React, { useEffect, useRef } from 'react';
import { Check, ShoppingCart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextReveal } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

interface PricingProps {
  onBuyClick?: (quantity: number) => void;
}

const Pricing: React.FC<PricingProps> = ({ onBuyClick }) => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !titleRef.current) return;
    
    gsap.set(titleRef.current, { visibility: 'visible' });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        splitTextReveal(titleRef.current!, { duration: 1.2, stagger: 0.05 });
      },
      once: true
    });
  }, []);

  const plans = [
    {
      id: 'single',
      name: 'Single Bottle',
      price: '600',
      mrp: '2,999',
      quantity: 1,
      description: 'Experience VÖKKA Thai Aqua at direct launch pricing.',
      features: [
        '1x 100ml VÖKKA Thai Aqua',
        'Free Shipping Nationwide',
        '7 Days Guaranteed Delivery',
        'Secure Bubble Wrap Packaging'
      ],
      buttonText: 'ORDER NOW',
      isFeatured: false
    },
    {
      id: 'double',
      name: 'Double Luxury Pack',
      price: '1,080',
      mrp: '5,998',
      discount: '10% EXTRA OFF',
      quantity: 2,
      description: 'Our absolute best value. One for home, one for travel.',
      features: [
        '2x 100ml VÖKKA Thai Aqua',
        'Priority Insured Shipping',
        '7 Days Guaranteed Delivery',
        'Sleek Dual Gift Box packaging'
      ],
      buttonText: 'ORDER NOW',
      isFeatured: true
    },
    {
      id: 'triple',
      name: 'Collector\'s Trio',
      price: '1,440',
      mrp: '8,997',
      discount: '20% EXTRA OFF',
      quantity: 3,
      description: 'Never run out of your signature marine sillage.',
      features: [
        '3x 100ml VÖKKA Thai Aqua',
        'Free Express Shipping',
        '7 Days Guaranteed Delivery',
        'Luxury presentation packaging'
      ],
      buttonText: 'ORDER NOW',
      isFeatured: false
    }
  ];

  return (
    <section id="pricing" ref={containerRef} className="py-28 w-full bg-white/[0.01] border-y border-white/[0.06] backdrop-blur-md text-white z-20 relative pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[#D4AF37] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-4">DIRECT LAUNCH PRICING</p>
          <h2 ref={titleRef} className="invisible font-serif text-3xl md:text-5xl font-bold tracking-wide text-white">CHOOSE YOUR QUANTITY</h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto my-6"></div>
          <p className="text-white/80 text-sm leading-relaxed max-w-xl mx-auto font-medium">
            VÖKKA Thai Aqua 100 ml Unisex Luxury Long Lasting Aqua Perfume. Secure your bottle directly from our launch batch with Cash on Delivery options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 lg:p-10 rounded-2xl border transition-all duration-500 ${
                plan.isFeatured 
                  ? 'bg-gradient-to-b from-white/[0.05] to-white/[0.01] border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(212,175,55,0.08)] transform md:-translate-y-4' 
                  : 'bg-gradient-to-b from-white/[0.02] to-transparent border-white/[0.07] hover:border-white/20 hover:from-white/[0.03]'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#D4AF37] text-[#050B14] text-[9px] tracking-[0.25em] font-extrabold px-5 py-2 rounded-full uppercase shadow-lg">
                    BEST VALUE
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-serif font-semibold tracking-wide text-white">{plan.name}</h3>
                  {plan.discount && (
                    <span className="text-[9px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2.5 py-1 rounded">
                      {plan.discount}
                    </span>
                  )}
                </div>
                <p className="text-white text-xs leading-relaxed h-12 font-bold tracking-wide">{plan.description}</p>
              </div>
              
              {/* Elegant, clean, high-contrast sans-serif numbers (no fallbacks or pixelated outlines) */}
              <div className="mb-8 flex items-baseline gap-2.5 font-sans">
                <span className="text-base font-semibold text-[#D4AF37] self-start mt-1">₹</span>
                <span className="text-5xl font-light tracking-tight text-white">{plan.price}</span>
                <span className="text-xs text-white/80 font-bold line-through ml-1">₹{plan.mrp}</span>
              </div>
              
              <div className="flex-grow mb-10">
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3.5 text-xs text-white">
                      <Check size={14} className="shrink-0 text-[#D4AF37]" />
                      <span className="font-bold tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => onBuyClick && onBuyClick(plan.quantity)}
                className={`w-full py-4 tracking-[0.2em] text-xs font-bold rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 ${
                  plan.isFeatured
                    ? 'bg-[#D4AF37] text-[#050B14] hover:bg-white hover:text-[#050B14] shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                    : 'bg-white/[0.04] border border-white/10 text-white hover:bg-white hover:text-[#050B14] hover:border-white'
                }`}
              >
                <ShoppingCart size={13} />
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Pricing;
