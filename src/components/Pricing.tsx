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
      price: '₹224',
      mrp: '₹1,149',
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
      price: '₹420',
      mrp: '₹2,298',
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
      price: '₹599',
      mrp: '₹3,447',
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
    <section id="pricing" ref={containerRef} className="py-24 w-full bg-[#050B14] text-white z-20 relative border-t border-white/5 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#00F0FF] tracking-[0.2em] text-[10px] md:text-xs font-bold uppercase mb-4">DIRECT LAUNCH PRICING</p>
          <h2 ref={titleRef} className="invisible font-serif text-3xl md:text-5xl font-bold tracking-wide drop-shadow-md text-white">CHOOSE YOUR QUANTITY</h2>
          <div className="w-16 h-[1px] bg-[#F5E6C8] mx-auto my-6"></div>
          <p className="text-white/60 text-xs md:text-sm leading-relaxed">
            VOKKA Thai Aqua 100 ml Unisex Luxury Long Lasting Aqua Perfume. Secure your bottle directly from our launch batch with Cash on Delivery options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 rounded-xl border transition-all duration-300 ${
                plan.isFeatured 
                  ? 'bg-gradient-to-b from-[#00F0FF]/10 to-[#0A1320] border-[#00F0FF]/40 shadow-[0_0_40px_rgba(0,240,255,0.15)] transform md:-translate-y-3' 
                  : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] text-[#050B14] text-[9px] tracking-[0.2em] font-extrabold px-4 py-1.5 rounded-full uppercase shadow-lg">
                    BEST VALUE
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-serif font-bold tracking-wider text-white">{plan.name}</h3>
                  {plan.discount && (
                    <span className="text-[9px] font-bold text-[#F5E6C8] bg-[#F5E6C8]/10 border border-[#F5E6C8]/25 px-2 py-0.5 rounded">
                      {plan.discount}
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-xs leading-relaxed h-12">{plan.description}</p>
              </div>
              
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-serif font-bold text-[#00F0FF]">{plan.price}</span>
                <span className="text-xs text-white/40 line-through">{plan.mrp}</span>
              </div>
              
              <div className="flex-grow">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-white/80">
                      <Check size={14} className={`mt-0.5 shrink-0 ${plan.isFeatured ? 'text-[#00F0FF]' : 'text-[#F5E6C8]'}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => onBuyClick && onBuyClick(plan.quantity)}
                className={`w-full py-4 tracking-[0.2em] text-xs font-bold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.isFeatured
                    ? 'bg-[#00F0FF] text-[#050B14] hover:bg-white hover:text-[#050B14]'
                    : 'bg-white/10 text-white hover:bg-white hover:text-[#050B14]'
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
