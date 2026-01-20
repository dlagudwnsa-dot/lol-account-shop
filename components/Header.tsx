import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Gem } from 'lucide-react';
import { useNavigation, Page } from '../NavigationContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentPage, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page?: Page; url?: string; isExternal: boolean }[] = [
    { name: '홈', page: 'home', isExternal: false },
    { name: '계정 목록', url: 'https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', isExternal: true },
    { name: '이용 가이드', page: 'guide', isExternal: false },
    { name: '고객센터', page: 'support', isExternal: false },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    if (link.isExternal && link.url) {
      window.open(link.url, '_blank');
    } else if (link.page) {
      navigateTo(link.page);
    }
  };

  return (
    <>
      <header 
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out border-b
        ${isScrolled 
          ? 'h-[72px] bg-[#010A13]/90 backdrop-blur-xl border-[#1E2328] shadow-[0_4px_20px_rgba(0,0,0,0.4)]' 
          : 'h-[90px] bg-gradient-to-b from-[#010A13] to-[#010A13]/95 border-white/5'}`}
      >
        {/* Container: Unified with Hero section for perfect alignment */}
        {/* max-w-[1320px] + mx-auto + px-4 md:px-8 */}
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* Brand Logo Signature */}
          <div onClick={() => navigateTo('home')} className="flex items-center gap-4 group cursor-pointer select-none">
             {/* Enhanced Symbol - Scaled Up */}
             <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                {/* Rotating Outer Diamond Frame */}
                <div className="absolute inset-0 border border-[#3C3C41] rotate-45 scale-75 transition-all duration-700 ease-out group-hover:border-[#C8AA6E] group-hover:scale-90 group-hover:rotate-90"></div>
                
                {/* Inner Gold Line Accent */}
                <div className="absolute inset-0 border border-lol-gold/40 rotate-45 scale-50 transition-all duration-500 group-hover:border-lol-gold group-hover:shadow-[0_0_15px_rgba(200,170,110,0.5)]"></div>
                
                {/* Core Gem */}
                <Gem className="w-6 h-6 text-lol-gold relative z-10 drop-shadow-[0_0_10px_rgba(200,170,110,0.6)] transition-all duration-500 group-hover:text-[#F0E6D2]" />
             </div>
             
             {/* Typography Hierarchy - Refined */}
             <div className="flex flex-col justify-center -space-y-1.5">
                <span className="text-[28px] font-serif font-black text-transparent bg-clip-text bg-gradient-to-br from-[#F0E6D2] via-[#C8AA6E] to-[#785A28] leading-none tracking-tight filter drop-shadow-sm transition-all duration-300 group-hover:brightness-110">
                  LoL
                </span>
                <span className="text-[11px] font-bold text-gray-500 tracking-[0.35em] uppercase transition-colors duration-300 group-hover:text-lol-gold/90 pl-0.5">
                  ACCOUNT SHOP
                </span>
             </div>
          </div>

          {/* Desktop Navigation - Premium Spacing & Typography */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = !link.isExternal && currentPage === link.page;
              
              return (
                <button 
                  key={link.name} 
                  onClick={() => handleNavClick(link)}
                  className={`relative h-full flex items-center text-[16px] font-medium transition-all duration-300 py-2 group font-sans tracking-wide
                    ${isActive ? 'text-[#F0E6D2] font-bold' : 'text-gray-400 hover:text-white'}`}
                >
                  {link.name}
                  
                  {/* Active/Hover Indicator (Gold Rune Line) */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-lol-gold to-transparent transition-all duration-500 ease-out
                    ${isActive ? 'w-full opacity-100 shadow-[0_0_10px_rgba(200,170,110,0.8)]' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'}`}>
                  </span>
                  
                  {/* Subtle Text Glow on Active */}
                  {isActive && (
                    <span className="absolute inset-0 blur-lg bg-lol-gold/10 -z-10 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Premium CTA Button */}
          <div className="hidden md:block">
            <button 
               onClick={() => window.open('https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', '_blank')}
               className="relative group px-1 py-1 overflow-hidden rounded-sm"
            >
              {/* Button Outer Glow/Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#785A28] via-[#C8AA6E] to-[#785A28] clip-path-hextech opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content Background */}
              <div className="relative bg-[#091428] px-8 h-[48px] flex items-center clip-path-hextech transition-all duration-300 group-hover:bg-[#0E1A35]">
                 <span className="relative z-10 flex items-center gap-3 font-bold text-[14px] tracking-[0.1em] uppercase text-lol-gold group-hover:text-[#F0E6D2] transition-colors duration-300">
                    계정 보러가기
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                 </span>
              </div>
              
              {/* Inner Glow Effect on Hover */}
              <div className="absolute inset-0 bg-lol-gold/10 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-lol-gold transition-colors p-2 rounded-md hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-[#010A13]/98 border-b border-[#1E2328] backdrop-blur-xl transition-all duration-500 overflow-hidden shadow-2xl ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
           <div className="p-8 flex flex-col gap-4">
             {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => handleNavClick(link)}
                  className="text-gray-400 hover:text-lol-gold text-lg font-bold py-4 border-b border-white/5 hover:border-lol-gold/30 hover:pl-3 transition-all duration-300 flex items-center justify-between group w-full text-left"
                >
                  {link.name}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-lol-gold" />
                </button>
            ))}
            <button 
              onClick={() => window.open('https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', '_blank')}
              className="w-full mt-6 h-[56px] bg-gradient-to-r from-[#C8AA6E] to-[#785A28] text-[#010A13] font-black text-sm uppercase tracking-widest clip-path-hextech hover:brightness-110 transition-all shadow-lg shadow-lol-gold/20 flex items-center justify-center gap-2"
            >
              계정 보러가기 <ArrowRight className="w-4 h-4" />
            </button>
           </div>
        </div>
      </header>
    </>
  );
};

export default Header;