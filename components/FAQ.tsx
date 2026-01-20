import React, { useState } from 'react';
import { Plus, Minus, Headphones } from 'lucide-react';
import { useNavigation } from '../NavigationContext';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border border-[#1E2328] bg-[#091428]/50 mb-3 hover:border-lol-gold/30 transition-colors">
      <button 
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-base md:text-lg font-medium transition-colors pr-4 ${isOpen ? 'text-lol-gold' : 'text-gray-300 group-hover:text-white'}`}>
          <span className="text-lol-blue mr-3 font-serif italic">Q.</span>{question}
        </h3>
        <div className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="w-5 h-5 text-lol-gold" /> : <Plus className="w-5 h-5 text-gray-500" />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-0">
           <div className="border-t border-[#1E2328] pt-4">
            <p className="text-gray-400 leading-7 text-sm md:text-base font-light whitespace-pre-line">
               {answer}
            </p>
           </div>
        </div>
      </div>
    </article>
  );
};

const FAQ: React.FC = () => {
  const { navigateTo } = useNavigation();

  const faqs = [
    {
      question: "구매한 계정은 정말 1대주 계정인가요?",
      answer: "네. LoL Account Shop은 1대주 계정만 취급합니다.\n특히 보증 계정 구매 시, 더욱 엄격한 검수를 거친 계정이 제공되어 보다 안전한 이용이 가능합니다."
    },
    {
      question: "결제 후 언제 계정을 받을 수 있나요?",
      answer: "결제 즉시 지급됩니다.\n구매 완료 후 내 정보 → 구매 내역에서 아이디, 비밀번호, 이메일 정보를 바로 확인하실 수 있습니다."
    },
    {
      question: "보증 계정 구매 후 회수가 발생하면 어떻게 되나요?",
      answer: "보증 계정에 한해, 회수 발생 시 카카오톡 고객센터로 문의 주시면 구매 금액 100% 포인트 환급 또는 동일 조건 교환을 지원합니다."
    },
    {
      question: "이메일 변경이 가능한가요?",
      answer: "계정에는 개인용 일회성 이메일이 함께 제공됩니다.\n가급적 이메일 변경 없이 사용해 주시길 권장드리며, 이메일 변경 시 계정 잠김 또는 라이엇 통합 변경 이슈가 발생할 수 있으니 주의 바랍니다."
    },
    {
       question: "구매 후 환불이 가능한가요?",
       answer: "아이디 및 비밀번호가 즉시 노출되는 상품 특성상 단순 변심에 의한 환불은 불가능합니다.\n\n단, 상품 설명과 실제 계정 상태가 명백히 다른 경우 100% 환불이 가능합니다."
    }
  ];

  return (
    <section id="faq-section" className="py-24 bg-[#010A13] relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#F0E6D2] tracking-widest mb-3">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-gray-500">LoL Account Shop 이용 관련 궁금증을 해결해 드립니다.</p>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <button onClick={() => navigateTo('support')} className="group inline-flex items-center gap-2 text-gray-400 hover:text-lol-gold transition-colors px-6 py-3 border border-[#1E2328] hover:border-lol-gold rounded bg-[#091428]">
              <Headphones className="w-4 h-4" />
              <span className="text-sm font-medium">고객센터 전체 보기</span>
           </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;