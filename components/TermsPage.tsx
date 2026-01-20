import React from 'react';
import { ShieldAlert, FileText, ArrowLeft } from 'lucide-react';
import Button from './Button';
import { useNavigation } from '../NavigationContext';

const TermsPage: React.FC = () => {
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
            <span className="text-lol-gold">Terms of Service</span>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gold-gradient mb-4">
              이용 약관
            </h1>
            <p className="text-gray-400">LoL Account Shop 서비스 이용 약관입니다.</p>
          </div>

          <div className="bg-[#091428]/80 backdrop-blur-md border border-[#1E2328] p-8 md:p-12 text-gray-300 leading-relaxed font-light space-y-8 clip-path-hextech shadow-lg">
             <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-lol-gold flex-shrink-0 mt-1" />
                <div>
                   <h3 className="text-white font-bold text-lg mb-2">제 1조 (목적)</h3>
                   <p className="text-sm text-gray-400">본 약관은 LoL Account Shop(이하 "회사")이 제공하는 게임 계정 거래 및 관련 제반 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                </div>
             </div>

             <div className="flex items-start gap-4">
                <ShieldAlert className="w-6 h-6 text-lol-blue flex-shrink-0 mt-1" />
                <div>
                   <h3 className="text-white font-bold text-lg mb-2">제 2조 (서비스의 제공)</h3>
                   <p className="text-sm text-gray-400">회사는 회원에게 다음과 같은 서비스를 제공합니다.<br/>1. 게임 계정 매매 중개 서비스<br/>2. 안전 거래 보장 서비스 (회수 시 보상 등)<br/>3. 기타 회사가 정하는 업무</p>
                </div>
             </div>

             <div className="border-t border-[#1E2328] pt-8">
                <h3 className="text-white font-bold text-lg mb-4">제 3조 (환불 및 취소)</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-400 ml-2">
                   <li>구매 후 계정 정보(아이디/비밀번호)를 열람하기 전에는 100% 환불이 가능합니다.</li>
                   <li>정보 열람 후에는 디지털 콘텐츠의 특성상 단순 변심에 의한 환불이 불가능합니다.</li>
                   <li>단, 판매자의 귀책 사유(계정 정지, 정보 불일치, 회수 등)가 입증될 경우 전액 환불 및 보상이 진행됩니다.</li>
                </ul>
             </div>
             
             <div className="bg-black/40 p-4 rounded border border-white/5">
                <p className="text-xs text-gray-500 text-center">본 약관은 2024년 5월 1일부터 시행됩니다.</p>
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

export default TermsPage;