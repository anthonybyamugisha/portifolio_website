import React from 'react';

function About() {
  const technicalSkills = [
    { category: "Frontend", skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3/Sass", "TypeScript", "Vue.js"] },
    { category: "Backend", skills: ["Node.js", "Express.js", "Python", "Django", "PHP", "Laravel"] },
    { category: "Database", skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"] },
    { category: "Tools & Others", skills: ["Git", "Docker", "AWS", "Heroku", "Figma", "Adobe XD"] }
  ];

  const experience = [
    {
      year: "2023 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices."
    },
    {
      year: "2021 - 2023",
      title: "Full-Stack Developer",
      company: "Digital Innovations Co.",
      description: "Developed and maintained multiple web applications, worked with cross-functional teams, and delivered high-quality solutions."
    },
    {
      year: "2020 - 2021",
      title: "Junior Developer",
      company: "Startup Studio",
      description: "Built responsive websites and web applications, collaborated with designers and product managers."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      year: "2016 - 2020",
      description: "Focused on software engineering, algorithms, and web development."
    },
    {
      degree: "Web Development Bootcamp",
      school: "Code Academy",
      year: "2020",
      description: "Intensive 12-week program covering modern web technologies and best practices."
    }
  ];

  return (
    <div className="about">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Get to know BYAMUGISHA ANTHONY better - my journey, skills, and what drives me in the world of technology.</p>
      </div>
      
      <div className="about-content">
        {/* Personal Story */}
        <section className="about-section">
          <h2>My Story</h2>
          <div className="story-content">
            <p>
              I'm BYAMUGISHA ANTHONY, a passionate full-stack developer with over 3 years of experience creating 
              innovative digital solutions. My journey in technology began with curiosity and 
              has evolved into a deep passion for building applications that make a difference.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating user experiences 
              that are both beautiful and functional. Every project is an opportunity to learn 
              something new and push the boundaries of what's possible.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="about-section">
          <h2>Technical Skills</h2>
          <div className="skills-container">
            {technicalSkills.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.category}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="about-section">
          <h2>Professional Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <span className="timeline-year">{exp.year}</span>
                  </div>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="about-section">
          <h2>Education & Certifications</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <span className="education-year">{edu.year}</span>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Interests */}
        <section className="about-section">
          <h2>Beyond Coding</h2>
          <div className="interests-grid">
            <div className="interest-item">
              <i className="fas fa-book"></i>
              <h3>Learning</h3>
              <p>Always exploring new technologies and methodologies</p>
            </div>
            <div className="interest-item">
              <i className="fas fa-users"></i>
              <h3>Community</h3>
              <p>Contributing to open source and mentoring others</p>
            </div>
            <div className="interest-item">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>Finding creative solutions to complex problems</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
