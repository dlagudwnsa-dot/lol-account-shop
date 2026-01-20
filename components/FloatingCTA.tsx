import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, X, Menu } from 'lucide-react';
import { useNavigation } from '../NavigationContext';

const FloatingCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navigateTo } = useNavigation();
  
  const handleMoveToShop = () => {
    window.open('https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', '_blank');
  };

  const handleSupport = () => {
    navigateTo('support');
    setIsOpen(false);
  };

  return (
    // Adjusted bottom spacing for mobile (bottom-6) vs desktop (bottom-8)
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-6 z-50 flex flex-col items-end gap-3 font-sans">
      
      {/* Expanded Menu Options */}
      <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}>
        
        {/* Support Option */}
        <button 
           onClick={handleSupport}
           className="flex items-center gap-3 bg-white text-[#010A13] px-5 py-3 rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.5)] hover:bg-gray-100 transition-colors group border border-gray-200"
        >
           <span className="text-sm font-bold whitespace-nowrap">1:1 문의하기</span>
           <div className="bg-gray-100 p-1.5 rounded-full group-hover:bg-gray-200">
             <MessageCircle className="w-4 h-4" />
           </div>
        </button>

        {/* Shop Option (Primary) */}
        <button 
           onClick={handleMoveToShop}
           className="flex items-center gap-3 bg-[#091428] text-lol-gold border border-lol-gold/50 px-5 py-3 rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.5)] hover:bg-[#0E1A35] transition-colors group"
        >
           <span className="text-sm font-bold whitespace-nowrap uppercase tracking-wide">View Accounts</span>
           <div className="bg-lol-gold/10 p-1.5 rounded-full group-hover:bg-lol-gold/20">
             <ArrowUpRight className="w-4 h-4" />
           </div>
        </button>
      </div>

      {/* Main Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(200,170,110,0.4)] border border-lol-gold/50 transition-all duration-300 ${isOpen ? 'bg-[#1E2328] text-white rotate-90' : 'bg-gradient-to-br from-[#C8AA6E] to-[#785A28] text-[#010A13] hover:scale-105'}`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingCTA;