import React from 'react';
import { FaVideo, FaClock, FaWhatsapp, FaUsers } from 'react-icons/fa';

const Pricing: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="investimento" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Invista na sua 
              <span className="text-primary"> Evolução Profissional</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme sua prática clínica com uma mentoria especializada e suporte personalizado
            </p>
          </div>

          {/* Card de Preço Centralizado */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">Mentoria Completa</h3>
              <div className="flex justify-center items-baseline gap-2 mb-4">
                <span className="text-4xl md:text-5xl font-bold text-primary">R$ 790</span>
                <span className="text-gray-500 text-lg">,00</span>
              </div>
              <p className="text-gray-600 mb-2 text-lg">ou 3x de R$ 310,00</p>
              <p className="text-sm text-gray-500">Pagamento à vista no pacote completo</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FaVideo className="text-primary text-lg" />
                <span className="text-gray-700">3 encontros individuais e online</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-primary text-lg" />
                <span className="text-gray-700">1 hora cada encontro</span>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-primary text-lg" />
                <span className="text-gray-700">Acompanhamento por 1 mês via WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <FaUsers className="text-primary text-lg" />
                <span className="text-gray-700">Mentoria 100% individual e personalizada</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('contato')}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer text-lg"
            >
              Quero Iniciar Minha Jornada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;