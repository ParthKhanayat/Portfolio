import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const NavLink = ({ href, normalText, themeText }) => {
  const [text, setText] = useState(normalText);
  const intervalRef = useRef(null);

  const scramble = (targetText) => {
    clearInterval(intervalRef.current);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let iteration = 0;
    
    intervalRef.current = setInterval(() => {
      setText(
        targetText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= targetText.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseEnter = () => scramble(themeText);
  const handleMouseLeave = () => scramble(normalText);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <a 
      href={href} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </a>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      {/* <div className="nav-logo">
        <span className="logo-icon"></span>
        <span className="logo-text"></span>
      </div> */}
      <ul className="nav-links">
        <li><NavLink href="#hero" normalText="Home" themeText="Mission Control" /></li>
        <li><NavLink href="#about" normalText="About" themeText="Pilot Specs" /></li>
        <li><NavLink href="#projects" normalText="Projects" themeText="Fleet" /></li>
        <li><NavLink href="#contact" normalText="Contact" themeText="Comms" /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
