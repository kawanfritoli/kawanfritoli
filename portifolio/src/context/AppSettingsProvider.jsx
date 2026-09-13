import { useCallback, useEffect, useMemo, useState } from 'react'
import { AppSettingsContext } from './AppSettingsContext.js'
import { translations } from '../i18n/translations.js'

const THEME_KEY = 'portfolio:theme'
const LANG_KEY = 'portfolio:lang'

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialLanguage() {
  const stored = localStorage.getItem(LANG_KEY)
  if (stored && stored in translations) return stored
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function AppSettingsProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    localStorage.setItem(LANG_KEY, language)
  }, [language])

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    [],
  )

  const toggleLanguage = useCallback(
    () => setLanguage((current) => (current === 'pt' ? 'en' : 'pt')),
    [],
  )

  const value = useMemo(
    () => ({ theme, language, toggleTheme, toggleLanguage, t: translations[language] }),
    [theme, language, toggleTheme, toggleLanguage],
  )

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>
}
