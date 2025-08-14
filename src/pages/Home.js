import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const skills = [
    { name: "Frontend Development", icon: "💻", level: "Advanced" },
    { name: "Backend Development", icon: "⚙️", level: "Intermediate" },
    { name: "App Development", icon: "📱", level: "Intermediate" },
    { name: "UI/UX Design", icon: "🎨", level: "Intermediate" },
    { name: "Database Management", icon: "🗄️", level: "Intermediate" },
    { name: "Version Control", icon: "📚", level: "Advanced" },
    { name: "Problem Solving", icon: "🧩", level: "Advanced" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">BYAMUGISHA ANTHONY</span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Developer</h2>
          <p className="hero-description">
            I create innovative digital solutions that combine cutting-edge technology 
            with exceptional user experiences. Passionate about clean code, 
            beautiful design, and solving complex problems.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="cta-button primary">
              View My Work
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar">
            <img src="/images/anthony.jpg" alt="BYAMUGISHA ANTHONY" />
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="skills-overview">
        <h2>What I Do</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how I can help bring your ideas to life</p>
        <Link to="/contact" className="cta-button primary large">
          Start a Conversation
        </Link>
      </section>
    </div>
  );
}

export default Home;
