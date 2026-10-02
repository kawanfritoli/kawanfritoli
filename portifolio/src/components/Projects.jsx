import { useAppSettings } from '../context/AppSettingsContext.js'

export default function Projects() {
  const { t } = useAppSettings()
  const projects = t.projects.items

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">{t.projects.title}</h2>
        <p className="section__description">{t.projects.description}</p>

        <div className="projects__grid">
          {projects.map((project) => {
            const links = project.links ?? [
              { label: t.projects.viewProject, href: project.href },
            ]

            return (
              <article key={project.title} className="card">
                {project.image ? (
                  <div className="card__media card__media--image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="card__media" aria-hidden="true" />
                )}
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
                <div className="card__links">
                  {links.map((link, index) => (
                    <a
                      key={link.href}
                      className={
                        index === 0
                          ? 'card__link'
                          : 'card__link card__link--secondary'
                      }
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label} →
                      {index === 0 && (
                        <span className="card__overlay" aria-hidden="true" />
                      )}
                    </a>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
