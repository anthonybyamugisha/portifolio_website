import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
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
              </ul>
            </div>
            <div className="what-card">
              <i className="fas fa-robot what-icon"></i>
              <h3>Machine Learning</h3>
              <p>Prototyping models using Python data science libraries.</p>
              <ul className="what-tags">
                <li>Python</li>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>scikit‑learn</li>
              </ul>
            </div>
            <div className="what-card">
              <i className="fas fa-magic what-icon"></i>
              <h3>Prompt Engineering</h3>
              <p>Designing effective prompts and workflows for LLM-powered solutions.</p>
              <ul className="what-tags">
                <li>Prompt Design</li>
                <li>LLMs</li>
                <li>Automation</li>
              </ul>
            </div>
            <div className="what-card">
              <i className="fas fa-database what-icon"></i>
              <h3>Database Management</h3>
              <p>Modeling data and writing performant queries using SQL.</p>
              <ul className="what-tags">
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img className="testimonial-avatar" src="/images/allan.jpg" alt="Allan - All Organic Honey" />
                <div>
                  <h3>Allan</h3>
                  <p className="role">Founder, All Organic Honey</p>
                </div>
              </div>
              <p className="testimonial-quote">
                “Our All Organic Honey website was designed with a clean product
                showcase and a simplified checkout. We also deployed an AI chatbot that
                significantly increased customer responses and streamlined inquiries.
                Online honey sales increased and our brand now feels more trustworthy to customers.”
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <img className="testimonial-avatar" src="/images/alban.jpg" alt="Alban - Business Owner & Trader" />
                <div>
                  <h3>Alban</h3>
                  <p className="role">Business Owner & Trader</p>
                </div>
              </div>
              <p className="testimonial-quote">
                “The AI chatbot integrated on our website improved response time and made
                ordering effortless. A Python trading bot for XAUUSD now generates signals
                automatically—boosting profitability while cutting screen time and the stress
                of chart analysis.”
              </p>
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
