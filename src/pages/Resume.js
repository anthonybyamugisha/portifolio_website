import React from 'react';

function Resume() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>BYAMUGISHA ANTHONY</h1>
        <p>Aspiring Computer Scientist and Data Enthusiast</p>
        <p className="contact-line">Makerere, Kampala • +256748161708 / +256769864032 • byamugishanthony@gmail.com</p>
        <div className="resume-actions">
          <a className="resume-download" href="/resume.pdf" download>
            <i className="fas fa-file-download"></i>
            Download CV
          </a>
        </div>
      </header>
      <nav className="resume-nav">
        <a href="#personal-statement">Statement</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#interests">Interests</a>
        <a href="#languages">Languages</a>
        <a href="#achievements">Achievements</a>
        <a href="#activities">Activities</a>
        <a href="#references">References</a>
      </nav>

      <section className="resume-section" id="personal-statement">
        <h2>Personal Statement</h2>
        <p>
          Enthusiastic and dedicated first-year Computer Science student at Makerere University with a growing
          passion for data science and analytics. Fast learner with strong problem-solving skills and eagerness to
          acquire new knowledge in IT and data-driven fields. Seeking opportunities to learn and contribute in
          technology-focused environments.
        </p>
      </section>

      <section className="resume-section" id="education">
        <h2>Education</h2>
        <div className="edu-timeline">
          <div className="edu-col">
            <div className="edu-item">
              <span className="edu-pill">Expected 2028</span>
              <p className="edu-institution">Makerere University, Kampala</p>
              <h3 className="edu-title">Bachelor of Science in Computer Science</h3>
              <p className="edu-meta">Currently in Second Year</p>
            </div>
            <div className="edu-item">
              <span className="edu-pill">2021 - 2023</span>
              <p className="edu-institution">Buddo Secondary School</p>
              <h3 className="edu-title">Uganda Advanced Certificate of Education (UACE)</h3>
              <p className="edu-meta">Subjects: Physics, Economics, Mathematics • Points: 20</p>
            </div>
          </div>
          <div className="edu-col">
            <div className="edu-item">
              <span className="edu-pill">2023 - Present</span>
              <p className="edu-institution">Makerere University, Kampala</p>
              <h3 className="edu-title">Current Status: Second Year</h3>
              <p className="edu-meta">BSc Computer Science</p>
            </div>
            <div className="edu-item">
              <span className="edu-pill">2017 - 2020</span>
              <p className="edu-institution">Mwizi Secondary School</p>
              <h3 className="edu-title">Uganda Certificate of Education (UCE)</h3>
              <p className="edu-meta">Aggregates: 14</p>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section two-col">
        <div>
          <h2 id="achievements">Achievements</h2>
          <div className="resume-card">
            <ul>
              <li>Top performer in high school, achieving 20 points in UACE.</li>
              <li>Successfully completed first programming project in university.</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 id="languages">Languages</h2>
          <div className="resume-card">
            <ul>
              <li>English — Fluent</li>
              <li>Runyankole — Good proficiency</li>
              <li>Luganda — Good proficiency</li>
              <li>Kiswahili — Fair proficiency</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section grid">
        <div className="resume-card">
          <h2 id="skills">Skills and Learning Goals</h2>
          <ul className="skills-list">
            <li>Programming: Python, HTML, CSS (learning more)</li>
            <li>Data Science & Analytics: Data manipulation, visualization, analysis</li>
            <li>Web Development: Front-end basics; exploring back-end</li>
            <li>Software: Microsoft Office (Word, Excel, PowerPoint, Access)</li>
            <li>Soft Skills: Fast learner, problem-solving, communication</li>
          </ul>
        </div>
        <div className="resume-card">
          <h2 id="interests">Areas of Interest</h2>
          <ul className="tags">
            <li>Data Science & Analytics</li>
            <li>Machine Learning & AI</li>
            <li>Web Development</li>
            <li>Software Engineering</li>
          </ul>
        </div>
        <div className="resume-card">
          <h2 id="activities">Extracurricular Activities</h2>
          <ul>
            <li>Active member of the University's Computer Science Club</li>
            <li>Participant in online coding challenges and hackathons</li>
            <li>Regular attendee of tech meetups and webinars on data science topics</li>
          </ul>
        </div>
        <div className="resume-card">
          <h2 id="references">References</h2>
          <ul className="references">
            <li>
              <strong>Byamugisha Africano</strong><br/>
              Manager – MIS & Data Analytics, Rural Digital Media (RDM) Africa • 0706107619
            </li>
            <li>
              <strong>Mukasa Darlington</strong><br/>
              IT Manager, MTN Uganda, Mulago Branch • 0779547692
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Resume;


