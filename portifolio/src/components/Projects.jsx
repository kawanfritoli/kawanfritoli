import { useAppSettings } from '../context/AppSettingsContext.js'
import Link from '../router/Link.jsx'
import { projectPath } from '../router/RouterContext.js'

export default function Projects() {
  const { t } = useAppSettings()
  const projects = t.projects.items

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">{t.projects.title}</h2>
        <p className="section__description">{t.projects.description}</p>

        <ul className="projects__grid">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={projectPath(project.slug)}
                className="card"
                aria-label={`${project.title} — ${t.projects.openProject}`}
              >
                <div
                  className="card__media card__media--image"
                  style={{ viewTransitionName: `project-media-${project.slug}` }}
                >
                  {project.image && (
                    <img src={project.image} alt="" loading="lazy" />
                  )}
                </div>
                <div className="card__footer">
                  <h3
                    className="card__title"
                    style={{ viewTransitionName: `project-title-${project.slug}` }}
                  >
                    {project.title}
                  </h3>
                  <span className="card__arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
