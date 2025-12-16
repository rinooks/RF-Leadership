
import React from 'react';
import { ArrowRight, BookOpen, Target, Settings, Users, Star, Layers, Calendar, ChevronRight, BrainCircuit, Bot, TrendingUp, Sparkles, Building2, BarChart3, CheckCircle, MessageSquare } from 'lucide-react';
import { MAIN_STATS, MAIN_STRATEGIES } from '../constants';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const CLIENTS_ROW_1 = [
  "Samsung Electronics", "Hyundai Motor", "SK hynix", "LG Chem", "POSCO", 
  "Lotte Chemical", "Hanwha Solutions"
];

const CLIENTS_ROW_2 = [
  "GS Caltex", "HD Hyundai", "Shinsegae", "CJ ENM", "KT", 
  "Kakao", "NAVER"
];

const CLIENTS_ROW_3 = [
  "Doosan Enerbility", "LS Electric", "DL E&C", "Korean Air", 
  "Amorepacific", "Woowa Bros"
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white">
      {/* Inline Styles for Animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-medium {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-fast {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Main Hero Section */}
      <div className="relative h-[720px] flex items-center bg-[#1a1f2e] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-[#1a1f2e] to-[#1a1f2e] opacity-95"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940" 
            alt="Corporate Leadership" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay grayscale"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 h-full flex items-center">
          
          {/* Left Content (Text) */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-white/10 rounded-full text-xs font-bold text-primary-200 uppercase tracking-widest bg-white/5 backdrop-blur-md w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              2026 REFERENCE HRD
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 leading-[1.15] text-white">
              팀장 리더십<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-100 to-white">
                역량향상 솔루션
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-light">
              온보딩부터 실전 성과관리, 심화 역량 강화까지.<br />
              조직의 성과를 이끄는 <strong className="text-white font-bold">Learning Journey</strong> 기반의<br/>
              체계적인 리더십 솔루션을 제안합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('overview')}
                className="px-10 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-900/50 transform hover:-translate-y-1"
              >
                과정 자세히 보기
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-all hover:border-white/40"
              >
                 교육 문의하기
              </button>
            </div>
          </div>

          {/* Right Content (Visual Elements) - Fills the empty space */}
          <div className="hidden lg:block w-[45%] relative h-full pointer-events-none">
             {/* Centered Floating Container */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
                 
                 {/* Main Dashboard Card */}
                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative z-10 animate-float-slow ring-1 ring-white/5">
                    {/* Card Header */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
                              <BarChart3 className="text-white w-5 h-5" />
                          </div>
                          <div>
                              <div className="text-white font-bold text-sm tracking-wide">리더십 역량 진단</div>
                              <div className="text-primary-300 text-[10px] font-medium">Leadership Competency</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded text-green-400 text-xs font-bold border border-green-500/30">
                           <TrendingUp className="w-3 h-3" /> +24%
                        </div>
                    </div>
                    
                    {/* Chart Bars */}
                    <div className="space-y-5">
                        <div>
                          <div className="flex justify-between text-xs text-gray-300 mb-1.5 font-medium">
                             성과 관리 (Performance) <span className="text-white">85%</span>
                          </div>
                          <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[85%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs text-gray-300 mb-1.5 font-medium">
                             소통/협업 (Communication) <span className="text-white">92%</span>
                          </div>
                          <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 w-[92%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs text-gray-300 mb-1.5 font-medium">
                             동기 부여 (Motivation) <span className="text-white">78%</span>
                          </div>
                          <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-[78%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                          </div>
                        </div>
                    </div>
                 </div>

                 {/* Floating Element 1: AI Analysis */}
                 <div className="absolute -right-12 -top-12 animate-float-medium z-20">
                     <div className="bg-[#1a1f2e]/80 backdrop-blur-md border border-primary-500/30 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-primary-600/20 flex items-center justify-center border border-primary-500/50">
                             <BrainCircuit className="w-5 h-5 text-primary-400" />
                         </div>
                         <div>
                             <div className="text-white text-xs font-bold">AI 분석 완료</div>
                             <div className="text-gray-400 text-[10px]">Data-driven Insight</div>
                         </div>
                         <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#1a1f2e]"></div>
                     </div>
                 </div>

                 {/* Floating Element 2: Success Badge */}
                 <div className="absolute -left-16 bottom-8 animate-float-fast z-20">
                     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
                             <CheckCircle className="w-5 h-5 text-green-400" />
                         </div>
                         <div>
                             <div className="text-white text-xs font-bold">목표 달성</div>
                             <div className="text-gray-300 text-[10px]">Challenge Success</div>
                         </div>
                     </div>
                 </div>

                 {/* Floating Element 3: User Avatar Group (Simplified) */}
                 <div className="absolute -right-4 -bottom-10 animate-float-medium delay-700 z-0 opacity-80">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/5 px-4 py-2 rounded-full flex items-center gap-2">
                          <div className="flex -space-x-2">
                              <div className="w-6 h-6 rounded-full bg-gray-300 border border-[#1a1f2e]"></div>
                              <div className="w-6 h-6 rounded-full bg-gray-400 border border-[#1a1f2e]"></div>
                              <div className="w-6 h-6 rounded-full bg-gray-500 border border-[#1a1f2e]"></div>
                          </div>
                          <span className="text-[10px] text-gray-300 font-medium">+1,200 Leaders</span>
                      </div>
                 </div>

             </div>
          </div>
          
        </div>
      </div>

      {/* 2. Stats & Trust Strip */}
      <div className="bg-primary-900 border-t border-primary-800">
        <div className="grid grid-cols-3 divide-x divide-primary-800">
           {MAIN_STATS.map((stat, idx) => (
             <div key={idx} className="py-8 text-center group cursor-default hover:bg-primary-800/50 transition-colors">
                <div className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-primary-300 text-xs sm:text-sm font-bold uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>

      {/* 3. Core Strategies (Why Reference HRD) */}
      <div className="py-24 px-6 lg:px-12 bg-white">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-3 block">Why Reference HRD</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">3가지 차별화 전략</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            레퍼런스HRD는 검증된 콘텐츠, 맞춤형 개발, 빈틈없는 운영으로<br className="hidden md:block"/>
            고객사의 교육 만족도를 극대화합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MAIN_STRATEGIES.map((item, idx) => {
            // Icon mapping
            const Icon = item.icon === 'BookOpen' ? BookOpen : item.icon === 'Target' ? Target : Settings;
            return (
              <div key={idx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-primary-600 mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-[10px] font-bold rounded-full mb-4 uppercase tracking-wider">
                  Step 0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-primary-600 font-bold text-sm mb-4">{item.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3.5 New AI Leadership Solution Teaser */}
      <div className="py-24 px-6 lg:px-12 bg-[#0f172a] relative overflow-hidden">
         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
         
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-1/2">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  Core Solution
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                 AI-LEAD Framework:<br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">데이터 기반의 리더십 혁신</span>
               </h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-10">
                 리더십 교육의 패러다임이 바뀝니다.<br/>
                 데이터 진단, AI 페르소나 롤플레잉, 행동 강화까지.<br/>
                 기술(Technology)과 HRD의 결합으로 확실한 행동 변화를 약속합니다.
               </p>
               <button 
                 onClick={() => onNavigate('ai-leadership')}
                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2 transform hover:-translate-y-1"
               >
                 AI 솔루션 자세히 보기 <ArrowRight className="w-4 h-4" />
               </button>
            </div>
            
            <div className="lg:w-1/2 w-full">
               <div className="grid gap-4">
                  {/* Card 1 */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors cursor-pointer group" onClick={() => onNavigate('ai-leadership')}>
                     <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                        <BrainCircuit className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-lg mb-1">Phase 1. AI 역량 진단</h4>
                        <p className="text-gray-400 text-sm">360도 데이터 기반의 객관적 역량 분석</p>
                     </div>
                     <ArrowRight className="w-5 h-5 text-gray-600 ml-auto group-hover:text-white transition-colors" />
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors cursor-pointer group" onClick={() => onNavigate('ai-leadership')}>
                     <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors flex-shrink-0">
                        <Bot className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-lg mb-1">Phase 2. 실전 시뮬레이션</h4>
                        <p className="text-gray-400 text-sm">AI 페르소나와의 몰입형 대화 훈련</p>
                     </div>
                     <ArrowRight className="w-5 h-5 text-gray-600 ml-auto group-hover:text-white transition-colors" />
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors cursor-pointer group" onClick={() => onNavigate('ai-leadership')}>
                     <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors flex-shrink-0">
                        <TrendingUp className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-lg mb-1">Phase 3. 행동 강화</h4>
                        <p className="text-gray-400 text-sm">현업 적용 챌린지 및 지속적 피드백</p>
                     </div>
                     <ArrowRight className="w-5 h-5 text-gray-600 ml-auto group-hover:text-white transition-colors" />
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 4. Curriculum Preview */}
      <div className="py-24 px-6 lg:px-12 bg-gray-50">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-3 block">Curriculum</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">맞춤형 리더십 프로그램</h2>
            </div>
            <button onClick={() => onNavigate('curriculum')} className="hidden md:flex items-center text-primary-700 font-bold hover:underline gap-2">
              전체 커리큘럼 보기 <ArrowRight className="w-4 h-4" />
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Track 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full cursor-pointer" onClick={() => onNavigate('curriculum')}>
               <div className="h-48 bg-gray-200 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                 <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Onboarding" />
                 <div className="absolute bottom-4 left-4 z-20 text-white">
                    <span className="bg-green-500 text-[10px] font-bold px-2 py-0.5 rounded text-white mb-2 inline-block">신임 팀장</span>
                    <h3 className="text-xl font-bold">신임리더 온보딩</h3>
                 </div>
               </div>
               <div className="p-6 flex flex-col flex-grow">
                 <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                   조직의 기대사항을 이해하고 리더 역할에 빠르게 적응할 수 있도록 지원하는 초기 정착 프로그램입니다.
                 </p>
                 <div className="flex items-center text-primary-600 text-sm font-bold group-hover:translate-x-1 transition-transform">
                   상세 보기 <ChevronRight className="w-4 h-4 ml-1" />
                 </div>
               </div>
            </div>

             {/* Track 2 */}
             <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full cursor-pointer" onClick={() => onNavigate('curriculum')}>
               <div className="h-48 bg-gray-200 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                 <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Performance" />
                 <div className="absolute bottom-4 left-4 z-20 text-white">
                    <span className="bg-blue-500 text-[10px] font-bold px-2 py-0.5 rounded text-white mb-2 inline-block">2~3년차</span>
                    <h3 className="text-xl font-bold">성과관리 실전역량</h3>
                 </div>
               </div>
               <div className="p-6 flex flex-col flex-grow">
                 <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                   목표 설정, 과정 관리, 평가 피드백 등 성과관리의 전 과정을 마스터하는 핵심 실무 과정입니다.
                 </p>
                 <div className="flex items-center text-primary-600 text-sm font-bold group-hover:translate-x-1 transition-transform">
                   상세 보기 <ChevronRight className="w-4 h-4 ml-1" />
                 </div>
               </div>
            </div>

             {/* Track 3 */}
             <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full cursor-pointer" onClick={() => onNavigate('curriculum')}>
               <div className="h-48 bg-gray-200 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                 <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Intensive" />
                 <div className="absolute bottom-4 left-4 z-20 text-white">
                    <span className="bg-purple-500 text-[10px] font-bold px-2 py-0.5 rounded text-white mb-2 inline-block">전체 팀장</span>
                    <h3 className="text-xl font-bold">리더십 심화</h3>
                 </div>
               </div>
               <div className="p-6 flex flex-col flex-grow">
                 <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                   갈등 관리, 강점 개발, 조직문화 등 더 깊이 있는 리더십 역량을 배양하는 심화 과정입니다.
                 </p>
                 <div className="flex items-center text-primary-600 text-sm font-bold group-hover:translate-x-1 transition-transform">
                   상세 보기 <ChevronRight className="w-4 h-4 ml-1" />
                 </div>
               </div>
            </div>
         </div>
         <button onClick={() => onNavigate('curriculum')} className="w-full md:hidden mt-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-700 font-bold shadow-sm">
            전체 커리큘럼 보기
         </button>
      </div>

      {/* 5. Operation Excellence Teaser (Renewed) */}
      <div className="py-24 px-6 lg:px-12 bg-white border-t border-gray-100 relative">
         <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                  <span className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-3 block">Operation Excellence</span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                    교육의 성패를 좌우하는<br/>
                    <span className="text-primary-600">디테일한 운영 시스템</span>
                  </h2>
                </div>
                <p className="hidden md:block text-gray-500 text-right max-w-md leading-relaxed">
                   단순한 진행이 아닙니다.<br/>
                   학습 효과를 극대화하기 위해 설계된 <strong className="text-gray-800">3단계 밀착 케어 시스템</strong>을 경험하세요.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                 {/* Phase 1 */}
                 <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary-100 transition-all duration-300 group">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-primary-50 transition-colors">
                           <Settings className="w-6 h-6 text-gray-600 group-hover:text-primary-600" />
                        </div>
                        <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded-full group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">Before</span>
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">빈틈없는 사전 설계</h3>
                     <p className="text-gray-500 text-sm mb-6">교육 효과를 예측하고 최적의 환경을 구축합니다.</p>
                     <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-700 font-medium">
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-primary-500"></div>학습자 니즈/성향 정밀 분석
                        </li>
                        <li className="flex items-center text-sm text-gray-700 font-medium">
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-primary-500"></div>사전 학습(Pre-learning) 콘텐츠 배포
                        </li>
                        <li className="flex items-center text-sm text-gray-700 font-medium">
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-primary-500"></div>교육 환경 및 기자재 더블 체크
                        </li>
                     </ul>
                 </div>

                 {/* Phase 2 */}
                 <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary-100 transition-all duration-300 group">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-primary-50 transition-colors">
                           <Users className="w-6 h-6 text-gray-600 group-hover:text-primary-600" />
                        </div>
                        <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded-full group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">During</span>
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">몰입도 높은 현장 운영</h3>
                     <p className="text-gray-500 text-sm mb-6">학습자가 오직 교육에만 집중할 수 있도록 지원합니다.</p>
                     <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-700 font-medium">
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-primary-500"></div>전문 운영 매니저 전담 배치
                        </li>
                        <li className="flex items-center text-sm text-gray-700 font-medium">
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-primary-500"></div>학습 분위기 조성 및 퍼실리테이팅
                        </li>
                        <li className="flex items-center text-sm text-gray-700 font-medium">
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-primary-500"></div>돌발 상황 즉각 대응 프로세스
                        </li>
                     </ul>
                 </div>

                 {/* Phase 3 */}
                 <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary-100 transition-all duration-300 group">
                     <div className="flex justify-between items-start mb-6">
                        <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-primary-50 transition-colors">
                           <Layers className="w-6 h-6 text-gray-600 group-hover:text-primary-600" />
                        </div>
                        <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded-full group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors">After</span>
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">데이터 기반 성과 관리</h3>
                     <p className="text-gray-500 text-sm mb-6">교육이 끝난 후에도 지속적인 성장을 케어합니다.</p>
                     <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-700 font-medium">
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-primary-500"></div>만족도 및 성취도 데이터 분석
                        </li>
                        <li className="flex items-center text-sm text-gray-700 font-medium">
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-primary-500"></div>현업 적용을 위한 Follow-up 툴킷
                        </li>
                        <li className="flex items-center text-sm text-gray-700 font-medium">
                           <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover:bg-primary-500"></div>차기 교육 제안 및 인사이트 리포트
                        </li>
                     </ul>
                 </div>
             </div>

             <div className="bg-[#1a1f2e] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                 
                 <div className="relative z-10 flex items-center gap-6">
                    <div className="hidden md:flex w-16 h-16 rounded-full bg-primary-600 text-white items-center justify-center shadow-lg animate-pulse">
                        <Star className="w-8 h-8 fill-current" />
                    </div>
                    <div>
                        <h4 className="text-white text-xl font-bold mb-2">운영도 결국 '사람'이 합니다.</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            레퍼런스HRD는 아르바이트생이 아닌, <strong className="text-white">평균 경력 5년 이상의 정규직 매니저</strong>가<br className="hidden md:block"/>
                            전 과정을 책임지고 운영하여 최상의 교육 퀄리티를 보장합니다.
                        </p>
                    </div>
                 </div>

                 <button 
                  onClick={() => onNavigate('operation')}
                  className="relative z-10 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center gap-2 flex-shrink-0"
                 >
                   운영 프로세스 전체 보기 <ArrowRight className="w-4 h-4" />
                 </button>
             </div>
         </div>
      </div>

      {/* 5.5 Clients Marquee (New) */}
      <div className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
             <p className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-3">Trusted Partners</p>
             <h2 className="text-2xl md:text-3xl font-black text-gray-900">
               주요 고객사
             </h2>
        </div>

        <div className="relative w-full overflow-hidden">
             {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

            {/* Row 1 */}
            <div className="flex mb-4">
                <div className="flex animate-scroll-left whitespace-nowrap">
                    {[...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1, ...CLIENTS_ROW_1].map((client, idx) => (
                        <div key={idx} className="mx-3 flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-gray-200 shadow-sm text-gray-600 font-bold text-sm hover:border-primary-300 hover:text-primary-700 transition-colors">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            {client}
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 */}
            <div className="flex mb-4">
                <div className="flex animate-scroll-right whitespace-nowrap">
                    {[...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2, ...CLIENTS_ROW_2].map((client, idx) => (
                        <div key={idx} className="mx-3 flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-gray-200 shadow-sm text-gray-600 font-bold text-sm hover:border-primary-300 hover:text-primary-700 transition-colors">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            {client}
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 3 */}
            <div className="flex">
                <div className="flex animate-scroll-left whitespace-nowrap">
                    {[...CLIENTS_ROW_3, ...CLIENTS_ROW_3, ...CLIENTS_ROW_3, ...CLIENTS_ROW_3].map((client, idx) => (
                        <div key={idx} className="mx-3 flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-gray-200 shadow-sm text-gray-600 font-bold text-sm hover:border-primary-300 hover:text-primary-700 transition-colors">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* 6. Bottom CTA */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 py-24 px-6 text-center relative overflow-hidden">
         {/* Decorative Circles */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
         
         <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
             우리 조직에 딱 맞는<br/>리더십 교육을 찾고 계신가요?
           </h2>
           <p className="text-primary-100 text-lg mb-10 leading-relaxed">
             고객사의 상황과 니즈를 분석하여<br/>
             가장 효과적인 맞춤형 솔루션을 제안해 드립니다.
           </p>
           <button 
             onClick={() => onNavigate('contact')}
             className="px-10 py-5 bg-white text-primary-900 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
           >
             무료 상담 문의하기
           </button>
         </div>
      </div>
    </div>
  );
};

export default Hero;
