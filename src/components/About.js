import React from "react"
import styled from "styled-components"
import { ContentContainer, Wrapper }  from "./ContentContainers"
import { Title }  from "./Title"

const Text = styled.p``

const About = () => {
  return (
    <ContentContainer id="about">
      <Title>Who am I?</Title>
      <Wrapper>
        <Text>Hi!, I am Vinod Chandak.</Text>
        <Text>
          Currently I am working as a Senior Software Engineer at Canvass
          Analytics.
        </Text>
        <Text>
          I hold around 8 years of experience in the field of Computer Science
          and Engineering.
        </Text>
        <Text>
          I have worked with variety of industries like Manufacturing, Finance
          and Communications.
        </Text>
        <Text>
          In my free time, I like to read books, blogs and watch movies!
        </Text>
        <Text>
          I am good at learning new stuff! I enjoy solving puzzles and improving
          my brain storming skills!
        </Text>
      </Wrapper>
    </ContentContainer>
  )
}

export default About
