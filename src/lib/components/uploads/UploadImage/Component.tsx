import { memo } from 'react'
import { Skeleton, Stack, Image } from '@chakra-ui/react'

import Contents from './components/Contents'

import { useUploadImage } from './context/Provider'
import ImageCard from './components/ImageCard'

function UploadImageComponent() {
  const { size, rounded, image, isLoading } = useUploadImage()

  return (
    <>
      <Stack position="relative">
        {image.fileUrl ? (
          <>
            <Skeleton rounded={rounded} w={size} h={size} isLoaded={!isLoading}>
              <Image
                loading="lazy"
                objectFit="cover"
                height={size}
                rounded={rounded}
                src={image.fileUrl}
                alt="Imagem dinâmica"
              />
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
