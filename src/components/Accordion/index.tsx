import React, { useState } from "react"
import styled from "@emotion/styled"

// learn why styled components props behaves differently from what i learn in ralali
const Container = styled.div<{ $width?: string }>`
  background-color: turquoise;
  color: black;
  text-align: left;
  box-sizing: border-box;
  padding: 12px;
  width: ${(props) => (props.$width ? "" : "20rem")};
`

const TitleContainer = styled.div`
  font-size: 22px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`

const ContentContainer = styled.div``

interface AccordionProps {
  title: string
  content: string
  backgroundColor?: string
  width?: string
}

function Accordion({ content, title, width }: AccordionProps): JSX.Element {
  const [isActive, setIsActive] = useState(false)

  return (
    <Container $width={width}>
      <TitleContainer onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "+" : "-"}</div>
      </TitleContainer>
      {isActive ? <ContentContainer>{content}</ContentContainer> : null}
    </Container>
  )
}

export default Accordion
