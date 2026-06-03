import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="nav-logo">
        <span className="logo-icon">🚀</span>
        <span className="logo-text">P.Dev</span>
      </div>
      <ul className="nav-links">
        <li><a href="#hero">Mission Control</a></li>
        <li><a href="#about">Pilot Specs</a></li>
        <li><a href="#projects">Fleet</a></li>
        <li><a href="#contact">Comms</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
