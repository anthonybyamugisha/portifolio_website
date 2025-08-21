import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              anthony.tech
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">About Me</Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link">Resume</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 BYAMUGISHA ANTHONY. All rights reserved.</p>
            <div className="footer-links"></div>
            <div className="footer-social">
              <a href="https://github.com/anthonybyamugisha" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/byamugisha-anthony-98853b333/" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.upwork.com/freelancers/~0186637ac601dd1727" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                <i className="fas fa-briefcase"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
