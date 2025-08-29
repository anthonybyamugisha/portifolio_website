import React from 'react';

function Resume() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>BYAMUGISHA ANTHONY</h1>
        <p>Aspiring Computer Scientist and Data Enthusiast</p>
        <p className="contact-line">Makerere, Kampala • +256748161708 / +256769864032 • byamugishanthony@gmail.com</p>
      </header>

      <section className="resume-section" id="personal-statement">
        <h2 className="personal-statement">Personal Statement</h2>
        <p>
          Enthusiastic and dedicated first-year Computer Science student at Makerere University with a growing
          passion for data science and analytics. Fast learner with strong problem-solving skills and eagerness to
          acquire new knowledge in IT and data-driven fields. Seeking opportunities to learn and contribute in
          technology-focused environments.
        </p>
      </section>

      <section className="resume-section" id="education">
        <h2 id="education">Education</h2>
        <div className="edu-timeline">
          <div className="edu-col">
            <div className="edu-item">
              <p><strong>Aug 2024 - Present</strong></p>
              <h3>Makerere University, Kampala, Uganda</h3>
              <p><strong>Bachelor of Science in Computer Science</strong></p>
              <p>Currently pursuing a degree in Computer Science with a focus on modern software development and data science principles.</p>
            </div>

            <div className="edu-item">
              <p><strong>2021 - 2023</strong></p>
              <h3>Buddo Secondary School — Uganda Advanced Certificate of Education (UACE)</h3>
              <p><strong>Advanced Level (A-Level)</strong></p>
              <p><strong>Combination:</strong> PEM/ICT (Physics, Economics, Mathematics, and ICT)</p>
              <p><strong>Scores:</strong> Scored <strong>20/20 points</strong>, with Distinctions in all subjects, ICT (D1), and General Paper (D2).</p>
            </div>
          </div>
          
          <div className="edu-col">
            <div className="edu-item">
              <p><strong>2017 - 2020</strong></p>
              <h3>Mwizi Secondary School — Uganda Certificate of Education (UCE / O-Level)</h3>
              <p><strong>Ordinary Level (O-Level)</strong></p>
              <p><strong>Scores:</strong> Scored <strong>14 aggregates</strong> in 8 subjects.</p>
            </div>

            <div className="edu-item">
              <p><strong>2009 - 2016</strong></p>
              <h3>Akashabo Primary School — Primary Leaving Examination (PLE)</h3>
              <p><strong>Primary Education</strong></p>
              <p><strong>Scores:</strong> Scored aggregate <strong>8</strong> (all D2s).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section" id="awards">
        <h2>Awards and Honors</h2>
        <div className="awards-list">
          <div className="award-entry">
            <h3>Best Student Overall Award</h3>
            <p>Recognized as the Best Student Overall in the Uganda Advanced Certificate of Education (UACE) examinations at Buddo S.S. Scored the maximum 20/20 points (all Distinctions, including ICT D1 and General Paper D2). Earned the prestigious title of "Achiever", an honor reserved exclusively for students attaining the highest academic distinction at Buddo S.S. Featured among the top students in Uganda (New Vision, March 2024).</p>
            <p><strong>Institution:</strong> Buddo Secondary School</p>
            <p><strong>Year:</strong> 2024</p>
          </div>



          <div className="award-entry">
            <h3>Outstanding Academic Performance Award</h3>
            <p>Recognized as the Best Student Overall at Mwizi Secondary School in the Uganda Certificate of Education (UCE) examinations. Scored 14 aggregates in 8 subjects, the highest performance in the school and across the county. Ranked 2nd in Rwampara District and among the top students.</p>
            <p><strong>Institution:</strong> Mwizi Secondary School</p>
            <p><strong>Year:</strong> 2021</p>
          </div>

          <div className="award-entry">
            <h3>Best Student Overall Award</h3>
            <p>Awarded for being the best student in the school during Primary Leaving Examination (PLE). Scored 8 aggregates, getting D2 in each paper.</p>
            <p><strong>Institution:</strong> Akashabo Primary School</p>
            <p><strong>Year:</strong> 2017</p>
          </div>
        </div>
      </section>

      <section className="resume-section" id="skills">
        <h2 id="skills-heading">Skills</h2>
        <div className="skills-table">
                      <div className="skill-row">
              <div className="skill-category">Programming Languages:</div>
              <div className="skill-items">Python, JavaScript, Dart</div>
            </div>
                      <div className="skill-row">
              <div className="skill-category">Frameworks & Libraries:</div>
              <div className="skill-items">Django, React, Flutter, Pandas, NumPy, Matplotlib</div>
            </div>
                      <div className="skill-row">
              <div className="skill-category">Database Management:</div>
              <div className="skill-items">MySQL</div>
            </div>
          
                      <div className="skill-row">
              <div className="skill-category">Software Development Methodologies:</div>
              <div className="skill-items">Agile</div>
            </div>

          
        </div>
      </section>

      <section className="resume-section">
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
          <h2 id="references">References</h2>
          <div className="references-list">
            <div className="reference-entry">
              <h3>Byamugisha Africano</h3>
              <p><strong>Manager – MIS & Data Analytics</strong> at Rural Digital Media (RDM) Africa</p>
              <p>Phone: 0706107619</p>
            </div>
            <div className="reference-entry">
              <h3>Mukasa Darlington</h3>
              <p><strong>IT Manager</strong> at MTN Uganda, Mulago Branch</p>
              <p>Phone: 0779547692</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;


