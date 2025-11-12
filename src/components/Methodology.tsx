import React from 'react';
import { FaBrain, FaHeart, FaBook, FaTools, FaGraduationCap, FaHandshake } from 'react-icons/fa';

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Minha 
              <span className="text-primary"> Metodologia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrando ciência, prática clínica e olhar humanizado para 
              transformar conhecimento em ação
            </p>
          </div>

          {/* Pilares da Metodologia */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBrain className="text-2xl text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-3 text-lg">Fundamentação Teórica Sólida</h3>
              <p className="text-gray-600 text-sm">
                Baseada na Neuropsicopedagogia, ABA, Funções Executivas e Transtornos do Neurodesenvolvimento
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBook className="text-2xl text-secondary" />
              </div>
              <h3 className="font-bold text-dark mb-3 text-lg">Reflexão sobre a Prática</h3>
              <p className="text-gray-600 text-sm">
                Compreensão do porquê das escolhas clínicas e transformação da teoria em intervenção efetiva
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTools className="text-2xl text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-3 text-lg">Ferramentas Aplicáveis</h3>
              <p className="text-gray-600 text-sm">
                Protocolos, modelos de anamnese, instrumentos avaliativos e relatórios adaptáveis
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl text-secondary" />
              </div>
              <h3 className="font-bold text-dark mb-3 text-lg">Acolhimento e Escuta</h3>
              <p className="text-gray-600 text-sm">
                Respeito ao momento de cada profissional e valorização do processo contínuo de aprendizagem
              </p>
            </div>
          </div>

          {/* Abordagem Detalhada */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">
                O que você encontra na mentoria:
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaBrain className="text-primary text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Base Científica Robusta</h4>
                    <p className="text-gray-600 text-sm">
                      Fundamentação em Neuropsicopedagogia, Análise do Comportamento Aplicada (ABA) 
                      e estudos sobre Funções Executivas e Transtornos do Neurodesenvolvimento
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-secondary text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Prática Reflexiva</h4>
                    <p className="text-gray-600 text-sm">
                      Análise crítica das escolhas clínicas e desenvolvimento da capacidade 
                      de transformar teoria em intervenções eficazes e personalizadas
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaTools className="text-primary text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Instrumentos Práticos</h4>
                    <p className="text-gray-600 text-sm">
                      Modelos de anamnese, contrato, instrumentos avaliativos e relatórios 
                      que podem ser adaptados à realidade de cada atendimento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <FaHandshake className="text-2xl text-secondary" />
                <h3 className="text-xl font-bold text-white">Meu Compromisso</h3>
              </div>
              
              <p className="text-white/90 leading-relaxed mb-6">
                Em cada mentoria, meu compromisso é te conduzir por um caminho possível, 
                ético e embasado, fortalecendo tua prática e tua confiança como profissional da área.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-white/80 text-sm">Caminho possível e estruturado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-white/80 text-sm">Abordagem ética e embasada cientificamente</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-white/80 text-sm">Fortalecimento da prática profissional</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-white/80 text-sm">Desenvolvimento da confiança clínica</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-white/80 text-sm italic">
                  "Conduzindo profissionais por um caminho possível, ético e embasado, 
                  fortalecendo a prática e a confiança na atuação profissional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;