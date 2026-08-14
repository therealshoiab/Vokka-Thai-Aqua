import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { text: "Best aquatic fragrance I've used.", name: "Rahul S." },
    { text: "Long lasting and very premium feel.", name: "Priya M." },
    { text: "Gets me compliments every time I wear it.", name: "Aditya K." },
    { text: "My husband loved it, luxurious packaging.", name: "Sneha P." },
    { text: "Value for money. Smells high-end.", name: "Vikram R." },
    { text: "Fresh, sophisticated and incredibly easy to wear.", name: "Neha G." },
    { text: "The kind of fragrance people ask about.", name: "Karan V." },
    { text: "My new daily signature scent.", name: "Anjali D." },
    { text: "Perfect for Indian summers. Very refreshing.", name: "Manish T." },
    { text: "Beautiful packaging and amazing smell.", name: "Ritu J." },
    { text: "Lasts all day even in humid weather.", name: "Rohit B." },
    { text: "A very balanced unisex fragrance.", name: "Pooja S." },
    { text: "Blind buy worthy! Fantastic scent.", name: "Amit C." },
    { text: "Smells expensive but reasonably priced.", name: "Kavita N." },
    { text: "The sandalwood notes at the base are beautiful.", name: "Sanjay P." }
  ];

  // Duplicate for seamless infinite scrolling
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="py-20 w-full bg-[#020C17] text-white overflow-hidden relative z-20">
      <div className="w-full relative overflow-hidden">
        {/* Shadow overlays for fading effect at edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#020C17] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#020C17] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-6 px-6">
          {marqueeReviews.map((review, i) => (
            <div key={i} className="flex flex-col flex-shrink-0 w-80 p-6 bg-[#020C17]/40 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
              <div className="flex gap-1 mb-4 text-[#D4AF37]">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
              <p className="font-serif text-lg text-white/90 italic mb-4 flex-grow">"{review.text}"</p>
              <p className="text-xs font-medium tracking-wider text-[#1FDEC3] uppercase">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
