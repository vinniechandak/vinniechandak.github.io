import React from "react"
import styled from "styled-components"
import Navigationbar from "./Navigationbar"
import Home from "./Home"
import About from "./About"
import Education from "./Education"
import Skills from "./Skills"
import Experience from "./Experience"
import Contact from "./Contact"

const ContentWrapper = styled.div`
	padding: 20px;
	min-height: 100vh;
  transition: all 0.3s;
`

const Container = ({ isVisible, setIsVisible }) => {
  return (
    <ContentWrapper>
      <Navigationbar isVisible={isVisible} setIsVisible={setIsVisible} />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Contact />
    </ContentWrapper>
  )
}

export default Container
