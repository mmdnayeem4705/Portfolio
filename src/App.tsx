
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <Navbar></Navbar>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </ThemeProvider>
  );
}

export default App;