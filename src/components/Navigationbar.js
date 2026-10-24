import React from "react"
import styled from "styled-components"
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi"

// Only present on mobile; the sidebar is persistent on desktop.
const Bar = styled.div`
  display: none;

  @media (max-width: 860px) {
    display: flex;
    align-items: center;
    gap: 12px;
    position: sticky;
    top: 0;
    z-index: 10;
    margin: 0 clamp(-16px, -4vw, -48px) 16px;
    padding: 12px clamp(16px, 4vw, 48px);
    background: ${props => props.theme.colours.chrome};
    border-bottom: 1px solid ${props => props.theme.colours.border};
  }
`

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: ${props => props.theme.colours.surface};
  color: ${props => props.theme.colours.text};
  border: 1px solid ${props => props.theme.colours.border};
  border-radius: ${props => props.theme.radius.md};
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    border-color: ${props => props.theme.colours.path};
  }
`

const Label = styled.a`
  color: ${props => props.theme.colours.textMuted};
  font-size: 0.9rem;

  b {
    color: ${props => props.theme.colours.text};
    font-weight: 700;
  }

  &:hover b,
  &:focus b {
    color: ${props => props.theme.colours.path};
  }
`

const Navigationbar = ({ isOpen, setIsOpen, themeMode, onToggleTheme }) => {
  const nextMode = themeMode === "dark" ? "light" : "dark"
  return (
    <Bar>
      <Toggle
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="sidebar"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </Toggle>
      <Label href="#home">
        <b>vinod-chandak</b> / portfolio
      </Label>
      {onToggleTheme ? (
        <Toggle
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${nextMode} theme`}
          title={`Switch to ${nextMode} theme`}
          style={{ marginLeft: "auto" }}
        >
          {themeMode === "dark" ? (
            <FiSun aria-hidden="true" />
          ) : (
            <FiMoon aria-hidden="true" />
          )}
        </Toggle>
      ) : null}
    </Bar>
  )
}

export default Navigationbar
