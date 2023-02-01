import { FC, memo, ReactElement, useMemo } from 'react'
import { IconButton, Button, useDisclosure, ButtonProps } from '@chakra-ui/react'

import { Trash } from 'lib/assets/icons'
import ConfirmDeleteModal from './components/ConfirmDeleteModal'

type SelectedButton = {
  [index: string]: ReactElement
}

interface Props extends ButtonProps {
  children?: ReactElement
  title?: string
  text?: string
  description?: string
  cancelButtonText?: string
  submitButtonText?: string
  modalLogic?: boolean
  onDelete: () => Promise<boolean>
}

const DeleteButton: FC<Props> = ({
  children,
  onDelete,
  colorScheme = 'gray',
  color = 'dark',
  title = 'Você tem certeza disso?',
  text,
  description = 'Você não poderá voltar atrás',
  cancelButtonText = 'Cancelar',
  submitButtonText = 'Sim, tenho certeza',
  variant = 'ghost',
  modalLogic = true,
  ...rest
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const shouldOpenModal = () => {
    if (modalLogic) onOpen()
  }

  const buttonType = children ? 'button' : 'icon'

  const defaultButtonProps = useMemo(() => {
    return {
      colorScheme,
      variant,
      icon: <Trash color={color} />,
      onClick: shouldOpenModal,
    }
  }, [])

  const IconButtonType = () => {
    return <IconButton aria-label="Deletar" {...defaultButtonProps} {...rest} />
  }

  const ButtonType = () => {
    return (
      <Button {...defaultButtonProps} {...rest}>
        {children}
      </Button>
    )
  }

  const selectedButtonType: SelectedButton = {
    icon: <IconButtonType />,
    button: <ButtonType />,
  }

  return (
    <>
      {selectedButtonType[buttonType]}

      <ConfirmDeleteModal
        isOpen={isOpen}
        title={title}
        text={text}
        description={description}
        cancelButtonText={cancelButtonText}
        submitButtonText={submitButtonText}
        onDelete={onDelete}
        onClose={onClose}
      />
    </>
  )
}

export default memo(DeleteButton)
