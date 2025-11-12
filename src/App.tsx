import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Methodology from './components/Methodology';
import HowWeWork from './components/HowWeWork';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <Hero />
      <About />
      <Methodology />
      <HowWeWork />
      <Testimonials/>
      <Pricing />
      <Footer/>
    </div>
  );
}

export default App;