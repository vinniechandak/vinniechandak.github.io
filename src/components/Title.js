import React from "react"
import styled from "styled-components"

const Heading = styled.h2`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 6px;
  font-size: clamp(1.3rem, 3.5vw, 1.9rem);
  font-weight: 700;
  color: ${props => props.theme.colours.text};
`

const Prompt = styled.span`
  color: ${props => props.theme.colours.prompt};
  font-weight: 500;
`

const Path = styled.span`
  color: ${props => props.theme.colours.path};
`

const Caption = styled.p`
  margin: 0;
  color: ${props => props.theme.colours.textMuted};
  font-size: 0.9rem;

  &::before {
    content: "// ";
    color: ${props => props.theme.colours.textFaint};
  }
`

const Rule = styled.div`
  height: 1px;
  margin-top: 14px;
  background: linear-gradient(
    90deg,
    ${props => props.theme.colours.border},
    transparent
  );
`

// Visually hidden, but read by screen readers and indexed by crawlers.
const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

// Derive a human label ("about.md" -> "About") when one isn't supplied.
const labelFromFile = file =>
  file
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase())

// `file` is the pseudo-filename for the section (e.g. "about.md").
// The heading reads like a shell command opening that file — the structural
// device of the whole site rather than decoration. We also embed the plain
// section name as visually-hidden text so the <h2> carries meaningful words
// for crawlers and screen readers. `children` is an optional caption.
export const SectionTitle = ({ file, label, children }) => {
  return (
    <header>
      <Heading>
        <Prompt>$ open</Prompt>
        <Path>{file}</Path>
        <VisuallyHidden>{label || labelFromFile(file)}</VisuallyHidden>
      </Heading>
      {children ? <Caption>{children}</Caption> : null}
      <Rule />
    </header>
  )
}
