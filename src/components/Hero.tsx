import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Coluna do Texto */}
          <div className="text-left lg:pl-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-gray-200">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-dark text-sm font-medium">Mentoria Especializada em Neuropsicopedagogia</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 leading-tight">
              Transforme sua 
              <span className="text-primary"> Prática </span>
              Profissional
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Desenvolva habilidades neuropsicopedagógicas com mentoria especializada 
              e eleve seu impacto na educação
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-start">
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-primary text-base shadow-lg hover:shadow-xl w-full sm:w-auto cursor-pointer"
              >
                Iniciar Minha Jornada
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="btn-secondary text-base shadow-lg hover:shadow-xl w-full sm:w-auto cursor-pointer"
              >
                Conhecer a Metodologia
              </button>
            </div>
            
            {/* Estatísticas - ATUALIZADAS COM + */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-left bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <div className="text-xl md:text-2xl font-bold text-primary mb-1">+100</div>
                <div className="text-dark font-medium text-xs">Profissionais</div>
              </div>
              <div className="text-left bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                <div className="text-xl md:text-2xl font-bold text-secondary mb-1">+8 anos</div>
                <div className="text-dark font-medium text-xs">Experiência</div>
              </div>
            </div>
          </div>

          {/* Coluna da Foto - OCULTA NO MOBILE */}
          <div className="relative lg:pr-8 hidden lg:block">
            <div className="relative mx-auto max-w-md">
              {/* Foto principal - limpa e direta */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="perfil.jpg"
                  alt="Emanuela Schmidt - Neuropsicopedagoga"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;