import { memo } from 'react'
import { Text, VStack, Stack } from '@chakra-ui/react'

import { CloudUpload } from '@lib/assets/icons'
import { useUploadImage } from '../../context/Provider'

function ImageCard() {
  const { size, rounded, openModal } = useUploadImage()

  return (
    <Stack
      onClick={openModal}
      onKeyPress={openModal}
      width={size}
      height={size}
      tabIndex={0}
      p={1}
      className="accessible"
      border="2px dashed"
      borderColor="borderColor"
      bg="bgContainer"
      align="center"
      justify="center"
      rounded={rounded}
      _hover={{ color: 'primary', borderColor: 'primary' }}
    >
      <VStack spacing={1}>
        <CloudUpload />
        <Text>Enviar foto</Text>
      </VStack>
    </Stack>
  )
}

export default memo(ImageCard)
