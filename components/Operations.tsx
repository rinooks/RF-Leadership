
import React from 'react';
import { Settings, CheckSquare, BarChart3, Package, FileText, CheckCircle2, ClipboardList } from 'lucide-react';

const Operations: React.FC = () => {
  return (
    <div className="w-full animate-fade-in bg-white">
       {/* Sophisticated Header */}
       <div className="bg-[#111827] text-white py-28 px-8 relative overflow-hidden">
           {/* Abstract Background Elements */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

           <div className="relative z-10 max-w-5xl mx-auto text-center">
             <div className="inline-block px-3 py-1 mb-6 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm">
                <span className="text-orange-300 text-xs font-bold tracking-widest uppercase">System & Toolkit</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
               빈틈없는 교육 운영<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white">완벽한 교육 경험</span>
             </h1>
             <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
               Basic, but Special.<br/>
               준비부터 사후관리까지 차별화된 디테일로 교육의 성과를 높입니다.
             </p>
          </div>
      </div>

      {/* Main Process */}
      <div className="py-24 px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
             {/* Step 1 */}
             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Settings className="w-7 h-7" />
                   </div>
                   <span className="text-6xl font-black text-gray-100 group-hover:text-primary-50 transition-colors select-none">01</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">사전 준비 <span className="text-gray-400 font-normal ml-1">Before</span></h3>
                <p className="text-primary-600 text-xs font-bold uppercase tracking-wider mb-6">Basic, but Special</p>
                <div className="space-y-4">
                   <div className="h-px bg-gray-100 w-full mb-4"></div>
                   <ul className="space-y-3 text-sm text-gray-600 font-medium">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />니즈 분석 기반 맞춤형 설계</li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />전임교수진 Pool 매칭</li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />운영 Check-List 확인</li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />학습자 사전 안내 및 독려</li>
                   </ul>
                </div>
             </div>

             {/* Step 2 */}
             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <CheckSquare className="w-7 h-7" />
                   </div>
                   <span className="text-6xl font-black text-gray-100 group-hover:text-primary-50 transition-colors select-none">02</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">교육 운영 <span className="text-gray-400 font-normal ml-1">During</span></h3>
                <p className="text-primary-600 text-xs font-bold uppercase tracking-wider mb-6">Wide, but Intensive</p>
                <div className="space-y-4">
                   <div className="h-px bg-gray-100 w-full mb-4"></div>
                   <ul className="space-y-3 text-sm text-gray-600 font-medium">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />운영 전문가의 밀착 관리</li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />신속한 문제 해결 프로세스</li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />교육 핵심 리마인드</li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />과정 모니터링 및 기록</li>
                   </ul>
                </div>
             </div>

             {/* Step 3 */}
             <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <BarChart3 className="w-7 h-7" />
                   </div>
                   <span className="text-6xl font-black text-gray-100 group-hover:text-primary-50 transition-colors select-none">03</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">사후 관리 <span className="text-gray-400 font-normal ml-1">After</span></h3>
                <p className="text-primary-600 text-xs font-bold uppercase tracking-wider mb-6">End, but Continue</p>
                <div className="space-y-4">
                   <div className="h-px bg-gray-100 w-full mb-4"></div>
                   <ul className="space-y-3 text-sm text-gray-600 font-medium">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />데이터 시각화 결과 보고서</li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />사전-사후 역량 GAP 분석</li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />현장 스케치 및 코멘트</li>
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />니즈 기반 추가 과정 제안</li>
                   </ul>
                </div>
             </div>
          </div>

          {/* Special Features - Toolkits with Visual Mockups */}
          <div className="mb-28">
             <div className="flex items-center mb-10">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">리더십 툴킷</h2>
                  <p className="text-gray-500 text-sm">교육 효과를 높이고 현업 적용을 돕는 학습 도구</p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* 1. 리더십 실행 워크북 */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300 group">
                    <div className="h-52 bg-gray-50 border-b border-gray-100 flex items-center justify-center relative overflow-hidden">
                        {/* Blob Background */}
                        <div className="absolute w-40 h-40 bg-white rounded-full shadow-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        
                        {/* Mockup: Spiral Workbook */}
                        <div className="relative w-32 h-40 bg-white border border-gray-300 rounded-r-lg shadow-md flex flex-col pt-4 pr-3 pl-6 group-hover:scale-105 transition-transform duration-500 group-hover:-rotate-2">
                           {/* Spiral */}
                           <div className="absolute left-1.5 top-2 bottom-2 w-3 flex flex-col justify-between py-1">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-2.5 h-1.5 bg-gray-300 rounded-full shadow-inner"></div>
                                ))}
                           </div>
                           {/* Lines */}
                           <div className="w-12 h-2 bg-primary-100 rounded mb-3"></div>
                           <div className="space-y-2">
                               <div className="flex items-center gap-2">
                                   <div className="w-3 h-3 border border-gray-300 rounded-sm"></div>
                                   <div className="w-20 h-1 bg-gray-100 rounded"></div>
                               </div>
                               <div className="flex items-center gap-2">
                                   <div className="w-3 h-3 border border-gray-300 rounded-sm"></div>
                                   <div className="w-16 h-1 bg-gray-100 rounded"></div>
                               </div>
                               <div className="flex items-center gap-2">
                                   <div className="w-3 h-3 border border-gray-300 rounded-sm"></div>
                                   <div className="w-18 h-1 bg-gray-100 rounded"></div>
                               </div>
                           </div>
                           {/* Badge */}
                           <div className="absolute bottom-3 right-3 text-gray-300">
                               <ClipboardList className="w-6 h-6 opacity-20" />
                           </div>
                        </div>
                    </div>
                    <div className="p-8">
                       <h3 className="font-bold text-lg mb-3 text-gray-900 flex items-center gap-2">
                          리더십 실행 워크북
                       </h3>
                       <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                          목표 설정, 실행 계획, 성과 관리를 체계적으로 기록하고 반성하는 다이어리
                       </p>
                       <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs text-gray-500">
                          <span className="text-primary-600 font-bold block mb-1">Includes</span>
                          성과코칭 프랙티스, 체크리스트
                       </div>
                    </div>
                </div>

                {/* 2. 자기 인식 프로파일 */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300 group">
                    <div className="h-52 bg-gray-50 border-b border-gray-100 flex items-center justify-center relative overflow-hidden">
                        {/* Blob Background */}
                        <div className="absolute w-40 h-40 bg-white rounded-full shadow-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        
                        {/* Mockup: Chart Document */}
                        <div className="relative w-36 h-44 bg-white border border-gray-200 shadow-md p-3 flex flex-col group-hover:scale-105 transition-transform duration-500 group-hover:rotate-2">
                           {/* Header */}
                           <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                               <div className="w-16 h-2 bg-gray-200 rounded"></div>
                               <div className="w-4 h-4 rounded-full bg-gray-100"></div>
                           </div>
                           {/* Chart */}
                           <div className="flex items-end justify-between gap-1 h-20 mb-3 px-1">
                               <div className="w-full bg-primary-200 h-[60%] rounded-t-sm"></div>
                               <div className="w-full bg-primary-400 h-[80%] rounded-t-sm"></div>
                               <div className="w-full bg-gray-300 h-[40%] rounded-t-sm"></div>
                               <div className="w-full bg-primary-500 h-[90%] rounded-t-sm"></div>
                           </div>
                           {/* Data lines */}
                           <div className="space-y-1.5">
                               <div className="flex justify-between">
                                  <div className="w-8 h-1 bg-gray-100 rounded"></div>
                                  <div className="w-4 h-1 bg-gray-200 rounded"></div>
                               </div>
                               <div className="flex justify-between">
                                  <div className="w-10 h-1 bg-gray-100 rounded"></div>
                                  <div className="w-6 h-1 bg-primary-200 rounded"></div>
                               </div>
                               <div className="flex justify-between">
                                  <div className="w-7 h-1 bg-gray-100 rounded"></div>
                                  <div className="w-3 h-1 bg-gray-200 rounded"></div>
                               </div>
                           </div>
                           {/* Badge */}
                           <div className="absolute -top-1 -right-1">
                               <div className="bg-primary-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm">Analysis</div>
                           </div>
                        </div>
                    </div>
                    <div className="p-8">
                       <h3 className="font-bold text-lg mb-3 text-gray-900">자기 인식 프로파일</h3>
                       <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                          강점 진단 및 리더십 스타일을 분석하여 자기 객관화를 돕는 분석 시트
                       </p>
                       <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs text-gray-500">
                          <span className="text-primary-600 font-bold block mb-1">Includes</span>
                          강점 테마, 업무 스타일, 관계 스타일 분석
                       </div>
                    </div>
                </div>

                {/* 3. 코칭 대화 카드 */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300 group">
                    <div className="h-52 bg-gray-50 border-b border-gray-100 flex items-center justify-center relative overflow-hidden">
                        {/* Blob Background */}
                        <div className="absolute w-40 h-40 bg-white rounded-full shadow-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        
                        {/* Mockup: Stacked Cards */}
                        <div className="relative w-32 h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                           {/* Bottom Card */}
                           <div className="absolute w-24 h-32 bg-white border border-gray-200 rounded-xl shadow-sm transform -rotate-12 translate-x-[-15px]"></div>
                           {/* Middle Card */}
                           <div className="absolute w-24 h-32 bg-white border border-gray-200 rounded-xl shadow-md transform rotate-6 translate-x-[10px]"></div>
                           {/* Top Card */}
                           <div className="absolute w-24 h-32 bg-gradient-to-br from-primary-600 to-primary-800 border border-primary-500 rounded-xl shadow-lg transform -rotate-3 flex flex-col items-center justify-center p-3">
                              <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center mb-3 text-white font-serif font-bold text-xl">
                                ?
                              </div>
                              <div className="w-12 h-1 bg-white/40 rounded-full mb-1.5"></div>
                              <div className="w-16 h-1 bg-white/40 rounded-full"></div>
                           </div>
                        </div>
                    </div>
                    <div className="p-8">
                       <h3 className="font-bold text-lg mb-3 text-gray-900">코칭 대화 카드</h3>
                       <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                          상황별 적절한 질문과 대화 모델을 가이드하는 실전형 코칭 도구
                       </p>
                       <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs text-gray-500">
                          <span className="text-primary-600 font-bold block mb-1">Includes</span>
                          라포 형성, 이슈 도출, 해결안 탐색 가이드
                       </div>
                    </div>
                </div>

             </div>
          </div>

          {/* Reporting */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-14 text-white overflow-hidden relative mb-24">
             {/* Decorative background */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-14">
               <div className="md:w-1/2">
                  <div className="inline-block px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-xs font-bold text-primary-300 mb-6">
                    Reporting System
                  </div>
                  <h3 className="text-3xl font-bold mb-6">데이터 기반 성과 분석 보고서</h3>
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                     단순한 만족도 조사를 넘어, 교육의 실질적 효과를 증명합니다.<br/>
                     Kirkpatrick 평가 모형에 기반하여 학습 성취도와 현업 적용 가능성을 분석하고, 
                     사전-사후 역량 변화(Gap) 데이터를 시각화하여 제공합니다.
                  </p>
                  <div className="flex gap-3">
                     <span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-bold text-white border border-white/10 backdrop-blur-sm">#ROI 분석</span>
                     <span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-bold text-white border border-white/10 backdrop-blur-sm">#행동변화 측정</span>
                     <span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-bold text-white border border-white/10 backdrop-blur-sm">#인사이트 도출</span>
                  </div>
               </div>
               <div className="md:w-1/2 w-full">
                  <div className="bg-white rounded-xl shadow-2xl p-6 text-gray-900 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                         <FileText className="w-5 h-5 text-primary-600" />
                         <span className="font-bold text-lg">결과 보고서 미리보기</span>
                      </div>
                      <div className="space-y-4">
                         <div className="flex gap-4">
                            <div className="w-1/2 h-24 bg-primary-50 rounded-lg flex flex-col items-center justify-center gap-2">
                               <div className="w-8 h-8 rounded-full bg-primary-100"></div>
                               <div className="w-16 h-2 bg-gray-200 rounded"></div>
                            </div>
                            <div className="w-1/2 h-24 bg-gray-50 rounded-lg flex flex-col items-center justify-center gap-2">
                               <div className="w-16 h-16 rounded-full border-4 border-gray-200 border-t-primary-500"></div>
                            </div>
                         </div>
                         <div className="h-32 bg-gray-50 rounded-lg p-4">
                            <div className="w-full h-full flex items-end justify-between gap-2 px-2 pb-2">
                               <div className="w-full bg-primary-200 rounded-t h-[40%]"></div>
                               <div className="w-full bg-primary-300 rounded-t h-[60%]"></div>
                               <div className="w-full bg-primary-400 rounded-t h-[50%]"></div>
                               <div className="w-full bg-primary-500 rounded-t h-[80%]"></div>
                               <div className="w-full bg-primary-600 rounded-t h-[70%]"></div>
                            </div>
                         </div>
                      </div>
                  </div>
               </div>
             </div>
          </div>

      </div>
    </div>
  );
};

export default Operations;
