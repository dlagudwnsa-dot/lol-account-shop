import React, { useEffect, useState } from 'react';

const CountUp: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
};

const Stats: React.FC = () => {
  return (
    <section className="bg-[#050e18] border-b border-[#1E2328] py-10 relative overflow-hidden">
        {/* Subtle moving light effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lol-gold/50 to-transparent animate-shimmer"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center border-r border-[#1E2328] last:border-0 group relative">
              <p className="text-lol-gold/60 text-[10px] md:text-xs font-serif tracking-[0.2em] uppercase mb-2">Total Trades</p>
              <div className="text-3xl md:text-4xl font-black text-white group-hover:text-lol-gold transition-colors font-serif tracking-tight">
                <CountUp end={12500} suffix="+" />
              </div>
              <p className="text-gray-500 text-xs mt-2 font-medium">누적 거래 완료</p>
              <p className="text-[#3C3C41] text-[10px] mt-1">실시간 집계 기준</p>
            </div>
            
            <div className="text-center border-r border-[#1E2328] last:border-0 group relative">
              <p className="text-lol-blue/60 text-[10px] md:text-xs font-serif tracking-[0.2em] uppercase mb-2">Delivery Time</p>
              <div className="text-3xl md:text-4xl font-black text-white group-hover:text-lol-blue transition-colors font-serif tracking-tight">
                <CountUp end={30} suffix="초" />
              </div>
              <p className="text-gray-500 text-xs mt-2 font-medium">평균 인도 시간</p>
              <p className="text-[#3C3C41] text-[10px] mt-1">자동 발송 시스템</p>
            </div>

            <div className="text-center border-r border-[#1E2328] last:border-0 group relative">
              <p className="text-emerald-500/60 text-[10px] md:text-xs font-serif tracking-[0.2em] uppercase mb-2">Satisfaction</p>
              <div className="text-3xl md:text-4xl font-black text-white group-hover:text-emerald-400 transition-colors font-serif tracking-tight">
                99.8<span className="text-xl">%</span>
              </div>
              <p className="text-gray-500 text-xs mt-2 font-medium">고객 만족도</p>
              <p className="text-[#3C3C41] text-[10px] mt-1">최근 6개월 기준</p>
            </div>

            <div className="text-center group relative">
              <p className="text-purple-400/60 text-[10px] md:text-xs font-serif tracking-[0.2em] uppercase mb-2">System Policy</p>
              <div className="text-3xl md:text-4xl font-black text-white group-hover:text-purple-400 transition-colors font-serif tracking-tight">
                Active
              </div>
              <p className="text-gray-500 text-xs mt-2 font-medium">사고 예방 정책</p>
              <p className="text-[#3C3C41] text-[10px] mt-1">검증된 시스템</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Stats;