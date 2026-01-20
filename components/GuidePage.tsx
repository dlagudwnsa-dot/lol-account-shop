import React from 'react';
import { UserPlus, CreditCard, Search, ShoppingCart, FileText, ArrowRight, Home, MessageCircle } from 'lucide-react';
import Button from './Button';
import { useNavigation } from '../NavigationContext';

const GuidePage: React.FC = () => {
  const { navigateTo } = useNavigation();

  const steps = [
    {
      id: "01",
      title: "회원가입",
      desc: "LoL Account Shop에 가입하여 안전한 거래를 위한 기본 계정을 생성합니다. 복잡한 절차 없이 간편하게 가입이 가능합니다.",
      icon: UserPlus
    },
    {
      id: "02",
      title: "포인트 충전",
      desc: "간편한 결제 절차를 통해 계정 구매에 필요한 포인트를 충전합니다. 결제 완료와 동시에 포인트가 즉시 반영되어 바로 이용하실 수 있습니다.",
      icon: CreditCard
    },
    {
      id: "03",
      title: "계정 선택",
      desc: "상점에서 원하는 티어, 스킨, 챔피언 보유 현황 등 상세 조건을 확인하고, 구매할 롤 계정을 장바구니에 담습니다.",
      icon: Search
    },
    {
      id: "04",
      title: "구매 (결제)",
      desc: "충전된 포인트로 최종 결제를 진행합니다. 결제 버튼 클릭 시 시스템이 즉시 계정 정보를 할당합니다.",
      icon: ShoppingCart
    },
    {
      id: "05",
      title: "정보 확인 (즉시 지급)",
      desc: "내 정보 > 구매 내역 메뉴에서 지급된 아이디, 비밀번호, 이메일 변경 정보를 1초 만에 확인하실 수 있습니다.",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-[#010A13] pt-12 pb-24 animate-fade-in-up">
       {/* Background Decoration */}
       <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_39.jpg')] bg-cover bg-center filter blur-xl"></div>
       <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#010A13] via-[#010A13]/90 to-[#010A13]"></div>

       <div className="relative z-10 container mx-auto px-4">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-serif uppercase tracking-wider">
            <button onClick={() => navigateTo('home')} className="hover:text-lol-gold transition-colors">Home</button>
            <span>/</span>
            <span className="text-lol-gold">Guide</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gold-gradient mb-4 drop-shadow-md leading-tight">
              롤 계정 구매 및 이용 가이드
            </h1>
            <p className="text-gray-300 text-base md:text-lg font-light">
              회원가입부터 계정 정보 확인까지, <span className="text-lol-gold font-bold">5단계로 끝나는 안전한 거래.</span>
            </p>
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-lol-gold to-transparent mx-auto mt-6 opacity-60"></div>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto space-y-4">
            {steps.map((step, index) => (
              <article key={index} className="group relative">
                {/* Connector Line - Desktop Only */}
                {/* 
                   Alignment Calc: 
                   Padding Left (md:p-8 = 32px) + Icon Center (md:w-20/2 = 40px) = 72px center.
                   Line width 2px -> left should be 71px.
                */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[71px] top-8 bottom-[-24px] w-[2px] bg-[#1E2328] group-hover:bg-lol-gold/40 transition-colors z-0 hidden md:block"></div>
                )}

                <div className="relative bg-[#091428]/80 backdrop-blur-md border border-[#1E2328] p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 clip-path-hextech hover:border-lol-gold/50 transition-all duration-300 shadow-lg">
                   
                   {/* Step Number & Icon */}
                   <div className="flex-shrink-0 relative z-10">
                     <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#010A13] border-2 border-lol-gold/20 flex items-center justify-center group-hover:border-lol-gold group-hover:shadow-[0_0_20px_rgba(200,170,110,0.4)] transition-all duration-500 relative">
                        <step.icon className="w-8 h-8 text-gray-400 group-hover:text-lol-gold transition-colors" />
                     </div>
                     {/* Step Badge */}
                     <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-gradient-to-br from-lol-gold to-[#785A28] text-[#010A13] text-[10px] md:text-xs font-bold px-2 py-0.5 rounded shadow-lg font-serif border border-[#010A13] z-20">
                       STEP {step.id}
                     </span>
                   </div>

                   {/* Content */}
                   <div className="flex-1 text-center md:text-left pt-2 md:pt-0">
                      <h2 className="text-xl md:text-2xl font-bold text-[#F0E6D2] mb-2 group-hover:text-white transition-colors">{step.title}</h2>
                      <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">{step.desc}</p>
                   </div>

                   {/* Mobile Arrow (Visual only) */}
                   <div className="md:hidden">
                      {index !== steps.length - 1 && <ArrowRight className="w-5 h-5 text-gray-600 rotate-90" />}
                   </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6">
            <Button onClick={() => navigateTo('home')} variant="outline" className="w-full md:w-auto min-w-[200px] text-gray-400 border-gray-600 hover:text-white hover:border-white">
              <Home className="w-4 h-4 mr-2" />
              홈으로 돌아가기
            </Button>
            
            <Button onClick={() => window.open('https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', '_blank')} className="w-full md:w-auto min-w-[200px] bg-[#C8AA6E] text-black border-none hover:bg-[#D4B982] shadow-[0_0_20px_rgba(200,170,110,0.3)]">
              계정 매물 보러가기
            </Button>

            <Button onClick={() => navigateTo('support')} variant="secondary" className="w-full md:w-auto min-w-[200px]">
              <MessageCircle className="w-4 h-4 mr-2" />
              고객센터 문의하기
            </Button>
          </div>

       </div>
    </div>
  );
};

export default GuidePage;