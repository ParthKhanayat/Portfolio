import { Terminal, Crosshair, Radar } from 'lucide-react';
import profileImg from '../assets/profile.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header reveal">
        <h2 className="section-title">About / Pilot Specs</h2>
        <div className="title-line"></div>
      </div>
      
      <div className="about-content stagger-container">
        <div className="about-card-wrapper reveal-left">
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
                I am a Computer Science student aiming for the stars,currently in my third year of college.
                I am a Data Science Specialist  
              </p>
              <br />
              <p><span className="prompt">$&gt;</span> cat skills.txt</p>
              <ul className="skills-list output">
                <li>Web: HTML,CSS,Javascript,React</li>
                <li>Languages: C, C++, Python, Java, R </li>
                <li></li>
                <li></li>
              </ul>
              <span className="cursor blink">_</span>
            </div>
          </div>
        </div>
        
        <div className="about-visuals reveal-right">
          <div className="radar-container hud-border">
            <div className="profile-image-wrapper">
              <img src={profileImg} alt="Profile" className="profile-image" />
            </div>
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
