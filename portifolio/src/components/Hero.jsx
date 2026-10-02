import { useAppSettings } from '../context/AppSettingsContext.js'

export default function Hero() {
  const { t } = useAppSettings()

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">{t.hero.role}</p>
          <h1 className="hero__title">{t.hero.headline}</h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#about">
              {t.hero.cta}
            </a>
            <a className="button" href="#contact">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <img
          className="hero__photo"
          src="/picture.png"
          alt={t.hero.headline}
          width="433"
          height="577"
        />
      </div>
    </section>
  )
}
