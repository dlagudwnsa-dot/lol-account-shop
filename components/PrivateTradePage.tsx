import React from 'react';
import { Users, AlertTriangle, ArrowLeft } from 'lucide-react';
import Button from './Button';
import { useNavigation } from '../NavigationContext';

const PrivateTradePage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-[#010A13] pt-12 pb-24 animate-fade-in-up">
       <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg')] bg-cover bg-center filter blur-xl"></div>
       <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#010A13] via-[#010A13]/90 to-[#010A13]"></div>

       <div className="relative z-10 container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-serif uppercase tracking-wider">
            <button onClick={() => navigateTo('home')} className="hover:text-lol-gold transition-colors flex items-center gap-1">
               <ArrowLeft className="w-3 h-3" /> Home
            </button>
            <span>/</span>
            <span className="text-lol-gold">Private Trade</span>
          </div>

          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              개인 거래 안내
            </h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              판매자와 구매자가 직접 거래하는 방식에 대한 안내입니다.
            </p>
          </div>

          <div className="bg-[#091428]/80 backdrop-blur-md border border-[#3C3C41] p-8 md:p-12 clip-path-hextech grayscale-[0.3]">
             <div className="space-y-8 text-gray-300 font-light leading-7">
                <section>
                   <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                     <span className="w-1.5 h-6 bg-gray-400 block"></span>
                     개인 거래 계정이란?
                   </h2>
                   <p className="pl-4 border-l border-[#1E2328]">
                      개인 거래 계정은 일반 회원이 판매자로 등록하여 올린 매물입니다. 
                      LoL Account Shop은 거래 플랫폼 공간만을 제공하며, 거래의 당사자는 판매자와 구매자 본인입니다. 
                      보증 계정에 비해 가격이 저렴할 수 있으나, 안전성에 대한 책임은 당사자 간에 있습니다.
                   </p>
                </section>

                <section>
                   <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                     <span className="w-1.5 h-6 bg-amber-500 block"></span>
                     주의사항 및 위험성
                   </h2>
                   <div className="pl-4 space-y-3">
                      <div className="flex items-start gap-3 bg-amber-900/20 p-4 rounded border border-amber-500/20">
                         <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                         <span className="text-sm text-amber-100/80">
                            <strong>보증 제한:</strong> 개인 거래 계정은 LoL Account Shop의 '운영 기간 보증' 대상이 아닙니다. 
                            회수 사고 발생 시 판매자와 직접 연락하여 해결해야 하며, 사이트 차원의 보상은 제한적일 수 있습니다.
                         </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">
                         판매자가 1대주가 아닐 가능성이 존재하며, 추후 계정 잠금이나 회수 등의 문제가 발생할 위험이 보증 계정보다 상대적으로 높습니다.
                      </p>
                   </div>
                </section>

                <section>
                   <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                     <span className="w-1.5 h-6 bg-gray-400 block"></span>
                     권장 대상
                   </h2>
                   <p className="pl-4 border-l border-[#1E2328]">
                      단기간 사용할 계정이 필요하거나, 리스크를 감수하더라도 가장 저렴한 가격에 계정을 구하고 싶은 분들에게 적합합니다. 
                      장기간 안전하게 본계정으로 사용하실 분들은 '보증 계정' 구매를 강력히 권장합니다.
                   </p>
                </section>
             </div>
          </div>

          <div className="mt-12 text-center flex flex-col md:flex-row gap-4 justify-center">
             <Button onClick={() => navigateTo('guarantee')} className="bg-[#C8AA6E] text-black border-none hover:bg-[#D4B982]">
               안전한 보증 계정 알아보기
             </Button>
             <Button onClick={() => navigateTo('home')} variant="outline">
               홈으로 돌아가기
             </Button>
          </div>
       </div>
    </div>
  );
};

export default PrivateTradePage;