import React from "react"
import styled from "styled-components"
import { ContentContainer, Wrapper } from "./ContentContainers"
import { SectionTitle } from "./Title"
import TypedTerminal from "./TypedTerminal"
import Card from "./Card"

const educationDetails = {
  name: "Bachelor of Engineering, Computer Science & Engineering",
  title: "Gujarat Technological University, Ahmedabad, India",
  meta: "Jun 2008 → May 2012",
  summary: "CGPA 8.82 — University 3rd rank in the CSE department.",
}

// From résumé. Ordered by issuer, newest/most-senior first within a group.
const certifications = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    title: "Amazon Web Services (AWS)",
    meta: "Valid through Jul 2028",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    title: "Amazon Web Services (AWS)",
    meta: "Valid through Jul 2028",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    title: "Amazon Web Services (AWS)",
    meta: "Valid through Jul 2028",
  },
  {
    name: "Claude with the Anthropic API",
    title: "Anthropic",
    meta: "Issued May 2026",
  },
  {
    name: "Claude Code in Action",
    title: "Anthropic",
    meta: "Issued May 2026",
  },
  {
    name: "Introduction to Model Context Protocol",
    title: "Anthropic",
    meta: "Issued May 2026",
  },
  {
    name: "Introduction to Agent Skills",
    title: "Anthropic",
    meta: "Issued May 2026",
  },
  {
    name: "GenAI Fundamentals",
    title: "Databricks",
    meta: "Valid through Dec 2026",
  },
  {
    name: "AWS Platform Architect",
    title: "Databricks",
    meta: "Valid through May 2026",
  },
  {
    name: "Databricks Fundamentals",
    title: "Databricks",
    meta: "Valid through Apr 2026",
  },
  {
    name: "Cloud Practitioner",
    title: "A Cloud Guru",
    meta: "Issued Oct 2021",
  },
]

const Subhead = styled.h3`
  margin: 4px 0 12px;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${props => props.theme.colours.textMuted};

  &:not(:first-child) {
    margin-top: 24px;
  }

  &::before {
    content: "## ";
    color: ${props => props.theme.colours.textFaint};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`

const Education = () => {
  return (
    <ContentContainer id="education">
      <SectionTitle file="education.md">
        degrees &amp; certifications
      </SectionTitle>
      <Wrapper>
        <TypedTerminal fileName="education.md" command="cat education.md" sectionId="education">
          <Subhead>Education</Subhead>
          <Grid>
            <Card cardDetails={educationDetails} />
          </Grid>

          <Subhead>Certifications</Subhead>
          <Grid>
            {certifications.map(cert => (
              <Card key={cert.name} cardDetails={cert} />
            ))}
          </Grid>
        </TypedTerminal>
      </Wrapper>
    </ContentContainer>
  )
}

export default Education
