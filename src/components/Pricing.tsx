import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  onBuyClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBuyClick }) => {
  const plans = [
    {
      id: 'single',
      name: 'Single Bottle',
      price: '₹999',
      description: 'The perfect introduction to VÖKKA.',
      features: [
        '1x 100ml VÖKKA Thai Aqua',
        'Free Shipping',
        '7 Days Delivery',
        'Secure Packaging'
      ],
      buttonText: 'BUY NOW',
      isFeatured: false
    },
    {
      id: 'double',
      name: 'Double Set',
      price: '₹1,798',
      discount: '10% OFF',
      description: 'Our most popular choice. Keep one, gift one.',
      features: [
        '2x 100ml VÖKKA Thai Aqua',
        'Priority Free Shipping',
        '7 Days Delivery',
        'Premium Gift Box'
      ],
      buttonText: 'BUY NOW',
      isFeatured: true
    },
    {
      id: 'triple',
      name: 'Collector\'s Trio',
      price: '₹2,397',
      discount: '20% OFF',
      description: 'For the ultimate fragrance connoisseur.',
      features: [
        '3x 100ml VÖKKA Thai Aqua',
        'Express Free Shipping',
        'VIP Customer Support',
        'Luxury Packaging'
      ],
      buttonText: 'BUY NOW',
      isFeatured: false
    }
  ];

  return (
    <section id="pricing" className="py-24 w-full bg-[#020C17] text-white z-20 relative border-t border-white/5 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#0089A7] tracking-[0.2em] text-xs font-medium uppercase mb-4">PURCHASE</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 tracking-wide drop-shadow-md text-white">CHOOSE YOUR COLLECTION</h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            VOKKA Thai Aqua 100 ml Unisex Luxury Long Lasting Aqua Perfume For Men And Women. Select the package that suits your lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.isFeatured 
                  ? 'bg-gradient-to-b from-[#0089A7]/20 to-[#020C17] border-[#1FDEC3]/50 shadow-[0_0_30px_rgba(31,222,195,0.15)] transform md:-translate-y-4' 
                  : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-[#1FDEC3] to-[#0089A7] text-[#020C17] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-serif tracking-wider text-white">{plan.name}</h3>
                  {plan.discount && (
                    <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded">
                      {plan.discount}
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-4xl font-serif text-[#D4AF37]">{plan.price}</span>
              </div>
              
              <div className="flex-grow">
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <Check size={16} className={`mt-0.5 shrink-0 ${plan.isFeatured ? 'text-[#1FDEC3]' : 'text-white/50'}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={onBuyClick}
                className={`w-full py-4 tracking-widest text-sm font-medium rounded-sm transition-colors ${
                  plan.isFeatured
                    ? 'bg-white text-[#020C17] hover:bg-[#1FDEC3]'
                    : 'bg-white/10 text-white hover:bg-white hover:text-[#020C17]'
                }`}
              >
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
