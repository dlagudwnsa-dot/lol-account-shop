import React, { useState } from 'react';
import { Shield, Lock, FileCheck, Info, ChevronDown, Check, XCircle } from 'lucide-react';

const SafetyPolicy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const policies = [
    {
      icon: Lock,
      title: "엄격한 3단계 검증 (Verification)",
      content: (
        <>
          LoL Account Shop은 내부 검수팀의 독자적인 3단계 검증 프로세스를 통과한 계정만 매입합니다.
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
            <li>본인 인증 해제 여부 확인</li>
            <li>가입 초기 이메일 상태 점검</li>
            <li>과거 이용 내역 및 변경 이력 정밀 검토</li>
          </ul>
          <p className="mt-2">위 항목을 모두 통과하여 1대주임이 명확히 입증된 계정만 선별합니다.</p>
        </>
      )
    },
    {
      icon: Shield,
      title: "운영 기간 보증 프로그램 (Operating Warranty)",
      content: (
        <>
          <p className="mb-2">서비스 운영 중 발생하는 문제에 대해 최대한 책임 있는 보증을 제공합니다.</p>
          <p>운영 종료 이후에도, 가능한 범위 내에서 합리적인 지원을 제공할 것을 약속드립니다. "운영 기간 내 동일한 보증 정책"이 유지됩니다.</p>
        </>
      )
    },
    {
      icon: FileCheck,
      title: "보증 계정이란? (Warranty Account)",
      content: "보증 계정은 관리자의 엄격한 검수를 통해 직접 매입·업로드된 상품으로, 서비스 운영 기간 동안 지속적인 보증이 제공되는 계정입니다. 안정성을 최우선으로 생각하는 고객님께 추천드립니다."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#050e18] relative overflow-hidden">
       {/* Background Image Layer */}
       <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center pointer-events-none opacity-50"
        style={{
          backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_39.jpg')`,
          filter: 'blur(4px) saturate(0.9) brightness(0.9) contrast(1.1)',
          transform: 'scale(1.1)',
        }}
      ></div>
      
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010A13] via-[#010A13]/70 to-[#010A13] z-0"></div>
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#010A13]/80 to-transparent z-0"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-start relative z-10">
        
        {/* Left: Title & Image - Sticky only on Desktop */}
        <div className="w-full lg:w-1/3 relative lg:sticky lg:top-24">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gold-gradient mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            SAFETY<br/>PROTOCOL
          </h2>
          <div className="h-1 w-20 bg-lol-blue mb-8 shadow-[0_0_10px_rgba(10,200,185,0.5)]"></div>
          <p className="text-gray-200 leading-relaxed mb-8 font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/20 p-2 rounded backdrop-blur-sm">
            LoL Account Shop은 계정 거래의<br/>
            불확실성을 제거했습니다.<br/>
            <strong className="text-white">검증된 안전함</strong>만을 경험하세요.
          </p>
          
          {/* Safety Tip Box */}
          <div className="p-5 border border-amber-500/30 bg-black/60 rounded flex gap-4 items-start backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] box-border">
            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <h4 className="text-amber-500 font-bold text-xs uppercase tracking-wider mb-1">Safety Tip</h4>
              <p className="text-xs text-amber-100/90 leading-relaxed break-keep">
                시중의 저가 '해킹/비활성 계정'은 구매 후 회수 위험이 높습니다. 
                정상적으로 관리된 1대주 계정인지 반드시 확인하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Accordion Policies & Comparison */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Accordion */}
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <div 
                key={index} 
                className={`border transition-all duration-300 backdrop-blur-xl ${activeTab === index ? 'bg-[#091428]/95 border-lol-gold shadow-[0_4px_20px_rgba(0,0,0,0.6)]' : 'bg-[#010A13]/80 border-[#1E2328] hover:border-[#3C3C41]'}`}
              >
                <button 
                  className="w-full p-4 md:p-6 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setActiveTab(activeTab === index ? null : index)}
                >
                  <div className="flex items-center gap-4 md:gap-5 flex-1 pr-2">
                    <div className={`p-2 rounded-lg transition-colors shrink-0 ${activeTab === index ? 'bg-lol-gold/10 text-lol-gold' : 'bg-[#1E2328]/50 text-gray-500'}`}>
                      <policy.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className={`text-sm md:text-xl font-bold tracking-tight leading-snug ${activeTab === index ? 'text-white' : 'text-gray-400'}`}>
                      {policy.title}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${activeTab === index ? 'rotate-180 text-lol-gold' : ''}`} />
                </button>
                
                {/* Increased max-height to 1000px for mobile safety */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeTab === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-4 md:p-6 pt-0 pl-[3.5rem] md:pl-[5.5rem] pr-4 md:pr-6">
                    <div className="text-sm md:text-base text-gray-300 font-light leading-7 border-l-2 border-lol-gold/30 pl-4 break-keep">
                      {policy.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Account Comparison Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Warranty Account Card */}
            <div className="relative bg-[#091428] border border-[#C8AA6E] p-6 clip-path-hextech shadow-[0_0_20px_rgba(200,170,110,0.2)]">
               <div className="absolute top-0 right-0 p-2">
                 <Shield className="w-6 h-6 text-lol-gold" />
               </div>
               <h3 className="text-lol-gold font-bold text-lg mb-2 uppercase tracking-wide">보증 계정</h3>
               <p className="text-xs text-gray-400 mb-4">(LoL Account Shop 직접 매입)</p>
               <p className="text-sm text-gray-200 leading-relaxed mb-4 break-keep">
                 운영자가 직접 매입하고 검증한 계정으로, 검증·보증·사후 대응이 모두 포함된 프리미엄 상품입니다.
               </p>
               <ul className="space-y-2 text-xs text-gray-300">
                 <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-400 shrink-0" /> 운영 기간 내 보증</li>
                 <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-400 shrink-0" /> 운영자 직접 대응</li>
                 <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-400 shrink-0" /> 1대주 검증 완료</li>
               </ul>
            </div>

            {/* Personal Trade Account Card */}
            <div className="relative bg-[#010A13] border border-[#3C3C41] p-6 clip-path-hextech grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all">
               <h3 className="text-gray-300 font-bold text-lg mb-2 uppercase tracking-wide">개인 거래 계정</h3>
               <p className="text-xs text-gray-500 mb-4">(판매자 ↔ 구매자 직접 거래)</p>
               <p className="text-sm text-gray-400 leading-relaxed mb-4 break-keep">
                 LoL Account Shop은 거래 공간만을 제공합니다. 저렴하지만 보증 범위가 제한적일 수 있습니다.
               </p>
               <ul className="space-y-2 text-xs text-gray-500">
                 <li className="flex items-center gap-2"><XCircle className="w-3 h-3 shrink-0" /> 보증 범위 제한적</li>
                 <li className="flex items-center gap-2"><XCircle className="w-3 h-3 shrink-0" /> 판매자와 직접 소통</li>
               </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SafetyPolicy;