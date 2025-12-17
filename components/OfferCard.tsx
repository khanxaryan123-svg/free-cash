import React from 'react';
import { Star } from 'lucide-react';

interface OfferCardProps {
  title: string;
  subtitle?: string;
  reward: string;
  rating: number;
  imageColor: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'hero';
}

export default function OfferCard({ title, subtitle, reward, rating, imageColor, imageUrl, icon, variant = 'default' }: OfferCardProps) {
  if (variant === 'hero') {
    return (
      <div className="w-[110px] sm:w-[130px] flex-shrink-0 flex flex-col gap-2">
        <div className={`w-full aspect-square rounded-2xl ${imageColor} relative shadow-lg group cursor-pointer hover:scale-105 transition-transform overflow-hidden`}>
           {icon ? (
             <div className="w-full h-full flex items-center justify-center p-4">
               {icon}
             </div>
           ) : imageUrl ? (
             <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
           ) : (
             <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/20">
               {title[0]}
             </div>
           )}
        </div>
        <div className="flex flex-col">
            <h3 className="font-bold text-white text-sm leading-tight">{title}</h3>
            {subtitle && <p className="text-gray-400 text-xs mb-1">{subtitle}</p>}
            <div className="flex items-center justify-between">
                <span className="text-white font-bold text-sm">{reward}</span>
                <div className="flex items-center gap-0.5 text-xs text-gray-400">
                    <Star size={10} className="text-orange-400 fill-orange-400" />
                    <span>{rating}</span>
                </div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#26272c] rounded-xl overflow-hidden hover:translate-y-[-4px] transition-transform cursor-pointer border border-transparent hover:border-[#2d2e33]">
      <div className={`h-32 ${imageColor} relative flex items-center justify-center`}>
        {icon ? (
             <div className="w-16 h-16">
               {icon}
             </div>
           ) : imageUrl ? (
             <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
           ) : null}
        <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            {rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-white mb-1 truncate">{title}</h3>
        <div className="flex items-center justify-between mt-2">
            <span className="text-gray-400 text-xs">Reward</span>
            <span className="text-green-500 font-bold">{reward}</span>
        </div>
      </div>
    </div>
  );
}