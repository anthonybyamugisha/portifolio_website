import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home">
      <div 
        className="semi-circle"
        style={{
          transform: `translateY(-50%) scale(${1 + scrollProgress * 0.5})`,
          opacity: 0.8 + scrollProgress * 0.2
        }}
      ></div>
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      ></div>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">BYAMUGISHA ANTHONY</span>
          </h1>
          <p className="hero-description">
            Passionate about creating innovative digital solutions and turning ideas into reality. 
            Specializing in modern web technologies and user-centered design.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="hero-btn primary">
              <i className="fas fa-rocket"></i>
              View My Work
            </Link>
            <Link to="/resume" className="hero-btn secondary">
              <i className="fas fa-file-alt"></i>
              Visit my resume
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar">
            <img src="/images/anthony.jpg" alt="BYAMUGISHA ANTHONY" />
          </div>
        </div>
      </section>

      <section className="what-section">
        <div className="container">
          <h2 className="what-title">What I Do</h2>
          <div className="what-grid">
            <div className="what-card">
              <i className="fas fa-code what-icon"></i>
              <h3>Frontend Development</h3>
              <p>Building responsive, accessible UIs using modern best practices.</p>
              <ul className="what-tags">
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="what-card">
              <i className="fas fa-server what-icon"></i>
              <h3>Backend Development</h3>
              <p>Designing robust backends and RESTful APIs with Django.</p>
              <ul className="what-tags">
                <li>Django</li>
              </ul>
            </div>
            <div className="what-card">
              <i className="fas fa-mobile-alt what-icon"></i>
              <h3>Mobile App Development</h3>
              <p>Crafting cross‑platform apps with Flutter for Android and iOS.</p>
              <ul className="what-tags">
                <li>Flutter</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="what-card">
              <i className="fas fa-comments what-icon"></i>
              <h3>Chatbot Development</h3>
              <p>Building smart chatbots for business websites to improve support and lead capture.</p>
              <ul className="what-tags">
                <li>Dialog Design</li>
                <li>LLMs</li>
                <li>Web Integration</li>
                <li>Bot Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      


      <section className="beyond-section">
        <div className="container">
          <h2 className="beyond-title">Beyond Coding</h2>
          <div className="beyond-grid">
            <div className="beyond-card">
              <i className="fas fa-book beyond-icon"></i>
              <h3>Learning</h3>
              <p>Always exploring new technologies and methodologies</p>
            </div>
            <div className="beyond-card">
              <i className="fas fa-users beyond-icon"></i>
              <h3>Community</h3>
              <p>Contributing to open source and mentoring others</p>
            </div>
            <div className="beyond-card">
              <i className="fas fa-lightbulb beyond-icon"></i>
              <h3>Innovation</h3>
              <p>Finding creative solutions to complex problems</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's work together to bring your ideas to life!</p>
          <Link to="/contact" className="cta-button">
            <i className="fas fa-paper-plane"></i>
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
