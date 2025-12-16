
import React from 'react';
import { INSTRUCTORS } from '../constants';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const Instructors: React.FC = () => {
  return (
    <div className="w-full animate-fade-in bg-white">
       {/* Sophisticated Header */}
       <div className="bg-[#111827] text-white py-28 px-8 relative overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-900/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
          
           <div className="relative z-10 max-w-5xl mx-auto text-center">
             <div className="inline-block px-3 py-1 mb-6 border border-slate-500/30 rounded-full bg-slate-500/10 backdrop-blur-sm">
                <span className="text-slate-300 text-xs font-bold tracking-widest uppercase">Expert Group</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
               최고의 전문가 그룹<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-white">검증된 강사진</span>
             </h1>
             <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
               이론적 깊이와 현업의 통찰력을 겸비했습니다.<br/>
               레퍼런스HRD의 전문 교수진이 리더십 성장을 이끌어갑니다.
             </p>
          </div>
      </div>

      <div className="py-24 px-6 lg:px-12 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {INSTRUCTORS.map((instructor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group relative">
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="p-8 pb-0 flex items-start gap-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-inner relative">
                     {/* Placeholder avatar logic */}
                     <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-400 font-black text-3xl">
                        {instructor.name[0]}
                     </div>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="text-2xl font-black text-gray-900 group-hover:text-primary-700 transition-colors">
                        {instructor.name}
                      </h3>
                      <span className="text-sm font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded text-center min-w-[3rem]">{instructor.title}</span>
                    </div>
                    <div className="text-xs font-medium text-primary-600 tracking-wide uppercase">Leadership Expert</div>
                  </div>
                </div>

                <div className="p-8 pt-8 flex-grow flex flex-col gap-6">
                  
                  {/* Education */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-4 h-4 text-primary-400" />
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">학력</h4>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1.5 pl-6 border-l-2 border-gray-100 ml-2">
                      {instructor.education.map((edu, idx) => (
                        <li key={idx} className="leading-snug">{edu}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Career */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-4 h-4 text-primary-400" />
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">주요 경력</h4>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1.5 pl-6 border-l-2 border-gray-100 ml-2">
                      {instructor.role.map((role, idx) => (
                        <li key={idx} className="leading-snug">{role}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialty */}
                  <div className="mt-auto pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-primary-400" />
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">전문 분야</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialty.map((spec, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg border border-gray-100 group-hover:border-primary-100 group-hover:text-primary-700 group-hover:bg-primary-50 transition-colors">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Instructors;
