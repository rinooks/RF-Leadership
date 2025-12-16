
import React from 'react';
import { Sparkles, BrainCircuit, Bot, LineChart, Zap, CheckCircle2, MessageSquare, AlertCircle, Target, TrendingUp, ShieldCheck } from 'lucide-react';

const AILeadership: React.FC = () => {
  return (
    <div className="w-full animate-fade-in bg-white">
      {/* Sophisticated Header */}
      <div className="bg-[#111827] text-white py-28 px-8 relative overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-blue-400" />
              Future of HRD
           </div>
           <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
             AI-LEAD Framework<br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-white">데이터 기반 리더십 혁신</span>
           </h1>
           <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
             진정한 리더십 변화는 <strong>객관적인 데이터</strong>와 <strong>지속적인 행동 강화</strong>에서 시작됩니다.<br/>
             진단부터 체화까지, 리더십 러닝 저니의 전 과정을 AI 기술로 혁신하여 실질적인 행동 변화를 보장합니다.
           </p>
        </div>
      </div>

      {/* Core Process Steps (Phase 1, 2, 3) */}
      <div className="py-24 px-6 lg:px-12 bg-gray-50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">성과지향적 AI 리더십 모델</h2>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                 레퍼런스HRD는 검증된 HRD 노하우와 최신 AI 기술을 결합하여<br/>
                 단순한 학습을 넘어 <strong>조직의 성과(Performance)로 직결되는 교육 프로세스</strong>를 설계했습니다.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
               {/* Arrow Connections (Desktop only) */}
               <div className="hidden lg:block absolute top-1/2 left-[32%] w-[4%] h-0.5 bg-gray-300 -translate-y-1/2">
                  <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-gray-300 rotate-45"></div>
               </div>
               <div className="hidden lg:block absolute top-1/2 right-[32%] w-[4%] h-0.5 bg-gray-300 -translate-y-1/2">
                  <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-gray-300 rotate-45"></div>
               </div>

               {/* Phase 1 */}
               <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative z-10">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600 rounded-t-2xl"></div>
                  <div className="mb-8 flex flex-col items-center border-b border-gray-100 pb-6">
                     <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">Phase 1</span>
                     <h3 className="text-2xl font-black text-gray-900 mb-1">Pre-Training</h3>
                     <span className="text-gray-500 text-sm font-medium">데이터 기반의 객관적 진단</span>
                  </div>
                  <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0"><BrainCircuit className="w-5 h-5" /></div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-sm mb-1">AI 역량 정밀 진단</h4>
                           <p className="text-xs text-gray-500 leading-snug">360도 데이터를 기반으로 리더십 현주소와 역량 Gap을 객관적으로 분석</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0"><LineChart className="w-5 h-5" /></div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-sm mb-1">개인화 리포트 도출</h4>
                           <p className="text-xs text-gray-500 leading-snug">강점과 보완점을 시각화하고 개인별 성향에 맞춘 행동 가이드 제시</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0"><Target className="w-5 h-5" /></div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-sm mb-1">성과 연계 학습 설계</h4>
                           <p className="text-xs text-gray-500 leading-snug">조직의 핵심 KPI 달성에 필요한 리더십 역량을 우선적으로 학습하도록 설계</p>
                        </div>
                     </li>
                  </ul>
               </div>

               {/* Phase 2 */}
               <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative z-10">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600 rounded-t-2xl"></div>
                  <div className="mb-8 flex flex-col items-center border-b border-gray-100 pb-6">
                     <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-2">Phase 2</span>
                     <h3 className="text-2xl font-black text-gray-900 mb-1">In-Training</h3>
                     <span className="text-gray-500 text-sm font-medium">몰입형 실전 시뮬레이션</span>
                  </div>
                  <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0"><Bot className="w-5 h-5" /></div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-sm mb-1">AI 페르소나 롤플레잉</h4>
                           <p className="text-xs text-gray-500 leading-snug">실제 구성원 성향을 반영한 AI(Digital Twin)와 고난이도 상황 대화 훈련</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0"><MessageSquare className="w-5 h-5" /></div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-sm mb-1">실시간 코칭 피드백</h4>
                           <p className="text-xs text-gray-500 leading-snug">대화의 맥락, 단어 선택, 공감도 등을 AI가 실시간 분석하여 개선점 코칭</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0"><Zap className="w-5 h-5" /></div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-sm mb-1">의사결정 게임</h4>
                           <p className="text-xs text-gray-500 leading-snug">딜레마 상황에서의 의사결정 패턴을 분석하고 최적의 솔루션 학습</p>
                        </div>
                     </li>
                  </ul>
               </div>

               {/* Phase 3 */}
               <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative z-10">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-purple-600 rounded-t-2xl"></div>
                  <div className="mb-8 flex flex-col items-center border-b border-gray-100 pb-6">
                     <span className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-2">Phase 3</span>
                     <h3 className="text-2xl font-black text-gray-900 mb-1">Post-Training</h3>
                     <span className="text-gray-500 text-sm font-medium">행동 강화 및 성과 창출</span>
                  </div>
                  <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0"><ShieldCheck className="w-5 h-5" /></div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-sm mb-1">현업 적용 챌린지</h4>
                           <p className="text-xs text-gray-500 leading-snug">학습 내용을 실제 업무에 적용할 수 있도록 행동 미션(Nudge) 자동 발송</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0"><TrendingUp className="w-5 h-5" /></div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-sm mb-1">성장 추적 리포트</h4>
                           <p className="text-xs text-gray-500 leading-snug">교육 전후의 역량 변화 추이를 시각화하여 ROI 및 행동 변화 증명</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0"><Sparkles className="w-5 h-5" /></div>
                        <div>
                           <h4 className="font-bold text-gray-900 text-sm mb-1">AI 멘토링 지속 지원</h4>
                           <p className="text-xs text-gray-500 leading-snug">리더십 이슈 발생 시 언제든 해답을 찾을 수 있는 상시 AI 멘토 제공</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>

      {/* Visual Demonstrations Section */}
      <div className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto space-y-32">
              
              {/* Feature 1: Diagnosis & Analysis */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2">
                      <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold rounded-full text-xs uppercase mb-6 tracking-wide">Phase 1: Diagnosis</div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         데이터로 증명하는<br/>
                         <span className="text-blue-600">리더십 메타인지(Meta-cognition)</span>
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                          막연한 주관적 판단이 아닌, <strong>객관적인 데이터</strong>로 리더십 현주소를 파악합니다.<br/>
                          리더 본인의 인식과 구성원의 평가 데이터를 비교 분석(Gap Analysis)하여 
                          '인지하지 못한 리더십 사각지대'를 발견하고, 교육 전(Pre)과 후(Post)의 
                          역량 성장 추이를 명확한 수치로 제시합니다.
                      </p>
                      
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                         <h4 className="font-bold text-gray-900 mb-4 flex items-center"><Target className="w-5 h-5 text-blue-500 mr-2"/>진단 핵심 영역</h4>
                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                             <li className="flex items-center text-sm text-gray-700">
                                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>성과 관리 (Performance)
                             </li>
                             <li className="flex items-center text-sm text-gray-700">
                                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>동기 부여 (Motivation)
                             </li>
                             <li className="flex items-center text-sm text-gray-700">
                                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>전략적 사고 (Strategy)
                             </li>
                             <li className="flex items-center text-sm text-gray-700">
                                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>갈등 관리 (Conflict)
                             </li>
                         </ul>
                      </div>
                  </div>
                  <div className="lg:w-1/2 bg-[#1a1f2e] p-10 rounded-3xl shadow-2xl border border-gray-800 relative w-full">
                       <h4 className="text-white font-bold text-center mb-8">리더십 역량 진단 결과 (예시)</h4>
                       
                       {/* Custom CSS Radar Chart Mockup */}
                       <div className="relative w-80 h-80 mx-auto">
                           {/* Grid Lines (Pentagon approximation) */}
                           <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-full h-full border border-gray-700 rounded-full opacity-30"></div>
                              <div className="w-[70%] h-[70%] border border-gray-700 rounded-full opacity-30 absolute"></div>
                              <div className="w-[40%] h-[40%] border border-gray-700 rounded-full opacity-30 absolute"></div>
                           </div>
                           
                           {/* Labels */}
                           <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-sm font-medium text-gray-300">성과관리</span>
                           <span className="absolute top-[35%] right-[-30px] text-sm font-medium text-gray-300">동기부여</span>
                           <span className="absolute bottom-[20%] right-[-20px] text-sm font-medium text-gray-300">커뮤니케이션</span>
                           <span className="absolute bottom-[20%] left-[-20px] text-sm font-medium text-gray-300">전략적 사고</span>
                           <span className="absolute top-[35%] left-[-30px] text-sm font-medium text-gray-300">갈등관리</span>

                           {/* Chart Shapes */}
                           {/* Red: Before */}
                           <svg className="absolute inset-0 w-full h-full drop-shadow-lg" viewBox="0 0 100 100">
                               <polygon points="50,25 70,45 60,75 40,75 30,45" fill="rgba(239, 68, 68, 0.4)" stroke="#ef4444" strokeWidth="2" />
                           </svg>
                           {/* Blue: After */}
                           <svg className="absolute inset-0 w-full h-full drop-shadow-lg" viewBox="0 0 100 100">
                               <polygon points="50,10 85,40 70,85 30,85 15,40" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" strokeWidth="2" />
                           </svg>
                       </div>

                       <div className="flex justify-center gap-6 mt-10">
                           <div className="flex items-center text-sm text-gray-300"><span className="w-3 h-3 bg-red-500/40 border border-red-500 mr-2 rounded-sm"></span>교육 전 (Pre)</div>
                           <div className="flex items-center text-sm text-white font-bold"><span className="w-3 h-3 bg-blue-500/40 border border-blue-500 mr-2 rounded-sm"></span>교육 후 (Post)</div>
                       </div>
                  </div>
              </div>

              {/* Feature 2: AI Simulation */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                  <div className="lg:w-1/2">
                      <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 font-bold rounded-full text-xs uppercase mb-6 tracking-wide">Phase 2: Simulation</div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         실패가 허용되는<br/>
                         <span className="text-indigo-600">안전한 훈련 공간 (Psychological Safety)</span>
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                          리더십은 이론 학습만으로는 완성되지 않습니다.<br/>
                          다양한 페르소나를 가진 <strong>AI 팀원(Digital Twin)</strong>과의 
                          실전 같은 롤플레잉을 통해, 저성과자 면담이나 갈등 조정과 같은 고난이도 상황을 미리 경험합니다.<br/>
                          나의 대화 습관과 피드백 패턴을 AI가 즉시 분석하여 개선점을 코칭합니다.
                      </p>
                       <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                         <h4 className="font-bold text-gray-900 mb-4 flex items-center"><MessageSquare className="w-5 h-5 text-indigo-500 mr-2"/>AI 코칭 분석 포인트</h4>
                         <ul className="space-y-3">
                             <li className="flex items-start text-sm text-gray-700">
                                 <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                                 <span><strong>공감 대화(Empathy):</strong> 상대방의 감정을 읽고 적절히 반응했는가?</span>
                             </li>
                             <li className="flex items-start text-sm text-gray-700">
                                 <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                                 <span><strong>명확성(Clarity):</strong> 피드백의 요지가 명확하게 전달되었는가?</span>
                             </li>
                             <li className="flex items-start text-sm text-gray-700">
                                 <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                                 <span><strong>솔루션 지향(Solution):</strong> 문제 해결을 위한 건설적 대안을 제시했는가?</span>
                             </li>
                         </ul>
                      </div>
                  </div>
                  <div className="lg:w-1/2 w-full">
                      <div className="bg-[#1e293b] rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
                          <div className="bg-[#0f172a] px-6 py-4 border-b border-gray-700 flex justify-between items-center">
                              <span className="text-white font-bold text-sm flex items-center gap-2"><Bot className="w-4 h-4 text-indigo-400"/> 실습: 저성과자 면담 시뮬레이션</span>
                              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-xs font-bold">LIVE</span>
                          </div>
                          <div className="p-8 space-y-6">
                              <div className="text-center text-sm text-gray-400 mb-6 bg-gray-800/50 py-2 rounded-lg">Scenario: 팀원의 반복적인 실수에 대한 피드백</div>
                              
                              {/* Chat Bubble: AI */}
                              <div className="flex gap-4">
                                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 text-xs text-white border-2 border-gray-500">AI</div>
                                  <div className="bg-gray-700 text-gray-100 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed max-w-[90%] shadow-lg">
                                      <span className="text-indigo-300 font-bold text-xs block mb-1.5">김대리 (AI 페르소나)</span>
                                      "팀장님, 최근 제 업무 성과가 좋지 않은 것 같아 저도 걱정이 많습니다...<br/>
                                      그런데 솔직히 업무량이 너무 많아서 집중하기가 힘들었어요."
                                  </div>
                              </div>

                              {/* Options */}
                              <div className="space-y-3 pl-14">
                                  <div className="p-4 border border-indigo-500/30 bg-indigo-900/10 text-indigo-100 text-sm rounded-xl hover:bg-indigo-900/30 cursor-pointer transition-all hover:border-indigo-400/50 group">
                                      <span className="text-indigo-400 font-bold mr-2 group-hover:text-white">A.</span>
                                      "업무량 핑계는 그만대고, 실수한 부분에 대해서나 확실히 대책을 가져오세요."
                                  </div>
                                  <div className="p-4 border border-emerald-600/30 bg-emerald-900/10 text-emerald-100 text-sm rounded-xl hover:bg-emerald-900/30 cursor-pointer transition-all hover:border-emerald-400/50 group shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                      <span className="text-emerald-400 font-bold mr-2 group-hover:text-white">B.</span>
                                      "업무량 때문에 힘들었군요. 구체적으로 어떤 업무들이 가장 부담이 되었나요? 우선순위를 같이 조정해봅시다."
                                  </div>
                              </div>

                              {/* Feedback Alert */}
                              <div className="bg-gradient-to-r from-gray-800 to-gray-800 border-l-4 border-l-indigo-500 rounded-r-lg p-5 flex gap-4 animate-fade-in mt-6">
                                  <div className="bg-indigo-500/20 p-2 rounded-full h-fit">
                                     <Sparkles className="w-5 h-5 text-indigo-400" />
                                  </div>
                                  <div className="text-sm">
                                      <span className="text-indigo-300 font-bold block mb-1">AI Coaching Insight</span>
                                      <span className="text-gray-300 text-sm leading-relaxed">
                                        B안이 더 효과적입니다. 상대방의 어려움에 먼저 <strong>공감(Empathy)</strong>하고, 
                                        비난보다는 <strong>해결책(Solution)</strong>에 초점을 맞췄습니다. 
                                        이러한 대화는 구성원의 심리적 안전감을 높여 솔직한 소통을 가능하게 합니다.
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Feature 3: Retention & Growth */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2">
                      <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 font-bold rounded-full text-xs uppercase mb-6 tracking-wide">Phase 3: Retention</div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                         학습 전이(Learning Transfer)를 완성하는<br/>
                         <span className="text-purple-600">지속적인 행동 강화 시스템</span>
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                          교육 종료는 끝이 아니라, 현업 적용의 시작입니다.<br/>
                          에빙하우스의 망각 곡선을 극복하기 위해, AI가 <strong>최적의 주기(Spaced Repetition)</strong>로 
                          핵심 내용을 리마인드하고 현업 미션(Nudge)을 부여합니다.<br/>
                          일회성 이벤트가 아닌, <strong>데이터로 증명되는 행동 변화</strong>를 경험하세요.
                      </p>
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                         <h4 className="font-bold text-gray-900 mb-4 flex items-center"><TrendingUp className="w-5 h-5 text-purple-500 mr-2"/>Post-Training 효과</h4>
                         <ul className="space-y-3">
                             <li className="flex items-start text-sm text-gray-700">
                                 <CheckCircle2 className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                                 <span><strong>망각 방지:</strong> 학습 내용 보유율 3배 이상 향상</span>
                             </li>
                             <li className="flex items-start text-sm text-gray-700">
                                 <CheckCircle2 className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                                 <span><strong>현업 적용:</strong> 실제 업무 상황에서의 행동 변화율 추적</span>
                             </li>
                             <li className="flex items-start text-sm text-gray-700">
                                 <CheckCircle2 className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                                 <span><strong>ROI 측정:</strong> 교육 투자 대비 성과 향상 지표 제공</span>
                             </li>
                         </ul>
                      </div>
                  </div>
                  <div className="lg:w-1/2 bg-[#1a1f2e] p-10 rounded-3xl shadow-2xl border border-gray-800 w-full">
                       <h4 className="text-white font-bold text-center mb-2">AI 지원을 통한 학습 유지 효과 (Retention)</h4>
                       <p className="text-gray-400 text-xs text-center mb-10">에빙하우스의 망각 곡선(Ebbinghaus's Forgetting Curve) 기반 비교</p>
                       
                       {/* Custom CSS Line Chart */}
                       <div className="relative h-72 w-full px-4 border-l border-b border-gray-600">
                           {/* Grid Lines */}
                           <div className="absolute top-0 left-0 w-full h-px bg-gray-700/30"></div>
                           <div className="absolute top-1/4 left-0 w-full h-px bg-gray-700/30"></div>
                           <div className="absolute top-2/4 left-0 w-full h-px bg-gray-700/30"></div>
                           <div className="absolute top-3/4 left-0 w-full h-px bg-gray-700/30"></div>

                           {/* Lines */}
                           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                               {/* Red Line: Standard Education */}
                               <path 
                                  d="M0,20 C50,150 150,200 500,240" 
                                  fill="none" 
                                  stroke="#ef4444" 
                                  strokeWidth="3"
                                  strokeDasharray="5,5"
                               />
                               {/* Blue Line: AI-LEAD */}
                               <path 
                                  d="M0,20 C80,30 200,40 500,70" 
                                  fill="none" 
                                  stroke="#3b82f6" 
                                  strokeWidth="4"
                               />
                               
                               {/* Interactive Points */}
                               <circle cx="0" cy="20" r="5" fill="#3b82f6" stroke="white" strokeWidth="2" />
                               <circle cx="150" cy="35" r="5" fill="#3b82f6" stroke="white" strokeWidth="2" />
                               <circle cx="300" cy="50" r="5" fill="#3b82f6" stroke="white" strokeWidth="2" />
                               <circle cx="500" cy="70" r="5" fill="#3b82f6" stroke="white" strokeWidth="2" />
                           </svg>
                           
                           {/* Labels inside chart */}
                           <div className="absolute top-[20%] right-[10%] text-blue-400 text-xs font-bold bg-blue-900/30 px-2 py-1 rounded">AI-LEAD 적용 (80% 유지)</div>
                           <div className="absolute bottom-[10%] right-[10%] text-red-400 text-xs font-bold bg-red-900/30 px-2 py-1 rounded">일반 교육 (20% 유지)</div>
                       </div>
                       
                       {/* X Axis Labels */}
                       <div className="flex justify-between text-xs text-gray-400 mt-4 px-1 font-medium">
                           <span>교육 직후</span>
                           <span>1일 후</span>
                           <span>7일 후</span>
                           <span>30일 후 (습관화)</span>
                       </div>
                  </div>
              </div>

          </div>
      </div>
    </div>
  );
};

export default AILeadership;
