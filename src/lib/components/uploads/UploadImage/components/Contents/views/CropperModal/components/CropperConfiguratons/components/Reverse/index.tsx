import { memo, useState, useCallback, FC } from 'react'
import { Flex, IconButton, Text } from '@chakra-ui/react'

import { ArrowsHorizontalLeftRight, ArrowsVerticalUpDown } from '@lib/assets/icons'

type Props = {
  cropper: Cropper
}

const ReverseImage: FC<Props> = ({ cropper }) => {
  const [scaleX, setScaleX] = useState(-1)
  const [scaleY, setScaleY] = useState(-1)

  const onChangeScaleX = useCallback(() => {
    if (cropper.scaleX) cropper?.scaleX(scaleX)
    setScaleX(-scaleX)
  }, [cropper, scaleX])

  const onChangeScaleY = useCallback(() => {
    if (cropper.scaleY) cropper?.scaleY(scaleY)
    setScaleY(-scaleY)
  }, [cropper, scaleY])

  return (
    <Flex p={1} w="100%" borderBottomWidth="1px" borderColor="borderColor" justify="space-between" align="center">
      <Text>Inverter</Text>

      <Flex align="center" gap={2}>
        <IconButton
          variant="ghost"
          aria-label="Inverter imagem para o lado esquerdo"
          onClick={onChangeScaleX}
          icon={<ArrowsHorizontalLeftRight />}
        />

        <IconButton
          variant="ghost"
          aria-label="Inverter imagem para o lado direito"
          onClick={onChangeScaleY}
          icon={<ArrowsVerticalUpDown />}
        />
      </Flex>
    </Flex>
  )
}

export default memo(ReverseImage)
