import { createContext, useContext } from 'react'

export const AppSettingsContext = createContext(null)

export function useAppSettings() {
  const context = useContext(AppSettingsContext)
  if (!context) {
    throw new Error('useAppSettings must be used within an AppSettingsProvider')
  }
  return context
}
