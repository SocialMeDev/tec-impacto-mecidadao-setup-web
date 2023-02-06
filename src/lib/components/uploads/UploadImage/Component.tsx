import { memo } from 'react'
import { Skeleton, Stack, Image } from '@chakra-ui/react'

import Contents from './components/Contents'

import { useUploadImage } from './context/Provider'
import ImageCard from './components/ImageCard'

function UploadImageComponent() {
  const { size, rounded, image, isLoading } = useUploadImage()

  console.log('image', image)

  return (
    <>
      <Stack mb={4} w={size} h={size} rounded={rounded} position="relative">
        {image.fileUrl ? (
          <>
            <Skeleton borderWidth={2} borderColor="primary" rounded={rounded} w={size} h={size} isLoaded={!isLoading}>
              <Image loading="lazy" rounded={rounded} src={image.fileUrl} alt="Imagem dinâmica" />
            </Skeleton>
          </>
        ) : (
          <ImageCard />
        )}

        <Contents />
      </Stack>
    </>
  )
}

export default memo(UploadImageComponent)
