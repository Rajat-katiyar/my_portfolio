import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">Passionate about creating digital experiences that matter</p>
            </div>
            <div className="about-description">
              <p>
                I&apos;m a detail-oriented Full Stack Developer with hands-on experience in building scalable web applications. 
                As an MCA graduate from RGPV University, I specialize in React.js, .NET Core, ASP.NET MVC, and MySQL.
              </p>
              <p>
                With experience at companies like Salon India Technologies and Umpteen Innovation IT Services, 
                I&apos;ve developed RESTful APIs, optimized database queries, and built responsive frontend applications. 
                I&apos;m passionate about clean code practices and continuous learning in full-stack development.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <div className="skill-tags">
                  <span className="skill-tag">C#</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">SQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Frameworks & Technologies</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">.NET Core</span>
                  <span className="skill-tag">ASP.NET MVC</span>
                  <span className="skill-tag">Entity Framework</span>
                  <span className="skill-tag">Node.js</span>
                  {/* <span className="skill-tag">Express.js</span> */}
                </div>
              </div>
              <div className="skill-category">
                <h4>Database & Tools</h4>
                <div className="skill-tags">
                  {/* <span className="skill-tag">MySQL</span> */}
                  <span className="skill-tag">SQL Server / SSMS</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Visual Studio</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image">
              <div className="profile-image-container">
                <Image 
                  src="/profile.jpg" 
                  alt="Rajat Katiyar - Full Stack Developer" 
                  width={300}
                  height={320}
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

