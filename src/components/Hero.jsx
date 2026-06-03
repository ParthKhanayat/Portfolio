import { ChevronDown, Rocket } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="status-badge hud-border">
          <span className="dot pulse"></span>
          <span className="status-text">SYSTEMS ONLINE</span>
        </div>
        
        <h1 className="hero-title">
          <span className="greeting">Initiating sequence...</span>
          <span className="name">I'm <span className="highlight-cyan">Parth Khanayat</span></span>
          <span className="role">Data Science<span className="highlight-purple"> Student</span></span>
        </h1>
        
        <p className="hero-subtitle">
          Navigating the digital cosmos. Building high-performance, futuristic web applications with precision and speed.
        </p>
        
        <div className="hero-actions">
          <button className="primary-btn hud-border">
            <Rocket className="btn-icon" size={20} />
            Engage Thrusters
          </button>
          <a href="#about" className="secondary-link">View Flight Logs</a>
        </div>
      </div>
      
      {/* Decorative background element representing a black hole or energy core */}
      <div className="energy-core">
        <div className="core-inner"></div>
        <div className="core-ring ring-1"></div>
        <div className="core-ring ring-2"></div>
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL DOWN</span>
        <ChevronDown className="bounce" size={24} />
      </div>
    </section>
  );
};

export default Hero;
