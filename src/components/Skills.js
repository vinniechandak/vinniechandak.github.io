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
  "Apache Hadoop": 80,
  "Apache HDFS": 80,
  "Apache Hive": 70,
  "Apache MapReduce": 80,
  "Apache Hbase": 80,
  Kafka: 85,
  Spark: 90,
  "Spark Streaming": 85,
  "Spark SQL": 90,
  J2EE: 85,
  "Spring MVC": 85,
  "Spring Data": 75,
  "Spring Security": 80,
  Hibernate: 85,
  JPA: 80,
  JQuery: 85,
  "Jasper Reports": 80,
  Mockito: 75,
  React: 80,
  Bootstrap: 85,
  MySQL: 85,
  Oracle: 80,
  MSSQL: 65,
  PostgreSQL: 80,
  "Microsoft Azure": 65,
  AWS: 65,
  TestNG: 65,
  Junit: 80,
  ScalaTest: 65,
  Pytest: 75,
  SVN: 65,
  Git: 85,
  Maven: 85,
  SBT: 65,
  Jenkins: 85,
  CircleCI: 70,
  Travis: 70,
  Eclipse: 85,
  STS: 85,
  IntelliJIDEA: 90,
  VSCode: 95,
  Zeppelin: 65,
  "CDH (Cloudera Hadoop Distribution)": 75,
  SonarQube: 65,
  JIRA: 90,
  Bitbucket: 85,
  Confluence: 85,
  Kubernetes: 75,
  Docker: 75,
  "Azure Blob Storage": 75,
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
