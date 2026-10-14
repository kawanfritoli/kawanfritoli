import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { getProjectSlug, useRouter } from './router/RouterContext.js'
import './App.css'

export default function App() {
  const { pathname } = useRouter()
  const projectSlug = getProjectSlug(pathname)

  return (
    <>
      <Header />
      <main key={projectSlug ?? 'home'} className="page">
        {projectSlug ? (
          <ProjectDetails slug={projectSlug} />
        ) : (
          <>
            <Hero />
            <Projects />
            <About />
            <Experience />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
