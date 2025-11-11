import React from 'react';
import { FaWhatsapp, FaHandshake, FaCalendarCheck, FaRocket, FaComments, FaUserCheck, FaChartLine, FaStar } from 'react-icons/fa';

const Methodology: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: FaWhatsapp,
      title: "Conversa Inicial",
      description: "Um bate-papo descontraído para conhecer seus objetivos e desafios atuais",
      duration: "20-30 min",
      color: "primary",
      features: ["Sem compromisso", "Alinhamento total", "Dúvidas iniciais"]
    },
    {
      icon: FaHandshake,
      title: "Plano Personalizado",
      description: "Juntos criamos um roadmap exclusivo para sua evolução profissional",
      duration: "Sob medida",
      color: "secondary",
      features: ["Metas claras", "Cronograma flexível", "Foco nos seus objetivos"]
    },
    {
      icon: FaCalendarCheck,
      title: "Mentoria Prática",
      description: "Sessões semanais com cases reais e aplicação imediata do conteúdo",
      duration: "1h30/semana",
      color: "primary",
      features: ["Casos reais", "Aplicação prática", "Feedback constante"]
    },
    {
      icon: FaRocket,
      title: "Implementação",
      description: "Acompanhamento contínuo para garantir resultados tangíveis",
      duration: "Suporte total",
      color: "secondary",
      features: ["WhatsApp direto", "Ajustes em tempo real", "Resultados mensuráveis"]
    }
  ];

  return (
    <section id="metodologia" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Impactante */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6 border border-gray-200">
              <FaStar className="text-secondary text-xl" />
              <span className="text-dark font-semibold">Método Comprovado</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Como vamos 
              <span className="text-primary"> trabalhar juntos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Um processo estruturado em 4 etapas simples para sua evolução profissional 
              na neuropsicopedagogia
            </p>
          </div>

          {/* Grid de Etapas - 2 por linha no mobile, 4 no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-gray-100 group"
              >
                {/* Número e Ícone */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-3xl font-bold ${
                    step.color === 'primary' ? 'text-primary' : 'text-secondary'
                  } opacity-20 group-hover:opacity-100 transition-all duration-300`}>
                    {index + 1}
                  </div>
                  <div className={`${
                    step.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                  } rounded-xl p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="text-2xl" />
                  </div>
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-dark mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Duração */}
                <div className={`inline-block ${
                  step.color === 'primary' ? 'bg-primary/5 text-primary' : 'bg-secondary/5 text-secondary'
                } rounded-full px-4 py-2 text-sm font-semibold mb-6`}>
                  {step.duration}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        step.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Diferenciais em Destaque */}
          <div className="bg-dark rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <FaComments className="text-3xl text-secondary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3">Comunicação Direta</h4>
                <p className="text-white/80 text-sm">
                  WhatsApp exclusivo para tirar dúvidas entre as sessões
                </p>
              </div>
              <div className="text-center">
                <FaUserCheck className="text-3xl text-secondary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3">100% Personalizado</h4>
                <p className="text-white/80 text-sm">
                  Conteúdo adaptado à sua realidade e objetivos específicos
                </p>
              </div>
              <div className="text-center">
                <FaChartLine className="text-3xl text-secondary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-3">Resultados Reais</h4>
                <p className="text-white/80 text-sm">
                  Métricas claras para acompanhar seu desenvolvimento
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final Impactante */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200">
              <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Vamos começar sua transformação?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Agende uma conversa sem compromisso e descubra como a mentoria 
                pode acelerar sua carreira na neuropsicopedagogia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('contato')}
                  className="btn-primary text-lg px-8 py-4 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  Agendar Conversa Inicial
                </button>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="btn-secondary text-lg px-8 py-4 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  Ver Planos Disponíveis
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-6">
                ⚡ Sem custo • Sem compromisso • 20 minutos
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;