
import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '홈', id: 'home' },
    { name: 'AI 리더십 솔루션', id: 'ai-leadership', isSpecial: true },
    { name: '프로그램 개요', id: 'overview' },
    { name: '커리큘럼', id: 'curriculum' },
    { name: '강사진', id: 'instructors' },
    { name: '운영 시스템', id: 'operation' },
    { name: '회사 소개', id: 'company' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="w-full px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Text Only */}
          <div className="cursor-pointer group" onClick={() => handleNavClick('home')}>
             <span className="text-2xl font-black tracking-tighter text-gray-900 group-hover:text-primary-700 transition-colors">
               REFERENCE HRD
             </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-lg text-[15px] font-bold transition-all flex items-center gap-1.5 ${
                  currentPage === link.id 
                    ? 'text-primary-700 bg-primary-50' 
                    : link.isSpecial 
                        ? 'text-primary-600 hover:text-primary-700 hover:bg-primary-50' 
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.isSpecial && <Sparkles className="w-4 h-4" />}
                {link.name}
              </button>
            ))}
            <div className="w-px h-6 bg-gray-200 mx-3"></div>
            <button 
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2.5 rounded-full font-bold text-sm transition-all bg-gray-900 text-white hover:bg-primary-700 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              문의하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-2 animate-fade-in-down">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left font-bold py-3 px-4 rounded-xl transition-colors flex items-center gap-2 ${
                 currentPage === link.id 
                 ? 'bg-primary-50 text-primary-700' 
                 : link.isSpecial 
                    ? 'text-primary-600 bg-primary-50/50'
                    : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link.isSpecial && <Sparkles className="w-4 h-4" />}
              {link.name}
            </button>
          ))}
          <div className="h-px bg-gray-100 my-2"></div>
          <button 
            onClick={() => handleNavClick('contact')}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold"
          >
            교육 문의하기
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
