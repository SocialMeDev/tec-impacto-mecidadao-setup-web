import { FC, memo } from 'react'
import { Box, Stack, Image as ImageComponent } from '@chakra-ui/react'

import DeleteButton from './components/DeleteButton'
import { Image } from 'lib/components/uploads/UploadImage/types'
import { useUploadImage } from 'lib/components/uploads/UploadImage/context/Provider'

type Props = {
  image: Image
  imageToUpdate: Image | undefined
}

const ImageItem: FC<Props> = ({ image, imageToUpdate }) => {
  const { size } = useUploadImage()

  const isActive = imageToUpdate === image

  return (
    <Box mb={4} width={size} height={size} position="relative">
      <Stack
        tabIndex={0}
        width={size}
        height={size}
        className="accessible"
        borderWidth="3px"
        rounded="none"
        borderColor={isActive ? 'primary' : 'borderColor'}
        _hover={{ borderColor: 'primary' }}
      >
        <ImageComponent loading="lazy" src={image.url} alt="Imagem dinâmica" />
      </Stack>

      <DeleteButton image={image} />
    </Box>
  )
}

export default memo(ImageItem)
