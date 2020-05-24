import React from "react"
import styled from "styled-components"

export const CardContainer = styled.div`
  border: ${props => props.theme.colours.sidebar.background};
`

export const CardTitle = styled.h4`
  color: ${props => props.theme.colours.sidebar.background};
`

export const CardSubTitle = styled.div`
  color: ${props => props.theme.colours.sidebar.background};
`

const Card = ({ cardDetails }) => {
  return (
    <CardContainer className="shadow">
      <div className="card-body">
        <CardTitle>
          <i className={"fa fa-" + cardDetails.icon} aria-hidden="true"></i>{" "}
          {cardDetails.name}
        </CardTitle>
        <CardSubTitle>{cardDetails.title}</CardSubTitle>
        <p>
          {cardDetails.start} - {cardDetails.end}
        </p>
        {cardDetails.summary && <p>{cardDetails.summary}</p>}
      </div>
    </CardContainer>
  )
}

export default Card
