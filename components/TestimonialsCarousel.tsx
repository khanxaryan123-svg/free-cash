"use client"
import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsCarousel() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      type: 'trustpilot',
      rating: 4.6,
      count: "252,791"
    },
    {
      type: 'review',
      title: "Fast and Easy Way to Earn Extra Cash",
      text: "Freecash.com is one of the most reliable and rewarding platforms I've used for earning online. The site is user-friendly, offers a wide range of",
      author: "Ruslan",
      time: "a day ago"
    },
    {
      type: 'review',
      title: "Reliable Earning Platform with Great Rewards!",
      text: "I've been using Freecash for a while now, and I must say it's one of the most trustworthy and rewarding platforms out there. The tasks are simple, the offers are fair, and the payout",
      author: "Michael",
      time: "3 days ago"
    },
    {
      type: 'review',
      title: "Honest Opinion/Review",
      text: "Honesty, the app is legit you can indeed make real cash and cash out daily multiple",
      author: "Diamond Extracts",
      time: "5 days ago"
    },
    {
      type: 'review',
      title: "The most I've ever earned from one of these apps.",
      text: "Best and most reliable play to earn source that I have used. I rarely have any problems with peouts and when I do i can always speak with customer support. Best of all when you use steak to cash out",
      author: "KillSwtch",
      time: "6 days ago"
    },
    {
      type: 'review',
      title: "Better then the other pay for gaming apps.",
      text: "I've been using FreeCash for a couple years. It's an easy way to make extra spending money. They have a simple arcade where you can play a 3 different roulette type",
      author: "Brenda",
      time: "8 days ago"
    },
    {
      type: 'review',
      title: "Best site to play games and make money",
      text: "Freecash has been very reliable. My mother had an account and made almost 2 grand in a couple months. I recently made and account and have had a pretty",
      author: "Dylan_m",
      time: "9 days ago"
    },
    {
      type: 'review',
      title: "Quite nice platform",
      text: "I recently stumbled upon Freecash.com, and I can confidently say it has",
      author: "Nighy",
      time: "11 days ago"
    },
    {
      type: 'review',
      title: "No Other Site Compares",
      text: "The no. 1 site for making money while playing games. I have tried many over the last year",
      author: "Samantha Richardson",
      time: "12 days ago"
    },
    {
      type: 'review',
      title: "Amazing platform to earn extra cash!",
      text: "Freecash.com is by far the best rewards site I've ever used. It's easy to navigate, offers a wide variety of tasks and surveys, and the payouts are",
      author: "Darakhshan Jamil",
      time: "14 days ago"
    },
    {
      type: 'review',
      title: "WOW I was really surprised how easy it...",
      text: "WOW I was really surprised how easy it was to start earning Free Gift Cards. Such a Great Way as you get the Pleasure of Playing Good Games and Earning from",
      author: "Brian Webber",
      time: "15 days ago"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const cardWidth = 300; // Approximate card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainer.current) {
      const scrollLeft = scrollContainer.current.scrollLeft;
      const width = scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth;
      const index = Math.round((scrollLeft / width) * (reviews.length - 1));
      // This is a rough approximation for dots, might need tuning for precise index
      // Better: Calculate based on card width
      const cardWidth = scrollContainer.current.children[0].clientWidth;
      const newIndex = Math.round(scrollLeft / (cardWidth + 24)); // 24 is gap
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Everyone’s talking about Freecash</h2>
        
        <div 
            ref={scrollContainer}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {reviews.map((review, index) => (
                <div key={index} className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start">
                    {review.type === 'trustpilot' ? (
                        <div className="bg-[#1e1f24] p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-[#2d2e33] h-full min-h-[280px]">
                            <h3 className="text-white font-bold text-xl mb-6">Excellent</h3>
                            <div className="flex gap-1 mb-4">
                                {[1,2,3,4,5].map(i => (
                                    <div key={i} className="bg-[#00b67a] p-1.5 rounded-sm">
                                        <Star size={24} className="fill-white text-white" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-400 text-sm mb-8">Based on {review.count} reviews</p>
                            <div className="flex items-center gap-2">
                                <Star className="fill-[#00b67a] text-[#00b67a]" size={28} />
                                <span className="text-white font-bold text-xl">Trustpilot</span>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-[#1e1f24] p-8 rounded-2xl flex flex-col border border-[#2d2e33] h-full min-h-[280px]">
                            <div className="flex gap-1 mb-4">
                                {[1,2,3,4,5].map(i => (
                                    <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                                        <Star size={14} className="fill-white text-white" />
                                    </div>
                                ))}
                            </div>
                            <h3 className="text-white font-bold text-lg mb-3 leading-snug">{review.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4">
                                {review.text}
                            </p>
                            <div className="mt-auto">
                                <p className="text-white font-bold text-sm">{review.author}</p>
                                <p className="text-gray-500 text-xs mt-1">{review.time}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-4">
            <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-lg bg-[#26272c] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2d2e33] transition-colors"
            >
                <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
                {reviews.map((_, i) => (
                    // Only show a subset of dots or all? User image shows about 8-9 dots.
                    <div 
                        key={i} 
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${i === activeIndex ? 'bg-white' : 'bg-[#2d2e33] hover:bg-gray-600'}`}
                        onClick={() => {
                            if (scrollContainer.current) {
                                const cardWidth = scrollContainer.current.children[0].clientWidth;
                                scrollContainer.current.scrollTo({ left: i * (cardWidth + 24), behavior: 'smooth' });
                            }
                        }}
                    ></div>
                ))}
            </div>

            <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-lg bg-[#26272c] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2d2e33] transition-colors"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    </section>
  );
}
