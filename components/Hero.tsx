import React from 'react';
import Button from './Button';
import { ArrowRight, ShieldCheck, Zap, UserCheck, MessageCircle, Star } from 'lucide-react';
import { useNavigation } from '../NavigationContext';

const Hero: React.FC = () => {
  const { navigateTo } = useNavigation();

  const handleScrollToShop = () => {
    window.open('https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', '_blank');
  };

  return (
    // Mobile: min-h-screen with h-auto to allow scrolling if content overflows. 
    // Desktop: Fixed height logic remains for the immersive effect.
    <div className="relative w-full min-h-[100dvh] h-auto md:h-[90vh] md:max-h-[900px] bg-[#010A13] flex flex-col md:flex-row items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE LAYER */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_top] transition-transform duration-1000 ease-out md:hover:scale-105"
        style={{
          backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_39.jpg')`,
          filter: 'blur(0px) saturate(1.3) brightness(1.1) contrast(1.2)', 
          transform: 'scale(1.05)',
        }}
      ></div>

      {/* SMART OVERLAYS */}
      <div className="absolute inset-0 z-0 bg-purple-500/10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-black/60 md:bg-black/40 z-0 pointer-events-none"></div>
      <div className="absolute inset-y-0 left-0 w-full md:w-[70%] bg-gradient-to-t md:bg-gradient-to-r from-[#010A13] via-[#010A13]/80 md:via-[#010A13]/60 to-transparent z-0 pointer-events-none"></div>
      
      {/* 3D OBJECT LAYER - Adjusted for Mobile to not block text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full transform scale-[1.0] translate-y-[-10%] md:scale-[1.3] md:translate-x-[-5%] md:translate-y-0 transition-transform duration-700 ease-out opacity-20 md:opacity-100 mix-blend-screen">
          <iframe 
            src='https://my.spline.design/reactiveorb-5xMtlAWiDXjIbWIArN065xjG/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full border-0" 
            title="Interactive LoL 3D Orb"
            style={{ pointerEvents: 'auto' }} 
          ></iframe>
        </div>
      </div>
      
      {/* CONTENT LAYER */}
      {/* Unified Container: max-w-[1320px] + mx-auto + px-4 md:px-8 */}
      <div className="relative z-20 w-full max-w-[1320px] mx-auto px-4 md:px-8 flex-grow flex flex-col justify-center pt-32 pb-24 md:pt-0 md:pb-0">
        <div className="animate-fade-in-up space-y-6 md:space-y-8 max-w-3xl relative pointer-events-none">
          
          {/* Top Badge & Rating */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-lol-gold/40 rounded-full bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(200,170,110,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-lol-gold text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-black drop-shadow-md">
                Live Market Active
              </span>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
               <div className="flex">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500 drop-shadow-sm" />)}
               </div>
               <span className="text-gray-200 text-[10px] md:text-xs font-medium border-l border-white/20 pl-2 ml-1 shadow-black drop-shadow-sm">4.9/5.0 (1,250+ 후기)</span>
            </div>
          </div>

          {/* Main Title - H1 for SEO */}
          <h1 className="font-sans font-black leading-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] select-none">
            <span className="text-3xl sm:text-4xl md:text-5xl block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F0E6D2] to-[#C8AA6E] filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              검증된 1대주 계정
            </span>
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl block tracking-tight">
              안전한 거래의<br />
              <span className="text-lol-gold relative inline-block filter drop-shadow-[0_0_15px_rgba(200,170,110,0.4)]">
                새로운 기준
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-lol-blue opacity-80 drop-shadow-lg" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-100 font-light leading-relaxed max-w-lg select-none drop-shadow-[0_2px_4px_rgba(0,0,0,1)] bg-black/20 p-2 rounded-lg backdrop-blur-[2px]">
             <strong className="text-white">LoL Account Shop</strong>은 오직 <span className="text-lol-blue font-medium shadow-black drop-shadow-md">100% 본인 인증 해제</span>된<br className="hidden md:block" />
             클린 계정만을 취급합니다. 마법 같은 거래 경험을 시작하세요.
          </p>

          {/* USP Badges - Grid adjusted for mobile to prevent overflow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 select-none pointer-events-auto">
            {[
              { icon: ShieldCheck, text: "1대주 100% 보장", color: "text-emerald-400" },
              { icon: Zap, text: "결제 즉시 자동 인도", color: "text-yellow-400" },
              { icon: UserCheck, text: "운영 기간 내 보증", color: "text-blue-400" },
              { icon: MessageCircle, text: "운영자 직접 응대", color: "text-pink-400" },
            ].map((usp, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-[#091428]/80 border border-white/10 rounded-lg px-3 py-2 backdrop-blur-md shadow-lg hover:bg-[#091428] transition-colors group">
                <usp.icon className={`w-4 h-4 ${usp.color} drop-shadow-[0_0_5px_rgba(0,0,0,1)]`} />
                <span className="text-sm text-gray-100 font-medium drop-shadow-md">{usp.text}</span>
              </div>
            ))}
          </div>

          {/* Buttons - Full width on mobile, proper stacking */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 pointer-events-auto w-full sm:w-auto pb-4">
            <Button 
              onClick={handleScrollToShop} 
              fullWidth
              className="text-base md:text-lg px-10 py-4 bg-[#C8AA6E] text-black border-none hover:bg-[#D4B982] shadow-[0_0_30px_rgba(200,170,110,0.3)] hover:shadow-[0_0_50px_rgba(200,170,110,0.5)] font-black w-full sm:w-auto"
            >
              계정 매물 보러가기 <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button 
              onClick={() => navigateTo('guide')} 
              variant="outline" 
              fullWidth
              className="text-base md:text-lg px-10 py-4 hover:bg-white/10 bg-black/60 backdrop-blur-md border-lol-gold/50 text-[#F0E6D2] w-full sm:w-auto"
            >
              서비스 이용 가이드
            </Button>
          </div>
          
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile screens to prevent overlap */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-pointer pointer-events-auto group hidden md:flex">
        <span className="text-[10px] tracking-[0.3em] text-lol-gold uppercase font-bold group-hover:tracking-[0.4em] transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-lol-gold/50 rounded-full flex justify-center p-1 shadow-[0_0_15px_rgba(200,170,110,0.2)] bg-black/40 backdrop-blur-sm">
          <div className="w-1 h-2 bg-lol-gold rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;