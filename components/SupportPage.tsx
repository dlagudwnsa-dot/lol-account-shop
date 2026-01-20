import React, { useState } from 'react';
import { MessageCircle, Copy, Check, ArrowRight, BookOpen } from 'lucide-react';
import Button from './Button';
import { useNavigation } from '../NavigationContext';

const SupportPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('24LoL');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#010A13] pt-12 pb-24 animate-fade-in-up">
       {/* Background Decoration */}
       <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_39.jpg')] bg-cover bg-center filter blur-xl"></div>
       <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#010A13] via-[#010A13]/90 to-[#010A13]"></div>

       <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-serif uppercase tracking-wider">
            <button onClick={() => navigateTo('home')} className="hover:text-lol-gold transition-colors">Home</button>
            <span>/</span>
            <span className="text-lol-gold">Support</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gold-gradient mb-4 drop-shadow-md">
              SUPPORT CENTER
            </h1>
            <p className="text-gray-300 text-lg font-light">
              24시간 상담 가능 <span className="text-lol-blue font-bold">(카카오톡 문의)</span>
            </p>
          </div>

          {/* Main Contact Card */}
          <div className="bg-[#091428]/90 backdrop-blur-xl border border-lol-gold/30 p-8 md:p-12 clip-path-hextech shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center relative overflow-hidden group">
             {/* Glow Effect */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-lol-gold/10 blur-3xl rounded-full pointer-events-none"></div>

             <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-[#FAE100] rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-3 transition-transform duration-300">
                   <MessageCircle className="w-10 h-10 text-[#3C1E1E]" fill="currentColor" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">카카오톡 친구추가</h2>
                <div className="flex items-center gap-4 bg-black/40 px-6 py-3 rounded-lg border border-white/10 mb-8">
                   <span className="text-3xl font-serif font-black text-lol-gold tracking-widest">24LoL</span>
                   <button 
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors border-l border-white/20 pl-4"
                   >
                     {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                     {copied ? '복사됨' : 'ID 복사'}
                   </button>
                </div>

                <div className="bg-[#010A13]/60 p-6 rounded text-left w-full max-w-md border border-[#1E2328]">
                   <h3 className="text-sm font-bold text-lol-blue mb-3 uppercase tracking-wider">⚡ 빠른 처리를 위한 문의 양식</h3>
                   <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                      <li>닉네임 / 아이디</li>
                      <li>주문번호 (구매하신 경우)</li>
                      <li>문의 내용 (최대한 자세히)</li>
                   </ul>
                </div>
             </div>
          </div>

          {/* FAQ Mini */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { q: "배송은 얼마나 걸리나요?", a: "결제 즉시(1초 이내) 웹사이트 화면에 자동 지급됩니다." },
               { q: "계정 정보는 어디서 보나요?", a: "우측 상단 [내정보] > [구매로그]에서 확인 가능합니다." },
               { q: "환불 규정이 궁금해요.", a: "정보 열람 전 100% 환불, 열람 후에는 단순 변심 환불 불가합니다." }
             ].map((item, idx) => (
               <div key={idx} className="bg-[#091428]/50 border border-[#1E2328] p-6 hover:border-lol-gold/30 transition-colors">
                  <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
                    <span className="text-lol-gold">Q.</span> {item.q}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.a}</p>
               </div>
             ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
             <Button onClick={() => window.open('https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', '_blank')} className="w-full md:w-auto min-w-[240px] py-4 bg-[#0AC8B9] text-black border-none hover:bg-[#08B0A3]">
               <ArrowRight className="w-5 h-5 mr-2" />
               계정 보러가기
             </Button>
             <Button onClick={() => navigateTo('guide')} variant="outline" className="w-full md:w-auto min-w-[240px] py-4">
               <BookOpen className="w-5 h-5 mr-2" />
               이용 가이드 보기
             </Button>
          </div>

       </div>
    </div>
  );
};

export default SupportPage;