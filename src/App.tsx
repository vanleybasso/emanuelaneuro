
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Methodology from './components/Methodology'; // Importe a nova seção

function App() {
  return (
    <div className="min-h-screen bg-white">
  <Header/>
      <Hero />
      <About />
      <Methodology/>
      <Testimonials/>
      <Services/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;