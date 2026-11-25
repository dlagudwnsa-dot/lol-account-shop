import React, { createContext, useContext, useEffect } from 'react';

export type Page = 
  | 'home' 
  | 'guide' 
  | 'support' 
  | 'terms' 
  | 'privacy' 
  | 'guarantee' 
  | 'private-trade';

interface NavigationContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  currentPage: 'home',
  navigateTo: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

// SEO Configuration Map
export const siteOrigin = 'https://xn--bp2bs0ne3dj3ao4xing.shop';
export const pageMeta: Record<Page, { title: string; description: string; path: string }> = {
  home: {
    title: '롤어카운트샵 | 1대주 롤 계정 전문 거래소 | LoL Account Shop',
    description: '롤 계정의 서버와 현재 티어, 1대주 표시, 쇼핑몰 보증 여부를 비교하고 본점의 판매 중인 롤 계정 목록을 확인하세요.',
    path: '/'
  },
  guide: {
    title: '이용 가이드 | 롤 계정 구매 및 이용 방법 - LoL Account Shop',
    description: '회원가입부터 포인트 충전, 계정 선택, 구매, 정보 확인까지 5단계로 완료되는 쉽고 빠른 롤 계정 구매 방법을 안내합니다.',
    path: '/guide'
  },
  support: {
    title: '고객센터 | 24시간 상담 및 문의 - LoL Account Shop',
    description: '롤 계정 거래 관련 문의, 회수 신고, 환불 요청 등 24시간 카카오톡 상담 센터를 운영합니다.',
    path: '/support'
  },
  terms: {
    title: '이용약관 - LoL Account Shop',
    description: 'LoL Account Shop 서비스 이용 약관입니다.',
    path: '/terms'
  },
  privacy: {
    title: '개인정보처리방침 - LoL Account Shop',
    description: 'LoL Account Shop의 개인정보 수집 및 처리 방침을 안내합니다.',
    path: '/privacy'
  },
  guarantee: {
    title: '보증 계정 안내 | 1대주 검증 및 운영 보증 - LoL Account Shop',
    description: '쇼핑몰 보증 대상으로 표시된 롤 계정을 살펴보고 구매 전 상품 상세와 본점 환불 안내에서 보증 기간과 적용 조건을 확인하세요.',
    path: '/guarantee-account'
  },
  'private-trade': {
    title: '개인 거래 안내 | 판매자 직거래 시스템 - LoL Account Shop',
    description: '판매자와 구매자 간의 직접 거래 방식인 개인 거래 계정에 대한 안내입니다.',
    path: '/private-trade'
  }
};

export const getInitialPageFromUrl = (): Page => {
  const path = window.location.pathname.replace(/\/+$/, '').replace(/\.html$/, '') || '/';
  return (Object.keys(pageMeta) as Page[]).find(page => pageMeta[page].path === path) ?? 'home';
};

export const NavigationProvider: React.FC<{ children: React.ReactNode; currentPage: Page; setCurrentPage: (page: Page) => void }> = ({ children, currentPage, setCurrentPage }) => {
  const navigateTo = (page: Page) => {
    if (getInitialPageFromUrl() !== page) {
      window.history.pushState({ page }, '', pageMeta[page].path);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getInitialPageFromUrl());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [setCurrentPage]);

  useEffect(() => {
    const { title, description, path } = pageMeta[currentPage];
    const url = new URL(path, siteOrigin).href;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }, [currentPage]);

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};
