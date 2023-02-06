import { memo } from 'react'
import { Stack, Heading, Flex } from '@chakra-ui/react'

import Device from './components/Device'
import TakePicture from './components/TakePicture'

function WaysToUpload() {
  return (
    <Stack px={2} mb={4}>
      <Heading size="md">Nova imagem</Heading>

      <Flex gap={4}>
        <Device />

        <TakePicture />
      </Flex>
    </Stack>
  )
}

export default memo(WaysToUpload)
