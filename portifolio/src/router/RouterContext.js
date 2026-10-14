import { createContext, useContext } from 'react'

export const RouterContext = createContext(null)

export const PROJECT_BASE_PATH = '/projetos'

export function projectPath(slug) {
  return `${PROJECT_BASE_PATH}/${slug}`
}

export function getProjectSlug(pathname) {
  const match = pathname.match(/^\/projetos\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}
