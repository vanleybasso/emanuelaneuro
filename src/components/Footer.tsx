import React from 'react';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook, 
  FaYoutube, 
  FaHeart, 
  FaBrain,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaBrain className="text-secondary text-2xl" />
              <h3 className="text-2xl font-bold text-white">
                NeuroMentoria
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especializada em neuropsicopedagogia, oferecendo mentorias 
              que transformam práticas profissionais através do conhecimento 
              neurocientífico aplicado à educação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors p-2 bg-white/5 rounded-lg">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors p-2 bg-white/5 rounded-lg">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors p-2 bg-white/5 rounded-lg">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors p-2 bg-white/5 rounded-lg">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-secondary cursor-pointer transition-colors text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-secondary cursor-pointer transition-colors text-left"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-400 hover:text-secondary cursor-pointer transition-colors text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-secondary cursor-pointer transition-colors text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Nossos Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-secondary transition-colors cursor-pointer">Mentoria Individual</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Mentoria em Grupo</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Workshops Temáticos</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Supervisão de Casos</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Formação Continuada</li>
            </ul>
          </div>

          {/* Contato Footer */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-secondary text-sm" />
                contato@neuromentoria.com
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-secondary text-sm" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-secondary text-sm" />
                Segunda a Sexta: 8h-18h
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-secondary text-sm" />
                Atendimento 100% Online
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} NeuroMentoria. Todos os direitos reservados.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            Feito com <FaHeart className="text-secondary mx-1" /> para transformar vidas através da educação
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;