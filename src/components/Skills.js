import React from "react"
import styled from "styled-components"
import { ContentContainer, Wrapper } from "./ContentContainers"
import { SectionTitle } from "./Title"
import TypedTerminal from "./TypedTerminal"

// Straight from the résumé — no invented proficiency scores.
const skillGroups = {
  languages: ["Java", "Scala", "Python", "JavaScript", "C"],
  bigData: [
    "Apache Spark",
    "Spark Streaming",
    "Spark SQL",
    "PySpark",
    "Databricks",
    "Delta Lake",
    "Hadoop",
    "HDFS",
    "Hive",
    "MapReduce",
    "Kafka",
    "HBase",
    "Cloudera",
    "Zeppelin",
  ],
  aiAndMl: [
    "LLMs",
    "Generative AI",
    "Agentic AI",
    "RAG",
    "NLP",
    "Claude API",
    "OpenAI",
    "Claude Code",
    "Claude Agent SDK",
    "MCP",
    "Pinecone",
    "Kubeflow",
  ],
  cloud: [
    "AWS",
    "Microsoft Azure",
    "AWS Glue",
    "Redshift",
    "S3",
    "RDS",
    "Aurora",
    "Lambda",
    "EKS",
    "Azure IoT",
    "Azure Blob Storage",
  ],
  frameworks: [
    "Spring Boot",
    "Spring MVC",
    "Spring Data",
    "Spring Security",
    "J2EE",
    "Hibernate",
    "JPA",
    "React",
    "Node.js",
    "Express",
    "AngularJS",
    "Bootstrap",
  ],
  databases: ["MySQL", "Oracle", "MSSQL", "PostgreSQL", "HBase", "Pinecone"],
  devops: [
    "Kubernetes",
    "Docker",
    "Terraform",
    "Jenkins",
    "CircleCI",
    "GitLab",
    "Git",
    "Maven",
    "SBT",
    "Datadog",
    "SonarQube",
  ],
  testing: ["JUnit", "TestNG", "ScalaTest", "Pytest", "Mockito"],
  tools: [
    "IntelliJ IDEA",
    "Eclipse",
    "VS Code",
    "Cursor",
    "JIRA",
    "Confluence",
    "Bitbucket",
    "Murex",
    "CDH",
  ],
}

const Group = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`

const GroupKey = styled.div`
  color: ${props => props.theme.colours.keyword};
  margin-bottom: 8px;

  span {
    color: ${props => props.theme.colours.textFaint};
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: 18px;
`

const Tag = styled.span`
  padding: 3px 10px;
  font-size: 0.82rem;
  color: ${props => props.theme.colours.string};
  background: ${props => props.theme.colours.surfaceRaised};
  border: 1px solid ${props => props.theme.colours.border};
  border-radius: ${props => props.theme.radius.sm};
`

const Close = styled.div`
  color: ${props => props.theme.colours.textFaint};
  padding-left: 18px;
  margin-top: 6px;
`

const Skills = () => {
  const groups = Object.keys(skillGroups)
  return (
    <ContentContainer id="skills">
      <SectionTitle file="skills.json">a working toolbox</SectionTitle>
      <Wrapper>
        <TypedTerminal fileName="skills.json" command="cat skills.json" sectionId="skills">
          <div>{"{"}</div>
          {groups.map((group, gi) => (
            <Group key={group}>
              <GroupKey>
                {"  "}&quot;{group}&quot;<span>: [</span>
              </GroupKey>
              <Tags>
                {skillGroups[group].map(item => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </Tags>
              <Close>
                {"  ]"}
                {gi < groups.length - 1 ? "," : ""}
              </Close>
            </Group>
          ))}
          <div>{"}"}</div>
        </TypedTerminal>
      </Wrapper>
    </ContentContainer>
  )
}

export default Skills
