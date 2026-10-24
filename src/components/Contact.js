import React from "react"
import styled from "styled-components"
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"
import { ContentContainer, Wrapper } from "./ContentContainers"
import { SectionTitle } from "./Title"
import TypedTerminal from "./TypedTerminal"

const Shebang = styled.div`
  color: ${props => props.theme.colours.textFaint};
  margin-bottom: 14px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;

  svg {
    color: ${props => props.theme.colours.prompt};
    flex-shrink: 0;
  }
`

const VarName = styled.span`
  color: ${props => props.theme.colours.keyword};
`

const Value = styled.span`
  color: ${props => props.theme.colours.string};
  word-break: break-word;

  a {
    color: ${props => props.theme.colours.string};
  }
  a:hover {
    color: ${props => props.theme.colours.prompt};
  }
`

const contactItems = [
  { Icon: FiMapPin, name: "LOCATION", value: "Toronto, ON, CA" },
  { Icon: FiPhone, name: "PHONE", value: "+1 437 240 8191", href: "tel:+14372408191" },
  {
    Icon: FiMail,
    name: "EMAIL",
    value: "vinniechandak@gmail.com",
    href: "mailto:vinniechandak@gmail.com",
  },
]

const Contact = () => {
  return (
    <ContentContainer id="contact">
      <SectionTitle file="contact.sh">how to reach me</SectionTitle>
      <Wrapper>
        <TypedTerminal fileName="contact.sh" command="cat contact.sh" sectionId="contact">
          <Shebang>#!/bin/sh</Shebang>
          {contactItems.map(({ Icon, name, value, href }) => (
            <Row key={name}>
              <Icon aria-hidden="true" />
              <VarName>{name}=</VarName>
              <Value>
                &quot;
                {href ? (
                  <a href={href}>{value}</a>
                ) : (
                  value
                )}
                &quot;
              </Value>
            </Row>
          ))}
        </TypedTerminal>
      </Wrapper>
    </ContentContainer>
  )
}

export default Contact
