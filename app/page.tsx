import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Star, Mail, Apple, Facebook, Rocket, Flame, Scan, Sword, Dices, Crown, Gamepad2, CheckCircle2, Coins, DollarSign, Gift, Zap, Landmark } from 'lucide-react';

// Custom Google Icon component since it's not in Lucide
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.52 12.29C23.52 11.43 23.44 10.61 23.3 9.82H12V14.46H18.46C18.18 15.96 17.34 17.23 16.08 18.08V21.09H19.95C22.21 19 23.52 15.92 23.52 12.29Z" fill="#4285F4"/>
      <path d="M12 24C15.24 24 17.96 22.92 19.95 21.09L16.08 18.08C15 18.81 13.62 19.23 12 19.23C8.87 19.23 6.22 17.11 5.27 14.26H1.27V17.36C3.25 21.29 7.31 24 12 24Z" fill="#34A853"/>
      <path d="M5.27 14.26C5.03 13.56 4.9 12.8 4.9 12.02C4.9 11.24 5.03 10.48 5.27 9.78V6.68H1.27C0.46 8.28 0 10.1 0 12.02C0 13.93 0.46 15.75 1.27 17.36L5.27 14.26Z" fill="#FBBC05"/>
      <path d="M12 4.77C13.76 4.77 15.34 5.38 16.59 6.57L20.04 3.12C17.96 1.18 15.24 0 12 0C7.31 0 3.25 2.71 1.27 6.68L5.27 9.78C6.22 6.93 8.87 4.77 12 4.77Z" fill="#EA4335"/>
    </svg>
  );
}

function CashoutItem({ name, country, time, amount, method, initial }: { name: string, country: string, time: string, amount: string, method: string, initial: string }) {
  return (
      <div className="bg-[#26272c] rounded-xl p-4 flex items-center justify-between border border-transparent hover:border-[#2d2e33] transition-colors">
          <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  initial === 'J' ? 'bg-green-600' : 
                  initial === 'F' ? 'bg-green-700' :
                  initial === 'G' ? 'bg-blue-500' :
                  initial === 'D' ? 'bg-gray-500' :
                  'bg-green-500'
              }`}>
                  {initial}
              </div>
              <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">{name}</span>
                  <div className="flex items-center gap-1.5">
                      <span className="text-lg leading-none">{country}</span>
                      <span className="text-gray-400 text-xs">{time}</span>
                  </div>
              </div>
          </div>
          <div className="flex items-center gap-4">
              <span className="text-white font-bold">{amount}</span>
              <div className="opacity-80">
                  {method === 'amazon' && <div className="w-6"><span className="text-white font-bold text-lg leading-none font-sans">a</span><div className="w-full h-0.5 bg-[#ff9900] rounded-[50%] -mt-0.5"></div></div>}
                  {method === 'paypal' && <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#white"><path d="M7.076 21.337l.756-4.788h1.856c3.27 0 5.67-1.597 6.447-5.542.274-1.396.096-2.596-.547-3.646-.91-1.488-2.67-2.227-5.26-2.227h-6.22l-4.088 25.86h4.55l.507-3.21z" fill="white"/></svg>}
                  {method === 'visa' && <span className="text-white font-bold italic text-xs">VISA</span>}
                  {method === 'googleplay' && <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M3 2v20l18-10L3 2z" fill="#00d632"/></svg>} 
              </div>
          </div>
      </div>
  )
}



function BenzingaLogo() {
  return (
    <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" fill="white" letterSpacing="-1">BENZINGA</text>
    </svg>
  );
}

function SurveyPoliceLogo() {
  return (
    <svg width="180" height="30" viewBox="0 0 180 30" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M12 2 L22 6 L22 18 C22 24 12 28 12 28 C12 28 2 24 2 18 L2 6 L12 2 Z" fill="#3b82f6" />
       <path d="M12 8 L16 12 L12 22 L8 12 L12 8" fill="white" fillOpacity="0.9"/>
       <text x="30" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="20" fill="white">SurveyPolice</text>
    </svg>
  );
}

function PaidFromSurveysLogo() {
  return (
    <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect x="0" y="3" width="20" height="24" rx="2" stroke="white" strokeWidth="2" fill="none" />
       <path d="M4 12 L9 17 L16 8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
       <text x="28" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="white">paidfromsurveys</text>
    </svg>
  );
}

function PaymentLogo({ type }: { type: string }) {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1b1f] rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border border-[#2d2e33]">
       {type === 'paypal' && <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#003087"><path d="M7.076 21.337l.756-4.788h1.856c3.27 0 5.67-1.597 6.447-5.542.274-1.396.096-2.596-.547-3.646-.91-1.488-2.67-2.227-5.26-2.227h-6.22l-4.088 25.86h4.55l.507-3.21z"/></svg>}
       {type === 'bitcoin' && <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#f7931a] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">₿</div>}
       {type === 'googleplay' && <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M3 2v20l18-10L3 2z" fill="#00d632"/></svg>} 
       {type === 'ethereum' && <svg viewBox="0 0 32 32" className="w-5 h-5 sm:w-6 sm:h-6" fill="#627eea"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378 7.502-10.379z"/></svg>}
       {type === 'litecoin' && <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#345d9d] rounded-full flex items-center justify-center text-white font-bold italic text-sm sm:text-base">Ł</div>}
       {type === 'visa' && <div className="text-white font-bold italic text-[8px] sm:text-[10px]">VISA</div>}
       {type === 'spotify' && <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#1db954] rounded-full flex items-center justify-center"><div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-black rounded-full"></div></div>}
       {type === 'netflix' && <span className="text-[#e50914] font-black text-lg sm:text-xl">N</span>}
       {type === 'apple' && <Apple className="text-white fill-white" size={24} />}
       {type === 'xbox' && <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#107c10] rounded-full flex items-center justify-center text-white font-bold text-[10px] sm:text-xs">X</div>}
       {type === 'amazon' && <div className="flex flex-col items-center justify-center"><span className="text-white font-bold text-xl leading-none font-sans">a</span><div className="w-4 h-1 border-b-2 border-[#ff9900] rounded-[50%] -mt-1"></div></div>}
       {type === 'bank' && <Landmark className="text-white" size={20} />}
       {type === 'stake' && <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#0c152d] rounded-full flex items-center justify-center border border-blue-500"><span className="text-white font-bold text-sm italic">S</span></div>}
    </div>
  )
}

function MiniOfferCard({ title, reward, icon, imageUrl, bg }: { title: string, reward: string, icon?: React.ReactNode, imageUrl?: string, bg: string }) {
  return (
    <div className="bg-[#1e1f24] p-3 rounded-xl flex flex-col gap-3 hover:bg-[#25262b] transition-colors cursor-pointer group">
       <div className={`w-full aspect-square rounded-lg ${bg} flex items-center justify-center relative overflow-hidden`}>
          <div className={`transform group-hover:scale-110 transition-transform duration-300 ${imageUrl ? 'w-full h-full' : ''}`}>
             {icon ? icon : imageUrl ? <img src={imageUrl} alt={title} className="w-full h-full object-cover" /> : null}
          </div>
       </div>
       <div>
          <h3 className="text-white font-bold text-sm truncate">{title}</h3>
          <div className="flex items-center justify-between mt-1">
             <span className="text-[#00d632] font-bold text-sm">{reward}</span>
             <span className="bg-[#5c2e91] text-[10px] font-bold text-white px-1.5 py-0.5 rounded">GAME</span>
          </div>
       </div>
    </div>
  )
}

export default function Home() {


  const heroOffers = [
    { 
      title: "Netflix", 
      subtitle: "Start a trial month", 
      reward: "$5.00", 
      rating: 5.0, 
      color: "bg-black",
      imageUrl: "/images/netflix.png"
    },
    { 
      title: "Dice Dreams", 
      subtitle: "Reach level 10", 
      reward: "$13.00", 
      rating: 5.0, 
      color: "bg-[#0ea5e9]",
      imageUrl: "/images/dicedreams.jpg"
    },
    { 
      title: "TikTok", 
      subtitle: "Sign up", 
      reward: "$2.00", 
      rating: 5.0, 
      color: "bg-black",
      imageUrl: "/images/tiktok.png"
    },
  ];

  const recentCashouts = [
      { name: "BigWinner99", country: "🇺🇸", time: "Just now", amount: "$25.00", method: "paypal", initial: "B" },
      { name: "CryptoFan", country: "🇩🇪", time: "2 mins ago", amount: "$10.00", method: "visa", initial: "C" },
      { name: "SurveyKing", country: "🇬🇧", time: "5 mins ago", amount: "$5.00", method: "amazon", initial: "S" },
      { name: "GamerGirl", country: "🇨🇦", time: "8 mins ago", amount: "$50.00", method: "googleplay", initial: "G" },
      { name: "MobileUser", country: "🇦🇺", time: "12 mins ago", amount: "$15.00", method: "paypal", initial: "M" },
      { name: "FastEarner", country: "🇫🇷", time: "15 mins ago", amount: "$100.00", method: "visa", initial: "F" },
  ];



  function EarnCard({ title, description, label, amount, visual }: { title: string, description: string, label: string, amount: string, visual: React.ReactNode }) {
    return (
      <div className="bg-[#1e1f24] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden group border border-[#2d2e33] hover:border-[#3d3e44] transition-colors h-full">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-[280px]">
          {description}
        </p>
        
        <div className="mt-auto flex flex-col items-center w-full">
            <span className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">{label}</span>
            <span className="text-3xl font-black text-white mb-8">{amount}</span>
            
            {/* Visual Container */}
            <div className="w-full relative h-[200px] flex items-end justify-center">
               {visual}
            </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#151618]">
      <Header />
      
      <div className="pt-[72px]">
        
        <main className="max-w-[1200px] mx-auto p-4 md:p-6">
          {/* Hero Section */}
          <div className="relative w-full flex flex-col items-center justify-center text-center bg-[#151618] rounded-2xl mb-12">
            {/* Background Grid Pattern (Simulated) */}
            <div className="absolute inset-0 opacity-20 grid grid-cols-6 grid-rows-4 gap-2 p-4 pointer-events-none select-none h-[600px] mask-gradient">
                 {[...Array(24)].map((_, i) => (
                    <div key={i} className="bg-gray-700 rounded-lg w-full h-full" style={{ opacity: Math.random() * 0.5 + 0.1 }}></div>
                 ))}
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#151618] via-[#151618]/95 to-[#151618] z-0 h-[600px]"></div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight mt-8">
                    <span className="text-[#00d632]">Get paid</span> for testing apps, <br />
                    games & surveys
                </h1>
                
                <div className="flex items-center gap-2 text-gray-300 font-medium text-lg md:text-xl mb-12">
                    <span>Earn up to <span className="text-white font-bold">$13</span> per offer</span>
                    <span className="mx-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#00d632] rounded-full shadow-[0_0_8px_#00d632]"></div>
                        <span className="text-white font-bold">252</span> Offers available now
                    </span>
                </div>

                {/* Two Column Layout: Featured Cards vs Sign Up */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-12 lg:gap-8">
                    
                    {/* Left Column: Featured Cards */}
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                        <div className="flex gap-4 sm:gap-6 mb-8">
                            {heroOffers.map((offer, index) => (
                                <OfferCard 
                                    key={index}
                                    variant="hero"
                                    title={offer.title} 
                                    subtitle={offer.subtitle}
                                    reward={offer.reward} 
                                    rating={offer.rating} 
                                    imageColor={offer.color} 
                                    imageUrl={offer.imageUrl}
                                />
                            ))}
                        </div>

                        {/* Trustpilot Section */}
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <span className="text-gray-400 font-medium">See our 252,791 reviews on</span>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-white font-bold text-xl">
                                    <Star className="fill-[#00b67a] text-[#00b67a]" size={24} />
                                    <span>Trustpilot</span>
                                </div>
                                <div className="flex gap-1">
                                    {[1,2,3,4,5].map(i => (
                                        <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                                            <Star size={16} className="fill-white text-white" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Right Column: Sign Up Form */}
                    <div className="w-full max-w-md bg-[#1a1b1f] p-6 rounded-2xl border border-[#2d2e33] shadow-2xl">
                        <h2 className="text-2xl font-bold text-white text-center mb-6">Sign Up for Free</h2>
                        
                        <div className="relative mb-4">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="text-gray-500" size={20} />
                            </div>
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                className="w-full bg-[#151618] border border-[#2d2e33] text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-[#00d632] transition-colors"
                            />
                        </div>

                        <div className="text-center mb-6">
                            <a href="#" className="text-gray-400 text-sm underline hover:text-white">I have a referral code</a>
                        </div>

                        <button className="w-full bg-[#00d632] hover:bg-[#00b52a] text-black font-bold py-3 rounded-lg mb-6 transition-colors">
                            Start earning now
                        </button>

                        <div className="relative flex py-2 items-center mb-6">
                            <div className="flex-grow border-t border-gray-700"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">OR</span>
                            <div className="flex-grow border-t border-gray-700"></div>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full bg-white hover:bg-gray-100 text-black font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                <GoogleIcon />
                                <span>Sign Up with Google</span>
                            </button>
                            <button className="w-full bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                <Facebook size={20} fill="white" />
                                <span>Sign Up with Facebook</span>
                            </button>
                            <button className="w-full bg-[#151618] border border-[#2d2e33] hover:bg-[#26272c] text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                <Apple size={20} fill="white" />
                                <span>Sign Up with Apple</span>
                            </button>
                        </div>

                        <div className="mt-6 text-center">
                             <p className="text-gray-400 text-sm font-medium">
                                <span className="text-white font-bold">108561+</span> sign ups in the past 24 hours
                             </p>
                        </div>
                    </div>

                </div>
            </div>
          </div>

          {/* Featured Offers List (Bottom) */}
          <section className="mb-8">
            <div className="bg-[#1a1b1f] rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-gray-700 border border-[#2d2e33]">
                {/* Stat 1 */}
                <div className="flex-1 flex flex-col items-center justify-center p-4 text-center w-full">
                    <div className="flex items-center gap-3 mb-2">
                        <Rocket className="text-white fill-white" size={32} />
                        <span className="text-3xl md:text-4xl font-black text-white">17m 12s</span>
                    </div>
                    <p className="text-gray-400 font-medium">Average time until user earns<br/>their first reward</p>
                </div>

                {/* Stat 2 */}
                <div className="flex-1 flex flex-col items-center justify-center p-4 text-center w-full">
                    <div className="flex items-center gap-3 mb-2">
                        <Flame className="text-white fill-white" size={32} />
                        <span className="text-3xl md:text-4xl font-black text-white">$32</span>
                    </div>
                    <p className="text-gray-400 font-medium">Average money earned by<br/>users yesterday</p>
                </div>

                {/* Stat 3 */}
                <div className="flex-1 flex flex-col items-center justify-center p-4 text-center w-full">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl md:text-4xl font-black text-white">$50,000,000+</span>
                    </div>
                    <p className="text-gray-400 font-medium">Total amount earned on<br/>Freecash</p>
                </div>
            </div>

            {/* Recommended By Section */}
            <div className="flex flex-col items-center justify-center mb-16">
                <h2 className="text-[#6b7280] font-bold mb-8 uppercase tracking-[0.2em] text-xs">Recommended by</h2>
                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="h-8 md:h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                         <PaidFromSurveysLogo />
                    </div>
                    <div className="h-8 md:h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                         <BenzingaLogo />
                    </div>
                    <div className="h-8 md:h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                         <SurveyPoliceLogo />
                    </div>
                </div>
            </div>

            {/* How it Works Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
                {/* Left Column (Sticky Header) */}
                <div className="flex flex-col items-start text-left lg:sticky lg:top-24">
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                        Want to earn free <br/>
                        cash within minutes? <br/>
                        <span className="text-[#00d632]">Here's how</span>
                    </h2>
                    
                    <button className="w-full sm:w-auto px-8 py-4 bg-[#00d632] hover:bg-[#00b52a] text-black font-bold text-lg rounded-xl mb-8 transition-colors">
                        Start earning now
                    </button>

                    <div className="flex flex-col items-start gap-2">
                        <span className="text-gray-400 font-medium">See our 252,791 reviews on</span>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 text-white font-bold text-xl">
                                <Star className="fill-[#00b67a] text-[#00b67a]" size={24} />
                                <span>Trustpilot</span>
                            </div>
                            <div className="flex gap-1">
                                {[1,2,3,4,5].map(i => (
                                    <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                                        <Star size={16} className="fill-white text-white" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Steps List) */}
                <div className="flex flex-col gap-24">
                    {/* Step 1 */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Scan className="text-white" size={32} />
                            <h3 className="text-2xl font-bold text-white">1. Choose an offer</h3>
                        </div>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Take your pick from the tasks on the earn page. We list the best offers from companies who want to advertise their apps, surveys, and products.
                        </p>
                        
                        {/* Mock App Grid Visual */}
                        <div className="bg-[#151618] border border-[#2d2e33] rounded-2xl p-6 relative overflow-hidden">
                            {/* Glow Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00d632] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                                <MiniOfferCard 
                                    title="Solitaire Grand..." 
                                    reward="$10.00" 
                                    bg="bg-blue-600"
                                    icon={<Gamepad2 size={32} className="text-white" />}
                                />
                                <MiniOfferCard 
                                    title="Dungeon Hunt..." 
                                    reward="$25.00" 
                                    bg="bg-red-900"
                                    icon={<Sword size={32} className="text-white" />}
                                />
                                <MiniOfferCard 
                                    title="Dice Dreams" 
                                    reward="$150.00" 
                                    bg="bg-[#0ea5e9]"
                                    imageUrl="/images/dicedreams.jpg"
                                />
                                <MiniOfferCard 
                                    title="Board Kings" 
                                    reward="$35.00" 
                                    bg="bg-purple-600"
                                    icon={<Crown size={32} className="text-white" />}
                                />
                                <MiniOfferCard 
                                    title="Yahtzee With..." 
                                    reward="$12.00" 
                                    bg="bg-indigo-600"
                                    icon={<Dices size={32} className="text-white" />}
                                />
                                <MiniOfferCard 
                                    title="Family Island" 
                                    reward="$22.00" 
                                    bg="bg-teal-600"
                                    icon={<Gamepad2 size={32} className="text-white" />}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle2 className="text-white" size={32} />
                            <h3 className="text-2xl font-bold text-white">2. Complete the offer</h3>
                        </div>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Most offers are very simple and have already earned money for thousands of people. Most offers take around 5-10 minutes to complete.
                        </p>
                        
                        {/* Step 2 Visual */}
                        <div className="bg-[#151618] border border-[#2d2e33] rounded-2xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                            {/* Background Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] via-[#151618] to-[#2e1a4d] opacity-50"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#151618]/50 to-[#151618]"></div>
                            
                            <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-[280px]">
                                {/* App Icon */}
                                <div className="w-24 h-24 rounded-2xl bg-[#0ea5e9] flex items-center justify-center shadow-2xl mb-2 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                                    <img src="/images/dicedreams.jpg" alt="Dice Dreams" className="w-full h-full object-cover relative z-10" />
                                </div>
                                
                                {/* App Info */}
                                <div className="text-center">
                                    <h3 className="text-white font-bold text-xl mb-2">Dice Dreams</h3>
                                    <div className="flex gap-1 justify-center">
                                        {[1,2,3,4,5].map(i => (
                                            <Star key={i} size={18} className="fill-[#fbbf24] text-[#fbbf24]" />
                                        ))}
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-[#1e1f24] rounded-lg p-2.5 flex items-center justify-between border border-[#2d2e33] mt-2 shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#00d632] font-bold bg-[#00d632]/10 px-2 py-0.5 rounded text-xs tracking-wide">$5.00</span>
                                        <span className="text-white font-bold text-xs tracking-wide">Reach level 5</span>
                                    </div>
                                    <div className="bg-[#fbbf24] rounded-full p-0.5">
                                        <Coins size={14} className="text-black fill-black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-[#00d632] rounded-full p-1">
                                <DollarSign className="text-black" size={24} strokeWidth={3} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">3. Get paid</h3>
                        </div>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            For each task you complete, you’ll be rewarded with coins: 1000 coins = $1.00. Cashout the coins and get your hands on your free cash!
                        </p>
                        
                        {/* Step 3 Visual */}
                        <div className="bg-[#151618] border border-[#2d2e33] rounded-2xl p-4 sm:p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                            {/* Falling Coins Background Effect */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className="absolute opacity-10 animate-pulse" 
                                         style={{
                                             top: `${Math.random() * 100}%`,
                                             left: `${Math.random() * 100}%`,
                                             transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`
                                         }}>
                                        <Coins size={48} className="text-white" />
                                    </div>
                                ))}
                            </div>

                            {/* Center Content */}
                            <div className="relative z-10 flex flex-col items-center w-full max-w-sm">
                                {/* Amount Badge */}
                                <div className="bg-[#1e1f24] px-8 py-4 rounded-2xl border border-[#2d2e33] shadow-2xl mb-4 relative">
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>
                                    <span className="text-5xl font-black text-white tracking-tight">$120</span>
                                </div>

                                {/* Arrow */}
                                <div className="mb-8 text-white/50">
                                    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 0C20 0 25 20 10 30C-5 40 5 55 20 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        <path d="M15 50L20 58L28 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>

                                {/* Payment Methods Grid */}
                                <div className="grid grid-cols-5 gap-4 w-full">
                                    {/* Row 1 */}
                                    <PaymentLogo type="paypal" />
                                    <PaymentLogo type="bitcoin" />
                                    <PaymentLogo type="googleplay" />
                                    <PaymentLogo type="ethereum" />
                                    <PaymentLogo type="litecoin" />
                                    
                                    {/* Row 2 */}
                                    <PaymentLogo type="visa" />
                                    <PaymentLogo type="spotify" />
                                    <PaymentLogo type="netflix" />
                                    <PaymentLogo type="apple" />
                                    <PaymentLogo type="xbox" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </section>

            {/* Best Ways to Earn Section */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Best ways to earn</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Play Games */}
                    <EarnCard 
                        title="Play games"
                        description="In order to attract more players, gaming companies want to pay you to play their games. Let's play!"
                        label="Earn per game"
                        amount="$1.00 - $120.00"
                        visual={
                            <div className="relative w-48 h-full bg-[#0ea5e9] rounded-t-3xl border-t-8 border-x-8 border-[#2d2e33] overflow-hidden shadow-2xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-300">
                                <img src="/images/dicedreams.jpg" alt="Game" className="w-full h-full object-cover opacity-80" />
                                {/* Floating Elements */}
                                <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center animate-bounce delay-100">
                                    <Gamepad2 className="text-[#0ea5e9]" size={20} />
                                </div>
                                <div className="absolute bottom-12 right-4 w-12 h-12 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center animate-bounce delay-300">
                                    <Coins className="text-white" size={24} />
                                </div>
                            </div>
                        }
                    />

                    {/* Card 2: Complete Offers */}
                    <EarnCard 
                        title="Complete offers"
                        description="Get to know new companies by trying their apps while you earn money. It's time to get paid for using apps!"
                        label="Earn per app"
                        amount="$1.00 - $75.00"
                        visual={
                            <div className="relative w-48 h-full bg-white rounded-t-3xl border-t-8 border-x-8 border-[#2d2e33] overflow-hidden shadow-2xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-300">
                                {/* App Interface Mockup */}
                                <div className="w-full h-full bg-gray-100 p-4 flex flex-col gap-2">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 bg-black rounded-lg"></div>
                                        <div className="h-2 w-20 bg-gray-300 rounded"></div>
                                    </div>
                                    <div className="h-20 w-full bg-blue-100 rounded-xl mb-2"></div>
                                    <div className="flex gap-2">
                                        <div className="h-12 w-1/2 bg-green-100 rounded-xl"></div>
                                        <div className="h-12 w-1/2 bg-purple-100 rounded-xl"></div>
                                    </div>
                                </div>
                                {/* Floating Elements */}
                                <div className="absolute top-8 right-2 w-10 h-10 bg-black rounded-xl shadow-lg flex items-center justify-center rotate-12 animate-bounce">
                                    <span className="text-white font-bold text-xs">APP</span>
                                </div>
                                <div className="absolute bottom-16 left-4 w-12 h-12 bg-[#00d632] rounded-xl shadow-lg flex items-center justify-center -rotate-6 animate-bounce delay-150">
                                    <DollarSign className="text-white" size={24} />
                                </div>
                            </div>
                        }
                    />

                    {/* Card 3: Join Surveys */}
                    <EarnCard 
                        title="Join surveys"
                        description="Companies need your opinion to create better products and services. That's why they pay for your feedback."
                        label="Earn per 5-10 min survey"
                        amount="$1.00"
                        visual={
                            <div className="relative w-48 h-full bg-[#1a1b1f] rounded-t-3xl border-t-8 border-x-8 border-[#2d2e33] overflow-hidden shadow-2xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-300">
                                {/* Survey Interface Mockup */}
                                <div className="w-full h-full p-4 flex flex-col gap-3">
                                    <div className="text-[10px] text-gray-400">1. Which of these...</div>
                                    <div className="w-full p-2 rounded bg-[#26272c] border border-[#2d2e33] flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full border border-gray-500"></div>
                                        <div className="h-1.5 w-16 bg-gray-600 rounded"></div>
                                    </div>
                                    <div className="w-full p-2 rounded bg-[#26272c] border border-[#00d632] flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full border-4 border-[#00d632]"></div>
                                        <div className="h-1.5 w-20 bg-gray-600 rounded"></div>
                                    </div>
                                    <div className="w-full p-2 rounded bg-[#26272c] border border-[#2d2e33] flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full border border-gray-500"></div>
                                        <div className="h-1.5 w-12 bg-gray-600 rounded"></div>
                                    </div>
                                </div>
                                {/* Floating Elements */}
                                <div className="absolute top-6 left-2 w-10 h-10 bg-orange-500 rounded-xl shadow-lg flex items-center justify-center -rotate-12 animate-bounce delay-75">
                                    <Scan className="text-white" size={20} />
                                </div>
                                <div className="absolute bottom-20 right-4 w-10 h-10 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center rotate-12 animate-bounce delay-200">
                                    <span className="text-white font-bold text-lg">A</span>
                                </div>
                            </div>
                        }
                    />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    We’re the #1 site to make money. <span className="text-[#00d632]">Here’s why</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Highest payouts */}
                    <div className="bg-[#1e1f24] rounded-2xl p-8 flex flex-col items-center text-center hover:bg-[#25262b] transition-colors border border-transparent hover:border-[#2d2e33]">
                        <div className="mb-6">
                             {/* Custom Hand Receiving Money Icon */}
                             <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 8V24" stroke="#00d632" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M24 16L32 24L40 16" stroke="#00d632" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M44 32H20C15.5817 32 12 35.5817 12 40V48" stroke="#00d632" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20 32C20 25.3726 25.3726 20 32 20C38.6274 20 44 25.3726 44 32" stroke="#00d632" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                <rect x="36" y="32" width="20" height="14" rx="2" transform="rotate(-15 36 32)" fill="#1e1f24" stroke="#00d632" strokeWidth="4"/>
                                <circle cx="46" cy="39" r="2" fill="#00d632"/>
                             </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Highest payouts</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Earn way more than on other sites. It’s our goal to help you make as much money as possible.
                        </p>
                    </div>

                    {/* Card 2: Instant cashouts */}
                    <div className="bg-[#1e1f24] rounded-2xl p-8 flex flex-col items-center text-center hover:bg-[#25262b] transition-colors border border-transparent hover:border-[#2d2e33]">
                        <div className="mb-6">
                             <div className="relative">
                                <Zap size={64} className="text-[#00d632]" strokeWidth={1.5} />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <DollarSign size={24} className="text-[#00d632] fill-[#00d632]" />
                                </div>
                             </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Instant cashouts</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Ready to get your money? The minimum cashout varies by region, between as little as $5 and $20, and payouts are almost instant.
                        </p>
                    </div>

                    {/* Card 3: Daily bonuses */}
                    <div className="bg-[#1e1f24] rounded-2xl p-8 flex flex-col items-center text-center hover:bg-[#25262b] transition-colors border border-transparent hover:border-[#2d2e33]">
                        <div className="mb-6">
                             <Gift size={64} className="text-[#00d632]" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Daily bonuses</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Climb the daily bonus ladder, reach the leaderboard, or start a streak to earn extra rewards, for free.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cashout Via Section */}
            <div className="w-full py-10 mb-20">
                <div className="text-center mb-8">
                    <h3 className="text-white font-bold text-xl">Cashout via</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4 max-w-5xl mx-auto">
                    <PaymentLogo type="litecoin" />
                    <PaymentLogo type="visa" />
                    <PaymentLogo type="bitcoin" />
                    <PaymentLogo type="googleplay" />
                    <PaymentLogo type="apple" />
                    <PaymentLogo type="ethereum" />
                    <PaymentLogo type="amazon" />
                    <PaymentLogo type="paypal" />
                    <PaymentLogo type="bank" />
                    <PaymentLogo type="stake" />
            </div>
        </div>



        <TestimonialsCarousel />

            {/* CTA Section */}
            <div className="flex flex-col items-center justify-center gap-8 mb-20 mt-4">
                <div className="flex flex-wrap items-center justify-center gap-2 text-lg sm:text-xl">
                    <span className="text-[#9ca3af]">See our 252,791 reviews on</span>
                    <div className="flex items-center gap-1">
                        <Star className="fill-[#00b67a] text-[#00b67a]" size={28} />
                        <span className="text-white font-bold text-2xl">Trustpilot</span>
                    </div>
                </div>
                
                <button className="bg-[#00d632] hover:bg-[#00b52a] text-[#1a1b1f] font-bold text-xl px-12 py-4 rounded-xl transition-all hover:scale-105">
                    Start earning now
                </button>
            </div>



            <FAQ />

            {/* Cashout Stats Section */}
            <section className="mt-20 mb-20">
                 <div className="bg-[#1a1b1f] rounded-2xl border border-[#2d2e33] overflow-hidden">
                    <div className="bg-[#1877f2] p-6 text-center">
                        <h2 className="text-white font-bold text-lg md:text-xl opacity-90 mb-1">In the last 30 days users cashed out</h2>
                        <div className="text-3xl md:text-5xl font-black text-white tracking-tight">$15,486,913.28</div>
                    </div>
                    <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {recentCashouts.map((item, index) => (
                            <CashoutItem key={index} {...item} />
                        ))}
                    </div>
                 </div>
            </section>

            {/* Join Community Section */}
            <div className="flex flex-col items-center justify-center mb-24 text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Join the community</h2>
                <div className="max-w-3xl mx-auto space-y-6 mb-12">
                    <p className="text-gray-400 text-lg leading-relaxed">
                        When you sign up for Freecash, you join a community of millions of people who choose to make money online. This amazing community can help you to complete the offers fast and earn more money.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        In this video, one of our community members shares how to get started on Freecash now.
                    </p>
                </div>
                
                {/* Video Placeholder */}
                <div className="w-full max-w-4xl aspect-video bg-[#1a1b1f] rounded-2xl border border-[#2d2e33] flex items-center justify-center relative group cursor-pointer overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b1f] to-[#151618]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#151618] to-[#1a1b1f] opacity-30"></div>
                    
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 z-10 border border-white/20">
                         <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="flex flex-col items-center justify-center gap-8 mb-24">
                <div className="flex flex-wrap items-center justify-center gap-2 text-lg sm:text-xl">
                    <span className="text-[#9ca3af]">See our 252,791 reviews on</span>
                    <div className="flex items-center gap-1">
                        <Star className="fill-[#00b67a] text-[#00b67a]" size={28} />
                        <span className="text-white font-bold text-2xl">Trustpilot</span>
                    </div>
                    <div className="flex gap-1 ml-2">
                        {[1,2,3,4,5].map(i => (
                            <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                                <Star size={16} className="fill-white text-white" />
                            </div>
                        ))}
                    </div>
                </div>
                
                <button className="bg-[#00d632] hover:bg-[#00b52a] text-[#1a1b1f] font-bold text-xl px-12 py-5 rounded-xl transition-all hover:scale-105 w-full max-w-2xl shadow-lg">
                    Start earning now
                </button>
            </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}