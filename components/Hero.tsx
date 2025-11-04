export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hello, I&apos;m </span>
            <span className="name">RAJAT KATIYAR</span>
          </h1>
            <p className="hero-description">
              Detail-oriented Full Stack Developer with experience in building responsive web applications using React.js, HTML, CSS, and JavaScript. MCA graduate from RGPV University with hands-on experience in .NET Core, ASP.NET MVC, and MySQL.
            </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="cv-buttons">
            <a 
              href="/CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              📄 View CV
            </a>
            <a 
              href="/CV.pdf" 
              download="Rajat_Katiyar_CV.pdf" 
              className="btn btn-outline"
            >
              ⬇️ Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

