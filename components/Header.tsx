'use client';

import React, { useState } from 'react';
import { Globe, User, Banknote, Menu, X } from 'lucide-react';
import { useLanguage } from '../app/context/LanguageContext';

export default function Header() {
  const { t, setIsLanguageModalOpen } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="h-[72px] bg-[#16171c] border-b border-[#2d2e33] flex items-center justify-between px-4 lg:px-8 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-6">
          {/* Mobile Menu Button (Visible on small screens) */}
          <button 
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo Section */}
          <a href="/" className="flex items-center gap-2">
             <div className="w-9 h-9 bg-[#00d632] rounded flex items-center justify-center">
                <span className="text-black font-extrabold text-xl italic">S</span>
             </div>
             <span className="text-white font-extrabold text-xl tracking-wide italic">FREECASH</span>
          </a>

          {/* Vertical Divider */}
          <div className="h-8 w-px bg-[#2d2e33] hidden md:block"></div>

          {/* Cashout Link */}
          <a href="#" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white font-bold transition-colors">
              <Banknote size={20} />
              <span>{t.header.cashout}</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Globe Icon */}
          <button 
            onClick={() => setIsLanguageModalOpen(true)}
            className="text-gray-400 hover:text-white p-2"
          >
              <Globe size={20} />
          </button>

          {/* Sign In Button */}
          <button className="bg-[#26272c] hover:bg-[#323339] text-white px-5 py-2.5 rounded font-bold text-sm transition-colors hidden sm:block">
              {t.header.signin}
          </button>

          {/* Sign Up Button */}
          <button className="bg-[#00d632] hover:bg-[#00b52a] text-black px-6 py-2.5 rounded font-bold text-sm transition-colors">
              {t.header.signup}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Content */}
          <div className="absolute top-0 left-0 bottom-0 w-[280px] bg-[#16171c] border-r border-[#2d2e33] p-6 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#00d632] rounded flex items-center justify-center">
                   <span className="text-black font-extrabold text-lg italic">S</span>
                </div>
                <span className="text-white font-extrabold text-lg tracking-wide italic">FREECASH</span>
              </a>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white font-bold p-3 rounded-lg hover:bg-[#26272c] transition-colors">
                  <Banknote size={20} />
                  <span>{t.header.cashout}</span>
              </a>
              <button className="flex items-center gap-3 text-gray-400 hover:text-white font-bold p-3 rounded-lg hover:bg-[#26272c] transition-colors text-left w-full">
                  <User size={20} />
                  <span>{t.header.signin}</span>
              </button>
            </div>

            <div className="mt-auto">
              <button className="w-full bg-[#00d632] hover:bg-[#00b52a] text-black px-6 py-3 rounded-lg font-bold text-sm transition-colors">
                  {t.header.signup}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}