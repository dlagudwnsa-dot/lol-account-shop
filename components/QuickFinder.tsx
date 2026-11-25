import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { CatalogLink } from './CatalogLink';

const tiers = [
  ['아이언', 'Iron'], ['브론즈', 'Bronze'], ['실버', 'Silver'], ['골드', 'Gold'],
  ['플래티넘', 'Platinum'], ['에메랄드', 'Emerald'], ['다이아몬드', 'Diamond'],
  ['마스터', 'Master'], ['그랜드마스터', 'Grandmaster'], ['챌린저', 'Challenger'],
];

const storageKey = 'lol-shop-tier-draft';

export default function QuickFinder() {
  const [tier, setTier] = useState('');
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      const match = tiers.find(([label, value]) => saved === value || saved === label + ' (' + value + ')');
      if (match) setTier(match[1]);
    } catch { /* The picker also works when storage is disabled. */ }
  }, []);

  function changeTier(value: string) {
    setTier(value);
    try { localStorage.setItem(storageKey, value); } catch { /* Keep the current selection in memory. */ }
  }

  return (
    <section aria-labelledby="catalog-finder" className="relative z-30 mt-0 md:-mt-24 container mx-auto px-4 mb-16 md:mb-24">
      <div className="bg-[#091428] border border-[#C8AA6E]/40 p-6 md:p-8">
        <h2 id="catalog-finder" className="text-2xl text-lol-gold font-bold mb-4">티어별 롤 계정 찾기</h2>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
          <label className="flex flex-col gap-1 text-sm text-gray-300">현재 티어
            <select value={tier} onChange={event => changeTier(event.target.value)} className="bg-[#1E2328] border border-gray-500 rounded px-4 py-3 text-white">
              <option value="">전체 티어</option>
              {tiers.map(([label, value]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          <CatalogLink placement="tier_picker" tier={tier} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C8AA6E] text-[#010A13] font-bold">
            <Search size={18} /> {tiers.find(([, value]) => value === tier)?.[0] || '전체'} 롤 계정 보기
          </CatalogLink>
        </div>
      </div>
    </section>
  );
}
