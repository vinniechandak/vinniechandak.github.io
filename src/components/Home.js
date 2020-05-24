import React from "react"
import styled from "styled-components"
import { Jumbotron } from "react-bootstrap"
import homeImage from "../assets/home.jpeg"

const Wrapper = styled(Jumbotron)`
	height: 90vh;
	margin: -20px;
  background-image: url(${homeImage});
  background-size: cover;
  background-repeat: no-repeat;
`

const Text = styled.h1`
    font-size: 6rem;
		font-weight: bold;
		padding: 20px;
		color: ${props => props.theme.colours.sidebar.text};
`

const Home = () => {
  return (
    <Wrapper fluid>
        <Text>Hi!, I am Vinod Chandak!</Text>
    </Wrapper>
  )
}

export default Home
