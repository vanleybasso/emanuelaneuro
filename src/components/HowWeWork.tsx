import React from 'react';
import { FaWhatsapp, FaCheck, FaUsers, FaChartLine, FaFileAlt, FaHandHoldingHeart } from 'react-icons/fa';

const HowWeWork: React.FC = () => {
  return (
    <section id="como-trabalhamos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Como vamos trabalhar 
              <span className="text-primary"> juntas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma jornada estruturada em 4 passos para transformar sua prática clínica
            </p>
          </div>

          {/* Introdução */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 mb-16 text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              A mentoria foi pensada para ser um espaço de acolhimento, construção e prática real, 
              onde caminhamos juntas, passo a passo, para que você se sinta segura, estruturada 
              e confiante na sua atuação clínica.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Tudo acontece de forma online e individual, com encontros planejados para atender 
              às tuas necessidades e fortalecer teu olhar profissional.
            </p>
          </div>

          {/* Etapas da Mentoria */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Etapa 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaHandHoldingHeart className="text-2xl text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary font-semibold">Etapa 1</div>
                  <h3 className="text-xl font-bold text-dark">Início da Prática</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                No primeiro encontro, vamos nos conhecer, entender tua trajetória e tua demanda atual.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Aqui, estruturamos toda a base do atendimento clínico: contrato, anamnese e acolhimento da família.
                É o momento de organizar o início da tua atuação e alinhar tua prática com ética e clareza.
              </p>
            </div>

            {/* Etapa 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <FaChartLine className="text-2xl text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-secondary font-semibold">Etapa 2</div>
                  <h3 className="text-xl font-bold text-dark">Avaliação na Prática</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                No segundo encontro, mergulhamos nos instrumentos avaliativos, aprendendo o que aplicar, 
                como corrigir e interpretar os resultados de forma segura e embasada.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Esse é o encontro que transforma a avaliação em uma ferramenta estratégica dentro do processo clínico.
              </p>
            </div>

            {/* Etapa 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaFileAlt className="text-2xl text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary font-semibold">Etapa 3</div>
                  <h3 className="text-xl font-bold text-dark">Intervenção e Relatório</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                No terceiro encontro, trabalhamos o planejamento das intervenções, a estruturação do 
                relatório clínico e os critérios para o processo de alta do paciente.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Você aprende a organizar e sustentar o percurso terapêutico do início ao fim, 
                com segurança e clareza.
              </p>
            </div>
          </div>

          {/* Acompanhamento WhatsApp */}
          <div className="bg-dark rounded-2xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <FaWhatsapp className="text-3xl text-secondary" />
                  <h3 className="text-2xl font-bold text-white">Implementação com Acompanhamento</h3>
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  Após os encontros, você segue acompanhada. Durante o período da mentoria, 
                  ofereço suporte direto via WhatsApp por mais 1 mês para te auxiliar na 
                  implementação prática do que foi aprendido.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-secondary text-lg" />
                    <span className="text-white/80">Tirar dúvidas pontuais sobre atendimentos e documentos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-secondary text-lg" />
                    <span className="text-white/80">Enviar esboços de relatórios, protocolos e registros para devolutiva rápida</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-secondary text-lg" />
                    <span className="text-white/80">Receber orientações personalizadas e incentivo constante</span>
                  </div>
                </div>

                <p className="text-white/80 mt-6 italic">
                  Assim, cada passo que você dá na sua prática é validado e apoiado, garantindo 
                  uma transição leve e segura da teoria para a prática.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-center">
                  <FaUsers className="text-4xl text-secondary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-4">O resultado:</h4>
                  <p className="text-white/90 leading-relaxed">
                    Uma trajetória clínica construída com segurança técnica, clareza de processos 
                    e confiança profissional, com o suporte de quem vive o dia a dia da prática 
                    neuropsicopedagógica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;