import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 8px;
`
const Bar = styled.div`
	background-color: ${props => props.theme.colours.sidebar.background};
	width: ${props=> props.percent}%;
`

const Progressbar = ({ percent }) => {
  return (
    <Container className="progress">
			<Bar
				percent={percent}
        className="progress-bar"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      ></Bar>
    </Container>
  )
}

export default Progressbar
