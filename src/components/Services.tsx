import React from 'react';
import { FaUsers, FaUser, FaChalkboardTeacher, FaVideo, FaCheck } from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaUser className="text-3xl text-primary" />,
      title: 'Mentoria Individual',
      description: 'Acompanhamento personalizado 1:1 com foco nas suas necessidades específicas',
      features: [
        'Sessões semanais de 1h',
        'Plano de desenvolvimento personalizado',
        'Análise de casos da sua prática',
        'Suporte por WhatsApp',
        'Material exclusivo'
      ],
      price: 'R$ 297/mês',
      popular: false,
      color: 'primary'
    },
    {
      icon: <FaUsers className="text-3xl text-secondary" />,
      title: 'Mentoria em Grupo',
      description: 'Aprendizado coletivo com troca de experiências entre profissionais',
      features: [
        'Encontros semanais em grupo',
        'Comunidade exclusiva',
        'Workshops mensais',
        'Plantão de dúvidas',
        'Network profissional'
      ],
      price: 'R$ 197/mês',
      popular: true,
      color: 'secondary'
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-dark" />,
      title: 'Workshops Temáticos',
      description: 'Formações intensivas sobre temas específicos da neuropsicopedagogia',
      features: [
        'Carga horária de 4h',
        'Material didático completo',
        'Certificado de participação',
        'Casos práticos',
        'Exercícios aplicados'
      ],
      price: 'R$ 147/workshop',
      popular: false,
      color: 'dark'
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Nossos 
            <span className="text-primary"> Programas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o formato que melhor se adapta ao seu momento profissional 
            e alcance resultados transformadores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 relative transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl ${
                service.popular ? 'ring-2 ring-secondary' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${
                  service.color === 'primary' ? 'bg-primary/10' : 
                  service.color === 'secondary' ? 'bg-secondary/10' : 'bg-dark/10'
                } rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="text-3xl font-bold text-dark mb-2">
                  {service.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full ${
                service.color === 'primary' ? 'btn-primary' : 
                service.color === 'secondary' ? 'btn-secondary' : 'bg-dark hover:bg-gray-800 text-white'
              } font-medium py-3 px-6 rounded-lg transition-colors`}>
                Quero Este Plano
              </button>
            </div>
          ))}
        </div>

        {/* Bônus */}
        <div className="mt-16 bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark mb-4">
              <span className="text-primary">Bônus Exclusivo</span> para Todos os Planos
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
              <FaVideo className="text-2xl text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-dark mb-2">Videoaulas Exclusivas</h4>
                <p className="text-gray-600">Acesso a conteúdo gravado sobre temas relevantes da neuropsicopedagogia</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-lg">
              <FaChalkboardTeacher className="text-2xl text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-dark mb-2">Material de Apoio</h4>
                <p className="text-gray-600">Protocolos, formulários e instrumentos validados para sua prática</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;