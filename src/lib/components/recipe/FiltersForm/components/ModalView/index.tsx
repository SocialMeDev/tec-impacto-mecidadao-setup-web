import { FC, FormEvent, memo, ReactElement } from 'react'
import {
  Flex,
  Text,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from '@chakra-ui/react'
import { useFiltersForm } from '../../context/FiltersFormContext/Provider'

type Props = {
  Body: ReactElement
  Footer: ReactElement
}

const FiltersFormModalView: FC<Props> = ({ Body, Footer }) => {
  const { title, subTitle, isOpen, onClose, onFilter } = useFiltersForm()

  function handleFormPreventDefault(event: FormEvent) {
    event.preventDefault()
    onFilter()
  }

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <Flex as="form" onSubmit={handleFormPreventDefault}>
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <Text>{subTitle}</Text>
            <Heading size="md">{title}</Heading>
          </ModalHeader>

          <ModalBody>{Body}</ModalBody>

          <ModalFooter>{Footer}</ModalFooter>
        </ModalContent>
      </Flex>
    </Modal>
  )
}

export default memo(FiltersFormModalView)
