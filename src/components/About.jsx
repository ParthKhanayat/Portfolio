import { Terminal, Crosshair, Radar } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">Pilot Specs</h2>
        <div className="title-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text glass-panel">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">user@parth:~/specs</span>
          </div>
          <div className="terminal-body">
            <p><span className="prompt">$&gt;</span> whoami</p>
            <p className="output">
              I am a Computer Science student aiming for the stars. While I am targeting tech roles and building scalable software, my mind is constantly exploring the cosmos.
            </p>
            <br />
            <p><span className="prompt">$&gt;</span> cat skills.txt</p>
            <ul className="skills-list output">
              <li>React & Vite (Warp Speed)</li>
              <li>Node.js (Backend Systems)</li>
              <li>MongoDB & SQL (Data Cores)</li>
              <li>Python (AI & Scripting)</li>
            </ul>
            <span className="cursor blink">_</span>
          </div>
        </div>
        
        <div className="about-visuals">
          <div className="radar-container hud-border">
            <Radar className="radar-icon pulse" size={64} />
            <div className="radar-sweep"></div>
            <div className="target">
              <Crosshair size={24} color="var(--accent-color)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
