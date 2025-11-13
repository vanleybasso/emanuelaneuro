import React from 'react';
import { FaBrain, FaGraduationCap, FaHeart, FaLightbulb, FaUserGraduate, FaChalkboardTeacher, FaUserFriends, FaUsers, FaArrowRight } from 'react-icons/fa';

const About: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Expertise em 
              <span className="text-primary"> Neuropsicopedagogia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinando conhecimento neurocientífico com práticas pedagógicas 
              inovadoras para transformar realidades educacionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                {/* ADICIONEI AQUI O NOME */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="/avatar.png"
                    alt="Emanuela Schmidt"
                    className="h-16 w-16 rounded-full border-2 border-primary object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-dark">Emanuela Schmidt</h3>
                    <p className="text-primary font-medium">Neuropsicopedagoga</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-dark mb-6">
                  Mentoria com Abordagem 
                  <span className="text-primary"> Humanizada</span>
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Com mais de 8 anos de experiência na área da educação e saúde, 
                  ofereço mentorias que unem o rigor científico à sensibilidade 
                  necessária para atuar com diversidades de aprendizagem.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Meu propósito é empoderar profissionais da educação para 
                  que desenvolvam intervenções eficazes baseadas em evidências 
                  neurocientíficas.
                </p>
                
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex-1 bg-primary text-white text-center py-3 rounded-lg font-medium">
                    +50 Casos
                  </div>
                  <div className="flex-1 bg-secondary text-white text-center py-3 rounded-lg font-medium">
                    100% Online
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-dark text-white rounded-xl p-6 text-center">
                <FaLightbulb className="text-3xl text-secondary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Abordagem Inovadora</h4>
                <p className="text-sm opacity-90">Baseada nas últimas descobertas da neurociência</p>
              </div>
              <div className="bg-primary text-white rounded-xl p-6 text-center">
                <FaGraduationCap className="text-3xl text-white mx-auto mb-4" />
                <h4 className="font-bold mb-2">Formação Continuada</h4>
                <p className="text-sm opacity-90">Desenvolvimento profissional constante</p>
              </div>
              <div className="bg-secondary text-white rounded-xl p-6 text-center">
                <FaHeart className="text-3xl text-white mx-auto mb-4" />
                <h4 className="font-bold mb-2">Acolhimento</h4>
                <p className="text-sm opacity-90">Espaço seguro para crescimento</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 text-center">
                <FaBrain className="text-3xl text-primary mx-auto mb-4" />
                <h4 className="font-bold text-dark mb-2">Neurociência Aplicada</h4>
                <p className="text-sm text-gray-600">Conhecimento teórico e prático</p>
              </div>
            </div>
          </div>

          {/* Público-alvo */}
          <div className="bg-dark rounded-2xl p-8 text-white mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Para quem é a mentoria?
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Profissionais da educação que desejam transformar sua prática através 
                do conhecimento neurocientífico aplicado
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <FaUserGraduate className="text-2xl text-secondary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-white">Neuropsicopedagogos</h4>
                <p className="text-white/80 text-sm">Em formação ou atuantes</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <FaChalkboardTeacher className="text-2xl text-secondary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-white">Pedagogos</h4>
                <p className="text-white/80 text-sm">Educadores e professores</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <FaBrain className="text-2xl text-secondary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-white">Psicólogos</h4>
                <p className="text-white/80 text-sm">Escolares e educacionais</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <FaUserFriends className="text-2xl text-secondary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-white">Educação Inclusiva</h4>
                <p className="text-white/80 text-sm">Profissionais especializados</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <FaUsers className="text-2xl text-secondary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-white">Coordenadores</h4>
                <p className="text-white/80 text-sm">Pedagógicos e educacionais</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <FaGraduationCap className="text-2xl text-secondary mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-white">Pós-graduandos</h4>
                <p className="text-white/80 text-sm">Estudantes de especialização</p>
              </div>
            </div>
          </div>

          {/* Call to Action - Fora do background escuro */}
          <div className="text-center">
            <button
              onClick={() => scrollToSection('investimento')}
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center gap-3 text-lg"
            >
              Quero Começar Agora
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;