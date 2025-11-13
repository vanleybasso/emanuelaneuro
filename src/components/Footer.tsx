import React from 'react';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import logo from '/3.png'; // ajuste o caminho se necessário

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
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left justify-items-center">
          
          {/* Brand */}
          <div className="md:col-span-1 max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img 
                src={logo} 
                alt="Logo Emanuela Schmidt" 
                className="w-14 h-14 object-contain rounded-full"
              />
              <h3 className="text-2xl font-bold text-white">
                Emanuela Schmidt
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especializada em neuropsicopedagogia, oferecendo mentorias 
              que transformam práticas profissionais através do conhecimento 
              neurocientífico aplicado à educação.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/emanuela.schmidt.neuropp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c9b28d] transition-colors p-2 bg-white/5 rounded-lg"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/emanuela-schmidt-alves-4713361b2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c9b28d] transition-colors p-2 bg-white/5 rounded-lg"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a 
                href="https://wa.me/5554991217031" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c9b28d] transition-colors p-2 bg-white/5 rounded-lg"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="max-w-xs">
            <h4 className="text-lg font-semibold mb-4 text-white">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', id: 'inicio' },
                { label: 'Sobre', id: 'sobre' },
                { label: 'Metodologia', id: 'metodologia' },
                { label: 'Planos', id: 'investimento' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[#c9b28d] cursor-pointer transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="max-w-xs">
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-center md:justify-start items-center gap-2">
                <FaEnvelope className="text-[#c9b28d] text-sm" />
                emanuelaschmdt@gmail.com
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <FaWhatsapp className="text-[#c9b28d] text-sm" />
                (54) 99121-7031
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <FaMapMarkerAlt className="text-[#c9b28d] text-sm" />
                Atendimento 100% Online
              </li>
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Emanuela Schmidt. Todos os direitos reservados.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            Feito com carinho para transformar vidas através da educação
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
