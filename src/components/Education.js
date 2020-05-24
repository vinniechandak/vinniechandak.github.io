import React from "react"
import { ContentContainer, Wrapper } from "./ContentContainers"
import { Title } from "./Title"
import Card from "./Card"

const educationDetails = {
	name: "Bachelor of Engineering",
	title: "Computer Science & Engineering",
	start: 2008,
	end: 2012,
	summary: "Gujarat Technological University, Ahmedabad, Gujarat, India",
	icon: "graduation-cap"
}

const Education = () => {
  return (
    <ContentContainer id="education">
      <Title>Education</Title>
      <Wrapper>
				<Card cardDetails={educationDetails} />
      </Wrapper>
    </ContentContainer>
  )
}

export default Education
