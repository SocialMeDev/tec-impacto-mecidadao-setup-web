import { memo, useMemo, Fragment, ReactElement } from 'react'
import { Box, IconButton, Modal, ModalCloseButton, ModalOverlay, ModalContent } from '@chakra-ui/react'

import { PhotoCamera } from '@lib/components/icons'
import CropperModal from './views/CropperModal'
import Gallery from './views/Gallery'
import WebcamPreview from './views/WebcamPreview'
import { useUploadImage } from '@lib/components/uploads/UploadImage/context/Provider'

type IndexeComponent = {
  [index: string]: ReactElement
}

function UploadContent() {
  const { isOpen, image, closeModal, openModal, view } = useUploadImage()

  const Component = useMemo(() => {
    const components: IndexeComponent = {
      Gallery: <Gallery />,
      Cropper: <CropperModal />,
      Webcan: <WebcamPreview />,
    }

    return components[view]
  }, [view])

  return (
    <Fragment>
      {image.fileUrl && (
        <Box position="absolute" bottom={0} right={0}>
          <IconButton
            borderWidth="2px"
            borderColor="light"
            aria-label="Abrir galeria de imagens"
            icon={<PhotoCamera />}
            rounded="full"
            variant="solid"
            onClick={openModal}
          />
        </Box>
      )}

      <Modal variant="responsive" blockScrollOnMount={false} isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />

        <ModalContent mt={10}>
          <ModalCloseButton />
          {Component}
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default memo(UploadContent)
