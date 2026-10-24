import React from "react"
import styled from "styled-components"
import { ContentContainer, Wrapper } from "./ContentContainers"
import { SectionTitle } from "./Title"
import TypedTerminal from "./TypedTerminal"

// Full detail from the résumé: every bullet, tech stack, and project list.
const companyDetails = [
  {
    name: "Stashedcode Inc",
    title: "Director, Forward Deployed AI Engineer & Principal Consultant, AI Platform & Data Engineering",
    location: "Canada",
    start: "Sep 2024",
    end: "Present",
    bullets: [
      "Deliver enterprise platform migrations, including Murex to a SaaS platform for one of the largest banks in Canada.",
      "Serve as a Forward Deployed AI Engineer at an AI startup, delivering customized and guarded AI platform solutions to their customers.",
      "Deliver software implementations and architectures built directly to customer requirements across Java, Python, Scala, Apache Spark, and Databricks.",
      "Deliver high quality consultation work at optimized cost by collaborating with project teams and customers to gather requirements.",
      "Design and document system architectures while owning client communication end to end.",
    ],
    stack: "Java, Python, Scala, Apache Spark, Spring Boot, AWS, Azure, Databricks, Kubernetes, Docker, Node.js, React, Express, Lambda, API Integration, Claude API, OpenAI, MCP, Pinecone, LLMs, Generative AI, Machine Learning, Delta Lake, PySpark",
  },
  {
    name: "Nasdaq Inc",
    title: "Lead Software Engineer, Data Lake Applications",
    location: "Toronto, Canada",
    start: "Sep 2021",
    end: "Aug 2024",
    bullets: [
      "Re-architected data lake components to cut runtime 8X, from 24 hours down to 3 hours, saving hundreds of dollars per day.",
      "Built business-critical analytical reporting applications supporting live trading data ingestion into an AWS data lake at minimal cloud operational cost.",
      "Optimized existing architecture and components to hold SLAs as the volume of ingested data increased.",
      "Mentored team members to in-depth knowledge of business applications and guided their delivery.",
      "Gathered new customer requirements, provided estimates, designed architecture, and built common components with cross-functional stakeholders.",
    ],
    stack: "Java, Scala, Apache Spark, Databricks, Spring Boot, AWS Redshift, AWS Glue, JIRA, Confluence, AngularJS, EKS, Docker, PySpark",
  },
  {
    name: "Canvass Analytics",
    title: "Sr. Software Engineer, Product R&D Engineering",
    location: "Toronto, Canada",
    start: "Jul 2019",
    end: "Jul 2021",
    bullets: [
      "Cut cloud infrastructure cost 40% by reducing container image size and implementing auto scaling techniques.",
      "Reduced feature deliverable timeframe from months to weeks through a new architecture and a simplified design.",
      "Led multiple data engineering initiatives and implemented a well-architected data pipeline.",
      "Onboarded and curated data from different data sources to make it ready for machine learning algorithms.",
    ],
    stack: "Java, Python, Docker, Kafka, Kubernetes, GitHub, React, Azure, CircleCI, Kubeflow, Microservices",
  },
  {
    name: "J P Morgan India Services Pvt Ltd",
    title: "Associate, Big Data Applications",
    location: "Bangalore, India",
    start: "Jul 2018",
    end: "Apr 2019",
    bullets: [
      "Improved existing job performance 2X, raising overall efficiency of the on-premise Cloudera cluster.",
      "Designed a reconciliation framework that ensured smooth migration from legacy Operational Risk and Analytics jobs to a big data stack and HDFS data lake.",
      "Built business-critical applications supporting live streaming and historical data migration into the data lake.",
    ],
    stack: "Java, Scala, Apache Spark, Databricks, Kafka, Hive, Hadoop MapReduce, Cloudera, Hadoop HDFS, HBase",
  },
  {
    name: "Impetus Infotech India Pvt Ltd",
    title: "Senior Software Engineer, Big Data Applications",
    location: "Bangalore, India",
    start: "Dec 2016",
    end: "Jul 2018",
    bullets: [
      "Built a machine learning model predicting heart disease for a person from historical and family data with 90% accuracy.",
      "Delivered a real time data ingestion pipeline and sentiment analysis model for a giant bank using Twitter as the source of information.",
      "Built a data generation component that enhanced the capabilities of an existing product.",
      "Mentored team members and provided reusable big data solutions to end users.",
    ],
    stack: "Java, Scala, Hive, Spark, Databricks, Kafka, HBase, NLP, Zeppelin, Hadoop MapReduce, HDFS",
    projects: "IDW, Heart Disease Analysis, Twitter NLP",
  },
  {
    name: "Infosys Ltd",
    title: "Technology Analyst, Java Applications",
    location: "Pune, India",
    start: "Feb 2015",
    end: "Nov 2016",
    bullets: [
      "Compressed BMW manual files up to 75% in size with a customized algorithm and user interface for identifying and removing duplicate data.",
      "Improved team efficiency 30% by creating a generic report generation and archiving framework for Toyota Europe in less than a month.",
      "Delivered a Warranty Parts Portal for Volkswagen USA that centralized the data repository between dealers and corporate users and reported process and inventory in real time.",
      "Built core modules to validate vehicle details, identify missing profiles on GUI, and provide coverage metrics for an automobile giant.",
    ],
    stack: "Java, J2EE, Spring MVC, Spring Security, jQuery, Maven, PostgreSQL, MySQL, EJB, JSF",
    projects: "IBA-TA, IBA-DPO, Real Time Inventory Management, Warranty Parts Portal",
  },
  {
    name: "Rishabh Software Pvt Ltd",
    title: "Software Engineer, Java Applications",
    location: "Vadodara, India",
    start: "Jun 2012",
    end: "Jan 2015",
    bullets: [
      "Migrated a legacy XML based system to a properties and database based system with 98% success rate in the first iteration for a USA based school, True North Logic.",
      "Increased manufacturing efficiency 20% with an ERP solution that centralized sales, inventory management, and purchasing.",
      "Delivered a GPS tracking SaaS platform managing 1000s of vehicles with live fleet tracking, location tracking, theft detection, geo fencing, and alert monitoring for a UAE customer.",
      "Led a small team through a successful project migration using Spring and J2EE.",
    ],
    stack: "Java, J2EE, Spring MVC, Hibernate, Spring Security, jQuery, Maven, MySQL, Jasper Reports, MSSQL",
    projects: "ERP Solution, True North Logic, GPS Tracking System",
  },
]

const Entry = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 14px;
  padding: 16px 0;
  border-bottom: 1px dashed ${props => props.theme.colours.border};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    gap: 2px;
  }
`

const Stamp = styled.div`
  color: ${props => props.theme.colours.textFaint};
  white-space: nowrap;
  font-size: 0.82rem;
  padding-top: 2px;
`

const Body = styled.div`
  grid-column: 2;

  @media (max-width: 620px) {
    grid-column: 1;
  }
`

const Head = styled.div`
  .title {
    color: ${props => props.theme.colours.text};
    font-weight: 700;
  }
  .at {
    color: ${props => props.theme.colours.textFaint};
  }
  .company {
    color: ${props => props.theme.colours.path};
  }
  .location {
    color: ${props => props.theme.colours.textFaint};
    font-size: 0.82rem;
  }
`

const Bullets = styled.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
`

const Bullet = styled.li`
  display: flex;
  gap: 8px;
  margin-bottom: 5px;
  color: ${props => props.theme.colours.textMuted};
  font-size: 0.88rem;

  &::before {
    content: ">";
    color: ${props => props.theme.colours.string};
    flex-shrink: 0;
  }
`

const Meta = styled.div`
  margin-top: 10px;
  font-size: 0.82rem;
  color: ${props => props.theme.colours.textFaint};

  .label {
    color: ${props => props.theme.colours.keyword};
  }
  .stack {
    color: ${props => props.theme.colours.path};
  }
`

const Experience = () => {
  return (
    <ContentContainer id="experience">
      <SectionTitle file="experience.log">
        tail -n 100, newest first
      </SectionTitle>
      <Wrapper>
        <TypedTerminal fileName="experience.log" command="tail -f experience.log" sectionId="experience">
          {companyDetails.map((role, i) => (
            <Entry key={i}>
              <Stamp>
                [{role.start} &rarr; {role.end}]
              </Stamp>
              <Body>
                <Head>
                  <span className="title">{role.title}</span>{" "}
                  <span className="at">@</span>{" "}
                  <span className="company">{role.name}</span>
                  {role.location ? (
                    <span className="location"> · {role.location}</span>
                  ) : null}
                </Head>

                <Bullets>
                  {role.bullets.map((line, bi) => (
                    <Bullet key={bi}>
                      <span>{line}</span>
                    </Bullet>
                  ))}
                </Bullets>

                {role.stack ? (
                  <Meta>
                    <span className="label"># stack: </span>
                    <span className="stack">{role.stack}</span>
                  </Meta>
                ) : null}

                {role.projects ? (
                  <Meta>
                    <span className="label"># projects: </span>
                    {role.projects}
                  </Meta>
                ) : null}
              </Body>
            </Entry>
          ))}
        </TypedTerminal>
      </Wrapper>
    </ContentContainer>
  )
}

export default Experience
