import styled from "@emotion/styled"
import { Button, Divider, Typography } from "@mui/material"
import { ReactNode } from "react"

// learned from https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: fit-content;
  min-height: 100px;
  background: white;
  color: black;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`

const ModalHeader = styled.div`
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  justify-content: center;
`

const ModalFooter = styled.div`
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
`

const ModalContent = styled.div`
  padding: 8px 0px;
`

interface ModalProps {
  isOpen?: boolean
  onClickPrimaryButton: () => void
  onClickSecondaryButton?: () => void
  onClose?: () => void
  primaryButtonText: string
  secondaryButtonText?: string
  title: string
  modalContent?: ReactNode
}

const Modal = ({
  onClickPrimaryButton,
  primaryButtonText,
  title,
  modalContent,
  isOpen,
  onClickSecondaryButton,
  secondaryButtonText,
  onClose,
}: ModalProps) => {
  const handleCloseModal = () => {
    if (onClose !== undefined) {
      onClose()
    }
  }

  return (
    <>
      {isOpen ? (
        <ModalBackground onClick={handleCloseModal}>
          <Container>
            <ModalHeader>
              <Typography fontWeight="700">{title}</Typography>
            </ModalHeader>
            <Divider />
            <ModalContent>{modalContent}</ModalContent>
            <Divider sx={{ marginTop: "auto" }} />
            <ModalFooter>
              <Button
                fullWidth
                variant="contained"
                onClick={onClickPrimaryButton}
              >
                {primaryButtonText}
              </Button>
              {secondaryButtonText ? (
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={onClickSecondaryButton}
                >
                  {secondaryButtonText}
                </Button>
              ) : null}
            </ModalFooter>
          </Container>
        </ModalBackground>
      ) : null}
    </>
  )
}

export default Modal
