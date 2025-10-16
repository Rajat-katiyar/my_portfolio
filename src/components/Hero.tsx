
export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">RAJAT KATIYAR</span>
          </h1>
            <p className="hero-description">
              Detail-oriented Full Stack Developer with experience in building responsive web applications using React.js, HTML, CSS, and JavaScript. MCA graduate from RGPV University with hands-on experience in .NET Core, ASP.NET MVC, and MySQL.
            </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        {/* <div className="hero-visual">
            <div className="floating-cards">
              <div className="card card-1">
                <div className="card-content">React</div>
              </div>
              <div className="card card-2">
                <div className="card-content">C#</div>
              </div>
              <div className="card card-3">
                <div className="card-content">.NET Core</div>
              </div>
              <div className="card card-4">
                <div className="card-content">MySQL</div>
              </div>
              <div className="card card-5">
                <div className="card-content">JavaScript</div>
              </div>
              <div className="card card-6">
                <div className="card-content">Power BI</div>
              </div>
            </div>
        </div> */}
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}


