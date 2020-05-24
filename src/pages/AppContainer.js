import React, { useState } from "react"
import styled from "styled-components"
import Sidebar from "../components/Sidebar"
import Container from "../components/Container"

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: stretch;
    perspective: 1500px;
`

const AppContainer = () => {
	const [isVisible, setIsVisible] = useState(false)
  return (
      <Wrapper>
        <Sidebar isVisible={isVisible} />
        <Container isVisible={isVisible} setIsVisible={setIsVisible} />
      </Wrapper>
  )
}

export default AppContainer;
