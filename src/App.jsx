import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Starfield from './components/Starfield';
import './App.css';

function App() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main className="app-container">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
