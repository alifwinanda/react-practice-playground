import { useState } from "react"
import Modal from "../../../components/Modal"
import { Button, Typography } from "@mui/material"

const ModalDemoPage = () => {
  const [isModalOpen, setIsOpenModal] = useState(false)
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }
  return (
    <>
      <Button variant="contained" onClick={() => setIsOpenModal(true)}>
        Open Modal
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClickPrimaryButton={handleCloseModal}
        primaryButtonText="YES"
        title="Is Suichan Cute"
        modalContent={
          <Typography>
            A stellar singer and performer, Suisei wows fans with her powerful
            voice and charismatic stage presence. She's a true idol in the
            VTuber world.
          </Typography>
        }
        onClickSecondaryButton={handleCloseModal}
        secondaryButtonText="Yes."
        onClose={handleCloseModal}
      />
    </>
  )
}

export default ModalDemoPage
