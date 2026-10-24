import React from "react"
import styled from "styled-components"

const CardBox = styled.div`
  padding: 16px 18px;
  background: ${props => props.theme.colours.surface};
  border: 1px solid ${props => props.theme.colours.border};
  border-left: 3px solid ${props => props.theme.colours.prompt};
  border-radius: ${props => props.theme.radius.md};
`

const Title = styled.div`
  color: ${props => props.theme.colours.text};
  font-weight: 700;
  font-size: 1rem;
`

const Subtitle = styled.div`
  color: ${props => props.theme.colours.path};
  font-size: 0.9rem;
  margin-top: 2px;
`

const Range = styled.div`
  color: ${props => props.theme.colours.textFaint};
  font-size: 0.82rem;
  margin-top: 6px;
`

const Summary = styled.div`
  color: ${props => props.theme.colours.textMuted};
  font-size: 0.88rem;
  margin-top: 8px;
  word-break: break-word;
`

const Card = ({ cardDetails }) => {
  const { name, title, start, end, meta, summary } = cardDetails
  // `meta` is a free-form date line (e.g. "Valid through Jul 2028"); otherwise
  // fall back to a start -> end range.
  const dateLine = meta || (start && end ? `${start} → ${end}` : start || end)
  return (
    <CardBox>
      <Title>{name}</Title>
      {title ? <Subtitle>{title}</Subtitle> : null}
      {dateLine ? <Range>{dateLine}</Range> : null}
      {summary ? <Summary>{summary}</Summary> : null}
    </CardBox>
  )
}

export default Card
