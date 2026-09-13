import { useAppSettings } from '../context/AppSettingsContext.js'

export default function Contact() {
  const { t } = useAppSettings()

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <h2 className="section__title">{t.contact.title}</h2>
        <p className="section__description">{t.contact.description}</p>

        <a className="contact__email" href={`mailto:${t.contact.email}`}>
          {t.contact.email}
        </a>

        <ul className="contact__links">
          {t.contact.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
