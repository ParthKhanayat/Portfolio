import { Send, Mail, MessageSquare, Briefcase, Code2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Contact / Comms</h2>
        <div className="title-line"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info-wrapper">
          <div className="contact-info glass-panel">
            <h3 className="info-title">Establish Connection</h3>
            <p className="info-desc">
              Looking for a pilot for your next big mission? Transmit a message below and I'll get back to you at light speed.
            </p>
            
            <div className="social-links">
              <a href="#" className="social-icon"><Code2 /></a>
              <a href="#" className="social-icon"><Briefcase /></a>
              <a href="#" className="social-icon"><MessageSquare /></a>
              <a href="#" className="social-icon"><Mail /></a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <form className="contact-form glass-panel hud-border" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">NAME / CALL SIGN</label>
              <input type="text" id="name" className="form-input" placeholder="Enter your name" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">EMAIL / COMMS FREQUENCY</label>
              <input type="email" id="email" className="form-input" placeholder="Enter your email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">MESSAGE / TRANSMISSION</label>
              <textarea id="message" rows="5" className="form-input" placeholder="Enter your message"></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <Send size={18} />
              Transmit
            </button>
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <p>Built with <span className="highlight-cyan">React</span> & <span className="highlight-purple">Vite</span>. Design initialized in <span className="highlight-cyan">2026</span>.</p>
      </footer>
    </section>
  );
};

export default Contact;
