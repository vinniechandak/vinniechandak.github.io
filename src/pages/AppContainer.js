import React, { useState } from "react"
import styled from "styled-components"
import Sidebar from "../components/Sidebar"
import Container from "../components/Container"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
  background: ${props => props.theme.colours.base};
`

const Backdrop = styled.div`
  display: none;

  @media (max-width: 860px) {
    display: ${props => (props.$open ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: ${props =>
      props.theme.mode === "light"
        ? "rgba(31, 36, 48, 0.4)"
        : "rgba(5, 9, 18, 0.6)"};
    z-index: 20;
  }
`

const AppContainer = ({ themeMode, onToggleTheme }) => {
  // On desktop the sidebar is always visible; `isOpen` only drives the
  // mobile slide-in drawer.
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <Sidebar
        isOpen={isOpen}
        onNavigate={() => setIsOpen(false)}
        themeMode={themeMode}
        onToggleTheme={onToggleTheme}
      />
      <Backdrop $open={isOpen} onClick={() => setIsOpen(false)} />
      <Container
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        themeMode={themeMode}
        onToggleTheme={onToggleTheme}
      />
    </Wrapper>
  )
}

export default AppContainer
