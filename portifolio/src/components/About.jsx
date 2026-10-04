import { useAppSettings } from '../context/AppSettingsContext.js'

export default function About() {
  const { t } = useAppSettings()
  const { education } = t.about

  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.about.title}</h2>
        <div className="about__grid">
          <div className="about__text">
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <aside className="about__aside">
            <div className="education">
              <h3 className="education__title">{education.title}</h3>
              <ol className="education__list">
                {education.items.map((item) => (
                  <li key={`${item.course}-${item.institution}`} className="education__item">
                    <span className="education__period">{item.period}</span>
                    <p className="education__course">{item.course}</p>
                    <p className="education__institution">{item.institution}</p>
                  </li>
                ))}
              </ol>
            </div>

            <dl className="about__highlights">
              {t.about.highlights.map((item) => (
                <div key={item.label} className="about__highlight">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
