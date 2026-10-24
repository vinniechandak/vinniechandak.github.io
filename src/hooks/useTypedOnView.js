import { useCallback, useEffect, useRef, useState } from "react"

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/**
 * Types out `command` once the attached element scrolls into view, then flips
 * `done` so the section can reveal its content — mirroring the hero.
 *
 * - Fires once on scroll-in (no re-typing when passively scrolling back).
 * - `replay()` resets and re-runs the effect on demand (e.g. a nav click),
 *   so navigation always re-triggers the animation consistently.
 * - Respects prefers-reduced-motion: shows the full command and content
 *   immediately with no animation, and replay is a no-op.
 *
 * Returns { ref, typed, started, done, replay }.
 */
export default function useTypedOnView(command, speed = 70) {
  const reduced = prefersReducedMotion()
  const ref = useRef(null)
  const [started, setStarted] = useState(reduced)
  const [typed, setTyped] = useState(reduced ? command : "")
  const [done, setDone] = useState(reduced)
  // Bumping this re-arms the observer + typing effects for a replay.
  const [token, setToken] = useState(0)

  const replay = useCallback(() => {
    if (reduced) return
    setTyped("")
    setDone(false)
    setStarted(false)
    setToken(t => t + 1)
  }, [reduced])

  // Trigger when the element enters the viewport (re-armed on each `token`).
  useEffect(() => {
    if (reduced || started) return
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      setStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced, started, token])

  // Type the command out once started.
  useEffect(() => {
    if (reduced || !started || done) return
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(command.slice(0, i))
      if (i >= command.length) {
        clearInterval(id)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(id)
  }, [reduced, started, done, command, speed])

  return { ref, typed, started, done, replay }
}
