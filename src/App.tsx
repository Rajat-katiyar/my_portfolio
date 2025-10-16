import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="container">
        <small>© {new Date().getFullYear()} Rajat Katiyar. All rights reserved.</small>
      </footer>
    </div>
  )
}


