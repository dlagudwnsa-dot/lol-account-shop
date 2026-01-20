import React from 'react';
import Button from './Button';
import { ArrowRight, ShieldCheck, Zap, Award, ChevronRight } from 'lucide-react';
import { useNavigation } from '../NavigationContext';

const About: React.FC = () => {
  const { navigateTo } = useNavigation();

  const handleMoveToShop = () => {
    window.open('https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', '_blank');
  };

  const features = [
    {
      icon: ShieldCheck,
      title: "엄격한 1대주 검증 시스템",
      desc: "본인 인증 해제 여부와 계정 이력을 3단계로 검수합니다."
    },
    {
      icon: Zap,
      title: "기다림 없는 즉시 자동 지급",
      desc: "결제와 동시에 아이디/비밀번호가 화면에 출력됩니다."
    },
    {
      icon: Award,
      title: "운영 기간 내 책임 보증",
      desc: "구매 후 발생할 수 있는 문제에 대해 끝까지 책임집니다."
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#010A13]">
      {/* 1. Background Layer: Deep Gradient + Noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010A13] via-[#050e18] to-[#010A13] z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] z-0 mix-blend-overlay"></div>
      
      {/* 2. Ambient Glow (Vignette & Spotlights) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-lol-blue/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-lol-gold/5 via-transparent to-transparent pointer-events-none"></div>

      {/* 3. Decorative Abstract Rune (Background Watermark) */}
      <div className="absolute right-[-10%] md:right-[5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-[0.03] pointer-events-none rotate-12">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.2,17.8C51,27.6,40.5,35.2,30.3,41.9C20.1,48.7,10,54.6,-1.2,56.3C-12.5,58,-24.9,55.5,-36.5,49.4C-48.1,43.3,-58.8,33.6,-64.3,21.3C-69.8,9,-70,-5.9,-63.9,-18.3C-57.8,-30.7,-45.3,-40.6,-33.5,-49.2C-21.7,-57.8,-10.9,-65.1,3.3,-69.6C17.5,-74.2,34.5,-73,42.7,-62.9Z" transform="translate(100 100) scale(1.1)" className="text-lol-gold" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-lol-blue" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-lol-gold" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header Group */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="h-[1px] w-8 bg-lol-gold"></div>
                 <span className="text-lol-gold font-serif font-bold tracking-[0.2em] text-sm md:text-base uppercase">About LoL Account Shop</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-white leading-tight drop-shadow-lg">
                신뢰와 안전,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0E6D2] to-[#C8AA6E]">타협하지 않는 원칙.</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed font-light max-w-2xl break-keep">
                단 한 번의 거래보다, 고객님과의 <strong>오랜 신뢰</strong>를 더 중요하게 생각합니다.
                LoL Account Shop은 검증되지 않은 계정은 절대 취급하지 않으며,
                프리미엄 롤 계정 거래의 새로운 기준을 제시합니다.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-6 pt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-[#1E2328] border border-lol-gold/20 flex items-center justify-center shrink-0 group-hover:border-lol-gold group-hover:bg-lol-gold/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                    <feature.icon className="w-5 h-5 text-lol-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-lol-gold transition-colors">{feature.title}</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slogan */}
            <div className="py-6 border-l-4 border-lol-gold/50 pl-6 my-6 bg-gradient-to-r from-lol-gold/5 to-transparent rounded-r-lg">
              <p className="text-2xl md:text-3xl font-serif italic text-white font-medium">
                "안전하지 않다면, <br className="md:hidden" />판매하지 않습니다."
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Button 
                onClick={handleMoveToShop}
                className="w-full sm:w-auto px-10 py-4 bg-[#C8AA6E] text-[#010A13] hover:bg-[#D4B982] shadow-[0_0_25px_rgba(200,170,110,0.3)] hover:shadow-[0_0_35px_rgba(200,170,110,0.5)] font-bold text-lg border-none"
              >
                계정 매물 보러가기
              </Button>
              
              <button 
                onClick={() => navigateTo('guide')}
                className="group flex items-center gap-2 text-gray-400 hover:text-white font-medium text-sm border-b border-transparent hover:border-lol-gold transition-all pb-0.5"
              >
                이용 가이드 확인하기
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-lol-gold" />
              </button>
            </div>
          </div>

          {/* Right Visual Column (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px]">
             {/* Abstract Tech Graphic */}
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Rotating Rings */}
                <div className="w-[400px] h-[400px] rounded-full border border-lol-gold/20 absolute animate-[spin_60s_linear_infinite]"></div>
                <div className="w-[360px] h-[360px] rounded-full border border-dashed border-lol-blue/20 absolute animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="w-[320px] h-[320px] rounded-full border border-lol-gold/10 absolute animate-[pulse_4s_ease-in-out_infinite]"></div>
                
                {/* Central Emblem Area */}
                <div className="relative w-64 h-64 bg-[#091428] clip-path-hextech flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-lol-gold/30 backdrop-blur-sm z-10 group hover:border-lol-gold transition-colors duration-500">
                   <div className="text-center p-6">
                      <ShieldCheck className="w-16 h-16 text-lol-gold mx-auto mb-4 drop-shadow-[0_0_10px_rgba(200,170,110,0.5)]" />
                      <h4 className="text-lg font-serif font-bold text-[#F0E6D2] tracking-widest uppercase mb-1">Premium</h4>
                      <p className="text-xs text-lol-blue uppercase tracking-[0.3em]">Quality Assured</p>
                   </div>
                   {/* Corner Accents */}
                   <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lol-gold"></div>
                   <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-lol-gold"></div>
                   <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-lol-gold"></div>
                   <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lol-gold"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-2 h-2 bg-lol-gold rounded-full shadow-[0_0_10px_rgba(200,170,110,1)] animate-float"></div>
                <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-lol-blue rounded-full shadow-[0_0_10px_rgba(10,200,185,1)] animate-pulse"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;