import React from "react"
import styled from "styled-components"
import { Row, Col as BootstrapColumn } from "react-bootstrap"
import { ContentContainer, Wrapper } from "./ContentContainers"
import { Title } from "./Title"
import Progressbar from "./Progressbar"


const Col = styled(BootstrapColumn)`
	margin: 15px 0 15px 0;
`

const skills = {
  Java: 95,
  Python: 80,
  Scala: 75,
  Javascript: 95,
  "Apache Spark": 90,
  "Apache Hadoop": 80,
  "Apache Kafka": 85,
  "Spring MVC": 85,
  "Spring Boot": 85,
  React: 80,
  Bootstrap: 85,
  MySQL: 85,
  PostgreSQL: 80,
  AWS: 85,
  "Microsoft Azure": 65,
  Junit: 80,
  Pytest: 75,
  Git: 85,
  Maven: 85,
  IntelliJIDEA: 90,
  VSCode: 95,
  Cloudera: 75,
  Docker: 75,
  Kubernetes: 70,
}

const createColumn = (key, index) => {
  return (
    <Col key={key} sm={3}>
      <h6> {key} </h6>
      <Progressbar percent={skills[key]} />
    </Col>
  )
}

const Skills = () => {
  return (
    <ContentContainer id="skills">
      <Title>Skills</Title>
      <Wrapper>
        <Row>
          {Object.keys(skills).map((item, index) => createColumn(item, index))}
        </Row>
      </Wrapper>
    </ContentContainer>
  )
}

export default Skills
