import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import styled from "styled-components"
import { useNavigate } from "react-router"

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
`

const Button = styled.button``

function App() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Component Practice and Demo</h1>
      <Flex>
        <Button onClick={() => navigate("/accordion-demo")}>
          Accordion Demo
        </Button>
        <Button>Modal Demo</Button>
      </Flex>
    </>
  )
}

export default App
