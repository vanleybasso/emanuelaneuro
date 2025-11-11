import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ana Carolina Silva',
      role: 'Pedagoga - São Paulo/SP',
      content: 'A mentoria da Emanuela transformou completamente minha prática em sala de aula. Aprendi estratégias baseadas em neurociência que me ajudaram a entender melhor meus alunos com dificuldades de aprendizagem.',
      rating: 5
    },
    {
      name: 'Dr. Carlos Eduardo',
      role: 'Psicólogo Escolar - Rio de Janeiro/RJ',
      content: 'Como psicólogo escolar, a mentoria me proporcionou ferramentas práticas para atuar de forma mais eficaz junto aos professores e estudantes. A Emanuela superou todas as minhas expectativas!',
      rating: 5
    },
    {
      name: 'Mariana Oliveira',
      role: 'Neuropsicopedagoga - Belo Horizonte/MG',
      content: 'Estava em transição de carreira e a mentoria foi fundamental para meu desenvolvimento profissional. A orientação personalizada da Emanuela fez toda a diferença no meu processo.',
      rating: 5
    }
  ];

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index}
            className={index < rating ? "text-secondary" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  // Função para pegar as iniciais do nome
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Histórias de 
            <span className="text-primary"> Transformação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de profissionais que revolucionaram sua prática 
            através da nossa mentoria especializada
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <FaQuoteLeft className="text-primary/20 text-4xl absolute top-4 right-4" />
              <StarRating rating={testimonial.rating} />
              
              <p className="text-gray-600 mb-6 italic relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-sm mr-4 shadow-md border-2 border-secondary">
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <h4 className="font-semibold text-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;