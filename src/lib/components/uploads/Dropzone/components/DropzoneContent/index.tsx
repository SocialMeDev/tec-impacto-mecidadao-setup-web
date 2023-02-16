import { FC, memo } from 'react'
import { VStack, Heading, Text, useColorModeValue } from '@chakra-ui/react'

import { CloudUpload } from '@lib/components/icons'
import { convertBytesNumberToString } from '@lib/utils/transforms/number'

type Props = {
  acceptFiles: string[]
  maxSize: number
}

const DropzoneContent: FC<Props> = ({ maxSize, acceptFiles }) => {
  return (
    <VStack>
      <CloudUpload
        transition="all 250ms"
        color={useColorModeValue('gray.400', 'gray.600')}
        boxSize={{ base: 8, sm: 8, md: 12, lg: 12 }}
      />
      <VStack>
        <Heading fontWeight="500" as="h1" textAlign="center" size="md">
          Clique ou arraste um arquivo
        </Heading>

        <VStack spacing={0}>
          {maxSize !== 0 && (
            <Text textAlign="center" color="dark">
              Tamanho máximo dos arquivos: {convertBytesNumberToString(maxSize)}
            </Text>
          )}
          {acceptFiles.length !== 0 && (
            <Text textAlign="center" color="dark">
              Arquivos permitidos: {acceptFiles.join(', ')}
            </Text>
          )}
        </VStack>
      </VStack>
    </VStack>
  )
}

export default memo(DropzoneContent)
