'use client';
import { Star, Facebook, Instagram, Youtube, Check, X } from 'lucide-react';
import { useLanguage } from '../app/context/LanguageContext';

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.56 13.56 0 0 0-.6 1.232 18.253 18.253 0 0 0-5.5 0 13.46 13.46 0 0 0-.606-1.232.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

export default function Footer() {
  const { language, setLanguage, t, isLanguageModalOpen, setIsLanguageModalOpen } = useLanguage();
  
  const languages = [
    { name: "Chinese", flag: "/china.png", isImage: true },
    { name: "French", flag: "/france.png", isImage: true },
    { name: "German", flag: "/germany.jpg", isImage: true },
    { name: "Portuguese", flag: "/portugal.png", isImage: true },
    { name: "Russian", flag: "/russia.jpg", isImage: true },
    { name: "Arabic", flag: "/saudia arabia.png", isImage: true },
    { name: "Spanish", flag: "/spain.png", isImage: true },
    { name: "English", flag: "/uk.png", isImage: true },
  ];

  const currentFlag = languages.find(l => l.name === language) || languages.find(l => l.name === "English")!;



  return (
    <>
      {isLanguageModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#151618] rounded-2xl w-full max-w-4xl border border-[#2d2e33] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-[#2d2e33]">
              <h3 className="text-white font-bold text-xl">{t.footer.selectLanguage}</h3>
              <button 
                onClick={() => setIsLanguageModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.name}
                  onClick={() => {
                    setLanguage(lang.name as any);
                    setIsLanguageModalOpen(false);
                  }}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                    language === lang.name 
                      ? 'bg-[#1a2c24] border border-[#1e4620]' 
                      : 'hover:bg-[#1a1b1f] border border-transparent hover:border-[#2d2e33]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {lang.isImage ? (
                      <img src={lang.flag} alt={lang.name} className="w-6 h-6 rounded-full object-cover" />
                    ) : (
                      <span className="text-2xl leading-none">{lang.flag}</span>
                    )}
                    <span className={`font-medium ${language === lang.name ? 'text-white' : 'text-gray-300'}`}>
                      {lang.name}
                    </span>
                  </div>
                  {language === lang.name && (
                    <Check size={20} className="text-[#00d632]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="bg-[#151618] border-t border-[#2d2e33] pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
          
          {/* Brand Column - Spans 2 cols on LG */}
          <div className="lg:col-span-2 flex flex-col gap-6 pr-0 lg:pr-12">
            <div className="flex items-center gap-2">
              <div className="bg-[#00d632] w-8 h-8 rounded-lg flex items-center justify-center">
                 <span className="text-black font-black text-xl">$</span>
              </div>
              <span className="text-white font-black text-2xl tracking-tighter">FREECASH</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.about}
            </p>

            {/* Google Play Button */}
            <a href="#" className="bg-black border border-gray-700 rounded-lg p-2 w-fit flex items-center gap-3 hover:border-gray-500 transition-colors">
               <div className="w-8">
                 <svg viewBox="0 0 24 24" className="w-full h-full"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l-4.05 4.051 8.333-4.805zm-4.051-4.05l4.051 4.05 8.334-4.805z" fill="#00d632"/></svg>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] text-white uppercase leading-none">Get it on</span>
                  <span className="text-white font-bold text-lg leading-none">Google Play</span>
               </div>
            </a>

            {/* Trustpilot Widget */}
            <div className="flex items-center gap-2">
               <span className="text-white text-xs font-bold">Excellent</span>
               <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="bg-[#00b67a] w-5 h-5 flex items-center justify-center">
                        <Star size={12} className="fill-white text-white" />
                    </div>
                  ))}
               </div>
               <div className="flex items-center gap-1">
                  <Star className="fill-[#00b67a] text-[#00b67a]" size={16} />
                  <span className="text-white text-xs font-bold">Trustpilot</span>
               </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[#00d632] font-bold mb-6">{t.footer.sections.freecash}</h4>
            <ul className="flex flex-col gap-3">
              {t.footer.linkLists.freecash.map((link, i) => (
                <li key={i}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#00d632] font-bold mb-6">{t.footer.sections.waysToEarn}</h4>
            <ul className="flex flex-col gap-3">
              {t.footer.linkLists.waysToEarn.map((link, i) => (
                <li key={i}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#00d632] font-bold mb-6">{t.footer.sections.resources}</h4>
            <ul className="flex flex-col gap-3">
              {t.footer.linkLists.resources.map((link, i) => (
                <li key={i}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#00d632] font-bold mb-6">{t.footer.sections.business}</h4>
            <ul className="flex flex-col gap-3">
              {t.footer.linkLists.business.map((link, i) => (
                <li key={i}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright / Bottom Bar */}
        <div className="border-t border-[#2d2e33] mt-16 pt-8 flex flex-col items-center gap-6">
           
           {/* Copyright & Links */}
           <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs text-gray-400 font-medium px-4 text-center">
              <span>{t.footer.copyright}</span>
              <span className="hidden md:inline text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors">{t.footer.links.terms}</a>
              <span className="hidden md:inline text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors">{t.footer.links.privacy}</a>
              <span className="hidden md:inline text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors">{t.footer.links.cookie}</a>
              <span className="hidden md:inline text-gray-600">•</span>
              <a href="#" className="hover:text-white transition-colors">{t.footer.links.affiliate}</a>
           </div>

           {/* Language Selector */}
           <button 
             onClick={() => setIsLanguageModalOpen(true)}
             className="bg-[#1a1b1f] hover:bg-[#25262b] border border-[#2d2e33] rounded-full px-4 py-1.5 flex items-center gap-2 transition-colors"
           >
              {currentFlag.isImage ? (
                <img src={currentFlag.flag} alt={currentFlag.name} className="w-5 h-5 rounded-full object-cover" />
              ) : (
                <span className="text-lg leading-none">{currentFlag.flag}</span>
              )}
              <span className="text-gray-300 text-sm font-medium">{currentFlag.name}</span>
           </button>

           {/* Social Icons */}
           <div className="flex items-center gap-3">
              {[
                  { icon: <XIcon />, href: '#' },
                  { icon: <Facebook size={16} />, href: '#' },
                  { icon: <Instagram size={16} />, href: '#' },
                  { icon: <RedditIcon />, href: '#' },
                  { icon: <DiscordIcon />, href: '#' },
                  { icon: <Youtube size={16} />, href: '#' },
                  { icon: <Star size={16} className="fill-white" />, href: '#' }, // Trustpilot
              ].map((social, i) => (
                  <a key={i} href={social.href} className="w-9 h-9 bg-[#1a1b1f] hover:bg-[#25262b] border border-[#2d2e33] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110">
                      {social.icon}
                  </a>
              ))}
           </div>

        </div>
      </div>
    </footer>
    </>
  );
}