import { FC, memo } from 'react'
import { Flex, IconButton, Text } from '@chakra-ui/react'

import { SpinningArrows } from '@lib/assets/icons'

type Props = {
  cropper: Cropper
}

const ResetCropperConfigs: FC<Props> = ({ cropper }) => {
  return (
    <Flex p={1} w="100%" borderBottomWidth="1px" borderColor="borderColor" justify="space-between" align="center">
      <Text>Resetar</Text>

      <IconButton
        variant="ghost"
        aria-label="Resetar alterações da imagem"
        onClick={() => cropper.reset()}
        icon={<SpinningArrows />}
      />
    </Flex>
  )
}

export default memo(ResetCropperConfigs)
