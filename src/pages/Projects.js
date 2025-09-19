import React, { useEffect, useState } from 'react';

function Projects() {
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
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce",
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://ecommerce-platform-demo.vercel.app"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "React DnD"],
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+App",
      github: "https://github.com/yourusername/task-management-app",
      live: "https://task-management-app-demo.vercel.app"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing professional work and skills with smooth animations and optimal user experience.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      image: "https://via.placeholder.com/400x250/ffd700/333333?text=Portfolio",
      github: "https://github.com/yourusername/portfolio-website",
      live: "https://byamugisha-anthony-portfolio.vercel.app"
    }
  ];

  return (
    <div className="projects">
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
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-github"></i> Code
                  </a>
                  <a href={project.live} className="project-link live" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
