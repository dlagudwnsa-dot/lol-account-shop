import React from 'react';
import { Lock, Zap, Shield, Crown, Globe, History } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Lock,
      title: "1대주 계정 엄선",
      desc: "수천 개의 계정 중 가장 안전한 1대주 계정만을 선별하여 판매합니다. 본인 인증 해제가 완료된 클린한 계정을 만나보세요.",
      color: "gold"
    },
    {
      icon: Zap,
      title: "1초 자동 지급",
      desc: "사람이 확인하고 보내주는 방식이 아닙니다. 결제 승인과 동시에 24시간 365일 즉시 계정 정보를 열람할 수 있습니다.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "운영 기간 보증",
      desc: "서비스 운영 기간 동안 발생하는 문제에 대해 책임 있는 보증을 제공합니다. 끝까지 함께하는 신뢰를 약속합니다.",
      color: "gold"
    },
     {
      icon: Crown,
      title: "희귀 스킨 보유",
      desc: "PAX, 챔피언십, 승리의 스킨 등 더 이상 구할 수 없는 희귀 스킨 보유 계정을 다수 확보하고 있습니다.",
      color: "blue"
    },
    {
      icon: Globe,
      title: "모든 서버 취급",
      desc: "한국(KR) 서버 뿐만 아니라 NA, EUW, JP 등 전 세계 모든 서버의 계정을 안전하게 거래할 수 있습니다.",
      color: "gold"
    },
    {
      icon: History,
      title: "검증된 거래 시스템",
      desc: "장기간 축적된 데이터와 로직을 기반으로 사고를 예방하는 안정적인 시스템을 운영합니다.",
      color: "blue"
    }
  ];

  return (
    <section className="relative py-16 md:py-32 bg-[#010A13]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-lol-blue font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-2 block animate-pulse">Premium Service</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gold-gradient mb-6">
            WHY CHOOSE US
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-lol-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-[#091428] p-1 clip-path-hextech transition-all duration-300 hover:-translate-y-2">
              {/* Border Gradient */}
              <div className={`absolute inset-0 opacity-30 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b ${feature.color === 'gold' ? 'from-[#C8AA6E] to-[#785A28]' : 'from-[#0AC8B9] to-[#005A82]'}`}></div>
              
              <div className="relative h-full bg-[#050e18] p-6 md:p-8 clip-path-hextech flex flex-col items-center text-center z-10">
                {/* Icon Circle */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#091428] border border-[#1E2328] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] ${feature.color === 'gold' ? 'group-hover:shadow-[0_0_20px_rgba(200,170,110,0.4)]' : 'group-hover:shadow-[0_0_20px_rgba(10,200,185,0.4)]'}`}>
                  <feature.icon className={`w-8 h-8 md:w-10 md:h-10 ${feature.color === 'gold' ? 'text-lol-gold' : 'text-lol-blue'}`} />
                </div>
                
                <h3 className={`text-xl md:text-2xl font-bold mb-4 ${feature.color === 'gold' ? 'text-[#F0E6D2]' : 'text-[#CDFAFA]'}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;