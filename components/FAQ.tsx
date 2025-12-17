"use client"
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much can you make on Freecash?",
      answer: "While there is technically no upper-limit to the amount of money you can make on Freecash, the most we normally see our top-earners make each month is around $5-6k.\n\nYou can see how much our top earners are making each month by checking out the leaderboard. The first user to make $5k each month earns a $500 bonus."
    },
    {
      question: "What is the minimum amount you can withdraw?",
      answer: "For your first withdrawal, you need to reach a minimum threshold, which ranges from $5 to $20 depending on your region.\n\nFor subsequent withdrawals, the minimum amount depends on the method you choose. You can withdraw funds to Stake from as little as $0.10, but for most options, including bank transfer, PayPal, and gift cards, the minimum amount you can withdraw is $5."
    },
    {
      question: "How is Freecash able to pay users?",
      answer: (
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <span className="text-5xl font-black text-[#00d632] leading-[0.8]">1</span>
            <div>
              <h4 className="text-[#00d632] font-bold text-lg mb-1">Users complete tasks from advertisers</h4>
              <p className="text-gray-400 text-sm">Advertisers provide various tasks for users, including downloading an app, signing up for a website, watching videos, reaching a certain in-game level and much more.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-5xl font-black text-[#00d632] leading-[0.8]">2</span>
            <div>
              <h4 className="text-[#00d632] font-bold text-lg mb-1">Advertisers pay Freecash</h4>
              <p className="text-gray-400 text-sm">After a user successfully completes a task, the advertiser pays Freecash a commission.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-5xl font-black text-[#00d632] leading-[0.8]">3</span>
            <div>
              <h4 className="text-[#00d632] font-bold text-lg mb-1">Freecash sends you payouts</h4>
              <p className="text-gray-400 text-sm">We share the commission with you. Freecash users earn up to $100+ per day.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "How quickly will you get paid after making a withdrawal?",
      answer: "The time it takes to process a withdrawal depends on the cash-out method. With most options, including PayPal and gift cards, your withdrawal will be processed instantly. With other withdrawal methods, such as direct bank transfer, it could take up to 2 business days."
    },
    {
        question: "Does Freecash have an age restriction?",
        answer: "You need to be at least 16 years old to use Freecash and make withdrawals. This minimum age requirement is in place to comply with legal and regulatory guidelines."
    }
  ];

  return (
    <section className="mb-20 max-w-4xl mx-auto px-4 md:px-0">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-[#151618] rounded-xl border border-[#2d2e33] overflow-hidden transition-all duration-300"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1e1f24] transition-colors"
            >
              <span className="text-white font-bold text-lg">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="text-white" size={24} />
              ) : (
                <Plus className="text-white" size={24} />
              )}
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-[#2d2e33]/50 mt-2 whitespace-pre-line">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
