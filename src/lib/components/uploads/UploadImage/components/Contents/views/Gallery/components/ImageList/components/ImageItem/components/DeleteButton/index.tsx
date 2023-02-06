import { FC, memo, useState } from 'react'
import { Box } from '@chakra-ui/react'

import { DeleteButton } from '@lib/components'
import { useUploadImage } from '@lib/components/uploads/UploadImage/context/Provider'
import { Image } from '@lib/components/uploads/UploadImage/types'

type Props = {
  image: Image
}

const DeleteImageButton: FC<Props> = ({ image }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { onDelete } = useUploadImage()

  const handleOnDelete = async () => {
    setIsLoading(true)
    const isSuccess = await onDelete(image.avatarId)
    setIsLoading(false)
    return isSuccess
  }

  return (
    <Box position="absolute" bottom={-3} right={-3}>
      <DeleteButton
        isLoading={isLoading}
        aria-label="Deletar uma imagem"
        description="Voçê perderá esta imagem para sempre"
        onDelete={handleOnDelete}
        variant="solid"
        color="light"
        colorScheme="red"
        rounded="full"
      />
    </Box>
  )
}

export default memo(DeleteImageButton)
