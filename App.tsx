import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './components/Home';
import GuidePage from './components/GuidePage';
import SupportPage from './components/SupportPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import GuaranteePage from './components/GuaranteePage';
import PrivateTradePage from './components/PrivateTradePage';
import { NavigationProvider, Page, getInitialPageFromUrl } from './NavigationContext';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getInitialPageFromUrl());

  return (
    <NavigationProvider currentPage={currentPage} setCurrentPage={setCurrentPage}>
      <div className="min-h-screen bg-[#010A13] text-white selection:bg-lol-gold selection:text-black font-sans flex flex-col">
        
        {/* Top Ticker - Persistent */}
        <div className="bg-[#091428] border-b border-[#1E2328] h-10 overflow-hidden flex items-center relative z-50 flex-shrink-0">
          <div className="bg-lol-gold/10 px-4 h-full flex items-center border-r border-[#1E2328] z-10">
            <Bell className="w-4 h-4 text-lol-gold mr-2 animate-bounce" />
            <span className="text-xs font-bold text-lol-gold uppercase tracking-wider whitespace-nowrap">Live Updates</span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-scroll whitespace-nowrap absolute top-1/2 -translate-y-1/2 left-0 flex gap-12 text-xs text-gray-400">
              <span>[판매완료] <span className="text-lol-blue">Diamond 2</span> - KDA 올스킨 보유 계정 (방금 전)</span>
              <span>[신규등록] <span className="text-lol-gold">Master</span> - 승률 70% 정글러 계정 등록됨</span>
              <span>[공지사항] 2024년 5월 보안 업데이트 완료 - 안전 거래 시스템 강화</span>
              <span>[판매완료] <span className="text-gray-300">Unranked</span> - 30레벨, 5만 BE 보유 계정 (1분 전)</span>
              <span>[리뷰] "진짜 결제하자마자 바로 나오네요 대박" - park***님 (5.0점)</span>
               <span>[판매완료] <span className="text-emerald-400">Emerald 1</span> - 미드 챔피언 올보유 (3분 전)</span>
            </div>
          </div>
        </div>

        {/* Header - Persistent */}
        <Header />

        <main className="flex-grow">
          {currentPage === 'home' && <Home />}
          {currentPage === 'guide' && <GuidePage />}
          {currentPage === 'support' && <SupportPage />}
          {currentPage === 'terms' && <TermsPage />}
          {currentPage === 'privacy' && <PrivacyPage />}
          {currentPage === 'guarantee' && <GuaranteePage />}
          {currentPage === 'private-trade' && <PrivateTradePage />}
        </main>
        
        {/* Footer - Persistent */}
        <Footer />
        <FloatingCTA />
      </div>
    </NavigationProvider>
  );
}

export default App;