import { projects } from '@/data/projects'

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and creative solutions</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="placeholder-icon">🚀</div>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-link">
                        Live Demo
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="project-link project-github">
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

