import { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Starfield from './components/Starfield';
import clickSound from './assets/Click.m4a';
import errorSound from './assets/Error.m4a';
import spaceMusic from './assets/space_background_music.mp3';
import { Volume2, VolumeX } from 'lucide-react';
import './App.css';

function App() {
  const [isMuted, setIsMuted] = useState(false);
  const bgMusicRef = useRef(null);

  // Initialize volume on mount
  useEffect(() => {
    if (bgMusicRef.current) {
      bgMusicRef.current.volume = 0.6; // strictly 60%
    }
  }, []);

  // Handle first interaction to play the audio if autoplay blocks it
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (bgMusicRef.current && bgMusicRef.current.paused && !isMuted) {
        bgMusicRef.current.play().then(() => {
          document.removeEventListener('click', handleFirstInteraction);
        }).catch(err => console.warn('Autoplay blocked:', err));
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, [isMuted]);

  // Handle mute toggling
  useEffect(() => {
    if (bgMusicRef.current) {
      if (isMuted) {
        bgMusicRef.current.pause();
      } else {
        bgMusicRef.current.play().catch(console.warn);
      }
    }
  }, [isMuted]);

  // Handle button and link click sounds
  useEffect(() => {
    const handleClick = (e) => {
      if (isMuted) return;

      const target = e.target.closest('button, a');
      if (!target) return;

      if (target.classList.contains('mute-btn')) return;

      const isThrusters = target.textContent && target.textContent.toLowerCase().includes('engage thrusters');
      
      const audioSrc = isThrusters ? errorSound : clickSound;
      const audio = new Audio(audioSrc);
      audio.volume = 1.0; // Ensure click sounds are 100% volume
      audio.play().catch(console.warn);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isMuted]);

  const toggleMute = (e) => {
    e.stopPropagation(); 
    setIsMuted((prev) => !prev);
  };

  return (
    <>
      {/* Background Music Element */}
      <audio ref={bgMusicRef} src={spaceMusic} loop muted={isMuted} />
      
      <button 
        className="mute-btn" 
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      
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
