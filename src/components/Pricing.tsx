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
      price: '₹600',
      mrp: '₹2,999',
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
      price: '₹1,080',
      mrp: '₹5,998',
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
      price: '₹1,440',
      mrp: '₹8,997',
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
    <section id="pricing" ref={containerRef} className="py-24 w-full bg-white/[0.01] border-y border-white/[0.06] backdrop-blur-md text-white z-20 relative pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#D4AF37] tracking-[0.2em] text-[10px] md:text-xs font-bold uppercase mb-4">DIRECT LAUNCH PRICING</p>
          <h2 ref={titleRef} className="invisible font-serif text-3xl md:text-5xl font-bold tracking-wide text-white text-shadow-premium">CHOOSE YOUR QUANTITY</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto my-6"></div>
          <p className="text-white text-sm leading-relaxed font-bold">
            VOKKA Thai Aqua 100 ml Unisex Luxury Long Lasting Aqua Perfume. Secure your bottle directly from our launch batch with Cash on Delivery options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 rounded-xl border transition-all duration-300 ${
                plan.isFeatured 
                  ? 'bg-white/[0.04] backdrop-blur-2xl border-[#D4AF37]/40 shadow-[0_0_40px_rgba(212,175,55,0.12)] transform md:-translate-y-3' 
                  : 'bg-white/[0.02] border-white/[0.08] backdrop-blur-xl hover:border-[#D4AF37]/20 hover:bg-white/[0.04]'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5E6C8] text-[#050B14] text-[9px] tracking-[0.2em] font-extrabold px-4 py-1.5 rounded-full uppercase shadow-lg">
                    BEST VALUE
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-serif font-bold tracking-wider text-white text-shadow-premium">{plan.name}</h3>
                  {plan.discount && (
                    <span className="text-[9px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-2 py-0.5 rounded">
                      {plan.discount}
                    </span>
                  )}
                </div>
                <p className="text-white/90 text-xs leading-relaxed h-12 font-bold">{plan.description}</p>
              </div>
              
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-serif font-extrabold text-[#F5E6C8] text-shadow-premium">{plan.price}</span>
                <span className="text-xs text-white/60 line-through font-semibold">{plan.mrp}</span>
              </div>
              
              <div className="flex-grow">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-white">
                      <Check size={14} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                      <span className="font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => onBuyClick && onBuyClick(plan.quantity)}
                className={`w-full py-4 tracking-[0.2em] text-xs font-bold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.isFeatured
                    ? 'bg-[#D4AF37] text-[#050B14] hover:bg-white hover:text-[#050B14]'
                    : 'bg-white/10 text-white hover:bg-[#D4AF37] hover:text-[#050B14]'
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
