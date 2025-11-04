export function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My journey in software development and the roles I&apos;ve held</p>
        </div>
        
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-marker">
              
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="job-title">Backend Developer</h3>
                <span className="company-name">Salon India Technologies Pvt. Ltd.</span>
                <span className="duration">Apr 2025 - Present</span>
              </div>
              <p className="job-description">
                Proficient in designing and implementing RESTful APIs, business logic, and background services using 
                ASP.NET MVC/Web API. Strong knowledge of MySQL with expertise in writing optimized queries, stored procedures, 
                and database schema design. Collaborative team player with a passion for backend development and clean code practices.
              </p>
              <div className="job-technologies">
                <span className="tech-tag">ASP.NET MVC</span>
                <span className="tech-tag">Web API</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Visual Studio</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">Postman</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="job-title">Full Stack Developer</h3>
                <span className="company-name">Umpteen Innovation IT Services</span>
                <span className="duration">Sep 2024 - Mar 2025</span>
              </div>
              <p className="job-description">
                Full Stack Developer with hands-on experience in building scalable web applications using React.js for 
                frontend and .NET (ASP.NET Core) for backend development. Skilled in developing RESTful APIs and backend 
                logic using .NET Core and Entity Framework, with emphasis on performance, maintainability, and Clean Architecture.
              </p>
              <div className="job-technologies">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">ASP.NET Core</span>
                <span className="tech-tag">Entity Framework</span>
                <span className="tech-tag">SQL Server</span>
                <span className="tech-tag">C#</span>
                <span className="tech-tag">Clean Architecture</span>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="job-title">Frontend Developer</h3>
                <span className="company-name">InternPe</span>
                <span className="duration">Nov 2023 - Dec 2023</span>
              </div>
              <p className="job-description">
                Collaborated with a team of developers to build and test features for a React-based web app. 
                Fixed front-end bugs and improved UI responsiveness across mobile and desktop. Used online repository 
                for version control and daily stand-up contributions in sprints.
              </p>
              <div className="job-technologies">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">Responsive Design</span>
              </div>
            </div>
          </div>

          {/* <div className="experience-item">
            <div className="experience-marker">
              <div className="marker-dot"></div>
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="job-title">Freelance Developer</h3>
                <span className="company-name">Self-Employed</span>
                <span className="duration">2020 - 2021</span>
              </div>
              <p className="job-description">
                Worked on various freelance projects including small business websites, landing pages, and web applications. 
                Gained valuable experience in client communication and project management.
              </p>
              <div className="job-technologies">
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Photoshop</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

