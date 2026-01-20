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
const pageMeta: Record<Page, { title: string; description: string; path: string }> = {
  home: {
    title: 'LoL Account Shop | 1대주 롤 계정 전문 거래소',
    description: 'LoL Account Shop은 1대주 롤 계정만 취급하는 안전한 계정 거래 사이트입니다. 결제 즉시 아이디·비밀번호·이메일 확인 가능. 보증 계정 제공.',
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
    description: 'LoL Account Shop의 보증 계정은 운영자가 직접 매입하고 검증한 1대주 계정으로, 운영 기간 동안 안전한 이용을 보증합니다.',
    path: '/guarantee-account'
  },
  'private-trade': {
    title: '개인 거래 안내 | 판매자 직거래 시스템 - LoL Account Shop',
    description: '판매자와 구매자 간의 직접 거래 방식인 개인 거래 계정에 대한 안내입니다.',
    path: '/private-trade'
  }
};

export const getInitialPageFromUrl = (): Page => {
  const path = window.location.pathname;
  if (path === '/guide') return 'guide';
  if (path === '/support') return 'support';
  if (path === '/terms') return 'terms';
  if (path === '/privacy') return 'privacy';
  if (path === '/guarantee-account') return 'guarantee';
  if (path === '/private-trade') return 'private-trade';
  return 'home';
};

export const NavigationProvider: React.FC<{ children: React.ReactNode; currentPage: Page; setCurrentPage: (page: Page) => void }> = ({ children, currentPage, setCurrentPage }) => {
  
  const updateSEO = (page: Page) => {
    const meta = pageMeta[page];
    
    // Update Document Title
    document.title = meta.title;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', meta.description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = meta.description;
      document.head.appendChild(newMeta);
    }

    // Update URL (Push State)
    if (window.location.pathname !== meta.path) {
      window.history.pushState({ page }, '', meta.path);
    }
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    updateSEO(page);
  };

  useEffect(() => {
    // Handle Browser Back/Forward Buttons
    const handlePopState = (event: PopStateEvent) => {
      // Determine page from state or URL
      let page: Page = 'home';
      
      if (event.state && event.state.page) {
         page = event.state.page;
      } else {
         page = getInitialPageFromUrl();
      }

      setCurrentPage(page);
      
      // Update Title/Meta without pushing state
      const meta = pageMeta[page];
      document.title = meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', meta.description);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [setCurrentPage]);

  // Initial SEO Setup
  useEffect(() => {
    // Only push state if URL doesn't match current page (fix for initial load)
    const meta = pageMeta[currentPage];
    document.title = meta.title;
    if (window.location.pathname !== meta.path) {
       // Only push if we are correcting a path mismatch, though usually App.tsx init handles this.
       // This block handles SEO title update on mount.
    }
  }, [currentPage]);

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};