import styled from "styled-components"
import Accordion from "../../components/Accordion"

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

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

function AccordionDemo() {
  return (
    <>
      <h1>Accordions</h1>
      <AccordionWrapper>
        {vtubers.map((key) => (
          <Accordion content={key.description} title={key.name} />
        ))}
      </AccordionWrapper>
    </>
  )
}

export default AccordionDemo
