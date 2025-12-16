
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningJourney from './components/LearningJourney';
import Curriculum from './components/Curriculum';
import Instructors from './components/Instructors';
import Operations from './components/Operations';
import Company from './components/Company';
import Contact from './components/Contact';
import AILeadership from './components/AILeadership';
import { Phone, Mail, MapPin, Globe, ExternalLink, MessageSquare, CalendarCheck } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simple scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'ai-leadership':
        return <AILeadership />;
      case 'overview':
        return <LearningJourney />;
      case 'curriculum':
        return <Curriculum />;
      case 'instructors':
        return <Instructors />;
      case 'operation':
        return <Operations />;
      case 'company':
        return <Company />;
      case 'contact':
        return (
          <div className="w-full animate-fade-in bg-white">
             {/* Header */}
             <div className="bg-[#1a1f2e] text-white py-20 px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                   <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">교육 문의하기</h1>
                   <p className="text-xl text-gray-300 font-light leading-relaxed">
                     성공적인 교육 운영을 위한 최고의 파트너,<br/>
                     레퍼런스HRD가 귀사의 고민을 함께 해결하겠습니다.
                   </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Left: Contact Info */}
                  <div className="space-y-8">
                     <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">문의 안내</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                           교육 과정 설계, 견적 문의, 일정 조율 등 궁금하신 점이 있으시다면 언제든 문의해주세요. 
                           담당자가 확인 후 신속하게 답변 드리겠습니다.
                        </p>
                     </div>

                     <div className="grid gap-6">
                        <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 transition-colors">
                           <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-sm mr-5 flex-shrink-0">
                              <Phone className="w-6 h-6" />
                           </div>
                           <div>
                              <h3 className="font-bold text-gray-900 mb-1">전화 문의</h3>
                              <p className="text-gray-500 text-sm mb-2">평일 09:00 ~ 18:00</p>
                              <a href="tel:070-4647-4757" className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">070-4647-4757</a>
                           </div>
                        </div>

                        <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 transition-colors">
                           <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-sm mr-5 flex-shrink-0">
                              <Mail className="w-6 h-6" />
                           </div>
                           <div>
                              <h3 className="font-bold text-gray-900 mb-1">이메일 문의</h3>
                              <p className="text-gray-500 text-sm mb-2">제안서 요청 및 세금계산서 발행</p>
                              <a href="mailto:help@referencehrd.com" className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">help@referencehrd.com</a>
                           </div>
                        </div>

                        <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 transition-colors">
                           <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-sm mr-5 flex-shrink-0">
                              <MapPin className="w-6 h-6" />
                           </div>
                           <div>
                              <h3 className="font-bold text-gray-900 mb-1">오시는 길</h3>
                              <p className="text-gray-600 leading-relaxed">
                                 서울특별시 강서구 마곡중앙로 161-8<br/>
                                 두산더랜드파크 A동 410호
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right: Action Card */}
                  <div className="bg-primary-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>
                      
                      <div className="relative z-10">
                         <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                            <MessageSquare className="w-8 h-8 text-primary-200" />
                         </div>
                         <h3 className="text-3xl font-bold mb-4">간편 상담 문의</h3>
                         <p className="text-primary-100 mb-10 leading-relaxed text-lg">
                            복잡한 절차 없이 네이버 폼을 통해 간편하게 문의를 남겨주세요.<br/>
                            교육 니즈를 남겨주시면 담당자가 24시간 이내에 맞춤형 제안을 드립니다.
                         </p>

                         <a 
                           href="https://naver.me/GA8FlrCe" 
                           target="_blank" 
                           rel="noreferrer"
                           className="w-full bg-white text-primary-900 font-black text-lg py-5 rounded-xl hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2 group"
                         >
                            문의하기
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                         </a>

                         <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3 text-sm text-primary-200">
                            <CalendarCheck className="w-5 h-5" />
                            <span>평균 응답 시간 : 1시간 이내</span>
                         </div>
                      </div>
                  </div>

               </div>
            </div>
          </div>
        );
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-0 sm:py-8">
      {/* Boxed Layout Container */}
      <div className="w-full max-w-[1200px] bg-white shadow-2xl sm:rounded-xl overflow-hidden min-h-screen flex flex-col border border-gray-200">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main className="flex-grow">
          {renderPage()}
        </main>

        <Contact />
      </div>
    </div>
  );
}

export default App;
