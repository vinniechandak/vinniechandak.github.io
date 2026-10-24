import styled from "styled-components"

// A content section rendered as a "file" in the editor.
export const ContentContainer = styled.section`
  scroll-margin-top: 24px;
  margin: 0 auto 72px;
  max-width: ${props => props.theme.layout.maxContent};

  &:last-child {
    margin-bottom: 24px;
  }
`

export const Wrapper = styled.div`
  padding-top: 20px;
`
