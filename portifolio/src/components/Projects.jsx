import { useAppSettings } from '../context/AppSettingsContext.js'
import { BarrierIcon, ConeIcon, HelmetIcon, WrenchIcon } from './icons.jsx'

export default function Projects() {
  const { t } = useAppSettings()
  const projects = t.projects.items

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">{t.projects.title}</h2>
        <p className="section__description">{t.projects.description}</p>

        {projects.length === 0 ? (
          <div className="wip">
            <div className="wip__icons" aria-hidden="true">
              <HelmetIcon />
              <ConeIcon />
              <WrenchIcon />
              <BarrierIcon />
            </div>
            <span className="wip__badge">{t.projects.wip.badge}</span>
            <h3 className="wip__title">{t.projects.wip.title}</h3>
            <p className="wip__description">{t.projects.wip.description}</p>
            <a
              className="button"
              href="https://github.com/kawanfritoli"
              target="_blank"
              rel="noreferrer"
            >
              {t.projects.wip.cta}
            </a>
          </div>
        ) : (
          <div className="projects__grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <div className="card__media" aria-hidden="true" />
                <span className="eyebrow">{project.challenge}</span>
                <h3 className="card__title">{project.title}</h3>
                <p className="card__description">{project.description}</p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  className="card__link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.projects.viewProject} →
                  <span className="card__overlay" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
