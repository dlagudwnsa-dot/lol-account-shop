import React from 'react';
import { Search, CreditCard, Key, CheckCircle2 } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process-section" className="py-16 md:py-28 bg-[#010A13] relative overflow-hidden">
      {/* 
        Background Texture
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center pointer-events-none opacity-50"
        style={{
          backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_39.jpg')`,
          filter: 'contrast(1.3) brightness(0.9) saturate(1.1)',
        }}
      ></div>
      
      {/* Text Protection Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010A13] via-[#010A13]/60 to-[#010A13] z-0"></div>

      {/* Tech Lines Layer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(45deg, #1E2328 25%, transparent 25%, transparent 75%, #1E2328 75%, #1E2328), linear-gradient(45deg, #1E2328 25%, transparent 25%, transparent 75%, #1E2328 75%, #1E2328)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-24">
           <span className="text-lol-gold font-serif text-sm tracking-[0.3em] uppercase block mb-3 drop-shadow-md font-bold">Easy & Fast</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gold-gradient mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            SYSTEM PROCESS
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-lol-gold to-transparent mx-auto opacity-80 shadow-[0_0_10px_rgba(200,170,110,0.5)]"></div>
          <p className="text-gray-200 mt-4 max-w-xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/30 p-2 rounded box-border">
            복잡한 서류 인증이나 운영자 대기 시간은 존재하지 않습니다. <br/>
            <span className="text-white font-medium">완전 자동화 시스템</span>이 귀하의 시간을 절약해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative max-w-6xl mx-auto">
           {/* Connecting Line (Desktop Only) */}
           <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-[2px] bg-[#1E2328]/80 z-0 backdrop-blur-sm">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-lol-gold/60 to-transparent"></div>
              {/* Rune Nodes */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-lol-gold rotate-45 shadow-[0_0_10px_rgba(200,170,110,0.8)]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 bg-[#010A13] border border-lol-gold rotate-45"></div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-lol-gold rotate-45 shadow-[0_0_10px_rgba(200,170,110,0.8)]"></div>
           </div>

           {/* Step 1 */}
           <div className="relative group">
              <div className="flex flex-col items-center">
                 <div className="w-32 h-32 relative flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-[#091428]/90 backdrop-blur-md border-2 border-[#3C3C41] rotate-45 group-hover:border-lol-gold group-hover:shadow-[0_0_30px_rgba(200,170,110,0.4)] transition-all duration-500 bg-noise"></div>
                    <div className="relative z-10 flex flex-col items-center">
                       <Search className="w-8 h-8 text-gray-400 group-hover:text-lol-gold transition-colors mb-2" />
                       <span className="text-[10px] font-bold text-lol-gold/50 group-hover:text-lol-gold tracking-widest uppercase">Select</span>
                    </div>
                 </div>
                 <div className="mt-8 text-center px-4">
                    <span className="text-xs font-serif text-lol-gold mb-2 block tracking-widest drop-shadow-md">STEP 01</span>
                    <h3 className="text-xl font-bold text-[#F0E6D2] mb-3 group-hover:text-white transition-colors text-shadow-sm drop-shadow-md">계정 선택</h3>
                    <p className="text-sm text-gray-300 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] break-keep">
                       원하는 티어, 챔피언, 스킨 조건을 확인하세요.<br className="hidden md:block"/>
                       모든 계정의 스펙은 <span className="text-white font-bold">100% 투명하게 공개</span>됩니다.
                    </p>
                 </div>
              </div>
           </div>

           {/* Step 2 */}
           <div className="relative group">
              <div className="flex flex-col items-center">
                 <div className="w-32 h-32 relative flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-[#091428]/90 backdrop-blur-md border-2 border-[#3C3C41] rotate-45 group-hover:border-lol-blue group-hover:shadow-[0_0_30px_rgba(10,200,185,0.4)] transition-all duration-500 bg-noise"></div>
                    <div className="relative z-10 flex flex-col items-center">
                       <CreditCard className="w-8 h-8 text-gray-400 group-hover:text-lol-blue transition-colors mb-2" />
                       <span className="text-[10px] font-bold text-lol-blue/50 group-hover:text-lol-blue tracking-widest uppercase">Payment</span>
                    </div>
                 </div>
                 <div className="mt-8 text-center px-4">
                    <span className="text-xs font-serif text-lol-blue mb-2 block tracking-widest drop-shadow-md">STEP 02</span>
                    <h3 className="text-xl font-bold text-[#F0E6D2] mb-3 group-hover:text-white transition-colors text-shadow-sm drop-shadow-md">안전 결제</h3>
                    <p className="text-sm text-gray-300 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] break-keep">
                       SSL 암호화된 결제 시스템을 이용하세요.<br className="hidden md:block"/>
                       <span className="text-white font-bold">개인정보는 저장되지 않으며</span> 즉시 파기됩니다.
                    </p>
                 </div>
              </div>
           </div>

           {/* Step 3 */}
           <div className="relative group">
              <div className="flex flex-col items-center">
                 <div className="w-32 h-32 relative flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-[#091428]/90 backdrop-blur-md border-2 border-[#3C3C41] rotate-45 group-hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all duration-500 bg-noise"></div>
                    <div className="relative z-10 flex flex-col items-center">
                       <Key className="w-8 h-8 text-gray-400 group-hover:text-emerald-400 transition-colors mb-2" />
                       <span className="text-[10px] font-bold text-emerald-500/50 group-hover:text-emerald-500 tracking-widest uppercase">Receive</span>
                    </div>
                 </div>
                 <div className="mt-8 text-center px-4">
                    <span className="text-xs font-serif text-emerald-500 mb-2 block tracking-widest drop-shadow-md">STEP 03</span>
                    <h3 className="text-xl font-bold text-[#F0E6D2] mb-3 group-hover:text-white transition-colors text-shadow-sm drop-shadow-md">즉시 지급</h3>
                    <p className="text-sm text-gray-300 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] break-keep">
                       결제 완료 버튼을 누르는 순간,<br className="hidden md:block"/>
                       화면에 <span className="text-white font-bold">ID와 비밀번호가 자동으로 표시</span>됩니다.
                    </p>
                 </div>
              </div>
           </div>

        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 md:px-8 md:py-3 bg-[#091428]/95 backdrop-blur-xl border border-lol-gold/30 rounded-none clip-path-hextech shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:shadow-lol-gold/10 transition-shadow max-w-[90%] mx-auto">
             <CheckCircle2 className="w-5 h-5 text-lol-gold shrink-0" />
             <span className="text-sm text-gray-300 font-medium break-keep">
               운영자 대기 없이 <span className="text-white font-bold">365일 24시간</span> 즉시 발송됩니다.
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;