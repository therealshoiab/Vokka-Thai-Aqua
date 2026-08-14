import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { text: "Fresh, sophisticated and incredibly easy to wear." },
    { text: "The kind of fragrance people ask about." },
    { text: "My new daily signature." }
  ];

  return (
    <section className="py-20 w-full bg-[#020C17] text-white overflow-hidden relative z-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="flex gap-1 mb-4 text-[#D4AF37]">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
              <p className="font-serif text-lg md:text-xl text-white/90 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
