import { useAppSettings } from '../context/AppSettingsContext.js'

export default function Experience() {
  const { t } = useAppSettings()

  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.experience.title}</h2>
        <p className="section__description">{t.experience.description}</p>

        <ol className="timeline">
          {t.experience.items.map((item) => (
            <li key={`${item.company}-${item.period}`} className="timeline__item">
              <span className="timeline__period">{item.period}</span>
              <div className="timeline__content">
                <h3>{item.role}</h3>
                <p className="timeline__company">{item.company}</p>
                <p>{item.description}</p>
                <ul className="tags">
                  {item.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="goals">
          <h3 className="goals__title">{t.experience.goalsTitle}</h3>
          <ul className="goals__list">
            {t.experience.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
