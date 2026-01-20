import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';

const TrustSection: React.FC = () => {
  const trustPoints = [
    "1대주 계정만 취급",
    "즉시 아이디 / 비밀번호 지급",
    "장기 운영 사이트",
    "운영자 직접 관리",
    "롤 전문 계정샵"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#010A13] to-[#091428] border-t border-lol-gold/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-[#F0E6D2] mb-12">
          안전한 거래, <span className="text-lol-gold">LoL Account Shop</span>이 약속합니다
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 group">
              <CheckCircle2 className="w-6 h-6 text-lol-blue group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{point}</span>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto p-1 rounded-lg bg-gradient-to-r from-transparent via-lol-gold/40 to-transparent">
          <div className="bg-[#010A13] p-8 rounded-lg">
            <h3 className="text-xl text-white mb-6">지금 바로 원하는 티어의 계정을 확인하세요</h3>
            <Button variant="primary" fullWidth className="text-lg py-4">
              LoL Account Shop 바로가기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;