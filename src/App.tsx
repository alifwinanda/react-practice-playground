import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import styled from "styled-components"
import Accordion from "./components/Accordion"

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

function App() {
  const vtubers = [
    {
      name: "Suisei",
      description:
        "A stellar singer and performer, Suisei wows fans with her powerful voice and charismatic stage presence. She's a true idol in the VTuber world.",
    },
    {
      name: "Fauna",
      description:
        "Known for her soothing ASMR and calm demeanor, Fauna creates a peaceful haven for fans seeking comfort and relaxation.",
    },
    {
      name: "Zeta",
      description:
        "Clever and witty, Zeta charms her audience with sharp humor and engaging gameplay, making every stream a delight.",
    },
    {
      name: "Nerissa",
      description:
        "A dynamic personality with an energetic vibe, Nerissa captivates with her vibrant performances and lively interactions.",
    },
  ]

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
      <h1>Accordions</h1>
      <AccordionWrapper>
        {vtubers.map((key) => (
          <Accordion content={key.description} title={key.name} />
        ))}
      </AccordionWrapper>
    </>
  )
}

export default App
