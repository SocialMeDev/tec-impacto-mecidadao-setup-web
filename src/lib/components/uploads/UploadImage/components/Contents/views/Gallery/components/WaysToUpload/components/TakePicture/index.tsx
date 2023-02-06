import { memo } from 'react'
import { Stack, Text } from '@chakra-ui/react'

import { CameraPhoto } from '@lib/components/icons/PhotoEdit'
import { useUploadImage } from '@lib/components/uploads/UploadImage/context/Provider'

function UploadWhenTakingPhoto() {
  const { size, setView } = useUploadImage()

  return (
    <Stack
      tabIndex={0}
      className="accessible"
      p={2}
      width={size}
      height={size}
      onClick={() => setView('Webcan')}
      border="1px dashed"
      borderColor="borderColor"
      align="center"
      justify="center"
      _hover={{ color: 'primary' }}
    >
      <Stack align="center" spacing={0}>
        <CameraPhoto boxSize={8} />
        <Text>Tirar foto</Text>
      </Stack>
    </Stack>
  )
}

export default memo(UploadWhenTakingPhoto)
