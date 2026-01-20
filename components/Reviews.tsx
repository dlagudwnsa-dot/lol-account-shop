import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { ReviewProps } from '../types';

const reviews: ReviewProps[] = [
  { author: "MinSu**", rating: 5, content: "새벽에 샀는데 바로 계정 정보 와서 놀랐어요. 로그인도 바로 됐고 상태 깔끔함.", tier: "Diamond", date: "방금 전" },
  { author: "TopGosu", rating: 5, content: "1대주라길래 반신반의했는데 지금까지 문제 전혀 없음. 안심하고 쓰는 중.", tier: "Platinum", date: "10분 전" },
  { author: "User12**", rating: 4, content: "처음에 비번이 안 맞아서 당황했는데 문의하니까 1분 만에 해결해주심. 대처가 빠르네요.", tier: "Gold", date: "30분 전" },
  { author: "JG***", rating: 5, content: "다른 데서 한번 데인 적 있어서 걱정했는데 여긴 괜히 유명한 게 아닌 듯.", tier: "Master", date: "1시간 전" },
  { author: "Hyeon**", rating: 5, content: "상담 답장 진짜 빠름… 이게 제일 좋았음.", tier: "Gold", date: "2시간 전" },
  { author: "SoloQer", rating: 5, content: "추천받고 왔는데 바로 이해됨. 계정 상태가 진짜 깨끗함.", tier: "Diamond", date: "3시간 전" },
  { author: "Lee**", rating: 5, content: "결제하고 1분도 안 돼서 정보 받음. 바로 랭 돌렸어요.", tier: "Platinum", date: "3시간 전" },
  { author: "Newbie*", rating: 4, content: "이메일 변경하는 법을 몰라서 헤맸는데 가이드 보고 바로 함. 정보는 확실하네요.", tier: "Silver", date: "5시간 전" },
  { author: "NightADC", rating: 5, content: "밤에 샀는데도 처리해줘서 좋았음. 새벽 구매도 문제없네요.", tier: "Silver", date: "6시간 전" },
  { author: "MidOne*", rating: 5, content: "쓸데없는 말 없고 딱 필요한 것만 줘서 오히려 신뢰감 있음.", tier: "Gold", date: "9시간 전" },
  { author: "Cho**", rating: 5, content: "계정 회수 걱정돼서 여기저기 알아보다가 여기로 옴. 만족합니다.", tier: "Diamond", date: "12시간 전" },
  { author: "ParkJG", rating: 5, content: "UI도 깔끔하고 구매 과정이 단순해서 좋았어요.", tier: "Platinum", date: "1일 전" },
  { author: "SafeUser", rating: 5, content: "계정 정보 받고 바로 비번 변경, 이메일 변경 다 됐습니다.", tier: "Master", date: "1일 전" },
  { author: "TopLane**", rating: 5, content: "말 많은 사이트 싫어하는데 여긴 조용히 잘 처리해줘서 좋음.", tier: "Gold", date: "1일 전" },
  { author: "RealDeal", rating: 5, content: "가격이 싸진 않은데 그만큼 이유가 있음.", tier: "Diamond", date: "2일 전" },
  { author: "Noob**", rating: 5, content: "처음이라 질문 좀 했는데 하나하나 답 잘 해주셨어요.", tier: "Silver", date: "2일 전" },
  { author: "CleanAcc", rating: 5, content: "계정 상태 보고 바로 신뢰됨. 전적도 이상 없음.", tier: "Platinum", date: "3일 전" },
  { author: "FakerFan**", rating: 5, content: "괜히 유명한 데가 아니구나 싶었음.", tier: "Master", date: "3일 전" },
  { author: "RushJG", rating: 5, content: "받자마자 랭크 돌렸는데 문제 전혀 없음.", tier: "Gold", date: "4일 전" },
  { author: "TrustMe", rating: 5, content: "구매 과정이 너무 단순해서 오히려 불안했는데 괜한 걱정이었음.", tier: "Diamond", date: "4일 전" },
  { author: "OldUser", rating: 5, content: "이런 건 결국 신뢰인데, 여긴 신뢰 쌓아온 느낌.", tier: "Platinum", date: "5일 전" },
  { author: "MultiQ", rating: 5, content: "계정 여러 개 써봤는데 여기가 제일 깔끔함.", tier: "Master", date: "5일 전" },
  { author: "Honest**", rating: 5, content: "설명 그대로라서 좋았어요. 과장 없음.", tier: "Gold", date: "6일 전" },
  { author: "FastBuy", rating: 5, content: "바로 받고 바로 쓸 수 있어서 시간 아꼈음.", tier: "Silver", date: "1주 전" },
  { author: "KindCS", rating: 5, content: "응대 태도가 좋아서 기분 좋게 구매했네요.", tier: "Platinum", date: "1주 전" },
  { author: "TryOnce", rating: 5, content: "처음엔 긴가민가했는데 지금은 만족 중.", tier: "Diamond", date: "2주 전" },
  { author: "ReBuy**", rating: 5, content: "다음에도 여기서 살 듯합니다.", tier: "Master", date: "2주 전" },
  { author: "CleanTop", rating: 5, content: "계정 상태 하나로 설명 끝.", tier: "Gold", date: "3주 전" },
  { author: "Minimal**", rating: 5, content: "딱 필요한 것만 제공해줘서 좋음.", tier: "Platinum", date: "3주 전" },
  { author: "NoStress", rating: 5, content: "회수 걱정 안 하고 쓰는 게 제일 큼.", tier: "Diamond", date: "1달 전" },
  { author: "FriendPick", rating: 5, content: "주변에도 추천해줄 만함.", tier: "Gold", date: "1달 전" },
  { author: "FirstBuy", rating: 5, content: "이런 쪽 처음인데 생각보다 괜찮아서 놀람.", tier: "Silver", date: "1달 전" }
];

const ReviewCard: React.FC<{ review: ReviewProps }> = ({ review }) => (
  <div className="w-[300px] md:w-[360px] flex-shrink-0 bg-[#091428] border border-[#1E2328] p-6 mx-3 relative group hover:border-lol-gold/50 transition-colors clip-path-hextech">
    <div className="absolute top-4 right-4 text-[#1E2328] group-hover:text-lol-gold/10 transition-colors">
       <MessageSquareQuote className="w-8 h-8" />
    </div>
    <div className="flex justify-between items-start mb-3">
        <div className="flex gap-1">
        {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-lol-gold fill-lol-gold" />
        ))}
        </div>
        <span className="text-[10px] text-gray-600 font-mono">{review.date}</span>
    </div>
    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 h-14">
      "{review.content}"
    </p>
    <div className="flex items-center gap-3 border-t border-[#1E2328] pt-3 mt-auto">
       <div className={`w-2 h-2 rounded-full ${review.tier === 'Master' ? 'bg-purple-500' : review.tier === 'Diamond' ? 'bg-blue-400' : review.tier === 'Platinum' ? 'bg-emerald-400' : 'bg-lol-gold'}`}></div>
       <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-[#F0E6D2]">{review.author}</p>
            <CheckCircle2 className="w-3 h-3 text-lol-blue" />
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider">{review.tier} Tier Purchase</p>
       </div>
    </div>
  </div>
);

const Reviews: React.FC = () => {
  return (
    <section id="reviews-section" className="py-24 bg-[#010A13] border-t border-[#1E2328] overflow-hidden">
      <div className="container mx-auto px-4 mb-12 flex flex-col md:flex-row items-center justify-between">
        <div>
           <span className="text-lol-blue font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Real-time Feedback</span>
           <h2 className="text-3xl font-serif font-bold text-[#F0E6D2]">
             CHAMPION REVIEWS
           </h2>
        </div>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
           <div className="text-right">
              <p className="text-2xl font-bold text-white font-serif">4.9<span className="text-sm text-gray-500"> / 5.0</span></p>
              <p className="text-xs text-lol-gold uppercase tracking-wider">Verified Purchase</p>
           </div>
        </div>
      </div>

      {/* Row 1: Forward Scroll */}
      <div className="relative w-full mb-8">
         {/* Fade Gradients */}
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#010A13] to-transparent z-10 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#010A13] to-transparent z-10 pointer-events-none"></div>

         <div className="flex w-max animate-scroll hover:[animation-play-state:paused]" style={{ animationDuration: '100s' }}>
            {reviews.map((review, idx) => <ReviewCard key={`o-${idx}`} review={review} />)}
            {reviews.map((review, idx) => <ReviewCard key={`d-${idx}`} review={review} />)}
         </div>
      </div>

      {/* Row 2: Reverse Scroll (Slightly Transparent) */}
      <div className="relative w-full opacity-60 hover:opacity-100 transition-opacity duration-500">
         {/* Fade Gradients */}
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#010A13] to-transparent z-10 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#010A13] to-transparent z-10 pointer-events-none"></div>

         <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused]" style={{ animationDuration: '120s' }}>
            {[...reviews].reverse().map((review, idx) => <ReviewCard key={`r-o-${idx}`} review={review} />)}
            {[...reviews].reverse().map((review, idx) => <ReviewCard key={`r-d-${idx}`} review={review} />)}
         </div>
      </div>
    </section>
  );
};

export default Reviews;