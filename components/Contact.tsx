export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="section-header">
            <h2 className="section-title">Let&apos;s Work Together</h2>
            <p className="section-subtitle">Ready to bring your ideas to life? Let&apos;s start a conversation.</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>rajatkatiyar157@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+91-7380785008</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/rajatkatiyardotnet</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🐙</div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <p>github.com/Rajat-katiyar</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Gurugram, Haryana</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What&apos;s this about?" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

