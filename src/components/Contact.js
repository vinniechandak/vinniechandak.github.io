import React from "react"
import styled from "styled-components"
import { Row } from "react-bootstrap"
import { ContentContainer, Wrapper } from "./ContentContainers"
import { Title } from "./Title"

const IconImage = styled.i`
	color: ${props => props.theme.colours.sidebar.background};
`

const IconText = styled.p`
	color: ${props => props.theme.colours.sidebar.background};
`

const Contact = () => {
  return (
    <ContentContainer id="contact">
      <Title>Contact Me</Title>
      <Wrapper>
        <Row>
          <div className="col-sm-12">
            <ul className="list-unstyled text-center">
              <li>
                <IconImage className="fa fa-map-marker fa-3x"></IconImage>
                <IconText>Toronto, ON CA</IconText>
              </li>

              <li>
                <IconImage className="fa fa-phone mt-4 fa-3x"></IconImage>
                <IconText>+1 437 240 8191</IconText>
              </li>

              <li>
                <IconImage className="fa fa-envelope mt-4 fa-3x"></IconImage>
                <IconText>vinniechandak@gmail.com</IconText>
              </li>
            </ul>
          </div>
        </Row>
      </Wrapper>
    </ContentContainer>
  )
}

export default Contact
