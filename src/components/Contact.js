import React from "react"
import styled from "styled-components"
import { Form, Button as BootstrapButton, Row } from "react-bootstrap"
import { ContentContainer, Wrapper } from "./ContentContainers"
import { Title } from "./Title"

const Button = styled(BootstrapButton)`
  color: ${props => props.theme.colours.sidebar.text};
  background-color: ${props => props.theme.colours.sidebar.background};
	border-color: ${props => props.theme.colours.sidebar.background};
	&:hover {
		color: ${props => props.theme.colours.sidebar.background};
		background-color: ${props => props.theme.colours.sidebar.text};
		border-color: ${props => props.theme.colours.sidebar.background};
	}
`

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
          <div className="col-sm-6">
            <ul className="list-unstyled text-center">
              <li>
                <IconImage className="fa fa-map-marker fa-3x"></IconImage>
                <IconText>Toronto, ON M1B5Y7, CA</IconText>
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
          <Form className="col-sm-6">
            <Form.Group controlId="formBasicName">
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group controlId="formBasicSubject">
              <Form.Control type="text" placeholder="Enter Subject" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" placeholder="Your Message" />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Row>
      </Wrapper>
    </ContentContainer>
  )
}

export default Contact
