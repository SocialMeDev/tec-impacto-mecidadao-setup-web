import { memo } from 'react'
import { Stack, Text } from '@chakra-ui/react'

import { Plus } from '@lib/components/icons'
import { useUploadImage } from '@lib/components/uploads/UploadImage/context/Provider'

function UploadImageFromDevice() {
  const { size, handleOnClick } = useUploadImage()

  return (
    <Stack
      onClick={handleOnClick}
      tabIndex={0}
      className="accessible"
      p={2}
      width={size}
      height={size}
      border="1px dashed"
      borderColor="borderColor"
      align="center"
      justify="center"
      _hover={{ color: 'primary' }}
    >
      <Stack align="center" spacing={0}>
        <Plus boxSize={8} />
        <Text>Nova imagem</Text>
      </Stack>
    </Stack>
  )
}

export default memo(UploadImageFromDevice)
