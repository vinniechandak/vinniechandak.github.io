import React from "react"
import styled from "styled-components"

const Line = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  margin-bottom: 12px;
`

const Prompt = styled.span`
  color: ${props => props.theme.colours.prompt};
`

const Host = styled.span`
  color: ${props => props.theme.colours.textFaint};
`

const Command = styled.span`
  color: ${props => props.theme.colours.text};
`

const Cursor = styled.span`
  display: inline-block;
  width: 9px;
  height: 1.1em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: ${props => props.theme.colours.prompt};
  animation: blink 1.1s steps(2, start) infinite;

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

/**
 * A single shell prompt line that shows `typed` text with a blinking cursor
 * until typing is `done`.
 */
const CommandLine = ({ typed, done, host = "vinod@portfolio" }) => {
  return (
    <Line>
      <Prompt>{host}</Prompt>
      <Host> ~ $ </Host>
      <Command>{typed}</Command>
      {!done ? <Cursor aria-hidden="true" /> : null}
    </Line>
  )
}

export default CommandLine
