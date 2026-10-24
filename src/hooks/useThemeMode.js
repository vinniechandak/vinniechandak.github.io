import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "theme-mode"

const getInitialMode = () => {
  if (typeof window === "undefined") return "dark"
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "light" || stored === "dark") return stored
  } catch {
    // localStorage may be unavailable (private mode, prerender) — ignore.
  }
  if (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    return "light"
  }
  return "dark"
}

/**
 * Theme mode state ("dark" | "light"), initialised from localStorage or the
 * OS preference, and persisted on change.
 */
export default function useThemeMode() {
  const [mode, setMode] = useState(getInitialMode)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode)
    } catch {
      // ignore persistence failures
    }
    // Reflect on <html> for any CSS that wants it and for correct UA controls.
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", mode)
      document.documentElement.style.colorScheme = mode
    }
  }, [mode])

  const toggle = useCallback(() => {
    setMode(m => (m === "dark" ? "light" : "dark"))
  }, [])

  return { mode, setMode, toggle }
}
