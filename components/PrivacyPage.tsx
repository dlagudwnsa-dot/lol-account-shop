import React from 'react';
import { Lock, Eye, ArrowLeft, ShieldCheck } from 'lucide-react';
import Button from './Button';
import { useNavigation } from '../NavigationContext';

const PrivacyPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-[#010A13] pt-12 pb-24 animate-fade-in-up">
       <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_39.jpg')] bg-cover bg-center filter blur-xl"></div>
       <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#010A13] via-[#010A13]/90 to-[#010A13]"></div>

       <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-serif uppercase tracking-wider">
             <button onClick={() => navigateTo('home')} className="hover:text-lol-gold transition-colors flex items-center gap-1">
               <ArrowLeft className="w-3 h-3" /> Home
            </button>
            <span>/</span>
            <span className="text-lol-gold">Privacy Policy</span>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gold-gradient mb-4">
              개인정보처리방침
            </h1>
            <p className="text-gray-400">고객님의 소중한 개인정보를 안전하게 보호합니다.</p>
          </div>

          <div className="bg-[#091428]/80 backdrop-blur-md border border-[#1E2328] p-8 md:p-12 clip-path-hextech shadow-lg">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-[#010A13]/50 p-6 rounded border border-[#1E2328] hover:border-lol-gold/30 transition-colors">
                   <Lock className="w-8 h-8 text-lol-gold mb-4" />
                   <h3 className="text-white font-bold mb-2">수집하는 개인정보 항목</h3>
                   <p className="text-sm text-gray-400 leading-relaxed">
                      서비스 이용 과정에서 아래와 같은 정보가 수집될 수 있습니다.<br/>
                      - 필수항목: 접속 로그, 쿠키, 결제 기록<br/>
                      - 선택항목: 상담 시 제공하는 연락처
                   </p>
                </div>
                <div className="bg-[#010A13]/50 p-6 rounded border border-[#1E2328] hover:border-lol-blue/30 transition-colors">
                   <Eye className="w-8 h-8 text-lol-blue mb-4" />
                   <h3 className="text-white font-bold mb-2">개인정보의 처리 목적</h3>
                   <p className="text-sm text-gray-400 leading-relaxed">
                      수집된 개인정보는 다음의 목적을 위해서만 이용됩니다.<br/>
                      - 서비스 제공 및 결제 정산<br/>
                      - 민원 처리 및 분쟁 조정을 위한 기록 보존
                   </p>
                </div>
             </div>

             <div className="space-y-6 text-gray-300 font-light text-sm leading-relaxed border-t border-[#1E2328] pt-8">
                <div>
                   <h4 className="text-white font-bold mb-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 개인정보의 파기</h4>
                   <p>원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령에 따라 보존할 필요가 있는 경우 일정 기간 동안 보관합니다.</p>
                </div>
                <div>
                   <h4 className="text-white font-bold mb-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 개인정보의 안전성 확보 조치</h4>
                   <p>회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다. (해킹 등에 대비한 기술적 대책, 개인정보 취급 직원의 최소화 및 교육)</p>
                </div>
             </div>
          </div>

          <div className="mt-12 text-center">
             <Button onClick={() => navigateTo('home')} variant="outline">
               홈으로 돌아가기
             </Button>
          </div>
       </div>
    </div>
  );
};

export default PrivacyPage;