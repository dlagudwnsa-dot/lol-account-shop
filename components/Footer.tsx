import React, { useState } from 'react';
import { useNavigation, Page } from '../NavigationContext';
import { MessageCircle, Check, Copy } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { currentPage, navigateTo } = useNavigation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('24LoL');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLinkClick = (destination: string, type: 'page' | 'scroll' | 'external') => {
    if (type === 'external') {
      window.open(destination, '_blank');
      return;
    }

    if (type === 'page') {
      navigateTo(destination as Page);
      return;
    }

    if (type === 'scroll') {
      if (currentPage !== 'home') {
        navigateTo('home');
        // Simple delay to allow home to render before scrolling
        setTimeout(() => {
          const element = document.getElementById(destination);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(destination);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-black border-t border-[#1E2328] pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#1E2328] pb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 onClick={() => navigateTo('home')} className="text-2xl font-serif font-bold text-lol-gold tracking-widest mb-4 cursor-pointer hover:text-white transition-colors">LoL Account Shop</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              프리미엄 리그 오브 레전드 계정 거래 플랫폼.<br/>
              가장 안전하고 빠른 서비스를 경험하세요.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Service</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><button onClick={() => handleLinkClick('https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', 'external')} className="hover:text-lol-gold transition-colors hover:underline underline-offset-4">계정 구매</button></li>
                <li><button onClick={() => handleLinkClick('guarantee', 'page')} className="hover:text-lol-gold transition-colors hover:underline underline-offset-4">보증 계정 안내</button></li>
                <li><button onClick={() => handleLinkClick('private-trade', 'page')} className="hover:text-lol-gold transition-colors hover:underline underline-offset-4">개인 거래 안내</button></li>
                <li><button onClick={() => handleLinkClick('process-section', 'scroll')} className="hover:text-lol-gold transition-colors hover:underline underline-offset-4">진행 절차</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Support</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><button onClick={() => handleLinkClick('support', 'page')} className="hover:text-lol-gold transition-colors hover:underline underline-offset-4">고객센터</button></li>
                <li><button onClick={() => handleLinkClick('faq-section', 'scroll')} className="hover:text-lol-gold transition-colors hover:underline underline-offset-4">자주 묻는 질문</button></li>
                <li><button onClick={() => handleLinkClick('guide', 'page')} className="hover:text-lol-gold transition-colors hover:underline underline-offset-4">이용 가이드</button></li>
                <li><button onClick={() => handleLinkClick('terms', 'page')} className="hover:text-lol-gold transition-colors hover:underline underline-offset-4">이용 약관</button></li>
                <li><button onClick={() => handleLinkClick('privacy', 'page')} className="hover:text-lol-gold transition-colors hover:underline underline-offset-4">개인정보처리방침</button></li>
              </ul>
            </div>
          </div>

          {/* Contact Info (Revamped) */}
          <div className="md:col-span-1 text-right">
             <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
             <div className="flex flex-col items-end gap-1 mb-4">
                <span className="text-xs text-gray-400">카카오톡 상담 (24시간 연중무휴)</span>
                <div className="flex items-center gap-2">
                   <span className="text-xl font-bold text-lol-gold font-serif">24LoL</span>
                   <button 
                      onClick={handleCopy}
                      className="text-[10px] border border-[#3C3C41] px-1.5 py-0.5 rounded hover:bg-[#1E2328] text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                   >
                     {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                     복사
                   </button>
                </div>
             </div>
             <button onClick={() => navigateTo('support')} className="text-xs border border-[#3C3C41] px-6 py-3 rounded hover:border-lol-gold hover:text-lol-gold hover:bg-[#091428] transition-all flex items-center gap-2 ml-auto group">
               <MessageCircle className="w-3 h-3 group-hover:scale-110 transition-transform" />
               1:1 문의하기
             </button>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600">
          <p>COPYRIGHT © {currentYear} LoL Account Shop. ALL RIGHTS RESERVED.</p>
          <p>본 사이트는 League of Legends의 공식 사이트가 아니며, Riot Games와 관련이 없습니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;