import { FC, FormEvent, memo, ReactElement } from 'react'
import {
  Flex,
  Text,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
} from '@chakra-ui/react'

import { useFiltersForm } from '../../context/FiltersFormContext/Provider'

type Props = {
  Body: ReactElement
  Footer: ReactElement
}

const FiltersFormDrawerView: FC<Props> = ({ Body, Footer }) => {
  const { title, subTitle, isOpen, onClose, onFilter } = useFiltersForm()

  function handleFormPreventDefault(event: FormEvent) {
    event.preventDefault()
    onFilter()
  }

  return (
    <Drawer blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <Flex as="form" onSubmit={handleFormPreventDefault}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text>{subTitle}</Text>
            <Heading size="md">{title}</Heading>
          </DrawerHeader>

          <DrawerBody>{Body}</DrawerBody>

          <DrawerFooter>{Footer}</DrawerFooter>
        </DrawerContent>
      </Flex>
    </Drawer>
  )
}

export default memo(FiltersFormDrawerView)
