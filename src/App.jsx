import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App
