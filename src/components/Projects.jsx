import { ExternalLink, Code2 } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Orbit E-Commerce',
    description: 'A full-stack e-commerce platform with real-time inventory tracking and secure payment gateways.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Nebula Dashboard',
    description: 'Data visualization dashboard for tracking server metrics and user engagement in real-time.',
    tech: ['Vite', 'TypeScript', 'Chart.js'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Quasar Chat',
    description: 'End-to-end encrypted messaging application with WebSockets for instant communication.',
    tech: ['Socket.io', 'React', 'Express'],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Projects / Fleet</h2>
        <div className="title-line"></div>
      </div>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card glass-panel hud-border">
            <div className="card-top">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                <a href={project.github} className="icon-link"><Code2 size={20} /></a>
                <a href={project.link} className="icon-link"><ExternalLink size={20} /></a>
              </div>
            </div>
            
            <p className="project-desc">{project.description}</p>
            
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
