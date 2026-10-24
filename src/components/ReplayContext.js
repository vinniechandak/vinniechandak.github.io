import React, { createContext, useCallback, useContext, useMemo, useRef } from "react"

// Lets the sidebar/navbar ask a specific section to replay its typing effect
// when its nav link is clicked. Sections register a callback keyed by id.
const ReplayContext = createContext(null)

export const ReplayProvider = ({ children }) => {
  const listeners = useRef(new Map())

  const register = useCallback((id, fn) => {
    listeners.current.set(id, fn)
    return () => {
      listeners.current.delete(id)
    }
  }, [])

  const requestReplay = useCallback(id => {
    const fn = listeners.current.get(id)
    if (fn) fn()
  }, [])

  const value = useMemo(() => ({ register, requestReplay }), [register, requestReplay])

  return <ReplayContext.Provider value={value}>{children}</ReplayContext.Provider>
}

export const useReplay = () => useContext(ReplayContext)
