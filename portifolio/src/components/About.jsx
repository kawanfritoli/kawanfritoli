import { useAppSettings } from '../context/AppSettingsContext.js'

export default function About() {
  const { t } = useAppSettings()

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">{t.about.title}</h2>
        <div className="about__grid">
          <div className="about__text">
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <dl className="about__highlights">
            {t.about.highlights.map((item) => (
              <div key={item.label} className="about__highlight">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
