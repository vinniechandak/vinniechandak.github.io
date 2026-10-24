import React from "react"
import styled from "styled-components"
import { ContentContainer, Wrapper } from "./ContentContainers"
import { SectionTitle } from "./Title"
import TypedTerminal from "./TypedTerminal"

// Rendered to look like a markdown source file being viewed.
const MdLine = styled.p`
  margin: 0 0 10px;
  color: ${props => props.theme.colours.text};

  &:last-child {
    margin-bottom: 0;
  }
`

const H1 = styled.p`
  margin: 0 0 14px;
  color: ${props => props.theme.colours.textMuted};

  span {
    color: ${props => props.theme.colours.prompt};
  }
`

const Bullet = styled.p`
  margin: 0 0 6px;
  color: ${props => props.theme.colours.text};

  &::before {
    content: "- ";
    color: ${props => props.theme.colours.string};
  }
`

const About = () => {
  return (
    <ContentContainer id="about">
      <SectionTitle file="about.md">a quick introduction</SectionTitle>
      <Wrapper>
        <TypedTerminal fileName="about.md" command="cat about.md" sectionId="about">
          <H1>
            <span># </span>Hi, I&apos;m Vinod Chandak
          </H1>
          <MdLine>
            I&apos;m a Director and Forward Deployed AI Engineer at Stashedcode
            Inc., and an AWS Certified Solutions Architect (Professional) with
            14+ years in computer science and engineering.
          </MdLine>
          <MdLine>
            I&apos;ve worked across trading, industrial IoT, banking, and
            automotive &mdash; prototyping and delivering production-ready AI
            platform and data engineering systems that hold up at scale.
          </MdLine>
          <MdLine style={{ marginBottom: "6px" }}>Away from the keyboard:</MdLine>
          <Bullet>Reading books and blogs, and the occasional movie</Bullet>
          <Bullet>Solving puzzles and picking up new things to learn</Bullet>
        </TypedTerminal>
      </Wrapper>
    </ContentContainer>
  )
}

export default About
