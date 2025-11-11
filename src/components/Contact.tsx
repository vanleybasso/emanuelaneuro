import React, { useState } from 'react';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane 
} from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    });
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Vamos 
              <span className="text-primary"> Conversar</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato para agendar uma sessão experimental gratuita 
              ou tirar suas dúvidas sobre as mentorias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-2xl font-bold text-dark mb-8">
                Entre em Contato
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaWhatsapp className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">WhatsApp</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-sm text-primary font-medium">Respondemos em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaEnvelope className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Email</h4>
                    <p className="text-gray-600">contato@neuromentoria.com</p>
                    <p className="text-sm text-primary font-medium">Respondemos em até 48h</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-dark/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-dark text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Atendimento</h4>
                    <p className="text-gray-600">100% Online</p>
                    <p className="text-sm text-primary font-medium">Todo o Brasil e exterior</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FaClock className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h-18h</p>
                    <p className="text-sm text-primary font-medium">Sábado: 8h-12h</p>
                  </div>
                </div>
              </div>

              {/* Sessão Experimental */}
              <div className="bg-gradient-to-r from-primary to-dark rounded-2xl p-6 text-white">
                <h4 className="font-bold text-xl mb-3">Sessão Experimental Gratuita</h4>
                <p className="text-white/90 mb-4 text-sm">
                  Agende uma sessão de 30 minutos para conhecer a metodologia 
                  e tirar suas dúvidas sobre a mentoria.
                </p>
                <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-lg" />
                  Agendar Sessão Experimental
                </button>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaPaperPlane className="text-primary text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-dark">
                  Envie sua Mensagem
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-gray-50"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-gray-50"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-gray-50"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-gray-50"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="individual">Mentoria Individual</option>
                    <option value="grupo">Mentoria em Grupo</option>
                    <option value="workshop">Workshop Temático</option>
                    <option value="duvida">Tirar Dúvidas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-gray-50"
                    placeholder="Conte-me sobre seus objetivos e desafios profissionais..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-lg" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;