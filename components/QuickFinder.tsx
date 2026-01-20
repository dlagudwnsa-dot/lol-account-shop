import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Search, ChevronDown, Filter, Check } from 'lucide-react';

const tiers = [
  "아이언 (Iron)",
  "브론즈 (Bronze)",
  "실버 (Silver)",
  "골드 (Gold)",
  "플래티넘 (Platinum)",
  "에메랄드 (Emerald)",
  "다이아몬드 (Diamond)",
  "마스터 (Master)",
  "그랜드마스터 (Grandmaster)",
  "챌린저 (Challenger)"
];

const QuickFinder: React.FC = () => {
  const [isTierOpen, setIsTierOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    window.open('https://xn--bp2bs0ne3dj3ao4xing.com/buy/all', '_blank');
  };

  const toggleTierDropdown = () => {
    if (!isTierOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        // Since the portal wrapper is 'fixed', we use viewport coordinates directly (no scrollY)
        top: rect.bottom, 
        left: rect.left,
        width: rect.width
      });
    }
    setIsTierOpen(!isTierOpen);
  };
  
  const selectTier = (tier: string) => {
    setSelectedTier(tier);
    setIsTierOpen(false);
  };

  useEffect(() => {
    if (!isTierOpen) return;
    const closeDropdown = () => setIsTierOpen(false);
    window.addEventListener('resize', closeDropdown);
    window.addEventListener('scroll', closeDropdown);
    return () => {
      window.removeEventListener('resize', closeDropdown);
      window.removeEventListener('scroll', closeDropdown);
    };
  }, [isTierOpen]);

  return (
    // Mobile: mt-0 (No overlap, clean stacking). Desktop: -mt-24 (Bridge effect)
    <div className="relative z-30 mt-0 md:-mt-24 container mx-auto px-4 mb-16 md:mb-24">
      {/* Container: Added padding override for mobile to prevent clip-path cutting off content */}
      <div className="bg-[#091428]/95 backdrop-blur-xl border border-[#C8AA6E]/30 p-1 clip-path-hextech shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <div className="bg-[#010A13] p-5 md:p-8 clip-path-hextech relative overflow-visible">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-lol-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

          <div className="flex items-center gap-3 mb-6 border-b border-[#1E2328] pb-4 relative z-10">
            <Filter className="w-5 h-5 text-lol-gold" />
            <h3 className="text-lg font-serif font-bold text-[#F0E6D2] tracking-widest uppercase">
              Quick Account Finder
            </h3>
            <span className="text-xs text-gray-500 ml-auto hidden md:block flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              실시간 매물 연동 중
            </span>
          </div>

          {/* Grid Layout: Strictly 1 column on mobile, 4 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            {/* Tier Select */}
            <div className="relative group w-full">
              <label className="block text-[10px] text-gray-400 mb-1.5 font-bold uppercase tracking-wider">Rank Tier</label>
              <div 
                ref={triggerRef}
                className={`flex items-center justify-between w-full bg-[#1E2328] border px-4 h-[50px] transition-colors cursor-pointer ${isTierOpen ? 'border-lol-gold text-white' : 'border-[#3C3C41] text-gray-300 hover:border-lol-gold/50'}`}
                onClick={toggleTierDropdown}
              >
                <span className={`font-serif text-sm md:text-base ${selectedTier ? 'text-lol-gold font-bold' : ''}`}>
                  {selectedTier || "선택: 티어 (Tier)"}
                </span>
                <ChevronDown className={`w-4 h-4 text-lol-gold transition-transform duration-300 ${isTierOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Fixed Options - Full Width on Mobile */}
            <div className="relative opacity-50 pointer-events-none select-none grayscale w-full">
              <label className="block text-[10px] text-gray-600 mb-1.5 font-bold uppercase tracking-wider">Server Region</label>
              <div className="flex items-center justify-between w-full bg-[#151A20] border border-[#2A2E35] px-4 h-[50px] text-gray-500">
                <span className="font-serif text-sm md:text-base">한국 (KR)</span>
                <ChevronDown className="w-4 h-4 text-gray-700" />
              </div>
            </div>

            <div className="relative opacity-50 pointer-events-none select-none grayscale w-full">
              <label className="block text-[10px] text-gray-600 mb-1.5 font-bold uppercase tracking-wider">Price Range</label>
              <div className="flex items-center justify-between w-full bg-[#151A20] border border-[#2A2E35] px-4 h-[50px] text-gray-500">
                <span className="font-serif text-sm md:text-base">모든 가격대</span>
                <ChevronDown className="w-4 h-4 text-gray-700" />
              </div>
            </div>

            {/* Action Button - Stacked last on mobile, aligned on desktop */}
            <div className="flex items-end mt-2 md:mt-0 w-full">
              <button 
                onClick={handleSearch}
                className={`w-full h-[50px] bg-gradient-to-r from-[#785A28] to-[#C8AA6E] text-[#010A13] font-black font-sans text-lg tracking-wide hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 clip-path-slant ${selectedTier ? 'shadow-[0_0_20px_rgba(200,170,110,0.4)] brightness-110' : 'grayscale-[0.3]'}`}
              >
                <Search className="w-5 h-5 stroke-[3]" />
                계정 찾기
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-5 text-xs border-t border-[#1E2328] pt-4">
            <span className="text-gray-500 font-serif tracking-wider mr-1">TRENDING:</span>
            {['#1대주_보장', '#Unranked', '#Diamond', '#All_Skins', '#즉시지급'].map((tag, i) => (
              <button 
                key={i} 
                onClick={handleSearch}
                className="text-lol-blue/80 hover:text-white px-2 py-0.5 transition-colors hover:underline underline-offset-4 whitespace-nowrap"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isTierOpen && createPortal(
        <div className="fixed inset-0 z-[9999]">
           <div className="absolute inset-0" onClick={() => setIsTierOpen(false)}></div>
           <div 
             className="absolute bg-[#091428] border border-lol-gold max-h-80 overflow-y-auto shadow-[0_10px_50px_rgba(0,0,0,0.9)] custom-scrollbar animate-in fade-in zoom-in-95 duration-100 ring-1 ring-black"
             style={{
               top: `${dropdownPos.top + 5}px`,
               left: `${dropdownPos.left}px`,
               width: `${dropdownPos.width}px`,
             }}
           >
             {tiers.map((tier) => (
               <div 
                 key={tier}
                 className="px-4 py-3 hover:bg-[#1E2328] text-gray-300 hover:text-lol-gold cursor-pointer border-b border-[#1E2328] last:border-0 flex items-center justify-between group transition-colors"
                 onClick={() => selectTier(tier)}
               >
                 <span className="font-serif text-sm group-hover:translate-x-1 transition-transform">{tier}</span>
                 {selectedTier === tier && <Check className="w-3 h-3 text-lol-gold" />}
               </div>
             ))}
           </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default QuickFinder;