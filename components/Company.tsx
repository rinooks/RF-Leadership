
import React from 'react';
import { COMPANY_HISTORY, CLIENTS } from '../constants';
import { Award, Building2, Users2, MapPin, Navigation } from 'lucide-react';

const Company: React.FC = () => {
  return (
    <div className="w-full animate-fade-in bg-white">
       {/* Sophisticated Header */}
       <div className="bg-[#111827] text-white py-28 px-8 relative overflow-hidden">
           {/* Abstract Background Elements */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
           
           <div className="relative z-10 max-w-5xl mx-auto text-center">
             <div className="inline-block px-3 py-1 mb-6 border border-primary-500/30 rounded-full bg-primary-500/10 backdrop-blur-sm">
                <span className="text-primary-300 text-xs font-bold tracking-widest uppercase">About Us</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
               HRD의 새로운 기준,<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">레퍼런스HRD</span>
             </h1>
             <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
               우리는 고객의 성장을 위해 끊임없이 질문하고 검증합니다.<br/>
               다양한 시도와 도전으로 매년 꾸준히 성장하는 파트너가 되겠습니다.
             </p>
          </div>
      </div>

      <div className="py-24 px-6 lg:px-12">
          
          {/* Company Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
            <div className="bg-white p-10 rounded-3xl text-center border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                 <Building2 className="w-8 h-8" />
               </div>
               <h3 className="text-lg font-bold text-gray-900 mb-2">설립일</h3>
               <p className="text-gray-500 font-medium bg-gray-50 inline-block px-4 py-1.5 rounded-full text-sm">2018년 08월 08일</p>
            </div>
            <div className="bg-white p-10 rounded-3xl text-center border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                 <Users2 className="w-8 h-8" />
               </div>
               <h3 className="text-lg font-bold text-gray-900 mb-2">구성원</h3>
               <p className="text-gray-500 font-medium bg-gray-50 inline-block px-4 py-1.5 rounded-full text-sm">정규직 5명 / 자문위원 6명</p>
            </div>
            <div className="bg-white p-10 rounded-3xl text-center border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                 <Award className="w-8 h-8" />
               </div>
               <h3 className="text-lg font-bold text-gray-900 mb-2">인증 현황</h3>
               {/* Venture Certification Removed */}
               <p className="text-gray-500 font-medium bg-gray-50 inline-block px-4 py-1.5 rounded-full text-sm">여성기업 인증</p>
            </div>
          </div>

          {/* History */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-gray-900">주요 연혁</h2>
              <div className="w-12 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="max-w-5xl mx-auto relative border-l-2 border-gray-100 ml-4 md:ml-0 space-y-12 md:space-y-16">
              {COMPANY_HISTORY.map((item, index) => (
                <div key={index} className="relative md:pl-0 group">
                  {/* Timeline Dot (Mobile: Left, Desktop: Center aligned logic requires different layout, keeping simple vertical for now but adjusted) */}
                  <div className="absolute -left-[9px] md:left-0 md:-translate-x-[5px] top-0 md:top-6 w-5 h-5 rounded-full bg-white border-4 border-gray-300 group-hover:border-primary-500 group-hover:scale-125 transition-all shadow-sm z-10"></div>
                  
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 pl-8 md:pl-12">
                    {/* Year Column: Increased width to prevent overlap */}
                    <div className="md:w-48 md:min-w-[192px] flex-shrink-0 pt-0.5 md:text-right">
                       <span className="text-3xl font-black text-gray-300 group-hover:text-primary-600 transition-colors duration-300 block leading-none">
                         {item.year}
                       </span>
                    </div>
                    {/* Content Column */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm w-full group-hover:shadow-lg group-hover:border-primary-100 transition-all hover:-translate-y-1">
                       <ul className="space-y-3">
                         {item.events.map((event, idx) => (
                           <li key={idx} className="text-gray-700 text-sm leading-relaxed flex items-start">
                             <span className="w-1.5 h-1.5 bg-primary-300 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                             <span className="break-keep">{event}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Major Clients */}
          <div className="mb-32">
             <div className="text-center mb-12">
                <span className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-3 block">Partnership</span>
                <h2 className="text-3xl font-black text-gray-900">주요 고객사</h2>
                <p className="text-gray-500 mt-4">대한민국을 이끄는 주요 기업들이 레퍼런스HRD를 신뢰합니다.</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {CLIENTS.map((client, idx) => (
                   <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-center gap-3 hover:border-primary-200 hover:shadow-md transition-all duration-300 group cursor-default">
                      <div className="p-1.5 bg-gray-50 rounded text-gray-400 group-hover:text-primary-600 transition-colors">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-600 text-sm tracking-wide group-hover:text-gray-900 transition-colors">{client}</span>
                   </div>
                ))}
             </div>
             <div className="text-center mt-10">
               <span className="inline-block px-8 py-3 bg-gray-50 rounded-full text-gray-500 text-sm font-bold border border-gray-100">
                 외 40여개 대기업 및 공공기관 파트너십 보유
               </span>
             </div>
          </div>

          {/* Location / Map Section */}
          <div className="bg-white border-t border-gray-100 pt-20">
             <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                   <h2 className="text-3xl font-black text-gray-900 mb-8">오시는 길</h2>
                   <div className="space-y-8">
                      <div>
                         <h4 className="flex items-center text-lg font-bold text-gray-900 mb-3">
                            <MapPin className="w-5 h-5 text-primary-600 mr-2" /> 주소
                         </h4>
                         <p className="text-gray-600 leading-relaxed pl-7">
                            서울특별시 강서구 마곡중앙로 161-8<br/>
                            두산더랜드파크 A동 410호
                         </p>
                      </div>
                      <div>
                         <h4 className="flex items-center text-lg font-bold text-gray-900 mb-3">
                            <Navigation className="w-5 h-5 text-primary-600 mr-2" /> 대중교통
                         </h4>
                         <div className="pl-7 space-y-2">
                            <p className="text-gray-600 text-sm">
                               <span className="font-bold text-[#A05C2B] mr-2">9호선</span>
                               마곡나루역 1번 출구 (도보 5분)
                            </p>
                            <p className="text-gray-600 text-sm">
                               <span className="font-bold text-[#00A4E3] mr-2">공항철도</span>
                               마곡나루역 1번 출구 (도보 5분)
                            </p>
                         </div>
                      </div>
                      <div className="pl-7 pt-4">
                         <a 
                           href="https://map.naver.com/p/search/%EB%91%90%EC%82%B0%EB%8D%94%EB%9E%9C%EB%93%9C%ED%8C%8C%ED%81%AC" 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-flex items-center justify-center px-6 py-3 bg-[#03C75A] text-white font-bold rounded-xl hover:bg-[#02b351] transition-colors shadow-md w-full md:w-auto hover:-translate-y-0.5"
                         >
                            네이버 지도 보기
                         </a>
                      </div>
                   </div>
                </div>
                
                {/* Google Map Implementation */}
                <div className="md:w-2/3 h-[450px] bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 relative group shadow-lg">
                   <iframe
                     width="100%"
                     height="100%"
                     title="Reference HRD Map"
                     className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                     style={{ border: 0 }}
                     loading="lazy"
                     allowFullScreen
                     referrerPolicy="no-referrer-when-downgrade"
                     src="https://maps.google.com/maps?q=서울특별시%20강서구%20마곡중앙로%20161-8%20두산더랜드파크&t=m&z=16&output=embed&iwloc=near"
                   ></iframe>
                </div>
             </div>
          </div>

      </div>
    </div>
  );
};

export default Company;
