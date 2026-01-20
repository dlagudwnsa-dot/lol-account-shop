import React from 'react';
import { ShieldCheck, Check, ArrowLeft } from 'lucide-react';
import Button from './Button';
import { useNavigation } from '../NavigationContext';

const GuaranteePage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-[#010A13] pt-12 pb-24 animate-fade-in-up">
       <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg')] bg-cover bg-center filter blur-xl"></div>
       <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#010A13] via-[#010A13]/90 to-[#010A13]"></div>

       <div className="relative z-10 container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-serif uppercase tracking-wider">
            <button onClick={() => navigateTo('home')} className="hover:text-lol-gold transition-colors flex items-center gap-1">
               <ArrowLeft className="w-3 h-3" /> Home
            </button>
            <span>/</span>
            <span className="text-lol-gold">Guarantee Account</span>
          </div>

          <div className="text-center mb-12">
            <ShieldCheck className="w-16 h-16 text-lol-gold mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gold-gradient mb-6">
              보증 계정 안내
            </h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              LoL Account Shop의 보증 계정은 안전한 거래를 위해 운영자가 직접 엄선한 프리미엄 상품입니다.
            </p>
          </div>

          <div className="bg-[#091428]/80 backdrop-blur-md border border-[#C8AA6E]/30 p-8 md:p-12 clip-path-hextech shadow-[0_0_50px_rgba(200,170,110,0.1)]">
             <div className="space-y-8 text-gray-300 font-light leading-7">
                <section>
                   <h2 className="text-xl font-bold text-[#F0E6D2] mb-3 flex items-center gap-2">
                     <span className="w-1.5 h-6 bg-lol-gold block"></span>
                     보증 계정이란?
                   </h2>
                   <p className="pl-4 border-l border-[#1E2328]">
                      보증 계정은 LoL Account Shop 관리자가 엄격한 검수 과정을 거쳐 1대주로부터 직접 매입하여 등록한 상품입니다. 
                      일반 위탁 판매 계정과 달리, 계정의 소유권 이력이 투명하며 
                      회수, 정지 등 만일의 사태 발생 시 운영팀이 직접 개입하여 문제를 해결합니다.
                   </p>
                </section>

                <section>
                   <h2 className="text-xl font-bold text-[#F0E6D2] mb-3 flex items-center gap-2">
                     <span className="w-1.5 h-6 bg-lol-blue block"></span>
                     주요 혜택 및 보증 범위
                   </h2>
                   <ul className="pl-4 space-y-3">
                      <li className="flex items-start gap-3">
                         <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                         <span><strong>운영 기간 보증:</strong> 서비스 운영 기간 동안 계정 회수 시 100% 환불 또는 동급 계정 교환을 보증합니다.</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                         <span><strong>1대주 검증 완료:</strong> 본인 인증 해제 여부, 가입 초기 이메일 상태 등이 완벽하게 검증된 계정만 판매합니다.</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                         <span><strong>전담 케어 서비스:</strong> 문제 발생 시 판매자와 연락할 필요 없이, LoL Account Shop 고객센터가 즉시 대응합니다.</span>
                      </li>
                   </ul>
                </section>

                <section>
                   <h2 className="text-xl font-bold text-[#F0E6D2] mb-3 flex items-center gap-2">
                     <span className="w-1.5 h-6 bg-gray-500 block"></span>
                     주의사항
                   </h2>
                   <p className="pl-4 border-l border-[#1E2328] text-sm text-gray-400">
                      구매자의 과실(불법 프로그램 사용, 욕설로 인한 정지 등)로 인한 문제는 보증 범위에 포함되지 않습니다. 
                      또한, 계정 정보 수령 후 개인 정보 변경을 소홀히 하여 발생한 해킹 피해에 대해서는 책임지지 않습니다.
                   </p>
                </section>
             </div>
          </div>

          <div className="mt-12 text-center">
             <Button onClick={() => window.open('https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', '_blank')} className="bg-[#C8AA6E] text-black border-none hover:bg-[#D4B982]">
               보증 계정 매물 확인하기
             </Button>
          </div>
       </div>
    </div>
  );
};

export default GuaranteePage;