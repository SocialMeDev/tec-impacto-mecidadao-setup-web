import { memo, useState } from 'react'
import { Tooltip, ModalFooter, Button, Heading, ModalBody, ModalHeader } from '@chakra-ui/react'

import WaysToUpload from './components/WaysToUpload'
import ImageList from './components/ImageList'
import { Image } from '@lib/components/uploads/UploadImage/types'
import { useUploadImage } from '@lib/components/uploads/UploadImage/context/Provider'

function UploadImagesGallery() {
  const [imageToUpdate, setImageToUpdate] = useState<Image>()

  const { images, onUpdate, setImage, closeModal } = useUploadImage()

  function handleSetImageToUpdate(newImage: Image) {
    setImageToUpdate(newImage)
  }

  async function updateMainImage() {
    if (!imageToUpdate) return

    const isSuccess = await onUpdate(imageToUpdate)

    if (isSuccess) {
      setImage((oldImage) => {
        return { ...oldImage, fileUrl: imageToUpdate.url }
      })
      closeModal()
    }
  }

  return (
    <>
      <ModalHeader>
        <Heading size="md">Galeria de imagens</Heading>
      </ModalHeader>

      <ModalBody>
        <WaysToUpload />

        {images.length > 0 && (
          <ImageList imageToUpdate={imageToUpdate} handleSetImageToUpdate={handleSetImageToUpdate} />
        )}
      </ModalBody>

      <ModalFooter>
        <Button variant="outline" onClick={closeModal}>
          Fechar
        </Button>

        {images.length > 0 && (
          <Tooltip isDisabled={!!imageToUpdate} placement="bottom" label="Seleciona uma imagem">
            <Button disabled={!imageToUpdate} onClick={updateMainImage}>
              Atualizar foto
            </Button>
          </Tooltip>
        )}
      </ModalFooter>
    </>
  )
}

export default memo(UploadImagesGallery)
