import { useEffect, useState } from 'react'
import { useAppSettings } from '../context/AppSettingsContext.js'
import Link from '../router/Link.jsx'

export default function Header() {
  const { t, theme, language, toggleTheme, toggleLanguage } = useAppSettings()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const resumeFile =
    language === 'pt' ? 'curriculo-kawan-fritoli-pt.pdf' : 'curriculo-kawan-fritoli-en.pdf'

  useEffect(() => {
    const close = () => setIsMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const links = [
    { href: '/#projects', label: t.nav.projects },
    { href: '/#about', label: t.nav.about },
    { href: '/#experience', label: t.nav.experience },
    { href: '/#contact', label: t.nav.contact },
  ]
  const resumeLink = { href: `/${resumeFile}`, label: t.nav.resume }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="header__logo" to="/" onClick={() => setIsMenuOpen(false)}>
          KF<span aria-hidden="true"></span>
        </Link>

        <nav
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label={t.nav.about}
        >
          {links.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={resumeLink.href} download onClick={() => setIsMenuOpen(false)}>
            {resumeLink.label}
          </a>
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
