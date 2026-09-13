import { useAppSettings } from '../context/AppSettingsContext.js'

export default function Footer() {
  const { t } = useAppSettings()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Kawan Fritoli</span>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  )
}
