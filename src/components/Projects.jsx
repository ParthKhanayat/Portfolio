import { ExternalLink, Code2 } from 'lucide-react';
import './Projects.css';
import f1image from '../assets/formula1.png';
import prismImg from '../assets/prism landing page ss.png';

const projectsData = [
  {
    id: 1,
    title: 'F1 Dashboard',
    description: 'An interactive, web-based Formula 1 dashboard that provides real-time race telemetry, historical session replays, championship standings, and an interactive season schedule. Built with vanilla web technologies, this project visualizes complex F1 data using asynchronous API integration and HTML5 Canvas animations.',
    tech: ['Vanilla web dev', 'Rest API'],
    link: 'https://parthkhanayat.github.io/Formula-1-Telemetry-Dashboard/index.html',
    github: 'https://github.com/ParthKhanayat/Formula-1-Telemetry-Dashboard',
    image: f1image
  },
  {
    id: 2,
    title: 'P.R.I.S.M',
    description: 'Predictive Remote IOT Sensor Matrix',
    tech: ['ESP32', 'AI', 'ML','React'],
    link: 'https://prism-iot-dashboard.vercel.app/',
    github: '#',
    image: prismImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header reveal">
        <h2 className="section-title">Projects / Fleet</h2>
        <div className="title-line"></div>
      </div>
      
      <div className="projects-grid stagger-container">
        {projectsData.map((project, index) => (
          <div key={project.id} className="project-card-wrapper reveal-scale" style={{ '--stagger-idx': index }}>
            <div className="project-card hud-border" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="card-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
  
                <div className="action-row">
                  <a href={project.link} className="explore-btn">
                    Explore Now <span className="arrow">❯</span>
                  </a>
                  <a href={project.github} className="icon-link"><Code2 size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
