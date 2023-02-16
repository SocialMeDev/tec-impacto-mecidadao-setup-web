import { FC, memo, useState } from 'react'
import {
  Box,
  Button,
  Icon,
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Stack,
} from '@chakra-ui/react'

import { Trash } from '@lib/components/icons'

interface Props {
  isOpen: boolean
  title?: string
  text?: string
  description?: string
  cancelButtonText?: string
  submitButtonText?: string
  onClose: () => void
  onDelete: () => Promise<boolean>
}

const ConfirmDeleteModal: FC<Props> = ({
  isOpen,
  onClose,
  onDelete,
  title = 'Você tem certeza disso?',
  text,
  description = 'Você não poderá voltar atrás',
  cancelButtonText = 'Cancelar',
  submitButtonText = 'Sim, tenho certeza',
}) => {
  const [loadingButton, setLoadingButton] = useState(false)

  async function handleDeleteAction() {
    setLoadingButton(true)
    const isSuccess = await onDelete()

    if (isSuccess) {
      onClose()
      setLoadingButton(false)
    }

    setLoadingButton(false)
  }

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Stack direction="column" align="center">
            <Icon color="danger" as={Trash} boxSize="16" />
            <Heading size="md">{title}</Heading>

            <Box textAlign="center">
              {text && <Text textAlign="center">{text}</Text>}
              <Text color="danger">{description}</Text>
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} colorScheme="gray" onClick={onClose}>
            {cancelButtonText}
          </Button>
          <Button onClick={handleDeleteAction} isLoading={loadingButton} variant="solid" colorScheme="red">
            {submitButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default memo(ConfirmDeleteModal)
