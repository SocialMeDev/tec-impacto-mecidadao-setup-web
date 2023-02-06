import { FC, memo } from 'react'
import { Stack, Heading, Text, SimpleGrid, Box } from '@chakra-ui/react'

import ImageItem from './components/ImageItem'
import { useUploadImage } from '@lib/components/uploads/UploadImage/context/Provider'
import { Image } from '@lib/components/uploads/UploadImage/types'

type Props = {
  imageToUpdate: Image | undefined
  handleSetImageToUpdate: (newImage: Image) => void
}

const ImageList: FC<Props> = ({ imageToUpdate, handleSetImageToUpdate }) => {
  const { images } = useUploadImage()

  return (
    <Stack px={2}>
      <Stack spacing={0}>
        <Heading size="md">Minhas fotos</Heading>
        <Text>Clique em uma imagem e no botão respectivamente para trocar a foto atual</Text>
      </Stack>

      <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 4 }}>
        {images.map((item) => (
          <Box key={item.url} onClick={() => handleSetImageToUpdate(item)}>
            <ImageItem image={item} imageToUpdate={imageToUpdate} />
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default memo(ImageList)
