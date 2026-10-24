import React from "react"
import styled from "styled-components"
import Navigationbar from "./Navigationbar"
import Home from "./Home"
import About from "./About"
import Education from "./Education"
import Skills from "./Skills"
import Experience from "./Experience"
import Contact from "./Contact"

const Main = styled.main`
  flex: 1;
  min-width: 0;
  padding: 0 clamp(16px, 4vw, 48px) 48px;
`

const Container = ({ isOpen, setIsOpen, themeMode, onToggleTheme }) => {
  return (
    <Main>
      <Navigationbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        themeMode={themeMode}
        onToggleTheme={onToggleTheme}
      />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Contact />
    </Main>
  )
}

export default Container
