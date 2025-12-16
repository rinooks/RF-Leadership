
import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1a1f2e] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Brand & Certifications */}
          <div className="lg:w-1/3">
            <div className="mb-6">
              <span className="text-2xl font-black tracking-tighter text-white">REFERENCE HRD</span>
            </div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              고객의 물음표를 검증된 HRD 레퍼런스와 솔루션으로 해결합니다.<br/>
              성공적인 교육 운영을 위한 최고의 파트너가 되겠습니다.
            </p>
            <div className="flex gap-3">
               <div className="px-3 py-1.5 border border-gray-700 rounded-lg text-xs font-medium text-gray-400">여성기업 인증</div>
               {/* Venture Certification Removed */}
            </div>
          </div>

          {/* Contact Info Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="group">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 group-hover:text-primary-400 transition-colors">문의</h4>
              <div className="flex items-center gap-3 mb-2">
                 <Phone className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                 <span className="text-lg font-bold">070-4647-4757</span>
              </div>
              <div className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                 <span className="text-lg font-bold">help@referencehrd.com</span>
              </div>
            </div>

            <div className="group">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 group-hover:text-primary-400 transition-colors">주소</h4>
              <div className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-gray-400 mt-1 group-hover:text-primary-400 transition-colors" />
                 <span className="text-sm text-gray-300 leading-relaxed">
                   서울특별시 강서구 마곡중앙로 161-8<br/>두산더랜드파크 A동 410호
                 </span>
              </div>
            </div>

             <div className="group md:col-span-2 border-t border-gray-800 pt-8 mt-4">
               <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <a href="http://www.referencehrd.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
                    <Globe className="w-4 h-4" />
                    www.referencehrd.com
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-xs text-gray-600">
                    © 2025 REFERENCE HRD Inc. All Rights Reserved.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
