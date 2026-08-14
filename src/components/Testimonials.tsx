import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { text: "The opening citrus burst is incredible, but the sandalwood drydown after 4 hours is where it truly shines. Gets compliments every single day.", name: "Aarav Sharma" },
    { text: "Incredibly long lasting! Smells like a premium high-end ocean spray. Worth every rupee.", name: "Rohan Patel" },
    { text: "At 600 rupees, I didn't expect much, but wow! This easily competes with 5k designer perfumes.", name: "Priya Nair" },
    { text: "Perfect unisex scent. My husband and I both use it. Sandalwood base is extremely sensual.", name: "Sneha Reddy" },
    { text: "Delivered in 4 days. Secure packing. Smells absolutely fantastic, fresh and refreshing.", name: "Vikram Malhotra" },
    { text: "Got 3 compliments on my first day wearing it. It's clean, marine, and very luxury.", name: "Anjali Gupta" },
    { text: "Lasts 8+ hours easily on my clothes. Best perfume purchase of the year.", name: "Kabir Singh" },
    { text: "Very premium heavyweight glass bottle. Mist spray is super fine. Impressive work VÖKKA.", name: "Neha Deshmukh" },
    { text: "Perfect signature scent for Indian weather. Chilled citrus notes are beautiful.", name: "Manish Iyer" },
    { text: "Excellent sillage. Leaves a trail that stays in the room. Fully satisfied.", name: "Aditya Joshi" },
    { text: "The Blue Lotus and driftwood heart notes are extremely unique. Love it.", name: "Ritu Verma" },
    { text: "Clean Aldehydes and Mint opening is so refreshing in the morning. Buying a backup bottle.", name: "Rohit Sen" },
    { text: "Sandalwood and Amber combination is super premium. Day to night masterpiece.", name: "Pooja Kapoor" },
    { text: "Unreal value. Direct-to-consumer pricing model is great. High concentration EDP.", name: "Amit Trivedi" },
    { text: "I wear it to meetings and parties. Smells sophisticated and rich.", name: "Kavita Rao" }
  ];

  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 w-full bg-white/[0.01] border-b border-white/[0.06] backdrop-blur-sm text-white overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <span className="text-[#00F0FF] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-4 block text-shadow-premium">SOCIAL PROOF</span>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wider text-white text-shadow-premium">VERIFIED BUYERS</h2>
          <div className="flex items-center gap-1.5 py-1 px-3 bg-white/[0.04] border border-white/[0.08] rounded-full backdrop-blur-md">
            <span className="text-sm font-bold text-[#F5E6C8]">4.2 / 5.0</span>
            <div className="flex text-[#F5E6C8]">
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
              <Star size={11} className="opacity-40" />
            </div>
          </div>
        </div>
        <p className="text-white/70 text-xs md:text-sm max-w-xl mx-auto text-shadow-premium font-medium">
          Over 21,300+ customers have experienced the luxury of VÖKKA Thai Aqua.
        </p>
      </div>

      <div className="w-full relative overflow-hidden">
        {/* Shadow overlays for fading effect */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#050B14]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#050B14]/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-6 px-6">
          {marqueeReviews.map((review, i) => (
            <div key={i} className="flex flex-col flex-shrink-0 w-80 p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
              <div className="flex gap-1 mb-4 text-[#F5E6C8]">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
              <p className="font-medium text-xs md:text-sm text-white/90 leading-relaxed mb-6 flex-grow text-shadow-premium">"{review.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#00F0FF]/15 flex items-center justify-center text-[10px] text-[#00F0FF] font-bold">
                  {review.name.charAt(0)}
                </div>
                <p className="text-[10px] font-bold tracking-wider text-[#38BDF8] uppercase text-shadow-premium">{review.name} <span className="text-[8px] text-white/30 font-normal lowercase">(verified)</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
