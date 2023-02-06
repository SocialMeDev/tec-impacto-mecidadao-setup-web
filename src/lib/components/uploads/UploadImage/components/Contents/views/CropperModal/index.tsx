import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Box, Center, Image, Grid, Heading, ModalBody, ModalHeader } from '@chakra-ui/react'
import Cropper from 'cropperjs'

import CropperConfiguratons from './components/CropperConfiguratons'
import { useUploadImage } from '@lib/components/uploads/UploadImage/context/Provider'

function CropperModal() {
  const { image } = useUploadImage()

  const imageRef = useRef<HTMLImageElement | null>(null)
  const imagePreviewRef = useRef<HTMLImageElement | null>(null)

  const [cropper, setCropper] = useState<Cropper | null>(null)

  const handleCropImage = useCallback(
    (event: any) => {
      const newCropper = event.target.cropper

      const { naturalHeight, naturalWidth } = newCropper.getImageData()

      let width = 160
      let height = 160

      if (naturalWidth < width) width = naturalWidth
      if (naturalHeight < height) height = naturalHeight

      const canvas = newCropper.getCroppedCanvas({ width, height })

      const imageInCanvas = canvas.toDataURL()

      if (imagePreviewRef.current) imagePreviewRef.current.src = imageInCanvas
    },
    [cropper]
  )

  const cropperOptions: Cropper.Options = useMemo(() => {
    return {
      dragMode: 'move',
      viewMode: 2,
      modal: false,
      autoCropArea: 1,
      minContainerWidth: 100,
      minContainerHeight: 100,
      background: false,
      aspectRatio: 1,
      crop: (event) => {
        handleCropImage(event)
      },
    }
  }, [handleCropImage])

  useEffect(() => {
    if (imageRef.current && !cropper) {
      const cropper = new Cropper(imageRef.current, cropperOptions)
      setCropper(cropper)
    }
  }, [cropperOptions])

  const onDownload = () => {
    const a = document.createElement('a')
    if (image.file) a.download = image.file.name
    if (imagePreviewRef.current) a.href = imagePreviewRef.current.src
    a.click()
  }

  return (
    <>
      <ModalHeader>
        <Heading size="md">Recortando imagem</Heading>
      </ModalHeader>

      <ModalBody p={0}>
        <Grid height="100%" templateColumns={{ base: 'none', md: '50% 50%', lg: '70% 30%' }}>
          <Center
            py={{ base: 10, sm: 6, md: 2 }}
            width="100%"
            height="100%"
            borderRightWidth="1px"
            borderColor="borderColor"
            bg="bgContainer"
          >
            <Box bg="white">
              <Image maxWidth="400px" maxHeight="400px" src={image.fileUrl} ref={imageRef} alt="Imagem dinâmica" />
            </Box>
          </Center>

          <CropperConfiguratons ref={imagePreviewRef} cropper={cropper} onDownload={onDownload} />
        </Grid>
      </ModalBody>
    </>
  )
}

export default memo(CropperModal)
