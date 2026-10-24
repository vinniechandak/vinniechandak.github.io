import React, { useEffect, useState } from "react"
import styled from "styled-components"
import TerminalWindow from "./TerminalWindow"

const Section = styled.section`
  scroll-margin-top: 24px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${props => props.theme.layout.maxContent};
  margin: 0 auto;
  padding: 72px 0 48px;
`

// Prompt command lines — same size as the terminal body on other sections.
const Line = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
`

const Prompt = styled.span`
  color: ${props => props.theme.colours.prompt};
`

const Command = styled.span`
  color: ${props => props.theme.colours.text};
`

const Output = styled.div`
  color: ${props => props.theme.colours.textMuted};
  margin: 6px 0 20px;
`

// Big, bold name — the hero's focal point, like the preview image.
// Semantic <h1>: the single top-level heading for the page.
const Name = styled.h1`
  color: ${props => props.theme.colours.path};
  font-weight: 700;
  font-size: clamp(1.9rem, 5vw, 2.2rem);
  line-height: 1.15;
  margin: 0 0 8px;
`

// Roles sit on their own line beneath the name, mid-sized.
const Roles = styled.div`
  font-size: clamp(1.05rem, 2.2vw, 1.4rem);
  line-height: 1.5;
`

const Role = styled.span`
  color: ${props => props.theme.colours.string};
`

const Sep = styled.span`
  color: ${props => props.theme.colours.textFaint};
`

// Intro paragraph — same size as body text on other sections.
const Intro = styled.div`
  color: ${props => props.theme.colours.textMuted};
  line-height: 1.7;
  margin: 6px 0 20px;
  max-width: 62ch;
`

const Cursor = styled.span`
  display: inline-block;
  width: 9px;
  height: 1.1em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: ${props => props.theme.colours.prompt};
  animation: blink 1.1s steps(2, start) infinite;

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

// The command the hero "types" on load.
const COMMAND = "whoami"

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

const Home = () => {
  const [typed, setTyped] = useState(prefersReducedMotion() ? COMMAND : "")
  const [done, setDone] = useState(prefersReducedMotion())

  useEffect(() => {
    if (prefersReducedMotion()) return
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(COMMAND.slice(0, i))
      if (i >= COMMAND.length) {
        clearInterval(id)
        setDone(true)
      }
    }, 90)
    return () => clearInterval(id)
  }, [])

  return (
    <Section id="home" aria-label="Introduction">
      <TerminalWindow fileName="vinod@portfolio: ~">
        <Line>
          <Prompt>vinod@portfolio</Prompt>
          <span> ~ $ </span>
          <Command>{typed}</Command>
          {!done ? <Cursor aria-hidden="true" /> : null}
        </Line>

        {done ? (
          <>
            <Output>
              <Name>Vinod Chandak</Name>
              <Roles>
                <Role>Forward Deployed AI Engineer</Role>
                <Sep> · </Sep>
                <Role>AI Platform &amp; Data Engineering</Role>
                <Sep> · </Sep>
                <Role>Consultant</Role>
              </Roles>
            </Output>

            <Line>
              <Prompt>vinod@portfolio</Prompt>
              <span> ~ $ </span>
              <Command>cat intro.txt</Command>
            </Line>
            <Intro>
              AWS Certified Solutions Architect (Professional) with 14+ years
              across trading, industrial IoT, banking, and automotive. I
              prototype and ship production-ready AI platform and data
              engineering systems in Java, Scala, Python, Spark, and Databricks
              on AWS and Azure.
            </Intro>

            <Line>
              <Prompt>vinod@portfolio</Prompt>
              <span> ~ $ </span>
              <Cursor aria-hidden="true" />
            </Line>
          </>
        ) : null}
      </TerminalWindow>
    </Section>
  )
}

export default Home
