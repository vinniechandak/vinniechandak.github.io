import React from "react"
import { ContentContainer, Wrapper } from "./ContentContainers"
import { Title } from "./Title"
import { Timeline } from "./Timeline"

const companyDetails = [
  {
    name: "Nasdaq Inc",
    title: "Lead Software Engineer",
    summary: "As a Lead Sofware Engineer, responsible for Designing, Developing & Maintaining data lake applications and mentoring junior team members",
    start: "Sept 2021",
		end: "till Now",
		icon: "briefcase",
  },
  {
    name: "Canvass Analytics",
    title: "Sr. Software Engineer",
    summary: "As a Senior Engineer, responsible for on-boarding and curating data from different data sources to make them ready for ML algorithms",
    start: "Jul 2019",
		end: "Jul 2021",
		icon: "briefcase",
  },
  {
    name: "JP Morgan Chase India Ltd",
    title: "Associate",
    summary: "As an Associate, responsible for discussing with Product Owners, Designing solution architectures and implementing the code. Delivering user stories and supporting till Production Environment",
    start: "Jul 2018",
		end: "Apr 2019",
		icon: "briefcase",
  },
  {
    name: "Impetus Infotech India Pvt Ltd",
    title: "Sr. Software Engineer",
		summary: "As a Senior Engineer, responsible for adding features to existing product, mentoring team members and providing reusable solutions to end users using bigdata technologies stack.",
		start: "Dec 2016",
		end: "Jul 2018",
		icon: "briefcase",
  },
  {
    name: "Infosys Ltd",
    title: "Technology Analyst",
    summary: "As a technology analyst, responsible for designing and coding Java web applications to support the client business. Mentoring junior team members.",
    start: "Feb 2015",
		end: "Nov 2016",
		icon: "briefcase",
  },
  {
    name: "Rishabh Software Pvt Ltd",
    title: "Software Engineer",
    summary: "As a Software Engieer, responsible for developing mission critical applications using Spring and J2EE technologies. Lead a small team to achieve the migration of the project successfully.",
    start: "Jun 2012",
		end: "Jan 2015",
		icon: "briefcase",
  },
]

const Experience = () => {
  return (
    <ContentContainer id="experience">
      <Title>Work Experience</Title>
      <Wrapper>
        <div className="py-2 mt-4 mb-4">
          {companyDetails.map((item, index) => (
            <Timeline
              key={index}
              details={item}
              isLeft={index % 2 !== 0}
              isFirst={index === 0}
              isLast={index === companyDetails.length-1}
            />
          ))}
        </div>
      </Wrapper>
    </ContentContainer>
  )
}

export default Experience
