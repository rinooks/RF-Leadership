
import React from 'react';
import { JOURNEY_STEPS } from '../constants';
import { CheckCircle2, Gift, Users, Trophy, TrendingUp, ClipboardCheck, Calendar, ArrowRight } from 'lucide-react';

const icons = [Gift, Users, Trophy, TrendingUp, ClipboardCheck];

const LearningJourney: React.FC = () => {
  return (
    <div className="w-full animate-fade-in bg-white">
      {/* Sophisticated Header */}
      <div className="bg-[#111827] text-white py-28 px-8 relative overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-900/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/10 backdrop-blur-sm">
               <span className="text-emerald-300 text-xs font-bold tracking-widest uppercase">Process Overview</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
              연간 리더십<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-primary-200">Learning Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              단발성 교육이 아닌, 연 단위의 체계적인 흐름을 설계합니다.<br/>
              온보딩부터 실전 역량 강화까지 이어지는 성장의 여정을 경험하세요.
            </p>
          </div>
      </div>

      {/* Main Content */}
      <div className="py-24 px-6 lg:px-12 bg-gray-50/50">
        
        {/* Journey Steps */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-widest text-sm uppercase mb-3 block">Step by Step</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">5단계 러닝 저니</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            리더로서의 성장과 성취를 도모할 수 있도록<br className="hidden md:block"/> 
            체계적이고 연속성 있는 학습 경험을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[80px] left-10 right-10 h-0.5 bg-gray-200 -z-10"></div>
          
          {JOURNEY_STEPS.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={step.step} className="group h-full">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 h-full flex flex-col items-center text-center relative z-10 transform hover:-translate-y-1">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:text-white group-hover:bg-primary-600 transition-colors shadow-md border border-gray-50">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[11px] font-bold text-gray-500 mb-4 uppercase tracking-widest group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors">
                    Step 0{step.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-500 mb-8 h-10 leading-snug">{step.description}</p>
                  <div className="w-full border-t border-gray-50 pt-5 mt-auto">
                    <ul className="text-left space-y-2.5">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Table Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">연간 교육 일정</h2>
                 <p className="text-sm text-gray-500 mt-1">고객사의 상황에 맞춰 유연하게 조정 가능한 추천 일정입니다.</p>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[800px] border-collapse bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider">
                  <th className="py-5 px-6 text-left w-[20%]">대상 / 구분</th>
                  <th className="py-5 px-4 text-center w-[20%] border-l border-gray-100">D+1분기</th>
                  <th className="py-5 px-4 text-center w-[20%] border-l border-gray-100">D+2분기</th>
                  <th className="py-5 px-4 text-center w-[20%] border-l border-gray-100">D+3분기</th>
                  <th className="py-5 px-4 text-center w-[20%] border-l border-gray-100">D+4분기</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Row 1 */}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-8 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-green-400 rounded-full"></div>
                      <div>
                        <div className="font-bold text-gray-900 text-base mb-1">신임 팀장</div>
                        <div className="text-xs text-gray-400 font-medium">"기대와 부담이 공존"</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle border-l border-gray-100">
                    <div className="space-y-2">
                      <div className="bg-green-50 text-green-700 text-xs font-bold p-2.5 rounded-lg text-center border border-green-100">경영진 축하/간담회</div>
                      <div className="bg-green-50 text-green-700 text-xs font-bold p-2.5 rounded-lg text-center border border-green-100">온보딩 가이드</div>
                    </div>
                  </td>
                  <td className="p-4 align-middle border-l border-gray-100">
                      <div className="space-y-2">
                        <div className="bg-gray-100 text-gray-600 text-xs font-bold p-2.5 rounded-lg text-center">역량 진단</div>
                        <div className="bg-gray-100 text-gray-600 text-xs font-bold p-2.5 rounded-lg text-center">피드백 세션</div>
                      </div>
                  </td>
                  <td className="p-4 align-middle border-l border-gray-100">
                      <div className="bg-primary-600 text-white text-xs font-bold p-4 rounded-xl text-center shadow-lg shadow-primary-200 h-full flex items-center justify-center">
                        신임팀장<br/>리더십 교육
                      </div>
                  </td>
                  <td className="p-4 align-middle border-l border-gray-100">
                    <div className="bg-gray-800 text-white text-xs font-bold p-4 rounded-xl text-center shadow-lg h-full flex items-center justify-center">
                      사후 워크숍
                    </div>
                  </td>
                </tr>
                
                {/* Row 2 */}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-8 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-blue-400 rounded-full"></div>
                      <div>
                        <div className="font-bold text-gray-900 text-base mb-1">팀장 2~3년차</div>
                        <div className="text-xs text-gray-400 font-medium">"시행착오 및 성장"</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle border-l border-gray-100">
                      <div className="space-y-2">
                        <div className="bg-gray-100 text-gray-600 text-xs font-bold p-2.5 rounded-lg text-center">리더십 역량 진단</div>
                        <div className="bg-gray-100 text-gray-600 text-xs font-bold p-2.5 rounded-lg text-center">피드백 세션</div>
                      </div>
                  </td>
                  <td className="p-4 align-middle border-l border-gray-100 text-center" colSpan={2}>
                    <div className="bg-primary-700 text-white text-sm font-bold p-6 rounded-xl text-center shadow-lg shadow-primary-200 w-full flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                      <div className="relative z-10">실전 리더십 역량강화</div>
                      <div className="relative z-10 text-[10px] bg-white/20 px-2 py-0.5 rounded text-primary-50 font-medium">성과관리 / 코칭 / 피드백</div>
                      <ArrowRight className="absolute right-4 text-white/20 w-8 h-8" />
                    </div>
                  </td>
                  <td className="p-4 align-middle border-l border-gray-100">
                    <div className="bg-gray-800 text-white text-xs font-bold p-4 rounded-xl text-center shadow-lg h-full flex items-center justify-center">
                      사후 워크숍<br/>(현업사례 공유)
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-8 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-purple-400 rounded-full"></div>
                      <div>
                        <div className="font-bold text-gray-900 text-base mb-1">팀장 4년차 이상</div>
                        <div className="text-xs text-gray-400 font-medium">"영향력 발휘 및 완성"</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle border-l border-gray-100 bg-gray-50/30"></td>
                  <td className="p-4 align-middle border-l border-gray-100 text-center" colSpan={2}>
                      <div className="bg-primary-900 text-white text-sm font-bold p-6 rounded-xl text-center shadow-lg shadow-primary-200 w-full flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                         <div className="relative z-10">리더십 심화 모듈</div>
                         <div className="relative z-10 text-[10px] bg-white/20 px-2 py-0.5 rounded text-primary-100 font-medium">갈등관리 / 강점 / 조직문화</div>
                         <ArrowRight className="absolute right-4 text-white/20 w-8 h-8" />
                      </div>
                  </td>
                  <td className="p-4 align-middle border-l border-gray-100 bg-gray-50/30"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;
