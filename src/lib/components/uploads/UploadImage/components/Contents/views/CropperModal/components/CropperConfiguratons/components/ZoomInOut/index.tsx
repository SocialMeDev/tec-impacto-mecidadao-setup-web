import { FC, memo } from 'react'
import { Flex, IconButton, Text } from '@chakra-ui/react'

import { ZoomMinus, ZoomPlus } from '@lib/components/icons'

type Props = {
  cropper: Cropper
}

const ImageZommInOut: FC<Props> = ({ cropper }) => {
  return (
    <Flex p={1} w="100%" borderBottomWidth="1px" borderColor="borderColor" justify="space-between" align="center">
      <Text>Zoom</Text>

      <Flex align="center" gap={2}>
        <IconButton
          variant="ghost"
          aria-label="Aumentar o zoom"
          onClick={() => cropper.zoom(0.1)}
          icon={<ZoomPlus />}
        />

        <IconButton
          variant="ghost"
          aria-label="Diminuir o zoom"
          onClick={() => cropper.zoom(-0.1)}
          icon={<ZoomMinus />}
        />
      </Flex>
    </Flex>
  )
}

export default memo(ImageZommInOut)
