import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Avatar com nome - AGORA VISÍVEL NO MOBILE TAMBÉM */}
          <div className="flex items-center gap-3">
            <img 
              src="/avatar.png"
              alt="Emanuela Schmidt - Neuropsicopedagoga" 
              className="h-12 w-12 rounded-full border-2 border-primary object-cover"
            />
            <div className="block"> {/* Removi o hidden sm:block */}
              <div className="font-semibold text-dark text-sm">Emanuela Schmidt</div>
              <div className="text-xs text-gray-600">Neuropsicopedagoga</div>
            </div>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-dark hover:text-secondary cursor-pointer transition-all duration-300 font-medium relative group"
            >
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-dark hover:text-secondary cursor-pointer transition-all duration-300 font-medium relative group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-dark hover:text-secondary cursor-pointer transition-all duration-300 font-medium relative group"
            >
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-dark hover:text-secondary cursor-pointer transition-all duration-300 font-medium relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-dark"></div>
              <div className="w-6 h-0.5 bg-dark"></div>
              <div className="w-6 h-0.5 bg-dark"></div>
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 bg-white rounded-lg p-4 shadow-lg">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block text-dark hover:text-secondary cursor-pointer w-full text-left py-2 font-medium transition-colors border-b border-gray-100 hover:border-secondary"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="block text-dark hover:text-secondary cursor-pointer w-full text-left py-2 font-medium transition-colors border-b border-gray-100 hover:border-secondary"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="block text-dark hover:text-secondary cursor-pointer w-full text-left py-2 font-medium transition-colors border-b border-gray-100 hover:border-secondary"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block text-dark hover:text-secondary cursor-pointer w-full text-left py-2 font-medium transition-colors"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;