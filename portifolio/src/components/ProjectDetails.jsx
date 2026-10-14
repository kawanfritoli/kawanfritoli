import { useEffect, useRef } from 'react'
import { useAppSettings } from '../context/AppSettingsContext.js'
import { useRouter } from '../router/RouterContext.js'

const DEFAULT_TITLE = 'Kawan Fritoli'
const PROJECTS_PATH = '/#projects'
const STORY_STEPS = ['challenge', 'solution', 'howItWorks']

// Turns `**term**` markers into highlighted technology names inside the story text.
function renderHighlights(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="project__tech">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

export default function ProjectDetails({ slug }) {
  const { t } = useAppSettings()
  const { goBack } = useRouter()
  const headingRef = useRef(null)
  const labels = t.projects.details
  const project = t.projects.items.find((item) => item.slug === slug)

  useEffect(() => {
    document.title = project ? `${project.title} — ${DEFAULT_TITLE}` : DEFAULT_TITLE
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [project])

  // Move focus to the page heading so keyboard and screen reader users land on the new content.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [slug])

  const backButton = (
    <a
      className="project__back"
      href={PROJECTS_PATH}
      onClick={(event) => {
        event.preventDefault()
        goBack(PROJECTS_PATH)
      }}
    >
      ← {labels.back}
    </a>
  )

  if (!project) {
    return (
      <section className="section project">
        <div className="container">
          {backButton}
          <h1 ref={headingRef} tabIndex={-1} className="project__title">
            {labels.notFoundTitle}
          </h1>
          <p className="section__description">{labels.notFoundDescription}</p>
        </div>
      </section>
    )
  }

  return (
    <article className="section project">
      <div className="container">
        {backButton}

        <header className="project__hero">
          <div
            className="project__media"
            style={{ viewTransitionName: `project-media-${project.slug}` }}
          >
            {project.image && <img src={project.image} alt={project.title} />}
          </div>
          <div className="project__intro">
            <span className="eyebrow">{project.challenge}</span>
            <h1
              ref={headingRef}
              tabIndex={-1}
              className="project__title"
              style={{ viewTransitionName: `project-title-${project.slug}` }}
            >
              {project.title}
            </h1>
          </div>
        </header>

        <div className="project__details">
          <div className="project__story">
            {STORY_STEPS.map((step, index) => (
              <section key={step} className="project__step">
                <span className="project__step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="project__step-title">{labels[step]}</h2>
                  <p>{renderHighlights(project.story[step])}</p>
                </div>
              </section>
            ))}
          </div>

          <aside className="project__aside">
            <h2 className="project__section-title">{labels.stack}</h2>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>

            <h2 className="project__section-title">{labels.links}</h2>
            <ul className="project__links">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </article>
  )
}
