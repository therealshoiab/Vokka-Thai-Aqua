import React from 'react';

const REVIEWS = [
  "Fresh, elegant and incredibly easy to wear.",
  "One of those fragrances people actually ask about.",
  "Beautiful bottle. Even better fragrance.",
  "The aquatic notes are perfectly balanced.",
  "My new daily signature scent. Simply stunning.",
  "Lasts all day without being overpowering.",
  "A masterpiece of modern perfumery.",
  "Gets compliments everywhere I go.",
  "Crisp, clean, and undeniably luxurious.",
  "The presentation is just as good as the scent.",
  "Exceeded all my expectations. 10/10.",
  "Perfect for both office wear and date nights.",
  "A refreshing take on aquatic fragrances.",
  "The bergamot opening is absolutely addictive.",
  "Worth every penny. Pure luxury in a bottle."
];

const Testimonials: React.FC = () => {
  // Double the reviews for seamless infinite scrolling
  const scrollItems = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-32 w-full bg-[#01060B] text-white z-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <h2 className="font-serif text-3xl md:text-5xl text-center">THE SCENT SPEAKS FOR ITSELF.</h2>
      </div>
      
      <div className="flex overflow-hidden relative w-full">
        <div className="flex w-max animate-marquee gap-8 px-4">
          {scrollItems.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center w-80 bg-[#020C17]/80 border border-white/5 p-8 rounded-xl shrink-0">
              <div className="text-[#D4AF37] tracking-widest text-lg mb-6">★★★★★</div>
              <p className="font-light text-white/90 text-base italic mb-6">"{review}"</p>
              <p className="text-xs tracking-[0.2em] text-[#0089A7] mt-auto">— Verified Customer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
