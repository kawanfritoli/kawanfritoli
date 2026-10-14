import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { RouterContext } from './RouterContext.js'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Runs a DOM update inside a View Transition when supported, so the old and
// new "pages" cross-fade (and shared elements morph) instead of swapping abruptly.
function runTransition(update) {
  if (typeof document.startViewTransition !== 'function' || prefersReducedMotion()) {
    update()
    return
  }
  document.startViewTransition(update)
}

function applyScroll({ hash, scrollY }) {
  if (typeof scrollY === 'number') {
    window.scrollTo({ top: scrollY, behavior: 'instant' })
    return
  }

  if (hash) {
    const target = document.getElementById(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
      return
    }
  }

  window.scrollTo({ top: 0, behavior: 'instant' })
}

export function RouterProvider({ children }) {
  const [pathname, setPathname] = useState(() => window.location.pathname)
  const pathnameRef = useRef(pathname)

  const commit = useCallback((nextPathname, scroll) => {
    runTransition(() => {
      flushSync(() => setPathname(nextPathname))
      pathnameRef.current = nextPathname
      applyScroll(scroll)
    })
  }, [])

  useEffect(() => {
    const handlePopState = (event) => {
      const nextPathname = window.location.pathname
      // Hash-only changes on the same page are handled natively by the browser.
      if (nextPathname === pathnameRef.current) return

      commit(nextPathname, {
        hash: window.location.hash.slice(1),
        scrollY: event.state?.scrollY,
      })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [commit])

  /**
   * Navigates to `to` without reloading the page.
   * Returns `true` when the navigation was handled (caller should prevent the
   * default link behavior) and `false` when the browser should handle it.
   */
  const navigate = useCallback(
    (to) => {
      const url = new URL(to, window.location.href)
      if (url.origin !== window.location.origin) return false

      const hash = url.hash.slice(1)

      if (url.pathname === pathnameRef.current) {
        // Same page: let anchors scroll natively; a bare path scrolls to the top.
        if (hash) return false
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
        return true
      }

      // Remember where the user was so "back" can restore the exact position.
      window.history.replaceState(
        { ...window.history.state, scrollY: window.scrollY },
        '',
      )
      window.history.pushState({ internal: true }, '', url.pathname + url.hash)
      commit(url.pathname, { hash })
      return true
    },
    [commit],
  )

  /** Goes back in history when the previous entry belongs to the app. */
  const goBack = useCallback(
    (fallback) => {
      if (window.history.state?.internal) {
        window.history.back()
        return
      }
      navigate(fallback)
    },
    [navigate],
  )

  const value = useMemo(
    () => ({ pathname, navigate, goBack }),
    [pathname, navigate, goBack],
  )

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}
