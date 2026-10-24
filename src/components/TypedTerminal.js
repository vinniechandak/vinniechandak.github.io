import React, { useEffect } from "react"
import styled from "styled-components"
import TerminalWindow from "./TerminalWindow"
import CommandLine from "./CommandLine"
import useTypedOnView from "../hooks/useTypedOnView"
import { useReplay } from "./ReplayContext"

// Children stay mounted in the DOM at all times (so crawlers, no-JS visitors,
// and the react-snap prerender always see the content) and are only visually
// faded in once the command has "typed" out.
const Reveal = styled.div`
  opacity: ${props => (props.$show ? 1 : 0)};
  transition: opacity 0.35s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
  }
`

/**
 * A TerminalWindow that, when scrolled into view, types `command` at a shell
 * prompt (like the hero) and then reveals its children. Also replays the
 * typing effect when its nav link (matching `sectionId`) is clicked.
 */
const TypedTerminal = ({ fileName, command, host, sectionId, children }) => {
  const { ref, typed, done, replay } = useTypedOnView(command)
  const replayCtx = useReplay()

  // Register this section's replay so the sidebar/navbar can re-trigger it.
  useEffect(() => {
    if (!replayCtx || !sectionId) return
    return replayCtx.register(sectionId, replay)
  }, [replayCtx, sectionId, replay])

  return (
    <div ref={ref}>
      <TerminalWindow fileName={fileName}>
        <CommandLine typed={typed} done={done} host={host} />
        <Reveal $show={done}>{children}</Reveal>
      </TerminalWindow>
    </div>
  )
}

export default TypedTerminal
