import React from "react"
import styled from "styled-components"
import Card from "./Card"

const TimelineBar = styled.span`
	background: ${props => props.theme.colours.sidebar.background};
`

export const RowLine = ({ noborder }) => {
  return (
    <div className="row h-50">
      <div className={noborder ? "col" : "col border-right"}>&nbsp;</div>
      <div className="col">&nbsp;</div>
    </div>
  )
}

export const Circle = () => {
  return (
		<h5 className="m-2">
			<TimelineBar> &nbsp; </TimelineBar>
    </h5>
  )
}

export const CardContainer = ({ details }) => {
  return (
    <div className="col-sm py-2">
			<Card cardDetails={details} />
    </div>
  )
}

export const CardRow = ({ isFirst, isLast }) => {
  const firstOrder = (
    <>
      <RowLine noborder />
      <Circle />
      <RowLine />
    </>
  )
  const lastOrder = (
    <>
      <RowLine />
      <Circle />
      <RowLine noborder />
    </>
  )
  const middleOrder = (
    <>
      <RowLine />
      <Circle />
      <RowLine />
    </>
  )
  return (
    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
      {isFirst ? firstOrder : isLast ? lastOrder : middleOrder}
    </div>
  )
}

export const EmptyCard = () => <div className="col-sm"> </div>

export const Timeline = ({ details, isLeft, isFirst, isLast }) => {
  const leftOrder = (
    <>
      <CardContainer details={details} /> <CardRow isFirst={isFirst} isLast={isLast} />
      <EmptyCard />
    </>
  )
  const rightOrder = (
    <>
      <EmptyCard /> <CardRow isFirst={isFirst} isLast={isLast} />
      <CardContainer details={details} />
    </>
  )
  return <div className="row no-gutters">{isLeft ? leftOrder : rightOrder}</div>
}

