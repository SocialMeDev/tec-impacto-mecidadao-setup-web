import { memo, forwardRef, useState } from 'react'
import Cropper from 'cropperjs'
import { Flex, Stack, Center, Image, Text, Button } from '@chakra-ui/react'

import ZoomInOut from './components/ZoomInOut'
import Rotate from './components/Rotate'
import Reverse from './components/Reverse'
import Reset from './components/Reset'
import { useUploadImage } from '@lib/components/uploads/UploadImage/context/Provider'

type Ref = HTMLImageElement | null

type Props = {
  cropper: Cropper
  onDownload: () => void
}

const CropperConfiguratons = forwardRef<Ref, Props>(({ cropper, onDownload }, ref) => {
  const { image, setImage, onUpload, closeModal } = useUploadImage()

  const [isLoading, setIsLoading] = useState(false)

  const handleOnUpload = async () => {
    if (!image.file) return

    setIsLoading(true)
    const isSuccess = await onUpload(image.file)
    if (isSuccess) {
      setImage((oldImage) => {
        return { ...oldImage, fileUrl: ref.current.src }
      })
      closeModal()
    }
    setIsLoading(false)
  }

  return (
    <Stack p={4} align="center" justify="space-between" spacing={0}>
      <Flex w="100%" direction="column" align="center" justify="center" gap={2}>
        <Text>Preview da imagem</Text>

        <Center mb={4} w="max-content" flexDirection="column" borderWidth="3px" borderColor="primary" bg="primary">
          <Image maxWidth="150px" maxHeight="150px" ref={ref} alt="Preview da imagem" />
        </Center>

        <Reset cropper={cropper} />
        <ZoomInOut cropper={cropper} />
        <Rotate cropper={cropper} />
        <Reverse cropper={cropper} />
      </Flex>

      <Stack pt={4} w="100%" align="center" justify="center">
        <Button variant="outline" w="100%" onClick={onDownload}>
          Baixar
        </Button>
        <Button isLoading={isLoading} w="100%" onClick={handleOnUpload}>
          Salvar
        </Button>
      </Stack>
    </Stack>
  )
})

export default memo(CropperConfiguratons)
