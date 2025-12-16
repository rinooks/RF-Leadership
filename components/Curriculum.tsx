
import React, { useState } from 'react';
import { CURRICULUM_TRACKS } from '../constants';
import { Clock, BookOpen, Check, ChevronRight, Layers } from 'lucide-react';

const Curriculum: React.FC = () => {
  const [activeTrackId, setActiveTrackId] = useState(CURRICULUM_TRACKS[0].id);
  const [activeProgramId, setActiveProgramId] = useState<string | null>(null);

  const activeTrack = CURRICULUM_TRACKS.find(t => t.id === activeTrackId);
  
  // Set default active program when track changes
  React.useEffect(() => {
    if (activeTrack) {
      setActiveProgramId(activeTrack.programs[0].id);
    }
  }, [activeTrackId]);

  const activeProgram = activeTrack?.programs.find(p => p.id === activeProgramId);

  return (
    <div className="w-full animate-fade-in bg-white">
       {/* Sophisticated Header */}
       <div className="bg-[#111827] text-white py-28 px-8 relative overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
             <div className="inline-block px-3 py-1 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
                <span className="text-purple-300 text-xs font-bold tracking-widest uppercase">Modules & Programs</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
               맞춤형<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200">리더십 커리큘럼</span>
             </h1>
             <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
               계층별 리더십 이슈에 최적화된 맞춤형 교육 모듈을 제공합니다.<br/>
               이론 학습과 실전 스킬 훈련의 균형 잡힌 커리큘럼을 확인하세요.
             </p>
          </div>
      </div>

      <div className="py-20 px-6 lg:px-12 bg-gray-50 min-h-[800px]">
          {/* Main Track Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {CURRICULUM_TRACKS.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrackId(track.id)}
                className={`flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-300 border ${
                  activeTrackId === track.id
                    ? 'bg-white border-primary-500 shadow-xl shadow-primary-900/5 transform -translate-y-1 relative overflow-hidden'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-primary-200 hover:bg-primary-50/30'
                }`}
              >
                {activeTrackId === track.id && <div className="absolute top-0 left-0 w-full h-1 bg-primary-500"></div>}
                <span className={`text-xl font-bold mb-2 ${activeTrackId === track.id ? 'text-gray-900' : 'text-gray-400'}`}>
                  {track.title}
                </span>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  activeTrackId === track.id ? 'bg-primary-50 text-primary-700' : 'bg-gray-100 text-gray-400'
                }`}>
                  {track.target}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* Sidebar: Programs List */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
               <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
                 <div className="p-6 bg-gray-900 text-white border-b border-gray-800">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                       <Layers className="w-5 h-5 text-primary-400" />
                       세부 프로그램
                    </h3>
                    <p className="text-xs text-gray-400 mt-1.5 pl-7">총 {activeTrack?.programs.length}개의 프로그램으로 구성</p>
                 </div>
                 <div className="flex flex-col p-2 bg-gray-50">
                    {activeTrack?.programs.map((program) => (
                      <button
                        key={program.id}
                        onClick={() => setActiveProgramId(program.id)}
                        className={`p-4 text-left transition-all rounded-xl mb-1 flex justify-between items-center group ${
                          activeProgramId === program.id 
                            ? 'bg-white text-primary-700 shadow-sm border border-gray-100' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <span className={`font-bold text-sm ${activeProgramId === program.id ? 'text-primary-700' : ''}`}>
                          {program.title}
                        </span>
                        {activeProgramId === program.id && <ChevronRight className="w-4 h-4 text-primary-500" />}
                      </button>
                    ))}
                 </div>
               </div>
            </div>

            {/* Main Content: Modules */}
            <div className="w-full lg:w-2/3">
               {activeProgram && (
                 <div className="animate-fade-in">
                    <div className="mb-10 pb-6 border-b border-gray-200">
                       <span className="text-primary-600 font-bold text-xs uppercase tracking-wider mb-2 block">Program Detail</span>
                       <h2 className="text-3xl font-black text-gray-900 mb-4">{activeProgram.title}</h2>
                       <p className="text-gray-600 text-lg leading-relaxed">{activeProgram.description}</p>
                    </div>

                    <div className="grid gap-6">
                      {activeProgram.modules.map((module) => (
                        <div key={module.code} className="bg-white rounded-2xl p-0 border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                               {/* Module Code Side */}
                               <div className="bg-gray-50 p-6 flex flex-col justify-center items-center md:w-32 border-b md:border-b-0 md:border-r border-gray-100 group-hover:bg-primary-50/30 transition-colors">
                                  <span className="text-2xl font-black text-gray-300 group-hover:text-primary-300 transition-colors">{module.code}</span>
                                  <div className="mt-3 flex flex-col gap-2 w-full">
                                    <div className="flex items-center justify-center text-[10px] font-bold text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                                      {module.duration}
                                    </div>
                                    <div className="flex items-center justify-center text-[10px] font-bold text-gray-500 bg-white px-2 py-1 rounded border border-gray-200 text-center">
                                      {module.method}
                                    </div>
                                  </div>
                               </div>
                               
                               {/* Content Side */}
                               <div className="p-6 md:p-8 flex-grow">
                                  <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-primary-700 transition-colors">
                                    {module.title}
                                  </h3>
                                  <ul className="grid grid-cols-1 gap-3">
                                    {module.description.map((desc, idx) => (
                                      <li key={idx} className="flex items-start text-gray-600 text-sm font-medium">
                                        <div className="w-5 h-5 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                          <Check className="w-3 h-3" />
                                        </div>
                                        <span className="leading-snug pt-0.5">{desc}</span>
                                      </li>
                                    ))}
                                  </ul>
                               </div>
                            </div>
                        </div>
                      ))}
                    </div>
                 </div>
               )}
            </div>

          </div>
      </div>
    </div>
  );
};

export default Curriculum;
