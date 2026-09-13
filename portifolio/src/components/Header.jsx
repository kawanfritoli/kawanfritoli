import { useEffect, useState } from 'react'
import { useAppSettings } from '../context/AppSettingsContext.js'

export default function Header() {
  const { t, theme, language, toggleTheme, toggleLanguage } = useAppSettings()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const close = () => setIsMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__logo" href="#top">
          KF<span aria-hidden="true"></span>
        </a>

        <nav
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label={t.nav.about}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleLanguage}
            aria-label={t.a11y.toggleLanguage}
            title={t.a11y.toggleLanguage}
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={t.a11y.toggleTheme}
            title={t.a11y.toggleTheme}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          <button
            type="button"
            className="icon-button header__menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={t.a11y.menu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
