import React from "react"
import styled from "styled-components"

const Window = styled.div`
  background: ${props => props.theme.colours.surface};
  border: 1px solid ${props => props.theme.colours.border};
  border-radius: ${props => props.theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 18px 40px -24px rgba(0, 0, 0, 0.7);
`

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: ${props => props.theme.colours.chrome};
  border-bottom: 1px solid ${props => props.theme.colours.border};
`

const Light = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$color};
`

const FileName = styled.span`
  margin-left: 10px;
  font-size: 0.8rem;
  color: ${props => props.theme.colours.textMuted};
`

const Body = styled.div`
  padding: 20px clamp(16px, 3vw, 26px);
  font-size: 0.92rem;
  line-height: 1.75;
  overflow-x: auto;
`

const TerminalWindow = ({ fileName, children }) => {
  return (
    <Window>
      <TitleBar>
        <Light $color="#ff5f56" />
        <Light $color="#ffbd2e" />
        <Light $color="#27c93f" />
        {fileName ? <FileName>{fileName}</FileName> : null}
      </TitleBar>
      <Body>{children}</Body>
    </Window>
  )
}

export default TerminalWindow
